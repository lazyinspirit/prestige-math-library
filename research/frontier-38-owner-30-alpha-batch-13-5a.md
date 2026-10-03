# Batch 13 Step-5a adjudication — frontier-38-owner-30

Scope: 24 current items, 20 touched obligations, one A-page obligation and three flagged obligations. Review follows the generated dependency order. No judge cycle, stamping, certification or engine transition is performed. Published content remains read-only.

Evidence: the scope, reader report/findings, refuter report, pre/post hash snapshots, current carriers and exact supplier sections. The snapshots distinguish item changes from contract-only changes; historical deltas described below are also evidenced by the reader report, rather than claimed as a byte-for-byte reconstruction of unavailable old files.

Sources consulted: Freed, *Bordism: Old and New*, https://people.math.harvard.edu/~dafr/bordism.pdf, Definition 1.19, Lemma 1.25 and Exercise 1.26, Remark 1.28, Lemma 1.30 and the ring discussion, printed pp.8–13. Milnor–Stasheff, *Characteristic Classes*, https://poisson.phc.dm.unipi.it/~lmigliorini/tesi_tr/milnor_char_classes.pdf, cached complete PDF `/tmp/reader-13-milnstas.pdf`: printed pp.50–53, 185–186, 200–203 (PDF pages 54–57, 184–185, 198–201). Statements and complete relevant boundary-vanishing arguments were read; failed web retrieval of the Pisa PDF is not evidence. Additional bibliography entries are not asserted to have been read. Local proofs and exact suppliers, rather than bibliography authority alone, establish the review.

Initial risk-report: 24 items routed, 23 HIGH/CRITICAL, 0 errors.

## def-pontryagin-number-of-a-closed-oriented-manifold

Reviewed Definition, including degrees 4i, rank bound 2i>4k, signed fundamental classes, finite components and the empty partition at k=0. The Chern theorem permits a CW-type source with CW target; choosing homotopy inverses g,h and using bundle homotopy invariance gives V≅g*h*V, so naturality and stability extend to the smooth bases actually used. Pairing naturality proves orientation-preserving invariance and reversal changes sign. AC is explicitly inherited. Reader item/contract hash delta is retained. Dependencies: Pontryagin/Chern definitions and naturality, bundle homotopy, CW-type admissibility, fundamental class, pairing, manifold/component and orientation suppliers; their exact sections were read. No local repair or interface change is needed.

Verdict: `accepted_repair`. Closed defects: `frontier-38-owner-30-5a-b13-pontryagin-cw-domain`.

## def-stiefel-whitney-number-of-a-closed-manifold

Reviewed Definition: exponent-weighted formal degree is required to equal n; a zero homogeneous class does not change that degree. The SW naturality supplier already admits paracompact Hausdorff CGWH CW-type bases, supplied under AC. Mod-two orientations are canonical; finite components sum, the empty manifold evaluates to zero, and the rank-zero empty product computes cardinality parity. Diffeomorphism invariance uses dF and mod-two fundamental-class naturality, without an orientation-preserving restriction. Exact declared supplier sections were read. This untouched item owes only a complete risk review.

Risk review complete; no decision owed.

## def-unoriented-smooth-cobordism-of-closed-manifolds

Reviewed the complete Definition and its six supplier definitions/statements. W is compact Hausdorff second-countable with boundary, both boundary pieces are clopen, and the supplied embeddings are collars onto open neighbourhoods. Empty domains and n=0 are allowed; changing widths is a smooth rescaling. Finite boundary components follow from compactness and open manifold components. This is an existential relation whose equivalence is proved later, with no fresh choice. Pre/post item and manifest hashes are equal; only contract boundary evidence was enriched (notably nonempty collars also occur for n=0).

Verdict: `reviewed_no_defect`; change_kind `audit_enrichment`. No new defect ledger row.

## lem-boundary-stable-tangent-splits-off-a-trivial-line

