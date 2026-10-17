# Batch 76 authoring notes

Run: numerical-optimization-dynamics-2026-10-16  
Pair: stable-sde-schemes-for-superlinear-drift / stable-sde-schemes-for-superlinear-drift-examples  
Role: beta; batch level 4; prerequisite batches 9 and 65.

## Controlling plan and differences

The owner authoring direction controls. The complete T14 section in
research/plan-numerical-dynamics-track.md and its plan-spec.json description
agree on the three assigned method families, their stated hypotheses, the
positive CIR root, the no-\(L^p\)-rate warning, and the page prerequisites.
There is no scope conflict between those two controlling design sources.

The actual published item
thm-euler-maruyama-strong-rate-under-higham-mao-stuart-hypotheses was
inspected. Its statement requires uniform moments of every finite order for
the ordinary Euler grid, step, and continuous processes. That premise cannot
be transferred to a superlinear explicit drift, and the assigned cubic example
proves ordinary Euler moments diverge. The source item therefore remains
page-level context and is not a direct dependency of either new strong-rate
theorem. The page-level prerequisite euler-maruyama-convergence is retained
exactly as assigned.

The actual batch-9 lem-stochastic-local-to-global-rms-bound was inspected.
It assumes a drift remainder \(O(h^2)\), centered defect variance \(O(h^3)\),
and concludes mean-square error \(O(h^2)\), an order-one grid RMS estimate.
Those defect orders do not discharge either T14 order-one-half theorem. Both
T14 proofs derive their method-specific local defects and global recurrence
locally. The assigned Milstein page prerequisite is retained; its page edge
and the mismatch are recorded in
research/numerical-optimization-dynamics-2026-10-16-batch-76.cross-batch-dependencies.json
for owner reconciliation. No item proof quotes or imports the mismatched
supplier.

The batch-65 item thm-backward-euler-dissipative-resolvent-contraction was
read in full. Its continuous, globally dissipative hypothesis with \(\mu\ge0\)
matches the autonomous \(C^1\) drift used by the drift-implicit algorithm.
The body is a draft; this inspection verifies the actual interface but does
not claim its independent acceptance.

## Inventory, placement, and dependency levels

The final manifest contains 13 A-page items and 3 B-page examples. Levels were
recomputed from the actual in-run item suppliers, including the batch-65
resolvent supplier:

- Level 0: def-locally-lipschitz-ito-sde-and-maximal-solution,
  lem-brownian-ito-integral-bdg-moment-bound.
- Level 1: alg-cir-lamperti-positive-implicit-scheme,
  alg-tamed-euler-superlinear-drift,
  thm-local-sde-existence-and-uniqueness-until-exit.
- Level 2: lem-cir-lamperti-transform-and-positive-root,
  lem-tamed-euler-uniform-moment-bounds,
  thm-superlinear-sde-global-existence-and-moments.
- Level 3: alg-drift-implicit-euler-sde,
  cex-euler-moments-diverge-for-cubic-dissipative-sde,
  ex-cir-lamperti-scheme-positive-root-at-boundary,
  thm-cir-positive-solution-and-nonattainment,
  thm-tamed-euler-strong-order-half.
- Level 4: ex-noise-induced-instability-in-explicit-em,
  thm-cir-lamperti-scheme-converges-in-probability,
  thm-drift-implicit-euler-sde-strong-order-half.

The manifest dependencies, item frontmatter, and A/B page inventories agree.
No shared plan, scheduler artifact, engine state, verdict, or other pair's
carrier was edited.

## Source reading and resolution

coverage.json records source URLs, locators, harvested results and
dispositions. The Hutzenthaler–Jentzen–Kloeden tamed-method article and
divergence article, Higham–Mao–Stuart, Alfonsi, Dereich–Neuenkirch–Szpruch,
the author-hosted Särkkä–Solin book, the full Hutzenthaler–Jentzen rare-event
monograph, and the relevant Kloeden–Platen textbook theorem were inspected at
the recorded sections. The two CIR treatments agree on the Lamperti equation
and positive quadratic root; their strong-rate conclusions require additional
strict-Feller or inverse-moment hypotheses and are explicitly outside the
local convergence-in-probability claim.

The Kloeden–Platen full-text fetch stamp is reused verbatim from batch 9 for the
same URL; the local 666-page PDF hash prefix matches that stamp. The additional
Hutzenthaler–Jentzen monograph treats an increment-tamed update with a different
denominator; its Corollary 2.21 is recorded out of scope, while the local
drift-tamed moment proof remains complete.

During source verification, the draft CIR reference arxiv.org/pdf/1010.3992
was found to resolve to an unrelated article. It was replaced with the
coauthors' direct CIR preprint at
uni-muenster.de/Stochastik/dereich/Publikationen/Preprints/cir.pdf, whose
full text and cited sections were inspected. This was a citation-identifier
correction; no active source remains dropped or fetch-unverified.

## Scoped checks

- tools/tsx-run.mjs tools/author-check.mts numerical-optimization-dynamics-2026-10-16 76: pass. Precheck, rendercheck, content policy, and strict proof-contract subchecks all pass.
- tools/proof-layout.mjs on all 16 assigned item paths: pass, 16 items, 52 steps, 0 defects.
- tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-76.proof-contracts.json --strict: pass, 16/16 items, 0 errors and 0 warnings.
- tools/coverage-checklist.mjs research/numerical-optimization-dynamics-2026-10-16-batch-76.coverage.json --require-destination: pass, 2 pages, 34 harvested results, 0 errors and 0 warnings.
- tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-76.coverage.json --stamp: pass, 11/11 source records fetch-verified, 0 newly stamped on the final run, 0 drops.
- Step 1 decisions were recorded ready for all 16 assigned items with their exact manifest dependencies and owner:false. The per-item closure check confirms 16/16 current hashes and readiness records. This is authorship evidence, not independent approval.
- tools/item-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16: run-wide failure on 36 other pages with empty scaffold inventories; no batch-76 item-level mismatch appears.
- tools/batch-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16: blocked before batch-row/hash validation by unrelated malformed frontmatter in items/thm-finite-projector-energy-attains-minimum.md:19 (Nested mappings are not allowed in compact mappings, unquoted source title). The shared dependency-level artifact was left untouched.
- Run-wide tools/step1-decisions.mjs check --run numerical-optimization-dynamics-2026-10-16 is likewise blocked by malformed frontmatter in items/lem-finite-projector-domain-compact.md:22. The 16 batch-76 records were checked individually and are current.
- No test suite was run; only the requested scoped authoring checks were run.

## Owner handoff

The item proofs, contracts, source records, page placement, and item-level readiness are complete. The Milstein page-level prerequisite remains an open reconciliation item: its current local-to-global theorem has order-one defect hypotheses, while the T14 rate claims have order-one-half defects and are proved locally. The exact supplier body, hypotheses, affected theorems, and local replacement proofs are recorded in the cross-batch dependency file. The owner must resolve that page edge before claiming pair-level page readiness.
