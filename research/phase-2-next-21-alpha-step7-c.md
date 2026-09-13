# Step 7 adjudication — group c

Run: `phase-2-next-21`  
Owned batches: 2, 3, 1  
Status: group work complete; whole-stage closure awaits the other groups

## Completed rejection decisions

### `def-equidistribution-mod-one`

- Rejection tuple: `gpt-5.6-terra` / `0eee880d3e7bf1ecd8a5d05d48b629fbdad10c9880a73a6fe5a75792c9883ae6`
- Pre-edit guard: `91c5215e34298d747ef1d9b2f7f084f8c8871971f5cb5ff73d71eb77538f7917`
- Outcome: `confirmed_fatal` (`logic`).
- Exact claim checked: the defining frequency was quantified for a zero-based sequence without restricting the divisor index, so the displayed expression admitted `n=0` and was undefined.
- Repair: restrict the displayed frequencies to integers `n\geq1`; the limit remains `n\to\infty`.
- Dependencies opened: `def-equidistribution-mod-one`, consumer `thm-weyl-equidistribution-for-irrational-rotations`.
- Sources consulted: none; this is a direct domain/type check.
- Focused checks: `precheck` (definition skipped cleanly: 0 failures) and `rendercheck` passed.
- Post-edit guard: `f473ac184f800b1d0a17a6dfdea23388cee28cb6e83850e67bab0c79550e282d`.
- Defect ledger: `p2-next21-7-c-001`.
- Rejudge target: `def-equidistribution-mod-one`.

### `thm-fair-coin-frequency-strong-law`

- Rejection tuple: `gpt-5.6-terra` / `ab8a99d0673144a0bfa40984d3d0ca53b9ef2dd281e1a9cc348fda70ebcc78be`.
- Pre-edit guard: `11e2ba43cbe4b8aaed0ff7b454a124ae1b082bbf81861e8399fa5232a507d529`.
- Outcome: `confirmed_nonfatal`; no content, contract, impact, or judge metadata changed.
- Exact claim checked: the item does not quantify the displayed expression over all `n\in\mathbb N`. It states an asymptotic limit, while its `A_n` notation is supplied by the page definition only for integers `n\geq1`. Step 1.2 inherits that domain. Writing `n\geq1` locally would improve presentation, but a competent reader closes it immediately and no asserted `n=0` term exists.
- Dependencies opened: `def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace`, `thm-birkhoff-ergodic-theorem`.
- Sources consulted: none; the decision follows from the exact local definition and statement.
- Rejudge target: none.

### `ex-rational-half-rotation-has-a-nonconstant-ergodic-average`

- Rejection tuple: `gpt-5.6-terra` / `4ac2eaedaa8e6b71ecc33346b20285952bc79bb9f17f33a4e3f67588cb95c8ec`.
- Pre-edit guard: `e79559a731c80b605c540ee56dffe555242f99d5b264af4be5e5122a94f3d86a`.
- Outcome: `confirmed_nonfatal`; no content, contract, impact, or judge metadata changed.
- Exact claim checked: [F2] supplies `A_n` only for `n\geq1`. Therefore Step 2.1's even branch is already restricted to positive even `n`, which forces `q\geq1`; it never applies to undefined `A_0`. Spelling out `q\geq1` would be harmless polish, not a false calculation or claim.
- Dependencies opened: `def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace`.
- Sources consulted: none; this is a direct domain check against the cited definition.
- Rejudge target: none.

### `ex-nonergodic-half-rotation-l-two-projection`

- Rejection tuple: `gpt-5.6-terra` / `7972ff336d75c3028dcc6801af5a1d760d40500fc56b6933d6eb7a1e74fdce01`.
- Pre-edit guard: `02a48bebce2eb5ef008eb8ecbbdda21620829af42f3398489d2dabc4313bfd1b`.
- Outcome: `false_positive`; no content, contract, impact, or judge metadata changed.
- Exact claim checked: the cited definition sets `A_nf=n^{-1}\sum_{k=0}^{n-1}f\circ T^k` for integer `n\geq1`; it does not average `n+1` terms. Hence exact period-two balance occurs at `n=2q`, exactly as Step 2.1 says. The judge's asserted zero-based convention for `A_n` contradicts the opened supplier. The positive-domain point is inherited from [F2].
- Dependencies opened: `def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace`, `thm-von-neumann-mean-ergodic-theorem-in-l-two`.
- Sources consulted: none; the local definition directly resolves the objection.
- Rejudge target: none.

