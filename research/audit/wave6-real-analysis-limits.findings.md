# Audit-Beta findings — wave 6, real-analysis-limits

Written 2026-08-08 against manifest SHA-256
8b46442e646da1abde163d643f66b9799b511ca994ecd81003f2d4d25ffeeddf.
The scope is the two A/B pairs limsup-and-subsequential-limits and
topology-of-r: 65 mathematical-content items in four page files.

At the close of A2, no item or page file has been modified. A4 is not
authorized until the orchestrator records the A3 decisions on the two material
repairs and the provenance determinations below.

## Coverage

Coverage is complete, with no exception. I read all 65 item bodies, all four
page bodies, every Remark, and every mathematical assertion in both A-page
summaries. I read and checked all 373 numbered steps in the 53 proof-bearing
items. Every direct Fact/source pair was checked against the current target's
exact Definition, Statement, Statement refuted, or Example section, including
cross-category targets without an audit tag. The proof contract records 845
distinct Fact/source citations, maps every numbered step exactly once, and
contains 424 boundary dispositions: all eight required cases for each of the
53 contracts.

The manifest gate classifies 685 relationships as published-backward, 252 as
same-batch, and 34 declared forward references. It reports no unresolved or
missing relationship. The 114 distinct dependency targets used by labeled
Facts were opened and read semantically; a target's mere existence or a
matching title was not treated as sufficient.

The mathematical pass found two actionable defects:

1. one class-(a) false sentence in
   cex-zero-times-infinity-indeterminate; and
2. one class-(b) Remark-only Fact entry in
   cex-limsup-infinite-not-attained-in-r, which makes the published proof
   interface uncontractable.

No other false Statement, invalid proof inference, missing mathematical
hypothesis, or citation that licenses a stronger claim was found.

## A1 — provenance determination

The ledger has exactly 65 valid JSONL rows in manifest order and no duplicate or
extra id.

| statement determination | evidence | count |
| --- | --- | ---: |
| literature-derived | exact-source | 20 |
| ai-altered | semantic-source | 26 |
| ai-altered | established-knowledge | 11 |
| ai-generated | trivial | 6 |
| ai-generated | none | 2 |

Proof census: 47 ai-generated, 6 ai-altered, and 12 not-applicable. No proof is
called literature-derived: even when a located source supplies the standard
argument, the published proof either adapts it to this library's dependencies
and numbered-step decomposition or is locally constructed. The individual
rationales say which.

The exact-source and semantic-source rows use 13 distinct URLs. Every recorded
URL was successfully retrieved through the model-side web route; an
unretrievable UCLA candidate was excluded rather than recorded. All source and
convention details are in the row rationales.

The following 11 established-knowledge calls require Alpha's independent
concurrence before they can receive their proposed ai-altered tag:

- lem-limsup-monotone-comparison
- lem-nth-root-of-n-tends-to-one
- lem-power-over-geometric-null
- lem-factorial-beats-geometric
- fs-limsup-additive
- ex-subsequential-limits-fill-unit-interval
- ex-ratio-fails-root-succeeds
- ex-closed-interval-is-perfect
- cex-closed-bounded-in-q-not-compact
- cex-rationals-in-an-interval-are-disconnected
- cex-unbounded-closed-set-not-compact

Each ledger rationale begins with the explicit Alpha escalation and records the
real search made. These claims are recognizable standard results or standard
witnesses; failure to locate an exact semantic source was not converted into an
ai-generated label.

The two ai-generated/none rows are rem-extended-real-conventions and
rem-r-native-topology-scope. The positive determination is about each
repository-specific synthesis and scope map, not about the standard
mathematical results it discusses. The six ai-generated/trivial rows are
directly verified examples or counterexamples; each ledger rationale gives the
verification rather than treating absence of a source as novelty.

### Itemized classifications

