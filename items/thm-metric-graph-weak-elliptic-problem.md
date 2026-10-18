---
id: thm-metric-graph-weak-elliptic-problem
kind: theorem
title: "Well-posed weak elliptic diffusion on an anchored metric graph"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-anchored-finite-metric-graph-h1-space
  - lem-anchored-metric-graph-h1-space-is-hilbert
  - lem-anchored-metric-graph-poincare
  - lem-metric-graph-kirchhoff-green-identity
  - def-sobolev-space-wkp-and-its-norm
  - thm-cauchy-schwarz-in-an-inner-product-space
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - thm-lax-milgram
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-countable-choice
  - def-axiom-of-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "Full AC is inherited through graph-space traces; Countable Choice is
  used by Lax–Milgram and by the smooth-density interface used to identify the
  strong edge equation."
provenance:
  statement: literature-derived
  proof: ai-generated
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the Axiom of Choice and Countable Choice, $E\ne\varnothing$, and that the anchor set $D$ meets every connected
edge component of the finite metric graph $\Gamma$. Let constant edge
diffusivities satisfy
$$0<\kappa_{\min}\le\kappa_e\le\kappa_{\max}<\infty.$$
For every $f\in H=\bigoplus_{e\in E}L^2(0,\ell_e;\mathbb R)$ there is a unique
$u\in V_D$ such that

$$a(u,v):=\sum_{e\in E}\kappa_e\int_0^{\ell_e}u'_ev'_e\,dx_e=F(v):=\sum_{e\in E}\int_0^{\ell_e}f_ev_e\,dx_e\qquad(v\in V_D).$$

The equation is the anchored weak metric-graph diffusion problem. Whenever
$u_e\in H^2(0,\ell_e)$ as defined in
[[def-sobolev-space-wkp-and-its-norm]], the Green identity
[[lem-metric-graph-kirchhoff-green-identity]] identifies its interior
equation as $-\kappa_eu''_e=f_e$ and its natural free-vertex condition as
Kirchhoff balance of the outward diffusive fluxes.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice, a finite metric graph with nonempty edge set, anchor set meeting
every connected edge component, the spaces $H,V_D$, the edge diffusivities,
and the load $f$ in the Statement.

[F1] $V_D$ is a real Hilbert space with the edge-product $H^1$ inner product
([[lem-anchored-metric-graph-h1-space-is-hilbert]]).

[F2] With $L_\Gamma=\sum_e\ell_e$, every $v\in V_D$ satisfies
$\|v\|_H\le L_\Gamma\|v'\|_H$
([[lem-anchored-metric-graph-poincare]]).

[F3] A bounded coercive bilinear form on a real Hilbert space with a bounded
linear functional has a unique weak solution; the Lax–Milgram interface
assumes Countable Choice
([[thm-lax-milgram]], [[def-countable-choice]]).

[F4] The real form convention is the edgewise integral pairing in the
Statement, linear in both arguments
([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F5] Cauchy–Schwarz bounds the edge-product integral pairing by the product
of its two $L^2$ norms
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F6] For an edgewise H2 function, Green's identity groups the endpoint terms
as common vertex traces times the sum of outward diffusive fluxes
([[lem-metric-graph-kirchhoff-green-identity]]).

[A1] The edge traces and graph Hilbert structure inherit the Axiom of Choice
from the one-dimensional Sobolev representative theorem
([[def-axiom-of-choice]]).

[A2] Countable Choice is assumed by the Lax–Milgram and smooth-density
interfaces ([[def-countable-choice]]).

[F7] Under Countable Choice, smooth functions compactly supported in an
edge interior are dense in its $L^2$ space. Such functions belong to edge
$H^1$ and have zero endpoint traces, so their zero extensions to the other
edges lie in $V_D$
([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]],
[[def-sobolev-space-wkp-and-its-norm]],
[[def-anchored-finite-metric-graph-h1-space]], [[def-countable-choice]]).

## Proof

**Proof technique:** coercive variational method.

**Given:** The finite anchored metric graph, $\kappa_{\min},\kappa_{\max}$,
$f\in H$, and the real Hilbert space $V_D$.

1.1 The form $a$ is symmetric and bilinear. By Cauchy–Schwarz on the finite edge product, $$|a(w,v)|\le\kappa_{\max}\|w'\|_H\|v'\|_H\le\kappa_{\max}\|w\|_{V_D}\|v\|_{V_D}.$$ Thus it is bounded with constant $M=\kappa_{\max}$. [F1, F4, F5, given, algebra]

1.2 By [F2], $$\|v\|_{V_D}^2=\|v\|_H^2+\|v'\|_H^2\le(1+L_\Gamma^2)\|v'\|_H^2.$$ Consequently $$a(v,v)\ge\kappa_{\min}\|v'\|_H^2\ge\frac{\kappa_{\min}}{1+L_\Gamma^2}\|v\|_{V_D}^2.$$ The form is coercive with $\alpha=\kappa_{\min}/(1+L_\Gamma^2)>0$. [F2, F4, given, algebra]

1.3 The load $F(v)=\sum_e\int f_ev_e$ is linear and satisfies $$|F(v)|\le\|f\|_H\|v\|_H\le L_\Gamma\|f\|_H\|v'\|_H\le L_\Gamma\|f\|_H\|v\|_{V_D}$$ by [F5] and [F2]. Hence $F$ is bounded on $V_D$. [F2, F5, given, algebra]

2.1 Apply [F3] to the real Hilbert space [F1], the bounded coercive form from steps 1.1–1.2, and the bounded functional from step 1.3. It gives exactly one $u\in V_D$ satisfying $a(u,v)=F(v)$ for all $v\in V_D$. If this $u$ is edgewise H2, [F6] and the weak equation give, for every $v\in V_D$, $$\sum_e\int_0^{\ell_e}(-\kappa_eu''_e-f_e)v_e\,dx_e+\sum_{z\notin D}v(z)\sum_{\iota\in\mathcal I(z)}\kappa_{e(\iota)}\partial_{\nu_\iota}u_{e(\iota)}(z)=0.$$ [A1, A2, F1, F3, F6, step 1.1, step 1.2, step 1.3, given]

3.1 Fix an edge and take $v$ smooth with compact support in its interior and zero on every other edge. The vertex sum vanishes, so the integral of $-\kappa_eu''_e-f_e$ against every such test is zero. This residual is in $L^2(0,\ell_e)$; density from [F7] and continuity of the pairing by [F5] imply $-\kappa_eu''_e=f_e$ almost everywhere on that edge. Now fix a free vertex $z$. Prescribe endpoint-incidence value $1$ at every incidence at $z$ and $0$ at incidences at every other vertex, and interpolate linearly on each edge. Both incidences of a loop at $z$ receive value $1$, so this defines a trace-matching test function in $V_D$. Substitution in step 2.1 and the interior equation just proved leaves only the flux sum at $z$, so it is zero. This proves the stated natural Kirchhoff condition. [A2, F5, F6, F7, step 2.1, construct, algebra] ∎

