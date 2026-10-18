# Batch 38 authoring notes

Run: `numerical-analysis-remaining-71-2026-10-17`  
Pair: `discrete-de-rham-complexes-and-edge-elements` / `discrete-de-rham-complexes-and-edge-elements-examples`  
Batch dependency level: 2; declared prerequisite batch: 34.

## Plan reconciliation

- Read the controlling owner-authoring direction, Batch 38 task, dependency-level input, plan specification and the complete PE09 design section. The pair retains the design scope: lowest-order Whitney/Nedelec and RT0 spaces, trace conventions, local moment commutation, topology-dependent discrete cohomology, kernel gauge, regular decomposition, commuting projection, discrete compactness, and three worked examples.
- PE09's prose design lists same-frontier NA28 (`finite-element-meshes-and-interpolation`) beside PE08 (`mixed-hdiv-fluxes-and-darcy-discretization`) as prerequisite interfaces. The current `plan-spec.json` row, generated Batch 38 manifest and run dependency schedule declare only PE08. The plan controls this conflict. NA28 is already published, and its relevant mesh, orientation, affine Piola, Stokes, Gauss–Green and simplicial topology items are declared directly where used; no page-level NA28 edge or shared-plan change was made.
- The A page has 14 items and the B page has 3 examples, under the 100-item cap. The explanatory TikZ diagram states the cochain maps and their conventions; none of the proofs relies on the diagram.

## Supplier inspection and cross-batch status

The current Batch 34 PE08 page and actual supplier carriers were inspected. The current bodies now exist, although an earlier independent check found them absent. After that inspection, current Step 1 records appeared for all three Batch 34 items and `step1Decision` confirms all three records are hash-current and `ready`. This is prerequisite evidence only, not independent proof approval. The exact item edges and page prerequisite are recorded in `research/numerical-analysis-remaining-71-2026-10-17-batch-38.cross-batch-dependencies.json`.

- `def-na-hdiv-space` currently defines real vector-valued L2 fields with an L2 distributional divergence and graph norm under Countable Choice. This is the exact external interface used by the N2 definition in `def-na-lowest-order-whitney-de-rham-spaces`, by the moment assembly proof, and by the cohomology statement. Its carrier remains draft; its current Step 1 record is hash-current and ready. This supports the interface check but is not independent proof approval.
- The actual `lem-na-hdiv-weak-normal-trace` and `lem-na-rt0-unisolvence-and-global-conformity` Statements, Facts & Assumptions and complete Proof sections were also read. PE09 explicitly defines one shared oriented edge circulation and face flux in the assembled spaces; its local moment lemma proves that these assembled fields belong to H(curl) and H(div), including its own RT0 face-flux unisolvence and global distributional-divergence argument. It does not claim the converse on singular meshes or use the Batch 34 weak normal trace as a premise. The Batch 34 RT0 lemma is not a logical dependency of that local proof.
- At the first Batch 38 supplier check, no Step 1 records were present for the three inspected Batch 34 item IDs. Those records have since appeared and are current. Batch 38's earlier escalations were preserved unchanged; their prior reason citing missing supplier readiness is now stale and the owner must reassess them from the current carrier and dependency evidence. The PE08 page and item bodies remain drafts; no independent acceptance is inferred.

The final draft makes shared oriented edge and face moments explicit in the definitions of the global Nedelec and RT0 spaces. This closes the DOF-to-cochain maps without inferring shared edge moments merely from membership in a rough H(curl) class. The local interpolation lemma proves H(curl)/H(div) membership for every such assembled assignment. The direct H(div) dependencies and page requirement remain in place.

## Item graph and placement

Batch-local levels were computed supplier-first from the final manifest dependencies:

| Level | Items |
|---:|---|
| 0 | `def-na-hcurl-space` |
| 1 | `def-na-lowest-order-whitney-de-rham-spaces`, `def-na-zero-tangential-hcurl`, `lem-na-hcurl-curlfree-potential-contractible` |
| 2 | `cex-na-canonical-edge-moments-not-bounded-on-hcurl`, `def-na-curl-curl-kernel-quotient-gauge`, `lem-na-nedelec-edge-unisolvence`, `lem-na-weak-hcurl-tangential-trace` |
| 3 | `lem-na-whitney-moments-commute-with-grad-curl-div`, `thm-na-regular-decomposition-zero-tangential-hcurl`, `thm-na-stable-mixed-curl-curl-kernel-quotient` |
| 4 | `thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes`, `ex-na-nedelec-edge-circulation-and-stokes`, `ex-na-nodal-curlcurl-spurious-gradient-mode` |
| 5 | `thm-na-uniformly-bounded-commuting-cochain-projection`, `ex-na-handle-domain-harmonic-edge-field` |
| 6 | `thm-na-discrete-compactness-and-poincare-lowest-order-nedelec` |

