# AG-GRP-2 local prerequisite packet — A887/B888

Run: `frontier-38-owner-30`. Authoring scope: the A887/B888 items below and this note only. No plan-spec, manifest, scope-ledger, task, shared-plan, or autopilot-state edit was made by this author. The current 873 page edge is untouched for orchestrator audit. All items remain draft; the checks below are local mechanical checks, not independent mathematical acceptance.

## Ordered item placement for integration

A887 (12 items, supplier before consumer):

1. `def-multiplicative-type-coordinate-hopf-algebra`
2. `lem-multiplicative-type-local-hopf-dictionary`
3. `def-diagonalizable-group-and-character-module`
4. `lem-diagonalizable-character-antiequivalence`
5. `def-group-of-multiplicative-type-and-torus`
6. `lem-multiplicative-type-affineness-by-field-descent`
7. `lem-finite-subcoalgebras-in-multiplicative-coordinate-algebras`
8. `lem-multiplicative-type-groups-split-separably`
9. `lem-finite-galois-descent-for-multiplicative-hopf-algebras`
10. `def-continuous-galois-character-module`
11. `thm-multiplicative-type-groups-and-galois-character-modules`
12. `cor-tori-correspond-to-torsion-free-character-lattices`

B888 (3 items): `ex-split-torus-character-lattice`, `ex-nonsplit-torus-galois-action`, `cex-mu-p-is-not-a-smooth-torus`.

The packet includes all affine Hopf and split-character uses locally. No item depends on 873 or 877. Its incoming prerequisites are the selected A871 definition `def-group-scheme-over-a-field`, the published affine-ring anti-equivalence `thm-affine-scheme-ring-anti-equivalence`, affine fibre-product/global-section/morphism/gluing interfaces, and the published `lem-fpqc-cover-submersive`, the published finite Galois characterizations/correspondence and separable-closure uniqueness theorem, and `lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension`. The μ_p example additionally uses the published definitions `def-smooth-morphism-schemes` and `def-embedding-dimension-and-regular-local-ring`. Orchestrator should retain these exact published definitions in the page prerequisite closure if they are not already reached through A871.

A separable closure is fixed as given data. The packet uses the published separable-closure uniqueness theorem (under AC) only to extend finite separable embeddings and verify the fixed-field/finite-quotient assertions for the absolute Galois group; it does not choose an arbitrary invariant basis. AC is nevertheless explicitly assumed in the affineness lemma, the full classification, the separable-splitting result, and their consumers. Its precise use is the published fpqc-submersiveness supplier, a linear retraction of the splitting field obtained by extending a basis, extension of finite separable embeddings via uniqueness of separable closures, and existence of points of tensor products of residue fields in open descent. The explicit `def-axiom-of-choice` edges carry this assumption. The finite-subcoalgebra and finite stable-space arguments use only finite lists. The torsion criterion contains the elementary integer diagonalization proof, without a new PID-page prerequisite. To compare two splitting fields it takes a maximal ideal of a finite-dimensional algebra by maximal vector-space dimension, avoiding a new arbitrary-choice use.

## Mathematical route and limits for audit

The split dictionary identifies group-like functions by coefficient comparison. The finite-subcoalgebra lemma proves the coalgebra finiteness input directly by matrix coefficients of a finite right coideal. If a coordinate Hopf algebra splits over any extension, each finite coalgebra dual splits into a product over that extension. Minimal polynomials are therefore separable; interpolation idempotents split each dual over k_s. This proves the full arbitrary-extension-to-separable-extension step without importing the SGA general central-morphism rigidity theorem. Finite generation then gives a finite Galois splitting field.

The local Hopf descent lemma extends the published finite-dimensional semilinear result to arbitrary dimensions by finite Γ-stable subspaces, descends the comultiplication by identifying fixed tensors, proves finite algebra generation, and proves descent of maps. Thus neither infinite-dimensional descent nor effectiveness is left as a source-only invocation of Milne A.64/A.66. The classification spells out factorization of a continuous action through a finite Galois group, construction of its invariant Hopf algebra, recovery of the characters, descent of evaluation, and full faithfulness.

**Full group-scheme scope restored:** `def-group-of-multiplicative-type-and-torus` now defines multiplicative type and tori by fpqc local diagonalizability, without assuming affineness. `lem-multiplicative-type-affineness-by-field-descent` closes the previously flagged affineness issue: finite affine Čech equalizers prove global-section field base change; the canonical map G→Spec Γ(G) becomes an isomorphism after the splitting field extension; its inverse descends using saturated opens and the published fpqc-submersiveness supplier, followed by an explicit tensor equalizer argument for affine-target maps. It also proves that a nonempty fpqc splitting cover gives a splitting field by taking a residue field. Thus the main classification statement now covers the full finite-type group-scheme category. The earlier affine restriction has been removed. The affineness interface uses AC explicitly, as allowed by the repository contract. No 873/877 supplier is used.

## Full source retrieval and exact comparisons

