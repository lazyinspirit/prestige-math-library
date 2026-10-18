# Exact affine Darcy background in the full mixed boundary Schur map

2026-10-18. This calculation uses the actual strain form and every real lambda>0. It corrects a communicated but incorrect claim that the quotient removes mean velocity. The quotient below removes mean pressure gradient.

Use the response and residual definitions of `actual-real-parameter-child-dtn-bound.md`. A boundary state is x=(g,f), velocity trace first and NORMALIZED pressure trace second. Its interior solution is (w_x,p_x). Define

    S(x,y)=R_v,x(g_y)+R_q,x(f_y),
    R_v,x(h)=(w_x,E_v h)_lambda+b(E_v h,p_x),
    R_q,x(k)=b(w_x,E_p k).

The extensions in this definition may be arbitrary conforming extensions with the prescribed trace, since the response satisfies the complete interior equations. Thus

    S(x,y)=(w_x,w_y)_lambda+b(w_y,p_x)+b(w_x,p_y).    (1)

Here differences between the chosen velocity extension and w_y lie in V_0; differences between the chosen pressure extension and p_y lie in Q_0. Equation (1) proves symmetry, with the saddle signs as displayed. No integration by parts or omitted boundary reaction is used.

For a constant vector c define the exact boundary state

    B(c)=(g=c, f=-c dot X),

where X denotes the spatial coordinate. Its exact response is

    w_B=c,  p_B=-c dot X.                            (2)

Indeed strain(c)=0, so its momentum residual against EVERY velocity is

    (c,v)_lambda+b(v,-c dot X)=(c,v)-(v,c)=0.

For q in Q_0,

    b(c,q)=c dot integral_C grad q
          =c dot integral_boundary q n=0,

because q has zero boundary trace. Thus (2) satisfies every interior equation for every lambda, not merely the mass limit.

Its boundary residuals are exactly

    R_v,B(h)=0,
    R_q,B(k)=c dot integral_C grad(E_p k)
            =c dot integral_boundary k n.           (3)

The divergence-theorem identity in (3) is valid for continuous piecewise affine extensions. Consequently

    S(B(c),x)=c dot integral_boundary f_x n
             =c dot integral_C grad p_x,             (4)
    S(B(c),B(d))=-|C| c dot d.                        (5)

The background is NOT in the kernel of the full Schur map. It carries a nonzero boundary flux row. In particular one cannot drop (3) while gluing adjacent containers.

Let

    c_x=-(1/|C|) integral_C grad p_x,
    x_intr=x-B(c_x).

Linearity of the response and (2) give

    w_intr=w_x-c_x,
    p_intr=p_x+c_x dot X,
    integral_C grad p_intr=0.                        (6)

Equations (4)--(5) yield

    S(B(c),x_intr)=0             for every c,
    S(x,x)=S(x_intr,x_intr)-|C||c_x|^2.              (7)

Thus (6)--(7) are the exact Schur-orthogonal affine-background decomposition. There is NO assertion that integral w_intr=0. That false conclusion would require replacing (4) by -c dot integral w_x, which cannot be done: testing the momentum equation by the constant vector c uses a boundary test, whose reaction is generally nonzero.

The decomposition identifies a precise background state and its flux. It does not show that the intrinsic child-to-child transfer has a nonzero eigenvalue or that its fixed smooth-source pressure cross-entry grows. Those require the genuine assembled exterior Schur map, not a pressure-only exterior impedance or an isolated fan.
