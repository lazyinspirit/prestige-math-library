---
id: thm-double-annihilator-and-annihilator-dimension
kind: theorem
title: 'Assuming choice, ${}^\circ(U^\circ)=U$; in finite dimension, $\dim U^\circ=\dim V-\dim U$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-annihilators-under-the-evaluation-pairing, lem-linear-functionals-separate-points-from-subspaces, thm-dual-family-is-a-basis-in-finite-dimension, thm-rank-nullity, thm-dimension-of-a-linear-subspace]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, Chapter 6'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
    - title: 'K. Conrad, Infinite-Dimensional Dual Spaces'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/dualspaceinfinite.pdf'
pipeline_run: null
---

## Statement

Assume the axiom of choice. For every subspace $U\le V$,

$$ {}^\circ(U^\circ)=U.$$

If $V$ is finite-dimensional, then

$$\dim U^\circ=\dim V-\dim U.$$

## Facts & Assumptions

**Given:** The axiom of choice, an $F$-vector space $V$, and a subspace $U\le V$.

[L1] The annihilator $U^\circ$ consists of the functionals vanishing on $U$, and ${}^\circ S$ consists of vectors annihilated by every member of $S$ ([[def-annihilators-under-the-evaluation-pairing]]).

[L2] If $v\notin U$, some $f\in V^*$ vanishes on $U$ and has $f(v)=1$ ([[lem-linear-functionals-separate-points-from-subspaces]]).

[L3] The dual of a finite-dimensional space has the same dimension ([[thm-dual-family-is-a-basis-in-finite-dimension]]).

[L4] Rank-nullity gives $\dim X=\dim\ker R+\dim\operatorname{im}R$ for a linear map with finite-dimensional domain $X$ ([[thm-rank-nullity]]).

[L5] In finite dimension, a basis of a subspace extends without Choice to a basis of the ambient space ([[thm-dimension-of-a-linear-subspace]], clause 3).

## Proof

**Proof technique:** direct.

1.1 Every $u\in U$ is killed by every $f\in U^\circ$, so [L1] gives $U\subseteq{}^\circ(U^\circ)$. If $v\notin U$, [L2] gives $f\in U^\circ$ with $f(v)=1$, so $v\notin{}^\circ(U^\circ)$. Hence ${}^\circ(U^\circ)=U$. [L1, L2]

1.2 Now suppose $V$ is finite-dimensional and consider restriction $R:V^*\to U^*$, $R(f)=f|_U$. Its kernel is $U^\circ$ by [L1]. It is surjective: extend a basis of $U$ to one of $V$ by [L5], prescribe any given functional's values on the former basis, and prescribe zero on the added vectors. [L1, L5, choose]

2.1 Rank-nullity and surjectivity give $\dim V^*=\dim U^\circ+\dim U^*$. Applying [L3] to $V$ and $U$, then rearranging, gives $\dim U^\circ=\dim V-\dim U$. [step 1.2, L3, L4, algebra]

3.1 Step 1.1 proves the double-annihilator identity in arbitrary dimension under Choice, and step 2.1 proves the finite-dimensional formula, including $U=0$ and $U=V$. [step 1.1, step 2.1] ∎
