---
id: def-centered-subgaussian-reward
kind: definition
title: "Centered 1-sub-Gaussian reward"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-random-element-and-real-random-variable, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-real-exponential-function-and-e]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "Definition 5.2, PDF p. 86 / printed p. 77; non-centred rewards are interpreted through their mean-centred noise on PDF p. 88 / printed p. 79."
    - title: "Sébastien Bubeck and Nicolò Cesa-Bianchi, Regret Analysis of Stochastic and Nonstochastic Multi-armed Bandit Problems"
      url: "https://arxiv.org/pdf/1204.5721"
      locator: "Equation (2.2), Chapter 2 §2.2, PDF p. 13 / printed p. 10: two-sided centered MGF control."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Let $X$ be an integrable real random variable on a probability space, and write $\mu=\mathbb E[X]$. The reward $X$ is **1-sub-Gaussian** if for every $\lambda\in\mathbb R$,
$$
\mathbb E\!\left[\exp\!\left(\lambda(X-\mu)\right)\right]\le \exp\!\left(\frac{\lambda^2}{2}\right).
$$
The expectation in this condition is the nonnegative Lebesgue integral of the displayed exponential; the inequality requires it to be finite for every real $\lambda$.

## Definition references

[[def-random-element-and-real-random-variable]]: a real random variable is a measurable map into $(\mathbb R,\mathcal B(\mathbb R))$.

[[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation is the Lebesgue integral against the underlying probability measure, finite for an integrable real random variable.

[[def-real-exponential-function-and-e]]: $\exp(x)$ is the real exponential function defined for every $x\in\mathbb R$.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*](https://tor-lattimore.com/downloads/book/book.pdf): Definition 5.2, PDF p. 86 / printed p. 77; centered-noise convention, PDF p. 88 / printed p. 79.

[Sébastien Bubeck and Nicolò Cesa-Bianchi, *Regret Analysis of Stochastic and Nonstochastic Multi-armed Bandit Problems*](https://arxiv.org/pdf/1204.5721): Equation (2.2), Chapter 2 §2.2, PDF p. 13 / printed p. 10.
