# Batch 4 authoring notes — `bayesian-computational-statistics-62`

## Scope and plan reconciliation

The controlling track design at `research/plan-bayesian-computational-statistics-track.md` §BCS-01 and `plan-spec.json` agree with the assigned A/B page IDs, titles, category, order, and declared page prerequisites. The plan-spec scaffold rows had empty item arrays; the completed inventory is now in the batch-4 manifest. The older `research/statistics-advanced-scaffolds-2026-10-11/bayesian-01/dossier.md` calls BCS-01 “posterior propriety and normalizers” and proposes a different slug. That is a stale scope conflict: the current owner direction and track plan put Bayesian models, posterior RCDs, and data-indexed posterior kernels in BCS-01; fixed-data propriety and dominated Bayes formula remain BCS-02.

The disk-recomputed autopilot status at `2026-10-15T03:39:10Z` was `running` at `1-scaffold`, with `0/62` batch results and no worker in flight. The assigned task and dependency-order task both set batch 4 to level 0 with no prerequisite batches.

## Inventory and dependency levels

The pair is batch dependency level 0 with no prerequisite batches. Item levels below count only logical suppliers inside this batch; exact external supplier dependencies are recorded in each manifest item and carrier.

| Item | Home | In-batch suppliers | Item level |
|---|---|---|---:|
| `def-bayesian-model-as-prior-and-sampling-kernel` | A | — | 0 |
| `def-bayesian-posterior-as-regular-conditional-law` | A | `def-bayesian-model-as-prior-and-sampling-kernel` | 1 |
| `cor-posterior-r-c-d-exists-for-standard-borel-parameter` | A | model definition; posterior definition | 2 |
| `thm-standard-borel-bayesian-posterior-kernel-exists` | A | model definition; posterior definition; RCD-existence corollary | 3 |
| `ex-finite-bayesian-posterior-and-null-version` | B | model definition; posterior definition | 2 |
| `ex-omega-indexed-bayesian-posterior-r-c-d` | B | model definition; posterior definition | 2 |
| `ex-dominated-posterior-on-nonstandard-observation-space` | B | model definition; posterior definition | 2 |
| `ex-standard-borel-posterior-kernel-on-countable-data` | B | model definition; posterior definition; standard-Borel kernel theorem | 4 |

There are no unresolved in-run suppliers for this pair. The exact requested MSF-01 interfaces `def-statistical-experiment`, `def-parametric-statistical-model`, and `def-parameter-measurable-statistical-model-as-markov-kernel` are published at their requested IDs and homes. The parameter-measurable kernel body explicitly supplies eventwise parameter measurability; the generic experiment and parametric-model definitions do not. I also inspected the published proof of `lem-prior-and-model-kernel-define-joint-law`, which constructs the joint law without AC; the standard-Borel RCD existence and factorization proofs; the standard-Borel disintegration statement for uniqueness; and the dominated Bayes-kernel theorem. No source excerpt or supplier completion is inferred from title-only planning metadata.

## Mathematical and axiom boundaries

- The proper Bayesian model uses a probability prior and a parameter-measurable sampling probability kernel. The indexed family alone does not license mixing.
- A posterior RCD is sample-point-indexed. A data-indexed posterior kernel is a separate factorization and is asserted under the exact standard-Borel and AC hypotheses; its uniqueness is only outside one prior-predictive null set.
- The dominated-density example uses a different route. Its specified joint density is measurable on a nonstandard-Borel data space; the published theorem normalizes only finite-positive evidence and uses the prior as the zero/infinite-evidence filler. The example includes a zero-evidence atom and verifies that it has prior-predictive mass zero.
- AC is explicit in the standard-Borel RCD existence and factorization branch. The kernel-product supplier and dominated-density theorem are choice-free; the finite and nonstandard-space examples introduce no AC assumption.

## Source reading and coverage

Two independent applied treatments were read for the A page:

- Gelman et al., *Bayesian Data Analysis*, 3rd ed., Chapter 1 §§1.1–1.3, printed pp. 3–8 (author-hosted PDF pp. 13–18). The complete six-page PDF text was inspected. `source-fetch-check --stamp` verified the 677-page PDF: 55,911,785 bytes, SHA-256 prefix `246f7d34daad4971`.
- Johnson, Ott & Dogucu, *Bayes Rules!*, Chapter 2 §§2.1.1–2.1.4 and §§2.3.1–2.3.6. The selected sections were inspected in the complete official chapter HTML. `source-fetch-check --stamp` verified 215,935 bytes and 82,424 extracted text characters, SHA-256 prefix `c88413237037e1fe`.

The batch coverage record includes exact URLs and locators, all 27 harvested headings/results and their dispositions, three canonical local claims, and no source drops. The textbooks support the prior/likelihood/posterior framing and examples; the formal kernel, RCD, disintegration, and dominated-density arguments are supplied and proved by the linked local items. The citations do not substitute for those proofs.

## Scoped checks

- `batch-dependency-levels.mjs write` then `check`: pass; batch 4 remains level 0 with `requires: []`. The regenerated run input has SHA-256 `5acda2bbee8473365c4b5ba1e7b85b1f6023891ea91d22918fe6328c8a57eda8` (62 batches, maximum level 5).
- A later run-wide `batch-dependency-levels.mjs check` now stops while parsing `items/ex-uniform-endpoint-bootstrap-failure-and-m-out-of-n-remedy.md`, owned by batch 52: its unquoted title contains a colon (`title: Uniform endpoint: ...`). This carrier is outside batch 4 and was not edited. The scoped batch-4 item-level computation still passes; the next run-wide dependency refresh needs that other carrier's owner to resolve the YAML input first.
- Scoped item dependency calculation from `tools/item-dependency-levels.mjs`: 8 assigned items pass; levels match the manifest and frontmatter; manifest `deps` match all item `deps`; no cycle.
- `manifest-deps.mjs`: 8 items, all explicit dependency arrays.
- `proof-contract.mjs --strict`: 8/8 contracts pass.
- `precheck.mts`: 8 files, 6 proof-bearing items checked, 0 failures; the two definitions are not applicable.
- `proof-layout.mjs`: 8 items, 19 steps, 0 defects.
- `rendercheck.mjs`: 10 item/page files checked, 0 errors, 0 warnings.
- Focused `depcheck.mjs`: 8 selected items; prerequisite closure checks pass with 0 errors and 0 warnings.
- `content-policy.mjs`: 8 items, 0 errors, 0 warnings.
- `coverage-checklist.mjs --require-destination`: 1 A page, 27 harvested entries, 0 errors, 0 warnings.
- `source-fetch-check.mjs` check mode: 2/2 source URLs remain fetch-verified.
- `step1-decisions.mjs record`: all 8 assigned items recorded `ready` with `owner: false`, their examined direct dependencies, and current item-input hashes.

The final run-wide `batch-dependency-levels.mjs check` attempt was blocked while strict YAML parsing reached the batch-52 carrier `items/ex-uniform-endpoint-bootstrap-failure-and-m-out-of-n-remedy.md`, whose unquoted `title` contains a colon. The batch-4 row remains level 0 with no prerequisites, and the scoped item-level check passes. This unrelated carrier was left untouched. The Step-1 decisions record authorship readiness only; they are not independent mathematical approval.
