# Step 7 adjudication — group d

Run: `phase-2-nine-step-25`  
Batches: 8, 9

## Completed adjudications

### `def-higher-homotopy-group-by-based-cubes`

- Rejection: `gpt-5.6-terra`, context `4c4402d3ab5e0d4d33145f21b7a2134e691a13bc463351774610ae7cb50cae0e`.
- Pre-edit guard hash: `3dfa5f93379b5674905146fcfedc11097355197dce5bdb8d1f7953025f2484cc`.
- Outcome: `false_positive`.
- Evidence: the item defines the cubical relative-boundary homotopy-class set, calls concatenation only a “proposed product,” and explicitly defers well-definedness and the group laws to `lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes` and `thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one`, both present immediately afterward on the owned page. The conventional title does not assert that those later arguments have already occurred inside the definition.
- Change/check: no content change; definition precheck reports 0 checked and 0 failing.

### `def-n-connected-space-and-n-connected-map`

- Rejection: `gpt-5.6-terra`, context `55b68ed3fc00cce679b0c530926442a107fc90a0c74a14d66e49e952d7ac2e5f`.
- Pre-edit guard hash: `2d14cf14d2693d2ff3869f4fcf258e114442d4df4712561536f6bd687a964811`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: `thm-mapping-cylinder-factorization` quantifies over continuous maps of CGWH spaces. The original definition instead quantified over every continuous map while using that theorem’s `M_f` and `j`, so the cited construction was outside its stated hypotheses.
- Repair: restricted the map definition to continuous maps of CGWH spaces. No claim, degree range, or connectedness condition changed.
- Post-edit guard hash: `fc553e570862bffe2bbcd402d723dfe52365e28a15cf2065e017969aadeec4d7`.
- Focused check: definition precheck reports 0 checked and 0 failing.
- Item-local handoff: completed. The sole Terra rejudge found that the cited absolute basepoint-transport proposition did not justify relative transport. The final adjudicator removed that unsupported sentence and dependency, retained the explicit all-source-basepoints condition, synchronized the batch-8 manifest and proof contract, refreshed the frontier ledger, and recorded terminal disposition `repaired`. Final-adjudicator post-repair `itemHashGuard`: `e8094077182b816b3cc7c829b593fa4a04440c54508f2a78960ca3122c642533`. Authoritative source consulted by the final adjudicator: Hatcher, *Algebraic Topology*, Chapter 4, pp. 345–347, https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf, supporting relative basepoint transport as a separate construction, the all-basepoints connectivity formulation, and the mapping-cylinder interpretation.

### `ex-cofiber-sequence-of-a-wedge-summand-inclusion`

- Rejection: `gpt-5.6-terra`, context `ccc5a058ac3866ff225a9620a644bd05b959a236f28533b965b7dadad72ca7e5`.
- Pre-edit guard hash: `6db3ac3ab964ed3ffb160321a0028a73c27f350d90ed4378c57eefee2ec38233`.
- Outcome: `false_positive`.
- Evidence: in $(U\vee V)\cup_U CU$, the whole cone base is glued to the $U$ summand, not to the wedge point of $V$. Identifying the pushout with $CU\vee V$, its intersection is only the based cone point $[u_0,0]$, which lies on the collapsed basepoint track. The displayed homotopy sends that track to itself, agrees with the fixed-$V$ clause at the actual intersection, and contracts $CU$ to its tip.
- Change/check: no content change; focused precheck passes.

### `lem-iterated-cofibers-rotate-with-suspension-reflection`

- Rejection: `gpt-5.6-terra`, context `cf5ed966e798972b9c4f378d3cefb30beb334ddbe92cb9af94453ca5a049f6b8`.
- Pre-edit guard hash: `bea1fb1674529272942ded860b4f8e571f4303f8618418baab9a658a3f236a1e`.
- Outcome: `confirmed_fatal` (`other`).
- Evidence: the displayed $\psi\circ i(i)=q(f)$ applied $i:Y\to C_f$ to itself and then composed into a map whose domain is $C_i$. Proof 1.1 instead uses the unnamed canonical inclusion of $C_f$ in $C_i$.
- Repair: named that inclusion $j:C_f\to C_i$ and replaced the formula by the typed equality $\psi\circ j=q:C_f\to\Sigma X$.
- Reader warning `s8a-177f88e7fa54794dd2cd2198`: `covered_by_rejection`; it independently identifies this exact displayed defect and is not counted as a second defect.
- Initial post-edit guard hash: `6cabfe6b4489ccceba88a06262332206d371621221f85b2522c00dfd2f73b045`.
- Handoff preparation found the same notation defect still present in proof step 1.1 as “q(f)”. Completed the licensed repair there by naming `ψ`, referring to the included copy `j(C_f)`, and stating `ψ∘j=q`; synchronized the batch-8 manifest statement and proof contract. Final pre-handoff `itemHashGuard`: `df80fc5f7470e832d36deb4826249455f260252fc75a72e3699494907fb6274b`. The focused strict contract and explicit-item precheck both pass.
- Item-local handoff: completed; the sole Terra rejudge accepted the fully repaired lemma (`keep: true`, context `7e3a20e8a060018eaccef16d7d8c57b1ceb55855f37269cd899899c6b4727ca7`). No final-adjudicator repair was needed.

### `lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient`