The Whitney-space definition depends on the H(div) interface at level 0; the item graph does not assign any consumer a lower level than its supplier. The manifest labels and carrier `deps` are synchronized. Full-run scheduling projections remain owner/controller inputs and were not edited.

## Proof and escalation disposition

Nine finished proof-bearing carriers have source-aware contracts: the canonical-edge-moment counterexample, Nedelec edge unisolvence, weak tangential trace, Whitney moment commutation, mixed curl-curl quotient stability, discrete cohomology/harmonic decomposition, and the three examples. The contracts map every actual proof step and fact to exact supplier-section excerpts and record the standard boundary cases. The finite checks are the six-by-six Nedelec moment identity and the three exact example calculations listed in the batch coverage file.

Four analytic carriers remain explicitly escalated, with statements and precise gaps retained rather than a fabricated proof:

- `lem-na-hcurl-curlfree-potential-contractible`: a smooth de Rham theorem does not prove weak L2 local-to-global potential gluing or global H1 integrability on this Lipschitz domain.
- `thm-na-regular-decomposition-zero-tangential-hcurl`: the inspected Hiptmair–Pechstein proof invokes Stein H1/H2 extension and H(curl) extension operators without proving them; a complete local construction or adequate authorized suppliers are absent.
- `thm-na-uniformly-bounded-commuting-cochain-projection`: AFW gives a smoothed projection outline, not the full shape-uniform estimates, finite-element invertibility/idempotence proof, or zero-tangential boundary correction.
- `thm-na-discrete-compactness-and-poincare-lowest-order-nedelec`: the projection and regular-decomposition inputs remain unresolved, and the discrete-gradient component estimate is not supplied.

Claims downstream of the unready H(div) definition are also marked escalated in Step 1, even when their conditional local argument is complete. In particular, the Whitney spaces, kernel quotient, Nedelec unisolvence, moment commutation, cohomology theorem and examples retain their content and contracts but do not claim prerequisite completion. The two H(curl) definitions and weak tangential-trace lemma are independent of that supplier.

The finite cochain and homology arguments use only finite basis extension and published homology results. The H(curl)/H(div) class definitions and real L2 products require Countable Choice, which is now stated in the H(curl) definition and in the weak trace, mixed gauge, cohomology, and dependent example carriers. The weak trace proof explicitly assumes Countable Choice for its closure and density sequences. The unresolved weak-potential and regular-decomposition route uses the Axiom of Choice through the cited Poincare–Wirtinger supplier; those carriers keep AC and CC separate and claim no proof. The discrete compactness statement retains its declared AC/CC/DC and Rellich dependencies and is escalated without collapsing them into an unproved argument. The handle example's nonzero period rules out a single-valued C1 potential; it does not overclaim a line integral for arbitrary H1 potentials.

## Source record

The A page uses three independent full-text treatments: AFW's complete 70-page survey article, Chen's complete 10-page lecture notes, and Hiptmair–Pechstein's complete 32-page report. The B page uses AFW and Chen. Full-text extents, locators, harvested headings, per-result dispositions, read evidence and fetch stamps are recorded in `research/numerical-analysis-remaining-71-2026-10-17-batch-38.source-coverage.json`. All three PDFs succeeded on their initial fetch; no recovery retries or source drops were needed, so no `source_resolution` record was required.

## Final checks and readiness

Final scoped results:

- `node tools/proof-layout.mjs` on all 17 changed items: passed, 30 numbered steps, zero layout defects.
- `node tools/proof-contract.mjs ...batch-38.proof-contracts.json --strict`: passed, 9/9 finished proof-bearing items, zero errors or warnings.
- `node tools/source-fetch-check.mjs --coverage ...batch-38.source-coverage.json`: passed, 5/5 source entries fetch-verified (three A-page sources and two B-page source records).
- `node tools/coverage-checklist.mjs ...batch-38.coverage.json`: passed, 2 pages, 30 harvested results, zero errors or warnings.
- Scoped manifest/carrier dependency comparison and `dependencyLevels` check: passed for all 17 items, maximum item level 6, no cycles, mismatches, or dependency-label disagreement.
- The official scoped Step 1 check returns 3 ready (`def-na-hcurl-space`, `def-na-zero-tangential-hcurl`, `lem-na-weak-hcurl-tangential-trace`) and 14 escalated. The three ready hashes and dependency lists are current. All 14 escalation files were preserved unchanged as required, but their saved hashes predate final item/dependency refinements; 10 also list older direct dependency arrays. The earlier missing-Batch-34-readiness reason is now outdated in 11 escalations: `def-na-lowest-order-whitney-de-rham-spaces`, `cex-na-canonical-edge-moments-not-bounded-on-hcurl`, `def-na-curl-curl-kernel-quotient-gauge`, `lem-na-nedelec-edge-unisolvence`, `lem-na-whitney-moments-commute-with-grad-curl-div`, `thm-na-regular-decomposition-zero-tangential-hcurl`, `thm-na-stable-mixed-curl-curl-kernel-quotient`, `thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes`, `ex-na-nedelec-edge-circulation-and-stokes`, `ex-na-nodal-curlcurl-spurious-gradient-mode`, and `ex-na-handle-domain-harmonic-edge-field`. The batch coverage lists every saved/current dependency difference and outdated reason. The owner must reassess and write fresh Step 1 records; no escalation was overwritten and no `--owner` flag was used.

