# Batch 82 Step 3a adjudication

Run: machine-learning-all-101-2026-10-19. Group: batch-82. Work in dependency order; engine owns stamps and gates.

## Completed current-content reviews

### def-pac-mdp-bounded-reward-model

Nonempty finite states/actions, joint Borel reward/state kernel, and measurable history kernels are correctly typed. Rewards may depend on next states; coordinate integration yields r in [0,1]. No finite reward-alphabet premise is inherited from the finite-MDP contextual definition.

Dependencies: current local definitions and exact supplier statements read; no repair needed. Next: next routed item in generated order.

### lem-pac-mdp-adaptive-sample-concentration

Reviewed every step: independent pair streams use AC and Ionescu–Tulcea; nonanticipating visits reveal unused coordinates only. The visit-count partition argument preserves a future fixed block conditional on current observed history. Centered predictable targets have interval width B, giving exponent 2mx²/B². Coordinate variances and Cauchy–Schwarz give sqrt(S/m); the Doob range width 2/m gives the claimed transition tail. Fixed-size bounds do not claim optional sample-size validity. Singleton/deterministic streams and positive m,x,B hypotheses checked.

Dependencies: current local definitions and exact supplier statements read; no repair needed. Next: next routed item in generated order.

### thm-pac-mdp-value-functions

Reviewed all ten steps and exact supplier statements. History kernels construct a law under AC; nonnegative bounded partial returns permit monotone convergence and a geometric tail. Finite sums evaluate the joint reward/state law without independence. Both Bellman contractions hold, coordinatewise Cauchy limits give unique fixed points, finite-horizon induction bounds every history-dependent behavior, and a finite greedy selection attains the optimum. Gamma=0, singleton sets and zero rewards satisfy the same proof; gamma=1 and empty action/state sets are excluded.

Dependencies: current local definitions and exact supplier statements read; no repair needed. Next: next routed item in generated order.

### def-admissible-mdp-heuristic

Admissibility bounds Q*, not V* at every action. The effective cap max(1,V0) correctly bounds observed reward scale and remains at most (1-gamma)^(-1). Reader locator correction accepted; no defining clause changed.

Current prerequisites read; no item edit. Next: next generated-order obligation.

### def-pac-mdp-sample-complexity

Continuation kernels at a fixed history give measurable finite-horizon values by the finite-kernel integration theorem; nonnegative limits give measurable infinite returns and countable sums of bad-time indicators. Positive epsilon, delta in (0,1), finite uniform parameter-only B, and strict bad-time inequality are explicit. Zero tolerance is a defined count but is not asserted PAC. Reader measurability repair accepted; it does not change the defined probability or consumer interface.

Current prerequisites read; no item edit. Next: next generated-order obligation.

### lem-pac-mdp-value-simulation

Bellman subtraction gives (1-gamma)d <= alpha+gamma V beta, for common stationary policies and via finite maxima for optimum. Trap form uses ||V2|| <=2W+d and gamma beta <=(1-gamma)/2 to absorb the extra term. All values finite, no reward/next-state independence used; gamma=0 and zero model error checked. Reader source locator accepted.

Current prerequisites read; no item edit. Next: next generated-order obligation.

### alg-delayed-q-learning

Exact loop checked: greedy action, re-enable before sampling, start timestamp on first sample, batch m, success threshold 2epsilon1, bonus epsilon1, failure-disable only if no update since batch start, then reset sums/count. State is internal and action is output. Contextual Q-learning citation supplies target formula only; no finite reward-alphabet restriction imported. Reader locator accepted.

Current prerequisites read; no item edit. Next: next generated-order obligation.

### alg-r-max

Exact loop checked: freeze first m samples, mark once, zero-start finite capped Bellman iterations, unknown coordinates fixed at U, deterministic greedy tie rule and explicit L>=1. Empty known set and gamma=0 execute; beta domain makes logarithm positive. No termination claim for the infinite interaction loop. Reader locator accepted.

