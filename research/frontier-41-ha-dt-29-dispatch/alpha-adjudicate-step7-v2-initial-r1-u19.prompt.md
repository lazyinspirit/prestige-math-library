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
label: step7-v2-initial-r1-u19
covers: 19
output: research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u19.json

# Step 7 adjudicate: initial, round 1, unit 19

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u19.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"19",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-self-transverse-immersion-and-double-point-locus, 2:def-primary-double-point-obstruction-to-removing-self-intersections, 2:lem-a-double-point-of-a-self-transverse-immersion-has-two-disjoint-embedded-sheet-disks, 2:rem-metastable-embedding-classification-requires-additional-deleted-product-machinery, 4:lem-a-small-regular-homotopy-removes-triple-points-and-preserves-transverse-branch-pairs, 4:ex-double-point-dimension-count-for-surfaces-in-four-and-five-space, 5:lem-embedding-isotopy-has-a-well-defined-velocity-field-along-its-image, 7:lem-compactness-allows-a-cutoff-to-produce-a-compactly-supported-time-dependent-field, 9:thm-isotopy-extension, 10:cor-isotopic-embeddings-have-diffeomorphic-complements, 10:rem-isotopy-extension-needs-compact-source-or-proper-support-control.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-self-transverse-immersion-and-double-point-locus",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Self-transversality is defined but never assumed for the sign claim. The oriented immersion f:S¹→R², f(e^{it})=(cos 2t,sin 2t), has coincident branches with identical tangent lines, so the cited transverse intersection sign is undefined.",
      "context_sha256": "c2e61012e7c70e62243ffc084138fd154fca311b81baff029c449f73424b4ba7",
      "item_sha256": "384c46531fa17cce2b9e2dbe3e8ab50d179163d7a13abb88c32ea2250cf578d5",
      "at": "2026-10-06T07:00:51.251Z"
    },
    {
      "id": "def-primary-double-point-obstruction-to-removing-self-intersections",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claim that counts agree only without higher multiplicities is false. In T^4, the two coordinate T^2 subtori and the diagonal have one triple image and three branch pairs: the parity count is 1, equal to the image-point count.",
      "context_sha256": "37f0e9c3298803e6435346de2d0d0f17ef327391d6a3d29c0339f8c3a82fe8da",
      "item_sha256": "c23fd862077b64b4b6e9ec9b902722d95e800bdd125724da2bbd76774bbbcafc",
      "at": "2026-10-06T07:01:20.225Z"
    },
    {
      "id": "lem-a-double-point-of-a-self-transverse-immersion-has-two-disjoint-embedded-sheet-disks",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause 2 and [L5] assert a local oriented sign without assuming orientations of M and X. The cited interfaces define that sign only for oriented manifolds; self-transversality supplies no orientations.",
      "context_sha256": "40ddc48d814172dbb495fe975e9fa1b544ff3469c6a26088bdacb57031ad7053",
      "item_sha256": "a7b91b73abbcd77b37be86d56923d2a1f32dd63473dde63d6fd2f50a1e18eadf",
      "at": "2026-10-06T07:00:48.984Z"
    },
    {
      "id": "rem-metastable-embedding-classification-requires-additional-deleted-product-machinery",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Equivariant maps need not restrict to maps of deleted products, contrary to the remark. For V=S^1 and M=R^3 (in the stated range), G(x,y)=(0,0) is equivariant but maps every off-diagonal pair into Δ_M. The restriction claim requires isovariance.",
      "context_sha256": "dd8ee744e9a90b45d4f32938e25e177b9e2e3a02b87f2185ee315a9a6dc289d5",
      "item_sha256": "95eb1ba484fea615f3f80f89282087e9e15f1ba32368222ee6de9ea273e2d793",
      "at": "2026-10-06T07:01:29.865Z"
    },
    {
      "id": "lem-a-small-regular-homotopy-removes-triple-points-and-preserves-transverse-branch-pairs",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 extracts finite subcovers of K₂ and K₃ from ambient configuration neighbourhoods. The supplied def-compact-space explicitly requires citing lem-compactness-of-a-subspace-is-ambient for this use, but that dependency is absent.",
      "context_sha256": "45f8f24413a7f2d169b7db4716a4f6791217eb95d2775318fa7eb6199ef930af",
      "item_sha256": "b4a4d7c16c6a3296bfea331e88db124fe23085b1ad72721d7cc5a6cfb454159f",
      "at": "2026-10-06T07:01:20.080Z"
    },
    {
      "id": "ex-double-point-dimension-count-for-surfaces-in-four-and-five-space",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 applies intrinsic compactness of Δ_M to an ambient-open cover. The supplied def-compact-space explicitly requires citing lem-compactness-of-a-subspace-is-ambient for this use; that citation is absent.",
      "context_sha256": "3eb2df8f60009df9d2a79e479eed0be7236c704d656485ae52a2956d50d865db",
      "item_sha256": "0c83c5bf0add218b45feb096fee947d38efad070ec344f1a4197abd21fafbcc7",
      "at": "2026-10-06T07:01:04.374Z"
    },
    {
      "id": "lem-embedding-isotopy-has-a-well-defined-velocity-field-along-its-image",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause 1 misses source-boundary corners. The isotopy interface permits M=[0,1]; with N=R and F(x,t)=x, the track is [0,1]^2. At (0,0) it has a corner, not a smooth submanifold-with-boundary chart. Local coordinate extension does not remove this defect.",
      "context_sha256": "129ec02b8577c8145fe1919b879607ad55d6114bab01ee7cf61317d93402701c",
      "item_sha256": "50a37a9ebcc90bfb076d1520809557d3089f508fdb4965f89aa2d6d0b709b005",
      "at": "2026-10-06T07:00:44.823Z"
    },
    {
      "id": "lem-compactness-allows-a-cutoff-to-produce-a-compactly-supported-time-dependent-field",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L4] inaccurately restates the dependency: a time-dependent field has domain I×N, whereas G has domain N×I. Step 3.1 therefore does not establish the required type; it must instead define H(t,y)=G(y,t).",
      "context_sha256": "53bb2b6bd1590215f7d71697ce1d91dedf313672e6ed2e3e234b9b7d23c3d32c",
      "item_sha256": "ddf6d65eb3714737c599bf2d2d4b4dafaccea32f11ddab670e534e792f5f27d5",
      "at": "2026-10-06T07:00:56.552Z"
    },
    {
      "id": "thm-isotopy-extension",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause 4 says clause 1 remains true, retaining its stationary-end conclusion. Take M={*}, N=R and F(*,t)=t. Any extension satisfies H_t(0)=t and cannot be stationary near either endpoint. The proof's qualification does not fix the statement.",
      "context_sha256": "e52e0ef0fdc6b167b6f5734007837a382205e5eb89fd6453771888118e30b554",
      "item_sha256": "12a61cc9a2ed5a2915784f34b6293422c757ea5dd0905b1e7b9ed602ae801b5f",
      "at": "2026-10-06T07:00:54.300Z"
    },
    {
      "id": "cor-isotopic-embeddings-have-diffeomorphic-complements",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "L1 omits ∂M=∅: clause 4 removes only endpoint constancy from clause 1, which assumes M is boundaryless. The statement allows M with boundary, so step 1.1 invokes the extension theorem outside its supplied hypotheses.",
      "context_sha256": "2242830c11d4b4a96b06c24faa14517841f0debd940d9852975e0f594f8b40be",
      "item_sha256": "aea5211d1173f2826b1d50dd1064367bb8399fb4cbbe789aa017df360fa86d0e",
      "at": "2026-10-06T07:00:51.057Z"
    },
    {
      "id": "rem-isotopy-extension-needs-compact-source-or-proper-support-control",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The bounded-velocity claim omits boundary compatibility. In the complete Euclidean half-plane N=R×[0,∞), F(x,t)=(x,t) isotopes its closed boundary with speed 1, but every ambient diffeomorphism preserves the boundary, so no extension exists.",
      "context_sha256": "b92b7a9b91351e115474c2b6f4d6286e7077ddb4d12290385bdfd0231d7f5f3c",
      "item_sha256": "e3768aa2386f852574b83b4a34b6559ec188330ca6a71e5e1aefecb270692fc6",
      "at": "2026-10-06T07:01:32.515Z"
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
