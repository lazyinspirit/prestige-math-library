# Batch 27 authoring notes — Measurement error and misclassification

## Controlling plan and scope reconciliation

- Read the run owner direction, the complete SME-27 design at
  research/plan-statistical-models-experiments-track.md L215–217, the generated
  batch task, dependency-order task, batch manifest, and the models-03 prior
  dossier/audit evidence.
- The current design row and research/plan-spec.json agree on the A/B IDs,
  titles, category, orders 1970/1971, companion links, four A-page
  requirements, and B-page requirement. There is no current plan/spec
  metadata conflict.
- The prior models-03 dossier proposed general linear error, outcome error,
  and broader correction material. The controlling plan narrows the authored
  claims to classical and Berkson additive models, categorical
  misclassification, a single-predictor classical slope, a Berkson slope only
  under distinct stated assumptions, and nonidentifiability of the latent/error
  variance split. The broader outcome-error, general-linear-error, and
  correction-theorem claims are therefore not carried into this pair. The
  dossier's Berkson theorem is retained with its separate assumptions.
- Page-level prerequisites remain exactly as planned. The actual logical
  suppliers are narrower: statistical-model/identifiability definitions
  supply the nonidentifiability formalization; probability and covariance
  results supply the slope and finite constructions; the conditional-
  independence definition on the Markov-kernels page supplies the named
  nondifferential convention. No error-likelihood claim is made, so no
  dominated-likelihood item is a logical supplier; MSF-04 remains conditional
  context rather than an invented dependency.

## Item inventory, dependencies, and levels

All IDs below were selected before item carriers were authored. Levels count
only suppliers owned within this run; all listed external item suppliers are
published.

| Item | Page / kind | Level | Direct dependencies |
|---|---|---:|---|
| def-measurement-error-models | A / definition | 0 | def-random-element-and-real-random-variable, def-moments-variance-and-covariance, def-independent-random-elements |
| def-nondifferential-measurement-error-relative-to-named-variables | A / definition | 1 | def-measurement-error-models, def-conditional-independence-given-a-sigma-algebra, def-axiom-of-choice |
| thm-classical-error-attenuation-in-simple-linear-regression | A / theorem | 1 | def-measurement-error-models, def-moments-variance-and-covariance, thm-covariance-bilinearity-and-symmetry, def-independent-random-elements, thm-expectation-of-products-of-independent-random-variables, cor-cauchy-schwarz-for-random-variables, thm-normal-equations-for-best-affine-l2-prediction |
| thm-berkson-error-slope-in-simple-linear-model | A / theorem | 1 | Same probability, covariance, independence, integrability, and normal-equation suppliers as the classical theorem; Berkson direction is supplied by def-measurement-error-models. |
| prop-observed-law-does-not-identify-latent-error-variance-split | A / proposition | 1 | def-measurement-error-models, def-moments-variance-and-covariance, def-independent-random-elements, thm-expectation-of-products-of-independent-random-variables, thm-covariance-bilinearity-and-symmetry, def-parametric-statistical-model, def-estimand-on-a-statistical-model, def-identifiability-of-an-estimand |
| ex-classical-berkson-differential-error-and-validation | B / example | 2 | The A-page model definitions, both slope theorems, variance-split proposition, probability/covariance suppliers, def-conditional-independence-given-a-sigma-algebra, and def-axiom-of-choice. |

The item levels recomputed on the assigned manifest are 0, 1, 1, 1, 1, and 2
in the order above. No in-run batch supplier is used, so batch 27 remains
dependency level 0 with no prerequisite batches. The owned
research/statistical-models-experiments-62-batch-27.cross-batch-dependencies.json
is empty; its logical suppliers are published context or same-pair A-page
items.

## Supplier and hypothesis checks

- Read the current statements of def-random-element-and-real-random-variable,
  def-independent-random-elements, def-moments-variance-and-covariance,
  thm-covariance-bilinearity-and-symmetry,
  thm-expectation-of-products-of-independent-random-variables, and
  cor-cauchy-schwarz-for-random-variables, and
  thm-normal-equations-for-best-affine-l2-prediction. Read the latter
  suppliers' complete proof sections where proof-bearing. Cauchy-Schwarz with
  the constant-one random variable makes each square-integrable variable
  integrable. The uses require square integrability, integrable products,
  independent sigma-algebras,
  covariance bilinearity, and a positive one-predictor variance for unique
  regression coefficients; each condition is stated at its consumer.
- Read the current definitions of def-statistical-experiment,
  def-parametric-statistical-model, def-observational-equivalence,
  def-estimand-on-a-statistical-model, and
  def-identifiability-of-an-estimand. The variance-split item uses the
  identifiable-estimand implication only: two equal observed laws have
  distinct target pairs.
