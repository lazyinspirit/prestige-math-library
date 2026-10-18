# Step 4 batch reviewer — batch **14**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **14**. Step-5 owning group: **q**.
Return `group: "q"` and `batches: ["14"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 14 | `finite-blocklength-and-reliability` | A | cost-constrained-gaussian-and-feedback-channels, concentration-inequalities-and-tail-bounds, detection-and-quantification-limits |
| 14 | `finite-blocklength-and-reliability-examples` | B | finite-blocklength-and-reliability |

## Your content, in full

### `finite-blocklength-and-reliability` — Finite-Blocklength Bounds and Reliability

- `lem-it-finite-affine-slice-error-bound` · lemma — Error bound for a finite simplex and affine slice
- `thm-it-berry-essen-independent-array` · theorem — Berry–Esseen bound for a finite independent array
- `def-it-one-letter-gallager-exponent-functions` · definition — One-letter Gallager and expurgated exponent functions
- `lem-it-dmc-mutual-information-concave-in-input` · lemma — Finite-channel mutual information is concave in the input law
- `lem-it-finite-pinsker-euclidean-bound` · lemma — Finite Pinsker inequality in Euclidean norm
- `lem-it-gallager-input-maxima-attained` · lemma — Gallager and expurgated input-law maxima are attained
- `def-it-channel-dispersion` · definition — Conditional information variance and DMC dispersion
- `def-it-gallager-and-expurgated-exponent-functions` · definition — Gallager, random-coding, expurgated, and sphere-packing functions
- `def-it-reliability-function` · definition — Average and maximal error reliability exponents
- `lem-it-dmc-capacity-output-law-is-unique` · lemma — The capacity-achieving output law is unique
- `lem-it-optimized-constant-composition-gallager-identity` · lemma — Globally optimized constant-composition and Gallager functions agree
- `thm-it-one-shot-decision-threshold-achievability` · theorem — Finite-DMC dependence-testing achievability bound
- `thm-it-one-shot-meta-converse` · theorem — Finite-DMC hypothesis-testing meta-converse
- `lem-it-dmc-caid-conditional-variance-identity` · lemma — A CAID's information-density variance equals its conditional dispersion
- `lem-it-dmc-dispersion-attains-minimum` · lemma — DMC minimum and maximum dispersion are attained
- `thm-it-dmc-uniform-quadratic-capacity-decay` · theorem — Finite-DMC information deficit controls squared distance to the CAID set
- `thm-it-expurgated-error-exponent-lower-bound` · theorem — Gallager expurgated exponent lower bound
- `thm-it-random-coding-error-exponent` · theorem — Gallager random-coding exponent lower bound
- `thm-it-sphere-packing-strict-feasibility-converse` · theorem — Sphere-packing converse above the finite-divergence threshold
- `thm-it-normal-approximation-nondegenerate-dmc` · theorem — Nondegenerate normal approximation for finite unconstrained DMCs
- `thm-it-error-exponent-zero-above-capacity` · theorem — The error exponent is zero above finite-DMC capacity

### `finite-blocklength-and-reliability-examples` — Finite-Blocklength Bounds and Reliability — Examples

- `cex-it-expected-random-code-error-does-not-give-maximal-error` · counterexample — Small expected average code error need not control maximal error
- `ex-it-dmc-one-shot-error-bound` · example — Exact evaluation of a one-use BSC dependence-testing bound
- `ex-it-meta-converse-binary-channel` · example — Exact beta value for a one-use BSC meta-converse test

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `finite-blocklength-and-reliability` requires `cost-constrained-gaussian-and-feedback-channels`
---

# Step 4 Alpha batch reviewer — read-only digest, `non-ml-math-remaining-81-2026-10-18`

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
