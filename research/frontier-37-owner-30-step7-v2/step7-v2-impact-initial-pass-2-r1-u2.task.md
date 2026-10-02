# Step 7 repair: impact-initial-pass-2, round 1, unit 2

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/impact-initial-pass-2-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-impact-initial-pass-2-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"frontier-37-owner-30",phase:"impact-initial-pass-2",round:1,unit:"2",input_sha256:"b2c67dbab4f675c707e2524192f32ae1a4b32643cff854a8e0edfb6c261dc3ce",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-homological-and-internal-shifts-on-k-zero",
    "action": "record_local_frontier_repair",
    "finding": "F1 incorrectly required distinct shift classes although P=0 is allowed. Replaced only that clause by the zero caveat; termwise commutation and [P[1]{2}]=-v^2[P] remain valid. Refreshed 2 stale owning-batch citation quote(s) to the current supplier section after examining the used clauses.",
    "post_sha256": "34c2d6c240254859c5def12ac3440b15d7225298ba6b7b9dbe722f7754e5d7aa",
    "independent_audit": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-global-residue-pairing-injective-left",
    "action": "record_local_frontier_repair",
    "finding": "The zero principal-part family may have only the zero diagonal preimage, which is excluded by the rational-section convention. Statement, F1 and step 7.1 now use meromorphic sections including zero; the local trace detection and injectivity argument are unchanged. Refreshed 4 stale owning-batch citation quote(s) to the current supplier section after examining the used clauses.",
    "post_sha256": "3f5093283e1081946e5a7567cea7db5ef6f59c0afc2f9bf25fb0795886782bc4",
    "independent_audit": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds",
    "action": "record_local_frontier_repair",
    "finding": "Step 2.1 now separates A=B, where the reciprocal-power difference is zero, before invoking scalar MVT for ordered distinct endpoints. The unchanged kernel, Countable Choice polar measure, and explicit size and cancellation estimates remain valid. Refreshed 1 stale owning-batch citation quote(s) to the current supplier section after examining the used clauses.",
    "post_sha256": "f4fd7cfb3a54c2efcadb972d60946a8286fd019e79ee5ea1a38f7750f46949fa",
    "independent_audit": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-schur-weyl-decomposition-with-length-cutoff",
    "action": "record_local_frontier_repair",
    "finding": "Claim 4 had an ill-typed equality between a map and an equality of weights; replaced equals by satisfies. F1 uses the corrected diagonal-action composition law, and F10/step 6.3 already give mu=lambda and psi in the highest-weight line; all representation conclusions are retained.",
    "post_sha256": "0ba79a79ae121caf5531be9c6d7c5838b48f4694daea54236d3ac677d5aa98f0",
    "independent_audit": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-singular-locus-reduced-hypersurface",
    "action": "record_local_frontier_repair",
    "finding": "Centered the preparation at arbitrary p: the pullback is f(p+Tz), a germ-ring isomorphism from the ring at p to the ring at zero. Statement, Given, F3 and step 1.1 now retain the finite theorem's root-containing representative. The reduced-equation derivative criterion and discriminant use meet the repaired suppliers' hypotheses.",
    "post_sha256": "37aae29530aa0425bfcfd138b4e6a7e68201c058d97705db728ea11942faf864",
    "independent_audit": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-regular-hyperplane-hypersurface-germ",
    "action": "record_local_frontier_repair",
    "finding": "F6 overstated proper finite projection for arbitrary products. Restricted it to the theorem's chosen root-containing product; for W=z_n every centered D contains the only root zero, so step 2.2 gives the same graph bijection and empty branch set. The connected local regularity criterion is satisfied. Refreshed 1 stale owning-batch citation quote(s) to the current supplier section after examining the used clauses.",
    "post_sha256": "9d5cae1d73ff1ead7208897b1bc8efbbd054600a2d1c01d7b19ab6bcfbaa7f92",
    "independent_audit": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-genus-zero-point-implies-projective-line",
    "action": "record_local_frontier_repair",
    "finding": "F5 repeated the invalid claim that every pole-free rational function is a unit. Inserted nonzero exactly as in the repaired supplier; the actual function h is nonconstant in k(C)^times, so the degree-one map and birational-isomorphism argument are unchanged. Refreshed 1 stale owning-batch citation quote(s) to the current supplier section after examining the used clauses.",
    "post_sha256": "91d98762dbebfdaac479c0a2cbdb7e1ae2808f26e29422d0b104b9c1280e492f",
    "independent_audit": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-s-units-of-q",
    "action": "record_local_frontier_repair",
    "finding": "F6 repeated the undefined valuation-at-zero ring display. Replaced it by {0} union the nonzero valuation locus and made the two valuation comparisons in step 2.3 explicitly nonzero; both rings' zero case was already separated. The localization and signed prime-power unit group are unchanged. Refreshed 1 stale owning-batch citation quote(s) to the current supplier section after examining the used clauses.",
    "post_sha256": "d2823353d392e6df79eb8a622970d401527a3b7f72d4c1c96eb85e4c4394084f",
    "independent_audit": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-green-envelope-dichotomy-and-logarithmic-pole",
    "action": "record_local_frontier_repair",
    "finding": "F3 still described every chart expression as a single plane-domain subharmonic function. Replaced it by connected-component testing and made the step 1.3 local expression componentwise. That step already glues on the component containing its disc and leaves the others unchanged; the envelope and pole conclusions need no change.",
    "post_sha256": "c3a4c2be20026dddf5f27e4549458a971aa4e058a494b18c6e1f87bd133ba86e",
    "independent_audit": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces",
    "action": "record_local_frontier_repair",
    "finding": "F2 omitted connected-component testing for subharmonic chart expressions. Added that exact supplier qualification; steps 5.2/6.3 already use coordinate-disc gluing and plane locality separately on components. The Dirichlet proof and inherited Countable Choice remain unchanged.",
    "post_sha256": "3dd11ec7023a8f08e67fa523474acb24a04b246419a9b827f5cd61e4696343c6",
    "independent_audit": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-green-kernel-exists-after-removing-a-chart-disc",
    "action": "record_local_frontier_repair",
    "finding": "F5 now states the repaired componentwise plane property explicitly. Actual maximum and logarithmic-pole comparisons occur on connected chart discs and connected exteriors under Countable Choice, so their arguments and the kernel-existence Statement are unchanged.",
    "post_sha256": "d543b860b21b30c2779d5ce94bc2dcf4c876e3d0755a093f15655b3065e2e444",
    "independent_audit": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-green-kernel-symmetry-on-riemann-surfaces",
    "action": "record_local_frontier_repair",
    "finding": "F5 now records connected-component testing for subharmonic chart expressions. F6 already uses harmonicity outside the closed removed discs, equal to int(Omega_K); step 3.3's kernels are smooth and harmonic there. The repaired Green identity and pole flux signs remain applicable.",
    "post_sha256": "412c83c566a93cdbec002aac7998eab5ed1aabbb4c3e2653099fe523a214d988",
    "independent_audit": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-green-function-uniformizes-simply-connected-surface",
    "action": "record_local_frontier_repair",
    "finding": "F7's subharmonic characterization omitted nontriviality on each component; added that essential caveat. The candidates in step 4.1 are nonnegative finite-max functions and hence meet it, while the harmonic comparison and Blaschke-normalized uniformization conclusions stay unchanged.",
    "post_sha256": "7870a7d750c1922ed8ad5bb86fea0e329e0e97a2cc8dfa9710493f52b002abc9",
    "independent_audit": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-residue-pairing-functorial-line-bundle",
    "action": "record_local_frontier_repair",
    "finding": "The full meromorphic fibre includes zero, so s tensor t^-1 when s=0 and a zero change of principal-part representatives cannot be called nonzero rational sections. Corrected those phrases in Statement, F1 and step 1.1 to meromorphic; the local regular-dual tests and adjunction formula are unchanged. Refreshed 3 stale owning-batch citation quote(s) to the current supplier section after examining the used clauses.",
    "post_sha256": "572e227547a874bad2e0f6221dc5563da130fdfb017d4b9cd733924610d9628e",
    "independent_audit": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "prop-rigidity-in-bishop-gromov-on-an-interval",
    "action": "record_local_frontier_repair",
    "finding": "The radial supplier now proves Jacobi normality without Choice; corrected A1's false attribution from Jacobi-field to curvature interfaces. F4/F5/F6/F13/F14 use unit-speed rays on positive times, existing Countable Choice and nonempty model/manifold data, so every corrected model, Bonnet-Myers and Riccati prerequisite remains satisfied.",
    "post_sha256": "6843d2a683ed086054e2bb1f315f11908b6f048993e604e15beb5d611b72a615",
    "independent_audit": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-smooth-up-to-the-boundary-density-on-smooth-domains",
    "action": "record_local_frontier_repair",
    "finding": "F1 and step 1.1 use extension only for the given bounded C^k domain with k>=1, finite p and AC. The supplier's k=0 arbitrary-open caveat is outside this use; its repaired patch-bound proof retains precisely this compact-support bounded extension interface. Refreshed 1 stale owning-batch citation quote(s) to the current supplier section after examining the used clauses. Added the omitted dependency on def-bounded-c-k-domain-and-boundary-charts, whose nonempty bounded one-sided graph condition is the exact hypothesis licensing F1.",
    "post_sha256": "781539e4ecca88e8d2afc28885c6e6f59b099f50dfc3643eb54c552fd2f4809d",
    "independent_audit": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update_needed",
    "reason": "All direct item consumers of the four changed Statements are draft items in the frozen frontier. No published carrier was edited and no new potentially defective published consumer was discovered in these interface-use reviews.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "lem-global-residue-pairing-injective-left",
  "lem-global-residue-pairing-dimension-balance"
]


