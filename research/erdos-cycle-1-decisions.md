# Erdős shortest-path cycle 1: step-3 decisions

Date: 2026-07-31. Scope: `uniform-convergence-of-functions` and
`chains-antichains-sperner-and-dilworth`, with their examples companions.

1. **Approved: native uniform-convergence core.** The high-order items
   `def-topology-of-uniform-convergence`,
   `lem-uniform-convergence-in-the-uniform-metric`,
   `thm-uniform-limit-theorem`, and `thm-dini` cannot be load-bearing at page
   order 169. The pair will give the real-valued quantified development its own
   closed proofs and place any agreement with the later general development only
   in a declared orientation remark. This removes a forward dependency while
   retaining the mathematical content.

2. **Approved: remove out-of-scope trigonometric material.** The cosine/
   double-limit example and the proposed example on the whole real line require
   unbuilt trigonometry or other unavailable machinery. They are deferred in the
   scaffold notes; the B page has no forward-reference whitelist. This enforces
   self-contained scope.

3. **Approved: drop the false LYM equality counterexample.** Equality for a
   maximum antichain forces a complete middle level, so the proposed contrary
   witness is false. The scaffold instead proves the equality case.

4. **Approved: omit the naive infinite-Dilworth false statement and
   Erdős–Ko–Rado uniqueness.** The former needs an undeveloped cardinal version,
   while uniqueness is false at the boundary `n = 2k`. The retained finite
   theorems have closed proof plans.

5. **Approved with correction: use only schema proof strategies.** Replaced
   descriptive labels such as `double-counting`, `compactness`, and
   `counterexample` with `direct`; the proof technique line may still name the
   mathematical method. This is required by the phase-proof checker.

6. **Approved with correction: repair two statement-domain errors.** The
   iterated-limits witness is `(m+1)/(m+n+2)`, not `m/(m+n)`, so it is defined at
   zero indices. Erdős–Ko–Rado now explicitly assumes `1 <= k` as well as
   `n >= 2k`, avoiding `\binom{n-1}{k-1}` at `k = 0`.

7. **Approved with correction: declare the B-page arithmetic prerequisite.**
   The concrete divisor-lattice example uses the published fundamental theorem
   of arithmetic, so `chains-antichains-sperner-and-dilworth-examples` now
   declares `primes-and-the-fundamental-theorem-of-arithmetic` alongside its A
   companion. This repairs the page-level prerequisite closure without changing
   the mathematical example.

8. **Approved with correction: narrow the Erdős–Ko–Rado counterexample.** The
   full $k$th level exceeds the star bound only for $k < n < 2k$, not at $n=k$.
   The B-page counterexample now states the correct range.

9. **Declined: replace the approved uniform-convergence scaffold with the
   focused reader's larger alternative.** It identifies no mathematical or
   dependency defect in the validated 19-A/8-B scaffold. The approved core is
   self-contained and already includes the useful uniform-continuity corollary;
   retaining it minimizes needless plan churn while preserving mathematical
   richness.

All decisions prioritize mathematical accuracy and exact dependency direction;
no optional richness was kept at the cost of a forward or unproved dependency.