Reviewed Statement/Facts and all four proof steps. The boundary restriction is the pullback i*TW, with smooth charts obtained on chart faces; X restricted to the boundary is a section. di(TM) is the tangent hyperplane and the inward field is outside it, giving a fibrewise direct sum and smooth bundle isomorphism. Quotienting by di(TM) gives the trivial normal line. Empty boundary is vacuous, n=0 boundary fibres split as 0⊕R, and disconnected boundaries cause no selection. AC_omega is used solely for the published global field supplier. Milnor–Stasheff Theorem 4.9 proof, printed p.52, confirms the splitting locator. Reader item/contract delta is retained; no further edit. All declared supplier sections were checked.

Verdict: `accepted_repair`. Closed defects: `frontier-38-owner-30-5a-b13-boundary-restriction-domain`.

## lem-fundamental-class-of-a-boundary-pushes-forward-to-zero

Reviewed Statement/Facts and proof 1.1–4.1 against relative and absolute fundamental-class definitions, pair exactness, coefficient-ring pairing, canonical mod-two orientation and compact boundary suppliers. The connector sends [W,M] to the whole [M]; exactness kills its pushforward, and pairing naturality kills every restricted top-degree evaluation. For n=0 this kills the sum of boundary signs on each W component, not each endpoint individually. Empty boundary and zero coefficient ring give zero; closed W components contribute no boundary. Pre/post item/manifest hashes agree; only citation/derivation evidence changed.

Verdict: `reviewed_no_defect`; change_kind `audit_enrichment`. No new defect ledger row.

## lem-product-boundary-formula-for-oriented-manifolds

Reviewed Statement/Facts and proof 1.1–2.1. Boundaryless product suppliers do not alone cover a boundary factor, so the reader adds half-space product charts, coordinate permutation and smooth extensions. With at most one nonempty boundary, the product has an ordinary smooth boundary; moving the outward vector past m tangent vectors gives (-1)^m on W×∂V. Compactness follows from finite-product compactness. Closed and empty products have empty boundary; the case with both boundaries is explicitly excluded. Exact product/orientation and compactness supplier sections were read; reader item/contract changes are retained.

Verdict: `accepted_repair`. Closed defects: `frontier-38-owner-30-5a-b13-product-boundary-atlas`.

## def-oriented-smooth-cobordism

Reviewed the full Definition against all seven exact suppliers. For interval-first collars the incoming interval derivative is inward and the outgoing derivative outward, giving incoming -o_0 and outgoing +o_1 in both directions of the equivalent formulation. This remains true for signed points (n=0); reversing all determinant rays gives -M, and the empty manifold has its unique orientation. No choice occurs because data and orientations are supplied. The orientation-independence supplier explicitly verifies the endpoint signs. Pre/post item/manifest hashes are identical; the touched obligation is a contract evidence refresh.

Verdict: `reviewed_no_defect`; change_kind `audit_enrichment`. No new defect ledger row.

## lem-collar-gluing-and-corner-smoothing-give-transitivity

Reviewed Statement/Facts and proof 1.1–5.1 plus the complete double proof 1.1–9.1 and all other declared external supplier sections. The finite seam equivalence classes and closed saturation make q closed, allowing disjoint quotient neighbourhoods of arbitrary points; local seam charts alone would not establish Hausdorffness. The three open pieces A,B,O have countable bases, whose finite union proves second countability without AC_omega. Chart transitions across the seam are product transitions; the seam is interior, and the outer collars remain embeddings onto open neighbourhoods. Incoming/outgoing interval-first signs glue orientations. Empty seam gives disjoint union; n=0 seam charts are intervals. The double comparison construction supports boundary-fixing half maps localized at the clopen seam part; these give identity in old/new seam coordinates. Only this optional comparison assumes AC_omega. This amended historical statement will be checked at its consumers; choice-free transitivity is preserved. Reader item/contract delta is retained.

Verdict: `accepted_repair`. Closed defects: `frontier-38-owner-30-5a-b13-gluing-hausdorff`, `frontier-38-owner-30-5a-b13-gluing-choice`, `frontier-38-owner-30-5a-b13-gluing-boundary-type`.

## lem-cylinders-give-reflexivity-of-cobordism

