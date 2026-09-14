# Step 7 adjudication — group f

Run: `phase-2-next-18`  
Owned batch: 2

## Completed decisions

### `def-shift-operator-and-future-coordinate-sigma-algebra`

- Rejection tuple: `def-shift-operator-and-future-coordinate-sigma-algebra` / configured judge / `6d888c8ce2be890df6d67657fb3b965ee74a7e2ed3a0fc30dd971430ab1606a2`.
- Outcome: `confirmed_fatal` (`other`).
- Pre-edit guard: `f2757ba0d10fe996f68b84c0175131d207dabe0fb3b42f3184024af0ab310c29`.
- Exact defect: the definition used a product sigma-algebra and product-measurability without giving `E` a sigma-algebra, and did not supply measurability of the process coordinates needed for the path-functional composition.
- Repair: introduced measurable spaces `(E, E)` and `(Omega, F)`, named the product sigma-algebra, specified each process coordinate as measurable, and typed `H` against the product and Borel sigma-algebras. No dependency or contract change was needed.
- Sources: the owned item and `def-time-homogeneous-markov-chain-with-transition-kernel`; no web source was needed because this is a direct type check against the definitions in the text.
- Post-edit guard: `550616bb26fb8b31aa1b48bdd3d506389a6779edba665f58daf7ee6e59670172`.
- Focused validation: `precheck` (definition, 0 proof-bearing checked), `rendercheck` PASS, and repository `depcheck --quiet` PASS with pre-existing warnings only.
- Rejudge target: yes.

### `def-gaussian-process`

- Rejection tuple: `def-gaussian-process` / configured judge / `cc657d9208c48905bc2db827ce3f205f47e5e32e183f59e8e6bca6121189b430`.
- Outcome: `confirmed_nonfatal`.
- Guard: `b0094d15b0f56e57796a01453167c4bf58539a4ce95f80f621e7d0b67c56dafb`; no edit and no rejudge target.
- Exact assessment: `def-multivariate-normal-law` parametrizes all projections by one `m` and `Sigma`, so “says exactly” compresses a parameter-recovery line. The equivalence is nevertheless correct: coordinate normality gives finite second moments, and with `m=E[X]`, `Sigma=Cov(X)`, every projection has mean `u.m` and variance `u^T Sigma u`. This is a gap a competent reader closes immediately, not a false definition.
- Sources: `def-gaussian-process` and the full statement/proof of published `def-multivariate-normal-law`; no web source was needed.
- Validation: unchanged item, so no repair check applies.

### `lem-conditional-independence-splicing-over-a-standard-borel-variable`

- Rejection tuple: `lem-conditional-independence-splicing-over-a-standard-borel-variable` / configured judge / `4fa51e4c2867fe03ea6426cd68f496d2636536b93005238a8089b9ca31709459`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `2e7ddc23479a49f57aa2a5f3f9510886a4989446de96d2f73c41fa70df73fa08`.
- Exact defect: step 2.1 claimed that its F3 kernel-integration supplier included the section theorem, but that supplier's Statement does not. The separately declared section theorem is the needed interface for the measurable sections used to define the integrals and prove countable additivity.
- Repair: added F7 with the exact section theorem, cited it at the section use in step 2.1, and synchronized the owned proof-contract citation and derivation. The dependency and batch manifest already named the supplier, so no dependency-ledger change was needed.
- Sources: complete local statements/proofs of `thm-measurability-of-integration-against-a-kernel` and `thm-sections-of-product-measurable-functions-are-measurable`; no web source was needed.
- Post-edit guard: `0f485127effe6822dcd6ec058f6a23c8d28fd0db228f67a026c8866dbea55144`.
- Focused validation: `precheck` PASS, `rendercheck` PASS, and strict proof-contract check PASS for the repaired item.
- Rejudge target: yes.

### `lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments`