- Read def-conditional-independence-given-a-sigma-algebra. It explicitly
  assumes AC to define conditional independence through conditional-
  expectation classes. AC is declared in the nondifferential definition and
  carried to the B example that invokes that general definition. The classical
  slope, Berkson slope, and variance-split proofs remain choice-free.
- The classical slope proof uses the design's centered variables,
  U independent of (X, epsilon), epsilon independent of X, finite second
  moments, and positive variance sum. The Berkson theorem separately assumes
  U independent of W and epsilon independent of W with positive Var(W); no
  independence between U and epsilon is needed. Neither theorem claims a
  multivariable or nonlinear result.
- The variance-split proposition uses two finite parameter points with
  independent centered error and identical W pointwise, then checks
  distinct target pairs. The B validation comparison shows only that these
  two candidate joint laws differ when X is observed; it is not a general
  validation or correction theorem.

## Source reading and retrieval

- Hernán and Robins, Causal Inference: What If, author-hosted updated PDF:
  <https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf>, Chapter 9,
  §§9.1–9.6, Technical Point 9.1, and Fine Point 9.1, printed pp. 125–135.
  The complete cited chapter was downloaded and read. It supports the
  measurement/error distinctions and the warning that measurement bias need
  not have a universal direction.
- Keogh et al., STRATOS guidance, complete PMC article:
  <https://pmc.ncbi.nlm.nih.gov/articles/PMC7450672/>, §§1–2.2, 3.1.1,
  3.2.1–3.2.4, and 4.1–4.3.5. These sections were read in the complete
  author-manuscript HTML. They supply the classical and Berkson model
  conventions, single-predictor slope comparisons, categorical mechanisms,
  limits of generic attenuation claims, and validation/calibration/replicate
  cautions.
- The web open endpoint returned an access-check page for PMC and the direct
  PDF endpoint was not readable through that interface. A title search located
  the public PMC full text and author-hosted book PDF; direct curl downloads
  then succeeded. source-fetch-check --stamp verified and stamped both
  complete source URLs. No source is dropped or owner-escalated, so no
  source_resolution failure record was created. All harvested headings and
  their dispositions are recorded in the batch coverage file.
- Coverage check result: 1 A page, 41 harvested source headings, 0 errors,
  1 low-yield advisory (5/41 marked included). The remainder are explicitly
  inline or out of scope because the current plan excludes causal-DAG
  adjustment, multivariable/nonlinear regression, outcome error, and
  exposure-specific validation studies. This is not an omission of a planned
  claim.

## Readiness and check record

The strict proof contract covers all four proof-bearing items; the two
definitions have no proof section. The B example carries the registered
symmetric-rademacher-covariance finite check.

Scoped final checks:

- source-fetch-check with stamp: pass, 2/2 URLs verified, 0 newly stamped on
  the final run, 0 dropped sources.
- precheck: pass on all four proof-bearing items; the two definitions are
  not-applicable.
- proof-layout: pass, 6 changed items, 19 numbered steps, 0 defects.
- rendercheck: pass, all 6 items and 2 pages, 0 errors or warnings.
- proof-contract strict: pass, 4/4 proof-bearing items, 0 errors or warnings.
- finite-smoke: pass for the example's registered Rademacher covariance check.
- content-policy: pass, 6 items, 0 errors or warnings.
- depcheck: pass on the six-item selection and both pages; 0 errors or
  warnings. fwdcheck and extcheck also pass on the selected items.
- coverage-checklist: 1 A page, 41 harvested headings, 0 errors, and the
  single 5/41 low-yield advisory described above.
- Scoped dependency recomputation: pass for all 6 item labels and frontmatter
  mirrors (levels 0, 1, 1, 1, 1, 2); the pure batch graph for batch 27 is
  level 0 with no required batches.
- All six batch-27 items have current ready Step-1 records with their
  examined direct dependencies and reason. No assigned item is escalated.

Run-wide checks still have blockers outside this assignment:

- item-dependency-levels.mjs check --run statistical-models-experiments-62
  exits 1 on 64 empty inventories from other batches. The current run-wide
  pass reports no item-level mismatches; the scoped batch-27 calculation is
  clean. No other batch was edited.
- batch-dependency-levels.mjs check --run statistical-models-experiments-62
  exits 1 because the shared
  research/statistical-models-experiments-62-batch-dependency-levels.json
  artifact is stale after the current manifests changed.
  The recomputed batch-27 graph itself is level 0 with no required batches.
  The shared scheduling artifact remains for its owner to regenerate.
- step1-decisions.mjs check --run statistical-models-experiments-62 exits 1
  because the run still has unrecorded work in other batches: 217 current
  items, 75 ready, 206 outstanding work rows. The six assigned items are
  closed and do not appear in the outstanding set.

No unresolved mathematical supplier or source retrieval issue remains inside
batch 27. The run-wide blockers above were recorded without changing other
items, shared planning artifacts, the unified dependency ledger, or engine
state.
