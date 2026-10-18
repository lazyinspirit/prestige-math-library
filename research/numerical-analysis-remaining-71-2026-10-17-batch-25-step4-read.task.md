# Step 4 batch reviewer — batch **25**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **25**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["25"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 25 | `stable-special-function-recurrences-and-certified-evaluation` | A | composite-quadrature-rules, gaussian-quadrature, the-gamma-function, outward-rounded-interval-and-ball-arithmetic, average-orders-divisor-sums-and-representation-counts |
| 25 | `stable-special-function-recurrences-and-certified-evaluation-examples` | B | stable-special-function-recurrences-and-certified-evaluation |

## Your content, in full

### `stable-special-function-recurrences-and-certified-evaluation` — Stable special function recurrences and certified evaluation

- `def-airy-initial-value-series` · definition — Airy initial-value series
- `def-certified-evaluation-result-contract` · definition — Certified special-function enclosure result
- `def-fresnel-erf-and-hypergeometric-series` · definition — Fresnel, error, and Gauss hypergeometric series
- `def-integer-order-bessel-series` · definition — Integer-order Bessel series
- `def-loggamma-right-halfplane-branch` · definition — Log-Gamma branch on the right half-plane
- `lem-explicit-euler-constant-enclosure` · lemma — Finite harmonic enclosure for Euler's constant
- `lem-gamma-functional-equation-meromorphic-extension` · lemma — Gamma functional equation away from the poles
- `def-spherical-bessel-and-hankel-functions` · definition — Spherical Bessel and outgoing Hankel function conventions
- `def-bessel-complementary-recurrence-solution` · definition — Complementary solution for the integer Bessel recurrence
- `def-erfcx-moment-sequence` · definition — Scaled complementary error function and its moments
- `def-loggamma-slit-plane-branch` · definition — Log-Gamma branch on the slit plane
- `lem-airy-series-coefficient-recurrence-and-tail` · lemma — Airy coefficient recurrence and geometric tail bounds
- `lem-erf-series-geometric-tail` · lemma — Error-function series geometric tail bound
- `lem-fresnel-series-geometric-tail` · lemma — Fresnel series geometric tail bounds
- `lem-gauss-hypergeometric-series-geometric-tail` · lemma — Gauss hypergeometric series geometric tail bound
- `lem-integer-order-bessel-series-tail` · lemma — Convergence and geometric tails for integer-order Bessel series
- `lem-loggamma-series-convergence-and-gamma-identity` · lemma — Weierstrass log-Gamma series converges to a Gamma branch
- `lem-spherical-bessel-and-hankel-radial-solutions` · lemma — Spherical Bessel and outgoing Hankel recurrences solve the radial Helmholtz equation
- `def-spherical-bessel-evaluation-contract` · definition — Scaled spherical Bessel evaluation on positive real arguments
- `alg-certified-fresnel-erf-hypergeometric-series` · algorithm — Finite certified power-series evaluation for Fresnel, erf, and Gauss functions
- `lem-airy-functions-have-negative-real-zeros` · lemma — The Airy Ai function has a negative real zero
- `lem-bessel-integral-representations-and-scaled-range` · lemma — Integral representations and a range bound for integer Bessel functions
- `lem-binet-loggamma-right-halfplane-identity` · lemma — Binet integral identity for the right-half-plane log-Gamma branch
- `lem-erfcx-moment-recurrence` · lemma — Moment recurrence for the scaled complementary error function
- `lem-integer-order-bessel-recurrences-and-ode` · lemma — Bessel differential equations and order recurrences from the series
- `lem-loggamma-product-tail-bound` · lemma — Explicit tail bound for the log-Gamma product series
- `lem-loggamma-shift-independent` · lemma — Shifted log-Gamma branch is independent of the shift
- `alg-certified-scaled-spherical-bessel-evaluation` · algorithm — Finite exact-interval evaluation of scaled spherical Bessel values
- `lem-bessel-integral-midpoint-error` · lemma — Composite midpoint enclosure for the integer Bessel integral
- `lem-bessel-j-zero-data-exclusion` · lemma — Adjacent initial Bessel values cannot both vanish
- `lem-erfcx-asymptotic-remainder` · lemma — Signed finite remainder for the erfcx asymptotic expansion
- `lem-erfcx-continued-fraction-enclosure` · lemma — Finite continued-fraction enclosure for erfcx
- `lem-scaled-modified-bessel-midpoint-error` · lemma — Composite midpoint enclosure for the scaled modified Bessel integral
- `lem-sectorial-stirling-explicit-remainder-bound` · lemma — Explicit sectorial remainder bound for the right-half-plane log-Gamma branch
- `thm-certified-fresnel-erf-hypergeometric-enclosures` · theorem — Soundness of the finite Fresnel, erf, and Gauss-series enclosures
- `thm-certified-scaled-spherical-bessel-enclosures` · theorem — Soundness and eventual absolute precision for spherical Bessel enclosures
- `alg-certified-erfcx-evaluation` · algorithm — Finite certified evaluation of the scaled complementary error function
- `alg-certified-gamma-loggamma-evaluation` · algorithm — Finite certified evaluation of Gamma and a continued log-Gamma branch
- `lem-bessel-casoratian-invariant-positive` · lemma — Positive discrete Wronskian for the Bessel recurrence pair
- `lem-finite-miller-terminal-error-identity` · lemma — Exact finite terminal-contamination error identity
- `thm-certified-erfcx-enclosures` · theorem — Soundness of finite erfcx enclosures
- `thm-certified-gamma-loggamma-enclosures` · theorem — Soundness of finite Gamma and log-Gamma enclosures
- `alg-certified-airy-evaluation` · algorithm — Finite certified Airy power-series evaluation
- `alg-certified-integer-order-bessel-evaluation` · algorithm — Finite certified evaluation of integer-order Bessel functions
- `thm-certified-airy-enclosures` · theorem — Soundness of finite Airy enclosures
- `thm-certified-integer-order-bessel-enclosures` · theorem — Soundness of finite integer-order Bessel enclosures

### `stable-special-function-recurrences-and-certified-evaluation-examples` — Stable special function recurrences and certified evaluation — Examples

- `ex-hypergeometric-branch-cut-domain` · example — The Gauss series disk and a continued logarithmic branch have different domains
- `ex-erfc-subtraction-cancellation` · example — Subtracting erf from one amplifies absolute input errors in the tail
- `ex-erfcx-asymptotic-optimal-truncation` · example — Least-term truncation of the erfcx asymptotic expansion
- `ex-forward-bessel-recurrence-loses-sign` · example — An arbitrarily small seed perturbation flips a later Bessel sign
- `ex-relative-error-near-an-airy-zero` · example — Relative error becomes unavailable at an Airy zero
- `ex-scaled-modified-bessel-overflow-avoidance` · example — Scaling keeps the modified Bessel value bounded as the unscaled value grows

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `gaussian-basis-integral-recurrences-and-boys-error` requires `stable-special-function-recurrences-and-certified-evaluation`
- `volume-integral-scattering-and-partial-wave-error` requires `stable-special-function-recurrences-and-certified-evaluation`
- `boundary-integral-equations-and-galerkin-bem` requires `stable-special-function-recurrences-and-certified-evaluation`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-analysis-remaining-71-2026-10-17`

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
