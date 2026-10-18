---
id: thm-metric-graph-p1-parabolic-semidiscrete-stability
kind: theorem
title: "Energy-stable semidiscrete P1 evolution on an anchored metric graph"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-anchored-finite-metric-graph-h1-space
  - def-sobolev-space-wkp-and-its-norm
  - lem-anchored-metric-graph-h1-space-is-hilbert
  - lem-anchored-metric-graph-poincare
  - def-metric-graph-p1-edge-mesh
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - def-parabolic-evolution-triple-and-energy-space
  - thm-parabolic-finite-dimensional-measurable-ode
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-countable-choice
  - def-axiom-of-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "The Axiom of Choice is inherited through metric-graph traces; Countable Choice is used by the L2 Hilbert and compactly-supported density interfaces. The general finite-dimensional ODE theorem adds no choice principle."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Mario Arioli and Michele Benzi, A Finite Element Method for Quantum Graphs, Emory CS Technical Report TR-2015-009 (44-page full text)"
      url: "https://www.cs.emory.edu/technical-reports/techrep-00275.pdf"
      locator: "Complete 44-page report; §2, §4, §7.2, printed/PDF pp. 3–14 and 22–23."
    - title: "Christian Clason, Introduction to Finite Element Methods, complete lecture notes, Chapter 12"
      url: "https://arxiv.org/pdf/1709.08618v2.pdf"
      locator: "Complete 118-page notes; Chapter 12 §12.1, PDF/printed p. 102."
    - title: "Peter Kuchment, Quantum graphs: an introduction and a brief survey, arXiv:0802.3442 (2008)"
      url: "https://arxiv.org/pdf/0802.3442"
      locator: "Complete 39-page full text; §2 Graphs and metric graphs (printed pp. 2–3), §4 Vertex conditions and §4.1 Quadratic form (printed pp. 5–9)."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let a finite metric graph
with nonempty edge set have every connected edge component anchored, let
$V=V_D$ and $H=\bigoplus_{e\in E}L^2(0,\ell_e;\mathbb R)$, and let $V_h$
be its conforming P1 edge space. Put $L_\Gamma=\sum_e\ell_e$,
$\alpha=\kappa_{\min}/(1+L_\Gamma^2)$, and assume constant diffusivities
$0<\kappa_{\min}\le\kappa_e\le\kappa_{\max}$. For $T>0$,
$f\in L^2(0,T;V_D^*)$, and $u_h^0\in V_h$, define
$a(w,v)=\sum_e\kappa_e\int_0^{\ell_e}w'_ev'_e\,dx_e$. There is a unique
$u_h\in H^1(0,T;V_h)$ with $u_h(0)=u_h^0$ satisfying, for almost every $t$,

$$((u_h)'(t),v_h)_H+a(u_h(t),v_h)=\langle f(t),v_h\rangle_{V_D^*,V_D}\qquad(v_h\in V_h).$$

For every $t\in[0,T]$,

$$\|u_h(t)\|_H^2+\alpha\int_0^t\|u_h(s)\|_{V_D}^2\,ds\le\|u_h^0\|_H^2+\alpha^{-1}\int_0^t\|f(s)\|_{V_D^*}^2\,ds.$$

Here $V_h$ is the finite P1 space from
[[def-metric-graph-p1-edge-mesh]]. This is a semidiscrete
existence and energy statement; it gives no parabolic spatial error rate.

## Facts & Assumptions

**Given:** Full AC and Countable Choice; a finite anchored metric graph;
the real spaces $V=V_D$ and $H$; positive edge diffusivities; a fixed finite
P1 edge mesh; a dual load $f$; and an initial vector $u_h^0\in V_h$.

[F1] The edge-product L2 space is a real Hilbert space under the edge-sum
integral inner product, assuming Countable Choice
([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]],
[[def-countable-choice]]).

[F2] Each $C_c^\infty(0,\ell_e)$ function belongs to edge $H^1$ and has
zero endpoint traces, so its extension by zero to the other edges lies in
$V_D$. Such functions are dense in $L^2(0,\ell_e)$ under Countable Choice
([[def-anchored-finite-metric-graph-h1-space]],
[[def-sobolev-space-wkp-and-its-norm]],
[[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]],
[[def-countable-choice]]).

