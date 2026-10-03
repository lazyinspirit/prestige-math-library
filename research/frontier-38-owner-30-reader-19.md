# Reader 19 — batch 19, frontier-38-owner-30

Independent review completed. All 23 assigned items and both assigned pages have been opened. Suppliers were read before their consumers. The current autopilot status identifies Step 5a as active; all assigned items are draft carriers of this run. No gate, judge, stamp, or certification is performed by this reader.

## Opened pages

- library/representation-theory/jucys-murphy-elements-and-seminormal-forms.md (A)
- library/representation-theory/jucys-murphy-elements-and-seminormal-forms-examples.md (B; read only)

## Opened assigned items, in review order

- items/def-content-vector-of-a-standard-tableau.md
- items/def-gelfand-tsetlin-algebra-for-the-symmetric-group-chain.md
- items/def-jucys-murphy-elements-of-the-symmetric-group-algebra.md
- items/lem-symmetric-group-conjugation-to-inverse-within-the-preceding-group.md
- items/cor-jucys-murphy-elements-commute-pairwise.md
- items/lem-a-partition-is-determined-by-its-multiset-of-node-contents.md
- items/lem-addable-nodes-of-a-partition-have-distinct-contents.md
- items/lem-jucys-murphy-local-relations.md
- items/lem-relative-centralizer-for-sn-minus-one-in-sn-is-commutative.md
- items/thm-elementary-symmetric-jucys-evaluation-is-a-cycle-count-class-sum.md
- items/thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis.md
- items/lem-transposition-class-sum-acts-on-a-specht-module-by-total-content.md
- items/thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors.md
- items/thm-primitive-tableau-idempotents-by-jucys-murphy-interpolation.md
- items/thm-relative-centralizer-is-generated-by-the-previous-center-and-last-jucys-murphy-element.md
- items/ex-elementary-jucys-murphy-class-sums-through-s4.md
- items/thm-young-seminormal-form-from-jucys-murphy-eigenlines.md
- items/thm-jucys-murphy-elements-generate-the-gelfand-tsetlin-algebra.md
- items/thm-young-orthogonal-form-from-seminormal-rescaling.md
- items/cex-ordinary-jucys-murphy-projection-formulas-do-not-survive-content-collision.md
- items/ex-jucys-murphy-spectrum-and-projectors-for-s3.md
- items/thm-symmetric-polynomials-in-jucys-murphy-elements-give-the-center.md
- items/ex-seminormal-and-orthogonal-block-for-shape-two-one.md

## Opened direct dependency statements and definitions

- items/cor-complex-specht-restriction-branching-rule.md
- items/cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars.md
- items/cor-group-algebra-is-semisimple-when-char-k-does-not-divide-group-order.md
- items/cor-power-sums-generate-when-factorial-is-invertible.md
- items/def-center-of-the-group-algebra.md
- items/def-character-of-a-complex-representation.md
- items/def-column-antisymmetrizer-polytabloid-and-specht-module.md
- items/def-elementary-symmetric-polynomials.md
- items/def-finite-field-and-its-order.md
- items/def-group-ring.md
- items/def-invariant-inner-product-on-a-tabloid-module.md
- items/def-partition-young-diagram-and-conjugate-partition.md
- items/def-permutation-support-disjoint-cycles-and-cycle-type.md
- items/def-polytabloid-specht-module-over-an-arbitrary-field.md
- items/def-power-sum-and-complete-homogeneous-symmetric-polynomials.md
- items/def-removable-and-addable-nodes-of-a-partition.md
- items/def-restriction-and-extension-of-scalars.md
- items/def-row-and-column-stabilizers-of-a-tableau.md
- items/def-symmetric-group.md
- items/def-symmetric-polynomial.md
- items/def-young-subgroup-tabloid-and-permutation-module.md
- items/def-young-tableau-standard-tableau-and-shape.md
- items/lem-conjugating-a-cycle-relabels-its-entries.md
- items/lem-disjoint-cycles-commute.md
- items/lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero.md
- items/prop-trace-is-linear.md
- items/thm-class-sums-form-a-basis-of-the-center-of-k-g.md
- items/thm-complex-irreducibles-of-symmetric-groups-are-specht-modules.md
- items/thm-complex-specht-modules-are-irreducible.md
- items/thm-disjoint-cycle-decomposition.md
- items/thm-existence-of-finite-fields.md
- items/thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field.md
- items/thm-group-ring-is-a-unital-algebra-with-basis-g.md
- items/thm-newtons-identities.md
- items/thm-simple-modules-over-semisimple-rings.md
- items/thm-the-symmetric-group-has-the-coxeter-presentation.md

