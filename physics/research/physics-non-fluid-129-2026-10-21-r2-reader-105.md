# Step 3a reader report — batch 105

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: independent reader  
Scope: batch `105`

## Inventory opened

Assigned pages:

- `library/quantum-statistical-mechanics/qsmx-quantum-double.md` (A)
- `library/quantum-statistical-mechanics/qsmx-quantum-double-examples.md` (B)

Assigned items, read in dependency order:

- `def-qsmx-finite-group-double`
- `thm-qsmx-double-hopf-structure`
- `def-qsmx-finite-group-lattice-operators`
- `thm-qsmx-double-lattice-projectors`
- `lem-qsmx-finite-group-irrep-dimension-square-sum`
- `thm-qsmx-double-sector-labels`
- `ex-qsmx-double-z2`

Mathematical and in-run context opened to check those claims:

- `def-qsm-local-spin-algebras`, `def-hh-bialgebra-and-bialgebra-map`, `lem-hh-convolution-algebra-associativity-and-unit`, `def-hh-hopf-algebra-and-antipode`
- `def-finite-dimensional-representation-of-a-group-over-a-field`, `def-subrepresentation-and-irreducible-representation`, `thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order`, and `def-axiom-of-choice`
- `def-qsmx-toric-cellular-hamiltonian`, `thm-qsmx-toric-ground-space`, `lem-qsmx-toric-local-pauli-centralizer`, and `thm-qsmx-toric-strings-and-local-tests` (batch 104 context)
- For the assigned lemma repair: `def-algebraically-closed-field`, `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`, and `cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue`
- For the toric proof gaps: `cor-matrix-rank-nullity` and `lem-qsm-local-hermitian-diagonalization`
- Required page context: `qsmx-topological-lattice`, `qsm-quasilocal-states`, `maschkes-theorem-and-complete-reducibility`, `bialgebras-convolution-and-antipode-identities`, and `the-group-algebra-and-representations`.

## Review and page verdicts

The A-page carrier contains only its draft metadata and item placements. The six assigned A-page items were checked. Their group-double formulas, Hopf-* verification, oriented gauge operators, commuting projectors, representation classification, and hypotheses are mathematically coherent as written, subject to the listed dependency gaps in the batch-104 toric items used by the B-page example.

The B page also contains only draft metadata and its example placement. The example correctly derives the four one-dimensional sectors of $D(\mathbb Z_2)$ and compares the character value with the stated finite-torus Pauli commutation sign. It explicitly limits that comparison to algebraic signs and makes no general braiding or physical-realization claim. Its toric suppliers have the unresolved proof gaps listed below.

The TikZ diagram in `def-qsmx-finite-group-lattice-operators` matches its boundary-walk convention: the shown reverse traversals are $a_3^{-1}$ and $a_4^{-1}$, giving $g_1g_2g_3^{-1}g_4^{-1}$; a gauge change at the base vertex conjugates this product. The diagram is explanatory. The fundamental-cycle diagram in the batch-104 string theorem was also checked: the primal and dual cycles close under the indicated side identifications and cross once, as claimed; its proof does not rely on the diagram.

The cited sources were checked at the relevant sections: Kitaev, *Fault-tolerant quantum computation by anyons*, §§4, 5.1 and 5.2 (arXiv:quant-ph/9707021; especially eqs. (9)–(13), (17)–(19), and (27)–(29)); de Wild Propitius and Bais, *Discrete Gauge Theories*, §2.1, eqs. (2.1.1)–(2.1.8) (arXiv:hep-th/9511201); and Cowtan and Majid, *Quantum Double Aspects of Surface Code Models*, §3.2 (arXiv:2107.04411). The latter source states the conjugacy-class/centralizer classification and its explicit module construction. These source checks support the cited formulas; the local proofs were reviewed independently.

## Repairs

- `lem-qsmx-finite-group-irrep-dimension-square-sum`: added the exact algebraic-closure and eigenvalue prerequisites and stated their use in Proof step 3.1. The proof contract now records F4–F6 and their step use. The prior item had no `verification.judge` record to remove. Reflow reported unchanged; precheck passed.
- `thm-qsmx-double-hopf-structure`: inserted blank paragraph boundaries between consecutive proof steps to satisfy the required proof layout. The mathematical text and contract are unchanged.
- Final `proof-layout` command on both changed items: `2 items, 14 steps, 0 defects`.

## Findings not editable in this assignment

All five findings are in batch-104 suppliers, outside the authorized write scope. Their consumer is the assigned `ex-qsmx-double-z2`, whose dependency closure reaches each supplier through `thm-qsmx-toric-strings-and-local-tests`. Each finding is bound to the exact batch-104 pre-reader snapshot in the companion findings JSON.

1. `thm-qsmx-toric-ground-space`, Proof step 1.3: the rank calculations invoke rank-nullity without an exact mathematical supplier in `deps`. The definition supplies the incidence maps, but not the finite-dimensional rank-nullity result. Add an exact supplier such as `cor-matrix-rank-nullity` or prove the required rank identities locally.
2. `thm-qsmx-toric-ground-space`, Proof step 2.1: the dimension conclusion uses `Tr(Π)=rank(Π)` for an orthogonal projection and the tensor-product trace formula. The item's cited facts and earlier steps do not state or prove these identities; its finite-local-algebra definition supplies a trace definition and basis-independence, not these formulas. Give the finite-dimensional trace arguments or add exact suppliers.
3. `thm-qsmx-toric-ground-space`, Proof step 2.2: the energy lower bound reasons about a joint eigenvector for the finite family of commuting self-adjoint stabilizers. The available items establish self-adjointness and pairwise commutation, but not the simultaneous-diagonalization result needed to obtain a joint eigenbasis. Prove it by induction using invariant eigenspaces or add an exact supplier.
4. `lem-qsmx-toric-local-pauli-centralizer`, Proof step 1.2: the homology-dimension calculation invokes rank-nullity and the finite-dimensional quotient-dimension formula without exact suppliers. The toric definition supplies the chain maps and connectedness assumptions, not those linear-algebra results. Add suppliers or give a finite basis argument.
5. `thm-qsmx-toric-strings-and-local-tests`, Facts & Assumptions F1 and Proof step 1.2: F1 calls $X(a)Z(b)$ the canonical Pauli basis, but the linked toric definition only defines these operators. The expansion of every supported operator requires proving that the one-qubit matrices $I,X,Z,XZ$ form a basis of $M_2(\mathbb C)$ and that their tensor products form a basis of the supported matrix algebra, or citing that result.

The batch-104 pre-reader snapshot hashes matched the ground-space and string-theorem bytes when those arguments were reviewed. Their current raw hashes later diverged before this report, so the findings bind the immutable pre snapshots and do not assert a defect in any revised current bytes. The local-centralizer carrier still matched its pre snapshot at the final hash check. No revised batch-104 content was read or adjudicated.

## Blocker and coverage limits

The assigned page manifest still mirrors the lemma's old dependency list; the repair adds three exact mathematical suppliers. The reader write scope did not include manifest maintenance, so the owner must reconcile that metadata before the next dependency/content gate. This does not block the independent mathematical review itself.

This review checked the exact assigned carriers and the dependency statements needed for their uses; it did not re-audit every transitive proof behind published mathematics suppliers. The mathematical items make no empirical observation or statistical inference, so no experimental evidence claims were in scope. The changed batch-104 carriers are reported only at their witnessed pre-reader bytes.
