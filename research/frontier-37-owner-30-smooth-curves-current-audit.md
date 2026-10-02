# Frontier 37, batch 6 smooth-curves current audit

Date: 2026-09-30 UTC  
Run: `frontier-37-owner-30`  
Scope: the 49 exact IDs in `research/frontier-37-owner-30-batch-6.pages.json` (A pair and B companion).

## Entry state and stability

This is an independent mathematical audit in progress. It is not a Step 3 receipt, owner decision, gate result, or scope recommendation. Only this report is in write scope until root releases exact stable targets.

At entry, the live Step 3 item decisions were 9 current accepts, 12 items needing a current audit, and 28 stale escalation receipts whose inputs have changed. All 28 stale escalation input closures intersect the active batch-5 Cartier/Weil author’s declared 46-item write scope, through the 30 batch-5 suppliers listed below. None of the 12 currently unaudited items, or the 9 current accepts, intersects that write scope. These intersections are mechanical hash-input reachability, not proof defects. Do not refresh the 28 while that author is active; root owns reopen/current escalation decisions.

The live Autopilot status read at 2026-09-30 16:20 UTC showed run `running`, batch-5 Cartier/Weil Step-3b author `step3b-pair-cartier-and-weil-divisors-line-bundles-and-picard-groups-d89bb7ff66c85a23` in flight, and Step 3a scope not yet gated. The batch-6 A-page scope receipt currently resolves to an owner-held `proceed; apply amendments and record proceed for current scope` condition. Root retains the scope decision, consistent with the active owner handoff.

The 9 already-closed reviews will be reused unchanged:

- `def-algebraic-curve-over-field`
- `def-rational-map-integral-schemes`
- `lem-rational-map-smooth-curve-to-proper-scheme-extends`
- `thm-local-ring-smooth-curve-dvr`
- `thm-h0-structure-sheaf-proper-curve`
- `def-arithmetic-genus-proper-curve`
- `thm-nonconstant-morphism-proper-curves-finite-surjective`
- `thm-plane-curve-arithmetic-genus`
- `cex-rational-map-singular-curve-not-extend-uniquely`

The 12 items without a current item audit are:

- `thm-normalization-glues-integral-finite-type-curves`
- `thm-curves-function-fields-equivalence`
- `cor-birational-smooth-proper-curves-isomorphic`
- `def-nonconstant-morphism-curves-degree`
- `def-geometric-genus-singular-curve`
- `def-delta-invariant-curve-singularity`
- `lem-normalization-lowers-arithmetic-genus-delta`
- `cor-plane-curve-geometric-genus-delta-correction`
- `lem-composite-finite-proper-morphism-proper`
- `ex-nodal-cubic-normalization-genus`
- `ex-cuspidal-cubic-normalization-genus`
- `ex-plane-quartic-genus-three-smooth`

The 28 escalations with changed inputs are:

- `def-divisor-smooth-proper-curve`; `thm-cartier-weil-divisors-curves-agree`; `def-riemann-roch-space-of-divisor`; `lem-effective-divisors-sections-mod-scalars`; `def-complete-linear-system`; `def-base-point-linear-system`; `thm-base-point-free-linear-system-morphism`
- `def-canonical-line-bundle-curve`; `lem-rational-differential-divisor-well-defined-class`; `def-ramification-index-curve-map`; `lem-curve-different-local-support-and-index-bound`; `lem-fibre-degree-sum-ramification-residue`; `def-ramification-and-branch-points`; `def-different-divisor-curve-map`
- `lem-torsion-quotient-invertible-sheaves-effective-divisor`; `thm-canonical-bundle-ramification-formula`; `lem-degree-effective-divisor-nonnegative`; `thm-degree-positive-line-bundle-sections-zero-bound`; `lem-function-with-poles-defines-map-p1`; `def-gonality-curve`
- `ex-projective-line-divisors-linear-systems`; `ex-smooth-conic-is-projective-line-with-point`; `ex-hyperelliptic-curve-double-cover`; `cex-inseparable-map-riemann-hurwitz-naive-fails`; `ex-divisor-degree-over-nonalgebraically-closed-field`; `ex-basepoint-linear-system`; `cex-degree-zero-line-bundle-no-section`; `ex-ramification-power-map-projective-line`

