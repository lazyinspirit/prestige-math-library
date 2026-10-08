# Step 3b pair report — `heaps-commutation-classes-and-fully-commutative-elements`

Run `frontier-42-coxeter-32` · role alpha-high · label
`step3b-pair-heaps-commutation-classes-and-fully-commutative-elements-288c339d29bf6b6e`.

- A page: `heaps-commutation-classes-and-fully-commutative-elements` (batch 28, order 1772, kind A).
- B page: `heaps-commutation-classes-and-fully-commutative-elements-examples` (batch 28, order 1773, kind B).
- Dispatch order (ascending dependency level; ties by page order then item ID, exactly as dispatched):
  0. `def-cg-linear-extension-of-a-finite-poset` (A)
  1. `def-cg-labeled-word-heap-and-fully-commutative-element` (A)
  1. `lem-cg-finite-poset-linear-extensions-and-connectivity` (A)
  2. `lem-cg-convex-chains-consecutive-in-a-linear-extension` (A)
  2. `thm-cg-heaps-classify-commutation-classes` (A)
  5. `thm-cg-fully-commutative-forbidden-chain-criterion` (A)
  6. `ex-cg-heap-of-one-three-two-in-a3` (B)
  6. `ex-cg-heap-of-one-two-one-in-a2-and-long-braid` (B)
  14. `thm-cg-fully-commutative-weak-intervals-are-distributive` (A)
  15. `ex-cg-distributive-weak-intervals-of-fully-commutative-elements` (B)
  15. `ex-cg-nondistributive-weak-interval-of-a-non-fully-commutative-element` (B)

## Entry state and owned obligations

A prior alpha-high dispatch for the same pair (label `...-a241fa56b9655807`, since
stopped; its interrupted report was at this same path) authored drafts of all eleven
item files: the ten original scaffold IDs plus the local addition
`def-cg-linear-extension-of-a-finite-poset`. The addition is absent from the immutable
pre-author scaffold inventory (`research/frontier-42-coxeter-32-step3-auditor-baseline.json`,
which lists 302 items including the ten originals and does not list the addition) and from
`existing_item_files`; per the dispatch it is engine-certified after successful dispatch and
is not put through a self item decision. This dispatch re-audits every item in the dispatch
order against the current supplier drafts, repairs local gaps, completes the strict proof
contracts, refreshes the pair scope decision (invalidated by the addition changing the scope
hash), records item decisions for the ten original IDs, refreshes the dependency ledger, and
runs the Step-3 acceptance checks.

Entry obligations:

1. Re-verify each item in dependency order against current suppliers (batch 2:
   `def-hh-coxeter-matrix-word-group-and-length`, `thm-hh-matsumoto-reduced-word-theorem`,
   `thm-hh-coxeter-exchange-deletion-and-faithfulness`; batch 23:
   `def-cg-left-right-weak-order-and-descents`,
   `lem-cg-weak-order-prefix-property-and-left-translation`,
   `lem-cg-weak-order-is-a-graded-partial-order`; published `def-partial-order`,
   `def-chain`, `def-maximal-element`, `def-graded-poset-and-rank`,
   `def-lattice-distributive-lattice-and-order-ideal`,
   `lem-order-ideals-form-a-distributive-lattice`) and repair local gaps.
2. Build `research/frontier-42-coxeter-32-batch-28.proof-contracts.json` (version 1, all 11
   items) and pass `node tools/proof-contract.mjs ... --strict`.
3. Reconcile the owned cross-batch rows against current item clauses and proof uses,
   preserve sibling rows, and refresh the unified ledger.
4. Refresh the pair scope decision (`record-scope`, sufficient) and record the ten original
   item decisions (`record-item`) with confidence 1 and examined dependencies.
5. Run the Step-3 acceptance checks (explicit-path precheck and rendercheck, content policy,
   strict proof contracts, dependency-level checks, `validate-plan`), report pre-splice plan
   mismatches for Step 4, and run `proof-layout` once on all changed item paths.

## Inputs read in this pass

`CLAUDE.md`, `SCHEMA.md`, `briefs/group-author.md`, `briefs/tasks/frontier-dependency-ledger.md`;
the dispatch task file; `batch-28` manifest/coverage/notes/cross-batch inputs; the Step 3a pair
review and its receipt; `research/frontier-42-coxeter-32-owner-authoring-direction.md`;
`research/frontier-42-coxeter-32-alpha-step1-drift.md` §heaps (VERDICT `no-drift`); the current
drafts of every in-run supplier clause used by the pair, read in full (batch 2 and batch 23
item files listed above); the published supplier items; all eleven owned item files read in
full; `tools/proof-contract.mjs`, `tools/step3-decisions.mjs`, `tools/facts-block.mjs`.

