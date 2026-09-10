# Step 3b group d — phase-2-catchup-24

## Final group result — 2026-09-10

All 153 assigned items have a disposition: **144 accepted unchanged, 2 repaired locally, 2 escalated, and 5 unchanged owner repairs bypassed directly to the final mechanical gate**. The last exact-hash scan confirms all 146 acceptance/repair receipts are current. All three assigned Step-3a decisions remain current and sufficient. No escalation was retried or overwritten; no owner override was used.

The gate is **open**. Owner action is required on:

- `def-n-connected-space-and-n-connected-map`: resolve the empty-space convention and synchronize the claim with plan/prose. Hatcher's based-space argument does not justify the unbased empty case.
- `cex-a-degenerate-pullback-metric-under-a-constant-map`: specify a nonempty source or a concrete example, with scope/plan synchronization; the empty positive-dimensional manifold is an actual exception.
- Five owner-repaired items whose item-object hashes still match their owner reports but whose current engine receipts are missing: `thm-based-sphere-maps-are-classified-by-geometric-degree`, `cor-de-rham-cohomology-is-continuous-homotopy-invariant-on-smooth-manifolds`, `def-riemannian-volume-of-a-compactly-supported-smooth-density`, `thm-riemannian-divergence-theorem`, and `prop-riemannian-inner-product-of-compactly-supported-forms`. Reconcile these owner receipts directly at the final gate; no new mathematical adjudication was performed.

The two local repairs affect only `strategy` in batch 9: `lem-the-de-rham-mayer-vietoris-difference-map-is-surjective` and `thm-every-smooth-manifold-admits-a-riemannian-metric`. Their explicit countable-choice constructions supply the coordinate selections, locally finite compact supports and normalization needed by the existing claims. Statements and declared assumptions were preserved. These are exactly the two item-field differences from `research/plan-spec.json`; shared-plan synchronization is outside this dispatch's editing scope. DG-18 prose at `research/plan-differential-geometry-track.md:4753` must accommodate the necessary local partition argument. Its volume discussion at line 4954 also still postpones measurable volume although the current scaffold already includes the Radon extension. Owner should reconcile these prose descriptions with the current contracts.

### Final mechanical results

| Check | Actual result |
| --- | --- |
| `manifest-deps` on batches 8 and 9 | Pass: 153 items, 0 normalized, 0 errors. |
| `content-policy --manifest-only` on both | Pass: 153 items, 0 errors/warnings. |
| `coverage-checklist --require-destination` on both | Pass: 3 pages, 215 harvested results, 0 errors/warnings. |
| `source-fetch-check --coverage` on both | Pass: 8/8 fetch-verified and resolved; 0 documented drops. Existing receipts checked, not a fresh URL sweep. |
| `source-backing --require-verified` with run liveness | Pass: all 83 authored results across 2 files backed. |
| `validate-plan research/plan-spec.json` | Exit 0: no cycles, forward references, B-page dependencies or unresolved IDs among 975 populated pages; 644 future pages have no item lists. Existing redundant-prerequisite warnings remain. This checks structure, not equality with manifests. |
| Scope refresh/check, group d | Refresh: 11 declines, 0 pending; check: 11 current, 0 errors. All current declines have `stands` evidence; no owner ruling invented. |
| Frontier ledger refresh `--require-reviewed` | Exit 0. Owned batch-8 and batch-9 consumer inputs are present and empty, consistent with both declared and examined implicit dependencies. No same-group cross-batch edge or other frontier supplier was found; no owned orphan/unreviewed input. |
| `step3-decisions check --phase final` | Exit 1. Group d has exactly the seven open items listed above; 146 current closed receipts. Whole-run snapshot: 24 pairs, 735 items, 611 accepted, open. Other groups' work is not adjudicated here. |
| `depcheck --quiet` | Exit 1: four published-audit-metadata errors, listed below, plus existing warnings. No published metadata edited. |

The four `published-unaudited` errors are `cex-separately-continuous-not-jointly-continuous`, `def-metric-continuity`, `lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group`, and `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams`. Each lacks both `verification.audited` and `verification.verified`. These are global published metadata findings, not evidence of a new mathematical defect in these items. The metric-continuity definition is an ancestor of owned work; the latest exact mathematical hashes remain current. Their resolution belongs to the owner/current published repair work.

Detailed entries below record claims, conventions, source locators, examined dependency IDs (including implicit suppliers), decisions and unresolved obligations. Complete relevant arguments were read where unfamiliar; source-backing/fetch checks are not substitutes for proof examination. Local and owner repairs received mechanical checks without an additional mathematical review. No accepted contract, shared plan/prose or published proof was edited.

## Item decisions

### def-compactly-generated-conventions-for-based-homotopy — accept

Claim/conventions: Define WH by closed images of compact Hausdorff test maps, kification by their inverse-image closed-set tests, CG by kX=X, and CGWH by both properties. Define k-products and the mapping space C(Y,Z)=kC_0(Y,Z), where C_0 has subbasis {f:f(u(K))⊆O} for compact Hausdorff K, continuous u:K→Y, and open O⊆Z; for WH Y this is the compact-Hausdorff-subspace compact-open convention of May and Strickland. Based mapping spaces use kified subspace topology. Do not identify compactness alone with Hausdorffness. Cubical homotopy groups retain their definition for arbitrary spaces; categorical constructions use CGWH.

Examined dependencies: def-homotopy-relative-and-path-homotopy, def-compact-space, def-hausdorff-space, thm-quotient-universal-property. Read their current published bodies; only the defining clauses and quotient factorization are required. Source: https://www.math.ksu.edu/~dav/diffeos/StricklandCGHWSpaces.pdf, Definitions 1.1–1.2, Lemma 1.4, pp.1–2. The closed compact-test image argument identifies the stated compact-open subbasis. Definitions are consistent and choice-free. Engine receipt recorded at confidence 1; no edits. Next: kification helper.

### lem-kification-compact-tests-and-finite-constructions — accept

Claim/conventions: Kification preserves exactly the maps from compact Hausdorff spaces, is idempotent, and has the CG-source mapping property. Finite k-products are categorical products; ordinary quotients, finite disjoint unions and closed subspaces of CG spaces are CG. Products of closed inclusions are closed inclusions. Finite clopen decompositions commute with kification. For CG X, the ordinary cylinder X×I is CG, and kification preserves cubical maps and their relative homotopies.

Examined dependency IDs: def-compactly-generated-conventions-for-based-homotopy, thm-product-universal-property, thm-quotient-universal-property, thm-finite-products-of-compact-spaces, thm-compactness-under-continuous-maps, thm-closed-subspace-of-a-compact-space-is-compact, thm-compact-subset-of-a-hausdorff-space-is-closed, cor-heine-borel-in-the-product-topology.

Checked the complete compact-test, closed-subspace, finite-product and cylinder argument against all eight direct interfaces. The cylinder uses closed projection from compact Hausdorff K times a closed interval J; finite clopen splitting and the CG-source property establish the asserted embeddings. Product supplier clauses 1–2 are choice-free; arbitrary-index surjectivity is not used. Strickland pp.2–3 Lemma 1.8–Proposition 2.6 read completely. No repair needed.

Receipt: a34762e09d9ea5d51d3d7e8e3848ea7d98919277481e24aa9380f4a91f5c431e. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-compact-test-exponential-law-and-products-of-quotients — accept

Claim/conventions: For all CG spaces X,Y,Z, with compact-Hausdorff-test mapping topology and k-products, currying gives natural bijections of continuous maps X×_k Y→Z and X→C(Y,Z), and natural homeomorphisms C(X×_k Y,Z)≅C(X,C(Y,Z)). Products of quotient maps of CG spaces are quotient maps for k-products, using the fibrewise relation (x,y)~(x′,y′) iff q(x)=q(x′) and y=y′. No weak Hausdorff assumption is required.

Examined dependency IDs: lem-kification-compact-tests-and-finite-constructions, def-compactly-generated-conventions-for-based-homotopy, thm-a-compact-hausdorff-space-is-regular-and-normal, thm-closed-subspace-of-a-compact-space-is-compact, lem-tube-lemma-for-a-compact-factor, thm-quotient-universal-property.

Read full strategy, all six prerequisite interfaces and Strickland Propositions 2.11–2.12 pp.4–5. Compact Hausdorff regularity supplies L, tube lemma establishes transpose continuity, and double evaluation establishes the mapping-space homeomorphism. The quotient proof forms an ordinary CG quotient P and curries into C(Y,P) without assuming WH; its fibre relation is correct. Finite products and finite neighborhood choices require no AC.

Receipt: 16115c8b3112358ad0ceeda8a80a9256000d7a4b69e53a814a6a69a98d40c532. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-weak-hausdorff-diagonals-and-closed-quotients — accept

Claim/conventions: For CG X, weak Hausdorffness is equivalent to the diagonal being closed in X×_k X. For an ordinary quotient q:X→Q of a CG space, Q is CGWH exactly when its fibre equivalence relation is closed in X×_k X. Compact Hausdorff test images in a WH space are closed compact Hausdorff subspaces. WH passes to subspaces and kification; finite k-products, finite coproducts, closed subspaces and compact-test mapping spaces with WH target are CGWH. Based mapping and loop subspaces are CGWH when the target is CGWH.

Examined dependency IDs: lem-kification-compact-tests-and-finite-constructions, lem-compact-test-exponential-law-and-products-of-quotients, def-compactly-generated-conventions-for-based-homotopy, thm-a-compact-hausdorff-space-is-regular-and-normal, thm-compactness-under-continuous-maps, thm-finite-products-of-compact-spaces, thm-closed-subspace-of-a-compact-space-is-compact, thm-compact-subset-of-a-hausdorff-space-is-closed.

All eight prerequisite clauses checked. The compact image is Hausdorff by separation of closed fibres; both diagonal implications use compact tests and closed projections. Quotient WH follows from the already established q times q quotient property, without assuming the conclusion. Evaluation diagonals and closed singleton conditions prove the mapping and loop claims. Read Strickland Lemma 1.4, Proposition 2.14 and Corollary 2.21, Proposition 2.24 in full (pp.1–2,6–7). No extra axiom or repair.

Receipt: 413f064d07ea9df0af3cb42a8ab0eda4ade713e6c51b3182f40fd87c7a60962e. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-compact-generation-preserves-the-cylinder-and-closed-pushouts — accept

Claim/conventions: Kification preserves maps from compact Hausdorff spaces and cubical relative homotopy classes. For CGWH X its ordinary product with I is CGWH. If A→X is a closed inclusion of CGWH spaces and f:A→Y is continuous with Y CGWH, the ordinary pushout X∪_A Y is CGWH, Y embeds as a closed subspace, and the square is a pullback. This supplies the cylinder, reduced-track, cone and suspension quotients used here.

Examined dependency IDs: def-compactly-generated-conventions-for-based-homotopy, lem-kification-compact-tests-and-finite-constructions, lem-compact-test-exponential-law-and-products-of-quotients, lem-weak-hausdorff-diagonals-and-closed-quotients, thm-quotient-universal-property.

Checked the four clopen components of the pushout equivalence relation: the two graphs and fibre equality relation are closed by earlier diagonal and closed-product clauses. Quotient finality proves both the closed Y embedding and the disjoint closed D embedding; subspace factorization proves the pullback. All five declared suppliers are already examined. Cylinder and basepoint-track applications have closed attaching sets. The complete local argument establishes the required claim without a general colimit assertion.

Receipt: 092ca65bff6221c4641aa8543292cf55335b504debe967933aa89ff546dba983. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-interval-exponential-law-and-quotient-homotopies — accept

Claim/conventions: For the compact interval I and any target Y, compact-open currying identifies continuous X×I→Y with continuous X→C(I,Y). This descends to based and kified conventions. Products of quotient maps with I are quotient; quotients and cylinder homotopies used here are consequently compatible.

Examined dependency IDs: def-compactly-generated-conventions-for-based-homotopy, thm-product-universal-property, thm-quotient-universal-property, lem-continuity-is-local-and-pastes, lem-compact-generation-preserves-the-cylinder-and-closed-pushouts, lem-compact-test-exponential-law-and-products-of-quotients, lem-weak-hausdorff-diagonals-and-closed-quotients, lem-tube-lemma-for-a-compact-factor.

Checked arbitrary-space proof with ordinary compact-open topology, followed by the explicitly separate CG-source kification clause. Evaluation uses compact interval neighborhoods, transpose continuity uses the tube lemma, and the Sierpinski characteristic-map test proves quotient finality for arbitrary targets. Read the finite-closed-pasting supplier in full; other seven interfaces already examined. Based endpoint restrictions and parameterized homotopies preserve the required tracks. No choice or repair.

Receipt: cad9edae3eaa0fdca1c331bdabff6e376257387621b2ee79853551163eea437c. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-higher-homotopy-group-by-based-cubes — accept

Claim/conventions: For n≥1 use maps (I^n,∂I^n)→(X,x0) modulo homotopies fixed on the boundary; π0 is separately the pointed set of path components. The product traverses the first representative first in coordinate 1.

Examined dependency IDs: def-homotopy-relative-and-path-homotopy, cor-homotopy-relative-and-path-homotopy-are-equivalence-relations, def-based-loops-and-fundamental-group.

Read the relative homotopy equivalence-relation and fundamental-loop definitions, including the first-traversed-first convention. Boundary-fixed maps give a valid quotient set for n>=1; pi0 is a pointed set. Hatcher p.340 definitions match. No group law is presupposed beyond the following construction.

Receipt: ea02bf9bb5642aeec4450152a9ea2927ebf6d9ac49ff2cceae848f384cc2dfab. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes — accept

Claim/conventions: Pasting along coordinate 1 defines a representative-independent product.

Examined dependency IDs: def-higher-homotopy-group-by-based-cubes, lem-continuity-is-local-and-pastes, thm-product-universal-property.

The two closed half-cubes cover the domain and agree constantly on their common face; the same construction on the extra homotopy parameter proves representative independence. Checked all three supplier clauses, including finite closed pasting. Hatcher p.340; no choice or hidden extension lemma.

Receipt: 36e4daf66eda13aea2d697ba69b58cbb27fb74e3fab82e789656138ea7318b1f. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one — accept

Claim/conventions: The cubical operation makes πn a group for n≥1 and an abelian group for n≥2.

Examined dependency IDs: lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes, thm-fundamental-group-laws, def-group.

Read the entire published loop-laws proof: its affine reparametrizations and inverse contraction are jointly continuous with untouched cube coordinates. Both coordinate operations share the constant unit and satisfy interchange by four closed rectangles, giving equality and commutativity for n>=2. Group definition checked. Hatcher p.340 supports the degree range; no choice.

Receipt: 556ac728c442d9618e0b15a76c947bd9b572077a04e14425861051a14007b090. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-cubical-and-spherical-models-of-higher-homotopy-agree — accept

Claim/conventions: For n≥1 an oriented identification I^n/∂I^n≅S^n gives πn(X,x0)≅[S^n,X]*; the pinch operation agrees with concatenation.

Examined dependency IDs: def-higher-homotopy-group-by-based-cubes, lem-interval-exponential-law-and-quotient-homotopies, thm-quotient-universal-property.

The radial cube-to-ball map and stereographic compactification identify the boundary quotient with the based sphere in all n>=1. Quotient finality applies to representatives and quotient times I to relative homotopies; the first-half/second-half quotient is the oriented pinch. All three dependencies examined; no degree-classification premise. Hatcher pp.340–341.

Receipt: 472deda806e97e8d6d1b49d50648cfd1a9bafb2ba38356adb685e41198bbbacd. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant — accept

Claim/conventions: Based maps induce homomorphisms, preserve identities and composition, and based homotopies induce equal maps; based homotopy equivalences induce isomorphisms.

Examined dependency IDs: thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one, thm-composition-respects-homotopy.

Read both composition-respects-homotopy clauses and their complete proofs. Pre/postcomposition preserves the boundary condition, commutes literally with concatenation and sends inverse based homotopies to inverse homomorphisms. The group supplier is accepted. No unbased invariance is claimed; no choice.

Receipt: 4e8d0243d8765b35caa108227a385660cd8d4c5ea310c87001cca2a1fdbd800d. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-relative-homotopy-group — accept

Claim/conventions: Let F=I^(n−1)×{0} and J be the union of the other faces. Relative classes are maps (I^n,∂I^n,J)→(X,A,x0), with homotopies preserving that triple. For n=1 these are paths from a variable point of A to x0; π1(X,A,x0) is only a pointed set, and relative π0 is not defined.

Examined dependency IDs: def-higher-homotopy-group-by-based-cubes, def-homotopy-relative-and-path-homotopy.

The distinguished face F and other-face union J define a consistent based triple for n>=1. Constant/reversed/concatenated homotopy parameters preserve the triple, so the quotient relation is valid. For n=1 only the terminal endpoint is fixed and no group operation is asserted. Both defining prerequisites examined; no relative pi0 or choice.

Receipt: 8a1390f9dab3040f404c94dee91a396e0de8e6ca40934c382ff8cffe8b9ab8bc. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-relative-cubical-disk-model-and-compression — accept

Claim/conventions: The quotient of the cubical triple by J is the based disk-boundary triple. A disk representative is relatively null exactly when it deforms into A while its whole boundary stays fixed.

Examined dependency IDs: def-relative-homotopy-group, lem-interval-exponential-law-and-quotient-homotopies, thm-quotient-universal-property, lem-continuity-is-local-and-pastes.