- Rejection tuple: `lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments` / configured judge / `215c16377fae9451be807915680e3c51eaa6e341ab63224dbe29688523ef49be`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `3120183f08f842a6bc40d0d329fe0af4147fa93797c10c50613e55bce50e8e9a`.
- Exact defect: F7 attributed the finite measurable-rectangle characterization of mutual independence to `def-independent-random-elements`, whose Statement only defines independence through generated sigma-algebras. Step 2.1 needs the converse rectangle criterion to transfer independence from equality of joint laws.
- Repair: replaced the cited definition with the exact published supplier `thm-rectangle-criterion-for-independent-random-elements`, added that supplier to the item and batch manifest dependencies, and synchronized the batch and unified proof contracts.
- Sources: complete local statements/proofs of `def-independent-random-elements` and `thm-rectangle-criterion-for-independent-random-elements`; no web source was needed.
- Post-edit guard: `0c9feaede68bc75385d11c33c8ba8bc3a147f12e42bf36f9b96ceadc8381d0b5`. The matching defect-ledger row's `post_sha256` records the full raw-file digest `27f9d7e7b8d9168838ba8769906dafe6717f52517ccbfbc222e8dbc415ac53e6`; its structured adjudication reference carries the required pre-edit guard.
- Focused validation: `precheck` PASS, `rendercheck` PASS, strict batch and unified proof-contract checks PASS, and batch-manifest JSON parse PASS. The unified frontier ledger was refreshed after the dependency edit; the new dependency is published and creates no tracked run-internal edge.
- Rejudge target: yes.

### `cor-existence-and-scaling-of-d-dimensional-brownian-motion`

- Rejection tuple: `cor-existence-and-scaling-of-d-dimensional-brownian-motion` / configured judge / `a760c88ac546c831c15cd13b0ef0bda90d3acd02dd2022ae26f3097b8a82abda`.
- Outcome: `confirmed_fatal` (`logic`).
- Pre-edit guard: `8547be57d1d841606e6dae0bbb2beb54574f9c81510ef1d5ccaa2c96d35e786e`.
- Exact defect: step 2.1 rebound the symbol `B` to the existence witness. Consequently steps 2.2--3.2 scaled only that constructed witness, not the arbitrary Brownian motion in the scaling hypothesis.
- Repair: renamed the constructed witness to `widehat B` and made step 2.2 explicitly return to the arbitrary hypothesized `B` before applying the coordinate characterization and scalar scaling theorem. Both proof contracts were synchronized.
- Sources: the owned corollary and complete owned statements/proofs of `def-d-dimensional-brownian-motion`, `thm-existence-of-continuous-brownian-motion`, and `thm-brownian-scaling`; no web source was needed.
- Post-edit guard: `2caa78e8a0d6ba32e11349ca3698a379922d6e9d49eafacb774331d47931220d`.
- Focused validation: `precheck` PASS, `rendercheck` PASS, and strict batch and unified proof-contract checks PASS.
- Rejudge target: yes.

### `def-d-dimensional-brownian-motion`

- Rejection tuple: `def-d-dimensional-brownian-motion` / configured judge / `a7d9354184a650b1ff357f8e9202075203b2139e36ab54eaac4c65a844c1d35c`.
- Outcome: `confirmed_fatal` (`logic`).
- Pre-edit guard: `102dd05ad37fa46a88fab935d1ea69c0c595c9add4078bb99b5c530fc5d1bcd9`.
- Exact defect: step 3.2 called each finite observation vector a pointwise affine function of the positive-time increment block, but the required base value `B_0=0` is only an almost-sure identity. The cylinder-factorization inference therefore lacked its null-set transfer.
- Repair: stated the affine equality on the common probability-one event `{B_0=0}` and explicitly transferred cylinder probabilities through that almost-sure equality before grouping and applying measurable functions. Both proof contracts were synchronized.
- Sources: the complete owned definition and its exact cylinder, independence, and probability-one-event suppliers; no web source was needed.
- Post-edit guard: `d1b863dacf1260b77da02a4de558fe1275b21849b93a9767155a665012e5ceda`.
- Focused validation: `precheck` PASS, `rendercheck` PASS, and strict batch and unified proof-contract checks PASS.
- Rejudge target: yes.

