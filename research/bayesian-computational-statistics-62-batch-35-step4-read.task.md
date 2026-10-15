# Step 4 batch reviewer — batch **35**, run `bayesian-computational-statistics-62`

You are the only reviewer for batch **35**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["35"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 35 | `mcmc-ergodicity-and-mixing` | A | gibbs-sampling-and-scan-schemes |
| 35 | `mcmc-ergodicity-and-mixing-examples` | B | mcmc-ergodicity-and-mixing |

## Your content, in full

### `mcmc-ergodicity-and-mixing` — General-state MCMC ergodicity and mixing

- `lem-total-variation-coupling-and-kernel-contraction` · lemma — Total variation duality, kernel contraction, and coupling bound
- `def-petite-set-for-markov-kernel` · definition — Petite sets for a Markov kernel
- `def-phi-irreducible-chain` · definition — Phi-irreducibility for a general-state Markov kernel
- `def-small-set-minorization-and-drift` · definition — Small-set minorization and geometric drift
- `lem-countably-generated-kernel-lebesgue-decomposition` · lemma — Measurable Lebesgue decomposition of a kernel on a countably generated space
- `lem-positive-triple-set-yields-uniform-overlap` · lemma — A positive triple set has uniformly overlapping sections
- `def-general-state-aperiodic-markov-chain` · definition — Aperiodicity for a general-state Markov kernel
- `def-harris-recurrent-markov-chain` · definition — Harris recurrence relative to an irreducibility measure
- `lem-bivariate-drift-minorization-coupling-rate` · lemma — A bivariate drift and minorization bound geometric coupling error
- `lem-drift-sublevel-union-is-petite` · lemma — A drift sublevel enlargement of a small set is petite
- `lem-invariant-law-integrates-bounded-set-drift` · lemma — An invariant law integrates a drift function bounded on its small set
- `lem-invariant-law-positive-set-and-almost-sure-hitting` · lemma — Invariant mass and almost-sure hitting of accessible sets
- `lem-iterated-kernel-density-convolution-bounds` · lemma — Iterated kernel densities retain convolution lower bounds
- `thm-uniform-ergodicity-from-whole-space-minorization` · theorem — Whole-space minorization gives uniform geometric ergodicity
- `lem-aperiodic-minorization-times-are-cofinite` · lemma — Aperiodicity makes minorization times eventually consecutive
- `lem-phi-irreducible-chain-has-small-set` · lemma — A countably generated phi-irreducible chain has a positive-measure small set
- `lem-aperiodic-petite-set-with-accessible-small-set-is-small` · lemma — A petite drift enlargement is small under aperiodicity
- `lem-small-set-coupling-converges-from-almost-every-start` · lemma — Small-set coupling yields almost-everywhere total-variation convergence
- `lem-geometric-drift-minorization-reduces-to-bounded-small-set` · lemma — Geometric drift yields a bounded small set and bivariate drift
- `thm-general-state-markov-chain-convergence-under-recurrence-conditions` · theorem — General-state Markov-chain convergence under recurrence conditions
- `thm-geometric-ergodicity-under-drift-and-minorization` · theorem — Geometric ergodicity under drift and small-set minorization

### `mcmc-ergodicity-and-mixing-examples` — General-state MCMC ergodicity and mixing — Examples

- `ex-null-set-start-fails-total-variation-convergence` · example — A phi-irreducible chain can fail to converge from a pi-null start
- `ex-periodic-finite-chain-fails-time-convergence` · example — A finite periodic chain need not converge in total variation
- `ex-uniformly-ergodic-chains-can-mix-arbitrarily-slowly` · example — Uniform ergodicity gives no uniform practical mixing time
- `ex-gibbs-chain-invariant-but-reducible` · example — An invariant Gibbs target can still give reducible dynamics
- `ex-sticky-general-state-chain-is-not-geometrically-ergodic` · example — A sticky general-state chain can converge without a geometric rate
- `ex-drift-minorization-geometric-ergodicity-on-a-birth-death-chain` · example — Drift and minorization certify geometric ergodicity

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `mcmc-ergodicity-and-mixing` requires `gibbs-sampling-and-scan-schemes`
- `mcmc-clt-and-monte-carlo-standard-error` requires `mcmc-ergodicity-and-mixing`
- `adaptive-mcmc-convergence-and-limitations` requires `mcmc-ergodicity-and-mixing`
---

# Step 4 Alpha batch reviewer — read-only digest, `bayesian-computational-statistics-62`

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
