# Step 7 adjudication — group b

Run: `phase-2-next-20`  
Batches: 2, 15

## Summary

- Exact judge rejections adjudicated: 15 of 15 (`confirmed_fatal`: 14; `confirmed_nonfatal`: 1; `false_positive`: 0).
- Rejudge targets: the 14 items marked “yes” below; no unchanged or nonfatal item is a target.
- Defect-ledger rows: 16, comprising one row for each confirmed rejection plus two additional defects found during the licensed audits of `lem-schwartz-functions-and-all-derivatives-are-integrable` and `thm-plancherel`.
- New lemmas, published repairs, owner-prerequisite repairs, and frontier-ledger changes: none.

## Completed decisions

### `thm-plancherel`

- Rejection: `gpt-5.6-terra`, context `1b2ca0adc6b50d59017ad1c45a120c213607df7e55283270bad6802a09892d7d`.
- Pre-edit guard: `12883a04f981620648cb00675096fe4db3774a986b94b0e9596df971f102ae64`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the original natural-indexed approximation tolerance `1/k` was undefined at `k=0`. The licensed audit also found that the Statement omitted the `n>=1` hypothesis now explicit in its dense-Schwartz dependency.
- Repair: replaced the tolerance by `1/(k+1)` for `k in N`; added `n>=1` to the Statement and Given; refreshed the dense-Schwartz citation and every owned downstream exact Plancherel quote. The two defects received separate ledger rows, with only the judge-confirmed reciprocal defect owning the adjudication tuple.
- Post-edit guard: `b7b291f88d22e4aa24262d061df18b6b914f6633b4eeacd442b3a12956584ab7`.
- Checks: focused precheck passed; strict contract checks for Plancherel and all five owned downstream consumers passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `thm-l-one-fourier-inversion`

- Rejection: `gpt-5.6-terra`, context `92ca8cf9a0b11f1c92eb015aedddf37911e80115e679ce96273fbe501d2aceed`.
- Pre-edit guard: `ee30c78303af3b47b7998b5a2db5cdf8fed44369143badaeef3eb10e15798b04`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the original natural-indexed sequence `t=1/m` had an undefined zeroth term under the library's convention `0 in N`.
- Repair: replaced it with `t_m=1/(m+1)` for `m in N`, used `S_(t_m)` consistently, and synchronized the contract.
- Post-edit guard: `f5faa92f9295a6eaad1698101370f8d0aacd2f391466b671ed940dbabda461f7`.
- Checks: focused precheck passed; strict batch-15 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `thm-heisenberg-uncertainty-inequality`

- Rejection: `gpt-5.6-terra`, context `7410f0a9dd4e5ec21bfbb1c3a35f613866c0a13cbfacba233b28beb29e15f3e8`.
- Pre-edit guard: `add954fe1e90ba6cce2ffd5994c4d1d613a7b69bfe4c66e8aee932e42cdf27ca`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: with no `n>=1` hypothesis, the zero-dimensional inequality is equality for nonzero functions, while step 3.1 incorrectly asserts `n||g||_2^2>0` and invokes a nonzero-tuple equality criterion.
- Repair: added `n>=1` to the Statement and Given and updated the risk review.
- Post-edit guard: `13fe494546bc88bc7075426b2550eddb7daaf387b9014339064b77a1effd4fb4`.
- Checks: focused precheck passed; strict batch-15 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`

- Rejection: `gpt-5.6-terra`, context `d48f8f5821f7cdcaf39fe449e116a6aaca93e46eed3c2339d370707552329283`.
- Pre-edit guard: `14ab93785ebb772daf040a2aa578812e37e018797f273228bc1b108937a1c988`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F3 supplied only exponential addition, while step 2.1 invoked uncited exponential continuity and then silently strengthened pointwise continuity to one delta uniform over the radius-`R` ball.
- Repair: cited Euler form/unit modulus, the mean value theorem, sine/cosine derivatives, complex modulus triangle inequality, and Euclidean Cauchy--Schwarz; derived `|exp(iu)-1|<=2|u|` and the explicit uniform `delta=epsilon/(8 pi R(1+||f||_1))`; synchronized the contract.
- Post-edit guard: `2a98b34aec1c90d5fcd0038f2e523739b44a0ddcd6bf7e724f87102b6f10d3b0`.
- Checks: focused precheck passed; strict batch-15 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `thm-fourier-transform-converts-convolution-to-products`

- Rejection: `gpt-5.6-terra`, context `7ac23dd1af906dc3b4a9bf817c0793dd7370610e1c3886fd37a8303a482c3d6e`.
- Pre-edit guard: `0364c66704d31b9eb6ee1527f9cea211dd8f520b591355339ebea72976f09dd6`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the opened complex convolution interface supplies class-level convolution and translation results but its Statement does not supply the Borel representatives that F1 claimed and step 1.1 needs.
- Repair: added the published completion-measurable representative theorem, applied it to the real and imaginary components to obtain finite Borel representatives, and synchronized the contract.
- Post-edit guard: `b352ebdc9fe46d2668f96ffbf47fea9a16cd942475134543117834f6efa1c0b8`.
- Checks: focused precheck passed; strict batch-15 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `lem-topological-vector-space-translation-scaling-and-absorption`

- Rejection: `gpt-5.6-terra`, context `5b0b1c903534018701019d0020f73022c7a8c2d764d6e3e22c9daeee6757ccf8`.
- Pre-edit guard: `d58d8c9d7abdb1b458774524d2e28368cea7bcf1d34cb15ea4a3bc5bc123430a`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the opened complex-modulus lemma states its multiplicative and triangle formulas only for complex scalars, while F5 extended them without a supplier to real scalars and steps 3.2/4.1 use that extension.
- Repair: added the exact published real absolute-value multiplicativity and ordered-field triangle-inequality dependencies, cited each in F5, and synchronized the proof contract.
- Post-edit guard: `7973b139e82295dbd3939d82c5ebf3afedfaf500f331620919ec2d0288958e66`.
- Checks: focused precheck passed; strict batch-2 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space`

