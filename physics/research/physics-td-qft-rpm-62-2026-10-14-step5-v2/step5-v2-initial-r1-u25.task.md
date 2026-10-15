# Step 5 adjudicate: initial, round 1, unit 25

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-25-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u25.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"25",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-rpm-h-background-and-model-quantities, 1:def-rpm-h-regular-constraint-system, 1:thm-rpm-h-canonical-poisson-and-flow, 2:post-rpm-h-free-test-particle-action, 2:thm-rpm-h-first-class-local-reduction, 2:thm-rpm-h-second-class-dirac-bracket, 5:pthm-rpm-h-action-mechanical-momentum, 6:pthm-rpm-h-coordinate-versus-observer-energy, 6:ex-rpm-h-shifted-chart-negative-energy.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-rpm-h-background-and-model-quantities",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The scope says no particle action is included, but the definition explicitly introduces the worldline functional −mc∫s dλ as a “length action.” The stated physical scope contradicts the definition.",
      "context_sha256": "3903e76972e07a40fb66fd27d14db560b7d77c1bf3dc20ce15820b88dbaade80",
      "item_sha256": "5440d241c518284caede08b76562889a136446a4362025f63aa5a8fb618ccde3",
      "at": "2026-10-14T20:06:25.910Z"
    },
    {
      "id": "def-rpm-h-regular-constraint-system",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The regular-level dependency requires F⁻¹(q) to be nonempty, but the definition allows C=∅ because independence is then vacuous, yet says the theorem gives C its structure. Require C≠∅ or handle the empty case separately.",
      "context_sha256": "716e5224af68b898bf4e6d14684dd6ff81b44af83095fc8287120a0f16e4c30c",
      "item_sha256": "7aaaeee12117950b9fab30d7ac6b03ddb186ebf6d6e673e99d85ceba2c233151",
      "at": "2026-10-14T20:06:05.350Z"
    },
    {
      "id": "thm-rpm-h-canonical-poisson-and-flow",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "No parameter space or parameterized Hamiltonian/vector field is declared, yet the theorem asserts smooth dependence on “parameters.” The cited ODE interface gives that conclusion only for a jointly smooth parameterized field; the proof supplies none.",
      "context_sha256": "81fdc666c0253b4d6fc323512c6968ae85f2c6f2e3c68eb5ad0b1d5470b37f49",
      "item_sha256": "ff0dae3516789c05b980a0395a0d56b3d96302f1f7b3f110ac3b534336a38b3d",
      "at": "2026-10-14T20:05:52.685Z"
    },
    {
      "id": "post-rpm-h-free-test-particle-action",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "It defines admissible variations but never states that the physical worldline makes the action stationary (vanishing first variation for every such family). Thus “stationary-action model” is named, not mathematically formulated.",
      "context_sha256": "53102133e5abe1352b5d9404b7a6dc2391f5a7ae1f4f68366fb9dc0fbfd16338",
      "item_sha256": "a61f9bb23f1e51767a1a770d25f5cf1b4352c6442741b9e727cebd5080ccf474",
      "at": "2026-10-14T20:06:32.161Z"
    },
    {
      "id": "thm-rpm-h-first-class-local-reduction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The theorem is for arbitrary symplectic P, but its bracket assumption and step 2 use {·,·}; cited F7 defines that bracket only on cotangent phase spaces. No general bracket is defined here, so first-classness is unsupported on P.",
      "context_sha256": "4b5dac15f6d5553749111f01b0ca5ba56ce2493ab071c73c99cb1481b071820a",
      "item_sha256": "6fa79912d1aec0ccf785972337dcd3ea756766cec3501dc2aa5cfb506b3d493c",
      "at": "2026-10-14T20:06:19.790Z"
    },
    {
      "id": "thm-rpm-h-second-class-dirac-bracket",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 attributes a canonical action-unit bracket convention to def-rpm-h-regular-constraint-system, but the supplied interface states no such convention; this is an unsupported dependency restatement.",
      "context_sha256": "206025fe6ff76476c4e66e4e0a4ee71eb37456eaf831c21a3be1de6c83501c04",
      "item_sha256": "779e9a7536ff79c8687ebdf04843fd8c6977381f1d806de91dcb6e4250ef4da4",
      "at": "2026-10-14T20:06:14.789Z"
    },
    {
      "id": "pthm-rpm-h-action-mechanical-momentum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 identifies the covector with the square-root fibre derivative only on stationary first-order triples. This arbitrary C1 curve is not assumed stationary, so the claimed canonical-covector agreement is unlicensed.",
      "context_sha256": "c2dd3f4e15560ed9c9134fa7a20c6ca9c6466158c1fa2c12288bb0282011779d",
      "item_sha256": "9bcee11fcef6bc382b1ea0d506f5fa24e4ec447a60b4013b862c3124cac852bb",
      "at": "2026-10-14T20:06:32.779Z"
    },
    {
      "id": "pthm-rpm-h-coordinate-versus-observer-energy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Title defect: H=N E_n-cβ^ip_i. With β=0 and N≠1, the energies still differ, so “differ by shift” omits the lapse factor.",
      "context_sha256": "89ceb1f8152003b1a9d435bcaeddf45c74c29e677e846bebfc196eccc3b7be8c",
      "item_sha256": "5477ebe9f2496a3c4f1d3b18ba7a773ad5b49792e0d047a9079fe4e5b56b633e",
      "at": "2026-10-14T20:06:52.230Z"
    },
    {
      "id": "ex-rpm-h-shifted-chart-negative-energy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The metric does not specify a time orientation, yet [F1]/[F2] require a future-directed normal and future shell. Positive lapse and h prove timelikeness, not that n is future, so the chosen root and E_n are not licensed. State that increasing X^0 is future.",
      "context_sha256": "ac988f92b31115096cd06e0082764f3136a40185c453014403503744b86edd4a",
      "item_sha256": "1daeba49cd026a95a0f0e81d42a7b3191fb308a08230de7934606b6fd2dd8b98",
      "at": "2026-10-14T20:06:34.353Z"
    }
  ]
