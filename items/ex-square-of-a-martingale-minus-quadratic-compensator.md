---
id: "ex-square-of-a-martingale-minus-quadratic-compensator"
kind: "example"
title: "Square of a martingale minus quadratic compensator"
deps: ["thm-square-minus-predictable-quadratic-variation-is-a-martingale", "def-predictable-quadratic-variation-in-discrete-time", "def-martingale-submartingale-and-supermartingale", "lem-conditioning-a-known-variable-and-an-independent-variable", "thm-basic-algebra-and-order-properties-of-conditional-expectation", "thm-grouping-independent-sigma-algebras", "def-independent-random-elements", "cor-cauchy-schwarz-for-random-variables", "thm-arithmetic-and-lattice-operations-preserve-measurability", "thm-nonnegative-weighted-sums-of-measures", "prop-dirac-measure-is-a-probability-measure", "def-axiom-of-choice"]
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

## Example

Assume AC. Let a given independent family of real variables $(Y_k)_{k\ge1}$ have $EY_k=0$ and finite variances $\sigma_k^2=EY_k^2$. For $S_0=0$, $S_n=\sum_{k=1}^nY_k$ and the filtration $\mathcal F_0$ trivial, $\mathcal F_n=\sigma(Y_1,\ldots,Y_n)$, one has
$$\langle S\rangle_n=\sum_{k=1}^n\sigma_k^2,$$
and $S_n^2-\sum_{k=1}^n\sigma_k^2$ is a martingale.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] Disjoint groups of independent sigma-algebras remain independent. [[thm-grouping-independent-sigma-algebras]].

[F2] A known integrable variable conditions to itself; an independent one conditions to its mean. [[lem-conditioning-a-known-variable-and-an-independent-variable]].

[F3] Conditional expectation is linear, order preserving and expectation preserving. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]].

[F4] Square-integrable variables have an integrable product by Cauchy–Schwarz. [[cor-cauchy-schwarz-for-random-variables]].

[F5] Predictable quadratic variation sums conditional squared increments. [[def-predictable-quadratic-variation-in-discrete-time]].

[F6] A square-integrable martingale squared minus its bracket is a martingale. [[thm-square-minus-predictable-quadratic-variation-is-a-martingale]].

[F7] Nonnegative finite and countable weighted sums of measures are measures. [[thm-nonnegative-weighted-sums-of-measures]].

[F8] A Dirac measure at a specified point is a probability measure. [[prop-dirac-measure-is-a-probability-measure]].

[F9] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

## Verification

**Proof technique:** direct.

1.1 The generated sigma-algebras are nested, and finite sums are measurable by [[thm-arithmetic-and-lattice-operations-preserve-measurability]]. Cauchy–Schwarz with the constant one gives $E|Y_k|\le(EY_k^2)^{1/2}<\infty$. Repeated use of $(a+b)^2\le2a^2+2b^2$ shows that every finite sum $S_n$ has finite second moment, and hence finite first moment. Group independence and [F2] give $E[Y_{n+1}\mid\mathcal F_n]=0$, while the known $S_n$ conditions to itself. Thus $E[S_{n+1}\mid\mathcal F_n]=S_n$, proving the martingale property [[def-martingale-submartingale-and-supermartingale]]. [given, F1, F2, F3, F4]

2.1 The measurable variable $Y_k^2$ is integrable and its Borel events belong to $\sigma(Y_k)$, independent of $\mathcal F_{k-1}$. Thus $E[Y_k^2\mid\mathcal F_{k-1}]=EY_k^2=\sigma_k^2$. Since $S_k-S_{k-1}=Y_k$, the bracket formula gives $\langle S\rangle_n=\sum_{k=1}^n\sigma_k^2$. The square-minus-bracket theorem now gives the asserted martingale. AC is inherited from these conditional classes and the bracket construction. [F1, F2, F5, F6, F9, step 1.1]

3.1 To see why the optional sum differs, take $\Omega=\{-1,0,1\}$ and $P=\tfrac14\delta_{-1}+\tfrac12\delta_0+\tfrac14\delta_1$. This is a measure by [F7]–[F8], and its total mass is one. Set $Y_1(\omega)=\omega$ and $Y_k=0$ for $k\ge2$. The family $(Y_k)_{k\ge1}$ is independent because all but one member have only probability-zero or probability-one events. Here $EY_1=0$ and $EY_1^2=1/2$. Thus $[S]_1=Y_1^2$ takes values $0,1$ with probabilities $1/2,1/2$, whereas $\langle S\rangle_1=1/2$ everywhere. The compensated square takes values $-1/2,1/2$ of equal mass and thereafter stays fixed. [F5, F7, F8, step 1.1, step 2.1] ∎
