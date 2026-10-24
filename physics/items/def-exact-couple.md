---
id: def-exact-couple
kind: definition
title: Exact couple
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-abelian-category, def-homology-object-of-a-chain-complex]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Stacks Project, Definition 12.21.1 and Remark 12.21.5 (homological grading)"
      url: https://stacks.math.columbia.edu/tag/011P
---

## Definition

Fix an integer $r\ge1$ and an [[def-abelian-category|abelian category]]. A
**page-$r$ homological exact couple** is a pair of indexed families
$(D_{p,q})_{p,q\in\mathbb Z}$ and $(E_{p,q})_{p,q\in\mathbb Z}$ and maps
$$i_{p,q}:D_{p,q}\to D_{p+1,q-1},\qquad j_{p,q}:D_{p,q}\to E_{p+1-r,q+r-1},\qquad k_{p,q}:E_{p,q}\to D_{p-1,q}.$$
For every $(p,q)$ require the three subobject equalities
$$\operatorname{im}(i_{p-1,q+1})=\ker(j_{p,q})\ \text{in }D_{p,q},$$
$$\operatorname{im}(j_{p+r-1,q-r+1})=\ker(k_{p,q})\ \text{in }E_{p,q},$$
$$\operatorname{im}(k_{p+1,q})=\ker(i_{p,q})\ \text{in }D_{p,q}.$$
These are exactness at the three positions, meaning the corresponding
[[def-homology-object-of-a-chain-complex|kernel modulo image]] is zero.
In particular each consecutive composite $ji$, $kj$ or $ik$, with the
displayed shifts understood, is zero.

An **initial exact couple** means $r=1$: then $j$ has bidegree $(0,0)$.
Its first spectral page will be called $E^1$, not $E^0$.
A morphism between two page-$r$ couples is a pair of bidegree-zero families
$u_{p,q}:D_{p,q}\to\widetilde D_{p,q}$ and
$w_{p,q}:E_{p,q}\to\widetilde E_{p,q}$ satisfying
$$u_{p+1,q-1}i_{p,q}=\widetilde i_{p,q}u_{p,q},\quad w_{p+1-r,q+r-1}j_{p,q}=\widetilde j_{p,q}u_{p,q},\quad u_{p-1,q}k_{p,q}=\widetilde k_{p,q}w_{p,q}.$$
All-zero families are allowed. Graded objects here mean indexed families:
no infinite direct sum, convergence or abutment is part of the definition.