Current prerequisites read; no item edit. Next: next generated-order obligation.

### def-pac-mdp-known-state-action-mdp

Dedicated finite sinks have reward (1-gamma)q in [0,1] and geometric value q; unknown backup is q, including gamma=0 and q=0. K may be empty or all pairs. Reader locator accepted.

Current prerequisites read; no item edit. Next: next generated-order obligation.

### ex-pac-mdp-nonpermanent-bad-steps

At gamma=0 continuation equals next deterministic reward. Bad indices are exactly 1 through n and n+2, cardinal n+1; n+1 is good before the later bad index. Strict threshold epsilon=1/2 and n>=1 checked. Example illustrates absence of a required prefix structure, not infinitely many bad times. Reader locator accepted.

Current prerequisites read; no item edit. Next: next generated-order obligation.

### lem-delayed-q-learning-optimism-and-update-counts

All six steps checked against the exact algorithm and concentration lemma. Finite batch starts admit conditional potential-stream estimates even if a batch never finishes. Q decreases by at least epsilon1 on success; finite reactivation count bounds attempts. Frozen upper targets force success outside K, and fixed optimal targets inductively retain optimism. Greedy pre-update values give 1+D/epsilon1 rather than D/epsilon1. The final unfinished interval is counted, yielding 2mG also at zero slack. Refuter:82:1 confirmed: ICML Lemmas 1–2 start on PDF5, Lemmas 3–4 on PDF6; corrected locator to 5–6. No mathematical statement change.

Sources: current local suppliers; primary JMLR/ICML passages checked where cited. Next: consumer validation and next generated-order item.

### lem-r-max-empirical-model-accuracy

All six steps checked: first-m potential estimates hold uniformly over all known subsets without a union over policies; b and m imply both tails. Zero-start capped Q iteration has error gamma^L/(1-gamma), exact at gamma=0. True trap values are <=2Vmax using a nonnegative true-MDP prefix plus bounded sink continuation. Trap simulation error <eta/8; approximate greedy loss is <=2beta/(1-gamma), total <=5eta/16. Only E_eta pairs can escape, at most m visits and one rebuild each. Empty K, all known, gamma=0 and arbitrary joint reward/state law checked.

Sources: current local suppliers; primary JMLR/ICML passages checked where cited. Next: consumer validation and next generated-order item.

### thm-pac-mdp-escape-event-reduction

All four steps checked independently. Refuter:82:3 is fatal: one state, gamma=0, reward actions 1/0, Q=1, all pairs known, good-action tie rule and bad learner produce N_0.4=infinity with zero events. Added actual greedy action hypothesis. Coupling now agrees until an update/escape; trap continuation <=B+W and H-tail <=eta imply bad-time event probability >eta/C. Measurable disjoint trial starts avoid conditioning on the future good event; conditional exponential iteration with lambda=ln2 and Mq/2>=zeta+1+ln(1/rho) bounds failure <=rho. Absent trials/failed current inequalities set X=1; union with the simultaneous event gives 1-2rho. Gamma=0 and zeta=0 checked. ICML escape-proof locator additionally corrected to PDF6–7. Consumer checks next before level6.

Sources: current local suppliers; primary JMLR/ICML passages checked where cited. Next: consumer validation and next generated-order item.

### thm-zero-tolerance-pac-mdp-boundary

Read all ten steps and actual fixed-parameter algorithms. Finite coupled Bernoulli trees with disagreement probability <=Td allow randomized common-history action kernels; at each equal history at least one zero-tolerance deficit is positive, so counts sum >=T>2B. Positive intersection probability forces one model to violate confidence. R-MAX freezes zero Bernoulli samples then prefers deterministic p/2 forever, event (1-p)^m; p=(1-delta)/(2m) gives >delta. Delayed Q at gap epsilon1 fails its 2epsilon1 update threshold forever under the specified tie rule. Zero-optimal-value models have no bad steps. All legal endpoint, finite threshold and common-input restrictions retained.