Reviewed all four steps and exact suppliers. Interval charts t and 1-t provide half-space charts, compactness follows from affine ball compactness and finite products, and the explicit collars are open embeddings. The two collars may overlap in the interior, which the relation definition permits. For orientation o⊗dt the two boundary signs are (-1)^(n+1)o and (-1)^n o; multiplying the cylinder orientation by (-1)^n gives -o,+o. The same computation includes n=0 and the empty M. Reader product-atlas and compactness repair is retained; no interface change or additional edit.

Verdict: `accepted_repair`. Closed defects: `frontier-38-owner-30-5a-b13-cylinder-product-domain`.

## lem-reversing-a-cobordism-gives-symmetry

Reviewed the unchanged Statement/Facts and three proof steps against all declared supplier sections. Reflection s↦-s exchanges the two specified half-intervals and preserves collar images; it is smooth with smooth inverse. Reversing W orientation reverses both induced boundary orientations, giving -o_1 on the new incoming face and +o_0 on the new outgoing face. Empty faces and n=0 signed points obey the same computation. No choices and no new defects; untouched/unflagged item owes only its risk review.

Risk review complete; no decision owed.

## thm-smooth-cobordism-is-an-equivalence-relation

Reviewed all four steps and the exact equivalence-relation Definition. Cylinder, dual and gluing prove the three geometric properties for arbitrary manifolds, with n=0 and empty cases included. The published quotient Definition is expressly for a relation on a set; all manifolds on arbitrary underlying sets form a proper class, as Freed Remark 1.28 also warns. Amended Statement and step 2.1 to assert the quotient on any set S of models; the next Definition already constructs global sets using bounded models. Updated proof provenance, manifest, contract derivation and consumer quotations. There was no judge stamp to invalidate. Precheck passes. Direct consumers are the null definition, bordism-group definition, group theorem, zero-dimensional computation, ring theorem and pair-of-pants example; none is outside batch 13. Their actual uses are checked in order below. The three geometric properties and bounded-model global bordism interface remain available.

Verdict: `amended_repair`. Closed defects: `frontier-38-owner-30-5a-b13-equivalence-proper-class`.

## def-null-cobordant-closed-manifold

Reviewed the full Definition and all exact suppliers. Both directions of the whole-boundary collar formulation follow by adding or removing the empty outgoing collar. An oriented incoming null-bordism has boundary -o, and reversing W gives the supplied o. The empty manifold bounds the empty cylinder. Its use of the repaired equivalence theorem is solely transitivity on the three named manifolds, which follows either directly or on their finite set S; no global quotient is needed. Null-cobordism is therefore class invariant without choice. Untouched item: complete risk review, no decision owed.

Risk review complete; no decision owed.

## def-unoriented-and-oriented-bordism-groups

Reviewed the full Definition, including the exact finite disjoint-union supplier and cylinder lemma. Every compact manifold admits a finite chart cover; the least-index chart injection into R^n×N transports its full topology and atlas and its supplied orientation. All structures on subsets of that fixed set form a set; oriented structures also form a set. Different transports are diffeomorphic, and an outgoing cylinder collar composed with the inverse diffeomorphism gives identical bordism classes. No simultaneous model choice is used. This supplies the set S now required by the equivalence theorem, so its opening quotient notation is sound under its explicit convention. Finite disjoint unions with boundary use half-space charts and finitely many bases; concatenated collars establish well-definedness, zero is the empty class and forgetting orientation is well-defined. Empty and zero-dimensional models are covered. Reader set-size and boundary-atlas repair is retained; no consumer edit is necessary.

Verdict: `accepted_repair`. Closed defects: `frontier-38-owner-30-5a-b13-bordism-model-set`, `frontier-38-owner-30-5a-b13-disjoint-union-boundary-domain`.

## prop-boundaries-have-zero-stiefel-whitney-numbers

