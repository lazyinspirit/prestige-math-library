# Critical Abelian Higgs vortex prerequisite scaffold

This is a planned mathematical A/B pair for root registration; no theorem below is accepted or used as a current supplier. The source JSON retains exact proof design and inspected supplier Statements. No physical premise enters this pair. Root owns plan/native append and import reconciliation.

A page: `qftx-abelian-higgs-vortex-existence-mathematics`. B companion: `qftx-abelian-higgs-vortex-existence-mathematics-examples`. Proposed order: 967.5, subject to root integration.

Prerequisite pages: `ascoli-arzela`, `integration-of-forms-and-the-general-stokes-theorem`, `lax-milgram-and-weak-elliptic-solutions`, `maximum-principles-harnack-and-liouville-in-rn`, `product-measures-and-the-fubini-tonelli-theorems`, `relations-functions-and-quotients`, `schauder-and-lp-elliptic-estimates`, `smooth-approximation-and-sobolev-extension`, `sobolev-poincare-and-morrey-inequalities`, `weak-derivatives-and-sobolev-spaces`, `weak-elliptic-maximum-principles-and-holder-regularity`.

The generic nonlinear effective-model comparison stays in physics batch33. This pair supplies the stronger exact critical arbitrary-divisor existence, equality/minimum and bounded-endcollar conclusions. Do not substitute a radial unit-winding solution or invent a Taubes full-text review.

## Critical Abelian Higgs fields, winding and divisor data

ID: `def-qftx-critical-abelian-higgs-divisor-data`; kind: `definition`; domain/library: mathematics; axiom scope: ZF + full AC, including inherited AC_omega.

Planned dependencies: `def-axiom-of-choice`.

Claim contract: For e>0, xi>0 define smooth real U(1) connection A on R2, q:R2->C, D=d-iA, B=dA12, energy int[B²/(2e²)+|Dq|²+e²(|q|²-xi)²/2], winding n at infinity and the finite divisor sum m_j[z_j] of degree |n| with arbitrary distinct centers and positive multiplicities. Define gauges, decay/boundary conditions and scalar Taubes h problem exactly.

Local authoring obligation: For e>0, xi>0 define smooth real U(1) connection A on R2, q:R2->C, D=d-iA, B=dA12, energy int[B²/(2e²)+|Dq|²+e²(|q|²-xi)²/2], winding n at infinity and the finite divisor sum m_j[z_j] of degree |n| with arbitrary distinct centers and positive multiplicities. Define gauges, decay/boundary conditions and scalar Taubes h problem exactly.

## Taubes disk barriers and monotone Dirichlet iteration

ID: `lem-qftx-taubes-disk-barriers-and-monotone-iteration`; kind: `lemma`; domain/library: mathematics; axiom scope: ZF + full AC, including inherited AC_omega.

Planned dependencies: `def-qftx-critical-abelian-higgs-divisor-data`, `def-axiom-of-choice`, `def-sobolev-space-wkp-and-its-norm`, `thm-lax-milgram`, `thm-weak-maximum-principle-for-coercive-divergence-form-equations`, `thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian`, `thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian`, `thm-higher-order-sobolev-embedding`, `thm-extension-theorem-for-bounded-smooth-domains`.

Claim contract: For any finite planar divisor and kappa>0, prove explicit global logarithmic subsolution u_minus=sum m_j log(r_j²/(r_j²+lambda)) for lambda>=4n/kappa. On each containing disk construct singular Dirichlet Green u_sing, supersolution u_sing+psi with Delta psi=-kappa, and prove ordering. After singular subtraction v, use the positive (-Delta+L) Dirichlet resolver to prove monotone convergence to a smooth solution of -Delta v+kappa(exp(u_sing+v)-1)=0 with zero outer boundary. Prove maximum principle u<=0, uniform local bounds after a fixed singular subtraction, and the exact elliptic estimates needed for an exhausting-disk subsequence. Avoid unnecessary unproved exponential-functional/Trudinger coercivity assumptions.

