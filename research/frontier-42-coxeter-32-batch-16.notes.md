# Batch 16 Step 1 scaffold — Bruhat Interval Labels, Shellings, and Möbius Functions

Run: `frontier-42-coxeter-32` · pair `bruhat-interval-labels-shellings-and-mobius-functions`
(A order 1748, B order 1749, `coxeter-groups`, design label CG-13). Outputs:
`research/frontier-42-coxeter-32-batch-16.pages.json` (4 A + 3 B items), this note,
`research/frontier-42-coxeter-32-batch-16.coverage.json`,
`research/frontier-42-coxeter-32-batch-16.cross-batch-dependencies.json` (44 item rows and two page
rows, all reviewed) and seven item-readiness records
`research/frontier-42-coxeter-32-step1-<id>.json`.

## Scope, plan and binding inputs

- **Controlling direction.** `research/frontier-42-coxeter-32-owner-authoring-direction.md`
  (read first; binding), the design `research/plan-coxeter-groups-track.md` §CG-13 (lines
  326–339), the machine inventory `research/coxeter-scaffold/inventory.json` (CG-13),
  `definition-justifications.json`, the native A/B prose
  (`library/coxeter-groups/bruhat-interval-labels-shellings-and-mobius-functions{,-examples}.md`),
  the independent audit `research/coxeter-scaffold/independent-audit.md` and the combinatorial
  source report `research/coxeter-scaffold/combinatorial-source-report.md` (its §C6 Bruhat-interval
  shellability contract and its explicit warnings that the sphere/ball, reduced-Euler-characteristic
  and Cohen–Macaulay conclusions rest on Appendix A2 facts stated rather than proved). The drift
  review (`research/frontier-42-coxeter-32-alpha-step1-drift.md`, §
  `bruhat-interval-labels-shellings-and-mobius-functions`) records **VERDICT: no-drift**: “Deletion
  labels require strong exchange/subword order, while rooted-chain shelling and Möbius cancellation
  require the finite lattice/order-complex machinery. Both direct suppliers are earlier and present
  in closure; the scaffold avoids importing sphere/Cohen–Macaulay claims.”
- **Preserved contracts.** The four designed local supplier contracts keep their exact ids, kinds
  and order: `def-cg-deletion-chain-labels-and-shelling`,
  `lem-cg-bruhat-increasing-chain-and-local-descent-replacement`,
  `thm-cg-bruhat-deletion-label-shelling`, `thm-cg-bruhat-eulerian-intervals-and-mobius`. Their
  warnings are kept: the labelling is induced by one *fixed* reduced expression of the top and
  depends on the preceding root chain, so no independence of different retained expressions is
  asserted; the shelling theorem states the full earlier/later-chain comparison rather than shelling
  terminology alone and fixes the empty, rank-one and rank-two conventions; the Eulerian theorem
  *establishes the cancellation formula first* and only then reads off the Möbius sign, and it
  explicitly refuses to transfer the sign formula to parabolic quotient intervals. Neither a sphere
  theorem nor Cohen–Macaulayness is imported.
- **B companion (3 items).** `ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain` (all
  maximal chains of the rank-three interval [e, 2341] of S4 with their deleted-position labels, the
  lexicographically first/unique increasing chain, and the explicit local descent replacement),
  `ex-cg-s4-rank-three-interval-mobius-from-recurrence` (μ(e, 2341) from the recurrence with the
  parity-balance and falling-chain cross-checks) and
  `cex-cg-parabolic-quotient-interval-eulerian-claim-fails` (the quotient interval [1234, 3412] of
  (S4)^{s1,s3}, where μ = 0 ≠ (−1)^4, together with the exact dropped hypothesis, fullness). This
  covers the design's B checks: label all maximal chains, construct the lexicographically first
  chain, calculate its Möbius value from the recurrence, and include a quotient interval where an
  indiscriminate Eulerian claim fails.

## Plan-spec comparison and recorded conflicts

