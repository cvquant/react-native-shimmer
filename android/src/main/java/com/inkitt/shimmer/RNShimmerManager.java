package com.inkitt.shimmer;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

public class RNShimmerManager extends ViewGroupManager<RNShimmeringView> {

    public static final String REACT_CLASS = "RNShimmeringView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public RNShimmeringView createViewInstance(ThemedReactContext context) {
        return new RNShimmeringView(context);
    }

}
