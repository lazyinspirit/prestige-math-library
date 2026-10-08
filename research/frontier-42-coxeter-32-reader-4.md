# Reader 4 — batch 4, frontier-42-coxeter-32

Independent Step 5a review completed. Both assigned pages and all nine current item bodies were reviewed. Seven assigned draft items and their affected proof contracts were repaired; no page body was changed. No unresolved mathematical finding remains in the reviewed material. These are reader conclusions, not judge stamps or certification.

## Opened inventory and order

Instructions/evidence opened: `CLAUDE.md` and `README.md` in full; `briefs/reader.md`; the relevant item/proof/source clauses of `SCHEMA.md`; `research/frontier-42-coxeter-32-batch-4.pages.json`; and the batch's complete contract mappings, boundary records, and affected derivations in `research/frontier-42-coxeter-32-batch-4.proof-contracts.json`. Only source-relevant search excerpts from the author notes and cross-batch dependency file were consulted. Their decisions were not treated as mathematical verdicts. No rendered evidence bundle was supplied with this dispatch; the current item bodies were the mathematical carriers reviewed.

Pages opened in full:

- `library/coxeter-groups/real-forms-and-reflection-geometry.md` (A).
- `library/coxeter-groups/real-forms-and-reflection-geometry-examples.md` (B).

Assigned item bodies opened in this supplier-before-consumer order, after opening their relevant external targets:

1. `items/def-cg-real-coxeter-form-and-reflection.md`.
2. `items/lem-cg-reflection-form-invariance-and-rank-two-orders.md`.
3. `items/def-cg-canonical-reflection-homomorphism.md`.
4. `items/lem-cg-reflection-representation-descends-and-root-norms.md`.
5. `items/def-cg-dual-chambers-and-reflection-hyperplanes.md`.
6. `items/lem-cg-dual-action-and-chamber-faces-exist.md`.
7. `items/ex-cg-null-normal-admits-no-displayed-reflection.md`.
8. `items/ex-cg-reflection-matrices-in-positive-lorentzian-and-radical-planes.md`.
9. `items/ex-cg-finite-dihedral-rotation-and-infinite-unipotent-rank-two-product.md`.

The following 47 external item bodies or complete relevant definition/statement/proof sections were opened. The draft Coxeter-presentation definition was treated as another-batch context; no result about exchange, faithfulness, or parabolic structure was assumed from its later justifiers. The actual presentation universal property was checked against the proved free-group and quotient suppliers.

- `items/cor-pi-is-the-first-positive-sine-zero.md`.
- `items/cor-trigonometric-parity-and-pythagorean-identity.md`.
- `items/def-algebraic-dual-and-linear-functional.md`.
- `items/def-bilinear-symmetric-skew-and-alternating-forms.md`.
- `items/def-coordinate-column-and-matrix-of-a-linear-map.md`.
- `items/def-definiteness-inertia-and-signature-data-over-the-reals.md`.
- `items/def-dimension.md`.
- `items/def-dual-family-associated-to-a-basis.md`.
- `items/def-function-space.md`.
- `items/def-generated-subgroup.md`.
- `items/def-group.md`.
- `items/def-group-homomorphism.md`.
- `items/def-group-presentation.md`.
- `items/def-hh-coxeter-matrix-word-group-and-length.md`.
- `items/def-internal-direct-sum.md`.
- `items/def-kernel-and-image-of-a-linear-map.md`.
- `items/def-linear-basis.md`.
- `items/def-linear-combination-and-span.md`.
- `items/def-linear-isomorphism-and-invertible-linear-map.md`.
- `items/def-linear-map.md`.
- `items/def-linear-subspace.md`.
- `items/def-matrix-product-and-identity-matrix.md`.
- `items/def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form.md`.
- `items/def-pi-via-first-positive-cosine-zero.md`.
- `items/def-rank-and-nullity.md`.
- `items/def-sine-and-cosine-by-power-series.md`.
- `items/def-sum-of-linear-subspaces.md`.
- `items/def-vector-space-of-linear-maps.md`.
- `items/lem-composition-and-identity-linear-maps.md`.
- `items/lem-direct-sum-criterion.md`.
- `items/lem-integer-part.md`.
- `items/lem-monoid-units-form-a-group.md`.
- `items/lem-standard-basis-of-f-n.md`.
- `items/lem-vector-space-elementary-consequences.md`.
- `items/thm-bilinear-forms-correspond-to-linear-maps-into-the-dual.md`.
- `items/thm-dual-family-is-a-basis-in-finite-dimension.md`.
- `items/thm-matrix-of-a-composite-is-the-product.md`.
- `items/thm-quarter-turn-values-and-shift-formulas.md`.
- `items/thm-quotient-group-universal-property.md`.
- `items/thm-rank-nullity.md`.
- `items/thm-reals-ordered-field.md`.
- `items/thm-reduced-words-form-the-free-group.md`.
- `items/thm-sine-and-cosine-addition-formulas.md`.
- `items/thm-sine-cosine-signs-monotonicity-and-ranges.md`.
- `items/thm-sine-cosine-zero-sets-and-fundamental-period.md`.
- `items/thm-unique-coordinates-with-respect-to-an-ordered-basis.md`.
- `items/thm-von-dyck.md`.

