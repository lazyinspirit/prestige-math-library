# Batch 67 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-67`.

Scope: nine touched obligations; no reader/refuter findings, page decisions or foreign gates. All fourteen current item files match the post-reader raw SHA-256 snapshot. The nine routed files differ between the pre/post snapshots. Reader and refuter reports were read as evidence. No inherited acceptance is used. Reviews below follow the generated dependency order.

### def-reversed-transition-kernels-for-diffusions

Checked Definition and Verification 1.1–3.1 against the probability-kernel definition and Tonelli Statement. Strict positivity makes the ratios pointwise defined; the marginal identity gives mass one; forward Chapman–Kolmogorov cancels the intermediate marginal in reverse composition. Empty targets give zero and equal times use the Dirac kernel, including adjacent equal times and endpoints. The supplied densities determine versions, so no choice is used. No hyperlinks interrupt the Definition; no diagram is needed.

Disposition: risk_only.

### lem-continuous-local-martingale-quadratic-variation

Read Statement and all steps 1.1–6.1, with the stopping-time, martingale, discrete optional-sampling, orthogonality, Doob, L2-completeness, convergence and covariation interfaces. Accept the reader addition of finite-grid stopping and uniform-integrability passage. Continuity permits the bounded hitting stops and terminal limit even for localizers tending to T. The identity M²−M0²=2I+Q gives the uniform L2 bound; common-refinement orthogonality, Cauchy–Schwarz and bounded oscillation give convergence, and endpoint sums give monotonicity. Polarization preserves the product compensator; finite-variation cross sums vanish. For the product formula, a finite-variation integrand A against a continuous path N can also be handled directly by summation by parts, A_tN_t−A_0N_0−∫N dA; thus no unstated adaptedness of A,C is needed for its left-sum assertion. The constant-process and zero-martingale cases hold; uniqueness is up to indistinguishability. AC is inherited from conditional expectation and L2 interfaces. van der Vaart §5.8, Theorem 5.64 supplies source context, not a substitute for the local construction. No diagram or statement-link repair is needed.

Disposition: accepted_repair.

### lem-density-translation-factorization

Checked Statement and both proof steps against translation invariance and Tonelli. The nonnegative Borel test-function pushforward avoids any unjustified differentiable-density substitution: fix a,c, translate b=d+c, then integrate c to mass one. This proves the full joint density and hence independence, including densities vanishing on sets and all stated positive dimensions. No extra conditioning or positivity hypothesis is needed. Accept the reader clarification of step 1.1. Anderson Lemma 4 is contextual; the local argument is complete. No diagram or statement hyperlinks.

Disposition: reviewed_no_defect; change_kind: audit_enrichment. The exact pre/post comparison shows sound original reasoning with explicit audit detail added; no defect row is invented.

### lem-elliptic-local-martingale-brownian-representation

Checked all six steps, continuous coefficient assumptions, and the cited predictable, L2, product-measure, Brownian-covariation and vector Lévy interfaces (including the latter proof). Bounded inverse left-step matrices converge pathwise uniformly; stopped integrable bracket energy gives the isometry and maximal Cauchy bound. Products pass in L1 and energy Cauchy–Schwarz controls compensators, proving identity bracket. Stopping B_i²−t at its bounded hitting times is justified by the reviewed quadratic-variation supplier; the L2 bound yields the true martingale needed to append independent auxiliary Brownian motion beyond T. The product filtration and cross-boundary partition estimate meet the infinite-horizon Lévy statement. Left-step limits give an original-adapted version even if continuity was initially only almost sure. The zero clock at time zero and d=1 cases hold; invertibility excludes singular covariance. Accept reader stopping and citation repairs; no statement or diagram repair needed.

Disposition: accepted_repair.

### lem-predictable-elliptic-martingale-brownian-reconstruction

