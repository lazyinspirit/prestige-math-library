---
id: lem-anchored-metric-graph-poincare
kind: lemma
title: "Path Poincare inequality on an anchored finite metric graph"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-anchored-finite-metric-graph-h1-space
  - cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives
  - thm-holder-inequality-for-integrals
  - def-axiom-of-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "The Axiom of Choice is inherited through the one-dimensional representative theorem. For a fixed edge the proof uses one finite path at a time, so it makes no family of path choices."
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

Assume the Axiom of Choice and assume every connected edge component of the finite metric graph $\Gamma$
has at least one anchor in $D$. Put
$L_\Gamma=\sum_{e\in E}\ell_e$. Then every $w\in V_D$ satisfies

$$\|w\|_{L^2(\Gamma)}\le L_\Gamma \left(\sum_{e\in E}\|w'_e\|_{L^2(e)}^2\right)^{1/2}.$$

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite metric graph with positive edge lengths, total length
$L_\Gamma$, an anchor set meeting each connected component, and $w\in V_D$.

[F1] Each edge restriction has an absolutely continuous representative with
increment $w_e(y)-w_e(x)=\int_x^y w'_e$; all endpoint-incidence
representatives at a vertex have the common value prescribed by $V_D$
([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]],
[[def-anchored-finite-metric-graph-h1-space]]).

[F2] Cauchy–Schwarz gives
$|\int_S w'|^2\le |S|\int_S|w'|^2$ on any finite union $S$ of edge
segments ([[thm-holder-inequality-for-integrals]]).

[F3] Vertices in one connected edge component are joined by a finite graph
path, as defined in [[def-anchored-finite-metric-graph-h1-space]].

[A1] The one-dimensional representative interface assumes the Axiom of Choice
([[def-axiom-of-choice]]).

## Proof

**Given:** The finite anchored graph and the edgewise absolutely continuous
representatives of $w$.

1.1 If $E=\varnothing$, then $H=\{0\}$ and the inequality is $0\le0$.
Otherwise fix an edge $e$ in a component containing an anchor. If $e$ is a
loop, deleting its interior leaves the component connected because any path
that traverses the loop can omit that closed excursion. If its endpoints are
distinct, every original path that uses $e$ reaches one endpoint before
traversing it; after deleting $e$, vertices are therefore connected to one
of its two endpoints. Thus removing $e$ either leaves the component connected
or separates it into two components, one containing each endpoint. In the
connected case choose either endpoint; in the separated case choose the
endpoint in the component containing an anchor. By [F3] there is a finite
path from an anchor to that endpoint avoiding $e$. Deleting the portions
between repeated vertices gives a simple path, so no edge is traversed twice.
For a loop choose its tail incidence; otherwise use the incidence at the
chosen endpoint. For any $x$ on $e$, append the segment from that incidence
to $x$. The total length is at most $L_\Gamma$, and the common vertex traces
agree along the path by [F1].
Since $w=0$ at the anchor, [F1] and [F2] imply
$$|w_e(x)|^2\le L_\Gamma \sum_{a\text{ on the concatenated path}}\int_a|w'_a|^2 \le L_\Gamma\sum_{a\in E}\|w'_a\|_{L^2(a)}^2.$$
[A1, F1, F2, F3, given, choose]

1.2 Integrate the pointwise bound of step 1.1 over every edge and sum. The
total measure of the disjoint edge interiors is
$\sum_e\ell_e=L_\Gamma$, so
$$\|w\|_{L^2(\Gamma)}^2\le L_\Gamma^2\sum_{e\in E}\|w'_e\|_{L^2(e)}^2.$$
Taking nonnegative square roots proves the statement. [step 1.1, algebra] ∎
