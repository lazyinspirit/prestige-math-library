# Batch 21 — Step 1 authoring notes

## Controlling design and plan comparison

The current owner direction dated 2026-10-23 selects research/plan-fluid-dynamics-refresh-track.md, section “Mechanical power balance under adopted wall laws” at line 720. The older design at research/plan-fluid-dynamics-track.md line 646 is historical: it reserves the same two A results and B example but lists extra page requirements FD-F01 and FD-S02. The controlling refresh requires only fd-f02, fd-f03 and fd-s03. This follows the owner direction and current plan hierarchy.

The current research/plan-spec.json agrees with the refresh on page IDs, order, category, library and page requirements, but leaves its item arrays empty. The linked successor inventory lists pthm-fd-wall-mechanical-power-balance, pthm-fd-linear-acoustic-model-prediction and ex-fd-adopted-poiseuille-couette. The assigned A page also contains post-fd-navier-slip-wall-law, because the current boundary-data postulate does not adopt a Navier friction law.

A further local A-page result, pthm-fd-local-momentum-balance-from-continuum, was added under the dispatch instruction to create missing intermediate results. The current incompressible Newtonian definition states an unforced equation, while the continuum postulate gives the material integral balance with body acceleration. The new result proves the forced pointwise equation from the material balance using the material-motion change of variables, Jacobi’s determinant formula, the divergence theorem, and continuity localization. It explicitly does not use the unforced equation in the model definition. This scope expansion and its rationale are recorded here; the shared plan files were not edited.

The supplied batch-level record assigns batch 21 level 4 and names batches 9, 11 and 19 as page prerequisites; its transitive graph also reaches batches 3, 2 and 18. Current in-run item levels are 3 for the Navier postulate, 4 for the local momentum theorem and acoustic theorem, 5 for the wall-power theorem, and 6 for the B example. The item-level recomputation passes. The run-wide batch dependency snapshot is stale against current in-flight manifests; it was left for the owner because it is shared run evidence.

## Current supplier inspection

Current Step-1 records were reloaded through loadStep1Record/step1Decision. The following current carriers and records match their consuming uses and are ready: post-fd-continuum-balances (fd-f01), def-fd-quantity-and-frame-conventions (fd-f01), post-fd-boundary-data (fd-f02), post-fd-newtonian-fourier (fd-f03), def-fd-incompressible-newtonian-model (fd-f03), def-fd-barotropic-euler-model (fd-f03), def-fd-smooth-wall-exterior-solution-domains (fd-s02), and thm-fd-global-linear-acoustics (fd-s02). The boundary-data readiness record became current during this authoring run; its no-slip, impermeability and periodic interfaces were rechecked against this batch’s use.

The current incompressible definition is unforced. The local momentum theorem therefore takes constant density, div u=0 and the stress convention from that definition and the Newtonian closure, then derives the forced local equation from the adopted material momentum integral balance. Its proof states the material-motion map and Jacobian calculation, applies the Countable-Choice-dependent divergence theorem to each material subregion, and localizes the continuous residual on inverse images of small balls.

The current thm-fd-smooth-wall-energy-uniqueness carrier is now present on fd-s03. Its complete Statement and Proof were inspected. The hypotheses match the bounded stationary homogeneous no-slip or common-beta Navier branch. In proof step 2.2, multiplying the difference-energy inequality by exp(-2 integral ||grad u||_infty) gives the nonincreasing nonnegative function initially zero; this is a complete integrating-factor Gronwall argument. Its current Step-1 readiness record is now ready. No mathematical or readiness blocker remains for this dependency.

The current thm-fd-global-linear-acoustics carrier and full proof were inspected. Its normalized 2pi torus, positive coefficients, smooth data, Countable Choice, global smooth solution and energy hypotheses match after the item’s explicit rescaling. Its Statement has inline wikilinks before the Statement references section, an editorial defect outside batch 21 ownership; it is reported, not repaired.

The bounded-domain divergence theorem is published and audited; its Statement assumes Countable Choice, a bounded C1 domain and a C1 vector field. The selected C2 domains and stress-work fields satisfy those assumptions. The Countable Choice definition is a published mathematical original. The S06 dependency on Picard–Lindelof is unused by its inspected proof and is not added to this batch’s arguments.

