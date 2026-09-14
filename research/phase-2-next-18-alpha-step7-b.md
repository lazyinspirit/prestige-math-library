# Step 7 adjudication — group b

Run: `phase-2-next-18`  
Coverage: batches 3 and 4  
Status: group adjudication and group-scoped checks complete

## Completed decisions

### `def-fiber-homology-local-system-of-a-serre-fibration`

- Rejection: the degree parameter was neither quantified nor restricted to the nonnegative range supplied by the transport dependency.
- Outcome: `confirmed_fatal` (`logic`).
- Pre-edit guard: `887151203825273f8dc62890df1c42da800b824b47172d5bb63fd55a8344e795`.
- Repair: quantified an integer `q >= 0` in the opening sentence of the definition; no dependency or page interface changed.
- Evidence read: the complete item and its declared use of `lem-fiber-transport-homology-and-cohomology-form-the-serre-local-systems`; the judge's objection is visible directly in the free displayed subscript and the cited degree restriction.
- Sources: no web source was needed for this syntactic/domain defect.
- Post-edit guard: `0d01008c40addff65c3d883d189d2b70bec28857981fd8675c4a358c169eeb3a`.
- Focused validation: `precheck.mts` reported `0 checked, 0 failing` (definitions carry no proof); the repository render check reported every frontmatter block and math span valid.
- Rejudge target: this item.

### `prop-degree-and-parity-criteria-for-serre-collapse`

- Rejection: facts F1/F2 attribute persistence of zero terms to the two Serre theorems although that clause is not in either supplied interface.
- Outcome: `confirmed_nonfatal`.
- Guard: `6e6c65658956337a7703c3b126317e0e362f78df379a54c303094f0992d9d9da`.
- Decision: F4 is a declared dependency whose exact stated role is persistence of zero terms, and step 1.1 cites F4 at the inference. Thus the mathematical endpoint argument and collapse conclusions are supported; only the redundant F1/F2 gloss is inaccurate.
- Evidence read: the complete proposition; the Statements and relevant Facts interfaces of `thm-homological-serre-spectral-sequence` and `thm-cohomological-serre-spectral-sequence`; the proposition's explicit F4 citation.
- Sources: no web source was needed because the decisive supplier is an exact local dependency.
- Repair/checks/rejudge: no content edit, no focused check, no rejudge target.

### `lem-multiplicative-filtered-cochains-induce-products-on-all-spectral-sequence-pages`

- Rejection: F3 attributes representative corrections and the kernel calculation to the next-page theorem although those details are absent from its displayed Statement.
- Outcome: `confirmed_nonfatal`.
- Guard: `6a0a3fb10029de7d24bdc97787a31007f4d893a055fb6bd41ddc227414991bdd`.
- Decision: the cited item's proof gives the correction in steps 1.2/4.1 and the exact kernel and independence in step 3.1. The consumer's step 5.1 reproduces the product calculation once that correction is chosen. This is an imprecise Facts gloss, not an unproved or false algebra-isomorphism.
- Evidence read: the complete consumer; the Statement and complete proof of `thm-the-next-page-is-the-homology-of-the-current-page`; the quotient-lifting interface of `lem-spectral-sequence-subquotient-and-local-lifting-calculus`.
- Sources: no web source was needed because the precise representative construction is proved in the local dependency.
- Repair/checks/rejudge: no content edit, no focused check, no rejudge target.

### `lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients`

- Rejection: F1 was said not to supply the connector/excision construction and attachment naturality needed for the `d_1` calculation.
- Outcome: `confirmed_nonfatal`.
- Guard: `b2ba090be22380f499ed3261ebf5ffd7edd67f05bdfa0a1b10a0e9eed863af67`.
- Decision: the supplier's proof explicitly constructs its cellwise isomorphism by the iterated pair connector, hemisphere excision, radial transport, and naturality (steps 2.1–3.1). This item's steps 2.1–4.1 then give the attaching contribution, reflection sign, deck-incidence formula, and descent. The omitted drawn square is a standard naturality diagram, not a missing premise or false identification.
- Evidence read: the complete item and the complete Statement/proof of `lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology`.
- Sources: no web source was needed because the claimed construction is explicit in the local supplier.
- Repair/checks/rejudge: no content edit, no focused check, no rejudge target.

### `cor-serre-finite-generation-torsion-and-p-primary-transfer`

- Rejection: F6's theorem assumes the Serre class condition also at `(0,0)`, which fails for the four positive-degree properties.
- Outcome: `confirmed_nonfatal`.
- Guard: `58662d68551871f7b228b1b90f63193860f2ab45eff08f3afa4a66a4826209d2`.
- Decision: step 2.1 supplies the exact positive-degree adaptation instead of relying on the theorem verbatim: `(0,0)` cannot support an outgoing first-quadrant differential and contributes only to `H_0`; stable pieces of each `H_i`, `i>0`, remain subquotients of positive-total-degree `E_2` terms. That elementary argument closes the sole hypothesis mismatch.
- Evidence read: the complete corollary and the exact Statement of `thm-first-quadrant-spectral-sequence-transfer-modulo-a-serre-class`.
- Sources: no web source was needed because the local proof explicitly supplies the strengthened positive-degree argument.
- Repair/checks/rejudge: no content edit, no focused check, no rejudge target.

### `prop-serre-transgression-agrees-with-the-relative-connecting-construction`

- Rejection: step 4.1 said an already-killed base-axis class obeys the transgression formula although `tau_n` is defined only on the survivor subgroup `D_n`.
- Outcome: `confirmed_fatal` (`logic`).
- Pre-edit guard: `c0f2dff441dc199d9d8495a720b99746fc9f6921a0fab3f80eda191d7d87d533`.
- Repair: restricted the zero-class edge case explicitly to `D_n` and stated that an earlier-killed class lies outside the domain, in agreement with F1 and the defining dependency.
- Evidence read: the complete proposition and complete `def-serre-edge-homomorphisms-and-transgression`, whose last paragraph explicitly excludes nonsurviving classes.
- Sources: no web source was needed because the contradiction is internal and exact.
- Post-edit guard: `e5980b82ce33eb0df6a3cbe8aeef2f2ba3b71fb62ae7470e202fd9d88232a50c`.
- Focused validation: `precheck.mts` passed the repaired direct proof (`1 checked, 0 failing`).
- Rejudge target: this item.

