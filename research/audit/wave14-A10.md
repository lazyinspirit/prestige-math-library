# Wave 14 — A10 rundown; all gates clear at the sole owner pause

Published-page retro-audit of dependency level 14. Wave 14 mathematical,
source, dependency, page, contract, provenance, and verification text is frozen
after the final A9 render repair and its exact-current certification and paired
rejudge. A0 through A10 are complete. This rundown writes no item, page,
contract, stamp, snapshot, shared receipt, commit, or push.

Baseline: `442f831c94882899c1dc5559b36599b0f78a99c8`.

**25 items, 23 proof-bearing items, 178 current relationships, two pages, and
one A/B pair.** The pages are `the-exponential-function` and
`the-exponential-function-examples`.

## 1. Gate status

The authoritative current command

`node tools/gates.mjs --audit --step A10 --run wave14 --json`

reports **9/9 gates passing, zero failures, and zero gate-level warnings**.
Precheck, dependency, forward-reference, external-reference, render, prose,
advisory citation, dependency-source, and level-coverage gates all pass.

The first A10 run exposed one renderer defect in
`ex-exponential-product-limit-at-negative-input`: a hard source-line break
inside one display block. A9 removed only that break, withdrew the stale
exact-hash evidence, obtained a fresh read-only GPT 5.6 Terra certification,
rejudged only that changed item in both lanes, and refreshed its pass-only
stamp. The final rerun above is green. This was a renderer-source repair, not a
mathematical rewrite, and it did not authorize any sibling rejudge.

## 2. Provenance census and before/after cross-tab

All 25 items entered A0 without component provenance and leave fully tagged.
All legacy `origin` values were preserved; no scoped item retains a legacy
`authorship` field. A8 moved only `thm-e-is-irrational`'s proof from
`literature-derived` to `ai-altered` after its locally expanded typed
divisibility and embedding derivation.

| label | statement (before -> after) | proof (before -> after) |
|---|---:|---:|
| *(untagged)* | 25 -> **0** | 25 -> **0** |
| `literature-derived` | 0 -> **12** | 0 -> **1** |
| `ai-altered` | 0 -> **10** | 0 -> **16** |
| `ai-generated` | 0 -> **3** | 0 -> **6** |
| `not-applicable` | 0 -> **0** | 0 -> **2** |

The complete final label/evidence cross-tab is:

| component label × row evidence | before | after |
|---|---:|---:|
| statement untagged × no audit evidence | 25 | 0 |
| statement `literature-derived` × `exact-source` | 0 | 12 |
| statement `ai-altered` × `semantic-source` | 0 | 10 |
| statement `ai-generated` × `trivial` | 0 | 2 |
| statement `ai-generated` × `none` | 0 | 1 |
| proof untagged × no audit evidence | 25 | 0 |
| proof `literature-derived` × `exact-source` | 0 | 1 |
| proof `ai-altered` × `exact-source` | 0 | 11 |
| proof `ai-altered` × `semantic-source` | 0 | 5 |
| proof `ai-generated` × `semantic-source` | 0 | 4 |
| proof `ai-generated` × `trivial` | 0 | 2 |
| proof `not-applicable` × `semantic-source` | 0 | 1 |
| proof `not-applicable` × `none` | 0 | 1 |

At row level the evidence census is 12 `exact-source`, 10 `semantic-source`,
two `trivial`, and one `none`. There is no `established-knowledge` waiver or
classification escalation. The 22 sourced rows carry 39 URL associations over
16 distinct current URLs; all 16 are host-live. The three no-URL ledger rows
are precisely the two directly checkable generated examples and the bespoke
repository-roadmap remark.

## 3. Generated-statement report

The current shared `genrisk.json` has 125 generated Statement seeds, 40 with a
nonzero cone, and maximum cone size ten. Wave 14 intersects it in exactly three
seeds, all cone-zero and all positively determined rather than defaulted from a
failed source search:

| seed | cone | logical consumers | direct-citation consumers | disposition |
|---|---:|---:|---:|---|
| `cex-exponential-product-limit-not-uniform-on-r` | 0 | 0 | 0 | `verified-generated`; Alpha full read and DeepSeek `CLEAN` at `f6a7e9b849ebc562f886a49909863bac10c61b51345ff881d6c7409e99b0cda9` |
| `ex-exponential-product-limit-at-negative-input` | 0 | 0 | 0 | `verified-generated`; A8 repaired the zero-index defect and A9's exact-current Terra reread certified hash `9d72aaa4e7848e6ed95a587788aa20e5f215cae642f3b96c5673a3da54cba736`, followed by paired keeps |
| `rem-exponential-roadmap-and-circularity` | 0 | 0 | 0 | `verified-generated`; Alpha full read and DeepSeek `CLEAN` at `d53803c17d5d91930101b6ec6d0488e1d720db3398e7370bebc15df48048ca72` |

