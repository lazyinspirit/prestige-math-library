# Step 3b group f — batch 10

Run phase-2-next-17; dispatch step3b-f-07c2cab691967ade. Own the two existing A/B pairs and all 21 original IDs. No owner-authoring-direction file exists at dispatch start. Preserve independent Step 3a reviews and owner source-drop decision. No published edits or owner stamps.

Read CLAUDE.md, README.md, SCHEMA.md, design §53.1, current batch manifest/coverage/notes, Step 3a report, dependency-ledger instructions and direct published dependency statements/proofs. Prior source-reading claims are historical evidence only. Independently read SFM author-uploaded full-text conditions 1–3, Lemmas 1–6, Theorem 4 (both claims), Corollary 4.1, pp.147–155 via browser full text. Original exhausted PDF fetch is not retried or declared recovered. Authoring uses an explicit local semi-infinite-tape adaptation.

Audit repairs queued: fixed input in configuration count (unvisited input cells are not counted as space); explicit finite parser; tableau width includes full input and endpoint; local concrete compiler for quantitative self-reference instead of deterministic dovetailing; repeated unary diagonal lengths to cover zero bounds and finite exceptions; constant tracking in both recursive-padding inductions. No unresolved owner-held mathematical escalation found in the owned records.

## Checkpoint: def-boolean-formulas-cnf-and-satisfiability-interface

Authored explicit total bit parser, recursive semantics, certificate length and empty-list conventions. SAT includes CNF syntax; no maximum-index certificate blowup. Independently read Arora–Barak PDF pp.61–65, printed pp.45–49; the source uses CNF SAT, while this interface also permits general formulas.

Dependencies examined: `def-polynomial-time-verifier-and-reduction-interface`. No AC. Explicit item rendering and strict contract checks passed; definition has no numbered proof. Decision: repaired, confidence 1. Source locators: Arora and Barak, Computational Complexity: A Modern Approach, §2.3. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: def-bounded-turing-computation-tableau-interface

Repaired off-by-one width, certificate normalization, halting padding and left-boundary transition rule; fully specified every clause family. Actual physical halting transitions remain absent.

Dependencies examined: `def-boolean-formulas-cnf-and-satisfiability-interface`, `def-polynomial-time-verifier-and-reduction-interface`, `def-turing-machine-configuration`, `def-one-step-configuration-relation`, `def-turing-machine-initial-and-halting-configuration-interface`, `thm-multitape-machines-have-one-tape-simulations`, `lem-multitape-simulation-has-quadratic-time-overhead`. No AC. Explicit item rendering and strict contract checks passed; definition has no numbered proof. Decision: repaired, confidence 1. Source locators: Arora and Barak, Computational Complexity: A Modern Approach, §2.3.2. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations

Authored both tableau implications with cellwise uniqueness, induction, rejecting/accepting sinks and boundary protection. Adopted canonical phase numbering before certification.

Dependencies examined: `def-bounded-turing-computation-tableau-interface`, `def-one-step-configuration-relation`, `def-turing-machine-initial-and-halting-configuration-interface`. No AC. Explicit item rendering and strict contract checks passed; explicit precheck passed. Decision: repaired, confidence 1. Source locators: Arora and Barak, Computational Complexity: A Modern Approach, §2.3.2, Claim 2.12. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: lem-tableau-to-cnf-map-has-polynomial-size-and-time

Counted encoded tableau literals and index bits; authored all gate clauses and both gate-induction directions. Formula-to-CNF construction is explicitly equisatisfiable, including constants and empty lists.

Dependencies examined: `def-boolean-formulas-cnf-and-satisfiability-interface`, `def-bounded-turing-computation-tableau-interface`, `lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations`. No AC. Explicit item rendering and strict contract checks passed; explicit precheck passed. Decision: repaired, confidence 1. Source locators: Arora and Barak, Computational Complexity: A Modern Approach, §2.3.2; Kabanets, CMPT 710 Lecture 7, §1. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: thm-cook-levin-sat-completeness-interface