`research/plan-spec.json` agrees with the task and design on the pair ids, orders 1748/1749,
category, companion and the A page's `requires` (`bruhat-subword-order-and-lifting`,
`finite-lattice-projections-and-coxeter-chain-labels`). Its item arrays for these two pages are
empty, as for every other new page of this run, so no item-level plan text can conflict; the
design's four local supplier contracts are the item-level authority, and no plan text was edited.
**No design-versus-plan conflict exists.** `node tools/validate-plan.mjs research/plan-spec.json
--pages-file <pair ids>` exits 0 with the declared page order acyclic and consistent, and the
run-mode invocation still aborts on `Empty frontier page` for sibling batches that are mid-flight
(the same pre-splice state recorded by batches 6, 8, 11 and 15).

## Inventory notes (design conformance; no additions to the A page)

The four designed contracts proved sufficient for local closure; no additional A-page prerequisite
item was needed, and no claim was weakened. Two choices inside the contracts are worth recording.

1. **Selected Eulerian route.** The design allows either the “lifting-paired recurrence” or the
   “unique falling-chain formula derived locally from shelling”. The item
   `thm-cg-bruhat-eulerian-intervals-and-mobius` proves the cancellation formula by Verma's
   two-case induction with the lifting property (the route of Björner–Brenti Corollary 2.7.11 and
   Exercise 13, with the elementary exposition of Zhao's notes and the independent complete
   matching of Jones's paper recorded as an alternative treatment), and *derives* the
   falling-chain count one as the equivalent clause (iii) from the chain-shelling lemma — it is
   not assumed. The item does not depend on any PL/CW or sphere statement.
2. **Rank-two structure.** The lemma `lem-cg-bruhat-increasing-chain-and-local-descent-replacement`
   proves Björner–Brenti Lemmas 2.7.2–2.7.4 in the rooted-interval form needed by the shelling
   theorem, including the inequality `i < j ≤ p` between the increasing word `(i,j)` and the
   falling word `(p,m)` of a rank-two interval, which is what makes the local descent replacement
   lex-decreasing at the descent position. The mirrored (left-handed) construction of the falling
   chain is derived from the right-handed exchange/augmentation supplier by inversion with the
   reversed reduced expression; no new handedness supplier is needed.

## Dependency levels (in-run only)

Computed with the shared `item-dependency-levels.mjs` logic over the current run manifests
(in-run suppliers are batches 2, 4, 5 and 12; published suppliers do not raise a level) and written
into the manifest; `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32`
reports no cycle, dependency or label error naming any batch-16 item (all seven labels equal the
computed values).

| level | item |
|---|---|
| 16 | `def-cg-deletion-chain-labels-and-shelling` |
| 17 | `lem-cg-bruhat-increasing-chain-and-local-descent-replacement` |
| 18 | `thm-cg-bruhat-deletion-label-shelling` |
| 19 | `thm-cg-bruhat-eulerian-intervals-and-mobius` |
| 19 | `ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain` |
| 20 | `ex-cg-s4-rank-three-interval-mobius-from-recurrence` |
| 20 | `cex-cg-parabolic-quotient-interval-eulerian-claim-fails` |

No item depends on a later item of this page or of another page of the run; the definition's
`justified_by` target (`thm-cg-bruhat-deletion-label-shelling`) depends on it through `deps`, and
every `[[...]]` in every statement and strategy lies in that item's `deps`/`justified_by` (no
unresolved, forward or self-links).

## Dependency verification (examined, not assumed)

