# B8 consumers: final mathematical review

Run: `frontier-37-owner-30`  
A/B pair: `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`  
Current scope hash: `08837e28c980889f9e9221ded93c7f3cad8ca1cbe2d80e514c1c6eb9488bc698`  
Review date: 2026-10-01

## Scope and disposition

This report reviews exactly the last 29 B8 items, from `thm-full-riemann-roch-divisor` through `ex-residue-pairing-one-cocycle`. I read each current item body and independently followed its load-bearing proof suppliers. The previous degree/base-change, canonical-map, plane-curve, duality-consumer, residue-example, and double-cover reports were used as routes for inspection, not as evidence of acceptance.

The mathematical arguments in the current consumer bodies are sound on their stated hypotheses. The Step 1.1 surjectivity justification in `cor-unramified-cover-curves-genus-complete` has now been repaired under root’s release: the proof rules out a point image using the finite affine-preimage algebra, then uses closedness and connectedness to obtain surjectivity. I inspected the actual finite-map and curve suppliers used in that argument.

The five example/counterexample bodies listed below and the narrowly released Step 1.1 repair received only their specifically authorized edits. Those six items are excluded from this receipt lane and routed to independent agent 3. Their current bytes are stable. No other item body was edited in this lane.

The B8 scope is closed by the current owner `proceed` receipt for the hash above. For the 23 released targets in manifest ordinals 30–58 after excluding the six repaired items, the current API snapshot confirms 23 closed confidence-1 `accept` decisions, each with dependencies matching current declarations. This lane recorded all 23 accepts through `recordStep3`; the existing acceptance for `cor-h1-line-bundle-dual-sections` is ordinal 29 and outside this target window, so it is not counted. The six repaired items excluded from this lane remain with agent 3. No gate was run.

## Item-by-item findings

