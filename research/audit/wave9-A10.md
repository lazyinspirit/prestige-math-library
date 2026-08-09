# Wave 9 — A10 rundown; owner pause cleared

Published-page retro-audit of dependency level 9. Wave 9 mathematical text is
frozen after A9. A0 through A10 are complete. The owner cleared the sole A10
pause on 2026-08-09 by instructing the orchestrator to conclude Waves 8, 9,
and 10. Wave 10's final independent certification removed the only former
shared-gate pending state.

Baseline: `6fb3b6c9d08752db2239a2e0794752f0f69107fc`.

**43 items, 34 proof-bearing items, 485 current relationships, one batch, two
pages, and one A/B pair.**

## 1. Gate status

| step | result |
|---|---|
| A4 | **clear** on final namespaced and merged contracts, provenance, source, render, and structural checks |
| A6 | **clear for Wave 9**: exact contracts, risk, manifest, 65-edge Wave 8 reconciliation, URL liveness, generated risk, spine, readers, and impact all pass |
| A8 | **clear (3/3)**: one fatal-licensed edit, one-interface/one-consumer impact closure, singleton paired rejudge, and exact-current coverage |
| A9 | **clear (2/2)**: every repaired item and both pages re-read; no claim decay and no edit |
| A10 | **clear (9/9)** on the final shared worktree |

Exact-current coverage is 43/43 items, 34/34 proof-bearing items, 485/485
relationships, two exact planned-to-actual dependency reconciliations, 59/59
spine attestations, and 5/5 required repaired-item judge pairs. Its two
warnings are the durable confirmed-nonfatal Terra dispositions; there is no
unadjudicated current fatal rejection. All nine A10 gates are green and `git
diff --check` passes.

## 2. Provenance census

All 43 items entered without component provenance and leave fully tagged; the
legacy `origin` field was preserved on every item.

| label | statement (before -> after) | proof (before -> after) |
|---|---:|---:|
| *(untagged)* | 43 -> **0** | 43 -> **0** |
| `literature-derived` | 0 -> **17** | 0 -> **0** |
| `ai-altered` | 0 -> **26** | 0 -> **22** |
| `ai-generated` | 0 -> **0** | 0 -> **12** |
| `not-applicable` | 0 -> **0** | 0 -> **9** |

Statement evidence is 17 `exact-source` and 26 `semantic-source`. There are no
`ai-generated` Statements, `established-knowledge` waivers, classification
escalations, or positive-novelty uncertainties. The exact adjudication is in
`wave9-provenance-adjudications.json`.

## 3. Generated-statement report

Wave 9 has **zero generated Statement seeds**. Its intersection with the
current generated-risk ledger is empty: zero scoped seed ids and zero scoped
logical/direct consumers of a generated seed. There is consequently no cone
size or disposition row to carry forward; the exact empty-intersection receipt
is `wave9-genrisk-review.json`.

## 4. Fatal-error and repair report

A4/A6 produced **five exact unique item targets** and one A-page repair. A8
then changed exactly one of those same five ids. The machine-exact A7 target
list and reasons are in `wave9-rejudge-targets.json`.

| defect type | location | item/page and disposition |
|---|---|---|
| invalid inference | refutation | `fs-additive-implies-linear`: replaced the invalid basis-vector multiplication argument with the Hamel coefficient map's rational-range/irrational-value contradiction |
| incorrect/missing dependency citation | Facts/deps | `thm-baire-one-continuity-points`: removed the unused circular oscillation Fact and its now-unused dependency; L9 and the direct proof already license the conclusion |
| incorrect/missing dependency citation | Facts/proof | `thm-semicontinuous-evt`: added the exact negation-duality Fact and cited it in the lower-semicontinuous final step |
| incorrect/missing dependency citation | definition citation | `def-oscillation`: A6 added `lem-of-triangle-inequality` for the displayed bounded-oscillation estimate |
| incorrect/missing dependency citation | Facts | `fs-additive-implies-linear`: removed its unused regularity Fact while retaining the dependency because Statement and Remarks still cite it |
| false/overstrong statement | definition prose | `def-oscillation`: qualified nonnegativity and bounded real-valued conclusions by nonempty-set/point oscillation and preserved `omega_f(emptyset)=-infinity` |
| false/overstrong statement | Remark | `thm-baire-one-continuity-points`: corrected where approximant continuity and pointwise convergence actually enter |
| false/overstrong statement | Remark | `thm-continuity-set-realisation`: removed the denial of boundedness and narrowed the monotonicity claim to what the construction guarantees |
| false/overstrong statement | page prose | `monotone-functions-and-discontinuities.md`: limited the supremum/infimum one-sided-limit formulas to nondecreasing functions and recorded the reversal for nonincreasing functions |
| false/overstrong statement | Statement | `thm-semicontinuous-evt`: A8 removed the false clause claiming the companion upper-semicontinuous example is not bounded below; retained only failure to attain the infimum |
| missing hypothesis/choice scope | — | none; the Hamel-basis refutation carries AC explicitly |
| invalid witness | — | none; the Hamel witness was valid after its inference was repaired |

