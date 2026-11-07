---
id: ex-divisor-circle-errors-at-one
kind: example
title: "Divisor and Circle Errors at One"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-dirichlet-divisor-error-term, def-gauss-circle-error-term]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dirichlet divisor error definition"
      url: "https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf"
      locator: "The finite-sum normalization at x=1"
    - title: "Squared-radius Gauss circle error definition"
      url: "https://arxiv.org/pdf/math/0304187v1"
      locator: "§1 circle-remainder normalization; this source omits the origin term used in the local squared-radius definition, so the example is evaluated directly from the local definition"
verification:
  precheck: pass
---

## Example

At x=1, the divisor and squared-radius circle errors are Δ(1)=2−2γ and P(1)=5−π, where γ is the Euler–Mascheroni constant.

## Example references

[Dirichlet divisor error definition](https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf)

[Squared-radius Gauss circle error definition](https://arxiv.org/pdf/math/0304187v1)

## Facts & Assumptions

**Given:** x=1, the divisor error definition, and the squared-radius circle error definition.

[F1] [[def-dirichlet-divisor-error-term]]: For every real $x\ge1$, the Dirichlet divisor error term is $$\Delta(x):=\sum_{1\le n\le x}d(n)-x\log x-(2\gamma-1)x.$$

[F2] [[def-gauss-circle-error-term]]: For real $x\ge0$, define the squared-radius Gauss circle error by
$$P(x):=\#\{(a,b)\in\mathbb Z^2:a^2+b^2\le x\}-\pi x =1+\sum_{1\le n\le x}r_2(n)-\pi x,$$
where $r_2(n)$ counts ordered pairs of integers with sum of squares $n$. The radius of the counted disk is $\sqrt{x}$, and the initial $1$ records the origin.

## Proof

1.1 The only positive integer n≤1 is n=1, and d(1)=1. Since log 1=0, [F1] gives Δ(1)=1−(2γ−1)=2−2γ. [given, F1, algebra]

2.1 The integer pairs with a²+b²≤1 are (0,0),(1,0),(−1,0),(0,1),(0,−1), exactly five. Substitution in [F2] gives P(1)=5−π. [given, F2, algebra] ∎
