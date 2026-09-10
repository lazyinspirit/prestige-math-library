# Step 7 adjudication — group c

Run: `phase-2-nine-step-25`  
Batches: 5, 6, 7

## Item decisions

### `def-tor-by-resolving-the-left-module`

- Rejection: the resolution-dependent group was written as `Tor^R_n(N,M)` while the supplied resolution `P` had not yet been shown immaterial.
- Dependencies inspected: `def-tor-by-resolving-the-right-module`; `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic`.
- Outcome: `confirmed_fatal` (`other`), pre-edit guard `79f46a46e26ce5a4128ec09c051b7adaefe519aea6441a6626ccd672f3378205`.
- Repair: defined `Tor^{R,P}_n(N,M)` and retained `P` until balance/change of resolution; removed the stale judge stamp. No manifest or contract statement encoded the suppressed notation, so neither required a change.
- Post-edit guard: `ac9377fd8a351ebdfaa78d2b5a0041686c5b5bb66bb7b01d4a67085475fe0af3`.
- Focused check: targeted precheck completed with 0 checked and 0 failing (definition; no proof block).
- Defect ledger: `phase-2-nine-step-25-step7-c-001`.
- Rejudge target: yes.

### `prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions`

- Rejection: the dependency interface asserted a natural isomorphism but did not expose the augmented maps `a,b`, their quasi-isomorphism property, or the ratio `H(b)H(a)^{-1}` used by the proposition.
- Dependencies inspected: `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic`; both augmented row/column exactness lemmas; the tensor double-complex definition; the homology long exact sequence; both comparison-map theorems; the covariance proposition.
- Outcome: `confirmed_fatal` (`dependency_citation`), pre-edit guard `ecee383d6d0f364bdcffc182b0c90b07d1127bbed9965b4c0c69db2409be3956`.
- Repair: added the exact direct dependencies; constructed `a,b`; proved both kernels acyclic by finite-diagonal elimination; derived the homology ratio; then proved naturality and cocycle coherence. Updated the owned batch-5 manifest entry to the repaired dependency/strategy interface.
- Post-edit guard: `4dfd392c262fe476fc5c4b650cec996f68c7e9b54beae0847d17bf07e9192e7a`.
- Focused checks: targeted precheck passed; the batch-5 manifest parses as JSON.
- Defect ledger: `phase-2-nine-step-25-step7-c-002`.
- Rejudge target: yes.

### `thm-pid-kunneth-exactness-from-cycle-boundary-presentations`

- Rejection: the cited Tor-map lemma was said to require finite diagonals while the theorem allegedly allowed non-finite diagonals.
- Dependency inspected: `lem-the-kunneth-tor-map`; the local tensor/cycle-boundary lemma and page convention were also checked.
- Outcome: `false_positive`, guard `c4ae5f651d15feae2922dc574b456c90c424f65eb705e5cedd15b18ba5d2842d`.
- Reason: both complexes in the theorem are nonnegative, so the total-degree-`n` diagonal has exactly the finitely many pairs `p+q=n`; arbitrary module rank does not make the degree diagonal infinite. The theorem explicitly records this at its endpoint check.
- Repair/checks/rejudge: no edit, no rejudge target.

### `ex-a-flat-nonprojective-module`

- Rejection: step 1.2 restates proof details not present in the dependency's frozen statement interface.
- Dependency inspected: the complete `fs-flat-modules-have-projective-dimension-zero` item, including its statement and refutation.
- Outcome: `confirmed_nonfatal`, guard `1b97160406c06ff89d4ae566fcbc4f141bdac974f28568da8d82d8ab2e58f620`.
- Reason: the load-bearing conclusion—`Q` is nonprojective without Choice—is exactly in the dependency statement. Its proof also contains the accurately summarized `Hom(Q,Z)=0` and coordinate/free-cover argument. The extra method summary exceeds the frozen statement interface but does not leave a mathematical gap.
- Repair/checks/rejudge: no edit, no rejudge target.

### `lem-associated-graded-quotients-are-well-defined-subquotients`

