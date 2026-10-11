# Reader 45 — batch 45

Run: `frontier-44-special-representation-examples-28-six-step`. Reader review completed with the limitations below; no acceptance or judge stamp is asserted.

## Assigned inventory opened

- `library/representation-theory/quiver-full-flag-projective-semisimplicity.md` (A).
- `library/representation-theory/quiver-full-flag-projective-semisimplicity-examples.md` (B; read only).
- `items/lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification.md`.
- `items/cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero.md`.
- `items/ex-one-color-quiver-full-flags-need-not-be-semismall.md`.
- `items/ex-two-vertex-multiple-arrow-incidence-compactifications.md`.
- Exact batch pages manifest and proof contracts. Reviewed authored carriers independently of the manifest's proposed strategies.

## Repairs completed

1. Geometry lemma, boundary remark: dimensions one at both ends can leave arrow coefficients free, as shown by word `(j,i)` with one arrow. Zero-dimensional endpoints instead give zero Hom summands. Explicitly exclude those zero summands before the determinant-dual identity in step 5.1; define their associated tautological bundles as zero.
2. Geometry lemma, steps 4.2–6.1: make absolute projectivity follow from the displayed closed embeddings in products of projective varieties, and smoothness from bundle charts. For the relative flag base, give its closed partial-flag realization in absolute Grassmannians. A smooth closed subvariety conclusion cannot follow from closedness alone.
3. Two-vertex example, step 1.1: the word `(j,i)` starts with `V_j`, not `V_i`; each fixed word has one flag.
4. Corollary, step 1.1: explicitly compute ordinary stalks after forgetting equivariance; an arbitrary point inclusion is not a `G_V`-equivariant map. Six-operation supplier Proof 1.1 provides the restriction-compatible ordinary computation. Remove the unused conditional F13 tag, whose all-fibre-open dimension hypothesis is not supplied by a constant-coefficient fibre bound.
5. One-color example, step 2.1: state the defining semismall inequality on a constant-fibre-dimension target stratum before applying it to the sole point stratum. This closes the unstated definitional prerequisite without changing the example's claim.
6. Synchronize all four affected contract derivations with the actual numbered proof rows. Fix the geometry contract's properness locator (step 4.1, not 3.1), the one-color empty-case text (one incidence map), the corollary's zero-dimensional frame-factor description, and its step 5.1 self-reference. Refresh corollary F3, F5 and F9 quotations from the current supplier sections: old F3 quoted a nonexistent action-nerve augmentation, old F5 omitted the action convention and misdescribed the trivial-group model, and old F9 lacked the current invariant-support qualifications. Those errors were in this batch's contract quotations; the suppliers opened in this review already contain the corrected text. No historical supplier defect is claimed.

The two false boundary/flag assertions were definite mathematical errors, not merely proof omissions. The projective-chart and stalk explanations close short local omissions. The lemma's Statement, corollary's Statement, and both Example claims are preserved. None of the four carriers had a `verification.judge` record to remove. No page prose or outside-batch carrier was edited. F13 remains an accurately conditional context fact/dependency, but it is absent from the proof tags and contract uses: the proof does not assert or need its all-fibre-open hypothesis.

## Mathematical checks

- In adapted increasing flags, an arrow coefficient from occurrence p to q is allowed precisely when q<p; looplessness excludes the diagonal. This checks the rank, source dimension, and both word computations directly.
- Relative flag spaces are closed partial-flag loci with terminal planes in absolute Grassmannians. Bundle charts give smoothness and dimension s_N+f. After omitting zero Hom summands, the determinant twist embeds (E_N+O) tensor D in a finite trivial bundle; line projectivization is unchanged by a line twist. Closed projective embeddings establish absolute projectivity, independently of smoothness.
- Proper fibre cohomology gives the ordinary amplitude [-d_nu,2f-d_nu]. The chosen r_N is at least the width of the finite sum, hence at least 2f for each individual object. The model shift is s_N=u_N-g, so its source dimension is d_nu+s_N.
- Ordinary open restriction commutes with intermediate extension. The dense smooth support open remains nonempty after restriction to E_N; surjectivity on fundamental groups preserves local-system irreducibility. Thus the restricted perverse summands are simple or zero.
- Orthogonal projectors lift through the actual degree-zero ring comparison, split in the idempotent-complete Cartesian category, and exact conservative perverse normalization reflects their concentration and simplicity. No semismall, ADE or paving hypothesis enters. Characteristic zero is used in the compact-source decomposition/scalar-extension suppliers, not in the finite rank arithmetic.
- The empty dimension vector gives the trivial-group point and k[0]; the one-color map has defect n(n-1)/2, positive exactly for n>=2. With dimensions one at both vertices, the two ranks are 0 and h, with compactifications the point [0:1] and identity P^h, also when h=0.

