# Step 7 adjudicate: initial, round 1, unit 6

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u6.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"6",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-rational-map-integral-schemes, 0:lem-composite-finite-proper-morphism-proper, 1:lem-rational-map-smooth-curve-to-proper-scheme-extends, 1:thm-local-ring-smooth-curve-dvr, 2:thm-curves-function-fields-equivalence, 3:thm-plane-curve-arithmetic-genus, 3:ex-divisor-degree-over-nonalgebraically-closed-field, 4:lem-function-with-poles-defines-map-p1, 5:cor-plane-curve-geometric-genus-delta-correction, 5:def-ramification-index-curve-map, 6:lem-fibre-degree-sum-ramification-residue, 6:ex-plane-quartic-genus-three-smooth, 12:ex-hyperelliptic-curve-double-cover, 12:ex-smooth-conic-is-projective-line-with-point, 13:thm-canonical-bundle-ramification-formula, 13:cex-degree-zero-line-bundle-no-section, 17:ex-basepoint-linear-system.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-rational-map-integral-schemes",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The dominance proof reverses its implication: φ_U(U)⊆closure(ψ_V(V)) shows that φ_U dominant implies ψ_V dominant. It does not justify the stated reverse implication; density of the containing set does not force density of the contained image.",
      "context_sha256": "7e8bf2ddafe331071e5e80ad58900609708a609c235a1d5549708fb4751920d6",
      "item_sha256": "c787f9503b4b92d36758ba0c0297913d9991250a132ed9c917a193ed81121047",
      "at": "2026-10-01T20:48:51.828Z"
    },
    {
      "id": "lem-composite-finite-proper-morphism-proper",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 falsely claims Choice is used exactly in step 3.1. Step 1.2 already invokes F6, whose supplied interface assumes Choice; steps 1.1 and 2.1 likewise invoke the Choice-dependent F9.",
      "context_sha256": "896ae6918c104ad909cc2892cc355e9a510a4546c3f1f2273adfa664b7849394",
      "item_sha256": "c5a0170f621b015be951bf6455bd6700d665f54c91e4f7fcf604f3f694453ffa",
      "at": "2026-10-01T20:49:46.080Z"
    },
    {
      "id": "lem-rational-map-smooth-curve-to-proper-scheme-extends",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 drops the target-integrality hypothesis of def-rational-map-integral-schemes. Properness does not imply integrality: Y=Spec(k[ε]/(ε²)) is proper but nonreduced. Thus rational maps to every target permitted by the statement are not defined by the cited interface.",
      "context_sha256": "86b94d7a10ebb38321889ab498424a81056c7cc55c54bbe7ea30f5d2ecb2bd99",
      "item_sha256": "0c1970f10b83353c1644b608480d9ef9bb056d9282ca03383814dfc85fbbc0b3",
      "at": "2026-10-01T20:48:56.127Z"
    },
    {
      "id": "thm-local-ring-smooth-curve-dvr",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 and F3 omit the supplied dependencies’ explicit AC hypotheses. Steps 1.2 and 1.3 therefore invoke additional AC-dependent results, contradicting the Statement and step 5.1, which claim AC is used only through the DVR criterion.",
      "context_sha256": "d360ec1b67a2672f003dc9a9972fea562ee74a3a46206dca3e01f885290c6176",
      "item_sha256": "f0103bbd415b9a77767978f4e645bf9eb2a95824e55b93b6835870afe0320dd9",
      "at": "2026-10-01T20:48:50.930Z"
    },
    {
      "id": "thm-curves-function-fields-equivalence",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F10 and step 3.2 invoke normalization before geometric integrality is proved. The supplied normalization interface requires a curve, which by the library definition is geometrically integral; it does not supply F10's claimed broader input.",
      "context_sha256": "16316f25c6282063164ab6c08e5c20105e78ac888e61bda86754a737352b4347",
      "item_sha256": "745eab1739de0d087c036017f64f398ef6a8e65e51c8d2c998aff3b209a83ac3",
      "at": "2026-10-01T20:49:05.370Z"
    },
    {
      "id": "thm-plane-curve-arithmetic-genus",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] inaccurately restates the twisting-sheaf theorem: H^2(P^2_A,O(m)) is nonzero precisely when m≤−3 AND A≠0. The supplied interface allows A=0, for which all cohomology vanishes, contradicting [F2].",
      "context_sha256": "b1167326fce24b01f7f6503072775c4cb8e233a9546868a3edf8fe0c67a02d07",
      "item_sha256": "729254bc78ef35def6fea92373a23acbb7f82d7983b39709ffc3223acd54126e",
      "at": "2026-10-01T20:49:19.748Z"
    },
    {
      "id": "ex-divisor-degree-over-nonalgebraically-closed-field",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Example and step 4.1 incorrectly say AC is inherited from the degree homomorphism. The supplied def-degree-divisor-proper-curve interface defines and proves that homomorphism unconditionally, using only finite support.",
      "context_sha256": "54a9f62d9e4314caa430cca5b9a15622811172d044f9886e763ca47569c8bef8",
      "item_sha256": "3bd8f869c48785eee966e74e4df050b082b9ce4d01ca16c3d3fa8214454c957a",
      "at": "2026-10-01T20:49:35.558Z"
    },
    {
      "id": "lem-function-with-poles-defines-map-p1",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final statement omits nonzeroness: the zero rational function has no poles but is not a global unit. The proof establishes this clause only for g∈K×.",
      "context_sha256": "2372667e639772791180ea1d4aad62dc79d3cf5de0dd4418a6bebabfb8e4571a",
      "item_sha256": "622fb69a41f426719e6b60229829c0329b12840fabc5aaf32a01e0dbf4529c11",
      "at": "2026-10-01T20:49:37.231Z"
    },
    {
      "id": "cor-plane-curve-geometric-genus-delta-correction",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "All six dependency interfaces explicitly assume the Axiom of Choice, but the item omits this hypothesis. F1–F4 therefore overstate their cited interfaces, and steps 1.1–1.3 invoke results without a required assumption.",
      "context_sha256": "8a2d8a6e00c230cb99bd08202bfaab9fbf6857f77353bdf9b4c64b3bd796e2ac",
      "item_sha256": "acfe8fcdb1843e0c024087059f46f53399268fac48f785951fdcc204fe9270cb",
      "at": "2026-10-01T20:49:26.789Z"
    },
    {
      "id": "def-ramification-index-curve-map",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The index is asserted to be choice-free, but the cited smooth-curve DVR theorem explicitly assumes the Axiom of Choice. The definition neither assumes AC for this step nor supplies a choice-free argument establishing the required DVR property.",
      "context_sha256": "50f184eae44dca538969b19723c36acc445970002977a17378c4d876b0700b0e",
      "item_sha256": "3094efb5bcfe10098f3b84768f26d5e56f79053c933b8c6b2336a4bf7d07270c",
      "at": "2026-10-01T20:49:41.351Z"
    },
    {
      "id": "lem-fibre-degree-sum-ramification-residue",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 is ill-typed: finite length does not make an A-module a κ(q)-vector space. For M=A/(t²), tM≠0, so its scalar action cannot descend to κ(q)=A/(t). The cited composition-series definition does not imply F6.",
      "context_sha256": "18eaebe951062d8c61e24ddc9fb74dd93634c242232831b8091a0eeb5b775c05",
      "item_sha256": "04ee369ed809f864162e50aeadce0295d6840349debfc7f9db0c5de85d1abefc",
      "at": "2026-10-01T20:49:25.772Z"
    },
    {
      "id": "ex-plane-quartic-genus-three-smooth",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F12 falsely asserts every standard chart ring is a domain. For S=k[x0,x1]/(x0), S is a standard graded domain with S_+≠0, but (S_{x0})_0 is the zero ring. The claim must be restricted to nonempty charts.",
      "context_sha256": "418d8e9c46fc8fba43c03ef11aafb3980d0ab60b0d589620ea68c7cb34de0903",
      "item_sha256": "6371fc107d40d353ddfcdfae62563c45708636963a5330e2e5525581ad6f0e4f",
      "at": "2026-10-01T20:50:01.290Z"
    },
    {
      "id": "ex-hyperelliptic-curve-double-cover",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Example claims two points over every nonbranch point, without restricting to closed points. Over the generic point η, the fibre is Spec k(C): one point with residue degree two. The stated quantifier is false.",
      "context_sha256": "9680680c0f2b5443bb2246f1634d982607376bcd705e17c955268af3f654120c",
      "item_sha256": "5f634ad32257df2c1d4627c2bad3a3ca7aa7b05b91903ec88e7a46d3b027f891",
      "at": "2026-10-01T20:50:00.573Z"
    },
    {
      "id": "ex-smooth-conic-is-projective-line-with-point",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] falsely equates local regularity with smoothness over k. Over k=F_3(s), the geometrically integral curve y^2=x^3-s is regular at (y) but not smooth there. The cited interface requires geometric regularity.",
      "context_sha256": "90f78b57956a3bb5f0834b69a5effe3dedfc04ef3d954f80899971ef9e8754ca",
      "item_sha256": "c9160af274e3363d1e6b45b8d3e0c129deab5c192ae53783311f7a7976fc321d",
      "at": "2026-10-01T20:49:50.613Z"
    },
    {
      "id": "thm-canonical-bundle-ramification-formula",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F1] incorrectly asserts that a curve has DVR local rings at closed points without requiring smoothness. The supplied curve interface explicitly excludes this convention; the cusp k[t²,t³] has a non-DVR local ring at (t²,t³).",
      "context_sha256": "c7239e2e0d2c847c4f5b86def9a431b18ebdf325f74d61ca429fd35607a8f1ec",
      "item_sha256": "00c18d139663d13af1d4dc1759ae9a99686715003d6cfd5860c3691fa0d55f4e",
      "at": "2026-10-01T20:49:26.122Z"
    },
    {
      "id": "cex-degree-zero-line-bundle-no-section",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F8 incorrectly states the morphism/function-field bijection for arbitrary curves. For C=D=A¹_k, t↦1/t is a k-field embedding but induces no morphism A¹_k→A¹_k. The supplied interface requires smooth proper geometrically integral curves.",
      "context_sha256": "8e573a70b05aa803031ed523323c6e4e760432cd0427607e94a622e9e8b76f9c",
      "item_sha256": "3b7396145d044ff4ebb211f62d91a72a75fac92cdbe9c4588f5c060132944fe4",
      "at": "2026-10-01T20:49:54.840Z"
    },
    {
      "id": "ex-basepoint-linear-system",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 identifies |D|=P(L(D)), explicitly a set of k-lines, with the scheme P²_k. The supplied dependency identifies it only with P²_k(k) and explicitly distinguishes set from scheme. Step 2.1 uses scheme intersections without specifying that transition.",
      "context_sha256": "38f5a6e38f8f3942c888f825933c3fe1a2f7832b06b42a65842dcd637fdacf15",
      "item_sha256": "4c95c94ef0795784612a5690879e2a918a63ed42334f5dd7aa16e1fd0b4ad1dc",
      "at": "2026-10-01T20:49:57.284Z"
    }
  ]