The exact batch-5 input suppliers in the intersection are:

`def-cartier-divisor`, `def-degree-divisor-proper-curve`, `def-divisor-support-positive-negative-parts`, `def-effective-cartier-divisor`, `def-invertible-sheaf-of-cartier-divisor`, `def-linear-equivalence-cartier-divisors`, `def-locally-factorial-scheme`, `def-order-codimension-one-rational-function`, `def-picard-group-scheme`, `def-principal-cartier-divisor`, `def-principal-weil-divisor-and-class-group`, `def-pullback-cartier-divisor`, `def-rational-section-line-bundle`, `def-sheaf-total-quotient-rings`, `def-weil-divisor-normal-noetherian-scheme`, `lem-cartier-divisor-addition-tensor`, `lem-cartier-divisor-sheaf-invertible`, `lem-cartier-to-weil-injective-normal`, `lem-cartier-to-weil-respects-principal-and-addition`, `lem-finite-flat-curve-fibre-degree`, `lem-global-section-effective-divisor`, `lem-principal-weil-divisor-locally-finite`, `lem-proper-normal-curve-rational-function-map`, `lem-pullback-cartier-divisor-line-bundle`, `thm-cartier-divisors-mod-principal-to-picard`, `thm-cartier-to-weil-divisor-normal-scheme`, `thm-cartier-weil-isomorphism-locally-factorial`, `thm-effective-cartier-divisor-closed-immersion`, `thm-line-bundle-rational-section-cartier-divisor`, `thm-principal-divisor-degree-zero-proper-curve`.

The prior report `research/frontier-37-owner-30-smooth-curve-escalations-audit.md` records five mathematically motivated repairs and full-source readings/check evidence. I have read that report. It is a route map, not a substitute for this independent review: I am verifying the current item proofs and actual supplier uses. Its 39 source-row recommendations remain report-only and are not scope changes.

## Hash snapshot at audit entry

Each hash is `itemHash` over the item and its declared dependency closure as loaded from the current batch manifest and item frontmatter. This snapshot is for identifying changed inputs during the audit; it does not imply a mathematical verdict.

