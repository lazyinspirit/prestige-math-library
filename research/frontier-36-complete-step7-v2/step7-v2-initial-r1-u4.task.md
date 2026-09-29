# Step 7 adjudicate: initial, round 1, unit 4

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u4.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-36-complete",phase:"initial",round:1,unit:"4",input_sha256:"eb847670bab40a2439e5cdb871b71db529fdcd8349675a0f63eb1fb3e18045de",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-36-complete --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

Assigned item order: 2:lem-linear-system-incidence-is-smooth, 3:ex-tangent-spaces-general-and-special-linear-groups, 4:thm-jacobian-criterion-affine-variety, 4:thm-regular-not-smooth-imperfect-field, 4:ex-cusp-double-tangent, 4:ex-node-two-tangent-directions, 5:lem-smooth-curve-realizing-a-tangent-direction, 5:cex-regular-not-smooth-purely-inseparable-point, 5:ex-smooth-quadric-hypersurface, 6:cor-minimum-tangent-dimension-and-homogeneous-regularity, 6:lem-dominant-map-generic-differential-surjectivity-char-zero, 7:cor-generic-smoothness-on-source-characteristic-zero, 8:thm-generic-smoothness-characteristic-zero, 9:rem-jacobian-presentation-independence, 9:thm-bertini-smooth-hyperplane-section, 10:cor-smooth-projective-complete-intersections-general.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "lem-linear-system-incidence-is-smooth",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 5.1 falsely claims uniqueness of isomorphism over X°. For X=A¹, L=O, W=⟨1,t,t²⟩, the incidence is A¹×P¹ over X and has many automorphisms over X. Uniqueness requires compatibility with the map to P(W).",
    "context_sha256": "fcf231b2eb42819012e3940b877e1dc508de8073e6bd59a74eca8147eb32a924",
    "item_sha256": "48ebe196b280095de4f70e20e20e1ca3124bebd836c9de01e1ed4f5b08dd9c02",
    "at": "2026-09-29T11:24:39.211Z"
  },
  {
    "id": "ex-tangent-spaces-general-and-special-linear-groups",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 5.1 falsely says the trace-zero matrix space is nonzero for every n≥1. At n=1 it is {0}, as the same step later acknowledges. The stated edge-case analysis contradicts itself.",
    "context_sha256": "db2cbf000620d50be96e5ddc62a46b0c2205339a07df9275d6e98ffc07f238de",
    "item_sha256": "afd500ed37cfcd46a7dab9b82279d05bb68870fc0c88c54533013b2a64ba5481",
    "at": "2026-09-29T11:24:29.265Z"
  },
  {
    "id": "thm-jacobian-criterion-affine-variety",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The unqualified title overclaims. For k=F_p(u), A=k[t]/(t^p-u) is a field, so its closed point is regular of dimension 0, but its Jacobian has rank 0 rather than 1. The statement covers only perfect fields or rational points.",
    "context_sha256": "57efadfad6c88e06d7cc00bd650b3df4420d0662383fbfa5f81ee23973ed366d",
    "item_sha256": "8467624f692a43960ed82a5a8a6622ca1a8d15deca860d7b78cc3b606873485a",
    "at": "2026-09-29T11:23:53.489Z"
  },
  {
    "id": "thm-regular-not-smooth-imperfect-field",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 6.1(i) falsely says a∉k^p is equivalent to k being imperfect for the given a. For k=F_p(s), the field is imperfect but a=s^p lies in k^p. [F20] only equates imperfection with the existence of some a∉k^p.",
    "context_sha256": "faeacb216d39649e90579f4d69e91bebc50a4c361a560a5070509c9dbf4a49eb",
    "item_sha256": "889c5f0dc8733b67ceffc95f3d92b7428af497d8e23448cce0bcff957e047079",
    "at": "2026-09-29T11:24:03.691Z"
  },
  {
    "id": "ex-cusp-double-tangent",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 5.1 falsely claims the tangent cone does not determine the tangent space. Its degree-one graded piece is m/m², whose dual is T₀C ≅ k². Only the reduced cone’s support lies on one line.",
    "context_sha256": "d1385eff4f5ed078325e89e79ff76e6559c37824f195be4633fa4472d6f9f5b7",
    "item_sha256": "482b90a560276ca454efa57953fdab92f900ebf072e5bc5817400973018d1b73",
    "at": "2026-09-29T11:24:12.063Z"
  },
  {
    "id": "ex-node-two-tangent-directions",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The source qualification falsely says negating the source polynomial leaves its leading form and Jacobian unchanged. The leading forms are x²−y² and y²−x², distinct when char k≠2; the Jacobian rows also differ by a sign.",
    "context_sha256": "c8c874d2d3049fd94c694672c82e435782d34fb2a9ba65c8fdbf3b57631a99dd",
    "item_sha256": "9d97cfabf80f09d809fda22276dc419a49eb22404f6a78ee277119b493b2c8a8",
    "at": "2026-09-29T11:24:16.437Z"
  },
  {
    "id": "lem-smooth-curve-realizing-a-tangent-direction",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The indexing breaks the construction: k^n has coordinates 0,…,n−1, but P has variables x_1,…,x_n. If v_0≠0, step 1.3 chooses s=0 and uses nonexistent x_0; other cases can also require x_0 or undefined v_n.",
    "context_sha256": "81ec2f352f4e3c60823bbc7c1463cc5dbd22e2feb834c9af2f119fc6b2ed0911",
    "item_sha256": "0fa7bf8e3e562099c8277ca193d5ede02aa787d2c622d4cd23b1d6679b466ed4",
    "at": "2026-09-29T11:24:02.038Z"
  },
  {
    "id": "cex-regular-not-smooth-purely-inseparable-point",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 4.1 says zero-dimensional cases are absent, but X=Spec L for a field L has Krull dimension 0. Its own step 3.1 also gives the base change dimension 0. This boundary claim is false.",
    "context_sha256": "1f498242b9890c6d8cf77f1cea01798fbcabc2487a380e9a6be5cb3e93f51656",
    "item_sha256": "e221e01e8c7e7c5a018e420a7c831d484963f790567633c0412fa39313a5d7c6",
    "at": "2026-09-29T11:24:22.656Z"
  },
  {
    "id": "ex-smooth-quadric-hypersurface",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 7 applies F39, which requires a finite-type scheme, to Q defined only as a reduced classical variety. F31–F33 do not construct an associated scheme or identify its charts with Spec A_i, so the claimed smooth morphism is unsupported.",
    "context_sha256": "8472b2a881f7e7e2a85ebba80e302fc00670d743efb830b4638863eaf7e1d9b8",
    "item_sha256": "acb97b1e188c227aad234a12850452cd03aa6258474cd119514f4c3df5364d35",
    "at": "2026-09-29T11:24:25.655Z"
  },
  {
    "id": "cor-minimum-tangent-dimension-and-homogeneous-regularity",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 1.1 claims every point of the scheme regular locus has tangent dimension dim X, using F4 outside its closed-point hypothesis. For X=A¹_k, the generic point is regular but its intrinsic tangent space is zero, while dim X=1.",
    "context_sha256": "2859af573170bfea676fee1b71533e77ef74262ea57da2dbf9387a43e137074d",
    "item_sha256": "7dc6f235c0fb51280400edf1f4ce74d54223025a52e4f2902147eb12625a27cb",
    "at": "2026-09-29T11:24:21.435Z"
  },
  {
    "id": "lem-dominant-map-generic-differential-surjectivity-char-zero",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 11.1 falsely identifies r=1 with a generically finite map. Generically finite maps have r=trdeg_{k(Y)}k(X)=0; the projection A²→A¹ has r=1 and is not generically finite.",
    "context_sha256": "39491f09c7b1198daa2fcfe922444cfb41913cda08e6132d98d26a3c3dcb1bad",
    "item_sha256": "08bd56037495d39cf75020e7c035d28cad48a11b0051515cc01b01a76f6d254b",
    "at": "2026-09-29T11:24:06.416Z"
  },
  {
    "id": "cor-generic-smoothness-on-source-characteristic-zero",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 8.1 falsely says choosing V⊂U excludes a differential that is constantly rank zero. Take X=A¹ₖ, Y=Spec k, and f the structure map. Then U=X and the differential has rank zero everywhere on V.",
    "context_sha256": "64c03afa69c91a4178d6588e49078ea4471936edca756797cf9f95eee249ac59",
    "item_sha256": "0de850131cefe7ba737516579a50e93f6e5e0a8c564c2df1c4238745b5d62ad0",
    "at": "2026-09-29T11:24:49.602Z"
  },
  {
    "id": "thm-generic-smoothness-characteristic-zero",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 4.1 checks smoothness only at classical closed points using F20, then claims it at every scheme point. F3 requires the latter, and F27 identifies classical points only with closed scheme points. No argument covers nonclosed points.",
    "context_sha256": "d72e64f4290736849db2931a6bcc262e588ad1334ee89eb11b71df219ff7b221",
    "item_sha256": "54b1a0066d04bdfb0cbc4b5b412cb4e3b34e920dea003164ca57db4f5e6a14b4",
    "at": "2026-09-29T11:24:50.771Z"
  },
  {
    "id": "rem-jacobian-presentation-independence",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The Jacobian paragraph says the kernel theorem is unavailable for a proper subset of a generating list. For I=(x), the list (x,x) and its proper subset (x) both generate I, so the cited theorem applies to both.",
    "context_sha256": "9b0e5c4c2826d3a14568a9df6eb401ab88a6a375d948e209a46e3c0f5c3a5892",
    "item_sha256": "5ddd3c453eaa4c983d36ec5af4f5456373890ac4ac793339329473068f49c8a5",
    "at": "2026-09-29T11:24:32.052Z"
  },
  {
    "id": "thm-bertini-smooth-hyperplane-section",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F3] does not supply the claimed locally closed embedding of I into X°×P(W). Step 1.4 relies on that unlicensed restatement to prove I is separated, which step 3.1 needs to apply the classical-variety equivalence.",
    "context_sha256": "6f95c12476e617838d042dc2b6ac3d698d3b31bd4982f1313d545a771e677c48",
    "item_sha256": "8f412b60c24983f4f4ead2d84fb2ceedcfe029675c744a135139f9b8f8a2f7c2",
    "at": "2026-09-29T11:25:31.823Z"
  },
  {
    "id": "cor-smooth-projective-complete-intersections-general",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 3.2 is false at nonclosed parameters. For X=P¹ and a generic linear form, Z(t)=Spec k(t), so Ω_{Z(t)/k} has rank 1, while the fibrewise Jacobian gives N−rank J=0. The claimed description used to glue the closed defect locus fails.",
    "context_sha256": "1b76b4e9046d7f887e31b22c3fe44e61092f3cb9378bdf7e9f58e28c31d6d5d9",
    "item_sha256": "3bbec426c008c9296fd072962ec7b2df255480f0fb6a507f145dfae543f3cb4e",
    "at": "2026-09-29T11:25:14.218Z"
  }
]


