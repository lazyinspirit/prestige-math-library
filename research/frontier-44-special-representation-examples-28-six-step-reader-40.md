# reader-40 — batch 40

Independent Step 3a mathematical reading of the current authored carriers. The actual six-step engine status was PAUSED at Step 3a, with no engine worker in flight; the assigned carriers were drafts. Repository instructions, the assigned reader brief, the exact batch manifest and proof contracts were opened. Earlier author acceptance was not used as a verdict. No run transition, judge, certification, publication or withdrawal was performed.

## Opened inventory and order

Both assigned pages were opened completely:

- `library/special-topics-in-representation-theory/equivariant-borel-moore-correspondence-convolution-and-constructible-ext.md` (A).
- `library/special-topics-in-representation-theory/equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples.md` (B).

All seven assigned item bodies were opened completely, supplier-first: the analytic/duality and equivariant suppliers below preceded the diagonal lemma; the lemma preceded the convolution definition; the definition and the finite-Hom supplier preceded the corner theorem; that theorem preceded the product theorem, the flag-incidence application and the two examples. The examples were evaluated independently, including both composition orders.

- `items/lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports.md`.
- `items/def-equivariant-borel-moore-homology-and-correspondence-convolution.md`.
- `items/thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product.md`.
- `items/thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution.md`.
- `items/lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus.md`.
- `items/ex-unequal-dimensional-proper-pushforwards-have-the-summed-dimension-ext-bm-shift.md`.
- `items/ex-a-point-and-projective-line-check-source-first-convolution-and-opposite-composition.md`.

The original direct supplier inventory was opened at its statements/definitions and relevant proof clauses:

- `items/cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary.md`.
- `items/cor-projective-variety-product-exists.md`.
- `items/def-axiom-of-choice.md`.
- `items/def-complex-projective-space-and-holomorphic-charts.md`.
- `items/def-cw-complex-with-closure-finiteness-and-weak-topology.md`.
- `items/def-equivariant-constructible-derived-category-for-complex-algebraic-varieties.md`.
- `items/def-proper-morphism.md`.
- `items/def-schubert-cells-in-real-and-complex-grassmannians.md`.
- `items/def-stiefel-space-grassmannian-and-tautological-bundle.md`.
- `items/lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom.md`.
- `items/lem-closed-immersion-proper.md`.
- `items/lem-flag-variety-of-a-vector-space.md`.
- `items/lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom.md`.
- `items/thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace.md`.
- `items/thm-cellular-cochains-compute-cohomology-with-local-coefficients.md`.
- `items/thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology.md`.
- `items/thm-constructible-six-functors-proper-base-change-and-verdier-duality.md`.
- `items/thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars.md`.
- `items/thm-projective-space-proper-over-base.md`.
- `items/thm-schubert-cells-give-the-stable-grassmannian-cw-structure.md`.
- `items/thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle.md`.
- `items/thm-verdier-duality-on-oriented-stratified-complex-varieties.md`.

Additional prerequisites/source targets opened to close or check the repairs:

- `items/def-euler-class-by-zero-section-pullback-of-the-thom-class.md`.
- `items/thm-thom-isomorphism-for-oriented-vector-bundles.md`.
- `items/thm-external-product-and-whitney-sum-formulas-for-thom-classes.md`.
- `items/lem-proper-stable-base-change.md`.
- `items/lem-proper-stable-composition.md`.
- `items/lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology.md`.
- `items/lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent.md`.
- `items/lem-thom-isomorphism-extends-over-a-finite-numerable-trivializing-cover.md`.
- `items/lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences.md`.

The acyclic-fiber lemma was read at its Statement/Facts; it documents the exact acyclicity and output hypotheses, not a full fresh proof audit. The singular/sheaf comparison was checked at its Statement and relevant resolution/comparison clauses. The topology and algebraic-geometry suppliers were reviewed only for the clauses actually used. The complete transitive conical/derived-incidence prerequisite tree was not independently re-proved. No task-specific rendered evidence bundle was available in the exact batch artifact listing; current carriers supplied the mathematical evidence.

## Repairs and evidence