Read Statement, facts and every step 1.1–4.1. Predictability rather than continuity is sufficient: interval-generator indicators are dense under the stopped trace-bracket measure, whose mass is at most n. The pi-lambda and simple approximation interfaces justify the energy construction, not a dt×P approximation. Bounded stopped product-compensators justify elementary isometry; maximal L2 limits and energy Cauchy–Schwarz justify products and covariance. Right-continuous completion preserves continuous terminally closed martingales by L1 event tests. Original predictable approximants and a summable diagonal give an original-adapted continuous version, so augmentation does not add an assumption. Checked the vector Lévy proof: its event-test characteristic-function argument applies to any finite set of times in [0,T]. Recovery M=∫σdB follows from the explicit elementary associativity and exact transformed energy identity, not an unstated general associativity theorem. Finite pathwise energy makes stops reach T eventually; inverse boundedness excludes degeneracy. AC and all exceptional-event choices are declared. Accept the added stopping citation.

Disposition: reviewed_no_defect; change_kind: audit_enrichment. The exact pre/post comparison shows sound original reasoning with explicit audit detail added; no defect row is invented.

### lem-reversed-kernels-and-generator-identity

OPEN substantial prerequisite: Proof 1.2 requires locally uniform near-diagonal control of L*_r P*_{t-h,r}(p_{t-h}φ) as both interval endpoints vary; 2.1 requires an integrable bound for the kernel-integrated partition errors. The Statement permits differentiation under individual transition integrals and integrability of their derivatives but does not provide either uniform estimate. DCT and Fubini require, rather than establish, such bounds. Bayes factorization and adjoint algebra are sound. Attempted closure via the displayed Duhamel formula and telescoping stops at this missing bound. Anderson §§3–4 uses stronger augmented-density uniqueness assumptions and §5 leaves trajectory identification incomplete; Tang–Zhao Theorem 2.1 is explicitly heuristic. A substantial proved adjoint evolution/reversal prerequisite, or justified uniform estimates under the original hypotheses, is required. Owner must resolve supplier first, then the general reversal theorem, local counterexample use, and batch-68 sampler. Existing causal defect ml101-b68-reverse-generator-domination remains open; no duplicate or closed repair is invented. This supersedes the preliminary acceptance before the cross-batch alert was assessed.

Disposition: escalated.

### thm-anderson-reverse-time-diffusion

Read all seven proof steps and checked the exact Brownian, usual-filtration Itô and covariation interfaces plus the local subtraction-factorization lemma. Independently checked Anderson §§3–4, printed pp.317–322, including the full augmented-density argument. The cross derivative cancels the c drift for p_tφ, and conditional uniqueness is separately assumed for the shifted Gaussian candidate; neither marginal uniqueness alone nor pairwise independence substitutes for it. At s=t0 the noise is deterministic, so step 3.1 correctly avoids applying a joint Lebesgue-density lemma. For step 4.1 the increment is F_t-measurable, future Brownian paths are independent of F_t, and independence from X_t therefore yields independence from their joint pair. Strong restart then covers the entire reversed past. The right-minus-left covariation correction and time reversal give −b+div(a)+a score, with positive σ in the reversed equation under the chosen sign of B. Accept explicit restart, increment, initial measurability and coefficient-energy hypotheses; the theorem retains its conditional density-uniqueness scope and bounded initial state. No diagram needed.

Disposition: accepted_repair.

### ex-stationary-ornstein-uhlenbeck-reversal

Read all three verification steps and the exact deterministic Gaussian-integral, Gaussian-law, Lipschitz SDE, Itô, path-space cylinder and measure-uniqueness interfaces. The integrating-factor kernel has mean μ+e^(−θh)(x−μ) and variance q(1−e^(−2θh)), q=σ²/(2θ). Completing the square proves detailed balance, so reversing a finite density product proves the full reverse Markov law. Equality of continuous path laws transfers the reconstructed Brownian functional Γ, including independence from the natural path past, and rearranging Γ proves the reverse SDE. The score −2θ(x−μ)/σ² gives precisely the same OU drift. Positive θ,σ ensure normalization; h=0 uses the identity kernel. This unbounded stationary Gaussian example does not invoke the bounded-start Anderson theorem. No diagram or statement hyperlinks.

