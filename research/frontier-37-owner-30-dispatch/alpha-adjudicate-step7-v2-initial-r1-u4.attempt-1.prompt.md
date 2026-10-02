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
label: step7-v2-initial-r1-u4
covers: 4
output: research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u4.json

# Step 7 adjudicate: initial, round 1, unit 4

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u4.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"4",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-monogenic-prime-factorisation-by-polynomial-reduction, 1:lem-galois-action-on-the-quadratic-gauss-sum, 1:thm-cyclotomic-ring-of-integers, 2:lem-arithmetic-frobenius-on-a-cyclotomic-field, 4:ex-frobenius-restriction-for-p-five-q-three, 4:ex-second-supplement-from-q-zeta-eight, 5:cor-unramified-prime-decomposition-in-a-cyclotomic-field, 7:ex-arithmetic-of-q-zeta-five.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-monogenic-prime-factorisation-by-polynomial-reduction",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 attributes DVR structure and exact nilpotency indices to [F3], but its supplied interface states only unique finite ideal factorisation. Those additional results are not proved here, leaving the crucial comparison e_i=a_i unsupported.",
      "context_sha256": "42b15bb34661eba64894508b9b6e494ab5431f07204a7a77e694ceda4fafa64e",
      "item_sha256": "b49dbbc1a8a1f917645b3b7bda76e6667660b10104a3e12c83da69fc20b444a5",
      "at": "2026-10-01T20:46:11.454Z"
    },
    {
      "id": "lem-galois-action-on-the-quadratic-gauss-sum",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Convention remark is false: (b^{-1}/p)=(b/p), so the geometric inverse also sends tau_p to (b/p)tau_p, even for nonsquare b. For p=3, b=2, the inverse automorphism is sigma_2 itself and sends tau_3 to -tau_3.",
      "context_sha256": "db9c548457a923a9087e9964b6d5074da78f49c06e42b06400205acf32d15c32",
      "item_sha256": "b5a6841bf3dd39a0976ade82931c54b7c546e2bf9b8b36de9fbc5506543e057c",
      "at": "2026-10-01T20:46:20.389Z"
    },
    {
      "id": "thm-cyclotomic-ring-of-integers",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] incorrectly says coprimality to char(F) is vacuous over Q. Since char(Q)=0 and gcd(m,0)=m, it forces m=1. The supplied compositum interface instead requires char(F) to divide neither exponent, which is vacuous in characteristic zero.",
      "context_sha256": "affe3428242b2d3baeb8c13bcd755e7bd5e76cbd7c7fe08e91bfb97682236f80",
      "item_sha256": "6ad5dbc5ff1ba64d00b0ac50b1231cbe86b513d8a993aa7be688c791c6eca5d9",
      "at": "2026-10-01T20:46:18.413Z"
    },
    {
      "id": "lem-arithmetic-frobenius-on-a-cyclotomic-field",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final remark falsely says arithmetic and geometric Frobenius agree only if ℓ≡1 mod f. They agree whenever ℓ²≡1 mod f; for reduced f=4 and ℓ=3, both are complex conjugation although 3≢1 mod 4.",
      "context_sha256": "772161ede771172aec6b09e550c1cb0278e143c6c47515254d5be414bdc26697",
      "item_sha256": "3577490c82f8c92aead0e40b2f5afaa8329eaab5bd80028ac4a40ba2c14f1e89",
      "at": "2026-10-01T20:46:07.317Z"
    },
    {
      "id": "ex-frobenius-restriction-for-p-five-q-three",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 2.1 and 3.1 assume τ₅=√5 although the given primitive root is arbitrary. F2 licenses this only for the standard root. Choosing ζ₅=e^{4πi/5} gives τ₅=−√5 and Frob₃(τ₅)=+√5, contradicting step 2.1.",
      "context_sha256": "7a5429874e48150dc84656f6057ca835555f310ddf8628e012d255f7ed8d8e8d",
      "item_sha256": "41d2b3270ff25210e6c2d275bbd2fe1f56be6d05e9c2c09c6c04009493555827",
      "at": "2026-10-01T20:46:25.867Z"
    },
    {
      "id": "ex-second-supplement-from-q-zeta-eight",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Example calls Q(√2) “the quadratic subfield” of Q(ζ₈), incorrectly implying uniqueness. Q(ζ₈) has three quadratic subfields: Q(i), Q(√2), and Q(√−2). The cited dependency asserts only that Q(√2) is a quadratic subfield.",
      "context_sha256": "989088db3811c36ccfe7dce2d2abd2a522d209513a5da51407c614ba48acd549",
      "item_sha256": "fb2b6f1c89fe7140a11d4c3195f98b0ce636fc5f65bf86d61e4441627caff163",
      "at": "2026-10-01T20:46:33.079Z"
    },
    {
      "id": "cor-unramified-prime-decomposition-in-a-cyclotomic-field",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 overstates its cited interfaces: the Frobenius lemma identifies the power map, while the residue-degree definition only defines the degree. Neither supplies their asserted order equality or step 3.1's claimed independent confirmation of the count.",
      "context_sha256": "31f34f542b2fc6ddaf467168bee84facc43f478398f9be83f8e9c7cf5a61655e",
      "item_sha256": "bb5f9d8b1ee1b50e09abf7c8f7d7df4a283663801c6910fb8f3ea6ffe7d61740",
      "at": "2026-10-01T20:46:39.845Z"
    },
    {
      "id": "ex-arithmetic-of-q-zeta-five",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The first remark falsely says inertness is the only decomposition case besides complete splitting. For example, 19≡4 mod 5 has order 2, so [F4] gives two primes above 19, each of residue degree 2.",
      "context_sha256": "5c4a1a9bb22d60b3b31fc54a9a035a00c6b828a38be63b368296887b7a39c553",
      "item_sha256": "2cf0d44c6c0ef442b7ad864c4734c1b08a1b6714f4df1bf62ba2d41ba62917d3",
      "at": "2026-10-01T20:46:20.597Z"
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
