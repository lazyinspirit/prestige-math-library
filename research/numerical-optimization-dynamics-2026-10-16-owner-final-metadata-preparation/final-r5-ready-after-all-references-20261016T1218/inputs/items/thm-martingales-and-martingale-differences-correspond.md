---
id: "thm-martingales-and-martingale-differences-correspond"
kind: "theorem"
title: "Martingales and martingale differences correspond"
deps: ["def-martingale-submartingale-and-supermartingale", "def-martingale-difference-sequence", "thm-basic-algebra-and-order-properties-of-conditional-expectation", "lem-conditioning-a-known-variable-and-an-independent-variable", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-arithmetic-and-lattice-operations-preserve-measurability", "def-axiom-of-choice"]
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

Assume AC. If $M$ is a martingale, then $D_n=M_n-M_{n-1}$, $n\ge1$, is a martingale difference sequence. Conversely, given a martingale difference sequence $D$ and any integrable $\mathcal F_0$-measurable real $M_0$, the process $M_n=M_0+\sum_{k=1}^nD_k$ is a martingale. For fixed $M_0$ these constructions are inverse.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Conditional expectation is linear, order preserving and expectation preserving. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]].

[F2] An integrable variable measurable for the conditioning sigma-algebra conditions to itself. [[lem-conditioning-a-known-variable-and-an-independent-variable]].

[F3] Finite linear combinations remain integrable and their integrals are linear. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F4] Finite real sums, differences and products are measurable. [[thm-arithmetic-and-lattice-operations-preserve-measurability]].

[F5] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

[F6] A martingale difference is integrable and has zero conditional mean given the preceding sigma-algebra. [[def-martingale-difference-sequence]].

## Proof

**Proof technique:** direct.

1.1 First reconstruct the finite-integral interface used below. Augment every finite disjoint display of a nonnegative simple function by the complement of its displayed sets with coefficient $0$. Intersections of two augmented displays partition the whole space, and equality of the functions makes their coefficients agree on every nonempty cell. Finite additivity and $0\cdot(+\infty)=0$ therefore prove representation independence. Common augmented refinements give monotonicity and additivity term by term; homogeneity is direct when the scalar is zero and termwise when it is positive. Taking suprema over simple minorants gives nonnegative monotonicity, and increasing simple approximations together with the sets $\{f_j\ge cs\}$, $0<c<1$, give monotone convergence. Applying this to sums of increasing simple approximants gives nonnegative additivity. Positive/negative and real/imaginary decompositions now give the finite real and complex $L^1$ linearity used in [F3]. With this replacement for the affected foundation, the event-integral construction and uniqueness proof of the cited conditional-expectation algebra apply. For a martingale $M$, both $M_n$ and $M_{n-1}$ are $\mathcal F_n$-measurable. Their difference $D_n$ is measurable and integrable, with $E|D_n|\le E|M_n|+E|M_{n-1}|<\infty$. By linearity and conditioning the known $M_{n-1}$, $E[D_n\mid\mathcal F_{n-1}]=M_{n-1}-M_{n-1}=0$. This meets the difference definition. [given, F1, F2, F3, F4, F6, construct]

1.2 Conversely every summand $D_k$ for $k\le n$ is $\mathcal F_n$-measurable, as is $M_0$. The finite sum is adapted and integrable by [F3]–[F4]. Its next increment is $D_{n+1}$, so $E[M_{n+1}\mid\mathcal F_n]=E[M_n+D_{n+1}\mid\mathcal F_n]=M_n+0=M_n$. Thus it is a martingale [[def-martingale-submartingale-and-supermartingale]]. AC is inherited from the conditional classes; if versions of a class sequence are to be chosen, AC permits those countably many selections. [given, F1, F2, F3, F4, F5, F6]

2.1 The finite identities $\sum_{k=1}^n(M_k-M_{k-1})=M_n-M_0$ and $(M_0+\sum_{k=1}^nD_k)-(M_0+\sum_{k=1}^{n-1}D_k)=D_n$ prove inverse reconstruction. For $n=0$ the sum is empty and equals zero, so the initial value is exactly the prescribed $M_0$. For class representatives these finite equalities hold almost surely. [step 1.1, step 1.2] ∎
