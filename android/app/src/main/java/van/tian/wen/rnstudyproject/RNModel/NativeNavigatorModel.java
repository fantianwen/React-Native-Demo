package van.tian.wen.rnstudyproject.RNModel;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import van.tian.wen.rnstudyproject.HybirdTestActivity;

/**
 * Created by RadAsm on 16/8/24.
 */
public class NativeNavigatorModel extends ReactContextBaseJavaModule {

    public NativeNavigatorModel(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return NativeModelNames.NAME_NativeNavigatorModel;
    }

    @ReactMethod
    public void navigateToHybirdTestActivity(int data) {
        Intent intent = new Intent(getCurrentActivity(), HybirdTestActivity.class);
//        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        intent.putExtra("TEST_INTENT_DATA", data);
        getCurrentActivity().startActivity(intent);
    }


}
