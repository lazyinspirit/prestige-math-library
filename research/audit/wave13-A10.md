# Wave 13 — A10 rundown; final 9/9 gates pass

Published-page retro-audit of dependency level 13. Wave 13 mathematical,
source, dependency, page, contract, provenance, and verification text is frozen
after A9. A0 through A9 are complete. This rundown writes no item, page,
contract, stamp, snapshot, shared receipt, commit, or push.

Baseline: `442f831c94882899c1dc5559b36599b0f78a99c8`.

**76 items, 62 proof-bearing items, 488 current relationships, four pages, and
two A/B pairs.** The pages are `power-series-and-real-analytic-functions`, its
examples companion, `the-riemann-integral-in-rn-and-jordan-content`, and its
examples companion.

## 1. Gate status and exact blocker boundary

The authoritative final command

`node tools/gates.mjs --audit --step A10 --run wave13 --json`

reports **9/9 required gates passing, zero failures, and zero gate-level
warnings**. Precheck, dependency, forward-reference, external-reference,
render, prose, advisory citation, dependency-source, and level-coverage gates
all pass.

The earlier A10 run reported 8/9 because global `depcheck.mjs` found four
unstamped items then owned by concurrent Wave 14:

- `thm-exponential-is-strictly-increasing`;
- `thm-exponential-limits-and-range`;
- `thm-exponential-product-limit`;
- `thm-normalized-exponential-functional-equation`.

At that earlier run, each was published but had neither
`verification.audited` nor `verification.verified`. None was in Wave 13 scope,
and Wave 13 did not edit or stamp it. The historical blocker split was:

- **Wave 13-local blockers: zero.**
- **External/shared blockers: four Wave 14 verification stamps, producing the
  one global depcheck failure.**

Wave 14 has now independently licensed those items, and final `depcheck.mjs`
passes. Its later display repair also makes final `rendercheck.mjs` pass. The
Wave 13 spine receipt was count-only refreshed to the current
high-blast-radius scope SHA-256 while preserving the same 59 ids and proof
hashes; final level coverage passes with its three exact adjudication warnings
and zero errors. The historical shared blockers are therefore fully cleared,
with **zero Wave 13-local or external A10 blockers remaining**.

The byte-honest raw A6 impact window is also preserved rather than rewritten:
concurrent Waves 11/12 changed 47 foreign interfaces after Wave 13's `pre-A4`
snapshot, so the raw window contains 123 sources and 408 consumers and its
generic receipt remains deliberately unresolved. The separate Wave13-isolated
receipt passes for exactly 76 Wave 13 interfaces and 207/207 consumers. A8
passes independently for zero changed interfaces and zero consumers. This is a
shared-state limitation of the raw A6 window, not a Wave 13-local mathematical
or impact-closure failure.

## 2. Provenance census and before/after cross-tab

All 76 scoped items entered A0 without component provenance and leave fully
tagged. All legacy `origin` values were preserved; no scoped item retained a
legacy `authorship` field. The A3 census initially approved six
`literature-derived` statements, but the independent A6 source certifier
correctly refused `thm-jordan-boundary-criterion`'s exact-source overclaim.
Alpha changed that one row to `ai-altered` / `semantic-source`, producing this
exact-final census:

| label | statement (before -> after) | proof (before -> after) |
|---|---:|---:|
| *(untagged)* | 76 -> **0** | 76 -> **0** |
| `literature-derived` | 0 -> **5** | 0 -> **0** |
| `ai-altered` | 0 -> **70** | 0 -> **34** |
| `ai-generated` | 0 -> **1** | 0 -> **28** |
| `not-applicable` | 0 -> **0** | 0 -> **14** |

The complete label/evidence cross-tab is:

