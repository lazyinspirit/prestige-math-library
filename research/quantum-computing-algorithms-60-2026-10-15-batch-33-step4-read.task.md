# Step 4 batch reviewer — batch **33**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **33**. Step-5 owning group: **c**.
Return `group: "c"` and `batches: ["33"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 33 | `shors-factoring-algorithm` | A | quantum-order-finding-and-rational-reconstruction, divisibility-gcd-and-bezout, primitive-roots-and-unit-groups-modulo-n, congruences-and-the-chinese-remainder-theorem, monoids-groups-and-subgroups, uniform-circuit-families-promise-problems-and-complexity, primes-and-the-fundamental-theorem-of-arithmetic |
| 33 | `shors-factoring-algorithm-examples` | B | shors-factoring-algorithm |

## Your content, in full

### `shors-factoring-algorithm` — Shor’s Factoring Algorithm

- `alg-qa-shor-uniform-residue-sampler` · algorithm — Exact uniform sampling from the nonzero residue representatives
- `lem-qa-crt-sign-vector-factorization` · lemma — Mixed CRT signs yield proper gcd factors
- `lem-qa-even-order-square-root` · lemma — Half an even order gives a square root of one
- `lem-qa-prime-power-order-two-adic-law` · lemma — Two-adic order distribution in odd prime-power unit groups
- `lem-qa-shor-residue-gcd-branch` · lemma — Random residue gcd branch for factoring
- `thm-qa-order-to-factor-success` · theorem — Classical randomized order-to-factor success bound
- `alg-qa-shor-factoring` · algorithm — Shor factoring with verified output and bounded outer retries
- `def-qa-shor-cost-accounting` · definition — Shor factoring cost-accounting branches
- `lem-qa-shor-perfect-power-precheck` · lemma — Even and perfect-power preprocessing returns a proper factor
- `thm-qa-shor-residue-sampler-correct-and-cost` · theorem — Rejection sampling is uniform, almost surely terminating, and has expected linear bit cost
- `thm-qa-order-to-factor-correctness` · theorem — Order-to-factor output correctness
- `thm-qa-shor-factoring-cost` · theorem — Separate Shor factoring bit, gate, and query costs
- `thm-qa-shor-factoring-success` · theorem — Bounded-error success of Shor factoring

### `shors-factoring-algorithm-examples` — Shor’s Factoring Algorithm — Examples

- `ex-qa-shor-factorization-of-fifteen` · example — A Shor order sample for factoring fifteen
- `ex-qa-shor-factorization-retry-branches` · example — Shor factoring preprocessing and retry branches

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `shors-factoring-algorithm` requires `quantum-order-finding-and-rational-reconstruction`
- `shors-factoring-algorithm` requires `uniform-circuit-families-promise-problems-and-complexity`
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