- Rejection: the statement and cited definition cover increasing and decreasing filtrations, but the facts/proof formed only `F_p/F_{p-1}`.
- Dependencies inspected: `def-increasing-and-decreasing-filtration-of-an-object`; `def-associated-graded-object-of-a-filtered-object`; `lem-spectral-sequence-subquotient-and-local-lifting-calculus`.
- Outcome: `confirmed_fatal` (`logic`), pre-edit guard `9dbc466219e252eb27e9e2820473b516c43a1c6522454206b8cfd94d71526af6`.
- Repair: added the decreasing inclusion `F^{p+1}->F^p`, its monicity/cokernel argument, and compatible-representative uniqueness for both conventions. Updated the batch-6 manifest strategy and proof contract (citation uses, new derivation, step numbering, boundary and risk notes).
- Post-edit guard: `9969ca73da5a8c6c35c58ddf2ad496dca6849e88f84927cd9b1f0e730000d9be`.
- Focused checks: targeted precheck passed; the batch-6 manifest and proof contract parse as JSON.
- Defect ledger: `phase-2-nine-step-25-step7-c-003`.
- Rejudge target: yes.

### `prop-e-zero-is-the-associated-graded-complex`

- Rejection: F2 attributed a unique quotient-projection characterization to a dependency whose statement supplied only existence, bidegree, and square-zero.
- Dependencies inspected: the associated-graded proposition; `def-r-page-of-the-spectral-sequence-of-a-filtered-complex`; `lem-the-filtered-differential-induces-d-r-on-the-r-page`; `lem-the-differential-descends-to-a-quotient-complex`.
- Outcome: `confirmed_fatal` (`dependency_citation`), pre-edit guard `86717ec2a086305ba2802808c52bc63e20585fe06aff8d84d03ff004c0bc642c`.
- Repair: cited the exact E-page representative formula and quotient-differential uniqueness supplier, then used epic cancellation to identify the differentials. Updated the batch-6 manifest dependencies and proof-contract citations/derivation/risk note.
- Post-edit guard: `12e853a62b2517c092a21db2e360faac2d3b97bf372e47d89622fa6d5af8b090`.
- Focused checks: targeted precheck passed; repaired proof-contract citations are F1/F2/F3 with the expected suppliers and parse as JSON.
- Defect ledger: `phase-2-nine-step-25-step7-c-004`.
- Rejudge target: yes.

### `def-cohomological-spectral-sequence`

- Rejection: the definition named page objects, homology, differentials, and transition isomorphisms without specifying an ambient category.
- Dependencies inspected: `def-homological-spectral-sequence`; `thm-the-cohomological-filtered-complex-construction`; the chain-complex definition used by the page.
- Outcome: `confirmed_fatal` (`other`), pre-edit guard `88093fc14de4415028230bbc1d0e8da0fbf90a9c4d751bdb1b1b7ee77708549c`.
- Repair: fixed an ambient abelian category, placed all objects and transition isomorphisms in it, and required the equivalent homological sequence to use the same category. Updated the owned batch-6 manifest statement and proof-contract risk note.
- Post-edit guard: `da218a28484de93a5dc0eaf6c7eaebfdcf07a8a14d4d6e1982b89e7949df4fb7`.
- Focused checks: targeted precheck completed with 0 checked and 0 failing (definition); the batch-6 manifest and proof contract parse as JSON.
- Defect ledger: `phase-2-nine-step-25-step7-c-005`.
- Rejudge target: yes.

### `ex-pid-kunneth-over-a-field-has-no-tor-correction`

- Rejection: step 1.2 invoked the DC hypothesis of balanced Tor through a dependency whose statement assumed AC but did not supply `AC => DC`.
- Dependencies inspected: the local PID tensor/cycle-boundary lemma; `def-balanced-tor-bifunctor`; `def-axiom-of-choice`; `thm-recursion`; `def-dependent-choice`; the field-module projectivity proposition.
- Outcome: `confirmed_fatal` (`dependency_citation`), pre-edit guard `0c98f8dd29ebc6d13e44fb19ed3a186ee6e42536903488f30f5f212c7411d30f`.
- Repair: replaced the unsupported attribution with the direct derivation: AC selects a successor function for an entire relation, recursion iterates it from the prescribed point, and the resulting sequence satisfies the exact DC definition. Updated item dependencies and the owned batch-5 manifest and proof contract.
- Post-edit guard: `2fa8d2a006fc918d80cdb070039882ee52638a442d0c740f8ba036df38466e83`.
- Focused checks: targeted precheck passed; the batch-5 manifest and proof contract parse as JSON.
- Defect ledger: `phase-2-nine-step-25-step7-c-006`.
- Rejudge target: yes.

