# Step 3a adjudication — batch 3

Run: `mathematical-statistics-foundations-37`; group: `batch-3`.

Scope has no touched items, page changes, reader findings, or refuter findings. No adjudication decisions are owed. Risk reviews proceed in the generated dependency order.

## Completed risk reviews

### lem-finite-dimensional-integral-jensen-for-convex-loss

Read all five steps and all 17 direct prerequisites, including supporting-hyperplane proof, closure lemma steps 2.1–3.1 (relative interior), and finite-valued subgradient proof. Finite integral forces full-measure finite domain; second-countability gives full-measure support. Separation places the barycenter in its closed convex hull; a supporting normal at a relative boundary would vanish on all support, contradicting its affine hull. The zero-dimensional case is equality; otherwise the finite convex restriction has a subgradient at b. Integrable affine minorant and null-set positive/negative parts yield Jensen without lower semicontinuity. Infinite loss integral is immediate. AC/countable choice explicitly carry supplier assumptions. Reader and refuter report no defects; independent review found none.

Sources: current local dependency statements and proofs; literature URLs in the carrier were not independently consulted. No mathematical edits or confirmed defects.

### lem-prior-and-model-kernel-define-joint-law

Reviewed steps 1.1–4.1 and all nine prerequisites. Kernel integration theorem applies to probability (finite) kernels; the section theorem applied to indicators gives measurable sections. J(empty)=0 and J(total)=1; disjoint sections and increasing finite sums prove countable additivity. Indicator identity extends by finite simple sums and three monotone-convergence applications to all nonnegative h, including infinite integrals. Empty prior/data spaces cannot satisfy the stated probability hypotheses. No standard-Borel or AC assumption is needed. Reader/refuter findings are empty; no defect found.

### def-bayes-and-minimax-risk

Reviewed full Definition and all eleven direct prerequisite statements, with kernel-integration and extended-order completeness proofs. Lift delta to Theta × X by ignoring theta; integrate L(theta,a) first against delta, then K lifted to retain theta. Rectangle preimages verify both lifted kernels, so risk is parameter-measurable. Nonempty Theta and action space give nonempty risks and a constant Dirac rule; extended-order completeness puts infimum/supremum in [0,infinity], even if all risks are infinite. No attainment is claimed and no arbitrary family is selected. No reader/refuter finding or independently identified defect.

### thm-randomization-does-not-improve-convex-action-loss

Reviewed all four steps and sixteen direct prerequisites. Kernel theorem makes norm moment and signed coordinates measurable on E0; finite vector coordinates yield a measurable barycenter. Closed action set makes E measurable, and a single fixed action gives a measurable extension independent of theta. The same E has full P_theta measure separately for each theta, so no uncountable intersection of exceptional sets is taken. Jensen hypotheses, including AC/countable choice, finite norm moment, convex extended loss and membership of barycenter, hold at every x in E. Null-set integration and monotonicity compare risks even when infinite. No defect found; no reader/refuter finding.

### ex-squared-error-risk-for-bernoulli-observation

Reviewed three verification steps and all four direct suppliers. Full-power-set Bernoulli masses theta and 1-theta are nonnegative and sum to one even at endpoints; identity estimator is measurable. Finite weighted-sum risk simplifies to (1-theta)theta^2+theta(1-theta)^2=theta(1-theta). Completing the square gives maximum 1/4 uniquely at 1/2 and zero at both endpoints. No integrability, choice or zero-times-infinity issue occurs. No defect found; reader/refuter findings empty.

### thm-bayes-rule-minimizes-prior-risk

Reviewed steps 1.1–4.1 and all sixteen direct prerequisites, including disintegration and Tonelli proofs. Standard-Borel parameter/data hypotheses and AC satisfy the disintegration interface in the correct direction (parameter given data). Lifted kernels remain probability kernels and coordinate-pairing rectangle preimages give product measurability of h_delta and q. For each fixed x, posterior and action laws are finite probabilities, hence sigma-finite; Tonelli applies to nonnegative jointly measurable L even for arbitrary measurable action spaces and infinite risks. The measurable minimizing d* gives a Dirac kernel and measurable q(x,d*(x)). The hypothesis supplies a single measurable full-measure E valid for all actions, so averaging its inequality against any delta is legitimate. Complementary integrals vanish, yielding the claimed prior-risk inequality without asserting existence of a minimizer. No defect found; reader/refuter findings empty.

### ex-data-rule-dominates-constant-rule

