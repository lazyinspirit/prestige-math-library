# Wave 7 A3 orchestrator decision receipt

Decision completed: 2026-08-09 (source liveness checks performed 2026-08-08)

Status: **A3 completed; dispatch valid.** The four split manifests, four
proposal registers, four provenance ledgers, four proof-contract files, and
the A2 completion recorded in `wave7-run-state.json` are present. The manifests
contain 214 distinct item ids (64 + 37 + 52 + 61), and each ledger contains
exactly one row for each id in its manifest. I read `CLAUDE.md`,
`AUDIT-WORKFLOW.md`, `research/audit/RESUME.md`, all four findings files, all
four manifests and ledgers, all six library pages represented by the
manifests, and the on-disk item file for every manifest id. I also read the
specific dependency targets used by the proposals below. This receipt is the
only A3 change; no proposal has been applied here.

## Decision notation

- **APPROVE**: Audit-Beta may apply exactly the proposed repair at A4.
- **APPROVE WITH OVERRIDE**: the repair or retag may be applied only with the
  correction written here, not exactly as submitted.
- **DECLINE — OWNER**: mathematically motivated, but it deletes a published
  claim/dependency/reference or creates a new public theorem clause and is
  therefore reserved for the A10 owner queue.
- **DEFER — ALPHA**: A3 does not supply the independent Alpha concurrence
  required for an `established-knowledge` retag.

## Independent source check for `exact-source` rows

I opened all 21 distinct URLs carrying the 46 proposed `exact-source`
determinations. All 21 resolved on 2026-08-08. Liveness did not settle
precision: 19 URLs support the cited local clauses at the required level, and
two live sources do not support the submitted exact-source determination.

- `ex-rational-function-field-order`: **DECLINE the submitted URL/evidence
  row; APPROVE WITH OVERRIDE.** The live Wikipedia `Ordered_field` page gives a
  different order on a rational-function field, obtained by evaluation at a
  transcendental real; it does not state the local eventual-leading-sign order
  at infinity. Replace that URL with
  `https://math.hws.edu/eck/math331/guide2020/04-axioms-for-R.html`, whose
  rational-function example defines positivity by the leading coefficient and
  exhibits the resulting non-Archimedean order. The row may remain
  `literature-derived` / `exact-source` only with that replacement.
- `lem-regular-lindelof-spaces-are-normal`: **DECLINE the submitted
  `exact-source` evidence; APPROVE WITH OVERRIDE as `ai-altered` /
  `semantic-source`.** The live MSSC text proves regular Lindelof implies
  normal, but Definitions 16.1 and 16.7 build T1 into both “regular” and
  “normal”; the local library explicitly uses the separation-only convention.
  The proof is relevant support, but its hypotheses are not the same local
  proposition.
- The other 44 exact-source rows are **APPROVED**. I checked the operative
  clauses in the Encyclopedia of Mathematics pages, Jirka/Hunter/Semmes/
  Thomson–Bruckner–Bruckner/Binghamton analysis texts, Wikipedia definition
  pages used only for the stated standard definitions, Wodzicki's uniform
  structures notes, the BIU topological-groups notes, the Vienna topology
  notes, and the cited minimal-Cauchy-filter paper. No other dead, wrong,
  converse-only, or hypothesis-mismatched exact source was found.

## Real analysis — completeness and limits

1. `thm-completeness-equivalences` title repair — **APPROVE**. The Statement's
   five clauses are LUB, ARCH+NIP, BW, ARCH+CC, and MCT; MCT already implies
   ARCH on disk. Attaching ARCH to MCT in the title is false.
2. `fs-nested-intervals-implies-lub` weaker-antecedent sentence — **APPROVE**.
   A weaker antecedent makes an implication stronger because it applies to
   more structures; the replacement states that direction correctly.
3. `ex-rational-function-field-order` uniqueness sentence — **APPROVE**. The
   displayed positive-infinity cone is representative-independent and
   multiplicative, but composing it with the automorphism `t |-> -t` gives the
   negative-infinity order, which disagrees on the sign of `t`. The proposed
   “one ... choice” replacement is exact. Apply the provenance URL override
   above at the same time.