Reviewed the three proof steps and all exact dependencies, including the SW Whitney theorem. Both W and M are smooth admissible CW-type bases under AC, the inward-field splitting is available under AC_omega, and naturality plus stability gives w(TM)=i*w(TW). Whole-boundary pushforward kills every degree-n evaluation; no individual connected boundary component is claimed to have zero number. In n=0 this is even total boundary cardinality; the empty boundary evaluates to zero. Diffeomorphism invariance gives the null-cobordism obstruction. Amended the Statement choice-use clause: AC also supplies the inward field via AC_omega, rather than being used only in characteristic-class construction. Manifest, provenance and contract/consumer quotes are synchronized; precheck passes. Reader contract correction of the false individual-boundary-component evidence is retained. Direct statement consumers will be checked below; no outside affected consumer exists.

Verdict: `amended_repair`. Closed defects: `frontier-38-owner-30-5a-b13-sw-choice-use`, `frontier-38-owner-30-5a-b13-sw-whole-boundary-contract`.

## prop-oriented-boundaries-have-zero-pontryagin-numbers

Reviewed the three proof steps, exact suppliers and the already reviewed CW-type transport derivation. The class suppliers apply on W and M with their smooth numerable bundles and finite components, and the boundary splitting is obtained under AC_omega. Stability and naturality give p(TM)=i*p(TW). F4 annihilates -[M] under the incoming null-bordism convention; linearity also annihilates [M]. Every degree-4k partition evaluation therefore vanishes, including the empty partition for k=0 (total signed boundary count) and the empty manifold. Retained the reader correction of the CW-only citation and whole-boundary contract evidence. Amended the Statement choice-use clause to include the inward field, with manifest and consumer citations updated. Precheck passes. No statement consumer lies outside this batch.

Verdict: `amended_repair`. Closed defects: `frontier-38-owner-30-5a-b13-pontryagin-boundary-cw-domain`, `frontier-38-owner-30-5a-b13-pontryagin-choice-use`, `frontier-38-owner-30-5a-b13-pontryagin-whole-boundary-contract`.

## thm-disjoint-union-makes-bordism-classes-abelian-groups

Reviewed all seven proof steps and fourteen exact suppliers. The displayed bordism sets are the bounded-model quotient sets already constructed; the equivalence theorem’s set qualification is therefore satisfied. Step 1.1 puts the outgoing face at M×{1}, then identifies it with N through the supplied diffeomorphism (orientation-preserving for oriented classes). Canonical finite disjoint-union diffeomorphisms prove identity, associativity and commutativity. The two incoming inverse collars use s/2 and 1-s/2, giving disjoint images; cylinder orientation gives -o,+o, so the source M⊔(-M) meets the incoming sign condition. Empty M and n=0 are included, and no countable family of bases is selected. Retained the reader face-label repair; the amended equivalence-supplier quotation was synchronized in this contract.

Verdict: `amended_repair`. Closed defects: `frontier-38-owner-30-5a-b13-cylinder-outgoing-face`.

## cex-real-projective-two-space-is-not-unoriented-null-cobordant

Reviewed Statement refuted/Facts and four counterexample steps against all seventeen exact suppliers. The rank-three trivial bundle over a point gives the free mod-two cohomology basis 1,x,x² and relation x³=0. The tangent bundle is numerable on the smooth CW-type RP²; nonorientability forces w_1≠0, hence w_1=x. RP² is nonempty path-connected, so H⁰=F₂·1 and field Poincare duality makes evaluation on H² an isomorphism; x² evaluates to 1. The formal-degree-two SW number then obstructs a whole boundary under AC. The repaired SW choice clause is compatible with the assumed AC. Retained the reader connectedness restriction for F4; updated its contract’s quote of the SW boundary proposition. No empty/zero-dimensional counterexample is asserted.

Verdict: `amended_repair`. Closed defects: `frontier-38-owner-30-5a-b13-projective-plane-connected-duality`.

## ex-a-circle-is-the-boundary-of-a-disk

