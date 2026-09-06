---
id: def-graded-derivation-of-the-algebra-of-differential-forms
kind: definition
title: "A graded derivation of the algebra of differential forms"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-differential-k-form, prop-differential-forms-form-a-graded-commutative-algebra]
justified_by: []
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Definition

Let $M$ be a smooth manifold and $r\in\mathbb Z$, and put $\Omega^j(M)=\{0\}$ for $j<0$.  A
**degree-$r$ graded derivation** of $\Omega^*(M)$ is an $\mathbb R$-linear map $D:\Omega^*(M)\to\Omega^*(M)$ such
that $D\Omega^k(M)\subseteq\Omega^{k+r}(M)$ for every $k\ge0$ and
$$ D(\alpha\wedge\beta)=D\alpha\wedge\beta+(-1)^{r\deg\alpha}\alpha\wedge D\beta $$
for all homogeneous forms $\alpha$ and $\beta$.
