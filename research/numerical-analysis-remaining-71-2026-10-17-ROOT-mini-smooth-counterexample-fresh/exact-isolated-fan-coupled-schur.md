# Exact isolated-fan coupled Schur transfer and perturbation criterion

Research proof, 2026-10-18. This solves an actual finite MINI mixed block with **all** scalar pressure degrees of freedom retained. It is not a global recursive mode or an original pressure counterexample. No canonical/runtime/hash/readiness changes or tests.

## Exact finite fan result

Let F be any nondegenerate planar affine fan with root x_0=0 and ordered outer vertices v_1,...,v_m. Its triangles are (0,v_j,v_(j+1)); a closed fan works as well. Let V=|F|. Use the true MINI mass equations in elementwise gradient pressure form, with all bubble velocities and all P1 pressure nodal values. Prescribe root velocity a and gauge phi(0)=0. All other velocity equations are homogeneous, and impose every scalar pressure constraint. Boundary velocity is not set to zero on the outer polygon: this is a local mixed interface block.

There is a unique solution, and it is exactly

    a_outer=-(5/31)a at EVERY outer vertex,
    phi(x)=(3/31)a dot x,
    beta_K=-(140/279)a on EVERY triangle.                     (1)

The root's velocity reaction is

    f_root=(3/31)V a.                                       (2)

All pressure residuals, including the root pressure residual, vanish. This statement does not assume large N, alignment, uniform triangle areas, constant pressure imposed in advance, or omission of scalar pressure rows.

Proof: use b=27 lambda_0 lambda_1 lambda_2. Eliminating the two bubble velocity components gives the actual local nodal/pressure matrix

    [C_K       H_K]
    [H_K^T  -(7/10)K_K],
    C_ii=(4/45)|K|I, C_ij=(1/180)|K|I,
    H_(i,j)=(|K|/10)grad lambda_j,
    (K_K)_ij=|K|grad lambda_i dot grad lambda_j.               (3)

Put b_0=-(5/31)a and p=(3/31)a. Every outer vertex belongs only to triangles whose other two vertices are the root and an outer vertex. Its contribution on each incident triangle to the outer velocity equation is therefore

    |K|[(17/180)b_0+(1/180)a+(1/10)p]=0.                    (4)

Thus all the assembled outer equations vanish, irrespective of areas. The source-free bubble equation gives

    beta=-(14/27)(a+2b_0)-(14/9)p=-(140/279)a.

The resulting unweighted cell mean is exactly

    (1/3)(a+2b_0)+(9/20)beta=0.                              (5)

Since pressure gradients are constant on each cell, (5) enforces **all** pressure constraints, not just tangential continuity. Finally the root velocity row on each triangle is

    |K|[(16/180)a+(2/180)b_0+(18/180)p]
          =|K|(3/31)a,

proving (2).

For uniqueness, fix the root velocity and take the homogeneous difference of two solutions. Testing its free-velocity equation by its own velocity and using all pressure constraints gives zero full L2 mass, hence zero velocity. Testing the remaining pressure equation with each cell bubble forces grad phi=0 cellwise. Connectedness and the root gauge make phi=0. This also proves invertibility of the actual finite saddle block after the stated root/gauge constraints.

## Exact Schur rank and a geometry-independent inverse norm

Eliminate bubbles and order free outer velocities y and pressure coefficients q with q_0=0. The true free block is

    L_0=[C H; H^T -G],   G=(7/10)K.                         (6)

C is positive definite. K is the full fan scalar P1 stiffness with the root pressure gauged, so K and G are positive definite. Thus

    S=G+H^T C^(-1)H

is positive definite, with no omitted pressure subspace. The exact factorization is

    L_0=R^T diag(C,-S)R,
    R(y,q)=(y+C^(-1)Hq,q).                                 (7)

Equip x=(y,q) with

    ||x||_*^2=||y+C^(-1)Hq||_C^2+||q||_S^2.                 (8)

Then L_0 has inverse norm exactly one from the corresponding dual norm to (8). This follows by conjugating (7) with diag(C^(1/2),S^(1/2)); the resulting operator is diag(I,-I). In particular

    ||y||_C <= sqrt(2)||x||_*.

No inverse mesh inequality or N-dependent saddle constant occurs in this norm.

For the exact solution (1), C^(-1)Hq=(18/17)p is a constant outer vector and y+C^(-1)Hq=-a/17. Also

    ||q||_S^2=(31/34)V|p|^2,
    ||x_0||_*^2=(218/23715)V|a|^2.                          (9)

