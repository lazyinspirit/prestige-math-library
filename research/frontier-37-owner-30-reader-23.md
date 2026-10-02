# Step 5a reader report — batch 23

Run: `frontier-37-owner-30`  
Role: reader-23

## Verdict

The current mathematics in the assigned items is sound on the claims checked. Neither assigned page has a confirmed prose or summary defect. No item or page prose was edited. One nonfatal, uneditable proof-contract cross-reference is recorded below.

## Opened inventory

Pages:

- `library/representation-theory/integral-specht-modules-and-modular-simple-modules.md` (A)
- `library/representation-theory/integral-specht-modules-and-modular-simple-modules-examples.md` (B)

Assigned A-page items:

- `def-integral-specht-lattice-and-base-change`
- `def-integral-tabloid-bilinear-form-and-specht-gram-matrix`
- `def-modular-specht-form-and-radical-quotient`
- `lem-field-antisymmetrizer-image-and-dominance`
- `thm-james-submodule-theorem-over-an-arbitrary-field`
- `def-p-regular-and-p-restricted-partitions`
- `lem-specht-gram-gcd-detects-p-regularity`
- `thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions`
- `lem-nonzero-maps-between-specht-quotients-force-dominance`
- `thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads`
- `thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular`
- `lem-conjugate-specht-sign-duality-over-fields`
- `prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality`
- `rem-general-modular-decomposition-numbers-are-not-determined-by-triangularity`

Assigned B-page items:

- `ex-specht-form-rank-for-shape-two-two-in-small-characteristics`
- `ex-decomposition-matrices-of-s3-in-characteristics-two-and-three`
- `cex-p-regular-and-p-restricted-are-not-the-same-label`
- `cex-a-modular-specht-module-need-not-be-simple-or-have-nonzero-form-head`

Direct external dependencies opened (40 distinct files; current statement/definition clauses):

- `cor-matrix-rank-equals-the-rank-of-its-linear-map`, `cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes`, `cor-order-of-a-permutation-from-its-cycle-lengths`, `cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types`, `cor-tensor-products-of-finite-free-modules-and-dimension`
- `def-column-antisymmetrizer-polytabloid-and-specht-module`, `def-composition-series-and-length-of-a-module`, `def-decomposition-map-from-ordinary-to-modular-grothendieck-groups`, `def-decomposition-numbers-and-decomposition-matrix`, `def-dominance-order-on-partitions`, `def-free-module-on-a-set-and-standard-basis`, `def-invariant-inner-product-on-a-tabloid-module`, `def-module-radical-socle-head-and-loewy-series`, `def-og-lattice-and-reduction-modulo-the-maximal-ideal`, `def-p-regular-and-p-singular-elements`, `def-partition-young-diagram-and-conjugate-partition`, `def-permutation-support-disjoint-cycles-and-cycle-type`, `def-row-and-column-stabilizers-of-a-tableau`, `def-sign-representation-and-restriction-of-a-representation`, `def-simple-module`, `def-splitting-p-modular-system-for-a-finite-group`, `def-submodule`, `def-tabloid-and-column-orders-for-specht-straightening`, `def-tensor-product-of-modules-by-generators-and-relations`, `def-young-subgroup-tabloid-and-permutation-module`, `def-young-tableau-standard-tableau-and-shape`
- `lem-adjacent-column-garnir-relation`, `lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional`, `lem-basic-combinatorial-lemma-for-tableaux`, `lem-column-antisymmetrizer-detects-dominance`, `lem-column-collision-causes-antisymmetrizer-cancellation`, `lem-garnir-straightening-of-polytabloids`, `lem-leading-tabloid-coefficient-of-a-standard-polytabloid`, `lem-polytabloid-covariance-and-column-sign`, `lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero`
- `thm-decomposition-map-is-independent-of-the-stable-lattice`, `thm-jordan-holder-theorem-for-modules`, `thm-rank-nullity`, `thm-tensor-products-commute-with-arbitrary-direct-sums`, `thm-unit-isomorphisms-for-module-tensor-products`

I checked the exact source passages used for the nonroutine claims. I did not traverse the entire transitive library closure.

## Item review

