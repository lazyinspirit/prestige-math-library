# Step 7 adjudication — group d

Run: `phase-2-next-21`  
Batches: 11, 12, 4

## Progress

Group d is complete: all routed rejections and Step-6 reader warnings have exact durable dispositions. Global gate results and out-of-scope blockers are recorded below.

## Step-6 reader-warning dispositions

- `s8a-a04a60298d9df547868c48b9` on `thm-ma-small-unions-of-null-sets`: `covered_by_rejection`; exact target `657fa2dbba50fb9be15e6e40843cef64a7a78dc10ef9ba9e648f73e3541bf3f4` licensed the rational-inner-approximation repair.
- `s8a-549dec4e87a71bad130215ed` on `thm-finite-support-iterations-preserve-ccc`: `nonfatal`; once the subfamily's supports lie below one stage, its conditions are earlier-stage conditions with top tails.
- `s8a-05445f4da8fc6da0a3ecf93e` on `thm-ma-products-of-ccc-spaces-are-ccc`: `nonfatal`; the tail recursion closes by choosing each next index above all earlier bounds, with the bounded-bad-index alternative yielding a universal compatible condition.
- `s8a-6f938c9ad0dc0a0f545d1ee3` on `lem-jech-sochor-socks-transfer-is-uniformly-formalizable`: `covered_by_rejection`; exact target `80e35bc152432cd036d5a0f7be8217bb8dfbc40456179fead52472ab718b19d8` licensed the explicit proof-code construction.
- `s8a-2f74408766f4271313c244f7` on `lem-generalized-delta-system-for-small-supports`: `nonfatal`; the new coordinate is chosen above `alpha_0` and every element of all previously selected sets, and unboundedness supplies the recursion.
- No cross-group alert was raised: every located defect was internal to group d or an already published dependency whose exact interface remained usable after narrowing the consumer.

## Completed decisions

### `cex-l1-bounded-martingale-need-not-converge-in-l1`

- Rejection: context `697b5a4eab303bd3ed2146e1333eaca3afb55373d7936dfbd3080ffef9163a88`.
- Pre-edit guard: `8383c091a7ed852871f755706037c1e077a5b4fbe57cb2f5762ae8acd4d0ccd4`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence and repair: the martingale definition gives the conditional-expectation identity, not the event-integral criterion used to verify the displayed process. Added the exact conditional-expectation definition, separated the two facts, and made the concrete witness part of the Statement.
- Post-edit guard: `9620ab844d285da2bb84be1223c30718957a72cd168dbeb8e3a2352917e30b00`.
- Checks: focused precheck and strict batch-4 proof-contract check passed with no errors or warnings.
- Rejudge target: yes.

### Transfer and formalization decisions 70–74

- `thm-jech-sochor-first-embedding`: `confirmed_fatal` (`dependency_citation`), guard `03a5d8ce61235ea4b2060ed0e664b3dfa2f1ce34e70ed9f5169ae849e4687395` → `d5096df6684ccd2be1ccd935d39c40bbfc537d60ed1c7dc70dd14a1108f1b5cc`; corrected the FM theorem interface and replaced the impossible check name for an extension-defined set by a value-collecting HS name.
- `thm-jech-sochor-transfer-for-boundable-sentences`: `confirmed_fatal` (`logic`), guard `c57c5eb45da5f59a611bc46b4a912acae267f5231dbdc994b524187df1a5ee0d` → `88f39d8fcdbe4ccdf5dddf69a58b948c6e958c1ac0b80102c974a4637e9b7cb2`; added the transitive ambient model and specified internal normal permutation system required by transfer.
- `lem-jech-sochor-socks-transfer-is-uniformly-formalizable`: `confirmed_fatal` (`dependency_citation`), guard `fc19a4a20b531977648a87c549c5075ede3bff66d5710116100fb7d0f7f73701` → `2657354fa811fe139f0aaafe0315626314cb0fcf859d791400a270419f4c2beb`; distinguished the semantic target from proof-code construction and supplied the forcing, symmetry, finite-fragment, translation, and PA checker-invariant blocks without depending on the later symmetric-extension page.
- `cor-zf-countable-family-of-pairs-without-choice`: `confirmed_fatal` (`dependency_citation`), guard `016ca5fafbef5031a22361d7c5299594f39b748072e75c0d27c8f4d0ef22798a` → `415f647c5713cc28ad24d31188fe9701df9243e6e0f33ab5dadfa508e5c4de13`; replaced the unspecified formal upgrade by exact PA statements in a common arithmetic base.
- `lem-basic-cohen-symmetric-construction-is-uniformly-formalizable`: `confirmed_fatal` (`dependency_citation`), guard `66851975c6126c7ed95871be98693fc11d7287e89673a1df00b03c11e6c17614` → `2ed73a6e18c23b5fe2eb9480c7f477c9d7adc7326211057b01ae1fffbdd953b7`; expanded semantic assertions into explicit primitive-recursive forcing, symmetry, model-axiom, and proof-checker construction blocks.
- Source consultation: Jech, *The Axiom of Choice* (1973), Theorem 4.1 and proof (pp. 46–47), First Embedding Theorem 6.1 and proof (pp. 85–89), and Chapter 6 Problem 1 (pp. 94–95), `https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf`. These sections support the supplied internal-system premise, the finite rank-segment embedding, and the bounded transfer interface; they do not themselves assert the later PA proof-code compilers.
- Checks: focused prechecks and strict proof contracts passed for all five. All five are rejudge targets.