The final run-wide `item-dependency-levels.mjs check --run` now passes with zero errors after the other batch owners updated their items. `batch-dependency-levels.mjs check --run` still cannot reach its recorded-hash comparison because Batch 42 contains malformed unquoted YAML source-title text in `items/def-maxwell-edge-fem-semidiscretization.md` (`Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element exterior calculus: ...`). That file and the run-wide dependency-level input are outside this pair's edit authority; the owner/controller must reconcile them.

Step 1 records and these authoring checks are per-item evidence only; they do not constitute independent proof approval. The three inspected PE08 suppliers now have current ready records, but 14 Batch 38 escalations remain unchanged, including 11 with an outdated missing-readiness rationale; the owner must reconcile those records alongside the four analytic proof gaps. No published item, shared plan, run dependency-level input, engine state, unified dependency ledger or verdict was edited.

## Owner-directed continuation — current authoring state (2026-10-18)

### Inventory and controlling interfaces

The current manifest has 25 A-page items and 3 B-page examples (28 total), under the 100-item cap. The 11 same-A-page suppliers are:
lem-na-compact-support-hcurl-fourier-splitting,
lem-na-contractible-lipschitz-polyhedron-boundary-connected,
lem-na-full-dirichlet-hcurl-regular-decomposition,
lem-na-lipschitz-scalar-h1-h2-extension,
lem-na-lipschitz-support-and-zero-boundary-closure,
lem-na-relative-curl-kernel-is-zero-boundary-gradients,
lem-na-weak-local-potentials-and-continuation,
lem-na-graded-whitney-mesh-size-and-boundary-shifts,
lem-na-whitney-averaged-pullback-moment-bounds,
lem-na-whitney-cochain-correction-and-strong-convergence, and
lem-na-discrete-gradient-lift-gap-estimate.
The original weak-potential, regular-decomposition, projection, and discrete-compactness carriers now contain full arguments; their original public scope is retained. The relative kernel identity is distinct from the existing full-space cohomology theorem.

The plan-spec PE09 row and generated Batch 38 schedule require PE08 only. The written PE09 design also lists NA28, a published prerequisite page. The plan controls this conflict: NA28 was not added as a page-level or shared-plan edge; relevant published mesh/Piola/Stokes/topology suppliers remain explicit item dependencies. The old design phrase “projection and boundary correction” is now implemented by separate full and relative cochain-projection families. This preserves the unrestricted family and the required homogeneous family without claiming one L2-bounded finite-range operator preserves the dense homogeneous graph space. The regular-decomposition theorem keeps its original $p\in H^1$ Statement; the separate full-Dirichlet lemma proves the stronger $Q u\in H_0^1$ interface consumed by relative-kernel and compactness arguments.

### Dependency and choice reconciliation

The current level labels are recomputed from actual in-batch dependencies: levels 0 through 8, with no cycles. The maximum, level 8, is thm-na-discrete-compactness-and-poincare-lowest-order-nedelec. The three B examples remain at levels 4, 4, and 5. Each current item frontmatter dependency level and direct deps list match its manifest entry.

The authoring keeps the original axiom branches. AC is explicit where the actual Poincare, truncation, scalar extension, topology, or regular-decomposition suppliers require it. The discrete-compactness theorem states AC and its CC/DC consequences, matching the literal zero-boundary Rellich supplier. The projection chain carries CC and does not inherit the unrelated AC regular-decomposition dependency. The local graded-mesh geometry uses only finite constructions and is choice-free. No arbitrary-index choice is inferred from CC or DC.

### Supplier and source inspection

