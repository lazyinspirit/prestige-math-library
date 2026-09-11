# Step 7 adjudication — group c

Run: `phase-2-next-20`  
Owned batches: 3, 4  
Status: group complete; full-run joins still await other groups

## Outcome summary

All 16 exact group-c judge rejections have one adjudication row: 12 are `confirmed_fatal` and repaired, and 4 are `confirmed_nonfatal` and unchanged. All 3 Step-6 reader warnings have an owning-group `nonfatal` disposition and received no content edit. No `false_positive` outcome, new lemma, published-item repair, or cross-group alert was needed.

## Confirmed-fatal rejections and repairs

### `lem-basic-properties-of-characteristic-functions`

- Rejection: `(lem-basic-properties-of-characteristic-functions, gpt-5.6-terra, 4d3f13aa4b609afed74f8a73c4426e0c9505e473b8ba9c70cd482812a6c35615)`.
- Outcome: `confirmed_fatal` (`logic`). The asserted natural-number-indexed sequence had `g_n(x)=min(2,2|x|/n)`, so `g_0` was undefined.
- Repair: index the DCT sequence by positive integers. Pre/post guard hashes: `40427051ece7ec4263108acaf535103001e5278e68d6c42292383d4c5c42311d` / `b03006dfb8e14be99fdeb9e1c8705b224944fd7cbcce92ede70768ed54976653`.
- Defect: `p2-next20-step7-c-basic-cf-zero-index`.

### `ex-cauchy-law-and-its-characteristic-function`

- Rejection: `(ex-cauchy-law-and-its-characteristic-function, gpt-5.6-terra, d29cf17c148e849a5619f6075b9cca5a1f441da38b4efb1aced58e8e49ee5e03)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). F16 suppressed the nonnegativity hypotheses of `thm-integration-against-a-density` and the proof used it for complex oscillatory tests.
- Repair: restore the exact nonnegative interface and derive the bounded-complex extension by the positive/negative real and imaginary parts; synchronize the proof contract. Pre/post: `6c3062aeaa277b9c35b0efbec60861b3d9577c31e962d93a0bfd8fc4427bc404` / `9cd156d5f3b9f0f0998db7528fe5007e0d431e5fa7975ab55664f3844d7023a7`.
- Defect: `p2-next20-step7-c-cauchy-density-citation`.

### `ex-independent-sums-via-characteristic-functions`

- Rejection: `(ex-independent-sums-via-characteristic-functions, gpt-5.6-terra, e0ce8c703ace518b7db931e22d8182f58116a3b67131c153598c612b50b91e57)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). F18 similarly inflated the density theorem before applying it to `exp(itx)` and `ix exp(itx)`.
- Repair: state the nonnegative supplier exactly and derive the integrable-complex extension componentwise after proving the first absolute moment; synchronize the proof contract. Pre/post: `6570e064449da5b7c74d29655c7db25c8a9644be876c896dcf277b8687271bff` / `70ed57c189633f3e50dbdfb997cb5a7caa94e1f84a7584fdeade542a8eacaba2`.
- Defect: `p2-next20-step7-c-independent-sums-density-citation`.

### `def-regular-conditional-probability`

- Rejection: `(def-regular-conditional-probability, gpt-5.6-terra, ae5bf357710b1046f7b7dd7dee70ca09e244f116990f862f792a457dda33a79e)`.
- Outcome: `confirmed_fatal` (`other`). Assuming only `G subseteq F` did not make `(Omega,G)` a measurable-space source for the kernel.
- Repair: require `G` to be a sub-sigma-algebra and synchronize the page manifest. Pre/post: `34f764d9520a8bf03ccf52ea929e83149813baa73773683fc471d7c315549147` / `fcca6f1493c7f4e19f76bff8955292a23458d08c81c94281d4a7285cc2edc345`.
- Defect: `p2-next20-step7-c-rcp-sub-sigma-algebra`.

### `rem-derivatives-at-zero-do-not-in-general-determine-the-law`

- Rejection: `(rem-derivatives-at-zero-do-not-in-general-determine-the-law, gpt-5.6-terra, 84f9bf7ea35271d19867dd35c4972b45f1b2f83677c0f6f9ef432999b055332a)`.
- Outcome: `confirmed_fatal` (`logic`). The old title suggested that the full derivative jet failed to determine a law, while the body and companion prove only failure for every prescribed finite jet.
- Repair: narrow the display title to “A prescribed finite jet at zero does not determine the law,” preserve the stable item id, and synchronize the page manifest. Pre/post: `a64282da32b43abd3b6a57e44e5306ad11b1a4b54043fb6c7b96c1482911f44a` / `dc5584d60b4e65942b199d22a2d4680bb52aa80d7b2de99aeca4b1c86e4bfa30`.
- Defect: `p2-next20-step7-c-finite-jet-title`.