## Status ledger (updated as items complete)

| # | level | item | status | notes |
|---|-------|------|--------|-------|
| 1 | 0 | def-cg-linear-extension-of-a-finite-poset | audited, unchanged | addition (engine-certified; no item decision); exact suppliers and source locators checked below |
| 2 | 1 | def-cg-labeled-word-heap-and-fully-commutative-element | repaired, audited | clarified the $m(s,t)=2$ commutation derivation from the Coxeter relators; manifest synchronized |
| 3 | 1 | lem-cg-finite-poset-linear-extensions-and-connectivity | repaired, audited | added the required Given declaration; finite recursion and empty case checked |
| 4 | 2 | lem-cg-convex-chains-consecutive-in-a-linear-extension | repaired, audited | added the required Given declaration; contraction, acyclicity and expansion checked |
| 5 | 2 | thm-cg-heaps-classify-commutation-classes | repaired, audited | closed the transitive-path gap in adjacent-swap criterion; explicit heap inverse; source caveat recorded |
| 6 | 5 | thm-cg-fully-commutative-forbidden-chain-criterion | repaired, audited | conjunction wording confirmed; reducedness proved from M-reducedness; Nadeau Prop. 2.6 not relied upon |
| 7 | 6 | ex-cg-heap-of-one-three-two-in-a3 | repaired, audited | checked V heap, both linear extensions, five ideals; added Given declaration |
| 8 | 6 | ex-cg-heap-of-one-two-one-in-a2-and-long-braid | repaired, audited | checked dihedral reduced words, criterion failure, distinct classes and four ideals; added Given declaration |
| 9 | 14 | thm-cg-fully-commutative-weak-intervals-are-distributive | provisionally authored; escalate | batch-23 weak-order suppliers remain outside current 3b-author coverage; exact clauses and consuming steps recorded in item/report |
| 10 | 15 | ex-cg-distributive-weak-intervals-of-fully-commutative-elements | provisionally authored; escalate | depends on escalated A6 and open batch-23 weak-order suppliers; explicit note added |
| 11 | 15 | ex-cg-nondistributive-weak-interval-of-a-non-fully-commutative-element | provisionally authored; escalate | A6 and batch-23 weak-order suppliers remain open; A2 group and length facts proved locally after removing an AI-generated-statement dependency |

## Item checkpoints

(appended in dependency order)

### Current dispatch checkpoint — item 1

Current task label `step3b-pair-heaps-commutation-classes-and-fully-commutative-elements-16c25a8033b2996b` is a restarted dispatch at the same report path; the previous alpha-high dispatch stopped with this checkpoint table still pending. Live run status was recomputed from `.autopilot/frontier-42-coxeter-32`: run `frontier-42-coxeter-32` remains running in 3b-author, with no in-flight worker; the stage has unrelated JSON-decoding and plan-parser blockers (see handoff). The current item draft is `def-cg-linear-extension-of-a-finite-poset`, a finite-poset definition with dependency level 0, `deps: [def-partial-order, def-chain]`, and `justified_by: [lem-cg-finite-poset-linear-extensions-and-connectivity]`. The published suppliers were read in full. The definition correctly defines a listing of every element exactly once, order-preserving, handles the empty poset, and explicitly abstains from asserting existence; no mathematical edit is needed. Its source locators were checked against Stembridge, §1.2, PDF pp. 4–5 (definition of a linear extension as a total order consistent with the poset, and labeled readings), and Krattenthaler, §3, PDF p. 5 (read labels along a linear extension). Stembridge's complete relevant passage includes the adjacent heap definition and Proposition 1.2; Krattenthaler's relevant paragraph runs through the identification of heaps with commutation classes. This is the required predecessor checkpoint before surveying later item drafts. Next: author/recheck item 2 and its exact suppliers.

### Item 2 — `def-cg-labeled-word-heap-and-fully-commutative-element`

