# Audit-Beta findings — wave 7, real-analysis-completeness-limits

## A1/A2 handoff

Audit-Beta completed A1 and A2 on 2026-08-08. The scope of record is
`wave7-real-analysis-completeness-limits.pages.json`, SHA-256
`2656605bdb08460c67159b564e59b06acfcc76794726815317c9511a531de4e4`:
four published pages, two A/B pairs, and 64 mathematical-content items.
The page/item split is 21/10 for `equivalent-forms-of-completeness` and its
companion, and 21/12 for `limits-of-real-functions` and its companion.

No published page or item has been edited. A4 is awaiting A3 approval. The only
writes are this file, the namespaced provenance ledger, and the namespaced proof
contracts.

Coverage is complete. I read both A-page summaries, both B pages, all 64 scoped
items, all 404 numbered proof steps in the 55 proof-bearing items, all 339
labelled Facts, all 698 distinct Fact-to-target citation contracts, and the
mathematical source section of each of the 116 distinct dependency targets. I
also checked the 770 relationships reported by `audit-manifest.mjs` (635
published-backward, 126 same-batch, and nine declared forward references). There
is no unread proof step or dependency citation.

Apart from the findings below, the statements and proofs are mathematically
sound. In particular, the completeness cycle, the Cesaro and
Silverman--Toeplitz arguments, both forms of Stolz--Cesaro, and the direct
function-limit toolkit survived the skeptical pass.

## A1 provenance census

The 64 ledger rows divide as follows.

| Statement provenance and evidence | Count |
|---|---:|
| `literature-derived` / `exact-source` | 12 |
| `ai-altered` / `semantic-source` | 40 |
| `ai-altered` / `established-knowledge` | 2 |
| `ai-generated` / `none` | 3 |
| `ai-generated` / `trivial` | 7 |

Proof provenance is 54 `ai-generated`, one `ai-altered`, and nine
`not-applicable`. The ledger uses 23 distinct source URLs; every recorded URL
was opened successfully and returned HTTP 200 during A1. Exact clauses,
convention deltas, novelty determinations, and elementary verifications are in
the corresponding ledger rationales.

Every item and evidence class is reported here; the full URL list and rationale
for each row are in
`wave7-real-analysis-completeness-limits.provenance.jsonl`.

