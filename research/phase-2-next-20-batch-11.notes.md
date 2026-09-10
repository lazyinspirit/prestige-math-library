# Batch 11 — construction evidence and owner-held findings

Run `phase-2-next-20`, assigned pair `vertices-sources-and-the-green-correspondence` / `vertices-sources-and-the-green-correspondence-examples`, orders 510.059 / 510.060. Twelve items constructed in prerequisite order, with an escalated readiness record written before the next item. No unchanged ready item existed. Nine A items (seven design items plus two necessary local lemmas), three B items. This is scaffold construction, not proof approval.

## Plan and scope reconciliation

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, beta brief, frontier dependency brief, complete RG-15 design, assigned task, batch pages, current canonical plan, drift review, planning notes, and current run status. Git baseline observed: f9857f71e. The canonical plan and assigned manifest agree on both page identities, orders and prerequisites; their initial item inventories were empty. No page-level design/spec conflict was found. No shared plan, published content, verdict or engine state was edited.

The RG-15 design calls restriction errors “exceptional smaller vertices”. This cannot mean smaller order: Lassueur–Farrell §29 p.11 explicitly allows H intersect ^gP to have order |P|. The source proves exclusion up to H-conjugacy instead. The manifest uses separate X and Y families and preserves the full theorem on Z, with the exact-P result as a corollary. Escalate this prose correction for owner reconciliation; do not change the selected pair or weaken the full theorem. No common-source claim is added. For H=G the error families are empty, rather than {1}; for P=1 the normalizer condition forces H=G.

The two necessary local A lemmas are `lem-green-exceptional-family-containment-and-fusion` immediately after the family definition and `lem-green-vertex-retention-and-inducing-lift` immediately before the Mackey/error lemma. The first supplies the conjugate-containment equivalences and fusion check required by the full Z version. The second proves two separate witnesses for arbitrary Q<=H (not only a containing p-subgroup) before uniqueness. Their inventories and complete strategies are in the manifest; no new pair or cross-batch supplier is proposed.

## Source inspection and retrieval

Sources: https://jpsaunders.uk/ModRep/NotesWebsite.pdf and https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload2.pdf. The coverage file lists exact disjoint reading ranges and a disposition for each result harvested there. Saunders is a full lecture-note set, Farrell a second independent course treatment. Complete relevant Green arguments were inspected through the web PDF text view, including cancellation and both inverse directions. We do not claim to have read the entire PDFs or all sections named by the older design. Craven remains historical design backing, not a newly inspected or harvested third source.

`source-fetch-check --stamp --timeout-sec 35` returned exit 1: 0/2 fetch-verified. It automatically made the initial attempt and five retries for each URL, all EAI_AGAIN, at the timestamps retained verbatim in coverage. Separate curl downloads also failed DNS; no PDF was saved. The web tool recovered the text at the original URLs, but cannot provide a substitute fetch-tool stamp. Screenshot attempts partly returned cache-miss. No stamp, successful download, source drop, or permanent outage is claimed. Both source_resolution records remain owner-escalation. Do not restart their six-attempt allowance in a later dispatch.

Source cautions handled in strategies: Saunders 4.36 has an apparent z/x typo in its converse, and 4.38 has inconsistent module labels and the impossible printed assertion of a vertex in x immediately before non-x-projectivity. The local induction argument instead retains a vertex T<=Q, proves complement summands X-projective by restriction retention and the family equivalence, then identifies the distinguished vertex using the already established restriction lemma. These are explicit mathematical arguments, not literal copying of the typos. The TI proof's aside asserting all projective error summands are isomorphic is not established by its displayed argument; it is separately deferred to owner-decision and not used.

The assigned `ex-green-restriction-summand-with-the-same-vertex` remains specifically escalated. The complete Farrell §29 has exercises 29.1/29.3, lemma 29.2 and theorem 29.4; no concrete group/module example was found there. A web search did not locate the claimed example. The owner must identify its exact locator or authorize a concrete replacement. Its inventory entry explicitly retains the original task; no invented matrices or substituted abstract example.

## Actual prerequisite reading and limits

Read complete statements and arguments of the vertex/source definition, existence/conjugacy theorem, Higman criterion, relative-projectivity definition, Krull–Schmidt theorem, the finite-module Mackey/intersection lemma, the containing-p-subgroup retention lemma, induction adjunction, transversal decomposition, composition-series definition, composition-series iff chain conditions, and AC definition. The exact read item hashes follow below. The Mackey argument uses finite tensor double-coset summands, checked against the inherited covariant-functions induction convention; transitivity and split-map preservation are explicit. Higman gives a finite inducing witness. Krull–Schmidt supplies both summand extraction and cancellation, not merely existence. The restricted-source argument proves full vertex by minimality before using it. The supplied p-subgroup retention lemma is not adequate for an arbitrary containing H, so its role is comparison only; the new local lemma supplies the necessary generalization.