Reviewed Example/Facts and five verification steps, plus all sixteen declared suppliers and the extra connected-space Definition. The nonzero derivative coordinate of rho gives valid half-space charts; the ambient C¹ inverse bootstraps to a smooth inverse. det(p,Jp)>0 gives counterclockwise induced boundary orientation. The explicit collar (1-s/2)p has open annulus image and smooth inverse; reversing disk orientation produces the required incoming -o. Both circle orientations have zero class and sum to zero. The reader repaired the singular fixed-coordinate chart, the compact-surface wording, and the supplied collar. Refuter finding 1 is independently confirmed: the empty space is connected locally, but the empty manifold has one orientation. Added nonempty in F4, preserving the mathematical example and every interface. Manifest/contract updated; precheck passes. No judge stamp existed.

Verdict: `amended_repair`. Closed defects: `frontier-38-owner-30-5a-b13-disk-chart-and-boundary`, `frontier-38-owner-30-5a-b13-disk-surface-wording`.

## ex-a-circle-is-the-boundary-of-a-disk — flagged

Flagged finding 1: F4 asserted exactly two orientations of a connected orientable manifold. def-connected-space explicitly includes the empty space; def-oriented-smooth-cobordism supplies its unique orientation. Thus the empty manifold is a counterexample to the fact. Adding nonempty makes the local-constant-sign argument correct (including signed-point n=0), and no disk or circle interface changes. The one-word hypothesis repair is complete, contract/manifest synchronized, precheck passes.

Verdict: `confirmed_fatal`. Closed defects: `frontier-38-owner-30-5a-b13-disk-nonempty-orientations`.

## prop-zero-dimensional-bordism-groups

Reviewed six proof steps and twenty-five exact suppliers. The H_0 augmentation proof works over Z and F₂: the kernel is generated by finite point differences joined by paths, needing only finite selections. Whole-boundary pushforward then conserves signed count or parity on every path component of W. Pairing a finite even set, or pairing positive with negative points, uses finitely many intervals and disjoint half-width collars s/2,1-s/2; in the oriented null-bordism p at 0 has induced sign -, and n at 1 sign +, the required negatives of their source signs. Empty point sets use no intervals; one point has invariant 1 and does not bound; both directions of each bounding criterion and injectivity/surjectivity/additivity are established. Retained the reader collar and interval-coordinate repair; contract quotations of the set-qualified equivalence theorem were synchronized. Its actual use is on the already constructed model sets; no consumer item repair is needed.

Verdict: `amended_repair`. Closed defects: `frontier-38-owner-30-5a-b13-zero-bordism-collar-injectivity`.

## thm-cartesian-product-makes-bordism-a-graded-ring

Reviewed all five proof steps and nineteen exact suppliers. Products use one closed factor, avoiding corners. The second bordism piece M_1×W_2 is oriented by (-1)^m; this cancels the product-boundary (-1)^m and gives opposite seam signs and the required outer signs. Collar factor permutations are the canonical smooth parametrizations. This uses choice-free gluing, not its optional comparison clause. Finite distributivity and associator maps preserve product orientations, the positive point is the two-sided unit, and transposition has sign (-1)^(mn). Finite-support extension defines the direct-sum product, with empty representatives as zero. The unoriented ring meets the cited commutative grading Definition; the oriented structure has the expressly stated sign rule and associative unital ring axioms. Forgetting orientation preserves addition, multiplication and positive unit. Retained the reader positive-unit repair; clarified F4 to distinguish ordinary diffeomorphism invariance from oriented invariance requiring an orientation-preserving diffeomorphism, as already used correctly in step 1.2. Manifest and contracts synchronized; precheck passes.

Verdict: `amended_repair`. Closed defects: `frontier-38-owner-30-5a-b13-ring-positive-unit`, `frontier-38-owner-30-5a-b13-ring-oriented-diffeomorphism`.

## ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles

Reviewed Example/Facts and four verification steps against twenty exact suppliers, including the repaired disk and bounded-model equivalence/group interface. The region has outer radius 2, holes of radius 1/2 centered at ±(1,0). On each boundary precisely one rho vanishes with nonzero derivative; the half-space chart argument and closed-subset compactness apply. det(r,Jr)>0 gives counterclockwise outer and clockwise inner boundary directions. The inner collars have radii [1/2,5/8), opposite-hole distance at least 2-5/8>1/2 and norm at most 1+5/8<2; outer collars have norm (3/2,2], so distance to either inner centre exceeds 1/2. Thus all images lie in P and are open collar neighbourhoods. The two source annuli are disjoint. Incoming -CCW signs and outgoing CCW signs give the additive relation; translations and positive scalings identify all circles with the disk example. Retained the reader normal/tangent and chart repairs. Confirmed and corrected refuter finding 3 by exchanging the inner-boundary paired signs. The manifest now matches the actual radius-1/2 region and Example; contract derivation and source quotations synchronized. Precheck passes; no item interface changed in this adjudication.