| component label × row evidence | before | after |
|---|---:|---:|
| statement untagged × no audit evidence | 76 | 0 |
| statement `ai-altered` × `semantic-source` | 0 | 70 |
| statement `literature-derived` × `exact-source` | 0 | 5 |
| statement `ai-generated` × `none` | 0 | 1 |
| proof untagged × no audit evidence | 76 | 0 |
| proof `ai-altered` × `semantic-source` | 0 | 33 |
| proof `ai-altered` × `exact-source` | 0 | 1 |
| proof `ai-generated` × `semantic-source` | 0 | 25 |
| proof `ai-generated` × `exact-source` | 0 | 3 |
| proof `not-applicable` × `semantic-source` | 0 | 12 |
| proof `not-applicable` × `exact-source` | 0 | 1 |
| proof `not-applicable` × `none` | 0 | 1 |

There are no `trivial` or `established-knowledge` rows and therefore no D2 URL
waiver. Alpha read all 76 classifications, evidence classes, rationales, and
exact final source lists. The sole positive generated determination is
`rem-multidimensional-riemann-conventions-and-scope`; it is a repository-
specific scope ledger, not a default assigned because a source failed to
surface.

## 3. Generated-statement report

The exact-current shared receipt has 125 generated Statement seeds, 40 with
nonzero cones, and maximum cone size 10. Wave 13 intersects it in exactly one
seed:

| seed | cone | logical consumers | direct-citation consumers | disposition |
|---|---:|---:|---:|---|
| `rem-multidimensional-riemann-conventions-and-scope` | 0 | 0 | 0 | `verified-generated` |

Alpha positively confirmed that the item is a site-specific inventory of the
multidimensional Riemann interfaces this repository develops and omits, read
every clause and named dependency, and counterexample-searched its boundary and
convention claims. DeepSeek returned `CLEAN` at normalized SHA-256
`a53630972af11397bb3779617121a3befe30ceabffbe3ef3e73599a2d013262b`.
With no logical or direct-citation consumer, no retag, restatement, unfolding,
narrowing, or consumer repair is needed. The honest `ai-generated` label and
`verified-generated` disposition remain exact-current; future batches remain
forbidden from adding a dependency edge to the seed.

## 4. Fatal-error and major-repair report

Wave 13 repaired **one fatal mathematical defect**, in
`thm-jordan-boundary-criterion`. Three unique item ids received material
mathematical, citation, dependency, source, or source-provenance changes across
A4/A6. One additional item received a contract-only correction. No item was
deleted, renamed, removed, or reordered, and no page prose changed.

The table uses the build's defect groups and locations and distinguishes the
single fatal from major citation/source/contract corrections:

| defect type | location | severity | item and disposition |
|---|---|---|---|
| false/overstrong statement | Facts and proof | **fatal** | `thm-jordan-boundary-criterion`: the old `[L1]` falsely said a relative-domain indicator on an arbitrary bounding rectangle is discontinuous exactly on the ambient boundary; `E=Q=[0,1]^m` refutes it. A4 required `closure(E) subset int(Q)`, enlarged the bounding rectangle by a positive margin, and repaired step 1.1 before retaining the true theorem Statement. |
| incorrect/missing dependency citation | Facts/deps and proof step | major | `thm-lebesgue-criterion-in-rn`: the reciprocal-integer witness in step 6.1 had been attributed to oscillation sources that do not state it. A4 added `cor-archimedean-reciprocal`, isolated exact Fact `[L6]`, and cited it only at step 6.1. |
| incorrect/overstrong citation attribution | proof input accounting | major | `ex-geometric-power-series-and-an-interior-reexpansion`: two `[L2]` source mappings were unused, and a broad repair would have credited the sharp interval `|x-c|<1-c` to only local general re-expansion results. A4 limited `[L2]` to the qualitative claim and derived the full interval directly by geometric-series algebra. |
| incorrect source attribution | provenance/sources | major | `thm-jordan-boundary-criterion`: Lebl exactly supplies Jordan measurability iff ambient boundary null, but not the added compact-boundary content-zero equivalence or the enlarged-relative-domain proof. A6 preserved the live URLs and mathematics while correcting `literature-derived` / `exact-source` to `ai-altered` / `semantic-source`; the first Terra refusal remains append-only evidence and the exact-final recertification passed. |
| false contract disposition | proof-contract boundary worksheet | major, contract-only | `thm-jordan-content-and-indicator-integrability`: both iff directions falsely said `not_applicable` even though the Statement is an equivalence. A4 marked both `checked`, anchored to steps 1.1, 2.1, and 3.1. The item text, stamps, and A7 target scope did not change. |
| invalid inference | numbered proof step | none beyond the Jordan false-Fact failure above |
| missing hypothesis/choice scope | title/Statement/proof | none |
| invalid witness | example/counterexample | none |
| page prose/summary | page | none |