- Rejection: `gpt-5.6-terra`, context `c4f1d74bdc15c764fbcff760a23fbe213eeb3c08bae93e7086951df860af104c`.
- Pre-edit guard hash: `2ded74edf41b18f4dc38afe8b4fb5b38b6585ad1b282ebe4a008ef0e616e2b15`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: `lem-pushouts-and-products-preserve-the-cofibrations-used-here` preserves cofibrations/HEP but does not supply the quotient-factorization or quotient-times-interval claims used for the homotopies.
- Repair: replaced that supplier with `thm-quotient-universal-property` and `lem-interval-exponential-law-and-quotient-homotopies`; steps 2.1 and 3.1 now state the precise fibrewise compatibility that makes each homotopy descend.
- Post-edit guard hash: `f135b6e64b6ff12d8f44a14652ab94b8419d2628dd6ded400772cd6f90e0e9d1`.
- Focused check: lemma precheck passes.
- Handoff preparation: synchronized both replacement dependencies in the batch-8 manifest and exact F3/F4 contract entries, including the fibrewise compatibility used in steps 2.1 and 3.1. The focused strict contract and explicit-item precheck both pass, and the required frontier ledger refresh completed successfully; the batch-8 cross-batch input remains empty because the run-local interval supplier is in batch 8 and the quotient theorem is published.
- Item-local handoff: completed; the sole Terra rejudge accepted the repaired lemma (`keep: true`, context `c04c52085d3dd33a2e9f5a1f2a9f6897c03e928091216fe21b083b51519e33f2`). No final-adjudicator repair was needed.

### `lem-finite-cw-basepoints-have-explicit-homotopy-extension`

- Rejection: `gpt-5.6-terra`, context `3d537763caf8e15cbdaed3e906da7b069dfb4fe647e9a6000f733c47e41994e7`.
- Pre-edit guard hash: `8fad1c989fac85adb39f0e16fe4dd6c5a1613f3bd94041076d7877f763721309`.
- Outcome: `confirmed_nonfatal`.
- Evidence: the opened supplier’s proof step 5.1 gives the identical formula $R(x,t)=(\lambda x,2+\lambda(t-2))$, checks its image and fixed bottom/side, and uses its exact quotient-times-interval fact for descent. The consumer reproduces that formula. The F2 summary is more detailed than the supplier’s headline statement, but the needed elementary construction is present and checkable in full.
- Change/check: no content change; focused precheck passes.

### `lem-finite-affine-bubbles-represent-signed-cubical-sums`

- Rejection: `gpt-5.6-terra`, context `656d0b376a944afcf2c12c419ff95318a380663f553e3a0f283ea5fe641d757d`.
- Pre-edit guard hash: `889e46e2bb7be30cf16bc3ddb73e0cfef4934872b7d794368d3c38e184ab482e`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the cited group theorem’s statement supplies the cubical group law, inverse, and abelianness, but not a general endpoint-fixed reparametrization interface.
- Repair: narrowed F3 to its exact inverse claim and proved reparametrization invariance inline by the explicit boundary-fixed homotopy $H(s,u,t)=a((1-t)s+t\phi(s),u)$ for each endpoint-fixing piecewise-affine $\phi$ used to rescale the slabs.
- Post-edit guard hash: `ba1eb4e61cc2a7ca283268c48b0faba1d4f28c1e156f329fb1f42ee6caf17dd7`.
- Focused check: lemma precheck passes.
- Handoff preparation: synchronized F3's uses and step 3.1 in the batch-8 proof contract with the explicit reparametrization homotopy. The focused strict contract and explicit-item precheck both pass; no dependency edge changed.
- Item-local handoff: completed. The Terra rejudge objected that F5's statement did not expose the coordinate compactification used in step 4.1. The final adjudicator read the supplier's complete proof, confirmed that it explicitly constructs that coordinatewise quotient map and orientation, independently checked the radial-to-coordinatewise boundary homotopy, and recorded terminal disposition `accepted-after-review` without content changes. Final `itemHashGuard` remains `ba1eb4e61cc2a7ca283268c48b0faba1d4f28c1e156f329fb1f42ee6caf17dd7`; no external source was needed.

### `ex-de-rham-cohomology-of-the-circle-from-mayer-vietoris`

- Rejection: `gpt-5.6-terra`, context `a3565055980489728ea519123d3b357b9787d3df34dacc2299f424f9d86b9664`.
- Pre-edit guard hash: `8bee284b854e7c8392749394227fea4ea78d8b9b1e97017b1220f60806ec690c`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the star-shaped Poincaré lemma only covers open subsets of Euclidean space. The original proof called open arcs “intervals” but supplied neither a chart transport nor a smooth-homotopy argument on the actual submanifolds.
- Repair: identified each complement by stereographic projection with $\mathbb R$, identified each overlap component with an open interval, and cited `thm-de-rham-cohomology-of-a-contractible-smooth-manifold` for positive-degree vanishing under the already assumed countable choice.
- Post-edit guard hash: `f77c44b8e6b88b7dd3e6c82e5e3bce5aea1e509c5499b2b8ad2d7258c45f6343`.
- Focused check: example precheck passes.
- Handoff preparation: synchronized the replacement dependency in the batch-9 manifest and exact F3 proof contract, including the stereographic/open-interval derivation. The focused strict contract and explicit-item precheck both pass, and the required frontier ledger refresh completed successfully; the batch-9 cross-batch input remains empty because both suppliers are in batch 9 or published.
- Item-local handoff: completed; the sole Terra rejudge accepted the repaired example (`keep: true`, context `fb1fecd8a945b9a8d83b341e5d011263267a55cc94586f8f027ade9181da9f3e`). No final-adjudicator repair was needed.

### `lem-based-sphere-maps-have-finite-affine-bubble-normal-forms`