### `def-wiener-measure-on-continuous-path-space`

- Rejection tuple: `def-wiener-measure-on-continuous-path-space` / configured judge / `b6b6856dc621012d888114363fb1a5c12efe65deb6d79ee064a91dd7967a3f90`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `dbac405120cdd2d733dc1fc58f082a969818031a3f3ae7f17030a8f8ac8e527e`.
- Exact defect: F4 falsely said that nonnegative rationals are dense in every nonempty real interval, which fails for negative intervals and exceeds the cited density theorem.
- Repair: restricted the density claim to the actual ambient subspace `[0,infinity)`, equivalently stating that a nonnegative rational lies between any two nonnegative reals. This supplies exactly the compact-time and positive-radius uses in steps 2.1 and 3.1.
- Sources: complete local statements of `thm-rationals-countable` and `lem-rat-embeds-dense`; no web source was needed.
- Post-edit guard: `8adaa6641b653727d303d7e92b14f1f45d3ef1087bd56171d02303a3c42a872c`.
- Focused validation: `precheck` PASS, `rendercheck` PASS, and strict batch proof-contract check PASS; no contract claim changed.
- Rejudge target: yes.

### `ex-deterministic-integral-construction-of-a-gaussian-process`

- Rejection tuple: `ex-deterministic-integral-construction-of-a-gaussian-process` / configured judge / `a5a60a8839f7f2de59be6ff6677939da638fe487fabf3a9a0e89dd70360d282b`.
- Outcome: `confirmed_fatal` (`other`).
- Pre-edit guard: `6b06b3e56f8d037c58a57a02516d12f874ea1aded0c9b3f42d365956e617a20b`.
- Exact defect: F10 and step 5.1 claimed exact AC usage only through the Brownian and normal-law interfaces, omitting F3 even though its cited continuous-integrability supplier inherits countable choice.
- Repair: added deterministic integration to F10’s accounting and included F3, with its inherited countable-choice input, in the exact closing accounting. The proof contracts now map the new step-5.1 citation.
- Sources: complete local item and the full statement/proof dependencies behind `thm-continuous-implies-integrable`; no web source was needed.
- Post-edit guard: `64503119123788fda322acc2726173f2bbc06a6d1177e643681680d5ba612327`.
- Focused validation: `precheck` PASS, `rendercheck` PASS, and strict batch and unified proof-contract checks PASS.
- Rejudge target: yes.

### `ex-random-mapping-representation-for-a-finite-transition-matrix`

- Rejection tuple: `ex-random-mapping-representation-for-a-finite-transition-matrix` / configured judge / `ae11d694f03bde08642373afabc80bbf48cd36c78a2b73f8efcdce9460beb3ba`.
- Outcome: `confirmed_fatal` (`other`).
- Pre-edit guard: `ccdfbc988e77185e524f39d9d276f31373f3dd3cc2f558bb68a4b72e937dcd75`.
- Exact defect: the recurrence `F(X_n,U_(n+1))` and the events `{X_n=s_i}` were not typed because the statement did not require `X_0` to take values in `S`.
- Repair: added the hypothesis that `X_0` is an `S`-valued random element to the Statement and Given block, and synchronized the batch manifest’s statement contract. The separate empty-state discussion remains correct: no such initial random element exists when `S` is empty.
- Sources: the owned example and its finite-state Markov-chain suppliers; no web source was needed.
- Post-edit guard: `5ed37c01db7342c4b2ba09a0460f0e17f4623ada544b90b3a8e7de7012b25cf6`.
- Focused validation: `precheck` PASS, `rendercheck` PASS, strict batch proof-contract check PASS, and batch-manifest JSON parse PASS.
- Rejudge target: yes.