### `lem-continuous-functions-determine-borel-probabilities-on-compact-metric-spaces`

- Rejection tuple: `gpt-5.6-terra` / `e0bdfd08fd488ca7bfb9530620dd06695f9b99cb31ef3b85e0ba08d514c519a1`.
- Pre-edit guard: `8ea475cdfebfd10b3abf68fb30d3418bc6330f9b575a407f4cb22fe670955652`.
- Outcome: `confirmed_fatal` (`logic`).
- Exact claim checked: the Statement allowed empty `K`, but `def-continuous-real-functions-on-a-compact-metric-space` defines `C(K,\mathbb R)` only for nonempty compact metric spaces. Absence of probability measures on the empty space makes an implication vacuous only after its terms are defined; it does not repair the ill-typed displayed quantifier.
- Repair: require `K` to be nonempty, remove the empty-space aside, and synchronize the item’s Batch-1 proof contract.
- Dependencies opened: `def-continuous-real-functions-on-a-compact-metric-space`, `lem-distance-to-set-is-lipschitz`, `thm-metric-closure-characterisation`, `lem-finite-measure-uniqueness-on-a-pi-system`.
- Sources consulted: none; the exact local definition resolves the domain issue and the proof otherwise remains unchanged.
- Focused checks: `precheck`, `rendercheck`, and the selected proof-contract check all passed.
- Post-edit guard: `48c8ad2d9c654b16520f3bea6aa044055671ff86368b7a0e24236c1f9d198687`.
- Defect ledger: `p2-next21-7-c-002`.
- Rejudge target: `lem-continuous-functions-determine-borel-probabilities-on-compact-metric-spaces`.

### `lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints`

- Rejection tuple: `gpt-5.6-terra` / `1857b21d33a8bb4349fc41541ea6f24bea8c0ddd287e3313380818bf7caff5c1`.
- Pre-edit guard: `62f3b684028a76a39b2cfc4775429de9adce8e0335596fcfbd74d79b1dff304b`.
- Outcome: `confirmed_fatal` (`logic`).
- Exact claim checked: the former `E_b` used `0\leq k\leq b^q`, hence contained `1`, while the canonical digit supplier is defined only on `[0,1)`. The assertion that every point of `E_b` receives a canonical expansion was therefore false as written.
- Repair: define the exceptional set with `0\leq k<b^q`, explicitly quantify `x\in[0,1)\setminus E_b` and `j\geq1`, and synchronize the proof and contract. The cylinder equivalence itself remains unchanged and in fact holds at canonical endpoints as Step 3.1 notes.
- Dependencies opened: `def-canonical-base-b-expansion-and-normality`, `def-integer-base-map-on-the-circle`, `thm-countable-union-of-countable`, `prop-countable-subsets-of-rn-are-lebesgue-null`.
- Sources consulted: none; the endpoint mismatch is resolved from the exact local definitions and elementary set arithmetic.
- Focused checks: `precheck`, `rendercheck`, selected proof-contract check, and finite smoke (`11,508` exact nonterminating rational cases over bases 2–4) passed.
- Post-edit guard: `caf77676b526d344934bdfac80225fcf82d46ae59ec39d65441a2961e154f597`.
- Defect ledger: `p2-next21-7-c-003`.
- Rejudge target: `lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints`.

### `fs-von-neumann-mean-convergence-implies-birkhoff-pointwise-convergence`

- Rejection tuple: `gpt-5.6-terra` / `120b7163ca49611b4e3c51e9c977f487d0a6c7144610b8dd69fafd4cf4f2c184`.
- Pre-edit guard: `009682a1853832f050ae5bc6c390cc76e7f991860e21f757dec0c0c1ee3b20c7`.
- Outcome: `confirmed_nonfatal`; no content, contract, impact, or judge metadata changed.
- Exact claim checked: the theorem Statements in [F2] do not themselves say that Birkhoff is proved from the maximal theorem, so the proof contract's Statement-only quotations do not license that explanatory Facts sentence. The full `thm-birkhoff-ergodic-theorem` item, however, invokes the maximal theorem explicitly at Step 2.1. More importantly, the refutation is complete without [F2]: Steps 1.1–2.2 construct a sequence converging to zero in `L^2` and diverging at every point, and the item explicitly disclaims an ergodic-average counterexample. Thus the citation mismatch is non-load-bearing presentation, not a fatal failure of the claimed logical non-implication.
- Dependencies opened: `thm-von-neumann-mean-ergodic-theorem-in-l-two`, `thm-birkhoff-ergodic-theorem`, `thm-maximal-ergodic-theorem`, and the selected proof-contract entry.
- Sources consulted: none; the complete current local proofs and exact contract quotations settle the issue.
- Rejudge target: none.