- Rejection: `gpt-5.6-terra`, context `a47d0c72c9830445b45a12b647eb448eea9ef362fabdee235985568b11e6312e`.
- Pre-edit guard hash: `01f8f67998b661ce38ce48b20589969c9a166803cfb3ae2507261d82dfc3cb0c`.
- Outcome: `false_positive`.
- Evidence: the published theorem gives a homotopy of pairs. In this application the source subcomplex is the full boundary and the target subcomplex is the singleton infinity vertex. Hence every boundary point remains in that singleton at every homotopy time, which is exactly pointwise fixation; the source subcomplex’s positive dimension is immaterial.
- Change/check: no content change; focused precheck passes.

### `ex-the-euclidean-metric-and-its-musical-maps`

- Rejection: `gpt-5.6-terra`, context `00e88057e8e824d319ae929dff00acf0e231d032d6f1700f56e9ef750d2677de`.
- Pre-edit guard hash: `dcaaa561a9c53f83b7a9137f527214b80541cdb04e89c4a66bffcef68f755cfa`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: `thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms` states smoothness and inverse status but does not itself define $\flat$, $\sharp$, or their coordinate formulas.
- Repair: declared `def-musical-isomorphisms` directly and evaluated its two metric characterizations on the coordinate basis to derive both Euclidean coefficient formulas.
- Post-edit guard hash: `f7b609f77669e135a640970ddc586bb6c3b661da1bcbe81887ec5b0f75c48556`.
- Focused check: example precheck passes.
- Handoff preparation: synchronized the new direct definition dependency in the batch-9 manifest and added its exact F4 citation/use to the proof contract. The focused strict contract and explicit-item precheck both pass, and the required frontier ledger refresh completed successfully; the batch-9 cross-batch input remains empty because this supplier is in batch 9.
- Item-local handoff: completed; the sole Terra rejudge accepted the repaired example (`keep: true`, context `a11aef0a5e3e992f4195e1f5fd9d7c994b680fbe1251e5b49d771b61155d1de3`). No final-adjudicator repair was needed.

### `ex-de-rham-cohomology-of-the-two-sphere`

- Rejection: `gpt-5.6-terra`, context `411068627f4254539956b927339299d76e45aeecf1ca702a2eabc68e38a8a5aa`.
- Pre-edit guard hash: `8cc2fbc714e1461f48b527c5406d953515995f15d20d3db82c9f2d02ddc732e2`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1’s exact statement computes the groups but does not characterize the specific Mayer–Vietoris connecting map. Merely knowing its source and target are one-dimensional does not imply it is an isomorphism.
- Repair: removed the stronger unsupported connecting-map assertion and applied the cited sphere theorem directly at $n=2$; the ring calculation remains unchanged.
- Post-edit guard hash: `6c449e11af39703fc383efe05e9ab45aed4184f7563addc512402e1933be14b2`.
- Focused check: example precheck passes.
- Handoff preparation: synchronized the batch-9 manifest strategy and step-1.1 contract derivation with the direct $n=2$ sphere-theorem argument. The focused strict contract and explicit-item precheck both pass.
- Item-local handoff: completed; the sole Terra rejudge accepted the repaired example (`keep: true`, context `1c1e9ffee2f304cbae5aed8cfbe54f71a579fa3e3e50ca3f2faeb729669ba03c`). No final-adjudicator repair was needed.

### `def-riemannian-speed-and-length`

- Rejection: `gpt-5.6-terra`, context `75baa824234c511df68014243ad2e1caec054efa5961077e25a2f9868782dfb2`.
- Pre-edit guard hash: `1551af572f68f73961012ad6ee55ce71546eb7bcd2a4d8cc4968e2c0e05c36e5`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the numerical sum is initially subdivision-dependent, and the item neither linked nor structurally registered the following well-definedness lemma. SCHEMA’s `justified_by` relation exists for exactly this direction: the later lemma depends on the definition and discharges its well-definedness without creating a dependency cycle.
- Repair: added `lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision` to `justified_by` and replaced the unlinked “established next” with an exact citation.
- Post-edit guard hash: `feac091625569a80677efe614f7ae6be83ebe0a7f1c313a9ef75d2043f88343d`.
- Focused checks: definition precheck reports 0 checked and 0 failing. Full `depcheck --quiet` recognized the new relation and reported only the pre-existing concurrent published-audit failure on `prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps` plus warnings; no error names this item or its `justified_by` edge.
- Handoff preparation: synchronized the new `justified_by` edge in the batch-9 manifest and added the definition's item contract. The focused strict contract check passes 1/1 with zero errors or warnings; explicit-item precheck remains clean.
- Item-local handoff: completed; the sole Terra rejudge accepted the repaired definition (`keep: true`, context `10c7233bdcb3b5e36a3715e03e0bb1a930c2cf47b91cec6e20fec9bf37651fcd`). No final-adjudicator repair was needed.

### `def-riemannian-volume-of-a-compactly-supported-smooth-density`

