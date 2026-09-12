# Step 7 adjudication — group a

Run: `phase-2-next-17`  
Batches: 1, 3

## Progress

- Exact judge rejections adjudicated: 15 of 15 (`confirmed_fatal`: 9; `confirmed_nonfatal`: 2; `false_positive`: 4).
- Reader warnings dispositioned: 5 of 5 (`confirmed_fatal`: 1; `nonfatal`: 4).
- Current rejudge targets: `cex-clt-can-fail-with-infinite-variance-under-square-root-n-scaling`, `cex-feller-negligibility-cannot-be-removed-from-the-converse`, `cex-kac-formula-needs-ergodicity`, `def-row-wise-independent-centered-triangular-array`, `ex-clt-for-sums-of-uniform-random-variables`, `ex-normal-approximation-to-binomial-probabilities`, `lem-characteristic-function-of-a-normal-law`, `rem-clt-convergence-is-only-in-distribution`, `thm-kac-integral-formula-for-excursions`, `thm-multivariate-iid-central-limit-theorem`.
- New lemmas, published repairs, cross-group alerts, and frontier-ledger changes: none.
- External sources consulted: none; every decision was resolved from exact local supplier interfaces and elementary derivations.

## Completed decisions

### `cex-clt-can-fail-with-infinite-variance-under-square-root-n-scaling`

- Rejection: context `cc2bb991c775df2920227e495d6d4c057bbc7737333c1e93bec19c58c5e0b07b`.
- Pre-edit guard: `e3ed65b58863c679aba263e48d1e5052cfa88f08174968133079eb7248c34a96`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the opened `thm-integration-against-a-density` Statement covers only nonnegative integrands, whereas F9 claimed it covered complex characteristic functions and step 1.1 relied on that upgrade.
- Repair: stated F9 exactly, added `def-integrable-real-and-complex-functions-and-their-integrals`, and derived the bounded-complex density identity by applying F9 to the positive/negative real and imaginary parts. The proof contract now records the exact new interface and derivation.
- Post-edit guard: `348d7cd392fae6b7f71977d61d268a09c753560cedd503dfb130242493ab9fd4`.
- Checks: focused precheck passed; strict item-scoped batch-3 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `cex-feller-negligibility-cannot-be-removed-from-the-converse`

- Rejection: context `e861dd2e6862b2a9a2296ecf0889d4f7162e3f6e1cab8d465bbc93c7cd71bcc0`.
- Pre-edit guard: `fee96ef5a6453bd3f967879f231ef146697488cc662b572e638e7d2d9b167201`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: `lem-characteristic-function-of-a-normal-law` supplies moments conditional on a variable already having normal law; it does not construct the standard-normal probability space that step 1.1 used.
- Repair: F1 now states only the moment interface; new F7 cites `def-standard-normal-and-normal-laws` for existence, and step 1.1 cites both. The proof contract records the exact Definition excerpt.
- Post-edit guard: `f94e1d18eacc42aea26aa76e3265ed377dc012442b12cd0b14d1079a5bb108f9`.
- Checks: focused precheck passed; strict item-scoped batch-3 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `cex-kac-formula-needs-ergodicity`

- Rejection: context `325620cf61d46208adb94e07e8474e715502367ec2f14b0a9f45ac29e038189f`.
- Pre-edit guard: `d4211dc15e94c571566b2b5d2d98644a2a44ad4fec5a0803bfba8003c88f61b2`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: old F2 asserted that value one requires ergodicity, while `thm-kac-return-time-formula` only proves the universal formula under ergodicity; a nonergodic pair can happen to have integral one.
- Repair: narrowed F2 to the exact theorem implication. The identity-map witness and its conclusion—that ergodicity cannot be deleted from the theorem in general—remain unchanged.
- Post-edit guard: `2400decd3756e2faef0e5d763a0362abf79031b4ac1b219069b97d206bb5b2ae`.
- Checks: focused precheck passed; strict item-scoped batch-1 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `cor-lyapunov-central-limit-theorem`

- Rejection: context `83945386652a817339abb33f2748d3879e7ff61f28114df50f044fbb7e846141`.
- Guard: `97485039973aea41c1b66826b691b4eaff3c072e10923c3d7191ecc3f808c1c8`.
- Outcome: `false_positive`.
- Evidence: `s_n` is not introduced as an arbitrary sequence. Direct dependency `def-total-row-variance-and-lindeberg-condition`, quoted exactly in F1, defines the associated quantity by `s_n^2=sum_k Var(X_{n,k})`; the Statement's `s_n>0` and both proof steps use that fixed notation. All hypotheses of the Lindeberg sufficiency theorem are therefore supplied.
- Repair/checks/rejudge: no content or contract change licensed; not a rejudge target.

