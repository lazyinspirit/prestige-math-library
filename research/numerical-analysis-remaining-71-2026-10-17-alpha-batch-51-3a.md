# Batch 51 Step 3a adjudication

Run: `numerical-analysis-remaining-71-2026-10-17`. Group: `batch-51`. Scope: batch 51 only; six routed decisions, no reader findings or page obligations. Two additional defects found during focused review use the engine-supported supplemental `gate:<defect_id>` disposition path; these record local findings, not a claimed mechanical gate failure.

## Dependency level 0 — continuous Poincare

`refuter:51:1`: confirmed_fatal, title overstates the choice assumptions. Removed “choice-free” from `lem-crouzeix-raviart-continuous-poincare`; Countable Choice remains explicit and the mathematical Statement and proof are unchanged. Repair confidence: 1. The refuter-observed carrier matches the untouched pre/post reader raw hash `70c66c1922bf3139fe6cb7d290582c70fd402df446c7f92bb5f6b541bbb89b0e`; no historical uncertainty is needed.

Independently checked the three proof steps: smooth zero extension, linewise FTC/Holder, sigma-finite Euclidean Tonelli, orthogonal Jacobian one, and the delta-by-delta closure estimate. Read the exact Sobolev/zero-closure definitions, Countable Choice definition and four cited theorem statements. Empty domain and zero function satisfy the estimate; d=1 has the usual interval reading. No missing prerequisite or consumer claim change. Recorded the complete contract risk review before higher-level adjudication.

An additional source defect in this same carrier was confirmed: Guermond Chapter 3 is *Traces and Poincare inequalities*, and section 3.2 is not the claimed zero-boundary Poincare/FTC proof. Corrected its title and locator to section 3.3, Lemma 3.27 (printed p. 32), and Exercise 3.2 (printed p. 35). The source states the Lipschitz-domain inequality and the 1D FTC exercise; the authored slab proof supplies the stated general open-domain extension. Laugesen section 3.10, Theorems 3.17–3.18 (printed pp. 65–66) supplies related FTC and closure arguments, not a substitute for this local proof. Sources actually opened: https://people.tamu.edu/~guermond/M661_FALL_2025/chap03.pdf and https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf.

## Dependency level 1 — local face unisolvence

Read both steps and the local element Definition: facet means are barycenter evaluations, the duality matrix is the identity, and dimension d+1 proves the isomorphism and unique expansion. Nondegeneracy and d>=2 ensure positive face measure. Guermond equations (36.4)–(36.5) and the following shape functions (PDF p. 2), plus Schöberl lines 276–290, agree. Risk review complete; no routed decision or defect. Next: simplex trace/Green proof and its exact interfaces.

## Dependency level 1 — simplex traces and Green identity

All eight proof steps and 25 cited dependency interfaces reviewed. Cell-average variance gives fractional Poincare; finite orthant charts, smooth multipliers and reflection give an extension. Dyadic normal averages yield a summable geometric series exactly for r>1/2, and coordinate-direction equivalence controls the integrated slices. Endpoint r=1 uses Gauss–Green and H1 density. Inward homotheties preserve divergence distributionally; uniform pullback bounds plus smooth density give convergence, and compact cutoffs/mollification give simultaneous W^{r,2} and L2-divergence approximation. This justifies Green for arbitrary H1 test functions by L2 traces. Compact subfacet exhaustion gives interior compatibility and H1-zero boundary traces. Scaling yields the stated h exponents; constants and zero functions are valid, r=1/2 is excluded. Guermond Lemma 36.8 and consistency argument and Schoberl cellwise integration support the interfaces; local proof supplies the full graph approximation. No substantive defect found. The affine weak-derivative and product identities for a field with only divergence controlled are justified directly by the test-function calculations expressly given in F13, step 2.2; individual first derivatives are not assumed to be L2. No decision owed. Next: level 2 method, broken norm, jumps, basis and counterexample.

## Dependency level 2

### `def-crouzeix-raviart-poisson-method`

Read the full Definition and five direct interfaces. Real L2 load products are integrable; Xh restrictions are H1 with well-defined L2 facet traces. The extension is independent of the decomposition z=v+vh, agrees with ah on Vh, and jump sign disappears on squaring. Boundary jumps are traces, not interior differences. Positive facet diameters follow from d>=2 and nondegeneracy. This defines a variational method, not an execution algorithm or an unsupported existence claim. Guermond equations 36.2–36.11 and Schoberl 25.2 agree.

### `lem-crouzeix-raviart-broken-gradient-is-a-norm`