The current definition was read in full. Its exact suppliers are `def-hh-coxeter-matrix-word-group-and-length`, `def-partial-order`, and the preceding local linear-extension definition; the existing manifest and item metadata agree at dependency level 1. The batch-2 Coxeter-presentation Definition and its Step-3 item decision were checked. The m=2 relator and the involution relators give $st=ts$: $st=(st)^{-1}=t^{-1}s^{-1}=ts$. The batch-2 exact-order supplier chain was also checked at its current statements and decisions: `lem-hh-dihedral-root-recurrence-and-root-sign` (repaired), `thm-hh-coxeter-exchange-deletion-and-faithfulness` (accepted), and the defining item (accepted). No supplier is unfinished for the uses in this definition. The word-heap relation, label-preserving isomorphism, linear extensions, commutation classes, full commutativity, empty-word behavior and explicit abstentions are internally consistent; no Choice is used. Stembridge §1.1, PDF pp. 3–4, supports the commutation-class and full-commutativity conventions; §1.2, PDF pp. 4–5, defines the positional heap relation using $m(s_i,s_j)\ne2$, including repeated labels. Nadeau Definition 2.3, PDF pp. 4–5, was checked for the full-commutativity convention. A possible omission of same-label comparability in Nadeau's later abstract Γ-heap definition is flagged for recheck before the A5 criterion; this item follows Stembridge's explicit positional relation. One local clarity repair made the $m=2$ derivation explicit; the sole owned manifest statement was synchronized from the authored file. This Definition has no phase proof steps; its proof contract will state that specifically. Next: item 3, `lem-cg-finite-poset-linear-extensions-and-connectivity`.

### Item 3 — `lem-cg-finite-poset-linear-extensions-and-connectivity`

Exact suppliers checked: `def-partial-order`, `def-maximal-element`, `def-lattice-distributive-lattice-and-order-ideal`, and the earlier local linear-extension definition. The current manifest and item metadata agree at level 1. The finite descent argument in 1.1 uses a fixed listing and least-index recursion, so it needs no choice; it proves distinctness via transitivity. The greedy extension argument handles $I=\varnothing$ and $I=P$, and any extension of $I$ followed by any extension of $P\setminus I$ respects all cross-relations because the ideal property rules out $y\prec x$ for $x\in I$, $y\notin I$. Adjacent swaps of incomparable elements preserve linear extensions; the induction on $|P|$ correctly moves the common maximal last element to the end and recurses on the induced subposet. No unfinished supplier or open obligation was found. Added the required `**Given:**` declaration to the proof section, preserving the proof route. The direct proof is consistent with Stembridge, Proposition 1.2 proof, PDF pp. 4–5; the locally proved finite-poset claims do not rely on a literature argument. No Choice is used. Next: item 4, `lem-cg-convex-chains-consecutive-in-a-linear-extension`.

### Item 4 — `lem-cg-convex-chains-consecutive-in-a-linear-extension`

Exact suppliers checked: `lem-cg-finite-poset-linear-extensions-and-connectivity`, `def-partial-order`, `def-chain`, `def-graded-poset-and-rank`, and the linear-extension definition. At level 2, its metadata matches the manifest. The quotient construction contracts the nonempty convex chain to a new vertex. A directed cycle avoiding that vertex would contradict the original strict order; a cycle through it would give $c'\prec y\preceq x\prec c$ with $c',c\in C$ and $x\notin C$, contradicting convexity. Thus the transitive closure is antisymmetric. Expanding the contracted vertex into the chain's increasing order respects internal and cross-relations, so it gives the required extension. For a cover, the two-element chain is convex by the no-intermediate-element definition. The argument handles $C=P$ and singleton chains; no Choice is used. Added the required `**Given:**` declaration to the proof section. Stembridge, Proposition 2.3 proof, PDF pp. 8–9, states this contiguity fact; the current item supplies the complete contraction and expansion proof. No unfinished supplier or open obligation was found. Next: item 5, `thm-cg-heaps-classify-commutation-classes`.

### Item 5 — `thm-cg-heaps-classify-commutation-classes`

