/********************************************
*					CTSL					*
********************************************/

// Connecting

/**
* Connects either directly to a liberator or retrieves
* a session token from a keymaster if sKeyMasterUrl is specified
*/
CTSL.connect( sUrl, sUsername, sPassword, sKeymasterUrl );

/**
* Alternative to CTSL. Uses an existing SLJS connection
*/
CTSL.setConnection( oExistingConnection );

// Records

/**
* Returns a Record object (Api doc below)
*
* see http://jsfiddle.net/wolframhempel/8zrJb/ for example
*/
CTSL.getRecord( sSubject );

// Container

/**
* Returns a ko.observableArray with added methods that subscribes to sContainerSubject and
* creates an instance of fViewModel for every entry in the container 
* (with the record subject passed to the container )
*
* see http://jsfiddle.net/wolframhempel/NSQJT/ for example
*
* sDestroyMethod is the optional name of a method that will be invoked on fViewModel on destruction
* mParams - Liberator container parameters
*/ 
CTSL.getContainerObservableArray( sContainerSubject, fViewModel, sDestroyMethod, mParams );

/**
* Returns an Array of key:value maps for every record
* with the same additional methods as getContainerObservableArray (see below for API docs )
*/
CTSL.getContainer( sContainerSubject, mParams );

// Trading

/**
* Returns an instance of Trade (see below for API doc)
* tradechannel is optional and will default to "/PRIVATE/TRADE/FX"
*
* See http://jsfiddle.net/wolframhempel/8zrJb/7/ for example
*/
CTSL.getTrade( vTradeModel, sTradeChannelSubject );

/**
* Executes a synchronous ajax request for sUrl and returns the result as parsed
* XML DOM
*/
CTSL.loadXml( sUrl );

// Permissions

/**
* Returns an observable bound to the value for the permission
*/
CTSL.getPermissionObservable( sProduct, sNamespace, sAction );

// Settings
/**
* a (ko.) observable that contains the current connection state
*/
CTSL.connectionState

/**
* Function to be overwritten. Is called once streamlink connects
*/
CTSL.onReady

/**
* Time in milliseconds type3 updates are buffered before the first
* update event is fired
*/
CTSL.type3BufferTime


/********************************************
*					Record					*
********************************************/
// Returned by CTSL.getRecord( sSubject );

/**
* Returns a ko or CTSL observable bound to
* the value of sField. If a value is provided
* it will be set
*/
oRecord.observable( sField, sValue );

/**
* Internally destroys the subscription and creates
* a new one for the record. All listeners remain bound
*/
oRecord.setSubject( sSubject );

/**
* Unsubscribes the record
*/
oRecord.destroy();

/********************************************
*					Container				*
********************************************/
//Applies to both the objects returned by CTSL.getContainer 
//and CTSL.getContainerObservableArray

oArray.setWindow( nStart, nSize );
oArray.destroy();
/**
* Called for the js Array when any of the field contents change, as well as the
* container structure
*/
oArray.subscribe();

/**
* The following methods all manipulate the container
* subject string and resubscribe. addFilter and addSort
* are additive, so can be called multiple times
*/
oArray.setWindow( nStart, nSize );
oArray.addFilter( sField, sFilterExpression );
oArray.removeFilter( sField );
oArray.addSort( sField, bAscending );
oArray.removeSort( sField );

/********************************************
*					Trade 					*
********************************************/
// returned by CTSL.getTrade();

/**
* Returns a ko or CTSL observable bound to
* the value of a trade field. If a value is provided
* it will be set
*
* oTrade.observable( "state" ) will return a observable bound
* to the state of the trade
*/
oTrade.observable( sField, sValue );

/**
* Creates or returns an existing tradeleg with nIndex
* (see below for API docs)
*/
oTrade.getLeg( nIndex );

/**
* Sends a client event and triggers a state transition
*/
oTrade.sendEvent( sEvent );

/**
* Creates a new trade with the same field values. Resets the state to
* whatever is defined as the initial state
*/
oTrade.recycle();
