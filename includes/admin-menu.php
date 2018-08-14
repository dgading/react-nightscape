<?php

add_action( 'admin_menu', 'react_nightscape_options_menu' );

function react_nightscape_options_menu() {
	add_options_page( 'React Nightscape Options', 'React Nightscape', 'manage_options', 'react-nightscape', 'react_nightscape_options_page' );
}

function react_nightscape_options_page() {
	if ( !current_user_can( 'manage_options' ) )  {
		wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
  }
  ?>
	<h2>React Nightscape Options</h2>
  <form action="options.php" method="post">
  <?php settings_fields('react_nightscape_options'); ?>
  <?php do_settings_sections('react_nightscape'); ?>
 
<input name="Submit" type="submit" value="<?php esc_attr_e('Save Changes'); ?>" />
</form></div>
<?php
}

add_action( 'admin_init', 'plugin_admin_init');
function plugin_admin_init() {
  register_setting( 'react_nightscape_options', 'react_nightscape_options', 'react_nightscape_options_validate');
  add_settings_section('react_nightscape_main', 'Main Settings', 'main_section_text', 'react_nightscape');
  add_settings_field('react_nightscape_fireflies_count', 'Firefly Count', 'firefly_setting_string', 'react_nightscape', 'react_nightscape_main');
}

function main_section_text() {
  echo '<p>Main description here.</p>';
}

function firefly_setting_string() {
  $options = get_option('react_nightscape_options');
  echo "<input id='react_nightscape_fireflies_count' name='react_nightscape_options[fireflyCount]' size='40' type='text' value='{$options['fireflyCount']}' />";
}

function react_nightscape_options_validate($input) {
  $newinput['fireflyCount'] = trim($input['fireflyCount']);
  if(!preg_match('/^[a-z0-9]{1}$/i', $newinput['fireflyCount'])) {
  $newinput['fireflyCount'] = '';
  }
  return $newinput;
}
?>
