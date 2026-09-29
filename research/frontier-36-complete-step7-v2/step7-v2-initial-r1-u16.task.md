# Step 7 adjudicate: initial, round 1, unit 16

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u16.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-36-complete",phase:"initial",round:1,unit:"16",input_sha256:"eb847670bab40a2439e5cdb871b71db529fdcd8349675a0f63eb1fb3e18045de",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-36-complete --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

Assigned item order: 0:lem-affine-algebraic-group-faithful-rational-representation, 2:thm-leray-spectral-sequence-for-sheaf-cohomology, 3:lem-semisimple-minimal-parabolic-root-subgroup, 8:lem-semisimple-projective-orbit-flag-quotients, 10:lem-projective-space-top-cohomology-residue-pairing, 10:thm-semisimple-flag-variety-smooth-projective, 11:thm-borel-characters-classify-equivariant-line-bundles-simply-connected, 13:lem-regular-immersion-koszul-ext-sheaf, 13:thm-serre-duality-projective-space-coherent-sheaves, 13:ex-sl2-flag-variety-line-bundles, 14:lem-regular-immersion-local-to-global-ext-collapse, 15:lem-smooth-projective-rational-point-koszul-residue-normalization.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "lem-affine-algebraic-group-faithful-rational-representation",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 6.2 is false: coassociativity gives Δ(a_kj)=Σ_i a_ij⊗a_ki, not the stated matrix identity. Hence Φ need not preserve comultiplication, so steps 8.1 and 11.1 do not establish a group homomorphism or rational representation.",
    "context_sha256": "c4adb040a9bb84823f0a2182d7e8aba524ec1ed50396bc04f470e032d599628b",
    "item_sha256": "53a9b12b6e09f66942ac91fcda3d36412cd754fe6c3e3b94ce37a7a78cc880af",
    "at": "2026-09-29T11:32:27.631Z"
  },
  {
    "id": "thm-leray-spectral-sequence-for-sheaf-cohomology",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 5.3 does not prove the module claim for arbitrary schemes. On X=Spec(F_p), every O_X-module is injective, but the underlying abelian sheaf F_p is not injective. The cited flatness argument applies only under an unstated C-scheme restriction.",
    "context_sha256": "ce40d8f2a051c80902b9d7c9474934f60946aea4f611cac8ae34b903c6d10069",
    "item_sha256": "3d90a1fbe24657b6fa5a90e660355d7ef461a134572507208c7d741efca84446",
    "at": "2026-09-29T11:32:57.665Z"
  },
  {
    "id": "lem-semisimple-minimal-parabolic-root-subgroup",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F11] and step 8.1 describe [F10] as having a countable-choice interface, but both supplied [F10] dependencies assume full AC. This is an inaccurate dependency restatement.",
    "context_sha256": "ce73cafdda965929e5c19ee6ee9082bcace9da2dd1a191cdc0260adbb946dbbe",
    "item_sha256": "5410194bad8ee60b8e44256301a10ec95e2de9c49cd9780649fb3a9089c5aada",
    "at": "2026-09-29T11:33:34.183Z"
  },
  {
    "id": "lem-semisimple-projective-orbit-flag-quotients",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F3] inaccurately restates the cited BCH theorem as a global finite-product formula. The dependency guarantees it only for pairs in a local neighborhood, so it does not justify step 1.3 for arbitrary u∈U.",
    "context_sha256": "e93354fc528a448aae458b2e50c4553e537b5b2e46ed30466f149cf9478fe9d8",
    "item_sha256": "e52e78f92635ffb6f8b097ad1b86fc1cc8b809aa357719c00e078fecae79186a",
    "at": "2026-09-29T11:32:40.753Z"
  },
  {
    "id": "lem-projective-space-top-cohomology-residue-pairing",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F3] overstates its cited theorem: the supplied interface gives cohomology groups and Laurent-monomial bases, but no Čech identification or rule for polynomial multiplication on those classes. Step 2.1 needs that rule to compute the cup product, so the duality proof is unsupporte",
    "context_sha256": "7c1e8e15decef2a5235d3c29ac2a7bcdaf06b083d9d779ae3022efe915a3e342",
    "item_sha256": "643efff20c8b19abf6bdd294b2bca6631b384c6e4f585f6f1e3d99cefeb1977e",
    "at": "2026-09-29T11:32:03.421Z"
  },
  {
    "id": "thm-semisimple-flag-variety-smooth-projective",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The definition allows the trivial semisimple group, for which Δ is empty. The projective-orbit and torsor-chart lemmas both require a choice of α∈Δ, so [F3], [F4], and step 2.1 cannot invoke them in this case. No separate argument covers it.",
    "context_sha256": "8a63b77d9b57cfb1b1a9a03075b9686c295213ba9ecc4b7e1d86cc3a7aeecaa7",
    "item_sha256": "e5f7a6fee2d3c141ab8d22d366a22e31970c226c2102a7cf0f01c6cbf1ebd345",
    "at": "2026-09-29T11:32:30.342Z"
  },
  {
    "id": "thm-borel-characters-classify-equivariant-line-bundles-simply-connected",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 2.2 reverses the sign: if χ=−λ, the bundle associated to −χ is L_{−λ}, not L_λ. The cited definition gives L_λ=G×^B C_χ in this case.",
    "context_sha256": "4cc9c15fa3a41db1ebca03ac87368bd199cf0bc567182c94759c24ae1efce916",
    "item_sha256": "b7b975bf5bb6b463bbaf7b2c4fb0d181e2a2548d67d33da472366b785d602060",
    "at": "2026-09-29T11:32:29.369Z"
  },
  {
    "id": "lem-regular-immersion-koszul-ext-sheaf",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F10] attributes exactness and the left adjunction of module extension by zero to the cited lemma, but its supplied interface asserts only flasqueness of injectives and Ext from the structure sheaf. Step 3.1 relies on that unsupported restatement.",
    "context_sha256": "6717cb7038bc85de5ff5b3bc1c56fdf14cbbe57eaa10d1ec56c8451de0d07d0c",
    "item_sha256": "9f7381960b0563b5ece43481fd77a9e78d8c5c0f8af563cf04db9585b1efb21c",
    "at": "2026-09-29T11:32:31.017Z"
  },
  {
    "id": "thm-serre-duality-projective-space-coherent-sheaves",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F6] misstates the cited cohomology theorem for n=0: on P^0_k, H^0(O(e))=k for every integer e. Step 3.1 then falsely claims both spaces in the twisting-sheaf pairing vanish when d<0, so its proof of the base case fails.",
    "context_sha256": "6e0ceb765078216c4f422c170cbbb0446da3f1b2b0a90d80f3fef1d20dee8e70",
    "item_sha256": "22ebc55f1d49a10372bad592296e757487b327ea2f14a12f91dd556c48a571fc",
    "at": "2026-09-29T11:31:53.288Z"
  },
  {
    "id": "ex-sl2-flag-variety-line-bundles",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F6] misstates the cited theorem: in rank one, f:P¹→point is the unique constant map, not the identity on P¹. Step 2.1 repeats this ill-typed claim.",
    "context_sha256": "cdac5e9cd6d5bdd49f31ce6bc60353b24722df95cc4b702b809eb82b4840e826",
    "item_sha256": "61817614b5739d867a1747f6cc521535179e79fb90258326dc7af2cfcf359ed9",
    "at": "2026-09-29T11:33:02.676Z"
  },
  {
    "id": "lem-regular-immersion-local-to-global-ext-collapse",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 7.1 relies on signed comparisons absent from both cited interfaces: [F11] states no sign for Ext-to-derived-Hom, and [F3] states no signed Hodge-chain map. The claimed normalized orientation and Laurent-trace comparison are therefore unproved.",
    "context_sha256": "22e778a5a640301f247922f738448d65adb16d5d00eb96780a5bd71469faa8f1",
    "item_sha256": "119e72474cdc62613ea7aa29f703e8c100ae77c55490c61e7d3e42418937e213",
    "at": "2026-09-29T11:32:07.968Z"
  },
  {
    "id": "lem-smooth-projective-rational-point-koszul-residue-normalization",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 3.1 has the wrong Yoneda sign. For c=n=1, lifting the raw t-class to K(f)[1] sends the top wedge of K(f,t) to −e_f, so its composite with the raw f-class is − the raw ambient top cochain, not +. The claimed sign cancellation fails.",
    "context_sha256": "deb00d6e2fe877e4caaf2affb9fc327e32a20026fb35dd6a14efcc17702d2b0e",
    "item_sha256": "b66191598aea3aedfe1ae8c3c7ebc683318d7bafd948ad518a577fe1b2f96e5e",
    "at": "2026-09-29T11:33:49.765Z"
  }
]


