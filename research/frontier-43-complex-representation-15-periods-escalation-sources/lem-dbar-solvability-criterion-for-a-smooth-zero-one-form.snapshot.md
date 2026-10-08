---
id: lem-dbar-solvability-criterion-for-a-smooth-zero-one-form
kind: lemma
title: The dbar-solvability criterion and the holomorphic-orthogonality pairing
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-bigraded-complex-differential-forms
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - def-meromorphic-differential-on-a-riemann-surface
  - thm-general-stokes-theorem
  - thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81)"
      url: "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf"
      locator: "Ch. 2, §20.7, printed pp. 163–164: the vanishing of all holomorphic-differential pairings is the exact obstruction to solving the dbar equation in the Abel criterion; read through the sufficiency proof and its conclusion."
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 8, Theorem 8.10 and proof, printed pp. 80–82: the Dolbeault quotient H^{0,1}(X) is dual to Ω(X); and Ch. 15, ‘From smooth to holomorphic,’ printed pp. 132–133: a global dbar equation is solvable exactly when its class vanishes, equivalently when all holomorphic-differential pairings vanish."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Ch. VI §7, Theorem 7.3 and proof (7.4), printed pp. 309–310: the integration pairing H^{p,q}(X,E) × H^{n-p,n-q}(X,E*) is well defined and nondegenerate via the bundle Hodge-star map on harmonic representatives."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), in particular its countable-choice consequence used to choose compatible Hermitian metrics. Let $X$ be a compact connected Riemann surface, let $\Omega^{0,1}(X)$ be the space of smooth $(0,1)$-forms, let $\Omega^{0,0}(X)=C^\infty(X,\mathbb C)$, and define the global Dolbeault group of the trivial holomorphic line bundle by
$$H^{0,1}(X,\mathcal O_X):=\Omega^{0,1}(X)\big/\bar\partial\Omega^{0,0}(X).$$
Every smooth $(0,1)$-form is $\bar\partial$-closed because there are no $(0,2)$-forms on a Riemann surface. Let $K=\Lambda^{1,0}T^*X$ and let $\Omega(X)=H^0(X,K)$ be the space of holomorphic differentials ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]], [[def-meromorphic-differential-on-a-riemann-surface]]). For $\theta\in\Omega^{0,1}(X)$, the following are equivalent:

1. $\theta=\bar\partial g$ for some smooth $g:X\to\mathbb C$.
2. Its Dolbeault class $[\theta]\in H^{0,1}(X,\mathcal O_X)$ is zero.
3. $\displaystyle\int_X\theta\wedge\omega=0$ for every $\omega\in\Omega(X)$.

The pairing
$$B:H^{0,1}(X,\mathcal O_X)\times H^0(X,K)\longrightarrow\mathbb C,\qquad B([\theta],\omega)=\int_X\theta\wedge\omega$$
is well defined and induces the complex-linear isomorphism $H^{0,1}(X,\mathcal O_X)\cong H^0(X,K)^*$. The quotient definition gives the equivalence of (1) and (2); Stokes' theorem makes $B$ well defined; harmonic-star duality gives the isomorphism, hence the equivalence of (2) and (3) ([[thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology]], [[thm-general-stokes-theorem]]).

## Facts & Assumptions

**Given:** A compact connected Riemann surface $X$, a smooth $(0,1)$-form $\theta$, and the full Axiom of Choice.

[F1] The Riemann surface atlas supplies a connected smooth oriented real surface with its complex orientation. The trivial holomorphic line bundle has global Dolbeault operator $\bar\partial$, and on a curve $(0,2)$-forms vanish ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]], [[def-bigraded-complex-differential-forms]]).

[F2] Holomorphic differentials are the holomorphic sections of $K=\Lambda^{1,0}T^*X$; locally $\omega=f(z)\,dz$ with $\bar\partial f=0$, so $d\omega=df\wedge dz=0$ ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]], [[def-meromorphic-differential-on-a-riemann-surface]], [[def-bigraded-complex-differential-forms]]).

[F3] The manifold is boundaryless, and for every smooth $1$-form $\eta$ on compact $X$, Stokes gives $\int_Xd\eta=0$; compactness makes $\eta$ compactly supported ([[thm-general-stokes-theorem]]).

[F4] Assume full AC ([[def-axiom-of-choice]]). For a compact Riemann surface, a holomorphic line bundle with a Hermitian metric, and a compatible Riemannian metric, the integration pairing $H^{0,1}(X,E)\times H^0(X,K\otimes E^*)\to\mathbb C$ is well defined and induces an isomorphism $H^{0,1}(X,E)\to H^0(X,K\otimes E^*)^*$. The metrics required here exist for the trivial line bundle under the countable-choice consequence of AC ([[thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology]], [[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).



## Proof

**Proof technique:** quotient definition, Stokes' theorem, and the Dolbeault pairing.

1.1 By definition, $[\theta]=0$ in $\Omega^{0,1}(X)/\bar\partial\Omega^{0,0}(X)$ exactly when $\theta$ belongs to the image of the global operator, which is exactly the existence of a smooth $g$ with $\theta=\bar\partial g$. Every $(0,1)$-form is closed because the next bidegree is $(0,2)=0$, so this quotient is the Dolbeault group stated above. [F1, given]

1.2 If $\theta$ is replaced by $\theta+\bar\partial g$ and $\omega$ is holomorphic, then $d(g\omega)=\bar\partial g\wedge\omega$: the term $\partial g\wedge\omega$ has type $(2,0)$ and vanishes on a curve, while $d\omega=0$ by [F2]. Thus Stokes [F3] gives $\int_X(\bar\partial g)\wedge\omega=\int_Xd(g\omega)=0$. The integral therefore depends only on $[\theta]$. It is complex-bilinear, since wedge product and integration are complex-linear in each factor. If $\theta=\bar\partial g$, the same identity gives $\int_X\theta\wedge\omega=0$ for every $\omega$, proving (1)$\Rightarrow$(3). [F2, F3, given, algebra]

2.1 Choose a compatible Hermitian metric on $X$ and a Hermitian metric on the trivial line bundle, as supplied by [F4]; the full Axiom of Choice implies the countable-choice assumption used for this metric existence. Apply [F4] to $E=\mathcal O_X$, so $E^*\cong\mathcal O_X$ and $K\otimes E^*\cong K$. Its integration pairing is exactly $B$, hence the induced map $[\theta]\mapsto B([\theta],\cdot)$ is an isomorphism, in particular injective. If (3) holds, this functional is zero, so injectivity gives $[\theta]=0$ and (2) follows; then (1) follows from step 1.1. This also covers the zero class and the case $H^0(X,K)=0$: in the latter case the isomorphism forces $H^{0,1}(X,\mathcal O_X)=0$, so the vacuous orthogonality condition still implies solvability. The full Axiom of Choice is used only through the harmonic-star duality theorem and the stated metric-existence interface; the quotient and Stokes calculations are choice-free. [F4, step 1.1, step 1.2, given] ∎
