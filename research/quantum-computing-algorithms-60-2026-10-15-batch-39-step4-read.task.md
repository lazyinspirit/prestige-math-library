# Step 4 batch reviewer — batch **39**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **39**. Step-5 owning group: **e**.
Return `group: "e"` and `batches: ["39"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 39 | `polynomial-method-and-approximate-degree` | A | reversible-arithmetic-and-oracle-conversion, fundamental-trigonometric-identities, linear-algebra-methods-in-combinatorics, computational-problems-promises-and-cost-models, the-complex-exponential-and-eulers-formula, uniform-circuit-families-promise-problems-and-complexity |
| 39 | `polynomial-method-and-approximate-degree-examples` | B | polynomial-method-and-approximate-degree |

## Your content, in full

### `polynomial-method-and-approximate-degree` — Polynomial Method and Approximate Degree

- `lem-qa-15-continuous-markov-derivative-bound` · lemma — Continuous Markov derivative bound on an interval
- `lem-qa-15-grid-return-derivative` · lemma — Bounded integer-grid values control excursions by the derivative
- `lem-qa-15-discrete-markov-ehlich-zeller` · lemma — Finite-grid Markov derivative inequality
- `def-qa-15-bit-oracle-query-model` · definition — Oracle-only bit-query algorithm
- `def-qa-15-acceptance-polynomial` · definition — Acceptance polynomials and approximate degree on Boolean domains
- `def-qa-15-bit-oracle-query-complexity` · definition — Local bounded-error bit-query complexity
- `lem-qa-15-branch-density-degree` · lemma — Unnormalized branch density entries have degree at most twice the query count
- `lem-qa-15-query-amplitude-degree` · lemma — Coherent query amplitudes have degree at most the query count
- `lem-qa-15-symmetrization` · lemma — Symmetrizing a Boolean-cube polynomial gives a Hamming-weight polynomial
- `prop-qa-15-promise-domain-scope` · proposition — Approximation constraints apply only on the promise domain
- `thm-qa-15-acceptance-degree-bound` · theorem — A T-query bit algorithm has an acceptance polynomial of degree at most 2T
- `thm-qa-15-exact-degree-or` · theorem — The exact polynomial degree of OR is N
- `thm-qa-15-or-approximate-degree-lower-bound` · theorem — OR has a square-root approximate-degree lower bound and corresponding query lower bounds
- `thm-qa-15-parity-approximate-degree` · theorem — Parity has approximate degree N and requires at least N over 2 queries

### `polynomial-method-and-approximate-degree-examples` — Polynomial Method and Approximate Degree — Examples

- `ex-qa-15-or-polynomial-small-n` · example — A one-query exact algorithm on a two-point OR promise
- `cex-qa-15-off-cube-values-are-unconstrained` · counterexample — A symmetrized acceptance polynomial can exceed one between Hamming layers

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `polynomial-method-and-approximate-degree` requires `reversible-arithmetic-and-oracle-conversion`
- `polynomial-method-and-approximate-degree` requires `computational-problems-promises-and-cost-models`
- `polynomial-method-and-approximate-degree` requires `uniform-circuit-families-promise-problems-and-complexity`
---

# Step 4 Alpha batch reviewer — read-only digest, `quantum-computing-algorithms-60-2026-10-15`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Published supplier findings:** Preserve each exact outside published-supplier finding in `alerts`. It has no in-run producer batch. The owner records a separate evidence-bound route after focused published repair; do not delete the alert, rewrite your digest, fabricate ownership, or claim the repair yourself.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
