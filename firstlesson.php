<?php 

	$h = date('H');

//	$h = 15;

	$h = $h / 6;

?>
<!DOCTYPE html>
<html>
<head>
	<title>Maraphon, day 1-2</title>
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script type="text/javascript" src="js/script.js"></script>
	<style type="text/css">
	body{
		background-image: url('img/<?php echo (int)$h;?>.jpg');
		color: #eee;
	}

	</style>
	
</head>
<body><!-- Не отображается картинка-->
	<h2>Test</h2>	
	<h3>
		<?php if( 0 === ( (int) $h) ){
				echo 'Nigth!';
			}
			elseif (1 === ( (int) $h)) {
				echo 'Morning!';
			}
			elseif (2 === ( (int) $h)) {
				echo 'Day!';
			}
			else{
				echo 'Evening!';
			}

			?>

	</h3>
</body>
</html>