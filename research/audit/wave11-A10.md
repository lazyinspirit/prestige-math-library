# Wave 11 — A10 rundown; final gate clear

Published-page retro-audit of dependency level 11. Wave 11 mathematical text
is frozen after A9. A0 through A10 are complete. The exact-current A10 gate is
9/9 after final shared-state closure.

Baseline: `442f831c94882899c1dc5559b36599b0f78a99c8`.

**61 items, 55 proof-bearing items, 785 current relationships, four pages,
and two A/B pairs.**

## 1. Gate status

| step | result |
|---|---|
| A0 | **clear (9/9)** on the exact 61-item, four-page baseline scope |
| A4 | content application complete; its sole 12/13 hold was the generated-risk hard edge deliberately routed to and closed at A6 |
| A6 | **Wave 11-local clear**: contracts, risk, sources, generated risk, spine, readers, edges, and isolated impact pass; the historical 12/14 wrapper failures were then-concurrent later-wave state |
| A8 | **clear** on the one confirmed-fatal repair, fatal-only guard, exact-final Terra certification, and one-interface/one-consumer impact receipt; its separate nonfatal prose finding was correctly handed to A9 |
| A9 | **clear** after two prose-only scope corrections and the final exact-current DeepSeek/Terra keep/keep singleton |
| A10 | **clear (9/9)** on the exact final shared worktree |

The authoritative command
`node tools/gates.mjs --audit --step A10 --run wave11 --json` passes all nine
gates with zero failures and zero gate warnings: precheck, depcheck, forward
references, external records, render, prose, dependency sources, coverage,
and advisory citecheck. Depcheck ends OK with no `published-unaudited` item.

The two shared failures from the first quiescent attempt are closed exactly.
Wave 14 repaired the hard source line break in the displayed sequence
definition in `ex-exponential-product-limit-at-negative-input`, then obtained
fresh exact-final certification and paired rejudge. The Wave 11 spine receipt
was refreshed from count-sensitive hash
`c495826392ddb2bad8874d27b4407be2cf28dacfe1c6cc66dbc1d7c9b3034f5d` to
`4d86ffcb0a5d9304143aa5c7f3d1c751e1dc94bd1769e4be5a970cb15abd3ba1`.
Its proof surface remains the same 59 ids with all 59 proof-content hashes
unchanged. Only four later-edge consumer counts had moved:
`thm-int-comm-ring` direct consumers 108 -> 109;
`lem-a-relation-is-included-in-the-product-of-its-domain-and-range`
transitive consumers 1909 -> 1910;
`lem-inverse-relations-composites-and-restrictions-are-sets` 1904 -> 1905;
and `lem-pigeonhole` 1598 -> 1599.

No Wave 11 proof, item, page, contract, provenance row, relationship, judge
pair, adjudication, impact disposition, source, or generated-risk row is open.
The shared generated-risk census remains 125 seeds, 40 load-bearing, maximum
cone 10. `git diff --check` passes.

## 2. Provenance census

All 61 items entered without component provenance and leave fully tagged; all
legacy `origin` fields were preserved.

| label | statement (before -> after) | proof (before -> after) |
|---|---:|---:|
| *(untagged)* | 61 -> **0** | 61 -> **0** |
| `literature-derived` | 0 -> **23** | 0 -> **0** |
| `ai-altered` | 0 -> **28** | 0 -> **0** |
| `ai-generated` | 0 -> **10** | 0 -> **55** |
| `not-applicable` | 0 -> **0** | 0 -> **6** |

The exact Statement/evidence cross-tab is 23 `literature-derived` /
`exact-source`, 26 `ai-altered` / `semantic-source`, two `ai-altered` /
`established-knowledge`, seven `ai-generated` / `trivial`, and three
`ai-generated` / `none`. Alpha independently concurred with the two
established-knowledge rows, `ex-xk-abs-x-smoothness-threshold` and
`cex-absolute-value-integrable-without-the-function`.

Alpha corrected four A4 classifications from exact final evidence:

- `cex-a-function-with-a-primitive-that-is-not-integrable` is source-backed
  `ai-altered` / `semantic-source`, not a load-bearing generated Statement;
- `thm-taylor-peano-remainder` is the source's stronger-hypothesis semantic
  specialization, so it is `ai-altered` / `semantic-source`;
- `thm-first-mean-value-theorem-for-integrals` is likewise a narrower
  specialization and is `ai-altered` / `semantic-source`;
