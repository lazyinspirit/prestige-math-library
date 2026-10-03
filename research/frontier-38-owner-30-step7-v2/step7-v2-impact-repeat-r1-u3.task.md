# Step 7 repair: impact-repeat, round 1, unit 3

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/impact-repeat-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/step7-v2-impact-repeat-r1-u3.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"frontier-38-owner-30",phase:"impact-repeat",round:1,unit:"3",input_sha256:"c5c57f338be720a4f4b21492198fe2af946a7c80a76901e0dcea656abdd4e354",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-38-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "path": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "frontier-38-owner-30-step7-repeat-r1-u11-tensor-coefficient-extension",
      "run": "frontier-38-owner-30",
      "at": "2026-10-03T17:00:26.220054+00:00",
      "class": "accuracy",
      "subclass": "invalid-inference",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations",
      "caught_at_stage": "7.5-adjudicate",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "repair_confidence": 1,
      "evidence": [
        {
          "path": "research/frontier-38-owner-30-step7-v2/step7-v2-repeat-r1-u11.json",
          "note": "The original step 2.1 asserts single-product factorization for arbitrary tensor vectors, contradicted by c_{u,u}=zw+1 on T^2. The repaired proof gives the correct finite double sum, with conjugation in the second vector coefficients. All original statement clauses remain unchanged; local focused checks passed. This repair is not independently audited."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-38-owner-30-step7-v2/step7-v2-repeat-r1-u11.json",
          "obligation": "lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations:gpt-6.1-sol:4896ce4d51bebf7f3dc21b19661c128acd9c4244ca82142dff115fd77638bdce"
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step7-adjudicator.md"
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion",
    "run": "frontier-38-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "16",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "repaired",
    "reason": "F1 was inaccurately restated as supplying proof constructions outside its contracted Statement. The assigned proof now establishes those constructions and their naturality internally, and the owning contract cites only the actual supplier statements. The saturation interface is preserved and no consumer propagation is triggered.",
    "post_sha256": "14d6ef3cc97b32baa30094dc4e576d8c5b31625f3f18579019963f08eea6a625",
    "uncertain": false,
    "source_urls": [
      "https://msp.org/agt/2002/2-1/agt-v2-n1-p24-p.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-braid-like-moves-can-be-moved-to-height-zero",
    "run": "frontier-38-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "17",
    "stage": "Step7",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "repaired",
    "reason": "The old proof 3.1 wrongly made every kink on the nearest strand a stabilization. For two equally oriented nested circles, an outward kink on the inner circle adds a small circle coherent with its parent but incoherent with the outer circle, so its endpoint has height one. The repair retains the kink side and chooses the end disk on that side, transports beneath the intervening strands, stabilizes on the end-disk side, and returns by III and inverse reductions. This preserves the original claim and both crossing signs.",
    "post_sha256": "8bf481bf9623cd6f536ae1975ffc93575188ccdb92d55b2b432d77ec592668c7",
    "uncertain": false,
    "source_urls": [
      "https://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf",
      "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-reidemeister-moves-between-closed-braid-diagrams-factor-through-markov-moves",
    "run": "frontier-38-owner-30",
    "phase": "repeat",
    "round": 1,
    "unit": "17",
    "stage": "Step7",
    "disposition": "false_positive",
    "reason": "The rejection overlooks the explicitly cited supplier proof. Its 1.1 inserts arcs at the same peak Y and preserves maximum height; 2.1 replaces one-intersection pairs by disjoint pairs at that same height; 3.1 removes compatible pairs through height H-2 valleys; 1.2 removes height-one peaks by ordinary exchanges. Consumer 3.1 states and uses these constructions, rather than extracting a missing bound from the four-band alternative in the supplier Statement. Its remaining irreducible peaks use F7 descents from both height H-1 neighbours, a height-zero Markov comparison, and reversed descent, all below H. Hence the finite induction is justified on the assigned carrier.",
    "post_sha256": "bd569b84032a1c0ed3c2030e4266572b9343ec1457016329049a924561f27143",
    "uncertain": false,
    "source_urls": [
      "https://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf",
      "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "frontier-38-owner-30-step7-repeat-r1-u20-norm-power",
      "run": "frontier-38-owner-30",
      "subject": "lem-hardy-radial-means-are-monotone",
      "severity": "fatal",
      "defect_type": "logic",
      "location": "Statement, norm-limit consequence",
      "caught_at_stage": "7.5",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "item_sha256": "4d4d8a71d9f719292a17fe9306c48ef16df62eb00f600af036c9f01ba8071994",
      "finding": "Confirmed false norm/mean identity: for f identically 2 and p=2 the Hardy norm is 2 and the unrooted radial mean is 4. The corrected Statement gives norm^p as the mean limit and retains the rooted norm limit, monotonicity and all exponent containments.",
      "adjudication_ref": [
        {
          "ledger": "research/frontier-38-owner-30-step7-v2/step7-v2-repeat-r1-u20.json",
          "model": "gpt-6.1-sol",
          "context_sha256": "3a615249ae0ccc9efb07254283e17cc7022df1c2ce41d4906d666476014e1d4a"
        }
      ],
      "local_validation": "Precheck, rendercheck and strict proof-contract passed; final proof-layout found 7 steps and 0 defects. Local checks do not constitute independent audit.",
      "source_urls": [],
      "familiar": true,
      "uncertain": false
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "All eight direct dependency/reference consumers are draft frozen-frontier items; each affected use remains sound. No published or outside consumer requires maintenance for this corrected norm-power interface.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-self-similar-heat-kernel-solution",
    "stage": "step7-repeat",
    "round": 1,
    "unit": "3",
    "severity": "nonfatal",
    "status": "closed",
    "disposition": "repaired",
    "finding": "The title's 'the self-similar solution with conserved mass' suggests uniqueness, although cΓ has the same heat equation and scaling law and conserved mass c. The Example is correctly restricted to u=Γ with mass one.",
    "repair": "Changed only the item title and its owning manifest mirror to 'The heat kernel is a self-similar solution with conserved unit mass'.",
    "post_sha256": "1c22ba2554b44a02ef7bc4b5e07bd663bcfa8b40a1b068cc836d942c9b35a229",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "thm-riesz-factorization-hardy-space",
  "thm-smirnov-maximum-principle"
]


