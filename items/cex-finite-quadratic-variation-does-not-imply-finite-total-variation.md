---
id: cex-finite-quadratic-variation-does-not-imply-finite-total-variation
kind: counterexample
title: "Finite quadratic variation does not imply finite total variation"
status: draft
origin: pipeline
deps: [cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 2.8"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement refuted

The implication "a continuous path with finite quadratic variation along the
dyadic meshes has finite total variation on every compact interval" is false.
Brownian motion provides the witness: almost every Brownian path has dyadic
quadratic sums converging to elapsed time while its total variation is infinite
on every nondegenerate interval.

## Facts & Assumptions

**Given:** AC and a standard Brownian motion $B$.

[F1] Almost surely, simultaneously: the dyadic partial quadratic-variation processes of $B$ converge uniformly on every compact time interval to $t$, and the variation sums of $B$ are unbounded above on every nondegenerate compact interval. [[cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation]]

[F2] AC is the ambient assumption of the Brownian interfaces. [[def-axiom-of-choice]]

## Counterexample

**Proof technique:** direct.

1.1 By [F1] the intersection of the two probability-one statements is a probability-one event, so it is nonempty; fix any outcome $\omega$ in it. [F1, given]

2.1 For the path $t\mapsto B_t(\omega)$ the dyadic quadratic sums over $[0,T]$ are finite for each $n$ and converge to $T$, whereas the supremum of the absolute-increment sums over partitions of any nondegenerate $[a,b]$ is $+\infty$; both assertions refer to the same fixed continuous path. [step 1.1, F1]

3.1 Hence the refuted implication fails in the strongest possible way: the witness is continuous, has finite quadratic variation in the dyadic sense on every compact interval, and nevertheless fails to be of bounded variation on every nondegenerate compact interval; AC enters only through [F2]. [step 2.1, F2] ∎

## Source notes


Lawler, Section 2.8, records the dichotomy between divergence of the absolute-increment sums and convergence of the squared-increment sums for Brownian paths; the counterexample packages it as the failure of an implication about deterministic continuous paths.
