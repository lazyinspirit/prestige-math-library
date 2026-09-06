# frontier-31a — group Alpha `b`, Step 3 scaffold recheck

This recheck covers batches `8`, `9`, and `10`. I reread the group scaffold
review, every assigned batch's `## Step-3 fix pass` note, the current manifests
and coverage harvests, the controlling HA-8 through HA-12 design sections, and
the current plan. Repeated B8-1/B10-1 pushback bullets in batch 9 are the same
two findings, not additional repairs.

## Dispositions

| Batch | Reported finding | Disposition | Current evidence |
| ---: | --- | --- | --- |
| 8 | B8-1: the Ext lemma and dimension-shift example depended on the foreign examples-page item `ex-a-projective-resolution-of-a-cyclic-abelian-group`. | Closed — applied repair is sufficient. | `lem-ext-one-of-z-mod-n-by-z-is-z-mod-n` now depends on balanced Ext, the projective-resolution computation corollary, and `thm-free-modules-are-projective-with-choice-boundary`; `ex-an-ext-dimension-shift` depends only on the A-side shifting theorem and that free-module theorem. Neither contains the foreign B-page item. This matches HA-8's two-term cyclic resolution and preserves the examples-page leaf boundary. |
| 9 | B8-1 pushback. | Closed — valid out-of-batch pushback. | The finding names only the two batch-8 records above; batch 9 neither uses nor redeclares either repair. Its two A pages retain their 41- and 32-item scaffold contracts. |
| 9 | B10-1 pushback. | Closed — valid out-of-batch pushback. | The double-complex and projective-dimension prerequisites belong only to the two batch-10 group-cohomology records. Adding them to a batch-9 record would not support a stated batch-9 claim. |
| 9 | Source-repair evidence: replace the unavailable Hilton–Stammbach snapshot with the direct complete second-edition PDF. | Closed — current coverage evidence is sufficient. | The UCT/Künneth coverage records the direct 375-page PDF, Chapter V §§1–4 locator, included Künneth and UCT rows, and the §4 applications boundary. The focused fetch check accepts all 10/10 source records; the repair leaves claims, IDs, dependencies, order, and dispositions unchanged. |
| 10 | B10-1: the bar-computation theorem omitted its finite-diagonal Hom-double-complex/assembly prerequisites, and the cohomological-dimension criterion omitted the Ext/projective-dimension criterion. | Closed — applied repair is sufficient. | `thm-the-bar-cochain-complex-computes-derived-group-cohomology` explicitly names the five double-complex/totalisation/assembly records and both Hom-exactness lemmas from batch 8; `thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing` explicitly names `thm-projective-dimension-at-most-n-iff-higher-ext-vanishes`. HA-12 specifies exactly this Ext characterization route. All are earlier A-side dependencies; no B item is load-bearing. |

No new backward edge, page-order change, source disposition change, or content
repair is needed. The retained mathematical boundaries are the finite-diagonal
totalisation in Ext/Tor balance, right--left tensor handedness, nonnatural UCT
and Künneth splittings, and the group-cohomology page's distinction between
induction and coinduction in Shapiro.

## Scope decisions and checks

`scope-decisions refresh --run frontier-31a --group b` found 58 current decline
rows and one newly pending row. I resolved the changed row for batch 9,
`Chapter V §4 Applications`, as `stands`: the controlling HA-11 disposition
assigns those topological applications out of scope after the included
Künneth/UCT forms, and they are not in this pair's prerequisite closure. The
subsequent `scope-decisions check --run frontier-31a --group b` reported 58
current declines and zero errors.

- `manifest-deps` passed for batches 8+10 (145 items) and batch 9 (88 items),
  with zero normalized entries and zero errors.
- `coverage-checklist --require-destination` passed for batches 8, 9, and 10:
  respectively 63, 71, and 75 harvested results; zero errors and warnings.
- `source-fetch-check` accepted the current source receipts: respectively 6/6,
  10/10, and 3/3 sources.
- `validate-plan.mjs research/plan-spec.json` passed: its declared reading order
  is acyclic, with no item-level cycle, forward reference, B-page dependency,
  or unresolved ID among itemized plan pages.

## Verdict record

I verified the current bytes of
`research/frontier-31a-alpha-b-step3-verdicts.json`
(`sha256:d0b75cd039a20b26cc3853d3c85b8a1a873d6cf67c19137837338878703f301a`):
it contains exactly the five assigned A pages — Ext/balanced resolutions,
Yoneda/homological dimension, Tor/flatness/global dimension, UCT/Künneth, and
group cohomology — and every record is `sufficient`. Those bytes already state
the verified outcome, so the verdict artifact is intentionally unchanged.
