# Batch 44 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-44`. Local adjudication complete. Scope: three touched carriers, five reader published findings, twelve HIGH/CRITICAL risk reviews; no refuter findings or page decisions. Published items remain read-only.

## Completed item reviews

### thm-zero-initialized-gd-selects-minimum-norm-least-squares

Read steps 1.1–4.1 and all four exact supplier interfaces. X=0 gives the unique norm-zero minimizer; for X nonzero, kernel coordinates remain zero, positive eigenvalues give factors in [0,1), including eta=1/lambda_max. The finite-coordinate limit solves the normal equation and is orthogonal to ker X; Pythagoras proves uniqueness. No infinite choices or full-rank assumption. Published algorithm inline-link defect is editorial and does not affect the fixed-step recurrence.

### lem-clarke-euler-identity-for-homogeneous-margins

Read steps 1.1–3.1 with the Clarke definition. Scaling by c>0 bijects differentiability points and scales gradients by c^(L-1); limits, convex hulls and closure preserve this equality. At nonzero theta the Euler pairing passes through gradient limits by continuity and through convex closure by linearity. All L>0 and c>0 are admitted; theta=0 is not asserted. No chain-rule assumption is silently needed for this elementary radial calculation.

### ex-underdetermined-linear-system-gd-minimum-norm

Read Verification 1.1–3.1 and the reviewed selector supplier. Eigenvalues are 2,0, eta=1/4 satisfies the bound; a_(k+1)=a_k/2+1/4 from a_0=0 gives (1-2^-k)/2, including k=0. The affine minimizer line has squared norm 1/2+(w1-w2)^2/2. Thus both explicit trajectory and unique minimum-norm limit are correct.



### def-margin-kkt-and-mfcq

Current raw hash equals the routed post hash; authenticated preimage differs only by the final source-sign Remarks paragraph. Independently checked the full Definition: all multipliers and subgradients have the correct signs, feasibility makes complementarity summands nonnegative, and strict MFCQ is universal over active subgradients. The added note is accurate (Lyu–Li PDF pp. 21–23, C.2/C.7). Decision: reviewed_no_defect, audit_enrichment, no defect row; no mathematical interface change or affected consumer.

### lem-clarke-sum-chain-rule-for-exponential-risk

Steps 1.1–3.1 reviewed against the two Clarke/margin definitions and exact strict-separation Statement. exp(-q) and q have the same differentiability points via the smooth inverse -log; continuity fixes the scalar factor in gradient limits. Finite Minkowski sums are compact convex, support functions add, and strict separation proves the inclusion in the correct direction. The finite intersection of full-measure chain-rule times supplies the every-subgradient arc identity and loss derivative -||theta_dot||^2. No measurable selection is needed for a pointwise a.e. calculation.

### lem-recursive-hard-margin-comparison-trajectory

All five long steps reviewed with hard-margin, compactness and Farkas suppliers. Farkas orientation gives a norm-decreasing feasible perturbation if the active representation fails. Averaging finite support witnesses makes S_m coefficients strictly positive; a zero convex combination of next projections would enlarge S_m, so recursion remains separable and removes a nonzero orthogonal subspace at each stage. Coercive finite-dimensional exponential potentials give c_m; the correction system is backward triangular with positive definite diagonal blocks. The summability test has first exponent above one, covers arbitrary later exponents, telescoping discretization, discarded data, crossed corrections and quadratic Taylor remainder. a_k*epsilon_(k,m)=a_m cancels every nonsummable term. Logistic error is bounded by t^-3/2 from comparison margins >=3 log(t)/4. M=1 and d=1 have empty correction sums. The proof is local, not an invocation of the paper appendix.

Level 2 review complete.

### lem-approximate-margin-kkt-limit-under-mfcq

Read steps 1.1–3.1 and exact Clarke, MFCQ and Euclidean compactness interfaces. Empty active set forces theta*=0 from inactive slack bounds, so zero multipliers give KKT. Otherwise compact active subgradients and upper semicontinuity in direction -v give a uniform positive pairing near theta*. Complementarity bounds inactive multipliers; dotting stationarity with v bounds the active sum. All witnesses lie in one finite box. Closed-graph and continuity conditions make nonempty K_m nested compact sets. Their intersection gives one exact tuple without choosing a sequence. Feasibility and nonnegative aggregate errors are preserved.