4. `cex-limit-not-unique-at-an-isolated-point` dichotomy — **APPROVE**. At a
   cluster point a function limit is at most unique, not guaranteed to exist;
   the local Dirichlet example supplies the omitted no-limit case. At an
   isolated domain point the punctured formula is vacuous for every value.
5. `thm-composition-of-function-limits` and
   `cex-composition-of-limits-fails` paired wording — **APPROVE**. The theorem
   assumes safeguard (i) or (ii); either one alone suffices, while the witness
   proves only that both cannot be omitted.
6. `thm-sequential-criterion-for-function-limits` step 1.1 citation to L3 —
   **APPROVE**. L3 supplies the standing cluster-point condition used when the
   proof invokes the epsilon-delta definition; the new citation is a genuine
   use and closes both source links.
7. `lem-limit-implies-local-boundedness` dependency on `def-ordered-field` —
   **APPROVE**. Fact L4 uses totality and the equality case in passing from
   strict to non-strict order compatibility, exactly the earlier target's
   clause.
8. Removal of the unrestricted-NIP claims and the dependency on
   `cex-laurent-nested-intervals-empty` from
   `def-completeness-properties`, `fs-nested-intervals-implies-lub`,
   `ex-cauchy-complete-not-complete-field`, and the A-page prose — **DECLINE —
   OWNER**. The on-disk Laurent-series calculation supports the construction,
   but its Statement is already `ai-generated` and cannot be load-bearing.
   Removing the published claims and dependency is the right issue to queue,
   but A3 may not authorize those deletions.
9. Moving `cex-psi-of-one-over-x-has-no-limit-at-zero` and
   `ex-x-times-psi-tends-to-zero` from `deps` to `forward_refs` in
   `rem-classical-oscillator-is-sine-of-one-over-x` — **DECLINE — OWNER**.
   Both targets have positive `ai-generated` determinations, so the current
   dependency edges cannot survive their retag; removing those edges is
   nevertheless owner-only.

The stale oscillator scope sentence recorded as nonfatal in the findings is
not an A2 repair proposal and receives no A4 authorization here.

### Provenance disposition for this batch

This disposition is exhaustive for all 64 ledger rows:

- **APPROVE** 60 rows, including the corrected exact-source row for
  `ex-rational-function-field-order` described above.
- **DEFER — ALPHA** `ex-field-ordered-in-two-ways` and
  `cex-evt-and-ivt-fail-over-a-non-complete-field`; both remain
  `alpha_concurred:false`, so A4 must not write their proposed
  `established-knowledge` tags.
- **DEFER pending the owner decision in proposal 9** the two otherwise valid
  `ai-generated` rows for `cex-psi-of-one-over-x-has-no-limit-at-zero` and
  `ex-x-times-psi-tends-to-zero`. Writing those tags now would immediately
  create forbidden generated-Statement dependency targets. This is a staging
  deferral, not a demotion of their positive novelty determinations.

## Real analysis — series

1. `rem-strength-order-of-the-nonnegative-tests` Gauss remainder —
   **APPROVE**. For
   `a_k=1/(k(log k)^c)`, the ratio has the next term
   `c/(k log k)` and convergence changes at `c=1`; that error is therefore
   load-bearing at the Gauss boundary. The classical `O(k^-beta)`, `beta>1`,
   condition is supported by the cited analysis text, and replacing beta by a
   smaller rational `1+epsilon` loses no covered case.
2. `ex-abel-dini-pair-for-the-harmonic-series` last-divergent sentence —
   **APPROVE**. In the displayed fixed family, exponent 1 is the divergent
   endpoint and exponent 2 converges. The no-slowest-divergent conclusion
   follows only by iterating Abel–Dini, as the replacement says.
3. `thm-limit-comparison-test` Fact L5 and dependencies — **APPROVE**.
   `def-series` states neither division cancellation nor positive-scalar order
   preservation; `def-field` and `lem-of-sign-rules` state exactly those two
   facts.
