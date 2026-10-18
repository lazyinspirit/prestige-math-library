# Step 5 adjudicate: initial, round 1, unit 29

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-29-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u29.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"initial",round:1,unit:"29",input_sha256:"5a7686cf6af281fffc281470b9fd4d1b4497cd3e88649ffa4676dd5e748ac1b1",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 6:def-qc-tqc-braid-action-from-fusion-data, 6:thm-qc-tqc-block-approximation-error, 7:def-qc-tqc-projective-gate-and-metric, 7:lem-qc-tqc-determinant-character-phase, 8:cex-qc-tqc-controlled-global-phase, 9:lem-qc-tqc-b6-joint-su5-su8-density, 10:lem-qc-tqc-su2-determinant-lifts-dense, 10:ex-qc-tqc-ising-vs-fibonacci.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-qc-tqc-braid-action-from-fusion-data",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The fusion-tree interface makes V(x^n→c)=Hom(x^⊗n,c). Pulling back the positive crossing c_{x,x} requires precomposition by c_{x,x}^{-1}, hence R_i^{-1}; T_i^{-1} only changes basis. The stated positive-crossing convention is inconsistent.",
      "context_sha256": "e7da16572b2fa77aefa42299872f51658e4f08e44c2a33e819e13df156688f85",
      "item_sha256": "d985cefa90148c8e7a1aaf8075344ca52178f80c4d266801f0adc280ec066d5d",
      "at": "2026-10-18T04:27:52.293Z"
    },
    {
      "id": "thm-qc-tqc-block-approximation-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 inaccurately restates the operator-norm definition: it omits the zero-domain case, where the norm is defined as 0 and there are no unit vectors. The proof's maximum-over-unit-vectors steps therefore do not cover the allowed case V=0.",
      "context_sha256": "97f3888f558624b4259de4c1b0bd2ad53c3b6e5517ed051903fdee9af3273e14",
      "item_sha256": "fb6d2be9d25ef73d63f2f545e6f82b8f78cd0a36af8187c0fec30f44b81c1698",
      "at": "2026-10-18T04:27:17.692Z"
    },
    {
      "id": "def-qc-tqc-projective-gate-and-metric",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises a projective braid gate, but the definition only gives a metric on PU(V) for arbitrary V; it neither defines nor connects any braid action. The braid-action dependency is unused.",
      "context_sha256": "b8826b3f457365bdcec225043ceab18b30f43ccff689f9cc88feefd88c997e89",
      "item_sha256": "3adcbf9c3f891e59ffecf97a8ba9423fc93769e6235024fe0900708724cf82ec",
      "at": "2026-10-18T04:29:08.322Z"
    },
    {
      "id": "lem-qc-tqc-determinant-character-phase",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title overclaims: the proof establishes only the common scalar character R₁^{e(b)}, not a determinant character. On a d-dimensional block, det ρ(b)=R₁^{d e(b)}det ṽρ(b), which is generally not R₁^{e(b)}.",
      "context_sha256": "3788d1a42f3812f3fa22cbfab95a1fa972c494cc2bff0c71ee263768e85d7969",
      "item_sha256": "c82c900b7ec3fa9b7e4420782cb29fc92301a89fd85c86305e96edae1c554970",
      "at": "2026-10-18T04:28:22.456Z"
    },
    {
      "id": "cex-qc-tqc-controlled-global-phase",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The target \u001b[mathbb C\u001b[0m has infinitely many unit vectors, so the stated initial condition (“its unique unit vector”) does not exist. The witness needs to specify any normalized target state.",
      "context_sha256": "aa0229d4615418ddd2799b79f0f131419cb68c0a65eb6948164152fa456edb83",
      "item_sha256": "6e5964fc3b0891999231fcf30c8cb42422d33d474cb50fed4755dba2f4d5fee3",
      "at": "2026-10-18T04:32:28.958Z"
    },
    {
      "id": "lem-qc-tqc-b6-joint-su5-su8-density",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates the SU(5)/SU(8) dependency interfaces: they assert only that each separate closure contains SU(n), not that 24/63 Lie words arise from a shared initial tangent. Step 2.2 relies on that unlicensed claim for surjectivity of both projections.",
      "context_sha256": "e1895803b3646f9ec5f04631bc71b5cff04798c45aac4a6027836906415f6a91",
      "item_sha256": "1def6f61bfc7a44e8d9260a99d8230dde81aabb6bd32a0da1244e5ce9ba61753",
      "at": "2026-10-18T04:28:00.817Z"
    },
    {
      "id": "lem-qc-tqc-su2-determinant-lifts-dense",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 attributes the claim that arbitrary Γ meets every nonempty open set to a theorem proving density only for the subgroup generated by the Fibonacci generators. The step follows from Γ’s stated density, but that dependency attribution is unsupported.",
      "context_sha256": "7ca7e15310b9a1827ba2070f88cdeecd8c9ccbb2fa395f7c5e60b7dff4f0def0",
      "item_sha256": "a2e5153a284a599181f9f8595b926743fdd724e2375b4a7bc286d06618e06101",
      "at": "2026-10-18T04:27:51.575Z"
    },
    {
      "id": "ex-qc-tqc-ising-vs-fibonacci",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Verification 2.1 says the Fibonacci generators produce circle subgroups and uses their Lie bracket to prove density. Their projective generators have finite order, so their cyclic subgroups are finite; that argument is false, despite [F2] separately supplying the density conclusi",
      "context_sha256": "5528fa77c4d80aa9767ddd418ef9c1eb5ef9936c84031df01628cf27b25fc8f4",
      "item_sha256": "d093f51c6434db1d74ec40a153bee4bf8452df605e1201cfadb63b2c165d8146",
      "at": "2026-10-18T04:28:17.205Z"
    }
  ]