### `thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber`

- Rejection: A1/F2 falsely describe the homological UCT as AC-dependent and do not say why its free-chain hypothesis holds.
- Outcome: `confirmed_nonfatal`.
- Guard: `baed4f327c4c6405d8569bb22ea2771c5c2e8630150552090a6a795433b31d53`.
- Decision: `C_*(B;R)` is by definition the free right `R`-module on singular simplices in each degree, so the exact stated UCT hypothesis is immediate. The UCT dependency itself is choice-free; the item's stronger AC assumption is harmless. The proof's tensor/Tor and filtration conclusions remain valid.
- Evidence read: the complete theorem and the exact Statement of `thm-universal-coefficient-theorem-for-homology-over-a-pid`.
- Sources: no web source was needed because freeness follows directly from the local singular-chain construction and the citation mismatch is internal.
- Repair/checks/rejudge: no content edit, no focused check, no rejudge target.

### `thm-vector-bundles-glued-from-transition-cocycles`

- Rejection: the statement allowed an arbitrary cover, whose members need not be domains of local trivializations.
- Outcome: `confirmed_fatal` (`logic`).
- Pre-edit guard: `0d4630394e66d26c041be13a4d52ab36ba5694b2c3e366469de769f587b305bb`.
- Repair: required `(U_i)` to be an open cover. This is exactly the hypothesis needed for the quotient charts in step 2.1 to be bundle charts and for the saturated open-subspace quotient argument.
- Evidence read: the complete theorem and the local definition of a vector bundle cited in F1.
- Sources: no web source was needed because the failure and correction follow directly from the local-triviality definition.
- Post-edit guard: `da6db4e94849d03d76aa2d534d5875ee0a89b4ba80318b11e5f458a6f15b9f2f`.
- Focused validation: `precheck.mts` passed the repaired direct proof (`1 checked, 0 failing`).
- Rejudge target: this item.

### `def-pullback-vector-bundle-and-pullback-section`

- Rejection: the map `f:X -> Y` was not required to be continuous, so inverse images of trivializing opens need not be open.
- Outcome: `confirmed_fatal` (`logic`).
- Pre-edit guard: `4488ba47e0e28fe496f81f2af23e3fc7ab3e224ab788014ca5f2bf8b0df0a060`.
- Repair: required `f` to be continuous in the first sentence, making every displayed pulled-back chart a genuine local trivialization.
- Evidence read: the complete definition and its cited vector-bundle definition.
- Sources: no web source was needed because continuity is forced by the displayed local-triviality construction.
- Post-edit guard: `d085654fda7e9f8de26ee89e27c29fa4da588b482452a4be5f2b1626349f183a`.
- Focused validation: `precheck.mts` reported `0 checked, 0 failing` (definition, no proof).
- Rejudge target: this item.

### `thm-gysin-sequence-from-a-sphere-fiber-serre-spectral-sequence`

- Rejection: the item called `H^k(E) -> E_infinity^{k-n,n}` the supplied cohomological upper edge, whose actual target is the axis term `E_s^{0,k}`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `3b4188ccef9f79c39caba458c579e38697cfd7515c2ca1c249069553fe39b862`.
- Repair: defined `p_!` as the canonical quotient onto the stable top-row subquotient followed by orientation; corrected F4, naturality prose, and source notes to distinguish that quotient from the axis edge. The exact-sequence computation itself is unchanged.
- Evidence read: the complete theorem, the exact cohomological filtration statement, and complete `def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence`.
- Sources: no web source was needed because the conflicting map targets are explicit in the local definitions.
- Post-edit guard: `f6be73312ed42889a733bcb0d40902cf315ccc755d5fd712f424ca9d2f9847ee`.
- Focused validation: `precheck.mts` passed the repaired direct proof (`1 checked, 0 failing`).
- Rejudge target: this item.

### `def-real-and-complex-topological-vector-bundle`

- Rejection: the definition did not equip fibers with vector-space structures, making “fiberwise linear” ill-typed.
- Outcome: `confirmed_fatal` (`logic`).
- Pre-edit guard: `b84b513da78829cc3e86afb8d36a6488e089a6d4001b4b9ccf73b4a2408c7de4`.
- Repair: added an `F`-vector-space structure on every fiber and required each local chart to restrict to a linear isomorphism with `F^n`.
- Evidence read: the complete definition and the cited locally trivial fiber-bundle interface.
- Sources: no web source was needed because the original phrase was internally ill-typed.
- Post-edit guard: `e979e93845c68664fa086501e45e3d6922db3f0d6f6d5553f7ada130b1f4e36f`.
- Focused validation: `precheck.mts` reported `0 checked, 0 failing` (definition, no proof).
- Rejudge target: this item.

### `thm-homotopy-invariance-of-vector-bundle-pullback`

- Rejection: F3's countabilization is absent from the displayed interface of the cited principal-bundle classification theorem and that theorem has extra hypotheses.
- Outcome: `confirmed_nonfatal`.
- Guard: `e384c39936f99d86e8fef6c944001c8e40a14576ed180354f4c01fbab38d089d`.
- Decision: steps 1.1 and 2.1 of the cited item's proof explicitly construct the exact countable partition and disjoint open pieces from an arbitrary numeration under AC. The present theorem uses only that elementary construction, not the BG classification statement or its CGWH/CW hypotheses, then gives its own endpoint-pasting proof.
- Evidence read: the complete theorem and complete `thm-principal-bundles-are-classified-by-maps-to-bg`, especially proof steps 1.1 and 2.1.
- Sources: no web source was needed because the local published proof contains the construction verbatim.
- Repair/checks/rejudge: no content edit, no focused check, no rejudge target.

### `def-frame-bundle-and-associated-vector-bundle`

- Rejection: the associated-bundle proposition supplies only a locally trivial fiber bundle, not its fiberwise vector operations or linear charts.
- Outcome: `confirmed_fatal` (`logic`).
- Pre-edit guard: `1674a926764fd80515f2bff370e4329835f48b6f09880a7864d52bbe2e880687`.
- Repair: defined addition and scalar multiplication on each associated fiber using a common principal-frame representative, proved independence under changing that representative by a `GL_n` element, and stated that associated charts are fiberwise linear.
- Evidence read: the complete definition and the exact Statement of `prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback`.
- Sources: no web source was needed; the quotient calculation is elementary and complete.
- Post-edit guard: `0006dc85ccfa77753faeb340b1540df37dccb1fe657eeb2b1bb5661bf2188114`.
- Focused validation: `precheck.mts` reported `0 checked, 0 failing` (definition, no proof).
- Rejudge target: this item.