| Item | Entry decision state | Item/dependency hash |
|---|---|---|
| `def-algebraic-curve-over-field` | closed | `0f84af6071f40546682e128004ef861d1e314d17b5c4087fc3812bcea701a021` |
| `thm-normalization-glues-integral-finite-type-curves` | audit required | `3caa9dedb14adb977ee3e8398174b5ee36ca6e9f6b57ad96310e3d4d929947e9` |
| `def-rational-map-integral-schemes` | closed | `e3e4f21b85c97a25c7f999f98487069e0cb65944f3e3263c31bb064ecf07d6e5` |
| `lem-rational-map-smooth-curve-to-proper-scheme-extends` | closed | `a5e8104f7c4d192cbe8f38c6de78cf1fb41611794c8eb987c354b88f7dd3e1a6` |
| `thm-curves-function-fields-equivalence` | audit required | `c0f6d1b8715c4a5a1830032ef1c186a5acb4632a5607a184346ced5e09301388` |
| `cor-birational-smooth-proper-curves-isomorphic` | audit required | `9d91f62cc3bf0c50f841db0ced71becbbc65a9628005dd1dd6217506c43ecc2d` |
| `thm-local-ring-smooth-curve-dvr` | closed | `acdcea4e0a9303dfa0edfc671d1e80098db6121d5e1b8c24fc5432beef1b9243` |
| `def-divisor-smooth-proper-curve` | stale escalation | `ef1d4ab6c7e25daca2122ad2cf305ddda2aa7a41c0c26420eb80b706f166a5fc` |
| `thm-cartier-weil-divisors-curves-agree` | stale escalation | `2a39eca0efa4b927d0f1e459032002da8ce610d962ec2a7277e3df1138b35817` |
| `def-riemann-roch-space-of-divisor` | stale escalation | `e0fdab61c685c043ebd9031a40aa4410d2039fa42fba3bade8ec5151ad23d846` |
| `lem-effective-divisors-sections-mod-scalars` | stale escalation | `cff6b06ddb9a00c596cc7b3508f66d63d4455a2109bc1dd34b73915633ef8205` |
| `def-complete-linear-system` | stale escalation | `4e849d04b46974bf3e7bf999513df36278b505a4697f8fff3f93edd2d0e441d0` |
| `def-base-point-linear-system` | stale escalation | `4e8e1a93f34b9d666b1a138a22d39b6b8455155e7a94ef4502f937481fa17261` |
| `thm-base-point-free-linear-system-morphism` | stale escalation | `89b46de604ea0148a6162dc3e3c934f4ba539f16a136f44aa7e413f773d05183` |
| `thm-h0-structure-sheaf-proper-curve` | closed | `43af66893e04d314e6bd75965f0d5607899afcb168682f513746935338924fe7` |
| `def-arithmetic-genus-proper-curve` | closed | `356b8aa3b465ae026035786ad132645ef018a5de1e1018de2c75109cafeabc37` |
| `def-canonical-line-bundle-curve` | stale escalation | `208f9fecfe986524652e5b80aa74839496ef54c96a9b2afe7fc797f9b0d59bee` |
| `lem-rational-differential-divisor-well-defined-class` | stale escalation | `2a953b3c8a3261816055188c09342ea2e2f1a767a322a1fa765a9100fdfabcf9` |
| `thm-nonconstant-morphism-proper-curves-finite-surjective` | closed | `00970cecd7af5e5b6e05b8e65fa44c40bc382872cad35712a26bfdedb039da95` |
| `def-nonconstant-morphism-curves-degree` | audit required | `a09873e22027ae305769b92c2584dcc96ca2961531a42f1b99d59d1efc47efe4` |
| `def-ramification-index-curve-map` | stale escalation | `ab87039edcaa565e66f791922c5c2ea90b1b623b1054bb186a5383656e8d4364` |
| `lem-curve-different-local-support-and-index-bound` | stale escalation | `62905fa028a6a6e56ddd7016a0f0f97bf3a2437883fba3dc8ec2c5faaf3155f1` |
| `lem-fibre-degree-sum-ramification-residue` | stale escalation | `c4289af414bc5ff21d01aa151311c1589a30c61a6934f28df3f35fd6c571ccc0` |
| `def-ramification-and-branch-points` | stale escalation | `56af37c9a27a5207b4b415915f20e52ea06746051f78527d9d445943bf883731` |
| `def-different-divisor-curve-map` | stale escalation | `33ed2772571b89334628e808ea4a5f4c54f6a291171d721697c0fb5b7475f7b4` |
| `lem-torsion-quotient-invertible-sheaves-effective-divisor` | stale escalation | `4fdf552fe3dbeb9ebbdf2a1fb3b1aa2ad8ee3309970e4299a2555ca52e20460b` |
| `thm-canonical-bundle-ramification-formula` | stale escalation | `abd8007e4017abc46b79e2f594677f53573d7730422ccd70048c0fa40b27c7f4` |
| `lem-degree-effective-divisor-nonnegative` | stale escalation | `522315962bec6c1c950f3f7ed3c7c9a5aaba55c22023946e86ab20589a9de31e` |
| `thm-degree-positive-line-bundle-sections-zero-bound` | stale escalation | `0c7d23ef95667988815ee350a755f920a49a3120da15bb973606aacb4ebe96c3` |
| `lem-function-with-poles-defines-map-p1` | stale escalation | `3019f1921d83868f5ad020bfa26464664ca5bdc2e515b59196b9a00497963e98` |
| `def-gonality-curve` | stale escalation | `725a3d3a569dc4bca20f0d2cef12c1a82db49dcc76e864a49c0b826da99488f1` |
| `def-geometric-genus-singular-curve` | audit required | `807fa3bd6bfb465874717854a19f458e7026b92205ce5de26836a91840601003` |
| `def-delta-invariant-curve-singularity` | audit required | `2b94006c4da271c1f30b154928a9a6a88fb51a0be0449c01f9020e3ae3858d6d` |
| `lem-normalization-lowers-arithmetic-genus-delta` | audit required | `6604d2c7012924cfd46275da7a1b9ada10caf8b4b67687e30d2c7145ec88bfd1` |
| `thm-plane-curve-arithmetic-genus` | closed | `e4696fa1b0246bc9443f959c6fd7cf377d8c6c23a518ae7837ef368644430d87` |
| `cor-plane-curve-geometric-genus-delta-correction` | audit required | `83f69088a653a1060ebc7a774a791af075ede6f0cba2824585632c89196c41fe` |
| `lem-composite-finite-proper-morphism-proper` | audit required | `ee269a13df92cf72dce6d235100e529bf8a57a3c5f117db1b25a3ac5c89053a6` |
| `ex-projective-line-divisors-linear-systems` | stale escalation | `321698b18be219671f4c648ce4103c092c46c5e85e95dc7143415a519cd087ae` |
| `ex-smooth-conic-is-projective-line-with-point` | stale escalation | `bf704d6e8a1f5424ad7ce8a55dae0d0b0bb415f4ce0a032da7c60265517e7a35` |
| `ex-hyperelliptic-curve-double-cover` | stale escalation | `98ab68195d57726ac51177effe16102179601f473cfa0068dd52f64efe8f8c82` |
| `cex-inseparable-map-riemann-hurwitz-naive-fails` | stale escalation | `853e167b2b27861810052e24d1e3257a420187f6b5f8e72dee4ebbf76af7a59f` |
| `ex-nodal-cubic-normalization-genus` | audit required | `03368bd1ea4a34503453d9c8b5d83c3671a235ff227ff9b140190ad0f99fe219` |
| `ex-cuspidal-cubic-normalization-genus` | audit required | `8889ec56957a107596bbd335fa2975c7688297601380b0b454fb57a3547bca81` |
| `cex-rational-map-singular-curve-not-extend-uniquely` | closed | `b7f4aa2f331666a9cdd5f063c1ab98832f936f00616d3ec56e57f2f73a2577b9` |
| `ex-divisor-degree-over-nonalgebraically-closed-field` | stale escalation | `7468b19a79edbef233f9d20359455f70ccef5f726aa61658b3bbbd00398c36dd` |
| `ex-basepoint-linear-system` | stale escalation | `fe19068aeaae5d3c4eea2e438a924cd0aeb23f98e716bd750d7a12b23fe4a3cd` |
| `cex-degree-zero-line-bundle-no-section` | stale escalation | `69d04cd5a9257c59ac4e45fb95ff24a0a2a9fc99ecd353a888f15020fc38c279` |
| `ex-ramification-power-map-projective-line` | stale escalation | `01d34ce61290963b192e1e4d94f14cb262656fa3e130d9c0f6067de0db05dbd1` |
| `ex-plane-quartic-genus-three-smooth` | audit required | `5985ecad91ea8513182a7f07e5cb6d10fdf42d7675df786f44d0c69eb3644d9f` |

