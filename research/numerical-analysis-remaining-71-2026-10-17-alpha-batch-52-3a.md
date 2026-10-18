# Batch 52 Step 3a adjudication

Run: numerical-analysis-remaining-71-2026-10-17. Group: batch-52.

Review follows the generated dependency order. No judging, stamping or engine transitions are performed.

## Level 0 checkpoint

The restriction-space definition uses the quotient of whole-space H^s for s>=0; the added Demkowicz Energy Spaces §3.1 printed p.50 (PDF p.54) supports exactly the infimum extension norm. Its citation-only change is audit enrichment, reviewed_no_defect, defect_ids empty. The actual completion definition and Countable Choice definition were read; nonnegative s controls the L2 restriction and the zero and equality-class cases are sound.

The zero-facet-trace proof pulls back the real p=2 reference trace through a nonsingular affine map with positive surface Jacobian, then passes a Countable-Choice-selected C_c^infinity closure sequence to zero trace. The actual reference trace, affine derivative and Green suppliers were checked. No characterization of H10 by traces is assumed, and no defect was found.

The local polynomial inverse-trace finding is confirmed nonfatal: an empty family admits any positive bound, so the unqualified necessity sentence in step 3.1 is false although the selected max constant and the Statement remain sound. Repair conditions the witness on the presence of a cell and explicitly retains the empty-family branch. No Statement/Definition changes, hence no consumer interface change.

The later checkpoints below complete the higher-level risks and record final checks.

## Level 1 checkpoint

Fractional facet trace: the reader’s uniform slice-increment estimate is sound for 0<delta<min(1,2s-1). The reciprocal Fourier weight is integrable for s>1/2, density yields continuous L2 slices, Fubini identifies ordinary slices almost everywhere, and interior prisms prove locality. Quotient infimum gives the stated location-independent bound and uniqueness. Actual Fourier characterization, Plancherel, Schwartz automorphism, completed-product integration, change-of-variables and completeness interfaces were read. Risk review complete; the exact historical comparison is recorded below.

## Level 2 checkpoint

The boundary-form Definition is well-typed on the stated cellwise restriction regularity class, with polynomial inclusion and zero-boundary Yh traces supplied locally. The scaled trace proof supplies its own fractional extension: finite max-affine graph charts, cutoff multiplication, reflection with unit absolute Jacobian on affine pieces, and a mixed-distance estimate. Whole-space norm equivalence follows from the Fourier difference identity and cutoff/mollifier density. Scaling yields hK^{-1} and hK^{2s-1}; the s=1 weak trace and mean Poincare endpoint are separate and sound. The reader’s dominated-convergence citation is audit enrichment of an existing explicit limit, not a new mathematical defect. Both risk reviews complete.

## Level 3 checkpoint

Weak Green: dilation followed by mollification converges both in restriction H^r and in L2 divergence. The distributional dilation calculation needs no full H1 vector regularity. Green passes first on smooth tests, then by endpoint trace continuity on weak H1 tests. A global extension supplies common gradient traces; localized H1 approximation gives common test traces. I made one additional nonfatal support repair: step 3.1 now chooses the kernel supported in the unit ball, which is required by its written epsilon<dist(K,Nt complement) condition. The bump supplier permits this choice. The Statement and all consumer interfaces remain unchanged; reader DCT additions are retained. Risk review complete.

Global polynomial flux: the finite facet incidence count and weighted Cauchy–Schwarz are sound; the generic-ray proof supplies a boundary facet on the nonempty bounded mesh. Global fractional flux: disjoint facets on finitely many fixed boundary planes and hF<=h/d give a mesh-independent h^{1/2} estimate after taking extension infima. Both risk reviews complete.

Zero-boundary comparison interpolation: checked affine mean reconstruction, fractional Poincare, weak trace matching, shape-regular solid-angle valence, connected interior links and exposed facets in every boundary-star component. Paths within the relevant component suffice even if a boundary star has multiple components. Affine facet evaluation covers d=2; bounded overlap sums all gradient and weighted normal errors. The boundary-value error is exactly zero. s=1 uses Hessians and weak H1 trace, while higher-degree primal approximation remains separate. Risk review complete.

