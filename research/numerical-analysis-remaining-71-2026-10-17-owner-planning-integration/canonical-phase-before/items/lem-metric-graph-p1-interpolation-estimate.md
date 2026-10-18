---
id: lem-metric-graph-p1-interpolation-estimate
kind: lemma
title: "P1 edge interpolation estimate with junction compatibility"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-anchored-finite-metric-graph-h1-space
  - def-metric-graph-p1-edge-mesh
  - def-sobolev-space-wkp-and-its-norm
  - cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives
  - thm-holder-inequality-for-integrals
  - def-axiom-of-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "The Axiom of Choice is inherited through the one-dimensional representatives of u and its weak derivative; the interpolation estimate itself uses only finite sums and Cauchy–Schwarz."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Mario Arioli and Michele Benzi, A Finite Element Method for Quantum Graphs, Emory CS Technical Report TR-2015-009 (44-page full text)"
      url: "https://www.cs.emory.edu/technical-reports/techrep-00275.pdf"
      locator: "Complete 44-page report; §2, §4, §7.2, printed/PDF pp. 3–14 and 22–23."
    - title: "Peter Kuchment, Quantum graphs: an introduction and a brief survey, arXiv:0802.3442 (2008)"
      url: "https://arxiv.org/pdf/0802.3442"
      locator: "Complete 39-page full text; §2 Graphs and metric graphs (printed pp. 2–3), §4 Vertex conditions and §4.1 Quadratic form (printed pp. 5–9)."
---

## Statement

Assume the Axiom of Choice, any anchor set $D\subseteq V$ as in
[[def-anchored-finite-metric-graph-h1-space]], a mesh
$\mathcal T_h$ of [[def-metric-graph-p1-edge-mesh]], positive constants
$\kappa_e$ on the edges, and edgewise $u_e\in H^2(0,\ell_e)$ as in
[[def-sobolev-space-wkp-and-its-norm]], with the
trace matching and anchor conditions of $V_D$. Let $I_hu$ be the edgewise
nodal linear interpolant. Then $I_hu\in V_h$ and
$$\left(\sum_{e\in E}\kappa_e\|(u_e-I_hu_e)'\|_{L^2(e)}^2\right)^{1/2} \le h\left(\sum_{e\in E}\kappa_e\|u''_e\|_{L^2(e)}^2\right)^{1/2}.$$

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite anchored metric graph, its finite edge partition, positive
edge constants $\kappa_e$, and an edgewise H2 function $u$ with common
vertex traces and zero anchor traces.

[F1] H2 means that both $u_e$ and its weak derivative $u'_e$ belong to
H1, and $u''_e$ is its second weak derivative
([[def-sobolev-space-wkp-and-its-norm]]).

[F2] Each H1 edge class has an absolutely continuous representative whose
increments are integrals of its weak derivative
([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]).

[F3] Cauchy–Schwarz bounds an interval integral by the square root of its
length times the L2 norm
([[thm-holder-inequality-for-integrals]]).

[F4] The mesh consists of finitely many interval cells and $h$ is their
maximum length ([[def-metric-graph-p1-edge-mesh]]).

[A1] The representative interface in [F2] assumes the Axiom of Choice
([[def-axiom-of-choice]]).

## Proof

**Given:** The graph, edge constants, mesh, and edgewise H2 function in the
Statement.

1.1 Fix an edge cell $K=[a,b]$ of length $h_K=b-a$. By [F1] and [F2], the continuous representative of $u_e$ has endpoint values and the representative of $u'_e$ is absolutely continuous. Thus the slope of the nodal interpolant on $K$ is $$s_K=\frac{u_e(b)-u_e(a)}{h_K} =\frac1{h_K}\int_a^b u'_e(y)\,dy.$$ The fundamental theorem in [F2] justifies this equality. [F1, F2, F4, A1, given]

1.2 For any $x\in K$, [F2] and [F3] give $$|u'_e(x)-s_K| \le\frac1{h_K}\int_a^b|u'_e(x)-u'_e(y)|\,dy \le\frac1{h_K}\int_a^b\sqrt{h_K}\|u''_e\|_{L^2(K)}\,dy =\sqrt{h_K}\|u''_e\|_{L^2(K)}.$$ Squaring and integrating over $x\in K$ yields $$\|(u_e-I_hu_e)'\|_{L^2(K)}^2 =\|u'_e-s_K\|_{L^2(K)}^2 \le h_K^2\|u''_e\|_{L^2(K)}^2.$$ The first equality holds because the derivative of the nodal interpolant is the constant slope $s_K$ on K. [F2, F3, step 1.1, algebra]

2.1 Multiply the cell estimate in step 1.2 by $\kappa_e$, sum over all cells, and use $h_K\le h$. The cells partition the edge interiors and their finitely many endpoints have measure zero. Hence $$\sum_e\kappa_e\|(u_e-I_hu_e)'\|_{L^2(e)}^2 \le h^2\sum_e\kappa_e\|u''_e\|_{L^2(e)}^2.$$ Taking square roots proves the displayed error estimate. [F4, step 1.2, algebra]

2.2 At an original vertex, the endpoint nodal value at every incident endpoint incidence is the common trace of $u$, so all interpolant traces agree, including both ends of a loop. At each anchor the nodal value is zero. Thus $I_hu\in V_D$ and it is affine on every cell by construction, which is exactly membership in $V_h$. [given, F1, F4, construct] ∎

