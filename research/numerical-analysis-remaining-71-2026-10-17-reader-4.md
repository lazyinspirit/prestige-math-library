# Step 3a reader report — batch 4

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `4`  
Role: independent reader

## Opened inventory

Assigned A page: `library/numerical-linear-algebra-and-approximation/minimax-approximation-and-remez-algorithms.md` (`minimax-approximation-and-remez-algorithms`), status `draft`. Its 19 assigned items were opened in dependency order:

- `def-na-best-polynomial-uniform-error`
- `lem-na-extrema-sign-block-polynomial`
- `lem-na-polynomial-alternating-signs-force-root-count`
- `lem-na-polynomial-coefficient-bound-from-fixed-nodes`
- `lem-na-polynomial-interpolation-alternating-weight-annihilator`
- `lem-na-reduced-rational-representation-unique`
- `def-na-weighted-rational-minimax-family`
- `lem-na-polynomial-remez-system-invertible`
- `thm-na-best-polynomial-approximation-exists`
- `thm-na-polynomial-equioscillation-certificate`
- `alg-na-minimax-approximation-and-remez-algorithms`
- `lem-na-rational-perturbation-space`
- `thm-na-best-weighted-rational-approximation-exists`
- `thm-na-polynomial-alternation-necessity`
- `cor-na-best-polynomial-approximation-unique`
- `thm-na-polynomial-remez-budget-termination`
- `thm-na-weighted-rational-alternation-characterization`
- `alg-na-weighted-rational-remez-exchange`
- `thm-na-weighted-rational-remez-budget-termination`

Assigned B page: `library/numerical-linear-algebra-and-approximation/minimax-approximation-and-remez-algorithms-examples.md` (`minimax-approximation-and-remez-algorithms-examples`), status `draft`. All three listed items were opened:

- `ex-na-remez-zero-degree-equioscillation-certificate`
- `ex-na-degree-one-minimax-of-square`
- `cex-na-defective-rational-approximation-naive-count`

Required published page opened: `library/numerical-linear-algebra-and-approximation/polynomial-approximation-and-chebyshev-interpolation.md`. Its directly consumed item, `def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants`, was opened and checked against the local interval and degree conventions.