### `thm-birkhoff-ergodic-theorem`

- Rejection tuple: `gpt-5.6-terra` / `de918183c6d5d6b3a0f7ee51e2444af37d585547c66bd489b9f878de8a6bbe95`.
- Pre-edit guard: `3e5b0376cce7e1693305633fb367a417022c362e8b4a64d7d84ebdc970a6a068`.
- Outcome: `false_positive`; no content, contract, impact, or judge metadata changed.
- Exact claim checked: [F1]'s exact Statement says each oscillation set "is invariant (in particular, invariant modulo null sets)." Its proof gives the strict equality `T^{-1}E_{\alpha,\beta}=E_{\alpha,\beta}` in Step 1.1. Therefore Step 2.1 does not upgrade a merely mod-null claim: it applies the strict invariance that the supplier states and proves. The identity `A_nf(Tx)=((n+1)/n)A_{n+1}f(x)-f(x)/n` and its rearrangement give both directions of convergence-set invariance even for noninvertible `T`.
- Dependencies opened: `lem-sigma-finite-ergodic-oscillation-sets-have-finite-measure`, `thm-maximal-ergodic-theorem`, `def-strict-and-mod-null-invariant-sigma-algebras`, and the selected proof-contract entry.
- Sources consulted: none; the exact supplier Statement and complete proof directly refute the objection.
- Rejudge target: none.

### `thm-polynomial-growth-functions-define-tempered-distributions`

- Rejection tuple: `gpt-5.6-terra` / `65cff734337db26c5e0fddc4d972f025dbf8c9fcfe04ae2d9f7f304ec97fa623`.
- Pre-edit guard: `b8669387514a4eddd6fc9aea7850e055c1d29d7eb05d7e84ccab313ba7bfd6b7`.
- Outcome: `confirmed_fatal` (`logic`).
- Exact claim checked: the coarse shell bound produces `\sum m^{n-s}`, and [F5] makes this converge only when `s-n>1`, i.e. `s>n+1`. The former `s>n` inference was invalid.
- Repair: retain the elementary coarse bound but use the sufficient thresholds `s>n+1`, `N>d+n+1`, `Nq>n+1`, and `N>n+1`. These stronger choices prove every conclusion in the unchanged Statement. The Batch-3 proof contract was synchronized.
- Dependencies opened: `thm-p-series-real-exponents`, `thm-holder-inequality-for-integrals`, `thm-finite-seminorm-bound-characterizes-tempered-distributions`.
- Sources consulted: none; exponent arithmetic and the exact p-series criterion settle the defect.
- Focused checks: `precheck`, `rendercheck`, and the selected proof-contract check passed.
- Post-edit guard: `3ab6a9df5a2c497bd425c775bbdd16073a921b1264d8afad024298197fa88844`.
- Defect ledger: `p2-next21-7-c-004`.
- Rejudge target: `thm-polynomial-growth-functions-define-tempered-distributions`.

### `ex-fourier-transform-of-dirac-and-one`

- Rejection tuple: `gpt-5.6-terra` / `c4cf080b0228f61d971e3ae5855fd853b8f78f8cf8993c7ee2fa60504bab7fbc`.
- Pre-edit guard: `4414d7a13dca8f820a9ae0693564419d643143982115fdb2dea897c1548b896b`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Exact claim checked: [F1]'s theorem Statement supplies `\mathcal F\delta_0=1` and `\mathcal F1=\delta_0`, but not the `\mathcal F^2=R` identity used in the former Step 2.1. That inference was therefore unsupported by the declared dependency even though the desired formula itself was available.
- Repair: retain the direct test calculation for `\mathcal F\delta_0`, then cite [F1]'s exact constant-distribution formula directly for `\mathcal F1`; synchronize the Batch-3 contract.
- Dependencies opened: `thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials`, `thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions` (the latter is a dependency of the supplier, not of this example).
- Sources consulted: none; the exact local supplier Statement contains the repaired conclusion.
- Focused checks: `precheck`, `rendercheck`, and the selected proof-contract check passed.
- Post-edit guard: `d385761ed652f2fc260274915451ed783954a33d3fa98473cf1b8f4a7f4beffe`.
- Defect ledger: `p2-next21-7-c-005`.
- Rejudge target: `ex-fourier-transform-of-dirac-and-one`.