The current Batch 34 page and all three declared interface carriers were inspected: def-na-hdiv-space, lem-na-hdiv-weak-normal-trace, and lem-na-rt0-unisolvence-and-global-conformity. Their stated real H(div) graph-space, weak-trace, RT0 unisolvence, and global-conformity interfaces match the PE09 uses. Each has a current hash-bound ready record. This verifies prerequisites only; the carriers remain drafts and have not received independent proof acceptance.

For the A page I inspected the complete 10-page Chen lecture note, the full AFW survey with its cited Hilbert-complex and finite-element sections, and the Hiptmair–Pechstein report's complete relevant boundary/topology and regular-decomposition proof. The lecture note and survey form two independent treatments; the report supplies a third treatment of regular decomposition. Chen and AFW explicitly assume or outline smoothed projections rather than proving the full local construction, and Hiptmair–Pechstein quotes extension operators. Those gaps are proved in the authored local carriers; none of the quoted source results is used as a substitute proof. The per-source locators, complete source hashes, harvested-result dispositions, prior retrieval history, and original fetch stamps remain in research/numerical-analysis-remaining-71-2026-10-17-batch-38.source-coverage.json. No new retrieval failure occurred in this continuation, so no new source_resolution attempt or drop was made.

### Prior readiness records

The 14 original Step 1 escalation records remain byte-for-byte unchanged; none was overwritten and --owner was not used. Current coverage reconciliation finds all 14 saved hashes stale, 12 saved direct dependency arrays different from the current manifest, and all 14 saved reasons outdated: the four former analytic gaps now have complete local proof carriers/contracts, and the old Batch 34 readiness hold is no longer current. Exact per-item differences are retained in the coverage rows. Eleven new suppliers have fresh current ready records. The existing zero-tangential definition received a current ready record after its nonlogical trace remark was moved out of the Definition section; the unchanged weak-trace lemma record was refreshed because its dependency closure hash changed. The original H(curl) space ready record remains current. The current batch has 14 ready and 14 preserved escalations. Owner reconciliation of those old escalations remains required; none was resolved with --owner.

### Final scoped checks

Final scoped results on the current authored items and batch evidence:

- `node tools/tsx-run.mjs tools/precheck.mts` on the 15 authored or repaired proof carriers: 15/15 pass.
- `node tools/proof-layout.mjs` on those 15 explicitly changed carriers: 15 items, 58 steps, zero defects.
- `node tools/proof-contract.mjs ...batch-38.proof-contracts.json --strict`: 24/24 contracts, zero errors, one advisory. The advisory is `shotgun-bracket` on `lem-na-lipschitz-scalar-h1-h2-extension` step 2.2: it cites the four of five declared facts used in the density argument while three geometric construction steps cite no fact labels. The exact facts are cited at the steps that use them; no unrelated labels were added.
- Scoped content policy: 28 items, zero errors or warnings. Scoped dependency check: 28 items and both pages, zero errors or warnings. Forward-reference check: zero open references, load-bearing forward references, or errors. Extension check: 28 items, zero errors or warnings.
- `node tools/coverage-checklist.mjs ...batch-38.coverage.json --require-destination`: 2 pages, 41 harvested source results, zero errors or warnings. The 11 new A-page items each have a source disposition and local-argument note. The B page retains its prior complete examples and two-source coverage.
- `node tools/source-fetch-check.mjs --coverage ...batch-38.source-coverage.json --stamp`: all 5 A/B source entries fetch-verified and resolved; zero new stamps and zero dropped sources. Each source succeeded on its recorded initial fetch, so no `source_resolution` retry or drop record applies.
- `node tools/item-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17`: 1,421 run items across 142 pages, maximum level 12; passed. Batch-local levels are synchronized from actual direct in-run dependencies (0 through 8), with 25 A-page items and 3 B-page examples.
- `node tools/batch-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17`: blocked by a stale shared batch-dependency-level input. The assigned batch evidence still records scheduling input hash `9dce366cf72a8b7f0a4d42de1ee1ae1091fa44cd01f14173beb4146b7e7232c5`; the shared input is outside this authoring scope and was left unchanged for owner/controller recomputation.
- The final Step 1 audit reports 14 current ready items and the 14 original escalations for this pair. The ready records are item-level readiness evidence only. The original escalation records remain unchanged; current carriers/contracts are complete, but owner reconciliation is needed to replace those historical decisions. The run-wide audit remains open outside this pair as well (1,299/1,421 ready at the recorded check).

All original Batch 38 dispatch/result evidence remains preserved. These checks and records do not constitute independent mathematical acceptance; the owner-directed sequential weak-regular, projection, and discrete-compactness reviews and all native gates remain due.
