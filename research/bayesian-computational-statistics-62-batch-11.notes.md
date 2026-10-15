# Batch 11 authoring notes — IID posterior contraction by entropy and prior mass

## Inventory and item levels

The assigned inventory is six A items and three B examples. The levels below use only in-run suppliers; the full direct dependency lists are in `bayesian-computational-statistics-62-batch-11.pages.json` and each item's `deps` frontmatter.

| Level | Item | In-run suppliers |
|---:|---|---|
| 0 | `def-hellinger-distance-between-density-laws` | none |
| 0 | `lem-iid-bounded-variance-bernstein-tail` | none |
| 0 | `lem-iid-posterior-denominator-lower-bound-from-kl-mass` | none |
| 1 | `lem-hellinger-distance-controls-l1-and-total-variation` | Hellinger definition |
| 2 | `lem-iid-sieve-entropy-produces-exponential-tests` | Hellinger definition/comparison; Bernstein bound |
| 3 | `thm-iid-posterior-contraction-by-entropy-and-prior-mass` | denominator lemma; sieve-test lemma; Hellinger convention/comparison |
| 4 | `ex-bernoulli-density-logarithmic-contraction-rate` | contraction theorem |
| 4 | `ex-high-entropy-sieve-can-fail-without-precluding-contraction` | contraction theorem; sieve-test lemma |
| 4 | `ex-holder-density-rate-from-entropy-balance` | contraction theorem; sieve-test lemma |

The pair is batch level 3 and has prerequisite batch 10. The six A items are placed in ascending item level. There are 6 A items and 3 B examples, below the 100-item page cap.

## Plan comparison and declared inputs

The BCS-08 design at `research/plan-bayesian-computational-statistics-track.md` and the BCS-08 record in `research/plan-spec.json` agree on page IDs, title, order 2062, category, companion, and the page prerequisite `posterior-consistency-and-tests`. The plan-spec `items: []` is an empty page scaffold, not an item-inventory conflict. No substantive design/plan-spec conflict was found.

The design retains the source's same-metric packing condition, exponential sieve-tail and directional KL/log-square local-mass conditions, and only a P0-probability conclusion. The L1 convention remains full density L1, with its factor-two relation to library event-supremum TV stated explicitly. The bounded-density hypothesis remains attached to the L2-density branch. The proof uses the planned Jensen/Chebyshev denominator, metric tests, sieve-tail control and shell sum. It makes no almost-sure, minimax, or separate annular-testing claim.

The design's `Requires` line also names `thm-lindeberg-levy-iid-central-limit-theorem` and `thm-kolmogorov-iid-l1-strong-law`. Both published supplier statements were inspected: the former requires IID real variables with finite positive variance and gives weak convergence of normalized sums; the latter requires integrable IID real variables and gives an almost-sure sample-mean limit. Neither theorem is invoked by the declared BCS-08 proof route or by any local claim. They are therefore not added as false item-level proof dependencies; BCS-07 remains the page-level prerequisite from the plan-spec. The owner can decide whether those two design-listed inputs are intended as conceptual page prerequisites despite having no logical use here.

## Cross-batch prerequisite audit

`posterior-consistency-and-tests` was inspected at its actual A page and relevant item bodies. Its Hellinger definition uses root-L2 normalization for supplied finite-valued densities against a common sigma-finite dominator. Its comparison result proves invariance, TV <= h, h^2 <= 2 TV for TV = sup_A |P(A)-Q(A)|, and density L1 = 2 TV. Those conventions are recorded in the local supplier facts and matched to the batch-11 proofs. The inspected BCS-07 carriers `def-hellinger-distance-for-dominated-laws`, `thm-hellinger-tv-comparison-under-library-convention`, and `thm-posterior-consistency-under-prior-mass-and-tests` are currently draft and have no Step 1 records; the `verified` cross-batch status records interface inspection only, not supplier acceptance. The Hellinger definition and comparisons are restated and proved locally, and the BCS-07 consistency conclusion itself is not used as a premise; denominator, test, and contraction arguments are local. The comparison theorem passes focused precheck and proof-layout (1 proof item, 7 steps; the definition is not applicable).

Owner notice: `items/thm-posterior-consistency-under-prior-mass-and-tests.md`, step 2.2, derives the amplified-test exponential bounds for block count `ell=floor(n/m) >= 1` but phrases the bounds for every n. The finite initial-n prefix does not affect the stated summability or conclusion. This pair does not edit the upstream carrier, and the qualification is recorded in `bayesian-computational-statistics-62-batch-11.cross-batch-dependencies.json`.

## Source reading and retrieval disposition

The GGV 2000 Project Euclid direct-PDF URL returned short HTML on its initial retrieval and five recovery retries. The official VU repository copy returned 403. Those attempts and four web searches are preserved under `source_resolution` in the coverage record. The `dropped` status applies to that inaccessible copy URL only; none of its mathematical coverage is dropped. The local arguments remain complete. The retrieval alternatives include the author-hosted Kleijn full book manuscript and the Berkeley-hosted Ghosal full chapter, with Tropp's official Caltech full lecture notes for Bernstein.

