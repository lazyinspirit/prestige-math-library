---
id: def-bounded-client-gradient-dissimilarity
kind: definition
title: Standard and gap forms of bounded client gradient dissimilarity
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: []
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification: {}
sources:
  references:
    - title: "Karimireddy et al., SCAFFOLD, Section 2 (A1) and Appendix D.1, equations (13)–(14)"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
---

## Definition

Let $N,d\ge1$ be positive integers, let $f_i:\mathbb R^d\to\mathbb R$
be differentiable, and put $f=N^{-1}\sum_{i=1}^N f_i$. For constants
$G\ge0$ and $B\ge1$, the clients have standard $(G,B)$-bounded gradient
dissimilarity if
$$ \frac1N\sum_{i=1}^N\|\nabla f_i(x)\|_2^2\le G^2+B^2\|\nabla f(x)\|_2^2 \qquad(x\in\mathbb R^d). $$

For $\beta>0$ and a finite global lower bound $f^\star\in\mathbb R$ for
$f$, the gap-form condition with parameters $(G,B,\beta,f^\star)$ is
$$ \frac1N\sum_{i=1}^N\|\nabla f_i(x)\|_2^2\le G^2+2\beta B^2(f(x)-f^\star) \qquad(x\in\mathbb R^d). $$
In the convex-client FedAvg results, $\beta$ is a common gradient Lipschitz
constant and $f^\star$ is the attained minimum of $f$; this is the relaxed
convex form of the source's assumption. These conditions bound the population
second moment of deterministic client gradients. They are separate from the
within-client stochastic-gradient noise bound
$\mathbb E\|g_i(x)-\nabla f_i(x)\|_2^2\le\sigma^2$.

## Definition references

[Karimireddy et al., SCAFFOLD, Section 2 (A1)](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

[Karimireddy et al., SCAFFOLD, Appendix D.1, equations (13)–(14)](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)
