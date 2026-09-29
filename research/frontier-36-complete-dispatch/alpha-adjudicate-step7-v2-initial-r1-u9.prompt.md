# Step 7 batch adjudicator

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and the generated task fully.
You are the Astra medium adjudicator for one batch in 7.1 or 7.5. The task binds
the run, phase, round, exact rejected carriers, ownership and result schema.
Do not substitute historical tasks or receipts.

The task's rejected tuples are sorted by increasing in-run dependency level.
Adjudicate and repair lower-level items before higher-level items within your
assigned batch. Handle all rejected tuples for an item together.

Adjudicate and repair only assigned draft items in the frozen frontier at
`research/frontier-36-complete-step7-v2/frontier.json`. Published repairs have no adjudication,
rejudge or item-gate obligation. Outside consumers belong to separate
maintenance, never Step-7 repair, adjudication, rejudgment or item gates.

Logical validity is the ground truth. Independently inspect each rejected
statement, proof, definitions, actual prerequisites, contract and page interface.
A judge rejection, source or earlier acceptance can be mistaken. Be honest
about uncertainty; when unsure, read complete relevant arguments in authoritative
sources and check their hypotheses and reasoning. Record what sources actually
establish. Never invent source reading, familiarity, confidence or checks.

Cover every assigned rejected tuple, including multiple rows for one item.
Record confirmed fatal/nonfatal defects, false positives and unresolved
uncertainty using concrete mathematical evidence. Repair all confirmed defects
in assigned items and necessary local metadata. Fatal classification controls
only convergence; a sound item requires no cosmetic edit. Make the smallest
logically sufficient repair, preserve the content contract, Foundations boundary
and actual AC requirements, and never weaken claims merely to clear a check.
Unresolved mathematics blocks closure.

You may fully author a new item only for a genuine unmet prerequisite of an
assigned frontier repair. Identify the missing claim, consuming proof step and
why existing suppliers do not suffice. State exact hypotheses, dependencies
and source evidence, and fully author the definition/proof. Choose a unique ID
after checking existing IDs, aliases and active assignments. Register its
index/registry, page, manifest and contract through the task's integration path;
shared edits use the short `tools/step7-shared-write-lock.mjs` acquire/reread/
edit/check/release protocol. Never hold that lock during research or waiting.
Include creation evidence in the result. Additions preserve author-origin and
certification integrity without enlarging the frozen frontier or entering its
Step-7 rejudgment/gate loops. 7.9 permits no additions.

Downstream work follows only a change to the original `## Statement` or
`## Definition`, including lemma and corollary statements. Compare directly;
do not use a semantic classifier. Proof-only, citation, dependency and metadata
edits do not propagate. New prerequisites count as new interfaces.
Inspect direct dependencies, references and actual proof/page uses. Record
exact affected clauses and paths, explain why an unchanged consumer remains
sound, and propose only necessary minimal repairs. A candidate is not
automatically defective. Continue another hop only if a necessary consumer
repair changes its own Statement/Definition; never pre-expand a transitive
closure through unchanged statements.

Report discoveries outside your lane or frontier without editing their items.
Published repairs, including published IDs in the frozen frontier, do not enter
this adjudication, a rejudge queue, or an item gate. Record the finding for
maintenance and trace any changed Statement or Definition to direct consumers.
The engine routes frontier effects to three parallel disjoint frontier owner
lanes. After frontier writers drain, separate maintenance uses three disjoint
lanes for outside consumers. Maintenance reports bind exact snippets and
`affected_use`, `invalidated_claim`, `minimality` evidence; this accounting
does not replace mathematical reasoning. Each supplier-interface event and
outside consumer is handled once, without Step-7 gate/context requeues.
Every necessary maintenance statement change, published or draft, propagates
another direct hop; frontier targets return to ordinary owner work.
Complete required frontier work and separate maintenance before certification.

Run focused checks and report their actual results. Update only assigned files
and evidence; use the task's integration path for shared ledgers. The canonical
published-consumer ledger holds mathematical findings and audit status;
operational history belongs in run records. Preserve original round evidence.

