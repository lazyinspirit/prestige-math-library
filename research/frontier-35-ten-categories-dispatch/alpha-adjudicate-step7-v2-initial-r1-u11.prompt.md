# Step 7 batch adjudicator

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and the generated task fully.
You are the Astra medium adjudicator for one batch in 7.1 or 7.5. The task binds
the run, phase, round, exact rejected carriers, ownership and result schema.
Do not substitute historical tasks or receipts.

Adjudicate and repair only assigned draft items in the frozen frontier at
`research/frontier-35-ten-categories-step7-v2/frontier.json`. Published repairs have no adjudication,
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

run: frontier-35-ten-categories
role: alpha-adjudicate
label: step7-v2-initial-r1-u11
covers: 11
output: research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u11.json

# Step 7 adjudicate: initial, round 1, unit 11

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u11.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned frozen-frontier items, including published items if they belong to that frontier. Outside consumers are handled separately by consumer maintenance, never by this repair/adjudication task. Record their affected uses; do not edit them, rejudge them, or treat outside findings as frontier gate blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-35-ten-categories",phase:"initial",round:1,unit:"11",input_sha256:"6633f07f32d31f9c22bad6cbabdc3a480c1e46dea00812a35534131748b37a18",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-35-ten-categories --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of consumer IDs affected by a Statement/Definition change; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "def-partition-young-diagram-and-conjugate-partition",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The transpose proof contains a false equivalence: j≤λ′_i does not imply λ_i≥j. For λ=(3,1), i=1, j=3, the first inequality is false (λ′_1=2) while the second is true. The correct condition is λ_j≥i.",
    "context_sha256": "8b97798d339bde581bc56503529efb4731690023d80a990b4c04a1f6e72765be",
    "item_sha256": "3a1ea5cd34002f21d488409162fa8eecabbc20d1a924f0112dc19825e2aaf4d7",
    "at": "2026-09-27T02:07:51.644Z"
  },
  {
    "id": "def-young-tableau-standard-tableau-and-shape",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The final remark includes n=0 but claims f^{(n)}=1 without restricting to n≥1. At n=0 this is f^{(0)}, yet (0) is not a partition under the cited definition, so f^{(0)} is undefined.",
    "context_sha256": "cdd73e5c2ad5771211830f3747f40ea6353e076a2c2f18e4ebfb6360c84f76ce",
    "item_sha256": "965e9c17892dbb19761cfd893139f3090d4cdb068e4470b27e35fa82e92e68b4",
    "at": "2026-09-27T02:07:52.375Z"
  },
  {
    "id": "ex-removable-nodes-and-row-endpoints",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "(3,3,1) has size 7, not 6 as stated in Given. Step 1.1 also calls its two one-node deletions partitions of size 5, but (3,2,1) and (3,3) both have size 6.",
    "context_sha256": "6ea15b195b73f416e373d67155ce8ab07b59d27277aab4d6fb65c4a5fa8e3476",
    "item_sha256": "c28e540bf8960fc2bfd98fe09a4a95c7b9ab3e780fbb6a4309c45a55b8cb40b0",
    "at": "2026-09-27T02:07:53.033Z"
  },
  {
    "id": "def-row-and-column-stabilizers-of-a-tableau",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The equal-rows remark claims distinct row sets give different subgroups of S_n. For λ=(1,1), both row sets are singletons, so S(A_1)=S(A_2)={1}. The claim is false.",
    "context_sha256": "a4c764e2a84c4b2f0dae75aa44d8a1bf360319987f22b5c3ec61c7cdb81b3f92",
    "item_sha256": "3a9e113a1f3ed3a94fb83897f3286b27fee4e8da5cd0a95940886c83074f2349",
    "at": "2026-09-27T02:07:55.308Z"
  },
  {
    "id": "ex-young-permutation-modules-for-row-and-column-partitions",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The Given clause quantifies over n≥0 while calling (n) a partition of n. At n=0 this is (0), which the supplied partition interface excludes; its standard row-filled tableau is therefore undefined. The separate empty-partition case does not fix that hypothesis.",
    "context_sha256": "f2509c4a27b5c3992eb505c1a551ac022d402c888b20930cbdbd4dad1dad055d",
    "item_sha256": "01b156ca21023f68bddc12d9883ed72ebee35f6996443e6d51b5b3e2365f1a67",
    "at": "2026-09-27T02:08:05.216Z"
  },
  {
    "id": "def-weyl-group-and-length-for-finite-gl-n",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The claim that N∩L_α is a complement to T in N∩P_α is false: the preceding equality gives N∩L_α=N∩P_α, and this subgroup contains T. For q>2, T is nontrivial, so their intersection cannot be {I}.",
    "context_sha256": "aae8d7e5175dbb82c4afa7ade199e5a951f3f09b09509551ff5309c591de9cbc",
    "item_sha256": "7169960cf82e3c8b9de20c83bd5a18c66405ac1f403c42d621a35073344b88fb",
    "at": "2026-09-27T02:08:39.923Z"
  },
  {
    "id": "thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 3.1 claims block assembly is inverse to φ, but φ maps Pα to Lα and has kernel Uα. For α=(1,1), nonidentity elements of Uα map to I₂, so φ has no inverse. The proof also incorrectly says φ maps into a tuple of blocks.",
    "context_sha256": "bc7ae7e4f7364241812348d3c42ca6bb40f74c8208edf4302ae8d629cd51d0c5",
    "item_sha256": "0a6deada76abce8b247c08b4e33ef87677ff347e90146bbb9e8b4491a2474911",
    "at": "2026-09-27T02:08:39.927Z"
  },
  {
    "id": "lem-unipotent-invariants-are-exact-over-c",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[L5] falsely identifies the arbitrary finite group U from the hypotheses with the standard unitriangular subgroup of GL_n(F_q). The cited interface defines that subgroup only in its own setting; it does not license this restatement.",
    "context_sha256": "ec0394089d37d3ecb2b3906a160f8b5fedde23a55c5dfe4f5744007e0c82c14f",
    "item_sha256": "d30970da8ae314e605ff8f61c4e690333206d5bf145cfb42049ef92bee293890",
    "at": "2026-09-27T02:08:39.994Z"
  },
  {
    "id": "ex-semistandard-tableaux-and-small-kostka-numbers",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 2.1 falsely calls its counts complete lists of fillings of the stated content. Shapes (3) and (1,1,1) each admit three such fillings, not one and zero; those figures count semistandard fillings instead.",
    "context_sha256": "7fd598c6c4a2aba3fac5818cba361643ebb1c514bf825cefae34881076207a7a",
    "item_sha256": "b5f68d05726420be15e9dc195d83a51bb164f3762121cc849272ee85afede839",
    "at": "2026-09-27T02:08:40.047Z"
  },
  {
    "id": "lem-rank-matrices-determine-the-pivot-permutation",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Claim 3 is unqualified for g∈M_n(F_q). For g=0, every southwest rank is zero, but every permutation matrix has r_{1,1}=1. Thus the rank matrix cannot determine a permutation σ as claimed.",
    "context_sha256": "76a8da229b508c86b2687c3e6af8ca613aff9ed1477946a7cc2d3afb5aba1b5b",
    "item_sha256": "d19fe357fb1038fe9cfa43e283256a1824f0035484f1f5f1e6399e97a3654454",
    "at": "2026-09-27T02:08:40.088Z"
  },
  {
    "id": "def-semistandard-tableau-and-kostka-number",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Condition 1 requires μ_i for every i≥1, but the cited partition definition makes μ a finite sequence with no entries beyond its length. For μ=∅, none of those μ_i exist, so the content condition and claimed K_{∅,∅} are undefined as written.",
    "context_sha256": "4b8d2f3728007d3b99a39d93f8ceca6df7c0edc770573a074f79201d4b4667ec",
    "item_sha256": "ceb2cc058860c589da36d435ee2ce67aa6d97e38cc3908df6d6fc7ffcca52cb5",
    "at": "2026-09-27T02:08:40.185Z"
  },
  {
    "id": "lem-parabolic-mackey-biset-splitting-in-gl-n",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Claim 1 falsely asserts A◁C and D◁C. Normality requires containment, but step 3.1 proves only that C normalizes them. For n=2, α=(2), β=(1,1), τ=id, one has C=T and A=U≠{I}, so A is not a subgroup of C.",
    "context_sha256": "b0fd73ff01bc20eff1f922f5fa82f810b822fb26dc55973f684c595b3bc40c99",
    "item_sha256": "279193168347cce5d1f1225c4a0497f0ab3e54013458214b8e0bbdbc9bc3dd3f",
    "at": "2026-09-27T02:08:40.186Z"
  },
  {
    "id": "thm-existence-and-uniqueness-of-cuspidal-support-for-finite-gl-n",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[L6] falsely restates the Mackey interface: it says P∩wρQwρ⁻¹=Cρ⋉Dρ, but the dependency says P∩wρMwρ⁻¹=Cρ⋉Dρ. For n=2, P=Q=B and ρ=id, the claimed equality says B=T, which is false.",
    "context_sha256": "d50bbae8b4b51d0c67743f23adef4088680d214e99d96da1685aa50db773dbfb",
    "item_sha256": "1d6df39c138a4187e0f5a019d28b51bd566f41733b2a61c733e035439b934b1f",
    "at": "2026-09-27T02:08:40.439Z"
  },
  {
    "id": "prop-cardinality-of-a-finite-bruhat-cell",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 2.1 falsely asserts tuC=uC from t∈C. For n=2, q=3 and σ=(12), C=T; with t=diag(2,1) and u=[[1,1],[0,1]], these cosets differ. The stated surjectivity argument is invalid.",
    "context_sha256": "6b5d3f3196c4c6ab3ae1b4c4ff6247b65c1ade1000a8e2585156870dcd6d7ae9",
    "item_sha256": "3086ed81ea0abc6fd66ee7c3f08a567911d881d0c990ca364e5930375a6bed56",
    "at": "2026-09-27T02:08:40.631Z"
  },
  {
    "id": "ex-grassmannians-as-maximal-parabolic-quotients",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The Example and step 2.1 say the fibres of G/Pα → Gr(r,n) are cosets of Pα. This map is a bijection, so its fibres are singletons. Cosets are fibres of the unquotiented map G → Gr(r,n).",
    "context_sha256": "893da4542ab306bc55334012d52079a31cc6a826fa6857024b9f1e7200ccc746",
    "item_sha256": "20ba71b78f3325e56cb88a62021e58b8e9a63d804912a68bedca734e34142e7e",
    "at": "2026-09-27T02:08:50.919Z"
  },
  {
    "id": "ex-relative-position-of-flags-in-gl3-fq",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The Remarks falsely claim the first row of the intersection matrix determines where wV₁ lies in the standard flag. It is [0,1,1] for both 213 and 312, but wV₁ is ⟨e₂⟩ and ⟨e₃⟩, respectively.",
    "context_sha256": "ccbbeefff6873d903d40b50902f676bdf81ac20ee6db04dba529b285429374bd",
    "item_sha256": "c443b3562ba8f650f861556dab0f2f3d3b56a4334cf6c1453926ea13c566347a",
    "at": "2026-09-27T02:08:54.392Z"
  },
  {
    "id": "thm-parabolic-mackey-formula-for-finite-gl-n",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[L4] restates the biset-splitting lemma for every permutation, but its interface assumes a block-increasing representative. Steps 2.2–2.3 cite [L4] for arbitrary ρ, so those citations do not license the normality claims used there.",
    "context_sha256": "279faf6a9c287a8f102abc49954c83b1c220711584207c07c1cf10f626256181",
    "item_sha256": "2e29d2170ba30c37f0a86300994f6c2e2e1657fc7ac2fb213273ff8fedef370a",
    "at": "2026-09-27T02:09:35.207Z"
  },
  {
    "id": "thm-transitivity-and-parabolic-independence-of-harish-chandra-induction",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 1.2 tensors the bijection for H/(P₁×P₂) over the Levi to obtain Harish-Chandra induction. The right Levi action on H/P is trivial; induction uses H/U. For a nontrivial Levi character, that tensor can vanish while the induced module is nonzero.",
    "context_sha256": "293dc933142b9be716ec80f9339c09d9dfef91af135131193fa0a63a4e094b6b",
    "item_sha256": "1dd61d6f9009fbe5aeebafeb2b936740118acc94137a748cd76130c098ae7232",
    "at": "2026-09-27T02:09:39.299Z"
  },
  {
    "id": "def-harish-chandra-induction-and-restriction-for-finite-gl-n",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Parabolic independence is claimed for arbitrary commutative R, but the supplied theorem covers only complex modules. For GL₂(F₃) over R=F₃, a regular character of T gives nonisomorphic inductions through the upper and lower Borels.",
    "context_sha256": "d926ba6e6a75dc1ad4a18e24a9a5a90e7b43a066858e2346493b5159d2094385",
    "item_sha256": "f9ee5845cd7d741bac32dedfca4d2aff13bb96d2a58385e60795dc65c2f29105",
    "at": "2026-09-27T02:09:49.863Z"
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
