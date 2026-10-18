---
id: lem-qc-tqc-zero-logical-error-forces-zero-leakage
kind: lemma
title: Exact logical-block correctness forces zero leakage
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-qc-tqc-logical-error-and-leakage
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-inner-product-norm
dependency_level: 6
axiom_use: None; the proof is the Pythagorean identity for an orthogonal projection.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §II.B, PDF pp. 7–11; leakage is the component outside the code subspace
---

## Statement

Let $J:\mathcal C\to V$ be an isometric encoding with $P=JJ^*$, let $U$ be
unitary on $\mathcal C$, and let $W$ be unitary on $V$. If the logical block
error $\|PWP-JUJ^*\|_{\mathrm{op}}$ is zero, then the leakage amplitude
$\|(I-P)WP\|_{\mathrm{op}}$ is zero.

## Facts & Assumptions

**Given:** Finite-dimensional inner-product spaces $\mathcal C,V$, an
isometry $J:\mathcal C\to V$, a unitary $U$ on $\mathcal C$, a unitary $W$ on
$V$, and zero logical block error.

[F1] The logical block error is $\|PWP-JUJ^*\|_{\mathrm{op}}$ and the leakage
amplitude is $\|(I-P)WP\|_{\mathrm{op}}$; $P=JJ^*$ is the orthogonal
projection onto $J\mathcal C$.
[[def-qc-tqc-logical-error-and-leakage]]

[F2] Isometries preserve inner-product norm, and orthogonal projection splits
a vector into orthogonal code and complement components.
[[def-linear-isometry-and-orthogonal-or-unitary-operator]]
[[def-inner-product-norm]]

## Proof

1.1 Zero block error means $PWP=JUJ^*$ as operators on $V$. For every $x\in\mathcal C$, $J^*J=I_{\mathcal C}$ gives $PWJx=PWPJx=JUJ^*Jx=JUx$. By [F2], $\|WJx\|=\|x\|$ and $\|PWJx\|=\|JUx\|=\|Ux\|=\|x\|$. [given, F1, F2, algebra]

2.1 The decomposition $WJx=PWJx+(I-P)WJx$ is orthogonal by [F1]. Its Pythagorean identity and step 1.1 give $\|(I-P)WJx\|^2=\|WJx\|^2-\|PWJx\|^2=0$ for every $x$. Hence $(I-P)WJ=0$, and since $P=JJ^*$, $(I-P)WP=0$; its operator norm is zero. [F1, F2, step 1.1, algebra] ∎