Disposition: risk_only.

### def-bayes-reversed-gaussian-smoothing-kernels

Checked all three verification steps against the current compact-support Gaussian-law definition, probability-kernel and Tonelli interfaces. Positive-time Gaussian convolution is finite and positive, so ratios normalize pointwise. At v=T the numerator integrates against μ, not a fictitious Lebesgue density p0; forward Chapman–Kolmogorov proves composition also with that endpoint posterior. Equal times, empty targets, R=0 (Dirac μ), d=1 and singular initial μ all remain valid. AC is inherited by the Gaussian supplier. No diagram or interruption by links.

Disposition: risk_only.

### thm-markov-diffusion-reversal-by-bayes-kernels

OPEN: independently reviewed all proof steps. Reader clarification correctly uses finite initial state, usual filtered Brownian increment independence and pathwise coefficient energy, and the predictable reconstruction supplier handles Borel σ. Coordinate and coordinate-product cutoffs, finite-variation uniqueness and inverse-energy identity are sound conditional on the compact-test martingale prerequisite. However Proof 2.1 invokes lem-reversed-kernels-and-generator-identity whose Proof 1.2/2.1 lacks uniform near-diagonal estimates and kernel-integrated domination under its actual hypotheses. Attempted closure via its Duhamel/telescoping calculation fails at that limit; DCT and Fubini supply no bound. Anderson §§3–5 and Tang–Zhao Theorem 2.1 do not close this local premise. Owner must supply a proved reversal/adjoint-evolution prerequisite or complete regularity/estimate repair, then review batch-68 alg-predictor-corrector-score-sampling. No source change or repair confidence is claimed.

Disposition: escalated.

### cex-state-dependent-diffusion-score-only-reversal

OPEN supplier prerequisite: independently checked the compact bump diffeomorphism h, bounded Lipschitz coefficients b=h″/2 and σ=h′ composed with h inverse, positive Gaussian-transformed marginals/transitions, a′=2h″, and the compact-test witness with derivative 1 and second derivative 0. Restriction to [ε,T] correctly avoids the singular initial point mass, and identity outside the compact region gives Gaussian-tail estimates for this example. Its conclusion is supported by these concrete computations, but step 4.1 invokes the currently unclosed general reverse-generator lemma. Owner supplier-first closure or a fully authored independent transformed-Brownian reversal proof is required before completing this item risk review. No claim that the score-only formula is valid; the explicit nonzero divergence witness remains present.

Disposition: risk_only.

### ex-bounded-start-anderson-reversal

Checked both verification steps against the current Anderson theorem and the exact Gaussian convolution/forward-equation interfaces. Compact support makes X0 bounded and square integrable; the specified usual augmentation has filtered independent Brownian increments, and X_r=X_s+(W_r−W_s) is the required measurable strong restart. The unique smooth marginal, augmented joint and conditional forward-density premises remain explicit assumptions, not consequences of strong SDE well-posedness or of the compact-support density theorem. Substitution b=0, σ=I gives plus score drift at positive forward times. At t0=0 positivity is needed only wherever used along X0; no score at zero or across u=T is claimed. Accept the reader filtration and restart clarification. This example uses the separate Anderson augmented-density route, not the open general kernel lemma. No diagram or statement hyperlink defect.

Disposition: reviewed_no_defect; change_kind: audit_enrichment. The exact pre/post comparison shows sound original reasoning with explicit audit detail added; no defect row is invented.

### lem-reversed-smoothing-generator-and-martingale

Independently read all three proof steps and the actual positive-time Gaussian-density, score, Bayes-kernel, DCT and Fubini suppliers. Repaired step 2.1: replace the unsupported integrated partition-limit assertion with differentiation of the explicit heat convolution for r>u. The heat equation and compact-support integration by parts give ∂r K_{u,r}φ=K_{u,r}(Ltilde_r φ) exactly. On times at least ε, the compact test generator has a uniform bound C; normalization of K gives the same bound on this derivative. Integrate away from the diagonal, then let δ decrease to zero using the already proved approximate-identity limit. Bounded conditional Fubini proves the martingale identity. This closes the finite-time step without the general reverse-generator lemma or an unstated global remainder majorant. At the diagonal use identity kernels; no score at zero; R=0 and singular μ are allowed. Statement, dependencies and page inventory unchanged; contract derivation synchronized; no judge record existed. Closed nonfatal proof-gap row ml101-b67-gaussian-kernel-integrated-identity.

