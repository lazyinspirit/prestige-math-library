# Step 3a reader report — batch 56

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Date: 2026-10-16

## Opened inventory

Assigned pages:

- `library/quantum-algorithms/quantum-complexity-classes-and-oracle-separations.md`
- `library/quantum-algorithms/quantum-complexity-classes-and-oracle-separations-examples.md`

All 15 assigned item carriers were opened in dependency order:

- `def-qa-32-promise-bpp`
- `lem-qa-32-indexed-to-full-list-conversion`
- `lem-qa-32-simon-function-register-instrument`
- `def-qa-32-eqp-promise-class`
- `def-qa-32-zqp-promise-class`
- `lem-qa-32-exact-clifford-t-boolean-circuit-embedding`
- `rem-qa-32-bqp-pp-pspace-proof-obligations`
- `thm-qa-32-eqp-zqp-bqp-containments`
- `thm-qa-32-promise-classical-containments`
- `def-qa-32-simon-decision-oracle-promise`
- `alg-qa-32-simon-query-rank-test`
- `thm-qa-32-simon-classical-randomized-query-lower-bound`
- `thm-qa-32-simon-sample-rank-correctness`
- `cex-qa-32-oracle-separation-is-not-gate-separation`
- `ex-qa-32-simon-small-instance`

I also opened the 12 required page dependencies:

- `library/quantum-computing/uniform-circuit-families-promise-problems-and-complexity.md`
- `library/computability-theory/counting-complexity-and-sharpp.md`
- `library/computability-theory/sat-tableaux-and-quantified-space-completeness.md`
- `library/computability-theory/the-polynomial-hierarchy-and-relativization.md`
- `library/computability-theory/effective-numberings-reductions-resources-and-randomness.md`
- `library/computability-theory/logarithmic-space-nl-and-reachability.md`
- `library/quantum-computing/reversible-computation-ancillas-and-coherent-oracles.md`
- `library/quantum-computing/clifford-t-exact-and-approximate-synthesis.md`
- `library/quantum-computing/finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces.md`
- `library/quantum-computing/registers-tensor-products-and-partial-trace.md`
- `library/quantum-computing/measurements-povms-and-instruments.md`
- `library/combinatorics/finite-probability-spaces-and-random-variables.md`

For the assigned arguments I opened the direct item suppliers used for the promise-class definitions, uniform-circuit conversion, Clifford+T compilation, Simon oracle and measurement laws, finite probability, and the cost model. These included:

- Published suppliers: `def-promise-problem`, `def-probabilistic-polynomial-time-machine-interface`, `def-rp-corp-zpp-bpp-and-pp-classes`, `def-logspace-uniform-circuit-family`, `def-boolean-circuit-size-depth-fanin-and-basis`, `def-sharpp-and-gap-p-functions`, `thm-pp-is-sign-testing-gap-p`, `def-polynomial-space-and-nondeterministic-polynomial-space`, `def-finite-probability-space-and-event`, `lem-finite-probability-basic-laws`, `thm-product-probability-has-independent-coordinate-events`, `def-finite-field-and-its-order`, `lem-polynomial-time-computations-have-logspace-uniform-circuits`, `def-dtime-ntime-dspace-and-nspace`, `def-worst-case-time-and-space-complexity`, `def-real-and-complex-inner-product-space`, `prop-standard-coordinate-inner-products`, `thm-bessel-inequality-and-finite-parseval-identity`, `def-non-negative-and-positive-operator`, `def-trace-of-an-endomorphism`, `prop-trace-is-linear`, and `thm-trace-of-ab-equals-trace-of-ba`.
- Current-run suppliers: `def-qc-dirac-notation-conversion`, `def-qc-ordered-bitstring-encoding`, `def-qc-register-and-computational-basis`, `def-qc-tensor-register-and-permutation`, `def-qc-tensor-map`, `lem-qc-tensor-product-basis-and-dimension`, `thm-qc-computational-basis-orthonormal`, `thm-qc-bitstring-index-is-bijection`, `def-qc-density-operator`, `def-qc-completely-positive-map`, `def-qc-instrument-and-conditional-state`, `def-qc-povm-and-outcome-law`, `def-qc-partial-trace`, `thm-qc-partial-trace-characterization-and-basis-independence`, `def-qc-promise-computation-model`, `def-qc-uniform-circuit-family`, `def-qc-circuit-cost-model`, `def-qc-quantum-acceptance-probability`, `thm-qc-output-acceptance-law-normalizes`, `def-qc-bqp-promise-class`, `def-qc-clifford-t-gate-library`, `def-qc-circuit-syntax-and-register-order`, `def-qc-circuit-denotational-semantics`, `def-qc-elementary-circuit-resources`, `def-qc-clean-and-dirty-ancillas`, `def-qc-toffoli-and-fredkin`, `def-qc-cnot-and-control-target-order`, `def-qc-pauli-matrices`, `lem-qc-x-cnot-toffoli-and-fredkin-are-involutions`, `lem-qc-ancilla-identities-stable-under-reference-and-mixtures`, `lem-qc-fresh-target-not-and-or-gadgets`, `lem-qc-toffoli-clean-target-and-uncomputation`, `alg-qc-reversible-embedding`, `thm-qc-reversible-embedding-cost`, `def-qc-coherent-function-oracle`, and `thm-qc-reversible-xor-oracle-unitary`.

