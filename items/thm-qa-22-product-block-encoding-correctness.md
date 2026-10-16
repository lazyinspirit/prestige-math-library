---
id: thm-qa-22-product-block-encoding-correctness
kind: theorem
title: Product block-encoding error bound
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
deps:
  - alg-qa-22-product-block-encoding
  - def-qa-22-block-encoding
  - def-qc-dirac-notation-conversion
  - lem-qa-22-block-compression-contraction
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 (17 April 2025)
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Lemma 53
      url: https://arxiv.org/pdf/1806.01838
---

## Statement

Under the inputs and register order of [[alg-qa-22-product-block-encoding]], let $C_A$ and $C_B$ be the two normalized compressed blocks, so $\|C_A-A/\alpha_A\|_{\rm op}\le\varepsilon_A$ and $\|C_B-B/\alpha_B\|_{\rm op}\le\varepsilon_B$. The all-zero block of the constructed unitary is $C_AC_B$. It obeys

$$\left\|C_AC_B-\frac{AB}{\alpha_A\alpha_B}\right\|_{\rm op}\le\varepsilon_A\frac{\|B\|_{\rm op}}{\alpha_B}+\varepsilon_B\frac{\|A\|_{\rm op}}{\alpha_A}+\varepsilon_A\varepsilon_B\le\varepsilon_A+\varepsilon_B+\varepsilon_A\varepsilon_B.$$

Because each $C_A$ is itself a projected unitary block and hence a contraction, the sharper bound $\|C_AC_B-AB/(\alpha_A\alpha_B)\|_{\rm op}\le\varepsilon_B+\varepsilon_A\|B\|_{\rm op}/\alpha_B\le\varepsilon_A+\varepsilon_B$ also holds. In particular the product is an $(\alpha_A\alpha_B,a_A+a_B,\varepsilon_A+\varepsilon_B+\varepsilon_A\varepsilon_B)$ block encoding of $AB$.

## Facts & Assumptions

**Given:** Square matrices and approximate block encodings satisfying the hypotheses of [[alg-qa-22-product-block-encoding]] and [[def-qa-22-block-encoding]].

[F1] [[def-qa-22-block-encoding]]: a normalized compressed block differs from its matrix divided by its positive normalization by at most the declared operator-norm error.

[F2] [[alg-qa-22-product-block-encoding]]: the product circuit uses separate ancillas and the operator order $V_AV_B$.

[F3] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: for compatible finite-dimensional maps, $\|ST\|_{\rm op}\le\|S\|_{\rm op}\|T\|_{\rm op}$.

[F4] [[lem-qa-22-block-compression-contraction]]: every projected unitary block has operator norm at most one.

## Proof

1.1 Each lifted operation $V_A,V_B$ is a block-diagonal direct sum of copies of its supplied unitary on the untouched ancilla's computational basis; the inverse is the corresponding direct sum of the component inverse. Thus both lifts and $V_AV_B$ are unitary. Let $J$ inject the system into the all-zero state of both ancillas. The zero-subspace projections are $P_A$ and $P_B$, with $P=P_AP_B$, $PJ=J$, and $J^{\dagger}P=J^{\dagger}$. In $J^{\dagger}V_AV_BJ$, insert $P$ at both ends; commute $P_B$ through $V_A$ and use $P_AV_B=V_BP_A$ to obtain $J^{\dagger}V_AP_BV_BJ$. The vector $P_BV_BJx$ has both ancillas zero and system component $C_Bx$, so $P_BV_BJ=JC_B$. The remaining compression is $J^{\dagger}V_AJC_B=C_AC_B$. Hence the all-zero block is exactly $C_AC_B$ in the stated order. [F1, F2, given, construct, algebra]

1.2 Set $A':=A/\alpha_A$, $B':=B/\alpha_B$, $E_A:=C_A-A'$, and $E_B:=C_B-B'$. Then $C_AC_B-A'B'=E_AB'+A'E_B+E_AE_B$. By [F1], $\|E_A\|\le\varepsilon_A$ and $\|E_B\|\le\varepsilon_B$; by the normalization promises, $\|A'\|\le1$ and $\|B'\|\le1$. Applying [F3] to each summand yields the first displayed bound, and $\|A\|/\alpha_A,\|B\|/\alpha_B\le1$ yields its conservative final bound. [F1, F2, F3, algebra]

2.1 The same difference can be written $C_AE_B+E_AB'$. By [F4], $\|C_A\|\le1$, so [F3] gives $\|C_AE_B+E_AB'\|\le\varepsilon_B+\varepsilon_A\|B\|/\alpha_B\le\varepsilon_A+\varepsilon_B$. Also $\|AB\|\le\|A\|\|B\|\le\alpha_A\alpha_B$ by [F3]; the product normalization is positive. The block-encoding definition therefore applies with the claimed error. [F1, F3, F4, algebra] ∎