Local authoring obligation: For disk radius R containing all z_j, use u_sing(z)=sum m_j log(R²|z-z_j|²/|R²-conj(z_j)z|²), A_R=exp(u_sing) smooth nonnegative, psi=kappa(R²-|z|²)/4. Choose L>=kappa max A_R exp(psi); (-Delta+L) inverse positive by maximum principle. Iterate T(v)=(-Delta+L)^-1[kappa+Lv-kappa A_R exp(v)] between lower u_minus-u_sing and upper psi. Monotone RHS derivative nonnegative; bound u_R<=0 by maximum principle. For exhaustion, subtract fixed u_minus, not R-dependent u_sing: on each compact disk its regular difference has bounded Laplacian and bounded boundary values, so local bounds survive R->infinity. Obtain n=2 W2p and Schauder compactness with exact supplier hypotheses; prove regularity at centers and derivative decay before claiming finite energy.

## Planar critical vortices for arbitrary finite divisors

ID: `thm-qftx-taubes-arbitrary-divisor-plane-vortex`; kind: `theorem`; domain/library: mathematics; axiom scope: ZF + full AC, including inherited AC_omega.

Planned dependencies: `def-qftx-critical-abelian-higgs-divisor-data`, `lem-qftx-taubes-disk-barriers-and-monotone-iteration`, `def-axiom-of-choice`, `thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations`, `thm-interior-schauder-estimate-for-uniformly-elliptic-equations`, `thm-higher-order-sobolev-embedding`, `thm-extension-theorem-for-bounded-smooth-domains`, `thm-ascoli-arzela-sufficiency`, `thm-weak-maximum-principle-for-coercive-divergence-form-equations`, `thm-strong-maximum-principle-for-classical-subharmonic-functions`.

Claim contract: For every effective finite divisor D=sum m_j[z_j] on R2, of total degree N>=0, and kappa=2e²xi>0, prove unique distributional h satisfying Delta h+kappa(1-exp h)=4pi sum m_j delta_zj, h->0, and h-2m_j log|z-zj| smooth near each centre. If N>0, prove h<0 off the divisor; for empty D prove h=0 and the flat constant vacuum. Prove smooth gauge reconstruction, finite energy, flux 2pi N, and exponential decay of h and its derivatives (any rate strictly below sqrt(kappa)), hence of gauge-invariant curvature/covariant gradients; state field decay in a canonical exterior gauge rather than falsely requiring the raw polynomial phase to decay exponentially. All arbitrary centres/multiplicities retained; negative winding by reflection/conjugation.

Local authoring obligation:  Exhaust disks using the previous explicit barriers and fixed singular subtraction; obtain smooth limits using the exact n=2 elliptic estimates and Ascoli. For strict negativity, if w=-h>=0 and Delta w<=kappa w, then w(x)cos(sqrt(kappa)t) is nonnegative superharmonic on a narrow 3D slab; the classical subharmonic strong maximum principle applied to its negative propagates any zero, contradicting logarithmic singularities. For exterior decay use C exp(-alpha(r-R)), alpha<sqrt(kappa), and the classical comparison for Delta-c with alpha²<c<kappa; no special-function supplier is required. Prove derivatives decay by local estimates before asserting finite energy. Uniqueness follows from the weak maximum principle on expanding disks applied to the smooth difference after logarithmic cancellation. Treat empty divisor separately: h=0, flat connection and constant scalar, without a false strict-negativity assertion. Polynomial-phase reconstruction has algebraic phase tails for displaced centres; gauge-invariant h/B/Dq decay exponentially, and a smooth degree-zero exterior gauge cleanup produces canonical field tails.

## Global energy minima for critical Abelian Higgs vortices

ID: `thm-qftx-critical-vortex-global-energy-minimum`; kind: `theorem`; domain/library: mathematics; axiom scope: ZF + full AC, including inherited AC_omega.

Planned dependencies: `def-qftx-critical-abelian-higgs-divisor-data`, `thm-qftx-taubes-arbitrary-divisor-plane-vortex`, `def-axiom-of-choice`, `thm-general-stokes-theorem`.

Claim contract: Prove exact Bogomolny identity for all admissible finite-energy same-winding configurations, including boundary-current control, E>=2pi xi |n|. Taubes reconstructed solution attains equality, hence is an absolute transverse energy minimizer without any radial or unit-winding restriction. Prove first variation and stable energy minimum; do not assert uniqueness of all solutions beyond gauge at a fixed divisor.