| item | statement / evidence | proof |
| --- | --- | --- |
| def-extended-reals | ai-altered / semantic-source | not-applicable |
| lem-extended-reals-complete | literature-derived / exact-source | ai-generated |
| def-extended-limits | ai-altered / semantic-source | not-applicable |
| def-limsup-liminf | literature-derived / exact-source | not-applicable |
| lem-limsup-exists | ai-altered / semantic-source | ai-generated |
| lem-limsup-reflection | ai-altered / semantic-source | ai-generated |
| lem-liminf-le-limsup | literature-derived / exact-source | ai-generated |
| lem-limsup-epsilon-characterisation | ai-altered / semantic-source | ai-generated |
| thm-convergence-iff-limsup-equals-liminf | literature-derived / exact-source | ai-generated |
| thm-limsup-is-greatest-subsequential-limit | literature-derived / exact-source | ai-generated |
| cor-liminf-is-least-subsequential-limit | literature-derived / exact-source | ai-generated |
| thm-subsequential-limit-set-closed | literature-derived / exact-source | ai-generated |
| lem-limsup-monotone-comparison | ai-altered / established-knowledge | ai-generated |
| thm-limsup-subadditive | literature-derived / exact-source | ai-generated |
| thm-limsup-submultiplicative | ai-altered / semantic-source | ai-generated |
| lem-nth-root-of-n-tends-to-one | ai-altered / established-knowledge | ai-generated |
| lem-nth-root-of-constant-tends-to-one | ai-altered / semantic-source | ai-altered |
| thm-ratio-root-inequality | ai-altered / semantic-source | ai-altered |
| lem-power-over-geometric-null | ai-altered / established-knowledge | ai-generated |
| lem-factorial-beats-geometric | ai-altered / established-knowledge | ai-generated |
| rem-extended-real-conventions | ai-generated / none | not-applicable |
| fs-limsup-additive | ai-altered / established-knowledge | ai-generated |
| fs-ratio-and-root-limits-always-agree | ai-altered / semantic-source | ai-generated |
| ex-limsup-of-alternating-sequence | ai-altered / semantic-source | ai-generated |
| ex-subsequential-limits-fill-unit-interval | ai-altered / established-knowledge | ai-generated |
| ex-ratio-fails-root-succeeds | ai-altered / established-knowledge | ai-generated |
| ex-strict-ratio-root-chain | ai-altered / semantic-source | ai-altered |
| ex-standard-limits-worked | ai-generated / trivial | ai-generated |
| cex-limsup-subadditivity-strict | ai-altered / semantic-source | ai-altered |
| cex-limsup-product-strict | ai-generated / trivial | ai-generated |
| cex-limsup-infinite-not-attained-in-r | ai-generated / trivial | ai-generated |
| cex-zero-times-infinity-indeterminate | ai-generated / trivial | ai-generated |
| def-neighbourhood-r | ai-altered / semantic-source | not-applicable |
| def-open-and-closed-in-r | ai-altered / semantic-source | not-applicable |
| thm-open-set-algebra-r | ai-altered / semantic-source | ai-generated |
| def-interior-closure-boundary-r | ai-altered / semantic-source | not-applicable |
| def-limit-point-r | ai-altered / semantic-source | not-applicable |
| thm-closure-characterisations-r | ai-altered / semantic-source | ai-generated |
| lem-sequential-characterisation-of-closure-r | literature-derived / exact-source | ai-generated |
| thm-open-subsets-of-r-structure | ai-altered / semantic-source | ai-generated |
| lem-q-and-irrationals-dense-r | ai-altered / semantic-source | ai-generated |
| def-open-cover-r | ai-altered / semantic-source | not-applicable |
| thm-heine-borel-r | literature-derived / exact-source | ai-generated |
| lem-compact-implies-closed-and-bounded-r | literature-derived / exact-source | ai-generated |
| thm-heine-borel-characterisation-r | literature-derived / exact-source | ai-generated |
| thm-compact-iff-sequentially-compact-r | literature-derived / exact-source | ai-generated |
| def-connected-r | ai-altered / semantic-source | not-applicable |
| thm-connected-subsets-of-r-are-intervals | literature-derived / exact-source | ai-generated |
| def-perfect-set-r | literature-derived / exact-source | not-applicable |
| thm-perfect-set-uncountable-r | literature-derived / exact-source | ai-generated |
| rem-r-native-topology-scope | ai-generated / none | not-applicable |
| fs-arbitrary-intersection-of-open-is-open | ai-altered / semantic-source | ai-generated |
| fs-every-set-is-open-or-closed | ai-altered / semantic-source | ai-generated |
| fs-closed-bounded-compact-without-completeness | ai-altered / semantic-source | ai-generated |
| ex-open-set-decomposed-into-components | ai-generated / trivial | ai-generated |
| ex-closure-interior-boundary-of-q | literature-derived / exact-source | ai-generated |
| ex-reciprocals-with-zero-are-compact | ai-altered / semantic-source | ai-generated |
| ex-closed-interval-is-perfect | ai-altered / established-knowledge | ai-generated |
| cex-intersection-of-shrinking-intervals-not-open | literature-derived / exact-source | ai-altered |
| cex-half-open-interval-neither-open-nor-closed | literature-derived / exact-source | ai-generated |
| cex-open-cover-of-unit-interval-no-finite-subcover | literature-derived / exact-source | ai-altered |
| cex-closed-bounded-in-q-not-compact | ai-altered / established-knowledge | ai-generated |
| cex-rationals-in-an-interval-are-disconnected | ai-altered / established-knowledge | ai-generated |
| cex-closed-set-with-an-isolated-point-is-not-perfect | ai-generated / trivial | ai-generated |
| cex-unbounded-closed-set-not-compact | ai-altered / established-knowledge | ai-generated |