### `lem-continuous-path-space-is-polish`

- Rejection tuple: `lem-continuous-path-space-is-polish` / configured judge / `be8856bda953048750c160a3eb6026f7f50bc76c88db3dbb537018e3cfc726f4`.
- Outcome: `confirmed_fatal` (`other`).
- Pre-edit guard: `ef0b2850d2accc20fd914ae42e34dd51cf7ad99e65d78a0c77ad7f550c115381`.
- Exact defect: the title asserted Polishness without qualification while the Statement and proof assume countable choice and explicitly attribute construction of a countable dense family to that axiom.
- Repair: narrowed the display title to “Under countable choice, continuous path space is Polish” and synchronized the batch manifest title. The stable item ID and mathematical Statement are unchanged.
- Sources: the owned item and local `def-countable-choice` / countable-union suppliers; no web source was needed.
- Post-edit guard: `bd0dd9ec4829de4530353c13d37da3d52cc24bfa46fb6f7aa18bbdf3b40d533e`.
- Focused validation: `precheck` PASS, `rendercheck` PASS, strict batch proof-contract check PASS, and batch-manifest JSON parse PASS.
- Rejudge target: yes.

### `lem-gaussian-even-moment-bound-for-brownian-increments`

- Rejection tuple: `lem-gaussian-even-moment-bound-for-brownian-increments` / configured judge / `922a8efe42452ddd6f4d753081796bf3fca840a68dffa341d254b437ff8f1979`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `5cdac055f218bfc050d203548a948f4931076136e44a2703124d9d422295a377`.
- Exact defect: step 1.2’s integration-by-parts theorem produces Darboux/Riemann integrals, but step 2.1 treated them as Lebesgue integrals for monotone convergence without an identification theorem.
- Repair: added the published compact Riemann–Lebesgue comparison theorem to the item and batch dependencies, exposed it in F5, invoked it before monotone convergence, and recorded its countable-choice cost. Both proof contracts were synchronized with the exact supplier Statement.
- Sources: complete local statements/proofs of `thm-integration-by-parts`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, and `thm-monotone-convergence-for-the-integral`; no web source was needed.
- Post-edit guard: `de06e5e4c311a67441cb13acb098921e89a8cb6bae21cd9dcaa9b7d937288d9c`.
- Focused validation: `precheck` PASS, `rendercheck` PASS, strict batch and unified proof-contract checks PASS, and batch-manifest JSON parse PASS. The unified frontier ledger was refreshed; the added supplier is published and creates no tracked run-internal edge.
- Rejudge target: yes.

### `thm-brownian-scaling`

- Rejection tuple: `thm-brownian-scaling` / configured judge / `b8c12a84c22f87dd6748d8fafd5a04a7a9e09f5a7e812b67fcb3f9db6fa4c11e`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `b0297e8ac46467d2ac0896c0b37033bf3fa7af6da4044e36a261288017b7ff47`.
- Exact defect: F3 and step 4.1 generalized the zero-repair/path-map construction in `def-wiener-measure-on-continuous-path-space` from that definition’s particular constructed Brownian motion to an arbitrary scaled process `Y`; the cited Statement does not supply that general interface.
- Repair: constructed `widehat Y` locally by zeroing `Y` off its common full-measure continuity event, proved its coordinate measurability, used the exact coordinate-generated Borel sigma-algebra and random-element-law suppliers, and then invoked Wiener uniqueness. The Statement now also says “off” the continuity event, correcting the Step-6 warning’s reversed literal wording. Item and manifest dependencies and both proof contracts were synchronized.
- Sources: complete local statements/proofs of `def-wiener-measure-on-continuous-path-space`, `lem-borel-sigma-algebra-of-continuous-path-space-is-generated-by-coordinates`, `lem-law-of-a-random-element-is-a-probability-measure`, and `thm-uniqueness-of-wiener-measure`; no web source was needed.
- Post-edit guard: `cdd3beaba5795ddabbbdebba71f07df2e7362be38fb34a92ad16c7fb0181030a`.
- Focused validation: `precheck` PASS, `rendercheck` PASS, strict batch and unified proof-contract checks PASS, and batch-manifest JSON parse PASS. The unified frontier ledger was refreshed; the added same-page/run and published dependencies create no cross-batch frontier edge.
- Step-6 warning `s8a-8cc750df2cc6d3567f87ba29`: `covered_by_rejection`; the licensed repair corrects the same path-law sentence and exceptional-set construction.
- Rejudge target: yes.

