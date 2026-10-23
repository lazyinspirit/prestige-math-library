# Batch 14 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`; group: `batch-14`.

Completed level 3: `pthm-fd-px10-prediction`. Both proof steps match the exact existing-solution interface of draft `thm-fd-x10`. Independently checked its full energy proof and the channel estimate in `thm-fd-x07` step 1.4: periodic FTC integration, zero wall trace, pressure/transport cancellation, shear bound, Poincaré bound and integrating factor yield the displayed rate, including zero energy and both time endpoints. AC_omega is retained; there is no full-choice use, existence conclusion or empirical premise. Risk review recorded complete before proceeding higher.

The touched change is source metadata only (Guermond PDF-page label corrected to printed-page label). Verdict: `reviewed_no_defect`, `change_kind: metadata`, no defect ID. Independently retrieved Guermond volume 1: §3.3 starts on printed p. 23 (PDF p. 31), §3.4.4 starts on printed p. 25 (PDF p. 33), Theorem 3.4 is on printed p. 26 (PDF p. 34), and its proof is explicitly deferred. URL: https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf . This source is context, while the local suppliers prove the actual estimates.

Next: level 4 single-mode example, then level 5 residual theorem and level 6 rotation example/finding. Initial risk-report succeeded and routed all four items. No acceptance stamps or gates run.

Completed level 4: `ex-fd-x10-application`. Verdict `accepted_repair`, confidence 1. Reader defines the previously free pressure baseline as an arbitrary real constant in Pa, with no change to its zero gradient. Exact differentiation verifies the strong solution; the sine-square integral gives the stated energy and 2π² > 1 compares decay rates in inverse seconds. Zero amplitude (excluded for nontriviality) and t=0,T introduce no exception. Its manifest Example mirror now matches this clarification. Item/reference consumer search found only this example itself, so no outside consumer disposition is required. Defect ID: `fd47-b14-3a-pressure-baseline`. Complete risk review recorded before moving higher. Dependencies: def-countable-choice, def-fd-quantity-and-frame-conventions, post-fd-boundary-data, pthm-fd-px10-prediction. No empirical inputs, diagrams or statistical claim.

Next: bounded-domain/periodic residual theorem and rotation example. All four current raw item hashes match the native post-reader snapshot exactly; example x07 also matches its pre-reader hash. Pre/post hashes record only metadata changes on the two theorems and the pressure clarification on x10; contract risk reviews are new Alpha work.

Completed level 5: `pthm-fd-px07-prediction`. Verdict `reviewed_no_defect`, `change_kind: metadata`, no defect ID. The current restricted Stokes definition and postulate select the alternative zero-inertia force law; C² regularity and constant μ justify commuting derivatives in div σ. Subtraction gives exactly −μΔw+∇π=f. The bounded-domain supplier requires and receives a bounded C¹ domain, C²/C¹ fields, zero trace, incompressibility, the explicitly assumed Poincaré inequality and AC_omega. Its full proof separates zero gradient before division. The periodic branch proves its own cell energy identity by FTC, proves integral Cauchy by a nonnegative quadratic with zero norm separated, and uses the supplier's direct channel bound C=h. No unsupported use of a Euclidean C¹-domain divergence theorem on a cornered cell occurs. Complete risk review recorded before level 6. Sources/dependencies: items/thm-fd-x07.md (all steps), items/def-fd-creeping-stokes-model.md (Definition and equivalence proof), items/post-fd-creeping-force-balance.md (Postulate and formulation notes), all shared physical/model Facts already read, and exact Statements of the published Euclidean Cauchy and bounded-C¹ divergence suppliers. Their statements match the uses; no imported mathematics was edited.