### `ex-fourier-transform-of-a-plane-wave`

- Rejection tuple: `gpt-5.6-terra` / `8ab4f63a6cbdb2456a5497079d00920dce0f40a8233008f25921160a558fff1a`.
- Pre-edit guard: `975d74570085465b3882cd737229695aa10fbc8a193ac2a4cf89948889937181`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Exact claim checked: the former [F1] attributed `\mathcal F^2=R` to the elementary-transform theorem, whose Statement instead supplies the delta and plane-wave formulas. Step 2.1 depended on the absent squaring identity.
- Repair: state [F1]'s exact delta/plane-wave clauses, use its plane-wave formula directly in Step 2.1, retain Step 1.1 as an independent sign check, and synchronize the Batch-3 contract.
- Dependencies opened: `thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials`, `thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions`.
- Sources consulted: none; the exact local supplier Statement supplies the conclusion.
- Focused checks: `precheck`, `rendercheck`, and the selected proof-contract check passed.
- Post-edit guard: `3c8d99baa38f1b9394b3f209f27a68e36ae4fb3127c9d64bc3e69bc3a54da9bf`.
- Defect ledger: `p2-next21-7-c-006`.
- Rejudge target: `ex-fourier-transform-of-a-plane-wave`.

### `ex-fourier-transform-of-delta-derivatives-and-monomials`

- Rejection tuple: `gpt-5.6-terra` / `0b48d28b82376ac0e26f4f62267c25d1a544d65706cddde3dac8a6098d78c85d`.
- Pre-edit guard: `cd4b2e0dcac14622821c53a289b5c540a0d819db8336e33d32eb7f8e57853565`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Exact claim checked: Step 2.1 used `\mathcal F^2=R`, while [F1]'s cited theorem Statement supplies the derivative and monomial formulas but not Fourier squaring. The desired second formula was available directly, but the written inference was unlicensed.
- Repair: retain the direct test calculation of `\mathcal F\delta_0'`, invoke [F1]'s one-dimensional degree-one monomial clause directly for `\mathcal F(x)`, and synchronize the Batch-3 contract.
- Dependencies opened: `thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials`, `thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions`.
- Sources consulted: none; the exact local supplier Statement supplies the repaired step.
- Focused checks: `precheck`, `rendercheck`, and the selected proof-contract check passed.
- Post-edit guard: `9f92b6735547edf7311a77668be396578ee8c36ae52808e1bbae0c3ae63a7796`.
- Defect ledger: `p2-next21-7-c-007`.
- Rejudge target: `ex-fourier-transform-of-delta-derivatives-and-monomials`.

### `ex-dirac-comb-and-poisson-summation`

- Rejection tuple: `gpt-5.6-terra` / `da9ce608731787517e4df16ea7959561fc8a351b6e94b4a979bf4d274dd4707e`.
- Pre-edit guard: `4a6c3d3df291fa80afe07628b5321fddb2c8b1a18f26c3bca1607ea33b1866f0`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Exact claim checked: the cited invariance theorem states only `\mathcal F\operatorname{III}=\operatorname{III}`; it does not state absolute convergence of both lattice pairings. Moreover, the former verification proved invariance implies the lattice identity but did not discharge the reverse direction of the advertised equivalence.
- Repair: state the invariance supplier exactly; add direct dependencies on the comb definition and the Schwartz-space Fourier automorphism to prove absolute convergence for both tests; add the reverse implication by equality of all distributional pairings; synchronize the Batch-3 proof contract.
- Dependencies opened: `thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions`, `def-dirac-comb`, `cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space`, and the selected proof-contract entry.
- Sources consulted: none; the exact local supplier Statements and Definition settle the dependency interfaces.
- Focused checks: `precheck`, `rendercheck`, and the selected proof-contract check passed.
- Post-edit guard: `fc3987231dba56d9cee30bfaee9012768c4d4f9fa5c22c283994d588f06e53df`.
- Defect ledger: `p2-next21-7-c-008`.
- Rejudge target: `ex-dirac-comb-and-poisson-summation`.

