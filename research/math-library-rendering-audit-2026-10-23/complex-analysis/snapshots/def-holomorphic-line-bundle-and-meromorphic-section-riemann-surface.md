---
id: def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
kind: definition
title: "Holomorphic line bundles and meromorphic sections on a Riemann surface"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 0
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-meromorphic-differential-on-a-riemann-surface
  - def-meromorphic-function-complex-domain
  - def-isolated-singularity-types
  - def-smooth-manifold
  - def-topological-manifold-without-boundary
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - thm-chain-rule-for-complex-derivatives
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - def-vector-bundle-chart-and-transition-function
  - thm-vector-bundle-construction-from-a-smooth-cocycle
  - def-local-frame-and-global-frame-of-a-vector-bundle
  - def-smooth-section-local-section-and-support
  - prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components
  - def-dual-and-hom-vector-bundles
  - def-wirtinger-derivatives
  - def-bigraded-complex-differential-forms
  - thm-d-dbar-decomposition-and-identities
  - def-smooth-differential-k-form
  - def-wedge-product-of-differential-forms
  - def-exterior-power-bundle-of-the-cotangent-bundle
  - thm-identity-theorem-holomorphic-functions
  - thm-zero-order-factorization-holomorphic-function
  - thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 14, printed pp. 118–119: holomorphic line bundles as 1-dimensional holomorphic vector bundles, transition cocycles, sections, and the canonical-bundle coefficient law s_i=(dz_j/dz_i)s_j"
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. V §11, (11.1)–(11.7), printed pp. 267–268: holomorphic bundle transitions, the local d-bar operator, the Dolbeault complex, and holomorphic sections"
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 3 §4, printed pp. 36–37: local form types and the Cauchy–Riemann criterion d-bar f=0 for holomorphy"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $X$ be a Riemann surface with maximal holomorphic atlas $\mathcal A$ ([[def-riemann-surface-and-holomorphic-atlas]]). A **smooth complex line bundle** $\pi:E\to X$ is a smooth real rank-two vector bundle whose fibres carry complex vector-space structures and which has local trivializations $\theta_i:E|_{U_i}\to U_i\times\mathbb C$ that are complex-linear on each fibre. The transition functions are defined by
$$\theta_i\circ\theta_j^{-1}(x,v)=(x,g_{ij}(x)v),\qquad g_{ij}:U_i\cap U_j\to\mathbb C^\times.$$
A **holomorphic line bundle** is such a bundle with a trivializing cover by domains of holomorphic charts for which every $g_{ij}$ is holomorphic. These functions obey $g_{ij}g_{jk}=g_{ik}$ on triple overlaps. Conversely, a holomorphic $\mathbb C^\times$-valued cocycle on a supplied countable open cover constructs a holomorphic line bundle: regard each scalar as its real $2\times2$ multiplication matrix, apply the smooth cocycle construction, and note that the resulting transitions commute with multiplication by $i$ and are holomorphic.

Write $e_i=\theta_i^{-1}(1)$ for the associated local frame. A smooth section has the form $s=f_i e_i$ locally, with $f_i\in C^\infty(U_i;\mathbb C)$ and $f_i=g_{ij}f_j$ on overlaps. It is **holomorphic** when each $f_i$ is holomorphic; $H^0(X,E)$ denotes the complex vector space of holomorphic sections. A **meromorphic section** is a family of meromorphic functions $f_i$ with the same transition law. For a nonzero meromorphic section, define its order at $p$ by $\operatorname{ord}_p(s):=\operatorname{ord}_{z_i(p)}(f_i)$ in any holomorphic chart and local frame. Its divisor is $(s):=\sum_{p\in X}\operatorname{ord}_p(s)\,p$; this sum is locally finite and is finite when $X$ is compact.