- Rejection: `gpt-5.6-terra`, context `40efec10062dfc828b649c5d12233cd62ad19c3b11caf11ed73aa5640981c1a7`.
- Pre-edit guard: `4fbbebcd44e3554fe5def67e6005c87c76f4ca30b5055db26cd979ac7ad9a21b`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the supplied multi-index convention uses zero-based coordinates `j<n`, while the key tail estimate summed `j=1,...,n`, omitting `e_0` and invoking undefined `e_n`.
- Repair: changed the multi-index coefficient product and every coordinate sum in the proof to `j<n`, and synchronized the proof contract.
- Post-edit guard: `b8ff506e35ad57c03e966a9f33baad47c1e6949b6a64ff3883f880c47dab97ce`.
- Checks: focused precheck passed; strict batch-15 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `lem-simultaneous-smooth-approximation-in-l-one-and-l-two`

- Rejection: `gpt-5.6-terra`, context `e63a63a0c3c49b1b3612721b8572d34aa6e3b2fe1d0de4e2404021706ace0321`.
- Pre-edit guard: `aa0c8ac1307f5385723948cd7d8baf3b22fe1a021ce5fbb6ad80fc385abf300b`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: F2 and step 2.1 use the complex approximate-identity interface, whose opened Statement assumes `n>=1`, while the original consumer Statement did not restrict `n`.
- Repair: added `n>=1` to the Statement and Given, recorded the hypothesis in F2, and refreshed the downstream agreement theorem's exact contract quote.
- Post-edit guard: `94bd4888685e5aa13733d51fb9845ada8497a014cc4894f5a48bbb9d44581085`.
- Checks: focused precheck passed; strict contracts for this item and its downstream batch-15 consumer passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `lem-schwartz-space-is-dense-in-l-two`

- Rejection: `gpt-5.6-terra`, context `9fc42d5e623db7b93e3af9c74167017d38cd2aff4438eec279cb201f894783dc`.
- Pre-edit guard: `79cdd1f7ec83ec353cc0c4811a976b43d574c836dca0df80ccc263e2ea47f0af`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the original proof established the dense subset `C_c^infinity subset S` but never showed that an arbitrary Schwartz function belongs to `L2`, so it had not justified the title and Statement's dense-subspace claim.
- Repair: added the preceding Schwartz-integrability lemma as F2 and proved `integral |u|^2 <= p_00(u) integral |u| < infinity`; also made `n>=1` explicit in the Statement and synchronized the proof contract.
- Post-edit guard: `776c5c26585b16b515a171b9d96ece96c36a12225e68abf63fb9b337da4f69a0`.
- Checks: focused precheck passed; strict batch-15 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `lem-schwartz-functions-and-all-derivatives-are-integrable`

- Rejection: `gpt-5.6-terra`, context `d4c46dd7dd23eb603e59da9695598145a024caeb92045c3539cfa782ba857777`.
- Pre-edit guard: `9300e6e06a238a8da7e027b7acf5d6d628117891099ad0b9ba35162078791744`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: Tonelli computes integrals for a specified product measure, whereas the item asserted the bound for Euclidean Lebesgue measure without citing an identification. The opened `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets` supplies exactly that equality on the continuous Borel integrand. The licensed item audit also found a separate zero-based indexing defect: `product_(j=1)^n` omitted coordinate 0 and invoked undefined coordinate `n`.
- Repair: replaced the unused linear-change dependency with the Borel product-measure theorem; added F2 and an explicit induction identifying `lambda_n` with `lambda_(n-1) times lambda_1`; changed the coordinate product to `j<n`; synchronized the proof contract. Both defects received distinct defect-ledger rows, while only the judge-confirmed citation defect owns the adjudication tuple.
- Post-edit guard: `6b7c3cb8e22b42dce4b5268935d98c4a4b560ea3347f74f8f31fbaa7a8783612`.
- Checks: focused precheck passed; strict batch-15 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `lem-schwartz-cutoffs-from-the-standard-smooth-step`