A7/A8 found no further fatal defect. The three substantive judge rejections
resolved as one confirmed nonfatal citation compression and two false
positives; R1 correctly licensed no A8 edit.

## 5. Reader, source, contract, spine, barrier, and impact closure

- Alpha read all 76 scoped items, all four pages, all 62 proof contracts, all
  488 current relationships, all 109 distinct outside dependency targets, all
  207 isolated impact consumers, all 59 current proof-bearing top-100 spine
  items, all 76 provenance rows, and every generated-risk, URL, and touch
  artifact without sampling.
- DeepSeek V4 Pro at `max` completed **56/56 exact-final adversarial routes**:
  52 high/critical proof routes plus the generated-risk and repair/source union.
  Every route was `CLEAN`; zero defects or unresolved routes remain. The
  current-hash risk receipt covers all 62 proof-bearing items: 29 critical, 23
  high, and ten moderate; every item is clean or Alpha-clean.
- GPT 5.6 Terra at `xhigh`/1M independently certified all three exact-final
  repair/source targets. Its first Jordan reading correctly returned `REFUSED`
  for the source overclaim; after the minimal provenance repair its exact-final
  reread returned `CERTIFIED`. The other two targets certified on their first
  final-text reading. All three carry current owner-delegated
  `verification.verified` stamps; no A8 stamp changed.
- Source closure is **17/17 distinct URLs accessible**, representing 115 URL
  associations on 75 rows. No URL-free waiver is used. The Jordan correction
  narrowed what the unchanged live Lebl source is credited with; it did not
  manufacture or replace a URL.
- Strict contracts pass **62/62**, with 212 numbered steps, 284 exact
  Fact/source mappings, and 496 boundary dispositions, zero errors and zero
  warnings. The merged and namespaced contract copies are synchronized.
- The proof spine passes **59/59** at scope SHA-256
  `c495826392ddb2bad8874d27b4407be2cf28dacfe1c6cc66dbc1d7c9b3034f5d`.
- Wave13-isolated impact closure passes **76 changed interfaces / 207
  consumers**, all `still-licensed`; no consumer was edited. A8's fatal-only
  window passes 0/0. The 123-interface raw shared window remains byte-honest
  and is not misdescribed as a Wave13-only receipt.
- Root's required repeated-material personal audit covered the sole Wave 13
  escalation, `thm-jordan-boundary-criterion`. It concurred that the theorem is
  valid and central, that dropping it would break downstream Jordan-content
  interfaces, and that the exact source/provenance correction is the complete
  remedy. The 47 other raw touch escalations belong to concurrent earlier-wave
  finalization and were not relabeled as Wave 13 work.

### Exact 24-edge Wave 11/12 frozen barrier

The final relationship census contains **488 exact relationships**: 289
published-backward and 199 same-batch; 487 dependency edges and one
well-definedness discharge. Alpha closed the mandatory barrier **24/24 exact**,
with zero stale, stronger-than-target, or misdirected relationships, after Wave
11 and Wave 12 reached their A9 mathematical/prose freezes.

The Wave 11 edge is:

- `cor-termwise-integration-of-a-real-power-series` -> `thm-ftc-first-part`.

