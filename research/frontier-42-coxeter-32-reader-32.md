# Reader 32 — frontier-42-coxeter-32

Batch: `32`. Independent review of the current authored items and their consumed supplier interfaces. This report is reader evidence, not a judge decision or certification.

## Opened inventory and order

Opened `CLAUDE.md`, `README.md`, `briefs/reader.md`, the relevant content rules in `SCHEMA.md`, the Step-5 review clauses of `WORKFLOW.md`, and the exact assigned `research/frontier-42-coxeter-32-batch-32.pages.json`. Opened both complete pages:

- `library/coxeter-groups/sortable-projections-and-finite-cambrian-lattices.md` (A).
- `library/coxeter-groups/sortable-projections-and-finite-cambrian-lattices-examples.md` (B, read only).

Opened all five assigned items completely, after their direct supplier interfaces and in supplier-before-consumer order:

1. `def-cg-recursive-sortable-projection-and-cambrian-congruence`.
2. `thm-cg-sortable-meet-join-closure-and-cambrian-quotient`.
3. `thm-cg-sortable-projection-greatest-element-and-interval-fibers`.
4. `ex-cg-a3-sortable-subset-and-a-three-element-fiber`.
5. `ex-cg-cambrian-quotient-of-s3-and-two-orientations`.

Opened the following supplier Definition/Statement interfaces in dependency order. This is an interface inventory, not a claim to have audited every foundational proof in their transitive closure:

- `def-hh-coxeter-matrix-word-group-and-length`.
- `def-finite-symmetric-group-and-permutation-notation`.
- `thm-hh-parabolic-minimal-representatives-and-length-additivity`.
- `def-cg-real-coxeter-form-and-reflection`.
- `lem-cg-reflection-form-invariance-and-rank-two-orders`.
- `def-cg-canonical-reflection-homomorphism`.
- `def-cg-parabolic-quotient-and-two-sided-minima`.
- `thm-cg-root-sign-and-simple-reflection-positivity`.
- `def-cg-geometric-inversion-set`.
- `def-cg-left-right-weak-order-and-descents`.
- `thm-cg-root-inversion-formulas-and-strong-exchange`.
- `lem-cg-weak-order-is-a-graded-partial-order`.
- `def-cg-finite-reflection-arrangement-and-spherical-chambers`.
- `thm-cg-finite-chamber-tiling-and-coset-face-identification`.
- `thm-cg-finite-parabolic-longest-element-and-opposition`.
- `thm-cg-weak-order-meet-semilattice-and-finite-lattice`.
- `lem-cg-weak-parabolic-projection-and-cover-joins`.
- `def-cg-coxeter-oriented-euler-form-and-c-sorting-word`.
- `lem-cg-greedy-sorting-word-and-rank-two-alignment`.
- `def-cg-sortable-element-skip-roots-and-cone`.
- `lem-cg-finite-rank-two-inversion-set-recognition`.
- `lem-cg-uniform-omega-positive-and-aligned-sortability`.
- `def-cg-initial-letter-sortable-projection`.
- `lem-cg-sortable-recursion-output-and-initial-choice-independence`.
- `lem-cg-sortable-skips-basis-and-cover-decomposition`.
- `lem-cg-sortable-cone-criterion-and-projection-monotonicity`.
- `thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions`.
- `def-cg-finite-lattice-congruence-and-interval-projections`.
- `lem-cg-lattice-quotient-descent-and-class-intervals`.
- `thm-cg-finite-lattice-interval-congruence-criterion`.

Additionally read complete Facts/Proof sections of the rank-two recognition lemma, the uniform alignment lemma, the skip-basis/cover-decomposition lemma, the cone/projection-monotonicity lemma, and both finite-lattice quotient/interval suppliers. Read the assigned batch's proof contracts, comparing all citation quotes with the current suppliers (allowing whitespace normalization), derivation steps and boundary records. Read the cross-batch dependency manifest as ownership evidence, not a mathematical verdict; batch-29 ownership of the two historical findings below was independently confirmed from its current pages manifest.

No pre-rendered reader evidence bundle was supplied or located in the run state. Source sections and the contract's quoted clauses were opened directly. Oversized tool results were continued in bounded sections; no absence conclusion rests on truncation.

## Mathematical review

The definition separates the kernel construction from the later representative-independence proof. Its stated finite-type hypotheses match its suppliers. Its forward justification is the interval-fiber theorem, which depends on the definition without using its promised congruence conclusion as an assumption.

