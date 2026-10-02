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
label: step7-v2-initial-r1-u24
covers: 24
output: research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u24.json

# Step 7 adjudicate: initial, round 1, unit 24

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u24.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"24",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-riesz-measure-subharmonic-function, 1:def-logarithmic-capacity-compact-set, 1:lem-logarithmic-potential-distributional-laplacian, 1:lem-logarithmic-potential-maximum-principle, 1:thm-riesz-measure-is-positive-radon, 2:def-fekete-points-and-transfinite-diameter, 2:def-polar-set-and-quasi-everywhere, 2:thm-equilibrium-measure-existence-and-uniqueness, 2:thm-riesz-decomposition-subharmonic-plane, 2:ex-cantor-sets-with-positive-and-zero-logarithmic-capacity, 2:ex-riesz-measure-of-log-modulus-is-zero-divisor, 3:def-green-function-with-pole-at-infinity, 3:lem-compact-polar-sets-and-subharmonic-minus-infinity-loci, 3:ex-finite-and-countable-sets-are-logarithmically-polar, 3:ex-logarithmic-capacity-of-disc-and-equilibrium-circle, 4:ex-logarithmic-capacity-of-a-real-interval, 5:prop-reciprocity-inequality-for-logarithmic-potential, 5:ex-chebyshev-extremal-nodes-and-arcsine-measure.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-riesz-measure-subharmonic-function",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claim that μ_u(φ) is real contradicts the complex test space of def-distribution. For u(z)=|z|² on ℂ and φ=iψ with nonzero nonnegative real ψ∈C_c^∞, μ_u(φ)=(2i/π)∫ψ dA is nonreal.",
      "context_sha256": "0db46ef273f4fcb6e1757970a98e282199186cf8e26ee55e74b8482ccad24dff",
      "item_sha256": "c684a883b7575d3b972e5638a3d925e976262ec56d8ea05fffe11a047aa235d7",
      "at": "2026-10-01T20:55:41.875Z"
    },
    {
      "id": "def-logarithmic-capacity-compact-set",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The cited infimum theorem requires a nonempty subset of R, but the energy values include +∞ and can all equal +∞ even for a two-point K. Its invocation is unlicensed without separating finite energies from the all-infinite case.",
      "context_sha256": "385b9c8ce4d852163e85c6140d8b184518fe6bf57fa5bf64aa11e8f6e5da79f3",
      "item_sha256": "7b17b76a47432a2f6e225ac9fdd6c0ff83c8ae771c4297ad77b633a8b002b7c9",
      "at": "2026-10-01T20:55:48.994Z"
    },
    {
      "id": "lem-logarithmic-potential-distributional-laplacian",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F11 overstates def-support-of-a-borel-measure: the supplied interface defines support but does not establish that it carries μ. The proof repeatedly uses this essential claim without supplying the required countable-base argument.",
      "context_sha256": "22dd925b575a7ac684bb60fbda91c0f8bbd772e2a227d0238cd152ac101b0972",
      "item_sha256": "bcdf82cf3f07576fbcc3e7ba256f0018e3faf9a13ba7cbc957b3d5993677e735",
      "at": "2026-10-01T20:56:12.680Z"
    },
    {
      "id": "lem-logarithmic-potential-maximum-principle",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 asserts that the support carries μ, but the supplied support interface does not establish this. Step 2.1 uses that unsupported assertion to restrict every potential integral to S; a countable-base argument establishing concentration is missing.",
      "context_sha256": "f94e1fce85fcd4fe88ccf65692180544f9ea05835d31fce7674c83045986a414",
      "item_sha256": "1a22c5277ccc7ad009f9794046babb9c076df4537b2a467667c547204706f907",
      "at": "2026-10-01T20:55:44.859Z"
    },
    {
      "id": "thm-riesz-measure-is-positive-radon",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.2 incorrectly asserts that Ωε is open. For Ω=D(0,1) and 0<3ε<1, Ωε is the closed disc {|z|≤1−3ε}. Thus the open-set hypotheses of F9 and F10 are unmet in steps 3.3 and 5.1.",
      "context_sha256": "9e96f13e7a8794cb847529553b12690875f07215fabaf21db79b33146caf2041",
      "item_sha256": "b96719bfb98603f5ab0aa605a445699aa4de4535d308717c8d6b25ef3a81d84f",
      "at": "2026-10-01T20:55:49.291Z"
    },
    {
      "id": "def-fekete-points-and-transfinite-diameter",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Fekete-polynomial paragraph incorrectly says leading coefficients add under multiplication. The cited interface says lc(fg)=lc(f)lc(g). Adding the n unit leading coefficients gives n, so the stated inference to monicity is invalid.",
      "context_sha256": "aef52be9f8bc69b147e7ae130da78f5d1eaa4b86b13034f68abed0ee1288656f",
      "item_sha256": "d340d05389c4fa70d15ad71f127e64fc0ab9843da26ff83416b7977e0db01fed",
      "at": "2026-10-01T20:55:48.515Z"
    },
    {
      "id": "def-polar-set-and-quasi-everywhere",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The compact equivalence is asserted without qualification, but the cited lemma explicitly assumes Dependent Choice. This restatement drops a required hypothesis; the supplied interface does not license an unconditional equivalence.",
      "context_sha256": "0049ed9163ca7f4ed59ad6356e3d6978cbe3885db77b21c653511a77156b0794",
      "item_sha256": "700dd876574006aa6f0609da219ca8597a4aeb997cf92513bf0c953c4d38e761",
      "at": "2026-10-01T20:55:42.371Z"
    },
    {
      "id": "thm-equilibrium-measure-existence-and-uniqueness",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 invokes [F7] on an energy value set containing +∞ (from Dirac masses), but [F7] requires a subset of ℝ. It must first restrict to finite energy values and establish that this restriction has infimum V_K.",
      "context_sha256": "bbf59b6737ba0f7349647d026f634c1371f1a742c53ec3ee3b98569501d81d1d",
      "item_sha256": "c9a47665ffbd421fd353cbb1abeeb860b60675978e884d503ffd75e8993d999f",
      "at": "2026-10-01T20:55:58.184Z"
    },
    {
      "id": "thm-riesz-decomposition-subharmonic-plane",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 requires M to be a measure on B(C), but the supplied restriction interface leaves M on B(Ω). No zero extension is defined, so this application and the integral over C are ill-typed. Step 8.1 also uses the undefined value 1/0 at index n=0.",
      "context_sha256": "c92b0b34e94cf37dce3d9576d0f6d6c9c30232bcd505f4ac6ff46d51d6b7584c",
      "item_sha256": "84914517b257757f2a60ca640e8cbd2a26a657f68f8e88505a5aa643ab5777a3",
      "at": "2026-10-01T20:56:07.387Z"
    },
    {
      "id": "ex-cantor-sets-with-positive-and-zero-logarithmic-capacity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The remark claiming that decay faster than every exponential forces zero capacity is false. With cell lengths e^{-n²}, the equal-branch probability has finite energy, bounded by a constant plus ∑n²2^{-n}<∞, so the resulting Cantor set has positive capacity.",
      "context_sha256": "bc68b8fd021acc4e1af0cfecf7a021d1366c0e9b81daced45c152653f1236932",
      "item_sha256": "642577c2316ca976cf41155827c77886f25fb076ed4e7ba97fbba21cc59709da",
      "at": "2026-10-01T20:56:32.666Z"
    },
    {
      "id": "ex-riesz-measure-of-log-modulus-is-zero-divisor",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 assumes every zero has finite order. The cited factorization interface only characterizes finite order and allows infinite order for local vanishing. Ruling out local vanishing requires an identity theorem, which is neither cited nor proved.",
      "context_sha256": "256108c4452e8577c64d4163186265dd2a65f7c624f9f97af8331e080e513b94",
      "item_sha256": "57ee791e2b78231e96068a09e57f222c6566ec381d2331dfc73ba9984afaef2c",
      "at": "2026-10-01T20:56:34.956Z"
    },
    {
      "id": "def-green-function-with-pole-at-infinity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The finite-pole restatement is ill-typed: K denotes the compact set, so -K(z,a) is undefined. The cited interface specifies g(z,a)=-log|z-a|+h(z), with h harmonic across a.",
      "context_sha256": "f953ef4b05656409f6702648581c0e57c842892835a2f8a816dc58ebd8e97930",
      "item_sha256": "90d110615c66d921535c9e0821b959e91916879aa2fe9f297a6b8a771dcb8353",
      "at": "2026-10-01T20:56:52.201Z"
    },
    {
      "id": "lem-compact-polar-sets-and-subharmonic-minus-infinity-loci",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 13.1 explicitly claims [F8] permits differentiation under the integral twice. Its supplied interface only represents positive C_0 functionals by measures; it provides no differentiation theorem and does not license the asserted inference.",
      "context_sha256": "42f6c23e554d8f94a2a8e21d1b39139429f2c44e01745849e055fd9876baa589",
      "item_sha256": "8adad844800bc29e2b72ceeea7ca9868ee5067197cb691c36728b3d343ee3b95",
      "at": "2026-10-01T20:55:50.181Z"
    },
    {
      "id": "ex-finite-and-countable-sets-are-logarithmically-polar",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.3 falsely asserts that both integrals have finite negative parts. Choose N>|a_1| and z=a_1: σ_N has an atom of mass c_1>0 there, so ∫log^-|a_1-w| dσ_N(w)=+∞, contradicting that assertion.",
      "context_sha256": "b74f8af05554234cce84bc96491b6f80161e381891ed04b54cae79810638cc7d",
      "item_sha256": "bfb8124dba3a15179e17f4864ac1e61378bb7c61eae3a7db2a0dfdedb20dbc82",
      "at": "2026-10-01T20:56:10.254Z"
    },
    {
      "id": "ex-logarithmic-capacity-of-disc-and-equilibrium-circle",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 requires R>2r>diam(∂K), but diam(∂K)=2r for every r>0. The asserted strict diameter bound is false, so the stipulated chain of inequalities cannot hold.",
      "context_sha256": "b85be437c656a1960e9a8de69d20bb5ce8f5e3e7d72985bc11e4df43991d9f46",
      "item_sha256": "ed0bdfb8fd15136482b4d54ef1dae3e970f414a51c44d538e6fd791ec173cbcf",
      "at": "2026-10-01T20:56:13.261Z"
    },
    {
      "id": "ex-logarithmic-capacity-of-a-real-interval",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.2 asserts false scaling laws for arbitrary finite positive measures. For mass M, the energy shift is −M² log β and the potential shift is −M log β. Taking ρ=0 and β=2 contradicts both claimed identities.",
      "context_sha256": "91e88e7082092a067310649bf2e288f522a66f195d8606d98ef972c9b0a1ec6a",
      "item_sha256": "1506d6d30b136ed279ef07c3626a0592f182f94b0a030a63425cb4b4e430474a",
      "at": "2026-10-01T20:56:01.016Z"
    },
    {
      "id": "prop-reciprocity-inequality-for-logarithmic-potential",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The sharpness remark is false. For K=closed unit disk ∪ {2}, cap(K)=1 and μ_K is uniform on the unit circle, but U^{μ_K}(2)=−log 2<0=V_K. Quasi-everywhere equality does not imply equality of the infimum over K.",
      "context_sha256": "ac927ccd01c5c651819421b92e75cfa747158266b4b17042809ddef42dba63d4",
      "item_sha256": "75032855da995ea402c1146c22837e9c32c55a3bbe23fdb7eee8e8b13b7a7db5",
      "at": "2026-10-01T20:55:45.278Z"
    },
    {
      "id": "ex-chebyshev-extremal-nodes-and-arcsine-measure",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 overstates thm-darboux-equals-riemann: its interface equates Darboux integrability with convergence of tagged sums; it does not establish integrability of continuous functions. Step 1.3 uses this additional prerequisite without establishing it.",
      "context_sha256": "7949a896eedd970369628c91bc6d4bddab0dbf17ed3112f7574a2984532aa367",
      "item_sha256": "6fcdb39022b180b1519c1ab92783417c109c15585987a69d4328bd7100c1152f",
      "at": "2026-10-01T20:56:01.327Z"
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
