---
id: rem-choice-strength-of-hahn-banach
kind: remark
title: "The set-theoretic cost of Hahn-Banach"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-hahn-banach-dominated-extension, rem-halpern-levy-bpi-not-ac]
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
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
---

## Remark

The proof of [[thm-hahn-banach-dominated-extension]] on this page is a Zorn
proof, so that proof route uses the Axiom of Choice through [[thm-zorn]]. That
is a proof cost, not the exact cost of the theorem itself.

The sharper ledger is recorded in [[rem-hahn-banach-choice-strength]]. For the
reader of this page, the key points are these:

- the Boolean prime ideal theorem implies Hahn-Banach;
- relative to the consistency of ZF, Hahn-Banach does not imply the Boolean
  prime ideal theorem, so Hahn-Banach is strictly weaker than full choice by
  [[rem-halpern-levy-bpi-not-ac]];
- Hahn-Banach already implies the existence of a non-Lebesgue measurable set
  and the Banach-Tarski paradox.

So later pages should cite Hahn-Banach itself when they use the extension
theorem, and should cite Zorn only when they really use this maximal-extension
implementation.
