# Frontier 36 complete Step 5 owner review — batch 6

## Scope and method

This is an independent, item-scoped review of the ten batch 6 carriers named below for the Step 5a group B owner evidence. I read each current item and its exact entry in `research/frontier-36-complete-batch-6.proof-contracts.json`; each of these batch-specific entries equals its corresponding entry in `research/frontier-36-complete-proof-contracts.json`.

For each item I compared the current raw item-file SHA-256, canonical contract-entry SHA-256, and canonical manifest-row SHA-256 with both Step 5 batch 6 snapshots (`research/frontier-36-complete-step5-hash-6-pre.json` and `...-post.json`). The pre and post rows agree for every target. Current item and manifest hashes match those snapshots; all ten current contract-entry hashes differ from their Step 5 values. The snapshots contain hashes, not prior contract-entry bytes, so they do not establish which contract fields account for each difference.

I checked all 46 current contract citation excerpts against the named current supplier sections, allowing whitespace normalization; all matched, and each cited supplier is a declared dependency of the item. I also read the external Stacks references: tags 00R9, 00R8, 00P1, 00RA, 00N0, 00N1, 00RB, 00RC, and 00HM were reachable and their theorem/lemma roles matched the proof routes recorded here. For 00RB the item uses the equidimensional-fibre specialization. The proof arguments below were checked independently against the current statements and cited local dependencies.

## Items

### `lem-cm-equidimensional-fibre-dimension-bound-regular-sequence`

- Current hashes: item `b04e1fbfc18b73274d653e95207c72372a8a67c02d3fb54022082059d36bfacb`; batch 6 contract entry `a7a51f4d816ab133e6ee417b5f89ce2e9fc33d8cc18fdf74f5aee172536c0957`; manifest row `03eb7aac51ad515fecb7708c96beff41c1a91507c116d9be809ffd3320a2d95a`.
- Step 5 pre/post comparison: item hash matches `b04e1fbfc18b73274d653e95207c72372a8a67c02d3fb54022082059d36bfacb` in both snapshots; manifest hash matches `03eb7aac51ad515fecb7708c96beff41c1a91507c116d9be809ffd3320a2d95a` in both; contract hash changed from `67e8e39fe2a908e0aeb07f32d14973a228272cea0ea011ae4cc4a6f624ff4c14` (pre and post agree).
- Current `risk_review`: status `complete`, reviewer `alpha-b-5a`. Note: Read statement, facts and proof 1.1–3.1. Maximal local dimension d, quotient parameters and height theorem force e=d-i; the resulting parameter list is regular in the Cohen–Macaulay local ring and remains regular at smaller primes. Empty V is vacuous, i>d impossible when V nonempty. All 6 citation excerpts match current suppliers.
- Independent check: At each maximal localization containing the equations, the local dimension is d. Extending the tuple by parameters of the quotient and applying the height theorem forces quotient dimension d-i; the resulting d-element parameter system is regular in the CM local ring. Localizing gives regularity at each prime over the ideal; the empty zero set is vacuous.
- Contract/source check: all current citation excerpts for this item match the named current supplier sections; no citation excerpt or declared-dependency mismatch found.
- Remaining issue: none found in the current claim, proof, or cited source support within this review scope.

### `lem-cm-local-regular-sequence-dimension-drop`

