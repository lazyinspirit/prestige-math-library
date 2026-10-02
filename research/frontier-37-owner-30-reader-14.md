# Step 5a reader report — batch 14

Run: `frontier-37-owner-30`  
Role: reader  
Batch: `14`

## Inventory opened

Assigned pages:

- A page `the-branching-rule-and-the-young-graph` in `library/representation-theory/`.
- B page `the-branching-rule-and-the-young-graph-examples` in `library/representation-theory/`.

Assigned A-page items opened: `def-polytabloid-specht-module-over-an-arbitrary-field`, `lem-integral-specht-garnir-straightening-and-field-basis`, `def-corner-order-and-specht-deletion-map`, `lem-specht-branching-subspaces-are-invariant`, `lem-specht-branching-successive-quotients`, `thm-specht-restriction-branching-filtration`, `cor-complex-specht-restriction-branching-rule`, `thm-complex-specht-induction-branching-rule`, `def-young-graph`, `cor-paths-in-the-young-graph-index-standard-tableaux`, `lem-semistandard-tableau-homomorphisms-to-young-permutation-modules`, `lem-semistandard-homomorphisms-are-independent-and-dominance-triangular`, `lem-semistandard-homomorphisms-span-in-characteristic-zero`, `thm-youngs-rule-for-permutation-modules`, `def-commuting-symmetric-and-linear-actions-on-tensor-power`, `lem-tensor-place-operators-span-the-symmetric-centralizer`, `thm-schur-weyl-double-centralizer`, `lem-schur-weyl-length-cutoff-by-column-antisymmetrization`, `lem-schur-weyl-polytabloid-highest-weight`, and `thm-schur-weyl-decomposition-with-length-cutoff`.

Assigned B-page items opened: `ex-young-graph-through-s4`, `ex-youngs-rule-for-m-two-one`, `ex-schur-weyl-for-two-tensor-factors`, `ex-schur-weyl-for-c2-tensor-three`, and `cex-branching-filtration-need-not-split-in-modular-characteristic`.

The four prerequisite page summaries were also opened: `young-diagrams-tableaux-and-permutation-modules`, `specht-modules-and-the-irreducibles-of-the-symmetric-group`, `induced-representations-and-frobenius-reciprocity`, and `tensor-products-of-modules`. The relevant statements or definitions from the direct published item dependencies were opened: `cor-finite-iterated-tensor-products-represent-multilinear-maps`, `def-column-antisymmetrizer-polytabloid-and-specht-module`, `def-dominance-order-on-partitions`, `def-partition-young-diagram-and-conjugate-partition`, `def-removable-and-addable-nodes-of-a-partition`, `def-row-and-column-stabilizers-of-a-tableau`, `def-semistandard-tableau-and-kostka-number`, `def-symmetric-group`, `def-tabloid-and-column-orders-for-specht-straightening`, `def-young-subgroup-tabloid-and-permutation-module`, `def-young-tableau-standard-tableau-and-shape`, `lem-column-collision-causes-antisymmetrizer-cancellation`, `lem-largest-entry-of-a-standard-tableau-is-removable`, `lem-polytabloid-covariance-and-column-sign`, `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules`, `thm-complex-specht-modules-are-irreducible`, `thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules`, `thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order`, `thm-sign-is-a-homomorphism`, `thm-standard-polytabloid-basis`, and `thm-tensor-product-basis-from-bases`. To settle the coefficient-ring boundary, I also opened `def-commutative-ring` and `def-ring`.

Relevant external source locations were checked:

- [Mark Wildon, *Representation Theory of the Symmetric Group*](https://www.ma.rhul.ac.uk/~uvah099/Maths/Sym/SymGroup2014.pdf), Section 6: Theorem 6.8 gives the integral Garnir relation (PDF page 29, lines 2269–2308); Lemma 6.10 gives straightening toward standard polytabloids (PDF pages 30–31, lines 2353–2406).
- [Charlotte Chan, *Representation Theory of Symmetric Groups*](https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf), Theorem 4.16 (printed pages 18–19; PDF pages 19–20) states the field-uniform restriction filtration and its Specht quotients.
- [David A. Craven, *Groups, Geometries and Representation Theory*](https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf), Section 2.2, Theorem 2.7 gives complex branching; Section 2.4, Lemma 2.15 and Theorem 2.16 give the dominance and Young-rule statements (PDF extraction lines 1145–1162 and 1457–1469).
- [Andrew Snowden and Aleksander Horawa, *MATH 711: Representation Theory of Symmetric Groups*](https://people.maths.ox.ac.uk/horawa/math_711.pdf), Lemmas 2.45–2.46 (PDF page 23) concern the branching subspaces and quotients; Lemmas 3.26, 3.28, and 3.29 (PDF pages 37–39) cover independence, nonzero semistandard coefficients, and spanning for Young’s rule.
- [Etingof et al., *Introduction to Representation Theory*, Chapter 4](https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf), §4.18, Theorems 4.54 and 4.57, Lemma 4.56, and §4.19, Proposition 4.58 (PDF pages 18–20) support the double-centralizer and diagonal-operator span arguments.
- [Hsueh-Yung Lin, *Modern Algebra I*](https://homepage.ntu.edu.tw/~hsuehyunglin/Modern_Algebra_I.pdf), §27.3, Theorem 27.4, §27.4, Proposition 27.5, and §27.5, Exercise 27.7 and Corollary 27.8 (printed pages 71–74) state the double-centralizer, diagonal Lie-algebra action, length cutoff, and decomposition results.

## Repairs made

| Location | Defect and evidence | Repair |
|---|---|---|
| `items/def-polytabloid-specht-module-over-an-arbitrary-field.md`, Definition | The claim that every $e_t$ is nonzero fails for the zero ring. The published `def-ring` explicitly permits $1=0$; a free module over that ring is zero. | Retained the coefficient-one statement, made nonvanishing conditional on $R\ne0$, and stated the zero-ring case. Updated the contract’s zero-ring evidence. |
| `items/lem-integral-specht-garnir-straightening-and-field-basis.md`, Proof 2.1 | The old left-coset factorization put $(1-(xy))$ on the left of the sum; although $(xy)$ fixes the tabloid, it need not fix the summed vector, so the cancellation did not follow. The current published `lem-column-collision-causes-antisymmetrizer-cancellation`, Proof 1.2, uses right cosets so the factor annihilates the tabloid directly. | Factored over right cosets $k\langle(xy)\rangle$, obtaining $G_{X\cup Y}=\sum_k\operatorname{sgn}(k)k(1-(xy))$. Updated the proof contract. |
| `items/def-corner-order-and-specht-deletion-map.md`, Definition | For $\lambda=(1)$, shortening the removable row gives length zero; the original claim that it remains nonempty also encoded a trailing zero, which `def-partition-young-diagram-and-conjugate-partition` excludes. | Defined $[\lambda^{(i)}]$ by deleting the removable node and stated that a zero final part is omitted. Updated the boundary contract. |
| `items/lem-specht-branching-successive-quotients.md`, Proof 7.1 | $F$ has many nonzero elements; $e_{\bar t}$ is a basis vector, not the unique nonzero element of $S^\varnothing_F$. | Changed the phrase to the standard basis vector $e_{\bar t}=1$. Updated the boundary and derivation contract. |
| `items/thm-specht-restriction-branching-filtration.md`, Statement | Over an arbitrary field, Specht quotients need not be simple, so calling them “composition factors” is inaccurate. For example, the assigned $\mathbb F_2$ counterexample gives a proper invariant line in $S^{(2,1)}_{\mathbb F_2}$, which occurs as a deletion quotient. | Described them as the filtration’s successive quotients. Updated the contract to record that no simplicity is asserted. |
| `items/cor-paths-in-the-young-graph-index-standard-tableaux.md`, Remarks | The small-rank count claimed $f^{(2,1)}=1$, while the two standard tableaux listed in the assigned `ex-young-graph-through-s4` give $f^{(2,1)}=2$. | Corrected the count to $f^{(2,1)}=2$ and updated the boundary contract. |
| `items/lem-semistandard-homomorphisms-are-independent-and-dominance-triangular.md`, Proof 1.3 | The displayed second-difference formula uses $N_f(0,j)$ for $i=1$, but only the left boundary $N_f(i,0)$ had been defined. | Defined both zero-index boundaries. Updated the proof and endpoint contract evidence. |
| `items/def-commuting-symmetric-and-linear-actions-on-tensor-power.md`, Definition | The line $\mathbf 1+tT$ can be singular, although the preceding group action was defined only for invertible maps. | Clarified that its tensor power is the tensor power of an endomorphism, and agrees with the group action at invertible points. Updated the degenerate-case contract. |
| `items/lem-tensor-place-operators-span-the-symmetric-centralizer.md`, Proof 1.2 | The proof established only that pure powers are invariant; it omitted why they span all invariant tensors. | Added the inclusion-exclusion polarization identity expressing each symmetrized pure tensor as a sum of pure powers. Updated the derivation contract. |
| `items/lem-schur-weyl-length-cutoff-by-column-antisymmetrization.md`, Proof 1.2 | As in the Garnir proof, the old subgroup-on-the-left coset factor did not act directly on the tensor fixed by the transposition. | Used right cosets $k\langle\tau\rangle$ to obtain $A_Z=\sum_k\operatorname{sgn}(k)k(1-\tau)$. Updated the derivation contract. |
| `items/thm-schur-weyl-double-centralizer.md`, Proof 4.1 | The expression combining $F$ with a direct sum of block operators was malformed and did not state the block reduction clearly. | Replaced it with the precise conclusion that off-diagonal blocks vanish and each diagonal block commutes with the full endomorphism algebra on its multiplicity factor. Updated the derivation contract. |
| `items/ex-schur-weyl-for-two-tensor-factors.md`, Proof 2.2 | With $s_{ii}=e_i\otimes e_i+e_i\otimes e_i$, the stated symmetric-basis expansion doubled diagonal coefficients. | Defined $s_{ii}=e_i\otimes e_i$ separately from $s_{ij}$ for $i<j$ and adjusted the independence argument. Updated the derivation contract. |
| `items/lem-specht-branching-subspaces-are-invariant.md`, Remarks | The remark referred to nonexistent or mismatched proof steps. | Corrected the step references to the straightening, move-order, finite induction, and row-control steps. |
| `library/representation-theory/the-branching-rule-and-the-young-graph.md`, summary | It said restriction theory was developed over arbitrary commutative rings, but only the Specht construction is over rings; the restriction filtration is proved over fields. | Clarified the ring scope and field scope separately. |

## Page verdicts

- **A page `the-branching-rule-and-the-young-graph`:** accurate after the scope correction; its branching, Young-rule, and Schur–Weyl summaries match the assigned items.
- **B page `the-branching-rule-and-the-young-graph-examples`:** accurate; its examples and modular nonsplitting summary match the opened items. No B-page prose was edited.

## Validation and remaining issues

All 13 changed item files were run through the requested `reflow` and `precheck` commands. Every command exited 0. Precheck passed for all 10 theorem, lemma, and example items; the 3 definition items reported 0 checked and 0 failing. No `verification.judge` record was present in the changed item frontmatter, so none was stale or removed. The batch proof-contract file was updated for each material item repair and parsed as valid JSON with 25 contracts for 25 scoped items.

Uneditable defects: none found.  
Blocker: none.

## Coverage note

I opened all 25 assigned items, both assigned pages, the four required-page summaries, and the relevant definition or statement clauses of the direct published item dependencies. I checked the cited source sections relevant to branching, Garnir straightening, Young’s rule, and Schur–Weyl duality; unrelated portions of those works were not read. No mathematical uncertainty remains in batch 14.
