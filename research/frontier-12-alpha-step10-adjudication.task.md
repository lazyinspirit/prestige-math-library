# Alpha — owner-audit adjudication of five paired-judge rejections

You are the **sole adjudicator** of a paired-judge rejection (CLAUDE.md, owner
2026-07-31). The orchestrator runs gates and maintains ledgers and must not
substitute its own adjudication for yours. Rule the five rows below, from the
**current text on disk**, and record each one.

## How this arose — read this first, it is not a normal step-8

Run `frontier-12` reached step 10 CLEAR with `454/454` judge pairs. The owner
then audited and reported two rendering defects. The orchestrator made **eight
draft-item edits**, which lapsed those items' judge coverage and forced a
rejudge. That rejudge is what produced these five rejections. So:

- **Nothing here came from an authoring Beta.** Five of the eight edits are the
  orchestrator's, and you should judge them as sceptically as anything else.
- **Three of the eight now hold a clean paired pass** and are closed:
  `lem-pullbacks-of-monomorphisms-are-monomorphisms-and-pushouts-of-epimorphisms-are-epimorphisms`,
  `ex-gradient-theorem-for-a-polynomial-potential`,
  `ex-scalar-line-integral-over-a-unit-semicircle`.
- **Zero items were rejected by both lanes.** Every row below is a single-lane
  rejection, so weigh it accordingly — but DeepSeek is the only cross-family lane
  in this lineup and it was confirmed correct twice on `lem-green-type-ii`
  earlier in this run.

### Exactly what the orchestrator changed

**Two `{CD}` → `tikzcd` conversions** (presentation only). `$$\begin{CD}…\end{CD}$$`
did not render: `rendercheck` requires single-line display math, `remark-math`
parses that as an `inlineMath` node, and KaTeX rejects `{CD}` outside display
mode. Both were converted to ```` ```tikzcd ```` fences in `## Statement`,
matching `thm-snake-lemma-for-modules` on the same run. Objects, arrows, labels
and directions unchanged; trailing `,` / `.` inside the old CD bodies dropped.
Affected: `lem-pullbacks-of-monomorphisms-…-are-epimorphisms`,
`thm-pullback-and-pushout-pasting`.

**Six Newton-Leibniz Fact restatements.** `thm-newton-leibniz-with-interior-derivative`
requires `f` Riemann integrable with `f = G'` on the interior. Six items restated
it without that hypothesis. Each was rewritten to the phrasing four *published*
citers already use — "a continuous function with an interior derivative admitting
an integrable extension". Only that clause changed in each item; **no proof step,
no `deps`, no frontmatter was touched.** Affected: `lem-green-type-i-boundary-identity`,
`lem-green-type-ii-boundary-identity`, `ex-constructing-a-potential-on-an-open-rectangle`,
`ex-gradient-theorem-for-a-polynomial-potential`,
`ex-scalar-line-integral-over-a-unit-semicircle`,
`cex-the-one-form-y-dx-is-path-dependent`.

## The five rows to adjudicate

Each names the model, its verbatim objection, and the exact hashes to record.

### 1. `lem-green-type-i-boundary-identity` — DeepSeek
`item_sha256` `14ad9faf03ea458f94afd901abf15ae905ac70712375717e1e47ccf9512a5a96`
`context_sha256` `02a9368a59e16658e1e8608519e1802bc13d16ddbeb423b1fb5fabf84cf3dec3`

> Step 1.2 uses alpha<beta on (a,b) and continuity/piecewise-C1 of alpha,beta, but
> the Type I region definition is not cited in deps or listed as an L fact; [L1]
> only gives the orientation, so the Newton-Leibniz step is not licensed by the
> cited facts.

**Verify this from disk.** The orchestrator confirmed that
`def-type-i-type-ii-and-elementary-green-regions` is absent from this item's
`deps` while its Type II sibling **does** declare it. That asymmetry is fact, not
allegation. What you must rule is whether the omission is a fatal
`dependency_citation` defect or a nonfatal declaration gap, given the Statement
itself says "be a Type I region".

### 2. `lem-green-type-ii-boundary-identity` — DeepSeek
`item_sha256` `8f13bfcea9a2161c90c6c9295c8a84437d9ba9256b9745829b708452fec33c9f`
`context_sha256` `95929f4f957b116ba196fc0030f09d0ff099fc566d1014c8654fb83a4f59a048`

> Step 2.2 asserts each section interval is Jordan measurable from its finite
> boundary, but no cited fact in the item or its dependencies establishes compact
> intervals are Jordan; L8 then cannot be applied to get section integrability.
> Missing dependency.

**Escalation is live on this item.** `touchlog` now records **four touches**:
step-5 authoring, your step-8 endpoint repair, your step-8b transpose repair, and
the orchestrator's step-10 `[L4]` rewording. It is the run's most-touched item by
a clear margin, and DeepSeek has now rejected it on **four different grounds**,
having been confirmed correct on the first two. Fatal repairs are uncapped
because a proof that keeps yielding real fatal defects is either converging or is
actually false. **Say which it is**, explicitly, in your report.

### 3. `ex-constructing-a-potential-on-an-open-rectangle` — DeepSeek
`item_sha256` `e2f71c033c34e25ef1319b842e5013fec4b0993ed6b923d9780003433f7726dc`
`context_sha256` `4cff66f13ed22f5d68eaf57d4d4fe68a5f5360c2b780482892f485bb45e02c7e`