Exact suppliers checked: `def-cg-labeled-word-heap-and-fully-commutative-element`, `lem-cg-finite-poset-linear-extensions-and-connectivity`, `def-hh-coxeter-matrix-word-group-and-length`, and `def-partial-order`; metadata and manifest agree at level 2. No unfinished supplier was found. The proof now explicitly handles transitive order paths when characterizing consecutive incomparable positions, rather than inferring incomparability from absence of a direct generating relation. The adjacent-position transposition preserves the generating relation and therefore its reflexive transitive closure. The isomorphism-to-word direction now states equal heap cardinalities, and the inverse from a labeled heap is defined through its labeled readings and shown independent of the representing word. Added the required proof `**Given:**` declaration. The empty word and finite word classes are included; repeated labels are chains, which proves injectivity and multiplicity preservation. No Choice is used. Stembridge §1.2, PDF pp. 4–5, including Proposition 1.2 and the heap-invariance remark, and Krattenthaler §§2–3, PDF pp. 2–5, were read for the precise heap and reading conventions.

Source finding (confidence 0.98): Nadeau, *On the Length of Fully Commutative Elements*, §2.3–§2.4, PDF pp. 5–6, defines the Coxeter graph with edges only for distinct noncommuting generators, but its abstract Γ-heap conditions do not explicitly order repeated occurrences of an isolated label. In type $A_1$, the two-position word $ss$ therefore gives an antichain satisfying the written (h1) and (h2), although $ss=1$ is not reduced and no fully commutative element has that two-position heap. Unless self-dependence is intended implicitly, the stated general heap bijection needs a same-label condition. The current proof follows Stembridge's explicit relation $i<j$ and $m(s_i,s_j)\ne2$, which includes repeated labels; Nadeau was removed from the heap-classification theorem's source list and is not used to discharge this result. This is a source qualification, not a blocker for the locally complete proof; the affected A-page coverage rows were changed to out-of-scope. Next: item 6, `thm-cg-fully-commutative-forbidden-chain-criterion`.

### Item 6 — `thm-cg-fully-commutative-forbidden-chain-criterion`

Exact suppliers checked: the labeled-word/heap definition, the convex-chain linear-extension lemma, the heap-classification theorem, `def-hh-coxeter-matrix-word-group-and-length`, and `thm-hh-matsumoto-reduced-word-theorem`. The latter has a current accepted Step-3 item decision; clauses (1) and (2) supply braid connectivity of reduced expressions and M-reducedness. No unfinished supplier was found. The current statement correctly says that conditions (a) and (b) together are equivalent to (c), matching CG-24 and the Step-3a counterexamples; this preserves the full designed claim. The proof checks the braid-factor criterion by projecting words to the two labels, proves all braid moves from an (a)-heap are commutations, and uses M-reducedness plus the no-equal-cover condition to derive reducedness without assuming it. The necessity arguments use convex-chain and cover contiguity, and the final heap-identification direction follows from the earlier complete invariant. The empty word and $m=\infty$ cases are covered by the quantifiers and caveat; no Choice is used. Added the proof `**Given:**` declaration and clarified why the two projections differ; removed Nadeau from the source list because of the recorded repeated-label qualification. Stembridge Propositions 1.1 and 2.3, PDF pp. 4 and 8–9, were read in full for the exact conjunction and braid/heap criteria. The batch coverage rows for Nadeau's heap bijection, Prop. 2.6 and Lemma 2.4 are now marked out-of-scope for the owned proof; its separate FC definition and convexity-definition entries remain. Next: item 7, `ex-cg-heap-of-one-three-two-in-a3`.

### Item 7 — `ex-cg-heap-of-one-three-two-in-a3`

Exact suppliers checked: the labeled-heap definition, heap-classification theorem, corrected fully-commutative criterion, `def-hh-coxeter-matrix-word-group-and-length`, `def-graded-poset-and-rank`, and `lem-order-ideals-form-a-distributive-lattice`. The current item and manifest agree at level 6. The $A_3$ relations give exactly $1\prec3$ and $2\prec3$; the five downsets are precisely those with $3$ absent and arbitrary subset of $\{1,2\}$, or all of $\{1,2,3\}$. Both covers have distinct labels, every chain has at most two elements, and the criterion therefore proves reducedness and full commutativity. The linear extensions are exactly $(1,2,3)$ and $(2,1,3)$, yielding the two reduced words by the classification theorem. Added the required `**Given:**` declaration to Verification. The computations cover the finite example without Choice; no supplier is unfinished. Next: item 8, `ex-cg-heap-of-one-two-one-in-a2-and-long-braid`.

### Item 8 — `ex-cg-heap-of-one-two-one-in-a2-and-long-braid`

