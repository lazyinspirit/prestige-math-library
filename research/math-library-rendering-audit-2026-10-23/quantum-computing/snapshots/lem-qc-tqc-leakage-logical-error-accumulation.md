---
id: lem-qc-tqc-leakage-logical-error-accumulation
kind: lemma
title: Logical error and leakage add under code-preserving gate approximation
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - thm-qc-tqc-block-approximation-error
  - def-qc-tqc-logical-error-and-leakage
dependency_level: 7
axiom_use: None; the proof is a finite telescoping estimate for unitary products.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 2 §2.2, PDF pp. 26–29
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §II.B, PDF pp. 7–11
---

## Statement

Let $P$ be a code projection on a finite-dimensional Hilbert space $V$. Let
$W_1,\ldots,W_G$ be ideal unitaries preserving $\operatorname{ran}P$, and let
$V_1,\ldots,V_G$ be physical unitaries with
$\|V_j-W_j\|_{\mathrm{op}}\le\delta_j$. If
$V_{\mathrm{tot}}=V_G\cdots V_1$ and $W_{\mathrm{tot}}=W_G\cdots W_1$,
then, with empty products equal to $I$ and empty sums equal to $0$,
$$\|V_{\mathrm{tot}}-W_{\mathrm{tot}}\|_{\mathrm{op}} \le\sum_{j=1}^{G}\delta_j.$$
Consequently the logical block error and leakage amplitude relative to the
code action of $W_{\mathrm{tot}}$ are each at most $\sum_j\delta_j$.

## Facts & Assumptions

**Given:** The code projection, the two finite lists of unitaries, and the
individual bounds $\delta_j\ge0$.

[F1] If $W$ preserves the code, the logical block error and leakage amplitude
are the compression and off-diagonal block norms.
[[def-qc-tqc-logical-error-and-leakage]]

[F2] A full-space operator approximation of size $\delta$ bounds both
compressed logical error and leakage by $\delta$.
[[thm-qc-tqc-block-approximation-error]]

## Proof

1.1 If $G=0$, both products are the empty product $I$ and the sum of errors is $0$, so the full-space error is $0$; [F2] then gives zero logical block error and zero leakage. [given, F2, algebra]

1.2 For $G\ge1$, insert and subtract the mixed products to obtain the exact telescoping identity $$V_G\cdots V_1-W_G\cdots W_1 =\sum_{j=1}^{G}V_G\cdots V_{j+1}(V_j-W_j)W_{j-1}\cdots W_1.$$ It follows by expanding the sum: consecutive terms cancel, leaving only $V_G\cdots V_1-W_G\cdots W_1$. Every outer product is unitary, so its operator norm is one and each summand has norm at most $\delta_j$. The triangle inequality proves the displayed sum bound. [given, algebra]

2.1 The product $W_{\mathrm{tot}}$ preserves the code because each factor does. Apply [F2] with $\delta=\|V_{\mathrm{tot}}-W_{\mathrm{tot}}\|_{\mathrm{op}}$; step 1.1 bounds this by $\sum_j\delta_j$ using step 1.2 when $G\ge1$ and step 1.1 when $G=0$. This gives the claimed logical error and leakage bounds, including on arbitrary ambient states before projection. [F1, F2, step 1.1, step 1.2, algebra] ∎