## Current audit work

I am reviewing the actual 49 statements and proof bodies, the direct suppliers at their cited proof uses, and the five prior repairs. Existing valid closed reviews will be reused. I will distinguish (a) current audit work, (b) old escalations that require root reconciliation after stable supplier inputs, (c) incomplete authoring or unresolved proof defects, and (d) proofs ready for a future receipt. No math file, batch carrier, receipt, scope decision, contract, gate, publication record, or run-state file is in scope here.

## Provisional findings from the first 12 open items

These are proof findings only. No item or carrier has been repaired, and I have not issued receipts.

- `lem-normalization-lowers-arithmetic-genus-delta`, Step 2.2, does not establish the claimed equality `Q ≅ i_*(Q|_S)` for the reduced finite singular set `i:S→X`. Restriction has stalk `(Q|_S)_x=Q_x/m_xQ_x`, not `Q_x`; thus the asserted equality of stalks and the deduction `χ(Q)=Σ_x dim_k Q_x` do not follow. Repair route: choose `N` with `I_S^N Q=0`, descend `Q` to the finite zero-dimensional thickening `S_N=V(I_S^N)`, and use the existing closed-immersion cohomology comparison and affine higher-cohomology vanishing there. Since `k` is algebraically closed, its finite support stalks have residue field `k`, and their dimensions add to the stated sum. The plane-curve correction corollary and nodal/cuspidal examples depend on this result.
- `def-delta-invariant-curve-singularity` describes `(ν_*O_{X^nu})_x/O_{X,x}` as a “quotient ring.” In general the subring `O_{X,x}` is not an ideal of its normalization, so this is only a quotient module. The vector-space dimension definition is valid; change that description to “quotient `O_{X,x}`-module.”
- `ex-nodal-cubic-normalization-genus`, Step 1.1, gives incorrect partial derivatives in two projective charts. For `z−x^3−x^2z` on `Y=1`, they are `−3x^2−2xz` and `1−x^2`; for `y^2z−1−z` on `X=1`, they are `2yz` and `y^2−1`. Its Step 1.2 only rules out a product of two lines, which does not rule out the possible line-times-conic factorization of a cubic. Repair the singular-locus check with the actual gradients; prove affine irreducibility by viewing `y^2−x^2(x+1)` as a primitive quadratic in `y` and observing that `x+1` has odd valuation at `x=−1`, so it is not a square in `k(x)` when `char(k)≠2`.
- `ex-cuspidal-cubic-normalization-genus`, Step 1.2, likewise does not prove irreducibility: the fact that the line at infinity meets the curve only at one point does not rule out a line component through that point. Repair with the primitive quadratic `y^2−x^3` over `k[x]`; `x^3` has odd valuation at `x=0`, so it is not a square in `k(x)` when `char(k)≠2`. Both cubic examples also call the displayed `P^1→X` parametrization finite before factoring through the normalization, without proof or a declared finiteness supplier. Since the target cubic is singular, the accepted smooth-target theorem `thm-nonconstant-morphism-proper-curves-finite-surjective` does not apply. Instead prove the parametrization is proper with finite fibers (the explicit maps have fibers of size at most two), hence quasi-finite, and invoke the published `thm-proper-quasi-finite-is-finite`; alternatively identify both affine normalization charts directly.
- `thm-normalization-glues-integral-finite-type-curves`, `thm-curves-function-fields-equivalence`, `cor-birational-smooth-proper-curves-isomorphic`, `def-nonconstant-morphism-curves-degree`, `def-geometric-genus-singular-curve`, `cor-plane-curve-geometric-genus-delta-correction`, `lem-composite-finite-proper-morphism-proper`, and the smooth-quartic example have been read in their current text. The normalization gluing, function-field correspondence, birational cancellation, degree definition, geometric-genus setup, plane-genus substitution, and composite-proper route appear mathematically sound on this pass, subject to the delta-lemma defect above. The quartic’s smooth-implies-integral claim still needs proof or a source.

