# Step 5 adjudicate: initial, round 1, unit 23

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-23-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u23.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"23",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 21:lem-finite-type-a-tensor-hecke-bars-and-complementary-coefficient-charts, 23:def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality, 24:def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks, 25:thm-the-highest-weight-fock-submodule-has-the-qg-global-bases, 26:ex-four-fock-bases-in-a-small-two-factor-tensor-space, 27:thm-residue-translation-functors-give-the-integrable-fock-space-action.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-finite-type-a-tensor-hecke-bars-and-complementary-coefficient-charts",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The formulas require an unstated equal-multiset hypothesis. With one tensor position and distinct letters a,b, all sorting and longest permutations are e and K={e}; both formulas give 1, but the actual off-diagonal coefficients U_{a,b} and D_{a,b} are 0.",
      "context_sha256": "965f9114c31fba6ed00bf39f818f442c3b8ea34fc7b4ffe3e5e77051b0be5c29",
      "item_sha256": "af7d582eea73b23cfb69abc24932bba048eb9d400e2ab8e153045b5950e6e29e",
      "at": "2026-10-11T15:13:46.234Z"
    },
    {
      "id": "def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 1.1–2.1 apply semisimple category-O and central-character interfaces to gl_n, which is not semisimple. No extension or reduction to sl_n with fixed scalar centre is supplied, so the cited hypotheses are unmet.",
      "context_sha256": "e987ad34bdc3673063e0d5d60cd632ee740070573d6ceefa945651518882f562",
      "item_sha256": "bb0d53681a31a383411485a54d43f98ff226ef4caac35421d9493fae0b59bb53",
      "at": "2026-10-11T15:12:23.509Z"
    },
    {
      "id": "def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 inaccurately restates the duality supplier: its interface concerns semisimple g and does not assert compatibility with finite tensor factors or block projections. Step 3.2 invokes those additional assertions to prove the claimed gl_n duality compatibility.",
      "context_sha256": "04611f0f7a4481c98d58a8f1297b7e9fa377a897fc395f9a8747655128a8f20b",
      "item_sha256": "2f0990b25916ea3a4ae77b68969fc6399ba5386902d3264a121eaaeec5a28758",
      "at": "2026-10-11T15:12:02.755Z"
    },
    {
      "id": "thm-the-highest-weight-fock-submodule-has-the-qg-global-bases",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 inaccurately restates F1: its supplied interface establishes neither that T_{A↑} is the library lower global basis nor that π is C₀-adjoint. These essential premises, including the claimed delta pairing, are not proved here.",
      "context_sha256": "7ad093bfbcb06ed09acdf11b64b3a2980a840621ed711390b83b2ee09b6adfb5",
      "item_sha256": "0a975c0c718309facfdd943cf1ba53df3833088c5ee183ffcfd0965ef00cd51d",
      "at": "2026-10-11T15:12:08.477Z"
    },
    {
      "id": "ex-four-fock-bases-in-a-small-two-factor-tensor-space",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The pairwise-distinctness claim contradicts the supplied cex-canonical-and-quasi-canonical-bases-need-not-coincide interface, which asserts T_A=P_A on every label in this model; this item instead gives T_10=M_10+s^{-1}M_01 and P_10=M_10.",
      "context_sha256": "fec7dea87325d9d6a85b6839976e009bac1d158ed6c58243d04ae5f7afbbb7c8",
      "item_sha256": "99564461c63ea95109d421e3dfde6b76778c7bb73cf01e8db13319b8c8bc370d",
      "at": "2026-10-11T15:13:20.525Z"
    },
    {
      "id": "thm-residue-translation-functors-give-the-integrable-fock-space-action",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 strengthens F1's 'not generally the entire tensor Fock module' to 'not the whole Fock module'. At the permitted level l=1, F(Λ)=V(Λ_m) is irreducible, so its ground class generates the entire Fock module.",
      "context_sha256": "6641f5e50601cd67cea026c84d09907bea76698ac156777b86012fb23fa27e7d",
      "item_sha256": "9b04d7eb95a9c7c4a245b9641f728eee93e73e290198b68ebed2d153bc676352",
      "at": "2026-10-11T15:12:20.992Z"
    }
  ]