## Mathematical checks and repairs

### Form, reflection, and presentation suppliers

The basis expansion and finite bilinear extension are explicit, including the empty-set case. The reflection calculation requires only symmetry and a nonzero norm; the hyperplane dimension follows from a nonzero functional and rank-nullity. The finite rank-two Gram form is positive definite, so solving its two equations really gives the whole-space decomposition used to lift the plane relation to $V$. The sine recurrence handles $m\ge3$, with $m=2$ separated before division by $\sin(2\pi/m)$. The nilpotent matrix has square zero and nonzero multiples in characteristic zero. These arguments do not require nondegeneracy of the ambient Coxeter form.

- **`def-cg-real-coxeter-form-and-reflection`, Sources:** corrected the Davis locator for (6.32)–(6.33) to printed pp. 116–117. Corrected the Lusztig invariant-form locator from §1.11 to Appendix A.1, printed p. 131. The authored definition and its mathematical scope were retained.
- **`lem-cg-reflection-form-invariance-and-rank-two-orders`, Given and Sources:** qualified the distinct pair $s,t$ as data for the rank-two clauses, so the general clauses remain readable for $|S|<2$. Corrected Björner–Brenti Example 1.2.7 from pp. 7–8 to printed p. 6. No statement was narrowed.
- **`lem-cg-reflection-representation-descends-and-root-norms`, Proof 1.3:** restored $g\in\mathrm{GL}(V)$ in the proof-local hypothesis before using $g^{-1}$. The Statement already had this essential condition; merely being a form-preserving linear map need not imply invertibility when the form is degenerate. Corrected the invariant-form source locator to Lusztig Appendix A.1. Descent, form preservation, unit root norms, and conjugation were checked directly; in particular the finite relation on $V$ comes from the supplier's whole-space conclusion, not just from an invariant plane.

### Dual action and chambers

The global dual action uses the inverse and has the correct composition order. Only the subgroup preserving $P$ acts on $P^*$, through restriction, and its restriction kernel is trivial by the explicit dihedral normal forms. The finite model gives $e_s=u$, $e_t=-\cos\theta\,u+\sin\theta\,v$ and rotation by $2\theta$. The four finite root orbit families give all $2m$ directions, including both parity classes when $m$ is even.

Repairs in **`lem-cg-dual-action-and-chamber-faces-exist`**:

- **Statement (3), root-hyperplane convention:** restricted the normal from arbitrary $\beta\in P$ to $\beta\in\Phi_P$. The previous wording included $\beta=0$, whose kernel is the whole dual plane and is not a hyperplane. This corrects the convention without changing any promised root-wall conclusion.
- **Facts F1, F2, F5:** made the rank-two order/power and unit-root-norm suppliers explicit; replaced the basis citation to a definition with the actual basis assertion in the assigned rank-two lemma.
- **Proof 1.3:** supplied the missing hyperplane justification. A root has norm $1$, hence has a nonzero coordinate; evaluating at its coordinate functional shows that $\mathrm{ev}_\alpha$ is nonzero. Added the precise rank-nullity supplier as F9 to conclude codimension one.
- **Proof 2.1:** removed the assertion that an arbitrary vector of $P$ can be written as $\cos\varphi\,u+\sin\varphi\,v$. That expression has unit norm. The orbit computation needs only the explicitly displayed unit roots and remains unchanged.
- **Proof 2.2:** replaced the abbreviated infinite root-orbit assertion with the four exact families
  $A^ke_s=(1+2k,2k)$, $A^ke_t=(-2k,1-2k)$, $A^kr_se_s=(-1-2k,-2k)$, and $A^kr_se_t=(2+2k,1+2k)$. Their union is exactly $\{(j+1,j),(j,j+1):j\in\mathbb Z\}$. Merely knowing $a-b=\pm1$ did not supply integer coordinates or exhaustive integer wall traces. The corrected wall equation $(a-b)y_s+b=0$ gives all and only integer traces.
