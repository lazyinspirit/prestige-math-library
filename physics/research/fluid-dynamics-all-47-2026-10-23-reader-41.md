# Step 3a reader report — batch 41

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Batch: `41`

## Verdicts

- `fd-mp01` — **Pass for the assigned page carrier.** Its frontmatter matches the batch manifest, its inventory matches the four assigned A-page items, `page_layout: compact-v1` is present, and the Markdown body is empty.
- `fd-mp01-examples` — **Pass for the assigned page carrier.** Its frontmatter matches the companion manifest, its examples inventory contains the assigned example, `page_layout: compact-v1` is present, and the Markdown body is empty.

No assigned item required repair. Three editorial defects were found in published mathematical prerequisite items. They remain unedited and are in the findings JSON.

## Opened inventory

### Instructions and batch evidence

- `../CLAUDE.md`
- `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`
- `../PHYSICS-CONTENT-MODEL.md`
- `briefs/reader.md`
- `research/fluid-dynamics-all-47-2026-10-23-batch-41.pages.json`
- `research/fluid-dynamics-all-47-2026-10-23-batch-41.proof-contracts.json`
- `research/fluid-dynamics-all-47-2026-10-23-batch-41.cross-batch-dependencies.json`
- The exact relevant pin records in `research/math-imports.json` and the matching records in `research/fluid-dynamics-all-47-2026-10-23-batch-5.pages.json`.

### Pages

- Assigned: `library/fluid-dynamics-mathematics/fd-mp01.md`, `library/fluid-dynamics-mathematics/fd-mp01-examples.md`.
- In-run page prerequisite: `library/fluid-dynamics-mathematics/fd-x01.md` and its companion `library/fluid-dynamics-mathematics/fd-x01-examples.md`.
- Published page context: `library/real-analysis/the-derivative-and-mean-value-theorems.md` and `library/real-analysis/topology-of-r.md`.

### Assigned items, in dependency order

- `items/def-fd-periodic-torus-domain.md`
- Published mathematical supplier: `items/cor-mean-value-theorem.md`
- `items/lem-fd-periodic-integration-by-parts.md`
- `items/def-fd-diffuse-interface-equations.md`
- Published mathematical supplier: `items/thm-heine-borel-r.md`
- `items/thm-fd-diffuse-interface-energy.md`
- `items/ex-fd-phase-constant-equilibrium.md`

For the published mean-value supplier's proof context, I also opened `items/thm-cauchy-mean-value.md` and `items/thm-rolle.md`. I inspected `items/def-higher-derivatives-and-smoothness.md` as notation context; no finding was based on it.

### External source sections

- Oden, *Foundations of Predictive Computational Science*, Chapter 11 §§11.2 and 11.4, printed pp. 209–212, [PDF](https://www.oden.utexas.edu/media/reports/2017/1701.pdf).
- Georgiadis, “Energy identity for the incompressible Cahn–Hilliard/Navier–Stokes system with non-degenerate mobility,” §1, equations (1.1)–(1.5), and Theorem 1 with §2 proof, pp. 1–7, [PDF](https://d-nb.info/1352416549/34).

## Mathematical review

- `def-fd-periodic-torus-domain` explicitly fixes the quotient torus, periodic lifts, coordinate derivatives, cube integral, matrix norm, and time differentiability convention used by the batch.
- `lem-fd-periodic-integration-by-parts` is justified by uniform-grid Riemann sums: uniform continuity controls the Darboux gaps, the one-dimensional mean value theorem bounds each coordinate difference quotient, periodic endpoint values telescope, and the product rule for `gF` gives the second identity. The `d=1` empty remaining-coordinate tuple is handled. I found no missing hypothesis or inference.
- `def-fd-diffuse-interface-equations` identifies the fields, domains, dimensionless convention, potential, chemical-potential field, regularity, equations, and energy. It makes no empirical or dimensional claim.
- In `thm-fd-diffuse-interface-energy`, Step 1.1 obtains uniform convergence of the energy-density difference quotients: the field regularity supplies the gradient limit, while compactness of the local range of `phi` and continuity of `W'` supply uniform continuity and boundedness for the potential term. The Riemann integral is continuous in the uniform norm. Steps 2.1–4.1 apply the periodic identity with fields at the stated spatial regularity; incompressibility removes pressure and transport work, and the two remaining transport terms cancel. Step 5.1 adds the balances. The conclusion is conditional on the stated smooth solution and asserts no existence result. I found no unjustified step.
- `ex-fd-phase-constant-equilibrium` verifies the equations by direct substitution and computes the energy from the volume of `Q_d`; it does not infer stability or a local minimum. Its stated scope and proof agree.

The cited Oden sections support the gradient free-energy and Cahn–Hilliard formulation. Georgiadis states a three-dimensional periodic coupled model using a Korteweg-stress momentum equation and proves an energy identity for weak solutions under additional assumptions. That source is related formulation context; the assigned smooth theorem supplies its own proof and does not import Georgiadis's weak-solution hypotheses. I found no citation defect in the assigned items.

## Uneditable findings

The findings JSON records statement links embedded in three published mathematical prerequisite Statements. Those items are read-only imported suppliers; the exact assigned consumers whose dependency closures reach them are recorded in each row. These are editorial defects only; I found no mathematical failure in the supplied results or in their use here.

## Edits, checks, and blocker

- Edits: none.
- No item changed, so no proof-contract update, reflow, precheck, or proof-layout command was required.
- No blocker to the assigned batch review.
- Coverage limit: I did not independently re-audit every root-mathematics prerequisite below the published suppliers or every upstream page requirement of `fd-x01`. The findings and verdicts above are limited to the assigned carriers, direct item suppliers, the inspected mean-value proof path, and the cited source sections.
