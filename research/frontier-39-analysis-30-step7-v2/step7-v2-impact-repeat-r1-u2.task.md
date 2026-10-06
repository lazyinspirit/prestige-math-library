# Step 7 repair: impact-repeat, round 1, unit 2

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/impact-repeat-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-impact-repeat-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"frontier-39-analysis-30",phase:"impact-repeat",round:1,unit:"2",input_sha256:"259fd8ef6059bad540c0ec7f61edf9b284504dfc37b944da959a51c39788017f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "frontier-39-analysis-30-step7-repeat-r1-u10-F2-choice",
    "run": "frontier-39-analysis-30",
    "at": "2026-10-06",
    "class": "accuracy",
    "subclass": "missing-choice-scope",
    "severity": "nonfatal",
    "location": "facts-block",
    "subject": "lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound",
    "caught_at_stage": "7-adjudicate",
    "caught_by_role": "group-alpha",
    "disposition": "fixed",
    "introduced_at_stage": "unknown",
    "repair_cost": "inline-fix",
    "adjudication_ref": [
      {
        "ledger": "research/frontier-39-analysis-30-step7-v2/step7-v2-repeat-r1-u10.json",
        "model": "gpt-6.1-sol",
        "context_sha256": "af925475c26cd14cf0c8cd265843520a40e5b471a17b12d35208188d4c23d262"
      }
    ],
    "item_sha256": "a4bdced118eb5f879bad3967ac12feef01315c1881eb49c7636195a2ec7935ce",
    "subclass_note": "F2 claimed contextual Lax–Milgram existence under the lemma's hypotheses although the supplier explicitly assumes Countable Choice. Added the missing conditional qualification; the assumed-solution estimate is already choice-free and remains unchanged.",
    "evidence": [
      {
        "path": "items/lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound.md",
        "anchor": "F2"
      },
      {
        "path": "items/thm-lax-milgram.md",
        "anchor": "Statement"
      }
    ],
    "prevention": {
      "kind": "process",
      "ref": "Compare every contextual existence assertion with the supplier's explicit choice hypotheses."
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-uniformly-elliptic-nondivergence-operator",
    "run": "frontier-39-analysis-30",
    "phase": "repeat",
    "round": 1,
    "unit": "13",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "finding": "The cited derivative Definition indexes coordinates 0,...,n-1; the rejected operator instead summed over 1,...,n and called those the same partials. Without a relabelling the last partial is undefined, including n=1. Defined coordinate i, partial_i and xi_i here to mean coordinate, partial and component i-1 in that dependency; D^beta keeps its zero-based canonical order.",
    "repair_evidence": "Checked the full Definition, the Holder and canonical derivative interfaces, and the page operator convention. The explicit bijective coordinate relabelling makes every derivative and quadratic contraction well typed without changing ellipticity, coefficient classes or frozen operators. Continuity at the freezing point still extends the almost-everywhere ellipticity there; measurable exceptional values remain qualified. Local repair review, not an independent audit of my repair.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-holder-spaces-on-bounded-domains-are-banach-spaces",
    "run": "frontier-39-analysis-30",
    "phase": "repeat",
    "round": 1,
    "unit": "13",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "finding": "The formal C_b completeness and X0 claims are proved, but the title and page promise completeness of the distinct boundary-extension class. On (0,1) union (1,2), the function 0 on the first component and 1 on the second has zero positive-order derivatives and finite C_b^{1,alpha} norm but no continuous extension at 1. Added the missing closure-class conclusion and its closed-subspace proof; this repairs an interface omission without invalidating the existing claims.",
    "repair_evidence": "Uniform Cauchy convergence supplies bounded continuous derivative limits; coordinate-segment derivative convergence and mixed-partial symmetry identify all words, including the complex case by real and imaginary parts. Top-order difference quotients retain Holder bounds and Cauchy differences converge in the full norm. The new step proves the closure class is closed by uniform convergence of each continuous derivative extension; the zero-boundary condition is also closed. No boundary regularity or identification with C_b on arbitrary open sets is asserted. This is my local repair review, not an independent audit. Re-examined the new closure step after precheck renumbered it from 4.2 to 5.1; its argument, inputs and conclusions are unchanged, and the contract uses were synchronized.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-global-schauder-estimate-and-classical-dirichlet-solvability",
    "run": "frontier-39-analysis-30",
    "phase": "repeat",
    "round": 1,
    "unit": "13",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "finding": "With the library natural-number indexing the requirement at j=0 uses an undefined 1/j. The normalized contradiction argument otherwise works unchanged: failure at C=j+1 supplies norm-one u_j with residual below 1/(j+1), a positive eventual supremum lower bound, and a nonzero C2 limit retaining the Holder Hessian bound. Replaced both occurrences by 1/(j+1) and made j in N explicit.",
    "repair_evidence": "Checked all proof steps and actual prerequisite Statements. The new closure-space theorem directly supplies X and Y as Banach, so F1 now cites that conclusion. Convex interpolation of principal matrices preserves uniform ellipticity and Holder coefficient bounds; boundary Schauder supplies the uniform estimate with the supremum term. The corrected normalized sequence has a C2 convergent subsequence, and its limiting Hessian is Holder by bounded difference quotients. Thus the nonzero limit lies in X and contradicts the assumed injectivity. The weak Dirichlet Laplacian supplies the bijective base point with the stated AC/CC assumptions; the affine continuity theorem gives inverses, and subtraction of g gives existence, uniqueness and the estimate. The operator coordinate relabelling preserves all contractions. Local repair review, not an independent audit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "record": {
      "defect_id": "frontier-39-analysis-30-step7-repeat-r1-u14-caccioppoli-signed-cross-term",
      "run": "frontier-39-analysis-30",
      "at": "2026-10-06T03:48:40.940032+00:00",
      "class": "accuracy",
      "subclass": "invalid-inference",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "lem-caccioppoli-inequality-for-truncated-subsolutions",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "14",
      "description": "Step 1.1 bounded an absolute cross term by 2M_a S b although theta<=M_a^2 permits negative M_a. Step 2.1 reused that factor. Both now use |M_a|, preserving the full Statement and squared final constants.",
      "adjudication_ref": [
        "research/frontier-39-analysis-30-step7-v2/step7-v2-repeat-r1-u14.json#decisions[0]"
      ],
      "evidence": [
        {
          "path": "research/frontier-39-analysis-30-step7-v2/step7-v2-repeat-r1-u14.json"
        },
        {
          "path": "items/lem-caccioppoli-inequality-for-truncated-subsolutions.md"
        },
        {
          "path": "research/frontier-39-analysis-30-batch-14.proof-contracts.json"
        }
      ],
      "item_sha256": "5bc98a81467f0f65c52e9fcf6666876200b2e4e68d9af8b3474c9cd05d762697",
      "repair_cost": "inline-fix"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions",
    "severity": "nonfatal",
    "disposition": "fixed",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "location": "facts-block",
    "reason": "F3 incorrectly assigned zero integral implying a.e. vanishing to the monotonicity/homogeneity proposition. This is nonfatal: step 1.1 uses F3 only for nonnegativity, and step 2.1 already cites the correct zero-integral theorem F5. Replaced only F3 by the supplied monotonicity and nonnegativity assertion; no proof step or Statement changed.",
    "evidence": [
      {
        "path": "research/frontier-39-analysis-30-step7-v2/step7-v2-repeat-r1-u16.json",
        "anchor": "lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions"
      }
    ],
    "post_sha256": "be979fd7fd6ff32d4c7eb555f8b384562b2eff36d96c7df055e366cdb996399e",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "frontier-39-analysis-30-step7-repeat-r1-u18-endpoint-derivatives",
    "run": "frontier-39-analysis-30",
    "at": "2026-10-06",
    "class": "accuracy",
    "subclass": "undefined-notation",
    "severity": "fatal",
    "location": "statement",
    "subject": "lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves",
    "caught_at_stage": "7-adjudicate",
    "caught_by_role": "group-alpha",
    "disposition": "fixed",
    "introduced_at_stage": "unknown",
    "repair_cost": "inline-fix",
    "adjudication_ref": [
      {
        "ledger": "research/frontier-39-analysis-30-step7-v2/step7-v2-repeat-r1-u18.json",
        "model": "gpt-6.1-sol",
        "context_sha256": "4b977720d9e0a15c9b2f6ba9991643ca8183cde99aecf293c71348bf11347b69"
      }
    ],
    "item_sha256": "ab1aae29ea88958ed8e5153f9cd331029d647394530d4d69e1806d0ba371a59c",
    "subclass_note": "The displayed Taylor coefficients include endpoint values of derivatives although the cited Fréchet definition has an open domain. Defined C^(n+1) on nondegenerate intervals through continuous extensions of interior real-parameter derivatives; singleton and zero-increment identities need no undefined derivatives. The formula and its full closed-interval range are preserved.",
    "evidence": [
      {
        "path": "items/lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves.md",
        "anchor": "Statement"
      },
      {
        "path": "items/def-frechet-derivative-between-banach-spaces.md",
        "anchor": "Definition"
      },
      {
        "path": "items/lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves.md",
        "anchor": "Statement"
      }
    ],
    "prevention": {
      "kind": "process",
      "ref": "Check endpoint regularity conventions against the exact open-domain derivative and closed-interval FTC interfaces before evaluating Taylor coefficients."
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-eikonal-equation-as-a-viscosity-equation",
    "severity": "nonfatal",
    "disposition": "repaired",
    "reason": "Proposed closed finding: the ridge title incorrectly labels the strict minimum of the positive norm. The item title now says tip; its contracted mathematical claims remain intact. No Statement or Definition section changed, and no published defect was found.",
    "uncertain": false,
    "source_urls": [
      "https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "prop-characteristics-for-a-one-dimensional-scalar-conservation-law",
    "stage": "7.5",
    "severity": "fatal",
    "defect_type": "logic",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "finding": "The space-first domain is contradicted by the original time-first evaluations. For T=2, f(s)=s^2/2 and u(x,t)=x/t, the PDE holds, and x(t)=sqrt(1+t^2) solves the original swapped ODE on (0,1), yet u(t,x(t))=t/sqrt(1+t^2) has positive derivative. This is a false constancy claim. Repaired all coordinate evaluations, initial-point notation, differentiated F2 evaluations and the compact rectangle; retained the Riccati and conditional blow-up conclusions.",
    "repair": "Reviewed the final space-first characteristic u(x(t),t), the transport suppliers and the derivative/mixed-partial and local/maximal ODE interfaces. The chain rule gives constancy; differentiating the PDE gives p′=-cp^2. Local ODE uniqueness prevents negative p from reaching zero, so reciprocal integration holds throughout its existence interval. Straight characteristics extend across interior endpoints; continuity on the correctly ordered compact rectangle forbids persistence through the Riccati pole. No choice premise or new prerequisite is needed.",
    "evidence_path": "research/frontier-39-analysis-30-step7-v2/step7-v2-repeat-r1-u20.json",
    "audit_status": "Local repair and focused checks complete; independent rejudgment belongs to the engine."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "thm-hamilton-jacobi-conservation-law-correspondence-in-one-dimension",
    "stage": "7.5",
    "severity": "fatal",
    "defect_type": "logic",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "finding": "For f(p)=p^2/2+1 and U0=u0=0, L(q)=q^2/2-1 and both prescribed potentials equal -t. Hence global time-uniform boundedness in both clauses is false. The Hopf--Lax supplier guarantees boundedness on finite horizons. Both clauses now specify boundedness and uniform continuity on every finite time slab, while preserving global existence, entropy boundedness and the normalized primitive correspondence.",
    "repair": "Checked the complete viscous-primitive and localization proof against its current Hopf--Lax, viscous existence/bounds/compactness, entropy contraction/trace, heat and FTC interfaces. Convexity gives min L=-f(0), so contraction yields ||V(t)+tf(0)||_infinity<=||U0||_infinity. The existing primitive bound ||a||1+T|f(0)| is valid on each finite horizon. Viscosity contacts, datum approximation and constant-tail localization retain both correspondence directions; uniqueness makes horizons compatible. CC/DC assumptions remain explicit. The owning contract and assigned manifest statements/strategies were synchronized; this is a local repair review, not an independent judgment of the repair.",
    "evidence_path": "research/frontier-39-analysis-30-step7-v2/step7-v2-repeat-r1-u20.json",
    "audit_status": "Local repair and focused checks complete; independent rejudgment belongs to the engine."
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "ex-hamilton-jacobi-primitive-of-a-burgers-solution",
  "lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms",
  "thm-interior-schauder-estimate-for-uniformly-elliptic-equations",
  "thm-boundary-schauder-estimate-for-the-dirichlet-problem"
]


