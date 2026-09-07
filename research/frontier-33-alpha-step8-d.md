# Frontier 33 Step 8 adjudication — group d

## Scope and result

I read all six assigned pages, all 138 owned items, every dependency touched by a rejection, and the Step-7 context. The 24 exact rejection tuples assigned to group d are each represented once in `research/frontier-33-judge-adjudications.jsonl`:

- 20 `confirmed_fatal`; each received a minimal content repair and is a rejudge target.
- 3 `confirmed_nonfatal`; no content, contract, impact, or judge metadata changed.
- 1 `false_positive`; no content, contract, impact, or judge metadata changed.

Exactly 20 of the 138 owned items differ from the `pre-step8` item-hash baseline, and they are exactly the 20 confirmed-fatal items. No new lemma was needed. There were no Step-7 reader warnings or incoming cross-group alerts for this group, and this adjudication produced no cross-group finding.

## Sources consulted

| Source and locator | Claim checked |
|---|---|
| Allen Hatcher, [Algebraic Topology, Chapter 2](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf), Proposition 2.33 and its cone-pair proof | Suspension preserves the degree of a sphere map by naturality of the suspension isomorphism; the construction is not dependent on choosing a based map. This supports the `confirmed_nonfatal` disposition for `prop-suspension-preserves-sphere-map-degree`. |
| Allen Hatcher, [Algebraic Topology, Chapter 2](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf), Lemma 2.34 | A nested CW union can be compared with its mapping telescope using slab deformations whose pointwise concatenation is eventually stationary, with continuity supplied by the weak topology. This supports the repaired telescope argument. |
| Allen Hatcher, [Algebraic Topology](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf), Proposition 0.16 | For a CW pair, the cylinder inclusion is a cofibration and the relevant homotopy equivalence admits a global deformation relative to the subcomplex. This supports replacing incompatible cellwise radial retractions by one global slab deformation, with filtered compatibility obtained by HEP induction. |

## Confirmed-fatal repairs

| Item | Defect type | Repair |
|---|---|---|
| `cor-classical-three-dimensional-stokes-theorem` | `dependency_citation` | Added the `AC_omega` hypothesis required by the cited general Stokes theorem. |
| `cor-closed-compactly-supported-forms-integrate-to-zero-on-boundaries` | `dependency_citation` | Added the `AC_omega` hypothesis required by the cited general Stokes theorem. |
| `cor-fundamental-theorem-of-calculus-from-stokes` | `dependency_citation` | Added `AC_omega` to the Stokes-derived formulation; the separate Riemann FTC comparison is unchanged. |
| `cor-greens-theorem-from-general-stokes` | `dependency_citation` | Added `AC_omega` to both identities derived from general Stokes. |
| `cor-index-zero-handles-create-components` | `dependency_citation` | Added `AC_omega`, required by the handle-attachment definition, and synchronized its copied fact with the repaired definition. |
| `cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero` | `dependency_citation` | Added `AC_omega`, the exact hypothesis of the cited general Stokes theorem. |
| `def-attaching-a-smooth-handle-with-corner-rounding` | `other` | Bound `k` as an integer satisfying `0 <= k <= n` before using the corresponding disk and sphere dimensions. |
| `def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold` | `other` | Defined the zero-dimensional sign `epsilon(p)` from the chosen orientation of `Lambda^0 T_p^*M congruent to R`. |
| `ex-exact-top-form-with-nonzero-integral-on-a-manifold-with-boundary` | `logic` | Specified the standard `dx wedge dy` orientation, under which the integral is `pi`, and added `AC_omega` for the Stokes computation. |
| `lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group` | `logic` | Narrowed the title from arbitrary homology theories to ordinary homology theories, matching the dimension-axiom hypothesis. |
| `lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair` | `logic` | Narrowed the title from arbitrary homology theories to ordinary homology theories, matching the statement and proof. |
| `lem-coefficient-comparison-on-finite-cw-pairs` | `dependency_citation` | Added `lem-oriented-simplex-comparison-for-an-ordinary-homology-theory` as the source of the coefficient-normalized isomorphisms and retained the existing polyhedral lemma only for continuous naturality, subdivision, and boundary compatibility. |
| `lem-comparison-maps-between-homology-theories-extend-over-one-skeleton-stage` | `logic` | Retitled the item to say that a comparison isomorphism propagates over one skeleton stage; the item assumes rather than constructs the morphism. |
| `lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary` | `logic` | Separated the arbitrary-form identities from the graded Leibniz identity and bound homogeneous `alpha in Omega^p`, `beta in Omega^q` with sign `(-1)^p`. |
| `lem-gradient-flow-identifies-the-local-and-global-attaching-regions` | `logic` | Added a named nondegenerate critical point `p` of index `k` and bound the critical value by `c=f(p)`. |
| `lem-the-skeletal-telescope-projects-by-a-homotopy-equivalence-of-pairs` | `logic` | Replaced incompatible independent characteristic-cell retractions by a single global slab strong deformation retract; added the exact CW-pair lemma and used filtered HEP induction for skeleton and subpair compatibility before the eventually stationary concatenation. |
| `prop-general-stokes-agrees-with-classical-gauss-flux` | `dependency_citation` | Left the coordinate identities unconditional and conditioned only the divergence-theorem consequence on `AC_omega`. |
| `prop-on-an-oriented-manifold-top-forms-and-signed-densities-correspond` | `dependency_citation` | Left the bundle and support assertions unconditional and conditioned only integral preservation on `AC_omega`; synchronized the zero-dimensional sign convention. |
| `thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement` | `dependency_citation` | Added `AC_omega`, required by the integral definition and partition construction, and synchronized the copied definitions. |
| `thm-oriented-chart-integrals-are-coordinate-independent` | `dependency_citation` | Added `AC_omega`, required by the partition-of-unity localization used in the proof. |