### Socks-model decisions 67–69

- `thm-second-fraenkel-model-countable-pairs-without-choice`: `confirmed_fatal` (`logic`), guard `0d6fd2141514931fcf6b9a38fa8a5baf11666c31feb6b90285fadc7a4f5874c1` → `5d52f8915214f2594988b3f43a3cb2f81905675fe755556a82598eb0bbbe75d4`; specified the full pair-preserving group, including every single-pair swap.
- `ex-second-fraenkel-sock-swap`: `confirmed_fatal` (`dependency_citation`), unchanged guard `95eaebf6a1b1e769cf8e3ddc84c59848487ee495203eead2b0fd1581134533ae`; the separately licensed theorem repair now supplies the exact internal transposition used here.
- `ex-atom-free-socks-coordinate-swap`: `confirmed_fatal` (`dependency_citation`), guard `09a4312344311b5b0b4330871a2feca7a581e25ca153cded0d8d41adb174b6dd` → `adc139a022379feab731dadcf6a116e6872baf0f91cac4c93a78891a819d8ad8`; cited the construction, symmetry lemma, and distinct-mates theorem separately.
- Checks: focused prechecks and strict proof contracts passed for all three. The theorem and atom-free example are rejudge targets; the unchanged Fraenkel example is resolved by its supplier target.

### Basic Cohen-model decisions 62–66

- `lem-basic-cohen-generic-reals-form-a-symmetric-set`: `confirmed_fatal` (`logic`), guard `1a7290e214b90fb702bcf7540c75a6479cb21599ba1beead8d4552e3f7adc88e` → `321acd3605a90ab8747d49fce55be6781a6a0b61159774019056567aa884b126`; added the arbitrary-supported-enumeration swap argument and made the coordinate action part of the Statement.
- `thm-basic-cohen-generic-real-set-has-no-countably-infinite-subset`: `confirmed_fatal` (`dependency_citation`), guard `f138d05b86b8f24ed768cf7f6e48ff26eef0fe36b85a6bd3933cfb9815cea2db` → `2a42075e17deda20d1946df65c85f3e5aeafc548a6dd106353bf2138ed73ae90`; cited the supplier's now-explicit coordinate action.
- `thm-basic-cohen-model-has-an-infinite-dedekind-finite-set-of-reals`: `confirmed_fatal` (`dependency_citation`), guard `41da7840d011c9c9d8dc821c66162d3d8fcbb94aebae82b8b80ae7e6f0ac471f` → `6ed74397629db985fb97e5ec46ab2152fd0adff415e8b9196ccfd1a4f31d3d7b`; added the exact source for the elements and their distinctness.
- `cor-basic-cohen-model-fails-well-orderability-and-choice`: `confirmed_fatal` (`dependency_citation`), guard `d172341451c978c75158503269644cda082b041499cf536019415f485a94be6e` → `9cf246dd5e36559a3ba74efee80333eda37a2f013403c5e17eb6cd28a90fb900`; supplied the ZF-model construction and theorem before reasoning internally.
- `ex-basic-cohen-orbit-name-without-enumeration`: `confirmed_fatal` (`dependency_citation`), unchanged guard `694ad9959d65f94eca5d49d4121e0150de195173e03022037fe28ba6c1e517cd`; its separately licensed supplier repair now proves that every HS enumeration is absent, exactly as step 2.1 asserts.
- Checks: focused prechecks and strict proof contracts passed for all five. The four changed items are rejudge targets; the unchanged example is resolved by the supplier target.

### Symmetric-forcing decisions 57–61

