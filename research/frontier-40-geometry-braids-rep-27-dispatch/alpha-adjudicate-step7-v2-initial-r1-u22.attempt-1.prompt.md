# Step 7 batch adjudicator

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- **Proof repair quality:** Repairs must be mathematically sound and cite dependencies accurately. State important caveats when appropriate, and write concisely without compromising correctness or completeness. Do not repeat the same argument or use unnecessary filler. Add intermediate lemmas when needed to meet prerequisites.
- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the generated task fully. You are the Sol 6.1 high adjudicator for one batch in Step 7.1 or 7.5. The round-bound task defines the run, phase, round, rejected carriers, ownership, evidence paths, and result schema. Do not reconstruct these from historical tasks or receipts.
- Work supplier before consumer, in the task's increasing in-run dependency order. Handle every rejected tuple and group all tuples for one item together.
- Adjudicate and repair only assigned draft items in the frozen frontier at `research/frontier-40-geometry-braids-rep-27-step7-v2/frontier.json`. Published repairs have no Step 7 adjudication, rejudge, or item-gate obligation; record them for separate maintenance. Outside-frontier consumers also belong to maintenance, not Step 7 repair or gates.
- Judge mathematical validity directly. Inspect each rejected statement, proof, definition, actual prerequisite, contract, and page interface. Judges, sources, and earlier acceptances can be wrong. Never pretend to understand something you do not; escalate any uncertainty and any potentially defective published consumers to the owner. When uncertain, read complete relevant arguments in authoritative sources, check their hypotheses and reasoning, and state exactly what they establish. Never invent source reading, familiarity, confidence, or checks.
- Cover every assigned rejected tuple. Record confirmed fatal and nonfatal defects, false positives, and unresolved uncertainty with concrete mathematical evidence. Repair every confirmed defect, including nonfatal defects. Fatal classification controls only the convergence threshold; a sound item needs no cosmetic edit. Unresolved mathematics blocks closure.
- For a licensed repair, make the smallest logically sufficient change, preserve the content contract, Foundations boundary, and actual AC requirements, and never weaken a claim merely to pass a check. Run the focused checks named by the task; a material rewrite invalidates the prior `verification.judge` record.
- You may create and fully author new items to meet a genuine unsatisfied prerequisite of an assigned frontier repair. Identify the missing claim, consuming proof step, and why existing suppliers do not suffice; give exact hypotheses, dependencies, and source evidence. Check existing IDs, aliases, and active assignments before choosing a unique ID. Register the item in the index/registry, page, manifest, and contract through the task's integration path. For shared edits, use `tools/step7-shared-write-lock.mjs` acquire/reread/edit/check/release; do not hold the lock while researching or waiting. Include creation evidence. Such additions preserve author-origin and certification integrity, do not enlarge the frozen frontier, and do not enter its rejudgment or gate loops. Step 7.9 permits no additions.
- Propagate downstream work only when the original `## Statement` or `## Definition` changes, including lemma and corollary statements. Compare those sections directly; do not use a semantic classifier. Proof-only, citation, dependency, and metadata edits with unchanged statements do not propagate. New prerequisites count as new interfaces.
- For an interface change, inspect direct dependencies, references, and actual proof/page uses. Record exact affected clauses and paths; explain why unchanged consumers remain sound; propose only necessary minimal repairs. A candidate is not automatically defective. Continue one hop only if a necessary consumer repair changes that consumer's own Statement or Definition; never pre-expand through unchanged statements.
- Report discoveries outside your lane or the frozen frontier without editing their items. For potentially defective published consumers, give the owner/maintenance route the exact affected use and evidence; do not edit or adjudicate published items. Trace any changed published Statement or Definition to direct consumers.
- The engine routes frontier effects to three disjoint frontier-owner lanes. After frontier writers drain, separate maintenance uses three disjoint lanes for outside consumers. Maintenance reports bind exact snippets and `affected_use`, `invalidated_claim`, and `minimality` evidence; this accounting does not replace mathematical reasoning. Handle each supplier-interface event and outside consumer once, without Step 7 gate/context requeues. Every necessary maintenance Statement/Definition change propagates one more direct hop; frontier targets return to ordinary owner work. Finish frontier work and separate maintenance before certification.
- Run focused checks and report their actual results. Update only assigned files and evidence; use the task's integration path for shared ledgers. Keep mathematical findings and audit status in the canonical published-consumer ledger, operational history in run records, and preserve original round evidence.
- Return only the generated schema: `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], created_items:[], downstream:[]}`. Copy identity and input hash exactly from the task.
- Include one `decisions` row per rejected tuple with `id`, `model`, `context_sha256`, `outcome` (`confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`), `reason`, `uncertain:false`, `source_urls`, and `familiar`. A confirmed fatal also needs `defect_type` (`logic`, `dependency_citation`, or `other`) justified by the finding. Never guess a category for historical evidence.
- Include a `reviews` row for every assigned item: `id`, `disposition` (`repaired` or `unaffected`), current `itemHashGuard` as `post_sha256`, `review_context_sha256`, and the same evidence fields. An unchanged item guard requires `unaffected`; explain contract/page-only repairs and set `metadata_repair_only:true` when applicable. Immediately after each review, before editing another supplier, run `node tools/step7-workflow.mjs review-contexts --run RUN --items ID` and copy both hashes. Batch IDs reviewed on the same stable state if useful. Never refresh a review hash after supplier changes without examining their effects.
- If you author a prerequisite, include a `created_items` row with `id`, `kind`, `home_page`, `batch`, direct `consumers`, `reason`, `uncertain:false`, `source_urls`, and `familiar`. Every created item also needs a review; only a newly created item uses `authored` disposition.
- List affected item IDs in `downstream`, including every direct dependency/reference consumer after a Statement/Definition change, even if its use remains sound or it already has an assigned review. This is an examination inventory, not an edit list. Record each exact affected use and disposition in the report. For a consumer missing from the dependency/reference graph, include `downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}`. Route outside consumers to separate maintenance.
- Give authoritative source URLs actually consulted when unfamiliar; `familiar:false` requires those URLs. Unresolved uncertainty is a blocker, never a false-confidence statement. Empty assignments return empty arrays. Do not claim independent review of your own repair.
- Do not write judgments, stamps, central certificates, or round state; do not launch workers or another cycle. The engine collects evidence, completes frontier repair and separate maintenance, and certifies once all writers drain. A successful dispatch alone does not close unfinished work. Repeated pending work at an earlier assigned content state holds for operator resolution.
- Rejudgment and renewed frontier adjudication, owner repair, and certification repeat until unique confirmed fatal original-frontier items in the latest round are strictly below 5% of the immutable original scope. The threshold permits the final scoped gate; it never permits unresolved defects, uncertainty, or incomplete closure.


