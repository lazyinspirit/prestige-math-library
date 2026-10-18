---
id: lem-anchored-metric-graph-h1-space-is-hilbert
kind: lemma
title: "The anchored metric graph H1 space is a closed Hilbert subspace"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-anchored-finite-metric-graph-h1-space
  - cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives
  - lem-one-dimensional-sobolev-endpoint-estimate
  - lem-w-one-two-is-a-hilbert-space
  - def-axiom-of-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "The Axiom of Choice is inherited from the one-dimensional H1 Hilbert
  and representative theorems used on each bounded edge."
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

Assume the Axiom of Choice. For a finite metric graph and anchor set $D$, the trace-matching space and
the anchored space $V_D$ of
[[def-anchored-finite-metric-graph-h1-space]] are closed real Hilbert
subspaces of $\bigoplus_{e\in E}H^1(0,\ell_e;\mathbb R)$ with the
edge-product $H^1$ inner product.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite metric graph as defined in
[[def-anchored-finite-metric-graph-h1-space]] with $\ell_e>0$,
an anchor set $D\subseteq V$, and the edge-product space in
[[def-anchored-finite-metric-graph-h1-space]].

[F1] Each real $H^1(0,\ell_e)=W^{1,2}(0,\ell_e)$ is a Hilbert space for
$\int_0^{\ell_e}(uv+u'v')$ under the Axiom of Choice
([[lem-w-one-two-is-a-hilbert-space]], [[def-axiom-of-choice]]).

[F2] For each edge $e$, every $w_e\in H^1(0,\ell_e)$, and every
$0<\epsilon<\ell_e$, the one-dimensional endpoint estimate at $p=2$ gives

$$|w_e(0)|^2\le2\left(\epsilon^{-1}\int_0^\epsilon|w_e|^2\,dx_e+ \epsilon\int_0^\epsilon|w'_e|^2\,dx_e\right),$$

and the corresponding estimate at $\ell_e$ uses the interval
$(\ell_e-\epsilon,\ell_e)$. Bounding each localized integral by its
full-edge integral yields

$$|w_e(0)|^2\le2\left(\epsilon^{-1}\|w_e\|_{L^2(0,\ell_e)}^2+ \epsilon\|w'_e\|_{L^2(0,\ell_e)}^2\right),$$

with the same full-edge bound at $\ell_e$
([[lem-one-dimensional-sobolev-endpoint-estimate]]).

[A1] Endpoint traces use the unique absolutely continuous representative
supplied under the Axiom of Choice
([[def-axiom-of-choice]],
[[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]).

## Proof

**Given:** The finite edge set, positive edge lengths, the product norm, the
trace-matching conditions, and the zero anchor traces.

1.1 The product is a Hilbert space: if a sequence is Cauchy in the finite sum-of-squares norm, each edge coordinate is Cauchy in its $H^1$ norm and converges by [F1]; the finitely many coordinate limits form an element of the product and the sum of the finitely many squared errors tends to zero. The product inner product is the sum of the edge inner products. [F1, given]


1.2 For each edge $e$, choose $\epsilon_e=\ell_e/2$, which satisfies the hypothesis of [F2]. For either endpoint, [F2] then gives  $$\max\{|w_e(0)|^2,|w_e(\ell_e)|^2\}\le\frac{4}{\ell_e}\|w_e\|_{L^2(0,\ell_e)}^2+\ell_e\|w'_e\|_{L^2(0,\ell_e)}^2\le C_e\|w_e\|_{H^1(0,\ell_e)}^2,$$  where $C_e:=\max\{4/\ell_e,\ell_e\}<\infty$. Thus each endpoint evaluation is a bounded linear functional on its edge $H^1$ space. For every vertex, the difference of two incident endpoint evaluations is therefore continuous; its kernel is closed. Each anchor endpoint evaluation is also continuous and its zero set is closed. There are finitely many vertices, incidences, and anchors, so the intersection of these kernels, namely the trace-matching space and then $V_D$, is closed in the product. [A1, F2, given, algebra, choose]


2.1 A Cauchy sequence in either constrained space converges in the product by step 1.1. Continuity of every endpoint functional from step 1.2 passes all matching equalities and zero anchor values to the limit, so the limit remains in the same constrained space. The restricted edge-product inner product is positive definite and complete there. Hence both constrained spaces are Hilbert. [step 1.1, step 1.2, given] ∎

