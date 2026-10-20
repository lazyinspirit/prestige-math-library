# Step 5 repair: impact-repeat, round 1, unit 3

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/impact-repeat-1.json.







Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-impact-repeat-r1-u3.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"impact-repeat",round:1,unit:"3",input_sha256:"6568af4c41bd9ca07a490b6829cbce536c22057a5c9b969a7411cf21a4befb5c",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.





Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.







All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-hahn-hard-soft-attention-sequence-model",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "Bounded embeddings do not bound an arbitrary input map. In dimension two choose p_i=(1/i,0), token vectors encoding bits, and f_in(v,p)=(1/p_1,v_1) on these inputs. Linear query/key/value projections select position, bit, and bit respectively. With EOS bit zero, a single nonfinal one has EOS attention weight exp(n)/(exp(n)+n-1), tending to one; the all-zero word gives zero. A Lipschitz update can return this weighted bit. Added a uniform bound on the actual combined initial states for the soft-influence regime; this excludes the counterexample without restricting the general hard model."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-false-positive",
    "id": "thm-fixed-width-transformer-lp-universality",
    "outcome": "false_positive",
    "reason": "The rejection treats F3 as an arbitrary existential lookup, but proof 3.3 uses its explicit construction. In lem-yun-transformer-grid-lookup, proof 1.2 takes key and value projection u, proof 2.1 preserves the delta lattice and uses half-grid thresholds, and proofs 6.1 and 7.1 place detector and pulse boundaries delta/3 from valid lattice codes. Every maximizing tie has the same scalar value u^T Z. The final query is nonzero except on the all-zero grid state: positive nonconstant codes are shifted above zero, negative sentinel codes stay negative, and an unshifted constant zero code means every column is zero. At that state all values vanish, so its softmax output is stable under perturbation as well. Fixed continuous ramps and finite composition therefore justify the simulation. No repair is needed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-physics-informed-neural-network-loss",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "Confirmed: a measure on the trivial sigma-algebra of {0,1} has no singleton masses even when q_h=0 is measurable. The d=1 branch now requires measurable singletons, making its finite weighted sum defined and equal to the integral. Population and higher-dimensional formulas, infinite-value conventions and all weights are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "lem-pinn-residual-loss-from-fill-distance",
    "route": "frontier-owner",
    "affected_use": "Statement d=1 independently assumes a finite measurable Gamma, then writes mu_b({y}) in its exact boundary formula; this does not itself assert measurable singletons.",
    "invalidated_claim": "The d=1 finite sum is undefined for a probability measure on a non-discrete sigma-algebra, including the trivial sigma-algebra of a two-point Gamma.",
    "minimality": "Add explicit measurability of each boundary singleton to the one-dimensional branch; preserve all estimates.",
    "reason": "Statement d=1 independently assumes a finite measurable Gamma, then writes mu_b({y}) in its exact boundary formula; this does not itself assert measurable singletons.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-shin-elliptic-divergence-form-operator",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "Confirmed: with a_11=|x| and u=x the classical flux derivative fails at zero. The repaired definition specifies the classical C2 flux-derivative domain and the product-rule hypotheses, preserves the positive sign and single b divergence, and distinguishes independently specified distributional weak uses. No ellipticity or C1 coefficient assumption is imposed on every weak use.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-neural-operator-mesh-discretization",
    "severity": "nonfatal",
    "reason": "Confirmed nonfatal error in Remarks: with total quadrature weight one, kappa(x,y)=x-1/2, P(a)=1, b=0 and ReLU, the first output is (x-1/2)_+, not a scalar multiple of x-1/2. The defining procedure already applies activation correctly. The repaired remark identifies the affine preactivation as the finite sum plus bias and treats activation as a subsequent bridge map; exact finite-sample factorization is preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-shin-parabolic-initial-boundary-existence-and-residual-stability",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "Confirmed: zero-data energy estimates bound e_m=h_m-u*, not the individual nonzero-data functions. On the unit disk take alpha in (0,1/2) and w(z)=sum_{k>=1}2^(-alpha*k) Re(z^(2^k)); it is alpha-Holder on the closed disk but its Dirichlet integral is pi*sum 2^((1-2*alpha)*k)=infinity. For L=Delta, f=0, g=w, lateral datum w and h_m=w, all stated residual and compatibility hypotheses hold but h_m and u* have no H1 membership. The repaired clause retains error energy convergence for all admitted data and states individual-function strong convergence whenever u* has finite energy, including zero prescribed data.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/2004.01806"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-hermitian-spectral-measure-is-probability",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "statement",
    "status": "fixed",
    "reason": "Confirmed missing domain hypothesis: the 0-by-0 matrix is Hermitian positive semidefinite, but the empirical Dirac sum divides by d=0. The cited definition explicitly assumes positive integers d,N. Added positive integer d to the Statement and Given clause, preserving all intended positive-dimensional cases. This is a logic defect (an undefined claimed probability law), not an incorrect citation.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-defect",
    "id": "lem-carath-ode-flow-with-integrable-local-bounds",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "statement",
    "status": "fixed",
    "reason": "For b(t,x)=x^2, T=2 and X(0)=1, local uniqueness forces X(t)=1/(1-t) on [0,1). With t_n=1-1/n and u_n=1-1/(n+1), u_n-t_n tends to zero but X(u_n)-X(t_n)=1, contradicting uniform continuity required by absolute continuity. Every shorter absolutely continuous solution extends, so the original maximal-solution existence claim is false. The repaired statement requires local absolute continuity, and the compatible-union proof establishes it on every compact subinterval.",
    "correction": "Replace maximal absolute continuity by maximal local absolute continuity, explicitly defined on every compact subinterval of the maximal interval; prove the compatible union has that regularity.",
    "post_sha256": "8c4a65c756e42674780a36132d3615c2df5cb5e9ce5f2fd37528120ff1a97143",
    "uncertain": false,
    "source_urls": [
      "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-w2-convergence-implies-homogeneous-projection-convergence",
    "phase": "repeat",
    "round": 1,
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "locus": "facts-block",
    "reason": "F1 uses 1/n^2 although def-sequence explicitly starts indices at zero, so its coupling selection omits pi_0. This is nonfatal: any finite-cost initial coupling leaves every limiting estimate unchanged. Replacing the tolerance by 1/(n+1)^2 for n>=0 supplies all couplings under the stated AC assumption and still makes their displacement costs tend to zero.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-markov-diffusion-reversal-by-bayes-kernels",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "statement",
    "finding": "Positive density solutions to the forward equation need not be the marginal densities of the given process; the shifted Gaussian family invalidates the claimed Bayes conditional law and reverse drift.",
    "correction": "Explicitly require p_t to be the marginal density of X_t for every t in [0,T].",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/2402.07487"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-markov-diffusion-reversal-by-bayes-kernels",
    "severity": "nonfatal",
    "defect_type": "other",
    "locus": "frontmatter",
    "finding": "The Tang–Zhao reference incorrectly names Y. Tang and Section 2.2.",
    "correction": "Use W. Tang, Section 2, Theorem 2.1, equation (2.3), PDF pp. 4–5, retaining the explicit heuristic-proof caveat.",
    "status": "fixed",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/2402.07487"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-proper-scoring-rule",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "The equality-only clause does not imply properness. For S(q,j)=2-S_B(q,j), 0<=S_B<=2 makes S a continuous nonnegative loss and its expected loss is 1+||p||^2-||p-q||^2. Equality with the truthful expected loss forces q=p, but every other report has strictly smaller loss. Thus the original clause admits strictly improper losses. Added the explicit requirement that S is proper to the strict-propriety clause.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update-required",
    "id": "def-proper-scoring-rule",
    "reason": "The assigned supplier and all five direct dependency/reference consumers are draft original-frontier items. No published consumer or outside-frontier mathematical use was found in the current item/page search; no published repair or audit claim is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-imitation-learning-and-expert-surrogate-loss",
    "locus": "statement",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "finding": "The original universal claim fails for S={s}, two self-looping actions, and a deterministic expert: one demonstration (s,pi*(s)) labels every state reachable by any learner. This is a logic defect in the Definition, not a dependency-citation error. Replaced only the final sentence with the coverage caveat; fixed demonstrations may omit learner-visited states, but covered labels can be reused without new expert interaction.",
    "uncertain": false,
    "source_urls": [
      "https://proceedings.mlr.press/v15/ross11a/ross11a.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "record-no-published-consumer-impact",
    "id": "def-imitation-learning-and-expert-surrogate-loss",
    "reason": "All eight current direct item consumers are draft frontier items. Their exact affected uses were examined and remain sound; no published or outside-frontier item consumer was found, and no maintenance repair is proposed.",
    "uncertain": false,
    "source_urls": [
      "https://proceedings.mlr.press/v15/ross11a/ross11a.pdf"
    ],
    "familiar": false
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "thm-directional-sample-covariance-resolvent-limit-for-bounded-entries",
  "thm-directional-sample-covariance-resolvent-limit",
  "thm-finite-action-gibbs-policy-optimum",
  "thm-hard-attention-languages",
  "thm-pinn-regularized-loss-consistency",
  "thm-shin-elliptic-dirichlet-existence-and-residual-stability",
  "thm-pinn-linear-elliptic-consistency",
  "thm-pinn-linear-parabolic-consistency",
  "thm-posterior-forecast-minimizes-scoring-risk",
  "thm-soft-attention-parity-chance-limit",
  "thm-transformer-formal-language-limits"
]


