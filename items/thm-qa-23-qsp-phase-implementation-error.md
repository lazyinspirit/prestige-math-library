---
id: thm-qa-23-qsp-phase-implementation-error
kind: theorem
title: Hybrid bound for imperfect QSP phase rotations
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qa-23-qsp-signal-sequence
  - def-qc-circuit-cost-model
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - cor-triangle-inequality-for-inner-product-norm
proof_strategy: direct
axiom_use: "None; the proof is a finite telescoping identity and norm inequalities."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Statement

Fix $x\in[-1,1]$ and a length-$d$ sequence from [[def-qa-23-qsp-signal-sequence]]. Suppose the $j$th implemented phase is a unitary $\widetilde Z_j$ with $\|\widetilde Z_j-Z(\phi_j)\|_{\rm op}\le\zeta_j$, for $0\le j\le d$. With exact signal calls, the implemented product obeys
$$\|\widetilde U_\Phi(x)-U_\Phi(x)\|_{\rm op}\le\sum_{j=0}^d\zeta_j.$$
If the $k$th implemented signal call is also a unitary $\widetilde W_k$ with $\|\widetilde W_k-W_R(x)\|_{\rm op}\le\eta_k$, for $1\le k\le d$, then the right-hand side is $\sum_{j=0}^d\zeta_j+\sum_{k=1}^d\eta_k$. These norm errors do not supply controlled or inverse access; their availability and charge remain part of the declared access model.

## Facts & Assumptions

**Given:** $x\in[-1,1]$, real phases $\phi_0,\ldots,\phi_d$, and unitary implemented phase/signal gates satisfying the displayed error bounds.

[F1] [[def-qa-23-qsp-signal-sequence]]: $W_R(x)$ and every $Z(\phi_j)$ are unitary, and the product has $d$ signal factors and $d+1$ phase factors.

[F2] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is the maximum output norm on unit vectors.

[F3] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: operator norms are submultiplicative and a unitary has norm $1$.

[F4] [[def-qc-circuit-cost-model]]: phase precision, ordinary gates, and oracle calls are separate resource coordinates.

[F5] [[cor-triangle-inequality-for-inner-product-norm]]: the vector norm satisfies the triangle inequality, and hence the induced operator norm does also.

## Proof

1.1 Write the ordered product as $A_nA_{n-1}\cdots A_1$, where each factor is one phase or signal gate, and write the implemented factors as $\widetilde A_j$. Insert and subtract products with the first $k$ factors implemented and all remaining factors ideal; this gives the exact telescoping identity $\widetilde A_n\cdots\widetilde A_1-A_n\cdots A_1=\sum_{k=1}^{n}\widetilde A_n\cdots\widetilde A_{k+1}(\widetilde A_k-A_k)A_{k-1}\cdots A_1.$ [F1, algebra]

2.1 Every prefix and suffix in each summand is a product of unitaries, hence has operator norm $1$ by [F3]. For any operators $S,T$ and unit vector $v$, [F5] gives $\|(S+T)v\|\le\|Sv\|+\|Tv\|\le(\|S\|_{\rm op}+\|T\|_{\rm op})\|v\|$; taking the supremum gives the operator-norm triangle inequality. Together with submultiplicativity from [F3], this bounds the norm of the telescoping sum by the sum of individual factor errors. Grouping phase and signal factors gives $\sum_j\zeta_j+\sum_k\eta_k$, and setting all $\eta_k=0$ gives the phase-only assertion. The resource coordinates remain separate by [F4]. [F2, F3, F4, F5, step 1.1, algebra] ∎