Authored verifier membership and total CNF hardness reduction with fixed-length guard preservation and empty input behavior; each cited supplier used at its actual step.

Dependencies examined: `def-boolean-formulas-cnf-and-satisfiability-interface`, `lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations`, `lem-tableau-to-cnf-map-has-polynomial-size-and-time`, `def-polynomial-time-verifier-and-reduction-interface`. No AC. Explicit item rendering and strict contract checks passed; explicit precheck passed. Decision: repaired, confidence 1. Source locators: Arora and Barak, Computational Complexity: A Modern Approach, Theorem 2.10; Kabanets, CMPT 710 Lecture 7, Theorem 1. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: thm-three-sat-completeness-interface

Authored the exact m-2-clause chain, explicit auxiliary assignment, all-false contradiction and polynomial bit accounting. Used the CNF-strengthened Cook–Levin conclusion rather than silently assuming general SAT is already CNF.

Dependencies examined: `def-boolean-formulas-cnf-and-satisfiability-interface`, `thm-cook-levin-sat-completeness-interface`. No AC. Explicit item rendering and strict contract checks passed; explicit precheck passed. Decision: repaired, confidence 1. Source locators: Arora and Barak, Computational Complexity: A Modern Approach, §2.3.3; Kabanets, CMPT 710 Lecture 8, Theorem 3. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: def-polynomial-space-and-nondeterministic-polynomial-space

Authored PSPACE/NPSPACE under the actual visited-cell and all-branch-halting conventions; explained finite branch maxima and input-length guard without AC.

Dependencies examined: `def-dtime-ntime-dspace-and-nspace`, `def-worst-case-time-and-space-complexity`, `def-uniform-asymptotic-time-space-comparison`. No AC. Explicit item rendering and strict contract checks passed; definition has no numbered proof. Decision: repaired, confidence 1. Source locators: Arora and Barak, Computational Complexity: A Modern Approach, Definition 4.5. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: lem-space-bounded-machine-configuration-count

Fixed the input quantifier, canonicalized encoding independently of history, and proved both the size bound and empty S<k case. Scope refreshed after statement clarification.

Dependencies examined: `def-polynomial-space-and-nondeterministic-polynomial-space`, `def-turing-machine-configuration`, `def-turing-machine-initial-and-halting-configuration-interface`. No AC. Explicit item rendering and strict contract checks passed; explicit precheck passed. Decision: repaired, confidence 1. Source locators: Arora and Barak, Computational Complexity: A Modern Approach, §4.3; Kabanets, CMPT 710 Lecture 12, §2. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: thm-tqbf-pspace-completeness-interface

Authored full PSPACE membership, finite configuration edge formula, one-copy selector recurrence, both reachability induction directions, path-length bound, capture-free prenex conversion and polynomial generation. Read Arora–Barak PDF pp.95–98, printed pp.79–82; local recurrence corrects the transposed endpoints in the extracted draft display.

Dependencies examined: `def-boolean-formulas-cnf-and-satisfiability-interface`, `def-polynomial-space-and-nondeterministic-polynomial-space`, `lem-space-bounded-machine-configuration-count`, `def-one-step-configuration-relation`, `def-turing-machine-initial-and-halting-configuration-interface`, `def-polynomial-time-verifier-and-reduction-interface`. No AC. Explicit item rendering and strict contract checks passed; explicit precheck passed. Decision: repaired, confidence 1. Source locators: Arora and Barak, Computational Complexity: A Modern Approach, Theorem 4.11; Kabanets, CMPT 710 Lectures 12-13, TQBF PSPACE-completeness. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: ex-a-two-step-computation-tableau-and-its-local-clauses

Authored a concrete two-transition machine, all three rows, evaluation of all clause families and a falsified clause under a one-cell alteration.

