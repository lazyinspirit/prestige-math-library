# Step 5 adjudicate: initial, round 1, unit 91

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-91-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u91.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"91",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-dimer-central-force-hessian-vector-error, 1:alg-finite-image-string-method, 1:def-validated-eigenvalue-enclosures-for-an-index-one-hessian, 1:lem-centered-chord-and-unequal-step-tangent-error, 2:lem-arc-length-polyline-interpolation-error, 2:ex-curved-double-well-has-a-circular-minimum-energy-path, 3:alg-index-one-eigenvector-following-step, 3:thm-dimer-mode-perturbation-and-local-saddle-error, 4:thm-dimer-mode-error-contracts-local-saddle-translation, 5:ex-zero-discrete-neb-residual-does-not-fix-a-continuum-path.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-dimer-central-force-hessian-vector-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 applies the total-derivative chain rule to ∂jV, but the supplied C^k definition gives only continuous coordinate partials. No cited fact establishes total differentiability from those partials, so the claimed line C^3 regularity and Taylor step are unsupported.",
      "context_sha256": "95a2b064d0a221ff82ec479cd7043fdb7b2e51b248667df267be1d63e740d3eb",
      "item_sha256": "d747ed49ec623757dd0b5752dc6686213e64949f278d8b46cfd81b594d70eb29",
      "at": "2026-10-17T01:55:09.571Z"
    },
    {
      "id": "alg-finite-image-string-method",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Finite images can still overflow when segment lengths or cumulative lengths are computed. Step 4 has no nonfinite check or failure branch; an infinite total makes the target lengths and segment lookup undefined, so the algorithm need not return a specified status.",
      "context_sha256": "6b4460c76845c86b7bdc434bb0e466db1754b8b7dc6c02ddde9b185b4742b716",
      "item_sha256": "2a3f28ca3443d36ed21d683c70ca959e6d87e96aef68395588875d5f4b739399",
      "at": "2026-10-17T01:55:14.938Z"
    },
    {
      "id": "def-validated-eigenvalue-enclosures-for-an-index-one-hessian",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The source locator says Henkelman et al. §I defines the interval-certificate format and proof obligations, but the paper discusses NEB and saddle-point search and contains no validated eigenvalue-enclosure certificate. This misattributes the item’s central format.",
      "context_sha256": "487b40f889208ac0b5dad61134477a3376bd4637fbe556e60b1fc7196929dddf",
      "item_sha256": "9e421dfd4b3308d638a630924f61a0cd0d063b4212bce16ad609a06829ef1294",
      "at": "2026-10-17T01:55:13.109Z"
    },
    {
      "id": "lem-centered-chord-and-unequal-step-tangent-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates its interface: it defines the unit tangent of a regular path but says nothing about arc-length parametrization or ||R'(s)||=1. Step 2.1 cites F1 for that norm (also at s potentially outside [0,1]); the unit-speed hypothesis supplies it, but the dependency restatemen",
      "context_sha256": "730acc1569f85a2f534e8499521778bd365907ad6a2ccd237368dd7dd4815558",
      "item_sha256": "0bec1a017fdc31cbbf544a88aa6b0eac7a3556e67c82f49b43fcfb14729149a1",
      "at": "2026-10-17T01:55:07.494Z"
    },
    {
      "id": "lem-arc-length-polyline-interpolation-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates its cited interface: def-regular-minimum-energy-path-in-a-collision-free-tube defines regular paths, tangents, and the MEP condition, but says nothing about arc-length parameterizations having unit derivative. The proof cites a dependency fact the interface does not ",
      "context_sha256": "5e1766e83d3fcc6f63770fde18aab13ef0f13587fcecdb1da5fe8527e4075d71",
      "item_sha256": "f1ea57bacd01b6ee830509a6c318c411bb03664b764e7879f1b1d046a2fb5974",
      "at": "2026-10-17T01:55:11.962Z"
    },
    {
      "id": "ex-curved-double-well-has-a-circular-minimum-energy-path",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The MEP definition requires the supplied domain U to avoid the model’s prescribed forbidden set C_bad. The example neither specifies C_bad nor verifies U⊂R²\\C_bad, so it does not establish the hypothesis needed to call R a regular MEP.",
      "context_sha256": "3ecff75996f3a9c14d11d2fdb2e733c54bca9b7d762e5c35e45feb96fa07daaa",
      "item_sha256": "9bf18ab98e587e355b4b34cd66d8eb2ffb7735b6c869062d0be1da544303eb6b",
      "at": "2026-10-17T01:55:26.564Z"
    },
    {
      "id": "alg-index-one-eigenvector-following-step",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: no eigensolver or eigenpair data is an input or dependency, and no call or instructions produce Q, λ̂_j, or validated intervals. Step 2 cannot run from the declared inputs; the enclosure definition explicitly does not supply an eigensolver.",
      "context_sha256": "e0cc04c8c47fb9600e03e1100b36c9573d4777a522e9ae922a220e8c98729e71",
      "item_sha256": "a8ec5725b7420080de444cdc88a1adb0972d0a2c8618f4dfa03e9834523706eb",
      "at": "2026-10-17T01:55:14.434Z"
    },
    {
      "id": "thm-dimer-mode-perturbation-and-local-saddle-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The local certificate requires H to be L-Lipschitz in the induced Euclidean operator norm; the Statement and A4 only say “L-Lipschitz,” so the bound Lρ/γ≤1/2 need not meet the cited theorem’s hypothesis.",
      "context_sha256": "461d9d78fece0b123dc7836a9e0357ebcc4735c5298aa0d9ecb0813ee8d53c67",
      "item_sha256": "7b96faf20741e1d0d091a4964cbd69a9587e58e6f91044921d860d821ec72e73",
      "at": "2026-10-17T01:55:17.726Z"
    },
    {
      "id": "thm-dimer-mode-error-contracts-local-saddle-translation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F1] says [A3] yields the dimer angle bound, but the cited theorem also requires a finite-difference segment in U, force-error and third-derivative bounds defining δ, and an eigenvalue enclosure. [A3] omits these, so the dependency restatement is insufficient.",
      "context_sha256": "d294ae186254465ee6844b0244bf5337002f89940c62925602824fe996ae6d4d",
      "item_sha256": "3eb80e086780c3fbf9c337685f24a8e29a99b99008a29ee0b126a30166ad9421",
      "at": "2026-10-17T01:55:35.779Z"
    },
    {
      "id": "ex-zero-discrete-neb-residual-does-not-fix-a-continuum-path",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 overreaches: missing comparison-theorem hypotheses do not prove inaccuracy, and “accurate” is undefined. Each chain’s midpoint lies on an explicit regular MEP R_c, so the example establishes nonuniqueness, not lack of accuracy.",
      "context_sha256": "74372fa2d6183d0f1aec366325956364ecf5bb0fff4dce20187a662cca96cf71",
      "item_sha256": "074752b9a6373e41bf7ab408f0bf1914470c3660c4ea987f53bcd3249ba330b3",
      "at": "2026-10-17T01:55:34.087Z"
    }
  ]
