# Frontier 29 — Step 8 group c

## Summary

Read all 94 items on the six pages for batches 4, 6, and 7, together with the
published dependencies needed to test the rejection claims. All 41 exact
rejection tuples were adjudicated against their pre-edit bytes: 7 are
`confirmed_fatal`, 31 are `confirmed_nonfatal`, and 3 are `false_positive`.
Only the seven fatal items were edited.

There were no incoming alerts, no cross-group seams, no outgoing cross-group
findings, and no published-item repairs. No web search was needed: every
disputed point was resolved from the current items, their exact cited library
interfaces, or an elementary derivation recorded below.

## Confirmed fatal repairs

| item | context_sha256 | repair |
|---|---|---|
| `def-period-one-fourier-coefficients-partial-sums-and-convolution` | `8740e70cff0b377b69a6bbcb8a9ac934859ced88a1096e34040bc68b4b7e2040` | The displayed convolution can diverge at exceptional points for two (L^1) factors. The definition now makes convolution an a.e.-defined (L^1) class, records representative independence, and retains the every-point bounded-factor case used for Dirichlet kernels. |
| `thm-vitali-covering-lemma-for-balls-with-fivefold-dilates` | `3388d34dd6a7b7a13afc32bed87e4f961252357e6bb76e272656923a0e40702f` | Repeated identical balls admit no infinite disjoint selected sequence. The countable form and proof now permit the retained index set to be finite or countably infinite. |
| `cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one` | `f4e3415fa5b77e97a11a65f67db3d1944bdf10d93a596d3765d74b9b49b02d3a` | Pointwise nonzero null-supported representatives contradict the stronger claim. The statement, Given data, and proof now require (lVert fVert_1>0), equivalently a nonzero (L^1) class. |
| `ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set` | `f07299c78071c7b089cd73dc21cf052d8b981f8f9ea3c051d0c1488e9300b01b` | The topological support includes endpoints and the accumulation point (0). Both average computations now use the exact set on which (f=1). |
| `thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n` | `ff75764fe457217c71c47f041ad6e84f548ed38a2132d3d190a6f20252666a00` | A measure with a singular part need not admit (d\nu/d\lambda). The statement now uses (f=d\nu_a/d\lambda), agreeing with its Lebesgue decomposition and Radon–Nikodym dependency. |
| `cex-a-random-variable-need-not-have-a-finite-expectation` | `f9d7f3a85a6fdaed62322fa7c81c89a85981e16214c007a1375f3298710499e0` | The item now states the false universal claim being refuted, defines the weighted measure on a power-set sigma-algebra, verifies countable additivity, and derives the divergent expectation from simple truncations and monotone convergence. This also closes the independent Step-7 concern that the former “Statement refuted” was itself true. |
| `thm-jensen-inequality-for-expectation` | `bbf46db1863656757aea9d16de1aafae3bc5ad2bbb672219eb611a5b68f5e11a` | The former (+\infty) branch used expectation for possibly signed nonintegrable variables, outside the page definition. The statement now requires (arphi(X)) to be integrable or nonnegative and permits (+\infty) only in the defined nonnegative case. |

These seven items are the group-c rejudge targets.

## Confirmed nonfatal rejections

Each item below has a correct mathematical conclusion. The objection identifies
an immediately closable citation, notation, representative convention, or
local proof gap, so the fatal-only rule closes it without an edit.