- `thm-integration-by-parts` matches the CMU theorem exactly and is
  `literature-derived` / `exact-source`.

## 3. Generated-statement report

The exact-current global receipt has 125 generated Statement seeds, 40
load-bearing, and maximum cone size 10. Wave 11 intersects it in exactly ten
seeds, four with nonzero cones. Every Wave 11 seed is
`verified-generated`; none remains pending or unresolved.

| seed | cone | logical | direct citation | disposition |
|---|---:|---:|---:|---|
| `cex-lhopital-converse` | 0 | 0 | 0 | `verified-generated` |
| `cex-the-first-mean-value-theorem-needs-a-one-signed-weight` | 1 | 0 | 1 | `verified-generated` |
| `ex-additivity-on-a-step-function` | 0 | 0 | 0 | `verified-generated` |
| `ex-differentiable-function-with-discontinuous-derivative` | 0 | 0 | 0 | `verified-generated` |
| `ex-lhopital-rational-removable-quotient` | 0 | 0 | 0 | `verified-generated` |
| `ex-piecewise-polynomial-periodic-oscillator` | 3 | 3 | 3 | `verified-generated` |
| `ex-positive-derivative-at-zero-with-no-local-monotonicity` | 0 | 0 | 0 | `verified-generated` |
| `fs-integration-by-parts-needs-no-integrability-hypothesis` | 1 | 0 | 1 | `verified-generated` |
| `rem-darboux-lhopital-taylor-scope` | 0 | 0 | 0 | `verified-generated` |
| `rem-integral-conventions-and-scope` | 1 | 0 | 1 | `verified-generated` |

The oscillator's three logical consumers are
`cex-lhopital-converse`,
`ex-differentiable-function-with-discontinuous-derivative`, and
`ex-positive-derivative-at-zero-with-no-local-monotonicity`. The other three
nonzero cones are orientation/direct-citation only. A6 closed the hard edge
from `fs-integration-by-parts-needs-no-integrability-hypothesis` to
`cex-a-function-with-a-primitive-that-is-not-integrable` by source-backed
retag, not by deleting the true dependency.

## 4. Fatal-error and major-repair report

The repairs below use the build's defect groups and name every material item
or page disposition. No invalid witness, missing hypothesis/choice-scope
defect, deletion, id rename/removal, or structural reading-order change was
found.

| defect type | location | item/page and disposition |
|---|---|---|
| invalid inference | — | none |
| incorrect/missing dependency citation | proof | `thm-linearity-of-the-integral`: replaced the nonexistent “steps 2.3 to 6.3” with exact steps 2.3, 2.4, and 3.2 |
| incorrect/missing dependency citation | Facts/deps | `thm-monotonicity-of-the-integral`, `thm-additivity-over-subintervals`, `thm-first-mean-value-theorem-for-integrals`, `thm-ftc-second-part`, `thm-integration-by-parts`, and `cex-absolute-value-integrable-without-the-function`: deleted six unused Facts, eleven Fact/source mappings, and six dependencies; reconciled the one two-label renumber |
| incorrect/missing dependency citation | Remark/deps | `rem-darboux-lhopital-taylor-scope`: declared and cited the actually used `cor-injective-or-monotone-derivative-is-continuous`, adding one honest same-batch edge |
| false/overstrong statement | Remark | `ex-integral-test-applied-to-the-p-series`: replaced the false claim that no primitive can exist with the accurate absence of a named logarithmic primitive |
| false/overstrong statement | page prose | `properties-of-the-integral-and-the-working-ftc.md`: stopped assigning Taylor's integral remainder to a companion page that expressly excludes it |
| false/overstrong statement | Remark | `rem-integral-conventions-and-scope` at A6: removed the same stale Taylor-integral-remainder destination from the named scope ledger |
| false/overstrong statement | Remark | `rem-integral-conventions-and-scope` at A8: replaced the false endpoint-only sharp-FTC characterization with the a.e.-derivative, `L^1`, and every-point representation equivalence |
| false/overstrong statement | Remark | `rem-integral-conventions-and-scope` at A9: corrected “cited by nothing” and narrowed “no other integral appears” to the true defined-or-used-in-proof claim |
| missing hypothesis/choice scope | — | none; all choice-ledger claims were checked |
| invalid witness | — | none |