- `def-forcing-name-automorphism-action`: `confirmed_fatal` (`other`), guard `c34012123d0a5507d63edb89d613edeb6823bb2c70f948053d767c0fcfe847d0` → `a0994d3d3514a3e1f87daab962a627028a0b4ced1bf7277c25cd931b40f5e787`; restored name-first pair coordinates.
- `def-symmetric-forcing-system-and-hereditarily-symmetric-names`: `confirmed_fatal` (`other`), guard `0d2e69cb7d63c71ad4c997214f032230338c3e034aa7e6d039e7daa77cf24e7e` → `e9ba3d6a6341eb8afacf25495ba473ca58c0203c50d36a078bd670a6f58ffb21`; typed subgroup and finite-coordinate supports separately.
- `def-basic-cohen-symmetric-system`: `confirmed_fatal` (`logic`), guard `d5c87cab7e9300fdf9b952e61f77aeb27490e41fe615c5b4d584836077c90291` → `bdbaa14b17f90c8ea1784bf2f909ea6e245e1c10874b97c9bd26d5d925beeab6`; supplied the ground model, order, generic, theorem application, and name-first coordinates.
- `lem-symmetry-lemma-for-forcing-automorphisms`: `confirmed_fatal` (`dependency_citation`), guard `3981c1fc8d73937ba598fab3d9924ea7eabe745157ac1cda5ba29b0fa856ab2d` → `12e38461dd557a72fe3ce30b99ccbce5196a0431fa3b1214604e0a2b1474452c`; added the exact atomic forcing-relation dependency.
- `thm-hereditarily-symmetric-interpretations-form-a-zf-model`: `confirmed_fatal` (`logic`), guard `7be35efd02d0020c6c35f55da13a65a49f7c8b218db15203ae04dee861685c1a` → `aca928253daa748a54ffd5ebbc4f41c78da28a0dc7d1ae20773c2906c82ac129`; replaced the check name of syntactic names by a value-collecting HS name.
- Checks: focused prechecks passed for both proof-bearing items; strict proof contracts passed for all five. All five are rejudge targets.

### Permutation-model decisions 53–56

- `def-zfa-universe-atoms-and-kernel`: `confirmed_fatal` (`logic`), guard `cd48cb585d1c1fdbe384087650c7a2fe7b598b1118ec1e46aed7bd8de49de695` → `2c8fff1f64c46f4b04a94e0204af7ed1c0ae923969986b7b43aeb602ea299a44`; excluded atoms and tested `TC({x})` in the definition of purity.
- `def-symmetric-and-hereditarily-symmetric-sets`: `confirmed_fatal` (`logic`), guard `834af9399b3c7c24ded0240d5251cd7e66e99dbf6474459b2031d6f3d83a3a58` → `d02622b6d1a4f5e40b4064d4bef53df2a24d7212de32457309bcf4d49dc620a1`; repaired the transitive-closure identity and the hereditary-symmetry carrier.
- `def-boundable-sentence-over-an-atom-set`: `confirmed_fatal` (`logic`), guard `7e83e121034df241dcbeb1159bd8f72bcfc2b8e30d8aa4499a1ef613c98bf931` → `0f9965151a6944b45bff80dc7e6b43d76f1f691de4427333450445a54e0ba186`; required a ZFA-provable equivalence with relativization to a fixed absolutely defined relative-rank segment; the final digest includes the render-safe one-line displays adopted during focused validation.
- `thm-fraenkel-mostowski-permutation-model`: `confirmed_fatal` (`logic`), guard `9a3fce543af0a9b87cf60909017c0fd81f3c9bd2f7532d04b1e793e175b5ab7f` → `90d567679ddd6fbf9995141265138b6d7a43e2911e9ea206f48361c04d27c7e8`; made the permutation system internal to `M`, so `M`-Separation forms the HS power set.
- Source consultation: Jech, *The Axiom of Choice* (1973), Theorem 4.1 and proof (pp. 46–47), Theorem 6.1 and proof (pp. 85–89), and Chapter 6 Problem 1 (pp. 94–95), `https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf`. Theorem 4.1 supports the internal normal-filter construction of the permutation model; Theorem 6.1 supports rank-segment preservation; Problem 1 supports transfer only after quantifiers are bounded in a fixed power-set segment. I read the cited sections from the downloaded primary-source PDF.
- Checks: the theorem precheck passed and strict proof contracts passed for all four items; definition files have no parsed proof. All four are rejudge targets.

### Iteration and MA decisions 46–52

