---
id: def-moments-variance-and-covariance
kind: definition
title: "Moments, variance, and covariance on a probability space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-expectation-of-a-nonnegative-or-integrable-random-variable]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Jean-Francois Le Gall, Integration, Probabilities and Stochastic Processes, Section 8.2.1"
      url: "https://www.imo.universite-paris-saclay.fr/~jean-francois.le-gall/IPPA2.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.6"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Definition

Let $X$ be a real random variable on a probability space.

- For $p>0$, the **$p$th absolute moment** of $X$ exists when $|X|^p$ is
  integrable, and is then
  $$\mathbb E[|X|^p].$$
- If $X$ is integrable, its **mean** is $\mathbb E[X]$.
- If $X$ is square-integrable, its **variance** is
  $$\operatorname{Var}(X):=\mathbb E[(X-\mathbb E[X])^2].$$

If $X$ and $Y$ are square-integrable real random variables on the same
probability space, their **covariance** is
$$\operatorname{Cov}(X,Y):=\mathbb E[(X-\mathbb E[X])(Y-\mathbb E[Y])].$$