Sources: current local suppliers; primary JMLR/ICML passages checked where cited. Next: consumer validation and next generated-order item.

### ex-pac-mdp-inadmissible-heuristic-fails

Two steps checked directly. At gamma=0, beta=1/2 gives one sweep; known b has empirical reward zero while unknown a stays zero, so fixed bad-action ties persist for every m>=1. U(a)=0<Q*(a)=1 explicitly lies outside admissibility. Every continuation is zero and strictly 1/2-bad. No illicit application of the PAC guarantee.

Sources: current local suppliers; primary JMLR/ICML passages checked where cited. Next: consumer validation and next generated-order item.

### thm-delayed-q-learning-pac-bound

Every step reviewed with its actual suppliers, including the corrected escape hypothesis. Algorithm selects the fixed-order greedy action, so new hypothesis holds without consumer surgery. Delta/2 supplies the batch event; epsilon1=epsilon(1-gamma)/12 yields residual loss 3epsilon1/(1-gamma)=eta. Outside backups equal current Q, with zero sink discrepancy; restricted original-state policy contraction gives the residual bound. G includes the final possible update per pair. Substituting m,G,H,q gives the fourth-power accuracy and eighth-power worst-case discount bound; the extra logarithmic count term is absorbed since mG>=1. Barred C1<=barV, D<=barV, m<=bar m, G<=bar G and q>=bar q yield a uniform parameter-only envelope for the original instance-parametrized algorithm. Gamma=0, epsilon=0, epsilon>=Vmax and zero slacks checked. Refuter:82:2 confirmed locator error; theorem at ICML PDF4, full proof PDF6–7, now corrected.

Next: synchronize owning metadata and execute scoped local checks.

### thm-r-max-pac-bound

All five steps reviewed with current accuracy and corrected escape suppliers. Actual R-MAX fixed-order greedy actions satisfy the added hypothesis; no consumer edit needed. Threshold matches the accuracy lemma at delta/2, beta legal, unknown Q=U<=Vmax and all Q<=(1-gamma)^(-1). With B=W=Vmax and rho=delta/2, q,H,M give the stated count. E_eta<=SA and Vmax<=barV imply b>=bar b, m<=bar m, zeta<=bar zeta and q>=bar q, so the uniform bound applies without changing algorithm thresholds. Worst-case substitutions give epsilon^-3 and (1-gamma)^-6. Zero tolerance uses the proved boundary rather than singular formulas; epsilon>=Vmax has no bad times.

Next: synchronize owning metadata and execute scoped local checks.

### ex-pac-mdp-delayed-q-zero-slack

Both steps directly verified. At gamma=0 bad-tie b has first m targets zero; 1>=2epsilon1 makes one update to epsilon1<1, then a wins. Both slacks relative to V*=1 are zero. This witnesses the +1 update allowance for any legal example batch size, while explicitly linking the additive PAC expression only after prescribed-parameter substitution. No claim that arbitrary m matches theorem parameters.

Next: synchronize owning metadata and execute scoped local checks.

### ex-pac-mdp-discount-factor-dependence

Both steps verified against current two PAC bounds. U=barV places every pair in E_eta, slack sum<=SA barV, and 1+gamma barV=barV. The DelayedQ additive SAepsilon(1-gamma) term is absorbed by SA barV in the stated positive epsilon<barV range. The resulting powers match the proved upper bounds; no lower-bound or sharpness assertion.

Next: synchronize owning metadata and execute scoped local checks.

## Consumers and metadata

The escape theorem Statement now requires a_t=pi_t(s_t). Actual direct/reference item consumers are thm-r-max-pac-bound and thm-delayed-q-learning-pac-bound; both select the fixed-order greedy action by their algorithm definitions. Their statements and proofs remain sound, so no further propagation is necessary. The A-page inventory is a placement reference only. No consumer outside batch82 requires repair.