Verdict: `amended_repair`. Closed defects: `frontier-38-owner-30-5a-b13-pants-normal-tangent`, `frontier-38-owner-30-5a-b13-pants-chart-coordinate`.

## ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles — flagged

Flagged finding 3: C_+ is centered at (-1,0) and rho_+=||x+(1,0)||²-1/4. At x=(-3/2,0) on C_+, the old own-circle norm ||x-(1,0)|| was 5/2 and the alleged opposite-circle norm ||x+(1,0)|| was 1/2. Exchanged the signs in the two inner-boundary norms: ||x±(1,0)||=1/2 and ||x∓(1,0)||≥3/2 on C_±. This restores the claimed strict positivity of the other defining functions; the rest of the geometry and collar/orientation argument was independently verified. Contract derivation refreshed and precheck passes.

Verdict: `confirmed_fatal`. Closed defects: `frontier-38-owner-30-5a-b13-pants-paired-signs`.

## ex-signed-points-give-the-oriented-zero-bordism-invariant

Reviewed Example/Facts and both verification steps against all nineteen exact suppliers. The positive source point maps to -1 and the negative source point to +1 in the standard interval, so the induced boundary signs are the negatives of the incoming source signs. The collar images [-1,-1/2) and (1/2,1] are disjoint relative open endpoint neighbourhoods. The previously reviewed signed-count isomorphism proves both directions of equality of classes, surjectivity, additivity and the generator; the empty point set has count zero. Pre/post item and manifest hashes are equal, and the original touched obligation concerns only the reader’s contract evidence enrichment. That enrichment is reviewed without a defect. The separate flagged:13:2 decision below owns and closes the actual current F3 hypothesis repair; this audit-enrichment decision does not dispose that finding. Current proof provenance and manifest were updated for that flagged repair, and precheck passes.

Verdict: `reviewed_no_defect`; change_kind `audit_enrichment`. No new defect ledger row.

## ex-signed-points-give-the-oriented-zero-bordism-invariant — flagged

Flagged finding 2: F3 said classes of diffeomorphic oriented manifolds agree, but the diffeomorphism Definition includes no orientation condition. A positive and negative point are smoothly diffeomorphic and have signed counts +1,-1, so the zero-dimensional isomorphism distinguishes their classes. The cited group theorem step 1.1 requires an orientation-preserving diffeomorphism. Added orientation-preserving and closed in F3 to match the supplier. Example and proof remain correct, all cited suppliers were read, manifest/provenance updated and precheck passes. This is a facts-only repair, with no Statement or Definition change.

Verdict: `confirmed_fatal`. Closed defects: `frontier-38-owner-30-5a-b13-signed-point-diffeomorphism`.

## ex-two-unoriented-points-bound-an-interval

Reviewed Example/Facts and three verification steps against all sixteen exact suppliers. [-1,1] has the explicit smooth half-space endpoint charts and is compact. The combined collar has images [-1,-1/2) and (1/2,1], which are disjoint relative open sets, making its disjoint-union map a smooth embedding. Transport by the arbitrary two-point bijection gives the specified boundary identification. The parity isomorphism already proves that one point is nonzero, two points vanish and all finite even sets bound; empty sets are included in that criterion. Only unoriented classes are used in F4, so ordinary diffeomorphism invariance is correct. Pre/post item/manifest hashes agree; the routed touch is exact-citation/derivation audit enrichment, not an item repair.

Verdict: `reviewed_no_defect`; change_kind `audit_enrichment`. No new defect ledger row.

## smooth-cobordism-relations-groups-and-rings — page