All three steps read with global-space Definition, polygonal-connectivity supplier and Holder. Zero gradient gives cell constants; face means identify neighboring constants. Compact polygonal paths can be finitely perturbed off the codimension-two skeleton, giving facet adjacency, and a boundary facet pins the constant to zero. Boundedness supplies a boundary, connectedness supplies propagation; finite-union avoidance needs only finite choices. The L2 triangle inequality is derived by expansion and Holder. Single-cell/zero-dimensional CR space is covered. Guermond Lemma 36.4 and Schoberl norm passage support the argument.

### `lem-crouzeix-raviart-face-jump-estimate`

Both steps read against exact global-space and affine scaling Definitions/statements. Zero mean of an affine jump makes it vanish at the facet barycenter. The tangential derivative is bounded by the two cell gradients, or one at a boundary; squaring yields hF^{-1} hF^2 |F| comparable to cell volume. Each cell occurs d+1 times, so constants are mesh-independent even on graded shape-regular meshes. Zero jumps and boundary facets are explicitly covered; Countable Choice is inherited from scaling. Guermond jump bound and Schoberl face-mean cancellation are consistent.

### `lem-crouzeix-raviart-global-face-basis`

Both steps checked using local duality and global face-average constraints. Patching the two incident local shape polynomials gives one shared mean and zero other means including boundary means. The finite sum recovers every cell polynomial by local unisolvence; testing face means proves independence. Empty interior-facet set gives the empty basis of the zero space; no choice or pointwise continuity is assumed. Guermond Proposition 36.2 and homogeneous restriction support exactly this construction.

### `cex-crouzeix-raviart-below-trace-threshold`

All six steps and eight direct interfaces reviewed. The x^{3/4} cutoff has square-integrable first derivatives; explicit boundary cutoffs converge in H1 with O(epsilon^{1/2}) x-layer squared error and O(epsilon) y-layer error. On the restricted pair region, 1-1.05*2^{-1/4}>0 and kernel/difference/measure powers give integral x^{-3/2}, so the derivative is not H^{1/2}. Bounded-domain kernel comparison excludes 1/2<r<1; the separately computed positive x^{-5/4} Laplacian excludes r=1. This supplies an H1-zero weak functional, explicitly not an L2-source Poisson solution. Reader Schoberl locator correction to consistency/energy is accurate; Guermond strict trace and duality thresholds are contextual, not a claimed source for this explicit witness.

The counterexample touched obligation accepts the locator repair (repair confidence 1), with the current raw carrier equal to reader-post. No Statement or Definition changed. All level 2 risk reviews are complete. Next: comparison norm, companion, interpolation, solves and two-triangle example at level 3.

## Dependency level 3

### `lem-crouzeix-raviart-comparison-norm`

Both steps and all ten direct supplier interfaces checked. Zero broken gradient makes cellwise Sobolev functions constant by Poincare-Wirtinger, not pointwise calculus; zero L2 facet jumps and facet-connectedness propagate and kill the constant. The finite cone covering/positive ball argument justifies path perturbation. The map into a finite sum of L2 spaces is linear and injective, so the squared-sum expression is an inner-product norm. Global H1-zero jumps vanish and slab Poincare gives norm equivalence. The finite CR coefficient Gram matrix gives completeness. Read Guermond Lemmas 36.4 and 36.9: the reader correctly replaces an overly narrow section locator with these precise result names; the local proof extends the context to Xh.

### `lem-crouzeix-raviart-conforming-companion`

Read all six steps, long F1 cone-volume derivation, and 25 exact direct dependency interfaces. Normalized edge matrices have determinant bounded below; a fixed positive orthant cube maps inside a unit cone section with uniformly positive volume. Disjoint cone sections bound star cardinality, and local Lipschitz polyhedral epigraphs give facet-connected vertex stars reaching boundary facets. Along bounded chains, mean-value equality controls vertex discrepancies by comparable cell gradients; finite patch overlap gives uniform gradient and L2 bounds without quasi-uniformity. Continuous piecewise affine zero-boundary extension has cellwise weak gradient by Gauss-Green cancellation and is globally Lipschitz. Smoothed distance cutoffs remove boundary layers, continuity from above makes their measure vanish, and compactly supported W1,2 approximants establish actual H1-zero closure membership. Zero inputs, boundary stars and d=2 links are covered. Countable Choice is retained; Guermond 36.9 uses the related averaging operator but the full construction is proved locally.

### `lem-crouzeix-raviart-local-interpolation-estimates`