Every declared `deps` target was checked to exist on disk or as an in-run scaffold contract, and
its statement and proof route were read for adequacy. In-run suppliers read in the current
manifests: batch 5 — `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation` (its entire
statement and strategy: the (N)/(L) hypotheses, the first-divergence pairwise facet criterion, the
falling-chain formula and its derivation from the published Möbius recurrence) and
`def-cg-finite-lattice-congruence-and-interval-projections` (the rooted-chain labelling framework,
label words, increasing/falling/descent sets, lexicographic order, (N), (L)); batch 12 —
`def-cg-bruhat-order-by-reflection-chains` (order, intervals, inversion symmetry, parity),
`lem-cg-bruhat-right-exchange-and-augmentation` (right strong exchange with unique deleted index;
the augmentation step with the minimal last deleted position), `thm-cg-bruhat-subword-characterization`,
`lem-cg-bruhat-chain-refinement-and-gradedness` (interval finiteness, chain refinement, grading),
`thm-cg-bruhat-lifting-and-cover-criterion` (all four lifting cases; cover criterion; reflection
deletion with unique index; directedness),
`thm-cg-bruhat-parabolic-projection-and-quotients` (quotient as induced subposet, inherited
criterion, length rank, no fullness assertion) and `def-cg-parabolic-quotient-and-two-sided-minima`;
batch 2 — `def-hh-coxeter-matrix-word-group-and-length`,
`thm-hh-coxeter-exchange-deletion-and-faithfulness` (the simple-descent length change and the sign
character used for the parity argument) and
`thm-hh-parabolic-minimal-representatives-and-length-additivity` (ℓ(x)=ℓ(x⁻¹), the reversed reduced
expression used by the mirror, and the inversion-number identification in type A); batch 4 —
`def-cg-canonical-reflection-homomorphism`. Published suppliers read for this pair include
`def-face-poset-and-order-complex`, `def-abstract-simplicial-complex`, `def-graded-poset-and-rank`,
`def-poset-interval-and-finiteness-conditions`, `def-poset-mobius-function`,
`lem-poset-mobius-recurrence`, `def-finite-cardinality`,
`def-finite-symmetric-group-and-permutation-notation`, `def-inversions-inversion-number-and-sign`
and `def-group`.

Checks actually made: the direction and clause numbers of the batch-12 cover criterion and lifting
cases against the labelling recursion, the rank-two construction and the two-case induction; the
direction of the falling-chain formula and its hypotheses (N)/(L) against the deleted-position
labelling; the exact extremal choices in the rank-two construction (minimal last deleted position
for the increasing chain, maximal first deleted position for the falling one) against the
augmentation lemma; that the first-divergence argument of the batch-5 lemma instantiates at the
Bruhat labelling with the local replacement of the new lemma; and that the quotient counterexample
uses only the inherited order and length rank, not fullness. No missing, circular, forward or
inadequate dependency was found.

**Independent machine checks of the scaffolding claims (oracle evidence, not library proofs).** An
exhaustive enumeration of S4 (and of all intervals of S5) reproduced: (a) the cancellation identity
Σ(−1)^ℓ = 0 on every interval with u < v (0 failures); (b) the rank-two label structure
`i < j ≤ p` for every rank-two interval (0 failures); (c) exactly one strictly falling maximal
chain in every full interval (0 failures); and (d) all arithmetic of the three B-page items,
including μ(1234, 3412) = 0 in the quotient interval (1234, 1423, 2314, 2413, 3412 of the quotient
interval chain all evaluate as displayed). These checks guided the scaffold; they are not
substitutes for the Step-3 proofs and are not cited as sources.

## Choice accounting (AC boundary)

All seven items are **choice-free**: the deleted position at each step is unique, the
lexicographically minimal maximal chain of a finite chain set is selected determinately, the
inductions are over finite intervals, and the quotient computation is finite. No item declares
`def-axiom-of-choice`, and no dependency path of this batch reaches
`deferred-set-theory-beyond-choice`. The in-run suppliers of batches 2, 4, 5 and 12 likewise carry
no AC hypothesis in their recorded contracts; if a later authoring step adds one, the affected
readiness records must be re-recorded.

## Sources (full text fetched, stamped and inspected; reading limits stated)

Three independent treatments back the A page; all three bodies were downloaded (stamps are in the
coverage file; sha256-16 `ad1e7d9260127bb2`, 370 pages for the textbook; `4d04ed19987217e2`, 9
pages and `d7bb8244cd47edc1`, 9 pages for the two papers):

