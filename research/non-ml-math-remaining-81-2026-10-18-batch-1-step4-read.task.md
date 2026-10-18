# Step 4 batch reviewer — batch **1**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **1**. Step-5 owning group: **g**.
Return `group: "g"` and `batches: ["1"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 1 | `frattini-subgroups-and-the-burnside-basis-theorem` | A | sylow-theorems-and-nilpotent-groups |
| 1 | `frattini-subgroups-and-the-burnside-basis-theorem-examples` | B | frattini-subgroups-and-the-burnside-basis-theorem, primitive-roots-and-unit-groups-modulo-n |

## Your content, in full

### `frattini-subgroups-and-the-burnside-basis-theorem` — Frattini Subgroups and the Burnside Basis Theorem

- `lem-frattini-subgroup-is-characteristic` · lemma — The Frattini subgroup of a finite group is characteristic
- `cor-generation-is-detected-modulo-the-frattini-subgroup` · corollary — Generation of a finite group is detected modulo its Frattini subgroup
- `def-elementary-abelian-p-group` · definition — Elementary abelian $p$-groups
- `lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces` · lemma — An elementary abelian $p$-group has a canonical $\mathbb F_p$-vector-space structure
- `def-fp-basis-of-an-elementary-abelian-p-group` · definition — $\mathbb F_p$-spanning sets, independence, and bases in an elementary abelian $p$-group
- `lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension` · lemma — Finite elementary abelian $p$-groups have bases, basis extension, and a well-defined dimension
- `def-pth-power-subgroup-of-a-group` · definition — The $p$th-power subgroup $G^p$
- `thm-frattini-quotient-is-the-largest-elementary-abelian-quotient` · theorem — The Frattini quotient is the largest elementary abelian quotient of a finite $p$-group
- `thm-frattini-subgroup-formula-for-a-finite-p-group` · theorem — $\Phi(P)=P'P^p$ for a finite $p$-group
- `prop-frattini-subgroup-monotonicity-for-subgroups-of-finite-p-groups` · proposition — If $H\le P$ are finite $p$-groups, then $\Phi(H)\le\Phi(P)$
- `prop-frattini-subgroup-of-a-quotient-finite-p-group` · proposition — $\Phi(P/N)=\Phi(P)N/N$ for a normal subgroup of a finite $p$-group
- `prop-frattini-subgroup-of-a-direct-product-of-finite-p-groups` · proposition — $\Phi(P\times Q)=\Phi(P)\times\Phi(Q)$ for finite $p$-groups
- `cor-frattini-subgroup-of-a-finite-two-group-is-the-square-subgroup` · corollary — $\Phi(P)=P^2$ for a finite $2$-group
- `cor-frattini-free-finite-p-groups-are-elementary-abelian` · corollary — A finite $p$-group has trivial Frattini subgroup exactly when it is elementary abelian
- `def-minimal-generating-set-of-a-group` · definition — Minimal generating sets of a group
- `def-generator-rank-of-a-finite-p-group` · definition — The generator rank $d(P)$ of a finite $p$-group
- `thm-burnside-basis-theorem` · theorem — Burnside Basis Theorem
- `cor-minimal-generating-sets-of-a-finite-p-group-have-equal-size` · corollary — Minimal generating sets of a finite $p$-group have size $d(P)$
- `cor-every-nonfrattini-element-belongs-to-a-minimal-generating-set` · corollary — Every element outside $\Phi(P)$ belongs to a minimal generating set of $P$
- `cor-nontrivial-finite-p-group-is-cyclic-iff-generator-rank-one` · corollary — A nontrivial finite $p$-group is cyclic exactly when $d(P)=1$
- `cor-maximal-subgroups-of-a-finite-p-group-are-frattini-hyperplanes` · corollary — Maximal subgroups of a finite $p$-group are the inverse images of Frattini hyperplanes
- `thm-automorphisms-act-linearly-on-the-frattini-quotient` · theorem — Automorphisms act linearly on the Frattini quotient
- `thm-hall-burnside-automorphism-theorem` · theorem — Hall–Burnside: coprime automorphisms are detected on the Frattini quotient
- `cor-kernel-of-the-action-on-the-frattini-quotient-is-a-p-group` · corollary — The kernel of the automorphism action on $P/\Phi(P)$ is a $p$-group

### `frattini-subgroups-and-the-burnside-basis-theorem-examples` — Frattini Subgroups and the Burnside Basis Theorem — Examples

- `ex-frattini-subgroup-of-a-cyclic-p-group` · example — The Frattini subgroup of a nontrivial cyclic $p$-group
- `ex-frattini-subgroup-of-an-elementary-abelian-p-group` · example — The Frattini subgroup of $(\mathbb Z/p)^n$ is trivial
- `ex-frattini-subgroups-of-dihedral-and-quaternion-groups` · example — The Frattini subgroups of the dihedral and quaternion groups of order eight
- `ex-generator-rank-of-upper-unitriangular-groups` · example — The $3\times3$ upper-unitriangular group over a prime field has generator rank two
- `ex-maximal-subgroups-as-frattini-hyperplanes` · example — The maximal subgroups of the dihedral group of order eight as Frattini hyperplanes
- `cex-frattini-image-under-a-nonsurjective-homomorphism` · counterexample — A nonsurjective homomorphism need not carry the Frattini subgroup into the target Frattini subgroup
- `cex-fitting-centralizer-without-solvability` · counterexample — The Fitting subgroup of $A_5$ does not contain its centralizer
- `ex-hall-burnside-detects-a-nontrivial-coprime-automorphism` · example — Inversion on $C_3$ is detected on its Frattini quotient
- `fs-the-frattini-subgroup-is-the-union-of-the-maximal-subgroups` · false-statement — FALSE: the Frattini subgroup is the union of the maximal subgroups
- `fs-the-frattini-subgroup-is-functorial-for-all-homomorphisms` · false-statement — FALSE: every homomorphism carries the Frattini subgroup into the target Frattini subgroup
- `fs-every-minimal-generating-set-of-an-arbitrary-finite-group-has-the-same-size` · false-statement — FALSE: all minimal generating sets of a finite group have the same size
- `fs-centralizer-of-the-fitting-subgroup-is-always-contained-in-the-fitting-subgroup` · false-statement — FALSE: the Fitting subgroup always contains its centralizer

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
No dependency edge crosses this batch boundary.
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
