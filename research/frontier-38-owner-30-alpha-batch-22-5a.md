# Step 5a adjudication — batch 22

Run: `frontier-38-owner-30`. Group: `batch-22`. Scope assignment group remains `a`.

The authoritative scope routes no touched, page, reader or flagged obligations. Its reader/refuter findings and cross-batch dependencies are empty. The decisions file therefore contains an empty decisions array. Three HIGH/CRITICAL risk reviews are required; these are completed in the generated dependency order. No rendered evidence bundle was located for batch 22; current carriers and exact supplier text are the entry evidence.

## Completed review: closed-subgroup criterion (level 2)

Carrier: `items/lem-closed-subgroup-scheme-valued-point-criterion.md`, Statement, F1–F3, steps 1.1–3.1. Claim: for a closed subscheme of a finite-type group scheme over a field, subgroup structure is uniquely induced exactly when all commutative unital algebra-valued point sets are subgroups; equivalently the three operations factor. AC is explicitly assumed in Facts and Given through the affine quotient supplier. No reducedness, smoothness or algebraic closedness is needed.

The forward direction follows from the homomorphic inclusion. The reverse uses R=k for the identity, then universal points on affine charts of H×H and H for multiplication/inversion. Monomorphy makes the factors agree on arbitrary overlaps. Gluing and cancellation transfer the group identities. A finite quotient-affine cover proves finite type. The independent factorization criterion and uniqueness follow from the same cancellation. Empty H fails the identity test; the zero algebra gives singleton point sets; trivial and nonreduced subgroups are covered.

Direct dependencies read: `def-group-scheme-over-a-field`, `def-morphism-and-closed-subgroup-scheme`, `thm-affine-closed-immersions-quotient-rings`, `thm-fibre-products-of-schemes-exist`, `def-axiom-of-choice`. Additional prerequisite text read: `def-closed-immersion-schemes`, `def-scheme-over-base`, `def-locally-finite-type-and-finite-type-morphism`, `lem-fibre-products-glue-over-open-covers`. The current published affine quotient proof establishes affineness by finite-cover equalizers/localization, then surjectivity by stalkwise cokernel detection; the supplied AC hypothesis covers prime/nilradical detection. No published defect was identified in these uses.

