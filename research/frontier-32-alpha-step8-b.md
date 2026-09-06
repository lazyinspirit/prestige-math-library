# Frontier 32 — Step 8 group b adjudication

Run: `frontier-32`  
Role: `alpha-adjudicate`  
Group: `b`  
Batches: `3`, `5`, `6`

## Result

All 36 exact judge rejections assigned to group b were adjudicated against the current items and their cited dependencies. Thirty-three are `confirmed_fatal` and were repaired; three are `confirmed_nonfatal` proof-indexing slips and were closed without edits. Every fatal has its exact pre-edit guard-bound adjudication and exactly one matching defect-ledger row. Both Step-7 reader warnings are `covered_by_rejection` because their repairs are licensed by exact fatal judge rejections.

The 33 repaired items—and only those group-b items—are Step-8 rejudge targets. No cross-group defect was found, so `research/frontier-32-step8-cross-group.jsonl` was not created.

## Scope read

All 88 items on the six owned A/B pages were read in full, together with their declared prerequisites and every dependency touched by a rejection. The current judge ledger was re-read after repair and still contains exactly the 36 group-b rejection tuples recorded below.

## External sources consulted

- Dietmar A. Salamon, [*Measure and Integration*](https://people.math.ethz.ch/~salamond/PREPRINTS/measure.pdf), Chapter 3: Example 3.6 and Example 3.9 support the Dieudonné nonregular-measure counterexample and equality of its continuous integrals with the top Dirac mass; Lemma 3.7 separates open-set inner regularity from full Borel regularity; Theorem 3.15 gives the compact-support cutoff form and the two RMK uniqueness classes; Theorem 3.18 proves regularity when every open set is sigma-compact.
- The searchable transcription at [Paperzz](https://paperzz.com/doc/7346564/measure-and-integration---eth-math) was used only to locate the complete Chapter 3 passages above; each mathematical claim was checked against Salamon's official ETH-hosted PDF.
- Springer Nature's [bibliographic page for Donald L. Cohn's *Measure Theory*, second edition](https://link.springer.com/book/10.1007/978-1-4614-6956-8) was consulted to verify the identity and scope of that cited reference; no mathematical repair rests on the limited preview.

The probability and Fourier objections were settled from the exact on-disk definitions and dependency statements plus elementary calculations; no unresolved external-source uncertainty remained.

## Exact adjudications

Every tuple below has model `gpt-5.6-terra`; its remaining exact keys are the item id and `context_sha256` shown. Hashes are full `itemHashGuard` digests.

### 1. `def-regular-complex-borel-measure-on-an-lch-space` (batch 3)

- Exact tuple: `(def-regular-complex-borel-measure-on-an-lch-space, gpt-5.6-terra, e12f97886b7ca50e17f5b4c1c3f79ddb8df927cadc580e7cbf0f2cf240ed0f9b)`.
- Pre-edit guard: `1c6781c64b9b7db47163007ce44d619482f5ab9a98473d42a95f34b30cc8af4c`.
- Outcome: `confirmed_fatal`; defect type `other`.
- Evidence: The definition omits the required ambient hypothesis that the underlying space is locally compact Hausdorff. Its cited notion of a regular Borel measure is defined only on an LCH space, so “a complex Borel measure” as written is not properly scoped.
- Repair: Scoped the definition explicitly to an LCH space, matching the regular-Borel-measure dependency.
- Post-edit guard: `2a9d604f327b4d3dfa219763b145d22acc651d930b4276ef25a34c2c9d139ce2`; defect row `frontier-32-A8-b-001`; rejudge target: yes.

### 2. `thm-lebesgue-measure-is-a-radon-measure-on-rn` (batch 3)

- Exact tuple: `(thm-lebesgue-measure-is-a-radon-measure-on-rn, gpt-5.6-terra, 27336200778556300d718918323aa84182f1c427b82c1b2f878341d07ff9a94d)`.
- Pre-edit guard: `7c7176cc1cceb07ec7559c6da7ebdff2de057dbff543952a6fb78724129e2ed9`.
- Outcome: `confirmed_fatal`; defect type `dependency_citation`.
- Evidence: [L1] inaccurately drops the n≥1 and Countable Choice hypotheses required by all three cited Lebesgue regularity/finite-measure dependencies, so the proof and theorem are asserted without their needed assumptions.
- Repair: Added $n\ge1$ and Countable Choice to the statement and fact block, preserving the hypotheses of all three regularity dependencies.
- Post-edit guard: `55bb68c14104aa7b53a2d294fa5a8ea01353dbdf08c7d89ff4efac5d1163e77b`; defect row `frontier-32-A8-b-002`; rejudge target: yes.

### 3. `lem-finite-lch-partition-of-unity-near-a-compact-set` (batch 3)

- Exact tuple: `(lem-finite-lch-partition-of-unity-near-a-compact-set, gpt-5.6-terra, 9b1e89e7a1f1c6beabe704200f0a94ecf749b429a91efa92e95fceca3cbb7572)`.
- Pre-edit guard: `dc72b2cf03c2e3980e0c73ddee856fe4281337d6b2299fa088e76a009e031d85`.
- Outcome: `confirmed_fatal`; defect type `logic`.
- Evidence: Step 1.1 misstates L1: \(1_K\le f\le\mathbf1_U\) only forces \(f=0\) off \(U\), not \(\operatorname{supp}f\subseteq U\); support can meet \(\partial U\). Thus the asserted subordinate supports, and hence the conclusion, are not licensed.
- Repair: Rebuilt the cutoff construction with nested relatively compact open sets, then normalized only after obtaining a cutoff equal to one on an open neighbourhood; supports now lie in their assigned cover members. The statement and fact block also retain the cutoff dependency's exact Dependent Choice hypothesis, while taking the finite subcover from the family of all eligible triples avoids an additional point-indexed choice.
- Post-edit guard: `9d8b8d271a63f0e10ff2fa6b08bcf0f8eee8d5d0bad78dd98d669b3d1454f4ce`; defect row `frontier-32-A8-b-003`; rejudge target: yes.

### 4. `thm-lusin-theorem-for-radon-measures` (batch 3)

- Exact tuple: `(thm-lusin-theorem-for-radon-measures, gpt-5.6-terra, 80813f8748cfd5997fd02a63b5d33908752b6a67ee2ae0ee4075921503324c3b)`.
- Pre-edit guard: `b21d033fd174f75b78514e9b8641a969875b039d6d2777bd86fb2237ffdf2d2a`.
- Outcome: `confirmed_fatal`; defect type `logic`.
- Evidence: Step 2.1 assumes a compact core of arbitrary Borel E, which the supplied Radon definition does not provide. Indeed the Dieudonné Radon measure admits E=[0,ω₁) of measure 1 with every compact K⊂E null, so even constant f violates the conclusion.
- Repair: Narrowed the theorem and title to regular Borel measures, whose full Borel inner regularity supplies the compact core used by the proof.
- Post-edit guard: `aa59545d95b35f8cc96a36363a4f7baf5ff447f5dd4d058dde4e32af9efdf3b9`; defect row `frontier-32-A8-b-004`; rejudge target: yes.

### 5. `thm-rmk-representing-measure-is-inner-regular-on-open-sets` (batch 3)

- Exact tuple: `(thm-rmk-representing-measure-is-inner-regular-on-open-sets, gpt-5.6-terra, 75eac963b6dcf42729e48c34ce39a3f701756dba09bed1c42dfb5983c21c1a2a)`.
- Pre-edit guard: `e8a60639beaa97a1de82b222d2b226b116c79c13c6e6ef04a94002fb7e29e15f`.
- Outcome: `confirmed_fatal`; defect type `logic`.
- Evidence: Step 1.1 only bounds cutoffs f with supp f⊂U, but ρ(U) ranges over all f∈C_c with 0≤f≤1_U. Such an f may have support meeting ∂U (e.g. f(x)=x(1−x) on U=(0,1)), so the asserted bound for ρ(U) is not established.
- Repair: Used the repaired outer-content lemma's equality between pointwise tests and compactly supported cutoffs before taking compact level sets.
- Post-edit guard: `8f6a612f9ccc487d9ca037383aae408067a09dfc11e2af8e843c6a1726b04171`; defect row `frontier-32-A8-b-005`; rejudge target: yes.

### 6. `thm-c-c-is-dense-in-l-p-for-radon-measures` (batch 3)

- Exact tuple: `(thm-c-c-is-dense-in-l-p-for-radon-measures, gpt-5.6-terra, 84c2aa2378e239cd4b2406ca1be2114aefe1fc01ff5a5037698f0a320da003ed)`.
- Pre-edit guard: `4f547bddc95a2d3152a71c914a97e3d3706aaa7af3c2a41ab8c1e7ed3942e923`.
- Outcome: `confirmed_fatal`; defect type `logic`.
- Evidence: Step 2.1 is false: K is only chosen inside U, not E. On K\E, f may be 1 while 1_{U\K}=0, so |f-1_E|≤1_{U\K} fails. A triangle estimate via 1_U could repair it, but is not given.
- Repair: Replaced the false bound by $|f-\mathbf1_E|\le\mathbf1_{U\setminus K}+\mathbf1_{U\setminus E}$ and split the measure-error budget below $\eta^p$.
- Post-edit guard: `c139198326a6ece3be5e2d0eddf366fcd380b6d73c02e02d3d684a8879033ca0`; defect row `frontier-32-A8-b-006`; rejudge target: yes.

### 7. `prop-lebesgue-stieltjes-and-lch-radon-conventions-agree-on-r` (batch 3)

- Exact tuple: `(prop-lebesgue-stieltjes-and-lch-radon-conventions-agree-on-r, gpt-5.6-terra, 3eec4309c9d4d8d3509e88d5ffb033bf01cdc54858e63abf32f8aea4423d8625)`.
- Pre-edit guard: `959061ebd6d11ba69d19837cbc33fb35e12e82801bac7e0f184606de2a06d4b7`.
- Outcome: `confirmed_fatal`; defect type `dependency_citation`.
- Evidence: [L1] invokes the existence theorem’s compact-finiteness conclusion, but that theorem assumes Countable Choice and the proposition states no such hypothesis. Thus its cited inference to the LCH Radon clauses is not licensed.
- Repair: Added Countable Choice to the proposition and its facts before invoking compact finiteness and regularity.
- Post-edit guard: `81ea669cbcba7609d4419ffb1a99a8ed81e869bb6bad1fd59aabea7e6cf45ca0`; defect row `frontier-32-A8-b-007`; rejudge target: yes.

### 8. `lem-rmk-functional-outer-content-is-well-defined` (batch 3)

- Exact tuple: `(lem-rmk-functional-outer-content-is-well-defined, gpt-5.6-terra, 36d7df4ac269810cd2bac0078855bf76a3d5884e1a0f49a12d22f32a796712ad)`.
- Pre-edit guard: `c5f95c3183d39da5edbab8c2285ae9cde4320fac13232f1ba5db5fa5cb9b7bba`.
- Outcome: `confirmed_fatal`; defect type `logic`.
- Evidence: The definition uses 0≤f≤1_U, which is not the supplied RMK cutoff admissibility f≺U: such an f may have support meeting X\U. Thus it misstates the cutoff-based outer content despite listing that definition as a dependency.
- Repair: Kept the declared pointwise test family and proved it has the same supremum as $f\prec U$ using $f_t=(f-th)_+$. The cutoff supplying $h$ is now cited explicitly, and its Dependent Choice hypothesis is retained in the statement and facts.
- Post-edit guard: `ed757014fde726a13c114ce64a597140c69b142e6c20979861ec80e05298f784`; defect row `frontier-32-A8-b-008`; rejudge target: yes.

### 9. `lem-rmk-compact-set-formula-and-local-finiteness` (batch 3)

- Exact tuple: `(lem-rmk-compact-set-formula-and-local-finiteness, gpt-5.6-terra, 87ca4552a619d9bcdaf77ad7ca74c75d7082f46ea36e4f2a0facdc3f1831fe07)`.
- Pre-edit guard: `3854a281d7273f37cb8e99303c0edbc924f3476a76810f884afd8af731fc66da`.
- Outcome: `confirmed_fatal`; defect type `logic`.
- Evidence: Step 1.1 bounds only functions g≺Uε, but ρ(Uε) is the supremum over all 0≤g≤1_Uε. Such g need not have support contained in Uε (its support may meet ∂Uε), so the asserted bound on ρ does not follow.
- Repair: Inserted an intermediate relatively compact $V$ with closure inside $U$, so the cutoff obtained from the pointwise lemma genuinely has support in $U$.
- Post-edit guard: `b01905a711230bbe688acb8e5d52ce8dba7e5bd9cfed9739f0b4cf44da97b4d2`; defect row `frontier-32-A8-b-009`; rejudge target: yes.

### 10. `lem-dieudonne-measure-and-top-dirac-agree-on-continuous-functions` (batch 3)

- Exact tuple: `(lem-dieudonne-measure-and-top-dirac-agree-on-continuous-functions, gpt-5.6-terra, 55f290ba38a13218f3f023a26f0a2047a298021c90029a2fb8a3c1eed7a203c3)`.
- Pre-edit guard: `e968cf1a67b3ab36c27c1d9d2ca96f1abcee1265f08b5a47698d2b4f2851a64e`.
- Outcome: `confirmed_fatal`; defect type `dependency_citation`.
- Evidence: The proof invokes L1, whose interface assumes AC_ω, but neither the Statement nor Facts assumes AC_ω. Thus eventual constancy—and hence the asserted equality—is not established under this item's stated hypotheses.
- Repair: Added Countable Choice, exactly the hypothesis required by the eventual-constancy dependency.
- Post-edit guard: `814e86e6f63c910173370fab09ca9e1d22dd0b71be91efc6ce48f08e3a4b59d8`; defect row `frontier-32-A8-b-010`; rejudge target: yes.

### 11. `ex-point-evaluation-functional-is-represented-by-a-dirac-measure` (batch 3)

- Exact tuple: `(ex-point-evaluation-functional-is-represented-by-a-dirac-measure, gpt-5.6-terra, 4f126c6cb3508edeca96bdd439d1d420d0403c4b0700343219b1b06d1e559136)`.
- Pre-edit guard: `3fa31dc44c674fe57f9e390779b7762c68dc4571b5c591c8f4f33ef6d181c589`.
- Outcome: `confirmed_fatal`; defect type `dependency_citation`.
- Evidence: Step 2.1 falsely calls ∫f dδ_x=f(x) the “definition of the Dirac integral”: def-dirac-measure defines only a set function, not this integral formula. Nor do its cited facts establish δ_x is Radon or invoke the separate Radon-uniqueness theorem.
- Repair: Derived the Dirac integral formula from simple functions, proved the Dirac measure is Radon, and declared the RMK uniqueness dependency.
- Post-edit guard: `5d468b9c466f8d0f4a4f5c05329d086f2c478616eea3476e649cdba9453b152c`; defect row `frontier-32-A8-b-011`; rejudge target: yes.

### 12. `lem-continuous-functions-on-omega-one-plus-one-are-eventually-constant` (batch 3)

- Exact tuple: `(lem-continuous-functions-on-omega-one-plus-one-are-eventually-constant, gpt-5.6-terra, 11cc1faef8a416424a2e30892955de0adf8c54535294d95edbac1e2a7d946553)`.
- Pre-edit guard: `eb3a817d8858ac6fd2aaaaa5495ed96100d564e89518ec6074a48092abf29459`.
- Outcome: `confirmed_nonfatal`.
- Evidence: Step 2.1 takes \(\sup_n(\alpha_n+1)\) over \(n\in\mathbb N\), but Step 1.1 defines \(\alpha_n\) only for \(n\ge1\). Since \(0\in\mathbb N\), \(\alpha_0\) is undefined, so the displayed supremum and ensuing argument are ill-typed.
- Disposition: The occurrence of $\alpha_0$ is a one-symbol indexing slip: read the displayed supremum over $n\ge1$. The theorem and the eventual-constancy argument are otherwise unchanged and a competent reader closes it immediately. No content, contract, impact, or judge data changed; post-state remains `eb3a817d8858ac6fd2aaaaa5495ed96100d564e89518ec6074a48092abf29459`; rejudge target: no.

### 13. `ex-locally-integrable-density-functional-is-represented-by-g-dlambda` (batch 3)

- Exact tuple: `(ex-locally-integrable-density-functional-is-represented-by-g-dlambda, gpt-5.6-terra, bb7fc92f4290f73db5fbefa138e0672be088040b1c064c7ae14137cffc358018)`.
- Pre-edit guard: `942bfe34670f8ed6a27432c18357bd6602f1a3c13a7e7e83af2038d427caa1d7`.
- Outcome: `confirmed_fatal`; defect type `dependency_citation`.
- Evidence: Step 2.1's claim that g dλ “inherits Borel regularity” from λ is not licensed by the supplied Lebesgue-Radon theorem; regularity of a locally finite weighted Borel measure needs a separate theorem/proof. Thus μ_g being Radon is unestablished.
- Repair: Added $n\ge1$ and Countable Choice, then obtained regularity from the second-countable LCH locally-finite-measure theorem and declared RMK uniqueness.
- Post-edit guard: `ec5b4258c609268dfac6defeb03449a34ae70ad75822ba0d5148699ed45fdead`; defect row `frontier-32-A8-b-012`; rejudge target: yes.

### 14. `fs-every-finite-borel-measure-on-a-compact-hausdorff-space-is-regular` (batch 3)

- Exact tuple: `(fs-every-finite-borel-measure-on-a-compact-hausdorff-space-is-regular, gpt-5.6-terra, 7bc2624b9f90d5d84b6d416680b32d133dbcbfcce5cc9dd97c55b06151b4f9a2)`.
- Pre-edit guard: `c105571be11c048303c09b630b026a86a0f557b9dee633b4125cefffedefc0ae`.
- Outcome: `confirmed_fatal`; defect type `dependency_citation`.
- Evidence: The counterexample depends on AC_ω: the supplied Dieudonné-measure theorem only makes \bar m a Borel probability measure under AC_ω, but neither the statement nor the facts assume it. Thus step 1.1 is not licensed as written.
- Repair: Added Countable Choice to the false-statement setup so the cited Dieudonné construction is a Borel probability measure.
- Post-edit guard: `8e3206e3bfc07082d6c5e237827e0659f6a4d4a28f6f8a04f4b4fe263bbda940`; defect row `frontier-32-A8-b-013`; rejudge target: yes.

### 15. `ex-riemann-integral-functional-is-represented-by-interval-lebesgue-measure` (batch 3)

- Exact tuple: `(ex-riemann-integral-functional-is-represented-by-interval-lebesgue-measure, gpt-5.6-terra, be0c4582a336c1489d48db198d47ab62ed785f5e80527b4d19e46254917d9104)`.
- Pre-edit guard: `fbc750461dc36598e882b55f4d9ed4c365b0523016e5b13bb7d5e8e044cc25df`.
- Outcome: `confirmed_fatal`; defect type `dependency_citation`.
- Evidence: Step 2.1 invokes “RMK uniqueness,” but the item does not depend on the supplied RMK uniqueness theorem; its listed RMK dependency only guarantees that a constructed measure represents the functional. Thus the claimed identification is not licensed by its declared dependencies.
- Repair: Added Countable Choice and the RMK uniqueness dependency, and made the restricted-Lebesgue regularity and uniqueness step explicit.
- Post-edit guard: `d830d6de967779c1b74c4b5b4db4816c69fbfd7c248ccdd801c3ac2d113eac3e`; defect row `frontier-32-A8-b-014`; rejudge target: yes.

### 16. `thm-rmk-open-sets-are-caratheodory-measurable` (batch 3)

- Exact tuple: `(thm-rmk-open-sets-are-caratheodory-measurable, gpt-5.6-terra, aa04eab1ce71d360f0c57dd496d36d57678093a7f9ed917c5591142daee23936)`.
- Pre-edit guard: `dc234268fa0079042d44c8a8a14367216903c44c4a59a634d74607f12f8443a1`.
- Outcome: `confirmed_fatal`; defect type `logic`.
- Evidence: Step 1.1 identifies the supremum over f≺V∩G with ρ(V∩G), but ρ is defined using 0≤f≤1_{V∩G}; such an f need not have support contained in V∩G. The needed cutoff/approximation equivalence is neither stated nor proved.
- Repair: Invoked the newly proved equality of the pointwise and compact-support cutoff suprema before identifying $\rho(V\cap G)$.
- Post-edit guard: `cf262f34d1e96bb0782304bee984bde2f495f7111a26b2c2dfc1fee91896bc44`; defect row `frontier-32-A8-b-015`; rejudge target: yes.

### 17. `cex-dieudonne-borel-measure-on-omega-one-plus-one-is-not-regular` (batch 3)

- Exact tuple: `(cex-dieudonne-borel-measure-on-omega-one-plus-one-is-not-regular, gpt-5.6-terra, 1571d891802daac90c61e88c429eed57a060ce48db3dcfbd29a10eef6dfeef60)`.
- Pre-edit guard: `8dec160ad24c09b4253b3b2d68fbb96604a10e086edab90fee9c3d9a5260c708`.
- Outcome: `confirmed_fatal`; defect type `dependency_citation`.
- Evidence: The item omits AC_ω: its “given” assertion that the Dieudonné club-set construction is a Borel probability measure is only supplied under AC_ω. Thus it states an unconditional counterexample while its cited measure theorem is conditional.
- Repair: Added Countable Choice to the counterexample and its fact block.
- Post-edit guard: `adf6659c42594934105476e4c68a747128b834ccfe236c5d8620fab825c6d6d0`; defect row `frontier-32-A8-b-016`; rejudge target: yes.

### 18. `thm-almost-sure-convergence-implies-convergence-in-probability` (batch 5)

- Exact tuple: `(thm-almost-sure-convergence-implies-convergence-in-probability, gpt-5.6-terra, d8eb678ebebfea521682c49b8965651e458a8e0b94f89266d6ffacce9fad0f4b)`.
- Pre-edit guard: `0a31e4a07ae993b6bb48b4e27adff40e72f29f19acce1ddd98b9b62e9f94346c`.
- Outcome: `confirmed_fatal`; defect type `dependency_citation`.
- Evidence: Step 1.1 misuses L1: that lemma only makes the a.s.-convergence event measurable, not each threshold event {|X_n-X|>ε}. Indicator measurability must instead follow from X_n and X being measurable random variables; as cited, the DCT premise is unsupported.
- Repair: Replaced the irrelevant convergence-event citation with measurability of the random variables and the resulting threshold indicators.
- Post-edit guard: `7761229bf1738598a8406a5626a5b6330c9ad8d3eb9763edbec92279ef9c47f2`; defect row `frontier-32-A8-b-017`; rejudge target: yes.

### 19. `thm-almost-sure-subsequence-from-convergence-in-probability` (batch 5)

- Exact tuple: `(thm-almost-sure-subsequence-from-convergence-in-probability, gpt-5.6-terra, 28a9c8394b8323bf5442b67cf01881834d2648871f4419c5632225771d62c763)`.
- Pre-edit guard: `572794ae65306a363bd4c000f4a5bdeaad637bdc3f622b3b6109ed2a42220fa7`.
- Outcome: `confirmed_nonfatal`.
- Evidence: Step 1.1 is undefined at k=0: sequences are indexed by N starting at 0, but it requires n_0>n_{-1} without defining n_{-1} or a base case.
- Disposition: The undefined $n_{-1}$ is only shorthand at the recursive base case. Choosing $n_0$ first and applying the displayed recursion for $k\ge1$ closes the proof immediately. No content, contract, impact, or judge data changed; post-state remains `572794ae65306a363bd4c000f4a5bdeaad637bdc3f622b3b6109ed2a42220fa7`; rejudge target: no.

### 20. `cex-almost-sure-convergence-need-not-imply-lp-convergence` (batch 5)

- Exact tuple: `(cex-almost-sure-convergence-need-not-imply-lp-convergence, gpt-5.6-terra, 37d8d21389f6aacc741cdd88bc7293d7f8aef4ebcf758ad2706b39f5b9419979)`.
- Pre-edit guard: `f4a877cce9821b8e70776e7a8da77eb6b0b7fc860a7353316fd729ebc30f01c6`.
- Outcome: `confirmed_fatal`; defect type `other`.
- Evidence: Sequences are indexed by N with 0 included, but X_0=0^{1/p}1_(0,1/0) is undefined. Thus the displayed family is not a sequence of random variables under the library convention.
- Repair: Shifted the spike to $(n+1)^{1/p}\mathbf1_{(0,1/(n+1))}$, making every zero-based term defined.
- Post-edit guard: `e959384c3f2685943a5f31cce1b921da5c4bd378386c72f24bde3675dd3fde0b`; defect row `frontier-32-A8-b-018`; rejudge target: yes.

### 21. `cex-convergence-in-probability-need-not-imply-lp-convergence` (batch 5)

- Exact tuple: `(cex-convergence-in-probability-need-not-imply-lp-convergence, gpt-5.6-terra, f4ee03e48292af2d895412e8405f5ab3de531b70f2c422c1ef2162c8a1e9055f)`.
- Pre-edit guard: `46b039b7350cf8247d273ac295040fb7d079ef0802f869c1a500d7ea74226511`.
- Outcome: `confirmed_fatal`; defect type `other`.
- Evidence: The construction is indexed by \(\mathbb N\), which includes 0, but assumes \(\mathbb P(E_n)=1/n\) and defines \(X_n=n^{1/p}\mathbf1_{E_n}\). At n=0 these expressions are undefined, so it does not furnish the claimed sequence.
- Repair: Used probabilities $1/(n+1)$ and amplitudes $(n+1)^{1/p}$.
- Post-edit guard: `cc0cf1c155d46b74a13f68370d9887d34f80bf35ceb5551d1d7d7562bce9c42f`; defect row `frontier-32-A8-b-019`; rejudge target: yes.

### 22. `thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability` (batch 5)

- Exact tuple: `(thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability, gpt-5.6-terra, e7b9a592a6b1b58c205c01648e01159b95af1e4fa6c3d43f0e219d6a5f7b6007)`.
- Pre-edit guard: `620f838975aea18576cb307f9d4842e7e2a952ef5dad9fce03e131246133ffa7`.
- Outcome: `confirmed_fatal`; defect type `other`.
- Evidence: The statement omits that all X_n and the constant random variable c live on one probability space. Distributional convergence permits variables on different spaces, while the asserted convergence in probability is then undefined.
- Repair: Required the variables and constant random variable to live on one probability space.
- Post-edit guard: `a47a32a01f85ddbb9926f410ef3dd38461dabca3845a312f3e85efc7ed9c9a1a`; defect row `frontier-32-A8-b-020`; rejudge target: yes.

### 23. `thm-continuous-maps-preserve-convergence-in-probability` (batch 5)

- Exact tuple: `(thm-continuous-maps-preserve-convergence-in-probability, gpt-5.6-terra, eb7bac087d7efadf6abc4d9236b34498ef6a263b9d5e40fed8b550e3c51c83fa)`.
- Pre-edit guard: `da7ba57b54eccd77ed23fde001ae5b400db6815b810db76633ce49d5c4013cc9`.
- Outcome: `confirmed_fatal`; defect type `dependency_citation`.
- Evidence: L1 inaccurately restates its dependency: def-convergence-in-probability applies only to real random variables with |X_n-X|, not R^d-valued variables or arbitrary norm tails. The cited definition therefore does not license its use for Z_n,Z.
- Repair: Made Euclidean norm-tail convergence a displayed hypothesis and treated it directly, instead of widening the real-valued definition.
- Post-edit guard: `c54aa7548150f26d9cc66998caea3e023bd05d61a9998fe2d6aa0c731ab5b6b2`; defect row `frontier-32-A8-b-021`; rejudge target: yes.

### 24. `cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q` (batch 5)

- Exact tuple: `(cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q, gpt-5.6-terra, a021d466835a430e2938e5f23e01f8525416c87194d0cd19ab1b3cac1fe450fa)`.
- Pre-edit guard: `b39b5819b59b117173fae48e9c827c65750e6f5a0022c248b0eb1bd76b6c125a`.
- Outcome: `confirmed_fatal`; defect type `other`.
- Evidence: With indices in N starting at 0, the declared X_n=n^{1/q}1_(0,1/n) is undefined at n=0. No value for X_0 is supplied, so this does not define a sequence/random variables as required.
- Repair: Shifted both amplitude and support length from $n$ to $n+1$.
- Post-edit guard: `2293582c2893df3e8d2aa836c428aa000b8a3b69f2a010f613c75bae53266efe`; defect row `frontier-32-A8-b-022`; rejudge target: yes.

### 25. `cex-almost-sure-convergence-does-not-imply-convergence-of-expectations` (batch 5)

- Exact tuple: `(cex-almost-sure-convergence-does-not-imply-convergence-of-expectations, gpt-5.6-terra, 98056fb31667a430949c1f1b0ff16e9ba869e7da04db439e7f87035b80786c60)`.
- Pre-edit guard: `c5accbad00a8d6b8854211cb98fb3a7281ad641e1fdb0a0a3c3f4fe1c69cdef8`.
- Outcome: `confirmed_fatal`; defect type `other`.
- Evidence: Sequences start at 0, but X_0=0·1_(0,1/0) is undefined. Thus the stated sequence is not defined for every n∈N, and the claim E X_n=1 for every n is also false/undefined at n=0.
- Repair: Replaced $n\mathbf1_{(0,1/n)}$ by $(n+1)\mathbf1_{(0,1/(n+1))}$.
- Post-edit guard: `94271c20f5b6ff8efd6bd5b3728dd0ac294ea5b6267f157fbb72887b65f3ea7e`; defect row `frontier-32-A8-b-023`; rejudge target: yes.

### 26. `def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series` (batch 6)

- Exact tuple: `(def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series, gpt-5.6-terra, a98e26631ef24a0d4f31ecf1324fb999f2844ed308f1abe16c68ad46141e84a8)`.
- Pre-edit guard: `69cb8130ae1499f95d8fb6091ca87f9092b3190e56de2f90a6886c2c2455c277`.
- Outcome: `confirmed_fatal`; defect type `other`.
- Evidence: The sequence is declared only for j>=1, but finite sums allow J subset N; since 0 in N, J may contain 0 and lambda_0 is undefined. Thus the lacunary-sum definition is ill-typed under the stated indexing convention.
- Repair: Restricted finite frequency index sets to the positive naturals.
- Post-edit guard: `5491f0e4aec8343fa1a3d0be6d2b951133a9454ce17fbb8a4368320e2272a84d`; defect row `frontier-32-A8-b-024`; rejudge target: yes.

### 27. `thm-slutsky-for-real-random-variables` (batch 5)

- Exact tuple: `(thm-slutsky-for-real-random-variables, gpt-5.6-terra, 4a4265a6e227f4a1219ed929d339889a74a32050c7679530fa1efff02844e80f)`.
- Pre-edit guard: `d04a11cbbd12b779667f55ed66c5238351ba4cdf80e43fdcd701723643a7f02a`.
- Outcome: `confirmed_fatal`; defect type `logic`.
- Evidence: Step 2.1 incorrectly cites step 1.2 to conclude X_n+c⇒X+c. Step 1.2 proves only invariance under multiplication by a constant, not translation, so the addition conclusion is unsupported by the supplied proof.
- Repair: Added the missing bounded-continuous-test proof of translation invariance before using it in the addition conclusion.
- Post-edit guard: `531a8484b4f63066b0134a3c5d819b7743d28a3c55e58405735f39fa9685df9b`; defect row `frontier-32-A8-b-025`; rejudge target: yes.

### 28. `ex-a-probability-convergent-sequence-with-a-prescribed-fast-as-subsequence` (batch 5)

- Exact tuple: `(ex-a-probability-convergent-sequence-with-a-prescribed-fast-as-subsequence, gpt-5.6-terra, 39e6ed11c069ba09b0ef0c4fdd0e4f9c1f4ac23dd9e371dcdf46a4f61810ebc4)`.
- Pre-edit guard: `3f5260a9e8695b116b03cc451f5d0ef5801fcad5fcdec1539f3d458fb2f527ff`.
- Outcome: `confirmed_nonfatal`.
- Evidence: The construction starts at k=0 but refers to n_{k-1}=n_{-1}, which is undefined under the library’s zero-based sequence convention; thus it does not construct the asserted subsequence.
- Disposition: As in the theorem it instantiates, the $n_{-1}$ occurrence is only a missing base-case sentence: choose $n_0$ first, then recurse for $k\ge1$. No content, contract, impact, or judge data changed; post-state remains `3f5260a9e8695b116b03cc451f5d0ef5801fcad5fcdec1539f3d458fb2f527ff`; rejudge target: no.

### 29. `lem-finite-lacunary-fourier-sums-have-their-coefficient-ell-two-norm` (batch 6)

- Exact tuple: `(lem-finite-lacunary-fourier-sums-have-their-coefficient-ell-two-norm, gpt-5.6-terra, 7a1c360ea67cf5f7ca145f9b80f1ecf1368ac791e11b4c5116313af48321db57)`.
- Pre-edit guard: `e95821ba5fd003c05ddf8af4129804cd4e6242a91a9835ffa512196299005c04`.
- Outcome: `confirmed_fatal`; defect type `other`.
- Evidence: With 0∈N, the stated J may contain 0, but the defining sequence is only indexed j≥1. Thus λ₀ (and e_{λ₀}) is undefined; strict increase also does not cover it. J must be restricted to positive naturals.
- Repair: Restricted $J$ to positive natural indices.
- Post-edit guard: `491a4dc2da51708e84fcc998d77bbacae5854a71a0989325a2b4f5e08fda82e7`; defect row `frontier-32-A8-b-026`; rejudge target: yes.

### 30. `lem-hadamard-gaps-bound-additive-representations` (batch 6)

- Exact tuple: `(lem-hadamard-gaps-bound-additive-representations, gpt-5.6-terra, 576ceea0f6478154ab07e72e400f0fe560198265c9b716ea8f9ca9de635c228c)`.
- Pre-edit guard: `e3a13d4ad5e161656b834d15adc9d9dafa85bf00eaf3c8959a733cca531ce00d`.
- Outcome: `confirmed_fatal`; defect type `logic`.
- Evidence: Step 1.1 invokes \(\lambda_{s-r}\) even when \(s\le r\), though the supplied sequence is indexed only for \(j\ge1\). Such cases occur (e.g. the first index in a residue class), so the stated bound and hence the proof are not well-formed without a separate empty-side case.
- Repair: Separated the empty opposite-side and $s\le r$ boundary cases before writing any $\lambda_{s-r}$ term.
- Post-edit guard: `d215ebd2b83de490d430fa70b60d441629304a948ef89324a0109ab48f4f7af8`; defect row `frontier-32-A8-b-027`; rejudge target: yes.

### 31. `thm-dominated-convergence-in-lp` (batch 5)

- Exact tuple: `(thm-dominated-convergence-in-lp, gpt-5.6-terra, 63d14d7429036164a5951d2135abfacf945a42f943cae766aa68a52c07537bd1)`.
- Pre-edit guard: `5394bb1ac6d1e7cf73d86d752a8001ff618d90771b076e6a438e43c5688facdb`.
- Outcome: `confirmed_fatal`; defect type `logic`.
- Evidence: The hypothesis only forces Y≥0 a.s.; it may be negative on a null set. For nonintegral p, (2Y)^p then need not be real-valued or a nonnegative DCT majorant. The proof must use (2|Y|)^p (or modify Y).
- Repair: Changed the majorant from $(2Y)^p$ to $(2|Y|)^p$.
- Post-edit guard: `f7f4b63608fa67b209563e90c91c3b897dbacfce45bec421995795a38d24883d`; defect row `frontier-32-A8-b-028`; rejudge target: yes.

### 32. `rem-complete-convergence-implication-diagram` (batch 5)

- Exact tuple: `(rem-complete-convergence-implication-diagram, gpt-5.6-terra, 042f995ca08ae1e22510e513687d80066dabb34346e2d81256260ca1c1a30c81)`.
- Pre-edit guard: `ca5ef4a6a0214fdc5f21e36a5e3ef8c0dfe9328d1812dda1fcce77f2ac067896`.
- Outcome: `confirmed_fatal`; defect type `other`.
- Evidence: The stated spike sequences are not sequences on the library’s N: at n=0, 1/n is undefined (and n·1_(0,1/n) cannot have expectation one). Thus the asserted counterexamples are ill-defined under the supplied indexing convention.
- Repair: Shifted both displayed spike sequences to $n+1$.
- Post-edit guard: `6cec7e9af8e4f5e971030223630237a15a35e9345739f13bcc6f765189962926`; defect row `frontier-32-A8-b-029`; rejudge target: yes.

### 33. `thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals` (batch 3)

- Exact tuple: `(thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals, gpt-5.6-terra, cacff73046438e4ce031a4e40e9d8cdf38410df2b859bc6d7e293921f01cdae5)`.
- Pre-edit guard: `4351c9c3d0ebc18ac401b3f096f22809018578dd9f24f3ff48f408caadd311e7`.
- Outcome: `confirmed_fatal`; defect type `logic`.
- Evidence: Step 2.1 never takes the difference of the two measures: its claim that “their real and imaginary signed parts” integrate every real C_c function to zero is false. For L(f)=f(x), the representing measure δ_x has real part with integral f(x), not zero.
- Repair: Took $\mu-\nu$ first, then applied positive-measure uniqueness to the Jordan components of its real and imaginary parts.
- Post-edit guard: `525dcd40780748d647dfc13ef3b429e1077fe16fccb1b36ca635c8aee49fdc60`; defect row `frontier-32-A8-b-030`; rejudge target: yes.

### 34. `thm-hadamard-lacunary-sets-are-sidon` (batch 6)

- Exact tuple: `(thm-hadamard-lacunary-sets-are-sidon, gpt-5.6-terra, cd16504e5aeb70f75a137f685103d6be30ebefff2b3e663f9911fdf2f8345128)`.
- Pre-edit guard: `41499ae7b02873b0e403a6be0451763f512982a90e97e4a61d36ed2005c8e1ec`.
- Outcome: `confirmed_fatal`; defect type `dependency_citation`.
- Evidence: Step 1.1 misstates the Riesz-product lemma: its interface only asserts a decomposition into some finite number r of ratio-three sets, not the r residue classes for every prescribed integer r with q^r≥3. Thus the claimed uniform constant 2r is unlicensed.
- Repair: Constructed the required $r$ residue classes locally from a chosen $r$ with $q^r\ge3$, then applied the ratio-three Riesz-product lemma to each class.
- Post-edit guard: `71651a95e3920e2428f74bbd4e8d842ee4a6687038b45882a46954fa0f081b09`; defect row `frontier-32-A8-b-031`; rejudge target: yes.

### 35. `thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact` (batch 3)

- Exact tuple: `(thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact, gpt-5.6-terra, 5eb2788a2c22631645e6630a7a230b77566fa580c7dde62d5a0d1cae8e171df5)`.
- Pre-edit guard: `cc1a51234e5c503d26322970fdd1ae66fa986c04e73dd237de89ca3761aad681`.
- Outcome: `confirmed_fatal`; defect type `logic`.
- Evidence: Step 2.1 does not establish complement closure of R: its disjoint-union/open-error argument only handles unions. When μ(X)=∞, regularity of E cannot be transferred to Eᶜ by subtraction; the required finite-exhaustion localization is absent, so 3.1 does not follow.
- Repair: Replaced the invalid global complement argument by a relatively compact open exhaustion, finite-measure regularity on each piece, and global inner/outer approximation.
- Post-edit guard: `85a3a324a36c15296904687db7f0bcd4207700bf4a82958751e99775dba37ce6`; defect row `frontier-32-A8-b-032`; rejudge target: yes.

### 36. `fs-inner-regularity-on-open-sets-implies-inner-regularity-on-all-borel-sets` (batch 3)

- Exact tuple: `(fs-inner-regularity-on-open-sets-implies-inner-regularity-on-all-borel-sets, gpt-5.6-terra, d67297c601f37b23267f6adf84f35d5cf0844408c990f8c07ddf30bfd20c22f4)`.
- Pre-edit guard: `af95fdef054b87c9c18ec726b51c6802ced972e3c8e7775dd3fd12e6b51eb118`.
- Outcome: `confirmed_fatal`; defect type `logic`.
- Evidence: Step 1.2's Baire premise is false. With the stated closed wedge, omit an isolated atom p=(1/r,s/r^2) from an open U. For N≤r, B_N=R\[s/r^2-1/r,s/r^2+1/r], which is not closed. Thus Baire is unlicensed.
- Repair: Made the wedge inequalities strict, so the Baire sets used in the refutation are actually closed.
- Post-edit guard: `9e9e0b540dff318f663d1fa10df81471272184c371ce9ef896fde9051b5c568f`; defect row `frontier-32-A8-b-033`; rejudge target: yes.

## Step-7 reader warnings

- `s8a-de4f5235dae514cd724470c9` on `lem-finite-lch-partition-of-unity-near-a-compact-set`: `covered_by_rejection`, targeting `(lem-finite-lch-partition-of-unity-near-a-compact-set, gpt-5.6-terra, 9b1e89e7a1f1c6beabe704200f0a94ecf749b429a91efa92e95fceca3cbb7572)`. The independent reader and judge both exposed missing neighbourhood/support control; the nested relatively compact open-set construction repairs both without a second defect row.
- `s8a-87eaf189a8829c651992d754` on `thm-c-c-is-dense-in-l-p-for-radon-measures`: `covered_by_rejection`, targeting `(thm-c-c-is-dense-in-l-p-for-radon-measures, gpt-5.6-terra, 84c2aa2378e239cd4b2406ca1be2114aefe1fc01ff5a5037698f0a320da003ed)`. Both readings identified the same false indicator bound, repaired by adding the $U\setminus E$ error term.

## Rejudge targets

- `def-regular-complex-borel-measure-on-an-lch-space`
- `thm-lebesgue-measure-is-a-radon-measure-on-rn`
- `lem-finite-lch-partition-of-unity-near-a-compact-set`
- `thm-lusin-theorem-for-radon-measures`
- `thm-rmk-representing-measure-is-inner-regular-on-open-sets`
- `thm-c-c-is-dense-in-l-p-for-radon-measures`
- `prop-lebesgue-stieltjes-and-lch-radon-conventions-agree-on-r`
- `lem-rmk-functional-outer-content-is-well-defined`
- `lem-rmk-compact-set-formula-and-local-finiteness`
- `lem-dieudonne-measure-and-top-dirac-agree-on-continuous-functions`
- `ex-point-evaluation-functional-is-represented-by-a-dirac-measure`
- `ex-locally-integrable-density-functional-is-represented-by-g-dlambda`
- `fs-every-finite-borel-measure-on-a-compact-hausdorff-space-is-regular`
- `ex-riemann-integral-functional-is-represented-by-interval-lebesgue-measure`
- `thm-rmk-open-sets-are-caratheodory-measurable`
- `cex-dieudonne-borel-measure-on-omega-one-plus-one-is-not-regular`
- `thm-almost-sure-convergence-implies-convergence-in-probability`
- `cex-almost-sure-convergence-need-not-imply-lp-convergence`
- `cex-convergence-in-probability-need-not-imply-lp-convergence`
- `thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability`
- `thm-continuous-maps-preserve-convergence-in-probability`
- `cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q`
- `cex-almost-sure-convergence-does-not-imply-convergence-of-expectations`
- `def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series`
- `thm-slutsky-for-real-random-variables`
- `lem-finite-lacunary-fourier-sums-have-their-coefficient-ell-two-norm`
- `lem-hadamard-gaps-bound-additive-representations`
- `thm-dominated-convergence-in-lp`
- `rem-complete-convergence-implication-diagram`
- `thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals`
- `thm-hadamard-lacunary-sets-are-sidon`
- `thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact`
- `fs-inner-regularity-on-open-sets-implies-inner-regularity-on-all-borel-sets`

No unchanged item was added to the rejudge list.

## Contract synchronization

The licensed material repairs changed step numbering, citations, or proof inputs in eight batch-3 contracts and two batch-5 contracts. Only those affected rows in `research/frontier-32-batch-3.proof-contracts.json` and `research/frontier-32-batch-5.proof-contracts.json` were synchronized. Batch 6 required no contract change.

## Validation

- Focused `precheck` over the 33 repaired files: 30 proof-bearing files checked, 0 failures; the other three are definition/remark carriers without a phase-format proof body.
- Focused `rendercheck` over all 33 repaired files: 33 files, 0 errors.
- `content-policy` on batches 3, 5, and 6: 43, 32, and 13 scoped items respectively; 0 errors and 0 warnings.
- Strict `proof-contract` on batches 3, 5, and 6: 36/36, 26/26, and 11/11 checked; 0 errors and 0 warnings.
- `citation-fidelity`: 29 batch-3 and 46 batch-5 citations checked, with no missing quote or widening candidate. Batch 6 has no citations in its contracts, so the tool correctly refused to describe that empty citation scope as a clean citation run.
- Full `depcheck`: all references resolve, no cycles, and no draft item appears on a published page. It also reports 475 pre-existing corpus warnings outside this group-focused repair.
- Exact group audit: 88 owned items; 36 exact rejections; 36 adjudications; 33 fatal licences; 3 nonfatal closures; 33 changed items; 33 one-to-one defect rows; both reader warnings dispositioned; zero group errors.
- `step8-guard` against `pre-step8`: passed repository-wide at check time; 192/192 changed items were licensed, with 0 creations and 0 deletions.

Required whole-run checks were run without taking over engine routing:

- Strict `step8-scope.mjs check --run frontier-32` remained red on one unlicensed fatal page-level alert, `s8a-27abc7a018265ebf06ec2b1a`, owned by another group. Group b has no missing adjudication, warning disposition, or cross-group response.
- `defect-ledger.mjs check` passed: 598 `frontier-32` defect rows checked, 0 errors. Every confirmed-fatal adjudication then present had exactly one matching row, including all 33 group-b fatals.

## Blockers

No group-b blocker remains. The one red whole-run scope check above is a concurrent stage obligation outside this group's ownership; no out-of-scope artifact was changed in response.