Dependencies examined: `def-bounded-turing-computation-tableau-interface`, `lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations`. No AC. Explicit item rendering and strict contract checks passed; explicit precheck passed. Decision: repaired, confidence 1. Source locators: Arora and Barak, Computational Complexity: A Modern Approach, §2.3.2. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: ex-tseitin-conversion-preserves-satisfiability

Complete nine-clause calculation and both existential-projection directions authored. Exact dependency `lem-tableau-to-cnf-map-has-polynomial-size-and-time` read. Source route: Arora–Barak §2.3 and local gate lemma. Explicit precheck, rendering and strict proof contract passed. No AC or mathematical gap. Decision pending: run-wide scope gate reports current review required for `grothendieck-spectral-sequences-and-computations`, outside owned group. Retry record-item when the serial/concurrent scope update clears; do not re-author unchanged content. Next: quantified recursion example.

## Checkpoint: ex-qbf-reachability-recursion-space-accounting

Authored true/false four-vertex calculations, selector endpoints, 14 quantified bits at m=d=2, formula-size and depth-first workspace bounds. Adopted canonical reordered independent steps and verified their actual references.

Dependencies examined: `lem-space-bounded-machine-configuration-count`, `thm-tqbf-pspace-completeness-interface`. No AC. Explicit item rendering and strict contract checks passed; explicit precheck passed. Decision: repaired, confidence 1. Source locators: Kabanets, CMPT 710 Lecture 13, §1. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: def-nondeterministic-acceptance-time-and-exact-clock

Authored shortest-time versus all-branch distinction, nonmonotone local exact clocks, last-round scheduling and fixed-factor clock conversion. No false equivalence with arbitrary time constructors.

Dependencies examined: `def-nondeterministic-accepting-computation`, `def-dtime-ntime-dspace-and-nspace`, `def-worst-case-time-and-space-complexity`, `def-uniform-asymptotic-time-space-comparison`, `def-machine-time-and-space-constructibility`. No AC. Explicit item rendering and strict contract checks passed; definition has no numbered proof. Decision: repaired, confidence 1. Source locators: Seiferas, Fischer, and Meyer, pp. 147-148. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time

Replaced ambiguous full-configuration display strategy with finite scanned-symbol displays, explicit physical tape replay, frontier erasure and constant-number-of-passes accounting. Read SFM Lemma 3, printed pp.149–150; supplied the semi-infinite boundary details locally.

Dependencies examined: `def-nondeterministic-acceptance-time-and-exact-clock`, `def-multitape-and-nondeterministic-machines`. No AC. Explicit item rendering and strict contract checks passed; explicit precheck passed. Decision: repaired, confidence 1. Source locators: Seiferas, Fischer, and Meyer, Lemma 3, pp. 150-151. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: lem-prefix-program-codes-admit-linear-nondeterministic-universal-simulation

Authored a padded canonical prefix syntax with a proved linear validator, avoiding an unjustified linear bound for numeric table validation. Constructed a fixed multitape interpreter then normalized it once to two tapes; tracked per-code constants and malformed prefix behavior.

Dependencies examined: `lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time`, `def-effective-encoding-of-turing-machines`, `lem-machine-encoding-is-injective-and-decodable`. No AC. Explicit item rendering and strict contract checks passed; explicit precheck passed. Decision: repaired, confidence 1. Source locators: Seiferas, Fischer, and Meyer, conditions (1)-(3) and Lemmas 4-5, pp. 151-152. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: lem-time-controlled-self-reference-for-nondeterministic-machines

Authored a concrete target-syntax literal compiler and diagonal program q with e0=f(q). Separated constant self-code calculation, linear input preparation and target interpreter costs; no acceptance-time claim follows from deterministic dovetailing or extensional Kleene alone.

Dependencies examined: `lem-prefix-program-codes-admit-linear-nondeterministic-universal-simulation`, `thm-smn-for-the-fixed-acceptable-numbering`, `thm-kleene-fixed-point-theorem-for-program-indices`. No AC. Explicit item rendering and strict contract checks passed; explicit precheck passed. Decision: repaired, confidence 1. Source locators: Seiferas, Fischer, and Meyer, Lemma 6, pp. 152-153. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: lem-clock-cutoffs-and-unions-preserve-nondeterministic-time-bounds