4. `thm-root-test` step 2.1 use of L2 — **APPROVE**. The step treats limsup as
   an existing extended-real value.
5. `thm-ratio-test` step 1.3 use of L2 — **APPROVE**. The step uses limsup as
   the infimum of tail suprema.
6. Deletion of unused Fact L8 from `ex-harmonic-series-diverges` — **DECLINE —
   OWNER**. It is unused inventory rather than a false proof step, and deleting
   the published Fact is outside A3's authority. Queue it for A10.
7. Bulk provenance/source pass — **APPROVE all 37 ledger rows**. Every
   exact-source URL in this batch resolved and stated the relevant definition,
   theorem, or test. New references may be added; no existing source reference
   is authorized for deletion by this decision.

## Topology — separation and Urysohn/Tietze

1. `rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem` universal
   inheritance claim — **APPROVE**. The perfect-normality theorem's own
   Statement and proof step 5.1 spend a further DC instance to assemble the
   sequence after the individual Urysohn functions exist. Narrowing the list
   to the four genuinely inheritance-only results corrects a false quantifier;
   it does not delete an item or mathematical result.
2. `lem-finite-minima-of-continuous-unit-interval-maps` Fact F2 and three
   dependencies — **APPROVE**. The proposed real-line basis, subspace-basis,
   and subspace-topology targets jointly state exactly why
   `(a,b) intersect [0,1]` is a basis; the current two targets do not.
3. `thm-urysohn-lemma` Fact L6 — **APPROVE**. The real-line metric-topology
   clause supplies openness of the ambient rays, and the existing subspace
   target supplies their traces.
4. `thm-tietze-extension-theorem` Fact L7 — **APPROVE** for the same verified
   reason.
5. `ex-the-metric-urysohn-function-costs-no-choice` Fact L1 and dependencies —
   **APPROVE**. The direct Lipschitz, nonnegativity, and metric-closure targets
   state the exact distance-to-set claims used; the current indirect theorem
   Facts are not eligible dependency clauses.
6. `ex-sierpinski-space-is-normal-and-not-completely-regular` blank line —
   **APPROVE**. The parser currently absorbs L2 into L1 while step 1.2 cites
   L2. Splitting the two already-written Facts changes no mathematics and
   makes the citation contract real.
7. Bulk provenance/source pass — **APPROVE all 52 rows WITH ONE OVERRIDE**:
   51 as submitted, and
   `lem-regular-lindelof-spaces-are-normal` only as `ai-altered` /
   `semantic-source`, as explained in the source check. Existing references
   are not authorized for deletion.

## Topology — uniform spaces

### Proposal A: empty-carrier failures

The proposed nonempty qualifications are **APPROVED for all eleven named
items**:

1. `lem-metric-uniformity-dictionary`
2. `def-uniform-cover-space`
3. `lem-entourage-and-uniform-cover-dictionary`
4. `def-gauge-of-pseudometrics`
5. `thm-three-definitions-of-uniform-space-are-equivalent`
6. `lem-completely-regular-topologies-come-from-continuous-pseudometrics`
7. `thm-uniformizable-iff-completely-regular`
8. `cor-separated-uniformizable-iff-tychonoff`
9. `thm-compact-hausdorff-open-cover-uniformity`
10. `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity`
11. `cor-compact-domain-maps-are-uniformly-continuous`

Reason: `def-filter` requires both `X in F` and `emptyset notin F`, so no
proper filter exists when `X` is empty. The on-disk metric, compactness,
complete-regularity, Tychonoff, and uniform-cover definitions do admit the
empty carrier. Thus the current equivalences/constructions are false there,
and the proposed qualifications are the smallest convention-preserving
correction.

### Proposal B: symmetric roots and finite composites

- New arbitrary-finite-composite clause and proof in
  `lem-symmetric-entourages-form-a-base` — **DECLINE — OWNER**. The result is
  true and Wodzicki Exercise 23 supports it, but appending it creates a new
  public theorem clause and requires impact-cone review.