1. **A. Björner and F. Brenti, _Combinatorics of Coxeter Groups_** (GTM 231, 2005; author-hosted
   complete PDF, 370 pages). Read in the extracted full text: §2.2 (Lemma 2.2.1 augmentation with
   its two-case proof; Proposition 2.2.7 lifting; Theorem 2.2.2 subword property; Corollary 2.2.4;
   Theorem 2.2.6 chain property), §2.5 (Theorem 2.5.5 quotient chain property, Corollary 2.5.6),
   §2.7 in full (the induced label λ(m) and Example 2.7.1; Lemma 2.7.2; Lemma 2.7.3 with the
   diamond and the extremal choices; Lemma 2.7.4; Theorem 2.7.5 with the first-divergence
   replacement; Theorem 2.7.7; Corollaries 2.7.10–2.7.11 and the remark pointing to Exercise 13;
   Exercises 1–13 of §2), and Appendix A2.2–A2.4 in the parts bearing on Möbius inversion and
   shellability. §§2.6, 2.8, A2.5 and the remaining chapters were not read for this batch.
2. **Y. Zhao, _On the Bruhat order of the symmetric group and its shellability_** (expository notes,
   MIT, 12 December 2007; 9 pages). Read in the extracted full text: §3 (Propositions 3.1–3.2),
   §4 (Lemma 4.1 lifting with its type-A proof; Theorem 4.2 with the complete two-case induction;
   Corollary 4.3), §5 (Definitions 5.1–5.2, Theorem 5.3 with the omitted proof) and §6 (Theorem
   6.1 with the first-divergence shelling proof, Propositions 6.2 and Corollary 6.3). The paper's
   type-A comparison criteria and its PL sphere conclusion are disposed of in the coverage file as
   out of scope.
3. **B. C. Jones, _An explicit derivation of the Möbius function for Bruhat order_**
   (arXiv:0904.4472v3, 11 December 2009; 9 pages). Read in the extracted full text: §1 and §2 up to
   Remark 2.14, including Lemma 2.1, Lemma 2.2 with its proof, the relative-mask model of
   Definitions 2.6–2.8 with Example 2.9, Theorem 2.12 (complete matching) and Corollary 2.13 (the
   sign formula via a sign-reversing involution and the Kronecker-δ form of the alternating sum).
   **Honest reading limit:** the case analysis of Lemmas 2.10–2.11 (printed pp. 5–7) was read in the
   extracted text but not independently re-derived; nothing on this page consumes that part, since
   the matching is recorded only as an alternative treatment of the sign formula.

## Source observations (recorded, not consumed as printed)

1. **Zhao, Theorem 4.2 as printed.** The statement prints Σ_{x≤z≤y}(−1)^{ℓ(z)} = 1; its own base
   case (x ⋖ y gives 1 − 1 = 0) and its Case 1 argument (pairing z with z(k,k+1)) establish *parity
   balance*, i.e. the vanishing of the sum for x < y. The mathematically correct uniform forms are
   Björner–Brenti Corollary 2.7.11 (equally many even- and odd-length elements) and Jones Corollary
   2.13 (Σ_{y≤x≤w}(−1)^{ℓ(w)−ℓ(x)} = δ_{y,w}). The scaffold states the δ-form and does not quote
   the printed value.
2. **Björner–Brenti Appendix A2 facts.** The reduced-Euler-characteristic identification (Fact
   A2.3.1) and the “thin shellable implies PL sphere” step (Fact A2.4.3) are stated rather than
   proved in the source, exactly as the combinatorial source report warns; they are recorded as
   out-of-scope disposals and no item consumes them. The pair proves the sign formula by the
   lifting induction instead.
3. **Falling-chain count.** The clause “exactly one strictly falling maximal chain” of
   `thm-cg-bruhat-eulerian-intervals-and-mobius` (iii) is *derived* from the falling-chain formula
   plus the sign formula; it is not an imported statement of either source, and its machine check
   (S4, S5, all intervals) is recorded above as scaffolding evidence only.

Neither observation is a defect of a library item, and no published defect was found in any
published item this batch consumes.

## Cross-batch dependencies

