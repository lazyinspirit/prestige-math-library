# Step 7 adjudication report — group c

- Run: `phase-2-next-17`
- Role: `alpha-adjudicate`
- Batch: 4
- Owned pages: `grothendieck-spectral-sequences-and-computations`, `grothendieck-spectral-sequences-and-computations-examples`
- Scope at start: 16 judge rejections and 4 Step-6 reader warnings.

## Authoritative sources consulted

- Charles A. Weibel, *An Introduction to Homological Algebra*, Chapter 5, <https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf>: §§5.7.1–5.7.9 support the projective and injective Cartan–Eilenberg definitions, existence/comparison results, hyper-Tor construction, and Grothendieck spectral-sequence hypotheses and edge maps.
- Charles A. Weibel, *An Introduction to Homological Algebra*, Chapter 6, <https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf>: §6.8 supports the LHS construction, the injectivity/acyclicity argument for invariants, and identifies the cohomological edge maps as inflation and restriction.
- Stacks Project, Tag 015H, <https://stacks.math.columbia.edu/tag/015H>: supports the injective Cartan–Eilenberg resolution clauses for terms, cycles, boundaries, and cohomology.
- Stacks Project, Tag 015N, <https://stacks.math.columbia.edu/tag/015N>: supports the injective-resolution/Cartan–Eilenberg construction of the Grothendieck spectral sequence, its $E_2$ page, and bounded convergence.

## Per-item adjudication log

Progress: 16/16 judge rejections; 4/4 reader warnings.

The exact current item files and every dependency cited by a rejection were opened before classification. No cross-group dependency defect has been found.

1. `cor-the-pid-kunneth-short-exact-sequence-is-the-two-column-collapse` — `confirmed_fatal` (`dependency_citation`). Guard `fec5cca3a1daf34daba689668a4578a24334996e5f85aca02083ee5bd4d1ed67`; repaired guard `6bdacaa601dc9377637b5e69ed48b2dd3c57d0f42b3379ce9ae84f9847eaf357`. F4 now states only the cited Tor-map lemma's natural-surjection interface, while proof step 2.1 derives the representative-level agreement. Focused precheck, rendercheck, and strict proof-contract validation pass. Defect row: `phase-2-next-17-step7-c-001`.

2. `def-g-acyclic-object-for-a-left-exact-functor` — `confirmed_fatal` (`other`). Guard `1af1059b7f0ec698ba418279909d7e6cb20c6ffaf7b56a0f2903dbd70ddfc9f7`; repaired guard `a9994bddf4b7c87edcb0791a6e947d3abd0131dfa33e85528f9e09c8e6c66e23`. The definition now assumes abelian source and target categories, names its supplied injective data, and consistently uses relative notation $R_I^p$. Focused precheck, rendercheck, strict proof-contract validation, and manifest dependency validation pass. Defect row: `phase-2-next-17-step7-c-002`.

3. `def-spectral-sequence-computation-record` — `confirmed_fatal` (`dependency_citation`). Guard `701e6f3ec80b853619f95da10ecad6208d37631cf35f8ebd19baf3b6d427bdbb`; repaired guard `a1ed5412207adc64bdaf01da14713c05d446604f2f1a9d4a0468fa0a76587003`. Canonical edge-map identification is now required only under the cited first-quadrant page and finite-normalized-filtration hypotheses; other conventions require a direct application-map construction. Focused precheck, rendercheck, strict proof-contract validation, and manifest dependency validation pass. Defect row: `phase-2-next-17-step7-c-003`.

4. `fs-collapse-of-the-uct-spectral-sequence-gives-a-natural-splitting` — `confirmed_fatal` (`dependency_citation`). Guard `615e5313c48ac562d9009a982145072dcc083e0a0e5f1738b4c2c7328eb0caeb`; repaired guard `c5aed353f4e8032d11c39bc48c5100a0367b583e0cdbda105d53119a2d2d058e`. F1 no longer attributes a cycle-retraction mechanism absent from the cited proposition's Statement; the explicit shear counterexample continues to construct the needed section. Focused precheck, rendercheck, and strict proof-contract validation pass. Defect row: `phase-2-next-17-step7-c-004`.

5. `lem-the-invariants-functor-for-n-sends-injectives-to-q-acyclic-modules` — `confirmed_fatal` (`other`). Guard `d00d96ab2c754af11db56714c662e5599bb930b134638a3ab2f8eca5c3d17a23`; repaired guard `6c2fd6405f4054b8040a98b601db9ceda710c2bdd99f144ef521c7026b24b4d3`. The choice-free branch now names a relative datum $J$, states $R_J^p$ explicitly, and assumes the cochain-homotopy equivalence that transfers vanishing from the deleted trivial resolution. Focused precheck, rendercheck, strict proof-contract validation, and manifest dependency validation pass. Defect row: `phase-2-next-17-step7-c-005`.