Sources actually consulted: [Milne, Algebraic Groups](https://www.jmilne.org/math/Books/iAG2022.pdf), Definitions 1.1–1.3 and §§1.4–1.5, printed pp.6–8 (1-based PDF pp.17–19); complete relevant group-object definitions and all-algebra criterion. [Stacks 022S](https://stacks.math.columbia.edu/tag/022S), complete definition; [Stacks 0G8L](https://stacks.math.columbia.edu/tag/0G8L), complete factorization statement and test-point argument; [Stacks 01IN](https://stacks.math.columbia.edu/tag/01IN), complete affine quotient statement and its argument. The local proof supplies chart/gluing details beyond the source summaries.

Disposition: reviewed without a defect; this risk-only carrier owes no decision. CRITICAL score 11; complete item-specific risk_review written to its owning proof contract. Reader and refuter no-finding conclusions were treated as evidence and independently checked. No repair or unresolved obligation. Next action: level-2 affine group-scheme example.

## Completed review: standard affine examples (level 2)

Carrier: `items/ex-additive-multiplicative-and-general-linear-group-schemes.md`, Example and Verification steps 1.1, 1.2, 2.1. Claim: Ga, Gm and GLn (n≥1) are finite-type group schemes over any field, with the stated groups over every commutative unital k-algebra, including algebras with nilpotents.

The polynomial and Laurent formulas are algebra maps with the stated units. For GLn, determinant multiplicativity extends multiplication to the localization; the identity determinant is one. The localized adjugate matrix is a two-sided inverse and has determinant d⁻¹, so inversion is regular. The point-description equivalence works in both directions over arbitrary rings. Universal coordinate-algebra points establish all affine scheme identities. Finite generation follows by adjoining one inverse generator with relation zd−1. At n=1 the formulas reduce to Gm; at R=0 all point groups are singleton groups. These computations introduce no choice assumption.

All seven direct suppliers were read: `def-group-scheme-over-a-field`, `def-morphism-and-closed-subgroup-scheme`, `thm-affine-scheme-ring-anti-equivalence`, `thm-affine-fibre-product-tensor-ring`, `cor-inverse-matrix-by-adjugate`, `thm-determinant-multiplicative`, `thm-ring-matrix-arithmetic-laws`. Additional underlying supplier proofs read: `thm-adjugate-identity-over-a-commutative-ring`, `cor-square-matrix-invertible-iff-determinant-is-a-unit`. The ring hypotheses and positive-size matrix restrictions exactly match their uses. No recursive audit of every published ancestor is claimed.

Sources actually consulted: [Milne](https://www.jmilne.org/math/Books/iAG2022.pdf), §§2.1–2.2 and 2.8, printed pp.39–41 (1-based PDF pp.50–52), complete relevant coordinate formulas and representability descriptions; [Stacks 022U](https://stacks.math.columbia.edu/tag/022U), [022V](https://stacks.math.columbia.edu/tag/022V), and [022W](https://stacks.math.columbia.edu/tag/022W), complete example texts. The local proof additionally supplies the localization and inverse checks.

Disposition: reviewed without a defect; no decision owed. HIGH score 5; complete item-specific risk_review recorded. No repair, published supplier defect, missing prerequisite or unresolved uncertainty. Next action: level-3 infinitesimal counterexample.

## Completed review: infinitesimal counterexample (level 3)

Carrier: `items/cex-alpha-p-mu-p-rational-points-do-not-detect-scheme.md`, Statement refuted, F1–F4, witness and steps 1.1–3.1. The algebraically closed positive-characteristic field is a valid instance of the refuted universal claim; the calculation itself only needs a field of characteristic p. Both coordinate algebras have dimension p and a surviving nonzero nilpotent. The element t in the multiplicative quotient is invertible (tᵖ=1), which justifies its closed embedding into Gm. Frobenius gives subgroups over every test algebra, so the reviewed criterion applies with its explicit inherited AC. Substitution t=1+x identifies the underlying schemes, and both field-point groups are trivial.

For a homomorphism αp→Gm, identity and multiplication preservation give c₀=1 and g(x+y)=g(x)g(y) in k[x,y]/(xᵖ,yᵖ). The monomials xⁱyʲ, 0≤i,j<p, are a basis. Comparing xʳ⁻¹y for 1≤r<p gives rcᵣ=cᵣ₋₁c₁ and hence cᵣ=c₁ʳ/r!. The surviving degree-p monomial xᵖ⁻¹y has left coefficient zero and right coefficient c₁ᵖ/(p−1)!, forcing c₁=0 over the field. At p=2 this is exactly the xy comparison. Thus every such homomorphism is trivial. Composing any hypothetical αp≅μp with the multiplicative inclusion would instead preserve a nonzero pullback of t−1, contradiction. This excludes all group-scheme isomorphisms, and refutes both determination claims. The additional x⊗x term is nonzero; comparison is made over nilpotent test algebras rather than just fields. The zero test algebra causes no exception.

All seven direct dependencies were read earlier in this session, and both level-2 suppliers had complete risk reviews before this item was reviewed. Sources actually consulted for the witness: [Milne](https://www.jmilne.org/math/Books/iAG2022.pdf), §§2.4–2.5, printed p.40 (1-based PDF p.51), and §2.14, printed p.44 (PDF p.55), complete relevant paragraphs; [Stacks 040M](https://stacks.math.columbia.edu/tag/040M), complete roots-of-unity example. The additive/multiplicative formulas were read at the sources listed above. Milne asserts the nonisomorphism; the local argument proves it explicitly, and was checked independently rather than accepted from that assertion.

Disposition: reviewed without a defect; no decision owed. CRITICAL score 11; complete item-specific risk_review recorded. No repair, published supplier defect, missing prerequisite or unresolved uncertainty. Next action: final scoped hash and risk/layout checks, then handoff to the engine.

## Final checks and handoff

The initial command `node tools/risk-report.mjs research/frontier-38-owner-30-batch-22.proof-contracts.json` reported two CRITICAL carriers (scores 11 and 11), one HIGH carrier (score 5), and zero errors. After the three ordered reviews, `node tools/risk-report.mjs research/frontier-38-owner-30-batch-22.proof-contracts.json --require-reviewed` reported all three required reviews complete and zero errors.

Read-only layout check: `node tools/proof-layout.mjs items/lem-closed-subgroup-scheme-valued-point-criterion.md items/ex-additive-multiplicative-and-general-linear-group-schemes.md items/cex-alpha-p-mu-p-rational-points-do-not-detect-scheme.md` reported 3 items, 9 steps, 0 defects. No item was edited or formatted, so no repair precheck was needed.

A Python SHA-256 comparison checked the complete pre/post snapshots: all five item/contract/manifest snapshot entries and both page snapshot entries agree between pre and post. All five current item byte hashes and both current page byte hashes match those snapshots. Reviewed risk carrier hashes:

| Carrier | Current raw SHA-256 |
| --- | --- |
| `lem-closed-subgroup-scheme-valued-point-criterion` | `34b5abbc31f7b8ba3d43823b85cc462911ffe35e43a5358fd99c70b4dd1a1e37` |
| `ex-additive-multiplicative-and-general-linear-group-schemes` | `74cad200f4f419de2a89f7d8d9dc2e17fc33479fe3450925b34fc3984a666936` |
| `cex-alpha-p-mu-p-rational-points-do-not-detect-scheme` | `b08c54a71b0ab87954e96a0ea176b3f33d25046445bbc03542fa85553b811d82` |

The decisions JSON has version 1, run `frontier-38-owner-30`, group `batch-22`, and `decisions: []`. An assertion checked that this exactly matches the authoritative empty touched/page/reader/refuter obligation scope. No obligation was invented for risk-review metadata. The only proof-contract additions are the three item-specific risk_review records; no mathematical contract clause or carrier changed.

The live `.autopilot/frontier-38-owner-30` disk status confirmed a running Step-5a run; no historical RESUME claim was used. No page-only obligation was routed, so page prose was not adjudicated. The owned cross-batch input is empty and none of the reviewed supplier uses requires another frontier batch; no dependency-ledger change or Step-5b consumer alert is needed. No defective published supplier was found, so the published ledger and its index need no change. No defect-ledger row, repair-confidence assertion, withdrawal, escalation or owner decision is required.

Written artifacts: this task-named report, `research/frontier-38-owner-30-alpha-batch-22-5a-decisions.json`, and the owning batch-22 proof contract risk reviews. No agents were dispatched and no judge, stamp, certification or gate cycle was initiated. These are local mathematical reviews and format checks, not independent certification. There are no unresolved batch-22 findings or blockers. The engine owns decision hashes, its gate battery and the next transition.
