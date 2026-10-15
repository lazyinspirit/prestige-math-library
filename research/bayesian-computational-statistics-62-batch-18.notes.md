# Batch 18 — authoring and dependency notes

Run `bayesian-computational-statistics-62`; pair `dirichlet-normal-mixture-contraction` / `dirichlet-normal-mixture-contraction-examples`; dependency level 4; prerequisites BCS-11 and BCS-17. The item inventory, direct `deps`, and recomputed in-run `dependency_level` values are in [the batch manifest](bayesian-computational-statistics-62-batch-18.pages.json). The A page has 11 items and the B page has 2 examples, within the 100-item page limit.

## Plan comparison

The controlling BCS-15 design in `research/plan-bayesian-computational-statistics-track.md` §BCS-15 and the matching `research/plan-spec.json` rows agree on page IDs, order, title, category, companion and page-level `Requires`. The plan-spec `items: []` fields are empty scaffold inventories, not a conflicting item plan; the design supplies the mathematical inventory and controls. No shared plan or plan-spec file was edited. The current owner-authoring direction supersedes stale task/design details.

The authored theorem retains the design's compactly supported smooth truth, explicit Gaussian-convolution bias premise, bandwidth restrictions, both scale-tail assumptions, and the three-term root-L2 Hellinger rate. It states convergence in sampling probability only, preserves the compact-scale-prior refinement, and makes no generic minimax or almost-sure claim. The interval-mass refinement is retained as a separate escalated item.

## Inventory and dependency levels

In-run suppliers were authored before consumers. Items with only external or published inputs have level zero. The remaining levels are:

| Level | Items |
|---:|---|
| 1 | `lem-dirichlet-normal-mixture-density-well-defined`, `lem-hellinger-ratio-controls-kl-moments` |
| 2 | `lem-iid-posterior-contraction-under-countable-sieves`, `lem-dirichlet-normal-mixture-finite-support-approximation` |
| 3 | `lem-dirichlet-normal-mixture-sieve-entropy` |
| 4 | `lem-dirichlet-normal-mixture-countable-band-entropy-sum` |
| 5 | `lem-dirichlet-process-simplex-small-ball` |
| 6 | `lem-dirichlet-normal-mixture-local-prior-mass` |
| 8 | `lem-dirichlet-normal-mixture-posterior-sieve-tail` |
| 9 | `thm-dirichlet-normal-mixture-posterior-contraction` |
| 10 | `cor-dirichlet-normal-mixture-interval-mass-refinement`, `ex-dirichlet-normal-mixture-compact-scale-hyperprior-and-rate`, `ex-dirichlet-normal-mixture-polynomial-scale-tail-outside-theorem` |

These labels are run-wide: the batch's level is 4, while items include the levels of actual BCS-11/17 suppliers. The principal in-run edges are finite-support approximation from the density lemma; entropy from density plus finite-support approximation; local prior mass from density, approximation, ratio control and the DP simplex bound; countable-band entropy from the scale-band entropy lemma; and the theorem from local prior mass, countable-band entropy, the countable-sieve contraction lemma and the posterior-sieve-tail lemma. The corollary and examples depend on the theorem. Exact full dependency arrays are kept in both item frontmatter and the manifest.

## Cross-batch supplier audit

The BCS-11 denominator lemma `lem-iid-posterior-denominator-lower-bound-from-kl-mass` was read with its complete proof. Its direction is `KL(P0 || Ptheta)` and its local set includes the squared log-likelihood moment under `P0`; the resulting denominator bound is the one used in the countable-sieve and scale-tail arguments. The current Step 1 record is ready. The Hellinger convention is the root-L2 definition, and the imported comparison uses library total variation `sup_A |P(A)-Q(A)|`; both current BCS-11 bodies were inspected.

The BCS-17 DP definition, normalized-gamma construction, posterior update and Pólya-urn predictive proof bodies were inspected. The uses require a finite nonzero base measure on standard-Borel `R`, evaluation-measurable random probabilities, conditional IID latent locations, the update `DP(alpha + sum delta_theta_i)`, and the stated posterior predictive law. Zero-base cells and posterior versions are used only under the suppliers' conventions. The current BCS-17 Step 1 records are ready following the owner resolution in `research/bayesian-computational-statistics-62-owner-dp-final-resolution.json`. That record explicitly describes authoring readiness only and does not certify a proof audit, plan validation or native gate. The batch-18 cross-batch evidence records exact supplier excerpts and hypotheses without claiming independent acceptance.

The countable-sieve lemma also uses the published covering-number definition, which specifies centers from the covered density class. Its exact definition is now declared in the item and the batch manifest; its supplier excerpt is recorded in the cross-batch evidence.

## Source reading and disposition

Three complete full-text treatments were read and inspected:

- Ghosal–van der Vaart (2007), [arXiv PDF](https://arxiv.org/pdf/0708.1885), §§1.1–1.2, Theorem 1 and complete §9 proof, Theorem 5 and proof, Theorem 6, Lemmas 2–4, 10–11 and the relevant KL/log-square argument. The retrieval stamp is 324,934 bytes, 28 pages, SHA-256 prefix `e39d7e9c06dccef4`.
- Ghosal–van der Vaart, *Fundamentals of Nonparametric Bayesian Inference*, [author-hosted PDF](https://diamhomes.ewi.tudelft.nl/~avandervaart/books/bayesianstatistics), Theorem 5.19, Theorem 6.6 and proof, and Lemmas 6.7–6.13. Stamp: 1,584,765 bytes, 181 pages, SHA-256 prefix `a1955a1dabc6bc9d`.
- Ghosal, *The Dirichlet Process, Related Priors and Posterior Asymptotics*, [full chapter PDF](https://people.eecs.berkeley.edu/~jordan/sail/readings/Ghosal09.pdf), §§2.5.2–2.5.3. Stamp: 373,078 bytes, 48 pages, SHA-256 prefix `3bfb6ce91b89c101`.

The 2007 article's Theorem 1, finite-mixture approximation, one-band entropy, DP simplex mass, posterior-tail argument, and KL/log-square conversion are mapped to local items in the coverage file. The article's Lemma 4 smoothing bound is context only: the theorem keeps the explicit convolution-bias premise and does not import an unproved bias conclusion. The inverse-Gamma scale-tail result in the book is context only and is not imported as the BCS-15 theorem.

The cited 2000 Ghosal–Ghosh–van der Vaart paper could not be fetched after five recovery retries: VU returned 403, Project Euclid returned an HTML challenge, IAS and CiteSeer returned 404, NCSU returned HTML, and the web reader also returned 403. The source is marked dropped with the complete attempt/search history in the coverage record. Its general-contraction and denominator claims are not dropped: the countable-sieve contraction and BCS-11 denominator items carry complete local proofs, and the 2007 paper and author-hosted book provide retrieved independent treatments.

## Mathematical scope and unresolved claims

The general rate proof uses the local finite-support approximation and DP simplex event to obtain KL and log-square prior mass, a compact-location Hellinger entropy bound, a countable dyadic scale-band entropy sum, and an explicit countable-stratum testing proof. The large-scale sieve tail is proved by a support-leakage test on a compact interval containing the truth; the DP update and Pólya-urn law control mixing mass outside its enlargement. The design's super-exponential upper scale-tail assumption is retained, although this proof's leakage test does not use it. No conclusion about posterior failure or inconsistency under polynomial or inverse-Gamma tails is asserted.

`cor-dirichlet-normal-mixture-interval-mass-refinement` remains escalated. In the retrieved §9 proof, the claimed removal of the bias logarithm invokes source Lemma 6 to bound `p0/(p0 * phi_sigma)` uniformly. That lemma assumes unimodality and a density bounded below on a central interval; the interval-mass condition in the corollary does not imply either hypothesis. The interval-mass construction alone yields only a polynomial ratio bound, which does not remove logarithmic factors in the present Hellinger-to-KL/log-square argument. The missing supplier is a complete local-prior-mass lemma proving the required `P0`-KL and log-square neighborhood lower bound at radius `sigma_n^2`; the corollary is retained and no weakened claim is substituted.

The compact-scale example checks the rate balance explicitly. The polynomial-tail example verifies only that its prior misses the stated super-exponential upper-tail premise; it makes no posterior inconsistency claim.

## Readiness and scoped evidence

`ready` records indicate complete draft authoring, placement, proof contracts and examined supplier interfaces only; they are not independent approval. The interval-mass corollary is `escalated` for the exact missing local lemma above. Scoped check results are recorded after the final item edits below.

Scoped results after the final item edits:

- `proof-layout`: 13 assigned items, 49 steps, 0 defects.
- `precheck.mts`: all 12 proof-bearing items pass. The corollary is escalated and has no claimed proof, so it is not proof-phase checked.
- Strict proof-contract check: 13 contracts, 81 supplier citations, 49 step entries, 0 errors and 0 warnings. The interval-mass contract records its unresolved gap without fabricating proof steps.
- Focused `depcheck`: 13 items and 2 pages, 0 errors and 0 warnings.
- `coverage-checklist --require-destination`: 1 A page, 21 harvested results, 0 errors and 0 warnings.
- `source-fetch-check --stamp`: 3/4 sources fetch-verified and 4/4 resolved; one inaccessible source remains explicitly dropped after the recorded recovery attempts.
- All 13 assigned item dependency levels match the run-wide graph. The run-wide checker still reports the unrelated stale label `ex-cylinder-gaussian-process-is-not-banach-valued` (stored level 1, computed level 2).
- Batch 18 remains at dependency level 4. The dispatch lists scheduling input `bfbde8e51c4be2f73172a540f51caad25f28aec085815f0d83bb884007749a24`; the batch dependency artifact records input hash `d5afbc58d190a5bd47a64f06af255e64c3a9c76360785bf50274409a59aba610`, while recomputation gives `a8c870a67e74497231a17b89b4095ed001b60ead4d8533f5a5b725e8647a5e79`. The hashes need owner reconciliation after the required new external definition dependency in the manifest. The shared scheduling record was left untouched for the owner to recompute.
- Step 1 records: 12 items are `ready` with examined direct dependencies and authoring evidence; `cor-dirichlet-normal-mixture-interval-mass-refinement` is `escalated` with the unresolved supplier and exact missing local KL/log-square mass bound recorded above.

## Owner complete interval-mass refinement proof

Focused supplier-first repair research/bayesian-computational-statistics-62-owner-mixture-refinement-resolution.md supplies two local lemmas and the complete sharper corollary proof, preserving its Statement byte-for-byte and adding no assumptions. The Gaussian semigroup proves chi-square/KL/log-square bias O(sigma^4) from the original derivative integral; coarse interval mass plus sufficiently fine DP approximation gives the log-free local neighborhood. Actual denominator/sieve/countable-band proof yields both general and compact-scale rates. Root independently checked the3 complete sources and synchronized source-exact contracts/manifests/coverage/levels/placements. Final explicit layout3items17steps0defects and strict scopedcontracts3/3zeroerrors/zero warnings. Authoring readiness only; all independent native reviews/gates retained.