Read Hatcher p.343 complete compression criterion and all four prerequisite clauses. The promised disk sweep is realizable explicitly: endpoint map sends x with r<=1/2 to (2x,1), and r>=1/2 to (x/r,2-2r); interpolate linearly from (x,0). It is continuous, fixes the rim and lands at the top-and-side disk. Composing a nullhomotopy gives boundary-fixed compression; contraction of the source disk to its distinguished boundary point proves the reverse within A. No HEP or choice premise is hidden.

Receipt: 326d20b9d2d14f900af76ff61f3dc054b9e47e420cb1d4a7455d248777b51a82. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees — accept

Claim/conventions: Relative πn is a group for n≥2 and abelian for n≥3. Restricting to F defines ∂:πn(X,A)→π(n−1)(A); it is a homomorphism for n≥2. Maps and homotopies of triples act functorially.

Examined dependency IDs: def-relative-homotopy-group, lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes, thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one.

The last coordinate remains distinguished. First-coordinate concatenation and its group-law homotopies preserve F and J for n>=2; interchange has two available coordinates only for n>=3. Restriction to F respects products, and for n=1 gives the component of the variable endpoint. Triple maps/homotopies preserve every condition. Three accepted supplier interfaces suffice; Hatcher pp.343–344.

Receipt: 8a1c78c3b7409ab087cf1e8a5f7b0a25e9b00096f603e8bca7aecf84e7d6e7bc. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-long-exact-sequence-of-relative-homotopy-groups — accept

Claim/conventions: For every based pair the natural relative homotopy sequence is exact through π1(X,A)→π0(A)→π0(X). Exactness means image equals inverse image of the distinguished point. No terminal surjection onto all components of X is asserted.

Examined dependency IDs: lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees, lem-relative-cubical-disk-model-and-compression, prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant, def-path-connected.

Checked each exactness location separately using accepted compression, face attachment, and a nullhomotopy as the next relative cube. At relative pi1 an A-path closes the variable endpoint; at pi0(A) exactly the components meeting the base component in X occur. The current path-component definition proves reversal/concatenation and the equivalence relation. Hatcher pp.343–345 complete pair-specialized argument read. Naturality is literal restriction; no false terminal surjectivity or cofiber covariant LES.

Receipt: 669391acccc74720916b385b5006bca9fe9d98481bed3a9d7b7ef3a6df4d5ba6. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-cofibration-and-homotopy-extension-property — accept

Claim/conventions: Define unbased HEP for a map i:A→X using all targets and all compatible initial maps and homotopies. Define based HEP separately; well-pointed means the basepoint inclusion is an unbased cofibration.

Examined dependency IDs: def-homotopy-relative-and-path-homotopy.

HEP is defined for general maps against all compatible initial maps and homotopies; the based version restricts maps and homotopies separately. Well-pointed uses unbased HEP for the point inclusion. The published relative-homotopy definition gives the required fixed-point meaning. No embedding property is silently imposed or claimed by this definition.

Receipt: 8450a07ac83dd366c48c0ec3f83a2d941b85be5b99f9b1f1c7f0ca127986bd0e. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip — accept

Claim/conventions: For a general map i, HEP is equivalent to a retraction of the canonical map X∪i(A×I)→X×I. For a closed inclusion it is equivalent to a retraction onto X×{0}∪A×I. In CGWH, either unbased or based HEP forces the map to be a closed embedding; the based version uses the reduced strip and reduced cylinder.

Examined dependency IDs: def-cofibration-and-homotopy-extension-property, lem-interval-exponential-law-and-quotient-homotopies, thm-quotient-universal-property, lem-compact-generation-preserves-the-cylinder-and-closed-pushouts, lem-weak-hausdorff-diagonals-and-closed-quotients.

Universal target R gives sc=id, and composition with its pushout map gives every HEP extension. In CGWH the image of the split monomorphism is the closed equalizer of cs and identity. Closed endpoint embeddings recover i; in the based construction saturation adds only the closed basepoint track. Checked all five local/published interfaces and May Chapter 6 section 2 p.44. The proof does not conflate based and unbased HEP.

Receipt: ed97d588e6a947fafbea159745969acf9a0caea8ae37972262cbc2f52d61430b. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-mapping-cylinder-and-mapping-cone — accept

Claim/conventions: For f:X→Y put Mf=(Y disjoint-union X×I)/((x,0)~f(x)), j(x)=[x,1], r([x,s])=f(x), r(y)=y, and unreduced Cf=Mf/j(X). Use distinct notation for the reduced version later.

Examined dependency IDs: thm-quotient-universal-property, def-homotopy-relative-and-path-homotopy, lem-compact-generation-preserves-the-cylinder-and-closed-pushouts.

The attaching equivalence makes r well-defined since r(x,0)=f(x); quotient finality proves continuity of r and the endpoint map. The earlier closed-pushout lemma supplies CGWH status and the closed free-end copy needed for the second quotient, an implicit supplier recorded here. Cone is explicitly unreduced. No choice.

Receipt: 437bad73022e58877b28e5fa55e1a2c8707dca062943e5210aa8e42298173f95. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-mapping-cylinder-factorization — accept

Claim/conventions: The factorization f=rj has j a cofibration and Y a strong deformation retract of Mf; it is natural for strictly commuting squares.

Examined dependency IDs: def-mapping-cylinder-and-mapping-cone, prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip, lem-interval-exponential-law-and-quotient-homotopies, lem-continuity-is-local-and-pastes, def-retraction-and-deformation-retract, lem-compact-generation-preserves-the-cylinder-and-closed-pushouts.

Checked the explicit square retraction: its denominator is positive, and the maximum forces either t-image=0 or s-image=0/1 while fixing those three sides. Pasted boundary data therefore extend for every target and descend across the attaching quotient times I. Height contraction fixes Y pointwise, matching the published strong-retract convention. All six interfaces examined; naturality is literal in the formulas. No NDR existence or choice is assumed.

Receipt: fd62dc0429ae979574d2a5510a1ad7fca5b4be3e58b4b0c80c0cc172cca81750. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-pushouts-and-products-preserve-the-cofibrations-used-here — accept

Claim/conventions: In the stated CGWH category, pushouts preserve cofibrations and k-products with arbitrary CGWH spaces preserve HEP. The product pair (X×Y,X×B union A×Y) of two closed cofibration pairs is a cofibration pair. This includes the finite endpoint, disk-cylinder and well-pointed reduced-cylinder boundary constructions used here.

Examined dependency IDs: prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip, lem-interval-exponential-law-and-quotient-homotopies, thm-quotient-universal-property, lem-compact-test-exponential-law-and-products-of-quotients, lem-weak-hausdorff-diagonals-and-closed-quotients, lem-compact-generation-preserves-the-cylinder-and-closed-pushouts, thm-compactness-under-continuous-maps, lem-tube-lemma-for-a-compact-factor.

Read May pp.43–46 full pushout and NDR-product argument and all eight declared supplier clauses. Independently checked u=max(t-r2), its exact zero set, compact-time continuity, both ratio branches of the product deformation and the w=0 limit. The final strip formula is continuous at t=w and at w=t=0 by uniform tube control, fixes its strip, and has positive height only over the subspace. Disk formula includes n=0. Selection is finite; no AC, forward NDR theorem or generic radial formula is assumed.

Receipt: 41d0fd4a2a11b42030ac0bc7b1c67f15024176c330951033710850bd9f6bcbba. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-reduced-cone-suspension-and-cofiber-sequence — accept

Claim/conventions: For well-pointed based spaces define CX=X×I/(X×{1} union {x0}×I), ΣX=CX/X, and reduced Cf=Y∪f CX. Define f,i,q and the iterated cofiber sequence with next map −Σf, where minus reverses the suspension parameter. Reduced cylinders also collapse the basepoint track.

Examined dependency IDs: def-compactly-generated-conventions-for-based-homotopy, def-cofibration-and-homotopy-extension-property, def-mapping-cylinder-and-mapping-cone, thm-quotient-universal-property, lem-compact-generation-preserves-the-cylinder-and-closed-pushouts.

Closed endpoint and basepoint-track quotients exist in CGWH by the already examined closed-pushout lemma (implicit supplier recorded). The free-end embedding identifies X in CX. Basepoint and height-one are collapsed, and the sign convention explicitly reverses the suspension parameter; the rotation theorem follows later and is not presumed as a proof. Four declared interfaces checked.

Receipt: 341dacca18151404d4abbbe0f19eda4d1469f68cc698a554181e2e8ab10979d4. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient — accept

Claim/conventions: For a based cofibration A→X in the stated category, the canonical map Ci→X/A is a based homotopy equivalence.

Examined dependency IDs: def-reduced-cone-suspension-and-cofiber-sequence, prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip, lem-pushouts-and-products-preserve-the-cofibrations-used-here.

Read May p.60 complete quotient-cofiber lemma. The strip retraction at time one kills A after the terminal collapse; quotienting its homotopy proves one composite, and max(s,t) agrees with the strip at s=0 and fixes every collapsed track for the other. Three supplier interfaces examined; quotient-times-I is inherited through the strip supplier. No extra homotopy-equivalence theorem is needed.

Receipt: b1cb811158845f89929d394da9d36463ee1d46e8632b19a1444165f35d5a8c43. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-iterated-cofibers-rotate-with-suspension-reflection — accept

Claim/conventions: The cofiber of Y→Cf is based homotopy equivalent to ΣX; the next map agrees up to based homotopy with −Σf. Suspension commutes with cone formation with the coordinate interchange explicitly accounted for.

Examined dependency IDs: lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient, def-reduced-cone-suspension-and-cofiber-sequence, lem-pushouts-and-products-preserve-the-cofibrations-used-here, lem-interval-exponential-law-and-quotient-homotopies, thm-mapping-cylinder-factorization.

Read May p.60 full rotation lemma and checked both formulas: at s=0 they agree, and cone tips map to collapsed suspension endpoints. CY inclusion is a pushout of X into CX; the cone-boundary HEP clause of mapping-cylinder factorization supplies this implicit premise, recorded here. Collapse then uses the accepted quotient-cofiber lemma. Coordinate interchange is retained rather than discarded, so no unproved sign identification is required. Four direct interfaces examined.

Receipt: 6598f2dfb82d82b6f20342c75de2c2bfeb83e9113f6bb47f044e5097b929e618. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-suspension-homotopy-classes-have-natural-group-structures — accept

Claim/conventions: For based X,Z the set [ΣX,Z]* is a group under pinching the suspension parameter; [Σ²X,Z]* is abelian. Precomposition by suspended maps is a homomorphism.

Examined dependency IDs: def-reduced-cone-suspension-and-cofiber-sequence, lem-interval-exponential-law-and-quotient-homotopies, thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one.

The explicit cubical group-law homotopies retain X as a parameter and fix both suspension ends and the basepoint track, hence descend by quotient-times-I. With two suspension parameters interchange proves commutativity. Suspended precomposition preserves parameter pinching literally. All three supplier clauses examined; the defined reduced convention controls the scope.

Receipt: bcb1aac79ca05217e20eb9a3cd86cb55457af8e1bfb954e382b0321635878a0c. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-puppe-sequence-is-exact-after-mapping-into-a-based-space — accept

Claim/conventions: For a based map f of well-pointed spaces, applying [−,Z]* to its Puppe sequence is exact as pointed sets. The suspended portion has group structures and from double suspensions these are abelian; specify which arrows are group homomorphisms.

Examined dependency IDs: def-reduced-cone-suspension-and-cofiber-sequence, lem-iterated-cofibers-rotate-with-suspension-reflection, lem-suspension-homotopy-classes-have-natural-group-structures, thm-quotient-universal-property.

Read May pp.59–60 complete extension-and-rotation proof and four prerequisite contracts. A nullhomotopy of gf is precisely a map on the cone agreeing with g at its base; repeated rotation proves pointed-set exactness. Group qualification must follow the commissioned instruction to specify arrows: ordinary suspended maps induce homomorphisms; precomposition with parameter reflection is inversion, hence generally an antihomomorphism on singly suspended groups, and a homomorphism on abelian doubly suspended groups (or after alternating opposite-group conventions). The current claim asserts group structures, not that every reflected arrow is an ordinary homomorphism. No change or weakened conclusion.

Receipt: 63b128be4171f61e736c399d7ca576a3f9e44c7b3fa1ff46c39cd3474d6f1c7a. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-loop-suspension-adjunction-on-based-homotopy-classes — accept

Claim/conventions: Naturally [ΣX,Y]*≅[X,ΩY]* with ΩY the kified compact-open based loop space.

Examined dependency IDs: def-reduced-cone-suspension-and-cofiber-sequence, lem-interval-exponential-law-and-quotient-homotopies.

Endpoint and basepoint constancy are exactly the suspension quotient conditions and exactly the based-loop conditions under currying. The extra homotopy parameter is legitimate by the accepted interval law; the two constructions are inverse and commute with pre/postcomposition. Both prerequisites checked; May pp.57–58 read. Kified mapping-space convention is retained.

Receipt: bccc791eb305681bdf9e6d081bf8d21881295da9b11fbf89191da336e374ba1c. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### cor-higher-homotopy-groups-are-iterated-loop-components — accept

Claim/conventions: πn(X,x0)≅π0(Ω^nX) for n≥1, with the operation on components induced by coordinatewise loop concatenation.

Examined dependency IDs: prop-loop-suspension-adjunction-on-based-homotopy-classes, prop-cubical-and-spherical-models-of-higher-homotopy-agree, thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one.

Finite iteration of the already proved interval adjunction identifies cubes and their boundary-fixed homotopies with loop-space points and paths. First-coordinate concatenation gives precisely the group operation, including n=1; interchange handles other coordinates above degree one. Three supplier interfaces checked. No covering-space or choice result is used.

Receipt: 84b5ec19f33034fb510ad624c2d172cc560ff6b3b6844b87027ba1043e2a1523. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-higher-homotopy-basepoint-transport-and-moving-homotopies — accept

Claim/conventions: A path γ from x0 to x1 induces transport βγ:πn(X,x1)→πn(X,x0) by a radial shell; inverse and concatenation laws hold. For H:f≃g with basepoint track γ, f*=βγ g*. In degree one βγ([a])=[γ*a*reverse(γ)].

Examined dependency IDs: def-higher-homotopy-group-by-based-cubes, thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one, prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant, lem-continuity-is-local-and-pastes.

Read Hatcher pp.341–342 full shell construction, homomorphism argument and inverse/composition laws. Shell reparametrization with a progressively longer basepoint path gives f*=beta_gamma g*; in degree one the oriented traversal is gamma then a then reversed gamma, matching the existing product convention. Four required interfaces checked; the argument chooses only a supplied path and no global basepoint paths.

Receipt: a48aa1e158ec1be9b8aa35bd7715fad27e7998580e6da3bbfd24fa88594cbffc. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-n-connected-space-and-n-connected-map — escalate

Claim/conventions: A (−1)-connected space is nonempty; for n≥0 require path connectedness and vanishing πi for 1≤i≤n at every basepoint. A map is 0-connected when surjective on path components; for n≥1 require this and vanishing πi(Mf,X,x) for every x∈X and 1≤i≤n. A (−1)-connected map imposes no condition. Do not omit target components not meeting the source.

Examined dependency IDs: thm-long-exact-sequence-of-relative-homotopy-groups, thm-mapping-cylinder-factorization, prop-higher-homotopy-basepoint-transport-and-moving-homotopies, def-path-connected.

Empty-space convention is unresolved: published def-path-connected explicitly declares the empty space path-connected. The n>=0 clause plus vanishing at every basepoint is therefore vacuous on the empty space, while the same contract declares (-1)-connected to mean nonempty. Hatcher p.346 was recovered and read; it starts with a space WITH basepoint, which rules out this case, unlike the unbased every-basepoint wording here. Owner must synchronize an explicit nonempty requirement for n>=0 (or explicitly authorize the unusual nonmonotone convention) in contract, shared plan and AT10 prose. All four dependencies examined; no other connectivity clause is rejected. No retry by this reviewer.

Receipt: 5f1cea2a5ee627e87344673acb755ce482cd523d4fb53cd229cea4552b0df43f. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-finite-cw-basepoints-have-explicit-homotopy-extension — accept

Claim/conventions: The inclusion of a vertex in a finite CW complex is a cofibration.

Examined dependency IDs: def-cofibration-and-homotopy-extension-property, lem-pushouts-and-products-preserve-the-cofibrations-used-here, def-cell-attachment-by-a-characteristic-map.

Read the actual cell-attachment definition, including n=0 as adjoining a disjoint point. Extend the supplied vertex homotopy over the finite zero-skeleton using constants on other vertices, then finitely many attached disks using the explicit global disk-strip retraction already checked. Quotient times I glues extensions. The three suppliers suffice, without the general published CW-HEP result or infinite cell choices.

Receipt: 2c874c94805b41a36c08bbc6d889a50531362abb5a6002d6f1cc22c1116d002f. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-lower-dimensional-sphere-maps-are-based-nullhomotopic — accept

Claim/conventions: For integers 0<=k<r and r>=1, every continuous based map (S^k,a)->(S^r,b) is homotopic to the constant b map through maps fixing a. For k=0 this states that every point of S^r can be joined to b. No arbitrary choice assumption is needed.