### `thm-brownian-time-inversion`

- Rejection tuple: `thm-brownian-time-inversion` / configured judge / `d576b6b6ebf6411b07d8479979498b74deb5c7e31806a4858047dc6ce26f5386`.
- Outcome: `confirmed_fatal` (`other`).
- Pre-edit guard: `c9abce2e4889b2197d4d349349bc51c421f550fdddccdb4d75a1ddf4689ade24`.
- Exact defect: step 5.1 defined `q_k` through `1/k` while indexing the sequence by the naturals, which include zero in the library; `q_0` was therefore undefined. The same item-level audit found that step 4.1 also combined continuity on `A` with `B_0=0` as if the latter held pointwise on `A`, although the Brownian definition supplies it only almost surely.
- Repair: indexed the approximating rational sequence explicitly by integers `k>=1`; introduced `A_0=A intersect {B_0=0}`, proved it has probability one using F6, and used `A_0` for the rational-limit event. Both proof contracts were synchronized.
- Sources: the complete owned theorem and its exact Brownian, rational-density, Archimedean, and probability-one-event suppliers; no web source was needed.
- Post-edit guard: `664122c0d96aae5b453a138d81926157ce8a6ffd1c8a850724127e8e42d42f43`.
- Focused validation: `precheck` PASS, `rendercheck` PASS, and strict batch proof-contract check PASS; the unified contract has no target-specific error.
- Rejudge target: yes.

### `thm-countable-state-martingale-problem-characterization`

- Rejection tuple: `thm-countable-state-martingale-problem-characterization` / configured judge / `87bc52244bd8f86d05f9f0782c4621d8e241f76adbd2a9ba6cbc3ad99fffd530`.
- Outcome: `confirmed_fatal` (`other`).
- Pre-edit guard: `b91b82379c514871a522a2a1a5f05fd06f30d51dde170344f92d452dc3bd62eb`.
- Exact defect: the Statement assumed only that `X` was adapted, so `f(X_n)`, `Pf(X_n)`, `Lf(X_n)`, and “`p`-chain” were ill-typed without an `S`-valued hypothesis.
- Repair: made `X` explicitly an adapted `S`-valued process in the Statement and Given block, and synchronized the downstream exact Statement citation in both proof-contract files. The batch manifest already carried the correct `S`-valued contract.
- Sources: the complete owned theorem and exact generator and bounded-function Markov-property suppliers; no web source was needed.
- Post-edit guard: `c1f1df6bdac87ed4212172be6728d0d5ed1c1bd841c619c7f9c02638e468ab72`.
- Focused validation: `precheck` PASS, `rendercheck` PASS, strict batch proof-contract check PASS, batch-manifest JSON parse PASS, and the unified contract has no target or downstream-consumer error.
- Step-6 warning `s8a-e5929daf49c3efbb67a2c755`: `covered_by_rejection`; it identifies the same missing `S`-valued hypothesis repaired under this exact rejection.
- Rejudge target: yes.

## Step-6 reader-warning dispositions