Reviewed the complete A-page prose, stable nineteen-item order and empty examples list, and the B-page summary as context. The prose accurately describes supplied collars and choice-free geometric laws, conditions optional collar comparison on countable choice, and records inherited AC for characteristic classes. It specifies a positively oriented point as the oriented unit and keeps the corner-free product scope. The characteristic-number paragraph concerns complete closed boundaries and claims no converse; the geometric/spectrum distinction is also explicit. The set-size convention is supplied by its listed bordism-group Definition, and the corrected equivalence theorem retains the three geometric properties. No A-page edit is needed: retain the reader prose repair. The B page and unchanged remark contain no additional obligation or defect.

Verdict: `accepted_repair`. Closed defects: `frontier-38-owner-30-5a-b13-page-choice-scope`, `frontier-38-owner-30-5a-b13-page-positive-unit`.

## Manifest reconciliation and final carrier verdicts

The reader changed thirteen item files while leaving their manifest entries in the scaffold form. In particular the cylinder manifest still attributed incoming -o/outgoing +o to the unadjusted product orientation in every dimension, and collar comparison lacked its AC_omega qualification. Reconciled each reader-changed item’s manifest Statement/Definition, dependencies, provenance and source locators with the mathematically reviewed current content. This is carrier maintenance for the same accepted mathematical repairs, and creates no second defect row. The touched verdicts for `def-pontryagin-number-of-a-closed-oriented-manifold`, `lem-boundary-stable-tangent-splits-off-a-trivial-line`, `lem-product-boundary-formula-for-oriented-manifolds`, `lem-collar-gluing-and-corner-smoothing-give-transitivity`, `lem-cylinders-give-reflexivity-of-cobordism`, and `def-unoriented-and-oriented-bordism-groups` are consequently **amended_repair**, superseding the preliminary accepted_repair wording in their item review sections. The decisions JSON contains the final verdicts. No item was rewritten for this manifest reconciliation.

## Consumer impact and frontier records

All direct dependency and reference consumers of the reader-changed interfaces and the locally amended Statements were enumerated against current item files. They are wholly within batch 13: gluing feeds equivalence and product well-definedness; Pontryagin-number transport feeds its boundary proposition; the boundary splitting feeds both number propositions; the product-boundary formula feeds the ring theorem; the bordism-set convention feeds all later group/ring/examples; the SW boundary proposition feeds RP². The set-qualified equivalence theorem feeds the null definition, bordism-group definition, group theorem, zero-dimensional computation, ring theorem and pair of pants. Their actual uses were reviewed above: finite geometric transitivity or already defined bounded-model classes suffice. The ring theorem and Pontryagin boundary proposition have no direct item consumers. No outside affected consumer requires routing to Step 5b, and no propagation beyond one hop is needed because no consumer Statement required repair in response to a supplier change.

The owned frontier dependency input `research/frontier-38-owner-30-batch-13.cross-batch-dependencies.json` remains `[]`, correctly reflecting the absence of cross-batch mathematical edges for owned consumers. No input edit or unified-ledger refresh was needed. No withdrawal is proposed. No defective published supplier or consumer was found in the supplier sections actually consulted, so the published ledger required no new entry and no published content was edited. This is not an audit of the complete transitive published corpus or every bibliography entry.

## Final validation and handoff

