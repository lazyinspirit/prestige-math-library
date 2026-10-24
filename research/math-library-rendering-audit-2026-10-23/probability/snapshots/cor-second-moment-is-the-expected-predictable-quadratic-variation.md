---
id: "cor-second-moment-is-the-expected-predictable-quadratic-variation"
kind: "corollary"
title: "Second moment is the expected predictable quadratic variation"
deps: ["thm-square-minus-predictable-quadratic-variation-is-a-martingale", "def-predictable-quadratic-variation-in-discrete-time", "thm-basic-algebra-and-order-properties-of-conditional-expectation", "thm-linearity-of-the-lebesgue-integral-on-l-one", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
status: published
origin: "pipeline"
---

## Statement

Assume AC. For a real square-integrable martingale $M$ and every $n\ge0$,
$$E[M_n^2]=E[M_0^2]+E[\langle M\rangle_n],$$
with all three terms finite. In particular, $M_0=0$ gives $E[M_n^2]=E[\langle M\rangle_n]$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] The square-minus-bracket process is a martingale with initial M0 squared. [[thm-square-minus-predictable-quadratic-variation-is-a-martingale]].

[F2] Conditional expectation is linear, order preserving and expectation preserving. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]].

[F3] Finite linear combinations remain integrable and their integrals are linear. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F4] Assume AC. [[def-axiom-of-choice]].

[F5] For a square-integrable martingale, predictable quadratic variation is an integrable finite sum of conditional square increments. [[def-predictable-quadratic-variation-in-discrete-time]].

## Proof

**Proof technique:** direct.

1.1 By [F1], $Z_n=M_n^2-\langle M\rangle_n$ is integrable and $E[Z_k\mid\mathcal F_{k-1}]=Z_{k-1}$ for each $k\ge1$. Expectation preservation gives $EZ_k=EZ_{k-1}$. Induction over the finitely many times up to $n$ yields $EZ_n=EZ_0=EM_0^2$, also at $n=0$. The invocations of F1 and F2 are made under the AC assumption F4. [given, F1, F2, F4]

2.1 For the finite integral linearity used here, augment each finite disjoint display of a nonnegative simple function by its zero-coefficient complement. Pairwise intersections of two augmented displays partition the whole space and have equal coefficients on nonempty cells, so finite additivity and $0\cdot(+\infty)=0$ prove representation independence. Common refinements give simple addition and monotonicity, while scalar zero is direct and positive scalars are termwise. Supremum over simple minorants, increasing simple approximation and the sets $\{f_j\ge cs\}$ for $0<c<1$ give monotone convergence and nonnegative additivity. Positive/negative and real/imaginary decompositions then give finite $L^1$ linearity. The square is integrable by the square-integrability hypothesis, and the bracket is integrable by [F5], so this local linearity gives $EZ_n=EM_n^2-E\langle M\rangle_n$. Rearranging the finite equality from step 1.1 proves the formula. If $M_0=0$ its second moment is zero. At $n=0$ the bracket is zero and the equation reads $EM_0^2=EM_0^2$. [F1, F3, F5, step 1.1, construct] ∎
