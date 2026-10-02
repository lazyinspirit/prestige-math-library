# Step 7 adjudicate: initial, round 1, unit 5

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u5.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"5",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-order-codimension-one-rational-function, 2:lem-finite-flat-curve-fibre-degree, 2:ex-divisor-rational-function-projective-line, 2:ex-principal-divisor-degree-zero-p1, 3:def-principal-weil-divisor-and-class-group, 4:lem-cartier-divisor-sheaf-invertible, 4:lem-pullback-cartier-divisor-line-bundle, 4:cex-pullback-weil-divisor-undefined, 4:cex-zero-divisor-equation-not-cartier, 5:lem-global-section-effective-divisor, 5:thm-line-bundle-rational-section-cartier-divisor, 5:ex-divisor-cusp-normalization-pullback, 7:lem-cartier-to-weil-respects-principal-and-addition, 8:lem-cartier-to-weil-injective-normal, 9:thm-cartier-weil-isomorphism-locally-factorial, 10:cor-degree-descends-picard-curve.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-order-codimension-one-rational-function",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The cited prime-divisor definition requires X to be Noetherian, including quasi-compactness. This item permits merely locally Noetherian X and uses that definition outside its hypotheses without defining prime divisors in the broader setting.",
      "context_sha256": "fe54c03bba8345dbbead9bfcc76f2c10aece745c5fdf9820aad35339ddde4ff0",
      "item_sha256": "9907b85c5357e13d5340172260678c8af0188fda9092710728c045da328f7724",
      "at": "2026-10-01T20:48:55.830Z"
    },
    {
      "id": "lem-finite-flat-curve-fibre-degree",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F9 falsely asserts that every local Artinian ring S is a vector space over its residue field λ. For S=Z/4Z, λ=F₂ but no such structure exists. The cited interface does not assert this, and step 1.3 invokes it.",
      "context_sha256": "cc12cc5376afa19abd9257938749cc0a1fc94e85a962f5374dd21df46d061d7d",
      "item_sha256": "e0837d90be6691bcd8e9ce8de170cc685edf6ea5c4e0d9bf404f518a6fb4e77b",
      "at": "2026-10-01T20:48:31.289Z"
    },
    {
      "id": "ex-divisor-rational-function-projective-line",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 incorrectly assigns a single function field K(X) to arbitrary normal Noetherian X. For X=Spec k[t] ⊔ Spec k[t], global meromorphic functions form k(t)×k(t), while each divisor's DVR has fraction field k(t). The dependency uses the containing component's field.",
      "context_sha256": "a4d945c7b9bca50e0df0d600981079f7fc153a62a2a2f9adaec5ac9c643bbb2a",
      "item_sha256": "c70f4ed8fdb7c264dc35c793499148f157576f56156135a0a2f0af966c9b372b",
      "at": "2026-10-01T20:48:43.253Z"
    },
    {
      "id": "ex-principal-divisor-degree-zero-p1",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F7] incorrectly assigns fraction field K(X) to every codimension-one stalk of a possibly disconnected normal scheme. The dependency specifies the component's function field: for two disjoint affine lines, global meromorphic functions form k(t)×k(t).",
      "context_sha256": "799d65d614bc98b5d00fd21a78a67fe8c3f9233d2ec7835daf8f6566e51b7326",
      "item_sha256": "29835b67574ec717b91b9f673738bb3c836f4f20cec1f0e0c234c104b9fa2fa2",
      "at": "2026-10-01T20:48:51.069Z"
    },
    {
      "id": "def-principal-weil-divisor-and-class-group",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The second boundary claim is false as written: for X=Spec k, there are no prime divisors, but 0∈K(X)=k is not a unit. “Every function field element is a unit” must be restricted to nonzero elements.",
      "context_sha256": "db1be4d95bc74818872e05e527328a16bce18a50f5871a81504dd14d72500bc8",
      "item_sha256": "e6002bfb8ef83be31f8fabe704c81f685adef149aa6a492e7f4bac64f69fa122",
      "at": "2026-10-01T20:48:36.713Z"
    },
    {
      "id": "lem-cartier-divisor-sheaf-invertible",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The main proof repeats the proof already supplied in def-invertible-sheaf-of-cartier-divisor: multiplication by f_i^{-1}, with inverse multiplication by f_i, establishes local rank one. It supplies no genuinely different route to invertibility.",
      "context_sha256": "a6dff15fad62fa3b6bf23edc07039980dd6aea2947bc127b26dab859d2e9cfc1",
      "item_sha256": "065e5405cd11f367ea08f1f057b9b941feb952ad4aadc4b1b3ea53ce94a18600",
      "at": "2026-10-01T20:48:31.424Z"
    },
    {
      "id": "lem-pullback-cartier-divisor-line-bundle",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F1] falsely says the pullback is effective exactly when D is effective. For the open immersion G_m→A¹ and D=−[0], the pullback is defined and equals 0, hence is effective, although D is not.",
      "context_sha256": "80ba4cae005f5df83239dc34cc12b89f47a35befa1069da9de670bbda87b160e",
      "item_sha256": "4f02a41d9c32192ec3949351f6becc46bc3b5981cfb7c025c5627a1c7b192228",
      "at": "2026-10-01T20:48:47.286Z"
    },
    {
      "id": "cex-pullback-weil-divisor-undefined",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] inaccurately restates the dependency: prime divisors have codimension one, not dimension one. Indeed, Z=V(t) in this very example is a zero-dimensional prime divisor. Thus the cited justification is false.",
      "context_sha256": "ce5da9e6478a4872b3b83513211fd3718e1d6d8865fc564e9b1901756ced0db0",
      "item_sha256": "f43312378d6d0d6b6e030c7b4c0959cc6a9ad5b2dbebc05fd2a0dbdd7cb3e626",
      "at": "2026-10-01T20:48:47.061Z"
    },
    {
      "id": "cex-zero-divisor-equation-not-cartier",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final inference is invalid: on this X every nonzerodivisor is a unit, so K_X=O_X and every Cartier divisor is zero and effective. This example therefore cannot show that effectiveness is necessary in the construction of Z_D.",
      "context_sha256": "a00d74d864776e313dc353b57500609e8ef51a301c266cdce8c6613a01da35a8",
      "item_sha256": "db69245b9012f970be099d9e107cb1e5323411235ca33e3c362249a4be35659d",
      "at": "2026-10-01T20:49:01.574Z"
    },
    {
      "id": "lem-global-section-effective-divisor",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] inaccurately asserts that 1 is a section of O_X(D) for every Cartier divisor. For X=Spec k[t] and D=-div(t), O_X(D)=tO_X, which does not contain 1. The canonical-section assertion requires effectiveness.",
      "context_sha256": "228efc9a37044a48044c2add3fe616d9a499e1f589cd7f6517935ba01a9e58a2",
      "item_sha256": "986e4dd3fd9cf1d9d8f68a117a6be2a176a702c2348239917605fbec005297a1",
      "at": "2026-10-01T20:48:18.483Z"
    },
    {
      "id": "thm-line-bundle-rational-section-cartier-divisor",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] inaccurately asserts that 1 is a global section of O_X(D) for every Cartier divisor. For X=Spec k[t] and D=-[0], O_X(D)=tO_X and 1∉Γ(X,tO_X). The dependencies license only a canonical meromorphic section here.",
      "context_sha256": "50fdc4dfaee0975a0ff79e1059eaa1eb8d5bb0b04e8e17f07078053c8398f900",
      "item_sha256": "b0f6456699ed14e6fda1e5595135e4b90f22c72ce09ac24a9922c9774cd2cb5d",
      "at": "2026-10-01T20:48:09.093Z"
    },
    {
      "id": "ex-divisor-cusp-normalization-pullback",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F10] inaccurately restates def-integral-scheme: a nonempty scheme covered by spectra of domains need not be integral. Spec(k) ⊔ Spec(k) has such a cover but is reducible; the interface requires every nonempty affine open.",
      "context_sha256": "d0ebe497c9d5cdf80557e754da74e3c218bc72a8da6ac12863afb95a1802f34a",
      "item_sha256": "948e8e159d7acf4f1c8d892bc5bef1085ff8b7a3be6ec47dc48e0b92bb9b3549",
      "at": "2026-10-01T20:48:42.556Z"
    },
    {
      "id": "lem-cartier-to-weil-respects-principal-and-addition",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 incorrectly asserts ker(barφ)=Prin_C(X). The induced isomorphism barφ has trivial kernel in CaDiv(X)/Prin_C(X); F9 identifies Prin_C(X) with the kernel of the original map φ, not barφ.",
      "context_sha256": "8950f7ad0e2bd26f9971a4ffc7ba90232f1d3e755de98b6ced413e4fe10ee786",
      "item_sha256": "b6d4d5b63e52a2b9996e67be1256e5e9601b9f65ece9db305163460763210752",
      "at": "2026-10-01T20:48:24.549Z"
    },
    {
      "id": "lem-cartier-to-weil-injective-normal",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] incorrectly restates the dependency as cyc:K(X)^×→Div(X). Its supplied domain is CaDiv(X); the stated domain makes cyc(D), cyc(E), and the asserted Cartier-divisor additivity ill-typed.",
      "context_sha256": "05c31de963e771f58ef3404e81b06f509506a6ce9ef7320eef2d7e04f3d8ce90",
      "item_sha256": "7a3f2b8a2eb6349046f957072c8966fb6df8e35974597fecd80625a696d0e9c5",
      "at": "2026-10-01T20:48:20.342Z"
    },
    {
      "id": "thm-cartier-weil-isomorphism-locally-factorial",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 omits the required nonzero, nonunit conditions for irreducible and prime elements. Its stated criterion makes 1 irreducible, contradicting step 1.1's conclusion that every irreducible generates a prime ideal: (1)=R is not proper.",
      "context_sha256": "fdac0d68e136e81e34c6930dec4c7f4e2f48f0a97f135bfc417cbf11bb7e5502",
      "item_sha256": "ff3e457001afadd28bfcd84a762f26811c6df73217d600ea243baac5c061ad8c",
      "at": "2026-10-01T20:48:50.208Z"
    },
    {
      "id": "cor-degree-descends-picard-curve",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claim that AC is used exactly through two suppliers is false: F4 and step 1.1 also invoke thm-principal-ideal-domains-are-unique-factorisation-domains, whose supplied interface explicitly assumes AC.",
      "context_sha256": "61fab1af2d437a7af8c9ebd223baa35338a4c547ebd475d304243f5403d75b4d",
      "item_sha256": "d433072270f7f02c971fc1fe96a050098086a6d5c5185c4a07cda83143d2f286",
      "at": "2026-10-01T20:48:35.529Z"
    }
  ]