### lem-homogeneous-clarke-flow-margin-monotonicity

Read all five steps and exact suppliers. phi is positive and nonincreasing; phi<1 forces positive margins and nonzero radius. Euler gives <theta,v>=L*phi*mu and mu=z+entropy>=z>0. Cauchy–Schwarz yields nonnegative smoothed-margin derivative. Compact sphere bounds normalized margin above; initial smoothed margin bounds it below. A positive loss limit contradicts that lower bound. The reader replacement in 5.1 correctly excludes bounded-radius subsequences using continuous margins on a compact ball, yielding r->infinity and vanishing log(N)/r^L error. N=1, arbitrary L>0 and the a.e. derivative/absolute-continuity passage all work. Prior unbounded-to-divergent wording is nonfatal: step 2.1 already proves strict radial monotonicity. The repair makes the argument explicit; no Statement or dependency changed.

### lem-local-margin-minimum-satisfies-kkt-under-mfcq

Read all five steps with Clarke support function, finite compactness and exact strict separation. Convex hull of the finite union of compact convex constituent subdifferentials is compact via grouped coefficients and their simplex. Separating 0 from this hull supplies uniform strictly negative directional derivatives for objective and active upper constraints, hence simultaneous local feasible descent, contradicting local minimality. Grouped Fritz-John coefficients sum to one; the MFCQ negative direction for upper constraints excludes alpha0=0. Empty active set directly has alpha0=1. Division gives nonnegative margin multipliers and exact complementarity. No unproved nonsmooth multiplier theorem is invoked.

### thm-separable-logistic-gd-selects-hard-margin-direction

Read every step, all ten declared suppliers and the current polynomial-null proof. Logistic Hessian bound lambda_max(XX^T)/4 gives exactly eta<8/lambda_max. The exponential branch assumes local smoothness only on update segments to prove loss->0; convexity bounds Hessians on actual-to-comparison segments by K times the maximum endpoint loss, giving eventual nonexpansiveness without assuming comparison-region membership. Summable comparison defects then bound the full recursive residual for arbitrary initialization. Farkas gives nonnegative active multipliers. Finitely many proper Gram/affine determinants and multiplier numerators exclude degeneracies; orthonormal columns witness nonzero numerators. Countable Choice is explicitly inherited only by polynomial-nullness. Staircase data realize every iterated-log depth; n=1,d=1 and initialization off the data span are covered. No general-position hypothesis is imposed on the all-data statement.

### ex-degenerate-hard-margin-support-vector

Read both steps and all four suppliers. (1,0) separates both data. w1>=1 forces squared norm>=1 with equality only at (1,0). Both margins equal one, linear Clarke subgradients are (1,0),(1,1), and stationarity forces lambda1=1,lambda2=0. Thus zero dual weight for an active margin is possible; deleting that constraint preserves the minimizing vector. No claim that active multipliers are always positive is used.

### lem-homogeneous-margin-constraints-satisfy-mfcq

Both proof steps and all three suppliers checked: feasibility excludes zero by L>0; v=theta gives pairing L on every active Clarke margin subgradient; empty active set is vacuous. Reader added only the source-sign caveat in references. The nested wikilink inside the external reference label was separated into its own paragraph, preserving both links and all mathematical text. Decision amended_repair for this nonfatal reference-presentation correction; repair_confidence 1. No Statement/Definition change, no consumer repair required.

Level 3 reviews complete. No substantial missing prerequisite or mathematical blocker identified. 

### lem-homogeneous-clarke-flow-produces-approximate-margin-kkt-points

Read steps 1.1–5.1 and all seven exact suppliers after the level-3 reviews. Sphere compactness/local boundedness gives B and scaling gives ||h_i(theta)||<=B*r^(L-1). Euler implies v nonzero and beta in (0,1]; the derivative estimate controls weighted integral of beta^-2-1 and direction variation by log-radius variation. For each tolerance separately, pick a late cluster visit and the unique log-radius increment 1/k; finite total smoothed-margin increase supplies a nonexceptional time with beta^-2-1<=1/k^2. Feasible normalization is close to the target by the chosen direction/radial bounds. Scaling h_i by q_min^(-(L-1)/L) and lambda_i=q_min^((L-2)/L)*r*a_i/||v|| yields exactly the claimed stationarity residual. With d_i>=0, sum p_i*d_i<=N/e bounds complementarity by N/(e*L*gamma0^(2/L)*mu), tending to zero. No sequence selection or unjustified convergence of the whole direction is asserted.