Authored union, intersection and inclusive cutoff constructions with min/sum bounds. Explicitly avoided the false inference that unclocked two-tape guessing normalization preserves all-branch halting.

Dependencies examined: `def-nondeterministic-acceptance-time-and-exact-clock`, `lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time`. No AC. Explicit item rendering and strict contract checks passed; explicit precheck passed. Decision: PENDING: Step 3a must clear before item auditing. Source locators: Seiferas, Fischer, and Meyer, Lemma 1 and clock discussion, pp. 148-149. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: lem-no-recursive-bound-covers-all-recursive-unary-languages

Repaired unary diagonalization by enumerating arbitrary tape counts directly and repeating each (machine,constant) at unbounded lengths. Proved both diagonal alternatives and zero-bound/finite-exception handling; no invalid absorption of n into arbitrary b.

Dependencies examined: `def-nondeterministic-acceptance-time-and-exact-clock`, `lem-prefix-program-codes-admit-linear-nondeterministic-universal-simulation`. No AC. Explicit item rendering and strict contract checks passed; explicit precheck passed. Decision: repaired, confidence 1. Source locators: Seiferas, Fischer, and Meyer, Corollary 2.1, p. 150. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: thm-nondeterministic-recursive-padding-separation

Authored the identity-padding proof with one fixed universal cutoff, explicit d/kappa/B0 constants, both downward inductions, inclusive clock test, and the recursive bound b(m)=m+1+sum_{j<=2m}T(j) independent of R. Nonmonotonicity, zero padding and short unary inputs are handled. Independently read SFM Theorem 4 and both claims, pp.152–155, and Corollary 4.1.

Dependencies examined: `def-nondeterministic-acceptance-time-and-exact-clock`, `lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time`, `lem-prefix-program-codes-admit-linear-nondeterministic-universal-simulation`, `lem-time-controlled-self-reference-for-nondeterministic-machines`, `lem-clock-cutoffs-and-unions-preserve-nondeterministic-time-bounds`, `lem-no-recursive-bound-covers-all-recursive-unary-languages`, `def-uniform-asymptotic-time-space-comparison`. No AC. Explicit item rendering and strict contract checks passed; explicit precheck passed. Decision: repaired, confidence 1. Source locators: Seiferas, Fischer, and Meyer, Theorem 4 and Corollary 4.1, pp. 153-155; Kabanets, CMPT 710 Lecture 10, Theorem 2; Vadhan, CS221 Lecture 6, Theorem 6. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: ex-nondeterministic-polynomial-logarithmic-time-separation

Authored exact nested-loop clock, integer-only rounded-log calculation, shifted little-o estimate and strict inclusion; final canonical paragraph formatting passes precheck.

Dependencies examined: `thm-nondeterministic-recursive-padding-separation`. No AC. Explicit item rendering and strict contract checks passed; explicit precheck passed. Decision: repaired, confidence 1. Source locators: Seiferas, Fischer, and Meyer, Corollary 4.1, p. 155. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: ex-shortest-acceptance-and-clocked-all-branch-halting

Authored explicit transition choices, tau=1 computation, divergent positions, both clocked branches and the zero/inclusive-one cutoff contrast.

Dependencies examined: `def-nondeterministic-acceptance-time-and-exact-clock`, `lem-clock-cutoffs-and-unions-preserve-nondeterministic-time-bounds`. No AC. Explicit item rendering and strict contract checks passed; explicit precheck passed. Decision: repaired, confidence 1. Source locators: Seiferas, Fischer, and Meyer, pp. 147-149. Next: next prerequisite-ready inventory item; no open gap for this item.

## Checkpoint: thm-tqbf-pspace-completeness-interface

