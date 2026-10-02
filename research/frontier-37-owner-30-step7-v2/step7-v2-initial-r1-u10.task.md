# Step 7 adjudicate: initial, round 1, unit 10

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u10.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"10",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-zero-extension-from-w-one-p-zero, 1:thm-local-smooth-approximation-in-wkp, 1:cex-not-every-open-set-is-a-w-one-p-extension-domain, 1:cex-zero-extension-of-a-nonzero-boundary-function-creates-a-jump, 2:cex-mollification-after-zero-extension-does-not-preserve-boundary-values, 2:ex-reflection-extension-on-the-half-line, 3:cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, 3:lem-c-k-boundary-flattening-preserves-wkp-locally, 4:thm-extension-theorem-for-bounded-smooth-domains, 4:ex-mollification-of-the-absolute-value, 6:rem-lipschitz-versus-c-one-versus-smooth-domain-hypotheses.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-zero-extension-from-w-one-p-zero",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.3 applies F1 with δ=1/j for every j∈ℕ. Since 0∈ℕ, 1/j is undefined at j=0, so the asserted approximation family is not well-defined under the library conventions.",
      "context_sha256": "eb2e5133e9cab43325c0234992546ec29056b73c73d2b4246b6da6e37d36b0a7",
      "item_sha256": "05a42f9fe2be25c169f07fc0d97a65034952619d8f71fdb78b476548474c36d1",
      "at": "2026-10-01T20:47:47.504Z"
    },
    {
      "id": "thm-local-smooth-approximation-in-wkp",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 is false for the allowed case Ω=R^n: d=dist(cl U,∅)=∞, so its asserted dist(x,∅)>d becomes ∞>∞. Use dist(x,Ω^c)≥d>ε, or handle Ω=R^n separately.",
      "context_sha256": "77d47307c5e7bf6f39bf6318ba7403bf418b2f1ef8c7a4d9bc0c0d155bca0b3d",
      "item_sha256": "9399d5c027789b85cb4b8b3b93602f4063bc4f687532b948ac70b8eb74b5c182",
      "at": "2026-10-01T20:48:12.192Z"
    },
    {
      "id": "cex-not-every-open-set-is-a-w-one-p-extension-domain",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 omits the cited ACL theorem's explicit Axiom of Choice hypothesis. AC is listed as a dependency but never assumed in the Statement or Facts; steps 3.1 and 4.1 therefore apply the theorem without establishing its prerequisite.",
      "context_sha256": "4d52bdc9b3dd6a746e8290277dd7c7cc861630b9817571560f4c694ed056b197",
      "item_sha256": "ebb51bd4cf8749d6b688c4a51851b08293fc0916ef4d857adfc84761a94601be",
      "at": "2026-10-01T20:48:33.539Z"
    },
    {
      "id": "cex-zero-extension-of-a-nonzero-boundary-function-creates-a-jump",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 falsely restates the distributional pairing: ⟨T_H,ψ′⟩=∫₀¹ψ′, whereas F3 assigns its negative. The minus sign belongs to ⟨∂T_H,ψ⟩. Step 1.2 computes correctly, but the local dependency restatement is false.",
      "context_sha256": "25eaa26a8c3ff63aa1640bcb6fafcb61fa5cb62c74b48990c7780c022a750772",
      "item_sha256": "3b14d6f9d132ddfe7b76d630db74341f84146c44ef483ad5dcc1aa4bb00f8088",
      "at": "2026-10-01T20:48:07.175Z"
    },
    {
      "id": "cex-mollification-after-zero-extension-does-not-preserve-boundary-values",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 drops the representative theorem’s explicit Axiom of Choice hypothesis; F1 also drops Countable Choice. Listing def-axiom-of-choice does not assume AC, so these unconditional restatements and uses are not licensed by the supplied interfaces.",
      "context_sha256": "ad76f498ec2489c87fe37caba3a25899b3c0b44575b5b7eab4971fdf9aa75efb",
      "item_sha256": "80b14642269f073f94c69ec57239a16ee80bbe44522bc1556c86d4dcb5b305ae",
      "at": "2026-10-01T20:48:06.434Z"
    },
    {
      "id": "ex-reflection-extension-on-the-half-line",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 misquotes [Example 2.39](https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf): the source prints factor 1 at p=∞, not 2. Its identity therefore agrees at p=∞ as well as p=1, contradicting the claimed comparison.",
      "context_sha256": "cbe36762df24ae0469ffef3561971f0628c710b52fde22fb520656912038044a",
      "item_sha256": "267f5cf90d2f2d34591fbb046e5c8c149f339fc4e3ee0625953b9bac3f019586",
      "at": "2026-10-01T20:48:34.900Z"
    },
    {
      "id": "cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 claims support in B_{2R+ε}, but no condition supp ρ⊆B̄₁ is imposed. The supplied mollifier definition permits bumps supported arbitrarily far away, so this bound is false; the cited interior-mollification interface requires that missing condition.",
      "context_sha256": "2982fc25400002730982266145248476495b73fac8bcde3402323d5e1debbeca",
      "item_sha256": "be6909863e6968f781aa56f14b21bea163a49eb4064d2c3d8d1dc8cf2943958c",
      "at": "2026-10-01T20:47:55.951Z"
    },
    {
      "id": "lem-c-k-boundary-flattening-preserves-wkp-locally",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F1] inaccurately restates the chart interface: only the coordinate shear has determinant 1. The full flattening chart has determinant det Q, which can be −1 when the rigid motion includes a reflection.",
      "context_sha256": "6e59597110b953726538d58fe99c2fc70cfd402c43f7b139b44da3b006e0898f",
      "item_sha256": "9cfefa5c2d5a84e7b0257638209be0661e10d18c670be8aad3607ab98726bfea",
      "at": "2026-10-01T20:47:54.809Z"
    },
    {
      "id": "thm-extension-theorem-for-bounded-smooth-domains",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 inaccurately restates the chart interface: det DΦ=det Q, which can be −1; only the coordinate shear has determinant 1. For Ω=(0,1), flattening at the left endpoint to the stipulated subgraph requires reflection, with determinant −1.",
      "context_sha256": "7ea38341c0ca93a260be152400061de74242053debac0303502560167aed6079",
      "item_sha256": "daab2aa73a78e45cfcb1a33082a93065f1dcb4d6eb8abd4f900ffe910c844f87",
      "at": "2026-10-01T20:48:17.438Z"
    },
    {
      "id": "ex-mollification-of-the-absolute-value",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 omits the truncation-calculus dependency's Axiom of Choice hypothesis, and step 1.1 invokes it assuming only Countable Choice. Countable Choice does not imply AC, so this restatement and invocation are not licensed by the supplied interface.",
      "context_sha256": "2eef866ca3d22e41acc0b1464a6eed96736908d314331da3df340a1399200963",
      "item_sha256": "6696f57f08b9f10bace75dc9856b3bbc8701195b19f2c9ba9cd54dc1399c62ee",
      "at": "2026-10-01T20:47:51.577Z"
    },
    {
      "id": "rem-lipschitz-versus-c-one-versus-smooth-domain-hypotheses",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claim that interior mollification can never finish density reaching the boundary is false. The cited zero-extension lemma puts W_0^{1,p}(Ω) in W^{1,p}(R^n); for p<∞, mollification there yields ambient smooth restrictions converging on Ω.",
      "context_sha256": "60b61b184bcffb3416b6e08c73a4e5bf0e4357b065a09860a43832c30f395b58",
      "item_sha256": "cc4642dc4012edbff492b9d2478ce323e9446fcaf04cbf33eed47c5f1388c078",
      "at": "2026-10-01T20:48:45.241Z"
    }
  ]