- `lem-convergent-filters-are-cauchy` citation to that strengthened clause —
  **DECLINE — OWNER as submitted**. The proof can instead be repaired by a
  local square-root derivation from the current entourage axioms, but A3 does
  not silently substitute an unproposed repair; the submitted citation depends
  on the declined new theorem clause.
- `lem-cauchy-filter-with-a-cluster-point-converges` induced-topology
  dependency/citation — **APPROVE**. The target states exactly why `D[x]` is a
  neighbourhood and is independent of the declined strengthening.

### Proposal C: minimal-Cauchy-filter construction

The coupled proposal is **DECLINED — OWNER in full**. The principal-filter-is-
Cauchy addition to
`lem-minimal-cauchy-filter-associated-to-a-cauchy-filter` and the
member-contains-the-point addition to
`lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space` are both new
public Statement clauses. The carrier-nonemptiness and completion-proof
citations proposed for the other two items depend on those new clauses. The
one-line mathematics is sound and the cited Wodzicki clauses are relevant, but
the public strengthening and its impact cone require owner authorization.

### Proposal D: remaining citation repairs

- Remove `thm-ultrafilter-lemma` from L3/deps of
  `thm-complete-and-totally-bounded-uniform-spaces-are-compact` — **DECLINE —
  OWNER**. The direct compactness-via-ultrafilters theorem is the precise
  weaker-hypothesis citation and the AC extension theorem is unused, but
  deleting the dependency is owner-only.
- Add `def-uniformizable-space` to the unique-compatible-uniformity theorem —
  **APPROVE**; it defines compatibility with the given topology.
- Add `def-metric-space` to the countably-based pseudometrization theorem —
  **APPROVE**; it states exactly the zero-pair criterion for a pseudometric to
  be a metric.
- Add the absolute-value and triangle-inequality targets and direct
  substitution to the continuous-pseudometrics lemma — **APPROVE**; these
  supply the presently unstated pseudometric verification.
- Add Hausdorff-implies-T1 and singleton-closed targets to the separated iff
  Tychonoff corollary — **APPROVE**; both directions are used and stated by the
  proposed earlier targets.
- Add `lem-of-triangle-inequality` to the real-line/open-interval example —
  **APPROVE**; the cited absolute-value lemma alone has no triangle clause.
- Add the uniform-cover dictionary and canonical-union construction to the
  compact-domain theorem — **APPROVE**. The dictionary supplies the ball
  refinement, while the union of all qualifying neighbourhoods avoids the
  unjustified family choice without changing the theorem.
- Add the discrete metric/uniformity targets to the pointwise-versus-uniform
  example — **APPROVE**; a discrete topology alone does not specify the target
  entourage used in the proof.

### Proposal E: provenance and source metadata

This disposition is exhaustive for all 61 ledger rows:

- **APPROVE** the 19 `exact-source` rows and 21 `semantic-source` rows (40
  total). Their current Statements are source-supported even where a proposed
  material strengthening above was declined. Source references in the ledger
  may be added.
- **DEFER — ALPHA** all 21 `established-knowledge` rows listed in the findings:
  each remains `alpha_concurred:false`, and A3 cannot stand in for Alpha.
- **DECLINE — OWNER** the source-reference deletion portion of proposal E:
  removal of the Cambridge completion URL and removal/replacement of blanket
  Wodzicki references from the topological-group, function-space,
  K-topology, and worked-example items. Verified, more precise references may
  be added at A4, but this receipt does not authorize deleting existing
  references.

## Exhaustive provenance totals

Across the 214 ledger rows, A4 may write 189 determinations: 60 completeness/
limits, 37 series, 52 separation/Urysohn (including the convention override),
and 40 uniform-spaces rows. Twenty-three `established-knowledge` rows are
deferred to Alpha (2 completeness/limits + 21 uniform spaces), and the two
generated oscillator-target rows are deferred until their forbidden incoming
dependency edges receive an owner decision. `189 + 23 + 2 = 214`; no ledger
row is left without a disposition.

## A10 owner queue created by this decision

1. Remove or rewrite the three consumers and page prose that make
   `cex-laurent-nested-intervals-empty` load-bearing.
2. Move the two generated oscillator example ids from `deps` to
   `forward_refs` before their provenance tags are written.