### `lem-kernel-composition-is-well-defined-and-associative`

- Rejection: `(lem-kernel-composition-is-well-defined-and-associative, gpt-5.6-terra, d4c3e42c32da8244c7589551f2c2873c8480f86cad4a872274a8bd0ec2cc8270)`.
- Outcome: `confirmed_fatal` (`logic`). The countable-additivity approximation used a zero-based family but summed only from 1 through `N`, omitting `A_0`.
- Repair: declare the family on `N` and sum from `j=0` through `N`. Pre/post: `ebcea3f9a2980061ad1b97879cba09611a4e7441913f82bd632714015c32130d` / `b7fd162bf13e9ad84d74aff95d0bbcadf047d5c62d6f17bd2772ad2262de4c4d`.
- Defect: `p2-next20-step7-c-kernel-composition-zero-index`.

### `cex-pointwise-limit-discontinuous-at-zero-signals-mass-escape`

- Rejection: `(cex-pointwise-limit-discontinuous-at-zero-signals-mass-escape, gpt-5.6-terra, 7ae54582fcaeee5d0fb8071d705672e69b5d6a9e080cd708ec3ed1969a7e18c4)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). F9 suppressed the density theorem's nonnegativity restriction before applying it to sine and cosine.
- Repair: state the restriction and apply the supplier to positive and negative parts before reassembling the complex integral; synchronize the proof contract. Pre/post: `f102573cda6b725898bca150337b7255d02f5a8f7bd01ddc591daa185c8aa7e0` / `fc92aca273f49b613e865c08e3a51f122d565b47309525d7d5012e0219320e5b`.
- Defect: `p2-next20-step7-c-mass-escape-density-citation`.

### `ex-a-deterministic-kernel-from-a-measurable-map`

- Rejection: `(ex-a-deterministic-kernel-from-a-measurable-map, gpt-5.6-terra, 3062b02e99ae4d1feeb997c6ed6b0b2ff51f305b9ca960bd59dc0cfd04f5e227)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). F2 attributed the defining composition integral to the well-definedness/associativity lemma, whose statement does not give that formula.
- Repair: add and cite `def-composition-of-probability-kernels` for the formula, retain the lemma for well-definedness, and synchronize the manifest and proof contract. The new dependency stays inside batch 3. Pre/post: `b13e5c75024bce1c79414b0e0bc85015572015ad09bea358c1afd05b705b19c5` / `151bc7afaf8d5a8fa8605437f7acbfc7a82db0035a1f2334e5fc015d3936fef9`.
- Defect: `p2-next20-step7-c-deterministic-kernel-composition-citation`.

### `lem-martingale-differences-are-orthogonal-in-l2`