Examined dependency IDs: thm-finite-simplicial-approximation-for-maps-of-pairs, def-euclidean-spheres-and-closed-balls, def-homotopy-relative-and-path-homotopy, lem-straight-line-homotopies-are-continuous, thm-barycentric-subdivision-realizes-homeomorphically, lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero, lem-the-open-star-criterion-produces-a-simplicial-map.

Checked cross-polytope and Householder formulas, singleton-pair approximation, omitted top-simplex barycenter and both stereographic inverse identities. The contraction fixes b and covers k=0. Read the complete finite-approximation proof and its actual star/common-carrier, mesh and barycentric-homeomorphism arguments; only finite source and finite target clauses are used. The straight-line supplier works for arbitrary topological domains. No positive-dimensional relative fixing or infinite choice is inferred.

Receipt: a44d1f5a27e5cbc483e04c8f1a2b28db881190a21d0494880f557cc2e03e6f95. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-based-sphere-maps-have-finite-affine-bubble-normal-forms — accept

Claim/conventions: For r>=1, represent the based sphere by R^r union {infinity} and a based source map by (I^r,boundary I^r). Every such map is based homotopic to a map constant at infinity off finitely many disjoint closed parallelepipeds in the interior, and on each parallelepiped has the form x -> Q_R(A_j(x-c_j)), with A_j invertible and Q_R(v)=v/(1-||v||_infinity/R) for ||v||_infinity<R, infinity otherwise. Empty finite families are allowed. No infinite choice is used.

Examined dependency IDs: thm-finite-simplicial-approximation-for-maps-of-pairs, prop-cubical-and-spherical-models-of-higher-homotopy-agree, thm-quotient-universal-property, lem-continuity-is-local-and-pastes, def-euclidean-spheres-and-closed-balls.

Checked finite pair approximation (published full proof), quotient and pasting clauses and explicit double-cube chart. Inverse images of the strictly interior target cube lie strictly inside disjoint full-dimensional simplices; boundary simplices map to the infinity vertex. Translation and radial collapse are jointly continuous at infinity and the cutoff by the uniform norm lower bound. Only finite selections occur. Read Hatcher ATch2.pdf pp136–137 finite local-degree construction; the normal-form homotopy is supplied completely by the local formulas.

Receipt: 1fc3d397d05e6693c471db292d19b878088dca70bf76c1320e25b209834c598b. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-finite-affine-bubbles-represent-signed-cubical-sums — accept

Claim/conventions: In the preceding normal form, the based homotopy class is the sum of one identity generator for each positive-determinant A_j and one inverse generator for each negative-determinant A_j. The sum is the cubical first-coordinate group operation, including r=1. All homotopies fix the boundary. No infinite choice is used.

Examined dependency IDs: lem-based-sphere-maps-have-finite-affine-bubble-normal-forms, thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one, lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes, prop-cubical-and-spherical-models-of-higher-homotopy-agree, thm-gram-schmidt-orthonormalisation, lem-continuity-is-local-and-pastes.

Checked the full published finite Gram–Schmidt proof and cubical group/reparametrization suppliers. Positive triangular interpolation and finite plane rotations connect each invertible matrix to identity or the first reflection. Compact parameter bounds for inverse matrices permit private supports throughout; finite perturbations separate first coordinates even for r=1. Positive coordinate rescaling expands each support to its slab with boundary sent to infinity, giving precisely the chosen quotient generator or its cubical inverse. No geometric cancellation theorem or infinite choice is used. Hatcher ATch2.pdf Example2.31 pp136–137 read; the required homotopies are the local explicit formulas.

Receipt: 3a33c7856aacf068e1b43dd9438d77ff7a655657c8793f214f378d1c481e3949. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-based-sphere-maps-are-classified-by-geometric-degree — owner-repaired; bypass mathematical readjudication

Current object hash 1724c4cf1165d688a75d9a95c19148a458aa6c0760b3a47c1fe64655e2e5bf48 matches the after-object in research/phase-2-catchup-24-owner-step3-at-astra.md. That report explicitly is not an engine acceptance. Per dispatch, send this unchanged owner repair directly to the final mechanical gate. No new reviewer verdict or --owner invocation. The current engine receipt, if absent, must be reconciled by the owner. Declared dependencies are recorded in the current manifest and the owner report; this is a hash/procedure check, not a fresh claim of dependency proof review. Next: B-page product example.

### ex-higher-homotopy-groups-of-a-product — accept

Claim/conventions: For all n≥1, πn(X×Y,(x0,y0))≅πn(X,x0)×πn(Y,y0); also the pointed component sets correspond.

Examined dependency IDs: prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant, thm-product-universal-property.

Coordinate projection and pairing give mutually inverse maps on representatives and homotopies; cubical concatenation is coordinatewise, including nonabelian n=1, and paths give the component-set clause. Published product universal property only its binary continuous-map clause is used. No connectedness or infinite choice premise.

Receipt: 0926dd5c2e1830e25fe0cfe18bdb1f44f9ba5936356a5cda4f7afdbf79fbaa90. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-relative-homotopy-of-a-disk-boundary-pair — accept

Claim/conventions: For m≥2, πk(D^m,S^(m−1),x0)=0 for 1≤k<m and πm(D^m,S^(m−1),x0)≅Z, generated by the oriented characteristic disk. For m=1 the relative π1 is a two-element pointed set, not Z.

Examined dependency IDs: thm-long-exact-sequence-of-relative-homotopy-groups, prop-cubical-and-spherical-models-of-higher-homotopy-agree, thm-based-sphere-maps-are-classified-by-geometric-degree, thm-lower-dimensional-sphere-maps-are-based-nullhomotopic, lem-straight-line-homotopies-are-continuous.

Disk contraction fixes the supplied boundary basepoint, so pair LES identifies relative pi_k with boundary pi_(k-1) for k>=2; the low pointed-set tail and path connectivity handle k=1. Checked lower-sphere result including dimension zero. The degree classification prerequisite is the unchanged owner-repaired object, routed directly to final gate without readjudication; its stated isomorphism supplies k=m and the characteristic-disk sign. For m=1 endpoint components distinguish exactly two path classes and affine interpolation contracts each class. Does not use the escalated general connectivity definition.

Receipt: f15e7a4759a977346a2df4b5c5dfa38fa9276033a873f61ceefaf4de1bfd8074. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-mapping-cone-of-a-degree-d-circle-map — accept

Claim/conventions: For integer d and the based map [t]↦[dt] on R/Z, the mapping cone has H0=Z, H1=Z/dZ, H2=ker(d:Z→Z), and no higher homology. Its π1 is Z/dZ; d=0 gives π1=Z and H2=Z, and d=±1 gives trivial π1 and reduced homology.

Examined dependency IDs: def-mapping-cylinder-and-mapping-cone, def-degree-of-a-self-map-of-an-oriented-sphere, def-local-degree-at-an-isolated-preimage, thm-global-sphere-degree-is-the-sum-of-local-degrees, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, thm-cellular-boundary-is-the-incidence-degree-matrix, thm-cellular-homology-computes-singular-homology, thm-seifert-van-kampen, thm-fundamental-group-of-the-circle, thm-singular-homology-satisfies-homotopy-exactness-and-excision, prop-relative-cw-inclusions-are-cofibrations.

Read degree/local-degree/global-sum, reflection, cellular incidence/comparison, van Kampen and circle-group suppliers in full. Only the circle reflection clause is needed: the two arcs give a-b by the relative exact sequence and finite CW excision, with endpoints finite cofibrations. Read the published structural-excision proof and current owner-repaired general HEP interface; for these finite arcs the cylinder collars give the required pair equivalence directly. Hatcher Example2.32 p137 confirms the complete signed local-coordinate calculation. Cone collar cover has annular overlap and contractible cone member; van Kampen kills precisely the dth power. Cellular differential is d, including zero and negative d. No arbitrary CW or positive-dimensional suspension-degree clause is used.

Receipt: 957f1759f3eac515ee6e124a771b2e376c1268bf4f8aa45aa969d6f80a12f0eb. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-cofiber-sequence-of-a-wedge-summand-inclusion — accept

Claim/conventions: For well-pointed based U,V the inclusion U→U∨V is a cofibration with quotient V; its Puppe connecting map V→ΣU is based nullhomotopic.

Examined dependency IDs: def-reduced-cone-suspension-and-cofiber-sequence, lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient, lem-pushouts-and-products-preserve-the-cofibrations-used-here, def-wedge-of-pointed-spaces.

Read binary wedge quotient definition. U inclusion is the pushout of the closed basepoint cofibration of V. Quotient universal property identifies (U wedge V)/U with V. In the reduced mapping cone CU wedge V the standard cone contraction is based and fixes V, making the connecting map on V constant. Existing quotient-cylinder and closed-pushout suppliers discharge continuity.

Receipt: c4854b01e5951a8ea3625e9195be810f924a5ee479362741000d2938745bde7d. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### cex-unbased-homotopic-based-maps-need-not-induce-the-same-based-homotopy-map-without-basepoint-transport — accept

Claim/conventions: There exist based maps of the two-circle wedge that are freely homotopic but induce different endomorphisms of π1.

Examined dependency IDs: prop-higher-homotopy-basepoint-transport-and-moving-homotopies, lem-finite-cw-basepoints-have-explicit-homotopy-extension, thm-fundamental-group-of-finite-wedge-of-circles, thm-reduced-words-form-the-free-group.

Read finite-circle-wedge group computation and reduced-word proof. Finite CW basepoint HEP extends the loop a to a homotopy from identity. Endpoint fixes the vertex, and the established first-loop-first transport equation gives conjugation a^-1 b a. This reduced word differs from b. Only a finite graph and its prescribed loops are needed.

Receipt: 3fd4e63beb680548a8a0dfa98e0149522489bfa9f3338a2709ae8f94686375c0. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### cex-an-arbitrary-subspace-inclusion-need-not-be-a-cofibration — accept

Claim/conventions: For X={0} union {1/n:n≥1}⊂R, the closed inclusion {0}→X is not a cofibration.

Examined dependency IDs: def-cofibration-and-homotopy-extension-property, prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip, def-subspace-topology-top.

Every interval path in the convergent-sequence subspace is constant: distinct values are separated by an irrational cut absent from X. A strip retraction therefore has first coordinate 1/n along that vertical interval and second coordinate zero, contradicting continuity at (0,1), which it must fix. The closed inclusion satisfies the stated subspace convention; no NDR equivalence is assumed.

Receipt: 7797f75cf66717fafa42d6253ed60509476ef3ab9cd9a7cd041a34527bd3ce09. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-de-rham-cochain-complex — accept

Claim/conventions: For a finite-dimensional Hausdorff second-countable smooth manifold M, define the real cochain complex Ω•(M), with d of degree +1 and zero terms for k<0 or k>dim M. Boundaryless unless explicitly stated; the interval calculation uses smooth forms up to its endpoints.

Examined dependency IDs: def-smooth-differential-k-form, thm-the-exterior-derivative-squares-to-zero, def-cochain-complex-in-an-abelian-category.

Read smooth-form, exterior d-squared and cochain definitions in full. Real section spaces and the linear exterior derivative give degree +1 differential; the coordinate mixed-partial cancellation proves d squared zero. Extension by zero beyond the dimension and negative degrees is compatible. Endpoint forms are explicitly separated from the boundaryless convention.

Receipt: cc936dde6fea5d6d88b3046c99f5c820c301577032d22c5e6b592be3e5e9a654. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-closed-and-exact-differential-forms — accept

Claim/conventions: Z^k=ker(d:Ω^k→Ω^{k+1}), B^k=im(d:Ω^{k-1}→Ω^k); exact means in B, closed means in Z. Since d²=0, B⊂Z, including B^0=0.

Examined dependency IDs: def-de-rham-cochain-complex, thm-the-exterior-derivative-squares-to-zero.

Cycle and boundary subspaces are kernel and image of the declared differential; d squared zero gives inclusion, with the zero incoming term in degree zero. Definitions require no selection.

Receipt: ff905d932832576fa0ddafe4ca281e4ed7bc99c82f8ec6c41615b2bd12a67021. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-de-rham-cohomology — accept

Claim/conventions: H^k_dR(M)=Z^k/B^k, a real vector space; only closed forms have classes.

Examined dependency IDs: def-closed-and-exact-differential-forms, def-cohomology-object-of-a-cochain-complex.

Read published cohomology definition and its grading reindexing. In real vector spaces its cokernel is exactly the quotient Z/B; preceding inclusion makes it defined. Only cycles represent classes.

Receipt: 208d5bae052f98574074a409bba7179c53cf3746d166edbdc616b9792d3d0ca9. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-zero-and-out-of-range-de-rham-cohomology — accept

Claim/conventions: H^k_dR(M)=0 for k<0 or k>dim M; the empty manifold has zero cohomology in every degree.

Examined dependency IDs: def-de-rham-cohomology.

Outside the supported degrees the cycle space is zero. Sections over the empty base form the zero vector space in every degree; no nonemptiness assumption is imported.

Receipt: 48f03bc250d1060ceef54953c82a16331d49a295a4472631add3b436a831d8a4. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-zero-th-de-rham-cohomology-is-locally-constant-functions — accept

Claim/conventions: H^0_dR(M) is the algebra of locally constant real functions; it is R for nonempty connected M.

Examined dependency IDs: def-de-rham-cohomology, thm-local-coordinate-formula-for-the-exterior-derivative, thm-newton-leibniz-with-interior-derivative.

Coordinate d formula identifies df with the first derivatives. Read Newton–Leibniz proof; restriction to a coordinate segment has zero derivative and hence constant values. Coordinate balls give local constancy, and connected nonempty M gives a single scalar. B^0=0 removes no functions. Ordinary multiplication preserves this identification.

Receipt: 785f217f1f8e9866839bc1bffb17f0a20e91f66fe45c74b2192160cedf4b5ec6. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-pullback-is-a-morphism-of-de-rham-complexes — accept

Claim/conventions: A smooth F:M→N induces a degree-zero cochain map F*:Ω•(N)→Ω•(M).

Examined dependency IDs: def-de-rham-cochain-complex, thm-the-exterior-derivative-commutes-with-pullback, def-cochain-map, thm-the-exterior-derivative-is-a-graded-derivation, thm-the-exterior-derivative-squares-to-zero.

Read cochain-map definition and full pullback naturality proof. Degree and direction agree, and pullback is linear on each form space. In the displayed coordinate proof, the Leibniz rule and d squared on coordinate functions remove differential-of-differential terms; these implicit published suppliers were also examined.

Receipt: 970bf6222f3a8298d7129b344174a18d81fdfed149f4c499fea94152066f7f16. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology — accept

Claim/conventions: F*[ω]=[F*ω] defines a linear map H^k(N)→H^k(M).

Examined dependency IDs: def-de-rham-cohomology, prop-pullback-is-a-morphism-of-de-rham-complexes, thm-a-chain-map-induces-a-well-defined-map-on-homology.

Read induced-homology theorem: compatible cycles/boundaries factor uniquely through the cokernel. Reindexing C_n=C^-n preserves the differential with no extra sign, and dF*=F*d preserves both cycles and exact differences. This proves the stated linear map.

Receipt: b33e442335734d6e73c6b1d8f159578997f2e42d408583e5fcf3a653d6124068. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-de-rham-cohomology-is-a-contravariant-functor — accept

Claim/conventions: The de Rham groups define a contravariant functor on smooth manifolds: (G∘F)*=F*∘G* and id*=id.

Examined dependency IDs: thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges, prop-homology-respects-identities-and-composition.

Read both published functoriality proofs. Pullback reverses smooth-map composition before passage to the quotient; the homology uniqueness argument then gives F*G* in that order. Identities preserved in all degrees.

Receipt: a2ca488afb4ae6f6194968b8adecbe7fc72dc03f6e7a6071c46a7c987002b4ff. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-wedge-with-a-closed-form-preserves-exactness-classes — accept

Claim/conventions: For closed α of degree p and β of degree q, dη∧β=d(η∧β) and α∧dθ=(-1)^p d(α∧θ).

Examined dependency IDs: def-closed-and-exact-differential-forms, thm-the-exterior-derivative-is-a-graded-derivation.

Read full graded-derivation proof. Since d beta and d alpha vanish, the two displayed primitive formulas have signs +1 and (-1)^p respectively. Sequential representative changes remain closed by d squared zero, so no unaccounted cross term remains.

Receipt: b0e575bf0307e21a06f97abad5bb32e133eaae08c78d5a9cdad5fbe5a3319522. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-wedge-product-descends-to-de-rham-cohomology — accept

Claim/conventions: [α][β]=[α∧β] is a well-defined bilinear graded-commutative associative product on de Rham cohomology.

Examined dependency IDs: def-de-rham-cohomology, lem-wedge-with-a-closed-form-preserves-exactness-classes, prop-differential-forms-form-a-graded-commutative-algebra.

Leibniz gives a closed wedge; the preceding primitive formulas give independence under successive changes in either representative. Published fibrewise algebra proof supplies smoothness, bilinearity, associativity and graded sign. The constant function one is closed and is the wedge unit, including the empty-base zero algebra.

Receipt: af66c59854f20663a0f3ed7766fe79c6dd0b5a70d12258201e6d6f29f1fbf9fd. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-de-rham-cohomology-ring — accept

