# Step 7 batch adjudicator

- **Proof repair quality:** Repairs must be mathematically sound and cite dependencies accurately. State important caveats when appropriate, and write concisely without compromising correctness or completeness. Do not repeat the same argument or use unnecessary filler. Add intermediate lemmas when needed to meet prerequisites.
- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the generated task fully. You are the Sol 6.1 high adjudicator for one batch in Step 7.1 or 7.5. The round-bound task defines the run, phase, round, rejected carriers, ownership, evidence paths, and result schema. Do not reconstruct these from historical tasks or receipts.
- Work supplier before consumer, in the task's increasing in-run dependency order. Handle every rejected tuple and group all tuples for one item together.
- Adjudicate and repair only assigned draft items in the frozen frontier at `research/frontier-37-owner-30-step7-v2/frontier.json`. Published repairs have no Step 7 adjudication, rejudge, or item-gate obligation; record them for separate maintenance. Outside-frontier consumers also belong to maintenance, not Step 7 repair or gates.
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

run: frontier-37-owner-30
role: alpha-adjudicate
label: step7-v2-initial-r1-u29
covers: 29
output: research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u29.json

# Step 7 adjudicate: initial, round 1, unit 29

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u29.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"29",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-weighted-l2-spaces-dbar-forms, 0:lem-locally-finite-smooth-partition-of-unity-on-domain, 0:thm-behnke-stein-increasing-union, 1:lem-maximal-distributional-dbar-operator-is-closed, 2:lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains, 3:lem-hormander-solver-on-smooth-pseudoconvex-domain, 4:thm-hormander-l2-dbar-existence, 5:ex-explicit-dbar-solution-with-l2-estimate, 5:ex-hormander-estimate-with-gaussian-weight.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-weighted-l2-spaces-dbar-forms",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.3 defines K_k using 1/k without restricting k to positive indices. Under the library's zero-based sequence convention, K_0 is undefined, so the claimed exhaustion and cutoff sequence are not well defined.",
      "context_sha256": "ce4ae769b0b7160903f0589ff0b3f2664554728099d0eb9450a0802519a20784",
      "item_sha256": "4f2ad305f67dd87624f1daad8003464c21f74d5ae3592a0c3272c35432ea6f6b",
      "at": "2026-10-01T20:57:59.683Z"
    },
    {
      "id": "lem-locally-finite-smooth-partition-of-unity-on-domain",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 falsely claims z belongs to W_j only for j∈{m₀−1,m₀,m₀+1}. For Ω=ℂ and z=5/2, m₀=3, but z∈W₁=int K₃=B(0,3), whose index 1 lies outside {2,3,4}. The stated inference is invalid.",
      "context_sha256": "272e730400ce2e55fae9aa91faea17e1fe2069975ea04ace9a4de79aff548c97",
      "item_sha256": "539e9244873c8a18e1914487452ec872b8e0b21713fc500bc68b12fd69fc87b9",
      "at": "2026-10-01T20:58:18.037Z"
    },
    {
      "id": "thm-behnke-stein-increasing-union",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Statement claims a pointwise limit on Ω of a sequence whose terms are not defined on Ω. For Ω_j={|z|<1−1/(j+1)}, Ω is the unit disc, but δ_{Ω_1}(3/4) is undefined. The proof establishes convergence only of local eventual tails.",
      "context_sha256": "dc53d48ae1bad89732656b147b440ef6551cfe03e07cc8c5339881900621db60",
      "item_sha256": "75357147a27c1eea572eb3324dd2a12bcc7849897e56b2ebcc224ba6b87a6321",
      "at": "2026-10-01T20:58:27.795Z"
    },
    {
      "id": "lem-maximal-distributional-dbar-operator-is-closed",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 applies [F7] to e^{-φ} conjugate(ψ), claiming it is smooth. With φ only C², this need not be a C_c^∞ test function. No extension to nonsmooth tests is established, so the cited identity does not license this central step.",
      "context_sha256": "28e13adb656523db51451944136b9a82b141deaa61360b331f2c6cb9542ec2de",
      "item_sha256": "0873f4bf6c6a61b859e26ac4e56c063f89b2278d495f2e72751205b94fdb7d76",
      "at": "2026-10-01T20:58:03.856Z"
    },
    {
      "id": "lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Given source computation asserts a false integration-by-parts identity: ∫f_j overline{∂_{z_j}η} produces −∂_{bar z_j}f_j and ρ_{bar z_j}, not −∂_{z_j}f_j and ρ_{z_j}. The adjoint formula requires overline{∂_{bar z_j}η}.",
      "context_sha256": "81a67990c0e88d29562597ff7541d165f495b5a8f09e5ddc3b33f2dc3d000870",
      "item_sha256": "c83439f93f30bfd9816a16393fc0b7372fa9116375ca11c3cbd8f77c3c132aa3",
      "at": "2026-10-01T20:58:20.385Z"
    },
    {
      "id": "lem-hormander-solver-on-smooth-pseudoconvex-domain",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.3 falsely identifies the Levi form with <Hv,v>. For H=[[2,i],[-i,2]] and v=(1,i)/sqrt(2), <Hv,v>=1 while the defined Levi form equals 3. Under the stated inner-product convention, the Levi form uses H^T; the identification is invalid.",
      "context_sha256": "73d83391602bba5ea59650225d0c6fe66b9fa1080110af4b65e3411912bd6a5a",
      "item_sha256": "2f92db999d38f82d608e4417d4d61fda4a9f25daf21c72a7817ee3f03b0d6e87",
      "at": "2026-10-01T20:58:06.974Z"
    },
    {
      "id": "thm-hormander-l2-dbar-existence",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 falsely asserts Lφ(v)=⟨Hv,v⟩ under the supplied linear-first inner product; the correct matrix is Hᵀ. For H=[[2,i],[-i,2]] and v=(1,i), Lφ(v)=6 but ⟨Hv,v⟩=2. Thus its cited identification and positivity inference are invalid.",
      "context_sha256": "80baf748aa7338652bcd3f08fd253f5fdf165b5c1b4a43b42cb6ca3f55926caf",
      "item_sha256": "f26b543e5ec056cd260dbcb447530ea969abc106a97f1160a90fbe55f26dd7b3",
      "at": "2026-10-01T20:58:07.398Z"
    },
    {
      "id": "ex-explicit-dbar-solution-with-l2-estimate",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F7 inaccurately restates a compact-interval substitution theorem as an unconditional improper-integral identity. Continuity alone does not ensure existence: for ψ(r)=r and h(y)=sin y, neither improper integral converges.",
      "context_sha256": "7c78e21f0139572ca0bae0fa88c290c9fea53a31ad33c6c8d489a4286d78ea79",
      "item_sha256": "854b1a7928d9b959f7b9ec1b72d16431c6d352204ad8a81d485f99da3c411c56",
      "at": "2026-10-01T20:58:26.362Z"
    },
    {
      "id": "ex-hormander-estimate-with-gaussian-weight",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 extends a compact-interval substitution theorem to improper integrals for arbitrary continuous h without convergence hypotheses. With ψ(r)=r and h(y)=sin y, both displayed integrals are undefined. The cited interface does not license this restatement.",
      "context_sha256": "c5443c31b2b0e24b8507f2ccf1fc78f898425ae3ef74767b29355f10a46b5740",
      "item_sha256": "a38cb3de3e5045826e16845f3dc03e5e3022c5df8db8491617283f0dccd0408c",
      "at": "2026-10-01T20:58:25.950Z"
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
