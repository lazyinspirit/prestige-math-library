# Step 3a reader report — batch 75

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (`reader-75`)

## Opened inventory

Assigned pages:

- `qftx-ribbon-braid-representations` — `library/quantum-field-theory-mathematics/qftx-ribbon-braid-representations.md` (A page).
- `qftx-ribbon-braid-representations-examples` — `library/quantum-field-theory-mathematics/qftx-ribbon-braid-representations-examples.md` (B page).

Assigned items, read in dependency order:

- `def-qftx-braided-line-model`
- `lem-qftx-anyonic-vacuum-reverse-adjacent-relation`
- `thm-qftx-tl-hecke-braid`
- `prop-qftx-coxeter-specialization`
- `ex-qftx-vacuum-channel-exchange`

Opened all 21 unique direct item dependencies: `def-tensor-and-multitensor-category`, `def-braiding`, `thm-braided-coherence-via-underlying-braids`, `def-braid-group-by-the-artin-presentation`, `thm-von-dyck`, `thm-hh-finite-double-hopf-structure-and-canonical-r`, `def-anyonic-fusion-path-space`, `thm-anyonic-path-space-is-hilbert-under-unitarity`, `def-anyonic-local-channel-projector`, `def-qc-tqc-f-symbol`, `thm-anyonic-local-channel-projectors-are-orthogonal`, `def-anyonic-frobenius-schur-sign`, `lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization`, `thm-anyonic-channel-projectors-are-reparenthesization-independent`, `prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb`, `def-generic-type-a-hecke-algebra`, `lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units`, `thm-the-symmetric-group-has-the-coxeter-presentation`, `thm-the-braid-group-surjects-onto-the-symmetric-group`, and the assigned in-batch suppliers `lem-qftx-anyonic-vacuum-reverse-adjacent-relation` and `thm-qftx-tl-hecke-braid`. I also opened the supporting published definitions/results `def-qc-tqc-unitary-fusion-category`, `thm-qc-tqc-f-symbol-unitary`, `def-fusion-and-multifusion-category`, `def-qc-tqc-fusion-tree-basis`, and `def-absolutely-simple-object` for the fusion-space and normalized-overlap calculation.

The A-page's current `requires` list covers the home pages of its direct external item suppliers; the B page requires the A page. The recorded cross-batch page edge to `qftx-renormalization-hopf` is marked verified. The two page bodies are empty as required by the current statement-first page policy; their titles, classifications, item inventories and prerequisite lists were checked.

## Mathematical and source review

- `def-qftx-braided-line-model`: the parenthesized products and conjugated local braiding are well-typed; braided coherence supplies path independence and the Artin relations. The finite-double claim uses the exact local supplier's factor order and full quasitriangular identities. The Hilbert-space, spectral-projection, connection, propagator and error-bound data are explicitly conditional; no adiabatic theorem or experimental realization is claimed.
- `lem-qftx-anyonic-vacuum-reverse-adjacent-relation`: on a local triple of total charge $a$, each vacuum-channel subspace is one-dimensional because $N_{aa}^{\mathbf1}=1$ and $N_{\mathbf1 a}^{a}=1$. The normalized F-entry has modulus $1/d_a$; the linear-first rank-one projection calculation gives $P_{i+1}P_iP_{i+1}=d_a^{-2}P_{i+1}$. Scaling by $\delta_a=\kappa_a d_a$ gives the stated $U$-relation, including the sign. Other total-charge blocks vanish, and spectator multiplicities preserve the calculation.
- `thm-qftx-tl-hecke-braid`: the displayed inverse, adjacent braid difference and Hecke quadratic follow from the complete oriented TL relations and $\delta=q+q^{-1}$. The rescaling $T_i=qB_i$ gives the stated $q^2$ Hecke parameter. The bounded self-adjoint/unit-circle clause correctly proves inner-product preservation and surjectivity.
- `prop-qftx-coxeter-specialization`: at $q=1$, $B_i^2=I$; the Coxeter presentation yields the $S_n$ action and its composite with the braid quotient is the original braid representation. The general-parameter root statement and scalar counterexample are correct.
- `ex-qftx-vacuum-channel-exchange`: the range and kernel of the orthogonal projection exhaust the path space and give the two scalar actions, with absent-subspace qualifications. The example explicitly excludes a claim about physical exchange or measurement.

I inspected all three assigned TikZ/tikzcd diagrams: the conjugation/composition diagram and positive crossing in `def-qftx-braided-line-model`, and the $qI-U_i$ cup-cap diagram in `ex-qftx-vacuum-channel-exchange`. Arrow direction, over-crossing, coefficient/sign, cup-cap orientation and labels agree with their text. The proofs remain algebraic and do not rely on the drawings. No assigned page body contains a diagram.

Source passages checked against the local full-text extracts include Etingof–Gelaki–Nikshych–Ostrik, Definition 4.1.1, Definition 8.1.1, Remark 8.2.5, §8.3 and §7.14 (the latter uses an $H\otimes H^{*\mathrm{cop}}$ convention, which is not substituted for the local supplier's convention); Kytölä, Proposition 4.6 and Theorem 4.18 through its proof boundary at Exercise 41; Black, Definition 11.2.3, Definition 11.3.1 and Theorem 11.3.3; and Chen, §2.2 Remark 2.2.3. Chen states both adjacent relations for abstract Temperley–Lieb generators; it does not identify those generators with the local anyonic projections. The anyonic relation is proved locally from the supplied F-coefficient.

## Edit and validation

I corrected the source locator in `items/lem-qftx-anyonic-vacuum-reverse-adjacent-relation.md`: Chen's abstract Temperley–Lieb generators are no longer called “projectors,” and the locator separates Chen's relation from the item's local F-coefficient proof. The Statement and Proof are unchanged. The proof contract's derivations, supplier excerpts and boundary rows remain applicable; no `verification.judge` record existed.

After the edit, reflow reported the item unchanged, precheck passed (`direct`), and `proof-layout` reported 1 item, 4 steps and 0 defects. No other item or page was edited.

## Findings and page verdicts

- `qftx-ribbon-braid-representations`: pass. Current item statements/proofs, page inventory, direct supplier homes and declared prerequisite closure agree. The A-page body is intentionally empty under the active page policy.
- `qftx-ribbon-braid-representations-examples`: pass. Its example is mathematically supported by the A page and published prerequisites, and its B-to-A requirement is declared. The B-page body is intentionally empty under the active page policy.
- Uneditable defects: none found.
- Blocker: none.

## Coverage limitation

The review covered every assigned item and page, all direct item dependencies, five additional supporting fusion-category/F-symbol suppliers, and the exact source passages listed above. It did not audit every transitive proof beneath already published suppliers or the full prose of every page in the 150-page transitive page-requirement closure; those broader audits were not needed to verify the assigned conditional claims. The cross-batch page edge was checked against its current recorded verification, not independently re-reviewed as an item-level proof.
