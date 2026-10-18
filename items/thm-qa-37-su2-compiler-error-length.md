---
id: thm-qa-37-su2-compiler-error-length
kind: theorem
title: "Fibonacci SU(2) compiler error, length, and bit cost"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 14
deps:
  - alg-qa-37-su2-solovay-kitaev-compiler
  - def-qa-37-fibonacci-braid-gate-set
  - thm-qc-solovay-kitaev-error-and-resource-bound
  - thm-qc-solovay-kitaev-bit-complexity
  - def-qa-37-certified-matrix-input
  - def-qa-37-phase-reference-cost
  - lem-qa-37-fixed-sector-global-phase
  - def-countable-choice
justified_by: []
axiom_use: "ACω is inherited only for density of the gate package; the SK recursion/estimate is choice-free."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: "§§2–4, exact-real recurrence, output length and arithmetic caveat, PDF pp. 2–10."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.2, PDF pp. 26–29."
---

## Statement

Let $G_{\rm Fib}$ be the fixed Fibonacci SU(2) alphabet with a supplied finite
base-net certificate of radius $0<\eta_0<64^{-2}$ and maximum word length
$L_0$. For every exact target $S\in SU(2)$ and rational
$0<\varepsilon\le\eta_0$, let
$$\eta_{j+1}=64\eta_j^{3/2},\qquad J=\min\{j\ge0:\eta_j\le\varepsilon\}.$$
The ideal SK recursion returns a normalized braid word $W$ with
$\|S-W\|_{\rm op}\le\varepsilon$ and length at most $L_0 5^J$; hence its
length is $O(\log^{\log_{3/2}5}(1/\varepsilon))=O(\log^{3.97}(1/\varepsilon))$.
If each real and imaginary gate coordinate is supplied by its minimal
polynomial and rational isolating interval with the endpoint/root conditions
of the published finite-precision theorem, the base certificate is fixed,
and $S$ has a polynomial-time Cauchy name with query cost at most $(b+1)^c$,
the finite implementation additionally has the bit-time bound
$O((N+s_\varepsilon)^{c+10})$ from the cited theorem, where
$N=\lceil\log_2(2/\varepsilon)\rceil$ and $s_\varepsilon$ is the binary
encoding length of the rational tolerance. The lifted physical braid carries
$(R_1z^{-1})^k$ and that phase is not part of the normalized error.

## Facts & Assumptions

**Given:** The Fibonacci SU(2) gate package, its fixed certified base net, an
exact target $S\in SU(2)$ and rational tolerance $0<\varepsilon\le\eta_0$.
For the finite bit bound also assume the algebraic coordinate descriptions
and polynomial-name conditions stated above.

[F1] The Fibonacci lifted generators form a finite inverse-closed alphabet
in $SU(2)$ with algebraic entries, and the subgroup they generate is dense
in $SU(2)$.
[[def-qa-37-fibonacci-braid-gate-set]]

[F2] The SU(2) SK recursion returns error at most $\varepsilon$ at the least
level $J$ and length at most $L_0 5^J$.
[[thm-qc-solovay-kitaev-error-and-resource-bound]]

[F3] For algebraic gate entries and a polynomial-time Cauchy target name, the
finite implementation has the stated polynomial bit-time bound.
[[thm-qc-solovay-kitaev-bit-complexity]]

[F4] The exact-real target and finite Cauchy-name conventions are distinct;
each precision query and rational encoding cost is explicit.
[[def-qa-37-certified-matrix-input]]

[F5] For a braid word, the physical and normalized operators differ by the
exact scalar determined by exponent sum; the extra $z^{-k}$ is recorded for
the lifted alphabet. [[lem-qa-37-fixed-sector-global-phase]]

[A1] The density premise is inherited under exactly ACω from the lifted
Fibonacci density lemma. [[def-countable-choice]]

## Proof

1.1 By [A1] and [F1], the alphabet satisfies the dense inverse-closed SU(2) hypothesis of the published SK estimate. Put $q_j=64^2\eta_j$. The recurrence gives $q_{j+1}=q_j^{3/2}$, so $q_j=(64^2\eta_0)^{(3/2)^j}\to0$ because $0<64^2\eta_0<1$. Hence a finite least $J$ with $\eta_J\le\varepsilon$ exists; the supplied SK theorem [F2] gives the error and $L_0 5^J$ length bounds. Taking logarithms in the formula for $q_J$ gives $J=O(\log\log(1/\varepsilon))$ and $5^J=O(\log^{\log_{3/2}5}(1/\varepsilon))$. [A1, F1, F2, given, algebra]

2.1 Under the extra finite-input hypotheses, [F3] applies because the lifted Fibonacci entries are algebraic by [F1] and the target is supplied through [F4]'s polynomial Cauchy interface. It gives the stated bit-time bound, including precision input and output word. [F5] supplies the exact exponent-sum phase scalar, which does not change the normalized operator error. Only ACω is inherited for density; no full AC is used. [A1, F1, F3, F4, F5, step 1.1] ∎