- Current hashes: item `edd3a55ec55ae913d104cb4bf774be570c906e4b3050b28d4fb086e712191f0e`; batch 6 contract entry `c298257d4a2d3fe7c4682337584c34b8c8d94c89427964ae3b039c08402eafa0`; manifest row `2098f3a7d9344127d374adf3bb958d20a376de2a3736002a5ea6fa3048771eaf`.
- Step 5 pre/post comparison: item hash matches `edd3a55ec55ae913d104cb4bf774be570c906e4b3050b28d4fb086e712191f0e` in both snapshots; manifest hash matches `2098f3a7d9344127d374adf3bb958d20a376de2a3736002a5ea6fa3048771eaf` in both; contract hash changed from `6aec8e6550eca1afc2f4b0121e9d361330ef14a7781db21582a10d342050b771` (pre and post agree).
- Current `risk_review`: status `complete`, reviewer `alpha-b-5a`. Note: Read statement, facts and proof 1.1–4.1. A regular nonunit avoids minimal primes, so quotient dimension is at most c-1; depth drop and depth ≤ dimension force equality and Cohen–Macaulayness. Finite induction includes i=0 and i=h. All 4 citation excerpts match.
- Independent check: For one regular nonunit, a minimal prime below the first prime of any quotient chain is strictly smaller, giving dim(C/xC) <= dim(C)-1. The depth drop gives depth(C/xC)=dim(C)-1, hence equality and CM. Finite induction handles the full sequence and endpoints.
- Contract/source check: all current citation excerpts for this item match the named current supplier sections; no citation excerpt or declared-dependency mismatch found.
- Remaining issue: none found in the current claim, proof, or cited source support within this review scope.

### `lem-affine-local-dimension-residue-transcendence`

- Current hashes: item `e2bed46a9cbedfba42c5970fc1b85d3f9d34e426ee32c64ce33d36e0b97d870e`; batch 6 contract entry `6935c68241665c84db4bbe5719c669ec7f7181d9ecbd2051c944335a9daa0f08`; manifest row `778eafec067f2c41b3da987ce09eaa496d7278fee7141f4a3356f74a9489b744`.
- Step 5 pre/post comparison: item hash matches `e2bed46a9cbedfba42c5970fc1b85d3f9d34e426ee32c64ce33d36e0b97d870e` in both snapshots; manifest hash matches `778eafec067f2c41b3da987ce09eaa496d7278fee7141f4a3356f74a9489b744` in both; contract hash changed from `7bfc5f676a7432cd74294afa4a8f9bdfead1a8c4887bde5072907585c315439b` (pre and post agree).
- Current `risk_review`: status `complete`, reviewer `alpha-b`. Note: Read proof 1.1–4.1. On each component through q, Noether normalization and the affine dimension formula give local neighbourhood dimension as local-ring dimension plus residue transcendence degree. The maximum over finitely many components handles reducible fibres; zero-dimensional and generic-point cases align with the local-dimension convention. Six supplier excerpts match.
- Independent check: The minimal components through q are finite. On each component the affine-domain dimension formula gives component dimension = local height + residue transcendence degree; taking maxima yields the stated local-scheme-dimension formula, including reducible, generic-point, and zero-dimensional cases.
- Contract/source check: all current citation excerpts for this item match the named current supplier sections; no citation excerpt or declared-dependency mismatch found.
- Remaining issue: none found in the current claim, proof, or cited source support within this review scope.

### `lem-fibre-regular-sequence-locus-open-cm-equidimensional`

- Current hashes: item `a8705f62484698bf487033a5f7498e54cc7b1ad74e720ac7574dd3f3ce25830c`; batch 6 contract entry `56a9b9e79cb50e34e03860843e229fcecdd27f4979684a55af1108ab99d46bae`; manifest row `77c0d09d93808b64ae0f56c2c1f7cb91c40120c87384f3f7a5ede972184d3ae5`.
- Step 5 pre/post comparison: item hash matches `a8705f62484698bf487033a5f7498e54cc7b1ad74e720ac7574dd3f3ce25830c` in both snapshots; manifest hash matches `77c0d09d93808b64ae0f56c2c1f7cb91c40120c87384f3f7a5ede972184d3ae5` in both; contract hash changed from `ecc25399e717adad6eee743cb6f5018db08c0650ded07d808edb3c7369c5915d` (pre and post agree).
- Current `risk_review`: status `complete`, reviewer `alpha-b-5a`. Note: Read statement/facts/proof 1.1–5.1. At a regular fibre point, quotient local dimension is d−i; the local fibre-dimension bound spreads this inequality. A nonempty principal open in an equidimensional finite-type field fibre retains dimension d, so the CM dimension criterion restores regularity nearby. Empty Z and i=0 are explicit. Stacks tag 00RA states this result with identical hypotheses; seven supplier excerpts match.
- Independent check: At a point with a fibre-regular tuple, the local quotient dimension drops by i and the local scheme dimension is d-i. The upper local fibre-dimension bound spreads this inequality. Around each nearby quotient point, a nonempty principal open of the fibre has dimension <= d-i and remains CM, equidimensional, and dimension d; the CM dimension-bound lemma then gives regularity. The finite neighbourhood argument proves openness.
- Contract/source check: all current citation excerpts for this item match the named current supplier sections; no citation excerpt or declared-dependency mismatch found.
- Remaining issue: none found in the current claim, proof, or cited source support within this review scope.