### `ex-clt-for-sums-of-uniform-random-variables`

- Rejection: context `42d64eb2dad2f97f3906e1772688157b6d56299fd38ec728aea1fb476633856b`.
- Pre-edit guard: `6deb1295941dc096555b3cb276f72e8534201840cb6c15621c7de43f2ea8f39d`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: `thm-integration-against-a-density` accepts only globally nonnegative integrands, while old step 1.1 applied it directly to the signed identity function on the real line.
- Repair: applied the density theorem separately to `x^+` and `x^-`, then used the exact signed-integral definition to recover the mean; the square moment still uses the nonnegative integrand `x^2`. The proof contract records that definition and the revised derivation.
- Post-edit guard: `a903686e1ec622f5d5cf90e5b222dba41c75c102c066ed020e01f6aa9b72908e`.
- Checks: focused precheck passed; strict item-scoped batch-3 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `ex-lindeberg-array-with-no-identically-distributed-row`

- Rejection: context `b1b0c87181d24bafa693a9a5357f1ad1883e0acc896e66336c9f495440bbe6b4`.
- Guard: `9a3b9ff45b1935b03317bca7b2df79cc851c49419d620de5474c585cf2845b93`.
- Outcome: `false_positive`.
- Evidence: the example constructs entries only for `1 <= k <= n` and calls them an array; direct prerequisite `def-row-wise-independent-centered-triangular-array` explicitly indexes rows by integers `n >= 1` and excludes empty rows, and `def-total-row-variance-and-lindeberg-condition` inherits that convention. No `n=0` row or `s_0` occurs.
- Repair/checks/rejudge: no content or contract change licensed; not a rejudge target. The independent Step-6 presentation warning about the finite-sum explanation is dispositioned separately below.

### `ex-lyapunov-condition-for-nonidentical-summands`

- Rejection: context `c2c754aafaaf6bf45140d1d5d838507c65c0bec1a1d16df683c228cb1289117b`.
- Guard: `09fce8f01e380af37bb7593e5e024f80a56d94e1ebd970b123ed562aa7edb527`.
- Outcome: `false_positive`.
- Evidence: the example indexes entries by `1 <= k <= n`, explicitly checks the boundary `n=1`, and directly depends on `def-row-wise-independent-centered-triangular-array`, whose rows are indexed only by integers `n >= 1` and are nonempty. Thus `s_0` is outside the array's domain.
- Repair/checks/rejudge: no content or contract change licensed; not a rejudge target.

### `ex-normal-approximation-to-binomial-probabilities`

- Rejection: context `d02835134e9770b91aa1dd1f389151bf5845e7cb8f84ef19d5430a7806fd984e`.
- Pre-edit guard: `5a9a3aa0ba35dd8b5b4102a07985f47252b44bf43e4482af6adf58371fe311fe`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the displayed standardization divides by `sqrt(n p (1-p))`, but the old Example did not state the `n >= 1` restriction imposed by the exact cited de Moivre–Laplace theorem, leaving the expression undefined at `n=0` under the library's natural-number convention.
- Repair: explicitly quantified `B_n` for every integer `n >= 1` in the Example and Given block, and recorded that boundary in the proof contract.
- Post-edit guard: `7c02ef7333baf5e876dd714ae7185fc5739d0fb8d4acf56e52d4bff10c8fbcb5`.
- Checks: focused precheck passed; strict item-scoped batch-3 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `lem-characteristic-function-of-a-normal-law`