| Item | Statement / evidence | Proof |
|---|---|---|
| `def-completeness-properties` | `ai-altered` / `semantic-source` | `not-applicable` |
| `lem-of-sequence-basics` | `ai-altered` / `semantic-source` | `ai-generated` |
| `lem-lub-implies-nested-intervals` | `ai-altered` / `semantic-source` | `ai-generated` |
| `lem-nested-intervals-and-archimedean-imply-bw` | `ai-altered` / `semantic-source` | `ai-generated` |
| `lem-bw-implies-archimedean` | `ai-altered` / `semantic-source` | `ai-generated` |
| `lem-bw-implies-cauchy-complete` | `ai-altered` / `semantic-source` | `ai-generated` |
| `lem-cauchy-complete-and-archimedean-imply-mct` | `ai-altered` / `semantic-source` | `ai-generated` |
| `lem-mct-implies-archimedean` | `ai-altered` / `semantic-source` | `ai-generated` |
| `lem-mct-implies-lub` | `ai-altered` / `semantic-source` | `ai-generated` |
| `thm-completeness-equivalences` | `ai-altered` / `semantic-source` | `ai-generated` |
| `def-cesaro-mean` | `literature-derived` / `exact-source` | `not-applicable` |
| `thm-cesaro-mean-theorem` | `literature-derived` / `exact-source` | `ai-generated` |
| `thm-stolz-cesaro` | `ai-altered` / `semantic-source` | `ai-generated` |
| `cor-stolz-cesaro-zero-over-zero` | `ai-altered` / `semantic-source` | `ai-generated` |
| `def-summability-matrix` | `ai-altered` / `semantic-source` | `not-applicable` |
| `thm-silverman-toeplitz` | `ai-altered` / `semantic-source` | `ai-generated` |
| `cor-cesaro-matrix-is-regular` | `ai-altered` / `semantic-source` | `ai-generated` |
| `rem-where-the-archimedean-hypothesis-is-needed` | `ai-generated` / `none` | `not-applicable` |
| `fs-nested-intervals-implies-lub` | `ai-altered` / `semantic-source` | `ai-generated` |
| `fs-cauchy-complete-implies-lub` | `ai-altered` / `semantic-source` | `ai-generated` |
| `fs-cesaro-converse` | `ai-altered` / `semantic-source` | `ai-generated` |
| `ex-rational-function-field-order` | `literature-derived` / `exact-source` | `ai-generated` |
| `ex-field-ordered-in-two-ways` | `ai-altered` / `established-knowledge` | `ai-generated` |
| `ex-cauchy-complete-not-complete-field` | `ai-generated` / `none` | `ai-generated` |
| `ex-cesaro-means-of-alternating` | `ai-altered` / `semantic-source` | `ai-generated` |
| `ex-stolz-cesaro-applied` | `ai-altered` / `semantic-source` | `ai-generated` |
| `cex-q-not-dense-in-an-ordered-field` | `ai-altered` / `semantic-source` | `ai-generated` |
| `cex-evt-and-ivt-fail-over-a-non-complete-field` | `ai-altered` / `established-knowledge` | `ai-generated` |
| `cex-rolle-fails-over-a-non-complete-field` | `ai-generated` / `trivial` | `ai-generated` |
| `cex-stolz-cesaro-converse-fails` | `ai-generated` / `trivial` | `ai-generated` |
| `cex-irregular-summability-matrix` | `ai-generated` / `trivial` | `ai-generated` |
| `def-function-limit` | `literature-derived` / `exact-source` | `not-applicable` |
| `lem-function-limit-unique` | `literature-derived` / `exact-source` | `ai-generated` |
| `lem-limit-is-local` | `ai-altered` / `semantic-source` | `ai-generated` |
| `def-one-sided-limits` | `ai-altered` / `semantic-source` | `not-applicable` |
| `def-limits-at-infinity` | `ai-altered` / `semantic-source` | `not-applicable` |
| `thm-sequential-criterion-for-function-limits` | `literature-derived` / `exact-source` | `ai-altered` |
| `cor-sequential-criterion-for-nonexistence` | `ai-altered` / `semantic-source` | `ai-generated` |
| `lem-limit-implies-local-boundedness` | `literature-derived` / `exact-source` | `ai-generated` |
| `lem-sign-preservation-near-a-limit` | `ai-altered` / `semantic-source` | `ai-generated` |
| `thm-algebra-of-function-limits` | `literature-derived` / `exact-source` | `ai-generated` |
| `lem-function-limit-preserves-order` | `literature-derived` / `exact-source` | `ai-generated` |
| `thm-squeeze-for-function-limits` | `literature-derived` / `exact-source` | `ai-generated` |
| `thm-two-sided-limit-iff-both-one-sided` | `literature-derived` / `exact-source` | `ai-generated` |
| `thm-composition-of-function-limits` | `ai-altered` / `semantic-source` | `ai-generated` |
| `lem-integer-part` | `literature-derived` / `exact-source` | `ai-generated` |
| `rem-heine-criterion-choice-cost` | `ai-altered` / `semantic-source` | `not-applicable` |
| `fs-limit-equals-value` | `ai-altered` / `semantic-source` | `ai-generated` |
| `fs-naive-composition-of-limits` | `ai-altered` / `semantic-source` | `ai-generated` |
| `fs-limit-unique-at-every-point-of-the-domain` | `ai-altered` / `semantic-source` | `ai-generated` |
| `fs-function-limit-preserves-strict-inequality` | `ai-altered` / `semantic-source` | `ai-generated` |
| `fs-limit-exists-implies-bounded-on-the-domain` | `ai-altered` / `semantic-source` | `ai-generated` |
| `rem-classical-oscillator-is-sine-of-one-over-x` | `ai-generated` / `none` | `not-applicable` |
| `ex-limit-of-a-polynomial` | `ai-altered` / `semantic-source` | `ai-generated` |
| `ex-distance-to-the-integers` | `ai-altered` / `semantic-source` | `ai-generated` |
| `ex-x-times-psi-tends-to-zero` | `ai-generated` / `trivial` | `ai-generated` |
| `ex-one-sided-limits-of-the-sign-function` | `ai-altered` / `semantic-source` | `ai-generated` |
| `ex-limit-at-infinity-of-a-rational-function` | `ai-generated` / `trivial` | `ai-generated` |
| `cex-psi-of-one-over-x-has-no-limit-at-zero` | `ai-generated` / `trivial` | `ai-generated` |
| `cex-limit-differs-from-the-value` | `ai-altered` / `semantic-source` | `ai-generated` |
| `cex-composition-of-limits-fails` | `ai-altered` / `semantic-source` | `ai-generated` |
| `cex-dirichlet-has-no-limit-anywhere` | `ai-altered` / `semantic-source` | `ai-generated` |
| `ex-x-times-dirichlet-has-a-limit-only-at-zero` | `ai-altered` / `semantic-source` | `ai-generated` |
| `cex-limit-not-unique-at-an-isolated-point` | `ai-generated` / `trivial` | `ai-generated` |