| Ordinal | Item | Mathematical disposition and exact review note |
|---:|---|---|
| 30 | `thm-full-riemann-roch-divisor` | The proof combines the Euler-characteristic formula with line-bundle Serre duality and the dual `H^1` dimension; the conclusion is the full divisor formula, not only the nonspecial case. No consumer-level contradiction found. Its proof-source chain remains unclosed. |
| 31 | `cor-h0-canonical-differentials-genus` | The current proof establishes `h^0(C,ω_C)=g` under its stated smooth proper curve hypotheses; this is the canonical-differentials dimension used by the full Riemann–Roch and canonical-degree arguments. No consumer-level gap found. Its current confidence-1 acceptance uses the declared dependency set. |
| 32 | `cor-canonical-degree-two-g-minus-two` | The degree calculation follows from the full Riemann–Roch formula and the canonical-section dimension; the genus term is `2g-2`. No issue found in this consumer. |
| 33 | `cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two` | The strict inequality gives `deg(K_C ⊗ L^{-1}) < 0`, so the negative-degree no-section result applies. The boundary degree `2g-2` is not included. No issue found. |
| 34 | `cor-rr-exact-high-degree-formula` | The asserted exact high-degree formula follows from the preceding `H^1`-vanishing result and full Riemann–Roch. Its strict degree hypothesis is used correctly. |
| 35 | `thm-degree-two-g-line-bundle-basepoint-free` | The pointwise evaluation argument uses (H^1(L(-p))=0), with `deg L(-p)≥ 2g-1>2g-2`, for every geometric point in the stated setting. This proves generation at each point. No consumer-level gap found. |
| 36 | `thm-degree-two-g-plus-one-line-bundle-very-ample` | The proof separates length-two subschemes, including the nonreduced first-jet case, by the corresponding `H^1`-vanishing. The degree bound `2g+1` gives the required strict inequalities. No consumer-level gap found. |
| 37 | `def-hyperelliptic-curve` | The definition uses a degree-two map/linear-system criterion only in the stated positive-genus range; it does not impose generic separability and does not assert a genus-zero gonality equivalence. The field and point qualifiers remain as stated. No defect found. |
| 38 | `thm-canonical-map-nonhyperelliptic-curve` | The canonical-system argument proves the claimed embedding criterion. In characteristic two, the degree-two function-field extension is shown separable before the proof uses two distinct geometric generic-fiber points; the proof does not silently assume that every degree-two map is separable. The finite-algebra argument uses the whole finite algebra over the target local ring, not an unsupported claim that an individual source stalk is finite. No fatal gap found. |
| 39 | `thm-adjunction-smooth-plane-curve` | The adjunction isomorphism gives `K_C≅O_C(d-3)` with the stated smoothness and plane-curve hypotheses. The current accept receipt is hash-current. No issue found. |
| 40 | `cor-genus-degree-smooth-plane-curve` | Combining adjunction with the degree of `O_C(1)` yields `2g-2=d(d-3)` and hence the stated genus. No extra assumption is used by the consumer. |
| 41 | `lem-degree-pullback-divisor-finite-morphism-curves` | The degree identity is justified by finite flatness over the target DVR (finite torsion-free modules over a DVR are free) and the fiber algebra `B ⊗_R O_{D,q}`, which is finite semilocal and decomposes into local Artin factors of dimensions `e_p[κ(p):κ(q)]`. This proves the residue-degree-weighted sum without calling an arbitrarily localized source stalk finite. No mathematical defect found. |
| 42 | `thm-riemann-hurwitz-complete` | The theorem explicitly assumes a separable function-field extension. The different/divisor term supports wild ramification in positive characteristic; the proof does not replace it by a tame branch count. No theorem-level gap found, conditional on the current different suppliers. |
| 43 | `cor-unramified-cover-curves-genus-complete` | **Narrowly repaired body; excluded for agent 3’s independent review.** Step 1.1 now proves a point image impossible: over an affine neighborhood of the image point, finiteness makes the preimage algebra finite, and integrality makes it a finite-dimensional residue-field algebra, contradicting curve dimension one. The finite map is closed; any proper closed image is finite by the curve lemma and, being a connected image, would be a point. Thus the cover is surjective. AC is declared in Given and accounted for through the cited closed-image and curve-subset suppliers. No remaining consumer-level gap found. |
| 44 | `thm-genus-one-canonical-bundle-trivial` | The genus-one canonical section has an effective zero divisor of degree zero, hence no zeros, so it trivializes `ω_C`. The hypotheses supply the needed smooth proper curve and genus. No issue found. |
| 45 | `cor-degree-three-line-bundle-embeds-genus-one-plane-cubic` | The degree-three very-ampleness result gives a closed embedding with a three-dimensional complete section space; the image has degree three. The argument is consistent with the genus-one canonical and Riemann–Roch inputs. No consumer-level gap found. |
| 46 | `rem-duality-trace-normalization` | The remark fixes the duality trace convention used downstream. The residue/trace sign is consistent with the later pairing and is not silently switched. No issue found. |
| 47 | `rem-general-serre-duality-deferred` | The text marks the broader duality statement as deferred rather than using it as an established theorem. Its limited claim is appropriate. No issue found. |
| 48 | `ex-residue-projective-line` | At a finite closed point the calculation uses the local parameter `u=g(t)` and `du=g′(t)dt`, giving the transformed coefficient with the correct residue-field trace. It uses `dt` as a rational differential, not as a global frame at every point. No frame or characteristic gap found. |
| 49 | `ex-serre-duality-projective-line-twists` | The twist calculation uses the actual line-bundle transition/frame data and the fixed trace normalization. The pairing and dimensions agree on the stated projective-line twists. No issue found. |
| 50 | `ex-full-rr-projective-line` | **Repaired body; excluded for agent 3’s independent review.** The section argument now takes an actual `f ∈ L(D)` and the effective divisor `E=D+div(f)`; principal divisors have degree zero. If `deg E=1`, its single degree-one closed point is `k`-rational, so the effective divisor is exactly `[p]`. This supports the singleton effective representative claim without treating a section symbol as a divisor. |
| 51 | `ex-genus-one-rr-degree-positive` | **Repaired body; excluded for agent 3’s independent review.** It defines `D_s=div_C(s)` for a nonzero section and uses `D_s ∼ D`; it no longer writes the ill-typed `D+(s)`. The degree-one effective divisor is exactly a rational point. The opening and proof state AC and derive the needed DC use through the cited AC-implies-DC result. |
| 52 | `ex-plane-cubic-canonical-trivial` | **Repaired body; excluded for agent 3’s independent review.** Adjunction identifies the canonical bundle as trivial; the complete canonical system has target `P^0`. The text no longer rules out arbitrary positive-dimensional maps. The converse retains its rational-point hypothesis, and the proof states its choice principle. |
| 53 | `ex-plane-quartic-canonical-hyperplane` | Adjunction identifies the canonical bundle with the hyperplane bundle on a smooth plane quartic; its complete canonical system is the plane embedding. The genus and completeness claims agree with the earlier plane-curve results. No issue found. |
| 54 | `cex-canonical-map-hyperelliptic-not-embedding` | The counterexample uses the degree-two map and the canonical-map factorization in the stated genus range; the current canonical-map proof supplies the characteristic-two separability point when distinct generic geometric points are invoked. No overbroad claim about inseparable maps was found. |
| 55 | `cex-degree-two-g-minus-one-not-always-basepoint-free` | **Repaired body; excluded for agent 3’s independent review.** The example retains its sharp degree-(2g-1) conclusion and field hypotheses. The genus-one aside now uses the proved statement `K_C ∼ 0` (not an arbitrary representative `K_C=0`) and the principal-divisor bridge to identify `O_C(K_C+p) ≅ O_C(p)`. The opening and proof state AC and its DC consequence. |
| 56 | `cex-degree-two-g-not-always-very-ample` | **Repaired body; excluded for agent 3’s independent review.** The arbitrary-field witness now requires a `k`-rational point; basepoint-freeness uses the degree-`2g` theorem, while the first-jet quotient at that rational point is unchanged. The genus-one pencil statement now distinguishes pullbacks of `k`-rational points (degree two) from pullbacks of arbitrary closed points `q` (degree `2[κ(q):k]`). The projective-coordinate argument still uses ordered generating data, without a false complete-map/PGL assertion, and preserves all-characteristic scope. |
| 57 | `ex-riemann-hurwitz-double-cover` | The concrete double-cover calculations use the actual affine charts and relative differentials. The simple-branch discussion retains characteristic `≠2` and its branch-point hypotheses; the proof does not assert a generic-separability or distinct-branch conclusion for a characteristic-two degree-two map. The different term is consistent with the separable Riemann–Hurwitz theorem. |
| 58 | `ex-residue-pairing-one-cocycle` | The cocycle calculation uses line-bundle frames and their transition functions, with the fixed negative-trace pairing convention. The local residue expression is invariant under the stated change of frame; no unqualified `dt`-frame assertion occurs. No issue found. |

