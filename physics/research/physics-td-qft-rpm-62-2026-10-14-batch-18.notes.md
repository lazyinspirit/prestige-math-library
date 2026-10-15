# Batch 18 notes — Interacting Ensemble Geometry

Run: physics-td-qft-rpm-62-2026-10-14; role beta; assigned pair only. Work is confined to the assigned A/B pages, their local draft items, and batch-18 evidence. Root mathematical originals, imported snapshots, other batches, shared plan, live engine state, and owner verdicts are unchanged.

## Plan and scope reconciliation

The full design in research/plan-thermodynamics-track.md §“Interacting Ensemble Geometry” and the canonical research/plan-spec.json row agree: A page td-math-interacting-ensemble-geometry order 297, B page td-math-interacting-ensemble-geometry-examples order 298, category thermodynamics-mathematics, library mathematics, with the same four A-page prerequisites and B→A edge. There is no design/spec conflict. The A page preserves the planned positional continuum scope, normalization warning, interior-density limitation, hard-core beta-zero convention, and separate arbitrary-shape/exterior hypotheses.

The design reserves 14 named A items (cap 48) and four leaf B examples (cap 12). Six local helpers were added: an explicit van Hove definition, cell-quadratic superstability bound, general decreasing-integrable-tail free-pressure theorem, periodized empirical-field definition and stationarity result, and the canonical empirical-field conditioning lemma. Final inventory: 20 A items and 4 B items, below both reservations and the hard 100-item page cap. Both page carriers remain draft.

## A-page item arguments and direct dependencies

- **def-tdmath-van-hove-sequence — level 0.** Defines bounded measurable van Hove shapes by fixed-width inner and outer boundary layers of negligible relative volume.
  Direct dependencies: none

- **def-tdmath-superstable-regular-interaction — level 2.** Defines stability, splitting superstability, lower/upper regular tails, free/periodic energy conventions, and normalized versus physical partition normalization.
  Direct dependencies: def-axiom-of-choice, def-borel-sigma-algebra, def-euclidean-inner-product, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-tdmath-poisson-configuration-reference; justified_by: lem-tdmath-integrable-tail-diagonal-gap

- **def-tdmath-periodized-empirical-field — level 3.** Defines the spatially averaged empirical field of a periodized finite configuration and its barycenter.
  Direct dependencies: def-tdmath-superstable-regular-interaction, def-tdmath-poisson-configuration-reference, def-tdmath-local-tame-topology, thm-lebesgue-measure-of-a-box-of-every-kind

- **lem-tdmath-integrable-tail-diagonal-gap — level 3.** Proves decreasing-integrable lattice-shell summability, diagonal gaps with vanishing cross-energy density, cell-envelope summability, and periodic-image convergence.
  Direct dependencies: def-tdmath-superstable-regular-interaction

- **lem-tdmath-superstable-cell-energy-bound — level 3.** Derives the quadratic cell-count lower bound by subdividing unit cells into subcubes and counting repulsive pairs.
  Direct dependencies: def-tdmath-superstable-regular-interaction

- **lem-tdmath-periodized-empirical-field-stationary-density — level 4.** Proves stationarity and the exact particle-number-over-volume intensity of the empirical field.
  Direct dependencies: def-tdmath-periodized-empirical-field, def-tdmath-local-tame-topology, thm-lebesgue-measure-of-a-box-of-every-kind, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-tonelli-theorem-for-sigma-finite-product-spaces

- **lem-tdmath-superquadratic-positive-core — level 4.** Derives superquadratic cell coercivity from a genuine divergent positive core or a hard-core packing capacity; this condition is stronger than superstability.
  Direct dependencies: def-tdmath-superstable-regular-interaction, lem-tdmath-integrable-tail-diagonal-gap

- **thm-tdmath-canonical-interior-density-limit — level 4.** Defines the concave envelope of canonical upper rates and uses slab packing plus exact-particle correction to prove every interior exact-N limit.
  Direct dependencies: def-tdmath-superstable-regular-interaction, lem-tdmath-integrable-tail-diagonal-gap, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-product-measure-on-sigma-finite-spaces, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-lebesgue-measure-of-a-box-of-every-kind, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-real-exponential-function-and-e, thm-exponential-addition-formula, def-factorial-and-falling-factorial, thm-natural-logarithm-laws

- **thm-tdmath-decreasing-integrable-tail-free-cube-pressure — level 4.** Uses stability for the grand particle cutoff, separated core cubes, exact indistinguishable-particle factorization, and diagonal gaps to prove a finite free-cube pressure limit.
  Direct dependencies: def-tdmath-superstable-regular-interaction, lem-tdmath-integrable-tail-diagonal-gap, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-product-measure-on-sigma-finite-spaces, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-lebesgue-measure-of-a-box-of-every-kind, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-real-exponential-function-and-e, thm-exponential-addition-formula, def-factorial-and-falling-factorial, def-nonnegative-extended-series

