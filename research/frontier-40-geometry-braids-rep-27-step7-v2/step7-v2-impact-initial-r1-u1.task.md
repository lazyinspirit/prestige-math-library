# Step 7 repair: impact-initial, round 1, unit 1

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/impact-initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-impact-initial-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"impact-initial",round:1,unit:"1",input_sha256:"a028cdde63e58ac5243657d0328d87982832bba3fde7f2c36d2ebc671af853e0",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-plane-projective-curve",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "finding": "Confirmed nonfatal AC-accounting contradiction: Definition already qualifies scalar uniqueness by AC, and the published correspondence supplier Proof 2.1 explicitly uses the AC-dependent affine strong Nullstellensatz. The final remark incorrectly said AC is used only for component identification. Repaired it to retain AC for both recovery of the form and component identification, including degree well-definedness from the closed set; fixed-form degree and finite factorisation remain choice-free. The Definition and mathematical construction are unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-tangent-lines-plane-curve-point",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "finding": "Confirmed nonfatal scalar-uniqueness error confined to the existence remark. For f=u over C, f=1*u=(1/2)*(2u), so the scalar c varies with the linear-factor representative. The Definition correctly allowed factor rescaling already. Finite root-factor induction splits every binary form; UFD uniqueness fixes geometric lines and positive exponents, and degree additivity gives sum r_L=m. Repaired the remark to state c is fixed only once representatives are fixed and to give c -> c product a_L^(-r_L). Chart changes transport factors through their invertible first-order part and units only scale the initial form. The Definition is unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "cor-pascal-bezout-obstruction-template",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "finding": "Confirmed nonfatal dependency-restatement defect: F2 omitted the finite-multiplicity condition in the basic-properties supplier Statement. For C=E a line at p, the quotient is k[t]_(t), which has infinite length, so it is not a positive integer. Proof 1.1 already assumes no common component and F1 supplies finite local lengths and sum I=df; each summand then contributes at least one. Thus the bound and its contrapositive remain valid. Repaired F2 by restoring finiteness and explicitly deriving it from F1 in the actual proof setting. Statement, proof steps and exact contract supplier quotations are unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-flex-and-bitangent-plane-curve",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "finding": "Confirmed nonfatal degree-bound error in Remarks: the cited line-intersection corollary requires L not contained in C. For C=L, a degree-one curve, the intersection is the whole infinite line and the local quotient has infinite length. The Definition already excludes component tangents from flexes and contained lines from bitangents and multitangents; its finite-contact remark also states that caveat. Repaired the degree-bound remark to require L not contained in C and state the supplier exact sum d and distinct-point bound. Both contact-order valuations are taken in their proper rings: F restricted to L, or l restricted to smooth C. Definition unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-bezout-uniqueness-low-degree-interpolation",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "finding": "Confirmed nonfatal dependency-restatement defect: F2 omitted the supplier finite-length hypothesis. Coincident lines have quotient k[t]_(t) at any common point, whose powers of t give an infinite strict submodule chain. Proof 1.1 already assumes no common component; F1 then gives finitely many points, finite multiplicities and sum I=d^2. Restored the finiteness qualification and its F1 discharge. The same valid argument for degrees d_C,d_D at most d gives sum I=d_C*d_D at most d^2; for an infinite intersection, a finite subset of d^2+1 points suffices. Both asserted component-obstruction formulations and contract supplier quotations are unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-flex-cubic-contact-order-three",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "finding": "Confirmed nonfatal F3 restatement error: the cited flex corollary requires T not to be a component, whereas a smooth point on a line has zero tangent restriction and is excluded from the flex definition. Restored the noncomponent and nonzero-restriction hypotheses. The actual Fermat verification already proves them: char not 3 makes the form square-free, gradient (3,3,0) at p is nonzero, and T is x0+x1=0. The parametrisation [s:-s:t] restricts F to nonzero t^3; on s=1 its germ has order three. Hence T is not a component and the qualified supplier gives I=3 and an ordinary flex. Characteristic 2 remains valid. Example and verification steps are unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_closed_defect",
    "subject": "def-positive-and-negative-khovanov-rozansky-crossing-complexes",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "10",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding": "The integer cones and differential degrees are sound, but formula (13) was identified with different shifts. Direct comparison establishes the positive regrading {-1/2,-1/2}[-1/2] and negative regrading {1/2,1/2}[1/2]; the source-identification error is repaired without changing the integer cones.",
    "repair": "Checked both maps against the supplied shifts: chi-zero needs the positive source shift and chi-one preserves bidegree with equal shifts. Repaired the source comparison by calculating both published term gradings; the existing integer complex and its normalization remain intact. This is a local repair review, not an independent audit of my edit.",
    "post_sha256": "2f5eb43fcb0097ab2a4ae34737ff962542a3832f4247c57c39e63689020f354a",
    "adjudication_ref": {
      "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u10.json",
      "id": "def-positive-and-negative-khovanov-rozansky-crossing-complexes",
      "model": "gpt-6.1-sol",
      "context_sha256": "b21822aeb4440d48a1201fe721ba62e98a0e96f507d85f53a910a8ff2531a174"
    },
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0505056v2",
      "https://msp.org/gt/2008/12-3/gt-v12-n3-p04-p.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_closed_defect",
    "subject": "def-khovanov-rozansky-complex-and-trigraded-braid-homology",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "10",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "finding": "The marking domain did not explicitly include circles, although F2 requires them. In the arc-between-marks construction an unmarked crossingless circle contributes no local factor, giving Q[a] and invalidating trivial a-action. Requiring a mark on every circle restores a linear row and the stated nonempty cohomology; boundary labels and scalar restriction are also made explicit.",
    "repair": "Verified the finite tensor signs, cancellation of internal potentials, and extraction of (a,0) using the complete row-reduction supplier. The explicit circle marks guarantee a linear row in every nonempty resolution; the zero-strand Q[a] exception remains intact. The crossing supplier retains the same integer cones. Local self-review does not constitute an independent audit.",
    "post_sha256": "dddf86bcabe2c14ddd1670595596572c379674ed11f17b63a5d502ae360965e0",
    "adjudication_ref": {
      "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u10.json",
      "id": "def-khovanov-rozansky-complex-and-trigraded-braid-homology",
      "model": "gpt-6.1-sol",
      "context_sha256": "a8fc97702d39864a1f1672c37ddd646c579ff832568a866122addd9dd0506fc7"
    },
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0505056v2"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_closed_defect",
    "subject": "ex-why-the-kr-two-invariance-proof-stays-in-the-braid-diagram-calculus",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "10",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding": "The move tabulation follows the invariance theorem, but Verification 1.1 conflated it with the six properties defining F. The source separately lists Markov moves (a)-(c), then includes a skein relation and unknot normalization among the properties of F. Replacing that identification repairs the attribution without changing the example.",
    "repair": "Checked the actual invariance proof, Markov supplier and source move list. Far commutation, cancellations, coherent III, conjugation, stabilization and auxiliary marking changes account for the proof. The repaired sentence distinguishes these moves from F properties; the Example and AC boundary are unchanged. This is local self-review.",
    "post_sha256": "d2a5c872ea671f4a4de0f86e168d5127a16d9bc7068613582d6c93178367c61b",
    "adjudication_ref": {
      "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u10.json",
      "id": "ex-why-the-kr-two-invariance-proof-stays-in-the-braid-diagram-calculus",
      "model": "gpt-6.1-sol",
      "context_sha256": "8fe4d1d1ac97d936332e807b83519da95180ddd38daeb43abc6aa2cf9e320a97"
    },
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0505056v2"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "item": "lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings",
    "severity": "nonfatal",
    "disposition": "repaired",
    "reason": "L7 conflated the multiplication map with the balanced-root scalar: for even s the old assertion sends 1 tensor 1 to -1, whereas the supplied map sends it to 1. This is nonfatal because step 2.1 independently obtains chi_1=br_s, and L3 already supplies ordinary multiplication; the unit sign only changes eta_s. Replaced L7 with ordinary multiplication and a separate root-sign symbol kappa_s.",
    "adjudication_ref": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u11.json#/decisions/0"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-shifted-character-observables-and-profile-moments",
    "outcome": "confirmed_fatal",
    "disposition": "repaired",
    "defect_type": "logic",
    "reason": "Part (c) quantifies over lambda of size n without n>=1, although n^(-k/2) and scaling by sqrt(n)>0 are undefined at n=0. Added exactly n>=1, retaining the empty partition in the unscaled definitions. The substitution gives s^(-k) for every s>0; character reality and all moment definitions remain unchanged.",
    "adjudication_ref": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u12.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-joint-convergence-and-normalized-cycle-character-observables",
    "outcome": "confirmed_fatal",
    "disposition": "repaired",
    "defect_type": "dependency_citation",
    "reason": "The weight definition explicitly defers normalization, so the probability-space and pushforward-law assertions lacked their establishing dependency. Added prop-plancherel-weights-sum-to-one to deps and cited its nonnegativity and total-mass-one conclusion. For n>=1 and k>=2 each denominator is positive; all functions on the finite space are measurable, n<k gives zero, and the Gaussian-law AC declaration is retained.",
    "adjudication_ref": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u12.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-shifted-character-multiplication-by-p-k",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "defect_type": "other",
    "reason": "The title promises complete products for all k, while Statement (ii) specifies only leading Kerov-degree terms. Corrected the title, source locator and page description; Statement and Proof are unchanged. IO Corollary 4.8 and Proposition 4.12 justify the overlap cases, and IK Proposition 6.2 supports the fixed-point count yielding coefficient k*m_k(sigma).",
    "adjudication_ref": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u12.json",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0304010",
      "https://arxiv.org/pdf/math/0302203v1"
    ],
    "familiar": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "All direct item consumers discovered for the two changed Definitions belong to the frozen draft frontier. No potentially defective published or outside-frontier consumer was identified; no published mathematics was edited."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "frontier-40-geometry-braids-rep-27-step7-initial-r1-u13-hopf-fact-finite-generation",
      "run": "frontier-40-geometry-braids-rep-27",
      "at": "2026-10-06",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "ex-hopf-algebra-of-a-split-torus",
      "batch": "13",
      "caught_at_stage": "6-judge",
      "caught_by_role": "judge-sol",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "source": "gpt-6.1-sol:0b4c09bf57230324f9462f3dfe3907f5f5b5fdc7d31289f11c0bab57521e8689",
      "adjudication_ref": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u13.json",
          "obligation": "ex-hopf-algebra-of-a-split-torus:gpt-6.1-sol:0b4c09bf57230324f9462f3dfe3907f5f5b5fdc7d31289f11c0bab57521e8689"
        }
      ],
      "subclass_note": "[F3] omits finite generation required by the library group-scheme convention. The polynomial Hopf algebra k[x_1,x_2,...], with primitive x_i, has no finite algebra generating set: any finite list uses only finitely many variables. This is nonfatal to the example: [F5] already proves finite type under AC for A and A/I at steps 1.1 and 3.1. Restricting the auxiliary fact to finitely generated Hopf algebras repairs it without changing any conclusion.",
      "evidence": [
        {
          "path": "items/ex-hopf-algebra-of-a-split-torus.md",
          "note": "F3 now restricts the spectrum construction to finitely generated commutative Hopf algebras and explicitly applies F5 under AC."
        },
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u13.json",
          "note": "Exact rejected tuple, local mathematical repair review, current guard and review-context hash, consulted source locator and four successful focused checks."
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "Read actual supplier conventions; finite-type group schemes require finite generation as a k-algebra, not merely a Hopf structure."
      }
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "append",
    "anchor": "Affine-spectrum quasi-compactness Choice premise — frontier-40-geometry-braids-rep-27, Step 5",
    "text": "Step 7 initial round 1 unit 13: the assigned draft consumer ex-hopf-algebra-of-a-split-torus retains AC in Example/Given/deps and uses cor-affine-scheme-quasi-compact in F5 for finite type of its finitely generated Laurent ring and quotient. This consumed published claim is sound under its explicit AC premise. The local F3 repair restricts the Hopf-to-group-scheme assertion to finitely generated algebras; it changes no Statement/Definition or page interface. No new published defect, published edit or maintenance event is proposed; this records the exact assigned consumer use, not an independent published-item audit."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "subject": "ex-additive-and-infinitesimal-group-schemes",
    "severity": "nonfatal",
    "location": "facts-block",
    "disposition": "fixed",
    "reason": "F3 omits finite generation although F1 defines group schemes to be of finite type. The Hopf algebra k[x_1,x_2,...] with primitive generators satisfies all Hopf identities but is not finitely generated: every finite collection of polynomials involves only finitely many variables. This is nonfatal to the Example because its four coordinate algebras are finitely generated, and its claimed group laws, closed immersions, point sets, reducedness and length are correct. F3 is now qualified and step 1.3 explicitly checks finite generation of both quotients.",
    "evidence_report": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u14.json",
    "class": "accuracy",
    "subclass": "missing-hypothesis"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "none",
    "reason": "No published defect was found in the actual supplier interfaces used by this repair. No Statement or Definition was changed, so there is no new supplier-interface event or published-consumer maintenance proposal."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "entry": {
      "defect_id": "frontier-40-geometry-braids-rep-27-step7-initial-r1-u15-D001",
      "run": "frontier-40-geometry-braids-rep-27",
      "at": "2026-10-06",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block F1",
      "subject": "thm-homogeneous-space-for-smooth-affine-group",
      "caught_at_stage": "7.1-adjudicate",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "item_sha256": "b4eb7a8ecc01436853135f1159f4c686fa32729a3157e228df6e255c84b99c2e",
      "evidence": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u15.json",
          "anchor": "thm-homogeneous-space-for-smooth-affine-group",
          "note": "F1 attributes a subcomodule of k[G] to the final line-stabilizer representation, although the supplier and Milne 4.27/4.28 pass from a subcomodule U to an exterior power of U. This strengthening is unlicensed and unnecessary: step 1.1 needs only the supplied finite-dimensional rational representation and its line. Removed the strengthening; the theorem and proof steps retain their full conclusions."
        }
      ],
      "adjudication_ref": [
        {
          "report": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u15.json",
          "model": "gpt-6.1-sol",
          "context_sha256": "73f1ab59b1c6246ddf148d3901bd7840eb21e7be5d0a4b9f6a49fca883cfbb7e"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "entry": {
      "defect_id": "frontier-40-geometry-braids-rep-27-step7-initial-r1-u15-D002",
      "run": "frontier-40-geometry-braids-rep-27",
      "at": "2026-10-06",
      "class": "accuracy",
      "subclass": "false-or-overstrong-statement",
      "severity": "nonfatal",
      "location": "facts-block F1",
      "subject": "ex-gl2-quotient-by-diagonal-torus",
      "caught_at_stage": "7.1-adjudicate",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "item_sha256": "7345ad049fb2f371d81b29f99c6bfc1be0aa9f961ff6f5fa81f671c596410a84",
      "evidence": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u15.json",
          "anchor": "ex-gl2-quotient-by-diagonal-torus",
          "note": "F1 wrongly extends finite presentation and standard smoothness to arbitrary localizations. For example k(x) cannot be finitely generated over k: finitely many rational generators lie in k[x,1/f], which omits inverses of irreducibles not dividing f. This false generalization is unused; GL2 and T invert the single elements det and ad. Added principal to restrict the assertion to the exact empty-equation presentation supplied, retaining all proof steps and quotient conclusions."
        }
      ],
      "adjudication_ref": [
        {
          "report": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u15.json",
          "model": "gpt-6.1-sol",
          "context_sha256": "5e16289d45f92cbd6b346ba1fa80a52e236cae1b0a8c60206f9acaaf6d579935"
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published defect or changed supplier Statement/Definition was found in this unit. The published line-stabilizer proof supplies exactly the finite-dimensional representation required; the principal-localization supplier explicitly specifies one inverted element. Both repairs concern only assigned draft F1 paragraphs."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "def-categorical-and-geometric-quotients-of-classical-varieties",
    "run": "frontier-40-geometry-braids-rep-27",
    "caught_at_stage": "7.1-initial",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "The unqualified affine model need not be a classical finite-type variety: nonreductive actions can have non-finitely-generated invariant algebras (Dufresne–Kraft, Introduction and §9). Added the exact finite-generation hypothesis for the model; the general categorical/geometric definitions and every reductive quotient conclusion are preserved.",
    "evidence_path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u16.json",
    "post_sha256": "2de90cdf5acc16492fb05493337b1c4b5e87f1fb7141ee9a07cb751fc377dca1"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "lem-orbit-dimension-and-closed-orbits-for-complex-group-actions",
    "run": "frontier-40-geometry-braids-rep-27",
    "caught_at_stage": "7.1-initial",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "reason": "F2 attributed local closedness and irreducibility to a connected dimension supplier whose Statement supplies only fibre dimensions, the dimension identity, and smaller boundary orbits. These are load-bearing in steps 1.1–3.1. Added the direct prerequisite lem-orbit-map-faithfully-flat-and-orbit-locally-closed for local closedness and surjectivity, and derived irreducibility as the image of irreducible connected G (F5). Also explicitly discarded repeated G^circ-orbits before the disjointness argument. The original Statement is unchanged.",
    "evidence_path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u16.json",
    "post_sha256": "f0139d8b0b72024cf2d91582cda3c217821fafa37fa488130d696623a0c9d8e3"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "frontier-40-geometry-braids-rep-27-step7-initial-r1-u17-def-good-and-geometric-quotients-for-group-actions",
      "run": "frontier-40-geometry-braids-rep-27",
      "at": "2026-10-06",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-good-and-geometric-quotients-for-group-actions",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "batch": "17",
      "disposition": "fixed",
      "repair_confidence": 1,
      "subclass_note": "Complex conjugation on Spec C satisfies the former locally-ringed-space clauses but its inverse is not a C-morphism. Requiring pi to commute with the structure maps to Spec C excludes this counterexample and restores the base-field condition required by categorical factorization.",
      "evidence": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u17.json",
          "anchor": "def-good-and-geometric-quotients-for-group-actions"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u17.json",
          "group": "17",
          "obligation": "def-good-and-geometric-quotients-for-group-actions:gpt-6.1-sol:3e7207afe0a66786678e1e7254475d2e26b63d015fdddf220df9f9ce1a90d4e2"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "frontier-40-geometry-braids-rep-27-step7-initial-r1-u17-def-invariant-section-ring-and-projective-git-quotient",
      "run": "frontier-40-geometry-braids-rep-27",
      "at": "2026-10-06",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "remark",
      "subject": "def-invariant-section-ring-and-projective-git-quotient",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "batch": "17",
      "disposition": "fixed",
      "repair_confidence": 1,
      "subclass_note": "The two linked quotient theorems both assume G reductive. The original Remarks promised their finite-generation and quotient conclusions for the arbitrary affine G of the Definition. Both remarks now explicitly restrict those theorem-backed conclusions to reductive G; the invariant graded algebra, Proj construction and Veronese identity retain their full original generality.",
      "evidence": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u17.json",
          "anchor": "def-invariant-section-ring-and-projective-git-quotient"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u17.json",
          "group": "17",
          "obligation": "def-invariant-section-ring-and-projective-git-quotient:gpt-6.1-sol:b4e7586210be7077a191dbebcde6355ab252038c2e2a261dc2d69f081181f0bb"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "frontier-40-geometry-braids-rep-27-step7-initial-r1-u17-lem-ample-invariant-section-charts-are-affine",
      "run": "frontier-40-geometry-braids-rep-27",
      "at": "2026-10-06",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "statement",
      "subject": "lem-ample-invariant-section-charts-are-affine",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "batch": "17",
      "disposition": "fixed",
      "repair_confidence": 1,
      "subclass_note": "The affineness and G-stability proof works for arbitrary complex affine G, but the existing semistability definition only covers reductive G. The Statement now defines Xss(L) locally as the union of positive-degree invariant nonvanishing loci for any G and states agreement with the supplied definition for reductive G. Serre vanishing lifts a sufficiently large section power, whose identical nonvanishing locus is closed in an affine Proj chart; sigma=0 gives the empty affine chart.",
      "evidence": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u17.json",
          "anchor": "lem-ample-invariant-section-charts-are-affine"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u17.json",
          "group": "17",
          "obligation": "lem-ample-invariant-section-charts-are-affine:gpt-6.1-sol:4dcf63ef1cd82a1483471492571cb6ddcef8d18f5019422d9c10aa7cd170825e"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "frontier-40-geometry-braids-rep-27-step7-initial-r1-u17-lem-graded-invariants-of-localization-at-an-invariant-element",
      "run": "frontier-40-geometry-braids-rep-27",
      "at": "2026-10-06",
      "class": "accuracy",
      "subclass": "ill-typed-claim",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-graded-invariants-of-localization-at-an-invariant-element",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "batch": "17",
      "disposition": "fixed",
      "repair_confidence": 1,
      "subclass_note": "With trivial G, A=C[t], f=t and h=1 the fraction 1/t is not in A^G=C[t]; the original step 1.1 had a false type assertion. It now places h/f^r in (A^G)_f and explicitly computes the localized linearity identity. The f-torsion complement argument still supplies invariant numerators, including zero-divisor and nilpotent cases, and taking degree zero gives the stated graded equality.",
      "evidence": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u17.json",
          "anchor": "lem-graded-invariants-of-localization-at-an-invariant-element"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u17.json",
          "group": "17",
          "obligation": "lem-graded-invariants-of-localization-at-an-invariant-element:gpt-6.1-sol:61e1295a37146dd3351db3db4026f2e1f9c5d9baca5d452a595dd1f50a0224b3"
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "Both supplier-interface events have only five draft frontier consumers in the exact dependency/reference graph. Their affected mathematical uses are sound; no defective published or outside-frontier consumer was discovered."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-complete-connected-scheme-to-affine-scheme-morphism-is-constant",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "finding": "The cited completeness definition is restricted to integral varieties, whereas Z may be reducible. This is a nonfatal terminology/interface defect: properness is defined for arbitrary schemes, and the component proof is valid under that convention. F8 now explicitly declares the local complete-means-proper convention, distinguishes it from the variety-only definition, and retains the original Statement verbatim. Each proper integral component has a finite field of functions; intersecting components have the same closed image point, and connectedness joins all components. A reduced affine singleton is integral and its proper global-function ring is a finite field. AC is already assumed for all cited suppliers.",
    "stage": "step7-initial-round-1",
    "action": "append_proposed_finding",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-fixed-locus-and-normal-orbit-closure",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "finding": "F1 incorrectly stated the k-stabilizer interface for arbitrary scheme points and contained an unspecified fibre product. All actual uses (y and x in Z(k)) are rational, so this is nonfatal: F1 now requires x in X(k), defines G_x=G times_X Spec k using the orbit map and x, and defines x_T by base change. The Facts Given now retains smooth H from the Statement. Smooth H(k) is schematically dense, hence H lies in G_y; normality fixes the orbit on every base algebra. Flat product base change preserves schematic dominance, so closed ideals and the closed equalizer descend G-stability and trivial H-action to the reduced orbit closure. No Statement change.",
    "stage": "step7-initial-round-1",
    "action": "append_proposed_finding",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "repaired",
    "finding": "The arbitrary-M claim cannot invoke either finite-type representation/comodule supplier: D_k(direct sum of infinitely many copies of Z) is not finite type. This is a fatal dependency-citation gap, now repaired without narrowing the Statement. F1 explicitly extends the natural-action convention, and new step 1.1 proves both directions by evaluation at id_A and the two universal points in A tensor A. It proves X(G)=M by group-like coefficient comparison. Step 2.1 now proves directness by coordinate extraction rather than applying a finite-type character lemma. Subspaces, quotients and extensions retain the weight decomposition; simultaneous arbitrary bases are chosen only in the final AC clause.",
    "stage": "step7-initial-round-1",
    "action": "append_proposed_finding",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-unipotent-groups-have-central-series-with-subgroups-of-ga-quotients",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "repaired",
    "finding": "F3 asserted a scheme-theoretic definition not supplied by its abstract-group dependency, and the former nilpotence sentence used that missing interface. This fatal dependency-citation gap is repaired by defining [A,B] as the smallest closed subgroup through the commutator morphism, constructed by schematic intersection/Hopf-ideal sums, and defining gamma recursively. Step 2.1 checks the factorization through G_{i+1} on every k-algebra and explicitly establishes normality. Step 3.1 proves gamma_{i+1}G contained in G_i by minimality and separately proves the analogous derived-series containment using the actual scheme-theoretic derived definition. Exact quotient/image suppliers then embed G_i/G_{i+1} as a closed subgroup of Ga, including infinitesimal groups. The empty series for G=1 is included. The Statement remains verbatim.",
    "stage": "step7-initial-round-1",
    "action": "append_proposed_finding",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-maximal-diagonalizable-subgroups-of-trigonalizable-groups-are-conjugate",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "finding": "F2 falsely said every normal N in U shortens its additive series; N=1 in U=Ga disproves this. The actual series induction in step 1.1 chooses the last nontrivial term after deleting repetitions, so its quotient removes exactly the terminal factor. The dimension induction in step 3.1 instead chooses a positive-dimensional smooth connected vector subgroup. F2 now separates these arguments, proves the quotient radical remains U/N, and cites the orbit-dimension formula for translation on the smooth quotient. This is a nonfatal overstatement because both original actual induction choices strictly decrease their correct measures. I checked the smooth-source cocycle reduction, homogeneous Ore elimination, vector-torsor cochain surjectivity, tangent invariant surjectivity/Jacobian openness, characteristic vector kernel, section-image classification, disconnected smooth torus argument and both alpha_p counterexamples. No Statement change.",
    "stage": "step7-initial-round-1",
    "action": "append_proposed_finding",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-quotient-by-a-borel-subgroup-is-complete",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "repaired",
    "finding": "Step 1.2 incorrectly treated a flag stabilizer as a subgroup of a triangular group although the representation need not be faithful. This is a fatal logic gap in the asserted solvability/dimension bound. The repaired proof sets K to the representation kernel, observes scheme-theoretically that K lies in G_F=B, and uses the morphism H=G_{F-prime} to its triangular stabilizer with kernel K. If the target has derived length a and B has derived length b, commutator naturality gives D^aH contained in K contained in B and D^{a+b}H=1. Its reduced identity component is therefore smooth connected solvable of dimension dim H, bounded by dim B. Minimal orbit dimension then closes the flag orbit; the fppf orbit quotient identifies it with G/B. Neither faithfulness nor smoothness of arbitrary flag stabilizers is assumed; the Statement remains unchanged.",
    "stage": "step7-initial-round-1",
    "action": "append_proposed_finding",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-abstract-root-datum-and-its-weyl-group",
    "stage": "step7-initial-r1",
    "severity": "nonfatal",
    "disposition": "repaired",
    "finding": "The torus-lattice lemma establishes X(T), X_*(T) and their perfect evaluation pairing, but supplies neither roots nor coroots. The abstract axioms, reducedness, base independence, dual reflections and isomorphism formulas remain correct; the erroneous realization attribution is replaced with the exact lattice-only interface.",
    "repair": "The torus-lattice lemma establishes X(T), X_*(T) and their perfect evaluation pairing, but supplies neither roots nor coroots. The abstract axioms, reducedness, base independence, dual reflections and isomorphism formulas remain correct; the erroneous realization attribution is replaced with the exact lattice-only interface.",
    "uncertain": false,
    "source_urls": [
      "https://www.jmilne.org/math/Books/iAG2022.pdf"
    ],
    "familiar": true,
    "run": "frontier-40-geometry-braids-rep-27",
    "subject": "def-abstract-root-datum-and-its-weyl-group",
    "caught_at_stage": "7.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "item_sha256": "8f146689a695b27f74f9f5ab1214fb32cf70eefb9d5ed17fc0ae5246bb56104a",
    "adjudication_ref": {
      "report": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u19.json",
      "model": "gpt-6.1-sol",
      "context_sha256": "00433f0cd085dd4932756f8a1c5c9f317fb31373164d61f1b49ba16fa5e81d3f"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-parabolic-subgroup-of-an-affine-algebraic-group",
    "stage": "step7-initial-r1",
    "severity": "fatal",
    "disposition": "repaired",
    "finding": "The completeness definition applies only to integral varieties. For the smooth disconnected constant group (Z/2Z)_k and P=1 the quotient is proper and disconnected, so the unrestricted equivalence was ill-typed. Properness remains the general definition; completeness is now explicitly conditional on an integral quotient, preserving disconnected and nonsmooth-subgroup cases.",
    "repair": "The completeness definition applies only to integral varieties. For the smooth disconnected constant group (Z/2Z)_k and P=1 the quotient is proper and disconnected, so the unrestricted equivalence was ill-typed. Properness remains the general definition; completeness is now explicitly conditional on an integral quotient, preserving disconnected and nonsmooth-subgroup cases.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "run": "frontier-40-geometry-braids-rep-27",
    "subject": "def-parabolic-subgroup-of-an-affine-algebraic-group",
    "caught_at_stage": "7.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "item_sha256": "1d355cf3aa27a857be5647b9f3e934fd87ce679b8bce038748204b2937c50988",
    "adjudication_ref": {
      "report": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u19.json",
      "model": "gpt-6.1-sol",
      "context_sha256": "326bff300db738243c5790f3bd57c62d320b0d802a7f129de33650cc8014121a"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-chevalley-centralizer-radical-and-reductive-centralizers",
    "stage": "step7-initial-r1",
    "severity": "nonfatal",
    "disposition": "repaired",
    "finding": "F5 falsely made the weight set finite in arbitrary dimension: k[t,t^{-1}] under G_m has weights indexed by all integers. Steps 2.1 and 3.1 use a finite-dimensional V and an algebraically closed base field, so T is split and their finite weight sets are valid. Step 1.2 uses a fixed vector in a rational unipotent representation and does not need finite weight support. F5 now states the exact valid restriction.",
    "repair": "Checked the affine-chart/Kostant–Rosenlicht argument against Milne 17.56–17.65: the minimum weight line is unique because the projective orbit spans V and the T-fixed set is finite; the dual closed orbit makes the chart stable, and complete orbit closures plus affine closedness force I_u to act trivially. The split finite-dimensional qualifier repairs F5 without changing either intersection identity or its scheme centralizer consequences.",
    "uncertain": false,
    "source_urls": [
      "https://www.jmilne.org/math/Books/iAG2022.pdf"
    ],
    "familiar": false,
    "run": "frontier-40-geometry-braids-rep-27",
    "subject": "thm-chevalley-centralizer-radical-and-reductive-centralizers",
    "caught_at_stage": "7.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "item_sha256": "3da6314211e8bab1a8537bd6de135bad2657b847aa2a7d820f83f98a68482518",
    "adjudication_ref": {
      "report": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u19.json",
      "model": "gpt-6.1-sol",
      "context_sha256": "ffde055d450e0dca222566f691def744d156b413011423949f17c9304fe1893e"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-reductive-center-radical-and-semisimple-quotient",
    "stage": "step7-initial-r1",
    "severity": "nonfatal",
    "disposition": "repaired",
    "finding": "F7 omitted splitting over k; the real norm-one torus has no nonzero real character weights in its faithful two-dimensional representation. Step 1.2 explicitly works over the algebraic closure, where the central torus is split, so its determinant-character argument remains sound. F7 now restricts the k-decomposition to split tori and makes the scalar extension explicit.",
    "repair": "The determinant of each central-torus weight block kills Gprime and restricts to d_chi times chi; faithfulness generates the full character lattice, and these multiples generate a finite-index sublattice, proving finiteness scheme-theoretically even in characteristic p. Checked the radical/centre argument, rigidity and product route against Milne 12.36–12.46, 17.62, 19.21 and 21.49–21.50; all work geometrically and descend without assuming the centre or its finite kernels reduced. Only F7 changes; the Statement is identical.",
    "uncertain": false,
    "source_urls": [
      "https://www.jmilne.org/math/Books/iAG2022.pdf"
    ],
    "familiar": false,
    "run": "frontier-40-geometry-braids-rep-27",
    "subject": "lem-reductive-center-radical-and-semisimple-quotient",
    "caught_at_stage": "7.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "item_sha256": "4cfbc2a2020eb30d70bd921dae006d2022d43fa6602ce2bdf4229353e0eff6cd",
    "adjudication_ref": {
      "report": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u19.json",
      "model": "gpt-6.1-sol",
      "context_sha256": "948956c1e39343b114ed7a7efd9d171b903fd0a730a43ef573f923ca72a9ec29"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-cocharacter-limit-subgroups",
    "stage": "step7-initial-r1",
    "severity": "nonfatal",
    "disposition": "repaired",
    "finding": "F1 omitted affineness: for t[x:y]=[tx:y] on P1 and Z={[0:1]}, the attracting locus is A1, an open nonclosed subset. The supplied concentrator theorem guarantees closed realization and uniqueness only for affine X. All applications in steps 1.1–2.2 have X=G smooth affine and targets G or {e}; F1 now states those required hypotheses.",
    "repair": "Checked the full matrix and orbit argument against Milne 13.28–13.33 and 17.60. The limit map splits by Z and has kernel U on every algebra; the opposite weight blocks have trivial intersection with P, making multiplication an orbit immersion, and its tangent isomorphism makes that immersion open. Contraction connects U to the identity even for disconnected G. The reductive centralizer clause is geometric and descends. Only the introductory F1 hypotheses change; the Statement is preserved.",
    "uncertain": false,
    "source_urls": [
      "https://www.jmilne.org/math/Books/iAG2022.pdf"
    ],
    "familiar": false,
    "run": "frontier-40-geometry-braids-rep-27",
    "subject": "thm-cocharacter-limit-subgroups",
    "caught_at_stage": "7.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "item_sha256": "23e7903844da70f42b830a7d006bd8ebb7b1159c21995250f4acd18fd66c8c4d",
    "adjudication_ref": {
      "report": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u19.json",
      "model": "gpt-6.1-sol",
      "context_sha256": "e0477068b8a2093f07702b1f3aa166aa1270afa5285e8a6d5a4234d87228d790"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-homogeneous-curves-and-automorphisms-of-p1",
    "stage": "step7-initial-r1",
    "severity": "nonfatal",
    "disposition": "repaired",
    "finding": "F3 falsely asserted a character decomposition over k for every torus. The real norm-one torus gives a two-dimensional representation without real character lines. Statement (c) already assumes a weight decomposition, and G_m is split, so the endpoint argument is valid. F3 now uses precisely that assumption. Step 2.1 also makes its Aut(P1) proof functorial over base algebras by using local lifts modulo scalars.",
    "repair": "Read Milne 20.2–20.9 and 13.20: homogeneous complete curves become P1 geometrically, and a rational point splits the genus-zero form. With the stated character decomposition the projective fixed scheme is the disjoint union of projective weight spaces; factoring the lowest/highest powers extends a nonfixed G_m orbit to P1 with exactly two distinct endpoints, including inseparable orbit parametrizations. The Aut(P1) identification is justified on all base algebras by local degree-one bundle lifts. The entire Statement, including its conditional nonsplit-torus case, is unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://www.jmilne.org/math/Books/iAG2022.pdf"
    ],
    "familiar": false,
    "run": "frontier-40-geometry-braids-rep-27",
    "subject": "lem-homogeneous-curves-and-automorphisms-of-p1",
    "caught_at_stage": "7.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "item_sha256": "1c41d18bbe775a463764b74f284fdc57266c5664bd823b54eadaafddaaa1b61b",
    "adjudication_ref": {
      "report": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u19.json",
      "model": "gpt-6.1-sol",
      "context_sha256": "9c87b0d6007a6f446a63b6cd5a0e0ed62f353511ffaa259063641aad541166d4"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-rank-one-connected-groups",
    "stage": "step7-initial-r1",
    "severity": "nonfatal",
    "disposition": "repaired",
    "finding": "F3 overgeneralized Milne 20.12 from complete homogeneous spaces to arbitrary complete varieties. A nodal rational curve identifying 0 and infinity has a G_m action with one fixed point, despite dimension one. Step 1.1 uses only the smooth complete homogeneous quotient G/B, where the bound applies. F3 now states that exact scope and cites 20.22 for the central kernel. The rank-one Bruhat step now explicitly descends the SL2 matrix decomposition through the available universal central cover.",
    "repair": "Read Milne 20.10–20.22 and 20.31–20.32 in full. The bound comes from a linear projective embedding of H/Q, so it applies to G/B; nonsolvability gives positive dimension. The action kernel is central by 20.21–20.22, not by identifying it with the intersection of just the two T-containing Borels (the latter contains T). The universal central cover yields the two Bruhat strata and total-rank-one classification, including mu2 in characteristic two. Root spaces come from rank-one structure, not the differential of an inseparable isogeny. The Statement is unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://www.jmilne.org/math/Books/iAG2022.pdf"
    ],
    "familiar": false,
    "run": "frontier-40-geometry-braids-rep-27",
    "subject": "thm-rank-one-connected-groups",
    "caught_at_stage": "7.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "item_sha256": "4103c218b5f33adb7166a990c13eb186fa06ecdff1351a6a88e24af2d4e3cf8b",
    "adjudication_ref": {
      "report": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u19.json",
      "model": "gpt-6.1-sol",
      "context_sha256": "679765033eb14685cfa684837813d5236abaa69ce7d24f8947bcd2e9adf0e60a"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-weyl-group-borel-chambers",
    "stage": "step7-initial-r1",
    "severity": "fatal",
    "disposition": "repaired",
    "finding": "Statement (e) left B unbound and omitted T contained in B. If t in T(k) is outside a chosen Borel B, the representatives 1 and t of w=1 give distinct B-double cosets: BtB=B would imply t in B. Adding the explicit Borel B containing T is exactly the hypothesis used in proof 4.1; then two representatives differ by T(k), so their double cosets agree.",
    "repair": "Checked all five clauses using the actual root-subgroup and opposition interfaces. Rational representatives of the root reflections lift every geometric Weyl element, yielding constantness and the quotient description over all field extensions. The chamber and root-conjugation clauses remain unchanged. Clause (e) and proof 4.1 now bind a Borel containing T, which makes the representative-independence proof valid by absorption of T(k) into B(k). This does not change root conjugation or Weyl actions.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "run": "frontier-40-geometry-braids-rep-27",
    "subject": "thm-weyl-group-borel-chambers",
    "caught_at_stage": "7.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "item_sha256": "568d8047199459a42e4bf823e09d24226f91b889b540a8a7c38374e8cf5859a3",
    "adjudication_ref": {
      "report": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u19.json",
      "model": "gpt-6.1-sol",
      "context_sha256": "ce8ce6c43338a79ae0b72b1ab6d82c5728206c5d3f523600ea2b8737575778db"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-standard-levi-subgroup",
    "stage": "step7-initial-r1",
    "severity": "fatal",
    "disposition": "repaired",
    "finding": "Part (c) claimed that the base of B intersect L_I is I without binding B or requiring Delta=Delta(B). In SL2 with I=Delta={alpha}, L_I=G; the opposite Borel has base {-alpha}, contradicting that assertion. Fixing B containing T and its corresponding base makes the subsystem positive roots precisely Phi_I intersect Phi_plus(B), whose base is I. All bases are still allowed through their corresponding Borel.",
    "repair": "Read Milne 21.89–21.90 in full and checked the lattice argument directly. Characters vanishing on T_I form the saturation of ZI, so a root vanishes precisely when its simple coefficients outside I are zero; integrality then gives Phi_I=ZI intersect Phi. The inherited signs from the chosen B give base I and Weyl group W_I. In (d), zero pairings off alpha imply that every representative of s_beta centralizes lambda_alpha; central rational components change no root pairing. The repair supplies the exact missing Borel/base convention and preserves all four clauses.",
    "uncertain": false,
    "source_urls": [
      "https://www.jmilne.org/math/Books/iAG2022.pdf"
    ],
    "familiar": true,
    "run": "frontier-40-geometry-braids-rep-27",
    "subject": "lem-standard-levi-subgroup",
    "caught_at_stage": "7.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "item_sha256": "26b6b7fb1b0e940297029c5a074a5a3a39dc4d254cfd29a5b35723db6cd8079d",
    "adjudication_ref": {
      "report": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u19.json",
      "model": "gpt-6.1-sol",
      "context_sha256": "191c69adf6dfecdbc94ca908e7595014447d836d96929dd2fd505dbec196362e"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-standard-parabolics-in-gl-n",
    "stage": "step7-initial-r1",
    "severity": "fatal",
    "disposition": "repaired",
    "finding": "The Example gave P_I maps to I a codomain of parabolic subgroup varieties, although its values I are subsets of Delta. F2 and the actual classification supply the opposite map I maps to P_I onto those parabolics. Corrected only that arrow direction; the block matrices, Levi factors, flags, endpoints, maximal proper parabolics and Bruhat dimensions are preserved.",
    "repair": "Verified the example directly by block matrix equations over every k-algebra. The zero simple pairings of a block-constant decreasing cocharacter recover I, the complementary cuts define the invariant partial flag, and the zero/positive blocks give respectively the block Levi and unitriangular radical. All subsets correspond exactly to the standard smooth parabolics by F2, now with the correctly directed arrow. The n=1 and n=2 endpoints and inverse-permutation inversion-count argument remain sound. This changes only the Example paragraph; there is no Statement or Definition section to propagate.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "run": "frontier-40-geometry-braids-rep-27",
    "subject": "ex-standard-parabolics-in-gl-n",
    "caught_at_stage": "7.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "item_sha256": "298cbe2fa16edd3e2e84b79ba37dd87b3d4ae02b6c306960bd25f5310f9cd04b",
    "adjudication_ref": {
      "report": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u19.json",
      "model": "gpt-6.1-sol",
      "context_sha256": "7c331a9bfcce70b1e3f8a7bf9f7f84bafdd9135159ca2e7202c754e83e3a3ef2"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "frontier-40-geometry-braids-rep-27-step7-initial-r1-u20-1",
      "run": "frontier-40-geometry-braids-rep-27",
      "class": "accuracy",
      "subclass": "false-centre-remark",
      "severity": "nonfatal",
      "location": "Remarks",
      "subject": "lem-lie-algebra-of-a-semisimple-group-in-characteristic-zero-is-semisimple",
      "caught_at_stage": "7.1-initial-r1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "item_sha256": "7f41213aca48351e65b4556d43e087698db8838ad85bb3f207a2df33ff8a0c4c",
      "subclass_note": "The first Remark incorrectly makes the whole centre connected and trivial: for G=SL2 over C and n=0, H=G and Z(H)=mu2. The proof itself only needs and correctly proves triviality of the identity component, finiteness of the full centre, and vanishing of its Lie algebra in characteristic zero. Corrected the Remark without changing the Statement or Proof.",
      "defect_type": "other",
      "evidence": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u20.json",
          "anchor": "lem-lie-algebra-of-a-semisimple-group-in-characteristic-zero-is-semisimple"
        }
      ],
      "source": "current-round-adjudication"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "frontier-40-geometry-braids-rep-27-step7-initial-r1-u20-2",
      "run": "frontier-40-geometry-braids-rep-27",
      "class": "accuracy",
      "subclass": "citation-missing-root-coroot-interface",
      "severity": "fatal",
      "location": "Proof steps 1.1-2.1 and F3 (original carrier)",
      "subject": "lem-dominant-characters-arise-as-primitive-weights-for-split-reductive-groups",
      "caught_at_stage": "7.1-initial-r1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "item_sha256": "4cdb940b9d6113ad113760160c98fb2a82e5bdc4d8cbe26b5fbcd03bcb19461f",
      "subclass_note": "Original steps 1.1-2.1 attributed root-group restrictions and coroot pairings to F3 although its cited Statement supplies only central-kernel representation descent. Thus dominance of the pulled-back weight, needed for F2, was unsupported. Repaired locally from root-group, scheme-image, diagonalizable, and Borel suppliers: root-group kernel intersections vanish, images identify roots, rank-one reflections identify coroot pairings, and compatible product Borels give dominance before existence and descent.",
      "defect_type": "dependency_citation",
      "evidence": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u20.json",
          "anchor": "lem-dominant-characters-arise-as-primitive-weights-for-split-reductive-groups"
        }
      ],
      "source": "current-round-adjudication"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published defect was found in the prerequisite interfaces used here. Both assigned draft Statements are unchanged, so these repairs create no supplier-interface event or outside-consumer maintenance obligation."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-algebraic-cycle-and-cycle-group",
    "outcome": "confirmed_fatal",
    "reason": "The cited dimension definition applies only to Noetherian spaces, whereas X may be merely locally finite type. The repair explicitly defines chain dimension for arbitrary underlying spaces, agreeing with the supplier on Noetherian spaces, so the infinite-origins example now has dimension one and its cycle group is defined. Finite versus locally finite cycles and all existing conventions are preserved.",
    "disposition": "repaired",
    "uncertain": false,
    "stage": "Step 7 initial round 1",
    "audit_status": "local adjudication and repair; independent rejudgment is controller-owned"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-order-function-one-dimensional-local-domain",
    "outcome": "confirmed_nonfatal",
    "reason": "The original AC-use restriction overlooked the AC hypothesis of thm-one-dimensional-regular-local-rings-are-dvrs in step 4.1. The statement now identifies both inherited uses. The quotient finiteness argument, multiplication exact sequence, fraction independence, and uniformizer filtration prove the unchanged order assertions under AC.",
    "disposition": "repaired",
    "uncertain": false,
    "stage": "Step 7 initial round 1",
    "audit_status": "local adjudication and repair; independent rejudgment is controller-owned"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-smooth-immersion-normal-sequence-and-deformation-charts",
    "outcome": "confirmed_nonfatal",
    "reason": "F2 conflated pointwise smoothness with global geometric regularity. It now requires a chart at every prime for the global assertion and separately records regularity at a chart point. Step 1.1 only needs the latter, so the local parameter, conormal, etale-coordinate, blowup-chart and section arguments retain their hypotheses and the Statement is unchanged.",
    "disposition": "repaired",
    "uncertain": false,
    "stage": "Step 7 initial round 1",
    "audit_status": "local adjudication and repair; independent rejudgment is controller-owned"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-proper-pushforward-of-cycles-well-defined",
    "outcome": "confirmed_fatal",
    "reason": "The graded base-change assertion omitted pure relative dimension, so a flat disjoint union of dimensions zero and one gives no single shift. Clause (3) now explicitly includes the hypothesis already used in step 4.1. The norm identity uses commensurable finite lattices and local lengths; the remaining dimension-drop case reduces to equal degrees of the zero and infinity fibres of a finite map of proper curves. Cycle dimension now uses the extended supplier convention.",
    "disposition": "repaired",
    "uncertain": false,
    "stage": "Step 7 initial round 1",
    "audit_status": "local adjudication and repair; independent rejudgment is controller-owned"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-flat-pullback-chow-groups",
    "outcome": "confirmed_fatal",
    "reason": "The open immersion excluding the origin makes the preimage of that point empty, of dimension minus infinity rather than zero. Clause (1) and step 1.1 now separate empty preimages, assigning the zero cycle in the prescribed degree. Going down and transcendence degree prove the nonempty component dimensions; the flat local length and prime-filtration computations prove rational-equivalence compatibility without requiring surjectivity.",
    "disposition": "repaired",
    "uncertain": false,
    "stage": "Step 7 initial round 1",
    "audit_status": "local adjudication and repair; independent rejudgment is controller-owned"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-bivariant-chow-operations",
    "outcome": "confirmed_fatal",
    "reason": "The original definition admitted bases such as Spec Z for which the supplied Chow groups are undefined. It now fixes a field and the category of locally finite type k-schemes for Z, T, and every test scheme. Within that category fibre products are again locally finite type; proper, flat and Cartier compatibilities and the locally finite disjoint-union equality test retain their meaning.",
    "disposition": "repaired",
    "uncertain": false,
    "stage": "Step 7 initial round 1",
    "audit_status": "local adjudication and repair; independent rejudgment is controller-owned"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-koszul-resolution-and-flat-fibre-restriction",
    "outcome": "confirmed_fatal",
    "reason": "E was free notation with no local-freeness hypothesis, although step 2.1 uses local freeness to obtain fibre-parameter injectivity. Statement and Given now quantify E as a finite locally free sheaf on X. Koszul contraction handles the complement of the zero scheme; Tor against a Cartier equation proves restriction exactness, and disjoint support gives split exactness on B.",
    "disposition": "repaired",
    "uncertain": false,
    "stage": "Step 7 initial round 1",
    "audit_status": "local adjudication and repair; independent rejudgment is controller-owned"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-vector-bundle-chow-homotopy-invariance",
    "outcome": "confirmed_fatal",
    "reason": "The unrestricted base-change clause exceeded the locally finite type field category of localization and the projective bundle formula. The statement, Given and conclusion now identify that category explicitly. The infinity pushforward sends the projective-bundle basis to precisely its positive powers, leaving the pullback summand; rank zero is the identity.",
    "disposition": "repaired",
    "uncertain": false,
    "stage": "Step 7 initial round 1",
    "audit_status": "local adjudication and repair; independent rejudgment is controller-owned"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-zero-section-gysin-and-excess-vector-subbundle",
    "outcome": "confirmed_fatal",
    "reason": "The proof applied the pure-dimensional regular-section formula to the entire N without a pure-dimensional base. L2 now retains that hypothesis, and step 1.2 applies the formula only on N restricted to an integral cycle V: this total space is integral of dimension dim V+r, and the subbundle is cut by independent fibre coordinates. Proper compatibility pushes the identity to N; linearity and inverse bundle pullback finish the excess formula without imposing purity on T.",
    "disposition": "repaired",
    "uncertain": false,
    "stage": "Step 7 initial round 1",
    "audit_status": "local adjudication and repair; independent rejudgment is controller-owned"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-gysin-specialization-bivariant-and-base-change",
    "outcome": "confirmed_fatal",
    "reason": "The excess clause reversed the operation carrying the factor: a trivial rank-one N over a point has c_N=0 while c_0=id. The Statement now says c_N=c_top(N/N0) cap c_N0, exactly as step 4.1 proves by writing the cone class as bundle pullback from N0 and applying the subbundle excess identity. Cone embeddings use the conormal surjection after each base change; bivariant base restriction is reindexing in the field category.",
    "disposition": "repaired",
    "uncertain": false,
    "stage": "Step 7 initial round 1",
    "audit_status": "local adjudication and repair; independent rejudgment is controller-owned"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-refined-gysin-commutation-and-composition",
    "outcome": "confirmed_fatal",
    "reason": "Step 1.1 reversed the normal sequence: the normal line of the Cartier inverse image injects into the pulled-back virtual normal bundle. Dualizing the split local conormal surjection now gives this injection and defines Q as its quotient, so the excess formula supplies c_top(Q) followed by Cartier Gysin. The all-centre case remains the top Chern operator; composition uses the saturated deformation chart and the smooth-section cancellation. Statement unchanged.",
    "disposition": "repaired",
    "uncertain": false,
    "stage": "Step 7 initial round 1",
    "audit_status": "local adjudication and repair; independent rejudgment is controller-owned"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "cex-arbitrary-pullback-does-not-define-a-chow-operation",
    "outcome": "confirmed_fatal",
    "reason": "The cited blowup theorem supplied only local H-projectivity, leaving projectivity of the source unsupported. Step 1.1 now identifies this blowup with xv=yu in P2 times P1 using the two Rees charts and the isomorphism off p, then applies the Segre embedding. The regular-surface supplier supplies smoothness at a rational centre. Rationally equivalent p and q have preimages whose proper pushforwards are zero and the degree-one point, respectively.",
    "disposition": "repaired",
    "uncertain": false,
    "stage": "Step 7 initial round 1",
    "audit_status": "local adjudication and repair; independent rejudgment is controller-owned"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-chow-ring-naturality-and-projection-formula",
    "outcome": "confirmed_nonfatal",
    "reason": "L2 incorrectly called the graph smooth and confused the projections. It now identifies the graph as a regular section of pr_X, while step 2.1 applies the supplied regular-immersion-followed-by-smooth-projection identity with pr_Y and flat composite f. This proves agreement with flat pullback. Ring multiplicativity and proper projection formula use the operational description of the supplied Chow ring; the Statement is unchanged.",
    "disposition": "repaired",
    "uncertain": false,
    "stage": "Step 7 initial round 1",
    "audit_status": "local adjudication and repair; independent rejudgment is controller-owned"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-chern-class-naturality-additivity-and-splitting",
    "outcome": "confirmed_fatal",
    "reason": "Finite locally free bundles can have distinct ranks on different components, so the single global length-r line filtration was false. The repair defines Chern classes and filtrations on the finite open-and-closed rank loci. A uniform tower uses the current kernel on active loci and a trivial rank-j bundle elsewhere, giving each stage constant relative dimension j-1. Thus X prime remains smooth equidimensional, bundle pullback is injective, and every rank-r locus has its length-r filtration. Whitney, naturality and duality are componentwise; no constant-rank hypothesis is imposed on the original bundle.",
    "disposition": "repaired",
    "uncertain": false,
    "stage": "Step 7 initial round 1",
    "audit_status": "local adjudication and repair; independent rejudgment is controller-owned"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-operational-chern-classes-and-whitney-formula",
    "supplier": "def-bivariant-chow-operations",
    "disposition": "frontier-owner-repair-required",
    "reason": "The Statement and Given say a finite type scheme T without a field base and every T prime to T without a category. The projective bundle and bivariant suppliers require locally finite type schemes over one field. Make this category explicit in Statement and Given; its current projective-relation, Whitney and regular-section proofs work in that category. Specify T locally of finite type over k as well: the assigned zero-section proof applies the section formula to total bundles over integral locally finite type cycle schemes. The existing projective-relation and flag-tower argument uses the locally finite type projective bundle formula and does not need quasi-compactness.",
    "affected_use": "[L2] Bivariant operations and their compatibilities; the first Chern class cap operation $\\xi\\cap-$ commutes with proper pushforward and flat pullback, and two Cartier operations commute ([[def-bivariant-chow-operations]], [[def-intersection-with-a-cartier-divisor-and-first-chern-class]]).",
    "minimality": "Only the named ambient-category or rank-locus qualification is required; preserve every formula and do not expand through unchanged consumer statements.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-refined-gysin-pullback-for-regular-embeddings",
    "supplier": "lem-vector-bundle-chow-homotopy-invariance",
    "disposition": "frontier-owner-repair-required",
    "reason": "The formula uses A_m(Y prime) and inverse bundle pullback for any f:Y prime to Y, without an ambient field or locally finite type qualification. Spec Z with the identity illustrates the unsupported ambient scope. Add the same fixed-field locally finite type category to the Definition and require fixed pure relative dimension in its flat compatibility identity. The displayed excess identity itself already has the corrected direction.",
    "affected_use": "Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the smooth\nnormal-sequence suppliers. Let $i:X\\hookrightarrow Y$ be a regular closed\nembedding of codimension $d$ with normal bundle $N$. In particular a closed\nembedding of smooth schemes of constant codimension is regular. For any\n$f:Y'\\to Y$, put $X'=X\\times_YY'$ and $N'=N|_{X'}$. The pulled-back ideal gives\na closed immersion $a:C_{X'}Y'\\hookrightarrow N'$. Define\n$$i^!_{Y'}=(p'^*)^{-1}a_*\\sigma_{X'/Y'}:A_m(Y')\\longrightarrow A_{m-d}(X'),$$\nusing [[def-deformation-to-the-normal-cone-and-specialization]] and\n[[lem-vector-bundle-chow-homotopy-invariance]]. No fibre product of deformation\nspaces over $\\mathbb P^1$ with a fictitious map to $Y$ is used. The same\nconstruction for a regular locally closed embedding uses restriction to an open\nin which it is closed; the operations agree under further restriction and\nextension of cycles, so this is intrinsic.\n\n**Well-definedness.** The construction and the arbitrary-base-change bivariant\naxioms are proved in\n[[lem-gysin-specialization-bivariant-and-base-change]]: the specialization\n$\\sigma_{X'/Y'}$ is well defined on Chow groups by the triviality of the normal\nline at infinity, the cone embedding exists by the Rees-algebra surjection, and\n$a_*$ and $(p'^*)^{-1}$ are the proper pushforward and inverse flat pullback of\n[[lem-vector-bundle-chow-homotopy-invariance]]. The excess formula is the\ncorresponding statement of [[lem-gysin-specialization-bivariant-and-base-change]];\nfor the self-intersection formula apply it to the base change $Y'=X$, where the\nideal is zero, the cone is the zero section and the quotient bundle is $N$, and\nuse proper compatibility to identify the restricted operation with $i^!i_*$. For\nthe agreement with Cartier divisor Gysin in codimension one, test on an integral\nbase cycle: if the cycle is not contained in the divisor its cone is the normal\nline and the operation is its Cartier fundamental cycle, while if it is\ncontained the zero-cone computation gives $c_1$ of the restricted normal line,\nwhich are exactly the two cases of the Cartier Gysin of\n[[def-intersection-with-a-cartier-divisor-and-first-chern-class]]. Commutation\nand composition, including the necessary cone computation with the saturated\nstrict transforms in the deformation charts, are\n[[lem-refined-gysin-commutation-and-composition]]. Locality for locally closed\nembeddings follows because on each cycle the identical ideal and normal bundle\ngive identical operators, and in overlaps the two restrictions agree. The\noperational projection formula is the proper axiom of a bivariant class\n([[lem-refined-gysin-commutation-and-composition]]); its ring interpretation is\nprovided by the later smooth-ring theorem and is not a prerequisite for this\nconstruction.",
    "minimality": "Only the named ambient-category or rank-locus qualification is required; preserve every formula and do not expand through unchanged consumer statements.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-refined-gysin-pullback-for-regular-embeddings",
    "supplier": "lem-gysin-specialization-bivariant-and-base-change",
    "disposition": "frontier-owner-repair-required",
    "reason": "The formula uses A_m(Y prime) and inverse bundle pullback for any f:Y prime to Y, without an ambient field or locally finite type qualification. Spec Z with the identity illustrates the unsupported ambient scope. Add the same fixed-field locally finite type category to the Definition and require fixed pure relative dimension in its flat compatibility identity. The displayed excess identity itself already has the corrected direction.",
    "affected_use": "**Well-definedness.** The construction and the arbitrary-base-change bivariant\naxioms are proved in\n[[lem-gysin-specialization-bivariant-and-base-change]]: the specialization\n$\\sigma_{X'/Y'}$ is well defined on Chow groups by the triviality of the normal\nline at infinity, the cone embedding exists by the Rees-algebra surjection, and\n$a_*$ and $(p'^*)^{-1}$ are the proper pushforward and inverse flat pullback of\n[[lem-vector-bundle-chow-homotopy-invariance]]. The excess formula is the\ncorresponding statement of [[lem-gysin-specialization-bivariant-and-base-change]];\nfor the self-intersection formula apply it to the base change $Y'=X$, where the\nideal is zero, the cone is the zero section and the quotient bundle is $N$, and\nuse proper compatibility to identify the restricted operation with $i^!i_*$. For\nthe agreement with Cartier divisor Gysin in codimension one, test on an integral\nbase cycle: if the cycle is not contained in the divisor its cone is the normal\nline and the operation is its Cartier fundamental cycle, while if it is\ncontained the zero-cone computation gives $c_1$ of the restricted normal line,\nwhich are exactly the two cases of the Cartier Gysin of\n[[def-intersection-with-a-cartier-divisor-and-first-chern-class]]. Commutation\nand composition, including the necessary cone computation with the saturated\nstrict transforms in the deformation charts, are\n[[lem-refined-gysin-commutation-and-composition]]. Locality for locally closed\nembeddings follows because on each cycle the identical ideal and normal bundle\ngive identical operators, and in overlaps the two restrictions agree. The\noperational projection formula is the proper axiom of a bivariant class\n([[lem-refined-gysin-commutation-and-composition]]); its ring interpretation is\nprovided by the later smooth-ring theorem and is not a prerequisite for this\nconstruction.",
    "minimality": "Only the named ambient-category or rank-locus qualification is required; preserve every formula and do not expand through unchanged consumer statements.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-refined-gysin-pullback-for-regular-embeddings",
    "supplier": "lem-refined-gysin-commutation-and-composition",
    "disposition": "frontier-owner-repair-required",
    "reason": "The formula uses A_m(Y prime) and inverse bundle pullback for any f:Y prime to Y, without an ambient field or locally finite type qualification. Spec Z with the identity illustrates the unsupported ambient scope. Add the same fixed-field locally finite type category to the Definition and require fixed pure relative dimension in its flat compatibility identity. The displayed excess identity itself already has the corrected direction.",
    "affected_use": "**Well-definedness.** The construction and the arbitrary-base-change bivariant\naxioms are proved in\n[[lem-gysin-specialization-bivariant-and-base-change]]: the specialization\n$\\sigma_{X'/Y'}$ is well defined on Chow groups by the triviality of the normal\nline at infinity, the cone embedding exists by the Rees-algebra surjection, and\n$a_*$ and $(p'^*)^{-1}$ are the proper pushforward and inverse flat pullback of\n[[lem-vector-bundle-chow-homotopy-invariance]]. The excess formula is the\ncorresponding statement of [[lem-gysin-specialization-bivariant-and-base-change]];\nfor the self-intersection formula apply it to the base change $Y'=X$, where the\nideal is zero, the cone is the zero section and the quotient bundle is $N$, and\nuse proper compatibility to identify the restricted operation with $i^!i_*$. For\nthe agreement with Cartier divisor Gysin in codimension one, test on an integral\nbase cycle: if the cycle is not contained in the divisor its cone is the normal\nline and the operation is its Cartier fundamental cycle, while if it is\ncontained the zero-cone computation gives $c_1$ of the restricted normal line,\nwhich are exactly the two cases of the Cartier Gysin of\n[[def-intersection-with-a-cartier-divisor-and-first-chern-class]]. Commutation\nand composition, including the necessary cone computation with the saturated\nstrict transforms in the deformation charts, are\n[[lem-refined-gysin-commutation-and-composition]]. Locality for locally closed\nembeddings follows because on each cycle the identical ideal and normal bundle\ngive identical operators, and in overlaps the two restrictions agree. The\noperational projection formula is the proper axiom of a bivariant class\n([[lem-refined-gysin-commutation-and-composition]]); its ring interpretation is\nprovided by the later smooth-ring theorem and is not a prerequisite for this\nconstruction.",
    "minimality": "Only the named ambient-category or rank-locus qualification is required; preserve every formula and do not expand through unchanged consumer statements.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-chern-character-and-todd-class-multiplicativity",
    "supplier": "lem-chern-class-naturality-additivity-and-splitting",
    "disposition": "frontier-owner-repair-required",
    "reason": "L1 and steps 1.1-1.3 require a single global filtration with invertible quotients for unrestricted finite locally free E, E prime, E double prime, F. Distinct component ranks make that impossible. Apply the repaired splitting tower and root arguments on the common finite rank-locus refinement; descend the componentwise identities. The identities in the Statement need not change.",
    "affected_use": "[L1] The splitting principle: there is a composition of projective bundles $f:X'\\to X$ with $f^*$ injective on the Chow ring after tensoring with $\\mathbb Q$, such that $f^*\\mathcal E$ has a filtration with invertible quotients; any symmetric polynomial identity in the Chern roots proved after this pullback holds before it ([[lem-chern-class-naturality-additivity-and-splitting]], [[def-chern-character-and-todd-class]]).",
    "minimality": "Only the named ambient-category or rank-locus qualification is required; preserve every formula and do not expand through unchanged consumer statements.",
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "disposition": "no_update",
    "reason": "All direct consumers of changed interfaces are frozen-frontier draft items. No published or outside consumer finding was discovered in this direct-hop review.",
    "uncertain": false
  },
  {
    "ledger": "canonical_defect",
    "id": "def-model-category-and-quillen-adjunction",
    "outcome": "confirmed_fatal",
    "disposition": "repaired",
    "reason": "A simplicial functor L alone does not identify enriched mapping objects: the constant simplicial-set functor from discretely enriched Set is simplicial, but Map(const 1, Delta[1]) is Delta[1], whereas Map(1, vertices Delta[1]) is discrete with two points. Replaced the last clause by an enriched adjunction whose underlying adjunction is Quillen, consistent with Gambino Definition 2.2. Ordinary model and Quillen axioms are unchanged.",
    "path": "research/defect-ledger.jsonl",
    "status": "closed-local-repair",
    "run": "frontier-40-geometry-braids-rep-27",
    "stage": "Step 7.1",
    "uncertain": false
  },
  {
    "ledger": "canonical_defect",
    "id": "def-simplicial-set-homotopy-and-trivial-kan-fibration",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "reason": "The primary boundary definition by nonsurjective maps is correct, but the following explanatory sentence reverses it: the two vertices of Delta[1] lie in proper-face images, while its identity simplex does not. Replaced that sentence by the union-of-proper-face-images characterization, retaining the empty boundary in degree zero and all homotopy and lifting definitions.",
    "path": "research/defect-ledger.jsonl",
    "status": "closed-local-repair",
    "run": "frontier-40-geometry-braids-rep-27",
    "stage": "Step 7.1",
    "uncertain": false
  },
  {
    "ledger": "canonical_defect",
    "id": "lem-contractible-cosimplicial-evaluation-computes-derived-colimit",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "reason": "For the point over Z the unaugmented free complex has H_0=Z, so step 2.2 incorrectly called it chain contractible. Repaired that step to apply the prism homotopy equivalence to the point's complex, compute its differential (identity in positive even degrees, zero in odd degrees), and deduce acyclicity only after augmentation. Exact evaluation rows, augmented columns, finite-diagonal elimination and augmentation-compatible comparison maps then prove the unchanged canonical derived-colimit claim.",
    "path": "research/defect-ledger.jsonl",
    "status": "closed-local-repair",
    "run": "frontier-40-geometry-braids-rep-27",
    "stage": "Step 7.1",
    "uncertain": false
  },
  {
    "ledger": "canonical_defect",
    "id": "thm-dold-kan-equivalence-for-simplicial-modules",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "reason": "F2's normalization supplier states the chain homotopy equivalence, not exactness of the normalization functor. The proof already constructs the necessary natural direct-sum projection. Removed the inaccurate F2 attribution and proved exactness locally: project any degreewise lift of a normalized element into the normalized summand; naturality preserves its image, and intersections of face kernels preserve kernels. Checked the splitting recursion, signed last-face inverse rules, composition including missing indices and d^2=0, and both inverse comparisons over constant R. The equivalence and exactness statements are unchanged.",
    "path": "research/defect-ledger.jsonl",
    "status": "closed-local-repair",
    "run": "frontier-40-geometry-braids-rep-27",
    "stage": "Step 7.1",
    "uncertain": false
  },
  {
    "ledger": "canonical_defect",
    "id": "def-morphism-and-fibre-products-of-algebraic-spaces",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "reason": "The last paragraph incorrectly calls the diagonal morphism an algebraic-space object, despite correctly saying it is representable by schemes in the next clause. Corrected the types: products are algebraic spaces, and the diagonal is a representable morphism between algebraic spaces. The earlier fibre-product argument is valid: component equality loci represent the diagonal; the product of the two etale covers over H is a scheme by Delta_H, and its scheme base changes are products of etale surjective schemes. No geometric hypothesis changes.",
    "path": "research/defect-ledger.jsonl",
    "status": "closed-local-repair",
    "run": "frontier-40-geometry-braids-rep-27",
    "stage": "Step 7.1",
    "uncertain": false
  },
  {
    "ledger": "canonical_defect",
    "id": "lem-presentation-from-surjective-etale-map",
    "outcome": "confirmed_fatal",
    "disposition": "repaired",
    "reason": "The sheafification Statement guarantees finite limits of sheaves only, whereas P_{U/R} is a presheaf, so the cited implication in step 2.1 is not licensed. Replaced it by a direct two-step-plus proof: equality of images of matching-family classes holds after a common refinement, where componentwise injectivity forces equality of the original classes. Repeating plus yields the required injection into F^{++}=F. Etale surjectivity supplies local quotient lifts, which agree by this injection and glue uniquely. Kernel-pair groupoid operations and etale projections are unchanged.",
    "path": "research/defect-ledger.jsonl",
    "status": "closed-local-repair",
    "run": "frontier-40-geometry-braids-rep-27",
    "stage": "Step 7.1",
    "uncertain": false
  },
  {
    "ledger": "canonical_defect",
    "id": "lem-variable-base-cotensor-corner-and-path-objects",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "reason": "F2 attributes an exact categorical normalization equivalence to dependencies whose Statements do not supply it. That equivalence is unnecessary for this proof, so replaced the extraneous clause with the supplied underlying-set-homotopy-to-normalized-quasi-isomorphism result actually used in step 3.1. Also made the boundary-lifting-against-monomorphisms prerequisite explicit as F3 and a direct dependency. The set-exponent adjunction proves the corner statements via the anodyne product lemma; minimum on the interval gives the constant-path homotopy, and the relative construction preserves constant augmentation values. The unchanged relative hypothesis is fibrancy, with split B-augmentations as a valid special case.",
    "path": "research/defect-ledger.jsonl",
    "status": "closed-local-repair",
    "run": "frontier-40-geometry-braids-rep-27",
    "stage": "Step 7.1",
    "uncertain": false
  },
  {
    "ledger": "canonical_defect",
    "id": "lem-quotient-map-etale-when-quotient-is-algebraic-space",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "reason": "F2's claim that unramifiedness is fppf-local on the source is false: Spec k is unramified over k but its fppf source cover A^1_k is not. The actual proof uses faithful flat target descent, not that assertion. Replaced F2 by the precise etale criterion, stability and scalar differential/flatness facts. Made the finite affine refinement and faithful zero-detection prerequisites explicit in F4, and justified the kernel-pair identification by descent of the unique local R-witness. The existing finite generators/relations descent argument then proves local finite presentation, flatness and vanishing Omega, hence etaleness; surjectivity follows from the covering. The Statement is unchanged.",
    "path": "research/defect-ledger.jsonl",
    "status": "closed-local-repair",
    "run": "frontier-40-geometry-braids-rep-27",
    "stage": "Step 7.1",
    "uncertain": false
  },
  {
    "ledger": "canonical_defect",
    "id": "lem-replacement-invariant-derived-enriched-mapping-spaces",
    "outcome": "confirmed_fatal",
    "disposition": "repaired",
    "reason": "The retraction square in step 2.1 uses D to 0, which is ill-typed in Alg_A/B when B is nonzero: no unital map 0 to B exists. Replaced 0 by the model category's terminal object and specified identity B in a slice. The homotopy square now uses the categorical product E times_terminal E and the relative path object E^{Delta[1]} times_{B^{Delta[1]}} B. Retraction and homotopy lifts are valid for fibrant sliced objects. Also corrected F2's mapping-corner citation to the model-structure theorem which actually supplies it. Checked source invariance via sections and cotensor corners, enriched adjunction via its strict mapping isomorphism, and the localization argument using functorial cofibrant-then-fibrant replacements and endpoint inverses. The Statement is unchanged.",
    "path": "research/defect-ledger.jsonl",
    "status": "closed-local-repair",
    "run": "frontier-40-geometry-braids-rep-27",
    "stage": "Step 7.1",
    "uncertain": false
  },
  {
    "ledger": "canonical_defect",
    "path": "research/defect-ledger.jsonl",
    "run": "frontier-40-geometry-braids-rep-27",
    "stage": "Step 7.1 direct-consumer examination",
    "id": "thm-projective-models-for-simplicial-and-variable-module-diagrams",
    "supplier": "def-model-category-and-quillen-adjunction",
    "status": "route-to-frontier-owner",
    "affected_use": "F2 calls an ordinary Quillen adjunction enriched without stating the enriched isomorphism; step 4.1 separately claims an enriched colimit/restriction adjunction.",
    "exact_snippet": "[F2] A model category is defined by the retract, two-out-of-three, lifting and factorization axioms; an enriched Quillen adjunction is an adjunction whose right adjoint preserves fibrations and trivial fibrations ([[def-model-category-and-quillen-adjunction]]).",
    "invalidated_claim": "Preservation of fibrations and trivial fibrations establishes the ordinary Quillen condition but does not establish enriched adjunction.",
    "minimality": "Correct F2 to require a natural enriched mapping-object isomorphism; examine the already asserted colimit/restriction enrichment in step 4.1. No weakening of the Statement is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical_defect",
    "path": "research/defect-ledger.jsonl",
    "run": "frontier-40-geometry-braids-rep-27",
    "stage": "Step 7.1 direct-consumer examination",
    "id": "lem-open-immersion-gluing-of-algebraic-spaces",
    "supplier": "def-morphism-and-fibre-products-of-algebraic-spaces",
    "status": "route-to-frontier-owner",
    "affected_use": "F1 repeats 'products, fibre products and diagonals ... are algebraic spaces'; steps 1.1 and 3.1 actually use representable diagonal equality loci.",
    "exact_snippet": "products, fibre products and diagonals of algebraic spaces exist and are algebraic spaces",
    "invalidated_claim": "A diagonal is a morphism, so the object assertion repeated in F1 is ill-typed.",
    "minimality": "Replace only the F1 type assertion by products and fibre products are algebraic spaces and diagonals are representable morphisms. The equality-locus proof already uses the correctly typed assertion.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published_consumer_supplier",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "All fifteen direct consumers of the three changed definitions are in the frozen draft frontier. No published or outside-frontier consumer defect was discovered in this assigned review; the two repeated defective clauses are routed to frontier owners.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-infinitesimal-deformation-functor-over-square-zero-extension",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "24",
    "model": "gpt-6.1-sol",
    "context_sha256": "3d8b4417c8b659682bb0e764034739e399d0dcfda49b92b04bb838e90b70347d",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "defect_type": "logic",
    "status": "repaired",
    "finding": "For B=k x k augmented by first projection and X=Spec k, adjoining a disjoint union of second-factor points of any cardinality gives flat locally finitely presented deformations with distinct isomorphism classes. Thus the unrestricted assertion of a set is false. The repair preserves arbitrary bases and qualifies smallness for nilpotent augmentation ideals.",
    "evidence_path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u24.json",
    "uncertain": false,
    "source_urls": [
      "https://stacks.math.columbia.edu/tag/04EW",
      "https://stacks.math.columbia.edu/tag/0DY7"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-affine-deformations-obstruction-and-torsor",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "24",
    "model": "gpt-6.1-sol",
    "context_sha256": "71c76768adcac20ce4f71d6fa06dbafe147bcea0e2b5fd1bec67a63520ceb7ab",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "defect_type": null,
    "status": "repaired",
    "finding": "F4 confuses the degree -1 free module F tensor_R B with the conormal module K/K^2, which is its quotient by the degree -2 differential. For instance a redundant two-generator presentation of K=(t) has F tensor_R k=k^2 but K/K^2=k. The main obstruction/torsor result follows independently from the exact source theorem F3, so this is nonfatal. F4 is corrected, and the flat specialization now exposes the arbitrary square-zero finiteness already proved in step 2.1.",
    "evidence_path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u24.json",
    "uncertain": false,
    "source_urls": [
      "https://stacks.math.columbia.edu/tag/09AM",
      "https://stacks.math.columbia.edu/tag/08SM",
      "https://stacks.math.columbia.edu/tag/063Y"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-first-order-deformations-controlled-by-ext-one-cotangent-complex",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "24",
    "model": "gpt-6.1-sol",
    "context_sha256": "554672674bdaac0c78600e339876afb5edffd65a09e93a2e0fbb8f11765bbdff",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "finding": "On the rejected carrier, proof 1.1 and 2.1 use finite presentation of lifts over k[I] for arbitrary I, but the supplier Statement restricts this conclusion to small Artin extensions. Thus the correspondence between all ringed-space solutions and the stipulated locally finitely presented scheme deformations is unsupported by the cited interface. Repair is completed in the assigned supplier: its existing proof 2.1 establishes the needed arbitrary-square-zero result, now stated explicitly. The theorem F2 now records the precise arbitrary-square-zero finiteness application used by proof 1.1 and 2.1.",
    "evidence_path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u24.json",
    "uncertain": false,
    "source_urls": [
      "https://stacks.math.columbia.edu/tag/08UX",
      "https://stacks.math.columbia.edu/tag/04EW",
      "https://stacks.math.columbia.edu/tag/063Y",
      "https://stacks.math.columbia.edu/tag/051C"
    ],
    "familiar": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "run": "frontier-40-geometry-braids-rep-27",
    "unit": "24",
    "status": "no-published-findings",
    "finding": "Both changed interfaces have only the seven recorded direct draft-frontier consumers; inspected relevant proof/definition/page uses remain sound. No potentially defective published consumer was discovered and no published item was edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-normal-surface-modification-and-normalized-point-blowup",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The unqualified dimension-one remark is false: the cusp ideal (t²,t³) is not invertible. Restricted the remark to regular integral curves, where the point stalk is a principal DVR ideal and the other stalks are units; the Rees construction for an invertible ideal gives the identity. The entire Definition is unchanged, so there is no interface propagation.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "post_sha256": "e749ab1c3de0b084719b10546658a78d335c0b4df89e807528f9fce7794d7c2c",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-cm-local-codimension-and-regular-quotient-ext-concentration",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "F9 omitted enough injectives and supplied injective resolution data from the exact cited Statement; restored both. Step 1.3 proves its forward implication directly using the finite projective resolution. The codimension formula, prime-avoidance sequence, shifted quotient adjunction, biduality, reversed dual resolution and localization establish (a)-(c) with stated AC/DC. Removed duplicate trailing tags and corrected the obsolete remark locator; Statement unchanged.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "post_sha256": "d090ae57d0ad0984234c936489ab0b536f0370f7a25effc0ab84de14ebe48ad2",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-finite-over-projective-noetherian-affine-base-is-projective",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "F4 incorrectly defined coherence as finite presentation over an arbitrary base. Replaced this by the finite-kernel definition and verified kernels as submodules of Noetherian A^n. The algebra C is generated in degree one and its degree-one b satisfies b²=z·(b² in degree one), which justifies D_+(z)=Proj(C). Coherent twisting gives a finite relative projective embedding; base change and Segre compose it with X over R. Statement unchanged.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "post_sha256": "e259a276fbe823401c2c503bae6da65b129a10f871328397e4485edf4e019bb3",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-regular-surface-reflexive-modules-and-codimension-one-lattices",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "Passed to N=M/tors(M) before using height-one DVR freeness; duals and top exterior double duals kill the torsion, and the evaluation intersection criterion identifies the two hulls. Explicitly supplied Serre S2 for the general normal-domain assertion. Adopted precheck’s dependency-compatible order by placing that independent assertion at step 1.2, with later references renumbered. The Statement is unchanged; this is a local proof repair, not an independent audit.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "post_sha256": "cfb2094cf6b0a052c75a311c30e4efe5fa456cafd2cd21e0b76b9ec2435c6862",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-surface-derivations-and-regular-hypersurfaces",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The smoothness remark is false for z^p=t over F_p[t]: the total ring is F_p[z] but its geometric fibres are nonreduced. Replaced it with that explicit caveat. The localization quotient rule and completion estimate D(I^(n+1))⊂I^n establish the extensions; a unit derivative excludes a square of the local maximal ideal, so the cited parameter quotient criterion proves regularity. Statement unchanged.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "post_sha256": "fdee9c91eb640e0ffbf848fce626250d1e5de1b8ee47072a6c0768f57dde61d2",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-surface-flat-base-change-coherent-cohomology-by-cech",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "Step 6.1 wrongly used cohomology of Spec A_p in place of the base-changed scheme; P¹_k with O(-2) disproves that assertion. Corrected it to H^q(X,F)_p≅H^q(X×_A Spec A_p,F_Ap), obtained by the same flat-localization Čech computation. Finite affine intersections and degreewise tensor identifications compute the canonical map; flat C preserves cohomology without F being A-flat. Statement unchanged.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "post_sha256": "343382be26482af2138dedc88034dcc723839e86b7bd442f370966ddd5b5ce69",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-normal-complete-surface-nonsingular-formal-arc-blowups-terminate",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "evidence": "Noetherianity was omitted despite finite-generator, CM-codimension and DVR prerequisites. Made it explicit and removed unused completeness/equicharacteristic qualifiers on A, preserving the intended Noetherian surface claim in every characteristic. Read the whole proof of Stacks 54.10.2; verified decreasing exponents, finite generator drops, unchanged height-one DVR localization and successor dimension two. The two direct consumers will use this stronger characteristic-free interface.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "post_sha256": "6a3459ab5a643e6a7877eb869b22cdad623771825514326e86fd06785136d778",
    "source_urls": [
      "https://stacks.math.columbia.edu/tag/0BG3"
    ],
    "familiar": false,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-normal-surface-modification-leray-short-exact-sequence",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The five-term sequence identifies the cokernel with ker(H⁰(R¹g_*O)→H²(O_X)), not an image of H⁰(R¹g_*O). Corrected that clause. Proper coherent pushforward and integral closedness give g_*O=O, codimension-one isomorphism gives finite-point support, and the two-affine projective-cover supplier makes H²(O_X)=0, giving the stated short exact sequence. Statement unchanged; the underlying abelian-sheaf Leray interface applies in every characteristic.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "post_sha256": "9a9598a0cc13f75e58be9419d78cfe5bf31eaeb9ae8a8b6632f74415922bade1",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "id": "thm-leray-spectral-sequence-for-sheaf-cohomology",
    "status": "proposed-maintenance",
    "affected_use": "The final Statement paragraph explains O-module Leray by flatness over Z on a C-scheme, although the theorem and this normal-surface consumer allow arbitrary schemes.",
    "invalidated_claim": "The stated C-scheme rationale does not explain the general O-module assertion; its F7 flasque-injective comparison does. The consumer uses the valid abelian-sheaf spectral sequence, so its injection and short exact sequence remain sound.",
    "minimality": "Owner may remove the unnecessary C-scheme rationale and use its existing general ringed-space F7 comparison. No published carrier edited.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-surface-completed-polynomial-generic-fibre",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "evidence": "The fibre requires a prime r; r=(t²) over A=k makes κ(r) undefined. Explicitly required primality in Statement and Given. Read all of Stacks 07PU, and checked finite complete coefficient-domain reductions, completion factors, separable regular base change, detecting derivations for degree-p steps and ∂/∂t(t-f)=1. Replaced the incorrect F3 citation for existence of a regular power-series subring by its actual supplier, and cited completion regularity and the field test directly. The finite-type formal-fibre consumer uses an actual polynomial fibre prime, so its application remains sound.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "post_sha256": "d113cb94351db97c971f396f2916425fda6bd087cf82996a6182f5b8bfe7c8d1",
    "source_urls": [
      "https://stacks.math.columbia.edu/tag/07PU"
    ],
    "familiar": false,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-surface-regular-fibres-preserve-normality",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "evidence": "The domain-only F2 did not apply to a general flat target, e.g. k×k. Cited the existing general Noetherian Serre criterion and rebuilt the local argument: high-dimensional base localizations supply depth≥2, low-dimensional ones are regular and regularity ascends. The depth bound excludes a high-dimensional base above target dimension≤1. This proves S2 and R1 without a target-domain assumption; the flat completion map with regular formal fibres then gives a normal local domain. Statement unchanged.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "post_sha256": "f1340160afb318e827f90ae23324b066ebd8daaf90a47032c7a4397f86232e32",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-normalized-point-blowups-dominate-local-normal-surface-modifications",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "evidence": "The fraction must be chosen with a,b in O_{S,x}, not merely in the curve DVR. Read the complete Stacks 0BBT argument, and supplied this choice. Transcendental nonzero residue forces equal positive valuation and m_x membership; invertibility gives regular quotients after division, and finite centre-residue extension keeps their common valuation positive. Codimension-one isomorphism identifies the DVR and makes strict transforms unique. Finite valuation descent removes a curve, and induction on the finite curve count yields S_n→Y. Statement unchanged.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "post_sha256": "6fec19b8c21cee7c8717282dca641f10bc9df4329bc94274c975d0d6991c7ab1",
    "source_urls": [
      "https://stacks.math.columbia.edu/tag/0BBT"
    ],
    "familiar": false,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-projective-normal-surface-grauert-riemenschneider-vanishing",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "evidence": "For a noninjective finite R-domain such as R/(s), Hom_R(A,R)=0 and the two-dimensional dualizing-module supplier does not apply. Required dimension two and a local injection R↪A, the intended surface dualizing setting, and established projectivity over R using finite-over-projective composition. Checked the full Stacks 0AXD duality argument: a nonzero H¹ quotient gives α to κ[1], finite coherent biduality keeps its dual nonzero, and the normalized residue dual gives the forbidden map κ[-1]→RΓ(O_X).",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "post_sha256": "a88ce2920d44036bc0fa97d113ffee37c07d0cae16c83d7ab037427bb7bd19f8",
    "source_urls": [
      "https://stacks.math.columbia.edu/tag/0AXD"
    ],
    "familiar": false,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "evidence": "F3 was used at a successor without supplying its normal-completion prerequisite. Added the actual regular-fibre completion supplier, rationality propagation, the rational-domain Definition and local dimension helper: successor B is normal of dimension two, rational with invertible canonical module, and essentially finite type in the permitted class, so its completion is normal. Read the entire relevant Stacks 0BGB discussion. Distinguished the full chart bracket G from its residue cubic h; at the generic DVR v(x₁)=2 and v(w)=1 force G to be a unit. Simple-root cotangent quadratics are nonsquare in every characteristic. Statement unchanged.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "post_sha256": "dfeab44ec2173580e05aa1957c86fb5b4b680bf04e54c649f4892f44f82e7c97",
    "source_urls": [
      "https://stacks.math.columbia.edu/tag/0BGB"
    ],
    "familiar": false,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-complete-equicharacteristic-normal-surface-resolution-by-normalized-point-blowups",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "evidence": "Added the actual regular-fibre completion lemma F19 and established normal completions before using F13, including after canonical principalization. Rechecked the repaired source on stable content after the final wikilink correction: F13 now links to the rational-Gorenstein theorem, and the unchanged reflexive-module interface used through the differential-trace suppliers is still justified by the torsion-free quotient and height-one extension arguments. Read Stacks 0BGN and 0BGM completely; degree descent and the no-intermediate-field inseparable argument are valid. Statement unchanged.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "post_sha256": "3999f9c1cb57eb749a4227bd268ff29bf63f617d8f8aad84ffa0c14b6ad8ae2b",
    "source_urls": [
      "https://stacks.math.columbia.edu/tag/0BGN",
      "https://stacks.math.columbia.edu/tag/0BGM"
    ],
    "familiar": false,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-surface-finite-type-formal-fibres",
    "status": "frontier-owner-review-required",
    "supplier": "lem-surface-completed-polynomial-generic-fibre",
    "affected_use": "Proof 2.1 applies F6 to a polynomial fibre prime after quotient by its base contraction; this is an actual nonzero prime ideal and meets the corrected source condition.",
    "invalidated_claim": "The general F6 restatement omits the newly explicit prime-ideal qualification, although its proof application already supplies it.",
    "minimality": "Frontier owner should insert prime ideal into F6 and refresh its source quote; Statement and mathematical proof route stay unchanged.",
    "clause": "[F6] *lem-surface-completed-polynomial-generic-fibre.* Assume AC. Let $A$ be a complete equicharacteristic Noetherian local domain, let $\\mathfrak q$ be maximal in $A[t]$ over its closed point, and let $0\\ne\\mathfrak r\\subset\\mathfrak q$ have $\\mathfrak r\\cap A=0$. Then $\\widehat{A[t]_{\\mathfrak q}}\\otimes_{A[t]}\\kappa(\\mathfrak r)$ is geometrically regular over $\\kappa(\\mathfrak r)$. ([[lem-surface-completed-polynomial-generic-fibre]])",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-normal-surface-trace-cokernel-dualizes-h1-and-bounds-it",
    "status": "frontier-owner-review-required",
    "supplier": "lem-projective-normal-surface-grauert-riemenschneider-vanishing",
    "affected_use": "Steps 1.1 and 2.1 use A finite free over R and surface duality F5 together with GR F7; F5 explicitly requires dim A=2 and a local injection R↪A.",
    "invalidated_claim": "The consumer Statement/Given allows a finite normal local R-algebra without explicitly ensuring injection or dimension two. For A=R/(s), A is not finite free over R and Hom_R(A,R)=0 cannot be its canonical module.",
    "minimality": "Specify the intended injective local regular-base surface hypotheses in Statement/Given and synchronize F7. The existing two-dimensional proof then applies; its resulting interface change needs one direct hop in the owner lane.",
    "clause": "1.1 The structure-sheaf cohomology of $X$ has $H^0=A$, $H^1=M$ of finite length and no other positive groups, so its truncation triangle is $A\\to C\\to M[-1]\\to A[1]$; dualizing over $R$ uses that $A$ is finite free over the regular local ring $R$ and that finite-length duality is concentrated at $\\operatorname{Ext}^2_R$. [F4, F5, given]",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-order-and-snc-under-smooth-morphisms",
    "model": "gpt-6.1-sol",
    "context_sha256": "17be06836fcab3c20a57d9357145069ec2d05fdcb8c5780c762b0b257939ed71",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "The disjoint union A¹ ⊔ A² is smooth over A¹ but is not pure-dimensional. Clause (2) now states the pure-dimension premise required by def-simple-normal-crossings-divisors; the parameter and graded-ring proof of (1) is unchanged and (2) proves reduced Cartier SNC pullbacks under that premise.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-derivative-ideals-have-the-same-support",
    "model": "gpt-6.1-sol",
    "context_sha256": "c4ade8ece39ec06ac2ca218bc24957aaeaa8d8f5c6591c6c57380380a804a16e",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "repaired",
    "reason": "The example (x^p), μ=p+1 shows equality fails in unrestricted characteristic, while the actual Statement correctly asserts only inclusion there and equality in characteristic zero or perfect p>μ. The leading-form and factorial arguments establish exactly those bounds. Corrected the overbroad title without changing the Statement or proof.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-restriction-of-marked-ideal-to-a-smooth-subvariety",
    "model": "gpt-6.1-sol",
    "context_sha256": "5feec9aedbc4b072d473909b3911b9094941791f894cd999fb0f8a00041e7a89",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "repaired",
    "reason": "F4 incorrectly divided the chart-index coordinate by itself. On the y_m-chart retain y'_m=y_m as the exceptional equation and use ratios only for j<m. Proof 1.2 already uses the correct chart equation a and restricts a^{-μ}σ*f; its nonempty charts are exactly the blowup charts on S. The Statement is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-maximal-order-and-tangent-directions",
    "model": "gpt-6.1-sol",
    "context_sha256": "f0fddf52b69d6de12c3ac2685cb2e4ccff3196dc2661c8b68ff1483c9b478142",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "For I=(x,y), μ=1 and boundary (x), u=x cannot be transversal: its cotangent class is in the boundary span and a boundary-preserving automorphism cannot send it to x+y. The definition now requires linear independence of u and all distinct boundary equations together; this is exactly U minus W in the completion construction and ensures SNC restriction.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-derivatives-commute-with-controlled-transform",
    "model": "gpt-6.1-sol",
    "context_sha256": "6161231d5806ccc593d3150017d44e8b56829996976f9e43c5920636799571c7",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "repaired",
    "reason": "F1 must include the original sections f as well as D(f); on Spec K the latter all vanish but D(O)=O. Corrected F1. Step 2.1 already treats both generators: y^{1-μ}σ*f=yg and y^{1-μ}σ*(Df)=δg+μ(δy/y)g. The induction and all-characteristic containment remain valid, including Cartier-center blowups.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-codimension-one-maximal-order-components",
    "model": "gpt-6.1-sol",
    "context_sha256": "5869d0d8e9e2367bfc24f18daa2a4a35818dc74f0363da89c9286af8e04b9417",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "repaired",
    "reason": "The final sentence confused the unchanged marking μ with the division of the ideal by y^μ. Corrected it. The UFD/DVR argument proves I_x=(u^μ) along each codimension-one support component, giving regularity and isolation; the labelled Cartier blowup has exceptional ideal (u) and controlled transform O near that component.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-maximal-order-preserved-by-controlled-transform",
    "model": "gpt-6.1-sol",
    "context_sha256": "47dca6dc36f2e4730c0e70120af7d3dff2a5d009cf571e81cc0122c262cbd4b3",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "For μ=0 and C=X the blowup is empty, whose structure ideal is zero, so the literal nonzero maximal-order definition cannot apply. Kept the all-marking order bound and stated the empty-scheme exception explicitly. On any nonempty transform the finite order bound proves the ideal is nonzero; the normal initial-form/dehomogenization proof supplies the bound in every characteristic.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-refined-giraud-maximal-contact",
    "model": "gpt-6.1-sol",
    "context_sha256": "1e0ba7797e088f2042cfa48168449331eb5fdce390b1cc0536d728dc1168c2d2",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "repaired",
    "reason": "A1 claimed choice-free clause (1), but strict transforms and blowups inherit AC from their actual suppliers. Stated AC throughout and corrected its exact uses; the extra characteristic premise remains confined to coefficient-restriction clauses (2)-(4). The proper-containment argument retains a nonempty complement through centers in the support and the coefficient supplier yields the two-way sequence correspondence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-canonical-resolution-commutes-with-ambient-embeddings",
    "model": "gpt-6.1-sol",
    "context_sha256": "0a5b2d74e24a8ac66d07805119b7200dc9f08fbc33a3f68892f7d589cffdb59f",
    "outcome": "false_positive",
    "defect_type": null,
    "status": "false_positive",
    "reason": "The cited proposition does supply the encoding in A1: q↦(0,q), so the source pair (1,0) is (0,1,0,0). Its Step 3.1 prepends r/μ and Step 2.2 prepends boundary count zero. Each extra immersion parameter lies in the mark-one ideal, forces maximal order one while it remains, and H(J,1)=C(J,1)=J; iterating maximal-contact restriction gives exactly k prefixes and the same ν,ρ. This agrees with the complete §4.2 argument, equations (7)-(8), p.24. No item edit is required.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0401401"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-canonical-resolution-under-field-isomorphisms",
    "model": "gpt-6.1-sol",
    "context_sha256": "5f90e5970edc64aaa3f9a6e9dd49cc96ca93be04698ff70ef1624ab3aa7f2cbd",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "repaired",
    "reason": "Step 1.1 applied H and C to an arbitrary input despite their maximal-order prerequisites. Corrected the derived-object identities to maximal-order inputs, and transported monomial factors and residual maxima first for a general input; its positive-order companion is then the permitted input, while residual order zero goes directly to the monomial branch near the support. Local-ring and derivation conjugation plus dimension induction transport every reduction and the successively assigned invariants, as in complete §4.3.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0401401"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-etale-commutativity-of-maximal-order-case",
    "model": "gpt-6.1-sol",
    "context_sha256": "b26afcd618169041f1e0f4c59b1b68d3f36772b128dc9ebe3bbff14c1d20ab60",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "The proof passed directly from boundary count zero to hypersurface induction, which is invalid for J=(x), μ=1 on A¹ because the restricted ideal is zero. Added Step 1ba first: isolated regular codimension-one components pull back étale, the retained Cartier exceptional equation divides their ideal to O, and only the remaining codimension-at-least-two support enters Step 1bb. Matched the encoded branch invariant and deferred unchanged values; corrected F2 so invariant equality comes from induction rather than plain blowup pullback.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-etale-commutativity-of-companion-step",
    "model": "gpt-6.1-sol",
    "context_sha256": "444e4f0f40c742200811f5f4ef45a426cde4a104a72b4225109670a97d648ab2",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "For I=(x²(x−1)), E={0}, μ=2 the residual maximum on support is zero but I is not globally monomial. Corrected F1 and Step 2.1 to work on the neighbourhood where N is a unit, resolve M there and extend by identity off the support; every center lies there. Positive-residual passes are compared only when maxima agree, and skipped lower strata receive invariant values from unchanged lifts in the repaired proposition. The local threshold subsets and exponents therefore give the claimed étale correspondence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-canonical-resolution-commutes-with-smooth-morphisms",
    "model": "gpt-6.1-sol",
    "context_sha256": "b7cfda09f021888d70c635000b41812dd1f0a62753eb312ff4a07b105b170d74",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "A smooth morphism alone can have an infinite disjoint-union source, which is outside the finite-type canonical-resolution interface. Added finite type of X' explicitly; constant relative dimension over the pure-dimensional X then also supplies pure dimension. Flat local maps preserve nonzero stalks and order, while dimension induction on base strata/hypersurfaces proves the projection case and étale factorization gives the general case. Derived H and C operations are explicitly used only on maximal-order inputs.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-bravo-villamayor-full-transform",
    "model": "gpt-6.1-sol",
    "context_sha256": "93f1945312a14ae58379f0f3b15e236caed1954856318d637c6abce16873b02e",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "reason": "F1 falsely attributed the 3/2 replacement to the original companion suppliers. Recast F1 as the original algorithm and proved the extra branch in 1.1. At mark one threshold subsets are single positive-exponent boundary divisors: their disjoint regular SNC centers divide the monomial exponent by one while leaving N unchanged, so finitely many such Cartier passes terminate. Ordered exponents and unchanged lower-dimensional gluing give smooth/semilinear functoriality, ambient prefixes and Galois descent. The codimension induction then lifts J mod (u)=I_Z mod (u) to J=I_Z; retained isolated components and support clearing away from them yield the full factorization. Read complete §4.7, pp.25–26, including the 3/2 construction and local ideal claim.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0401401"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-tangent-direction-contains-the-support",
    "model": "gpt-6.1-sol",
    "context_sha256": "55606af0b04538dfdbd6b6336f89990d08300dddfae02ce76f007bf034778354",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "For I=(x+y²), μ=1 and boundary (x), restriction to V(x+y²) gives the nonreduced boundary (y²); multiplicity one alone does not define a restricted marked ideal. Kept unconditional support containment and required transversality to E for restriction. Added the simultaneous-parameter and restricted blowup-chart argument: nonempty hypersurface charts are its center blowup charts, exceptional division commutes with restriction, and the restricted boundary remains SNC. Cartier centers clear support locally.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "prop-canonical-resolution-of-marked-ideals",
    "model": "gpt-6.1-sol",
    "context_sha256": "4f61c09b8681b0b2ce8105bc66ce8163aa5cd40c584ea9a4905596ffacce55c4",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "partially_repaired_owner_hold",
    "reason": "The second origin for (x²) ⊔ (x), μ=1 is outside the r=2 companion support. Restricted inv_O to its domain and supplied successive assignment in 4.1: untouched lower-order/count points lift isomorphically until their later pass, receive its values, and transfer them back. Finite termination assigns every point; finite leading-coordinate stratification proves upper semicontinuity and preserves maxima. Corrected r=0 to monomial only near the support. Adopted the checker's phase numbering without changing the argument. Source: complete Proposition 3.0.8 and §3.1, pp.16–22. The original domain repair is complete, but an additional explicit counterexample to standalone upper semicontinuity of ν and ρ blocks the full Statement; the current proof is marked not-supplied and its review is held for owner resolution.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0401401"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-glueing-homogenized-ideals",
    "model": "gpt-6.1-sol",
    "context_sha256": "013665f8ba2a819b92524154d881892ff85a4a048fbd66fbd91e6eeef1603460",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "reason": "The existence interface alone did not justify the chosen chart substitution. Supplied its Taylor containment and inverse argument with increments in T, using the multivariable argument in Włodarczyk Lemma 2.9.6 and the local supplier proof. Removed the incorrect assertion that H(I) is unit outside the marked support: completed-stalk equality at the distinguished point extends by coherence after shrinking. Restored A1,A2,F1,F2 after a replacement error caught by the contract check. The separate chart systems, fixed boundary equations, common tangent pullbacks and quotient-coordinate induction give identical reduced centers and homogenized transforms.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0401401"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-multiple-test-blowup-and-controlled-transform",
    "model": "gpt-6.1-sol",
    "context_sha256": "8128056d3225848314dca53339da6cfc4c3bd381d2ee0c5d8ba8273ce21ca2ed",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "A Cartier-center blowup has exceptional inverse image C even though its map is an isomorphism. Labelled blowup steps retain that divisor and divide the ideal by I(C)^μ, giving O_X for I=(x), μ=1. The boundary formula applies to blowup steps; inserted isomorphisms transport the ideal and ordered boundary. Empty transformed boundary members are omitted while surviving labels retain their order, so empty-center base changes and inserted identity steps have compatible boundary bookkeeping.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-smooth-pullback-of-multiple-test-blowups",
    "model": "gpt-6.1-sol",
    "context_sha256": "b9fa61dec93a221837362523c6af94136f59ba5c99ac2be24015a96847e4a34c",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "The smooth source A¹ ⊔ A² is outside def-marked-ideal because it lacks pure dimension. Added pure dimension of the smooth source X', preserved by regular-center blowups. The induction distinguishes inserted isomorphisms from Cartier blowups and retains the latter's exceptional ideals. Inverse-image boundaries omit empty members with surviving labels ordered as before, so an empty-center pullback is an inserted transport step and the SNC/transform identities remain exact.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "prop-canonical-resolution-of-marked-ideals",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "open_owner_resolution",
    "reason": "On A²_K, I=x(x+y), μ=1, E={x=0}: ν=1,ρ={E} on V(x) minus the origin, but ν=0,ρ=empty at the origin after restricting companion (x+y,1) to E, giving (y,1). Thus both positive auxiliary superlevel loci are V(x) minus the origin, not closed in V(I).",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0401401"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-group-scheme-over-a-scheme",
    "outcome": "confirmed_nonfatal",
    "finding": "The inverse compatibility equation has different domains on its two sides. It is corrected to f composed with i_G equals i_H composed with f; the group-object and functor-of-points conventions otherwise agree. The unit laws also now use id_G under S-times-G and G-times-S identifications, avoiding a projection whose declared domain was G-times-G.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "101531984b11970d104013bb25f0e795585fa80a3230d97c1df564647c56a1ea",
    "rejected_item_sha256": "1c1293bafdb978b57815e451d2e7398d2c237a9c8f5a7782133e41b11d6ae6b9",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-neron-model-and-mapping-property",
    "outcome": "confirmed_fatal",
    "finding": "The unrestricted localization converse is false: the glued local point models need not be of finite type. The converse now explicitly requires the model to be finite type. Finite-presentation spreading then transfers smoothness, separatedness and local extensions to neighbourhoods; uniqueness is relative to the specified generic fibre.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "4af35f9fa549c7ef9f73c6d2629e190b4cb45b82fe8a8cbcbcf461839714425a",
    "rejected_item_sha256": "84031b09bb4bf82ff3e6b8ed0e2987e4a1ac98e9c2e3d66eaa895157f840908c",
    "uncertain": false,
    "source_urls": [
      "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
    ],
    "familiar": false,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-arith-finite-cartier-duality-and-exactness",
    "outcome": "confirmed_fatal",
    "finding": "The stated finiteness criterion would include any proper geometrically integral variety with global functions k. Adding affineness restores the finite-scheme hypothesis used by the Hopf proof. The dual algebra uses cocommutativity; the quotient argument now starts from the zero-dimensional source and explicitly identifies coimage with image.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "210f892c5f99c2ac71f687d8c708ae8609fc799eb6e867dd82aee861171c7a95",
    "rejected_item_sha256": "ddb1b33e757ddbfd8003bd817e38dda1421cbb1d70a8c1821b4fdf26ae95130e",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-finite-etale-lifting-over-complete-dvr",
    "outcome": "confirmed_fatal",
    "finding": "The old F5 cites a smoothness definition that does not establish the etale implication. The published etale definition directly defines etale as smooth of relative dimension zero and supplies regular fibres. F5 and the dependency now cite that exact interface; the Artinian regular local factors are fields and separability then makes them k.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "3e295d239d6a347b0b819babb6073e944f9883de4403565010b851242dacbd0c",
    "rejected_item_sha256": "ee0cb482fd0f35feff3fa169896edfb20c5b8d92dc27686fe9dc2859740df21a",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-arith-dilatations-and-defect-of-smoothness",
    "outcome": "confirmed_nonfatal",
    "finding": "The blowup supplier guarantees local H-projectivity and properness without global generators. F1 and step 1.1 now state exactly that. The dilatation chart and its universal property use torsion-freeness, while section lifting uses properness, so global H-projectivity is unnecessary. The Jacobian/Smith-normal-form defect argument is unchanged.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "903f59fbd2e6141804b3545ff57b607497ead0feab78473b6377fc0fb341a6fa",
    "rejected_item_sha256": "c060beb18b1a974d14465c8c12209de08f14851895a43f83312c7ff3d9ce88ed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-arith-strict-henselian-etale-sections",
    "outcome": "confirmed_nonfatal",
    "finding": "F3 incorrectly restricted arbitrary strictly henselian rings to DVR strict henselizations. It now spells out the actual hypothesis. The proof lifts simple roots in standard etale charts, uses the open-and-closed diagonal for uniqueness, and takes the finite disjoint union of section images; none of these arguments requires a DVR.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "3fedf198f3706c1e2d829a1f9821f9047031b09600ea5637a93cd9ed18dac864",
    "rejected_item_sha256": "5f93d4d73918eac54fcdfa38b12273ac61d2dc9b012e099471ca9073829fe3b7",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-rigidified-relative-picard-functor-and-dual-abelian-variety",
    "outcome": "confirmed_fatal",
    "finding": "Topological sheafification does not supply the big fppf-site construction. The definition now cites the existing fppf sheafification lemma and definition, declares their AC use, and records their set-sized site convention. Rigidification, algebraic equivalence and conditional representability are unchanged; arbitrary nonreduced test schemes remain allowed.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "4e5eb36788c865c78c5e5573e6756082b9c4e6f769943bcf8fca866462db80d9",
    "rejected_item_sha256": "c526c43ce1f218d2000ba9b3737f483690d27d1227d9a5e428dd1871dfc82d16",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "cor-extension-of-k-morphisms-into-abelian-schemes",
    "outcome": "confirmed_fatal",
    "finding": "The generic fibre need not be open, so its union with the local extension domains was not an open rational-map representative. The generic morphism is first spread to an actual open neighbourhood W_0 by finite-presentation descent; adjoining the vertical height-one neighbourhoods then gives an S-dense open with every height-one point. Properness and Weil extension apply with their stated hypotheses.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "573b948739c308fcd726c28333b20c79f26f4d821f54052ab88dd9d6a8b74c42",
    "rejected_item_sha256": "5e52642a113ded1c4bc5f201e4fc3426975886c79698e12e19468e73671875ab",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-abelian-scheme-fibrewise-constant-morphism-rigidity",
    "outcome": "confirmed_nonfatal",
    "finding": "The auxiliary preimage of a subset of T was incorrectly taken under u, whose target is Z. Replacing it by f_T inverse makes the expression well typed. The chosen V already misses the proper image of u inverse of Z minus W, which gives the affine-target factorization; the universal structure-sheaf identity then proves equality of morphisms even over nilpotent tests.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "f15ea58873e72bf30efca56edcf1d62fc45ac95744bdb8a1056a752ce00e6b3d",
    "rejected_item_sha256": "4b4091c171db656293412ec4b29a422b750b13ad8409596fea581ec7b7a2116b",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-arith-hilbert-divisor-charts-and-picard-diagonal",
    "outcome": "confirmed_fatal",
    "finding": "A Picard sheaf class need not have a global line-bundle representative. The anisotropic conic obstructs the claimed globally split projective bundle. The corrected interface gives the smooth proper fppf form on arbitrary tests and the exact projective bundle whenever a representative exists. The proof descends projective fibres through their canonical anticanonical embeddings; over divisor charts the universal divisor supplies a representative, preserving the quotient argument.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "f7a1ad19d4a6f842a432c0c7d21a0fa4b50f0811a0f9ede722425f93858d490a",
    "rejected_item_sha256": "7227de95cd820f481e468c4d62d54532bfb27c8e91c0c2895d75365e8802cbfc",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0504020"
    ],
    "familiar": false,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-arith-projective-weak-model-and-rational-mapping",
    "outcome": "confirmed_nonfatal",
    "finding": "The embedded-prime counterexample refutes F2 as written. The repair uses a prime filtration of the base, whose factors become flat algebras over domains; they inject into reduced generic fibres, where fibre density detects zero. Induction proves restriction injectivity without global minimality of associated primes. Graph kernels then commute with flat base change. The weak-model construction and receiving argument retain their DVR hypotheses.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "2397b8cc66efe66b6476bac9d5f814b3695584aab8a4464efbd29f4ac9a20df1",
    "rejected_item_sha256": "a1d186db1eb9536ead2c27d69f74f1ac7203e456eb0fc74c3c6f1612a82bf70d",
    "uncertain": false,
    "source_urls": [
      "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-good-reduction-stable-under-base-change",
    "outcome": "confirmed_nonfatal",
    "finding": "Properness and integrality alone do not make global functions the base field; a finite nontrivial field extension is a counterexample. F3 now requires geometric integrality, exactly as its supplier does. Its use is on the abelian generic fibre, which is geometrically integral, and rank-one H0 after spreading proves geometric connectedness of the smooth fibres.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "03bb74cfdeb602011a39671415d579b2eee129f28b7c566eac5fd0f6d8bbef10",
    "rejected_item_sha256": "fae4344b2c97a2757ce409630b40210957e33debc1614871f186218af94748bc",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-polarization-of-an-abelian-variety",
    "outcome": "false_positive",
    "finding": "The definition explicitly makes the dual/Poincare data conditional and reserves the isogeny theorem for the subsequent result. Its title names the true ample-line-bundle isogeny construction, without adding a new existence axiom or using its unproved property in this item. The square-theorem dependency supplies the stated Mumford homomorphism; no mathematical repair is necessary.",
    "repair_status": "unaffected",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "840239d9f0991bf302b9e13b9d4c90735af30c68c3e04d9923b00a69dc803c71",
    "rejected_item_sha256": "285e18a2a186cbe31b9ad9d657d8f47989be9c48c85ebc62b68a43951dd3b7f7",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre",
    "outcome": "confirmed_fatal",
    "finding": "The cited dense-open lemma cannot be applied to a generic fibre that is not open. F3 now proves the needed generic-fibre agreement directly: the closed equalizer ideal localizes to zero, and flatness over the integral base makes the source coordinate rings torsion-free. This applies on all smooth overlaps, so finite-type extensions glue and are unique.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "ae25ba4e0100ca1c54e9b4df44053fba983c83ab777ba0c54fb6502cf20c6f60",
    "rejected_item_sha256": "92efd541ade64fa601bb5414d2d7210eb8660049ab81fff7e3cd1b5180bdfd48",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "cor-good-reduction-admits-a-neron-model",
    "outcome": "confirmed_fatal",
    "finding": "Unrestricted uniqueness is false, as identity and inversion give distinct automorphisms of an elliptic model. The Statement and proof now require that the isomorphism induce the specified identity on A_K. Applying the mapping property in both directions gives existence and uniqueness of precisely that compatible isomorphism.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "ada4d12b200813de46aa54f0a2e0af1382a80a99d2cbc8cf2513003f93ce5f7b",
    "rejected_item_sha256": "0023fde26a80bb5ac20b0b7ed8902c6e89efd6d40dee59c346a95f1bbd979630",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-arith-separated-minimal-model-and-translations",
    "outcome": "confirmed_fatal",
    "finding": "The proof establishes an open immersion only on the rational domain, so it does not establish an everywhere-defined immersion of X. The Statement now gives the precise source result: an R-prime-birational self-map, open on its fibre-dense domain, for local DVRs of smooth special-fibre generic points. The preliminary model is intentionally trimmed; full embedding remains a separate later claim.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "23fec71cb935baf5ffb6f3e5a0c4bc043c53dd30f9daf4f4a8c3d5647df33c43",
    "rejected_item_sha256": "7fce234bb13399b616a68d44431090b0f58c50ee8b7c3516884b26c68ed9f8c7",
    "uncertain": false,
    "source_urls": [
      "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
    ],
    "familiar": false,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-arith-abelian-scheme-torsion-specialization-unramified",
    "outcome": "confirmed_nonfatal",
    "finding": "For a nonhenselian DVR the full Galois group need not act through residue Galois. The repair proves exactly what the Statement needs: every torsion point is rational over K-sh, hence the chosen inertia Gal(K-sep/K-sh) fixes it. A final caveat restricts residue equivariance to the decomposition subgroup. F3 no longer attributes a Galois assertion to a sections-only supplier.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "3165215e8bc43d277eb4d9a6b155980ec670ce64ae23bad3e81dc93c46564029",
    "rejected_item_sha256": "19acbb92390a252ae487a9ab09806da7b6390b8251b2da6c619008de989585bc",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-arith-birational-group-law-from-minimal-model",
    "outcome": "confirmed_fatal",
    "finding": "The old proof used a point of the variable factor that was not defined over the parameter local DVR fraction field. The parameter is now the canonical generic point of the first factor, an A(K-prime)-point for K-prime=Frac O_X,xi. Translation and inverse translation spread together by finite presentation and give fibre-dense inverse domains for Phi; reversing factors gives Psi. Generic agreement proves multiplication and associativity.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "f2ae7872b8e95891a9d270670da3d2a55f10ad0909931fe1ef59678583cfa7a5",
    "rejected_item_sha256": "a81535062a32928f5b961dbfa2bd0f6bbef223c449adc46ebedcd67dffedeb25",
    "uncertain": false,
    "source_urls": [
      "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
    ],
    "familiar": false,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-arith-dual-and-poincare-bundle-finite-field-descent",
    "outcome": "confirmed_fatal",
    "finding": "Sheaf descent and the proper-image dual do not by themselves supply representation of the entire Picard functor. F1 now cites the existing generic-quotient-and-translates representation theorem for that claim, and reserves smooth proper dimension-g identity-component properties for the coherent/proper-image lemma. Finite-presentation spreading and finite-field scheme/bundle descent then preserve the full all-test universal property.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "cbc4cdc78279a2c6a2d9fe8d81130dace21198b92e5e7d85ba113e39d271dd16",
    "rejected_item_sha256": "425cfd989c5b6b70d48307b3704444ec884bdac033872790d03cbbdb7d20ae96",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity",
    "outcome": "confirmed_fatal",
    "finding": "F1 had no licensed square/cube interface, and the finite ample kernel in step 2.1 was attributed to a descent lemma that does not state it. The repair cites the actual cube and square suppliers and the coherent proper-image finite-kernel clause. It constructs the normalized-square family on all tests, proves Pic0 vanishing by rigidity before the Leray argument, and uses open identity-component factorization to retain nilpotent tests.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "9fc9a3cbac6c79cac42341c7290901e4d46233eec554995fc688627f5759464d",
    "rejected_item_sha256": "52d71b44ecc92cd6f93988bae2e1726370537cc58da659946db269bdd93c296c",
    "uncertain": false,
    "source_urls": [
      "https://www.van-der-geer.nl/~gerard/AV.pdf"
    ],
    "familiar": false,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-arith-mumford-map-degree-is-euler-characteristic-square",
    "outcome": "confirmed_fatal",
    "finding": "The abelian-variety definition supplies properness but not the projectivity hypothesis required by Serre duality. The existing projectivity theorem is now a direct dependency and is stated in F5. The same fact spells out canonical-bundle triviality by translation. Flat pullback of Poincare cohomology, finite-support twisting, Kunneth and Serre duality then give the full kernel-length square formula.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "4ba5a70fd429efce9902855f5c1d69b0d671b957df0d3f5f902cd4bf7a2f242b",
    "rejected_item_sha256": "f80df25a477dfe0d2621b0847e409c5eeb31fb343ac2d0b9b4e26d5301d26906",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-arith-polarization-and-picard-twist-ampleness",
    "outcome": "confirmed_fatal",
    "finding": "The symmetric-homomorphism lemma assumes symmetry; biduality naturality alone cannot prove it. Step 1.1 now compares the two normalized universal families: the dual composed with kappa classifies the switched Lambda(L), which equals Lambda(L) by commutativity. It also derives the diagonal bundle Mumford map using pullback naturality and supplies the actual ampleness-under-field-descent dependency.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "8e4e07085401c6eeafec745174c739913393bc5a49e7dfce1fa447712ad1fc89",
    "rejected_item_sha256": "5096325715eab969b6e41a9a57d6f545852f25fec08320bf841dfe7c144337df",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-arith-effective-ample-pair-and-group-descent",
    "outcome": "confirmed_fatal",
    "finding": "R to R-sh is fpqc but need not be locally finitely presented, so the fppf morphism theorem does not license the old descent step. New step 3.1 descends saturated affine-target preimages by fpqc submersivity and their ring maps by faithfully flat equalizers, then glues; inverses and open immersions descend in the same argument. F4 now separates this proof from the fppf supplier, and F5 fixes the source/target roles in dense agreement.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "2bfd06966db2a4f57b73bcc6de3b77d821d634848395b2a1652d34d385c2ae9f",
    "rejected_item_sha256": "b6e207ef85792d919fb4fa5169b1f13efa218689eef7de7f10a0e4f655f91f69",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-arith-full-minimal-model-embedding",
    "outcome": "confirmed_nonfatal",
    "finding": "F4 reversed the roles of source and target in dense agreement and omitted the cocycle/faithfully-flat hypotheses of descent. It now states those roles and hypotheses accurately; this proof needs only agreement, since the completion is already descended. Step 3.1 is also repaired to use the determinant line of the differential, avoiding an unsupported global invariant trivialization on X. The codimension-two complement excludes any zero divisor.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "1e7f1782fe9072d82173c555a6038eda0fe58c197b85b586a9a47855cf4cf56a",
    "rejected_item_sha256": "128dd948b4c102d1b55897bd032f94b03f4a4920dfdee437c18dc59975657034",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-good-reduction-and-smooth-proper-base-change",
    "outcome": "confirmed_fatal",
    "finding": "NOS in the cited interface requires an existing finite-type Neron model. F4 and step 1.4 now first apply the existing arbitrary-DVR Neron existence theorem, with its AC/DC hypotheses, then invoke NOS. Clause (a) and F2 also now qualify model uniqueness by the specified generic-fibre identity. Coherent base change retains its exact surjectivity hypotheses and torsion unramifiedness uses the corrected inertia conclusion.",
    "repair_status": "repaired",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "27",
    "before_itemHashGuard": "b40f5bdb36f4c2686f17d96c10f4cd96584db201da7bf35aeac0271e12ad0406",
    "rejected_item_sha256": "af196a77897036da2304b84f1720b61932c39e4fd1e5185587d6c23c45e54785",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_append",
    "subject": "lem-a-system-of-imprimitivity-gives-a-representation-of-the-transformation-algebra",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "3",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "reason": "F1 is false without a uniform bound: for the diagonal PVM and b_n=n 1_{n}, the vector xi_n=1/n has ||M_b_n xi||=1. This is nonfatal to the supplied proof because its sole convergence use in 2.2 has 0<=b_n<=1. Added the precise uniform bound from thm-pvm-integral-is-a-star-homomorphism, Statement clause 4; all operator products, modular inversion and the two-factor nondegeneracy estimate remain valid. Statement unchanged; no propagation.",
    "evidence": {
      "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u3.json",
      "model": "gpt-6.1-sol",
      "context_sha256": "02b6f99d2615a71540866b73e32f6bde376ad5ea447ff3509eefeed6acb1aa8f"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_append",
    "subject": "lem-borel-cross-sections-for-closed-subgroups",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "3",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "reason": "The positive-index tail already determines the Cauchy limit, so the missing zero index is a nonfatal convention defect rather than a failure of the section construction. Started k_n at k_0 with diameter <=1, retaining recursion bounds <=2^(-n). Reviewed nested closures, Borel least-index selection, distance-to-closed-set measurability, continuity of q and both Borel inverses. Replaced ker q by q^(-1)(eH), valid without normality. Statement unchanged.",
    "evidence": {
      "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u3.json",
      "model": "gpt-6.1-sol",
      "context_sha256": "ff420ed81ec94161df40a5a1afb1384e2f50444dfb568e56507a38499c1766a5"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_append",
    "subject": "lem-pvm-multiplicity-model-over-a-standard-borel-space",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "3",
    "outcome": "false_positive",
    "severity": null,
    "disposition": "false-positive",
    "defect_type": null,
    "reason": "F4 explicitly cites the supplier proof, not only its existential Statement. Read the complete supplier: after selection in 1.1, steps 1.2-1.7 and 2.1 construct the model for any prescribed bounded self-adjoint S; 1.8-1.9 and 3.1 identify W*(S). The cyclic decomposition and cyclic representation interfaces accept every bounded normal operator. Thus reusing this construction for S=int c dP supplies existence independently of fixed-generator uniqueness. Checked P(B)=E_S(c(B)), conull restriction K intersect c(X), positive RN change in the correct J^(-1) direction, and base pullback. No item edit is warranted.",
    "evidence": {
      "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u3.json",
      "model": "gpt-6.1-sol",
      "context_sha256": "b6915274fe6a5c760b7c0783927446a5003c6033315e9566c3f8c1cff6cdd5a6"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_append",
    "subject": "lem-a-transitive-quasi-invariant-borel-g-space-is-ergodic",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "3",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "dependency_citation",
    "reason": "The Haar-lifts Statement supplies quotient null-class equivalence but neither completed-product Tonelli nor modular change of variables, so F3 misattributes an essential proof input. Replaced F3 by the actual sigma-finite Tonelli interface and the Borel-level right-Haar-translation scaling in the modular definition. On the Borel kernel |f(gt)-f(t)|, reversing the iterated integral yields a t_0 with equality for almost every g; right translation then yields f(u)=f(t_0) almost everywhere. No completed-product Jacobian claim is needed. Quotient null equivalence and the PVM intersection law finish both assertions. Statement unchanged.",
    "evidence": {
      "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u3.json",
      "model": "gpt-6.1-sol",
      "context_sha256": "712d8277319eb6205286b6d2317b76bacfea99caaa172f3983d8bc6860c2338c"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_append",
    "subject": "lem-the-stabilizer-action-on-an-imprimitivity-fiber-is-unitary",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "3",
    "outcome": "false_positive",
    "severity": null,
    "disposition": "false-positive",
    "defect_type": null,
    "reason": "Read the complete cocycle-fields supplier: step 1.1 proves strong continuity of W_g=V_g^(-1)WU_gW^(-1), and step 4.1 explicitly proves the local-measure continuity missing from its Statement. On every finite-measure E and basis vector e_j, strong continuity applied to 1_E e_j gives integral_E ||(phi_g-phi_g0)e_j||^2 ->0; Chebyshev and uniform norm-one bounds extend to the strong topology. This supplies exactly the Haar-regularization hypothesis, so F1 is justified by the cited proved argument. Reviewed strictification, null versus atomic normalization B_eH, gauge uniqueness and evaluation only after strictification. No item edit is warranted.",
    "evidence": {
      "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u3.json",
      "model": "gpt-6.1-sol",
      "context_sha256": "4daabea7ec8dea3021a54b1431f683e8e6b05bcd74d039be4a35b2114ba25c0d"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_append",
    "subject": "thm-mackey-imprimitivity-theorem",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "3",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "logic",
    "reason": "For G=H={e} and nonseparable K, induction is K and fails the separable-Hilbert-space system definition, confirming a fatal logical overquantification. Added separable K to the converse Statement, Given, and step 1.3, matching the canonical induced-system supplier. This restores the intended separable classification already required in the forward direction and owning contract, rather than discarding any licensed case. Reviewed zero K, normalized reconstruction, both intertwinings, and canonical strict-cocycle recovery. Direct consumers are being inventoried for the Statement change.",
    "evidence": {
      "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u3.json",
      "model": "gpt-6.1-sol",
      "context_sha256": "37f0c0e90ee02b687f93edb3084f2ce356fdd3c9f4c63f65fae42e1996eaab21"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "no_update",
    "reason": "No published consumer of the only changed Statement was found. The published spectral-multiplicity construction supplies the disputed fixed-generator result; no published-item defect is asserted."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "subject": "lem-c-star-positive-calculus-and-order-estimates",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "4",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "finding": "The asserted criterion for arbitrary h is false: h=1+i in C and t=sqrt(2) satisfy |t-h|^2=4-2sqrt(2)<2=t^2, although h is not self-adjoint and hence is not in P. Step 2.1 now quantifies only over self-adjoint h and proves both directions for every t>=||h||. All applications in the cone and order arguments meet that hypothesis.",
    "post_sha256": "31efdf9b34fb6c453b0e21e8fd5b53bb046cde3436ee649437bbae8110f06d05",
    "evidence_path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u4.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "subject": "lem-quadratic-form-of-a-self-adjoint-operator-attains-the-norm",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "4",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "finding": "A1 cited boundedness as a supplier of the operator-norm supremum, but that Definition only gives existence of a bound. Step 3.1 needed the missing interface. Added def-operator-norm, whose actual Definition provides the unit-sphere equality for K nonzero, the bound inequality and norm zero for K=0; corrected A1 and synchronized the owning manifest and contract.",
    "post_sha256": "2b2b1486a871a06bc1b0f19d91ede7bbdbc30a0b398829c0e82244b328304104",
    "evidence_path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u4.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "subject": "def-fell-topology-on-the-unitary-dual",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "4",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "finding": "The Definition falsely identifies functions associated to pi with arbitrary finite sums, contradicting its weak-containment supplier. For the defining representation of U(2), tr(g) is a sum of two diagonal coefficients but no single coefficient: at e a representing vector would have squared norm 2, while the unitary acting as +1 on that vector and -1 on its orthogonal complement has coefficient 2 and trace 0. Corrected tests to single coefficients; approximating witnesses remain finite sums. The consulted source agrees.",
    "post_sha256": "4f540adf72407377f592a3f8849a0ead0db2a59beb724d39db1c76af972779cb",
    "evidence_path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u4.json",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1912.07262"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "subject": "lem-fell-neighbourhoods-of-an-irreducible-representation-are-saturated-under-weak-equivalence",
    "supplier": "def-fell-topology-on-the-unitary-dual",
    "disposition": "owner_repair_required",
    "severity": "nonfatal",
    "finding": "The Statement and F1 require a single diagonal coefficient witness in tilde W. Step 2.1 calls the sum of the selected coefficients a single associated function; step 3.1 supplies a finite sum and concludes membership in tilde W. These conclusions need individual witnesses, not just a finite sum.",
    "invalidated_claim": "An arbitrary sum of diagonal coefficients is not a single coefficient in the given representation; finite-sum approximation alone does not prove membership in tilde W.",
    "minimality": "Use the corrected Definition to write phi_i=c_{xi_i,xi_i}. Apply simultaneous family selection directly in 2.1 and normalized approximation with rescaling directly in 3.1; xi_i=0 uses the zero vector. Remove the summing inference. The Statement need not change and propagation stops here.",
    "route": "frontier_owner",
    "evidence_path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u4.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "frontier-40-geometry-braids-rep-27-step7-initial-r1-u6-1",
      "run": "frontier-40-geometry-braids-rep-27",
      "at": "2026-10-06",
      "class": "accuracy",
      "subclass": "reader-repair",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-the-alexander-module-of-a-link-complement-is-finitely-presented",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "item_sha256": "ac9808e22d1e257438f908b5cb4dec09a58afff96ee6460a0ffdabd4695b9176",
      "evidence": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u6.json",
          "anchor": "decisions[0]",
          "note": "Explicit proof locators supply the exterior retraction omitted from the supplier Statement."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u6.json",
          "obligation": "initial:1:6:lem-the-alexander-module-of-a-link-complement-is-finitely-presented"
        }
      ],
      "repair_confidence": 1
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "frontier-40-geometry-braids-rep-27-step7-initial-r1-u6-2",
      "run": "frontier-40-geometry-braids-rep-27",
      "at": "2026-10-06",
      "class": "accuracy",
      "subclass": "reader-repair",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "def-alexander-polynomial-from-the-first-elementary-ideal",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "item_sha256": "dff1c980a4d7b4dd00d8c51a768cc5ff56b40d062e8ac1742604e56737e66c46",
      "evidence": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u6.json",
          "anchor": "decisions[1]",
          "note": "Corrected the false nonprincipal-ideal caveat; gcd and normalizations unchanged."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u6.json",
          "obligation": "initial:1:6:def-alexander-polynomial-from-the-first-elementary-ideal"
        }
      ],
      "repair_confidence": 1
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "frontier-40-geometry-braids-rep-27-step7-initial-r1-u6-3",
      "run": "frontier-40-geometry-braids-rep-27",
      "at": "2026-10-06",
      "class": "accuracy",
      "subclass": "reader-repair",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "thm-the-burau-determinant-formula-for-a-closed-braid-and-its-axis",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "item_sha256": "014b5f3a70584af9be9dd753b5d1cde4e94166535da45ac707d4e72513e492c7",
      "evidence": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u6.json",
          "anchor": "decisions[2]",
          "note": "Restored the missing inverse; later coordinate and determinant expressions already correct."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u6.json",
          "obligation": "initial:1:6:thm-the-burau-determinant-formula-for-a-closed-braid-and-its-axis"
        }
      ],
      "repair_confidence": 1
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "frontier-40-geometry-braids-rep-27-step7-initial-r1-u6-4",
      "run": "frontier-40-geometry-braids-rep-27",
      "at": "2026-10-06",
      "class": "accuracy",
      "subclass": "reader-repair",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "ex-the-burau-determinant-for-a-two-strand-torus-link",
      "caught_at_stage": "7-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "item_sha256": "abcd22b832532108e22a25f9d6b6c952a29841e0fa37cd8b7e374533ccb3f8bc",
      "evidence": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u6.json",
          "anchor": "decisions[3]",
          "note": "Replaced the unsupported edge-basis assertion by the fixed basis and supplied scalar."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u6.json",
          "obligation": "initial:1:6:ex-the-burau-determinant-for-a-two-strand-torus-link"
        }
      ],
      "repair_confidence": 1
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "f40-gbr27-step7-initial-r1-u7-trace-terminal-map",
      "run": "frontier-40-geometry-braids-rep-27",
      "at": "2026-10-05T20:21:41.141623+00:00",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "cex-a-braiding-alone-does-not-define-a-link-trace",
      "caught_at_stage": "6-judge",
      "caught_by_role": "judge-sol",
      "disposition": "fixed",
      "adjudication_ref": [
        {
          "file": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u7.json",
          "key": "decisions[0]"
        }
      ],
      "item_sha256": "b7ea13eecedd1b79aa4f1369f74f56eb974b99495156266b631d5c3d43ee5d36",
      "repair_cost": "inline-fix",
      "description": "Counterexample step 1.2 incorrectly named ev_X as the terminal map of the left categorical trace. The actual terminal map is ev_{X^vee}: X^{vee vee} tensor X^vee -> 1. The independent finite-sum zig-zag obstruction is valid, so the finding is nonfatal. Corrected the typed composite and F4 citation; statement unchanged.",
      "prevention": {
        "kind": "process",
        "ref": "Check domains and codomains against the exact categorical trace definition."
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-curves-and-geometric-intersection-numbers-on-the-marked-disk",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "The quantifier chose subarcs but K need not be a component when other curve portions enter their Jordan disk. Replaced K by the enclosed open Jordan disk and made bigon removal explicit; the source itself has the same component wording (Section 3a, printed p. 18). Counts, marked-endpoint exception and boundary orientation are preserved.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "8",
    "model": "gpt-6.1-sol",
    "context_sha256": "ded19cc0984b3c7377420c7b17cc5eb43cd707ac65db6e3f91903bd061c76c29",
    "defect_type": "logic",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0006056"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-khovanov-seidel-path-ideal",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "L4 incorrectly supplied a unital factorization theorem absent from def-quotient-ring. The proof now defines psi([x])=psi0(x), proves independence using x-y in J, and verifies ring operations from coset formulas. J is the span of arrows and returns, J squared the returns, and J cubed zero by the checked path-basis supplier. The Definition is unchanged.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "8",
    "model": "gpt-6.1-sol",
    "context_sha256": "057e59f4233873d5d8eb5738bc4931d04cce07033fc249325f244f7afe831a84",
    "defect_type": "dependency_citation",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-faithful-weak-categorical-action",
    "outcome": "false_positive",
    "status": "closed-no-defect",
    "reason": "The supplier has heading Statement refuted, not Statement: its Counterexample steps 1.1-2.1 exhibit a nontrivial braid whose functor is not naturally isomorphic to identity but whose Grothendieck action is identity. The remark correctly references that contrast. Faithfulness equivalence follows by composing with the inverse component of the weak action; no coherence is needed.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "8",
    "model": "gpt-6.1-sol",
    "context_sha256": "483ffa45945c9733430a21ce102bfbd3f5522c4f96be66ebe2cf853e2e26696b",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-geometric-intersection-numbers-are-isotopy-invariants",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "The original step 3.2 falsely related arbitrary pushes by an isotopy preserving c1; a shared interior subarc is preserved by such maps but need not survive a different push. Revised step 4.1 aligns boundary endpoints via a c1-preserving collar map and extends the resulting fixed-endpoint arc isotopy before applying nonboundary invariance. Step 5.1 treats each argument separately. The Statement and inherited AC are unchanged.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "8",
    "model": "gpt-6.1-sol",
    "context_sha256": "322934a7244105deb93490867c4f632316f39b3abf126c5cc3145ed345188678",
    "defect_type": "logic",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0006056"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "General disconnected coverings need not have free deck actions or deck-equivalent sections. Here fibres consist of real coordinate lifts and chi acts by integer translation, which is free and transitive. L2 now states this specific fact and cites the actual lifting criterion and unique homotopy-lifting theorems. Arc existence, closed-curve obstruction k nonzero, constant coordinate differences, and endpoint monodromy establish every stated clause; the Statement is unchanged.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "8",
    "model": "gpt-6.1-sol",
    "context_sha256": "67b137643439ae958aaf55f9475155f9154bbe9ae6201a50d70b8ad0353344cc",
    "defect_type": "dependency_citation",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0006056"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "L3 wrongly identified every half-twisted curve with a deck shift. The supplier asserts the shift only for its supporting arc. Revised step 2.1 transports each local index, moves the inverse twist onto the fixed basic arc, and applies the first-input deck rule; negative iterations use the invertible monomial. Base local indices and the relative string count are explicit. The full contribution table and Statement are preserved.",
    "run": "frontier-40-geometry-braids-rep-27",
    "phase": "initial",
    "round": 1,
    "unit": "8",
    "model": "gpt-6.1-sol",
    "context_sha256": "235274f2998d41af35384c953321588ca021c07d2dc328a1d356babba801bb4e",
    "defect_type": "dependency_citation",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0006056"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposal",
    "row": {
      "defect_id": "frontier-40-geometry-braids-rep-27-step7-initial-r1-u9-def-rouquier-complex-of-a-braid-word",
      "run": "frontier-40-geometry-braids-rep-27",
      "at": "2026-10-05T20:31:57.379Z",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "def-rouquier-complex-of-a-braid-word",
      "caught_at_stage": "7-judge",
      "caught_by_role": "final-adjudicator",
      "batch": "9",
      "disposition": "fixed",
      "repair_confidence": 1,
      "subclass_note": "The construction already uses B_i=(R tensor over R^{s_i} R)(1), but the comparison sentence incorrectly shifted only the unit. Corrected it to the whole positive-complex shift and stated the negative regrading convention; multiplication now compares terms of the same internal degree. Checked Rouquier §§3.2.1 and 3.2.4 [full text](https://arxiv.org/pdf/math/0409593).",
      "evidence": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u9.json",
          "anchor": "decisions[0]"
        },
        {
          "path": "items/def-rouquier-complex-of-a-braid-word.md",
          "anchor": "Definition"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json",
          "kind": "item",
          "batch": "9",
          "id": "def-rouquier-complex-of-a-braid-word",
          "model": "gpt-6.1-sol",
          "context_sha256": "09658e5465fe6de0403637468fc28e1ac7850fbf5eb51b5cfe3da6a3e8fa448a"
        }
      ],
      "repair_cost": "inline-fix",
      "prevention": {
        "kind": "process",
        "ref": "Use exact supplier interfaces; define and verify essential splitting maps before Gaussian elimination."
      }
    },
    "post_sha256": "bf3157e0b9dd32afea03391f948582b48e7310c4470cca48a07e0a47159a9b72",
    "source_urls": [
      "https://arxiv.org/pdf/math/0409593"
    ],
    "familiar": false,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposal",
    "row": {
      "defect_id": "frontier-40-geometry-braids-rep-27-step7-initial-r1-u9-lem-rouquier-complexes-satisfy-far-commutativity",
      "run": "frontier-40-geometry-braids-rep-27",
      "at": "2026-10-05T20:31:57.379Z",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-rouquier-complexes-satisfy-far-commutativity",
      "caught_at_stage": "7-judge",
      "caught_by_role": "final-adjudicator",
      "batch": "9",
      "disposition": "fixed",
      "repair_confidence": 1,
      "subclass_note": "F1 overstated the cited existence interface, although the block argument was sound. Restricted F1 to existence and proved explicit balancing isomorphisms and differential compatibility locally from the generator definitions. The signed flip satisfies both Koszul component identities for positive, mixed and negative degrees; the Statement is unchanged.",
      "evidence": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u9.json",
          "anchor": "decisions[1]"
        },
        {
          "path": "items/lem-rouquier-complexes-satisfy-far-commutativity.md",
          "anchor": "Proof"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json",
          "kind": "item",
          "batch": "9",
          "id": "lem-rouquier-complexes-satisfy-far-commutativity",
          "model": "gpt-6.1-sol",
          "context_sha256": "6edc80e4039de4654b49000aae7c4ecbc284e88dda076ac04c255a610c16a190"
        }
      ],
      "repair_cost": "inline-fix",
      "prevention": {
        "kind": "process",
        "ref": "Use exact supplier interfaces; define and verify essential splitting maps before Gaussian elimination."
      }
    },
    "post_sha256": "a081547804ef12d2e77c9b622746c46bd5f6a26ca2e71dbcbdb4d5856b8bdae3",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposal",
    "row": {
      "defect_id": "frontier-40-geometry-braids-rep-27-step7-initial-r1-u9-lem-rouquier-complexes-satisfy-the-three-term-braid-relation",
      "run": "frontier-40-geometry-braids-rep-27",
      "at": "2026-10-05T20:31:57.379Z",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "lem-rouquier-complexes-satisfy-the-three-term-braid-relation",
      "caught_at_stage": "7-judge",
      "caught_by_role": "final-adjudicator",
      "batch": "9",
      "disposition": "fixed",
      "repair_confidence": 1,
      "subclass_note": "The first cancellation depended on undefined specific maps absent from F2. Replaced that dependency-citation gap by local coordinate formulas J and p, verified pJ=1 and proved j(L)=ker p using two bimodule generators and F2 only for graded dimensions. The identity pivots, Schur matrix, swapped signs and composed contractions are now explicit. Consulted Libedinsky §§4.3–4.4 [full argument](https://arxiv.org/pdf/1702.00039); the Statement remains unchanged.",
      "evidence": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u9.json",
          "anchor": "decisions[2]"
        },
        {
          "path": "items/lem-rouquier-complexes-satisfy-the-three-term-braid-relation.md",
          "anchor": "Proof"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json",
          "kind": "item",
          "batch": "9",
          "id": "lem-rouquier-complexes-satisfy-the-three-term-braid-relation",
          "model": "gpt-6.1-sol",
          "context_sha256": "689e1cfc119ae9c9b28f06430cd802745a057478834cdd231c3ec4f4cd0f7a96"
        }
      ],
      "repair_cost": "repair+rejudge",
      "prevention": {
        "kind": "process",
        "ref": "Use exact supplier interfaces; define and verify essential splitting maps before Gaussian elimination."
      }
    },
    "post_sha256": "c297640d88a758a17c0b8bae0bd72178969a6a2d837170260ab5c4a51d17b1b3",
    "source_urls": [
      "https://arxiv.org/pdf/1702.00039"
    ],
    "familiar": false,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposal",
    "row": {
      "defect_id": "frontier-40-geometry-braids-rep-27-step7-initial-r1-u9-ex-the-three-term-rouquier-braid-equivalence-in-type-a-two",
      "run": "frontier-40-geometry-braids-rep-27",
      "at": "2026-10-05T20:31:57.379Z",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "ex-the-three-term-rouquier-braid-equivalence-in-type-a-two",
      "caught_at_stage": "7-judge",
      "caught_by_role": "final-adjudicator",
      "batch": "9",
      "disposition": "fixed",
      "repair_confidence": 1,
      "subclass_note": "F5 supplied the relation, not the named splitting maps used for the essential pivot. Defined J and p within the example, computed pJ=1, and verified the unit-tensor kernel embedding by two generators and graded dimensions. Both cancellations, surviving matrices, swapped signs and explicit composed contractions are checked locally. Consulted Libedinsky §§4.3–4.4 [full argument](https://arxiv.org/pdf/1702.00039); the Example claim is preserved.",
      "evidence": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u9.json",
          "anchor": "decisions[3]"
        },
        {
          "path": "items/ex-the-three-term-rouquier-braid-equivalence-in-type-a-two.md",
          "anchor": "Verification"
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json",
          "kind": "item",
          "batch": "9",
          "id": "ex-the-three-term-rouquier-braid-equivalence-in-type-a-two",
          "model": "gpt-6.1-sol",
          "context_sha256": "174912015af8bb7135ac09e20cb93788306bb62a34dcd2b57cc04ca646e27c03"
        }
      ],
      "repair_cost": "repair+rejudge",
      "prevention": {
        "kind": "process",
        "ref": "Use exact supplier interfaces; define and verify essential splitting maps before Gaussian elimination."
      }
    },
    "post_sha256": "87e0eaa7a9ac6f333001e74cb17eaa8d01a83b6fea7cc31e6dac7c1642a53532",
    "source_urls": [
      "https://arxiv.org/pdf/1702.00039"
    ],
    "familiar": false,
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "The published rank-one, rank-two and Gaussian suppliers supply valid abstract interfaces. The consumer defects were inflation of those interfaces into unspecified concrete maps; those maps are now proved locally. No defective published direct consumer of the changed braid-word Definition was found.",
    "uncertain": false
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "def-chow-group-of-cycles-mod-rational-equivalence",
  "lem-cycle-of-a-closed-subscheme",
  "lem-proper-pushforward-of-cycles-well-defined",
  "lem-flat-pullback-chow-groups",
  "lem-two-dimensional-tame-symbol-reciprocity",
  "def-intersection-with-a-cartier-divisor-and-first-chern-class",
  "lem-chow-localization-and-vector-bundle-homotopy",
  "lem-pushforward-pullback-compatibility-chow",
  "lem-chow-groups-of-projective-space",
  "thm-projective-bundle-formula-for-chow-groups",
  "lem-operational-chern-classes-and-whitney-formula",
  "lem-zero-section-gysin-and-excess-vector-subbundle",
  "lem-gysin-specialization-bivariant-and-base-change",
  "lem-refined-gysin-commutation-and-composition",
  "def-refined-gysin-pullback-for-regular-embeddings",
  "cex-arbitrary-pullback-does-not-define-a-chow-operation",
  "lem-controlled-transform-is-well-defined",
  "lem-derivatives-commute-with-controlled-transform",
  "lem-maximal-order-preserved-by-controlled-transform",
  "lem-giraud-tangent-directions-and-controlled-transforms",
  "cex-no-claim-of-resolution-in-positive-characteristic",
  "lem-fell-closure-of-a-single-representation-is-its-weak-containment-closure",
  "cex-the-unitary-dual-need-not-be-hausdorff",
  "lem-simplicial-normalization-prism-and-trivial-fibration-criterion",
  "lem-contractible-cosimplicial-evaluation-computes-derived-colimit",
  "lem-trivial-simplicial-fibration-fibres-products-and-contraction",
  "lem-cotangent-complex-resolution-independence",
  "def-simplicial-horn-and-kan-fibration",
  "lem-boundary-horn-product-is-anodyne",
  "thm-model-structures-on-variable-simplicial-modules-and-algebras",
  "lem-replacement-invariant-derived-enriched-mapping-spaces",
  "lem-simplicial-algebra-cotangent-adjunctions-before-deriving",
  "thm-projective-models-for-simplicial-and-variable-module-diagrams",
  "lem-flat-deformations-form-a-zariski-sheaf-of-groupoids",
  "thm-obstructions-lie-in-ext-two-cotangent-complex",
  "cor-vanishing-ext-one-implies-rigidity-of-deformation-classes",
  "cex-vanishing-tangent-space-does-not-imply-rigidity-with-automorphisms",
  "thm-first-order-deformations-controlled-by-ext-one-cotangent-complex",
  "cor-deformation-cohomology-of-a-smooth-scheme",
  "def-abelian-scheme",
  "thm-weil-extension-rational-map-into-group-scheme",
  "thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre",
  "cor-good-reduction-admits-a-neron-model",
  "thm-uniqueness-in-mackey-imprimitivity",
  "cor-mackey-little-group-reduction-for-an-abelian-normal-subgroup",
  "cor-the-abelian-group-c-star-algebra-recovers-pontryagin-duality",
  "def-khovanov-rozansky-complex-and-trigraded-braid-homology",
  "lem-khovanov-rozansky-braid-oriented-kink-shifts",
  "thm-markings-do-not-change-the-khovanov-rozansky-complex",
  "lem-khovanov-rozansky-complex-is-invariant-under-braid-conjugation",
  "thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-two-a",
  "thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-three",
  "thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift",
  "def-normalized-khovanov-rozansky-homflypt-bigraded-euler-series",
  "lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps",
  "lem-rouquier-normalized-comparison-isomorphisms-are-transitive",
  "thm-rouquier-complexes-form-a-coherent-braid-group-action",
  "thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence",
  "def-khovanovs-hhh-rouquier-generator-complexes",
  "lem-a-closed-moy-resolution-koszul-complex-computes-hochschild-homology-of-its-soergel-bimodule",
  "lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings",
  "thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology",
  "ex-the-trivial-one-braid-hhh-grading-normalization",
  "def-reduced-khovanov-rozansky-homology",
  "thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial",
  "cor-the-graded-euler-characteristic-of-hhh-is-homflypt",
  "cor-the-unitary-dual-of-a-compact-group-is-fell-discrete",
  "lem-geometric-intersection-numbers-are-isotopy-invariants",
  "def-basic-arcs-admissible-curves-and-normal-form",
  "def-equivalence-of-marked-ideals"
]