### `thm-numerable-vector-bundles-admit-bundle-metrics`

- Rejection: subordination supplies only existence of a chart containing each support, so assigning one chart to every partition index uses choice beyond F2.
- Outcome: `confirmed_nonfatal`.
- Guard: `51960c90627bce7a4add3d969fded7c6eba90d22ef668b4f61ce986d569a08b6`.
- Decision: AC is an explicit theorem hypothesis and step 3.1 cites A1, so the family choice is licensed. In addition, the proof of the cited partition theorem constructs its partition together with specific containing members `U_s`. Only the claim that AC is used “only through F2” is imprecise; the metric and its stated hypotheses are correct.
- Evidence read: the complete metric theorem, the exact subordinate-partition definition, and the complete proof of `thm-subordinate-partitions-of-unity-exist`.
- Sources: no web source was needed because the choice data are visible in the local dependencies.
- Repair/checks/rejudge: no content edit, no focused check, no rejudge target.

### `cex-serre-page-collapse-does-not-split-the-abutment`

- Rejection: step 2.1 identifies the fiber-inclusion image with `F_0`, while the edge proposition does not state that equality verbatim.
- Outcome: `confirmed_nonfatal`.
- Guard: `f5156a3f3e55efd6f6555aef8635178c7f504c71d7f967e230a0de58de825b14`.
- Decision: the cited edge definition factors `epsilon_F` as a surjection onto `E_infinity_{0,1} ~= F_0` followed by inclusion. The cited proposition supplies a surjection `kappa_b` with `epsilon_F kappa_b=(i_b)_*`. Therefore `im(i_b)_*=im(epsilon_F)=F_0` immediately. The stable-piece calculation and nonsplitting witness are sound.
- Evidence read: the complete counterexample, complete `prop-serre-edge-maps-are-induced-by-projection-and-fiber-inclusion`, and the edge-map definition.
- Sources: no web source was needed because the equality follows algebraically from exact local interfaces.
- Repair/checks/rejudge: no content edit, no focused check, no rejudge target.

### `lem-circle-and-path-loop-models-for-eilenberg-maclane-induction`

- Rejection: the mapping-path factorization interface allegedly neither identifies the total space with based paths nor the strict fiber with the loop space.
- Outcome: `confirmed_nonfatal`.
- Guard: `3ea4216f8a3ff43dce7a4330cede7a8e93e43cb773a9965899901c97b7e7ed8f`.
- Decision: the cited theorem's F1 imports the exact mapping-path definition. Applied to the inclusion of the point at the basepoint, that definition gives the based path space with endpoint projection, whose strict fiber at the basepoint is exactly the based loop space. The theorem's displayed deformation formula contracts the based path space. Thus the strict identifications used in steps 1.2-2.1 follow from the complete dependency, not from an unspecified existential factorization.
- Evidence read: the complete lemma, complete `def-mapping-path-space-replacement-of-a-map`, and complete `thm-mapping-path-factorization`.
- Sources: no web source was needed because the local definition and proof give all spaces and maps by formula.
- Repair/checks/rejudge: no content edit, no focused check, no rejudge target.

### `cex-an-unoriented-real-bundle-has-no-integral-thom-class`

- Rejection: F4 allegedly supplies only multiplication by an unspecified unit, not the sign of coordinate reversal.
- Outcome: `confirmed_nonfatal`.
- Guard: `35ca81519709b630fb0149d7c85044b37db8904b92a90c908aa0f8e3c752b9c8`.
- Decision: the complete disk-pair lemma fixes the ordered-coordinate generator and explicitly proves in step 3.1 that reversing one ordered coordinate negates it. The counterexample also spells out the endpoint-cokernel calculation. Hence `r^*g=-g` and the contradiction are licensed.
- Evidence read: the complete counterexample and complete `lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring`.
- Sources: no web source was needed because the local proof states the sign calculation verbatim.
- Repair/checks/rejudge: no content edit, no focused check, no rejudge target.

### `cex-the-tautological-line-over-rp-infinity-has-no-finite-rank-complement`

- Rejection: F2 allegedly does not establish paracompactness of the stable Grassmannian.
- Outcome: `confirmed_nonfatal`.
- Guard: `b687039ce789ddd29ef0174e7aa0951c2402ebaebb604ef584e0cae72d467934`.
- Decision: step 1.1 of the cited classification theorem explicitly invokes its F6, which states that the relevant weak union of compact Hausdorff stages is paracompact. The counterexample independently verifies Hausdorffness and the CGWH condition. Its use of the classification bijection is therefore within scope.
- Evidence read: the complete counterexample, the classification theorem's Statement/F6/proof, and the stable Schubert-CW theorem.
- Sources: no web source was needed because the disputed hypothesis is established in the complete local dependency.
- Repair/checks/rejudge: no content edit, no focused check, no rejudge target.

### `def-clutching-construction-for-bundles-over-a-suspension`

- Rejection: the definition allowed an unbased compact CGWH `A`, although its cited reduced suspension requires a well-pointed based space.
- Outcome: `confirmed_fatal` (`logic`).
- Pre-edit guard: `0550ea088b21128883d2898f4ffb31d2f2f747963dcd484bc8e964aa7ea1c449`.
- Repair: required `(A,a_0)` to be a well-pointed based compact CGWH space, exactly matching the reduced cone/suspension interface.
- Evidence read: the complete definition and complete `def-reduced-cone-suspension-and-cofiber-sequence`.
- Sources: no web source was needed because the domain mismatch is explicit locally.
- Post-edit guard: `d2891802e813434e43b394c376a8d663b31549ce85eddb065a88002275ade26a`.
- Focused validation: `precheck.mts` reported `0 checked, 0 failing` (definition, no proof).
- Rejudge target: this item.

### `def-external-product-in-complex-k-theory`