## Evidence already consulted

- Varagnolo–Vasserot, https://arxiv.org/pdf/0901.3992, §§1.1–1.3, PDF pp. 3–6: graded flags, stable incidence, proper projection, Cartesian simplicial category, and semisimple shifted incidence pushforwards (1.5).
- Bozec, https://arxiv.org/pdf/1401.5302, §1.1, PDF pp. 2–3: increasing flags and stable incidence; semisimplicity of the proper incidence pushforward. This confirms the increasing-word convention.
- Milne, https://www.jmilne.org/math/CourseNotes/AG.pdf, §6.m, printed pp. 150–152, Proposition 6.29 and “Flag varieties”: complementary-subspace charts and closed projective flag realization; §6.n begins Bézout on p. 152.
- Bernstein–Lunts, https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf, §1.9, Appendix A2–A3, §§2.2, 2.7–2.8 and Appendix B1–B6 and §§3.1, 5.1–5.3: interval comparison, resolution triples, and the actual Cartesian simplicial derived category. Web tool timed out; the complete PDF was fetched separately and relevant sections extracted with PyMuPDF.
- de Cataldo–Migliorini, https://arxiv.org/pdf/math/0306030, Theorem 2.1.1(b),(c), printed pp. 7–8: rational compact projective splitting and semisimplicity. Only these statement sections, not the entire Hodge proof, have been read externally.

## Dependency inventory and extent

The following direct suppliers were opened in full, including their proof where present:

- `cor-projective-variety-product-exists`
- `def-axiom-of-choice`
- `def-projective-bundle-scheme`
- `lem-grassmannian-standard-affine-charts`
- `thm-plucker-image-closed`
- `thm-projective-morphism-proper`
- `def-equivariant-constructible-derived-category-for-complex-algebraic-varieties`
- `lem-algebraic-open-inclusion-surjects-on-fundamental-groups`
- `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology`
- `lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom`
- `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom`
- `thm-constructible-six-functors-proper-base-change-and-verdier-duality`
- `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`
- `lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative`
- `thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`
- `thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology`

The conditional Statement of `thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint` was opened; its long adjoint proof was not audited because that conditional result is not used in the repaired corollary. Additional suppliers opened in full:

- `lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure`
- `lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity`
- `lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences`
- `thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps`
- `lem-analytic-constructible-sheaves-admit-coherent-six-operations`
- `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`
- `lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap`

For `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction`, only the Statement, Facts, and embedded component Statements/Facts were opened. Its 94-kB joint Hodge induction proof was not fully read. The compact-source theorem was checked as a reduction to its supplied rational package and the independently read finite-algebra scalar-extension argument; this report does not claim a new full audit of that Hodge package or of all transitive triangulation, injective-resolution, mixed-Hodge and topology prerequisites. Supplier targets and the relevant interfaces were opened before the assigned corollary and examples; deeper supplier proofs were followed adaptively rather than claiming a topological ordering of the entire transitive corpus.

## Validation

For each of the four changed item paths, ran `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` followed by `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`: all exited 0; each precheck reported one checked proof and zero failures. No judge or audit stamp was added.

After the final item edit and formatter, ran one command containing all four changed paths:

```text
node tools/proof-layout.mjs items/lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification.md items/ex-one-color-quiver-full-flags-need-not-be-semismall.md items/ex-two-vertex-multiple-arrow-incidence-compactifications.md items/cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero.md
```

Result: `proof-layout: 4 items, 18 steps, 0 defects` (exit 0). An earlier three-item layout check also passed before the final example clarification. These are local format checks, not mathematical certification.

## Page verdicts and remaining findings

- **A — quiver-full-flag-projective-semisimplicity:** its summary matches the repaired incidence construction and the corollary's actual argument. No remaining batch-local defect identified, subject to the supplier-audit limitations above. No prose edit needed.
- **B — quiver-full-flag-projective-semisimplicity-examples:** its summary matches both computations and compactifications, including n=0,1 and h=0 boundaries. Read-only page; no page defect identified.

No confirmed or suspected uneditable defect was identified in the material reviewed. No proposed withdrawal, missing source needed for a local repair, or validation blocker remains. Findings JSON therefore has an empty array. The substantive coverage limit is the absence of a new full audit of the deep transitive Hodge/conical/injective packages and of the complete BBD text, not a claim that those packages have been independently re-proved here.
