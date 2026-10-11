# Step 5 batch adjudicator

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- **Proof repair quality:** Repairs must be mathematically sound and cite dependencies accurately. State important caveats when appropriate, and write concisely without compromising correctness or completeness. Do not repeat the same argument or use unnecessary filler. Add intermediate lemmas when needed to meet prerequisites.
- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the generated task fully. You are the Sol 6.1 high adjudicator for one batch in Step 5.1 or 7.5. The round-bound task defines the run, phase, round, rejected carriers, ownership, evidence paths, and result schema. Do not reconstruct these from historical tasks or receipts.
- Work supplier before consumer, in the task's increasing in-run dependency order. Handle every rejected tuple and group all tuples for one item together.
- Adjudicate and repair only assigned draft items in the frozen frontier at `research/frontier-44-special-representation-examples-28-six-step-step5-v2/frontier.json`. Published repairs have no Step 5 adjudication, rejudge, or item-gate obligation; record them for separate maintenance. Outside-frontier consumers also belong to maintenance, not Step 5 repair or gates.
- Judge mathematical validity directly. Inspect each rejected statement, proof, definition, actual prerequisite, contract, and page interface. Judges, sources, and earlier acceptances can be wrong. Never pretend to understand something you do not; escalate any uncertainty and any potentially defective published consumers to the owner. When uncertain, read complete relevant arguments in authoritative sources, check their hypotheses and reasoning, and state exactly what they establish. Never invent source reading, familiarity, confidence, or checks.
- Cover every assigned rejected tuple. Record confirmed fatal and nonfatal defects, false positives, and unresolved uncertainty with concrete mathematical evidence. Repair every confirmed defect, including nonfatal defects. Fatal classification controls only the convergence threshold; a sound item needs no cosmetic edit. Unresolved mathematics blocks closure.
- For a licensed repair, make the smallest logically sufficient change, preserve the content contract, Foundations boundary, and actual AC requirements, and never weaken a claim merely to pass a check. Run the focused checks named by the task; a material rewrite invalidates the prior `verification.judge` record.
- You may create and fully author new items to meet a genuine unsatisfied prerequisite of an assigned frontier repair. Identify the missing claim, consuming proof step, and why existing suppliers do not suffice; give exact hypotheses, dependencies, and source evidence. Check existing IDs, aliases, and active assignments before choosing a unique ID. Register the item in the index/registry, page, manifest, and contract through the task's integration path. For shared edits, use `tools/step5-shared-write-lock.mjs` acquire/reread/edit/check/release; do not hold the lock while researching or waiting. Include creation evidence. Such additions preserve author-origin and certification integrity, do not enlarge the frozen frontier, and do not enter its rejudgment or gate loops. Step 5.9 permits no additions.
- Propagate downstream work only when the original `## Statement` or `## Definition` changes, including lemma and corollary statements. Compare those sections directly; do not use a semantic classifier. Proof-only, citation, dependency, and metadata edits with unchanged statements do not propagate. New prerequisites count as new interfaces.
- For an interface change, inspect direct dependencies, references, and actual proof/page uses. Record exact affected clauses and paths; explain why unchanged consumers remain sound; propose only necessary minimal repairs. A candidate is not automatically defective. Continue one hop only if a necessary consumer repair changes that consumer's own Statement or Definition; never pre-expand through unchanged statements.
- Report discoveries outside your lane or the frozen frontier without editing their items. For potentially defective published consumers, give the owner/maintenance route the exact affected use and evidence; do not edit or adjudicate published items. Trace any changed published Statement or Definition to direct consumers.
- The engine routes frontier effects to three disjoint frontier-owner lanes. After frontier writers drain, separate maintenance uses three disjoint lanes for outside consumers. Maintenance reports bind exact snippets and `affected_use`, `invalidated_claim`, and `minimality` evidence; this accounting does not replace mathematical reasoning. Handle each supplier-interface event and outside consumer once, without Step 5 gate/context requeues. Every necessary maintenance Statement/Definition change propagates one more direct hop; frontier targets return to ordinary owner work. Finish frontier work and separate maintenance before certification.
- Run focused checks and report their actual results. Update only assigned files and evidence; use the task's integration path for shared ledgers. Keep mathematical findings and audit status in the canonical published-consumer ledger, operational history in run records, and preserve original round evidence.
- Return only the generated schema: `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], created_items:[], downstream:[]}`. Copy identity and input hash exactly from the task.
- Include one `decisions` row per rejected tuple with `id`, `model`, `context_sha256`, `outcome` (`confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`), `reason`, `uncertain:false`, `source_urls`, and `familiar`. A confirmed fatal also needs `defect_type` (`logic`, `dependency_citation`, or `other`) justified by the finding. Never guess a category for historical evidence.
- Include a `reviews` row for every assigned item: `id`, `disposition` (`repaired` or `unaffected`), current `itemHashGuard` as `post_sha256`, `review_context_sha256`, and the same evidence fields. An unchanged item guard requires `unaffected`; explain contract/page-only repairs and set `metadata_repair_only:true` when applicable. Immediately after each review, before editing another supplier, run `node tools/step5-workflow.mjs review-contexts --run RUN --items ID` and copy both hashes. Batch IDs reviewed on the same stable state if useful. Never refresh a review hash after supplier changes without examining their effects.
- If you author a prerequisite, include a `created_items` row with `id`, `kind`, `home_page`, `batch`, direct `consumers`, `reason`, `uncertain:false`, `source_urls`, and `familiar`. Every created item also needs a review; only a newly created item uses `authored` disposition.
- List affected item IDs in `downstream`, including every direct dependency/reference consumer after a Statement/Definition change, even if its use remains sound or it already has an assigned review. This is an examination inventory, not an edit list. Record each exact affected use and disposition in the report. For a consumer missing from the dependency/reference graph, include `downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}`. Route outside consumers to separate maintenance.
- Give authoritative source URLs actually consulted when unfamiliar; `familiar:false` requires those URLs. Unresolved uncertainty is a blocker, never a false-confidence statement. Empty assignments return empty arrays. Do not claim independent review of your own repair.
- Do not write judgments, stamps, central certificates, or round state; do not launch workers or another cycle. The engine collects evidence, completes frontier repair and separate maintenance, and certifies once all writers drain. A successful dispatch alone does not close unfinished work. Repeated pending work at an earlier assigned content state holds for operator resolution.
- Rejudgment and renewed frontier adjudication, owner repair, and certification repeat until unique confirmed fatal original-frontier items in the latest round are strictly below 5% of the immutable original scope. The threshold permits the final scoped gate; it never permits unresolved defects, uncertainty, or incomplete closure.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.