- `lem-formal-ma-iteration-verification-compiler`: `confirmed_fatal` (`dependency_citation`), guard `5324aac3e70f1c7f51a530a67411fdb5d7aad26663f7b561756e98bb56a1a7ef` → `d381dca087c48957c4d5b13f843752cf6721b164ac0b5de71e7d58071bf16faf`; made the primitive-recursive proof construction and PA checker invariant explicit instead of treating a semantic schedule as a proof emitter.
- `thm-finite-support-iterations-preserve-ccc`: `confirmed_fatal` (`logic`), guard `fc830c69edaf1f9bf7f9bc22d56ead68f5f3205379eb93112a3eb6a2815b35b2` → `5b02094f9f8b0d25d01d5bd959722cb39983cb9849c9dd3cc28e5f591e4efba9`; separated repeated supports from the distinct-support delta-system case and clarified the countable-cofinality stage capture.
- `thm-ma-products-of-ccc-spaces-are-ccc`: `confirmed_fatal` (`logic`), guard `ad7914f61d8366e786810795f9bbbb14267b10b2424ca33c837437d5eda89c94` → `56cd8a3b2d947b30e7bbd76144f97cca445925a6d66d5b8f374447ddbfbec0de`; corrected the title to MA(`aleph_1`) and supplied the exact tail-bound recursion for Knaster.
- `thm-ma-small-unions-of-meagre-sets`: `confirmed_fatal` (`logic`), guard `813cfac10f849d17c4ea9fcb2d7e00d283e7a8b4b5a65e36f599a6d5cadc0a46` → `87dd52aea104bef7414c73f76ee4c8b5c99d244384c8c472bf1e17125f176597`; repaired the extension order and proved transitivity.
- `thm-ma-small-unions-of-null-sets`: `confirmed_fatal` (`dependency_citation`), guard `3aa6d7125e83ccf68113924e4b8d3218a74d6f049d09e56607a3553b1d402034` → `7c3c83d784f635570219a54756035d77815b9cf7915257c492f63df230e1e5de`; derived countable rational inner approximants from continuity from below.
- `thm-omega-two-iteration-forces-ma-and-not-ch`: `confirmed_fatal` (`dependency_citation`), guard `95e02ac8d366e30fd737a0694714e36dcf23600812f47c703910b202d75d00fa` → `6cbeef35775cf56cd104ee6fd8e0c101c81f7e945ce284edd5d588fb21135898`; proved directly that cofinally many selected Cohen stages add distinct new reals.
- `thm-two-step-generic-factorization-and-ccc`: `confirmed_fatal` (`dependency_citation`), guard `24dae1e891849801c0154b278d4d63657dc256b9502e33a378930848b0a7e267` → `e4863d723bc6524865bc3034438c52a1df61e073ae84409b785ecf4abaccf6d2`; cited the exact atomic forcing and decision interfaces used by factorization.
- Checks: focused prechecks and strict proof contracts passed for all seven items. All seven are rejudge targets.

### Probability decisions 11–15

- `ex-lp-bounded-martingale-with-an-lp-terminal-value`: `confirmed_fatal` (`logic`), guard `b315bcec54a3d9cfd11f79de2fba4165922ad966aa36251f9a8cd5240a08b470` → `5f8be6caa1cbfc11653fec174363ef29f8dee8d48c175a12f8dadd0707cf06db`; quantified the terminal sigma-algebra and its inclusions.
- `ex-nonnegative-martingale-converges-almost-surely`: `confirmed_fatal` (`dependency_citation`), guard `5b3ae176bab770500fb1e9d9d9ad4487e8530c16e8df920b22fd2a46a74578ad` → `d66b538dfad66e98d332e401e336cdd66984e7ec660877690b92bc2aef2476d7`; corrected the AC attribution.
- `ex-reverse-martingale-and-the-tail-sigma-algebra`: `confirmed_fatal` (`other`), guard `38a007b4825659356ac031e6f91a8c173afa350e10ec88404ca9138fdfe17ad6` → `74469f14f26d0a3f8f9339af6d2aa187af38351956026a65f8e0bc8840465a98`; supplied the missing zero-indexed random variable.
- `ex-stopping-a-likelihood-ratio-martingale`: `confirmed_fatal` (`logic`), guard `d73f0cf8416348514cef0928c9ee941753ed996e032461933ac9b5c8386cc02e` → `662a00b1ebc5561b7d18015091087239e539e59466c9c99d1272f7388a8b3f22`; required `Q` to be a probability measure and made the filtration/horizon explicit.
- `ex-walds-equation-for-a-bounded-stopping-time`: `confirmed_fatal` (`logic`), guard `88ee08456c854c49442dba8db93e3b2b3feb24c75350dbd78117628636d58a49` → `772e6b02b2a3a2977b0f113bbd63b9443bbd4a0ee79627c4a3691fa762a88820`; quantified `N`, defined the natural filtration, and verified stopping.
- Checks: all five focused prechecks and strict contracts passed. All five are rejudge targets.