### `lem-depth-acyclicity-highest-homology`

- Current hashes: item `b7e0f555e02113bef5b9870345786aaf0ad7a9053b55d2182127ccad590f6846`; batch 6 contract entry `345bd3a40ee8c07b8b698f9ff0caa5bacba04cafe51c8ed4b695b026fb0595bf`; manifest row `682573df5ff50980f3c3afac579cbccb1f5b5843b1f26924a1cafc71b0403d9d`.
- Step 5 pre/post comparison: item hash matches `b7e0f555e02113bef5b9870345786aaf0ad7a9053b55d2182127ccad590f6846` in both snapshots; manifest hash matches `682573df5ff50980f3c3afac579cbccb1f5b5843b1f26924a1cafc71b0403d9d` in both; contract hash changed from `0f168f92e48d4136fcae53df2bbee99c4f9d9d7de0890879bac1b0671c350930` (pre and post agree).
- Current `risk_review`: status `complete`, reviewer `alpha-b-5a`. Note: Read statement, facts and proof 1.1–4.1. Exactness above i yields depth(B_i)≥i+1; depth lemma for cycles and the quotient H_i yields depth≥1, excluding nonzero finite-length H_i. Cases i=e and zero boundaries are handled. Both citation excerpts match.
- Independent check: Exactness above i and the depth lemma, descended from the top, give depth(B_i) >= i+1. The cycle sequence gives depth(Z_i) >= 1; the homology quotient then gives depth(H_i) >= 1. A nonzero finite-length module has depth zero, so it cannot be this highest positive homology.
- Contract/source check: all current citation excerpts for this item match the named current supplier sections; no citation excerpt or declared-dependency mismatch found.
- Remaining issue: none found in the current claim, proof, or cited source support within this review scope.

### `lem-determinantal-grade-necessary-exact-free-complex`

- Current hashes: item `77344bd945a1e9aa598806a1b957c2ac9168fb9c4fed8e2adbcfc804d42a2999`; batch 6 contract entry `94dee3e0c512f62e75d2d72e892ad58d41d7a7e475e9eeb249ea85fd89bc058f`; manifest row `cef639730f2bcf8d1a47d53da42b7e96d520d58e472db5a8e7562623c2d030ad`.
- Step 5 pre/post comparison: item hash matches `77344bd945a1e9aa598806a1b957c2ac9168fb9c4fed8e2adbcfc804d42a2999` in both snapshots; manifest hash matches `cef639730f2bcf8d1a47d53da42b7e96d520d58e472db5a8e7562623c2d030ad` in both; contract hash changed from `da8ede62fc8134428130d1404f2cddd2064a47102289e3ff7aa440aca70fd88b` (pre and post agree).
- Current `risk_review`: status `complete`, reviewer `alpha-b-5a`. Note: Read statement/facts/proof 1.1–5.1. Associated-prime localization at depth zero detects expected ranks and vanishing of larger minors; a regular element in the product of proper minor ideals reduces complex length, allowing induction. Zero-minor convention and e=0 are explicit. All 4 citation excerpts match.
- Independent check: At associated primes the localized depth-zero complex gives expected ranks, unit determinantal ideals, and vanishing larger minors; associated-prime detection descends the vanishing to R. If some determinantal ideal is proper, a nonzerodivisor from their product lies in each ideal. Reduction modulo it shortens the complex; induction lifts each quotient regular sequence by prepending that element. The zero-length and unit cases are covered.
- Contract/source check: all current citation excerpts for this item match the named current supplier sections; no citation excerpt or declared-dependency mismatch found.
- Remaining issue: none found in the current claim, proof, or cited source support within this review scope.