### `def-schur-property`

- Rejection tuple: `gpt-5.6-terra` / `d68a0a5677095c0c98c1fded1c08c945fa8f39358956ec91bdae7c23a8f4c495`.
- Pre-edit guard: `5fa1dd049170bdc8eac402c0e2351f614fecc5e28d523d9bc354b2c9adde0b01`.
- Outcome: `confirmed_fatal` (`logic`).
- Exact claim checked: the unconditional claim about constant and eventually constant sequences needs uniqueness of weak limits. The only dependency defines the weak topology and explicitly withholds point separation absent a norming hypothesis; the published Hausdorff theorem separately assumes HB. Thus the remark did not follow under the item's stated assumptions.
- Repair: remove only the unsupported sequence remark, retain the definition and the zero-space boundary, and synchronize the Batch-2 proof contract.
- Dependencies opened: `def-weak-topology-on-a-normed-space`, `thm-weak-topology-is-hausdorff`, and the selected proof-contract entry.
- Sources consulted: none; the exact local dependency interfaces settle the missing hypothesis.
- Focused checks: `rendercheck` and the selected proof-contract check passed.
- Post-edit guard: `d8444ce0ebc47b995a3144417e8f59c061ba53410d42b051eda5cb66c61f6635`.
- Defect ledger: `p2-next21-7-c-009`.
- Rejudge target: `def-schur-property`.

### `cor-ell-one-is-not-reflexive`

- Rejection tuple: `gpt-5.6-terra` / `9802c2bfe009ec67a35923ec152b1cbf07043cc2ad51f3230955151d7044d899`.
- Pre-edit guard: `55ca41910c244d78647c55f8eaa34f92f40406d279567587188ead216da9e4cc`.
- Outcome: `false_positive`; no content, contract, impact, or judge metadata changed.
- Exact claim checked: although [F3] alone only fixes the sequence space and its norm, [F2]'s exact Statement says both real and complex `ell^1` have the Schur property. The cited definition predicates that property only of Banach spaces. Therefore [F2] already supplies the Banach-space premise needed to apply [F1].
- Dependencies opened: `thm-ell-one-has-the-schur-property`, `def-schur-property`, `cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence`, `lem-finite-truncations-are-dense-in-c0-and-ell-one`, and the selected proof-contract entry.
- Sources consulted: none; the exact local definition and theorem Statement settle the type premise.
- Rejudge target: none.

### `thm-ell-one-has-the-schur-property`

- Rejection tuple: `gpt-5.6-terra` / `10807fc1ff1e4200d65a2d0e6a8270cf51a3f3ace5941e9e3d5607e7dc825c4d`.
- Pre-edit guard: `5b5dd1eb9df2d825cf23bb69ae87ea52f8fc63055115acf7cac030ec7cbeab83`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Exact claim checked: the real duality supplier represents every bounded functional by a coefficient sequence, but does not state the converse used to make arbitrary coordinate tests and the gliding-hump `h_b` bounded. The title also invokes a property whose definition requires a Banach space, so the whole-item audit required the missing completeness discharge.
- Repair: replace the overstated duality use by the elementary estimate `sum |c_k b_k| <= ||b||_infinity ||c||_1` in both scalar fields. Add a full choice-free completeness argument using coordinatewise scalar limits and bounded nonnegative partial sums. Synchronize the item dependencies, Batch-2 page manifest, and proof contract.
- Dependencies opened: `cor-ell-p-duality-by-counting-measure`, `thm-complex-dual-of-ell-one-is-ell-infinity`, `def-c-zero-and-ell-infinity`, `lem-finite-truncations-are-dense-in-c0-and-ell-one`, `thm-reals-cauchy-complete`, `thm-complex-plane-is-complete`, `thm-nonnegative-series-bounded-partial-sums`, `def-schur-property`, and the selected proof-contract entry.
- Sources consulted: none; exact local interfaces and the displayed elementary estimates suffice.
- Focused checks: `precheck`, `rendercheck`, and the selected proof-contract check passed.
- Post-edit guard: `b903c316d00c4e70edeb56977394049f13a2028104655c11ea909ca2d630bce4`.
- Defect ledger: `p2-next21-7-c-010`.
- Rejudge target: `thm-ell-one-has-the-schur-property`.

