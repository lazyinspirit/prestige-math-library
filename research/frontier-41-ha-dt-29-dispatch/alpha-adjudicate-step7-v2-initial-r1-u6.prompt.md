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
- Adjudicate and repair only assigned draft items in the frozen frontier at `research/frontier-41-ha-dt-29-step7-v2/frontier.json`. Published repairs have no Step 7 adjudication, rejudge, or item-gate obligation; record them for separate maintenance. Outside-frontier consumers also belong to maintenance, not Step 7 repair or gates.
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

run: frontier-41-ha-dt-29
role: alpha-adjudicate
label: step7-v2-initial-r1-u6
covers: 6
output: research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u6.json

# Step 7 adjudicate: initial, round 1, unit 6

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u6.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"6",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-regular-continuation-datum-between-morse-smale-pairs, 0:lem-mixed-boundary-hyperbolic-passage-has-uniform-endpoint-derivative-bounds, 2:lem-continuation-energy-identity, 3:lem-metric-end-flow-matching-gives-local-broken-charts, 7:lem-orientation-lines-orient-continuation-moduli-spaces, 9:def-continuation-chain-map, 9:def-morse-homology-of-a-morse-smale-pair, 9:lem-compactified-unstable-manifolds-give-a-cw-decomposition, 10:lem-continuation-map-of-constant-data-is-the-identity, 11:thm-homotopic-continuation-data-give-chain-homotopic-maps, 15:rem-noncompact-morse-homology-needs-properness-completeness-and-compactness-control.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-regular-continuation-datum-between-morse-smale-pairs",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The background connection need not be torsion-free. The true linearization is D_uξ−T(ξ,∇^{g_s}f_s), where T is its torsion. Thus the claimed identification with flow tangent spaces, and regularity/transversality equivalence, is not justified.",
      "context_sha256": "97952a9dc64037f6734f899603176447e7213cb367a7328fca53a4fd7a8c9d2e",
      "item_sha256": "6448f9765d3f2f8ebf44dcc2dd06775a282d4031e44ecd49467347b2b8141d74",
      "at": "2026-10-06T06:54:08.975Z"
    },
    {
      "id": "lem-mixed-boundary-hyperbolic-passage-has-uniform-endpoint-derivative-bounds",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 and step 3.1 invoke the Banach-space implicit function theorem without its supplied Axiom of Choice hypothesis. The item never assumes AC, so this dependency application is not licensed by the interface.",
      "context_sha256": "d45ac79c239db8bddd2e9c0a280598a231741134e27ccabf4c89199919fc1a76",
      "item_sha256": "9cb283d1dfd1e58445e78f3a5b66c99ee0cf7ef99bc5a46a9a29beb5c4502041",
      "at": "2026-10-06T06:54:18.570Z"
    },
    {
      "id": "lem-continuation-energy-identity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 misstates the gradient identity: since ∂su=−∇f_s, g_s(−∇f_s,∂su)=|∂su|², not −|∂su|². The correct formula is df_s(∂su)=g_s(∇f_s,∂su). Step 2.1 cites this false equality.",
      "context_sha256": "bdae70c218af2b35017613b156c4253fb65576e2356ab0a3bbc5bef9e0ec5646",
      "item_sha256": "96f7a875f5b950c980e34519465620e15d50dc88a1a285b74683bfcf804d8ca9",
      "at": "2026-10-06T06:53:58.968Z"
    },
    {
      "id": "lem-metric-end-flow-matching-gives-local-broken-charts",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 assumes vertical regularity and parameter constancy near parameter endpoints. These follow for the cited two-parameter datum, but not for the statement's arbitrary augmented-regular compact family; without boundary transversality, the claimed collar can fail.",
      "context_sha256": "0d71abcf5da4c5cf84093d9467b0cddfb0bcb3f322bea5358fac841ab24cbd1a",
      "item_sha256": "b60a9224c9069be34f259a54a78c705a03968cb06d5afd8c5d1dd04189b41f5b",
      "at": "2026-10-06T06:55:13.041Z"
    },
    {
      "id": "lem-orientation-lines-orient-continuation-moduli-spaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Item 1 claims a canonical determinant-line trivialization, but the endpoint data specify only orientation rays. Step 3.1 explicitly constructs only a ray, not a preferred nonzero vector, so it does not establish the stated trivialization.",
      "context_sha256": "f8f2a9b37c61448bde0cc3f2ebcee0e8731458a81522b35dfd2250b938360cbc",
      "item_sha256": "9aaeb2d460ced6d10bf42bc8a845fa66863eb04250ade9d1b62374e98a7a4ea1",
      "at": "2026-10-06T06:55:05.137Z"
    },
    {
      "id": "def-continuation-chain-map",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The categorical claim that the continuation equation is not translation invariant fails for the constant datum explicitly allowed by the A/B interface: u'=-grad_g f is autonomous and invariant under every time translation.",
      "context_sha256": "636043272e288e8a36829dd05073bf58466e41760007d41c540eb6c5699ecb35",
      "item_sha256": "7500ae71a874443428efa21220f59149b815184c329c0f5ecd061e16bb7d0c15",
      "at": "2026-10-06T06:54:30.037Z"
    },
    {
      "id": "def-morse-homology-of-a-morse-smale-pair",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The integral branch fixes orientation lines, but the dependency defines these as intrinsic determinant lines, not chosen positive rays. Lines alone do not determine trajectory signs; the signed differential and diagonal sign changes require orientations.",
      "context_sha256": "fe8e750e3f21536a2d99ec3d1a58b5fbb825fc26bdcb04afa83896227b0fcbef",
      "item_sha256": "c5081d0cc91a7be46aa24d7cd1f9a8b28e12b145b47f8ae7edc0e913eb57480d",
      "at": "2026-10-06T06:54:07.460Z"
    },
    {
      "id": "lem-compactified-unstable-manifolds-give-a-cw-decomposition",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Claim 2 identifies characteristic disks with closed cells, contrary to the supplied attachment definition. On S¹ with one maximum and one minimum, both endpoints of the compactified unstable interval map to the minimum; its closed-cell image is S¹, not D¹.",
      "context_sha256": "4aed4aba1349a32fd10893de7b7c96dd228e2ef1b6c86b34add9eeeba532919b",
      "item_sha256": "e15d6d78334a47b274782c08c8064262c4d010f1f1c4f54b5b1ff5efa9ce7c52",
      "at": "2026-10-06T06:54:47.383Z"
    },
    {
      "id": "lem-continuation-map-of-constant-data-is-the-identity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 and step 1.1 identify all continuation solutions with Morse trajectories, but def-morse-trajectory-from-p-to-q explicitly excludes constant curves. Thus the asserted identification excludes u_p, contradicting step 1.1's claim that u_p belongs to that space.",
      "context_sha256": "706d7b8aee4b1d94afa1d8ac443c7ee274e07113bb1c492d08bfeb1bca5e501c",
      "item_sha256": "bdeff03046d45f52015f3f0e487c77f16ed426b90de56a77b7bded4b01eae787",
      "at": "2026-10-06T06:54:25.334Z"
    },
    {
      "id": "thm-homotopic-continuation-data-give-chain-homotopic-maps",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final statement asserts independence of the continuation chain map itself. Step 4.1 gives only Φ⁰−Φ¹=∂K+K∂, which need not vanish. Only the induced homology map is independent of the datum.",
      "context_sha256": "ec04b3419a5c304aa49ff7ba9123c32f4c3e060ab0505edc94afd50a7df82acc",
      "item_sha256": "488a74fcb033f8ec6a709287eb8c76ebf5f0f8c73b143e574cd8068129188280",
      "at": "2026-10-06T06:54:23.527Z"
    },
    {
      "id": "rem-noncompact-morse-homology-needs-properness-completeness-and-compactness-control",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title incorrectly makes properness necessary. On R, f(x)=x²/(1+x²) is nonproper Morse with complete Euclidean negative-gradient flow and one minimum; its Morse complex computes H_*(R). The body supports compactness control, with properness only one option.",
      "context_sha256": "b2feb9a94db3c36f54f729d7018fbf6f92b03bec8aa4554aa6c431d44fe08261",
      "item_sha256": "40345643d8cd5d2913a9d16a80f7c900b4aa6226ed4e4d9e5ae59b745aa75236",
      "at": "2026-10-06T06:54:36.749Z"
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
