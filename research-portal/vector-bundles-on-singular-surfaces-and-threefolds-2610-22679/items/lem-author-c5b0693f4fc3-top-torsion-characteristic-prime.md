---
id: lem-author-c5b0693f4fc3-top-torsion-characteristic-prime
kind: lemma
title: Characteristic-prime degree-five vanishing for singular affine threefolds
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
  - thm-author-c5b0693f4fc3-top-torsion-topweight-comparison
  - lem-author-c5b0693f4fc3-top-torsion-syntomic-bound
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  thm-author-c5b0693f4fc3-top-torsion-topweight-comparison: mathematical-premise
  lem-author-c5b0693f4fc3-top-torsion-syntomic-bound: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 11
---

## Statement
Let $X=\operatorname{Spec}A$ be an affine finite-type threefold over an algebraically closed field of characteristic $p>0$. Then $H^{5,3}_{\rm mot}(X,\mathbb Z/p)=0$.

## Facts & Assumptions
[F1] [[thm-author-c5b0693f4fc3-top-torsion-topweight-comparison]] supplies the canonical EM motivic-to-syntomic equivalence in weight $3\geq\dim X$.

[F2] [[lem-author-c5b0693f4fc3-top-torsion-syntomic-bound]] supplies the upper bound four for affine weight-three mod-$p$ syntomic cohomology.

## Proof
**Given:** $X$ as stated, including singular and nonreduced $X$.

**Goal:** Prove the exact mod-$p$ vanishing needed by Bockstein.

1.1 View $A$ as an $\mathbb F_p$-algebra. Evaluate [F1] on $X$: $\mathbb Z(3)_{\rm mot}(X)\otimes^{\mathbf L}\mathbb Z/p\simeq\mathbb F_p(3)_{\rm syn}(A)$. This is the comparison of the specified complexes, not an extrapolation of a degree-$\leq3$ truncated comparison. [F1]

2.1 Take degree-five cohomology and apply [F2]. It is zero. No K-theoretic regularity or quasisyntomic assumption enters. [F2, step 1.1] ∎
