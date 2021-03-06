app.controller('accountsControl', function($scope, $http){
		$scope.show = () => {
				$http.post('assets/php/searchAccounts/index.php').then(function(response) {
				var accounts = response.data;
				console.log(accounts);
				$scope.results = accounts;
			}, function(response) {
				alert("Ha ocurrido un error al cargar las Cuentas");
				return;
			});
		};
		$scope.search = () => {
				var name = document.getElementsByName('name')[0].value;
				var tel = document.getElementsByName('tel')[0].value;
				var contactName = document.getElementsByName('cont_name')[0].value;
				if (name == '' && tel == '' && contactName == '') {
								$scope.show();	
				}				
			
			$http.post('assets/php/searchAccountsFilters/index.php', {
				name: name,
				tel: tel,
				cName: contactName
			}).then((response) => {
				console.log(response.data);
				$scope.results = response.data;
			}, (response) => {
				console.log(response.data);
			});

		};

		$scope.sendAdd = () => {
			var name = document.getElementsByName('name')[0].value;
			var tel = document.getElementsByName('tel')[0].value;
			var address = document.getElementsByName('address')[0].value;
			var email = document.getElementsByName('email')[0].value;
			var country = document.getElementsByName('country')[0].value;
			var con_name = document.getElementsByName('con_name')[0].value;
			var zip = document.getElementsByName('zip')[0].value;
			var con_email = document.getElementsByName('con_email')[0].value;
			var con_tel = document.getElementsByName('con_tel')[0].value;
			var city = document.getElementsByName('city')[0].value;

			$http.post('assets/php/forms/accounts/add/index.php', {
				name: name,
				tel: tel,
				address: address,
				email: email,
				country: country,
				con_name: con_name,
				zip: zip,
				con_email: con_email,
				con_tel: con_tel,
				city: city

			}).then(response => {
				alert("La Cuenta ha sido agregada exitosamente");
			}, response => {
				console.log(response.data);
			});
		};

		$scope.edit = (id) => {
			var row = document.getElementsByTagName('tr')[id].innerHTML; // Selected Row from Table
		var limit = id * 6; // Limited Key for columns array
		var columns = []; // Columns Array
		// begin variable: Indicates key begin
		// Adding to columns array every column from begin to limit
		for (var begin = (limit - 6); begin < limit; ++begin) {
			    var column = document.getElementsByTagName('td')[begin].innerHTML;
			    columns.push(column);
		}
		// Setting up a Item Session with every selected column
		for (var i = 0; i < columns.length; ++i) {
		    //sessionStorage.setItem('column-'+i, columns[i]);
		    document.getElementsByName('column-'+i)[0].value = columns[i];
		}

		};

		$scope.processEdit = () => {
		var name = document.getElementsByName('column-0')[0].value;
		var tel = document.getElementsByName('column-1')[0].value;
		var email = document.getElementsByName('column-2')[0].value;
		var inDate = document.getElementsByName('column-3')[0].value;
		var tel_con = document.getElementsByName('column-4')[0].value;
		var email_con = document.getElementsByName('column-5')[0].value;

		$http.post('assets/php/editAccounts/index.php', {
			name: name,
			tel: tel,
			email: email,
			inDate: inDate,
			tel_con: tel_con,
			email_con: email_con
		}).then(response => {
			alert("Cuenta editada Correctamente");
			console.log(response.data);
		}, response => {
			console.log(response.data);
		});
		};

		$scope.pdf = () => {

		var rowsNumber = document.getElementsByName('accountsTable')[0].rows.length;
		var limit = (rowsNumber -1) * 6;
		var rows = [];
		for (var i = 0; i < limit; i++) {
			var td = document.getElementsByTagName('td')[i].innerHTML;
				rows.push(td);
		}
		j = 0;
		var filas = [];
		while(j < limit) {
			var row = [rows[j], rows[j+1], rows[j+2], rows[j+3], rows[j+4], rows[j+5]];
			filas.push(row);
			j += 6;
		}
		console.log(filas);
		var doc = new jsPDF('p', 'pt');
		var columns = ['Nombre', 'Teléfono', 'Correo', 'Fecha Ingreso', 'Teléfono Cont.', 'Correo Cont.'];
		doc.text(220, 40, 'ATAP COMPANY');
		doc.text(230, 60, '& Installations');
		//doc.addImage('assets/media/images/logo.png', 'PNG', 10, 10, 50, 50);
		// Get In Here
		// file:///C:/Users/PC/AppData/Local/Temp/Rar$EXa5784.45467/jsPDF-1.3.2/examples/basic.html
		doc.setFontSize(6);
		doc.text(260, 80, 'Dirección Empresa');
		doc.text(250, 90, 'Phone: TELEFONO, Fax: FAX');
		doc.text(260, 100, 'usuario@dominio.com');
		doc.autoTable(columns, filas, {
			margin: {
				top: 300
			}
		});
		doc.save('x.pdf');
		};
});