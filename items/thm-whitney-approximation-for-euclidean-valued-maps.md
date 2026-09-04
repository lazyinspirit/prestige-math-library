---
id: thm-whitney-approximation-for-euclidean-valued-maps
kind: theorem
title: "Whitney approximation for Euclidean-valued maps"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-positive-continuous-error-function-for-strong-approximation,
       thm-smooth-partitions-of-unity-exist-on-manifolds,
       cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorem 6.21"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $F:M\to\mathbb R^k$ be continuous, where $M$ is a smooth manifold, and let
$\varepsilon:M\to(0,\infty)$ be a positive continuous error function. Then there
exists a smooth map $\widetilde F:M\to\mathbb R^k$ such that
$$ \|\widetilde F(p)-F(p)\|<\varepsilon(p)\qquad\text{for all }p\in M. $$

## Facts & Assumptions

**Given:** A continuous map $F:M\to\mathbb R^k$ and a positive continuous error
function $\varepsilon$ on $M$.

[F1] A positive continuous error function is a continuous map
$\varepsilon:M\to(0,\infty)$
([[def-positive-continuous-error-function-for-strong-approximation]]).

[L1] Smooth partitions of unity subordinate to countable coordinate covers
exist ([[thm-smooth-partitions-of-unity-exist-on-manifolds]],
[[cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover]]).

## Proof
**Proof technique:** direct.

1.1 By continuity of $F$ and $\varepsilon$, each point $p\in M$ has a coordinate neighbourhood $U_p$ on which $$\|F(q)-F(q')\|<\frac{1}{3}\varepsilon(p)\quad\text{and}\quad \varepsilon(q)>\frac{2}{3}\varepsilon(p)$$ for all $q,q'\in U_p$. Choose a countable cover $(U_i)$ of this type and points $p_i\in U_i$. [F1, given, choose]

2.1 Let $(\phi_i)$ be a smooth partition of unity subordinate to $(U_i)$, provided by [L1], and set $$\widetilde F(q):=\sum_i \phi_i(q)F(p_i).$$ This is smooth because the family is locally finite. [L1, step 1.1, construct]

3.1 Fix $q\in M$. Only indices with $q\in U_i$ contribute, so $$\widetilde F(q)-F(q)=\sum_i\phi_i(q)\bigl(F(p_i)-F(q)\bigr).$$ Hence $$\|\widetilde F(q)-F(q)\|\le\sum_i\phi_i(q)\|F(p_i)-F(q)\|<\sum_i\phi_i(q)\frac{\varepsilon(q)}{2}=\frac{\varepsilon(q)}{2}<\varepsilon(q).$$ Therefore $\widetilde F$ has the required pointwise error bound. [F1, step 1.1, step 2.1, algebra] ∎