At A8 Alpha adjudicated exactly three Terra rejection rows: one
`confirmed_fatal`, two `confirmed_nonfatal`, and zero false positives. **Only
`thm-semicontinuous-evt` changed.** Its final text was independently certified;
the sole consumer remained licensed; and only that item was rejudged. The two
local citation gaps in `thm-baire-one-continuity-points` and
`thm-continuity-set-realisation` remain append-only nonfatal debt under R1 and
were not repaired or rejudged. A9 found no claim decay and made no edit.

No item was deleted, renamed, or reordered.

## 5. Independent readers, impact, contracts, and sources

- Alpha recovered the durable record and read all 43 scoped items, both pages,
  109 distinct out-of-scope targets, all 59 proof-bearing top-100-spine items,
  and all 318 affected consumers; no surface was sampled.
- All 485 current edges were reconciled: 395 published-backward and 90
  same-batch. The Wave 9-to-frozen-Wave 8 barrier is exactly 65 edges from 29
  sources into 17 targets, all licensed.
- Terra exact-final certified all five material items and the repaired page at
  A6. The fatal A8 item received a separate exact-final certification before
  its verification stamp was restored.
- DeepSeek's final proof-refuter result is clean for all 34 proof-bearing
  items. All 12 routes affected by the A6 `def-oscillation` dependency change
  were refreshed; the one transport-null attempt was preserved and its
  append-only retry completed clean.
- Strict proof contracts pass 34/34. Risk routing is 31 critical and three
  high, all reviewed. The dependency spine passes 59/59.
- The post-A6 interface projection covers 43 changed interfaces and 318
  consumers, all licensed. The material-item union is 270 consumers. The A8
  receipt separately covers one changed interface and one unchanged licensed
  consumer.
- All 40 distinct source URLs are live; there is no failed-source disposition.

## 6. Judge comparison

The append-only ledger has 12 calls: DeepSeek V4 Pro 6/6 pass; GPT 5.6 Terra
three pass and three reject. The extra call in each lane is the exact singleton
A8 targeted rejudge.

On the final usable text of the exact five repaired targets:

| outcome | items |
|---|---:|
| both pass | 3 |
| both reject | 0 |
| DeepSeek-only reject | 0 |
| Terra-only reject | 2 |
| incomplete/null | 0 |

The two current Terra-only rejections are exactly the confirmed-nonfatal rows.
The historical Terra rejection of `thm-semicontinuous-evt` is the sole
owner-confirmed fatal detection; the repaired final text passes both lanes.
Detection by lane: DeepSeek zero rejection candidates and zero fatal
detections; Terra three adjudicated candidates, one fatal and two nonfatal.
There are no nulls, false positives, unadjudicated rejections, or mismatched
latest contexts.

## 7. Personal-audit and scope record

The orchestrator personally re-read all three A7-rejected items and traced
their exact defects and ramifications. A9 then re-read all five repaired items
and both pages in full. The record is one repaired fatal Statement defect and
two intentionally unrepaired nonfatal citation omissions. A9 made no mutation
and no judge call.

Audit-Beta, Alpha, and independent readers ran as GPT 5.6 Sol at `xhigh` with
a 1,000,000-token context. Terra used the same `xhigh`/1,000,000-token
settings. DeepSeek V4 Pro used API `max`; the earlier health check passed HTTP
200 using the companion `.env` key without exposing it.

## 8. Owner queue and closure condition

Wave 9 proposes **no deletion, id rename/removal, or structural reading-order
change**. The overlong A-page summary and the two adjudicated citation gaps are
nonfatal prose/citation debt, not structural owner requests. Every delegated
restatement is inspectable in A3, the Alpha report, the append-only A8
adjudications, the personal audit, and A9.

The Wave 9 A10 gate was rerun 9/9 after final Wave 10 certification. The owner
cleared the sole pause by instructing the orchestrator to conclude Waves 8, 9,
and 10. Checkpoint `60be95d` records the complete A0--A10 audit; the closure
commit and checkpoint are pushed together as the Wave 8--10 shipment. Nothing
was published by this action.
