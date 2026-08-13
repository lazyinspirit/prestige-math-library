# frontier-12 — step-10 adjudication of five paired-judge rejections

**Date:** 2026-08-13 · **Adjudicator:** the orchestrator session (Claude Opus 5,
`claude-opus-5[1m]`), **not** a dispatched Alpha.

## Procedural note — read before trusting these rows

CLAUDE.md (owner, 2026-07-31) makes Alpha the **sole** adjudicator of a
paired-judge rejection and says the orchestrator "never substitutes its own
adjudication for Alpha's." **The owner explicitly directed the orchestrator to
adjudicate these five rows** after the `alpha` dispatch lane proved unrunnable on
this host (see `frontier-12-owner-audit-session.md` §5b: the `claude` runner is
invoked with `--permission-mode bypassPermissions`, which the CLI refuses under
uid 0; verified on 2.1.228 and 2.1.229 alike).

Two independence caveats travel with these rows and should not be lost:

1. **The adjudicator authored five of the eight edits under review.** All five
   rejections concern text that predates those edits — verified per row below —
   but the separation of author from adjudicator that CLAUDE.md exists to
   preserve is not present here.
2. **Row 3 is a direct self-certification.** The objection lands partly on `[L4]`
   of `ex-constructing-a-potential-on-an-open-rectangle`, a fact this session
   rewrote. It is flagged in place and is the one row most deserving of an
   independent read.

Nothing here was ruled `confirmed_fatal`, so **no edit was licensed and none was
made**. `tools/step8-guard.mjs` was run against the
`owner-audit-adjudication-baseline` snapshot to prove that mechanically.

---

## Row 1 — `lem-green-type-i-boundary-identity` (DeepSeek) → `confirmed_nonfatal`

> Step 1.2 uses alpha<beta on (a,b) and continuity/piecewise-C1 of alpha,beta, but
> the Type I region definition is not cited in deps or listed as an L fact.

**Read from disk.** The factual core is correct: `def-type-i-type-ii-and-elementary-green-regions`
is absent from this item's `deps`, appears in no `[L]` fact, and — stronger than
DeepSeek says — is **not wikilinked anywhere in the item**, so it does not even
raise `depcheck`'s `cited-not-in-deps` warning (a class with 115 standing
instances corpus-wide). Its Type II sibling *does* declare it.

**Why it is not fatal.** The properties used are supplied by the Statement's own
hypothesis: "Let `D={(x,y): a≤x≤b, α(x)≤y≤β(x)}` **be a Type I region**". Step
1.2 tags `[given, L4]`, and **Given** is "The region, function, and orientation in
the Statement". So the inference is licensed by a stated hypothesis, not by an
uncited fact — DeepSeek's "not licensed by the cited facts" overstates it. The
definition supplies exactly `a<b`, `α,β` continuous piecewise-`C¹`, `α≤β`, and
`α<β` on `(a,b)`, which is precisely what step 1.2 uses, including the endpoint
case.

The residual defect is reader-facing and intra-page: the definition sits at
**position 23** of `line-integrals-and-the-gradient-theorem` and the lemma at
**position 25**, two items later. No prerequisite-closure or flowchart edge is
affected, because both are on the same page. A reader closes it by scrolling up.

## Row 2 — `lem-green-type-ii-boundary-identity` (DeepSeek) → `confirmed_nonfatal`

> Step 2.2 asserts each section interval is Jordan measurable from its finite
> boundary, but no cited fact establishes compact intervals are Jordan.

**Read from disk.** Correct as stated: step 2.2 argues that the section
`{x:(x,y)∈D} = [λ(y),ρ(y)]` is Jordan measurable in `ℝ` because "its boundary is
at most two points", and no `[L1]`–`[L8]` fact states the boundary criterion.
`[L6]` gives Jordan measurability of plane graph-regions; `[L8]` gives
integrability of continuous functions on compact Jordan sets; neither gives
this.

**Why it is not fatal.** The claim is true and elementary — a compact interval is
Jordan measurable, with content `ρ(y)−λ(y)`, and the degenerate case
`λ(y)=ρ(y)` is a single point of content zero. The step is tagged `algebra`,
claiming it as an elementary move, and a competent reader closes it in seconds.
It is an uncited elementary step, not an unlicensed inference.

### The escalation question the brief demanded: **converging, not false**

`touchlog` records **four touches** on this item and DeepSeek has now rejected it
four times on four distinct grounds. The severity is strictly decreasing:

| round | objection | ruling |
|---|---|---|
| 1 | endpoint case `λ=ρ` not discharged (a rectangle is a counterexample) | **fatal**, repaired |
| 2 | `[L3]` Fubini cited for vertical-graph regions only; Type II is not an instance | **fatal**, repaired via explicit `σ` transpose |
| 3 | `[L4]` Newton-Leibniz drops the integrable-extension hypothesis | nonfatal; repaired anyway this session |
| 4 | section intervals' Jordan measurability uncited | nonfatal (this row) |

Two real fatal defects, then two citation-completeness gaps at progressively more
elementary levels. The mathematical core — boundary integral equals the double
integral of `∂ₓQ`, reached through a transposed Fubini — is now carried by an
explicit `σ(x,y)=(y,x)` argument with `[L5]`,`[L6]`,`[L7]` and a section analysis
that disposes of the exceptional set. That is the signature of a proof
**converging toward correctness**. Nothing in four rounds has impugned the
statement itself, and no objection has produced a counterexample to it.

## Row 3 — `ex-constructing-a-potential-on-an-open-rectangle` (DeepSeek) → `confirmed_nonfatal`

**⚠ Self-certification: this session rewrote the `[L4]` at issue.**

