---
id: def-interior-product-on-the-exterior-algebra
kind: definition
title: "Interior product on the exterior algebra"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-gram-inner-product-on-kth-exterior-power, thm-exterior-algebra-laws, thm-adjoint-exists-and-is-unique-in-finite-dimension]
justified_by: [thm-interior-product-is-adjoint-to-exterior-multiplication]
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Albert Chern, Geometric Fluid Dynamics notes, Interior Products"
      url: "https://cseweb.ucsd.edu/~alchern/notes/GeometricFluidDynamics/"
---

## Definition

Let $V$ be a finite-dimensional real inner product space and $v\in V$. For each degree $k\ge1$, exterior multiplication by $v$,

$$m_v:\Lambda^{k-1}V\longrightarrow\Lambda^kV,\qquad m_v(\alpha)=v\wedge\alpha,$$

is a linear map between finite-dimensional inner product spaces, the target carrying the Gram pairing of [[def-gram-inner-product-on-kth-exterior-power]] and the wedge product being [[thm-exterior-algebra-laws]]. Its adjoint exists and is unique by [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]. The **interior product** (contraction) by $v$ is that adjoint:

$$\iota_v:=m_v^*:\Lambda^kV\longrightarrow\Lambda^{k-1}V,\qquad \langle\iota_v\alpha,\beta\rangle=\langle\alpha,v\wedge\beta\rangle,$$

with $\iota_v=0$ on $\Lambda^0V$. The explicit value of $\iota_v$ on a decomposable wedge is computed in [[thm-interior-product-is-adjoint-to-exterior-multiplication]], which discharges the well-definedness obligation recorded above.

## Remarks

The three defining properties of the interior product — $\iota_v(1)=0$, $\iota_v(w)=\langle v,w\rangle$ for $w\in V$, and the graded derivation rule of [[prop-wedge-and-interior-product-satisfy-the-graded-anticommutation-identity]] — each follow from the adjoint description.