### Alpha concurrence required

Two `established-knowledge` rows remain deliberately non-final with
`alpha_concurred: false`.

- `ex-field-ordered-in-two-ways`: the two orders on
  `Q(sqrt(2))` induced by the two real embeddings are standard algebra, and the
  local proof shows that these are the only two, but no allowed reputable source
  surfaced for the complete local package.

- `cex-evt-and-ivt-fail-over-a-non-complete-field`: failure of IVT and EVT over
  `Q` through the missing root `sqrt(2)`, including the unbounded reciprocal and
  unattained-extremum witnesses, is standard, but no allowed source stated this
  exact three-function package.

Until Alpha independently concurs and changes those two ledger booleans to
`true`, neither row is eligible for an `established-knowledge` retag at A4. If
Alpha does not concur, the classification remains unresolved rather than
falling to either a sourced label or `ai-generated`.

### Positive novelty and truth-risk checks

The three `ai-generated` / `none` determinations are positive, not failed
search defaults. `rem-where-the-archimedean-hypothesis-is-needed` and
`rem-classical-oscillator-is-sine-of-one-over-x` are repository-specific scope
maps. `ex-cauchy-complete-not-complete-field` is a bespoke inventory of this
library's Laurent-field results. For its unsourced unrestricted-interval row I
independently checked the displayed construction: for
`a_n = n t^(-1)` and `b_n = 1/(n+1)`, nesting is immediate; a common point would
have valuation at least one from all upper bounds and below one from all lower
bounds, which is impossible. Its citation is nevertheless ineligible, as
finding 7 records.

The seven `trivial` determinations each have a written direct verification in
the ledger. Counterexample-specific doubt was resolved by recomputing the
witness, not by treating absence of a source as evidence of novelty.

## A2 defects and A3 proposals

### 1. The completeness theorem title attaches ARCH to MCT

Item: `thm-completeness-equivalences`. Class: **(a) unambiguous falsehood**.

Old:

> For an ordered field the five completeness properties are equivalent,
> provided the Archimedean property is assumed alongside monotone convergence,
> nested intervals and Cauchy completeness

Proposed:

> For an ordered field the five completeness properties are equivalent,
> provided the Archimedean property is assumed alongside nested intervals and
> Cauchy completeness

The theorem's own clauses are `(LUB)`, `(ARCH)+(NIP)`, `(BW)`,
`(ARCH)+(CC)`, and `(MCT)`. Moreover `lem-mct-implies-archimedean` proves
`(MCT) => (ARCH)`. Thus ARCH is neither stated nor needed alongside MCT.

### 2. A weaker antecedent is called harder to refute

Item: `fs-nested-intervals-implies-lub`. Class: **(a) unambiguous falsehood**.

Old:

> which is the weaker hypothesis and therefore the harder claim to refute

Proposed:

> which is the weaker hypothesis and therefore makes the implication stronger

If `P_weak` is weaker than `P_strong`, then `P_weak => Q` makes a claim about
more structures and is easier, not harder, to refute. The proposed wording
preserves the intended point that the shrinking-NIP counterexample disproves
the stronger implication.

### 3. The eventual-sign order at positive infinity is not unique

Item: `ex-rational-function-field-order`. Class: **(a) unambiguous
falsehood**.

Old:

> The behaviour at +infinity is the unique choice that is representative
> independent and multiplicative

Proposed:

> The behaviour at +infinity is one representative-independent,
> multiplicative choice

Evaluation of eventual sign at negative infinity gives another such order. In
coordinates it is obtained from the displayed positive-infinity cone by the
field automorphism `t |-> -t`; representative independence, closure under
products, and trichotomy are preserved by that automorphism, while the two
orders disagree on the sign of `t`. Hence uniqueness is false.

### 4. The isolated-point Remark omits the no-limit case

Item: `cex-limit-not-unique-at-an-isolated-point`. Class: **(a) unambiguous
falsehood**.

Old:

> a point of the domain either admits a unique limit or admits every real as a
> solution of the formula, with no third possibility

Proposed:

> at a limit point of the domain the formula has at most one solution, while at
> an isolated point every real solves it

`lem-function-limit-unique` proves only *at most* one value at a limit point;
existence can fail. For example, the in-scope Dirichlet function has no limit at
any real point, so “no limit” is the missing third case.

### 5. The composition safeguards cannot both be omitted, but either one may
remain

Items: `thm-composition-of-function-limits` and
`cex-composition-of-limits-fails`. Class: **(a) unambiguous falsehood**, with a
paired precision repair.

The theorem currently says:

> Neither extra hypothesis may be dropped. With both omitted the statement is
> false.

Proposed:

> At least one extra hypothesis is necessary. With both omitted the statement
> is false.

Counterexample step 5.1 currently says:

> So the extra hypotheses of the true theorem are not removable

Proposed:

> So the two safeguards in the true theorem cannot both be omitted

The theorem assumes `(i) or (ii)`. Requiring only (i) is sufficient, and
requiring only (ii) is sufficient, so either alternative can be removed from
the disjunction. The witness establishes only that both cannot be removed at
once; indeed step 4.2 explicitly checks that both fail for the bad composite.

### 6. Heine's Fact L3 has no using proof step

Item: `thm-sequential-criterion-for-function-limits`. Class: **(b)
citation-precision repair**.

Current step 1.1 ends with `[assume-hyp, L1, L2]`. Proposed citation list:
`[assume-hyp, L1, L2, L3]`. L3 is the standing limit-point condition that makes
condition 1 a well-posed invocation of `def-function-limit`. This is the
smallest truthful use of the otherwise redundant Fact and contracts both of
L3's source links. The strict gate currently reports one `citation-uses` error
for each of `def-limit-point-r` and `def-neighbourhood-r`.

### 7. Local boundedness cites an undeclared ordered-field dependency

Item: `lem-limit-implies-local-boundedness`. Class: **(b)
citation-precision repair**.

Fact L4 invokes `def-ordered-field` for totality and for the equality case that
extends strict order compatibility to non-strict compatibility, but that target
is absent from `deps` and `justified_by`. Add `def-ordered-field` to `deps`.
The target is a legal earlier dependency and its cited clause supplies exactly
the order fact claimed.

### 8. Three scoped items rely on an `ai-generated` counterexample

Target: `cex-laurent-nested-intervals-empty`, whose audited
`provenance.statement` is `ai-generated`. Class: **(b) citation-precision and
dependency-eligibility repair**, requiring the owner-only deletion/rewrite
queue.

The affected item uses are:

- `def-completeness-properties`, Remark: a body-only citation asserting failure
  of unrestricted nested intervals in the Laurent field;

- `fs-nested-intervals-implies-lub`: a declared dependency and Statement
  citation for the same ancillary claim; and

- `ex-cauchy-complete-not-complete-field`: a declared dependency, a table row,
  Fact L5, and proof step 1.5 asserting that ancillary claim.

The first A-page summary cites the same target for the same claim. The explicit
construction is correct by the valuation calculation recorded above, but an
`ai-generated` target is not eligible to establish another item's statement or
proof. `proof-contract.mjs --strict` exposes the proof-bearing use in
`ex-cauchy-complete-not-complete-field`; the manual Remarks/summary pass exposes
the other uses.

The smallest clean repair is to remove the ancillary unrestricted-NIP claims
from these scoped consumers, while retaining the source-backed facts actually
needed: `cor-laurent-nested-intervals` proves shrinking NIP and
`cor-laurent-not-lub-complete` proves failure of LUB. Concretely:

- rewrite the `def-completeness-properties` Remark and the A-page paragraph to
  say that shrinking NIP is the form both satisfied by the Laurent field and
  used by the bisection theorem, without asserting unrestricted failure;

- in `fs-nested-intervals-implies-lub`, keep only the corrected sentence from
  finding 2 and remove `cex-laurent-nested-intervals-empty` from `deps`; and

- in `ex-cauchy-complete-not-complete-field`, remove the unrestricted-NIP table
  row and half-clause in L5, remove its contribution from step 1.5, and remove
  the target from `deps`.

Because those operations delete published claims and a dependency, the brief
reserves them to the owner and they belong in the A10 queue unless the owner
gives a specific amendment. Audit-Beta will not perform them under ordinary A3
approval.

### 9. A Remark will acquire two generated-statement dependency edges at retag

Item: `rem-classical-oscillator-is-sine-of-one-over-x`. Targets:
`cex-psi-of-one-over-x-has-no-limit-at-zero` and
`ex-x-times-psi-tends-to-zero`, both classified `ai-generated` in this batch.
Class: **(b) dependency-eligibility repair**, requiring the owner-only
dependency-deletion queue.

The two targets currently occur in `deps`, although the Remark's own prose says
that the links are orientation to the examples proved later on the same page.
Once A4 writes the target provenance tags, those edges will be dependencies on
generated statements. Move the two ids from `deps` to `forward_refs`; keep
`ex-distance-to-the-integers` and `lem-integer-part` as the actual mathematical
dependencies. This matches the prose and changes no mathematical assertion,
but removing dependency edges is owner-only under the brief, so Audit-Beta does
not include it in ordinary A4.

## Recorded non-fatal page/prose decay

Per the standing triage rule, these are recorded and not chased.

- `rem-classical-oscillator-is-sine-of-one-over-x` says that order, absolute
  value, and integer part are not defined in the library yet. On the current
  published page, order and absolute value are prerequisites and
  `lem-integer-part` is an earlier item. This is stale corpus-scope prose, not a
  defect in the oscillator construction.

- Both A-page bodies substantially exceed the canonical two-paragraph summary
  shape. Their mathematical descriptions were nevertheless read and checked;
  no additional fatal mathematical statement was found beyond the generated
  counterexample citation in finding 8.

## Proof-contract and local gate results

`wave7-real-analysis-completeness-limits.proof-contracts.json` contains all 55
proof-bearing items: 698 citation contracts with exact on-disk source clauses,
an input map that covers all 404 numbered steps exactly once, 404 derivation
records, and 440 boundary dispositions (eight per item).

The current pre-A4 gates are:

- `content-policy.mjs --audit --manifest-only`: **0 errors, 0 warnings, 64/64**;
- `audit-manifest.mjs`: **exit 0**, with 770 relationships reconciled;
- `finite-smoke.mjs`: **0 errors** (no finite-smoke obligations in this batch);
- `risk-report.mjs`: **0 errors, 55 items routed**; and
- `proof-contract.mjs --strict`: **four errors, zero warnings, 55/55 checked**.

The four strict-contract errors are intentionally unrepaired A2 findings: one
`citation-ai-generated-statement` at
`ex-cauchy-complete-not-complete-field` L5; two `citation-uses` errors for the
two targets cited by Heine Fact L3; and one `citation-undeclared-dependency` for
`lem-limit-implies-local-boundedness` L4. There are no unexplained contract
errors.

## State at the A2 handoff

At this handoff, A1 classification was complete except for the two required
Alpha concurrence decisions, and A2 coverage was complete with no exceptions.
No repair, provenance frontmatter, source reference, legacy-authorship
deletion, judge deletion, or audit-stamp deletion had yet been applied. The A4
record below supersedes this pre-A3 state. Findings 8 and 9 remain owner-only.

## A4 applied — 2026-08-09

The A3 receipt approved eight material repairs and 60 provenance applications.
Each material item received its own pre-edit touchlog snapshot:
`pre-A4-thm-completeness-equivalences`,
`pre-A4-fs-nested-intervals-implies-lub`,
`pre-A4-ex-rational-function-field-order`,
`pre-A4-cex-limit-not-unique-at-an-isolated-point`,
`pre-A4-thm-composition-of-function-limits`,
`pre-A4-cex-composition-of-limits-fails`,
`pre-A4-thm-sequential-criterion-for-function-limits`, and
`pre-A4-lem-limit-implies-local-boundedness`. The orchestrator's stage-level
`pre-A4` snapshot already bracketed the bulk pass; its matching `post-A4`
snapshot remains an orchestrator action after all four Betas return.