> [L4] drops the cited theorem's a<b hypothesis and step 1.2 applies it to
> integrals whose variable upper limits x,y may be below the basepoint a,b.

**Read from disk.** The objection is materially correct. The construction is
`φ(x,y) := ∫_a^x F₀(t,b)dt + ∫_b^y F₁(x,t)dt` on an **open rectangle `U`
containing `(a,b)`**, so `x<a` and `y<b` genuinely occur, while
`thm-newton-leibniz-with-interior-derivative` opens "Let `a<b`."

**The licence exists in the library and is simply not cited.**
`rem-integral-conventions-and-scope` §2 records that `def-oriented-integral`
extends the notation by `∫_u^u f := 0` and `∫_u^v f := −∫_v^u f` for `u>v`, and
that claim 3 of `thm-additivity-over-subintervals` holds "with no ordering
assumed". So `φ` is **well-defined** on all of `U` and the endpoint-increment
evaluation is **true** for every arrangement; the reader closes the gap by
`∫_a^x = −∫_x^a` and Newton-Leibniz on `[x,a]`, giving `G(x)−G(a)`. Well inside
the 30-second threshold.

This is materially weaker than the fatal `dependency_citation` findings this run
has confirmed elsewhere: `ex-rational-function-field-order`'s `[L2]` cited three
items that stated **none** of its four assertions, and
`def-positive-orientation-…` left `∫_∂D` genuinely **undefined** over most of its
hypothesis class. Here the cited theorem does state the claim, under a hypothesis
narrower than the use, with the gap closed by a published convention.

**On the self-certification.** This session's edit added the integrability
hypothesis and did not touch `a<b`, which the original also omitted — so the
defect is pre-existing and unchanged. But the repair was made expressly to fix
"this Fact drops a hypothesis of the cited theorem", and `a<b` is also a
hypothesis of that theorem. **The repair was incomplete on its own terms.** That
does not change the ruling, and it is exactly the kind of judgement an
independent adjudicator should re-check.

## Row 4 — `thm-pullback-and-pushout-pasting` (Terra) → `confirmed_nonfatal`

> Step 1.2 uses commutativity of the left square to assert y∘a∘u = d∘x∘u, but
> cites only F1. F1 gives a pullback universal property.

**Read from disk.** Correct: step 1.2 asserts `yau = dxu`, which is left-square
commutativity, and tags `[F1]` alone. Commutativity is supplied by the Statement
("Consider a **commutative** diagram of two adjacent squares") and by **Given**
("The displayed commutative diagram"). The defect is a missing `given` in the
step tag, not an unlicensed inference: the hypothesis is stated, merely untagged.

**`tikzcd` transcription verified against the `{CD}` source it replaced.** All
seven arrows preserved with correct source, target and label: `A→B` (`a`), `B→C`
(`b`), `A→D` (`x`), `B→E` (`y`), `C→F` (`z`), `D→E` (`d`), `E→F` (`e`). Consistent
with the proof's use of `x:A→D`, `y:B→E`, so that `yau` and `dxu` are both
`W→E`. The conversion introduced no mathematical change.

## Row 5 — `cex-the-one-form-y-dx-is-path-dependent` (Terra) → `confirmed_nonfatal`

> L3 overstates its citation: the cited theorem requires an open set and a
> continuous vector field, but L3 asserts the equivalence on any piecewise-C1
> path-connected domain without those hypotheses.

**Read from disk.** Correct. `thm-path-independence-iff-zero-closed-loop-integrals`
opens "Let `U⊆ℝⁿ` be **open** and piecewise-`C¹` path-connected, and let
`F:U→ℝⁿ` be **continuous**". `[L3]` carries neither hypothesis.

**Why it is not fatal.** Both hypotheses are satisfied by the item's own data:
the field is `F(x,y)=(y,0)`, which is continuous, on `ℝ²`, which is open and
piecewise-`C¹` path-connected. No claim is false and no inference is unlicensed;
the restatement is unfaithful, which is a citation-fidelity defect under
CLAUDE.md's "no changed domain, quantifier, hypothesis, direction or conclusion",
not a truth defect.

---

## The page-wide judgement the brief demanded

**This is one defect class, not five nitpicks, and it is concentrated on
`line-integrals-and-the-gradient-theorem` (order 241).**

Four of the five rows are the same failure: an `[F#]`/`[L#]` fact restating a
cited result with a hypothesis or a dependency dropped — `a<b` (row 3), *open*
and *continuous* (row 5), the Type I region definition (row 1), the Jordan
criterion (row 2). Add the six Newton-Leibniz restatements repaired earlier today
and the count on this page reaches ten. Every judge pass over this page has
surfaced another instance, and there is no reason to think the fourth pass found
the last one.

**Why it concentrates here.** This page was built on decision D2, where the
orchestrator overrode the authoring Beta's reasoned decline of Green's theorem on
the ground that its prerequisite closure omitted the multivariable-integration
machinery. The Beta was mechanically right; the closure was widened by a
`requires` edit. A page whose dependencies were added late is exactly where Facts
get restated from memory of a result rather than from its text.

**Recommendation, for the owner, not applied here.** One systematic pass over
every `[F#]`/`[L#]` on order 241, checking each restatement against the cited
Statement, then a single rejudge of whatever changes. Doing it per-rejection —
which is what the last four rounds have done — converges slowly and buys a judge
sweep each time. Under R1 none of this is licensed at step 8 anyway, so it is a
step-6-class pass that has to be an explicit owner decision at step 10.

**What is not in doubt.** No row alleges a false statement, and none produced a
counterexample. Across four rounds on the two Green lemmas the objections have
moved from real fatal defects to uncited elementary steps. On the mathematics,
this page is in better shape than its rejection count suggests; on citation
fidelity, it is the weakest page in the run.
