---
id: thm-fair-coin-frequency-strong-law
kind: theorem
title: Fair-coin frequency strong law
status: published
verification:
  audited: 2026-09-14
origin: pipeline
deps: [thm-birkhoff-ergodic-theorem, thm-ergodicity-and-invariant-functions, thm-dominated-convergence, thm-integrals-are-invariant-under-measure-preserving-maps, thm-fair-coin-one-sided-shift-is-measure-preserving-and-mixing, thm-mixing-implies-weak-mixing-implies-ergodicity, thm-fair-coin-measure-on-binary-sequences, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§§10.1, 10.5, printed pp. 89–97; fair-coin shift application"
proof_strategy: direct
---

## Statement

Assume the Axiom of Countable Choice.  On one-sided binary sequence space with
fair-coin probability,

$$\frac1n\sum_{k=0}^{n-1}x_k\longrightarrow\frac12$$

almost surely.

## Facts & Assumptions

**Given:** Countable choice, binary sequence space $\Omega=\{0,1\}^{\mathbb N}$, its fair-coin probability $p$, and the left shift $\sigma$.

[F1] The fair-coin measure gives every one-coordinate cylinder mass $1/2$ ([[thm-fair-coin-measure-on-binary-sequences]]).

[F2] The shift preserves $p$, is strongly mixing, and hence is ergodic ([[thm-fair-coin-one-sided-shift-is-measure-preserving-and-mixing]], [[thm-mixing-implies-weak-mixing-implies-ergodicity]]).

[F3] Birkhoff supplies an invariant almost-everywhere limit ([[thm-birkhoff-ergodic-theorem]]), and ergodicity makes every finite invariant measurable function constant almost everywhere ([[thm-ergodicity-and-invariant-functions]]).

[F4] Dominated convergence and invariance of integrals identify bounded ergodic limits ([[thm-dominated-convergence]], [[thm-integrals-are-invariant-under-measure-preserving-maps]]).

## Proof

**Proof technique:** apply Birkhoff to the first coordinate.

1.1 Define $f(x)=x_0$.  Then $f$ is the indicator of the one-coordinate cylinder $\{x:x_0=1\}$, so $0\leq f\leq1$ and $\int f\,dp=1/2$. [F1, construct]

1.2 Since $f(\sigma^kx)=x_k$, $$A_nf(x)=\frac1n\sum_{k=0}^{n-1}x_k.$$ [given, algebra]

2.1 By [F2] and [F3], $A_nf$ converges almost everywhere to a constant $c$. The bound $0\leq A_nf\leq1$, dominated convergence, and integral invariance give $$c=\int c\,dp=\lim_n\int A_nf\,dp=\int f\,dp=\frac12.$$ [F2, F3, F4, step 1.1]

3.1 Combining steps 1.2 and 2.1 proves the asserted almost-sure frequency limit.  Countable choice is inherited from the fair-coin measure and shift suppliers [F1]–[F2]; no further simultaneous selections occur here. [F1, F2, step 1.2, step 2.1] ∎