### `ex-reflexivity-of-ell-p-and-lp`

- Rejection tuple: `gpt-5.6-terra` / `691516437f92ac09a1ae15f32b491379f3b39a25ffc0ece7b4b10b48edf1c8a0`.
- Pre-edit guard: `781d18b7d6ca21ec9cdb8e1fd792597d0937bd3f47c6ff5a6fcf57c001b461e9`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Exact claim checked: the cited counting-measure remark is explicitly real-valued, while former [F2] and Step 2.1 used it for the complex specialization.
- Repair: retain the exact real identification, then derive the complex isometry from the direct complex `L^p` definition by applying the real counting-measure integral formula to `|f|^p` and observing that counting measure has no nonempty null set. Add the exact complex-definition dependency and synchronize the Batch-2 page manifest and proof contract.
- Dependencies opened: `rem-ell-p-is-l-p-of-counting-measure`, `def-complex-lp-and-euclidean-test-function-conventions`, `thm-reflexivity-of-lp-for-one-less-p-less-infinity`, and the selected proof-contract entry.
- Sources consulted: none; the local Definition and counting-measure Remark give the complete specialization.
- Focused checks: `precheck`, `rendercheck`, and the selected proof-contract check passed.
- Post-edit guard: `fcc44e5bfa3c62f0287578a79d361f0511883e289625f672fbe679b8b147e1bb`.
- Defect ledger: `p2-next21-7-c-011`.
- Rejudge target: `ex-reflexivity-of-ell-p-and-lp`.

### `lem-eberlein-smulian-countable-compactness-closes-in-the-bidual`

- Rejection tuple: `gpt-5.6-terra` / `c25f34a1edc5b7e77b1cf760e7448861ba0e32480a952a4881c529ba0bad2568`.
- Pre-edit guard: `2a7e066a5704fc0e26d02c747301ef1b80e96547768d3751576f5aab92a331dc`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Exact claim checked: the weighted countable-product metric supplier requires every coordinate metric to be bounded by one. Former [F10] cited it for the usual, unbounded scalar metric in Steps 14.2 and 17.1 without discharging that hypothesis.
- Repair: introduce `rho(s,t)=min{1,|s-t|}`, prove directly that it is complete and induces the usual scalar topology, and use copies of this bounded metric in both product-metric applications; synchronize the Batch-2 proof contract.
- Dependencies opened: `lem-standard-complete-metric-on-a-countable-product`, `thm-reals-cauchy-complete`, `thm-complex-plane-is-complete`, and the selected proof-contract entry.
- Sources consulted: none; the exact local supplier Statement and elementary metric verification settle the issue.
- Focused checks: `precheck`, `rendercheck`, and the selected proof-contract check passed.
- Post-edit guard: `94ed262145831b7c320f295dc8fe4c9e06b898b2ecc02775bda5717e96dbce2e`.
- Defect ledger: `p2-next21-7-c-012`.
- Rejudge target: `lem-eberlein-smulian-countable-compactness-closes-in-the-bidual`.

### `lem-james-norm-attainment-compactness-criterion`

- Rejection tuple: `gpt-5.6-terra` / `46f11ab8bbaba69f1d294e0b7d26caf3322743fd293bc5b13fe7874d8feb7d44`.
- Pre-edit guard: `556a9f38c70730d5c870304dfed993b580256a47cc592ca5667d59fcdab3ed13`.
- Outcome: `confirmed_fatal` (`logic`).
- Exact claim checked: the positive-indexed auxiliary families were passed to `L` and `V`, but those operators take library sequences, hence zero-based functions on `N`. In particular the former `x-hat` and `y` had no zeroth value.
- Repair: extend `x-hat` to a genuine sequence using a harmless duplicate zeroth value; make the inductively produced positive-indexed `y` family into a genuine auxiliary sequence before applying `L`; and explicitly prove that the final shift and duplicate do not change scalar limsups. Synchronize the Batch-2 proof contract.
- Dependencies opened: `def-limsup-liminf`, `def-series-and-absolute-convergence-in-a-normed-space`, `def-dependent-choice`, and the selected proof-contract entry.
- Sources consulted: none; the local zero-based sequence definitions and direct finite-shift calculation settle the type defect.
- Focused checks: `precheck`, `rendercheck`, and the selected proof-contract check passed.
- Post-edit guard: `ad43e0c0efd82c6c80e285b41640b3efc89e58a010b45f5237765867fbb1aa63`.
- Defect ledger: `p2-next21-7-c-013`.
- Rejudge target: `lem-james-norm-attainment-compactness-criterion`.

