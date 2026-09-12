---
id: "thm-square-minus-predictable-quadratic-variation-is-a-martingale"
kind: "theorem"
title: "Square minus predictable quadratic variation is a martingale"
deps: ["def-predictable-quadratic-variation-in-discrete-time", "thm-martingales-and-martingale-differences-correspond", "cor-cauchy-schwarz-for-random-variables", "thm-taking-out-what-is-known", "thm-basic-algebra-and-order-properties-of-conditional-expectation", "lem-conditioning-a-known-variable-and-an-independent-variable", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-arithmetic-and-lattice-operations-preserve-measurability", "def-axiom-of-choice"]
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

Assume AC. For every real square-integrable martingale $M$, the process $Z_n=M_n^2-\langle M\rangle_n$ is a martingale with $Z_0=M_0^2$. Also $W_n=(M_n-M_0)^2-\langle M\rangle_n$ is a martingale starting at zero. The initial variable $M_0$ may be random and need not vanish.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] The bracket is integrable predictable and its increment is the conditional squared martingale increment. [[def-predictable-quadratic-variation-in-discrete-time]].

[F2] Martingale increments have zero past conditional expectation. [[thm-martingales-and-martingale-differences-correspond]].

[F3] Square-integrable variables have an integrable product by Cauchy–Schwarz. [[cor-cauchy-schwarz-for-random-variables]].

[F4] A finite measurable factor may be taken out when its product with the integrable input is integrable. [[thm-taking-out-what-is-known]].

[F5] Conditional expectation is linear, order preserving and expectation preserving. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]].

[F6] An integrable variable measurable for the conditioning sigma-algebra conditions to itself. [[lem-conditioning-a-known-variable-and-an-independent-variable]].

[F7] Finite linear combinations remain integrable and their integrals are linear. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F8] Finite real sums and products are measurable. [[thm-arithmetic-and-lattice-operations-preserve-measurability]].

[F9] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

1.1 Put $D_n=M_n-M_{n-1}$ for $n\ge1$. It is in $L^2$ by $D_n^2\le2M_n^2+2M_{n-1}^2$, and its conditional mean given $\mathcal F_{n-1}$ is zero. Cauchy–Schwarz gives $E|M_{n-1}D_n|\le(E M_{n-1}^2)^{1/2}(E D_n^2)^{1/2}<\infty$. The factor $M_{n-1}$ is finite and known at time $n-1$, so taking-out is legitimate and gives $E[M_{n-1}D_n\mid\mathcal F_{n-1}]=M_{n-1}E[D_n\mid\mathcal F_{n-1}]=0$. [given, F2, F3, F4]

2.1 For the finite integral and conditional linearity used here, augment every finite disjoint nonnegative-simple display by its zero-coefficient complement. Intersections of two augmented displays partition the space and carry equal coefficients on nonempty cells, so finite additivity and $0\cdot(+\infty)=0$ prove representation independence. Common refinements give simple addition and monotonicity; scalar zero is direct and positive scalars are termwise. Supremum over simple minorants, increasing simple approximation and the sets $\{f_j\ge cs\}$ for $0<c<1$ give monotone convergence and nonnegative additivity. Positive/negative and real/imaginary decompositions give finite $L^1$ linearity; substituting these facts at the base validates the event-integral construction and algebra of the cited conditional expectations. The square and bracket are adapted and integrable, hence so is $Z$. Expand $M_n^2-M_{n-1}^2=2M_{n-1}D_n+D_n^2$. Every term is integrable. Conditional linearity and step 1.1 give $E[M_n^2-M_{n-1}^2\mid\mathcal F_{n-1}]=E[D_n^2\mid\mathcal F_{n-1}]=\langle M\rangle_n-\langle M\rangle_{n-1}$. The last difference is known at time $n-1$. Subtracting it and conditioning the known $Z_{n-1}$ proves $E[Z_n\mid\mathcal F_{n-1}]=Z_{n-1}$. The initial bracket is zero, so $Z_0=M_0^2$. [F1, F5, F6, F7, F8, step 1.1, construct]

3.1 Set $N_n=M_n-M_0$. Since $M_0$ is $\mathcal F_0$-measurable, it is known for every $\mathcal F_n$. Linearity gives $E[N_{n+1}\mid\mathcal F_n]=M_n-M_0=N_n$. Also $N_n^2\le2M_n^2+2M_0^2$ is integrable, so $N$ is a square-integrable martingale with $N_0=0$. Its increments equal $D_n$, hence $\langle N\rangle=\langle M\rangle$ as classes. Apply the already proved step 2.1 to $N$ to conclude that $W=N^2-\langle M\rangle$ is a martingale with $W_0=0$. AC is inherited from CE and bracket version construction; no unproved assertion about the product $M_0M_n$ is used. [given, F1, F5, F6, F7, F8, F9, step 2.1] ∎
