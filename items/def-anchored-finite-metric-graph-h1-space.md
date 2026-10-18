---
id: def-anchored-finite-metric-graph-h1-space
kind: definition
title: "Anchored finite metric graph and its H1 energy space"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-sobolev-space-wkp-and-its-norm
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives
  - lem-one-dimensional-sobolev-endpoint-estimate
  - def-axiom-of-choice
justified_by: []
aliases: []
landmark: false
axiom_use: "The Axiom of Choice is used through the published one-dimensional W^{1,2} representative theorem to define unambiguous endpoint traces."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Mario Arioli and Michele Benzi, A Finite Element Method for Quantum Graphs, Emory CS Technical Report TR-2015-009 (44-page full text)"
      url: "https://www.cs.emory.edu/technical-reports/techrep-00275.pdf"
      locator: "Complete 44-page report; §2, §4, §7.2, printed/PDF pp. 3–14 and 22–23."
    - title: "Peter Kuchment, Quantum graphs: an introduction and a brief survey, arXiv:0802.3442 (2008)"
      url: "https://arxiv.org/pdf/0802.3442"
      locator: "Complete 39-page full text; §2 Graphs and metric graphs (printed pp. 2–3), §4 Vertex conditions and §4.1 Quadratic form (printed pp. 5–9)."
---

## Definition

Assume the Axiom of Choice as required by the cited one-dimensional
representative interface. A **finite metric graph**
$\Gamma=(V,E,\partial_-,\partial_+,\ell)$ consists of finite vertex and
edge sets $V,E$, endpoint maps $\partial_-,\partial_+:E\to V$, and edge
lengths $0<\ell_e<\infty$. Distinct edges with the same endpoints are
allowed, as are loop edges with $\partial_-e=\partial_+e$. Every vertex is
an endpoint of at least one edge. The two endpoint incidences $(e,-)$ and
$(e,+)$ remain distinct even for a loop. A graph path is a finite sequence
$z_0,e_1,z_1,\ldots,e_n,z_n$ with $n\ge0$ and
$\{\partial_-e_j,\partial_+e_j\}=
\{z_{j-1},z_j\}$ for every $j$; a loop permits $z_{j-1}=z_j$. Vertices in
the same connected edge component are those joined by such a path. Orient
each edge only to choose its coordinate $x_e\in[0,\ell_e]$, with $0$ at
$\partial_-e$ and $\ell_e$ at $\partial_+e$. For $z\in V$, let
$\mathcal I(z):=\{(e,-):\partial_-e=z\}\cup\{(e,+):\partial_+e=z\}$
be its finite set of endpoint incidences.
The edge-product spaces are

$$H:=\bigoplus_{e\in E}L^2(0,\ell_e;\mathbb R),\qquad \mathcal W:=\bigoplus_{e\in E}H^1(0,\ell_e;\mathbb R).$$

For $w_e\in H^1(0,\ell_e)$, its endpoint values mean the values of the unique
absolutely continuous representative supplied by
[[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]].
The **trace-matching graph Sobolev space** is the subspace of $\mathcal W$
whose endpoint-incidence traces all agree at each vertex. For a designated
anchor set $D\subseteq V$, define the **anchored graph energy space**

$$V_D:=\{w\in\mathcal W:\ w_{\iota}=w_{\iota'}\text{ whenever }\iota,\iota'\in\mathcal I(v),\quad w_{\iota}=0\text{ for each }v\in D,\ \iota\in\mathcal I(v)\}.$$

We equip $H$ with the edge-sum $L^2$ inner product and $V_D$ with

$$\|w\|_{V_D}^2=\sum_{e\in E}\int_0^{\ell_e}(|w_e|^2+|w'_e|^2)\,dx_e.$$

No Kirchhoff derivative condition is built into $V_D$; that condition is a
natural boundary condition of the later weak diffusion form. The elliptic
and P1 error results below assume that $D$ meets every connected edge
component.

