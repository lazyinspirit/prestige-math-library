---
id: def-nrqmx-determinant-line-projector
kind: definition
domain: mathematics
library: mathematics
title: Determinant line and its projector
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps:
  - def-nrqmx-smooth-projector-bundle
  - def-exterior-algebra-of-a-vector-space
  - thm-exterior-powers-are-functorial
  - thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix
  - thm-increasing-basis-wedges-form-a-basis
dependency_roles:
  def-nrqmx-smooth-projector-bundle: mathematical-premise
  def-exterior-algebra-of-a-vector-space: mathematical-premise
  thm-exterior-powers-are-functorial: mathematical-premise
  thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix: mathematical-premise
  thm-increasing-basis-wedges-form-a-basis: mathematical-premise
justified_by:
  - lem-nrqmx-determinant-line-projector-well-defined
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Keith Conrad, Exterior Powers
      url: https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf
      locator: Sections 3, 4, and 6, especially Theorem 6.1.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Let $M$ be a smooth manifold, let $r\ge1$, and let $P:M\to M_r(\mathbb C)$ be a $C^2$ orthogonal projector of constant rank $m$, with $1\le m\le r$. Its image bundle is $E_P=\{(x,v):P(x)v=v\}$, with the projected connection $\nabla s=P\,ds$ of [[def-nrqmx-smooth-projector-bundle]]. The **determinant line bundle** is the complex line bundle

$$\det E_P:=\bigwedge^m E_P\subset M\times\bigwedge^m\mathbb C^r.$$

Give $\bigwedge^m\mathbb C^r$ the Hermitian inner product for which $e_{i_1}\wedge\cdots\wedge e_{i_m}$, $i_1<\cdots<i_m$, is an orthonormal basis, where $(e_1,\ldots,e_r)$ is the standard basis of $\mathbb C^r$. The **determinant-line projector** at $x$ is $Q(x):=\bigwedge^m P(x)$; it is the orthogonal projection onto $\bigwedge^m\operatorname{im}P(x)$.

## Definition references

[[def-nrqmx-smooth-projector-bundle]]

[[def-exterior-algebra-of-a-vector-space]]

[[thm-increasing-basis-wedges-form-a-basis]]