I opened the batch-56 manifest, cross-batch dependency projection, and all nine proof-contract records. The manifest and author metadata were used for navigation and ownership only; I checked the current source mathematics independently.

## Mathematical review and source checks

The PromiseBPP, EQP, ZQP, and BQP definitions preserve their stated promise domains and acceptance conventions. The class-containment proofs construct one uniform circuit generator, retain the full-list QC14 model, and preserve exact acceptance probabilities. The indexed-to-full-list lemma has the required polynomial node bound and enumerates all indexed gate records in polynomial time.

The Simon promise is disjoint, its nonzero mask is unique, and the table encoding and coherent XOR oracle match the stated query model. The measurement lemma correctly derives the two computational-basis instruments and their conditional rank-one states. The quantum sampling proof gives uniform samples from (V_n) on YES and (s^\perp) on NO; the (n+2)-sample union bound is ((2^n-1)2^{-(n+2)}<1/4). The classical lower-bound proof uses a finite equal mixture of random permutations and random Simon functions, conditions uniformly on the remaining masks, and bounds the first collision probability by (T(T-1)/N\le1/64) for (T\le\sqrt N/8). The (n=2) count (46/256=23/128) and its (3/16) union bound are correct. The explicit-table scan takes (O(L^3)) time for table length (L=n2^n+n+1), so the counterexample correctly distinguishes query cost from explicit-input time.

The assigned `rem-qa-32-bqp-pp-pspace-proof-obligations` is appropriately framed as a local proof obligation. The exact QC14 gate entries lie in \(\mathbb Q(\zeta_8)=\mathbb Q(i,\sqrt2)\); the note correctly warns that a rational path count cannot simply replace that exact computation and that arithmetic bit bounds are needed.

Authoritative source checks:

- Ronald de Wolf, *Quantum Computing: Lecture Notes*, arXiv:1907.09415v6, §3.2, PDF pp. 23–24: the Simon procedure prepares the fiber superposition and the Hadamard measurement is uniform on the annihilator (s^\perp). Section 3.3.2, PDF p. 25, gives the distributional classical randomized \(\Omega(\sqrt{2^n})\) query lower bound for the decision version and explicitly distinguishes query separation from ordinary circuit-model lower bounds. [Source](https://arxiv.org/pdf/1907.09415)
- Ronald de Wolf, *Quantum Computing: Lecture Notes*, §13.3, PDF pp. 112–113: the BQP-to-PSPACE simulation computes amplitudes by summing gate-path products, using polynomial space for the Hadamard/Toffoli gate model. This is context for the report's exact-field caveat, not a local proof of the QC14 extension. [Source](https://arxiv.org/pdf/1907.09415)
- John Watrous, *Quantum Computational Complexity*, §IV.5, PDF pp. 15–16: the BQP-to-PP argument uses GapP closure under matrix products and gate-entry values from the source's specified rational set. The QC14 \(T\)-gate entries require a separate exact-number-field argument. [Source](https://arxiv.org/pdf/0804.3401)

## Edit and validation

In `items/alg-qa-32-simon-query-rank-test.md`, Definition (line 38), I specified the pivot-row state and the missing branch: search only the remaining rows, and when a column has no pivot candidate, skip it without advancing the pivot row. Previously the procedure did not define an action for matrices with a zero or dependent column, even though such matrices occur among possible samples. The repair makes the rank computation total on every sampled matrix while preserving the claimed rank test.

I checked its direct consumers `thm-qa-32-simon-sample-rank-correctness` and `ex-qa-32-simon-small-instance`, and the indirect consumer `cex-qa-32-oracle-separation-is-not-gate-separation`. Their claims and proofs remain valid. I updated F2 in the sample-rank proof contract to match the current algorithm Definition. The changed algorithm had no `verification.judge` record to remove.

Validation after the final edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/alg-qa-32-simon-query-rank-test.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/alg-qa-32-simon-query-rank-test.md` — 0 checked, 0 failing; the algorithm has no proof section.
- `node tools/proof-layout.mjs items/alg-qa-32-simon-query-rank-test.md` — 1 item, 0 steps, 0 defects.

## Unedited defect and page verdicts

Unedited published-page defect: `library/computability-theory/counting-complexity-and-sharpp.md` (page `counting-complexity-and-sharpp`), body summary first sentence, line 9. Its frontmatter says `status: published`, but the summary calls it “This draft page.” This is a stale false status claim. It is outside this batch's edit scope; the assigned A page reaches it through its `requires` list. Replace “This draft page” with “This page” or otherwise remove the stale draft label. It is reported as a nonfatal page finding.

- `quantum-complexity-classes-and-oracle-separations`: **Pass after the algorithm repair.** The title, assigned item inventory, requirements, and summary match the current contents and claims.
- `quantum-complexity-classes-and-oracle-separations-examples`: **Pass.** Both examples are placed correctly; the summary accurately describes the exact (n=2) count and the explicit-table counterexample.

## Blocker and coverage note

There is no batch-local blocker. The active run status read during this review also listed an upstream 1-scaffold identity blocker in batch 12 and failed reader retries for batches 38 and 44; these did not prevent batch 56 review.

A dependency-only traversal reaches 801 unique item carriers when all transitive `deps` are followed. I reviewed all assigned items, both assigned pages, all 12 required page carriers, and the direct/claim-relevant supplier statements and proofs listed above, but did not independently re-audit every foundational proof in that full transitive closure. The exact citations and arguments relevant to the assigned claims were checked against the opened supplier text and the cited source sections.
