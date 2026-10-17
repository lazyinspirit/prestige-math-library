---
id: def-time-homogeneous-markov-chain-with-transition-kernel
kind: definition
title: "Time-homogeneous Markov chain with transition kernel"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-measure-kernel-and-probability-kernel, def-conditional-probability-given-a-sigma-algebra, def-filtration-and-filtered-probability-space, def-stochastic-process-and-finite-dimensional-distributions]
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, Sections 5.1-5.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Section 5.1, definitions preceding Theorem 5.1.1, printed pp. 268-269"
---

## Definition

Assume the axiom of choice. Let $K$ be a probability kernel on $(E,\mathcal E)$,
let $(\Omega,\mathcal F,\mathbb P,(\mathcal F_n)_{n\ge0})$ be a filtered
probability space, and let $X=(X_n)_{n\ge0}$ be an adapted $E$-valued process.
We call $X$ a **time-homogeneous Markov chain with transition kernel $K$ relative
to $(\mathcal F_n)$** if, for every $n\ge0$ and $A\in\mathcal E$,
$$ \mathbb P(X_{n+1}\in A\mid\mathcal F_n)=K(X_n,A)\qquad\text{a.s.} $$
Here the left side is an almost-everywhere class of conditional-probability
versions. The right side is $\mathcal F_n$-measurable because
$x\mapsto K(x,A)$ is $\mathcal E$-measurable and $X_n$ is
$\mathcal F_n/\mathcal E$-measurable.

If $\mathcal F_n=\sigma(X_0,\ldots,X_n)$, we say simply that $X$ is a Markov
chain relative to its **natural filtration**. A chain relative to a larger
filtration is therefore a stronger assertion, not merely a change of notation.

Choice is used only through the library construction that supplies conditional
expectations, hence conditional probabilities, simultaneously as
almost-everywhere classes; this definition asserts no pointwise regular
conditional distribution.

