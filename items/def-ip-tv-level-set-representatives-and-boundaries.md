---
id: def-ip-tv-level-set-representatives-and-boundaries
kind: definition
title: Canonical TV level sets and their boundaries
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-spatial-bv-and-distributional-tv
  - def-ip-boundary-tv-conventions
  - def-countable-choice
  - def-metric-space
  - thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on convergence of solutions of total variation regularized linear inverse problems, §3"
      url: "https://arxiv.org/pdf/1711.06495"
    - title: "Antonin Chambolle, Vincent Duval, Gabriel Peyré, and Clarice Poon, Geometric properties of solutions to the total variation denoising problem, §2.1"
      url: "https://arxiv.org/pdf/1602.00087"
---

## Definition

Assume Countable Choice. Let $u\in L^1_{\mathrm{loc}}(\mathbb R^2;\mathbb R)$, with functions identified when they agree almost everywhere. For full-space TV, use $u$ itself. For a bounded-domain Dirichlet or Neumann problem, use the zero extension $\widetilde u$ only to define the geometric level sets; this does not change the selected regularizer, and for each nonzero level the resulting set lies inside $\Omega$. For $t>0$, the positive $t$-level class is the measurable-set class of $E_t^+(u):=\{x\in\mathbb R^2:u(x)>t\}$; for $t<0$, the negative $t$-level class is the class of $E_t^-(u):=\{x\in\mathbb R^2:u(x)<t\}$. These classes do not depend on the representative of $u$. For any measurable set $E\subseteq\mathbb R^2$, its density-one representative is

$$E^{(1)}:=\left\{x\in\mathbb R^2:\lim_{r\downarrow0}\frac{|E\cap B(x,r)|}{|B(x,r)|}=1\right\}.$$

This representative depends only on the almost-everywhere class of $E$. The canonical level set $U_u^{(t)}$ is $(E_t^+(u))^{(1)}$ when $t>0$ and $(E_t^-(u))^{(1)}$ when $t<0$. Its canonical boundary is the ordinary topological boundary $\partial U_u^{(t)}$ in $\mathbb R^2$. For two nonempty boundary sets, use the usual extended Hausdorff distance induced by Euclidean distance; set $d_H(\varnothing,\varnothing)=0$ and $d_H(E,F)=+\infty$ if exactly one set is empty. Hausdorff convergence uses this convention and is invariant under changes to a function on a null set.

## Definition references

[[def-ip-spatial-bv-and-distributional-tv|Spatial BV and finite perimeter are defined on almost-everywhere classes.]]

[[def-ip-boundary-tv-conventions|Bounded-domain level sets use zero extension geometrically, while Dirichlet and Neumann TV retain distinct perimeter conventions.]]

[[def-metric-space|The Hausdorff distance uses the Euclidean metric on $\mathbb R^2$.]]

[[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n|The Lebesgue density theorem supplies density-one representatives.]]

[Iglesias, Mercier, and Scherzer, *A note on convergence of solutions of total variation regularized linear inverse problems*, §3](https://arxiv.org/pdf/1711.06495)

[Chambolle, Duval, Peyré, and Poon, *Geometric properties of solutions to the total variation denoising problem*, §2.1](https://arxiv.org/pdf/1602.00087)