No retag, restatement, unfolding, narrowing, consumer repair, or owner-queue
route is needed. Future batches remain forbidden from adding a dependency edge
to any of the three.

## 4. Fatal-error and major-repair report

Wave 14 repaired **two unique fatal mathematical defects**, represented by
three confirmed-fatal judge rows because both lanes independently detected the
same typed-integrality defect in `thm-e-is-irrational`. Five items had material
A4 citation/proof repairs, five items had A6 source-only corrections, two items
had fatal-only A8 repairs, and one of those received the later A9 renderer-only
format repair. No item was deleted, renamed, removed, or reordered; no title,
page summary, page prose, or Remark was changed.

### Fatal defects

| defect type | location | item and disposition |
|---|---|---|
| invalid witness / ill-defined construction | Example statement | `ex-exponential-product-limit-at-negative-input`: the claimed natural-indexed sequence divided by `iota(0)=0`. A8 defined `a_0=0`, restricted the product formula to `n>=1`, proved convergence on the `n>2` tail, and cited exact tail invariance. Terra alone detected this fatal at A7; the final exact text is independently certified and passed both judges. |
| incorrect/missing dependency citation and unlicensed inference | Facts/deps and proof | `thm-e-is-irrational`: the load-bearing claim that the scaled tail is an embedded integer used `q|n!`, `k!|n!`, and an N-to-Z-to-Q-to-R passage without exact witnesses or embedding licenses. A8 added positive-denominator, factorial-divisibility, embedding, and integer-ring dependencies and wrote the typed derivation explicitly. Both judges independently confirmed the fatal. The proof provenance moved to `ai-altered`; exact-final Terra certification passed. |

There was no separate fatal title/Statement overclaim, missing choice
hypothesis, false Remark, invalid page claim, or page-summary defect.

### Major and nonmathematical repairs

| defect type | location | severity | item(s) and disposition |
|---|---|---|---|
| incorrect/missing dependency citation | Facts/deps | major | `lem-exponential-series-has-infinite-radius` added canonical-natural positivity/product licenses; `cor-exponential-reciprocal-and-positivity` replaced two insufficient sources with the exact nonzero-square lemma; `thm-normalized-exponential-functional-equation` added the exponential definition and derivative theorem for the existence halves; `ex-exponential-product-limit-at-negative-input` added the definition, addition, reciprocal, and integer-power route for `exp(-2)=e^{-2}`. |
| proof order and source-faithful bound | numbered proof | major | `thm-e-is-irrational` defined the scaled tail before use, replaced the uncited geometric comparison by the exact factorial-tail lemma, added canonical-natural positivity, and reflowed phases to 2.1/3.1/4.1. This A4 repair did not yet close the separate typed-integrality fatal found at A7. |
| insufficient provenance evidence | source ledger/reference | major source correction | `lem-scaled-binomial-coefficients-converge` gained Princeton's fixed-`k` asymptotic as the exact semantic support for its limit; the local finite-product proof still supplies the bound. |
| redundant blocked source and singular attribution | provenance/sources | source-only | `cex-exponential-not-uniformly-continuous-on-r`, `cor-exponential-is-a-bijection-onto-positive-reals`, `thm-exponential-is-strictly-increasing`, `thm-exponential-limits-and-range`, and `thm-exponential-product-limit` dropped only redundant TAMU/Keisler HTTP-403 URLs after retained live sources were verified exact. No mathematics or label changed. |
| renderer-unsafe source formatting | Example display | nonmathematical gate defect | `ex-exponential-product-limit-at-negative-input` removed one hard source-line break inside an otherwise unchanged display. Exact-current Terra certification, zero-consumer impact closure, and one-item paired rejudge followed before the judge stamp was restored. |

The negative-input example received three mechanically distinct repairs. The
orchestrator's repeat-touch audit retained it: the first repaired an attribution,
the second repaired an actually undefined sequence value, and the third was
required for renderer acceptance; deleting the item would discard a useful
boundary example while none of those faults survives. The irrationality theorem
received two material repairs; its Statement is classical and unchanged, and
dropping it would break the roadmap consumer. The staged fixes and complete
typed final proof are preferable to removal.

## 5. Source, reader, contract, spine, barrier, and impact closure

