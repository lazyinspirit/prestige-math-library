# Step 7 batch adjudicator

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and the generated task fully.
You are the Sol xhigh adjudicator for one assigned batch in 7.1 or 7.5.
The task binds the run, round, exact rejections, ownership, evidence inputs and
output schema. Do not substitute a historical task or receipt.

Logical validity is the ground truth. Independently inspect each rejected
statement, proof, definitions, actual dependencies, page interface and contract.
A judge's rejection or an earlier acceptance can be mistaken. State uncertainty
honestly. When unsure, search the web and read the relevant complete arguments
in authoritative sources; record exact sources and what they establish. Sources
can also err: verify their hypotheses and reasoning rather than treating their
reputation as proof. Never invent reading, confidence or completed checks.

Adjudicate every assigned rejection against its exact rejected carrier. Record
confirmed fatal and nonfatal defects, false positives and unresolved
uncertainty using the task's schema and concrete mathematical evidence.
Multiple rejection rows for one item still require complete coverage.
Repair all confirmed defects, including nonfatal defects, in assigned items and
local contracts/metadata. Fatal classification controls only the threshold;
a sound item needs no cosmetic rewrite. Preserve the content contract and
Foundations boundary. Unresolved mathematics blocks closure.

You and all three owner repair agents may author new items only to satisfy
genuine unmet prerequisites of assigned repairs. Identify the precise missing
claim, its consuming proof step and why existing items cannot supply it.
Do not add unrelated results or assume the missing claim. Fully author the
definition or proof, state exact hypotheses and dependency uses, and apply the
same logical and source-evidence standard as to every repaired item.
Choose unique IDs after checking existing IDs, aliases and current assignments;
resolve an ownership or ID collision before writing. Register each addition in
the canonical registry/index, owning page, applicable manifest and proof contract
through the task's serialized integration path. Do not leave orphan item files.
Include each new item and its creation evidence in the generated task's result
schema. Declare dependency edges and discover all downstream consumers of the
addition, including published consumers. Complete their relevant repairs before
certification. New items enter the central certification inventory and complete
gate battery; they do not enlarge the frozen original-frontier denominator or
permit self-issued judge verdicts, certificates or pass stamps.

Identify every relevant downstream consumer throughout the library, including
published items and consumers outside this run or batch. Inspect transitive
dependencies, citations, proof uses, definitions and page interfaces. Give exact
paths, affected clauses, required repairs or reasons no repair is needed.
A mechanically discovered candidate is not automatically defective.
Route targets outside your write ownership to the three owner repair agents;
do not overlap their writers or defer a relevant published consumer.
Record newly discovered targets even when absent from the initial task.

Run focused local checks and report actual results. Update only assigned
evidence and files; use the task's integration route for shared ledgers.
The published-consumer-supplier ledger contains mathematical findings and audit
status, not dispatch history. Preserve prior round evidence.

Return the exact structured result requested by the generated task, with every
decision, changed item, downstream finding, source and unresolved point.
The report is `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], downstream:[]}`.
Copy `input_sha256` from the generated task; it binds the exact assignment.
Each exact rejected tuple needs a decision with `id`, `model`, `context_sha256`,
`outcome` (`confirmed_fatal`, `confirmed_nonfatal` or `false_positive`), `reason`,
`uncertain:false`, `source_urls` and `familiar`. Every assigned item also needs
a review with `id`, `disposition` (`repaired` or `unaffected`), `post_sha256`
(the current itemHashGuard), `review_context_sha256`, and the same evidence fields.
Immediately after completing each review, before editing another supplier, run
`node tools/step7-workflow.mjs review-contexts --run RUN --items ID` and copy both
hashes. Items reviewed together on a stable state may be batched. Preserve the
original review hash if a supplier later changes; never refresh it without
reviewing the new effects. The engine schedules any required continuation.
Reasons must contain
at least 40 characters of actual mathematical explanation. `downstream` contains
item IDs. Honest unresolved uncertainty blocks completion; never set false to
satisfy the schema when uncertain. Empty assignments return empty arrays.
Do not write judge verdicts, stamps, central certification or round state.
Do not launch workers, judges or another cycle. The engine collects all batch
results, dispatches exactly three downstream owner lanes, then certifies the
stable complete state once after every writer drains.
ALL assigned repairs and all relevant downstream repairs must be complete
before that certification pass. A successful dispatch or empty active writer
list alone does not establish completion; any unfinished repair blocks it.
Newly discovered downstream work continues in the repair phase with fresh
disjoint assignments until all effects are resolved. Never enter certification
with known additional repairs awaiting a later round.