### Provenance application

For each of the 60 approved rows, the old item had no `provenance` block and
the new item has the exact statement/proof pair recorded for that id in
`wave7-real-analysis-completeness-limits.provenance.jsonl`. Six generated
examples or counterexamples also received the required `generation.role`.
Forty-one items received a missing evidence reference, using the title and URL
supporting their ledger row. The ledger itself remains exhaustive at 64 rows.

The A3 override for `ex-rational-function-field-order` was applied: its old
proposed Wikipedia evidence URL was replaced in the ledger by D. J. Eck's
exact rational-function-field source, and that source was added to the item.
The pre-existing Wikipedia reference was retained because A3 did not authorize
source deletion.

Exactly four items remain wholly untagged:

- `ex-field-ordered-in-two-ways` and
  `cex-evt-and-ivt-fail-over-a-non-complete-field`, pending Alpha's independent
  concurrence with their `established-knowledge` determinations; and
- `ex-x-times-psi-tends-to-zero` and
  `cex-psi-of-one-over-x-has-no-limit-at-zero`, pending the owner-only movement
  of their current dependency edges to `forward_refs` in
  `rem-classical-oscillator-is-sine-of-one-over-x`.

No scoped item had a legacy `authorship` key to delete. Pure retags preserved
their pre-existing verification records.

### Material repairs

1. `thm-completeness-equivalences`, class **(a), unambiguous falsehood**.
   The old title required the Archimedean property alongside monotone
   convergence, nested intervals, and Cauchy completeness. The new title
   requires it only alongside nested intervals and Cauchy completeness. This
   is licensed by the theorem's five displayed clauses and by
   `lem-mct-implies-archimedean`, which proves that MCT already implies the
   Archimedean property.

2. `fs-nested-intervals-implies-lub`, class **(a), unambiguous falsehood**.
   The old sentence called the weaker hypothesis “the harder claim to refute.”
   The new sentence says that the weaker hypothesis “makes the implication
   stronger.” If `P_weak` holds in more structures than `P_strong`, then
   `P_weak => Q` asserts `Q` in more structures and is correspondingly easier
   to refute.

3. `ex-rational-function-field-order`, class **(a), unambiguous falsehood**.
   The old Remark called eventual positivity at positive infinity “the unique
   choice that is representative independent and multiplicative.” The new
   Remark calls it “one representative-independent, multiplicative choice.”
   Composing the order with the field automorphism `t |-> -t` gives the
   negative-infinity order, which reverses the sign of `t` and disproves
   uniqueness.

4. `cex-limit-not-unique-at-an-isolated-point`, class **(a), unambiguous
   falsehood**. The old Remark asserted that every domain point either admits a
   unique limit or admits every real, with no third possibility. The new text
   says exactly that at a limit point the formula has at most one solution,
   while at an isolated point every real solves it. The local Dirichlet example
   supplies the omitted third case: a limit point at which no limit exists.

5. `thm-composition-of-function-limits`, class **(a), unambiguous falsehood**.
   The old sentence said “Neither extra hypothesis may be dropped.” The new
   sentence says “At least one extra hypothesis is necessary.” The theorem is
   explicitly disjunctive: either safeguard is sufficient, while the cited
   counterexample only shows failure when both are absent.

6. `cex-composition-of-limits-fails`, class **(a), unambiguous falsehood**.
   The old conclusion said the theorem's extra hypotheses “are not removable.”
   The new conclusion says its two safeguards “cannot both be omitted.” This
   is the exact conclusion established by the example, in which both
   safeguards fail simultaneously.

7. `thm-sequential-criterion-for-function-limits`, class **(b),
   citation-precision repair**. Step 1.1 previously cited only `assume-hyp`, L1,
   and L2. It now also cites L3. L3 supplies the standing assertion that `c` is
   a limit point of `A`, which licenses use of the punctured epsilon-delta
   definition. Both L3 source contracts and the step input map were updated to
   record that use.