### `thm-milman-converse-for-compact-generating-sets`

- Rejection tuple: `gpt-5.6-terra` / `18a2f5965dc43ae6864add7392f603b5760a33ab834d61800a4a1e9d797f749a`.
- Pre-edit guard: `347a97c8a39a8c5c2e5da3f794c4437037a49e087a67c493a5897834b9000471`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Exact claim checked: the finite-choice supplier accepts a function whose domain is a natural number and explicitly does not identify an arbitrary finite family with such a listing. Former [F6] erased this restriction and Step 3.1 invoked the inflated version.
- Repair: state [F6] exactly; write the finite subcover as a natural-number-indexed list; form its nonempty center fibres as a function on that natural number; and use the supplier's choice function to select the centers. Synchronize the Batch-2 proof contract.
- Dependencies opened: `lem-finite-choice`, `def-compact-space`, and the selected proof-contract entry.
- Sources consulted: none; the exact local choice lemma and compactness Definition settle the repair.
- Focused checks: `precheck`, `rendercheck`, and the selected proof-contract check passed.
- Post-edit guard: `4572a8801b5375cdfeb7ccad188927ffebcf05de156fd56a9de7ddd2dd759bb0`.
- Defect ledger: `p2-next21-7-c-014`.
- Rejudge target: `thm-milman-converse-for-compact-generating-sets`.

## Reader-warning decisions

### `s8a-8ed5fca633252a302022e996` — `lem-james-norm-attainment-compactness-criterion`

- Outcome: `nonfatal`; no additional content change.
- Rationale: equation (1) explicitly ends with `(1-theta)/2 < 1-theta`, so Step 10.1's use of the weaker upper bound is immediate transitivity. Positivity of `epsilon_m` follows directly from the displayed minimum because `m+1`, `1-theta`, `b_m`, `T_m`, and `T_{m+1}` are all stated positive. The warning identifies compressed prose, not a false claim or proof-blocking gap, and is independent of the repaired zero-index type defect.

### `s8a-d4dd1de60fdfaa91f4c4b216` — `thm-birkhoff-ergodic-theorem`

- Outcome: `nonfatal`; no content change.
- Rationale: the warning accurately identifies compressed bookkeeping, but the single displayed shift identity gives both implications after rearrangement: convergence at `x` iff convergence at `Tx`, with the same limit. Hence the convergence set is strictly invariant; extending the limit by zero on its complement yields an invariant representative. Step 1.2 separately removes the countable inverse orbit of the representative-disagreement null set, establishing a.e. representative independence. These are immediate consequences of displayed formulas, not a false claim or missing theorem.

### `s8a-35272426ff54c94a3142a2bc` — `thm-finite-seminorm-bound-characterizes-tempered-distributions`

- Outcome: `nonfatal`; no content change.
- Rationale: [F1] cites `def-tempered-distribution`, whose Definition expressly fixes the Schwartz topology to be the topology of `def-schwartz-topology-and-convergence`; the latter gives the exact finite basic-neighbourhood formula used in Steps 1.1–3.1. The citation is one link less direct than ideal, but the dependency is named in the cited Definition and the proof's continuity argument is correct. This is presentation polish, not a false claim or proof-blocking gap.

### `s8a-8a7ec40b36d8e3cba30c1b59` — `thm-irrational-circle-rotations-are-uniquely-ergodic`

- Outcome: `nonfatal`; no content change.
- Rationale: the family of all open metric balls of radius `delta/3` is an explicitly defined cover of the compact circle. A finite subcover directly supplies its finitely many ball centers, hence the claimed net. No choice over an unlisted family is hidden, and the one-line compactness argument is elementary.

### `s8a-55949e64d540a86bb322c904` — `thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier`