The 23 Wave 12 edges are:

- `thm-power-series-uniform-on-compact-subintervals` -> `thm-weierstrass-m-test-for-function-series`;
- `thm-power-series-uniform-on-compact-subintervals` -> `def-series-of-real-functions`;
- `cor-power-series-sums-are-continuous` -> `thm-uniform-limit-continuous-real-functions`;
- `thm-termwise-differentiation-of-a-real-power-series` -> `thm-uniform-derivative-limit-on-a-closed-interval`;
- `cor-termwise-integration-of-a-real-power-series` -> `thm-uniform-limit-interchanges-riemann-integration`;
- `fs-power-series-uniform-on-its-open-interval` -> `thm-uniform-cauchy-criterion-real-functions`;
- `fs-power-series-uniform-on-its-open-interval` -> `def-pointwise-uniform-and-uniformly-cauchy-convergence`;
- `cex-geometric-power-series-not-uniform-on-its-open-interval` -> `def-pointwise-uniform-and-uniformly-cauchy-convergence`;
- `def-multidimensional-rectangle-and-volume` -> `def-p-norms-on-rn`;
- `def-multidimensional-grid-partition` -> `def-p-norms-on-rn`;
- `def-multidimensional-grid-partition` -> `lem-p-norms-are-norms-and-induce-the-published-metrics`;
- `cor-one-dimensional-and-multidimensional-riemann-agree` -> `lem-p-norms-are-norms-and-induce-the-published-metrics`;
- `thm-continuous-on-a-rectangle-is-riemann-integrable` -> `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`;
- `thm-continuous-on-a-rectangle-is-riemann-integrable` -> `lem-p-norms-are-norms-and-induce-the-published-metrics`;
- `cor-one-dimensional-null-and-content-zero-agree` -> `lem-p-norms-are-norms-and-induce-the-published-metrics`;
- `def-oscillation-in-rn` -> `lem-p-norms-are-norms-and-induce-the-published-metrics`;
- `lem-oscillation-characterisation-in-rn` -> `lem-p-norms-are-norms-and-induce-the-published-metrics`;
- `thm-lebesgue-criterion-in-rn` -> `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`;
- `def-jordan-inner-and-outer-content` -> `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`;
- `thm-lipschitz-images-of-null-sets-in-rn-are-null` -> `def-p-norms-on-rn`;
- `thm-lipschitz-images-of-null-sets-in-rn-are-null` -> `lem-p-norms-are-norms-and-induce-the-published-metrics`;
- `thm-lipschitz-images-of-null-sets-in-rn-are-null` -> `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`;
- `thm-graphs-of-continuous-functions-have-content-zero` -> `lem-p-norms-are-norms-and-induce-the-published-metrics`.

## 6. Exact judge comparison and append-only adjudications

The append-only A7 ledger has **12 rows** over exactly the three A4/A6 repair
targets. The first six are preserved transport-null rows: three DeepSeek
`NO_CONTENT: fetch failed` rows and three Terra `NO_CONTENT` rows from its
failed temporary runner. Their attempt evidence records three failed attempts
per target per lane before the successful host rerun. They are transport
history, not mathematical verdicts, and were neither erased nor adjudicated.

The six substantive rows are complete at matching frozen contexts:

| latest substantive outcome | items |
|---|---:|
| both pass | 1 |
| both reject | 1 |
| DeepSeek-only reject | 1 |
| Terra-only reject | 0 |
| incomplete/null | 0 |

- Both pass: `ex-geometric-power-series-and-an-interior-reexpansion`.
- Both reject: `thm-lebesgue-criterion-in-rn`.
- DeepSeek-only reject: `thm-jordan-boundary-criterion`.

Per-lane append-only counts, including the preserved null rows, are:

| model | ledger rows | pass | reject | transport null |
|---|---:|---:|---:|---:|
| DeepSeek V4 Pro | 6 | 1 | 2 | 3 |
| GPT 5.6 Terra | 6 | 2 | 1 | 3 |