Disposition: risk_only.

### thm-gaussian-smoothing-reversal-on-truncated-time-interval

Read all five proof steps, every actual supplier statement, and the Gaussian score/density/endpoint proofs. Accepted the reader bounded-stopping fact, and amended its supporting branch by repairing lem-reversed-smoothing-generator-and-martingale step 2.1 with the exact heat-kernel derivative identity and uniform bounded test-generator argument (defect ml101-b67-gaussian-kernel-integrated-identity). Coordinate/product cutoffs identify bracket ∫g(T−r)²I dr; continuous paths exhaust the finite horizon. The continuous elliptic reconstruction applies to deterministic gI with bounded inverse. Brownian increment characteristic functions pass to completion and right-continuous augmentation. The recovery decomposition for this scalar deterministic coefficient follows directly by multiplying the defining left-step sums by g and taking their energy limits. The score derivative bound gives the stated Lipschitz constant and linear growth; X_T has finite second moment, so the strong SDE interface applies. Endpoint E|Xε−X0|²=dv(ε) and the coupling bound hold independently of scores at zero. This branch is independent of the escalated general kernel theorem. No Statement/Definition, dependency, status or diagram change.

Disposition: amended_repair.

## Historical binding and consumer review

All eighteen full archived pre/post sources for the nine touched items were hash-checked against the native snapshots. Preimages are under `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/items/`; reader results are under `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-reader-post/batch-67/sources/items/`. The complete relevant changes were compared. Current item bytes matched all fourteen native post-reader hashes before this adjudication. Only two item files now differ: the general kernel lemma's URL and the explicit Gaussian lemma's Proof 2.1. No historical-byte uncertainty is being resolved by inference from hashes alone.

The exact reader changes to density factorization, predictable reconstruction and the bounded-start example are audit enrichment of sound reasoning; their decisions are `reviewed_no_defect` with `change_kind: audit_enrichment` and empty defect lists. The three accepted repairs have their own closed causal rows: `ml101-b67-reader-bounded-stopping`, `ml101-b67-reader-elliptic-stopping`, and `ml101-b67-reader-restart-hypothesis`. The amended Gaussian branch references closed `ml101-b67-gaussian-kernel-integrated-identity`. Completed repairs have confidence 1.

Checked all direct reference/dependency consumers of the reader-changed interfaces by exact ID search. Quadratic-variation stopping is used by both reconstruction lemmas and the two SDE theorems; the explicit Gaussian theorem's use remains justified. The generic kernel lemma is used by the general reversal theorem and state-dependent counterexample, whose risks stay open. Anderson's only direct item consumer, the bounded-start example, supplies the deterministic restart map and stated usual filtration. The general theorem's outside direct consumer is batch 68 `alg-predictor-corrector-score-sampling`; its complete current Definition and reference application were read. Its clarified finite initial state, Brownian increment and coefficient-energy hypotheses match, but its reversal claim still depends on the open supplier. No outside repair was performed, and no sound consumer was edited merely for citing a supplier. The bounded-start example has no direct item consumer. There is no new Statement/Definition change in this adjudication, so no further interface propagation is created.

Existing `ml101-b68-reverse-generator-domination` is preserved open, with both home touched decisions escalated and the counterexample risk open. Its earlier consumer escalation is not erased. The attempted general adjoint/Duhamel closure, consulted sources and required owner action are recorded above. The Gaussian local repair is not evidence that the general hypotheses suffice. The broken Anderson host was corrected from `eva.fcien.edu.uy` to the working metadata host `eva.fcien.udelar.edu.uy`, under the already recorded nonfatal `ml101-b68-anderson-reference-host` disposition; no duplicate URL defect row is created. This citation-only correction does not close the analytic defect.