---

# This dispatch

run: frontier-44-special-representation-examples-28-six-step
role: alpha-adjudicate
label: step5-v2-initial-r1-u48
covers: 48
output: research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u48.json

# Step 5 adjudicate: initial, round 1, unit 48

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-48-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u48.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"48",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-laurent-binomial-valuation-at-one-over-any-field, 1:def-type-a-affine-presentations-and-charged-cyclotomic-quotients, 1:lem-universal-nondegenerate-affine-hecke-ordered-monomials-form-a-basis, 2:lem-selfadjoint-weight-gram-valuations-detect-jantzen-classes, 2:lem-symmetric-polynomial-centers-have-primitive-split-content-idempotents, 4:def-cyclotomic-hecke-central-content-sector-notation, 5:lem-charged-core-height-matrices-have-content-preserving-descent-and-minimal-switch-connectivity, 14:lem-cyclotomic-klr-block-satisfies-the-hecke-relations, 14:lem-hecke-intertwiners-produce-local-klr-generators, 17:thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular, 18:lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular, 19:lem-cyclotomic-semistandard-row-type-sums-give-permutation-module-bases, 22:lem-cyclotomic-schur-generic-deformation-standards-have-nondegenerate-forms, 27:lem-fixed-component-core-multipartitions-are-cyclotomic-jantzen-connected, 32:cex-the-whole-affine-hecke-algebra-is-not-one-cyclotomic-klr-block.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-laurent-binomial-valuation-at-one-over-any-field",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] inaccurately restates def-discrete-valuation-ring: that interface only defines DVRs from existing valuations; it does not establish that F[t] localized at (t-1) is a DVR or that polynomial multiplicity is a discrete valuation.",
      "context_sha256": "d8189be06937e85beb06e1b0cc0139fef730379e496b4252e9ae50877a59e3dd",
      "item_sha256": "07b21aacb5a7693e428db0135337fc3c26986f1cb17c756437369ef33a82ec23",
      "at": "2026-10-11T15:31:26.418Z"
    },
    {
      "id": "def-type-a-affine-presentations-and-charged-cyclotomic-quotients",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The charged clause imposes f(z_1)=∏_i(z_1-c_i)^{λ_i}, but never sets this polynomial to zero. This merely defines f. At rank one with λ_0=1, the intended quotient is F; the displayed relation leaves the affine algebra, contradicting the level-one interface.",
      "context_sha256": "ab0f59b415eaa01d60efd3c422496b3abfe21199fa4ea6f2f4e6facf7e2b5c4b",
      "item_sha256": "c1541f77112b9cc9e44c826954413c306dc8e9ddb3f096e8d3128a968dffd94d",
      "at": "2026-10-11T15:31:33.670Z"
    },
    {
      "id": "lem-universal-nondegenerate-affine-hecke-ordered-monomials-form-a-basis",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 attributes the Bruhat subword theorem to the Coxeter-presentation dependency, whose supplied interface states only the group presentation. This strengthened dependency restatement is neither supplied nor proved locally.",
      "context_sha256": "acd547250f06ebd28d930be2b7cdc5a078b38d7efdcd21a240be51d3e577bb3e",
      "item_sha256": "7776d61ee179c6d8872eca9cfa2c3d3d614981e5741f28b45fc063fb2f3d8c95",
      "at": "2026-10-11T15:31:57.335Z"
    },
    {
      "id": "lem-selfadjoint-weight-gram-valuations-detect-jantzen-classes",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] inaccurately restates def-left-and-right-modules as supplying DVR submodule freeness; its interface contains only module axioms. Step 1.1 relies on this unsupported dependency assertion to establish freeness.",
      "context_sha256": "c2df7b6cde595745b05abc8faf912c9e591ee05f2ec0605aeb49477561f1cc78",
      "item_sha256": "0432456199ab60963adcd31382f00283fa3f6871751428e5a4b45220c7039c16",
      "at": "2026-10-11T15:32:06.186Z"
    },
    {
      "id": "lem-symmetric-polynomial-centers-have-primitive-split-content-idempotents",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] inaccurately restates def-symmetric-polynomial: its interface defines permutation invariants but does not assert generation by elementary symmetric polynomials. [F3]'s nilpotent-ideal criterion is likewise absent from its cited dependency.",
      "context_sha256": "c66335bc9d2e7047f9ed0bfd116e4f55b8a2663592254cab4bc4f5fdd94d474b",
      "item_sha256": "a8c9ae5f8b1f08a0dabe81dfc7d85559e576a0b07592823a5255ffd8cf64d4ac",
      "at": "2026-10-11T15:31:40.962Z"
    },
    {
      "id": "def-cyclotomic-hecke-central-content-sector-notation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The y_r sums are unrestricted and need not belong to the named sector. For F=F_3, q_H=1, d=1, Λ=2Λ_0+2Λ_1, y_1=xe(0)+(x−1)e(1) has a nonzero e(1) component, so y_1∉H^Λ_{α_0}. Restrict each sum to tuples of content α.",
      "context_sha256": "13c7789dea917d068e53c745049199f4fdc7008d0ec6e638ecf17dacdb9e408c",
      "item_sha256": "92cb4a71a3240c6e2d639892cf04b8c4bb9ef818cbfce0eb76d5a2b66a058ed7",
      "at": "2026-10-11T15:31:58.530Z"
    },
    {
      "id": "lem-charged-core-height-matrices-have-content-preserving-descent-and-minimal-switch-connectivity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title asserts content-preserving descent, but step 3.1 preserves only the hub. Every strict size decrease necessarily changes content, since size equals the sum of residue counts. The title therefore claims more than the proof establishes.",
      "context_sha256": "09e20c650c4b869b8e285df3aa7b157ef835cba259b39475544e8858769a5819",
      "item_sha256": "8a7f8c30e72a553fe5317a04eaf0d04b31dd39fd48fc30f106bdb8e1e0479cce",
      "at": "2026-10-11T15:32:21.211Z"
    },
    {
      "id": "lem-cyclotomic-klr-block-satisfies-the-hecke-relations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 1.1–3.1 invoke the supplier's purported affine crossing/braid calculations and six-coefficient Hecke table. Its supplied interface establishes scalar normalizers and Hecke-side intertwiners, not those prequotient calculations; the essential inference is unlicensed.",
      "context_sha256": "3bd3bdeb05d376b29ecd077d47918ff5d594cc4c25180ae56d68ef4bc5234331",
      "item_sha256": "18edb02d9f7b6c5657fc1b6c1644eaf43c9186966c4688e69e7733b584b814dd",
      "at": "2026-10-11T15:32:51.464Z"
    },
    {
      "id": "lem-hecke-intertwiners-produce-local-klr-generators",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 falsely claims invertibility off e(i). In the supplied F3 S3 example, x1=0 and both e(0,1,2) and e(0,2,1) are nonzero, so x1-0 vanishes on a complementary summand. Cancellation requires the other residue factors to be invertible on e(i).",
      "context_sha256": "119cccb125b56b0ece23f76a52178addd8436322e08c3c1fa7539a71952266e7",
      "item_sha256": "99e35afb76c7bfe650523a4269c6d8642355c24d2fbb1fa78bf1c810f60dc48e",
      "at": "2026-10-11T15:34:04.174Z"
    },
    {
      "id": "thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 wrongly includes the supplied degenerate q_H=1 branch among unit-parameter specializations. Over F_2, n=1 and Λ=Λ_0+Λ_1, that algebra is F_2×F_2; specializing z=U_1=U_2=1 instead gives F_2[ε]/(ε²).",
      "context_sha256": "2f84570a475838c763c4cfae438d4180cba64a2293a2ea16bdabb0318041d3c6",
      "item_sha256": "0cc2183f8a6e1136c13406e8e58e27594747e159acb12f756f374d3eb6948635",
      "at": "2026-10-11T15:33:42.151Z"
    },
    {
      "id": "lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 is false for empty components. At level 2, λ=(∅,(1)) and k=1 give a_k=0 and m_λ=1. The higher ideal is R(X_1−U_2), so m_λ(X_1−U_1) has nonzero image U_2−U_1 over the universal ring.",
      "context_sha256": "2f7cbe1ac45d667b07fa7db2a38b1f5a3122d862adc0f64d2766972c40675818",
      "item_sha256": "10f4c71ee9900dfba711a3b19914a5e5a850c12eab6ef4970a91ca0837737b62",
      "at": "2026-10-11T15:32:49.790Z"
    },
    {
      "id": "lem-cyclotomic-semistandard-row-type-sums-give-permutation-module-bases",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 5.1 gives the full left cell's parabolic multiplicity as the flagged count. For n=2, ell=2, lambda=mu=((1),(1)), the parabolic is trivial and the cell has dimension 2, but the flagged sum is 1. The needed restriction formula for the flagged subspace is unproved.",
      "context_sha256": "a603178b9b8cadfc5a534f458fb722debb8ac10fcc8e885195e8c06eff7e5f61",
      "item_sha256": "f8d5e0b7fd310ebced6cc6b264afcba4f957a9ebdf3c50576f81cf3a6a3bf75a",
      "at": "2026-10-11T15:33:09.976Z"
    },
    {
      "id": "lem-cyclotomic-schur-generic-deformation-standards-have-nondegenerate-forms",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 inaccurately adds a “nondegenerate-or-zero” dichotomy absent from its supplier. For the allowed specialization ℓ=1, n=2, z=-1 over Q, Δ_(2) has cellular Gram matrix diag(1,0): its form is nonzero but degenerate.",
      "context_sha256": "1c7f77eac94fb97141a073f534978384e175bd9c6a5c681ee62b9e5a20aca9b2",
      "item_sha256": "e3d64cd24c48df2773c666dea68f05402248d9125fe7bcfe417d80587ff3cb1f",
      "at": "2026-10-11T15:32:46.561Z"
    },
    {
      "id": "lem-fixed-component-core-multipartitions-are-cyclotomic-jantzen-connected",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 ignores component charges. For e=2, q=-1, charges (0,1), its runner rule transfers ((2),∅) to (∅,(2)). The unique hook pair has foot difference t²+t⁴, a unit in characteristic zero, so J=0; the asserted transfer edge fails.",
      "context_sha256": "b2eb265f868a4316c2b7060c01a11795a70b573782eb4677e8b16201a70a638c",
      "item_sha256": "4642d339b16941202e10ed5b8ae69ef069abd8d1d7746ebfd01c07c31e975810",
      "at": "2026-10-11T15:33:09.627Z"
    },
    {
      "id": "cex-the-whole-affine-hecke-algebra-is-not-one-cyclotomic-klr-block",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 and the title omit a positive-rank hypothesis. At rank zero the supplied interfaces give the whole affine algebra H_0=F and the unique cyclotomic KLR block R^Λ_0≅F, contradicting the unqualified nonisomorphism claim.",
      "context_sha256": "6b9b1ba570a7dc16c9ede4a4c884cdad5fcaa1ea6c7e558f426c6076f6413146",
      "item_sha256": "102d678acb4840be8995fec884adf79ae4b61b38a0c1fa84e6ce5b376682b2fa",
      "at": "2026-10-11T15:32:50.938Z"
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
