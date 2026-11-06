---
id: thm-gts-the-lemma-for-compact-kahler-manifolds
kind: theorem
title: "The ∂∂̄ lemma for compact Kähler manifolds"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + full AC; inherited from compact elliptic Hodge theory and Kähler commutator suppliers."
deps:
  - def-compact-kahler-manifold-and-hodge-polarization-conventions
  - thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - lem-kahler-commutators-and-laplacian-type-preservation
  - def-second-order-laplace-type-operators-on-vector-bundles
  - lem-formal-adjoints-of-differential-operators-exist-and-are-unique
  - thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
  - def-axiom-of-choice
dependency_roles:
  def-compact-kahler-manifold-and-hodge-polarization-conventions: mathematical-premise
  thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms: mathematical-premise
  thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition: mathematical-premise
  lem-kahler-commutators-and-laplacian-type-preservation: mathematical-premise
  def-second-order-laplace-type-operators-on-vector-bundles: mathematical-premise
  lem-formal-adjoints-of-differential-operators-exist-and-are-unique: mathematical-premise
  thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, author manuscript (2012)"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Chapter VI, §6.1, printed pp. 304–306; Chapter VI, §8.2, Lemma 8.6 and Corollary 8.7, printed pp. 311–312."
    - title: "Christian Schnell, Complex Manifolds, Fall 2024, Class 17, Proof of the Kähler identities"
      url: "https://www.math.stonybrook.edu/~cschnell/mat545/class17.pdf"
      locator: "All four PDF pages; the complete proof of Weil's identity and the Kähler identities."
    - title: "Christian Schnell, Complex Manifolds, Fall 2024, Class 18, The Hodge decomposition"
      url: "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"
      locator: "All six PDF pages; Proposition 18.12 and its compact Kähler Hodge-theoretic proof."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume the full Axiom of Choice. Let $X$ be a compact Kähler manifold of complex dimension $n\ge1$ with the repository convention for the real fundamental form. Let $0\le p,q\le n$ and let $\alpha\in\Omega^{p,q}(X)$ be smooth and complex-valued. If $d\alpha=0$ and $\alpha$ is $d$-exact, then there is a smooth $\beta\in\Omega^{p-1,q-1}(X)$ such that
$$\alpha=\partial\bar\partial\beta,$$
where $\partial\bar\partial$ means $\partial\circ\bar\partial$ and form spaces with an index outside $0,\ldots,n$ are zero. In particular, when $p=0$ or $q=0$, the hypotheses force $\alpha=0$.

## Statement references

[[def-compact-kahler-manifold-and-hodge-polarization-conventions]]

