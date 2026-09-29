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
label: step7-v2-initial-r1-u6
covers: 6
output: research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u6.json

# Step 7 adjudicate: initial, round 1, unit 6

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u6.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-36-complete",phase:"initial",round:1,unit:"6",input_sha256:"eb847670bab40a2439e5cdb871b71db529fdcd8349675a0f63eb1fb3e18045de",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-36-complete --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

Assigned item order: 0:lem-generic-freeness-finite-type-algebra-module, 0:lem-ring-detected-at-associated-prime-localizations, 1:def-faithfully-flat-morphism-schemes, 1:lem-determinantal-grade-sufficient-exact-free-complex, 1:lem-flat-local-map-faithfully-flat, 2:def-relative-dimension-smooth-morphism, 2:def-smooth-locus-morphism, 2:thm-generic-flatness-morphisms, 2:cex-flat-not-smooth-nodal-family, 3:def-etale-morphism-schemes, 3:lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness, 3:thm-differentials-smooth-locally-free, 3:thm-jacobian-criterion-smooth-morphism, 4:ex-polynomial-ring-flat-smooth, 5:lem-etale-stable-base-change-composition, 5:lem-smooth-fibres-smooth, 5:thm-etale-formally-etale-finite-presentation, 5:thm-etale-locus-open, 5:thm-etale-over-algebraically-closed-field-discrete-smooth-points.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "lem-generic-freeness-finite-type-algebra-module",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 1.6 drops the summand $(M_0)_a$: its sections give $M_a\\cong(M_0)_a\\oplus\\bigoplus_{k\\ge0}(Q_k)_a$, not the claimed isomorphism. For $A=B=M=\\mathbb Z$ and $b_1=0$, every $Q_k=0$ while $M_a\\ne0$.",
    "context_sha256": "d2937b23d371261e1875eb4ffe0e5b881617cb0f4bd55b12a61c61c5853394f5",
    "item_sha256": "337410b9b73dfbf8f3b823c593b577856c37dcebe0daac4d49dd8bd98948262c",
    "at": "2026-09-29T11:25:45.379Z"
  },
  {
    "id": "lem-ring-detected-at-associated-prime-localizations",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The statement assumes only a Noetherian ring, while the cited associated-prime theorem requires a commutative ring. For a general noncommutative Noetherian ring, localization at each prime need not exist, so the proof cannot apply its dependency.",
    "context_sha256": "066261b0d3e285757a9ac464df0ad731b97f1bc41c9d73e3da0d610f12ebac54",
    "item_sha256": "6eec6a2c0de53a8d258c7db23ea601e7e3f70244ace655918be151a6a181c3e2",
    "at": "2026-09-29T11:27:00.477Z"
  },
  {
    "id": "def-faithfully-flat-morphism-schemes",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The final sentence says base-change and composition statements are proved on this page, but the full item contains neither those statements nor their proofs. That page promise is false.",
    "context_sha256": "aa3092970945e0cd9bbbb9231aa34d60f1827c45ab28ad7a447ec159676d5e25",
    "item_sha256": "fab50532049c1139ec9f82262a619a27cbfe62d60bb0fa254326d87eecd9802f",
    "at": "2026-09-29T11:25:38.728Z"
  },
  {
    "id": "lem-determinantal-grade-sufficient-exact-free-complex",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The title claims the complex is exact, but the hypotheses allow nonzero H_0. Over R=k[x]_(x), the complex 0→R→R given by multiplication by x satisfies the hypotheses, yet H_0=R/(x)≠0. The proof establishes only positive-degree exactness.",
    "context_sha256": "94a9626038398e35995b5c18ad326d8080e49a31982d73df0dea23141ddb1511",
    "item_sha256": "939d4dbc5620b95b33894e5c02bdfec2522502294e1450c44275a65a31e0276b",
    "at": "2026-09-29T11:27:10.096Z"
  },
  {
    "id": "lem-flat-local-map-faithfully-flat",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The choice-free claim fails in ZF: a nonzero ring R may have no maximal ideal ([Entin](https://arxiv.org/abs/2404.18351)). Then A=k×R has unique maximal ideal 0×R, but the flat local projection A→k kills the nonzero module 0×R. Thus [F1] is false without AC.",
    "context_sha256": "460a7c05dbf31b229fe66ec837d51e41b21ab2695dac77ffbcd1e9a08031daee",
    "item_sha256": "e91959a8f602761a71efbc420317d446caba267aabccbe836a46c222d3ce8f27",
    "at": "2026-09-29T11:26:09.987Z"
  },
  {
    "id": "def-relative-dimension-smooth-morphism",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The cited [[def-geometric-fibre]] defines a geometric fibre using an algebraic closure of κ(s). Here X_{s,K} is called the geometric fibre for every field extension K, including K=κ(s). This inaccurately restates the dependency.",
    "context_sha256": "d302b70d52481ed6ff1bc610cb2bf80b0ada333375d6bda2c4991eea12dc5e02",
    "item_sha256": "9863cb02661abf4c7b29624c4bca00685310332a60842e0fb5cf9656e3bc2274",
    "at": "2026-09-29T11:25:57.809Z"
  },
  {
    "id": "def-smooth-locus-morphism",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The item promises that openness of Sm(f) is proved on this page, but its full text contains no such proof. The page promise is unfulfilled.",
    "context_sha256": "1100ddd0531ae51ee51626862404a4451c2f63a79604cf96418282991d3c4063",
    "item_sha256": "8ae43d150b2a0f565cccdc21ed4ea5cee75130b0649034fc5fcdd8bf45ea6624",
    "at": "2026-09-29T11:25:56.658Z"
  },
  {
    "id": "thm-generic-flatness-morphisms",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F6] attributes flatness of A_a over A to the free-modules corollary. That interface only establishes flatness of free modules; localizations need not be free. This dependency restatement is unsupported, even though the extra claim is true and unused.",
    "context_sha256": "b04d3cd86fc839f6f1df37c6940442534a131b9e6c4558234b0588da17aaf33d",
    "item_sha256": "b7cffb8600df1cda5c87ec47e647f8bd40eabdaa2953d897b239443b77b86fcf",
    "at": "2026-09-29T11:26:14.525Z"
  },
  {
    "id": "cex-flat-not-smooth-nodal-family",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F11 inaccurately restates the cited definition: it assigns Krull dimension to every commutative ring, while the dependency explicitly leaves the zero ring outside its definition.",
    "context_sha256": "5e334948669c17b2d5c9bfaf64a61a80e0217a734151acb2be1dcfa92d916544",
    "item_sha256": "7292155487e7b0928286e2aba093e96c02033072c9b1405c6ea13d6f02d6e426",
    "at": "2026-09-29T11:27:19.364Z"
  },
  {
    "id": "def-etale-morphism-schemes",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The final sentence suggests that surjective finite flat maps of degree >1 fail to be étale. But Spec(k×k)→Spec(k) is surjective, finite flat, étale, and has degree 2. Degree >1 does not explain the Frobenius example.",
    "context_sha256": "f069af84c328f8b93487594ba01863347f085706bed6c97295da60ae54eb4d14",
    "item_sha256": "fb2c26bc5c96c7f6e3408c80cb5c4bd04019d9a9be69ecdf7d6849fab69e0269",
    "at": "2026-09-29T11:25:58.787Z"
  },
  {
    "id": "lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 4.1 assumes B→B⊗_A κ(p) is surjective. It need not be: Z[x]→Q[x] is not, and Noether normalization may choose z=x+1/2, which has no lift. The cited result does not justify the chosen preimages.",
    "context_sha256": "def8237cbbd0f5b28f4ed88624315b97506ac651d515dca2fdc5c5395a40c97c",
    "item_sha256": "6258995e99e6e450c77742ffbc6cc90fb9911ce7359eafa1731ffab6bf7a1288",
    "at": "2026-09-29T11:25:49.448Z"
  },
  {
    "id": "thm-differentials-smooth-locally-free",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F6] falsely restates the dependency: its component formula does not hold for every locally Noetherian scheme. At the generic point of a DVR, local dimension is 0, while its sole irreducible component has dimension 1.",
    "context_sha256": "5ff40e4bc9cb9942f0fac020632c2b433200d051aaa2fb88817edca90778a3fc",
    "item_sha256": "66b6e5cc6687bbda8c03f813b60ed706faed9d087eaf1c17c2becbeeff15c423",
    "at": "2026-09-29T11:25:55.143Z"
  },
  {
    "id": "thm-jacobian-criterion-smooth-morphism",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F6 misstates the cited fibre lemma: the formula is dim(F_K)_Q = ht(Q')−r for the corresponding prime Q' in the polynomial ring, not ht(Q)−r for Q in the fibre. For k[t]/(t), F6 would give −1 instead of 0.",
    "context_sha256": "2ff5d63c6cf42d60cf58586ac73378d84dba7f1d80b019cda1f736fe11c6d378",
    "item_sha256": "6100bc75cfeb80bdb9dec00fc629432c82faa39471b1d1145413c9058114a5fa",
    "at": "2026-09-29T11:25:45.932Z"
  },
  {
    "id": "ex-polynomial-ring-flat-smooth",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F1] restates the cited corollary as saying free modules are projective without qualification. That corollary requires the Axiom of Choice for an arbitrary basis; only flatness is choice-free. The item also calls its use of [F1] in step 1.1 choice-free.",
    "context_sha256": "104d3bcd9e0df20a85751c274854084f4e0b9d9ec4813eb93b1c75eadb832885",
    "item_sha256": "061531a8c66a4ccae4394e4690fc464bf324167d0e7cd307167108f5b3f2c780",
    "at": "2026-09-29T11:27:15.801Z"
  },
  {
    "id": "lem-etale-stable-base-change-composition",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 1.1 falsely equates points over a chosen y with all points over x. For Spec(C)→Spec(R) base changed to Spec(C), the fibre splits into two points: one lies over y, while both lie over x. The claimed correspondence is false.",
    "context_sha256": "18a22eaa0fca3ea47fc7fa7bda0fe91f9c8259ffcbd2de990f82a4f39d85f5ec",
    "item_sha256": "59f4d167379499507df74ffab96000bbda5274ef29b882c90bc91f686f53834a",
    "at": "2026-09-29T11:26:45.392Z"
  },
  {
    "id": "lem-smooth-fibres-smooth",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Clause 2 omits the hypothesis that f is smooth. Step 2.1 invokes step 1.1 without that hypothesis. For f: Spec(k[ε]/(ε²)) → Spec(k) and K=k, the asserted fibre morphism is not smooth.",
    "context_sha256": "38e3be203886fe96e1d836372c7730a278ba157aa0a450afe6ff62ca82a41430",
    "item_sha256": "c60870cf5f8b255c8be5b1a820599a437e076226b9e57c657f3fbbcbfebcbb69",
    "at": "2026-09-29T11:25:45.856Z"
  },
  {
    "id": "thm-etale-formally-etale-finite-presentation",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The title asserts finite presentation, while the statement and proof establish only local finite presentation. An infinite disjoint union of copies of Spec k over Spec k is étale but not quasi-compact, hence not of finite presentation.",
    "context_sha256": "6eb50e2dea6edf3ceff760ec3f1192127900e867df2673828a66d930055577ae",
    "item_sha256": "ba4a5c4870f4a623e580b26e861f9faea931c953188d215536328a7c6ce52622",
    "at": "2026-09-29T11:25:58.600Z"
  },
  {
    "id": "thm-etale-locus-open",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F3] incorrectly extends the cited germ property from open subschemes to arbitrary subschemes. For f:A¹_k→Spec k, Et(f)=∅, but the closed subscheme U={0}→Spec k is étale, so Et(f|_U)≠Et(f)∩U.",
    "context_sha256": "1904d90d7d7c6e40f00dc55283260dc09396bc44d0b13ac269a5e733c5057cf6",
    "item_sha256": "2828806fda84d012537acf90a3695d9b376acd499f8d6f503c3b05c78cde0484",
    "at": "2026-09-29T11:25:59.573Z"
  },
  {
    "id": "thm-etale-over-algebraically-closed-field-discrete-smooth-points",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The Statement claims the converse and infinite-union example are proved choice-free, but steps 1.2 and 4.2 invoke F2, whose interface assumes AC. Its choice-use claim is therefore unsupported by the proof.",
    "context_sha256": "a886dc46c4a85268470af54fe6992e5d9afc568703c44c1bd71e092ad3249966",
    "item_sha256": "e2df0e15e947e88ae55821b2a9957cc2c8f8c8b9ffd488c00494b5234f2bb169",
    "at": "2026-09-29T11:26:18.089Z"
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