`research/frontier-42-coxeter-32-batch-16.cross-batch-dependencies.json` registers 44 item rows —
7 to `def-cg-bruhat-order-by-reflection-chains` and 7 to `def-hh-coxeter-matrix-word-group-and-length`,
6 to `lem-cg-bruhat-chain-refinement-and-gradedness`, 4 each to
`thm-cg-bruhat-lifting-and-cover-criterion`, `thm-hh-parabolic-minimal-representatives-and-length-additivity`
and `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation`, 3 each to
`def-cg-finite-lattice-congruence-and-interval-projections` and `thm-cg-bruhat-subword-characterization`,
2 to `thm-cg-bruhat-parabolic-projection-and-quotients`, and one each to
`lem-cg-bruhat-right-exchange-and-augmentation`, `def-cg-canonical-reflection-homomorphism`,
`thm-hh-coxeter-exchange-deletion-and-faithfulness` and
`def-cg-parabolic-quotient-and-two-sided-minima` — plus two page rows
(`bruhat-subword-order-and-lifting` batch 12, `finite-lattice-projections-and-coxeter-chain-labels`
batch 5), each with the exact required claim and its use. The in-run suppliers live on batch 2
(`coxeter-presentations-exchange-and-reduced-word-theorems`, order 1708), batch 4
(`real-forms-and-reflection-geometry`, order 1724), batch 5 (order 1726) and batch 12 (order 1740),
all strictly earlier. `frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32`
completes with every batch-16 edge reviewed and no orphaned rows. The input contains **no proposed
removals**.

## Checks run (actual results)

