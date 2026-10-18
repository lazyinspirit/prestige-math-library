# Step 5 adjudicate: initial, round 1, unit 11

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-11-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u11.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"11",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-standard-real-and-normalized-complex-gaussian-matrix-law, 1:lem-finite-real-gaussian-increment-comparison, 2:alg-randomized-power-subspace-iteration-with-qr, 2:lem-finite-scan-range-basis-is-borel, 2:lem-real-scaled-gaussian-product-expectation, 3:thm-randomized-power-rangefinder-error-transfer, 3:ex-power-rangefinder-loses-small-mode-without-qr, 4:lem-wide-gaussian-pseudoinverse-spectral-moments-and-tail.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-standard-real-and-normalized-complex-gaussian-matrix-law",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The matrix dimensions are unrestricted, but if a=0 or b=0 the coordinate space is zero-dimensional; the supplied Lebesgue interfaces cover only R^n for n≥1, so the stated density and integral law are not defined there. Restrict a,b≥1 or define the zero-dimensional case.",
      "context_sha256": "9daeeb6e629057b821b7a1da95351bb515279b4a170333363fc93b27c7d5125f",
      "item_sha256": "2f41b9b07b4fe1430a9ff129849b5e6825faa194138ba56ef50402dfb25c5f99",
      "at": "2026-10-18T03:09:38.144Z"
    },
    {
      "id": "lem-finite-real-gaussian-increment-comparison",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 overstates the cited law: allowed singular families such as (G,G) have no Lebesgue density on R^2; the dependency supplies product densities for standard coordinates and iid matrices. The proof can integrate source coordinates, but A1 as written is false.",
      "context_sha256": "df44eacd378fd9cde71b111dd1acba34541b3d34d5b389d312f3f5e6e6fa008e",
      "item_sha256": "f044076560b091704b419ff6e12d8c527274f658951db9affc03dda697638460",
      "at": "2026-10-18T03:10:02.432Z"
    },
    {
      "id": "alg-randomized-power-subspace-iteration-with-qr",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "`justified_by` cites a lemma whose statement presupposes this algorithm and establishes measurability, not the algorithm’s well-definedness. This creates a circular justification.",
      "context_sha256": "3dd8bcd6a5b192e4eff78e6f549a5a1f180c405eb4cba3f94b0df54723c16dd8",
      "item_sha256": "517891fc5811117ca36b5fedbad781f73904f3843a4c6dcff518d3bd2f108eaa",
      "at": "2026-10-18T03:09:37.394Z"
    },
    {
      "id": "lem-finite-scan-range-basis-is-borel",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F7 overstates the cited integral rule: it writes a constant’s integral as c·μ(X) without the c=0, μ(X)=∞ caveat the dependency explicitly requires. Its probability-law use is safe, but the local restatement is inaccurate.",
      "context_sha256": "4bdd54afc57c133dcbd5957214b811cdb554b249079ab58129a92fc7ffaefc79",
      "item_sha256": "68a94349cb480ed08d62fd57359a0000ccea5ec6b5c157d8cc6ecb05c7b1288b",
      "at": "2026-10-18T03:10:17.809Z"
    },
    {
      "id": "lem-real-scaled-gaussian-product-expectation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 overstates the Jensen interface: integrability of X alone is insufficient; the cited theorem also requires φ(X) to be integrable or nonnegative so its expectation exists. The local restatement omits that condition.",
      "context_sha256": "2f46ac9cd2996e8f6b32b64cbe429645dfaf3d76ce486d3e6efc6170557509c7",
      "item_sha256": "3ff468c15a760369814d741804a11daf3dcd5380eaefe432ad06ad4df692b5b5",
      "at": "2026-10-18T03:09:58.191Z"
    },
    {
      "id": "thm-randomized-power-rangefinder-error-transfer",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement allows any measurable Ω, but the cited algorithm requires Ω to be an iid standard real or normalized complex Gaussian draw. For non-Gaussian Ω, P is not an output of that algorithm as specified, so the theorem does not meet its dependency’s input conditions.",
      "context_sha256": "cf8979425c4c427d7b711618cb1c04abc8171f47f282e0203bcbf13b4d5de88f",
      "item_sha256": "0eb780ea4f93436804d110df3595cbb0346b9879268f95e61d295fff21ee98fd",
      "at": "2026-10-18T03:09:48.520Z"
    },
    {
      "id": "ex-power-rangefinder-loses-small-mode-without-qr",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited procedure requires an iid Gaussian draw Ω, but the example fixes Ω=I₂. Its retention claim therefore uses an input outside the supplied interface.",
      "context_sha256": "6dc89ad8157e8d228ba4936ab09bb3b8706218feae2b8440daa5e00fb9259a30",
      "item_sha256": "e198e6e8c90b96119da804fc789f2c8b9f00ff87916874e74b64e6165cc19cc1",
      "at": "2026-10-18T03:10:21.591Z"
    },
    {
      "id": "lem-wide-gaussian-pseudoinverse-spectral-moments-and-tail",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 relies on [F12], but the supplied interface for lem-wide-gaussian-pseudoinverse-frobenius-moments gives only the diagonal inverse-Gamma law and Frobenius moments. It does not license the coordinate-square Gamma laws or convolution claim used here.",
      "context_sha256": "3d6377cc38244cb28ed3df3f7b397a66f11fa88dadf3194db37957bdba39e824",
      "item_sha256": "a84925a764dec6d59b51c93e76ce8d2d060eaa7d071a698ed75ff15cd6b80286",
      "at": "2026-10-18T03:10:15.394Z"
    }
  ]
