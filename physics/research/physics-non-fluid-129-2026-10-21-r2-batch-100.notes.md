# Batch 100 notes — Modular automorphisms and physical-time KMS conversion

## Plan and scope reconciliation

- The assigned design section is `research/plan-quantum-statistical-mechanics-frontier-expansion-track.md`, § “Modular automorphisms and physical-time KMS conversion” (line 64). It specifies A page `qsmx-modular-equilibrium`, B page `qsmx-modular-equilibrium-examples`, order 897/898, category `quantum-statistical-mechanics`, and the exact required-page lists recorded in the two page frontmatters. The original design inventory is four A items and one B example.
- `research/plan-spec.json` contains the matching A/B page IDs, titles, order and page-level requirements, but both `items` inventories are empty. This conflicts with the design inventory. Following the dispatch rule, the design controls the original claims; the empty plan inventory is recorded here and was not edited.
- No `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md` file was present.
- Four local A-page prerequisites were necessary to make the planned claims complete and explicit: `lem-qsmx-modular-strip-analyticity` supplies the exact spectral-vector strip domain and regularity; `lem-qsmx-modular-unitary-strong-continuity` proves continuity of the modular unitary orbit before it is used by the resolvent proof; `def-qsmx-von-neumann-kms-state` fixes the upper-strip W*-KMS boundary convention and its predual terminology; `lem-qsmx-tomita-operator-involution` supplies the closure, involution and polar identities required before the modular data can be defined. Each has a complete carrier or exact definition and declared dependencies. The A page therefore has eight items; the B page has one item. Both are below the 100-item cap.
- The B example cites the finite modular-density theorem, whose statement assumes AC. To avoid hiding that axiom in a supplier, the example now states AC and records `def-axiom-of-choice` as a mathematical premise.
- The source’s KMS sign convention is not copied implicitly: the local theorem uses the upper-strip definition with `F(t)=ω(A α_t(B))`, `F(t+i)=ω(α_t(B)A)`, and `α_t=σ_{−t}`. The finite Gibbs statement separately uses physical seconds and strip width `βℏ`.

### Local prerequisite additions

- `lem-qsmx-modular-strip-analyticity`: spectral-measure proof of the closed-strip vector domain, bound, continuity and interior holomorphy; supports the main KMS strip function.
- `lem-qsmx-modular-unitary-strong-continuity`: spectral-measure and dominated-convergence proof of strong continuity for the modular unitary group; required by the resolvent Fourier argument and used by the main theorem’s ultraweak-continuity proof.
- `def-qsmx-von-neumann-kms-state`: exact upper-strip state and automorphism-group definition; defines normal states by bounded increasing nets and identifies ultraweak functionals with the cited quotient predual.
- `lem-qsmx-tomita-operator-involution`: complete local closure and polar-decomposition argument; supplies the involution, antiunitary, modular and commutant-Tomita identities.

## Inventory and dependency levels

`research/physics-non-fluid-129-2026-10-21-r2-batch-dependency-levels.json` places batch 100 at batch level 1 with prerequisite batch 99. Item levels below were recomputed from the current batch-99 and batch-100 manifests using `dependencyLevels`; the scoped graph has 18 items, no cycle, and no level error.

| Level | Item | In-run suppliers determining the level |
|---:|---|---|
| 0 | `lem-qsmx-modular-strip-analyticity` | none |
| 0 | `lem-qsmx-modular-unitary-strong-continuity` | none |
| 3 | `def-qsmx-von-neumann-kms-state` | `lem-qsmx-von-neumann-predual` (batch 99, level 2) |
| 3 | `lem-qsmx-tomita-operator-involution` | batch-99 polar calculus (level 2); other in-run prerequisites are at levels 0–1 |
| 4 | `def-qsmx-standard-modular-data` | `lem-qsmx-tomita-operator-involution` (level 3) |
| 5 | `thm-qsmx-finite-modular-density` | `def-qsmx-standard-modular-data` (level 4) |
| 5 | `lem-qsmx-modular-resolvent-core` | `def-qsmx-standard-modular-data` (level 4) |
| 6 | `thm-qsmx-tomita-takesaki` | resolvent core (level 5) |
| 6 | `ex-qsmx-modular-is-not-physical-time` | finite modular-density theorem (level 5) |

The item dependencies and mathematical-premise roles are preserved in the item frontmatter and manifest. The batch-100 cross-batch file has one page edge to batch 99 and thirteen exact item edges to current batch-99 carriers. The B page’s dependency on its A companion and all item dependencies internal to batch 100 are not cross-batch rows. Each recorded edge was checked against the current carrier; current readiness is authoring readiness only, not independent proof approval.

## Prerequisite and readiness review

