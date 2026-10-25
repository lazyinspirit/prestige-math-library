# Batch 36 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`. Group: `batch-36`. Scope: four touched obligations only; no reader/refuter findings or page obligations.

## Definition review completed

`def-aqft-topological-interface`: retain the reader repair removing the undefined supersymmetry/BPS/supercharge aside. Its replacement asserts no extra property and leaves the source/target, decorated-isotopy, complete-input covariance, Hausdorff comparison space, and fusion requirements intact. Its sole supplier `def-aqft-topological-defect` was read in full: a selected model declares fields, complete inputs, boundary/background data, correlator and topology; topologicality quantifies over all allowed decorated isotopies disjoint from other insertions. Existence of model data or fusion is never inferred. No arbitrary choice is used.

Sources independently opened: Gaiotto–Kapustin–Seiberg–Willett, https://arxiv.org/pdf/1412.5148, introduction and equations (1.1)–(1.2); Carqueville, https://arxiv.org/pdf/1607.05747, section 2.1, printed pp. 5–8. These support deformation-invariant insertions and labeled source/target regions in their stated settings, not existence of general continuum interfaces. The single TikZCD arrow has the correct source, target and label and is explicitly illustrative.

Historical bindings: `git show HEAD:physics/items/<id>.md` reproduces every batch-36 pre-reader item SHA256; all five current item SHA256 values match the post-reader snapshot before this adjudication. The exact HEAD/current diffs were inspected. No missing-history exception is needed.

Initial risk-report: 0 errors, five items; interface and both examples HIGH. Interface risk review completed before finalizing the higher-level decisions. Remaining checkpoint: finalize higher-level evidence, synchronize manifest/contract excerpts, append closed nonfatal repair rows and run focused checks.

## Counterexample review completed

`cex-aqft-topological-interface-not-symmetry`: retain the explicit Hamiltonian types and inverse-energy time conventions. For every finite list the zero-Hamiltonian numerator and nonzero normalizer are independent of interface position. Empty lists give 1; allowed boundary pairs exist, e.g. b=1 and a=(1,0). The spaces have unequal dimensions, so the interface is not an endodefect; any linear S has rank(JS) at most one. Even equality of normalized correlators cannot conceal this obstruction: all target matrices and admissible boundary vectors distinguish a rank-one composite from a nonzero scalar identity. The universal internal-symmetry claim is refuted already by the unequal complete model data. No measured input is used. The Statement refuted is unchanged; no downstream interface propagation arises from the Counterexample clarification.

## Invertible example review completed

`ex-aqft-invertible-interface-between-finite-quantum-mechanics`: all four proof steps were independently checked. V is the swap matrix; H_+ V=V H_- and V-dagger V=V V-dagger=I. Power-series intertwinement and its adjoint give position invariance for finite forward/reverse sequences. Conjugating source-side observables and sending the initial state to V psi_- gives exactly the target-only normalized matrix element; target-side data stay fixed. Both reverse-pair products converge in norm to the identity. For moving collar endpoints the surrounding propagators also converge continuously, so the whole finite product converges. Division is valid because the declared identity-limit denominator is nonzero. This elementary continuity detail fills the proof's compressed phrase “fixed matrices”; it is nonfatal polish, not a new prerequisite. Positive gap, empty insertion lists, arbitrary fixed external interfaces, both inverse directions and excluded insertion/interface coincidences were checked. Retain the reader's more explicit proof and complete-input formulation. HIGH risk review complete.

## Z2 example review completed

`ex-aqft-z2-topological-defect-finite-quantum-mechanics`: all five proof steps were independently checked. U_1 squared is I; its conjugation sends X to -X. Simultaneous conjugation of rho and every insertion telescopes, then finite trace cyclicity proves covariance, including defect factors fixed by the Abelian action. Unitary conjugation preserves the density-matrix domain and has its stated inverse. H=0 makes isotopy invariance exact in each ordering chamber. For every finite list, adjacent defect fusion replaces U_h U_g by U_(h+g) identically for all separations; the transparent identity and both inverse laws follow. Empty lists, rank-one density matrices, both group elements and excluded boundary/collision times cause no exception. The group's explicit matrices now precede their first use, and all times and matrices have the declared units. HIGH risk review complete.

## Dispositions and consumer review

Exactly four decisions are recorded, all `amended_repair`, each with `repair_confidence: 1` and its own closed nonfatal defect row. The item texts are the accepted reader-result bytes. “Amended” records the necessary synchronization of owning manifest statement mirrors, interface citation excerpts, invertible-example derivation excerpts and current Alpha risk reviews. No inventory, item ID, dependency, claim strength, publication status or page body changes.

A search of all current item carriers for the four changed IDs finds only the interface definition and its three in-batch consumers. The interface consumers use the same source/target, complete-input topologicality, fusion and invertibility requirements; removal of the unrelated terminology changes none of those uses. Both example clarifications have no item consumers. The counterexample Statement refuted is unchanged. Actual page inventories retain all five IDs and both page bodies remain empty with `page_layout: compact-v1`. No affected outside consumer, published supplier defect, withdrawal, unmet prerequisite or owner blocker was found. No mathematical import was used or edited. The two page requires edges remain the existing context: these finite arguments do not use supersymmetry or categorical-fusion theorems.

The source reviews are restricted to the cited introduction/section 2.1; no full-paper review is claimed. Gaiotto supplies the deformation/group-operator terminology; Carqueville supplies the specifically oriented two-dimensional labeled-defect context. Finite quantum-mechanical realizations and all their claimed identities are checked locally. All predictions are conditional exact model calculations; there are no measured inputs, sampling claims or empirical inferences. No diagram beyond the single correctly directed interface arrow is required.

## Focused validation and handoff

- Historical raw-byte check: all five pre-reader items match `HEAD:physics/items/<id>.md`; all five current items retain the immutable post-reader raw hashes.
- Decision inventory check: exactly the four routed touched obligations, no extra page or finding decisions.
- `risk-report` on the owning contract: 0 errors; rerun with `--require-reviewed`: 0 errors, all three HIGH reviews complete.
- `proof-contract.mjs <owning contract> --strict`: 0 errors, 0 warnings, 5/5 items checked.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts` on the four touched paths: three proof-bearing items checked, 0 failing; the definition has no proof to check.
- `rendercheck` on the four touched paths: 4 files pass YAML, links/math-delimiter and real KaTeX parsing checks. This is not a production TikZ compilation claim.
- Final batched `proof-layout` on all four touched paths: 4 items, 12 steps, 0 defects. No item edits or formatter followed it.

Initial local command attempts using bare Node on `.mts` and a nonexistent plural `proof-contracts.mjs` did not run checks; the successful commands above use the actual TS loader and singular tool. Initial isolated ledger validation rejected three location labels. Guarded append-only taxonomy successors correct only those labels, preserve all original rows and hashes, and leave four active fixed defect records. Decisions reference the active successor IDs where applicable; these bookkeeping failures create no scientific defect rows. Final isolated validation is recorded below.

No judge, stamp, certification, engine gate battery, stage transition, publication, commit or push was performed. The engine owns current decision hashing and its ordinary gates. Blockers: none.

Final isolated `defect-ledger validate`: 7 historical/successor rows checked, 0 errors; four active fixed defects. The shared generated ledger view was not regenerated by this worker; the engine retains its ordinary ledger/view and gate duties.