The A4 material total was eight item targets and one A-page: one false
statement, one malformed step reference, six unused-Fact cleanups, eleven
Fact/source mapping deletions, six dependency deletions, and one two-label
renumber. A6 added the two scope-ledger repairs above and source/provenance
closures; A8 made only the confirmed-fatal singleton repair; A9 made only the
two prose-only decay corrections on that same singleton.

## 5. Source closure, readers, impact, contracts, spine, and edges

The initial URL sweep was 44/46 live. The Iowa Taylor endpoint failed DNS; a
Drexel replacement then failed TLS; the final live Taylor source supports the
Peano specialization and exact Lagrange bound. The Hawaii derivative endpoint
failed TLS and was replaced by exact CLP square-root derivative support plus
GVSU improper-integral context. A6 added the university-hosted Pugh Chapter 3
full text exposing Exercise 35 while retaining Springer, and added Olmsted's
classical counterexample source for the primitive/nonintegrable witness. The
final sweep is **48/48 live**, with every failed or intermediate endpoint
preserved in `wave11-url-dispositions.json` and no unresolved source caveat.

- Alpha recovered the complete durable record and read all 61 scoped items,
  all four pages, 114 distinct outside targets, all 59 proof-bearing top-100
  spine items, and all 238 affected consumers; no surface was sampled.
- All 785 final relationships are exact: 615 published-backward, 153
  same-batch, and 17 forward; 766 dependency edges, 17 forward references,
  and two external mentions; 27 declared semantic prerequisites and 758 body
  links.
- All 267 frozen earlier-wave barriers are licensed against exact final text:
  55 Wave11-to-Wave8 edges into 18 targets, 20 Wave11-to-Wave9 edges into
  seven targets, and 192 Wave11-to-Wave10 edges into 24 targets.
- Strict proof contracts pass 55/55: 692 Fact/source citations, 377 numbered
  proof steps, and 440 boundary rows, with zero errors or warnings. The A6
  proof spine passed 59/59; the current spine retains the same 59 proof ids
  and hashes after the count-sensitive receipt refresh recorded in section 1.
- The risk receipt covers all 55 proof-bearing items: 39 critical, 12 high,
  three moderate, and one ordinary; 52 have independent refuter routes, 53
  are clean/Alpha-clean, and two exact-current defects are confirmed nonfatal.
- The append-only DeepSeek A6 archive has 69 packets. Its required exact-final
  union is 54/54: 51 `CLEAN`, three `DEFECTS` confirmed nonfatal, zero
  unresolved. One historical fatal undeclared relationship was repaired and
  its exact-final retry is `CLEAN`.
- The append-only Terra archive has 27 result packets: 24 A6 packets covering
  all 15 repair/source item targets plus the repaired page, one A8 exact-final
  certificate, and two successive A9 exact-final certificates. Every final
  certificate is exact-hash evidence; earlier refusal/source-block packets
  remain append-only.
- The A6 impact receipt covers 61 changed interfaces and 238 required
  consumers, all licensed. A8 and A9 each cover the one changed interface
  `rem-integral-conventions-and-scope` and its sole direct consumer
  `cex-a-function-with-a-primitive-that-is-not-integrable`, with zero errors
  or warnings and the consumer `still-licensed`.

## 6. Judge comparison and all append-only adjudications

The append-only ledger has 36 verdict rows. DeepSeek V4 Pro made 18 calls:
16 pass, two reject, zero null. GPT 5.6 Terra made 18 calls: eight pass, ten
reject, zero null. The initial A7 surface was exactly 30 rows over 15 repair
targets: DeepSeek 13 pass/two reject and Terra seven pass/eight reject. Those
ten initial rejection rows covered eight unique ids.

The latest exact-item agreement over all 15 targets is:

| outcome | items |
|---|---:|
| both pass | 8 |
| both reject | 2 |
| DeepSeek-only reject | 0 |
| Terra-only reject | 5 |
| incomplete/null | 0 |

All 15 latest model pairs have matching frozen contexts. The raw remaining
rejections are legitimate append-only evidence against unchanged item text;
all are adjudicated and none is an unresolved fatal defect.

All **12** unique exact `(id, model, context)` rejection candidates have an
append-only decision: one `confirmed_fatal`, ten `confirmed_nonfatal`, and one
`false_positive`.

- DeepSeek: `thm-linearity-of-the-integral` is the sole false positive because
  taking `eta=|x|` closes the alleged Archimedean gap; the
  `thm-taylor-peano-remainder` L1/L2 fidelity observation is confirmed
  nonfatal. DeepSeek detected zero owner-confirmed fatal errors.
