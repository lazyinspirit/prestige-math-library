---
id: def-st-flat-bosonic-string-model
kind: definition
title: Flat Bosonic String Model
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: physics
library: physics
deps: []
dependency_roles: {}
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Classical tensile bosonic Polyakov fields with flat Minkowski target and a nondegenerate auxiliary Lorentzian worldsheet metric, retaining the nondegenerate induced-metric immersion branch separately; excludes curved backgrounds, interactions, endpoint fields, and quantum path-integral claims."
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, University of Cambridge Part III lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§1.2–1.3, printed pp. 14–24: induced metric, flat tensile string action, and Polyakov formulation."
    - title: "Barton Zwiebach, A First Course in String Theory, second edition, Cambridge University Press, 2009"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/A_First_Course_In_String_Theory.pdf"
      locator: "§24.6, printed pp. 583–587: Minkowski target, induced metric, and the Polyakov worldsheet action."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix an integer $D\ge3$, target space $M=\mathbb R^D$, and Minkowski metric $\eta=\operatorname{diag}(-1,+1,\ldots,+1)$. A worldsheet is an oriented smooth two-dimensional manifold $\Sigma$, possibly with smooth boundary, equipped with an auxiliary Lorentzian metric $h$ of signature $(- ,+)$. A classical Polyakov field configuration consists of this auxiliary metric and a $C^2$ map $X:\Sigma\to M$, smooth to that order up to any boundary. Its induced symmetric bilinear form is $\gamma=X^*\eta$, with coordinate components $\gamma_{ab}=\eta_{\mu\nu}\partial_aX^\mu\partial_bX^\nu$. No rank or nondegeneracy condition on $dX$ or $\gamma$ is imposed on the general Polyakov field domain; $h$ remains nondegenerate independently. The nondegenerate Lorentzian immersion branch on a specified region is the additional requirement that $dX$ have rank two and $\gamma$ be nondegenerate Lorentzian there. Global injectivity is not assumed; an embedding, when required, is an additional hypothesis. On a closed-string cylinder use dimensionless coordinates $\tau\in\mathbb R$ and $\sigma\in\mathbb R/(2\pi\mathbb Z)$; on an open-string strip use $\tau\in\mathbb R$ and $\sigma\in[0,\pi]$. The target coordinates $X^\mu$ have length dimension. The flat model excludes target curvature, a $B$-field, a dilaton, endpoint gauge fields, sources, and string interactions; these are separate model data. The nondegenerate induced-metric branch excludes null or collapsed regions where that extra condition is imposed, and is the branch used for differentiable Nambu–Goto action equivalence. Open Polyakov fields may have degenerate induced metric at their endpoints. For this endpoint illustration, assume boundary-adapted conformal coordinates: $h_{ab}=e^{2\phi}\operatorname{diag}(-1,+1)$ for a smooth real function $\phi$, with the boundary at $\sigma=0,\pi$. All-Neumann data in these coordinates mean $\partial_\sigma X^\mu=0$ for every target component, so $dX$ has rank at most one there. If the metric constraints $\eta(\partial_\tau X,\partial_\sigma X)=0$ and $\eta(\partial_\tau X,\partial_\tau X)+\eta(\partial_\sigma X,\partial_\sigma X)=0$ are also imposed, then $\eta(\partial_\tau X,\partial_\tau X)=0$ and $\gamma$ vanishes at that endpoint. These endpoint degeneracies do not degenerate the independent auxiliary metric or exclude the field from the Polyakov domain. Neither dynamics nor boundary conditions are imposed merely by this kinematic definition.
