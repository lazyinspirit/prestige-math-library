# Step 4 batch reviewer — batch **15**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **15**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["15"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 15 | `modular-branching-and-the-good-node-crystal` | A | integral-specht-modules-and-modular-simple-modules, cores-quotients-and-blocks-of-symmetric-groups, type-a-hecke-specht-modules-and-cellular-bases, the-branching-rule-and-the-young-graph, jucys-murphy-elements-and-seminormal-forms, group-cohomology-as-a-derived-functor, ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison |
| 15 | `modular-branching-and-the-good-node-crystal-examples` | B | modular-branching-and-the-good-node-crystal |

## Your content, in full

### `modular-branching-and-the-good-node-crystal` — Modular Branching and the Good-Node Crystal

- `lem-integral-jucys-murphy-symmetric-polynomials-span-the-center` · lemma — Integral symmetric Jucys–Murphy polynomials span the center
- `def-generalized-jm-primary-idempotents-and-residue-summand-functors` · definition — Generalized Jucys-Murphy primary idempotents and the residue-summand functors $E_i$, $F_i$
- `def-residue-signature-normal-good-conormal-and-cogood-nodes` · definition — Residue signatures, normal, good, conormal and cogood nodes
- `lem-finite-group-induction-is-coinduction-and-thus-biadjoint` · lemma — Finite-group induction is coinduction, hence biadjoint to restriction
- `cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues` · corollary — The socle of an uncoloured modular restriction is the multiplicity-free sum over the good residues
- `def-good-node-and-cogood-node-crystal-operators` · definition — Good-node deletion and cogood-node addition operators
- `prop-every-p-restricted-partition-is-reached-by-cogood-node-additions` · proposition — Every $p$-restricted partition is reached from the empty partition by cogood additions
- `rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels` · remark — The crystal identification does not elementarily identify the cellular simple labels
- `lem-type-a-modular-root-interval-essential-subset-basis-and-count` · lemma — An integral essential-subset basis and count for type-A root intervals
- `thm-kleshchev-first-level-branching-multiplicity` · theorem — Kleshchev's first-level branching multiplicity
- `thm-normal-node-composition-multiplicities-under-residue-restriction` · theorem — Normal-node composition multiplicities under residue restriction
- `thm-conormal-node-composition-multiplicities-under-residue-induction` · theorem — Conormal-node composition multiplicities under residue induction
- `thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction` · theorem — The good node gives the simple socle and head of the residue restriction
- `thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction` · theorem — The cogood node gives the simple socle and head of the residue induction
- `prop-schur-functor-compares-first-level-branching-with-hecke-restriction` · proposition — The Schur functor compares first-level branching with Hecke restriction
- `lem-general-hecke-residue-branching-endpoints-from-normalized-schur-cells` · lemma — General Hecke residue branching endpoints from normalized Schur cells

### `modular-branching-and-the-good-node-crystal-examples` — Modular Branching and the Good-Node Crystal — Examples

- `ex-good-node-path-from-empty-to-a-p-restricted-partition` · example — A full cogood-addition path from the empty partition to (3,1,1) at p = 3
- `ex-normal-and-good-nodes-for-a-large-partition` · example — Normal and good nodes for the partition (6,4,4,3,2)

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `modular-branching-and-the-good-node-crystal` requires `cores-quotients-and-blocks-of-symmetric-groups`
- `modular-branching-and-the-good-node-crystal` requires `type-a-hecke-specht-modules-and-cellular-bases`
- `modular-branching-and-the-good-node-crystal` requires `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison`
- `level-one-fock-space-and-residue-crystals` requires `modular-branching-and-the-good-node-crystal`
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
