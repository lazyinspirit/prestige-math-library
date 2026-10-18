---
id: thm-qc-tqc-block-approximation-error
kind: theorem
title: Block-target approximation bounds logical error and leakage
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-qc-tqc-logical-error-and-leakage
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
dependency_level: 6
axiom_use: None; the proof uses only finite-dimensional orthogonal projections and operator norms.
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

Let $V=P V\oplus(I-P)V$ be an orthogonal decomposition of a finite-dimensional
Hilbert space, let $U$ and $W$ be unitary operators on the two summands, and
let $T:=U\oplus W$. If an ambient unitary $G$ satisfies
$\|G-T\|_{\mathrm{op}}\le\delta$, then the logical block error of $G$ relative
to $U$ and its leakage amplitude both are at most $\delta$.

## Facts & Assumptions

**Given:** The orthogonal projection $P$, the block-unitary target $T$, the
ambient unitary $G$, and $\delta\ge0$.

[F1] Logical block error and leakage are
$\|PGP-U P\|_{\mathrm{op}}$ and $\|(I-P)GP\|_{\mathrm{op}}$ after identifying
$U$ with its zero-on-the-complement extension.
[[def-qc-tqc-logical-error-and-leakage]]

[F2] The operator norm is zero when its domain is zero; otherwise it is the
maximum of $\|Ax\|$ over unit vectors $x$. In particular,
$\|Ay\|\le\|A\|_{\mathrm{op}}\|y\|$ for every $y$, by scaling nonzero $y$
to a unit vector and treating $y=0$ separately.
[[def-operator-norm-on-a-finite-dimensional-inner-product-space]]

## Proof

1.1 If $V=0$, both error maps have norm zero by [F2], so both bounds hold. Otherwise, since $T$ preserves both summands, $PTP=UP$ on $V$ and $(I-P)TP=0$. Thus $PGP-UP=P(G-T)P$. For any $y\in V$, the orthogonal decomposition $y=Py+(I-P)y$ gives $\|Py\|\le\|y\|$ and $\|(I-P)y\|\le\|y\|$ by the Pythagorean identity. Hence for every unit vector $x$, $\|P(G-T)Px\|\le\|(G-T)Px\|\le\|G-T\|_{\mathrm{op}}\|Px\|\le\delta$. Taking the maximum in [F2] proves the logical block error bound. [given, F1, F2, algebra]

2.1 In the remaining case $V\ne0$, $(I-P)GP=(I-P)(G-T)P$ because $(I-P)TP=0$. By the contractions in step 1.1, for every unit $x$, $\|(I-P)(G-T)Px\|\le\|(G-T)Px\|\le\|G-T\|_{\mathrm{op}}\|Px\|\le\delta$. Taking the maximum gives the leakage bound. [given, F1, F2, step 1.1, algebra] ∎
