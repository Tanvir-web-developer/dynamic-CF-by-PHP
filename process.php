<?php 

	if (isset($_POST['btn-send'])) {
		
		$userName = $_POST['name'];
		$userEmail = $_POST['email'];
		$userSubject = $_POST['subject'];
		$msg = $_POST['msg'];

		if (empty($userName) || empty($userEmail) || empty($userSubject) || empty($msg)) {
			header('location:index.php?error');
		} else{
			$to = "tanvirtanuu@gmail.com";
			if (mail($to, $userSubject, $msg, $userEmail)) {
				header("location:index.php?success");
			}
		}
	} else{
		header("location:index.php");
	}


