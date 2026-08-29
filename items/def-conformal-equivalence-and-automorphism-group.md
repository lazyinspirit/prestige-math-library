---
id: def-conformal-equivalence-and-automorphism-group
kind: definition
title: "Conformal equivalence and the automorphism group of a domain"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-biholomorphic-map]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Definition

Let $U,V\subseteq\mathbb C$ be complex domains. $U$ and $V$ are **conformally
equivalent** when there exists a biholomorphism $f:U\to V$ in the sense of
[[def-biholomorphic-map]]; such an $f$ is then a **conformal equivalence** from
$U$ onto $V$.

For a complex domain $U$, the **automorphism group** of $U$ is

$$\operatorname{Aut}(U):=\{\,f:U\to U:f\text{ is biholomorphic}\,\},$$

with composition as the group operation.

**Why the group operation is legitimate.** The identity map $\operatorname{id}_U$
is biholomorphic. If $f$ is biholomorphic then its inverse $f^{-1}$ is
holomorphic by the definition of biholomorphy, so $f^{-1}\in\operatorname{Aut}(U)$
when $f\in\operatorname{Aut}(U)$. If $f,g\in\operatorname{Aut}(U)$ then the
composite $g\circ f$ is biholomorphic: it is a bijection whose inverse
$f^{-1}\circ g^{-1}$ is a composite of holomorphic maps, hence holomorphic.
Composition of maps is associative, so these three closure facts make
$\operatorname{Aut}(U)$ a group with identity $\operatorname{id}_U$.