- Rejection: `gpt-5.6-terra`, context `47c4843e2378a586f69f60308d927c0af1fa81ddc83375585c13b6b3152dc2e9`.
- Pre-edit guard hash: `635b068ab4a1002d7b2e37151f1eac227b89dd579d42697c15dce5e18e38624a`.
- Outcome: `confirmed_fatal` (`other`).
- Evidence: the original definition used $M$, $g$, $\mu_g$, and $\int_M$ without binding a Riemannian manifold, and it left the smooth function’s domain and codomain unstated.
- Repair: fixed a Riemannian manifold $(M,g)$, specified $f:M\to\mathbb R$, and located the general compactly supported signed density on $M$.
- Post-edit guard hash: `eb387dd5900e0daa6b898b45d0daab852aafe4ae05c00525ac71e7868f82780c`.
- Focused check: definition precheck reports 0 checked and 0 failing.
- Handoff preparation: synchronized those bound variables in the batch-9 manifest and added the missing definition contract, including empty/zero-dimensional and exact countable-choice boundaries. The focused strict contract check passes 1/1 with zero errors or warnings; explicit-item precheck remains clean.
- Item-local handoff: completed; the sole Terra rejudge accepted the repaired definition (`keep: true`, context `fd673b8f67bc64e1a0ff25e9c7dd724d620c6183a72416159b46c0bf219b443c`). No final-adjudicator repair was needed.

### `def-relative-homotopy-group`

- Rejection: `gpt-5.6-terra`, context `5f4fa6c858ae7ce4f3569a9f5c41cc1f11c0ab3bfdf60f7e016d0a1b9bdba9bc`.
- Pre-edit guard hash: `01cbe134ea4cb86c6dfedad094352db5e15f27b8e9f28ed56a48a4602ad36813`.
- Outcome: `confirmed_fatal` (`other`).
- Evidence: the body includes relative $\pi_1$ and expressly identifies it only as a pointed set; the following operations lemma proves a group structure only for $n\ge2$. The original unqualified title therefore overclaimed the included degree-one construction.
- Repair: retitled the item “Relative homotopy classes and groups”; the definition and its degree ranges are unchanged.
- Post-edit guard hash: `0de3cee7f10967f00044af5db089fcbc90bb10847f80540fca619f6f9bc85083`.
- Focused check: definition precheck reports 0 checked and 0 failing.
- Handoff preparation: synchronized the repaired title in the batch-8 manifest. Its existing item contract remains current and passes the focused strict check 1/1 with zero errors or warnings; explicit-item precheck remains clean.
- Item-local handoff: completed; the sole Terra rejudge accepted the repaired definition (`keep: true`, context `5aa21e467392d54f22480ce625c540b96b556902e0ae2c2ef4f5b7210dd53f9e`). No final-adjudicator repair was needed.

### `def-pullback-riemannian-metric`

- Rejection: `gpt-5.6-terra`, context `8d1edf6c81fc914e9a37f1c39d6c47b9dd376a56f700d47dd8471059f050d286`.
- Pre-edit guard hash: `3826c2e8511e7e6232afe015434d1f7a9c65d66fdfeefc5b65e0ab97e9c7387e`.
- Outcome: `confirmed_fatal` (`other`).
- Evidence: the body correctly defines a symmetric positive-semidefinite pullback tensor and defers positive definiteness to the immersion criterion. The original title nevertheless called that tensor a Riemannian metric for every smooth map; a constant map on a positive-dimensional source makes the tensor zero.
- Repair: retitled the item “Pullback of a riemannian metric as a tensor”; the mathematical definition is unchanged.
- Post-edit guard hash: `82f0ccf5f7cc07361c853ee9bfa0386228e6c662f2acf05976360f01a07d1c1e`.
- Focused check: definition precheck reports 0 checked and 0 failing.
- Handoff preparation: synchronized the batch-9 manifest title and added the missing item-specific definition contract, including the constant-map degeneracy boundary. The focused strict contract check passes 1/1 with zero errors or warnings; explicit-item precheck remains clean.
- Item-local handoff: completed; the sole Terra rejudge accepted the repaired definition (`keep: true`, context `f5126e46a66b55264ff66046154a294e09abf8021d46cd595e059caac99b5ae1`). No final-adjudicator repair was needed.

### `def-piecewise-c-one-curve-on-a-manifold`

- Rejection: `gpt-5.6-terra`, context `05b38937801a52fce779dee5655bf750d3c3b893bf8ac2e8206b771cdc4c990e`.
- Pre-edit guard hash: `7542e24e7e8f8b60bbcc23986a427984346a9f74087068d2cc6e3c75b8afa168`.
- Outcome: `confirmed_fatal` (`other`).
- Evidence: the cited `def-c-r-and-smooth-maps-between-smooth-manifolds` defines $C^1$ on open domains. The original closed-piece wording separately required only one-sided endpoint derivatives, which does not force those derivatives to agree continuously with the interior derivative.
- Repair: made the standard $C^1$-up-to-the-endpoints condition explicit in charts by requiring the interior derivative to extend continuously to both endpoints.
- Post-edit guard hash: `cad9daedb2f75891f1ba0a28259961ff483880f1224e8f423966df6eecaad380`.
- Focused check: definition precheck reports 0 checked and 0 failing.
- Handoff preflight repair: the first controller attempt stopped before any judge call because batch 9's contract scope omitted this definition. Added an item-specific boundary/risk contract and synchronized the batch-9 manifest statement with the repaired endpoint condition. Focused strict contract check now passes 1/1 with zero errors or warnings; explicit-item precheck remains clean. Retry is still owed.
- Item-local handoff: completed. The sole Terra rejudge identified that the metric-independent curve definition still called a singleton curve “of length zero” before a metric or length functional had been introduced. The final adjudicator removed only those three words and updated the contract's degenerate boundary evidence; terminal disposition is `repaired`. Final-adjudicator post-repair `itemHashGuard`: `bdf18cd0f23d646fcb4ed25f9368949831de996818c3d3a7b1912a5dfc9dc965`. No external source was needed; the repair follows directly from this item and `def-riemannian-speed-and-length`.