- Rejection: degree-zero restriction surjectivity kills the wrong boundary for uniqueness of the reduced product.
- Outcome: `confirmed_fatal` (`logic`).
- Pre-edit guard: `a6b0af936aaf9534e8e36e48bb56339a68a3579b95365e74edc77c12c4f52808`.
- Repair: used the projection-extension argument after one reduced suspension, which makes the restriction immediately preceding the relevant boundary surjective and therefore makes quotient pullback injective.
- Evidence read: the complete definition and complete `thm-reduced-k-theory-exact-sequence-of-a-cofibration`.
- Sources: no web source was needed because the local bi-infinite sequence determines the relevant adjacent maps.
- Post-edit guard: `c94e3d94060e64bd761c8ce40e5ba633cad8c60e643363c7fc0143ab7655f7d0` (after render-safe one-line display formatting).
- Focused validation: `precheck.mts` reported `0 checked, 0 failing` (definition, no proof).
- Rejudge target: this item.

### `def-grothendieck-ring-structure-and-rank-map`

- Rejection: the cited cohomology-ring definition does not state the identification of `H^0` with functions constant on path components.
- Outcome: `confirmed_nonfatal`.
- Guard: `2142145a3281dc2432b912b069a608286a8bc736902f231b6b35b21b34dbfa74`.
- Decision: the identification is immediate from the singular cochain definition: a zero-cocycle has equal values at the endpoints of every singular path and there are no degree-zero coboundaries. Since bundle rank is locally constant, the stated rank map lands in this group. Only the citation gloss is imprecise.
- Evidence read: the complete K-theory definition and complete `def-singular-cohomology-ring`.
- Sources: no web source was needed; the derivation is elementary from the cochain differential.
- Repair/checks/rejudge: no content edit, no focused check, no rejudge target.

### `def-negative-degree-complex-k-groups`

- Rejection: the definition allowed arbitrary based compact inputs, outside the cited reduced suspension's well-pointed CGWH domain.
- Outcome: `confirmed_fatal` (`logic`).
- Pre-edit guard: `c27bcb8bc135de9ba2fca079eca1b80db1fa9d561532b0f2e95f0110582b9eaa`.
- Repair: required well-pointed based compact Hausdorff CGWH spaces, and required a compact Hausdorff CGWH pair's quotient to be well-pointed.
- Evidence read: the complete definition and complete `def-reduced-cone-suspension-and-cofiber-sequence`.
- Sources: no web source was needed because the domain mismatch is explicit locally.
- Post-edit guard: `a9b40cb3541bef0055672fc1288c1bfdc9f8e7e510af21704f6f261596d299dc`.
- Focused validation: `precheck.mts` reported `0 checked, 0 failing` (definition, no proof).
- Rejudge target: this item.

### `def-thom-diagonal-and-zero-section-collapse`

- Rejection: an arbitrary homeomorphism from the open disk bundle to an open neighborhood need not yield a continuous extension by the Thom basepoint.
- Outcome: `confirmed_fatal` (`logic`).
- Pre-edit guard: `b7c423b43984baf9e61abd05534726177ee311de682f03cebbd42bfdd5237647`.
- Repair: required a homeomorphic closed disk-bundle neighborhood whose sphere is the boundary, and defined the collapse on the resulting closed cover. The formulas agree on the sphere boundary and paste continuously.
- Evidence read: the complete definition and the Thom-space quotient definition.
- Sources: no web source was needed because the missing boundary condition is a direct continuity issue.
- Post-edit guard: `06eb25641f0a341d3f19e6e2c788a8c39ff5d06279f3577684b740226a4d7b36`.
- Focused validation: `precheck.mts` reported `0 checked, 0 failing` (definition, no proof).
- Rejudge target: this item.

### `def-whitney-sum-monoid-of-complex-vector-bundles`

- Rejection: locally varying ranks were admitted although the supplied bundle interfaces only define globally fixed rank.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `bf12b5dfc3ab0e0b672eb812ee018baaf3e596f23b2534decd795062110db5c5`.
- Repair: defined a variable finite-rank bundle as finitely many clopen fixed-rank pieces and applied the fixed-rank Whitney-sum construction on their finite common refinement. Compactness makes a locally constant rank function have finite image.
- Evidence read: the complete monoid definition, repaired vector-bundle definition, and fixed-rank Whitney-sum definition.
- Sources: no web source was needed because compactness and the clopen rank strata give the reduction directly.
- Post-edit guard: `7ca739b854dc08355ebd2a0010c701f89d6c9f09028746aca0b42fa67f37c840`.
- Focused validation: `precheck.mts` reported `0 checked, 0 failing` (definition, no proof).
- Rejudge target: this item.

### `def-gysin-pushforward-for-an-oriented-vector-bundle-zero-section`

- Outcome: `confirmed_fatal` (`logic`): orientation plus AC did not supply the Thom class without the theorem's numerability and base hypotheses.
- Guards: `aeeb5283861983db281ab624dad5fc0399fff48a33168333a622547b5f0535ee` -> `16efe53b8a04a4943ec76317896f13304d54cd66f97478656f2a85e8723c3217`.
- Repair/evidence: repeated the exact scope of `thm-thom-isomorphism-for-oriented-vector-bundles`; `precheck.mts` reported `0 checked, 0 failing`. No web source was needed. Rejudge target: this item.

### `ex-complex-k-ring-of-complex-projective-space`

- Outcome: `confirmed_nonfatal`; guard `ee8772140a732af3e706ed57fd00d3ba440b62c5c8fc2921cc739e1f1be6ba3b`.
- Decision/evidence: the complete cited Schubert theorem gives cell dimension `2(a_1-1)` over the complex numbers; the rank-one symbols `1,...,r+1` therefore give exactly one cell in dimensions `0,2,...,2r`, licensing the top-cell quotient. No edit, check, rejudge, or web source.

### `ex-k-theory-of-a-point-and-the-empty-space`

- Outcome: `confirmed_nonfatal`; guard `54ddf670a71dabd066c61d039cbc21c68c358dd1a4dd34789f64bcc3f112abe0`.
- Decision/evidence: the complete Bott theorem explicitly imports the suspension definition of negative groups, so specialization gives `K^{-1}(*)=K~^0(S^1)`; the sphere corollary supplies its vanishing. No edit, check, rejudge, or web source.

### `ex-rank-map-on-a-disconnected-compact-space`

