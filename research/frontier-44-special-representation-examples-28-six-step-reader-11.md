# Reader 11 — batch 11

Run: `frontier-44-special-representation-examples-28-six-step`. Independent Step 3a review; no judging or publication.

## Opened inventory

Pages (complete prose and inventories):
- `library/special-topics-in-representation-theory/rim-hooks-and-the-murnaghan-nakayama-rule.md` (A).
- `library/special-topics-in-representation-theory/rim-hooks-and-the-murnaghan-nakayama-rule-examples.md` (B).

Assigned carriers (all sections opened; dependency suppliers before consumers, with the filter proposition before its examples):
- `items/def-removable-border-strip-and-height.md`.
- `items/lem-hooks-correspond-to-removable-border-strips.md`.
- `items/thm-determinantal-form-of-a-specht-character.md`.
- `items/lem-character-value-on-a-full-cycle-is-supported-on-hooks.md`.
- `items/lem-alternating-hook-induction-cancels-disconnected-rim-removals.md`.
- `items/lem-restriction-to-two-block-subgroup-has-lr-multiplicities.md`.
- `items/thm-murnaghan-nakayama-character-rule.md`.
- `items/cor-no-removable-cycle-length-strip-forces-a-character-zero.md`.
- `items/cor-hook-divisibility-defect-zero-vanishing-criterion.md`.
- `items/prop-r-cycle-virtual-character-filter.md`.
- `items/thm-triangular-fixed-tabloid-reconstruction-of-the-character-table.md`.
- `items/ex-murnaghan-nakayama-for-shape-five-four-four.md`.
- `items/ex-the-s4-character-table-by-rim-hook-recursion.md`.
- `items/cex-a-disconnected-rim-set-is-not-a-border-strip.md`.
- `items/ex-r-cycle-filter-for-nu-three-two-and-r-three.md`.
- `items/ex-s5-character-table-by-fixed-tabloid-reconstruction.md`.

Direct supplier interfaces opened: all 58 distinct external dependencies in the batch manifest (Statements or Definitions; four diagram definitions opened in full). Additional full carriers opened: `thm-transitivity-of-induction-for-finite-groups`, `thm-character-of-a-permutation-representation-counts-fixed-points`, and `lem-characteristic-of-a-young-permutation-character-is-complete`. No rendered evidence bundle was provided at the exact task paths.


Exact external supplier inventory (the used Statement/Definition interfaces):

- `cor-binomial-theorem-consequences`.
- `cor-determinant-of-an-inverse`.
- `cor-euclids-lemma-for-finite-products`.
- `cor-frobenius-reciprocity-for-complex-characters`.
- `cor-order-of-a-permutation-from-its-cycle-lengths`.
- `cor-prime-iff-euclid-property`.
- `cor-sign-from-disjoint-cycle-structure`.
- `cor-square-matrix-invertible-iff-determinant-is-a-unit`.
- `cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types`.
- `def-binomial-coefficient`.
- `def-character-table-of-a-finite-group`.
- `def-column-antisymmetrizer-polytabloid-and-specht-module`.
- `def-determinant-of-a-square-matrix`.
- `def-dominance-order-on-partitions`.
- `def-external-direct-product-of-groups`.
- `def-finite-symmetric-group-and-permutation-notation`.
- `def-frobenius-characteristic-map`.
- `def-graded-ordinary-representation-ring-of-symmetric-groups`.
- `def-hook-arm-leg-and-hook-length`.
- `def-induced-character-of-a-complex-representation`.
- `def-inversions-inversion-number-and-sign`.
- `def-littlewood-richardson-tableau-and-coefficient`.
- `def-order-in-a-group`.
- `def-outer-induction-product-for-symmetric-group-characters`.
- `def-partition-young-diagram-and-conjugate-partition`.
- `def-permutation-support-disjoint-cycles-and-cycle-type`.
- `def-prime`.
- `def-removable-and-addable-nodes-of-a-partition`.
- `def-semistandard-tableau-and-kostka-number`.
- `def-skew-diagram-and-semistandard-skew-tableau`.
- `def-standard-inner-product-on-complex-class-functions`.
- `def-tensor-product-of-complex-representations`.
- `def-trivial-regular-and-permutation-representations`.
- `def-virtual-character-and-character-ring-of-a-finite-group`.
- `def-young-subgroup-tabloid-and-permutation-module`.
- `lem-character-ring-of-a-direct-product-is-the-tensor-product`.
- `lem-frobenius-characteristic-preserves-outer-products`.
- `lem-int-cancellation`.
- `lem-kostka-change-of-basis-is-dominance-unitriangular`.
- `lem-young-permutation-module-is-induced-from-the-trivial-character`.
- `prop-basic-value-properties-of-a-complex-character`.
- `thm-centralizer-cardinality-from-cycle-type`.
- `thm-character-inner-product-computes-intertwiner-dimension`.
- `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules`.
- `thm-complex-specht-modules-are-irreducible`.
- `thm-determinant-multiplicative`.
- `thm-determinant-of-a-triangular-matrix`.
- `thm-first-orthogonality-relation-for-irreducible-complex-characters`.
- `thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism`.
- `thm-frobenius-characteristic-sends-specht-characters-to-schur-functions`.
- `thm-frobenius-formula-for-induced-characters`.
- `thm-hook-length-formula`.
- `thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions`.
- `thm-jacobi-trudi-and-dual-jacobi-trudi-identities`.
- `thm-orbit-stabilizer`.
- `thm-outer-littlewood-richardson-rule`.
- `thm-symmetric-permutations-are-conjugate-iff-same-cycle-type`.
- `thm-youngs-rule-for-permutation-modules`.