Retained and fully authored the coverage-promised restricted 3CNF/3DNF matrices and regular logarithmic auxiliary-space generator. Added gate-supplier dependency and explicit counter/rescan algorithms; this is not the all-tape DSPACE convention. Read complete Kabanets Lecture 13 pp.1–2. Core TQBF proof remains unchanged.

Dependencies examined: `def-boolean-formulas-cnf-and-satisfiability-interface`, `def-polynomial-space-and-nondeterministic-polynomial-space`, `lem-space-bounded-machine-configuration-count`, `def-one-step-configuration-relation`, `def-turing-machine-initial-and-halting-configuration-interface`, `def-polynomial-time-verifier-and-reduction-interface`, `lem-tableau-to-cnf-map-has-polynomial-size-and-time`. No AC. Explicit item rendering and strict contract checks passed; explicit precheck passed. Decision: repaired, confidence 1. Source locators: Arora and Barak, Computational Complexity: A Modern Approach, Theorem 4.11; Kabanets, CMPT 710 Lectures 12-13, TQBF PSPACE-completeness. Next: next prerequisite-ready inventory item; no open gap for this item.

Decision refresh `def-bounded-turing-computation-tableau-interface`: PENDING: Step 3a must clear before item auditing

Decision refresh `lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations`: PENDING: Step 3a must clear before item auditing

Decision refresh `lem-tableau-to-cnf-map-has-polynomial-size-and-time`: PENDING: Step 3a must clear before item auditing

Decision refresh `thm-cook-levin-sat-completeness-interface`: PENDING: Step 3a must clear before item auditing

Decision refresh `thm-three-sat-completeness-interface`: PENDING: Step 3a must clear before item auditing

Decision refresh `lem-space-bounded-machine-configuration-count`: PENDING: Step 3a must clear before item auditing

Decision refresh `thm-tqbf-pspace-completeness-interface`: PENDING: Step 3a must clear before item auditing

Decision refresh `ex-a-two-step-computation-tableau-and-its-local-clauses`: PENDING: Step 3a must clear before item auditing

Decision refresh `ex-tseitin-conversion-preserves-satisfiability`: PENDING: Step 3a must clear before item auditing

Decision refresh `ex-qbf-reachability-recursion-space-accounting`: PENDING: Step 3a must clear before item auditing

Decision refresh `lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time`: PENDING: Step 3a must clear before item auditing

Decision refresh `lem-prefix-program-codes-admit-linear-nondeterministic-universal-simulation`: PENDING: Step 3a must clear before item auditing

Decision refresh `lem-time-controlled-self-reference-for-nondeterministic-machines`: PENDING: Step 3a must clear before item auditing

Decision refresh `lem-clock-cutoffs-and-unions-preserve-nondeterministic-time-bounds`: PENDING: Step 3a must clear before item auditing

Decision refresh `lem-no-recursive-bound-covers-all-recursive-unary-languages`: PENDING: Step 3a must clear before item auditing

Decision refresh `thm-nondeterministic-recursive-padding-separation`: PENDING: Step 3a must clear before item auditing

Decision refresh `ex-nondeterministic-polynomial-logarithmic-time-separation`: PENDING: Step 3a must clear before item auditing

Decision refresh `ex-shortest-acceptance-and-clocked-all-branch-halting`: PENDING: Step 3a must clear before item auditing

## Final authoring and reconciliation record

All 21 original items and all four A/B pages are authored. No new item IDs or pairs were added, no promised result was dropped, and no published file was edited. Necessary local constructions were supplied inside existing assigned items: parser and CNF lists; the precise boundary tableau rule; gate equivalences; configuration validity and transition formulas; one-copy quantified reachability and restricted 3CNF/3DNF matrices; logarithmic auxiliary-space generation; the padded prefix validator; literal f/Q compiler; repeated unary diagonalization; and both padding inductions. AC is unused throughout, and no Recorded result or defective published consumer is a supplier.

