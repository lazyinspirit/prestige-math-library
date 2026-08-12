---
id: lem-linear-functionals-separate-points-from-subspaces
kind: lemma
title: 'Assuming choice, if $v\notin U\leq V$, some $f\in V^*$ vanishes on $U$ and satisfies $f(v)=1$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebraic-dual-and-linear-functional, thm-every-independent-set-extends-to-a-basis, def-linear-subspace]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'K. Conrad, Infinite-Dimensional Dual Spaces'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/dualspaceinfinite.pdf'
pipeline_run: null
---

## Statement

Assume the axiom of choice. If $U$ is a linear subspace of $V$ and $v\in V\setminus U$, then there exists $f\in V^*$ such that $f|_U=0$ and $f(v)=1$.

## Facts & Assumptions

**Given:** The axiom of choice, a subspace $U\le V$, and $v\notin U$.

[L1] Assuming choice, every linearly independent subset of a vector space extends to a basis ([[thm-every-independent-set-extends-to-a-basis]]).

[L2] A subspace is closed under finite linear combinations ([[def-linear-subspace]]).

[L3] Elements of $V^*$ are linear maps $V\to F$ ([[def-algebraic-dual-and-linear-functional]]).

## Proof

**Proof technique:** basis extension.

1.1 By [L1], choose a basis $C$ of $U$. The set $C\cup\{v\}$ is linearly independent: a relation with nonzero coefficient of $v$ would put $v$ in the span of $C$, which is $U$ by [L2]. [L1, L2, given, choose]

2.1 Extend $C\cup\{v\}$ by [L1] to a basis $B$ of $V$. Prescribe $f(v)=1$ and $f(b)=0$ for every $b\in B\setminus\{v\}$, then extend by the unique finite basis expansion. This defines a linear functional $f\in V^*$. [step 1.1, L1, L3, choose]

3.1 Every element of $U$ is a linear combination of elements of $C$, so $f|_U=0$, while the prescription gives $f(v)=1$. [step 2.1, L2] ∎
