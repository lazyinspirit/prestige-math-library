# Step 4 batch reviewer — batch **1**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **1**. Step-5 owning group: **g**.
Return `group: "g"` and `batches: ["1"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 1 | `roots-and-rational-powers` | A | suprema-and-infima |
| 1 | `roots-and-rational-powers-examples` | B | roots-and-rational-powers |

## Your content, in full

### `roots-and-rational-powers` — Roots, Rational Powers, and Classical Inequalities

- `def-finite-sum` · definition — Finite sums and finite products, by recursion
- `lem-finite-sum-laws` · lemma — Laws of finite sums and finite products
- `def-integer-power` · definition — Integer powers $a^m$
- `lem-power-laws` · lemma — Laws of integer exponents
- `lem-power-monotone` · lemma — Monotonicity of $x \mapsto x^n$ and of $n \mapsto a^n$
- `lem-bernoulli-inequality` · lemma — Bernoulli's inequality $(1+x)^n \ge 1 + nx$
- `lem-power-difference-factorisation` · lemma — Factorisation of $b^n - a^n$, and the resulting Lipschitz estimate
- `thm-nth-roots-exist` · theorem — Existence and uniqueness of $n$-th roots: a unique $a^{1/n} \ge 0$ with $(a^{1/n})^n = a$
- `def-rational-power` · definition — Rational powers $a^r$ of a positive base
- `lem-rational-power-well-defined` · lemma — Rational powers do not depend on the representative
- `lem-rational-power-laws` · lemma — Laws of rational exponents
- `lem-rational-power-monotone` · lemma — Monotonicity of $r \mapsto a^{r}$ and of $a \mapsto a^{r}$
- `lem-triangle-inequality-finite` · lemma — Triangle inequality for finite sums
- `thm-am-gm` · theorem — The arithmetic mean, geometric mean inequality
- `thm-weighted-am-gm-rational` · theorem — Weighted AM-GM inequality with rational weights
- `thm-young-inequality` · theorem — Young's inequality for products (rational conjugate exponents)
- `thm-cauchy-schwarz-finite` · theorem — The Cauchy-Schwarz inequality for finite sums
- `thm-holder-finite` · theorem — Hölder's inequality for finite sums (rational exponents)
- `thm-minkowski-finite` · theorem — Minkowski's inequality for finite sums (rational exponent)
- `fs-negative-has-square-root` · false-statement — FALSE: every real number has a real square root
- `fs-rational-power-of-negative-base` · false-statement — FALSE: $a^{m/n} := (a^{1/n})^{m}$ extends to negative bases
- `rem-real-exponents-deferred` · remark — Why real exponents are deferred on the rational-powers page

### `roots-and-rational-powers-examples` — Roots, Rational Powers, and Classical Inequalities: Examples and Counterexamples

- `ex-rational-power-computations-of-rational-bases` · example — Rational powers of rational bases computed from the definition
- `ex-odd-roots-of-negative-reals` · example — Odd powers are bijections of $\mathbb{R}$: $x^{3} = -8$ has the unique solution $x = -2$
- `ex-two-term-am-gm-and-equality` · example — The two-term AM-GM inequality, its equality case, and $x + x^{-1} \ge 2$
- `ex-comparing-rational-powers` · example — Comparing rational powers: $2^{1/3} < 2^{1/2} < 3^{1/3}$
- `ex-weighted-am-gm-with-rational-weights` · example — A weighted AM-GM computation: $8^{2/3}\,1^{1/3} \le \frac{2}{3}\cdot 8 + \frac{1}{3}\cdot 1$
- `ex-young-inequality-instances` · example — Young's inequality at $p = q = 2$ and at $p = 3$, $q = 3/2$
- `ex-cauchy-schwarz-lagrange-identity-two-terms` · example — The two-term Lagrange identity and Cauchy-Schwarz
- `ex-holder-at-three-halves-conjugate-exponents` · example — Hölder at the conjugate pair $p = 3$, $q = 3/2$: an exact equality instance and a strict instance
- `ex-minkowski-two-entry-vectors-equality-and-strict` · example — Minkowski for two-entry vectors: equality and strict cases
- `cex-am-gm-needs-nonnegative-terms` · counterexample — AM-GM fails for negative entries: $(-1,-4)$ has geometric mean $2$ and arithmetic mean $-5/2$
- `cex-weighted-am-gm-needs-normalized-nonnegative-weights` · counterexample — Weighted AM-GM needs nonnegative weights summing to $1$
- `cex-minkowski-fails-for-p-below-one` · counterexample — Minkowski fails for $p = 1/2$: the hypothesis $p \ge 1$ is load-bearing
- `cex-bernoulli-needs-x-at-least-minus-one` · counterexample — Bernoulli fails for $x < -1$: $x = -4$, $n = 3$
- `cex-rational-power-laws-need-positive-base` · counterexample — The iterated rational-power law fails without a positive base: $\big((-3)^{2}\big)^{1/2} = 3 \ne -3$
- `ex-five-algebraic-proofs-of-bernoulli-and-rational-forms` · example — Five finite proofs of Bernoulli, with rational exponents and the quadratic refinement
- `ex-five-finite-proofs-of-am-gm-and-equality` · example — Five finite AM-GM proofs, with the same sharp equality case

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `countability-and-uncountability-examples` requires `roots-and-rational-powers`
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