In the lattice theorem, the meet argument uses inverse inversion sets throughout. Aligned rank-two traces all use the same orientation; their intersection is still an allowed trace, including terminal singletons and the zero-orientation case. Recognition constructs the meet and alignment proves its sortability. Join closure uses greatest-sortable-below and monotonicity, rather than assuming projection homomorphism. The rank-one parabolic-prefix argument makes the complement of the simple-generator filter join-closed. The crossing-cover argument proves the necessary cover assertion for arbitrary non-descent inputs, without assuming those inputs lie in the complementary standard parabolic. The wall normal is negative on the included chamber and is therefore `-e_s`; the cover decomposition and prefix compatibility then establish the initial-letter formula. The three induction cases preserve the needed rank or join-length decrease, including rotation of the Coxeter element. Quotient operations follow from the homomorphism identities.

In the endpoint theorem, opposition gives `(ww_0)_J = w_J w_0(J)` with the correct multiplication side. The terminal lower-projection formula uses sortable join closure and the terminal cover decomposition. The upper recursions retain the distinction between ambient and parabolic longest elements. In comparable-fiber induction, the descent branch lowers length and the ascent branch lowers rank; the mixed descent case is excluded by detection of the initial letter. Applying the established implication to the inverse orientation proves the converse and both composites. Monotonicity gives both directions of interval membership, so the interval-congruence criterion is applied only after its interval hypothesis is established.

The A3 example was recomputed in the explicitly stated right-to-left permutation convention, using left descents for sorting and length-additive right extensions for weak order. Both sorting tables, both complete fiber partitions, all listed recursion traces, all nontrivial fiber chains, and the sample meet/join computation were checked. One false block code was found and repaired below. The A2 reduction, sorting tables, both projection tables, Hasse diagram, two operation tables, endpoint products and all-pairs argument were checked. No unsupported counting result is imported: the counts here are finite enumerations.

## Authoritative source checks

