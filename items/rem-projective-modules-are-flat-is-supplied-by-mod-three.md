---
id: rem-projective-modules-are-flat-is-supplied-by-mod-three
title: "The earlier flatness page is the commutative specialization; this page records the arbitrary-handed version used in balance"
kind: remark
status: published
origin: pipeline
deps: ["def-flat-and-faithfully-flat-modules-and-ring-maps", "thm-projective-modules-are-flat", "lem-projective-modules-are-flat-over-an-arbitrary-ring"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-06
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
---

## Definition

The earlier flatness result treats modules over a commutative ring, where the
two handedness conventions coincide.  The balance argument here instead needs
both statements: a projective right module makes $Q\otimes_R-$ exact, and a
projective left module makes $-\otimes_RP$ exact.  The preceding lemma records
that arbitrary-ring version; this remark adds no second proof of it.
