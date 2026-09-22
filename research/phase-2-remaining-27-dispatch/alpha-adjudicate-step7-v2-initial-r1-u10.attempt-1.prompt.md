# Step 7 batch adjudicator

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and the generated task fully.
You are the Sol xhigh adjudicator for one assigned batch in 7.1 or 7.5.
The task binds the run, round, exact rejections, ownership, evidence inputs and
output schema. Do not substitute a historical task or receipt.

Logical validity is the ground truth. Independently inspect each rejected
statement, proof, definitions, actual dependencies, page interface and contract.
A judge's rejection or an earlier acceptance can be mistaken. State uncertainty
honestly. When unsure, search the web and read the relevant complete arguments
in authoritative sources; record exact sources and what they establish. Sources
can also err: verify their hypotheses and reasoning rather than treating their
reputation as proof. Never invent reading, confidence or completed checks.

Adjudicate every assigned rejection against its exact rejected carrier. Record
confirmed fatal and nonfatal defects, false positives and unresolved
uncertainty using the task's schema and concrete mathematical evidence.
Multiple rejection rows for one item still require complete coverage.
Repair all confirmed defects, including nonfatal defects, in assigned items and
local contracts/metadata. Fatal classification controls only the threshold;
a sound item needs no cosmetic rewrite. Preserve the content contract and
Foundations boundary. Unresolved mathematics blocks closure.

You and all three owner repair agents may author new items only to satisfy
genuine unmet prerequisites of assigned repairs. Identify the precise missing
claim, its consuming proof step and why existing items cannot supply it.
Do not add unrelated results or assume the missing claim. Fully author the
definition or proof, state exact hypotheses and dependency uses, and apply the
same logical and source-evidence standard as to every repaired item.
Choose unique IDs after checking existing IDs, aliases and current assignments;
resolve an ownership or ID collision before writing. Register each addition in
the canonical registry/index, owning page, applicable manifest and proof contract
through the task's serialized integration path. Do not leave orphan item files.
Include each new item and its creation evidence in the generated task's result
schema. Declare dependency edges and discover all downstream consumers of the
addition, including published consumers. Complete their relevant repairs before
certification. New items enter the central certification inventory and complete
gate battery; they do not enlarge the frozen original-frontier denominator or
permit self-issued judge verdicts, certificates or pass stamps.

Identify every relevant downstream consumer throughout the library, including
published items and consumers outside this run or batch. Inspect transitive
dependencies, citations, proof uses, definitions and page interfaces. Give exact
paths, affected clauses, required repairs or reasons no repair is needed.
A mechanically discovered candidate is not automatically defective.
Route targets outside your write ownership to the three owner repair agents;
do not overlap their writers or defer a relevant published consumer.
Record newly discovered targets even when absent from the initial task.

Run focused local checks and report actual results. Update only assigned
evidence and files; use the task's integration route for shared ledgers.
The published-consumer-supplier ledger contains mathematical findings and audit
status, not dispatch history. Preserve prior round evidence.

Return the exact structured result requested by the generated task, with every
decision, changed item, downstream finding, source and unresolved point.
The report is `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], downstream:[]}`.
Copy `input_sha256` from the generated task; it binds the exact assignment.
Each exact rejected tuple needs a decision with `id`, `model`, `context_sha256`,
`outcome` (`confirmed_fatal`, `confirmed_nonfatal` or `false_positive`), `reason`,
`uncertain:false`, `source_urls` and `familiar`. Every assigned item also needs
a review with `id`, `disposition` (`repaired` or `unaffected`), `post_sha256`
(the current itemHashGuard), `review_context_sha256`, and the same evidence fields.
Immediately after completing each review, before editing another supplier, run
`node tools/step7-workflow.mjs review-contexts --run RUN --items ID` and copy both
hashes. Items reviewed together on a stable state may be batched. Preserve the
original review hash if a supplier later changes; never refresh it without
reviewing the new effects. The engine schedules any required continuation.
Reasons must contain
at least 40 characters of actual mathematical explanation. `downstream` contains
item IDs. Honest unresolved uncertainty blocks completion; never set false to
satisfy the schema when uncertain. Empty assignments return empty arrays.
Do not write judge verdicts, stamps, central certification or round state.
Do not launch workers, judges or another cycle. The engine collects all batch
results, dispatches exactly three downstream owner lanes, then certifies the
stable complete state once after every writer drains.
ALL assigned repairs and all relevant downstream repairs must be complete
before that certification pass. A successful dispatch or empty active writer
list alone does not establish completion; any unfinished repair blocks it.
Newly discovered downstream work continues in the repair phase with fresh
disjoint assignments until all effects are resolved. Never enter certification
with known additional repairs awaiting a later round.

Terra rejudgment and renewed adjudication/owner repair/certification repeat
under engine control until the latest round's unique fatal original-frontier
items are strictly below 5% of the frozen original scope. This never permits
unresolved defects, uncertainty or incomplete downstream coverage.


---

# This dispatch