Reconciled reader-added measurability/uniform-envelope/example wording and citation locators into the owning page manifest; retained item IDs, draft status, dependencies, inventories and empty page bodies. Refreshed exact escape-theorem citation quotes in the two consumer contracts. No prior judge stamp was present on the four edited items.

## Additional citation review

The fetched 98-page Szepesvári lecture text has §4.2.3 at PDF50–51 and its PAC-MDP discussion in §4.2.4 at PDF53–54. The former introduces R-max but does not specify admissible initialization or its optimistic model. Corrected the secondary-source descriptions in def-admissible-mdp-heuristic and alg-r-max, and moved the PAC context locator in thm-r-max-pac-bound to PDF53–54. The primary JMLR source and local proofs retain all mathematical claims. ICML §§4.1–4.4 are on PDF3, Algorithm1 on PDF4; this independently confirms the additional alg-delayed-q-learning correction. These are citation corrections only.

## Decisions and defect accounting

All 16 touched obligations are amended_repair: reader changes are retained, while their manifest claim/source mirrors were synchronized; seven carriers also received the local corrections described above. All three refuter obligations are confirmed_fatal and repaired, each with exactly one closed finding row. The decision file uses route flagged for refuter findings. There are 26 closed rows: 18 retained reader corrections, three refuter defects, two additional ICML locators, and three secondary-source descriptions/locators. Shared touched/refuter defects have explicit same-defect evidence; there are no mechanical-failure rows. All completed repairs carry repair_confidence1.

## Carrier comparison

Every initial current item exactly matched its reader-post raw hash; the three untouched risk-only items also matched pre-reader. All 16 touched items had a pre/post reader delta. Original scope, snapshots, reader/refuter artifacts remain unchanged.

