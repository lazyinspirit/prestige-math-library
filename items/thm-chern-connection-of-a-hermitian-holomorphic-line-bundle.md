---
id: thm-chern-connection-of-a-hermitian-holomorphic-line-bundle
kind: theorem
title: "Chern connection of a Hermitian holomorphic line bundle"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 2
deps:
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - def-bigraded-complex-differential-forms
  - thm-d-dbar-decomposition-and-identities
  - def-smooth-differential-k-form
  - def-wedge-product-of-differential-forms
  - prop-exterior-derivative-of-a-function-is-its-differential
  - def-local-frame-and-global-frame-of-a-vector-bundle
  - prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components
  - def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union
  - def-whitney-sum-of-vector-bundles
  - thm-whitney-sums-are-smooth-vector-bundles
  - thm-chain-rule-for-complex-derivatives
  - def-complex-domain
  - def-wirtinger-derivatives
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. V §10, Proposition 10.3, printed p. 267, and §12, (12.1)–(12.3), printed pp. 268–269: the unique Hermitian connection with prescribed (0,1)-part and its local formula"
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 14, printed p. 118: holomorphic line bundles, holomorphic frames and their transition cocycle"
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 1 §2, printed p. 9: holomorphic atlases, complex structures and Riemann surfaces"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $X$ be a Riemann surface and $E\to X$ a holomorphic line bundle with Hermitian metric $h$ ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]], [[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]). Identify the complexified cotangent bundle with the Whitney sum $\Lambda^{1,0}T^*X\oplus\Lambda^{0,1}T^*X$, and hence identify the bundle of complex-valued one-forms with values in $E$ as $(\Lambda^{1,0}T^*X\oplus\Lambda^{0,1}T^*X)\otimes E$ ([[def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union]], [[def-whitney-sum-of-vector-bundles]], [[thm-whitney-sums-are-smooth-vector-bundles]]).

A **connection** on $E$ is a $\mathbb C$-linear map
$$\nabla:C^\infty(X,E)\longrightarrow C^\infty\bigl(X,(\Lambda^{1,0}\oplus\Lambda^{0,1})T^*X\otimes E\bigr)$$
satisfying $\nabla(fs)=df\otimes s+f\nabla s$ for $f\in C^\infty(X;\mathbb C)$ and $s\in C^\infty(X,E)$ ([[prop-exterior-derivative-of-a-function-is-its-differential]]). Its $(1,0)$- and $(0,1)$-parts $\nabla'$ and $\nabla''$ are the projections to the two summands. Extend $h$ to $E$-valued one-forms by $\langle\alpha\otimes u,t\rangle_h=\alpha h(u,t)$ and $\langle s,\beta\otimes v\rangle_h=\bar\beta h(s,v)$, pairing the bundle factors and conjugating the one-form coefficient in the second argument. The connection is **compatible with $h$** when
$$d\bigl(h(s,t)\bigr)=\langle\nabla s,t\rangle_h+\langle s,\nabla t\rangle_h$$
for all smooth sections $s,t$.

There exists exactly one connection $\nabla_E$ such that $\nabla_E''=\bar\partial_E$ and $\nabla_E$ is compatible with $h$. It is the **Chern connection**. In a holomorphic frame $e$ over a holomorphic chart, with $\psi=h(e,e)>0$, it is
$$\nabla_E(fe)=\bigl(df+f\,\psi^{-1}\partial\psi\bigr)\otimes e,$$
so $\nabla_E'e=\psi^{-1}\partial\psi\otimes e$, $\nabla_E''e=0$, and its connection form is $\omega=\psi^{-1}\partial\psi=\partial\log\psi$. In another smooth frame $e'=ge$, $g\in C^\infty(U;\mathbb C^\times)$, the full connection form transforms by $\omega'=\omega+g^{-1}dg$.

## Facts & Assumptions

**Given:** A Riemann surface $X$, a holomorphic line bundle $E\to X$, and a supplied smooth Hermitian metric $h$ on $E$.

[F1] In a holomorphic frame $e$, a section is $fe$ with smooth coefficient $f$; the canonical Dolbeault operator is $\bar\partial_E(fe)=(\bar\partial f)\otimes e$, and holomorphic frame changes are holomorphic nonvanishing functions ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]], [[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]], [[def-local-frame-and-global-frame-of-a-vector-bundle]], [[prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]]).