All four steps and seven direct interfaces checked. H1 traces bound each face mean and hence the finite reference interpolant. The explicit affine polynomial matches gradient and function means; fractional variance Poincare (or integer Poincare twice at r=1) bounds the residual. Affine reproduction, constant facet Jacobians and gradient pullback scaling give h^r and h^{1+r}; the H1 trace inequality gives the scaled facet error. Global H1 traces and H1-zero boundary traces put the global interpolant in CR. Affine input has zero error and zero seminorm, endpoint r=1 is handled separately. Guermond Lemma 36.1 and Schoberl reference scaling agree.

### `thm-crouzeix-raviart-discrete-well-posedness`

Both steps and eight direct interfaces checked. H1-zero is a closed Hilbert subspace under Countable Choice; slab Poincare gives coercivity 1/(1+CP^2), Holder bounds the L2 load, and real Lax-Milgram applies. Explicit finite face-basis matrix is positive definite from broken-gradient definiteness, so finite linear algebra gives the discrete solution without infinite choice. Empty interior-facet set is explicitly the zero-space case. Guermond 36.1 and Lemma 36.4 support exact/discrete formulations, while the authored matrix proof makes the discrete choice use precise.

`ex-crouzeix-raviart-broken-gradient-norm`: checked both steps and all three direct suppliers. The diagonal opposite coordinates are x-y and y-x, giving gradients (-2,2) and (2,-2); each triangle has area 1/2, so the squared norm is 8. Boundary edge means vanish while bottom trace 1-2x is nonzero. Figure orientation agrees. Accept the Schöberl locator repair to the actual space/form passage, with repair confidence 1. The comparison-norm touched repair is accepted for its precise result locator; no authored claim changes. All level 3 risk reviews complete. Next: consistency and discrete Poincare at level 4.

## Dependency level 4

All four steps and nine direct interfaces checked. Green gives residual equal to normal gradient paired with CR jumps, with opposite outward normals on shared facets; global gradient traces agree because r>1/2. Zero jump means permit subtraction of normal-gradient averages, and weighted facet Holder gives h^r times broken gradient. For I_CR zeta, corrected the explicit boundary-error sign: I_CR zeta=-(zeta-I_CR zeta) on zero-trace boundary; the corresponding interior formula is also explicit. Norm estimates are unchanged. The interpolation facet estimate gives the extra h^s, since summing local Gagliardo integrals is bounded by the global nonnegative integral. At r=1 or s=1 use the integer gradient seminorm; affine/zero cases vanish. Guermond Lemma 36.10 and Schoberl consistency passage agree. Completed nonfatal sign repair with confidence 1; contract derivation synchronized.

`thm-crouzeix-raviart-discrete-poincare`: both steps and four direct interfaces read. Apply slab Poincare to the proven H1-zero companion, add its O(h) L2 defect, and use h<=diam(Omega); constants depend only on the declared domain, dimension and shape regularity. Zero/single-cell cases are covered. Accept both reader source-locator corrections, confidence 1: Guermond Lemma 36.6 uses elliptic duality, while Schöberl lines 280–312 discuss the CR space, broken form and conforming P1 approximation. The local companion proof is independently supplied. No Statement changed; no affected external consumer or published defect. Next: energy theorem.

## Dependency level 5 — energy estimate

All six proof steps, 15 direct dependency interfaces and exact second-Strang hypotheses read. V is complete in gradient norm by H1 Hilbert structure and Poincare equivalence; Vh is Hilbert in the finite coefficient Gram norm. The common norm restricts correctly, Holder gives extension bound Mh=1, jump control gives coercivity alpha_h=1/(1+CJ), and loads are bounded. Interpolation gives both broken gradient and facet jump errors O(h^r), consistency gives the residual O(h^r), and the exact quoted Strang formula yields the conclusion. Zero discrete space uses the supplier residual-zero convention; affine and zero inputs are consistent. Poincare constants establish hypotheses only, so the actual error constant has no domain dependence beyond regularity data. Guermond Theorem 36.11/Remark 36.12 and Schoberl second Strang passage support the argument. No defect found. Risk review complete before level 6 finalization. Next: dual L2 estimate.

## Dependency level 6 — L2 estimate

Read all six steps and eleven direct interfaces, including the conditional smoothing Definition and actual energy proof constants. e=0 is handled before division; for e nonzero, the adjoint solve gives distributional -Delta zeta=e and H^{1+s} control. Interpolation plus broken-gradient jump control bounds error jumps with zero face means. Cell Green applied to e|K gives the correctly signed dual boundary term. Subtracting normal-gradient averages yields h^s times h^r. Splitting the volume term at I_CR zeta produces the consistency residual, not invalid Galerkin orthogonality, and the sharper residual contributes h^{r+s}. Final division and smoothing give exactly C*Creg*h^{r+s}; C depends only on dimension, shape regularity, r and s because the energy proof establishes that stronger constant dependence. Both integer endpoints r=1,s=1 use the integer seminorm. Guermond Theorem 36.13 supplies the duality context; Schoberl only supplies consistency/H2 energy, so the reader locator correction is justified. No mathematical defect found. Accept the reader locator correction with confidence 1. All fifteen HIGH/CRITICAL reviews are now complete.

