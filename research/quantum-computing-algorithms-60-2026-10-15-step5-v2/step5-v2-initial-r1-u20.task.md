# Step 5 adjudicate: initial, round 1, unit 20

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-20-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u20.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"20",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 3:def-qc-css-code-from-nested-binary-codes, 3:lem-qc-binary-dual-dimension, 11:alg-qc-stabilizer-encoder-by-symplectic-elimination, 17:thm-qc-stabilizer-distance-detection-and-correction.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-qc-css-code-from-nested-binary-codes",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 applies [F3] to n-qubit basis vectors, but its interface proves orthonormality only for Q_d. The register interface defines the n-qubit register as an algebraic tensor product without an inner product, so the claimed norms and orthogonality are unsupported.",
      "context_sha256": "233b8812dab44734c2515df50ee928d1afae813bc69614a9631e768b764f137b",
      "item_sha256": "8f8fe6cea70405ccad87c84df874b4497feda237cfa4ce30f0e0b956f1576d12",
      "at": "2026-10-16T04:55:11.222Z"
    },
    {
      "id": "lem-qc-binary-dual-dimension",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 misindexes the standard basis: coordinates are indexed j<n and sequence indices start at 0, so e_1,...,e_n includes nonexistent e_n and omits e_0; e_i·y=y_i is undefined at i=n.",
      "context_sha256": "c61b253d582ee9cc0fe655dd2583db531292a2340acff88028918df720dd5d73",
      "item_sha256": "b363beda279c3adf1a4b6c70760432e24daf61c5fcdc03564b99e8aea0761368",
      "at": "2026-10-16T04:58:59.240Z"
    },
    {
      "id": "alg-qc-stabilizer-encoder-by-symplectic-elimination",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Definition asserts the checks and logical-basis correctness, but its only justified_by result is termination and gate count. Library conventions require correctness properties in a separate proved result; these claims are unsupported here.",
      "context_sha256": "3fbf461b4b8d0a4ffb138a81bda423dcb842325bd7c469ace2e495011a2c1a9e",
      "item_sha256": "9bf55bb242dd5a597b931d39472e0692588adcf04a371f871d18dd2469f5f387",
      "at": "2026-10-16T04:55:45.921Z"
    },
    {
      "id": "thm-qc-stabilizer-distance-detection-and-correction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates the distance dependency: its minimum-weight formula applies only when k>0; for k=0 the dependency defines d(S)=+∞ because the set is empty. The proof cites F1 without that caveat.",
      "context_sha256": "a18bceb93c6c3fbbc33d30f454d5c20433e845324e64167d5987d5cbc8fcdee5",
      "item_sha256": "5d68a3d9d5e31f83b2d39e1dca5cf4a535fc5023c19f759b575d9988c7921d3a",
      "at": "2026-10-16T04:55:37.249Z"
    }
  ]