These follow directly from the row sums of C and H and G(q,q)=(7/10)V|p|^2. Thus the reference state has an explicitly controlled finite fan norm, independent of geometry.

## What a bounded exterior impedance actually yields

Suppose actual child/filler elimination adds a symmetric mixed impedance J on the retained fan interface, and possibly a known inhomogeneous boundary load. After the root velocity is fixed, write the exact equations as

    (L_0+J_ff)x=f_0+g,

where f_0 is the isolated root-induced right-hand side. The residual on the exact isolated state includes the retained root coupling; define

    e_0=g-J_ff x_0.

Thus g must include the term -J_f0 a and every inherited pressure/velocity boundary load. They may not be dropped by declaring the exterior homogeneous.

If actual estimates give

    ||J_ff||_(* -> *dual)<=epsilon<1,
    ||e_0||_*dual<=eta sqrt(V)|a|,

then (7) and the Neumann inverse give the rigorous coupled estimate

    ||x-x_0||_* <=eta/(1-epsilon) sqrt(V)|a|.                (10)

This is a residual-sensitive result; a bound on child star areas alone is not the second inequality. In particular pressure trace mismatch contributes to e_0 and must be bounded using the actual child mixed Darcy DtN, including its scalar pressure trace norm.

There is a useful averaged attachment consequence. Let A_i=sum_(K incident i)|K| for outer fan vertices. The actual local C matrix gives

    sum_i A_i |y_i-(y_0)_i|^2
       <=12||y-y_0||_C^2
       <=24 eta^2/(1-epsilon)^2 V|a|^2.                    (11)

Indeed the two-outer-vertex local C submatrix has smallest eigenvalue |K|/12. Thus, among attachment vertices with comparable A_i and whose total star weight is a fixed fraction of V, all but a controlled fraction retain normal amplitude at least half the ideal 5|a|/31 whenever eta is sufficiently small. This conclusion does not require an infinity-norm bound that deteriorates with the number of fan attachments. Actual recursion would still have to establish the same residual bounds uniformly for the surviving children and control their inherited pressure states.

## Exact pressure-trace compatibility with a child

The ideal parent slope is p_parent=3a/31. An isolated ideal child with root velocity b_0 has slope

    p_child=3b_0/31.

At its flat base, the difference of the affine traces, after matching the common root value, is

    (p_child-p_parent) dot (x-x_child)
       =-(108/961)a dot (x-x_child).                        (12)

Hence the trace mismatch is **exactly zero** if a is normal to that base. If a has tangential component O(delta)|a| and the base size is r, its trace amplitude is O(delta r|a|). This identifies the normal branch as the compatible leading mode for aligned nearly parallel bases. Tangential velocity has a substantial inherited pressure trace and cannot be assigned the same ideal scalar transfer independently.

Equation (12) is an actual interface mismatch calculation, not a proof that the child residual in (10) is small: converting it to that bound requires the quantitative child/filler mixed DtN estimate in the correct norm, with its stated polylogarithmic constants and all nonaffine trace components. The owner/fractional geometry work supplies that separate interface. No global j=0 state or pressure-observation growth has been asserted here.

## True exterior cross blocks are controlled by a neutral velocity lift

This stronger formulation does **not** require the exterior scalar pressure impedance to be small. Let an actual exterior region have zero-interior-trace velocity space V_0, zero-interior-trace pressure test space Q_0, and interior weak kernel Z_0. Use either the Darcy velocity inner product or the real-parameter inner product (v,w)_lambda=(v,w)+lambda^(-1)a(v,w). All projections below are in that actual positive inner product.

Let Lg be the actual divergence-neutral boundary velocity lift: it has trace g and b(Lg,q)=0 for every pressure, including boundary-pressure extensions. Such a lift is the nodal trace extension corrected by the mean-one MINI cell bubbles. Let P be orthogonal projection onto Z_0. For zero boundary pressure the response is

    w_g=(I-P)Lg.

For zero boundary velocity and pressure trace p, the response w_p belongs to Z_0 and satisfies

    (w_p,z)_lambda=-b(z,p_b),  z in Z_0,

where p_b is any actual extension of that trace. Thus w_g and w_p are orthogonal. The exact exterior mixed boundary Schur matrix has block form

    J=[A H_1; H_1^T -E],
    A(g,h)=(w_g,w_h)_lambda,
    E(p,k)=(w_p,w_k)_lambda,
    H_1(g,p)=(Lg,w_p)_lambda.                              (13)

