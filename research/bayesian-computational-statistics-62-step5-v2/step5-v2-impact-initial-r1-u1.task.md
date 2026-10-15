# Step 5 repair: impact-initial, round 1, unit 1

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/impact-initial-1.json.





Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/step5-v2-impact-initial-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"bayesian-computational-statistics-62",phase:"impact-initial",round:1,unit:"1",input_sha256:"1e3beae16ed088ae7489099c92d6478820dabafbc87573411ad65ec35d41354a",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run bayesian-computational-statistics-62 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "bcs62-step5-initial-r1-u10-notation",
    "run": "bayesian-computational-statistics-62",
    "at": "2026-10-15T16:55:22.400619+00:00",
    "class": "accuracy",
    "subclass": "undefined-notation",
    "severity": "nonfatal",
    "location": "proof-step",
    "subject": "thm-posterior-consistency-under-prior-mass-and-tests",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "batch": "10",
    "evidence": "A_n was first defined in 4.1 after E[A_n] was used in 3.2. The exact formula makes the argument unambiguous; moving it before the estimate repairs the presentation without changing the proof claim.",
    "repair_cost": "inline-fix",
    "source": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u10.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "bcs62-step5-initial-r1-u10-contract",
    "run": "bayesian-computational-statistics-62",
    "at": "2026-10-15T16:55:22.400619+00:00",
    "class": "accuracy",
    "subclass": "contract-mismatch",
    "severity": "nonfatal",
    "location": "contract-row",
    "subject": "thm-posterior-consistency-under-prior-mass-and-tests",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "batch": "10",
    "evidence": "Four boundary rows cited stale proof locations: the nonempty testing case and zero-block branch are in 1.3, finite-positive evidence follows from 1.1 and 3.1, and the KL subset is selected in 1.2. Corrected these references and synchronized the two edited derivations.",
    "repair_cost": "contract-sync",
    "source": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u10.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T16:57:39.268984Z",
      "batch": "11",
      "group": "step5-v2-initial-r1-u11",
      "class": "accuracy",
      "subclass": "ill-formed",
      "severity": "nonfatal",
      "location": "statement",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "defect_id": "bayesian-computational-statistics-62-step5-initial-r1-u11-iid-log-square-zero-convention",
      "subject": "thm-iid-posterior-contraction-by-entropy-and-prior-mass",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u11.json",
          "note": "The displayed log-square integrand omitted values when p0 vanishes. The denominator supplier explicitly sets the weighted term to zero there and to +infinity where p0>0 and p_theta=0. Added precisely those conventions; the proof and claimed contraction are otherwise sound. This is a missing null-set convention, not a counterexample to contraction."
        },
        {
          "path": "items/thm-iid-posterior-contraction-by-entropy-and-prior-mass.md",
          "note": "Current repaired carrier; see the exact review hashes and scoped validation results in this report."
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T16:57:39.268984Z",
      "batch": "11",
      "group": "step5-v2-initial-r1-u11",
      "class": "accuracy",
      "subclass": "ill-formed",
      "severity": "nonfatal",
      "location": "statement",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "defect_id": "bayesian-computational-statistics-62-step5-initial-r1-u11-holder-log-square-scope",
      "subject": "ex-holder-density-rate-from-entropy-balance",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u11.json",
          "note": "The P0[log ratio]^2 notation has ambiguous operator scope: a square of the mean would not imply the required second-moment bound, whereas the Facts and step 1.1 expressly intend a log-square condition. Replaced it by the theorem’s explicit integral of the squared log and specified its zero-density conventions. This repairs a notation defect; the judge’s claim that the notation necessarily denotes the squared mean is too strong."
        },
        {
          "path": "items/ex-holder-density-rate-from-entropy-balance.md",
          "note": "Current repaired carrier; see the exact review hashes and scoped validation results in this report."
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "All three direct item consumers of the changed theorem Statement are draft members of the frozen frontier; no published or outside-frontier consumer was found, so there is no published-maintenance finding to append."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-likelihood-tilted-measure-is-sigma-finite",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "severity": "fatal",
    "location": "proof-step",
    "disposition": "fixed",
    "reason": "Original F2 and step 1.1 infer quotient measurability from a theorem without a quotient clause. The repair proves threshold measurability explicitly using finite scalar differences and the published threshold theorem; the original Statement is preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-likelihood-tilted-measure-is-sigma-finite",
    "class": "accuracy",
    "subclass": "unsupported-inference",
    "severity": "nonfatal",
    "location": "proof-step",
    "disposition": "fixed",
    "reason": "The original proof ended at sigma-finiteness without deriving the stated selected-minimizer normalization. Final step 2.1 now identifies r_theta* with the indicator of {p_theta*>0}, whose P0 mass is one by the Given almost-sure positivity.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "id": "thm-finite-union-bound",
    "consumer": "cex-weak-tilted-tests-do-not-imply-almost-sure-consistency",
    "action": "retain-existing-repair",
    "disposition": "unaffected",
    "affected_use": "items/cex-weak-tilted-tests-do-not-imply-almost-sure-consistency.md, F6 and step 2.1: bounds the chance that any of n continuously distributed observations exceeds b_n.",
    "reason": "The rejection-blind digest alert describes earlier finite-space-only premises. The current published supplier instead assumes an arbitrary probability space and proves the finite union bound by measurable disjointification, general measure monotonicity and countable additivity (steps 1.1-3.1). That covers the actual continuous-sample use. The canonical ledger already records this exact published repair under local-published-repair:bayesian-computational-statistics-62:step4-b12:thm-finite-union-bound. No published carrier was edited or adjudicated, and no new audit or receipt validation is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u13-qmd-choice-attribution",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T16:55:43.333332+00:00",
      "class": "accuracy",
      "subclass": "citation-misattributed",
      "severity": "nonfatal",
      "location": "frontmatter",
      "subject": "cor-qmd-ac-component-lan-to-bvm",
      "caught_at_stage": "4-judge",
      "caught_by_role": "unknown",
      "disposition": "fixed",
      "description": "axiom_use and Facts A1 attribute AC to the QMD supplied-density interface even though def-qmd-path explicitly asserts no choice principle. The corollary already assumes AC; its actual mass-bound, normalized-product, fixed-sequence LAN and BvM suppliers explicitly assume AC, so the theorem remains valid. Corrected both attribution passages and the manifest mirror.",
      "adjudication_ref": [
        {
          "file": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u13.json",
          "id": "cor-qmd-ac-component-lan-to-bvm",
          "model": "gpt-6-luna",
          "context_sha256": "e7f9565279da02d55a91974736013dca511639f09a95e0ffde8ff10a5919af61",
          "outcome": "confirmed_nonfatal"
        }
      ],
      "repair_cost": "inline-fix",
      "prevention": {
        "kind": "brief",
        "ref": "SCHEMA.md: keep choice-free proofs choice-free and identify the exact AC use."
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "id": "lem-real-line-is-standard-borel",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "facts-block",
    "reason": "F1 omitted the sufficient direction of the Polish-space definition used in step 1.1. The actual declared supplier and its contract quote already provide that direction. Replaced F1 with an explicit equivalence; the mathematical claim and proof steps are unchanged.",
    "evidence": "items/lem-real-line-is-standard-borel.md, Facts & Assumptions [F1] and Proof 1.1; items/def-polish-space.md, Definition; research/bayesian-computational-statistics-62-batch-14.proof-contracts.json, citations F1.",
    "post_sha256": "436a900c03e39e2d559e3a9017bd687c2fd6f30b4d26ec5e069abf0c27be057f",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "thm-standard-gaussian-log-sobolev-inequality",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "frontmatter/facts-block",
    "reason": "Confirmed nonfatal interface attribution error: the integration-by-parts Statement assumes DC and countable choice only, whereas the Gaussian suppliers assume AC. All three hypotheses were already explicit in this item's Statement and Given, so no inference lacked an assumption. Corrected axiom_use, A1 and F3. Checked the Ornstein–Uhlenbeck generator, vanishing Gaussian boundary terms, entropy endpoint limits, weighted Cauchy–Schwarz and integral of exp(-2t)=1/2; the proof and Statement are unchanged."
  },
  {
    "ledger": "defect",
    "id": "lem-uncorrelated-joint-banach-gaussians-are-independent",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "facts-block/frontmatter",
    "reason": "Confirmed nonfatal interface attribution error: the product-measure theorem assumes sigma-finiteness, satisfied by probability marginals; the norming-family lemma assumes HB and countable choice, with HB supplied under the explicitly assumed AC by A2. Corrected A1 and axiom_use. The jointly Gaussian finite-coordinate covariance has zero mixed blocks, so its characteristic function factors; uniqueness and generating cylinder rectangles give equality with the product law, including singular and zero-space cases. No hypothesis or Statement changed."
  },
  {
    "ledger": "defect",
    "id": "thm-standard-gaussian-lipschitz-concentration",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "facts-block/F1",
    "reason": "Confirmed nonfatal overbroad supplier restatement: log-Sobolev requires C2 g with bounded first and second derivatives, which F1 omitted. Corrected F1 to that exact domain. The actual application already uses smooth bounded f with bounded derivatives, so exp(lambda f) has both positive bounds and bounded first two derivatives. The Herbst centered-mgf inequality, Markov optimization, Gaussian smoothing of clipped Lipschitz f, integrable exponential majorants and L=0 branch are sound. Reexamined the repaired log-Sobolev supplier: only its assumption attributions changed, leaving this application valid."
  },
  {
    "ledger": "defect",
    "id": "ex-cylinder-gaussian-process-is-not-banach-valued",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "proof-step/1.1",
    "defect_type": "dependency_citation",
    "reason": "Made the finite Gaussian law identification explicit through the existing characteristic-function uniqueness lemma. The GP theorem already proves that identification, while the multivariate definition itself defers uniqueness; this is a direct citation clarification, not the fatal missing-mean defect."
  },
  {
    "ledger": "defect",
    "id": "ex-cylinder-gaussian-process-is-not-banach-valued",
    "severity": "fatal",
    "status": "fixed",
    "locus": "Example",
    "defect_type": "logic",
    "reason": "Kernel alone leaves mean unspecified; m(i)=1 has the same covariance but nonstandard marginals. Specified zero mean, retaining the approved iid standard-normal example."
  },
  {
    "ledger": "defect",
    "id": "lem-banach-gaussian-rkhs-unit-ball-is-compact",
    "action": "reject_finding",
    "status": "false_positive",
    "locus": "facts-block/A1",
    "reason": "False positive: 'AC is inherited from ... suppliers' describes carrying their required hypothesis into this lemma; it does not claim that their conclusions prove AC. Both Statement and Given explicitly assume AC, and A1 invokes the choice-implication theorem under AC to obtain DC/countable choice. A2 supplies HB; the ultrafilter and Hilbert-reflexivity hypotheses are thus met. Checked integral D_h^2=exp(||h||_H^2)<=e, the common compact K giving H1 subset K-K, and weak subsequences identifying Banach limits in H1 (weak limit norm<=1 by testing against itself). The item is sound and unchanged."
  },
  {
    "ledger": "defect",
    "id": "lem-tight-borel-gaussian-law-has-separable-support",
    "action": "route_to_owner",
    "owner_batch": "16",
    "status": "outside_assignment_unedited",
    "locus": "proof-step/2.1",
    "affected_use": "items/lem-tight-borel-gaussian-law-has-separable-support.md, step 2.1: The same map W is Borel as an E-valued map; items/thm-gaussian-process-posterior-contraction.md uses the separable-carrier law at Statement and F5.",
    "invalidated_claim": "The construction proves only P(W in E)=1, not W(omega) in E for every omega. A two-point complete probability space with one null point, W=0 on the mass-one point and W=v on the null point, has centered Gaussian law delta_0 and allows K_m={0}, E={0}; the original map is not E-valued.",
    "minimality": "Replace W on the measurable null event {W not in E} by 0 to obtain an E-valued Borel modification, or formulate the restriction as a probability law on E. The law, Gaussian coordinate laws, tightness and support are preserved. This item is draft in batch 16, not an assigned item or a published consumer.",
    "reason": "Verified the exact Step-4 alert against the current complete proof. Reported to the owning route without editing or adjudicating this foreign item; no published-consumer ledger change is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-gaussian-linear-and-quadratic-statistic-tail",
    "locus": "facts-block",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "evidence": "F2 incorrectly licensed translations using a linear-map-only theorem. Added the existing translation-invariance supplier and the simple-function/MCT passage to nonnegative integrals; also made exponential Markov explicit. Direct square completion gives both stated MGFs, and -x-log(1-x)<=x^2 for |x|<=1/2 gives n V_b lambda^2 and the stated admissible tail range. Statement unchanged.",
    "batch": "16",
    "run": "bayesian-computational-statistics-62"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-independent-observation-posterior-denominator-lower-bound",
    "locus": "statement",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "evidence": "The literal squared-mean hypothesis is insufficient: for a singleton prior, n=1, epsilon=10, C=0, P0(a)=0.03 and Q(a)=0.03 exp(-300), KL=8.9704545687 and squared mean=80.46905517<100, but the asserted event has probability 0.97<0.99. Moved the square inside expectation in both Statement and proof, specified positive rate/sample domains, and justified the prior/sample log averages by Tonelli and Jensen. The corrected second moment bounds Var(Z_n) by n epsilon_n^2 and Chebyshev gives exactly the original denominator exponent C+2.",
    "batch": "16",
    "run": "bayesian-computational-statistics-62"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-tight-borel-gaussian-law-has-separable-support",
    "locus": "proof-step",
    "status": "fixed",
    "severity": "nonfatal",
    "evidence": "Full mass mu(E)=1 does not make the original map E-valued at every sample point. Replaced it in proof 2.1 by W_E=W on the measurable full event {W in E}, and W_E=0 on the measurable null complement; explicitly checked its relative Borel preimages and equality of laws. Hahn-Banach then transfers centered Gaussianity via ell(W_E)=tilde ell(W) almost surely. The compact carrier construction, tightness and equality of relative/ambient supports remain valid. This closes a local nonfatal version gap without changing the Statement.",
    "batch": "16",
    "run": "bayesian-computational-statistics-62"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-degenerate-gp-phi-does-not-bound-unknown-scale-local-mass",
    "locus": "proof-step",
    "status": "fixed",
    "severity": "nonfatal",
    "evidence": "The mass calculation is correct: phi_0=0, scale interval mass=2 epsilon_n, and -log(2 epsilon_n)/(n epsilon_n^2) is unbounded for epsilon_n=sqrt(log log n/n). The final ancillary sentence incorrectly inferred availability of parametric contraction from a local prior-density bound without any sampling likelihood. For data laws independent of sigma the posterior remains the prior, so no such contraction holds. Replaced that sentence by the explicit requirement for a specified likelihood and its own hypotheses. The original Statement and proof-gap conclusion remain unchanged.",
    "batch": "16",
    "run": "bayesian-computational-statistics-62"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "batch": "16",
    "run": "bayesian-computational-statistics-62",
    "id": "lem-log-gaussian-density-supnorm-controls-local-likelihood-distances",
    "locus": "facts-block",
    "status": "fixed",
    "severity": "nonfatal",
    "evidence": "F3 omitted the mean-value theorem requirement of continuity on the closed interval; its actual use on the C-infinity exponential is valid. Restated F3 with both endpoint continuity and interior differentiability, made the Taylor endpoint qualification explicit in F2, and repaired the additional step-1.2 miscitation by giving the logarithmic integral its own F4. Checked |c|<=r, |g-c|<=2r, E(U^2)<=r^2, the Taylor KL bound and the square-root density-ratio bound; all three original constants and the Statement remain unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "batch": "16",
    "run": "bayesian-computational-statistics-62",
    "id": "ex-l2-small-log-density-far-in-hellinger",
    "locus": "statement",
    "status": "fixed",
    "severity": "nonfatal",
    "evidence": "The displayed family needs the positive-integer domain: k=0 leaves k^(-4) undefined, and the proof uses 1-k^(-4)>=0. Explicitly specified integers k>=1 in the Statement and owning manifest. For those indices the L2 norm squared is k^(-2), Z_k>=exp(k)/k^4, and the Hellinger affinity is at most k^2 exp(-k/2)+k^(-2)<=48/k+k^(-2), tending to zero. Thus the original asymptotic Hellinger limit sqrt(2) and the example contract are preserved; k=1 gives the uniform density without exception."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "The changed denominator Statement has one direct draft item consumer, thm-gaussian-process-posterior-contraction, whose Gaussian second-moment use is sound. The positive-index example has no item consumers. No published supplier/consumer defect or published maintenance repair was found in this assigned review.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "locus": "facts-block",
    "location": "F22 and proof step 1.1",
    "status": "fixed",
    "evidence": "F22 needs an actual measure on the mark axis to invoke thm-indefinite-integral-of-a-nonnegative-function-is-a-measure in step 1.1. Its originally cited Lebesgue definition explicitly introduces only a set function until thm-lebesgue-measure-is-a-complete-measure is applied under Countable Choice. Added that theorem and thm-borel-sets-are-lebesgue-measurable to deps, F22, the contract and manifest. F22 now restricts Lebesgue measure to the Borel mark axis; step 1.1 cites A2 to discharge Countable Choice from AC. This completes the missing load-bearing dependency without changing the Statement. Checked the strip bounds, count/mark product construction, weighted expectations, exponential-transform limits and Gamma identification, simplex Jacobian, measurable null-event fallback and evaluation-cylinder uniqueness."
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-dirichlet-process-alpha-null-observation-fiber",
    "outcome": "confirmed_nonfatal",
    "locus": "facts-block",
    "location": "F2 and F3",
    "status": "fixed",
    "evidence": "The original F2 omitted the standard Borel hypothesis of both cited theorems; F3 had the same omission. Qualified both facts by standard Borel and AC, and specified the one-observation update. This is nonfatal because step 1.1 establishes the two-point space is standard Borel and the separate diffuse-base model explicitly assumes a standard Borel space; both actual applications already satisfy every hypothesis. Checked that predictive singleton mass is zero and that changing a probability-kernel section on that measurable null singleton preserves measurable evaluations and every disintegration integral. The patched section differs from the update: its singleton G-mass is zero almost surely, whereas the updated two-cell Dirichlet law has strictly positive singleton mass almost surely. This checks distinct versions without changing the example or its proof steps."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u18-single-category-density",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T16:55:37.420954+00:00",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-dirichlet-process-simplex-small-ball",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "18",
      "repair_cost": "inline-fix",
      "source": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u18.json",
      "reason": "Proof 1.1 incorrectly called the single surviving coordinate a Dirichlet density when alpha(U0)=0 and N=1; def-dirichlet-distribution defines that law as the point mass at one. This is nonfatal because the original Proof 2.1 already established probability one for precisely this case without density integration. The repair handles it before the density argument and retains the existing quantitative claim.",
      "pre_sha256": "17708c5c07fe476065d3f97698bc35b3a33fce678daa052df17e71878e882ae8",
      "post_sha256": "0229a49e3da5b797b546bb00ee63ab8b5918bb5cd007719d3f7abb516342841c",
      "adjudication_ref": {
        "id": "lem-dirichlet-process-simplex-small-ball",
        "model": "gpt-6-luna",
        "context_sha256": "fac40c23027561452524f3c6184a0358e1e8162020a2c6c7e9952177139e9127"
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u19-noise-choice",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T16:58:40.674558+00:00",
      "class": "accuracy",
      "subclass": "missing-choice-scope",
      "severity": "fatal",
      "location": "facts-block",
      "subject": "ex-white-noise-is-not-l2-valued",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "defect_type": "dependency_citation",
      "finding": "F2 omitted the countable-choice premise of its Gaussian-law supplier while A1 restricted AC to tightness.",
      "correction": "Added the countable-choice premise and dependency, carried it through the law construction, and synchronized the proof contract and manifest.",
      "adjudication_ref": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u19.json",
          "id": "ex-white-noise-is-not-l2-valued",
          "model": "gpt-6-luna",
          "context_sha256": "70907d0767af138a358f5ce2bc55fd447340b4f0c3b099220d1bd3600508b2e3"
        }
      ],
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u19.json"
        },
        {
          "path": "items/ex-white-noise-is-not-l2-valued.md"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u19-gaussian-basis",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T16:58:40.674558+00:00",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "ex-gaussian-product-prior-satisfies-weak-bvm",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "defect_type": "dependency_citation",
      "finding": "Step 2.1 invoked F5 without supplying its S-regular basis hypothesis.",
      "correction": "Selected the required basis explicitly, exposed the model prerequisites, and synchronized the proof contract.",
      "adjudication_ref": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u19.json",
          "id": "ex-gaussian-product-prior-satisfies-weak-bvm",
          "model": "gpt-6-luna",
          "context_sha256": "61b0b256688c71a5902f25a3b66f6dea72ad4aafbd97c561cb4b0a97aeaf8fec"
        }
      ],
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u19.json"
        },
        {
          "path": "items/ex-gaussian-product-prior-satisfies-weak-bvm.md"
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "none",
    "reason": "Neither assigned draft repair changed a Statement or Definition, and no potentially defective published consumer was identified. No published carrier was edited or adjudicated."
  },
  {
    "path": "research/defect-ledger.jsonl",
    "action": "append",
    "entry": {
      "defect_id": "bcs62-step5-initial-r1-u2-em-interpolation-coarse-grid-justification",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-euler-maruyama-step-process-and-continuous-interpolation",
      "batch": "2",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "repair+rejudge",
      "subclass_note": "Confirmed a dependency-citation applicability gap: the Definition allows every h=T/N>0 but its only justified-by theorem directly assumes h<=1. The original justification supplied no argument transferring that theorem to coarse meshes. Repaired in Remarks by normalizing time to [0,1], Brownian motion to W(Tu)/sqrt(T), drift to T b(Tu,x), and diffusion to sqrt(T) sigma(Tu,x). The normalized mesh 1/N<=1 and inherited coefficient and filtration assumptions make the theorem applicable with p=2. Its finite grid moments give finite original coefficient energy; the existing finite-step Ito lemma then supplies the original integral identity. No input or conclusion was weakened.",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u2.json",
          "note": "Exact rejected tuple and repaired review hashes; time-rescaling argument is in the item Remarks."
        },
        {
          "path": "items/def-euler-maruyama-step-process-and-continuous-interpolation.md"
        },
        {
          "path": "research/bayesian-computational-statistics-62-batch-2.proof-contracts.json"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u2.json",
          "id": "def-euler-maruyama-step-process-and-continuous-interpolation",
          "model": "gpt-6-luna",
          "context_sha256": "0a33620c2025143ff23621866d7902a97544242e408903428eb3f73aab0cf25c"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-sobolev-linear-functional-for-white-noise",
    "status": "fixed",
    "severity": "fatal",
    "finding": "Confirmed defect repaired; exact mathematical finding and repair evidence are in the decision and review for def-sobolev-linear-functional-for-white-noise.",
    "evidence": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u20.json",
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-type-s-and-h-multiscale-density-priors",
    "status": "fixed",
    "severity": "nonfatal",
    "finding": "Confirmed defect repaired; exact mathematical finding and repair evidence are in the decision and review for def-type-s-and-h-multiscale-density-priors.",
    "evidence": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u20.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-m0w-separable-and-projection-tails",
    "status": "fixed",
    "severity": "nonfatal",
    "finding": "Confirmed defect repaired; exact mathematical finding and repair evidence are in the decision and review for lem-m0w-separable-and-projection-tails.",
    "evidence": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u20.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-finite-dirichlet-gamma-representation-and-bernstein-bound",
    "status": "fixed",
    "severity": "nonfatal",
    "finding": "Confirmed defect repaired; exact mathematical finding and repair evidence are in the decision and review for lem-finite-dirichlet-gamma-representation-and-bernstein-bound.",
    "evidence": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u20.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-nonlinear-functional-remainder-at-parametric-scale",
    "status": "fixed",
    "severity": "nonfatal",
    "finding": "Confirmed defect repaired; exact mathematical finding and repair evidence are in the decision and review for ex-nonlinear-functional-remainder-at-parametric-scale.",
    "evidence": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u20.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-multiscale-credible-band-holder-diameter",
    "status": "fixed",
    "severity": "fatal",
    "finding": "Confirmed defect repaired; exact mathematical finding and repair evidence are in the decision and review for thm-multiscale-credible-band-holder-diameter.",
    "evidence": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u20.json",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "cor-type-s-h-density-credible-band-calibration",
    "status": "fixed",
    "severity": "fatal",
    "finding": "Confirmed defect repaired; exact mathematical finding and repair evidence are in the decision and review for cor-type-s-h-density-credible-band-calibration.",
    "evidence": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u20.json",
    "defect_type": "logic"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "disposition": "no_update_required",
    "reason": "No published supplier or direct consumer has a newly discovered defect in this assignment; all inspected direct consumers are draft frozen-frontier items. The Markov supplier is accurate and unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-nonlinear-functional-bvm-and-credible-coverage",
    "status": "owner_review_required",
    "severity": "nonfatal",
    "route": "frontier owner; unassigned item, no edit or adjudication performed",
    "affected_use": "items/thm-nonlinear-functional-bvm-and-credible-coverage.md: Statement radius r_n=o(n^(-1/2)) and paragraph calling it the stronger convention required by the plan.",
    "invalidated_claim": "The hypotheses cannot describe a nonzero-representer weak-BvM posterior; the conditional implication remains logically valid but is vacuous.",
    "evidence": "For t!=0, on posterior ||f-f0||_2<=r_n, |exp(it sqrt(n)L_g(f-f0))-1|<=|t| sqrt(n)||g||_2 r_n. Its posterior expectation therefore tends to zero after adding twice the posterior outside mass. Thus the uncentered scalar characteristic-function modulus tends to one. Translation by -sqrt(n)L_g(X-f0) preserves the modulus, while the stated weak BvM forces it to exp(-t^2||g||_2^2/2)<1. These cannot both hold.",
    "minimality": "Owner should disclose the incompatibility in the explanatory paragraph while preserving the approved mathematical contract; reconsidering the radius convention is a separate owner decision.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-gaussian-sequence-hyperrectangle-class",
    "action": "record_fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "Definition",
    "finding": "The zero-based ambient ell^2(N,R) adds an unconstrained coordinate zero to a positive-index source class.",
    "correction": "Explicitly define N_+={1,2,...} and use ell^2(N_+,R) in both ambient and set-builder positions.",
    "evidence": "items/def-natural-numbers.md includes zero in N; items/def-square-summable-family-on-an-arbitrary-index-set.md permits arbitrary index sets; source PDF page 4, equation (1.1), sums and bounds i>=1.",
    "post_sha256": "67626fc76753a479c870408aa06aca58762610981d0ad4221f24ad3072c0f267"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-gaussian-sequence-empirical-bayes-posterior-formula",
    "action": "record_fixed",
    "severity": "nonfatal",
    "locus": "Statement and F8",
    "finding": "The broader n>=1 and any alpha>0 model was referred to a procedure defined only for n>=3 and alpha<=A_n.",
    "correction": "Define prior, sampling law and positive-coordinate ambient space locally for the full retained parameter range; use the procedure only conditionally in its own range.",
    "evidence": "Proof 1.1 derives scalar conjugacy directly; 2.1-2.2 construct the kernel and density; 3.1 and 4.1 prove summability for every n>=1, alpha>0.",
    "post_sha256": "1aefaf63a0f010bb8d44ab4df5d8ee689d539f254c00b2f2ce7f087be86248b3"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-empirical-bayes-maximizer-bracket-on-polished-tails",
    "action": "record_false_positive",
    "finding": "The opening instruction to use the defined procedure already imports the Borel full-probability domain, endpoint series and supplied Borel maximizing selector; no unconditional measurable-selection assertion is made."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-sparse-gap-sequence-is-hyperrectangular-but-undercovered",
    "action": "record_false_positive",
    "finding": "The instruction to run the procedure in the cited counterexample imports that counterexample's explicit kappa ellipticity condition along with the cap and other model hypotheses."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-adaptive-empirical-bayes-gaussian-sequence-procedure",
    "action": "route_unassigned_frontier_to_owner",
    "locus": "Definition",
    "source_excerpt": "For a true parameter $\\theta_0\\in\\ell^2(\\mathbb N,\\mathbb R)$",
    "affected_use": "The procedure observes and assigns prior coordinates only for i>=1 but types its parameter space as ell^2(N,R), and its data domain as R^N.",
    "invalidated_claim": "No coordinate-zero observation, prior or posterior is supplied, so the literal full-space posterior mean and credible norm are underspecified.",
    "minimality": "Replace the ambient/data index by N_+ throughout this procedure, without changing its model equations, endpoint or selector assumptions; then trace its own changed Definition to direct consumers. This supplier is not assigned here and was not edited."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-polished-tail-class-for-gaussian-sequence",
    "action": "route_unassigned_frontier_to_owner",
    "locus": "Definition",
    "source_excerpt": "$\\theta\\in\\ell^2(\\mathbb N,\\mathbb R)$ such that for every integer",
    "affected_use": "The class explicitly admits an extra coordinate zero, while every polished-tail block, score and subsequent coverage norm calculation starts at one.",
    "invalidated_claim": "The literal class carries a free coordinate zero absent from the model and its proofs.",
    "minimality": "Use the positive-coordinate ambient space consistent with the intended sequence model; retain the exact tail inequality and L_0,N_0,rho restrictions. Trace any Definition change only from this supplier."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-empirical-bayes-radius-bias-and-noise-comparison",
    "action": "route_unassigned_frontier_to_owner",
    "locus": "Statement and F1",
    "source_excerpt": "let $\\theta=(\\theta_i)\\in\\ell^2(\\mathbb N,\\mathbb R)$ be the true sequence.",
    "affected_use": "Its F1 imports the positive-coordinate posterior, but Statement types theta in zero-based ell^2(N,R) and asserts full-space norm comparisons.",
    "invalidated_claim": "The missing zero-coordinate model leaves the full-space bias/noise norm claims undefined on that extra coordinate.",
    "minimality": "Align its ambient index with N_+ after correcting the procedure. All displayed positive-coordinate estimates remain unchanged; this unassigned consumer was not edited."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no_published_update",
    "finding": "The direct consumers of both changed interfaces are draft items in this frozen frontier. No potentially defective published consumer was found, and no published carrier or ledger was edited."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "subject": "ex-unit-temperature-likelihood-update",
    "class": "accuracy",
    "subclass": "missing-map",
    "severity": "nonfatal",
    "location": "statement",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "source_rejection": {
      "id": "ex-unit-temperature-likelihood-update",
      "model": "gpt-6-luna",
      "context_sha256": "0108b859746ad8fe0a99ce52005e7ea4c384dac4f6286b7062d28f67f364db88"
    },
    "reason": "The supplied definition requires a real loss on the full parameter-observation product, but the example originally specified only its y=1 section. This is a nonfatal missing specification: the fixed-observation calculation uses only that already valid section, and every displayed sampling probability is strictly positive. Defining ell(theta,y)=-log P_theta(Y=y) for both observations completes the setup without changing the posterior or argument at y=1.",
    "repair": "Example now defines the negative-log-likelihood loss for both observations, and Verification step 2.1 checks every section against the supplier definition; contract derivation synchronized.",
    "report": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u22.json"
  },
  {
    "ledger": "defect",
    "id": "ex-em-likelihood-has-two-local-maxima",
    "status": "false_positive",
    "reason": "No dependency cycle: the remark has only a contextual forward reference, and the model is verified directly.",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "ex-em-likelihood-has-two-local-maxima",
    "status": "fixed",
    "severity": "nonfatal",
    "locus": "manifest-summary",
    "reason": "Owning batch-24.pages.json summary incorrectly called two tied maximizers strict global maxima; changed to strict local maxima, both tied global maximizers. Item unchanged.",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "ex-gaussian-mixture-likelihood-unbounded-under-covariance-collapse",
    "status": "fixed",
    "severity": "nonfatal",
    "locus": "facts-block",
    "reason": "F2 incorrectly restated a definition as a mixture-construction theorem, while step 1.1 already proved the construction directly. Restated F2 faithfully, added direct Tonelli citation/dependency and explicitly checked its measurability and sigma-finiteness hypotheses.",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "alg-coordinate-ascent-variational-inference",
    "classification": "confirmed_nonfatal",
    "locus": "frontmatter:sources.references[0].locator",
    "status": "fixed",
    "reason": "The theorem is present as a separate same-page result. Independently confirmed the Step-4 presentation finding: the Blei Algorithm 1 locator must include PDF page 7; changed 5–6 to 6–7 with printed 863–864. No mathematical interface change. The same locator was synchronized in the owning batch-25.pages.json entry under the shared-write lock."
  },
  {
    "ledger": "defect",
    "id": "ex-coordinate-update-normalizer-diverges-outside-admissibility",
    "classification": "confirmed_nonfatal",
    "locus": "Verification:Given",
    "status": "fixed",
    "reason": "The local N={1,2,...} notation conflicts with the library zero-inclusive convention. Renamed the explicit set I. The judge mass-2 assertion does not apply to the explicitly positive-index construction; all probability and divergence calculations are unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u26-singular-restriction",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T16:59:56.376649+00:00",
      "class": "accuracy",
      "subclass": "unsupported-inference",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "cex-singular-interior-mode-changes-laplace-rate",
      "batch": "26",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "item_sha256": "6deca00650048144a27e28a7af3fd3e74f948988f634a2baecf0890a9993850c",
      "adjudication_ref": [
        {
          "id": "cex-singular-interior-mode-changes-laplace-rate",
          "model": "gpt-6-luna",
          "context_sha256": "ffaac1e651f1fcee5bb50dfc3ab47367d0737225e239598171354b3a21d7e755",
          "item_sha256": "6deca00650048144a27e28a7af3fd3e74f948988f634a2baecf0890a9993850c"
        }
      ],
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u26.json",
          "note": "The interval restriction in step 2.1 omits the routine additivity and positivity argument. The polynomial witness and divergent subsequence are correct: splitting at +/-1/m leaves nonnegative outer integrals and a central integral at least 2 exp(-1)/m. Added the existing additivity supplier and explicit splitting, including m=1; this immediately fillable gap is nonfatal. Also corrected the assigned counterexample proof heading."
        }
      ],
      "source": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u26.json",
      "rejected_judge_item_sha256": "7daeab790c1764f38cfa98575a268343e590e698c4c1f49771286697e92ec9dc"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u26-gaussian-substitution",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T16:59:56.376649+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "fatal",
      "location": "facts-block",
      "subject": "ex-exact-gaussian-laplace-integral",
      "batch": "26",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "item_sha256": "095287d2fd7d8b4063accff5947ec2425231a4253dc32c9af5511322752e76a3",
      "adjudication_ref": [
        {
          "id": "ex-exact-gaussian-laplace-integral",
          "model": "gpt-6-luna",
          "context_sha256": "c30cd90554fcce42c49a7d63ff063eba06284758cd4f77569811b97d240ac941",
          "item_sha256": "095287d2fd7d8b4063accff5947ec2425231a4253dc32c9af5511322752e76a3"
        }
      ],
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u26.json",
          "note": "F2 inaccurately generalized the cited substitution theorem by deleting local Riemann-integrability of the derivative and integrand and the compact-truncation hypotheses. This is a defective fact/citation, not a false Gaussian value. Restored those hypotheses, added the existing continuity-to-integrability supplier, and checked them for the positive affine inverse substitution. Gaussian convergence transfers separately at both infinite ends without assuming convergence of J_n."
        }
      ],
      "source": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u26.json",
      "rejected_judge_item_sha256": "aec10f04ca7a9d1dd269fabc214e1375f09353ab89ef4f9d0ad56d35202fa120"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u26-counterexample-heading",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T16:59:56.376649+00:00",
      "class": "accuracy",
      "subclass": "other",
      "subclass_note": "Counterexample proof body used Proof rather than the prescribed Counterexample heading.",
      "severity": "polish",
      "location": "proof-step",
      "subject": "cex-singular-interior-mode-changes-laplace-rate",
      "batch": "26",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u26.json",
          "note": "Verified the Step-4 concern against the assigned carrier and SCHEMA.md. Renamed only the proof heading to Counterexample; the witness and refuted claim were preserved."
        }
      ],
      "source": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u26.json"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No supplier Statement/Definition was changed, no published consumer was edited, and this assigned review discovered no new published-consumer defect. Published maintenance therefore has no event from this unit."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "id": "cex-identifiable-model-with-insufficient-abc-summary",
    "outcome": "confirmed_nonfatal",
    "locus": "facts-block",
    "finding": "F6 restated the positive-acceptance rejection theorem without its IID prior-simulator sequence hypothesis; step 3.1 cited that unqualified fact.",
    "resolution": "F6 and step 3.1 now explicitly condition the output-law assertion on IID pairs. The probability-one target calculation and the posterior discrepancy never required repeated proposals.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "id": "cex-identifiable-model-with-insufficient-abc-summary",
    "outcome": "confirmed_nonfatal",
    "locus": "statement",
    "finding": "The counterexample used the heading Statement instead of the prescribed Statement refuted, as reported by the Step-4 digest.",
    "resolution": "Renamed the heading while preserving the complete mathematical statement verbatim.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published item was edited or found defective in this assigned review. The direct item dependency/reference consumer inventory is empty.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-antithetic-randomized-sampling",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "Introduced the sampling probability space and used mathbb P for input events, retaining output law P. The measurable reflected-pair construction and independence across pairs are preserved; no choice assumption is added."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-antithetic-variance-and-monotone-sufficiency",
    "severity": "nonfatal",
    "status": "open",
    "finding": {
      "supplier": "def-antithetic-randomized-sampling",
      "consumer": "thm-antithetic-variance-and-monotone-sufficiency",
      "path": "items/thm-antithetic-variance-and-monotone-sufficiency.md",
      "affected_use": "Statement imports the antithetic setup; F1 imports independent uniform coordinates, T(U_1)~P and pair average. Proof 1.1 writes P(U_1j=s), P(U_1j<=s), P(1-U_1j<=t), P(U_1j>=1-t) and P(U_1j<1-t).",
      "disposition": "frontier_owner_followup",
      "invalidated_claim": "No probabilistic identity changes. The input-event occurrences of P in proof 1.1 retain the same nonfatal type ambiguity and should use the now explicit underlying mathbb P.",
      "minimality": "Replace only input-event P by mathbb P in step 1.1. Keep output law P and the Statement unchanged. Outside assigned write scope; proposed to controller, not edited."
    },
    "route": "frontier owner; outside unit 29 assigned items"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-stratified-monte-carlo-estimator",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "finding": "Required integral |f| dP<infinity and defined Pf. Positive stratum masses imply integral |f| dP_h<=integral |f| dP/p_h<infinity. The partition, allocation and estimator formula are unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-same-sample-control-coefficient-remainder-is-op-one-over-n",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "Defined the plug-in estimator pointwise, restricted F1 use to fixed beta*, and disambiguated sampling probabilities. Fourth moments, fixed dimension, eventual nonsingularity and the product tail bound establish the unchanged O_P(n^-1) conclusion, including the singular fallback. Updated owning contract and manifest mirror."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-same-sample-control-regression-bias",
    "severity": "nonfatal",
    "status": "open",
    "finding": {
      "supplier": "thm-same-sample-control-coefficient-remainder-is-op-one-over-n",
      "consumer": "ex-same-sample-control-regression-bias",
      "path": "items/ex-same-sample-control-regression-bias.md",
      "affected_use": "F1 imports the fitted covariance ratio and zero fallback; F2 attributes the random-coefficient scalar estimator to def-control-variate-estimator; Verification 1.1 substitutes that estimator on the nine ordered pairs.",
      "disposition": "frontier_owner_followup",
      "invalidated_claim": "The finite calculation remains correct: four estimates are 1 and five are 0, giving 4/9 versus target 2/3. However F2 has the same nonfatal fixed-versus-random coefficient misattribution as the assigned pilot example.",
      "minimality": "Retarget F2 to the newly explicit plug-in formula in the same-sample theorem, or state that formula locally and keep the definition citation restricted to fixed coefficients. No Example/Statement change is needed; outside assigned write scope, so controller routes owner repair."
    },
    "route": "frontier owner; outside unit 29 assigned items"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "Direct dependency/reference search in current items/ and library/ found only five draft frontier consumer items for the three changed interfaces. No potentially defective published consumer was found in those examined uses, and no published item or published ledger was edited. The two nonfatal draft findings route to frontier owner work rather than published maintenance."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-independent-pilot-control-variate",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "F2 now states only the fixed-coefficient formula; the random coefficient and conditional assertion use F1. Bounded f,h, E|2V|=1 and independence of sigma(V) from the whole production sigma-algebra verify every pilot-theorem hypothesis. Updated the owning proof contract."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "entry": {
      "defect_id": "bcs62-step5-initial-r1-u3-filtration-horizon",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15",
      "class": "accuracy",
      "subclass": "invalid-inference",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-brownian-ito-integral-l1-maximal-bound",
      "batch": "3",
      "caught_at_stage": "5.1-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u3.json",
          "note": "The original step 1.2 tested F_t for t>T although only the finite-horizon filtration was supplied. Proof step 1.1 now makes a constant extension solely for stopping notation; step 2.1 derives the finite-horizon stopped identity without requiring Brownian motion after T under that extension."
        }
      ],
      "source": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u3.json"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "entry": {
      "defect_id": "bcs62-step5-initial-r1-u3-strict-energy-event",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15",
      "class": "accuracy",
      "subclass": "invalid-inference",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-brownian-ito-integral-l1-maximal-bound",
      "batch": "3",
      "caught_at_stage": "5.1-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u3.json",
          "note": "The original good-lambda claim with Q_T^(1/2)<=delta lambda permitted the stopping energy to hit equality before T. Step 2.1 now uses a strict < event, step 3.1 splits using >= and explains why either tail convention has the same layer-cake integral. The constant is unchanged."
        }
      ],
      "source": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u3.json"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "entry": {
      "defect_id": "bcs62-step5-initial-r1-u3-increment-attribution",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15",
      "class": "accuracy",
      "subclass": "invalid-inference",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "ex-shared-brownian-euler-level-coupling-rates",
      "batch": "3",
      "caught_at_stage": "5.1-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u3.json",
          "note": "Original step 1.2 attributed independence from F_s to F4, whose definition supplies only mutually independent Brownian increments. The repaired sentence attributes the centered normal law of variance 2h to F4 and independence from the coarse interval starting filtration to the explicitly given hypothesis."
        }
      ],
      "source": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u3.json"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "no_change",
    "reason": "Both repairs preserve every original Statement/Definition and the example formulation. No new prerequisite or changed interface exists, and no published-consumer defect was discovered. No published carrier was edited or adjudicated."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u31-ordinary-sequence",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:00:37Z",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "location": "statement",
      "subject": "thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment",
      "caught_at_stage": "4-judge",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "summary": "Original finite IID sampling hypotheses did not license the infinite sequence required by the CLT supplier. Repaired the CLT sequence hypothesis and kept the finite variance assertion choice-free with finite variance suppliers.",
      "source": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u31.json",
      "adjudication_ref": [
        {
          "id": "thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment",
          "model": "gpt-6-luna",
          "context_sha256": "4518aa6a4244aa7e16d6c8a1403365dda1a551982bc04cf6db7d9fcbb85e8bbc",
          "outcome": "confirmed_fatal",
          "report": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u31.json"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u31-ratio-numeric-extension",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:00:37Z",
      "class": "accuracy",
      "subclass": "ill-typed-claim",
      "severity": "fatal",
      "location": "statement",
      "subject": "thm-self-normalized-importance-sampling-ratio-clt-and-consistent-mcse",
      "caught_at_stage": "4-judge",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "summary": "Original CLT expression used an algorithm output that can be a nonnumeric status on a positive-probability zero-weight event. Defined the numerical zero extension for all convergence assertions and aligned the delta-method identification.",
      "source": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u31.json",
      "adjudication_ref": [
        {
          "id": "thm-self-normalized-importance-sampling-ratio-clt-and-consistent-mcse",
          "model": "gpt-6-luna",
          "context_sha256": "206ebce48305f5046d87d88622afd947edf0f43c7523848eb67d41412e514ca6",
          "outcome": "confirmed_fatal",
          "report": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u31.json"
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "none",
    "reason": "No assigned interface change reaches a published consumer, and no potentially defective published supplier or consumer was found. No published maintenance finding is proposed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u33-common-submeasure-rn-citation-scope",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T16:57:44.814880+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-common-submeasure-and-bounded-radon-nikodym-density",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "description": "F2 omits the differentiated measure's finite-exhaustion/variation hypothesis and F3 omits sigma-finiteness of both positive measures. These are genuine nonfatal citation overstatements: rho, sigma and lambda are finite, and every common submeasure theta satisfies theta(E)<=rho(E)<infinity, so all actual RN applications are licensed. Repaired the facts, explicitly verified theta is finite, constructed h and eta before proving maximality, and corrected the AC proof-step locator; the Statement and dependencies are unchanged.",
      "adjudication_ref": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u33.json",
          "id": "lem-common-submeasure-and-bounded-radon-nikodym-density",
          "model": "gpt-6-luna",
          "context_sha256": "fd0e987b3f9dde141e331098ac55a8fce975518ba2f901cc15621179a7e0c9f5"
        }
      ],
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u33.json",
          "note": "Original F2/F3 supplier overstatements confirmed; finite actual inputs satisfy all supplier hypotheses. No fatal inference failure."
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step5-adjudicator.md"
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bayesian-computational-statistics-62-step5-initial-r1-u34-correlated-title",
      "run": "bayesian-computational-statistics-62",
      "subject": "ex-bivariate-normal-gibbs-full-conditionals",
      "class": "accuracy",
      "subclass": "false-or-overstrong-title",
      "severity": "nonfatal",
      "location": "title",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "description": "Confirmed nonfatal title defect: rho=0 is allowed, gives Sigma_0=I_2, and the Gaussian joint density factors as phi(x)phi(y), so the coordinates are independent and have correlation zero. The conditional formulas remain N(0,1) at rho=0 and are valid throughout -1<rho<1; no mathematical claim or proof fails. Removed only the word correlated from the item title and synchronized its owning manifest title.",
      "repair_cost": "inline-fix",
      "adjudication_ref": [
        {
          "id": "ex-bivariate-normal-gibbs-full-conditionals",
          "model": "gpt-6-luna",
          "context_sha256": "3e916b3555d39f90844cbd78c512a49044ebc42091ec480257071d74aed021de",
          "item_sha256": "7043264481010becaf11a1b0cbe873c39a82e0e466962636b0307d8925f1fda3",
          "outcome": "confirmed_nonfatal"
        }
      ],
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u34.json"
        }
      ],
      "prevention": {
        "kind": "process",
        "ref": "Check titles against all permitted parameter values, including zero correlation."
      },
      "at": "2026-10-15T16:56:14.076Z"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "def-petite-set-for-markov-kernel",
    "outcome": "confirmed_fatal",
    "locus": "definition",
    "class": "accuracy",
    "subclass": "ill-typed-claim",
    "status": "fixed",
    "reason": "Explicit endokernel, measurable subset and same-space probability typing supplied.",
    "evidence_report": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u35.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "lem-positive-triple-set-yields-uniform-overlap",
    "outcome": "confirmed_nonfatal",
    "locus": "facts-block",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "status": "fixed",
    "reason": "Finite partitions and tensor generators are now constructed locally rather than attributed to the measurable-space definition.",
    "evidence_report": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u35.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "lem-invariant-law-positive-set-and-almost-sure-hitting",
    "outcome": "confirmed_nonfatal",
    "locus": "facts-block",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "status": "fixed",
    "reason": "Removed nonexistent measurable-selection claim; retained actual path-law and strong Markov Choice hypotheses.",
    "evidence_report": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u35.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "lem-iterated-kernel-density-convolution-bounds",
    "outcome": "confirmed_nonfatal",
    "locus": "proof-step",
    "class": "accuracy",
    "subclass": "citation-missing",
    "status": "fixed",
    "reason": "Parameterized convolution measurability now invokes the declared integration theorem using a lifted kernel.",
    "evidence_report": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u35.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "lem-aperiodic-minorization-times-are-cofinite",
    "outcome": "confirmed_nonfatal",
    "locus": "facts-block",
    "class": "accuracy",
    "subclass": "citation-misattributed",
    "status": "fixed",
    "reason": "Countable generation correctly sourced to phi-irreducibility; countable algebra constructed locally.",
    "evidence_report": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u35.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_false_positive_disposition",
    "id": "ex-null-set-start-fails-total-variation-convergence",
    "outcome": "false_positive",
    "reason": "Under delta_1 every positive-mass set contains 1, so no two disjoint positive-mass classes exist regardless of coverage.",
    "evidence_report": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u35.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "ex-periodic-finite-chain-fails-time-convergence",
    "outcome": "confirmed_fatal",
    "locus": "statement",
    "class": "accuracy",
    "subclass": "missing-hypothesis",
    "status": "fixed",
    "reason": "Specified either fixed initial state; stationary initial law is explicitly exempted by its invariance.",
    "evidence_report": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u35.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "lem-aperiodic-petite-set-with-accessible-small-set-is-small",
    "outcome": "confirmed_fatal",
    "locus": "proof-step",
    "class": "accuracy",
    "subclass": "invalid-inference",
    "status": "fixed",
    "reason": "Added nonempty-H contradiction case and positive-time access for states already in C.",
    "evidence_report": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u35.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "lem-geometric-drift-minorization-reduces-to-bounded-small-set",
    "outcome": "confirmed_fatal",
    "locus": "proof-step",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "status": "fixed",
    "reason": "Two explicit minorizer compositions replace output guarantees absent from the petite and small-set supplier statements.",
    "evidence_report": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u35.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "thm-geometric-ergodicity-under-drift-and-minorization",
    "outcome": "confirmed_fatal",
    "locus": "proof-step",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "status": "fixed",
    "reason": "Integrated uniform fixed-pair event bounds instead of selecting a conditional coupling.",
    "evidence_report": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u35.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "ex-sticky-general-state-chain-is-not-geometrically-ergodic",
    "outcome": "confirmed_nonfatal",
    "locus": "proof-step",
    "class": "accuracy",
    "subclass": "citation-missing",
    "status": "fixed",
    "reason": "Specified the marked refresh kernel and applied the already-declared canonical path-law theorem.",
    "evidence_report": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u35.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "ex-drift-minorization-geometric-ergodicity-on-a-birth-death-chain",
    "outcome": "confirmed_nonfatal",
    "locus": "facts-block",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "status": "fixed",
    "reason": "Choice is now an explicit assumption for invoking the geometric theorem, without attributing a construction to the axiom interface.",
    "evidence_report": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u35.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No potentially defective published consumer was found: both changed interfaces have no published direct dependency or reference consumer. Draft findings remain in this run report."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u36-representative",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:03:04.713249+00:00",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "statement",
      "subject": "lem-square-integrable-markov-transition-conditional-expectation",
      "batch": "36",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "repair_confidence": 1,
      "subclass_note": "Confirmed nonfatal representative ambiguity: the quoted L2 definition makes g an equivalence class, while kernel evaluation requires a representative. Fixed a finite real measurable representative explicitly; invariance gives pi(P1_A)=0 for every pi-null A, proving the evaluations and both kernel integrals are independent of this choice almost surely. The truncation, conditional Jensen, martingale-difference and variance-expansion arguments are valid. Also removed the in-step self-reference and replaced Borel by measurable on the arbitrary state space.",
      "evidence": [
        {
          "path": "items/lem-square-integrable-markov-transition-conditional-expectation.md"
        },
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u36.json"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u36.json",
          "model": "gpt-6-luna",
          "context_sha256": "17c3eb21b219dc266ce51bf7b11f61f2c1b9160afd26c8bc965d1199972a2a6d"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u36-polish-subspace",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:03:04.713249+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "fatal",
      "location": "facts-block",
      "subject": "lem-geometrically-ergodic-chain-has-standard-borel-observation-factor",
      "batch": "36",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "repair_confidence": 1,
      "subclass_note": "Confirmed fatal dependency-citation gap: the definition requires a measurable isomorphism to an entire Polish space, and the cited corollary establishes only G-delta subspaces, not arbitrary Borel subspaces. Repaired without changing the Statement: keep S equal to the closed Cantor space, retain the original kernel on the absorbing full Borel set B, and send every exceptional state directly to pi_c. The envelope and observation are zero off B, giving the all-state bound there; initial and stationary laws are supported on B. For lifting only the real sequence space is needed, which is a countable product of Polish real lines. No arbitrary-Borel-subspace theorem remains in the proof.",
      "evidence": [
        {
          "path": "items/lem-geometrically-ergodic-chain-has-standard-borel-observation-factor.md"
        },
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u36.json"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u36.json",
          "model": "gpt-6-luna",
          "context_sha256": "4b2185813faa27ce14b1a864ff0f0edd3edd7451ca670de7e9c3418d9336a22c"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u36-target-odds",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:03:04.713249+00:00",
      "class": "accuracy",
      "subclass": "invalid-inference",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "lem-heterogeneous-bounded-atom-vector-log-cubed-gaussian-coupling",
      "batch": "36",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "repair_confidence": 1,
      "subclass_note": "Confirmed fatal logic gap in step 8.1: the old Gaussian odd coordinates can depend on the newly generated raw evens, since the root/split transport reads the whole old row. Their independence is not supplied by F7. Repaired by replacing the entire active row by the mixed target, freezing target evens and retaining target Gaussian odds. F7 separates that entire target from the old frozen complement; the target product law separates its own odd and even coordinates. Step 9.1 now defines full intermediate rows and telescopes their differences, including Gaussian-odd changes, against the saved initial Gaussian row. Checked the noncommuting covariance interpolation, positive anchor fraction, explicit terminal posterior, moderate-region concentration, short-row branch and parameterwise measurability; the Statement is unchanged.",
      "evidence": [
        {
          "path": "items/lem-heterogeneous-bounded-atom-vector-log-cubed-gaussian-coupling.md"
        },
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u36.json"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u36.json",
          "model": "gpt-6-luna",
          "context_sha256": "0a4f69d3b6547d45feea059bab4fb02750d84ad7566d7591848f68d327abe978"
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published carriers were repaired or found potentially defective. The representative interface has exactly four direct item consumers, all draft frontier members, and each examined use remains sound; no outside-consumer maintenance event arises."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-b37-step5-r1-tail-fact-interface",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:02:53.228502+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "fatal",
      "location": "facts-block",
      "subject": "lem-real-line-exponential-tail-integrable",
      "batch": "37",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "repair+rejudge",
      "adjudication_ref": [
        {
          "id": "lem-real-line-exponential-tail-integrable",
          "model": "gpt-6-luna",
          "context_sha256": "140d128117148157560c7b28e7c66ebc5e59ca5a35a7d8ad1b1838903915a77a",
          "item_sha256": "1dce3ddb66b759a469b3ccc4a25bb7c93e294e8c0616720e9c8c0a1933e961d1"
        }
      ],
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u37.json",
          "note": "F1 incorrectly assigns continuity of absolute value to exponential and continuous-to-Borel interfaces, none of which states it. The exp(0)=1 objection alone is overstated: positivity and the reciprocal identity at zero imply it algebraically. Repaired F1 to state only its actual suppliers, proved the absolute-value continuity estimate and exp(0)=1 in 1.1, and made Borel-to-Lebesgue conversion, exhaustion and simple-integral evaluation explicit through existing published suppliers. The claim and Countable Choice boundary are unchanged."
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-b37-step5-r1-flow-title-regularity",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:02:53.228502+00:00",
      "class": "accuracy",
      "subclass": "false-or-overstrong-title",
      "severity": "fatal",
      "location": "title",
      "subject": "thm-exact-hamiltonian-flow-preserves-energy-and-volume",
      "batch": "37",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "repair+rejudge",
      "adjudication_ref": [
        {
          "id": "thm-exact-hamiltonian-flow-preserves-energy-and-volume",
          "model": "gpt-6-luna",
          "context_sha256": "083811377141bf355da670c3014702aa172d30daff5b435a619c93d9ae833a8d",
          "item_sha256": "5d332e55760090df1ff6dacbad7644e35e49215c06d69726314b6fb63ffe4aa0"
        }
      ],
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u37.json",
          "note": "The title calls the flow C2 while the Statement correctly assumes only U in C2 and promises a C1 flow. The exact maximal-flow supplier gives joint C1 regularity for F in C1, with C2 only under stronger field regularity. Corrected the title to attach C2 to the potential. No hypothesis, Statement, proof or consumer interface changed."
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-b37-step5-r1-leapfrog-map-citation",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:02:53.228502+00:00",
      "class": "accuracy",
      "subclass": "citation-missing",
      "severity": "fatal",
      "location": "facts-block",
      "subject": "ex-hmc-finite-step-energy-error",
      "batch": "37",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "repair+rejudge",
      "adjudication_ref": [
        {
          "id": "ex-hmc-finite-step-energy-error",
          "model": "gpt-6-luna",
          "context_sha256": "1755de13c276910f334166a1280a7a1fb8b070e14d67559137f52ffa69736445",
          "item_sha256": "664f0b370c79ae44d99620cbdb2e83a6010ca85adf24683f702e57e2a46d7cc4"
        }
      ],
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u37.json",
          "note": "F1 attributes the actual half-kick/drift/half-kick instructions to def-hamiltonian-monte-carlo, whose Definition delegates those instructions to def-leapfrog-step-map. The latter is already in deps but was absent from the fact and contract citations. Added the direct defining-map citation, retaining the HMC citation for acceptance, and spelled out the elementary exp(0)=1 consequence of the existing positive reciprocal identity. The computed endpoint (1,-1/2), energy rise 1/8 and acceptance exp(-1/8) are correct."
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record",
    "reason": "Reviewed published suppliers only as context. No published item was changed or found defective, and no Statement/Definition interface changed. Thus this unit creates no published-consumer repair, rejudge or gate obligation. The separate Step-4 concern about the unassigned draft HMC algorithm remains an owner route, not a published-item finding.",
    "items": [
      "lem-real-line-exponential-tail-integrable",
      "thm-exact-hamiltonian-flow-preserves-energy-and-volume",
      "ex-hmc-finite-step-energy-error"
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u38-pinsker-unused-integral-fact",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:04:12.639552+00:00",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-weighted-pinsker-inequality-for-probability-laws",
      "batch": "38",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u38.json",
          "note": "The cited interfaces give log derivative 1/z and log(1)=0 but do not directly supply the integral definition asserted in F4. This unused extra assertion is a nonfatal citation defect: both scalar cases follow from those derivative facts and the cited mean value theorem. Replaced F4 with exactly the derivative and normalization; checked g second derivative 4 log(t)+2/t and the weighted Cauchy–Schwarz factors and finite-entropy identity. Statement unchanged."
        }
      ],
      "source": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u38.json"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u38-ula-normalizer-applicability",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:04:12.639552+00:00",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "lem-ula-fixed-step-gaussian-kernel-exponential-drift",
      "batch": "38",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u38.json",
          "note": "F4 invokes lem-langevin-gaussian-proposal-kernel, which inherits 0<integral exp(-U)<infinity from the ULA algorithm, without establishing that hypothesis. This is an applicability gap in the cited dependency, not a false drift estimate. Added step 1.4: coercivity gives U>=c r^alpha-a_alpha and r^alpha>=r-1, so exp(-U) is bounded by a constant times the product of exp(-c|x_i-x_star_i|/sqrt(d)); translation/scaling, Tonelli and the existing real-line tail lemma give finiteness. Smoothness gives U<=L r^2/2 and hence a positive Gaussian lower integral. Checked the square-completion coefficient -gamma|grad U|^2/4, positive K_gamma, and both radius regions; Statement unchanged."
        }
      ],
      "source": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u38.json"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No published carrier was changed and no potentially defective published mathematical use was found in the prerequisites examined. The assigned repairs preserve every Statement; no published-consumer maintenance event is triggered."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "subject": "def-functional-specific-effective-sample-size",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "statement",
    "reason": "The scalar stationary process already determines variance, autocorrelations and n/tau, but the asserted representation Y_n=h(X_n) leaves h and X unbound. Introduced given E-valued random elements and a measurable h, retaining stationarity only for Y=h(X), and made the positive integer draw count explicit. This repairs binding without changing the ESS formula or asserting a CLT.",
    "evidence": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u40.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "subject": "def-standard-cauchy-law",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "facts-block",
    "reason": "F1 cited only the restricted-set-function definition for the measure-space property used in step 1.1. The complete-measure theorem is already available transitively through the listed Borel inclusion and Riemann/Lebesgue identification theorems, so the rejection overstates a missing mathematical foundation. Added its direct dependency and explicit F1 citation, plus the matching contract and manifest, to supply that exact premise under the already assumed Countable Choice.",
    "evidence": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u40.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published consumer of the changed functional ESS Definition was found in the direct dependency/reference inventory. The reviewed local normal-law assumption and complete Lebesgue measure theorem are sound for these uses. No published mathematical defect or repair is claimed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "id": "ex-scalar-gaussian-state-space-filter",
    "locus": "proof-step",
    "location": "Verification step 3.1",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "Step 3.1 identified a convolution as the predictive density without citing a theorem permitting reversal of the initial-state and Lebesgue integrals. F8 supplies only ordered iterated kernel integrals; F14 supplies measurability, not interchange. This is a missing dependency citation for a load-bearing inference. Added the existing published Tonelli theorem as F16 and a direct dependency, and proved the event-probability identity on every Borel B using its nonnegative product-measurable integrand and the sigma-finite restricted Lebesgue measures established in step 1.1.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-smc-multinomial-ancestry-collapse",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "statement",
    "status": "fixed",
    "reason": "The per-call resampling algorithm specifies independence of the two child indices conditional only on the weights, which are constant here; it does not constrain coupling across calls. Reusing a single fair IID index pair gives probability 1/2 of survival at every m, contradicting 2^{-m}. The Example and Given now explicitly prescribe independent pairs across calls, and step 2.1 gives conditional survival probability 1/2 given the full past; absorption and induction then yield 1-2^{-m}."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-smc-multinomial-fixed-horizon-clt",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "locus": "facts-block",
    "status": "fixed",
    "reason": "The original F3 drops the resampling lemma's empirical-law premise, so steps 2.1 and 2.2 cite an incomplete version of the supplier. The already proved finite-horizon empirical-law lemma applies directly to the identical SIR flow and multinomial selections, with no extra hypotheses. It is now a dependency and F5; step 1.1 establishes its conclusions before the CLT induction. Psi supplies target L2, centered weighted proposal moments and recursive selected-test membership; the base ratio CLT, selection CLT and scalar projections then prove the unchanged vector statement, including zero-variance projections."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-smc-residual-fixed-horizon-clt-away-from-integer-weights",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "locus": "proof-step",
    "status": "fixed",
    "reason": "Steps 2.1 and 2.2 originally invoked residual selection without proving the proposal empirical-law premise stated in F3 and its supplier. The existing finite-horizon empirical-law lemma covers residual SIR under exactly this flow; it is now a dependency and F5, applied at every s in step 1.1. Recursive Psi moments and the preceding selected CLT license mutation/correction; F5, target L2 and the timewise residual-weight branch license selection. Unit weights at time zero are exactly deterministic; at later times the residual supplier excludes earlier zero-weight fallbacks of vanishing probability. Scalar projection and Cramer-Wold complete the unchanged vector claim."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-smc-bounded-weights-with-mixing",
    "outcome": "false_positive",
    "status": "no-defect",
    "reason": "The rejection confuses V_t, defined as weighted-estimator covariance, with post-selection covariance widehat V_t. For the centered last-state indicator h, k_t h=0 and Var_{k_t}(h)=1/4 pointwise, so the mutation recursion gives V_t=widehat V_{t-1}(0)+1/4=1/4 (and V_0=1/4). Multinomial selection subsequently adds target variance 1/4, giving widehat V_t=1/2, not V_t=1/2. Thus mutation noise is included in the terminal contribution and the original exact value is correct. Identical rows satisfy C=1, all earlier centered images vanish, A=B=1 and rho=0 give the stated bound V_t<=1. The Example, contract and owning page consistently use V_t."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No published carrier was edited and no potentially defective published consumer was found in the assigned mathematical review. No Statement/Definition changed, so this unit has no supplier-interface event requiring published-consumer maintenance."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "bayesian-computational-statistics-62-step5-initial-r1-u46-1",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:03:26.762Z",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-conditionally-linear-gaussian-state-space-model",
      "caught_at_stage": "5a-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "repair+rejudge",
      "subclass_note": "The cited deterministic linear-Gaussian definition requires d_t and p_t to be positive integers. The assigned Definition did not exclude zero dimensions, so its assertion that every frozen path meets those hypotheses was unsupported. Added exactly those dimension requirements; singular state and process covariances remain allowed.",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u46.json",
          "anchor": "def-conditionally-linear-gaussian-state-space-model"
        }
      ],
      "item_sha256": "0340a083b36618d9cf717f304688fbca06076777f66d7187ba44c216fc2e76b8"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "bayesian-computational-statistics-62-step5-initial-r1-u46-2",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:03:26.763Z",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "location": "statement",
      "subject": "thm-fixed-lag-smoother-targets-truncated-conditional-law",
      "caught_at_stage": "5a-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "repair+rejudge",
      "subclass_note": "The unqualified target t allowed t=T+1, while s=min(t+L,T)=T then yields a path with no time-t coordinate. Made the algorithm domain explicit: integer lag L>=0 and t in {0,...,T}. The proof now checks t<=s<=T before taking the coordinate projection.",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u46.json",
          "anchor": "thm-fixed-lag-smoother-targets-truncated-conditional-law"
        }
      ],
      "item_sha256": "19e616d5756b74a7cfa4daf128e376e43b17ef0504fc738c9f1b81a5d82ade5c"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "bayesian-computational-statistics-62-step5-initial-r1-u46-3",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:03:26.763Z",
      "class": "accuracy",
      "subclass": "ill-typed-claim",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "ex-fixed-lag-smoothing-bias-from-delayed-information",
      "caught_at_stage": "5a-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "repair+rejudge",
      "subclass_note": "F1 defines a smoothing law on the whole state path, so the claimed full smoothing law delta_b had the wrong state space and could not be compared directly to Bernoulli(1/2) on X_0. The full path law is delta_(b,b,b); its time-0 marginal is delta_b. Corrected the Example and verification to compare time-0 marginals throughout.",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u46.json",
          "anchor": "ex-fixed-lag-smoothing-bias-from-delayed-information"
        }
      ],
      "item_sha256": "7ae3dd96780c5903e154353cbae430118cfc0c040aec25d1b437a34de6d235a0"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "bayesian-computational-statistics-62-step5-initial-r1-u46-contract-boundary",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:03:26.763Z",
      "class": "accuracy",
      "subclass": "false-boundary-disposition",
      "severity": "nonfatal",
      "location": "contract-row",
      "subject": "thm-fixed-lag-smoother-targets-truncated-conditional-law",
      "caught_at_stage": "5a-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "subclass_note": "The zero boundary entry claims the Statement excludes zero-evidence histories via a finite-positive conditional-law domain. The Statement actually selects histories where the supplied factorization holds at every prefix; the exact-kernel theorem does not itself require an evidence density. Replace the entry with this actual full-measure-set convention.",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u46.json",
          "anchor": "contract-boundary"
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "no_change",
    "reason": "No potentially defective published consumers were found. The published deterministic linear-Gaussian definition was consulted for its explicit positive dimension requirements; this bounded interface comparison makes no whole-item publication audit or repair claim."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "alg-particle-gibbs-backward-simulation",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "finding": "The original zero-ratio abort rejects valid free particles with positive probability; exact T=0 enumeration gives mixed-cloud mass 1/4 instead of target 1/2. Both abort clauses, owning manifest, and boundary evidence repaired."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-particle-gibbs-backward-simulation-sweep-is-gibbs",
    "status": "owner_repair_required",
    "finding": "Unassigned frontier consumer: step 1.1 divides by a zero alternative-parent transition density on the positive-mass T=1 identity-transition configuration in downstream_reviews. Repair with a cross-multiplied identity and zero-mass branches; preserve Statement."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-pmmh-exact-invariance",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "F3 credited a definition with probability-kernel validity already proved by F4. Facts and step 2.2 now attribute this property to F4, with contract derivation/citation uses synchronized; Statement unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose",
    "subject": "lem-near-iid-exchangeable-arrays-have-convergent-means",
    "severity": "nonfatal",
    "location": "frontmatter",
    "disposition": "fixed",
    "reason": "The title unnecessarily describes the reference row as iid, whereas the stated result correctly permits a common square-integrable law with pairwise zero covariances. Joint exchangeability transfers the L2 coupling bound to every coordinate. Holder bounds the difference of pairwise covariances by quantities tending to zero, and the exchangeable-mean variance is Var(X_1)/N+(1-1/N)Cov(X_1,X_2). Together with convergence of the means this proves the stated L2 conclusion without independence. Corrected only the title to describe uncorrelated reference rows; the Statement and proof remain unchanged.",
    "evidence": [
      {
        "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u48.json",
        "anchor": "decisions[0]"
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose",
    "subject": "alg-three-dimensional-variational-assimilation",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "location": "statement",
    "disposition": "fixed",
    "reason": "The Definition omitted the positive-dimension admissibility condition even though its empty-boundary contract says d,p>=1, def-data-assimilation-problem uses positive state/observation dimensions, and its well-definedness theorem assumes d,p>=1. Taken literally at p=0 its Cholesky call is outside the supplier Statement n>=1. Added only the explicit integers d,p>=1 convention already required by those interfaces; no formula, output or intended positive-dimensional claim was weakened. For p>=1, S is symmetric positive definite and both triangular systems are uniquely solvable, yielding S K^T=HB and the stated gain.",
    "evidence": [
      {
        "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u48.json",
        "anchor": "decisions[1]"
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route-to-frontier-owner",
    "subject": "lem-near-iid-exchangeable-arrays-have-convergent-sample-covariances",
    "severity": "nonfatal",
    "location": "facts-block",
    "disposition": "repair-pending",
    "reason": "Confirmed the batch-48 Step-4 digest concern: F1 says exchangeable rows are pairwise uncorrelated and close in L2 to a common row. The supplier actually requires joint exchangeability of paired rows, a common fixed square-integrable reference law, pairwise uncorrelated reference variables and L2 convergence of the paired difference. This is an inaccurate supplier restatement, not a failure of proof steps 1.1-2.1: those use iid coordinate/reference-product rows with finite second moments and the stated L4 coupling, which meet the actual lemma. This unassigned frontier item was read without editing; the owner should replace only F1 with the accurate paired-row hypothesis, leaving Statement and proof unchanged.",
    "affected_use": "items/lem-near-iid-exchangeable-arrays-have-convergent-sample-covariances.md F1 and proof steps 1.1-2.1.",
    "invalidated_claim": "Only the F1 restatement is defective; the covariance convergence claim remains supported by the actual mean supplier.",
    "minimality": "Replace F1 by the exact joint-exchangeability/common-reference-law/L2-coupling hypotheses; no change to the covariance Statement or proof is needed.",
    "evidence": [
      {
        "path": "research/bayesian-computational-statistics-62-batch-48-step5-context.json",
        "anchor": "concerns[0]"
      },
      {
        "path": "items/lem-near-iid-exchangeable-arrays-have-convergent-sample-covariances.md",
        "anchor": "Facts & Assumptions, F1"
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "id": "def-abc-augmented-tolerance-target",
    "run": "bayesian-computational-statistics-62",
    "phase": "initial",
    "round": 1,
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The marginal lemma does not supply the advertised well-definedness discharge, so justified_by is inaccurate metadata. The definition itself is sound: its formula is H(C intersect (Theta x A_epsilon))/Z_epsilon, a normalized measurable-event restriction of the supplied probability H when Z_epsilon>0. The lemma depends on the definition as SCHEMA permits for discharges; this is not a circular deps argument. Removed only the unsupported justified_by entry; Definition and marginal reference are unchanged.",
    "post_sha256": "67f16f4ae5d1dc39df9fcc9a8b3a6ecba6ac822901e895d853c75c2b34a2fd84",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "id": "ex-abc-vanishing-acceptance",
    "run": "bayesian-computational-statistics-62",
    "phase": "initial",
    "round": 1,
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "For any fixed admissible x0 the vertical line {x0} x X is null for both atomless flows. Valid density representatives can therefore set f=1,g=0 there and make acceptance zero (or f=0,g=1 and make it one). Equality of flows does not license the original pointwise conclusion. The repair explicitly chooses f=h(x)/(h(x)+h(y)), g=h(y)/(h(x)+h(y)), with f=g=1/2 where both indicators vanish. These represent the flow densities, and h(x)=1 then gives alpha(x,y)=h(y), so acceptance is min(2 epsilon,1) at every admissible start.",
    "post_sha256": "a7b716628a8a3c9d123110f78a0dd5e22dd8d5196a616365e00f56f9aadc806a",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "id": "ex-abc-sequential-tolerance-schedule-and-rn-weights",
    "run": "bayesian-computational-statistics-62",
    "phase": "initial",
    "round": 1,
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F3 incorrectly called the expected unnormalized weighted law the normalized tolerance target. Their masses here are 7/8 and 1, respectively. The worked proof already computes gamma_1 parameter masses 1/2 and 3/8 and correctly normalizes them to 4/7 and 3/7; hence this is a nonfatal citation misstatement, not a failed numerical conclusion. F3 now states the conditional unnormalized-law identity and explicitly divides by Z_epsilon_t, preserving the finite-N caveat. Both proposal probabilities are positive, so domination holds for every previous population; the conditioned (0,0) population occurs with probability 1/4.",
    "post_sha256": "583a17c4c7bf729025365d0450b19787c42ea4b572f18c382155073cae35c460",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No Statement or Definition changed, so no supplier-interface consumer maintenance is triggered. The published joint-law supplier was read and its probability and iterated-integration argument checked; no defect was found. No published items were edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "entry": {
      "defect_id": "bcs62-step5-initial-r1-u50-f3-attribution",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:01:47.261899+00:00",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "ex-delete-d-and-subsampling",
      "caught_at_stage": "5-judge",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "50",
      "source": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u50.json",
      "note": "F3 inaccurately attributed a deterministic-tuple definition to a supplier defining sample means of random-variable sequences. This is nonfatal: Given already defines T_m explicitly, and direct arithmetic gives complement means 11/2,9/2,3,4,5/2,3/2 and average 7/2. F3 now quotes the actual random-variable identity and explicitly derives its pointwise tuple form; no missing theorem or changed claim is involved."
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "The published sample-mean definition is sound at the inspected interface; the inaccurate extension was in the assigned draft F3. No published carrier or interface changed and no potentially defective published consumer was discovered."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-or-merge-same-defect",
    "entry": {
      "defect_id": "bcs62-step5-initial-r1-u51-bootstrap-title",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:04:38.790243+00:00",
      "class": "accuracy",
      "subclass": "false-or-overstrong-title",
      "severity": "nonfatal",
      "location": "title",
      "subject": "def-iid-empirical-bootstrap-sample",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "51",
      "item_sha256": "05c1b408d854f48eddb26a1d196080b64daaa87be3a8f0030a24e6e8ab3b2299",
      "adjudication_ref": [
        {
          "id": "def-iid-empirical-bootstrap-sample",
          "model": "gpt-6-luna",
          "context_sha256": "07135367320b783cec6665d97b1804c6ad7216d220995fc908091925c8e37571",
          "outcome": "confirmed_nonfatal"
        }
      ],
      "evidence": "The Borel hypothesis permits discontinuous g, for example the indicator of [0,infinity). The title's smooth adjective is therefore misleading, although the finite-index definition and all its formulas are sound. Removed only that adjective; no Definition change or added smoothness restriction.",
      "repair": "Removed smooth from the title; Definition unchanged.",
      "post_sha256": "c83351f35811f5d886357fe24ff2278642290260865fb7e350135f18d93cd792",
      "source": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u51.json"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-or-merge-same-defect",
    "entry": {
      "defect_id": "bcs62-step5-initial-r1-u51-conditional-rescaling",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:04:38.790311+00:00",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "thm-conditional-iid-bootstrap-clt-for-empirical-law",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "51",
      "item_sha256": "35408fb9008a64b141df8acff96392bf1b8a65294627a6db849882cf5a1af255",
      "adjudication_ref": [
        {
          "id": "thm-conditional-iid-bootstrap-clt-for-empirical-law",
          "model": "gpt-6-luna",
          "context_sha256": "329521452140d2683a71a0ae4258839879f7adfe8763744d36f83c5331921ba8",
          "outcome": "confirmed_nonfatal"
        }
      ],
      "evidence": "The cited Slutsky Statement requires both sequences on one probability space; the conditional bootstrap rows are on varying finite spaces. This is a short elementary gap, not a false CLT or a missing substantial prerequisite: for normalized CDF H_j, squeeze H_j(x/s_j) between H_j(x/sigma-h) and H_j(x/sigma+h), then use s_j->sigma>0 and continuity of Phi. Added that full argument in step 5.1, replaced F6 by the CDF definition, and removed the unused Slutsky dependency.",
      "repair": "Replaced the common-space Slutsky invocation by an explicit conditional CDF squeeze, synchronized F6/contract/manifest, and preserved the Statement.",
      "post_sha256": "ca80f9fe5af6e4c7977371fa0dd022bad58a45b2dd5e6448c2daed39b22e9fa9",
      "source": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u51.json"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "reason": "No published supplier is defective: the Slutsky theorem correctly states its common-space hypothesis; the assigned draft misapplied it. Both assigned interfaces are unchanged and no published-consumer maintenance event is triggered.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u52-cdf-supremum-measurability",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "location": "statement",
      "subject": "lem-pointwise-cdf-convergence-to-a-continuous-law-is-uniform",
      "caught_at_stage": "4-judge",
      "caught_by_role": "reader",
      "disposition": "fixed",
      "subclass_note": "On Borel [0,1] with Lebesgue probability, let A be a non-Borel subset of a Borel null Cantor set N and F the uniform [2,3] CDF. The diagonal perturbation G_n(x)(omega)=F(x)+1{omega in A and x=omega} has measurable fixed-x evaluations and CDF paths outside N, with pointwise convergence in probability, but its raw supremum error is the nonmeasurable 1_A. The conclusion was undefined. Repaired by specifying everywhere-CDF paths and a measurable-null-set replacement convention, retaining the almost-sure input case through versions.",
      "adjudication_ref": [
        {
          "ledger": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u52.json",
          "model": "gpt-6-luna",
          "context_sha256": "fe03c7b77c5a0ef12fb37b95ad13b6e04c1927106197ec22ce57337b97c6ec19"
        }
      ],
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u52.json",
          "anchor": "decisions[0]"
        }
      ]
    },
    "reason": "Confirmed and repaired fatal measurability defect; keep both the original Step-4 digest concern and exact rejected tuple as historical evidence. This proposal records a local repair, not independent acceptance."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u52-quantile-coverage-measurability",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "location": "statement",
      "subject": "lem-uniform-cdf-order-and-quantile-coverage",
      "caught_at_stage": "4-judge",
      "caught_by_role": "reader",
      "disposition": "fixed",
      "subclass_note": "On Borel [0,1] with Lebesgue probability, take non-Borel A inside a Borel null Cantor set, X=3/2, F its point-mass CDF, and Ghat(x)(omega)=F(x)+1{omega in A and x=omega}. Every fixed-x evaluation is measurable and the paths are CDFs outside the null set. With epsilon=2 and delta=0 the error hypothesis is the whole space, but q_Ghat(1/2) equals omega on A and 3/2 otherwise. For alpha_1=0 and alpha_2=1/2, coverage is the nonmeasurable complement of A. Repaired with everywhere-CDF versions and explicit exceptional-set handling before any quantile, supremum or probability is formed.",
      "adjudication_ref": [
        {
          "ledger": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u52.json",
          "model": "gpt-6-luna",
          "context_sha256": "2d2cd00e385b20e49b33fae3ad1a83ecca1c3c700bea51293fe001e21ab49798"
        }
      ],
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u52.json",
          "anchor": "decisions[1]"
        }
      ]
    },
    "reason": "Confirmed and repaired fatal measurability defect; keep both the original Step-4 digest concern and exact rejected tuple as historical evidence. This proposal records a local repair, not independent acceptance."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "rows": [
      {
        "defect_id": "bcs62-b53-step5-initial-r1-mbb-intact",
        "run": "bayesian-computational-statistics-62",
        "at": "2026-10-16",
        "batch": "53",
        "class": "accuracy",
        "subclass": "false-or-overstrong-statement",
        "severity": "fatal",
        "location": "definition",
        "subject": "alg-moving-block-bootstrap",
        "caught_at_stage": "5-adjudicate",
        "caught_by_role": "group-alpha",
        "disposition": "fixed",
        "repair_cost": "repair+rejudge",
        "subclass_note": "For n=3 and b=2 the procedure retains a complete selected pair followed by only the first record of a second pair. The original assertion that every selected length-b group is resampled intact is false and cannot establish compatibility for a design declaring those pairs indivisible. Replaced that assertion with complete time-record units, explicit final-prefix retention, and the exact no-split condition for target-specific unit compatibility; the output law, block order and conditional center are preserved.",
        "adjudication_ref": [
          {
            "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u53.json",
            "anchor": "decisions:alg-moving-block-bootstrap"
          }
        ],
        "evidence": [
          {
            "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u53.json",
            "anchor": "decisions:alg-moving-block-bootstrap"
          },
          {
            "path": "items/alg-moving-block-bootstrap.md",
            "anchor": "Definition"
          }
        ]
      },
      {
        "defect_id": "bcs62-b53-step5-initial-r1-ar1-gaussian-moment-fp",
        "run": "bayesian-computational-statistics-62",
        "at": "2026-10-16",
        "batch": "53",
        "class": "accuracy",
        "subclass": "citation-inflated",
        "severity": "fatal",
        "location": "facts-block",
        "subject": "cex-pointwise-bootstrap-ar1-variance-mismatch",
        "caught_at_stage": "5-adjudicate",
        "caught_by_role": "group-alpha",
        "disposition": "false-positive",
        "repair_cost": "none",
        "subclass_note": "The supplier Statement assumes only that a real random variable written X_t-X_s has law N(0,|t-s|); it imposes no Brownian-process hypothesis. It explicitly states E|Z|^(2m)=(2m-1)!! for Z~N(0,1), proved by truncated density integration and integration by parts in steps 1.1-2.1. The already cited normal-law definition represents N(0,v) as the law of sqrt(v) Z, so scaling yields E X_0^4=3v^2. Alternatively take s=0, t=v, Y_0=0, Y_v=X_0 in the supplier. The AR(1) law was established in step 2.1; no construction as a Brownian increment is needed.",
        "adjudication_ref": [
          {
            "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u53.json",
            "anchor": "decisions:cex-pointwise-bootstrap-ar1-variance-mismatch"
          }
        ],
        "evidence": [
          {
            "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u53.json",
            "anchor": "decisions:cex-pointwise-bootstrap-ar1-variance-mismatch"
          },
          {
            "path": "items/cex-pointwise-bootstrap-ar1-variance-mismatch.md",
            "anchor": "Facts & Assumptions F5; Counterexample 2.1"
          }
        ]
      }
    ]
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published consumer of the changed moving-block Definition was found in the complete current direct dependency/reference inventory. The published Gaussian even-moment lemma was read in full and is sound for the assigned AR(1) use; its hypotheses do not require a Brownian process. No published item was edited or newly audited."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u54-finite-specialization",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-16",
      "batch": "54",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-measurable-finite-group-permutation-setup",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "item_sha256": "51ff0b98c1b60c4fbfccd8fe70f91bcfc1d8ec578a66c1271d65a7c77a11fc76",
      "adjudication_ref": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u54.json",
          "id": "def-measurable-finite-group-permutation-setup",
          "model": "gpt-6-luna",
          "context_sha256": "3440e11c017ccc9de0a1c472f0c937125671db2c4e6edca8c78bcc4ebf48cd03"
        }
      ],
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u54.json",
          "anchor": "decisions[0]",
          "note": "The universal finite-space specialization is false: take the swap action on {0,1}, T(x)=x and a single null law with masses 3/4 and 1/4. All measurability and action premises hold, but the published def-finite-group-randomization-test requires invariant null laws, which this law fails on {0}. Added the missing invariant-null qualification only to the specialization sentence; the general setup still permits noninvariant laws."
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "none",
    "reason": "No published defect or outside consumer was found. All seven direct consumers are draft frontier items; the published finite-group definition is correct. Draft-only findings stay in this run report and the defect ledger."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose_append",
    "id": "bcs62-step5-initial-r1-u55-1",
    "item": "lem-hypergeometric-binomial-contiguity-for-permutation-samples",
    "severity": "nonfatal",
    "locus": "facts-block",
    "subclass": "citation-inaccurate",
    "status": "fixed",
    "reason": "Confirmed a nonfatal attribution error: the IID definition supplies terminology, not a binomial representation. The existing F5 product-measure theorem already constructs independent Bernoulli coordinates. Step 1.2 now derives their binomial mass by counting binary vectors, and F3 accurately states only the IID convention. Checked variance, Lindeberg normalization, entropy second derivative -1/[p_N q_N N(1-s_N)], uniform Stirling remainder, mean-one likelihood-ratio limit, uniform integrability and the stated direction of contiguity; the Statement is unchanged.",
    "post_sha256": "27f1c16fdcc177804dff97e501215829244561cd948b5a8a73649c4620fd9e6e",
    "evidence": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u55.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose_append",
    "id": "bcs62-step5-initial-r1-u55-2",
    "item": "lem-permutation-mixture-coupling-for-two-sample-u-statistics",
    "severity": "nonfatal",
    "locus": "facts-block",
    "subclass": "citation-inaccurate",
    "status": "fixed",
    "reason": "Confirmed a nonfatal attribution error in F5 (and the similar F2 wording): definitions give independence/IID terminology, whereas F6 already supplies the finite product construction. F2/F5 now say this accurately; step 1.1 explicitly includes independent label, fresh-P, fresh-Q and permutation factors and fixes value-independent alignment. Conditional coordinate-pair independence, D=|B_N-m| with ED^2<=N/4, antisymmetric permutation centering, the O(N^(2r-1)) and O(D N^(2r-2)) term counts, and the supplier variance bound give E[m f^2]=O(N^(-1/2)). No null or mixed-assignment centering is needed. Statement unchanged.",
    "post_sha256": "169ef487b44c53a6ffa2227a385f244e87544ffda2b6f11d29c3d9fdceada8a3",
    "evidence": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u55.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose_append",
    "id": "bcs62-step5-initial-r1-u55-3",
    "item": "lem-pooled-mixture-projection-and-variance",
    "severity": "fatal",
    "locus": "statement",
    "subclass": "missing-hypothesis",
    "status": "fixed",
    "reason": "Confirmed a fatal missing sample-total relation: the referenced setup defines m,n but never N. For r=1, h(x;y)=x-y, P=Q=Bernoulli(1/2), and even N with m=N/2,n=N, the written hypotheses give p_N=1/2 and sigma_t^2=1/4, yet the displayed left limit is 3/8 rather than 1/2. Added N=m+n exactly where the asymptotic scale is asserted, preserving all pooled projection conclusions. Checked the finite mixed-law expansion, common (P+Q)-null-set section versions, square-integrable cross terms, opposite projections and polynomial variance continuity. Also explicitly cited and declared the already used Fubini theorem for the mixed-section argument, with its integrability hypothesis checked by Cauchy-Schwarz; contract and manifest mirrors were reconciled under the shared-write lock. Step 2.1 now correctly holds the first coordinate fixed and integrates the other coordinates.",
    "post_sha256": "92bb16854a0be2f01dfdb88f50be9f9bc56a37eb977d9db16fb8f469919031e0",
    "evidence": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u55.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose_append",
    "id": "bcs62-step5-initial-r1-u55-4",
    "item": "def-studentized-two-sample-u-statistic",
    "severity": "fatal",
    "locus": "remarks",
    "subclass": "false-or-overstrong-statement",
    "status": "fixed",
    "reason": "Confirmed a fatal false unconditional assertion in Remarks, not a defect in the studentizer Definition. For r=1, h(x;y)=x-y, m=n=k, P uniform on {0,2} and Q uniform on {-1,1}, both variances are 1 but the parameter is 1. Consistent sample-variance estimates give V_SE~sqrt(2/k) and U->1, so S->+infinity in probability. Replaced the unconditional standard-normal sentence with a precise qualification to the null, nondegeneracy and variance-consistency hypotheses of the corresponding limit theorem; the later validity theorem explicitly supplies these hypotheses. Checked the finite nonnegative standard error, zero-denominator branch, recomputation on all permutations, and exact identity S=sqrt(m) U/V_CR. The Definition section is byte-for-byte unchanged; no consumer propagation is triggered.",
    "post_sha256": "4c80a71951d679065a51d159a30ca344ae87e5c603f36370e9e708c7f4cfdf86",
    "evidence": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u55.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "no_change",
    "reason": "The sole supplier Statement change adds N=m+n to the pooled variance-scale limit. All three current direct item consumers are draft frontier items and remain sound for the exact uses recorded below; no published or outside consumer was found. No published repair or audit status is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u57-dot-rounded-products",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "ex-dot-product-roundoff-and-conditioning",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "item_sha256": "c060056d617c764e778c9ef4e815ffad153e05894cfb4073cbadfcca2dc2dc7e",
      "subclass_note": "F1 did not explicitly distinguish exact from rounded products required by its supplier. All concrete products are exact and normal by steps 1.1-1.2, so the bound application was already valid. F1 now explicitly includes both, with n>=1.",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u57.json",
          "anchor": "ex-dot-product-roundoff-and-conditioning"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u57-euler-mvt-interval",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "ex-euler-discretization-bias-and-path-variance",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "item_sha256": "fa65e48ba801222a15853ef23dc3a36369b2bc363d898f6720103ca354b00d81",
      "subclass_note": "F4 omitted a<b, making the existential MVT restatement false at a=b. Both actual uses have a=0<b=1 with endpoint continuity. Inserted the strict interval hypothesis without changing the endpoint, target or variance claims.",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u57.json",
          "anchor": "ex-euler-discretization-bias-and-path-variance"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u57-euler-exp-inverse",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-16",
      "class": "accuracy",
      "subclass": "unsupported-inference",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "ex-euler-discretization-bias-and-path-variance",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "item_sha256": "fa65e48ba801222a15853ef23dc3a36369b2bc363d898f6720103ca354b00d81",
      "subclass_note": "Verification 1.1 recovered x(1)=e X0 from exp(-1)x(1)=X0 without establishing exp(-1)e=1. Reusing the displayed derivative-zero calculation for exp(-t)exp(t), MVT on [0,1], and exp(0)=1 proves the identity from existing facts. This elementary gap is nonfatal and fully repaired.",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u57.json",
          "anchor": "ex-euler-discretization-bias-and-path-variance"
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "none",
    "reason": "No published-item mathematical defect or changed supplier interface was found in this assigned draft-only review; no published maintenance entry is proposed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose",
    "run": "bayesian-computational-statistics-62",
    "batch": "58",
    "item": "ex-mlmc-discontinuous-payoff-half-rate",
    "severity": "fatal",
    "location": "facts-block",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "finding": "The M>=2 domain did not imply the integer-refinement hypothesis of F1 and F2. Integer M is now explicit in Example and Given; density integration and crossing-variance calculations remain unchanged.",
    "post_sha256": "81f64307f26d33cdf587e6e2447d2d406d6a68e0d3d9326951106fd983cd4ff0"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose",
    "run": "bayesian-computational-statistics-62",
    "batch": "58",
    "item": "ex-mlmc-euler-strong-and-weak-cost-regimes",
    "severity": "nonfatal",
    "location": "facts-block",
    "disposition": "fixed",
    "finding": "F2 supplied alpha,beta and total MLMC work, not a per-pair gamma claim. Its proof already established the work count. Corrected the facts and supplied that elementary count locally with explicit unit-cost hypotheses.",
    "post_sha256": "6643c4c58389321fd53c016f79cf45b291cfc524a939d42ccc1e54af13c31966"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "propose",
    "run": "bayesian-computational-statistics-62",
    "items": [
      "ex-mlmc-discontinuous-payoff-half-rate",
      "ex-mlmc-euler-strong-and-weak-cost-regimes"
    ],
    "status": "assigned-draft-repairs-complete",
    "finding": "Record the two assigned draft repairs and their exact review hashes; no published item was edited and no published consumer defect was identified. No Statement/Definition change triggers consumer maintenance.",
    "reviews": [
      {
        "id": "ex-mlmc-discontinuous-payoff-half-rate",
        "post_sha256": "81f64307f26d33cdf587e6e2447d2d406d6a68e0d3d9326951106fd983cd4ff0",
        "review_context_sha256": "af5753a4f0ff8ec269dd8f6d976767089b9b5f41de4665a2d049083dda045993"
      },
      {
        "id": "ex-mlmc-euler-strong-and-weak-cost-regimes",
        "post_sha256": "6643c4c58389321fd53c016f79cf45b291cfc524a939d42ccc1e54af13c31966",
        "review_context_sha256": "403f576b471c2a38b30f216f53260a5da44ad7414795d450b871a1a163de9866"
      }
    ]
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "route-to-frontier-owner",
    "run": "bayesian-computational-statistics-62",
    "items": [
      "cor-mlmc-euler-hms-autonomous-cost-rate",
      "cor-mlmc-euler-finite-l2-and-weak-cost-rate"
    ],
    "status": "outside-assignment-reader-concerns",
    "finding": "Owner route, outside this assignment: the Step-4 digest concerns remain applicable to cor-mlmc-euler-hms-autonomous-cost-rate and cor-mlmc-euler-finite-l2-and-weak-cost-rate. In the autonomous item Statement, the clause one coupled path-pair sample costs O(h_l^-1) omits the unit-cost evaluation model introduced in its Proof step 3.1. In the finite-L2 item Statement, the logarithmic MLMC work conclusion likewise omits that model; its F1 unconditionally transcribes the shared-Brownian theorem work clause, whereas the actual theorem Statement explicitly requires fixed dimension, fixed M, and unit-cost coefficient/payoff evaluations. Necessary minimal repair is to carry those qualifications into the owning statements/facts. Both suppliers are draft frontier items outside the assigned tuple set and were not edited or adjudicated. The repaired comparison now states the missing computational premise explicitly. Route supplier repairs to their frontier owner; no published-maintenance repair is identified."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "subject": "thm-uniform-distribution-integrates-riemann-functions",
    "severity": "nonfatal",
    "location": "facts-block",
    "disposition": "fixed",
    "reason": "F3 cited only the small-gap criterion for the integral sandwich. The inequality follows immediately from the existing Darboux-integral definition, so the issue is citation accuracy rather than an invalid convergence argument.",
    "correction": "Added the explicit supremum/infimum inequality, direct dependency def-multidimensional-darboux-integral, its exact F3 citation contract, and the manifest dependency mirror.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u6-beta-measure-status",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:12:32.578272+00:00",
      "class": "accuracy",
      "subclass": "citation-missing",
      "severity": "fatal",
      "location": "facts-block",
      "subject": "lem-beta-density-normalization",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "6",
      "item_sha256": "c023ae6a69be970f5a1218c6e0317621221ed339e539ee2f7bf9e0c14321d787",
      "before_guard_sha256": "98a7462f8aa547632731ed0014f48d3cb4865e364acfd48183ec4f167a02d09a",
      "adjudication_ref": [
        {
          "id": "lem-beta-density-normalization",
          "model": "gpt-6-luna",
          "context_sha256": "87f5b4e62ff3808b802521a136a99667e31c8dc6047499e5e81201c52e9a74c3",
          "item_sha256": "c023ae6a69be970f5a1218c6e0317621221ed339e539ee2f7bf9e0c14321d787"
        }
      ],
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u6.json",
          "note": "The Lebesgue definition explicitly withholds sigma-algebra and measure status, while step 2.1 applies MCT to that space. Added the existing Countable-Choice completeness theorem and Borel-inclusion theorem to F9, deps and owning metadata. Compact truncations increase, their Riemann integrals converge to the improper Beta integral, and steps 1.2/2.2 give a positive finite Gamma ratio. The Statement is unchanged."
        }
      ],
      "repair_cost": "inline-fix",
      "prevention": {
        "kind": "process",
        "ref": "Check each fact against the exact exported supplier section and each theorem hypothesis against declared dependencies."
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u6-gamma-measure-status",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:12:32.578272+00:00",
      "class": "accuracy",
      "subclass": "citation-missing",
      "severity": "fatal",
      "location": "facts-block",
      "subject": "lem-gamma-density-normalization",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "6",
      "item_sha256": "0c06b55ae3571e7f3f8031b19dbf44d6b80521e347b196ed3e4b8abff9eafe5c",
      "before_guard_sha256": "1bbc65c4a8191d8e6194eca31bd58017f32b681c61bad7626899c29f960c5c25",
      "adjudication_ref": [
        {
          "id": "lem-gamma-density-normalization",
          "model": "gpt-6-luna",
          "context_sha256": "cf4df54a9e063b9ba716f5347d7b7c09adcf9355a36b090364f4eb97d87bbd2f",
          "item_sha256": "0c06b55ae3571e7f3f8031b19dbf44d6b80521e347b196ed3e4b8abff9eafe5c"
        }
      ],
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u6.json",
          "note": "MCT requires a measure space, but F8 originally cited only the Lebesgue set-function definition. Added the completeness and Borel-inclusion theorems under the existing Countable Choice hypothesis. Also corrected the digest concern: convergence supplies finiteness, while the already-declared Gamma definition explicitly supplies strict positivity. The increasing [1/m,m] exhaustion and t=bx substitution give b^(-a)Gamma(a), so division is valid. Statement unchanged."
        }
      ],
      "repair_cost": "inline-fix",
      "prevention": {
        "kind": "process",
        "ref": "Check each fact against the exact exported supplier section and each theorem hypothesis against declared dependencies."
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u6-multinomial-formula-citation",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:12:32.578272+00:00",
      "class": "accuracy",
      "subclass": "citation-misattributed",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-multinomial-law-normalization",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "6",
      "item_sha256": "9fbba746a466bc674a1c76889053520889b5ca11c63efeca0020c3255f099ea4",
      "before_guard_sha256": "de87e504ec16b9dcda9b47b4d90864f00d56d5313eafa6cd29195da3103a0156",
      "adjudication_ref": [
        {
          "id": "lem-multinomial-law-normalization",
          "model": "gpt-6-luna",
          "context_sha256": "eb8bbbc04256e44dc2ef9e3f51effe573a8ccfae36788cafa830dd32aef24853",
          "item_sha256": "9fbba746a466bc674a1c76889053520889b5ca11c63efeca0020c3255f099ea4"
        }
      ],
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u6.json",
          "note": "F2 incorrectly sourced the factorial formula to the coloring-count definition. F1 already supplies the same formula through the declared multinomial theorem, so this is a nonfatal citation defect. Added that theorem to F2 and its contract. Also corrected the n=0 explanation: the k-factor product is not empty when k>=1; each zero-th power and every 0! equals one. The normalization and 0^0 convention are unchanged."
        }
      ],
      "repair_cost": "inline-fix",
      "prevention": {
        "kind": "process",
        "ref": "Check each fact against the exact exported supplier section and each theorem hypothesis against declared dependencies."
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u6-dirichlet-gamma-interface",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:12:32.578272+00:00",
      "class": "accuracy",
      "subclass": "citation-misattributed",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "thm-dirichlet-density-normalization",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "6",
      "item_sha256": "61aa3c87130c81607db90d340af16104c32e62ea7fe588fd29f5bc2cf0fdc071",
      "before_guard_sha256": "07736326f5b97329da96aa27ed8ec768821d6b8c2c83b98ea20916c5e3b7b329",
      "adjudication_ref": [
        {
          "id": "thm-dirichlet-density-normalization",
          "model": "gpt-6-luna",
          "context_sha256": "2dd8e2d8634b0d57e0563cc0043e0e8f8ecc1537dc41f1066ec36698df84d94e",
          "item_sha256": "61aa3c87130c81607db90d340af16104c32e62ea7fe588fd29f5bc2cf0fdc071"
        }
      ],
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u6.json",
          "note": "The cited Beta proof really proves Gamma positivity in steps 1.2/2.2, but the F6 contract quotes only its Statement, which does not export that intermediate claim. Corrected this nonfatal interface citation using the existing Gamma definition and convergence theorem. Also made the Tonelli bridge explicit: Euclidean Borel products, sigma-finiteness and agreement of product/Euclidean Lebesgue measures on Borel functions. The triangular Jacobian gives exponents sum_{j>i}alpha_j-1; positive Gamma factors telescope to the unchanged ratio, including k=2."
        }
      ],
      "repair_cost": "inline-fix",
      "prevention": {
        "kind": "process",
        "ref": "Check each fact against the exact exported supplier section and each theorem hypothesis against declared dependencies."
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u6-iid-measurable-product",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:12:32.578272+00:00",
      "class": "accuracy",
      "subclass": "citation-missing",
      "severity": "fatal",
      "location": "facts-block",
      "subject": "thm-iid-exponential-family-statistic-is-sufficient",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "6",
      "item_sha256": "1bdf7740fc9a81a7a1d1d7e93cdb7334c15e126d6a6c56d5e68616c69f086c14",
      "before_guard_sha256": "5783cfc4949fe00bfb014991fdaf2f808355784297fd54a88bc26f4b498fdda4",
      "adjudication_ref": [
        {
          "id": "thm-iid-exponential-family-statistic-is-sufficient",
          "model": "gpt-6-luna",
          "context_sha256": "be255f0f85511476d4ec6e58bd10cc58a7160760bf503c0d3031582e0d2b6e62",
          "item_sha256": "1bdf7740fc9a81a7a1d1d7e93cdb7334c15e126d6a6c56d5e68616c69f086c14"
        }
      ],
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u6.json",
          "note": "The cited closure proposition exports sums and scalar multiples, not general products. Step 1.1 needs measurable products before forming the density measure. Added the existing arithmetic-measurability theorem to F9, deps and owning metadata. Finite h and T make every density finite; Tonelli gives mass one, rectangle uniqueness gives the IID law, and a positive Borel ratio to an in-model reference yields sufficiency. The k=0 singleton case remains valid. Corrected the contract caveat: selecting one reference is not an AC use; conditional-law suppliers are."
        }
      ],
      "repair_cost": "inline-fix",
      "prevention": {
        "kind": "process",
        "ref": "Check each fact against the exact exported supplier section and each theorem hypothesis against declared dependencies."
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u6-gamma-positivity-citation",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:12:32.578272+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-gamma-density-normalization",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "6",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u6.json",
          "note": "F2 attributed strict positivity to a convergence-only Statement. It now cites the already-declared Gamma definition, whose Definition explicitly states positivity of this positive-integrand improper integral."
        }
      ],
      "repair_cost": "inline-fix"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u6-multinomial-zero-count-explanation",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:12:32.578272+00:00",
      "class": "accuracy",
      "subclass": "invalid-inference",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-multinomial-law-normalization",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "6",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u6.json",
          "note": "Step 2.1 called the n=0 mass an empty product although k>=1. It now computes 0!/(0!)^k times k zero-th powers, all equal to one; no normalization claim changes."
        }
      ],
      "repair_cost": "inline-fix"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u6-dirichlet-tonelli-measure-bridge",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:12:32.578272+00:00",
      "class": "accuracy",
      "subclass": "citation-missing",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "thm-dirichlet-density-normalization",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "6",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u6.json",
          "note": "The Euclidean change-of-variables integral was passed to product-space Tonelli without explicit measure-identification hypotheses. F3 and step 3.1 now cite sigma-finiteness, Euclidean Borel products and agreement of product/Euclidean Lebesgue measures on Borel sets."
        }
      ],
      "repair_cost": "inline-fix"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "bcs62-step5-initial-r1-u6-iid-single-reference-choice-contract",
      "run": "bayesian-computational-statistics-62",
      "at": "2026-10-15T17:12:32.578272+00:00",
      "class": "accuracy",
      "subclass": "false-boundary-disposition",
      "severity": "nonfatal",
      "location": "contract-row",
      "subject": "thm-iid-exponential-family-statistic-is-sufficient",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "6",
      "evidence": [
        {
          "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u6.json",
          "note": "The nonempty-choice boundary attributed selecting one eta_0 in step 2.1 to AC. A single existential instantiation does not need AC; the contract now identifies the actual AC use in the conditional-law suppliers of step 3.1."
        }
      ],
      "repair_cost": "inline-fix"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-b-adic-anova-components",
    "finding": "Missing integer parameter/index domains in the Definition",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "status": "fixed",
    "reason": "Explicit integer b,d,k,t,r and tensor entries now make all finite child and coefficient sums well-defined; the original formulas and choice boundary are preserved."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-rqmc-scrambled-net-variance-identity",
    "finding": "F4 omits the net hypothesis needed by its cited supplier",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "Restored the hypothesis in F4 and proved arbitrary-array marginals by applying the supplier to each singleton (1,0,0,d)-net under the same permutations; added the actual net definition dependency."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-rqmc-scrambled-net-gain-formula",
    "finding": "F2 misattributes Upsilon to the scrambling procedure instead of the variance-identity Statement",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Changed the fact link and its exact contract quote to lem-rqmc-scrambled-net-variance-identity; the existing F1 supplier already furnished the same formula."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "def-binding-function-and-indirect-inference-target",
    "class": "accuracy",
    "subclass": "missing-hypothesis",
    "severity": "nonfatal",
    "location": "definition",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "reason": "The recovery paragraph does not specify that b must distinguish parameter values. Under the cited estimand definition, b is automatically identifiable because equal sampling laws give equal integrals; this does not imply injectivity. For Theta={-1,1}, P_theta=delta_theta and S(y)=y^2, the raw laws differ while b(-1)=b(1)=1. This is a nonfatal missing identification condition: the compact continuous minimum-distance target and lexicographic selector remain valid, and no recovery or consistency theorem was asserted. The repair explicitly defines singleton-fibre identification at theta_0 and global injectivity, separately from summary-law identification.",
    "uncertain": false,
    "source_urls": [
      "https://www.stat.cmu.edu/~cshalizi/462/readings/Indirect%20Inference%20%28Gourieroux%2C%20Monfort%20and%20Renault%29.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "propose_examination_record",
    "supplier": "def-binding-function-and-indirect-inference-target",
    "published_consumers": [],
    "reason": "Direct dependency/reference and unlinked binding-target use searches found only the two draft frontier consumers listed in downstream and their two draft owning pages. Their exact uses remain sound. No affected published item or outside-frontier item was found, and no maintenance item repair is proposed.",
    "uncertain": false,
    "source_urls": [
      "https://www.stat.cmu.edu/~cshalizi/462/readings/Indirect%20Inference%20%28Gourieroux%2C%20Monfort%20and%20Renault%29.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-exact-inferential-target-and-approximation-chain",
    "severity": "nonfatal",
    "status": "fixed",
    "locus": "frontmatter and Definition",
    "finding": "The original axiom_use denied parameter-indexed version selection and the Definition said the supplier selected versions for fixed observations. def-likelihood-density instead selects one data-space density p_theta per parameter under AC and does not assert parameter measurability.",
    "correction": "State the actual supplier selection and retain the explicit measurable fixed-data input; no posterior formula, admissibility condition, dependency, or choice assumption used by normalization changes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "thm-current-and-new-group-posterior-predictive-laws-are-probability-kernels",
    "class": "accuracy",
    "subclass": "missing-hypothesis",
    "severity": "fatal",
    "location": "statement",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "The conditional-law conclusion did not stipulate independence of data and future generation given the latent tuple. Singleton latents and future=Y for a fair Bernoulli violate the conclusion. Statement now specifies precisely the product extension used by Proof 2.1. The assigned endpoint wording was additionally clarified as a nonfatal source/target ambiguity.",
    "evidence": {
      "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u8.json",
      "anchor": "decisions[0]"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "ex-hierarchical-normal-pooling-extremes",
    "class": "accuracy",
    "subclass": "missing-choice-scope",
    "severity": "nonfatal",
    "location": "frontmatter",
    "disposition": "fixed",
    "reason": "The axiom_use clause incorrectly restricted inherited AC to the degenerate boundary although the positive-variance normal shrinkage supplier assumes it. Existing A1 and AC dependency were already sufficient. Corrected the clause without changing any mathematical claim.",
    "evidence": {
      "path": "research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u8.json",
      "anchor": "decisions[1]"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No defective published supplier or published consumer was found. The changed theorem has no direct item dependency/reference consumer, and its owning draft page remains sound. Draft-only repairs and the unrelated operational parser failure belong in this run report."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_false_positive",
    "subject": "def-marginal-likelihood-and-bayes-factor",
    "outcome": "false_positive",
    "reason": "The Definition explicitly supplies jointly measurable extended-valued nonnegative densities satisfying Q_i(theta,B)=integral_B f_i(theta,y) dmu; it does not infer their existence or joint measurability from def-likelihood-density. Its direct evidence-normalizer dependency explicitly accepts L_y in [0,infinity]. Tonelli gives integral m_i dmu=integral Q_i(theta,Y) dPi_i=1, so extended values cause no predictive-density defect. Finite positive evidence is required for every defined Bayes factor. The finite-valued representatives in the contextual likelihood definition do not invalidate this explicitly specified broader setup.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_fixed",
    "subject": "ex-point-null-needs-a-model-atom",
    "severity": "nonfatal",
    "location": "frontmatter",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The overstrong model-atom necessity title and source locator were corrected. Both owning page summaries were also corrected under the shared-write lock. The Bernoulli Example, dependencies, proof, content contract and Statement/Definition interfaces are unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://www.bayesrulesbook.com/chapter-8.html"
    ],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "Both assigned carriers and owning pages are draft; neither Statement/Definition changed and no published consumer repair was discovered or undertaken. The digest alert concerns a different draft frontier supplier, routed separately to its owner in repair_notes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "alg-k-sample-null-constrained-block-bootstrap",
  "alg-multichain-effective-sample-size",
  "def-measurable-finite-group-orbit-pvalues",
  "alg-random-permutation-monte-carlo-pvalue",
  "lem-kalman-filter-is-exact-conditional-on-nonlinear-path",
  "alg-rao-blackwellized-particle-filter",
  "cex-identifiable-nonconstant-summary-loses-parameter",
  "cex-local-hessian-does-not-capture-multiple-modes",
  "cex-mean-field-variational-posterior-misses-correlation",
  "cex-ordinary-importance-sampling-infinite-variance-under-light-tailed-proposal",
  "cex-pointwise-bootstrap-ar1-variance-mismatch",
  "cex-positive-abc-tolerance-changes-posterior-target",
  "cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage",
  "cex-synthetic-likelihood-changes-inferential-target",
  "thm-finite-group-permutation-validity",
  "thm-random-permutation-monte-carlo-validity",
  "cex-uncorrected-random-permutation-pvalue-can-be-zero",
  "lem-type-s-h-prior-draws-are-l2-densities",
  "thm-type-h-histogram-posterior-weak-bvm-in-m0w",
  "lem-type-s-posterior-preliminary-contraction",
  "thm-type-s-density-weak-bvm-on-m0w",
  "cor-type-s-h-density-credible-band-calibration",
  "def-studentized-two-sample-u-statistic",
  "ex-bernoulli-density-logarithmic-contraction-rate",
  "ex-exchangeable-two-sample-permutation-test"
]