Claim/conventions: H•_dR(M), with wedge-induced multiplication and unit [1], is the de Rham cohomology ring, a unital graded-commutative real algebra. The zero ring on the empty manifold is allowed.

Examined dependency IDs: thm-wedge-product-descends-to-de-rham-cohomology.

The preceding product theorem supplies all algebra laws. The finite degree range makes the graded sum well defined, and the explicit zero-ring convention handles the empty manifold.

Receipt: 4ab493552f9149f3f4dcd45b019e4485880ae276cd83442523dc67ad6280eae1. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-pullback-is-a-homomorphism-of-de-rham-cohomology-algebras — accept

Claim/conventions: Smooth pullback induces a unital graded algebra homomorphism H•(N)→H•(M).

Examined dependency IDs: prop-de-rham-cohomology-is-a-contravariant-functor, def-de-rham-cohomology-ring, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges.

Published pullback wedge law passes to the established quotient classes; the pullback of the constant function one is one. Functoriality and degree zero provide a unital graded real algebra map, including maps from the empty manifold.

Receipt: 3dee3c37102e0664546a0579289e332573040692007d8cd5604d030475283cfe. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-integration-along-the-unit-interval-for-a-differential-form — accept

Claim/conventions: For smooth ω on M×[0,1], uniquely write ω=α_t+dt∧β_t with tangential forms; define Kω=∫_0^1 β_t dt, degree -1, and K=0 on degree zero. Coefficients are smooth up to endpoints and locally extend across them; integration is in the fixed finite-dimensional fibre.

Examined dependency IDs: def-smooth-differential-k-form, def-interior-product-of-a-form-by-a-vector-field, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure.

Read interior product, product atlas and parameter integration suppliers fully. Tangent splitting along M times interval uniquely separates dt; contraction followed by slice restriction is the intrinsic beta. Integrals are finite-dimensional and degree zero is explicitly sent to zero. The linked next lemma discharges coordinate independence; forms use local smooth endpoint extensions, not a boundaryless-product assertion.

Receipt: 4cf8425e9398288093ebac0e7c2a6756ceb4d3d8b7efe26ae7741ed977723f7a. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-the-interval-homotopy-operator-is-coordinate-independent — accept

Claim/conventions: K is coordinate independent and maps smooth forms to smooth forms.

Examined dependency IDs: def-integration-along-the-unit-interval-for-a-differential-form, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle.

The transition on exterior cotangent fibres over a fixed x is independent of t, so its linear map commutes with finite coefficient integration. Read the complete compact-rectangle derivative proof: uniform continuity bounds parameter difference quotients. Applying it coordinate by coordinate to each derivative on local compact rectangles yields smoothness of all orders; finite local endpoint extensions suffice, without a globally uniform collar or countable choice. Hitchin Theorem6.7 pp51–53 confirms the intrinsic splitting.

Receipt: 4cf8425e9398288093ebac0e7c2a6756ceb4d3d8b7efe26ae7741ed977723f7a. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-de-rham-homotopy-formula-on-a-product — accept

Claim/conventions: i_1*−i_0*=dK+Kd on all smooth forms on M×[0,1].

Examined dependency IDs: lem-the-interval-homotopy-operator-is-coordinate-independent, thm-local-coordinate-formula-for-the-exterior-derivative, thm-newton-leibniz-with-interior-derivative.

Direct coordinate calculation gives d_M alpha + dt wedge (partial_t alpha - d_M beta); integration and the checked parameter derivative interchange give the stated plus sign dK+Kd. Newton–Leibniz supplies the endpoint difference. For degree zero K omega=0 and Kd omega gives the function difference; dimension extremes vanish correctly.

Receipt: 912b201f1517bc949e48b7e46cb7fe84007576a5e0e66750c93517c98b9a1fdb. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-de-rham-homotopy-formula-for-a-smooth-homotopy — accept

Claim/conventions: For smooth F:M×[0,1]→N, F_1*−F_0*=d(KF*)+(KF*)d.

Examined dependency IDs: thm-de-rham-homotopy-formula-on-a-product, thm-the-exterior-derivative-commutes-with-pullback.

Apply the checked product identity to F*omega; exterior derivative naturality moves the final d across F*. Endpoint pullbacks are the composites with the slice inclusions. Smoothness up to endpoints meets the interval convention.

Receipt: 368fed5c5cc61dca61aa2d765eb69a892387fe49c31218153bc01615140ae44b. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### cor-smoothly-homotopic-maps-induce-the-same-de-rham-map — accept

Claim/conventions: Smoothly homotopic smooth maps have equal induced de Rham maps in every degree.

Examined dependency IDs: thm-de-rham-homotopy-formula-for-a-smooth-homotopy, thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology, thm-chain-homotopic-maps-induce-the-same-map-on-homology.

Read the complete chain-homotopy supplier; its element argument is valid for the present real vector spaces. Under C_n=C^-n the degree -1 operator becomes +1 without a differential sign change, so each cycle difference is a boundary. All degree cases are covered.

Receipt: 04292d27ef8bfde841fa1d01bf460a302a5e2885235aec2779e8a85b1bc38db4. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-de-rham-cohomology-is-smooth-homotopy-invariant — accept

Claim/conventions: A smooth homotopy equivalence induces an isomorphism of de Rham graded algebras.

Examined dependency IDs: cor-smoothly-homotopic-maps-induce-the-same-de-rham-map, prop-de-rham-cohomology-is-a-contravariant-functor, prop-pullback-is-a-homomorphism-of-de-rham-cohomology-algebras, def-homotopy-equivalence.

Smooth homotopy equivalence here includes a specified smooth inverse and smooth composite homotopies, as explicitly required by the strategy. Homotopy equality plus contravariant composition gives both inverse identities on graded algebras. The ordinary published equivalence definition supplies the two-composite pattern, not a smoothing theorem.

Receipt: 47d6621d78f7e5bb829e4a76dc4678063875d7f15323983ee3e4a192e7f71c08. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### cor-de-rham-cohomology-is-continuous-homotopy-invariant-on-smooth-manifolds — owner-repaired; bypass mathematical readjudication

Current object hash 4dc3ffd9b11e1bf4ae8677b89c934d42e5847f9ac561e5daf7ad6ac80e584119 matches research/phase-2-catchup-24-owner-step3-dg-astra.md. Current contracts and declared dependency list read for hash/interface identification only; no new mathematical adjudication. The owner report records the examined implicit suppliers and full repair route. Send directly to final gate; missing current owner engine receipt requires owner reconciliation, not reviewer impersonation. Next: radial contraction.

### def-radial-contraction-of-a-star-shaped-domain — accept

Claim/conventions: For an open U⊂R^n star-shaped about a specified c∈U, F(x,t)=c+t(x−c) is its radial smooth contraction from c to id.

Examined dependency IDs: def-star-shaped-open-subset-of-rn.

Published star-shaped definition includes a specified centre and the full segment containment, so the polynomial formula maps into U and has the prescribed endpoints. Smoothness up to endpoints is local since U is open; no uniform extension interval is required.

Receipt: 77dd7649632bfaf0d658eda15a9af3c0ca9cef31381d5307909a05a98711fe84. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-poincare-lemma-for-differential-forms-on-star-shaped-domains — accept

Claim/conventions: For k≥1 a closed smooth k-form on a star-shaped open domain is exact. For centre 0 the primitive is (K F*ω)_x(v_1,…,v_{k−1})=∫_0^1 t^{k−1}ω_{tx}(x,v_1,…,v_{k−1})dt.

Examined dependency IDs: def-radial-contraction-of-a-star-shaped-domain, thm-de-rham-homotopy-formula-for-a-smooth-homotopy, def-de-rham-cohomology.

Pullback by the constant endpoint vanishes in positive degree. Contracting F*omega against the parameter direction inserts x first and t times each tangential vector, giving exactly t^(k-1). The integrand is smooth even at t=0 and k=1; checked homotopy formula yields the displayed primitive. Hitchin Proposition6.8 and Exercise6.9 pp52–53 read completely; no positive-degree conclusion is applied at k=0.

Receipt: 6bec87b72379591afa50a255220b4e8ae8cb1163b0112d691ed1fe5c9d77ce16. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### cor-closed-differential-forms-are-locally-exact — accept

Claim/conventions: Every closed smooth form of POSITIVE degree is locally exact.

Examined dependency IDs: thm-poincare-lemma-for-differential-forms-on-star-shaped-domains, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges, thm-the-exterior-derivative-commutes-with-pullback.

Coordinate balls are star-shaped; transfer by chart diffeomorphism preserves closedness and takes the primitive back by pullback naturality. Positive degree is explicit, excluding nonzero locally constant functions.

Receipt: 6229d742d50dfa3d11691b29ffa2a5c800f403b2907f56a3027786512e89defa. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-de-rham-cohomology-of-a-contractible-smooth-manifold — accept

Claim/conventions: Under countable choice, a nonempty contractible smooth manifold has H^0=R and H^k=0 for k>0.

Examined dependency IDs: cor-de-rham-cohomology-is-continuous-homotopy-invariant-on-smooth-manifolds, prop-zero-and-out-of-range-de-rham-cohomology, thm-zero-th-de-rham-cohomology-is-locally-constant-functions, def-nullhomotopic-map-and-contractible-space, def-countable-choice.

Read the nonempty contractible-space definition: apply it to identity for the contraction. Paths supplied by the contraction connect all points. The unchanged owner-repaired continuous-invariance interface supplies equality with the constant-map pullback under stated countable choice; its proof is not readjudicated. Positive-degree constant pullback is zero and H0 follows from local constancy.

Receipt: 63a4a6edb8df5309cfb7559c9753298650f5303270ab8d8753f2119283055f25. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-two-open-set-de-rham-mayer-vietoris-cochain-maps — accept

Claim/conventions: For M=U∪V with U,V open, rω=(ω|U,ω|V) and s(α,β)=β|U∩V−α|U∩V are cochain maps. This difference sign is fixed throughout.

Examined dependency IDs: def-de-rham-cochain-complex, prop-pullback-is-a-morphism-of-de-rham-complexes.

Open inclusions are smooth and restriction pullbacks commute with d. Real linearity makes beta-minus-alpha a cochain map in every degree; r followed by s is zero. The difference sign is explicit.

Receipt: 0f8f24764b0dc9ac586a8d1f9cff444fa2d0c640e819b2be7d70382354b86e5c. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-the-de-rham-mayer-vietoris-sequence-is-exact-at-the-first-two-terms — accept

Claim/conventions: 0→Ω^k(M)→Ω^k(U)⊕Ω^k(V)→Ω^k(U∩V) is exact at the first two nonzero terms.

Examined dependency IDs: def-two-open-set-de-rham-mayer-vietoris-cochain-maps, def-smooth-differential-k-form.

A smooth section is determined locally: equality on overlap uniquely glues the covector values, smooth in each chart. This gives image r equals kernel s and injectivity of r, including empty cover members and zero form degrees. No partition or choice use.

Receipt: 6a5a99ff95307546ebc78bef1e72f855daee853b2d690542b9782429f94ea4e9. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-the-de-rham-mayer-vietoris-difference-map-is-surjective — repaired

Claim/conventions: Under countable choice, s is surjective in every degree.

Examined dependency IDs: def-two-open-set-de-rham-mayer-vietoris-cochain-maps, thm-smooth-partitions-of-unity-exist-on-manifolds, def-countable-choice, lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it, lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking, lem-manifold-bump-for-a-compact-set-inside-an-open-set, lem-normalizing-a-locally-finite-positive-smooth-family, thm-a-locally-finite-sum-of-smooth-functions-is-smooth, def-smooth-partition-of-unity-subordinate-to-an-open-cover.

Expanded the local partition route to all eligible chart tuples, countable basis representatives, least exhaustion indices, countably selected finite annular lists, countable bumps and normalization. This discharges the point-indexed-choice gaps in the published cover/shrinking proofs while retaining the existing CC statement, dependencies, lift signs and grouped closed supports. Read those proofs, compact-set bump and smooth-sum clauses fully, and Hitchin Theorem10.8 pp92–93 complete proof. The lift alpha=-rho_V omega, beta=rho_U omega extends smoothly because each multiplier support is closed in M and inside the opposite open set. Manifest-deps passed113 items/0 errors; scope gate remains closed24 pairs. Shared prose claims/inventory require no change; local strategy differs from the canonical plan copy and is reported for reconciliation. No extra mathematical recheck required.

Receipt: 7a5aae68968b4554c41558ae478fffc8138d57ce5b716716d3dbd8dcaa084a0f. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-short-exact-mayer-vietoris-sequence-of-de-rham-complexes — accept

Claim/conventions: Under countable choice, 0→Ω•(M)→Ω•(U)⊕Ω•(V)→Ω•(U∩V)→0 is a short exact sequence of cochain complexes.

Examined dependency IDs: lem-the-de-rham-mayer-vietoris-sequence-is-exact-at-the-first-two-terms, lem-the-de-rham-mayer-vietoris-difference-map-is-surjective, def-short-exact-sequence-of-complexes.

Read short-exact-complex definition. The checked injective/gluing maps and locally repaired surjective difference map establish degreewise exactness of cochain maps. Grading reindexing preserves exactness; binary direct sums require no global choice of linear splittings. CC is propagated.

Receipt: 32f8b699dad8e804d9daa01f5059e082c74477a8ceec845da8b9219d7371f6b4. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-mayer-vietoris-sequence-in-de-rham-cohomology — accept

Claim/conventions: Under countable choice, the two-open de Rham sequence is long exact, with δ:H^k(U∩V)→H^{k+1}(M).

Examined dependency IDs: thm-short-exact-mayer-vietoris-sequence-of-de-rham-complexes, def-de-rham-cohomology, thm-long-exact-sequence-in-cohomology, thm-long-exact-sequence-in-homology, lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes, thm-snake-lemma-under-the-weaker-stacks-hypotheses.

Read cohomology and homology LES proofs, four exactness lemmas, quotient-kernel diagram and weaker snake construction. Only real-module clauses are used: element lifting and subtraction give the connecting kernel/image equalities without selecting lifts globally. In the diagram kernels are H_n and cokernels H_(n-1); reindexing raises cohomology degree by one with no sign. Binary direct sums identify cycles, boundaries and quotients componentwise. CC from the repaired short exact sequence propagates, and vanishing negative degrees supplies the initial zero.

Receipt: 04c19b9c2e41de08b1ab0a27d2145f93f082823930ee6f471a1a291cc15897e4. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-explicit-de-rham-mayer-vietoris-connecting-class — accept

Claim/conventions: Under countable choice, For closed ω, δ[ω]=[η], where η|U=d(−ρ_Vω), η|V=d(ρ_Uω). This is independent of partition, lift and representative.

Examined dependency IDs: thm-mayer-vietoris-sequence-in-de-rham-cohomology, lem-the-de-rham-mayer-vietoris-difference-map-is-surjective, prop-elementwise-formula-for-the-connecting-map-in-module-categories.

Read the full module connecting formula and its lift/representative independence proof. For a closed overlap form the prescribed opposite-partition lift has derivative pair agreeing on overlap; its unique glued form is closed. Reindexing preserves the connector sign, giving d rho_U wedge omega on overlap. A change of partition is a change of lift and hence gives an exact difference. CC inherited from the repaired lift construction.

Receipt: effa82c2ea0c8409d54b27430b81e9c6eb228e4149db406924b648755eb9ea96. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-naturality-of-de-rham-mayer-vietoris-for-maps-of-covered-manifolds — accept

Claim/conventions: Under countable choice, For F:M→N with F(U)⊂U′, F(V)⊂V′, pullbacks give a contravariant commutative ladder of the two Mayer–Vietoris sequences, including δ_M F_overlap*=F* δ_N.

Examined dependency IDs: thm-mayer-vietoris-sequence-in-de-rham-cohomology, prop-explicit-de-rham-mayer-vietoris-connecting-class, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges, thm-naturality-of-the-homology-connecting-morphism.

Read connecting naturality proof and checked its real-module specialization by pulling back an arbitrary lift: restriction and exterior derivative commute with smooth pullback, so the unique glued derivative pulls back as well. Both difference maps use beta-minus-alpha. Thus delta_M F_overlap*=F*delta_N, with no need for a pullback partition to match another chosen one. CC remains explicit.

Receipt: d52b521f215bfef1ae5aa05b4215eefbf8aaa75fa16d71ff75abf4a9ac329c32. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum — accept

Claim/conventions: For a finite disjoint union M=⊔_{j=1}^m M_j, restriction identifies H^k(M) with ⊕_j H^k(M_j).

Examined dependency IDs: def-de-rham-cohomology.

Forms, their differentials and cycle subspaces decompose componentwise over a finite disjoint union. Boundary surjectivity needs only a finite choice of primitives, so quotient identifies with the finite direct sum. Empty family gives zero; no infinite-product exactness is asserted.

Receipt: 3ae5d45246379c8dd5523b22ee26a0e392fc0013ed6bfe8f74ef9b1af92dc4cb. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-de-rham-cohomology-of-spheres — accept

Claim/conventions: Under countable choice, for n≥1, H^k(S^n)=R in degrees 0 and n and zero otherwise; for S^0 it is R² in degree zero only.

Examined dependency IDs: thm-mayer-vietoris-sequence-in-de-rham-cohomology, thm-poincare-lemma-for-differential-forms-on-star-shaped-domains, thm-de-rham-cohomology-is-smooth-homotopy-invariant, thm-zero-th-de-rham-cohomology-is-locally-constant-functions, cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum, prop-zero-and-out-of-range-de-rham-cohomology.