## Completed mathematical audit of the 40 open decisions

I reviewed all 12 current audit-required item bodies and all 28 stale-escalation consumer bodies. The stale group remains stale as a receipt matter: its dependency closures changed through the in-run Cartier/Weil supplier set. The entry snapshot and the 30 intersecting supplier IDs above identify why those 28 need fresh decisions after writers drain. The input change itself does not establish a proof defect. I reused the existing source readings and mathematical work recorded in `research/frontier-37-owner-30-smooth-curve-escalations-audit.md`; I did not redo its 39 report-only source searches.

### Current audit-required items

The following six current proofs are sound on the audited text and can receive ordinary non-owner accept receipts after their unchanged prerequisite receipts are confirmed current, in dependency order: `thm-normalization-glues-integral-finite-type-curves`, `thm-curves-function-fields-equivalence`, `cor-birational-smooth-proper-curves-isomorphic`, `def-nonconstant-morphism-curves-degree`, `def-geometric-genus-singular-curve`, and `lem-composite-finite-proper-morphism-proper`. The proof routes for normalization gluing, the function-field correspondence, birational cancellation, degree, geometric genus, and composition of finite/proper maps are internally complete on the current text.

`cor-plane-curve-geometric-genus-delta-correction` is a correct substitution of the arithmetic-genus and normalization-delta formula, but its only substantive input is `lem-normalization-lowers-arithmetic-genus-delta`; close it after that supplier is repaired and rechecked.

