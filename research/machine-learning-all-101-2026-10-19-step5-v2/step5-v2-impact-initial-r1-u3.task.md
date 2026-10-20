# Step 5 repair: impact-initial, round 1, unit 3

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/impact-initial-1.json.







Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-impact-initial-r1-u3.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"impact-initial",round:1,unit:"3",input_sha256:"ec6ad102e12e672ee828685c6e26ddb5573ab9c04f1c14cedd58125d7a8c8d96",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.





Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.







All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-gaussian-smoothing-density-and-forward-equation",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Step 3.1 omitted the continuation required by the globally defined test class. This is a local justification gap: for s>t, h=f-(s-t)g(t)^2 Delta f/2 matches the value, first time derivative and spatial derivatives through order two at t. The repaired test is admissible on [0,T]; its backward equation is used only on [0,t]. No new premise or weaker uniqueness claim is needed.",
    "uncertain": false,
    "source_urls": [
      "https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-gaussian-smoothing-endpoint-weak-limit",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "The setup assumptions are in the statement and the cited strong-solution Definition, but the local F2 only restates the integral equation. Replaced the inaccurate local attribution by the statement hypotheses and added given to the tags. The Gaussian increment lemma applies with identical d,T,g and filtration; the second-moment and coupling arguments remain valid. Also corrected F7 to say square root of the quadratic-cost infimum.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-gaussian-smoothing-endpoint-weak-limit",
    "status": "fixed",
    "severity": "nonfatal",
    "location": "facts-block",
    "reason": "F7 omitted the square root in the definition of W2. The statement, actual supplier and coupling conclusion already include it; the local fact now accurately describes the supplier.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-gaussian-two-point-mixture-smoothing-density",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "other",
    "location": "statement",
    "reason": "The explicit universal claim for every t>0 evaluates v(t) outside the domain of g when t>T. This is an ill-defined claim, rather than a missing proof detail. Specified 0<t<=T, preserving the full finite-horizon smoothing contract; the original data cannot assert a law beyond T without extending g. Verified the finite-support hypothesis explicitly and retained all mixture boundary cases.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "record-open-finding",
    "id": "def-ito-sde-and-strong-solution",
    "route": "outside-frontier-maintenance-owner",
    "status": "open",
    "severity": "nonfatal",
    "location": "items/def-ito-sde-and-strong-solution.md:Definition, Brownian-driver paragraph",
    "source_raw_sha256": "d4f6418223ecdbc064482f6f9dc15727357ff5981953fdd831a4e23efe736c30",
    "source_excerpt": "Let $W=(W_t)_{0\\le t\\le T}$ be a standard $m$-dimensional Brownian motion\n$d$-dimensional Brownian motion adapted to this filtration, with",
    "affected_use": "The assigned density theorem Facts F2/proof 1.2 and endpoint theorem Facts F2/proof 1.1 invoke this filtered strong-solution setup, specializing m=d.",
    "invalidated_claim": "The unrestricted driver setup in dimensions d,m has a duplicated d-dimensional label after its correct m-dimensional label; for m different from d these labels disagree. The assigned Gaussian applications set m=d and remain sound.",
    "minimality": "Remove the duplicate phrase \"$d$-dimensional Brownian motion \" while retaining the m-dimensional driver, N_m increment law, all filtration assumptions and all links/references. Outside assigned scope; no edit made.",
    "reason": "Current published Definition contains consecutive m-dimensional and d-dimensional Brownian labels. This is a concrete wording/dimension-interface defect routed for maintenance; assigned proofs consistently specialize m=d and require no repair from it.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-target-risk-bound-by-source-risk-divergence-and-joint-error",
    "class": "accuracy",
    "subclass": "unsupported-inference",
    "severity": "nonfatal",
    "location": "proof-step",
    "step": "2.1",
    "disposition": "fixed",
    "reason": "Step 2.1 incorrectly says the indicator inequality from 1.1 gives the source-disagreement bound. The omitted inequality follows immediately: if h(x) differs from g(x), they cannot both equal y, so 1_A(x) <= 1_{h(x) != y} + 1_{g(x) != y}. This is a nonfatal elementary proof-step omission, not a false theorem or missing hypothesis. Replaced the incorrect attribution with that pointwise argument and integrated it using the existing suppliers.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-repaired-finding",
    "id": "def-adversarial-threat-set-and-robust-risk",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "missing-hypothesis",
    "location": "definition",
    "disposition": "fixed",
    "reason": "Reviewed measurable loss and outer-majorant definition; made only the binary specialization's discrete label/action spaces and zero-one loss explicit. All seven direct consumers already have binary labels and outputs.",
    "post_sha256": "d6479b7ba3a374eb3dd4af82159089941ac9e244319ca802a30d8a2d2174b982",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-repaired-finding",
    "id": "def-binary-feature-bernoulli-model",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "citation-inaccurate",
    "location": "remark",
    "disposition": "fixed",
    "reason": "Checked finite product masses normalize including tau=1/2. Repaired the reference note to take independence under each conditioning law; the Definition itself is unchanged.",
    "post_sha256": "d019faf46ff2e0fea56db249a57a7d23b8a36486b37106cdaecb41ef550e0561",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-repaired-finding",
    "id": "thm-architecture-dependent-robustness-binary-feature-model",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "citation-missing",
    "location": "facts-block",
    "disposition": "fixed",
    "reason": "Verified both Bernoulli branches, posterior-mean bound, finite coupling and threshold invariance. Added the already declared logarithm definition to F5, which now supplies its inverse identity; Statement unchanged.",
    "post_sha256": "84693f19385130935b5ca84663da5923d610bb897ff92ce474e45e42de03a930",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-repaired-finding",
    "id": "thm-robust-sample-upper-bound-gaussian-mixture",
    "severity": "fatal",
    "class": "accuracy",
    "subclass": "invalid-inference",
    "location": "proof-step",
    "disposition": "fixed",
    "reason": "Verified W_1 is N(theta_1,sigma^2/n) and atomless, so removing W=0 preserves the alignment probability. Checked measurable margin majorant, Gaussian tail and both sample-size constants; Statement unchanged.",
    "post_sha256": "761208de4594763c642ca360f91f953aa73241f621e4fed8cad6191546b7ee4c",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "reason": "All assigned items and all direct consumers are draft frontier items; no published carrier was changed and no published consumer defect was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-group-risk-score-and-calibration",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "items/def-group-risk-score-and-calibration.md#Definition",
    "finding": "With a prescribed singleton bin set and two occupied deterministic feature types having probabilities 0 and 1, the common score is constant and cannot equal both outcomes. The original existence clause omitted the freedom to choose bins. The repair preserves the KMR feature-instance convention, explicitly allows choosing bins and scores for this existence question, supplies the deterministic construction, and states the fixed-bin capacity caveat.",
    "status": "fixed",
    "reason": "The joint probabilities are nonnegative and sum to one by the two finite normalizations. Bin calibration includes zero-mass bins; full binary reliability gives exactly the sum over equal-score bins, agreeing with def-probability-calibration. The corrected existence convention follows KMR section 1.1 (bins belong to the assignment), and its section 1.2 construction uses scores 0 and 1. Occupied deterministic types are assigned to their outcome bins; unused feature rows may use any available bin. One occupied outcome needs one bin, and two outcomes require two distinct scores and hence at least two bins. No choice axiom or new supplier is needed. Both owning pages have empty bodies and compact-v1 metadata; no diagram is present or needed.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1609.05807v2"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-positive-and-negative-score-balance",
    "severity": "nonfatal",
    "locus": "items/def-positive-and-negative-score-balance.md#Definition references",
    "finding": "The supplier allows rho_t=0 and rho_t=1; only this balance definition imposes 0<mu_t<N_t. Its displayed conditional means already have positive denominators, so the mathematical definition is sound. Corrected only Definition references to attribute nondegeneracy to this item rather than its supplier.",
    "status": "fixed",
    "reason": "Under the finite common-assignment law, summing a_tsigma p_sigma X_sigmab v_b gives E_t[S 1_{Y=1}], and division by rho_t gives the positive conditional mean; the complementary formula divides by 1-rho_t. The explicit hypothesis 0<mu_t<N_t with N_t>0 makes both denominators positive. Equality of the respective conditional means is precisely KMR section 1.1 balance, without any assertion of threshold-rate equality. The repaired reference correctly locates this hypothesis here. The supplier repair affects only perfect-prediction existence and leaves every formula used here unchanged. The Definition section is byte-identical, so this reference-only repair causes no new consumer event. No diagram is present or needed.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1609.05807v2"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-linear-regression-objectives",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "statement",
    "finding": "Intercept exclusion was false for unchanged ridge and l1 penalties; explicit slope penalties now implement the promised convention.",
    "repair": "All four penalties explicitly exclude beta_0; all seven direct consumers examined and unaffected.",
    "action": "record-fixed-finding",
    "reason": "The original intercept clause made D beta independent of beta_0 but left lambda||beta||_2^2 and the l1 penalties unchanged. For n=p=1, X=(1), y=1 and lambda=1, the displayed ridge objective minimizes at beta_0=1/2, whereas an unpenalized intercept minimizes at 1. Replaced each penalty explicitly by its slope-only counterpart and retained the unaveraged ridge loss.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-finite-gaussian-max-comparison",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "locus": "facts-block",
    "finding": "A1 imported Gaussian-law uniqueness from an existence-only definition.",
    "repair": "Cited the proved multivariate characteristic-function uniqueness lemma and clarified use of same-law copies; explicitly cited Fubini and endpoint domination.",
    "reason": "The missing uniqueness supplier is now an explicit dependency and exact contract citation; no claim or hypotheses were weakened.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update-required",
    "reason": "Both assigned items and all seven direct consumers of the changed Definition are draft frozen-frontier items. No published item was edited, no published consumer uses the changed intercept clause, and no published mathematical defect was found in the consulted Gaussian suppliers.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-nonseparable-perceptron-cycles",
    "locus": "frontmatter",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "The former title claimed a two-pass cycle although the verified weight cycle takes two updates in one pass.",
    "correction": "Replaced two-pass cycle with two-update cycle in the item title and owning manifest mirror.",
    "post_sha256": "399491e5002d34456545a09a72617f5d198f6b1069bed11914ee81b61fc88900",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-ledger",
    "action": "no-update",
    "id": "ex-nonseparable-perceptron-cycles",
    "reason": "The assigned item remains draft, and this title correction neither changes a supplier interface nor affects any published consumer.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-random-forest-strength-correlation-bound",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "statement",
    "status": "fixed",
    "reason": "The missing test-label domain made the competitor index and expectations undefined for test mass outside C. The Statement now explicitly takes Y in C, and Given carries that hypothesis. The only direct consumer already has binary class-valued Y and needs no repair. This proposal records the mathematical correction; it supplies no independent acceptance, certification or judge stamp.",
    "uncertain": false,
    "source_urls": [
      "https://mfm.uchicago.edu/wp-content/uploads/2020/06/Breiman-Random-Forests.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-pseudo-residuals-are-negative-score-gradient",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "F1 defines pseudo-residuals only for finite-valued losses on Y × R, whereas the original Statement admitted sampled loss sections defined only on open U. Thus the original final invocation of F1 lacked its domain hypothesis (a dependency-citation defect). The repair explicitly defines the local pseudo-residual without narrowing U or any differentiability hypothesis, and proves compatibility with F1 by extending sampled sections by zero outside U; the extension has identical derivatives near every sample score.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record-no-published-consumer-impact",
    "id": "lem-pseudo-residuals-are-negative-score-gradient",
    "status": "no-published-consumer-repair-required",
    "reason": "The complete current item/reference search found only alg-gradient-boosting and ex-gradient-boosting-zero-tree-direction as direct item consumers; both are draft frozen-frontier items and remain sound. The four Step-4 outside published-definition presentation alerts remain owner-routed evidence; the three derivative/gradient suppliers actually opened here already have uninterrupted Definitions and following reference sections. No published item was edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-lloyd-objective-monotonicity-and-termination",
    "locus": "proof-step",
    "step": "2.1",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "Initial labels may recur at the first update with a lower objective. Proof 2.1 now counts only post-update labels, with at most K^n-1 subsequent nonterminal transitions. Statement unchanged; no interface propagation."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "alg-gaussian-mixture-em",
    "locus": "definition",
    "status": "dismissed",
    "reason": "The alleged zero-weight initial parameter violates the referenced finite-mixture domain, which requires all weights strictly positive. Positive responsibilities and full affine span keep the M-step in that domain. No repair is required."
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "id": "def-mahalanobis-pseudometric",
    "outcome": "false_positive",
    "reason": "The owning page library/machine-learning/ml02-metric-learning.md lists thm-mahalanobis-distance-is-pseudometric. Its steps 1.1–2.1 give M=L^T L, step 3.1 identifies d_M with the Euclidean feature distance, and step 4.1 proves the pseudometric axioms. The definition only promises this same-page theorem, not a proof in its own carrier; q_M is nonnegative under its PSD hypothesis, so its square root exists by thm-of-square-roots.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-symmetric-matrix-frobenius-isometry",
    "severity": "nonfatal",
    "location": "statement",
    "class": "presentation",
    "finding": "Missing conversion between the zero-based supplier matrix indices and the local one-based entries.",
    "correction": "The Statement now defines A_ij=A(i-1,j-1); F1 gives the finite reindexing identity, including d=1. The original svec order and mathematical conclusions are preserved.",
    "status": "closed",
    "reason": "The supplier indexes entries by 0<=r,s<d while the lemma silently uses 1<=i,j<=d. This is a missing notation conversion, not a counterexample to the coordinate isometry: the order-preserving bijections i=r+1 and j=s+1 give identical entry lists and sums. Added the explicit convention A_ij=A(i-1,j-1) in the Statement and the finite reindexing identity in F1. At d=1 the sole coordinate A_11 is exactly A(0,0). The inverse, linearity, inner-product identity and norm identity are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "record-context-observation",
    "id": "def-frobenius-matrix-norm",
    "reason": "The Step-4 digest alerts that the Frobenius definition omits the inner-product norm triangle supplier. Its current deps now explicitly include cor-triangle-inequality-for-inner-product-norm. This assignment makes no published edit and no publication-receipt audit claim; no new published repair is proposed. All three direct consumers of the changed lemma are draft frozen-frontier items.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-pc-causal-discovery",
    "severity": "nonfatal",
    "locus": "statement",
    "finding": "The Definition promised an undirected output C but then oriented C in place. This is a nonfatal output-carrier ambiguity: the search and orientation rules themselves are sound. Step 4 now copies C to P; steps 4–5 orient P and explicitly return both C and P without changing tests, separators, or R1–R3.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-meek-rules-complete-for-cpdag",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "proof-step",
    "finding": "The original 3.2 used propagation before its proof; more seriously, 4.3 reused R3 witness edges as undirected without excluding later orientations. The repaired 4.3 uses earlier-arrow minimality to force d→c and e→c, then handles outgoing, incoming and undirected a-d/a-e cases using R1/R2 and preservation of initial colliders. Chordality now follows propagation in 5.1; 6.1 proves the component quotient acyclic. Local chordal orientations therefore extend to both directions of each remaining edge without new colliders. The Statement is unchanged.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-pc-fisher-transform-uniform-concentration",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "locus": "facts-block",
    "finding": "F3 asserted residual covariance and independence absent from the cited theorem Statement, and 1.1 depended on that unlicensed law. F3 now asserts only positive definiteness. Step 1.1 explicitly constructs U=Y−μY−ΣYSΣSS^{-1}(Z−μS), computes Cov(U,Z)=0 and Cov(U)=K, and factors its block-diagonal Gaussian density to prove independence, including empty S. Projection normality has a declared def-multivariate-normal-law dependency. Full-rank residual and design arguments are proved rather than assumed. The m=n−|S|−1 representation, chi-square bounds and constants C_M=6,c_M=(64(4M/sqrt(1−M²)+2)²)^{-1} check out; the Statement is unchanged.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-pc-oracle-correctness",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "locus": "facts-block",
    "finding": "F4 attributed a parent-set separator to a Statement guaranteeing only existence of some separator; that stronger fact is necessary for the restricted current-adjacency search. F4 now matches the supplied adjacency criterion. New 1.3 proves the parent-set claim directly from the active-path definition: choose the nondescendant endpoint, block paths entering it by its parents, and block outward paths at their first collider, whose descendant cannot be a parent without a cycle. Step 2.1 then proves retained parents are available and the search cannot stop before that set is tested. Termination, collider identification and Meek closure check out. The Statement is unchanged.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-pc-high-dimensional-consistency",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "locus": "facts-block",
    "finding": "F8 supplies only existence via the cited adjacency Statement, not a separator within a retained endpoint neighborhood of size at most q_n. New proof 1.2 derives exactly that parent-set separator, then 4.1 justifies the cap.",
    "status": "fixed"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-pc-high-dimensional-consistency",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "statement",
    "finding": "The sample variant allowed inconsistent CI answers without defining what to do when collider orientations conflict. On a retained four-vertex path a-b-c-d with Sep(a,c)=Sep(b,d)=empty, the two collider requests require c→b and b→c simultaneously. The corrected Statement explicitly stops with a failure symbol on an opposite-arrow request or directed cycle; proof 4.1 excludes that branch on E_n.",
    "status": "fixed"
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update-required",
    "reason": "Both changed defining sections have been traced to direct item and page uses. All six algorithm consumers are draft members of this frozen frontier; the high-dimensional theorem has no direct item consumer. No published consumer or outside-frontier mathematical repair is implicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-anm-joint-density",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "Statement, Facts F8, Proof 2.1",
    "disposition": "fixed",
    "reason": "The original F8/2.1 composes a merely Lebesgue-measurable density with a Borel residual map into the Borel sigma-algebra. Those sigma-algebras do not match, and the uncompleted product need not measure the resulting product. A non-Borel null-set perturbation q2=phi+1_A yields the sheared term 1_A(x2-x1). If it were product-measurable, its Borel modification outside null coordinate slabs, integrated along (t,t+a), would make 1_A(a) Borel, a contradiction. The repair proves the original product formula for Borel densities, and for arbitrary versions proves existence of a Borel product density plus equality of the original formula on the completed product. Countable Choice is stated exactly for the existing representative/completion suppliers; no model or density version is silently discarded.",
    "post_sha256": "938a6409fde8882dbb09b9954912a64819a1750c68dd4f55f52ece0c9f64d446",
    "uncertain": false,
    "source_urls": [
      "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-positive-minimal-dags-have-a-conditioned-reversal",
    "severity": "nonfatal",
    "locus": "Proof 5.1",
    "disposition": "fixed",
    "reason": "The cited path really can end through a child of w: l→c→w, l→a→b and w→b gives l–a–b–w. The original universal assertion in step 5.1 is false. The separator itself remains correct, because the first-collider argument already given for the opposite endpoint applies verbatim from w whenever l is its nondescendant nonparent. This is a local proof gap a competent reader closes by that symmetry, not a false reversal conclusion or missing substantive supplier. Step 5.1 now supplies the common parent-separator argument for both orientations, explicitly covering paths through children. Reachability maximality and the lift past deleted sinks are also made explicit. The density supplier repair is carried through the separate Borel/Countable Choice alternative without changing the reversed-edge or conditioning-set conclusion.",
    "post_sha256": "3ac0309bd50a2743e561f3ec5afc86b17327f5a085567f01856c872aa0e16aaa",
    "uncertain": false,
    "source_urls": [
      "https://jmlr.org/papers/volume15/peters14a/peters14a.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-anm-density-factorization-implies-dsep-conditional-independence",
    "route": "frontier-owner",
    "locus": "items/lem-anm-density-factorization-implies-dsep-conditional-independence.md",
    "affected_use": "Statement displays p_X as the shifted-noise product; Facts F1 and Proof 1.1–2.1 eliminate factors and treat the regrouped U,W as product-measurable for Tonelli.",
    "finding": "The Statement assumes a joint product density but does not require its separate regrouped factors to be product-measurable. The original density supplier no longer licenses that inference for arbitrary Lebesgue versions. Preserve the d-separation claim: either justify measurable regrouping from the assumed density or make the Borel-version/actual-choice convention explicit before invoking Tonelli.",
    "minimality": "Repair only the cited density-version/measurability use and actual choice accounting; preserve the full approved mathematical claim. Do not propagate past this consumer unless its own Statement changes.",
    "reason": "The assigned supplier Statement now explicitly separates Borel density versions from arbitrary Lebesgue versions on a completed product. This exact general-consumer use requires owner examination; it was not edited or adjudicated in unit 27.",
    "uncertain": false,
    "source_urls": [
      "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-anm-parent-dependence-persists-under-conditioning",
    "route": "frontier-owner",
    "locus": "items/lem-anm-parent-dependence-persists-under-conditioning.md",
    "affected_use": "Facts F2 asserts the full shifted-noise product and obtains marginal ratios; Proof 1.1–1.2 uses q_j(y-f_j(p,x)) as a conditional density on product coordinates.",
    "finding": "The assigned density repair still provides the needed positive product for Borel noise versions, and under Countable Choice for chosen Borel versions of arbitrary noises. This general consumer currently states neither convention. Its instance with supplied Borel densities is sound; owner should repair the exact density-version and choice use without dropping its parent-dependence claim.",
    "minimality": "Repair only the cited density-version/measurability use and actual choice accounting; preserve the full approved mathematical claim. Do not propagate past this consumer unless its own Statement changes.",
    "reason": "The assigned supplier Statement now explicitly separates Borel density versions from arbitrary Lebesgue versions on a completed product. This exact general-consumer use requires owner examination; it was not edited or adjudicated in unit 27.",
    "uncertain": false,
    "source_urls": [
      "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-youngest-child-descendants-conditionally-independent",
    "route": "frontier-owner",
    "locus": "items/lem-youngest-child-descendants-conditionally-independent.md",
    "affected_use": "Facts F2 identifies p with the pointwise shifted-noise product; Proof 2.1 declares its regrouped A(y,s,z),B(d,s,z) measurable, and Proof 3.1 applies Tonelli at every positive finite s.",
    "finding": "The repair distinguishes Borel product versions from arbitrary completion-measurable versions. The regrouping and every-section conclusion must use the specified product version; mere equality almost everywhere of a joint density does not control a fixed conditioning section. Pin the Borel product version and its actual choice assumption, or provide a separate argument covering the exact stated versions. Keep the every-section conclusion for that product version.",
    "minimality": "Repair only the cited density-version/measurability use and actual choice accounting; preserve the full approved mathematical claim. Do not propagate past this consumer unless its own Statement changes.",
    "reason": "The assigned supplier Statement now explicitly separates Borel density versions from arbitrary Lebesgue versions on a completed product. This exact general-consumer use requires owner examination; it was not edited or adjudicated in unit 27.",
    "uncertain": false,
    "source_urls": [
      "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no-update-required",
    "reason": "All ten direct density consumers and the sole direct reversal consumer are draft items in the frozen frontier. No published or outside-frontier mathematical consumer was found, and no published item was edited or assigned a new audit status. The thirteen Step-4 published presentation alerts are outside this unit and their current supplied prerequisite interfaces were read without editing their items.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-laplace-distribution",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The exponential density has closed support [0,infinity): for every r>0, mu_b((0,r))=1-exp(-r/b)>0, although mu_b((0,infinity))=1. The phrase supported on (0,infinity) conflates closed support and concentration; the density and mixture remain sound, so this is nonfatal terminology. Replaced supported by concentrated and exposed the already inherited Countable Choice assumption from thm-exponential-and-weibull-survival-laws, Statement and A1; Lap(0) remains the point mass at zero.",
    "uncertain": false,
    "source_urls": [
      "https://denis-perice.github.io/teachingdocs/Measure_theory_P1.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-dp-test-function-extension",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F1 incorrectly attributes the event inequality for arbitrary supplied P,Q to the definition of a private database kernel. The Statement already assumes that inequality, so the dyadic-level proof remains valid without a new premise: n level-set bounds each weighted 1/n contribute exactly delta, and monotone convergence gives the result. Removed F1 and applied the given hypothesis in step 2.1; the Statement is byte-for-byte unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-laplace-product-density",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F7 appends the rectangular product characterization to the independent-random-elements definition, which only defines independence of generated sigma-algebras. This is a nonfatal attribution error: F3 already supplies rectangle factorization and finite-product existence. Restricted F7 to its actual definition, made the two applications of F3 explicit, and spelled out the whole-space rectangle exhaustion and coordinate-event argument in step 2.1. The normalization, rectangle identification and density formula are unchanged; the Statement now exposes its existing Countable Choice assumption.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-basic-and-advanced-composition",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The Statement already calls K_i(D,h,.) a probability kernel with source variables (D,h). By def-measure-kernel-and-probability-kernel, event evaluations (D,h) -> K_i(D,h,A) are measurable; fixing D gives the measurable history evaluations required by the advanced supplier. That supplier uses the same K_i notation and merely restates this property explicitly. Its arbitrary output scope, every-history inequalities, AC, common parameters, delta-prime range and total-error bound all match. Both composition clauses therefore apply; no item edit is warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-add-remove-noisy-count",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The rejection confuses the definition identifying the axiom with the suppliers that use it. A1 is an assumption/use declaration, not a theorem asserting that the Countable Choice definition entails a Laplace law. alg-laplace-mechanism A1/F3 and thm-laplace-mechanism-privacy A1 inherit def-laplace-distribution, whose exponential-law supplier explicitly assumes Countable Choice in its Statement and spends it in proof 2.1-3.1. Finite dimension adds no stronger choice; it does not remove that inherited hypothesis. The count changes by P(u), and the supplied satisfying record attains sensitivity one at the empty/singleton pair. The unit-scale privacy application is valid under the declared A1.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-change",
    "path": "research/published-consumer-supplier-ledger.md",
    "reason": "No assigned item or direct consumer of either changed defining section is published or outside the frozen frontier. The consulted published suppliers were not edited; no newly confirmed published mathematical defect was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-private-online-learning-regret-under-composition",
    "locus": "facts-block",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "F8 now includes epsilon_r>=0, 0<=delta_r<=1 and T delta_r+delta_prime<=1; step 2.2 checks the latter as delta<1. Original Statement unchanged and all asserted conclusions preserved.",
    "uncertain": false,
    "source_urls": [
      "https://www.cis.upenn.edu/~aaroth/Papers/privacybook.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-local-sgd-sampling-variance",
    "status": "open",
    "route": "frontier owner, outside unit 30 assignment",
    "reason": "Confirmed the Step-4 digest concern directly: Statement says each worker has b independent draws, while Given and Proof 1.1 assume every distinct draw is independent across workers and fresh relative to earlier indices. For n=K=2,b=1, f1(z)=z and f2(z)=-z at fixed zero worker points, shared fresh uniform index gives variance 1 rather than the claimed 1/2.",
    "affected_use": "Statement sampling clause and Proof 1.1 cancellation of cross-worker centered inner products.",
    "invalidated_claim": "The standalone sigma^2/(bK) guarantee under merely within-worker independent samples.",
    "minimality": "State mutual independence of all current worker/batch draws and independence from prior history, matching alg-local-sgd; no change to the variance conclusion is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-scaffold-convex-server-variance",
    "status": "open",
    "route": "frontier owner, outside unit 30 assignment",
    "reason": "The current Statement omits AC while the supplied argument uses AC-dependent conditional-expectation interfaces. The owner should inspect and carry the actual Foundations prerequisite into the public hypothesis.",
    "affected_use": "F8/A2 and Proof 2.1-2.2",
    "minimality": "A focused assumption disclosure should suffice; retain the numerical conclusion and reexamine direct consumers only after a real Statement edit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-scaffold-nonconvex-server-variance",
    "status": "open",
    "route": "frontier owner, outside unit 30 assignment",
    "reason": "The current Statement omits AC while the supplied argument uses AC-dependent conditional-expectation interfaces. The owner should inspect and carry the actual Foundations prerequisite into the public hypothesis.",
    "affected_use": "F8/A2 and Proof 1.1-1.2",
    "minimality": "A focused assumption disclosure should suffice; retain the numerical conclusion and reexamine direct consumers only after a real Statement edit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-scaffold-nonconvex-control-lag",
    "status": "open",
    "route": "frontier owner, outside unit 30 assignment",
    "reason": "The current Statement omits AC while the supplied argument uses AC-dependent conditional-expectation interfaces. The owner should inspect and carry the actual Foundations prerequisite into the public hypothesis.",
    "affected_use": "F7/A2 and Proof 1.1-2.1",
    "minimality": "A focused assumption disclosure should suffice; retain the numerical conclusion and reexamine direct consumers only after a real Statement edit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-scaffold-control-tracking-identity",
    "status": "open",
    "route": "frontier owner, outside unit 30 assignment",
    "reason": "The current Statement omits AC while the supplied argument uses AC-dependent conditional-expectation interfaces. The owner should inspect and carry the actual Foundations prerequisite into the public hypothesis.",
    "affected_use": "the supplied conditional-expectation and stored-residual argument",
    "minimality": "A focused assumption disclosure should suffice; retain the numerical conclusion and reexamine direct consumers only after a real Statement edit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-scaffold-convex-round-progress",
    "status": "open",
    "route": "frontier owner, outside unit 30 assignment",
    "reason": "The current Statement omits AC while the supplied argument uses AC-dependent conditional-expectation interfaces. The owner should inspect and carry the actual Foundations prerequisite into the public hypothesis.",
    "affected_use": "the supplied conditional-expectation and potential-recursion argument",
    "minimality": "A focused assumption disclosure should suffice; retain the numerical conclusion and reexamine direct consumers only after a real Statement edit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "lem-finite-martingale-difference-sum-variance",
    "outcome": "confirmed_nonfatal",
    "reason": "The scalar coordinates 1,...,d conflict with the supplied function domain d={0,...,d-1}. Reindexed the statement and both coordinate expansions; this is a notation defect, with no change to the moment inequality or its orthogonality argument.",
    "post_sha256": "dcd1288bd56fd1f55b2c159e31383169e04a1737933ea373db3817659af337ae",
    "review_context_sha256": "a1140cc9fa82ecb7f9f2099e0289531dd1b847d38db28887c441c3772b4a1f03",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "lem-local-sgd-virtual-progress",
    "outcome": "confirmed_nonfatal",
    "reason": "F1 incorrectly names the proposal x rather than z. The proof only uses the worker mean, which synchronization preserves. Corrected F1 and explicitly derived the invariant mean update; the gap and drift coefficients follow from smoothness, strong convexity, Young and Jensen.",
    "post_sha256": "69166392d210ac577a616fc5e6a3a155b17a46acc4e8b2c1d9efb0ea8ae899b5",
    "review_context_sha256": "f91073b93530c1bd976ee60a79153c2880d8edc0b98b3f51f07f80665f0d6339",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "lem-fedavg-one-round-progress",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "The original oracle assumptions allow one shared Rademacher error with N=S=6, K=1 and x=x*=0. Actual squared error is t^2 sigma^2, exceeding 5t^2 sigma^2/6. Required full joint prequery conditional moments explicitly, including earlier draws from other clients and the revealed sample, to license the chronological martingale bound. Also carried the existing proof AC prerequisite into the Statement.",
    "post_sha256": "b34c109abecc41d1e753442ec715b776488830068058d8b9fa414689638e9b91",
    "review_context_sha256": "07d651e23e15a36bc9352ebc7860854cdbebc8228d7f5cfaccebd8da2595df41",
    "uncertain": false,
    "source_urls": [
      "https://cs.nyu.edu/~mohri/pub/scaffold.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "ex-scaffold-control-correction",
    "outcome": "confirmed_nonfatal",
    "reason": "The Example itself already specifies the exact corrected direction using the full gradient, so its invariant is valid for that deterministic specialization. F2 inaccurately restates the general algorithm with a full gradient, and F1 cites a definition with no control update. Corrected both supplier attributions and explicitly named g_i=gradient f_i in F2; no change to the Example claim.",
    "post_sha256": "f2febdce9cb9f1b4bc4fb1fc8edcea7225dcf53eea0be7e4924425b06526a991",
    "review_context_sha256": "a8ad0d3cf84887072e8da31249a6e7e5bad5df5d043891e0bc672e79380bc784",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "lem-scaffold-nonconvex-client-drift",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "F5 attributes the oracle moment hypotheses to general probability/expectation interfaces. They are actually supplied by A1 and the trajectory definition full-prequery convention. Corrected F5 to state only expectation rules and identify A1 as the moment source. Also made the existing proof AC prerequisite explicit in the Statement and beta>0 explicit for its reciprocal step bound. The separate AC omission is a fatal undisclosed dependency in the original Statement, even though the original fact-attribution concern alone is nonfatal.",
    "post_sha256": "93e54b8911d7148c3927299a3342e00902247899fa6016a46dd3e7617022dc3f",
    "review_context_sha256": "2f6e1ddf416a6b8ced5e54b3282f0ee55336783cded6727c33954319271db1b1",
    "uncertain": false,
    "source_urls": [
      "https://cs.nyu.edu/~mohri/pub/scaffold.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "lem-scaffold-nonconvex-round-progress",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "F3 publicly supplies norm bounds, not the exact conditional-mean formula attributed to it. The formula is valid (and appears in that supplier proof); derived it locally from the update, full-prequery centering, sample-independent hypothetical paths, uniform inclusion probabilities, cancellation of population controls and the finite-gradient-average rule. Added that actual dependency and made the existing AC prerequisite explicit. The separate AC omission is a fatal undisclosed dependency in the original Statement, even though the original fact-attribution concern alone is nonfatal.",
    "post_sha256": "bd272c3f1f994348786fd88745f1fc4f4a76aab248e65a992adaa517375e89a8",
    "review_context_sha256": "a79c16162ef046de6aeebc402709c50f7c77d95f30bfbd2f1e9937497f6707cd",
    "uncertain": false,
    "source_urls": [
      "https://cs.nyu.edu/~mohri/pub/scaffold.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "thm-scaffold-convex-and-nonconvex-rates",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "The theorem Statement omitted AC, although A2 explicitly adds it and F8 invokes conditional-expectation existence through an AC-dependent supplied interface. This leaves a real prerequisite undisclosed. Added the Axiom of Choice to the Statement, preserving all three rate claims and their output rules.",
    "post_sha256": "3356a9099bb3e3c0c21935541079c4ae444d0b825b96de090599f36a0bd61fa6",
    "review_context_sha256": "7d7f96b10e5057ed0539ec93cf874e776ef7d4bb56e2fd3f40e5670bd1c7b06a",
    "uncertain": false,
    "source_urls": [
      "https://cs.nyu.edu/~mohri/pub/scaffold.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "All seven assigned items and all direct item consumers examined here are draft. No published carrier was edited, no published-consumer repair was required by these interface changes, and no publication/audit credit is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-fedavg-under-gradient-dissimilarity",
    "status": "open",
    "route": "frontier owner, outside unit 30 assignment",
    "reason": "Its Facts F1/Proof 1.1 consume the repaired FedAvg moment bound but its Statement does not specify full joint prequery centering and also omits the AC used in F8/A2. The original common-noise issue therefore requires owner attention to this direct consumer.",
    "affected_use": "Proof 1.1 uses 5sigma^2/(KS) from the one-round supplier to build the noise coefficient b=11sigma^2/(2KS)+sampling.",
    "invalidated_claim": "The stated stochastic guarantee is unsupported when errors from different clients are allowed a common centered component.",
    "minimality": "Carry AC and conditional centering/variance given all earlier revealed cross-client oracle draws into the theorem Statement, preserving the quantitative claim.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-false-positive",
    "id": "lem-fixed-support-test-function-space-is-separable",
    "outcome": "false_positive",
    "location": "facts-block",
    "reason": "False positive: F2 explicitly cites proof step 2.1 of lem-schwartz-cutoffs-from-the-standard-smooth-step. That step constructs a(t)/(a(t)+a(1-t)), proves smoothness and its constant regions; step 1.1 proves all derivatives of a vanish at zero. These establish the stated theta and endpoint flatness despite the narrower radial-cutoff Statement. The boundary-strip Taylor estimate with N>M and rational polynomial approximation give a countable dense set; no Choice is needed.",
    "repair_status": "not_required",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-network-approximates-smooth-activation-convolutions",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "location": "proof-step",
    "reason": "The cited translation theorem does not establish nullity under reflection. Step 1.1 also incorrectly infers a global null set x-D_sigma from the local C=closure(D_sigma) intersect J. Added the existing linear-change-of-variables theorem for t -> -t (absolute determinant one), then translated -C and applied completeness only to the integrand discontinuities inside (x-D_sigma) intersect [-R,R], which lie in x-C. This repairs the missing dependency and local/global inference without changing the Statement.",
    "repair_status": "repaired_pending_independent_rejudgment",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "cex-offset-free-sine-ridge-functions-are-not-dense",
    "outcome": "confirmed_nonfatal",
    "location": "frontmatter",
    "reason": "The original title claimed failure to approximate even targets without excluding constants, but width zero realizes every constant. The actual Statement refuted and three-step proof are sound: sine oddness gives S(0)=c and (S(1)+S(-1))/2=c, forcing max(|c|,|c-1|)>=1/2 against x^2. Changed only the title to the square-function obstruction; this is a nonfatal title defect, not a density-proof defect.",
    "repair_status": "repaired_pending_independent_rejudgment",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "cex-pointwise-uniformity-fails-for-an-essentially-bounded-activation",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "location": "facts-block",
    "reason": "Library def-natural-numbers explicitly has 0 in N, so the displayed witness sigma and spike sets included the undefined reciprocal 1/0. Restricted all spike indices to n in N with n>=1, making the activation well-defined without altering the refuted Statement. Also absorbed constant affine units into the output bias before isolating divergent spikes, so the assertion that all other spike contributions eventually vanish applies precisely to nonconstant units; nonpolynomiality is established at step 2.1 rather than announced as already proved in step 1.1. Fatal classification concerns the originally undefined counterexample witness.",
    "repair_status": "repaired_pending_independent_rejudgment",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-fixed-support-test-function-space-is-separable",
    "outcome": "confirmed_nonfatal",
    "location": "proof-contract",
    "reason": "Separate from the false-positive mathematical rejection, the focused contract check found F6/F8 quotation mirrors stale after supplier Statement hyperlink relocation. Read the current complete supplier Statements and refreshed only those exact quotation mirrors; item guard and mathematical claim remain unchanged. Final strict selected contract check has no errors.",
    "repair_status": "metadata_repair_only",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update-required",
    "reason": "All four assigned carriers are draft. No Statement or Definition changed, no new interface was created, and no potentially defective published consumer was discovered. No outside maintenance event is triggered.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-univariate-relu-affine-interval-count",
    "outcome": "confirmed_nonfatal",
    "reason": "The title called H the depth although def-relu-network sets depth H+2. The unchanged Statement uses H hidden layers correctly. Common-partition induction includes skip edges; each new affine preactivation adds at most one breakpoint, affine output adds none, and AM-GM gives the total-unit bound, including H=0 separately. Corrected only the title and owning manifest/contract title mirrors.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-relu-rank-sensitive-region-recursion",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "Confirmed proof gap: def-relu-linear-region distinguishes arbitrary activation cells from full-dimensional regions. For preactivations x and -x, pattern 00 occurs only at zero and was omitted by the original chamber argument. Replaced that argument with finite witnesses and a common negative shift, so every original binary pattern occurs strictly in a shifted chamber. The arrangement bound, convexity, rank bound min(r,|A|), and monotone continuation prove the original full recurrence without narrowing its Statement.",
    "uncertain": false,
    "source_urls": [
      "https://proceedings.mlr.press/v80/serra18b/serra18b.pdf",
      "https://proceedings.mlr.press/v80/serra18b/serra18b-supp.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-yarotsky-fixed-architecture-sobolev-approximation-rate",
    "outcome": "false_positive",
    "reason": "The rejection overlooks an explicitly cited proof consequence. The bounded-product lemma Proof 1.1 defines P=2M^2[Q(|x+y|/(2M))-Q(|x|/(2M))-Q(|y|/(2M))]; Proof 2.1 uses Q(0)=0 to establish axis cancellation for every real other coordinate. The theorem F2 and Proof 1.2 expressly cite that global identity. Hat products therefore vanish wherever any exact hat factor vanishes, including off support; on support all scaled inputs and intermediate products have fixed bounds. Bounded overlap and parallel subnetworks give the stated rate and target-independent architecture. No item edit is needed.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1610.01145"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-linear-regions-do-not-guarantee-learning",
    "outcome": "confirmed_nonfatal",
    "reason": "F2 omitted input-coordinate terms allowed by def-relu-network. Added those terms to the restatement. The existing proof already sets every coefficient into the affine output and its bias to zero, so it remains valid with skip edges. Ten general-position lines give 1+10+45=56 full-dimensional patterns, unaffected by the output coefficients, while the zero predictor against Y=1 has squared risk exactly one. This factual restatement defect does not invalidate the example conclusion.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-target-specific-vs-target-independent-approximation",
    "outcome": "confirmed_nonfatal",
    "reason": "The Example already compared upper bounds, but Verification 2.1 incorrectly called their quotient an architecture size ratio. Two upper bounds cannot bound a quotient of actual or optimal sizes. Replaced that sentence by the quotient of explicit positive bound functions C2/(epsilon*t) and C1*epsilon^(-1)*(1+t), with t=log(1/epsilon), which is O(t^(-2)). The target has function norm 1/2 and derivative norm 1, so both supplier theorems apply under their inherited AC assumption. Also stated that assumption explicitly and matched F3 to the actual unit Sobolev-ball interface.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-change",
    "reason": "No assigned item is published, no assigned Statement or Definition changed, and these repairs establish no new affected published-consumer use. Outside bibliographic alerts remain separate owner work; no published repair or acceptance is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-equivariant-neural-layer",
    "locus": "statement",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "The original Definition labels arbitrary functions into a trivially acted-on output set invariant. The two-point C2 swap with Phi(x)=x disproves this criterion. The corrected final sentence explicitly imposes Phi(T_g x)=Phi(x) for all g,x and identifies its equivalence with equivariance into the trivial output action.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "alg-radix-two-fft",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "Existing companion lemma Proof 2.1 proves FFT correctness; no missing correctness result.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-cauchy-root-grid-matvec-numerical-cost",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "Fixed-depth initialization in Proof 4.1 resets powers before every degree loop; no cross-depth carry.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-hippo-leg-matrices-have-low-rank-structure",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Repaired title to retain the essential LegT diagonal similarity; precise Statement and proof unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/2111.00396",
      "https://arxiv.org/pdf/2008.07669"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-s4-convolution-filter-complexity",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "Repaired unqualified LegS application: constant G^S is covered; original time-dependent G^S/t dynamics is not a fixed convolution.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/2008.07669",
      "https://arxiv.org/pdf/2111.00396"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "All assigned carriers and the sole direct S4 consumer are draft frontier items. No published direct consumer or defective published prerequisite was identified; the normal spectral-theorem interface applies with its finite complex hypotheses.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-outside-assignment-finding",
    "id": "alg-cauchy-matvec-at-roots-of-unity",
    "status": "owner-review-required",
    "reason": "Outside assignment, retained Step-4 presentation finding: Definition includes the separate property sentence “This root search and reindexing use $O(M)$ operations.” The actual proof is thm-cauchy-matvec-at-roots-of-unity-exact-cost, Proof 2.2. Route removal/relocation of this already proved property to its frontier owner; no mathematical cost bound is refuted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-outside-assignment-finding",
    "id": "alg-s4-state-space-recurrence-and-convolution",
    "status": "owner-review-required",
    "reason": "Outside assignment, retained Step-4 presentation finding: Definition says the root -1 “is never included in this Cauchy evaluation”, but the called Cauchy algorithm evaluates all M roots and accepts no excluded-root argument. lem-s4-convolution-root-of-unity-reduction, Proof 1.2 shows mapped nonexceptional poles cannot equal -1, so the harmless auxiliary -1 output should be described as discarded, while H(-1) uses its direct formula. Route this minimal procedural clarification to its frontier owner.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-positional-encoding-and-causal-mask",
    "status": "fixed",
    "severity": "nonfatal",
    "locus": "statement",
    "reason": "The inequality j<=i and diagonal inclusion were correct, but the zero-based allowed-key prose omitted key 0. Explicit zero-based indices and keys 0,...,i repair this local inconsistency without changing the lower-triangular mask or positional formula.",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-hahn-hard-soft-attention-sequence-model",
    "status": "fixed",
    "severity": "nonfatal",
    "locus": "frontmatter",
    "reason": "The reference asserted that finite scalar affine/activation graphs implement all positionwise maps, although the hard-model definition permits arbitrary multivariate fixed maps. Qualified it to the case where finite-network implementations are chosen. The actual Definition, earliest-key rule, fixed-length-independent maps, EOS readout and soft-model hypotheses are unchanged.",
    "source_urls": [
      "https://aclanthology.org/2020.tacl-1.11.pdf"
    ],
    "familiar": false,
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-yun-transformer-grid-lookup",
    "status": "fixed",
    "severity": "fatal",
    "locus": "proof-step",
    "reason": "Step 6.1 used ReLU(z) as the residual correction, which leaves every negative coordinate unchanged. Replaced it by the allowed correction ReLU(-z), so z+ReLU(-z)=max(0,z). This zeros invalid negative states and preserves every nonnegative valid encoded state; finite code separation, pulses, and both lookup conclusions remain intact.",
    "source_urls": [
      "https://arxiv.org/pdf/1912.10077"
    ],
    "familiar": false,
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-fixed-width-transformer-lp-universality",
    "status": "fixed",
    "severity": "nonfatal",
    "locus": "proof-step",
    "reason": "The exact-zero invariant is achievable, but the original explanation mentioned only attention values and positive pulse centers, omitting the nonzero detector shift and clipping that restore zero. Added that full invariant, stable finite-state softmax simulation, and a bound uniform in ramp widths and temperatures. These local proof gaps are repaired without changing either universality claim; no nonzero exterior output is asserted.",
    "source_urls": [
      "https://arxiv.org/pdf/1912.10077"
    ],
    "familiar": false,
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-discretization-invariant-operator-family",
    "outcome": "confirmed_nonfatal",
    "reason": "Defined the nonnegative error supremum on empty compact input sets as zero; all nonempty convergence and sampling conditions are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-physics-informed-neural-network-loss",
    "outcome": "confirmed_nonfatal",
    "reason": "Defined Holder seminorms on sets with fewer than two points as zero, making singleton-boundary penalties well defined without changing other loss conventions.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-shin-elliptic-divergence-form-operator",
    "outcome": "confirmed_nonfatal",
    "reason": "The divergence formula and expansion are correct; removed the unsupported elliptic qualifier from the title. Consuming results explicitly impose ellipticity. Definition unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-shin-parabolic-operator-and-boundary",
    "outcome": "confirmed_nonfatal",
    "reason": "Made the nonempty bounded open spatial-domain requirement explicit so spatial derivatives and the cylinder interface are defined.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-neural-operator-compact-union-under-uniform-convergence",
    "outcome": "confirmed_nonfatal",
    "reason": "Added the proved intrinsic/ambient compactness equivalence required by the open-cover argument. The doubled-ball buffer and finite early-image cover prove the unchanged Statement without countable choice.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-neural-operator",
    "outcome": "confirmed_nonfatal",
    "reason": "Specified supremum norms on the continuous-function embedding targets. Checked layer dimensions, integral-subclass indexing, distinct-domain final layer and schematic composition.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-neural-operator-activation-classes",
    "outcome": "confirmed_nonfatal",
    "reason": "Preserved the intentionally empty diameter-based BA class, corrected misleading nonemptiness wording, and defined ambient C^m jets on arbitrary compact sets so derivative density is meaningful.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-finite-sampling-reconstruction-bridge-for-neural-operator-quadratures",
    "outcome": "confirmed_nonfatal",
    "reason": "Preserved the general Banach factorization theorem while conditioning its function-space-definition identification on that interface. Verified compact-union composition, tag reconstructions and integral-first factorization.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-shin-elliptic-energy-estimate",
    "outcome": "confirmed_nonfatal",
    "reason": "Replaced signed v by |v| in the first-order bound and square completion. The resulting v^2 absorption proves the unchanged estimate for every real v.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-neural-operator-mesh-discretization",
    "outcome": "confirmed_fatal",
    "reason": "Added an explicit integral-only final branch for distinct domains, avoiding undefined off-domain local evaluation. Specified lifted initialization, stored tag updates, projection and conditional reconstruction convergence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-fourier-neural-operator-layer",
    "outcome": "confirmed_nonfatal",
    "reason": "Verified section 4.4 equation (26) in both consulted full texts and corrected the locator. Made continuous periodic bias and continuous activation explicit; conjugate symmetry ensures real continuous outputs.",
    "uncertain": false,
    "source_urls": [
      "https://www.jmlr.org/papers/volume24/21-1524/21-1524.pdf",
      "https://arxiv.org/pdf/2108.08481"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-shin-smooth-dirichlet-approximants-from-sobolev-bootstrap",
    "outcome": "confirmed_fatal",
    "reason": "Replaced the unsupported half-space trace-kernel inference by existing closure-preserving chart and tangential-quotient suppliers. Strong H1 quotient limits put differentiated fields in H1_0, licensing the boundary bootstrap.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-neural-operator-discretization-invariance",
    "outcome": "confirmed_fatal",
    "reason": "General lifting need not factor through original input tags. Specified lifted-tag sampling S_n(a)=(P(a)(xi_j))_j and constructed its reconstruction; original-tag factorization requires pointwise lifting or the stated factorization condition.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-pinn-regularized-loss-consistency",
    "outcome": "confirmed_nonfatal",
    "reason": "Defined the identical regularized objective explicitly on the general measure sets, preserving full scope. Verified coordinatewise penalty absorption, occupancy rates and summable all-count failure probabilities without comparability.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-shin-elliptic-dirichlet-existence-and-residual-stability",
    "outcome": "confirmed_nonfatal",
    "reason": "Wrote the exponential-perturbation comparison implication explicitly before its barrier uses. Positive interior maxima contradict the strict operator inequality, licensing uniform bounds and boundary attainment. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-shin-parabolic-initial-boundary-existence-and-residual-stability",
    "outcome": "confirmed_nonfatal",
    "reason": "Applied energy identification on stopped intervals tau<T and used its explicit uniform C_E(T) bound. Monotone convergence proves full-interval energy convergence without residual Holder regularity at T. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "cex-neural-operator-sup-norm-discretization-does-not-control-c1",
    "outcome": "confirmed_nonfatal",
    "reason": "Verified M_pt membership and nonpolynomiality before applying UAT. Checked summable bump masses, bounded continuum C1 output, derivative quadrature growth at least 2^n and simultaneous supremum convergence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-pinn-linear-elliptic-consistency",
    "route": "frontier-owner",
    "affected_use": "Proof 1.1 applies [F3] to e_m=h_m-u*, and Proof 2.1 explicitly asserts C2(U) membership.",
    "invalidated_claim": "The sampling theorem allows trial classes with finite operator seminorms and an unspecified k; it does not itself guarantee classical C2 regularity.",
    "minimality": "State H_m subset C2(U) intersect C(bar U) for the classical PDE use; preserve sampling, objective, witnesses, rates and all PDE conclusions.",
    "reason": "Proof 1.1 applies [F3] to e_m=h_m-u*, and Proof 2.1 explicitly asserts C2(U) membership. The sampling theorem allows trial classes with finite operator seminorms and an unspecified k; it does not itself guarantee classical C2 regularity. State H_m subset C2(U) intersect C(bar U) for the classical PDE use; preserve sampling, objective, witnesses, rates and all PDE conclusions.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-pinn-linear-parabolic-consistency",
    "route": "frontier-owner",
    "affected_use": "Proof 1.1 uses classical stability and Proof 2.1 identifies the classical error as a variational solution.",
    "invalidated_claim": "The imported trial-class premise does not explicitly require C^{2,1}(Q) and continuous closed-cylinder representatives.",
    "minimality": "Require every admitted PDE trial/minimizer to belong to C^{2,1}(Q) intersect C(bar U times [0,T]); retain all supplied residual and energy hypotheses.",
    "reason": "Proof 1.1 uses classical stability and Proof 2.1 identifies the classical error as a variational solution. The imported trial-class premise does not explicitly require C^{2,1}(Q) and continuous closed-cylinder representatives. Require every admitted PDE trial/minimizer to belong to C^{2,1}(Q) intersect C(bar U times [0,T]); retain all supplied residual and energy hypotheses.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-shin-parabolic-residual-stability",
    "route": "frontier-owner",
    "affected_use": "Statement begins Let U subset R^d be bounded; Proof 3.1 invokes spatial interior derivatives and maxima on a stopped cylinder.",
    "invalidated_claim": "A bounded set need not be open, so the operator interface and classical derivatives are not defined for all admitted sets.",
    "minimality": "State nonempty bounded open U, or treat empty U separately and require bounded open U; preserve the residual estimate and sign convention.",
    "reason": "Statement begins Let U subset R^d be bounded; Proof 3.1 invokes spatial interior derivatives and maxima on a stopped cylinder. A bounded set need not be open, so the operator interface and classical derivatives are not defined for all admitted sets. State nonempty bounded open U, or treat empty U separately and require bounded open U; preserve the residual estimate and sign convention.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "ex-fourier-neural-operator-layer-and-claim-boundary",
    "route": "frontier-owner",
    "affected_use": "The frontmatter locator and both Example references cite section 5.3 for the Fourier layer.",
    "invalidated_claim": "The consulted Kovachki full text puts the Fourier multiplier in section 4.4, equation (26); the finite-mode computation itself is correct.",
    "minimality": "Correct only the source locators to section 4.4; no statement, proof or dependency change is needed.",
    "reason": "The frontmatter locator and both Example references cite section 5.3 for the Fourier layer. The consulted Kovachki full text puts the Fourier multiplier in section 4.4, equation (26); the finite-mode computation itself is correct. Correct only the source locators to section 4.4; no statement, proof or dependency change is needed.",
    "uncertain": false,
    "source_urls": [
      "https://www.jmlr.org/papers/volume24/21-1524/21-1524.pdf",
      "https://arxiv.org/pdf/2108.08481"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-neural-operator-compact-uniform-universality",
    "route": "frontier-owner",
    "affected_use": "F6 claims ReLU compact-uniform density by the UAT, and Proof 1.2 infers ReLU A0 membership.",
    "invalidated_claim": "The local UAT explicitly requires M_pt membership; its easy verification is omitted at this use, matching the assigned counterexample citation gap.",
    "minimality": "Add the activation-class supplier and state that ReLU is continuous, Borel, pointwise locally bounded, has empty discontinuity set and is not polynomial almost everywhere; then invoke the pointwise UAT.",
    "reason": "F6 claims ReLU compact-uniform density by the UAT, and Proof 1.2 infers ReLU A0 membership. The local UAT explicitly requires M_pt membership; its easy verification is omitted at this use, matching the assigned counterexample citation gap. Add the activation-class supplier and state that ReLU is continuous, Borel, pointwise locally bounded, has empty discontinuity set and is not polynomial almost everywhere; then invoke the pointwise UAT.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "ex-affine-halfspaces-have-vc-dimension-p-plus-one",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The standard-basis supplier explicitly uses indices 0,...,k-1, while F2 silently used 1,...,k. This is a nonfatal indexing omission: the bijection i -> i-1 preserves every coordinate evaluation, basis cardinality, and dependence argument. Added that local convention in Example and F2. Independently checked f(0)=s0 and f(e_i)=s_i; the augmented dependence has both coefficient signs, and negative coefficients contribute strictly positive products because label 0 forces f<0. The diagram uses two drawing units per coordinate unit, so its boundary and labels agree with f=1-2x1-2x2. No Statement or Definition section changed, no choice axiom or new prerequisite is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "def-vc-pac-learning-criterion",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "The first paragraph fixed one law P, but the second quantified over all laws without requiring the selected risk map to be measurable for each. Thus ordinary probabilities could be undefined. Kept the law-specific notion explicitly named under P, and required risk measurability under every law quantified over by each PAC criterion. Realizable laws alone suffice for realizable PAC; all laws are required for agnostic PAC. Empirical-risk and infimum conditions, selector-existence caveats, and finite-class compatibility are preserved. Direct consumers are the realizable and agnostic sample-complexity theorems; the former only proves a fixed-law measurable event and remains sound, while the latter needs the assigned global-hypothesis repair.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "thm-vc-agnostic-sample-complexity",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "The fixed-law entropy bound only controls the event under that P; it cannot establish the PAC definition quantifying over every law. Added universal-law risk measurability and conditions 1–4 for the PAC corollary while retaining the original fixed-law inequality, rate, and constants. The same supplied approximate ERM is pointwise approximate and therefore works under each law. Proof 2.1 now explicitly applies the argument to each law. Checked excess <=2a_m+eta without choosing a population minimizer, both a_m terms <=epsilon/8 under the displayed sample threshold, eta<=epsilon/2, and the d=0 singleton case. AC remains assumed only through the concentration supplier. No direct item consumer of this theorem was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "record-no-published-consumer-impact",
    "ids": [
      "ex-affine-halfspaces-have-vc-dimension-p-plus-one",
      "def-vc-pac-learning-criterion",
      "thm-vc-agnostic-sample-complexity"
    ],
    "reason": "All assigned carriers are draft. Exact canonical-ID searches found only the two draft frontier theorem consumers of the changed PAC Definition and no item consumer of the changed agnostic Statement. No published consumer repair or published mathematical finding is proposed. Existing published AC/logarithm/exponential defining clauses were read only to refresh stale assigned contract quotations; their mathematical content is unchanged by this work.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-stochastic-gradient-descent",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The cited filtered-space definition explicitly starts at zero, whereas the algorithm supplied only times t>=1. This is a nonfatal indexing-interface omission: every increasing positive-time filtration extends by F_0={empty,Omega}, with no change to any update or oracle law. Changed only the filtration index to t>=0; the procedure still starts at x_1, has finite positive steps, and returns x_1 through x_{N+1} without moment assumptions.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "route": "frontier-owner",
    "severity": "nonfatal",
    "status": "open",
    "supplier": "alg-stochastic-gradient-descent",
    "id": "alg-minibatch-stochastic-gradient-descent",
    "path": "items/alg-minibatch-stochastic-gradient-descent.md",
    "affected_use": "Definition: form the finite average of F_{t+1}-measurable G_{t,j} and set x_{t+1}=x_t-alpha_t average(G_{t,j}).",
    "disposition": "frontier-owner-minimal-repair-required",
    "invalidated_claim": "The mathematical update and conclusions remain sound; the consumer itself still calls a sequence indexed only by t>=1 or k>=1 a discrete filtered probability space, whose local definition requires time zero.",
    "minimality": "Change only the consumer filtration index lower bound from 1 to 0; every existing positive-time filtration has the trivial time-zero extension. No update, moment bound, or theorem inequality needs changing.",
    "source_excerpt": "(\\mathcal F_t)_{t\\ge1}",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "reason": "Direct consumer inspection found the same time-zero interface omission; extend by the trivial sigma-algebra to preserve every mathematical conclusion."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "route": "frontier-owner",
    "severity": "nonfatal",
    "status": "open",
    "supplier": "alg-stochastic-gradient-descent",
    "id": "thm-stochastic-direction-expected-average-stationarity",
    "path": "items/thm-stochastic-direction-expected-average-stationarity.md",
    "affected_use": "F1 and Proof 2.1: substitute x_{t+1}=x_t-alpha_t G_t in the smoothness inequality, condition on F_t and telescope from t=1.",
    "disposition": "frontier-owner-minimal-repair-required",
    "invalidated_claim": "The mathematical update and conclusions remain sound; the consumer itself still calls a sequence indexed only by t>=1 or k>=1 a discrete filtered probability space, whose local definition requires time zero.",
    "minimality": "Change only the consumer filtration index lower bound from 1 to 0; every existing positive-time filtration has the trivial time-zero extension. No update, moment bound, or theorem inequality needs changing.",
    "source_excerpt": "(\\mathcal F_t)_{t\\ge1}",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "reason": "Direct consumer inspection found the same time-zero interface omission; extend by the trivial sigma-algebra to preserve every mathematical conclusion."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "route": "frontier-owner",
    "severity": "nonfatal",
    "status": "open",
    "supplier": "alg-stochastic-gradient-descent",
    "id": "thm-nonconvex-sgd-random-iterate-stationarity",
    "path": "items/thm-nonconvex-sgd-random-iterate-stationarity.md",
    "affected_use": "F1 and Proof 2.1: use x_{k+1}=x_k-gamma_k G_k for k=1,...,N before conditional descent and weighted sampling.",
    "disposition": "frontier-owner-minimal-repair-required",
    "invalidated_claim": "The mathematical update and conclusions remain sound; the consumer itself still calls a sequence indexed only by t>=1 or k>=1 a discrete filtered probability space, whose local definition requires time zero.",
    "minimality": "Change only the consumer filtration index lower bound from 1 to 0; every existing positive-time filtration has the trivial time-zero extension. No update, moment bound, or theorem inequality needs changing.",
    "source_excerpt": "(\\mathcal F_k)_{k\\ge1}",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "reason": "Direct consumer inspection found the same time-zero interface omission; extend by the trivial sigma-algebra to preserve every mathematical conclusion."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-constant-step-sgd-noise-floor",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "F9 and F10 omitted essential smoothness and initialization/lower-bound hypotheses from their standalone summaries. This is nonfatal for this example: f(x)=x^2/2 is C1 with exactly 1-Lipschitz gradient and global lower bound zero, x_0 is deterministic, and all directions and iterates have finite moments on the sign cube. Restored both complete cited interfaces and explicitly checked them in 2.2; also made the y_s=x_{s-1} algorithm reindexing explicit in 1.1. Direct prefix averaging verifies zero sign means, variance sigma^2, the mean recurrence and variance geometric sum. Their sum gives the exact displayed second moment and limit, including b=0, sigma=0 and N=1. The two theorem bounds use Delta=x_0^2/2 and the correct step thresholds. Example and claim strength are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-sgd-biased-direction-violates-alignment",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The algorithm names its first iterate x_1, while this example starts at x_0; the original F1 invocation omitted that relabeling. This is nonfatal because the update law is invariant under shifting time and the singleton filtration satisfies both index conventions. Verification 1.1 now applies the actual finite-horizon procedure to y_s=x_{s-1}, H_s=G_{s-1}=-y_s and the constant filtration, recovering every claimed zero-based update without changing the Example. Induction gives x_t=(1+alpha)^t x_0 !=0; f(x_1)=(1+alpha)^2 f(x_0)>f(x_0), and the conditional direction-gradient product is -x_t^2<0, excluding every positive alignment constant. The deterministic mean and zero variance are immediate on the singleton; AC is retained only for comparison with the theorem.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "ex-unstable-heavy-ball-parameters",
    "model": "gpt-6-luna",
    "context_sha256": "b390c4c3204db028038798d5d6ae4d35957d3fcb57401453d69066b6ce70d812",
    "reason": "F3 is supported by the cited theorem as a whole: its Statement explicitly concludes that R is a complete totally ordered field, its deps include thm-reals-ordered-field, and its proof step 9.1 combines the least-upper-bound result of step 8.1 with the ordered-field structure in L4. This is an established supplier dependency, not an additional undischarged hypothesis imposed on the example. F4 therefore applies to R; a redundant direct citation to the ordered-field theorem is unnecessary.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-metadata-repair",
    "id": "ex-unstable-heavy-ball-parameters",
    "severity": "nonfatal",
    "status": "fixed",
    "path": "research/machine-learning-all-101-2026-10-19-batch-41.proof-contracts.json",
    "reason": "The assigned contract citation quotes F3 and F4 retained hyperlinks removed from their published supplier Statements by prior reference-layout repairs. Updated only those two exact quotation mirrors under acquire/reread/edit/check/release; the strict focused contract validator passes with no errors or warnings. No mathematical assertion or item carrier was changed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "alg-amsgrad",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "The linked published library variant explicitly maximizes bias-corrected moments and separately distinguishes Reddi Algorithm 2; the rejection conflates those procedures.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1904.09237"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-geometric-polynomial-decay",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "The completeness corollary explicitly concludes that the reals form a complete ordered field and depends on the ordered-field theorem; no missing mathematical premise.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-adam-fixed-epsilon-online-regret-counterexample",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "locus": "proof-step",
    "affected_use": "Original Verification 1.1 cites F2 to prove that the run is admissible, although F2 is available only for finite admissible runs.",
    "repair": "Induct directly on v_t before using the qualified F2; preserve the complete Example claim.",
    "reason": "The admissible-run lemma cannot establish its own admissibility hypothesis. Direct induction now establishes that hypothesis before the lemma is applied.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1904.09237"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-adam-fixed-epsilon-online-regret-counterexample",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "locus": "frontmatter",
    "affected_use": "sources.references[0].locator named PDF pp.17–18 for Appendix F, which instead occupies PDF pp.21–23.",
    "repair": "Correct only the page range to PDF pp.21–23.",
    "reason": "Appendix F occupies PDF pp.21–23, as verified in the cited 23-page paper; this nonfatal locator defect is fixed.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1904.09237"
    ],
    "familiar": false
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "record-no-new-maintenance",
    "ids": [
      "alg-amsgrad",
      "lem-geometric-polynomial-decay",
      "ex-adam-fixed-epsilon-online-regret-counterexample"
    ],
    "reason": "All assigned defining sections remain unchanged. No published item was edited and no new published-consumer maintenance event arose.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1904.09237"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-finite-width-iid-relu-stack-has-zero-atom",
    "severity": "nonfatal",
    "locus": "Example final caveat",
    "finding": "The general conditional backward recurrence was described as requiring atomlessness, although its Statement permits a common zero probability p_l and only specializes to a half factor at p_l=0.",
    "resolution": "Replaced only the Example caveat: zero atoms are allowed in the general recurrence, W_2/gated-signal independence fails in this witness, and the half-factor special case additionally requires p_2=0.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-homogeneous-classifier-margin-and-exponential-risk",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "The final defining clause allowed theta=0 when the score map is not homogeneous: a single positive constant activation gives risk e^(-1)<1 and zero denominator. Added the explicit theta!=0 domain restriction, preserving every homogeneous nonzero use and all risk and margin formulas.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-recursive-hard-margin-comparison-trajectory",
    "severity": "nonfatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "F3 omitted the nonempty-set hypothesis of its exact supplier. All uses are nevertheless on nonempty feasible norm sublevels, a finite nonempty convex hull, a nonzero E_m unit sphere, or a coercive sublevel, so the comparison construction and summable-defect argument remain valid. Restored nonemptiness in F3; the Statement and proof are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-homogeneous-clarke-flow-margin-monotonicity",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "The cited F4 supplier states its rule only for classifier-model margins, while the Statement allows arbitrary homogeneous margins. Added a local derivation of the exponential scalar rule, finite-sum inclusion (by support functions and nearest-point separation), flow decomposition and loss derivative for exactly the given arbitrary margins. The radius, entropy, monotonicity and divergent-radius arguments then apply without restricting the Statement. Also qualified F5 by nonemptiness.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1906.05890"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-homogeneous-clarke-flow-produces-approximate-margin-kkt-points",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "The numerical rejection is false: L*gamma0*integral<=L*gamma0/k^3 cancels the positive L*gamma0 before dividing by log-radius mass 1/k, yielding beta^(-2)-1<=1/k^2. Independently, F7 had the same unsupported classifier-model restriction as the monotonicity item while this Statement permits arbitrary margins. Repaired that dependency-citation gap with an explicit general finite-sum and arc-derivative calculation; the good-time construction, multiplier scaling and N/e aggregate complementarity bound remain unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1906.05890"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "def-clarke-subdifferential-and-gradient-flow",
    "route": "frontier-owner",
    "status": "open",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "affected_use": "The Euler supplier uses the limiting-gradient characterization; both repaired flow proofs use nonempty compact convex subdifferentials, that characterization and the support-function identity. The approximate-KKT proof additionally uses local boundedness.",
    "reason": "The current Definition asserts the limiting-gradient characterization, nonempty compact convex values, support identity, local boundedness, closed graph and support upper semicontinuity, but has deps: [], justified_by: [], and no Proof. These are standard nonsmooth-analysis results, not conventions following by definition. The Step-4 concern is confirmed as a missing local-proof obligation. The assigned repairs establish their own finite-exponential calculus but cannot supply this foundational theorem outside their write lane. Owner resolution is required before run closure.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1906.05890"
    ],
    "familiar": false
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "record-current-observation",
    "ids": [
      "alg-gradient-descent",
      "def-countable-choice",
      "thm-strict-separation-of-a-point-from-a-closed-convex-set"
    ],
    "status": "outside_scope_no_edit",
    "reason": "The three historical Step-4 presentation alerts were checked at their cited current defining clauses: the inline wikilinks have already moved to immediately following references sections. No new edit or acceptance is claimed here. Original digest alerts remain unchanged; their existing maintenance owners retain receipt and direct-consumer obligations.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/published-consumer-supplier-ledger.md"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-sample-covariance-empirical-spectral-distribution",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "locus": "Definition, final sentence",
    "reason": "The final sentence introduces an unqualified sequence, whereas def-sequence uses indices in N including zero (def-natural-numbers). Its n=0 term S(X_0) is outside the explicitly positive-row domain of S and would divide by zero. Explicitly indexing (X_n) by n>=1 and requiring positive integer p_n makes every term well-defined without changing the Gram formula, multiplicity normalization, or conditional positive-edge convention."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-largest-sample-covariance-eigenvalue-lower-bound",
    "status": "open",
    "locus": "Statement, index/domain clause",
    "reason": "The unrestricted index permits n=0, where S_n and p_n/n are undefined. Positive limiting aspect ratio ensures positive p_n only eventually; an initially empty column list also needs exclusion.",
    "affected_use": "Statement: For each $n$, let $X_n=(\\xi_{ij})_{1\\le i\\le n,1\\le j\\le p_n}$; S_n=X_n^T X_n/n and F3/step 2.1 transfer the largest eigenvalue.",
    "minimality": "Change only the domain clause to: For each positive integer n, let p_n be a positive integer and X_n=(xi_ij)_{1<=i<=n,1<=j<=p_n}. Preserve all distributional assumptions and conclusions.",
    "route": "ordinary frontier-owner lane; outside unit 46 assigned write scope",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-largest-sample-covariance-eigenvalue-upper-bound",
    "status": "open",
    "locus": "Statement, index/domain clause",
    "reason": "The unrestricted index permits n=0 and hence division by zero in S_n and c_n=N_n/n; an empty column list would leave lambda_max(S_n) undefined.",
    "affected_use": "Statement: For each $n$, let $X_n=(\\xi_{ij})_{1\\le i\\le n,1\\le j\\le p_n}$; S_n=X_n^T X_n/n and proof steps 1.1-2.1 use N_n/n and lambda_max(S_n).",
    "minimality": "Change only the domain clause to: For each positive integer n, let p_n be a positive integer and X_n=(xi_ij)_{1<=i<=n,1<=j<=p_n}. Preserve all distributional assumptions and conclusions.",
    "route": "ordinary frontier-owner lane; outside unit 46 assigned write scope",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-bai-yin-smallest-singular-value-limits",
    "status": "open",
    "locus": "Statement, index/domain clause",
    "reason": "At n=0 the displayed singular-value list has length r_0=0 and no smallest member, and division by sqrt(n) is undefined. Positive p_n must also be specified for every indexed term.",
    "affected_use": "Statement: For each $n$, let $X_n=(\\xi_{ij})_{1\\le i\\le n,1\\le j\\le p_n}$; r_n=min(n,p_n), s_{r_n}(X_n)/sqrt(n), and proof step 1.1 use the smaller Gram matrix.",
    "minimality": "Change only the domain clause to: For each positive integer n, let p_n be a positive integer and X_n=(xi_ij)_{1<=i<=n,1<=j<=p_n}. Preserve all distributional assumptions and conclusions.",
    "route": "ordinary frontier-owner lane; outside unit 46 assigned write scope",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-largest-eigenvalue-sample-covariance-edge",
    "status": "open",
    "locus": "Statement, index/domain clause",
    "reason": "The covariance at n=0 is undefined; positivity of all column counts is needed for the largest-eigenvalue list. This is the same missing domain qualification, independent of the sharp-edge argument.",
    "affected_use": "Statement: For each $n$, let $X_n=(\\xi_{ij})_{1\\le i\\le n,1\\le j\\le p_n}$; S_n=X_n^T X_n/n and proof steps 1.1-2.1 join largest-eigenvalue bounds.",
    "minimality": "Change only the domain clause to: For each positive integer n, let p_n be a positive integer and X_n=(xi_ij)_{1<=i<=n,1<=j<=p_n}. Preserve all distributional assumptions and conclusions.",
    "route": "ordinary frontier-owner lane; outside unit 46 assigned write scope",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-smallest-positive-eigenvalue-sample-covariance-edge",
    "status": "open",
    "locus": "Statement, index/domain clause",
    "reason": "The covariance at n=0 is undefined. This concerns the matrix domain, separate from the correctly conditional definition of its smallest positive eigenvalue and eventual existence assertions.",
    "affected_use": "Statement: For each $n$, let $X_n=(\\xi_{ij})_{1\\le i\\le n,1\\le j\\le p_n}$; Set S_n=X_n^T X_n/n; F2 and proof steps 1.1-3.1 identify squared singular values divided by n.",
    "minimality": "Change only the domain clause to: For each positive integer n, let p_n be a positive integer and X_n=(xi_ij)_{1<=i<=n,1<=j<=p_n}. Preserve all distributional assumptions and conclusions.",
    "route": "ordinary frontier-owner lane; outside unit 46 assigned write scope",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-bounded-complex-iid-matrix-norm-bound",
    "outcome": "false_positive",
    "locus": "facts-block",
    "reason": "F3 assumes Y >= a 1_E on the entire probability space, which already forces Y >= 0 both on E and off E. Exponential Markov is applied to a positive exponential in step 2.1; the finite complex nets, subgaussian bound and summable union bound establish the claimed eventual norm bound. The proposed negative-off-E counterexample violates F3.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-hermitian-spectral-measure-is-probability",
    "outcome": "confirmed_nonfatal",
    "locus": "facts-block",
    "reason": "The Dirac definition separates its set function from the probability-measure proposition. Added that proved proposition explicitly to deps and F4. This is a nonfatal citation omission: the already cited spectral-measure definition also proves the finite sums are Borel measures; ranks/d and squared projection norms sum to one by the orthonormal decomposition. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-bounded-complex-resolvent-deterministic-equivalent",
    "outcome": "confirmed_nonfatal",
    "locus": "proof-step",
    "reason": "The fixed-threshold supplier statement need not provide a uniform starting index for thresholds tending to zero. The claimed shrinking-threshold integration was therefore unsupported as an interface use. Replaced it by boundedness plus convergence in probability at each fixed threshold, giving the sufficient o(1) third error. The deterministic-direction sequence criterion proves uniformity over x. The resolvent identity and other two errors are unchanged; Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "cor-isotropic-minimum-norm-risk-closure-under-edge-gap",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "locus": "proof-step",
    "reason": "F6 extended a row-indexed theorem to repeated p_n without justification, leaving the overparameterized bias limit unsupported. Repaired by completing strictly increasing row-dimension subsequences for expectation limits, proving a finite-matrix fourth-moment concentration bound summable in the original n, and transferring bounded truncations with the real upper-edge norm bound. Negative-axis continuity and the positive gap recover the kernel mass; exact noise decomposition and reciprocal integrals give both original formulas. Companion positivity is now checked. Statement unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/0708.1720"
    ],
    "familiar": false,
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-isotropic-sample-covariance-directional-marchenko-pastur-limit",
    "outcome": "confirmed_nonfatal",
    "locus": "proof-step",
    "reason": "The omitted companion admissibility check is required by fixed-point uniqueness. It follows from the cited MP atom: (1-c)delta_0+c mu_c is a nonnegative probability measure, including exact cancellation of the negative zero coefficient when c>1. Added this check and positivity of m, and rearranged the scalar equation explicitly. Also defined X_n as the upper-left n by N_n block, resolving the Step-4 presentation concern. The original limiting claim is preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no-update",
    "reason": "All five assigned carriers are draft. No Statement or Definition section changed, no outside item was edited, and no potentially defective published consumer was discovered in this review.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/published-consumer-supplier-ledger.md"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-ridgeless-minimum-norm-regression",
    "severity": "nonfatal",
    "locus": "facts-block",
    "reason": "Confirmed a nonfatal citation mismatch: F1 cites only a conditional definition, and Verification 1.1 incorrectly calls F2 the pseudoinverse existence-and-uniqueness theorem. This is not a missing mathematical prerequisite: F2 depends on the projection theorem, which explicitly depends on thm-moore-penrose-pseudoinverse-exists-and-is-unique. Its SVD construction and block uniqueness argument apply to every finite real X, including rank zero. The repair cites that theorem directly in F1 and deps, checks the p-by-n shape in 1.1, and retains F2 solely for the minimum-norm characterization.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-bivariate-gaussian-feature-expectations-continuous",
    "severity": "fatal",
    "class": "accuracy",
    "subclass": "citation-missing",
    "location": "proof-step",
    "step": "2.1",
    "disposition": "fixed",
    "adjudication_ref": [
      {
        "id": "lem-bivariate-gaussian-feature-expectations-continuous",
        "model": "gpt-6-luna",
        "context_sha256": "417f0dd7e1efe89c4756b66ae173d1fc2fbacd536893c02987a518f8914902e0"
      }
    ],
    "reason": "Step 2.1 identifies stipulated Gaussian laws with a new square-root realization, but def-multivariate-normal-law explicitly defers uniqueness. Added the proved lem-characteristic-function-of-a-multivariate-normal-law to deps and F1 and applied its uniqueness assertion, valid also for singular covariances. The missing citation licenses the essential law replacement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "lem-gaussian-hermite-covariance-expansion",
    "severity": "fatal",
    "class": "accuracy",
    "subclass": "invalid-inference",
    "location": "proof-step",
    "step": "2.1",
    "disposition": "fixed",
    "adjudication_ref": [
      {
        "id": "lem-gaussian-hermite-covariance-expansion",
        "model": "gpt-6-luna",
        "context_sha256": "12a15f92272c2c7a367ddcd7a1c89f236eee22c56f62fd29673b4b79ce6a50d3"
      }
    ],
    "reason": "The defined G_x(s)=exp(sx-s^2/2) makes the original G_s(X)G_t(Y) expectation identity false: at rho=0 and s=t=0 its left side is 1/2, whereas exp(rho st)=1. Its parameter derivatives therefore cannot yield the claimed Hermite moments. Corrected to G_X(s)G_Y(t), calculated the expectation directly from the given scalar Gaussian projection sX+tY, and justified differentiation using marginal Gaussian exponential moments, Cauchy–Schwarz, the mean-value theorem and dominated convergence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "reason": "Both assigned carriers are draft, both original Statements remain byte-identical, and neither repair creates a new item or changes an existing mathematical interface. No published consumer defect was discovered in these assigned reviews.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-bounded-linear-predictor-rademacher-bound",
    "outcome": "false_positive",
    "reason": "The empirical complexity is a finite uniform sign average, independent of any observation law P. Even the cited probability-space setup can be instantiated with the Dirac probability at 0, which belongs to X_R for R>=0; its fixed sample need not be IID or supported by P. Each g_w is continuous and [0,1]-valued by Cauchy-Schwarz, and the sign supremum is explicitly finite. Thus no missing probability law invalidates the displayed quantity or bound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-bounded-linear-predictor-rademacher-bound",
    "severity": "nonfatal",
    "locus": "research/machine-learning-all-101-2026-10-19-batch-5.proof-contracts.json: contracts.ex-bounded-linear-predictor-rademacher-bound.boundaries",
    "reason": "The zero boundary cited nonexistent step 3.1 and the nonempty-choice boundary attributed the explicit maximizing vector to step 2.1. Corrected only those evidence locators to actual steps 1.2 and 2.1; mathematical content and item guard remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-wasserstein-two-space-and-couplings",
    "model": "gpt-6-luna",
    "context_sha256": "9d32d42cf2da37dd7b9442af1e58417ec70d66f26771e6f1901305856f438198",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "The Definition introduces P2, couplings and the finite nonnegative square-root infimum; it does not assert the metric axioms. Its product-coupling proof establishes precisely well-definedness. thm-wasserstein-two-is-a-metric separately proves diagonal separation, symmetry and the gluing/Minkowski triangle inequality under AC. A descriptive title does not require duplicating that subsequent theorem.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-carath-ode-flow-with-integrable-local-bounds",
    "model": "gpt-6-luna",
    "context_sha256": "fcb5812228652d726c3808ab8beeabc209ad6914eeb6da0cc41c9c29d8707070",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The CC hypothesis and dependency were already present, so no missing axiom invalidates the flow theorem. However axiom_use and its contract mirror incorrectly restricted CC to scalar FTC despite step 5.1 invoking CC-dependent Lebesgue differentiation and a countable family of exceptional sets. Corrected both the declared use and the proof explanation: scalar FTC supplies one-sided averages; countably chosen null sets give a common good set. Contraction, variational estimates, inverse flow and compact-escape continuation remain valid.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "prop-existence-and-lower-semicontinuity-of-optimal-couplings",
    "model": "gpt-6-luna",
    "context_sha256": "f94881a2440028aeb30c6a1f79d203f35bfe012f3c91124662b4422323092650",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The zero-indexed convention makes the unqualified 1/n and 1/j choices incomplete at zero. Both approximate-minimizer families are now explicitly indexed by positive integers, preserving the estimates and theorem. Tight marginal laws give tight couplings by the compact-product union bound; weak projections preserve marginals; bounded continuous cost truncations and monotone convergence prove attainment and lower semicontinuity.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-gaussian-regularization-of-continuity-equation",
    "model": "gpt-6-luna",
    "context_sha256": "d3b473bafc44d75d86d0f6b7d2c6ffef1b8894d51e87f6b57367e72b91918ac1",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F4 cited only sum, scalar-multiple and increasing-limit closure, so its claimed quotient closure was unsupported as a citation. Replaced that overstatement and proved the quotient measurability locally: since p>0, every component satisfies {j_i/p>r}={j_i-rp>0}, a Borel set by the actual cited closure rules. Kernel integration makes finite p and j Borel; Gaussian derivative bounds and a positive compact-tube minimum of p give integrable local velocity and Lipschitz bounds; weighted Cauchy-Schwarz gives the action inequality and cutoff/Fubini testing gives the continuity equation.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-wasserstein-two-is-complete",
    "model": "gpt-6-luna",
    "context_sha256": "8d1ae4491f3d5ac740dba16bede2eaa7583432216e2fef8abc63d105ef418439",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "On the original N-indexed product, two sequences differing only at coordinate zero have D=0, so D is not a metric and Prokhorov cannot be invoked as written. Replaced S by the explicitly positive-indexed product matching every finite gluing and embedding. Every coordinate is now detected, coordinatewise completeness and geometric-tail estimates give completeness, rational eventually-zero sequences give separability, and compact-coordinate products give tightness. Adjacent optimal couplings then yield an almost-sure summable-increment limit with L2 tail control and hence W2 convergence. Also completed the reverse topology inclusion and cited the metric theorem for the final triangle inequality.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-wasserstein-two-metric-topology",
    "model": "gpt-6-luna",
    "context_sha256": "79d9a7eb02d50574aba8a12e111ee6ba53f981a1c6626b8a6c2d7039960500a4",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The witness n^(-2) needs positive indices; the statement already used sup over n>=1 but did not explicitly assign that domain to its sequence. Specified (mu_n) indexed by positive integers in Statement and Given, so every witness weight is defined, nonnegative, and sums with its complement to one. Its second moment is one and every coupling to delta_0 has that forced cost. The main equivalence remains unchanged: vanishing optimal L2 displacement gives narrow convergence and uniform tails; the finite continuity-cell matching plus residual product coupling proves the converse.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-wasserstein-translation-of-a-dirac-mass",
    "model": "gpt-6-luna",
    "context_sha256": "c42ee3bb5be9ed20175621be1f34e6f12248586364f7064c1b437cfe8ea90afc",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The example omitted the ambient dimension declaration required by its Euclidean Wasserstein definition. Added an integer d>=1 to the Example and Given without changing the translation, speed, continuity equation or minimal-action claim. The sole Dirac-pair coupling gives W2=|t-s||b|, the smooth-test chain rule integrates to zero, and the existing minimum-velocity theorem applies under the retained AC assumption to give minimum action T|b|^2, including b=0.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update-required",
    "reason": "All seven assigned items are draft. No published consumer interface changed or defective published consumer was found in this lane. The separate Gaussian endpoint digest alert is already repaired in its current draft carrier.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-feature-measure-energy",
    "model": "gpt-6-luna",
    "context_sha256": "debf6d2171253fb48745f64ce89b01085f9572eabd8065aa8757fda33d3b8f9a",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "Assumption 2.1(iii)(c), PDF page 4, explicitly says maximal norm and does not exclude domain normals. Corrected the source attribution while retaining the precise minimum-norm supporting-selection condition and all energy hypotheses. This provenance defect does not invalidate the independently proved bounded-selection variant.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1805.09545"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-bochner-time-l2-is-separable-hilbert",
    "model": "gpt-6-luna",
    "context_sha256": "0799224f9c91e11cc3089abe3c52ec70d44328776ca72713fed3696d435f8c0b",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "F5 only asserts existence of an approximating algebra. Added the finite-measure sigma-algebra argument for the particular rational-interval algebra, including complements and countable unions, and disjointified cells to retain values in the arbitrary given dense set D. The completeness proof uses summable increments in H and monotone convergence; no Statement change.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-label-l2-space-is-separable-hilbert",
    "model": "gpt-6-luna",
    "context_sha256": "083a485f82fcfd1123607fda14f9ab241085b96f3dbcfd04ebc5ead9a6b784ae",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The cited Cauchy–Schwarz theorem applies after an inner product is established. Replaced that circular invocation with pointwise Euclidean Cauchy–Schwarz for integrability, linearity and symmetry of the integral pairing, and positive definiteness on the a.e. quotient. Finite-coordinate scalar completeness and countable-generator separability remain valid.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-localized-hilbert-lift",
    "model": "gpt-6-luna",
    "context_sha256": "22a22730fc2e540ba83965af41584c1b783b7d3d6e8a1b59a739fde0599f3c0c",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "The identity lift lies in L2(mu0) exactly when the initial law has finite second moment; an arbitrary probability law need not. Explicitly required mu0 in P2(Omega), concentrated on Qr for the finite-energy localized start, and specified its Borel label sigma-algebra. The arbitrary-label definition and integral formula are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-characteristics-unique-and-stable",
    "model": "gpt-6-luna",
    "context_sha256": "08c687b7416082145b70f5eff8bd934c75ff49cea67178a4b65acbd41ad14783",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The proof chose an optimal initial plan without citing the attainment supplier. The stability argument works for any initial coupling: replaced that choice by an epsilon-optimal coupling from the defining infimum, obtained D(t) <= exp(2(Cr-lambdaV)t)(W2(mu0,nu0)^2+epsilon), and then let epsilon decrease to zero. Checked the independent implicit-Euler characteristic construction, minimum selection, and superposition identification.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-w2-distance-derivative-under-a-continuity-equation",
    "model": "gpt-6-luna",
    "context_sha256": "da905c65706efb882a4312c0b1ce820d8e77f0fd697cf11f0ada27f11aa29f61",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "A finite-action continuity-equation solution has its defined repository meaning from def-continuity-equation-with-finite-action: the opening clause requires a narrowly continuous curve in P2(Rd). Thus the proposed constant infinite-second-moment counterexample is inadmissible. The superposition supplier inherits that definition, so Z0 belongs to path-space L2; finite action propagates the norm bound, and disintegrating at t proves the derivative inequality for every optimal plan.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-feature-energy-strong-wasserstein-subgradient",
    "model": "gpt-6-luna",
    "context_sha256": "fde391318ba7f517961713a1847ad483f6c9b9800640ed6693ea83f8f1fb66b6",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "F4 incorrectly attributed a measurable minimum section to AC/Bochner suppliers. It now assigns only inherited countable-choice approximation duties to them and explicitly assigns selection measurability and the norm bound to F2. On coupling labels the semiconvex Hilbert inequality gives the asserted all-coupling inequality; conversely deterministic perturbations recover the Hilbert supporting inequality, proving minimum-norm uniqueness.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-localized-lift-generates-continuity-equation",
    "model": "gpt-6-luna",
    "context_sha256": "37979aa54d01f3eccc81e0a093180c07e22dd99c997ea8c32db64acc65a9a592",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The cited F2 supplier lem-localized-lift-subdifferential proves, in steps 1.2 and 4.1, coercive resolvent existence, its Lipschitz estimate, the (1+epsilon alpha)|z_epsilon|^2 projection bound, and convergence to the full shifted minimum. These are precisely the argument explicitly invoked in step 2.3; the envelope C1 formula is proved there by two comparisons. The L2 gradient-closure approximation and orthogonality to every competing velocity then establish minimum action. No missing mathematical premise was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-localized-wasserstein-flow",
    "model": "gpt-6-luna",
    "context_sha256": "f5c59e1c9342bcaf96d1c9e9b55e7ce98e4be1e85fb780ed2dc40a901004bd18",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "The cited lift lemma explicitly proves dot X(t,s)=v_t(X(t,s)) for almost every (t,s) in proof step 1.1, by the minimum-norm Hilbert-flow theorem and exact lifted minimum-section formula. That step also proves equality of Hilbert and Eulerian actions. The theorem uses precisely that identity in step 2.1. The EVI combines the distance derivative with the all-coupling subgradient inequality with the correct sign; characteristic stability gives uniqueness and contraction. No item edit is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-global-wasserstein-flow-existence-uniqueness-and-stability",
    "model": "gpt-6-luna",
    "context_sha256": "39a333c65501faf1faa3adfcb8a9fdfcfcc3b988b84082785c669474f5d6bf10",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "The second stability quantifier did not state the P2 domain required to define W2 and the flows; cutoff sets can be unbounded, so concentration alone is insufficient. Added mu0,nu0 in P2(Omega), preserving the intended flow domain and estimate. The patching proof and global competitor uniqueness use the escape bound and continuous-forcing characteristics. Also chose KT nonnegative before taking the time supremum.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-finite-particle-flows-converge-in-w2",
    "model": "gpt-6-luna",
    "context_sha256": "6d78112a9afe74eb24a7dd2747ee5ecf422e2eb897149f29474ea7f785b8195d",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The localized lift equals Fm only when every particle is in the chosen cutoff. Corrected F1 and step 1.1 to state Er=Fm on Qr^m and Er=+infinity outside. Step 2.1 already places each compact particle path in a relative Omega-neighborhood contained in QR^m, so its local subdifferential identification is valid there. The two-sided chain-rule argument yields finite action, Hilbert uniqueness identifies the atomic flow, and a common escape radius gives the claimed deterministic W2 estimate.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update-required",
    "reason": "All assigned carriers and all direct consumers of the three changed defining sections are draft members of the frozen frontier. No published or outside-frontier consumer was discovered in the item dependency/reference inventory or the library/article search.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-mean-field-first-variation-and-measure-optimality",
    "status": "fixed",
    "severity": "nonfatal",
    "outcome": "confirmed_nonfatal",
    "reason": "Cited the existing choice-free Dirac probability proposition. Scaling proves necessity, and convexity with the assumed vanishing proves sufficiency. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-partial-homogeneous-relaxed-objective",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "other",
    "outcome": "confirmed_fatal",
    "reason": "An everywhere pointwise measurable simple approximation now licenses every finite-measure Bochner moment. Variation domination and the Jordan-sign lift establish the preserved infimum and attainment.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-mean-field-projection-identities",
    "status": "fixed",
    "severity": "nonfatal",
    "outcome": "confirmed_nonfatal",
    "reason": "Handled empty Theta by zero measures before applying F4 to nonempty Theta. Scalar pairing and compact-sphere finite approximation establish the remaining claims. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-w2-convergence-implies-homogeneous-projection-convergence",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "outcome": "confirmed_fatal",
    "reason": "Restored d>=2 for the supplied h2 interface. Coupling displacement and linear/quadratic tail bounds prove both convergence clauses; the partial clause is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-two-homogeneous-projection-limit-is-stationary",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "outcome": "confirmed_fatal",
    "reason": "Restored d>=2; the direct energy identity, radial scaling and finite total action force the limiting squared potential integral to vanish. AC is restated as an explicit assumption.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-flow-preserves-spherical-separation",
    "status": "dismissed",
    "severity": "none",
    "outcome": "false_positive",
    "reason": "The open ball disjoint from A is also disjoint from closure(A), so every boundary point has radius at least ra. Radial bounds license degree invariance. Item unchanged; refreshed only two stale contract quotations.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1805.09545"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "cor-partial-homogeneous-wasserstein-limit-is-global-minimizer",
    "status": "fixed",
    "severity": "nonfatal",
    "outcome": "confirmed_nonfatal",
    "reason": "Explicit AC replaces the unsupported inheritance restatement. Signed projection convergence and partial-energy continuity identify the limit energy with inf F. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "cor-two-homogeneous-wasserstein-limit-is-global-minimizer",
    "status": "fixed",
    "severity": "nonfatal",
    "outcome": "confirmed_nonfatal",
    "reason": "Explicit AC replaces the unsupported inheritance restatement. The parent assumes d>=2; finite-mass normalization and homogeneous energy identities transfer global minimality. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-owner-route",
    "id": "def-partial-one-homogeneous-measure-projection",
    "status": "open",
    "route": "frontier-owner",
    "affected_use": "Definition final paragraph says \"If $\\mathcal H$ is a separable real Hilbert space and $\\varphi:\\Theta\\to\\mathcal H$ is bounded and strongly measurable\" on the bare measurable space. Proof 3.1 then claims weighted Bochner integrability for arbitrary mu.",
    "reason": "The measure in strong measurability is unbound, just as in the assigned relaxed-objective defect. Require an everywhere measurable simple approximation (or specify the appropriate raw weighted measure), and inspect direct consumers if the Definition changes. This unassigned draft frontier supplier was not edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-owner-route",
    "id": "lem-partial-relaxed-objective-signwise-optimality",
    "status": "open",
    "route": "frontier-owner",
    "affected_use": "Statement says \"let $\\varphi:\\Theta\\to\\mathcal H$ be bounded and strongly measurable\" without a measure, while Proof 1.1 uses m_lambda and J(lambda) for every finite signed competitor lambda.",
    "reason": "The clarified relaxed-objective interface exposes the repeated measure-free strong-measurability ambiguity. Require pointwise measurable simple approximation so all competitor moments exist, preserving the signwise convexity argument and claim. This unassigned draft frontier consumer needs owner repair and was not edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "record-audit-status",
    "status": "no-published-consumer-repair",
    "reason": "All eight assigned carriers and all ten direct item consumers of the three changed interfaces are draft items in the frozen frontier. No published or outside-frontier direct consumer was found by dependency/reference searches. No published carrier was edited or adjudicated; the two further measurability alerts route to frontier owners.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-multiclass-margin-rademacher-generalization",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "facts-block",
    "affected_locations": [
      "Facts & Assumptions F1",
      "Proof step 3.1"
    ],
    "reason": "F1 and step 3.1 incorrectly call the margin a maximum. It is min_{j≠y}(F_y−F_j): with scores (0,−1,2) and y=1 it is −2, whereas the maximum difference is 1. This is nonfatal: the affected arguments need continuity and Borel measurability, which finite minima preserve, and step 6.1 uses the correct competing-score comparison. Corrected F1 and step 3.1 without changing the claim.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1706.08498"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "cor-contrastive-approximate-erm-transfer",
    "model": "gpt-6-luna",
    "context_sha256": "1d19e7dd687e9784edf239c87eee45610114c026d95bfc4b200f17474ac3d1f6",
    "reason": "The cited excess lemma A1 explicitly traces AC to its uniform-generalization supplier's bounded-differences theorem. Following that chain, thm-rademacher-uniform-generalization Statement/A1 and thm-mcdiarmid-bounded-differences Statement/A1 explicitly assume AC; the latter invokes conditional-expectation and conditional-Hoeffding suppliers. The corollary retains AC in its Statement, deps and contract. Its provenance claim and risk comparison are supported.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "cor-subgaussian-contrastive-representation-transfer",
    "model": "gpt-6-luna",
    "context_sha256": "44c5f9322b6dcef5768cf23f6a0d04c7d4b2cd6d10e21fcab7e361a5576af9b9",
    "reason": "The assumed one-negative model, def-latent-class-contrastive-learning Definition, fixes R>0 and requires sup_x ||f(x)||_2<=R for every f in F. The comparator explicitly belongs to F. Thus R is the model's uniform bound in gamma and Gamma; sub-Gaussianity is an additional hypothesis. Every margin-lemma hypothesis holds, so F2 substitutes into the transfer bound on the same event.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "cor-contrastive-approximate-erm-transfer",
    "severity": "nonfatal",
    "locus": "proof-contract",
    "reason": "The A1 quotation of def-axiom-of-choice Definition retained the former inline [[def-choice-function]] after that supplier moved links to Definition references. Updated the assigned quotation mirror to the exact current plain-text Definition; no hypothesis, item proof or interface changed. Focused strict contract validation now passes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "cor-subgaussian-contrastive-representation-transfer",
    "severity": "nonfatal",
    "locus": "proof-contract",
    "reason": "The A1 quotation of def-axiom-of-choice Definition retained the former inline [[def-choice-function]] after that supplier moved links to Definition references. Updated the assigned quotation mirror to the exact current plain-text Definition; no hypothesis, item proof or interface changed. Focused strict contract validation now passes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-reconstruction-objective-shortcut",
    "class": "accuracy",
    "subclass": "ill-typed-construction",
    "severity": "fatal",
    "location": "facts-block",
    "disposition": "fixed",
    "source_rejection": {
      "id": "ex-reconstruction-objective-shortcut",
      "model": "gpt-6-luna",
      "context_sha256": "6c504bf299d0a75db0242b59da665e9c20bc3ffa8ec46759f386b34498e5d598"
    },
    "reason": "The Given asserts one mask-independent E(x,V)=z_* although def-reconstruction-autoencoder requires a family in Z^V. Families indexed by {1} and {2} have different domains, so that asserted encoder is not a map of the required type. Repair returns (z_*) indexed by V and compares the two labels at each fixed V; the zero-loss calculation is preserved.",
    "repair": "Example and Given now return a constant token at each visible index; Verification 2.1 compares representations for each fixed mask. Updated only the assigned contract derivation claim for step 2.1.",
    "post_sha256": "1485f7d9ee38de55b9ee2bd4bd78313807176e44ad9f860e2a5c086209bd956e",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/2111.06377"
    ],
    "familiar": false
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no-update-required",
    "reason": "The repaired carrier is draft; no Statement or Definition section changed, no new interface was added, and the current item/reference search found no consuming item. No published consumer repair or acceptance is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "cor-vae-elbo-kl-decomposition",
    "model": "gpt-6-luna",
    "context_sha256": "e48a2d66a288aac54f29162a2ee820bb88c39f0d4ccd2b4252e7c73f5682bf0c",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The named generic Definition requires a measure space, measurable nonnegative gamma, 0<Z=integral gamma<infinity, pi=gamma/Z, a probability density q with q=0 almost everywhere on {pi=0}, and absolute integrability of q(|log gamma|+|log q|). The VAE Definition supplies every one of these conditions, and corollary step 1.1 explicitly matches them and the identical ELBO integral. Sigma-finiteness is an available stronger hypothesis, not an unsupported premise. The theorem's density-ratio identity and AC-dependent reverse-KL branch therefore apply exactly as step 2.1 states.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "alg-reparameterized-variational-training",
    "model": "gpt-6-luna",
    "context_sha256": "a243f0187cf1775950af4584a410cff4bd8749efac65eee95a52a87d02ec434f",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "Original Step 1 only makes epsilon_t independent of I_t and earlier draws; I_t may depend on the history, contradicting the conditional-unbiasedness assertion. For a singleton latent space and Bernoulli decoder with success probability s(theta)=1/(1+exp(-theta)), take data (1,0). The two payoffs are log s(theta) and log(1-s(theta)), with gradients 1-s(theta) and -s(theta). Setting I_1=I_0 preserves uniform marginals and all fresh-noise requirements, but conditional on the first draw the second gradient differs from the finite-average gradient 1/2-s(theta_1) by +1/2 or -1/2. All smoothness, envelope and second-moment conditions hold. Step 1 now explicitly makes both components independent and their pair independent of all earlier draws.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-metadata-repair",
    "id": "cor-vae-elbo-kl-decomposition",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "research/machine-learning-all-101-2026-10-19-batch-58.proof-contracts.json#/contracts/cor-vae-elbo-kl-decomposition/citations",
    "reason": "The F2 and A1 quotation mirrors retained inline links removed from their current suppliers. Refreshed only those two quote fields from the complete current Statement and Definition; the strict focused proof-contract check now has zero errors and warnings. The rejected mathematical tuple remains a false positive and the corollary item guard is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-change-of-variables-density-for-diffeomorphic-flow",
    "severity": "nonfatal",
    "location": "proof-step",
    "step": "1.1",
    "defect_type": "unsupported-inference",
    "status": "fixed",
    "reason": "The unqualified term level set did not explicitly identify a generating family of inverse images. The repair supplies every real superlevel set and its exact image identity using the existing F4 supplier; no substantive prerequisite or claim repair is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update-required",
    "id": "thm-change-of-variables-density-for-diffeomorphic-flow",
    "reason": "The assigned item is draft. Its Statement and all dependency interfaces are unchanged; no published carrier was edited and no potentially defective published mathematical use was discovered. The seven historical supplier quote mirrors were refreshed from their current sections only.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-neural-ode",
    "locus": "definition",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "reason": "The original Definition explicitly imposed no network requirement and called every parameterized vector-field IVP a neural ODE. This is a substantive misdefinition of the named model (other), rather than an invalid ODE proof or dependency citation. Chen et al., Introduction, equation (2), specifies neural-network dynamics. Repaired by defining the general parameterized IVP first and requiring a specified finite acyclic neural-network realization for its neural specialization; all original domain, trajectory, and non-guarantee clauses remain.",
    "repair": "General parameterized IVPs remain defined, while the neural name requires the explicit finite network specification.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/1806.07366v5"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-neural-ode-global-smooth-flow",
    "route": "frontier-owner",
    "reason": "The analytic existence, smoothness, inverse-flow, and variational conclusions remain valid for arbitrary fields satisfying its full hypotheses; all of its proof uses generic ODE suppliers, not network realizability. However its universal Statement calls every such field neural without assuming a network specification.",
    "affected_use": "Statement: Then for each theta in Theta, s,t in [0,T], and z_s in R^d, the neural ODE has a unique solution on all of [0,T]. Facts F1 and Proof 5.1 use only the IVP and initial data.",
    "minimality": "Replace only the words the neural ODE by the parameterized ODE in the Statement, preserving the theorem for all stated smooth globally Lipschitz fields. Do not add a network hypothesis or weaken the analytic scope. The owner must propagate that Statement edit one direct hop.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/1806.07366v5"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-flow-matching-training-and-exact-sampling-properties",
    "route": "frontier-owner",
    "reason": "The actual assumptions supply a general parameterized field and not a network specification. The existence, joint measurability and conditional output-law argument needs only the general IVP retained by the Definition; the asserted neural identification is no longer justified.",
    "affected_use": "Facts F3 labels the generic parameterized IVP neural; Proof 3.1 says F3 identifies the sampling equation as a neural ODE and F4 gives its unique solution.",
    "minimality": "Replace neural ODE by parameterized ODE in F3 and Proof 3.1 only, and refresh the F3 Definition quote in research/machine-learning-all-101-2026-10-19-batch-69.proof-contracts.json. Its Statement remains unchanged, so this proof-only repair does not propagate.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/1806.07366v5"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-neural-ode-global-smooth-flow",
    "route": "frontier-owner",
    "locus": "contract-citation-mirror",
    "reason": "Owning contract F3 and F4 quotations no longer match the current published extreme-value and Heine-Borel Statements. The focused contract tool reports citation-quote-mismatch; this is metadata evidence, not a mathematical rejection or adjudication of those consumers.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-instantaneous-change-of-variables-for-ode-flow",
    "route": "frontier-owner",
    "locus": "contract-citation-mirror",
    "reason": "Owning contract A1 quotation no longer matches the current countable-choice Definition. The focused contract tool reports citation-quote-mismatch; this is metadata evidence, not a mathematical rejection or adjudication of those consumers.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "ex-numerical-adjoint-error",
    "route": "frontier-owner",
    "locus": "contract-citation-mirror",
    "reason": "Owning contract F4, F6 and F7 quotations no longer match the current continuous-adjoint, discrete-adjoint and exponential supplier sections. The focused contract tool reports citation-quote-mismatch; this is metadata evidence, not a mathematical rejection or adjudication of those consumers.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "append",
    "row": {
      "defect_id": "machine-learning-all-101-2026-10-19-step5-initial-r1-u67-refinement-node",
      "run": "machine-learning-all-101-2026-10-19",
      "at": "2026-10-20T11:39:21.268032Z",
      "batch": "67",
      "group": "v",
      "class": "accuracy",
      "subclass": "invalid-inference",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "lem-continuous-local-martingale-quadratic-variation",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "status": "closed",
      "reason": "The common-refinement equality used the previous coefficient at partition nodes. Corrected the staircase indexing and proved the resulting L2 Cauchy estimate.",
      "evidence": [
        {
          "path": "research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u67.json",
          "note": "Current carrier, mathematical finding, repair and focused validation are recorded in this report for lem-continuous-local-martingale-quadratic-variation."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u67.json",
          "id": "lem-continuous-local-martingale-quadratic-variation"
        }
      ]
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "append",
    "row": {
      "defect_id": "machine-learning-all-101-2026-10-19-step5-initial-r1-u67-raw-stopping-version",
      "run": "machine-learning-all-101-2026-10-19",
      "at": "2026-10-20T11:39:21.268032Z",
      "batch": "67",
      "group": "v",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "lem-continuous-local-martingale-quadratic-variation",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "status": "closed",
      "reason": "Almost-sure continuity on an incomplete filtration does not justify raw stopped evaluation. The report gives an explicit nonmeasurable stopped-value counterexample; an everywhere-continuous adapted representative convention repairs the assertion.",
      "evidence": [
        {
          "path": "research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u67.json",
          "note": "Current carrier, mathematical finding, repair and focused validation are recorded in this report for lem-continuous-local-martingale-quadratic-variation."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u67.json",
          "id": "lem-continuous-local-martingale-quadratic-variation"
        }
      ]
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "append",
    "row": {
      "defect_id": "machine-learning-all-101-2026-10-19-step5-initial-r1-u67-product-measurability",
      "run": "machine-learning-all-101-2026-10-19",
      "at": "2026-10-20T11:39:21.268032Z",
      "batch": "67",
      "group": "v",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "lem-density-translation-factorization",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "status": "closed",
      "reason": "Tonelli was applied without product measurability. Repaired using Lebesgue change of variables on the joint density and Tonelli only after separation; declared the local suppliers Countable Choice premise.",
      "evidence": [
        {
          "path": "research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u67.json",
          "note": "Current carrier, mathematical finding, repair and focused validation are recorded in this report for lem-density-translation-factorization."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u67.json",
          "id": "lem-density-translation-factorization"
        }
      ]
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "append",
    "row": {
      "defect_id": "machine-learning-all-101-2026-10-19-step5-initial-r1-u67-quote-mirrors-lem-continuous-local-martingale-quadratic-variation",
      "run": "machine-learning-all-101-2026-10-19",
      "at": "2026-10-20T11:39:21.268032Z",
      "batch": "67",
      "group": "v",
      "class": "accuracy",
      "subclass": "contract-mismatch",
      "severity": "nonfatal",
      "location": "contract-row",
      "subject": "lem-continuous-local-martingale-quadratic-variation",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "status": "closed",
      "reason": "The assigned proof contract quoted older supplier sections. Refreshed only the literal quotation mirrors after inspecting the current supplier clauses; prior text is retained and the focused strict contract check now passes.",
      "evidence": [
        {
          "path": "research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u67.json",
          "note": "Current carrier, mathematical finding, repair and focused validation are recorded in this report for lem-continuous-local-martingale-quadratic-variation."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u67.json",
          "id": "lem-continuous-local-martingale-quadratic-variation"
        }
      ]
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "append",
    "row": {
      "defect_id": "machine-learning-all-101-2026-10-19-step5-initial-r1-u67-quote-mirrors-lem-density-translation-factorization",
      "run": "machine-learning-all-101-2026-10-19",
      "at": "2026-10-20T11:39:21.268032Z",
      "batch": "67",
      "group": "v",
      "class": "accuracy",
      "subclass": "contract-mismatch",
      "severity": "nonfatal",
      "location": "contract-row",
      "subject": "lem-density-translation-factorization",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "status": "closed",
      "reason": "The assigned proof contract quoted older supplier sections. Refreshed only the literal quotation mirrors after inspecting the current supplier clauses; prior text is retained and the focused strict contract check now passes.",
      "evidence": [
        {
          "path": "research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u67.json",
          "note": "Current carrier, mathematical finding, repair and focused validation are recorded in this report for lem-density-translation-factorization."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u67.json",
          "id": "lem-density-translation-factorization"
        }
      ]
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "append",
    "row": {
      "defect_id": "machine-learning-all-101-2026-10-19-step5-initial-r1-u67-quote-mirrors-lem-predictable-elliptic-martingale-brownian-reconstruction",
      "run": "machine-learning-all-101-2026-10-19",
      "at": "2026-10-20T11:39:21.268032Z",
      "batch": "67",
      "group": "v",
      "class": "accuracy",
      "subclass": "contract-mismatch",
      "severity": "nonfatal",
      "location": "contract-row",
      "subject": "lem-predictable-elliptic-martingale-brownian-reconstruction",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "status": "closed",
      "reason": "The assigned proof contract quoted older supplier sections. Refreshed only the literal quotation mirrors after inspecting the current supplier clauses; prior text is retained and the focused strict contract check now passes.",
      "evidence": [
        {
          "path": "research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u67.json",
          "note": "Current carrier, mathematical finding, repair and focused validation are recorded in this report for lem-predictable-elliptic-martingale-brownian-reconstruction."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u67.json",
          "id": "lem-predictable-elliptic-martingale-brownian-reconstruction"
        }
      ]
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-forward-kolmogorov-duality-gives-reversed-martingales",
    "reason": "The cutoff supplier proof explicitly constructs rational-ball cutoffs and least covering codes, giving the sequence without Countable Choice.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "lem-predictable-elliptic-martingale-brownian-reconstruction",
    "reason": "The existing proof expressly invokes the finite-horizon Levy argument; its full scalar and vector derivations use no process values beyond T.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-elliptic-local-martingale-brownian-representation",
    "supplier": "lem-continuous-local-martingale-quadratic-variation",
    "route": "ordinary-frontier-owner",
    "reason": "The cited raw bounded-stopping/localization inference is not justified for merely a.s.-continuous adapted representatives on an incomplete filtration. See repair_notes.interface_events for the exact affected use, source snippet, hash and minimal repair.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-forward-density-duality-identifies-reverse-process",
    "supplier": "lem-continuous-local-martingale-quadratic-variation",
    "route": "ordinary-frontier-owner",
    "reason": "The cited raw bounded-stopping/localization inference is not justified for merely a.s.-continuous adapted representatives on an incomplete filtration. See repair_notes.interface_events for the exact affected use, source snippet, hash and minimal repair.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-markov-diffusion-reversal-by-bayes-kernels",
    "supplier": "lem-continuous-local-martingale-quadratic-variation",
    "route": "ordinary-frontier-owner",
    "reason": "The cited raw bounded-stopping/localization inference is not justified for merely a.s.-continuous adapted representatives on an incomplete filtration. See repair_notes.interface_events for the exact affected use, source snippet, hash and minimal repair.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-gaussian-smoothing-reversal-on-truncated-time-interval",
    "supplier": "lem-continuous-local-martingale-quadratic-variation",
    "route": "ordinary-frontier-owner",
    "reason": "The cited raw bounded-stopping/localization inference is not justified for merely a.s.-continuous adapted representatives on an incomplete filtration. See repair_notes.interface_events for the exact affected use, source snippet, hash and minimal repair.",
    "uncertain": false
  },
  {
    "ledger": "canonical-published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update-required",
    "reason": "All assigned carriers and all direct affected consumers are draft frontier items. No published consumer was edited or found mathematically defective. The published Levy proofs support the finite-horizon argument; published measure suppliers are used with their declared Countable Choice hypotheses. Draft operational findings remain in the run report and canonical defect-ledger proposals.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-stationary-ornstein-uhlenbeck-probability-flow",
    "outcome": "confirmed_nonfatal",
    "location": "facts-block F8 and Verification 3.1",
    "reason": "F8 omits the cited theorem's normalized finite probability-density, continuous-derivative and precise global-flow hypotheses. This is nonfatal for the example: step 1.2 already gives N(0,theta), p is positive and smooth, b=-gamma*x and a=2*gamma*theta are smooth, and the identity flow satisfies both time-derivative identities. Repaired F8 and verified these hypotheses explicitly in step 3.1. Also completed F5's citations with the existing normal characteristic-function and law-uniqueness suppliers; its former affine/product supplier alone did not state normal closure. No Example claim was weakened.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/2011.13456v2"
    ],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "record-reviewed-supplier-use",
    "id": "ex-stationary-ornstein-uhlenbeck-probability-flow",
    "suppliers": [
      "lem-characteristic-function-of-a-normal-law",
      "thm-uniqueness-of-a-law-from-its-characteristic-function"
    ],
    "affected_use": "Facts F5 and Verification 1.2: multiply the two centered normal characteristic functions and identify N(0,theta), including the zero-variance stochastic term at time zero.",
    "reason": "Both published supplier Statements were inspected: the normal formula includes variance zero, and uniqueness applies to Borel probability laws under AC. These close the existing normal-sum calculation without changing any published carrier. Existing supplier audit status is unchanged; no new independent audit or certification is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-probability-path-and-velocity-field",
    "locus": "definition",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "For d=1, lambda=delta_0, rho=1 and u=1 satisfy the former normalization and classical PDE but fail measure transport: testing with phi(t,x)=eta(t)psi(x), psi(0)=0 and psi′(0)=1, gives integral eta(t)dt != 0. Replaced the general-measure equation by its locally integrable distributional form, retaining the unweighted classical equation for Lebesgue reference and the original smoothness. Also required 0<p<infinity for the quotient.",
    "uncertain": false,
    "source_urls": [
      "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf",
      "https://arxiv.org/html/2210.02747"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-probability-path-and-velocity-field",
    "locus": "definition",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The original quotient required p>0 but permitted p=infinity because the density path is extended-nonnegative and the endpoint mixture has no pointwise finiteness guarantee. The repaired Definition requires 0<p<infinity and a finite componentwise integral, and explicitly leaves the other cases undefined.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "ex-gaussian-prior-to-data-conditional-interpolation",
    "locus": "facts-block",
    "status": "false-positive",
    "reason": "The actual F1 supplier thm-gaussian-conditional-optimal-transport-map explicitly lists def-standard-normal-and-normal-laws, def-multivariate-normal-law and thm-nondegenerate-multivariate-normal-law-has-density in deps. Its A1/F1/F2 and proof steps 1.1-1.2 spend the inherited AC assumption. All three supplier interfaces assume AC; the density proof A1 and 3.1 identify the CC/DC and change-of-variables uses. The example correctly inherits this library assumption and specializes d=1, x1=a. No additional direct edge to each transitive supplier is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-gaussian-prior-to-data-conditional-interpolation",
    "locus": "proof-contract",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The A1 contract quotation retained the former inline choice-function link; the current published AC definition moves that link to Definition references. Updated the exact Definition quote under the shared write lock. The item guard and mathematics are unchanged; this is a separate metadata repair, not confirmation of the rejected AC dependency objection.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-conditional-to-marginal-continuity-equation",
    "route": "frontier-owner",
    "supplier": "def-probability-path-and-velocity-field",
    "path": "items/lem-conditional-to-marginal-continuity-equation.md",
    "affected_use": "F1 identifies the general reference-measure conditional equation with the unweighted coordinate PDE, then Proof 2.1 integrates that PDE to assert the same classical equation for p and J.",
    "invalidated_claim": "The revised measure equation alone does not imply the classical equation for arbitrary lambda. The original proof is valid under an explicit classical-coordinate PDE premise, which is no longer the general Definition.",
    "minimality": "State the original classical coordinate equation explicitly as a separate algebraic hypothesis and distinguish it from measure transport; or prove a general-measure marginal weak equation with the necessary joint local flux integrability. Preserve the general density normalization and derivative-exchange results.",
    "reason": "F1 identifies the general reference-measure conditional equation with the unweighted coordinate PDE, then Proof 2.1 integrates that PDE to assert the same classical equation for p and J. The revised measure equation alone does not imply the classical equation for arbitrary lambda. The original proof is valid under an explicit classical-coordinate PDE premise, which is no longer the general Definition.",
    "uncertain": false,
    "source_urls": [
      "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-conditional-flow-matching-gradient-identity",
    "route": "frontier-owner",
    "supplier": "def-probability-path-and-velocity-field",
    "path": "items/thm-conditional-flow-matching-gradient-identity.md",
    "affected_use": "Uses a conditional velocity relative to arbitrary lambda, attributes the unweighted PDE to the Definition in F1, and applies the marginal continuity lemma in Proof 1.1 to claim an unweighted marginal PDE.",
    "invalidated_claim": "A general-measure conditional velocity need not satisfy the unweighted coordinate equation; its marginal continuity conclusion and F1 attribution need alignment. The loss expansion and dominated parameter differentiation are independent of this PDE.",
    "minimality": "Keep the general-reference loss/gradient identity. Separate its algebraic field hypotheses from the measure-transport conclusion, and either retain an explicit classical-PDE hypothesis for the classical conclusion or establish the measure equation with joint local absolute flux integrability. Do not impose Lebesgue reference on the whole loss identity.",
    "reason": "Uses a conditional velocity relative to arbitrary lambda, attributes the unweighted PDE to the Definition in F1, and applies the marginal continuity lemma in Proof 1.1 to claim an unweighted marginal PDE. A general-measure conditional velocity need not satisfy the unweighted coordinate equation; its marginal continuity conclusion and F1 attribution need alignment. The loss expansion and dominated parameter differentiation are independent of this PDE.",
    "uncertain": false,
    "source_urls": [
      "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "alg-flow-matching-training-and-sampling",
    "route": "frontier-owner",
    "supplier": "def-probability-path-and-velocity-field",
    "path": "items/alg-flow-matching-training-and-sampling.md",
    "affected_use": "The procedure supplies classical C1 density/flux data satisfying the unweighted PDE for arbitrary lambda, rather than explicitly supplying a velocity satisfying the revised measure equation; it uses the general-reference gradient theorem as a logical supplier.",
    "invalidated_claim": "The finite updates and exact-flow sampling instructions remain defined. Its classical coordinate assumptions alone do not establish the revised conditional-velocity premise of the gradient theorem.",
    "minimality": "Align with the general-reference algebraic loss/gradient interface when repairing that theorem, preserving the training procedure for general supplied lambda. If actual measure transport is intended as an input, state its weak identity separately. The Step-4 concern about duplicate well-definedness/output-law assertions is outside this assigned repair and remains with the owner.",
    "reason": "The procedure supplies classical C1 density/flux data satisfying the unweighted PDE for arbitrary lambda, rather than explicitly supplying a velocity satisfying the revised measure equation; it uses the general-reference gradient theorem as a logical supplier. The finite updates and exact-flow sampling instructions remain defined. Its classical coordinate assumptions alone do not establish the revised conditional-velocity premise of the gradient theorem.",
    "uncertain": false,
    "source_urls": [
      "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-flow-matching-training-and-exact-sampling-properties",
    "route": "frontier-owner",
    "supplier": "def-probability-path-and-velocity-field",
    "path": "items/lem-flow-matching-training-and-exact-sampling-properties.md",
    "affected_use": "F1 refers to the velocity defined by the continuity equation, and Proof 1.1 applies the gradient theorem to the algorithm data, which currently guarantee only an unweighted coordinate PDE for a general reference measure.",
    "invalidated_claim": "A premise of the current gradient-theorem invocation is no longer supplied by the algorithm. Conditional batch unbiasedness and the exact-flow pushforward formula themselves remain sound algebraic/probabilistic claims.",
    "minimality": "After preserving a general-reference algebraic gradient identity in its supplier, cite precisely that part in Proof 1.1; no new transport assumption is needed for unbiasedness and no change to the exact-flow conclusion is indicated.",
    "reason": "F1 refers to the velocity defined by the continuity equation, and Proof 1.1 applies the gradient theorem to the algorithm data, which currently guarantee only an unweighted coordinate PDE for a general reference measure. A premise of the current gradient-theorem invocation is no longer supplied by the algorithm. Conditional batch unbiasedness and the exact-flow pushforward formula themselves remain sound algebraic/probabilistic claims.",
    "uncertain": false,
    "source_urls": [
      "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-pac-bayes-kl-bound",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "Facts & Assumptions F1 and proof step 1.1",
    "reason": "Confirmed a nonfatal interface omission: F1 supplies only supervised losses L(f(x),y), whereas the theorem uses a generic product-measurable loss. The existing fixed-parameter Hoeffding and joint Tonelli arguments are valid. Step 1.1 now supplies the exact supervised encoding X=Z, Y={*}, A=[0,C], f_theta(z)=ell(theta,z), L(a,*)=a, and P=D tensor delta_*, with rectangle measurability and Tonelli identification. No new mathematical supplier or weaker claim is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-finite-support-sample-compression",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "Facts & Assumptions F1 and proof step 1.1",
    "reason": "F1 incorrectly included reproducing every sample label in the size-at-most-two requirement. The supplier defines consistency separately and only for target-labeled samples. This is nonfatal because verification 1.1 already proves consistency from the first-occurrence construction instead of assuming it. Reworded F1 and 1.1 to separate the definition from its verification; the example and exact risk law are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "ex-empirical-language-model-scaling-law",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "locus": "facts-block",
    "status": "fixed",
    "reason": "F2 and the Example references attributed a decoder-only stack to a definition with encoder cross-attention. The revised local description explicitly omits cross-attention while retaining the valid component dependency.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/2001.08361",
      "https://arxiv.org/pdf/1706.03762"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "action": "record-fixed-finding",
    "id": "ex-empirical-language-model-scaling-law",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "statement",
    "status": "fixed",
    "reason": "Confirmed the Step-4 concern: at B=B_crit, equations (5.4)–(5.5) give S_min=S/2, contradicting the original C_min=6NB_crit S for actual steps. Repaired the adjustments using S_min and distinguished FLOPs from PF-days.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/2001.08361",
      "https://arxiv.org/pdf/1706.03762"
    ],
    "familiar": false
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-change",
    "id": "ex-empirical-language-model-scaling-law",
    "reason": "The assigned carrier remains draft. Searching items and library pages found no direct item consumer or mathematical page use; the owning B page only inventories the example. No published consumer repair or new published finding arose."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-top-label-calibration",
    "severity": "fatal",
    "defect_type": "logic",
    "finding": "Measurability is missing: take Omega={a,b}, F={empty,Omega}, constant G=(1,0), and Y(a)=1,Y(b)=2. Then {Y=Yhat}={a} is not an event. Requiring Y to be a random variable restores the event-integral definition and matches def-probability-calibration.",
    "status": "fixed",
    "post_sha256": "24331a89c3384c2eed60797710f98f480306140aa2a1be686d554b3bc1ee40c4",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-positive-temperature-scaling-preserves-argmax",
    "severity": "fatal",
    "defect_type": "logic",
    "finding": "The simplex is contained in sum_j p_j=1, so its ambient Euclidean interior is empty. Positive softmax coordinates give relative interior instead. Specified the affine hyperplane and proved a relative ball of radius half the smallest coordinate lies in the simplex; argmax and finite-grid conclusions are unchanged.",
    "status": "fixed",
    "post_sha256": "b8e5e87eb58f8ff0e8a30aaaaad681ade9510a84035765efcd8a88c36c4adaaa",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-top-label-calibration",
    "severity": "nonfatal",
    "locus": "proof-contract boundary endpoints",
    "finding": "The contract claimed top confidence C may equal zero, but K nonnegative coordinates summing to one imply C>=1/K. Corrected the worksheet to 1/K<=C<=1; the definition itself did not assert C=0.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-static-dynamic-and-strongly-adaptive-regret",
    "severity": "fatal",
    "locus": "definition",
    "status": "fixed",
    "reason": "The one-way strong-adaptivity clause failed to define the property. Its completed uniform criterion and explicit probability modes repair the fatal definitional logic defect.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1909.05207",
      "https://proceedings.mlr.press/v37/daniely15.pdf"
    ],
    "familiar": false,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-changing-comparator-path-length",
    "severity": "nonfatal",
    "locus": "facts-block",
    "status": "fixed",
    "reason": "F1 overstated the protocol as fixing losses and choices. Corrected its timing restatement; the explicit finite instance and all regret calculations were already valid.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-stochastic-two-arm-pseudo-regret",
    "severity": "nonfatal",
    "locus": "facts-block",
    "status": "fixed",
    "reason": "F2 cited the regret definition for arm counts that only the finite-arm lemma defines. Added the precise existing supplier and citation contract; all numerical conclusions remain valid.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-online-gradient-descent",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "definition",
    "reason": "The smooth branch computes g_t from losses without requiring that vector to be measurable. On Omega={a,b} with trivial sigma-algebra and its probability measure, let A={a}, K=[0,1], d=1, T=2, D=G=1, x_1=1, f_1(omega,x)=1_A(omega)x on R and f_2=0. Every realized loss is differentiable convex and every gradient has norm at most 1, but x_2=1-1_A is not measurable: its inverse image of {0} is A. Continuity of projection cannot supply missing input measurability. The repair explicitly requires measurable computed gradients as well as supplied vectors.",
    "repair": "Require measurability of every g_t, whether directly supplied or computed as the smooth gradient.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-mirror-map-and-bregman-divergence",
    "severity": "nonfatal",
    "locus": "statement-references",
    "status": "fixed",
    "adjudication_ref": "research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u75.json#/decisions/0",
    "reason": "The linked supplier defines ordinary and strict convexity only. The strong-convexity inequality is already complete and correct in this item, so the misleading Definition references attribution is nonfatal. Repaired the reference to distinguish the supplier from the local quantitative definition; the Definition is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-adagrad",
    "severity": "nonfatal",
    "locus": "statement-references",
    "status": "fixed",
    "adjudication_ref": "research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u75.json#/decisions/1",
    "reason": "The feedback supplier promises the full loss function, not gradient information; that reference restatement was inaccurate. However, the Definition already explicitly requires receipt of its prescribed gradient vector g_t in R^d as an additional input. The finite update is therefore supported without deriving gradients from arbitrary losses. Repaired only the reference attribution and retained the existing input requirement; no regret guarantee or differentiability inference is asserted.",
    "uncertain": false,
    "source_urls": [
      "https://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-negative-entropy-mirror-descent-on-simplex",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "proof-step",
    "status": "fixed",
    "adjudication_ref": "research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u75.json#/decisions/2",
    "reason": "Original step 1.2 substituted the post-projection p_{t+1} into the dual equation for y_{t+1} before proving equality, so that invocation was unsupported. Repaired the proof to name the prospective dual probability vector r_{t+1}, construct its unique positive normalized solution, and only then use the Bregman quadratic lower bound to identify the projection and p_{t+1}. Interior preservation and Hedge agreement follow by induction. The Example and supplier interfaces are unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://www.stat.berkeley.edu/~bartlett/courses/2014fall-cs294stat260/lectures/mirror-descent-notes.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update-required",
    "reason": "All three assigned carriers are draft, and neither assigned Definition nor the Example was changed. These reference/proof-only repairs create no supplier-interface event and no affected outside published consumer to route.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-tied-optimal-bandit-arms",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "frontmatter",
    "finding": "The title Tied optimal arms have zero regret omitted the deterministic-zero environment and could be read as asserting zero realized reward regret for all equal-mean arms. Bernoulli(1/2) at horizon one gives realized regret 1/2-Y, which is nonzero.",
    "correction": "Qualified the title to Deterministic zero-reward arms have zero regret; retained the full correct Example and Verification and mirrored the title in batch 76 metadata.",
    "reason": "Only the title overgeneralized. The actual all-zero model makes both regrets identically zero for every admissible policy.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "class": "accuracy",
    "subclass": "false-or-overstrong-title"
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no-update-required",
    "reason": "Both assigned items are draft. The algorithm remains byte-identical, and the example repair changes its title only; every original Statement, Definition, Example and proof section remains unchanged. There is no changed supplier interface or potentially defective published consumer identified by this review.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-bandit-importance-weighted-estimator-has-conditional-moments",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "locus": "facts-block",
    "status": "fixed",
    "original_excerpt": "[F4] [[def-filtration-and-filtered-probability-space]]: $\\mathcal F_{t-1}$ is the sigma-algebra of information available before the round-$t$ action.",
    "corrected_excerpt": "[F4] [[def-filtration-and-filtered-probability-space]]: a filtration consists of nested sub-sigma-algebras of the ambient sigma-algebra. In [[def-bandit-importance-weighted-estimator]], $\\mathcal F_{t-1}$ is specifically generated by the complete histories before the round-$t$ action.",
    "reason": "Confirmed nonfatal citation attribution error: the generic filtration Definition supplies only nested sub-sigma-algebras, not the round-history interpretation asserted by F4. That interpretation is explicitly supplied by the already-declared estimator Definition, so the argument has no missing mathematical hypothesis. Repaired F4 to distinguish the generic structure from the estimator-specific history and added its exact estimator citation to the contract. On every positive-probability history atom H, y and p are constant and the estimator takes y/p with probability p and 0 otherwise. Thus its conditional first moment is y, second moment y^2/p, and centered second moment y^2(1-p)/p. The finite history tree and p>0 give bounded variables and squares; null atoms do not affect integral identities. The endpoints y=0, y=1 and p=1 are valid; p=0 is excluded. Statement, claim strength and dependencies are unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://tor-lattimore.com/downloads/book/book.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-exp4-potential-inequality",
    "model": "gpt-6-luna",
    "context_sha256": "5b9a42918559ee1128acbf06d3ef563031967768e6b6e41e9d0a0dc5fd411d74",
    "outcome": "false_positive",
    "status": "rejected",
    "reason": "The Exp4 Definition explicitly takes an instance of def-contextual-bandit-protocol, whose Definition requires x_t in [0,1]^k. Its justified_by lemma proves positive simplex weights and finite nonnegative estimated losses, including zero-probability arms. Thus -eta times estimated loss is nonpositive and F2 applies. The proposed R>1 counterexample violates the input scope. The log-majorant and fixed-expert telescoping steps are valid for every finite eta>0.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-exp4-unbiased-expert-reward-estimates",
    "model": "gpt-6-luna",
    "context_sha256": "1cef7a2448f96d4e902aad4946781c97e91dee6f58ab6e46318151848d0bd42c",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "defect_type": "dependency_citation",
    "reason": "Original F4/step 2.1 applies the conditional-moment lemma in the estimator Definition, which requires P_{t,j}>0 for every arm j; an Exp4 history may have P=(1,0). Positivity of only the selected coordinate does not meet that inherited interface. Repaired by deriving its mean directly as P_i times (1-x_i)/P_i and then summing expert advice; unsupported coefficients vanish because Q_m>0. The statement is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "lem-exp4-weighted-estimated-loss-second-moment",
    "model": "gpt-6-luna",
    "context_sha256": "1aa98386f9e6ffe52e17fc77d956ae86dbdebba284a3a3b3077aab336fdb1c9f",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "defect_type": "dependency_citation",
    "reason": "Original F4/step 2.1 invokes the conditional-moment supplier under the full-support estimator Definition, but Exp4 allows histories with zero sampling probabilities. The supported coordinate alone does not satisfy that interface. Repaired by computing its conditional square directly as P_i times (1-x_i)^2/P_i^2. Cross terms vanish since only the sampled action estimate can be nonzero; summing Q_m cancels supported P_i denominators and leaves at most k. The statement is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-linucb-predictable-mgf-substitution",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "locus": "F2 and proof step 1.1",
    "reason": "Confirmed a nonfatal citation overstatement: the supplied conditional-expectation theorem has no measurable pull-out clause. Step 1.1 now tests the candidate version on B intersect B_j and explicitly sums the defining event integrals. The fixed-coefficient bounds hold outside a finite union of null sets; the bounded-coefficient limit uses the integrable mean-value envelope and L1 contraction. Statement, AC assumption and page interface are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-linucb-gaussian-mixture-supermartingale",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "locus": "F6 and original proof step 2.1 (now 3.1)",
    "reason": "Confirmed a nonfatal citation overstatement in F6. New step 2.1 derives the needed bounded nonnegative weighting inequality from conditional event integrals, finite simple sums and monotone dyadic approximation; step 3.1 invokes it for W_k and indicator-times-W_k. The existing truncation proves integrability, event tests establish the AE inequality, Tonelli forms the mixture, and completing the square yields Z_t. Statement, filtration H_t=F_{t+1}, Gaussian normalization and AC/Countable Choice premises remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "alg-linucb",
    "outcome": "false_positive",
    "status": "dismissed",
    "locus": "assigned rejection",
    "reason": "False positive on the exact assigned carrier: its Definition specifies inputs, outputs, score maximization, reward timing and the finite row procedure, without an operation-count or completion theorem. The separate justified_by result thm-linucb-regret states algorithm properties explicitly and proves nonzero-pivot existence, W_t=V_t^{-1}, D_t=det(V_t), n-round completion in step 1.1 and the operation/selector count in step 2.1. These arguments use positive ridge and the supplied compact selector, not a circular invocation of algorithm correctness. No item edit is warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-linucb-regret",
    "outcome": "false_positive",
    "status": "dismissed",
    "locus": "assigned rejection",
    "reason": "False positive: the confidence theorem explicitly assumes AC and Countable Choice, and regret step 2.2 supplies precisely those premises when applying its confidence bound. A1/A2 and axiom_use describe inherited proof provenance rather than additional conclusions inferred from its Statement. The actual confidence proof invokes AC optional sampling at step 2.1 and the Gaussian-mixture supplier; that supplier uses the Countable Choice Gaussian integral in steps 1.2 and 5.1. Independently checked optimism, range clipping, monotone beta, Cauchy–Schwarz and elliptical potential, giving the factor 8 and trace bound. No mathematical or axiom repair is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update-required",
    "reason": "Both repaired suppliers are assigned draft items. Their original Statements are unchanged, no published carrier was edited, and no potentially defective published consumer was discovered; no published repair or consumer-maintenance entry is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-proper-scoring-rule",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "The original Definition already requires only Borel measurability of each score section q -> S(q,j), but its Definition references falsely attributes joint action/outcome measurability to def-loss-function-and-risk. That supplier requires action measurability for each fixed parameter and explicitly requires no measurable parameter space. Corrected the false citation restatement without changing the Definition, score orientation, zero-times-infinity convention, or strictness requirement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-binned-calibration-estimator-limits",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "The original title asserts underestimation by fixed-bin estimates, but the valid Statement bounds only the population limit E_P. For K=2, one bin, G=r(G)=(1/2,1/2), fair labels, d(p,q)=||p-q||_2 and n=1, true calibration error is zero whereas the empirical estimate is 1/sqrt(2) for either label. This is a false title claim, classified as logic. Replaced estimates by limits in the title and mirrored that title in the owning manifest; preserved the entire Statement and proof.",
    "uncertain": false,
    "source_urls": [
      "https://proceedings.mlr.press/v89/vaicenavicius19a/vaicenavicius19a-supp.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-finite-mdp-policy-action-state-reward-path-law",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "facts-block",
    "reason": "F3 overstated thm-sum-rule clause 2 by omitting pairwise disjointness. F3 now states the exact restricted finite-union rule, and proof step 1.1 explicitly verifies disjointness of state-tagged blocks. The actual original application was valid; no fatal mathematical inference was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-pac-mdp-bounded-reward-model",
    "batch": "82",
    "locus": "Definition references",
    "severity": "nonfatal",
    "status": "fixed",
    "finding_and_repair": "The reference paragraph conflates projection measurability with integral monotonicity. Measurability follows directly because the inverse image of B is the measurable rectangle S×B; integral monotonicity then bounds the reward mean by K(S×[0,1])=1. The Definition is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-pac-mdp-known-state-action-mdp",
    "batch": "82",
    "locus": "frontmatter.title",
    "severity": "nonfatal",
    "status": "fixed",
    "finding_and_repair": "For q=0 and a positive-reward unknown action, the prescribed sink value 0 is pessimistic. The general Definition correctly prescribes capped absorbing values and claims no optimism; corrected the misleading title and its manifest mirror without restricting q or changing the Definition.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-delayed-q-learning-optimism-and-update-counts",
    "batch": "82",
    "locus": "Proof 1.1; Statement; Facts F2/F4",
    "severity": "fatal",
    "status": "fixed",
    "finding_and_repair": "Step 1.1 incorrectly says every failed batch disables learning. Replaced its load-bearing batch-count argument by an injection from consecutive batch-start intervals into successful global updates; the disjoint intervals give the required N bound, including unfinished batches. Also made AC explicit for the actual concentration prerequisite and defined S,A. The optimism and 2mG proofs retain their claims.",
    "uncertain": false,
    "source_urls": [
      "https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf"
    ],
    "familiar": false,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-pac-mdp-escape-event-reduction",
    "batch": "82",
    "locus": "Facts A1/F2",
    "severity": "nonfatal",
    "status": "fixed",
    "finding_and_repair": "A1 overattributes path-law existence to the choice-function axiom. Corrected A1 to state AC and its use as a hypothesis; F2 now explicitly attributes trajectory laws to the already-cited value-functions theorem. Both suppliers were already dependencies and AC was already in the Statement. The stopped coupling, C=B+W cap, disjoint trials and exponential estimate remain valid.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-zero-tolerance-pac-mdp-boundary",
    "batch": "82",
    "locus": "Facts F4; Proof 2.1",
    "severity": "nonfatal",
    "status": "fixed",
    "finding_and_repair": "F4 incorrectly describes finite-sum laws as sums distributing over products. Replaced it by the actual additivity, scaling and monotonicity clauses and displayed sum_c w(h)p(c|h)=w(h), with induction normalizing the finite tree and verifying its marginals in step 2.1. The two-bandit contradiction and legal R-MAX/delayed-Q witnesses remain sound. Added the explicit AC dependency already assumed in the unchanged Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-pac-mdp-inadmissible-heuristic-fails",
    "batch": "82",
    "locus": "Example; Facts F1",
    "severity": "nonfatal",
    "status": "fixed",
    "finding_and_repair": "The Example already identifies inadmissibility but does not explicitly define its domain extension of alg-r-max. Specified that only U≥Q* is dropped and all procedure instructions remain unchanged; F1 now cites those retained instructions. Direct induction at gamma=0 keeps both values zero after the one-sweep rebuild, so the tie rule chooses b forever. This claims no application of the admissible-input guarantee.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-delayed-q-learning-pac-bound",
    "batch": "82",
    "locus": "Statement; Proof 1.3",
    "severity": "fatal",
    "status": "fixed",
    "finding_and_repair": "The original Statement omits AC required by the escape reduction, zero-tolerance theorem, value theorem and concentration lemma. Added the explicit assumption and dependency. Also closed the digest concern in step 1.3 by extending V_t to each dedicated sink with value Q_t(s,a), giving zero sink residual and a valid maximum over the whole model. Checked all parameter substitutions, confidence delta/2 and barred uniform bounds.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "ex-pac-mdp-discount-factor-dependence",
    "batch": "82",
    "status": "open",
    "finding": "The Example and proof 2.1 assert the delayed-Q PAC bound without the supplier’s explicit AC hypothesis. The algebraic discount powers are correct; only the hypothesis qualification and associated deps/metadata need owner repair.",
    "affected_use": "Example: “Substitution into the proved theorems gives the leading orders” for R-MAX and Delayed Q-learning. Facts F3 cites the delayed-Q leading bound, and proof 2.1 applies its uninformative-heuristic case to claim the displayed sample-complexity order.",
    "invalidated_claim": "The displayed algebraic exponents remain correct, but asserting these as proved PAC-MDP bounds needs the now-explicit AC hypothesis. The Example and Given omit AC.",
    "minimality": "Add Assume AC to the Example and Given, and def-axiom-of-choice to deps and its own metadata; alternatively explicitly restrict the claimed bounds to the PAC theorems’ hypotheses. The formulas and algebra need no change.",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "Every assigned carrier and all direct consumers of the changed Statements are draft members of the frozen frontier. No published or outside-frontier item was edited or found affected by these interface events; there is no published-consumer maintenance entry for this unit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-bounded-reward-finite-mdp",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "locus": "reference-note",
    "reason": "The path-law reference omitted the initial probability required by Ionescu–Tulcea. The one-step MDP definition is sound and does not assert a policy-independent initial law. Corrected the reference and explicitly constructed each policy law from a prescribed initial distribution, alternating action and joint observation kernels; no Definition change.",
    "post_sha256": "9da8ed77a5a55c072ff771e22441c56b906b58d3cbc61fd8f021baa000c54980",
    "uncertain": false,
    "source_urls": [
      "https://www.stat.cmu.edu/~cshalizi/754/2006/notes/lecture-03.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-ucrl2-adaptive-sample-tape-representation",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "locus": "proof-step",
    "reason": "At T=0 the original proof attempted to choose a nonexistent first tape coordinate. Added a separate empty-tape construction retaining the original initial-state law, and for T>=1 specified the first Q law, remaining constant kernels, and independent initial-state/policy extension. The Statement and its full horizon scope are unchanged.",
    "post_sha256": "5f68d2c19a85fa77183f3e59f98bd9e826c56fe39fd47adf31ac50a2e92cf60d",
    "uncertain": false,
    "source_urls": [
      "https://www.stat.cmu.edu/~cshalizi/754/2006/notes/lecture-03.pdf"
    ],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-ucrl2-high-probability-regret",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "locus": "facts-block",
    "reason": "F3 attributed finite-horizon convergence to two definitions rather than its proved supplier. The convergence is already established by thm-communicating-mdp-common-optimal-average-reward, explicitly referenced by the average-reward definition, so this is a nonfatal citation defect rather than an absent mathematical premise. Added the theorem directly to deps, F3, the manifest and contract; Statement unchanged.",
    "post_sha256": "c7f1313e5aac232c92d181c44dda9aca77eef7c86c60b56a76c020263b2de672",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update-required",
    "reason": "All assigned items remain draft. Their original Statement/Definition section hashes are unchanged, no new prerequisite was authored, and no published-consumer defect was discovered; no outside maintenance event is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "ex-pomdp-observation-aliasing-preserves-belief",
    "reason": "The rejection's nonidentity state-swap counterexample violates the explicitly identity transition in this concrete example; prediction and posterior both equal (2/3,1/3). No item repair is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-metadata-finding",
    "id": "ex-pomdp-observation-aliasing-preserves-belief",
    "path": "research/machine-learning-all-101-2026-10-19-batch-88.proof-contracts.json",
    "locus": "contracts.ex-pomdp-observation-aliasing-preserves-belief.citations[F4].quote",
    "reason": "The old F4 quote retained inline supplier links removed from the published finite-sum Definition by a prior presentation repair. Refreshed this assigned citation from the current Definition under the shared-write lock; its enumeration independence and finite-sum content are unchanged. Strict assigned-item contract validation now passes with zero errors and warnings. No published item was edited and no published-consumer finding is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-resolved-finding",
    "id": "def-imitation-learning-and-expert-surrogate-loss",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "definition",
    "disposition": "fixed",
    "reason": "The Definition leaves theta_i unbound in L_i(theta_i), so gamma_N is undetermined. This is a logical defect rather than recoverable policy notation: on one state, two parameters may represent the same expert policy while their admissible surrogate values are 0 and 1; the same current policy then gives different realized losses and regrets. Repaired by specifying the current parameter theta_i in K and hat_pi_i=pi_{theta_i}, and taking a positive integer N of iterations. No cost, occupancy, loss-domination or comparator clause was weakened.",
    "evidence": "Before: hat_pi_i is only called the current learner, while gamma_N evaluates L_i(theta_i). After: hat_pi_i=pi_{theta_i} with theta_i in K and N a positive integer. Review and current hashes are recorded above.",
    "uncertain": false,
    "source_urls": [
      "https://proceedings.mlr.press/v15/ross11a/ross11a.pdf"
    ],
    "familiar": true,
    "class": "accuracy",
    "subclass": "undefined-notation",
    "location_detail": "Definition, final paragraph defining gamma_N",
    "caught_at_stage": "5.1-adjudicate",
    "caught_by_role": "final-adjudicator",
    "subject": "def-imitation-learning-and-expert-surrogate-loss"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-resolved-finding",
    "id": "ex-behavior-cloning-covariate-shift",
    "severity": "nonfatal",
    "location": "facts-block",
    "disposition": "fixed",
    "reason": "F1 incorrectly attributes equality of surrogate and disagreement probability to the supplier, which permits every [0,1]-valued upper bound. The Example itself explicitly chooses equality, so step 1.1 and the cost calculation remain valid. Repaired F1 to state the general domination condition and separately identify the local equality choice; no claim or verification step changes.",
    "evidence": "Before F1 attributes exact disagreement loss to a definition allowing upper bounds; after F1 states that upper-bound condition and attributes equality to the local Example. The five proof steps and Example are unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://proceedings.mlr.press/v15/ross11a/ross11a.pdf"
    ],
    "familiar": true,
    "class": "accuracy",
    "subclass": "citation-inaccurate",
    "location_detail": "Facts & Assumptions, F1",
    "caught_at_stage": "5.1-adjudicate",
    "caught_by_role": "final-adjudicator",
    "subject": "ex-behavior-cloning-covariate-shift"
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-change",
    "reason": "Both assigned carriers and all eight direct item consumers are draft frozen-frontier items. Current dependency/reference and imitation-learning prose searches found no outside or published consumer of this interface change, so no published-consumer defect or repair row is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-constrained-markov-decision-process",
    "model": "gpt-6-luna",
    "context_sha256": "71ce9c8c1c6534976794759839913e83b061a4d9605b216bd31a25a71cb0766e",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The assigned item defines a CMDP as model data, not an optimization theorem. Its finite MDP, initial law, discount, cost signals and real thresholds are complete tuple data. The immediately subsequent def-discounted-cost-constraint explicitly defines J_g, J_r and feasibility by every J_ci <= b_i. Neither the model definition nor its contract claims optimality, existence of a feasible policy, or pathwise safety. Separating model data from the expected-cost convention is logically sound.",
    "uncertain": false,
    "source_urls": [
      "https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-discounted-cost-constraint",
    "model": "gpt-6-luna",
    "context_sha256": "5bec62f5fb011baa5e66b6678471fcddc8c1adc757315e1157bd165990cdb4dc",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "def-finite-markov-decision-process explicitly requires a finite subset R of the real numbers. With nonempty S and nonempty action sets, transition normalization forces R nonempty. Therefore B=max_{rho in R}|rho| is finite and |r(s,a,rho,s′)|<=B. Probability finite-time transition weights imply each reward expectation has absolute value at most B, so lem-bounded-discounted-return-converges and lem-normalized-discounted-state-occupancy-is-probability give absolute convergence and |J_r|<=B/(1-gamma). The rejection overlooks an inherited hypothesis.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "def-discounted-value-and-advantage-functions",
    "model": "gpt-6-luna",
    "context_sha256": "ae08c470a704b79db3724d4fe7c6a61f749723a2bea12e6e75a1ece6f301bf13",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The CMDP inherits the finite real reward alphabet R from def-finite-markov-decision-process, hence |r|<=B=max_R|rho|<infinity. The probability-mass/convergence supplier applies to every Dirac initial law, giving |V_g|<=B/(1-gamma). The normalized finite action-value sum then satisfies |Q_g|<=B+gamma B/(1-gamma)=B/(1-gamma); A_g=Q_g-V_g is finite. This also covers gamma=0 and each bounded c_i. No unbounded reward is admitted by the interface.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "thm-policy-performance-bound-by-average-divergence",
    "model": "gpt-6-luna",
    "context_sha256": "f30b817c591d0a09d7c61c6bd5a96e63f9fe66d0430bd7b23c680fe43cc6a0b0",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The inherited reward alphabet is a finite subset of R, so r(s,a,rho,s′)=rho is bounded by max_R|rho| and is a valid specialization of bounded g. Independently checked the complete local performance-difference telescoping identity, the column-stochastic resolvent occupancy estimate, and the finite weighted Pinsker argument. The proof bounds the residual by epsilon times the occupancy l1 change and obtains the coefficient 2 gamma epsilon/(1-gamma)^2. The KL branch preserves AC and explicitly treats infinite KL as trivial extended bounds, including zero error coefficients. No missing reward hypothesis or erroneous inference was found.",
    "uncertain": false,
    "source_urls": [
      "https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-adjudication",
    "id": "ex-exact-trust-region-and-sampled-line-search-disagree",
    "model": "gpt-6-luna",
    "context_sha256": "264ab13bf8676574b97287acbae2f5ace80c1a3e1381deddfab53e72b37d8dde",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The rejection correctly identifies a presentation defect: both exact and one-state sampled KL equal K=(1/5)log(20)+(4/5)log(80/99)<4. The actual disagreement is exact CPO cost feasibility (1/5>1/20) versus the conditional safe-row sample cost check (0<=1/20, sample probability 99/100). Retitled the item to name this cost-check disagreement and synchronized its manifest title. The Example and all proof steps remain unchanged; no claim that the sampled quadratic program produces this proposal is made.",
    "uncertain": false,
    "source_urls": [
      "https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no-update-required",
    "reason": "All five assigned carriers are draft. No original Statement or Definition changed, no new prerequisite was created, and no necessary published-consumer repair was identified. The three stale quotations were repaired only in assigned contract rows; no published item was edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-predictable-linear-forecast-empirical-bernstein",
    "severity": "nonfatal",
    "location": "facts-block",
    "subclass": "citation-misattributed",
    "disposition": "fixed",
    "reason": "A1 falsely attributes an AC assumption to the conditional-expectation version definition. Corrected attribution retains the explicit AC assumption needed by the coverage theorem, so no mathematical conclusion changes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-nystrom-kernel-ridge-fit",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "Definition references",
    "reason": "Existence and uniqueness were misattributed to the defining equations although the correct theorem was already a dependency. Repaired the two reference labels without changing the Definition or dependencies.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-singular-hessian-nonisolated-inner-minimum",
    "locus": "facts-block",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "F2 reverses the sufficient-condition direction of the nonsingular-Hessian theorem when describing branch existence.",
    "repair": "Replace the necessity wording with the actual sufficient guarantee of a unique local C1 stationary branch and inverse-Hessian hypergradient formula.",
    "reason": "F2 incorrectly presented Hessian invertibility as necessary for a local stationary branch. The cited theorem assumes invertibility to guarantee a unique local C1 branch and its inverse-Hessian formula; it asserts no converse. This is nonfatal: steps 1.1–2.1 directly establish the full minimizer set, Hessian diag(1,0), and explicit branches with outer derivatives 0 and 1. Step 3.1 correctly concludes selection ambiguity and inapplicability of the inverse-Hessian formula. Replaced only F2 with the sufficient-condition statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-finite-masking-diffusion-chain",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The path-product definition is sound, but its concluding across-step independence wording conflates independent random innovations with resulting states. With L=1, N=3 and alpha=(1,2/3,1/3,0), P(Z1=m,Z2=m)=1/3 differs from P(Z1=m)P(Z2=m)=2/9. This is a nonfatal explanatory defect: the explicit kernel/path law and all coordinate-path independence properties are unchanged. Replaced it by independence of coordinate trajectories given X and next-coordinate states given the preceding state. The judge N=2 example alone is inconclusive because Z2=m is deterministic.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "cor-masked-diffusion-finite-elbo-cross-entropy",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The mathematical Statement and proof correctly identify E[-E(X)] with the weighted conditional cross-entropy, not E(x) itself. The title omits both negation and data averaging, a nonfatal presentation defect. Corrected the title and owning manifest title mirror without changing any Statement or proof.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "rem-discrete-diffusion-factorization-and-endpoint-limits",
    "reason": "The cited item is a counterexample and its universal factorization sentence is expressly headed Statement refuted. Its complete argument puts probability 1/2 on each of 00 and 11 given the certain all-mask state, while the product of marginals puts 1/4 on 01. It therefore supports the remark rather than contradicting it. The remark correctly restricts the ELBO endpoint cancellation to exact endpoints and asserts no continuum or estimator-variance theorem. Sahoo sections 3.2.3, 3.3 and B.1.1-B.1.3 confirm the terminology attribution; no item edit is needed.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/html/2406.07524v1"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "thm-masked-diffusion-kl-reduces-to-cross-entropy",
    "route": "frontier-owner",
    "severity": "nonfatal",
    "status": "open",
    "affected_use": "items/thm-masked-diffusion-kl-reduces-to-cross-entropy.md, Statement: the transition draws at distinct coordinates and steps are independent; F5: the finite feature/label/action spaces.",
    "invalidated_claim": "For |V|>=2 the action simplex Delta(V) is infinite. Independent auxiliary Bernoulli survival variables across steps must be distinguished from resulting next states.",
    "minimality": "Clarify that a clean coordinate survives using fresh independent Bernoulli innovations and that a masked coordinate remains masked. In F5 replace finite feature/label/action spaces with finite feature and label spaces and the Borel action simplex. The current proof already uses these sound conventions; no theorem conclusion needs weakening.",
    "reason": "Confirmed the Step-4 F5 wording concern directly: Delta({0,1}) contains (t,1-t) for every t in [0,1]. Proof 1.1 correctly equips it with Borel sigma-algebra. Also route the supplier-related independent-transition wording for the same clarification made in the definition. Item is unassigned, remains unedited, and needs its frontier owner rather than outside maintenance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-ledger",
    "action": "no-update-required",
    "reason": "All eleven direct consumers of the changed definition are draft frozen-frontier items. No published consumer was found. Current published kernel/KL/variational/AC suppliers inspected here already move their defining hyperlinks to reference sections; the corresponding historical Step-4 alerts do not establish a present defect. No published repair, audit or acceptance is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-verifier-and-generation-protocol",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "The universal distribution-change assertion is false: for two permitted responses with fixed masses 1/3 and 2/3, permuting their enumeration changes the list but neither singleton probability. Replaced it by possible dependence on protocol data and explicit invariance under pure reordering; all truncation, fixed-support, differentiability and verifier assumptions are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-finite-group-relative-update-termination-and-calls",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "F2 inaccurately assigned reference-policy positivity to the protocol, which only defines policy masses. The algorithm Definition explicitly requires reference masses positive on exactly B_q, and that algorithm is already a declared dependency and Given input. Added this exact attribution to F2 and its contract citation. Checked nonnegative variance, zero branch, finite KL ratios, valid-parameter induction and all four pathwise call bounds; no claim changes or missing prerequisites.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "rem-reasoning-training-evidence-and-evaluation-targets",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "An always-rejecting binary verifier is admissible, yielding zero accepted returned responses and a zero denominator. Added the explicit nonempty-acceptance condition and undefined-when-empty caveat to the empirical fraction. Other evaluation distinctions remain valid; the group-score limitations match the same-policy unnormalized theorem, and the offline caveat retains the trajectory lemma's AC, stationary-policy, common-law, coverage and integrability hypotheses.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-pass-at-one-oracle-pass-n-verifier-selected-accuracy",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "The cited theorem Statement gives rejection success only under A=C; its F3 restatement omitted that restriction. The numerical oracle event nevertheless follows from already supplied F8, independently of A. Removed the inaccurate F3 premise, preserved the theorem link with an accurate label, and derived the four incorrect-response pair masses using F8 and finite distributivity F4. Checked normalization, empirical indicator expectation, accepted probability 55/64 and correct-return probability 22/64; their ratio is 2/5.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "ex-perfect-and-false-positive-verifiers",
    "route": "frontier-owner",
    "status": "open",
    "severity": "nonfatal",
    "reason": "Unassigned current draft Facts & Assumptions states Pr(C(c)=1)=3/4 and Pr(C(w)=1)=0, although C is deterministic with C(c)=1 and C(w)=0. The Example correctly gives Pr(Y=c)=3/4 and Pr(Y=w)=1/4; its numerical verification uses that intended law. Replace only the malformed Given probabilities with the response law and deterministic C values. This pre-existing finding is independent of the protocol correction; item was examined as a direct consumer but not edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "affected_use": "items/ex-perfect-and-false-positive-verifiers.md, Facts & Assumptions Given: a deterministic truth value is assigned nontrivial probability 3/4.",
    "minimality": "Correct only Given to Pr(Y=c)=3/4, Pr(Y=w)=1/4, C(c)=1 and C(w)=0; preserve the sound Example and both verification steps."
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "record-no-published-impact",
    "id": "def-verifier-and-generation-protocol",
    "reason": "The exact current dependency/reference search finds twelve direct item consumers, all draft frozen-frontier items, and the owning draft A-page inventory. No published or outside consumer uses the changed protocol clause, so no published mathematical repair or maintenance item is proposed. The six existing published foundational quotation updates in the assigned lemma contract only reflect their current text; their items were not edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "ex-threshold-rates-vary-under-score-balance",
  "ex-two-client-shifted-optima",
  "ex-two-token-causal-next-token-mask",
  "fs-wainwright-lower-signed-support-threshold",
  "lem-lasso-active-set-stationarity",
  "fs-wainwright-signed-support-threshold-claim",
  "lem-anm-density-factorization-implies-dsep-conditional-independence",
  "lem-anm-parent-dependence-persists-under-conditioning",
  "lem-clarke-sum-chain-rule-for-exponential-risk",
  "lem-dagger-mixture-occupancy",
  "lem-dagger-task-cost-from-expert-surrogate",
  "lem-elliptic-local-martingale-brownian-representation",
  "lem-feature-energy-continuous-under-w2-on-a-common-cutoff",
  "lem-fedavg-one-round-progress",
  "lem-finite-response-score-gradient-identities",
  "lem-forward-density-duality-identifies-reverse-process",
  "lem-homogeneous-clarke-flow-margin-monotonicity",
  "lem-homogeneous-clarke-flow-produces-approximate-margin-kkt-points",
  "lem-homogeneous-margin-constraints-satisfy-mfcq",
  "lem-sample-covariance-empirical-law-is-a-probability-measure",
  "lem-largest-sample-covariance-eigenvalue-lower-bound",
  "lem-largest-sample-covariance-eigenvalue-upper-bound",
  "lem-neural-operator-ba-class-is-empty-as-defined",
  "lem-neural-operator-kernel-riemann-sums-uniform-on-compact-inputs",
  "lem-orthonormal-lasso-soft-thresholding",
  "lem-pinn-residual-loss-from-fill-distance",
  "lem-positive-minimal-dags-have-a-conditioned-reversal",
  "lem-predictable-elliptic-martingale-brownian-reconstruction",
  "lem-reparameterized-variational-training-finite-run-terminates",
  "lem-scaffold-convex-server-variance",
  "lem-scaffold-nonconvex-server-variance",
  "lem-scaffold-nonconvex-round-progress",
  "lem-shin-parabolic-energy-estimate",
  "lem-shin-parabolic-residual-stability",
  "lem-youngest-child-descendants-conditionally-independent",
  "rem-discrete-diffusion-factorization-and-endpoint-limits",
  "thm-anderson-reverse-time-diffusion",
  "thm-bai-yin-smallest-singular-value-limits",
  "thm-calibration-and-balance-incompatibility-for-risk-scores",
  "thm-dagger-finite-sample-generalization",
  "thm-dagger-no-regret-reduction",
  "thm-exp3-expected-regret",
  "thm-exp4-expected-regret",
  "thm-fedavg-under-gradient-dissimilarity",
  "thm-gaussian-smoothing-reversal-on-truncated-time-interval",
  "thm-group-centered-score-estimator-factor",
  "thm-group-convolution-equivariance",
  "thm-homogeneous-gradient-flow-limit-satisfies-margin-kkt",
  "thm-instantaneous-change-of-variables-for-ode-flow",
  "thm-laplace-density-from-exponential-law",
  "thm-laplace-mechanism-privacy",
  "thm-largest-eigenvalue-sample-covariance-edge",
  "thm-lmnn-projected-subgradient-best-average-bound",
  "thm-marchenko-pastur-law-for-sample-covariance",
  "thm-markov-diffusion-reversal-by-bayes-kernels",
  "thm-mean-field-particle-time-limits-interchange",
  "thm-mirror-descent-regret",
  "thm-neural-operator-compact-uniform-universality",
  "thm-neural-operator-discretization-invariance",
  "thm-nonconvex-sgd-random-iterate-stationarity",
  "thm-pc-high-dimensional-consistency",
  "thm-pinn-regularized-loss-consistency",
  "thm-pinn-linear-elliptic-consistency",
  "thm-shin-parabolic-initial-boundary-existence-and-residual-stability",
  "thm-pinn-linear-parabolic-consistency",
  "thm-restricted-anm-population-identification",
  "thm-scaffold-convex-and-nonconvex-rates",
  "thm-smallest-positive-eigenvalue-sample-covariance-edge",
  "thm-vc-agnostic-sample-complexity",
  "thm-vc-realizable-sample-complexity"
]