| item | context_sha256 | disposition |
|---|---|---|
| `def-locally-integrable-function-on-r-n` | `f7076cfc99e7055d8e0572b2e1cdb24805dc49ff6dec9fb933acad04ec567bac` | The cited measurable-map definition is real-valued, but identifying (mathbb C) with (mathbb R^2) closes the complex-valued notation immediately. |
| `lem-probability-measure-basic-identities` | `c97f7ea8689842c18f603468dd736a8b9464e2131d04ee54d00586f158c3ca51` | `[L2]` compresses the set-difference hypotheses inaccurately, but step 1.2 explicitly establishes that every probability in use is finite before subtraction. |
| `lem-euclidean-balls-have-positive-finite-lebesgue-measure` | `74d23f9f313bab67ee48909df95e29773f27bcb4657147468c23a8a990b65737` | The sandwich does not prove measurability, but a Euclidean ball is immediately the inverse image of an open interval under the continuous norm map; the statement and bounds remain correct. |
| `thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces` | `6d0d5a9b052b8be7a90053e9c21f8e0cf467c1a6d3664ea3205bd307f2c92b58` | Countable additivity of finite nonnegative weights follows directly because only finitely many disjoint members can contain points; step 1.1 merely omits that elementary bridge. |
| `def-sublinear-operator-weak-and-strong-type-p-q` | `166bdc06c73104b5d68f95c9b97738bd7e3c1b9069dc847f0b3a00aca60dae91` | The text uses the standard convention of denoting an (L^p) element by a measurable representative. The mismatch with the quotient-valued dependency is a notation/interface clarification, not a false type bound. |
| `lem-fourier-partial-sums-are-dirichlet-convolutions` | `91eb612a519506880bc4588b74b815f9e7e635db06d385b40f508b1af2069878` | “One-period integrable” is the page’s shorthand for the torus convention fixed immediately before it, where functions are represented one-periodically. The objection exposes ambiguous wording, not a counterexample within that convention. |
| `def-density-of-a-measurable-set-at-a-point` | `2a220cff8e64e171fee0277ea4a42fea50078b5118920b9dd82258794cec5218` | The page consistently suppresses the subscript on (n)-dimensional Lebesgue measure; (n\ge1) is inherited from the cited (mathbb R^n) interface. This is notation polish. |
| `lem-closed-form-and-size-bounds-for-the-dirichlet-kernel` | `28d3b65cf6068b110d33bed50b5cc0375372d2e63a9dcba84045f17048bf3102` | The character formula is imported by the cited kernel definition’s direct dependency. `[L1]` compresses that two-item route but the computation is correct. |
| `def-family-shrinking-nicely-to-a-point` | `4ba2264e33a409ab06b78b281b76e90a192c30cd2bd13f608c75471c0f4f269c` | “Lebesgue measurable” and (lambda) are fixed by the page context; the missing direct dependency is a local citation gap. |
| `prop-ball-average-is-continuous-in-centre-and-radius` | `3a46b617537db13dd84abb937f64670182546623fbcfbef2c25eec3fd915c799` | The centered-ball volume formula also uses translation invariance. That omitted elementary citation is the same nonfatal gap recorded independently at Step 7. |
| `prop-centered-and-uncentered-maximal-functions-are-comparable` | `2b01f884460771cad25ebd5f41503c3900957b383506d40230eb06438755495e` | The ratio (2^n) additionally uses translation invariance; the pointwise comparison remains correct and the missing bridge is immediate. |
| `prop-hardy-littlewood-maximal-function-is-l-infinity-bounded` | `ca6132eb63fe33dc1a31164e463b58ff5b5c5b2648c59124af41e3900ac590be` | Measurability was proved in the immediately preceding theorem. Omitting that direct dependency does not affect the pointwise estimate or strong-type conclusion. |
| `thm-almost-every-point-is-a-lebesgue-point` | `d898e98aa2fdfd87b027acca5aa313af0226b6dde723217017728c8fde02a834` | `[L1]` overstates the fixed-representative equivalence, but the proof establishes the needed one-way implication for that representative outside a null set, so the class-level conclusion follows. |
| `thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity` | `0f774df3087d90aa6e1331ad6763b5a362ede5b3aec2bf4061d7fdb49dfe4bdc` | The (L^\infty) estimate yields the displayed inclusion modulo a null set, which is exactly enough for the subsequent measure bound. The literal pointwise wording is nonfatal. |
| `thm-riesz-thorin-interpolation` | `b397a9c915496443f6459b2e3581c2d57923fa0dfd6b73b61b3b6dd158308284` | Step 3.1 omits the standard initial normalization (lVert fVert_{p_\theta}=1); homogeneity restores the stated bound. This matches the independent Step-7 proof-gap note. |
| `thm-hardy-littlewood-maximal-inequality-for-balls` | `8c5bb102503ebe39f3851ef7a37959f49978ba218cf017d67caf602f3d806421` | No uncountable choice is needed: use the family of all witness balls, or select the first rational witness radius. The theorem under Countable Choice is correct; the written selection is a local proof gap. |
| `thm-probability-law-and-distribution-function-correspondence` | `06d253e363abd38bd00695d5d326c5c72e4e63c26f723980846d01e4cf49caf6` | The right-continuity sequence plainly starts at (n=1); allowing (0\in\mathbb N) makes the unqualified subscript a harmless indexing typo. |
| `cor-expectation-agrees-with-the-finite-weighted-sum` | `04bef19bd00457f161412a1f437e0acbc9aaa049bdc57c6da19256a8312d647b` | The integral of the finite-valued identity is its finite atomic sum directly from the simple-integral definition. The item omits that elementary bridge but its conclusion is correct. |
| `cor-layer-cake-formulas-for-random-variables` | `bba76e54c5aa72469a1c5ab598b21b1fa9924ffb4076eaa8221057278c49c176` | The cited layer-cake theorem is finite-valued, but applying it to (X\wedge n) and using monotone convergence immediately gives the asserted extended-valued case. |
| `cor-expectation-linearity-monotonicity-and-modulus-bound` | `ea4e26fc317f5d3c2619c785304685ef90630104e498ef33190019c3376ebcb0` | Replace (Y-X) on its null exceptional set, or invoke a.e.-invariance of the integral. Either closes the almost-sure-to-pointwise step without changing the theorem. |
| `lem-variance-and-covariance-identities-for-random-variables` | `0fdaa7506be58a54aa993e31b4f216c10293bfaa205f6f4e83a64c571f328efb` | The finite identification also needs the earlier finite weighted-expectation corollary. The formulas themselves and their finite specialization are correct. |
| `ex-a-positive-measure-compact-set-can-miss-part-of-every-interval` | `5fe1ca9742ef1e8d818dac5dcbd36e9eb03834ca7bec3bf34273b55650c73379` | Density of (mathbb Q) is an elementary missing citation; it does not invalidate the compact-set construction. |
| `rem-general-inequalities-restrict-to-the-published-finite-ones` | `551073c06266fcf904768a81db38350fda949efeeacf90f5b9f087e13a5841c4` | The finite Cauchy–Schwarz form follows after (|\mathbb E[XY]|\le\mathbb E|XY|) and squaring. “Restricts” compresses this one-line consequence rather than asserting a false inequality. |
| `thm-change-of-variables-for-expectation` | `dac4472de393ce7a7179b24b28071da66ac20eca5e6a5c72a6ef72913a59b90e` | From (|u(X)|,|v(X)|\le|g(X)|), monotonicity of the nonnegative integral immediately gives integrability of both real components. |
| `ex-countable-probability-space-with-geometric-weights` | `53a822b2976f1f5fe4b20a0f4003e0b3e074044147846742887e1e45f0de6e43` | Countable additivity follows by regrouping the nonnegative weight series over disjoint subsets. The example omits that standard one-line verification but defines the correct measure. |
| `lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus` | `db4f08e045480c448ac703fa9e926d49a9358b3e29a30a875772a501ad19f1a4` | Apply the real density theorem separately to real and imaginary parts. This is the same immediately closable complex-valued gap found independently at Step 7. |
| `ex-steinhaus-follows-from-the-density-theorem` | `48dad81b9935f4b8842fa305939c9fd030646739873d853aeda8587fb7a420f8` | Translation invariance plus dilation scaling gives (lambda(B(x,r))=c_nr^n), hence the continuity and finiteness used. `[L3]` merely compresses those local inputs. |
| `thm-riemann-localisation-principle-for-fourier-series` | `4d5dda6ed1ced77e13eafc59166a0df829239cd50701b0163a17fb3d2cc57527` | For complex (h), expand the sine as two exponentials instead of taking one imaginary part. The theorem remains true; this is the independent Step-7 proof gap. |
| `cor-local-holder-regularity-implies-fourier-convergence-at-a-point` | `c2075bdcfc17824a0e34806e762769233b3ac6b4a543e3143a27ce273dd9dd4e` | Apply the Dini argument to real and imaginary parts (or its two-coefficient complex form). The missing split does not change the claimed convergence. |
| `cex-continuity-alone-does-not-satisfy-a-dini-modulus` | `efd32b11770948adfde757a4c43c37f357c2577f510a9ca9163b34fcd7f63d37` | `[L1]` omits hypotheses already present in the Given data and construction, and the counterexample uses only failure of the integral condition, not the convergence implication. |
| `thm-dini-pointwise-convergence-criterion-for-fourier-series` | `1418ac0015ee8e5d5b97fd3a86ea23854a0fce9c55be189b717a245713f65049` | For complex (a(t)), the sine-kernel integral is the difference of two Fourier coefficients. This immediately repairs the proof and matches the independent Step-7 note. |