## Upstream proof-source closure

Read-only `itemDecision` checks still show stale owner-held escalation receipts in the Riemann–Roch/duality route, including `thm-cartier-weil-divisors-curves-agree`, `thm-riemann-roch-euler-characteristic-curve`, `thm-serre-duality-curves-line-bundles`, `cor-projective-embedding-every-smooth-proper-curve`, and `lem-global-residue-pairing-dimension-balance`. The finite-map/canonical route likewise has stale receipts for `lem-degree-pullback-divisor-finite-morphism-curves`, `thm-canonical-bundle-ramification-formula`, `thm-riemann-hurwitz-complete`, and `thm-genus-one-canonical-bundle-trivial`; `thm-curve-different-local-support-and-index-bound` has no current item audit. Several residue-pairing prerequisites also have stale escalation receipts. These historical decision states are not mathematical gaps by themselves; the actual load-bearing bodies were independently inspected.

The current degree-pullback lemma and canonical-map theorem address the previously raised semilocal-algebra and characteristic-two concerns as described above. For the Step 1.1 repair, I inspected `def-finite-morphism-schemes`, `thm-finite-morphism-integral-closed`, `lem-curve-closed-subsets-finite`, `def-algebraic-curve-over-field`, and `def-integral-scheme`. The 23 ordinary receipts above use the current pair scope and exact current dependency declarations.

## Step 3 receipt snapshot

The B8 pair `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` is currently closed at scope hash `08837e28c980889f9e9221ded93c7f3cad8ca1cbe2d80e514c1c6eb9488bc698`. Among ordinals 30–58, the following six repaired items were excluded from this lane for agent 3’s independent review: `ex-full-rr-projective-line`, `ex-genus-one-rr-degree-positive`, `ex-plane-cubic-canonical-trivial`, `cex-degree-two-g-minus-one-not-always-basepoint-free`, `cex-degree-two-g-not-always-very-ample`, and `cor-unramified-cover-curves-genus-complete`.

For the 23 released targets, a read-only post-write API check confirmed every item is closed with `decision: accept`, `confidence: 1`, and dependency IDs equal to the current frontmatter declarations. All 23 accepts were recorded through `recordStep3`; the omitted `cor-h0-canonical-differentials-genus` receipt was added after the root’s API inventory identified it. Its receipt hash is `e9f8a9ab5eec200b4e20cca193345068b568b975bbb03cc5a1dc372b4671692e`. No scope, source, carrier, or gate file was changed by this lane.

## Released body hashes

These hashes identify the six repaired item bytes reviewed here. The carrier refresh is owned by `s3_b8_integration`; this report makes no carrier changes.

| Item | SHA-256 |
|---|---|
| `ex-full-rr-projective-line` | `23ae467c4e142a856927f579ec428b006fb3e687d5db9e2c2d404f65206b81e1` |
| `ex-genus-one-rr-degree-positive` | `f11c6aeb518a4e297969f8dbb2b6bfb7bda6c5c573649dc6c3302996cb28f77b` |
| `ex-plane-cubic-canonical-trivial` | `a7da7da015d011d96ad29931177ce7b06613f0d87bd24b3294d57cd1cddbc349` |
| `cex-degree-two-g-minus-one-not-always-basepoint-free` | `514d4ac34a52601be9202cdfbcc4ee2aa2e8c6fb3b8a3cb701f97ca44bb6fe84` |
| `cex-degree-two-g-not-always-very-ample` | `ecac21fae3fc627b24e97a27567571f2731a517ea857ce2bc9e596e23ea2d028` |
| `cor-unramified-cover-curves-genus-complete` | `19ca657848421befa557e6cc6062898cc6905fef145d68cc3c55627e444350aa` |

## Files consulted as audit routes

`research/frontier-37-owner-30-duality-consumers-current-audit.md`, `research/frontier-37-owner-30-degree-base-change-repair-route.md`, `research/frontier-37-owner-30-residue-examples-repair-route.md`, `research/frontier-37-owner-30-b8-foundations-final-math-review.md`, and the active B8 Step 3b task sheet. Current item bodies and load-bearing suppliers were independently inspected for this report.