| Source | Locator inspected | Items/results and disposition |
|---|---|---|
| Ghosal, Ghosh & van der Vaart (2000), “Convergence rates of posterior distributions” — `https://projecteuclid.org/download/pdf_1/euclid.aos/1016218228` | §2, Theorem 2.1 and finite-dimensional logarithmic overhead, pp. 503–505; §7, Theorem 7.1 and proof, pp. 521–523; §8, Lemma 8.1 and proof, pp. 529–530. The cited copy was not retrievable; six failed fetches are recorded. | Theorem 2.1, Theorem 7.1, Lemma 8.1, and the finite-dimensional logarithmic-rate discussion are recorded as included results, with complete local proofs and alternative source treatments; the inaccessible source copy is dropped, not the claims. |
| Kleijn (2025), *Bayesian Statistics for Frequentists* — `https://staff.fnwi.uva.nl/b.j.k.kleijn/bkleijn-book-work-in-progress-Bayesian_Statistics_for_frequentists-Version-1.0-July-2025.pdf` | §§6.4.2–6.4.3, Theorem 6.4.3 and full proof, pp. 179–182; §6.4.5, Lemma 6.4.5 and proof, p. 184. Full 458-page PDF fetched and inspected; stamp preserved. | Theorem 6.4.3 contraction argument is inline context; Lemma 6.4.5 denominator result is included with a full local proof. §6.4.4's entropy-test argument is not imported; tests are proved locally. |
| Ghosal (2010), *The Dirichlet Process, Related Priors and Posterior Asymptotics* — `https://people.eecs.berkeley.edu/~jordan/sail/readings/Ghosal09.pdf` | §2.5.2, “General theory,” pp. 64–66; §2.5.3, “Applications,” pp. 66–67. Full 48-page chapter PDF fetched and inspected; stamp preserved. | General posterior-rate decomposition, Hellinger normalization/comparison, and Hellinger entropy/test context are inline; the Hölder entropy-balance and finite-dimensional logarithmic-rate discussions are included. The monotone-density calculation and source-specific upper-bracket prior construction are deferred and not claimed. |
| Tropp (2023), *Probability in High Dimensions*, Caltech ACM 217 notes — `https://tropp.caltech.edu/notes/Tro21-Probability-High-LN-corr.pdf` | Lecture 4, §§4.4.1–4.4.2, Lemma 4.15 proof and Theorem 4.16, pp. 36–37. Full 184-page PDF fetched and inspected; stamp preserved. | Bernstein exponential-moment and tail results are included, with the complete direct proof in the local lemma. |

The A page has three retrieved independent full-text treatments (a book manuscript, a book chapter, and full lecture notes); source statements and proofs do not replace the local arguments. The high-entropy Bernoulli point-prior example is an original local counterexample, not attributed to a source. The Hölder example is explicitly conditional on its entropy and local-mass premises; it does not assert a generic prior-concentration theorem or minimax optimality.

## Readiness and checks

The batch-11-only dependency-level calculation passes for all nine items, with both item frontmatter and manifest labels matching computed levels 0, 1, 2, 3, and 4. The focused `depcheck` passes for all nine selected items, both pages, 668 transitive prerequisite items, and 275 prerequisite pages, with zero errors or warnings. The strict proof-contract check passes 9/9; scoped precheck passes 8/8 proof-bearing items (the Hellinger definition is not applicable); explicit-item proof-layout passes 9 items and 38 steps with zero defects. Source retrieval check resolves 4/4 records: three full-text fetch stamps and the documented unavailable GGV copy URL.

The whole-run `item-dependency-levels.mjs check` still fails on empty inventories and stale labels in other batches, including `misspecified-posterior-consistency`, `mcmc-clt-and-monte-carlo-standard-error`, and `def-approximate-bayesian-computation`; none of the nine batch-11 items is reported. `batch-dependency-levels.mjs check` reports the shared batch-level artifact stale after the assigned manifest was synchronized. The artifact is owner-managed and was not rewritten; the owner should recompute it after the other batch manifests settle. These cross-run scheduling failures do not change the passing batch-11 item levels or the verified BCS-07 interface.

All direct item suppliers are declared in frontmatter, and the focused dependency audit found no missing supplier, cycle, or unresolved link. The external transitive closure of those item dependencies is published; local in-run suppliers are batch-11 drafts at the levels above. The BCS-07 page-level interface carriers listed in the cross-batch audit remain draft and have no Step 1 records; their current bodies were inspected, the relevant Hellinger conventions are independently proved here, and the BCS-07 consistency conclusion is not imported. Nine per-item Step 1 records are `ready` and include the examined direct dependencies plus the inspected BCS-07 supplier item IDs. These are authoring-readiness records, not independent mathematical approval. The upstream BCS-07 finite-prefix note remains separate and does not enter a batch-11 proof step.
