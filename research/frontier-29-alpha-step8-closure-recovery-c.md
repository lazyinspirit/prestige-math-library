# Frontier 29 — Step 8 closure recovery, group c, rejudge round 1

## Summary

Read all 94 items and all six page files assigned to batches 4, 6, and 7, then
checked the four exact live rejection tuples against the current items and the
dependencies needed to decide them. Appended four exact adjudications: one
`confirmed_fatal` and three `confirmed_nonfatal`. The fatal item was repaired
and linked to one new defect-ledger row. There were no cross-group findings or
incoming alerts.

No web lookup was needed. The disputed points were resolved from the current
library interfaces and elementary derivations. In particular,
`thm-lebesgue-measure-under-dilations-and-reflections` supplies origin dilation
only, while
`thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`
supplies the missing translation step for centered-ball volumes;
`def-family-shrinking-nicely-to-a-point` permits general Lebesgue-measurable
sets, whereas the measure-differentiation item assumes only a Borel measure.

## Rows handled

| item | context_sha256 | outcome | basis |
|---|---|---|---|
| `cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one` | `44e135c6827309a129b632f93be092830abd6390eb33d86570ccc56ea855e534` | `confirmed_nonfatal` | The ball-volume equality in step 2.1 also needs translation invariance. That equality follows immediately by translating the centered ball to the origin and then applying the cited dilation law, so this is a local citation gap and the counterexample remains correct. |
| `ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set` | `af9a6aafe6dd4d5fe6added31b8e98ac2c674370673b581283f5b261239b706f` | `confirmed_nonfatal` | Merely being zero-one-valued would not prove measurability, but here the displayed formula makes the one-set explicitly a countable union of open intervals. Its indicator is therefore Borel measurable, an immediate proof-step bridge. |
| `thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n` | `6afa7c56709af40f083454f259cdd641657a3272482186f7d2fb9714bef4bec8` | `confirmed_fatal` (`logic`) | The general-family clause quantified over Lebesgue-measurable sets, on which the Borel measures `nu` and `nu_s` need not be defined. The displayed ratios were therefore ill-typed as written. |
| `thm-vitali-covering-lemma-for-balls-with-fivefold-dilates` | `20a74aa2b2aa2abd907256c819439d3c3d3eda2fe736a7ea9f3eff1a447d6153` | `confirmed_nonfatal` | The identity `lambda(5B)=5^n lambda(B)` additionally uses translation invariance because `5B(x,r)` is centered at `x`, not `5x`. Translating to the origin and applying dilation closes the proof immediately; the covering and measure conclusions are correct. |

Each adjudication records the pre-edit guard hash. The fatal row uses
`defect_type: logic`; the nonfatal rows license no content, contract, impact,
or judge changes.

## Licensed repair and defect record

Only
`thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n` was
edited. Its general-family statement now explicitly takes a family of Borel
sets shrinking nicely to the point and displays the corresponding limit. Proof
steps 1.1 and 5.1 use the same Borel restriction. This preserves the ball case
and makes every occurrence of `nu(E_r)` and `nu_s(E_r)` defined.

The matching defect row is `frontier-29-S8R1-c-001`, appended from
`research/frontier-29-alpha-c-step8-rejudge-round-1-ledger-rows.json` with the
exact rejection reference and pre-edit guard hash
`5b02072d7ee538ede9484b0ab0b66d891feb991691df7f9da3e0951f14230fcf`.

## Rejudge target

The sole group-c rejudge target is
`thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n`. The
three nonfatal items were not changed.

## Checks

- Focused precheck on the repaired theorem: pass, one checked and zero failing.
- Focused rendercheck on the repaired theorem: pass, including YAML, delimiters,
  wikilinks, and KaTeX.
- Repository dependency check: pass; 375 existing warnings were reported.
- Frontier-29 defect-ledger validation: 479 rows checked, zero errors. The
  unscoped historical-ledger validation still reports pre-existing legacy enum
  errors outside this run.
- Step-8 scope check: pass; seven groups, 755 partitioned items, 34 remaining
  rejection rows routed to other groups, and zero cross-group alerts.
- Step-8 fatal-only guard: pass; all 126 changes since `pre-step8` are licensed.
- Exact-row audit: all four assigned tuples occur once with their expected
  outcomes; `frontier-29-S8R1-c-001` occurs once in the defect ledger.
- `git diff --check` on the touched item and ledgers: pass.

## Cross-group alerts and blockers

No cross-group alert was emitted. Group c has no missing exact adjudication,
unlicensed edit, stale local record, or other blocker. The engine owns the
remaining routed rows, targeted rejudgment, gates, and stage transitions.
