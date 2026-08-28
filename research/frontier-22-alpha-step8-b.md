# Step 8 adjudication — group b

- Batches: 2, 5
- Rejections adjudicated: 53
- Outcomes: 18 `confirmed_fatal`, 34 `confirmed_nonfatal`, 1 `false_positive`
- Incoming alerts: none
- Outgoing cross-group alerts: none
- Rejudge targets: the 18 repaired items listed below

## Exact dispositions

| Item | Context SHA-256 | Outcome | Evidence and action |
|---|---|---|---|
| `lem-annihilator-of-a-cyclic-submodule` | `60a50ff7be761401ee35add6e844155c822865f7d163197e139d866940b7747a` | `confirmed_nonfatal` | For commutative `R`, closure of `Ann_R(m)` under subtraction and multiplication by scalars is immediate from the module laws. The quotient is well-defined; the item merely omits that elementary check. No edit. |
| `def-convergence-in-measure` | `6366ea2ef71f1901997d0b0fc738a413a6c6242ee97d54bbe6bbdbc8bbcf4209` | `confirmed_nonfatal` | Measurability of the bad set follows immediately from closure of real measurable functions under subtraction and absolute value and from Borel preimages. The definition is correct; its dependency list is thin. No edit. |
| `def-cauchy-in-measure` | `d445138a34fb3ef22464b70fa11a02e55f041e72193f856ef829ef1758d0bd2d` | `confirmed_nonfatal` | The same elementary measurable-operation argument makes every displayed bad set measurable. No edit. |
| `lem-noetherian-ring-maximal-element-annihilator-exists` | `3285020671e7ad1ea5ec5d817456b9174606111984c3368b7a4dc93a580093f5` | `confirmed_nonfatal` | The cited definition only names the annihilator set, but its ideal property is an immediate module-law calculation. No edit. |
| `lem-maximal-element-annihilator-primality-step` | `43082ac9449fb89afc89335a5eb218ae474cfa31913688cce5ec5426d61a49d3` | `confirmed_nonfatal` | The omitted verification that an annihilator is an ideal is elementary; the primality argument itself is correct. No edit. |
| `def-convergence-in-l-one-of-a-measure` | `ad585065d027172319dc333c2c5674c4a00f5f0b41816b9ec7d188440cb994f1` | `confirmed_nonfatal` | `L^1` is closed under subtraction and `|f_n-f|` is integrable by the triangle inequality. The definition is mathematically well-formed; it omits a routine closure citation. No edit. |
| `thm-convergence-in-measure-limits-are-unique-almost-everywhere` | `00135844103b08cf45d94ea12cb02f11401ff642254a7f4d8709abf2715ae635` | `confirmed_nonfatal` | All threshold sets are measurable by the standard measurable-operation facts. The set inclusion and null-union proof are correct. No edit. |
| `lem-associated-primes-exact-sequence-right-bound` | `3bcbf485a7c0901482ff398d84e2b7af40504cbfff0677b9171e4a855a109aa7` | `confirmed_nonfatal` | The definition of associated prime is fixed earlier on the same page and immediately supplies the chosen annihilator and primality. This is a local citation omission, not a mathematical gap. No edit. |
| `thm-l-one-convergence-implies-convergence-in-measure` | `f37caabff0d3177619a4275da90c6912766f0d859cb8961c0ea85fdd9e527c89` | `confirmed_nonfatal` | The strict bad set is contained in the weak bad set, and measure monotonicity closes the step immediately. No edit. |
| `fs-l-one-convergence-implies-almost-everywhere-convergence` | `278959c8533e31be7c83458133c43102d2da5e86337b5416a905c99b8eb231f1` | `confirmed_fatal` | The witness omitted `f_0` and therefore was not a sequence under the library convention. Added `f_0=0`; all limiting claims are unchanged. Ledger `frontier-22-S8-b-001`. Rejudge target. |
| `prop-truncated-l-one-metric-metrises-convergence-in-measure-on-finite-measure-spaces` | `2b877d301502f0b679dbac700ea74c2412526b1226803e566cc4d42c00a7afbb` | `confirmed_nonfatal` | Additivity over a measurable set and its complement is a routine nonnegative-integral fact. The estimate and proposition remain correct. No edit. |
| `thm-minimal-support-primes-are-associated` | `4587d190e6a5f3b666bcce472104d9f8a3827abcc13e205711da17563b2c2b2d` | `confirmed_nonfatal` | The final implication is exactly the associated-prime definition already established on the page. No edit. |
| `thm-riesz-subsequence-theorem-for-convergence-in-measure` | `986fb7e418ea68a9597e23fe3f86edcaed705c76110fa940df27d70fb00f435e` | `confirmed_fatal` | The constructed index sequence lacked `n_0`. Reindexed the thresholds, subsequence, exceptional sets, and summable bounds from `k=0`. Ledger `frontier-22-S8-b-002`. Rejudge target. |
| `cor-support-is-union-of-closures-of-associated-primes` | `888dd5f3f22a2298ef6906765e16f497980f390434417321230969a84f1c1662` | `confirmed_nonfatal` | Step 1.2 is proving `V(p)⊆Supp(M)`, so its `q` is implicitly a prime in `V(p)`; spelling out that qualifier is immediate presentation polish. No edit. |
| `thm-finiteness-of-associated-primes` | `0674991873bf32b8ab3fa79cbe9285e54461e23da5d95ee3c98794006f762fb1` | `confirmed_nonfatal` | If `p` is prime, every nonzero `r+p` in `R/p` has annihilator `p`; this one-line domain calculation excludes other associated primes. No edit. |
| `lem-zero-divisor-annihilator-contained-in-associated-prime` | `617603b4c153bc42c82f7fc15b81196a4d6384472071b26d81d79f13f1891d9b` | `confirmed_nonfatal` | The kernel of multiplication by `x` is visibly a submodule. The citation wording is imprecise, but the construction and conclusion are correct. No edit. |
| `fs-convergence-in-measure-implies-almost-everywhere-convergence` | `db9b7100525a5d05b8015e6f6492be8969a40cd81e4b2eee490f2b4003066f01` | `confirmed_fatal` | The repeated typewriter witness omitted `f_0`. Added `f_0=0`. Ledger `frontier-22-S8-b-003`. Rejudge target. |
| `thm-zero-divisors-on-a-module` | `84648012f878691baac084050ba8de484c171b367b8e0c9c50e284771038316f` | `confirmed_nonfatal` | Step 1.1 unfolds the associated-prime definition fixed earlier on the page. The missing local citation does not affect the union formula. No edit. |
| `def-primary-submodule-and-primary-ideal` | `0e5c0ecfe87fe3f2030718e46179882355c38456624a4a09a4cc2df29fc08da8` | `confirmed_nonfatal` | For a commutative ring the annihilator of a module is immediately an ideal, so the radical expression is well-typed. This is a dependency-exposition gap. No edit. |
| `thm-cauchy-in-measure-converges-in-measure` | `099384597f3c3964e3e744e9a1967aa49dbbbef30a6aba4b0d7c7288c7d3b9d1` | `confirmed_fatal` | The proof's subsequence and patched measurable functions lacked index 0. Rebuilt the construction from `k,r=0` and adjusted every geometric bound. Ledger `frontier-22-S8-b-004`. Rejudge target. |
| `lem-simple-functions-satisfy-lusins-theorem-on-a-finite-measure-set` | `760960fb04c6366c4d1799cd92cd0bcb3e0488c26cac5e10a2c74059e9de2554` | `confirmed_nonfatal` | When `E` is empty, taking `F=empty` closes the omitted boundary case immediately; the nonempty proof is correct. No edit. |
| `lem-simple-approximants-converge-uniformly-on-a-large-closed-set` | `91c8678f31e1b623ec2223e32442cfce10e726cfac645b7c0173cd30baacab55` | `confirmed_nonfatal` | Constructing the additional core `F_0` with the same summable tolerance is immediate and does not alter the argument. No edit. |
| `def-primary-decomposition-minimal-and-isolated-components` | `0ce62df57a5c05783e1558dfff21d93adc37246974810bb683032605db10b524` | `confirmed_nonfatal` | Each module annihilator is an ideal by an elementary calculation; the definition's radical is mathematically well-formed. No edit. |
| `lem-irreducible-submodule-is-primary-noetherian` | `b2ba64e2a1f97ab840fefc0286a2d861391dee137af66d1b86db7cffeed8a779` | `confirmed_nonfatal` | The ascending-chain characterization of Noetherian modules was proved earlier and closes the stabilization step immediately. No edit. |
| `lem-primary-decomposition-delete-redundant-components` | `074173ddcc488eac8abf75210d2f8db91c74d1e3acd47d98fdd00f71780d834c` | `confirmed_nonfatal` | The lemma claims only irredundant cleanup and uses the no-redundancy clause of minimality; [L1]'s shorthand does not make the lemma false. No edit. |
| `thm-lusins-theorem` | `257f233d8aa0caee2840780b20856734e7e44adbf4cfc4691e1cc058a24c320d` | `confirmed_nonfatal` | The exact cited lemma is quantified by every tolerance, so applying it with `epsilon/2` is licensed despite [L3]'s prose shorthand. No edit. |
| `cor-a-measurable-function-on-a-finite-measure-subset-of-rn-agrees-off-a-small-set-with-a-continuous-function` | `1f8f6123032273e2d6735b942efe2ae5a0d07bd7b0e67b069572f6e171674238` | `confirmed_nonfatal` | Measure monotonicity closes the final subset estimate immediately. No edit. |
| `lem-primary-decomposition-combine-equal-radicals` | `c503dbbe2cb435045656d811236d29afadd94339f5607b2df0f31bc9d9c1d727` | `confirmed_nonfatal` | [L2] is explanatory cleanup prose; regrouping and primaryity follow from [L1] and elementary intersection associativity. No edit. |
| `fs-lusins-theorem-says-measurable-functions-are-continuous-off-a-null-set` | `0240e3e18b1c03e1523bdb265bff15a283dc09de665a621e78bd6a1ddb2ec9b1` | `confirmed_nonfatal` | Countability of the rationals makes them null and their indicator measurable; this standard one-line step is omitted but the ambient-continuity refutation is correct. No edit. |
| `thm-lasker-noether-primary-decomposition` | `9349b4c26124f98fc11dcfe3d2b16285edeea6be49e1afbbd933b4e4f8c79be1` | `confirmed_fatal` | The theorem included `N=M` but neither handled the empty decomposition nor proved the maximal bad submodule proper. Added the empty-intersection boundary and separated it before the maximal argument. Ledger `frontier-22-S8-b-005`. Rejudge target. |
| `lem-associated-primes-from-a-minimal-primary-decomposition` | `bbf8881c13d4b624992c5f32901c84b62dea8d81f9b7eb43aa94e2a073545b99` | `confirmed_fatal` | The singleton-associated-prime theorem requires prime component radicals. Added that hypothesis explicitly. Ledger `frontier-22-S8-b-006`. Rejudge target. |
| `def-uniformly-integrable-family` | `b3f337615c571f0868d9fe643858c1a3a814dbc744cb5d1b996b1a2474fd4689` | `confirmed_nonfatal` | Measurability of `|f|` and its threshold preimage is immediate for measurable `f`. No edit. |
| `thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces` | `31f07602b19955a4fb6286268fbf84c9210fb91af2ebc1f7d536cf98a5a6700e` | `confirmed_nonfatal` | The displayed estimate is the elementary Markov bound obtained from `M chi_{E_f}≤|f|`. No edit. |
| `lem-localisation-of-a-primary-submodule` | `fb600b186995aa0c95f30f0f537b8a9370504a33c8e67c42bde5e3c815c8cb6d` | `confirmed_nonfatal` | Localization preserves the injectivity of multiplication by `a`; clearing one denominator proves it immediately. No edit. |
| `lem-contraction-recovers-primary-component-after-localising-away-from-radical` | `f80b53204ffdcc9ce2a74806e3734d58efb9e4028b0d5269a641496964707916` | `confirmed_fatal` | The cited characterization requires `p` prime. Added the missing prime-radical hypothesis to the Statement and Given. Ledger `frontier-22-S8-b-007`. Rejudge target. |
| `thm-isolated-primary-components-are-unique` | `331db0705db64b40842c4a6832d6438c05dd7e80bb0490477ed6ec667c041cce` | `confirmed_nonfatal` | The immediately preceding first uniqueness theorem determines the isolated radical from `M/N`; omitting that citation is a local proof gap. No edit. |
| `fs-uniform-integrability-implies-domination-by-an-integrable-function` | `b0ebad92b2b49bd59620415bf39c689f03b816e044c79dc783b7b8160b18ecef` | `confirmed_fatal` | The signed-integral comparison was false. Replaced it with divergence of `integral |g|` over the disjoint supports. Ledger `frontier-22-S8-b-008`. Rejudge target. |
| `def-tight-family-of-integrable-functions` | `a16fe74e00524609f8b5827af34e14fbe630be6bc63af2544025a7aa1b99fc4d` | `confirmed_nonfatal` | A sigma-algebra is closed under complements, so `X\E` is measurable immediately. No edit. |
| `thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces` | `8b4de2888f4647b575c6dca03cbe4e90feda3b361073d145244cdeef2e1b937e` | `confirmed_nonfatal` | Restriction preserves convergence in measure by monotonicity and preserves tail uniform integrability by restricted-integral monotonicity. Both are immediate. No edit. |
| `thm-second-uniqueness-theorem-primary-decomposition` | `0bd4b51efd2b75bd97a139682a2e2092babab7c2cff36b1e449af5ed08e914c1` | `confirmed_nonfatal` | When `Sigma` is empty, `S=R` contains 0, so the antecedent leading to prime avoidance cannot occur; the proof handles the empty case explicitly in step 2.1. No edit. |
| `cor-dominated-convergence-is-a-vitali-corollary` | `57e50e30ef70faf6fd82c2cba85e1e3bc5c632a3f966bcf261c33f58a1794e12` | `confirmed_fatal` | The common exceptional set omitted `N_0`; additionally, the arbitrary sigma-finite cover was incorrectly treated as increasing. Included `N_0` and replaced the cover by finite cumulative unions. Ledger `frontier-22-S8-b-009`. Rejudge target. |
| `cor-radical-ideals-as-intersections-of-minimal-primes-noetherian` | `90a4036ddf26a688620f61a9d30abcb316b8ab8a55f351df7ba8f36918249abe` | `false_positive` | Step 1.2 assumes `I≠R` and writes `I=Q_1∩...∩Q_r`; an empty intersection would be `R`, so necessarily `r≥1`. The cited finite-intersection lemma's hypothesis is satisfied. No edit. |
| `ex-annihilator-colon-ideals-in-a-cyclic-module` | `b90448e24dd80d79ac0cfa5a9a8a078c0e61854a390e6f5f092514bd8c648f70` | `confirmed_fatal` | Exhibiting two prime colons did not exclude others. Added the normal form `g(y)+cx` and classified every colon as `(x,y)`, `(x)`, or the nonprime ideal `I`. Ledger `frontier-22-S8-b-010`. Rejudge target. |
| `rem-finite-measure-implication-table-for-the-main-modes-of-convergence` | `e331a21e6c5640cc670cbdbdbdcff0d7e3eb85c559b7be86afa4bbeed9032277` | `confirmed_fatal` | The spike witness was undefined at index 0. Added `f_0=0` and restricted the displayed spike formula to `n≥1`. Ledger `frontier-22-S8-b-011`. Rejudge target. |
| `ex-primary-maximal-radical-test` | `a78fc38a34291b8c2c05597750b9d94a54a1dfd2ddec6b51f21c79371f0c7f8b` | `confirmed_nonfatal` | The example directly computes `m^2=0`; it does not need the cited general Artinian-local nilpotence theorem or its choice hypothesis. No edit. |
| `ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise` | `b8dfeed2806c7cf16c5bbffd715001c118116f74d537da2d0f51ec563d94d650` | `confirmed_fatal` | The Example omitted `f_0`. Added `f_0=0`. Ledger `frontier-22-S8-b-012`. Rejudge target. |
| `ex-primary-localisation-kills-a-component` | `2b4d370746ec8c5e080d8448c5d66eff2f41873a346b87c6dcc7be9d7815930d` | `confirmed_nonfatal` | `(x)` is prime and `(x,y)^2` is primary because its quotient is local with square-zero maximal ideal. These are elementary checks; the localization computation is correct. No edit. |
| `ex-an-explicit-riesz-subsequence-for-the-typewriter-sequence` | `d0acbf75744fa3ba6614002b4247274eaf6ba73a6824a0c11a6183aabb9797cd` | `confirmed_fatal` | The proposed subsequence omitted `g_0`, and its exceptional set had measure equal to rather than below the tolerance. Added `g_0` and a strictly smaller exceptional interval. Ledger `frontier-22-S8-b-013`. Rejudge target. |
| `ex-redundant-primary-component-deletion` | `efba145440dbcb39f81040fa8646444c71ca613ede469d2deef8ac5dc4f1b1ee` | `confirmed_fatal` | The cleanup theorems were applied before primaryity and radicals were established, and final minimality was not verified. Added quotient-based primaryity checks and explicit irredundancy witnesses. Ledger `frontier-22-S8-b-014`. Rejudge target. |
| `ex-embedded-component-varies-but-radical-does-not` | `b47cee0f120f42e22238bdfb2ede3992783c26dd29df216028154680d63e77c0` | `confirmed_fatal` | The item proved ideal equalities but not that they were minimal primary decompositions. Added primaryity, radical, and irredundancy checks for both decompositions. Ledger `frontier-22-S8-b-015`. Rejudge target. |
| `cex-spikes-converge-almost-everywhere-and-in-measure-but-not-in-l-one` | `81d1a0e14e74ce0b36fb97bd9309338d2907a6e14f600e9964b172fc1432ed64` | `confirmed_fatal` | The formula used `1/n` at index 0. Added `f_0=0` and restricted the formula and unit-integral calculation to `n≥1`. Ledger `frontier-22-S8-b-016`. Rejudge target. |
| `ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval` | `ec0543ba03ad28ab5930bae0e1d2101d0e71960dbae0eccc38c2d9bf379411f7` | `confirmed_fatal` | The equality `lambda([0,1]\F)=lambda(U)` was false because `U` can extend beyond the unit interval. Replaced it by `lambda(U∩[0,1])≤lambda(U)` and added the exact monotonicity dependency. Ledger `frontier-22-S8-b-017`. Rejudge target. |
| `ex-a-uniformly-integrable-family-with-no-integrable-majorant` | `7bc5b46437f3f434db098831bf27382567895ac869175b86238f9aaf9089b6bf` | `confirmed_fatal` | The signed-integral comparison was false. Replaced it with divergence of `integral |g|` on the disjoint intervals. Ledger `frontier-22-S8-b-018`. Rejudge target. |