- Audit-Beta read all 25 items, both pages, all 71 numbered steps, all proof
  Facts and source occurrences, and every cited target. Alpha then read all 25
  exact-current items, both pages, all 23 contracts, all 178 relationships, all
  66 distinct outside targets, all 77 A6 impact consumers, and all 59 current
  proof-bearing top-100 spine items without sampling.
- DeepSeek V4 Pro at `max` completed 22/22 selected A6 adversarial routes as
  `CLEAN`: all 21 high/critical proof routes plus the generated-risk/repair
  union, with zero defects or unresolved routes. Twenty-two initial transport
  nulls remain append-only evidence rather than verdicts.
- GPT 5.6 Terra at `xhigh`/1M certified all ten A4/A6 repair/source targets at
  A6, both exact-final fatal repairs at A8, and the one exact-final display
  source at A9: 13 exact-state certification events over ten ids, zero final
  refusals or blockers. The newest certification supersedes the earlier state
  whenever the same item changed.
- Source closure is 16/16 distinct URLs live, 39 ledger associations, and no
  D2 waiver. The two redundant blocked URLs were removed only after retained
  sources were checked for exact support.
- Strict proof contracts pass **23/23**, with 71 numbered steps, 135 exact
  Fact/source mappings, and 184 boundary dispositions, zero errors and zero
  warnings. The merged and namespaced copies are synchronized.
- Risk review covers all 23 proof-bearing items: eight critical, 13 high, one
  moderate, and one ordinary; every route is `CLEAN` or `ALPHA-CLEAN` at its
  reviewed state, and final repaired states have independent Terra evidence.
- The proof spine passes **59/59** at current scope SHA-256
  `4d86ffcb0a5d9304143aa5c7f3d1c751e1dc94bd1769e4be5a970cb15abd3ba1`.
  A8 changed no spine membership or proof-content attestation; dependency-cone
  counts were refreshed.
- Wave14-isolated A6 impact closure passes **25 changed interfaces / 77
  consumers**, all `still-licensed`, with no consumer repair. The byte-honest
  raw concurrent window remains 223 interfaces / 458 consumers because it also
  contains 198 foreign Wave11–13 changes; that raw fact was preserved rather
  than mislabeled as Wave 14 work. A8 closes 2 interfaces / 1 still-licensed
  consumer; A9 closes 1 mechanically changed interface / 0 consumers.

### Exact 16-edge Wave 11/12/13 frozen barrier

The final census is **178 relationships**: 115 published-backward and 63
same-batch, consisting of 177 dependency edges and one well-definedness
discharge. Alpha closed the mandatory barrier **16/16 exact**, with zero stale,
stronger-than-target, or misdirected edges. Two smoothness-corollary citations
are redundant with direct routes but correct and nonfatal.

Wave 11 — four edges:

- `thm-picard-iterates-for-exponential` -> `def-oriented-integral`;
- `thm-picard-iterates-for-exponential` -> `thm-linearity-of-the-integral`;
- `thm-picard-iterates-for-exponential` -> `thm-ftc-first-part`;
- `thm-picard-iterates-for-exponential` -> `thm-ftc-second-part`.

Wave 12 — three edges:

- `thm-picard-iterates-for-exponential` -> `thm-uniform-limit-interchanges-riemann-integration`;
- `thm-picard-iterates-for-exponential` -> `thm-uniform-limit-continuous-real-functions`;
- `cex-exponential-product-limit-not-uniform-on-r` -> `def-pointwise-uniform-and-uniformly-cauchy-convergence`.

Wave 13 — nine edges:

- `def-real-exponential-function-and-e` -> `def-real-power-series-and-radius-of-convergence`;
- `thm-exponential-addition-formula` -> `lem-cauchy-product-of-real-power-series`;
- `thm-derivative-of-exponential` -> `thm-termwise-differentiation-of-a-real-power-series`;
- `thm-derivative-of-exponential` -> `cor-power-series-sums-are-smooth-with-coefficient-formula`;
- `thm-exponential-is-strictly-increasing` -> `cor-power-series-sums-are-continuous`;
- `cor-exponential-is-a-bijection-onto-positive-reals` -> `cor-power-series-sums-are-continuous`;
- `thm-picard-iterates-for-exponential` -> `thm-power-series-uniform-on-compact-subintervals`;
- `ex-flat-exponential-function` -> `cor-power-series-sums-are-smooth-with-coefficient-formula`;
- `ex-smooth-compactly-supported-bump` -> `cor-power-series-sums-are-smooth-with-coefficient-formula`.

## 6. Exact judge history and adjudications

