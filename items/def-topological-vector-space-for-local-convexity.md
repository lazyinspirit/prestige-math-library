---
id: "def-topological-vector-space-for-local-convexity"
kind: "definition"
title: "Topological vector spaces over the real and complex fields"
status: published
origin: "pipeline"
deps: ["def-vector-space", "def-topological-space", "def-product-topology", "def-continuous-map-top", "def-neighbourhood-top", "def-hausdorff-space", "lem-real-line-is-a-metric-space", "def-complex-metric-convergence-and-continuity", "def-metric-topology", "thm-metric-open-set-algebra", "lem-finite-choice"]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis (17 November 2017)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo B\u00fchler and Dietmar Salamon, Functional Analysis (8 June 2017)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
pipeline_run: "phase-2-next-20"
---

## Definition

Fix $\mathbb K=\mathbb R$ or $\mathbb C$, with metric $d(s,t)=|s-t|$ from [[lem-real-line-is-a-metric-space]] or [[def-complex-metric-convergence-and-continuity]] and topology [[def-metric-topology]]. The topology axioms follow from [[thm-metric-open-set-algebra]]. Its finite-intersection argument selects radii from finitely many nonempty admissible-radius sets by [[lem-finite-choice]], then takes their positive minimum. No AC is assumed.

A **topological vector space** (TVS) is a $\mathbb K$-vector space $X$ ([[def-vector-space]]) with a topology ([[def-topological-space]]) for which addition $(x,y)\mapsto x+y$ on $X\times X$ and scalar multiplication $(a,x)\mapsto ax$ on $\mathbb K\times X$ are jointly continuous ([[def-continuous-map-top]]). Both domains have [[def-product-topology]].

A **zero-neighborhood** contains an open set containing $0$ ([[def-neighbourhood-top]]); it need not be open. A **Hausdorff TVS** additionally has disjoint open neighborhoods for distinct points ([[def-hausdorff-space]]). Hausdorffness is a separate hypothesis.

The zero vector space with its unique topology is allowed. A vector space is nonempty because it contains its specified zero. No norm, metric on $X$, local convexity or choice assumption is included.
