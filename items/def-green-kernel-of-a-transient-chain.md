---
id: def-green-kernel-of-a-transient-chain
kind: definition
title: "Green kernel of a transient chain"
status: published
origin: pipeline
deps:
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-hitting-return-and-visit-times
  - thm-monotone-convergence-for-the-integral
  - def-axiom-of-choice
  - thm-chapman-kolmogorov-equations
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---
## Definition

For any countable transition matrix $p$, define its extended nonnegative Green kernel by

$$G(x,y):=\sum_{n\ge0}p^{(n)}(x,y)\in[0,+\infty].$$

This matrix series is defined without Choice. Under the explicitly assumed Axiom of Choice [[def-axiom-of-choice]], for a specified chain law with initial state $x$, the multistep Markov identity gives $\mathbb P_x(X_n=y)=p^{(n)}(x,y)$ for each $n$ ([[thm-chapman-kolmogorov-equations]]). Applying monotone convergence to the partial sums of $N_y=\sum_{n\ge0}\mathbf1_{\{X_n=y\}}$ then gives

$$\mathbb E_xN_y=\sum_{n\ge0}\mathbb P_x(X_n=y)=G(x,y).$$

No finiteness is asserted: $G(x,y)$ may be $+\infty$, including when a chain starts in a transient state and can enter a recurrent class. The expectation identity uses [[def-hitting-return-and-visit-times]] and [[thm-monotone-convergence-for-the-integral]]; the matrix definition remains valid for recurrent states as well.
