# Wave 10 — A10 rundown

Published-page retro-audit of dependency level 10. Wave 10 mathematical text
is frozen after A9. A0 through A9 are complete; this is the sole owner-pause
rundown. No Wave 8–10 audit change has been committed or pushed.

Baseline: `6fb3b6c9d08752db2239a2e0794752f0f69107fc`.

**57 items, 49 proof-bearing items, 888 current relationships, one batch, four
pages, and two A/B pairs.**

## 1. Gate status

| step | result |
|---|---|
| A4 | **clear** on final namespaced and merged contracts, provenance, sources, render, and structural checks |
| A6 | **clear (14/14)**: contracts, risk, 115-edge frozen barrier, sources, generated risk, spine, readers, and combined/isolated impact all pass |
| A8 | **clear (3/3)**: zero fatal-licensed edits, zero-interface impact, no targeted rejudge, and exact-current coverage |
| A9 | **clear (2/2)**: all four repaired items and all four pages re-read; no claim decay and no edit |
| A10 | **clear (9/9)** on the final shared worktree |

Exact-current coverage is 57/57 items, 49/49 proof-bearing items, 888/888
relationships, no planned-to-actual dependency drift, 59/59 spine
attestations, and 4/4 repaired-item judge pairs. Its three warnings are the
durable A8 dispositions for current Terra rejections: one nonfatal and two
false positives. There is no unadjudicated fatal rejection. `git diff --check`
passes.

The same final-state rerun also clears Wave 8 and Wave 9 at 9/9; no concurrent
`published-unaudited` item remains.

## 2. Provenance census

All 57 items entered without component provenance and leave fully tagged; all
legacy `origin` fields were preserved.

| label | statement (before -> after) | proof (before -> after) |
|---|---:|---:|
| *(untagged)* | 57 -> **0** | 57 -> **0** |
| `literature-derived` | 0 -> **31** | 0 -> **0** |
| `ai-altered` | 0 -> **25** | 0 -> **35** |
| `ai-generated` | 0 -> **1** | 0 -> **14** |
| `not-applicable` | 0 -> **0** | 0 -> **8** |

Statement evidence is 31 `exact-source`, 25 `semantic-source`, and one `none`
for the positively determined repository-local generated ledger. There are no
`established-knowledge` waivers, classification escalations, or unresolved
provenance decisions. Alpha corrected three exact source-attribution
rationales without changing their component labels.

## 3. Generated-statement report

Wave 10 has one generated Statement seed:

| seed | cone | logical | direct citation | disposition |
|---|---:|---:|---:|---|
| `rem-riemann-integral-choice-ledger` | 10 | 0 | 10 | `verified-generated` |

Alpha read the complete repository-local accounting item, every named
prerequisite, and all ten direct-citation consumers. Its proof-expenditure
claims match current text; all consumers use it for orientation only, and it
has no load-bearing logical consumer. Future citation containment remains in
force.

## 4. Fatal-error and repair report

A4/A6 produced **four exact unique item targets** and one A-page repair. The
machine-exact item list and reasons are in `wave10-rejudge-targets.json`.

| defect type | location | item/page and disposition |
|---|---|---|
| incorrect/missing dependency citation | Facts/proof | `thm-monotonicity-from-the-derivative`: expanded L3 with the defining difference-quotient limit proposition used by the converse proof |
| incorrect/missing dependency citation | proof/contract inventory | `ex-integral-of-the-floor-function`: added the genuinely used L1 citation to step 1.2 and recorded its exact contract use |
| false/overstrong statement | Remark | `lem-integral-elementary-bounds`: removed the false claim that equality characterizes constants and supplied the Dirichlet-indicator sharpness witness |
| false/overstrong statement | page prose | `the-derivative-and-mean-value-theorems.md`: corrected four theorems falsely described as results “that the derivative exists for” to theorems whose hypotheses use differentiability |
| incorrect/missing source | sources/provenance | `cex-differentiable-with-unbounded-derivative-is-not-lipschitz`: replaced reader-unusable UNLP support with the exact live MIT square-root quotient witness |
| invalid inference | — | none |
| missing hypothesis/choice scope | — | none |
| invalid witness | — | none |

