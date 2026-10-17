# Reader report — batch 8

Run: `physics-remaining-80-2026-10-17`  
Batch: `8`  
Role: independent reader

## Inventory opened

- Batch manifest: `research/physics-remaining-80-2026-10-17-batch-8.pages.json`.
- Batch proof contracts: `research/physics-remaining-80-2026-10-17-batch-8.proof-contracts.json` (the seven assigned entries, citations, derivations, and boundary records).
- Assigned pages: `library/einstein-maxwell-models-mathematics/emg-cp03.md` and `library/einstein-maxwell-models-mathematics/emg-cp03-examples.md`.
- Assigned items: `def-emg-strict-charged-barotropic-system`, `lem-emg-charged-fluid-current-conservation`, `lem-emg-charged-fluid-positive-symmetric-reduction`, `thm-emg-local-charged-barotropic-development`, `prop-emg-compact-charge-compatibility`, `ex-emg-linear-eos-variables`, and `cex-emg-uniform-one-sign-torus-charge`.
- Page prerequisite context: `library/einstein-maxwell-models-mathematics/emg-cp02.md` and `library/einstein-maxwell-models-mathematics/emg-cp02-examples.md`.
- Mathematical dependencies opened for their uses: `def-emg-electrovacuum-cauchy-system`, `def-emg-lorentzian-forms`, `lem-emg-lorentz-hodge-calculus`, `lem-emg-observer-field-decomposition`, `lem-emg-maxwell-stress-conservation`, `lem-emg-fieldstrength-positive-symmetric-reduction`, `lem-emg-classical-maxwell-stress-identity`, `thm-ftc-first-part`, `def-countable-choice`, `def-dependent-choice`, `thm-smooth-inverse-function-theorem-on-manifolds`, `lem-gr-observer-projection-decomposition`, `lem-gr-future-causal-classification-by-a-timelike-field`, `lem-timelike-cone-has-two-convex-components`, `lem-lorentz-form-has-orthonormal-basis`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `lem-gr-reduced-einstein-principal-part`, `def-gr-harmonic-gauge-and-reduced-equations`, `lem-gr-einstein-residual-and-subsidiary-identity`, `thm-gr-local-symmetric-hyperbolic-well-posedness`, `thm-gr-periodic-symmetric-hyperbolic-existence`, `def-gr-periodic-torus-and-sobolev-spaces`, `lem-gr-periodic-sobolev-embedding`, `thm-gr-constraint-equations-in-normal-frame`, `thm-gr-local-geometric-development`, `thm-gr-density-divergence-and-finite-chain-flux`, `thm-picard-lindelof-local-existence-and-uniqueness`, `def-riemannian-divergence`, `prop-coordinate-formula-for-riemannian-divergence`, `lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes`, `lem-gr-galerkin-projection-properties`, `lem-gr-galerkin-ode-local-solution`, `lem-gr-galerkin-energy-inequality`, `lem-gr-galerkin-time-derivative-bound`, `lem-gr-galerkin-compactness`, and `lem-gr-galerkin-limit-is-classical-solution`.
- Import membership for the named mathematical suppliers was checked against `research/math-imports.json`; imported originals and snapshots were not edited.
- Relevant source passages were located in Choquet-Bruhat, *Introduction to General Relativity, Black Holes, and Cosmology*, Chapter IX (barotropic equation of state and index/enthalpy, §§IX.5.5 and IX.9.1), and Pugliese–Valiente Kroon, *On the evolution equations for ideal magnetohydrodynamics in curved spacetime*, §§3–4 and Appendix A. The arXiv URL retrieved the unversioned current PDF (v2); the separate v1 URL could not be fetched by the web tool.

## Review and page verdicts

The two page summaries match their placements and the assigned prose. The model definition specifies its fields, tensor conventions, SI units, strict equation-of-state hypotheses, smooth and finite-regularity branches, and exclusions. The fluid conservation, enthalpy change of variables, symmetric principal form, compact Gauss compatibility, linear-EOS example, and one-sign charge obstruction follow from their stated hypotheses and the opened suppliers. The source-free Maxwell reduction is extended by an algebraic current source in the local argument; the classical stress identity covers the regularity used in the Sobolev branch. I found no defective claim, title, computation, witness, or page-summary statement in the seven assigned items.

