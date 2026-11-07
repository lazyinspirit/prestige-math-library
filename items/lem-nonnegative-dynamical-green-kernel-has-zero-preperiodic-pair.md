---
dependency_level: 7
id: lem-nonnegative-dynamical-green-kernel-has-zero-preperiodic-pair
kind: lemma
title: "A nonnegative dynamical Green kernel has a zero preperiodic pair"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-rational-map-has-two-distinct-periodic-points
  - lem-dynamical-green-pullback-at-classical-points
  - def-local-dynamical-green-function
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, Lemma3.19 and proof of Theorem3.14"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $L$ be a complete algebraically closed nontrivially nonarchimedean valued field, and let $\phi$ have degree $d\ge2$. If $g_\phi(P,Q)\ge0$ for every pair of distinct classical points, then there are distinct preperiodic classical points $P,Q$ with $g_\phi(P,Q)=0$. This implication asserts no reduction criterion.

## Statement references

[[def-axiom-of-choice]]

[[def-local-dynamical-green-function]]

## Facts & Assumptions

**Given:** The field, rational map and classical kernel nonnegativity in the statement.

[F1] A fixed point $z$ and a periodic point $w\ne z$ exist. ([[lem-rational-map-has-two-distinct-periodic-points]])

[F2] For any classical target $y$ and any source $x$, $g_\phi(\phi(x),y)$ is the sum of $g_\phi(x,y_i)$ over its classical degree-$d$ preimage fiber with multiplicities. ([[lem-dynamical-green-pullback-at-classical-points]])

[F3] The classical kernel is finite on distinct pairs and infinite only on its diagonal. ([[def-local-dynamical-green-function]])

[A1] Full Choice is assumed through the local analytic suppliers. ([[def-axiom-of-choice]])

## Proof

1.1 Choose $z,w$ as in [F1], and let $N\ge1$ be a period of $w$. Apply [F2] successively $N$ times, expanding each classical target into its preimages. This gives $d^N$ leaf targets $y_i$, counting repetitions, each with $\phi^{\circ N}(y_i)=z$, and
$$g_\phi(w,z)=g_\phi(\phi^{\circ N}(w),z)=\sum_{i=1}^{d^N}g_\phi(w,y_i).$$
One leaf is $z$, following its fixed branch at every stage. None is $w$, since that would give $w=\phi^{\circ N}(w)=z$. Thus all terms are finite by [F3]. [F1, F2, F3, algebra]

1.2 Cancel the leaf term $g_\phi(w,z)$ from step1.1. The remaining $d^N-1\ge1$ nonnegative terms sum to zero, so every such term is zero. Pick one remaining leaf $Q$. It is preperiodic because it maps to the fixed point $z$, while $w$ is periodic and distinct from it. Thus $(w,Q)$ is the required pair. [F1, F3, step 1.1, given, algebra] ∎