The 16 unique direct published item dependencies were opened: `def-complete-ordered-field`, `def-continuity-real`, `def-interval`, `def-real-polynomial-degree-leading-coefficient-and-monic`, `thm-algebra-of-continuous-functions`, `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, `cor-of-reverse-triangle`, `lem-of-triangle-inequality`, `lem-of-abs-value`, `thm-intermediate-value`, `thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots`, `thm-rank-nullity`, `thm-bezout-identity-for-polynomials`, `thm-polynomial-degree-of-a-product-over-a-domain`, `lem-real-polynomial-factor-at-a-root`, and the published polynomial-error definition above. I also opened `def-real-limit` to confirm the rational-epsilon convention used by the IVT proof.

## Source checks

- [Trefethen, *Approximation Theory and Approximation Practice*](https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf), Theorem 10.1, printed pp. 73–75: real polynomial best approximation exists, and the (n+2)-point alternation criterion characterizes optimality. The perturbation and uniqueness discussions match the local polynomial arguments.
- [Trefethen, Chapter 24](https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf), printed pp. 199–207, defect definition and Theorem 24.1: the rational defect is (d=\min(m-\deg p,n-\deg q)), with at least (m+n+2-d) alternating extrema and a unique best real rational approximant.
- [Kroó and Pinkus, *Strong Uniqueness*](https://pages.cs.wisc.edu/~deboor/sat/papers/12/12.pdf), Theorem 4.4, printed pp. 20–22, and Lemma 6.2, Theorem 6.4, and Corollary 6.5, printed pp. 44–46: the polynomial T-space alternation theorem, the dimension (m+n+1-d) of the rational perturbation space, defect-sensitive rational alternation, and uniqueness.
- [Pachón and Trefethen, “Barycentric-Remez Algorithms for Best Polynomial Approximation in the Chebfun System”](https://people.maths.ox.ac.uk/trefethen/remez_new2.pdf), §2.1–2.2, printed pp. 5–7: the unique trial system and sign-preserving reference exchange.
- [Filip, Nakatsukasa, Trefethen, and Beckermann, “Rational Minimax Approximation via Adaptive Barycentric Representations”](https://people.maths.ox.ac.uk/trefethen/minimax_published.pdf), §3 and §4.1, pp. A2432–A2436: rational trial equations, weighted equations, and solver limitations. Its retrieved §1 text renders the denominator term in the defect expression with (m); I removed that section as support for the exact defect convention, which is supported by Trefethen and Kroó–Pinkus above. The algorithm items continue to cite the source's Remez sections.
- [Trefethen, Chapter 5](https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf), printed pp. 33–34, Theorem 5.1 and formulas (5.1)–(5.3): the Lagrange/cardinal interpolation formula used by the coefficient-bound lemma. The current [FNC online chapter](https://fncbook.com/polyinterp/) instead presents interpolation at distinct nodes as a Vandermonde system; its locator was corrected to match that page.

## Repairs

- `lem-na-extrema-sign-block-polynomial`, proof step 1.2: added the packing bound (k\delta\le b-a) for the pairwise disjoint transition gaps, making the finite-transition conclusion explicit.
- `lem-na-polynomial-remez-system-invertible`, proof step 2.1: displayed the basis of the product domain and the standard basis of the codomain before applying rank–nullity.
- `thm-na-best-polynomial-approximation-exists`, proof step 1.1: derived the reverse-triangle estimate for the uniform-error functional from the pointwise triangle inequality before concluding continuity.
- `thm-na-polynomial-equioscillation-certificate`, Statement and Given: stated explicitly that every alternation node lies in the domain ([a,b]).
- `lem-na-reduced-rational-representation-unique`, Statement and proof steps 2.1–3.1: defined “reduced,” specified rational-function equality by cross-products, defined the coefficient norm convention, and required a nonempty interval for positive-denominator normalization. Without nonemptiness, positivity is vacuous and simultaneous sign reversal gives a counterexample to the old uniqueness claim. The proof now also spells out nonzero-product cancellation and uses nonemptiness to fix the common scalar's sign.
- `thm-na-best-weighted-rational-approximation-exists`, Fact F2 and proof step 3.1: narrowed the representation fact to uniqueness for admissible family members. Their representing pair exists by the family definition; the earlier wording overclaimed existence of a positive normalized representation for every rational function with denominator nonzero on the interval.
- `thm-na-weighted-rational-alternation-characterization`, proof step 2.1: included \,|e|>E/2 in the neighborhood of the active-extrema set. This ensures the small perturbation does not cross zero and justifies the strict residual decrease there.
- `thm-na-polynomial-remez-budget-termination`, Statement, Given, and proof steps 1.1–2.1: conditioned termination on both exact solves and oracle calls, removed the duplicated “integer,” and stated separate bounds of (B+1) solves and (B+1) oracle calls, at most (2(B+1)) calls total.
- `thm-na-weighted-rational-remez-budget-termination`, Statement and proof step 2.1: made the same per-procedure and total-call bounds explicit.
- `lem-na-polynomial-coefficient-bound-from-fixed-nodes`, source locator: corrected the FNC locator to its current Definition 2.1.1 and §2.1.1, which cover distinct-node interpolation as a Vandermonde system; the Lagrange formula is supported by Trefethen Chapter 5.
- `def-na-weighted-rational-minimax-family` and `thm-na-weighted-rational-alternation-characterization`, sources: removed the FNT article's §1 locator for the exact defect formula because its retrieved text renders that convention inconsistently; the exact formula remains supported by the two checked sources above.

The proof-contract entries were regenerated for the repaired proofs and the consumers whose quoted Statement excerpts changed; the rational-uniqueness empty-boundary reason was updated. `proof-contract --strict` passed all 22 batch items with no errors or warnings. No changed item had a `verification.judge` record to remove.

## Validation

- Reflow completed for all 11 changed item paths; no reflow errors.
- Precheck passed for all 10 proof-bearing changed items; the changed definition returned 0 proof rows and 0 failures.
- Final batched proof-layout check: 11 items, 30 steps, 0 defects.

## Page verdicts and remaining issues

- `minimax-approximation-and-remez-algorithms`: **pass after the listed repairs**. The polynomial and weighted-rational claims have the stated domains, defect counts, and local proofs. Both algorithms explicitly bound their loops and claim no convergence.
- `minimax-approximation-and-remez-algorithms-examples`: **pass**. The degree-zero and square examples have the stated exact errors and alternation nodes; the defective ((1,1)) example has exactly three extrema and the stated defect-sensitive count.
- `polynomial-approximation-and-chebyshev-interpolation`: **pass as the required published prerequisite**. Its directly used best-error definition agrees with the local interval specialization.

No uneditable defect or blocker remains. The published direct supplier statements and their relevant local arguments were inspected; I did not recursively audit every dependency below those published suppliers.
