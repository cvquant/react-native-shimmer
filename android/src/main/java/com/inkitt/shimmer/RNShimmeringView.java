package com.inkitt.shimmer;

import android.content.Context;
import android.util.AttributeSet;
import com.facebook.shimmer.ShimmerFrameLayout;


public class RNShimmeringView extends ShimmerFrameLayout {

    public RNShimmeringView(Context context) {
        super(context);
    }

    public RNShimmeringView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public RNShimmeringView(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
    }

    @Override
    protected void onLayout(boolean changed, int left, int top, int right, int bottom) {
        super.onLayout(changed, left, top, right, bottom);
        this.startShimmerAnimation();
    }
}
