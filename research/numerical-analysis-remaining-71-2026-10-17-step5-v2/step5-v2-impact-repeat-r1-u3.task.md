# Step 5 repair: impact-repeat, round 1, unit 3

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/impact-repeat-1.json.







Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-impact-repeat-r1-u3.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"impact-repeat",round:1,unit:"3",input_sha256:"5191108fee425b525b22094433a80421a28fb4a7a74230a6586da02e1dd80518",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.



Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.







All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-incremental-planar-delaunay-edge-flips",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "definition",
    "summary": "Unconditional augmented general-position zero tests prevent ordinary-mode supertriangle search from terminating on a cocircular square, or on a full-dimensional input containing a collinear triple.",
    "correction": "Guarded the augmented zero tests with g=1, preserving the full ordinary input domain and both strict geometric constraints.",
    "evidence": {
      "path": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-repeat-r1-u15.json",
      "anchor": "decisions/0"
    },
    "independent_review": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-finite-budget-stable-block-reordering-for-schur-and-qz",
    "defect_id": "na71-step5-repeat-r1-u23-accepted-swap-count",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "definition",
    "disposition": "fixed",
    "reason": "For T=diag(1,-1), the local system is 2R=0, its inverse norm is 1/2 and eta=1 passes. Gram–Schmidt gives the coordinate exchange, so one committed swap orders the form, yet accepted swaps remains zero. The repair increments it exactly once in the same transactional commit and leaves it unchanged on failure.",
    "post_sha256": "b38478276b2aa6a2492b0bcfc5deb37d38d1bc105ebd6f5440ec250a6a1cb189",
    "evidence": {
      "path": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-repeat-r1-u23.json",
      "decision_index": 0,
      "review_index": 0
    },
    "independent_review": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-finite-budget-structure-preserving-doubling-for-dare",
    "defect_id": "na71-step5-repeat-r1-u23-exact-sda-diagnostic-type",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "definition",
    "disposition": "fixed",
    "reason": "With scalar A=B=C=1 and R=2, exact initialization gives G0=1/2,H0=1; W0=2/3 gives H1=5/3 and S1=11/3, which has denominator 3 and is not dyadic. Thus the universal exact-dyadic diagnostic requirement cannot be performed. The repair forms S exactly in both modes, allows general exact values in exact mode and evaluates its residual exactly; the finite branch alone retains the dyadic point-certifier interface.",
    "post_sha256": "d39ca8988e1e75214b3d50e86cee83bacdaf7be8cf837b4e626394d500fbb769",
    "evidence": {
      "path": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-repeat-r1-u23.json",
      "decision_index": 1,
      "review_index": 1
    },
    "independent_review": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no-update-needed",
    "reason": "All eight supplier-to-consumer uses involve seven draft frozen-frontier items. No published consumer or potentially defective published supplier was discovered in the actual examined interfaces.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-boys-upward-downward-recurrence-error-amplification",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "location": "proof-step",
    "subclass": "invalid-inference",
    "reason": "The primitive-operation supplier does not perform one fused affine rounding. For m=1,T=1,I=[0,3/8],J=[0,1] in a precision-2 dyadic format with sufficient exponent range, 3I rounds to [0,3/2]; subtraction and division by 2 then give [-1/2,3/4] with zero final endpoint errors. The exact full image is [-1/2,9/16], so the uncounted radius excess is 3/32. Both inputs enclose the required values since F_1(1)<=1/3 and 0<exp(-1)<1. Corrected the false inference by stating the full-image single-conversion hypothesis and separate intermediate-node accounting.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-cartesian-gaussian-integrals-absolutely-convergent",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "location": "statement",
    "subclass": "false-or-overstrong-statement",
    "reason": "For two centered s Gaussians of exponent 1 and C=0, the attraction integrand is exp(-2r^2)/r. Its second x_1 derivative is exp(-2r^2)(3 omega_1^2-1)/r^3+O(1/r), uniformly in direction. On any cone with |3 omega_1^2-1| bounded below, its absolute integral contains a positive multiple of the divergent integral dr/r near zero. The proof only differentiates Gaussian factors. Corrected the Statement to specify those factors and leave Coulomb kernels fixed; repeated parameter differentiation is justified by the same proved envelopes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "append",
    "id": "ex-maxwell-pec-rectangular-cavity-mode",
    "row": {
      "defect_id": "na71-b42-step5-r1-cavity-nonzero-mode",
      "run": "numerical-analysis-remaining-71-2026-10-17",
      "batch": "42",
      "at": "2026-10-18",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "location": "title",
      "subject": "ex-maxwell-pec-rectangular-cavity-mode",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-repeat-r1-u42.json",
          "note": "See this report decision and review for ex-maxwell-pec-rectangular-cavity-mode; the exact rejected context, counterexample, completed correction and current review hashes are recorded there."
        }
      ],
      "adjudication_ref": [],
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step5-adjudicator.md"
      }
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "append",
    "id": "thm-maxwell-periodic-yee-smooth-solution-error",
    "row": {
      "defect_id": "na71-b42-step5-r1-yee-source-free-hypothesis",
      "run": "numerical-analysis-remaining-71-2026-10-17",
      "batch": "42",
      "at": "2026-10-18",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "location": "statement",
      "subject": "thm-maxwell-periodic-yee-smooth-solution-error",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-repeat-r1-u42.json",
          "note": "See this report decision and review for thm-maxwell-periodic-yee-smooth-solution-error; the exact rejected context, counterexample, completed correction and current review hashes are recorded there."
        }
      ],
      "adjudication_ref": [],
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step5-adjudicator.md"
      }
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "append",
    "id": "thm-maxwell-periodic-yee-smooth-solution-error",
    "row": {
      "defect_id": "na71-b42-step5-r1-wave-energy-citation",
      "run": "numerical-analysis-remaining-71-2026-10-17",
      "batch": "42",
      "at": "2026-10-18",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "thm-maxwell-periodic-yee-smooth-solution-error",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-repeat-r1-u42.json",
          "note": "Original F2 attributed wave-energy control of velocity and curl to the first-order Yee modified-energy theorem. Its actual interface defines the generalized Rayleigh maximum and controls electric and centered magnetic fields. Replaced F2 by the precise Rayleigh inequality actually used; the wave-energy proof remains local in steps 1.2 through 3.1."
        }
      ],
      "adjudication_ref": [],
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step5-adjudicator.md"
      }
    }
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-change",
    "reason": "Neither assigned item has a direct dependency/reference item consumer, and no potentially defective published use was found. There is no published maintenance finding to append."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-half-order-kernel-translation-modulus-in-l1",
    "severity": "nonfatal",
    "location": "proof-step",
    "step": "1.1",
    "disposition": "fixed",
    "reason": "Step 1.1 leaves the cutoff index range unstated: d/(4m) is undefined at m=0. This is a nonfatal indexing omission, since the same explicit construction works for m>=1 and reindexing changes neither the Cauchy tail estimate nor its limit. Replaced it by d/(4(m+1)) for integers m>=0; for d=|x-x′|>0 every cutoff is positive, at most d/4<d/3, and decreases to zero. No additional hypothesis or supplier is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-bem-p0-negative-half-order-approximation",
    "defect_type": "logic",
    "severity": "fatal",
    "status": "fixed",
    "reason": "A cube top face may be subdivided at x=1/2 into two coplanar faces while its mesh triangles cross that line. Set lambda=1 on the left subface and zero on all other faces. Every facewise gradient vanishes, but a crossing triangle has a nonconstant restriction, hence nonzero mean-projection error. A smooth bump inside one side of that triangle detects the error in the H^(-1/2) dual. The claimed gradient-only bound and step 1.2 therefore fail: this is a logic defect, not a missing citation.",
    "correction": "Checked the chart/Fourier conventions, convex Poincare supplier and zero-mean duality. Retained the family-independent H^(1/2)-to-L2 estimate and clarified H1 regularity of its smoothed restrictions across coplanar seams. Added the general h^(1/2) negative-norm residual bound for every L2 density. The h^(3/2) gradient bound now covers every elementwise H1 density, including facewise C1 densities on face-fitted meshes, with no continuity required across mesh edges. No new supplier or choice assumption is needed. This is the repairer’s verification, not independent review.",
    "uncertain": false,
    "source_urls": [
      "https://team-pancho.github.io/teaching/math838/BEM.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "cor-bem-p0-galerkin-rate-for-h1-density",
    "supplier": "lem-bem-p0-negative-half-order-approximation",
    "route": "frontier-owner",
    "affected_use": "F2 asserts the h^(3/2) gradient-only projection estimate for all piecewise C1 data; proof step 2.1 applies it without checking that lambda restricts to H1 on every triangle.",
    "invalidated_claim": "The corollary Statement promises zero Galerkin error for the same zero-gradient density. Taking f=V lambda makes this the exact density, but lambda is not in X_h on a crossing triangle, so no Galerkin density can equal it.",
    "minimality": "Add the face-fitted mesh hypothesis to the facewise C1 version, preserving the same rate and allowing density jumps across face edges; preferably also retain the general elementwise H1 version. Update F2, Given and the owning contract/manifest. This is a necessary Statement change and must trigger its own direct-consumer examination by its owner.",
    "status": "open",
    "uncertain": false,
    "source_urls": [
      "https://team-pancho.github.io/teaching/math838/BEM.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-fehmm-period-aligned-sampling-has-zero-resonance",
    "location": "facts-block",
    "fact": "F1",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "F1 incorrectly permits zero in the library natural-number convention: changing a representative at theta can make the constant pullback a(theta) nonelliptic, and zero dilation is not invertible. The Statement already restricts m to positive integers, as do the proof construction m^{-1} chi_p(theta+my), invertible affine pullback, Fourier frequency transport and integer-cell averaging. Corrected only F1 to positive integer; the stated tensor equality and continuum-only resonance conclusion remain valid."
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-periodic-dirichlet-homogenization-on-unit-cube",
    "location": "facts-block",
    "fact": "F10",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "F10 misidentifies V_# with the closure of all smooth periodic functions; constant 1 belongs to that closure but has nonzero mean. The actual supplier defines that closure as H1_# and V_# as its zero-mean subspace. Step 1.2 already subtracts the smooth approximant mean, with error bounded by its L2 error because |Y|=1, so the density argument and homogenization conclusion remain sound. Corrected F10 to quote both spaces accurately; no Statement or proof step changes."
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "alg-randomized-history-dag-point-location",
  "cor-bem-p0-galerkin-rate-for-h1-density",
  "ex-sda-psd-blocks-and-symmetry-defect",
  "ex-small-t-upward-boys-cancellation",
  "prop-riccati-dense-work-and-acceptance-diagnostics",
  "thm-sda-convergence-and-eventual-quadratic-envelope"
]