- Read the complete relevant statements and proofs of the batch-99 von Neumann algebra, conjugate Hilbert space and antilinear adjoint, closed antilinear polar calculus, commutant cyclicity, predual, and trace-class duality suppliers. Their actual conventions and hypotheses match the local uses: inner products on the core are explicitly converted to linear-second notation; cyclic/separating hypotheses are stated; quotient trace-class functionals supply the predual; and modular-unitary strong continuity has its own local spectral-measure proof before use in the resolvent argument.
- `loadStep1Record` and `step1Decision` were checked for all eight items on `qsmx-operator-algebra-prerequisites` and every direct batch-99 item supplier. All were current `ready` records. Other direct mathematical prerequisites were read at their actual published carrier statements and proofs; draft labels were not treated as proof status.
- The planned dependency on `qsm-kms-equilibrium` supplies the exact physical-time KMS convention. The finite theorem writes the upper-strip function and checks both boundaries directly, so the conversion is not inferred from a sign convention alone.
- Imported mathematical items and root mathematical originals were read-only throughout.

## Source harvest and resolution

`physics-non-fluid-129-2026-10-21-r2-batch-100.coverage.json` records two independent full-text treatments for the A page and two relevant treatments for the example page: F. Hiai’s complete cited sections and Edward Witten’s complete cited sections. The full PDFs were retrieved and locally text-extracted. Hiai Appendix A, Theorem A.7 supports the strip-vector result; Hiai §2.1 and Witten §3.1 support the modular operator and Tomita–Takesaki route; Hiai §2.2 supplies the KMS context; Witten §4.1 supplies the finite-density and Gibbs-time calculation. Coverage lists every harvested result, disposition and supported item. Existing retrieval receipts were reused and `source-fetch-check --stamp` verified all four page/source records; no retrieval failure or source drop occurred, so no retrieval-failure `source_resolution` record was required.

Two printed source formulas were checked against the complete arguments and corrected locally rather than copied:

1. Hiai §2.1, Lemma 2.1(iv), printed p. 11, gives `JΔ^{it}=Δ^{-it}J`. This conflicts with `JΔJ=Δ^{-1}` under antiunitary functional calculus and with the finite matrix calculation in Witten §3.1. The local proof derives `JΔ^{it}J=Δ^{it}`, hence `JΔ^{it}=Δ^{it}J`.
2. Hiai §2.1, Lemma 2.7 and Eq. (2.9), printed pp. 13–15, have a leading factor `i` in the resolvent integral. Recomputing the contour with the declared orientation and residue gives the local kernel without that factor; at `λ=1, Δ=I` it equals `1/2`, as both the scalar resolvent and the Sylvester equation require. The contour proof is shown in full in steps 1.4 and 2.2; the bounded Sylvester resolvent argument replaces the cited Banach-algebra spectrum shortcut.

The source discrepancies are transcription/mathematical errors in the cited formulas, not unresolved prerequisites. Their local corrections are explicitly proved and the independent finite-dimensional check is recorded; neither source is treated as authority over a failed identity.

## Scoped checks

- `content-policy.mjs --manifest-only --authored`: 9 items, 0 errors and 0 warnings.
- `manifest-deps.mjs`: 9 items, all explicit dependency arrays, 0 errors.
- Scoped item-level calculation over batches 99 and 100: 18 items, maximum level 6, no cycles or level mismatches. Batch 100 remains level 1 in the batch dependency file and requires batch 99.
- `depcheck.mjs --items-file`: all 9 assigned items and their prerequisite/page-cycle context passed.
- `rendercheck.mjs`: all 9 item files and both A/B pages passed YAML, wikilink and KaTeX checks; 0 errors.
- Normative `precheck.mts`: all 7 proof-bearing items passed; 0 repairs or failures.
- `proof-layout.mjs` on the 7 explicitly changed proof-bearing items: 44 steps, 0 defects.
- `proof-contract.mjs --strict`: 9/9 item contracts, 0 errors and 0 warnings.
- `coverage-checklist.mjs`: 17 harvested results across 2 pages, 0 errors and 0 warnings. `source-fetch-check --stamp`: all 4 page/source records verified; no new retries or drops.
- The 13 direct batch-99 item dependencies and the required batch-99 page were checked against current carriers. All 8 items on `qsmx-operator-algebra-prerequisites` and every direct batch-99 supplier have current Step 1 `ready` records.
- `loadStep1Record` and `step1Decision` confirm all 9 assigned items have current `ready` records with `owner: false`. These are prerequisite-readiness records, not independent proof acceptance.
- The cross-batch dependency array contains 14 rows (1 page and 13 item edges), all `verified` after scoped interface checks; none claim independent proof approval.

No unresolved prerequisite, proof, source-retrieval or page-capacity blocker remains. No tests were run.
