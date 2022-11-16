$('#signup_form').submit(function(e) 
{

	if(validation() == '1')
	{
		e.preventDefault();
	}
	else
	{

	}

});

function validation()
{

	error = '';

	if($('#first_name').val() != '') 
	{
		$('#first_name').removeClass('is-invalid');
		$('#first_name').addClass('is-valid');
		$('#first_name').next().addClass('hidden');
	}
	else
	{
		$('#first_name').removeClass('is-valid');
		$('#first_name').addClass('is-invalid');
		$('#first_name').next().removeClass('hidden');
		error = '1';
	}

	if($('#last_name').val() != '') 
	{
		$('#last_name').removeClass('is-invalid');
		$('#last_name').addClass('is-valid');
		$('#last_name').next().addClass('hidden');
	}
	else
	{
		$('#last_name').removeClass('is-valid');
		$('#last_name').addClass('is-invalid');
		$('#last_name').next().removeClass('hidden');
		error = '1';
	}

	if($('#email').val() != '' && validateEmail($('#email').val())) 
	{
		$('#email').removeClass('is-invalid');
		$('#email').addClass('is-valid');
		$('#email').next().addClass('hidden');
	}
	else
	{
		$('#email').removeClass('is-valid');
		$('#email').addClass('is-invalid');
		$('#email').next().removeClass('hidden');
		error = '1';
	}

	if($('#password').val() != '') 
	{
		$('#password').removeClass('is-invalid');
		$('#password').addClass('is-valid');
		$('#password').next().addClass('hidden');
	}
	else
	{
		$('#password').removeClass('is-valid');
		$('#password').addClass('is-invalid');
		$('#password').next().removeClass('hidden');
		error = '1';
	}

	if($('#area_code').val() != '') 
	{
		$('#area_code').removeClass('is-invalid');
		$('#area_code').addClass('is-valid');
		$('#area_code').next().addClass('hidden');
	}
	else
	{
		$('#area_code').removeClass('is-valid');
		$('#area_code').addClass('is-invalid');
		$('#area_code').next().removeClass('hidden');
		error = '1';
	}

	if($('#phone').val() != '' && validatePhone($('#phone').val())) 
	{
		$('#phone').removeClass('is-invalid');
		$('#phone').addClass('is-valid');
		$('#phone').next().addClass('hidden');
	}
	else
	{
		$('#phone').removeClass('is-valid');
		$('#phone').addClass('is-invalid');
		$('#phone').next().removeClass('hidden');
		error = '1';
	}

	return error;
}

function validateEmail(email) 
{
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test(email);
}

function validatePhone(phone)
{
	var phoneReg = /[0-9\-\(\)\s]+/;
  	return phoneReg.test(phone);
	
}