- **Proof 2.2 and F8:** computed the two interval-image families explicitly and cited `lem-integer-part` to justify coverage of every real coordinate. Ordered-field arithmetic alone does not give this Archimedean coverage. Added this exact supplier to `deps`.
- **Proof 3.1:** supplied an explicit inverse for $\flat:P\to P^*$, rather than stopping after injectivity, and proved its equivariance. This establishes precisely why the primal rotations describe the finite dual sectors.
- **Proof 4.1:** gave the angular intervals of $C_P$ and $r_sC_P$ and their $2k\theta$ translates, explicitly establishing all $2m$ sectors. Replaced the abbreviated separation argument with the convex intersection of the prescribed open half-planes, which proves separation of entire interiors.
- **Sources and Remarks:** corrected the nonexistent Lusztig “Appendix (1.1)–(1.3)” locator to Appendix A.1 and recorded the Davis boundary discrepancy below. The existing correct union $\{\delta>0\}\cup\{0\}$ was retained.

### Examples and exact computations

- **`ex-cg-null-normal-admits-no-displayed-reflection`, Example introduction and F5:** explicitly relabelled the library's coordinates $0,1$ as $x_1=x(0)$ and $x_2=x(1)$, with the same relabelling of the standard unit vectors. The previous assertion that the library's $\mathbb R^2$ literally consists of functions on $\{1,2\}$ contradicted `def-function-space` and `lem-standard-basis-of-f-n`. The contradiction for a nonzero null normal and both kernel/radical witnesses were checked without changing their mathematics.
- **`ex-cg-reflection-matrices-in-positive-lorentzian-and-radical-planes`, Example, Given, F2–F3, and Verification:** applied the same explicit coordinate convention. Removed the unsupported use of the Coxeter-form lemma as a theorem about an arbitrary symmetric $B$: its statement fixes a Coxeter form, and neither the Lorentzian nor the radical-plane form satisfies that hypothesis. New Verification 1.1 proves the general algebraic identities locally, including the exact fixed set. The three numerical computations are now 2.1–2.3 and the conclusion 3.1. The positive matrix squares to the identity and has determinant $(-49-576)/625=-1$; the Lorentzian matrix has determinant $(-25+16)/9=-1$ and preserves $\operatorname{diag}(1,-1)$; the degenerate case has precisely the displayed radical and fixed line. All numbers were retained.
- **`ex-cg-finite-dihedral-rotation-and-infinite-unipotent-rank-two-product`, Sources and infinite-case wording:** corrected Example 1.2.7 to printed p. 6 and replaced “the pair has infinite order” with the well-formed claim about its product. Checked the triple-angle derivation of $\cos(\pi/3)=1/2$, every displayed matrix power, the negative powers of $I+N$, and the transfer of order to the abstract group via a homomorphism. Absence of a relator was not used to infer infinite order.

The titles, remaining definitions and statements, witnesses, inertia readings, root/reflection conventions, and both page summaries have no outstanding defect found in this review. No proposed withdrawal was needed.

## Contracts and verification metadata

Updated affected derivations and fact-to-step mappings in `research/frontier-42-coxeter-32-batch-4.proof-contracts.json`, including the new example computation, renumbered phases, new hyperplane/integer-part suppliers, and exact orbit arguments. Removed the example's overbroad Coxeter-lemma citation and tightened the affected quotation passages. All 78 current contract quotation strings match their cited item bodies after whitespace normalization; this is a mechanical quotation check, not an independent mathematical certification.

Corrected three false boundary descriptions: the real-form definition's one-dimensional reflection clause is not vacuous; the zero endomorphism is the identity and is invertible on the zero space in the canonical-homomorphism definition; and form preservation in the descent lemma is true, rather than vacuous, when $S$ is empty. Also corrected the affected computation-step locators in the three-matrix example's boundaries. The canonical-definition boundary repair changes only its owned contract, not its item statement.

