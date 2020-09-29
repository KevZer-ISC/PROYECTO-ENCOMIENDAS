//import { create } from "domain";

(function ($) {
    $.Util = {
        retornovariable: function () {
         // let rut = '/VLogistic';
         let rut = '';
        return rut },
        msjError: function (_title, _body) {
            $('#alertTitle').html(_title);
            $('#alertBody').html(_body);
            $('#alertError').modal('show');
        },
        msjProcseo: function (_title, _body) {
            $('#alertTitle').html(_title);
            $('#alertBody').html(_body);
            $('#alertError').modal('show');
        },
        formatofecha: function (_fecha) {
            var fec = '';
            if (_fecha != '') {
                var f = _fecha.split('/');
                fec = f[2] + "-" + f[1] + "-" + f[0];
            }
            return fec;
        },
        verificarfecha: function (_fecha) {
            var f = _fecha.split('/');
            var fec = new Date(f[1] + "/" + f[0] + "/" + f[2]);

            return fec;
        },
        paginador: function (_id, _table, _content) {
            var _cont = (typeof _content != 'undefined' ? _content : "table");
            var _estado = $("#" + _cont + "_length").length;
            var rows = $("#" + _table + "").find("tr").length;
            // console.log($("#tblresultAsignacion"));
            switch (_estado) {
                case 0:
                    //  if (rows > 10) {
                    $('#' + _cont + '').DataTable({
                        "searching": false,
                        "infoEmpty": false,
                        "language": {
                            "lengthMenu": "Visualizar _MENU_ ",
                            "zeroRecords": "No se encontraron resultados",
                            "info": "Mostrando página _PAGE_ de _PAGES_",
                            "infoEmpty": "No hay registros disponibles",
                            "infoFiltered": "(Filtro desde _MAX_ total registros)"
                        }
                    });
                    //   }
                    break;
                case 1:

                    $('#' + _cont + '').DataTable({
                        "searching": false,
                        "infoEmpty": false,
                        "language": {
                            "lengthMenu": "Visualizar _MENU_ ",
                            "zeroRecords": "No se encontraron resultados",
                            "info": "Mostrando página _PAGE_ de _PAGES_",
                            "infoEmpty": "No hay registros disponibles",
                            "infoFiltered": "(Filtro desde _MAX_ total registros)"
                        }
                    });
                    break;
            }

            //var rows = $("#" + _table + "").find("tr").length;
            //if (rows > 10) {

            //    $("#" + _id + "").smartpaginator({
            //        totalrecords: rows,
            //        recordsperpage: 10,
            //        datacontainer: _cont,

            //    });
            //    $('#' + _id + '').css('display', '');
            //} else {
            //    $('#' + _id + '').css('display', 'none');
            //}
        },
        verificarNumber: function (_Number) {
            var _result = true;
            if ((Number(_Number)) + '' == 'NaN') {
                _result = false;
            }

            return _result;
        },
        verificarfechaII: function (_fecha) {
            var _result = true;
            var f = _fecha.split('/');
            var fec = new Date(f[1] + "/" + f[0] + "/" + f[2]);

            if ('Invalid Date' == fec) {
                _result = false;
            }
            return _result;
        },
        verificarrangofechas: function (_fechaI, _fechaII) {
            var _result = true;
            var f = _fechaI.split('/');
            var fI = _fechaII.split('/');
            var fec;
            var fecI;
            if (f.length > 0 && fI.length > 0) {
                f = _fechaI.split('-');
                fI = _fechaII.split('-');
                fec = new Date(f[1] + "/" + f[2] + "/" + f[0]);
                fecI = new Date(fI[1] + "/" + fI[2] + "/" + fI[0]);
            } else {
                fec = new Date(f[1] + "/" + f[0] + "/" + f[2]);
                fecI = new Date(fI[1] + "/" + fI[0] + "/" + fI[2]);
            }
            if ('Invalid Date' === fec || 'Invalid Date' === fecI) {
                _result = false;
            }

            if (fec > fecI) {
                _result = false;
            }

            return _result;
        },
        getFechaActual: function () {
            let dia = new Date().getDate();
            let mes = new Date().getMonth() + 1;
            let anio = new Date().getFullYear();
            return anio + "-" + mes + "-" + dia;
        },
        sumaFecha: function (d, fecha) {
            var Fecha = new Date();
            var sFecha = fecha || (Fecha.getDate() + "/" + (Fecha.getMonth() + 1) + "/" + Fecha.getFullYear());
            var sep = sFecha.indexOf('/') != -1 ? '/' : '-';
            var aFecha = sFecha.split(sep);
            var fecha = aFecha[2] + '/' + aFecha[1] + '/' + aFecha[0];
            fecha = new Date(fecha);
            fecha.setDate(fecha.getDate() + parseInt(d));
            var anno = fecha.getFullYear();
            var mes = fecha.getMonth() + 1;
            var dia = fecha.getDate();
            mes = (mes < 10) ? ("0" + mes) : mes;
            dia = (dia < 10) ? ("0" + dia) : dia;
            //var fechaFinal = dia + sep + mes + sep + anno;
            var fechaFinal = anno + "-" + mes + "-" + dia;
            return (fechaFinal);
        },
        devuelvedatetimejson: function (_fecha) {
            var fecha = "";
            if (_fecha != null && _fecha != "/Date(-62135578800000)/" && _fecha != "") {
                var date = new Date(parseInt(_fecha.substr(6)));
                var dia = date.getDate();
                dia = (("" + dia).length <= 1 ? "0" + dia : dia);
                var mes = (date.getMonth() + 1);
                mes = (("" + mes).length <= 1 ? "0" + mes : mes);
                var anio = date.getFullYear();
                var hora = date.getHours();
                hora = (("" + hora).length <= 1 ? "0" + hora : hora);
                var minuto = date.getMinutes();
                minuto = (("" + minuto).length <= 1 ? "0" + minuto : minuto);
                var segundo = date.getSeconds();
                segundo = (("" + segundo).length <= 1 ? "0" + segundo : segundo);

                fecha = dia + "/" + mes + "/" + anio + " " + hora + ":" + minuto + ":" + segundo;
            }
            return fecha;
        },
        devuelvedatetimeformatjson: function (_fecha) {
            var fecha = "";
            if (_fecha != null && _fecha != "/Date(-62135578800000)/" && _fecha != "") {
                var date = new Date(parseInt(_fecha.substr(6)));
                var dia = date.getDate();
                dia = (("" + dia).length <= 1 ? "0" + dia : dia);
                var mes = (date.getMonth() + 1);
                mes = (("" + mes).length <= 1 ? "0" + mes : mes);
                var anio = date.getFullYear();
                var hora = date.getHours();
                hora = (("" + hora).length <= 1 ? "0" + hora : hora);
                var minuto = date.getMinutes();
                minuto = (("" + minuto).length <= 1 ? "0" + minuto : minuto);
                var segundo = date.getSeconds();
                segundo = (("" + segundo).length <= 1 ? "0" + segundo : segundo);

                fecha = anio + "-" + mes + "-" + dia + " " + hora + ":" + minuto + ":" + segundo;
            }
            return fecha;
        },
        devuelvedatejson: function (_fecha) {
            //console.log(_fecha);
            var fecha = "";
            if (_fecha != null && _fecha != "/Date(-62135578800000)/" && _fecha != "") {
                var date = new Date(parseInt(_fecha.substr(6)));
                var dia = date.getDate();
                dia = (("" + dia).length <= 1 ? "0" + dia : dia);
                var mes = (date.getMonth() + 1);
                mes = (("" + mes).length <= 1 ? "0" + mes : mes);
                var anio = date.getFullYear();
                var hora = date.getHours();
                hora = (("" + hora).length <= 1 ? "0" + hora : hora);
                var minuto = date.getMinutes();
                minuto = (("" + minuto).length <= 1 ? "0" + minuto : minuto);
                var segundo = date.getSeconds();
                segundo = (("" + segundo).length <= 1 ? "0" + segundo : segundo);

                fecha = dia + "/" + mes + "/" + anio;
            }
            return fecha;
        },
        validafecha: function (_fecha) {

            if (_fecha !== '') {
                var f = _fecha.split('/');

                if (f.length === 3 && _fecha.length === 10) {
                    _fecha = f[2] + "-" + f[1] + "-" + f[0];

                } else if (_fecha.length > 10) {

                    if (_fecha !== null && _fecha !== "/Date(-62135578800000)/") {
                        var date = new Date(parseInt(_fecha.substr(6)));
                        var dia = date.getDate();
                        dia = (("" + dia).length <= 1 ? "0" + dia : dia);
                        var mes = (date.getMonth() + 1);
                        mes = (("" + mes).length <= 1 ? "0" + mes : mes);
                        var anio = date.getFullYear();
                        var hora = date.getHours();
                        hora = (("" + hora).length <= 1 ? "0" + hora : hora);
                        var minuto = date.getMinutes();
                        minuto = (("" + minuto).length <= 1 ? "0" + minuto : minuto);
                        var segundo = date.getSeconds();
                        segundo = (("" + segundo).length <= 1 ? "0" + segundo : segundo);

                        _fecha = anio + "-" + mes + "-" + dia;// + "/" + mes + "/" + anio;
                    }
                }
            }
            //console.log(_fecha);
            return _fecha;
        },
        convertfecha: function (_fecha) {
            var fecha = "";
            if (_fecha != null) {
                var date = new Date(_fecha);
                var dia = date.getDate();
                dia = (("" + dia).length <= 1 ? "0" + dia : dia);
                var mes = (date.getMonth() + 1);
                mes = (("" + mes).length <= 1 ? "0" + mes : mes);
                var anio = date.getFullYear();
                var hora = date.getHours();
                hora = (("" + hora).length <= 1 ? "0" + hora : hora);
                var minuto = date.getMinutes();
                minuto = (("" + minuto).length <= 1 ? "0" + minuto : minuto);
                var segundo = date.getSeconds();
                segundo = (("" + segundo).length <= 1 ? "0" + segundo : segundo);

                fecha = dia + + "/" + mes + "/" + anio + " " + hora + ":" + minuto + ":" + segundo;
            }
            return fecha;
        },
        devuelvetimejson: function (_fecha) {
            var fecha = "";
            if (_fecha != null) {
                var date = new Date(parseInt(_fecha.substr(6)));
                var dia = date.getDate();
                dia = (("" + dia).length <= 1 ? "0" + dia : dia);
                var mes = (date.getMonth() + 1);
                mes = (("" + mes).length <= 1 ? "0" + mes : mes);
                var anio = date.getFullYear();
                var hora = date.getHours();
                hora = (("" + hora).length <= 1 ? "0" + hora : hora);
                var minuto = date.getMinutes();
                minuto = (("" + minuto).length <= 1 ? "0" + minuto : minuto);
                var segundo = date.getSeconds();
                segundo = (("" + segundo).length <= 1 ? "0" + segundo : segundo);

                fecha = hora + ":" + minuto + ":" + segundo;
            }
            return fecha;
        },
        loading: function (_estado, _mesaje) {
            var _msj = (typeof _mesaje != 'undefined' ? _mesaje : "Cargando..");
            var _est = (typeof _estado != 'undefined' ? _estado : true);

            if (_est) {
                $('#loadingmensaje').html(_msj);
                $('#loading').modal('show');
            } else {
                $('#loadingmensaje').html("");
                $('#loading').modal('hide');
            }

        },
        tableclear: function (_table) {
            var _cont = (typeof _table != 'undefined' ? _table : "Table");
            var _estado = $("#" + _cont + "_length").length;
            if (_estado == 1) { $('#' + _cont + '').DataTable().destroy(); }

        },
        verificarnumero: function (event) {
            if (event.shiftKey) {
                event.preventDefault();
            }

            if (event.keyCode == 46 || event.keyCode == 8) {
            } else if (event.keyCode == 17 || event.keyCode == 86) { }
            else if (event.keyCode == 37 || event.keyCode == 39) { }
            else {

                if (event.keyCode < 95) {
                    if (event.keyCode < 48 || event.keyCode > 57) {
                        event.preventDefault();

                    }
                }
                else {
                    if (event.keyCode < 96 || event.keyCode > 105) {
                        event.preventDefault();

                    }
                }
            }
        },
        llenartable: function (_idtable, _url, _prmentrada, _prmsalida, _scrollx, _datatable, _mensaje) {
            if ($.fn.DataTable.isDataTable('#' + _idtable + '')) {
                $('#' + _idtable + '').DataTable().destroy();
            }
            Jloading(true, "Consultando Afiliaciones ...");

            $('#' + _idtable + '').DataTable({
                "processing": true, // for show progress bar
                "serverSide": true, // for process server side
                "searching": false,
                "pagingType": "full_numbers",
                "scrollX": _scrollx,
                "language": {
                    "lengthMenu": "Visualizar _MENU_ ",
                    "zeroRecords": "No se encontraron resultados",
                    "info": "Mostrar _START_ de _END_ de _TOTAL_ registros",
                    "infoEmpty": "No hay registros disponibles",
                    "infoFiltered": "(Filtro desde _MAX_ total registros)",
                    "emptyTable": "No informacion en la  tabla",
                },
                "ajax": {
                    "url": _url,
                    "type": "POST",
                    "contentType": "application/json; charset=utf-8",
                    "datatype": "json",
                    "data": function (d) {
                        var entrada = JSON.parse(_prmentrada);
                        entrada.prm_tabla = d;
                        return JSON.stringify(entrada);
                    },
                    "dataFilter": function (data) {
                        var filtro = JSON.parse(data);
                        var json = filtro.d;
                        if (_datatable) { json.data = JSON.parse("[" + filtro.d.data + "]"); }
                        if (_mensaje) {
                            Jloading(false);
                            if (json.data.length <= 0) {
                                JmsjProcseo("Consulta Afiliaciones", "No se encontraron resultados para los criterios de búsqueda ingresados.");
                            }
                        }
                        return JSON.stringify(json); // return JSON string
                    },
                    "error": function (error) {
                        Jloading(false);
                        JmsjError('VALIDACIÓN DE DATOS', 'Se ha producido un error, vuelva a realizar el proceso. <br>Si el error persiste comuníquese con el equipo de Soporte.');
                    }
                },
                "columns": _prmsalida,

            });
        },
        llenartableII: function (_data) {

            var config = new Object();
            config.idtable = _data.idtable;
            config.url = _data.url;
            config.prmentrada = _data.prmentrada;
            config.columnas = _data.columnas;
            config.ordering = (typeof _data.ordering != 'undefined' ? _data.ordering : false);
            config.scrollH = (typeof _data.scrollH != 'undefined' ? _data.scrollH : false);
            config.tipodatatable = (typeof _data.tipodatatable != 'undefined' ? _data.tipodatatable : false);
            config.msjver = (typeof _data.msjcabgen != 'undefined' ? _data.msjver : false);
            config.msjcarga = (typeof _data.msjcarga != 'undefined' ? _data.msjcarga : "Consultando información");
            config.msjsindatos = (typeof _data.msjsindatos != 'undefined' ? _data.msjsindatos : "No se encontraron resultados para los criterios de búsqueda ingresados.");
            config.msjerror = (typeof _data.msjerror != 'undefined' ? _data.msjerror : 'Se ha producido un error, vuelva a realizar el proceso. <br>Si el error persiste comuníquese con el equipo de Soporte.');
            config.msjcabgen = (typeof _data.msjcabgen != 'undefined' ? _data.msjcabgen : "");
            config.msjcaberror = (typeof _data.msjcaberror != 'undefined' ? _data.msjcaberror : 'VALIDACIÓN DE DATOS');
            config.msjcabcarga = (typeof _data.msjcabcarga != 'undefined' ? _data.msjcabcarga : config.msjcabgen);
            config.msjcabsindatos = (typeof _data.msjcabsindatos != 'undefined' ? _data.msjcabsindatos : config.msjcabgen);

            if ($.fn.DataTable.isDataTable('#' + config.idtable + '')) {
                $('#' + config.idtable + '').DataTable().destroy();
            }
            if (config.msjver) { Jloading(false); Jloading(true, config.msjcarga); }

            $('#' + config.idtable + '').DataTable({
                "processing": true, // for show progress bar
                "serverSide": true, // for process server side
                "searching": true,
                "ordering": config.ordering,
                "pagingType": "full_numbers",
                "scrollX": config.scrollH,
                "language": {
                    "lengthMenu": "Visualizar _MENU_ ",
                    "zeroRecords": "No se encontraron resultados",
                    "info": "Mostrar _START_ de _END_ de _TOTAL_ registros",
                    "infoEmpty": "No hay registros disponibles",
                    "infoFiltered": "(Filtro desde _MAX_ total registros)",
                    "emptyTable": "No informacion en la  tabla",
                },
                "ajax": {
                    "url": config.url,
                    "type": "POST",
                    "contentType": "application/json; charset=utf-8",
                    "datatype": "json",
                    "data": function (d) {
                        var entrada = JSON.parse(config.prmentrada);
                        entrada.prm_tabla = d;
                        return JSON.stringify(entrada);
                    },
                    "dataFilter": function (data) {
                        var filtro = JSON.parse(data);
                        var json = filtro.d;
                        if (config.tipodatatable) { json.data = JSON.parse("[" + filtro.d.data + "]"); }
                        if (config.msjver) {
                            Jloading(false);
                            if (json.data.length <= 0) {
                                JmsjProcseo(config.msjcabsindatos, config.msjsindatos);
                            }
                        }
                        return JSON.stringify(json); // return JSON string
                    },
                    "error": function (error) {
                        if (config.msjver) { Jloading(false); }
                        JmsjError(config.msjcaberror, config.msjerror);
                    }
                },
                "columns": config.columnas,

            });
        },
        senddata: function (_data) {
            var config = new Object();
            config.url = _data.url;
            config.parametros = _data.parametros;
            config.asyn = (typeof _data.asyn != 'undefined' ? _data.asyn : false);
            config.cache = (typeof _data.cache != 'undefined' ? _data.cache : false);
            config.msjerror = (typeof _data.msjerror != 'undefined' ? _data.msjerror : 'Se ha producido un error, vuelva a realizar el proceso. <br>Si el error persiste comuníquese con el equipo de Soporte.');
            var ajax = $.ajax({
                type: "POST",
                url: config.url,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: config.parametros,
                async: config.asyn,
                success: function (data) { },
                complete: function () { },
                error: function (error) {
                    swal({
                        title: "Error",
                        text: error,
                        type: "warning"
                    });

                }, statusCode: {
                    500: function () {
                        swal({ title: "Error 500", text: config.msjerror, type: "warning" });
                    },
                    404: function () {
                        swal({ title: "Error 404", text: config.msjerror, type: "warning" });
                    }
                }
            });

            return ajax;
        },
        getdata: function (_data) {
            var config = new Object();
            config.url = _data.url;
            config.parametros = (typeof _data.parametros != 'undefined' ? _data.parametros : []);
            config.asyn = (typeof _data.asyn != 'undefined' ? _data.asyn : false);
            config.cache = (typeof _data.cache != 'undefined' ? _data.cache : false);
            config.msjerror = (typeof _data.msjerror != 'undefined' ? _data.msjerror : 'Se ha producido un error, vuelva a realizar el proceso. Si el error persiste comuníquese con el equipo de Soporte.');
            var ajax = $.ajax({
                type: "POST",
                url: config.url,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: config.parametros,
                async: config.asyn,
                cache: config.cache,
                success: function (data) { },
                complete: function () { },
                error: function (error) {
                    swal({
                        title: "Error",
                        text: error,
                        type: "warning"
                    });

                },
                statusCode: {
                    500: function () {
                        swal({ title: "Error 500", text: config.msjerror, type: "warning" });
                    },
                    404: function () {
                        swal({ title: "Error 404", text: config.msjerror, type: "warning" });
                    }
                }
            });

            return ajax;
        },
        parsefechajson: function (_fecha) {
            var fecha = "";
            if (_fecha != null) {
                var date = new Date(parseInt(_fecha.substr(6)));
                var dia = date.getDate();
                dia = (("" + dia).length <= 1 ? "0" + dia : dia);
                var mes = (date.getMonth() + 1);
                mes = (("" + mes).length <= 1 ? "0" + mes : mes);
                var anio = date.getFullYear();
                var hora = date.getHours();
                hora = (("" + hora).length <= 1 ? "0" + hora : hora);
                var minuto = date.getMinutes();
                minuto = (("" + minuto).length <= 1 ? "0" + minuto : minuto);
                var segundo = date.getSeconds();
                segundo = (("" + segundo).length <= 1 ? "0" + segundo : segundo);

                fecha = anio + "-" + mes + "-" + dia;
            }
            return fecha;
        },
        ErrorAlert: function (_data) {
            swal({
                title: "Error",
                text: _data,
                type: "warning",
                allowOutsideClick: false,
                allowEscapeKey: false
            });
            console.log(_data);
        },
        AdvertenciaAlert: function (_title, _data) {
            swal({
                title: _title,
                text: _data,
                type: "warning",
                allowOutsideClick: false,
                allowEscapeKey: false,
                html: _data
            });

        },
        SuccessAlert: function (_data, _title) {
            var title = (typeof _title != 'undefined' ? _title : "Dar click en el boton!");
            let mensaje = swal({
                title: title,
                text: _data,
                type: "success",
                allowOutsideClick: false,
                allowEscapeKey: false
            });
            return mensaje;
        },
        SuccessAlertVal: function (_data, _title) {
            var title = (typeof _title != 'undefined' ? _title : "Dar click en el boton!");
            let $mensaje = swal({
                title: title,
                text: _data,
                type: "success",
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                cancelButtonText: "No, cancelar!",
                confirmButtonText: "SI"

            });
            return $mensaje;
        },
        ConfirAlert: function (_data, _title, _confirtext) {
            var title = (typeof _title !== 'undefined' ? _title : "¿Seguro de Eliminar?");
            var confirtext = (typeof _confirtext !== 'undefined' ? _confirtext : "Si, Eliminar!");
            let $mensaje = swal({
                title: title,
                text: _data,
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                cancelButtonText: "No, cancelar!",
                confirmButtonText: confirtext

            });
            return $mensaje;
        },
        ConfirmAlert: function (_setting) {
            var _type = "";
            var settings = $.extend({
                confirtext: "Si, Eliminar!",
                title: "¿Seguro de Eliminar?",
                type: 2,
                data: ""
            }, _setting);

            switch (settings) {
                case 1:
                    _type = "warning";
                    break;
                case 2:
                    _type = "success";
                    break;
            }

            let $mensaje = swal({
                title: settings.title,
                text: settings.data,
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                cancelButtonText: "No, cancelar!",
                confirmButtonText: settings.confirtext

            });
            return $mensaje;
        },
        LoaderAlert: function (_setting) {
            var settings = $.extend({
                html: "Procesando Informacion ...",
                title: ""
            }, _setting);

            let $mensaje = swal({
                title: settings.title,
                html: settings.html,
                allowOutsideClick: false, allowEscapeKey: false, showConfirmButton: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                    //Swal.getContent().querySelector('strong').textContent = "Procesando Información";
                    //timerInterval = setInterval(() => {
                    //    Swal.getContent().querySelector('strong')
                    //        .textContent = Swal.getTimerLeft()
                    //}, 100)
                }
            });
            return $mensaje;
        },

        GetArchivo: function (_data) {
            var tipoarchivos = [{ tipo: "excel", ext: ".xls, .xlsx", icon: "fa fa-file-excel-o" },
            { tipo: "word", ext: ".docm, .docx", icon: "fa fa-file-word-o" },
            { tipo: "powerpoint", ext: ".pptx", icon: "fa fa-file-powerpoint-o" },
            { tipo: "pdf", ext: ".pdf", icon: "fa fa-file-pdf-o" },
            { tipo: "imagen", ext: "image", icon: "fa fa-file-image-o" },
            { tipo: "codigo", ext: "", icon: "fa fa-file-code-o" },
            { tipo: "txt", ext: ".txt", icon: "fa fa-file-text-o" },
            { tipo: "zip", ext: ".zip", icon: "fa fa-file-zip-o" },
            { tipo: "correo", ext: ".msg", icon: "fa fa-envelope-o" }]
            var fichero;
            if (typeof _data != 'undefined') {
                fichero = tipoarchivos.filter(function (tipoarchivos) { return tipoarchivos.tipo == _data })
            } else { fichero = tipoarchivos; }
            return fichero;
        },

        isValidUrl: function (url, obligatory, ftp) {
            // Si no se especifica el paramatro "obligatory", interpretamos
            // que no es obligatorio
            if (obligatory == undefined)
                obligatory = 0;
            // Si no se especifica el parametro "ftp", interpretamos que la
            // direccion no puede ser una direccion a un servidor ftp
            if (ftp == undefined)
                ftp = 0;

            if (url == "" && obligatory == 0)
                return true;

            if (ftp)
                var pattern = /^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z0-9]{2,4}/gi;
            else
                var pattern = /^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z0-9]{2,4}/gi;

            if (url.match(pattern))
                return true;
            else
                return false;
        },
        GetAppUrl: function (_data) {

            var url = [{
                name: "app", url: window.location.origin,
                data: [{
                    name: "maquinaria", url: "Maquinaria",
                    data: [{
                        name: "maquinaria", url: "FormMMaquinaria.aspx",
                        data: [
                            { name: "listar", url: "ObtenerListaMaquinaria", data: null },
                            { name: "delete", url: "ElimnarMaquinaria", data: null },
                            { name: "agregar", url: "RegistrarMaquinaria", data: null },
                            { name: "almacen", url: "ObtenerListaAlmacen", data: null },
                            { name: "categoria", url: "ObtenerListaMaquinariaCategoria", data: null },
                            { name: "propiedad", url: "ObtenerListaPropiedad", data: null }]
                    },
                    {
                        name: "implemento", url: "FormMImplementos.aspx",
                        data: [
                            { name: "listar", url: "ImplementoObtenerTodo", data: null },
                            { name: "agregar", url: "ImplementoInsert", data: null },
                            { name: "delete", url: "ImplementoDelete", data: null },
                            { name: "almacen", url: "ObtenerListaAlmacen", data: null },
                            { name: "propiedad", url: "ObtenerListaPropiedad", data: null }]
                    },
                    {
                        name: "categoria", url: "FormMMaquinariaCategoria.aspx",
                        data: [
                            { name: "listar", url: "MaquinariaCategoriaObtenerTodo", data: null },
                            { name: "agregar", url: "MaquinariaCategoriaInsert", data: null },
                            { name: "delete", url: "MaquinariaCategoriaDelete", data: null }]
                    },
                    {
                        name: "insumo", url: "FormMInsumos.aspx",
                        data: [
                            { name: "listar", url: "InsumoObtenerTodo", data: null },
                            { name: "agregar", url: "InsumoInsert", data: null },
                            { name: "delete", url: "InsumoDelete", data: null },
                            { name: "categoria", url: "Categoria_ObtenerTodo", data: null },
                            { name: "unidadmedida", url: "UnidadMedida_ObtenerTodo", data: null }]
                    }]
                }, {
                    name: "alquiler", url: "Alquiler",
                    data: [{
                        name: "mant", url: "FormAAlquilerMant.aspx",
                        data: [
                            { name: "tipos", url: "AlquilerDetalleTipo_Listar", data: null },
                            { name: "maquinarias", url: "Maquinaria_Listar", data: null },
                            { name: "implementos", url: "Implemento_Listar", data: null },
                            { name: "trabajadores", url: "Trabajador_Listar", data: null },
                            { name: "clientes", url: "ObtenerListaClientes", data: null },
                            { name: "guardar", url: "Alquiler_Insert", data: null },
                            { name: "obtener", url: "AlquilerDetalle_Obtener", data: null },
                            { name: "insertdetalle", url: "AlquilerDetalle_Insert", data: null },
                            { name: "deletedetalle", url: "AlquilerDetalle_Delete", data: null },
                            { name: "changedetalle", url: "AlquilerDetalle_Change", data: null },
                            { name: "alquiler", url: "Alquiler_Obtener", data: null }]
                    },
                    {
                        name: "alq", url: "FormAAlquiler.aspx",
                        data: [{ name: "listar", url: "Alquiler_ObtenerTodo", data: null },
                        { name: "delete", url: "Alquiler_Delete", data: null },
                        { name: "atender", url: "Alquiler_Atender", data: null }]
                    },
                    {
                        name: "diario", url: "FormAAlquilerIngresoDiario.aspx",
                        data: [{ name: "listar", url: "AlquilerDetalleDiario_Obtener", data: null },
                        { name: "insert", url: "AlquilerDetalleDiario_Insert", data: null },
                        { name: "delete", url: "AlquilerDetalleDiario_Delete", data: null }]
                    }]
                }, {
                    name: "compra", url: "Compra",
                    data: [{
                        name: "reporte", url: "FormCCompraReporte.aspx",
                        data: [{ name: "proveedor", url: "ObtenerListaProveedores", data: null }]
                    }]
                }]
            }];
            var typedos = _data.indexOf("/");
            var _repositorio = "";
            if (typedos == -1) {
                var _subdata = url;
                var _url = _data.split('.');

                $.each(_url, function (i, sub_result) {
                    var urlp = url.filter(function (url) { return url.name == sub_result; });
                    urlp = urlp[0];
                    if (typeof urlp !== "undefined") {
                        _repositorio = _repositorio + (i > 0 ? "/" : "") + urlp.url;
                        url = urlp.data;
                    } else {
                        console.log("No se encontro la directiva : " + sub_result);
                    }

                });
            } else {
                _repositorio = _data;
            }

            return _repositorio;
        },
        ActivaMenu: function (_setting) {

            var settings = $.extend({
                contenedor: null,
                menu: null,
            }, _setting);
            if (!(settings.contenedor === null)) {
                $("#" + settings.contenedor + "").attr("class", "active");
                $("#" + settings.contenedor + " ul").attr("class", "nav nav-second-level collapse in");
            }
            if (!(settings.menu === null)) {
                $("#" + settings.menu + "").attr("class", "active");
            }

            return settings;
        },

        GetEntidad: function (_setting) {
            var settings = $.extend({
                name: "",
                title: null,
                type: null
            }, _setting);

            var entidad = new Object();
            if (settings.type === null || typeof settings.type === 'undefined') {
                $("form[data-entidad=" + settings.name + "]").each(function (i, d) {
                    $(this).find("input[data-property]").each(function (i, d) {
                        entidad[$(this).data("property")] = $(this).val();
                    });
                    $(this).find("select[data-property]").each(function (i, d) {
                        var data = $(this).find(":selected").data("value");
                        var value = $(this).val();
                        data = (typeof data !== 'undefined' ? data : (value === "0" ? null : value));
                        entidad[$(this).data("property")] = data;

                    });
                });
            } else { entidad = $("form[data-entidad=" + settings.name + "]").data("value"); }

            return entidad;
        },
        SetEntidad: function (_setting) {
            var settings = $.extend({
                name: "",
                data: null,
                type: null
            }, _setting);
            $("form[data-entidad=" + settings.name + "]").data("value", settings.data);
            var entidad = new Object();
            for (var i in settings.data) {
                if (settings.data.hasOwnProperty(i)) {
                    //console.log("entidad." + i + " = " + settings.data[i]);
                    //console.log(Object.prototype.toString.call(settings.data[i]));
                    if (Object.prototype.toString.call(settings.data[i]) === '[object Object]') {
                        for (var e in settings.data[i]) {
                            if (settings.data[i].hasOwnProperty(e)) {
                                if ((e.indexOf("id") == 0 && "id" + i + "" == e) ||
                                    (e.indexOf("Id") == 0 && "Id" + i + "" == e) ||
                                    (e.indexOf("ID") == 0 && "ID" + i + "" == e) ||
                                    e.indexOf("id") == 0) {
                                    $("select[data-property=" + i + "]").val(settings.data[i][e]);
                                } else {
                                    $("label[data-property=" + i + "-" + e + "]").text(settings.data[i][e]);
                                    // console.log("entidad." + i + "- " + e + "= " + settings.data[i][e]);
                                }

                            }
                        }

                    } else {
                        $("input[data-property=" + i + "]").val(settings.data[i]);
                        $("label[data-property=" + i + "]").text(settings.data[i]);
                    }
                }
            }

            return settings.data;
        },
        ClearEntidad: function (_setting) {
            var settings = $.extend({
                name: "",
                title: null,
                type: null,
            }, _setting);
            $("span[data-error=" + settings.name + "]").remove();
            $(".form-group").removeClass("has-error");
            var entidad = new Object();
            $("form[data-entidad=" + settings.name + "]").each(function (i, d) {
                $(this).find("input[data-property]").each(function (i, d) {
                    var idpost = $(this).data("property");
                    if (idpost.indexOf("id") == -1) {
                        $(this).val("");
                    } else { $(this).val("0"); }
                });
                $(this).find("select[data-property]").each(function (i, d) {
                    $(this).val(0);
                });
            });

            return entidad;
        },
        ValidateEntidad: function (_setting) {
            var settings = $.extend({
                name: "",
                property: null,
                type: null,
                exo: [],
            }, _setting);

            var entidad = new Object();
            var estado = true;
            $("span[data-error=" + settings.name + "]").remove();
            $(".form-group").removeClass("has-error");
            $("form[data-entidad=" + settings.name + "]").each(function (i, d) {
                $(this).find("input[data-property]").each(function (i, d) {
                    //switch (expression) {}
                    var valorinput = $(this).val();
                    if (valorinput == "") {
                        estado = false;
                        $(this).parent("div").parent("div[class=form-group]").addClass("has-error");
                        $(this).parent("div").append($("<span data-error='" + settings.name + "'></span>").text("Debe ingresar : " + $(this).data("property")));
                    }
                    //entidad[$(this).data("property")] = $(this).val();
                });
                $(this).find("select[data-property]").each(function (i, d) {
                    var valorinput = $(this).val();
                    if (Number(valorinput) == 0) {
                        estado = false;
                        $(this).parent("div").parent("div[class=form-group]").addClass("has-error");
                        $(this).parent("div").append($("<span data-error='" + settings.name + "'></span>").text("Debe ingresar : " + $(this).data("property")));
                    }

                    //var data = $(this).find(":selected").data("value");
                    //data = (typeof data != 'undefined' ? data : null);
                    //entidad[$(this).data("property")] = data;
                });
            });

            return estado;
        },
        MonedaFormat: function (data) {
            data = Number(data).toFixed(2);
            var splitStr = ("" + data).split('.');
            var splitLeft = splitStr[0];
            var splitRight = splitStr.length > 1 ? "." + splitStr[1] : '';
            var regx = /(\d+)(\d{3})/;
            while (regx.test(splitLeft)) {
                splitLeft = splitLeft.replace(regx, '$1' + "," + '$2');
            }

            if (splitRight.length === 0) {
                splitRight = ".00";
            } else if (splitRight.length === 2) {
                splitRight = splitRight + "0";
            }

            let valor = splitLeft + splitRight;

            return valor;

        },
        ValidarNumero: function (e) {
            let decimal = 2;
            let k = e.key;
            let caracteresValidos = '0123456789.';
            let value = e.target.value;

            if (!caracteresValidos.includes(k) && k !== 'Backspace') {
                e.preventDefault();
            }
            else {
                if (k === '.') {
                    if (value.includes(k)) {
                        e.preventDefault();
                    }
                }
                else {
                    if (value.includes('.')) {
                        let i = value.indexOf('.')
                        let a = value.substr(i + 1);
                        if (a.length === decimal && k !== 'Backspace') {
                            e.preventDefault();
                        }
                    }
                }

            }
        }
    };
    Jretornovariable = function () { $.Util.retornovariable(); };
    JmsjError = function (_title, _body) { $.Util.msjError(_title, _body); };
    JmsjProcseo = function (_title, _body) { $.Util.msjProcseo(_title, _body); };
    Jformatofecha = function (_fecha) { return $.Util.formatofecha(_fecha); };
    Jverificarfecha = function (_fecha) { return $.Util.verificarfecha(_fecha); };
    Jvalidafecha = function (_fecha) { return $.Util.validafecha(_fecha); };
    Jpaginador = function (_id, _table, _content) { return $.Util.paginador(_id, _table, _content); };
    JverificarNumber = function (_Number) { return $.Util.verificarNumber(_Number); };
    JverificarfechaII = function (_fecha) { return $.Util.verificarfechaII(_fecha); };
    Jverificarrangofechas = function (_fechaI, _fechaII) { return $.Util.verificarrangofechas(_fechaI, _fechaII); };
    Jdevuelvedatetimejson = function (_fecha) { return $.Util.devuelvedatetimejson(_fecha); };
    Jdevuelvedatetimeformatjson = function (_fecha) { return $.Util.devuelvedatetimeformatjson(_fecha); };
    Jdevuelvedatejson = function (_fecha) { return $.Util.devuelvedatejson(_fecha); };
    Jconvertfecha = function (_fecha) { return $.Util.convertfecha(_fecha); };
    Jdevuelvetimejson = function (_fecha) { return $.Util.devuelvetimejson(_fecha); };
    Jloading = function (_estado, _mesaje) { return $.Util.loading(_estado, _mesaje); };
    JDatatableclear = function (_table) { return $.Util.tableclear(_table); };
    Jingresonumero = function (event) { return $.Util.verificarnumero(event); };
    JDatatablenew = function (_idtable, _url, _prmentrada, _prmsalida, _scrollx, _datatable, _mensaje) { return $.Util.llenartable(_idtable, _url, _prmentrada, _prmsalida, _scrollx, _datatable, _mensaje); };
    JUtilDatatable = function (_data) { return $.Util.llenartableII(_data); };
    JUtilSend = function (_data) { return $.Util.senddata(_data); };
    JUtilGet = function (_data) { return $.Util.getdata(_data); };
    JParseFechaJson = function (_data) { return $.Util.parsefechajson(_data); };

    JErrorAlert = function (_data) { return $.Util.ErrorAlert(_data); };
    JAdvertenciaAlert = function (_title, _data) { return $.Util.AdvertenciaAlert(_title, _data); };
    JSuccessAlert = function (_data, _title) { return $.Util.SuccessAlert(_data, _title); };
    JSuccessAlertVal = function (_data, _title) { return $.Util.SuccessAlertVal(_data, _title); };
    JConfirAlert = function (_data, _title, _confirtext) { return $.Util.ConfirAlert(_data, _title, _confirtext); };
    JLoaderAlert = function (_setting) { return $.Util.LoaderAlert(_setting); };
    JConfirmAlert = function (_setting) { return $.Util.ConfirmAlert(_setting); };

    JGetTypeFile = function (_data) { return $.Util.GetArchivo(_data); };
    JIsValidUrl = function (url, obligatory, ftp) { return $.Util.isValidUrl(url, obligatory, ftp); };
    JGetAppUrl = function (url) { return $.Util.GetAppUrl(url); };
    JActivaMenu = function (_setting) { return $.Util.ActivaMenu(_setting); };
    JGetEntidad = function (_setting) { return $.Util.GetEntidad(_setting); };
    JSetEntidad = function (_setting) { return $.Util.SetEntidad(_setting); };
    JClearEntidad = function (_setting) { return $.Util.ClearEntidad(_setting); };
    JValidateEntidad = function (_setting) { return $.Util.ValidateEntidad(_setting); };
    JMonedaFormat = function (_setting) { return $.Util.MonedaFormat(_setting); };
    JValidarNumero = function (_setting) { return $.Util.ValidarNumero(_setting); };

    JGetFechaActual = function () { return $.Util.getFechaActual(); };
    JsumaFecha = function (d, fecha) { return $.Util.sumaFecha(d, fecha); };

})(jQuery);
(function ($) {
    $.fn.LoadTagtableUrl = function (_setting) {
        var _table = this;
        var settings = $.extend({
            title: "Formulario",
            parametros: null,
            url: "",
            row: { data: null, column: [], showedit: false, showdelete: false, table: _table, tableconf: _setting },
            tagdata: "rc_data"
        }, _setting);

        var configUrl = {
            url: JGetAppUrl(settings.url), parametros: settings.parametros
        };

        var getdata = JUtilGet(configUrl);
        getdata.success(function (data) {
            if ($.fn.DataTable.isDataTable(_table)) {
                _table.DataTable().destroy();
            }
            _table.find("tbody").html("");
            $.each(data.d, function (i, result) {
                settings.row.data = result;
                settings.row.num = i;
                settings.row.table = _table;
                settings.row.tableconf = _setting;
                _table.find("tbody").add_row(settings.row);
                // console.log(_table);
            });
        });
        return _table;
    };
    $.fn.LoadTagSelectUrl = function (_setting) {
        var _cbo = this;
        var settings = $.extend({
            parametros: null,
            url: "",
            value: "",
            text: "",
            tagdata: "rc_data"
        }, _setting);

        var configUrl = {
            url: JGetAppUrl(settings.url), parametros: JSON.stringify({
                parametros: settings.parametros
            }),
        };

        var getdata = JUtilGet(configUrl);
        getdata.success(function (data) {
            _cbo.html("");
            //            _cbo.append("<option data='null' value='0'>Seleccione</option>").data("value", null);
            $.each(data, function (i, result) {
                var _text = settings.text.split('+');
                var _textgen = "";
                $.each(_text, function (i, sub_result_text) {
                    _textgen = _textgen + result[sub_result_text] + " ";
                });
                //_cbo.append("<option " + settings.tagdata + "='" + JSON.stringify(result) + "' value='" + result[settings.value] + "'>" + result[settings.text] + "</option>");
                _cbo.append($("<option value='" + result[settings.value] + "'>" + _textgen + "</option>").data("value", result));
            });
        });
        _cbo
        return _cbo;
    };
    $.fn.GetTagSelected = function () {

        //var data = this.find(":selected").attr("rc_data");
        var data = this.find(":selected").data("value");
        var value = this.val();
        data = (typeof data != 'undefined' ? data : value);
        //return JSON.parse(data);
        return data;
    };
    $.fn.add_row = function (_setting) {
        var _tablep = this;
        var settings = $.extend({
            showedit: false,
            showdelete: false,
            showselect: false,
            urldelete: "",
            clickdelete: function (data) {
                var entidad = $(this).data("value");
                // console.log(entidad.__type);
                var _entidad = new Object();
                _entidad[entidad.__type] = entidad;

                var config = {
                    url: JGetAppUrl(_setting.urldelete),
                    parametros: JSON.stringify({ _entidad: entidad }),
                };

                swal({
                    title: "¿Seguro de Eliminar?",
                    text: "La " + _setting.tableconf.title + " se eliminará de lista!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Si, Eliminar!",
                    cancelButtonText: "No, cancelar!",
                    //  closeOnConfirm: false,
                    //  closeOnCancel: false
                }).then((res) => {
                    if (res.value) {
                        var getdata = JUtilSend(config);
                        getdata.success(function (data) {
                            if (data.d.estado) {
                                JSuccessAlert(data.d.descripcion);
                                //console.log(_setting.table);
                                _setting.table.LoadTagtableUrl(_setting.tableconf).jstable({ buttons: false });

                            } else {
                                JErrorAlert(data.d.descripcion);
                            }
                        });

                    } else {
                        // swal("Cancelado", "Se ha cancelado la operación", "error");
                    }
                });

                //    function (isConfirm) {
                //        if (isConfirm) {

                //            var getdata = JUtilSend(config);
                //            getdata.success(function (data) {
                //                if (data.d.estado) {
                //                JSuccessAlert(data.d.descripcion);
                //                //console.log(_setting.table);
                //                _setting.table.LoadTagtableUrl(_setting.tableconf).jstable({ buttons: false });

                //                } else {
                //                     JErrorAlert(data.d.descripcion);
                //                }
                //            });

                //        } else {
                //            swal("Cancelado", "Se ha cancelado la operación", "error");
                //        }
                //    });

                return entidad;
            },
            urledit: "",
            entidadedit: "",
            clickedit: function (data) { return data; },
            clickselect: function (data) { return data; },
            tagdata: "rc_data",
            column: [{ name: "", type: "text", validate: "", id: "", text: "", data: "" }],
            data: null,
            num: 0,
            table: null,
            tableconf: null,
            buttonsconst: null,
        }, _setting);

        var estado = (_setting.data === null && typeof _setting === "object" ? false : true);
        if (estado) {
            var buttonsvalidate = true;
            var _tr = "<tr rc_data='" + JSON.stringify(_setting.data) + "'>";
            var $tr = $("<tr></tr>").data("value", _setting.data);
            settings.num = (settings.num === 0 ? _tablep.find("tbody").find("tr").length : settings.num);
            $tr.attr("data-row", settings.num);
            $.each(_setting.column, function (i, result) {
                var _nodo = result.name.split('.');
                var _subdata = settings.data;
                if (result.data === "" || typeof result.data === 'undefined') {
                    $.each(_nodo, function (i, sub_result) {
                        _subdata = _subdata[sub_result];

                    });
                }

                if (result.type === "text" || typeof result.type === 'undefined') {
                    var $td = $("<td></td>");
                    if (_subdata !== null) {
                        if (typeof result.text !== "undefined" && result.text !== "") {
                            var _text = result.text.split('+');
                            var _textgen = "";
                            $.each(_text, function (i, sub_result_text) {
                                var valorreal = _subdata[sub_result_text];
                                if (typeof valorreal !== 'undefined') {
                                    _textgen = _textgen + _subdata[sub_result_text] + " ";
                                }
                            });

                            $td.html(_textgen);
                        } else {
                            $td.html(_subdata);
                        }
                    }
                    $td.attr("data-name", result);
                    $td.attr("data-col", i);
                    $td.attr("data-row", settings.num);
                    $tr.append($td);
                }
                else if (result.type === "list") {

                    var $select = $("<select></select>");
                    $select.addClass("chosen-select");
                    $.each(_subdata, function (i, resultselect) {
                        var _text = result.text.split('+');
                        var _textgen = "";
                        $.each(_text, function (i, sub_result_text) {
                            _textgen = _textgen + resultselect[sub_result_text] + " ";
                        });
                        var $option = $("<option></option>");
                        $option.text(_textgen);
                        $option.attr("id", resultselect[result.id]);
                        $option.data("value", resultselect);
                        $select.append($option);
                    });

                    var $tds = $("<td></td>").append($select);
                    $tr.append($tds);
                } else if (result.type === "decimal") {
                    var $input = $("<input type='text'/>");
                    $input.val(_subdata);
                    var $tdi = $("<td></td>").append($input);
                    $tr.append($tdi);
                } else if (result.type === "auto") {
                    var num = _tablep.find("tbody").find("tr").length;
                    var $tda = $("<td></td>").html(num + Number(_subdata));
                    $tr.append($tda);
                } else if (result.type === "datec") {
                    var $tdd = $("<td></td>").html(Jdevuelvefechajson(_subdata));
                    $tr.append($tdd);

                } else if (result.type === "val") {
                    var $tdv = $("<td></td>").html(result.data);
                    $tr.append($tdv);

                }

                if (_subdata != result.validate && buttonsvalidate && typeof result.validate != "undefined") { buttonsvalidate = false; }
                //console.log(result.validate);

            });
            if (settings.showedit || settings.showdelete || settings.showselect) {
                //var _option = "<td><table><tr>";
                if (buttonsvalidate) {
                    var $option = $("<div></div>");
                    $option.addClass("form-group");
                    $option.css("margin-bottom", "0px");
                    if (settings.showdelete) {
                        var $delete = $("<a title='Eliminar fila'  ></a>").data("value", settings.data);
                        $delete.addClass("btn btn-danger btn-sm btneliminar");
                        $delete.append("<i class='fa fa-trash-o'></i>");
                        $delete.on("click", settings.clickdelete);
                        $delete.attr("data-row", settings.num);
                        $option.append($delete);
                    }
                    if (settings.showedit) {
                        var $update = $("<a title='Editar fila' ></a>").data("value", settings.data);
                        $update.addClass("btn btn-success btn-sm btneditar");
                        $update.append("<i class='fa fa-pencil'></i>");
                        $update.on("click", settings.clickedit);
                        $update.attr("data-row", settings.num);
                        $option.append($update);
                    }
                    if (settings.showselect) {
                        var $select = $("<input type='radio' name='selecionar'/>").data("value", settings.data);
                        $select.on("click", settings.clickselect);
                        $select.attr("data-row", settings.num);
                        $option.append($select);
                    }
                    // _option = _option + "</tr></table></td>";
                    // _tr = _tr + _option;

                    $tr.append($("<td style='text-align: center'></td>").append($option));
                } else {
                    $tr.append($("<td style='text-align: center'></td>").text("No cuenta con acciones"));
                }
            } else if (_setting.buttonsconst !== null && typeof _setting.buttonsconst !== "undefined") {
                $tr.append($("<td style='text-align: center'></td>").append(_setting.buttonsconst));
            }
            // _tr = _tr + "</tr>";
            if (settings.table !== null) {
                this.append(function () { return $tr;/*_tr;*/ });
            } else {
                $(this).find("tbody").append(function () { return $tr;/*_tr;*/ });
            }
        }

        return this;
    };
    $.fn.jstable = function (_setting) {
        var table = this;
        var configuracion = {};
        var settings = $.extend({
            pageLength: 10,
            btnexcel: "ExampleFile",
            btnpdf: "ExampleFile",
            searching: true,
            buttons: false,
            lengthChange: true,
            pagestart: 0,
            scrollY: '',
            scrollX: false,
            ordering: true,
            stylebtn: false,
            serverSide: false,
            fixedColumns: false,
            columns: [],
            url: "",
            prmentrada: []
        }, _setting);

        if ($.fn.DataTable.isDataTable(table)) {

            //table.DataTable().clear();
            table.DataTable().destroy();
            //console.log("tabla destruida");
        }
        var botones = [];
        if (settings.buttons) {
            botones = [
                //{ extend: 'copy' },
                //{ extend: 'csv' },
                { extend: 'excel', title: settings.btnexcel },
                //{ extend: 'pdf', title: settings.btnpdf },

                {
                    //extend: 'print',
                    customize: function (win) {
                        $(win.document.body).find(".lblacciones").css("display", "none");
                        $(win.document.body).addClass('white-bg');
                        $(win.document.body).css('font-size', '10px');

                        $(win.document.body).find('table')
                            .addClass('compact')
                            .css('font-size', 'inherit');

                    }
                }
            ];
        }

        var language = {
            "decimal": "",
            "emptyTable": "No se encontró información en la tabla",
            "info": "Mostrar _START_ de _END_ de _TOTAL_ registros",
            "infoEmpty": "No hay registros disponibles",
            "infoFiltered": "(filtrar desde _MAX_ total registros)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": " Ver _MENU_ registros",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "No se encontraron coincidencias",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": ">",
                "previous": "<"
            },
            "aria": {
                "sortAscending": ": Ordenamiento ascendente activado",
                "sortDescending": ": Ordenamiento descendente activado"
            }

        };
        var spanish = {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        };

        var english =
        {
            "sEmptyTable": "No data available in table",
            "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
            "sInfoEmpty": "Showing 0 to 0 of 0 entries",
            "sInfoFiltered": "(filtered from _MAX_ total entries)",
            "sInfoPostFix": "",
            "sInfoThousands": ",",
            "sLengthMenu": "Show _MENU_ entries",
            "sLoadingRecords": "Loading...",
            "sProcessing": "Processing...",
            "sSearch": "Search:",
            "sZeroRecords": "No matching records found",
            "oPaginate": {
                "sFirst": "First",
                "sLast": "Last",
                "sNext": "Next",
                "sPrevious": "Previous"
            },
            "oAria": {
                "sSortAscending": ": activate to sort column ascending",
                "sSortDescending": ": activate to sort column descending"
            }
        
        };

        //configuracion.responsive = true;
        if (settings.stylebtn) {
            configuracion.dom = '<"html5buttons"B>Bfrtip';

            configuracion.dom = 'Blfrtip';
        } else {
            //configuracion.dom = '<clear>frtip'; 
        }
        //} else {
        //    configuracion.dom = 'Bfrtip';
        //}

        configuracion.language = spanish;//language;
        configuracion.searching = settings.searching;
        if (settings.buttons) {
            configuracion.buttons = botones;
            configuracion.dom = '<"html5buttons"B><"top"f><"clear"><"top"l>t<"clear"><"bottom"ip>';//'Blfrtip'; 
        }
        if (settings.pagestart > 0) {
            configuracion.initComplete = function (oSettings) {
                var oTable = this;
                oTable.fnPageChange(settings.pagestart);
            };
        }
        if (settings.scrollY !== '') {
            configuracion.scrollY = settings.scrollY;
            configuracion.scrollCollapse = true;
            configuracion.paging = false;
        } else {
            configuracion.pageLength = settings.pageLength;
            configuracion.lengthChange = settings.lengthChange;
        }
        if (settings.scrollX) {
            configuracion.scrollX = true;
            if (settings.scrollY === '') {
                configuracion.pageLength = settings.pageLength;
                configuracion.lengthChange = settings.lengthChange;}
        }
        if (!settings.ordering) {
            configuracion.ordering = settings.ordering;
        }
        if (settings.fixedColumns) {
            //configuracion.columnDefs = [
            //    { width: '220px', targets: 0 }
            //];
            //configuracion.paging = false;
            configuracion.fixedColumns = true;
            //configuracion.fixedColumns = {
            //    leftColumns: 1                
            //};
            console.log(configuracion);
        }
        if (settings.serverSide) {
            configuracion.processing = true; // for show progress bar
            configuracion.serverSide = true;
            configuracion.ajax = {
            //  "url": "/VLogistic" + settings.url,
              "url":  settings.url,
                "type": "POST",
                "contentType": "application/json; charset=utf-8",
                "datatype": "json",
                "data": function (d) {
                    console.log(d);
                    let entrada = {};
                    //entrada.prm_tabla = d;
                    //console.log(JSON.stringify(entrada));
                    if (settings.prmentrada != "") {
                        entrada = settings.prmentrada;
                        entrada.prm_tabla = d;
                    } else {
                        entrada = d;
                    }
                    console.log(JSON.stringify(entrada));
                    return JSON.stringify(entrada);
                },
                "dataFilter": function (data) {

                    var filtro = JSON.parse(data);
                    console.log(filtro);
                    filtro.recordsTotal = Number(filtro.recordsTotal);
                    filtro.recordsFiltered = Number(filtro.recordsFiltered);
                    //var json = filtro.d;
                    //if (config.tipodatatable) { json.data = JSON.parse("[" + filtro.d.data + "]"); }
                    //if (config.msjver) {
                    //    Jloading(false);
                    //    if (json.data.length <= 0) {
                    //        JmsjProcseo(config.msjcabsindatos, config.msjsindatos);
                    //    }
                    //}
                    return JSON.stringify(filtro); // return JSON string
                },
                "error": function (error) {
                    console.log(error);
                    //if (config.msjver) { Jloading(false); }
                    //JmsjError(config.msjcaberror, config.msjerror);
                }
            };
            configuracion.columns = settings.columns;

        }
        //dom: '<"html5buttons"B>lTfgitp',
        //var tablecomple = table.DataTable({
        //    pageLength: settings.pageLength,
        //    lengthChange: settings.lengthChange,
        //    responsive: true,
        //    dom: '<"html5buttons"B>Bfrtip',
        //    buttons: botones,
        //    searching: settings.searching,
        //    language: language,
        //    initComplete: function (oSettings) {
        //        var oTable = this;
        //        oTable.fnPageChange(settings.pagestart);
        //    }

        //});//.draw();
        var tablecomple = table.DataTable(configuracion);
        if (settings.serverSide) {
            $(".dataTables_filter input").keydown().off();
            $(".dataTables_filter input").keydown(function (keyData) {
                if (keyData.which === 13) { //execute on keyenter
                    tablecomple.search($(this).val()).draw(); //pass whatever you want here
                }

            }).on();
        }
        //console.log("table Terminada");
        //tablecomple.draw('full-reset');
        return tablecomple;
    };
    $.fn.JDatatableclear = function () {
        var table = this;
        if ($.fn.DataTable.isDataTable(table)) {

            //table.DataTable().clear();
            table.DataTable().destroy();

        }
        return table;
    };
    $.fn.LoadTagSelect = function (_setting) {
        var _cbo = this;

        var settings = $.extend({
            data: [],
            value: "",
            text: "",
        }, _setting);

        _cbo.html("");

        $.each(settings.data, function (i, result) {
            var _text = settings.text.split('+');
            var _textgen = "";
            $.each(_text, function (i, sub_result_text) {
                _textgen = _textgen + result[sub_result_text] + " ";
            });
            //_cbo.append("<option " + settings.tagdata + "='" + JSON.stringify(result) + "' value='" + result[settings.value] + "'>" + result[settings.text] + "</option>");
            _cbo.append($("<option value='" + result[settings.value] + "'>" + _textgen + "</option>").data("value", result));
        });
        return _cbo;
    };
    $.fn.PrecioUnitario = function () {
        let valor = this;
        let precio = Number(valor[0]);
        return Number(precio / 1.18).toFixed(2);
    };
    $.fn.IGV = function () {
        let valor = this;
        let precio = Number(valor[0]);
        let precioUni = Number(precio / 1.18).toFixed(2);
        return Number(precio - precioUni).toFixed(2);
    };


}(jQuery));

$(document).ready(function () {
    jQuery.fn.dataTable.Api.register('sum()', function () {
        return this.flatten().reduce(function (a, b) {
            if (typeof a === 'string') {
                a = a.replace(/[^\d.-]/g, '') * 1;
            }
            if (typeof b === 'string') {
                b = b.replace(/[^\d.-]/g, '') * 1;
            }

            return a + b;
        }, 0);
    });
})