# Batch 13 Step 5a adjudication

Run `frontier-40-geometry-braids-rep-27`; group `batch-13`; owned batch 13. Review in generated dependency order. Reader and refuter are evidence, not acceptance. Initial risk-report passed and routed 13 HIGH/CRITICAL items. Current item bytes all match the post-reader item hashes; two touched items have only contract changes. Pre/post snapshots establish carrier changes; no claim of a reconstructed whole-file historical diff is made. Reader report provides located repair evidence.

Sources independently consulted: Milne, https://www.jmilne.org/math/Books/iAG2022.pdf, printed pp. 3, 12, 40–41, 65–66, 574–575; authoritative PDF opened on the web and matching relevant local PDF pages read. Milne uses finitely generated algebras and max-spectra: arbitrary-ring results below are justified by the actual local suppliers and elementary arguments, not inferred from his narrower conventions.

## def-commutative-hopf-algebra-over-a-field

Verdict: `reviewed_no_defect`; change kind `audit_enrichment`. Unchanged Definition; only contract boundary evidence changed. The unital counit excludes A=0; the three Hopf identities are correctly typed and both antipode identities are required. Morphisms preserve all three maps. Milne Definition 3.3/3.4, printed pp. 65–66, and all seven declared supplier statements support the conventions.

Next: continue the generated supplier-first order; final focused checks pending.

## lem-affine-finite-type-scheme-coordinate-ring-finitely-generated

Verdict: `amended_repair`; change kind `repair`. Retain the reader correction of AC accounting in Statement/F4/F5/6.1; refresh the F4 contract quote to the owner-repaired published corollary. Steps 1.1–3.1 reduce to finitely many localizations; 4.1 adjoins finitely many numerators and unit-relation coefficients; 5.1 clears denominators separately for each a and uses the degree mN expansion. The empty cover forces A=0. No arbitrary basis or simultaneous infinite choice is used.

Risk review complete: Read all six proof steps and thirteen declared dependencies. F4 affine-chart quasi-compactness and F5 unit-ideal extraction explicitly discharge AC. Each D(f_j) equals D(b) in its affine chart, giving A_fj=(B_i)_b. B_fj surjects onto A_fj; for each a finite localization equalities give f_j^N a in B, and expanding the unit relation gives 1=sum c_j f_j^N in B. Empty X gives A=0 by F5; finite choices suffice thereafter. Reader and refuter evidence checked; no unresolved mathematical defect.

Next: continue the generated supplier-first order; final focused checks pending.

## lem-general-linear-group-scheme-and-its-coordinate-ring

Verdict: `amended_repair`; change kind `repair`. Retain reader AC qualification, exact Milne 2.2/2.8 locator and GL_0 construction; refresh the F4 contract quote. Localization extends Delta, epsilon and S because their determinant images are respectively d tensor d, 1 and d inverse. All Hopf identities extend from x_ij to d inverse. Point bijection is natural for arbitrary commutative k-algebras; GL_0 is Spec k, with no determinant invocation.

Risk review complete: Read every current proof step and all nineteen declared dependencies. Milne 2.2/2.8, printed pp. 40–41, supplies exact GL_n/G_m formulas; local determinant, adjugate, matrix, localization and affine-product statements justify the full arbitrary-test-algebra argument. Both XM=I and MX=I hold. AC is used only through F4 for finite type, with Spec k trivially finite type. n=1 gives G_m; V=0 gives GL_0; R=0 has a singleton matrix group. No smoothness or reducedness assumed. Reader/refuter checked; no unresolved defect.

Next: continue the generated supplier-first order; final focused checks pending.

## lem-quotient-spectrum-map-is-a-closed-immersion

Verdict: `reviewed_no_defect`; change kind `audit_enrichment`. Item unchanged; only contract boundaries were enriched. Contraction identifies Spec(B/I) with V(I); on primes over I the direct-image stalk is (B/I)_p, and outside V(I) a neighborhood D(u), u in I minus p, has zero sections. Localized surjections and stalkwise exactness prove the sheaf epimorphism. I=B gives the empty immersion; I=0 gives an isomorphism.

Risk review complete: Read all four proof steps and ten declared suppliers. The direct-image stalk is computed from cofinal basic opens, avoiding any unjustified general exchange of direct image and stalk. For p containing I, localization of B to B/I is surjective. For p not containing I, D(u) avoids the image so the target stalk is zero. The abelian-sheaf stalk criterion is applied to underlying additive sheaves. I=B, I=0, B=0 and nonreduced quotients covered. Milne A.24/A.26 are contextual finite-type statements; the local proof works for arbitrary rings without choice. Reader/refuter evidence checked; no defect.