### Probability decisions 16–20

- `lem-conditional-hoeffding-bound-for-bounded-martingale-differences`: `confirmed_fatal` (`dependency_citation`), guard `6bc360bade0b30577e923d4434025ab8f5de211d89afbd61023c9bbcc4c744cf` → `baae51886b04acd12f026295c259c9d85aed1ee777da66ab91a809b6f251f1a9`; added the exact known-factor pull-out theorem and synchronized its proof contract.
- `lem-doob-upcrossing-inequality`: `confirmed_fatal` (`dependency_citation`), guard `ce5b76596cb9aaf452909e029281d82f9513715ca93fe126e4785723fa497d0b` → `dbf3e0667b664727841c8a197f929ac552471b40fec62fcbb2a8ff917affdd2f`; corrected the AC attribution.
- `lem-equivalent-event-tests-for-a-discrete-stopping-time`: `confirmed_fatal` (`logic`), guard `2ad5bc18827579bc149ea7810d2df51c22fe6750dd83427c70d9b40c60ca5aed` → `0c0a21caa7998b352f5d21f7144b96a0856df921833e61714c18f3e1b789ee53`; required a filtration.
- `lem-minimum-maximum-and-bounded-shifts-of-stopping-times`: `confirmed_fatal` (`logic`), guard `1e6ca6f1f8b76b20953779bad93190e37145d16653f9858d79c158712e496252` → `6779cfb40d4592732ad7e735dff9f2effa4bd1e72277cb51f34e913dce6ff24a`; quantified deterministic finite `N`.
- `rem-optional-stopping-requires-a-passage-to-the-limit-hypothesis`: `confirmed_fatal` (`logic`), guard `8e9a462b6aa403663d89882b1caad7b4f60039c1c445bc802b5957606f26c5ef` → `526d45d636d655db60f6416c53bf7c385f180dbabaa07dad8fae516c075e0edb`; corrected the stopped-family dominator to `|M_0|+C tau`.
- Checks: four focused proof prechecks passed; strict contracts passed for all five items. All five are rejudge targets.

### Probability decisions 21–25

- `thm-a-stopped-martingale-is-a-martingale`: `confirmed_fatal` (`dependency_citation`), guard `416fd63abf91f1f836cc349bb25c73c324e5caa6b8bd328515250ad64121a82d` → `a2b488bf2149f5e790d1f014d8e435bef2e927d85c3978fd1f2a2d5f87885b7b`; corrected the AC attribution and supplied the known-factor rule actually used.
- `thm-azuma-hoeffding-inequality`: `confirmed_fatal` (`dependency_citation`), guard `1a6a323c66c0355229cd892efb28f520d9aef9192bdacec152966961bdd46fce` → `9b6bc7dac100d0ecac4b47391e94fc4c5fe95e5d3ceaa6a8e42734bb6d83b384`; supplied the known-factor rule for the MGF iteration.
- `thm-closed-martingale-characterization`: `confirmed_fatal` (`dependency_citation`), guard `7c71f9cc90cc26d66f21aa9c5bdf008fcbdf7b6a72f77658b23746025c9db4ae` → `b1f63932acc6891e16fbfda871ad7118c0afbac5b4cd49616d15f33067d5e086`; corrected the AC attribution.
- `thm-doob-l1-maximal-inequality`: `confirmed_fatal` (`logic`), guard `a711cfb7cd32971f88cfac1ef4da379e2b643edc2f3127865fdd10c328bcb634` → `f21e43db29b8d8c69c10441d59f34ae0f42bb9b6037381353c80417198f8c656`; quantified finite horizon `N`.
- `thm-doob-lp-maximal-inequality`: `confirmed_fatal` (`logic`), guard `4f8abb3e0779da73ea2d86150f15db649e41882e692d4387894e54c74f7f654b` → `c48377d9093c139e6a666d1f129772bd781ae991890d89b0d9372367b93c26e2`; required `M_N in L^p` for the martingale corollary.
- Checks: all five focused prechecks and strict contracts passed. All five are rejudge targets.

### Probability decisions 26–31

