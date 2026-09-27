# Step 7 adjudicate: initial, round 1, unit 17

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u17.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned frozen-frontier items, including published items if they belong to that frontier. Outside consumers are handled separately by consumer maintenance, never by this repair/adjudication task. Record their affected uses; do not edit them, rejudge them, or treat outside findings as frontier gate blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-35-ten-categories",phase:"initial",round:1,unit:"17",input_sha256:"6633f07f32d31f9c22bad6cbabdc3a480c1e46dea00812a35534131748b37a18",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-35-ten-categories --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of consumer IDs affected by a Statement/Definition change; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "def-type-a-soergel-bimodule-for-a-simple-reflection",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The small-n claim is false: even with no simple reflections, the Bott–Samelson category includes shifts and finite sums of R, such as R(1) and R⊕R. It is not a trivial category with a single object.",
    "context_sha256": "c4a1f3d19a275cfd9e596598165a418dffa175a2f01ffc0e9b90fbc399e8d0b0",
    "item_sha256": "372a93c87e9e43372ed3a4c6ba34908b2f44cd265832c4ba398adbe019517352",
    "at": "2026-09-27T02:16:14.426Z"
  },
  {
    "id": "def-the-type-a-soergel-category",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The stated degree-zero morphism spaces are not R-modules under the natural scalar action: End(R)=R_0=Q, but multiplying the identity by x_1 gives a degree-2 map. Thus BSBim_n is not R-linear with the morphisms specified.",
    "context_sha256": "367ea921d0efaa3d766b5bf71a5703e118e3e508d8e7894648dd0c9f53a94129",
    "item_sha256": "b1598246f74bfca0fbf0831fc9555d9fa9c8d8ca3b13643b6aa2cdac3294a77d",
    "at": "2026-09-27T02:16:17.039Z"
  },
  {
    "id": "def-bott-samelson-bimodule-of-a-word",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The definition calls a word a sequence (which the library defines as a function on ℕ) but writes it as the finite tuple (i₁,…,iᵣ). Such a sequence has no finite length r or empty case, so the stated domain of B_{\u0015f1} is ill-defined.",
    "context_sha256": "1a58f79d3c264c5880a8ca601bd12c0b1c539ade9e8295b78a2781df468d8b3e",
    "item_sha256": "de7aabb81cd5d7485d3641901294783d31275103bfd28aae8831bc2eb0e1020b",
    "at": "2026-09-27T02:16:21.990Z"
  },
  {
    "id": "thm-rank-two-type-a-soergel-bimodule-decompositions",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F3 inaccurately restates the cited S_n action: the dependency defines w·x_a=x_{w(a)}, while F3's inverse-substitution formula gives w·x_a=x_{w^{-1}(a)}. These differ for a 3-cycle.",
    "context_sha256": "e5aebefdf7c11fda97c2ce718f34d4bd6f91288cf77e2d04926c693511bfc66f",
    "item_sha256": "2a249f3be04accd58d28e6e2c76c9370c820a6c60e8bedd75d71d312860ae1ac",
    "at": "2026-09-27T02:16:30.053Z"
  },
  {
    "id": "def-type-a-standard-graph-bimodules-support-filtrations-and-character",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Remark (d)(7) falsely extends the lower Bruhat-layer claim to Δ-flags. For B_s and y=s, the rank-one sequences give (B_s:Δ_s(0))=1, but Γ_{≤s}B_s/Γ_{<s}B_s≅R_s(1), whereas Δ_s(0)=R_s(-1).",
    "context_sha256": "db4fa455b5f9486e525b204541d3f39da9b6212345293a06c1d8d726af7e2625",
    "item_sha256": "c6641f2b2fa80060e0bf7421bcc99533f50b51a1a7424e79a80c75d8a0cf2572",
    "at": "2026-09-27T02:16:32.696Z"
  },
  {
    "id": "thm-the-type-a-soergel-hom-formula",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F2] falsely says finite sums of shifted Bott–Samelson bimodules are closed under summands. In type A₂, the rank-6 longest bimodule is a summand of the rank-8 word sts, but is not such a finite sum. This misstates the cited dependency.",
    "context_sha256": "02fbb0d1b5b51401e0d301e439127c4e415bbdfd84f0f0f81fc447d926f421da",
    "item_sha256": "78b3005861d56e5e7d93941636f4c280f2201401f15f98f54fcecb040e79acd7",
    "at": "2026-09-27T02:16:34.543Z"
  },
  {
    "id": "lem-type-a-soergel-special-hom-formula",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 1.4 applies the character recursion to an arbitrary M in F_Δ, but the cited recursion requires M in F_Δ∩F_∇. The statement does not assume a ∇-flag for M, so the induction does not cover its first case.",
    "context_sha256": "c0fdb16a1555a14bb4ed75843379a72f431b8f3241539747d53276d36dae622f",
    "item_sha256": "ac43c23426e139bb1a7c521767ed428ffcc51a5c11f677f7caad00f1f8722989",
    "at": "2026-09-27T02:16:34.835Z"
  },
  {
    "id": "thm-indecomposable-type-a-diagrammatic-soergel-objects-are-indexed-by-permutations-and-shifts",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 4.1 treats the diagrammatic object D_w as a graded R-bimodule and assigns it a least nonzero degree. No cited result identifies D_w with a bimodule. F4 classifies objects only up to shift, so the claimed uniqueness of d is unproved.",
    "context_sha256": "b19f757f4b6008822a315273fed04b91a7a22bda68f63c274ea084ec7d6d64eb",
    "item_sha256": "b736a6ed12fdb3e0cb6487b1861a707b9bf03aa6d7b830cbe941d991272a222d",
    "at": "2026-09-27T02:16:40.514Z"
  },
  {
    "id": "lem-type-a-support-filtration-multiplicities-are-intrinsic",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 2.1 constructs a filtration that need not be a Δ-flag. For n=2, take M'=R_e and M''=R_s: concatenation gives 0⊂R_e⊂M, but a Δ-flag must refine Γ_{≥1}M=R_s. The claimed additivity does not follow from this step.",
    "context_sha256": "2c19cb6b053f7c7a91a010a69bbb3e661a0b8c8cd8015ef3d3e85d863e27f357",
    "item_sha256": "06dedd26cc0014daa06a82ef8ace76a50a90ec3c5b22b41f2d8132fa80b160e9",
    "at": "2026-09-27T02:16:51.309Z"
  },
  {
    "id": "def-type-a-reflection-realization-and-polynomial-ring",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The small-n clause defines a category with only R and its identity morphism. For n=1, the supplied Soergel interfaces require an additive graded category with shifts and End^0(R)=Q, including zero and scalar maps. These categories cannot agree.",
    "context_sha256": "88d144957eeb2e1dd57d0405b55dd6620fb6a6f2f411f4f4279b1cd9e29ab2b8",
    "item_sha256": "793fb9ada682d308711c97fc51e827ec03bdfdd6e53504e0b339ea877c766959",
    "at": "2026-09-27T02:16:55.578Z"
  },
  {
    "id": "thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The light leaves are declared to lie in Hom_D(underline x,w), but w is a permutation, while objects of D are words. Construction 6.1 requires a chosen reduced word for each w, shared by both leaves; without it the double-leaf composite is undefined.",
    "context_sha256": "6756c2bfdbceda7cf56bac76e586f6ffd74872f933559633daba999aeb2e0523",
    "item_sha256": "cd0650399edde5a7b8e4b4a8a36987f2944c5c0efedb76003717ac6e745cad25",
    "at": "2026-09-27T02:16:58.582Z"
  },
  {
    "id": "ex-the-type-a-two-rank-two-soergel-decomposition",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Claim 2 is ill-typed: κ_s maps B_s⊗_R B_s to B_s, yet is evaluated on three B_s elements and said to return two. Likewise μ_t:B_t→R is evaluated on u_t⊗u_t. The claimed basis calculations are invalid.",
    "context_sha256": "4b702aaaf0bdd4e82d85271eba056e9a8ebbcf0a779fe0bbbc09ac8bebcf305d",
    "item_sha256": "570297615a7676dc04ea78c039348f8da2dad5cdccbc1c844973513f7f76e976",
    "at": "2026-09-27T02:17:05.663Z"
  },
  {
    "id": "lem-the-type-a-standard-character-is-multiplicative",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 1.1 applies F2 to every Soergel object, but F2 covers only objects already in FΔ∩F∇ and summands already known to lie there. No cited dependency establishes this for arbitrary Karoubi summands, so the characters’ descent to the whole split K₀ is unproved.",
    "context_sha256": "4d0be1716a4748942559bff4d2128a3dfb5b651d53ec0fefa20702081d208959",
    "item_sha256": "2ff16e3ee7fafe7e2c705e49ec33f5d5cdae8f640f669e91cae5db13363677ab",
    "at": "2026-09-27T02:17:13.988Z"
  },
  {
    "id": "lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 2.2 falsely says the normalized Δ/∇ index changes by ±1 at every letter. F4 gives no index change on a graph-changing branch: Δ_e(0) contributes Δ_s(0) for the one-letter word (s). The stated index bookkeeping contradicts the cited recursion.",
    "context_sha256": "2577b9ebba8f537d955cf319ad7204c40c091144ed7310dcb082ad61e6c13430",
    "item_sha256": "c805b4f8c0958ed9bfc6c77511db584ecc5a0d0dc157baf645dfd5562727e4cc",
    "at": "2026-09-27T02:17:31.615Z"
  },
  {
    "id": "thm-evaluated-double-leaves-form-bases-of-type-a-soergel-bimodule-homs",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 2.2 rests on an inaccurate source restatement. Libedinsky §6 transports a unit-target light-leaf basis but does not identify its images entry by entry with vertically flipped double leaves. Elias–Williamson Remark 6.10 distinguishes flipped and rotated constructions. Thus st",
    "context_sha256": "b7d809801d2a325901811970e29ee22bac8b86338fd5a1b9a5624ce308f37d96",
    "item_sha256": "cf9c520c3caadf1c3bf8d34e7285d47e015f951c9a2be2dd58d3e6ecc79d4d3b",
    "at": "2026-09-27T02:17:52.997Z"
  },
  {
    "id": "def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The one-colour presentation misstates a defining relation: Elias–Williamson (5.5) kills the needle, a loop attached to a strand, not a “circle with a dot.” See [Soergel Calculus](https://arxiv.org/pdf/1309.0865).",
    "context_sha256": "10174c2fc757297626a14452d2bd52158aca3e229776a2d50b2d0ccf36f9f9ba",
    "item_sha256": "8ec36762deb7eba46336513f440756e434441503a5527b620b9c21a6aa3ffeac",
    "at": "2026-09-27T02:18:52.069Z"
  }
]