### `prop-a-spectral-sequence-supported-in-one-row-or-column-collapses`

- Rejection: the bounded-region dependency did not state the support-persistence and bidegree claims attributed to it.
- Dependencies inspected: `prop-degree-reasons-force-stabilization-in-a-bounded-region`; `def-collapse-at-a-page`; both abstract homological and cohomological spectral-sequence definitions; the filtered-complex next-page theorem.
- Outcome: `confirmed_fatal` (`dependency_citation`), pre-edit guard `7ae0d06664fb851940d89aa2f7e214508faee36be1c11c68fe9a9f1280e43873`.
- Repair: cited the abstract definitions directly, propagated zero support through their successive homology subquotients, and used their exact differential bidegrees for both conventions. Updated the owned batch-6 manifest and proof contract.
- Post-edit guard: `e9df00dd7cc7c2b8b9a6423f3f0a7f15801694eaf6b7107cada2abe49d56d00e`.
- Focused checks: targeted precheck passed; the batch-6 manifest and proof contract parse as JSON.
- Defect ledger: `phase-2-nine-step-25-step7-c-007`.
- Rejudge target: yes.

### `ex-pid-polynomial-ring-kunneth-tor-class`

- Rejection: the proof used the PID tensor lemma's internal `AC => DC` argument although that lemma's statement only assumed AC and exposed no such implication.
- Dependencies inspected: the local PID tensor/cycle-boundary lemma; `def-balanced-tor-bifunctor`; `def-axiom-of-choice`; `thm-recursion`; `def-dependent-choice`; both Kunneth theorems and the polynomial PID suppliers.
- Outcome: `confirmed_fatal` (`dependency_citation`), pre-edit guard `b89171f0232cd667219e6c2da23021bd84f3b137e9937bcbc4df31651d1947c8`.
- Repair: derived DC directly by selecting and iterating a successor function, then retained the PID tensor lemma only for its stated positive-sign quotient identification. Updated dependencies and the owned batch-5 manifest and proof contract.
- Post-edit guard: `09907527f7882280af44ad1f87bb43752840e1ea7277abe1f7616c8d6ecc48a3`.
- Focused checks: targeted precheck passed; the batch-5 manifest and proof contract parse as JSON.
- Defect ledger: `phase-2-nine-step-25-step7-c-008`.
- Rejudge target: yes.

### `cex-collapse-with-a-nonsplit-extension-problem`

- Rejection: F1 attributed the explicit filtered `Z/4` stalk, its two `Z/2` graded pieces, and collapse to a dependency whose Statement exposed only the general nonsplitting principle.
- Dependencies inspected: `prop-collapse-does-not-in-general-split-the-abutment`; the exact `r`-cycle/page and quotient-differential suppliers used for the local computation.
- Outcome: `confirmed_fatal` (`dependency_citation`), pre-edit guard `3882651f3bc57bc157294159736c1dcad217887ea8bd0f59257f2bdd4431d1ae`.
- Repair: narrowed F1 to the dependency's exact general statement; added F3/F4 for the page formulas and induced differential; derived the stalk computation locally. Updated the batch-6 manifest and strict proof contract.
- Post-edit guard: `3513b08b2294939e1f4c0ac63f03ab1d4f2f9a6f22397046f2dbc4a4ffa92a74`.
- Focused checks: targeted precheck, manifest parse, and strict item contract passed.
- Defect ledger: `phase-2-nine-step-25-step7-c-009`.
- Rejudge target: yes; the engine handoff completed and the targeted verdict accepted the repair.

### `fs-a-spectral-sequence-collapses-when-one-differential-is-zero`

