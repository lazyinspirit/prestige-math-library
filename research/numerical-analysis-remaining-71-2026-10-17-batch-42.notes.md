# Batch 42 authoring notes

Run: `numerical-analysis-remaining-71-2026-10-17`  
Pair: `yee-fdtd-and-transient-maxwell-discretization` / `yee-fdtd-and-transient-maxwell-discretization-examples`  
Assigned batch dependency level: **3**; prerequisite batches: **38**  
Assigned scheduling input: `432e8113021662076ce5e7a06e5c2e36e0db1488bffb1073e0cd909c1c4d8f0c`

## Controlling instructions and plan comparison

Read the full `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, owner authoring direction, generated Batch 42 tasks, assigned plan section, matching `plan-spec.json` rows, batch dependency-levels input, and current batch evidence before authoring. The owner direction controls. It adds no pair-specific override to the PE10 design.

The task, PE10 design in `research/plan-numerical-spatial-track.md`, and matching plan-spec row agree on the A/B page IDs, title, scope, and page requirements. Required page edges are `hyperbolic-finite-difference-methods`, `parabolic-finite-element-methods`, and `discrete-de-rham-complexes-and-edge-elements`. **No task/design/plan-spec conflict was found.** The manifest and A-page frontmatter retain all three requirements. No shared plan or unified dependency ledger was edited.

The run status was recomputed from `.autopilot` and checked against the run log before editing: the run remained in Step 1 and an owner blocker elsewhere held advancement; Batch 42 did not alter or advance autopilot state. The many RESUME files were treated as records of concluded runs, not as live status evidence.

## Inventory and dependency levels

The assigned A page has 20 items and the B page has 4 examples; the A page remains below its 100-item cap. Item levels are recomputed through same-run supplier batches 38 and 42. Published dependencies do not raise the in-run item level. Local suppliers are ordered before consumers.

| Level | Item | Direct item dependencies |
|---:|---|---|
| 2 | `def-transient-maxwell-system-with-material-interfaces` | `def-na-zero-tangential-hcurl` |
| 0 | `lem-maxwell-rectangular-stokes-identity` | `cor-vector-valued-ftc-and-lipschitz-bound`, `thm-continuous-on-a-rectangle-is-riemann-integrable`, `thm-riemann-fubini-on-product-rectangles` |
| 3 | `def-maxwell-discrete-cochain-and-yee-grid` | `def-transient-maxwell-system-with-material-interfaces` |
| 4 | `lem-maxwell-discrete-incidence-identities` | `def-maxwell-discrete-cochain-and-yee-grid` |
| 4 | `lem-maxwell-yee-step-matrix-is-positive-definite` | `def-maxwell-discrete-cochain-and-yee-grid` |
| 5 | `alg-maxwell-yee-leapfrog-update` | `def-maxwell-discrete-cochain-and-yee-grid`, `lem-maxwell-yee-step-matrix-is-positive-definite` |
| 6 | `thm-maxwell-yee-gauss-constraints-propagate` | `def-maxwell-discrete-cochain-and-yee-grid`, `lem-maxwell-discrete-incidence-identities`, `alg-maxwell-yee-leapfrog-update` |
| 6 | `thm-maxwell-yee-strict-cfl-modified-energy` | `def-maxwell-discrete-cochain-and-yee-grid`, `alg-maxwell-yee-leapfrog-update` |
| 7 | `thm-maxwell-yee-cartesian-dispersion-and-cfl` | `def-maxwell-discrete-cochain-and-yee-grid`, `alg-maxwell-yee-leapfrog-update`, `thm-maxwell-yee-strict-cfl-modified-energy` |
| 6 | `lem-maxwell-periodic-yee-consistency` | `def-transient-maxwell-system-with-material-interfaces`, `def-maxwell-discrete-cochain-and-yee-grid`, `alg-maxwell-yee-leapfrog-update`, `lem-maxwell-rectangular-stokes-identity` |
| 7 | `thm-maxwell-periodic-yee-smooth-solution-error` | `def-maxwell-discrete-cochain-and-yee-grid`, `alg-maxwell-yee-leapfrog-update`, `thm-maxwell-yee-strict-cfl-modified-energy`, `lem-maxwell-periodic-yee-consistency` |
| 7 | `thm-maxwell-yee-midpoint-conductivity-energy-balance` | `def-maxwell-discrete-cochain-and-yee-grid`, `alg-maxwell-yee-leapfrog-update`, `thm-maxwell-yee-strict-cfl-modified-energy` |
| 4 | `def-maxwell-edge-fem-semidiscretization` | `def-transient-maxwell-system-with-material-interfaces`, `def-na-lowest-order-whitney-de-rham-spaces`, `def-na-zero-tangential-hcurl`, `lem-na-whitney-moments-commute-with-grad-curl-div`, `def-countable-choice` |
| 5 | `lem-maxwell-finite-dimensional-ode-existence-uniqueness` | `def-maxwell-edge-fem-semidiscretization`, `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`, `def-countable-choice` |
| 6 | `thm-maxwell-edge-fem-energy-conservation` | `def-maxwell-edge-fem-semidiscretization`, `lem-maxwell-finite-dimensional-ode-existence-uniqueness`, `def-countable-choice` |
| 5 | `def-maxwell-edge-ritz-projection` | `def-maxwell-edge-fem-semidiscretization`, `def-countable-choice` |
| 6 | `lem-maxwell-edge-ritz-projection-well-defined` | `def-maxwell-edge-ritz-projection`, `def-countable-choice` |
| 5 | `lem-maxwell-nedelec-smooth-interpolation-estimate` | `def-maxwell-edge-fem-semidiscretization`, `def-na-lowest-order-whitney-de-rham-spaces`, `def-matching-affine-simplicial-meshes`, `thm-affine-piola-differential-and-trace-moment-identities`, `lem-na-nedelec-edge-unisolvence`, `lem-na-whitney-moments-commute-with-grad-curl-div`, `def-countable-choice` |
| 7 | `lem-maxwell-magnetic-compatible-initial-projection` | `def-maxwell-edge-fem-semidiscretization`, `lem-na-whitney-moments-commute-with-grad-curl-div`, `thm-na-uniformly-bounded-commuting-cochain-projection`, `lem-maxwell-nedelec-smooth-interpolation-estimate`, `def-countable-choice` |
| 8 | `thm-maxwell-edge-fem-smooth-solution-error` | `def-transient-maxwell-system-with-material-interfaces`, `def-maxwell-edge-fem-semidiscretization`, `lem-maxwell-finite-dimensional-ode-existence-uniqueness`, `def-maxwell-edge-ritz-projection`, `lem-maxwell-edge-ritz-projection-well-defined`, `lem-maxwell-nedelec-smooth-interpolation-estimate`, `lem-maxwell-magnetic-compatible-initial-projection`, `def-countable-choice` |

The highest level in this pair is 8. The batch-level scheduling input remains level 3 with prerequisite batch 38; this is separate from the item dependency levels shown above.

## Mathematical scope and closure

- The Maxwell definition states real fields, uniformly positive bounded time-independent tensor coefficients, impressed and conductive current, distributional charge/current continuity, PEC and periodic conventions, and the interface transmission conditions. It does not differentiate coefficients across a jump.
- The Yee branch defines oriented line/flux cochains, masses, source continuity on interior PEC volume-charge vertices, and a PEC closure that fixes boundary electric edges while retaining all magnetic face fluxes, including boundary-normal flux. This closure has no separate boundary surface-charge/current cochain. Its PEC incidence matrices are restrictions of the absolute oriented matrices; the local proof verifies both (CG=0) and (DC=0) after restriction.
- The Yee proof chain includes the midpoint-conductivity solve, discrete constraint propagation, modified-energy conservation/coercivity under (Delta t^2lambda_{max}<4), explicit equality and above-CFL behavior, and the exact rectangular Cartesian Fourier maximum. The rectangular cubic bound is strict; odd cell counts use the exact finite-grid maximum.
- Smooth consistency and the finite-time Yee error result are restricted to homogeneous periodic data. The Faraday consistency residual is retained at its sharper (O(Delta t^3)) cochain scale so its unscaled accumulation remains (O(Delta t^2)). No interface or unspecified PEC finite-difference Taylor rate is claimed.
- The conductivity result is for the specified midpoint treatment; the balance includes impressed-current work and nonpositive conductivity work.
- The PEC edge-FE definition, finite-dimensional ODE, energy identity, Ritz map, smooth interpolation estimate, corrected magnetic initial projection, and conditional (O(h)) semidiscrete error argument are all drafted. The initial magnetic correction is orthogonal to the discrete curl range and preserves the discrete divergence.

### Unresolved FE supplier chain

The current Batch 38 bodies were read and their Step 1 records inspected. `def-na-zero-tangential-hcurl` is ready and is used only with its closure-defined convention. The actual Step 1 records for `def-na-lowest-order-whitney-de-rham-spaces`, `lem-na-nedelec-edge-unisolvence`, and `lem-na-whitney-moments-commute-with-grad-curl-div` are escalated through their earlier H(div)/Whitney readiness chain. A current `def-na-hdiv-space` body and ready record now exist, but those downstream records remain escalated and were not overwritten.

The current `thm-na-uniformly-bounded-commuting-cochain-projection` body now states and proves full and homogeneous projections through a new local draft chain: `lem-na-graded-whitney-mesh-size-and-boundary-shifts`, `lem-na-whitney-averaged-pullback-moment-bounds`, and `lem-na-whitney-cochain-correction-and-strong-convergence`. I read all three current proof bodies. The theorem now assumes Countable Choice only; no full Axiom of Choice is imported by the current interface. However, all three new suppliers have no Step 1 records, and the theorem’s existing Step 1 escalation (2026-10-17T13:00:14Z) predates this body and its item hash no longer matches. Its record must not be overwritten by this pair. AFW §5.5 itself remains only an outline. Therefore `lem-maxwell-magnetic-compatible-initial-projection` and `thm-maxwell-edge-fem-smooth-solution-error` remain conditional drafts and are marked escalated pending owner reconciliation of the actual current supplier bodies and readiness records. The averaged-pullback supplier also depends on the still-escalated Whitney moment lemma.

Owner reconciliation is needed for the H(div)/Whitney readiness chain and for the bounded commuting projection. The existing projection escalation record lists `lem-na-uniform-smoothed-cochain-estimates` and `lem-na-stable-zero-tangential-projection-correction`, but that record predates the current theorem body and its hash is stale. The current body’s proof chain uses `lem-na-graded-whitney-mesh-size-and-boundary-shifts`, `lem-na-whitney-averaged-pullback-moment-bounds`, and `lem-na-whitney-cochain-correction-and-strong-convergence`; all three are draft items with no Step 1 records, and the averaged-pullback lemma depends on the still-escalated Whitney moment lemma. The owner must reconcile the current bodies and readiness records; Batch 42 does not rewrite the earlier escalation. The A page has ample capacity. The FE rate is not weakened to conceal these prerequisites.

## Page-level requirements and cross-batch evidence

The actual published hyperbolic page and its centered-wave definition/energy theorem were read. They concern a scalar one-dimensional recurrence with (0<ck/h<1); no scalar CFL theorem is transferred to the 3D Maxwell operator. The required page edge remains verified as context while the Maxwell spectral theorem is proved locally.

The actual parabolic page was read. It contains parabolic Hilbert-triple, time-stepping and Ritz results but no transient hyperbolic Maxwell theorem. Its plan-required page edge is retained and marked open for owner clarification; no Batch 42 proof uses a parabolic theorem as a Maxwell premise.

The actual Batch 38 de Rham page and relevant item bodies were read. Its page edge is open because the above space and projection records are escalated. Direct cross-batch item edges, their exact hypotheses, affected claims and evidence are recorded in `batch-42.cross-batch-dependencies.json`; the shared unified ledger was left to the owner.

## Sources and retrieval

The source inventory and per-result dispositions are in `batch-42.coverage.json`; URL stamps, local file hashes, inspection ranges, history, and source-resolution status are in `batch-42.source-evidence.json`.

- Schneider’s complete 415-page author-hosted FDTD book PDF was retrieved and target sections in Chapters 2, 3, 5, 7, 8 and 9 were inspected. The book’s 1D dispersion discussion explicitly does not supply a closed-form 3D result; the Cartesian 3D symbol is derived locally.
- Chen’s complete 10-page Maxwell lecture note was read. Its smooth-input moment identities and Maxwell energy form support context; its assumed quasi-interpolation is not treated as a proof.
- AFW’s full 70-page FEEC survey was inspected, with detailed reading of §§3.3–3.6 and §§5.1–5.6. Its smoothed projection outline is specifically recorded as incomplete.
- The source-fetch command passed: 3/3 sources fetch-verified, 1 newly stamped, 0 documented drops. Successful Chen/AFW stamps from Batch 38 were reused. The original 1966 Yee paper was not cited because the search returned metadata/abstract only; no claim depends on it. An uninspected Monk reference was removed from the draft and no claim depends on it.

## Scoped checks and readiness

| Check | Result |
|---|---|
| `node tools/tsx-run.mjs tools/author-check.mts numerical-analysis-remaining-71-2026-10-17 42` | Pass. Precheck, renderer, content-policy and strict-contract gates pass; receipt: `research/numerical-analysis-remaining-71-2026-10-17-author-check-42.json`. |
| Scoped `precheck.mts` over the 24 assigned item files | Pass: 19 proof-bearing items checked, 0 failing; the five definitions/algorithm are not applicable. Proof-item `verification.precheck` fields record `pass`; nonproof items record `n/a`. |
| `node tools/rendercheck.mjs` over 24 items and 2 pages | Pass: 26 files; YAML frontmatter and all TeX spans parse, with no delimiter or multiline-display errors. |
| `node tools/proof-layout.mjs` over the 24 assigned item files | Pass: 24 items, 61 numbered steps, 0 defects. |
| `node tools/proof-contract.mjs ...batch-42.proof-contracts.json --strict` | Pass: 24/24 items, 0 errors, 0 warnings; exact supplier excerpts, step maps and all eight boundary dispositions are present. |
| `node tools/content-policy.mjs ...batch-42.pages.json` (inside author-check) | Pass: 24 scoped items, 0 errors, 0 warnings. |
| `node tools/source-fetch-check.mjs --coverage ...batch-42.coverage.json` | Pass: 3/3 active sources fetch-verified, 0 documented drops. The earlier `--stamp` pass added Schneider’s stamp and reused Chen/AFW same-run stamps. |
| `node tools/coverage-checklist.mjs ...batch-42.coverage.json --require-destination` | Pass: 1 A page, 14 harvested results, 0 errors/warnings. |
| `node tools/item-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17` | Pass: 1,420 items across 142 pages, maximum in-run level 12. A separate scoped calculation on the Batch 38/42 manifests checked 52 items; Batch 42 labels/cycles had 0 errors and maximum level 8. |
| Step 1 records and scoped record/hash audit | 24 records: 16 ready and 8 escalated; scoped audit found 0 missing, stale-ready or otherwise invalid records. The escalations are the eight finite-element items documented above. No escalated record was overwritten and `--owner` was not used. |

No test suite was run; the checks above are the requested scoped authoring/format/dependency checks. These records document authoring status and do not constitute independent mathematical approval. The pair did not change published content, shared plans, the shared dependency ledger, or autopilot state.

Batch artifacts: `batch-42.pages.json`, `batch-42.coverage.json`, `batch-42.proof-contracts.json`, `batch-42.cross-batch-dependencies.json`, `batch-42.source-evidence.json`, and this notes file.