Contract maintenance: added the Gaussian supplier's new F1/F2 step-2.1 uses, synchronized its exact derivation, and refreshed the counterexample's stale F3 Statement quotation to the current general lemma. The latter is audit metadata, not closure of its open proof risk. Manifest strategies, dependencies and inventories already describe the same heat-kernel construction and remain unchanged. Both edited items already have ai-altered proofs and no judge records. Cross-batch consumer evidence and the frontier dependency ledger are updated without promoting historical readiness to current acceptance.

## Source evidence and presentation

Read [Anderson (1982)](https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf), Sections 3–5, printed pp. 317–324, including the augmented-density factorization, conditional increment calculation and conversion of backward integrals. The extra uniqueness premises matter to the bounded-start route. Section 5 does not provide a proved replacement for the open general local prerequisite.

Read [Tang and Zhao](https://arxiv.org/pdf/2402.07487), Theorem 2.1 and following discussion, PDF pp. 3–5; its derivation is explicitly heuristic. Its formula does not certify the unproved local transition limit. The OU calculation here was checked directly from its Gaussian laws.

Read [van der Vaart](https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf), §5.8 Theorem 5.64 and proof (printed pp. 80–82), the following bracket properties, and Lemma 5.77 and proof (printed pp. 85–86). These supply context for the local constructions; exact library interfaces and authored arguments supply the proof review. No claim to have independently read every source named in frontmatter or every transitive published proof is made. All forty-one direct external supplier Statement/Definition interfaces were read; the five draft Gaussian suppliers' proofs and the published vector Lévy proof were additionally read.

All fourteen statement/definition/example sections are uninterrupted by hyperlinks; references follow the complete sections. Neither assigned page has body prose, and both retain `page_layout: compact-v1`, inventories and draft status. No TikZ/tikzcd diagram occurs in scope, and the arguments need no added diagram. No published mathematical defect was identified, so no published ledger edit or lock was needed. No stable item ID, page or proposed withdrawal was removed.

## Checks and owner handoff

- Initial risk routing: exit 0, fourteen HIGH/CRITICAL items. Eleven final reviews are complete; the general kernel lemma, general reverse SDE theorem and state-dependent counterexample remain deliberately open.
- Final `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-67.proof-contracts.json --require-reviewed`: exit 1, exactly three missing-complete-review diagnostics for those open risks. No passing risk closure is claimed.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-67.proof-contracts.json --strict`: fourteen items, zero errors/warnings. The first attempt found newly added unmapped F1/F2 uses and a pre-existing stale F3 quotation; these were synchronized before the successful rerun. No defect row was created for mechanical diagnostics.
- Explicit two-item reflow: unchanged. Precheck: two checked, zero failures. Rendercheck: both edited files parse and render successfully.
- After the final item edit and formatter, the single batched `node tools/proof-layout.mjs items/lem-reversed-kernels-and-generator-identity.md items/lem-reversed-smoothing-generator-and-martingale.md` passed: two items, seven steps, zero defects. No item edits followed.
- Decision JSON parses with exactly nine unique owed obligations: three accepted repairs, three audit-enrichment reviews, one amended repair and two escalations. No reader/refuter/page/foreign-gate obligations are owed by this dispatch.
- Four new closed causal rows were appended through the serialized defect-ledger tool, which refreshed its generated view. The existing open general defect and prior nonfatal URL row were preserved.

Live engine status was recomputed from `.autopilot/machine-learning-all-101-2026-10-19` during review: the run is active at Step 3a, with batch 67 still awaiting adjudication coverage. Current git log begins `951a2e7a6d`. No old resume handoff supplied status evidence. No agent dispatch, judging, decision hash stamping, full gate battery, publication, push, commit or transition was performed. The engine owns the next mechanical actions. Owner resolution of the general reversal prerequisite and renewed affected-consumer review remain necessary.