### C1 — class (c), bulk provenance retag

All 65 manifest items lack both a provenance block and a legacy authorship
field. Subject to A3 approval and Alpha concurrence on the 11
established-knowledge rows, add each ledger row's statement and proof labels and
merge its verified URLs into sources.references. This is one bulk pure-retag
pass under the stage pre-A4/post-A4 snapshots. It does not alter mathematical
text, dependency metadata, verification.judge, or the existing audited stamp.

## A2 — repair proposals

### A1 — class (a), false extended-limit wording

Item: cex-zero-times-infinity-indeterminate, step 3.1.

Current text:

> but the three products converge to $1$, converge to $2$, and converge to
> nothing at all.

Step 2.2 has already proved that the third product is
$\iota(k+1)$ and diverges to $+\infty$. By def-extended-limits, divergence to
$+\infty$ is precisely convergence to $+\infty$ in
$\overline{\mathbb{R}}$. The surrounding refuted claim quantifies over a single
$v\in\overline{\mathbb{R}}$, so “converge to nothing at all” is false in the
semantic universe of the argument; only “converges to no real number” would be
true.

Proposed smallest replacement:

> but the three products converge to $1$, converge to $2$, and converge to
> $+\infty$ in the extended sense.

The next sentence then remains valid: the three distinct extended limits
$1,2,+\infty$ rule out a single value $v$. No Statement, witness, dependency,
or proof strategy changes.

This is a material A4 repair. If approved, take a dedicated
pre-A4-cex-zero-times-infinity-indeterminate touchlog snapshot, make only this
replacement, run reflow and precheck, remove the stale verification.judge block
and audited stamp, and leave its already ai-generated statement and proof labels
ai-generated.

### B1 — class (b), Fact used only in a Remark

Item: cex-limsup-infinite-not-attained-in-r.

Fact L5 says:

> $\limsup_k x_k$ is the greatest element of
> $\overline{\operatorname{SL}}(x)$
> (thm-limsup-is-greatest-subsequential-limit).

No numbered Counterexample step cites L5. Its only use is the first Remark:

> By [L5] the element $\limsup_k x_k=+\infty$ lies in
> $\overline{\operatorname{SL}}(x)$ ...

The Counterexample proves its result from the tail-supremum definition in steps
2.1 and 4.1, so this is genuinely a Remark citation, not an omitted
load-bearing step input. The strict contract correctly reports the one resulting
error:

> citation-uses: L5 -> thm-limsup-is-greatest-subsequential-limit needs every
> proof step that cites L5

Proposed smallest clean repair: remove the unused L5 Fact row; replace the
Remark's “[L5]” by the direct wikilink
[[thm-limsup-is-greatest-subsequential-limit]]; and renumber the present
L6–L8 rows and their step tags to L5–L7 so the reader-visible Fact list remains
contiguous. This preserves the mathematical assertion and its exact source
while keeping proof Facts restricted to proof inputs. Refresh that item's
contract after the edit.

This is a material A4 repair. If approved, take a dedicated
pre-A4-cex-limsup-infinite-not-attained-in-r touchlog snapshot, apply only the
Fact/Remark relocation and mechanical renumbering, run reflow and precheck,
remove the stale verification.judge block and audited stamp, and leave its
already ai-generated statement and proof labels ai-generated.

There is no class-(d) debatable-restatement proposal.

## Proof-contract status

The proof-contract JSON parses and covers exactly the 53 proof-bearing manifest
items. It contains:

- 845 direct Fact/source citation entries with an exact on-disk source section;
- 373 derivation entries, one per numbered step;
- 424 boundary dispositions, exactly eight per item;
- 53 pending Alpha risk reviews; and
- no applicable finite combinatorial smoke test.

The strict gate checks all 53 contracts and reports exactly one error and no
warning: B1's Remark-only L5 citation. It reports no missing contract, missing
or duplicated numbered step, quote mismatch, undeclared source, missing
boundary disposition, or other citation-use error. The contract deliberately
records L5 with an empty uses list so that the published interface defect
remains visible to A3; omitting it would conceal the defect as an incomplete
contract. The approved B1 repair and contract refresh should make the strict
gate clean.

## Recorded nonfatal observations

- Both A-page bodies predate the current two-paragraph summary form and contain
  count, page-position, and corpus-scope prose. The mathematics asserted in
  them is correct. Per the binding triage rule, this presentation decay is
  recorded and not chased.
- rem-r-native-topology-scope says “four results” while its four bullets name
  five theorem ids because Heine-Borel and its closed-and-bounded
  characterisation share one bullet. This is at most a grouping/count
  ambiguity; every mathematical dependency claim in the Remark is correct.
- Eight declared frontmatter dependencies are not directly wikilinked in the
  corresponding bodies: def-open-and-closed-in-r declares
  def-complete-ordered-field and def-real-order; thm-open-set-algebra-r declares
  def-interval, def-complete-ordered-field, and def-ordered-field;
  def-limit-point-r declares def-open-and-closed-in-r; and def-connected-r
  declares def-interval and def-neighbourhood-r. They are harmless
  legacy/transitive extras, not false citations, and no repair is proposed.
- A few elementary Fact summaries package immediate consequences of cited
  clauses, such as composing displayed bijections, passing from strict to
  non-strict order, or identifying the image of a surjection. Each derivation
  closes from the cited text within the standing 30-second allowance; none
  hides a stronger theorem.

No mathematical published-claim decay was found in the in-scope Remarks or page
summaries. Missing provenance on a cross-category target was not charged as a
defect of the citing item.

## A4 status

A4 is complete for this batch under the approvals in
`research/audit/wave6-A3.md`. No page file, id, title, dependency list, reading
order, or unapproved prose was changed.

