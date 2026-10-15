# Step 5 adjudicate: initial, round 1, unit 18

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-18-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u18.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"18",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-tdmath-van-hove-sequence, 2:def-tdmath-superstable-regular-interaction, 3:def-tdmath-periodized-empirical-field, 3:lem-tdmath-integrable-tail-diagonal-gap, 4:lem-tdmath-periodized-empirical-field-stationary-density, 5:lem-tdmath-periodic-law-local-tame-transfer, 6:thm-tdmath-continuum-variational-pressure, 7:lem-tdmath-canonical-empirical-field-conditioning, 8:ex-tdmath-hard-core-zero-beta, 9:thm-tdmath-controlled-shell-three-ensemble-equivalence.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-tdmath-van-hove-sequence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The library convention defines every sequence as a function on N, including index 0, but this definition indexes (Ω_k) only for k≥1. Its defining object is not a sequence under the supplied convention; index the regions from 0.",
      "context_sha256": "28399277630955a56e799aa0973d7ab2934c0a3b7ae58b86a5b9a9bd944a0930",
      "item_sha256": "24cdcf1908cea9d4d0fba4b5820f68030ede4dc912b672031def1ce89d950d77",
      "at": "2026-10-14T20:01:46.866Z"
    },
    {
      "id": "def-tdmath-superstable-regular-interaction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The periodic-image claim cites a lemma requiring φ to be regular, but the definition never assumes regularity before defining H_{L,per}. A superstable nonregular potential may have +∞ at every nonzero separation, so the cited absolute-convergence claim does not follow.",
      "context_sha256": "b0ceae79422693634b1c9a1b416cefd63d6ec46510f915974894b55c168aeb16",
      "item_sha256": "a616b584c940b5264fde5bb3644adb916a5eb8d9bb72c1b6d6c16c36c1f19a09",
      "at": "2026-10-14T20:02:00.594Z"
    },
    {
      "id": "def-tdmath-periodized-empirical-field",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For arbitrary C_L, finite configurations need not have finite mean size. At L=1, choose a heavy-tailed count law with E[N_{Λ_1}]=∞; then the local-tame test f(ω)=N_[0,1)^d(ω) gives barC_1(f)=∞, so the displayed barycenter is not finite-valued on T.",
      "context_sha256": "7c2972a0f3e800f597bd09325d62643297e7586f0aba16ed63074fda0715888a",
      "item_sha256": "4ea122d15e7dd7ba749c9128b87be5c42c860e261047579f05d29e051074e4af",
      "at": "2026-10-14T20:02:23.121Z"
    },
    {
      "id": "lem-tdmath-integrable-tail-diagonal-gap",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The prerequisite interface already cites this lemma to justify its periodic-image convention, while this lemma depends on that definition. This circular dependency does not establish the convention from an acyclic base.",
      "context_sha256": "001164ee32b5509f7c2e8c0e7f5a8077a60808e91198563a245d0ceddcb4dae0",
      "item_sha256": "7cd053716769f33464c5c7b8b841430c72f288269a61bfe1a7bcee71472d5302",
      "at": "2026-10-14T20:02:08.884Z"
    },
    {
      "id": "lem-tdmath-periodized-empirical-field-stationary-density",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: ρ is used in the statement and proof but is not defined by any cited interface. F2 defines finite intensity as finite expected count in a unit cell, but never defines ρ(P) as that count, so the claimed intensity equalities are unsupported.",
      "context_sha256": "316b81041bd0950bb9f5c5178683689f6a1bdbbc769ead5eff7a0d2c22373aaf",
      "item_sha256": "b0255b6b0314d0535f7167205ade968ac260e2a5c17e6a537be1493edac4e13d",
      "at": "2026-10-14T20:01:34.620Z"
    },
    {
      "id": "lem-tdmath-periodic-law-local-tame-transfer",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: [F4] is restated as giving local compactness and marginal extension for arbitrary laws with fixed-cube entropy bounds. Its supplied interface only gives compactness of stationary finite-specific-entropy levels; it does not license step 3's convergence of the periodic laws",
      "context_sha256": "8e72fe5b80a32d57275559e7cd2623c8be16ce7cfe6e13130d1381d17ddbc4a8",
      "item_sha256": "3631bef2a02b22cf28ce4bcdbf64a0341e38b8ba45d114e5189f69b6689705f5",
      "at": "2026-10-14T20:02:24.334Z"
    },
    {
      "id": "thm-tdmath-continuum-variational-pressure",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 overstates the supplied spatial mean-information theorem: it covers integer cube sizes N, while F4 asserts the L¹ limit as arbitrary L→∞. That extension is neither supplied nor proved, so the dependency restatement is unlicensed.",
      "context_sha256": "b21a57f9cde82503862792af06e7dd746c20bd6c07e6dee4aba1ef8433b17443",
      "item_sha256": "78c4d02decff2fe7176fd063de77f73e26d84b4dbcfe98c62fb64b5b9fe7dcc2",
      "at": "2026-10-14T20:03:59.210Z"
    },
    {
      "id": "lem-tdmath-canonical-empirical-field-conditioning",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof relies on the variational-pressure theorem for its pressure and minimizer compactness, but that theorem assumes AC, the ultrafilter extension principle, DC, and HB. The Statement and Given do not supply these assumptions, so the result is not licensed as stated.",
      "context_sha256": "3388412052d6f72d763462e3df5533e6862d0ae9d161be636c0adcea6930242f",
      "item_sha256": "79e0b5330b4851143bb1ac236d15af76360ebaa602b4d2f5ff8e1be2e0348b05",
      "at": "2026-10-14T20:02:04.912Z"
    },
    {
      "id": "ex-tdmath-hard-core-zero-beta",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 imports the retained theorem’s activity-weighted factor z^N (z² for N=2), while the canonical Z in F1 has no activity factor. Without assuming z=1 or specifying coefficient normalization, F2 does not justify the displayed Z.",
      "context_sha256": "c5c3dd69ac6def04a40fe69f37bfa12efc81a58793129f6d2bca982158753d4e",
      "item_sha256": "293f6cf513324edbb337960017f4ba8095903903aed06ca3bd8c3b857a832975",
      "at": "2026-10-14T20:02:30.843Z"
    },
    {
      "id": "thm-tdmath-controlled-shell-three-ensemble-equivalence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates its dependency: the supplied interface gives periodic fixed-N concentration, not an exponential rate. Step 3 needs that rate to dominate the factor exp(2βδ_L L^d); concentration alone does not justify the shell-law conclusion.",
      "context_sha256": "b308247bce493830aec9654bd0a376a82a4c8844253e16959204f43ddc9fc130",
      "item_sha256": "71669357b237db88e370790cef8d56f229cde1b4ad38993888ec658df755ac50",
      "at": "2026-10-14T20:02:08.422Z"
    }
  ]
