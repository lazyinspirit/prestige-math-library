# Reader 21 — batch 21, frontier-42-coxeter-32

## Scope and opened inventory

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, the relevant Step-5 clauses of `WORKFLOW.md`, the exact batch manifest, and the complete batch proof-contract entries. The live engine status confirms Step 5a; historical resume files were not used. Review concerns current mathematics, independently of author decisions.

Assigned pages, both opened completely:

- `library/coxeter-groups/crystallographic-root-lattices-and-weyl-group-interfaces.md` (A).
- `library/coxeter-groups/crystallographic-root-lattices-and-weyl-group-interfaces-examples.md` (B).

Prerequisite page summaries opened as context:

- `library/coxeter-groups/finite-coxeter-diagrams-and-complete-classification.md`.
- `library/lie-theory/root-systems-dynkin-diagrams-and-cartan-killing-classification.md`.

All seven assigned carriers were opened completely, including frontmatter, titles, facts, arguments and remarks:

- `items/def-cg-crystallographic-scaling-coroot-and-lattice.md`.
- `items/lem-cg-integer-pairings-and-allowed-dihedral-labels.md`.
- `items/thm-cg-crystallographic-finite-type-and-lattice-stability.md`.
- `items/ex-cg-a2-root-and-weight-lattices.md`.
- `items/ex-cg-b2-c2-dual-realizations-and-lattices.md`.
- `items/ex-cg-g2-from-i2-six.md`.
- `items/cex-cg-i2-five-is-not-crystallographic.md`.

The verification followed the scaling definition, reflection algebra and sign suppliers, integrality lemma, finite-type suppliers and theorem, then the example computations and label-five refutation. Deeper prerequisites were followed when exposed by these arguments; some transitive suppliers were opened after initial navigation of their consumers, before completing those consumers' review.

Direct prerequisite items opened for their consumed definitions/statements and relevant arguments:

- `items/def-cartan-matrix-of-a-based-root-system.md`.
- `items/def-cg-canonical-reflection-homomorphism.md`.
- `items/def-cg-coxeter-diagram-components-and-finite-type.md`.
- `items/def-cg-real-coxeter-form-and-reflection.md`.
- `items/def-coroot-and-dual-root-system.md`.
- `items/def-definiteness-inertia-and-signature-data-over-the-reals.md`.
- `items/def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention.md`.
- `items/def-fundamental-weights.md`.
- `items/def-hh-coxeter-matrix-word-group-and-length.md`.
- `items/def-linear-basis.md`.
- `items/def-orthogonality-and-orthogonal-complement.md`.
- `items/def-pi-via-first-positive-cosine-zero.md`.
- `items/def-positive-system-and-base-of-simple-roots.md`.
- `items/def-real-and-complex-inner-product-space.md`.
- `items/def-reduced-crystallographic-euclidean-root-system.md`.
- `items/def-reducible-and-irreducible-root-system.md`.
- `items/def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice.md`.
- `items/def-sine-and-cosine-by-power-series.md`.
- `items/def-tree-forest-and-leaf.md`.
- `items/def-weyl-group-of-a-root-system.md`.
- `items/ex-classical-root-systems-in-euclidean-coordinates.md`.
- `items/lem-cg-positive-definite-diagram-exclusions.md`.
- `items/lem-cg-reflection-form-invariance-and-rank-two-orders.md`.
- `items/lem-cg-reflection-representation-descends-and-root-norms.md`.
- `items/prop-distinct-simple-roots-have-nonpositive-inner-product.md`.
- `items/prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types.md`.
- `items/prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system.md`.
- `items/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces.md`.
- `items/thm-cg-finite-coxeter-classification-including-h-and-dihedral.md`.
- `items/thm-cg-finite-type-positive-definite-criterion.md`.
- `items/thm-cg-root-length-criterion-and-faithfulness.md`.
- `items/thm-cg-root-sign-and-simple-reflection-positivity.md`.
- `items/thm-cofunction-supplementary-and-reflection-identities.md`.
- `items/thm-double-angle-and-power-reduction-identities.md`.
- `items/thm-finite-dimensional-orthogonal-decomposition.md`.
- `items/thm-quarter-turn-values-and-shift-formulas.md`.
- `items/thm-rank-nullity.md`.
- `items/thm-rank-two-root-system-classification.md`.
- `items/thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates.md`.
- `items/thm-sine-cosine-signs-monotonicity-and-ranges.md`.
- `items/thm-tree-characterisations.md`.

Additional prerequisite items opened (the chamber, signed-action and parabolic arguments were traced; classification/existence were checked for the root-system interfaces consumed here):

