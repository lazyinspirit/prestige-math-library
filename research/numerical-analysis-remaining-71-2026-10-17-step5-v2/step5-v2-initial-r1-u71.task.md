# Step 5 adjudicate: initial, round 1, unit 71

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-71-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u71.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"71",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-na-finite-state-discounted-bellman-system, 0:lem-na-convex-support-localization-and-lipschitz-dual-gradient, 0:lem-na-lipschitz-critical-image-null, 0:thm-na-rademacher-euclidean, 2:alg-na-finite-control-howard-policy-iteration, 3:alg-na-explicit-diagonal-diffusion-hjb-grid-step.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-na-finite-state-discounted-bellman-system",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The remark uses undefined full matrices Q^a and P^a. Actions are indexed locally by A_i, so a single action a need not have a row at every state. Only rowwise transition probabilities are defined, making the asserted matrix equivalence ill-typed.",
      "context_sha256": "c8e4752b166c32c74524b421d52707aae6760bde6bbafc9dfde8ed8dbe5457e0",
      "item_sha256": "a7f3f1a42125c547bc73c50075eb28442de3aa33b4cba9e81cb6781fb47c4e62",
      "at": "2026-10-18T03:34:18.610Z"
    },
    {
      "id": "lem-na-convex-support-localization-and-lipschitz-dual-gradient",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Statement omits n≥1, but steps 2.1 and 4.1 invoke F3 and F4, whose supplied interfaces require n≥1. Since the library allows n=0, those citations do not cover that case; state n≥1 or handle R^0 separately.",
      "context_sha256": "6c9460823b2ab98e39fd6f392d9dcb0cc5e3c53d4e925a76b659f248937cc3db",
      "item_sha256": "0b19fb23e3d3764dc21fd5fb4c225bde428e8df25712502f89e914e6cdd81f5e",
      "at": "2026-10-18T03:34:40.756Z"
    },
    {
      "id": "lem-na-lipschitz-critical-image-null",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 omits the base point: differentiability places g(B(p_i,5r_i)) near g(p_i)+Dg(p_i)B(0,5r_i), not near the unshifted linear image. For a nonzero constant map the stated claim is false, so the tube and its cube cover are not established.",
      "context_sha256": "a3bdfa9a3c6b9391cfef1b28958a746e6913daae3dd61db6a0922c61b17a5d43",
      "item_sha256": "124394ae584b83f7d5f393ce8551982c9761adb86f319d4efbbd88a584187af0",
      "at": "2026-10-18T03:34:42.890Z"
    },
    {
      "id": "thm-na-rademacher-euclidean",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F11 claims measurable sets satisfy λ(E)=λ*(E), but the cited interface gives completeness and λ*(S)=0⇒λ(S)=0 only. It does not license λ(E)=0⇒λ*(E)=0, so the proof never converts F4’s measure-null exceptional sets to cube-cover-null sets.",
      "context_sha256": "5d94e2729f1b8958f5fdc979d3d23a66fbbe4fc632fff5b54513ab11fda30bb0",
      "item_sha256": "6614c362cac76fd34f7096815562487e4c1558088a75bc7d9ba0ebef02fd5d6c",
      "at": "2026-10-18T03:34:44.358Z"
    },
    {
      "id": "alg-na-finite-control-howard-policy-iteration",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Definition claims that P evaluations suffice “by the theorem below,” but no theorem is included. The algorithm convention requires correctness and termination properties to be established in separate proved results, so this guarantee is unsupported.",
      "context_sha256": "748afcee5d9cfda2127ee1b394e301197a1137552af0bff672ba6474c7901f26",
      "item_sha256": "ef6453c5f249c69e2fe85f03e2d08edbf102ebe60c17b9c8535b613a0956ef48",
      "at": "2026-10-18T03:34:24.298Z"
    },
    {
      "id": "alg-na-explicit-diagonal-diffusion-hjb-grid-step",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title asserts monotonicity, but the item supplies only procedure instructions and no proved result establishing it. Algorithm conventions require properties such as monotonicity to be stated and proved separately.",
      "context_sha256": "946d0b18a1d80ac4cf0f9c41fc89f395ab09bd476551c01cfb63822ba8dd0959",
      "item_sha256": "a6e9d6ccf83deb7baf9e4bd25c517ab3a8ab38fefd18a0b5978a915b01c57151",
      "at": "2026-10-18T03:34:27.372Z"
    }
  ]