The exact pre/post `itemHashGuard` pairs are:

```text
cor-classical-three-dimensional-stokes-theorem 8666b7ee4b93edbc1de4f178539eeb930a386fe83e388506e37c5820901333d2 -> bfd649d1453092872c2385c626c9b5dc2dc036321240fe5ee7fa29926a79e8a8
cor-closed-compactly-supported-forms-integrate-to-zero-on-boundaries 49d66ec4b9469155a0e2dd20494dbf31f71059cd3eddff3dd5d94422f6e9098a -> ddf5409c4afaaeea578db5b242839d6a4f6caec534364338a90d4290b6aa3fb8
cor-fundamental-theorem-of-calculus-from-stokes 314d57c9b7be947a57e71d55662cf9397b103484019daccd6bcd8584da96a3df -> 7fc00da746397c526d7e34d5ab519d7f2d59e6318532caa96dad1b32878342b7
cor-greens-theorem-from-general-stokes efcfdf1e8f54409ee53c47d120e7a3446ba57ae3561f62e822e22ce2367de2d4 -> 0971376dac6fcc81f8eba51e28febaa69fdf8913abc5235e2462a75e0c54e6c6
cor-index-zero-handles-create-components 4a31a19d3c060ded15d050462c4e511802c905a8c05dbda6b02d7ce3ded63360 -> e028b89e3044a3755bf005ee9f16929a09c4bafa17c7adc141b706fb2d585286
cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero 3ee213c5c9a5a87827e7ceecd747c3ffac41451febf2abfaf214d65f308d7e81 -> a5678c4288e2ba3300039a01af19aa14b165800434ce43f0f97a019a5e1873bf
def-attaching-a-smooth-handle-with-corner-rounding 22fdec3faf13e980200e2d4a9ec69ec60ac008e40abc65b13626c6f7d2d804b8 -> d93cf1679d4ea82e37d40c033787d793d6c8a2b44b4214618536375ba5285969
def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold 6e7d0aa1a2e3e8f456fc9a47c37450fb4341d227fc00d92e66e132fb135868de -> d8605fe4f363419c96d1d30ab79804a0bff31a8607f831b60e2015934982d48a
ex-exact-top-form-with-nonzero-integral-on-a-manifold-with-boundary 5b64a2a7707eb74646d64c5a595722b0c94fbd07b78e5204231887549e62bb9f -> c3c14dedb8da65492136e1a20513ee55544890e1cf1b869c510842d790f86c69
lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group a55615a2048b8d34fd707ac441a6898ea17acc85d8c5b6739cb5041d8f84b5e5 -> a60837cd513b348bb227185840649a53a9e4f667e0acf15abd61270211bfcfb3
lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair b026439333475fe7fff4b0c5adae4933392c7fcf3a9be250a9d99860ced8e147 -> b8fb4dac7ef9f6c05bb823f7dc95d1ec39954f5dde33616dfcc187122bab78f7
lem-coefficient-comparison-on-finite-cw-pairs 5c67e271c0de7e6a599de3e8ce9ed0d52a4f780767a9260641dd55b80da57744 -> 85f230f85f347989f846055b7949c571ff782c029f178bb8d7ae2c7b292825e8
lem-comparison-maps-between-homology-theories-extend-over-one-skeleton-stage 59162d278b8c5d5af29328dd62cf7a8329bd9b58652c84d8155b336f3fa0bd58 -> 9cdb650b8aa10ed4c218c0022147fa7cb2d393129c9b8ac9b9a5082673755893
lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary b9b30cda47ece8308a378a2d3a8d155595606b6bf1fe0ea3c61a60b014c4819f -> 3ba7cd6d1dbed683a3d4adb508c73d8c4894d32eab24e9386820ff57cb0366cb
lem-gradient-flow-identifies-the-local-and-global-attaching-regions c07088f6dfbbcc0b831b75d5fa68f3f190de7948ce6002e434603d0802c081b7 -> 9713bbff3c775a6488ab99db90582adb8f039cc67a94810f51340aac8e7abbe2
lem-the-skeletal-telescope-projects-by-a-homotopy-equivalence-of-pairs 6f29b6d96abfbeb064f48c98565fc568095e3635a7ffde04d0be08419e09d62c -> 2a17de4725250eb7ae376cd152746de28cfd6301fb79abc24a4cbfd1ef639a92
prop-general-stokes-agrees-with-classical-gauss-flux 26e85ab341ae5a43c2e5ef334236e0f2b0d8f549a35932e27df9a0f0b02356cb -> df0ff0429ee56e6f4f76a9c8f352b412f5124af43fa8546ead63006985f8c1b4
prop-on-an-oriented-manifold-top-forms-and-signed-densities-correspond 6442bc03ab8592a5483d8014fd75a5bed2b6158329cdd30a2913350fd68b66ed -> 17c9b2c0e044cba097b758b49303aa45597c63576cf22e1739e832fc48823d8d
thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement 3bc04788a87c47067b8ae9123c69c528e412479a8b5ab2350bafd1ca74db443c -> d77d1d4673e7aa6112688963cc362dc22bc9f9c672c3535aca191dee55fd433a
thm-oriented-chart-integrals-are-coordinate-independent 9e6910edaacaa1625ef1983fcff746ef95f431a9589feb19b1e1d0b46f6e956e -> e3574306c8021ceb220c5d45bf72d22e33cd64b889cc66b569d5fc4897eebe9a
```