`lem-relative-projectivity-mackey-intersections-for-finite-modules` is authored **draft**, although its page `blocks-defect-groups-and-the-brauer-homomorphism` is published. Its source statement/proof was read and supports the finite Mackey and vertex-containment uses; its publication status is not inferred from its page or judge stamp. It belongs to the preceding catchup run, not any selected batch of this run. Exact actual dependency chains include Mackey -> local retention / local error lemma -> restriction -> induction -> inverse -> full theorem -> B examples. Owner must reconcile this inherited draft supplier with the run's publication/ownership gate. Do not duplicate its stable identity or pull its entire page into scope.

The local strategies use AC explicitly where the inherited Krull–Schmidt proof invokes the composition-series/chain-condition converse. This is stronger than mathematically necessary for finite-dimensional modules, but faithfully records the inherited argument. The family containment proof is elementary finite group theory and remains choice-free. A future dimension-induction repair can remove the inherited choice overhead; it is not performed here. No Recorded item or common-source assertion is used as a premise.

This is a focused direct-interface audit. The complete deeper transitive mathematical closure (including the module, projective-characterization and foundational well-definedness suppliers) has NOT been certified; no readiness record asserts otherwise. The unresolved full-closure audit is retained as a blocker, not replaced by page membership or structural checks. A source receipt alone will not clear that obligation or the concrete-example gap.

## Published findings for serial canonical-ledger reconciliation

* Confirmed declaration defect: published `def-relative-projectivity` explicitly assumes AC for the arbitrary-dimensional basis in its H=1 paragraph, but deps contains only `def-projective-module` and `thm-projective-module-characterizations`, omitting the required direct `def-axiom-of-choice`. Supplier `def-axiom-of-choice` is already published. Repair: add the explicit dependency and retain the paragraph's assumption; finite-dimensional uses need only finite basis arguments. No new Phase-2 supplier is needed. This paragraph is actually used by the TI and identity examples, which explicitly assume AC. Its declaration defect remains owner-held; published file unchanged.
* Potential inherited axiom-interface debt, not a claimed false theorem: published `thm-krull-schmidt-for-finite-dimensional-kg-modules` calls `thm-composition-series-iff-noetherian-and-artinian` to obtain finite length but does not propagate its converse's DC assumption. The finite-dimensional claim admits a choice-free dimension proof; repair by bounded dimension induction for decomposition and kernel/image stabilization, or explicitly state AC and its dependency. Exact supplier is the existing published chain-condition theorem and `def-axiom-of-choice`; no planned supplier required. The canonical ledger already lists Krull–Schmidt among impact candidates of the chain-condition theorem, so update that entry rather than duplicate it. Our consumers carry AC. This is a focused potential interface finding, not a whole-closure or independent audit.

## Cross-batch input

The owned consumer-batch dependency input is []. Neither prerequisite page belongs to another selected batch of this run. The inherited draft Mackey supplier is an outside-run escalation recorded above, not a fictitious same-run verified edge. Refresh result and checks follow below.

## Examined prerequisite file hashes

- `def-relative-projectivity`: `4e2746586b5e4b8d3c6df94e31513d561acb7bba44f9a7664830b949e2aefcaa`
- `def-vertex-and-source-of-an-indecomposable-module`: `9b7f1d6567cad1a2c69dd08fc608ba6f56a9f46182377b2340f1145b763954eb`
- `thm-green-vertex-source-existence-and-conjugacy`: `23aba83bcc8785f5bb567a8be02005d4387d95435bc8e908c3d6924155d8138a`
- `thm-higman-criterion-for-relative-projectivity`: `fd01ef92aa88dca5a26c1e7ae4cd19418f96894841b8bb9249c587a546324a91`
- `thm-krull-schmidt-for-finite-dimensional-kg-modules`: `03de45880421bc12b83827c62de9c0503105323aaf190bc65b8d199456878d81`
- `lem-relative-projectivity-mackey-intersections-for-finite-modules`: `ab6f2f8dc3d48b2eb625692880cb65e86a988400fa8e724c77784ccbb1dea7c6`
- `lem-restriction-to-a-containing-p-subgroup-retains-a-vertex`: `f60bcea004812984f2a429f49aa0b1a40fef85707c01a84d630ed8d4b5969f1f`
- `thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules`: `40e9aaeaf2d5bad126809acc1c093ad62ef2aae76a9dd6ce6528cb9259feb4b6`
- `prop-induced-module-decomposes-over-a-left-transversal`: `f7aa8cd118f9ef970fc10e0c59568fd89c1a5f306293d694112308d331986814`
- `def-composition-series-and-length-of-a-module`: `509a4992dd227c353b8a646b19e4913c0a9fb8f9a631dd9e5d5a6e48ad7669ba`
- `thm-composition-series-iff-noetherian-and-artinian`: `9231201f3991db3cc9f3df285609a138033a74956c5b65b00ca3f13d4dab2321`
- `def-axiom-of-choice`: `9c045248c142fcf687fdc3c5d25d8b3890ac08d1eca8b4e6d71bb00a4eb6ff58`