### `lem-determinantal-grade-sufficient-exact-free-complex`

- Current hashes: item `939d4dbc5620b95b33894e5c02bdfec2522502294e1450c44275a65a31e0276b`; batch 6 contract entry `abee996717322267078e6d6cc52b9a4fb6909dd3ca1b6af932887d3505806598`; manifest row `016e0f68939f5c3d1c7c31e3dc9edc7fc676bfde938993f4fa44e492807061c4`.
- Step 5 pre/post comparison: item hash matches `939d4dbc5620b95b33894e5c02bdfec2522502294e1450c44275a65a31e0276b` in both snapshots; manifest hash matches `016e0f68939f5c3d1c7c31e3dc9edc7fc676bfde938993f4fa44e492807061c4` in both; contract hash changed from `ef27c3bc3ac9751e0a18689da3c58a5b35c193f1ed83a6b8d21408422771ff3a` (pre and post agree).
- Current `risk_review`: status `complete`, reviewer `alpha-b-5a`. Note: Read statement/facts/proof 1.1–5.1. Unit entries split contractible pairs without changing the determinantal conditions; a minimal complex has depth bounds from its top grade. Localization at nonmaximal primes lowers dimension and preserves grade; finite-length highest homology contradicts depth acyclicity. Zero-minor and dimension-zero cases are included. All 6 citation excerpts match.
- Independent check: Unit entries split contractible pairs and preserve the determinantal hypotheses. For the minimal complex the top expected-rank ideal supplies depth >= t. Induction on local dimension gives exactness away from the maximal ideal; any remaining positive homology has finite length and is excluded by the highest-homology depth lemma. Reattaching the split pairs recovers exactness.
- Contract/source check: all current citation excerpts for this item match the named current supplier sections; no citation excerpt or declared-dependency mismatch found.
- Remaining issue: none found in the current claim, proof, or cited source support within this review scope.

### `thm-determinantal-grade-criterion-free-complex-exactness`

- Current hashes: item `2708805f6f96b78669076729059eb1a2334129b744f3511ab9f8adb0a55461ce`; batch 6 contract entry `1fbd5f3f2bfe4a266a8e961f215a8eeedb3ddac256ce9d89e754f6e9156aca77`; manifest row `b529e73d18dac032f06faca2abe7505e9c0cd0d465fc30d98175271c294f0081`.
- Step 5 pre/post comparison: item hash matches `2708805f6f96b78669076729059eb1a2334129b744f3511ab9f8adb0a55461ce` in both snapshots; manifest hash matches `b529e73d18dac032f06faca2abe7505e9c0cd0d465fc30d98175271c294f0081` in both; contract hash changed from `3ab0a1b8cefe1757def2cfa2c68e3b7ad7d44b40859ec825a9c25e66e3663ef7` (pre and post agree).
- Current `risk_review`: status `complete`, reviewer `alpha-b`. Note: Read complete proof and both necessity/sufficiency suppliers. The expected-rank, vanishing-large-minor, and regular-sequence conditions are exactly the two directions; the zero-minor ideal and e=0 conventions are inherited. Two supplier excerpts match.
- Independent check: The statement is exactly the conjunction of the reviewed necessity and sufficiency directions; the conventions for zero minors and nonnegative expected ranks agree across both directions.
- Contract/source check: all current citation excerpts for this item match the named current supplier sections; no citation excerpt or declared-dependency mismatch found.
- Remaining issue: none found in the current claim, proof, or cited source support within this review scope.

### `lem-fibrewise-exact-free-complex-locus-open-cm-flat-family`

