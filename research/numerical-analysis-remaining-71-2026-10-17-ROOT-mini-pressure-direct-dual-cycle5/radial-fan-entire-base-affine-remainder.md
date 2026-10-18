# Entire straight guard-base trace: exact radial-fan affine remainder

Research-only, 2026-10-18. This is a local pressure-trace estimate for the ACTUAL continuous P1 pressure on a radially refined fan. It uses no pressure equilibrium, no inverse estimate in the refined base mesh, and no control of the number of new base breakpoints. Its application requires the whole comparison-base interval to lie on one straight long side, away from its endpoint near the fan root.

## 1. Exact distributional identity

Put the common fan root at (0,0) and the straight base at x=d>0. Let I be an interval in the y coordinate of length L, with Y<=y<=2Y on I and L<=Y/2. Every fan triangle meeting that interval has the root as its third vertex. The base may have arbitrarily many nonuniform subdivisions; introduce the interval endpoints as subdivision points if necessary. Let the actual continuous P1 pressure have constant normal/tangential gradients (N_j,T_j) on these triangles.

Across the radial edge joining the root to (d,y_j), pressure continuity gives EXACTLY

    d [N]_j+y_j [T]_j=0.                               (1)

There is no additive intercept jump because all triangles have the same pressure value at the common root. Regard N,T as piecewise constant functions of y. In the sense of distributions on I,

    D T=-(d/y) D N,
    D(T+d N/y)=-d N/y^2.                               (2)

The right side is an ordinary L2 function. Thus G=T+dN/y has an absolutely continuous representative even when N and T have arbitrarily large individual jumps. This cancellation is the key distinction from summing the absolute values of the jumps.

Let C_G be the mean of G over I. The one-dimensional Poincare inequality and y comparable to Y give

    ||G-C_G||_L2(I) <= C_0 d L Y^(-2)||N||_L2(I),
    ||T-C_G||_L2(I) <= C_1(d/Y)||N||_L2(I).               (3)

Now choose the ACTUAL affine extractor C=mean_I T, rather than C_G. Since the mean minimizes the L2 distance to constants, ||T-C||<=||T-C_G||, so the same bound holds. This choice is exactly equivariant under affine pressure additions. Indeed for ANY constant N_0, apply the same argument to G_0=T+d(N-N_0)/y. Its derivative is -d(N-N_0)/y^2; hence

    ||T-mean_I T||_L2(I) <= C(d/Y)||N-N_0||_L2(I).      (3a)

The constants are independent of the base subdivision. C is the chord slope [f(right)-f(left)]/|I|, a LINEAR functional of the whole pressure trace. Adding an affine pressure adds exactly its tangential gradient to C and leaves the anchored trace remainder below unchanged. This exact affine covariance is required before working in the Darcy quotient. The intermediate C_G is used only in the proof and is not the final extractor.

## 2. Pressure trace and its actual energy weight

The base trace f(y)=p(d,y) is continuous and piecewise affine, with derivative T. Fix any y_* in I and define

    a_I(y)=f(y_*)+C(y-y_*),     g=f-a_I.

Then g(y_*)=0, and by (3)

    ||g'||_L2(I) <= C(d/Y)||N||_L2(I),
    ||g||_L2(I) <= C L(d/Y)||N||_L2(I).                 (4)

Point evaluation here is only for a one-dimensional continuous piecewise affine trace; it is not point evaluation on arbitrary H1 functions in two dimensions.

The physical parent fan triangles have area d Delta y/2. Consequently

    ||N||_L2(I)^2=(2/d) sum_K |K| |N_K|^2,              (5)

with fractional triangles at the two interval endpoints interpreted by the same radial-area formula. Combining (3)-(5) yields

    L ||g'||_L2(I)^2 + L^(-1)||g||_L2(I)^2
      <= C (L d/Y^2) ||grad p||_L2(parent fan patch)^2. (6)

For a pressure with an affine background removed, replace grad p on the right by that residual gradient. No bound on the absolute affine base slope C is claimed or needed: that slope belongs to the incoming macro background.

The left side is the standard scale-correct bound for the squared H1 energy of a pressure extension from this base interval into a fixed-shape collar of width L, after an endpoint treatment/cutoff. For the actual uniform comparison collar, the corresponding discrete lift still needs to be chosen and its boundary endpoints accounted for. Equation (6) itself is the proved trace estimate; it does not silently interpolate g through the coarse child.

## 3. Ring scaling

For the intended straight tooth-side reserve, d is the parent root-to-side distance, Y is comparable to the parent radius R_p, and L is comparable to the safe ring radius ell=b0 d. Then the right coefficient is

    L d/Y^2 ~ b0 (d/R_p)^2 ~ b0 (a/N)^2.               (7)

This improves the naive global Hardy-reset coefficient b0 delta^2 for the NONAFFINE local base trace. The affine slope itself may still differ from the global parent incoming slope; that difference is retained in the macro extractor and tangent inheritance calculation.

If such actual collar lifts on disjoint rings have squared total cost bounded by (7) times the parent quotient energy, then equal-child averaging and unit-child rescaling cost

    sqrt[b0(a/N)^2] / (sigma sqrt(b0 a))
      = sqrt(a)/(N sigma),                             (8)

where child radius r=sigma ell and B~N^2/(b0 a). This is a conditional application of (6), not a completed global recurrent estimate. The polynomial N gain is genuine in this trace identity and is not obtained by declaring all added guard pressure values affine.

Required application checks: the actual ring comparison base stays within one straight long side with |y| comparable to R_p; all below-base subdivisions remain radial from the same root; the actual trace lift/cutoff preserves prescribed reactions; disjoint ring patches have bounded overlap; and the affine macro slope C is kept rather than forced back to the global slope without its existing reset bound.