`def-delta-invariant-curve-singularity` has a terminology defect: `B/O` is generally not a quotient ring because `O` need not be an ideal of its normalization `B`. It is a quotient `O`-module and, under the algebraically closed field assumption, a finite-dimensional `k`-vector space. The dimension definition is otherwise the intended one.

`lem-normalization-lowers-arithmetic-genus-delta` has the Step 2.2 reduced-support restriction error already described above. Repair it by descending the finite-length quotient sheaf to its finite annihilator thickening and using the closed-immersion pushforward/cohomology comparison there; then its Euler-characteristic argument proves the stated formula without replacing a local stalk by its residue-field quotient.

`ex-nodal-cubic-normalization-genus` has three proof defects: the displayed partial derivatives in the `Y=1` and `X=1` charts are wrong; Step 1.2 rules out only a line-times-line factorization, not the line-times-conic factorization; and Step 4.1 calls the displayed parametrization finite without establishing that fact. Correct the gradients, prove affine irreducibility from the nonsquare `x+1` valuation in `k(x)` (the equation is a primitive quadratic in `y`), and establish finiteness of the proper parametrization by quasi-finiteness/finite fibers and the published `thm-proper-quasi-finite-is-finite` (or identify both affine normalization charts). The example also depends on the repaired delta lemma.

`ex-cuspidal-cubic-normalization-genus` likewise does not prove irreducibility by observing that the line at infinity meets the curve at one point; a line component can pass through that point. Use the primitive quadratic `y^2−x^3` over `k[x]` and the odd valuation of `x^3` at zero. Its projective parametrization also needs an explicit finiteness justification: it is proper with finite fibers, so the same published proper/quasi-finite theorem applies. The delta calculation is conditional on the repaired delta lemma.

`ex-plane-quartic-genus-three-smooth` uses a fact “smooth quartic satisfies irreducibility and reducedness” without proving or sourcing it. Prove it by factoring over the algebraically closed field: a repeated component is singular, while distinct components intersect by the published `cor-no-common-component-projective-plane-intersection-is-zero-dimensional`; include that dependency and carry its AC assumption, or give a choice-free intersection proof. Its genus conclusion can then avoid the delta-lemma dependency entirely: smoothness identifies the normalization with the curve, and the plane arithmetic-genus formula gives genus three. The current proof instead invokes the delta-correction supplier, so it remains conditional until that supplier is repaired or this proof route is adjusted.

### Stale-escalation consumers after supplier stabilization

