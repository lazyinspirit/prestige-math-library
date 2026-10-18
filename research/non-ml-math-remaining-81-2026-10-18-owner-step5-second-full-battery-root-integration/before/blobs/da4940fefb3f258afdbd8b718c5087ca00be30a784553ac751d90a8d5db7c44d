---
id: thm-qa-37-approx-encoded-two-qubit-gate
kind: theorem
title: "One B6 braid approximates an encoded two-qubit gate"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 12
deps:
  - alg-qa-37-exhaustive-b6-block-pair-compiler
  - thm-qa-37-exhaustive-b6-compiler-terminates
  - def-qc-tqc-six-anyon-encoded-subspace
  - thm-qc-tqc-block-approximation-error
  - lem-qc-tqc-determinant-character-phase
  - def-qa-37-phase-reference-cost
  - lem-qc-tqc-b6-joint-su5-su8-density
  - def-countable-choice
justified_by: []
axiom_use: "Assumes exactly ACω through joint B6 density; no full Axiom of Choice is used."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§IV.B.c, six-anyon encoded-gate discussion, PDF pp. 53–57."
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: "§4, Theorem 4.1 and proof, printed pp. 17–21; local batch proof controls conventions."
---

## Statement

Assume $\mathrm{AC}_\omega$ and use the six-anyon triple-triple encoding
[[def-qc-tqc-six-anyon-encoded-subspace]]. For any $U\in U(4)$ put
$$T_1=U\oplus(\det U)^{-1}\in SU(5),\qquad T_\tau=U\oplus\operatorname{diag}((\det U)^{-1},1,1,1)\in SU(8).$$
For every $\delta>0$, one normalized six-strand braid word $b$ has both block
errors $\|B_1(b)-T_1\|_{\rm op}<\delta$ and
$\|B_\tau(b)-T_\tau\|_{\rm op}<\delta$. In either total-charge block, the
normalized braid's logical block error and leakage amplitude relative to the
encoded action of $U$ are at most $\delta$. The physical categorical braid is
$\zeta B(b)$ with $\zeta=R_1^{e(b)}$; its logical block error is at most
$\delta$ relative to the phase-matched target $\zeta U$, and its leakage
amplitude is unchanged. This common scalar is recorded under
[[def-qa-37-phase-reference-cost]] and must be handled under coherent control.
When the two determinant-corrected targets are supplied as certified Cauchy
inputs, the dovetailed B6 compiler finds such a word. No useful joint-block
word-length or search-time bound is asserted.

## Facts & Assumptions

**Given:** The six-anyon code embeddings, a unitary $U$ on $\mathbb C^4$,
$\delta>0$, and $\mathrm{AC}_\omega$.

[F1] The code has dimension four in both fixed-charge blocks, with ambient
dimensions five and eight and the stated leakage complements.
[[def-qc-tqc-six-anyon-encoded-subspace]]

[F2] The normalized joint B6 closure contains $SU(5)\times SU(8)$ under
ACω. [[lem-qc-tqc-b6-joint-su5-su8-density]]

[F3] If an ambient unitary is within $\delta$ of a code-preserving block
target, logical block error and leakage are each at most $\delta$.
[[thm-qc-tqc-block-approximation-error]]

[F4] The physical braid word differs from normalized blocks by the common
scalar $R_1^{e(b)}$ on every charge block. [[lem-qc-tqc-determinant-character-phase]]

[F5] For certified Cauchy target inputs the shared-word search terminates.
[[thm-qa-37-exhaustive-b6-compiler-terminates]]

[A1] Assume exactly $\mathrm{AC}_\omega$. [[def-countable-choice]]

## Proof

1.1 Since $U$ is unitary, $|\det U|=1$. Each displayed extension is unitary on the orthogonal direct sum. Its determinant is $\det U\cdot(\det U)^{-1}=1$, so $T_1\in SU(5)$ and $T_\tau\in SU(8)$. Both preserve the encoded four-dimensional subspace and act there as $U$, by [F1]. [given, F1, algebra]

2.1 The product of open operator-norm $\delta$-balls around $(T_1,T_\tau)$ is a neighborhood in $SU(5)\times SU(8)$. By [A1] and [F2], it contains the image of one common normalized braid word. This proves both block inequalities at once; the word is not chosen separately for the two sectors. For certified Cauchy targets, [F5] gives a terminating search with rational strict certificates (choose any rational tolerance below $\delta$). [A1, F2, F5, step 1.1, choose]

3.1 Apply [F3] in each charge block to the normalized braid matrix and its code-preserving extension $T_a$. The normalized compression to the code differs from $U$ by at most $\delta$, and the off-diagonal block from code to leakage has norm at most $\delta$. Write $\zeta=R_1^{e(b)}$ for the common unit scalar from [F4]. The physical compression differs from the phase-matched target $\zeta U$ by $\|\zeta P B_a(b)P-\zeta\widetilde U\|=\|P B_a(b)P-\widetilde U\|\le\delta$; its leakage amplitude is $\|(I-P)\zeta B_a(b)P\|=\|(I-P)B_a(b)P\|\le\delta$. The exponent-sum phase must still be retained under coherent control. [F1, F3, F4, step 2.1, algebra] ∎