All 65 items now carry the ledger's exact statement/proof labels. The pass
added 42 missing evidence-URL appearances, so every URL in a source-backed row
is reader-visible in that item's `sources.references`. It also added the six
schema-permitted legacy `generation.role` records for the six
`ai-generated`/`trivial` examples and counterexamples. No item carried a legacy
`authorship` field. The other two generated statements are repository-specific
Remarks, for which the future-role vocabulary has no permitted value; the
audit content-policy gate records those two expected `generated-kind` warnings.
The 11 `established-knowledge` rows were applied only after Alpha's recorded
11/11 concurrence.

### Applied class-(a) repair — `cex-zero-times-infinity-indeterminate`

The dedicated baseline is
`pre-A4-cex-zero-times-infinity-indeterminate` in
`research/audit/wave6-touches.json`.

Old step 3.1 clause:

> the three products converge to $1$, converge to $2$, and converge to nothing
> at all.

New step 3.1 clause:

> the three products converge to $1$, converge to $2$, and converge to
> $+\infty$ in the extended sense.

This is a class-(a) correction. Step 2.2 proves that the third product is
$\iota(k+1)$ and diverges to $+\infty$; in the extended-limit universe fixed by
the item, that is convergence to the extended value $+\infty$. Thus the three
extended behaviours are $1$, $2$, and $+\infty$, not two extended limits and
an alleged absence of one. The stale `verification.judge` and `audited` fields
were removed. Its already determined `ai-generated` statement and proof labels
remain `ai-generated`.

### Applied class-(b) repair — `cex-limsup-infinite-not-attained-in-r`

The dedicated baseline is
`pre-A4-cex-limsup-infinite-not-attained-in-r` in
`research/audit/wave6-touches.json`.

Old interface:

> [L5] $\limsup_k x_k$ is the greatest element of
> $\overline{\operatorname{SL}}(x)$
> (`thm-limsup-is-greatest-subsequential-limit`).

The Fact had no numbered-step use; the first Remark alone said “By [L5]”. The
Fact was removed, the Remark now cites
`[[thm-limsup-is-greatest-subsequential-limit]]` directly, and the former
L6--L8 Facts and all of their proof tags were mechanically renumbered L5--L7.
The theorem's Statement says that the extended subsequential-limit set is
nonempty and has greatest element $\limsup_k x_k$, so the direct Remark link is
exact. The refreshed contract drops that one empty-use citation and matches all
renumbered inputs. The stale `verification.judge` and `audited` fields were
removed. Its already determined `ai-generated` statement and proof labels
remain `ai-generated`.

### A4 checks

- Exact normative precheck logic: both repaired counterexamples pass. The
  repository's `tools/tsx-run.mjs` wrapper cannot run in this sandbox because
  the configured external app checkout has no installed `tsx` loader; the
  exact `reflow.mts` and normative `worker/src/precheck.ts` sources were
  transpiled with the installed TypeScript compiler into `/tmp` and executed
  without changing their logic. Both items were reflowed before the pass.
- Strict proof contract: 53/53 items checked, 0 errors and 0 warnings. The final
  contract file contains 844 Fact/source entries, 373 exactly-once numbered-step maps,
  and 424 boundary dispositions. Only the two repaired contract entries changed.
- Finite smoke: 0 errors; no applicable finite test. Risk routing: 53 items
  routed, 0 errors; Alpha's reviews remain correctly pending until A6.
- Audit content policy: 65 scoped items, 0 errors, and the two expected legacy
  generated-Remark warnings named above.
- Base gates run locally after the edits: `depcheck --pending-audit-ok`,
  `fwdcheck`, `extcheck`, `rendercheck`, `prosecheck`, `citecheck`, `depsource`,
  and the scoped audit manifest all exited 0. The two repaired items are
  intentionally pending independent A6 certification.

Coverage remains complete with no exception: every one of the original 373
proof steps and every dependency citation in the 65-item scope was read at A2;
the two repaired final proofs were then re-read, reflowed, prechecked, and
reconciled to their contracts. The orchestrator still owns the single
wave-level `post-A4` snapshot, merged-contract generation, and gate of record
after all three disjoint A4 batches return.