- **thm-tdmath-canonical-grand-duality — level 5.** Proves grand log-partition/canonical-rate duality, including zero density and finite-endpoint extension, then applies finite-dimensional biconjugation.
  Direct dependencies: def-tdmath-superstable-regular-interaction, thm-tdmath-decreasing-integrable-tail-free-cube-pressure, thm-tdmath-canonical-interior-density-limit, thm-tdmath-finite-dimensional-biconjugation

- **thm-tdmath-superstable-van-hove-pressure — level 5.** Uses Ruelle’s uniform factorial-correlation bound and a Markov cut for the upper bound, then separated-core packing for arbitrary van Hove lower bounds.
  Direct dependencies: def-tdmath-superstable-regular-interaction, def-tdmath-van-hove-sequence, lem-tdmath-superstable-cell-energy-bound, thm-tdmath-decreasing-integrable-tail-free-cube-pressure, thm-tonelli-theorem-for-sigma-finite-product-spaces

- **thm-tdmath-uniform-tempered-exterior-pressure — level 5.** Splits near/far exterior energy, uses positive-core cell coercivity and a uniformly square-tempered class, and squeezes perturbed free pressures.
  Direct dependencies: def-tdmath-superstable-regular-interaction, lem-tdmath-integrable-tail-diagonal-gap, lem-tdmath-superquadratic-positive-core, thm-tdmath-decreasing-integrable-tail-free-cube-pressure, thm-holder-inequality-for-integrals

- **thm-tdmath-continuum-variational-pressure — level 6.** Matches local Poisson/entropy inputs to Georgii’s energy and pressure theorems, proves coercivity and normalization conversion, and states the stationary variational formula.
  Direct dependencies: def-axiom-of-choice, def-ultrafilter-extension-principle, def-dependent-choice, def-hahn-banach-extension-principle-relative, def-tdmath-superstable-regular-interaction, lem-tdmath-superstable-cell-energy-bound, thm-tdmath-decreasing-integrable-tail-free-cube-pressure, def-tdmath-poisson-configuration-reference, thm-tdmath-poisson-reference-count-properties, def-tdmath-finite-region-relative-entropy, lem-tdmath-relative-entropy-variational-and-chain-rules, thm-monotone-convergence-for-the-integral, def-tdmath-local-tame-topology, thm-tdmath-specific-entropy-density, thm-tdmath-local-tame-entropy-compactness, thm-tdmath-spatial-mean-information

- **thm-tdmath-van-hove-fixed-n-limit — level 6.** Combines the arbitrary-shape pressure upper bound with two-density core packing and one exact-N correction core.
  Direct dependencies: def-tdmath-superstable-regular-interaction, def-tdmath-van-hove-sequence, thm-tdmath-canonical-interior-density-limit, thm-tdmath-canonical-grand-duality, thm-tdmath-superstable-van-hove-pressure, lem-tdmath-integrable-tail-diagonal-gap

- **lem-tdmath-canonical-empirical-field-conditioning — level 7.** Uses the grand empirical-field LDP and subexponential exact-N weight to prove concentration near the variational minimizers.
  Direct dependencies: def-tdmath-superstable-regular-interaction, def-tdmath-periodized-empirical-field, lem-tdmath-periodized-empirical-field-stationary-density, thm-tdmath-canonical-interior-density-limit, thm-tdmath-canonical-grand-duality, thm-tdmath-continuum-variational-pressure

- **thm-tdmath-fixed-n-local-ensemble-equivalence — level 8.** Proves free exact-N equivalence for periodized empirical fields using the canonical rate and conditioning lemma.
  Direct dependencies: def-tdmath-superstable-regular-interaction, def-tdmath-periodized-empirical-field, lem-tdmath-periodized-empirical-field-stationary-density, thm-tdmath-canonical-interior-density-limit, thm-tdmath-canonical-grand-duality, thm-tdmath-continuum-variational-pressure, lem-tdmath-canonical-empirical-field-conditioning

- **thm-tdmath-retained-hard-zero-beta-limit — level 7.** Defines the hard-exclusion beta-zero branch and proves its free/periodic pressure rate and compact minimizer set.
  Direct dependencies: def-tdmath-superstable-regular-interaction, lem-tdmath-superstable-cell-energy-bound, thm-tdmath-continuum-variational-pressure, thm-tdmath-local-tame-entropy-compactness, def-tdmath-local-tame-topology, lem-tdmath-relative-entropy-variational-and-chain-rules, thm-tdmath-spatial-mean-information, thm-tdmath-poisson-reference-count-properties, thm-monotone-convergence-for-the-integral