Additional convention checks: def-finite-dimensional-representation-of-a-group-over-a-field; def-subrepresentation-and-irreducible-representation; cor-endomorphisms-over-an-algebraically-closed-field-are-triangularisable. The scalar Schur corollary uses the repository's finite-dimensional definition of irreducibility; no missing-hypothesis finding is warranted under that convention.

## Repairs and evidence

- Centre theorem, Proof 2.1: distinct vectors need not differ in every coordinate. Replaced the product over all coordinates by one least separating coordinate for each ordered pair. The original denominator already vanishes for shapes (3,1) and (2,1,1) at coordinate p2=6.
- Seminormal theorem: removed false F2 claim s_i L_T=L_(s_i T), proved nonzero swapped component, reduced admissible chains, leading-term normalization, and corrected reverse ordering. Source: Okounkov–Vershik, Lemma 5.4, Remark 5.6 and equations (6.1)–(6.4).
- Orthogonal theorem: unit basis change requires reciprocal norms in D; corrected ratios and supplied orthogonality from self-adjoint X_k and distinct weights.
- Shape (2,1) example: corrected distinct two-box prefixes, relative scaling on the longer vector, and distinction between arrays with images as columns or as rows.
- S3 example: corrected false displayed arithmetic 1/6(1+1+1+1)=1 and distinguished stage denominators 2,3 from their product 6.
- Local relations: removed dimension-two assertion and replaced identification with H(2) by satisfaction of its relations.
- Primitive-projector remark: first denominator is at n=2, not n=3.
- S4 example: e2 combines class sums of (3,1) and (2,2); S4 has four nonidentity classes, not three.
- Elementary class-sum proof: supply commutativity prerequisite, distinguish s=0 second summand and s=n zero case, remove erroneous n=1 identity in e1.
- Modular counterexample: correct size-one prefix, earliest failure 1→2, source authorship (Andrew Mathas alone), and remove unwarranted necessity of replacing primitive idempotents by central block idempotents.
- Definition of X_k: explicit k≤m≤n inclusion domain.
- GZ-generation statement and A prose: generated finite-dimensional algebra wording and local-relation wording.

## Additional repairs and exact evidence