### `lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees`

- Rejection: `gpt-5.6-terra`, context `9b6984389aa0597e946d2d0cecea02e98919f3945309d71a082383d5466632dd`.
- Pre-edit guard hash: `220b083727864c0dc26c53f6915b4aa01e85dcba76d1ca08259a45789a2d8c01`.
- Outcome: `confirmed_nonfatal`.
- Evidence: F3 compresses proof constructions rather than the supplier's headline statement, but the cited group theorem's complete steps 1.1–3.1 explicitly give endpoint-fixed reparametrization and reversal homotopies, and step 4.1 gives the two-coordinate four-quarter interchange. The relative lemma explicitly checks that these formulas preserve the distinguished $A$-face and all fixed $J$-faces. The mathematical claim is proved; only the citation presentation is thin.
- Change/check: no content, contract, impact, or judge change; no handoff required.

### `lem-suspension-homotopy-classes-have-natural-group-structures`

- Rejection: `gpt-5.6-terra`, context `3fb7d092ede188b140fe8a770eef04cfc74a7468d2026876a3814b45198e42c6`.
- Pre-edit guard hash: `b6a313cda77493ed9dabf57845bf3b9a19c93b94dbdf8a57e521efe8d2cd3cd4`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: `def-reduced-cone-suspension-and-cofiber-sequence` defines $\Sigma X$ only for well-pointed based CGWH spaces, but the original statement assumed only based CGWH $X$. Its functoriality sentence also referred to an unbound suspended map.
- Repair: required well-pointed based CGWH $X,Y$, bound a based map $f:X\to Y$, retained based CGWH $Z$, and typed the precomposition homomorphisms induced by $\Sigma f$ and $\Sigma^2f$. Synchronized the batch-8 manifest statement.
- Post-edit guard hash: `fc00c93d08f7337d0b2f2b58f9f7c02618f3e25b20f539710e8a88942b8a5e75`.
- Focused checks: explicit-item precheck passes; strict batch-8 proof contract passes 1/1 with zero errors or warnings. Defect row `phase-2-nine-step-25-step7-d-013` was appended through the canonical interface and the generated view was refreshed.
- Item-local handoff: completed. Terra's rejudge repeated the concern that F3's statement does not expose the parametric homotopies. The final adjudicator read the complete supplier proof, independently replayed its parameterized unit, associativity, inversion and interchange formulas, verified the scoped repair against May, *A Concise Course in Algebraic Topology*, Chapter 8 §§1–2, pp.57–58, https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf, and recorded terminal disposition `accepted-after-review` without further edits. Final `itemHashGuard` remains `fc00c93d08f7337d0b2f2b58f9f7c02618f3e25b20f539710e8a88942b8a5e75`.

### `prop-coordinate-criterion-for-a-riemannian-metric`

- Rejection: `gpt-5.6-terra`, context `24a64d1470f3df2552973c0034929f3fb9f1e1ecfa41c588188a791cddc01701`.
- Pre-edit guard hash: `e8f230fc483a22b10365f4b429235ac438347c830ea86617bfc55e9bd6fbcbb8`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the global converse originally inferred that the tensor was smooth from smooth entries of an unquantified single coordinate matrix, while the exact cited F2 requires smooth coordinate components in every smooth chart.
- Repair: quantified the coordinate criterion over every smooth chart and made the same quantifier explicit in the converse proof. Synchronized the batch-9 manifest statement and proof-contract derivation.
- Post-edit guard hash: `d61ca66b3ec9e01dd2554a7932657b66ddcc2552fe97d93c1c06020b9c4a697b`.
- Focused checks: explicit-item precheck passes; strict batch-9 proof contract passes 1/1 with zero errors or warnings. Defect row `phase-2-nine-step-25-step7-d-014` was appended through the canonical interface and the generated view was refreshed.
- Item-local handoff: completed; the sole Terra rejudge accepted the repaired proposition (`keep: true`, context `e776f547a9f0df59fcfeeb5b27590e4ddb95ec046c9715bacfb3a502677a032b`). No final-adjudicator repair was needed.

### `prop-cubical-and-spherical-models-of-higher-homotopy-agree`

- Rejection: `gpt-5.6-terra`, context `f7834c3f008a793a9823b491a64cf6027075cce4fd6c30f9802b6de34cbf0ef7`.
- Pre-edit guard hash: `b6ff30795306f88dc8a8e174b9276cec116d362a99befa17be8fef1267c20b31`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: an orientation-preserving homeomorphism of the collapsed-boundary cube with the sphere need not send the quotient point to the sphere's chosen basepoint. Under such an identification, pullback of a based sphere map need not be boundary-constant, invalidating the stated based bijection and proof step 2.1.
- Repair: required an orientation-preserving based homeomorphism, named both basepoints, took the north pole as the sphere basepoint in the explicit construction, and specified that the spherical pinch is transported through that homeomorphism. Synchronized the batch-8 manifest and proof contract.
- Post-edit guard hash: `7cce647692b10302ede5abd2d07a640cde1e193f00b8f3ae92cf7eb838631934`.
- Focused checks: explicit-item precheck passes; strict batch-8 proof contract passes 1/1 with zero errors or warnings. Defect row `phase-2-nine-step-25-step7-d-015` was appended through the canonical interface and the generated view was refreshed.
- Item-local handoff: completed; the sole Terra rejudge accepted the repaired proposition (`keep: true`, context `777a541519ca749e5575daf8bf0afdac4d3c159e3889407b10d53f4e3ba9c124`). No final-adjudicator repair was needed.