- Terra's sole confirmed fatal is the pre-A8 endpoint-only characterization
  in `rem-integral-conventions-and-scope`; it received the only A8 edit.
- Terra's nine confirmed-nonfatal rows are: citation-voice compression in
  `cor-taylor-remainder-bound`; finite-sum-monotonicity compression in
  `thm-linearity-of-the-integral`; induction citation compression in
  `thm-taylor-peano-remainder`; the `N=0` FTC endpoint case in
  `ex-integral-test-applied-to-the-p-series`; scalar-continuity input in
  `ex-two-root-x-and-its-unbounded-derivative`; the standing `p<q` hypothesis
  in `fs-substitution-holds-for-every-integrable-integrand`; affine power-rule
  grouping in `cex-a-function-with-a-primitive-that-is-not-integrable`; then
  the successive true-but-nonfatal “cited by nothing” and “no other integral
  appears” scope-prose findings on `rem-integral-conventions-and-scope`.

Thus DeepSeek's two rejection candidates resolve to zero fatal, one nonfatal,
and one false positive; Terra's ten resolve to one fatal, nine nonfatal, and
zero false positives. There are no nulls or unadjudicated rejection tuples.

The targeted sequence for `rem-integral-conventions-and-scope` is preserved in
full: after A8 DeepSeek kept and Terra rejected only “cited by nothing”; after
the first A9 correction DeepSeek kept and Terra rejected only “no other
integral appears”; after the final A9 narrowing **both kept**. The final
normalized item hash is
`b1c799fd0ff17e431bcc5fa64e18b698ce3f605c4c6a8c16590867cc6d8e3217`;
the final judge item hash is
`e9d21277062eff21152f0b567aed7ab9d15c13298b8ef70a1c6be4debc48b2f8`;
and the exact keep/keep context is
`bae50918b2cd1f67bb94ad0168c7c29f51bcae3af7e6f7473d78b016f34050f9`.
The pass-only targeted receipt and final singleton judge stamp bind exactly
that pair.

## 7. Personal-audit and scope record

The orchestrator personally audited all nine items with at least two
content-hash transitions:
`cex-a-function-with-a-primitive-that-is-not-integrable`,
`cor-taylor-remainder-bound`,
`ex-two-root-x-and-its-unbounded-derivative`,
`fs-substitution-holds-for-every-integrable-integrand`,
`rem-darboux-lhopital-taylor-scope`,
`rem-integral-conventions-and-scope`,
`thm-first-mean-value-theorem-for-integrals`,
`thm-integration-by-parts`, and
`thm-taylor-peano-remainder`. After A7 it also personally audited
`ex-integral-test-applied-to-the-p-series` and
`thm-linearity-of-the-integral`; the combined touch/refutation escalation set
is therefore **11/11 complete**. Every item was kept, and each fault history,
exact-current conclusion, and drop ramification is durable in
`wave11-orchestrator-personal-audit.md`.

A9 re-read all 15 repair/source targets, the repaired page, and the scope
ledger's sole direct consumer in full, then adjudicated every denial-language
match. It found only the two scope-prose decay claims repaired above. No item
was deleted, renamed, or reordered.

Audit-Beta, Alpha, and independent readers ran as GPT 5.6 Sol at `xhigh` with
a 1,000,000-token context. Terra used the same `xhigh`/1,000,000-token
settings. DeepSeek V4 Pro used API `max` through the approved direct route.

## 8. Owner queue and closure condition

Wave 11 proposes **no deletion, id rename/removal, or structural reading-order
change**. The complete delegated-restatement record remains inspectable:

- the p-series Remark was narrowed from false primitive nonexistence to the
  absence of a named logarithmic primitive;
- the integral page and its scope ledger stopped assigning a Taylor integral
  remainder to a page that expressly excludes it;
- the first integral mean-value theorem and Peano theorem were classified as
  supported specializations rather than exact transcriptions;
- the integral conventions ledger received the A8 sharp-FTC correction and
  A9's two corpus-scope prose corrections.

Retained citation compressions in the refuter and judge adjudications are
nonfatal debt, not structural owner requests. The A6 refuter's stale “cited by
nothing” observation is closed by A9 rather than left as current debt.

The A10 pause is clear: both formerly shared failures and the dependency-stamp
barrier pass on exact final disk. No snapshot, commit, push, or publication
action belongs to this rundown.
