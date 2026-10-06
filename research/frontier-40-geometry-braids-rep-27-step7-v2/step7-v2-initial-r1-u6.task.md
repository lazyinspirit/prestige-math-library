# Step 7 adjudicate: initial, round 1, unit 6

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u6.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"initial",round:1,unit:"6",input_sha256:"2f03bb52479aaa390bb3dcd48c71478e0016d3408c93c2f9769a7db5ae31ba68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 3:lem-the-alexander-module-of-a-link-complement-is-finitely-presented, 4:def-alexander-polynomial-from-the-first-elementary-ideal, 11:thm-the-burau-determinant-formula-for-a-closed-braid-and-its-axis, 13:ex-the-burau-determinant-for-a-two-strand-torus-link.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-the-alexander-module-of-a-link-complement-is-finitely-presented",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 overstates the complement lemma's interface: it supplies only a finite CW homotopy type, not a strong retraction onto a finitely triangulated exterior. Step 1.1 relies on the unprovided retraction and exterior-fixing homotopy.",
      "context_sha256": "7aed1979a155a2d0f25925a2ab5a8e91d254a7294f50dd9bf315a14da2ef07a6",
      "item_sha256": "5a00629a3c796d3df9946553c61c0c4388d7687f8d606a120e946ef8a0938b34",
      "at": "2026-10-05T19:30:18.307Z"
    },
    {
      "id": "def-alexander-polynomial-from-the-first-elementary-ideal",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The caveat that E0(A_L) need not be principal for r>1 is false. A connected Seifert surface for any oriented link gives a square presentation V^T-tV of its absolute Alexander module, so E0(A_L) is always the principal determinant ideal.",
      "context_sha256": "393ef7fc11b00a5d77ef2d7b175107d11a2889798918c7d157056d97d671b9c9",
      "item_sha256": "fd616477cd39beb2c8b38d4470029aaf4bcd1e5bdb8fa868a300f6ad49d2ea38",
      "at": "2026-10-05T19:30:47.377Z"
    },
    {
      "id": "thm-the-burau-determinant-formula-for-a-closed-braid-and-its-axis",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 contradicts the supplied Artin map: F(g_i)=g_{i-1}x_ix_{i+1}x_i^{-1}, not g_{i-1}x_ix_{i+1}. The omitted inverse makes its displayed equality false already for n=2, i=1.",
      "context_sha256": "dc7f7e81b4be82b77001ac2e4cf983d93e8d54a05368382e51885ddd0dc01e53",
      "item_sha256": "14b5d9e6b8112705f80900c3c92b816fec8fa01e9459f780a655d23f58aedcf5",
      "at": "2026-10-05T19:30:58.735Z"
    },
    {
      "id": "ex-the-burau-determinant-for-a-two-strand-torus-link",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[A2] inaccurately restates the reduced Burau basis: the supplied definition has h₁=[ε₁−ε₂] and fixed basis b₁=t h₁, not h₁=e₁−t⁻¹e₂. Neither cited interface defines eᵢ or licenses the claimed eigenvector identification.",
      "context_sha256": "0a05fa9e5479f44c2dc2db44ef1c300ac2e53ba806a432e41721b9566d8fdfcc",
      "item_sha256": "14953cdb686598de4f6258e6e7da119da8e33b4387a2aa8ceef8a3553bba1d36",
      "at": "2026-10-05T19:30:30.662Z"
    }
  ]