| Item | Claim and convention checked | Decision |
|---|---|---|
| `def-integral-specht-lattice-and-base-change` | Integral polytabloid span, integral Garnir straightening, unitriangular minor, saturated splitting, arbitrary commutative-ring base change, and empty shape. The integral identities are transported from complex identities by uniqueness of integral tabloid coordinates; no division is used after reduction. | Sound. |
| `def-integral-tabloid-bilinear-form-and-specht-gram-matrix` | Symmetric bilinear tabloid form, integral Gram matrix, scalar extension, invariance, and self-adjointness; positivity is confined to real coefficients. | Sound. |
| `def-modular-specht-form-and-radical-quotient` | Form radical is distinguished from module radical; quotient dimension is the rank of the reduced Gram matrix. | Sound; no premature simplicity claim. |
| `lem-field-antisymmetrizer-image-and-dominance` | Collision cancellation, equal-shape tableau matching, rank-one own-shape image, and dominance over every field, including characteristic two and size zero. | Sound. |
| `thm-james-submodule-theorem-over-an-arbitrary-field` | Antisymmetrizer alternatives, simple head, self-duality, and absolute irreducibility via field-extension Gram-rank invariance. | Sound. |
| `def-p-regular-and-p-restricted-partitions` | Multiplicity and difference conventions, conjugation identity, and empty partition. | Sound. |
| `lem-specht-gram-gcd-detects-p-regularity` | Bounds `Lλ | gλ | Uλ`, equality of the pairing and standard-Gram gcds, p-regular criterion, and row-reversal coefficient. | Sound. |
| `thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions` | Vanishing criterion, p-rank dimension, and simple-head consequences only in the nonzero case. | Sound. |
| `lem-nonzero-maps-between-specht-quotients-force-dominance` | The row-reversal scalar is nonzero for a p-regular source; dominance, equality image, and separation follow with the stated hypotheses. | Sound. |
| `thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads` | Completeness via p-regular conjugacy-class count and the finite-coefficient partition identity; the splitting-field hypothesis is present. | Sound. |
| `thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular` | Stable `O`-lattice reduction, ordinary irreducibility, dual composition factors, dominance direction, diagonal, and decreasing-lexicographic lower-triangular orientation. | Sound. |
| `lem-conjugate-specht-sign-duality-over-fields` | The signed transpose map is well-defined on tabloids; its kernel and duality hold over all fields, including characteristic two. | Sound. |
| `prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality` | The dual-Specht head convention, transpose and sign twist, and bijection between the two label sets. | Sound. |
| `rem-general-modular-decomposition-numbers-are-not-determined-by-triangularity` | The `S3` witness has the same triangular constraints and distinct allowed entry; James §24 is presented as a historical source passage and no present-day nonexistence claim is made. | Sound. |
| `ex-specht-form-rank-for-shape-two-two-in-small-characteristics` | Direct tabloid expansions give Gram matrix `[[4,2],[2,4]]`; reductions have ranks 0, 1, and 2 for p=2, p=3, and p>3. | Sound. |
| `ex-decomposition-matrices-of-s3-in-characteristics-two-and-three` | Both displayed matrices follow from the modules and composition factors; the characteristic-three quotient is the sign module. | Sound. |
| `cex-p-regular-and-p-restricted-are-not-the-same-label` | The `(2)` and `(1,1)` witnesses at p=2 satisfy the claimed distinct conditions and transpose/sign translation. | Sound. |
| `cex-a-modular-specht-module-need-not-be-simple-or-have-nonzero-form-head` | Characteristic-three `(2,1)` gives a proper trivial submodule; characteristic-two `(2,2)` gives a nonzero Specht module with zero form quotient, without claiming reducibility for the latter. | Sound. |

## Source and dependency evidence

- James, *The Representation Theory of the Symmetric Groups*: §§6.7 and 8.14–8.15 (conjugate/sign duality and integral reduction), Corollary 8.6 (integral standard-basis span), §§10.3–10.6 (Gram gcd and row reversal), §§11.1–11.5 (form quotient, map dominance, and simple labels), §§12.1–12.4 (composition factors, triangularity, and the `S3` matrices), and §24 opening (historical boundary remark). [Full text](https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf).
- Law/Tomczak, *Representation Theory of Symmetric Groups*: §2.2 Proposition 2.4, Theorem 2.5, Corollary 2.6, Theorem 2.7, Theorem 2.15, Proposition 2.16; §2.3 Propositions 2.19–2.20 and Theorem 2.21. These passages support the field antisymmetrizer, James theorem, p-regular count, and standard basis arguments. [Full text](https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf).
- Craven, *Groups, Geometries and Representation Theory*: §2.3 Propositions 2.8–2.10 and Corollary 2.11, for Gram divisibility, row reversal, map dominance, and triangularity. [Full text](https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf).
- Chan, *Representation Theory of Symmetric Groups*: Chapter 9 Definition 9.1 and Remark 9.2, for the bilinear permutation-basis form. [Full text](https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf).
- Kleshchev, *Representation Theory of Symmetric Groups and Related Hecke Algebras*: §5.3 Remark 5.5, for the q=1 p-regular versus p-restricted transpose/sign convention. [Full text](https://arxiv.org/pdf/0909.4844).

## Edits, uneditable defect, and checks

- Edits: none. No item or page content changed, so no proof-contract refresh, judge removal, reflow, or precheck was due.
- Uneditable defect: `research/frontier-37-owner-30-batch-23.proof-contracts.json#/contracts/def-integral-specht-lattice-and-base-change/derivations/5/claim` (contract step 3.1) says the triangular leading coefficients are in step 1.3. In the current item, step 1.3 is the integral Garnir identity; the leading-coefficient fact is F7 and is correctly used by item proof step 3.1. This is a nonfatal contract cross-reference error, not a mathematical error in the item.
- Page `integral-specht-modules-and-modular-simple-modules` (A): verdict — no confirmed defect; its summary preserves the base-change, form-radical, p-regular-label, dominance, and convention qualifications of the items.
- Page `integral-specht-modules-and-modular-simple-modules-examples` (B): verdict — no confirmed defect; its Gram ranks, `S3` matrices, and separated counterexample claims agree with the current items.
- Blocker: none.
