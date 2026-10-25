---
id: ex-flat-torus-dolbeault-harmonic-representatives
kind: example
title: Flat torus dolbeault harmonic representatives
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 10
deps:
- cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional
- def-axiom-of-choice
- def-bigraded-complex-differential-forms
- def-countable-choice
- def-covering-space-action
- def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
- def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
- def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface
- def-quotient-topology
- def-riemann-surface-and-holomorphic-atlas
- def-riemannian-metric-and-riemannian-manifold
- def-smooth-manifold
- def-topological-manifold-without-boundary
- def-wirtinger-derivatives
- lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas
- prop-covering-maps-are-local-homeomorphisms-with-discrete-fibres
- thm-d-dbar-decomposition-and-identities
- thm-elliptic-regularity-for-dolbeault-harmonic-forms
- thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology
- thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface
- thm-liouville-bounded-entire-function
- thm-maximum-modulus-principle-with-boundary-and-infinity-control
- thm-orbit-map-of-a-covering-space-action-is-a-covering
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)
    url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
    locator: 'Ch. VI §7, (7.1)–(7.2), printed p. 309: smooth Dolbeault decomposition and harmonic-representative isomorphism; (7.3)–(7.4), printed p. 310: Serre duality and conjugate-linear bundle-star comparison. The explicit torus and sphere computations are supplied locally. Ch. VI §4, (4.5), printed p. 297: the compact complex torus and metrics with constant coefficients.'
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited through the harmonic-projection, finiteness and duality items used below. Let $\Lambda=\mathbb Z\omega_1\oplus\mathbb Z\omega_2\subseteq\mathbb C$ be a lattice: $\omega_1,\omega_2$ are $\mathbb R$-linearly independent complex numbers. Let $X:=\mathbb C/\Lambda$ be the quotient by the translation action of $\Lambda$, with its quotient topology ([[def-quotient-topology]]); the action is a covering-space action with quotient map $p:\mathbb C\to X$ a covering ([[def-covering-space-action]], [[thm-orbit-map-of-a-covering-space-action-is-a-covering]], [[prop-covering-maps-are-local-homeomorphisms-with-discrete-fibres]]). Then $X$ is a compact Riemann surface: the local inverses of $p$ are charts, and their transition functions are translations, hence holomorphic ([[def-riemann-surface-and-holomorphic-atlas]], [[def-topological-manifold-without-boundary]], [[def-smooth-manifold]]); compactness holds because the closed fundamental parallelogram $\{s\omega_1+t\omega_2:0\le s,t\le1\}$ maps onto $X$.

Let $E=X\times\mathbb C$ be the trivial holomorphic line bundle and let $h$ be the Hermitian metric with $h(1,1)=1$; let $g$ be the flat compatible Riemannian metric transported from the Euclidean metric of $\mathbb C$. Then:

1. $H^{0,0}(E)=\mathbb C\cdot1$: the harmonic functions for $E$ are exactly the constants.
2. $H^{0,1}(E)=\mathbb C\cdot d\bar z$: the harmonic $(0,1)$-forms are exactly the constant multiples of $d\bar z$.
3. $H^{0,1}(X,E)=\mathbb C\cdot[d\bar z]$ has dimension $1$, with harmonic representative $d\bar z$; equivalently, under harmonic star duality the holomorphic differentials on $X$ are exactly the constant multiples of $dz$, so $H^0(X,K)=\mathbb C\cdot dz$.
4. The same conclusions hold with $\omega_1=1,\omega_2=i$ for the square torus $X=\mathbb C/(\mathbb Z\oplus i\mathbb Z)$, the model computed below.

Here $H^{0,q}(E)$ denotes the harmonic space $\mathcal H^{0,q}(E)=\ker\Delta''_q$ with its smooth representatives, while $H^{0,q}(X,E)$ denotes smooth Dolbeault cohomology.

## Facts & Assumptions

**Given:** The two real-linearly independent periods, the translation quotient, the trivial holomorphic bundle with weight $1$, the transported Euclidean metric, and full AC. The symbols $dz,d\bar z$ on $X$ denote descended forms; $z$ itself is only a local coordinate.

[F1] A covering-space action has a covering quotient map; covering maps are local homeomorphisms. A Riemann surface is a nonempty connected Hausdorff second-countable space with a holomorphic atlas ([[def-covering-space-action]], [[thm-orbit-map-of-a-covering-space-action-is-a-covering]], [[prop-covering-maps-are-local-homeomorphisms-with-discrete-fibres]], [[def-riemann-surface-and-holomorphic-atlas]]).

