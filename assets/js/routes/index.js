app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'assets/templates/login/index.html'
	}).when('/home', {
		templateUrl: 'assets/templates/home/index.html'
	}).when('/error', {
		templateUrl: 'assets/templates/error/index.html'
	}).when('/ordenes', {
		templateUrl: 'assets/templates/orders/index.html'
	}).when('/reporte_movimientos', {
		templateUrl: 'assets/templates/movements_report/index.html'
	}).when('/agregar-gastos', {
		templateUrl: 'assets/templates/spends/add/index.html'
	}).when('/consultar-gastos', {
		templateUrl: 'assets/templates/spends/query/index.html'
	}).when('/editar-gastos', {
		templateUrl: 'assets/templates/spends/edit/index.html'
	}).when('/asignaciones', {
		templateUrl: 'assets/templates/assignaments/index.html'
	}).when('/facturacion', {
		templateUrl: 'assets/templates/bills/index.html'
	}).when('/orden-trabajo', {
		templateUrl:'assets/templates/orders/workorders/index.html'
	}).when('/orden-trabajo-detalle', {
		templateUrl:'assets/templates/orders/workorders/detail/index.html'
	}).when('/agregar-servicios', {
		templateUrl: 'assets/templates/services/add/index.html'
	}).when('/cotizaciones', {
		templateUrl: 'assets/templates/quotations/index.html'
	}).when('/agregar-cotizaciones', {
		templateUrl: 'assets/templates/quotations/add/index.html'
	}).when('/servicios', {
		templateUrl: 'assets/templates/services/index.html'
	}).when('/editar-servicios', {
		templateUrl: 'assets/templates/services/edit/index.html'
	}).when('/revision', {
		templateUrl: 'assets/templates/review/index.html'
	}).when('/proveedores', {
		templateUrl: 'assets/templates/providers/index.html'
	}).when('/agregar-proveedores', {
		templateUrl: 'assets/templates/providers/add/index.html'
	}).when('/cuentas', {
		templateUrl: 'assets/templates/accounts/index.html'
	}).when('/agregar-cuentas', {
		templateUrl: 'assets/templates/accounts/add/index.html'
	}).when('/usuarios', {
		templateUrl: 'assets/templates/users/index.html'
	}).when('/agregar-usuarios', {
		templateUrl: 'assets/templates/users/add/index.html'
	}).when('/informacion', {
		templateUrl: 'assets/templates/information/index.html'
	}).when('/generales', {
		templateUrl: 'assets/templates/generals/index.html'
	}).when('/perfiles', {
		templateUrl: 'assets/templates/profiles/index.html'
	}).when('/asignar-perfiles', {
		templateUrl: 'assets/templates/profiles/assign/index.html'
	}).when('/consultar-perfiles', {
		templateUrl: 'assets/templates/profiles/query/index.html'
	}).when('/ingresos', {
		templateUrl: 'assets/templates/inners/index.html'
	}).when('/egresos', {
		templateUrl: 'assets/templates/outers/index.html'
	}).when('/ingresos-cuenta', {
		templateUrl: 'assets/templates/inners/account/index.html'
	}).when('/ingresos-cliente', {
		templateUrl: 'assets/templates/inners/client/index.html'
	}).when('/ingresos-todo', {
		templateUrl: 'assets/templates/inners/all/index.html'
	}).when('/egresos-proveedor', {
		templateUrl: 'assets/templates/outers/provider/index.html'
	}).when('/egresos-todo', {
		templateUrl: 'assets/templates/outers/all/index.html'
	}).when('/estado-cuenta', {
		templateUrl: 'assets/templates/accountState/index.html'
	}).when('/agregar-factoraje', {
		templateUrl: 'assets/templates/factorage/index.html'
	}).when('/agregar-factura', {
		templateUrl: 'assets/templates/billing/index.html'
	}).when('/agregar-ordentrabajo', {
		templateUrl: 'assets/templates/orders/workorders/add/index.html'
	}).when('/agregar-orden', {
		templateUrl: 'assets/templates/orders/add/index.html'
	});
});