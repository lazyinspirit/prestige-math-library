---
id: "fs-one-fixed-number-of-barycentric-subdivisions-makes-every-singular-simplex-cover-small"
kind: "false-statement"
title: "One fixed number of barycentric subdivisions makes every singular simplex cover small"
deps: ["prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains", "def-barycentric-subdivision-chain-operator"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 false-statement inventory; exact refutation or unresolved wording recorded in proof_plan"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

For every open cover there is one nonnegative integer $m$ such that $S^m\sigma$ is cover-small for every singular simplex $\sigma$.

## Facts & Assumptions

**Given:** Cover $\mathbb R$ by $U=(-\infty,1/2)$ and $V=(-1/2,\infty)$.

[F1] Subdivision preserves smooth chains and restricts to affine domain pieces ([[prop-barycentric-subdivision-and-prism-preserve-smooth-singular-chains]]).

[F2] Subdivision is the recursive affine cone on the subdivided boundary ([[def-barycentric-subdivision-chain-operator]]).

## Proof

1.1 For any proposed $m\ge0$, define the smooth path $\sigma_m(t)=\sin(2\pi 2^m t)$, $0\le t\le1$. In dimension one, the cone recursion gives the two half-interval parametrizations, one forward and one backward, with coefficient equal to their orientation sign. Inducting on subdivisions gives one affine parametrization of each dyadic interval $[j2^{-m},(j+1)2^{-m}]$, again with its orientation sign as coefficient: subdivision bisects each interval and the two new signs multiply its previous sign. [given, F1, F2]

2.1 On a forward dyadic parametrization, $\sigma_m$ becomes $p(t)=\sin(2\pi t)$; on a backward one it becomes $q(t)=-\sin(2\pi t)$. Therefore $S^m\sigma_m=A[p]-B[q]$, where $A,B$ count forward and backward pieces and $A+B=2^m>0$. The two maps are distinct because $p(1/4)=1$ and $q(1/4)=-1$, so no cancellation between them occurs in the free chain group. Each has image $[-1,1]$, which lies in neither $U$ nor $V$. At least one nonzero basis coefficient therefore belongs to a non-small simplex, and the chain is not cover-small. [given, step 1.1, algebra]

3.1 This proves $\forall m\ \exists\sigma_m$ failing the fixed cover's proposed bound; it does not assert that one simplex fails all bounds. For $m=0$ the witness is $p$ itself. Each witness has equal endpoints zero but is a nonconstant smooth simplex; repeated endpoint values cause no cancellation as step 2.1 checks. A constant simplex is already small. The empty chain is always small, and all formulas and witnesses are explicit without choice. [F1, F2, step 1.1, step 2.1] ∎
