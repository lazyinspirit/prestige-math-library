---
id: def-gts-good-cover-singular-cech-comparison-input
kind: definition
title: Good-cover Cech-to-singular comparison input
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 1
axiom_strength: ZF + full AC for the canonical comparison supplied by the cited lemma
deps:
  - def-axiom-of-choice
  - lem-gts-good-cover-integral-cech-singular-comparison
  - def-cech-cohomology-open-cover
  - def-singular-cohomology-with-coefficients
  - def-sheaf-cohomology-derived-global-sections
  - def-sheaf-on-topological-space
  - def-smooth-differential-k-form
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-gts-good-cover-integral-cech-singular-comparison: mathematical-premise
  def-cech-cohomology-open-cover: mathematical-premise
  def-singular-cohomology-with-coefficients: mathematical-premise
  def-sheaf-cohomology-derived-global-sections: mathematical-premise
  def-sheaf-on-topological-space: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: M. K. Murray, Bundle Gerbes, arXiv:dg-ga/9407015v1
      url: https://arxiv.org/pdf/dg-ga/9407015v1
      locator: Section 5, the Cech cocycle and Dixmier–Douady class, PDF pp. 9–10.
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.2, integral cohomology entry in the Deligne exact diagram, PDF pp. 36–39.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

For this page, a **good cover** of a finite-dimensional Hausdorff second-countable smooth manifold $M$ means an ordered locally finite open cover $\mathcal U=(U_i)_{i\in I}$ such that every nonempty finite intersection admits a smooth contraction to a point, together with a chosen locally finite smooth partition of unity subordinate to $\mathcal U$. A **good-cover Cech-to-singular comparison input** for $(M,\mathcal U)$ consists of natural isomorphisms
$$\check H^q(\mathcal U;\underline{\mathbb Z})\cong H^q_{\mathrm{sing}}(M;\mathbb Z)$$
for all $q\ge0$, compatible with cover refinements, restrictions to open subsets, and smooth pullbacks with compatible cover functions. Here $\underline{\mathbb Z}$ is the sheaf of locally constant integer-valued functions and the left side is fixed-cover Cech cohomology. For use in Deligne hypercohomology comparison, the supplied input also requires, on each nonempty finite intersection $U_J$, the explicit acyclicity conditions $H^q(U_J,\underline{\mathbb Z})=0$ and $H^q(U_J,\Omega^j)=0$ for every $q>0$ and every smooth-form degree $j\ge0$. These are hypotheses of that use; they are not inferred here from contractibility alone. The Cech-to-singular isomorphisms themselves are proved by [[lem-gts-good-cover-integral-cech-singular-comparison]].

## Definition references

[[def-cech-cohomology-open-cover]]

[[def-singular-cohomology-with-coefficients]]

## Remarks

The canonical maps and their existence for every stated good cover are proved in [[lem-gts-good-cover-integral-cech-singular-comparison]]. The proof uses integral small singular chains and the Cech–singular double complex, so torsion is retained. Its maps commute with refinements, open restrictions, smooth pullbacks and coefficient homomorphisms. This item still defines the supplied comparison data; the proof is in that separate lemma, with its explicit full-AC convention.