Exact suppliers checked: the labeled-heap definition, heap-classification theorem, forbidden-chain criterion, `thm-hh-matsumoto-reduced-word-theorem`, `def-hh-coxeter-matrix-word-group-and-length`, and `def-graded-poset-and-rank`. The batch-2 Matsumoto supplier has a current accepted item decision; clauses (1) and (3) provide braid connectivity and ambient reducedness of alternating dihedral words up to $m=3$. No unfinished supplier was found. The heap is the three-element chain with two distinct-label covers; the whole chain is convex and alternating of length $m=3$, so condition (a) fails while (b) holds. The two length-three alternating words are reduced, braid-related, and exhaustive by Matsumoto and the two-generator alphabet; neither admits a commuting adjacent swap, so they are separate singleton commutativity classes. The four order ideals are exactly the chain prefixes. Added the required `**Given:**` declaration to Verification. This is a finite calculation with no Choice. Next: item 9, `thm-cg-fully-commutative-weak-intervals-are-distributive`.

### Item 9 — `thm-cg-fully-commutative-weak-intervals-are-distributive`

The exact declared suppliers were read in their current files: `def-cg-left-right-weak-order-and-descents`, `lem-cg-weak-order-prefix-property-and-left-translation`, and `lem-cg-weak-order-is-a-graded-partial-order`, as well as the local heap/linear-extension suppliers and published order-ideal lattice items. The batch-23 pair report still has open author/check/decision obligations, and the recomputed live run at 11:50:39Z still lists `weak-order-inversions-and-lattice-operations` among the 3b-author pages missing; its item files are current drafts, not current Step-3 completions. This A6 item is therefore authored provisionally and remains escalated. Exact consuming uses after dependency-layer repair: the weak-order Definition supplies the order and interval conventions in the preamble and Facts F2, and is cited in step 1.1; the prefix lemma clause (1), the length identity, is used in step 1.1, while clause (2), the prefix property, is used in steps 2.3 and 3.2; the graded-order lemma clause (2), including its cover-chain property, is used in step 3.1. The proof is locally complete conditional on these clauses: reduced-word suffix completion produces a linear-extension prefix ideal; label-count invariance gives well-definedness; the inverse is the product read from an ideal; and the two maps preserve order and give the distributive lattice operations. The ideal-heap restriction proof now names the natural labeled bijection, and meet/join witnesses are defined before use. Nadeau Prop. 2.6 was removed from the item sources because the equal-label qualification above makes that abstract heap citation unsafe for this proof; the local proof and Stembridge Lemma 2.1 support the result. The item contains an explicit open-supplier note. Keep its Step-3 item decision `escalate` until the three batch-23 items complete Step 3b and their current clauses are reconciled against the actual uses. Next: item 10, `ex-cg-distributive-weak-intervals-of-fully-commutative-elements`.

### Item 10 — `ex-cg-distributive-weak-intervals-of-fully-commutative-elements`

Exact suppliers checked include the heap definition/classification, the forbidden-chain criterion, `thm-cg-fully-commutative-weak-intervals-are-distributive`, `def-cg-left-right-weak-order-and-descents`, `lem-cg-weak-order-prefix-property-and-left-translation`, `thm-hh-coxeter-exchange-deletion-and-faithfulness`, and `def-hh-coxeter-matrix-word-group-and-length`. The type-$A_3$ heap is a two-element antichain or the three-element V as stated; the weak intervals have exactly 4 and 5 elements via the A6 ideal maps, and their displayed meets/joins agree with intersection/union. The `s_1,s_3` pair is distinct and commuting, and the explicit two-position heap has no transitive path between them. Added the required `**Given:**` declaration and clarified that point in F1 and verification 1.1. Because A6 is escalated, this example is provisional and must also be recorded `escalate`. Its direct batch-23 suppliers are `def-cg-left-right-weak-order-and-descents` (Example order/interval and use through A6 in steps 2.1–2.2) and `lem-cg-weak-order-prefix-property-and-left-translation` (Fact F6, steps 2.1–2.2). A6 also depends on `lem-cg-weak-order-is-a-graded-partial-order`, whose clause 2 is consumed in A6 step 3.1; all three batch-23 suppliers remain outside current 3b-author coverage and must be reconciled before this consumer can be accepted. The accepted batch-2 exchange/faithfulness supplier is complete for its use in F5. Next: item 11, `ex-cg-nondistributive-weak-interval-of-a-non-fully-commutative-element`.

### Item 11 — ex-cg-nondistributive-weak-interval-of-a-non-fully-commutative-element

