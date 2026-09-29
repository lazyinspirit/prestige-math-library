# Step 3a scope report — alphabet reduction and the PCP theorem

- Run: `frontier-36-complete`
- A/B pair: `alphabet-reduction-and-the-pcp-theorem` / `alphabet-reduction-and-the-pcp-theorem-examples`
- Batch: 20
- A-page scope decision: **sufficient**

## Scope assessment

The binding design in `research/plan-computability-theory-track.md` §48 replaces the older 18-item TC-35 draft. The current batch-20 manifest has 34 A items and four B items. Together, they give an adequate proof spine for the library's intended treatment of alphabet reduction and the PCP theorem.

The A inventory moves from PCP verifier resources and the PCP/CSP correspondence through Walsh–Hadamard distance, BLR decoding, tensor consistency, quadratic-equation checking, and an exponential-length constant-query PCP. It then supplies a two-piece proximity verifier, composition with an assignment tester, perfect-completeness and rejection-transfer results, and alphabet, arity, size, degree, and uniform-time bounds. The final chain fixes one alphabet-reducing Dinur transformation, proves satisfiability preservation and gap growth, iterates it logarithmically with polynomial total growth, obtains constant-gap CSP hardness from 3-SAT, and derives `NP = PCP(log n,O(1))` with perfect completeness and constant soundness. The verifier-resource definitions make the fixed-proof quantifiers explicit; error amplification is also included.

Four additional A lemmas provide local interfaces needed by that route: shared Walsh–Hadamard blocks and robust edge circuits, bounded-arity Boolean CSP conversion, and 3-SAT to a binary constraint graph. The B page supplies four concrete checks: a Walsh–Hadamard/BLR calculation, one complete composition instance, three-fold PCP repetition, and a powered graph showing alphabet growth. These examples illustrate the central constructions and the main alphabet-control pitfall.

The scope deliberately uses the Walsh–Hadamard two-piece construction. Dinur §7's alternative low-degree assignment tester is marked out of scope in the coverage record; it is not needed for the selected proof route. I found no missing subject-level result that warrants enrichment or a pair merger.

## Evidence and library role

The batch-20 page manifest and coverage file align with binding §48: A is page order 649 with prerequisites `gap-amplification-and-assignment-testing`, `arithmetization-and-the-sum-check-protocol`, and `the-cook-levin-theorem`; B is order 650 and requires A. `research/plan-spec.json` currently carries the page contracts with empty item arrays before plan splicing, so the scoped item inventory is evidenced by the run's batch-20 manifest and the binding design. The scope ledger includes both pages in batch 20. The run's owner direction preserves the selected pairs, and the Step-1 drift record says §48 controls this pair over the old TC-35 text. I found no prior Step 3a scope receipt or pair-specific owner merge/enrichment disposition.

`research/frontier-36-complete-batch-20.coverage.json` contains 36 harvested source rows: 29 included, five already published, one inline, and one explicitly out of scope. It records complete-PDF fetch receipts for Irit Dinur, *The PCP Theorem by Gap Amplification* (§§1.3, 2.4, 3, 5, and 7), and Arora–Barak, *Computational Complexity: A Modern Approach* (§§18.1, 18.2.4, 18.4.1–18.4.3, 18.5, and 19.3.2). The author-hosted [Dinur paper](https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf) presents the constant-gap CSP route as amplification plus composition and iteration; the [Arora–Barak draft](https://theory.cs.princeton.edu/complexity/book.pdf) supplies the explicit Walsh–Hadamard/QUADEQ PCP and the proximity and alphabet-reduction interfaces. I checked these primary-source sections for subject coverage; this report does not judge the correctness of the authored proofs.

In the computability-theory plan, this pair follows the gap-amplification page and precedes `approximation-algorithms-and-gap-reductions`, which directly requires the PCP page. That is an appropriate library role: the later approximation-hardness material has an explicit PCP theorem and its proof spine available as a supplier.