- **thm-tdmath-interval-event-ensemble-limit — level 7.** Proves the density-interval upper-energy exponent and empirical-field conclusion with the source-supported positive multiplier.
  Direct dependencies: thm-tdmath-continuum-variational-pressure, lem-tdmath-closed-convex-separation, thm-tdmath-specific-entropy-density, lem-tdmath-relative-entropy-variational-and-chain-rules, thm-tdmath-local-tame-entropy-compactness, def-tdmath-local-tame-topology, def-tdmath-periodized-empirical-field, lem-tdmath-periodized-empirical-field-stationary-density

- **thm-tdmath-periodic-fixed-n-limit — level 8.** Proves the periodic exact-N rate and empirical-field concentration under a supporting activity.
  Direct dependencies: def-tdmath-superstable-regular-interaction, lem-tdmath-integrable-tail-diagonal-gap, lem-tdmath-superstable-cell-energy-bound, thm-tdmath-canonical-interior-density-limit, thm-tdmath-canonical-grand-duality, thm-tdmath-continuum-variational-pressure, def-tdmath-periodized-empirical-field, lem-tdmath-periodized-empirical-field-stationary-density, lem-tdmath-canonical-empirical-field-conditioning, thm-holder-inequality-for-integrals

- **thm-tdmath-controlled-shell-three-ensemble-equivalence — level 9.** Selects a shrinking shell and transfers exponential empirical-field concentration to its uniform positional law.
  Direct dependencies: def-tdmath-superstable-regular-interaction, thm-tdmath-continuum-variational-pressure, thm-tdmath-fixed-n-local-ensemble-equivalence, thm-tdmath-periodic-fixed-n-limit, def-tdmath-periodized-empirical-field, lem-tdmath-periodized-empirical-field-stationary-density

## B-page examples and direct dependencies

- **ex-tdmath-hard-core-zero-beta — level 8.** Computes the two-particle hard-rod partition and shows the forbidden-pair deficit persists at zero inverse temperature.
  Direct dependencies: def-tdmath-superstable-regular-interaction, thm-tdmath-retained-hard-zero-beta-limit, def-product-measure-on-sigma-finite-spaces, thm-lebesgue-measure-of-a-box-of-every-kind, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-factorial-and-falling-factorial

- **cex-tdmath-bulk-field-pressure — level 0.** Sums the ideal-gas grand series before and after a volume-sized constant external energy; pressure changes exactly.
  Direct dependencies: def-product-measure-on-sigma-finite-spaces, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-factorial-and-falling-factorial, def-real-exponential-function-and-e, thm-exponential-addition-formula

- **ex-tdmath-close-packing-endpoint — level 5.** Computes the one-dimensional hard-rod canonical volume and shows the exact maximum-density endpoint has zero configuration measure.
  Direct dependencies: def-tdmath-superstable-regular-interaction, thm-tdmath-canonical-interior-density-limit, def-product-measure-on-sigma-finite-spaces, thm-lebesgue-measure-of-a-box-of-every-kind, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-factorial-and-falling-factorial, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant

- **ex-tdmath-nonunique-variational-minimizers — level 7.** Proves finite-mixture affinity of the entropy-energy objective and demonstrates that alternating stationary minimizers need not converge.
  Direct dependencies: thm-tdmath-continuum-variational-pressure, thm-tdmath-specific-entropy-density, lem-tdmath-relative-entropy-variational-and-chain-rules, def-tdmath-local-tame-topology

## Dependency order and levels

Assigned item levels were recomputed from the current in-run item graph: level 0, van Hove definition and bulk-field counterexample; level 2, interaction conventions; level 3, periodized empirical-field definition and tail-gap/cell-energy lemmas; level 4, empirical-field stationarity, superquadratic core, free-cube pressure, canonical interior limit; level 5, canonical-grand duality, van Hove pressure and uniform exterior pressure; level 6, continuum variational pressure and van Hove fixed-N limit; level 7, canonical empirical-field conditioning, interval event, retained beta-zero rate, and nonunique-minimizer example; level 8, fixed-N local equivalence, periodic fixed-N, and hard-core beta-zero example; level 9, controlled shell. The input run-level batch-dependency file listed queue level 4, but its current-content check is stale after this manifest edit; recomputation is owner-controlled. Local suppliers are authored before their consumers.

## Cross-batch prerequisites and exact interfaces