Checked complementary-pole stereographic coordinates and overlap inverse (u,s) -> (u,s)/sqrt(1+s^2); scaling s gives its smooth equatorial retraction. For n=1 the H0 difference is the diagonal b-a map, giving a one-dimensional cokernel. For n>=2 connected overlap makes that map onto; higher LES terms shift by one. Finite induction and S0 two-point forms give every stated degree, with negative/out-of-range zero. Hitchin Theorem6.10 pp54–56 read completely; local argument uses the established MV supplier, not the later punctured-space computation.

Receipt: 0fef35574336a0587460585abd6563febb062ad76027549f269be2b0c6626ef7. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### cor-de-rham-cohomology-of-punctured-euclidean-space — accept

Claim/conventions: Under countable choice, For n≥2, R^n\{0} has R in degrees 0,n−1 only. For n=1 it has R² in degree zero only; for n=0 all groups vanish.

Examined dependency IDs: thm-de-rham-cohomology-of-spheres, thm-de-rham-cohomology-is-smooth-homotopy-invariant, cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum, thm-poincare-lemma-for-differential-forms-on-star-shaped-domains, prop-zero-and-out-of-range-de-rham-cohomology.

Radial scalar (1-t)+t/|x| is strictly positive on the punctured space and the homotopy fixes the unit sphere. The checked sphere and smooth-invariance results supply n>=2. Two convex half-lines give n=1 via finite components, and n=0 is empty. CC remains explicit, although the individual radial map needs none.

Receipt: 31b5b5f9abadff0bad97205ca329f712dfe8b2d2e203f5f0b6d8b2916c030040. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### fs-the-de-rham-cohomology-class-of-a-form-is-defined-without-closedness — accept

Claim/conventions: False claim: every differential form represents a de Rham class.

Examined dependency IDs: def-closed-and-exact-differential-forms, def-de-rham-cohomology, thm-local-coordinate-formula-for-the-exterior-derivative.

The coefficient formula gives d(x dy)=dx wedge dy, nonzero on the standard coordinate frame. Hence x dy is outside the cycle numerator. This explicitly witnesses the marked false statement.

Receipt: 2ffbd77f9cf84462335e14ac8868e02b648567906536b61ad8545ce303919f1d. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### fs-every-smooth-form-is-either-closed-or-exact — accept

Claim/conventions: False claim: every smooth form is closed or exact.

Examined dependency IDs: def-closed-and-exact-differential-forms, thm-local-coordinate-formula-for-the-exterior-derivative, thm-the-exterior-derivative-squares-to-zero.

The explicit x dy witness on R2 is not closed. Since the checked d-squared identity makes every exact form closed, it is not exact either. No disjointness of the closed/exact classes is assumed.

Receipt: 318e6101def87477df280a3b8b40d8f855ca7f4e7a06b43290d8a6f60591526b. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### fs-continuously-homotopic-smooth-maps-can-be-inserted-directly-into-the-differential-form-homotopy-operator — accept

Claim/conventions: False claim: the differential-form homotopy operator accepts an arbitrary continuous homotopy directly.

Examined dependency IDs: def-integration-along-the-unit-interval-for-a-differential-form, thm-de-rham-homotopy-formula-for-a-smooth-homotopy.

The point-to-R homotopy |t-1/2| has constant smooth endpoints and unequal one-sided derivatives at the interior cusp. Smooth pullback of dy on the cylinder is therefore undefined there; the interval operator requires a smooth form. This is a direct regularity counterexample.

Receipt: 724dcf80b620f05d8b736be00dcc6676cabe2ef2001d33c839d8a00c2ec4b718. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### fs-the-poincare-lemma-says-every-closed-form-is-globally-exact — accept

Claim/conventions: False claim: Poincaré gives global exactness of every closed positive-degree form on every manifold.

Examined dependency IDs: thm-poincare-lemma-for-differential-forms-on-star-shaped-domains, def-closed-and-exact-differential-forms, thm-local-coordinate-formula-for-the-exterior-derivative, thm-newton-leibniz-with-interior-derivative, cor-a-nonzero-period-obstructs-exactness-and-bounding.

Differentiating the angular coefficients gives zero exterior derivative away from the origin; along the explicit circle parametrization the form is dt with integral 2pi. Exactness would give derivative of a periodic potential, whose integral is zero by the declared Newton–Leibniz theorem. This elementary loop clause needs no global Stokes/partition choice; the published nonzero-period supplier was read but its stronger nonbounding clause is not consumed.

Receipt: bb1eddff0e8fdc848b29bcdd1784951ee878126b4ee4732ca4e3507a01debda3. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### fs-the-mayer-vietoris-sequence-is-obtained-by-restricting-forms-without-a-partition-of-unity — accept

Claim/conventions: Under countable choice, Invalid proposed proof: restrictions alone establish the full Mayer–Vietoris sequence, with no proof of surjectivity of the difference map.

Examined dependency IDs: def-two-open-set-de-rham-mayer-vietoris-cochain-maps, lem-the-de-rham-mayer-vietoris-difference-map-is-surjective.

The statement explicitly rejects an incomplete proof recipe, not all possible partition-free arguments. The overlap function 1/x cannot itself extend smoothly across zero into U, showing why naive restriction/gluing does not supply arbitrary lifts. The earlier repaired opposite-cutoff construction supplies that missing surjectivity under the stated CC.

Receipt: 984c32bb55640c34b5e77119ca80908282c446a5aaa618256c014508f90017bd. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### fs-de-rham-cohomology-is-a-covariant-functor — accept

Claim/conventions: False claim: the pullback construction is covariant.

Examined dependency IDs: prop-de-rham-cohomology-is-a-contravariant-functor.

Pullback arrows reverse source and target. On three discrete points, permutations (12) and (23) do not commute and their pullbacks on characteristic functions reverse composition, furnishing the stated concrete check. Smoothness is automatic on discrete charts; no later B item is used.

Receipt: fd8c8e8e044a7e35ad4d5e781e227458c57528d3005e6ff79f81b5c2033ce2db. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-de-rham-cohomology-of-a-point — accept

Claim/conventions: A point has de Rham ring R in degree zero only.

Examined dependency IDs: prop-zero-and-out-of-range-de-rham-cohomology, thm-zero-th-de-rham-cohomology-is-locally-constant-functions.

The point is zero-dimensional and connected nonempty; H0 is R and all other form/cohomology degrees vanish. Multiplication is multiplication of constants.

Receipt: 2f41ecd2829ce93cb9fdafb90d4abe9342eeb2d3bccd28c8edadb8875c852a9f. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-de-rham-cohomology-of-euclidean-space — accept

Claim/conventions: R^n has de Rham ring R in degree zero only, including n=0.

Examined dependency IDs: thm-poincare-lemma-for-differential-forms-on-star-shaped-domains, thm-zero-th-de-rham-cohomology-is-locally-constant-functions.

Euclidean space is nonempty and connected, and radial contraction gives zero positive cohomology by the already checked primitive formula. For n=0 it is a point with the same constants. Negative degrees vanish by the complex convention.

Receipt: aefd7b327c35d087f45b6863cc6b7e76f7172d25db749a616400c60278f9ff96. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-de-rham-cohomology-of-a-finite-discrete-manifold — accept

Claim/conventions: An m-point discrete manifold has H^0=R^m with componentwise multiplication and no positive-degree cohomology.

Examined dependency IDs: cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum, thm-zero-th-de-rham-cohomology-is-locally-constant-functions.

Each tangent space of the finite discrete manifold is zero, so all positive form degrees vanish; all functions are locally constant with pointwise multiplication. Finite component decomposition and the empty-manifold convention give R^m, including m=0.

Receipt: 71f097b8cf53357a6c58d64b05cca88455d5446d7d152a334a0a70298203f009. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-de-rham-cohomology-of-the-circle-from-mayer-vietoris — accept

Claim/conventions: Under countable choice, H^0(S¹)=H^1(S¹)=R and all other groups vanish.

Examined dependency IDs: thm-mayer-vietoris-sequence-in-de-rham-cohomology, thm-zero-th-de-rham-cohomology-is-locally-constant-functions, thm-poincare-lemma-for-differential-forms-on-star-shaped-domains, cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum, prop-zero-and-out-of-range-de-rham-cohomology.

The two arcs are contractible coordinate intervals and their overlap is two such intervals. Finite component forms give H0 overlap R2. The beta-minus-alpha map has diagonal image and one-dimensional kernel/cokernel; the checked LES gives H0 and H1, and dimensional truncation all other degrees. CC propagated.

Receipt: df0a3a0a1b88a89e8df8c706fa01ec416cebd71e0e3e3c30bba32fa54ec4303e. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### Published assumption finding for canonical reconciliation

`cor-a-nonzero-period-obstructs-exactness-and-bounding` omits AC_omega in its statement and quoted F1, but its actual published supplier `cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero` explicitly assumes AC_omega and proves its claim by the similarly qualified `thm-general-stokes-theorem`. Required repair: propagate the inherited assumption and declare `def-countable-choice`, or prove a choice-free compact localization replacement. Existing suppliers are published; no new Phase-2 supplier is required for assumption propagation. Audit is confined to exactness obstruction/F1, not the separate nonbounding clause. The new angular counterexample remains sound by its explicit Newton–Leibniz loop argument. Reconcile this finding with existing integration/period debt, without duplicating canonical index entries.

### ex-the-angular-form-generates-the-first-de-rham-cohomology-of-the-circle — accept

Claim/conventions: Under countable choice, The class of (x dy−y dx)/(2π) restricted to the unit circle generates H^1(S¹), with period one.

Examined dependency IDs: thm-de-rham-cohomology-of-spheres, prop-explicit-de-rham-mayer-vietoris-connecting-class, cor-a-nonzero-period-obstructs-exactness-and-bounding.

The tangent pullback of the normalized angular form is dt/(2pi), so its period is one. Its degree is top on S1 and hence it is closed. The exactness-obstruction clause of the published period corollary applies under the explicitly retained CC (and follows directly by FTC on the loop). The checked sphere theorem makes H1 one-dimensional; therefore this nonzero class generates. The declared connector is consistent but not needed for the period calculation.

Receipt: b5c310f9b11b37b7b33b45fb2590db8fe4f6b910fd14ec25f59e75af3fcc5d08. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-de-rham-cohomology-of-the-two-sphere — accept

Claim/conventions: Under countable choice, S² has H^0=H²=R and H¹=0.

Examined dependency IDs: thm-de-rham-cohomology-of-spheres.

Specialize the checked sphere computation at n=2: connected overlap gives H1 zero and delta identifies H1 of the equatorial-cylinder overlap with H2 of the sphere. CC retained and no new supplier introduced.

Receipt: 712405d57f3ad14dc591146ca65d99964f899f763ab86c6233efaba1943601b4. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-the-standard-volume-form-generates-top-cohomology-of-a-sphere — accept

Claim/conventions: Under countable choice, For n≥1 the standard outward sphere form ω=Σ_i(−1)^{i−1}x_i dx_1∧⋯∧omit(dx_i)∧⋯∧dx_{n+1}|S^n generates H^n(S^n).

Examined dependency IDs: thm-de-rham-cohomology-of-spheres, cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact, prop-positive-compactly-supported-top-forms-have-positive-integral, thm-general-stokes-theorem.

The displayed form evaluates as det(x,v1,...,vn), positive on the outward-oriented tangent determinant ray of the unit sphere. Compactness gives compact support. Read nonexactness obstruction, integral positivity and Stokes proofs: under the stated CC positivity supplies a nonzero finite integral and Stokes kills exact top forms. The sphere theorem makes the nonzero top class a generator. No later Riemannian supplier used.

Receipt: d338ef0765c1c2222ea6f7dd76ad0d459cc7b9f0d2880a83f5ce5e85090e500d. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-de-rham-cohomology-of-punctured-three-space — accept

Claim/conventions: Under countable choice, R³\{0} has R in degrees zero and two only.

Examined dependency IDs: cor-de-rham-cohomology-of-punctured-euclidean-space.

Substitute n=3 in the checked punctured-space result; x maps to x/|x| via the smooth positive radial homotopy. Precisely degrees zero and two survive; CC retained.

Receipt: 2b8942cb52b067817048f35921b44f4fce5f8c7c0ccf8ba8823e64076c060267. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-homotopy-equivalent-annulus-and-circle-have-isomorphic-de-rham-rings — accept

Claim/conventions: Under countable choice, An annulus {a<|x|<b}, 0<a<1<b, and the circle have isomorphic de Rham graded rings.

Examined dependency IDs: thm-de-rham-cohomology-is-smooth-homotopy-invariant, prop-pullback-is-a-homomorphism-of-de-rham-cohomology-algebras, thm-de-rham-cohomology-of-spheres.

In the planar annulus convention, the interpolated radius (1-t)|x|+t remains in (a,b), so radial retraction and inclusion are smooth homotopy inverses. Pullback is an algebra isomorphism; the degree-one square vanishes by graded commutativity over R, also by the circle degree bound. CC inherited from the circle computation.

Receipt: 4478e851f7bee1b51ac4982b8868a8ac3caf0bbfb108b5fc20d939923a8ebb52. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### cex-the-closed-angular-form-on-the-punctured-plane-is-not-exact — accept

Claim/conventions: The angular form (x dy−y dx)/(x²+y²) on the punctured plane is closed but not exact.

Examined dependency IDs: def-closed-and-exact-differential-forms, thm-local-coordinate-formula-for-the-exterior-derivative, cor-a-nonzero-period-obstructs-exactness-and-bounding, thm-newton-leibniz-with-interior-derivative.

Coefficient differentiation gives d alpha=0; the explicit unit-circle pullback is dt. If alpha=df, the periodic function f(cos t,sin t) would have derivative one and endpoint difference zero, contradicting Newton–Leibniz. This elementary exactness clause avoids the unqualified general period supplier assumption; no global Stokes or choice is needed.

Receipt: 5d8cce3a372ed59f7ab443f09019d43d8c288008fbfcfb133c8ef8bb7797969c. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### cex-the-pullback-on-cohomology-reverses-composition-order — accept

Claim/conventions: Pullback composition cannot be treated as covariant.

Examined dependency IDs: prop-de-rham-cohomology-is-a-contravariant-functor, thm-zero-th-de-rham-cohomology-is-locally-constant-functions.

At point2, G(F(2))=1 while F(G(2))=3, so the indicator of1 has values1 and0 as stated. These are smooth maps/functions on the three-point manifold, whose H0 contains all functions. This explicitly verifies the reversed-composition witness.

Receipt: 1da9deba1716a784f621fa061b3e18a1a564d58a45ce35cb7bc3650e03e2cc1f. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-an-explicit-mayer-vietoris-connecting-form-on-the-circle — accept

Claim/conventions: Under countable choice, The circle Mayer–Vietoris connector has an explicit nonzero representative from a locally constant overlap function.

Examined dependency IDs: prop-explicit-de-rham-mayer-vietoris-connecting-class, thm-zero-th-de-rham-cohomology-is-locally-constant-functions.

The overlap locally constant function (0,1) is outside the diagonal image of H0(U) plus H0(V). Exactness therefore makes its connecting class nonzero. The checked connector constructs its representative by zero-extended opposite multipliers before differentiation; the stated sign matches beta-minus-alpha. No unproved period normalization is asserted and CC retained.

Receipt: b926f4ff413ee14712cdef4a89a1271d7c4a831263836011464beb1b0ed80ebc. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-riemannian-metric-and-riemannian-manifold — accept

Claim/conventions: A Riemannian metric is a smooth symmetric positive-definite covariant 2-tensor on a Hausdorff second-countable smooth manifold. Dimension zero is allowed; boundaries are allowed when explicitly used.

Examined dependency IDs: def-smooth-tensor-field, def-smooth-bundle-metric.

Read smooth tensor-field and bundle-metric definitions. Smooth symmetric positive-definite covariant 2-tensors are exactly smooth fibre inner products on TM; local coordinate frames give equivalence with smooth evaluation on local sections. In dimension zero the zero form on the zero vector space is positive definite vacuously; boundary use is explicitly qualified.

Receipt: 93b30a6b48023bd346dcf09a734c1f7dbd0ec1936fb3e202d2dd112e6c0e02c2. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-coordinate-criterion-for-a-riemannian-metric — accept

Claim/conventions: A local tensor g=g_ij dx^i⊗dx^j is Riemannian iff G=(g_ij) is smooth symmetric positive definite; coordinate matrices obey G_y=J^T G_x J, J=∂x/∂y.

Examined dependency IDs: def-riemannian-metric-and-riemannian-manifold, prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components.

Read tensor-component smoothness proof. Evaluating on coordinate vectors gives G; a coordinate change inserts J in each covariant argument, producing J^T G J. Its invertibility preserves positive definiteness and symmetry, including empty zero-dimensional matrices.

Receipt: db8347636c185ada4e8462fd70ae1692606543ee2005c791ade448c0019631e3. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-every-smooth-manifold-admits-a-riemannian-metric — repaired

Claim/conventions: Under countable choice every smooth manifold admits a Riemannian metric.

Examined dependency IDs: def-riemannian-metric-and-riemannian-manifold, thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric, def-countable-choice, thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary, thm-smooth-partitions-of-unity-exist-on-manifolds, lem-normalizing-a-locally-finite-positive-smooth-family.