Historical bytes: all four exact pre-reader item hashes were recovered without guessing mathematical text by combining the existing step2-verification-markers-before body with current formatted frontmatter, removing exactly the reader-added source/dependency entries. Reconstructed hashes equal every supplied pre hash; current carriers before Alpha edits equal every supplied post hash. The recovery method is reproducible from those existing files and the pre/post inventories; no historical uncertainty remains for these deltas.

## Level 5 checkpoint

Energy quasioptimality: checked the strict positive coercivity threshold, definiteness on connected domains, finite-dimensional solvability, both consistency signs, the four weighted continuity products and the zero-before-division branch. The optional higher-order primal approximation remains an explicit hypothesis. Affine triangle example: fluxes 0, -1, 1/sqrt(2) and both weak equations are exact; zero-boundary tests also give the strong solution. Both risk reviews complete.

## Levels 6–7 and page checkpoint

Both real adjoint problems meet the actual Hilbert/Poincare/adjoint-supplier hypotheses under Countable Choice. Compact tests give -Delta zeta=e; the additional fractional PDE regularity remains explicit. The nonsymmetric identity retains its full signed boundary pairing and the half-order estimate. The symmetric all-Xh form estimate is 3+gamma0<=2+Cpartial+gamma0, so it never applies an inverse estimate to a nondiscrete adjoint error. Its h^s factor and separate primal A3 branch are sound. Each proof handles zero error before division; s=1 is allowed and s=1/2 is excluded. The final triangle witness integrates t from 0 to 1 to obtain 1/2 and hence form difference -1/2; its subsequent comparison is conditional on the actual theorem hypotheses. All three risk reviews complete.

The page metadata finding is confirmed nonfatal in both reports and repaired once: added fourier-multipliers-and-sobolev-characterisations to requires, matching the existing batch manifest and the actual home of the Fourier characterization supplier. The page prose and companion summary remain accurate. The two findings share one closed defect row. The restriction-definition manifest bibliography is synchronized with the reader’s added source; no dependency or Statement/Definition changed.

Final citation-fidelity review found and corrected a reader-introduced overstatement in facet-trace F5: rigid coordinate changes have absolute determinant one, but scalar dilations need their usual Jacobian. Step 2.1 already uses the correct factor sqrt(1+|xi prime|^2), so the calculation and Statement are unchanged. The verdict is amended_repair, retaining the sound slice/locality repair. This is a second, separately recorded nonfatal defect.

## Final dispositions and records

| Obligation | Verdict | Defect row suffix |
| --- | --- | --- |
| touched:52:def-nitsche-restriction-bessel-potential-sobolev-spaces | reviewed_no_defect; audit_enrichment | none |
| refuter:52:2 | confirmed_nonfatal | empty-family |
| touched:52:lem-nitsche-fractional-face-trace-on-simplex | amended_repair | facet-locality; dilation-jacobian |
| touched:52:lem-nitsche-scaled-fractional-simplex-trace | reviewed_no_defect; audit_enrichment | none |
| touched:52:lem-nitsche-fractional-weak-green-and-flux-cancellation | amended_repair | mollifier-support |
| reader:52:1 | confirmed_nonfatal | page-requires |
| refuter:52:1 | confirmed_nonfatal | page-requires |

All defect IDs have prefix `na71-b52-3a-`. Five distinct rows were appended to `research/defect-ledger.jsonl`, at stage `3a-adjudicate`, with disposition fixed and repair_confidence 1. The duplicate page findings reference the same row. No defect row was created for bibliography enrichment, DCT audit enrichment or a mechanical failure. All completed repairs carry repair_confidence 1 in the decisions. Exactly seven decisions are owed; page edits made to close findings do not add a separate page obligation to the frozen scope.