1. **Diagonal lemma, Proof 1.1–3.1.** Replaced the wrong arrow `k_Y -> Delta_* k_M[2d]` by the purity counit `Delta_* k_M[-2d] -> k_Y`. The former is not a Thom class: for `M=C^d`, `d>0`, its Hom group is `H^(2d)(C^d;k)=0`. The existing Verdier orientation and exceptional adjunction instead give `Delta^!k_Y=k_M[-2d]`, whose positively normalized identity has exactly the corrected adjoint. Pulled that counit back by proper base change to `theta_*k_T[-2d] -> k_(A x B)` and explicitly composed a dualizing class with it, then used `theta_* ⊣ theta^!`, to produce the supported Borel–Moore class of degree `n-2d`. This preserves support and does not assert purity of the singular pullback. Replaced the unsupported/global-from-local equality argument by the graph factorization of `q`, the supported graph counit, product evaluation, and the supplied pasting/composition-of-counits identities. Removed the mistaken attribution of supported Hom to ordinary `theta^* ⊣ theta_*`.

2. **Diagonal lemma, Proof 5.1 and Facts F5/A1.** Removed the invalid substitution `M=X, d=c`, which confused base dimension with bundle rank. The zero-section normal pair uses the rank-`c` complex fiber and gives `s^!k_V=k_X[-2c]`, also over a singular base. Added the exact local Thom, ordered-product and Euler-definition suppliers. The relative-to-absolute map is now explicit in the Euler comparison. Self-intersection is obtained by restricting the supported Thom class and applying the projection formula.

3. **Convolution definition, Sheaf model and Borel clauses.** The original `u^*v^! -> v'^!u'^*` was ill-typed under its own projection names. Replaced it by `v'^*u^! -> u'^!v^*`, with its explicit adjoint `u'_!v'^*u^!C -> v^*u_!u^!C -> v^*C`. Restricted the claimed stable-value justification to the supplied sufficiently acyclic Stiefel stages and coherent product-resolution comparisons; other models require the same comparison and quotient hypotheses. Freeness by itself does not prove stabilization. Added the opened proper-base-change supplier for middle-forgetting properness. The BM normalization, source-first order, corner degrees and geometric product are unchanged.

4. **Product theorem, Proof 3.1 and 7.1.** Updated the actual supported comparison to use the corrected global purity counit and its proved mate. Replaced the ill-typed phrase identifying `U` with `id_(L_i)` by the diagonal cohomological correspondence `q_!k_Z -> q_!delta_*k_X=k_X`. Restricting the inverse-chain unit to the diagonal is the identity; exceptional transitivity identifies its kernel with the positive diagonal fundamental class. Stated the total unit as the finite sum of diagonal classes. All object shifts and the sum-minus-middle dimension calculation remain intact.

5. **Flag-incidence lemma, Facts F5 and Proof 3.1–4.1.** The proper-morphism definition did not supply composition/base-change theorems. Added their opened proved suppliers. Checked matrix stability in the full word, including parallel/opposite arrows and zero vector-space factors. The Stiefel flag base is the projective closed nested-subspace locus; its associated vector bundle retracts to that base, giving CW type. Explained the metric and finite numeration needed for the Thom/Euler supplier, the CW-model/naturality transfer of the integral Euler/top-Chern identity and coefficient extension to `k`. Explained the local product relative-duality formula giving smooth oriented pullbacks and preserved refined, rather than false ordinary, purity on singular pullbacks. No numerical KLR crossing formula was added or claimed.

6. **Unequal-dimensional example, Facts F2/F5 and Verification 1.2/4.1.** The Cartesian condition on simplicial sheaves is imposed even for the constant nerve; the supplier's identity-model equivalence is the reason the category reduces to the ordinary category. Added the actual singular-to-constant-sheaf cohomology lemma with its metric/contractible-open hypotheses checked on projective-line charts. Replaced a blanket projectivity/splitting assertion by the two chosen cocycle representatives giving a quasi-isomorphism. Corrected `Hom(k,k[2-j])` to the sheaf-category Hom on `P1`. Explicitly checked the forward and reverse Ext groups and BM degrees; the stated example remains unchanged.

7. **Composition example, Facts F6 and Verification 1.1/2.1/4.1.** Added the same sheaf/singular comparison. Removed the false claim that the displayed composition is the only nonzero order: `alpha[1] composed with beta` is the nonzero projector onto the `k[1]` summand of `L_2`, while `beta[-1] composed with alpha=id_k`. Gave the actual adjoint of point evaluation using the point embedding's proper trace, fixing its point-class coefficient. Independently computed the diagonal intersection: `P1 x {p}` is transverse to the diagonal with positive multiplicity one. The example checks a transverse case, not the general nontransverse theorem.