- Rejection: `(lem-martingale-differences-are-orthogonal-in-l2, gpt-5.6-terra, d7a93898d800ee3fd9fc0fea219ffd17a6e8979bab199df1dfab3f708893b73c)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). The proof used filtration monotonicity, but the cited martingale-difference definition does not itself assume that the sigma-algebras form a filtration.
- Repair: explicitly assume and cite a filtration in this consumer, separating monotonicity from the difference measurability/centering fact; synchronize the manifest and proof contract. The new dependency stays inside batch 4. Pre/post: `cfa8efbf38e75f933dcd6d18007608d1e936d05fd385e1e02f39bd54f2be33f2` / `55e86740629d222b872e822c9ef4f82c9163a4d573e988880f2d95714c0afc81`.
- Defect: `p2-next20-step7-c-mds-orthogonality-filtration`.

### `ex-likelihood-ratio-martingale`

- Rejection: `(ex-likelihood-ratio-martingale, gpt-5.6-terra, e8733ffc8ce28169ce06fc0c62b4341de8384a8fdde8937ad70f16bbdc90e3b8)`.
- Outcome: `confirmed_fatal` (`logic`). The sets `B_j={L<=-1/j}` were indexed without excluding zero, so `B_0` was undefined.
- Repair: index the sets and their union by positive integers. Pre/post: `b14e86299b0dad559cd56d9efb49be4302b8a6c6bcccaed1997c558db0b80f15` / `c0d5f050f8cc4b3c070f5eeca3ed5dea5205556a8e05a5eb8297a9b22d969c9d`.
- Defect: `p2-next20-step7-c-likelihood-ratio-zero-index`.

### `ex-product-martingale-from-independent-mean-one-factors`

- Rejection: `(ex-product-martingale-from-independent-mean-one-factors, gpt-5.6-terra, 10f23219058851331b13a88c376ac2d94cd2d3a9cffa40de77e6537a155267ff)`.
- Outcome: `confirmed_fatal` (`logic`). The proof called the displayed filtration the natural filtration of the factors under a zero-based process convention, but no `Y_0` was defined.
- Repair: explicitly index the given factors by `k>=1` and adjoin the deterministic factor `Y_0=1` before identifying the displayed filtration with the exact natural-filtration definition; synchronize the page manifest. Pre/post: `70fde3d9a6766d1b7d82b8352f5b782a8f21d270a68f467b54cffb561b782554` / `4c921fc06f9451aa2c9974a24598a60427cc046f25f359735fcfdb30165db83b`.
- Defect: `p2-next20-step7-c-product-martingale-zero-index`.

### `ex-square-of-a-martingale-minus-quadratic-compensator`

- Rejection: `(ex-square-of-a-martingale-minus-quadratic-compensator, gpt-5.6-terra, d0e3dcf1f986fc4f51758b34ba4e4f8b8cbe4b43702c63da5047a68cb85bae84)`.
- Outcome: `confirmed_fatal` (`logic`). The factor family's domain was unstated and the concrete witness defined only positive-time variables, leaving `Y_0` undefined under the zero-based convention.
- Repair: declare the independent family explicitly as `(Y_k)_{k>=1}` in the general example and witness; synchronize the page manifest. Pre/post: `fd9b05f9649aebaede3941b957a2265a10c8df7f8f1d720626cbe40318a41599` / `6427866837eddd17cb0e24277b51a7db939ff66a52a7bbbd403dc30fe6b3ed9b`.
- Defect: `p2-next20-step7-c-square-compensator-zero-index`.

## Confirmed-nonfatal rejections

### `cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable`

- Rejection: `(cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable, gpt-5.6-terra, a4bc01e9e409858446d7bd153d6c03ad93e179bc44cee4b9d78bf78863877423)`.
- Outcome: `confirmed_nonfatal`; unchanged guard `bc137334e9adc5dee2eb66f0c483b5bf7e6e0e93861a00e73c7fe22ac67c5bc5`. F4 overattributes choice provenance to the bare AC definition, but it is redundant: F1 supplies disintegration under AC, F2 supplies conditional integration/class identification, and F3 supplies measurability.

### `thm-bayes-formula-for-dominated-kernels`

- Rejection: `(thm-bayes-formula-for-dominated-kernels, gpt-5.6-terra, 03274431dcef8a90a573be1b9c41291ed51318226d76c4b11f01097cd1681e64)`.
- Outcome: `confirmed_nonfatal`; unchanged guard `be4705be01e90b7921855833e64820952f37b212b8cd7a41a92406e1d55043bc`. Step 2.1 overattributes `beta=m dnu` to F1's statement, but step 1.1 and F2 yield it immediately by taking `A=E` in the rectangle formula.

### `cex-an-adapted-process-need-not-be-a-martingale`

- Rejection: `(cex-an-adapted-process-need-not-be-a-martingale, gpt-5.6-terra, f6c493802933e6a46ef4d831ffebc58eec7429b6df000e0fb4bcaea96845ca36)`.
- Outcome: `confirmed_nonfatal`; unchanged guard `7f9cfbc71bc2341d572b64c750c9c12b3f5db73c7d3aa0f314272d1a24eb69b5`. F3 overattributes conditional-expectation existence and version choice to AC, but F2 explicitly supplies preservation of constants, which completes the singleton counterexample without F3.

### `cor-submartingale-doob-decomposition-has-increasing-compensator`

- Rejection: `(cor-submartingale-doob-decomposition-has-increasing-compensator, gpt-5.6-terra, 3f64a597b254f78740a5d35a523432c2b37a79fe443203b00830dc769464b3f5)`.
- Outcome: `confirmed_nonfatal`; unchanged guard `63a81a2a70d3e997695a0ac8ea23a0d946c14f0a50ed7ac23d299f409ea8a5be`. F5 repeats the same imprecise AC attribution, but F1 supplies the Doob formula and F2–F3 supply the exact conditional-expectation identities. The biconditional and simultaneous-null-set argument are complete without F5.

No content, contract, impact, or verification record was changed for these four nonfatal outcomes.

## Step-6 reader-warning dispositions

- `s8a-faa25d454b469f07be06f066` on `lem-uniform-sine-integral-bound-and-dirichlet-value`: `nonfatal`. Step 1.1 gives `|S(T)|<=1` for `T<=1`; for `T>=1`, the step-2.1 tail estimate and the already proved Cauchy limit give `|S(T)|<=|S(1)|+2<=3`. The omitted assembly is one line and no claim is false.
- `s8a-0de8cb4be241ffaf87d726fe` on `ex-characteristic-functions-of-bernoulli-binomial-and-poisson-laws`: `nonfatal`. Rounding both bounded coordinates to a fixed lattice gives a finite range, and intersections of their Borel level sets give the required disjoint finite partition. These immediate presentation details do not invalidate DCT or the mixture identity.
- `s8a-2dfe4b23957af942b40f178d` on `rem-derivatives-at-zero-do-not-in-general-determine-the-law`: `nonfatal`. The missing direct wikilink is a navigation omission; the adjacent companion uniquely identifies `cex-equal-finitely-many-moments-do-not-determine-a-law`, whose complete proof establishes every prescribed finite moment order. It is distinct from the fatal title defect and therefore did not license a link edit.

## Dependency and source evidence

- The complete local suppliers named by each rejection were opened, including the density-integration theorem, characteristic-function definitions and convergence results, kernel composition and disintegration interfaces, Radon–Nikodym and conditional-expectation interfaces, filtration/martingale definitions, and the bracket/Doob results. The repairs above state exactly which supplier clause was used.
- The group-b seam was checked against `thm-fourier-transform-of-a-finite-complex-measure` and `cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms`. The owned convention remark preserves the `exp(-2 pi i x xi)` convention and the bijective frequency change `xi=-t/(2 pi)`; the uniqueness theorem and Cramér–Wold proof retain the suppliers' finite-total-variation, positive-dimension, and AC hypotheses.
- No web source was consulted. Each disputed point was resolved from the complete local supplier and elementary derivations, with no unresolved mathematical uncertainty.

## Durable records and rejudge targets

The 16 exact adjudications are in `research/phase-2-next-20-judge-adjudications.jsonl`; the 3 warning decisions are in `research/phase-2-next-20-step7-alert-decisions.jsonl`; all 12 fatal defects have matching rows in `research/defect-ledger.jsonl`. No group-c row was added to a cross-group ledger.

Rejudge targets are exactly the 12 repaired items:

`lem-basic-properties-of-characteristic-functions`, `ex-cauchy-law-and-its-characteristic-function`, `ex-independent-sums-via-characteristic-functions`, `def-regular-conditional-probability`, `rem-derivatives-at-zero-do-not-in-general-determine-the-law`, `lem-kernel-composition-is-well-defined-and-associative`, `cex-pointwise-limit-discontinuous-at-zero-signals-mass-escape`, `ex-a-deterministic-kernel-from-a-measurable-map`, `lem-martingale-differences-are-orthogonal-in-l2`, `ex-likelihood-ratio-martingale`, `ex-product-martingale-from-independent-mean-one-factors`, and `ex-square-of-a-martingale-minus-quadratic-compensator`.

## Validation

- Focused precheck: 10 proof-bearing repaired items checked, 0 failures. The repaired definition and remark are non-proof-bearing.
- Strict proof contracts: batch 3, 6/6 repaired proof-bearing items; batch 4, 4/4; 0 errors and 0 warnings.
- Rendercheck: all 12 repaired items passed.
- Manifest dependency checks: batch 3, 51 items, 0 errors; batch 4, 30 items, 0 errors.
- Unified frontier ledger: refreshed, then read for consumer batches 3 and 4. Both batches are reviewed, neither is unreviewed, and all five batch-3 cross-batch edges (four item edges and the group-b page seam) remain `verified`; batch 4 has no cross-batch edge.
- Defect-ledger validation and full-run join: 92 run rows checked at the final invocation, 0 errors; all 12 group-c fatal rows are present.
- Step-7 guard: all 12 group-c content changes were recognized as licensed. The full-run invocation reported 9 unlicensed changes outside group c, so this report does not claim the level-wide guard passed.
- Step-7 scope check: all group-c rejections and warnings are closed. The final full-run invocation reported 12 missing alert dispositions, all outside group c, so this report does not claim the level-wide scope gate passed.

## Blockers

None within group c. The remaining guard, scope, and defect-join failures belong to other groups and are outside this dispatch's write authority; the engine must join those owners before the level-wide gates can pass.
