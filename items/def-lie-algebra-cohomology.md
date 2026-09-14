---
id: def-lie-algebra-cohomology
kind: definition
title: Lie algebra cohomology
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-the-chevalley-eilenberg-differential-squares-to-zero, def-cochain-complex-in-an-abelian-category, def-cohomology-object-of-a-cochain-complex]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Weibel, Lie Algebra Homology and Cohomology, Corollary 7.7.3"
      url: https://math.mit.edu/~hrm/palestine/weibel/07-lie_algebra_homology_and_cohomology.pdf
      locator: "§7.7, Corollary 7.7.3, printed p. 240"
---

## Definition

The **Lie algebra cohomology** of $\mathfrak g$ with coefficients in the
$\mathfrak g$-module $M$ is the cohomology of its Chevalley–Eilenberg
cochain complex:

$$H^n(\mathfrak g,M)=\frac{\ker(d:C^n\to C^{n+1})}{\operatorname{im}(d:C^{n-1}\to C^n)}.$$

The containment of the denominator in the numerator is supplied by
[[thm-the-chevalley-eilenberg-differential-squares-to-zero]]. For $n<0$ all
cochain groups, and hence all cohomology groups, are zero by convention. This
definition is valid without finite-dimensionality or a characteristic
restriction.