The exact MP5 page td-math-convex-contact-and-mixing is required by the plan but its page file and all 11 named A carriers are absent. The full design and prose-scaffold MP5 inventory were checked, along with the relevant L1–L10 interface text in ly-closure-developments.md. The planned scope includes conditional forward-sector hypotheses, closedness/interior, boundary graph and sector nesting, reference-strip gluing, contact/calibrator and arbitrary-family calibration, finite decorated-chain costs, unattained-cost entropy inference, and splitting-cost quotient. The original intended routes carry their stated contact/coherence and material-system hypotheses. No live MP5 carrier exists to compare, so its proof status is absent, not proved. The interval-event item is authored conditionally with the current batch-4 finite-dimensional separation interface; the exact MP5 page-level prerequisite remains open. Proposed placement remains MP5 A, especially its planned thm-tdmath-unattained-cost-entropy-inference / thm-tdmath-conditional-contact-calibrator chain; no supplier was duplicated or weakened.

The other exact page prerequisites are present and inspected. MP6’s regular energy-shell carrier is a phase-space surface measure with regular-level assumptions; the local shell result uses positional configurations and an energy-density window. MP7’s td-math-continuum-pressure carrier is stable power-tempered free-cube pressure; the local theorem proves the broader decreasing-integrable-envelope extension. MP8’s 10-item current manifest has the exact Poisson, finite-region entropy, specific entropy, local-tame, compactness, and spatial-mean interfaces consumed here. All MP8 suppliers remain drafts; their actual statements and proofs were inspected, but the readiness record does not certify or accept them. Batch-4 biconjugation and closed-separation carriers were likewise read at their actual statements and proofs and remain draft inputs. The item/page-level review is in the paired cross-batch dependency file.

## Sources and retrieval record

Four independent full-text treatments are active: Georgii (1994), Georgii–Zessin (1993), Ruelle (1970), and Dereudre’s complete lecture notes. Their exact locators and harvested headings, supported items, and dispositions are in the coverage file. The full 25-, 28-, 33-, and 48-page texts were inspected. Georgii’s definition and Theorem 2 for periodized empirical fields were checked against the local full text; Georgii–Zessin Sections 2.2 and 5.7 provide an independent empirical-field and conditional-law treatment. Ruelle Proposition 2.6 was visually checked in the original page image because its OCR is sensitive. Dereudre’s infinite-volume variational theorem assumes finite range and is explicitly out of scope for the general-tail theorem. The Springer chapter endpoint returned an institution sign-in/cookie redirect; alternative full texts were found and read, so no active mathematical claim depends on that failed candidate. A later web-reader attempt at the Georgii author PDF followed its current-host redirect; the reader could not fetch that mirror, and the ResearchGate preview did not expose full text. The previously fetched, stamped local author PDF remained the verified source and was read in full. source-fetch-check --stamp successfully stamped all four active sources.

## Readiness

All assigned items, both pages, source coverage, contracts, notes, manifest and cross-batch records are authored. The exact required MP5 page is absent; every item readiness record will therefore be escalated with that exact page-level blocker (plus any item-specific proof/interface gap). The beta-zero item establishes the partition-rate and minimizer-set result but does not claim local empirical-field convergence for a general forbidden set; that stronger extension would need its own applicable large-deviation input. Draft supplier status is carried as draft and not treated as proof approval. The cross-batch page edge remains open; no owner override is used.

## Scoped check record

- `manifest-deps`: pass, 24 assigned items, 0 errors. `manifest-integrity`: 128/128 run items present, 0 missing or added.
- `content-policy`: pass, 24 assigned items, 0 errors or warnings. Final `author-check`: pass; precheck, rendercheck, content policy, and strict proof-contract gates all passed.
- `coverage-checklist`: pass, 1 page, 34 harvested results, 0 errors or warnings. `source-fetch-check`: 4/4 active sources verified, 0 drops.
- `proof-contract --strict`: pass, 24/24 entries, 0 errors or warnings. Explicit `proof-layout` on all assigned items: 24 items, 75 numbered steps, 0 defects, run in groups of three. A prior all-at-once renderer input hit an OS `EAGAIN`; the final grouped scoped runs passed.
- Assigned dependency labels were recomputed from the current run item graph: all 24 labels match, with no batch-18 cycles or graph errors. The whole-run item-level checker still reports six mismatches outside batch 18: `def-td-cross-type-reaction-network`, `pthm-td-contact-product-comparison`, `pthm-td-entropy-under-product-comparison`, `pthm-td-universal-mixing-entropy`, `rem-td-entropy-construction-hypotheses`, and `pthm-td-controlled-continuum-thermodynamic-limit`.
- The whole-run `batch-dependency-levels check` reports the run-level dependency file as stale after the manifest edits. That file is owner-controlled engine state and was left unchanged; the input file had batch 18 at queue level 4. Item-level ordering above was recomputed independently from all current run manifests.
- Step 1 records: all 24 assigned items are `escalated`, `owner: false`, with their examined direct item dependencies recorded. The exact required MP5 page remains absent; no item is marked ready and no absent supplier is treated as proved.