The optional fixed-length-certificate clarification in the tableau definition explicitly allows an already fixed empty certificate. This makes the one-bit/two-transition example a literal instance; guarded variable-length certificates still use the published length-field conversion. The gate construction was added as a direct TQBF dependency for the coverage-promised restricted matrix forms. These dependency changes invalidate consumer decisions, not unchanged mathematical proofs; refresh their receipts after checking current suppliers.

The 49 harvested coverage dispositions remain. Corrected source locators: Arora–Barak Lemma 2.12 proof is §2.3.4, and the 3SAT chain is §2.3.5; the downloaded draft has printed pp.45–49 at PDF pp.61–65. TQBF Theorem 4.11 is printed pp.81–82, PDF pp.97–98. Kabanets Lecture 13 was read in full (two pages); its exercise-level generation assertion is replaced by explicit local counter/rescan accounting. SFM Corollary 2.1 is p.148, Lemma 3 pp.149–150, coding conditions and Lemma 6 p.152, and Theorem 4/Corollary 4.1 pp.152–155. The original exhausted PDF URL remains owner-dropped as fetch backing. Its owner resolution and historical alternatives are preserved; repaired current constructions are in the manifest strategies and authored content, not represented as a new owner ruling.

The proof-contract shard is `research/phase-2-next-17-batch-10.proof-contracts.json`, with all 21 IDs, each numbered step's actual claim and inputs, complete exact local statement/definition excerpts, actual citation uses, supplementary exact construction excerpts where used, and eight item-specific boundary dispositions. The strict checker has one nonfatal shotgun-bracket warning on the separation theorem's initial step: that step actually constructs the clocked universal cutoff, forms a union and uses little-o, so its four citations are substantive. Later steps cite the precise clock, compiler, simulation, unary diagonal and comparison suppliers at their uses. No blanket announcement replaces their proofs.

### Step 4 plan/prose reconciliation

The four authoritative plan records still have empty item arrays. Splice the preserved 9/3 and 7/2 inventories from the current batch manifest in Step 4; do not interpret the page-level validation pass as item-level plan closure. The SAT A page retains the owner-added `resource-bounds-and-machine-invariance` prerequisite absent from the old prose. Titles retain the controlling plan's colon before Examples, and both companions are explicit. The prose's old quantitative self-reference strategy through deterministic dovetailing must be replaced by the concrete target-syntax f/Q construction. Its vague recursive-padding strategy must be replaced by the two downward inductions actually authored. The unary diagonal outline must repeat each machine/constant pair at unbounded lengths. These shared prose changes belong to serial reconciliation; this group did not edit shared plan/prose.

The owned cross-batch input remains `[]`: every external supplier is already published on an earlier page, and all new within-pair edges are internal to batch 10. `frontier-dependency-ledger refresh --run phase-2-next-17` ran successfully. No same-group cross-batch edge was omitted and the unified ledger was changed only by its refresh tool.

### Published concerns for the serial owner

This is a defect-focused inspection of the cited clauses and direct interfaces, not an exhaustive audit or independent review. All new supplier items below are authored drafts in batch 10, awaiting later review/publication. These published concerns do not block their proofs.

