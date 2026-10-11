# Step 5 adjudicate: initial, round 1, unit 50

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-50-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u50.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"50",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 21:lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels, 23:lem-standard-fock-vectors-expand-in-the-upper-global-basis, 33:def-graded-module-and-projective-grothendieck-groups-for-klr-towers, 34:def-graded-cartan-pairing-between-projectives-and-modules, 34:def-integral-form-of-the-cyclotomic-hecke-klr-block, 35:lem-degree-and-codegree-of-standard-tableaux.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The unqualified zero-word-space claim is false. In type A2 with λ_i=λ_j=2, distinct normalized simples have characters [2]iij+iji and [2]jii+iji. The word iji is extremal for the first but occurs in both. Uniqueness holds only among M's constituents.",
      "context_sha256": "e3ab3b719034b2ce49ebd25ef166151ae4ef73b92f0ccae0c5631c519e3e3c5e",
      "item_sha256": "f243a94ddcc7ce6430507e7faeac0269fd65dd0a427c895674c117d5f6564416",
      "at": "2026-10-11T15:33:56.422Z"
    },
    {
      "id": "lem-standard-fock-vectors-expand-in-the-upper-global-basis",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 6.1's claimed shared Specht recursion fails: at e=2 it gives E_1 Std_{11}=q^{-1}Std_1, while the supplied removable-node filtration gives E_1[S(11)]=[S(1)] since d_A(11)=0. A normalization shift is required.",
      "context_sha256": "56924b89c054557c88426fc25b02f85d57eccfe355a9fa2c00d8ff07e2271848",
      "item_sha256": "b00b08ffb63e7179b28e19f556a5e721a83e62b9aeb53bdc069aa1f23bcea064",
      "at": "2026-10-11T15:33:45.498Z"
    },
    {
      "id": "def-graded-module-and-projective-grothendieck-groups-for-klr-towers",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 asserts K0^gr(R)≅K0^gr(R^Λ) without assuming R=R^Λ. The initial arbitrary tower may have R_0=k and all other sectors zero, giving A-rank 1; the level-one cyclotomic tower already has nonzero sectors 0 and α_0, giving rank at least 2.",
      "context_sha256": "c0ec263ea59eb07c54fb364b85ea54c1e6e44293fdb4bdbc0c40a90385e1163d",
      "item_sha256": "2e4eb96dcba80ca7ff38232343807fdfc705956daa0e57e6edbb2127198d84c8",
      "at": "2026-10-11T15:33:14.650Z"
    },
    {
      "id": "def-graded-cartan-pairing-between-projectives-and-modules",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 and step 1.4 incorrectly assert a self-dual representative in every projective shift orbit. In the block R₀=k, P=k⊕k{1} has none: P{r}≅(P{r})# would require 2r=-1. The dependency normalizes only simple orbits and their indecomposable covers.",
      "context_sha256": "cca72feb9eea75cd60b365b34f461b74c517adde303640fb4cffdfa895183586",
      "item_sha256": "3204bb95149517c17cea86b06fb04b42d21cef46261080dce1ff9be0dde9db97",
      "at": "2026-10-11T15:32:59.910Z"
    },
    {
      "id": "def-integral-form-of-the-cyclotomic-hecke-klr-block",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.3 applies BK to every content, but its interface requires e_alpha≠0. When H_alpha(F)=0, it supplies no surjection onto F⊗L. Nonzero support across characteristics is unproved, so the inequalities required by 2.1 are not established.",
      "context_sha256": "f1e4f4bf1c38443a29098071a9f88056cfe75ea9f4190a90d605f45c8bdf3c3d",
      "item_sha256": "4bfd62b4ce80a7a200e5856c70be46858b44f056402268ee51f1aecb9947f97c",
      "at": "2026-10-11T15:33:59.451Z"
    },
    {
      "id": "lem-degree-and-codegree-of-standard-tableaux",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 inaccurately calls \\to_T a weak Bruhat arrow. The dependency defines it as a same-row, strictly-right relation and explicitly forbids same-row swaps as weak Bruhat edges; those edges use T\\xrightarrow{r}S.",
      "context_sha256": "5401864f074f60e4c2eaf5e210f7a2a2db2117f2ccd45e043b119fe1481b4ba4",
      "item_sha256": "cee5537085db2a2706357d421438f5da419859523710d9a05c4ead92c8c57a11",
      "at": "2026-10-11T15:33:22.094Z"
    }
  ]
