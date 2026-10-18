---
id: def-meshfree-cell-quadrature-and-fill-radius
kind: definition
title: "Meshfree cell quadrature and fill radius"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-euclidean-inner-product, def-metric-ball, def-jordan-inner-and-outer-content, def-riemann-integral-over-a-jordan-set, def-support-and-compactly-supported-riemann-integral-in-rn]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
axiom_use: "No choice principle is used in this definition."
verification:
  precheck: n/a
sources:
  references:
    - title: "Volker Springel, Smoothed Particle Hydrodynamics in Astrophysics, Annual Review of Astronomy and Astrophysics 48 (2010), author full text"
      url: "https://arxiv.org/html/1109.2219"
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Numerical Methods for Partial Differential Equations, Lecture 25: Particle Methods (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/ff7d4237c8f958e646cca0702e4dd17b_MIT18_336S09_lec25.pdf"
---

## Definition

Let $\Omega\subseteq\mathbb R^d$ be open. Write $B(x,r)$ for the open Euclidean ball from [[def-metric-ball]] with distance induced by [[def-euclidean-inner-product]]. A family of cells is **locally finite** here when every compact subset of $\Omega$ meets only finitely many cells. A bounded set is **Jordan measurable** when its Jordan inner and outer contents agree ([[def-jordan-inner-and-outer-content]]). A **cell particle rule** is a nonempty locally finite family of bounded Jordan-measurable cells $C_j\subseteq\Omega$ whose interiors are disjoint and whose union covers $\Omega$ up to their shared boundaries, together with nodes $x_j\in C_j$ and positive volumes $V_j=\int 1_{C_j}$. The cell volume integral is Riemann-defined and equals the Jordan content ([[def-riemann-integral-over-a-jordan-set]]). Its fill radius is $h=\sup_j\sup_{y\in C_j}|y-x_j|$, using the Euclidean norm from [[def-euclidean-inner-product]]; require $0<h<\infty$. Assume finite constants $C_V,C_L>0$ satisfy $V_j\le C_Vh^d$ and the local volume bound

$$\sum_{j:C_j\cap B(x,r)\ne\varnothing}V_j\le C_L(r+h)^d$$

for every $x\in\mathbb R^d$ and $r>0$. For continuous $g:\mathbb R^d\to\mathbb R$ with compact support contained in $\Omega$ (support as in [[def-support-and-compactly-supported-riemann-integral-in-rn]]), define $Q_hg=\sum_jV_jg(x_j)$; local finiteness makes this sum finite. For specified parameters $R>0$ and $\varepsilon>0$, an evaluation point $x\in\mathbb R^d$ is **interior** relative to $(R,\varepsilon)$ when $B(x,R\varepsilon+2h)\subset\Omega$; in a kernel application, $R$ is the chosen support-radius bound for the unscaled kernel. For periodic calculations, use the periodic extensions of the field and particle rule on $\mathbb R^d$, so no kernel support is truncated.

The cell rule is integration-compatible: for every continuous $g:\mathbb R^d\to\mathbb R$ with compact support contained in $\Omega$, only finitely many cells meet $\operatorname{supp}(g)$, every cell integral appearing below is Riemann-defined, and
$$\int_\Omega g(y)\,dy=\sum_{j:C_j\cap\operatorname{supp}(g)\ne\varnothing}\int_{C_j}g(y)\,dy.$$
This finite partition identity is part of the quadrature data.
