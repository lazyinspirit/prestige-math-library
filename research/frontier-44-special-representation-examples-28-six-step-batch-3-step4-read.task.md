# Step 4 batch reviewer — batch **3**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **3**. Step-5 owning group: **g**.
Return `group: "g"` and `batches: ["3"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 3 | `sequences-and-limits` | A | countability-and-uncountability |
| 3 | `sequences-and-limits-examples` | B | sequences-and-limits, roots-and-rational-powers |

## Your content, in full

### `sequences-and-limits` — Sequences and Limits

- `def-sequence` · definition — Sequences of reals: bounded, eventually, frequently, tails, subsequences
- `lem-limit-of-tail` · lemma — Convergence depends only on the tail
- `lem-limit-unique` · lemma — A sequence has at most one limit
- `lem-convergent-implies-bounded` · lemma — Every convergent sequence is bounded
- `lem-convergent-implies-cauchy` · lemma — Every convergent sequence is Cauchy
- `lem-null-times-bounded` · lemma — A null sequence times a bounded sequence is null
- `thm-algebra-of-limits` · theorem — Algebra of limits: sums, scalar multiples, products and quotients
- `lem-limit-preserves-order` · lemma — Limits preserve non-strict inequalities
- `thm-squeeze` · theorem — The squeeze theorem
- `lem-limit-abs` · lemma — The absolute value is compatible with limits
- `def-divergence-to-infinity` · definition — Divergence to $+\infty$ and to $-\infty$
- `lem-reciprocal-of-null-diverges` · lemma — For positive terms, null and divergence to $+\infty$ are reciprocal
- `lem-index-map-grows` · lemma — A strictly increasing index map satisfies $n_k \ge k$
- `lem-subsequence-inherits-limit` · lemma — Subsequences inherit the limit
- `fs-bounded-implies-convergent` · false-statement — FALSE: every bounded sequence converges
- `fs-limit-preserves-strict-inequality` · false-statement — FALSE: limits preserve strict inequalities
- `fs-subsequence-convergence-implies-convergence` · false-statement — FALSE: a convergent subsequence forces the sequence to converge
- `rem-sequence-conventions` · remark — Conventions for sequences: indexing, eventually, $\lim$, and rational $\varepsilon$

### `sequences-and-limits-examples` — Sequences and Limits: Examples and Counterexamples

- `ex-the-reciprocal-of-k-plus-one-is-null` · example — The sequence $1/(k+1)$ converges to $0$
- `ex-a-rational-expression-limit` · example — A rational expression in $k$: $(2(k+1)+3)/(5(k+1)+1) \to 2/5$
- `ex-an-alternating-null-sequence` · example — The alternating sequence $(-1)^k/(k+1)$ converges to $0$
- `ex-square-roots-diverge-to-infinity` · example — The square roots $\sqrt{k}$ diverge to $+\infty$
- `ex-successive-root-differences` · example — The successive differences $\sqrt{k+1} - \sqrt{k}$ converge to $0$
- `ex-changing-finitely-many-terms` · example — Changing the first hundred terms leaves convergence to $0$ and boundedness intact
- `ex-two-squeeze-computations` · example — Two squeeze computations: $1/((k+1)\sqrt{k+1}) \to 0$ and $(k+(-1)^k)/(k+1) \to 1$
- `ex-subsequences-of-a-null-sequence` · example — Even and odd subsequences of $1/(k+1)$ converge to $0$
- `ex-absolute-value-limit` · example — The absolute value of the limit, and the limit of the absolute value
- `cex-sum-of-divergent-sequences-converges` · counterexample — The sum of two divergent sequences can converge: $k + (-k)$
- `cex-null-times-unbounded-need-not-be-null` · counterexample — A null sequence times an unbounded sequence need not be null: $(k+1)^{-1}\cdot(k+1) = 1$
- `cex-quotient-rule-needs-a-nonzero-limit` · counterexample — The quotient rule needs a nonzero limit in the denominator: $1\big/(k+1)^{-1} = k+1$
- `cex-squeeze-with-unequal-bound-limits` · counterexample — The squeeze theorem needs the two bounds to share their limit
- `ex-geometric-sequences-all-real-ratios` · example — Geometric sequences: the complete classification for every real ratio

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `sequences-and-limits` requires `countability-and-uncountability`
- `sequences-and-limits-examples` requires `roots-and-rational-powers`
---

# Step 4 Alpha batch reviewer — read-only digest, `frontier-44-special-representation-examples-28-six-step`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
