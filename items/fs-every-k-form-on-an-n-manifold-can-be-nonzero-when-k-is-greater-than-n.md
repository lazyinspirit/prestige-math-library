---
id: fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n
kind: false-statement
title: "A $k$-form on an $n$-manifold must vanish when $k>n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-dimension-of-the-kth-exterior-power-is-binomial,
       thm-exterior-power-transition-laws-define-a-smooth-vector-bundle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement

**False claim:** on an $n$-manifold, a $k$-form can be nonzero even when $k>n$.

## Facts & Assumptions

**Given:** An $n$-manifold $M$ and an integer $k>n$.

[L1] If $\dim V=n$ and $k>n$, then $\operatorname{Alt}^k(V)=0$ ([[cor-dimension-of-the-kth-exterior-power-is-binomial]]).

[L2] The bundle $\bigwedge^kT^*M$ has fibre $\operatorname{Alt}^k(T_pM)$ at each point ([[thm-exterior-power-transition-laws-define-a-smooth-vector-bundle]]).

## Refutation
**Proof technique:** direct.

1.1 For each $p\in M$, the tangent space $T_pM$ has dimension $n$. Hence [L1] gives $\operatorname{Alt}^k(T_pM)=0$. [L1, given]
2.1 By [L2], every fibre of $\bigwedge^kT^*M$ is zero. Therefore every section of that bundle is the zero form. [L2, step 1.1]
3.1 So no nonzero $k$-form exists when $k>n$, and the claim is false. [step 2.1] ∎