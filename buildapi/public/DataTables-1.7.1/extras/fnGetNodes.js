/*
 * Function: fnGetDisplayNodes
 * Purpose:  Return an array with the TR nodes used for displaying the table
 * Returns:  array node: TR elements
 *           or
 *           node (if iRow specified)
 * Inputs:   object:oSettings - automatically added by DataTables
 *           int:iRow - optional - if present then the array returned will be the node for
 *             the row with the index 'iRow'
 */
$.fn.dataTableExt.oApi.fnGetDisplayNodes = function ( oSettings, iRow )
{
    var anRows = [];
    if ( oSettings.aiDisplay.length !== 0 )
    {
        if ( typeof iRow != 'undefined' )
        {
            return oSettings.aoData[ oSettings.aiDisplay[iRow] ].nTr;
        }
        else
        {
            for ( var j=oSettings._iDisplayStart ; j<oSettings._iDisplayEnd ; j++ )
            {
                var nRow = oSettings.aoData[ oSettings.aiDisplay[j] ].nTr;
                anRows.push( nRow );
            }
        }
    }
    return anRows;
};

$.fn.dataTableExt.oApi.fnGetFilteredNodes = function ( oSettings )
{
    var anRows = [];
    for ( var i=0, iLen=oSettings.aiDisplay.length ; i<iLen ; i++ )
    {
        var nRow = oSettings.aoData[ oSettings.aiDisplay[i] ].nTr;
        anRows.push( nRow );
    }
    return anRows;
};

$.fn.dataTableExt.oApi.fnGetFilteredData = function ( oSettings ) {
    var a = [];
    for ( var i=0, iLen=oSettings.aiDisplay.length ; i<iLen ; i++ ) {
        a.push(oSettings.aoData[ oSettings.aiDisplay[i] ]._aData);
    }
    return a;
}