## Final dispositions and evidence

All six original obligations are decided. `refuter:51:1` is `confirmed_fatal`; the five touched carriers are `amended_repair`. The reader's source corrections are accepted mathematically, with source item bytes still exactly equal to reader-post. The amendment synchronizes each stale manifest source mirror, which the reader did not update. Risk reviews are audit additions to the contracts, not mathematical rewrites. No Statement or Definition changed; therefore no supplier interface changes or outside consumer repairs were required.

The source titles/locators in the manifest now match the actual items. The consistency proof's explicit sign correction is also mirrored in its contract derivation. Existing provenance classes remain appropriate. Neither locally edited item had a judge stamp, and no stamp was created. All completed repairs have confidence 1.

The two supplemental decisions are `confirmed_nonfatal`: the continuous Poincare source locator and consistency step 1.2 sign. They are independent of the refuter's title defect; the refuter decision references exactly one closed fatal row. The sign correction leaves every estimate intact, so its energy and L2 consumers were checked above and need no repair. No pages, pairs or item IDs were added or withdrawn.

| Closed defect row | Subject | Disposition / decision |
|---|---|---|
| `na71-51-3a-poincare-choice-title` | `lem-crouzeix-raviart-continuous-poincare` | fixed; fatal; `refuter:51:1` |
| `na71-51-3a-poincare-source-locator` | `lem-crouzeix-raviart-continuous-poincare` | fixed; nonfatal; `gate:na71-51-3a-poincare-source-locator` |
| `na71-51-3a-consistency-error-sign` | `lem-crouzeix-raviart-consistency-defect` | fixed; nonfatal; `gate:na71-51-3a-consistency-error-sign` |
| `na71-51-3a-comparison-guermond-locator` | `lem-crouzeix-raviart-comparison-norm` | fixed; nonfatal; `touched:51:lem-crouzeix-raviart-comparison-norm` |
| `na71-51-3a-discrete-poincare-guermond-locator` | `thm-crouzeix-raviart-discrete-poincare` | fixed; nonfatal; `touched:51:thm-crouzeix-raviart-discrete-poincare` |
| `na71-51-3a-discrete-poincare-schoberl-locator` | `thm-crouzeix-raviart-discrete-poincare` | fixed; nonfatal; `touched:51:thm-crouzeix-raviart-discrete-poincare` |
| `na71-51-3a-l2-schoberl-locator` | `thm-crouzeix-raviart-l2-error-estimate` | fixed; nonfatal; `touched:51:thm-crouzeix-raviart-l2-error-estimate` |
| `na71-51-3a-threshold-schoberl-locator` | `cex-crouzeix-raviart-below-trace-threshold` | fixed; nonfatal; `touched:51:cex-crouzeix-raviart-below-trace-threshold` |
| `na71-51-3a-example-schoberl-locator` | `ex-crouzeix-raviart-broken-gradient-norm` | fixed; nonfatal; `touched:51:ex-crouzeix-raviart-broken-gradient-norm` |

The nine closed rows were appended using the ledger tool’s serialized append-and-render transaction at `caught_at_stage: "3a-adjudicate"`. These are mathematical title, citation and sign defects; no mechanical failure was recorded as a defect. The generated ledger view was refreshed.

### Raw source comparison

Reader-pre/post snapshots use raw file SHA-256 (not the verification-excluded item guard). At review start all five touched sources matched their post-reader raw hashes exactly; those source bytes remain unchanged. The continuous-Poincare source matched its unchanged pre/post hash before the local title/source repair.

