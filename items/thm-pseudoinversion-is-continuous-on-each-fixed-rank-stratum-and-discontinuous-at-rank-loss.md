---
id: thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss
kind: theorem
title: "The Moore--Penrose pseudoinverse is continuous on each fixed-rank stratum and is not continuous across rank loss"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-rank-equals-number-of-nonzero-singular-values,
       thm-moore-penrose-pseudoinverse-exists-and-is-unique,
       thm-singular-value-decomposition,
       thm-heine-borel-rn]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Roger Penrose, A generalized inverse for matrices"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0305004100030929"
    - title: "Stanford CS205L, Unit 11: Zero Singular Values"
      url: "https://web.stanford.edu/class/cs205l/assets/unit_11_svd_pinv_solns.pdf"
---

## Statement

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$.

1. For fixed $m$ and $n$, on the set of $m\times n$ matrices over
   $\mathbb F$ of a fixed rank $r$, the map
   $A\mapsto A^+$ is continuous.
2. On a full matrix space the pseudoinverse need not be continuous at a
   rank-deficient matrix. Already for the $2\times2$ path
   $A_t=\operatorname{diag}(1,t)$ with $t\neq0$,
   $\|A_t^+\|_2\to\infty$ as $t\to0$.

## Facts & Assumptions

**Given:** Real or complex matrices, with the fixed-rank and rank-loss cases as in the statement.

[L1] Every finite real or complex matrix has a unique Moore--Penrose pseudoinverse ([[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]).

[L2] Every matrix admits a singular value decomposition ([[thm-singular-value-decomposition]]).

[L3] Rank equals the number of nonzero singular values ([[cor-rank-equals-number-of-nonzero-singular-values]]).

[L4] Closed bounded subsets of a finite-dimensional Euclidean space are
compact ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct.

1.1 Let $A_k\to A$ with every $A_k$ and $A$ of rank $r$. By [L2], choose SVDs $A_k=U_k\Sigma_kV_k^*$ and $A=U\Sigma V^*$. Each unitary group is a closed bounded subset of its finite-dimensional matrix space, hence compact by [L4]. Therefore every subsequence of $(U_k,V_k)$ has a convergent subsequence; along such a subsequence the limit still gives a singular value decomposition of $A$. [L2, L4, given]

1.2 For $A_t=\operatorname{diag}(1,t)$ with $t\neq0$, [L1] gives $A_t^+=\operatorname{diag}(1,t^{-1})$. Thus $\|A_t^+\|_2=\max(1,|t|^{-1})\to\infty$ as $t\to0$. [L1, algebra]

2.1 By [L3], exactly the first $r$ diagonal entries of every $\Sigma_k$ and of $\Sigma$ are positive. Define the transposed-shape matrices $\Sigma_k^+$ and $\Sigma^+$ by reciprocating precisely those entries and setting all remaining entries to zero. Direct diagonal multiplication verifies the four Penrose equations, so uniqueness in [L1] gives $A_k^+=V_k\Sigma_k^+U_k^*$ and $A^+=V\Sigma^+U^*$. Along the convergent subsequence from step 1.1 the positive singular values converge to those of $A$, hence their reciprocals converge. Therefore $$ A_k^+=V_k\Sigma_k^+U_k^*\to V\Sigma^+U^*=A^+. $$ [L1, L3, step 1.1, algebra]

2.2 The matrices $A_t$ converge to $\operatorname{diag}(1,0)$ as $t\to0$, but their pseudoinverses do not stay bounded, hence cannot converge to the finite matrix $\operatorname{diag}(1,0)^+$. Therefore pseudoinversion is not continuous across rank loss. [step 1.2, algebra]

3.1 Let $(A_{k_j}^+)$ be any subsequence. Applying the compactness argument of step 1.1 to its SVD factors produces a further subsequence to which step 2.1 applies, so that further subsequence converges to $A^+$. If $(A_k^+)$ did not converge to $A^+$, some $\varepsilon>0$ and a subsequence would satisfy $\|A_{k_j}^+-A^+\|_2\ge\varepsilon$ for every $j$, contradicting the further subsequence just obtained. Thus $A_k^+\to A^+$, proving continuity on the rank-$r$ stratum. [step 1.1, step 2.1, contradiction]

4.1 Steps 3.1 and 2.2 prove the two claims. [step 3.1, step 2.2] ∎