Expanded the local implementation of the published bundle-metric proof to eliminate unqualified point-indexed chart/frame choices and make its asserted CC bound explicit. The all-tuples/basis/countable annular-list construction gives labelled locally finite bumps; weighted frame metrics extend by zero and are positive definite because some weight is positive. Read full bundle metric, boundary partition and boundary tangent/cotangent proofs. Half-space restriction of local Euclidean bumps handles the boundary variant and dimension zero is explicit. Hitchin Theorem10.8 full exhaustion argument was read. Manifest dependency check113 items/0 errors; statement, inventory and axiom unchanged. Canonical proof-strategy copy requires reconciliation only; no shared file edited.

Receipt: bb2851684049e8da5e70a25075e965ee2cb11a747947e13b6cb7f847dd2e97c4. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-pullback-riemannian-metric — accept

Claim/conventions: For smooth F:M→N and Riemannian h, define the pullback tensor (F*h)_p(v,w)=h_{F(p)}(dF_pv,dF_pw); positivity is not built into this definition.

Examined dependency IDs: def-riemannian-metric-and-riemannian-manifold, def-pullback-of-a-covariant-tensor-field.

The formula is exactly the published covariant tensor pullback specialized to two slots. Positivity is explicitly withheld, so singular differentials cause no well-definedness problem. Recovered the definition and smooth functorial pullback proof in full after checkpoint.

Receipt: b563784e71f27b2d463bf69e7649ce78644013f84621930f490c6220a978c9c6. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions — accept

Claim/conventions: F*h is Riemannian exactly when F is an immersion; otherwise it is positive semidefinite with kernel ker dF.

Examined dependency IDs: def-pullback-riemannian-metric, prop-pullback-of-covariant-tensors-is-smooth-and-functorial, def-immersion-submersion-and-constant-rank-map.

The pullback is smooth and symmetric by the read tensor proof. Its quadratic value is h(dFv,dFv), zero exactly on ker dF, so its radical is that kernel and positivity is equivalent to the published pointwise immersion definition. No surjectivity or dimension hypothesis is needed.

Receipt: 2449fa155903dc4a3126ff83b2ff51a4d92413a4c0ce882fe28b40c297771cbc. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-riemannian-isometry-and-local-isometry — accept

Claim/conventions: An isometry is a diffeomorphism F with F*h=g. A local isometry is a smooth local diffeomorphism with F*h=g; on boundaryless manifolds, equivalently a smooth metric-preserving map between equal-dimensional manifolds. An isometric immersion is separately defined and need not be a local isometry.

Examined dependency IDs: def-pullback-riemannian-metric, prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, thm-smooth-inverse-function-theorem-on-manifolds.

Read diffeomorphism and local-diffeomorphism definitions and manifold inverse function proof. The asserted differential equivalence is correctly restricted to equal dimension and no boundary, where metric preservation makes the differential invertible. Boundary local isometries retain the explicit local-diffeomorphism condition. Immersions into larger dimension are separate.

Receipt: 750697a68a5d5b8e7c16609299175497ad01386eecc344cdeddb1ced614a6559. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-riemannian-isometries-form-a-group-and-local-isometries-are-local-diffeomorphisms — accept

Claim/conventions: Isometries of a fixed Riemannian manifold form a group; equal-dimensional metric-preserving smooth maps between boundaryless manifolds are local diffeomorphisms.

Examined dependency IDs: def-riemannian-isometry-and-local-isometry, prop-pullback-of-covariant-tensors-is-smooth-and-functorial, thm-smooth-inverse-function-theorem-on-manifolds.

Functorial pullback proves the identity, composition and inverse preserve the fixed metric; associativity is function composition. Positive definiteness implies injective differential; equal finite dimensions make it invertible, and the read boundaryless inverse function theorem supplies open diffeomorphic neighborhoods. No unqualified boundary differential criterion is asserted.

Receipt: 10320ada418c180b81225200311e0df1ca91d8d9d04c5286b8d62c45a5068903. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-conformal-equivalence-of-riemannian-metrics — accept

Claim/conventions: Metrics g and g̃ are conformally equivalent if g̃=e^{2u}g for a smooth real u; this is positive smooth rescaling.

Examined dependency IDs: def-riemannian-metric-and-riemannian-manifold.

The factor exp(2u) is smooth and strictly positive. Conversely any positive smooth factor a has smooth u=(log a)/2. Reflexivity, symmetry and transitivity use u=0, -u and addition, respectively. The zero-dimensional convention introduces no contradiction.

Receipt: 9401f90c2fde4b865def7f441eee7abd80d6b2a38140e91a9bf830f96ebe3499. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-pointwise-norm-and-angle-from-a-riemannian-metric — accept

Claim/conventions: |v|_g=√g(v,v). For nonzero v,w, angle θ∈[0,π] satisfies cos θ=g(v,w)/(|v||w|); endpoints 0,π are allowed.

Examined dependency IDs: def-riemannian-metric-and-riemannian-manifold, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces.

The read Cauchy–Schwarz proof places the normalized real inner product in [-1,1], and cosine is bijective from [0,pi] onto that interval. Nonzero vectors ensure a positive denominator; zero vectors receive only a norm. The endpoint convention is consistent.

Receipt: 7d5769813b6f1d8dfecfe19cfc0c24aa6bfc2d0f9c5ad6ef95c49a699f6338e0. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-musical-isomorphisms — accept

Claim/conventions: The musical maps are v♭=g(v,·) and its pointwise inverse α♯, characterized by g(α♯,v)=α(v). Smoothness is discharged next.

Examined dependency IDs: def-riemannian-metric-and-riemannian-manifold, thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms, prop-coordinate-criterion-for-a-riemannian-metric, prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices.

Positive definiteness gives injectivity of v to g(v,-); equal finite dimensions give its unique inverse. In local frames the two maps use G and adj(G)/det(G), smooth since det G is positive. This verifies the explicitly named next-item smoothness obligation without an additional assumption.

Receipt: 56f06bf98793726616d007e3626e511e8ad2fbc01e930a4945cdb3035bbff9ac. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms — accept

Claim/conventions: ♭:TM→T*M and ♯:T*M→TM are smooth inverse bundle isomorphisms.

Examined dependency IDs: def-musical-isomorphisms, prop-coordinate-criterion-for-a-riemannian-metric, prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices.

Read full local matrix bundle-map criterion. The metric matrix is symmetric positive definite, hence invertible with smooth inverse entries adj(G)/det G. The coordinate formulas represent intrinsic fibrewise inverse maps, so agree on overlaps. In dimension zero the empty identity matrix gives the same conclusion.

Receipt: 56f06bf98793726616d007e3626e511e8ad2fbc01e930a4945cdb3035bbff9ac. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-riemannian-gradient — accept

Claim/conventions: For smooth f define grad_g f=(df)♯, a smooth vector field.

Examined dependency IDs: thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms, prop-exterior-derivative-of-a-function-is-its-differential.

The exterior derivative of a smooth function is its smooth differential with df(X)=Xf, as in the read published proof. Composing this smooth cotangent section with the checked sharp bundle map produces a smooth tangent section.

Receipt: 2ee7fd6b54d907b2ce46796d590a1d4407f27f2845bbbc14e8d71e968220fd1f. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-the-gradient-is-characterized-by-inner-products — accept

Claim/conventions: The gradient is the unique smooth vector field with g(grad_g f,X)=Xf for every smooth vector field X.

Examined dependency IDs: def-riemannian-gradient, prop-exterior-derivative-of-a-function-is-its-differential, thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms.

The inverse pairing gives g(grad f,X)=df(X)=Xf. For uniqueness, if Y also has the property, use the global smooth test field X=Y-grad f to obtain its squared norm identically zero. Thus the stated global-field quantifier needs no global extension or choice assumption; the local-coordinate nondegeneracy strategy gives the same pointwise conclusion.

Receipt: 7795debc18a6ac7876d26150ad6c9a112aac657e868e4c500a0fce838bc3c378. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles — accept

Claim/conventions: g induces smooth metrics on duals, tensor bundles and exterior powers. On wedge decomposables the exterior metric is det(⟨α_i,β_j⟩), so increasing orthonormal wedge monomials have norm one.

Examined dependency IDs: thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms, thm-universal-property-of-the-finite-dimensional-exterior-power, lem-wedge-monomials-in-a-dual-basis-form-a-basis.

Read full exterior universal property and increasing-wedge basis proofs. The determinant pairing is alternating separately, hence descends bilinearly; in an orthonormal covector basis its matrix is identity. Tensor products use product inner products and the dual metric uses sharp. Coefficients are smooth finite expressions in inverse metric entries; local finite Gram–Schmidt divides only by positive smooth functions. The exterior normalization is explicitly determinant normalization, avoiding a factorial error.

Receipt: 6abcf4a73d58779aefcf9fbe9bae8dfe46fe91421b097adb7ef366f5ef5b9dc8. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-piecewise-c-one-curve-on-a-manifold — accept

Claim/conventions: A piecewise C¹ manifold curve is continuous on a compact interval with a finite subdivision on whose closed pieces it is C¹ in charts, including one-sided endpoint derivatives. This does not require nonzero speed.

Examined dependency IDs: def-piecewise-c1-path-operations-and-oriented-reparametrizations, def-c-r-and-smooth-maps-between-smooth-manifolds.

Read the published path-operation and chartwise smooth-map definitions. The local closed-piece C1 convention adds the necessary endpoint derivatives explicitly and is invariant under smooth coordinate changes by the chain rule. Finite subdivision and continuity ensure finite corner data; constant and zero-speed curves remain admissible.

Receipt: 5ec2fba20b184d859cf68d776bef81dd44465f57e2edcc2218b4b6d9d2bb1e2c. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-riemannian-speed-and-length — accept

Claim/conventions: Speed is |γ′(t)|_g on each smooth piece, and L_g(γ) is the sum of its Riemann integrals. The finitely many corner values do not affect length.

Examined dependency IDs: def-piecewise-c-one-curve-on-a-manifold, def-pointwise-norm-and-angle-from-a-riemannian-metric, thm-riemann-criterion, thm-heine-borel-characterisation-r, thm-additivity-over-subintervals.

Speed is a continuous nonnegative scalar on each closed C1 piece, independently of coordinates by tensor transformation. Its integral exists choice-free: cover the compact interval by all relative balls B(x,r) on whose doubled balls the oscillation of speed is below eta. A finite subcover exists; delta=min r gives uniform oscillation below eta for parameter pairs closer than delta. The same finite-cover argument with eta=1 bounds speed. A uniform partition with mesh below delta then has Darboux gap at most eta(b-a), proving integrability by the read Riemann criterion. Finite corner changes are confined to intervals of arbitrarily small total length and do not change the integral. This uses interval compactness and finite choice only, not the CC-dependent proof of thm-continuous-implies-integrable.

Receipt: f5b71a6edebce7a811c35134ee6cf40de8f3a4c042516f2b242b6d8fd68a5d29. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision — accept

Claim/conventions: Riemannian length is independent of subdivision and of corner derivative conventions.

Examined dependency IDs: def-riemannian-speed-and-length, lem-line-integrals-are-independent-of-the-piecewise-c1-partition, thm-additivity-over-subintervals, thm-riemann-criterion.

Read the full published finite common-refinement argument and scalar integral additivity proof. The same argument applies to the continuous speed scalar on each piece. Two finite corner conventions differ only at finitely many values; covering those points by intervals with total length below epsilon divided by a common bound gives zero integral difference. No CC-dependent finite-discontinuity integrability theorem is needed.

Receipt: ce8e3f54352594b5f2373b86650062c11e9e392eec9e5bca77ac7c89fdd6029f. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-riemannian-length-is-invariant-under-orientation-preserving-piecewise-c-one-reparametrization — accept

Claim/conventions: If φ:[c,d]→[a,b] is a continuous nondecreasing surjection, piecewise C¹, then γ∘φ is piecewise C¹ and L_g(γ∘φ)=L_g(γ). In particular orientation-preserving piecewise C¹ reparametrizations preserve length; pauses are allowed.

Examined dependency IDs: lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision, thm-substitution-with-riemann-integrable-inner-derivative, thm-riemann-criterion, thm-heine-borel-characterisation-r.

Every fibre of a monotone continuous map over a corner is a closed interval, possibly a singleton; adjoining its endpoints and the finitely many phi corners gives a finite partition. On nonconstant pieces gamma composed with phi is C1 with one-sided endpoint derivatives and speed (speed gamma composed with phi) times nonnegative phi derivative. Constant fibres contribute zero. The read substitution proof integrates the chain rule for a primitive; the continuous scalar integrability it needs follows by the choice-free finite-cover/Darboux argument recorded at the speed definition. Sum the endpoint substitution identities. Pauses require no inverse derivative.

Receipt: 1cb86f8834c06c6d2787c3fd0bc9f15dd72714b645878a6fea335b7bdfb0ae9a. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-length-is-additive-under-concatenation-and-invariant-under-reversal — accept

Claim/conventions: Length adds under finite concatenation and is unchanged by reversal.

Examined dependency IDs: lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision, thm-line-integrals-under-reversal-and-concatenation, thm-substitution-with-riemann-integrable-inner-derivative, thm-additivity-over-subintervals.

Read the entire reversal and concatenation proof. For the metric speed integrals the identical affine substitutions cancel the positive rescaling of speed; reversing negates velocity but preserves its norm and reverses the integration limits. Integral additivity at the join gives the sum without matching corner derivatives.

Receipt: 92e221b20cf1e1bb3fb9cf27250d89d2affa8199b8404019f7151fb819ed8947. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric — accept

Claim/conventions: For compact K in a single chart and n≥1, constants 0<c≤C satisfy c|v|²≤g_x(v,v)≤C|v|² on K. Dimension zero is vacuous.

Examined dependency IDs: prop-coordinate-criterion-for-a-riemannian-metric, def-pointwise-norm-and-angle-from-a-riemannian-metric, thm-finite-products-of-compact-spaces, cor-heine-borel-in-the-product-topology, thm-extreme-value-metric, thm-compactness-agrees-with-metric-compactness.

Read all four compactness and EVT supplier proofs. The unit sphere is closed bounded and nonempty for n>=1; finite-product compactness and the topology/metric identification permit the positive continuous quadratic form to attain its extrema on K times the sphere. The attained minimum is strictly positive. Homogeneity supplies the stated bounds for every vector, including zero. Empty K and dimension zero are separately covered; no eigenvalue-continuity theorem or infinite choice is used.

Receipt: 2ebccfb09b76f848b9e71ecbc1db6b8bf00e1861fad8e6eeead79736d649c532. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve — accept

Claim/conventions: Any two points in a connected nonempty smooth manifold can be joined by a finite piecewise C¹ curve.

Examined dependency IDs: def-piecewise-c-one-curve-on-a-manifold, def-connected-space.

Fix p. Finite coordinate-segment reachability is an equivalence relation using finite concatenation and reversal. Each class is open because coordinate balls, or relative half-balls, are convex. Its complement is the union of the other open classes; the published separation definition forces the nonempty class to be all of connected M. No infinite chart selection occurs.

Receipt: 90e98c8c1b9ea01b0d14a53abd8b0689a8b882ab2289ea74670a988aded631f4. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-riemannian-distance-on-a-connected-manifold — accept

Claim/conventions: On connected M define d_g(p,q)=inf{L_g(γ): γ piecewise C¹ from p to q}. The family is nonempty, finite-valued and bounded below by zero.

Examined dependency IDs: def-riemannian-speed-and-length, lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve, cor-cauchy-reals-lub-complete.

For every p,q the finite-piece reachability result supplies a curve, whose speed has a finite nonnegative integral. The nonempty set of such lengths has infimum by applying the read least-upper-bound property to its negatives. Empty M has no pairs and gives the empty function. No sequence of minimizing curves is selected.

Receipt: f179bc26d2ba495d15e01c538bd55ee64e5c93cd57d24f2d2b524798ba50a4a7. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-riemannian-distance-is-a-metric — accept

Claim/conventions: d_g is a finite metric on connected M.

Examined dependency IDs: def-riemannian-distance-on-a-connected-manifold, prop-length-is-additive-under-concatenation-and-invariant-under-reversal, lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric, thm-scalar-and-vector-line-integral-estimates, thm-newton-leibniz-with-interior-derivative, thm-heine-borel-characterisation-r.

For p distinct from q take a closed coordinate ball (relative half-ball if needed) of radius r centered at p, inside the chart and missing q. The first exit is the minimum of the nonempty closed preimage of the complement of its open ball; compact closure keeps the limiting point in the chart and at coordinate radius r. Integrating the local lower norm bound along the restricted curve gives at least sqrt(c)r: test its coordinate displacement against its unit direction and apply scalar Newton–Leibniz plus the read line-integral estimate. Constants, reversal, and two epsilon-competitive curves prove the remaining axioms using only finite choices. Empty M is vacuous; nonempty connected dimension zero is a singleton. Datar 19.1.1 full proof read for comparison; the scaffold uses coordinate bounds and does not import geodesic prerequisites.

Receipt: 1e11385641615c0ebb23d6333b057c5f0d12937014e9dda7d394c58233eac7a5. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-the-riemannian-distance-topology-is-the-manifold-topology — accept

