**Given:** The finite family and all-plus sample in the Example.

1.1 The two statistic values are $-1$ and $+1$, so their affine hull is $\mathbb R$, the family is minimal, the convex hull is $[-1,1]$, and the sample mean is $1$, which is not in its interior $(-1,1)$. Hence [F2] already implies there is no finite MLE. [A1, F1, F2, algebra]

2.1 Let $S(h)=e^h+e^{-h}$, which is positive by [F1]. By [F3] and [F5], the two exponential terms have derivatives $e^h$ and $-e^{-h}$; [F6] therefore gives $S'(h)=e^h-e^{-h}$. The identity function has derivative $1$ directly from its difference quotient. Applying the logarithm derivative [F4] and chain rule [F5] to $\ell(h)=n(h-\log S(h))$ gives
$\ell'(h)=n\left(1-\frac{e^h-e^{-h}}{e^h+e^{-h}}\right)
=\frac{2ne^{-h}}{e^h+e^{-h}}>0$
for every finite $h$. Thus each finite $h$ admits a larger likelihood at a slightly greater field, and no finite $h$ maximizes it. [A1, F1, F3, F4, F5, F6, step 1.1, algebra] ∎