No assigned item carried a `verification.judge` record when opened, and none is present at handoff. No judge record was added. No other batch, published item, page prose, or `research/plan-spec.json` was edited.

## Authoritative source evidence

- [Davis, *The Geometry and Topology of Coxeter Groups*](https://people.math.osu.edu/davis.12/davisbook.pdf): read the complete relevant text of §6.12, printed pp. 116–118, and Appendix D.1's dual-action setup and complete two-case proof of Lemma D.1.5, printed pp. 439–441; also read Example D.2.1(i), p. 442. The proof identifies the infinite action with the two affine reflections at $0,1$ and the finite model with a sector of angle $\pi/m$. **Source discrepancy:** Example D.2.1(i) describes $U$ as the closed half-plane, but a nonzero point with $\delta=0$ cannot lie in any chamber image, since the generators preserve $\delta$ and $C_P\cap\{\delta=0\}=\{0\}$. The literal union is the open half-plane plus the origin; the closed half-plane is its closure. This is recorded as a source caveat, not imported into the library as a false claim. The web fetch timed out, but the institutional PDF downloaded successfully and these full passages were extracted with PyMuPDF.
- [Björner–Brenti, *Combinatorics of Coxeter Groups*](https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf): Example 1.2.7 and its complete dihedral argument are on printed p. 6, not pp. 7–8. Read §4.2's form/reflection construction, Proposition 4.2.1, Theorem 4.2.2, and Proposition 4.2.3 with its proof on pp. 93–94; read the symmetric choice (4.21) on p. 97 and the chamber/Tits-cone definitions on p. 123. The general weighted form on p. 93 need not be symmetric; the batch consistently uses the symmetric choice.
- [Lusztig, *Hecke Algebras with Unequal Parameters*, revised 2014](https://arxiv.org/pdf/math/0208154): read Proposition 1.3 and its complete proof on printed p. 11, including its plane characteristic polynomial, whole-space relation, and infinite nilpotent case. Read Appendix A.1's form and isometry statement on p. 131. §1.11 concerns irreducibility and is not the cited invariant-form source.

## Page verdicts

| Page | Reader verdict |
|---|---|
| `real-forms-and-reflection-geometry` (A) | Sound after the recorded supplier/proof/citation repairs. Its summary already used the correct infinite union and the subgroup action on the dual plane; no prose repair was needed. General faithfulness and higher-rank Tits-cone claims are not asserted here. |
| `real-forms-and-reflection-geometry-examples` (B) | Sound after the recorded item repairs. All three examples retain their promised witnesses and computations; the B-page summary is consistent and was not edited. |

## Validation and handoff

For each of the seven changed items, ran `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`. Final reflows reported unchanged. The definition has no proof phase (0 checked, 0 failing); all six proof-bearing items passed. The first captured three-matrix precheck requested canonical phase numbering; this was adopted, its contract updated again, and its reflow/precheck rerun successfully. An earlier check launch did not retain its completion output, so its results were not used as evidence; the captured pass above supplies the recorded results.

A further final statement check caught and repaired the zero-normal wording in the rank-two hyperplane convention; the chamber item's reflow/precheck was rerun. The earlier layout pass was superseded. After this last item edit and formatter, ran the following batched final layout check:

```text
node tools/proof-layout.mjs items/def-cg-real-coxeter-form-and-reflection.md items/lem-cg-reflection-form-invariance-and-rank-two-orders.md items/ex-cg-null-normal-admits-no-displayed-reflection.md items/ex-cg-finite-dihedral-rotation-and-infinite-unipotent-rank-two-product.md items/ex-cg-reflection-matrices-in-positive-lorentzian-and-radical-planes.md items/lem-cg-reflection-representation-descends-and-root-norms.md items/lem-cg-dual-action-and-chamber-faces-exist.md
```

Result: **7 items, 39 steps, 0 defects**. No later item edit or formatter was run.

Uneditable library findings: none. Blockers: none. Next action belongs to the Step 5b lead; no stage transition, judgment, or certification was attempted.

Coverage limit: the review covers both assigned pages, all nine current items, the 47 prerequisite targets listed above, and the complete relevant source passages specified here. Foundational prerequisite files were inspected on demand; this was not a complete recursive, topologically ordered re-audit of the entire published dependency graph. Earlier author manifests/notes were scope/context evidence and were not certified as current mathematical carriers. Source disagreement was resolved by the local computation rather than by assuming the source description correct.