Claim/conventions: The metric topology of d_g equals the manifold topology.

Examined dependency IDs: thm-riemannian-distance-is-a-metric, lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric.

At p choose a compactly contained coordinate ball. The checked first-exit lower bound forces its sqrt(c)r metric ball to stay inside; straight segments in a smaller convex coordinate ball have length at most sqrt(C) times coordinate displacement. These give the two neighborhood-basis inclusions, also in relative half-balls. No minimizing curves are required. Read complete Datar 19.1.2 for comparison; its geodesic argument and its loose epsilon estimate are not suppliers for this direct local comparison proof.

Receipt: 0045de5cb4091b6b87bc3ff91d51843ce4d439aaf2d1e3b8f7c10e63c77f88df. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-length-dominates-endpoint-distance — accept

Claim/conventions: For any competitor γ, d_g(γ(a),γ(b))≤L_g(γ).

Examined dependency IDs: def-riemannian-distance-on-a-connected-manifold.

The length of the given curve belongs to the nonempty endpoint competitor set. Its infimum is a lower bound for every member, which is the asserted inequality. No existence of a minimizer is asserted.

Receipt: f5cdbcd1a8a76a4363a2ebbf545c8f0ab39076d49461e00ed2fdfbedbe7185df. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-a-smooth-map-with-pointwise-operator-norm-at-most-c-is-c-lipschitz-for-riemannian-distance — accept

Claim/conventions: For connected Riemannian M,N, smooth F:M→N and finite c≥0 with |dF_pv|≤c|v| for every p,v, d_h(Fp,Fq)≤c d_g(p,q).

Examined dependency IDs: def-riemannian-distance-on-a-connected-manifold, def-riemannian-speed-and-length, lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve, prop-length-dominates-endpoint-distance, thm-substitution-with-riemann-integrable-inner-derivative.

The chain rule sends each closed C1 piece to a C1 piece, with target speed at most c times source speed. Integral monotonicity gives the same length bound and target endpoint distance is bounded by that length. Taking the infimum over source curves gives the assertion for c>0; for c=0 any single competitor already gives target distance zero.

Receipt: f14c68ee9c68da4680e831ce98ae40b5ee9bd853212d91d0e073a29b1b7b71ea. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### cor-riemannian-isometries-preserve-length-and-distance — accept

Claim/conventions: Riemannian isometries preserve lengths and distances on each connected component.

Examined dependency IDs: def-riemannian-isometry-and-local-isometry, prop-a-smooth-map-with-pointwise-operator-norm-at-most-c-is-c-lipschitz-for-riemannian-distance, def-riemannian-speed-and-length, lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve, prop-riemannian-isometries-form-a-group-and-local-isometries-are-local-diffeomorphisms.

Pullback equality preserves speed on every curve piece. A diffeomorphism and its inverse send connected components bijectively to components. Those components are open submanifolds: convex coordinate neighborhoods are connected and lie in their component. Apply the checked c=1 distance estimate on each component to both inverse maps. This yields equality of distances as well as of lengths.

Receipt: a86327c93d62b2b0a5aefe1fcbed60f0b08ab98ac887379e574eec89c4508785. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-extended-riemannian-distance-on-a-disconnected-manifold — accept

Claim/conventions: On arbitrary M take the componentwise Riemannian distance within each component and +∞ between distinct components. This is an extended metric, not a finite-valued metric; inf ∅=+∞.

Examined dependency IDs: thm-riemannian-distance-is-a-metric, lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve.

Each component is an open connected submanifold by convex coordinate neighborhoods and carries the checked finite metric. Continuous interval curves stay in one component, so between distinct components the competitor set is empty. The extended triangle inequality holds because a cross-component left side forces at least one cross-component right summand. Symmetry and separation are inherited; the empty manifold is harmless.

Receipt: 997da156fcc79344f3df27661b32b2ec73e02767706d0d0ee92d1ea8fd23dc47. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-distance-from-a-point-to-a-subset — accept

Claim/conventions: For A⊂M define d_g(x,A)=inf_{a∈A}d_g(x,a), with inf ∅=+∞. In a component C meeting A this equals the finite distance to A∩C.

Examined dependency IDs: def-extended-riemannian-distance-on-a-disconnected-manifold, cor-cauchy-reals-lub-complete.

If A meets the component of x then the distance set has a finite member and is nonnegative, so its real infimum exists; adding infinite values from other components does not affect it. If A misses that component every value is infinite, including the explicitly stated empty-set convention.

Receipt: 87a4e027a00f6324b41d9a4d53401a5dea17f9cdd93ef566996f6edec6954a89. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-distance-to-a-nonempty-subset-is-one-lipschitz — accept

Claim/conventions: For A nonempty in connected M, distance to A is finite and 1-Lipschitz. More generally the same holds on C when A∩C≠∅.

Examined dependency IDs: def-distance-from-a-point-to-a-subset, thm-riemannian-distance-is-a-metric.

For x,y in the same component meeting A, all needed infima over A intersect that component are finite. The triangle inequality for each a gives distance(x,A)<=d(x,y)+distance(y,A) after infimizing, and exchanging x,y proves the absolute difference bound. Components missing A have only the declared extended value; no infinite subtraction is used.

Receipt: 7a9f6bd21bb0206230dd4c31645dc9171c570a88fed206a58f994c24702bee1e. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-riemannian-volume-density — accept

Claim/conventions: The Riemannian density is μ_g=√det(G_x)|dx¹⋯dxⁿ|. For n=0 take det(empty)=1, so each point has weight one; no orientation is needed.

Examined dependency IDs: prop-coordinate-criterion-for-a-riemannian-metric, def-density-bundle-and-smooth-density, lem-the-riemannian-volume-density-is-coordinate-independent.

Read the density definition and its exact transition law. The metric coordinate rule gives sqrt(det G_y)=abs(det(dx/dy))sqrt(det G_x), precisely the coefficient law for the same intrinsic density. Positive square root is smooth since the determinant is positive. The named next lemma discharges gluing; the empty determinant convention assigns weight one independently of the zero-dimensional orientation. Only the density fibre/transition interface is used, not an arbitrary choice of atlas.

Receipt: 7877e99e0880b4da907416d146578c6be61174623359f7a3b3c565dcced84e2f. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### lem-the-riemannian-volume-density-is-coordinate-independent — accept

Claim/conventions: The local Riemannian densities glue to a positive smooth density.

Examined dependency IDs: def-riemannian-volume-density, prop-coordinate-criterion-for-a-riemannian-metric, def-density-bundle-and-smooth-density.

Taking determinants of J-transpose G J gives the square of det J; positive square roots therefore produce its absolute value. Multiplying by the coordinate density frame cancels this transition factor, so the local sections agree. Smoothness and strict positivity are local and immediate from det G>0; no orientation or global chart selection is required.

Receipt: 7877e99e0880b4da907416d146578c6be61174623359f7a3b3c565dcced84e2f. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-riemannian-volume-form-on-an-oriented-manifold — accept

Claim/conventions: On oriented M the Riemannian volume form is vol_g=√det G dx¹∧⋯∧dxⁿ in positive charts when n≥1. In dimension zero it is the supplied orientation sign ±1 at each point; μ_g=|vol_g|.

Examined dependency IDs: lem-the-riemannian-volume-density-is-coordinate-independent, def-oriented-smooth-manifold-and-oriented-chart.

The read manifold orientation definition supplies a positive determinant ray. In positive charts transition determinants are positive, so the density calculation also glues the top forms. Absolute value gives mu_g. In dimension zero the supplied sign, rather than the unique empty frame, correctly distinguishes the two orientations.

Receipt: 63ed4489e671c69a7ac47a745b89175f0781b2ce850390df1da5a925dc6ad1e9. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form — accept

Claim/conventions: vol_g is the unique positive unit section of Λ^n T*M for the chosen orientation.

Examined dependency IDs: def-riemannian-volume-form-on-an-oriented-manifold, prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles.

In an oriented orthonormal coframe the normalized determinant exterior metric gives norm one to its top wedge, whose coordinate expression is the stated volume form. Every top form is a unique scalar multiple; positive orientation and unit norm force scalar one. In dimension zero the unit generator is the chosen sign. Only finite pointwise or local bases are used.

Receipt: d8cc0a0441cee3fa00c389af2896808b8991d2e568b1d60b20351222d1885460. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-riemannian-volume-of-a-compactly-supported-smooth-density — owner-repaired; final-gate route

Claim/conventions: Under countable choice, for smooth compactly supported f define ∫_M f μ_g by the earlier density integral. More generally a compactly supported signed smooth density σ has its existing intrinsic integral, independently of g. Countable choice is inherited from the chart-partition construction in def-integral-of-a-compactly-supported-smooth-density; no choice-free existence assertion is made.

Examined dependency IDs (owner interface): lem-the-riemannian-volume-density-is-coordinate-independent, def-integral-of-a-compactly-supported-smooth-density, thm-density-integration-is-defined-without-an-orientation, def-countable-choice.

Current item-object SHA256 f7b1710cbe9bd6283fb5a96b4cdbe7ce99df0e2fb883f24ff289a3797f31e476 matches research/phase-2-catchup-24-owner-step3-dg-astra.md, section for this ID. Owner-repaired content is unchanged and receives no new mathematical adjudication. Current engine status: {"closed":false,"reason":"def-riemannian-volume-of-a-compactly-supported-smooth-density: current item audit required"}. Route to final mechanical gate; owner must reconcile any missing engine receipt. No reviewer acceptance or owner override fabricated. Next: volume-measure item.

### prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density — accept

Claim/conventions: Under countable choice, μ_g defines a compact-finite, locally finite, sigma-finite Radon Borel measure vol_g(A). Its completion has a separately specified completed domain. Smooth compact-support integrals agree with the earlier density integral; metric balls are Borel.

Examined dependency IDs: lem-the-riemannian-volume-density-is-coordinate-independent, thm-the-riemannian-distance-topology-is-the-manifold-topology, def-riemannian-volume-of-a-compactly-supported-smooth-density, thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure, thm-density-measure-integration-agrees-with-smooth-density-integration, def-countable-choice, thm-density-measure-is-independent-of-the-chart-gluing, cor-second-countable-lch-locally-finite-borel-measures-are-regular, thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact, lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions, lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals, thm-chart-gluing-defines-a-countably-additive-borel-density-measure, lem-measurable-density-chart-integrals-agree-on-overlaps.

Read the full positive-density Radon and smooth-integral agreement proofs, chart-gluing and overlap proofs, the second-countable regularity reduction and its sigma-compact-open proof, and the exact half-space and Darboux-bridge clauses. Positive smooth metric coefficients are locally bounded; compact finite covers give compact finiteness, and the countable base gives sigma-finiteness. The declared CC covers chart gluing, summable regularity approximations and completion. Completion remains a separate domain. Smooth compact support leaves finitely many chart terms; the stated bridge identifies their integrals. Each finite-radius component ball is open in an open component and hence Borel. Dimension-zero weights are one. Owner-repaired integral definition is consumed at its stated CC interface without re-adjudication.

Receipt: 039118f3751dac92566327c7efb2432c2a566e9e9f457bec4aab0442b272b02d. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### def-riemannian-divergence — accept

Claim/conventions: Define div_g X locally by L_X vol_g=(div_g X)vol_g. On nonorientable M choose local orientations: reversing one multiplies both sides by −1, so the scalar glues. Equivalently it is the Lie derivative of the positive density divided by that density.

Examined dependency IDs: def-riemannian-volume-form-on-an-oriented-manifold, lem-the-riemannian-volume-density-is-coordinate-independent, def-divergence-relative-to-a-volume-form, prop-divergence-is-well-defined-and-has-the-coordinate-formula, lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary.

Read the full volume-relative divergence and boundary Cartan supplier proofs. Locally a nonvanishing top form spans the top-degree fibre, so its Lie derivative has a unique smooth scalar coefficient. Two local metric volume forms differ by a locally constant sign; their Lie derivatives differ by that same sign, making the quotients agree. The density interpretation uses this identical absolute-determinant local transformation law. Boundary derivatives are local-extension derivatives, not a presumed two-sided internal flow.

Receipt: 9fb190ba9017953861d41a2ce8c8e2b5b20e54f9596a43730d633c4dd72fd80f. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-coordinate-formula-for-riemannian-divergence — accept

Claim/conventions: div_g X=(det G)^{-1/2}∂_i((det G)^{1/2}X^i).

Examined dependency IDs: def-riemannian-divergence, prop-divergence-is-well-defined-and-has-the-coordinate-formula.

The read coordinate divergence proof applies to the nowhere-zero coefficient rho=sqrt(det G). Its contraction and exterior differentiation signs give the positive sum of partial_i(rho X^i). Dividing by rho yields the displayed scalar; locally constant orientation changes cancel. The empty sum for dimension zero is zero and boundary local derivatives are covered.

Receipt: 7b60b430d76f942681bce78ab5bb1a497508b48c8556c5caef3fe437133e9af1. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-riemannian-divergence-theorem — owner-repaired; final-gate route

Claim/conventions: Assume countable choice (AC_omega). On an oriented Riemannian manifold with boundary of dimension n≥1 and a smooth compactly supported vector field X, ∫_M div_g X vol_g=∫_{∂M}g(X,ν)vol_{∂g}, with outward unit normal ν and outward-normal-first boundary orientation.

Examined dependency IDs (owner interface): prop-coordinate-formula-for-riemannian-divergence, prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form, prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions, thm-general-stokes-theorem, thm-divergence-theorem-relative-to-a-volume-form, def-induced-boundary-orientation, prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane, prop-the-gradient-is-characterized-by-inner-products, prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles, def-countable-choice.

Current item-object SHA256 cf71d7bcd2a21656d29da4474e2bdeb8cf0f76c0931876a8fb76810a85b28f85 matches research/phase-2-catchup-24-owner-step3-dg-astra.md. No new mathematical adjudication of unchanged owner-repaired content. Current engine status: {"closed":false,"reason":"thm-riemannian-divergence-theorem: current item audit required"}. Route directly to final mechanical gate; owner must reconcile the missing receipt. No owner override used. Next: Hodge-star definition.

### def-riemannian-hodge-star — accept

Claim/conventions: On an oriented Riemannian n-manifold, *:Λ^kT*M→Λ^{n−k}T*M is characterized by α∧*β=⟨α,β⟩vol_g for every α,β of degree k. This is the untwisted, orientation-dependent convention.

Examined dependency IDs: prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles, prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form, thm-hodge-star-is-a-smooth-bundle-isomorphism, lem-wedge-monomials-in-a-dual-basis-form-a-basis.

With the degree convention 0<=k<=n, the complementary increasing-wedge basis gives a nondegenerate pairing between degrees k and n-k. Thus the metric pairing and chosen volume form determine a unique star. In an oriented orthonormal coframe its signed-complement formula satisfies the equation; local smooth Gram–Schmidt gives smoothness and frame independence by uniqueness, discharging the named next theorem. In dimension zero star is the orientation sign. Untwisted star explicitly requires orientation.

Receipt: c241d2f015a9779f9fdef49b4a0a9e92e1db9b80fd990c67733d12b39c4e954d. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### thm-hodge-star-is-a-smooth-bundle-isomorphism — accept

Claim/conventions: The Hodge star exists uniquely and is a smooth bundle isomorphism.

Examined dependency IDs: def-riemannian-hodge-star, lem-wedge-monomials-in-a-dual-basis-form-a-basis.

For each increasing I, choose the complementary wedge with the permutation sign making e^I wedge star(e^I) the positive volume wedge. Pairing with e^J gives zero unless J=I, then one, verifying the full defining equation by bilinearity. Nondegeneracy forces uniqueness and overlap agreement. The matrix is a signed permutation and is smooth in a locally constructed smooth orthonormal coframe; dimension-zero multiplication by the orientation sign is smooth on the discrete manifold. No global frame selection is needed.

Receipt: c241d2f015a9779f9fdef49b4a0a9e92e1db9b80fd990c67733d12b39c4e954d. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-hodge-star-squared-sign — accept

Claim/conventions: On k-forms, **=(-1)^{k(n−k)}id.

Examined dependency IDs: thm-hodge-star-is-a-smooth-bundle-isomorphism.

Composing the complementary-wedge signed permutations exchanges the two blocks of sizes k and n-k. Their sign product is (-1) raised to k(n-k), and the complement operation returns I. Linearity proves the identity on every form; k=0, k=n and n=0 all give sign plus one.

Receipt: 0fc2146374ac458246bda8f7b562aff63efa1fbf41a6d7e651b7080ed53ef82e. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### prop-riemannian-inner-product-of-compactly-supported-forms — owner-repaired; final-gate route

Claim/conventions: Under countable choice, on an oriented Riemannian manifold, (α,β)=∫_M α∧*β is a positive-definite inner product on compactly supported real smooth k-forms, 0≤k≤dim M.

Examined dependency IDs (owner interface): thm-hodge-star-is-a-smooth-bundle-isomorphism, def-riemannian-volume-of-a-compactly-supported-smooth-density, prop-positive-compactly-supported-top-forms-have-positive-integral, def-countable-choice.

