# Bayesian and Computational Statistics — batch 5 authoring notes

Run: `bayesian-computational-statistics-62`  
Scheduling input read before authoring: `4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d`  
Batch level: 1; in-run prerequisite batch: 4.

## Plan comparison

The controlling BCS-02 design at `research/plan-bayesian-computational-statistics-track.md` L69 and the current `research/plan-spec.json` record agree on page IDs, titles, order (2050/2051), category, companions, and page requirements. No design/spec conflict was found. The plan's item scope is represented by the six local items listed below; the plan-spec page records did not prescribe item IDs.

## Inventory and item levels

The A page has two items; the B page has four examples. The current local dependency graph is acyclic and computes to these levels:

| Item | Page | Level | In-run item dependencies |
|---|---|---:|---|
| `def-posterior-evidence-normalizer-and-fiberwise-update` | A | 1 | `def-bayesian-model-as-prior-and-sampling-kernel` (batch 4) |
| `prop-fiberwise-posterior-propriety-iff-finite-positive-evidence` | A | 2 | A definition |
| `ex-valid-finite-evidence-and-normalized-update` | B | 3 | A definition and proposition |
| `ex-prior-predictive-null-fiber` | B | 3 | A definition and proposition |
| `ex-flat-prior-normal-mean-proper-posterior` | B | 3 | A definition and proposition |
| `ex-improper-beta-zero-zero-endpoint-divergence` | B | 3 | A definition and proposition |

The B examples are on the examples page, not prerequisites for other pairs. The pair occupies six of the 100 available items on its A page.

## Mathematical scope and supplier checks

- The local proposition proves the fixed-fiber criterion for any measure prior. Its argument uses the measure induced by a nonnegative measurable likelihood section and checks both directions by total mass; it uses no choice.
- The proper-prior dominated kernel theorem is already published as `thm-bayes-formula-for-dominated-kernels`; it is not duplicated. I read its complete Statement, Facts, and Proof. It requires a proper prior, a probability sampling kernel, sigma-finite data measure, and a specified jointly measurable normalized density. It supplies the marginal density and uses the prior as a filler on zero or infinite normalizer fibers; those fibers have zero predictive mass. I also inspected its direct suppliers `thm-conditional-density-formula`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `def-measure-kernel-and-probability-kernel`, and `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`.
- The actual `def-dominated-statistical-experiment` body fixes one sigma-finite dominating measure and gives pointwise absolute continuity, but no parameter sigma-algebra or parameter-map measurability. The actual `def-likelihood-density` body selects per-parameter Radon–Nikodym representatives under AC and explicitly makes no joint parameter measurability claim or common exceptional null set. Accordingly, the local fixed-fiber definition assumes a measurable likelihood section, and the proper-prior predictive statement in the A-page summary requires one specified product-measurable density; neither condition is inferred from separate density versions.
- The required published MSF-04 page `dominated-experiments-likelihood-and-sufficiency` and its exact `def-dominated-statistical-experiment` and `def-likelihood-density` interfaces are present. Its joint-measurability warning agrees with the A-page summary; the page's other likelihood-ratio results are not imported.
- The improper Beta example proves sigma-finiteness and infinite endpoint normalizers by explicit dyadic interval lower bounds. The flat normal-mean example now specifies the product Lebesgue data measure, normalizes each sampling section by affine Lebesgue change of variables, and applies Tonelli inductively to the product density. It makes the density-induced measure a probability and verifies its rectangle factorization as the independent product law. It proves the flat prior is sigma-finite and infinite, completes the square, computes the evidence, and identifies the Borel posterior law. AC supplies the declared countable-choice branches; no prior-predictive probability is claimed for the improper prior. The A-page criterion and finite examples remain choice-free.

## Source reading and retrieval

Two independent full-text treatments were read for the A page: Gelman et al., *Bayesian Data Analysis*, 3rd ed., §§1.3 and 2.8; and Johnson, Ott & Dogucu, *Bayes Rules!*, Chapter 2 §§2.1.3–2.1.4 and 2.3.4–2.3.6. The BDA3 PDF's complete relevant pages and the complete online Bayes Rules! Chapter 2 were inspected. Per-item locators, limitations, and included dispositions are in `bayesian-computational-statistics-62-batch-5.coverage.json`.