- Current hashes: item `337db6f39881b6705f8d0576c8cac55a7153e8492699f16ab7cf6990e0422f53`; batch 6 contract entry `e2cf7aa9c4647c232a578e53d5f017d6708a380bb10b51b0432b4935374c7e9a`; manifest row `dc29ed76931d64c1b450d688628aef90afdb554354ef517177f527d137daebb5`.
- Step 5 pre/post comparison: item hash matches `337db6f39881b6705f8d0576c8cac55a7153e8492699f16ab7cf6990e0422f53` in both snapshots; manifest hash matches `dc29ed76931d64c1b450d688628aef90afdb554354ef517177f527d137daebb5` in both; contract hash changed from `0ea68f2b94abbd47e660d607fea81bb6044a5954feb8d02a72cf33bfbacd695b` (pre and post agree).
- Current `risk_review`: status `complete`, reviewer `alpha-b-5a`. Note: Read statement/proof 1.1–5.1 and Stacks tag 00RB lines 23–36. Fibre exactness lifts locally to the flat total complex; larger minors vanish, and each expected-rank ideal is locally unit or contains a fibre regular sequence. Openness of the regular-sequence locus propagates the determinantal criterion. e=0 is explicit; six supplier excerpts match.
- Independent check: Exactness on the selected fibre lifts to the total complex near the point, so larger minors vanish on a neighbourhood. Necessity on the fibre supplies, for each determinantal ideal, either a local unit minor or a regular sequence. The regular-sequence-locus lemma spreads the latter condition; outside the tuple zero set the ideal is unit. The sufficiency criterion proves exactness on a neighbourhood. The current hypotheses are a valid equidimensional-fibre specialization of Stacks 00RB.
- Contract/source check: all current citation excerpts for this item match the named current supplier sections; no citation excerpt or declared-dependency mismatch found.
- Remaining issue: none found in the current claim, proof, or cited source support within this review scope.

### `lem-base-flat-syzygies-and-fibrewise-resolution-exactness`

- Current hashes: item `a33a8fe57ad70e88784473ba893c27b5e08b576ff42842dfe7bfd3a3486b2d32`; batch 6 contract entry `29086f26dfc643b23a314045e562d8a4cc504acb4493e9f07f1a89ce5739da3d`; manifest row `4d27099b0793ed98c59aeca02ba53389c0a11ecc90220ef43dbee58fcdeaf893`.
- Step 5 pre/post comparison: item hash matches `a33a8fe57ad70e88784473ba893c27b5e08b576ff42842dfe7bfd3a3486b2d32` in both snapshots; manifest hash matches `4d27099b0793ed98c59aeca02ba53389c0a11ecc90220ef43dbee58fcdeaf893` in both; contract hash changed from `7f62b10b0a4085bfc75372787f45add7775dea25bea7342c6961d52b925fc1c0` (pre and post agree).
- Current `risk_review`: status `complete`, reviewer `alpha-b-5a`. Note: Read statement, facts and proof 1.1–3.1. Flat quotient in each short exact sequence preserves tensor exactness; induction gives base-flat syzygies, including K_n, and localization preserves the resulting exact complex. Checked n=1, zero module and arbitrary base change. All 3 contract citation excerpts match current supplier sections.
- Independent check: Starting from the R-flat quotient M, each short exact syzygy sequence has flat middle and quotient; the tensor-injection criterion makes its kernel R-flat. Flat quotients preserve every sequence after arbitrary base change, and localization preserves exactness. The induction includes K_n and all stated endpoint cases.
- Contract/source check: all current citation excerpts for this item match the named current supplier sections; no citation excerpt or declared-dependency mismatch found.
- Remaining issue: none found in the current claim, proof, or cited source support within this review scope.

## Review result

No mathematical defect or unresolved proof gap was found in these ten current claims. The current risk-review notes are consistent with the proof routes checked above and with the cited excerpts/dependency carriers. This record is scoped review evidence; it does not certify other batch 6 items, replace a gate receipt, or establish why the contract hashes changed.