Next: continue the generated supplier-first order; final focused checks pending.

## def-coordinate-hopf-algebra-of-affine-group-scheme

Untouched: no decision owed. Under affine ring/scheme antiequivalence and the tensor-product description of G times G, m/e/i give maps A to A tensor A, A to k and A to A. Pullback reverses direction; evaluation of Delta at (g1,g2) equals f(g1g2). Counit evaluation lies in k and base-changes to R. Morphism compatibility follows by pulling back the three group diagrams. All eight declared dependencies checked; Milne 3.1–3.5, printed pp. 64–66, supports the conventions. Existing justification lemma is reviewed at level 2; no finite-generation or choice-free claim inferred here.

Risk review complete. Next: level 2 definition and coordinate-Hopf verification.

## lem-hopf-ideal-kernels-and-quotients

Verdict: `accepted_repair`. The current finite-relation repair is sound. F3 derives the free-k presentation from the actual free-Z tensor definition using the bilinear universal property. Proof 1.1 includes the initial vectors in its finite witness and extracts coordinates in finite bases only. In 2.1 the independent family is in the first tensor factor; swapping factors by the elementary flip permits the same coefficient criterion. Finite elimination proves kernel(f tensor f)=A tensor K+K tensor A, and 3.1 proves subspace tensor inclusions by finite witnesses. Quotient structures descend uniquely; image structures and the quotient-image isomorphism preserve all Hopf maps. epsilon(1)=1 forces proper Hopf ideals, nonzero quotients and nonzero images. All twelve declared dependencies and Milne 3.8–3.14, printed pp. 67–68, checked; unlike Milne’s complement proof this local proof uses no arbitrary basis or AC.

Risk review complete. Next: level 2 definition and coordinate-Hopf verification.

## def-rational-representation-and-comodule-of-an-affine-group-scheme

Verdict: `accepted_repair`. Accept the reader clarification of (a): finite-dimensional GL_V is represented by GL_n including GL_0=Spec k, using only the choice-free point identification. Definitions (b)–(d) correctly fix right coactions, subcomodules, regular Delta-coaction and faithfulness on every algebra-valued point. The claimed correspondence is deferred to its explicit justification lemma, without circularly assuming it in that lemma. All nine declared suppliers checked; no global basis is selected for arbitrary V.

Next: coordinate-Hopf lemma.

## lem-coordinate-ring-of-affine-group-scheme-is-a-hopf-algebra

Untouched: no decision owed. Read all four proof steps and seven declared suppliers. Coassociativity is the reverse image of associativity; e times id gives epsilon tensor id; the graph (i,id) gives multiplication composed with S tensor id, while e after p pulls back to unit after counit. Both inverse identities and counit identities are included. Group morphisms give all three Hopf-map compatibilities with correct O(H) to O(G) direction. The coordinate definition supplies the construction, not the asserted Hopf axioms, so its justification cycle is only definitional. Milne diagrams (17)–(18), printed pp. 65–66, independently support the transposition. epsilon(1)=1 excludes the empty group/zero Hopf algebra. No new finite-type recognition or choice is used; reader/refuter evidence checked. No defect.

Risk review complete; the level-1 coordinate definition’s justified claim is now discharged. Next: level 3.

## lem-finite-dimensional-subcomodules-contain-elements

Verdict: `accepted_repair`. Finite-witness tensor presentation, finite basis extension and coefficient comparison in 1.1 are justified from the actual universal property, with all initial vectors retained. For rho(m)=sum m_i tensor a_i with independent a_i, the counit puts m in span(m_i); applying q tensor id tensor id to coassociativity gives rho(m_i) in N tensor A. The kernel description is proved by the same finite coefficient criterion, not by an arbitrary complement. Finite sums handle any finite S, including S empty with N=0; M=0 and rho(0)=0 are included. All eleven declared dependencies, Milne Proposition 4.7/Corollary 4.8, printed p. 86, and reader/refuter evidence checked. The local finite-list proof replaces Milne’s arbitrary basis and uses no AC. No defect remains.

Risk review complete. Next: antiequivalence and torus example.

## lem-representations-of-affine-group-schemes-are-comodules