3. Delete unused Fact L8 from `ex-harmonic-series-diverges`, if desired.
4. Decide the new finite-composite Statement clause and its dependent
   convergent-filter citation as an impact-cone change.
5. Decide the two new minimal-Cauchy-filter Statement clauses and their coupled
   proof/citation repairs as one impact-cone change.
6. Remove the unused full-Choice `thm-ultrafilter-lemma` dependency from the
   complete-plus-totally-bounded compactness theorem.
7. Decide the proposed source-reference removals in the uniform-spaces batch.

At A4, Audit-Beta must apply only the approved portions, preserve every
declined/deferred portion, use the two provenance overrides above, and leave
the 23 Alpha rows plus the two containment-blocked rows untagged pending their
respective decisions.

## A3 recovery amendment after the A4 gate (2026-08-09)

The A4 gate exposed an authority error in the decisions above. The receipt
used “deletion” to include removing an invalid dependency edge, an unused Fact,
an unsupported ancillary sentence, and an off-target reference, and used “new
public theorem clause” as a fourth owner-only class. That is not the audit R1
rule. `AUDIT-WORKFLOW.md` reserves deletion of a published item/id,
id rename/removal, and structural reading-order changes. Its delegated repair
classes include falsehood, citation precision, provenance, and source-backed
restatement; the Wave 3 durable precedent explicitly rejected the same
over-broad reading for unused Facts and dependency edges. No decision below
deletes an item, changes an id, or changes reading order.

Accordingly, after re-reading the A2 proposals, the current items, the cited
targets, the four strict-contract errors, and the already-recorded source
checks, the following earlier `DECLINE — OWNER` decisions are corrected to
**APPROVE**:

1. Completeness/limits proposal 8: remove the ancillary unrestricted-NIP
   claims and the ineligible `cex-laurent-nested-intervals-empty` dependency
   exactly as specified in the Beta findings, retaining the shrinking-NIP and
   non-LUB claims actually needed.
2. Completeness/limits proposal 9: move the two orientation-only generated
   oscillator examples from `deps` to `forward_refs`, then write their
   evidence-backed provenance determinations.
3. Series proposal 6: remove unused Fact L8 from
   `ex-harmonic-series-diverges`, remove the two unused dependency edges, and
   delete the matching contract entries. The p-series identification remains
   in the already-cited Example prose.
4. Uniform proposal B: add the source-backed arbitrary-finite-composite clause
   and proof to `lem-symmetric-entourages-form-a-base`, repair
   `lem-convergent-filters-are-cauchy` to cite it, and retain the separately
   approved induced-topology repair.
5. Uniform proposal C: apply the coupled minimal-Cauchy-filter repairs exactly
   as proposed. The original A3 source check already found the clauses sound
   and source-supported; their purpose is to close the current construction,
   not to add unrelated enrichment.
6. Uniform proposal D's unused `thm-ultrafilter-lemma` removal: replace the
   full-Choice citation with the already-verified direct ultrafilter compactness
   citation and update the contract.
7. Uniform proposal E's off-target/blanket source-reference removals: apply the
   verified, more precise replacements recorded in the findings. Removing a
   misleading source is citation repair, not deletion of mathematical content.

One additional containment repair is licensed by the gate evidence:
`cor-perfect-normality-is-hereditary` must not cite the generated direct
corollary `cor-complete-normality-is-hereditary`. Unfold that one-line
heredity argument by citing
`thm-completely-normal-iff-hereditarily-normal` and
`lem-t0-t1-and-hausdorff-are-hereditary` directly, remove the generated target
from `deps`, and update L2, its using step, and the proof contract. This changes
no theorem conclusion.

The 23 `established-knowledge` rows remain **DEFER — ALPHA**, because only
Alpha may concur under D2. A narrow Alpha recovery dispatch decides those rows
before the corrected A4 application. This amendment removes items 1–7 from the
A10 owner queue above; none belongs to an owner-reserved class. All material
repairs still require independent final-text certification at A6, impact
closure, and exact repaired-item A7 rejudge targets.