## Repairs and rejudge targets

The 18 confirmed-fatal items, and only those items, were changed:

1. `fs-l-one-convergence-implies-almost-everywhere-convergence`
2. `thm-riesz-subsequence-theorem-for-convergence-in-measure`
3. `fs-convergence-in-measure-implies-almost-everywhere-convergence`
4. `thm-cauchy-in-measure-converges-in-measure`
5. `thm-lasker-noether-primary-decomposition`
6. `lem-associated-primes-from-a-minimal-primary-decomposition`
7. `lem-contraction-recovers-primary-component-after-localising-away-from-radical`
8. `fs-uniform-integrability-implies-domination-by-an-integrable-function`
9. `cor-dominated-convergence-is-a-vitali-corollary`
10. `ex-annihilator-colon-ideals-in-a-cyclic-module`
11. `rem-finite-measure-implication-table-for-the-main-modes-of-convergence`
12. `ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise`
13. `ex-an-explicit-riesz-subsequence-for-the-typewriter-sequence`
14. `ex-redundant-primary-component-deletion`
15. `ex-embedded-component-varies-but-radical-does-not`
16. `cex-spikes-converge-almost-everywhere-and-in-measure-but-not-in-l-one`
17. `ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval`
18. `ex-a-uniformly-integrable-family-with-no-integrable-majorant`

## Checks

- Focused precheck: all 17 proof-bearing repaired items passed.
- Focused render check: all 18 repaired items passed the renderer's YAML, delimiter, wikilink-in-math, and math-parse checks.
- Dependency check: passed with repository-wide pre-existing warnings only.
- Step-8 guard: passed for the whole current working tree; 56 changed items were all licensed, with zero errors and zero warnings.
- Step-8 scope check: passed; four groups, 425 items, zero open rejections, and zero cross-group alerts.
- Defect-ledger validation for `frontier-22`: passed with zero row-shape errors.
- Defect-ledger completeness: passed for the whole run; all 18 group-b fatal tuples are represented exactly once.

## Alerts and blockers

- No incoming alerts.
- No outgoing cross-group findings.
- No group-b content, adjudication, guard, scope, or defect-row blocker.
