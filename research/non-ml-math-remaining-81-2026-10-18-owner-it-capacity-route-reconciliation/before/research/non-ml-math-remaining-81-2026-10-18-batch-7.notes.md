# Batch 7 authoring notes

Run `non-ml-math-remaining-81-2026-10-18`; batch 7 is dependency level 2,
requires batch 5, and was dispatched with scheduling input
`7096b1bbc6f2d70796b6d63080bb4b0fc6e781f6a5e4da539963fbb746842903`.

## Plan and design reconciliation

- No pair-specific design section was found; the assignment says “design: none
  found.” No design section governed this pair.
- The pair’s `research/plan-spec.json` scope and the global Information Theory
  track’s IT16 scope agree: define finite f- and Rényi divergences with support
  conventions, prove data processing and the KL limit, and relate KL to an
  explicitly oriented testing function. The B scope also agrees on binary
  divergence values, likelihood-ratio thresholding, and singular-support
  examples. No plan/design conflict was found.
- The resulting pages are draft scaffolds. A contains 16 items, below the
  100-item cap; B contains three worked examples.

## Inventory and dependency levels

The levels below were recomputed from this pair’s item dependencies. External
published suppliers do not increase an in-run level. The graph is acyclic.

- Level 0, A: `def-finite-probability-vector`,
  `lem-convex-generator-boundary-limits-exist`,
  `lem-finite-kl-generator-is-admissible`, and
  `lem-finite-renyi-generators-are-convex`.
- Level 1, A: `def-finite-f-divergence`,
  `def-finite-hypothesis-testing-beta`, and `def-finite-stochastic-kernel`.
- Level 2, A: `def-finite-kullback-leibler-divergence` and
  `lem-convex-perspective-is-subadditive`; B:
  `ex-binary-neyman-pearson-randomized-threshold`.
- Level 3, A: `def-finite-renyi-divergence`,
  `lem-finite-iid-log-likelihood-concentrates`, and
  `thm-finite-f-divergence-data-processing`.
- Level 4, A: `thm-finite-kullback-leibler-data-processing`,
  `thm-finite-renyi-data-processing`,
  `thm-finite-renyi-limit-is-kullback-leibler`, and
  `thm-kl-is-iid-type-ii-error-exponent`; B:
  `ex-binary-f-and-renyi-divergences` and
  `ex-disjoint-support-f-and-renyi-divergences`.

## Conventions and mathematical scope

- The claims are finite-alphabet statements. Probability vectors retain zero
  coordinates on the displayed alphabet; kernels are row-stochastic, with
  input first in the row and output first in `K(y|x)`. All logarithms are
  natural.
- A finite f-generator is convex on `(0,∞)` with `f(1)=0`. The new local
  boundary lemma proves continuity at positive arguments and existence of both
  extended limits `f(0)` and `f_infty`, excluding `−∞`. The perspective lemma
  then covers zero denominator, zero numerator, and singular terms before the
  finite channel contraction proof uses it.
- Rényi orders are `alpha>0`; order one is defined as KL, and the formula is
  used for `alpha != 1`. The proof covers both `0<alpha<1` and `alpha>1`,
  including affinity zero and support mismatch.
- Testing is oriented with `P` as the null and `Q` as the alternative. A test
  value `phi=1` means reject; `beta_epsilon(P,Q)` constrains rejection under P
  and minimizes acceptance under Q. The local iid theorem proves the exact
  type-II exponent `D(P||Q)` for fixed `epsilon in (0,1)`.
- The finite arguments use finite sums and scalar convexity only. They make no
  choice-dependent selections and import no AC branch. The published
  finite-sample testing page’s broader Neyman–Pearson theorem has a dominated
  measure/AC hypothesis; no batch-7 proof uses that theorem. The binary
  threshold example verifies optimality directly by cases.

## Supplier verification and open page requirement

- The actual published `finite-sample-tests-neyman-pearson-and-valid-p-values`
  page and its `def-randomized-test`, `def-test-size-and-power`, and full
  `thm-neyman-pearson-lemma` bodies were inspected. The local orientation
  matches the definitions. The broader theorem’s AC/dominated-measure branch
  was checked and is not imported.
- The actual local suppliers used by the finite proofs were inspected,
  including the convexity/Jensen, logarithm, real-power, exponential,
  expectation, and calculus statements. Their cited hypotheses and boundary
  conventions are recorded in the exact supplier excerpts in the proof
  contracts. The finite-expectation supplier’s transitive definitions of a
  finite law, finite-range random variable, and finite sum were also inspected;
  the local testing items identify the probability-vector coordinates as the
  finite outcome weights before using its weighted-sum formula.
- The other required page, `measure-theoretic-information-and-conditioning`,
  is assigned to batch 5, but its current batch manifest has `items: []` and
  no authored page body. Therefore no supplier item IDs or hypotheses can be
  honestly quoted or verified. The declared A-page route remains open in
  `non-ml-math-remaining-81-2026-10-18-batch-7.cross-batch-dependencies.json`.
  The finite local claims were still completed; this missing page-level
  prerequisite is the reason every item’s Step 1 decision is `escalated` for
  reconciliation, not a claim that a supplier proof or acceptance exists.

## Sources and coverage

Four complete full-text PDFs were inspected: Polyanskiy–Wu,
*Information Theory: From Coding to Learning* (Chapter 7 §§7.1–7.2 and §7.12;
Chapter 14 §§14.1–14.5); van Erven–Harremoës, *Rényi Divergence and
Kullback-Leibler Divergence* (§II-A Definition 2, §II-C Theorem 5 and proof,
§III-A Theorem 9 and proof); Sason–Verdú, *f-Divergence Inequalities*
(§II-B Definition 3, equations (30)–(37), and relative-entropy examples
(41)–(45)); and Deligiannidis, *Foundations of Statistical Inference*
(Chapter 13 §13.1.1, randomized tests and Definition 13.1). Locators,
supported items, every harvested result and its disposition, and inspection
extents are in the coverage file. Each fetched source passed
`source-fetch-check --stamp` (4/4; one newly stamped in the final pass); a
later check-only run also passed 4/4. No retrieval failed, so no recovery
retry or source-resolution entry was needed. No harvested proof is substituted
for a local argument.

## Scoped checks and blockers

- `proof-contract.mjs ... --strict --json`: pass, 19/19 items, 64 exact
  supplier citations, 41 numbered-step derivations, no errors or warnings.
- `coverage-checklist.mjs ... --require-destination --json`: pass, one page,
  15 harvested results, no errors or warnings.
- `proof-layout.mjs` on all 19 changed item files: pass, 41 steps, zero
  defects.
- Scoped `dependencyLevels` on this batch’s manifest: pass, 19 items, with the
  levels listed above. The required whole-run
  `item-dependency-levels.mjs check --run ...` does not pass because unrelated
  run manifests contain many empty scaffolds and stale levels. It also reports
  duplicate ownership of `lem-it-quantum-relative-entropy-support-regularization`,
  `lem-it-quantum-relative-entropy-isometric-invariance`, and
  `thm-it-holevo-measurement-bound`; none is in batch 7.
- The live whole-run `step1-decisions.mjs record` loader also stops on the
  unrelated duplicate `lem-it-quantum-relative-entropy-support-regularization`.
  The CLI records for the 19 assigned items were therefore generated and
  checked in an isolated view containing this assigned A/B manifest, the
  current plan, and the repository’s actual item bodies; the resulting hashes
  bind each item’s actual direct and transitive item suppliers. All 19 records
  are `escalated` because the required batch-5 page route remains open. No
  `--owner` override was used.

These records document drafting and escalation only. They are not independent
approval or publication.