### `prop-de-rham-cohomology-is-a-contravariant-functor`

- Rejection: `gpt-5.6-terra`, context `db64c329a8d9b50f09a6d9707bb0a54890069e003aaaa14cb7401a53941f2e12`.
- Pre-edit guard hash: `49556e8ca4f7eb51aa5fdec3b7e8392c6636f055645d86f066cbfe5453f548e9`.
- Outcome: `confirmed_nonfatal`.
- Evidence: F2 does not itself state that pullback commutes with $d$, so step 1.1's description as an identity of cochain maps is not directly licensed. However, F1 already defines the induced map by $F^*[\omega]=[F^*\omega]$, and F2 gives composition and identity pullback on every form. Applying those identities to an arbitrary closed representative immediately proves the two map identities; F3 is unnecessary for that elementary calculation.
- Change/check: no content, contract, impact, or judge change; no handoff required.

### `prop-explicit-de-rham-mayer-vietoris-connecting-class`

- Rejection: `gpt-5.6-terra`, context `6dbe64d85d4c40ad704fd7bd63a335384ea4295600d7201d361f2e621907218f`.
- Pre-edit guard hash: `b57239ef7ba231340e5da2ff7f0ab80aa40122475458062293276da0f367f1ab`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the proof applied the elementwise connector formula to an unnamed short exact sequence and equated that connector with F1's displayed $\delta$, although F1's quoted exactness statement alone neither identifies the inducing cochain sequence nor fixes the connector sign.
- Repair: added the exact short de Rham cochain sequence as a direct dependency and F3, explicitly defined $\delta$ using its $C_n=C^{-n}$ reindexing and F4's elementwise connector convention, and applied the formula to that normalized sequence. Synchronized the batch-9 manifest and regenerated the item's exact citation/derivation contract entries.
- Post-edit guard hash: `19d416da94b7fa7bbd6c94bc072fd2bc0cda4b76f901cbfc042b5613820a42ce`.
- Focused checks: explicit-item precheck passes; strict batch-9 proof contract passes 1/1 with zero errors or warnings. The required unified frontier ledger refresh completed successfully. Defect row `phase-2-nine-step-25-step7-d-016` was appended through the canonical interface and the generated view was refreshed.
- Item-local handoff: completed. Terra's sole rejudge repeated that F1's exactness statement alone cannot normalize $\delta$. The final adjudicator verified that the repaired Statement itself defines $\delta$ from F3 under $C_n=C^{-n}$ and F4's elementwise convention, replayed the sign and independence calculation from all four direct suppliers, and recorded terminal disposition `accepted-after-review` without further edits. Final `itemHashGuard` remains `19d416da94b7fa7bbd6c94bc072fd2bc0cda4b76f901cbfc042b5613820a42ce`.

### `prop-hodge-star-squared-sign`

- Rejection: `gpt-5.6-terra`, context `cafbc1e1ae014624d1326d9e758e69098462f9de2021d093fb757a78f8b185d6`.
- Pre-edit guard hash: `d27c61efabc0e5e76270ffb83b78d86d99312e69e1d659b99a4b21d993cd6647`.
- Outcome: `confirmed_nonfatal`.
- Evidence: F1's headline statement does not expose the orthonormal-wedge formula, but its complete proof step 1.1 explicitly constructs $*e^I=\epsilon(I,I^c)e^{I^c}$. Applying that same construction to $I^c$ gives the two signs in this item's step 1.1, and swapping blocks of lengths $k$ and $n-k$ contributes exactly $k(n-k)$ transpositions. The claim and derivation are correct; only the abbreviated F1 presentation is thin.
- Change/check: no content, contract, impact, or judge change; no handoff required.

### `prop-loop-suspension-adjunction-on-based-homotopy-classes`

- Rejection: `gpt-5.6-terra`, context `8e1265e97863d0eaecf1f5caec28c1a6473b854c71d89efb593d4c97bae0a351`.
- Pre-edit guard hash: `f619f732fd3a71e45b52d2b33ebebfdddba82607742055a353bc7898c1a3081c`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: `def-reduced-cone-suspension-and-cofiber-sequence` defines $\Sigma X$ only for well-pointed based CGWH $X$, but the original statement quantified over arbitrary based CGWH $X$ and used that construction in both directions.
- Repair: added exactly the missing well-pointedness hypothesis for $X$, retained based CGWH $Y$, and synchronized the batch-8 manifest statement. The adjunction formulas and naturality proof are unchanged.
- Post-edit guard hash: `07ae8f00d1a34eb7495e18e0c40d4802aa6b297d5a399e6d8906fee877c97262`.
- Focused checks: explicit-item precheck passes; strict batch-8 proof contract passes 1/1 with zero errors or warnings. Defect row `phase-2-nine-step-25-step7-d-017` was appended through the canonical interface and the generated view was refreshed.
- Item-local handoff: completed; the sole Terra rejudge accepted the repaired proposition (`keep: true`, context `f140d92cfc2349518153e16e4ae33acb73977ddc1591336b09baf07ed0b9cb04`). No final-adjudicator repair was needed.

### `prop-pullback-is-a-homomorphism-of-de-rham-cohomology-algebras`

