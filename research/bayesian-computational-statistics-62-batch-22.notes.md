# Batch 22 — Generalized Bayes loss updates and temperature calibration

Run: `bayesian-computational-statistics-62` · batch 22 · owner role beta.
The current run-level scheduling input is
`research/bayesian-computational-statistics-62-batch-dependency-levels.json`,
SHA-256 `4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d`.
It assigns batch 22 level 2 with prerequisite batches 4 and 5. Those batches
are the Bayesian-model/posterior-law page and posterior-propriety page; their
current page and item bodies were inspected before recording supplier context.

## Design comparison

The controlling BCS-19 section of
`research/plan-bayesian-computational-statistics-track.md` requires BCS-01 and
BCS-02, the directional KL definition if its final contract matches, the
probability-measure definition, change of variables for expectation, and
Tonelli for sigma-finite product spaces. The BCS-01 requirement is explicit in
the design but only transitive in `plan-spec.json`; BCS-02 itself requires
BCS-01. The task and plan spec additionally list the published
minimax-lower-bounds page, which the BCS-19 design does not name in its
Requires clause. Following the controlling design, the authored A-page and
manifest require BCS-01 and BCS-02 and do not require the minimax page. The
authored claims preserve the design's limitation that an M-loss is only a
target choice; they prove no minimax inequality or contamination-robustness
claim. This design/plan-spec/task mismatch is recorded for owner reconciliation;
the shared plan spec was not edited.
The minimax page was still inspected for the assigned context; its Fano and
two-point Le Cam results are not imported into any batch-22 proof.

The design lists Tonelli, but none of the local claims integrates over a
product space or asserts a joint-measurability result. The update and sequential
coherence arguments use fixed-fiber integrals, finite sums of losses, and
finite-positive normalizers. No item claims to use Tonelli. The published
`def-kullback-leibler-divergence` interface was inspected: it is directional,
uses `P << Q`, fixes `0 log 0 := 0`, has a finite negative part, and explicitly
assumes AC for its RN representation. The local KL theorem uses precisely
`D(nu || pi)` and `D(nu || q)` and carries AC; the definition's interface
matches the design.

## Dependency and supplier audit

The ten assigned items and their in-run levels are:

- Level 0: `def-generalized-bayes-loss-update-and-temperature`;
  `lem-countable-discrete-space-is-standard-borel`.
- Level 1: `lem-generalized-bayes-loss-update-normalizes-to-a-probability-measure`;
  `ex-loss-update-can-have-infinite-normalizer`.
- Level 2: `thm-generalized-bayes-loss-update-is-the-unique-kl-minimizer`;
  `thm-sequential-generalized-bayes-updates-are-coherent`;
  `cex-temperature-generalized-bayes-credible-set-zero-coverage`;
  `ex-rescaling-loss-changes-effective-temperature`;
  `ex-unit-temperature-likelihood-update`.
- Level 3: `rem-generalized-bayes-temperature-calibration`.

These labels are the longest paths through the current in-run item edges; all
other declared dependencies are external prerequisite context. The item
inventories, declared edges, and labels are mirrored in the batch pages manifest.
The A page contains six items and the B page four, within the 100-item cap.

Actual BCS-01 supplier bodies were read, including the proper-model
prior/kernel definition, the posterior RCD versus data-indexed-kernel
distinction, and the complete existence statements and proofs. Actual BCS-02
supplier bodies were read, including the fixed-fiber evidence definition and
the complete finite-positive-normalizer proposition proof. Both assigned page
prerequisites are present and their current interfaces distinguish a
likelihood update from the loss update. The published minimax page and its Fano
and two-point Le Cam statements/proofs were also inspected for its declared
context role. The exact page-level dispositions are recorded in
`research/bayesian-computational-statistics-62-batch-22.cross-batch-dependencies.json`;
these observations are authoring context, not independent approval.

## Sources

`research/bayesian-computational-statistics-62-batch-22.coverage.json` records
the full-text URLs, locators, supported items, and each result's disposition.
I downloaded and inspected the complete cited PDFs and the relevant arguments:
Bissiri–Holmes–Walker, §§1.1–1.2, §2.3 and §§3.1–3.4; Knoblauch–Jewson–Damoulas,
§2.2, Theorem 1 and its proof; Wainwright–Jordan, §3.6.1, Theorem 2 and
Appendix B.2 (retained only as an exponential-family analogue); Marker, §1,
Example 1.2; and Perrotta, §§1.1–1.3 and §§2.1–2.2. The local KL and finite
example arguments are proved in the carriers; no source citation substitutes
for those proofs. The existing per-item disposition notes remain in coverage.