- Outcome: `confirmed_fatal` (`logic`): compactness alone did not place the example in its compact-Hausdorff K-theory suppliers.
- Guards: `6619d3d01e88ebe26ddaf42a9d0b73ecead129291b97e4daeca01294bbf10406` -> `a359b50691e6b10ae68770aeeffcf4396b13439ba8490d20c97da1f136bf6d72`.
- Repair/evidence: required compact Hausdorff `X` and nonempty clopen pieces; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

### `ex-serre-spectral-sequence-of-the-complex-hopf-fibration`

- Outcome: `confirmed_nonfatal`; guard `b3974b6ec00b96472d7ac1785dcf5f48bd360e505ab1bc277ae0cfbef41a0cf6`.
- Decision/evidence: the complete cited multiplicative theorem's F1 explicitly imports the cohomological Serre pages, local-system E2 identification, convergence, and filtration, so F4 licenses all uses in step 2.1. No edit, check, rejudge, or web source.

### `ex-tautological-real-and-complex-lines-over-projective-space`

- Outcome: `confirmed_fatal` (`dependency_citation`): the BO(1)/BU(1) notation came only from unnamed page prose.
- Guards: `8cc882cb77c9c5bd19e197d295e6ef653354f1a6ac2ee2c96b31918ec921c466` -> `35fa79e198d976483f795585e3a676819ab4624917cd57f95ded4b8546e4c799`.
- Repair/evidence: added and cited `thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians`, whose Statement fixes that notation; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

### `ex-thom-space-of-a-trivial-line-and-plane-bundle`

- Outcome: `confirmed_nonfatal`; guard `97a0c942c34913b54e8dde59d5deb55166187d37bc9ef7a84bdd72c53cec9077`.
- Decision/evidence: the complete trivial Thom theorem constructs the interval connector in step 1.2, identifies cup with the ordered generator in step 2.1, and iterates it in step 3.1. The example is exactly the rank-one/rank-two specialization. No edit, check, rejudge, or web source.

### `lem-a-bundle-embedding-produces-its-grassmannian-classifying-map`

- Outcome: `confirmed_nonfatal`; guard `176b13fca28887f06d2233ff11f2ce910915f19f7c59d6b6acd003ecd649007e`.
- Decision/evidence: steps 1.1 and 2.1 of the complete principal-bundle theorem group arbitrary locally finite numerations into countably many cardinality strata and construct a countable subordinate partition. The lemma uses that construction exactly. No edit, check, rejudge, or web source.

### `lem-determinant-classifies-loops-in-complex-general-linear-groups`

- Outcome: `confirmed_fatal` (`dependency_citation`): the cited algebraic GL definition supplied neither topology nor determinant continuity.
- Guards: `5835b93e0c264397611f3491495ac822cba8be6b6ae5de974d01af566f2f5718` -> `72c2dee67a283ec158c50102a02763e902b963c46cf7d68963773b714850758d`.
- Repair/evidence: stated the Euclidean/subspace topologies and derived continuity from the determinant polynomial; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

### `lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence`

- Outcome: `confirmed_nonfatal`; guard `4a0e9502c2f6082a815d8e2b3ac6cec5c668de1911cec97bed7ded655f70a8ce`.
- Decision/evidence: F4's gloss is broad, but its connector identities and relative naturality, together with the relative cell filtration in step 1.1 and the complete multiplicative Serre construction, give the standard module edge calculation. With one nonzero row, the edge is pullback followed by cup with the normalized class. This is a reader-closable gap. No edit, check, rejudge, or web source.

### `lem-global-fiber-basis-trivializes-serre-monodromy`

- Outcome: `confirmed_nonfatal`; guard `0d2534b64af02c7dc97041714e999f5fd19cb7fd35d22a01c5ab4642a4f3b5e2`.
- Decision/evidence: the complete transport dependency imports the strict transport formula and its Hurewicz supplier proves naturality for commuting fiber maps; applying this to the endpoint inclusions gives the restriction identity. No edit, check, rejudge, or web source.

### `lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely`

- Outcome: `confirmed_fatal` (`logic`): with zero-based coordinates, `O(e_0)=e_{-1}` was undefined.
- Guards: `939133abaf01bbe62e6667448da019ec1bcde10b7ef143085e9426c6133b2334` -> `e828d2464bf661bbdef3ff11def9de9aca1379c9e24698e07244732a32319842`.
- Repair/evidence: used `O(e_r)=e_{2r+1}` and `P(e_r)=e_{2r+2}` for `r>=0`; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

### `lem-leray-hirsch-isomorphism-on-associated-graded-modules-lifts-without-extension-ambiguity`

- Outcome: `confirmed_nonfatal`; guard `ad647b608d05d3e4595f93480c0ad753df95a113dc39069e9ba45d5dc92e85cb`.
- Decision/evidence: naturality for the fibration map `p:(E->B)->(B->B)` puts `p^*H^a(B)` in `F^a`, and multiplicativity prevents cup with `e_i` from lowering filtration. Thus `Phi` is filtered. No edit, check, rejudge, or web source.

### `lem-negative-laurent-powers-are-cleared-by-hopf-line-stabilization`

- Outcome: `confirmed_nonfatal`; guard `ecd2be2c31d220a19b5dd8f8129b1c9898d47d22d298ab09c30f237d663d7922`.
- Decision/evidence: once the clutching convention is fixed, the tensor-product transition is directly the tensor of transitions; tensoring `f` with the scalar transition `z^r` gives `z^rf`. This is an immediate local-chart calculation. No edit, check, rejudge, or web source.

### `lem-normalized-clutching-data-for-bundles-over-x-times-s-two`

- Outcome: `confirmed_fatal` (`dependency_citation`): scalar clutching did not supply gluing for nontrivial bundle families or interval parameters.
- Guards: `8053eebef96ba1e8b395d433ad1bec50dcdfe41715aa18c935376885642fd0c2` -> `c1ee0fdeae56b1b0c9a3e545e5111cd3f6420fb85b113155625982be4d4b6af4`.
- Repair/evidence: retained the clutching convention and added the transition-cocycle theorem for the actual local and parameterized gluing; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

### `lem-polynomial-clutching-families-stabilize-to-linear-clutching`