Verdict: `accepted_repair`. Read all seven proof steps and fifteen declared dependencies. The corrected F2 identity is A to k to R. Coassociativity gives r(g)r(h)=r(gh) with correct coefficient order. Conversely rho(v)=r_A(id_A)(v tensor 1), naturality uses (V tensor A) tensor_A R=V tensor R, and the universal points p1,p2 give both comodule axioms. The two directions are inverse; intertwiners and pullback specify naturality. Subobjects are tested over R=A as well as every other algebra, so rational-point tests are never substituted. Both antipode matrix inverses yield unit determinant for n>=1, while n=0 has the unique map to Spec k. Infinite V requires no basis; the GL_n supplier is used only for its choice-free coordinate and point construction. Milne Remark 4.1/formulas (24)–(25), printed pp. 83–84, read; reader/refuter checked. No unresolved defect.

Risk review complete. Next: antiequivalence and torus example.

## thm-affine-group-schemes-hopf-algebra-antiequivalence

Verdict: `amended_repair`. Accept the corrected AC accounting and structure-preserving morphism argument; refresh the owning manifest to the exact current statement and strategy. All five steps and twelve suppliers checked. F1/F2 construct the finite-generated Hopf algebra; reversed diagrams construct the group object, and local finite type plus AC-qualified affine quasi-compactness make it finite type. Full faithfulness restricts Hom-set bijections to the three structure-preservation equations, not to a purported full underlying subcategory. Explicit Spec/global-sections quasi-inverse and its canonical natural identifications recover structure maps. Zero Hopf algebra excluded by the counit, nonreduced schemes retained, and no category-wide choice of inverse is used. Milne 3.6/3.7, printed pp. 66–67, and reader/refuter evidence checked. Current published corollary independently read and AC discharged in Given.

Risk review complete. Next: level 4.

## ex-hopf-algebra-of-a-split-torus

Verdict: `amended_repair`. Retain reader finite-type repair in F5/1.1/3.1 and refresh its stale published-corollary citation. All four verification steps and fifteen declared suppliers checked. Laurent units give the product coordinate algebra and point group for every R; Delta(t_i^r-1)=(t_i^r-1) tensor t_i^r+1 tensor(t_i^r-1), epsilon kills the generator and S multiplies it by -t_i^-r. These conditions extend to the generated ideal by multiplicativity; quotient remains finitely generated and AC supplies finite type. r_i=1 gives a proper identity-subgroup ideal, not zero or the whole algebra; for char p, s=t-1 is nonzero nilpotent in k[s]/s^p, although mu_p(k) is singleton. R=0 has one point. Milne 2.2/2.4, printed p. 40, and the full local p-power proposition checked. No rational-point substitution and no remaining defect.

Risk review complete. Next: level 4.

## thm-affine-group-scheme-faithful-finite-dimensional-representation

Verdict: `accepted_repair`. Read all five proof steps and nineteen declared dependencies, plus Milne 4.9–4.11, printed p. 87. AC already assumed covers finite-type recognition for Spec A and GL_n via the previously reviewed affine argument. F2 supplies a finite subcomodule containing 1 and all algebra generators; epsilon(1)=1 ensures V is nonzero so n>=1. Both antipode inverse identities make the coefficient determinant a unit. The crucial counit identity e_j=sum epsilon(e_i)a_ij puts all of V, hence all generators, in the coefficient-map image. Its surjectivity yields the closed immersion and injectivity on EVERY algebra-valued point set. The statement’s equivalence is between existence formulations; this proof need not classify every possible faithful map. Empty generator list gives A=k and still V contains 1; nonreduced Hopf algebras are allowed. Reader/refuter checked; no unresolved defect.

Risk review complete. Next: page and published-finding obligations, ledger closure, scoped validation.

## thm-closed-subgroup-schemes-correspond-to-hopf-ideals

Verdict: `amended_repair`. Retain reader correction of the two AC inputs and correct the remaining degenerate contract boundary that still said AC entered only through F1. All five proof steps and twelve declared suppliers checked, including the full current published affine-closed-immersion proof. F1 uses AC explicitly in Given/F2, and the assigned theorem assumes it; F3 also inherits finite-type antiequivalence AC. Quotients of the finitely generated A remain finitely generated. Kernels are Hopf ideals, quotient structures unique, both round trips preserve the embedding and group structure, and a2 subset a1 gives a Hopf quotient A/a2 to A/a1 with the required inclusion. I=0 gives G, ker epsilon gives the identity subgroup, and I=A is excluded by epsilon(I)=0; no empty subgroup is asserted. Milne 3.15, printed p. 68, independently read. Reader/refuter checked; no local defect remains.