## post-fd-navier-slip-wall-law — A-page postulate, level 3

The exact adopted claim is (sigma n)_tau = -beta u_tau on a smooth stationary impermeable wall, with beta >= 0 in Pa s/m and no universality or measured-coefficient claim. For finite slip length ell_s > 0 in the constant-viscosity incompressible branch, beta = eta/ell_s. The current continuum and boundary-data suppliers are Step-1 ready; the postulate is ready.

Source: Gui-Qiang Chen and Zhongmin Qian, arXiv:0901.0147v1, §§1–2, equations (1.3)–(1.4), (2.5), Proposition 2.1, PDF pp. 1–5. The paper’s slip-length and density-normalized-viscosity convention gives beta = eta/ell_s under the selected stress convention. No theorem of universal applicability is imported.

## pthm-fd-local-momentum-balance-from-continuum — A-page conditional theorem, level 4

The exact claim is that the pointwise forced equation rho D_t u = div sigma + rho b follows on smooth constant-density incompressible Newtonian material regions from the adopted material integral momentum balance. Step 1.1 differentiates the changed material integral and uses Jacobi’s determinant formula with div u=0. Step 2.1 applies the divergence theorem to traction and obtains zero integral of the continuous momentum residual on every material subregion. Step 3.1 pulls back arbitrarily small current balls and uses continuity to force that residual to vanish pointwise. Countable Choice is carried at the exact divergence-theorem strength. The current material-motion, incompressible-branch and closure suppliers are ready; the complete local proof and contract pass.

Sources: David Tong, Fluid Mechanics, Chapter 2, §§3.1.1–3.1.2, PDF pp. 4–8 (printed pp. 57–61); Joseph M. Powers, Lecture Notes on Intermediate Fluid Mechanics, §4.4.5.2, printed pp. 145–146. Both full cited sections were read. The proof is supplied in the item and does not rely on either source as a substitute for the localization argument.

## pthm-fd-wall-mechanical-power-balance — A-page conditional theorem, level 5

The theorem gives the kinetic power identity on a bounded C2 domain or a periodic channel with no-slip physical walls. On the bounded branch, stationary Navier friction contributes -beta integral |u_tau|^2. It also states at-most-one smooth velocity for stationary homogeneous bounded-domain no-slip or common-beta Navier data. No existence or universal applicability claim is made. The local balance result is cited explicitly; the fixed-domain kinetic product rule, stress contraction, boundary traction integration and wall-law substitutions are proved in steps 2.1–5.1. Periodic side-face fluxes cancel directly on a fundamental cell. The current boundary, Newtonian, incompressible, domain, local-momentum and S06 uniqueness interfaces match and are ready. The current Step-1 record for S06 includes the full integrating-factor proof; the wall theorem is ready.

Sources read in full at the cited sections: David Tong, Fluid Mechanics, Chapter 2, §§3.1.1–3.1.2 and §§3.2.1–3.2.3, PDF pp. 4–14 (printed pp. 57–68); Joseph M. Powers, Lecture Notes on Intermediate Fluid Mechanics, §4.4.5.2, printed pp. 145–146, and §5.4.1, pp. 173–175; Chen and Qian, arXiv:0901.0147v1, §§1–2, PDF pp. 1–5. Powers distinguishes kinetic mechanical power from the total first-law energy balance. Tong’s kinetic-only wording is not imported as a total-energy claim. The stress-index convention is stated and checked locally.

## pthm-fd-linear-acoustic-model-prediction — A-page conditional theorem, level 4

The item defines the exact first-variation operator at a uniform positive-density rest state; it does not assume a nearby nonlinear solution family. It derives both tangent equations from the current no-force barotropic definition, rescales the physical 2pi L torus with L=1 m to the normalized torus, and proves acoustic energy conservation and the dispersion relation. Zero-frequency mean and transverse modes are handled explicitly. It makes no finite-amplitude error or empirical-observation claim. The actual current barotropic definition and current ready global linear-acoustics theorem match; this item is ready.

Sources read in full: David Tong, Fluid Mechanics, Chapter 3, §4.4.4, printed pp. 150–152 (PDF pp. 39–42); François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, Chapter 3 §§2.3 and 7.1.2, printed pp. 10–11 and 81–82. Golse’s temperature-coupled and whole-space results are context only; the proof uses the current periodic mathematical supplier.