## False positives

| item | context_sha256 | basis |
|---|---|---|
| `lem-continuous-compactly-supported-functions-differentiate-by-ball-averages` | `a33675b8f8aa0ca16994468ab7e4400cf20e2ccf2a88aef86872058d08458ffd` | The hypothesis (g\in C_c(\mathbb R^n)) invokes a type defined only for (n\ge1); there is no asserted (n=0) instance. |
| `cor-lyapunov-moment-inequality-on-a-probability-space` | `e4a903eb8415e4c6752547000ae2d2ecd9c0119a1f8d0177d759f2f9a7034ae7` | Step 1.1 handles (p=q) first. Consequently the (q=\infty) case reaching step 1.2 has (p<\infty), exactly the cited theorem’s domain. |
| `cor-second-moment-positive-probability-bound` | `d6cf16ea6c609d476223c9555e4c69b389e726fda648fc6d7ce56a29972d89fa` | With (A=\{X>0\}), the preceding pointwise identity (X=X\mathbf1_A) also gives (X^2\mathbf1_A=X^2). Thus the displayed Cauchy–Schwarz substitution already yields (mathbb E[X^2]\mathbb P(A)). |

## Unlicensed Step-7 concern

The rejection-blind Step-7 digest also identified
`cex-a-distribution-function-need-not-have-a-density`: its “Statement refuted”
is the true existential claim that a distribution function need not have a
density, while the body actually refutes the unstated universal claim that
every distribution function has one. The current configured verdict for that
exact item is a pass, so no `confirmed_fatal` rejection exists and Step 8 gives
this dispatch no licence to edit it. It remains an explicit own-scope blocker
for the engine/owner rather than an unlicensed content change.