- **`emg-cp03` — page prose/placement pass; mathematical acceptance blocked by published dependency metadata.** The summary accurately describes the strict model, its regularity branches, and the development argument. Several proof-bearing published GR dependencies used by the assigned development lack the publication review marker required by the local schema; these are recorded below and in the findings JSON.
- **`emg-cp03-examples` — page prose/placement pass; mathematical acceptance blocked by published dependency metadata.** The summary accurately states the EOS formulas and compact-slice obstruction. The two example arguments are sound under their stated definitions and the compact-charge proposition. The counterexample uses published Lorentzian lemmas without required audit/verification markers; these are recorded below.

## Uneditable findings

All findings are in published mathematical dependency files, outside this reader's edit authority. Their exact locations and assigned consumers are in `research/physics-remaining-80-2026-10-17-reader-findings-8.json`.

The following proof-bearing items have `status: published` but no `verification.audited` or `verification.verified` record and no `verification.repair` receipt; their verification blocks contain only `verification.precheck` (pending or pass), with a judge record also present for one item. The local schema says a format precheck and a judge record alone do not satisfy publication review for a proved item:

- `lem-gr-reduced-einstein-principal-part` — `verification.precheck: pending`; consumed by `thm-emg-local-charged-barotropic-development`.
- `lem-gr-einstein-residual-and-subsidiary-identity` — `verification.precheck: pending`; consumed by `thm-emg-local-charged-barotropic-development`.
- `thm-gr-local-symmetric-hyperbolic-well-posedness` — `verification.precheck: pending`; consumed by `thm-emg-local-charged-barotropic-development`.
- `thm-gr-periodic-symmetric-hyperbolic-existence` — `verification.precheck: pending`; reached through the preceding local well-posedness dependency and used for its Sobolev existence conclusion.
- `lem-gr-galerkin-projection-properties`, `lem-gr-galerkin-ode-local-solution`, `lem-gr-galerkin-energy-inequality`, `lem-gr-galerkin-time-derivative-bound`, `lem-gr-galerkin-compactness`, and `lem-gr-galerkin-limit-is-classical-solution` — each has `verification.precheck: pending`; each is in the opened Galerkin existence chain reached by `thm-emg-local-charged-barotropic-development`.
- `lem-gr-periodic-sobolev-embedding` — `verification.precheck: pending`; consumed by `thm-emg-local-charged-barotropic-development`.
- `thm-gr-constraint-equations-in-normal-frame` — `verification.precheck: pending`; consumed by `thm-emg-local-charged-barotropic-development`.
- `thm-gr-local-geometric-development` — `verification.precheck: pending`; consumed by `thm-emg-local-charged-barotropic-development`.
- `thm-gr-density-divergence-and-finite-chain-flux` — `verification.precheck: pass`; consumed by `thm-emg-local-charged-barotropic-development`.
- `lem-gr-observer-projection-decomposition` — `verification.precheck: pass`; consumed by `lem-emg-charged-fluid-positive-symmetric-reduction`.
- `lem-gr-future-causal-classification-by-a-timelike-field` — `verification.precheck: pass`; consumed by `cex-emg-uniform-one-sign-torus-charge`.
- `lem-timelike-cone-has-two-convex-components` — `verification.precheck: pass`; consumed by `cex-emg-uniform-one-sign-torus-charge`.
- `lem-lorentz-form-has-orthonormal-basis` — `verification.precheck: pass` and a judge record, but no audit/verified marker; consumed by `cex-emg-uniform-one-sign-torus-charge`.

## Edits and validation

No edits were made. The assigned role is read-only for this batch, and the confirmed uneditable defects are published dependencies. No formatter, reflow, precheck, or item validation was run because no item was changed.

## Coverage limit / blocker

The recursive dependency graph reached 2,184 item IDs. I opened all seven assigned items, both assigned pages, the current batch contracts, the direct/claim-specific suppliers above, and the Galerkin existence chain used by the local Sobolev theorem. I did not manually inspect the entire transitive mathematical closure beyond those sources; nested suppliers outside the inventory above remain unreviewed. Therefore this report does not certify the full dependency closure or the batch theorem. The confirmed missing publication markers are a blocker for accepting those uses. The arXiv v1 PDF did not retrieve, so source-version verification is limited to the current unversioned v2 PDF.