The requested A7+A8 history is exactly **24 substantive rows**: 20 A7 rows
over the ten recorded A4/A6 targets, followed by four targeted A8 rows over the
two fatal repairs. A9 then added exactly two rows for its one changed item, so
the final append-only ledger has **26 rows: 13 per lane, zero nulls**. No
unchanged sibling or still-licensed consumer was rejudged.

### The exact 24-row A7+A8 core

| stage | target | context SHA-256 | DeepSeek | Terra | exact disposition |
|---|---|---|---|---|---|
| A7 | `cex-exponential-not-uniformly-continuous-on-r` | `9fcc1e5af2a7a41cc0af29347e2e91274525499c0823280c5db2a8f0edfd0069` | keep | reject | Terra `false_positive` |
| A7 | `cor-exponential-is-a-bijection-onto-positive-reals` | `7a392fd7bc90e0c93cabf74d807929342f1e16c72563c8f672db92baf8c56a36` | keep | reject | Terra `confirmed_nonfatal` |
| A7 | `cor-exponential-reciprocal-and-positivity` | `6ee2bec19ad334724e56196328611b42707a6295fe15c8a4d5c15d63be698eec` | keep | keep | paired pass |
| A7 | `ex-exponential-product-limit-at-negative-input` | `020c02ca1d20b49c114ca1d44ee2f45b18638ddf236d961e5374f9757b3b7306` | keep | reject | Terra `confirmed_fatal` (`other`) |
| A7 | `lem-exponential-series-has-infinite-radius` | `edf7967518ed2d565358243833190996f4e0d8eea24c50e197c21903d1a74d45` | reject | reject | both `confirmed_nonfatal` |
| A7 | `thm-e-is-irrational` | `2a240f10616fb6de71483b6aaea7ff05b4e1247b5a7f2d29962af1434ef5053c` | reject | reject | both `confirmed_fatal` (`dependency_citation`) |
| A7 | `thm-exponential-is-strictly-increasing` | `1631e9607c70db049a98f7ec0e6a0491dd6f8776a62ee1137954921fc3d8734b` | keep | reject | Terra `false_positive` |
| A7 | `thm-exponential-limits-and-range` | `7105668f32e4784576c769df1afbc933c57aefed40843a74413dd78958cde65a` | reject | keep | DeepSeek `false_positive` |
| A7 | `thm-exponential-product-limit` | `b8f38071a3d80318090d16dd7991e75fecfa9fc86736e1b08a696316a4940178` | keep | keep | paired pass |
| A7 | `thm-normalized-exponential-functional-equation` | `7ff3acf501b9a177137f3c82373d32a7b0c41883295a46db51d738e4b776a068` | keep | keep | paired pass |
| A8 targeted | `ex-exponential-product-limit-at-negative-input` | `c6fbe5bd86357a64fe8a524f7712757dd92300ac5c2bd030cb5a6730bbb5c6ff` | keep | keep | repaired item passed; later superseded only by A9 source formatting |
| A8 targeted | `thm-e-is-irrational` | `25881e78f3101aa0f146fd4c68c42f337ff830247daa7c77841021a31f0fada0` | keep | reject | Terra `false_positive`; honestly unstamped |

A7 arithmetic: three both-pass, two both-reject, one DeepSeek-only reject,
four Terra-only rejects, nine rejection rows over seven ids. The A8 targeted
pair added one both-pass and one Terra-only rejection.

### A9 exact-current addendum

Rows 25–26 are the only post-core calls: both DeepSeek and Terra kept
`ex-exponential-product-limit-at-negative-input` at context
`1b09d929df31280d6a9428c9a6b6dc8c4f76f94460fdf974b3fa9ec2658c62d5`.
Its targeted receipt and judge stamp now bind that final text.

Across all 26 rows DeepSeek has 13 calls, ten passes, three rejections, and zero
nulls; Terra has 13 calls, six passes, seven rejections, and zero nulls. Latest
usable outcomes over the ten required ids are four both-pass, one both-reject,
one DeepSeek-only reject, four Terra-only rejects, and zero incomplete/null.

### Exact ten-row Alpha adjudication ledger