### thm-homogeneous-gradient-flow-limit-satisfies-margin-kkt

Read both steps and all five exact supplier interfaces after completing their reviews. A cluster point has q_min>0 and norm one; alpha=q_min(u*)^(-1/L)>0 makes alpha*u* feasible by positive homogeneity. The producer lemma supplies nearby feasible approximate KKT witnesses for each tolerance with both errors controlled. Homogeneous MFCQ supplies the qualification at this same rescaling, and the approximate-limit lemma yields exact KKT with no additional choice. The conclusion concerns all cluster points and does not assert unique directional convergence or global margin optimality.

All twelve mandatory risk reviews complete. No in-scope TikZ/tikzcd diagrams occur in the routed items. The external network definition diagram has exactly the four input-to-hidden and two hidden-to-output arrows of the stated fully connected two-input/two-hidden-node scalar-output model; it is not a proof premise.

## Published findings

All five reported inline-reference defects are independently confirmed **nonfatal**. Their content is mathematically sound for the owned uses. Owner reference-relocation maintenance remains pending; no published repair or whole dependency-closure audit is claimed. The countable-choice finding reuses its existing closed defect row to avoid duplicating the same defect.

### reader:44:1 — alg-gradient-descent

Independently read the current complete Definition and its argument/context: The complete algorithm Definition embeds wikilinks to def-jacobian-matrix-and-gradient and def-real-frechet-derivative-on-real-and-complex-matrix-spaces in its opening paragraph, and a link to lem-armijo-backtracking-terminates-for-strict-descent-directions in its closing paragraph. The uninterrupted-statement rule requires these links after the complete Definition in a Definition references section. The fixed-step recurrence is well typed on R^d, its positive constant step is admissible, and the owned least-squares proof directly differentiates its quadratic. The algorithm stopping convention is reconciled by its explicitly stated stationary fixed-point update map. The reported interruption is real but editorial, not a false mathematical claim; confirmed_nonfatal. Published content remains read-only. Owner must replace inline link markup by plain terms and preserve every link after the complete section in the matching references section, one paragraph and source line per reference. Current raw SHA256 43e234b0398764885612fb7f2fc0749b48471acb7af5be727e15413c86eeaf57. Routed observed fingerprint 8827291e388cf34fc48c8d0e41e43da53d3e56a6d7c212a849a30d81a2a873eb is preserved; no equality with current raw bytes is asserted. Closed bounded disposition: `machine-learning-all-101-2026-10-19-3a-b44-published-format-1`.

### reader:44:2 — def-countable-choice

Independently read the current complete Definition and its argument/context: The complete Definition embeds wikilinks to def-choice-function and def-countable in the equivalence sentence. The uninterrupted-statement rule requires both links after the complete Definition in a Definition references section. The indexed nonempty-set selection assertion and at-most-countable-family formulation agree using least preimages; the empty family has the empty choice function. The discrete GD theorem assumes Countable Choice precisely for its polynomial-null-set supplier in step 3.1. The reported interruption is real but editorial, not a false mathematical claim; confirmed_nonfatal. Published content remains read-only. Owner must replace inline link markup by plain terms and preserve every link after the complete section in the matching references section, one paragraph and source line per reference. Current raw SHA256 28c60d2bef81c4dc87391283f7224d87e51eaa1e2106bb41d4f3c8157d80b006. Routed observed fingerprint 5fee877444a0fceb36220d190d033f1ebd76622da8692f803242e28a42f3718b is preserved; no equality with current raw bytes is asserted. Closed bounded disposition: `ml101-b27-3a-published-format-11`.

### reader:44:3 — thm-strict-separation-of-a-point-from-a-closed-convex-set

