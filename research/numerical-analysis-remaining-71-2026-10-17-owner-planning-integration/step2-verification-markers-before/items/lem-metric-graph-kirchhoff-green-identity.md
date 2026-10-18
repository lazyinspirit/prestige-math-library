---
id: lem-metric-graph-kirchhoff-green-identity
kind: lemma
title: "Green identity and Kirchhoff flux cancellation on a metric graph"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-anchored-finite-metric-graph-h1-space
  - def-sobolev-space-wkp-and-its-norm
  - cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-algebra-of-derivatives
  - def-axiom-of-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "The Axiom of Choice is inherited through the one-dimensional Sobolev representative theorem used for endpoint values."
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

Assume the Axiom of Choice. Orient each edge coordinate from $0$ at
$\partial_-e$ to $\ell_e$ at $\partial_+e$. For endpoint incidences
$(e,-)$ and $(e,+)$ define the outward derivatives by
$\partial_{\nu_{(e,-)}}u_e=-u'_e(0)$ and
$\partial_{\nu_{(e,+)}}u_e=+u'_e(\ell_e)$. The two incidences are both
included at a loop vertex. For $\iota=(e,\pm)$ write $e(\iota)=e$.
If $u_e\in H^2(0,\ell_e)$, with $H^2$ as defined by
[[def-sobolev-space-wkp-and-its-norm]],
$v\in V_D$, and each edge has a constant diffusivity $\kappa_e>0$, then

$$\sum_{e\in E}\kappa_e\int_0^{\ell_e}u'_ev'_e\,dx_e =-\sum_{e\in E}\kappa_e\int_0^{\ell_e}u''_ev_e\,dx_e +\sum_{z\in V}v(z)\sum_{\iota\in\mathcal I(z)}\kappa_{e(\iota)}\partial_{\nu_\iota}u_{e(\iota)}(z).$$

Thus zero test traces remove anchored endpoint terms, and a Kirchhoff
condition
$\sum_{\iota\in\mathcal I(z)}\kappa_{e(\iota)}\partial_{\nu_\iota}u_{e(\iota)}(z)=0$ at each free vertex
cancels the remaining terms.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite metric graph, edge diffusivities $\kappa_e>0$,
edgewise $u_e\in H^2(0,\ell_e)$, and a trace-matching test function $v\in V_D$.

[F1] Functions in $H^1$ on a finite interval have absolutely continuous
representatives extending to both endpoints, with derivative equal almost
everywhere to the weak derivative; the two endpoint incidences of a loop
are still distinct before trace matching
([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]).

[F2] An absolutely continuous function equals its initial value plus the
integral of its almost-everywhere derivative
([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]).

[F3] At points where the two factors are differentiable, the derivative of
their product is the sum of the two ordinary product-rule terms
([[thm-algebra-of-derivatives]]).

[F4] Membership in $H^2(0,\ell_e)$ means $u_e,u'_e\in H^1(0,\ell_e)$ and
$u''_e$ is the second weak derivative
([[def-sobolev-space-wkp-and-its-norm]]).

[A1] The representative theorem in [F1] assumes the Axiom of Choice
([[def-axiom-of-choice]]).

## Proof

**Given:** The oriented intervals, outward derivative convention, edge
diffusivities, and edge functions specified in the Statement.

1.1 If $E=\varnothing$, both sides are empty sums and the identity is $0=0$. Otherwise fix an edge $e$. By [F1] and [F4], $u'_e$ and $v_e$ have absolutely continuous representatives on $[0,\ell_e]$. They are bounded there. The product $u'_ev_e$ is absolutely continuous: for any disjoint intervals $[a_j,b_j]$, $$\sum_j|u'_e(b_j)v_e(b_j)-u'_e(a_j)v_e(a_j)| \le \|u'_e\|_\infty\sum_j|v_e(b_j)-v_e(a_j)| +\|v_e\|_\infty\sum_j|u'_e(b_j)-u'_e(a_j)|,$$ so the defining absolute-continuity condition follows from that of the two factors. At almost every point both derivatives exist, and [F3] gives $(u'_ev_e)'=u''_ev_e+u'_ev'_e$. These two terms are integrable by Cauchy–Schwarz. Applying [F2] to the product therefore yields $$\int_0^{\ell_e}u'_ev'_e\,dx_e =-\int_0^{\ell_e}u''_ev_e\,dx_e +u'_e(\ell_e)v_e(\ell_e)-u'_e(0)v_e(0).$$ The endpoint terms are the head and tail outward derivatives paired with their traces. [A1, F1, F2, F3, F4, given, algebra]

2.1 Multiply the identity of step 1.1 by $\kappa_e$ and sum over the finite edge set. At each vertex, all endpoint-incidence values of $v$ equal the common trace $v(z)$ by definition of $V_D$; this includes both incidences of a loop. Regrouping the finite endpoint sum by vertices gives the displayed identity. If $z\in D$, then $v(z)=0$; if $z\notin D$, the stated Kirchhoff sum is zero. Hence the boundary contribution vanishes under those conditions. [step 1.1, given, algebra] ∎