| Item | Pre-reader raw SHA256 | Reader-post raw SHA256 | Final current raw SHA256 |
|---|---|---|---|
| def-pac-mdp-bounded-reward-model | a53d31ac466c063d1eaf23e589cf8542a9dd5b811175e32cbc97b2a5d8266938 | a53d31ac466c063d1eaf23e589cf8542a9dd5b811175e32cbc97b2a5d8266938 | a53d31ac466c063d1eaf23e589cf8542a9dd5b811175e32cbc97b2a5d8266938 |
| thm-pac-mdp-value-functions | da92c847d2dd516f1094e2c1152c42b8b1b5c3fed57b8b76fd362d55bf050d22 | da92c847d2dd516f1094e2c1152c42b8b1b5c3fed57b8b76fd362d55bf050d22 | da92c847d2dd516f1094e2c1152c42b8b1b5c3fed57b8b76fd362d55bf050d22 |
| lem-pac-mdp-adaptive-sample-concentration | 6ec2b86eaae01d688caebcee8c2a593e03cd860b7bb73108e10db40a26eba52b | 9ca568646636b1fb7308e1af12ec15d5e5681e98c4a9f9e3d438ced8298e0fe8 | 9ca568646636b1fb7308e1af12ec15d5e5681e98c4a9f9e3d438ced8298e0fe8 |
| def-pac-mdp-sample-complexity | 0ca780b807033c5cdfc02dad8807934cf250e501259d703982e7419ea08f80cc | 3ce7426f14a213c7843513799c1a0faf9b1584d944fb7d4b09c81b679d1f1f45 | 3ce7426f14a213c7843513799c1a0faf9b1584d944fb7d4b09c81b679d1f1f45 |
| def-admissible-mdp-heuristic | abeb1efd5a0900b71d6285aad053536a5dcc2a471532a03ddc95d33e4c33b34c | a520dacff50a5eddb5c3e642a18c002e527bd58be9841fe08860a0d6320ada7d | 884f1edb3121754b3bce906c13ee92f3b325191306d3534cb1d7082756d0409f |
| lem-pac-mdp-value-simulation | 8cfa58a63c1f386e9781dcf670440bcc1f607eb56f386238e8377f9ad470a1b4 | eabe7a28d1acf6bd525d34b631d99470a5e0da607e7155508d0111eb9efd9783 | eabe7a28d1acf6bd525d34b631d99470a5e0da607e7155508d0111eb9efd9783 |
| def-pac-mdp-known-state-action-mdp | 23bdd404d7d5ceaa0a1e5b85fd049e221b7cdaaaea5433442ee6e561acb90fd9 | 1f43344e781b5278daaf7f0ceccdb777c293a434b1c88c475e246240d155e92c | 1f43344e781b5278daaf7f0ceccdb777c293a434b1c88c475e246240d155e92c |
| alg-r-max | 778307c137077f53cf4441a1c88889f2a2f8813e4b9426f5e1ca2ff7a2cb1659 | d6ea6a99f75f62c9985e733aba824a72f2396847f8492f01f30381c5ef714f13 | 1a90494a1d57a00a9d80e84895a5b7ec6cb7461bc2f3fa2724a7c7ead400d6ac |
| alg-delayed-q-learning | b082099b07c944363aebc1c7906fd8bb65ffaaffd4871561ce889465f01edea1 | b1accee2742f43ac3b5dd45c1f729e56fd5749f86b439db9fdb93115890c9ff6 | ea2579c0e5fbb1bb1ccf6c8c04d1ea3eb837cc7f2d148f98621d85102a72b665 |
| thm-pac-mdp-escape-event-reduction | 12bd30def11b1503835c6de7ec74ad16b1d5e282eababec3281144b97cfb8d73 | 288d466439ae32f4c04acfd400c92f868bc2d11ada8dd61e6f70bf216ffd8c19 | 26f50ad0851a573ee2f7928f826819a4e6cac433ed81a9e4e422780d5b809508 |
| lem-r-max-empirical-model-accuracy | 7605d7cdf81171b19f66791de14bf951f7cc989a2fcb622e8b68b54c7d0ecd8a | 7f579a74888b87b85942c2db8b6a0e12da4cd823041a09610b058905325fe2f1 | 7f579a74888b87b85942c2db8b6a0e12da4cd823041a09610b058905325fe2f1 |
| lem-delayed-q-learning-optimism-and-update-counts | 84b9ac082d20de7147e0f8adaf0e08f1eb7b72ab3749467042f3b8b65016ed66 | ed6cfc1a0720818fafa7bd3563b4655c8841741b7ed2dd8d7adbfed4680797d6 | 79e936b1d9ff80a2d9e59a230f422f3bbe635fd0d34892b4d3ca9bd2fe0128ab |
| thm-r-max-pac-bound | f8e9333883e4028ad860ca5cb9e04acb988120c18e60de3601f8566eb27b5a84 | 0f30363ce4fab984bf36ae5dc9770019427c7f3795f96173c46e1d8282a49b28 | 50c33b98df723f3bb189efad625265df59c2e9ffebff08213a07da8404040177 |
| thm-delayed-q-learning-pac-bound | 41efe4ed860e37f6bfd81aa67d6e6e68a5396db457df6d4732d5d7701a6cd89c | b8efd6ce382e58b4c2913eb2fa769346aac50a35f464062dfc7d181117d247eb | ce013d0d08750c487ee9e9f6260bf6653c78b646233bc2fceaaef0e76ea6cf0e |
| thm-zero-tolerance-pac-mdp-boundary | 5305d22e7f664cfa93fef48135c9c8f5f279654056d185b772f8985306ccbc31 | 5305d22e7f664cfa93fef48135c9c8f5f279654056d185b772f8985306ccbc31 | 5305d22e7f664cfa93fef48135c9c8f5f279654056d185b772f8985306ccbc31 |
| ex-pac-mdp-nonpermanent-bad-steps | 18b94adb539acdff6f1df8d3484633f118362a9a12d698aafccae370a879e7a6 | c1306553e5e8f9fe0ec478dece8de5167fbeab90233c9bd3a35c1a7e2e0846d9 | c1306553e5e8f9fe0ec478dece8de5167fbeab90233c9bd3a35c1a7e2e0846d9 |
| ex-pac-mdp-inadmissible-heuristic-fails | 6fca20aa66f9105babd27671b7a82632aa1383690ee9a3236d37900ae1145683 | 065fee5b647e1d8c41645121cca250cc303f67dd800e5e9c6c083beee369cb64 | 065fee5b647e1d8c41645121cca250cc303f67dd800e5e9c6c083beee369cb64 |
| ex-pac-mdp-discount-factor-dependence | c34f291393519d8fadf6f58c43b07eb02b564727c8f36e23ad5742ddc93a2d8e | 6fba293589bb5d376d181f309aacea84868ec8942b752b1eee818377d0e8b312 | 6fba293589bb5d376d181f309aacea84868ec8942b752b1eee818377d0e8b312 |
| ex-pac-mdp-delayed-q-zero-slack | a607b1071e465ee14500293cce27c100038e9137423b0dc23869c161ac45b44e | a85ecf8861ff8781f7215ca083510d91c72d8c7636d74b88672b3206411376f6 | a85ecf8861ff8781f7215ca083510d91c72d8c7636d74b88672b3206411376f6 |