The **canonical bundle** is $K:=\Lambda^{1,0}T^*X$. If $z_i,z_j$ are holomorphic coordinates on an overlap, then its transition function in the convention above is $g_{ij}=dz_j/dz_i$: a local differential satisfies $f_i\,dz_i=f_j\,dz_j$. Hence holomorphic sections of $K$ are precisely holomorphic differentials, and meromorphic sections of $K$ are meromorphic differentials ([[def-meromorphic-differential-on-a-riemann-surface]]). The conjugate cocycle $\overline{g_{ij}}$ defines $\Lambda^{0,1}T^*X=\overline K$, while $\Lambda^{0,0}T^*X=X\times\mathbb C$. Thus the bundles of $E$-valued $(0,0)$- and $(0,1)$-forms are $E$ and $\Lambda^{0,1}T^*X\otimes E$; locally the latter has the form $f(z)\,d\bar z\otimes e$ ([[def-bigraded-complex-differential-forms]], [[def-exterior-power-bundle-of-the-cotangent-bundle]]).

For a holomorphic line bundle $E$, the **Dolbeault operator** is
$$\bar\partial_E:C^\infty(X,E)\longrightarrow C^\infty(X,\Lambda^{0,1}T^*X\otimes E),\qquad \bar\partial_E(fe_i):=(\partial_{\bar z}f)\,d\bar z\otimes e_i$$
in a holomorphic frame $e_i$ and coordinate $z$. It is $\mathbb C$-linear, satisfies $\bar\partial_E(fs)=\bar\partial f\otimes s+f\,\bar\partial_Es$, and $\bar\partial_Es=0$ exactly when $s$ is holomorphic. It extends coefficientwise to $E$-valued forms: in a holomorphic frame, $\bar\partial_E(\alpha\otimes e_i)=(\bar\partial\alpha)\otimes e_i$. This extension satisfies $\bar\partial_E^2=0$ and
$$\bar\partial_E(\beta\wedge s)=\bar\partial\beta\wedge s+(-1)^{\deg\beta}\beta\wedge\bar\partial_Es$$
for complex-valued forms $\beta$. The complex dual $E^*$ has inverse holomorphic cocycle $g_{ij}^{-1}$ and its corresponding Dolbeault operator.

## Facts & Assumptions

**Given:** A connected Riemann surface $X$ with its maximal atlas, a smooth complex line bundle $E\to X$, holomorphic trivializations and their transition functions, and a meromorphic section when order or divisor is discussed.

[F1] The charts of $X$ are compatible biholomorphisms; their transitions are smooth and have nonzero derivative. A Riemann surface is a connected smooth two-manifold ([[def-riemann-surface-and-holomorphic-atlas]], [[def-topological-manifold-without-boundary]], [[def-smooth-manifold]], [[cor-holomorphic-functions-are-real-analytic-and-smooth]]).

[F2] A smooth vector bundle is locally trivial with linear fibre maps; smooth sections have smooth local components in a frame. A smooth cocycle on a supplied countable cover constructs a smooth real vector bundle ([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]], [[def-vector-bundle-chart-and-transition-function]], [[thm-vector-bundle-construction-from-a-smooth-cocycle]], [[def-local-frame-and-global-frame-of-a-vector-bundle]], [[def-smooth-section-local-section-and-support]], [[prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]]).

[F3] Complex forms split by type, $d=\partial+\bar\partial$, and the scalar Dolbeault operator obeys the square-zero and graded Leibniz identities ([[def-smooth-differential-k-form]], [[def-wedge-product-of-differential-forms]], [[def-exterior-power-bundle-of-the-cotangent-bundle]], [[def-bigraded-complex-differential-forms]], [[thm-d-dbar-decomposition-and-identities]]).

[F4] A meromorphic function has isolated zeros and poles unless it is identically zero; a nonzero holomorphic function has a finite zero order and a local factorization by that power. The identity theorem applies on each connected chart. The transition law for a meromorphic differential is $h_j(w)=h_i(z(w))z'(w)$, equivalently $h_i\,dz_i=h_j\,dz_j$ ([[def-meromorphic-function-complex-domain]], [[def-isolated-singularity-types]], [[thm-identity-theorem-holomorphic-functions]], [[thm-zero-order-factorization-holomorphic-function]], [[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]], [[def-meromorphic-differential-on-a-riemann-surface]]).

