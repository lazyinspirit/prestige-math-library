# Actual uniform-halfplane distant-driver affine pressure estimate

Research continuation, 2026-10-18. This proves an incoming-background estimate for the actual uniform MINI mass equations. It does not bound an arbitrary total inner-hole trace, remove a child self-response, or prove the complete recursive construction. The actual boundary velocity and pressure reactions remain interface outputs.

Use the right-triangle half-plane lattice and exact C,H,K blocks in `uniform-mass-schur-symbol-and-flat-layers.md`. At base nodes j=0 prescribe both nodal velocity g and pressure f; impose every mixed row at j>=1, reconstruct every bubble, and retain the j=0 rows as reactions. Choose the bounded Fourier solution with the decaying branch at every nonzero tangential frequency. For summable base data its pressure tends to zero at infinity, fixing the gauge.

## 1. Statement with actual source norms

Suppose f_n and g_n are supported at |nd|>=R. Put

    F=d sum_n |f_n|+d^2 sum_n |g_n|.

Assume 0<d<=rho<=R/8. There is a real affine polynomial a(x,y) such that at **all** uniform-grid pressure nodes with |x|+y<=rho,

    |p_h(x,y)-a(x,y)|
                    <=C [rho^2/R^3+d/R^2] F.               (1)

The constant is independent of d,rho,R and the data. Thus d<=rho^2/R gives

    max_ports |p_h-a| <=C (rho/R)^2 (F/R).                  (2)

For pressure differences divided by rho, the gain relative to the natural larger-scale gradient F/R^2 is O(rho/R). Any fixed finite set of uniform-grid pressure ports is allowed, including base ports. The theorem concerns distant base drivers in an otherwise uniform half-plane. A curved outer interface, a finite base endpoint, a pressure kink at the child, or a coarse seven-node transition must be separately represented in those drivers or retained in the near-field operator; they are not covered by declaring them absent.

## 2. Stable-mode facts for the actual coupled equations

Here are the precise mode facts used, with their derivation. Normalize pressure by P=p/d and Fourier transform in n. Write z=exp(i theta) and use a vertical mode r^j. The full mixed determinant factors into the scalar mass factor c(theta,r) and the compact pressure factor. At theta=0 the stable limiting modes are:

    tangential mesh: (v,P)=(e_1,0),       r=r_t,
    normal mesh:    (v,P)=(e_2,k_n),     r=r_n,
    physical:       (v,P)=(0,1),         r=1,

with r_t,r_n,k_n exactly as in the preceding note. Their boundary matrix has determinant one. The double physical pressure factor at (theta,r)=(0,1) has leading part proportional to theta^2-(log r)^2, by the exact isotropic low-frequency expansion of (4) in that note. Analytic root perturbation on each side of theta=0 therefore gives one physical decaying root satisfying

    log r_ph(theta)=-|theta|+O(theta^2),
    |r_ph(theta)|<=exp(-c|theta|).                           (3)

Its normalized velocity is O(|theta|), and its pressure is normalized to one. The two other stable modes have modulus uniformly less than one near zero. Their boundary matrix remains invertible and all mode amplitudes are analytic separately for theta>0 and theta<0, extending continuously to theta=0. In particular the physical pressure amplitude in physical units is

    f_hat-d k_n g_hat,n
                    +O(|theta|[|f_hat|+d|g_hat|]).          (4)

This retains the effective normal-velocity monopole; zero flux has not been assumed.

For completeness, the uniform high-frequency solution bound has a direct operator proof that avoids individually labeled roots. On a closed tangential-frequency arc away from zero, the zero-base half-line matrix has block form [C_theta,H_theta;H_theta^*,-G_theta]. Here C_theta is uniformly positive, and G_theta=(7/10)K_theta is bounded below by a positive multiple of the identity, since K_theta includes the tangential contribution 4sin^2(theta/2). The Schur complement G_theta+H_theta^* C_theta^(-1)H_theta is therefore uniformly positive. This proves a uniform inverse bound on the half-line l2 space. Every stencil is finite-band, so conjugating by the weight exp(epsilon j) changes its operator norm by O(epsilon), uniformly on that arc. A Neumann inverse for sufficiently small fixed epsilon proves exponential vertical decay for a boundary-supported forcing. Differentiating the inverse identity in theta gives uniform bounds for all theta derivatives in the same weighted space. Prescribed base data are extended by zero to j>=1, producing just such a forcing in the first few rows. Thus the complete pressure solution multiplier is smooth and exponentially decaying on each closed nonzero-frequency arc, without any hypothesis on globally separate analytic roots.

