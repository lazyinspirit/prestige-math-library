# Reader 22 — frontier-39-analysis-30, batch 22

Independent review completed. Scope: 25 draft items and the assigned A/B pages. Only assigned items and A-page prose are editable.

## Repairs and evidence

- `lem-bender-knuth-involutions-on-semistandard-tableaux`: Step 1.1 reversed the inequality between conjugate-partition heights. Replaced it with the two needed rectangle-completion inequalities, derived directly from the row lengths; Stembridge p. 2 supplies the same free-cell construction.
- `lem-minuscule-weights-are-the-weyl-orbit`: Fact F1 silently required full support and positive integral simple-coroot coefficients for the coroot of the highest root. Added the connected-support argument using its cited dominance theorem and the simple-coroot lattice basis. This uses the coroot of the highest root, not Etingof’s differently named highest coroot (his p. 158 footnote 15 distinguishes them).
- `prop-semistandard-tableaux-expand-schur-characters`: Steps 1.1–4.1 applied partition-only Young’s rule to arbitrary compositions. Restricted that application to sorted partition weights and supplied the permutation-matrix and Bender–Knuth transport back to arbitrary weights. Fact F5 now proves the scalar-endomorphism assertion absent from the cited group Schur lemma’s statement.
- `lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux`: Deleted the false Fact F1 assertion that a nonpartition exponent vector always gives a repeated alternant row (e.g. (0,3)+rho_2=(1,3)). Closed the boundary-column and fixed-point cancellation details in Steps 1.2–2.1. Replaced F3’s unsupported GL semisimplicity and character-basis assertions by a tensor-power retraction and alternant coefficient argument. Read all of Stembridge pp. 2–3 and Macdonald §I.9 pp. 142–148: F4 is an explicit authoritative-source input, not a locally constructed tableau bijection.
- `thm-littlewood-richardson-tensor-product-rule`: Step 1.1 inferred complete reducibility from finite dimension alone. Routed it through the supplier’s explicit Schur–Weyl retraction, and derived finiteness from the fixed partition size rather than a misapplied semisimple-Lie highest-weight lemma.
- `cor-horizontal-pieri-rule`: Fact F1 identified quotient symmetric powers with invariant tensors without a map. Added averaging and inverse quotient maps, the empty-partition convention for d=0, and the one-row derivation of h_d. Corrected the inaccurate Etingof Proposition 27.1 locator, which is a Cartan-product statement, not horizontal Pieri.
- `cor-vertical-pieri-rule`: Replaced the ill-typed tensor-over-S_d equality and unproved exterior-quotient identification by signed averaging with inverse quotient maps. Handled d>r before applying the LR theorem, whose input row bound otherwise fails, and made d=0 explicit. Corrected the exterior-Pieri source locator to Etingof Proposition 30.8.
- `prop-littlewood-richardson-coefficients-stabilize-with-rank`: The tensor-rule supplier requires positive rank, so made r>=1 explicit for empty partitions. Replaced the false F2 claim that every skew box lies in column lambda_i+1, removed unsupported unused F4, and corrected Step 1.1’s first-letter test for labels greater than 2 and its empty-first-row case.
- `ex-a-littlewood-richardson-coefficient-greater-than-one`: Fact F3 gave unchecked numerical tableau counts and described (2,2,2) as having three columns. Added the finite interlacing-shape count deriving all dimensions and corrected it to two columns. The LR-word enumeration in Step 3.1 was checked directly.
- `ex-littlewood-richardson-product-s21-times-s1`: Added a finite tableau-count derivation for the dimensions asserted in F3 and used in Step 3.1; the Pieri shape list itself is correct.
- `cor-minuscule-tensor-product-rule`: Removed the self-reference to Step 2.1 in that same step. Its character and module statements are unchanged.
- `lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient`: F3 conflated uniqueness of a chamber representative with triviality of its stabilizer. Stated both exact supplier conclusions and their separate uses, and cited the shifted-weight positivity lemma. Corrected the description of multiplication by A(rho).
- `thm-steinberg-tensor-product-multiplicity-formula`: Step 1.1 claimed A(lambda+rho)ch L(mu)=sum m_mu(sigma)A(lambda+rho+sigma) merely by linearity. Supplied the essential Weyl-invariant change of variables for each w. Used length-sign parity, which is exactly what the declared supplier proves, in Step 3.1.
- `cor-racah-speiser-tensor-product-algorithm`: F2 falsely claimed uniqueness of the chamber element for all h* and singular points; restricted it to regular real points, distinguished orbit representatives from transport elements, and justified dominance after subtracting rho. Step 1.2’s w is u, not u inverse.
- `ex-clebsch-gordan-decomposition-for-sl2`: Step 2.1’s lower reflected index was off by one when a+b is odd (it included the discarded wall). Corrected it to floor((a+b+1)/2)+1 and computed both a<=b and a>b ranges without an unjustified symmetry shortcut. Made the wall-existence parity condition explicit in the Example.
- `cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank`: Fact F2 cited exterior vanishing to justify the one-dimensional top exterior power, and the Schur definition to identify column modules with exterior powers. Routed those claims to the exact top-exterior and repaired vertical-Pieri suppliers. Added the two-letter tableau counts used in Step 2.1.
- `ex-three-tensor-three-for-sl3`: F1/F3 assumed the orbit, minuscule pairings, standard-module identification, symmetric/exterior submodules, dimensions and highest vectors. Added their explicit matrix, projection and basis computations and the complete-reducibility supplier for the inclusions. Deleted the irrelevant non-dominance argument for -omega_1, since individual weights need not be dominant.
- A-page prose: replaced the nonexistent “completing the square” step by coefficient extraction, made the imported Macdonald LR theorem explicit; the page frontmatter is outside the prose-edit scope and is preserved.
- `prop-determinant-twists-translate-glr-highest-weights`: qualified Step 3.1’s uniqueness as the normalised parametrisation lambda_r=0; the unrestricted pairs (lambda,k) are redundant under part (i). Goodman–Wallach Theorem 5.5.22, pp. 274–275, establishes uniqueness for the resulting highest weight, not every pair.
- Final domain clarification: the Clebsch–Gordan parameters and output index are explicitly integers, and the rank-stability item explicitly pads row-length coordinates by zero for empty partitions.