Current item-object SHA256 8b23c5bcab1fd4b846cadc11c7acfaa09f281d3f3863ecb615d37c5cc76cf308 matches research/phase-2-catchup-24-owner-step3-dg-astra.md. No new mathematical adjudication of unchanged owner-repaired content. Current engine status: {"closed":false,"reason":"prop-riemannian-inner-product-of-compactly-supported-forms: current item audit required"}. Route directly to final mechanical gate; owner must reconcile the missing receipt. No owner override used. Next: rem-the-codifferential-and-hodge-theory.

### rem-the-codifferential-and-hodge-theory — accept

Claim/conventions: The codifferential, its analytic adjoint interpretation, Laplacian, harmonic theory and Hodge decomposition belong to later Hodge/PDE work. No such result is assumed here.

Examined dependency IDs: prop-hodge-star-squared-sign.

This is a scope boundary and asserts no codifferential, PDE, harmonic or Hodge decomposition theorem. The preceding algebraic star-square result is adequate context. The current owned scope decline retains those analytic topics for later work without using them here.

Receipt: a05b42f980805bebd50467ec7c752d77e0f370c6cc1ab8c784179e50a2ff77b7. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### fs-the-pullback-of-a-riemannian-metric-by-every-smooth-map-is-a-riemannian-metric — accept

Claim/conventions: False claim: every smooth pullback of a Riemannian metric is Riemannian.

Examined dependency IDs: def-pullback-riemannian-metric, prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions.

For the constant smooth map of the real line, the differential is zero and the pulled-back quadratic form vanishes on the nonzero coordinate tangent vector. This violates positive definiteness exactly as the checked immersion criterion predicts.

Receipt: 6b936e6e0a942d949f21fc299ae7754fe6eb624134922957e47739136e6ac3ab. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### fs-every-riemannian-manifold-has-finite-distance-between-points-in-different-components — accept

Claim/conventions: False claim: different components always have finite Riemannian distance.

Examined dependency IDs: def-extended-riemannian-distance-on-a-disconnected-manifold.

The finite disjoint union of two Euclidean lines is a smooth Riemannian manifold with two open components. The connected image of an interval cannot meet both. Thus the cross-component competitor family is empty and the declared extended distance is infinite.

Receipt: 63784a8517e352df4425fb59e7f8fd6438c55eda4b9077028dce3aef508307d4. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### fs-riemannian-distance-is-defined-by-the-length-of-a-unique-shortest-curve — accept

Claim/conventions: False claim: distance is defined by a unique shortest curve. Both existence and uniqueness can fail.

Examined dependency IDs: def-riemannian-distance-on-a-connected-manifold, lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric, prop-length-is-additive-under-concatenation-and-invariant-under-reversal, thm-scalar-and-vector-line-integral-estimates, thm-newton-leibniz-with-interior-derivative.

Punctured-plane competitors satisfy integral(norm velocity)>=integral(x derivative)=2. Equality makes the continuous nonnegative difference vanish on every smooth piece, forcing y derivative zero and x derivative nonnegative; continuity then forces a passage through the omitted origin. The two straight pieces and radius-epsilon semicircle have length 2+(pi-2)epsilon, proving infimum 2. On the circle a finite subdivision into angle charts, with successive angles adjusted by integer multiples of 2pi, gives a piecewise C1 lift. An antipodal lift endpoint differs by an odd multiple of pi, so its integral absolute derivative is at least pi; the two distinct semicircles attain pi. Only a finite cover and finite adjustments are needed.

Receipt: da28e128b4cb679eefaf382ea8f3a462b9dd5b2e489721d05362cae46562e357. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### fs-the-riemannian-volume-form-exists-on-every-riemannian-manifold — accept

Claim/conventions: False claim: every Riemannian manifold has an ordinary positive global Riemannian volume form.

Examined dependency IDs: def-riemannian-volume-form-on-an-oriented-manifold, thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form.

The quotient by (t,s) to (t+1,-s) has injective strip charts of t-width below one; integer-affine transitions are smooth and a rational box base is countable. Distinct orbits have disjoint small neighborhoods since only finitely many translates intersect bounded boxes. The Euclidean tensor and absolute density descend by the explicit transition matrices. An ordinary nowhere-zero top form pulls back to f(t,s)dt wedge ds with f(t+1,-s)=-f(t,s); on s=0 the intermediate value theorem forces a zero. This direct obstruction is choice-free: the CC-dependent orientation-to-top-form direction of the read published equivalence is not used.

Receipt: d85fab5b7b1b1f390e4f55fe5d95da324bd4d7c6e6fce059dc2187302e1a20ba. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### fs-the-distance-function-is-smooth-on-all-of-m-times-m — accept

Claim/conventions: False claim: Riemannian distance is smooth everywhere on M×M.

Examined dependency IDs: def-riemannian-distance-on-a-connected-manifold, thm-scalar-and-vector-line-integral-estimates, thm-newton-leibniz-with-interior-derivative.

Newton–Leibniz and the integral absolute-value bound give length at least abs(x-y) on the Euclidean line; the affine segment attains it. Hence restricting distance to y=0 gives abs(x), whose left and right derivatives at zero are -1 and 1. A smooth two-variable distance would have a differentiable restriction, contradiction.

Receipt: 186af136935f2e1a4d25ac47e9d5b29ea1fbc650996e05727346253dcff5b95a. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### fs-the-hodge-star-is-defined-without-an-orientation — accept

Claim/conventions: False claim: the ordinary Hodge star requires no orientation.

Examined dependency IDs: def-riemannian-hodge-star, thm-hodge-star-is-a-smooth-bundle-isomorphism.

The defining equation at alpha=beta=1 forces star(1) to equal the chosen volume form. On the Euclidean line the two orientations give dx and -dx. Both have the same metric, so it does not determine the ordinary untwisted star; the stated distinction from a twisted convention is precise.

Receipt: e1035a2f006fedd06a1db5c59e1a00aa4b99ed10e461cf8b4dac7a6e7a674cef. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-the-euclidean-metric-and-its-musical-maps — accept

Claim/conventions: For Euclidean g, v♭=Σv_i dx^i, α♯=Σα_i∂_i, grad f=Σ∂_if ∂_i.

Examined dependency IDs: prop-coordinate-criterion-for-a-riemannian-metric, thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms, prop-the-gradient-is-characterized-by-inner-products.

In Euclidean coordinates G and its inverse are the identity. Flat lowers a vector coefficient without changing it; sharp raises a covector coefficient without changing it; applying sharp to df gives the stated gradient. Empty sums handle dimension zero.

Receipt: 5e0575b0c0f92832093f18ac659be58c41a60b52cda8daff539b0d7b3d2e1a62. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-the-round-metric-on-the-sphere-as-an-induced-metric — accept

Claim/conventions: The unit sphere has the round metric induced by its Euclidean inclusion.

Examined dependency IDs: prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions, prop-coordinate-criterion-for-a-riemannian-metric, ex-sphere-as-a-regular-level-set, ex-the-tangent-space-of-the-sphere-from-curve-velocities.

Read the explicit sphere regular-level and tangent-velocity proofs: tangent vectors identify with the ambient orthogonal hyperplane and inclusion has injective differential. The pullback criterion therefore gives a metric. Differentiating the stated spherical coordinates gives squared coordinate lengths 1 and sin(theta)^2 and zero cross term. Positive definiteness fails for that coordinate expression only where the chart itself fails, not for the intrinsic tensor.

Receipt: 8784abe48687d975cb6b4e867a4c8d1a61a9105f77a4deacbb9f047bf62f3d99. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-the-product-riemannian-metric — accept

Claim/conventions: The product metric is π_M*g+π_N*h, represented by diag(G,H).

Examined dependency IDs: prop-coordinate-criterion-for-a-riemannian-metric, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-pullback-riemannian-metric, prop-pullback-of-covariant-tensors-is-smooth-and-functorial.

Read the complete canonical product-smooth-structure proof for the default boundaryless convention. In product charts tangent pairs split and the two projection pullbacks give block diagonal G,H. Smoothness and symmetry are immediate; a nonzero pair has a nonzero component whose squared norm is positive. This is a sum of two covariant pullbacks, not a tensor-product metric on TM tensor TN.

Receipt: a0992fcd1b61e5ff2474dbfa0a3aeba781abd393ccdb8b74a870e3f52ec4a800. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-a-conformal-metric-on-the-plane — accept

Claim/conventions: For g=e^{2u}(dx²+dy²), grad_g f=e^{−2u}(f_x∂_x+f_y∂_y) and μ_g=e^{2u}|dxdy|.

Examined dependency IDs: def-conformal-equivalence-of-riemannian-metrics, def-riemannian-gradient, def-riemannian-volume-density, thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms.

The smooth conformal factor is positive. The inverse two-by-two matrix is exp(-2u) times identity and the determinant is exp(4u), whose positive square root is exp(2u). Substitution into sharp(df) and the density definition gives both claimed formulas.

Receipt: f843f9a65991d426675390b3a8b5d8cdffab88259e7dbbb6875160276550c4fd. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-the-hyperbolic-upper-half-space-metric — accept

Claim/conventions: On {y>0}⊂R^n, g=y^{−2}(Σ_{i<n}dx_i²+dy²) is a smooth Riemannian metric with density y^{−n}|dx_1⋯dx_{n−1}dy|.

Examined dependency IDs: prop-coordinate-criterion-for-a-riemannian-metric, def-riemannian-volume-density.

For the displayed coordinates (x_1,...,x_{n-1},y), n>=1, the coefficient matrix is y^(-2) times identity. On y>0 it is smooth positive definite with determinant y^(-2n); its positive square root is y^(-n). No curvature, geodesic or completeness theorem is part of the claim.

Receipt: d01357070c29aaa3c4896f4810e08c786655b1e02a63730119bc84834b7c164a. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-the-flat-torus-metric-from-periodic-euclidean-coordinates — accept

Claim/conventions: Periodic Euclidean coordinates define the flat metric on (R/Z)^n.

Examined dependency IDs: prop-coordinate-criterion-for-a-riemannian-metric.

Boxes of coordinate widths below one project injectively to the integer-translation quotient, with open images. Distinct orbits can be separated by small boxes because only finitely many integer translates meet any bounded box; projected rational boxes give a countable base. Transition derivatives are identity, so the Euclidean matrices glue to a locally Euclidean metric. This supplies the particular smooth quotient directly, including the one-point n=0 case, without a general quotient theorem.

Receipt: 67844d755dd9f6eb9ce2e92ced3afca50e1b527dfb1563c4216ca6f3f47a4d73. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-length-and-distance-on-the-circle — accept

Claim/conventions: On the unit circle, distance is the smaller angular separation; antipodes have two distinct shortest semicircles.

Examined dependency IDs: def-riemannian-speed-and-length, def-riemannian-distance-on-a-connected-manifold, thm-newton-leibniz-with-interior-derivative, ex-the-round-metric-on-the-sphere-as-an-induced-metric.

Compactness yields a finite subdivision into local angle charts. Adjust successive lifts by a unique integer multiple of 2pi to agree at joins, giving a piecewise C1 lift with speed abs(theta derivative). Newton–Leibniz bounds its length below by its absolute endpoint lift difference. The possible differences are the endpoint angle difference plus 2pi times an integer, whose least absolute value is the smaller angular separation. The corresponding circular arc attains it; for antipodes the two opposite semicircle images are distinct minimizers.

Receipt: 547a2a330ff08ead4bb04522183793ce8f5174f27bcf79afdf25dfb6ae4e28af. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-a-riemannian-distance-with-no-cross-component-finite-value — accept

Claim/conventions: On two disjoint Euclidean lines the extended distance between the two components is +∞.

Examined dependency IDs: def-extended-riemannian-distance-on-a-disconnected-manifold, thm-newton-leibniz-with-interior-derivative.

The two lines are disjoint open-and-closed components of a smooth manifold, so every interval curve stays in one. Cross-component distance is the stipulated infimum of an empty family, infinity. Within a line the integral endpoint bound and the affine segment give ordinary absolute difference.

Receipt: 77854b9b3dcf45df128f12b0333df62c39b30433bfcfaffbd1a88e1dc1ff2b00. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-volume-density-in-polar-coordinates — accept

Claim/conventions: The Euclidean plane has density r|dr dθ| and positive-oriented volume r dr∧dθ on polar charts r>0.

Examined dependency IDs: def-riemannian-volume-density, lem-the-riemannian-volume-density-is-coordinate-independent, def-riemannian-volume-form-on-an-oriented-manifold, prop-coordinate-criterion-for-a-riemannian-metric.

On a genuine polar chart with r>0 and an injective angular interval, differentiation gives the metric matrix diag(1,r^2). Its determinant square root is r. The coordinate Jacobian from (r,theta) to (x,y) is r>0, so the same formula without absolute frame signs is the positive-oriented volume form. The origin is correctly excluded.

Receipt: b80f3b47f63eddcd76022f70d478832bad2732a3717ef21620d66641d178f884. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-hodge-star-on-euclidean-three-space — accept

Claim/conventions: In standard oriented Euclidean R³: *1=dx∧dy∧dz, *dx=dy∧dz, *dy=dz∧dx, *dz=dx∧dy and **=id in all degrees.

Examined dependency IDs: thm-hodge-star-is-a-smooth-bundle-isomorphism, prop-hodge-star-squared-sign.

With the standard positive volume dx wedge dy wedge dz, complementary wedges give all displayed signs: star(dy)=dz wedge dx and star(dx wedge dz)=-dy. The exponent k(3-k) is even for k=0,1,2,3, so star squared is identity in every available degree.

Receipt: e74677e0ff5f18996fd04195ed112ac3b3e2be69a4708ca665b353a900aa81d1. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### ex-divergence-in-polar-coordinates — accept

Claim/conventions: In plane polar coordinates div_g(X^r∂_r+X^θ∂_θ)=r^{−1}∂_r(rX^r)+∂_θX^θ.

Examined dependency IDs: prop-coordinate-formula-for-riemannian-divergence, ex-volume-density-in-polar-coordinates.

The polar metric has sqrt(det G)=r, so the general divergence formula is (partial_r(r X^r)+partial_theta(r X^theta))/r. Since r is independent of theta, this is the claimed expression. The unit angular vector is r^(-1)partial_theta, so its physical coefficient is r X^theta as recorded. The formula is on r>0 polar charts.

Receipt: 6032a85ca810777db4dccdc8076393d5bec13643c14430606c23c6cb1d275d56. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.

### cex-a-degenerate-pullback-metric-under-a-constant-map — escalate

Claim/conventions: The pullback of dx² by a constant map from a positive-dimensional manifold is zero and not Riemannian.

Examined dependency IDs: def-pullback-riemannian-metric, prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions, def-smooth-manifold, def-topological-manifold-without-boundary, def-riemannian-metric-and-riemannian-manifold.

Exact unresolved convention: the statement says every constant map from a positive-dimensional manifold has a non-Riemannian zero pullback, but def-topological-manifold-without-boundary explicitly permits the empty n-manifold for every n. On its unique map to R the zero tensor is vacuously positive definite. Read both manifold definitions and the full owned pullback/positivity contracts; this is a repository-convention issue, not unfamiliar mathematics, so no external retrieval is needed to establish it. Owner action: specify a nonempty source (or the concrete source R) and reconcile the changed claim with current scope/plan copies before the final gate. The concrete intended nonempty example is elementary, but silently restricting a currently approved claim would omit its empty-source case. No claim or owner decision changed.

Receipt: 3040a76f7d2583cb42f6eb401d2e4410034f3c9edc0a586a6c645d0538aab002. No further mathematical recheck of unchanged decided inputs. Next: next prerequisite-ordered item.


## Published assumption debt for canonical-ledger reconciliation

Two further confirmed interface defects were encountered in the length prerequisites: `items/thm-continuous-implies-integrable.md` (Statement, F&A L3, proof 2.1 and final choice remark) and `items/thm-finitely-many-discontinuities-integrable.md` (Statement, F&A L4, proof 4.1 and final choice remark). Their unqualified statements/F&A consume `thm-heine-cantor-r`, whose statement assumes countable choice. Both remarks acknowledge the inherited choice cost, but the assumption and `def-countable-choice` dependency are absent from these contracts. This is a focused assumption-propagation finding, not a whole-closure certification. Reconcile with existing canonical ledger entries/index as audited/pending repair; no published repair or completed reconciliation is claimed here.

Recommended repair: preserve the choice-free conclusions by replacing the Heine–Cantor invocation with the finite all-neighborhood-cover argument recorded under `def-riemannian-speed-and-length`: on any compact real subset K, use all eligible relative balls with oscillation below eta on doubled balls, take a finite subcover, and use the minimum radius. This supplies uniform continuity without choosing a radius for every point. Apply the Riemann criterion and a uniform partition; for finitely many discontinuities retain the existing small exceptional-interval estimate. Published `thm-heine-borel-characterisation-r`, `thm-riemann-criterion`, and the existing finite partition/order suppliers suffice; no Phase-2 supplier is required. Alternatively explicitly propagate countable choice via published `def-countable-choice`, at the cost of strengthening assumptions. The owned length and reparametrization arguments use the recorded finite proof, so this published debt does not block them. Published files remain unchanged under this dispatch.

## Completion checkpoint

All assigned items are dispositioned; no unfinished mathematical audit remains with this reviewer. Next action is owner resolution of the two escalations, reconciliation of five owner receipts and shared plan/prose, then the final mechanical gate. Do not re-adjudicate unchanged accepted or repaired items. Reopen only decisions invalidated by an actual content/dependency change, preserving current escalations and owner decisions.