All **three** exact `(id, model, context)` rejection candidates are
hash-bound and adjudicated; zero is unadjudicated:

1. `thm-jordan-boundary-criterion` / DeepSeek — `false_positive`. The cited
   boundary definition gives the every-ball-meets-both-sides characterization,
   and `[L1]` explicitly supplies the relative-domain derivation after putting
   `closure(E)` inside `int(Q)`.
2. `thm-lebesgue-criterion-in-rn` / Terra — `confirmed_nonfatal`. `[L2]`
   compresses only compact-null-implies-content-zero while step 3.2 also uses
   the reverse direction, but the already-declared
   `def-null-and-content-zero-in-rn` states the finite-cover padding argument
   directly. The gap closes inside the binding thirty-second threshold, so R1
   forbade an edit.
3. `thm-lebesgue-criterion-in-rn` / DeepSeek — `false_positive`. Steps 2.2 and
   3.2 explicitly include the degenerate pieces of the partition hyperplanes,
   cover them below `eta/2`, and combine them with the high-oscillation cells'
   `eta/2` budget.

Thus DeepSeek's two rejection candidates resolve to two false positives;
Terra's one resolves to one confirmed nonfatal. Neither lane has a
judge-confirmed fatal detection in this post-repair A7 surface. A8 consequently
changed and rejudged **zero items**; the Step-8 guard passes with zero changed,
created, or deleted items.

## 7. Coverage receipt

`research/audit/wave13-coverage.json` binds manifest SHA-256
`94a008e95c960eb25f670f2da56aa3a94b410e91ac23e5669bc7b1bb5203dd36`
and attests:

- 76/76 scoped items and 62/62 proof-bearing items;
- 488/488 final relationships;
- 24/24 frozen Wave13-to-Wave11/Wave12 barrier edges;
- 3/3 exact repair/source judge targets with matching DeepSeek/Terra pairs;
- 3/3 exact rejection candidates adjudicated;
- strict contracts 62/62 and proof spine 59/59;
- Wave13-isolated A6 impact closure 76/207 and fatal-only A8 impact closure
  0/0, with no unresolved Wave 13 consumer.

The current A10 `level-coverage.mjs` gate passes. Its output contains exactly
three warning lines for the exact adjudicated nonfatal/false-positive evidence
and zero coverage errors. Historical transport-null rows do not displace the
later complete current-context pairs.

## 8. Owner queue and delegated-restatement record

Wave 13 proposes **no deletion, id rename/removal, or structural reading-order
change**. The narrowed structural owner queue is empty.

The complete delegated debatable-restatement and adjudication record remains
inspectable:

- A3 amended the Jordan repair to require an enlarged rectangle with
  `closure(E) subset int(Q)`, amended Lebesgue's reciprocal witness into a
  separate exact `[L6]`, and restricted the geometric example's general
  re-expansion sources to a qualitative role while retaining the sharper direct
  calculation.
- A3 also corrected four false iff boundary dispositions across the Jordan
  boundary and Jordan-indicator contracts without changing the latter item.
- A6 accepted the independent source refusal and narrowed the Jordan theorem's
  attribution from exact-source/literature-derived to
  semantic-source/ai-altered while preserving its valid Statement and proof.
- A8 retained the Lebesgue citation compression as exact-hash nonfatal debt
  under the binding thirty-second/R1 rule and refuted the other two rejection
  candidates from the cited text. It made no repair or rejudge target.
- A9 reread all three repaired items in full, plus the dependency text relevant
  to the two rejected items. It found no scope denial, published-claim decay,
  stale planned-page claim, page defect, or owner-only structural proposal and
  made no edit or judge call.

The earlier external/shared four-id Wave 14 depcheck pause condition in section
1 is now cleared. The final quiescent-worktree A10 suite passes 9/9. No A11,
commit, push, or publication action is authorized here.
