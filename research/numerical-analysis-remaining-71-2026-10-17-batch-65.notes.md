# Batch 65 notes — Homogenization, multiscale FEM and heterogeneous media

Run `numerical-analysis-remaining-71-2026-10-17`, role beta, batch 65. The controlling scheduling input is `85f340a3bd2a14103f70ecdec186724f717730606d032ab67f121c6e512b1319`. The batch is at dependency level 1 and lists batch 54 as a prerequisite. Only batch-65 items, A/B pages, and batch-65 evidence were edited.

## Plan and design reconciliation

The controlling `plan-spec.json` and generated task require `adaptive-finite-element-methods` for this pair. The older PE21 section of `plan-numerical-spatial-track.md` additionally lists NA-28 (mesh/interpolation), NA-29 (Aubin–Nitsche), and NA-30 (Strang). Per the owner direction and assigned instructions, the current plan/spec controls. The A page retains only the AFEM requirement; it does not add NA-28/29/30 page edges. Its macro error is a direct best-approximation plus bilinear-form perturbation estimate proved locally, so no interpolation estimate, Aubin–Nitsche argument, or Strang supplier is used.

The design scope is preserved: periodic measurable scalar uniformly elliptic data; correctors and effective tensor; symmetry and ellipticity; two-scale homogenization on a bounded Dirichlet domain; a quantitative first-order corrector rate under explicit boundary and regularity hypotheses; and a concrete FE-HMM micro/macro construction with separately exposed macro, micro, and resonance terms. LOD was not selected. The FE-HMM branch is restricted to a square in dimension two because the supplied compatible NVB family is two-dimensional. Micro integrals and linear solves are exact real-arithmetic operations; no bit-complexity claim is made. No accuracy is asserted for arbitrary scale ratios or nonperiodic coefficients.

## Inventory and dependency order

The manifest, A/B pages, and 26 carriers agree. The A page has 22 items and the examples page has four. Current in-run item levels, recomputed from actual item dependencies and the inspected batch-54 NVB definition at level 0, are:

- Level 0: `def-periodic-scalar-diffusion-data`, `def-periodic-zero-mean-cell-space`, `lem-unit-cube-h01-separability-and-l2-compactness`.
- Level 1: `def-periodic-cell-problem`, `def-periodic-two-scale-convergence`, `lem-periodic-averaging-on-cube`, `lem-periodic-cell-poincare`.
- Level 2: `lem-periodic-cell-corrector-wellposedness`, `thm-two-scale-compactness-for-l2-bounded-sequences`.
- Level 3: `def-periodic-cell-correctors-and-effective-tensor`, `lem-two-scale-gradient-decomposition-for-h01`.
- Level 4: `alg-fehmm-periodic-cell-micro-macro`, `lem-fehmm-one-dimensional-nonaligned-resonance-bound`, `thm-periodic-effective-tensor-symmetric-elliptic`.
- Level 5: `ex-layered-periodic-effective-tensor`, `ex-nonaligned-periodic-sampling-resonance`, `ex-periodic-effective-tensor-high-contrast-no-uniform-condition-number`, `lem-fehmm-micro-cell-solves-wellposedness`, `lem-periodic-flux-corrector`, `thm-periodic-dirichlet-homogenization-on-unit-cube`.
- Level 6: `cor-periodic-dirichlet-homogenization-strong-l2`, `lem-fehmm-micro-tensor-approximation-error`, `lem-fehmm-period-aligned-sampling-has-zero-resonance`, `thm-periodic-boundary-layer-corrector-estimate`.
- Level 7: `thm-fehmm-macro-micro-resonance-error-decomposition`.
- Level 8: `ex-fehmm-macro-micro-resonance-ledger`.

The macro FE-HMM uses the actual batch-54 draft `def-afem-nvb-labelled-triangulation-family` and published matching-mesh/P1 suppliers. The concrete square initial triangulation is split by the diagonal from $(0,0)$ to $(1,1)$; the shared diagonal is label 0 on both triangles and exterior edges are label 1. This meets the supplier's stated compatible-label interface. The flawed AFEM moment interpolation theorem is not a dependency of this batch.

## Cross-batch issue found

The complete current body of `items/thm-afem-local-moment-interpolation-estimates.md` was inspected. In proof step 1.2 it applies the operator $I_T$, whose definition is restricted to global $v\in H^1_0(\Omega)$, to $v-c$ on an interior patch, where $c=v_{\omega_K}$. In general $v-c\notin H^1_0(\Omega)$, so that application is outside the defined domain. This affects consumers relying on the asserted local moment-interpolation estimate. Batch 65 does not rely on it: the FE-HMM theorem uses the exact best-approximation quantity $\inf_{V_H}\|\nabla(u_0-V_H)\|_2$ and proves its own form-perturbation estimate. Proposed supplier repair for owner/batch 54: state and prove a local $L^2$ extension of the moment formula on the patch (with its exact domain and boundary cases), or replace that proof route with a locally valid estimate. No other pair's files were edited.

