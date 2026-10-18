---
id: thm-metric-graph-p1-fem-cea-and-energy-rate
kind: theorem
title: "Cea and O(h) energy error for conforming metric graph P1 FEM"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-anchored-finite-metric-graph-h1-space
  - lem-anchored-metric-graph-h1-space-is-hilbert
  - lem-anchored-metric-graph-poincare
  - lem-metric-graph-kirchhoff-green-identity
  - thm-metric-graph-weak-elliptic-problem
  - def-metric-graph-p1-edge-mesh
  - lem-metric-graph-p1-interpolation-estimate
  - def-sobolev-space-wkp-and-its-norm
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
  - cor-symmetric-galerkin-best-approximation-in-energy-norm
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-countable-choice
  - def-axiom-of-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "Full AC is inherited from graph traces; Countable Choice is used by
  the published Cea and symmetric Galerkin best-approximation interfaces."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mario Arioli and Michele Benzi, A Finite Element Method for Quantum
        Graphs, Emory CS Technical Report TR-2015-009 (44-page full text)"
      url: "https://www.cs.emory.edu/technical-reports/techrep-00275.pdf"
      locator: "Complete 44-page report; §2, §4, §7.2, printed/PDF pp. 3–14 and 22–23."
    - title: "Peter Kuchment, Quantum graphs: an introduction and a brief survey,
        arXiv:0802.3442 (2008)"
      url: "https://arxiv.org/pdf/0802.3442"
      locator: "Complete 39-page full text; §2 Graphs and metric graphs (printed pp.
        2–3), §4 Vertex conditions and §4.1 Quadratic form (printed pp. 5–9)."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice, every edge component is anchored, each $\kappa_e$ is constant with
$0<\kappa_{\min}\le\kappa_e\le\kappa_{\max}$, and the weak solution $u$ of
[[thm-metric-graph-weak-elliptic-problem]] satisfies
$u_e\in H^2(0,\ell_e)$, as defined in
[[def-sobolev-space-wkp-and-its-norm]], on every edge. For the conforming P1 space $V_h$ of
[[def-metric-graph-p1-edge-mesh]], let $u_h\in V_h$ solve
$$a(u_h,v_h)=F(v_h)\qquad(v_h\in V_h),$$
where $a$ and $F$ are the weak diffusion form and load of that theorem. Put
$L_\Gamma=\sum_e\ell_e$,
$M_a=\kappa_{\max}$, and
$\alpha_a=\kappa_{\min}/(1+L_\Gamma^2)$. Then $u_h$ exists uniquely and
$$\|u-u_h\|_{V_D}\le\frac{M_a}{\alpha_a}\inf_{v_h\in V_h}\|u-v_h\|_{V_D}.$$
$$\left(\sum_e\kappa_e\|(u_e-u_{h,e})'\|_{L^2(e)}^2\right)^{1/2}\le h\left(\sum_e\kappa_e\|u''_e\|_{L^2(e)}^2\right)^{1/2}.$$
Thus the energy-seminorm error is $O(h)$ for this fixed finite graph and
edgewise H2 solution. The Green identity
[[lem-metric-graph-kirchhoff-green-identity]] identifies the natural
free-vertex condition as Kirchhoff balance; this theorem makes no claim for
vertex singularities or higher-dimensional junctions.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice, the anchored graph, positive edge diffusivities, weak solution
$u\in V_D$, edgewise H2 regularity, and the finite P1 edge mesh.

[F1] $V_D$ is a real Hilbert space
([[lem-anchored-metric-graph-h1-space-is-hilbert]]).

[F2] For a bounded coercive form and a bounded functional on a real Hilbert
space, the conforming Galerkin solution exists uniquely and obeys Cea's
$M_a/\alpha_a$ quasi-optimality estimate; Countable Choice is assumed
([[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]],
[[def-countable-choice]]).

[F3] For a real symmetric bounded coercive form, the conforming Galerkin
solution is the best approximation in the induced energy norm
([[cor-symmetric-galerkin-best-approximation-in-energy-norm]],
[[def-countable-choice]]).

[F4] The nodal P1 interpolant is conforming and obeys the displayed
edgewise H2 energy estimate ([[lem-metric-graph-p1-interpolation-estimate]]).

[F5] The weak variational equation is equivalent, under edgewise H2
regularity, to the edge equation and the free-vertex Kirchhoff flux balance
([[thm-metric-graph-weak-elliptic-problem]],
[[lem-metric-graph-kirchhoff-green-identity]]).

[F6] The anchored weak problem has a unique variational solution with the
same form and load ([[thm-metric-graph-weak-elliptic-problem]]).

[F7] Cauchy–Schwarz bounds the edge-product integral pairing by the product
of its two $L^2$ norms
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F8] The anchored graph Poincare inequality is
$\|v\|_H\le L_\Gamma\|v'\|_H$
([[lem-anchored-metric-graph-poincare]]).

[A1] The graph trace space uses the Axiom of Choice
([[def-axiom-of-choice]]).

[A2] Countable Choice is used by the Cea and best-approximation results
([[def-countable-choice]]).

## Proof

**Proof technique:** conforming Galerkin approximation.

**Given:** The real anchored graph Hilbert space, its symmetric diffusion
form with $\kappa_{\min}>0$, the load, a finite edge partition, and the
edgewise H2 regularity of $u$.

1.1 The map sending a P1 graph function to its finite list of nodal values is linear and injective, since an affine function on a cell is determined by its two endpoint values. There are finitely many cells, so $V_h$ is finite-dimensional. Its defining vertex and anchor constraints make it a subspace of $V_D$. [given, F1, construct]

1.2 For $w,v\in V_D$, [F7] gives $|a(w,v)|\le\kappa_{\max}\|w'\|_H\|v'\|_H \le M_a\|w\|_{V_D}\|v\|_{V_D}$. By path Poincare, $\|v\|_{V_D}^2\le(1+L_\Gamma^2)\|v'\|_H^2$, so $a(v,v)\ge\kappa_{\min}\|v'\|_H^2 \ge\alpha_a\|v\|_{V_D}^2$. Thus $a$ is bounded and coercive with the stated constants and is symmetric. [F1, F7, F8, given, algebra]

2.1 Apply [F2] with $V=V_D$, subspace $V_h$, form $a$, and load $F$ from the weak problem. Its Hilbert, finite-dimensional inclusion, boundedness, coercivity and bounded-load hypotheses hold by [F1], step 1.1, and step 1.2. Hence a unique Galerkin solution exists and satisfies the displayed Cea estimate. It agrees with the restriction of the same weak equation because the continuous solution is unique by [F6]. [A1, A2, F1, F2, F6, step 1.1, step 1.2, given]

3.1 Apply the symmetric best-approximation fact [F3] to $u_h$ and choose $v_h=I_hu$. By [F4], this interpolant is in $V_h$ and its energy error is at most $h(\sum_e\kappa_e\|u''_e\|_{L^2(e)}^2)^{1/2}$. Therefore the Galerkin energy error is bounded by the same quantity, as claimed. The rate is conditional on the stated edgewise H2 regularity; no vertex regularity is inferred. By [F5], the natural free-vertex condition is Kirchhoff flux balance. [F3, F4, F5, step 2.1, given] ∎

