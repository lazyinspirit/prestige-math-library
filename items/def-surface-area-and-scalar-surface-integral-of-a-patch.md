---
id: def-surface-area-and-scalar-surface-integral-of-a-patch
kind: definition
title: 'Surface area and scalar surface integrals on a regular patch'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-admissible-regular-parametrized-surface-patch, def-first-fundamental-form-and-surface-area-density, thm-continuous-functions-on-compact-jordan-sets-are-integrable]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, formula 3.2.12'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
    - title: 'University of Toronto MAT237 notes, Section 5.3'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
pipeline_run: null
---

## Definition

Let $(D,\varphi)$ be a regular surface patch and let $q$ be a continuous real-valued function on $\varphi[D]$. For a continuous scalar field $q$ on the patch image, $\int_Sq\,dS:=\int_D(q\circ\varphi)J_\varphi$, and $\operatorname{Area}(S):=\int_DJ_\varphi$.

Here $S$ denotes the patch with its chosen parametrization. Both integrands are bounded and Riemann integrable on the compact Jordan region $D$ by continuity ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]). Boundary values are included in the parameter integral but may be changed on the content-zero boundary without changing its value.