[F2] Complex one-forms split into types and $d=\partial+\bar\partial$; the type projections and their Leibniz rules are coordinate-independent ([[def-bigraded-complex-differential-forms]], [[thm-d-dbar-decomposition-and-identities]], [[def-smooth-differential-k-form]], [[def-wedge-product-of-differential-forms]]).

[F3] For a smooth function $f$, its ordinary differential is $df$, and the complex chain rule and Wirtinger derivatives give $\partial\log|g|^2=g^{-1}\partial g$ for every nonvanishing holomorphic $g$ ([[prop-exterior-derivative-of-a-function-is-its-differential]], [[thm-chain-rule-for-complex-derivatives]], [[def-complex-domain]], [[def-wirtinger-derivatives]]).

[F4] The cotangent bundle is the disjoint union of its cotangent fibres, and the Whitney sum of the two type bundles is a smooth vector bundle ([[def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union]], [[def-whitney-sum-of-vector-bundles]], [[thm-whitney-sums-are-smooth-vector-bundles]]).

[F5] A compact set inside an open set admits a smooth cutoff equal to one on a neighborhood of that set and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

## Proof

**Proof technique:** direct local construction and uniqueness.

1.1 First, any connection in the Statement is local. If a global section $s$ vanishes near $p$, choose a smooth cutoff $\chi$ supported in that neighborhood and equal to one near $p$ by [F5]. Then $\chi s=0$ and the Leibniz rule at $p$ gives $\nabla s(p)=0$. A local section can be multiplied by a cutoff compactly supported in its domain and extended by zero; near any point where the cutoff is one this defines its connection independently of the extension, by locality. Thus the connection and compatibility identities apply to local frames. In a holomorphic coordinate chart and holomorphic frame $e$, put $\omega_e=\psi^{-1}\partial\psi$ and define $\nabla_E(fe)=(df+f\omega_e)\otimes e$. The target one-form bundle is smooth by [F4]. This is $\mathbb C$-linear and obeys the Leibniz rule. Its $(0,1)$-part is $\bar\partial f\otimes e=\bar\partial_E(fe)$, since $\omega_e$ has type $(1,0)$. [F1, F2, F3, F4, F5, given]

2.1 For $s=fe$ and $t=ge$, the right side of metric compatibility is $(df+f\omega_e)\bar g\psi+f\,\overline{(dg+g\omega_e)}\psi$. Since $\omega_e+\bar\omega_e=\psi^{-1}d\psi$, this equals $d(f\bar g\psi)=d(h(s,t))$. Thus the local connection is compatible with $h$. [F2, F3, step 1.1, given, algebra]

3.1 If $e'=ge$ is another holomorphic frame, then $\psi'=|g|^2\psi$. Since $\partial\bar g=0$, $\partial|g|^2=\bar g\,\partial g$, whence $\omega_{e'}=\partial\log\psi'=\omega_e+g^{-1}dg$. For an arbitrary smooth change of frame, the same connection's form transforms by the full Leibniz rule: $\nabla_E(ge)=(dg+g\omega_e)\otimes e=(\omega_e+g^{-1}dg)\otimes e'$. Thus the local formulas agree on holomorphic overlaps, define a global connection with the two required properties, and give the stated smooth-frame transformation. [F1, F3, step 1.1, step 2.1, algebra]

4.1 If $\nabla$ and $\widetilde\nabla$ are two connections with the prescribed $(0,1)$-part, their difference is $C^\infty$-linear by the Leibniz rule. Since $E$ has rank one, it is multiplication by an $E$-endomorphism-valued one-form $\eta$, and equality of $(0,1)$-parts forces $\eta$ to have type $(1,0)$. Subtracting their metric-compatibility identities gives $(\eta+\bar\eta)h(s,t)=0$ for all $s,t$; taking a local nonzero frame yields $\eta+\bar\eta=0$. The two terms have distinct types, so each vanishes and $\eta=0$. Hence the connection is unique. No choice principle is used. [F1, F2, F5, step 1.1, step 2.1, algebra] ∎
