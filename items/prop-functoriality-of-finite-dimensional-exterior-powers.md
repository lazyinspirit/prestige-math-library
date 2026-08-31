---
id: prop-functoriality-of-finite-dimensional-exterior-powers
kind: proposition
title: "Functoriality of finite-dimensional exterior powers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-of-the-finite-dimensional-exterior-power,
       def-linear-map]
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

Let $V,W,X$ be finite-dimensional real vector spaces and let $k\ge0$. Every
linear map $A:V\to W$ induces a linear map

$$ \bigwedge^kA:\bigwedge^kV\to\bigwedge^kW $$

characterized by

$$ (\bigwedge^kA)(v_1\wedge\cdots\wedge v_k)=Av_1\wedge\cdots\wedge Av_k. $$

Moreover,

$$ \bigwedge^k(\operatorname{id}_V)=\operatorname{id}_{\wedge^kV},\qquad \bigwedge^k(B\circ A)=(\bigwedge^kB)\circ(\bigwedge^kA). $$

## Facts & Assumptions

**Given:** Finite-dimensional real vector spaces $V,W,X$, an integer $k\ge0$, and linear maps $A:V\to W$ and $B:W\to X$.

[L1] Every alternating $k$-linear map factors uniquely through $\bigwedge^kV$ ([[thm-universal-property-of-the-finite-dimensional-exterior-power]]).

## Proof
**Proof technique:** direct.

1.1 The map $(v_1,\ldots,v_k)\mapsto Av_1\wedge\cdots\wedge Av_k$ is alternating and $k$-linear in $v_1,\ldots,v_k$. By [L1], it therefore factors uniquely through a linear map $\bigwedge^kA:\bigwedge^kV\to\bigwedge^kW$ with the stated action on decomposable wedges. [L1, given, construct]

2.1 The identity map and the composite $(\bigwedge^kB)\circ(\bigwedge^kA)$ have the expected values on every decomposable wedge: $$ \bigwedge^k(\operatorname{id}_V)(v_1\wedge\cdots\wedge v_k)=v_1\wedge\cdots\wedge v_k, $$ and $$ ((\bigwedge^kB)\circ(\bigwedge^kA))(v_1\wedge\cdots\wedge v_k)=BAv_1\wedge\cdots\wedge BAv_k. $$ The same formula holds for $\bigwedge^k(B\circ A)$. [step 1.1, given, algebra]

3.1 By uniqueness in [L1], the maps in step 2.1 must agree. Therefore exterior powers preserve identities and composition. [L1, step 2.1]

4.1 Hence $V\mapsto\bigwedge^kV$ and $A\mapsto\bigwedge^kA$ define a functor. [step 1.1, step 3.1] ∎