| Published item and page | Evidence and confidence | Required supplier and repair |
| --- | --- | --- |
| `cor-clique-is-np-complete`, `classical-np-completeness-reductions` | Confirmed draft dependency `thm-three-sat-is-np-complete` at deps and L2, used in step 1.2. High confidence in this dependency defect; no whole reduction audit claimed. | After publication use `thm-three-sat-completeness-interface`; check encoding and empty-clause conventions in the existing reduction and preserve composition. |
| `cor-hamiltonian-path-and-cycle-are-np-complete`, `classical-np-completeness-reductions` | Confirmed same draft dependency at deps/L3 and step 1.2. High confidence in this dependency defect. | Use `thm-three-sat-completeness-interface`; retain and audit the existing directed/undirected path/cycle reductions with endpoint cases. |
| `thm-circuit-sat-is-np-complete`, `boolean-circuits-and-nonuniform-complexity` | Confirmed draft `thm-cook-levin-sat-is-np-complete` at deps/L2; step 1.2 describes only well-formed formulas. High confidence in the draft edge; malformed-input totality is a repair obligation rather than a claim that the reduction's semantic core is false. | Use `thm-cook-levin-sat-completeness-interface`. Parse the new finite syntax, expand CNF list nodes, and send malformed strings to a fixed unsatisfiable circuit; prove the gate induction. |
| `cor-l-is-properly-contained-in-pspace`, `time-and-space-hierarchy-theorems` | Confirmed draft `def-pspace-and-npspace` in deps; step 2.1 uses the class without a linked fact row. | Use `def-polynomial-space-and-nondeterministic-polynomial-space`; add the explicit all-tape polynomial-space inclusion citation, preserving the read-only-workspace bridge. |
| `cor-ph-complete-language-forces-collapse`, `the-polynomial-hierarchy-and-relativization` | Confirmed draft `thm-tqbf-is-pspace-complete` at deps/F3, used in step 2.1. | Use `thm-tqbf-pspace-completeness-interface` after publication; preserve the separate PH quantifier-closure proof. |
| `thm-nondeterministic-time-hierarchy`, `time-and-space-hierarchy-theorems` | Confirmed draft `def-time-and-space-constructible-function` in deps/Given, and step 2.1 explicitly imports the external SFM theorem. Full current short proof read. | Use published `def-machine-time-and-space-constructibility` with explicit finite guard normalization, and new `thm-nondeterministic-recursive-padding-separation`. Its actual clock construction supplies T; account for unary-to-binary clock setup, propagate the shifted bound and retain the final monotone inclusion argument. |

Additional publication-evidence concerns observed while reading the direct suppliers: `def-polynomial-time-verifier-and-reduction-interface`, `def-uniform-asymptotic-time-space-comparison`, `thm-smn-for-the-fixed-acceptable-numbering` and `thm-kleene-fixed-point-theorem-for-program-indices` are marked published but have no verification block in the inspected files; `def-machine-time-and-space-constructibility` has only a judge record. All five are homed on `effective-numberings-reductions-resources-and-randomness`. SCHEMA requires owner audited or delegated verified evidence for published proved-here items. This is a confirmed missing-metadata observation, not evidence that their mathematics is false. No new mathematical supplier is needed for that metadata repair: the owner should reconcile actual authorized audit records, not manufacture stamps. The direct mathematical uses here were checked locally. Report these to the canonical ledger reconciler; this group did not race or edit that ledger.

### Validation actually run

- Explicit-path precheck over the 21 item paths: 17 proof-bearing items checked, all passed; four definitions have no numbered proof body.
- Explicit-path rendering over all 21 items and four pages: 25 files passed actual YAML and KaTeX checks.
- Content policy on the explicit batch manifest: 21 items, zero errors/warnings after changing source references to the block-list shape its parser requires.
- Strict proof contracts: 21/21 checked, zero errors, the one assessed citation-distribution warning above.
- Coverage checklist on the coverage file: two A pages, 49 harvested results, zero errors/warnings. An earlier mistaken invocation passed both the manifest and coverage as coverage inputs; it was corrected. `level-coverage` was only a wrong CLI discovery attempt and is not claimed as a passed gate.
- Manifest dependency check: 21 items, zero normalized, zero errors.
- `validate-plan research/plan-spec.json`: exit zero with repository-wide pre-existing redundant-prerequisite warnings; the four owned plan item lists remain unspliced as documented above.
- Active run verified from `.autopilot/phase-2-next-17` status and current Git history, not old RESUME files: the run is in 3b-author and batch-10 authoring artifacts are present. No transition was manually advanced.

