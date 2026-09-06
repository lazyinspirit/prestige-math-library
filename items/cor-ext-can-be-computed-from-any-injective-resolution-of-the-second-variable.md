---
id: cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable
kind: corollary
title: "Ext can be computed from any injective resolution of the second variable"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-injective-comparison-map-exists, thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy, def-balanced-ext-bifunctor, def-ext-via-an-injective-resolution-of-the-second-variable, thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Dependent Choice and the hypotheses of
[[def-balanced-ext-bifunctor]]. If $J$ is any other supplied injective
resolution datum on the same class of objects, then for every $M,N$ and
$n\geq0$,
$$\operatorname{Ext}^n_{\mathcal A}(M,N)\cong H^n\operatorname{Hom}(M,J^\bullet),$$
naturally in $M$ and $N$. In particular, the formula computes Ext from any
individual injective resolution $N\to J^\bullet(N)$; the resulting objectwise
isomorphism is canonical on cohomology.

## Facts & Assumptions

**Given:** Dependent Choice, the balanced Ext hypotheses, supplied data $I,J$, objects $M,N$, and $n\geq0$.

[F1] Comparison maps extending any object morphism exist under Dependent Choice: [[thm-injective-comparison-map-exists]].

[F2] Two such maps extending the same morphism are homotopic: [[thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy]].

[F3] The two resolutions of $N$ are homotopy equivalent under $N$: [[thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object]].

## Proof

**Proof technique:** direct.

1.1 Choose $a_N:I^\bullet(N)\to J^\bullet(N)$ extending $1_N$. Its reverse comparison is a homotopy inverse: both composites extend the identity, so [F2] compares them to the identity cochain maps. [F1, F2, F3, choose]

2.1 Applying $\operatorname{Hom}(M,-)$ carries a homotopy $a-b=dh+hd$ to the homotopy $f\mapsto h\circ f$. Hence $H^n\operatorname{Hom}(M,a_N)$ is an isomorphism independent of $a_N$. The definition [[def-ext-via-an-injective-resolution-of-the-second-variable]] identifies its source with $\operatorname{Ext}_I^n(M,N)$, which [[def-balanced-ext-bifunctor]] identifies with balanced Ext. [step 1.1, F2, algebra]

3.1 For $u:N\to N'$, choose comparison maps $I(u)$ and $J(u)$ extending $u$. Define their actions on cohomology by postcomposition. Independence follows from [F2]; identity and composition laws follow because comparison composites extend the corresponding object composites. Moreover $J(u)a_N$ and $a_{N'}I(u)$ both extend $u$, so [F2] makes them homotopic. Applying Hom and cohomology gives precisely the naturality square in $N$. [F1, F2, step 2.1, construct]

4.1 For $v:M'\to M$, precomposition by $v$ commutes exactly with postcomposition by $a_N$. This proves contravariant naturality in $M$ and therefore naturality in both variables. The same construction at a single $N$ uses only the individual resolution $J^\bullet(N)$, proving the final assertion without a global choice of comparison maps. [step 2.1, step 3.1, algebra] ∎
