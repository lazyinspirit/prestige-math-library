---
id: ex-two-distinct-one-dimensional-modules-over-generic-jordan-hall-algebra
kind: example
title: "Two distinct one-dimensional modules over the generic Jordan Hall algebra"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-hall-algebra-module
  - thm-generic-jordan-hall-algebra-is-symmetric-functions
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §2.3"
      url: "https://arxiv.org/pdf/math/0611617v2"
---

## Example

Let $K=\mathbb Q(t)$ and let $H_{J,K}$ be the generic Jordan Hall algebra.
By [[thm-generic-jordan-hall-algebra-is-symmetric-functions]],
$H_{J,K}=K[u_1,u_2,\ldots]$ as an algebra, where $u_r$ is the generator
corresponding to the class $u_{(1^r)}$. The assignments
$$\epsilon_0(u_r)=0\quad(r\ge1),\qquad \epsilon_1(u_1)=1,\quad\epsilon_1(u_r)=0\quad(r\ge2)$$
give two different one-dimensional Hall modules on the same $K$-vector
space $K$, by $h\cdot z=\epsilon_i(h)z$.

## Facts & Assumptions

**Given:** The generic Jordan Hall algebra over $K$ and the Hall-module
definition.

[F1] [[thm-generic-jordan-hall-algebra-is-symmetric-functions]]: the
generators $u_r=u_{(1^r)}$ freely generate the generic Hall algebra as a
polynomial algebra, so any assignment of their values in a commutative
$K$-algebra extends uniquely to a unital $K$-algebra homomorphism.

[F2] [[def-hall-algebra-module]]: a unital representation $\rho:H\to
\operatorname{End}_K(M)$ defines a Hall-module action by $h\cdot m=\rho(h)m$.

## Verification

1.1 By [F1], assigning values to the free polynomial generators $u_r$ extends uniquely to a unital $K$-algebra homomorphism for both $\epsilon_0$ and $\epsilon_1$. [given, F1, construct]

2.1 For $i\in\{0,1\}$ define $\rho_i(h)(z)=\epsilon_i(h)z$. Multiplicativity and unit preservation from step 1.1 make $\rho_i$ a unital representation, so [F2] gives a Hall-module action on $K$. [given, F1, F2, step 1.1, construct]

3.1 The actions differ because $\rho_0(u_1)=0$ while $\rho_1(u_1)=\operatorname{id}_K$. Thus the same one-dimensional vector space carries two different Hall-module structures. [F1, step 2.1, algebra] ∎

