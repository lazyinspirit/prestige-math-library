# Step 5 adjudicate: initial, round 1, unit 4

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-4-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u4.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"4",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-na-polynomial-alternating-signs-force-root-count, 2:alg-na-minimax-approximation-and-remez-algorithms, 3:ex-na-remez-zero-degree-equioscillation-certificate, 4:alg-na-weighted-rational-remez-exchange.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-na-polynomial-alternating-signs-force-root-count",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 uses opposite signs at every adjacent pair, but Facts & Assumptions gives only nonzero values, not alternating signs. Without alternation, IVT does not yield the claimed roots.",
      "context_sha256": "0ab218c712b36a503108601d0eb0cf6f1065ff50ee95b6d308703c35a26a67c3",
      "item_sha256": "36e34e58875f8e11e82df82d1e9df5d85051b1088053aecb6f888756394f0ec1",
      "at": "2026-10-18T03:07:04.967Z"
    },
    {
      "id": "alg-na-minimax-approximation-and-remez-algorithms",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "With B=0, take n=0, I=[-1,1], f(x)=x, and X=(-1/2,1/2). The sole solve gives p=0, λ=-1/2; a valid maximum(1,-1) response triggers an exchange before budget-exhausted, exceeding the zero-exchange budget. Skip exchange on the final pass.",
      "context_sha256": "3ffcf0775e5cd786b585954cdfc485d8d28ef5f520bee2803999ce19b49a4626",
      "item_sha256": "106c51e78d6b9cbd1e9c1410be083ea169a6233bdfa613dfe2131745207febad",
      "at": "2026-10-18T03:07:41.352Z"
    },
    {
      "id": "ex-na-remez-zero-degree-equioscillation-certificate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 claims the procedure returns certified(p,1/2,X), but the oracle may return alternation(E,Y); the algorithm then returns certified(p,E,Y). No condition requires the maximum branch, so that exact output is unsupported.",
      "context_sha256": "dc62301fcbe8b85d178abe014f0308e5a045f7a520d41a12e02996c4979a66dd",
      "item_sha256": "577c268ff57287d2f203aef5b105f2375552220c1530510f8f25735971d5c05e",
      "at": "2026-10-18T03:07:29.926Z"
    },
    {
      "id": "alg-na-weighted-rational-remez-exchange",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "With B=0, the loop still runs once and can perform an exchange at k=0 before returning budget-exhausted. The procedure can make B+1 exchanges, exceeding its stated exchange budget.",
      "context_sha256": "f77b1077d73c32faa14a95740c65abede300dc976ccd10fd2ffb3d7736550a14",
      "item_sha256": "9ac772a990da2de51ebd51c15f6e5910e1a1cd6d7239511bd797f176b113816a",
      "at": "2026-10-18T03:07:34.777Z"
    }
  ]
