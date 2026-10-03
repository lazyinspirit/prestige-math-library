# Frontier 38 owner 30: local prerequisite packet for A879/B880

Date: 2026-10-02. Scope: the authorized held run `frontier-38-owner-30`, pair `classical-complex-algebraic-actions-and-affine-embeddings` / `classical-complex-algebraic-actions-and-affine-embeddings-examples`. Read CLAUDE.md, SCHEMA.md, README.md, binding AG-ACT-2, and the Brion source report. Created only the ten item files listed below and this note. No page, plan-spec, run manifest, scope ledger, task, design document, or autopilot state was edited. The existing 873 requires edge remains untouched for orchestrator reconciliation after audit.

## Source retrieval and checked full-text locators

These are full-document retrievals with the relevant complete mathematical sections inspected; they are not claims that all pages of the long Milne/Gille works were read. Sources are independent treatments, not search snippets or catalogue records. Local temporary PDFs/text are retrieval evidence, not repository artifacts.

* Michel Brion, *Introduction to actions of algebraic groups*, Les cours du CIRM 1 (2010), no.1, 1–22: `https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf`. Retrieved 678378 bytes, 23 PDF pages, SHA256 `1abc97e4b6ff41d68c4b900020709bc2ccca3e01d965d86cbd4c961a4ed0eef2`, `/tmp/ag879-source-0.pdf`, full text `/tmp/ag879-brion.txt`. Checked Definition 1.4, Lemma 1.5 and Definition 1.6 on printed p.3 (PDF p.4), Example 1.7 across printed pp.3–4 (PDF pp.4–5), Definition 1.8 and the complete proof of Proposition 1.9 on printed p.4 (PDF p.5). These supply the algebraic action/rational-module conventions, function local finiteness, torus grading dictionary, and finite-dimensional equivariant closed embedding. Lemma 1.5's printed coefficient-space sentence says `V ⊂ C[G]`; its context is functions on X, so the local argument consistently uses `V ⊂ C[X]`.
* Philippe Gille, *Introduction to reductive group schemes over rings*, author full notes marked “In construction”: `https://www.math.ens.psl.eu/~gille/prenotes/reductive.pdf` (author's notes index at `https://www.math.ens.psl.eu/~gille/notes.html` points to the equivalent Lyon-hosted `reductive.pdf`). Retrieved 805924 bytes, 113 PDF pages, SHA256 `4af2da88fd58a7da99d8a7c04c19794d842cd09c25d1f1e26ea0f261458fce12`, `/tmp/ag879-gille.pdf`, full text `/tmp/ag879-gille.txt`. Checked Proposition 6.0.5, its two coaction diagrams and complete proof, pp.25–27; Proposition 6.2.1 and complete coefficient-projector proof, pp.30–31; Theorem 6.3.1 and complete proof, p.32. Printed and PDF pages agree. The former two are valid over a base ring; the finite-dimensional union theorem explicitly assumes a field. Only their complex-field specialization is used here. General base-ring representation/embedding existence is not asserted.
* J. S. Milne, *Algebraic Groups* (2022): canonical `https://www.jmilne.org/math/Books/iAG2022.pdf`; canonical request returned HTTP406, and full retrieval at `https://www.jmilne.org/math/Books/iAG2022.pdf?x=1` succeeded, 4838013 bytes, 659 PDF pages, SHA256 `f2ddd8fa4d263085f173934664b246007a2c0bd539739b7c82de39bfb5d21f40`, `/tmp/ag879-4838013.pdf`, full text `/tmp/ag879-milne.txt`. Checked §4(a), Remark4.1 and the complete matrix/coaction calculation, printed pp.83–84 (PDF pp.94–95); Proposition4.7 and Corollary4.8 with proof, printed p.86 (PDF p.97); Theorem12.12 and Remark12.13, printed p.235 (PDF p.246), complete Laurent/group-like coefficient argument. Also inspected Exercise3-1(a), printed p.81 (PDF p.92), the function tensor-product injectivity interface. The local product-ring proof supplies the full argument instead of citing an unproved exercise.

No SGA3 full text was retrieved or claimed read. Gille's actual complete comodule proofs, independently corroborated by Milne, meet the second-source route. Brion Proposition1.9 supplies the actual affine-action embedding theorem; group linearity alone is never used as its substitute.

## Claims and full local proof routes

1. **Product ring interface:** The local product lemma works for reducible and empty algebraic sets, where the earlier irreducible-variety product theorem would not suffice. It proves surjectivity by splitting ambient polynomials into separate-variable products, and injectivity by finite independent coefficients evaluated on X. It also gives the triple-product identification needed to read coassociativity. No AC is needed.
2. **Action definition and dictionary:** The definition supplies complex affine groups, regular inversion/multiplication, rational modules, equivariance, group-coordinate coalgebra identities, and both tensor conventions. The proposition proves the bijection between direct-action algebra coactions `δ:A→H⊗A` and left actions by affine morphism reconstruction, then converts to the inverse-action right comodule `c:A→A⊗H`. Evaluating c gives `r(g)f(x)=f(g⁻¹x)` and a true left representation. Its proof includes equivariant maps. Brion Definitions1.4/1.6/1.8 and Gille Proposition6.0.5/Milne Remark4.1 independently confirm these conventions and identities.
3. **Finite-dimensional comodule supplier:** Coassociativity and a quotient map force the finite coefficient space of c(v) to be a subcomodule; the counit puts v in it. Finite sums handle a finite family and directedness. Explicit finite tensor independence proves the needed quotient-kernel statement without selecting an infinite vector-space basis. Matrix entries and inverse entries obtained by inversion prove an actual morphism to GL(W), not just abstract invariance. This is a complete local specialization of Gille Theorem6.3.1 and Milne Proposition4.7/Corollary4.8; unlike their printed basis proofs, this proof has no infinite-basis AC use.
4. **Coordinate local finiteness:** Apply the preceding comodule lemma to the inverse-action algebra coaction. Multiplication/unit are preserved explicitly. Brion Lemma1.5 is the matching direct treatment. Reducible X and disconnected G are retained; no reductivity is needed.
5. **Torus grading dictionary:** Unique Laurent coefficients give mutually orthogonal projectors p_m and a direct sum decomposition, with finite support for each vector. Conversely a direct sum gives a coaction and a rational action. Finite rational submodule coactions glue because Laurent polynomials are determined by their evaluations, proving the rational-module/coaction equivalence in this torus case. Intertwining maps preserve degrees. The algebra law is exactly A_m A_n ⊂ A_(m+n), with 1∈A_0; a reduced finite-type graded algebra is realized by a radical polynomial presentation and the published Nullstellensatz, then the dictionary reconstructs its action. Point weights and function weights are explicitly opposite. Brion Example1.7, Gille Proposition6.2.1 and Milne Theorem12.12/Remark12.13 each give this route.
6. **Equivariant closed embedding:** Put finitely many algebra generators in one finite-dimensional rational submodule W. The dual action is algebraic by transpose/inversion. The surjection C[z_i]→C[X] has radical kernel; Nullstellensatz identifies its quotient with the closed set V(I), and affine morphism antiequivalence gives the inverse isomorphism. Evaluation is explicitly equivariant by `(gι(x))(w)=w(gx)`. Empty X is handled by the unit ideal. This completes every step of Brion Proposition1.9's argument, including the hidden closed-immersion dictionary; Gille/Milne supply its independent finite-dimensional comodule input.
7. **B reuse:** The torus example applies the A grading theorem and A embedding theorem, computing coordinate weights (-1,1), degree-zero ring C[xy], and dual point weights (1,-1). The conjugate-translation counterexample is an abstract action by individually regular translations whose joint map is not regular; an alleged conjugation polynomial would equal z on the real line and fail at i. Its coordinate subspace span(1,z) has a nonregular matrix coefficient, so even though translates are locally finite as abstract vector spaces the module is not rational. The parabola example applies the A embedding construction with W=span(1,z,z²), computes the ambient linear dual action `(a,b,c)↦(a,b+ga,c+2gb+g²a)`, closed image a=1,c=b², and inverse x=b. These three concrete B statements are correctly tagged ai-generated with generation role; their complete proofs reuse literature-derived A suppliers. They are not dependency targets.

## Choice and hypothesis accounting

`thm-classical-affine-morphisms-coordinate-ring-antiequivalence`, `thm-classical-affine-nullstellensatz-correspondence`, and `thm-classical-affine-global-regular-functions-coordinate-ring` explicitly assume AC through their published Nullstellensatz route. Consequently the action/coaction proposition, affine coordinate-local-finiteness theorem (using that dictionary), affine realization portion of the torus lemma, embedding theorem, and consuming B items explicitly list `def-axiom-of-choice` and state where it is inherited. The conjugation counterexample also cites the published global-regular-function theorem, so its Given states AC for both that supplier and the action/coaction supplier. The product-ring lemma, group/action definition, general comodule finite-subspace lemma, and torus vector-space coefficient/projector argument make only finite selections. No arbitrary basis selection is disguised as finite choice. The principal results keep all original complex affine-action claims; no group-scheme pair is used, and no connectedness, irreducibility or reductivity was added.

## Page assignment and explicit dependency order

A879 has seven items; B880 has three. Each is below the 100-item bound. No page files exist for this pair yet, and no placements were written by this author. The following is the exact proposed order, with the actual frontmatter deps and raw final item hashes. All nonpacket deps already resolve to published items; no AG873/877 item or page is a logical prerequisite of this packet.

1. **A879: `lem-classical-affine-algebraic-set-product-coordinate-ring`** — `items/lem-classical-affine-algebraic-set-product-coordinate-ring.md`

   Deps: `thm-classical-polynomial-functions-equal-coordinate-ring`, `def-classical-affine-coordinate-ring`.

   Raw SHA256: `ff53cb553f3142a9a50322ce443838182285cff198d61c46f18e24b2c56c3702`.

2. **A879: `def-rational-action-on-affine-variety`** — `items/def-rational-action-on-affine-variety.md`

   Deps: `def-classical-affine-coordinate-ring`, `def-classical-affine-variety-morphism`, `lem-classical-affine-algebraic-set-product-coordinate-ring`.

   Raw SHA256: `2f2e125df3d137425de1c0c84a468bfa78a12af8ac55737825d35ce46720f812`.

3. **A879: `prop-affine-algebraic-actions-coordinate-ring-coaction`** — `items/prop-affine-algebraic-actions-coordinate-ring-coaction.md`

   Deps: `def-rational-action-on-affine-variety`, `lem-classical-affine-algebraic-set-product-coordinate-ring`, `thm-classical-affine-morphisms-coordinate-ring-antiequivalence`, `def-axiom-of-choice`.

   Raw SHA256: `2123e3b7ee16fef99697d5c501600c97c6228d8446833e1c964f3f39cb9fdbf1`.

4. **A879: `lem-complex-affine-group-comodule-local-finiteness`** — `items/lem-complex-affine-group-comodule-local-finiteness.md`

   Deps: `def-rational-action-on-affine-variety`.

   Raw SHA256: `1dbe5d4449b819b1f51c6249d6d060db95f9fa2dee89dc5bcdc9085bc904941f`.

5. **A879: `thm-coordinate-ring-of-affine-action-is-locally-finite`** — `items/thm-coordinate-ring-of-affine-action-is-locally-finite.md`

   Deps: `prop-affine-algebraic-actions-coordinate-ring-coaction`, `lem-complex-affine-group-comodule-local-finiteness`, `def-rational-action-on-affine-variety`, `def-axiom-of-choice`.

   Raw SHA256: `c2dd2d60a2dc164facc04b836baa9ae5da980ebf1be96bcb41fe15bbe1eb2890`.

6. **A879: `lem-torus-rational-modules-and-gradings`** — `items/lem-torus-rational-modules-and-gradings.md`

   Deps: `def-rational-action-on-affine-variety`, `prop-affine-algebraic-actions-coordinate-ring-coaction`, `def-classical-affine-coordinate-ring`, `thm-classical-affine-nullstellensatz-correspondence`, `def-axiom-of-choice`.

   Raw SHA256: `b2d3e021e89eb65b10ec0fba0c9023a2f0e85d46d2e6686fd908a9c8a60131ab`.

7. **A879: `thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module`** — `items/thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module.md`

   Deps: `def-rational-action-on-affine-variety`, `thm-coordinate-ring-of-affine-action-is-locally-finite`, `def-classical-affine-coordinate-ring`, `thm-classical-affine-nullstellensatz-correspondence`, `thm-classical-affine-morphisms-coordinate-ring-antiequivalence`, `def-axiom-of-choice`.

   Raw SHA256: `1b4929b1526219a3777dca729ea2c587ad31bf6ccc8e403a1999253575b81823`.

8. **B880: `ex-torus-weights-and-affine-action`** — `items/ex-torus-weights-and-affine-action.md`

   Deps: `def-rational-action-on-affine-variety`, `lem-torus-rational-modules-and-gradings`, `thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module`, `def-axiom-of-choice`.

   Raw SHA256: `4675104b386d6418bcce1d447927cfe66064a24f343541db04960bd3b773835c`.

9. **B880: `cex-abstract-group-action-is-not-algebraic-action`** — `items/cex-abstract-group-action-is-not-algebraic-action.md`

   Deps: `def-rational-action-on-affine-variety`, `prop-affine-algebraic-actions-coordinate-ring-coaction`, `thm-coordinate-ring-of-affine-action-is-locally-finite`, `def-axiom-of-choice`, `thm-classical-affine-global-regular-functions-coordinate-ring`, `thm-classical-polynomial-functions-equal-coordinate-ring`.

   Raw SHA256: `e6b5802b97bcaa32f80d7ad783b4cd948c3672228cb138c34e770ce86cff012e`.

10. **B880: `ex-additive-translation-equivariant-parabola-embedding`** — `items/ex-additive-translation-equivariant-parabola-embedding.md`

   Deps: `def-rational-action-on-affine-variety`, `thm-coordinate-ring-of-affine-action-is-locally-finite`, `thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module`, `def-axiom-of-choice`.

   Raw SHA256: `6ff7751ccf85fe98ffb90a07390361c8eeeb54d6c3d269a81105aa89c51459ca`.

## Checks and invocation resolution

All nine proof-bearing items passed the normative `node tools/tsx-run.mjs tools/precheck.mts` on the explicit changed paths. All ten files passed `node tools/rendercheck.mjs` on explicit changed paths; it parsed both frontmatter and all math with the actual renderer YAML parser/KaTeX. After the final counterexample supplier/AC edit, that file's precheck and rendercheck were rerun successfully. The canonical precheck proposed sequential phases; all items now use 1.1,2.1,… with correspondingly updated step tags. `verification.precheck: pass` means only this mechanical format pass. No mathematical audit/judge/acceptance is claimed.

After the final item edit, invoked exactly:

```sh
node tools/proof-layout.mjs items/lem-classical-affine-algebraic-set-product-coordinate-ring.md items/def-rational-action-on-affine-variety.md items/prop-affine-algebraic-actions-coordinate-ring-coaction.md items/lem-complex-affine-group-comodule-local-finiteness.md items/thm-coordinate-ring-of-affine-action-is-locally-finite.md items/lem-torus-rational-modules-and-gradings.md items/thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module.md items/ex-torus-weights-and-affine-action.md items/cex-abstract-group-action-is-not-algebraic-action.md items/ex-additive-translation-equivariant-parabola-embedding.md
```

This returned exit1 before any layout result, with the exact error:

```text
ERROR proof-layout: renderer failed (file:///home/lazyinspirit/Projects/prestige-intelligence/web/components/library/ItemBody.tsx:11
        return <MathMarkdown>{content}</MathMarkdown>;
               ^
SyntaxError: Unexpected token '<'
...
Node.js v22.22.1
)
```

The sibling worker tsx package is absent and the existing fallback TypeScript loader leaves TSX JSX untransformed. No toolchain or global settings were edited. At the orchestrator's direction, reran the documented tool on the same explicit paths with the existing temporary app view prepared by the A885 author. That view uses symlinks to the unchanged actual web checkout and worker sources, and makes the app's already installed web tsx package visible through the loader's worker lookup:

```sh
PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs items/lem-classical-affine-algebraic-set-product-coordinate-ring.md items/def-rational-action-on-affine-variety.md items/prop-affine-algebraic-actions-coordinate-ring-coaction.md items/lem-complex-affine-group-comodule-local-finiteness.md items/thm-coordinate-ring-of-affine-action-is-locally-finite.md items/lem-torus-rational-modules-and-gradings.md items/thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module.md items/ex-torus-weights-and-affine-action.md items/cex-abstract-group-action-is-not-algebraic-action.md items/ex-additive-translation-equivariant-parabola-embedding.md
```

Result: exit0, `proof-layout: 10 items, 21 steps, 0 defects`. This used the actual application renderer, not a substituted checker. The initial default invocation failure is retained above as evidence; the subsequent read-only lookup override completes layout verification. No unresolved mathematical prerequisite, source, or local format blocker remains identified by this author. Independent audit and the orchestrator's authorized integration/page inventory/edge reconciliation remain outstanding. No gate was attempted and no engine state was changed.