Exact current suppliers checked: the corrected forbidden-chain criterion, A6, the weak-order definition/prefix/graded-cover suppliers, def-lattice-distributive-lattice-and-order-ideal, thm-hh-matsumoto-reduced-word-theorem and def-hh-coxeter-matrix-word-group-and-length. The A2 braid example was inspected provisionally, then removed as a proof dependency after content-policy identified its statement provenance as ai-generated; Verification 1.1 now derives the six group elements, the reduced words and the length-three top directly from the local Coxeter presentation and the accepted Matsumoto clauses. The local calculation is sound: the full A2 weak interval has six elements, while the displayed five-element pentagon is a subposet; the proof computes the six covers, shows the pentagon relations, and exhibits a distributive-identity failure with u=s1, v=s1s2, d=s2s1. I added the uniqueness justification for the length-two reduced words in the meet calculation and corrected the Stembridge locator: Figure 1(a) illustrates m=4, while the paper states the general dihedral conclusion and the A2 case is computed locally. Its exact current-run supplier obligations remain open: A6 is escalated and cited in Facts F7/Verification 4.1; def-cg-left-right-weak-order-and-descents is used in the preamble/Facts F1 and Verification 2.1, 3.1 and 4.1; lem-cg-weak-order-prefix-property-and-left-translation is used in Facts F2 and Verification 2.1 and 3.1; lem-cg-weak-order-is-a-graded-partial-order supplies covers in Facts F3 and Verification 2.1. The item has a supplier note under Remarks and must remain escalated until A6 and batch 23 complete Step 3b and the actual uses are reconciled. Next: registration, contracts, dependency evidence and scoped checks.

## Checks run

- The required explicit-path proof-layout command ran once on the ten changed item files: 10 items, 51 numbered steps, 0 defects.
- Explicit-path precheck covered all 11 owned items: 9 proof-bearing files passed and the two definitions were not applicable.
- Explicit-path rendercheck covered the 11 owned items and both library pages: 13 files, 0 errors and 0 warnings.
- Content policy passed for the batch-28 manifest: 11 items, 0 errors or warnings.
- Strict proof contracts passed again after the current supplier revision: all 11 items, 0 errors or warnings. The contracts record 51 step derivations, exact current supplier excerpts and uses, and all eight boundary dispositions per item.
- Manifest dependency declarations passed for all 11 items. The coverage checklist passed for both pages and all 36 harvested source results. Manifest integrity found all 64 run pages present.
- Source-fetch check verified 7/7 sources; source-backing confirmed backing for 10 authored results.
- The full-run dependency-level check was rerun after the batch-23 supplier revision. It reports the owned items at levels 0, 1, 1, 2, 2, 5, 6, 6, 14, 15 and 15 in dispatch order, with no owned-item mismatch. The full check still reports 14 level mismatches in sibling items; these are outside this pair and were not edited.
- Validate-plan was run against research/plan-spec.json before splice. It reports that all 11 current pair items are absent from the selected plan pages, which still list 0 planned items for these pages, along with 121 redundant-prerequisite diagnostics and 30 undeclared-prerequisite errors elsewhere in the run. The A-page requirement for finite-lattice-projections-and-coxeter-chain-labels is also unused by this pair; preserve it for the owner’s Step-4 plan reconciliation.
- The owned cross-batch file retains its sibling rows; nine rows owned by this pair were reconciled to current uses, and the unified frontier dependency ledger was refreshed.

## Open obligations and escalations

### Supplier escalations

The batch-23 pair weak-order-inversions-and-lattice-operations remains outside current 3b-author coverage. Its item files are drafts with open author, check and decision work, so the following assigned consumers remain escalated. The graded weak-order supplier item lem-cg-weak-order-is-a-graded-partial-order changed at 2026-10-07T12:00:04Z, after the three escalation receipts were recorded. I re-read its current statement and proof: clause (2) still supplies the cover characterization and cover-chain property used by A6 step 3.1 and B11 step 2.1; it has no current Step-3 item decision. Strict proof contracts still pass against its current statement. The dependency change makes all three consumer escalation receipts stale; step3-decisions check now marks them owner-held and requires the owner to reconcile the new input. No owner authority was used.