- Rejection: `gpt-5.6-terra`, context `ccd0608b272384104e849e251f1ae7967cc1f810cdaa39600ea558588ee6c9f3`.
- Pre-edit guard hash: `a12dc374e9084456739a7ff29359ee4ec24cc4f438a698d9c7b3a44a87a9f4d5`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1 supplied functorial identities for already-induced cohomology maps and F3 supplied wedge-preserving pullback on forms, but neither stated interface identified the two overloaded pullback notations. The central calculation requires the exact class formula $F^*[\omega]=[F^*\omega]$.
- Repair: added `thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology` as a direct dependency and F4, then cited its exact formula in both the multiplicativity and unit calculations. Synchronized the batch-9 manifest and regenerated the item's citation/derivation contract entries.
- Post-edit guard hash: `137f1d25503621aa3a0eaaefae338a963d1dc67ba1aa7e539c6bc604ad7f08b4`.
- Focused checks: explicit-item precheck passes; strict batch-9 proof contract passes 1/1 with zero errors or warnings. The required unified frontier ledger refresh completed successfully. Defect row `phase-2-nine-step-25-step7-d-018` was appended through the canonical interface and the generated view was refreshed.
- Item-local handoff: completed; the sole Terra rejudge accepted the repaired proposition (`keep: true`, context `a5b850b38d84a61e5ff09554381d19674469f0600d245cad6defc0adb3f5d770`). No final-adjudicator repair was needed.

### `prop-riemannian-inner-product-of-compactly-supported-forms`

- Rejection: `gpt-5.6-terra`, context `85c4fea99a06775e249e9220750f3416acb31a887724250cf4841adc67639b02`.
- Pre-edit guard hash: `59ff240d9fad1945b4b1dd27f21fa4a594f18cebf11457c972407b0477655092`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the proof's central identity $\alpha\wedge*\beta=\langle\alpha,\beta\rangle_g\operatorname{vol}_g$ is the Hodge star's defining interface. The original F1 only stated existence, uniqueness, smoothness, and bundle-isomorphism status, which do not imply that identity or positivity.
- Repair: added `def-riemannian-hodge-star` as a direct dependency and F5, then cited its characteristic equation in the bilinearity and positive-definiteness steps. Synchronized the batch-9 manifest and regenerated the item's citation/derivation contract entries.
- Post-edit guard hash: `2b4856b93aa4e1d48b5eee3842b5bd2c7bc2a5a0292530cfaaf0ad3dc5e38688`.
- Focused checks: explicit-item precheck passes; strict batch-9 proof contract passes 1/1 with zero errors or warnings. The required unified frontier ledger refresh completed successfully. Defect row `phase-2-nine-step-25-step7-d-019` was appended through the canonical interface and the generated view was refreshed.
- Item-local handoff: completed; the sole Terra rejudge accepted the repaired proposition (`keep: true`, context `d836777cc39dd42446aa9aff3b39760fb8c5f2d7e3d874d532ad04764d4a81eb`). No final-adjudicator repair was needed.

### `thm-based-sphere-maps-are-classified-by-geometric-degree`

- Rejection: `gpt-5.6-terra`, context `6978619af251ba0f3ef3646baf52bc0d7a4b67aa1de395d8f766efb9d2fbf1f2`.
- Pre-edit guard hash: `7dd34df400d069ced6dc4f5619f1b45d4c5218d2ec1136f29cbc9a35b2ff5b7d`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1 restated `lem-finite-affine-bubbles-represent-signed-cubical-sums` as asserting that every class has a finite signed-bubble form, while its exact statement is conditional on the preceding finite normal form. Steps 4.1 and 5.1 therefore lacked a cited existence premise.
- Repair: added `lem-based-sphere-maps-have-finite-affine-bubble-normal-forms` directly as F1 for existence, moved the conditional signed-sum conclusion to F11, and used each only in its valid role. Synchronized the batch-8 manifest and regenerated the item's citation/derivation contract entries.
- Post-edit guard hash: `2dc78434141efb5a4ed69e8ee1b83f2fcec39e56b6215f71c9ebda16e230ec1a`.
- Focused checks: explicit-item precheck passes; strict batch-8 proof contract passes 1/1 with zero errors or warnings. The required unified frontier ledger refresh completed successfully. Defect row `phase-2-nine-step-25-step7-d-020` was appended through the canonical interface and the generated view was refreshed.
- Item-local handoff: completed. Terra's sole rejudge found that step 4.1 still treated arbitrary invertible bubble matrices as only positive scalings followed by identity/reflection. The final adjudicator repaired that step by comparing the arbitrary affine representative to a separately constructed standard $I/J$ bubble representative through F11's signed-class conclusion, then performing the local-degree calculation only on the standard representative. The adjudicator synchronized the strategy, coverage support and proof contract, refreshed the frontier ledger, verified the relevant degree/local-degree/suspension claims against Hatcher, *Algebraic Topology*, §2.2, pp.134–137, https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf, and recorded terminal disposition `repaired`. Final `itemHashGuard`: `d9ee04db2be4978c4e7be4826e26e16ad47f70d9d4b48217c7561989860b0390`.

### `thm-de-rham-homotopy-formula-on-a-product`