- `items/def-cg-dual-chambers-and-reflection-hyperplanes.md`.
- `items/lem-cg-dual-action-and-chamber-faces-exist.md`.
- `items/lem-cg-rank-two-prefix-and-chamber-length-induction.md`.
- `items/lem-cg-diagram-products-and-invariant-form-comparison.md`.
- `items/thm-cg-dual-chamber-intersections-and-point-stabilizers.md`.
- `items/def-hh-geometric-coxeter-representation-and-roots.md`.
- `items/lem-hh-dihedral-root-recurrence-and-root-sign.md`.
- `items/thm-hh-coxeter-exchange-deletion-and-faithfulness.md`.
- `items/thm-hh-matsumoto-reduced-word-theorem.md`.
- `items/thm-hh-parabolic-minimal-representatives-and-length-additivity.md`.
- `items/thm-classification-of-irreducible-reduced-crystallographic-root-systems.md`.
- `items/thm-existence-of-each-classified-root-system.md`.
- `items/lem-viete-finite-cosine-product-and-nested-radicals.md`.

## Mathematical checks

- **Scaling definition:** positive multiples of the coordinate basis give well-defined simple coroots and free root/coroot groups. The pairing map has kernel `rad(B)`; equal finite dimensions and rank-nullity give the nondegenerate lattice criterion. In the degenerate example, `P={x e_s+y e_t:x-y in (1/2)Z}` contains the radical line. The definition explicitly qualifies the term “weight lattice” there. Rank zero gives `Phi_c=empty` and `Q=Q^vee=P={0}`.
- **Integrality lemma:** checked both reflection formulas, including the transposed indices in the coroot formula; integer matrices and involutivity prove stability of both lattices. Positive scaling transfers the supplied root-sign theorem to the scaled basis. Form invariance converts an arbitrary root-coroot pairing to an integer simple-coroot pairing. Strict Cauchy–Schwarz and the locally derived cosine values give labels 2,3,4,6. Unique tree paths make the recursive scaling consistent; finite component selection needs no AC. The connected ratio conclusion uses the no-cycle and unique-large-edge hypotheses, both supplied.
- **Finite-type theorem:** reviewed both criterion directions and the converse Weyl-system obstruction. The finite classification supplies precisely the forests needed for the construction. Integrality alone permits proportional factors 1/2,1,2; the componentwise squared-norm ratios rule out 1/2 and 2, establishing reducedness. The regular vector and signed integral coordinates make each scaled normal simple; the supplied simple-root basis theorem excludes extra simple roots. All root reflections are conjugates of generator reflections, and the opened faithfulness theorem gives the stated group isomorphism. The four explicit two-dimensional reflection matrices have orders 2,3,4,6. Inverting the unique nontrivial length ratio transposes the scaled matrix. The theorem already distinguishes this matrix from the published row-coroot convention.
- **A2:** checked the six-element reflection orbit, the isometry to the sum-zero plane, coroot scaling, the third-integer coordinate description, fundamental weights and the cyclic quotient of order three. The B2/C2 comparison indices follow from the displayed dual pairing conditions, rather than an unproved general determinant formula.
- **B2/C2:** checked both eight-root orbits, their coordinate images, the simple-root decompositions, the root/coroot lattice interchange, both index-two quotients and `Phi_c'=(1/sqrt(2))Phi_c^vee`. The coordinate Cartan matrices use rows indexed by coroots; the scaled matrices use rows indexed by roots.
- **G2:** checked both generator matrices, all six positive root images, squared norms 1,3,1,1,3,3, and the product with cube `-I`. The twelve distinct matrices, separated by determinant, match the presentation's upper bound of twelve. Reflection conjugation verifies stability under all root reflections; distinct lines establish reducedness. The explicit regular vector pairs to one with each simple root. The other orientation is `(sqrt(3)/2)Phi_c^vee`. An exact rational calculation independently checked all 144 root-coroot pairings and the three displayed values: 1,1,-1.
- **I2(5):** positive definiteness is supplied by the opened rank-two reflection lemma. The interval derivation `4cos^2(pi/5)=2+2cos(2pi/5) in (2,3)` refutes both scaling existence and the proposed root-system base pairing. The counterexample remains present.

## Sources actually consulted

