---
id: def-qc-tqc-logical-error-and-leakage
kind: definition
title: Logical block error and leakage amplitude
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-qc-tqc-fixed-charge-encoding
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
dependency_level: 5
axiom_use: None; all operators act on finite-dimensional Hilbert spaces.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §II.B, PDF pp. 7–11
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §9.17, PDF pp. 61–62
---

## Definition

Let $J:\mathcal C\to V$ be a fixed-charge encoding, $P=JJ^*$ its code
projector, $U\in U(\mathcal C)$ a logical target, and $W\in U(V)$ an ambient
unitary. Its zero-on-the-complement target extension is
$\widetilde U:=JUJ^*:V\to V$. Define the **logical block error** and
**leakage amplitude** by
$$\epsilon_{\mathrm{log}}(W,U):=\|PWP-\widetilde U\|_{\mathrm{op}},
\qquad
\epsilon_{\mathrm{leak}}(W):=\|(I-P)WP\|_{\mathrm{op}}.$$
Both are finite operator norms. The first measures the compressed block
against the target; the second measures transfer from the code into its
orthogonal complement. They diagnose different errors.

## Facts & Assumptions

**Given:** A finite-dimensional encoding $J:\mathcal C\to V$, its projector
$P$, a logical unitary $U$, and an ambient unitary $W$.

[F1] $P$ is the orthogonal projection onto $J\mathcal C$.
[[def-qc-tqc-fixed-charge-encoding]]

[F2] The operator norm is finite for every linear map between
finite-dimensional inner-product spaces.
[[def-operator-norm-on-a-finite-dimensional-inner-product-space]]

## Proof

1.1 The maps $PWP-\widetilde U$ and $(I-P)WP$ are endomorphisms of $V$.
Because $V$ is finite dimensional, [F2] assigns a finite operator norm to
each map; the two quantities are therefore well defined. [given, F1, F2]

2.1 For a zero-leakage but logically incorrect boundary case, take
$V=\mathcal C=\mathbb C^2$, $J=P=I$, $W=I$, and
$U=\operatorname{diag}(1,-1)$. Then
$\epsilon_{\mathrm{leak}}=0$ and
$\epsilon_{\mathrm{log}}=\|I-U\|_{\mathrm{op}}=2$. This proves the two
quantities are not interchangeable. [given, F1, F2, algebra] ∎
