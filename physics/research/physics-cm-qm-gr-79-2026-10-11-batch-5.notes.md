---
# Batch 5 notes — `cm-math-central` / `cm-math-central-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, batch 5, cover `cm-math-central`.
Category `non-relativistic-classical-mechanics-mathematics`, library
`mathematics`. All content authored 2026-10-11; this file records checkpoint
evidence, conflicts and unresolved findings, not approvals.

## Inventory and levels

- A page `cm-math-central` (order 88, plan-spec `requires`:
  `cm-math-balances`, `inverse-and-implicit-function-theorems`,
  `product-measures-and-the-fubini-tonelli-theorems`), 21 items:
  `def-cm-central-force-trajectory` (0), `lem-cm-planar-polar-lift` (0),
  `lem-cm-second-order-oscillator-form` (0),
  `lem-cm-cross-product-triple-identity` (0),
  `lem-cm-oriented-orthonormal-triads` (1),
  `thm-cm-central-force-angular-momentum-conservation` (1),
  `thm-cm-central-force-polar-reduction` (2),
  `thm-cm-circular-orbit-and-radial-frequency` (3),
  `thm-cm-kepler-binet-equation` (3),
  `thm-cm-kepler-conic-and-eccentricity` (4),
  `def-cm-one-dimensional-action-variable` (0),
  `thm-cm-kepler-ellipse-geometry` (5),
  `thm-cm-kepler-orbit-period` (6),
  `thm-cm-action-variable-derivative` (1),
  `def-cm-scattering-data` (0),
  `thm-cm-scattering-turning-point-and-global-branches` (3),
  `thm-cm-scattering-asymptotic-velocities-and-impact-parameter` (4),
  `thm-cm-scattering-angle-advance` (5),
  `thm-cm-differential-cross-section-density` (1),
  `thm-cm-coulomb-scattering` (6),
  `thm-cm-rutherford-cross-section` (7).
- B page `cm-math-central-examples` (order 89, `requires: [cm-math-central]`),
  4 items: `ex-cm-harmonic-oscillator-action-derivative` (2),
  `ex-cm-kepler-ellipse-data-check` (7),
  `ex-cm-rutherford-cross-section-check` (8),
  `cex-cm-radial-kepler-collision` (7).
- Levels are one plus the maximum level of in-run dependencies, counting the
  batch-2 suppliers `lem-cm-derivative-of-pairings-of-curves` (0) and
  `thm-cm-compact-continuation-for-locally-lipschitz-odes` (0); published root
  suppliers do not raise levels. Engine batch graph: batch 5 has
  `dependency_level: 1` with `requires: [2]` in
  `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`.

## Files written by this batch

- `items/` carriers for the 25 ids above; page carriers
  `library/non-relativistic-classical-mechanics-mathematics/cm-math-central.md`
  and `...-examples.md`.