- Rejection: context `e73a8909db4c8fe836646c7b24aca7a25d19e199d6807835d6d5e343b3aa9af2`.
- Pre-edit guard: `1e4b24311b6df020e6e3acd951de988cf37ae9b8274bf1574c6b8a346d19c38b`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F11 described `thm-integration-against-a-density`, whose Statement is restricted to nonnegative integrands, as an unrestricted expectation formula and then used it for signed and complex functions.
- Repair: stated F11 exactly, added the real/complex integral definition, and derived the needed extension by applying F11 to positive/negative real and imaginary parts. The proof contract contains the exact Definition excerpt and revised first derivation.
- Post-edit guard: `75708ce5090de5e356ca647a83c4d08b40893b34eff952d980cf772445795271`.
- Checks: focused precheck passed; strict item-scoped batch-3 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family`

- Rejection: context `99ee206aca77c7edfb4ba8b5bd633f5366da8f3baf46a5fb2418c748d8fbe3ad`.
- Guard: `e97c800005dc09720d400e42d9299114f6480c480f0c4b34aab49e3f16d3d978`.
- Outcome: `confirmed_nonfatal`.
- Evidence: `lem-countable-iff-surjection-from-n` supplies a surjection from `N` and explicitly licenses informal enumeration notation with repetitions. The positive-indexed enumeration is `x_j=s(j-1)`, an immediate bijective index shift. Omitting that one line does not make the existence claim false or leave a material dependency gap.
- Repair/checks/rejudge: no content or contract change licensed; not a rejudge target.

### `lem-second-order-characteristic-function-expansion`

- Rejection: context `0667639a9f5730253e4a7f42b61e5e87e7c656cf2006ae4aba1d25b2dd1ee2c7`.
- Guard: `2c42bb196a5fddbf8fdb4026ea06a1725a8b9b0c9997bf4960efb879fec99650`.
- Outcome: `confirmed_nonfatal`.
- Evidence: the reciprocal `1/n` and condition `0<|t|<=1/n` in step 2.1 unambiguously use positive integers. If a zero-indexed sequence is demanded syntactically, replacing `n` by `m+1` produces exactly the displayed dominated-convergence sequence. This is an immediate reindexing, not a false estimate or limit argument.
- Repair/checks/rejudge: no content or contract change licensed; not a rejudge target.

### `rem-clt-convergence-is-only-in-distribution`

- Rejection: context `63751b035c896558357bad530d0fff92e604fac6edaaa38276c9d61774dc8b49`.
- Pre-edit guard: `753aeed311ef9603f8969e39fd4708dbf634040d03095ed260ec545a73d3a783`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: `thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability` is stated only for real random variables, while the old remark applied it directly to fully degenerate multivariate Gaussian limits.
- Repair: limited the cited consequence to scalar degenerate normal limits and stated that the finite-dimensional vector version needs its own argument; the partially singular/nonconstant distinction remains.
- Post-edit guard: `a98c48de6707fc6fa957e670feaef29e13f6e044b16bc0b16ae110eb44882c38`.
- Checks: the remark has no proof-format body (focused precheck checked 0 items); strict item-scoped batch-3 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `thm-doubling-map-is-ergodic-for-lebesgue-measure`

- Rejection: context `c5719eee9e01c005200996faa5474fa6665491ad408931cdad0cc1adb53972c3`.
- Guard: `7df9fb75954e176ee732a0f48443e707f0d68fca004b399b358068b81d30cc1b`.
- Outcome: `false_positive`.
- Evidence: `def-ergodic-measure-preserving-system` defines ergodicity by null/conull strictly invariant sets. The opened `thm-ergodicity-and-invariant-functions` states equivalence with the mod-null criterion, and its proof explicitly says the mod-null condition implies ergodicity by applying it to strict invariant sets. Thus the proof establishes exactly the sufficient criterion stated in F2.
- Repair/checks/rejudge: no content or contract change licensed; not a rejudge target.

### `thm-kac-integral-formula-for-excursions`

- Rejection: context `6dd743b06b8a790b82d7f4543590b9e88006d4465ebebf06f66346d009c99bb4`.
- Pre-edit guard: `4c67fb44d93423684df7fdfb1105f61a83bc24d104f8c9934717d3ea0ab6bace`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: old F1 and step 2.1 used `C_N` and its vanishing measure from inside the proof of `thm-kac-return-time-formula`; that theorem's public Statement exports only the return-time integral identity.
- Repair: replaced the proof-internal citation with direct dependencies on `prop-ergodic-positive-sets-sweep-out-almost-every-point` and `thm-continuity-from-above-for-measures`. The locally defined decreasing sets `A_N` have null intersection by sweep-out, so continuity from above now proves `mu(A_N)->0` explicitly.
- Post-edit guard: `db916239896d7583b9d746dbdfa24f2ffcfc2b64f8731a80e9ee901383276972`.
- Checks: focused precheck passed; strict item-scoped batch-1 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

### `thm-multivariate-iid-central-limit-theorem`

- Rejection: context `10b02accae6b0d2684001b89ee976953c360df944fc914ce3cd08dd7abd056d4`.
- Pre-edit guard: `11d83458d01c24ff30957a33702898fc764b5ca0b1b0b4a5cc2928bf52782bd4`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the old Statement left `d` unrestricted and step 3.1 expressly included `d=0`, but `def-multivariate-normal-law` defines the target notation `N_d` only for finite `d>=1`.
- Repair: required finite integer `d>=1` in the Statement/Given block and removed the undefined `N_0` assertion. The batch contract's downstream quotation in the two-dimensional degenerate-Gaussian example was refreshed to the repaired interface.
- Post-edit guard: `22934d083f55d36e371b90912e132b5b69a77873710c5c9fbaa33dfec2b44617`.
- Checks: focused precheck passed; strict item-scoped batch-3 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes.

## Reader-warning decisions

### `s8a-96c9fa3253d84007809bbf39` — `thm-circle-rotation-is-ergodic-iff-angle-is-irrational`

- Outcome: `nonfatal`.
- Evidence: after naming the overlap `K`, removing the two exceptional pieces leaves a subset of both `A` and its complement, hence the empty set, but the displayed estimates give it measure greater than `19r/10-2r/5=3r/2`. The omitted set name is a reader-closeable presentation gap; the constants and contradiction are correct.

### `s8a-6ee36e270ce20371761fd054` — `thm-induced-transformation-preserves-the-restricted-measure`

- Outcome: `nonfatal`.
- Evidence: the null-subset parenthetical is not a valid completeness-free reason, but the difference is `H_n intersect (E minus E_infinity)`. Both factors are already measurable, so measurability follows immediately from sigma-algebra closure and nullity from inclusion. The conclusion needs no added hypothesis.

### `s8a-ac4ba8d17c1346323061463b` — `ex-gauss-map-preserves-gauss-measure`

- Outcome: `nonfatal`.
- Evidence: the consecutive rational-base sentences separately cite density and countability of the rationals. The repetition is editorial; both dependencies are present and the generating-pi-system proof is complete.

### `s8a-40df81b6e6ecc8c8481bd77f` — `ex-lindeberg-array-with-no-identically-distributed-row`

- Outcome: `nonfatal`.
- Evidence: the displayed sum and all ensuing bounds are correct. Pairing the forward list with its reverse creates `n` sums equal to `n+1` and then divides by two (or uses disjoint pairs plus the odd middle term); the prose omits that final explanatory clause only.

### `s8a-53693bf584a50340bb00930c` — `def-row-wise-independent-centered-triangular-array`

- Pre-edit guard: `7fe07ea888d520383b5ffda4e40f4523b1569a1dadcb7b239210020345af7905`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the Definition asserted that Borel rectangle factorization is exactly independence of the generated sigma-algebras, but cited only the latter definition. The converse uses the published pi-system extension theorem and is load-bearing when the CLT proof factors row-sum characteristic functions.
- Repair: added and cited `thm-rectangle-criterion-for-independent-random-elements` at the equivalence sentence, and updated the contract's iff evidence.
- Post-edit guard: `baead346c26f4eda54eeec9101c911ed1f7b862ea6308dfe275e9aad2422b76d`.
- Checks: the definition has no proof-format body (focused precheck checked 0 items); strict item-scoped batch-3 proof-contract check passed with 0 errors and 0 warnings.
- Rejudge target: yes, under the reader-warning certification path.

## Validation and blockers

- Focused precheck passed for every changed proof-bearing item; the changed definition and remark correctly contained no proof-format body.
- Focused rendercheck passed all ten changed items with zero errors and zero warnings.
- Full strict proof-contract validation passed for batches 1 and 3 with zero errors. Batch 1 retained one pre-existing shotgun-bracket warning on `ex-gauss-map-preserves-gauss-measure`; the related Step-6 presentation finding is dispositioned nonfatally as `s8a-ac4ba8d17c1346323061463b`, so Step 7 licenses no content or contract edit. Batch 3 had zero warnings.
- `defect-ledger validate --run phase-2-next-17` passed: 96 rows checked, zero errors.
- A final group-a consistency check found exactly 15 rejection adjudications, five reader-warning decisions, and ten defect-ledger rows; every repaired item still matches its recorded post-edit guard hash.
- The full defect-ledger closure check remains globally blocked by two confirmed-fatals in other groups that do not yet have defect-ledger rows: `prop-the-first-hurewicz-map-in-degree-one-is-abelianization` and `rem-intermediate-models-and-complete-subalgebras`. All ten group-a fatal defects have matching rows.
- The full Step-7 scope check remains globally blocked by eight undispositioned reader warnings in other groups. All five group-a reader warnings have owning-group dispositions.
- The structural scope check with pending external alerts allowed passed: seven groups, 571 items, and 53 open rejections were routed; the strict variant fails only on those eight other-group warning dispositions.
- The Step-7 guard inspected 89 changed items and licensed 88. Its two global errors concern other groups: an unlicensed edit to `lem-first-main-theorem-injectivity` and an uncertified new lemma `lem-finite-support-constructibility-absoluteness`. It reported no unlicensed group-a edit.
- Group-a work has no unresolved fatal, licensed-repair, hash, ledger, rendering, or cross-group obligation. The engine still owns the pending global closure, rejudge, and stage transition.