Reviewed all three verification steps and five direct suppliers. Dirac sampling laws are normalized/countably additive; both finite maps are measurable. Loss at the only sampled value gives R(theta,d0)=theta^2=theta on {0,1}, R(theta,d1)=0. Weak comparison holds at both points and strict comparison at theta=1, exactly as domination requires. No choice or infinite-risk issue; no defect found. Reader/refuter findings are empty.

### ex-zero-one-loss-randomization-minimax

Reviewed all three steps and five direct suppliers. Every probability on the two-point full-power-set action space is uniquely determined by q=delta(*,{1}) in [0,1], so the calculation covers every randomized rule. Finite risk sums give q and 1-q, whose maximum is at least 1/2 with equality exactly at q=1/2. Both deterministic endpoints have worst-case risk one. Thus minimax value and strict benefit of randomization are correct; this nonconvex action set does not satisfy the convex-action theorem. No defect found. Reader/refuter findings are empty.

### cex-open-action-set-no-minimizer

Reviewed both counterexample steps and six direct prerequisites. Singleton parameter/data spaces with full sigma-algebras are standard Borel; the joint law and posterior are Dirac probabilities and satisfy both possible conditioning-event identities. On the nonempty Borel open action interval (0,1), measurable nonnegative loss L(0,a)=a has posterior risk a>0. Taking n>=1 in a_n=1/(n+1) gives admissible actions tending to zero; hence infimum zero is unattained. This refutes universal attainment and does not contradict the Bayes theorem, whose measurable-attainment premise fails. No defect found. Reader/refuter findings are empty.

## Evidence and dispositions

Read the dispatched scope/order task, reader report and empty findings file, refuter JSON (all 13 carriers opened, no flags), pre/post snapshots, current batch manifest, contracts, all eleven current items, and their direct dependency carriers. The two assigned page summaries are consistent with the current mathematics; no page decisions are routed. Definitions of loss/risk and domination were reviewed as prerequisites: sectionwise measurability suffices for pointwise risk, and domination requires one strict improvement.

Local sources are `items/<supplier-id>.md`, using their Statement or Definition and the relevant Proof. In particular the Jensen review uses the closure supplier Proof 2.1–3.1, supporting-hyperplane Proof 1.1–2.1, and subgradient Proof 1.1–2.1. Joint-law and Bayes reviews use kernel-integration Proof 1.1–4.1, disintegration Statement and Proof 1.1–4.1, and Tonelli Statement and Proof 1.1–2.1. All contract citation excerpts were checked against current source text and matched. Independent mathematical review traced the current derivations; excerpt matching alone was not treated as acceptance. No external web sources were consulted; this review does not claim independent reading of the Martin/Hoff bibliography or a full transitive audit.

Both snapshots have identical item, contract and manifest hash records and identical page records. SHA-256 checks confirmed all eleven current raw item carriers match the post-reader hashes; canonical contract hashes with `risk_review` removed also match every post-reader contract hash. Thus there is no reader repair to accept, amend or revert. The decisions file contains exactly an empty `decisions` array as required. Risk-review enrichment is the only contract change; no item, claim, proof or published carrier was edited.

The owned cross-batch dependency input retains all fifteen stable consumer/supplier rows and records the actual edge review as verified. The two in-run prerequisite page summaries were read together with their used carriers; no missing logical supplier or affected outside consumer was identified. The unified dependency ledger was refreshed by its prescribed tool. No withdrawal is proposed.

## Checks and remaining work

- `node tools/risk-report.mjs research/mathematical-statistics-foundations-37-batch-3.proof-contracts.json`: exit 0; eleven routed items, nine HIGH/CRITICAL, zero errors.
- Same command with `--require-reviewed`: exit 0, zero errors; all nine required dispositions complete.
- Citation excerpt and snapshot comparison scripts: all excerpts match, all item hashes match, and mathematical contracts excluding risk reviews match post-reader snapshots.
- `node tools/frontier-dependency-ledger.mjs refresh --run mathematical-statistics-foundations-37`: exit 0, refreshed and deduplicated.

No proof-layout, reflow or precheck command was needed because no item was edited. No judge, decision stamping or gate battery was initiated. No confirmed defects, published findings, defect-ledger rows or substantial prerequisite escalations resulted from this review. Engine owns hashing/stamping and final gates.

Mechanical owner/engine note: the batch manifest already contains older summaries for the Jensen lemma, Bayes/minimax definition, randomization theorem and Bayes-rule theorem (for example Jensen's summary still names only the real-valued convexity convention, while the current carrier explicitly states extended-functional convexity). This predates this review and is not a mathematical refutation of the current proofs. The summaries were left unchanged because there is no routed changed-carrier obligation and no mathematical repair. Reconcile these mirrors during the engine's metadata checks if exact current statements are required.