An earlier `source-fetch-check` fetched and stamped all six sources. The final
`--stamp` rerun confirmed 6/6 fetch-verified sources, with no new stamps or
documented drops. No citation source remains unavailable, so no
`source_resolution` entry was needed.

## Focused authoring corrections

- Corrected the countable-discrete-space proof to use the actual metric
  definition, which deliberately omits nonnegativity as an axiom; the
  constructed zero-one metric is nonnegative directly from its two cases.
- Expanded the loss-rescaling example to prove the manifest's full positive
  temperature and scaling statement for arbitrary positive two-point prior
  masses and every nonconstant two-point loss.
- Defined the posterior-credible-set criterion locally in the coverage
  counterexample and made `exp(0)=1` explicit in its numerical comparison.
- Added the arithmetic/measurability and exponential-addition suppliers to the
  sequential-coherence proof so its cumulative density is measurable and the
  factorization is justified.
- Distinguished the ordinary convergent geometric series from the
  nonnegative extended sum used by the weighted-measure definition in the
  infinite-normalizer prior construction.

## Final scoped checks and blockers

- The assigned manifest and item frontmatter match for all 10 items. A scoped
  dependency-graph recomputation passes with levels: 0 (`def-generalized-bayes-loss-update-and-temperature`, `lem-countable-discrete-space-is-standard-borel`); 1 (`lem-generalized-bayes-loss-update-normalizes-to-a-probability-measure`, `ex-loss-update-can-have-infinite-normalizer`); 2 (the KL minimizer theorem, sequential-coherence theorem, zero-coverage counterexample, rescaling example, and unit-temperature example); and 3 (`rem-generalized-bayes-temperature-calibration`). No cycle or batch-22 label mismatch.
- Scoped `precheck`: pass, 8 proof-bearing items checked and 0 failing; the
  definition and remark need no phase proof.
- `node tools/proof-layout.mjs` on the 10 changed items: pass, 10 items,
  39 steps, 0 defects.
- `node tools/rendercheck.mjs` on the 10 items and 2 pages: pass, 12 files;
  frontmatter parses and every math span renders.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-22.proof-contracts.json --strict`: pass, 10/10 items, 0 errors or warnings. The contracts cover 39 proof steps and 94 exact supplier citations. `citation-fidelity` found no missing quotes or widening candidates.
- Focused `depcheck`, `fwdcheck`, and `extcheck` pass for all 10 assigned
  items; dependency and forward-cycle checks include their prerequisites.
  `content-policy` passes for all 10 with 0 errors and 0 warnings.
- Final source retrieval check: 6/6 sources fetch-verified, 0 documented drops,
  0 newly stamped.
- Ten Step 1 records were written `ready` with examined direct item
  dependencies and the concrete supplier item bodies for their page
  prerequisites. No `--owner` flag was used. These are author readiness
  records, not independent approval.

## Run-wide blockers left with the owner

- The scoped item-level recomputation passes for batch 22. The run-wide
  `item-dependency-levels.mjs check` still fails outside this assignment: 36
  empty inventories on 18 later A/B pairs and 11 existing level mismatches.
  The mismatch IDs are `rem-em-ascent-does-not-imply-global-optimality-or-convergence`, `def-approximate-bayesian-computation`, `alg-abc-rejection`, `thm-abc-zero-tolerance-target-is-summary-posterior-under-density-regularity`, `thm-sufficient-summary-recovers-full-posterior`, `thm-abc-rejection-target-is-tolerance-conditioned-posterior`, `cex-abc-zero-tolerance-limit-fails-without-integrable-envelope`, `ex-abc-finite-sample-sufficient-summary`, `cex-identifiable-model-with-insufficient-abc-summary`, `ex-abc-vanishing-acceptance-rate`, and `ex-gibbs-chain-invariant-but-reducible`. The checker reports no batch-22 mismatch; those pages and items were not edited.
- `batch-dependency-levels.mjs check --run bayesian-computational-statistics-62`
  reports a stale shared artifact. Its recorded input hash is
  `17c13c2fd465e3d10d52824fd8e855172f1554647f2f93bfe89f4af7fffb04c4`;
  read-only recomputation returns
  `797ccefc3a9b32fb3cd324fd7cb1f0046f23e8149ffcee86fa102fcb56821581`.
  The batch-22 row still assigns level 2 with prerequisites 4 and 5. The shared
  run-level file was not rewritten.
- Initial active-run inspection found no workers in flight and a run-wide
  `1-scaffold` handoff blocker: strict YAML parsing reaches out-of-scope
  `items/ex-uniform-endpoint-bootstrap-failure-and-m-out-of-n-remedy.md`, whose
  unquoted title contains a colon (`Nested mappings are not allowed in compact
  mappings`). Its carrier and engine state remain with the owner.