Also opened `items/def-beta-set-and-e-runner-abacus-of-a-partition.md`, Definition, for the downstream observation below. The transitivity theorem was investigated but the repaired full-cycle proof instead uses the already-proved characteristic of a Young permutation character.

## Repairs and mathematical evidence

All 16 assigned carriers changed; none was withdrawn. The following table records each substantive or consumer repair. Original carriers were drafts in the assigned inventory. No A/B page, other-batch item, published item, plan, judge stamp, or workflow state was edited.

| Carrier | Exact location and repair | Evidence / gap closed |
|---|---|---|
| `def-removable-border-strip-and-height` | Definition, counting identity; first Remark: replace rightward by leftward and supply the rim-node interval/path argument. | The northeast-to-southwest rim of an English diagram decreases column and increases row. The interval in row p is max(1,lambda_(p+1)) through lambda_p; successive intervals meet in precisely the vertical joining column. The diagonal/2x2 argument puts every strip on this path, proving r-1=(w-1)+(c-1). |
| `lem-hooks-correspond-to-removable-border-strips` | Second Remark: give actual hook lengths 4,3,1 / 2,1 of (3,2). | Direct arm-plus-leg computation; the old list omitted one node and wrongly located hooks on the rim. The statement and bijection proof remain intact. |
| `thm-determinantal-form-of-a-specht-character` | Statement, F3–F5, steps 1.1–1.2: explicitly include empty determinant/product, the empty partition at degree zero, triviality of the one-row Specht module, and row-versus-column Leibniz conventions. | The cited determinant definition requires positive matrix size. Empty products must be specified independently. A one-row tabloid space has one basis vector and trivial column stabilizer. Inversions of a permutation and its inverse are bijected by (i,j) -> (sigma(j),sigma(i)). |
| `lem-character-value-on-a-full-cycle-is-supported-on-hooks` | Statement, F2, source locator: clarify the n=1 identity and one-row lambda_2=0 convention; prove the iterated trivial outer-product/tabloid identification through characteristic injectivity; cite the proved fixed-point character theorem. | Original induction-definition citations did not establish iterated block induction or permutation traces. The repaired route uses `lem-characteristic-of-a-young-permutation-character-is-complete` and the characteristic ring isomorphism. James 21.4 is on printed pp. 80–81, not 78–80. |
| `lem-alternating-hook-induction-cancels-disconnected-rim-removals` | Statement, Given, F1, steps 1.1, 2.1(c), 4.1: handle noncontainment separately, make the kth selected row's label k+1, establish that a lower overlapping cell is rightmost, and justify disjoint component columns. | LR coefficients vanish without containment. Row endpoints decrease; a one-cell overlap must end at the lower row's right endpoint. Column-convexity forbids two components sharing a column. These close the inverse filling and binomial-count prerequisites without changing the multiplicity formula. |
| `lem-restriction-to-two-block-subgroup-has-lr-multiplicities` | Statement, F1–F2, steps 3.1–4.1: remove undefined S_(n-r,r) partition notation, cite completeness of Specht irreducibles, account for Hermitian coefficient direction, and explicitly treat r=0 and n=0. | (n-r,r) need not be a partition and may have zero parts. The concrete two-block embedding works for all allowed r. The tensor-product basis theorem applies to all irreducibles only after the Specht completeness theorem is supplied. The reversed inner product equals the real integer coefficient by conjugate symmetry. |
| `thm-murnaghan-nakayama-character-rule` | Statement, Given, F1, steps 1.1–3.1: introduce the chosen r-point cyclic set D and require sigma to fix D; use specified fixed points as one-cycles. | A 1-cycle is the identity with empty permutation support, so the original support-complement identification had n points rather than n-1. D has size r in every case and the same restriction/LR proof now establishes branching as well as longer-cycle recursion. |
| `cor-no-removable-cycle-length-strip-forces-a-character-zero` | F1, F3, steps 1.1 and 2.1: propagate the specified cyclic-set convention and choose a fixed point for r=1. | Consumer remains the empty-strip-sum criterion for every cycle-type part, including 1. |
| `cor-hook-divisibility-defect-zero-vanishing-criterion` | First Remark: remove the unsupported assertion “The converse fails”; say no converse is proved here. | The supplied argument proves the forward implication and gives neither a counterexample nor a proof that the converse fails. The rich stated criterion and equivalent hook-product hypothesis are preserved. |
| `prop-r-cycle-virtual-character-filter` | F7 and first Remark: cite the explicit Specht integrality theorem; derive the degree-zero assertion directly from the indicator identity and Frobenius formula. | The old integrality explanation again assumed the unproved iterated permutation-module identification. The already-opened proved suppliers directly establish the used facts. The r=1 indicator argument remains valid. |
| `thm-triangular-fixed-tabloid-reconstruction-of-the-character-table` | F3, step 3.1, second Remark: cite Specht completeness and replace the dominance-based competitor argument by total-order triangular recursion, including division by the positive diagonal. | An arbitrary upper-triangular competitor can have nonzero entries at incomparable dominance labels. For indices i<j, G_ij determines u_ij after earlier rows and columns; G_jj then determines the unique positive diagonal root. This proves exactly the claimed uniqueness. |
| `ex-murnaghan-nakayama-for-shape-five-four-four` | F1 and last Remark: propagate specified cycle points; correct the assertion that no 4-, 3-, or 1-cycles occur in the displayed classes. | Those parts visibly occur in (5,4,3,1) and (7,3,3); only the initial removals use the original 5- and 7-hooks. All listed strips and recursive child values were independently recomputed. |
| `ex-the-s4-character-table-by-rim-hook-recursion` | F1: propagate specified points for one-cycles. | All 25 entries and the complete weighted orthogonality matrix agree with independent strip enumeration. |
| `cex-a-disconnected-rim-set-is-not-a-border-strip` | Step 2.2 and concluding step: remove the contradictory “connected or not” assertion and give a numerical refutation of the proposed extended recursion; add hook-formula dependency. | At (3,1^3), the only contained partitions of size 3 are (2,1) and (1^3); both differences have three occupied rows and are disconnected. Extending height as rows minus one gives 2+1=3, while the actual character value is 0. The original disconnected witness remains present. |
| `ex-r-cycle-filter-for-nu-three-two-and-r-three` | F3: propagate specified points for one-cycles. | Independent enumeration gives exactly the four additions with heights 0,1,1,2, and confirms the displayed filter checks. |
| `ex-s5-character-table-by-fixed-tabloid-reconstruction` | Example introduction and step 1.2: correct which column contains degrees; restore the omitted (4,1) class with 30 elements in the S5 block-count list. | The displayed matrix already has seven correct columns; the old explanatory count list had six types. Exact matrix multiplication checks every entry, and det C=2880. |

