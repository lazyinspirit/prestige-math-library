---
id: rem-function-field-class-field-existence-proof-gate
kind: remark
title: "Proof gate for global function-field class-field existence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps:
  - thm-function-field-first-norm-index-inequality
  - thm-global-function-field-artin-reciprocity-and-norm-index
  - thm-global-function-field-infinitely-many-nonsplit-primes
  - thm-function-field-second-norm-index-inequality
  - thm-global-function-field-class-field-existence
justified_by: []
proof_strategy: source-audit
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, Appendix A.7–A.13"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
    - title: "Romyar Yoon, Global Function Field Class Field Theory: A Neukirch Approach, §§3.3–3.4"
      url: "https://arxiv.org/pdf/1610.07486"
    - title: "J. S. Milne, Class Field Theory, Chapter VII §9"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
verification: {}
---

## Remark

The first norm-index inequality, local unit Herbrand calculation and canonical
local reciprocity are proved at their stated choice scopes. The finite-constant
function-field Brauer–Hasse row, full idelic class formation, actual global
Artin map and second norm-index theorem are also proved. Full function-field
open-subgroup norm realization, uniqueness and the inclusion-reversing lattice
correspondence now follow from the locally reconstructed rigidified-Picard
and Lang-cover norm-cofinality argument, at the original AC, Countable Choice
and DC scope. The historical source omissions below describe limits of those
source routes; they are not remaining gaps in these completed local proofs.
This status record does not assert any independent Iwasawa, global Langlands,
finite-S duality, number-field, real-place, Lubin–Tate or Wang theorem.

## Remark references

[[thm-function-field-first-norm-index-inequality]]

[[thm-global-function-field-artin-reciprocity-and-norm-index]]

[[lem-global-idele-class-module-invariants-at-finite-level]]

[[thm-function-field-second-norm-index-inequality]]

[[thm-global-function-field-class-field-existence]]

[Milne, *Arithmetic Duality Theorems*, Appendix A.7–A.13](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Yoon, *Global Function Field Class Field Theory: A Neukirch Approach*, §§3.3–3.4](https://arxiv.org/pdf/1610.07486)

[Milne, *Class Field Theory*, Chapter VII §9](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** The current locally reconstructed function-field proofs and the
historical source-scope observations recorded below.

[F1] Milne's Appendix A.7–A.13 supplies global Brauer and reciprocity
arguments but does not establish the open-subgroup existence criterion.
([Milne, *Arithmetic Duality Theorems*, Appendix A.7–A.13](https://www.jmilne.org/math/Books/ADTnot.pdf))

[F2] Yoon's §3.3.1 cites an external proof for the nonsplit-place corollary;
§3.3.2 omits the prime-to-characteristic reduction and cites Artin §13 for
the residue-duality proposition; §3.4 invokes the class-field existence
criterion without proving its open-subgroup realization.
([Yoon, *Global Function Field Class Field Theory: A Neukirch Approach*, §§3.3–3.4](https://arxiv.org/pdf/1610.07486))

[F3] Milne's Chapter VII §9 is a number-field argument and invokes a
norm-limitation theorem deferred to the next chapter; it is not a complete
function-field existence proof.
([Milne, *Class Field Theory*, Chapter VII §9](https://www.jmilne.org/math/CourseNotes/CFT.pdf))

[F4] The first norm-index inequality is now proved using the completed local
unit Herbrand quotient, the degree sequence and idelic Galois descent; its
argument does not require global reciprocity or a global idelic $H^3$ theorem. ([[thm-function-field-first-norm-index-inequality]])

[F5] The actual global Artin item now proves its finite local-product map,
principal-idèle vanishing, continuity, surjectivity and actual norm kernel at
its original AC, Countable Choice and DC scope.
([[thm-global-function-field-artin-reciprocity-and-norm-index]])

[F6] The nonsplit-place argument uses the first norm-index and local Artin
inputs, which are now supplied; no new whole-item acceptance of its global
argument is asserted by this status Remark. ([[thm-global-function-field-infinitely-many-nonsplit-primes]])

[F7] The second norm-index theorem now has a complete proof under AC and DC,
using the completed function-field formation and untensored Tate–Nakayama
with the explicit group-norm/idelic-norm dictionary. The historical omissions
in [F2] are not remaining proof obligations for this item.
([[thm-function-field-second-norm-index-inequality]])

[F8] The full class-field existence item now proves physical open-subgroup
norm realization, uniqueness, converse openness and the inclusion-reversing
bijection at its original AC, Countable Choice and DC scope, through the
actual rigidified-Picard/Lang norm-cofinality and finite Artin quotient proof.
([[thm-global-function-field-class-field-existence]])

## Proof

**Given:** The evidence and source passages in the Statement and Facts.

1.1 The historical source observations [F1]–[F3] record limits of those proof routes. The locally reconstructed proofs in [F4], [F5], [F7] and [F8] now supply the indicated function-field statements; their completion does not repair the omissions in the cited texts. The separate nonsplit-place qualification in [F6] is retained. [F1, F2, F3, F4, F5, F6, F7, F8]

2.1 The Remark records the completed local function-field inputs in [F4], [F5], [F7] and [F8], retains the distinct qualification [F6], and preserves the full mathematical statements of their consumers. It makes no further mathematical conclusion or whole-consumer acceptance claim. [F4, F5, F6, F7, F8, step 1.1] ∎