[F3] The anchored graph H1 space is Hilbert and its inclusion in H is
continuous, with $\|v\|_H\le\|v\|_V$
([[lem-anchored-metric-graph-h1-space-is-hilbert]],
[[def-anchored-finite-metric-graph-h1-space]]).

[F4] Path Poincare gives $\|v\|_H\le L_\Gamma\|v'\|_H$, so the graph
diffusion form is bounded by $\kappa_{\max}$ and coercive with
$\alpha=\kappa_{\min}/(1+L_\Gamma^2)$ on V
([[lem-anchored-metric-graph-poincare]],
[[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F5] If V_h is a finite-dimensional real subspace of an evolution space V
continuously embedded in H, and the real form is measurable, bounded and
coercive on V_h, then the finite-dimensional parabolic Galerkin ODE has a
unique H1-in-time solution and the displayed energy estimate
([[thm-parabolic-finite-dimensional-measurable-ode]]).

[F6] The edge-product Cauchy–Schwarz inequality controls the diffusion form
and its load pairing
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F7] An evolution triple is a real Hilbert space V continuously and densely
embedded in a real Hilbert space H, with V* its continuous real dual
([[def-parabolic-evolution-triple-and-energy-space]]).

[F8] The conforming graph P1 space consists of functions in $V_D$ affine on
each cell of the specified finite edge mesh
([[def-metric-graph-p1-edge-mesh]]).

[A1] The graph traces and H1 space inherit the Axiom of Choice from the
one-dimensional representative theorem
([[def-axiom-of-choice]]).

[A2] Countable Choice is assumed by the edge L2 Hilbert and smooth-density
suppliers ([[def-countable-choice]]).

## Proof

**Proof technique:** finite-dimensional parabolic Galerkin ODE.

**Given:** Full AC and Countable Choice, the anchored edge graph, the finite
P1 space, the diffusion form, the dual load, and the initial value.

1.1 The canonical inclusion $i:V_D\to H$ is continuous because
$\|v\|_H\le\|v\|_{V_D}$. It is injective because $V_D$ consists of Sobolev
classes included in the edge-product $L^2$ classes. To prove density, fix
$g=(g_e)\in H$ and $\epsilon>0$. By [F2] and finite choice, choose for each
of the finitely many edges a $\phi_e\in C_c^\infty(0,\ell_e)$ with
$\|g_e-\phi_e\|_{L^2(e)}<\epsilon/\sqrt{|E|}$. The edge-product function
$\phi=(\phi_e)$ has zero endpoint traces, hence belongs to $V_D$, and
$\|g-\phi\|_H^2=\sum_e\|g_e-\phi_e\|_{L^2(e)}^2<\epsilon^2$. Thus the range
of i is dense in H. [F2, F3, A2, given, choose, algebra]

1.2 By [F1] and [F3], H and V_D are real Hilbert spaces with dense
continuous inclusion. With V_D^* as its continuous real dual, these spaces
form the evolution triple of
[[def-parabolic-evolution-triple-and-energy-space]]. The mesh has finitely
many cells, and a P1 function is determined by its finite list of nodal
values; the vertex matching and anchor conditions are linear. Therefore
V_h is a finite-dimensional subspace of V_D by [F8]. [A1, F1, F2, F3, F7, F8, given, construct]

2.1 By [F4] and [F6], the form a is bounded by M=κmax and coercive by α on V_D, hence
also on V_h. The restriction F_h(t):=f(t)|_{V_h} is a bounded functional
and its norm is at most \|f(t)\|_{V^*}; restriction is a continuous linear
map from V_D^* to V_h^*, so F_h is strongly measurable and square-integrable.
Thus all hypotheses of [F5] hold for the evolution triple and finite P1
subspace of step 1.2. [F4, F5, F6, step 1.2, given]

3.1 Applying [F5] gives the unique semidiscrete solution and its energy
estimate for every t in [0,T]. No spatial approximation rate is part of
[F5], so none follows here. [F5, step 2.1, given] ∎