| check | command (prefix `node`) | result |
|---|---|---|
| manifest dependency fields | `tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-16.pages.json` | `7 item(s), 0 normalized, 0 error(s)` |
| scaffold policy (whole run) | `tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | `211 scoped item(s), 0 error(s), 0 warning(s)` |
| coverage | `tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-16.coverage.json --require-destination` | `1 page(s), 21 harvested result(s), 0 error(s), 0 warning(s)` |
| full-text fetch | `tools/source-fetch-check.mjs --coverage ...batch-16.coverage.json --stamp` | `3/3 source(s) fetch-verified (3 newly stamped)` |
| full-text fetch (check mode, after all edits) | `tools/source-fetch-check.mjs --coverage ...batch-16.coverage.json` | `3/3 source(s) fetch-verified` |
| URL liveness | `tools/url-sweep.mjs --coverage ...batch-16.coverage.json --out /tmp/b16-url-liveness.json --recover --fail-on-dead` | `3/3 live; 0 failed; 0 suspect; 3 citation decision(s)` (artefact written to `/tmp` so shared run state is untouched) |
| source backing | `tools/source-backing.mjs --coverage ...batch-16.coverage.json --liveness /tmp/b16-url-liveness.json --reharvest-plan /tmp/b16-reharvest.json` | `4 authored result(s) across 1 file(s), every one still backed` |
| readiness (whole run) | `tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | `items 211, ready 211`; the 18 open entries are all `Empty scaffold inventory` for sibling batches; **none names a batch-16 item** |
| dependency levels (whole run) | `tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | exit 1 with exactly 18 `empty scaffold inventory` errors for not-yet-scaffolded sibling pages; **no cycle, dependency or label error names a batch-16 item** |
| dependency ledger | `tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | exit 0; every batch-16 edge reviewed, no orphans |
| manifest integrity | `tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | `64 page(s) owed, 64 in the manifests; no scope drift` |
| plan (scoped) | `tools/validate-plan.mjs research/plan-spec.json --pages-file <pair ids>` | exit 0: page order acyclic and consistent, prerequisite lists as declared; the item-level pass is vacuous because the plan-spec item arrays of these pages are empty |
| plan (run mode) | `tools/validate-plan.mjs research/plan-spec.json --run frontier-42-coxeter-32` | aborts with `frontier gate selection: Empty frontier page ...` while sibling batches are mid-flight (the pre-splice state recorded by sibling batches) |
| wikilink/deps consistency and dep resolution | local extraction of every `[[...]]` plus a resolution pass over `deps`/`justified_by` | 0 unresolved links, 0 links outside `deps`/`justified_by`, 0 self-dependencies; every dep resolves to an on-disk item, an in-run manifest item or a planned id, and each `justified_by` target depends on its item |

Probe run for completeness, with honest result: `node tools/frontier-item-gate.mjs --run
frontier-42-coxeter-32 --tool extcheck` returns `FAIL` with `focus-item-unknown` for all 211
not-yet-authored manifest ids (including the seven of this batch). This is the same pre-authoring
state recorded by sibling batches: the stage-1 battery does not include the item-scoped `extcheck`,
which returns once Step 3b exists item files to resolve. No batch-16 subject is involved in a
mathematical failure.

The whole-run `step1-readiness`, `item-dependency-levels`, ledger and run-mode `validate-plan` joins
cannot fully pass while sibling batches are mid-flight; every remaining failure names only other
batches' empty files, and every check that this batch can complete passes for its seven items.

## Published defects and observations for the owner/canonical ledger

No defect was found in any published item this batch consumes. Three observations, none of them a
library defect claim:

1. **Source print defect (recorded above).** Zhao's Theorem 4.2 prints `= 1` where its proof gives
   parity balance; the scaffold uses the correct δ-form, cross-checked against Björner–Brenti
   Corollary 2.7.11 and Jones Corollary 2.13.
2. **Excluded appendix machinery (recorded above).** The reduced-Euler-characteristic and PL-sphere
   facts behind Björner–Brenti Corollary 2.7.10 are not consumed; the sign formula is proved
   combinatorially instead, so no PL/CW supplier is owed by this pair.
3. **Fullness boundary (recorded above).** The general quotient refinement
   μ_J(u,w) = (−1)^{ℓ(u,w)} if [u,w]_J is full and 0 otherwise is *not* built here; only the
   full-interval theorem and one explicitly computed quotient failure are. If the owner wants the
   general quotient statement, it needs a separate pair (the quotient fullness criterion), which
   this scaffold neither creates nor consumes.

## Completion

- All seven items are recorded `ready` with their examined dependency ids as evidence
  (`research/frontier-42-coxeter-32-step1-<id>.json`, current for the manifest bytes on disk).
- No item is escalated: every item has a complete proof strategy with met prerequisites, the
  labelling caveats and the quotient-scope boundary are declared once and carried to their users,
  and no page split is needed (4 + 3 items against the 100-item cap).
- This batch is mathematically scaffolded but not proved: the seven items are Step-3 authoring
  contracts. No published content, shared plan, engine state or verdict was edited, and no selected
  pair was changed.

## Self-review corrections before hand-off

1. `lem-cg-bruhat-increasing-chain-and-local-descent-replacement`: the induction in clause (i) was
   re-worded to apply to the rooted interval `([m_{k-1},b],c)` (the same top and root chain for both
   prefixes) after the equality of the last deleted positions, so the two increasing prefixes are
   chains of one labelled interval; the earlier draft compared the prefixes under their own retained
   expressions, which would not have instantiated the induction hypothesis.
2. Clause (iv) of the same lemma was corrected to conclude `λ(k') ≺ λ(m)` from the *first* differing
   entry, which lies at the descent position `e`, so the later entries (whose labels may change when
   the retained expression changes) play no role in the comparison.
3. `thm-cg-bruhat-eulerian-intervals-and-mobius`: the falling-chain clause was changed from an
   independent assumption to a derived equivalent (the count is obtained from the falling-chain
   formula plus the sign formula), and the scope clause now names the quotient supplier explicitly.
4. The coverage file's `deferred` destinations were checked to resolve (they name the two
   prerequisite plan pages), and the two `out-of-scope` families carry specific reasons rather than
   a shared sentence.
5. The cross-batch input was regenerated after it was found to be missing the batch-2 and batch-4
   supplier edges; `frontier-dependency-ledger.mjs refresh` now shows no batch-16 edge without a
   review.
6. Because readiness hashes cover the transitive closure, every record was re-recorded after its
   item or closure changed (the last such edit was the quotient statement's displayed reduced
   expression for 3412), and a final `step1-decisions check` confirms no batch-16 item is stale:
   `items 211, ready 211` with only `Empty scaffold inventory` entries for sibling batches open.