> [L4] drops the cited theorem's a<b hypothesis and step 1.2 applies it to
> integrals whose variable upper limits x,y may be below the basepoint a,b, where
> the cited Newton-Leibniz theorem does not license the endpoint evaluation.

This one bears directly on the orchestrator's own repair: it fixed the
integrability hypothesis and left `a<b` unstated, as the original did. The
substantive question is whether the library fixes an orientation convention for
`∫_a^b` with `b < a`, and whether anything on this page or in its dependencies
supplies it. **Check, do not assume.** This item is at two touches.

### 4. `thm-pullback-and-pushout-pasting` — Terra
`item_sha256` `787ca0d8d0056ae35248d112b65411c6b09a9a8b274148f73c44a0e97def4aa2`
`context_sha256` `971bd558af3f60a98dccc8761d693e21b8b37fd005a32f3fa851706f471151a1`

> Step 1.2 uses commutativity of the left square to assert that y after a after u
> equals d after x after u, but cites only F1. F1 gives a pullback universal
> property and does not establish that square equation.

Commutativity is supplied by the **Given** ("The displayed commutative diagram"),
and step 1.2 tags `[F1]` alone. Rule whether a missing `given` in the step tag is
fatal or nonfatal. Note the orchestrator's edit to this item was the diagram
markup only — but **satisfy yourself the `tikzcd` transcription is faithful to
the `{CD}` source it replaced**, since you can see both in `git diff`.

### 5. `cex-the-one-form-y-dx-is-path-dependent` — Terra
`item_sha256` `20c324e0ab7097138ca22b11a9f9d447a86273b974332205e83ce42472933ea7`
`context_sha256` `304f40b46a7888abec01c1dd8406613cb6abd66d73fde436c274d1da7471997f`

> L3 overstates its citation: the cited theorem requires an open set and a
> continuous vector field, but L3 asserts the equivalence on any piecewise-C1
> path-connected domain without those hypotheses.

`thm-path-independence-iff-zero-closed-loop-integrals` does open "Let `U ⊆ ℝⁿ` be
open and piecewise-C¹ path-connected, and let `F:U→ℝⁿ` be continuous". `[L3]` as
written carries neither hypothesis. Terra is describing the **same defect class**
the orchestrator just repaired in `[L4]` of this very item, on a different fact.

## The pattern worth naming

Four of these five are the same shape: a `[F#]`/`[L#]` fact restating a cited
result with a hypothesis or a dependency dropped. CLAUDE.md's citation rule is
strict — "no changed domain, quantifier, hypothesis, direction or conclusion".
Each fresh judge read of this page surfaces another instance. In your report,
say whether you regard this as a **page-wide defect class on
`line-integrals-and-the-gradient-theorem`** warranting one systematic pass, or as
five separable nitpicks. The owner will decide what to do about it; you supply
the finding.

## Rules binding you here

- **R1, fatal-only (owner 2026-08-03).** Only a `confirmed_fatal` adjudication
  licenses an edit. `confirmed_nonfatal` and `false_positive` close the row with
  **no content, page, frontmatter, contract, impact or judge mutation whatsoever**.
  A touchlog baseline `owner-audit-adjudication-baseline` was taken immediately
  before this dispatch and `tools/step8-guard.mjs` will be run against it, so an
  unlicensed edit will be caught mechanically.
- **The 30-second rule.** A logical gap a competent human reader closes in 30
  seconds is **nonfatal**. You may record it; you may not call it fatal or start
  a fatal repair cycle over it. Note the polish licence is withdrawn at this
  stage — nonfatal means close the row and change nothing.
- **Inspect the cited dependency before alleging it is too weak.** Open
  `thm-newton-leibniz-with-interior-derivative`,
  `thm-path-independence-iff-zero-closed-loop-integrals`,
  `def-type-i-type-ii-and-elementary-green-regions` and read what they actually
  say.
- **No permission prompts of any kind**, yours or any subagent's. If something
  genuinely cannot be done without new authority, stop and record a blocker in
  your report — that is the escape hatch, never a prompt.
- You may dispatch read-only `refuter` subagents (Sol, `--sandbox read-only`).
  A refuter never writes content and never applies a fix; you alone adjudicate.

## What to produce

1. **Append one row per rejection** to `research/frontier-12-judge-adjudications.jsonl`:
   `{"id":…, "model":…, "context_sha256":…, "item_sha256":…, "outcome":…, "defect_type":…}`
   `outcome` ∈ `confirmed_fatal` | `confirmed_nonfatal` | `false_positive`;
   `defect_type` ∈ `logic` | `dependency_citation` | `other`, on fatal rows.
   Use the hashes exactly as given above — they are the pre-edit text state and
   `step8-guard` matches on them.
2. **Write `research/frontier-12-alpha-step10-adjudication.md`**: per row, the
   objection, what you read on disk, your ruling and its reasoning; then the
   thrice/four-times-touched verdict on `lem-green-type-ii` demanded in row 2, and
   the page-wide-vs-separable judgement demanded above.
3. If any row is `confirmed_fatal`, apply the minimal repair, name the exact items
   needing rejudge, and say so plainly at the top of your report. Do **not** run
   the judge sweep yourself; the orchestrator will.

Do not flip any `status`, do not write `verification.audited`, and do not commit.
The owner is auditing this level right now and publication is theirs alone.