8. `lem-limit-implies-local-boundedness`, class **(b), citation-precision
   repair**. The old dependency list omitted `def-ordered-field`; the new list
   adds it. Fact L4 uses that target's totality clause and the equality case
   needed to pass from strict to non-strict order compatibility.

For each of these eight material repairs, the stale `verification.judge` block
and obsolete `verification.audited` stamp were deleted. No other scoped item
lost either field. Reflow changed only soft wrapping in the Remarks of
`thm-completeness-equivalences`, `fs-nested-intervals-implies-lub`, and
`ex-rational-function-field-order`; it changed no further mathematical text.

The proof-contract clauses citing the repaired composition theorem were also
updated to quote its new sentence exactly. This is contract synchronization,
not a separate mathematical repair.

### A4 verification and unresolved work

`reflow.mts` and `precheck.mts` were run on all eight material items. Every
precheck passed. `rendercheck.mjs` passed all 64 scoped items with clean YAML,
KaTeX, and wikilinks, and `citecheck.mjs` passed all 64 with no heuristic
warnings. `finite-smoke.mjs` reports zero errors, and `risk-report.mjs` reports
zero errors with all 55 proof-bearing items routed. The post-edit
`audit-manifest.mjs` run exits zero and reconciles 771 relationships: 636
published-backward, 126 same-batch, and nine forward. The one added
published-backward edge is the approved `def-ordered-field` dependency.

The strict proof-contract gate now checks 55/55 items with zero warnings and
one expected error: L5 of `ex-cauchy-complete-not-complete-field` cites the
`ai-generated` Statement of `cex-laurent-nested-intervals-empty`. That is the
owner-only dependency repair in finding 8; the other three pre-A4 contract
errors were closed.

The audit content-policy gate reports 18 expected errors, all caused by the
four deliberately untagged A3 deferrals, and four warnings: two
`generated-kind` warnings for the generated Remarks, plus the two recorded
dependencies on the generated Laurent counterexample. The full dependency
gate reports the eight material items as `published-unaudited`, as required
after stale certification was removed and before A6. Its wave-wide output
currently contains ten further `published-unaudited` items owned by sibling
batches; no new hard dependency topology error was introduced by the added
`def-ordered-field` edge.

The official `audit-split.mjs` helper could not launch its internal `/bin/sh`
from this sandbox (`spawnSync ... EPERM`), so no permission escalation was
requested. Replaying the same field-aware comparison outside its nested shell
classified all 60 changed scoped items as exactly 52 pure retags and the eight
material items named above, with no unknown frontmatter change. The
orchestrator should rerun the official helper at A6.

Findings 8 and 9 remain unapplied and queued for the owner. The two
`established-knowledge` rows still require Alpha concurrence, and the two
oscillator-example tags still depend on the owner-only edge move. Audit-Beta
has not certified any of its material repairs.

A2 coverage remains complete with no exception: every one of the 404 numbered
proof steps, every Fact citation, and every dependency citation in the two
owned A/B pairs was read. A4 applied every repair and provenance decision that
A3 authorized, and no declined or deferred operation was applied.

## A4 recovery after the gate amendment — 2026-08-09

The two Alpha-concurred D2 rows were transcribed without changing mathematical
text: `ex-field-ordered-in-two-ways` and
`cex-evt-and-ivt-fail-over-a-non-complete-field` now carry
`ai-altered` Statement and `ai-generated` proof provenance. Their existing
`verification.judge` and `verification.audited` fields were preserved. The two
generated oscillator targets, `ex-x-times-psi-tends-to-zero` and
`cex-psi-of-one-over-x-has-no-limit-at-zero`, now carry the ledgered
`ai-generated` Statement and proof provenance and their respective `example`
and `counterexample` generation roles. These were also pure transcriptions, so
their existing verification fields were preserved.

The corrected completeness repair was applied to
`def-completeness-properties`, `fs-nested-intervals-implies-lub`, and
`ex-cauchy-complete-not-complete-field`, and to page
`equivalent-forms-of-completeness`. The unsupported ancillary claims about the
unrestricted nested-interval property and every citation from these consumers
to `cex-laurent-nested-intervals-empty` were removed. The shrinking-NIP claim
licensed by `cor-laurent-nested-intervals`, the non-LUB claim licensed by
`cor-laurent-not-lub-complete`, and the bisection use of shrinking NIP were
preserved. The provenance-ledger rationale and the full proof contract for
`ex-cauchy-complete-not-complete-field` were synchronized: L5 now has only the
shrinking-NIP source, step 1.5 asserts only shrinking NIP, and the endpoint
boundary evidence says the same.

