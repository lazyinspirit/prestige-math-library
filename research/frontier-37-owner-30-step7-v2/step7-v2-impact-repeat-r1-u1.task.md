# Step 7 repair: impact-repeat, round 1, unit 1

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/impact-repeat-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-impact-repeat-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"frontier-37-owner-30",phase:"impact-repeat",round:1,unit:"1",input_sha256:"623aa37b90f9958a4dedf5a590b1cf72113a95401548d38bf2071aa9cf96e0cb",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "entry": {
      "run": "frontier-37-owner-30",
      "subject": "thm-smooth-up-to-the-boundary-density-on-smooth-domains",
      "class": "accuracy",
      "subclass": "choice-assumption-accounting",
      "severity": "nonfatal",
      "location": "facts-block and contract nonempty-choice boundary",
      "caught_at_stage": "7.5-repeat",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "reason": "The original Choice-use paragraph falsely classified F1 as a Countable Choice interface and omitted the AC hypothesis of F7; it also omitted the Countable Choice requirements of F4 and F8. This is nonfatal because the Statement and Given already assume full AC, which supplies F1 and F7 and implies all required Countable Choice instances. Corrected the paragraph and the contract nonempty-choice evidence without changing the Statement or numbered proof.",
      "post_sha256": "5c068974d64ff8d4ac9b488a5c9c6aa66f624f5570caca907f537f6fac0b53fe",
      "evidence": [
        {
          "path": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u10.json",
          "anchor": "thm-smooth-up-to-the-boundary-density-on-smooth-domains"
        }
      ],
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "prop-half-space-model-geometry",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "13",
    "outcome": "confirmed_nonfatal",
    "finding": "The sectional-curvature Definition assumes AC_omega through curvature symmetries, and the geodesic existence/uniqueness Statement expressly assumes it. A1 and step 5.1 incorrectly restricted inheritance to Hopf–Rinow. All three interfaces are now identified; the existing AC_omega premise and dependencies already suffice, and the explicit metric, curvature and geodesic calculations are unchanged. Classified nonfatal because the actual proof use meets the supplier hypotheses; the defect is an inaccurate auxiliary restatement or attribution.",
    "status": "repaired-local-awaiting-controller",
    "post_sha256": "b98eba9a965faf5ab788c5c274bcb86e638d3676042593aebb5b6d4836f5029a",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_audit": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "prop-round-sphere-model-geometry",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "13",
    "outcome": "confirmed_fatal",
    "finding": "For v nonzero, p/R and v/|v| are orthonormal and |v|t/R takes every real angle; the maximal geodesic therefore covers the entire great circle. Corrected Statement 2 and supplied the surjectivity argument in step 3.1. Finite minimizing restrictions still have arc images, and the distance, curvature and cut-time interfaces are unchanged. Classified fatal because the literal mathematical assertion is false or outside the function domain, even though a small correction suffices.",
    "status": "repaired-local-awaiting-controller",
    "post_sha256": "c331590202691eb5ab260808c1c89168b9a4374ac2c5e54860882aacffab4704",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_audit": false,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-sturm-comparison-for-scalar-jacobi-equations",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "13",
    "outcome": "confirmed_fatal",
    "finding": "With L=1 and a=b=0, u=v=t has no positive zero on [0,1], so tau=infinity but v(2) is undefined. Restricted the introductory positivity quantifier to t in (0,L] with t<tau, exactly as conclusion 1 already does. The Wronskian identity h_prime=(b-a)uv, quotient limit 1 and continuation argument establish the unchanged finite-domain comparison. Classified fatal because the literal mathematical assertion is false or outside the function domain, even though a small correction suffices.",
    "status": "repaired-local-awaiting-controller",
    "post_sha256": "6d6ac450f3aa366aaf3f4b8e92553d9084f9421ca114bcaa4fa6956a1a1bbfdb",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_audit": false,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-radial-riccati-equation",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "13",
    "outcome": "confirmed_nonfatal",
    "finding": "Taylor–Peano requires differentiability on an open neighborhood, not merely at the expansion point. Restored that exact F8 hypothesis. At a one-sided initial endpoint, the smooth entries of Abar admit C3 left extensions by their cubic Taylor polynomials; matching derivatives through order three licenses Taylor–Peano. Applying orders three and two to Abar and its derivative gives Abar=tI+O(t^3), Abar_prime=I+O(t^2), and S=t^(-1)I+O(t). The Riccati differentiation and Wronskian symmetry argument are unchanged. Classified nonfatal because the actual proof use meets the supplier hypotheses; the defect is an inaccurate auxiliary restatement or attribution.",
    "status": "repaired-local-awaiting-controller",
    "post_sha256": "2b2d5f87f25e23007d09f38af286826120e8b442633b0de1aa1a9161114cb508",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_audit": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-bonnet-myers-for-the-round-sphere",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "13",
    "outcome": "confirmed_nonfatal",
    "finding": "The compactness supplier explicitly requires boundarylessness and gives metric completeness componentwise. The Euclidean interval [0,1] is compact but its unit-speed geodesic reaches the boundary in finite time, refuting the unrestricted F4 restatement. Restored boundaryless and connected-component qualifications; step 3.1 checks the sphere is connected and boundaryless using its model supplier before applying compact completeness. The Ricci trace and diameter equalities are unchanged. Classified nonfatal because the actual proof use meets the supplier hypotheses; the defect is an inaccurate auxiliary restatement or attribution.",
    "status": "repaired-local-awaiting-controller",
    "post_sha256": "00201a01c60e1cc45e88e09eaef1a21a05605c04f90897a1a665af0facf83f58",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_audit": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-relative-volume-density-comparison",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "13",
    "outcome": "confirmed_fatal",
    "finding": "On a complete manifold exp_p(tv) is defined for every real t; on the round sphere it remains a periodic geodesic beyond c_p(v)=pi R. Only the minimizing polar chart and the declared J_p domain end at cut time. Corrected that Statement caveat without altering q_v, its domain, or the comparison. Also restored the open-neighborhood hypothesis in F6; the smooth all-real model functions meet it, and the integrating factor plus matched t^(-1)+O(t) asymptotics proves the trace bound and monotonicity. Classified fatal because the literal mathematical assertion is false or outside the function domain, even though a small correction suffices.",
    "status": "repaired-local-awaiting-controller",
    "post_sha256": "d7a81cc86786b98532524c76afc124a7d692874469de0c4574bf99be406e8152",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_audit": false,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "prop-rigidity-in-rauch-comparison",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "13",
    "outcome": "confirmed_nonfatal",
    "finding": "The cited Definition specifies the space-form predicate and establishes no existence theorem. The Statement already supplies M_k, its unit-speed geodesic and the comparison isometry as data, and step 1.1 uses only their constant-curvature tensor and the explicit model Jacobi field. Replaced the unsupported existence attribution by the exact definition and identified the stipulated data; neither comparison nor rigidity conclusion is weakened. Also corrected the lower boundary term in F2 from undefined a to 0 on [0,b]. Index equality identifies the first-form field; in the second form the positive semidefinite Riccati difference annihilates y and differentiation gives R_gamma y=ky. Classified nonfatal because the actual proof use meets the supplier hypotheses; the defect is an inaccurate auxiliary restatement or attribution.",
    "status": "repaired-local-awaiting-controller",
    "post_sha256": "9058776aecbd68e5cfd8909955376c5feee78d5004581377fb3a026c1f92f6f7",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_audit": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-cheng-maximal-diameter-rigidity",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "13",
    "outcome": "confirmed_nonfatal",
    "finding": "The Given paragraph and step 1.2 define rho=1/sqrt(k) and R=pi rho. Thus the set |x|=R in F11 has curvature 1/R^2=k/pi^2, contrary to the asserted model curvature. Corrected F11 to |x|=rho; the Statement and every scaling calculation already use rho correctly. Reviewed the complementary-ball volume argument, cut-time concatenation, model exponential pullback h_k, agreement lemma, orthogonal transition extension and two-chart gluing: they all retain the diameter R and sphere radius rho. Classified nonfatal because the actual proof use meets the supplier hypotheses; the defect is an inaccurate auxiliary restatement or attribution.",
    "status": "repaired-local-awaiting-controller",
    "post_sha256": "e2c8653cd425c174085fb1936eb4c3431934221146bb398484b2a5fdc93c5405",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_audit": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-equality-cases-as-diagnostics-for-all-comparison-signs",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "13",
    "outcome": "confirmed_fatal",
    "finding": "For E=0 the explicit field sn_k(t)P_tE vanishes for every k, so the strict field inequalities in steps 1.2 and 6.1 were false as stated. Required matched positive initial-derivative norm for strictness and explicitly retained equality for E=0 in the Example, steps 1.2 and 6.1, and the boundary audit. Also removed the false cosine-equality-at-origin-only assertion, and supplied Taylor–Peano at k=0 to justify the curvature derivative used by the angle argument. The scalar sn ordering, cotangent derivative signs, positive-density volume ordering and half-angle convexity proof remain intact. Classified fatal because the literal mathematical assertion is false or outside the function domain, even though a small correction suffices.",
    "status": "repaired-local-awaiting-controller",
    "post_sha256": "cd7ee7182f3c781d44131c1cdedc0cb77dffa940c7b4ad6ee36f7b7d56ed18d2",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_audit": false,
    "defect_type": "logic"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "id": "def-constant-sectional-curvature-and-space-form",
    "status": "owner-maintenance-proposed",
    "route": "separate-maintenance",
    "affected_use": "Definition second paragraph: It is used here only through that supplier's construction of the unique maximal geodesic domains needed to interpret completeness; the constant-curvature predicate itself makes no further family choice beyond the stated inherited assumption.",
    "invalidated_claim": "The exclusive geodesic-completeness attribution conflicts with the first paragraph and the actual def-sectional-curvature Definition, which inherits AC_omega through thm-algebraic-symmetries-of-the-riemann-tensor. The premise and deps already include AC_omega; this is an assumption-use accounting defect, not a failure of the space-form predicate.",
    "minimality": "Replace the exclusive attribution by both sectional-curvature and geodesic-completeness interfaces. Do not alter the geometric predicate or weaken a claim. If maintenance changes this published Definition, it must inspect every direct consumer one hop; none was edited or adjudicated by this unit.",
    "evidence_paths": [
      "items/def-constant-sectional-curvature-and-space-form.md: Definition first and second paragraphs",
      "items/def-sectional-curvature.md: Definition opening paragraph"
    ],
    "reason": "Direct comparison of the two definitions confirms the additional inherited sectional-curvature interface. Published item was inspected only as a prerequisite and is outside the assigned draft lane.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_audit": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "entry": {
      "defect_id": "frontier-37-owner-30-step7-repeat-r1-u14-001",
      "run": "frontier-37-owner-30",
      "class": "accuracy",
      "subclass": "zero-fold-tensor-spanning",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "def-commuting-symmetric-and-linear-actions-on-tensor-power",
      "caught_at_stage": "7.5-adjudicate",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "source": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u14.json",
      "finding": "The Definition claimed unweighted finite sums of elementary tensors span E_0=C, although its only elementary tensor is 1; i is a counterexample. The aggregate zero-case contract additionally said there are no elementary tensors when V=0, whereas every elementary tensor is zero.",
      "repair": "Use finite C-linear combinations, explicitly c=c*1 for n=0; describe Delta as the coefficient of t, including coefficient zero at n=0. Correct the owning empty-case and aggregate zero-case contract evidence.",
      "evidence": [
        {
          "path": "items/def-commuting-symmetric-and-linear-actions-on-tensor-power.md",
          "note": "Definition, The tensor power; The diagonal infinitesimal operator."
        },
        {
          "path": "items/cor-finite-iterated-tensor-products-represent-multilinear-maps.md",
          "note": "Statement and Proof 1.1: zero-variable maps are chosen elements, represented by c -> cp."
        },
        {
          "path": "items/thm-tensor-product-basis-from-bases.md",
          "note": "Statement and Proof 3.1-3.2: product bases and finite coordinate expansions, including empty bases."
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-dual-numbers-simple-is-not-perfect",
    "outcome": "confirmed_nonfatal",
    "repair_status": "repaired",
    "finding": "Confirmed a nonfatal citation-interface defect: F2 and its contract cite the Statement of lem-perfect-complexes-form-a-triangulated-subcategory for K-projectivity, but that Statement asserts only morphism representation between bounded finite-projective representatives. The source proof, step 1.4, does prove K-projectivity by finitely many projective lifts against an arbitrary acyclic target, so the cited mathematical assertion is true and there is no fatal mathematical gap. Removed F2 and its unnecessary dependency. In verification 3.1, P is already bounded above with projective terms, and id_P is a quasi-isomorphism, so the existing derived-tensor Definition directly permits P as its own supplied replacement. No new prerequisite or weakened claim is needed."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update_required",
    "reason": "No supplier Statement or Definition was changed and no potentially defective published consumer was discovered. The existing published derived-tensor Definition supplies precisely the projective replacement used."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "entry": {
      "defect_id": "frontier-37-owner-30-step7-repeat-r1-u21-title-spine",
      "run": "frontier-37-owner-30",
      "class": "accuracy",
      "subclass": "false-or-overstrong-title",
      "severity": "nonfatal",
      "location": "title",
      "subject": "lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles",
      "caught_at_stage": "7.5-adjudicate",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "source": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u21.json",
      "finding": "The old display title promised a finite wedge as a spine, although the proof constructs a chain-graph deformation retract and obtains the wedge only as a homotopy-equivalent tree-collapse quotient. The Statement and owning statement contract assert homotopy equivalence only.",
      "repair": "Changed the item and assigned batch-manifest titles to A finitely punctured open disk has the homotopy type of a finite wedge of circles. All Statement and Proof bytes are unchanged.",
      "item_sha256": "549ae342edb43ae2eee20ceaa29a4e8af63c020be26068855aced6a591cd1bdf",
      "evidence": [
        {
          "path": "items/lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles.md",
          "note": "Statement; Proof 1.3-1.4, 2.1, 3.1, 3.2 and 4.1 distinguish the chain-graph retract from the quotient wedge."
        },
        {
          "path": "research/frontier-37-owner-30-batch-21.pages.json",
          "note": "Assigned item statement contract requires homotopy equivalence, free meridian basis, higher-homotopy vanishing and no AC; only its title was synchronized."
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_finding",
    "run": "frontier-37-owner-30",
    "subject": "def-riesz-measure-subharmonic-function",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding": "The functional definition is choice-free and its point-mass normalization already assumes Countable Choice. The Remark omitted the stronger Dependent Choice hypothesis of thm-riesz-measure-is-positive-radon for positive Radon representation and uniqueness; both Remark clauses now state it. The Definition itself is unchanged.",
    "evidence": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u24.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_finding",
    "run": "frontier-37-owner-30",
    "subject": "lem-logarithmic-potential-distributional-laplacian",
    "severity": "not-a-defect",
    "disposition": "false_positive",
    "finding": "False positive: def-support-of-a-borel-measure has a complete choice-free countable-rational-square proof in its Remark. Its null squares cover the union of null opens; countable additivity makes that union null, so S carries mu, is the smallest closed carrier, and is nonempty for nonzero mu. The F11 contract already quotes this Remark. Tonelli, upper semicontinuity via Fatou, circle means, uniformly bounded kernel derivatives off S, and the fundamental-solution pairing establish the stated Laplacian; no item edit was needed.",
    "evidence": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u24.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_finding",
    "run": "frontier-37-owner-30",
    "subject": "lem-logarithmic-potential-maximum-principle",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding": "F4 misstated the cited theorem: integrable domination of the integrand alone does not justify differentiation. The actual step 3.2 already has uniform bounds for first and second kernel derivatives off compact S, so the theorem remains sound. Repaired F4 with the derivative-majorant hypotheses, checked them successively in step 3.2, and cited dominated convergence for derivative continuity. Also made the atom argument use the lower bound on the remaining kernel and chose j>=2 to meet epsilon<1. Statement unchanged.",
    "evidence": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u24.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_finding",
    "run": "frontier-37-owner-30",
    "subject": "def-polar-set-and-quasi-everywhere",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding": "The local witnesses were quantified on arbitrary open sets although def-plane-subharmonic-function types them only on complex domains. Repaired the Definition to require a complex domain U_x and stated its connected-open convention. This preserves local polarity: a witness on components restricts to the component through x, or to a small disc. Capacity-polar and Borel quasi-everywhere clauses are unchanged, and all direct consumer uses remain sound.",
    "evidence": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u24.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_finding",
    "run": "frontier-37-owner-30",
    "subject": "thm-riesz-decomposition-subharmonic-plane",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding": "The DC hypothesis was already sufficient, but the Statement incorrectly described its expenditure as only through Countable Choice in the Radon suppliers. F4 explicitly requires DC for RMK representation and uniqueness. Corrected that paragraph, retaining DC and the complete decomposition/uniqueness contract. Also applied all subharmonicity and circle-mean arguments on connected components of open D rather than assigning domain-only subharmonicity to arbitrary D. The direct consumer uses a disc and explicitly assumes DC, so its use is sound.",
    "evidence": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u24.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_finding",
    "run": "frontier-37-owner-30",
    "subject": "def-green-function-with-pole-at-infinity",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding": "The Remark falsely asserts a positive harmonic candidate with the exact Robin normalization can be unbounded near a finite boundary point. With canonical G, the one-sided Evans-barrier comparison gives g>=G; the nonnegative harmonic difference tends to zero at infinity, forcing equality. Removed the false independence/counterexample assertion and retained all four defining conditions. [Saff, Theorem 2.6 and Definition 3.4](https://arxiv.org/pdf/1010.3760) were consulted; the local comparison was checked against the complete current Green theorem proof rather than assuming an unprovided source proof.",
    "evidence": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u24.json",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1010.3760"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_finding",
    "run": "frontier-37-owner-30",
    "subject": "prop-reciprocity-inequality-for-logarithmic-potential",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding": "The sentence claiming U^sigma(z)=+infinity at diagonal points is false: normalized area measure on the unit disc has U^sigma(0)=2 integral_0^1 r log(1/r) dr=1/2 despite k(0,0)=+infinity. Replaced it by the pointwise kernel bound k(z,w)>=log(1/D), valid also on the diagonal; integration against the probability sigma yields the same potential lower bound. Shifted Tonelli then gives reciprocity, and Frostman bounds the other iterated integral by V_K. The false sentence was unnecessary to the valid inequality, so this is nonfatal; Statement unchanged. The unchanged final argument agrees with [Saff, Proposition 1.13](https://arxiv.org/pdf/1010.3760).",
    "evidence": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u24.json",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1010.3760"
    ],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "subjects": [],
    "reason": "Both changed interfaces have only draft direct consumers in the frozen frontier. Their exact uses remain sound; no outside or potentially defective published consumer was found. No published item was edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "companion": "research/DEFECT-LEDGER.md",
    "id": "def-poisson-integral-of-finite-boundary-measure",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "25",
    "status": "repaired",
    "defect_type": "dependency_citation",
    "finding": "The complex-measure clause in def-radon-nikodym-derivative requires full Choice; this countable-choice Definition invoked it and its integration theorem without that hypothesis.",
    "repair": "Use the supplied measurable-set density formula and canonical simple integration with finite Lebesgue linearity, followed by the explicit dyadic bounded-test argument. Density uniqueness is supplied by thm-the-lebesgue-integral-respects-almost-everywhere-equality. Remove both RN dependencies and add def-simple-integral-against-a-signed-or-complex-measure.",
    "evidence_paths": [
      "items/def-poisson-integral-of-finite-boundary-measure.md",
      "items/def-radon-nikodym-derivative.md",
      "items/def-simple-integral-against-a-signed-or-complex-measure.md"
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "additional_nonfatal_finding": "The contracts marked endpoints inapplicable despite the included radial endpoint r=0. Both assigned entries now verify P[mu](0)=mu(T) and P[f](0)=integral f dm and state that r=1 is excluded."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-canonical-basis-of-complex-lattice",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "finding": "The displayed fixed-point equality omits (a-d)v from its imaginary part. For (a,b,c,d)=(0,1,-1,1) and tau=1/2+i sqrt(3)/2, the true quadratic tau^2-tau+1 is zero but the displayed imaginary part is sqrt(3)/2. This is a false algebraic equality used to obtain u, hence a logic defect. Replacing it by (2bu+a-d)v i justifies u=(d-a)/(2b) and v^2=(4-t^2)/(4b^2) without changing the claim.",
    "repair": "Corrected step 1.3 imaginary coefficient; synchronized contract derivation. Also corrected sigma notation and the nonfatal contract claim of closedness.",
    "status": "locally_repaired_pending_engine_rejudgment",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-elliptic-function-for-a-lattice",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "finding": "For f(z)=z one has f(z+omega)=f(z) for every z only when omega=0, so Per(f)={0} cannot contain a full lattice. The unconditional containment in the Definition is false (logic defect). Removed only that unconditional clause; the exact equivalence f is Lambda-elliptic iff Lambda is a subset of Per(f) retains the required hypothesis and all intended claims.",
    "repair": "Removed unconditional lattice containment; synchronized the empty-case contract. Also made the local covering restriction, nonzero denominator convention and closedness in divisor-finiteness reasoning explicit.",
    "status": "locally_repaired_pending_engine_rejudgment",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "markdown_mirror": "research/DEFECT-LEDGER.md",
    "action": "record_adjudication",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "28",
    "id": "lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces",
    "outcome": "confirmed_fatal",
    "finding": "Pointwise logarithm definition did not supply slit-plane holomorphy. Replaced by the published slit-plane corollary and precise algebra/Cauchy–Riemann suppliers.",
    "evidence_report": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u28.json",
    "context_sha256": "8bc93d16d0641f3681221f717de1e725fa6306c904981c81bfdf892389ae3481",
    "post_sha256": "4b3e1a386bf8d65edcb1806ec41c4df08bad43652e58ec88dfe5e6a49d590bbf",
    "review_context_sha256": "6a4c8d59cab1fef7fbe7a9542f7199871953627c130ddc67b36b5a79a035274a",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "status": "locally_repaired; independent engine rejudgment pending",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "markdown_mirror": "research/DEFECT-LEDGER.md",
    "action": "record_adjudication",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "28",
    "id": "lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces",
    "outcome": "confirmed_fatal",
    "finding": "The barrier needed an analytic logarithm branch. Explicit rotated-principal-log power now meets the sector and harmonic-component prerequisites.",
    "evidence_report": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u28.json",
    "context_sha256": "ad761c19876d3bf88b868d14ee3076d6a7c9faa00ea11c81f17af11ff377661b",
    "post_sha256": "1c503cb1146473e72305324cbcec707a6db4fd94eb634caf8218c7f93a159588",
    "review_context_sha256": "8148913ba498da5c182c7e75044252752b21a9d43a7845cc82e91a84f319110c",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "status": "locally_repaired; independent engine rejudgment pending",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "markdown_mirror": "research/DEFECT-LEDGER.md",
    "action": "record_adjudication",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "28",
    "id": "lem-weak-harmonic-limits-on-riemann-surfaces",
    "outcome": "confirmed_fatal",
    "finding": "Circle means were incorrectly called ball means. Added the concentric-radius integration giving disc means and the precise plane converse supplier.",
    "evidence_report": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u28.json",
    "context_sha256": "4ae9709acff091f89415f8ede23923dc50a7e210a4f7ef89ab8db24c157f0655",
    "post_sha256": "83a9ddf0fc59c2c1f4793e8a91d3770d7a9774b4a40d298388058c10e014cbff",
    "review_context_sha256": "156e0b67b4f3c85c76a30fd0ec72d45c693f46306bd80ff8c9d3541e94d8b3ff",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "status": "locally_repaired; independent engine rejudgment pending",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "markdown_mirror": "research/DEFECT-LEDGER.md",
    "action": "record_adjudication",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "28",
    "id": "lem-green-envelope-dichotomy-and-logarithmic-pole",
    "outcome": "confirmed_nonfatal",
    "finding": "Zero-index empty maximum in maximizing sequence. Reindexed finite maxima to begin at v_0; claim and limiting argument unchanged.",
    "evidence_report": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u28.json",
    "context_sha256": "da2ca205b3271fc659e5d15b10ee13062586438635661bbe320d6ddf0807be77",
    "post_sha256": "2b27685ef9252f856474231b772963268f7508b94057546e599325cf7b57f237",
    "review_context_sha256": "37cf3cc4a9e7011df8405b0f9ed1ba1390ff5faf7567a499326b9592cff0d041",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "status": "locally_repaired; independent engine rejudgment pending"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "markdown_mirror": "research/DEFECT-LEDGER.md",
    "action": "record_adjudication",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "28",
    "id": "lem-green-kernel-exists-after-removing-a-chart-disc",
    "outcome": "confirmed_fatal",
    "finding": "Missing closed-ball containment admitted an empty removed disc and the parabolic plane. Added the intended chart-image condition and examined the assigned direct dipole consumer.",
    "evidence_report": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u28.json",
    "context_sha256": "f8d421f1f08d26435bc5d4ec399996ade7b61386c050622ee4d04fc590b3f6ce",
    "post_sha256": "ce42d88dfbbb01b50fe09d86ac0bc61ffbe1f56d1f378dae9e4d84b690e99ab6",
    "review_context_sha256": "89c416dae6301c40da48f3a455d0ead36df6874e15a206299c40e74d8c996b86",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "status": "locally_repaired; independent engine rejudgment pending",
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "markdown_mirror": "research/DEFECT-LEDGER.md",
    "action": "record_adjudication",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "28",
    "id": "lem-green-kernel-symmetry-on-riemann-surfaces",
    "outcome": "confirmed_fatal",
    "finding": "Metric compact-image theorem was applied to an ambient topological surface without metrizability evidence. Replaced by the correct topological theorem; checked complete local boundary regularity argument and patched C2 neighbourhood extensions.",
    "evidence_report": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u28.json",
    "context_sha256": "7ca45b5ed530a82b15bc300df4a2314a6a2b5d8f961d89593c23730b17e0c74a",
    "post_sha256": "1a849f2ad699c092e7a357f4965246e87bb810b8109969bb5c4fb56837765f11",
    "review_context_sha256": "ca9e4ba9080969aa002da1970811223ec3e6002ef460a898cc8b33e167368bbc",
    "uncertain": false,
    "source_urls": [
      "https://djvu.online/file/jxRRleAzbYjsl"
    ],
    "familiar": false,
    "status": "locally_repaired; independent engine rejudgment pending",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "markdown_mirror": "research/DEFECT-LEDGER.md",
    "action": "record_adjudication",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "28",
    "id": "lem-dipole-green-function-on-riemann-surface",
    "outcome": "confirmed_fatal",
    "finding": "F3 dropped the extending-chart hypothesis needed for connected Greenian exteriors. Restored that condition, fixed t_0, and made uniform Harnack constants use fixed surfaces.",
    "evidence_report": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u28.json",
    "context_sha256": "fbaca5be8d1536f6b808ff0322633959276448c140123ad8bfd0ac613afb5881",
    "post_sha256": "eed72ec960798f616e83d17809abb057b2968105e87d7b6dd21708e320be4a07",
    "review_context_sha256": "c0acb69e190950d8e4a69ef2ba875200ba05743c6ec82da26e650365f5ff1349",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "status": "locally_repaired; independent engine rejudgment pending",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "markdown_mirror": "research/DEFECT-LEDGER.md",
    "action": "record_adjudication",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "28",
    "id": "lem-green-function-uniformizes-simply-connected-surface",
    "outcome": "confirmed_nonfatal",
    "finding": "Zero-index division in compact superlevel argument. Replaced 1/n with 1/(n+1); also made the contradiction bound C strictly positive.",
    "evidence_report": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u28.json",
    "context_sha256": "1a34f03b3c8f409825fa8889f1e74e0ded676ec0f2143a4cdf9f2934109e4797",
    "post_sha256": "eaf8b8137903ea0739f1da4f9f17d7c2703d48ace5d3c05a9bd13ca0d23d7a72",
    "review_context_sha256": "0333037077b8de48573d20392eecebdde94a99f9c8f32eb6d7fcd1b65f9336c7",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "status": "locally_repaired; independent engine rejudgment pending"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "markdown_mirror": "research/DEFECT-LEDGER.md",
    "action": "record_adjudication",
    "run": "frontier-37-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "28",
    "id": "cor-universal-cover-classification-riemann-surfaces",
    "outcome": "confirmed_fatal",
    "finding": "Atlas transport from a known holomorphic cover did not justify an arbitrary competing quotient. Proved the general quotient topology and holomorphic sheet atlas before invoking covering uniqueness.",
    "evidence_report": "research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u28.json",
    "context_sha256": "94c00be8d57e25e66d4c17d732e3de81e0ac2d22c3d116ea31c883b62f873adb",
    "post_sha256": "e60b9e3e3ff7ae511d6c27057b8ef4988456175c7d67d3145ca5f97fbb3897ca",
    "review_context_sha256": "239b5639c2a86036cd9442ea5c3172045d1dcebe615fd66c229dbf5ced70041c",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "status": "locally_repaired; independent engine rejudgment pending",
    "defect_type": "logic"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published item was edited or adjudicated. The only changed Statement is the assigned draft disc-removal supplier; exact dependency/reference discovery finds only the assigned draft dipole consumer, whose necessary proof/fact repair is complete. No outside consumer or potentially defective published use was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-s-integers-and-s-units-of-a-number-field",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "reason": "Confirmed a missing prerequisite: the original cited ring-of-integers definition only identifies the integral closure and does not prove the Dedekind property or its fraction field. The new well-definedness argument proves both in ZF and uses the explicit local calculation of thm-number-field-integral-ideal-factorisation-in-zf, steps 2.1--6.1, to justify the integer valuation of each principal fractional ideal without invoking the AC-qualified general invertibility theorem.",
    "uncertain": false,
    "source_urls": [
      "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    ],
    "familiar": true,
    "post_sha256": "ebb371b8d1d8367cafbebd4d2ee3a1e2429f65396a9613cdf40440659254fef1"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "disposition": "no_update_needed",
    "reason": "No published item was edited or found defective in this assignment; the repaired supplier Definition is unchanged, so no published consumer interface event is opened.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-regular-singular-point-analytic-hypersurface",
    "finding": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "evidence": "Equality of zero germs in the finite-projection Statement does not imply reducedness of its W. For f=z_n and W=z_n^2 the differential criterion fails; the repaired remark uses the stronger preparation interface F=uW and proves W reduced before invoking the nearby-reduced lemma.",
    "repair": "items/def-regular-singular-point-analytic-hypersurface.md: Remarks, A fixed equation near the base point; deps now cite generic coordinates and Weierstrass preparation."
  },
  {
    "ledger": "defect",
    "id": "ex-principal-divisor-degree-zero-p1",
    "finding": "Nonfatal AC dependency-accounting defect in 2.1; F1 assumes AC as well as F6.",
    "resolution": "Repaired Given, F1, 2.1 and owning contract; claim unchanged; focused precheck/rendercheck/strict contract passed.",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "thm-line-bundle-rational-section-cartier-divisor",
    "finding": "Fatal logic defect: the closing regular iff effective assertion contradicts regular-meromorphic/nonzero terminology, witnessed by 1/t on A1.",
    "resolution": "Replaced by global-section membership iff effectivity and supplied proof step 4.2. Statement unchanged; no interface event.",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "cor-degree-descends-picard-curve",
    "finding": "Fatal dependency-citation defect: F3 omits codimension one and falsely asserts dimension one for every integral closed subscheme, including C.",
    "resolution": "Restored prime-divisor scope, proved the curve point/local-dimension classification, and cited exact existing prerequisites. Statement unchanged; strict contract now has 0 errors and warnings.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-divisor-degree-over-nonalgebraically-closed-field",
    "phase": "repeat",
    "round": 1,
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "F1 cited only a curve definition and projective charts, neither of which establishes smoothness or properness. The proper-curve degree and smooth-curve DVR applications therefore lacked a licensed prerequisite. Replaced the unsupported attribution with lem-projective-line-curve-and-divisor-basics under the already assumed AC; its proof establishes geometric integrality from the two dense integral charts, dimension one from chart dimensions, smoothness from polynomial standard-smooth presentations, and properness from thm-projective-space-proper-over-base. Residue degree two, local orders 1 and -2, and the two reduced complex points were checked directly.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-fibre-degree-sum-ramification-residue",
    "phase": "repeat",
    "round": 1,
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The degree definition already proves the identical formula by DVR freeness, Artinian fibre decomposition and uniformizer filtrations. The original lemma repeats that argument, a nonfatal duplication under the library convention, not an invalid degree formula. Replaced the repetition with a direct application of the established weighted-order formula and the exact equality e_p=ord_p(f* t_q) from the ramification-index definition. The degree supplier proves fibre finiteness using a finite-dimensional Artinian algebra, and both suppliers have precisely the stated smooth proper geometrically integral hypotheses and AC assumption. No separability is needed. This also removes the old inaccurate exclusive Choice accounting: AC is inherited through the whole cited interfaces, including the smooth-curve DVR route.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/DEFECT-LEDGER.md",
    "id": "lem-degree-pullback-divisor-finite-morphism-curves",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "finding": "F1 confused a finite extension of k with a finite field. Corrected F1 without changing the Statement or degree argument.",
    "evidence": "items/def-degree-divisor-proper-curve.md Definition; items/def-divisor-smooth-proper-curve.md Definition; assigned lemma F1 and proof steps 5.1–7.1.",
    "post_sha256": "9da002cd7e3e69ebe264514b903d8bfb28bf7d5331f72545d3512cbe4265f1ca"
  },
  {
    "ledger": "research/DEFECT-LEDGER.md",
    "id": "rem-duality-trace-normalization",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "finding": "Explicitly assumed the AC hypothesis required by fixed-trace, duality, cohomology and residue suppliers. No normalization or residue-field scope changed.",
    "evidence": "items/def-smooth-projective-dualizing-line-bundle-and-trace.md Definition; items/thm-serre-duality-curves-line-bundles.md Statement and full proof; items/lem-residue-pairing-descends-cohomology.md Statement; repaired remark opening.",
    "post_sha256": "09cf26fb43bda77dfd2b5190467475eefcbba0cfca888ee7c30ce5cf5da7a198"
  },
  {
    "ledger": "research/DEFECT-LEDGER.md",
    "id": "cor-degree-three-line-bundle-embeds-genus-one-plane-cubic",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "finding": "Qualified the title by the rational-point hypothesis already present in the correct Statement and proof; no theorem weakening or proof change.",
    "evidence": "Assigned corollary original title; Statement first paragraph and proof 1.1–6.1. The real point-free quartic double cover refutes the unqualified universal title.",
    "post_sha256": "32f20f830e3538782a70d57ffb5d18782208c6cca8d48371f59b3aa6dc4c14b3"
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "thm-poisson-extension-lp-contraction-and-norm-limit",
  "thm-poisson-nontangential-maximal-bound",
  "thm-fatou-nontangential-boundary-theorem-harmonic",
  "cex-radial-boundary-limit-does-not-force-tangential-limit",
  "thm-harmonic-hardy-one-measure-representation",
  "thm-harmonic-hardy-representation-p-greater-one",
  "cor-bounded-harmonic-functions-have-nontangential-limits",
  "thm-rauch-comparison-theorem-first-form",
  "lem-toponogov-distance-support-inequality",
  "thm-toponogov-hinge-comparison",
  "prop-distance-between-corresponding-side-points-in-toponogov-comparison",
  "cor-diameter-rigidity-from-toponogov-under-a-sectional-lower-bound",
  "def-green-function-with-pole-at-infinity",
  "ex-distance-hessian-and-laplacian-in-space-forms",
  "ex-model-jacobi-fields-in-positive-zero-and-negative-curvature",
  "thm-bishop-gromov-volume-comparison"
]


