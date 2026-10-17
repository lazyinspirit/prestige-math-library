# Step 5 adjudicate: initial, round 1, unit 56

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-56-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u56.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"56",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-parabolic-bochner-l2-approximate-identity, 0:lem-parabolic-discrete-energy-identity, 1:alg-parabolic-backward-euler-averaged-forms, 1:lem-parabolic-measurable-form-operators-and-inverse, 1:lem-parabolic-weak-compactness-separable-bochner-hilbert, 1:lem-parabolic-zero-boundary-sobolev-space-is-separable, 1:thm-parabolic-finite-dimensional-measurable-ode, 2:lem-parabolic-energy-pairing-and-trace, 3:thm-parabolic-variational-wellposedness-and-energy-stability, 6:ex-parabolic-semidiscrete-ritz-error-identity.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-parabolic-bochner-l2-approximate-identity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 bounds the integral by sup_{|s|≤ε}, but the cited bump may have support outside [-1,1]. Its rescaling is only guaranteed inside [-Rε,Rε] for some R, so the stated bound is not justified.",
      "context_sha256": "baeaacd062554b75611ee68c38229478591882d2d50d1cf847ed487969c8734e",
      "item_sha256": "c1dba4c6bbcdb89c5bfb0935ede3bee56f121d7ec2a180c69b8b6afb169a7eae",
      "at": "2026-10-16T18:09:19.882Z"
    },
    {
      "id": "lem-parabolic-discrete-energy-identity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The unqualified title claims a Hilbert-space identity, but the library defines Hilbert spaces as real or complex. For H=C, x=1, y=i, the displayed formula fails; qualify the title as real or include the real part.",
      "context_sha256": "c94cd48c4f5a8a12c422c2ca9f486926c07f04a1692fd71f2812684bfbb24c36",
      "item_sha256": "b2d916312b25f13026271e7b7ded2ed53ba9ddb829c14ef3b2b7554139cb5d06",
      "at": "2026-10-16T18:08:48.335Z"
    },
    {
      "id": "alg-parabolic-backward-euler-averaged-forms",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The declared form dependency is symmetric, but the input contract omits symmetry and admits nonsymmetric coercive forms (e.g. on R², a(x,y)=xᵀ[[1,-1],[1,1]]y). This broadens the dependency interface without a stated justification.",
      "context_sha256": "16c69927ac41852a0c241761013e703860d24a8f999600c3706a2f01dd388015",
      "item_sha256": "e8d75dc81810fed113ffbbd16b5d4f26fa8d022b217931c0946fe308db527480",
      "at": "2026-10-16T18:09:13.657Z"
    },
    {
      "id": "lem-parabolic-measurable-form-operators-and-inverse",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 omits the Countable Choice hypothesis required by the supplied Riesz theorem, and A1 incorrectly says it is used only by F4. The item assumes Countable Choice globally, so the proof may still work, but its dependency restatement is inaccurate.",
      "context_sha256": "529398143b63c426ee10bbd6df160a01ffb61b0201a1a53b3f4f8f295437dfbb",
      "item_sha256": "deb3d08b1b09d7aaf9a5261b3561c6505a4d99c84cac7132bc23bd0325e4898a",
      "at": "2026-10-16T18:09:13.671Z"
    },
    {
      "id": "lem-parabolic-weak-compactness-separable-bochner-hilbert",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 is not licensed by [A1]: ACω selects from a countable family fixed in advance. Each next convergent subsequence depends on the previously selected one, so ACω alone does not justify this recursive nested extraction.",
      "context_sha256": "e2abdc81b556450e0c01ef1f30687db6d0ae49916cf816eed1e672d96eb66ee3",
      "item_sha256": "f958b59583cceb777932b753077cb24aab8b3054d0e8d8d404b03fd127a537f6",
      "at": "2026-10-17T01:43:23.277Z"
    },
    {
      "id": "lem-parabolic-zero-boundary-sobolev-space-is-separable",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 attributes zero extension as an isometry to the cited density lemma, but its supplied interface only states smooth-function density. Step 1.2 relies on that unsupported claim to prove H separable.",
      "context_sha256": "064b6468efa485eb6c79d7dbdf855797209b49c84ea61da4aa9c4b30b5dce57e",
      "item_sha256": "a4493cb0fabf3d78fbbb9b4279d500b90d9dbbbb433f8868d251fbe9b599db7c",
      "at": "2026-10-17T01:42:58.736Z"
    },
    {
      "id": "thm-parabolic-finite-dimensional-measurable-ode",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "In step 2.1, Φ(c)(t) uses the input value c(s) instead of the prescribed initial value. Thus the claimed contraction bound omits |c(s)-d(s)|, and the map does not enforce u_h(s)=u_h^0; the existence and uniqueness proof fails.",
      "context_sha256": "5f162f34bfd8281cbc9d6709a3031897e3a43fb322131a44ce90ea2002608716",
      "item_sha256": "1d020b6060bdcb41f3121f13aa37619245840e3807f1f0e0617645136a78bee1",
      "at": "2026-10-16T18:09:13.103Z"
    },
    {
      "id": "lem-parabolic-energy-pairing-and-trace",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 overstates the mollification dependency: its supplied interface assumes Countable Choice but does not say it is required for scalar translation or Bochner L² approximation. That necessity claim is unsupported by the cited item.",
      "context_sha256": "a9c0951ac29463a11c6e89ec82b1f78675fba25f9429b42cf50d385d0899d7e8",
      "item_sha256": "ea880f8a9e6af12b1eac8500fa3f2f5158baa347d295ae5492b2a0d7fbbff080",
      "at": "2026-10-16T18:09:24.111Z"
    },
    {
      "id": "thm-parabolic-variational-wellposedness-and-energy-stability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.1 chooses v_n with ||iv_n-u_0||_H<1/n, but sequences start at n=0, so the n=0 condition is undefined. Use 1/(n+1) or specify n≥1; as written, the approximating sequence is not defined.",
      "context_sha256": "e3395715057df7742b8da61581d32cc8f0a0c11a642d0af658a0cc1b2d151b19",
      "item_sha256": "5c752f38399a9f2282b9ddd46c34c5303b5cdcc9a08e7e2d8ae801a80f01d67e",
      "at": "2026-10-17T01:42:56.105Z"
    },
    {
      "id": "ex-parabolic-semidiscrete-ritz-error-identity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 claims the cited Poincaré result gives ‖v‖L²≤‖∇v‖L², but its interface supplies only an unspecified C(2). Thus the claimed coercivity constant α=1/2 is unsupported by the cited dependency.",
      "context_sha256": "605290c2f238c2c41543c3f583c84c4258187a49ce748fcb639860a1131fba69",
      "item_sha256": "f32d6d73a553803c2ccfd4ee79795b41504286dece9ee79cd7cf2823d3789d06",
      "at": "2026-10-17T01:43:11.796Z"
    }
  ]