- Rejection: `gpt-5.6-terra`, context `6bf5efc18dd0b10821a8e5d4dd17d0cdb977aa91844e06ceca4329f66a67f8ab`.
- Pre-edit guard hash: `46a15a19d7482e74c849b8370abb0856506d5d6090376b76623fbb1ed59bf791`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1 states only coordinate independence and smoothness of $K$; it does not supply either $K\omega=\int_0^1\beta_tdt$ or $d_MK\omega=\int_0^1d_M\beta_tdt$. Both are essential to steps 1.1–2.1.
- Repair: added the interval-integral definition as F4 and compact-parameter differentiation theorem as F5. Step 1.1 now invokes the defining integral explicitly, and step 2.1 derives commutation with $d_M$ coefficientwise from F5 and the coordinate exterior-derivative formula. Synchronized the batch-9 manifest and regenerated the item's citation/derivation contract entries.
- Post-edit guard hash: `24de35e986f84701569a13ee466182a4fae15555e42435a3f9e8bd8a5e2df561`.
- Focused checks: explicit-item precheck passes; strict batch-9 proof contract passes 1/1 with zero errors or warnings. The required unified frontier ledger refresh completed successfully. Defect row `phase-2-nine-step-25-step7-d-021` was appended through the canonical interface and the generated view was refreshed.
- Item-local handoff: completed; the sole Terra rejudge accepted the repaired theorem (`keep: true`, context `9b298bf3c6fa5ad1a4e39f09f297c8aca5713e96c1f83b76dcd130f544b35523`). No final-adjudicator repair was needed.

### `thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one`

- Rejection: `gpt-5.6-terra`, context `e7c03046e9a717ed53677035b767ebf71a7abd12d8cdb7cc510fa3476c857328`.
- Pre-edit guard hash: `cafafc44d7c0577407f16cde64fb65364559420e4df5e6519efa64aec58ce0ba`.
- Outcome: `confirmed_nonfatal`.
- Evidence: F2's headline statement does not expose endpoint-fixed reparametrization formulas, although its full proof does. More importantly, this theorem independently writes and checks the unit homotopies in 1.1, the associativity reparametrization in 2.1, both inverse contractions in 3.1, and the two-coordinate interchange in 4.1. F1 licenses pasting and representative independence. F2 is therefore redundant to the complete local argument rather than a missing mathematical premise.
- Change/check: no content, contract, impact, or judge change; no handoff required.

### `thm-mapping-cylinder-factorization`

- Rejection: `gpt-5.6-terra`, context `7cebcaac6433a4137fa6e437c3b88d13a2d452066fd68655cbcd3236d68d7913`.
- Pre-edit guard hash: `5e0dd5ac5810f56e361f00481a9e9dbced2e1318f7539270a2164b5f9ad13d64`.
- Outcome: `confirmed_nonfatal`.
- Evidence: F2's headline statement explicitly gives a closed embedding only for the attached target, not the disjoint free end. Its complete proof step 3.1, however, proves that every closed subset of the attaching space disjoint from the attaching locus embeds as a closed subspace; applying this to $X\times\{1\}$ gives exactly the free-end assertion. Moreover, that closedness sentence is not used in the direct HEP construction of steps 1.2–2.1. The factorization, deformation, cofibration, naturality, and based claims remain proved.
- Change/check: no content, contract, impact, or judge change; no handoff required.

## Repairs and rejudge targets

All 21 `confirmed_fatal` items completed their required item-local handoffs. Fifteen were accepted on their sole Terra rejudges. Six rejected rejudges reached terminal resolution: `def-n-connected-space-and-n-connected-map`, `def-piecewise-c-one-curve-on-a-manifold`, and `thm-based-sphere-maps-are-classified-by-geometric-degree` were repaired by the final adjudicator; `lem-finite-affine-bubbles-represent-signed-cubical-sums`, `lem-suspension-homotopy-classes-have-natural-group-structures`, and `prop-explicit-de-rham-mayer-vietoris-connecting-class` were accepted after independent final review. The first of those resolutions later became context-stale for the reason recorded below; its item bytes remain unchanged.

## Alerts and blockers

- The earlier sandbox `EPERM` handoff blocker is resolved through the controller-side launch path. All twelve owed item-local handoffs have completed.
- The group-d Alpha ledger has 30 exact adjudications: 21 `confirmed_fatal`, six `confirmed_nonfatal`, and three `false_positive`. Every repaired item completed its engine-managed handoff.
- The full Step-7 guard exits 0: all 82 changed items are licensed, with zero errors and zero warnings.
- The strict Step-7 scope check exits 0: eight groups and 760 items are partitioned, and all three reader warnings/alerts have dispositions. Its one routed rejection is the exhausted Terra rejudge of `lem-finite-affine-bubbles-represent-signed-cubical-sums`, context `9b776b65ec1860b1f36c68cae7bdfab772fc8e83f3a1d4cc6a37f54e8a7fc606`.
- The terminal-resolution check reports 22 current resolutions and one error: that finite-bubble resolution is stale against the current context. The terminal row binds item hash `f10721b18d11991a63cde2ae6105db0aa9045a1e23cac4abec0814baa46c55f9` and context `9b776b65ec1860b1f36c68cae7bdfab772fc8e83f3a1d4cc6a37f54e8a7fc606`; the current hashes are the same item hash and context `ba03539dca99696ea6eb442944df1e3f3449a09b8c96af3e860bd9948b08eb88`. Thus no consumer content changed after review. The context changed when the direct supplier `prop-cubical-and-spherical-models-of-higher-homotopy-agree` received its later licensed based-homeomorphism repair.
- A fresh required item handoff was attempted and exited 1 with `paid rejudge has no current result; no second call permitted`. No second judge call was requested or made. This exhausted item now needs an engine-routed final-adjudicator reseal against the current dependency context; Alpha cannot manufacture a new Sol adjudication or buy another rejudge.
- No other group-d mathematical, alert, handoff, or validation blocker remains.

## Next action

Return control to the engine to route the exhausted finite-bubble item for a current final-adjudicator resolution, then recompute whole-run closure. No further Alpha edit or judge call is authorized.