The facet-locality row records the nonfatal original gap between abstract completion traces and a.e. ordinary slices, together with the integration prerequisites. The separate Jacobian row records the reader-introduced false F5 sentence. The weak Green DCT addition is retained as audit enrichment; its amended-repair row concerns the independent kernel-support omission. No Statement or Definition changed in this pass. No material proof rewrite or existing judge stamp was present in any of the three edited proof carriers; no verification judgment was added.

The pre-reader recovery recipe uses the body after the second YAML delimiter from `research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/step2-verification-markers-before/items/ID.md` and the current reader-post formatted frontmatter. Remove the Demkowicz reference entry for the definition, the added completed-product integration and change-of-variables dependency lines for the facet trace, and the DCT dependency line for each of the other two lemmas. Recombine delimiters and unchanged text, then SHA256 the UTF-8 bytes. Each result equals its exact pre inventory entry. Reader-post files were checked against the post inventory before Alpha edits. The decisions retain the exact hashes. The facet Statement, reference-space convention and weak Green Statement are identical across these deltas; missing historical bytes are not being disposed by owner authorization.

## Sources and dependency scope

Consulted [Demkowicz, Energy Spaces](https://users.ices.utexas.edu/~leszek/classes/CSE393/book.pdf), §3.1 printed p.50, PDF p.54: restriction from the whole-space Bessel scale with infimum extension norm. This supports the reader's added convention citation.

Consulted [Guermond, Chapter 37](https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf), §§37.3.2–37.3.3, printed pp.188–190, Theorems 37.7–37.8 and their complete proofs: the nonsymmetric argument retains an adjoint boundary pairing with half-order bound, while the symmetric argument cancels the adjoint consistency defect under separate dual regularity. The actual local arguments, including their independently proved trace and interpolation prerequisites, were reviewed rather than accepted by source attribution. The reader's Juntunen–Stenberg source review remains prior evidence; I do not claim an independent reading of that full text.

Current routed item bodies, cited direct supplier Statements/Definitions and relevant Facts were read, including the Fourier characterization proof, real reference traces, mesh/affine scaling, weak density/localization, integration/convolution, zero-boundary piecewise polynomials, and Hilbert/Poincare/adjoint interfaces. The nonrouted local coercivity supplier was also read in full. This is not a re-audit of every transitive published proof or of the untouched, unflagged penalty-comparison example. Published carriers were kept read-only; no defective published supplier or required outside consumer correction was identified. The Fourier prerequisite page actually homes the named characterization item. Batch 52 has an empty cross-batch dependency artifact; its suppliers here are published context. The frontier dependency ledger records this owned-consumer disposition; stable IDs and all prior proposed withdrawals remain present.

## Local checks and handoff

- Reflow on all three Alpha-edited proof items: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on the local inverse trace, facet trace and weak Green paths: 3 checked, 0 failing.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-52.proof-contracts.json --strict`: 17/17 checked, 0 errors, 0 warnings.
- `node tools/rendercheck.mjs` on those three items and the edited A page: 4 files passed actual YAML/KaTeX parsing.
- Initial and final `node tools/risk-report.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-52.proof-contracts.json`: 0 errors, 17 routed. Explicit empty-family wording raises the local inverse trace from MODERATE to HIGH; its risk review is also complete. All fourteen current HIGH/CRITICAL rows have specific Alpha reviews.
- Final batched `node tools/proof-layout.mjs items/lem-nitsche-local-polynomial-flux-inverse-trace.md items/lem-nitsche-fractional-face-trace-on-simplex.md items/lem-nitsche-fractional-weak-green-and-flux-cancellation.md`: 3 items, 13 steps, 0 defects, after all final edits and reflow.
- Ledger append validated and appended five closed rows using `tools/defect-ledger.mjs append --no-render`; generated aggregate rendering remains engine-owned.

No open mathematical blocker, escalation, required published-ledger entry or proposed withdrawal. Report and decisions are ready for engine hashing and the gate battery. No judging, self-certification, stamping or stage transition was performed.

Final `risk-report.mjs` rerun with `--require-reviewed`: 0 errors, 17 items routed; all fourteen required reviews complete. A focused consistency check found exactly 7/7 frozen obligations and all decision defect references resolve to the five closed ledger rows.