- Outcome: `confirmed_fatal` (`dependency_citation`): the clutching definition supplied no homotopy-to-isomorphism theorem.
- Guards: `d88b54017d1d683ba897ed4a24090ccf2b802612432fc4a046ae819d98785099` -> `31cec0ac6c64bcacf93c3494d1d7423f197f7e558a5ee873ada6af142d01f1e0`.
- Repair/evidence: added compact-Hausdorff/AC scope, parameter-cylinder transition gluing, and endpoint homotopy invariance; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

### `lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology`

- Outcome: `confirmed_nonfatal`; guard `0a4b88dddde548080750b1e3578a5bb24473ade968411f63ca33a40778197579`.
- Decision/evidence: proof step 3.1 of the complete replacement lemma proves the general weak-equivalence homology result with arbitrary coefficients; step 1.1 first proves the inverse-image inclusion is a weak equivalence. No edit, check, rejudge, or web source.

### `lem-serre-fibration-replacement-preserves-fiber-homology-transport`

- Outcome: `confirmed_fatal` (`logic`): F1 falsely upgraded an ordinary homotopy equivalence over the base to an equivalence in the over-category.
- Guards: `4557f74615b4b176922a8ee58cf5ff02a856f2379701f105e24bc45e8fac25c7` -> `30615dbd28217769667343db83190461f6833230942886618498ac76551d66cb`.
- Repair/evidence: stated the ordinary equivalence and strict equality `p_pj=p`, explicitly disclaiming an over-base inverse; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

### `lem-thom-isomorphism-extends-over-a-finite-numerable-trivializing-cover`

- Outcome: `confirmed_nonfatal`; guard `e45a908110aef6689a97856c07ff65a84c082d1c988335f8fd70184dbc9ec797`.
- Decision/evidence: the complete two-open lemma explicitly cites the trivial-bundle theorem as F1 and uses it for trivial restrictions; its uniqueness clause handles intersections. The finite induction is licensed transitively. No edit, check, rejudge, or web source.

### `lem-thom-isomorphisms-glue-over-two-trivializing-opens`

- Outcome: `confirmed_fatal` (`logic`): raw singular cochain restriction was not injective for crossing simplices.
- Guards: `fcab64a789a732d1dcfe9f819fe3e2995f79d355929fb45cf7d19231d2dac28c` -> `62a0a7b628c9ada4144a4e175fa687f480aa641c19466bb53ea0a72acb95967a` (after render-safe one-line display formatting).
- Repair/evidence: used the split small relative chain sequence, dualized it, and transported through the small-chain equivalence; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

## Further completed decisions

### `prop-orientation-is-equivalent-to-an-so-n-reduction`

- Outcome: `confirmed_fatal` (`logic`): arbitrary orientation-preserving bundle isomorphisms need not preserve the chosen metrics and hence need not map orthonormal frame bundles.
- Guards: `5bcb2c5d5c18a8939ee4b2c6c17ae144566641bb7f8c2ca1ca7cc22a1ffa0975` -> `b5cb3c01dad85e2d94fdf77de70f6564bf39ca30d73d6a427782299f0ccf4811`.
- Repair/evidence: restricted the literal frame-bundle naturality statement to orientation-preserving bundle isometries and removed the unsupported polar-normalization claim; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

### `prop-thom-and-gysin-constructions-are-compatible-with-pullback-and-composition`

- Outcome: `confirmed_fatal` (`logic`): a composite of two zero-section embeddings is not canonically another vector-bundle zero section, so the asserted disk-pair identification was untyped.
- Guards: `e9251c72fa13dae11821c68be83069bc865e58ea392c06c0c26a4d517a912ee3` -> `bd5f2b2c9f532ffb45a2896caf1e3b14ab3b9088bf9892beb1a11bb5df7bbb36`.
- Repair/evidence: made composition conditional on supplied compatible oriented iterated tubular/disk-pair data and defined the composite pushforward through it, explicitly declining a canonical identification; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

### `thm-cohomological-serre-spectral-sequence`

- Outcome: `confirmed_nonfatal`; guard `5ed973a9f0aa817160907d38ec24b4b5e445ab2498b0dc367ccbf1f67df3c7c0`.
- Decision/evidence: step 2.1 locally dualizes the cellularly filtered pair complexes, applies the same cellwise excision and transport, and invokes AC for the resulting product decomposition; it does not rely on a missing cohomological interface in F2. No edit, check, rejudge, or web source.

### `thm-complex-bott-periodicity`

- Outcome: `confirmed_fatal` (`logic`): reduced K-theory of the one-point based space is zero, so evaluation there cannot produce the Bott generator.
- Guards: `7e315d6439c4f6cb8bfd58faeeac0a23f81a577e7981316ca91397b2ef44bbde` -> `8e4f7bad46cc77b6f419ac59d63576c2a46bdd0135ac88a7cd4e48610fd3e802`.
- Repair/evidence: evaluated the reduced product theorem on the based zero-sphere, equivalently the unbased point with a disjoint basepoint, where the rank-difference generator maps to `beta`; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

### `thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory`

- Outcome: `confirmed_fatal` (`dependency_citation`): a prespectrum definition supplied no representing prespectrum or existence theorem.
- Guards: `8a6ea69b9e49e33a1c3494eae53c73f5ac9f2e94bc83837b5042b30e67368e82` -> `2f956550a1043d3e82021aabd728f1b74f9633acdefd55e144b74fb862028ba2`.
- Repair/evidence: removed the unsupported representability claim and derived the requested group-level products and laws directly from the reduced K-theory product interface; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

### `thm-external-product-and-whitney-sum-formulas-for-thom-classes`

- Outcome: `confirmed_nonfatal`; guard `3bc64cf0a17f7c8797e35678f9c6648910dd409dbc7f65f8abcf4c0c77cf86ad`.
- Decision/evidence: the fiber of `Delta^*(xi times eta)` is canonically `E_b direct-sum F_b`, and the product transition maps are the block sums defining `xi direct-sum eta`; this is an immediate local-chart consequence of the cited definitions. No edit, check, rejudge, or web source.

### `thm-finite-rank-complement-theorem-over-compact-hausdorff-bases`

- Outcome: `confirmed_nonfatal`; guard `75601ad0d38dd72d8a15df85a27eb0f0fc99ccb3da57e87401aae8ab73c69aa4`.
- Decision/evidence: a nonzero rank minor of a continuous constant-rank idempotent stays nonzero on a neighborhood and supplies a continuous local frame for its image; the complementary idempotent handles its kernel. This is a reader-closable local matrix step. No edit, check, rejudge, or web source.