- Rejection: the title was read as an endorsed universal claim.
- Dependencies and peers inspected: the full item, its spectral-sequence definitions, and neighboring false-statement items on the page.
- Outcome: `false_positive`, guard `eb40d26b3aa48d2209087311460db6788e02a036060fa76d9897e09a71828cfc`.
- Reason: `kind: false-statement` titles name the proposition being refuted. The Statement explicitly negates it and the proof gives a valid `d^1=0`, `d^2 != 0` counterexample.
- Repair/checks/rejudge: no edit, no rejudge target.

### `fs-e-r-plus-one-is-literally-equal-to-the-homology-of-e-r`

- Rejection: the false-statement title was again treated as an asserted equality.
- Dependencies inspected: the current/next-page construction and the page's false-statement convention.
- Outcome: `false_positive`, guard `53d00e09abe667465ed78ca641fbe5493a5137f525c6f92808f238607db66b71`.
- Reason: the title names the statement being refuted; the body correctly distinguishes a specified natural isomorphism from literal equality.
- Repair/checks/rejudge: no edit, no rejudge target.

### `fs-collapse-solves-all-extension-problems`

- Rejection: frozen F1 attributed an explicit filtered `Z/4` stalk, its two `Z/2` page pieces, and collapse to a dependency whose Statement exposed only the general nonsplitting assertion.
- Dependencies inspected: `prop-collapse-does-not-in-general-split-the-abutment`; `cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects`; the exact stalk, page, induced-differential, collapse, convergence, and extension interfaces.
- Outcome: `confirmed_fatal` (`dependency_citation`), pre-edit guard `4a77c2b981d53cfcb49d11a034c9c4308051c88ad2220f35131288f6c041123c`.
- Repair: F1 now cites the exact filtered-group counterexample, and F2–F7 separately expose every construction used to derive the collapsed stalk and nonsplit extension. The batch-6 manifest already reflected that minimal repair; regenerated its stale proof-contract citations and derivations from the repaired item.
- Post-edit guard: `619a8b72e571092db1ab59c0b7e943ebca8c8ef44fa739eef28c4f711157b32e`.
- Focused checks: targeted precheck, batch-6 JSON parse, and strict item contract passed.
- Defect ledger: `phase-2-nine-step-25-step7-c-012`.
- Rejudge target: yes; the engine handoff completed and the targeted verdict accepted the repair.
- Recovery note: the initial decision was mistakenly made against the already changed working-tree item. The fatal-only guard exposed its mismatch with the frozen baseline; the exact decision and report were corrected to adjudicate the assigned rejection rather than preserve an unlicensed edit.

### `ex-two-filtered-abelian-groups-with-the-same-associated-graded`

- Rejection: F2 attributed explicit residue and coordinatewise product operations to a supplier whose Statement exposed only abelian-category legitimacy and basic subquotients.
- Dependencies inspected: `cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects`; `lem-abelian-group-model-for-spectral-sequence-computations`; the modulo-`n` algebra and external direct-product statements.
- Outcome: `confirmed_fatal` (`dependency_citation`), pre-edit guard `85ebdc2ce0141326f09ff6b17ecd427a223bf3626bd40b0a777bf704b4b36746`.
- Repair: narrowed F2, added exact operation suppliers as F3/F4, and cited them at the additivity checks. Updated the batch-6 manifest and strict proof contract.
- Post-edit guard: `05c042d5eb79aa45c0b3c15254559370e524e96d31e51cbbb901206ba9e5f599`.
- Focused checks: targeted precheck, manifest parse, and strict item contract passed.
- Defect ledger: `phase-2-nine-step-25-step7-c-010`.
- Rejudge target: yes; the engine handoff completed and the targeted verdict accepted the repair.

### `lem-the-associated-graded-of-filtered-homology-is-a-subquotient-of-chain-level-data`

- Rejection: arbitrary integer `n` was said to be ill typed because the library allegedly indexes chain complexes by nonnegative integers only.
- Dependencies inspected: `def-chain-complex-in-an-abelian-category`; `def-filtered-chain-complex`; the current item and contract boundary.
- Outcome: `false_positive`, guard `28a0c4a88d72e34ab5220e17dbae0399526ccc668fa81a760ada96f444b34fa7`.
- Reason: the canonical definition explicitly has `(C_n)_{n in Z}` and `d_n:C_n->C_{n-1}` for every integer `n`; filtered complexes inherit this convention.
- Repair/checks/rejudge: no edit, no rejudge target.