The affected proof contracts were refreshed to the current exact fact quotations and full derivations, preserving their schema. Four additional erroneous boundary descriptions were corrected: the restriction r=0 case, the S4 empty recursion sums, the nonexistent horizontal 5-strip in the (5,4,4) example, and the counterexample's coefficient-zero locator. Empty-determinant and chosen-one-cycle boundaries now describe the repaired arguments. Any stale `verification.judge` block in an edited carrier was removed; no new judge/audit marker was added.

## Consumer checks

Every assigned direct and indirect consumer was read and reconsidered after the supplier repairs. Statements retain the intended rim-strip, character-value, LR multiplicity, and Gram-reconstruction results; boundary conventions now establish their originally intended domains. The example tables and numerical conclusions are unchanged.

For the Definition prose correction, the reverse deps graph also reaches 54 external consumers. The five direct consumers were opened at their Statements/Examples, the cited facts and actual linked uses: `lem-hooks-are-bead-gap-pairs-on-an-abacus`, `thm-e-core-is-independent-of-the-rim-hook-removal-order`, `ex-three-core-of-four-three-two-one`, `thm-q-schur-weyl-weight-space-gram-determinant-hook-product`, and `thm-q-schaper-virtual-radical-layer-formula`. They use the unchanged strip definition, size, height and hook bijection; none requires a rightward northeast-to-southwest path. The other 49 were traced by scoped interface searches for propagation only; selected linked paragraphs were read where the search returned them, and no full reading of those carriers is claimed. Their unrelated modular, q-Schur, and KLR arguments were not re-audited. The path correction changes none of their supplier interfaces and requires no consumer edit.

