# Step 5 repair: impact-initial, round 1, unit 1

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/impact-initial-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/step5-v2-impact-initial-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"mathematical-statistics-foundations-37",phase:"impact-initial",round:1,unit:"1",input_sha256:"34130024f5f23a7c276d4b90279e290edea2c9502dee861024d2c1bd303ff0d0",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run mathematical-statistics-foundations-37 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "target": "research/defect-ledger.jsonl",
    "id": "def-student-t-and-f-laws",
    "action": "record_fixed_defect",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "locus": "definition",
    "finding": "The branch conditions Q>0 and Q=0 omit Q<0 on the real product space, so the claimed Borel maps were not total.",
    "repair": "Use Q<=0 for the constant branch in both maps; their defining input laws assign this region probability zero.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "target": "research/defect-ledger.jsonl",
    "id": "cex-rademacher-orthogonality-does-not-imply-independence-or-exact-t-f",
    "action": "record_fixed_defect",
    "outcome": "confirmed_nonfatal",
    "locus": "facts-block",
    "finding": "A1 says imported AC use is confined to definitions, but F1 also uses a lemma explicitly assuming AC. The proof already assumes AC.",
    "repair": "Name the t/F definitions and positive-degree chi-square positivity lemma in A1, preserving the choice-free finite calculation caveat.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "target": "research/defect-ledger.jsonl",
    "id": "lem-positive-df-chi-square-has-density-and-regular-cdf",
    "action": "route_to_frontier_owner",
    "locus": "statement",
    "finding": "The digest concern is confirmed: for k=1 the factor x^(k/2-1) is undefined at zero and on negative x; multiplication by an indicator does not define it there. Proof steps 2.1-4.1 establish the intended density on positive x and zero extension.",
    "minimality": "Give the density as the displayed expression for x>0 and zero for x<=0. Its a.s. positivity and CDF consequences used by both assigned items are sound. This unassigned supplier was not edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "target": "research/published-consumer-supplier-ledger.md",
    "id": "thm-dominated-convergence",
    "action": "record_existing_repair_observation",
    "finding": "The current Statement explicitly begins with an arbitrary measure space (X,A,mu) and domain X; the current Given repeats that scope. The batch digest alert describes a prior carrier.",
    "affected_use": "The t/F CDF lemma uses dominated convergence for bounded CDF integrands on a chi-square probability space with integrable majorant 1.",
    "invalidated_claim": "None in the current local supplier or these applications.",
    "minimality": "No edit needed; retain the existing mathematical-statistics-foundations-37-stage4-owner-s4-published-thm-dominated-convergence-v2 ledger entry. This observation adds no whole-item audit or independent acceptance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "item": "def-pivot",
    "run": "mathematical-statistics-foundations-37",
    "class": "accuracy",
    "subclass": "false-or-overstrong-statement",
    "severity": "nonfatal",
    "location": "definition",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "reason": "The formal family-of-measurable-sections definition is sound, but the final real-valued gloss incorrectly identifies a pivot with a statistic. In the discrete location experiment, q_theta(x)=x-theta has common masses 1/3 at -1, 0, 1 under P_theta, yet depends on theta and is not one parameter-independent data map. This is a nonfatal terminology defect: the formal definition and inversion arguments already use parameter-indexed sections. Replaced only the gloss to allow parameter dependence explicitly; no claim was weakened.",
    "evidence": "items/def-pivot.md, final Definition paragraph; owning batch-11 manifest statement synchronized. Common-law formal interface preserved.",
    "adjudication_ref": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u11.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update_required",
    "item": "def-pivot",
    "reason": "All five direct item consumers are draft frozen-frontier items and remain sound under the corrected interface. Exact-ID dependency/reference searches found no published or outside-frontier item consumers, so there is no published maintenance finding."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u12-nonnegative-kernel-fact",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:22:50.916610+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-conditional-kernel-tail-and-atom-evaluations-are-measurable",
      "caught_at_stage": "4-judge",
      "caught_by_role": "detector",
      "detector_model": "gpt-6-luna",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "batch": "12",
      "item_sha256": "16560f7b82799f632b683207f3a76c63b287d4d06bbd3c929cbbf8fe391b6c4f",
      "adjudication_ref": [
        "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u12.json#decisions/0"
      ],
      "evidence": [
        {
          "path": "items/lem-conditional-kernel-tail-and-atom-evaluations-are-measurable.md",
          "note": "F5 omitted nonnegativity: a signed measurable function can have both positive and negative integrals infinite. The cited theorem only guarantees general measurability for nonnegative integrands. Step 2.1 uses bounded nonnegative indicators, so the argument remains valid; F5 is now restricted to the precise applicable theorem."
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step5-adjudicator.md"
      },
      "note": "Adjudicated at 5-adjudicate by alpha-adjudicate; the original exact model/context tuple remains in the report. Detector role is used because the canonical role enum has no Luna judge label."
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u12-positive-sequence-indices",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:22:50.916610+00:00",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-randomized-probability-integral-transform",
      "caught_at_stage": "4-judge",
      "caught_by_role": "detector",
      "detector_model": "gpt-6-luna",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "batch": "12",
      "item_sha256": "236127cf006055e4e32393ccdf8a3ac349f18c133cb9e54682cc9b08b8cd7c18",
      "adjudication_ref": [
        "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u12.json#decisions/1"
      ],
      "evidence": [
        {
          "path": "items/lem-randomized-probability-integral-transform.md",
          "note": "The unqualified sequence indices in steps 1.1, 2.1, 2.2 and 4.1 permit n=0 under the library convention, making 1/n undefined. This is a local indexing defect, with no invalid quantile or probability argument: the proof now explicitly takes positive indices, and both endpoint sequences in step 4.1 start at n=2, so the previously proved interior formula applies to every threshold."
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step5-adjudicator.md"
      },
      "note": "Adjudicated at 5-adjudicate by alpha-adjudicate; the original exact model/context tuple remains in the report. Detector role is used because the canonical role enum has no Luna judge label."
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "Both assigned carriers are draft frontier items and both Statements are unchanged. No published defect or supplier-interface event was discovered in these assigned reviews."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "mathematical-statistics-foundations-37-step5-initial-r1-u13-mean-change-of-variables-measurability",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14",
      "class": "accuracy",
      "subclass": "citation-truncated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "thm-iid-sample-mean-consistency",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "13",
      "subclass_note": "Original F10 omitted Borel measurability of g required by thm-change-of-variables-for-expectation. Added that hypothesis only. The proof uses the measurable identity and supplied integrable X_1, so the consistency conclusion and original Statement were already sound.",
      "evidence": [
        {
          "path": "items/thm-iid-sample-mean-consistency.md",
          "anchor": "F10; Proof 1.1"
        },
        {
          "path": "items/thm-change-of-variables-for-expectation.md",
          "anchor": "Statement"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u13.json",
          "obligation": "thm-iid-sample-mean-consistency:gpt-6-luna:9f587dc12da9f1750d70b6182f6adf34461c802f29e9dbc645c605f6405a0007"
        }
      ],
      "repair_cost": "inline-fix"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No published item was edited or found defective. The only repair is a draft Facts restatement; its Statement and all proof sections are unchanged, so no published-consumer maintenance event is generated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-doob-martingale-differences-inherit-coordinate-oscillations",
    "severity": "nonfatal",
    "location": "Proof 2.2",
    "disposition": "fixed",
    "reason": "Implicit approximation selection replaced with explicit endpoint offsets and canonical null exceptional sets; no AC added and Statement unchanged.",
    "subject": "lem-doob-martingale-differences-inherit-coordinate-oscillations"
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-gaussian-maximum-concentration",
    "severity": "nonfatal",
    "location": "Facts F3, F13; Verification 1.1 and 2.1",
    "disposition": "fixed",
    "reason": "Added the existing compact Riemann/Lebesgue bridge and nonnegative density-integration dependencies, explicit compact interval identifications and reflection. Existing AC covers all added hypotheses; Example unchanged.",
    "subject": "ex-gaussian-maximum-concentration"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposal",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u15-1",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-finite-grid-interval-discrepancy",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "note": "F1 incorrectly attributes unit mass to every measure. def-measure requires empty-set zero and countable additivity; def-probability-measure supplies normalization. Corrected F1 only. Independently checked weight sum, strict cumulative masses at grid points and between them, and endpoint subtraction including J=1 and a=b; the proof and Statement remain sound and unchanged.",
      "adjudication_ref": [
        "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u15.json"
      ],
      "evidence": [
        {
          "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u15.json"
        },
        {
          "path": "items/lem-finite-grid-interval-discrepancy.md"
        }
      ],
      "prevention": {
        "kind": "process",
        "ref": "Check exact supplier domains, extended-value cases and mixed coordinate offsets before using an interface."
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposal",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u15-2",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-covering-packing-bracketing-number-and-metric-entropy",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "note": "The nonnegative moment can be infinite, whereas def-real-power defines powers only for finite positive bases and zero with positive exponent. Defined the norm as +infinity directly when the moment is infinite and retained the finite formula including zero. Checked measurability, Minkowski on finite-norm classes, a.e. bracket inclusion, strict packing/closed in-class cover radii, and empty conventions. Infinite-width brackets cannot cover at finite radius; no integrable-endpoint restriction was added.",
      "adjudication_ref": [
        "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u15.json"
      ],
      "evidence": [
        {
          "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u15.json"
        },
        {
          "path": "items/def-covering-packing-bracketing-number-and-metric-entropy.md"
        }
      ],
      "prevention": {
        "kind": "process",
        "ref": "Check exact supplier domains, extended-value cases and mixed coordinate offsets before using an interface."
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposal",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u15-3",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "fatal",
      "location": "statement",
      "subject": "thm-one-sided-coordinate-rademacher-contraction",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "note": "The cited complexity definition applies only to measurable classes on measurable spaces, while the theorem allows arbitrary real-valued functions. The finite-sign inequality itself is valid. Defined its RHS locally as the explicit uniform finite average, agreeing with the supplier on its domain, so no hypothesis or conclusion was weakened. Also made step 1.1 valid for arbitrary offsets and step 2.1 explicit about unreplaced/replaced coordinates. Pair-swap algebra, countable limits over the finite sign cube, L=0, singleton classes and additive constants are sound.",
      "adjudication_ref": [
        "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u15.json"
      ],
      "evidence": [
        {
          "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u15.json"
        },
        {
          "path": "items/thm-one-sided-coordinate-rademacher-contraction.md"
        }
      ],
      "prevention": {
        "kind": "process",
        "ref": "Check exact supplier domains, extended-value cases and mixed coordinate offsets before using an interface."
      }
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "reason": "Direct dependency/reference searches and current carrier statuses found only draft frontier consumers. No published mathematical defect or published repair is asserted; draft-only findings remain in this run report."
  },
  {
    "path": "research/defect-ledger.jsonl",
    "action": "append_proposed_finding",
    "subject": "def-donsker-class-and-asymptotic-equicontinuity",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "reason": "The per-function almost-sure envelope does not imply bounded empirical paths: for Uniform[0,1] and f_{x,k}=k 1_{x}, the zero envelope is valid individually but the sample-point coordinates have unbounded empirical values. Added the necessary common measurable conull bounded-path condition and zero extension before testing functionals on ell-infinity; the covariance and equicontinuity definitions are unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    ],
    "familiar": true,
    "evidence": {
      "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u16.json",
      "anchor": "def-donsker-class-and-asymptotic-equicontinuity"
    },
    "defect_type": "logic"
  },
  {
    "path": "research/defect-ledger.jsonl",
    "action": "append_proposed_finding",
    "subject": "cex-pointwise-strong-laws-do-not-imply-uniform-law",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "reason": "For each fixed finite A the countable observation union is null. For every realized sample its finite sample set attains deviation one, so the full supremum is exactly the measurable constant one. Ordinary and outer probabilities coincide for this quantity even without countable class separability; both give probability one to deviation exceeding 1/2. The restrictive supplier convention cannot invalidate this explicitly proved measurability or the counterexample.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": {
      "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u16.json",
      "anchor": "cex-pointwise-strong-laws-do-not-imply-uniform-law"
    }
  },
  {
    "path": "research/defect-ledger.jsonl",
    "action": "append_proposed_finding",
    "subject": "thm-empirical-process-functional-clt",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "reason": "Step 4.1 used density normalization, density integration and translated-interval substitution that are not conclusions of the characteristic-function lemma. Added seven existing direct suppliers and F16-F19; checked the continuous translation with derivative one, the Countable-Choice Riemann/Lebesgue bridge, and monotone convergence on both expanding interval families. Completing the square now yields E exp(lambda Y)=exp(lambda^2 sigma^2/2), including sigma=0. Step 1.2 now proves the common conull bounded-path condition from countable pointwise approximation and the L2 envelope. The Statement is unchanged; Gaussian extension, finite-dimensional CLT and finite-net outer approximation retain their hypotheses.",
    "uncertain": false,
    "source_urls": [
      "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    ],
    "familiar": true,
    "evidence": {
      "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u16.json",
      "anchor": "thm-empirical-process-functional-clt"
    },
    "defect_type": "dependency_citation"
  },
  {
    "path": "research/defect-ledger.jsonl",
    "action": "append_proposed_finding",
    "subject": "ex-uniform-empirical-cdf-converges-to-brownian-bridge",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The Example reserves F(t)=t for the distribution function, while A1 and verification step 1.1 reuse F for the constant-one envelope. Renamed only that envelope to H and changed its squared integral to PH^2=1. Rational approximations from above include endpoint t=1 in the countable subclass, the m grid brackets have L2 width m^(-1/2), and their integrable square-root entropy permits the AC functional CLT. The covariance remains min(s,t)-st, with zero endpoint variances and uniformly bounded empirical paths.",
    "uncertain": false,
    "source_urls": [
      "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    ],
    "familiar": true,
    "evidence": {
      "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u16.json",
      "anchor": "ex-uniform-empirical-cdf-converges-to-brownian-bridge"
    }
  },
  {
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "All direct consumers of the changed Definition are draft original-frontier items. No published consumer or published-supplier mathematical defect was found in the examined uses; the missing MGF support is a draft citation defect, not a defect of the published suppliers.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-sparse-hamming-packing",
    "locus": "facts-block",
    "location": "F1",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "Division with remainder does not itself state the embedding interface. The embedding and discreteness are true and available locally; explicit supplier citations now justify transfer to natural quotients.",
    "repair": "Added three published suppliers to item and owning manifest deps and exact F1 citations to the contract. No Statement change.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-fano-packing",
    "locus": "facts-block",
    "location": "F6, F7; Statement and Given AC disclosure",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "Risk supplier requires measurable action sections, whereas F6 incorrectly attributed joint measurability to it. Finite discrete parameters and continuous distance sections establish the extra product measurability required by the Bayes/minimax supplier.",
    "repair": "Corrected F6, proved finite-product measurability in F7 and made the already recorded A1 AC assumption explicit in Statement/Given. Existing msf37-batch17-3a-06 evidence remains unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-sparse-gaussian-sequence-fano-lower-bound",
    "locus": "statement",
    "location": "Example and Given; F4; Proof 4.1",
    "severity": "nonfatal",
    "status": "owner-routing-required",
    "finding": "The actual Fano use and Gaussian constants are sound under inherited AC, already listed in deps, but Example/Given omit the assumption. This repeats the rejection-blind Step-4 presentation concern.",
    "repair": "Propose an owner clarification adding AC to Example/Given; the carrier is an unassigned frontier item and was left unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "no_update_required",
    "supplier": "thm-fano-packing",
    "reason": "All five direct dependency/reference consumers are current-run draft frontier items. No published or outside-frontier consumer was found, no published item was edited, and no published mathematical finding requires a maintenance entry.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose_record",
    "id": "thm-bic-fitted-risk-bound",
    "run": "mathematical-statistics-foundations-37",
    "phase": "initial",
    "round": 1,
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "proof-step",
    "reason": "Step 5.1 wrongly refers to the full k=0 event. This is a local event-reference defect: step 3.1 directly yields the claimed positive-support projection threshold on {selected S, squared error > 2n tau^2 s+t}. Replaced the reference by that explicit event; the rank bound and penalty leave a summable (ed)^(-k) support factor.",
    "evidence_path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u18.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose_record",
    "id": "cex-collinear-design-coefficient-risk-unidentifiable",
    "run": "mathematical-statistics-foundations-37",
    "phase": "initial",
    "round": 1,
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "facts-block",
    "reason": "F3 overstated its supplier, which assumes integrable random variables. This is a routine missing case split, not a false lower bound: an infinite risk immediately exceeds 1/2, and otherwise both losses and their sum are integrable, so the cited linearity and monotonicity give R1+R2 >= 1. Corrected F3 and supplied that split.",
    "evidence_path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u18.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose_record",
    "id": "ex-orthogonal-sequence-sparse-regression",
    "run": "mathematical-statistics-foundations-37",
    "phase": "initial",
    "round": 1,
    "severity": "fatal",
    "disposition": "fixed",
    "location": "statement",
    "reason": "No original hypothesis related the observations to the specified noise. With sigma^2=1, independent Rademacher noise satisfies the stated covariance and proxy, yet unrelated deterministic data Y=(2,0) produces normalized fitted error 2, outside the claimed [1/2,1] interval. Added Y=X theta*+epsilon=epsilon to Example and Given, preserving the intended model and bounds. Also supplied exact expectation prerequisites for the maximum calculation.",
    "evidence_path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u18.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "propose_note",
    "ids": [
      "thm-integration-against-a-density",
      "prop-order-and-scalar-rules-for-the-nonnegative-integral",
      "cor-additivity-of-the-nonnegative-lebesgue-integral"
    ],
    "disposition": "digest_alert_interface_already_corrected",
    "reason": "All three current published Statements explicitly bind an arbitrary measure space (X,A,mu). The originally reported missing-ambient-space clauses are absent from the current interfaces; this observation is not an independent audit or a new published repair. No published consumer defect discovered in these assigned proofs.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose_owner_route",
    "id": "thm-fano-packing",
    "disposition": "outside_lane_alert",
    "location": "statement",
    "affected_use": "Facts A1 and Proof steps 1.1 and 2.2 invoke AC for Radon–Nikodym densities, but ## Statement and Given omit that qualification.",
    "minimality": "Carry the existing AC proof assumption into the item interface under its owning lane and inspect direct uses only if that Statement changes.",
    "reason": "Confirmed the exact current Statement, A1, and the complete local proof. This draft supplier lies outside unit 18; no edit or assigned adjudication performed. The assigned repairs do not invoke Fano.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u19-minimax-map",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:31:52.212Z",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-minimax-squared-operator-risk",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "19",
      "source": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u19.json",
      "model": "gpt-6-luna",
      "context_sha256": "12bcd04b6981a911400bbc223d5b7c9d73c32863e6735e8ddd37d8420631a23f",
      "post_sha256": "68390950b1c23e99d0b10329e1298224537d838ab784ea31bc2db9c493174de2",
      "reason": "The second experiment introduces a distinct family P but only the first family Q has a specified matrix parameter. Its Sigma(P) and hence R_n,P are unbound. Explicitly specifying a matrix parameter for every P repairs this definition-binding defect without changing the loss, estimator class, product sample law, or empty-class convention.",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u19-lasso-norm-citation",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:31:52.212Z",
      "class": "accuracy",
      "subclass": "citation-misattributed",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "thm-lasso-basic-inequality",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "19",
      "source": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u19.json",
      "model": "gpt-6-luna",
      "context_sha256": "69fc934ade2ac5c176795c9a1a7cff5fce1b965ffc6e83cfd218dcc34ef85155",
      "post_sha256": "357eef44dfe26ef549c3991544fcaa8e1676784bc7df53ce97cc1d73df5e312d",
      "reason": "F3 misattributes the coordinate norm formula and reverse triangle inequality to the Lasso objective definition. The formula is explicitly supplied by the already declared restricted-eigenvalue definition, and the required inequality follows from |theta*_j| <= |hat theta_j|+|Delta_j| on S and theta*_j=0 off S. Corrected the citation and supplied this coordinate derivation. The theorem and its constants were sound; this routine citation/presentation defect was nonfatal.",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u19-incoherence-necessity",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:31:52.212Z",
      "class": "accuracy",
      "subclass": "false-or-overstrong-statement",
      "severity": "fatal",
      "location": "statement",
      "subject": "thm-lasso-prediction-and-l1-error-under-incoherence",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "19",
      "source": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u19.json",
      "model": "gpt-6-luna",
      "context_sha256": "731cde953d83a28c5f5c19a204db8d9246769b6eb417eccd7cc368b7127fc71a",
      "post_sha256": "2d2f192ac2a7ebb7f6a745c0ec423d07eef1379cc255282a86c6d9d7c95419a4",
      "reason": "The Statement's literal necessity claim for its incoherence premise is false. With n=2,d=s=1, zero noise and Gram 4/5, incoherence fails since 1/5>1/14, but the basic inequality gives |Delta|<=15tau/4 and prediction loss<=45tau²/4, yielding both displayed bounds. Replaced the false claim with sufficiency and the precise unrestricted-design coefficient caveat, and proved both using this scalar witness and X=0. The original sufficient-condition rates, constants and probability claim remain intact.",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route-existing-step4-concern",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u19-stale-covariance-remark",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:31:52.212Z",
      "class": "accuracy",
      "subclass": "false-or-overstrong-statement",
      "severity": "nonfatal",
      "location": "remark",
      "subject": "cex-thresholded-sparse-covariance-rate-unbounded-at-superexponential-dimension",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "open",
      "batch": "19",
      "source": "research/mathematical-statistics-foundations-37-batch-19-step5-context.json",
      "snippet": "The current planned theorem uses only the lower dimension condition",
      "reason": "Confirmed the digest's presentation concern against the current final Remark. The current thm-thresholded-sparse-covariance-minimax-rate already has a capped equivalence; the counterexample's uncapped claim and proof remain sound. Route the minimal historical-wording correction to this frontier item's owner; it is outside this assignment and was not edited.",
      "route": "frontier owner for batch 19; separate presentation repair, not a defect propagated by the minimax map clarification",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain-existing-owner-route",
    "item": "thm-dominated-convergence",
    "status": "already-repaired-by-owner",
    "affected_use": "Batch-19 Step-4 alert 0 concerned the unbound ambient measure in the published theorem's Statement, Given and proof 1.1; its consumers explicitly supply probability spaces.",
    "invalidated_claim": "No currently invalidated assigned claim: current Statement now binds an arbitrary measure space (X,A,mu), and Given binds the same space.",
    "minimality": "Retain the existing owner repair route; no published edit, independent acceptance, Step-5 judgment, rejudge or gate is added.",
    "evidence": "research/mathematical-statistics-foundations-37-step4-published-alert-routes.json, source_batch 19, alert_index 0, disposition repaired-published-supplier; current items/thm-dominated-convergence.md Statement and Given explicitly bind (X,A,mu).",
    "reason": "Read the exact current binding and the batch-19 owner-route entry. The digest's published declaration alert is already repaired and routed; this observation is limited to that correction and is not a whole-item audit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u2-scalar-facts",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:25:18.815436+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-procedure-action-law-is-measurable",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "2",
      "summary": "F13 incorrectly expanded real-valued scalar closure to all nonnegative extended-valued functions. Actual proof scalar products involve only finite simple coefficients and finite kernel evaluations, so the defect is nonfatal. Restricted F13 to supported scalar closure, retaining extended-valued increasing limits. Also corrected F8 to distinguish positive homogeneity from the zero-function integral. Statement and proof steps are unchanged.",
      "evidence": [
        {
          "path": "items/lem-procedure-action-law-is-measurable.md",
          "note": "Corrected Facts F8/F13; step 1.2 uses finite coefficients and K(x,B_j) in [0,1]; step 2.1 uses finite sums only."
        },
        {
          "path": "items/prop-closure-properties-of-measurable-functions-used-by-the-integral.md",
          "note": "Statement clauses 1, 2, 5 support finite sums, scalar multiplication of real-valued functions and extended-valued increasing limits."
        },
        {
          "path": "items/prop-order-and-scalar-rules-for-the-nonnegative-integral.md",
          "note": "Statement clause 2 supplies positive homogeneity and integral zero on the zero function separately."
        },
        {
          "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u2.json",
          "note": "Current adjudication, completed review hashes and successful focused checks."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u2.json",
          "obligation": "initial:1:2:lem-procedure-action-law-is-measurable:gpt-6-luna:e4da9e9b2300648e09aeda8d6608b19f23d2084429e36195e1cd66ac38fdb7cf"
        }
      ],
      "repair_cost": "inline-fix",
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step5-adjudicator.md"
      }
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No new defect in a published supplier or published consumer was found. This repair corrects only the assigned draft Facts block and leaves its Statement unchanged; draft-only repair notes belong in this run report."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u20-finite-class-f1",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:23:18.716278+00:00",
      "class": "accuracy",
      "subclass": "citation-truncated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "ex-finite-class-m-estimator-consistency",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "20",
      "group": "alpha-adjudicate-u20",
      "repair_confidence": 1,
      "repair_cost": "inline-fix",
      "adjudication_ref": [
        "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u20.json#decisions:ex-finite-class-m-estimator-consistency"
      ],
      "evidence": [
        {
          "path": "items/ex-finite-class-m-estimator-consistency.md",
          "note": "F1 omitted the finite measurable o_P(1) gap requirement from its approximate-optimization restatement. Verification 1.1 proves exact attainment and uses no approximate branch; replaced F1 by the exact maximizing equality supplied by def-m-estimator. No Example, Statement, Definition, proof-step, dependency or contract change. Frozen guard a51e22b1f0fdad512996219a4a93ccd6e829522b6cc4e977ee2030d2550ccda7; repaired guard c787824cfa32ee63f7fab62cf81efbf49981996dc93ddd45e34ecb2fe3731ab9."
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
    "defect_id": "msf37-step5-u21-counterexample-sufficient-hypothesis",
    "run": "mathematical-statistics-foundations-37",
    "at": "2026-10-14T12:25:16.503517+00:00",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "severity": "nonfatal",
    "location": "facts-block",
    "subject": "cex-continuity-alone-does-not-give-delta-method",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "repair_cost": "inline-fix",
    "item_sha256": "1cafd8fc0ecfc4ba4d4194777dd0cfac7d0718e95f1ed480d3e378e533a1ce1d",
    "post_sha256": "e3589331ba0bab1441940a8b197e0a2d58f31164b92af15feccc28cb613afa57",
    "adjudication_ref": [
      {
        "id": "cex-continuity-alone-does-not-give-delta-method",
        "model": "gpt-6-luna",
        "context_sha256": "c5344ee7c0be153feeb950d57e249a5ea6c9a4acd4aa546b4dd1373418e74170",
        "item_sha256": "1cafd8fc0ecfc4ba4d4194777dd0cfac7d0718e95f1ed480d3e378e533a1ce1d"
      }
    ],
    "evidence": [
      {
        "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u21.json",
        "note": "F1 incorrectly describes a sufficient expansion hypothesis as necessary. The refutation itself does not need that necessity claim: sqrt(n)|T_n|=1, whereas aZ is either zero or has two distinct atoms. Corrected F1 and also restricted T_n=Z/sqrt(n) to n>=1, repairing the same omitted-index defect as in the examples. Both are nonfatal to the valid positive-index refutation; no claim or dependency is weakened."
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "msf37-step5-u21-log-transformation-delta-method-positive-index",
    "run": "mathematical-statistics-foundations-37",
    "at": "2026-10-14T12:25:16.503517+00:00",
    "class": "accuracy",
    "subclass": "undefined-notation",
    "severity": "nonfatal",
    "location": "statement",
    "subject": "ex-log-transformation-delta-method",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "repair_cost": "inline-fix",
    "item_sha256": "2eb7305bea0a0b23757723e078c4b7e2c32b43cf3e12913b66c5f07ed6ddfa2e",
    "post_sha256": "f945ecdca208147cffca7a081ad8dc68b4008da2f7055d94603c3716e0b0f179",
    "adjudication_ref": [
      {
        "id": "ex-log-transformation-delta-method",
        "model": "gpt-6-luna",
        "context_sha256": "a341fd3559b579b9f686281827b1a63d0b23629e3ce2f6b8fd01536b1d7c356f",
        "item_sha256": "2eb7305bea0a0b23757723e078c4b7e2c32b43cf3e12913b66c5f07ed6ddfa2e"
      }
    ],
    "evidence": [
      {
        "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u21.json",
        "note": "The zero-based default leaves Z/sqrt(0) undefined. Explicitly indexing the example by n>=1 repairs this nonfatal convention omission without changing its positive-index construction or limit. T_n>=1/2 always; for n>=4, sqrt(n)(T_n-1)=Z exactly; the Borel extension agrees locally with log and has derivative 1 at the target, so the cited sufficient delta hypothesis holds."
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "msf37-step5-u21-ratio-delta-method-positive-index",
    "run": "mathematical-statistics-foundations-37",
    "at": "2026-10-14T12:25:16.503517+00:00",
    "class": "accuracy",
    "subclass": "undefined-notation",
    "severity": "nonfatal",
    "location": "statement",
    "subject": "ex-ratio-delta-method",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "repair_cost": "inline-fix",
    "item_sha256": "bd3a1a1654f26ec96d77ec7f2bdf7e1915adbc7930bbb43afc0dabe6ed314989",
    "post_sha256": "3407eaa132f68af2311addbd80325b6619a5273dfedba41ce6b76de601220148",
    "adjudication_ref": [
      {
        "id": "ex-ratio-delta-method",
        "model": "gpt-6-luna",
        "context_sha256": "f776a3005d9313ad37269635a98275f5eae3d324fd83885a6a19b9e78f2ea932",
        "item_sha256": "bd3a1a1654f26ec96d77ec7f2bdf7e1915adbc7930bbb43afc0dabe6ed314989"
      }
    ],
    "evidence": [
      {
        "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u21.json",
        "note": "The default n=0 makes n^(-1/2) undefined. Explicit n>=1 repairs this nonfatal index omission while retaining the original ratio and limit. The denominator is at least 1 on that domain. The displayed exact remainder equals -(2u-v)v/[4(2+v)] and is O(u^2+v^2) for |v|<1, so the derivative is u/2-v/4; its four equal-mass values have mean zero and variance 5/16."
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "msf37-step5-u21-second-order-delta-method-quadratic-positive-index",
    "run": "mathematical-statistics-foundations-37",
    "at": "2026-10-14T12:25:16.503517+00:00",
    "class": "accuracy",
    "subclass": "undefined-notation",
    "severity": "nonfatal",
    "location": "statement",
    "subject": "ex-second-order-delta-method-quadratic",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "repair_cost": "inline-fix",
    "item_sha256": "3b212f1937f9c19028cd9102101434bd5840ea61c592fa8aa225487671a48e0f",
    "post_sha256": "01eac3c43e1e4b022971e8a0d2afa51d03ab4e7d7e15adc7e2227fd92a26aa8c",
    "adjudication_ref": [
      {
        "id": "ex-second-order-delta-method-quadratic",
        "model": "gpt-6-luna",
        "context_sha256": "f0a6d76aa760073cda86ebd2fe766d92b8c1fc7e1bb2af6e34b3d577850ce057",
        "item_sha256": "3b212f1937f9c19028cd9102101434bd5840ea61c592fa8aa225487671a48e0f"
      }
    ],
    "evidence": [
      {
        "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u21.json",
        "note": "At the zero-based default index T_0=Z/sqrt(0) is undefined and sqrt(0) is not a positive rate. Explicit n>=1 repairs this nonfatal missing convention. On all admitted indices sqrt(n)T_n=Z, the globally Borel square has A=0 and H[u,v]=2uv with zero quadratic remainder, and nT_n^2=Z^2 exactly. Squaring the given three atoms yields masses 1/2 at 0 and 2."
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "msf37-step5-u21-counterexample-positive-index",
    "run": "mathematical-statistics-foundations-37",
    "at": "2026-10-14T12:25:16.503517+00:00",
    "class": "accuracy",
    "subclass": "undefined-notation",
    "severity": "nonfatal",
    "location": "proof-step",
    "subject": "cex-continuity-alone-does-not-give-delta-method",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "repair_cost": "inline-fix",
    "evidence": [
      {
        "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u21.json",
        "note": "The Counterexample construction also divided by sqrt(n) without excluding zero. Added n>=1; both finite-law identities and the refutation remain unchanged."
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_routing",
    "defect_id": "msf37-step5-u21-delta-peano-hessian-identification",
    "run": "mathematical-statistics-foundations-37",
    "at": "2026-10-14T12:25:16.503517+00:00",
    "class": "accuracy",
    "subclass": "false-or-overstrong-statement",
    "severity": "fatal",
    "location": "statement",
    "subject": "thm-first-and-second-order-delta-method-for-random-vectors",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "open",
    "scope": "outside-assigned-lane; draft original-frontier supplier",
    "route": "frontier owner; no edit or adjudication by unit 21",
    "affected_use": "For scalar-valued $g$, $H$ is the usual Hessian bilinear form.",
    "invalidated_claim": "A scalar quadratic Peano expansion need not give an existing classical Hessian. Take g(0)=0 and g(h)=h^3 sin(1/h) for h!=0: g is Borel, g'(0)=0 and g(h)=o(h^2), so H=0 meets the premises, but g'(h)/h=3h sin(1/h)-cos(1/h) has limits -1 and 1 along reciprocal even and odd multiples of pi. Thus g''(0) does not exist.",
    "minimality": "Qualify only the classical-Hessian identification, for example when g is C^2 near the target; preserve both Peano-based delta conclusions and their proofs. Unit-21 examples use only the valid expansion clauses, and their log/ratio/square maps are smooth near their targets. The counterexample proves its finite-law obstruction directly.",
    "raw_sha256": "c15cbfd27d65bf02b56404c42852df91f3a505fdf045c2c655d7b4de71dccd02",
    "evidence": [
      {
        "path": "items/thm-first-and-second-order-delta-method-for-random-vectors.md",
        "note": "Statement final paragraph; independently checked elementary counterexample from batch-21 Step-4 digest."
      },
      {
        "path": "research/mathematical-statistics-foundations-37-batch-21-step5-context.json",
        "note": "concerns[0]; evidence verified against current supplier."
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_routing",
    "defect_id": "msf37-step5-u21-mle-local-radius-notation",
    "run": "mathematical-statistics-foundations-37",
    "at": "2026-10-14T12:25:16.503517+00:00",
    "class": "accuracy",
    "subclass": "undefined-notation",
    "severity": "nonfatal",
    "location": "proof-step",
    "subject": "thm-regular-mle-asymptotic-linearity-and-normality",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "open",
    "scope": "outside-assigned-lane; draft original-frontier item",
    "route": "frontier owner; no edit or adjudication by unit 21",
    "affected_use": "Step 2.2 quantifies c,delta>0 but uses ||t||<=delta_0; step 4.1 begins Reduce delta_0 if needed and then puts delta=delta_0/2.",
    "invalidated_claim": "The intended positive local radius delta_0 is not bound by the displayed quantifier. This focused notation finding is not a whole-item mathematical audit.",
    "minimality": "Change the quantified radius in step 2.2 from delta to delta_0, retaining step 4.1 and all estimates.",
    "raw_sha256": "c369353904249d3b9be624c51f75a32a8c7737c98901483de5754941dc92623d",
    "evidence": [
      {
        "path": "items/thm-regular-mle-asymptotic-linearity-and-normality.md",
        "note": "2.2 The squared Hellinger distance $H^2(P_{\\theta_0+t},P_0)=\\int(\\sqrt{p_{\\theta_0+t}}-\\sqrt{p_{\\theta_0}})^2d\\mu$ equals $\\tfrac14t^TIt+o(\\|t\\|^2)$ by step 1.1. The affinity $\\rho_t=\\int\\sqrt{p_{\\theta_0+t}p_{\\theta_0}}d\\mu=1-H^2/2$. On $S_0$ let $Y=\\sqrt{p_{\\theta_0+t}/p_{\\theta_0}}$, so $\\mathbb E_0Y=\\rho_t$. For $y>0$, $\\log y\\le\\log\\rho_t+(y-\\rho_t)/\\rho_t$ follows from $z-1-\\log z\\ge0$ for $z=y/\\rho_t$, since this function has derivative $1-1/z$ and its minimum is $0$ at $z=1$; integrating gives $P_0f_t=2\\mathbb E_0\\log Y\\le2\\log\\rho_t$. Since $\\log(1-x)\\le-x$ for $0\\le x<1$ because $-x-\\log(1-x)$ has derivative $x/(1-x)\\ge0$ and value $0$ at $x=0$. Thus $2\\log\\rho_t\\le-H^2$, so for some $c,\\delta>0$, $P_0f_t\\le-c\\|t\\|^2$ whenever $\\|t\\|\\le\\delta_0$. [step 1.1, algebra]"
      },
      {
        "path": "items/thm-regular-mle-asymptotic-linearity-and-normality.md",
        "note": "4.1 Reduce $\\delta_0$ if needed so the log envelope holds on the radius $2\\delta_0$ ball, and put $\\delta=\\delta_0/2$. Consistency makes $\\hat\\theta_n$ lie within $\\delta$ of $\\theta_0$ with probability tending to one. On the dyadic shells $r_j\\le\\|t\\|\\le2r_j$ with $r_j=2^jM/\\sqrt n$, exact maximization and $\\ell_n(\\hat\\theta_n)\\ge\\ell_n(\\theta_0)$ require $\\sqrt n\\sup_{\\|t\\|\\le2r_j}|\\mathbb G_nf_t|\\ge c n r_j^2$. The expectation bound in step 3.1 and Markov's inequality [F11] bound the probability of this event by $C/(\\sqrt n r_j)=C/(2^jM)$. Summing the geometric series and then letting $M\\to\\infty$ proves $\\sqrt n(\\hat\\theta_n-\\theta_0)=O_{P_0}(1)$ using [F4]. The argument used only consistency, feasibility of $\\theta_0$, and the maximizing inequality; it therefore proves the same bound for any exact maximizer over a subset containing $\\theta_0$. [A3, F4, F11, step 3.1, step 2.2, algebra]"
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published-item defect was found in this assigned review. The digest MLE alert and Peano/Hessian concern name current draft items, so their owner routes belong in the canonical defect ledger and this run report; no published ledger row or published repair is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "def-wald-score-likelihood-ratio-statistics",
    "class": "accuracy",
    "subclass": "undefined-notation",
    "severity": "fatal",
    "location": "definition",
    "caught_at_stage": "5-adjudicate",
    "disposition": "fixed",
    "reason": "In the N(mu,1) model with true mu=0, point null {0}, and local chart V=(-1,1), the global exact MLE bar X lies outside V with positive probability. Then its tested coordinate and W_n were undefined. The constrained score has the analogous chart-domain issue. W_n and S_n now have respective off-chart zero extensions, preserving on-chart formulas and global LR. Under consistency these events vanish in probability.",
    "adjudication_ref": [
      "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u22.json"
    ],
    "historical_distinction": "This chart-domain defect differs from msf37-b22-global-maximizer-clarity, which fixed ambiguity between local/global maximization. Preserve that historical row and its severity unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "thm-wald-score-likelihood-ratio-asymptotic-chi-square",
    "class": "accuracy",
    "subclass": "citation-inaccurate",
    "severity": "nonfatal",
    "location": "facts-block",
    "caught_at_stage": "5-adjudicate",
    "disposition": "fixed",
    "reason": "The Statement already assumes AC, so no missing hypothesis invalidates the calibration. However A3 and Proof 4.1 incorrectly restrict its uses to F7-F9, although F2 assumes AC for density representatives and F3 explicitly assumes AC. Both accounting sentences now include F2 and F3. Proof 3.1 also states why consistency makes the repaired off-chart conventions asymptotically immaterial.",
    "adjudication_ref": [
      "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u22.json"
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "propose_audit_note",
    "subject": "batch-22 Step-5 unit-22 consumer inventory",
    "reason": "The repaired definition has exactly three direct item dependency/reference consumers, all draft frontier items: the calibration theorem, exact normal example, and boundary-null counterexample. Their affected uses are accounted for in downstream_reviews. No published consumer repair or outside-frontier supplier-interface event was found. The digest Gaussian-example alert is a draft frontier item in batch 23, not a published repair.",
    "published_repairs": [],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "targets": [
      "research/defect-ledger.jsonl",
      "research/DEFECT-LEDGER.md",
      "research/published-consumer-supplier-ledger.md"
    ],
    "id": "lem-boundary-of-convex-set-is-lebesgue-null",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Repaired F2 using the open subset contained in the closed simplex and made its containment in C explicit. Checked affine-span nullity and finite-volume contractions. Statement and countable-choice assumption unchanged.",
    "post_sha256": "46fa760f109b0791f2e1c239303f5a299420580e492e899c6ebf7ffd1c16ced3",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "scope": "assigned draft original frontier; no published carrier changed",
    "audit_status": "adjudicated and locally repaired; independent rejudgment remains controller-owned"
  },
  {
    "targets": [
      "research/defect-ledger.jsonl",
      "research/DEFECT-LEDGER.md",
      "research/published-consumer-supplier-ledger.md"
    ],
    "id": "lem-compact-uniform-lan-posterior-approximation",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Derived eventual uniform integrability from matching means and clipped weak expectations. Checked predictive tails, positive compact denominators, singular K and zero-denominator conventions. Statement unchanged.",
    "post_sha256": "ae723a9d77a569f25583a78ac2a4f74313b64a2511269572d4cbd6467c610e30",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "scope": "assigned draft original frontier; no published carrier changed",
    "audit_status": "adjudicated and locally repaired; independent rejudgment remains controller-owned"
  },
  {
    "targets": [
      "research/defect-ledger.jsonl",
      "research/DEFECT-LEDGER.md",
      "research/published-consumer-supplier-ledger.md"
    ],
    "id": "thm-le-cam-third-lemma",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Corrected F1 and supplied the truncation argument for UI and expectation transfer. Explicit product-density suppliers justify the Gaussian tilt, including singular covariance. Statement unchanged.",
    "post_sha256": "901ffdc827771c7b6c536146e834685b533eab912526bb812121a41b9157d653",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "scope": "assigned draft original frontier; no published carrier changed",
    "audit_status": "adjudicated and locally repaired; independent rejudgment remains controller-owned"
  },
  {
    "targets": [
      "research/defect-ledger.jsonl",
      "research/DEFECT-LEDGER.md",
      "research/published-consumer-supplier-ledger.md"
    ],
    "id": "lem-bowl-shaped-loss-has-centered-lipschitz-minorants",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Derived Gaussian nullity of convex boundaries using the independent-coordinate density and invertible linear change of variables. Checked distance minorants, individual centering and grid error. Statement unchanged.",
    "post_sha256": "5641998a373031f9fa65be70b5129c90c2f0a0f8e569c4d15d83a79586e31dfc",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "scope": "assigned draft original frontier; no published carrier changed",
    "audit_status": "adjudicated and locally repaired; independent rejudgment remains controller-owned"
  },
  {
    "targets": [
      "research/defect-ledger.jsonl",
      "research/DEFECT-LEDGER.md",
      "research/published-consumer-supplier-ledger.md"
    ],
    "id": "lem-finite-priors-approximate-gaussian-shift-bayes-risk",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Handled dimension zero separately and derived the positive-dimension density. Checked uniform TV continuity, measurable finite partitions, prior tails and rule-uniform risk bounds. Statement unchanged.",
    "post_sha256": "5e6724628f3719ba8566db3cda779f0473ca0d5837a16be1af818e89c1d8f089",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "scope": "assigned draft original frontier; no published carrier changed",
    "audit_status": "adjudicated and locally repaired; independent rejudgment remains controller-owned"
  },
  {
    "targets": [
      "research/defect-ledger.jsonl",
      "research/DEFECT-LEDGER.md",
      "research/published-consumer-supplier-ledger.md"
    ],
    "id": "thm-qmd-implies-lan-for-iid",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Handled dimension zero directly; positive dimension uses the centered square-integrable score and the correctly stated CLT. Verified normalized-product supplier and proxy-LAN conclusions. Statement unchanged.",
    "post_sha256": "36188e7ad40a4d30fe43768b91cd1a6e724e69adecaa5329697c80e7289684bd",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "scope": "assigned draft original frontier; no published carrier changed",
    "audit_status": "adjudicated and locally repaired; independent rejudgment remains controller-owned"
  },
  {
    "targets": [
      "research/defect-ledger.jsonl",
      "research/published-consumer-supplier-ledger.md"
    ],
    "id": "lem-finite-prior-lan-bayes-envelope-convergence",
    "status": "owner-routed",
    "severity": "nonfatal",
    "route": "ordinary frontier owner, batch 23; unassigned item left unchanged",
    "affected_use": "items/lem-finite-prior-lan-bayes-envelope-convergence.md Proof 3.1: The measurable selector from step 1.1 has posterior risk at most this envelope plus epsilon. Step 1.1 selects with unnormalized objective <= F(l)+epsilon.",
    "invalidated_claim": "The pointwise posterior error is epsilon/U_n, and need not be <= epsilon when 0<U_n<1. This does not invalidate the Bayes-value conclusion.",
    "minimality": "Replace only the erroneous posterior-error sentence: multiply the actual bound (F(l)+epsilon)/U_n by U_n and integrate against the base probability, obtaining integrated error <= epsilon. No Statement change or additional prerequisite is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "targets": [
      "research/defect-ledger.jsonl",
      "research/published-consumer-supplier-ledger.md"
    ],
    "id": "ex-gaussian-shift-lan-and-regular-sample-mean",
    "status": "owner-routed",
    "severity": "nonfatal",
    "route": "ordinary frontier owner, batch 23; unassigned item left unchanged",
    "affected_use": "items/ex-gaussian-shift-lan-and-regular-sample-mean.md F7 and Proof 1.1: (g_t-g_0)/t = integral from 0 to 1 of partial_theta g_{rt} dr is attributed solely to thm-ftc-first-part.",
    "invalidated_claim": "The first FTC supplies differentiation of an integral function, not integration of an already given derivative to its endpoint difference. The smooth Gaussian calculation itself is sound.",
    "minimality": "Cite the second FTC for the continuously differentiable scalar function theta -> g_theta(x), retaining the oriented interval/substitution for negative t; update its dependency and owning contract. Preserve the Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-uniform-endpoint-mle",
    "outcome": "false_positive",
    "reason": "The rejection is false: cex-uniform-maximum-has-n-rate-not-root-n Counterexample step 1.2 derives P_theta{n(theta-X_(n))>t}=(1-t/(n theta))^n for 0<=t<n theta, with limit exp(-t/theta); step 2.1 explicitly proves convergence to the continuous CDF 1-exp(-t/theta), i.e. Exp(rate 1/theta). These are proved conclusions of the cited counterexample under exactly the example's theta>0 IID uniform hypotheses, not an inference from merely negating its Statement refuted. F2 and Verification step 2.1 therefore use a locally proved supplier conclusion accurately.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "entry": {
      "defect_id": "msf37-step5-initial-r1-u26-f2-interface",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:23:28.295894+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "thm-local-linear-conditional-bias",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "26",
      "group": "batch-26",
      "adjudication_ref": [
        "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u26.json#decisions/0"
      ],
      "evidence": [
        {
          "path": "items/thm-local-linear-conditional-bias.md",
          "note": "F2 omitted the supplier's global-density-bound or compact-L-support restriction on its arbitrary integrable-L extension. This is nonfatal: steps 1.1 and 3.1 use the valid three-moment matrix conclusion, while step 2.1 explicitly localizes the rapid-tail case and bounds its far remainders separately using integral |m|f <= E|Y|. Restored the exact restriction in F2 without changing the Statement or proof."
        },
        {
          "path": "items/lem-local-linear-normalized-moment-matrix-converges-in-probability.md",
          "note": "Statement restricts arbitrary integrable L to globally bounded f or compact support of L; proof step 3.1 separately covers only the three matrix moments under rapid tails."
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "msf37-step5-initial-r1-u27-1",
    "run": "mathematical-statistics-foundations-37",
    "subject": "def-natural-cubic-smoothing-spline",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "statement",
    "finding": "The displayed sum correctly retains every observation, whereas the last sentence incorrectly attributes a distinct-input data convention to the natural-spline definition. Clarified that repeats affect residual weights but introduce no extra knots; AC, two distinct locations, lambda>0 and Sobolev evaluations are unchanged. The existence proof step 1.2 already groups all responses by location, and the one-input counterexample uses the unchanged criterion.",
    "evidence": {
      "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u27.json",
      "anchor": "decisions/0"
    },
    "independent_repair_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "msf37-step5-initial-r1-u27-2",
    "run": "mathematical-statistics-foundations-37",
    "subject": "thm-spline-polynomial-reproduction",
    "severity": "fatal",
    "disposition": "fixed",
    "location": "proof-step",
    "defect_type": "logic",
    "finding": "The dual identity is false when its denominator is zero (p=1 and xi_j=xi_{j+1} gives y-x=0). Source Theorem 5 explicitly requires a positive span. Repair step 2.1 applies it only for indices m-d+1 through m, whose spans contain the nonempty cell. Step 3.2 now derives the derivative formula using the local dual basis and positive spans, avoiding invalid zero-span cancellation. Truncated-power dimension, multiplicity smoothness, local independence and endpoint limits establish the unchanged full basis Statement.",
    "evidence": {
      "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u27.json",
      "anchor": "decisions/1"
    },
    "independent_repair_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "msf37-step5-initial-r1-u27-3",
    "run": "mathematical-statistics-foundations-37",
    "subject": "def-series-spline-least-squares",
    "severity": "fatal",
    "disposition": "fixed",
    "location": "statement",
    "defect_type": "logic",
    "finding": "At n=0 the stated n^{-1} training loss is undefined and the cited fixed-design definition requires n>=1. Added n,K>=1 and inputs in the basis domain. Also licensed the arbitrary supplied spline basis already required by the assigned risk theorem, preserving the canonical B-spline basis as an explicit special case. Projection onto the specified design remains unique at rank deficiency, and nearest-point comparison supplies coefficient minimizers without choosing a coefficient version.",
    "evidence": {
      "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u27.json",
      "anchor": "decisions/2"
    },
    "independent_repair_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "msf37-step5-initial-r1-u27-4",
    "run": "mathematical-statistics-foundations-37",
    "subject": "thm-series-training-risk",
    "severity": "fatal",
    "disposition": "fixed",
    "location": "proof-step",
    "defect_type": "dependency_citation",
    "finding": "The frozen estimator definition specified a B-spline basis while A3 and F1 use an arbitrary spline basis, leaving the identification unlicensed. The assigned supplier now accepts the very specified spline basis (retaining B-splines), and F1 explicitly binds the fit to it. The Statement is unchanged. Checked conditional product-kernel construction, Borel rank-stratified projection, trace<=K, exact orthogonal noise/bias split and integrable deterministic approximation. Also clarified that the first design pi-lambda extension fixes a response rectangle and declared the monotone-convergence supplier actually used for kernel countable additivity.",
    "evidence": {
      "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u27.json",
      "anchor": "decisions/3"
    },
    "independent_repair_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "msf37-step5-initial-r1-u27-5",
    "run": "mathematical-statistics-foundations-37",
    "subject": "ex-uniform-mesh-linear-spline-approximation",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "proof-step",
    "finding": "Closed adjacent neighborhoods overlap at an interior knot, contradicting the stated M=1 pointwise overlap condition. Replaced them with disjoint left-closed/right-open cells and included 1 in the final cell. For continuous inputs, endpoint values and the cell maximum are determined by interior limits, proving a.e. locality and L-infinity stability. Explicitly fixed p=l=1 and q=infinity; each point lies in one neighborhood. The two Peano-kernel integrals still have total absolute mass (x-u)(v-x)/2<=h^2/8, so the original sharp error calculation is unchanged.",
    "evidence": {
      "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u27.json",
      "anchor": "decisions/4"
    },
    "independent_repair_review": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "reconcile-existing-alert",
    "subject": "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure",
    "disposition": "current-interface-sound",
    "finding": "The rejection-blind digest records omitted ambient measure-space hypotheses. The current published Statement now explicitly binds an arbitrary (X,A,mu), so that alert is repaired on the current carrier. The assigned consumer thm-series-training-risk step 1.1 uses mu=P_X^{otimes n} and the nonnegative Borel function kappa_n(x,B); all current supplier hypotheses are supplied. No published edit or independent whole-item audit performed here.",
    "affected_use": "items/thm-series-training-risk.md, F12 and proof step 1.1: A -> integral_A kappa_n(x,B) P_X^{otimes n}(dx).",
    "route": "owner maintenance/accounting; preserve original Step-4 alert and existing published repair evidence",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-tangent-space-is-closed-linear-subspace",
    "locus": "facts-block",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "finding": "F3 omitted zero inclusion from the linear-subspace definition; the empty subset exposes the inaccurate restatement. Step 1.1 already supplied zero, so the actual proof inference was sound.",
    "repair": "Added containing the zero vector to F3; Statement, numbered proof and exact contract citations unchanged.",
    "source_rejection": {
      "model": "gpt-6-luna",
      "context_sha256": "7c593f10e8eb95e15b7dd0bec4925322180bc2e91cfd7deca19159d0181894da"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-nuisance-tangent-space",
    "locus": "statement",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "finding": "Unconditional nuisance closed-space claim cited tangent-space interfaces requiring Countable Choice.",
    "repair": "Explicitly assumed Countable Choice, added its dependency, and synchronized owning metadata while preserving the designated-path and derivative conventions.",
    "source_rejection": {
      "model": "gpt-6-luna",
      "context_sha256": "5299c76220c5f20f9ba060b74682ba1b1d63f06692a52e3f2401d579a59b5049"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "semiparametric-models-and-tangent-spaces",
    "locus": "page-summary",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "finding": "Page summary described nuisance paths as holding the target fixed, whereas the Definition requires zero right derivative, compatible with t^2 variation.",
    "repair": "Replaced exact-constancy wording with designated paths with zero right derivative of the target.",
    "source_evidence": "research/mathematical-statistics-foundations-37-batch-28-step5-context.json concerns[0] verified against the current nuisance Definition."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record-interface-examination",
    "id": "def-nuisance-tangent-space",
    "finding": "Countable Choice interface restoration has exactly two direct item consumers, both draft original-frontier items already carrying the hypothesis; both uses remain sound. No published direct consumer or maintenance repair identified.",
    "consumers": [
      "def-nuisance-tangent-orthogonal-complement",
      "def-efficient-score"
    ],
    "status": "no-published-consumer-repair-required"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u29-mean-observable-evaluation",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:23:09.165895+00:00",
      "class": "accuracy",
      "subclass": "ill-typed-claim",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "ex-mean-functional-and-sample-mean-influence-curve",
      "caught_at_stage": "4-judge",
      "caught_by_role": "detector",
      "disposition": "fixed",
      "batch": "29",
      "source": "step5-v2-initial-r1-u29",
      "repair_cost": "inline-fix",
      "adjudication_ref": [
        {
          "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u29.json",
          "obligation": "ex-mean-functional-and-sample-mean-influence-curve:gpt-6-luna:3ecb79c3e4cff0db78e230ebd2d8a725828200af8ce2ea4621b0a956b06b09a3"
        }
      ],
      "evidence": [
        {
          "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u29.json",
          "note": "Step 3.1 subtracts the real mean from observations X_i in an arbitrary measurable space, so its displayed sum is undefined in general. F2 defines P_n f as the average of f(X_i); applying it to f=X-mu requires X(X_i)-mu. This is a logic defect, repaired without restricting the observation space."
        },
        {
          "path": "items/ex-mean-functional-and-sample-mean-influence-curve.md",
          "note": "Verification 3.1 now evaluates the observable at each sampled observation and uses the already-proved mean-zero L2 membership."
        }
      ]
    }
  },
  {
    "ledger": "defect",
    "id": "lem-common-law-forces-two-point-tail-loss-bound",
    "locus": "facts-block",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "F2 incorrectly attributed estimator and loss-section measurability to def-measurable-space, but both are explicit Statement hypotheses. Restricted F2 to the specified sigma-algebra and included the loss sections in Given. Composed sections yield measurable tail events even at an infinite threshold; separation makes their union the whole probability space, so finite subadditivity gives the 1/2 bound. This is a nonfatal fact-attribution defect; the Statement and Proof are unchanged."
  },
  {
    "ledger": "defect",
    "id": "lem-huber-contamination-mixtures-can-be-equalized-under-tv-threshold",
    "locus": "facts-block",
    "severity": "nonfatal",
    "status": "fixed",
    "reason": "F3 omitted the existence theorem hypotheses and F4 omitted the dominating measure and absolute-continuity hypotheses. Corrected both fact formulations. This is nonfatal to the argument: step 1.2 uses finite probability measures P_i and finite nu=P_0+P_1, proves P_i<<nu, and has AC in Given. Finite-valued nonnegative densities are therefore licensed; their difference is integrable, its positive and negative integrals both equal event-supremum TV, and the normalized parts and interpolation give probability-law witnesses. The zero-distance, epsilon=0 and epsilon=1 cases avoid division. Statement and Proof are unchanged."
  },
  {
    "ledger": "defect",
    "id": "def-contamination-robust-risk",
    "locus": "statement",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "Replacement expected and tail risks omitted the measurable-diagonal condition required by their coupling supplier. A two-point sample space with the indiscrete sigma-algebra is an allowed experiment, but its diagonal is not in the product sigma-algebra; hence the replacement model was invoked outside its domain. Added the condition locally to replacement risks, preserving all Huber laws and risk formulas. Measurable rules and loss sections yield measurable nonnegative losses and tail events, including t=+infinity. Finite product laws exist, and the identity coupling ensures a nonempty replacement supremum on its corrected domain. This is a fatal well-definedness defect of the original replacement interface, repaired without restricting Huber risks."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-absolutely-continuous-upper-quantile-exact-tail-mass",
    "disposition": "report_to_frontier_owner",
    "reason": "Confirmed the Step-4 digest concern against the current carrier: Statement omits Countable Choice, whereas Proof Given assumes it and F2 invokes the Countable-Choice-dependent published singleton-null supplier. This item is outside unit 33 ownership and was not edited. Its owner should provide a choice-free singleton-null argument or explicitly retain the axiom and examine any changed interface. The assigned trimmed-mean theorem explicitly assumes Countable Choice, so this mismatch does not invalidate its use.",
    "affected_use": "items/lem-absolutely-continuous-upper-quantile-exact-tail-mass.md: Proof Given and step 1.1 use F2, backed by prop-countable-subsets-of-rn-are-lebesgue-null; items/thm-univariate-trimmed-mean-under-replacement.md F1 and Statement retain Countable Choice.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "subject": "lem-projection-slab-uniform-deviation",
    "location": "facts-block",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "evidence": "F7 attributed rational coordinate approximation to a norm definition and Cauchy–Schwarz, neither of which establishes rational density or countability. The countable reduction in step 1.1 is essential to the measurable supremum. Added the established rational-density, rational-countability and norm-triangle suppliers and a quantitative, deterministic normalization argument; no statement changed."
  },
  {
    "ledger": "defect",
    "subject": "ex-block-sparse-huber-covariance-model",
    "location": "facts-block",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "evidence": "The eigenvalues 5/4, 3/4, 1, 1 and the single support {1,2} are correct. The proof omitted a direct citation to the definition of F_p(M) when inferring F_{4,2}(2) membership. This is a nonfatal definition/citation omission: the defining supplier exists through the block-class prerequisite, and no mathematical computation or claim fails. Added the direct bounded-spectrum dependency, quoted its definition in F1, and explicitly checked symmetry and dense membership before the sparse membership."
  },
  {
    "ledger": "defect",
    "subject": "lem-huber-covariance-ambient-action-tail-lower-bound",
    "location": "facts-block",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "evidence": "F6 uses the vector-norm triangle inequality, whereas the cited norm definition only defines a square root and points to its separate norm-axiom corollary. The matrix triangle argument is correct for all actions, including nonsymmetric ones; the omission is nonfatal and is repaired by adding the proved corollary as a direct dependency and deriving the unit-vector estimate explicitly in F6."
  },
  {
    "ledger": "defect",
    "subject": "lem-measurable-matrix-depth-maximizer-selection",
    "location": "facts-block",
    "outcome": "false_positive",
    "disposition": "false-positive",
    "evidence": "False positive after inspecting the complete cited supplier rather than only its headline Statement. In lem-matrix-depth-maximizer-exists-on-compact-classes, proof step 1.1 proves F_p(beta M) closed and bounded, hence compact; step 2.1 proves compactness of the finite-union sparse class; step 3.1 shows both classes contain zero. Taking M=c/beta gives exactly the K used here. These proved intermediate facts license compact K intersect Q in selector step 2.1 and the entry bound in step 4.1. The supplier Statement itself supplies compact argmax fibers for step 5.1, so no interface or proof repair is needed."
  },
  {
    "ledger": "published-consumer",
    "subject": "thm-dominated-convergence",
    "route": "owner/separate-maintenance",
    "disposition": "already-resolved-in-current-carrier",
    "affected_use": "items/lem-projection-slab-uniform-deviation.md F3 and proof step 1.1 apply dominated convergence to indicators on the Borel probability space (R^p,B(R^p),P).",
    "evidence": "The Step-4 digest alert reported an unbound measure space. The current published Statement explicitly begins: Let (X,A,mu) be an arbitrary measure space. All functions below have domain X. Thus the exact reported defect is absent now; no published item was edited or adjudicated by this unit. No new mathematical/audit acceptance of that outside repair is claimed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "mathematical-statistics-foundations-37-step5-initial-r1-u36-normal-carrier-interface",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-positive-trace-class-covariance-defines-hilbert-gaussian",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "36",
      "evidence": [
        {
          "path": "items/lem-positive-trace-class-covariance-defines-hilbert-gaussian.md",
          "note": "Step 1.2 used the countable-independent-copies statement to specify a product carrier. That supplier actually constructs product coordinates in its proof, but its interface promises only an independent family on a common probability space. Changed only the unnecessary carrier description and A1 wording; Gaussian-series construction is unchanged."
        }
      ],
      "adjudication_ref": [
        {
          "run": "mathematical-statistics-foundations-37",
          "phase": "initial",
          "round": 1,
          "id": "lem-positive-trace-class-covariance-defines-hilbert-gaussian",
          "model": "gpt-6-luna",
          "context_sha256": "9f4aa8462abea27af46ec60cf11c1d18d3ce59eb5558ab4510f15d087a38d2d8",
          "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u36.json"
        }
      ],
      "repair_cost": "inline-fix"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published carrier defect or changed supplier Statement/Definition was found. The published independent-copy supplier proof explicitly uses canonical product coordinates, and its stated common-space guarantee suffices for the repaired lemma."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "msf37-step5-initial-r1-u37-split-candidate-score-notation",
    "run": "mathematical-statistics-foundations-37",
    "at": "2026-10-14T12:28:30Z",
    "class": "accuracy",
    "subclass": "undefined-notation",
    "severity": "fatal",
    "location": "definition",
    "subject": "def-conformal-nonconformity-score-and-rank-pvalue",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "group-alpha",
    "disposition": "fixed",
    "batch": "37",
    "adjudication_ref": [
      {
        "id": "def-conformal-nonconformity-score-and-rank-pvalue",
        "model": "gpt-6-luna",
        "context_sha256": "17ee8831a5a049135457a2a933de94fe56e09a610c3640832928ccbac56e8143",
        "item_sha256": "5f34f2206bea60ed536a71513bbfa1d16eb661ded7658e0555e1a556f103cfd4"
      }
    ],
    "evidence": [
      {
        "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u37.json",
        "detail": "Decision and repairer review bind the original rejected tuple and the repaired split candidate-score interface."
      }
    ],
    "note": "Both split p-value outputs used R_i(y) and r that were defined only for full scoring. The explicit split notation now fixes calibration scores and evaluates the candidate using the same fixed h. All direct uses remain sound; no independent acceptance is claimed.",
    "repair_cost": "inline-fix",
    "introduced_at_stage": "unknown",
    "prevention": {
      "kind": "none",
      "ref": "No mechanical notation validator was introduced."
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u5-approximation",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:33:08Z",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "thm-countable-mixture-dominates-sigmafinite-dominated-family",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "source_tuple": {
        "id": "thm-countable-mixture-dominates-sigmafinite-dominated-family",
        "model": "gpt-6-luna",
        "context_sha256": "c0e03bd37a3b7d05a7b3084948b13083e110d224f303f95abc5be2cbb8e69f5f"
      },
      "evidence": "Proof 2.1: s-1/n had no value at n=0. Replaced by s-1/(n+1), explicitly n>=0; the error is positive and tends to zero.",
      "repair_cost": "inline-fix",
      "post_sha256": "772524e4900e2540a4a49bb6bb40aa35297119a8e89d9e24549ac5d83f5e15b5"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u5-choice-scope",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:33:08Z",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "thm-countable-mixture-dominates-sigmafinite-dominated-family",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "source_tuple": {
        "id": "thm-countable-mixture-dominates-sigmafinite-dominated-family",
        "model": "gpt-6-luna",
        "context_sha256": "c0e03bd37a3b7d05a7b3084948b13083e110d224f303f95abc5be2cbb8e69f5f"
      },
      "evidence": "A1 incorrectly described RN selection as countable, although Proof 2.1 selects p_theta for all parameters in a possibly uncountable family. Existing explicit AC suffices; A1 now accurately identifies this use.",
      "repair_cost": "inline-fix",
      "post_sha256": "772524e4900e2540a4a49bb6bb40aa35297119a8e89d9e24549ac5d83f5e15b5"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u5-dirac-property",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:33:08Z",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "cex-arbitrary-dominator-factorization-fails",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "source_tuple": {
        "id": "cex-arbitrary-dominator-factorization-fails",
        "model": "gpt-6-luna",
        "context_sha256": "788ab2bebbe9a8111048499b8d94ec5050ccfa750c99f665598e2d05e93c5818"
      },
      "evidence": "F5 treated def-dirac-measure as a proof of probability-measure status. F5 now states only the set-function formula; Proof 1.1 locally proves countable additivity and normalization, then the exact conditional identity.",
      "repair_cost": "inline-fix",
      "post_sha256": "20ce582ea79a68e503e1b73403599da1ebbd5ac6baf375f6b7fee8f78b5df069"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u5-finite-borel",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:33:08Z",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "cex-arbitrary-dominator-factorization-fails",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "source_tuple": {
        "id": "cex-arbitrary-dominator-factorization-fails",
        "model": "gpt-6-luna",
        "context_sha256": "788ab2bebbe9a8111048499b8d94ec5050ccfa750c99f665598e2d05e93c5818"
      },
      "evidence": "F2 asserted all finite measurable spaces are standard Borel. A two-point set with only the trivial sigma-field cannot be standard Borel because its points cannot be separated. F2 now confines the claim to finite sets with full sigma-fields and supplies the discrete-metric witness; the actual example satisfies it.",
      "repair_cost": "inline-fix",
      "post_sha256": "20ce582ea79a68e503e1b73403599da1ebbd5ac6baf375f6b7fee8f78b5df069"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u5-kernel-input",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:33:08Z",
      "class": "accuracy",
      "subclass": "ill-typed-construction",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "thm-discrete-likelihood-ratio-classes-are-minimal-sufficient",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "source_tuple": {
        "id": "thm-discrete-likelihood-ratio-classes-are-minimal-sufficient",
        "model": "gpt-6-luna",
        "context_sha256": "4666cb5c52bd23e36ac0c6d54e0419d25e3577ae9518a33726d747f23dcd2498"
      },
      "evidence": "Proof 1.1 instructed an arbitrary conditional-law assignment on off-support sample points although kernel inputs are quotient classes, all of positive mass. Every row is now defined by K(D,A)=sum_{x in A intersect D}w_D(x)/W_D. Off-support points use their already assigned class row; no new row is selected.",
      "repair_cost": "inline-fix",
      "post_sha256": "47bba55bba603f0b06467941618e639296dbff7fe88344cfd47b633337246467"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u5-minimality",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:33:08Z",
      "class": "accuracy",
      "subclass": "invalid-inference",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "ex-countable-likelihood-ratio-vector-on-point-mass-model",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "source_tuple": {
        "id": "ex-countable-likelihood-ratio-vector-on-point-mass-model",
        "model": "gpt-6-luna",
        "context_sha256": "f30b3d03d3fbff81d6499690e3d9a4c6f4549e2386e0ca1741b068b893925338"
      },
      "evidence": "Proof 2.1 inferred absence of a coarser partition from singleton fibers and a trivial null ideal, but the constant partition is coarser. The invalid inference is removed; the independently supplied vector theorem proves minimality after all its hypotheses are checked, and coordinate distinctness proves injectivity.",
      "repair_cost": "inline-fix",
      "post_sha256": "cbe3a5312b009a0ec9cbc994d9894683b523065952e724f9726fcdee0f0b2ced"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "no_change",
    "reason": "No assigned carrier is published, no original Statement or Definition changed, and no potentially defective published consumer was found. No published-maintenance entry is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u6-lem-dirac-integral-evaluation",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:29:52.557202+00:00",
      "class": "accuracy",
      "subclass": "citation-missing",
      "severity": "nonfatal",
      "location": "frontmatter",
      "subject": "lem-dirac-integral-evaluation",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "6",
      "source": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u6.json",
      "evidence": "The Statement explicitly assumes a Dirac probability measure, but deps and F1 did not cite the separate proved supplier that establishes this set function is a probability measure. Added that existing supplier; the simple-function calculation and monotone limit remain unchanged.",
      "item_sha256": "d059662def4e45f435d1a2b0d28afa9cc893c2dc580a12c95052139fce610ee4"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "msf37-step5-initial-r1-u6-thm-lehmann-scheffe",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:29:52.557202+00:00",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "thm-lehmann-scheffe",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "6",
      "source": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u6.json",
      "evidence": "F4 lacked conditioning-sigma-algebra measurability. A fair-coin indicator and trivial conditioning algebra refute its ambient-measurable formulation. Step 3.1 already supplies a sigma(S)-measurable representative; correcting F4 and stating invariance under almost-sure replacement completes the cited interface without changing the proof or theorem.",
      "item_sha256": "b944114f8f6c71bc1647b9d8bce461cf4e13746096e92ba01147419ac5261a88"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "none",
    "reason": "No published carrier was changed or found defective. The published Dirac probability proposition has the required disjoint-countable-additivity argument, and the conditional-expectation definitions explicitly require conditioning measurability. These supplier checks support the assigned draft repairs; they are not new published audits."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "mathematical-statistics-foundations-37-step5-initial-r1-u7-bernoulli-f6",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14",
      "class": "accuracy",
      "subclass": "citation-truncated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "ex-bernoulli-score-fisher-information-and-cramer-rao-attainment",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "source": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u7.json",
      "batch": "7",
      "note": "F6 omits the cited theorem's real measurable estimator, finite second moment, local unbiasedness, differentiable target, and open-interval premises. This is a nonfatal citation truncation: T(x)=x is bounded and measurable on the finite full-power-set space; the finite-sum calculation applies at every parameter, while step 2.1 already proves the target derivative equals 1. Thus the judge's claim that differentiability was not established is incorrect, and no substantive prerequisite is missing. F6 now states the full hypotheses, and step 1.2 explicitly verifies E_qT=q and E_qT^2=q for every q in (0,1)."
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "row": {
      "defect_id": "mathematical-statistics-foundations-37-step5-initial-r1-u8-f8",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:27:13.206Z",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-likelihood-ratio-test-is-measurable-and-exact-size",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "item_sha256": "e04b3f1aab0cfc5967eee7fa6018f9b07a3277059ff49caedd0fbca95a5db40e",
      "source": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u8.json",
      "adjudication_ref": [
        {
          "id": "lem-likelihood-ratio-test-is-measurable-and-exact-size",
          "model": "gpt-6-luna",
          "context_sha256": "ab174be5143202f6e295a83ab42c02f071ed2e62a8fe086ee6c84c70ba905880"
        }
      ],
      "evidence": "F8 omits the measurability hypothesis required by prop-measure-monotonicity. For example, on X={a,b,c} with sigma-algebra {empty,{a,b},{c},X} and probability concentrated at c, {a,b} is a measurable null set but its subset {a} is not measurable. This is nonfatal: U is measurable by step 1.1, N={p0=0} is measurable by the density hypothesis, U is contained in N, and the density identity gives P0(N)=0. Adding measurable to F8 supplies exactly the hypothesis already satisfied by its actual use.",
      "correction": "Added measurable before subset in F8; no completeness assumption or theorem change.",
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step5-adjudicator.md"
      }
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "The published monotonicity supplier states the correct measurable-set hypotheses. No published defect or changed supplier interface was found in this assigned repair."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "mathematical-statistics-foundations-37-step5-initial-r1-u9-pairwise-ae-mlr",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:30:03.387525+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "thm-karlin-rubin-one-sided-ump-test",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "description": "F1 asserted pointwise monotone likelihood ratio, but def-monotone-likelihood-ratio-family provides q(T)=ratio only mu-almost everywhere for each pair. A singleton modification of one uniform density and constant T contradict the asserted pointwise equality. F1 now matches its supplier, and step 2.2 explicitly removes its pairwise exceptional set.",
      "evidence": [
        {
          "path": "items/thm-karlin-rubin-one-sided-ump-test.md",
          "locator": "Facts & Assumptions F1; Proof step 2.2"
        },
        {
          "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u9.json",
          "locator": "decisions[0], reviews[0], repair_notes"
        }
      ],
      "source_urls": [
        "https://pages.stat.wisc.edu/~shao/stat610/stat610-11.pdf"
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "mathematical-statistics-foundations-37-step5-initial-r1-u9-extended-reciprocal",
      "run": "mathematical-statistics-foundations-37",
      "at": "2026-10-14T12:30:03.387525+00:00",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "thm-karlin-rubin-one-sided-ump-test",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "description": "Step 4.1 used a reciprocal without defining it at zero or infinity, both permitted by the MLR interface. It now defines h(0)=infinity, h(infinity)=0 and h(u)=1/u otherwise, constructs the Borel nondecreasing reflected function h(q(-s)) outside the original pairwise exceptional set, and uses cutoff -c_minus with gamma_minus.",
      "evidence": [
        {
          "path": "items/thm-karlin-rubin-one-sided-ump-test.md",
          "locator": "Proof step 4.1"
        },
        {
          "path": "research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u9.json",
          "locator": "decisions[0], reviews[0], repair_notes"
        }
      ],
      "source_urls": [
        "https://pages.stat.wisc.edu/~shao/stat610/stat610-11.pdf"
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain_existing_repair_record",
    "id": "thm-arithmetic-and-lattice-operations-preserve-measurability",
    "marker": "local-published-repair:mathematical-statistics-foundations-37-stage4-owner-s4-published-thm-arithmetic-and-lattice-operations-preserve-measurability",
    "reason": "The Step-4 batch-9 alert concerned duplicate tag groups in this published supplier. Current steps 2.1 and 6.1 have a single trailing group, and the canonical ledger already records removal throughout steps 2.1-6.1. Its current Statement supplies the finite arithmetic measurability used in steps 1.1-3.1 of the assigned theorem. No new defect, mathematical audit, publication or published repair is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "lem-finite-order-statistic-and-rank-maps-are-measurable",
  "alg-full-conformal-prediction-set",
  "alg-split-conformal-prediction-set",
  "cex-boundary-null-has-nonstandard-lr-limit",
  "thm-natural-cubic-smoothing-spline-exists-uniquely",
  "cex-one-observation-does-not-identify-a-smoothing-spline",
  "cex-rademacher-orthogonality-does-not-imply-independence-or-exact-t-f",
  "cex-thresholded-sparse-covariance-rate-unbounded-at-superexponential-dimension",
  "lem-packing-covering-number-comparison",
  "cex-vc-entropy-exponent-cannot-be-uniform-in-r",
  "def-donsker-class-and-asymptotic-equicontinuity",
  "def-efficient-score",
  "def-nuisance-tangent-orthogonal-complement",
  "def-one-sided-empirical-rademacher-complexity",
  "thm-pivot-inversion-exact-coverage",
  "ex-discrete-pivot-inversion-is-conservative",
  "lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing"
]