Independently read the current complete Statement and its argument/context: The complete Statement ends with an inline wikilink to def-supporting-hyperplane-to-a-convex-set. The uninterrupted-statement rule requires this link after the complete Statement in a Statement references section. The full two-step projection proof gives a=x-p and b=<a,p>, with strict gap ||a||^2. Its nonempty closed convex hypotheses hold for the compact Minkowski sum in the chain-rule lemma, and for the finite compact convex hull in the local KKT lemma. The reported interruption is real but editorial, not a false mathematical claim; confirmed_nonfatal. Published content remains read-only. Owner must replace inline link markup by plain terms and preserve every link after the complete section in the matching references section, one paragraph and source line per reference. Current raw SHA256 619450ae60e98988fca10bfaa203ff66f8b3496fae0667542a80dfc798233d90. Routed observed fingerprint 3ef21297291bca2ff59c3107175f5b63832ab61aec95d02178bcccfe7b9dfe15 is preserved; no equality with current raw bytes is asserted. Closed bounded disposition: `machine-learning-all-101-2026-10-19-3a-b44-published-format-3`.

### reader:44:4 — thm-heine-borel-rn

Independently read the current complete Statement and its argument/context: The complete Statement embeds item links in the opening sentence and its numbered claims, including links to lem-metrics-on-rn and the metric/compactness definitions. The assigned consumer reaches this published theorem through thm-euclidean-heine-borel-pseudocompactness-and-extreme-values. Move the links after the complete Statement into Statement references. The complete bisection proof uses a deterministic left-half rule, nested coordinate intervals and shrinking diameter, with no infinite selection; the empty subset is handled separately, n>=1 is explicit. The owned hard-margin compact sublevel and flow spheres/balls are closed bounded nonempty finite-dimensional sets, matching its interface through the Euclidean equivalence theorem. The reported interruption is real but editorial, not a false mathematical claim; confirmed_nonfatal. Published content remains read-only. Owner must replace inline link markup by plain terms and preserve every link after the complete section in the matching references section, one paragraph and source line per reference. Current raw SHA256 33799c8d7f209d4ce2856473c5ff2b6cf8e1c6e679c11d3f82642b9e06f2c3bc. Routed observed fingerprint 5bcbd768125132ceb96653dfeca8ac61db512b4cb40884be868dfb867e3ecfa6 is preserved; no equality with current raw bytes is asserted. Closed bounded disposition: `machine-learning-all-101-2026-10-19-3a-b44-published-format-4`.

### reader:44:5 — thm-compactness-under-continuous-maps

Independently read the current complete Statement and its argument/context: The complete Statement embeds item links throughout its introductory sentence and all three claims. The assigned consumer reaches this published theorem through thm-euclidean-heine-borel-pseudocompactness-and-extreme-values. Move the links after the complete Statement into Statement references. The full proof pulls back open covers, makes only finitely many selections, proves extrema via rays, and uses closed maps for the Hausdorff clause. Nonemptiness is explicit for extrema. Assigned attainment uses continuous squared norm or margins on nonempty compact sublevels/spheres/balls through the Euclidean equivalence theorem. The reported interruption is real but editorial, not a false mathematical claim; confirmed_nonfatal. Published content remains read-only. Owner must replace inline link markup by plain terms and preserve every link after the complete section in the matching references section, one paragraph and source line per reference. Current raw SHA256 f03a1501312d1022f1ae137f6b53d509b67fc96999c583af78eaa9e26a15c48a. Routed observed fingerprint eceed74a85438d9eedd40cb53ee235472f00bd618b88c4fbabe46c74b5885572 is preserved; no equality with current raw bytes is asserted. Closed bounded disposition: `machine-learning-all-101-2026-10-19-3a-b44-published-format-5`.

## Historical comparison and decisions

All three current carriers initially matched their exact reader-post raw hashes. The authenticated preimages under `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/items/` matched each routed pre raw hash. Full diffs show only the source-sign paragraph, radius argument and MFCQ source annotation described above. No missing-preimage disposition or historical uncertainty waiver was used. Final decisions are the eight exact scope obligations: one reviewed_no_defect audit enrichment, one accepted_repair, one amended_repair and five confirmed_nonfatal findings. Completed repairs carry repair_confidence 1. No page or refuter obligations exist.

