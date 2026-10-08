# Step 7 adjudicate: initial, round 1, unit 1

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u1.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-43-complex-representation-15",phase:"initial",round:1,unit:"1",input_sha256:"213f49668fe9a1811f00252dbb37991fb060239cf233142dbaebe75405f52be9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-43-complex-representation-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-closed-witness-codings-and-measured-projections, 0:lem-l-one-of-a-second-countable-group-is-separable, 0:lem-measurable-fields-of-nonempty-compact-sets-have-measurable-dense-selections, 0:lem-measurable-gram-schmidt-and-constant-field-trivializations, 1:lem-borel-relations-admit-conull-borel-uniformizations, 1:lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations, 1:lem-polar-decomposition-and-nonzero-partial-isometries-in-factors, 1:lem-second-countable-group-c-star-algebra-has-a-sequential-approximate-identity, 1:lem-self-commensurating-cyclic-subgroups-and-trivial-conjugate-intersections-in-the-free-group-of-rank-two, 4:lem-local-analytic-separation-and-saturated-borel-quotients, 5:lem-gcr-kernel-and-mackey-borel-characterizations.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-closed-witness-codings-and-measured-projections",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 1.3 and 3.1 use 1/n without restricting n≥1. Under the explicit zero-based indexing convention, the bound defining B_0 and the n=0 distance superlevel set are undefined.",
      "context_sha256": "f9f1ae3b944348a8f1c11fdc29eb0b989bc070ff2ffd250260bcb1cd84066de2",
      "item_sha256": "47bdaebf2af5bbd4fbe36f1a6175b040efb612c8d13466b1b613a9ef7d98b68f",
      "at": "2026-10-08T06:43:50.250Z"
    },
    {
      "id": "lem-l-one-of-a-second-countable-group-is-separable",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 2.1 and 4.1 extract finite subcovers of compact subsets from ambient open covers without citing lem-compactness-of-a-subspace-is-ambient, explicitly required by the supplied compactness interface.",
      "context_sha256": "d23a1d8b9567e34450c8217a633c6b27ae04bf6e085a7ed482a7499337a8380f",
      "item_sha256": "58be0c960e07077eed8ccf6ef6aa297471c04828f02a3969527db0c65b770b44",
      "at": "2026-10-08T06:43:16.172Z"
    },
    {
      "id": "lem-measurable-fields-of-nonempty-compact-sets-have-measurable-dense-selections",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The input (k_m)_{m≥1} and output (s_j)_{j≥1} are called sequences but have domain N\\{0}. The library requires sequences to have domain N; k_0 and s_0 are undefined, so the stated sequence data and conclusion violate its typing convention.",
      "context_sha256": "145bbf09af7b84415e498dbbfd7911a274ef525c04e0de80dcea6412c6e6ce17",
      "item_sha256": "6209e1f4cf8fc02f5450830dbbcd3b9d6a0593151d2e93564758a5bbf5ad3cb9",
      "at": "2026-10-08T06:43:47.374Z"
    },
    {
      "id": "lem-measurable-gram-schmidt-and-constant-field-trivializations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.2 applies Gram–Schmidt to the zero-indexed sequence (ξ_k), but S_x excludes ξ_0. On a one-point base with H=ℂ, ξ_0=1 and ξ_k=0 for k≥1, the recursion gives h_0=1 while S_x={0}. Thus h_0 is not a section of the claimed subfield.",
      "context_sha256": "907cfc2bc4444f22fc25a75c3e0ee4490ed531797c5c7ad68a0667dfe4c6be6d",
      "item_sha256": "2a1c7b03f9d27fefe0d305772759b7cfecc69cb7eb56dfa8c1b8ff91ef4a5fac",
      "at": "2026-10-08T06:43:43.489Z"
    },
    {
      "id": "lem-borel-relations-admit-conull-borel-uniformizations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F5] inaccurately restates the rational-density dependency: positive rationals are not dense in the reals, since none lies in (-2,-1). The supplied lemma establishes density of all rationals.",
      "context_sha256": "e08594555574ae469914ab70cb49e75706d2aa52cecfc5ceb19247f65ade42c7",
      "item_sha256": "f29a9c4de83cc447c8e71129f0f3d74c14e7caff8a5bd0062731e47a27e68672",
      "at": "2026-10-08T06:43:44.189Z"
    },
    {
      "id": "lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 asserts finite-tuple density absent from the supplied bicommutant interface, which assumes WOT-closed algebras. Step 2.1 applies this added assertion to D+CI without proving the required general density theorem.",
      "context_sha256": "01cf408342914c6ffbcfdc2e1d0f8df4f3dbb16447280a5061584d5b3bd324f9",
      "item_sha256": "210d9edc59a9842a2c6127ddd951d194442ffe0806a06f76980c49bbf1013cfe",
      "at": "2026-10-08T06:44:10.335Z"
    },
    {
      "id": "lem-polar-decomposition-and-nonzero-partial-isometries-in-factors",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.2 uses 1/n without restricting n to positive integers. Under the library's zero-based sequence convention, g_0 and x(a+1/0 I)^{-1} are undefined, so the claimed approximating sequence and strong-limit argument are not well-defined as written.",
      "context_sha256": "e5d3c00714b969beeeef304eca36505d30de5f7640601a48f031e7046881b6db",
      "item_sha256": "ac32aaca74e2a2c2bc4b139adf8605c7c6a7cab873c007520da0dc8905c14444",
      "at": "2026-10-08T06:43:41.129Z"
    },
    {
      "id": "lem-second-countable-group-c-star-algebra-has-a-sequential-approximate-identity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The statement and construction index the sequence by n≥1 and never define u_0. This violates the supplied convention that sequences have domain N with 0∈N. Define the zeroth term or reindex the construction from zero.",
      "context_sha256": "4865217bc755ecb4ebdc4dbfd5f4f0f9c411839118f298b174a0608a28c145e3",
      "item_sha256": "4067736c9bf7c23b84463639fb05fb61c9de61fd20cde77a7b846d0bf87f6414",
      "at": "2026-10-08T06:43:45.472Z"
    },
    {
      "id": "lem-self-commensurating-cyclic-subgroups-and-trivial-conjugate-intersections-in-the-free-group-of-rank-two",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title overclaims: the trivial subgroup is a free factor of F, but Comm_F({e})=F≠{e}. Thus not every free factor is self-commensurating; the proof establishes the claims only for the specified cyclic factors A and B.",
      "context_sha256": "a89aec2a42c8a29b2f923587037cfc00aee1c96a7b1d74f5b158574fb824075f",
      "item_sha256": "8da61bc1b847c06b81965d622fba6135a63397a67c0d80b01fca8fafa3e60d95",
      "at": "2026-10-08T06:43:49.394Z"
    },
    {
      "id": "lem-local-analytic-separation-and-saturated-borel-quotients",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 inaccurately restates Stone–Weierstrass without its unital/no-common-zero hypothesis. The self-adjoint separating algebra {f∈C([0,1]):f(0)=0} is not uniformly dense in C([0,1]), contradicting F6.",
      "context_sha256": "52498731746ee0a0c1609af6530b0c5a9ca75ae5f559f22454dd0b6f7ec738e5",
      "item_sha256": "61ac7ff9a37fa7df4c212632ade78eff2dd1a01c8cfe82ef0cb4b2be3b0fc7b7",
      "at": "2026-10-08T06:44:15.465Z"
    },
    {
      "id": "lem-gcr-kernel-and-mackey-borel-characterizations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 1.1 and 4.1 invoke compact-ideal and matrix-unit amplification results attributed to F2. Its supplied interface states neither result, so F2 does not license the claimed equal-kernel uniqueness or arbitrary-carrier type-I conclusion.",
      "context_sha256": "abdf34202334a9255ddbf16938cc7d7a4cbecf19dd6cc4da2844635a04862407",
      "item_sha256": "95e00d9d4c55e1f3af69032440f4e34feefc32a0411bd9d7b66451b860d59262",
      "at": "2026-10-08T06:44:13.553Z"
    }
  ]
