# Step 5 adjudicate: initial, round 1, unit 23

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-23-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u23.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"23",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-qc-bqtisp-model, 1:lem-qc-bounded-space-virtual-input-simulation, 1:lem-qc-unbounded-error-tie-normalization, 1:lem-qc-uniform-probabilistic-clocked-simulation, 2:lem-qc-basis-query-time-normalization, 3:lem-qc-counting-time-space-to-linear-hierarchy, 3:lem-qc-logspace-uniform-cook-formula-encoding, 3:thm-qc-probabilistic-polynomial-time-hierarchy, 6:lem-qc-vmw-fh-density-and-base-net, 10:alg-qc-basic-clifford-t-rewrite, 12:thm-qc-qsd-cnot-upper-bound, 13:lem-qc-fixed-arity-polynomial-cauchy-gate-decomposition, 13:ex-qc-two-qubit-qsd-cnot-count, 14:thm-qc-bqtisp-to-ptisp-simulation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-qc-bqtisp-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The paper assigns the local classical function and quantum operation to the current control state. Scanned symbols and measurement outcomes determine the next state and head movements. This definition instead lets them select the current operations, so it does not specify the pub",
      "context_sha256": "06f9078bffb8113458d9a6adf69350c21f559e3a9b4333fdfd5bc071e348de20",
      "item_sha256": "c6a4835848a750a76f09cc8780fed5e2682b2a6cae1a11bd40c9456b2140d45a",
      "at": "2026-10-16T04:58:37.036Z"
    },
    {
      "id": "lem-qc-bounded-space-virtual-input-simulation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 has no empty-range guard, yet step 4.1 queries [u,p) when v-u≤k, making p=u. For M=4, N=1, u=1, v=2, it starts with L=R=5, includes invalid nodes, then fails to terminate. This valid native query breaks the simulation.",
      "context_sha256": "2da43cff8b40f7d007673c16fedde6f8f91450ab0f2accb2facb658b046168e6",
      "item_sha256": "c1a62a910578971faa66b84fbcbdb2cb070d6ad5d6aaa4212caea59a5bd50114",
      "at": "2026-10-16T04:58:36.834Z"
    },
    {
      "id": "lem-qc-unbounded-error-tie-normalization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The constructibility interface requires n≤R(n) eventually when R clocks a machine. The statement assumes only R(n)≥1, and [F3] omits the size condition; using the clock constructor therefore does not justify the claimed O(R(n)) overhead for sublinear clocks.",
      "context_sha256": "f3b3db408837ce2b2f9dab11cec812a21a3d025bb877bc4ffa4160ddfae454e4",
      "item_sha256": "a7ef8c824196fdadfdb066059812dc0f7ec5838a6a411faf49470e42d7f7e3e9",
      "at": "2026-10-16T04:58:25.848Z"
    },
    {
      "id": "lem-qc-uniform-probabilistic-clocked-simulation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A valid description can start in a halting state, leaving no transition rows to bound the binary-encoded tape count k. Then k can be exponential in L, contradicting step 1.2's h=poly(L); steps 2.2 and 3.2 reserve and initialize per-head structures, so their claimed overhead fails",
      "context_sha256": "b56a0094205ec0ba926a3d15af649bc57450de8c5cbd4bbd69456d4ef4bab47b",
      "item_sha256": "e9d8adf5448974763c17cdecd3e4e275bfefe5d40fc09617da2d64479659fc86",
      "at": "2026-10-16T04:59:41.615Z"
    },
    {
      "id": "lem-qc-basis-query-time-normalization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 imports details absent from the supplied clocked-simulation interface, notably the a=PB+r layout, cached neighboring block IDs, and fresh-word charging. Steps 4–9 rely on these for the bounds and query simulation, so the cited interface does not establish the proof.",
      "context_sha256": "da6f847b82c040aab135f6e9ece5586f4623f5b35e4e8b2ec55d0e0a730cae64",
      "item_sha256": "132e20cfa213ac5529b5a5e827b642b3442a30e1754c86e9aae2876ec3662598",
      "at": "2026-10-16T04:58:42.754Z"
    },
    {
      "id": "lem-qc-counting-time-space-to-linear-hierarchy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4 applies [F4] as an oracle relativization when complementing MAJ/AND predecessor tests, but the supplied interface only states tie normalization for fair-bit machines and grants no exact-oracle version. The induction is therefore unproved.",
      "context_sha256": "28b413778b14708123c17843396eeed7de66b8e756bc68807c02a133511f7ffa",
      "item_sha256": "d59318aad45ef793633f8a8dbb9699a773097344fcbdd5e6c70e944752322ba5",
      "at": "2026-10-16T04:58:39.376Z"
    },
    {
      "id": "lem-qc-logspace-uniform-cook-formula-encoding",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 claims emitted index words have O(log T) bits, but normalization bounds only numeric physical work-address values; erased index tapes may emit longer padded words. This is an unsupported restatement of F2.",
      "context_sha256": "6d4cd71683f2047623fd41f68ec4890f5084859b1a9832410fa2e76ebbd51359",
      "item_sha256": "2c6822560d61f559e90043695c07d51831c3ebe06f17e29252f834fd6accb0fd",
      "at": "2026-10-16T05:00:04.460Z"
    },
    {
      "id": "thm-qc-probabilistic-polynomial-time-hierarchy",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 requires a self-delimiting, efficiently parseable machine code. F2 only defines a generic effective encoding and explicitly makes prefix-freeness optional; F4 does not assert its transition-table code is prefix-free. The diagonal machine therefore lacks a justified way t",
      "context_sha256": "15fab98435ed46d8384ba5771bbc746bf872dc5b3b3a8dbd0c4a0dea27fb6359",
      "item_sha256": "9613258c001523095b6682717e18e709c2ae4bb1a9a7176355c98268e77eaca9",
      "at": "2026-10-16T04:58:22.008Z"
    },
    {
      "id": "lem-qc-vmw-fh-density-and-base-net",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement calls the finite alphabet G itself dense in SU(2), which is false. Step 2.1 proves only that the subgroup generated by G is dense, as the dependency requires.",
      "context_sha256": "c2a35c08a990af006b3363dbac47a115a8a134fdbb227f2207ebe8429388dcfa",
      "item_sha256": "9c9c45c8cf3afa96702f3efdf0ff2f6d6e29f3dadfb70ad0705ca610d6bb8d54",
      "at": "2026-10-16T04:59:09.319Z"
    },
    {
      "id": "alg-qc-basic-clifford-t-rewrite",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Definition promises a locally irreducible output, an algorithm correctness claim. The conventions require correctness and termination properties in separate proved results, and none is supplied.",
      "context_sha256": "a21dbc57d3b90f59d5e59de673923704a726acc351f32a20b1a1f7f48a7d5a10",
      "item_sha256": "3df51260fb45d0cae53aa7773e12d24d47092507287e68bab26a940fdd3877ff",
      "at": "2026-10-16T04:58:39.464Z"
    },
    {
      "id": "thm-qc-qsd-cnot-upper-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 adds claims about recursive controlled-Z absorption and terminal diagonal migration that the supplied dependency interface does not state; step 1 likewise says those savings are proved by the supplier, which the interface does not establish.",
      "context_sha256": "49a05755e0ebc493c7b6decd8ddc5203732ab5909e69824ba0aded53e90a1dfa",
      "item_sha256": "b9e35234fd4942e2a6bc9140b062e37f517dfdef5b719b76dc8387cdf20e4c23",
      "at": "2026-10-16T04:58:55.088Z"
    },
    {
      "id": "lem-qc-fixed-arity-polynomial-cauchy-gate-decomposition",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The supplied F4 and F5 interfaces give circuit existence and gate counts, but no square-root recursion or Euler/half-angle formulas. Steps 3.1–3.2 rely on those missing details to establish polynomial-Cauchy gate entries, so the claimed effective factorization is not established.",
      "context_sha256": "10b3ec1db9029823758362b98c9897b8c9cc5433aba2d029f3613500016b8f33",
      "item_sha256": "3b44a7cb16e180cabf44598f3f78a54f0083f6ed4218574b2fd3ecc523c74fee",
      "at": "2026-10-16T04:59:18.692Z"
    },
    {
      "id": "ex-qc-two-qubit-qsd-cnot-count",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 adds that the supplier uses a three-CNOT base case and skips recursive optimizations, but the supplied interface gives no proof structure supporting those claims.",
      "context_sha256": "11b1898ed36bfac2b5af5bffb83ea0599cbdb9ef719091fa556677f02a2708bb",
      "item_sha256": "544abd9fa2d04112733bfcad528e585bb83cb0d86850be372c3b9dde4d98d469",
      "at": "2026-10-16T04:59:00.963Z"
    },
    {
      "id": "thm-qc-bqtisp-to-ptisp-simulation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims a BQTISP→PTISP simulation, but the theorem proves only PrTISP_basis and explicitly disclaims conversion to index-only or sequential PTISP; the title overstates the result.",
      "context_sha256": "d8a4418cad3d8031f490359068726fa82c103e6d81611af75976e03706a76681",
      "item_sha256": "f0f8d055e2ead87a474df3a305ec8c0ad7ae4cfb4401e6e3b8be5bdab79f3a04",
      "at": "2026-10-16T05:00:37.938Z"
    }
  ]