[F2] Harmonic forms in both degrees are smooth; degree zero is $\ker\bar D$ and degree one is $\ker\bar D^*$. On smooth forms with $\rho=\psi=1$, $\bar\partial f=(\partial_{\bar z}f)d\bar z$ and $\bar\partial^*(u\,d\bar z)=-2\partial_z u$ ([[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]], [[thm-elliptic-regularity-for-dolbeault-harmonic-forms]], [[lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas]]).

[F3] Bounded entire functions are constant ([[thm-liouville-bounded-entire-function]]).

[F4] Smooth degree-one cohomology classes have unique harmonic representatives; the degree-zero group is the holomorphic-section space. The bundle star gives a conjugate-linear isomorphism from the degree-one harmonic space to $H^0(X,K\otimes E^*)$, and in these flat trivial conventions sends $u\,d\bar z$ to $-i\bar u\,dz$ ([[thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface]], [[cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional]], [[thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology]], [[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).

## Verification

**Given:** The data in the Example and Facts.

1.1 The real-linear isomorphism $T(s,t)=s\omega_1+t\omega_2$ has continuous inverse. Its inverse is bounded, so for some $c>0$, $|T(m,n)|\ge c\sqrt{m^2+n^2}$; every nonzero period therefore has length at least $c$. Disks of radius less than $c/2$ have pairwise disjoint lattice translates and give the covering-action neighborhoods in [F1]. The quotient map is open since the preimage of the image of an open set is the union of its translates. The quotient is Hausdorff: for inequivalent $z,w$, only finitely many lattice points lie in any bounded disk by the bound just proved, so $\inf_{\lambda\in\Lambda}|z-w-\lambda|>0$; sufficiently small disks about $z,w$ project to disjoint neighborhoods. Images of a countable base of disks in $\mathbb C$ give a countable base of the quotient. It is nonempty and connected as a continuous image of $\mathbb C$. The projected closed parallelogram $T([0,1]^2)$ covers it by subtracting integer parts of the real coordinates, and is compact, making $X$ compact. Local inverses of the quotient map give charts with translation transitions. These are holomorphic and smooth, establishing the asserted compact Riemann surface and the descended flat compatible metric. Translation invariance also descends $dz,d\bar z$; no fundamental parallelogram is treated as a single global chart. [F1, given, construct, algebra]

2.1 By [F2], a harmonic function is smooth and its lift is entire and lattice-periodic. It is bounded on the compact parallelogram and hence everywhere, so [F3] makes it constant. Conversely constants have zero Dolbeault derivative and are harmonic by [F2]. Every smooth degree-one form is $u\,d\bar z$ with a periodic smooth coefficient, since $d\bar z$ is a global frame. Its adjoint vanishes exactly when $\partial_z u=0$, so $\bar u$ is an entire periodic function on the cover. The same boundedness and [F3] make $u$ constant; conversely constant coefficients have zero adjoint and are harmonic. Thus $\mathcal H^{0,0}(E)=\mathbb C1$ and $\mathcal H^{0,1}(E)=\mathbb C d\bar z$. [F2, F3, step 1.1, given]

3.1 By [F4] each smooth Dolbeault class has a unique representative in the space computed in step 2.1, so the quotient is spanned by $[d\bar z]$. This class is nonzero: if $d\bar z=\bar\partial f$ with smooth $f$, the adjoint identity gives $\|d\bar z\|^2=\langle f,\bar\partial^*d\bar z\rangle=0$, contradicting its everywhere nonzero pointwise norm and positive volume. Hence $H^{0,1}(X,E)=\mathbb C[d\bar z]$ has dimension one and $d\bar z$ is its harmonic representative. A holomorphic differential lifts to $a(z)dz$ with entire periodic coefficient $a$, so [F3] makes $a$ constant; conversely $dz$ descends and is holomorphic. Thus $H^0(X,K)=\mathbb C dz$, consistently with the conjugate-linear star formula in [F4]. Taking $\omega_1=1,\omega_2=i$ specializes every argument to the square torus. Full AC is inherited through [F2] and [F4]; the geometric construction and Liouville computation introduce no further choice. [F2, F3, F4, step 1.1, step 2.1, given, algebra] ∎

## Source notes

Demailly’s Dolbeault results in §7 apply to a holomorphic Hermitian bundle; the flat-connection de Rham decomposition in §3.3 is contextual and is not used for a varying Hermitian weight. The verification above uses proved local operator interfaces and gives the concrete calculation itself.