run: phase-2-remaining-27
role: alpha-adjudicate
label: step7-v2-initial-r1-u10
covers: 10
output: research/phase-2-remaining-27-step7-v2/step7-v2-initial-r1-u10.json

# Step 7 adjudicate: initial, round 1, unit 10

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/initial-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-initial-r1-u10.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Read all cited suppliers and relevant consumers. Repair confirmed fatal defects fully. Identify all downstream consumers, including published items.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run,phase,round,unit,input_sha256:"ac52953837f71781b0c07653d319517d1817546b89ee1decf768421291c215c2",decisions:[],reviews:[],created_items:[],downstream:[]}. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters); unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run phase-2-remaining-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of item IDs; include consumers reached through changed intermediate items.

Assigned input:
[
  {
    "id": "def-stiefel-whitney-classes-from-the-projective-bundle-relation",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[F1] inaccurately restates the projective-bundle theorem: it applies only when B is paracompact Hausdorff CGWH of CW homotopy type, but the item assumes merely an undefined “admissible base.” Thus the asserted coefficients are not licensed under its stated hypotheses.",
    "context_sha256": "d0c80335e5a211667822e77ae6b450039c273bc2b7940c57ad120a359fbd4b37",
    "item_sha256": "869561fc6511d9955c2081f9b73bee7b137a1e1bd643e97c8f2df3015a2e0595",
    "at": "2026-09-21T13:06:59.300Z"
  },
  {
    "id": "thm-uniqueness-of-stiefel-whitney-classes-from-normalization-naturality-and-sum",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F2 is not licensed by its cited interfaces: the tautological-degree-one definition supplies a classifying map only for gamma_E over P(E), not for every numerable line bundle L over an admissible base. The required global classification theorem is absent, so step 1.1 fails.",
    "context_sha256": "fd3baf20ba0af2fad01f94589c5fddbb33abd2199cd9c648383158863515c284",
    "item_sha256": "03a0787d98cee20a563c469185e62f7ca19818feb25db93712eeee8ae27b6dcf",
    "at": "2026-09-21T13:07:28.755Z"
  },
  {
    "id": "def-euler-class-by-zero-section-pullback-of-the-thom-class",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Rank-zero claim is false for an arbitrary supplied orientation: normalization gives u=o and e(0_B,o)=o, not always 1. The cited Euler-class interface explicitly restricts the value 1 to the standard unit orientation.",
    "context_sha256": "788d40e6da963134865ce1f33959c1764ff39dcfdd9d107706fe4904088c51b6",
    "item_sha256": "6cda810b4745dfea2ca641999ff24a526e6f3bd586f4a8a53bbd8bd955f1b832",
    "at": "2026-09-21T13:07:41.633Z"
  },
  {
    "id": "prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F1 inaccurately replaces an orientation (a section of the orientation cover) by selected top-exterior-power generators. Such representatives are not part of the interface, so step 1.1's claim that -id carries the selected generator to the selected generator is not licensed.",
    "context_sha256": "6fd554f6d4042341c7dbc7874d76b42715032ef986fa7a636346a5bcf4427265",
    "item_sha256": "acbba6fce6768e7c966ed7034e1dcb9798217750669662402fc9f78e92766d0f",
    "at": "2026-09-21T13:08:29.706Z"
  },
  {
    "id": "prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 3.1 falsely says the Gysin image is the cyclic subgroup generated by e(E). For disconnected B, H^0(B;R) acts independently on components, so its image need not be cyclic. e(E) being in the image is enough, but the stated inference is invalid.",
    "context_sha256": "a879652d6dc4568d2344c2010c7aa7230fdb65ceffe8d2c03dca4cf508153baf",
    "item_sha256": "6eb977078ee6b21bb289469387bf0eab83d72d8243a73699df77b114b93c6074",
    "at": "2026-09-21T13:08:40.996Z"
  },
  {
    "id": "ex-euler-class-of-zero-and-trivial-positive-rank-bundles",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[F2] inaccurately restates its dependency: the proposition applies only to R-oriented numerable real bundles over bases in the general Thom scope, while F2 asserts the conclusion for any oriented positive-rank bundle.",
    "context_sha256": "664e7512bc746312cb9dabaf70c62f4a22a1e72c5f3ce69c662197113e8859fc",
    "item_sha256": "4aa1cb30497f474fb11f6a8558794753e92c5dec5c2f0e52e34f7bd0c3b43f9e",
    "at": "2026-09-21T13:08:48.179Z"
  },
  {
    "id": "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The title falsely asserts CW type without the additional CW-type hypotheses. Take the identity numerable bundle over B=Q with point fibre: Q is paracompact Hausdorff, but not of CW homotopy type, so its total space is not either.",
    "context_sha256": "9fa9f9e8b6311b58d79adac3ab7928d3f780acc95079f5ec46caea7e6720f22f",
    "item_sha256": "26570758b1452fa1b6ce565adce6030e56029d9e871ca46490c7f1d7f95fc3cb",
    "at": "2026-09-21T13:08:56.544Z"
  },
  {
    "id": "thm-naturality-orientation-sign-and-whitney-product-for-euler-classes",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F4 is an inaccurate restatement: its dependency constructs f^*E and f^*s only, not disk/sphere bundles or a map of pairs. Step 1.1 needs that unlicensed pair map to apply F5, so its naturality proof is unsupported.",
    "context_sha256": "210e4db472a773de2e985cb8480e3cf49ca83677aa63c3dde1d1d5ddd00c0f0b",
    "item_sha256": "c1dafc2bdc3e25e252bc096bba70dcc2e8a21893f3e00e4cf2a5b1edfc8d88f1",
    "at": "2026-09-21T13:09:01.452Z"
  },
  {
    "id": "thm-real-splitting-principle-with-mod-two-injective-pullback",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F2 inaccurately weakens its dependency: the projective bundle theorem requires a paracompact Hausdorff CGWH base of CW type, while F3 supplies only paracompact Hausdorff and CW type. Thus applying F2 to intermediate bases is unlicensed.",
    "context_sha256": "28523ff8df948f344cad3ad158f64e25a35aa6d27622f3ba829ae0143a612cd6",
    "item_sha256": "d43e3530b92f9d2386fbe39a62b25e061fb066b17ac3c381ea7a2d7c44865023",
    "at": "2026-09-21T13:09:04.240Z"
  },
  {
    "id": "ex-euler-class-of-the-universal-oriented-two-plane",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 4.1 is ill-typed: s does not define a map of pairs (M,M\\{p})→(D(L),S(L)), since s is not sphere-valued on M\\{p}. Thus U∈H²(D,S) cannot be pulled back to H²(M,M\\{p}) as claimed, so the local evaluation/sign argument fails.",
    "context_sha256": "a9c0d908458da03b392fb620ba0af4c921be00d79b6a6295635f754cdebf7c26",
    "item_sha256": "58c53a9077895b476ac5c37449233c2cd70fb82a15554a3a9efec31bac05b656",
    "at": "2026-09-21T13:09:13.381Z"
  },
  {
    "id": "thm-whitney-sum-formula-for-stiefel-whitney-classes",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F5 falsely states the projective-bundle theorem for m+n=0. Its interface requires rank at least 1; for P(0)=∅ there is no tautological x and the claimed basis through x^{-1} is meaningless.",
    "context_sha256": "5ac1dadc253a75102f5efab793f076ca64e86b1213b1f428a309a64acf633c2e",
    "item_sha256": "76af4832bfeee730738107909fe3425e3e8d359dc2c4edfd803c270d90b8e5a1",
    "at": "2026-09-21T13:09:20.842Z"
  },
  {
    "id": "cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F4 overstates its dependency: it only classifies based self-maps through based homotopies. Step 1.2 obtains an unbased homotopy from id to a constant and invokes F4 without converting it to a based homotopy, so its nontriviality contradiction is not licensed.",
    "context_sha256": "575b772bfe235b2f4ccab7c8f8e809adcc4fdeadae53cb973067d104aaf51c30",
    "item_sha256": "eaed688ff812b2f154b8287dfa09bca68042f1f8af4a9a9b02c73f090614657f",
    "at": "2026-09-21T13:09:53.732Z"
  },
  {
    "id": "cex-odd-rank-euler-class-need-not-vanish-with-two-torsion-coefficients",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F3 is not licensed by its cited interfaces: Whitney plus naturality does not state that w_i(L)=0 for i>1, so it cannot yield w_3(L_1⊕L_2⊕L_3)=∏w_1(L_i). A rank-vanishing axiom/theorem is missing; thus 2.2 and the witness fail.",
    "context_sha256": "c7cab0840248a6027872176258f88fd9e63338dfd1715548ec16ba8b830a024c",
    "item_sha256": "e36c5ed18fefee4511f51bb7a8cfa191c584dde68689eac534f5bc4c0b08bbc0",
    "at": "2026-09-21T13:10:06.179Z"
  },
  {
    "id": "def-characteristic-class-as-a-universal-natural-bundle-class",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 1.2 never validly proves BSO(n) is CGWH. F6 gives only paracompact Hausdorff CW type; the added claim that compact generation is inherited by open subsets/local charts is false in general. Thus c(γ_n^+) may be outside c's stated domain.",
    "context_sha256": "d711875a6595de3bfdd3fba53a4cd5f231bfbf91381b21a18edb5161e59284e3",
    "item_sha256": "5dadbbf3a133e20d3701c715fb18bb31537be8a05b37a8c9308e69411d7499dc",
    "at": "2026-09-21T13:11:23.354Z"
  },
  {
    "id": "prop-first-stiefel-whitney-class-classifies-orientability",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 4 assumes Fl(E) is admissible, then applies step 3.1 and naturality there. No supplied flag/splitting interface asserts Fl(E) has the required admissible-base properties, so these key applications are unlicensed.",
    "context_sha256": "c10b1e4e490165a2c4ff8453117181ff5b49ba977e710c6a3d98ed923c31a37c",
    "item_sha256": "f921736742e89d1c7b9d954dd6be229acd7e68747134324ebcb4c95aae2b2e01",
    "at": "2026-09-21T13:13:08.211Z"
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
