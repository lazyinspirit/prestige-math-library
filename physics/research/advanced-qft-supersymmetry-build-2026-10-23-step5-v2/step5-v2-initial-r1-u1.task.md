# Step 5 adjudicate: initial, round 1, unit 1

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-batch-1-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/advanced-qft-supersymmetry-build-2026-10-23-step5-v2/step5-v2-initial-r1-u1.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"advanced-qft-supersymmetry-build-2026-10-23",phase:"initial",round:1,unit:"1",input_sha256:"79ce228292c28cf4dc516ab9bc72619009c0b56046675966598cb75a0933c758",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run advanced-qft-supersymmetry-build-2026-10-23 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-qftx-super-poincare-algebra-4d, 1:lem-qftx-super-poincare-graded-jacobi, 2:def-qftx-n1-chiral-superfield.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-qftx-super-poincare-algebra-4d",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The representation is only on a graded complex vector space; the later claims about self-adjoint physical momenta and a “massive rest fiber” give no Hilbert space, adjoint/domain, or spectral hypotheses. These claims are untyped and unsupported by the stated definition.",
      "context_sha256": "eb39189cc24bb173aa8fdddd590771609807d0b8fbb73a628255f2fd341775cc",
      "item_sha256": "81ce24570d99820c2edefcc45ebfe3270279a7b7ccf112584d83dccded70546a",
      "at": "2026-10-24T19:58:13.039Z"
    },
    {
      "id": "lem-qftx-super-poincare-graded-jacobi",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The supplied action [A,Q_α]=A_α{}^γQ_γ is an anti-representation for the displayed standard matrix entries. Taking A=E12, A'=E21, q=Q1 gives [A,[A',q]]−[A',[A,q]]=−q, while [[A,A'],q]=q. Thus step 1.2 fails and Jacobi is violated.",
      "context_sha256": "1513ddbadc9aa286320c35e6c843f1de16c69b0bd708826881061acd8c9cf821",
      "item_sha256": "af86f4164e2ee4ac6ffeb93b47cef732280b5efbfea2e30b96fa97e6fd4c8813",
      "at": "2026-10-24T19:57:37.858Z"
    },
    {
      "id": "def-qftx-n1-chiral-superfield",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The field space \\(\\mathscr S\\) has coefficients in \\(\\mathcal A\\), but the variation uses external odd parameters, so its coefficients need not lie in \\(\\mathcal A\\). No extended coefficient algebra is defined for the claimed component tuple.",
      "context_sha256": "a041a091d91b9aca3fb9a0028bf5b24332dcfecc673ff4b79bba996aa1934e40",
      "item_sha256": "d0d2d7721edb307a423e5a70f37964f2c68157b636681d171203320b5811d1f3",
      "at": "2026-10-24T19:58:38.160Z"
    }
  ]