At A8 Alpha adjudicated exactly three Terra rejection rows: zero
`confirmed_fatal`, one `confirmed_nonfatal`, and two `false_positive`. The
floor example's opening continuity-set citation is a true, sub-threshold
compression and remains nonfatal debt. The absolute-value and maximum-bound
rejections overlooked exact cited Facts/derivations and are false positives.
**A8 changed no item and ran no rejudge.** A9 found no claim decay and made no
edit.

No item was deleted, renamed, or reordered.

## 5. Independent readers, impact, contracts, and sources

- Alpha recovered the durable record and read all 57 scoped items, all four
  pages, 99 distinct out-of-scope targets, all 59 proof-bearing top-100-spine
  items, and all 338 Wave 10 affected consumers; no surface was sampled.
- All 888 current edges were reconciled: 698 published-backward, 183
  same-batch, and seven forward. The frozen barriers are exactly 86
  Wave10-to-Wave8 and 29 Wave10-to-Wave9 edges, all licensed.
- The append-only external archive has 59 attempts: 51 DeepSeek and eight
  Terra. Fifty-eight transports succeeded; the original
  `thm-lebesgue-criterion` termination is preserved and its identical retry is
  clean.
- DeepSeek's final exact-current proof scope is 48 clean and one confirmed
  nonfatal, zero fatal. Terra exact-final certified the four repaired items and
  one repaired page.
- Strict proof contracts pass 49/49. All 49 risk routes are critical and
  reviewed. The dependency spine passes 59/59.
- The Wave 10 isolated impact receipt covers 57 changed interfaces and 338
  consumers, all licensed. The authoritative concurrent receipt integrates
  the exact identical Wave 8–10 surface of 239 interfaces and 729 consumers,
  with zero errors or warnings.
- The initial URL sweep was 56/58. UNLP was replaced by the live MIT source;
  final liveness is 57/58. The sole remaining McGill row is HTTP 200 and
  reader-usable but exceeds the automated complete-transfer timeout; its
  supported and excluded attributions are recorded exactly.

## 6. Judge comparison

The A7 ledger has eight calls: DeepSeek V4 Pro 4/4 pass; GPT 5.6 Terra one pass
and three reject.

| outcome | items |
|---|---:|
| both pass | 1 |
| both reject | 0 |
| DeepSeek-only reject | 0 |
| Terra-only reject | 3 |
| incomplete/null | 0 |

The three Terra-only rows are completely adjudicated: zero fatal, one nonfatal,
and two false positives. DeepSeek has zero rejection candidates. There are no
nulls, unadjudicated rejections, or mismatched latest contexts. Because A8
authored no repair, no targeted rejudge was required or run.

## 7. Personal-audit and scope record

The orchestrator personally re-read the source-repaired square-root item and
its two consumers, then all three A7-rejected items at the repeat-touch
threshold. The conclusions exactly match Alpha: two false positives and one
nonfatal citation compression. A9 then re-read all four repaired items and all
four pages in full; it made no mutation and no judge call.

Audit-Beta, Alpha, and independent readers ran as GPT 5.6 Sol at `xhigh` with
a 1,000,000-token context. Terra used the same `xhigh`/1,000,000-token
settings. DeepSeek V4 Pro used API `max`; the earlier health check passed HTTP
200 using the companion `.env` key without exposing it.

## 8. Owner queue and closure condition

Wave 10 proposes **no deletion, id rename/removal, or structural reading-order
change**. The overlong derivative/integration summaries, positional convention
wording, one floor continuity-set citation compression, and one source
transport caveat are nonfatal debt, not structural owner requests. Every
delegated restatement is inspectable in A3, the Alpha report, the append-only
A8 adjudications, the personal audit, and A9.

The sole owner pause is therefore a shipment decision for the completed Wave
8–10 audit changes. Nothing is committed or pushed until the owner clears it.