The following 19 stale consumers have no independent proof defect on the audited text; they still require a fresh ordinary decision against stable, actually authored supplier bodies and current dependency hashes: `def-divisor-smooth-proper-curve`, `thm-cartier-weil-divisors-curves-agree`, `def-riemann-roch-space-of-divisor`, `lem-effective-divisors-sections-mod-scalars`, `def-complete-linear-system`, `def-base-point-linear-system`, `thm-base-point-free-linear-system-morphism`, `def-canonical-line-bundle-curve`, `lem-rational-differential-divisor-well-defined-class`, `lem-curve-different-local-support-and-index-bound`, `lem-fibre-degree-sum-ramification-residue`, `def-different-divisor-curve-map`, `lem-degree-effective-divisor-nonnegative`, `thm-degree-positive-line-bundle-sections-zero-bound`, `lem-function-with-poles-defines-map-p1`, `def-gonality-curve`, `ex-projective-line-divisors-linear-systems`, `cex-degree-zero-line-bundle-no-section`, and `ex-ramification-power-map-projective-line`. The five-repair report already records the full source evidence for the repaired canonical/differential arguments and the matching Stacks texts; no blanket recertification is indicated.

The remaining nine stale consumers need local correction or a repaired dependency before their fresh decisions:

- `ex-smooth-conic-is-projective-line-with-point`: Step 1.1 assumes “C is a curve” before deriving that property from the stated smooth conic. State/prove smoothness implies geometric integrality for a plane conic (over the algebraic closure, a reducible conic has intersecting components and is singular), or make the curve assumption explicit; the published `cor-no-common-component-projective-plane-intersection-is-zero-dimensional` supplies the intersection step and this example already assumes AC. The rest of the projection/parametrization calculation checks out.
- `def-ramification-index-curve-map` and `def-ramification-and-branch-points`: the former calls every point with `e_p=1` “unramified,” while the latter correctly separates the index locus from differential/unramified behavior and allows `e_p=1` with inseparable residue extension over an imperfect field. Reserve “unramified” for vanishing relative differentials (equivalently here `e_p=1` plus separable residue extension), or name the index-only convention explicitly throughout.
- `lem-torsion-quotient-invertible-sheaves-effective-divisor`: Step 3.1 proves local stalk isomorphisms after trivializing `L`, but does not assemble them into the stated global, noncanonical isomorphism `Q ≅ O_C(D)/O_C`. Either assemble the finite-support cyclic stalk isomorphisms explicitly, or state the canonical identification `Q ≅ L⊗(O_C(D)/O_C)` instead. `thm-canonical-bundle-ramification-formula` relies on this supplier for its twist, so refresh that theorem only after this route is reconciled.
- `cex-inseparable-map-riemann-hurwitz-naive-fails`: for the inseparable power map, `Ω_{C/D}` is rank one, so its stalks do not have finite length. The text cannot set those lengths to zero and call their divisor `R=0`. State the proposed naive extension as the lengths of the torsion subsheaf (which is zero here), then the line-bundle degree calculation is a valid counterexample; otherwise frame the example only as showing the divisor recipe is undefined without separability.
- `ex-divisor-degree-over-nonalgebraically-closed-field`: the splitting conclusion is correct, but the displayed map `C⊗_R C→C×C`, `a⊗b↦(ab,a\bar b)`, is not `C`-linear for the base-change structure through the second tensor factor. Replace it by `a⊗b↦(ab,\bar a b)`, or factor `t^2+1` over `C` directly.
- `ex-basepoint-linear-system`: `W=span(t,t^2)` has a base point at zero, but its rational map `[t:t^2]=[1:t]` extends to the identity morphism on all of `P^1`. Replace “W determines no morphism at all” by the precise assertion that the original pair does not generate `O(D)` at zero and does not define a morphism via the base-point-free construction for `O(D)`. If the statement is about the rational map itself, acknowledge its identity extension.
- `ex-hyperelliptic-curve-double-cover`: the explicit ramification and differential computations check out on this pass. Its claimed delta formula at infinity uses the defective normalization/delta lemma, so the promised delta conclusion is conditional on that lemma’s repair (or a direct local delta computation).

Several of these consumers also declare the later-page `lem-projective-line-divisors-classified-by-degree` as a forward supplier. Their local mathematics may be reviewed now, but their source-dependent clauses cannot be closed until that promised result is authored and its exact use is checked. The 19-item “no independent defect” list is a mathematical audit classification, not a claim that every external supplier is already complete.

