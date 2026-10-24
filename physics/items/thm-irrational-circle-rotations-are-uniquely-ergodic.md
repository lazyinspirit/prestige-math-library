---
id: thm-irrational-circle-rotations-are-uniquely-ergodic
kind: theorem
title: Irrational circle rotations are uniquely ergodic
status: published
origin: pipeline
deps: [thm-unique-ergodicity-is-equivalent-to-uniform-ergodic-averages, thm-birkhoff-ergodic-theorem, thm-ergodicity-and-invariant-functions, thm-dominated-convergence, thm-integrals-are-invariant-under-measure-preserving-maps, thm-circle-rotation-is-ergodic-iff-angle-is-irrational, prop-circle-rotations-preserve-lebesgue-measure, thm-lebesgue-measure-of-a-box-of-every-kind, lem-equicontinuity-on-a-compact-domain-is-uniform, lem-unit-interval-circle-is-a-nonempty-compact-metric-space, thm-heine-cantor-metric, thm-extreme-value-metric, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "Proposition 8.6.1, printed pp. 80–81; the local proof uses Birkhoff and equicontinuity instead of the source's Fourier argument"
proof_strategy: direct
---

## Statement

Assume the Axiom of Countable Choice.  If $\alpha$ is irrational, then the
circle rotation $R_\alpha$ is uniquely ergodic, and its unique invariant Borel
probability is Lebesgue measure $\lambda$.

## Facts & Assumptions

**Given:** Countable choice and an irrational real $\alpha$.

[F1] The interval-model circle is a nonempty compact metric space ([[lem-unit-interval-circle-is-a-nonempty-compact-metric-space]]), and every continuous real function on it is bounded and uniformly continuous ([[thm-extreme-value-metric]], [[thm-heine-cantor-metric]]).

[F2] $R_\alpha$ is an isometry preserving Lebesgue probability, and irrationality makes it ergodic ([[prop-circle-rotations-preserve-lebesgue-measure]], [[thm-circle-rotation-is-ergodic-iff-angle-is-irrational]]).

[F3] Birkhoff supplies an invariant a.e. limit; on an ergodic probability system it is constant a.e. ([[thm-birkhoff-ergodic-theorem]], [[thm-ergodicity-and-invariant-functions]]).

[F4] Dominated convergence and integral invariance identify limits of bounded averages ([[thm-dominated-convergence]], [[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F5] Unique ergodicity is equivalent, under countable choice, to uniform convergence of every continuous real ergodic average to a constant ([[thm-unique-ergodicity-is-equivalent-to-uniform-ergodic-averages]]).

[F6] Every nondegenerate ordinary interval has positive Lebesgue measure ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Proof

**Proof technique:** direct Birkhoff–equicontinuity argument.

1.1 Fix $f\in C(\mathbb T,\mathbb R)$.  Compactness makes $f$ bounded, hence $f\in L^1(\lambda)$.  By [F2]–[F3], $A_nf$ converges on a conull set $Y_f$ to a constant $c_f$.  Since $|A_nf|\leq\lVert f\rVert_\infty$, dominated convergence and invariance give $$c_f=\int c_f\,d\lambda=\lim_n\int A_nf\,d\lambda=\int f\,d\lambda.$$ [F2, F3, F4]

1.2 Given $\varepsilon>0$, uniform continuity of $f$ gives $\delta>0$ such that $d(x,y)<\delta$ implies $|f(x)-f(y)|<\varepsilon/3$.  Rotations are isometries, so the same $\delta$ gives $$|A_nf(x)-A_nf(y)|<\varepsilon/3$$ for every $n$ whenever $d(x,y)<\delta$. [F1, F2]

2.1 The set $Y_f$ is dense.  Indeed, every nonempty circle-open set contains a nondegenerate ordinary interval, possibly on one side of the cut, and such an interval has positive Lebesgue measure by the interval-measure formula.  A conull set must meet it. [F2, F6, step 1.1]

3.1 Compactness supplies a finite $\delta/3$-net $x_1,\ldots,x_m$.  By density choose, using only finite choice, $y_i\in Y_f$ with $d(x_i,y_i)<\delta/3$.  For all sufficiently large $n$, every $|A_nf(y_i)-c_f|<\varepsilon/3$.  Given $x$, choose $i$ with $d(x,x_i)<\delta/3$; then $d(x,y_i)<2\delta/3$, and step 1.2 gives $|A_nf(x)-c_f|<2\varepsilon/3$.  Thus $A_nf\to c_f$ uniformly. [F1, step 2.1, step 1.2]

4.1 The argument applies to every real continuous $f$, with $c_f=\int f\,d\lambda$.  By [F5], $R_\alpha$ is uniquely ergodic and its unique invariant probability is the already invariant $\lambda$.  Countable choice is inherited from [F2] and [F5]; the finite net and finite choices in step 3.1 require no stronger principle.  No Fourier series or Weyl criterion was used. [F2, F5, step 1.1, step 3.1] ∎