Mathematical/source uncertainty remaining in owned content: none identified after local authoring; this is not an independent proof approval. Source-fetch limitation: original SFM PDF remains dropped as above. Administrative obligation: re-record stale or temporarily blocked item decisions at confidence 1 against current dependencies once the run-wide scope gate permits it. The gate has successively named other groups' Grothendieck and recurrence scopes; do not alter those reviews or invent an owner decision. The final decision status below supersedes earlier transient checkpoint messages.

### Final decision status and exact handoff inventory

All ten group-f scope-decline decisions are current `stands` judgments with specific evidence; the group scope-decision check reports zero errors. Final content-policy, strict proof-contract and manifest-dependency checks pass, with the single assessed nonfatal contract warning.

The run-wide scope gate briefly cleared, permitting eight stale receipts to be refreshed. It then reopened and rejected the next record-item attempt with `Step 3a must clear before item auditing`. Current external scope blockers: `grothendieck-spectral-sequences-and-computations`: grothendieck-spectral-sequences-and-computations: current scope review required. No other group review or owner decision was altered.

Completed inventory, with administrative receipt state distinguished from content:

- Page `sat-tableaux-and-quantified-space-completeness`: authored.
  - `def-boolean-formulas-cnf-and-satisfiability-interface`: authored; current receipt valid.
  - `def-bounded-turing-computation-tableau-interface`: authored; current receipt valid.
  - `lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations`: authored; current receipt valid.
  - `lem-tableau-to-cnf-map-has-polynomial-size-and-time`: authored; current receipt valid.
  - `thm-cook-levin-sat-completeness-interface`: authored; current receipt valid.
  - `thm-three-sat-completeness-interface`: authored; current receipt valid.
  - `def-polynomial-space-and-nondeterministic-polynomial-space`: authored; current receipt valid.
  - `lem-space-bounded-machine-configuration-count`: authored; current receipt valid.
  - `thm-tqbf-pspace-completeness-interface`: authored; current receipt valid.
- Page `sat-tableaux-and-quantified-space-completeness-examples`: authored.
  - `ex-a-two-step-computation-tableau-and-its-local-clauses`: authored; current receipt valid.
  - `ex-tseitin-conversion-preserves-satisfiability`: authored; receipt refresh pending behind the run-wide gate.
  - `ex-qbf-reachability-recursion-space-accounting`: authored; receipt refresh pending behind the run-wide gate.
- Page `nondeterministic-recursive-padding-and-time-separation`: authored.
  - `def-nondeterministic-acceptance-time-and-exact-clock`: authored; current receipt valid.
  - `lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time`: authored; receipt refresh pending behind the run-wide gate.
  - `lem-prefix-program-codes-admit-linear-nondeterministic-universal-simulation`: authored; receipt refresh pending behind the run-wide gate.
  - `lem-time-controlled-self-reference-for-nondeterministic-machines`: authored; receipt refresh pending behind the run-wide gate.
  - `lem-clock-cutoffs-and-unions-preserve-nondeterministic-time-bounds`: authored; receipt refresh pending behind the run-wide gate.
  - `lem-no-recursive-bound-covers-all-recursive-unary-languages`: authored; receipt refresh pending behind the run-wide gate.
  - `thm-nondeterministic-recursive-padding-separation`: authored; receipt refresh pending behind the run-wide gate.
- Page `nondeterministic-recursive-padding-and-time-separation-examples`: authored.
  - `ex-nondeterministic-polynomial-logarithmic-time-separation`: authored; receipt refresh pending behind the run-wide gate.
  - `ex-shortest-acceptance-and-clocked-all-branch-halting`: authored; receipt refresh pending behind the run-wide gate.

Open obligations: refresh the 10 listed item receipts in prerequisite order once the run-wide scope gate permits it. Completed argument evidence is in each item checkpoint and strict contract; unchanged content need not be reauthored. Step 4 must splice the four inventories and reconcile shared prose and published-consumer findings above. No new IDs were added; necessary local constructions were authored inside preserved items. Independent reviews remain untouched. This handoff claims completed content and local validation, not final decision closure while receipts remain pending.
