# Step 4 batch reviewer — batch **14**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **14**. Step-5 owning group: **n**.
Return `group: "n"` and `batches: ["14"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 14 | `outward-rounded-interval-and-ball-arithmetic` | A | matrix-norms-condition-numbers-and-numerical-stability, finite-precision-direct-factorizations |
| 14 | `outward-rounded-interval-and-ball-arithmetic-examples` | B | outward-rounded-interval-and-ball-arithmetic |

## Your content, in full

### `outward-rounded-interval-and-ball-arithmetic` — Outward rounded interval and ball arithmetic

- `def-complete-ordered-real-field` · definition — Dedekind-complete ordered real field
- `def-continuity-and-derivative-on-real-interval` · definition — Continuity and derivative on a real interval
- `def-dyadic-floating-point-format-and-directed-rounding` · definition — Dyadic floating-point format and directed rounding
- `lem-archimedean-property-from-completeness` · lemma — Dedekind completeness implies the Archimedean property
- `lem-closed-interval-compactness-from-completeness` · lemma — Closed real intervals are compact by completeness
- `lem-nonnegative-square-root-exists-and-unique` · lemma — Nonnegative real square roots exist uniquely
- `alg-dyadic-square-root-bisection` · algorithm — Exact dyadic bisection for square-root endpoints
- `def-intervals-rectangles-and-complex-balls` · definition — Real intervals, complex rectangles and ball enclosures
- `lem-directed-dyadic-rounding-enclosure-and-error` · lemma — Directed dyadic rounding encloses with explicit underflow and overflow bounds
- `def-outward-rounded-interval-and-ball-operations` · definition — Outward-rounded interval, rectangle and ball operations
- `lem-real-and-complex-modulus-rules` · lemma — Real and complex modulus product and triangle inequalities
- `thm-dyadic-square-root-bisection-encloses` · theorem — Dyadic square-root bisection gives outward endpoints
- `def-centered-taylor-model-with-derivative-interval` · definition — Centered Taylor model with derivative-interval remainder
- `lem-absolutely-convergent-series-cauchy-product` · lemma — Cauchy products of absolutely convergent series multiply their sums
- `lem-derivative-algebra-and-chain-rules` · lemma — Sum, product, quotient, and chain rules from difference quotients
- `lem-elementary-power-series-converge-uniformly-on-bounded-sets` · lemma — Elementary factorial and geometric series converge uniformly
- `lem-extreme-value-theorem-from-compactness` · lemma — Continuous functions on a closed interval attain their extrema
- `lem-power-series-termwise-differentiation` · lemma — Power series may be differentiated term by term inside their radius
- `thm-outward-rounded-operations-are-isotone-and-dag-sound` · theorem — Outward-rounded operations are inclusion-isotone and enclose DAG evaluations
- `lem-continuous-functions-riemann-integrable` · lemma — Continuous functions have an oriented Riemann integral
- `lem-rolle-theorem-from-extreme-values` · lemma — Rolle's theorem from attained extrema
- `def-real-elementary-functions-and-domains` · definition — Real elementary functions and their domains
- `lem-mean-value-theorem-on-closed-interval` · lemma — Mean value theorem on a closed real interval
- `lem-riemann-integral-linearity` · lemma — The oriented Riemann integral is linear in continuous integrands
- `lem-fundamental-theorem-and-integration-by-parts` · lemma — The fundamental theorem of calculus and integration by parts
- `lem-range-reduced-exp-log-and-arctan-series-enclosures` · lemma — Range-reduced exponential, logarithm and arctangent series have certified tails
- `lem-taylor-lagrange-remainder-from-mean-value` · lemma — Taylor's Lagrange remainder follows from repeated Rolle steps
- `lem-taylor-integral-remainder` · lemma — Taylor's theorem with an integral remainder
- `lem-trigonometric-identities-machin-and-range-reduction` · lemma — Trigonometric identities, Machin's formula and reduced Taylor tails
- `alg-certified-elementary-range-evaluation` · algorithm — Certified range evaluation for elementary real and complex functions
- `thm-centered-taylor-model-encloses-function-range` · theorem — Centered Taylor models with derivative intervals enclose the function range
- `alg-budgeted-validated-range-evaluation` · algorithm — Finite-budget validated range evaluation
- `thm-real-elementary-range-enclosures` · theorem — Certified real elementary-function evaluations enclose their ranges
- `thm-complex-elementary-range-enclosures` · theorem — Certified complex exponential and principal logarithm enclose their ranges
- `thm-budgeted-range-evaluation-terminates-and-is-sound` · theorem — Budgeted range evaluation terminates and certifies only sound enclosures

### `outward-rounded-interval-and-ball-arithmetic-examples` — Outward rounded interval and ball arithmetic — Examples

- `ex-division-by-interval-containing-zero` · example — Division of [1,2] by [-1,1] has no finite hull
- `ex-interval-subtraction-dependency` · example — Natural interval subtraction loses repeated-input correlation
- `ex-certified-sine-near-a-multiple-of-pi` · example — Certified sine range near a multiple of pi

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `outward-rounded-interval-and-ball-arithmetic` requires `finite-precision-direct-factorizations`
- `finite-bit-random-streams-and-variate-generation` requires `outward-rounded-interval-and-ball-arithmetic`
- `adaptive-ode-solvers-and-error-estimation` requires `outward-rounded-interval-and-ball-arithmetic`
- `computed-fast-transforms-and-convolution` requires `outward-rounded-interval-and-ball-arithmetic`
- `adaptive-quadrature-and-error-indicators` requires `outward-rounded-interval-and-ball-arithmetic`
- `verified-linear-systems-and-spectral-enclosures` requires `outward-rounded-interval-and-ball-arithmetic`
- `interval-newton-krawczyk-and-polynomial-root-isolation` requires `outward-rounded-interval-and-ball-arithmetic`
- `global-optimization-and-certified-branch-and-bound` requires `outward-rounded-interval-and-ball-arithmetic`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-optimization-dynamics-2026-10-16`

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
