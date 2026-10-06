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
label: step7-v2-initial-r1-u22
covers: 22
output: research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u22.json

# Step 7 adjudicate: initial, round 1, unit 22

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u22.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"22",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-countable-choice-principle-for-foliation-pair, 1:lem-c1-foliated-atlas-preserves-plaque-equivalence-and-transverse-orientation, 1:lem-c1-germs-of-local-diffeomorphisms-form-a-group, 1:lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface, 2:prop-mapping-torus-foliations-realize-global-reeb-stable-examples, 2:prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf, 2:thm-thurston-stability-for-c1-interval-germ-groups-are-locally-indicable, 3:prop-gluing-two-reeb-components-gives-a-foliation-of-s-three, 8:def-finite-holonomy-normal-model, 12:cex-a-reeb-component-has-a-compact-boundary-leaf-with-infinite-holonomy-behaviour, 14:lem-compact-stable-leaves-form-an-open-saturated-set, 14:rem-compact-leaf-does-not-mean-finite-holonomy-or-finite-fundamental-group.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-countable-choice-principle-for-foliation-pair",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The restatement of def-choice-function is mistyped: that interface requires domain equal to the family of nonempty sets, whereas c has domain N. For the constant sequence A_n={1}, the family is {{1}}, so c is not its choice function as defined.",
      "context_sha256": "93250211b5be852d5631030904f0b76cf6f25ec4de1725dea928c14caa9f98bd",
      "item_sha256": "387e62e40280fc37aa5632058edc09e10180798a2e3f53252245549308967e99",
      "at": "2026-10-06T07:01:55.672Z"
    },
    {
      "id": "lem-c1-foliated-atlas-preserves-plaque-equivalence-and-transverse-orientation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 falsely equates coorientability with one constant sign per chart. Chart domains may be disconnected, and opposite signs may be needed on different components. The dependency explicitly allows locally constant signs; constant chart signs can fail.",
      "context_sha256": "34227aa25339b970463dbdd50fe591eb0714f40299ac5f93d1fc717db6bf3781",
      "item_sha256": "39ab0665dfd92685db3ae4c4ec31046612764c3f6dc8058f63cd607648ddbfd6",
      "at": "2026-10-06T07:02:38.450Z"
    },
    {
      "id": "lem-c1-germs-of-local-diffeomorphisms-form-a-group",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 places g(W) only in the common domain of f and f', not where they agree. Thus f(g(y))=f'(g'(y)) is unjustified: agreement on W is insufficient when g(W) leaves W. Shrink using the agreement neighbourhood.",
      "context_sha256": "aa099d028ae92b03226dbb48aec95bf28401ed6218972330dfcb01e8fded429b",
      "item_sha256": "9cfbc398d34b4c4c37cb4643dc3cdee0d0fe7d977df3c27ef9184792dd13ad25",
      "at": "2026-10-06T07:02:19.429Z"
    },
    {
      "id": "lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 declares j(C) compact by testing ambient open covers. def-compact-space expressly forbids this reading without citing lem-compactness-of-a-subspace-is-ambient, which is neither supplied nor cited.",
      "context_sha256": "7ba31ea1b6b37904a3bcd430bc0589a86af7ad5f64b0222c667fbb41ca3944cb",
      "item_sha256": "aea555635c5982c57c477bce8a35cbdabba25fb16ada957cf03986282c54a37a",
      "at": "2026-10-06T07:02:27.919Z"
    },
    {
      "id": "prop-mapping-torus-foliations-realize-global-reeb-stable-examples",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 and step 1.2 assert uniqueness from the orbit map being a covering map. The supplied theorem requires it to be a local diffeomorphism. A topological covering map does not determine the quotient's smooth structure, so this restatement is false.",
      "context_sha256": "7fe20d95cea882612c3243f64696eb534bc752617231f0690cec50658bf2b843",
      "item_sha256": "4941ea7dd10916d3d573c98f37e191fe63f4394f9237e2efcc8c71e8c7c40111",
      "at": "2026-10-06T07:02:26.921Z"
    },
    {
      "id": "prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 inaccurately restates the closed-ball dependency as establishing a smooth surface structure and a diffeomorphism of its interior with R². The supplied interface only defines balls and spheres as topological subspaces; step 1.1 relies on the added claims.",
      "context_sha256": "48500004178c87d35188162081a1d45ec3d70522a0ac24a97da442988fe45841",
      "item_sha256": "f036596f221210a4b01448aae94283736382b41b9036005a9a2cc6da05493f4d",
      "at": "2026-10-06T07:02:18.515Z"
    },
    {
      "id": "thm-thurston-stability-for-c1-interval-germ-groups-are-locally-indicable",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title omits orientation preservation and overclaims: the C¹ germ of x↦−x generates C₂, which is not locally indicable. The statement and proof handle only orientation-preserving germs.",
      "context_sha256": "3790a59d83fa6f0bd7f8b0959530148f5df8aa0bf9ed7f641a993980536d16b6",
      "item_sha256": "efb34cedc28a22f8c5b577c4fdc48a0cf3b1638dd3a1d5cfbc045a354a7fee05",
      "at": "2026-10-06T07:02:21.350Z"
    },
    {
      "id": "prop-gluing-two-reeb-components-gives-a-foliation-of-s-three",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 falsely asserts that smooth maps on glued pieces agreeing on the seam glue smoothly. The maps x↦x on [0,∞) and x↦2x on (−∞,0] agree at 0 but glue to a nonsmooth map. Neither cited definition licenses this assertion.",
      "context_sha256": "49f670742e52352b022c05de951f073de1c5ae0977c507501b99f7c9923794b3",
      "item_sha256": "45299b095a477cf7972924413b5c9cd9e5819c4b7b324f7a8a7c5b500df0a4a2",
      "at": "2026-10-06T07:02:20.934Z"
    },
    {
      "id": "def-finite-holonomy-normal-model",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The transverse-disk lemma supplies an invariant smooth action, but no linearization or conjugacy. The item inaccurately restates that interface and then relies on the unprovided conjugacy to establish faithful stabilizer holonomy.",
      "context_sha256": "792119fec41eb86a4e18b3fd378714b253895025c2bd67f22cc6465af49ccfd5",
      "item_sha256": "1b2e96d8a2111c1d8ae97912863ae9ae75d47a7c65f65b1489cbd5ecae22bee2",
      "at": "2026-10-06T07:02:17.496Z"
    },
    {
      "id": "cex-a-reeb-component-has-a-compact-boundary-leaf-with-infinite-holonomy-behaviour",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 attributes a smooth boundaryless collar extension to the Reeb proposition, but its supplied interface constructs only the solid-torus foliation. The claimed two-sided transversal and associated holonomy representation are therefore unsupported.",
      "context_sha256": "ca17878a859872c4cf1b6103ccc4fda94fc8a39da598702ed740a7d45a3e4905",
      "item_sha256": "c4b5fee064681847025808b4f67f0335ffebca8154b3c1cab4e7632c7bc22de0",
      "at": "2026-10-06T07:02:40.700Z"
    },
    {
      "id": "lem-compact-stable-leaves-form-an-open-saturated-set",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title overclaims for general foliations. The irrational-rotation suspension on S¹×ℝ² has a stable central circle and no other compact leaves, so its compact stable leaves do not form an open set. The proof establishes only the stated finiteness cases.",
      "context_sha256": "415c2032108bf9fe19c30cc42c66ab205f1de75119e21b277258fc3268d335ce",
      "item_sha256": "d07a01855bf86ce4cd1a928e8bceb2393046946cab5cb5bc0f6b096d1294c807",
      "at": "2026-10-06T07:02:55.233Z"
    },
    {
      "id": "rem-compact-leaf-does-not-mean-finite-holonomy-or-finite-fundamental-group",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The remark attributes a smooth collar extension to the Reeb supplier, but its supplied interface gives only a one-sided contraction germ. The claimed identification with the two-sided holonomy definition is therefore not licensed by that interface.",
      "context_sha256": "e9e16063338b0611b69bf25d6bb979f695157c33372bd6a18e3c8aad95735cf1",
      "item_sha256": "e66d9197a4694e78d5d7b3be9747e4aed04c96c9205be6b36f4969330866621b",
      "at": "2026-10-06T07:03:05.146Z"
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