[F5] For a smooth complex-valued function, $\partial_{\bar z}f=0$ is equivalent to complex differentiability and hence holomorphy; the chain rule gives the change-of-coordinate formula ([[def-wirtinger-derivatives]], [[thm-chain-rule-for-complex-derivatives]], [[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[F6] The smooth dual of a vector bundle is defined fibrewise; for a complex line the complex-linear dual transition is the inverse scalar ([[def-dual-and-hom-vector-bundles]]).

## Proof

**Proof technique:** direct local verification.

1.1 The fibrewise complex-linear trivializations give smooth transitions in $\mathbb C^\times$ and composition of the maps $\theta_i\circ\theta_j^{-1}$ gives $g_{ij}g_{jk}=g_{ik}$. For a supplied countable holomorphic cocycle, its real multiplication matrices are smooth $GL(2,\mathbb R)$ transitions, so [F2] constructs the underlying smooth rank-two bundle; these matrices commute with the standard complex structure, and their holomorphicity makes the local total-space charts holomorphic. [F1, F2, given]

1.2 In a local frame $e_i$, the cotangent line $K$ is spanned by $dz_i$. If $z_j=\phi(z_i)$, then $dz_j=\phi'(z_i)dz_i$ and a differential $\omega=f_i dz_i=f_j dz_j$ has $f_i=(dz_j/dz_i)f_j$. Since $\phi'$ is holomorphic and nowhere zero, these are holomorphic line-bundle transitions; a local section of $K$ is holomorphic or meromorphic exactly when its coefficient $f_i$ is, so these sections are precisely the corresponding differentials. Conjugation gives the stated transitions for $\overline K$, and the type decomposition gives the local formulas for $E$-valued forms. [F1, F3, F4, given, algebra]

1.3 Let $Z$ be the set of points having a neighborhood on which the section is zero. It is open. If $p$ is in its closure, choose a connected chart and frame around $p$; the meromorphic coefficient has zeros accumulating at $p$. A pole at $p$ is impossible because its finite principal part is nonzero on a punctured neighborhood, and otherwise the holomorphic identity theorem makes the coefficient identically zero near $p$. Thus $Z$ is closed; since $X$ is connected and the section is nonzero, $Z=\varnothing$. Each local representative consequently has a finite Laurent order at every point. Under a change of frame it is multiplied by a holomorphic unit, and under a coordinate change its argument is composed with a biholomorphism with nonzero derivative; neither operation changes the zero or pole order. Its zeros and poles are therefore locally isolated, so the divisor is locally finite and has finite support on compact $X$. [F1, F4, given]

1.4 On an overlap with $z_j=\phi(z_i)$ and $e_j=g_{ij}e_i$, a section has coefficients $f_i=g_{ij}f_j$. The chain rule and holomorphy of $g_{ij}$ give $\bar\partial f_i=g_{ij}\bar\partial f_j$ as $(0,1)$-forms, so the local formula defines a global operator. The same calculation applies to $E$-valued forms; the scalar graded Leibniz rule gives the displayed rule, and scalar $\bar\partial^2=0$ gives $\bar\partial_E^2=0$. By [F5], its kernel on sections is exactly the holomorphic sections. [F3, F5, given, algebra]

2.1 In the complex-linear dual frame the transition is $g_{ij}^{-1}$, which is holomorphic and nonvanishing, so the dual is a holomorphic line bundle and the same local construction defines $\bar\partial_{E^*}$. The preceding coordinate and frame calculations establish all stated definitions and well-definedness claims. No choice principle is used. [F2, F6, step 1.1, step 1.2, step 1.3, step 1.4] ∎