| Item | Reader-pre raw SHA-256 | Reader-post raw SHA-256 | Final raw SHA-256 |
|---|---|---|---|
| `lem-crouzeix-raviart-continuous-poincare` | `70c66c1922bf3139fe6cb7d290582c70fd402df446c7f92bb5f6b541bbb89b0e` | `70c66c1922bf3139fe6cb7d290582c70fd402df446c7f92bb5f6b541bbb89b0e` | `b992a034b0e7ba10387f5f0cef7e1a021b3800c358711e99ba122201eab21549` |
| `cex-crouzeix-raviart-below-trace-threshold` | `dff185e5d1248b1f0bb429bdeb0a38d553344aeaf7bb853cb20977140983575b` | `840b41b5e2d1a0f537dca9958df5e5f8b593dbbb2104d90f299a18d5bde67fa0` | `840b41b5e2d1a0f537dca9958df5e5f8b593dbbb2104d90f299a18d5bde67fa0` |
| `ex-crouzeix-raviart-broken-gradient-norm` | `7258b4b20b8cb5dfe2d87947d84aa7f21852351917391927f8edc6d3fd76d249` | `aed50bc446f947bdd932630a24b25dcb6bcbea7d9d789c29af9a6a852a671b9e` | `aed50bc446f947bdd932630a24b25dcb6bcbea7d9d789c29af9a6a852a671b9e` |
| `lem-crouzeix-raviart-comparison-norm` | `004cce2c26e5f87c1f425134a2364adb92f8dbea4cc89529f58fd2b64d5b6417` | `115b6084987dece68a36bdfa2a6778957634b52820b67e671f5268dda6aeb0f7` | `115b6084987dece68a36bdfa2a6778957634b52820b67e671f5268dda6aeb0f7` |
| `thm-crouzeix-raviart-discrete-poincare` | `8b4b506b3c9101905dafeb3361ff649bf3bdd34e0d02c2f3200faab1c56daf9a` | `13bd40b5d161da8ab73c583f66957ddb9348c013dff9400eca170060ba5802e8` | `13bd40b5d161da8ab73c583f66957ddb9348c013dff9400eca170060ba5802e8` |
| `thm-crouzeix-raviart-l2-error-estimate` | `3472ada15191336709c5446952b2abd1936c717e84bfa9b8519bc799c7129c37` | `2df03ac4b5245b5b68b67cca7656c42ef0f629c2c8ae6ceb9f52ac9cea72bfad` | `2df03ac4b5245b5b68b67cca7656c42ef0f629c2c8ae6ceb9f52ac9cea72bfad` |
| `lem-crouzeix-raviart-consistency-defect` | `8b96a7fcea8eb72241835cb5f9f8de4c53c7c350ef7f2f8315f1c5ec084a6cf1` | `8b96a7fcea8eb72241835cb5f9f8de4c53c7c350ef7f2f8315f1c5ec084a6cf1` | `cbaf53b98f7ec6741ad2f839f0dbcea72669477109f35433abfac58038ab2bc0` |

### Sources and scope limits

Primary literature opened directly: [Guermond Chapter 36](https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf), equations (36.4)–(36.11), Proposition 36.2, Lemmas 36.1, 36.4, 36.6, 36.8–36.10, Theorems 36.11 and 36.13 and Remark 36.12; [Schöberl §25.2](https://jschoeberl.github.io/iFEM/FEM/nonconforming.html), lines 247–350; [Guermond Chapter 3](https://people.tamu.edu/~guermond/M661_FALL_2025/chap03.pdf), §3.3/Lemma 3.27 and Exercise 3.2; [Laugesen §3.10](https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf), Theorems 3.17–3.18 and proofs. Precise numbered-result locators identify the cited statements; source proofs were compared with the locally authored arguments rather than substituted for them.

Every routed carrier and every directly cited dependency interface needed by its proof was read. This was not a new audit of the entire recursive published library. Published content stayed read-only. No defective published item was established, so no published-consumer ledger entry or lock was needed. The batch cross-dependency input now records the actual energy/Strang and indirect L2 uses and retains the prior escalation and explicit owner resolution of the old pending-precheck hold. The current input was merged with `node tools/frontier-dependency-ledger.mjs refresh --run numerical-analysis-remaining-71-2026-10-17` (exit 0). No owner escalation was cleared by inference.

### Local checks and handoff

- Initial risk report: 23 items routed, 15 HIGH/CRITICAL reviews required, zero tool errors.
- Reflow on all seven handoff item paths: unchanged.
- Precheck on those seven paths: 7 checked, 0 failures.
- Strict proof-contract check on batch 51: 23/23 items checked, 0 errors, 0 warnings.
- Rendercheck on the same seven paths: passed real YAML and KaTeX parsing.
- Risk report with `--require-reviewed`: all 15 required reviews complete; 0 errors across 23 items.
- Final single batched `node tools/proof-layout.mjs` invocation, after all item edits and reflow, covered continuous Poincare, consistency defect and all five reader-touched items: 7 items, 25 steps, 0 defects.

No mathematical uncertainty or unresolved prerequisite remains in this review. No judge, stamping, dispatch, certification, engine transition or full gate battery was initiated. The engine owns subsequent hashes and gates. Both task-named output files are complete.