Local authoring obligation: Prove exact Bogomolny identity for all admissible finite-energy same-winding configurations, including boundary-current control, E>=2pi xi |n|. Taubes reconstructed solution attains equality, hence is an absolute transverse energy minimizer without any radial or unit-winding restriction. Prove first variation and stable energy minimum; do not assert uniqueness of all solutions beyond gauge at a fixed divisor.

## Fixed-flux cylinders and uniform end-collar energy

ID: `thm-qftx-critical-flux-cylinder-linear-energy`; kind: `theorem`; domain/library: mathematics; axiom scope: ZF + full AC, including inherited AC_omega.

Planned dependencies: `def-qftx-critical-abelian-higgs-divisor-data`, `thm-qftx-taubes-arbitrary-divisor-plane-vortex`, `thm-qftx-critical-vortex-global-energy-minimum`, `def-axiom-of-choice`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`.

Claim contract: On R2 x [0,L], define full 3D critical Abelian-Higgs static energy with fixed flux 2pi n on each transverse slice, no radial flux leakage, uniform vacuum approach and the angular one-form condition. For fixed smooth finite-energy end traces in the same canonical exterior gauge, prove exterior phase cleanup and L2 differences from one selected arbitrary-divisor planar minimizer; construct smooth fixed-width linear-interpolation collars of finite energy C0,C1 independent of L. Then prove T_n L<=inf E_L<=T_n(L-2ell)+C0+C1 with T_n=2pi xi |n|; in particular inf E_L=T_n L+O(1). Matching minimizing traces give an exact translation-invariant minimum. Keep this a mathematical fixed-flux boundary variational statement, not point-source self-energy or a quantum Wilson-loop claim.

Local authoring obligation: Use uniform nonvanishing of q outside a compact set to remove its degree-zero phase relative to exp(in theta) by a globally extended smooth gauge. Potential control gives |q|-sqrt(xi) in L2 and finite Dq gives the residual connection in L2. Thus canonical representatives of any two admissible finite-energy end profiles differ in L2 in fields and connection. A smooth fixed-width convex blend has finite longitudinal and transverse energy and preserves the exact asymptotic phase/flux; prove the product estimates rather than assuming arbitrary finite energy implies an L2 gauge difference. Slice the Bogomolny lower bound with Fubini, concatenate collars and a Taubes minimizer for the upper bound, and verify zero-middle endpoint L=2ell.

## A double vortex and a separate third vortex

ID: `ex-qftx-multiple-centred-critical-vortex`; kind: `example`; domain/library: mathematics; axiom scope: ZF + full AC, including inherited AC_omega.

Planned dependencies: `def-qftx-critical-abelian-higgs-divisor-data`, `thm-qftx-taubes-arbitrary-divisor-plane-vortex`, `thm-qftx-critical-vortex-global-energy-minimum`, `thm-qftx-critical-flux-cylinder-linear-energy`.

Claim contract: Apply arbitrary-divisor theorem to D=2[z0]+[z1] and retain separately arbitrary n; exhibit h boundary data, reconstructed flux 6pi, tension 6pi xi and fixed-flux cylinder bounds without claiming an elementary closed profile.

Local authoring obligation: Apply arbitrary-divisor theorem to D=2[z0]+[z1] and retain separately arbitrary n; exhibit h boundary data, reconstructed flux 6pi, tension 6pi xi and fixed-flux cylinder bounds without claiming an elementary closed profile.

## Source and integrity boundary

Tong’s full 24-page `vortex.pdf` was retrieved; owner read PDFpp1–6 (printed70–75) only. Its critical model, square completion and arbitrary-position discussion support the planning. Taubes DOI metadata was inspected on a landing page, but Project Euclid full-text requests were blocked and no complete Taubes proof reading is claimed. Native author must retrieve authoritative full text or complete the local barrier proof with exact supplier checks.

Existing ball Green and weak strong-maximum items with n>=3 are deliberately excluded from the n=2 argument. The disk logarithmic formula and classical strong comparison are explicit local duties. All original/imported mathematical carriers remain read-only.
