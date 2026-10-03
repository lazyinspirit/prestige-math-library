---
id: cex-normalization-not-blowup-and-blowup-not-normalization
kind: counterexample
title: "Normalization and blowup are different operations"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - thm-normalization-reduced-curve-exists-finite
  - def-blowup-scheme-along-ideal
  - thm-blowup-smooth-surface-point-charts
  - ex-strict-transform-cusp-first-blowup
  - def-birational-morphism-schemes
  - thm-proper-quasi-finite-is-finite
  - lem-normalization-unchanged-under-finite-birational-curve-map
  - thm-blowup-projective
  - def-strict-transform-closed-subscheme
  - def-finite-morphism-schemes
  - cex-blowup-singular-center-not-smooth
  - def-embedding-dimension-and-regular-local-ring
  - lem-polynomial-algebras-over-fields-are-integrally-closed
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "Exercise 19.4.I and 19.3.1-19.3.3, pp. 383-392"
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Definition 31.33.1 and Lemma 31.33.2; Section 31.34 strict transforms"
verification:
  precheck: pass
---

## Statement refuted

**False claim:** normalizing a curve and blowing up the ambient surface are the same operation.

The cuspidal cubic shows that the two operations have different finiteness and different domains of definition: the normalization is finite and changes only the curve, while a point blowup of the plane is proper but not finite and changes the whole surface; a single point blowup does normalize this particular cusp, but not every curve is normalized by a point blowup.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $0$ (or different from $2$), the plane $\mathbb A^2_k$, the cuspidal cubic $C=V(y^2-x^3)$ with singular point the origin $0$, its normalization $\nu\colon\widetilde C\to C$, and the blowup $\pi\colon\operatorname{Bl}_0\mathbb A^2\to\mathbb A^2$.

[A1] **Choice.** The Axiom of Choice is assumed as inherited from the normalization and blowup constructions used by the cited items. ([[def-axiom-of-choice]]).

[F1] [[thm-normalization-reduced-curve-exists-finite]]: Every reduced curve of finite type over $k$ has a finite normalization morphism $\nu\colon\widetilde C\to C$, unique up to unique isomorphism over $C$.

[F2] [[ex-strict-transform-cusp-first-blowup]]: Blowing up the origin of the cusp $y^2-x^3$, in the chart with $y=xs$ the total transform is $x^2(s^2-x)$, so the strict transform is the parabola $s^2=x$, which is regular and meets $E=(x=0)$ at the single point $s=0$; the other chart contributes no further intersection.

[F3] [[thm-blowup-smooth-surface-point-charts]]: The blowup of a smooth surface at a $k$-rational point is smooth with exceptional curve $\mathbb P^1_k$; over an affine neighbourhood the blowup is the incidence subscheme $V(xv-yu)\subseteq U\times\mathbb P^1_k$ with charts $\operatorname{Spec}R[y/x]$ and $\operatorname{Spec}R[x/y]$, an isomorphism away from the center.

[F4] [[def-finite-morphism-schemes]]: A finite morphism has finite fibres; a morphism whose fibre over a point is positive-dimensional is not finite.

[F5] [[thm-proper-quasi-finite-is-finite]]: A proper quasi-finite morphism of schemes is finite.

[F6] [[lem-normalization-unchanged-under-finite-birational-curve-map]]: A finite birational morphism of reduced curves induces an isomorphism of their normalizations.

[F7] [[def-birational-morphism-schemes]]: For integral finite-type schemes over $k$, birationality means that the generic point maps to the generic point and the induced function-field map is an isomorphism. An isomorphism over a nonempty dense open gives these properties.

[F8] [[def-embedding-dimension-and-regular-local-ring]]: A Noetherian local ring is regular when its embedding dimension $\dim_k(\mathfrak m/\mathfrak m^2)$ equals its dimension.

[F9] [[lem-polynomial-algebras-over-fields-are-integrally-closed]]: A polynomial algebra over a field is integrally closed; its localizations are integrally closed as well, so $\mathbb A^2_k$ is normal and its normalization is the identity.

[F10] [[cex-blowup-singular-center-not-smooth]]: For the curve $y^3-x^5$ the first chart of the point blowup is $k[x,s]/(s^3-x^2)$, whose local ring at the origin is not regular, so that point blowup does not normalize the curve.

[F11] [[thm-blowup-projective]] and [[def-strict-transform-closed-subscheme]]: The blowup is proper over its base. The strict transform is a closed subscheme of the scheme-theoretic inverse image of the curve.

## Counterexample

1.1 The normalization of $C$ is $\mathbb A^1_k$: the map $k[x,y]/(y^2-x^3)\to k[t]$, $x\mapsto t^2$, $y\mapsto t^3$, is finite and birational (source and target have the same function field $k(t)$, since $y/x=t$), and $k[t]$ is regular, hence normal; by the uniqueness clause of [F1], $\widetilde C\cong\mathbb A^1_k$ and $\nu$ is the normalization. The curve $C$ itself is not regular at the origin: the local ring $k[x,y]_{(x,y)}/(y^2-x^3)$ has dimension one while its cotangent space is two-dimensional, spanned by $x$ and $y$ because $y^2-x^3\in\mathfrak m^2$; by [F8] it is not regular, so $\nu$ is not an isomorphism. [A1, F1, F8]

1.2 The blowup $\pi$ is proper over $\mathbb A^2_k$ by [F11], and is an isomorphism away from the origin, a dense open, hence birational. It is not finite: its fiber over the origin is $\mathbb P^1_k$, positive-dimensional, whereas a finite morphism has finite fibers. This is relative properness; the blowup of the affine plane is not asserted proper over $k$. [F3, F4, F7, F11]

2.1 The strict transform $C'$ is the normalization of $C$ for this cusp: by [F2] the strict transform is the smooth parabola $s^2=x$, regular and meeting $E$ in one point, and the induced morphism $C'\to C$ is proper and quasi-finite: it is the composition of the closed immersion $C\prime\hookrightarrow C\times_{\mathbb A^2}\operatorname{Bl}_0\mathbb A^2$ with the base change of the proper morphism $\pi$, and its fibers are singletons away from the origin and finite at the origin, hence finite by [F5], and birational; by [F6] it induces an isomorphism of normalizations $C'\cong\widetilde C$ over $C$. Thus a single ambient point blowup does normalize this cusp, while [F9] shows that the normalization of the ambient plane is the identity and $\nu$ changes only the curve: the two operations act on different objects, and one is finite while the other is not. [F2, F5, F6, F9, F11, step 1.1, step 1.2]

3.1 A point blowup need not normalize a curve: for $y^3-x^5$ the strict transform after blowing up the origin is still singular by [F10], so no point blowup of that center normalizes it; this completes the contrast between normalization and point blowups. [F10, step 2.1] ∎