## Sources, publication and boundaries

Primary sources: [JMLR PAC Analysis](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf), [ICML PAC Model-Free Reinforcement Learning](https://hunch.net/~jl/projects/RL/Delayed_Q/icml06.pdf), and selected [Szepesvari lecture passages](https://old.sztaki.hu/~szcsaba/papers/RLAlgsInMDPs-lecture.pdf). Exact locations and fetched hashes are recorded in the owning source-evidence addendum. Relevant local dependency Statements/Definitions were independently read, including the kernel integration, path-law, conditional Hoeffding/Azuma, finite-choice, Bellman and expectation interfaces. The Sutton–Barto secondary reference was not independently fetched; no inference or disputed locator relies solely on it.

Both actual A/B page carriers are frontmatter-only, draft, compact-v1, with the required inventory. No TikZ/tikzcd diagrams occur in the assigned items/pages; none is required for these finite-state inequalities or one-state witnesses. Published suppliers were read-only; no published defect found, so no published-ledger entry or lock was needed. No open prerequisite escalation, affected outside consumer, withdrawal or owner decision remains.

## Local checks

Initial risk-report (without require-reviewed) routed 19 items and identified 13 HIGH/CRITICAL reviews. Final risk-report --require-reviewed passed with 0 errors; all 13 reviews are specific and complete. Strict proof-contract validation passed for 19/19 items, 0 errors, 0 warnings. Reflow left all seven edited carriers unchanged; precheck passed all four proof-bearing edited carriers, 0 failing (three definition/algorithm carriers have no phase proof). Rendering passed for all seven edited carriers with actual KaTeX and renderer YAML parsing. Final proof-layout command batched all seven edited paths once after the last item edit/reflow: 7 items, 21 steps, 0 defects. No item edits followed that command.

The live autopilot status reports Step3a work in progress and batch82 outstanding; Git HEAD observed as 6d26c7507b. No transition, dispatch, judge, stamp, acceptance gate battery, publication or commit was initiated. The engine owns current decision stamps and all final gates.

Final accounting check: exactly the 19 routed obligations are present; all 26 distinct appended ledger rows are closed, stage-owned and referenced. Every flagged decision references exactly one row. All 19 current manifest Statement/Definition/Example mirrors agree with their item carriers, and all 19 defining sections are uninterrupted by hyperlinks. This was a local accounting check, not an engine gate or hash stamp. The ledger append used its serialized append tool with --no-render; generated-view refresh remains for the engine's shared-ledger processing.