To verify the mixed sign, the pressure residual is b(w,p_b); for w_p its defining equation gives b(w_p,p_b)=-||w_p||lambda^2. For the velocity residual use the neutral lift Lh: its pressure pairing vanishes exactly, so the residual is (w,Lh)_lambda. This proves (13) and symmetry without bounding an unnormalized pressure gradient.

Put Q(g)=||Lg||lambda^2. Then, exactly,

    0<=A(g,g)<=Q(g),
    |H_1(g,p)|^2 <=[Q(g)-A(g,g)]E(p,p)<=Q(g)E(p,p).          (14)

Indeed P Lg is orthogonal to w_g, and w_p belongs to Z_0. In fact

    J[(g,p),(g,p)]=Q(g)-||P Lg-w_p||lambda^2.

Thus small free-boundary velocity lift mass controls the true mixed cross block even if E is large. This is stronger than an upper bound on the velocity-velocity DtN block alone.

## Pressure-only impedance reference preserves aggregate negative transfer

In the exact finite fan let f=C_f0 a be the root-to-free velocity column and h=H_0^T a the root-to-pressure column. Put k=C^(-1)f. The actual row sums give

    k=a/17 at every outer vertex,
    H^T k=(2/17)h,
    f^T C^(-1)f=(1/1530)V|a|^2.                            (15)

For arbitrary positive semidefinite scalar impedance E, retain all pressure rows and solve the true reference block

    [C H; H^T -(G+E)] (y_E,q_E)=(-f,-h).

Its pressure equation is exactly

    (S+E)q_E=(15/17)h.

Therefore

    f^T y_E=-f^T C^(-1)f-(2/17)h^T q_E
                      <=-(1/1530)V|a|^2.                   (16)

No prescribed gradient, j=0 condition, or sign of individual pressure coefficients is needed. The energy norm using S+E in place of S satisfies

    ||(y_E,q_E)||_E^2 <=(218/23715)V|a|^2,                 (17)

since (S+E)^(-1)<=S^(-1). E can substantially change individual outer values; (16) is an aggregate statement only.

## Actual mixed perturbation in the correct norm

Let L_E denote that pressure-only reference, with graph norm

    ||(y,q)||_E^2=||y+C^(-1)Hq||_C^2+||q||_(S+E)^2.

Suppose the actual exterior neutral lift on FREE outer velocity traces satisfies Q(y)<=epsilon ||y||_C^2. Equations (14) and E<=S+E imply that the remaining exact mixed perturbation

    Delta=[A H_1; H_1^T 0]

has operator norm from this graph norm to its dual at most

    d=2epsilon+2sqrt(2epsilon).                            (18)

For example the A term is bounded by epsilon||y||C||v||C, and each mixed term by sqrt(epsilon)||y||C||k||E; use ||y||C<=sqrt(2)||(y,q)||E. This proves (18) without a scalar pressure-lift constant in the perturbation size.

The retained root velocity and inherited boundary data produce an additional right-hand side g; it is not set to zero. If ||g||Edual<=eta sqrt(V)|a| and d<1, then the exact solution obeys

    ||x-x_E||E <=zeta sqrt(V)|a|,
    zeta=[eta+d sqrt(218/23715)]/(1-d).                     (19)

This follows by applying the unit-norm inverse of L_E to g-Delta x_E-Delta(x-x_E). If a neutral lift of the retained ROOT trace has Q_root(a)<=epsilon_0 V|a|^2, its root-induced terms -A_f0 a and -H_(root)^T a have combined dual norm at most

    sqrt(epsilon_0)[1+sqrt(2epsilon)]sqrt(V)|a|.

Any other inherited velocity or pressure forcing must be added to eta separately. In particular this root-lift hypothesis cannot be inferred from the free-outer lift bound: an exterior containing a large ancestor star may have a much larger root lift. No affine-background quotient is used to discard its boundary reaction.

Finally (15)--(19) imply

    f^T y <=[-1/1530+sqrt(2/1530)zeta]V|a|^2.              (20)

For zeta<=1/(2sqrt(3060)), the aggregate remains at most -V|a|^2/3060. This gives a real coupled negative-transfer criterion even for large positive pressure impedance. It still does not ensure that the aggregate occurs specifically at the designated child ROOT vertices rather than guards or reserve-base endpoints. Additional actual geometry/row control or a transfer formulated on complete child boundary states is required for a repeated branching conclusion. All root, source and inherited-pressure contributions remain present in (19).
