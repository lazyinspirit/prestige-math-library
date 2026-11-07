---
dependency_level: 4
id: def-moment-curve-multiscale-ball-averages
kind: definition
title: Moment-curve multiscale ball averages
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-countable-choice
- def-polynomial-decoupling-weight-and-norm
- def-moment-curve-extension-operator
- def-l2-decoupling-constant-for-moment-curve
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: 'Bourgain–Demeter–Guth, §§7–8: normalized multiscale quantities'
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
---

## Definition

Fix $n\ge2$, $M=n!$, $E\ge100n$, $p\ge2$, $0<\delta<1$, and separated intervals $I_1,\ldots,I_M$ as in the multilinear decoupling definition. For $q>0$, $\mathcal P_{\delta^q}(I_i)$ always means the consecutive mesh anchored at the left endpoint of $I_i$, with one possible final shorter interval. For a ball $U$ define
$$ D_t(q,U):=\prod_{i=1}^M\left(\sum_{J\in\mathcal P_{\delta^q}(I_i)}\|E_Jg\|_{L^t_\sharp(w_{U,E})}^2\right)^{1/(2M)}\quad(t\ge1). $$
If $B^r$ has radius $\delta^{-r}$ and $0<s\le r$, choose a cover $\mathcal B_s(B^r)$ by radius-$\delta^{-s}$ balls with centers in $B^r$ and overlap bounded by a fixed dimensional constant, and set
$$ A_{p,t}(q,B^r,s):=\left(\frac1{|\mathcal B_s(B^r)|}\sum_{U\in\mathcal B_s(B^r)}D_t(q,U)^p\right)^{1/p},\qquad A_p(q,B^r,s):=A_{p,2}(q,B^r,s). $$
The constants in assertions about these quantities are uniform for these local covers; they may depend on their fixed overlap constant. They can be chosen by a lattice of spacing a sufficiently small dimensional multiple of $\delta^{-s}$, retaining or projecting centers to the closed ball. Radius and lattice adjustments by fixed dimensional factors are equivalent by the weight comparisons. In a finite proof tree choose the covers recursively inside parent balls; every resulting ball lies in a fixed dilation of the original ball, with constants allowed to depend on that finite tree. The notation records exponents of radii and of interval lengths, and does not assert that all three exponents coincide.

All quantities are finite for $g\in L^1$: $|E_Jg|\le\|g\|_1$ and $E>n$ makes the weights integrable. They are nonnegative and homogeneous of degree one in $g$. Analytic use assumes Countable Choice for the Euclidean Lebesgue measure and the listed norm suppliers. The covers and meshes are finite constructions and introduce no full Axiom of Choice.

## Definition references

[[def-l2-decoupling-constant-for-moment-curve]]

[BDG, §§7–8](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)
