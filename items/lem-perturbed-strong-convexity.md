---
id: lem-perturbed-strong-convexity
kind: lemma
title: Strong-convexity inequality for a perturbed gradient point
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - lem-relaxed-euclidean-squared-norm
  - lem-l-smoothness-descent-inequality
  - def-euclidean-inner-product
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix C, Lemma 5"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Let $h:\mathbb R^d\to\mathbb R$ be continuously differentiable, let
$\nabla h$ be $\beta$-Lipschitz, and suppose $h$ is $\mu$-strongly convex with
$0\le\mu\le\beta$. Then for every $x,y,z\in\mathbb R^d$,
$$ \langle\nabla h(x),z-y\rangle \ge h(z)-h(y)+\frac\mu4\|y-z\|_2^2-\beta\|z-x\|_2^2. $$

## Statement references

[Karimireddy et al., SCAFFOLD, Appendix C, Lemma 5](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions
**Given:** The smoothness and strong-convexity hypotheses in the Statement.

[F1] [[lem-l-smoothness-descent-inequality]]: $\beta$-Lipschitz gradients satisfy $h(z)\le h(x)+\langle\nabla h(x),z-x\rangle+ (\beta/2)\|z-x\|_2^2$.

[F2] Strong convexity means $h(y)\ge h(x)+\langle\nabla h(x),y-x\rangle+ (\mu/2)\|y-x\|_2^2$ for all $x,y$.

[F3] [[lem-relaxed-euclidean-squared-norm]]: $\|y-x\|_2^2\ge\frac12\|y-z\|_2^2-\|x-z\|_2^2$.

## Proof

1.1 Rearranging [F1] and applying [F2] at the same point $x$ give [given]
$$ \langle\nabla h(x),z-x\rangle \ge h(z)-h(x)-\frac\beta2\|z-x\|_2^2, $$
$$ \langle\nabla h(x),x-y\rangle \ge h(x)-h(y)+\frac\mu2\|x-y\|_2^2. $$
Add the inequalities and use [F3]. This yields
$$ \langle\nabla h(x),z-y\rangle \ge h(z)-h(y)+\frac\mu4\|y-z\|_2^2 -\frac{\beta+\mu}{2}\|z-x\|_2^2. $$
[F1, F2, F3, given, algebra]

2.1 Since $\mu\le\beta$, $(\beta+\mu)/2\le\beta$. Replacing the last coefficient by the weaker $-\beta$ proves the claimed bound. [step 1.1, given, algebra] ∎