Return the generated schema:
`{run, phase, round, unit, input_sha256, decisions:[], reviews:[], downstream:[]}`.
Copy the exact identity and input hash from the task. Each rejected tuple needs
`id`, `model`, `context_sha256`, `outcome` (`confirmed_fatal`,
`confirmed_nonfatal` or `false_positive`), `reason`, `uncertain:false`,
`source_urls` and `familiar`. A confirmed fatal also requires `defect_type`:
`logic`, `dependency_citation` or `other`, justified by the actual finding.
Never guess a category for historical evidence.

Every assigned item needs a review with `id`, `disposition` (`repaired` or
`unaffected`), current itemHashGuard as `post_sha256`,
`review_context_sha256`, and the same evidence fields. Reasons contain at
least 40 characters of actual mathematical explanation. An unchanged item
guard requires `unaffected`; explain contract/page-only repairs and record
`metadata_repair_only:true`. Immediately after each review, before another
supplier edit, run
`node tools/step7-workflow.mjs review-contexts --run RUN --items ID` and copy both
hashes. Stable batches may use comma-separated IDs. Never refresh a review hash
without examining new effects; retain its original hash if suppliers change.

`downstream` lists affected item IDs. When unfamiliar, give authoritative URLs
actually consulted. Unresolved uncertainty is a blocker, never a false
confidence statement. Empty assignments return empty arrays. Do not claim
independent review of your own repair.

Do not write judgments, stamps, central certificates or round state, and do not
launch workers or another cycle. The engine collects evidence, completes
frontier repair and separate maintenance, and certifies once after all writers
drain. A successful dispatch alone does not close unfinished work. Repeated
pending work at an earlier assigned content state holds for operator resolution.

Sol high rejudgment and renewed frontier adjudication/owner repair/certification
repeat until unique fatal original-frontier items in the latest round are
strictly below 5% of the immutable original scope. The threshold permits the
final scoped gate, never unresolved defects, uncertainty or incomplete closure.


---

# This dispatch

run: frontier-36-complete
role: alpha-adjudicate
label: step7-v2-initial-r1-u9
covers: 9
output: research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u9.json

# Step 7 adjudicate: initial, round 1, unit 9

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u9.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-36-complete",phase:"initial",round:1,unit:"9",input_sha256:"eb847670bab40a2439e5cdb871b71db529fdcd8349675a0f63eb1fb3e18045de",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-36-complete --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

