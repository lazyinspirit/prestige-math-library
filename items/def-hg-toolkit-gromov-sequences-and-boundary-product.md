---
id: "def-hg-toolkit-gromov-sequences-and-boundary-product"
kind: "definition"
title: "Hg toolkit gromov sequences and boundary product"
deps: ["def-hg-toolkit-slim-triangles-products-and-four-point-constants"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Druţu–Kapovich §9.9 ray-boundary treatment; sequence comparison expanded locally"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: published
origin: "pipeline"
---

## Definition

Fix a nonempty metric space $(X,d)$, a basepoint $o\in X$, and a product constant $\kappa\ge0$ as in [[def-hg-toolkit-slim-triangles-products-and-four-point-constants]]. Indices below are positive integers. A sequence $x=(x_n)$ is **Gromov** if for every real $R$ there is $N$ such that $(x_n|x_m)_o>R$ whenever $n,m\ge N$. Write $x\sim y$ when for every $R$ some $N$ satisfies $(x_n|y_m)_o>R$ for all $n,m\ge N$. This is joint divergence, not merely diagonal divergence.

For a nonnegative double sequence set
$$\liminf_{n,m\to\infty} a_{nm}=\sup_{N\ge1}\inf\{a_{nm}:n,m\ge N\}\in[0,+\infty].$$
Each inner set is nonempty and bounded below. Its infimum exists by the real completeness convention; the increasing family of infima has its supremum if bounded, and otherwise we assign $+\infty$. No subtraction of infinite values is intended.

Once the equivalence relation has been proved, the **Gromov-sequence boundary** $\partial X$ is the set of equivalence classes of Gromov sequences. Until then all expressions are indexed by sequences themselves. For classes $\xi,\eta$ define the extended **boundary product** by
$$ (\xi|\eta)_o=\sup\left\{\liminf_{n,m\to\infty}(x_n|y_m)_o:x\in\xi,\ y\in\eta\right\}\in[0,+\infty]. $$
For any fixed pair of classes the set in braces is nonempty, since each class contains a representing sequence, and its nonnegative supremum is interpreted as above. The quotient is a set, being a subset of the power set of $X^{\mathbb N}$; defining it does not select representatives for a family of classes. The boundary can be empty, for instance for a bounded space: products are bounded by distances from $o$, so no Gromov sequence exists. No properness, geodesicity or AC is assumed here.
