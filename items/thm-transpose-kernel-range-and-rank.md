---
id: thm-transpose-kernel-range-and-rank
kind: theorem
title: 'Assuming choice, $\ker T^*=(\operatorname{im}T)^\circ$ and $\operatorname{im}T^*=(\ker T)^\circ$; in finite dimensions $\operatorname{rank}T^*=\operatorname{rank}T$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-transpose-of-a-linear-map, def-annihilators-under-the-evaluation-pairing, thm-double-annihilator-and-annihilator-dimension, thm-every-independent-set-extends-to-a-basis, thm-rank-nullity]
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
pipeline_run: null
---

## Statement

Assume the axiom of choice. For a linear map $T:V\to W$,

$$\ker T^*=(\operatorname{im}T)^\circ,\qquad \operatorname{im}T^*=(\ker T)^\circ.$$

If $V$ and $W$ are finite-dimensional, then $\operatorname{rank}T^*=\operatorname{rank}T$.

## Facts & Assumptions

**Given:** The axiom of choice and a linear map $T:V\to W$.

[L1] The transpose satisfies $T^*(g)=g\circ T$ ([[def-transpose-of-a-linear-map]]).

[L2] An annihilator consists exactly of the functionals vanishing on the named subspace ([[def-annihilators-under-the-evaluation-pairing]]).

[L3] In finite dimension, $\dim U^\circ=\dim X-\dim U$ for $U\le X$ ([[thm-double-annihilator-and-annihilator-dimension]]).

[L4] Assuming choice, every independent set extends to a basis ([[thm-every-independent-set-extends-to-a-basis]]).

[L5] Rank-nullity gives $\dim V=\dim\ker T+\operatorname{rank}T$ when $V$ is finite-dimensional ([[thm-rank-nullity]]).

## Proof

**Proof technique:** direct.

1.1 A functional $g\in W^*$ lies in $\ker T^*$ exactly when $g(Tv)=0$ for every $v\in V$, which by [L1] and [L2] is exactly $g\in(\operatorname{im}T)^\circ$. [L1, L2]

1.2 Every $T^*(g)=g\circ T$ vanishes on $\ker T$, so $\operatorname{im}T^*\subseteq(\ker T)^\circ$. [L1, L2]

1.3 Conversely let $f\in(\ker T)^\circ$. Define $h_0:\operatorname{im}T\to F$ by $h_0(Tv)=f(v)$. If $Tv=Tv'$, then $v-v'\in\ker T$ and $f(v)=f(v')$, so $h_0$ is well defined and linear. Extend a basis of $\operatorname{im}T$ to a basis of $W$ using [L4], and extend $h_0$ by value $0$ on the added basis vectors to obtain $h\in W^*$. Then $T^*(h)=f$. [L1, L2, L4, choose, algebra]

2.1 Steps 1.2 and 1.3 prove $\operatorname{im}T^*=(\ker T)^\circ$. [step 1.2, step 1.3]

3.1 If $V,W$ are finite-dimensional, [L3] and step 2.1 give $\operatorname{rank}T^*=\dim(\ker T)^\circ=\dim V-\dim\ker T$, which equals $\operatorname{rank}T$ by [L5]. [step 2.1, L3, L5]

4.1 Steps 1.1, 2.1, and 3.1 give the two identities and the finite-dimensional rank equality, including zero source or target. [step 1.1, step 2.1, step 3.1] ∎