## Contract corrections

Updated the affected citations and derivations in `research/frontier-39-analysis-30-batch-22.proof-contracts.json` from the final item text, including downstream quotes of changed statements. Corrected false boundary evidence: tensor products of two nonzero simples cannot have an empty decomposition; the zero weight is not a nonzero fundamental weight; full-length input partitions do not make either Pieri product vanish; rank zero is outside the Schur-module supplier domain; a sum-of-lengths rank bound is sufficient, not always optimal; the dominant member of W omega at lambda=0 is omega, not necessarily zero; lambda+rho remains regular when lambda is singular; and nonexistent zero simple modules cannot be boundary inputs to Steinberg. Numerical dimension checks are described as consistency checks, not converse proofs. The unrestricted determinant-twist labels are redundant; only the labels normalised to lambda_r=0 are unique. Definition boundary entries now distinguish empty partitions from zero-padded coordinates. No mathematical acceptance or judge stamp was added. No `verification.judge` record was present in the changed item carriers.

## Opened inventory

Pages, including both frontmatter lists and complete summary prose:

- `library/lie-theory/tensor-product-multiplicities-and-littlewood-richardson.md` (A).
- `library/lie-theory/tensor-product-multiplicities-and-littlewood-richardson-examples.md` (B).

The manifest supplied the item inventory and dependency ordering; claims were checked against current item bodies, not its copied statements. Also opened `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, the assigned cross-batch dependency file and proof-contract file. The author task was used only to identify scope. No rendered evidence bundle was supplied with this dispatch.

Assigned items: all definitions, statements, facts, proofs/verifications/counterexamples, remarks and source metadata were opened. The following table records the final review disposition, without judging or certifying them:

| Item | Disposition |
|---|---|
| `def-tensor-product-multiplicity-for-highest-weight-modules` | Reviewed; no confirmed item defect found. |
| `def-minuscule-weight` | Reviewed; no confirmed item defect found. |
| `def-polynomial-glr-highest-weights-as-partitions` | Reviewed; no confirmed item defect found. |
| `def-littlewood-richardson-tableau-and-coefficient` | Reviewed; no confirmed item defect found. |
| `lem-bender-knuth-involutions-on-semistandard-tableaux` | Repaired; ready for independent Step 5b review. |
| `lem-minuscule-weights-are-the-weyl-orbit` | Repaired; ready for independent Step 5b review. |
| `def-schur-module-and-schur-polynomial-character` | Reviewed; no confirmed item defect found. |
| `cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr` | Reviewed; no confirmed item defect found. |
| `prop-semistandard-tableaux-expand-schur-characters` | Repaired; ready for independent Step 5b review. |
| `prop-tensor-product-multiplicities-are-character-structure-constants` | Reviewed; no confirmed item defect found. |
| `lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux` | Repaired; ready for independent Step 5b review. |
| `prop-determinant-twists-translate-glr-highest-weights` | Repaired; ready for independent Step 5b review. |
| `thm-littlewood-richardson-tensor-product-rule` | Repaired; ready for independent Step 5b review. |
| `cor-horizontal-pieri-rule` | Repaired; ready for independent Step 5b review. |
| `cor-vertical-pieri-rule` | Repaired; ready for independent Step 5b review. |
| `prop-littlewood-richardson-coefficients-stabilize-with-rank` | Repaired; ready for independent Step 5b review. |
| `ex-a-littlewood-richardson-coefficient-greater-than-one` | Repaired; ready for independent Step 5b review. |
| `lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient` | Repaired; ready for independent Step 5b review. |
| `cor-minuscule-tensor-product-rule` | Repaired; ready for independent Step 5b review. |
| `ex-littlewood-richardson-product-s21-times-s1` | Repaired; ready for independent Step 5b review. |
| `cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank` | Repaired; ready for independent Step 5b review. |
| `thm-steinberg-tensor-product-multiplicity-formula` | Repaired; ready for independent Step 5b review. |
| `ex-three-tensor-three-for-sl3` | Repaired; ready for independent Step 5b review. |
| `cor-racah-speiser-tensor-product-algorithm` | Repaired; ready for independent Step 5b review. |
| `ex-clebsch-gordan-decomposition-for-sl2` | Repaired; ready for independent Step 5b review. |

External suppliers opened (60): definitions were read as definitions; theorem/proposition/corollary/lemma claim sections were read as the exact input statements. Selected proof sections were additionally read where the claim section alone did not resolve a use. This is a consumer-use review, not a whole-library audit.

- `items/cor-determinant-multiplicativity-from-the-top-exterior-power.md`.
- `items/cor-schurs-lemma-for-irreducible-lie-algebra-representations.md`.
- `items/cor-schurs-lemma-for-irreducible-representations.md`.
- `items/cor-the-kth-exterior-power-vanishes-above-dimension.md`.
- `items/cor-the-top-exterior-power-acts-by-the-determinant.md`.
- `items/def-axiom-of-choice.md`.
- `items/def-classical-complex-matrix-lie-algebras.md`.
- `items/def-column-antisymmetrizer-polytabloid-and-specht-module.md`.
- `items/def-commuting-symmetric-and-linear-actions-on-tensor-power.md`.
- `items/def-completed-formal-character-ring-for-downward-cones.md`.
- `items/def-coroot-and-dual-root-system.md`.
- `items/def-coroot-of-a-lie-algebra-root.md`.
- `items/def-dominance-order-on-partitions.md`.
- `items/def-finite-weyl-root-system-lattice-and-chamber-conventions.md`.
- `items/def-formal-character-of-a-finite-dimensional-weight-module.md`.
- `items/def-fundamental-weights.md`.
- `items/def-height-of-a-root-and-highest-root.md`.
- `items/def-integral-dominant-and-strictly-dominant-weights.md`.
- `items/def-partial-order-on-weights.md`.
- `items/def-partition-young-diagram-and-conjugate-partition.md`.
- `items/def-positive-system-and-base-of-simple-roots.md`.
- `items/def-reducible-and-irreducible-root-system.md`.
- `items/def-root-reflections-and-the-weyl-group-action.md`.
- `items/def-semistandard-tableau-and-kostka-number.md`.
- `items/def-skew-diagram-and-semistandard-skew-tableau.md`.
- `items/def-stable-schur-function-by-bialternants.md`.
- `items/def-symmetric-and-exterior-powers-over-an-arbitrary-field.md`.
- `items/def-weight-and-weight-space-of-a-lie-algebra-representation.md`.
- `items/def-weyl-alternation-operator.md`.
- `items/def-weyl-vector-rho-for-a-chosen-positive-system.md`.
- `items/def-young-subgroup-tabloid-and-permutation-module.md`.
- `items/lem-finite-weyl-closed-chambers-and-stabilizers.md`.
- `items/lem-finite-weyl-positive-roots-and-simple-reflections.md`.
- `items/lem-geometric-series-invertibility-in-the-completed-character-ring.md`.
- `items/lem-highest-weight-modules-have-weights-below-the-top-weight.md`.
- `items/lem-positive-root-pairings-of-a-dominant-integral-weight.md`.
- `items/lem-weyl-alternants-are-skew-invariant.md`.
- `items/lem-weyl-length-parity-is-multiplicative.md`.
- `items/prop-characters-of-finite-dimensional-modules-are-weyl-invariant.md`.
- `items/prop-direct-sum-dual-hom-and-tensor-representations.md`.
- `items/prop-dominant-integral-weights-are-nonnegative-combinations-of-fundamental-weights.md`.
- `items/prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces.md`.
- `items/prop-formal-characters-are-additive-and-multiplicative.md`.
- `items/prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system.md`.
- `items/prop-root-systems-decompose-uniquely-into-irreducible-components.md`.
- `items/prop-root-systems-of-the-classical-complex-lie-algebras.md`.
- `items/prop-root-vectors-shift-weight-spaces.md`.
- `items/prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system.md`.
- `items/prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one.md`.
- `items/thm-complex-irreducibles-of-symmetric-groups-are-specht-modules.md`.
- `items/thm-finite-dimensional-representations-of-sl-two.md`.
- `items/thm-highest-weight-classification-of-finite-dimensional-irreducible-representations.md`.
- `items/thm-root-sl-two-triple.md`.
- `items/thm-schur-weyl-decomposition-with-length-cutoff.md`.
- `items/thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates.md`.
- `items/thm-skew-jacobi-trudi-and-tableau-expansion.md`.
- `items/thm-the-root-set-is-a-reduced-crystallographic-root-system.md`.
- `items/thm-weyl-character-formula.md`.
- `items/thm-weyls-complete-reducibility-theorem.md`.
- `items/thm-youngs-rule-for-permutation-modules.md`.

The additionally inspected supplier proofs were `lem-finite-weyl-positive-roots-and-simple-reflections` (including nonpositive simple-root pairings and the integral coroot basis), `prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system` (including connectedness and full support), `lem-positive-root-pairings-of-a-dominant-integral-weight` (including rho pairings), `cor-schurs-lemma-for-irreducible-representations` (the statement and proof omit scalarity, so it was proved locally), and `thm-skew-jacobi-trudi-and-tableau-expansion` (the complete local determinant/splitting/tableau argument). Supplier statements were consulted before their mathematical uses; independent branches were reviewed in dependency order.

## Authoritative-source checks

- [Stembridge, A Concise Proof of the Littlewood–Richardson Rule](https://www.combinatorics.org/ojs/index.php/eljc/article/download/v9i1n5/pdf), complete four-page note, especially pp. 2–3: the free-cell involution, column-admissibility theorem, maximal-column bad-tableau involution, alternant cancellation and its corollaries. The count comparison with lattice words is an exercise there, rather than a supplied tableau bijection.
- [Macdonald, Symmetric Functions and Hall Polynomials](https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf), §I.9, printed pp. 142–148 (PDF pages indexed 152–158): product/skew coefficients (9.1), the lattice-word count (9.2), and the complete Littlewood–Robinson construction (9.4)–(9.7), compatibility, recording-tableau and inverse arguments. This resolves the exact external count input F4 in the admissible-tableau lemma. The local argument compares two coefficient counts; it does not reconstruct this seven-page source proof.
- [Etingof, MIT 18.755 full notes](https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf), §27.2–27.4, pp. 146–147, for standard, exterior and symmetric representations, rational/polynomial GL classification; §29.1, p. 155, for their characters; §30.1, pp. 158–160, for minuscule equivalences, the root-lattice argument and the distinction in footnote 15; Proposition 30.8, p. 161, for exterior Pieri. Proposition 27.1 is a Cartan-product statement and does not assert horizontal Pieri. Relevant retrieved sections were read; the whole book was not.
- [Goodman–Wallach, Symmetry, Representations, and Invariants](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/goodwallx.pdf), §5.5.4, Theorem 5.5.22 and complete proof, pp. 274–275: irreducible rational GL modules are uniquely determined by their dominant integer highest weight, including central character. This supports the explicitly cited classification input and the normalised determinant-twist uniqueness.
- [Seynnaeve, Representation Theory](https://timseynnaeve.github.io/misc/Rep_Theory_Notes.pdf), Theorem 11.6/11.7 statements and §12.1 Proposition 12.1 and its proof sketch, pp. 59–60: rational irreducibles are determinant twists of polynomial ones. Its classification and character assertions are not all proved there; the independent classification source above supplies the needed exact statement.

## Uneditable findings

Both findings are on the unchanged B-page and are routed with its exact page ID. No confirmed uneditable item/dependency defect remains from this review.

1. `tensor-product-multiplicities-and-littlewood-richardson-examples`, lines 20–22, Clebsch–Gordan summary: “the unique irregular weight is discarded” needs an existence condition. For input a,b, a wall weight exists exactly when a<b and a+b is odd; for a=b=0 there is none. The complete repaired item proves this in Fact F3 and Step 1.2. Required correction: say an irregular weight is discarded **when present**, or state the condition. Class: missing-hypothesis; fatal because it is a defective summary claim, not an immediately fillable proof omission.

2. The same page, lines 50–55, row-bound summary: the claim that the row bound cannot be dropped from the tensor rule omits the necessary distinction between indexing nonzero constituents and including zero modules. The direct-sum identity remains valid with all partitions indexed, since S_nu(C^r)=0 above rank; only the claim that every nonzero LR coefficient yields a nonzero constituent is false. The assigned counterexample's Statement refuted already makes this distinction, and its Steps 1.1–3.1 establish it. Required correction: specify that the bound is required when listing **nonzero** summands, while zero terms can be retained in the identity. Class: overstrong-title-or-statement; fatal.

## Page verdicts and handoff

- A-page: repaired prose now describes coefficient extraction accurately and explicitly records the externally sourced lattice-word theorem. No unresolved mathematical prose defect identified after those repairs; the 18 changed items still require the next independent review stage.
- B-page: the computations are supported by the repaired items, but its two summary claims above still need the Step 5b lead's prose corrections. This reader did not edit B-page prose.

Operational discrepancy: the supplied manifest lists four A-page prerequisites, while current page `requires` lists two. The two additional pages are the symmetric-function and branching/Young-graph suppliers, whose exact item statements were opened. The item dependency graph already declares those mathematical inputs. Page frontmatter is outside the A-prose editing permission; it is preserved and this discrepancy is left for the lead's manifest/page reconciliation, without treating the manifest as a mathematical verdict.

Validation performed on the actual final carriers:

- Reflow and precheck: all 18 changed item paths, one item at a time; all exited 0. The final small domain/proof edits were reflowed and prechecked again on their affected paths.
- Strict proof-contract check: all 25 assigned entries; final result has no errors or warnings. Boundary anchors were corrected after the initial format check rejected unanchored evidence.
- Rendercheck: the 18 changed items and both assigned pages; zero errors/warnings. The two final domain-edited items were checked again, also clean. A mistaken `--help` invocation started an unscoped rendercheck; it was interrupted and supplies no coverage or pass claim.
- Final proof-layout: one batch command on all 18 changed paths after the last item edit/formatter; 75 numbered steps, zero defects.
- Independent finite corroboration: direct LR enumeration from skew semistandardness and lattice-prefix conditions gave the displayed counts 0,1,1,1,2,1,1,1,0 for the nine containing partitions of size six. The Racah–Speiser sum matched the Clebsch–Gordan output for all 169 pairs 0<=a,b<=12. These finite checks corroborate, rather than replace, the general arguments.

No operational blocker prevented the assigned reading or licensed repairs. Remaining handoff obligations are the two B-page prose findings and the metadata discrepancy above. Published and other-batch suppliers were not edited. Knapp's cited book and every secondary-source locator were not independently audited; the reviewed local suppliers and exact source checks listed above are the evidence actually produced.

Final layout command:

```sh
node tools/proof-layout.mjs items/lem-bender-knuth-involutions-on-semistandard-tableaux.md items/lem-minuscule-weights-are-the-weyl-orbit.md items/prop-semistandard-tableaux-expand-schur-characters.md items/lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux.md items/thm-littlewood-richardson-tensor-product-rule.md items/cor-horizontal-pieri-rule.md items/cor-vertical-pieri-rule.md items/prop-littlewood-richardson-coefficients-stabilize-with-rank.md items/ex-a-littlewood-richardson-coefficient-greater-than-one.md items/ex-littlewood-richardson-product-s21-times-s1.md items/cor-minuscule-tensor-product-rule.md items/lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient.md items/thm-steinberg-tensor-product-multiplicity-formula.md items/cor-racah-speiser-tensor-product-algorithm.md items/ex-clebsch-gordan-decomposition-for-sl2.md items/cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank.md items/ex-three-tensor-three-for-sl3.md items/prop-determinant-twists-translate-glr-highest-weights.md
```
