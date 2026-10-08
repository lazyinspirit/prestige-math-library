# Reader 22 — batch 22, frontier-42-coxeter-32

Independent Step 5a review of the current authored mathematics. No judgments or certification records were issued. Only assigned draft items, their affected proof contracts, and assigned A-page prose are edited. No proposed withdrawal is necessary.

## Opened inventory and order

Opened `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, and `research/frontier-42-coxeter-32-batch-22.pages.json`. The manifest lists the following A/B pair; both page sources were opened completely:

- `library/coxeter-groups/large-spherical-metric-flags-and-the-moussong-girth-theorem.md` (A).
- `library/coxeter-groups/large-spherical-metric-flags-and-the-moussong-girth-theorem-examples.md` (B, read only).

All ten assigned item sources were opened, including statements/definitions/examples, facts, complete numbered arguments, remarks and source records. The proof chain was checked supplier first: Gram/link conventions and metric suppliers; large-complex definition; products/joins; face links; restricted Coxeter presentation and finite-type suppliers; nerve; compact short-loop suppliers; minimum-loop reduction; three-edge contradiction; dimension induction; nerve corollary; explicit examples.

1. `def-cg-large-spherical-metric-flag-and-almost-negative-matrix`.
2. `lem-cg-cat-zero-products-and-cat-one-joins`.
3. `lem-cg-metric-flag-links-and-local-cat-one`.
4. `def-cg-coxeter-nerve-and-moussong-metric`.
5. `lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion`.
6. `thm-cg-large-metric-flag-short-loop-radial-contradiction`.
7. `thm-cg-large-metric-flag-complexes-are-cat-one`.
8. `cor-cg-coxeter-nerve-is-cat-one-and-has-girth-at-least-two-pi`.
9. `ex-cg-a-tilde-2-nerve-perimeter-two-pi-and-vanishing-gram-determinant`.
10. `ex-cg-all-right-triangle-versus-disconnected-universal-coxeter-nerve`.

Opened the assigned proof-contract file and cross-batch dependency evidence. Earlier labels of verified/open were not used as verdicts. No rendered reader evidence bundle was found among the exact batch artifacts or live state files.

### Outside suppliers opened

Complete relevant definitions or statements, and numbered proofs for the substantive metric/comparison and short-loop suppliers, were opened. Foundational results listed below were checked at their consumed statements; this is not a new audit of their entire transitive foundations.

- `def-cg-spherical-gram-simplex-and-angular-link`; `lem-cg-spherical-simplex-existence-and-link-gram-formula` (Gram realization, radial comparison, component metric/geodesics, normalized face links, and full numbered proof).
- `def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric`; `thm-cg-polyhedral-chain-metric-topology-and-properness` (standing hypotheses and metric/topology/properness statement).
- `def-cg-euclidean-cone-and-spherical-join-metrics`; `thm-cg-cone-join-metric-and-local-product-chart` (complete argument, particularly steps 4.2 and 7.1).
- `def-cg-cat-zero-cat-one-and-local-geodesic`; `lem-cg-comparison-convexity-and-model-spaces`; `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion`; `lem-cg-cat-one-short-and-closed-local-geodesics` (complete relevant arguments).
- `def-hh-coxeter-matrix-word-group-and-length`; `def-cg-real-coxeter-form-and-reflection`; `def-cg-coxeter-diagram-components-and-finite-type`; `thm-hh-parabolic-minimal-representatives-and-length-additivity` (statement and proof, notably clause/step 2); `thm-cg-finite-type-positive-definite-criterion` (statement and full proof).
- `def-cg-short-loop-homotopy-and-nonshrinkability`; `thm-cg-compact-local-cat-one-short-circle-criterion`; `lem-cg-bowditch-quantitative-short-loop-control`; `lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity` (complete relevant arguments).
- `def-cg-cyclic-small-mesh-polygon-and-midpoint-energy`; `lem-cg-polygon-midpoint-drop-and-equality`; `lem-cg-uniform-energy-decrement-and-short-class-closedness`; `lem-cg-comparison-product-perturbation-and-degenerate-limits` (statements and complete arguments); `lem-cg-finite-spherical-comparison-disks-and-radius-estimates` (statement and complete proof); `lem-cg-local-cat-one-products-from-sine-comparison` (complete proof).
- `def-abstract-simplicial-complex`; `def-simplicial-subcomplex-star-closure-and-link`; `def-definiteness-inertia-and-signature-data-over-the-reals`; `thm-sylvesters-criterion-for-positive-definiteness`; `thm-determinant-is-the-unique-normalized-alternating-multilinear-function` (the latter does not supply the claimed singularity criterion); `thm-real-square-matrix-invertible-iff-determinant-nonzero` (replacement exact statement).
- `def-free-product-of-a-family-of-groups`; `def-symmetric-group`; `lem-symmetric-group-is-a-group` (definitions and consumed statement for the additional elementary verifications).
- `def-metric-space`; `def-metric-ball`; `def-geodesic-and-geodesic-metric-space`; `def-euclidean-spheres-and-closed-balls`; `lem-metrics-on-rn`; `def-real-and-complex-inner-product-space`; `cor-inner-product-induces-a-norm`; `thm-cauchy-schwarz-in-an-inner-product-space`; `cor-pi-is-the-first-positive-sine-zero`; `def-principal-inverse-sine-and-cosine`.
- `def-axiom-of-choice`; `thm-finite-products-of-compact-spaces`; `lem-closed-subset-of-a-compact-space-is-compact`; `thm-compact-implies-the-other-compactness-forms`; `thm-continuous-image-of-a-compact-space-is-compact`; `thm-extreme-value-metric`; `thm-heine-cantor-metric`; `def-sine-and-cosine-by-power-series`; `lem-sine-and-cosine-series-converge-everywhere`; `thm-sine-and-cosine-addition-formulas`; `thm-quarter-turn-values-and-shift-formulas`.

## Confirmed defects repaired and evidence

- **Large-complex definition, Definition (4): false link-vertex description.** Adjacency to all vertices of a face does not imply membership in its link. In the affine three-cycle, the third vertex is adjacent to both endpoints of an edge, but the triple is not a simplex and the edge link is empty. Replaced the vertex criterion by `F union {t}` being a simplex and explicitly required link cells to be disjoint from `F`. Evidence: the opened combinatorial-link definition and Gram simplex face-link formula. The assigned consumers use actual cofaces and remain valid.
- **Products/joins lemma, proof 2.2: chord/angular confusion.** The induced product distance between unit-radius cone points is `sqrt(2-2 cos d_J)`, not the angular join distance. Replaced the false metric pullback inference with the radial cone pullback and the radius-1,s,1 chord argument from the opened cone/join supplier, proof 4.2. Separation and all triangle-inequality cases are explicit. Added positive radii in the ball claims, as required by `def-metric-ball`.
- **Face-link lemma, Statement (i) and proof 3.1: normalization omitted.** A diagonal-one link Gram matrix is the diagonally normalized Schur complement, not the raw complement. Corrected the description and explicitly stated that positive diagonal congruence preserves positive definiteness. **Proof 3.3:** added the nonnegative coefficient calculation that ensures every link direction really extends to radius pi/2; an opposite-face lower bound alone did not prove surjectivity of the entire radial cap. **F8:** replaced the incorrect comparison-lemma clause-(iii) citation for convex CAT(1) inheritance by the assigned join lemma's clause (iii). The zero-dimensional statement now correctly retains constant triangles.
- **Three-edge contradiction theorem, title and F5:** included local CAT(1) in the title; restricted the supplier assertion to *some* shortest circle chosen to maximize vertex visits. The supplier's edge-reduction assertion is existential, not a claim that every shortest circle is already an edge loop. The consuming existence argument is unchanged.
- **Dimension-induction theorem, proof 1.1:** retained equal pairs and their constant segments in the zero-dimensional base; the previous literal assertion that there were no pairs at distance below pi was false for a nonempty space.
- **Nerve corollary, F7 and proof 3.1:** separated a cell link (a spherical simplex) from the glued complex link. Supplied the global normalized link matrix on genuine coface vertices, its positive diagonal, its nonpositive off-diagonals under successive elimination, and the exact principal-submatrix/coface equivalence. This proves the asserted nerve identification instead of treating the single-simplex supplier as a theorem about arbitrary glued links. CAT(1) and embedded-circle girth conclusions are preserved.
- **Affine example, F5 and citations:** the opened determinant uniqueness theorem asserts alternating-multilinear uniqueness, not invertibility iff nonzero determinant. Replaced it with the exact real-matrix determinant criterion. **Verification 1.1:** added the six normal forms and their distinct permutation images to establish the claimed dihedral order six, which finiteness alone did not establish. **Example (i), Verification 1.2:** distinguished the raw 3/4-diagonal Schur complement from its normalization, proved non-positive-definiteness before using it to exclude the link edge, and derived distance pi from the two isolated components rather than interpreting a nonexistent edge geometrically. **Verification 3.1:** distance is the minimum of the two circular arc lengths, not the assertion that either arc minimizes. The perimeter and girth remain exactly 2pi. Source locators now describe general matrix/nerve material and the non-strict girth bound; the equality computation is local.
- **All-right/disconnected example, Example (ii)-(iii) and Verification 1.2, 2.2, 3.1, 4.1:** added the free-product universal-property argument; retained equal pairs and constant triangles; removed the false description of an edgeless nerve as a complete graph, the nonexistent universal-nerve edge of length pi, and the claim that the metric-flag test never applies (singletons still qualify). Restricted the boundary shortening to small arcs and replaced the incorrect assertion that all arcs shorter than 2pi minimize by the local minimizing property. The two girths remain infinite.
- **A-page summary:** its assertions that the minimum-loop proof and downstream CAT(1) consequences were still open were stale relative to the current complete item. Updated the summary to the actual local-to-tangent proof, genuine excursion, confined insertion, edge reduction and induction. Draft status is preserved. B-page prose is unchanged.

Synchronized the affected contract citation quotations, use lists and derivation claims with the repairs, including 42 stale quotation rows and exact supplier records for the new elementary verifications. Historical independent review metadata is preserved; no fresh independent acceptance is implied. Removed stale item `verification.judge` entries if present.

## Review of the unchanged minimum-loop reduction

Checked the current proof independently, not against its former open labels. Steps 1.1–2.2 establish the first-exit cap geometry, use untruncated compact components, and derive minimization below the first injectivity threshold. Steps 3.1–4.1 fix a midpoint subsequence before introducing arbitrary test points and obtain cone CAT(0), hence link CAT(1). Steps 5.1–7.1 use local cap isometries for curve lengths, force an equator-to-equator excursion of length pi, and develop only its actual angular trace. Step 8.1 rotates that isometric trace sector with fixed endpoints and constant length; old vertex visits are outside its open cap. Steps 9.1–11.1 maximize visits and rule out a higher-dimensional outgoing support by the unique radial path to another visited support vertex. This closes the edge reduction without a global ambient development or Moussong's disputed strict star-avoiding inequality.

## External source reading

- [Davis, author manuscript](https://people.math.osu.edu/davis.12/davisbook.pdf), Appendix I.7.3–I.7.5, printed pp. 521–522: read the link proof and the complete metric-flag proof sketch. It uses dimension induction, a shortest nonshrinkable curve, constant-length vertex insertion, a maximum-visit edge reduction, and exclusion of the resulting three-circuit. The assigned proof supplies the details omitted by that sketch.
- [Moussong, McCammond transcription](https://people.math.osu.edu/davis.12/papers/moussongdissertation.pdf), Lemmas 5.4–5.5, printed pp. 11–12: read the complete cone wrapping and equatorial-containment arguments. The actual trace development in the assigned item follows this geometric principle.
- [Charney–Davis](https://msp.org/pjm/1995/171-1/pjm-v171-n1-p04-s.pdf), §§2.4.1 and 2.7–2.10: read the projected-vector link calculation and the metric-flag definition/theorem. Their terminology for a large space differs from the assigned edge-length convention, which is explicitly distinguished in the definition.
- [Möller](https://arxiv.org/pdf/2205.07791), Proposition 3.4 and Lemma 3.10, printed pp. 7 and 10–12: read the non-strict girth statement and the full explicit counterexample to the unrestricted strict inequality. The source supplies no affine equality computation at Proposition 3.4. Neither repaired proof consumes that disputed inequality.
- Opened the author-hosted Bridson–Haefliger PDF, but did not obtain a legible relevant extracted section from that browse. The complete local cone/comparison supplier proofs were checked directly. Bowditch's author-hosted PDF returned an access error; no reading of that original PDF is claimed. The current in-library short-loop proof and its relevant polygon suppliers were opened instead.

## Page verdicts and remaining limitations

- **A page:** mathematical chain is supported after the listed repairs; remain draft for the independent build workflow. No reader certification is issued.
- **B page:** explicit examples and unchanged summary are supported after the item repairs; remain draft. No B-page edit was made.

No uneditable mathematical defect has been established. No withdrawal or mathematical blocker is proposed. Coverage is of all assigned content and the listed exact supplier uses, with complete substantive proofs as specified; it does not claim a new audit of every foundational transitive item or inaccessible original sources. Validation results are recorded below.

## Validation

- Ran `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` for each of the eight edited items; all exited 0 and reported unchanged.
- Ran `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` for each. The definition returned 0 checked/0 failing; all seven proof-bearing items pass. The first pass flagged two supplier paragraph numbers as apparent local forward references. Reworded those external paragraph locators without changing their citations or mathematics, synchronized the contracts, and reran reflow/precheck for those two; both pass.
- After all item edits and reflow, ran one explicit batched `node tools/proof-layout.mjs` command on all eight edited item paths: exit 0, `8 items, 48 steps, 0 defects`.
- Ran `node tools/rendercheck.mjs` on those same eight explicit paths: exit 0; all frontmatter blocks and math spans parse, with no delimiter/wikilink defects.
- The findings JSON parses and contains bare batch ID `22` and an empty findings array. These local checks are not independent mathematical certification.