---

# This dispatch

run: frontier-40-geometry-braids-rep-27
role: alpha-adjudicate
label: step7-v2-initial-r1-u22
covers: 22
output: research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u22.json

# Step 7 adjudicate: initial, round 1, unit 22

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u22.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"initial",round:1,unit:"22",input_sha256:"2f03bb52479aaa390bb3dcd48c71478e0016d3408c93c2f9769a7db5ae31ba68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-algebraic-cycle-and-cycle-group, 0:lem-order-function-one-dimensional-local-domain, 0:lem-smooth-immersion-normal-sequence-and-deformation-charts, 2:lem-proper-pushforward-of-cycles-well-defined, 3:lem-flat-pullback-chow-groups, 5:def-bivariant-chow-operations, 6:lem-koszul-resolution-and-flat-fibre-restriction, 7:lem-vector-bundle-chow-homotopy-invariance, 8:lem-zero-section-gysin-and-excess-vector-subbundle, 9:lem-gysin-specialization-bivariant-and-base-change, 10:lem-refined-gysin-commutation-and-composition, 12:cex-arbitrary-pullback-does-not-define-a-chow-operation, 13:lem-chow-ring-naturality-and-projection-formula, 15:lem-chern-class-naturality-additivity-and-splitting.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-algebraic-cycle-and-cycle-group",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The affine line with infinitely many origins is integral and locally of finite type over k, but non-Noetherian. Taking V=X, dim V lies outside the cited dimension interface, which applies only to Noetherian spaces. Thus Z_d(X) is not defined as stated.",
      "context_sha256": "081f97a79d35ae147ed4759b640436e171fb3fd5d6d8e585f815a494b3f56a4e",
      "item_sha256": "8dd6d806f4a81054275180cafa356b56d838709a47d4dbb35f5637ce18f00e27",
      "at": "2026-10-05T20:00:06.411Z"
    },
    {
      "id": "lem-order-function-one-dimensional-local-domain",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The statement claims AC is used only for finiteness in (1), but step 4.1 invokes thm-one-dimensional-regular-local-rings-are-dvrs, whose supplied interface also assumes AC. No argument justifies the claimed restriction on AC use.",
      "context_sha256": "023bcc19c3672e3aaa84bb0bf6546b4a071f69177e38d2a78256dcdfc8128d55",
      "item_sha256": "4dc4bfd76a4d8a442babe594b6796c99252fe6a5057fef16070bc2e5e3509314",
      "at": "2026-10-05T20:00:11.332Z"
    },
    {
      "id": "lem-smooth-immersion-normal-sequence-and-deformation-charts",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 incorrectly infers global geometric regularity from a standard smooth presentation at one prime; the cited interface requires every prime. For example, k[x,y]/(xy) is standard smooth where y is invertible but singular at (x,y).",
      "context_sha256": "a86b73a63807e03e92b294d6099bef10f1aff94d240080ac2b5d862a7f84618c",
      "item_sha256": "57005bd465a59a7cbb02b3758b958e1bd238df2eea7b5171dced282c621625c7",
      "at": "2026-10-05T19:59:59.486Z"
    },
    {
      "id": "lem-proper-pushforward-of-cycles-well-defined",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Point (3) assumes only flatness, but graded flat pullback requires pure relative dimension. The flat map A¹_k ⊔ Spec k → Spec k has no single degree shift. Step 4.1 adds this missing hypothesis and therefore does not prove the stated claim.",
      "context_sha256": "6f8b22a61cb0b5873f3680eed14dc146e6e9d000d219abbe3e1fe975345b48a4",
      "item_sha256": "6ad38668a53f5b5960e53e4791af4e1fd335ad21842ec306cc809629293aad62",
      "at": "2026-10-05T20:00:48.011Z"
    },
    {
      "id": "lem-flat-pullback-chow-groups",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Claim (1) fails for empty preimages: take the flat open immersion f:A¹_k\\{0}→A¹_k, n=0, and V={0}. Then f⁻¹(V)=∅ has dimension −∞ by the supplied convention, not dim(V)+n=0.",
      "context_sha256": "1da61bb26051716428a1cd2027778aa826259e0dc6cbfcc9825a2490295f9f18",
      "item_sha256": "973c50194a95010c2bfbd5aa96814bb93955f5fb29ea6fd766ac31b6a09080c8",
      "at": "2026-10-05T20:00:08.749Z"
    },
    {
      "id": "def-bivariant-chow-operations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The definition imposes no ambient field or finite-type hypotheses on Z and T. It therefore includes f=id on Spec Z and T'=T, but the cited Chow-group interface defines A_m only for schemes locally of finite type over a field.",
      "context_sha256": "a49f6fa8fda3af152e89840db350f1325e4c36a489148d0996f968493f3c15d6",
      "item_sha256": "cf44fc059221382db478c109257ee1e165c753d8710b90abdeddfb2b19754e92",
      "at": "2026-10-05T20:00:28.882Z"
    },
    {
      "id": "lem-koszul-resolution-and-flat-fibre-restriction",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "E is never defined or quantified. Step 2.1 assumes that pr_X^*E is locally free, but no hypothesis supplies this. The deformation assertion needs an explicit assumption specifying E as a vector bundle on X.",
      "context_sha256": "6cf90276371c8c332006c5f0eae1f2b925d422853a9bf3dff448d98e55a9a3f5",
      "item_sha256": "22324ab3c370a5a28d7d73e8a91230d2bfd4522d6eb737cd8d0fbad3a75c3453",
      "at": "2026-10-05T20:00:45.662Z"
    },
    {
      "id": "lem-vector-bundle-chow-homotopy-invariance",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 claims every base change, including bases not locally of finite type over a field. Localization and the projective bundle formula are supplied only for that category, so their hypotheses need not hold. Restrict the base-change quantifier.",
      "context_sha256": "84359c5a67574b1921883f405152434105e479ea95f23b061e8261fb20b3331c",
      "item_sha256": "f1e6323e659f602ae5e10fa911a523ce1be74f8fdcfb9cd4edc3c376fffd083d",
      "at": "2026-10-05T20:00:18.589Z"
    },
    {
      "id": "lem-zero-section-gysin-and-excess-vector-subbundle",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L2] omits the cited regular-section formula’s pure-dimensional hypothesis. Step 1.2 applies that formula to [N], although neither T nor N is assumed pure-dimensional; this application is not licensed by the supplied interface.",
      "context_sha256": "f00a8ad17d8ef09e1f6c0b3f9c4bb5edef0b2828ee9d2908f89adfe73798c4c1",
      "item_sha256": "b0ee7ba88c49eb1f89bb88c0d7dfb6f57108653b2ba892ac14c8313315755adf",
      "at": "2026-10-05T20:00:36.958Z"
    },
    {
      "id": "lem-gysin-specialization-bivariant-and-base-change",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The excess clause reverses the factor: step 4.1 proves c_N=c_top(N/N0)c_N0. For Z=T=Spec(k), N a trivial line and N0=0, c_N=0 but c_N0=id, so replacing N by N0 cannot multiply the operation by c_1(N)=0.",
      "context_sha256": "995bc1ef8b4cc8bfaed3b022c34e5e8fb2bd5966ad7a742a8cebce7da6e3fbce",
      "item_sha256": "f7956dbb66a25a63ee7bb604bcb6c4acc4aaefe6f34dc0684d595daea0dd82e4",
      "at": "2026-10-05T20:00:32.072Z"
    },
    {
      "id": "lem-refined-gysin-commutation-and-composition",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 reverses the excess sequence. Blowing up 0 in A² gives D=P¹, N|D=O² and normal line O(-1); O² has no surjection onto O(-1). L1 requires the normal line as a subbundle and its quotient, so the asserted kernel Q is unjustified.",
      "context_sha256": "5490a1302d06b35e3d1e5295e97ca5e378058021967f78a39adb45b8d27d20f7",
      "item_sha256": "2240758bc2c2fd2ae90f383c935b685af5c0940b14054c1f26c9e09afbe509af",
      "at": "2026-10-05T20:00:45.458Z"
    },
    {
      "id": "cex-arbitrary-pullback-does-not-define-a-chow-operation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1/F2 infer projectivity from suppliers proving only local H-projectivity, properness and smoothness. Global H-projectivity requires globally generated I_p, but H^0(P²,I_p)=0. No alternative argument establishes the required projective source.",
      "context_sha256": "d7027c2338e632962f137c7b36abcc4fec1a8228969fcacfd16f6e8f83a4f2cc",
      "item_sha256": "623b2b2ef80805e22faeabeff6e52a248e1ca0cd92055700e5f27cc5d47a58f0",
      "at": "2026-10-05T20:01:05.592Z"
    },
    {
      "id": "lem-chow-ring-naturality-and-projection-formula",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L2] falsely calls the graph of a flat morphism a smooth section. For f=id on A¹_k, the graph is the diagonal A¹_k→A²_k, which is not smooth. The cited dependency supplies a regular-section identity, not this assertion.",
      "context_sha256": "df6e162423d0753d2de9c53bfcfd62a18f5a516ec9d3a8ae5a00f818ee513719",
      "item_sha256": "34fbfa3dce54af5fba93c8ececabea27846cdc9ad5307113cef8b4fb54c28b78",
      "at": "2026-10-05T20:00:31.689Z"
    },
    {
      "id": "lem-chern-class-naturality-additivity-and-splitting",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Finite locally free need not have constant rank. Take X=Spec(k)⊔Spec(k) and E of ranks 1 and 2. Injective f* forces X' to meet both components, but the claimed filtration with r invertible quotients forces f*E to have constant rank r.",
      "context_sha256": "701727be3b5edfef50179735d1edb4704bce0b7a6653a79506ea5363abf8e5e4",
      "item_sha256": "85be397c59bdd52b6fb920b16e3372684a30559bf5191b5c4587197c563f980a",
      "at": "2026-10-05T20:00:23.852Z"
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