[[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]

[[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]

[[lem-kahler-commutators-and-laplacian-type-preservation]]

[[def-axiom-of-choice]]

[Demailly, Chapter VI §6.1 and §8.2](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

[Schnell, Class 17](https://www.math.stonybrook.edu/~cschnell/mat545/class17.pdf)

[Schnell, Class 18, Proposition 18.12](https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf)

## Facts & Assumptions

**Given:** Full AC; a compact boundaryless Kähler manifold $X$ of complex dimension $n\ge1$; and a smooth pure-type form $\alpha\in\Omega^{p,q}(X)$ with $d\alpha=0$ and $\alpha=d\gamma$ for a smooth complex-valued form $\gamma$.

[A1] Full AC is the choice-function principle of [[def-axiom-of-choice]]. The elliptic Green-operator and Kähler-identity suppliers used below state this assumption.

[F1] Complex-valued forms decompose by bidegree, $d=\partial+\bar\partial$, and the formal adjoints and Laplacians are as in [[def-compact-kahler-manifold-and-hodge-polarization-conventions]].

[F2] On a compact Kähler manifold, every de Rham class has a unique smooth harmonic representative; the proof constructs the harmonic projection $\Pi$ and Green operator $G$ on its orthogonal complement ([[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]).

[F3] For the compact Hodge Laplacian, the Green operator satisfies $\Delta_dG=I-\Pi$, maps smooth forms to smooth forms, and takes values orthogonal to the harmonic space ([[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]).

[F4] A second-order operator is Laplace type when its principal symbol is scalar with a positive-definite quadratic form ([[def-second-order-laplace-type-operators-on-vector-bundles]]).

[F5] A compact positive-symbol formally symmetric Laplace-type operator has a selfadjoint realization with domain exactly $H^2$, smooth regularity, and the elliptic Sobolev estimates ([[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]]).

[F6] Formal adjoints satisfy $\langle du,v\rangle=\langle u,d^*v\rangle$ on the compact boundaryless manifold, and $(d^*)^*=d$ ([[lem-formal-adjoints-of-differential-operators-exist-and-are-unique]]).

[F7] The Kähler identities give $\Delta_d=2\Delta_\partial=2\Delta_{\bar\partial}$; $\Delta_d$ commutes with $\partial,\bar\partial$ and preserves each bidegree; and $[\Lambda,\bar\partial]=-\;i\partial^*$ ([[lem-kahler-commutators-and-laplacian-type-preservation]]).

## Proof

**Proof technique:** direct.

1.1 The complex-valued exterior bundle has the induced Hermitian metric and volume density from [F1], and $X$ is compact without boundary of real dimension $2n\ge2$. At a point and for a real covector $\xi$, the principal symbols are $\sigma_1(d)(\xi)=i\,\xi\wedge$ and $\sigma_1(d^*)(\xi)=-i\,\iota_{\xi^\sharp}$; the exterior-algebra identity $\iota_{\xi^\sharp}(\xi\wedge\eta)+\xi\wedge\iota_{\xi^\sharp}\eta=|\xi|^2\eta$ gives $\sigma_2(\Delta_d)(\xi)=|\xi|^2I$. Thus $\Delta_d$ is Laplace type by [F4]. The formal-adjoint identity [F6] gives $\langle\Delta_du,u\rangle=\|d^*u\|^2+\|du\|^2$ and $\langle\Delta_du,v\rangle=\langle u,\Delta_dv\rangle$, so $\Delta_d$ is nonnegative and formally symmetric. By [F5] its selfadjoint realization has domain exactly $H^2$; all hypotheses of the Green theorem [F3] are now met, so the harmonic projection $\Pi$ and smooth-preserving Green operator $G$ exist with $\Delta_dG=I-\Pi$. [A1, F1, F3, F4, F5, F6, given, algebra]

2.1 Write $h=\Pi\alpha$. It is harmonic, so step 1.1 gives $dh=d^*h=0$. From [F3], $\Delta_dG\alpha=\alpha-h$. The identity $d\Delta_d=\Delta_dd$, obtained by expanding $\Delta_d=dd^*+d^*d$ and using $d^2=0$, gives $\Delta_d(dG\alpha)=d(\alpha-h)=0$. Thus $dG\alpha$ is harmonic and exact; by the uniqueness in [F2] of the harmonic representative of the zero de Rham class, $dG\alpha=0$. Expanding $\Delta_dG\alpha$ now shows $\alpha-h=dd^*G\alpha$, so $h$ is a harmonic representative of $[\alpha]=0$ and [F2] again gives $h=0$. Therefore $\Delta_dG\alpha=\alpha$. [F2, F3, step 1.1, given, algebra]

3.1 Since $\alpha$ is pure type and $d\alpha=0$, the distinct bidegrees in $d\alpha=\partial\alpha+\bar\partial\alpha$ give $\partial\alpha=\bar\partial\alpha=0$. The commutation in [F7] and step 2.1 give $\Delta_d(\partial G\alpha)=\partial\alpha=0$ and $\Delta_d(\bar\partial G\alpha)=\bar\partial\alpha=0$. By $\Delta_d=2\Delta_\partial=2\Delta_{\bar\partial}$, each is harmonic for its own Laplacian. Since $\partial G\alpha$ and $\bar\partial G\alpha$ are respectively $\partial$- and $\bar\partial$-exact, the adjoint energy identities [F6] give $\|\partial G\alpha\|^2=\langle G\alpha,\partial^*\partial G\alpha\rangle=0$ and $\|\bar\partial G\alpha\|^2=\langle G\alpha,\bar\partial^*\bar\partial G\alpha\rangle=0$. Therefore $\partial G\alpha=\bar\partial G\alpha=0$. [F1, F6, F7, step 2.1, given, algebra]

3.2 By [F7], $\Delta_d$ preserves each bidegree. Each component of $G\alpha$ outside bidegree $(p,q)$ is therefore $\Delta_d$-harmonic by step 2.1; it is also orthogonal to the harmonic space by [F3], so every such component is zero. Thus $G\alpha$ has type $(p,q)$ and $\Lambda G\alpha$ has type $(p-1,q-1)$. [F1, F3, F7, step 2.1, given, algebra]

4.1 From $\partial G\alpha=0$ and $\Delta_d=2\Delta_\partial$ we obtain $\alpha=\Delta_dG\alpha=2\partial\partial^*G\alpha$. The commutator in [F7] gives $\partial^*=i[\Lambda,\bar\partial]$; since $\bar\partial G\alpha=0$, this yields $\partial^*G\alpha=-i\bar\partial\Lambda G\alpha$. Therefore $\alpha=-2i\,\partial\bar\partial(\Lambda G\alpha)$. Taking $\beta=-2i\Lambda G\alpha$ proves the claim. If $p=0$ or $q=0$, then $\Lambda G\alpha=0$, so the same identity gives $\alpha=0$ and $\beta=0$ in the zero out-of-range form space. [F1, F3, F7, step 3.1, step 3.2, algebra] ∎