### `thm-fundamental-product-theorem-for-complex-k-theory`

- Outcome: `confirmed_nonfatal`; guard `aeeb8ac3daf90103d658058cedbdc790caf012cfdd61b8ec23b23b2bc799e7b3`.
- Decision/evidence: the complete polynomial-linearization dependency supplies the explicit companion block matrix; the asserted padding, direct-sum, and Laurent-shift identities are routine block-permutation calculations with the fixed clutching convention. The separate reader warning about parameter continuity is dispositioned independently. No edit, check, rejudge, or web source.

### `thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle`

- Outcome: `confirmed_nonfatal`; guard `26973c6b16a1acf9cc480aa70bd006b24265351b9d722a0edc04ff8104cabe92`.
- Decision/evidence: the complete F2 item explicitly opens and applies the preceding Thom-isomorphism theorem; the present invocation is traceable through that complete dependency chain. No edit, check, rejudge, or web source.

### `thm-homological-serre-spectral-sequence`

- Outcome: `confirmed_nonfatal`; guard `3ac20cd809ec8f7771ad82aff2ed8a4376647b984167e0afe5617acb1837ad50`.
- Decision/evidence: proof step 1.4 derives naturality from the filtered map, naturality of pair connecting maps, and functorial fiber transport; it does not ask F2 alone to supply naturality. No edit, check, rejudge, or web source.

### `thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians`

- Outcome: `false_positive`; guard `5cc422defcb11505e9273caa915ece7c0d185d258e6a01ef55741a7f2373da99`.
- Decision/evidence: the complete F2 proof uses standard coordinate displacement inside the stable Grassmannian, supplies homotopies `f_0~Of_0` and `f_1~Pf_1`, interpolates `Of_0~Pf_1`, and explicitly concatenates these to obtain the unqualified conclusion `f_0~f_1`. The rejection mistakes the construction method for a weaker conclusion. No edit, check, rejudge, or web source.

### `thm-serre-class-fibration-transfer`

- Outcome: `confirmed_fatal` (`logic`): simple connectedness does not imply that the displayed homology groups belong to an arbitrary Serre class.
- Guards: `05558569c8598f0753b4880cfb78ac6f4baa3fcc54340458efefd8e3352d99dd` -> `f0596e6b008ded553f868871065bddac4054b003f33bb945838b0416252db0da`.
- Repair/evidence: clarified that simple connectedness supplies only the action and connectivity conditions and that every displayed `C`-membership hypothesis remains necessary; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

### `thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence`

- Outcome: `confirmed_fatal` (`dependency_citation`): for unrestricted CW bases, the ordinary product topology need not be the product-cell CW topology, so the original cellular-approximation step lacked a valid target CW structure.
- Guards: `9349bf99fd890cc9e03d5db14877723707911b515880c988ad2acded237a8b78` -> `b4a4c7daf677885d951b1fc71d3bfed878c6b6ec9e0194563c472bb9eed3bb15`.
- Repair/evidence: kified the spaces, used categorical k-products, added the library's compact-generation interfaces, and explained why compact-domain tests leave singular complexes and Serre lifting tests unchanged. Hatcher, *Algebraic Topology*, Appendix Theorem A.6, printed p. 524 (`https://pi.math.cornell.edu/~hatcher/AT/AT.pdf`), was opened and supports exactly that product cells give a CW structure on the compactly generated product. Direct `precheck.mts` passed (`1 checked, 0 failing`). Rejudge target: this item.

### `thm-thom-isomorphism-for-oriented-vector-bundles`

- Outcome: `confirmed_fatal` (`dependency_citation`): F2's statement assumes an orientation and does not itself license the unoriented twisted clause.
- Guards: `22eed6e22b09f75290d717f406196f67224dffbb53f755e76e964f433f8b6a55` -> `d99fe96e05f7bd0409cd39e4491686229a0bad14e8027fd3626ae865d1b6ea36`.
- Repair/evidence: derived the relative skeletal spectral sequence before any orientation choice, identified its unique row with the orientation local system, and obtained the twisted isomorphism from one-row collapse; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

### `thm-naturality-and-uniqueness-of-thom-classes`

- Outcome: `confirmed_fatal` (`dependency_citation`): the pullback-bundle definition supplied a total-space map but no disk/sphere-pair map.
- Guards: `a64416fa1ffa30d0db32dcad6febcc91b85aea6c0336ab028c26f2b376dba58b` -> `d499ac67d3641ec1c0473e26b095b2c79553fb52b3b935ac7342b84e2c2fb1b2`.
- Repair/evidence: added the disk/sphere definition, defined the pulled-back metric, and checked that the canonical bundle map preserves its norm exactly and hence restricts to the required pair map; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

### `thm-leray-hirsch-module-isomorphism`

- Outcome: `confirmed_fatal` (`logic`): the statement omitted the commutative-unital-ring hypothesis needed to type its cup products, module structure, and cited Serre interfaces.
- Guards: `5215412b1310dc20038f2f2b38b745bdbf8be3c1f80f6ada8253ca42c9869629` -> `6dd2b9ed4ed3cb3fb7eb441e5760c41f410b7d7e5a8744658869a860432eaa7d`.
- Repair/evidence: added exactly the missing coefficient-ring hypothesis and carried it into the Given block; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

### `thm-thom-isomorphism-for-a-trivial-oriented-bundle`

- Outcome: `confirmed_fatal` (`dependency_citation`): the absolute one-interval calculation did not license iteration on relative pairs.
- Guards: `26e2b93b47027f770a160c9a7634efa0b092d11f35b8e69806a05f2c64dbfe79` -> `98c690d242d1e824894315b09788181757128d3bf0e21ebe90c38ec923cebe97`.
- Repair/evidence: proved the required relative suspension-of-pairs map using collar-small chains, a natural exact ladder, and the five lemma, then iterated it over the cubical boundary pairs; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

### `thm-schubert-cells-give-the-stable-grassmannian-cw-structure`

- Outcome: `false_positive`; guard `555ce8ef71ef11cee470cccd678455524831a14ee91c592e1fa794df2c2e0f19`.
- Decision/evidence: F1's complete dependency explicitly delegates its topology to `def-stiefel-space-grassmannian-and-tautological-bundle`, whose statement defines the stable Grassmannian by the weak direct-limit topology against the finite stages. Step 4.1 uses F2 only to compare this supplied topology with the CW weak-topology axiom. No edit, check, rejudge, or web source.