Risk review complete. Next: page and published-finding obligations, ledger closure, scoped validation.

## ex-rational-representation-from-a-comodule

Verdict: `accepted_repair`. Read all four verification steps and ten declared suppliers. Laurent coefficient maps c_m are explicit linear functions and id tensor c_m extracts tensor coefficients, with no dual extension or arbitrary basis. Coassociativity makes every coefficient vector a weight vector, the counit proves spanning and coefficient comparison proves directness. The finite basis of V has only finitely many coaction supports, forcing every other weight space to vanish. Negative and zero weights use units g and g^-1; repeated weights and V=0 are covered, with GL_0 treated separately. The diagonal matrix has coefficients delta_ij t^m_i satisfying the two identities. AC is inherited only for the finite-type G_m construction. Milne’s comodule dictionary, printed pp. 83–84, and reader/refuter evidence checked. No unresolved defect.

Risk review complete. Next: page and published-finding obligations, ledger closure, scoped validation.

## Manifest reconciliation

All eleven reader-edited item manifest rows now carry the exact current claim, dependency list, provenance and source locators, plus a concise current proof strategy. This also removes the stale finite-generation strategy that omitted unit-relation coefficients from B and the stale sole-AC-use subgroup strategy. These eleven final touched verdicts are `amended_repair`, retaining the mathematically sound reader repairs and amending their composite carriers. The two unchanged-item audit-enrichment decisions remain `reviewed_no_defect`. No item, page, published, or historical snapshot bytes were edited by this adjudicator.

## Direct-consumer impact review and Step 5b routing

The eight Statement/Definition changes identified by the reader were examined through current direct citation uses. The representation definition only adds the GL_0 case and separates representability from finite type: its pre-existing natural-action, coaction, regular-representation and faithful-point conventions are preserved. The following outside consumers use those unchanged interfaces; no supplier-driven edit is required (this is an interface-use review, not a whole-proof audit):