## Rejections closed without content change

| Item | Outcome | Reason |
|---|---|---|
| `cex-degree-zero-does-not-imply-a-sphere-map-is-constant` | `confirmed_nonfatal` | The verification explicitly constructs the pinch quotient and its composite; the cited dependency supplies the required degree-two map. Calling the displayed quotient “the pinch construction of F3” is imprecise attribution, but there is no mathematical gap. |
| `ex-relative-homology-of-a-handle-by-excision` | `confirmed_nonfatal` | The cited result directly supplies the asserted relative homology, and its opened proof supplies the collar-excision reduction used here. Compressing that standard-pair reduction into one step is nonfatal proof polish. |
| `prop-suspension-preserves-sphere-map-degree` | `confirmed_nonfatal` | The cited suspension isomorphism is unbased in positive degrees and its naturality gives the degree square. Naming the source and target components through `x_0` and `f(x_0)` is immediately closable bookkeeping. |
| `prop-positive-compactly-supported-top-forms-have-positive-integral` | `false_positive` | The signed coefficient in Step 2.1 is the coefficient of the weighted chart term `rho_i omega`; it is positive at the chosen point, and continuity gives a positive lower bound on a small rectangle. The existing proof includes the partition weight and establishes strict positivity. |

## Durable records and rejudge set

- `research/frontier-33-judge-adjudications.jsonl`: 24 exact group-d rows appended.
- `research/defect-ledger.jsonl`: 20 exact fatal rows appended through `tools/defect-ledger.mjs append`; `research/DEFECT-LEDGER.md` was refreshed by the same interface.
- `research/frontier-33-step8-alert-decisions.jsonl`: no group-d row required because the scope contains no Step-7 warning for this group.
- `research/frontier-33-step8-cross-group.jsonl`: no group-d row required because no defect outside group ownership was found.
- Rejudge set: exactly the 20 items in the confirmed-fatal table; no extra judgment cycle was initiated.

The three owned batch manifests and proof contracts were synchronized with the repaired statements, titles, facts, and dependency lists. The two added dependency edges point to existing items on the same owned page; there was no scope addition.

## Checks

| Check | Result |
|---|---|
| Focused item precheck over all repaired proof-bearing items | 18 items checked, two definitions skipped by the checker, zero failures. |
| Strict proof-contract checks for batches 8, 13, and 16 | Passed: 46/46, 50/50, and 23/23 items; zero errors and zero warnings. |
| Citation-fidelity checks for batches 8, 13, and 16 | Passed: 120, 139, and 72 citations; no missing or widened citations. |
| Content-policy checks for batches 8, 13, and 16 | Passed: 52, 59, and 27 items; zero errors and zero warnings. |
| Focused rendercheck and citecheck | All 20 repaired files passed both checks. |
| Group-d baseline and ledger reconciliation | Passed: 138 owned items inspected; exactly 20 changed, matching the 20 fatal outcomes; all 24 exact tuples occur once; all four closed items retain their guards; every fatal tuple has exactly one matching defect row and current post hash. |
| `node tools/defect-ledger.mjs validate --run frontier-33` | Passed: 673 rows, zero errors. |
| Repository-wide defect-ledger bijection check | Passed: 673 rows, zero errors. |
| `node tools/step8-scope.mjs check --run frontier-33` | Passed: eight groups, 923 scoped items, zero open rejections, and no undispositioned reader warning or cross-group alert. |
| `node tools/depcheck.mjs --quiet` | Repository-wide check is red on an unrelated currently edited published item, `def-tensor-product-total-complex-of-chain-complexes`, whose verification audit is absent; no group-d dependency error was reported. The command also emitted 475 existing warnings. |
| Step-8 guard | Passed: 15,423 baseline items; 75 changed, zero created, zero deleted; all 75 changes licensed by exact Step-8 records. |

## Blockers

There is no group-d blocker. The remaining repository-wide dependency diagnostic is outside group-d ownership and remains for its owner or the engine to route. No permission expansion, cross-group repair, stage transition, published-item edit, or extra rejudge was attempted.