### `thm-reduced-k-theory-exact-sequence-of-a-cofibration`

- Outcome: `confirmed_fatal` (`logic`): vanishing at the chosen basepoint does not force the virtual-rank function to vanish on disjoint components, so the original global fixed-rank presentation was unavailable.
- Guards: `a25db72d3614d4d7e6012c7006de3779eec9aeae22760800ccd695ad2a75c91c` -> `736a704e331ef11b66584891d4447ac2a06a26fff56388be09de0e75d894b214`.
- Repair/evidence: split off the clopen nonzero-rank locus and descended it directly; on the zero-rank complement used finite clopen rank strata and piecewise complements to obtain a constant-rank presentation, carried out the quotient construction, and reassembled the two classes; direct `precheck.mts` passed (`1 checked, 0 failing`). No web source was needed. Rejudge target: this item.

## Step-6 reader-warning dispositions

### `s8a-c74ca510e75aa03527230e01` — `lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely`

- Outcome: `nonfatal`.
- Decision: graph charts trivialize the stable tautological bundle, and paracompactness of the weak union of finite compact Grassmannians supplies a numeration. The omitted instantiation of homotopy invariance is reader-closable. The item's fatal judge rejection concerned its separate zero-based `O/P` indexing error, so that repair does not cover this warning.

### `s8a-116f40d4dbae98d222dbbbef` — `thm-fundamental-product-theorem-for-complex-k-theory`

- Outcome: `nonfatal`.
- Decision: the parameter spaces are compact Hausdorff, hence the finite-rank subbundles are numerable; the preceding spectral-splitting lemma proves continuity on the no-unit-circle-spectrum locus and applies equally over `X times I`. These are reader-closable uses of the declared interfaces, with no false product or inverse formula.

### `s8a-8e574d232952a7395daddb4b` — `lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence`

- Outcome: `nonfatal`.
- Decision: although no separately named relative Serre theorem is cited, the item supplies the quotient filtration, relative fiber calculation, and bounded finite-filtration convergence. Preservation of the disk/sphere subpair is the routine relative version of the cited construction. The exact judge rejection on this item was independently adjudicated `confirmed_nonfatal`.

### `s8a-0a87b4c6599c54b1d7c9e016` — `def-serre-class-ring-ideal-and-mod-c-morphism`

- Outcome: `nonfatal`.
- Decision: one duplicate prose source URL is malformed, while the frontmatter reference identifies the source correctly. This is presentation-only and affects no definition, proof, dependency, or attribution.

### `s8a-52968b1a8ecc659e371d0542` — `thm-serre-class-fibration-transfer`

- Outcome: `nonfatal`.
- Decision: the item explicitly assumes AC; attributing that assumption to a choice-free PID universal-coefficient theorem is inaccurate bookkeeping but changes no inference. The item's fatal judge repair concerned the separate false automatic-Serre-class-membership claim.

### `s8a-2fb650474940ce310130c207` — `cex-vector-bundle-classification-without-numerability-can-fail`

- Outcome: `not_defect`.
- Source verification: Nyikos, *The Topological Structure of the Tangent and Cotangent Bundles on the Long Line*, *Topology Proceedings* 4 (1979), printed p. 271 (`https://topology.nipissingu.ca/tp/reprints/v04/tp04126.pdf`), explicitly states that the long line is a nonmetrizable differentiable one-manifold and that a differentiable manifold, metrizable or otherwise, has a tangent vector bundle. These are exactly the two external facts used by the counterexample; the item proves the remaining metric contradiction directly.

## Group summary

- Judge rejections: 63 exact tuples, all uniquely adjudicated — 32 `confirmed_fatal`, 29 `confirmed_nonfatal`, and 2 `false_positive`.
- Repairs: 32 owned items repaired. Each has a matching defect-ledger row, exact pre-edit guard, repaired digest, and successful focused `precheck.mts` result. These 32 items are the complete rejudge-target set recorded above.
- Reader warnings: 6 uniquely dispositioned — 5 `nonfatal` and 1 `not_defect`; none licensed an additional edit.
- New lemmas: none.
- Cross-group alerts: none; every defect and dependency examined remained within group `b` or published content.
- Published repairs: none.
- Unresolved mathematical obligations or blockers: none.

## Validation and handoff

- `node tools/step7-scope.mjs check --run phase-2-next-18 --allow-pending-alerts` passed: 6 groups, 566 partitioned items, 51 currently open routed rejections, and 32/48 alerts dispositioned globally at the time of the check. The pending 16 alerts belong to other groups; all 6 group-`b` alerts have one exact decision.
- The prescribed `step7-guard.mjs` command was run against `pre-step7`. Its group-`b` projection contains exactly 32 changed items, 0 creations, 0 deletions, and 0 errors. The global command exited 1 with 36 then-current errors, all in other groups still being adjudicated; none names a group-`b` item.
- `node tools/defect-ledger.mjs check --run phase-2-next-18 --adjudications research/phase-2-next-18-judge-adjudications.jsonl --reader-decisions research/phase-2-next-18-step7-alert-decisions.jsonl` passed with 195 then-current run rows and 0 errors.
- Strict proof-contract checks passed after mechanically regenerating the affected entries in the owned batch-3 and batch-4 contracts. The complete changed-item check passed 14/14 items in batch 3 and 18/18 in batch 4, each with 0 errors and 0 warnings; the two render-format follow-ups were included in the final targeted rerun.
- Group-scoped `rendercheck.mjs` passed all 126 owned targets (118 items and 8 pages), including real KaTeX and renderer YAML parsing. The repository-wide render check was also run; it remains red only on four concurrently edited items outside group `b`.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-18` completed successfully. The refreshed unified ledger retains the three affected cross-batch consumer edges as `verified`; the repairs introduced no new cross-batch edge.
- A final structural audit found 63/63 unique adjudication rows, 63/63 corresponding report sections, 6/6 unique reader-warning decisions, and exactly one matching defect-ledger record for each of the 32 fatal adjudications.

No group-`b` work remains. The engine owns peer completion, the global gate rerun, rejudgment, and stage transition.