- `thm-levy-downward-convergence-of-conditional-expectations`: `confirmed_fatal` (`dependency_citation`), guard `917a2f2c97220687f63ddd7270353a5f2e285734f128e6b4fdbc6239e6370859` → `0112593a2803075f69f142dd4c7f3f1099e3e2262c4c9e10a5b68d2ec79c4ace`; corrected the AC attribution.
- `thm-lp-bounded-martingale-convergence`: `confirmed_fatal` (`logic`), guard `e752779e7a77c7fe076bb6d89ee7a88ab08561123883941bd1dfd3f74bd46984` → `009bfaf5d336eca257c111f4bc580b8de9509c0c742fc41254951cb52dfab1cb`; applied convergence to `M` using its positive-part bound, not to `|M|`.
- `thm-martingale-central-limit-theorem`: `confirmed_fatal` (`dependency_citation`), guard `15a63f803440bde93445c00b1d916ab226e2f9f711fc4bb911a03c5e78de1657` → `5052feb40240d883cb09ccef05905377265fa57657722f6f7e5ef8f9f182c72d`; corrected the AC attribution.
- `thm-optional-sampling-for-bounded-stopping-times`: `confirmed_fatal` (`dependency_citation`), guard `5ea094b5ca6565a081b7fdd834bdc2d4a9f59b5e67bbfed853bac0adb9eabb25` → `a1afc792aa8909a86f1c6d49aed1304810e57b0d2621d1823a61f2f1f51b97e9`; added the exact nonnegative predictable-transform result for the sub/supermartingale signs.
- `thm-optional-stopping-under-uniform-integrability`: `confirmed_fatal` (`other`), guard `08a644792a66629a91b6128e4a79f3c69f96850897184348aeb94820cc44fac3` → `1aa734d6cbc1e5e8a41bb27f2ef5aecf1622e6437798480e050f85abe9d27ede`; fixed the cemetery value on null infinite-time events.
- `thm-optional-stopping-with-integrable-time-and-bounded-increments`: `confirmed_fatal` (`logic`), guard `ec4c7b7bce7562a2f38c06c2a880fd951b25e36b69f6f70cdba019e0717d942f` → `814e64f11313d84e25752feee9c5df375a10b7e286a3f23951378d859fe1d863`; restricted increments to `n>=1`.
- Checks: all six focused prechecks and strict contracts passed. All six are rejudge targets.

### Cohen-forcing decisions 32–37

- `ex-two-cohen-reals-as-mutually-generic-coordinates`: `confirmed_fatal` (`logic`), guard `ff81b6660fc9b57e8c452a5a236031bc6275d8465df79246d049ccc4b0409845` → `611afa403e1477f0a16ee99a8aa99bd617c4e9b7b1f6d379154cf08d8fff94eb`; explicitly reindexed both singleton factors.
- `fs-ccc-means-countably-closed`: `confirmed_fatal` (`logic`), guard `beb6797f59169fe6558984f16a05314d644a784a7c0d1383a61cc49a9dbe6b12` → `fec363eafafe3388369bc43fddaa862e4822e4b7928cd9d44c6971a9ffe3ada8`; corrected the Add-coordinate keys.
- `thm-collapse-and-levy-collapse-effects`: `confirmed_fatal` (`logic`), guard `2397a725d2bf00614cea593503b960e50fb95b17dd0dd9346fdb9d7fa4b934f7` → `1f002fc0e7d9f4c34c59b865cbdf2226fd17ab9c7e5b650c8b5d08d2f6016e96`; required infinite `kappa`.
- `thm-mutually-generic-cohen-coordinate-reals`: `confirmed_fatal` (`logic`), guard `72bc81064d276837269f7542e5165b3333e93866353dc80b96e44d04f67698dd` → `11c961f905646d78d5840106a954e69d1b69d9766f44fd32e46c41f0c926bd1c`; localized the named dense set below its forcing condition and globalized the dense set by the incompatible branch.
- `thm-nice-name-reduction-and-counting`: `confirmed_fatal` (`dependency_citation`), guard `7a91000d4b9792bebd108e08ebf07de9f2793e48a5612e3669602beff305360b` → `7c052bf4ff0606c2cc829426bca726b4cb764965f29ad9bcd165cd03896e41f9`; replaced the unavailable semantic converse with exact syntactic forcing clauses.
- `lem-formal-cohen-forcing-verification-compiler`: `confirmed_fatal` (`logic`), guard `14fddae1e42e09d6fe4f89e1c9631b0c40045130e903b539843867dea0068ea1` → `a0711422dacff700cecbae56cce5401d0fcd5b6f29a8656607a1ddb4f72e9628`; derives failure of GCH from the verified failure of CH at `omega`, avoiding unjustified higher-Cohen arithmetic.
- Checks: all six focused prechecks and strict contracts passed after canonical step renumbering. All six are rejudge targets.

### Iteration and MA decisions 38–45