## Sources and retrieval record

Three full-text sources were inspected for the A-page scope:

1. Grégoire Allaire, *Introduction to Homogenization Theory*, Lecture 1, complete PDF, §§1.1, 1.2.2–1.2.3, 1.3.1, including the cell variational problem, oscillating-test argument, periodic averaging, two-scale compactness/gradient decomposition and boundary cutoff. URL: `https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf`.
2. Zhongwei Shen, *Lectures on Periodic Homogenization of Elliptic Systems*, complete 246-page PDF, Chapter 1 §§1.2–1.3 and Chapter 2 §§2.1–2.2, including corrector fluxes, two-scale limits, antisymmetric flux potentials and the boundary-strip estimate. URL: `https://arxiv.org/pdf/1710.11257`.
3. Patrick Ciarlet Jr. and Christian Stohrer, *Finite-element heterogeneous multiscale method for the Helmholtz equation*, complete six-page paper, §§2–3, including quadrature sampling, periodic micro coupling, and FE-HMM macro assembly. The physical model is Helmholtz; only the method conventions are used, and all scalar elliptic claims are proved locally. URL: `https://comptes-rendus.academie-sciences.fr/mathematique/item/10.1016/j.crma.2014.07.006.pdf`.

The source-coverage file maps every harvested result and item to these treatments. Source excerpts support the selected proof routes; every proof step and estimate required here is proved in the local carriers. The Acta Numerica full-text mirror returned HTTP 403 on the initial fetch and all five recovery retries. A second full FE-HMM error-analysis PDF at EPFL Infoscience returned HTTP 405 on the initial fetch and all five recovery retries. Both six-attempt records, alternative searches, and per-item local arguments/dependencies are preserved as `source_resolution` records in the coverage file. These two optional sources are marked dropped with certainty because the complete local proofs remain, while the active Allaire/Shen treatments and the complete Ciarlet–Stohrer paper provide the literature context; no mathematical claim or coverage item was dropped. Other candidates searched earlier included the Allaire 1992 direct SIAM endpoint (403), an EPFL bitstream endpoint (429), an `HMM1.pdf` URL (502), and an IntlPress Arjmand–Stohrer PDF (403); none is an active citation.

All analytic branches declare Countable Choice where inherited Sobolev/Hilbert separability or subsequence selection is used. No Axiom of Choice or Dependent Choice is claimed. The cell, energy, and finite-dimensional variational calculations themselves require no stronger choice principle.

## Readiness and evidence

The draft carriers use actual inspected external supplier bodies. `def-afem-nvb-labelled-triangulation-family` is a draft cross-batch supplier; its body is available and its interface is recorded, but this note does not certify independent acceptance. The AFEM interpolation estimate defect is escalated separately and is not a prerequisite to any batch-65 claim. The completed local FE-HMM and homogenization proofs remain subject to native review and run gates.

Final mechanical results after the last carrier edits:

- `proof-layout` on all 26 assigned items: 26 items, 60 numbered steps, 0 defects. `precheck` checked 20 proof-bearing items; 0 failed.
- Strict proof-contract validation: 26/26 checked, 0 errors, 0 warnings. The contracts contain the actual numbered steps, claims and inputs for each item.
- Focused `depcheck`, `fwdcheck`, and `extcheck` passed for all 26 items and their prerequisite graph. `content-policy` checked the 26 scoped carriers with 0 errors and 0 warnings.
- `rendercheck` passed all 26 carriers and both A/B pages (28 files), including KaTeX and renderer YAML parsing. `coverage-checklist` found 2 pages and 15 harvested results, with 0 errors and 0 warnings.
- `source-fetch-check` verified all 6 active page/source entries and resolved all 6; the two dropped optional retrievals remain separately documented with six attempts and validated local-proof resolutions.
- The whole-run dependency-level checker reported 52 diagnostics outside batch 65: 14 empty inventories, 37 stale item levels, and one self-cycle at `thm-maxwell-yee-strict-cfl-modified-energy`. A scan for all 26 batch-65 IDs found 0 batch-65 diagnostics. Batch-65 item levels remain 0–8 as listed above.
- Step 1 readiness records were written for the 26 assigned items with their declared direct dependencies examined; a targeted current-hash check found 26/26 ready. The run-wide `step1-decisions check` cannot finish because batch 62 has malformed unquoted YAML in `items/def-fv-tpfa-no-flux-diffusion-specialization.md` (the colon in its source title is parsed as a nested mapping). The run-wide `batch-dependency-levels check` also exits before its recorded-hash comparison on malformed source-title YAML in `items/def-maxwell-edge-fem-semidiscretization.md`. Both files are outside this pair's authority and were not changed. These records are authoring readiness only and do not constitute independent acceptance.

The full run-wide checker still requires owner/other-batch reconciliation; no other batch's inventory, levels, or records were changed here.