Assigned item order: 0:lem-ringed-space-module-sheaves-enough-injectives, 1:def-higher-direct-image-sheaf, 5:thm-qc-sheaf-affine-higher-cohomology-vanishes, 6:lem-schematic-closure-and-dense-agreement, 6:thm-affine-morphism-higher-direct-images-qc-vanish, 6:thm-cech-computes-qc-cohomology-separated-scheme-affine-cover, 7:lem-support-dimension-preserved-field-extension, 10:lem-projective-coherent-cohomology-finite-and-vanishing, 11:lem-graded-section-module-finite-projective, 11:thm-serre-vanishing, 13:lem-proper-flat-cohomology-perfect-complex, 13:rem-proper-cohomology-finiteness-needs-coherence, 15:thm-cohomology-and-base-change, 16:cor-euler-characteristic-locally-constant-flat-proper-family, 16:ex-cohomology-o-d-projective-line-all-d, 17:cor-connected-projective-variety-h0-o, 17:thm-hilbert-polynomial-coherent-sheaf, 17:ex-hilbert-polynomial-projective-space, 17:ex-upper-semicontinuity-jumping-h0, 18:thm-hilbert-polynomial-degree-support-dimension, 18:rem-base-change-is-not-automatic.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "lem-ringed-space-module-sheaves-enough-injectives",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F2] attributes to the cited theorem the claim that module kernels, cokernels, and images have the same underlying abelian sheaves. Its interface asserts only that both categories are abelian. [F3] and step 3.1 rely on this unlicensed exactness claim.",
    "context_sha256": "fa02d44c088cc01fd705b87c0be148e9f23fc903fa347c63e36a5d6fbcc286a1",
    "item_sha256": "40827eecbd9a5ec224c0754e293840c3a06c33e224321c7cc5c7bb698d6c49bb",
    "at": "2026-09-29T11:29:17.312Z"
  },
  {
    "id": "def-higher-direct-image-sheaf",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The final sentence claims a canonical comparison isomorphism, but the cited theorem guarantees only that the derived functors are naturally isomorphic. It does not supply a distinguished comparison, so the claimed canonicity is unlicensed.",
    "context_sha256": "846a6aff938c2039c4d4e6e38cf147c5a76f3348b972898e1a42391bf5f7d979",
    "item_sha256": "c6c6574346952e496006aa315247d7d938184d6c4b188ff25bfdc24861873435",
    "at": "2026-09-29T11:29:00.825Z"
  },
  {
    "id": "thm-qc-sheaf-affine-higher-cohomology-vanishes",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F3 overstates its cited corollary: it gives only a homeomorphism Spec(A_g)→D(g), not an isomorphism of schemes. Step 2.1 needs that scheme identification to apply affine quasi-coherent equivalence over A_g and identify sections with N_h.",
    "context_sha256": "35f1df7ad640a9a64dce125d598c610fa4bd845557be67b361f36773f8453e56",
    "item_sha256": "643b5c597c660ecfaa7475d0adbd00000a7d10efefd1d01ab21123d15dc85cc8",
    "at": "2026-09-29T11:29:00.368Z"
  },
  {
    "id": "lem-schematic-closure-and-dense-agreement",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F4] inaccurately restates localisation: J_g is the ideal generated by the image of J in A_g, not that image itself. For A=Z, J=A and g=2, J_g=Z[1/2], while the image of J is Z.",
    "context_sha256": "e5bc6e270258c915f04a3b2a10af7af58c75abf45d456215f221e67e3a1b7e25",
    "item_sha256": "133ca03507315789f1d8a9b23e8f81c20dab7182c186b23254a1c87cf673eaa1",
    "at": "2026-09-29T11:29:42.768Z"
  },
  {
    "id": "thm-affine-morphism-higher-direct-images-qc-vanish",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The title claims vanishing for all higher direct images along affine morphisms, but the proof covers only quasi-coherent modules. On A¹_k, the non-quasi-coherent module j_!O_{G_m} has H¹≠0, so its R¹ under A¹_k→Spec k is nonzero.",
    "context_sha256": "213e9f88a9e69cdd9e0d73cc08893721bb969e7f7379d3d7b8520601f0607340",
    "item_sha256": "7733023706e16dd47aa3b7c4150a51640f0fbe1dcef35caac99e64f04473c386",
    "at": "2026-09-29T11:29:22.334Z"
  },
  {
    "id": "thm-cech-computes-qc-cohomology-separated-scheme-affine-cover",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The empty-scheme edge case is false: X=∅ admits the one-member affine open cover U₀=∅. The Statement says that when X is empty, the cover has no members, contradicting an allowed case.",
    "context_sha256": "cfd41eef5651be74bba5c6bd893e86a617cc7fb0d62c7cabaa5beb7bdcd33bff",
    "item_sha256": "235bc35d0169d3a036d80b112342a3720d0a3a795d52f481996052fa04682815",
    "at": "2026-09-29T11:29:01.688Z"
  },
  {
    "id": "lem-support-dimension-preserved-field-extension",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The Statement falsely claims that an affine chart can have the zero ring only when X is empty. For X=Spec k, the empty affine open U=Spec(0) is an affine chart of a nonempty scheme.",
    "context_sha256": "b50005f8af11daf9223c78daff3f499b76549191725bc4865049f2bb9e229d3f",
    "item_sha256": "1effdbc1b59293498e4338deb1cd9a01332d174d2cbfbb8e768e037523324945",
    "at": "2026-09-29T11:29:37.650Z"
  },
  {
    "id": "lem-projective-coherent-cohomology-finite-and-vanishing",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F3] drops a required hypothesis: the cited eventual-generation lemma applies only when L is ample. No cited fact establishes that O(1) on projective space is ample, so the surjection in step 1.3—and both inductions—lack justification.",
    "context_sha256": "be2e4468e10baf8a1847a768a74b92e7e262e0f96cc0e3479b6180837a4456f8",
    "item_sha256": "308cf6738e533c0ecc6578f7e4b1371799561bf94b52e5bbfb475cbcac6dc8b8",
    "at": "2026-09-29T11:29:19.327Z"
  },
  {
    "id": "lem-graded-section-module-finite-projective",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F6 and step 4.1 swap quantifiers: the cited theorem gives a vanishing bound separately for each q>0, but the item asserts one bound for every q>0. That stronger inference is neither supplied nor proved.",
    "context_sha256": "6f07d6e72d3188d98750fbbda8027e6a3f652f84fd8a815adc51b280dff01517",
    "item_sha256": "1bed5e8cd2e316bb6d873799bd0ba58d830cc2d0d039403bafac5e40d1faf95c",
    "at": "2026-09-29T11:29:29.210Z"
  },
  {
    "id": "thm-serre-vanishing",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F6] misstates its cited lemma: the lemma gives a twist threshold separately for each q>0, not one threshold for all q. Step 2.1 and the final simultaneous bound require an additional cohomological-dimension argument that is not supplied.",
    "context_sha256": "da5c31f7f0bd3e27bc21e680b429053734a17143291d2b9bcbde77f6baf813f8",
    "item_sha256": "cf4fa8493e591751e26b6000d701f6ac0392707ba357fe30f31ab40f8aebf395",
    "at": "2026-09-29T11:28:59.382Z"
  },
  {
    "id": "lem-proper-flat-cohomology-perfect-complex",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F2] misstates the cited affine-overlap criterion: affine intersections alone do not imply separatedness; the tensor-to-sections map must also be surjective. The affine line with doubled origin has affine overlap but is not separated.",
    "context_sha256": "31ab8d036e2fb953fdcd5390b250151e87d52042c1c266e3e9296fa8eb1cf9c5",
    "item_sha256": "1778348b6dfc5ae2eab40b0cabc728a2105d2e65e076fe4d3d069055638abcf1",
    "at": "2026-09-29T11:29:30.992Z"
  },
  {
    "id": "rem-proper-cohomology-finiteness-needs-coherence",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The proof invokes the universal-closedness lemma to establish properness, but that lemma assumes the Axiom of Choice and the remark does not. Its cited properness inference is therefore unlicensed as stated.",
    "context_sha256": "b43942412eebffde4cd3411a3f0068a1f212f4c82aedb70bb6d331f5f34b7cc3",
    "item_sha256": "4778a95b5e4d567de097d3be7c67fe3439a3b12679a85c2332e70f3fc83bdaea",
    "at": "2026-09-29T11:30:14.569Z"
  },
  {
    "id": "thm-cohomology-and-base-change",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Part (a) defines g_T:X_T→X, then uses g_T^* on R^qf_*F|_U, a sheaf on U. That pullback is undefined; the base-change map must use pullback along T→U on the left.",
    "context_sha256": "4997be9e603b687f3e252e083385b8742788f65d75d53a1281b326acfebba779",
    "item_sha256": "4c1278027c15844c8a186a67e57b81dd58336477ce230fb260647432ff8b6556",
    "at": "2026-09-29T11:30:20.822Z"
  },
  {
    "id": "cor-euler-characteristic-locally-constant-flat-proper-family",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F8] falsely claims that reducing any split surjection R^m→N over a local ring gives ker=𝔫·ker. For R=k, N=k, and k²→k by projection, the kernel is k while 𝔫=0. Step 1.6 relies on this invalid argument for local freeness.",
    "context_sha256": "9ebc8941f8dd169e23b7843b8e8efdf43dd1d734e0f7e501ef9090d131e180f8",
    "item_sha256": "d092cc4ae056672b0468b13afb404ec1f89dbcc894549f270ab0831d7be46fce",
    "at": "2026-09-29T11:29:58.565Z"
  },
  {
    "id": "ex-cohomology-o-d-projective-line-all-d",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F1] inaccurately restates the cited theorem: it says top cohomology is nonzero precisely when d≤−n−1 for every ring A. The theorem also requires A≠0; for A=0 all cohomology vanishes.",
    "context_sha256": "71acec5523639a013e59467cc6cfea362fcfd9236b293378fda02c3cbb19a635",
    "item_sha256": "a04622292df2682e5bd559b6625e54e475677921681c5322871c35f47adb5619",
    "at": "2026-09-29T11:29:41.412Z"
  },
  {
    "id": "cor-connected-projective-variety-h0-o",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The title claims the result for geometrically connected, reduced proper schemes. Steps 1.11–1.16 give such a scheme with H⁰(X,O_X)≠k. The result requires geometric reducedness, which the title omits.",
    "context_sha256": "d61fc181027ca8a82ad75b0f1cbcbb0bff809790be4cd238a5447a652ebb903e",
    "item_sha256": "a15f4e5b2d5dcf86bd8a0e217fae64cc90ba481396e2b1e3a4889ee375d0858c",
    "at": "2026-09-29T11:29:50.527Z"
  },
  {
    "id": "thm-hilbert-polynomial-coherent-sheaf",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 1.2 infers that the support has finite dimension from F5’s Noetherianity. That inference is false: Noetherian spaces can have infinite dimension, and F5 explicitly allows +∞. No bound for closed subsets of projective space is supplied, so the induction cannot be applied at e",
    "context_sha256": "d4c2b484b5f429511cb6ef7ff127e22761b88238ae64e3afeb54fb1e9bc271a2",
    "item_sha256": "6d34364284fde7e3c9495582299002447009e808c8f7e7442dd63ed95ef1421e",
    "at": "2026-09-29T11:29:59.674Z"
  },
  {
    "id": "ex-hilbert-polynomial-projective-space",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F3] falsely says every basis of a graded piece consists of monomials. In degree 1 of k[x₀,x₁], {x₀+x₁, x₁} is a basis over any field, including F₂, but is not the monomial basis.",
    "context_sha256": "bcb7acc7b8d62600a4680ccbf5dfc8c483702d6c714f5313702cd5af1450ec33",
    "item_sha256": "8ef74d2af706f577f1da44d9c9d237f308d179715c8634706c42a3e507ff91ef",
    "at": "2026-09-29T11:29:49.009Z"
  },
  {
    "id": "ex-upper-semicontinuity-jumping-h0",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F6] drops a required hypothesis: the cited upper-semicontinuity corollary assumes the sheaf is coherent, while [F6] claims finite presentation suffices. This is an inaccurate dependency restatement, even though the computed jump is correct.",
    "context_sha256": "ae6fd60eba599fbe11dd78b20a849bb6156ee48adedfa3ca03ac0f5e05b5582c",
    "item_sha256": "7831a1f5ec17e63565941e5cac471ed4c89192b30792b8189de05c424b6f4729",
    "at": "2026-09-29T11:30:07.289Z"
  },
  {
    "id": "thm-hilbert-polynomial-degree-support-dimension",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 1.2 wrongly infers from [F2] that all support dimensions lie in ℕ. [F2] establishes Noetherianity but explicitly allows dimension +∞. The proof supplies no finite-dimensionality bound for X, so its induction does not cover that case.",
    "context_sha256": "de7b25a0e8a69791e19bce8fae357e032ed065abd84c1554bdf3b854eeda2d34",
    "item_sha256": "5dfae3d3190eda42099ccb003b0d50548dcee6ec6ffc6dab9adef5ca1b9ec5e7",
    "at": "2026-09-29T11:29:43.486Z"
  },
  {
    "id": "rem-base-change-is-not-automatic",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Claim (ii) misstates the cited theorem: local freeness implies surjectivity of φ^(q−1) only after assuming φ^q is surjective. In the remark’s own example, f_*E=0 is locally free, but φ^0 at the origin is not surjective.",
    "context_sha256": "ef4c98f7b9f3bb9c7eb98f97537289c6fa6585dc10a8ce0b3394cc62f4fe1ebc",
    "item_sha256": "3940fcad5af3245dfb179a65dcf2d7cfb1a2fe3da35a7d6bd4f7fb5baa11b002",
    "at": "2026-09-29T11:30:05.359Z"
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