- `research/physics-cm-qm-gr-79-2026-10-11-batch-5.pages.json` (manifest with
  per-item statements, `deps`, `dependency_roles`, `dependency_level` and the
  two source references each A item carries).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-5.proof-contracts.json`
  (strict contract: 25/25 items, 0 errors, 0 warnings; every fact-to-source
  citation carries an exact excerpt from the source's Statement/Definition
  section; every numbered step has a derivation entry with its inputs; all
  eight standard boundary cases are disposed per item).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-5.coverage.json` (3 sources,
  43 harvested contents entries, 4 canonical rows; `source-fetch-check
  --stamp` 3/3 fetch-verified; `coverage-checklist --require-destination`
  0 errors, 0 warnings).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-5.cross-batch-dependencies.json`
  (3 page edges and 5 item edges into batch 2; each supplier statement read).
- `research/physics-cm-qm-gr-79-2026-10-11-step1-<id>.json` readiness records
  for the 25 ids, written after the final carriers.

## Design, plan and source conflicts (recorded, not hidden)

1. **Design vs plan suppliers.** The design section "Cm Math Central"
   (`research/plan-non-relativistic-classical-mechanics-track.md`, L93) names
   the published canonical suppliers
   `cor-c-one-change-of-variables-for-l-one-functions` and
   `thm-euclidean-inverse-function-theorem`, and the plan-seeded page
   `requires` list is the three-page list above. The current plan controls the
   page `requires`; the design-named root items are consumed at item level
   where the proofs actually use them: `thm-euclidean-inverse-function-theorem`
   in `thm-cm-action-variable-derivative` ([L1]) and
   `cor-c-one-change-of-variables-for-l-one-functions`,
   `thm-linear-change-of-variables-for-lebesgue-measure`,
   `thm-tonelli-theorem-for-sigma-finite-product-spaces` in
   `thm-cm-kepler-ellipse-geometry` ([L2], [L3]). Item-level deps therefore go
   beyond the page-level `requires` closure, which is the run-wide
   plan-seeding condition recorded below under gate findings.
2. **Granular split (design section counts are not item counts).** M9 was
   split into `def-cm-central-force-trajectory`, `lem-cm-planar-polar-lift`,
   `thm-cm-central-force-angular-momentum-conservation`,
   `thm-cm-central-force-polar-reduction`,
   `thm-cm-circular-orbit-and-radial-frequency`,
   `thm-cm-kepler-binet-equation` and
   `thm-cm-kepler-conic-and-eccentricity`, with the new local prerequisites
   `lem-cm-second-order-oscillator-form` (the constant-coefficient oscillator
   classification used by the linearised radial equation),
   `lem-cm-cross-product-triple-identity` and
   `lem-cm-oriented-orthonormal-triads` (the algebraic layer used by the polar
   reduction). E6 was split into `def-cm-one-dimensional-action-variable`,
   `thm-cm-kepler-ellipse-geometry`, `thm-cm-kepler-orbit-period` and
   `thm-cm-action-variable-derivative`. E10 was split into
   `def-cm-scattering-data`,
   `thm-cm-scattering-turning-point-and-global-branches`,
   `thm-cm-scattering-asymptotic-velocities-and-impact-parameter`,
   `thm-cm-scattering-angle-advance`,
   `thm-cm-differential-cross-section-density`,
   `thm-cm-coulomb-scattering` and `thm-cm-rutherford-cross-section`. Every
   promised claim of the three design sections is preserved; the design
   reserved no B items, so the B page adds three exact finite checks and one
   counterexample.
3. **Countable choice.** `thm-cm-kepler-ellipse-geometry` and
   `thm-cm-kepler-orbit-period` declare the Axiom of Countable Choice in their
   statements and cite `def-countable-choice`, used by the affine
   change-of-variables and polar-decomposition/Tonelli arguments (steps 2.1
   and 3.1 of the former) and by the compact-continuation and covering
   arguments of the latter. The polar lift uses only a single explicit choice
   of an angle (step 1.2 of `lem-cm-planar-polar-lift` and step 2.1 of
   `thm-cm-kepler-conic-and-eccentricity`), and
   `thm-cm-action-variable-derivative` makes only finite choices of auxiliary
   points (step 2.1) and local inverses (step 3.2); no other item needs a
   choice principle.

## Cross-batch dependencies

- Page edges: `cm-math-central` requires `cm-math-balances` (batch 2, in-run),
  `inverse-and-implicit-function-theorems` and
  `product-measures-and-the-fubini-tonelli-theorems` (published root pages).
- Item edges into batch 2, all read at statement level and recorded with
  evidence in `.cross-batch-dependencies.json`:
  `thm-cm-central-force-angular-momentum-conservation`,
  `thm-cm-central-force-polar-reduction` and
  `thm-cm-circular-orbit-and-radial-frequency` consume
  `lem-cm-derivative-of-pairings-of-curves`;
  `thm-cm-kepler-orbit-period` and
  `thm-cm-scattering-turning-point-and-global-branches` consume
  `thm-cm-compact-continuation-for-locally-lipschitz-odes` (and the latter
  supplies `thm-cm-coulomb-scattering` transitively). No item outside batch 2
  is consumed, and no consumer-owned edge onto batch 5 is claimed here.
- `frontier-dependency-ledger.mjs refresh --run physics-cm-qm-gr-79-2026-10-11`
  reports "refreshed and deduplicated"; the shared ledger is outside this
  batch's write scope.

## Gate findings (batch-owned)

- **Green:** `precheck.mts` on the 25 items: 22 proof-bearing items checked,
  0 failing (the three definitions have no phase body). `rendercheck.mjs` on
  the 25 items and 2 pages: OK (no wikilink in math, no unbalanced delimiter,
  no multiline display, KaTeX parses, frontmatter parses).
  `proof-layout.mjs` on the 25 items: 116 steps, 0 defects.
  `proof-contract.mjs ... --strict`: 0 errors, 0 warnings, 25/25 checked.
  `content-policy.mjs <manifest>`: 25 scoped items, 0 errors, 0 warnings.
  `manifest-deps.mjs <manifest>`: 25 items, 0 errors.
  `coverage-checklist.mjs --require-destination <coverage>`: 1 page, 43
  harvested results, 0 errors, 0 warnings. `source-fetch-check.mjs --coverage
  <coverage> --stamp`: 3/3 sources fetch-verified (Tong lecture notes PDF,
  Likharev EGP CM PDF, Fitzpatrick Newtonian Dynamics full book PDF).
  `citecheck.mjs` on the 25 items: OK. `extcheck.mjs`: whole library, 0
  recorded-not-proved, 0 resting on them. `depcheck.mjs` on the 25 items:
  no finding naming a batch-5 item (after the repairs below).
  `item-dependency-levels.mjs check --run ...`: no batch-5 page or item
  appears among the reported errors. `fwdcheck.mjs`: no forward-reference
  complaint naming a batch-5 item.
- **Red, owned elsewhere (not papered over):** the whole-run
  `item-dependency-levels check` exits 1 with 142 `empty scaffold inventory`
  errors, all for other concurrent batches whose manifests have not been
  transcribed into the plan; the merged run-level gates must wait for those
  batches.
- **`validate-plan.mjs` escalation (plan-seeded requires too short).**
  `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run
  physics-cm-qm-gr-79-2026-10-11` exits 1 and reports 12 hard
  `[undeclared-prereq]` errors for `cm-math-central` and 4 for
  `cm-math-central-examples`: items depend on published root pages
  (`continuity-ivt-evt-and-uniform-continuity`,
  `sine-cosine-and-the-definition-of-pi`,
  `fundamental-trigonometric-identities`,
  `linear-independence-bases-and-dimension`,
  `orthonormal-bases-parseval-and-fourier-series`,
  `inner-product-spaces-and-orthogonality`,
  `lebesgue-measure-on-euclidean-space`, `the-real-gamma-and-beta-functions`,
  `the-fundamental-theorems-of-calculus`, `fubini-and-change-of-variables`,
  `further-trigonometric-identities-and-inverses`, and
  `the-logarithm-and-general-powers`) that are not in the transitive closure
  of the plan-seeded `requires`. The items genuinely use those published
  suppliers (trigonometric calculus, inner-product/Bessel and Gram suppliers,
  Lebesgue change-of-variables, Gamma function for the unit-disc volume, FTC
  and primitives), so the finding is not removable by dropping dependencies.
  It is the same run-wide plan-seeding gap batch 2 recorded and escalated;
  the resolution is an owner/adjudicator choice between extending each page's
  `requires` to the full closure (manifest first, then the shared plan via the
  documented splice gate) and licensing read access to published root pages
  without `requires` entries. The shared plan was not edited by hand.
- **Published defects:** none found in the root suppliers consumed by this
  batch. Consumed statements were read at their exact sections (the contract
  file stores an exact excerpt per fact-source pair); any hypothesis mismatch
  would have been reported here with item ids and evidence.

## Authoring repairs made while building the carriers and contracts

All proofs were built in prerequisite order; the following repairs were made
in batch-owned carriers and are reflected in the final contracts, manifest and
readiness records.

1. **Canonical step numbering.** Every proof was reformatted to the corpus
   convention of single-line numbered steps in dependency-layer order
   (1.1, 2.1, 3.1, ...), with each step's tag carrying `step N.N` references
   only to earlier steps; `precheck.mts` passes with no auto-repair request.
   During that pass six items had genuinely misplaced steps repaired to their
   logical order (`lem-cm-planar-polar-lift`'s "solving the system" step moved
   after the quotient-rule step; the constants-before-representation order in
   `lem-cm-second-order-oscillator-form`; the `e1`-before-`e2` order in
   `lem-cm-oriented-orthonormal-triads`; the global-extension-before-theta
   order in `thm-cm-kepler-orbit-period`; the quadrature and free-tail
   references in `thm-cm-scattering-turning-point-and-global-branches`; and
   the left-leg/L-derivative order in `thm-cm-action-variable-derivative`).
2. **Unused facts removed.** The fact "the cross product is continuous" in
   `thm-cm-scattering-asymptotic-velocities-and-impact-parameter` and the
   redundant primitive/additivity fact in `thm-cm-coulomb-scattering` were
   cited by no step; both facts and their now-unused root deps were removed
   rather than kept as padding.
3. **Forward links removed from a definition.**
   `def-cm-scattering-data` pointed forward to two same-page consumers in its
   "Mathematical status" paragraph; the two wikilinks were rewritten as
   descriptive prose so the definition carries no forward reference.
4. **Missing dependencies added.** `thm-cm-coulomb-scattering` uses the
   half-angle argument of `thm-cm-scattering-angle-advance` (step 3.2) and now
   declares it, raising in-run levels: coulomb 6, rutherford 7,
   `ex-cm-rutherford-cross-section-check` 8. `thm-cm-kepler-conic-and-eccentricity`
   cites `def-cm-central-force-trajectory` and now declares it.
   `cex-cm-radial-kepler-collision` cites the three positive Kepler/scattering
   items it delimits and now declares them (level 7).
   `ex-cm-kepler-ellipse-data-check` was relabelled level 7 for its
   `thm-cm-kepler-orbit-period` dependency.
5. **Display math made single-line.** Sixteen items had display blocks split
   across source lines; every `$$...$$` block is now one source line
   (`rendercheck.mjs` clean).

## Source limitations carried in (CM15 integration)

The owner direction's CM15 source resolution
(`research/physics-cm-qm-gr-79-2026-10-11-cm15-source-repair/report.md`,
`provenance.md`, `claim-map.md`) was read before the scattering items were
finalised. The independent Fitzpatrick treatment is recorded in the coverage
file as the complete book PDF (the HTML section at
`Newtonhtml/node51.html` is the same material and is cited by the items), and
the following recorded limitations are preserved: uniform incident flux is an
adopted preparation, not counted event data; the general "scattering angle
decreases with impact parameter" assertion is not used — the local items
require a smooth deflection branch with nonvanishing derivative; the ideal
total cross-section divergence is proved for the truncated angular integral,
with every compact angular acceptance giving a finite integral; no
laboratory-frame transformation, shielding model, hard-wall collision rule or
quantum correction is claimed; and the Coulomb asymptotic position is not
asserted to converge to a line with a finite longitudinal intercept (only the
perpendicular distance `b = J/sqrt(2 mu E)` is claimed).

## Heuristic screens (read, not gates)

- `citation-faithfulness-screen.mjs` on the 25 ids: 6 items with no
  unexplained operator and 19 notation-level candidates (`theta`, `mathrm`,
  `partial`, `sqrt`, `infty`, `cdot`, `arctan`, `kappa`, `downarrow`). Each
  candidate is a renaming/notation difference between the fact restatement and
  the cited section, not an inflating claim; the per-fact exact excerpts in
  the contract file are the auditable form of the same comparison.
- `boundary-audit.mjs` on the contract file: no disposition contradicted by
  its three detectors; the printed candidates are generic template lines, not
  conflicts.

## Completion status

All 25 items are recorded `ready` with
`step1-decisions.mjs record --run physics-cm-qm-gr-79-2026-10-11 --item <id>
--decision ready --dependencies <json> --reason <text>` after the final
carriers were written, so each stored input hash is current. Readiness is a
step-1 authoring record, not independent mathematical approval; Step 3 review
follows. The `validate-plan` `undeclared-prereq` finding above remains the one
open owner-level escalation.
