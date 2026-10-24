---
id: thm-qa-22-lcu-block-encoding-correctness
kind: theorem
title: LCU projected-block correctness
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
deps:
  - alg-qa-22-lcu-block-encoding
  - def-qa-22-block-encoding
  - def-qc-dirac-notation-conversion
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-triangle-inequality-for-inner-product-norm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3 (17 April 2025)
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Lemma 52
      url: https://arxiv.org/pdf/1806.01838
---

## Statement

Under the exact inputs and instructions of [[alg-qa-22-lcu-block-encoding]], the all-zero coefficient-index and component-ancilla block of $W=P^{\dagger}\mathrm{SELECT}P$ is

$$\frac{\sum_{j=0}^{m-1}\beta_jA_j}{\Lambda}.$$

Moreover, $\|\sum_j\beta_jA_j\|_{\rm op}\le\Lambda$, so the constructed unitary is an $(\Lambda,b+a_*,0)$ block encoding of $\sum_j\beta_jA_j$.

## Facts & Assumptions

**Given:** The finite component matrices, exact block encodings, positive $\alpha_j$, nonzero coefficients, supplied unitary $P$, and SELECT defined in [[alg-qa-22-lcu-block-encoding]].

[F1] [[alg-qa-22-lcu-block-encoding]]: $P|0^b\rangle=\sum_j\sqrt{|\beta_j|\alpha_j/\Lambda}\,|j\rangle$, and SELECT applies phase $\beta_j/|\beta_j|$ followed by the padded $U_j$ in branch $j$.

[F2] [[def-qa-22-block-encoding]]: the exact all-zero compression of each padded $U_j$ is $A_j/\alpha_j$.

[F3] [[cor-triangle-inequality-for-inner-product-norm]]: the vector norm satisfies the triangle inequality.

[F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is the maximum action on unit vectors.

## Proof

1.1 Let $w_j:=|\beta_j|\alpha_j/\Lambda$. The amplitude list is normalized because $\sum_jw_j=1$. Identity-padding a component ancilla preserves its unitary and contributes factor $\langle e_0,e_0\rangle=1$ to its all-zero block, so by [F2] its compression remains $A_j/\alpha_j$. SELECT is unitary because it is block diagonal on orthogonal index subspaces, with each block a unit-modulus phase times a unitary (and identity on unused labels); hence $W=P^{\dagger}\mathrm{SELECT}P$ is unitary. Projecting SELECT onto the common component-ancilla zero state replaces each $U_j$ by $A_j/\alpha_j$, so the full projected block of $W$ is the coefficient-register matrix element of $P^{\dagger}\bigl(\sum_j|j\rangle\langle j|\otimes(\beta_j/|\beta_j|)A_j/\alpha_j\bigr)P$. [F1, F2, given, algebra]

2.1 The amplitudes in [F1] are real and nonnegative, so the $(0,j)$ and $(j,0)$ entries of $P^{\dagger}$ and $P$ in this matrix element both equal $\sqrt{w_j}$. Expanding gives $\sum_jw_j(\beta_j/|\beta_j|)A_j/\alpha_j=\sum_j\beta_jA_j/\Lambda$, as claimed. [step 1.1, F1, algebra]

3.1 For every unit vector $x$, [F3] and [F4] give $\|\sum_j\beta_jA_jx\|\le\sum_j|\beta_j|\|A_jx\|\le\sum_j|\beta_j|\alpha_j=\Lambda$. Taking the maximum over unit $x$ yields $\|\sum_j\beta_jA_j\|_{\rm op}\le\Lambda$. Since $\Lambda>0$, the definition of block encoding applies with zero error. [F1, F2, F3, F4, given, algebra] ∎