- `def-finite-support-forcing-iteration`: `confirmed_fatal` (`other`), guard `c86226c4a19afb472dad57104cb47a42f9ceb16dbdd3265821b3297bd6c9baad` → `d6bb679e5d4d184e60f7d6d640569fa9c6390a7b1a2626722cc9e7e979416946`; unified successor and limit conditions as coordinate functions.
- `def-martins-axiom`: `confirmed_fatal` (`other`), guard `4134649000426322c91f7f3c572824bef178e7fa99e79c890b09374cf8083304` → `7388c90b0c036ade702997b64f462fceee411d2269e888b01463b1474702bf9a`; placed the cardinal-exponent scheme in ZFC.
- `def-omega-two-ma-bookkeeping-iteration`: `confirmed_fatal` (`logic`), guard `900f720e3f4674288a39b0abce5e769b0b5123e769a474db0dffb2337aa4d503` → `d3eb0324346719b504e70f4c47a1f90ddf10e3fa9f7dbbfa463023d8c37aafed`; adjoined a largest condition to every selected iterand.
- `ex-ma-diagonal-real`: `confirmed_fatal` (`logic`), guard `2db23ebd0a2ebb760c6ba18e9ddd7339e59c1a73144d8416fa5e6dc1428acdad` → `e318755c5df8cfbb27379cf513c9e65771ae04a55a9fca9fa301b84fc5c80dd1`; corrected `Add(omega,1)` coordinates.
- `lem-bounded-stage-capture-in-finite-support-iterations`: `confirmed_fatal` (`logic`), guard `5f09aeb2ea1142e2634c1b410f0e847c039939bed0697e64d822b40a0062cd4d` → `22ad5d68371b8b57b97b50082df7aede049d119a48958c2de1623484435ce0dc`; used a ground-indexed enumeration name below a condition in the actual generic.
- `lem-finite-support-iteration-size-bound`: `confirmed_fatal` (`logic`), guard `8f246d4e9f3519fbd23bf9c90c83d52c56291a0edae015be0add2a8366e843c9` → `2ad7b5b74b5612cf9526344549df2a74589bc8069c545bb7b490c73cf0ab1673`; added ccc iterands and stagewise ccc preservation.
- `lem-iteration-restrictions-and-complete-embeddings`: `confirmed_fatal` (`dependency_citation`), guard `4d0d556fd0887967381a4984df349b7525432639600e258876dde36a1a8cd15b` → `7650ff0f8d45becc1cd78af16712bce4ef14dc9dcdb61ab97716c9c394ccea6c`; restored the ZFC qualification required by factorization.
- `lem-ma-reduction-to-small-ccc-orders`: `confirmed_fatal` (`logic`), guard `26e60f2bfa0de24deb25ae3f5f77c99a20cdf9429e47273e2437b9c8f3562e57` → `4b16565eca9df354c8e6f57d9ffdcc8739d8f82fb81b23f7785a685cbe40dd74`; made the recursion increasing.
- Checks: five focused proof prechecks passed; strict contracts passed for all eight items. All eight are rejudge targets.

### Probability decisions 4–10

- `cor-gamblers-ruin-hitting-probability-from-optional-stopping`: `confirmed_fatal` (`logic`), guard `39a0f53c5b754d76f101515aab058d67e05fbe82d42b6d1ee34070ddfc151a45` → `7f1f9a90aabedf329660d1cc2338ca7619ed021d53c61d6c05986a2b0d4c375c`; added the natural filtration used by stopping and conditioning.
- `cor-kolmogorov-zero-one-law-from-reverse-martingales`: `confirmed_nonfatal`, unchanged guard `38baa25245947459cb59f910e1a26cd977e87fdb4a0bb9bafc076d54d6010274`; “first n” is immediately resolved by the next sentence's full-sequence union and is only indexing shorthand.
- `def-square-integrable-martingale-difference-array-and-variance-clock`: `confirmed_fatal` (`other`), guard `4fdda9db118d96d4ea3ee8aeb5459816fab18ed24fe8d9e66956f57bc0376d10` → `32bfce7f78117b87065bba4b5261d8b9d701bbebbf33266c7b660bd7d12e54c7`; quantified `F_{n,0}` explicitly.
- `ex-azuma-bound-for-simple-random-walk`: `confirmed_fatal` (`logic`), guard `2a4102c01a1275b2c0d0764f17095c35cb2c85757b2139de2a698e0096d1cbd8` → `55658118d30bd786ed64ede4689a0ba0b081d5348358be5ec9cd6e63fc968e2d`; added `S_0=0`.
- `ex-dyadic-martingale-converges-to-the-original-l1-variable`: `confirmed_fatal` (`logic`), guard `feaa80ef7b579336dbede642f30371fcabf7bb57845c2a8325c3188c8fd7a2a9` → `81b47f03e58098346af3fad9e7fcb84cbcbe10e53557a6373ea245849527db51`; handled `{0}` separately from positive-length dyadic cells.
- `ex-expected-duration-of-simple-gamblers-ruin`: `confirmed_fatal` (`dependency_citation`), guard `bba5900b2373715c58078c9da86ccf3b8c43471c13c88a8eb16fd2607bbd73d4` → `25a99e7fdd4b4c26329a9d8f019b3ea48528ffbad931eaf31a8d33eb96360f94`; corrected the AC attribution.
- `ex-gamblers-ruin-probability-for-a-biased-walk`: `confirmed_fatal` (`logic`), guard `47569f753e23979d03717d9746251830c0179c64d0b20638f1b60afad0b0d437` → `63cddd12700777ceedb32d92bc8a205f40cc5c4f22f13b344746fd3dc56f50f4`; defined the natural filtration.
- Checks: focused precheck passed for all five proof-bearing repairs; strict focused contracts passed for all six changed items. The six changed items are rejudge targets; the nonfatal zero-one item is not.