### Reuse and current boundary

The 9 current accepts at entry remain the only closed reviews to reuse. No item-level receipts, shared scope decisions, contracts, gates, or batch state were edited in this audit. At the most recent Autopilot status read (`2026-09-30T16:48:16Z`) the run remained running, Step 3a was 30/30 covered with gates not yet run, and Step 3b was 26/30 covered with four authors in flight. The separate active-authoring check (`16:10Z`) recorded the batch-5 Cartier/Weil author live with missing carriers, while the later status output does not list that pair in flight. Treat this audit’s 28 changed-input decisions as stale until root confirms the writer’s current drain and reconciles the actual inputs.

## Authorized delta repair completed

After the initial audit report, root released exact write scope for
`def-delta-invariant-curve-singularity` and
`lem-normalization-lowers-arithmetic-genus-delta`, plus only those two item
entries in the batch 6 pages and proof-contract carriers. This follow-on
supersedes the provisional delta repair route above; the entry-state audit
matrix remains a snapshot.

- The definition now calls the normalization quotient an
  `O_{X,x}`-module, retaining the stated `k`-dimension definition.
- The genus lemma statement is unchanged. Its proof defines the annihilator
  sheaf of `Q`, proves the finite-generator localization identity
  `Ann_A(M_f)=Ann_A(M)_f`, constructs the quasi-coherent ideal and its closed
  annihilator thickening, and descends `Q` canonically as a module on that
  thickening. The proof retains nilpotents, identifies each component's
  sections with `Q_x`, and applies the existing closed-immersion comparison,
  finite-disjoint-union cohomology, and affine vanishing suppliers.
- Independently reread the support/annihilator, affine quasi-coherent
  equivalence, quasi-coherent ideal/closed-subscheme, associated-module
  section and stalk, closed-immersion cohomology, and affine-vanishing
  suppliers used by the repair.
- Updated only the two selected batch 6 entries and their corresponding
  proof-contract records. No receipt, scope decision, gate, shared plan, or
  run-state record was changed.

Focused checks passed: selected strict proof-contract validation reported
`0 errors, 0 warnings, 2/2 items checked`; selected phase precheck reported
`1 checked, 0 failing` (the definition has no proof body); the selected item
and manifest dependency lists match.

The normalized mathematical item hashes changed only with the authorized
repairs. Before/after `itemHashGuard` hashes were:

| Item | Before | After |
| --- | --- | --- |
| `def-delta-invariant-curve-singularity` | `2fa021b99cada7aa35e3378424cdf72f3e62696c3f12dc750e719c307d0f1e6a` | `36c6ef75d4abf899a8e56ae743932f5a2f8cbd81eee7f4a246526895aa623f43` |
| `lem-normalization-lowers-arithmetic-genus-delta` | `64e2a5651b8aa0d7cda5f833436c84b8cf0363510cba0456f27eb27e58f34fc5` | `63b7d58a13b374a036de59dbaa3ea687fd03cc1f4a233a691c5118250e4d2783` |

For the lemma, the `itemSurfaceHash` changed from
`f4766b29c950b2707b37e7fb0d2cb9f892cb94e3afdacfc319f4e3c84bb47c5c` to
`83cd93fcc960eb2257625a4f22fd38bd4e0bb96a400c37f68f29a356c9121d42` as the
dependency interface changed. No review or receipt was written after these
hashes were computed.

### Root integration of delta repair

Root read the full final lemma and definition and the bound repair/check report, including the finite-generator annihilator localization, descent of Q to the annihilator closed subscheme, affine one-point components and exact cohomology route. Updated only the corresponding prose scaffold purpose; selected B6 carriers were already synchronized by the helper. Reused focused checks, no receipt/gate repeated and no supplier closure inferred merely from file presence. The definition's stated singular-support/finite-length facts remain subject to full dependency closure; the genus lemma now supplies its actual quotient cohomology proof.