Retrieved the official author PDF of Milne, *Algebraic Groups*, corrected 2022 edition, from https://www.jmilne.org/math/Books/iAG2022.pdf with a browser User-Agent after an initial request without it received HTTP 406. File `/tmp/ag887-milne.pdf`: 4,838,013 bytes, 659 PDF pages, SHA-256 `f2ddd8fa4d263085f173934664b246007a2c0bd539739b7c82de39bfb5d21f40`. Full text was extracted locally. Read the split dictionary at 12.3–12.9, pp.231–234; 12.14–12.23, pp.236–240; the arithmetic example 12.27, p.241; and Appendix A.64–A.66, pp.584–585.

Retrieved complete exposé PDFs through the Polo/Gille SGA3 index https://webusers.imj-prg.fr/~patrick.polo/SGA3/ :

| Full source | URL | Size / pages | SHA-256 |
|---|---|---|---|
| VIII, version 1.1 of 8 November 2009 | https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp8-8nov09.pdf | 440,912 bytes / 30 pages | `06e43e0571d411cc5579975778fcc03c8ecaa67189248d1a053e61dc653af510` |
| IX, version 1.0 of 8 November 2009 | https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp9-8nov09.pdf | 448,941 bytes / 32 pages | `7c1e3d5b9d01ad01d0dd7b8b62045d012052e7890fb37adc3e7934ebb5fd6fc3` |
| X, version marked 6 November 2009 internally | https://webusers.imj-prg.fr/~patrick.polo/SGA3/Expo10-8nov09.pdf | 464,776 bytes / 44 pages | `a335ff4972694dbe531b46f852d2c77f13e433b365d0d38289b25adfeadf2c62` |

Copies are `/tmp/ag887-8.pdf`, `/tmp/ag887-9.pdf`, and `/tmp/ag887-10.pdf`; complete text extracted using PyMuPDF. These are full PDFs, not search snippets. Locators below distinguish physical PDF page numbers, new running pagination, and marginal original pagination, since this reedition includes both.

| Locator actually read | Exact conditions and comparison |
|---|---|
| VIII §1, PDF pp.1–7; 1.1–1.6, PDF pp.3–5 | 1.1 defines D_S(M) from any abelian group; 1.2–1.4 prove biduality and the Hom identification using the grading of O_S. Cor.1.5(a) assumes M finitely generated; 1.5(b) has locally diagonalizable G,H with H finite type. Cor.1.6 explicitly says “under the conditions of 1.5” and S connected, and identifies Hom(D_S(N),D_S(M)) with Hom(M,N), and likewise Isom. Over a field, the finite-type conditions in our packet satisfy exactly these hypotheses. Its coefficient proof is also Milne Lemma12.4/Thm12.9(a), pp.232–233. |
| VIII 1.7, PDF pp.5–7 | The reedition explains effective descent of affine schemes, citing SGA1 VIII2.1, and representable functors being fpqc sheaves. This author has read that explanation but has not independently retrieved SGA1 for this packet. It is not silently used as an item dependency: the effective **Hopf algebra** descent needed for classification is proved locally, and the separate affineness lemma descends the inverse of the canonical global-sections morphism using the published submersiveness supplier. |
| IX 1.1–1.3, PDF pp.1–2, running pp.31–32; original margins pp.37–39 | Multiplicative type is fpqc locally diagonalizable; isotrivial means split by a finite étale surjection; a torus is fpqc locally a finite-rank product of G_m. Milne12.14/12.17 define by a splitting field. Over a field the splitting/separability reduction is X1.4, matching Milne12.18(a)⇔(d)/12.19. The local definition has the full fpqc convention; the local affineness lemma supplies its reduction to the affine category. |
| X1.1, PDF pp.1–2, running pp.63–64, original margins pp.77–78 | S is connected and S′→S is a connected finite principal covering with finite group Γ. Groups of multiplicative type split by S′ correspond contravariantly to abelian Γ-modules. The preceding paragraph invokes affine descent (SGA1 VIII5.4/2.1) and VIII1.6. Our finite-field local descent lemma proves the required effectiveness and the map descent instead. |
| X Cor.1.2, PDF p.2, running p.64 | S connected, geometric point ξ, π=π1(S,ξ); module continuity means every point stabilizer is open. Its stated isotrivial category uses finite covers. The literal unbounded-module formulation should be handled carefully: elementwise continuity on an infinitely generated module need not imply a single finite quotient acts on the whole module. For the finitely generated modules required here, intersecting finitely many generator stabilizers gives an open kernel and hence a finite quotient. The local theorem proves that step explicitly; it does not import an unrestricted infinite-module version of the printed corollary. |
| X Prop.1.4 and proof, PDF pp.2–3, running pp.64–65, original margin p.79 | k arbitrary, H multiplicative type and finite type; conclusion: a finite separable splitting extension exists, and the finite-type classification is by finitely generated continuous Galois modules. The proof first spreads a splitting isomorphism to a finitely generated algebra and takes a finite residue extension (EGA IV3 8.8.2.4/9.1.4), then removes its purely inseparable part using **IX5.4**. We have not imported the EGA or rigidity inputs: the coétale/finite-subcoalgebra proof supplies the same separable-splitting claim locally. |
| IX Cor.5.4 and complete proof, PDF p.20, running p.50, original margins pp.60–61 | H multiplicative type and finite type; G separated and of finite presentation over S; π:S′→S an effective universal epimorphism (e.g. faithfully flat qc) with geometrically connected fibres; u′:H′→G′ a **central** homomorphism. It descends uniquely. In X1.4, π is a purely inseparable field extension, both groups in the splitting isomorphism are commutative, and the target is diagonalizable finite type, so centrality, separation, finite presentation, and geometrically connected fibres hold. Descend both the map and its inverse. The argument compares the two pullbacks on S′×_S S′, uses IX5.3 to get an open-and-closed equalizer containing the diagonal, then fibre connectedness gives equality. |
| IX5.0–5.3, PDF pp.18–20, running pp.48–50; IX3.1–3.4, PDF pp.7–8; IX4.7, PDF p.17 | Read the supporting rigidity/density reductions: IX5.1 has finite-type multiplicative source, S locally Noetherian or target finite presentation, and a central common fibre map; IX5.3 adds separated target. IX5.1 uses nilpotent rigidity IX3.4 and schematic density IX4.7. IX3.4 follows from conjugacy IX3.2 using vanishing IX3.1, whose proof in turn cites Exp I/III. Those earlier general-base deformation results are not reproduced or claimed as audited here; they are bypassed by the local finite-subcoalgebra argument. |
| Milne12.14–12.23, pp.236–240 | 12.14 torus: splits into finite product G_m over some extension. 12.17 multiplicative type: diagonalizable over some extension. 12.18 gives the separable-splitting criterion; 12.19 gives finite separable splitting. 12.23 anti-equivalence is stated for all finite-type multiplicative groups, including nonsmooth ones, and cites split Thm12.9 plus A.64/A.66. The present local proof supplies those affine descent and map uses. The additional exact-sequence clause of Milne12.23 is not added to this contract's theorem. |
| Milne A.64/A.66, pp.584–585 | A.64 is semilinear vector-space/Hopf descent, reducing to finite Galois and using a skew-group algebra/Morita argument. A.66 descends morphisms using graphs and separatedness. Its last rational-point criterion specifically assumes algebraic varieties; it cannot be used for μ_p. Our map descent is on Hopf algebras and therefore covers nonsmooth schemes. |

