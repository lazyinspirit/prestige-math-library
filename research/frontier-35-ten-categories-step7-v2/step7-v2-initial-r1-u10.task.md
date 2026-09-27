# Step 7 adjudicate: initial, round 1, unit 10

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u10.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned frozen-frontier items, including published items if they belong to that frontier. Outside consumers are handled separately by consumer maintenance, never by this repair/adjudication task. Record their affected uses; do not edit them, rejudge them, or treat outside findings as frontier gate blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-35-ten-categories",phase:"initial",round:1,unit:"10",input_sha256:"6633f07f32d31f9c22bad6cbabdc3a480c1e46dea00812a35534131748b37a18",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-35-ten-categories --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of consumer IDs affected by a Statement/Definition change; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "def-transfer-homomorphism-for-a-finite-index-subgroup",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The left-coset remark gives t_α⁻¹xt_α as the analogous factor, but it need not lie in H: take α=H, t_α=1, and x∉H. The correct factor is t_{xα}⁻¹xt_α.",
    "context_sha256": "9dbf2da1f4effb9fafbe8559e77cd2875d895cdb6dcc338019a650d4a3daf28e",
    "item_sha256": "37fa1255d0ad9987d8fbc20d15cc30ab0cab82824339c12a2de1745784143460",
    "at": "2026-09-27T02:07:28.433Z"
  },
  {
    "id": "def-p-prime-core-of-a-finite-group",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The closure proof uses Euclid’s lemma to infer that if p divides |M||N|, it divides |M| or |N|. Neither cited dependency states or establishes that lemma, so the key step showing MN has p′-order is unsupported.",
    "context_sha256": "05db21d552bffbae7fa2663bb3231fde5516569736a48ae3984664d203788465",
    "item_sha256": "3829b4ca0ea0cd591ce6d144d3f6202889a5e8e6c0246ed657ac4a68cf2fee17",
    "at": "2026-09-27T02:07:31.906Z"
  },
  {
    "id": "lem-frobenius-character-extension-is-irreducible",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F1 attributes virtual-character status to the construction lemma, but its interface asserts only values of the class function. The virtual-character definition does not establish that induction preserves virtual characters. Step 4 relies on the unproved integer expansion.",
    "context_sha256": "91fdeb818b1a1201a74292633908ff0d5ef08e812be8af22a52406fc2bca19a2",
    "item_sha256": "dbe310d9532211eda78258a593d576bb48fefaef145c9bacc4bc1a1018b5d960",
    "at": "2026-09-27T02:07:40.468Z"
  },
  {
    "id": "lem-fusion-control-gives-a-nontrivial-p-quotient-of-the-p-residual",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The title falsely claims fusion control gives a nontrivial p-quotient of the p-residual. For G=C_p, P=G controls fusion but O^p(G)=1, which has no nontrivial quotient. The proof derives such a quotient only under the contradictory assumption P∩O^p(G)≠1.",
    "context_sha256": "f8774d3b6362a3dde585483c74a2804ba484a377ead37717d47d1b18ade586e8",
    "item_sha256": "8b8620e9dc3795ebbb0d7df14998795cbdb1ea742d37a247aeadc8f8ac18833f",
    "at": "2026-09-27T02:07:46.609Z"
  },
  {
    "id": "ex-frobenius-normal-two-complement-for-s3",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Assertion 2 and step 2.1 misstate the local quantifier: for fixed P, the only eligible Q is P, so condition (b) contains only N_G(P)=P. Across S_3, the three order-2 normalizers are conjugate, giving one class up to conjugacy, not three.",
    "context_sha256": "b6f7c5cb62dd7304c60bd24559c354980fe7ff242157a0c8bc5bac7779a2e723",
    "item_sha256": "c5b5d5c79b62c2413a3cc8147d7ab32cf5ef56501dbed7bbcef08fcf729dd09d",
    "at": "2026-09-27T02:07:48.950Z"
  },
  {
    "id": "lem-proper-subgroup-of-a-finite-p-group-is-properly-normalized-local",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F6] reverses the strong-induction premise: it says truth at order N implies truth at smaller orders. The cited theorem requires truth at all smaller orders to imply truth at N. This is an inaccurate dependency restatement.",
    "context_sha256": "3ebd8cf8b635b9b8705d3dddd7b310236752acb3ebef692a61fd235ded5ed1fc",
    "item_sha256": "775a19aaa015ad04853aee35fd1643589c79250438f79631e610ec075199fd9b",
    "at": "2026-09-27T02:07:49.137Z"
  },
  {
    "id": "def-control-of-fusion-in-a-sylow-p-subgroup",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The final claim is false: in S4 with p=2, P=⟨(1234),(13)⟩ is self-normalizing, so control by N_G(P) and by P agree. Yet both fail: the central element (13)(24) and (12)(34) lie in P and are S4-conjugate but not P-conjugate.",
    "context_sha256": "7beaaec750773d7ecb5f8dd5118b96ba0b85309ffbbff39e9efd7eb4d23914ea",
    "item_sha256": "ace779e402cbcb5d8c871c87bb0215e60327210268b4d23d4452169052c40bd4",
    "at": "2026-09-27T02:08:01.301Z"
  },
  {
    "id": "lem-l1-convolution-norm-inequality",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F1 incorrectly claims the convolution definition gives f∗g∈C_c(G); it establishes only pointwise existence. The proof never proves continuity of f∗g, so its use of the L¹ norm in step 3.1 is unjustified.",
    "context_sha256": "e346432a6f98b8d6f8d3a66b57c7e33957f45fa4edb5432f392ce8e659fe6e53",
    "item_sha256": "64e9c5c79aa32c76ced3c0d0e497a4f4d366e0555b30306287ac1a3eb37eca01",
    "at": "2026-09-27T02:09:05.210Z"
  },
  {
    "id": "lem-haar-change-of-variables-under-inversion",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F7] inaccurately restates its dependency: the cited corollary covers continuous maps between Euclidean spaces, not homeomorphisms of arbitrary LCH groups. It does not license the Borel-set claims used in steps 1.1 and 2.1.",
    "context_sha256": "e9c8989dc21a8853455e8fdd3e26f2eae1dd733b3b638a44d757c16fc191f2b7",
    "item_sha256": "1a89f210eeafc6d2658cadbe5e5fafabeacb65ab2245f5e685cf90ef3d9ed9ad",
    "at": "2026-09-27T02:09:08.306Z"
  },
  {
    "id": "ex-modular-function-of-the-affine-group-of-the-line",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F2] inaccurately restates the Haar-measure definition: it also requires outer regularity on Borel sets and inner regularity on open sets. Steps 1.1–1.2 never establish these, so step 3.1 has not shown that μ is a left Haar measure.",
    "context_sha256": "598a7447145999704e4aad9976665db28beb9e58e5e5a2abdf22a9f80b29a368",
    "item_sha256": "c55ad7695e178921d11676a8712b5039eca5f5edc7c228eec86dc21bababd1a4",
    "at": "2026-09-27T02:09:08.759Z"
  },
  {
    "id": "cex-naive-inversion-is-not-the-l1-involution-for-a-nonunimodular-group",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F5 overstates the cutoff lemma: its interface gives 1_K≤f≤1_U, but does not guarantee supp f⊂U. A continuous function satisfying those bounds can have support meeting ∂U, so step 1.2 cites an unsupported support claim.",
    "context_sha256": "c2df6f448b2f5bea67f58bcc75112c91d9500812a49a2537e6a41af4da076a29",
    "item_sha256": "f530806f71e28eba0c842336482ddb0ff6c00c2957ca4f703a5d16f9a43f404f",
    "at": "2026-09-27T02:09:36.624Z"
  },
  {
    "id": "lem-right-translation-scales-left-haar-measure",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 1.1 falsely claims outer regularity gives an open W⊃E with μ(W\\E)≤ε for every Borel E. This fails when μ(E)=∞ (e.g. E=D×[0,1] in an uncountable discrete group D times ℝ). Also F2 concerns Euclidean maps only, not homeomorphisms of arbitrary G.",
    "context_sha256": "d65161361bf6e4f35db3ea86f1d73a026c2274b6951b3a6ae316589baa49f21d",
    "item_sha256": "67c79790883c71661086691af7583f6f1225551d3280185cdb79625f4edf644b",
    "at": "2026-09-27T02:09:36.685Z"
  },
  {
    "id": "ex-convolution-on-a-compact-group",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F8 incorrectly infers coefficient continuity from unitarity and Cauchy–Schwarz. The hypotheses do not require π or σ to be continuous; compact groups can have discontinuous unitary representations, so their coefficients need not be measurable and the convolution integrals may be ",
    "context_sha256": "a80d25199f71d78c7747d78d7a8b4294b88bb28bdfb860737f6be7b39c495182",
    "item_sha256": "08aa1c5be4c3e51485ef4d04115cbb90bc0cb660a5d77d99c2cdbabf94158c71",
    "at": "2026-09-27T02:09:36.727Z"
  },
  {
    "id": "thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The remark claims the net is not eventually constant, but the theorem includes discrete groups. There, {e} is an identity neighbourhood, and every later term equals the normalized indicator of {e}, the convolution unit.",
    "context_sha256": "6dc70e48eaaabf619ea3ed5015f384a9d61350e41adfd7d35e0c6275b2432666",
    "item_sha256": "ccc3f006e5aa4fd1341876717540e32792a8e52427c4b0e200f180965e0655f8",
    "at": "2026-09-27T02:09:37.077Z"
  },
  {
    "id": "lem-convolution-preserves-cc-and-is-associative",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 1.1 reverses the coordinates of the support rectangle. On G=R under addition, take f nonzero near 1 and g nonzero near 2: F(3,1)≠0, yet (3,1) lies outside supp f × (supp f+supp g). The stated containment used to invoke F2 is false.",
    "context_sha256": "7e5a92c0e5a7f91d7398e3208dc54a9532b57564b079668527bdcd3a36607109",
    "item_sha256": "7f5f4e14e5185bcf3fad68dcd06c5b7e41439b49d5fc6ef1da4e088570bff81a",
    "at": "2026-09-27T02:09:37.232Z"
  },
  {
    "id": "def-left-and-right-regular-unitary-representations",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The cited representation definition requires strong continuity, but this item restates a Hilbert-space representation as a bare homomorphism and calls λ and ρ representations while deferring continuity to the next theorem. The title therefore claims more than this item establishe",
    "context_sha256": "b45c3bf5b48d474c4666a3bc91ebe6a1af93b441cd224244b6bbec1a131d43c9",
    "item_sha256": "7233384237181c7829d9aa768663d85fab880ac9c27c3aa597daa595d13bf170",
    "at": "2026-09-27T02:09:37.317Z"
  },
  {
    "id": "prop-l1-group-algebra-has-a-unit-iff-g-is-discrete",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F3] inaccurately attributes closure under convolution to the cited definition, which only defines the pointwise integral. Step 1.2 relies on u_n∗f∈C_c; that fact is proved in a separate sibling lemma absent from the dependencies.",
    "context_sha256": "543767e8e8183005f4a5f4f95c986f74eb3369bd2966bc0a8defa0a29fef82db",
    "item_sha256": "9ba15e7d9cf6c3de8c861f5cf2f1742d42cdda97879856620d52d36ff3ef505c",
    "at": "2026-09-27T02:09:38.646Z"
  }
]