## ex-fd-adopted-poiseuille-couette — B example, level 6

The example verifies the exact steady Poiseuille profile with body acceleration G/rho and Couette profile with top-wall speed V on the stated periodic channel. It computes flux, vorticity, body/wall power and viscous dissipation by direct differentiation and integration. It explains why the linear pressure ramp -Gx is not single-valued on the streamwise torus. It makes no empirical or named-material claim. The item proof is complete and its wall-theorem supplier, including the S06 uniqueness dependency, has a current ready Step-1 record; the example is ready.

Sources: Tong, Fluid Mechanics, Chapter 2 §§3.2.2–3.2.3, printed pp. 65–68; Powers, Lecture Notes on Intermediate Fluid Mechanics, §5.4.1, printed pp. 173–175. The original infinite-plate pressure-gradient setup is adapted to the periodic cell with explicit body forcing; no source measurement is copied.

## Pages, source recovery, and validation

The A page fd-ps02 contains the Navier postulate, the local momentum theorem, the wall-power theorem and the acoustic theorem, in supplier-before-consumer order. The B page fd-ps02-examples contains only ex-fd-adopted-poiseuille-couette. Both page carriers are YAML frontmatter only with empty Markdown bodies; requirements and statuses are preserved. The page inventory remains below the 100-item cap.

The sources include David Tong’s complete standalone Chapter 2 PDF (56 pages) and Chapter 3 PDF (70 pages); Powers’s complete 480-page lecture-note PDF; Chen–Qian’s complete 30-page arXiv v1 paper; and Golse’s complete 143-page handbook chapter. The full relevant sections and arguments were read. Retrieval history, searches and recoveries remain in batch-21.source-resolution.json: the full Tong course PDF exceeded the browser byte cap and was replaced by both author-hosted full chapter PDFs; Powers browser open timed out and the complete PDF was retrieved directly; an optional thesis mirror returned 404, its alternative was inaccessible, and the canonical Chen–Qian arXiv paper was retrieved; an initial malformed arXiv path returned 404 and was recovered with the canonical URL. No source was dropped. source-fetch-check --stamp verifies all 7/7 source/page records and all 7 are resolved.

Final validation:
- Author check: pass; 5 scoped items, all prechecks clean, 7 render targets clean, content policy 5 items with 0 errors/warnings, strict proof contract 5/5 with 0 errors/warnings.
- Explicit proof-layout: 5 items, 20 steps, 0 defects.
- Statement editorial check: all 5 item statements are complete and contain no links before their references sections; both page bodies are empty and each page carrier is YAML only.
- Coverage checklist: 2 pages, 12 harvested results, 0 errors and 0 warnings.
- Item dependency levels: 304 items across 94 pages checked, maximum level 9, pass.
- Batch dependency levels: check reports “Stale batch dependency levels for fluid-dynamics-all-47-2026-10-23; recompute before authoring.” This shared run-level snapshot was not rewritten; the owner must recompute it against the current in-flight manifests.
- Repository-wide depcheck: exit 1 on legacy full-library state (35,787 items, 3,294 pages; 10,243 hard errors and 2,571 warnings; error classes dep-unresolved, page-item-missing, published-unaudited, published-unchecked). No depcheck error names any of the five batch-21 items.
- All five batch-21 Step-1 records are ready and their hashes were reloaded as current after recording. These authoring-readiness records do not constitute independent proof approval.

## Readiness decisions and unresolved owner inputs

All five assigned items have current Step-1 ready records: post-fd-navier-slip-wall-law, pthm-fd-local-momentum-balance-from-continuum, pthm-fd-wall-mechanical-power-balance, pthm-fd-linear-acoustic-model-prediction and ex-fd-adopted-poiseuille-couette. The records were written without owner override after verifying each current supplier interface and the S06 readiness record.

Owner input remaining: recompute the shared run-wide batch dependency-level snapshot, which remains stale against current in-flight manifests. The global depcheck failures are outside this batch’s assigned content. The inline Statement links in thm-fd-global-linear-acoustics are outside batch 21 ownership and remain reported only.
