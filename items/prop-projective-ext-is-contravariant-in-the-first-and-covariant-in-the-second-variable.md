---
id: prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable
kind: proposition
title: "Projective-resolution Ext has the stated bifunctor variance"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ext-via-a-projective-resolution-of-the-first-variable, lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]
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

Assume the Axiom of Dependent Choice.
Let $\mathcal A$ be an abelian category and let $P_\bullet(-)$ be supplied projective resolution data on every object of $\mathcal A$. For every $n\geq0$,
$\operatorname{Ext}_{P}^{n}(-,-):\mathcal A^{\mathrm{op}}\times\mathcal A\to\mathbf{Ab}$
is contravariant in its first variable and covariant in its second variable.

## Facts & Assumptions

**Given:** Morphisms $u:M'\to M$ and $v:N\to N'$ in $\mathcal A$.

## Proof

**Proof technique:** direct.

1.1 Postcomposition with $v$ is a cochain map $\operatorname{Hom}(P_\bullet(M),N)\to\operatorname{Hom}(P_\bullet(M),N')$. A comparison lift $\widetilde u:P_\bullet(M')\to P_\bullet(M)$ from [[lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions]] gives precomposition $\widetilde u^*$ in the opposite direction. [given, construct]

2.1 These maps commute because pre- and postcomposition commute. Two lifts of $u$ are chain-homotopic by [[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]. Precomposing with the homotopy gives a cochain homotopy between the two induced maps on $\operatorname{Hom}(-,N)$, so they induce the same map on $H^n$. The comparison identity and composition laws hold up to such homotopy, while postcomposition is strictly functorial. Hence the maps on $H^n$ define the asserted bifunctor. [step 1.1, algebra] ∎
