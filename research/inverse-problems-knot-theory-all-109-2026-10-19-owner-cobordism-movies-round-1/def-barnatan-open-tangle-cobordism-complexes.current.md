---
id: def-barnatan-open-tangle-cobordism-complexes
kind: definition
title: "Open Bar-Natan cobordisms and their planar complexes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
justified_by: []
aliases: []
deps: []
dependency_level: 0
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, sections 3–6 and 8.3"
      url: "https://arxiv.org/pdf/math/0410495v2"
---

## Definition

Fix a based closed disk $D$ and a finite even subset $B\subset\partial D$. A smoothing is a compact smooth one-manifold in $D$, with boundary precisely $B$ and fixed radial collars there; it may contain circles. A morphism from $P$ to $Q$ is a compact orientable, not separately oriented, smooth surface with corners in $D\times[0,1]$, with bottom $P$, top $Q$, side boundary $B\times[0,1]$ and fixed product collars. Identify surfaces by ambient isotopy relative to these boundary collars. Take free abelian morphism groups, compose by stacking, and impose the following relations in every surrounding surface: a sphere component is zero; a torus component may be deleted with factor $2$; and $C_{12}+C_{34}=C_{13}+C_{24}$, where $C_{ij}$ attaches a tube between disk patches $i,j$ among four disjoint patches in a ball. Denote the resulting category by $\mathcal C(B)$.

For a surface $C$ set $\deg C=\chi(C)-|B|/2$. Permit formal shifts $P\{a\}$, with a surface of degree $e$ having degree $e+b-a$ as a map $P\{a\}\to Q\{b\}$. Take finite direct sums with matrices of morphisms. A complex is a bounded cochain complex in this additive category, whose differential has internal degree zero. A chain map has cochain degree zero; all homotopies have cochain degree $-1$. Unless specified otherwise, maps and homotopies have internal degree zero. Two chain maps are homotopic when $f-g=dh+hd$. Write $K(B)$ for the category with these complexes as objects and chain maps modulo homotopy as morphisms. Call a complex simple if its invertible endomorphisms in $K(B)$ of internal degree zero are exactly the two maps $\pm\operatorname{id}$ (allowing coincidence when the object is zero).

A planar template is a disk with finitely many numbered input disks removed and a properly embedded one-manifold of arcs and circles in the remainder, meeting each boundary in its prescribed marked points. It acts on smoothings by insertion, and on surfaces by insertion in the template crossed with $[0,1]$. Extend by multilinearity to finite sums. For ordered complexes $C_1,\ldots,C_s$ its totalization has term $\bigoplus_{r_1+\cdots+r_s=r}D(C_1^{r_1},\ldots,C_s^{r_s})$, with shifts added, and differential $\sum_i(-1)^{r_1+\cdots+r_{i-1}}D(1,\ldots,d_i,\ldots,1)$ on that summand. For homogeneous maps $f_i$ of cochain degrees $a_i$, use the sign $(-1)^{\sum_i a_i\sum_{j<i}r_j}$ on $D(f_1,\ldots,f_s)$, evaluated on the input summand of degrees $(r_j)$; this is the usual tensor sign convention, independently of the internal grading.

## Definition references

[Bar-Natan, Definitions 3.1–3.3, section 4.1, equation (3), and Definitions 6.1–6.4](https://arxiv.org/pdf/math/0410495v2)