## Uneditable defects and routing

1. **Assigned B-page prose — fatal false claim.** `library/special-topics-in-representation-theory/rim-hooks-and-the-murnaghan-nakayama-rule-examples.md`, final paragraph, first sentence calls the four strips “removable 3-strips of (3,2) in S8.” They are additions to (3,2), or removals from the four size-8 partitions to (3,2), as the linked example explicitly exhibits. The hook lengths of (3,2) are 4,3,1 / 2,1, giving only one removable strip of size 3 in that shape. Replace this wording by “the four ways to add a 3-border strip to (3,2).” B-page prose was not edited. This is the native page finding below.

2. **Additional downstream observation — outside the assigned dependency closure.** `items/def-e-core-e-quotient-and-e-weight.md`, Definition, “Runner label sets,” falsely asserts that X_i^(e) are pairwise disjoint as subsets of N_0. For e=2 and X={1,0}, a valid beta-set for the empty partition under the opened beta-set definition, X_0^(2)=X_1^(2)={0}. Runner positions are disjoint after retaining their runner index; their row-label sets need not be. Remove “pairwise disjoint” and interpret the disjoint union as the tagged union {(i,a):a in X_i^(e)}, whose projection gives the set of occurring row labels. No edit was licensed. This item is a downstream consumer, not a supplier reached from an assigned consumer's deps/justified_by closure. Accordingly no legal native dependency consumer_id exists for this dispatch; the observation is reported for owner/producer routing rather than inventing an edge or mislabelling it as an assigned item. This does not undermine the unchanged rim-strip interface checks.

## Validation and sources

- Reflow: `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` executed for each of the 16 changed paths; every command exited 0.
- Precheck: the analogous one-file commands all exited 0; 15 proof-bearing carriers passed, and the definition had zero applicable proofs and zero failures.
- Scoped renderer check on all 16 changed carriers: exited 0; real KaTeX and YAML parsing passed.
- Final, single batched `node tools/proof-layout.mjs` invocation after every item edit and formatter: **16 items, 64 steps, 0 defects**, exit 0. No item edits followed it.
- Independent exact Python enumeration: all hook/strip multisets for partitions of sizes 1–8 agree; all 2,788 tested LR hook-content cases agree with the binomial formula. These finite checks support, but do not replace, the general proofs.
- Independent table computation: every S4/S5 entry, both full weighted orthogonality matrices, all 49 S5 Gram/product entries, and det C=2880 agree. The two (5,4,4) values are -1 and 2. Four filter additions and their heights agree.
- One attempted numerical check could not import optional SymPy; it was replaced by a successful dependency-free exact-rational computation. An unsupported `rendercheck --help` invocation began a default scan and was interrupted; no result from it is used.

Authoritative source actually consulted: [James, The Representation Theory of the Symmetric Groups](https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf), §18.2–18.4 p. 73; §19.2 and its proof pp. 74–76; §21.1–21.7 pp. 79–84, including the complete hook-content count and restriction proof; §6.1–6.5 pp. 22–25. These give respectively the hook correspondence, determinant, full-cycle sign/cancellation/recursion, and triangular Gram reconstruction. No complete-book reading is claimed. Local supplier Statements/Definitions were checked for the exact cited hypotheses and conclusions; no recursive audit of all published supplier proofs was performed.

## Page verdicts and blockers

- **A page `rim-hooks-and-the-murnaghan-nakayama-rule`:** no remaining defect found after the assigned item repairs; its prose correctly describes the corrected results. This is a reader verdict, not a judge or certification stamp.
- **B page `rim-hooks-and-the-murnaghan-nakayama-rule-examples`:** blocked on the inaccurate added/removable-strip prose identified above. All five assigned examples/counterexample were reviewed and repaired as recorded.

No blocked local proof remains, and no withdrawal is proposed. The B-page correction requires the Step 3b lead. The independent downstream runner-set observation requires routing outside this reader's legal native dependency scope. Coverage limits are the supplier-interface depth, focused external consumer checks, and the finite bounds of the numerical checks, as stated above.
