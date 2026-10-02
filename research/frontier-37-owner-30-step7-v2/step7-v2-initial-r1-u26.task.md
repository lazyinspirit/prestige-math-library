# Step 7 adjudicate: initial, round 1, unit 26

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u26.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"26",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-nevanlinna-exceptional-radius-notation, 0:lem-nevanlinna-poisson-jensen-derivative-bound, 1:def-nevanlinna-deficiency-and-ramification-index, 1:cex-nevanlinna-error-bound-without-exceptional-radii, 1:ex-truncated-versus-full-nevanlinna-counting, 2:lem-nevanlinna-logarithmic-derivative, 6:ex-nevanlinna-and-normal-family-picard-proofs.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-nevanlinna-exceptional-radius-notation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claim that an all-radius O(1) refinement holds only for rational f is false: for f(z)=e^z, f'/f=1, so m_0(r,f'/f)=0 is an S(r,f) occurrence and is O(1) at every radius, although f is transcendental.",
      "context_sha256": "d39b0c16ede8e09872898206b3ecbea3deb3d8f518aa28e0892ec602316d4346",
      "item_sha256": "22fa728cb769647e932641d69e4737cb52beb6c6bad36e711eb8fdf16081c5b1",
      "at": "2026-10-01T20:56:25.603Z"
    },
    {
      "id": "lem-nevanlinna-poisson-jensen-derivative-bound",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "For f(z)=z, normalization gives h≡1. Steps 1.2 and 4.2 invoke F3 for h, but the supplied First Main Theorem requires a nonconstant function. F3 omits this hypothesis, and the proof does not separately handle constant h.",
      "context_sha256": "e9af570b4966a7d5373409d14bc14435140e60f9815dd23465f0201127cf72e4",
      "item_sha256": "a5c51e7f6ffad82836ffef698b15c216cd1f1b7410afb8fe1a7ff68779f67b8e",
      "at": "2026-10-01T20:57:02.817Z"
    },
    {
      "id": "def-nevanlinna-deficiency-and-ramification-index",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Definition incorrectly calls N₁ the truncated count. The dependency reserves truncated counting for N̄; N₁ weights points by local degree minus one. At a simple a-point, truncated counting contributes 1 while N₁ contributes 0.",
      "context_sha256": "cccef2a273da3851aec46a05aa7d28c3fea819e6cc3618bef2e324e03220ba10",
      "item_sha256": "0694571d077ccc70bf2e1c9ec5c8863805d12ef32c11b63ca5f2c973ca4a69e4",
      "at": "2026-10-01T20:56:24.189Z"
    },
    {
      "id": "cex-nevanlinna-error-bound-without-exceptional-radii",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 overstates its cited interfaces: they establish analyticity and differentiation only for power series, not arbitrary locally uniformly convergent holomorphic series. Step 2.2 invokes that stronger assertion without supplying its justification.",
      "context_sha256": "7a1fac025bf8eb18a40614125d64084f1340eebd69fddc2be491c2215c62462c",
      "item_sha256": "0d22d77fe62511c88864485f6db1ab5850fbda33f043200ec64b3b1213ea4f62",
      "at": "2026-10-01T20:57:01.740Z"
    },
    {
      "id": "ex-truncated-versus-full-nevanlinna-counting",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 incorrectly claims multiplicity cannot be restored in the truncated Second Main Theorem. Replacing each truncated count by the larger full count preserves the inequality; these computations establish a difference, not that claimed impossibility.",
      "context_sha256": "784bee2f7b943cc34c1cdb91544a279f9207a3386de23b853e1d2089fbea9b8e",
      "item_sha256": "5c7983b1df3a14af793486acab0a1a3cf2c7a344748c419c4df3079c8dc5b115",
      "at": "2026-10-01T20:56:53.245Z"
    },
    {
      "id": "lem-nevanlinna-logarithmic-derivative",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 inaccurately characterizes order: T(r,f)≤r^{ρ+1} eventually implies only ρ(f)≤ρ+1, not ρ(f)=ρ. For example, e^z satisfies T(r,e^z)≤r^3 eventually but has order 1, not 2.",
      "context_sha256": "28334bc9dc780f7ab5b6a58af5cc7835e785a80ccb7a1119976fbfcc17a17fb3",
      "item_sha256": "86cfd2f1435ad148edacbc1c383e5afcc414a158574a9c711b2212b9b06374c5",
      "at": "2026-10-01T20:56:32.036Z"
    },
    {
      "id": "ex-nevanlinna-and-normal-family-picard-proofs",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title promises a normal-family proof, but the verification only uses inversion and the exterior extension lemma. Neither the proof nor the supplied dependency interface provides a normal-family argument.",
      "context_sha256": "dd0ac56809fa52bf9c61850927fe0968e1605858ffd39560cbe2c89979fa3591",
      "item_sha256": "61f44eadf86aa944661018dd3515190fb360bab140cdef5b22e31052c719b2e8",
      "at": "2026-10-01T20:56:43.384Z"
    }
  ]
