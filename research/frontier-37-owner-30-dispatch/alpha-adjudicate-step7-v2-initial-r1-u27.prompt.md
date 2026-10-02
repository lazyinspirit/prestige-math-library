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
label: step7-v2-initial-r1-u27
covers: 27
output: research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u27.json

# Step 7 adjudicate: initial, round 1, unit 27

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u27.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"27",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:thm-complex-torus-quotient-is-well-defined, 1:ex-canonical-basis-of-complex-lattice, 2:def-elliptic-function-for-a-lattice, 2:ex-oriented-lattice-bases-and-sl2z, 3:thm-elliptic-function-divisor-laws, 3:thm-weierstrass-p-normal-convergence-and-periodicity, 4:ex-boundary-free-fundamental-parallelogram, 5:thm-weierstrass-p-addition-formula, 5:ex-sigma-simple-lattice-zero, 6:thm-complex-torus-weierstrass-cubic-isomorphism, 6:ex-rectangular-weierstrass-function-and-elliptic-integral, 6:ex-singular-cubic-degeneration, 7:thm-elliptic-cubic-chord-tangent-group-law.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-complex-torus-quotient-is-well-defined",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 7.1 falsely claims the constructed atlas is unchanged by basis choice: for Λ=Z+iZ, bases (1,i) and (1+i,i) give δ=1 and δ=1/√2, hence different fixed-radius charts. They determine the same complex structure, but are different atlases.",
      "context_sha256": "46f6132775b91e49ddba51633e75531919fde71a93db386f299d7a9774bd529f",
      "item_sha256": "43fdb3354e4b3590240bbbf94164acceb820820fef6261e9130a3d20bd2299bf",
      "at": "2026-10-01T20:56:47.623Z"
    },
    {
      "id": "ex-canonical-basis-of-complex-lattice",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 7.1 falsely claims |τ*|>1 implies τ*∈R. For Λ=Z+Z(-1/2+2i), τ*=-1/2+2i attains maximal imaginary part and satisfies step 5.1, but is excluded from R. The proof omits the necessary boundary translation.",
      "context_sha256": "fdd3ddd042917b48714f45406854120802c2bb8e1816a84ec3901b47735a9598",
      "item_sha256": "8708cbb03758a719fce20eb78b602e9ee0516bf64c33ea90a3959d429b95cb99",
      "at": "2026-10-01T20:57:23.011Z"
    },
    {
      "id": "def-elliptic-function-for-a-lattice",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The zeros-and-poles remark lacks a nonzero hypothesis: f≡0 is explicitly allowed and is Λ-elliptic, but every torus point is a zero. Its zeros are neither isolated nor confined to finitely many classes modulo Λ.",
      "context_sha256": "da1c7b31a441fe1f814782472d8dad3348d86081669a28614d43c9be0b4bd8d4",
      "item_sha256": "61ffb3e8fdd6f7cff6e24b8c18f494949ea74aa1d5f6da942d7608f348510bfa",
      "at": "2026-10-01T20:56:40.900Z"
    },
    {
      "id": "ex-oriented-lattice-bases-and-sl2z",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 contradicts the dependency's transition-matrix convention: columns are the new basis coordinates, so (1+i,i) relative to (1,i) requires [[1,0],[1,1]], not [[1,1],[0,1]]. The displayed matrix instead gives (1,1+i).",
      "context_sha256": "bc788d6bdbee945a6633dae26b3fd4ed599e84a7a00169810aa586080b125c6a",
      "item_sha256": "b7232225fb20bb8b97595e82da90d249d2d91496bb9af7fabc08c571b72cf0f7",
      "at": "2026-10-01T20:56:55.448Z"
    },
    {
      "id": "thm-elliptic-function-divisor-laws",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.4 incorrectly places the unshifted half-open parallelogram inside P. For Λ=Z+iZ, a=(1+i)/4 and z=0, its constructed representative is 0∉P. Reduction must use coordinates of z−a; the asserted orbit bijection supporting 2.5 and 5.1 is unproved.",
      "context_sha256": "b475f58305f72075b97d580a8255efc6b8b93ee877d2e1c6d8488cd26708a1e2",
      "item_sha256": "7f952ea19fa1faf2a86b65a77b46117f9352cb9d289b31829ceecba6ff038cb2",
      "at": "2026-10-01T20:56:49.295Z"
    },
    {
      "id": "thm-weierstrass-p-normal-convergence-and-periodicity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 obtains an enumeration from F6, which permits repetitions, then sums it as if each lattice point occurs once. Listing every point twice changes the limit, so step 3.1 does not justify S_N→wp. A repetition-free enumeration is required.",
      "context_sha256": "fc3e1eef046df9f13db9d946dd931d9baff89c444c884d3eefef87add778e3a4",
      "item_sha256": "afec32b28b12c220f4ecb30d8bfb72a3ea722c40108a960f72d9c61322b4bce1",
      "at": "2026-10-01T20:57:49.123Z"
    },
    {
      "id": "ex-boundary-free-fundamental-parallelogram",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The displayed definition of ∂P_b omits 0≤s,t≤1 and includes whole lines. Thus step 2.1 cannot bound w: for f=wp and b=z_j=0, w=λ=n works for every integer n, contradicting its claim that only finitely many λ occur.",
      "context_sha256": "af2e5fb650df245ec42eca0dd392efe5ce30edc69ef33a0a4a55361457cda3b1",
      "item_sha256": "08a862256f5edf05f5adc630219c3cbf4bc9c9b7a472e25de4cc915962521b4f",
      "at": "2026-10-01T20:57:19.778Z"
    },
    {
      "id": "thm-weierstrass-p-addition-formula",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 5.1 falsely claims removability at z≡w without excluding half-periods. For a nonzero half-period w=h, Q_h(h+u)=2/u+O(1), so Q_h²/4 and wp(2h+u) have genuine double poles, consistent with the supplied duplication interface.",
      "context_sha256": "666c47d96ac0ae66330d5ef2eae82d81a94a77edffa761e63dadbaf6b35e6aa7",
      "item_sha256": "b68dd23d4ee8324f90eedd784edb5e318a6a8dc100298e0fa4f0572ddc7e15e2",
      "at": "2026-10-01T20:57:11.083Z"
    },
    {
      "id": "ex-sigma-simple-lattice-zero",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 uses exp'=exp, which neither F4 nor the supplied exponential interfaces establishes. F4 also attributes holomorphy to interfaces stating only the series definition and addition law; no derivation supplies the missing differentiation fact.",
      "context_sha256": "28c59fddafde3fad2d2e90a998e7bef05f722b9f864607598e9e86afe2051647",
      "item_sha256": "b5750c4b544b10bd41666e93cb4f8f808ef020270f8d81b0822406b706036b03",
      "at": "2026-10-01T20:57:10.920Z"
    },
    {
      "id": "thm-complex-torus-weierstrass-cubic-isomorphism",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F11](b) falsely restates the dependency as saying every open bijection is a homeomorphism. Continuity is required: the identity from an indiscrete two-point space to the discrete space is an open bijection but is not continuous.",
      "context_sha256": "ca26438e38dbde1b202d7e2f12a6227e8e4c4722fd0887749022fb266b0623aa",
      "item_sha256": "9defabdf81021ab5fe29df8162a21d724fbcbe479eaab078a69eb97d28deedf3",
      "at": "2026-10-01T20:57:04.678Z"
    },
    {
      "id": "ex-rectangular-weierstrass-function-and-elliptic-integral",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 inaccurately restates the preimage-count dependency: for meromorphic f the integral equals N_w-P, not N_w. For f(z)=1/z, w=0 and the positively oriented unit circle, the integral is -1 although there are no preimages.",
      "context_sha256": "dda82664e589ef149cfdfd92a36c16d317d0d58c8a9e9bf6071d57051a4fbbf6",
      "item_sha256": "6a9c42a1758f91519cef6b6e1a5a2925b4f758eba5a47da417692b7e82d3516f",
      "at": "2026-10-01T20:57:08.253Z"
    },
    {
      "id": "ex-singular-cubic-degeneration",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 omits the cited lemma's requirement of exactly N−1 defining functions. The one-dimensional set {x(x−1)=0, (x−1)y²=0} has Jacobian rank 1 at (0,0), but that point is isolated, contradicting F2's claimed graph conclusion.",
      "context_sha256": "617a64871f27ae1b041de834d9f5d88262467e4965217e648da3f9a599afe974",
      "item_sha256": "1d791e12028f2d45f0a12206061e11955ff641ab0ae200e59bd4f61164c8b7e1",
      "at": "2026-10-01T20:57:50.093Z"
    },
    {
      "id": "thm-elliptic-cubic-chord-tangent-group-law",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 is ill-typed: Φ⁻¹(P) belongs to TΛ, whereas [z]=z+Λ is defined for z∈ℂ. Thus [Φ⁻¹(P)] is undefined, and the displayed operation is not well defined. Transport requires Φ(Φ⁻¹(P)+Φ⁻¹(Q)).",
      "context_sha256": "c0d68f7ba1ee0b74b9674e77f2de3e0d01b6b7546545eee655f787134a274adf",
      "item_sha256": "524bb67cc4e4346c76fb04558fa54e9ea874f5ddc392d401796c2887da9d9207",
      "at": "2026-10-01T20:57:15.695Z"
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