- Exact obligation inventory: 24/24, comprising 20 touched, one page and three flagged; no duplicate or extra obligation. Final decisions: 15 amended_repair, five reviewed_no_defect/audit_enrichment, one accepted_repair (page), three confirmed_fatal. The contract-only signed-point touch is audit enrichment; its distinct flagged decision owns the mathematical repair.
- All 29 owned closed defect rows have unique decision references, correct subject IDs and caught_at_stage `5a-adjudicate`; each flagged decision references exactly one repaired fatal row and has repair_confidence 1. No owned early ledger row remains unreferenced. Two of this task’s page-row evidence paths were mechanically corrected to the actual library path while holding the ledger append lock; other owners’ rows were preserved and the generated view was refreshed.
- `node tools/risk-report.mjs research/frontier-38-owner-30-batch-13.proof-contracts.json` initially passed. The final `--require-reviewed` run also passed: 24 routed items, 23 HIGH/CRITICAL with specific complete risk_review entries, 0 errors.
- Final `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-13.proof-contracts.json --strict`: 24/24 items, 0 errors, 0 warnings. Contract synchronization initially produced four escaped-newline quote mismatches, and regeneration later omitted four explicit earlier-step inputs; both mechanical mistakes were corrected and the final command passed. No defect row was created for a checker or mechanical synchronization failure.
- Final focused precheck passed on the seven locally edited items. Scoped rendercheck passed on the same seven files, with actual KaTeX parsing and renderer YAML parsing.
- After all item edits, the required one batched `node tools/proof-layout.mjs` invocation covered `items/thm-smooth-cobordism-is-an-equivalence-relation.md`, `items/prop-boundaries-have-zero-stiefel-whitney-numbers.md`, `items/prop-oriented-boundaries-have-zero-pontryagin-numbers.md`, `items/thm-cartesian-product-makes-bordism-a-graded-ring.md`, `items/ex-a-circle-is-the-boundary-of-a-disk.md`, `items/ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles.md`, and `items/ex-signed-points-give-the-oriented-zero-bordism-invariant.md`: seven items, 26 steps, 0 defects. No item was edited after this final layout check.

Current mathematical review is complete for this dispatch. No escalation, unresolved mathematical finding, or owner decision remains in batch 13. Historical comparisons use the pre/post fingerprints and the reader’s exact change evidence; no old file preimage, unperformed source reading or byte-level historical reconstruction is claimed. These are local review and mechanical checks, not independent judgment or certification. Decisions have no self-authored stamps; the engine owns current hash stamping, the gate battery and subsequent routing/stage transitions.

## Outside-scope mechanical ledger diagnostics

The optional run-wide `node tools/defect-ledger.mjs validate --run frontier-38-owner-30` returned exit 1: 355 rows checked at that moment, 13 invalid location-enum values, all in batch 10. These are mechanical records, not mathematical findings, and no new defect rows were created. Route to the Step-5 lead/batch-10 owner for metadata disposition; no batch-10 artifact was edited. Exact rows:

- `frontier-38-owner-30-5a-b10-lem-circle-neighbourhood-arc-contains-no-nontrivial-subgroup-1`: location `sources`.
- `frontier-38-owner-30-5a-b10-lem-continuous-characters-of-the-real-line-are-exponentials-2`: location `sources`.
- `frontier-38-owner-30-5a-b10-lem-character-evaluation-pairing-is-jointly-continuous-1`: location `proof`.
- `frontier-38-owner-30-5a-b10-lem-character-evaluation-pairing-is-jointly-continuous-2`: location `proof`.
- `frontier-38-owner-30-5a-b10-lem-pointwise-limits-of-characters-are-characters-3`: location `sources`.
- `frontier-38-owner-30-5a-b10-lem-dual-homomorphisms-are-continuous-and-functorial-2`: location `sources`.
- `frontier-38-owner-30-5a-b10-lem-dual-identity-neighbourhood-is-compact-2`: location `sources`.
- `frontier-38-owner-30-5a-b10-thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals-1`: location `sources`.
- `frontier-38-owner-30-5a-b10-ex-pontryagin-dual-of-a-finite-cyclic-group-1`: location `sources`.
- `frontier-38-owner-30-5a-b10-ex-pontryagin-dual-of-the-circle-is-the-integers-3`: location `sources`.
- `frontier-38-owner-30-5a-b10-circle-ew-equation-locator`: location `sources`.
- `frontier-38-owner-30-5a-b10-ex-pontryagin-dual-of-the-integers-is-the-circle-2`: location `sources`.
- `frontier-38-owner-30-5a-b10-ex-pontryagin-dual-of-euclidean-space-3`: location `sources`.

The 29 batch-13 rows were extracted as a temporary validation input and validated separately. The dispatch is complete; this outside-scope diagnostic does not establish global ledger or engine gate closure.