### `cex-almost-sure-martingale-convergence-need-not-preserve-expectation`

- Rejection: context `d5b952d624a245c53c085fd3d7ed192d5ff965530acb40d9475e09effbce5caa`.
- Pre/post guard: `553faac1ae08ed7d1ed5a519fb0f2de72c8be13666923e3034c035f9f14662c1` (consumer item unchanged).
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence and repair: at the frozen context F1's cited Statement asserted existence but did not identify the displayed process. The separately licensed supplier repair now states the exact construction, and this consumer's contract quotation was synchronized. No consumer content edit was needed.
- Checks: strict focused contract check passed with no errors or warnings.
- Rejudge target: no consumer-text target; its repaired supplier is already a target.

### `cex-optional-stopping-fails-for-unbounded-simple-random-walk-hitting-time`

- Rejection: context `df624261e20b95827012415fc365238dd32d66ee2a9b7e7bcfc386252e7cd8ab`.
- Pre-edit guard: `fb9259a7f12c30fe132f841030b51b44c902a1922e5ea1721d6f7a6f3bcc4dfa`.
- Outcome: `confirmed_fatal` (`other`).
- Evidence and repair: the stopped value was undefined on `tau=infinity`, despite that event being null. Assigned cemetery value zero on that event; the almost-sure witness and expectation are unchanged.
- Post-edit guard: `c9fd7bcaad2fa83078c22186cf464aa7f358997b9bd5775e328d2628498bc5a6`.
- Checks: focused precheck and strict contract check passed cleanly.
- Rejudge target: yes.

## Final accounting and validation

- Rejections: 74 exact scoped tuples adjudicated once each — 73 `confirmed_fatal`, 1 `confirmed_nonfatal`, 0 `false_positive`.
- Fatal evidence: 73 exact group-d defect-ledger rows, one per fatal adjudication; an independent tuple check found no missing or duplicate mapping.
- Reader warnings: 5 exact dispositions — 2 `covered_by_rejection`, 3 `nonfatal`; no reader-licensed standalone repair and no cross-group alert.
- Rejudge targets: 70 owned items differ from the `pre-step7` baseline. The three fatal consumer items left byte-identical are `cex-almost-sure-martingale-convergence-need-not-preserve-expectation`, `ex-basic-cohen-orbit-name-without-enumeration`, and `ex-second-fraenkel-sock-swap`; each is resolved through a separately licensed changed supplier.
- Focused content checks: precheck passed for all 106 proof-bearing items among the 130 owned items; strict proof-contract validation passed 130/130 with 0 errors and 0 warnings; rendercheck passed all 70 changed items; depcheck passed with no cycles or unresolved references (repository legacy warnings only).
- Defect-ledger validation: 250 run rows checked, 0 schema errors. The run-wide defect closure check is presently blocked only by another group's duplicate rows `phase-2-next-21-step7-a-047` and `phase-2-next-21-step7-a-077` for `thm-image-of-a-lie-group-homomorphism-is-an-immersed-lie-subgroup`.
- Step-7 guard: 189/191 current run changes were licensed. Its only two failures are outside group d: `ex-steenrod-squares-on-real-projective-space` and `lem-adem-double-power-comparison`. No group-d change was reported unlicensed.
- Step-7 scope check: group d's 74 decisions and five alerts are complete. The run-wide check is blocked only by five undispositioned warnings owned elsewhere: `s8a-7f1e3417f3f8f07c4ffbc2a9`, `s8a-5a8067907d3f5cbc0849147c`, `s8a-9a44384d30e00a1b836b1b5f`, `s8a-dc52a7a4aefd0043ef42bd40`, and `s8a-8c0b511e6c93ff7f5306d0ad`.
