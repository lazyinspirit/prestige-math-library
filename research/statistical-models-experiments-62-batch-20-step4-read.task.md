# Step 4 batch reviewer — batch **20**, run `statistical-models-experiments-62`

You are the only reviewer for batch **20**. Step-5 owning group: **g**.
Return `group: "g"` and `batches: ["20"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 20 | `structural-causal-models-dags-and-adjustment` | A | potential-outcomes-and-causal-identification, statistical-experiments-models-and-identifiability, markov-kernels-and-markov-chains, conditional-distributions-and-regular-conditional-probability, independence-borel-cantelli-and-zero-one-laws |
| 20 | `structural-causal-models-dags-and-adjustment-examples` | B | structural-causal-models-dags-and-adjustment |

## Your content, in full

### `structural-causal-models-dags-and-adjustment` — SCM, DAGs, adjustment

- `def-d-separation-in-a-dag` · definition — Paths, active paths, and d-separation in a finite DAG
- `lem-finite-products-of-probability-kernels` · lemma — Finite products of probability kernels are probability kernels
- `def-recursive-structural-causal-model-and-dag` · definition — Recursive structural causal models on finite DAGs
- `def-ancestral-moral-graph-of-a-dag` · definition — The ancestral moral graph of a DAG
- `def-faithfulness-of-a-dag-model` · definition — Faithfulness of a law to a DAG
- `lem-recursive-scm-topological-kernel-factorization` · lemma — A Markovian recursive SCM has a topological kernel factorization
- `lem-active-routes-in-a-finite-dag-have-active-paths` · lemma — Every active finite route contains an active path
- `lem-d-separation-ancestral-moral-separation` · lemma — D-separation is separation in the ancestral moral graph
- `lem-conditional-independence-under-kernel-extension-and-conditioning` · lemma — Conditional independence under kernel extension and conditioning
- `thm-dag-factorization-implies-d-separation-conditional-independence` · theorem — DAG factorization implies the global Markov property
- `lem-backdoor-criterion-implies-counterfactual-exchangeability` · lemma — The backdoor criterion implies conditional exchangeability
- `thm-backdoor-adjustment-sufficiency` · theorem — Backdoor adjustment identifies an interventional law
- `lem-frontdoor-interventional-identities` · lemma — Counterfactual identities under the front-door conditions
- `thm-frontdoor-adjustment-sufficiency` · theorem — Front-door adjustment identifies an interventional mean

### `structural-causal-models-dags-and-adjustment-examples` — SCM, DAGs, adjustment — Examples

- `ex-confounding-and-collider-conditioning` · example — A confounder and a conditioned collider
- `ex-same-observed-law-different-intervention-law` · example — The same observed law can have different intervention laws
- `ex-frontdoor-adjustment-binary-model` · example — A binary SCM where front-door adjustment works

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `structural-causal-models-dags-and-adjustment` requires `potential-outcomes-and-causal-identification`
- `mediation-effects-and-identification` requires `structural-causal-models-dags-and-adjustment`
---

# Step 4 Alpha batch reviewer — read-only digest, `statistical-models-experiments-62`

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
