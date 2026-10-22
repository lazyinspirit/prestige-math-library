# Two-neck scalar calculation — actual analytic subargument, no count theorem

This develops the internal-circle route after the complete k1 ten-source packet was independently reviewed. It is not a new review request, a symmetric-product regularity theorem, or a target-degeneration exhaustion theorem. The proper-background transport, rational slit and planar-response drafts remain outside the accepted k1 packet. The missing geometric identifications at the end remain real obligations.

## Component input and exact spaces

Take an old bordered component with a GIVEN actual real-linear normalized meromorphic boundary right inverse Q_O. Its forcing is supported away from one interior point q, Q_O f is holomorphic near q and (Q_O f)(q)=0, and its prescribed boundary-pole coefficients and all fixed interior derivatives are bounded by the forcing norm. The existing planar-response draft constructs exactly this input when there are no old internal slits. For an old slit component, the corresponding moving-tip realization is NOT yet supplied.

Take the disk component D=H with its one real boundary pole at infinity, point b=i, and the same actual normalized inverse Q_D from the planar response (after a Möbius coordinate change). Its two kernel functions are 1,z. Take the actual flat-torus mean-zero inverse Q_T for bar-d, twice the inverse for D=2bar-d in the proved torus module. Choose torus points a,x with disjoint flat coordinate disks, and disjoint old/disk coordinate disks at q,b. Fix their radius r sufficiently small that the disks of radius 4r are disjoint and lie in their charts.

At each puncture use the negative Hardy trace space H^sigma_- consisting of series G(theta)=sum_(n>=1) g_n e^(-in theta), with norm squared sum_(n>=1)(1+n)^(2sigma)|g_n|². On |z|>r put E_G(z)=sum g_n(r/z)^n. Let chi be one on r<=|z|<=2r and zero on |z|>=3r. Its derivative is supported on a fixed annulus separated from |z|=r. Hence f_G=bar-d(chi E_G) is smooth, and for each integer k and fixed sigma,

    ||f_G||_(H^k) <= C_(k,sigma,r) ||G||_(H^sigma).

Indeed each derivative of its nth term is bounded by a fixed polynomial in n times (r/|z|)^n, with |z|>=2r on that support. Cauchy--Schwarz bounds the resulting series uniformly, since every polynomial times 2^-n is square-summable. This proves the estimate directly, including sigma=-1/2. The forcing extends by zero across the puncture and outside the annulus.

For old/disk components set

    R_O(G)=chi E_G-Q_O f_G,
    R_D(G)=chi E_G-Q_D f_G.

On the punctured component these are holomorphic and have the allowed real boundary trace and real boundary poles. In a neighborhood of the puncture they are E_G+K(G), where K is holomorphic across the puncture, vanishes at that puncture, and every fixed derivative and positive Hardy trace of K on |z|=r is bounded by C||G||. Choose Q's normalization/forcing neighborhoods before choosing r. The forcing lies away from those smaller neighborhoods, so these are genuine interior holomorphic estimates, not point evaluations on arbitrary H1 sections.

## A necessary correction to naive torus mean subtraction

Subtracting the constant mean before using Q_T would make the correction nonholomorphic near each puncture. It is therefore unsuitable for a holomorphic Hardy response. Instead fix ONE smooth scalar density rho supported outside all puncture disks, with integral rho=1. For the two torus data write f=f_(G_a)+f_(G_x), I=integral_T f and define

    R_T(G_a,G_x)=chi_a E_(G_a)+chi_x E_(G_x)-Q_T(f-I rho).

The forcing of Q_T has zero integral, so this actual inverse applies. On the punctured torus,

    bar-d R_T=I rho.

In particular the correction is holomorphic near BOTH punctures, regardless of whether the final scalar obstruction vanishes. Its regular parts K_Ta,K_Tx and their all-order traces have the same bounded response estimates. By Stokes with inner circles negatively oriented,

    I=-pi*r*(g_(a,1)+g_(x,1)).

There are no omitted higher Laurent contributions: integral bar-d u=(1/(2i)) integral_boundary u dz, and only the z^-1 coefficient contributes. Thus the response is globally holomorphic exactly when the sum of its two first residues is zero. The added complex constant c_T remains a free kernel parameter. All these constructions are bounded linear maps on the specified Hardy spaces. The density rho correction is essential to the analytic matching argument.

## Exact nonzero modes

For a plumbing zw=tau, a regular positive trace H(z)=sum_(n>=1) h_n(z/r)^n becomes a negative trace in w with coefficients

    (P_tau h)_n=(tau/r²)^n h_n.

Consequently ||P_tau||_(H^sigma_+ -> H^sigma_-)<=|tau|/r² when |tau|<r². This is an exact Laurent identity, including the complex phase. Each regular-part response K above is bounded H^sigma_- -> H^sigma_+, and in fact smoothing, by the separation of the forcing annulus. No neck-length estimate is used.

