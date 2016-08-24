package van.tian.wen.rnstudyproject.RNModel;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by RadAsm on 16/8/23.
 */
public class ToastCustomModel extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT = "SHORT";
    private static final String DURATION_LONG = "LONG";

    public ToastCustomModel(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ToastCustomAndroid";
    }

    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }

    @ReactMethod
    public void callBackFunction(boolean flag, Callback successCallback, Callback errorCallback) {
        if (flag) {
            successCallback.invoke(1, 2, 3, 4, 5);
        } else {
            errorCallback.invoke(6, 7, 8, 9, 10);
        }
    }

    @ReactMethod
    public void promiseCallbackTest(boolean flag, Promise promise) {
        if (flag) {
            promise.resolve(100);
        } else {
            promise.reject("promise Error", "wrong");
        }
    }

}