| # | id / lane / context | outcome | evidence disposition |
|---:|---|---|---|
| 1 | `cex-exponential-not-uniformly-continuous-on-r` / Terra / `9fcc1e5a...` | `false_positive` | The derivative and strict-increase targets explicitly give smoothness/continuity, so MVT hypotheses are present. |
| 2 | `cor-exponential-is-a-bijection-onto-positive-reals` / Terra / `7a392fd7...` | `confirmed_nonfatal` | One generic continuity citation is compressed, but another declared target states exponential continuity exactly; R1 forbade polish. |
| 3 | `ex-exponential-product-limit-at-negative-input` / Terra / `020c02ca...` | `confirmed_fatal` (`other`) | Division by `iota(0)=0` made the claimed sequence undefined. |
| 4 | `lem-exponential-series-has-infinite-radius` / Terra / `edf79675...` | `confirmed_nonfatal` | The exact cited lemma contains product preservation and strict increase; only the Fact summary compresses them. |
| 5 | `lem-exponential-series-has-infinite-radius` / DeepSeek / `edf79675...` | `confirmed_nonfatal` | Same sub-thirty-second citation compression. |
| 6 | `thm-e-is-irrational` / Terra / `2a240f10...` | `confirmed_fatal` (`dependency_citation`) | The integrality step lacked typed divisibility and embedding licenses. |
| 7 | `thm-e-is-irrational` / DeepSeek / `2a240f10...` | `confirmed_fatal` (`dependency_citation`) | Same fatal typed gap, independently detected. |
| 8 | `thm-exponential-is-strictly-increasing` / Terra / `1631e960...` | `false_positive` | Facts L1 and L2 jointly state both MVT hypotheses; no stronger claim occurs. |
| 9 | `thm-exponential-limits-and-range` / DeepSeek / `7105668f...` | `false_positive` | The cited definition's combined-forms clause explicitly defines the required infinite limit at infinity. |
| 10 | `thm-e-is-irrational` / Terra / `25881e78...` | `false_positive` | The exact ordered N-to-Z-to-Q-to-R embeddings turn a positive integer image into a canonical natural at least one. |

Thus the ten adjudications are three `confirmed_fatal` rows across two unique
ids, three `confirmed_nonfatal`, and four `false_positive`, with zero
unadjudicated rejection. DeepSeek contributed one confirmed-fatal detection,
one nonfatal, and one false positive among three candidates; Terra contributed
two fatal detections, two nonfatals, and three false positives among seven.

## 7. Coverage receipt

`research/audit/wave14-coverage.json` binds manifest SHA-256
`b52a4820ce266ada5d3eed276ae119c92cf73c1fb106cc694916da2f60e6474a`
and attests:

- 25/25 scoped items and 23/23 proof-bearing items;
- 178/178 final relationships;
- 16/16 frozen Wave14-to-Wave11/Wave12/Wave13 barrier edges;
- 10/10 exact repair/source judge targets with matching DeepSeek/Terra pairs;
- 10/10 exact rejection candidates adjudicated;
- strict contracts 23/23 and proof spine 59/59;
- isolated A6 impact closure 25/77, fatal-only A8 closure 2/1, and A9 render
  closure 1/0, with no unresolved consumer.

The current A10 level-coverage gate passes with exactly seven warning lines for
the current adjudicated nonfatal/false-positive evidence and zero coverage
errors. Superseded fatal-context rows and the prior A8 paired pass for the
format-repaired example remain append-only history; they do not displace the
final exact-current pair.

## 8. Owner queue and delegated-restatement record

Wave 14 proposes **no deletion, id rename/removal, or structural reading-order
change**. The narrowed structural owner queue is empty.

The complete delegated decision/restatement record remains inspectable:

- A3 approved all 25 component classifications and all five proposed citation
  repairs. It strengthened the scaled-binomial source with Princeton, required
  canonical-natural positivity in the irrationality proof, and required the
  integer-power definition in the negative-input example. No title, Statement,
  page, or structural rewrite was delegated there.
- A4 applied exactly 20 pure retags and five material repairs, refreshed only
  those contracts, and preserved all pages and ids.
- A6 retained every mathematical/provenance classification, removed redundant
  blocked URLs from five exact rows, corrected two singular source rationales,
  certified all ten repair/source targets, closed the 16-edge barrier, and
  repaired no consumer.
- A8 edited exactly the two unique confirmed-fatal ids. It left all nonfatal
  and false-positive rejection targets byte-unchanged, independently certified
  both fatal repairs, rejudged only those two, and withheld a judge stamp from
  the Terra-rejected irrationality theorem without manufacturing a pass.
- A9's scope-denial reread found no mathematical or published-claim-decay
  repair. Its later required renderer correction changed one source line only;
  it was independently recertified, impact-closed at zero consumers, and only
  that item was rejudged.

A10 is green and this is the workflow's sole owner-pause boundary. No commit,
push, publication-status change, or A11 action is performed by this report.