The MFCQ amendment changes only reference presentation; original Statement, Definition, dependencies, manifest and proof contracts are unchanged. No consumer mathematical interface changes, judge invalidations or provenance changes follow. The flow reader repair likewise preserves its Statement. Twelve risk_review records were added to the owning proof contract; the existing reader Step 5.1 derivation remains current.

## Primary source checks and limits

[Hastie et al., §2.2, Proposition 1, PDF pp. 8–9](https://arxiv.org/pdf/1903.08560) gives the zero-start recurrence and the same positive step bound. The local spectral proof additionally treats X=0 explicitly. [Cornell Lecture 12, pp. 1–2, sections 2–5](https://www.cs.cornell.edu/courses/cs3780/2026sp/slides/lec12.pdf) supplies the gradient, normal equations, orthogonal decomposition and minimum-norm interpretation; its data matrix is transposed relative to the local theorem and its averaged loss has a different scalar normalization. The local proof derives its own exact gradient and step threshold.

[Soudry et al., Theorem 3, Appendix B and Appendix C, PDF pp. 4–5 and 25–27](https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf) checked for the all-data versus almost-everywhere distinction, zero-dual-support recursion and correction identities. The current local proof supplies its own finite-dimensional recursion, summability and nonexpansive comparison; this review does not claim to have reconstructed every case in the source Appendix C.

[Lyu and Li, Theorem B.2, Definitions C.1–C.2, Theorem C.4, Lemma C.7 and Theorem 4.4, PDF pp. 7, 19, 21–23](https://arxiv.org/pdf/1906.05890) checked for homogeneous scaling, KKT approximation and the source-sign qualification. The displayed upper-constraint MFCQ sign and C.7 Euler pairing conflict; the local lower-constraint convention and direct proofs avoid that issue. No source theorem is treated as a replacement for an authored local argument.

Current external interfaces read in full where used include the four least-squares suppliers, Euclidean compactness/attainment equivalence, Farkas alternative, strict separation, countable choice, network graph definition and polynomial-null-set lemma. This is the dispatched review, not a whole-library or every-transitive-supplier audit.

## Focused checks and handoff

- Initial risk routing: 16 proof-bearing items, twelve HIGH/CRITICAL; completed risk reviews before final handoff. Final `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-44.proof-contracts.json --require-reviewed`: 0 errors.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-44.proof-contracts.json --strict`: 16/16 checked, 0 errors, one existing `shotgun-bracket` warning for recursive proof 1.1. That step actually constructs the recursion using all four cited suppliers; no invalid inference was found.
- Reflow on the alpha-edited MFCQ item: unchanged. Precheck on all three touched paths: two proof-bearing items checked, 0 failures; the definition has no proof to check. Rendercheck on those three paths: pass.
- After the final item edit and reflow, ran exactly one batched final `node tools/proof-layout.mjs items/def-margin-kkt-and-mfcq.md items/lem-homogeneous-clarke-flow-margin-monotonicity.md items/lem-homogeneous-margin-constraints-satisfy-mfcq.md`: 3 items, 7 steps, 0 defects.
- Exact obligation coverage checked programmatically: 8/8, no duplicates or extra decisions. Each reader finding references exactly one closed 3a-adjudicate ledger row. Six new rows appended through the serialized defect-ledger tool; the existing countable-choice row was reused. Both completed repairs carry repair_confidence 1.
- Published ledger merged while holding `research/.published-consumer-ledger.lock`, released only this worker's lock, preserved prior histories and maintained one classification row per affected ID. A-P reflects four new queue entries (two moved from bounded no-repair-needed entries, two new IDs); countable choice was already A-P. Published bytes unchanged.
- Updated owned cross-batch interface evidence and the frontier dependency notes, then ran `node tools/frontier-dependency-ledger.mjs refresh --run machine-learning-all-101-2026-10-19`: refreshed and deduplicated. Other owned rows preserved; no withdrawn item removed.

No substantial missing prerequisite or unresolved mathematical escalation. Published editorial maintenance remains pending with the owner. No judge, stamp, publication, dispatch, commit or engine gate cycle was performed. The engine owns the next hash binding and gate battery.
