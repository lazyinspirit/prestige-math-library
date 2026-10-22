# Step 3a reader report — batch 87

Run: `physics-non-fluid-129-2026-10-21-r2`  
Batch: `87`  
Role: reader (`reader-87`)

## Opened inventory

Assigned pages:

- `csm-frontier-polymer-continuum` — [library/classical-statistical-mechanics/csm-frontier-polymer-continuum.md](../library/classical-statistical-mechanics/csm-frontier-polymer-continuum.md)
- `csm-frontier-polymer-continuum-examples` — [library/classical-statistical-mechanics/csm-frontier-polymer-continuum-examples.md](../library/classical-statistical-mechanics/csm-frontier-polymer-continuum-examples.md)

Assigned items, reviewed in their logical order for final mathematical dispositions:

1. `def-csm-frontier-abstract-polymer`
2. `lem-csm-frontier-polymer-tree-majorant`
3. `thm-csm-frontier-polymer-analyticity`
4. `lem-csm-frontier-stable-mayer-tree-bound`
5. `thm-csm-frontier-dilute-mayer-domain`
6. `ex-csm-frontier-hard-core-dilute-bound`

I also opened the direct prerequisite Definitions/Statements used by these arguments: `def-complex-numbers-and-arithmetic`, `def-countable`, `def-sum-over-a-finite-index-set`, `def-finite-simple-graph`, `def-simple-graph-without-a-finiteness-hypothesis`, `def-walks-paths-and-connectedness-in-a-simple-graph`, `def-cycles-trees-and-forests-in-a-simple-graph`, `cor-cardinality-of-the-power-set`, `thm-subset-of-a-finite-set`, `def-real-exponential-function-and-e`, `thm-exponential-is-strictly-increasing`, `thm-exponential-addition-formula`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `lem-complex-conjugation-and-modulus-laws`, `lem-complex-modulus-of-real-embedding-equals-real-absolute-value`, `def-complex-exponential`, `thm-complex-exponential-addition-and-real-extension`, `thm-termwise-differentiation-of-complex-power-series`, `def-abs-value`, `lem-of-abs-value`, `lem-of-triangle-inequality`, `def-factorial-and-falling-factorial`, `def-nonnegative-extended-series`, `def-finite-sum`, `lem-finite-sum-laws`, `def-spanning-tree`, `thm-connected-iff-has-spanning-tree`, `lem-spanning-tree-set-is-finite`, `def-max-min`, `lem-finite-set-has-max`, `lem-finite-subsets-listable`, `def-canonical-natural`, `lem-of-naturals-positive`, `def-ordered-field`, `lem-of-add-order`, `def-csm-stable-superstable-continuum-interaction`, `def-countable-choice`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-composition-with-borel-functions-preserves-measurability`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `cor-continuous-functions-are-borel-measurable`, `def-extended-real-valued-measurable-function`, `def-borel-sigma-algebra`, `def-borel-sigma-algebra-on-the-extended-real-line`, `thm-borel-products-of-euclidean-spaces-are-euclidean-borel`, `thm-borel-sets-are-lebesgue-measurable`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `cor-additivity-of-the-nonnegative-lebesgue-integral`, `thm-tdmath-dominated-convergence`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-integral-triangle-inequality`, `lem-euclidean-balls-have-positive-finite-lebesgue-measure`, `def-metric-ball`, `lem-metrics-on-rn`, `thm-metric-open-set-algebra`, `def-euclidean-inner-product`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, and `def-integral-of-a-nonnegative-simple-function`. For `lem-finite-set-has-max`, I also opened its `justified_by` target `lem-finite-subsets-listable` and checked that finite-set listability is proved independently of its extrema corollary.

Page prerequisites opened for identity, status, requirements, and summaries:

- Physics pages: `csm-continuum-limits`, `csm-frontier-quantitative-dlr` (draft page in batch 86), and `csm-gibbs-lattice`.
- Read-only mathematical pages: `graphs-walks-and-connectivity`, `cayley-graphs-word-metrics-and-quasi-isometry`, `trees-forests-and-spanning-trees`, and `complex-norms-and-realification`.

I read the batch-87 manifest, proof contracts, notes, coverage record, and cross-batch-dependency record as navigation/evidence only. The six assigned items are all mathematical-domain carriers; no empirical premises, physical postulates, or statistical evidence claims occur in them. The only assigned TikZ diagram is in `lem-csm-frontier-stable-mayer-tree-bound`: its solid star edges form the stated spanning tree, and its dashed edge is the later-ranked edge on the unique tree path between its endpoints. No diagram repair or additional diagram was needed.

## Source review

- Daniel Ueltschi, [“Cluster expansions and correlation functions”](https://arxiv.org/pdf/math-ph/0304003), §2, equations (1)–(2), Theorem 1 and its rooted-bound and logarithm proof, PDF pp. 1–4. I read the complete relevant section. Its criterion includes `|1+ζ|≤1`; the local abstract-polymer argument specializes to pairwise incompatibility and proves its stated rooted bound directly.
- Suren Poghosyan and Daniel Ueltschi, [“Abstract cluster expansion with applications to statistical mechanical systems”](https://arxiv.org/pdf/0811.4281), §6, Proposition 6.1(a) and its root-deletion/forest argument, PDF pp. 11–14, and §7, the connected-pressure convergence argument, PDF pp. 15–17. The local stable tree estimate has the same factor `e^{2βBn}` and supplies its own pointwise and integral proofs.
- Aldo Procacci and Sergio A. Yuhjtman, [“Convergence of Mayer and Virial expansions and the Penrose tree-graph identity”](https://arxiv.org/pdf/1508.07379), §2.1, §§3.1–3.3 and §4. Its minimum-spanning-tree partition and stable tree estimate were compared with the local lexicographic partition. The paper's stated convergence theorem uses stable and tempered potentials; the local theorem proves its weaker explicit disk from the displayed finite-Mayer-integral hypothesis.
- Sacha Friedli and Yvan Velenik, [Chapter 5, “Cluster Expansion”](https://www.unige.ch/~velenik/smbook/Cluster_Expansion.pdf), §§5.2–5.6, including Theorem 5.4, Theorem 5.8 and the hard-core example. The direct PDF open returned HTTP 503 during this review; the search result exposed the relevant Theorem 5.4 proof excerpt, and the publisher's [chapter page](https://www.cambridge.org/core/books/abs/statistical-mechanics-of-lattice-systems/cluster-expansion/DDFB83EBD42A7C6539207A10A34433B3) confirms the authors as **Sacha Friedli** and Yvan Velenik (author listing, lines 73–79). I did not treat the search excerpt as a full-text retrieval.

The local proofs were checked directly. The polymer theorem proves a finite zero-free disk under its stated majorant. The continuum theorem carries Countable Choice, stability, even Borel regularity, and `Cβ<∞`; its pressure limit is only along centered cubes. The hard-core example proves the open-ball potential's Borel regularity, stability with `B=0`, and `Cβ=λ_d(B(0,a))`, and states only a sufficient disk.

## Defects and repairs

1. **Proof gap repaired — `lem-csm-frontier-polymer-tree-majorant`, Proof 1.2.** The earlier sentence identified the rooted-tree branch sum directly with `exp(A)` before establishing that the nonnegative countable sum `A` was finite. The following induction supplied that finiteness, but the identity was stated without its needed condition. I rewrote the passage to obtain the branch identity by increasing finite cutoffs, then identify it with the real exponential only under the induction hypothesis, where `[A1]` gives `A≤aγ<∞`. I updated the matching `step 1.2` derivation in the batch proof contract. The item had no `verification.judge` record to remove.

2. **Citation metadata repaired — four assigned items.** In `def-csm-frontier-abstract-polymer`, `lem-csm-frontier-polymer-tree-majorant`, `thm-csm-frontier-polymer-analyticity`, and `ex-csm-frontier-hard-core-dilute-bound`, the source title spelled the first author's name “Sascha.” The Cambridge University Press chapter page lists “Sacha Friedli”; I corrected the four bibliography titles. The URLs, locators, Statements, and proofs are unchanged. No proof-contract quote or derivation depended on the bibliography title.

3. **Citation/status wording repaired — two assigned theorems.** Facts `[F5]` in `thm-csm-frontier-polymer-analyticity` and `[F21]` in `thm-csm-frontier-dilute-mayer-domain` called `lem-complex-modulus-of-real-embedding-equals-real-absolute-value` a draft item. The current pinned imported carrier is `status: published`; it has `provenance.proof: ai-generated` and only `verification.precheck: pass`. I changed both Facts to report that exact status and to distinguish a format precheck from proof acceptance. Their contracted supplier Statement quotes and proof-step maps remain accurate and unchanged. Neither item had a `verification.judge` record.

4. **Uneditable published-dependency finding — `lem-complex-modulus-of-real-embedding-equals-real-absolute-value`.** Its current root item is pinned by `research/math-imports.json`, marked published, and contains a complete three-step proof of the real-embedding modulus identity, which I checked without finding a mathematical error. However, it has no `verification.audited`, `verification.verified`, or authorized `verification.repair` record; only a format precheck is present. Both local and root `SCHEMA.md` require audit/verification evidence for a published proved-here item, and the precheck explicitly does not establish proof validity. The root item and imported snapshot are read-only here. The assigned dependency closures reaching it are `thm-csm-frontier-polymer-analyticity`, `thm-csm-frontier-dilute-mayer-domain`, and, through the latter, `ex-csm-frontier-hard-core-dilute-bound`. This remains a fatal publication-evidence hold, not a discovered error in the identity's proof.

No other mathematical proof defect, unsupported empirical premise, inaccurate theorem hypothesis, overstrong result title, or diagram defect was found in the assigned carriers.

## Page verdicts

- `csm-frontier-polymer-continuum`: the page inventory and prerequisite links are consistent with the manifest, and all five assigned A-page items were reviewed. **Hold** because two assigned theorem dependency closures reach the published lemma lacking required proof-acceptance evidence.
- `csm-frontier-polymer-continuum-examples`: the examples-page inventory and link to its A page are consistent, and the assigned hard-core example is mathematically sound under its stated hypotheses. **Hold** because its theorem prerequisite reaches the same unresolved published supplier.

## Checks and blocker

After the edits, reflow reported unchanged for the five edited items. Precheck passed for all four proof-bearing edited items; the definition had zero proof checks, as expected. The final proof-layout command covered all five edited item paths: 5 items, 15 numbered steps, 0 defects. The polymer-tree proof-contract step-1.2 claim was synchronized with its repair; the other changed text affected no contract premise quote or derivation. No contract `verification.judge` stamp was present on these items.

There is no operational blocker. The remaining fatal issue is outside this batch's write scope: the published mathematical supplier's proof-acceptance metadata must be resolved in its owning mathematics workflow before these dependency closures can be accepted as published-proof-backed. Batch 86's item proofs behind the page-level `csm-frontier-quantitative-dlr` requirement were not re-audited; that page was checked only as a current draft prerequisite, because it is outside batch 87.

## Coverage limitation

I first opened the assigned item carriers to map the batch before opening their suppliers. I then read the direct supplier statements and re-evaluated the arguments before making dispositions, but the session was not strictly supplier-first from its first file read. I did not re-audit every transitive proof behind the published mathematical suppliers. The full Friedli–Velenik PDF was unavailable from the direct host during this review, as noted above; the local proofs were checked independently, and I do not claim full-text retrieval of that textbook chapter.