Write lambda=epsilon L with epsilon>0 of a fixed complex target phase (equivalently absorb that phase into the first coordinate) and L in a small compact disk about a fixed nonzero L_0. On D the exact target coordinate from the rational slit model is

    tau_lambda(z)=lambda/h_lambda(z)
                  =(z-i)/(1+(conjugate(lambda)/lambda)*(z-i)/(2i+z-i)).

It is holomorphic near i, has derivative one there, and depends smoothly with uniformly bounded derivatives on L, since L stays away from zero. Choose r small enough for these coordinate charts to hold uniformly. Work in this coordinate for the second source plumbing eta*tau_lambda=lambda. Transport its cutoffs and D response by that actual coordinate change; their norm and parameter derivative bounds follow from the fixed separated annuli and the chain rule. Normalization remains Q_D f(i)=0.

Let G be the four incoming negative traces. The old background p_O has p_O(q)=i and derivative A!=0. The disk affine part is a z+b with a,b REAL and a near1. The torus background is a complex constant. Its nonzero regular trace is zero. On the two necks the exact nonzero-mode equations therefore have the form

    G=P_(epsilon,lambda) [H(a,L)+K(L)G].

Here H is the vector of positive traces of the fixed old p_O and of a z, in the actual puncture coordinates; K is the bounded vector of the four regular-part responses. Constants contribute no positive modes. On a compact L-neighborhood the operator and all fixed derivatives of K,H are bounded. The transfer norm is at most C epsilon. For epsilon small, ||P K||<=1/2, and the specified Neumann series gives the UNIQUE G. It satisfies

    ||G|| <= C epsilon,
    ||partial_L G|| <= C epsilon,
    ||partial_a G|| <= C epsilon,

with the same statements for any fixed number of derivatives on compact parameter sets. Differentiate (I-PK)G=PH; the uniformly bounded inverse multiplies only bounded lower derivatives, while every differentiated P has a factor epsilon. This proves the bounds by induction. Dependence is actual norm-smooth dependence, not an assumed formal asymptotic expansion.

## Constants and complex obstruction

Old normalization makes its regular constant exactly i. Disk normalization makes its regular constant b+a i. Hence constant matching is exactly

    c_T=i-K_Ta,0(G),
    b+a i=c_T+K_Tx,0(G).

In particular

    a=1+Im(K_Tx,0-K_Ta,0)(G).

The right side has a-derivative O(epsilon). Thus an actual scalar contraction on |a-1|<=C epsilon gives unique a>0, smoothly in L, with a-1=O(epsilon) and partial_L a=O(epsilon). The real part gives b, and the first equation gives c_T. This retains the two real disk affine freedoms; setting both affine value and b=i beforehand would over-normalize the system.

The two incoming first residues on the torus are now exactly

    epsilon*(A+K_O,1(G)),
    lambda*(a+K_D,1(G)),

where K_*,1 denotes the derivative of the regular correction at its puncture. Thus the remaining complex mean obstruction, up to the fixed nonzero Stokes factor -pi, is

    R=epsilon*(A+K_O,1(G))+lambda*(a+K_D,1(G)).

After division by epsilon this is A+L+E(epsilon,L), with ||E||_(C^1_L)<=C epsilon. On a small fixed closed disk about -A the map L -> -A-E(epsilon,L) maps the disk into itself and is a contraction for epsilon small. Its actual specified iteration gives unique L=-A+O(epsilon); the real 2x2 derivative of R/epsilon is I+O(epsilon), hence invertible. The forced torus equation then has I=0, so the matched scalar functions are genuinely holomorphic, not only approximately so.

All smallness statements here follow from the exact Laurent transfer factors and bounded component responses. There is no invocation of transversality for the split torus, and no error multiplied by a diverging neck length.

## What this does NOT yet prove

The calculation is a real two-neck scalar obstruction solution under the explicit component-response input. The planar input is locally proved, so it is useful for constructing the first internal slit candidate. It is NOT a count theorem. Before exporting an inductive actual unit-disk count one must still prove:

1. the complete scalar moving-slit Banach chart/right inverse, with the two real endpoint variations at EVERY old internal slit, including its identification with actual H3 symmetric-product kernel and cokernel;
2. that the glued incidence surface and map give the precise allowed holomorphic unit-domain disk, the marked point and bank are retained, and all geometric first variations correspond with the scalar system;
3. uniform extraction and exhaustion for ALL actual disks as the TARGET degenerates, ruling out inactive/zero-slit walls and identifying every limit with one of these solutions;
4. induction export of the actual response and regularity, not merely uniqueness of one scalar obstruction zero.

The fixed smooth-target compactness theorem does not supply item3. The accepted k1 packet and the independent common-boundary continuation work do not assert any of these missing internal target-neck conclusions.