- Rejection: `gpt-5.6-terra`, context `5668a81e25ba9885c2db7be0b99f35762fb26c2f35f706bbc9f7bbe042ec251b`.
- Pre-edit guard: `99036fcef51480d566356d3cbc743303a4c0837ed83f22fd3810e893ab5f8ebb`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the original Statement left `n` unrestricted, while step 2.1 used `thm-heine-borel-rn` to make the radius-two support compact. That opened supplier explicitly assumes `n>=1`; the written proof supplied no zero-dimensional replacement.
- Repair: added `n>=1` to the Statement and Given and refreshed both downstream contract quotes.
- Post-edit guard: `d8eb5a095d8c184afbe71cdf8503c03bab19247328ffd7c10c8fe177d23462ee`.
- Checks: focused precheck passed; strict contract checks for the cutoff lemma and both downstream batch-15 consumers passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `lem-real-ltwo-multipliers-and-unitary-transport`

- Rejection: `gpt-5.6-terra`, context `cb9af813df071a44577d7a582afeaa82e6e4fa3322078896d68e44ae4578b9f9`.
- Pre-edit guard: `69eb51cfd91ac319773d551f2a15ef670222fe97429096063e832fb1fd617a2d`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: step 2.2 called the quotients at `t=1/N` a sequence without restricting `N`. Since the library naturals include zero, its zeroth quotient is undefined. This is an ill-typed proof construction, even though omitting the first index does not affect the intended limiting argument.
- Repair: replaced the parameter by `t=1/(N+1)` for `N in N` in the proof, its exact contract derivation, and the risk-review summary.
- Post-edit guard: `295fd0fa726df70d423e9c09a34ec6b8882c101cbc242f0b709a7b29c7eaf572`.
- Checks: focused precheck passed; strict batch-15 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients`

- Rejection: `gpt-5.6-terra`, context `82437a165f3fc5c8a3055676beadc409fa36da94e3360b6ee5be328e166d0f22`.
- Pre-edit guard: `e7101fa6158b4c8ae76bde2d197c5e002e7bf7e2f68626fdc13b2c389d7986c5`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the original Statement did not bind `n>=1`, while step 1.1 applies `thm-heine-borel-rn` to subsets of both `R^n` and `R^(2n)`. The opened supplier explicitly restricts its Euclidean theorem to positive dimension. The contract’s own empty-case row also treated `n>=1` as intended, but that note could not supply a missing Statement hypothesis.
- Repair: added `n>=1` to the Statement and Given and refreshed the exact quote in the sole downstream batch-15 contract citation.
- Post-edit guard: `c701cb3f54c5e05d4e11a1ae8feeb538e2744e1de6ccb6f3f7f0a14e12ebeb05`.
- Checks: focused precheck passed; strict proof-contract checks for this lemma and `thm-poisson-summation-for-schwartz-functions` passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `lem-gaussian-smoothing-of-finite-complex-measures`

- Rejection: `gpt-5.6-terra`, context `6c2e67be28361e0c3fdd1a7c08b73d9b0c18b6b4e1fd80c7b7bb41111aeb16eb`.
- Pre-edit guard: `36d9d7017d03361f637c4fd3f816c4da0f383d065e60fe9d100085c54a491684`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the original Statement quantified over complex `C_c` tests but directly depended on `def-c-c-and-c-c-infinity-on-rn`, whose functions are real-valued. The proof then invokes a complex `C_0` approximate-identity interface. The published `def-complex-lp-and-euclidean-test-function-conventions` explicitly defines complex `C_c` and `C_0` componentwise for `n>=1`, exactly the domain here.
- Repair: replaced the real test-function dependency and Given link with `def-complex-lp-and-euclidean-test-function-conventions`; no theorem conclusion or proof calculation changed.
- Post-edit guard: `5b8c94a31726883154981e63655610fb4e99567a06cd421b5c605a33e17c49d3`.
- Checks: focused precheck passed; strict batch-15 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `cex-a-schwartz-function-need-not-have-compact-support`

- Rejection: `gpt-5.6-terra`, context `303c2c54092e87e462510b2d698f3e4706f5a5d4e782c9eedfb2b388a9f13f0a`.
- Pre-edit guard: `829ceed1fccc6ba374364d0e045df077995d06a8d5529e11fcbed69ef72e2398`.
- Outcome: `confirmed_nonfatal`.
- Evidence: [F2] cites `def-c-c-and-c-c-infinity-on-rn`, whose Definition says “compact support” and directly links `def-support-and-compactly-supported-riemann-integral-in-rn` at that phrase. That linked definition supplies support as closure of the nonzero set. Since the Gaussian is positive everywhere and step 2.1 proves that its support `R^n` is not compact for the stated `n>=1`, the mathematical claim and witness are sound. The compressed citation chain is nonfatal presentation thinness.
- Repair/checks: no content edit is licensed or warranted; exact consumer and supplier text read.

## Sources consulted

No web sources were needed. The decisions were resolved from complete local item and dependency interfaces plus elementary derivations. In particular, the audit opened the exact Statements or Definitions for the complex test-function convention, completion-measurable representatives, Euclidean/product Lebesgue-measure identification, real absolute-value laws, Heine--Borel, complex approximate identities, Schwartz integrability and density, Plancherel, finite-measure Fourier uniqueness, and characteristic-function normalization. It also opened both seam pages and their exact proof-contract quotations:

- `library/fourier-analysis/carleson-hunt-time-frequency-theorem.md` and `research/phase-2-next-20-batch-5.proof-contracts.json`;
- `library/probability/characteristic-functions-inversion-and-continuity.md` and its owned item citations;
- the cited source files under `items/`, including `def-complex-lp-and-euclidean-test-function-conventions`, `thm-completion-measurable-functions-have-base-measurable-representatives`, `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`, `lem-of-abs-value`, `lem-of-triangle-inequality`, `thm-heine-borel-rn`, `lem-complex-translation-and-approximate-identity-interfaces`, `lem-schwartz-functions-and-all-derivatives-are-integrable`, `lem-schwartz-space-is-dense-in-l-two`, `thm-plancherel`, `cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms`, and `rem-probability-characteristic-function-normalization`.

## Alerts and unresolved obligations

- Reader warning `s8a-0ad5195c4d51cc7a69135001`: `covered_by_rejection`; it identifies the same missing uniform-delta justification as the exact confirmed-fatal rejection above.
- Reader warning `s8a-e3aa0075b212358a123532bd`: `nonfatal`; F7 makes the rescaling `y=sqrt(pi)x` immediate, and F3 plus continuity gives the stated tail/compact-middle majorant. Both are valid reader-fillable presentation steps, so no content edit is warranted.
- The group-A seam is mathematically faithful in dimension one, but four exact proof-contract quotations became stale when the licensed repairs made `n>=1` explicit. Cross-group alerts were recorded for `lem-carleson-size-selection` (`s8a-f341149f71aa52b5f4799cbd`), `lem-carleson-single-tree-estimate` (`s8a-5d796284787d379b227f695d`), `lem-carleson-signed-tree-weak-one-one-estimate` (`s8a-2bf6ac4833f917bc29734a9b`), and `thm-carleson-maximal-operator-is-strong-ltwo` (`s8a-1bb5718ed8eab51da39c66ba`). Group b did not edit group A's artifacts.
- The group-C seam is faithful: its one-dimensional characteristic-function convention, finite-variation hypotheses, choice scope, uniqueness direction, and separate zero-dimensional Cramer--Wold case match the cited group-B interfaces.
- The strict scope check was run and is presently blocked by 16 pending owning-group alert dispositions: the four group-B-to-A alerts above and 12 alerts raised by other groups. Both warnings owned by group b are dispositioned. The engine owns routing and retry.

## Final validation

- All 14 changed items passed `tools/precheck.mts`.
- The full batch-2 strict proof contract passed with zero errors and warnings.
- The full batch-15 strict proof contract passed with zero errors and one unchanged `shotgun-bracket` presentation warning on `thm-schwartz-space-is-frechet`; every focused changed-item contract check passed with zero errors and warnings.
- `defect-ledger validate --run phase-2-next-20` passed. The run-wide defect-ledger closure check was temporarily blocked by an unrelated group-A adjudication that had not yet received its ledger row.
- The first Step-7 guard run exposed nine group-b adjudication rows whose pre-edit hashes used the judge/raw form instead of `itemHashGuard`. Those records and their matching defect rows/report hashes were corrected from the frozen Step-5 closure and current guard digests. The latest rerun passed globally: 77 changed items licensed, zero errors, zero warnings.
- `step7-scope check --run phase-2-next-20` was executed and reported the pending-alert blocker above; `--allow-pending-alerts` otherwise validates the rendered scope and evidence.