- Batch 20: `cex-rational-modules-need-not-be-semisimple-in-characteristic-p`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 53.
- Batch 20: `def-contragredient-rational-representation`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 28.
- Batch 18: `def-hochschild-cohomology-of-algebraic-groups`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 27.
- Batch 20: `def-induced-coordinate-module-e-lambda`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 28.
- Batch 20: `def-primitive-vector-of-a-rational-representation`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 33.
- Batch 19: `def-radical-and-unipotent-radical-of-an-algebraic-group`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 33.
- Batch 20: `def-simple-and-semisimple-representations`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 30.
- Batch 18: `def-trigonalizable-algebraic-group`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 25.
- Batch 18: `def-unipotent-algebraic-group`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 33.
- Batch 20: `def-weight-and-dominant-weight-of-a-rational-representation`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 35.
- Batch 20: `ex-fundamental-sl2-modules-in-characteristic-p`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 60, 62.
- Batch 20: `lem-casimir-element-of-a-rational-representation-is-an-endomorphism-of-g-modules`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 54.
- Batch 18: `lem-coconnected-comodules-have-fixed-vectors`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 37, 39.
- Batch 20: `lem-complete-reducibility-reduces-to-codimension-one-simple-submodules`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 31, 43, 47.
- Batch 18: `lem-distinct-characters-are-linearly-independent`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 27, 35.
- Batch 20: `lem-dominant-characters-of-products-of-tori-and-split-semisimple-groups-arise-as-primitive-weights`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 54.
- Batch 20: `lem-dominant-characters-of-split-semisimple-groups-arise-as-primitive-weights`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 96.
- Batch 18: `lem-flag-variety-of-a-vector-space`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 57.
- Batch 20: `lem-lie-algebra-of-the-stabilizer-of-a-subspace-and-lie-stable-subspaces`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 32, 47.
- Batch 18: `lem-multiplicative-type-groups-are-linearly-reductive`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 33, 42.
- Batch 15: `lem-projective-space-action-from-linear-representation`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 29, 49.
- Batch 18: `lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 31, 38.
- Batch 20: `lem-root-group-expansion-of-a-weight-vector`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 44, 46.
- Batch 20: `lem-semisimple-groups-are-perfect-and-have-no-nontrivial-characters`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 62.
- Batch 20: `lem-semisimplicity-of-rational-representations-descends-along-field-extensions`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 29, 37, 43.
- Batch 18: `lem-shapiro-lemma-and-induced-modules-are-acyclic`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 32, 43.
- Batch 20: `lem-simple-rational-representations-are-finite-dimensional`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 30, 49.
- Batch 20: `lem-tensor-and-hom-representations-are-rational`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 32, 63, 72.
- Batch 20: `lem-tensor-products-of-primitive-vectors`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 42, 49.
- Batch 18: `lem-unipotent-representation-criterion`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 31, 39.
- Batch 18: `prop-smooth-commutative-algebraic-groups-are-trigonalizable`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 32, 38.
- Batch 20: `thm-chevalley-line-stabilizer-of-an-algebraic-subgroup`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 35, 64.
- Batch 20: `thm-complete-reducibility-of-rational-modules-in-characteristic-zero`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 34.
- Batch 15: `thm-homogeneous-space-for-smooth-affine-group`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 38, 60.
- Batch 20: `thm-semisimple-groups-in-characteristic-zero-are-linearly-reductive`, `def-rational-representation-and-comodule-of-an-affine-group-scheme` cited at lines 32, 47.

All examined matrix-group, finite-generation, Hopf-ideal and faithful-representation consumers currently discharge inherited AC, except the following routed alert. No outside consumer was edited.

**Step 5b alert, batch 18:** `def-upper-unitriangular-group-scheme`, Definition opening paragraph and closed-subgroup paragraph, cites `lem-general-linear-group-scheme-and-its-coordinate-ring` to name GL_n as a finite-type group scheme and `thm-affine-closed-immersions-quotient-rings` for quotient recognition, without any AC premise or dependency. Coordinate formulas and matrix-point functors are choice-free, but that does not discharge the scheme finite-type assertion. Owner action: declare inherited AC for the geometric clauses (or prove the complete choice-free bridge); then assess this definition’s actual direct consumers if its Definition changes. This consumer remains outside batch-13 edit scope and is unresolved here. The current source was opened in full to check this exact use.

The owned batch-13 cross-batch input remains []: every declared assigned-item prerequisite is either batch-13 or published. The frontier-dependency ledger policy therefore requires no new owned-consumer row. The historical reader report’s outside impact candidates remain for Step 5b; no proposed withdrawal was removed.


## Page-only obligation

Retain the reader page-summary repair: the finite-type antiequivalence explicitly assumes AC for affine quasi-compactness and finite generation; Hopf identities and comodule constructions remain choice-free. Current page bytes match the post-reader hash, both companion links and all thirteen A-page anchors retain order, and the prose describes the reviewed arguments. Examples are on the existing B page. No page or pair added.

## Published reader finding

`reader:13:1`: `confirmed_fatal`, closed by the existing owner repair, repair_confidence 1. Confirm the original fatal missing-hypothesis finding, not a counterexample to the theorem under AC. The owner repair JSON preserves authentic unconditional Statement/Given/F1 bytes whose raw carrier hash matches scope observed_sha256 and whose canonical hash matches pre_sha256. Current Statement, Given, deps, F1 and proof 1.2 explicitly declare AC. Independently reading the full current corollary, lem-basic-opens-quasi-compact and thm-prime-spectrum-is-compact verifies D(1), localization-spectrum homeomorphism, AC-qualified compactness and transfer to X, including the zero-ring empty spectrum. The current raw carrier differs from the observed original. Published bytes remain read-only in this dispatch; the owner’s completed repair closes this exact finding, not unrelated outside-consumer maintenance.

Authentic original raw SHA-256: `881e3b6042c2b8c67b44ee5df775a9c47ee532ee1cb83d5a1a56f1ef18fc54d2`; original canonical SHA-256: `44c63e80fe9965815034fdc2de2d16054ad1dadd8ff36660de6e69df91ae0c00`; current raw SHA-256: `55b740bd1ec8ee6c90f671bfd0f9d74314e57c73ffbd571dc3d81299e56fb1ef`. Recomputed saved raw hash and wrapped observed-carrier hash both match. Historical_delta_unknown is false for this recovered, bound carrier; the reader artifact’s absent observed_source does not erase the actual saved-byte evidence. No unresolved prerequisite blocks a batch-13 item; the batch-18 interface alert remains open.

## Final dispositions and validation

All 15 owed obligations are decided exactly once. The final JSON is authoritative: eleven `amended_repair` item decisions, two `reviewed_no_defect`/`audit_enrichment` item decisions, one `accepted_repair` page decision and one `confirmed_fatal` published reader finding. Nineteen distinct confirmed repair defects have closed `fixed` ledger rows, caught_at_stage `5a-adjudicate`, each uniquely referenced by its decision. No defect row was created for a mechanical diagnostic.

- `touched:13:def-commutative-hopf-algebra-over-a-field`: `reviewed_no_defect`.
- `touched:13:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated`: `amended_repair`.
- `touched:13:lem-general-linear-group-scheme-and-its-coordinate-ring`: `amended_repair`.
- `touched:13:lem-quotient-spectrum-map-is-a-closed-immersion`: `reviewed_no_defect`.
- `touched:13:lem-hopf-ideal-kernels-and-quotients`: `amended_repair`.
- `touched:13:def-rational-representation-and-comodule-of-an-affine-group-scheme`: `amended_repair`.
- `touched:13:lem-finite-dimensional-subcomodules-contain-elements`: `amended_repair`.
- `touched:13:lem-representations-of-affine-group-schemes-are-comodules`: `amended_repair`.
- `touched:13:thm-affine-group-schemes-hopf-algebra-antiequivalence`: `amended_repair`.
- `touched:13:ex-hopf-algebra-of-a-split-torus`: `amended_repair`.
- `touched:13:thm-affine-group-scheme-faithful-finite-dimensional-representation`: `amended_repair`.
- `touched:13:thm-closed-subgroup-schemes-correspond-to-hopf-ideals`: `amended_repair`.
- `touched:13:ex-rational-representation-from-a-comodule`: `amended_repair`.
- `page:13:affine-group-schemes-hopf-algebras-and-rational-representations`: `accepted_repair`.
- `reader:13:1`: `confirmed_fatal`.

Focused current checks:

- `risk-report` initial pass: 15 items scored, 13 required HIGH/CRITICAL reviews. Final `--require-reviewed` pass: zero errors; all 13 reviews complete and specific.
- Strict `proof-contract`: 15/15 checked, zero errors and warnings after correcting the local degenerate-boundary evidence to name proof steps 1.1–1.2. Its earlier missing-anchor diagnostic was mechanical and created no defect row.
- Batched normative `precheck`: 12 proof-bearing items checked, zero failures; three definitions not applicable.
- Batched `proof-layout`: all 15 owned items, 63 numbered steps, zero defects. This final explicit-path command includes all eleven reader-edited item paths; no item formatter or edit followed it.
- Scoped `rendercheck`: 15 owned items and two assigned pages, 17 files; all math spans parsed under real KaTeX and all YAML parsed, zero errors.
- Exact local decision/ledger/manifest assertions: 15/15 obligations; 19/19 uniquely owned closed defect rows; 11 exact synchronized manifest claim/dependency/provenance/source rows; all 15 current item hashes still equal post-reader hashes.
- Batch-13 owned-row `defect-ledger validate` using the isolated 19-row input: zero errors. The run-wide `validate --run` invocation failed with 38 schema errors in other owners’ records, including batch-22 non-enum subclass/role/location fields and a batch-16 `remarks` location. These are routed to the engine/owning batches; their rows were not altered and no run-wide gate pass is claimed.

Independent source scope: Milne printed pp. 3, 12, 40–41, 64–68, 83–84, 86–87 and 574–575 read from the relevant local PDF pages; authoritative web PDF opened. The Swanson PDF and Stacks affine section were opened as additional references, but no complete alternative-source reading is claimed. Every owned current carrier, its declared local dependency statement/definition, and the substantive prerequisite arguments identified above were read. This is not a transitive audit of all published suppliers or other batches’ proofs.

Published ledger merged only after acquiring `research/.published-consumer-ledger.lock`, rereading the file and releasing this process’s own lock. The exact repaired corollary has one A-R classification row; the original fatal evidence remains. Consumer premise concerns outside the owner-assigned scope remain open as previously recorded.

No owned item has an unresolved mathematical prerequisite or escalation. The exact batch-18 upper-unitriangular Definition alert remains for Step 5b disposition. Preserve this alert and the historical outside-consumer inventory; no outside edit, new pair, page, agent dispatch, judgment, self-certification, hash stamp, stage transition or engine gate battery was performed. The engine owns decision hashes and final gate execution.