## Local mechanical checks

On the fifteen explicit paths above:

- `node tools/tsx-run.mjs tools/precheck.mts ...`: **11 proof-bearing items checked, 0 failing** after adopting the suggested successive phase numbering.
- `node tools/rendercheck.mjs ...`: **15 files pass** YAML parsing and real KaTeX parsing.
- `node tools/proof-layout.mjs ...`: **blocked by renderer environment**, not a recorded pass. Node v22.22.1 receives raw JSX in `/home/lazyinspirit/Projects/prestige-intelligence/web/components/library/ItemBody.tsx:11` and raises `SyntaxError: Unexpected token '<'` before a content scan. No shared tooling edit was made. Orchestrator must repair that loader/environment and rerun the mandatory renderer scan on the final explicit paths.

### Proof-layout completion with the existing loader workaround

The default-loader failure above is preserved as operational evidence. The orchestrator supplied the existing read-only app/loader shim at `/tmp/ag885-render-app`; no shared tool or app edit was made by this author. Ran the following explicit-path command after the final item edits:

```sh
PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs \
  items/def-multiplicative-type-coordinate-hopf-algebra.md \
  items/lem-multiplicative-type-local-hopf-dictionary.md \
  items/def-diagonalizable-group-and-character-module.md \
  items/lem-diagonalizable-character-antiequivalence.md \
  items/def-group-of-multiplicative-type-and-torus.md \
  items/lem-multiplicative-type-affineness-by-field-descent.md \
  items/lem-finite-subcoalgebras-in-multiplicative-coordinate-algebras.md \
  items/lem-multiplicative-type-groups-split-separably.md \
  items/lem-finite-galois-descent-for-multiplicative-hopf-algebras.md \
  items/def-continuous-galois-character-module.md \
  items/thm-multiplicative-type-groups-and-galois-character-modules.md \
  items/cor-tori-correspond-to-torsion-free-character-lattices.md \
  items/ex-split-torus-character-lattice.md \
  items/ex-nonsplit-torus-galois-action.md \
  items/cex-mu-p-is-not-a-smooth-torus.md
```

Exit code **0**. Exact output: `proof-layout: 15 items, 27 steps, 0 defects`. Thus the mandatory rendered numbered-step/tag check is complete on the stable 15-item packet using the supplied loader workaround. This remains a local mechanical check, not an independent mathematical audit.