6. `lem-the-total-cartan-eilenberg-complex-computes-the-derived-composite` — `confirmed_fatal` (`dependency_citation`). Guard `4b213f30d9320316a150de8db66a2c52e0d38cf2d24d3f9e393ceabcd8dabba2`; repaired guard `a6ac774badc94cbd611f2ce9d472c67cb4b756e6d3e0a9e445119517e776a354`. The supplied resolution datum and its deleted complex are now distinct, and the total computes $R_{\mathsf I}^n(GF)(A)$; suppression of the relative subscript is expressly conditional. Focused precheck, rendercheck, strict proof-contract validation, and manifest dependency validation pass. Defect row: `phase-2-next-17-step7-c-006`.

7. `prop-collapse-of-uct-or-kunneth-still-leaves-the-recorded-extension-problem` — `confirmed_fatal` (`logic`). Guard `0be73d15847b8a970da947a8711bdf641ecd569afcfb8da86fa698a902415a58`; repaired guard `b1fbbc61a84dc04e3847e0b3ceb102d8c5e6f94a064755789d9a47898d0e8efc`. The final claim now retains the bounded-below hypotheses for both complexes in the Künneth branch while keeping the distinct UCT domain explicit. Focused precheck, rendercheck, strict proof-contract validation, and manifest dependency validation pass. Defect row: `phase-2-next-17-step7-c-007`.

8. `prop-lhs-collapses-for-a-cohomologically-trivial-normal-subgroup` — `confirmed_fatal` (`dependency_citation`). Guard `82e38602fae9a7415a3a9d995e3c89f2195719581caacc726fd55bf345731754`; repaired guard `f8856b2ad09c2fddfa20e0b1f2be57ff3534628e9014b573dad313fd6c5d8870`. Proof step 2.1 now identifies the edge as inflation through the LHS naturality square for the quotient morphism to the trivial-kernel extension, rather than attributing that identification to the abstract collapse corollary. Focused precheck, rendercheck, and strict proof-contract validation pass. Defect row: `phase-2-next-17-step7-c-008`.

9. `prop-the-hypercohomology-edge-maps-are-the-canonical-maps-from-cohomology-of-f` — `confirmed_fatal` (`dependency_citation`). Guard `0d90b6f91e2448e5fc4793f4aeed314a2c37881dfacd42cee2a1105cfe86e3bf`; repaired guard `6b864c5b17edca8bccf10459b77e48af2add5c00ec1a9590092a8c0a828d27ba`. F1 now exports only the cited theorem's page/support/bidegree interface, and proof step 1.1 derives $d_1=R^qF(d_K)$ from the Cartan–Eilenberg horizontal lift. Focused precheck, rendercheck, and strict proof-contract validation pass. Defect row: `phase-2-next-17-step7-c-009`.

10. `rem-the-grothendieck-spectral-sequence-has-a-dual-left-derived-form` — `confirmed_fatal` (`other`). Guard `4fbb4d481ec919f6bc38cf4c7bf10de6a45731e009a1a3285d19718d20e849df`; repaired guard `1123012afa8ddc82829f79ae4c5a256dddee6c927b13d47da7c5eaf0cea32eb4`. The supplied-data alternative now includes the projective input resolution, the projective Cartan–Eilenberg resolution, and comparison maps and homotopies compatible with both filtrations. Focused precheck, rendercheck, strict proof-contract validation, and manifest dependency validation pass. Defect row: `phase-2-next-17-step7-c-010`.

11. `thm-cartan-eilenberg-injective-resolutions-exist` — `confirmed_fatal` (`dependency_citation`). Guard `0ca55f2099fb85f862cb78eb3eb505d4af4e134f776dabd21d806035d479a19b`; repaired guard `fc64585157ad7fd7f3b44e519c4efc51132ce628919406238dc66570f9b4d059`. The proof now obtains compatible split horseshoe maps by dualizing the choice-free one-degree projective horseshoe step and treats the full compatible supplied branch as supplied data; it no longer detaches the published injective horseshoe theorem from its DC hypothesis. Focused precheck, rendercheck, strict proof-contract validation, and manifest dependency validation pass. Defect row: `phase-2-next-17-step7-c-011`.

12. `thm-five-term-exact-sequence-of-the-grothendieck-spectral-sequence` — `confirmed_fatal` (`dependency_citation`). Guard `34a63eee44271348e558b197a2ee228635cc8697a4ca348d59e176222d78582b`; repaired guard `d56596842b0a4f53693109cf20a7bd9477cd8fd9151d5750becf8ceed50bd0f1`. Proof step 2.1 now uses only the exact sequence and edge-map identification exported by the general five-term theorem and derives naturality from the Grothendieck spectral-sequence maps. Focused precheck, rendercheck, and strict proof-contract validation pass. Defect row: `phase-2-next-17-step7-c-012`.

13. `thm-kunneth-tor-spectral-sequence` — `confirmed_fatal` (`dependency_citation`). Guard `12268e9bfa0c7c6f811cd2b84b34ba6e81b0522970b63f7146aaa641d589d545`; repaired guard `3d3b5a8c10698aebdb85fd9bdf40553aec6e10b594da42bf01b1ea5e87eba9c1`. The Statement now explicitly defines the projective homological Cartan–Eilenberg data. The proof retains the full sign computation and derives projective comparison direction, homotopy, and filtration behavior in the opposite module categories. Focused precheck, rendercheck, strict proof-contract validation, and manifest dependency validation pass. Defect row: `phase-2-next-17-step7-c-013`.