- thm-cg-fully-commutative-weak-intervals-are-distributive: def-cg-left-right-weak-order-and-descents supplies the interval conventions in the statement and F2 and is used in step 1.1; lem-cg-weak-order-prefix-property-and-left-translation clause 1 is used in step 1.1 and clause 2 in steps 2.3 and 3.2; lem-cg-weak-order-is-a-graded-partial-order clause 2 is used in step 3.1.
- ex-cg-distributive-weak-intervals-of-fully-commutative-elements uses A6’s order-isomorphism in Verification steps 2.1–2.2, the weak-order definition in its Example and interval computations, and the prefix lemma clause 2 through F6 in steps 2.1–2.2. A6’s graded-order input is also still open.
- ex-cg-nondistributive-weak-interval-of-a-non-fully-commutative-element cites A6’s caveat in F7 and step 4.1; the weak-order definition is used in the Example/F1 and steps 2.1, 3.1 and 4.1; the prefix lemma is used through F2 in steps 2.1 and 3.1; and the graded-order cover clause is used through F3 in step 2.1.

Reconcile the completed batch-23 clauses and current item decisions against these uses before accepting any of the three consumers. Their item receipts are escalate at confidence 1; only the owner may resolve them.

### Step-4 plan and prose handoff

- The plan’s A/B item arrays are pre-splice and empty. All 11 current manifest items therefore appear as frontier-selection mismatches in validate-plan. Step 4 must splice the current manifest inventory into research/plan-spec.json and resolve unrelated plan diagnostics without hiding the still-open batch-23 edges.
- The designed A page still requires finite-lattice-projections-and-coxeter-chain-labels, but no owned item consumes one of its clauses. The requires field was preserved; this unused page edge is for the owner’s Step-4 decision.
- The A-page body now describes the actual right weak-order, prefix and cover inputs and the local ideal construction. The B-page body clarifies that the six-element A2 interval contains a five-element pentagon subposet; it does not call the full interval a pentagon. Preserve these page-prose amendments at splice.

### Source qualification and run blockers

- No published-library defect was confirmed. A source qualification remains for Nadeau, On the Length of Fully Commutative Elements, §2.3–§2.4, PDF pp. 5–6 (confidence 0.98): in type A1, the word ss appears to satisfy the written abstract Γ-heap conditions as a two-element antichain even though ss = 1 is not reduced, unless same-label dependence is intended implicitly. The affected owned claims were checked in thm-cg-heaps-classify-commutation-classes, thm-cg-fully-commutative-forbidden-chain-criterion and thm-cg-fully-commutative-weak-intervals-are-distributive; none now relies on that abstract heap bijection. The first two use Stembridge’s positional heap relation, and A6’s Nadeau Proposition 2.6 citation was removed in favor of its local proof and Stembridge Lemma 2.1. Nadeau’s A-page heap-bijection and criterion coverage rows are out-of-scope. A source repair would state same-label dependence explicitly or clarify the intended convention.
- Recomputed live status at 2026-10-07 12:02:25 UTC: the run remains in 3b-author, 18/32 pairs covered, with no worker in flight. Stage blockers are the malformed exclusive-cohort JSON escape at position 51466, the unregistered profile gpt-6-luna-xhigh, and the plan parser’s invalid backslash-l escape at line 19, column 84. These are outside this pair and remain for the run owner/operator.
- The new local prerequisite def-cg-linear-extension-of-a-finite-poset is fully authored at dependency level 0 and registered in the A page, coverage and contracts. It is absent from the immutable pre-author inventory and existing-item-file list, so it has no self item receipt; engine certification is due after successful dispatch.

## Handoff

- Repaired original IDs: def-cg-labeled-word-heap-and-fully-commutative-element, lem-cg-finite-poset-linear-extensions-and-connectivity, lem-cg-convex-chains-consecutive-in-a-linear-extension, thm-cg-heaps-classify-commutation-classes, thm-cg-fully-commutative-forbidden-chain-criterion, ex-cg-heap-of-one-three-two-in-a3, and ex-cg-heap-of-one-two-one-in-a2-and-long-braid.
- Authored but escalated original IDs: thm-cg-fully-commutative-weak-intervals-are-distributive, ex-cg-distributive-weak-intervals-of-fully-commutative-elements, and ex-cg-nondistributive-weak-interval-of-a-non-fully-commutative-element.
- Current scope receipt: sufficient. Seven original-item receipts remain current as repaired at confidence 1 with examined dependencies. Three escalation receipts were recorded at confidence 1, but their hashes became stale after the batch-23 graded-order supplier changed; the current decision check requires owner reconciliation. The level-0 addition remains unreviewed by design.
