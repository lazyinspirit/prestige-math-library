---
id: rem-choice-strength-of-hahn-banach
kind: remark
title: "The set-theoretic cost of Hahn-Banach"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-hahn-banach-dominated-extension, thm-zorn, def-axiom-of-choice]
justified_by: []
sources:
  scraped: []
  references:
    - title: "W. A. J. Luxemburg, Two applications of the method of construction by ultrapowers to analysis"
      url: "https://projecteuclid.org/journals/bulletin-of-the-american-mathematical-society-new-series/volume-68/issue-4/Two-applications-of-the-method-of-construction-by-ultrapowers-to/bams/1183524688.full"
    - title: "D. Pincus, The strength of the Hahn-Banach theorem"
      url: "https://doi.org/10.1007/BFb0066014"
    - title: "M. Foreman and F. Wehrung, The Hahn-Banach theorem implies the existence of a non-Lebesgue measurable set"
      url: "https://doi.org/10.4064/fm-138-1-13-19"
    - title: "J. Pawlikowski, The Hahn-Banach theorem implies the Banach-Tarski paradox"
      url: "https://doi.org/10.4064/fm-138-1-21-22"
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/rem-choice-strength-of-hahn-banach.json
---

## Remark

The proof of [[thm-hahn-banach-dominated-extension]] on this page is a Zorn
proof, so that proof route uses the Axiom of Choice through [[thm-zorn]]. That
is a proof cost, not the exact cost of the theorem itself.

This establishes AC ([[def-axiom-of-choice]]) as a sufficient hypothesis for
the extension theorem proved here. It establishes no converse implication or
strict comparison with another choice principle. The exact use of Zorn is to
select a maximal dominated extension; the one-step lemma then forces its domain
to be the whole vector space.

So later pages should cite Hahn-Banach itself when they use the extension
theorem, and should cite Zorn only when they really use this maximal-extension
implementation.
