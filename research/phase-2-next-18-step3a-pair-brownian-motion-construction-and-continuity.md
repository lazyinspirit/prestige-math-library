# Step 3a scope review — Brownian motion construction and continuity

Run: `phase-2-next-18`  
A page: `brownian-motion-construction-and-continuity`  
B page: `brownian-motion-construction-and-continuity-examples`

## Decision

**Sufficient.** The planned pair adequately covers its intended subject and needs no enrichment or merger.

## Evidence

- The current batch manifest contains exactly the PT-18 prose inventory: all 20 A-page items and all 8 B-page items from `research/plan-probability-track.md:1874`. The A page builds the Gaussian-process and covariance preliminaries, consistent finite-dimensional Brownian laws, Kolmogorov extension, the one-parameter continuity criterion and Brownian moment estimate, existence of a continuous Brownian version, local Holder regularity below one half, continuous path space and Wiener measure, scaling and time inversion, and the multidimensional extension. The B page supplies all eight designed computations, examples, and modification/continuity counterexamples.
- The hard scope boundaries in the prose are represented rather than elided: finite-dimensional existence is separated from continuity; the path-space metric, Polish property, Borel sigma-algebra, and Wiener uniqueness are explicit items; continuity at zero in time inversion is explicitly required; and the examples distinguish a modification from indistinguishability.
- The coverage entry records three complete, fetch-verified Brownian treatments: Durrett, *Probability: Theory and Examples*, Section 7.1, printed pp. 353–359; Sousi, *Advanced Probability*, Sections 6.1–6.3, printed pp. 51–54; and Yoshida, *Probability Theory*, Sections 6.1–6.3. Its 18 source-result dispositions comprise 14 included results, one inline result, one reasoned out-of-scope path-irregularity result, and two Brownian Markov/strong Markov deferrals to the existing later page `brownian-motion-markov-properties-and-hitting-times`. The coverage ledger does not separately harvest the design's broader Pitman/van der Vaart bibliography, although the manifest cites van der Vaart on the continuous-path-space items; this is not a subject-scope omission because the full prose-prescribed path-space/Wiener block is present in items 12–16.
- The library role is coherent with the adjacent plan. PT-19 owns filtrations, Brownian Markov and strong Markov properties, reflection, and hitting laws; PT-20 owns sharp Holder failure, nowhere differentiability, variation, zeros, and the LIL; PT-21 begins stochastic integration. Donsker's theorem and general Gaussian-process theory are separately deferred in the track-wide scope. Moving any of those subjects into PT-18 would blur an already explicit and adequate construction/continuity boundary.
- The current plan object agrees on ids, titles, category, companion relation, order, and page prerequisites. Batch notes report all direct prerequisites inspected and published, with no Brownian cross-batch item dependency; the derived cross-batch records contain no edge for this pair. All 28 current Step-1 item receipts for the pair are `ready`. No Step-3a owner receipt exists for this A page.

## Checks

- `manifest-deps` on batch 2: 55 items, 0 errors.
- `content-policy --manifest-only` on batch 2: 55 items, 0 errors or warnings.
- `coverage-checklist --require-destination` on batch 2: 2 A pages, 34 harvested results, 0 errors or warnings.
- `source-fetch-check` on batch 2: 6/6 sources fetch-verified and resolved; the Brownian entry accounts for three of them.
- `validate-plan research/plan-spec.json`: success; declared order is acyclic and consistent.

This is a scope determination only. It does not approve individual proofs or replace the Step 3b mathematical audit.