## Artifacts and checks

- Appended 41 exact adjudications with pre-edit guard hashes to
  `research/frontier-29-judge-adjudications.jsonl`.
- Added `research/frontier-29-alpha-c-step8-ledger-rows.json`; appended its
  seven exact-linked defect rows through `tools/defect-ledger.mjs append`, which
  also refreshed the generated defect-ledger view.
- Focused precheck: six repaired proof-bearing items checked, zero failures.
- Focused rendercheck: all seven repaired items passed YAML, delimiter,
  wikilink, and KaTeX checks.
- Dependency check exited successfully, with repository-wide legacy warnings
  only.
- Group-c evidence join: 41 unique exact outcomes, no duplicate tuple; the
  seven changed group-c items are exactly the seven fatal ids and all seven
  pre-edit guard hashes match the `pre-step8` baseline.
- Defect-ledger schema validation passed for all 359 current Frontier-29 rows at
  check time. The whole-run fatal linkage check still named 32 missing rows from
  other groups and no group-c item.
- Required Step-8 scope check completed: seven groups, 755 partitioned items,
  194 still-open rejections routed to other active groups, and zero cross-group
  alerts dispositioned.
- Required Step-8 guard ran against `pre-step8`: 94 whole-run changes were
  present and 41 were licensed at check time. All seven group-c changes were
  licensed; its 53 failures named only items in other groups whose
  adjudications had not yet been appended. A whole-run guard pass is therefore
  not claimed.

## Blockers

Group c has no missing adjudication, unlicensed edit, alert, cross-group defect,
or defect-ledger linkage. The only own-scope blocker is the unlicensed Step-7
counterexample-heading defect above. Whole-run guard and linkage closure also
await the other groups’ concurrent append operations. The engine owns all
targeted rejudgment and stage transitions.
