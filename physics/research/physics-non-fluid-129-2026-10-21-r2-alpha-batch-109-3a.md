# Batch 109 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-109`.

## Levels 0 and 1 complete

Reviewed `def-qsmx-secular-thermal-generator` and `thm-qsmx-secular-gibbs-stationarity`, every proof step and their direct suppliers. Finite spectral sums define the generator; rate square roots produce its exact GKSL form; opposite frequency contributions cancel and the zero-frequency term vanishes separately. Commuting Lamb shift preserves each energy eigenspace. Empty families, zero rates, d=1 with arbitrary scalar energy, degenerate energies and every finite real beta are covered. No arbitrary choice, empirical inference, bath limit, uniqueness or convergence is asserted. Complete risk reviews recorded; no decisions owed on these untouched items.

Source conventions checked in [Rivas–Huelga](https://arxiv.org/pdf/1104.5242), §6.2.8, Eqs.109–111 and final nonconvergence caveat, and [Lin](https://ruizhezhang.com/teaching_2025/Lindblad_Notes.pdf), §3 Eqs.37–41. Supplier paths: `items/lem-qsm-matrix-state-calculus.md`, `items/def-qsm-dt-channel-definition.md`, `items/def-qsm-dt-gksl-definition.md`, `items/thm-qsm-dt-gksl-sufficient.md`. Next: entropy/DPI and exponential suppliers for level 2, then the level-3 counterexample.

## Level 2 complete

`thm-qsmx-spohn-finite-inequality`: accepted reader analytic-prerequisite repair after comparing authenticated pre bytes (owner step2 dephasing-units/final archive) with the current reader-post carrier. Coordinate boundedness meets the Banach exponential lemma. Current batch-101 channel DPI Proof 1.2–3.1 is sound for the actual positive inputs and fixed faithful reference; its partial-trace and Kraus suppliers were read. Resolvent differentiation has a locally uniform integrable bound; trace differentiation yields the stated formula at faithful times and a right derivative at zero. Singular times use only monotonicity and the upper right Dini derivative. No strict decay or convergence follows. Risk review complete. Source: [Watrous](https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf) Thm.5.35 and complete proof, printed pp.280–281; base-2 to natural logs is multiplication by positive ln(2). [Wilde](https://arxiv.org/pdf/1106.1445v8) Thm.11.8.1 statement, printed p.342, defers its proof. Next: level-3 witness and diagram.

## Level 3 complete

`cex-qsmx-stationarity-without-relaxation`: retained the reader repair. The four matrix units have generator eigenvalues 0,0,-2 gamma,-2 gamma, proving the exact series solution. Every diagonal density is fixed, so diag(1,0) refutes uniqueness and universal Gibbs convergence despite nonincreasing relative entropy. Checked p=0,1, z=0, determinant equality, t=0 and infinite time; beta may be any finite real. Diagram vertices are Z eigenvectors in one degenerate H=0 eigenspace, with no transfer arrows and the correct coherence decay. Risk review complete. All current item raw hashes equal the native post snapshot; all four pre images were recovered in the owner step2 dephasing-units/final archive and match native pre hashes. No Statement or Definition changed in either reader delta, so no interface propagation is triggered. Alpha synchronizes only manifest titles/prerequisites/roles and stale counterexample worksheet language. No item source is edited.

## Routed decisions and historical evidence

Exactly two decisions are owed: `touched:109:thm-qsmx-spohn-finite-inequality` and `touched:109:cex-qsmx-stationarity-without-relaxation`. Both are `amended_repair`, confidence 1: the reader source repairs are retained exactly, while Alpha synchronizes owning metadata. The scope group `aj` is preserved in the unchanged scope file; the dispatch output group is `batch-109`. There are no reader, refuter or page obligations.

The pre-reader archive is `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-qsm109-dephasing-units/final/items/`. Every archived item was checked against its native pre snapshot raw SHA256; every current item matches its native post snapshot raw SHA256. The two deltas were read as complete unified diffs. Thus historical preimages are available: no unbound-history exception or owner resolution is needed.

| Item | Native pre raw SHA256 | Current/native post raw SHA256 |
|---|---|---|
| `def-qsmx-secular-thermal-generator` | `e2acbcce5e2f6d370cbcf76d86c0c7bfea6677b7c983fbc76f27c9d1d0ebe316` | `e2acbcce5e2f6d370cbcf76d86c0c7bfea6677b7c983fbc76f27c9d1d0ebe316` |
| `thm-qsmx-secular-gibbs-stationarity` | `ca38e42b6cb5d5b5020d898e33dc67b91b6d4633fa2b50581e10cf232de9934e` | `ca38e42b6cb5d5b5020d898e33dc67b91b6d4633fa2b50581e10cf232de9934e` |
| `thm-qsmx-spohn-finite-inequality` | `fcba9cc05cd423c4910ad33b72b67a874bf522bda7827dea2ed06402e382ad64` | `fe68a49fbc4c0ce19d04e1c679510ad446ba5cef7f509e4da7c3fe2da02cca8c` |
| `cex-qsmx-stationarity-without-relaxation` | `2360a5f2b1cc1ca74f7b84076fd7ad6a45863433a068bec0cc33e0de45f79eaf` | `ef672e4419de07e6d84a4235d4ec378f113e80c640d7e2be8ca520298de368f5` |

The recoverable omissions in exact analytic prerequisites are nonfatal, not counterexamples to either result. The two-level historical diagram wording was imprecise about degenerate energy sectors; its equations and witness were already correct. Three closed nonfatal rows are recorded in the canonical defect ledger, each owned at `3a-adjudicate` and referenced by its touched decision:

- `physics-non-fluid-129-2026-10-21-r2-3a-batch-109-spohn-analytic-prerequisites`.
- `physics-non-fluid-129-2026-10-21-r2-3a-batch-109-dephasing-evolution-prerequisites`.
- `physics-non-fluid-129-2026-10-21-r2-3a-batch-109-dephasing-degenerate-diagram`.

No new mathematical defect was found in the current carriers or the actual supplier uses. The manifest now matches the added Banach/exponential prerequisites, mathematical roles and current counterexample title. The counterexample contract no longer describes the replaced scalar ODE argument. Strict contract checking exposed a stale A1 quotation of the batch-101 producer's statement: its initial linked convention wording has since moved to a reference section. Alpha refreshed this quote after independently reading the current producer; the channel-DPI inequality and its application are unchanged. This mechanical evidence refresh creates no additional scientific defect row.

## Supplier and consumer scope

All direct dependencies of the four owned items were read in full. Additional proof context read in full: `thm-qsm-dt-choi-kraus`, `thm-qsm-dt-channel-duality`, `lem-qsm-dt-finite-trace-pairing-cyclicity`, and `thm-it-quantum-relative-entropy-partial-trace-data-processing`. The current batch-101 `thm-qsmx-cmi-and-channel-dpi` proof constructs a finite Kraus isometry, computes its partial trace, checks support inclusion and isometric invariance, then applies the published partial-trace inequality. Its factorization diagram has the correct positive cones, conjugation arrow, partial-trace arrow and diagonal channel arrow; the displayed triangle commutes by the entrywise computation in step 1.2. This is a scoped supplier-use review, not a stamp of acceptance for batch 101 or an audit of every transitive published prerequisite.

The owning `batch-109.cross-batch-dependencies.json` retains its two exact verified edges: the A-page prerequisite `qsmx-entropy-entanglement`, and the Spohn consumer's channel-DPI supplier. Their evidence now records this current review; the unified ledger was refreshed using its supported command. Neither reader delta changes a Statement/Definition; Alpha changes no item body or physical public interface. No further consumer traversal or outside repair is necessary. Stable IDs and all four inventory entries are retained; no withdrawal is proposed.

No defective published supplier was identified, so the published-consumer ledger was not edited. Imported snapshots and the mathematics workspace remain read-only. All four items are mathematical finite-model statements: no observation, sampling assumption, measured input, empirical uncertainty or claim of physical applicability is introduced. No new AC use occurs.

## Focused checks and handoff

- Initial `risk-report.mjs` on the owning contract routed one HIGH and three CRITICAL items; complete individual risk reviews were recorded in dependency order. Final `--require-reviewed` passes with 0 errors, 4 items.
- `proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-109.proof-contracts.json --strict`: first reported the stale A1 quote above; after correction, 0 errors, 0 warnings, 4/4 checked.
- `tsx-run.mjs tools/physics-support/precheck.mts` on the explicit four owned item paths: 4 checked, 0 failing.
- `rendercheck.mjs` on the four owned items and two owned pages: 6 files pass real KaTeX/frontmatter checks. No claim of a separate TikZ compilation is made; its mathematical labels and conventions were reviewed directly.
- Final batched `proof-layout.mjs items/thm-qsmx-spohn-finite-inequality.md items/cex-qsmx-stationarity-without-relaxation.md`: 2 items, 7 steps, 0 defects. These are the two reader-edited item paths; Alpha makes no further item edit.
- `frontier-dependency-ledger.mjs refresh --run physics-non-fluid-129-2026-10-21-r2`: refreshed and deduplicated.
- Canonical defect-ledger append: 3 closed rows successfully appended and generated view refreshed.

No scientific blocker or escalation remains in this dispatched scope. The report and decisions file are ready for engine-owned hashing and gates. No judge cycle, stamping, publication, global gate battery or stage transition was initiated.