- `def-content-vector-of-a-standard-tableau`, Remarks: removed the universal assertion that the vector is invariant under no relabelling, which even excludes the identity. Replaced it by the actual dependence on coordinates and labels.
- `lem-symmetric-group-conjugation-to-inverse-within-the-preceding-group`, Statement: specified $h^2=1$, allowing the identity. At $n=1,2$ the subgroup may contain no element of order exactly two. Its contract's erroneous witness $h=g=(1\ 2)\in S_1$ was corrected to $h=1$.
- `thm-relative-centralizer-is-generated-by-the-previous-center-and-last-jucys-murphy-element`, Sources: the old arXiv URL `1407.8524` opens M. E. Shirokov's *On channels with positive quantum zero-error capacity having vanishing n-shot capacity*, a quantum-information paper. Replaced the URL/title/locator with Kleshchev's *Essén Lectures*, arXiv `1401.6156`, Proposition 1.2.2, printed p. 12, case $m=1$. The local proof is independent edge separation, whose two separation cases and finite product were checked directly.
- The centre theorem's original interpolation denominator fails explicitly for $(3,1)$ and $(2,1,1)$: their content multisets are $\{-1,0,1,2\}$ and $\{-2,-1,0,1\}$, with $p_2=6$ for both but $p_1=2,-2$. The least separating coordinate construction now avoids every zero denominator.
- The orthogonal theorem's original $D$ used the norms rather than their reciprocals. For shorter $T$ and longer $T'$, the actual unit-basis entry is $B_{21}=\|v_{T'}\|/\|v_T\|=\sqrt{1-r^{-2}}$. Orthogonality of the Young lines is now proved from the distinct real joint weights of the self-adjoint transposition sums. The two-box prefixes in the shape $(2,1)$ example are $(1,1)$ and $(2)$, not the same shape; in its ordering the factor $2/\sqrt3$ multiplies the first, longer vector. The exact change of basis $E^{-1}ME$ with $E=\operatorname{diag}(2/\sqrt3,1)$ gives both off-diagonal entries $\sqrt3/2$.
- The seminormal proof's old reverse-order formula omitted the factor $1-r^{-2}$ and gave the wrong diagonal sign. The final Statement and Proof 6.1 now spell out the reverse pair. The old F2 also asserted the false equality $s_iL_T=L_{s_iT}$, contradicted by the nonzero diagonal coefficient $r^{-1}$. Final Proof 2.1 proves the two-line span and the nonzero swapped component; 4.1–5.1 prove normalization compatibility without choosing mutually incompatible reduced chains. The constant $v_0$ is one supplied vector, and the label permutation is unique.
- The elementary identity proof now cites `cor-jucys-murphy-elements-commute-pairwise` before using the commutative recursion, treats $s=0$ before invoking the induction at $s-1$, and uses the vanishing-degree convention for $s=n$. Its former claim that the identity permutation belongs to the $n=1,s=1$ sum was removed.
- The modular counterexample explicitly derives dimension two from the independent tabloid differences $b_3-b_1,b_2-b_1$. The failure is the $1\to2$ interpolation step; the size-three shape illustrates residue collision. The source author is Andrew Mathas alone. The revised remark distinguishes residue-vector idempotents from central residue-linkage idempotents; the calculation does not prove that all modular constructions must replace primitive idempotents by block idempotents.
- The S4 example's former final claim about “all three cycle types” was replaced with the correct assertion about three positive-degree evaluations. These involve four nonidentity conjugacy classes, with two classes combined in $e_2$.

Fifteen assigned items were changed, together with the assigned A-page prose and `research/frontier-38-owner-30-batch-19.proof-contracts.json`. No B-page bytes, other-batch carriers, published content, plan, author decisions, or independent review records were edited. No withdrawal was needed.

## Contracts and unchanged items

Updated affected citation quotations, exact step-use lists and derivations to the final formatted items. Refreshed supplier quotations in consumer contracts. Corrected the false centre-nesting description (the subgroup algebras are nested; their centres commute), the $S_2$ conjugator witness, the empty-family description at $n=1$, the S4 class grouping, the S3 denominator/projector descriptions, and the interpolation and normalization boundary evidence. Existing independent review dispositions were preserved. The final check found no stale derivation, supplier quote, or missing cited-use step. No judge record remains in a changed carrier; none was added.

The following eight assigned items required no content repair:

| Item | Independent mathematical check |
| --- | --- |
| `def-gelfand-tsetlin-algebra-for-the-symmetric-group-chain` | Commutativity follows from centrality at the larger subgroup level; semisimplicity is not needed for that inference. |
| `cor-jucys-murphy-elements-commute-pairwise` | Central transposition sum minus the preceding sum proves the induction integrally; base change preserves the identities. |
| `lem-a-partition-is-determined-by-its-multiset-of-node-contents` | Diagonal multiplicities recover both Frobenius arm and leg sequences; the hook partition of the diagram recovers each row, including the empty case. |
| `lem-addable-nodes-of-a-partition-have-distinct-contents` | Row indices strictly separate $\lambda_i+1-i$; the empty diagram has its unique addable node. |
| `lem-relative-centralizer-for-sn-minus-one-in-sn-is-commutative` | Coefficient comparison uses a separate conjugator for each basis element, then inversion reverses products. No common conjugator is assumed. |
| `thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis` | Multiplicity-free branching constructs nonzero rank-one path projections in the irreducible blocks; finite refinement of shorter paths gives the full diagonal algebra, and its commutant is itself. |
| `lem-transposition-class-sum-acts-on-a-specht-module-by-total-content` | In $\tau=r\gamma^{-1}$, every point outside the transposition support is fixed by both row and column permutations. Thus only row transpositions with sign $+1$ and column transpositions with sign $-1$ contribute to the polytabloid coefficient. Trace gives the stated character normalization only for $m\ge2$. |
| `thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors` | Successive total-content differences give the eigenvalues. The absent-diagonal and present-diagonal cases prove the complete addable-content criterion, and forced induction proves both directions of the three-condition characterization. Eigenspace dimension one is restricted to an irreducible or the multiplicity-free sum, as explicitly specified. |

The unchanged formulas in the primitive-projector, relative-centralizer and centre-generation Statements were checked after repairing their supporting text. Direct consumers of the altered local-relations and seminormal interfaces were examined: the orthogonal theorem and shape $(2,1)$ example use the same shorter/longer convention; relative-centralizer generation uses only the unchanged commutation relation. The characteristic-two and S3 examples continue to use the unchanged projector formula. The clarification $h^2=1$ supplies exactly the self-inverse conjugator used by the coefficient argument.

## Sources actually inspected

- [Okounkov–Vershik, arXiv math/0503040](https://arxiv.org/pdf/math/0503040): relevant local relations and eigenvector calculation, Proposition 4.1 and equation (4.2), printed pp. 14–16; the complete admissible-chain argument in Lemma 5.4 and Remark 5.6, printed pp. 20–21; the normalization argument and equations (6.1)–(6.5), printed pp. 22–23. They distinguish two-line action from an eigenline permutation. The repair writes out the leading-term compatibility rather than assuming it.
- [Garsia, *Young Seminormal Representation*](https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf): Theorem 4.2 and its proof, printed p. 30; Theorem 5.10 and its printed argument, pp. 51–52. The item uses an independent integral insertion bijection for the elementary identity. The scanned source's displayed specialization argument omits the factor corresponding to the zero content in one product; that printed expression is not used as a logical prerequisite.
- [Kleshchev, *Essén Lectures*, arXiv 1401.6156](https://arxiv.org/pdf/1401.6156): Proposition 1.2.2 and its complete proof, printed p. 12. Specializing the centralizer generation statement to one additional letter gives the claimed generators. The incorrect former URL was opened and identified by its title and author before correction.
- [Andrew Mathas, arXiv math/0604108](https://arxiv.org/pdf/math/0604108): title/author page; residue-class construction around Lemma 4.2 and Definition 4.3, printed pp. 15–16; Theorem 4.5 with proof and the qualification that the summands need not be indecomposable, printed p. 17; Corollary 4.7, printed p. 18. The item only needs the elementary denominator counterexample; no general modular replacement theorem is taken as proved locally.
- [James, *The Representation Theory of the Symmetric Groups*](https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf): §25, especially the distinction between natural polytabloid matrices in 25.2 and the orthonormal formula 25.4, printed pp. 114–115. This was a statement/convention check; I do not claim to have read James's entire proof in pp. 116–124. The actual repair is supported by the complete relevant Okounkov–Vershik argument and the explicit local derivation.

## Uneditable finding and page verdicts

**B-page ordering:** `library/representation-theory/jucys-murphy-elements-and-seminormal-forms-examples.md`, frontmatter `examples`, lines 9–10, lists `ex-jucys-murphy-spectrum-and-projectors-for-s3` before its declared same-page prerequisite `cex-ordinary-jucys-murphy-projection-formulas-do-not-survive-content-collision`. The example's `deps` and Proof 6.1 actually use the counterexample. SCHEMA.md permits a B-homed prerequisite only earlier on the same B page. This is a nonfatal ill-formed reading order, not a false mathematical theorem. It cannot be edited under this dispatch's permission for assigned items and A-page prose. The lead can place the counterexample before this consumer and adjust the prose sequence if needed.

- **A page — reader verdict:** satisfactory after the documented item repairs and prose corrections; no unresolved mathematical defect identified.
- **B page — reader verdict:** computations and prose mathematically satisfactory after its assigned item repairs; the nonfatal frontmatter reading-order defect remains for the lead.

## Validation and limitations

- Ran `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` for every changed item. The two definition files have no proof-bearing section and precheck reports no applicable proof; the other thirteen pass. Initial precheck requests for canonical phase numbering in the seminormal theorem and its shape $(2,1)$ example were adopted, with references and contract locators updated; their final rerun passed.
- After the final item edits and formatters, ran the final explicit batched `node tools/proof-layout.mjs` command on all fifteen changed item paths: **15 items, 86 numbered steps, 0 defects**. No item was edited after that run.
- `node tools/rendercheck.mjs` on all 23 assigned items and both pages: **25 files, exit 0**, valid YAML and real KaTeX parsing. The final scalar correction in the shape (2,1) image-placement remark was followed by its own reflow/precheck and targeted rendercheck (exit 0), then the final fifteen-item proof-layout batch.
- Exact rational permutation-algebra calculation: all four S3 projector squares, twelve distinct ordered cross-products and sum to identity passed; elementary evaluations had term counts $(1,3,2)$ for S3 and $(1,6,11,6)$ for S4 and exactly the asserted cycle-count supports.
- Independently generated every standard tableau through $n=7$ and checked the corrected rational blocks: involution, braid and distant-commutation identities all passed, **6,346 relations** across size-one through size-seven tableaux. This is finite corroboration, not a general proof or independent judgment of the repaired carriers.
- All assigned item bodies and page prose were read; needed direct supplier statements/definitions, selected supplier proofs, finite-dimensional conventions and the listed source passages were checked. This is not an exhaustive re-audit of every transitive published prerequisite proof or every bibliography entry. No published dependency defect was confirmed. The only unresolved blocker to a fully ordered reading path is the B-page frontmatter issue above; there is no unresolved mathematical uncertainty in the reviewed assigned arguments.