- [Milne, LAG v2.00](https://www.jmilne.org/math/CourseNotes/LAG.pdf), Chapter I §7, 7.22–7.25, printed p. 76: root lattice, coroot dual weight lattice and fundamental weights. Read the complete relevant subsection, including the note that its proofs remain incomplete. Used for conventions, with the arguments verified locally.
- [Knapp, second edition](https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf), Chapter II §5, Proposition 2.48 and its complete proof, printed pp. 152–154: proportional-root possibilities, the strict Schwarz product bound, root differences and root strings. Chapter IV §7, Propositions 4.62 and 4.64 and their displayed proofs, printed pp. 266–267: simple-coroot integrality and the Cartan-determinant index in the semisimple compact-group context. Its integer diagonalization lemma is explicitly omitted; the assigned examples compute their indices directly.
- [Davis, author manuscript](https://people.math.osu.edu/davis.12/davisbook.pdf), Appendix D.1, printed pp. 439–442: dual representation, Theorem D.1.1, Corollaries D.1.2–D.1.3, Lemma D.1.5 and its finite/infinite rank-two proof, and the concluding reduction to Tits' lemma. The local prefix-induction and faithfulness proofs were examined independently. This source check did not reconstruct every earlier chapter invoked by Davis.
- [Michel, Coxeter lectures](https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf), §5, printed pp. 12–14: Proposition 5.14 and proof, Theorem 5.15's cosine table and positivity/determinant discussion, and the cycle/neighbour exclusions. In particular the table gives squared cosines 0,1/4,1/2,(3+sqrt(5))/8,3/4 for labels 2–6. The remaining arm-classification source argument was not used as a replacement for the opened local proof.

## Repairs and evidence

1. **`ex-cg-a2-root-and-weight-lattices`, Proof 1.1:** the numeric Gram entry was attributed only to the cosine-form definition; that definition supplies `-cos(pi/3)`, not its evaluated value. Added F15 with the exact double-angle, supplementary, monotonicity, quarter-turn and pi-positivity suppliers and a concise derivation: `z>0`, `2z^2-1=-z`, hence `z=1/2`. Added those dependencies and the matching five contract citations and derivation inputs. The initial attempt to quote the earlier lemma's proof was rejected by the contract validator, whose source sections exclude Proof; the final repair establishes the value locally from allowable exact statement quotations. Statement and title unchanged.
2. **`ex-cg-b2-c2-dual-realizations-and-lattices`, Proof 1.4:** beta1,beta2 and gamma1,gamma2 were used before their definitions (the beta roots were never defined). Defined all four coordinate vectors before using them. The displayed decompositions and simple-root conclusions now have explicit subjects.
3. **Same B2/C2 item, F17 and Proof 2.3:** disambiguated the coordinate matrix convention by citing `def-cartan-matrix-of-a-based-root-system` and writing all four ordered off-diagonal pairings. This resolves the ambiguity between the scaled row-root matrices in the statement and the published row-coroot matrices in the coordinate computation. Added the dependency and contract citation/inputs. Statement unchanged.
4. **Same B2/C2 item, F18 and Proof 1.1,1.2,3.1:** recorded the exact `cos(pi/4)=sqrt(2)/2` supplier, `lem-viete-finite-cosine-product-and-nested-radicals`, whose statement and full proof were opened; added dependency and contract evidence. This supplies the evaluated cosine used for the quadratic form, scales and isometry.
5. **Batch contract only:** refreshed five stale quotation records: theorem F5/F6 (finite classification), theorem F12/F13 (diagram exclusions), and counterexample F5 (finite classification). The current suppliers include the infinity-cosine convention and qualified nonnegative-witness comparison; their consumed finite classification and tree/large-edge conclusions are unchanged. Also corrected the definition's rank-one boundary from “unique scaling” to “every positive scaling”; corrected the theorem's empty boundary to an empty root set rather than the zero lattice; removed the obsolete assertion that the direct classification supplier path remains open after checking its current proof. These changes affect this batch's contracts only.

Neither changed item contained a `verification.judge` record. No judge or audit acceptance record was added. No page prose, manifest, plan, other-batch item or published carrier was edited.

## Validation and current bytes

Final checks after all item edits:

- Reflow on each changed item: unchanged.
- Precheck on each changed item: PASS, one proof checked, zero failures each.
- Rendercheck on both changed items: YAML and all math parsed successfully.
- Strict proof-contract check: zero errors, zero warnings, 7/7 items checked. The earlier two invalid Proof-section citations were corrected before this final pass.
- Final batched `node tools/proof-layout.mjs items/ex-cg-a2-root-and-weight-lattices.md items/ex-cg-b2-c2-dual-realizations-and-lattices.md`: two items, twenty steps, zero defects.

Raw SHA-256s identify the reader edits without constituting acceptance stamps:

- `ex-cg-a2-root-and-weight-lattices`: observed before `2832cfe0b060a9fed11b7e06785ea65fdce4a53e03a3c78c27f552c873dc80be`; final `7459a2bf256f2ebf3e28688388c196fe5d4d7a0e4479d5a33597f85b96c0b27b`.
- `ex-cg-b2-c2-dual-realizations-and-lattices`: observed before `f9ab018598ea67eb0e5968e5058f6a908e122a24cad8da1a6c1b66c4f27535f3`; final `7b599181e133734b757aac7299aed44882bf4f3af9630076c15cfca8eefa1595`.

## Page verdicts, uneditable defects and limitations

- **A — crystallographic-root-lattices-and-weyl-group-interfaces:** no remaining mathematical defect found in its three items or summary. Its finiteness and definiteness restrictions are essential and retained.
- **B — crystallographic-root-lattices-and-weyl-group-interfaces-examples:** no remaining mathematical defect found after the two item repairs. Its summary matches the checked computations. A targeted reverse-dependency search found no theory-item dependency on any of its four leaves. B prose was read without editing.

No confirmed or suspected uneditable defect remains; the findings array is empty. No withdrawal is proposed and no task blocker remains.

Coverage is a complete reader review of the seven assigned items and two assigned pages, with all direct mathematical suppliers opened and additional relevant supplier arguments traced. It is not an exhaustive re-audit of every foundational item reachable through transitive dependencies, all items on the prerequisite pages, or every bibliography chapter. Source PDF text was used for the sections identified above; an unavailable local PDF text extractor did not prevent those web reads. Run-wide gates, independent judging and publication are outside this reader handoff.
