---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/cex-fixed-neighbor-irregular-derivative-not-consistent.json
  precheck: pass
id: cex-fixed-neighbor-irregular-derivative-not-consistent
kind: counterexample
title: "A disordered fixed-neighbor stencil can fail derivative consistency"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-scaled-symmetric-compact-kernel-family, def-meshfree-cell-quadrature-and-fill-radius, thm-first-derivative-meshfree-convolution-bias, thm-continuous-functions-on-compact-jordan-sets-are-integrable, thm-additivity-over-subintervals]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
axiom_use: "No choice principle is used."
sources:
  references:
    - title: "Volker Springel, Smoothed Particle Hydrodynamics in Astrophysics, Annual Review of Astronomy and Astrophysics 48 (2010), author full text"
      url: "https://arxiv.org/html/1109.2219"
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Numerical Methods for Partial Differential Equations, Lecture 25: Particle Methods (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/ff7d4237c8f958e646cca0702e4dd17b_MIT18_336S09_lec25.pdf"
generation:
  role: counterexample
---

## Statement refuted

Keeping the same finite neighbor pattern in units of $\varepsilon$ while refining $\varepsilon$ alone guarantees consistency of a meshfree particle derivative. The following explicit periodic family refutes this claim for an affine field.

## Facts & Assumptions

**Given:** In one dimension use $W(s)=(35/32)(1-s^2)^3$ for $|s|\le1$ and zero otherwise, $W_\varepsilon(s)=\varepsilon^{-1}W(s/\varepsilon)$, and the periodic node set $P_\varepsilon=\{\varepsilon(4k+r): k\in\mathbb Z, r\in\{0,3/5,2,7/2\}\}$ with its nearest-node intervals, bounded by midpoints of consecutive nodes (the Voronoi cells), and cell volumes $V_j$. The rule is used on $\Omega=\mathbb R$ with periodic node pattern.

[F1] [[def-scaled-symmetric-compact-kernel-family]]: $W_\varepsilon$ is supported on $[-\varepsilon,\varepsilon]$ and the particle kernel derivative is $\partial_xW_\varepsilon(x-y)$.

[F2] [[def-meshfree-cell-quadrature-and-fill-radius]]: the particle sum is $Q_hg=\sum_jV_jg(x_j)$, and an integration-compatible rule satisfies $\int_\Omega g=\sum_{j:C_j\cap\operatorname{supp}(g)\ne\varnothing}\int_{C_j}g$ for each compactly supported continuous $g$.

[F3] [[thm-first-derivative-meshfree-convolution-bias]]: if $f\in C^3$ has bounded third derivative, then the continuous kernel-gradient target $D_\varepsilon f$ differs from $f'$ by at most $(m_3/6)\varepsilon^2\|f'''\|_\infty$.

[F4] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]: a continuous real function on a compact Jordan-measurable set is Riemann integrable there.

[F5] [[thm-additivity-over-subintervals]]: the Riemann integral over a closed interval is the sum of its integrals over any finite partition into adjacent closed subintervals.

## Counterexample

1.1 The adjacent gaps in one period are $3\varepsilon/5$, $7\varepsilon/5$, $3\varepsilon/2$, and $\varepsilon/2$, so the fill radius is $h=3\varepsilon/4$. The four Voronoi-cell lengths per period are $11\varepsilon/20$, $\varepsilon$, $29\varepsilon/20$, and $\varepsilon$; hence every volume is at most $2h$. If a cell meets $B(x,r)$, its node lies in $B(x,r+h)$. Nodes are separated by at least $\varepsilon/2$, so at most $1+4(r+h)/\varepsilon$ such nodes can lie in that interval. Each cell volume is at most $29\varepsilon/20$, and $r+h\ge3\varepsilon/4$; therefore the total active volume is at most $(29/20)\varepsilon+(29/5)(r+h)\le(116/15)(r+h)\le8(r+h)$. The local-volume bound holds with $C_L=8$. In particular, the cells at $-\varepsilon/2$ and $3\varepsilon/5$ are $[-5\varepsilon/4,-\varepsilon/4]$ and $[3\varepsilon/10,13\varepsilon/10]$, each of volume $\varepsilon$. [given, F2, algebra]

2.1 The nearest-node intervals tile $\mathbb R$, repeat with period $4\varepsilon$, and have gaps between their endpoints only at shared cell boundaries. Every compact support meets finitely many intervals. For any compactly supported continuous $g$, choose a finite consecutive block of cells containing $\operatorname{supp}(g)$; [F4] makes $g$ integrable on its compact union, and repeated [F5] splits that integral into the cell integrals. Cells outside the block have zero integral because they do not meet $\operatorname{supp}(g)$. Thus the integration-compatibility identity in [F2] holds for every compactly supported continuous $g$. [F2, F4, F5, step 1.1, choose]

3.1 On $|s|<1$, $W'(s)=-(105/16)s(1-s^2)^2$. For $f(y)=y$ at $x=0$, set $g(y)=y\,\partial_xW_\varepsilon(x-y)|_{x=0}$. By [F1], $g$ vanishes outside $[-\varepsilon,\varepsilon]$, and [F2] defines its particle sum as $Q_hg=\sum_jV_jg(x_j)$. The node at $0$ contributes zero; only $y=-\varepsilon/2$ and $y=3\varepsilon/5$ contribute, with values $-W'(1/2)/2=945/1024$ and $-(3/5)W'(3/5)=3024/3125$. Thus $Q_hg=945/1024+3024/3125$, independent of $\varepsilon$. [F1, F2, step 2.1, algebra]

4.1 Here $f'(0)=1$ and $f'''=0$, so [F3] gives $D_\varepsilon f(0)=1$ exactly. Since each summand in the value from step 3.1 exceeds $1/2$, that value is greater than $1$ for every $\varepsilon$. The derivative error therefore does not tend to zero although $h/\varepsilon=3/4$ remains fixed. [F3, step 3.1, algebra] ∎