14. `thm-hyper-tor-spectral-sequence` — `confirmed_fatal` (`dependency_citation`). Guard `4a17197929b8608d4962079e5400a5b122ceea05dfd78ae130560925b3aed3d4`; repaired guard `62ffc3f5a9229459be5f320346ebe0e2038be6fa9f7780c2f64dcbc440916e33`. The unsupported direct dualization of the injective comparison lemma is removed. The proof uses the repaired Künneth theorem's explicit projective grid and naturality interface and directly verifies the bounded-below projective total model. Focused precheck, rendercheck, strict proof-contract validation, and manifest dependency validation pass. Defect row: `phase-2-next-17-step7-c-014`.

15. `thm-lyndon-hochschild-serre-spectral-sequence` — `confirmed_fatal` (`logic`). Guard `c16e803df1280928765b78c27feb9208a33287996ef7e6d0289761a6933efe48`; repaired guard `fabc4ed8e1a37d32bfa071e9fea4587282fadea62634c89fa3330fc528fe1c07`. Proof step 1.1 no longer falsely asserts that $N$-invariants is exact; it retains exactly additive left exactness and injective-image acyclicity, which are the Grothendieck hypotheses used. Focused precheck, rendercheck, and strict proof-contract validation pass. Defect row: `phase-2-next-17-step7-c-015`.

16. `thm-universal-coefficient-spectral-sequence` — `confirmed_fatal` (`dependency_citation`). Guard `cfb035d904ba4087d37f19ef9e4002f5c51fa4298cfa54a4e4274a6bb8a6f1a4`; repaired guard `34e66ecdc11380aeebe542ce2fec195749bee7e758a114093f12c09482fdf689`. The supplied homology resolutions are now named $\mathsf P_q$, the actual page uses $\operatorname{Ext}_{\mathsf P_q}$, and unqualified Ext notation is allowed only under the stated independence convention. Focused precheck, rendercheck, strict proof-contract validation, and manifest dependency validation pass. Defect row: `phase-2-next-17-step7-c-016`.

## Reader-warning dispositions

- `s8a-966b88817ef03374bbda045b` — `covered_by_rejection` using the exact rejection for `thm-cartan-eilenberg-injective-resolutions-exist`; the warning and rejection concern the same unsupported horseshoe-interface claim, repaired in item 11 above.
- `s8a-94f43557510b4b011c3f8a31` — `covered_by_rejection` using the exact rejection for `thm-kunneth-tor-spectral-sequence`; the repair supplies the projective/homological definition, sign, lower-bound, split-exactness, and opposite-category comparison dictionary.
- `s8a-615b68d0c31f32a6cf155b0f` — `nonfatal`. The quotient filtration has finitely many shifted exact columns, the long-exact-sequence induction is specified, and the bound $m>n+2$ kills the tail in the three degrees used. The explicit $(-1)^{n+1}$ twist gives an immediate sign check.
- `s8a-d1315383927871a35bd2c92d` — `nonfatal`. The direct-product example equips the cyclic $N$-resolution with trivial $Q$-action, so the induced Hom action is the displayed coefficient action; $Sb=c$ and $Sd=0$ therefore compute the fixed classes directly, and comparison naturality preserves them.

## Closing validation

- Group-c adjudication coverage: all 16 exact scoped `(id, model, context_sha256)` tuples have one decision, all context and guard digests have length 64, and there are no surplus group-c decisions.
- Reader warnings: all 4 have owning-group dispositions; 2 are covered by exact confirmed-fatal rejections and 2 are nonfatal.
- Batch-4 precheck: 46 proof-bearing items checked, 0 failures.
- Batch-4 rendercheck: 51 items checked, 0 failures.
- Batch-4 strict proof contracts: all 51 rows checked after regenerating the affected supplier quotations, 0 errors and 0 warnings.
- Batch-4 manifest dependencies: 51 items, 0 errors. Content policy: 51 items, 0 errors and 0 warnings. Citecheck: 51 items, no warnings.
- Defect ledger: 16 group-c fatal rows, all repaired hashes match the current files; the run-level defect-ledger check reports 0 errors.
- Scope check with pending alerts allowed passes. There is no group-c cross-group alert and no new cross-batch dependency, so the unified frontier ledger required no Step-7 change.
- Manifest integrity passes with all 34 run pages present. Forward-reference and external-material checks pass.
- The repository-wide dependency check currently reports two `b-leaf-content` errors in another group's algebraic-topology items. The Step-7 guard currently reports one unlicensed edit in another group's `lem-first-main-theorem-injectivity`; every group-c change is among the licensed changes. These are outside group-c write authority and were not altered here.

No judge, rejudge, final adjudicator, gate transition, page publication, or engine routing action was run.