8. **Bibliography and layout, all seven assigned items.** Corrected the Ginzburg title and the erroneous 30-page description to the actual 57-page v3 PDF; fixed the malformed Varshavsky URL in the definition. Corrected Hatcher Example 0.6's PDF-page locator in both examples to PDF pp. 15–16, printed pp. 6–7. Reflow changed whitespace in the corner theorem, product theorem and examples. The six proof-bearing items retain valid blank-line-separated complete steps and final tagged QEDs.

The affected contracts were updated with current derivations, actual supplier citations, changed-source excerpts and truthful boundary evidence (the composition example no longer claims a nontransverse test). No assigned item had a judge record to preserve; none remains and none was introduced. The exact owned manifest and `research/plan-spec.json` were not edited: added supplier declarations are in the carriers/contracts and must be reconciled by the build owner where the workflow requires it.

## Outside-scope findings

The machine findings file contains the two historical batch-37 definition defects and the B-page defect; repaired subjects are absent from that array.

- **Batch 37, `def-equivariant-constructible-derived-category-for-complex-algebraic-varieties`, original Definition/The action nerve.** The claimed augmentation to `X` fails already in simplicial degree one: projection returns `x`, action returns `gx`. Scalar multiplication by `2` at `1` is a concrete counterexample. Use the unaugmented action nerve and the augmentation to `P/G` only for a principal quotient.
- **Same supplier, original Definition/The action nerve and Simplicial sheaves.** The direction of `Z_alpha` and the source/target sheaf indices were reversed, contradicting the face conventions and the correctly typed descent supplier. The exact originally read raw hash was recorded as `1ac45a7ea9d9f99b4853d96c0e00e673ddd270b2d8a7b982eab0ae95b31afff4` and matches `step3-hash-37-pre.json`. During this review another writer corrected the augmentation and both types. The subsequently opened corrected clauses have raw hash `b2fa72a2e875a91971eb854cf84c595a2ac0cbc7cbd5f0ead58898b2761cc096`. These are historical pre-source findings, not accusations about the corrected current bytes; final producer proof/contract validation belongs to that writer and the lead.
- **Assigned B page, Objective.** “Smallest non-transverse instance” is false. The support is all of `P1 x P1`, and the actual fundamental-times-point cycle meets its diagonal transversely. This prose cannot be edited by this reader. Remove that qualification or supply a real nontransverse example through the owner.

## Definition consumer checks and additional routing blocker

The corrected convolution Definition has a 29-item closure: the definition itself, five assigned downstream items, and 23 outside-batch downstream items. Its aliases are empty. The change repairs typing and supplies the actual approximation qualifications; the source-first order, `d_i+d_j-p` grading and refined drop `2d_j` persist. Every outside downstream Statement/Definition/Example and relevant direct supplier-use clause below was opened for this focused compatibility check; this does not claim a new whole-proof audit of these consumers:

- `cex-specializing-v-to-one-forgets-graded-decomposition-information`.
- `cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group`.
- `def-graded-adjustment-polynomials-in-positive-characteristic`.
- `def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators`.
- `ex-equal-color-quiver-flag-correspondence-is-nilhecke`.
- `ex-projective-versus-simple-grothendieck-classes-in-a-small-block`.
- `ex-signed-two-direction-multiedge-quiver-flag-crossing`.
- `lem-cyclotomic-extension-of-scalars-respects-the-based-quotient`.
- `lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree`.
- `lem-reduction-of-characteristic-zero-simple-modules-modulo-p`.
- `prop-qg8-categorification-transports-across-the-hecke-klr-bridge`.
- `rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers`.
- `thm-ariki-canonical-basis-theorem-in-characteristic-zero`.
- `thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero`.
- `thm-graded-specht-classes-realize-standard-fock-vectors`.
- `thm-graded-specht-heads-classify-the-graded-simple-modules`.
- `thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment`.
- `thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations`.
- `thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis`.
- `thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis`.
- `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`.
- `thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis`.
- `thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes`.

Three existing defects were exposed in two batch-43 downstream consumers, which this reader cannot edit:

- `thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis`, Facts F4, line 89: it attributes a degree drop by the **complex** dimension to the diagonal lemma. The exact supplier statement says `2d`, the real normal rank. Correct the citation and review any affected grading. Observed raw SHA-256: `30219fb8a285f26aefca555a143da18381b3bcba3587873608cd81381306eea2`.
- Same item, Proof 1.1, line 128: `H_G(F_nu;k)=H_G(pt;k)[x_1,...,x_m]` is false as a polynomial-ring identity with independent variables. Already for `G=GL_2` and its full flag, the line classes satisfy `x_1+x_2=c_1` and `x_1 x_2=c_2`; the correct ring is the quotient over `k[c_1,c_2]` by these relations, isomorphic to `k[x_1,x_2]`. Leray–Hirsch gives a finite free module over the base, not freely adjoined independent variables. Supply the projective-bundle relations and the stable Chern presentation to prove the intended ring identification.
- `thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations`, Facts F3 and Proof 1.2–1.3: the flag-incidence lemma supplies existence of the oriented calculus, not the assertion that every elementary correspondence is a flag-bundle push–pull, nor the numerical fixed-point operator or tautological fiber integral used here. Proof 1.2 also calls the numerical fixed-point action a formula of the diagonal lemma, which gives only the general supported operation. The missing local elementary-correspondence geometry and Euler/localization evaluation must be proved to establish those operators. Observed raw SHA-256: `ab511df3305e2ccf4a0ea38558fe151bd3aa7ae7cfb0c4e3626ee11a68d63880`.

These are consumers of this batch, not suppliers in an assigned consumer's dependency closure. `tools/step3-scope.mjs` lines 770–789 permit outside item findings only through a reachable supplier with an assigned consumer. Thus no truthful `consumer_id` exists for these downstream findings in this dispatch JSON; they remain explicit report-level blockers requiring owner routing to batch 43. The remaining focused downstream statements do not require a changed convention from this repair. Their independent mathematics beyond the affected interface was not audited here.

## Authoritative source evidence

- [Ginzburg, arXiv:math/9802004v3](https://arxiv.org/pdf/math/9802004), Section 2, printed pp. 7–9: the support convolution construction has the real middle-dimension drop and properness condition. Proposition 5.1, printed p. 19, its complete displayed argument and final sentence: the Ext vector-space dictionary is proved there, while product compatibility is delegated to Chriss–Ginzburg Theorem 8.6.7. This PDF therefore does not itself close the support-mate proof.
- [Varagnolo–Vasserot, arXiv:0901.3992v2](https://arxiv.org/pdf/0901.3992), Sections 1.1–1.2, printed pp. 3–4: graded flags and their stable incidence spaces, and the Cartesian simplicial-cohomology convention. Section 1.7/Lemma 1.8, printed p. 7: convolution and the Ext-algebra comparison; its proof cites Chriss–Ginzburg. Read as corroboration, not a substitute for a local proof.
- [Varshavsky, arXiv:math/0505564](https://arxiv.org/pdf/math/0505564), Definition 1.1.4/Remark 1.1.5 and Section 4.1.1(c): typed cohomological correspondences and adjunction-generated maps. Its étale framework is formal evidence for typing, not the analytic construction supplier.
- [Hatcher, Algebraic Topology](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf), Example 0.6, printed pp. 6–7/PDF pp. 15–16, complete cell-attachment description; Theorem 2.35 and its proof/application (iii), printed pp. 139–140/PDF pp. 148–149: the two-cell calculation and no-adjacent-cell differential argument. No complete-book reading is claimed.

## Validation and page verdicts

- Ran `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and then `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` for every one of the seven changed carriers: all commands exited 0; each of the six proof-bearing items passed, and the definition had zero applicable proofs.
- After the final item edits and formatters, ran one batched `node tools/proof-layout.mjs` on all seven paths: **7 items, 28 steps, 0 defects**, exit 0.
- Ran scoped `node tools/rendercheck.mjs` on those seven items and both assigned pages: **9 files passed**, including actual KaTeX and renderer YAML parsing, exit 0.
- A page `equivariant-borel-moore-correspondence-convolution-and-constructible-ext`: the local repairs preserve its mathematical summary. No additional A-prose defect was identified. Historical supplier observations and the downstream ownership/routing blockers remain for the lead; this is a reader verdict, not a stamp.
- B page `equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples`: the two item computations were repaired, but the Objective's nontransversality claim requires an owner prose correction. Page verdict: **requires correction**.

No requested withdrawal was needed. No published item, another batch's item, page prose, plan or engine state was edited. Genuine coverage limits are the unaudited deeper supplier tree, focused rather than whole-proof downstream checks, the separate writer's producer-validation ownership, and the inability to machine-route downstream findings from this consumer batch.