- Outcome: `nonfatal`; no content change.
- Rationale: unlike the compact-parameter clause of the sibling distribution lemma, the cited `lem-schwartz-parameter-pairing-and-integral-interchange` expressly handles integration over all of `R^r` when every Schwartz seminorm has an `L^1` majorant. Step 1.3 supplies exactly such majorants: derivatives in `x` contribute only a polynomial in `xi`, the cutoff fixes compact `x`-support, and a Schwartz `phi` absorbs every polynomial. Its integral is `chi F phi`; [F1]'s cutoff identity changes the left pairing to `<v-tilde,F phi>`, while restriction to tests changes the integrand pairing to the displayed `v` pairing. The compressed equality is therefore fully licensed by the cited global lemma and cutoff interface.

### `s8a-f99c1eb62911e8a9912b3245` — `ex-borels-binary-normality-exception-is-uncountable-and-null`

- Outcome: `nonfatal`; no content change.
- Rationale: the constructed digit string has a forced zero at every even position, so it is not eventually one and is the canonical binary expansion by [F1]. More explicitly, every normalized tail is bounded above by the alternating binary tail and is strictly below one, so the greedy recurrence reads back each prescribed digit. First differing odd digits then give different canonical strings, and every member of `C` is recovered from its set of odd one-positions. The two compressed sentences contain the needed injectivity and surjectivity argument.

### `s8a-7ce8f8fc510291d84070f63a` — `rem-paley-wiener-and-microlocal-analysis`

- Outcome: `nonfatal`; no content change.
- Rationale: the remark explicitly labels both discussions as orientation, denies supplier status, has no dependents, and its source metadata identifies the two sections being summarized. The missing in-prose wikilink to the A-page calculation is a presentation improvement only; no theorem, proof, or downstream dependency consumes the remark.

## Cross-group alerts and seams

- No rejection in group c located its real defect in another group's item, so no row was warranted in `research/phase-2-next-21-step7-cross-group.jsonl`.
- The declared group-a seam from `lie-subgroups-actions-and-homogeneous-spaces-examples` to `the-ergodic-theorems-of-von-neumann-and-birkhoff` was checked in both directions. The relevant group-a example and counterexample depend item-by-item on `lem-irrational-torus-flow-is-free-with-dense-orbits`, whose pigeonhole proof is self-contained; neither item cites or paraphrases a proposition from the ergodic page. The page-level `requires` edge therefore introduces no changed domain, quantifier, hypothesis, direction, or conclusion.
- The refreshed Step-7 alert scope contains exactly the seven group-c Step-6 warnings decided above and no later incoming cross-group alert owned by group c.

## Validation

- Ledger reconciliation found exactly one adjudication for each of the 20 owned rejection tuples, with no missing or duplicate group-c tuple. Outcomes are 14 `confirmed_fatal`, three `confirmed_nonfatal`, and three `false_positive`. All 14 fatal repairs have matching defect rows `p2-next21-7-c-001` through `p2-next21-7-c-014`.
- Alert reconciliation found exactly one owning-group disposition for each of the seven group-c Step-6 warnings, with no missing or duplicate group-c alert id.
- After the licensed dependency edits, `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-21` refreshed and deduplicated the unified frontier ledger. The current ledger has all 12 batch inputs reviewed, no orphaned reviews, and no cross-batch consumer edge from Batches 1, 2, or 3; their owned input arrays correctly remain empty.
- Focused `precheck` and `rendercheck` passed on all 14 changed items. Selected proof-contract checks passed for Batch 1 (3/3), Batch 2 (6/6), and Batch 3 (5/5). `manifest-deps` passed for Batches 1, 2, and 3 across all 126 owned items with zero missing dependencies or errors. The base-expansion repair's finite smoke covered 11,508 exact rational cases in bases 2 through 4.
- `node tools/defect-ledger.mjs check --run phase-2-next-21 --adjudications research/phase-2-next-21-judge-adjudications.jsonl --reader-decisions research/phase-2-next-21-step7-alert-decisions.jsonl` passed with zero errors.
- The official Step-7 guard was run against baseline `pre-step7`. At this group-c check it reported 47 whole-stage errors because other groups were still editing, but an ownership filter over its structured error list returned zero group-c errors.
- `node tools/step7-scope.mjs check --run phase-2-next-21` was run. At this group-c check it reported 16 undisposed alerts, all owned by groups a, b, or d; it reported no group-c omission. These are parallel-stage blockers outside this dispatch's write scope.

## Next action

The engine may proceed with group-c repair checks and the single configured rejudge after the remaining groups close their own alerts and guard errors. No judge or final adjudicator was run in this dispatch.