Terra rejudgment and renewed adjudication/owner repair/certification repeat
under engine control until the latest round's unique fatal original-frontier
items are strictly below 5% of the frozen original scope. This never permits
unresolved defects, uncertainty or incomplete downstream coverage.


---

# This dispatch

run: phase-2-remaining-27
role: alpha-adjudicate
label: step7-v2-initial-r1-u12
covers: 12
output: research/phase-2-remaining-27-step7-v2/step7-v2-initial-r1-u12.json

# Step 7 adjudicate: initial, round 1, unit 12

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/initial-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-initial-r1-u12.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Read all cited suppliers and relevant consumers. Repair confirmed fatal defects fully. Identify all downstream consumers, including published items.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run,phase,round,unit,input_sha256:"ac52953837f71781b0c07653d319517d1817546b89ee1decf768421291c215c2",decisions:[],reviews:[],created_items:[],downstream:[]}. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters); unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run phase-2-remaining-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of item IDs; include consumers reached through changed intermediate items.

Assigned input:
[
  {
    "id": "lem-every-finite-dimensional-irreducible-representation-has-a-highest-weight-vector",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[A1] inaccurately says AC enters through the shift property [L2]: the supplied interface for prop-root-vectors-shift-weight-spaces has no AC hypothesis. The dependency bookkeeping is therefore false.",
    "context_sha256": "cc2c3d7259fe87e79a427357e381158070f5dee5687e7430aa7df9d48f75e255",
    "item_sha256": "f71ba5d9944368719b0fc53b027cb01179efb941beaec37a0f35a18ddf739d47",
    "at": "2026-09-21T13:16:04.812Z"
  },
  {
    "id": "thm-triangular-decomposition-of-a-complex-semisimple-lie-algebra",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 1.3 attributes [h,g_α]⊆g_α to L1, but L1’s stated root-decomposition/bracket facts do not license it. The supplied Borel interface does contain that fact, yet L2 inaccurately omits it, so the cited inference is unsupported.",
    "context_sha256": "b8b1f78899ff0b8fa531f9c500f6a921f40f642ce22ccfc5f0b4622dcb449a85",
    "item_sha256": "0e1d8466a3ebe2b4a430bb018de4ce4329fd92ed88690f42228540af2ad39a89",
    "at": "2026-09-21T13:16:06.651Z"
  },
  {
    "id": "def-integral-dominant-and-strictly-dominant-weights",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "It falsely says “These notions” depend on the chosen base. Integrality is base-independent: it is precisely membership in the weight lattice P (equivalently integrality on all coroots); only the dominance sign conditions vary with the positive system.",
    "context_sha256": "8df8a64637a98840f334ba93248bee86b89876c57f812f82c647019a08415988",
    "item_sha256": "edcad8a5320318beb395e3fee6e6c2974ec4ca7fabcf30ba071a55dbc005d27d",
    "at": "2026-09-21T13:16:45.573Z"
  },
  {
    "id": "def-dominant-integrable-highest-weight-cyclic-module",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The title/designation asserts integrability, but the item explicitly says integrability requires subsequent highest-weight results. Nilpotence of each f_i only on v_λ does not establish local nilpotence on all of M_int(λ).",
    "context_sha256": "4220a09e8075e99b61e3c7e089e56af571dd523c7638803389f66bb049c29fec",
    "item_sha256": "01b6b3bdbdb0901747b0904032bb1e819e7e8823051413005b8599acec3b7767",
    "at": "2026-09-21T13:16:56.014Z"
  },
  {
    "id": "lem-simple-reflections-preserve-weight-multiplicities",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "No positive system/base Δ is assumed or fixed, so “simple root α_i” and “simple reflections” are undefined. Consequently [L5] cannot be applied: its interface requires a specified Φ⁺ and its simple roots.",
    "context_sha256": "a47f7848c1819097ed5b73410d5d4afe10455b4755cd7fa8139f25bb194352f2",
    "item_sha256": "293abf26d8ca5bec81eea091cecfe5839df13b8a19cf50fddb6dcb013b261581",
    "at": "2026-09-21T13:17:08.555Z"
  },
  {
    "id": "lem-pbw-shows-the-dominant-cyclic-highest-weight-generator-survives",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L6] falsely restates the root theorem: positive roots are not exactly all nonzero nonnegative integral combinations of simple roots; only every positive root has such coordinates. Many such combinations are not roots.",
    "context_sha256": "6bc77b72c68f5538cee0eb7c085800d6eecbcca8861100a56fd59aa8a7282a40",
    "item_sha256": "176dd90f894925ecb394ab215ef3316effd4bb75623191f88402c1f897f199ae",
    "at": "2026-09-21T13:17:10.624Z"
  },
  {
    "id": "lem-simple-root-integrability-bounds-the-dominant-cyclic-module",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L9] falsely states that positive roots are all nonzero nonnegative integral combinations of simple roots. The cited theorem only says every positive root has such coordinates; e.g. in A2, α1+2α2 is not a root.",
    "context_sha256": "59ab65521cebf92b004d335b499c23d6f72d7655dbf431df7d37aa930bba084c",
    "item_sha256": "7a1087cf52ff1d6ca8fdf1b78b5db7c29dfdfea0b97a87383625445fe43caa80",
    "at": "2026-09-21T13:17:11.965Z"
  },
  {
    "id": "ex-weyl-character-and-dimension-formulas-for-sl-two",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The cited weight-space interface does not define characters or say a weight with μ(h)=m contributes z^m; it also does not establish Ch is Cartan. Thus the key claim in 1.1 is an unsupported/inaccurate dependency restatement.",
    "context_sha256": "27e42086c95c9aa7e1021235ebca1ab682c70b70d5a4d0f5ba2fe39fcc36aeeb",
    "item_sha256": "83058ae77dd43f9339cb35d57c4d58bb09bcca97d84a0fe609c7d189e061d238",
    "at": "2026-09-21T13:17:21.278Z"
  },
  {
    "id": "ex-the-eight-dimensional-adjoint-representation-of-sl-three",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L2] attributes the chosen positive system and simple-root relation to prop-root-systems, but its supplied interface only lists roots/root spaces; it does not specify positivity or the base. Thus step 1.2’s highest-root identification is unsupported by the cited interface.",
    "context_sha256": "53886c2f7c7fe849bb7256ddb99fa40c3007074597f763f4fd8d3b644c3ea06d",
    "item_sha256": "e14dd6dbeaee0edc13128a67d6801a202adc5194eae43a89655263b5e627330b",
    "at": "2026-09-21T13:17:34.631Z"
  },
  {
    "id": "cor-irreducible-characters-are-orthonormal-class-functions",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[A1] inaccurately says AC enters through the normalized Haar measure used in [L3]. The cited linearity theorem is a general L¹ statement and neither uses Haar measure nor assumes AC.",
    "context_sha256": "83e8d3860a3a4934dbc450ea8c67d0e3e20b85ee8d69752d02d8a28fa72c75e0",
    "item_sha256": "93bb5d6348ceee8fc248d380470f41dead35d195483b577180a75d8b9b39c252",
    "at": "2026-09-21T13:17:56.988Z"
  },
  {
    "id": "prop-integration-against-haar-is-invariant-under-translations-and-conjugation",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 1.1 reverses the invariances: \u0003bc(h^{-1}E)=\u0003bc(E) requires left invariance, while \u0003bc(Eh^{-1})=\u0003bc(E) requires right invariance. The asserted proof inferences are therefore not licensed as written.",
    "context_sha256": "cfc6c3f693944cadd78e8ff3c31d57adb14909022166e60ec6dc3d512396daa8",
    "item_sha256": "ed82daecae0b11a87c59b3b542df24606eddf687b4758dff12fe76de64ea9518",
    "at": "2026-09-21T13:18:04.514Z"
  },
  {
    "id": "def-weyl-jacobian-on-a-maximal-torus",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "For a compact connected torus G=T, the root system and Φ⁺ are empty, so the defining empty product gives J≡1. Thus the asserted J(e)=0 is false (and there need not be any zero).",
    "context_sha256": "9cb63296153caaf6ed255b0455a577a328747600f0c3b9358f321200d4923705",
    "item_sha256": "c7fea490fe52ce6137c6370b7595cb79b2d571bc3d088864da2eddffbd7649eb",
    "at": "2026-09-21T13:18:27.424Z"
  },
  {
    "id": "thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L5] falsely attributes compact-conjugation normalization of simple-root triples to thm-analytic-and-root-system-weyl-groups-agree; its supplied interface only identifies Weyl groups. Step 1.1 crucially relies on this unsupported assertion to obtain a real Lie-algebra isomorphism",
    "context_sha256": "37e4fc9f1603685cfc597b2ee61f7843cd9a80465a9293a73f8ed12cb399ab5c",
    "item_sha256": "572fb2e76d42489eb2277cf2a218209d47dc0d1f42f05a21975aecbc8dac337c",
    "at": "2026-09-21T13:18:35.060Z"
  },
  {
    "id": "prop-conjugacy-classes-meet-a-fixed-maximal-torus-in-weyl-orbits",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The proof uses [L4], hence Cartan’s theorem under AC_ω (obtained from AC), but A1 and step 3.1 falsely claim AC enters only through L1 and L2. This is inaccurate dependency/choice bookkeeping.",
    "context_sha256": "85a283d696c89bff43cc9fca1077a5340412db723213b39cb7bd7ee21aa15b69",
    "item_sha256": "bf873c06fdb50f58ca55244c668a44d59c7e44ae1ad07dce71e9dd83598f49d0",
    "at": "2026-09-21T13:18:39.743Z"
  },
  {
    "id": "prop-central-quotients-correspond-to-intermediate-character-lattices",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L2] is not licensed by its cited classification interface: that theorem states classification by root data, not the Smith-form annihilator identity that characters trivial on a common kernel are exactly M. This unsupported claim is essential to steps 1.1, 3.1, and 3.2.",
    "context_sha256": "bf5ef8e035e2a96e56f82a374aab5a693d3f29202353ea95f37d7eaa7919cd1c",
    "item_sha256": "08159e38c99533bf1eb884123f4c7b4d63dc700181b43cc607ce7456c8a58aab",
    "at": "2026-09-21T13:19:07.411Z"
  },
  {
    "id": "ex-standard-and-dual-representations-of-sl-n-by-highest-weights",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "A1 falsely says AC enters through L1. The supplied root-systems proposition used by L1 has no AC hypothesis, so the item inaccurately states its dependency/choice bookkeeping.",
    "context_sha256": "17bc7549e5d976c424c9255eb10af4cc3902785a8f60764e59bb91ff2e681a8d",
    "item_sha256": "1ac74f82dbbd9bfb6f0d9ab0a6ae67f1aaa1b8ce8782afccacbd568949693067",
    "at": "2026-09-21T13:19:16.027Z"
  },
  {
    "id": "thm-highest-weight-classification-for-a-compact-connected-lie-group",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L4] only supplies a finite central covering; it does not state that Z(G)^0×T_S is a maximal torus mapping onto the given T, nor that C lies in it. Steps 1.2 and 3.1 require these unsupported claims to pull back λ and prove C acts trivially.",
    "context_sha256": "13b190a5142b4bf5fa5c8bdd5ff4bd4388a9618728e954972f0d616b568fb0a7",
    "item_sha256": "9c5c8a758e235c507fc03ec254b0ef32fda4e1047801b369b6a5b2ce6a3ec767",
    "at": "2026-09-21T13:19:32.002Z"
  },
  {
    "id": "prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L1] attributes torsion-freeness and metric compatibility to the supplied fundamental-theorem interface, which asserts only existence and uniqueness of a Levi-Civita connection. Thus the Koszul derivation in step 5 is not licensed by its cited dependencies.",
    "context_sha256": "852927f8e320b0489a7931cef6741133cded49390a6a33123e5a926f6d8befd0",
    "item_sha256": "c884bcc984aa6e0b354e9667b1b753093200bdcb0f40bd63fbc370bc054d62f6",
    "at": "2026-09-21T13:19:45.400Z"
  },
  {
    "id": "thm-weyl-integration-formula",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "L5 attributes the adjoint root-space decomposition and inverse root-character facts to thm-compact-group-roots-form-a-reduced-crystallographic-root-system, but its interface only asserts root-system structure. Thus the determinant computation in 2.1 is not licensed.",
    "context_sha256": "ba0d09149058f7f07d36ace5ca9544f0170c806a18100641890fa874495f4f6b",
    "item_sha256": "0405f480d2678271d905d231fbc663533a60eb36b3b784da331793208b9714b9",
    "at": "2026-09-21T13:20:06.734Z"
  },
  {
    "id": "lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L2] inaccurately attributes to the highest-weight-classification interface the facts that pullbacks to the cover have scalar central action and irreducible semisimple restriction. That interface states only classification by actual dominant weights; step 1.1 crucially relies on ",
    "context_sha256": "1e1ccee9a9b56e6c841ffcc07c2a6df00b604b731b72dca4857fe54e4253e864",
    "item_sha256": "fda8052c3f5b36136f6e919eea1f849c96a5780aaba57ec4d220b7ff3deeb06d",
    "at": "2026-09-21T13:20:08.374Z"
  },
  {
    "id": "ex-character-lattices-of-su-two-and-so-three",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The displayed definition SU(2)={g:det g=1} is false: it defines SL(2,C) (absent the condition g∈U(2)), not compact SU(2). Thus the asserted quotient is not SO(3) under the item’s stated notation.",
    "context_sha256": "da5dd349cc600df3b0595d3c798e4657c08ad9ac27513cd8c6a8bad0dcbb8440",
    "item_sha256": "69b8bc2f35e2e75771fa5804ee24e93f3ebb95841d00af6afa7bd53eb51e0302",
    "at": "2026-09-21T13:20:13.558Z"
  },
  {
    "id": "thm-compact-connected-lie-groups-are-classified-by-root-data",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L1] inaccurately restates its cited compact-roots interface: that interface does not prove \\(\\mathfrak g=\\mathfrak z\\oplus[\\mathfrak g,\\mathfrak g]\\) with derived algebra semisimple or \\(\\mathfrak t=\\mathfrak z\\oplus\\mathfrak t_s\\). Step 2.2 crucially relies on this unsupported ",
    "context_sha256": "6538c9bc6bbd6822d792e7be04c554545614add4fcf879965ad78df17ccc737f",
    "item_sha256": "2eacd1809dd5f70f6d82bf45e509d700c6bd3e6bee9bd20d3a32a0027b09da5d",
    "at": "2026-09-21T13:20:42.263Z"
  },
  {
    "id": "ex-maximal-tori-and-weyl-groups-of-u-n-and-su-n",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 3.1 falsely says the SU(n) normalizer is generated by its torus and permutation matrices: odd permutation matrices are not in SU(n). It must use the determinant-corrected matrices d_σπ_σ from 2.1.",
    "context_sha256": "7b28e888865d5e5f620c133820049783c9af4a3a2e0d54d50b9939c23ec0cc73",
    "item_sha256": "080616483962b8c722d8a57fb5ad76f4da0509d905aaf21b931c18db8e7d2cdf",
    "at": "2026-09-21T13:20:50.577Z"
  },
  {
    "id": "cor-every-compact-lie-group-is-isomorphic-to-a-closed-matrix-lie-group",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L3] is not licensed by either cited interface: neither point-separation nor the Lie-isomorphism definition states direct-sum closure, compact-to-Hausdorff embedding, or that U(N) is closed. Step 3 relies on these unsupported claims.",
    "context_sha256": "2544965a860b280c9d27bb540d76ebf3e1df6eb837a207175150ccaf4c6ccdaa",
    "item_sha256": "9c903eafa713b94be736eb96319f1f79df9622fdd4e78c66b5c134c62973401e",
    "at": "2026-09-21T13:20:51.141Z"
  },
  {
    "id": "lem-weyl-denominator-and-anti-invariant-orbit-sum-basis",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L3] falsely attributes to the supplied chamber-theorem interface proof steps establishing that simple reflections generate W and permute Φ⁺\\{αᵢ}. Its interface asserts only simple transitivity. Step 1.3 critically relies on these unlicensed claims.",
    "context_sha256": "8856d699f3025294adc9c23eaefe397ff9549e218f7d3333c10dfcef422ed6e2",
    "item_sha256": "b57a0e1f322572ff2580c9681e4ae761e4d124fa07b22fec27900931ed125d7c",
    "at": "2026-09-21T13:20:51.646Z"
  },
  {
    "id": "thm-schur-orthogonality-for-compact-lie-groups",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L4] is not licensed by its cited interfaces: they define complex integrability and linearity but do not establish that continuous functions on G are measurable/integrable, nor entrywise operator integration. Thus T(A)'s well-definedness is unsupported.",
    "context_sha256": "d2f65e48ebf2bde3daed39a5f416712b3fe3f4168676edf925c53ea6b5722a3c",
    "item_sha256": "729b73a49cbb999d013fe56b95dcae8ec642333f2d9429ca70126ded4341bdf9",
    "at": "2026-09-21T13:20:58.645Z"
  },
  {
    "id": "lem-compact-lie-groups-admit-central-continuous-approximate-identities",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L3] overstates its cited interfaces: none supplies monotonicity of the Lebesgue integral (the named theorem states only complex linearity); the Haar items provide positivity/invariance, not this missing property.",
    "context_sha256": "f79986ae0236380b5c4d2019f60b0ee4f69db3544523454c309964e813ea651c",
    "item_sha256": "3f5e97a1a21ce6ca485fb3448e6ea030d846b3003e3a125765db14534445ce67",
    "at": "2026-09-21T13:21:32.365Z"
  },
  {
    "id": "ex-the-peter-weyl-decomposition-of-l-two-su-two",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 2.1 falsely says the differentiation supplier proves that restriction to the derived algebra is irreducible. Its supplied interface does not state this. Thus applying L3 to obtain dim V(n)=n+1, and hence the block multiplicities, is unsupported.",
    "context_sha256": "1e24b316f3cbd5d963eb424dfcdfe9916551e81822e83d9956261f7ce169afa7",
    "item_sha256": "d18f0ccb9087657ba88e08cbe56f90840ed315ce954687cb579635fb318b4f5d",
    "at": "2026-09-21T13:22:22.966Z"
  },
  {
    "id": "thm-analytic-and-root-system-weyl-groups-agree",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 1.1 uses that the Killing form is negative definite on all of s to conclude c<0. The supplied L1 interface only gives positivity on i t_s and does not supply this compact-real-form fact, so the SU(2) construction is unsupported.",
    "context_sha256": "49b1e70bfa29bc77d13b78fde9483475ca859d93da84c9478006cb0eb84a22e9",
    "item_sha256": "dce077ed3bbb082cbde76fcd5fe99b45c014e748873a72b3b40d026de83ca50f",
    "at": "2026-09-21T13:23:30.200Z"
  }
]




## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

Read each file ONCE per session, in the order the task gives it, and pull only the sections
and clauses you need — use the rendered evidence bundle first, and read the cited lines
rather than re-reading whole items. Budget the context you carry: this same
context is re-sent on every turn. The bundle is an entry point, never a fence: read
whatever else the mathematics requires, including other items of this frontier and the
published library, and search the web when a source must be checked.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
