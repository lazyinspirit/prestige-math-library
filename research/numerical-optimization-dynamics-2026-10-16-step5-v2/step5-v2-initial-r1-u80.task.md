# Step 5 adjudicate: initial, round 1, unit 80

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-80-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u80.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"80",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-bounded-lipschitz-dual-norm-for-signed-measures, 0:def-mollified-biot-savart-vortex-kernel, 0:lem-weighted-continuous-path-space-is-complete, 1:alg-tensor-simpson-force-evaluator, 1:lem-signed-bl-norm-dominated-by-split-coupling-cost, 1:ex-mixed-sign-vorticity-needs-signed-distance, 2:thm-w1-dobrushin-stability-with-force-defect, 3:thm-separable-vortex-inspired-leapfrog-is-reversible-symplectic-volume-preserving-order-two, 3:thm-tensor-simpson-force-error, 3:ex-globally-lipschitz-alignment-model.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-bounded-lipschitz-dual-norm-for-signed-measures",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited Euclidean interface allows d=0, so R^d is a singleton. Then the displayed supremum defining Lip(φ) is over an empty set and is not a real-valued Lipschitz constant; require d≥1 or define Lip(φ)=0 there.",
      "context_sha256": "16cae2c0b6dc24d65fc38a108165a91412dccfb0dd65036cdec56a87b0f8782a",
      "item_sha256": "f8d8221735ce513196cb40f1fa05bb861652dfb246a30395f38851b6686728e9",
      "at": "2026-10-17T01:50:51.719Z"
    },
    {
      "id": "def-mollified-biot-savart-vortex-kernel",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "`justified_by` cites a lemma that assumes the mollifier from this very definition. That makes the justification circular: the lemma cannot independently establish this definition’s well-definedness.",
      "context_sha256": "fd22d95bdf6c803c4a882627e5dc8517ed66900f3e9a7613a94cf0ac2211a5ad",
      "item_sha256": "d4d95b282475d0f52de0347147c29c961cf790ef1685d7bdfb7b3f14055c337a",
      "at": "2026-10-17T01:50:58.214Z"
    },
    {
      "id": "lem-weighted-continuous-path-space-is-complete",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 inaccurately restates prop-order-and-scalar-rules-for-the-nonnegative-integral: its supplied interface gives monotonicity and homogeneity, not preservation of finite sums. The proof relies on that missing property to establish integrability and finite norm.",
      "context_sha256": "cf4415c36a22597e230b5992e8bf3b9f90ce4dd2d4c38748f5080699565ac910",
      "item_sha256": "24f3f6544f0a733805069650ee9145276afd5612cf430e4e7a91ba7780b87ad2",
      "at": "2026-10-17T01:52:17.590Z"
    },
    {
      "id": "alg-tensor-simpson-force-evaluator",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The success path never specifies a return value. It computes Q_yG, but does not say to return it, so the algorithm’s output is undefined despite the theorem interface claiming it returns a vector.",
      "context_sha256": "8a5f4c46dcea3375d2f911927a43b1977dd7ae01236f45e6c32624e7f8495cdb",
      "item_sha256": "ebccfe8e59a16b40ed0695de2a3c1cbedd75001b79a88c866ae4be166a979620",
      "at": "2026-10-17T01:51:00.314Z"
    },
    {
      "id": "lem-signed-bl-norm-dominated-by-split-coupling-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement omits the required dimension hypothesis d≥1 from def-signed-split-transport-cost, so C± is invoked outside its supplied domain when d=0.",
      "context_sha256": "2fd1ea831a2ac8440bd8f34bdc8015ef9a5b14ab0b84d438ba68f4d6273b6f48",
      "item_sha256": "d550299700e79d8aa8bc0956fbf8946cd189430227ff794844523fbf6b5028cd",
      "at": "2026-10-17T01:51:02.465Z"
    },
    {
      "id": "ex-mixed-sign-vorticity-needs-signed-distance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The example only defines a signed measure; it never defines or shows that this measure is a vorticity. The title's vorticity claim exceeds what is established.",
      "context_sha256": "9a5e1a012361c7ac3a067ebe09c6cc2a2e43d2db157120b0354a0889e5992028",
      "item_sha256": "8fdffd7445f66b5ade977b7255e49de1f9d06e571d53f8db6cf3c2387a0d73e0",
      "at": "2026-10-17T01:51:15.789Z"
    },
    {
      "id": "thm-w1-dobrushin-stability-with-force-defect",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 inaccurately says the characteristic equations are those in the cited definition, which has no defect terms. The theorem assumes forced equations, so that dependency does not license this restatement.",
      "context_sha256": "53d513f27f558b45fdf92e66a7fecd2a3e3c751b29d994780097c7a6cb60afcc",
      "item_sha256": "27866762ad5b9eb58865dd4ed28040b4b03fbcc79bba5b164eadc99088e34276",
      "at": "2026-10-17T01:51:10.455Z"
    },
    {
      "id": "thm-separable-vortex-inspired-leapfrog-is-reversible-symplectic-volume-preserving-order-two",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Claim 4 uses N both for the vortex count in Hε and the number of time steps in h=T/N. Sending the step count to infinity then changes the Hamiltonian’s dimension, so the stated order-two convergence for a fixed system is not quantified.",
      "context_sha256": "12d30dc437c5ed7d53f6f315478c681b756db4b83953ec393f4d223eea94eda1",
      "item_sha256": "b3b6d0219dda21b5095dd811d28f490bf44fc89f270de4b1294040ba216d820a",
      "at": "2026-10-17T01:51:31.159Z"
    },
    {
      "id": "thm-tensor-simpson-force-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The C⁴ hypothesis is ill-typed against the cited definition: it defines Cᵏ only for scalar maps on open sets, but R is closed and F is vector-valued. No open-neighborhood extension or componentwise convention is stated, so boundary derivatives and F4 are not licensed.",
      "context_sha256": "21b2a6b14d98482a3c51e50547e078e15577bf7669c134c7e2cd6e9294bcc5fa",
      "item_sha256": "6d161e6780ef39f5ca1c5e78bcc8a97a972859cbcb89a056adad6c7cb5176975",
      "at": "2026-10-17T01:51:22.212Z"
    },
    {
      "id": "ex-globally-lipschitz-alignment-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F4] omits the finite-first-moment hypothesis required by its interface, calling the estimate general for characteristic probability solutions. The stated dependency restatement is inaccurate.",
      "context_sha256": "1ee9804d84b6221675ae5b6efbf77560a6b906017ba27a86dbfd551b66979343",
      "item_sha256": "b952d1188a4d42d54a0da37a904506624a4ba2a9d7ab0c03cf55969e4f836c7f",
      "at": "2026-10-17T01:51:10.728Z"
    }
  ]