Completed level 6: `ex-fd-x07-application`, reader:14:1 `confirmed_nonfatal`, confidence 1. Direct differentiation gives zero divergence and Laplacian, centripetal acceleration (−Ω_r²x,−Ω_r²y,0), balancing NS pressure gradient and constant Stokes pressure. Both traces equal the rotating wall. Thus w=0 while f=∇π is nonzero off the rotation axis. The assumed Poincaré input is sufficient and no numerical value is deduced. Replaced only the stale iff-forward contract excerpt by the exact current text “Let $C_{B_R}>0$ be an explicitly assumed constant”; no item wording changed. This is a real contract citation defect, not a refutation of the example and not a false positive. Defect ID: `fd47-b14-3a-stale-poincare-excerpt`. Risk review complete.

Additional focused corrections: x10 rate-comparison finite-check input incorrectly named nonexistent step 1.2; corrected to the actual energy computation, step 2.1 (`fd47-b14-3a-rate-step-reference`). Hence its touched verdict is `amended_repair`: pressure clarification retained, contract evidence corrected, confidence 1. Independently retrieved Tong Part II opens with Chapter 3, “The Navier-Stokes Equation”; normalized the two theorem source titles and reference labels from Chapter 2 to Chapter 3, preserving all mathematical sections and scopes. URL: https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf . The theorem decisions remain metadata-only `reviewed_no_defect`; their Guermond locator corrections are retained. Manifest source mirrors and x10 Example mirror synchronized. No proof steps were rewritten, no judge stamps were present or added, and no Statement/Definition or physical-scope interface changed during Alpha. The reader's x10 pressure clarification has no consumers beyond its own placement.

Both assigned pages are frontmatter only with compact-v1, correct inventories and draft status. No TikZ/tikzcd diagrams occur in assigned carriers, and none is needed for these coordinate computations. No published defect, substantial unmet prerequisite, withdrawal, outside repair or owner blocker was found. This review does not audit unrelated transitive mathematics or certify publication. External textbook context was not substituted for any proof; independently retrieved relevant Guermond sections and Tong chapter identification only, not every contextual PDF cited upstream.

Final validation (all exit 0):

- Precheck: explicit four assigned items, 4 checked, 0 failing.
- Rendercheck: explicit four items and two assigned pages, 6 files, valid YAML and KaTeX.
- Scoped statement-first inspection through the native inspectStatement function: 4 items, 0 defects; no whole-frontier gate invoked.
- Required final proof-layout invocation batches both metadata-edited theorems and the retained reader-edited x10 example: 3 items, 10 steps, 0 defects. No item edit followed this command.
- risk-report before review and final --require-reviewed: 4 routed items, 0 errors, all reviews complete.
- Exactly four decisions match the scope: three touched carriers and reader:14:1. Each repair references its actual closed ledger row; reader finding references exactly one row. Native serialized defect-ledger append succeeded for 3 rows and refreshed its generated view.
- Owned cross-batch input preserved; native refresh succeeded and deduplicated. No logical dependency or inventory changed.
- The three opened published mathematical suppliers match their pinned research/math-imports.json SHA256 values. Both theorem pre-reader raw hashes are reproduced by reversing only the documented Guermond page-label and Alpha Tong chapter-label metadata changes; no unknown historical mathematical delta is hidden by a metadata verdict.

Final item SHA256 values:

- `pthm-fd-px10-prediction`: `a8fc59edc056e89f88328a430e9afc4b2ab4362449e7fae7e7cddb2b6b333331`.

- `ex-fd-x10-application`: `1db153f96d00e87cb1476bafd1a44fa940d0ff0f43c46075e1489770d04ee3d8`.

- `pthm-fd-px07-prediction`: `183b084c7de32a72fe29a1f12a450e19c36f6f53ad4c922e1b0335ca100602be`.

- `ex-fd-x07-application`: `c325ec33e30ba7fd8209adb64699e14b8a36a04011a65d8e4715dd9b54b09102`.

All routed obligations and risk reviews are complete. Blockers: none. Engine hash stamping, gates, judgment, publication and stage transitions were not performed.