`node tools/source-fetch-check.mjs --coverage research/bayesian-computational-statistics-62-batch-5.coverage.json --stamp --timeout-sec 90` passed: 4/4 page-source records fetch-verified, 4 newly stamped, zero drops. Both source URLs succeeded on the first fetch for each page record. No retrieval failure or recovery retry occurred, so no failure-resolution record was needed.

## Cross-batch supplier reconciliation

At the first check the assigned batch-4 A-page carrier and inventory were absent, so the page edge was initially recorded open. During this authoring run the actual batch-4 A page, manifest, and all four A-item carriers appeared. I re-read their current bodies and updated the dependency inputs.

The exact BCS-01 supplier `def-bayesian-model-as-prior-and-sampling-kernel` defines a proper model as a probability prior paired with a parameter-measurable sampling probability kernel representing the experiment; it explicitly says an indexed family alone does not supply parameter measurability. The exact `def-bayesian-posterior-as-regular-conditional-law` distinguishes a sample-point-indexed RCD from a data-indexed probability kernel and states that null-data values are not fixed by conditional-law identities. I inspected the two additional A-page results and their full proofs; BCS-02 does not import their standard-Borel existence/factorization conclusions. The BCS-02 dominated route remains the published `thm-bayes-formula-for-dominated-kernels` with its own stated joint-density assumptions.

The local definition now depends on the exact proper-model item, its dependency level is 1, and the page and item edges are `verified` in `bayesian-computational-statistics-62-batch-5.cross-batch-dependencies.json`. The supplier is draft; this is current-body interface verification, not independent acceptance or owner approval. An earlier read during parallel authoring observed input digest `4ed94d6dc549cc068dd4534cb7baf19af51695b688c69a621c2da0b929f58c45`; the later live check and current input comparison are recorded below. The batch-5 row remains level 1 with prerequisite batch 4. The run-level artifact was left to the owner/engine.

## Scoped check record

Final pair-scoped checks:

- Source retrieval: 4/4 source records fetch-verified and resolved, zero drops, zero failures; `source-fetch-check --stamp` needed no new stamps.
- Proof precheck: 5/5 proof-bearing items passed; the definition is not applicable.
- Strict proof contract: 6/6 items passed with zero errors and warnings.
- Renderer: 8 assigned item/page files passed with zero errors and warnings.
- Proof layout: 6 items and 15 steps, zero defects.
- Content policy: 6 items, zero errors and warnings.
- Coverage checklist: 2 pages and 11 harvested source results, zero errors and warnings.
- Focused depcheck: 6 items and 2 pages; the 935-item/264-page prerequisite closure had no item or page cycles, errors, or warnings.
- Recomputed local item levels: all six source/manifest dependency lists match; levels are 1/2/3/3/3/3 with no cycle. The A definition is level 1 from batch 4, its proposition level 2, and the B examples level 3.
- Step 1 readiness: all six assigned records are `ready` and hash-current. The flat-normal item was refreshed after its proof repair. These records mark Step 1 completion, not independent acceptance.

The task's dispatch input was `4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d`. The shared dependency-level artifact currently records input digest `6a0a0300409bf4669d62d57275271ea9746d1d13975731ef529b27d26c1b20f4`; recomputing from the current manifests yields `25610103e49826d08a41d09cab6d162b3383c10719cb6cdaa26a6d40a04fa5dc`. Its batch-5 row remains level 1 with prerequisite batch 4. The final `batch-dependency-levels.mjs check` reports `Stale batch dependency levels ...; recompute before authoring`. The shared artifact is owner/engine-owned and was not edited; all six local item levels and frontmatter dependencies match the current manifests and dependency graph.

A separate run-scoped `proof-contract-coverage` invocation could not validate only this batch: it reported the missing out-of-scope frontier contract `ex-high-entropy-sieve-can-fail-without-precluding-contraction`. The assigned batch's strict proof-contract check passes; that unrelated item was not edited.