Consulted [Reading–Speyer, arXiv:0803.2722v3](https://arxiv.org/pdf/0803.2722), Section 7: Theorems 7.1 and 7.3, printed p. 38, their complete proofs on pp. 39–40, and Remark 7.5 on p. 39. These establish sortable meet/join closure and projection preservation under the nonempty/bounded hypotheses, with the intersection identity specifically restricted to sortable inputs. Also read Proposition 6.13 and its complete proof on p. 37 for prefix compatibility. The local crossing-cover derivation supplies the broader hypothesis needed for the special case, rather than relying on the source's abbreviated Lemma-2.23 invocation.

Consulted [Reading, arXiv:math/0512339v1](https://arxiv.org/pdf/math/0512339), Section 3, printed pp. 10–11: Lemmas 3.5 and 3.6, Proposition 3.7, and their complete arguments, followed by the proof of Theorem 1.1. These establish the terminal formula, initial-letter upper formula, equality of the two fiber partitions, endpoint composites and interval description. The local proof retains the inverse orientation and the parabolic longest element in those formulas.

No claim is made to have read the whole papers or the cited Björner–Brenti book.

## Repairs and evidence

1. **A3 example, Proof 1.6, row `s_2s_3s_2`.** Changed the block code from `23|2` to `23|3`. In `(s_1s_3s_2)^infinity`, positions `2,3,5` carry `s_3,s_2,s_3`, and the last selected letter is in the second block. Their product is `s_3s_2s_3=s_2s_3s_2`. The positions, product and sortable classification were already correct; the displayed computation was false. Updated contract derivation `cprime-scan-second-half` to record the correct selected letters and blocks. The statement is unchanged.

2. **Lattice theorem, Proof 2.5.** The old proof showed `q != pi_c(y)` but then excluded `(sz)C` without explicitly explaining why its projection differs from `q`. Replaced the unused comparison with the needed one: the crossing lower element is `sz=u`, is outside the `s`-filter, and its projection lies below it, whereas `q` is above `s`. Also supplied the elementary finite perturbation argument that avoids the other defining hyperplanes inside the relative interior of the facet, rather than silently using finite-union avoidance as background. These were immediately closable proof omissions, repaired explicitly. Updated contract derivation `cover-wall-and-negative-skip`. The statement is unchanged.

3. **Endpoint theorem, Facts & Assumptions.** Restored missing backslashes in `pi_c`, `pi_{c^{-1}}` and `le_R` in Given. In F16 replaced the nonexistent clause `(1)` with actual clauses `(i)-(ii)` and stated the criterion under its interval-class hypothesis. The target was opened completely before correcting the citation. Updated F16's contract quote to include the actual interval hypothesis and both directions. The theorem's statement and proof are unchanged.

4. **Batch-32 proof contracts.** Refreshed the stale oversized quotes of the sortable definition, recursive projection definition, chamber-union theorem and cone criterion to exact current consumed clauses. Their old quotes included supplier prose changed by another writer during this session. The updates preserve citation sources, step uses, hypotheses and mathematical strength; no certification or independent-review record was added. Existing historical boundary-review records were retained, with their original hashes; the owner/engine must refresh evidence invalidated by the material item edits.

All three changed items were checked for `verification.judge`; none had a record to retain or remove. No page prose, published item, another batch's item/contract, plan, or workflow decision was edited. No withdrawal is proposed.

## Uneditable historical observations

Two batch-29 source statements observed during this review confused the group-theoretic domain with the geometric chamber domain. Both were subsequently corrected by another writer. They remain in the findings JSON as historical observations because this reader was not licensed to edit those carriers; they are **not allegations against the corrected current text**.

- **`thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions`, Statement (3), final consequence sentence.** The observed wording asserted that the fibers of `pi_c:W -> W` are unions of chambers. A fiber is a subset of `W`, whereas a union of closed chambers is a subset of `V`. The preceding cone identity correctly takes the union of the chambers *indexed by* a fiber, and does not identify the fiber itself with that geometric union. The current text now says that each group-theoretic fiber indexes the closed chambers whose union is the corresponding cone. Assigned consumer: `thm-cg-sortable-meet-join-closure-and-cambrian-quotient` (direct dependency). Defect class: `ill-formed`; severity: fatal for the literal observed statement, already corrected in current source.

- **`lem-cg-sortable-cone-criterion-and-projection-monotonicity`, Statement (3), consequence sentence.** The observed wording likewise described each fiber itself as a union of chambers. The same distinction between `W` and `V` is required. Its current consequence instead states that the closed chambers indexed by each fiber have union equal to its cone. Assigned consumer: `thm-cg-sortable-meet-join-closure-and-cambrian-quotient` (direct dependency). Defect class: `ill-formed`; severity: fatal for the literal observed statement, already corrected in current source.

The exact observed sentences and surrounding Statement interfaces were read before these changes, but no full-source raw hash was captured at that moment. I cannot bind them to an immutable pre-reader snapshot and will not substitute the corrected current hash. Thus both findings have `observed_source: null`. Source ownership/evidence reconciliation is a handoff limitation. The current mathematical interfaces used by batch 32 do distinguish the two domains correctly.

## Validation and page verdicts

Ran reflow on all three explicit changed paths: all unchanged by the formatter. Ran precheck on those same paths: **3 checked, 0 failing**. After all item edits and reflow, ran exactly one batched final proof-layout command on those paths: **3 items, 35 steps, 0 defects**. These are local formatting checks, not mathematical certification.

Independently enumerated the length-additive weak-order relations on S3 and S4. For both A2 orientations, checked full-lattice projection preservation on all 36 ordered pairs and the endpoint formula/interval membership on all six elements. For both A3 orientations, checked those identities on all 576 ordered pairs and all 24 elements, and checked the inverse-inversion intersection identity on all sortable pairs. All passed. These finite checks supplement the proofs; they do not prove general finite type.

- **A page `sortable-projections-and-finite-cambrian-lattices`:** its complete prose accurately summarizes the reviewed kernel construction, homomorphism and endpoint results. The local items are mathematically supported after the repairs above, relative to the opened supplier interfaces. Historical supplier domain observations are retained for owner reconciliation; no remaining current defect was established in this page or its assigned items.
- **B page `sortable-projections-and-finite-cambrian-lattices-examples`:** its complete prose accurately describes the two examples, including the second orientation and exhaustive fiber calculations. The false A3 block code is repaired in its assigned item. No B prose edit was made and no remaining page defect was established.

## Coverage limitations and handoff

Read all assigned pages and items, their direct dependency interfaces, the listed additional supplier proofs, and the cited source sections above. This is not a recursive audit of every foundational supplier or a review of unrelated frontiers. Supplier prose changed concurrently; the affected consumed clauses were refreshed, and the historical domain observations lack full-source byte binding. No unresolved general-mathematics uncertainty was identified in the assigned proofs after repair. The next action belongs to Step 5b: reconcile the two historical supplier observations with their producer's current repairs and refresh invalidated exact-hash evidence. No judge, gate, publication, or self-certification action was performed.