- `s8a-34586613b50d6ab66c8a06d4` on `thm-discrete-strong-markov-property`: `nonfatal`. For each finite `n`, the deterministic-time shifted-path functional is measurable, multiplication by the measurable slice indicator preserves measurability, and the disjoint slice sum is a pointwise limit of finite measurable sums. The missing sentence is an immediate closure argument; the uniform bound then gives integrability.
- `s8a-8b6e5d4f713727b2a1516045` on `cor-post-hitting-chain-restarts-from-the-hit-state`: `nonfatal`. The formal assertion is explicitly the eventwise identity for every bounded measurable path functional. The conditional-path-law sentence is shorthand for that determining family, not a separately quantified construction of a regular conditional distribution; the upstream measurable-`h` argument supplies the kernel if expanded.
- `s8a-a137b77dda1503645311143c` on `thm-markov-property-for-bounded-future-path-functionals`: `nonfatal`. F5 supplies the canonical law for every initial measure, expressly including Dirac measures, and step 1.1 fixes `P_x` as the canonical chain started from `x`; the undeclared notation cross-reference is presentation-level only.
- `s8a-8cc750df2cc6d3567f87ba29` on `thm-brownian-scaling`: `covered_by_rejection` using the exact `thm-brownian-scaling` rejection tuple recorded above.
- `s8a-e5929daf49c3efbb67a2c755` on `thm-countable-state-martingale-problem-characterization`: `covered_by_rejection` using the exact theorem rejection tuple recorded above.

No warning exposed a defect in another group, and no cross-group alert was written.

## Completion status

All fourteen judge rejections and all five Step-6 reader warnings are adjudicated. Thirteen existing items require targeted rejudgment; `def-gaussian-process` closed as `confirmed_nonfatal`. No new lemma item or published-item repair was required.

## Validation and gates

- Focused content checks: `precheck` passed on every proof-bearing repaired item; the repaired definition-only shift item correctly reported zero proof-bearing items. `rendercheck` passed on all thirteen repaired item files.
- Contracts and structure: the strict owned-batch proof-contract check passed `60/60`, and the targeted unified check passed `14/14` (the thirteen repairs plus the downstream exact-citation consumer). The batch manifest and both proof-contract JSON files parse. Repository `depcheck --quiet` passed with no cycle, unresolved reference, or draft-on-published-page error; its repository-wide warnings were not introduced as group-f blockers.
- Frontier ledger: after the dependency edits, `frontier-dependency-ledger.mjs refresh` completed successfully and the unified ledger was read. Batch 2's owned input is `[]`; the unified ledger contains zero edges and zero orphan reviews incident on batch 2.
- Judge and warning evidence: the strict Step-7 evidence loader reports zero shape errors and zero surplus answers, and selects fourteen current group-f answers: thirteen `confirmed_fatal` and one `confirmed_nonfatal`. All five owned warning decisions occur once. Three of the exact rejection tuples also have earlier, outcome-consistent rows from this in-flight dispatch; the no-rewrite rule leaves those rows in the append-only ledger, while the shared loader deterministically selects the later current group-f rows.
- Defect evidence: all thirteen namespaced group-f defect rows, `phase-2-next-18-step7-f-001` through `-013`, are present. The final run-scoped defect check found no group-f error; its full-level invocation exited nonzero only because another group's newly confirmed fatal `lem-rnp-is-invariant-under-banach-space-isomorphism` lacked its ledger row at check time.
- Fatal-only guard: all thirteen changed group-f items are licensed by their exact pre-edit `confirmed_fatal` adjudications, with zero group-f guard errors. The final full-level invocation reported twenty-three errors, all on items outside group f; those are not within this dispatch's repair authority.
- Scope check: `step7-scope.mjs check --allow-pending-alerts` passed (`6` groups, `566` partitioned items, `80` open rejections routed, `14/48` reader warnings/alerts dispositioned). The strict full-level check still reported thirty-four undispositioned warnings/alerts, all owned by other groups. Every group-f warning is dispositioned, and group f has no cross-group alert.

There is no unresolved group-f mathematical or artifact blocker. The level-wide Step-7 gate remains pending the engine's completion of other groups; no judge, rejudge, final adjudicator, or stage transition was run here.
