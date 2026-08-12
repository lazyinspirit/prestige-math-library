---
id: ex-equalizers-and-coequalizers-in-set
kind: example
title: "Equalizers in Set are agreement subsets and coequalizers are quotients by the generated equivalence relation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equalizers-and-coequalizers, prop-sets-and-functions-form-category-set, def-equivalence-relation, thm-universal-property-of-the-quotient]
justified_by: []
aliases: []
landmark: false
proof_strategy: construction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Example 3.1.18 and Proposition 3.6.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Example

For functions $f,g:X\rightrightarrows Y$, their equalizer is the inclusion
$E=\{x\in X:f(x)=g(x)\}\hookrightarrow X$. Their coequalizer is the quotient
$Y\to Y/{\sim}$ by the least equivalence relation containing
$f(x)\sim g(x)$ for all $x\in X$.

## Facts & Assumptions

**Given:** Parallel functions $f,g:X\rightrightarrows Y$.

[F1] Equalizers and coequalizers have their factorization universal properties
([[def-equalizers-and-coequalizers]]).

[F2] Morphisms in $\mathbf{Set}$ are functions
([[prop-sets-and-functions-form-category-set]]).

[F3] An equivalence relation is reflexive, symmetric, and transitive
([[def-equivalence-relation]]).

[L1] A function factors uniquely through a quotient exactly when it is
constant on equivalence classes ([[thm-universal-property-of-the-quotient]]).

## Verification

**Proof technique:** construction.

1.1 The inclusion $e:E\hookrightarrow X$ satisfies $fe=ge$. If $h:Z\to X$ equalizes $f,g$, every $h(z)$ lies in $E$, so $h$ has a unique corestriction $Z\to E$. This is the equalizer property [F1]. [F1, F2]

1.2 Intersect all equivalence relations on $Y$ containing the pairs $(f(x),g(x))$; by [F3] the result $\sim$ is the least one. Its quotient map $q$ satisfies $qf=qg$. [F3]

2.1 If $h:Y\to Z$ satisfies $hf=hg$, equality of $h$ is itself preserved under reflexive, symmetric, and transitive closure, so $h$ is constant on $\sim$-classes. By [L1] it factors uniquely through $q$. Conversely every map through $q$ equalizes $f,g$. Thus $q$ is the coequalizer in [F1]. [F1, F3, L1, step 1.2] ∎