Equivalently, the actual full-torus positivity forbids a unit-circle root away from zero. The stable boundary map has no kernel by the actual mixed mass energy identity. The velocity-only root reaches r=0 at theta=pi, becoming a one-row boundary-supported mode, but the operator proof above includes it automatically. This is why the apparent descriptor singularity does not affect the pressure bounds.

The low-frequency facts were additionally checked against the fully read exact algebraic supplier [halfplane-characteristic-and-stable-boundary-amplitudes.md](../numerical-analysis-remaining-71-2026-10-17-ROOT-mini-smooth-counterexample-fresh/halfplane-characteristic-and-stable-boundary-amplitudes.md), Sections 1--5. At theta=0 its pressure factor is proportional to

    -(r-1)^2(109r^2+862r+109),

which agrees with the independent normal recurrence and the simple stable normal root in the preceding note. No numerical root calculation or mesh experiment is used.

## 3. Pressure-kernel bounds

Choose a smooth frequency cutoff equal to one near zero. Split the pressure solution into its cutoff physical branch p_ph and the remaining part p_m. The latter contains both mesh branches near zero and every branch away from zero. All its vertical factors are bounded by exp(-cj). Its multiplier from the input vector (f,dg) is continuous and piecewise smooth at theta=0, with finite one-sided derivatives of every order.

Two elementary Fourier coefficient bounds suffice. For the mesh part, integration by parts twice on (-pi,0) and (0,pi) gives

    |K_m,j(n)|<=C exp(-cj)/(1+|n|)^2.                       (5)

There is no jump in the multiplier itself at zero; the possible derivative jump contributes the displayed n^(-2) term. Derivatives of vertical factors produce polynomial factors in j, absorbed by reducing c. Contributions away from zero are smooth periodic multipliers with the same exponential vertical bound.

Extend the cutoff physical branch to real (x,y) with Fourier factors exp(i theta x/d) exp((y/d)log r_ph). Every second spatial derivative introduces a multiplier O(d^(-2)|theta|^2). Its value and first theta derivative vanish at zero. Integration by parts three times, separately on the two half-arcs, therefore gives

    |D^2 K_ph,y(n)|<=C d^(-2)/(1+|n|)^3.                  (6)

The bound is uniform for y>=0. Indeed the third derivative of theta^2 exp(-c(y/d)|theta|) has uniformly bounded L1 norm, after rescaling theta by 1+y/d. Analytic amplitudes and the logarithm in (3) have bounded derivatives on each half-arc; the same rescaling bounds every product-rule term. The possible jump of the second derivative at zero gives a bounded n^(-3) boundary term. This proof does not require a maximum principle for the compact stencil.

For |x|+y<=rho and sources at |nd|>=R, tangential separation is at least R/2. Convolving (5) with the actual input gives

    |p_m(x,y)|<=C d F/R^2.                                (7)

Convolving (6) gives

    sup_(|x|+y<=rho) |D^2 p_ph(x,y)|<=C F/R^3.             (8)

The powers of d cancel explicitly: in (8), d^(-2)(d/R)^3 times the unweighted input sum F/d equals F/R^3. In (7), (d/R)^2 times F/d equals d F/R^2. Vector components of g are included through their individual pressure multipliers; their normalization is exactly the d in (4).

Take a to be the affine Taylor polynomial of p_ph at (0,0). Taylor's theorem, (7) and (8) prove (1). In particular the mesh contribution is controlled even at base ports, where it cancels the small nonlocal physical-branch base value so that the actual prescribed base pressure is recovered.

## 4. Scope of the completed estimate

This is an actual separated-source half-plane pressure estimate with a concrete power gain, not a universal projector or Rellich hypothesis. It keeps the effective monopole (4) and every actual base reaction. It supplies one component of an incoming/background reduction: far base drivers yield affine pressure near a small child, with the explicit error (1).

Still needed for the proposed recursive application are an actual decomposition of the parent's outer/coarse-boundary forcing into such incoming drivers with the stated F bound; treatment of a small kink at the child base; the matching curved/finite-outer-interface estimate; and passage through the coarse seven-node transition while retaining the full ideal child/environment self-response. In particular (1) does not declare the total twenty-dimensional child state close to affine or suppress arbitrary inner-boundary self-excitation.

No canonical, runtime, manifest, gate, test or commit operation was performed.