Generated-target containment was applied to
`rem-classical-oscillator-is-sine-of-one-over-x`: the two same-page generated
examples were removed from `deps`, while the ordinary same-page links in the
Remark were retained. The amendment's literal instruction to put those ids in
`forward_refs` is mechanically invalid under the repository schema:
`fwdcheck.mjs` reports `forward-same-page` for each, because `forward_refs` is
reserved for later-page targets. Leaving them as ordinary same-page links
implements the approved orientation-only containment and passes the hard
forward-reference gate; the two genuinely later sine examples remain in
`forward_refs` unchanged.

The four materially edited items are exactly
`def-completeness-properties`, `fs-nested-intervals-implies-lub`,
`ex-cauchy-complete-not-complete-field`, and
`rem-classical-oscillator-is-sine-of-one-over-x`. Their stale
`verification.judge` and obsolete `verification.audited` fields were removed.
No verification field was removed from a pure transcription. No touch
snapshot, judge or judge-ledger operation, impact/genrisk disposition, or A6
certification was performed.

`reflow.mts` and `precheck.mts` passed the changed proof items. The final gates
report:

- `proof-contract.mjs --strict`: 55/55 items, zero errors and zero warnings;
- `content-policy.mjs --audit`: 64 scoped items, zero errors and the two
  expected legacy `generated-kind` warnings;
- `finite-smoke.mjs`: zero errors; `risk-report.mjs`: zero errors, 55 items
  routed;
- `audit-manifest.mjs`: exit zero, 767 relationships reconciled (634
  published-backward, 124 same-batch, nine forward);
- `fwdcheck.mjs`, `citecheck.mjs`, `rendercheck.mjs`, `depsource.mjs`, and
  `extcheck.mjs`: pass; the edited A-page also has zero `prosecheck.mjs`
  errors, with its two pre-existing heuristic warnings;
- contracts JSON, manifest JSON, and all provenance JSONL rows parse; and
- `git diff --check`: pass.

The repository-wide `depcheck.mjs` has no new dependency-topology error. It
exits nonzero only for 39 `published-unaudited` items awaiting A6 across the
dirty Wave 7 tree, including the four material items named above, exactly as
required after stale certification removal. Every corrected decision for this
batch is closed, with no unresolved mathematical or contract concern.

## A6 Alpha certification adjudications — 2026-08-09

The independent current-text Terra certification sweep returned two fatal
findings in this batch and Alpha confirmed both from disk.

1. `ex-rational-function-field-order`: the repaired uniqueness sentence was
   correct, but the first Remark's separate claim that point evaluation makes
   $t$ and $t-1$ incomparable was false—their difference is the constant $1$.
   Alpha replaced that sentence with the exact obstruction: evaluation can be
   undefined at a pole, and the nonzero function $t-x_0$ evaluates to zero, so
   an evaluation-sign rule fails trichotomy. The current normalized hash is
   `9cdd2dabbcf8367cedd558f4fd65d2f6f98bf138c6791387583408e50625683c`.
2. `lem-limit-implies-local-boundedness`: the proof and A4 dependency repair
   are correct, but the `exact-source` provenance row falsely said Lebl §3.1
   states the local-boundedness lemma and $|L|+1$ estimate. Alpha independently
   checked the live source, refused that attribution, retagged the Statement
   `ai-altered`, and appended a superseding `established-knowledge` row with
   `alpha_concurred: true`. The standard theorem is proved directly on disk by
   the $\varepsilon=1$ estimate. The current normalized hash is
   `a8dc582edcf5b4d953fca347e65dfc74e6b0cc220385c526c38794d8cb656d85`.

Both final-text independent rereads are pending after non-inference transport
failures. No verification stamp has been written for either repaired text.
Targeted precheck, rendercheck, citecheck, prosecheck, depsource, audit
content-policy, impact-audit, and `git diff --check` all pass.
