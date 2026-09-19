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
dyadic meshes of a compact interval has finite total variation on that
interval" is false. Brownian motion provides the witness on $[0,1]$: almost
every Brownian path has dyadic quadratic sums converging uniformly to elapsed
time there while its total variation on that interval is infinite.

## Facts & Assumptions

**Given:** AC and a standard Brownian motion $B$.

[F1] Almost surely, simultaneously: the dyadic partial quadratic-variation processes of $B$ on $[0,1]$ converge uniformly to $t$, and the variation sums of $B$ are unbounded above on every nondegenerate compact interval. [[cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation]]

[F2] AC is the ambient assumption of the Brownian interfaces. [[def-axiom-of-choice]]

## Counterexample

**Proof technique:** direct.

1.1 By [F1] the intersection of the two probability-one statements is a probability-one event, so it is nonempty; fix any outcome $\omega$ in it. [F1, given]

2.1 For the path $t\mapsto B_t(\omega)$ on $[0,1]$ the dyadic quadratic sums are finite for each mesh and converge uniformly to elapsed time, whereas the supremum of the absolute-increment sums over partitions of $[0,1]$ is $+\infty$; both assertions refer to the same fixed continuous path. [step 1.1, F1]

3.1 Hence the refuted implication fails: the witness is continuous on $[0,1]$, has finite quadratic variation there in the stated dyadic sense, and nevertheless is not of bounded variation there; AC enters only through [F2]. [step 2.1, F2] ∎

## Source notes


Lawler, Section 2.8, records the dichotomy between divergence of the absolute-increment sums and convergence of the squared-increment sums for Brownian paths; the counterexample packages the two properties on the fixed horizon $[0,1]$ as the failure of an implication about deterministic continuous paths.