## Checks performed

These are construction-time results against the concurrently changing run, not an engine gate or independent mathematical review.

| Check | Actual result |
|---|---|
| `frontier-dependency-ledger.mjs refresh --run phase-2-next-20` | exit 0, refreshed and deduplicated |
| `coverage-checklist.mjs research/phase-2-next-20-batch-11.coverage.json --require-destination` | exit 1: 1 A page, 23 harvested results, 25 source-resolution errors, 0 warnings; all errors arise from the two explicit owner-escalations, which the validator checks against the stronger source-drop requirements |
| `manifest-deps.mjs research/phase-2-next-20-batch-*.pages.json` | exit 0: 78 items at this concurrent snapshot, no missing deps arrays |
| `content-policy.mjs --manifest-only research/phase-2-next-20-batch-*.pages.json` | exit 1: 78 items, 12 unresolved dependency declarations in batch 10, none in batch 11 |
| `content-policy.mjs --manifest-only research/phase-2-next-20-batch-11.pages.json` | exit 0: 12 items, 0 errors, 0 warnings |
| `validate-plan.mjs research/plan-spec.json` | exit 0: 1624 pages; 641 pages lack canonical item inventories, so this does not assert their unspliced item dependencies |
| `extcheck.mjs --quiet` | exit 0: 55 existing published/unproved-material warnings, no hard errors |
| `depcheck.mjs --quiet` | exit 0, no output; authored graph check, not proof certification or a validation of unmaterialized scaffold bodies |
| `source-fetch-check.mjs --coverage research/phase-2-next-20-batch-11.coverage.json` | exit 1: 0/2 fetch-verified, 2 unresolved source escalations, no drops |

No errors were papered over with a fabricated confident drop. Source coverage and stamp checks remain intentionally failing until the owner resolves the source evidence. The old step1-blockers file still contains the affine drift finding; the newer drift report and Git f9857f71e record its operator resolution, unrelated to this batch.

Whole-run policy diagnostics at the check snapshot (other-batch ownership; no edits made):

```text
ERROR batch-dependency-missing [lem-finite-weyl-strong-exchange-and-deletion]: lem-finite-weyl-strong-exchange-and-deletion depends on def-weyl-group-of-a-root-system, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-finite-weyl-strong-exchange-and-deletion]: lem-finite-weyl-strong-exchange-and-deletion depends on def-positive-system-and-base-of-simple-roots, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-finite-weyl-strong-exchange-and-deletion]: lem-finite-weyl-strong-exchange-and-deletion depends on def-length-and-longest-element-of-a-finite-weyl-group, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-weyl-orbit-sum-in-a-group-algebra]: def-weyl-orbit-sum-in-a-group-algebra depends on def-weyl-group-of-a-root-system, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-weyl-orbit-sum-in-a-group-algebra]: def-weyl-orbit-sum-in-a-group-algebra depends on def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants]: lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants depends on thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums]: lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums depends on thm-highest-weight-classification-of-finite-dimensional-irreducible-representations, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums]: lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums depends on thm-finite-dimensional-representations-of-sl-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-weyl-discriminant-and-reflecting-hyperplane-arrangement]: def-weyl-discriminant-and-reflecting-hyperplane-arrangement depends on def-weyl-group-of-a-root-system, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-weyl-discriminant-and-reflecting-hyperplane-arrangement]: def-weyl-discriminant-and-reflecting-hyperplane-arrangement depends on def-positive-system-and-base-of-simple-roots, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-kostant-harmonic-subspace-of-the-symmetric-algebra]: def-kostant-harmonic-subspace-of-the-symmetric-algebra depends on def-killing-form, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-local-chevalley-restriction-for-kostant-freeness]: lem-local-chevalley-restriction-for-kostant-freeness depends on thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate, which is neither declared by this batch nor an item on disk
content-policy: 78 scoped item(s), 12 error(s), 0 warning(s)
```

## Handoff

All twelve readiness outcomes are escalated and must not be overwritten by a worker. Owner/operator reconciliation is required for the fetch evidence, inherited draft supplier, corrected restriction-error prose, concrete-example locator, and outstanding complete transitive prerequisite audit. The Step-3 author must independently assess the local proof strategies, including finite-source extraction, multiplicity-one cancellation, literal vertex versus conjugacy, and exceptional error transport. Published defect reports above await canonical-ledger reconciliation by its serial owner. A successful worker exit does not clear any of these findings.