### `prop-shifting-a-filtered-complex-reindexes-its-spectral-sequence`

- Rejection: the same alleged nonnegative indexing was said to make `D_n=C_{n-a}` undefined.
- Dependencies inspected: the full proposition; `def-chain-complex-in-an-abelian-category`; the exact page and next-page formulas.
- Outcome: `false_positive`, guard `71a37a1d142a448766de3c9fb9a3b565afb3551bc36a9a8d0f0dedeab8b20544`.
- Reason: integer-indexed complexes make every translated term well typed; direct substitution gives the displayed bidegree translation, and the item explicitly distinguishes its sign-free translation from a triangulated shift.
- Repair/checks/rejudge: no edit, no rejudge target. The decision row records the correction from an initially reconstructed digest to `tools/item-hash.mjs`'s guard hash; its outcome and rationale did not change.

### `thm-hilbert-samuel-multiplicity-as-koszul-euler-characteristic`

- Rejection: the title called the degree-`r` coefficient the Hilbert-Samuel multiplicity even when the chosen sequence length `r` exceeds the polynomial degree.
- Dependencies and boundary example inspected: `def-koszul-euler-characteristic-and-degree-indexed-multiplicity`; the shifted-adic comparison; `ex-koszul-euler-characteristic-redundant-zero-generator`; the complete theorem proof.
- Outcome: `confirmed_fatal` (`other`), pre-edit guard `c8a6ef04287814335de85213f84f20ed88751229b67663f614fe5a61a428c058`.
- Repair: changed only the item/manifest title to “degree-r Hilbert–Samuel coefficient as Koszul Euler characteristic.” The exact Statement and proof already establish `e_r=chi` and were retained.
- Post-edit guard: `4cab7f701cc3268caa9546662fbe0102edcaa78c51230738903799672d860ef8`.
- Focused checks: targeted precheck, batch-7 manifest parse, and strict item contract passed.
- Defect ledger: `phase-2-nine-step-25-step7-c-011`.
- Rejudge target: yes; the first handoff attempt stopped before any judge call because the decision row used the wrong hash form. The provenance fields were corrected to the controller-reported guard hashes, and the retried handoff completed with an accepting targeted verdict.

### `lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel`

- Rejection: step 5.1's equality with the established Tor quotient was said not to follow from F7's abbreviated Statement.
- Dependencies inspected: the complete published `lem-the-kunneth-tor-map`, especially proof steps 1.1–5.1; the cycle-boundary decomposition; the current lemma's actual short exact sequence and connecting map.
- Outcome: `false_positive`, guard `15f923f3fe4e06a7635261d5c1a3483f1cf826c0ee8316f78cf40ecb540adc2b`.
- Reason: the cited dependency's proof step 5.1 defines its quotient as `H_n(rho tensor 1)` corestricted to the same positive-sign connecting-map kernel and composed with the Tor identification from the same projective presentation. The current lemma reconstructs those actual maps before invoking the identification.
- Repair/checks/rejudge: no edit, no rejudge target.

### `fs-e-zero-and-e-one-page-conventions-are-universal-across-sources`

- Rejection: the Vitolo/Weibel dictionary was said to compare only a zero exact couple with the library's nonzero `E^0`, rather than exhibit a real numbering difference.
- Dependencies and original sources inspected: all local page-construction dependencies; Vitolo Appendix B, Proposition 8.2 and Theorem 8.1; Weibel Example 5.9.3 and Theorem 5.9.4.
- Outcome: `false_positive`, guard `d42e4d4149caaae82d24cb876e6f3b27a2a153b0c04e1bdc9df16e3cb6b475e3`.
- Reason: Vitolo's generic exact-couple iteration calls its input differential object `E_0` and its first homology `E_1`; Weibel calls `H(gr C)` the exact-couple `E^1` and identifies that sequence with the filtered construction beginning at `E^0=gr C`. For the local acyclic nonzero `gr C`, generic `E_0=H(gr C)=0` and filtered `E^0=gr C` are genuinely different page-zero objects for the same underlying filtered input. The zero tail deliberately avoids a bidegree conflict.
- Repair/checks/rejudge: no edit, no rejudge target.

