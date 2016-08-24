package van.tian.wen.rnstudyproject.RNPackage;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;

import java.util.ArrayList;
import java.util.List;

import van.tian.wen.rnstudyproject.RNModel.NativeNavigatorModel;
import van.tian.wen.rnstudyproject.RNModel.ToastCustomModel;

/**
 * Created by RadAsm on 16/8/23.
 */
public class StudyReactPackage extends BaseReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new ToastCustomModel(reactContext));
        modules.add(new NativeNavigatorModel(reactContext));
        return modules;
    }
}
