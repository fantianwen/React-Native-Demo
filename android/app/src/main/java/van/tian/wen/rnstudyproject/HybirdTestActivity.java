package van.tian.wen.rnstudyproject;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.TextView;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * 测试RN向原生进行界面跳转
 */
public class HybirdTestActivity extends ReactActivity {

    private TextView textTextView;

    @Override
    protected String getMainComponentName() {
        return null;
    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.actiivty_hybird_test);

        textTextView = (TextView) findViewById(R.id.textTextView);

        initData();

    }

    private void initData() {
        int data = getIntent().getIntExtra("TEST_INTENT_DATA", 1);
        textTextView.setText(String.valueOf(data));
    }


    private void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }


    public void toRN(View view){
        WritableArray array = Arguments.createArray();
    }

}