## Sources consulted

- Raffaele Vitolo, *On different geometric formulations of Lagrangian formalism*, corrected author version, Appendix B: https://poincare.unisalento.it/vitolo/vitolo_files/publications/journals/6a_VsComp.pdf. Proposition 8.2 on printed p.33 supports the generic exact-couple labels `E_0` for the input and `E_1=H(E_0)` for its first derived page. Theorem 8.1 on printed p.35 separately supports the filtered normalization `E_0=Q` and `E_1=H(Q)`.
- Charles A. Weibel, *An Introduction to Homological Algebra*, Chapter 5: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf. Example 5.9.3 and Theorem 5.9.4 on printed pp.155–156 support that the filtration exact couple starts at `E^1=H(gr C)` and is naturally isomorphic from that page onward to the filtered construction starting at `E^0=gr C`.
- All other decisions were resolved from the complete local item and dependency texts listed under each item. No external source was used for those decisions.

## Reader warnings and cross-group alerts

- `s8a-88255d9a84fb7df7224ef579` on page `tor-flatness-and-global-dimension-examples`: `nonfatal`. The published page's “This draft develops...” sentence is stale presentation wording, but it changes no mathematical assertion, dependency, item proof, or contract. No content repair was licensed in this fatal-only stage.
- No cross-group alert was raised. Every inspected defect and cited dependency stayed within group c or published content.

## Engine handoffs and terminal resolutions

- After the execution environment recovered, all eight previously repaired items were sent through `complete-step7-item.mjs` in dependency-safe order. Targeted checks exposed and enabled correction of only local contract bookkeeping: added the missing contracts for the left-resolution definition and Tor-balance proposition, added the exact E-zero supplier citation, and refreshed two exact `def-dependent-choice` quotations. No extra judge cycle was initiated.
- The Tor-balance rejudge rejection was terminally `accepted-after-review`; its cited supplier proof defines the same homology ratio. The E-zero rejudge was terminally repaired by strengthening its existing direct associated-graded supplier's interface. The one-row/one-column rejudge was terminally repaired by narrowing its title to the already proved page bounds. These final-adjudicator actions required no second group-c repair.
- The other five resumed repairs received accepting targeted verdicts. The four newly resolved repairs (`cex-collapse-with-a-nonsplit-extension-problem`, `fs-collapse-solves-all-extension-problems`, `ex-two-filtered-abelian-groups-with-the-same-associated-graded`, and the degree-`r` Hilbert–Samuel theorem) also completed their immediate handoffs and received accepting targeted verdicts.
- The three terminal rejudge rejection rows remain intentionally without a second Alpha adjudication; the engine's terminal-resolution ledger closes them.

## Final checks

- `node tools/step7-guard.mjs ... --json`: passed against the `pre-step7` baseline; all 76 changed items in the live multi-group tree were licensed by a fatal adjudication or terminal resolution, with 0 errors and 0 warnings.
- `node tools/step7-scope.mjs check --run phase-2-nine-step-25`: passed; 8 groups scoped, 760 items partitioned, 10 currently routed open rejections, and 3/3 reader warnings/alerts dispositioned. The routed count decreased from the earlier 12 while other engine-managed group handoffs completed.
- `node tools/tsx-run.mjs tools/precheck.mts ...`: all 10 proof-bearing repaired group-c items passed; the two definition-only items had no checkable proof body.
- Strict proof-contract checks passed for all 12 repaired items across batch contracts 5, 6, and 7, with 0 errors and 0 warnings.
- `node tools/rendercheck.mjs --json ...`: all 12 repaired items passed, with 0 errors and 0 warnings.
- All six owned batch-5/6/7 page-manifest and proof-contract JSON artifacts parsed successfully.
- `node tools/defect-ledger.mjs validate --run phase-2-nine-step-25 --json` and the stronger run-specific `check` with the adjudication and reader-decision ledgers both passed: 99 defect rows checked, 0 errors.
- `git diff --check`: passed.
