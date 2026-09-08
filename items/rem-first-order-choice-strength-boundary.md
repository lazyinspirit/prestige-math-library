---
id: rem-first-order-choice-strength-boundary
kind: remark
title: "Choice ledger and arbitrary-language boundary"
status: published
origin: pipeline
deps: [thm-countable-first-order-completeness, thm-countable-first-order-compactness, thm-downward-lowenheim-skolem-with-parameters, thm-upward-lowenheim-skolem-with-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Remark 1J.6 p46 compared with the complete constructions of Lemmas 1I.4–1I.5 pp40–43."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
---

## Choice boundary

The proofs of [[thm-countable-first-order-completeness]] and [[thm-countable-first-order-compactness]] are in classical ZF for a language supplied with an injection into $\omega$. Their decisions are definable tests of consistency, not computable tests; minimum syntax codes avoid any countable choice of enumerations or representatives.

The general size bounds in [[thm-downward-lowenheim-skolem-with-parameters]] and [[thm-upward-lowenheim-skolem-with-choice]] explicitly assume AC. Arbitrary witness hulls use a well-order to choose witnesses, and the stated general-language Henkin theorem retains its choice hypothesis. This records the assumptions actually used, without claiming their optimality.

Arbitrary-language compactness over ZF and its Boolean-prime-ideal comparison are assigned to the later Boolean-algebras/Stone-duality page. No version of that comparison is asserted or used as a prerequisite here. In particular no result from the recorded Set Theory Beyond Choice catalogue supplies the present proofs.
