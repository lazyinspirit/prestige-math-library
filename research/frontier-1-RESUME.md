# `frontier-1` — build state, decisions, and what a resuming session must know

**Started 2026-07-28.** Owner instruction: build the next **six buildable A/B
pairs** off `research/BUILD-LEVELS.md`, autonomously, step 0 through step 10,
pausing only at the rundown. The owner is away for the duration and cannot
adjudicate mid-build, so every step-3 finding is decided by the orchestrator and
**logged here** for the owner's review at the pause.

## Why this build is called `frontier-1` and not `level<n>`

It is **not a dependency level**. `LEVELS.md` names its artifacts
`research/level<n>-*`; this build's are `research/frontier-1-*`. The six pairs
sit at computed levels **4, 7 and 11** and were selected by a different
criterion: every page prerequisite already **published**. They are nevertheless
mutually independent — no one of the six `requires` another — so the owner's
one-round rule applies unchanged and all six pairs are authored in parallel.

The distinction matters for a resuming session: the level column of
`BUILD-LEVELS.md` did **not** choose these pages. The *blocked-on* column did.

## Step 0 — the frontier, computed from disk

`node tools/rounds.mjs --pairs --md > research/BUILD-LEVELS.md`, then filtered to
A pages that are `unscaffolded` with an empty blocker list, then each page's
`requires` verified against `status: published` in its page file. Six pairs, and
the same six the owner's table showed:

| order | A page | category | level | `requires` (all published) |
|---|---|---|---|---|
| 20 | `finite-counting-and-binomial-coefficients` | combinatorics | 4 | `countability-and-uncountability`, `roots-and-rational-powers` |
| 161 | `properties-of-the-integral-and-the-working-ftc` | real-analysis | 11 | `the-riemann-integral`, `the-derivative-and-mean-value-theorems` |
| 167 | `rn-as-a-normed-space` | real-analysis | 11 | `the-derivative-and-mean-value-theorems`, `metric-spaces` |
| 245 | `ordinal-arithmetic` | foundations | 4 | `ordinals-and-transfinite-recursion`, `countability-and-uncountability` |
| 261 | `separation-axioms` | topology | 7 | `subspaces-products-and-quotients` |
| 283 | `function-space-topologies` | topology | 7 | `subspaces-products-and-quotients`, `compactness-in-metric-spaces` |

Twelve pages counting companions.

### Batching, and the seam count reported before spawning

Two batches of three A pages (the cap), packed by prerequisite affinity:

- **Batch 1** — `ordinal-arithmetic` (245), `separation-axioms` (261),
  `function-space-topologies` (283). Set-theoretic topology.
- **Batch 2** — `finite-counting-and-binomial-coefficients` (20),
  `properties-of-the-integral-and-the-working-ftc` (161),
  `rn-as-a-normed-space` (167).

**Cross-batch seam count at spawn: 0 page-level edges, and the item-level count
was not computable** — all twelve pages had empty `items` arrays, so the honest
report is "not computable", not "0" (`LEVELS.md` step 0.4).

The packing is not cosmetic. The **Tychonoff plank**, the standard witness that
normality is not productive, needs ω₁ — so `separation-axioms` (261) has a real
edge onto `ordinal-arithmetic` (245). Putting those two in the same batch is what
makes that seam *internal*. The same reasoning pairs 161 with 167 (componentwise
integrals) and keeps the two topology pages together (283 may use 261's
separation hypotheses).

## The constraint that dominates this build

**30 A pages are published; 159 are unscaffolded.** Plan order alone is therefore
not a usable resolution rule here: a page with a smaller `order` usually does not
exist. Every external dependency must be a published item, an earlier item on the
same page, or an item on another `frontier-1` page of strictly smaller order.

`depsource.mjs` classifies a dep onto an unbuilt planned page as
**`planned-earlier`, which does not fail**. In this build that classification is a
trap and both Betas were told so explicitly.

## Decisions taken by the orchestrator (owner away) — for owner review

**F1-D1. General topological compactness does not exist, and this build may not
mint it.** Only `def-metric-compactness` (published, `compactness-in-metric-spaces`,
order 120) exists. The general notion belongs to the planned page `compactness`
at order **255**, which is unscaffolded and *below* both topology pages in this
build, so no later page can supply it retroactively. Consequences:

- `separation-axioms` (261) **drops "compact Hausdorff implies normal"**, with a
  recoverable note naming page `compactness` as what would license it.
- `function-space-topologies` (283) is built with a **metric domain**: the
  compact-open topology over compact subsets of a metric `X`, `Y` an arbitrary
  space. The exponential law and continuity of evaluation are stated for `X` a
  **locally compact metric space**, with `def-locally-compact-metric-space` minted
  on 283 and carrying a dictionary Remark in the style of `def-metrizable-space`.
  An obligation is recorded for page `compactness` to state the agreement when it
  is built.
- *Risk accepted:* this is a deliberate special case of a notion the library will
  later define in generality. The dictionary remark is the mitigation, and it is
  the mitigation §7 of `briefs/beta-scaffold.md` prescribes for exactly this.
- *If the exponential law turns out not to be honestly reachable in that scope,
  the page is retitled* — the spec title "…and the Exponential Law" asserting more
  than the page proves would be the fatal class `LEVELS.md` step 9 exists for.

**F1-D2. Pages 263, 265, 267 and 271 are not in this build.** The spec splits the
separation material five ways. Urysohn's lemma, Tietze, the diagonal
characterisation, hereditary/productive behaviour and the cube embedding all live
above 261 and are not pulled forward. Page 261 is the hierarchy itself.
`def-hausdorff-space` is reused from `subspaces-products-and-quotients` (251),
not re-minted.

**F1-D3 / F1-D5. Findings are adjudicated by the orchestrator, logged here, and
presented at the pause.** No stage blocks on an absent owner. Any item whose
inclusion rests on a decision the owner might reverse is flagged in the Beta
notes.

**F1-D4. Levy–Steinitz on `rn-as-a-normed-space`.** The RA-22 note is binding and
is the *only* carrier of that plan line — the owner declined a ‡ stub, so a silent
drop erases it from the plan. Beta-F1-2 scaffolds the Steinitz rounding lemma and
the theorem **if and only if** it judges the proof can be written completely and
correctly; otherwise it drops them and names the specific later page that inherits
the obligation. Mathematical accuracy outranks completeness, and the outcome is
reported either way.

## A plan defect found at step 0, for a later build (not this one)

`plan-topology-track.md` §T5 lists **"compact Hausdorff implies normal"** on the
`compactness` page, order **255**. Normality is defined at order **261**. As
planned that item is a forward reference on the spine, which `fwdcheck` forbids
outright on a theorem. It cannot live on 261 either, since compactness is not
available there. **Its only legal home is a page above both** — most naturally
`hereditary-and-productive-separation` (265) or `urysohn-lemma-and-tietze` (267).
Recorded here so the session that scaffolds 255 does not rediscover it as a
surprise. No action in this build.

## Step 3 — findings adjudicated (batch 1)

Beta-F1-1 returned 104 items over six pages: 28 + 8 (`ordinal-arithmetic`),
27 + 8 (`separation-axioms`), 24 + 9 (`function-space-topologies`). Recounted
from its own list: no duplicate ids, no collision with an existing `items/` file,
zero `forward_refs`, zero `planned-later` deps. Every load-bearing claim below was
verified **from disk** before the stage advanced.

| finding | decision | verified how |
|---|---|---|
| **F3** — `thm-transfinite-recursion` is stated for a well-order, i.e. a SET, so it does not by itself define `α + β` as a class operation; a bridge lemma is needed | **ACCEPT** the new `lem-recursion-on-the-ordinals` | read the item: its Statement opens "Let $(W,<)$ be a well-order… let $G$ be a class function" and delivers one `F` with domain `W`. Beta is right, and the prose scaffold's obligation #1 was under-specified |
| **F4** — ordinal exponentiation's limit clause must range over `0 < β < λ`, not `β < λ` | **ACCEPT** | checked by hand: with the naive clause `0^ω = sup{0^β : β < ω} ∋ 0^0 = 1`, so `0^ω = 1`, which is false; the restricted clause gives `0` and needs no case split on `α` |
| **F5** — `lem-sup-metric-is-a-metric` cannot carry `C(X,Y)` | **ACCEPT** the re-mint | read the item: it is the sup metric on **bounded real-valued** functions, `𝓑(S)`, target ℝ. It cannot serve a metric target, and citing it for one would be the dominant defect class |
| **F7** — a topological `Gδ`/`Fσ` is needed, with a dictionary | **ACCEPT** | read the item: `def-f-sigma-g-delta` is titled "$F_\sigma$ and $G_\delta$ subsets of $\mathbb{R}$". A silent second notion is the level-7 two-notions defect; the dictionary paragraph is the mitigation |
| **F2** — `fs-every-regular-space-is-normal` has no reachable witness and was dropped | **ACCEPT the drop** | every candidate witness needs Jones' lemma (`cardinal-arithmetic-and-cofinality`, 247, unbuilt) or hereditary/productive regularity, which F1-D2 assigns to 265. Restoring it would take page 261 over the 30-item ceiling to duplicate 265. Recorded recoverably |
| **F6** — the ordinal order topology is homed on the A page, not the B page | **ACCEPT** | `ex-order-topology` is leaf-locked on a B page; homing the re-mint on 262 would force a third copy at 273 |
| **F8** — ℵ₁ remarks are an opportunity, not a defect | **ACCEPT**, no action | Beta reports it found no decayed scope-denial claim there; the step-10a sweep will re-check independently |

### F1 is HALF REFUTED — an arrow Beta dropped is provable, and goes back in

Beta reported that the implication chain has **two** arrows page 261 cannot
reach, both needing Urysohn's lemma: `normal + T1 ⇒ completely regular`, and
`perfectly normal ⇒ completely normal`.

**The first is right. The second is wrong.** Perfectly normal ⇒ completely normal
does not need Urysohn functions; it needs only normality plus "every open set is
`Fσ`", which is the definition restated through complementation:

> Let `A`, `B` be separated (`cl A ∩ B = A ∩ cl B = ∅`). Then `A ⊆ X∖cl B` and
> `B ⊆ X∖cl A`, both open, hence `Fσ`: write `X∖cl B = ⋃ₙ Fₙ` and
> `X∖cl A = ⋃ₙ Gₙ` with `Fₙ`, `Gₙ` closed. `Fₙ` and `cl B` are disjoint closed
> sets, so normality gives open `Uₙ ⊇ Fₙ` with `cl Uₙ ∩ cl B = ∅`; symmetrically
> open `Vₙ ⊇ Gₙ` with `cl Vₙ ∩ cl A = ∅`. Put
> `U = ⋃ₙ (Uₙ ∖ ⋃_{i≤n} cl Vᵢ)` and `V = ⋃ₙ (Vₙ ∖ ⋃_{i≤n} cl Uᵢ)`, both open as
> an open set minus a finite union of closed sets. `A ⊆ U` and `B ⊆ V` because a
> point of `A` lies in some `Fₙ ⊆ Uₙ` and in no `cl Vᵢ`. They are disjoint: if
> `x ∈ (Uₙ ∖ ⋯) ∩ (Vₘ ∖ ⋯)` then `n ≤ m` puts `x ∉ cl Uₙ ⊇ Uₙ`, and `m < n` puts
> `x ∉ cl Vₘ ⊇ Vₘ`; either way a contradiction.

**Decision: restore `T6 ⇒ T5` as its own numbered theorem on page 261**
(`thm-perfectly-normal-implies-completely-normal`), stated against the
separated-sets form of complete normality that page 261 already defines — the
*hereditarily normal* characterisation stays page 265's, and this proof does not
touch it. Page 261 goes to **28 items**, still under the ceiling.
`thm-the-separation-implication-chain` gains the arrow, and
`rem-separation-axiom-conventions` records **one** unreachable arrow rather than
two.

This is exactly the failure mode the triage rule warns about in the other
direction: an agent under-claiming is as much a defect as one over-claiming, and
a dropped-but-provable theorem would have been recorded as a permanent scope
limit of the library.

**AMENDED by the author, and the amendment corrects me.** My sketch above says
the proof needs "only normality plus every open set is `Fσ`". That is
incomplete: normality supplies a valid `Uₙ` **for each** `n`, and assembling
them into a sequence is a **countable choice**. The authored title says so —
*"Assuming countable choice, every perfectly normal space is completely
normal…"* — and `thm-the-separation-implication-chain` carries the hypothesis
through. The refutation of Beta's claim stands (no Urysohn function appears);
my accounting of what the proof spends did not, and the page is right where I
was wrong. `cex-omega-one-has-no-at-most-countable-cofinal-subset` picked up the
same hypothesis independently on the ordinal page.

### One title risk carried forward to step 9

Beta-F1-1 reaches the exponential law as a **natural bijection**
`C(Z × X, Y) ↔ C(Z, C(X,Y))` for `X` a locally compact metric space, and
explicitly drops the **homeomorphism** form (which needs more than this build
has). That is the honest scope, and the bijection is what most texts call the
exponential law — but the page is titled "…and the Exponential Law", and *a title
or Statement asserting more than the proof gives is the fatal class step 9 exists
for*. So, binding on the author and re-checked by Alpha at step 9:
`thm-the-exponential-law` must say **bijection** (or correspondence) in its own
title, the page summary must not describe it as a homeomorphism, and the Remark
must record what the homeomorphism form would additionally need.

## Step 3 — findings adjudicated (batch 2)

Beta-F1-2 returned 107 items: 26 + 14 (`finite-counting-and-binomial-coefficients`),
20 + 13 (`properties-of-the-integral-and-the-working-ftc`), 22 + 12
(`rn-as-a-normed-space`). All nine findings **accepted**; five were verified from
disk first, and every one of those five turned out to be right.

| finding | decision | verified how |
|---|---|---|
| **F-2** — CB-1 trap (iii) cites `def-monoid-finite-product` for `0! = 1`, which is `forward-on-spine` | **ACCEPT**: `0! = 1` becomes the base clause of the factorial's own recursion, `binom(n,0)=1` comes from `[A]^0 = {∅}` | I found this before dispatch; the item is homed on `monoids-groups-and-subgroups`, order **24**, and the page is order **20** |
| **F-3** — page 20's counts are natural numbers but the published arithmetic is real-valued | **ACCEPT** `def-nat-finite-sum-and-product` and `def-nat-power`, each with an explicit ι-bridge | read the items: `lem-finite-sum-laws` opens "Let $a,b,c : \mathbb{N} \to \mathbb{R}$", and `def-integer-power` is `a^m` for real `a`. Without the bridge the two sides of the sum rule live in different sets |
| **F-4** — the sum over a finite index set needs permutation invariance, which the library does not have | **ACCEPT** `lem-finite-sum-permutation-invariance` as a new item | read `lem-finite-sum-laws` in full: additivity, scaling, splitting, monotonicity, telescoping, products — **no invariance clause**. Minting a new item rather than amending the published one is also the right call: that same item is the target of level 9's unapproved amendment 3, so this build does not collide with it |
| **F-5** — no operator norm, no "linear maps are Lipschitz" | **ACCEPT the drop** | listed every item on `vector-spaces-and-subspaces` (72) and `linear-independence-bases-and-dimension` (74) and grepped `items/`: **there is no definition of a linear map anywhere in the published corpus**. Minting one at 167 would re-mint order 76's canonical object |
| **F-6** — page 20 mints the ℕ-valued finite product below `def-monoid-finite-product`'s published home | **ACCEPT**, with the agreement remark + orientation-only forward ref | nothing breaks mechanically; the remark is what stops a future session treating them as unrelated |
| **F-8** — the Stirling amendment is unsatisfiable as written | **ACCEPT** the restatement to "above `the-logarithm-and-general-powers`" | Stirling needs the logarithm and Wallis, both above 161 |
| **F-9** — the general second MVT for integrals is the riskiest proof on 161 | **ACCEPT** the stated fallback (C¹ monotone form, general case recorded as a drop) | — |
| **F-1** — page 167's spec `requires` is insufficient | **ACCEPT the addition, REJECT the narrowing** — see below | — |
| **F-7** — the published `rem-rearrangement-in-higher-dimensions` must gain `forward_refs` | **ACCEPT but STAGE, do not apply** — see below | — |

### F-1: the added edge is adopted, the narrowing is not

Beta proposed replacing page 167's `requires` with the single edge
`properties-of-the-integral-and-the-working-ftc`, on the ground that it
transitively carries the other ten. `LEVELS.md` step 4 says the splice takes the
**union** of `requires`, so the spliced value is all three:
`the-derivative-and-mean-value-theorems`, `metric-spaces`,
`properties-of-the-integral-and-the-working-ftc`. A `redundant-prereq` warning is
cheaper than a page whose declared prerequisites depend on a transitive argument
holding forever. Same treatment for 161, which gained
`absolute-convergence-and-rearrangement`.

### F-7: staged, not applied

The edit is to `items/rem-rearrangement-in-higher-dimensions.md`, which is
**published and owner-audited**. `CLAUDE.md` is explicit that amendments to
published pages land in the same commit that publishes the level, never before,
with `verification.audited` cleared. This build is not publishing — the owner
audits first — so the edit is staged in
`research/frontier-1-published-amendments.md` and applied only if and when the
owner publishes. Not applying it costs only the ↗ marker; no gate fires, because
nothing in this build declares a forward reference onto it.

### Lévy–Steinitz (F1-D4) — the outcome, stated plainly

Beta-F1-2 scaffolded **the Steinitz polygonal-confinement theorem in full**, the
definitions (`Γ`, `Γ^⊥`, vector series, rearrangement, `S(x)`) and the
**containment half** — `S(x)` is nonempty and lies inside the affine subspace
`s + Γ^⊥`. It **did not** scaffold the reverse inclusion or Sierpiński's
refinement: every route it knows passes through orthogonal projection (order 94,
unbuilt) and a convex-separation argument no planned page owns. Those are
structural gaps, not effort.

**Accepted.** This is the right side of F1-D4: no ‡ stub was minted, no item
asserts the classical answer, and the theorem's own title
(`thm-rearrangement-sums-lie-in-an-affine-subspace`) claims exactly the half that
is proved. The plan line does not vanish — the residue is named with its
licensing conditions, and its natural discharge is an addition to page 167 itself
once 76 and 94 exist, which is exactly where the published
`rem-rearrangement-in-higher-dimensions` promised it. The companion page's
`fs-the-rearrangement-sums-…-fill-the-space` already refutes the naive ℝ^d
generalisation of the Riemann series theorem using only the containment half, so
a reader is protected from the wrong expectation today.

## Step 4 — the splice, and the gate of record

12 pages spliced, **212 items** (104 + 107 + the one theorem restored above).
Page metadata from the spec, `requires` by union, items from Beta, hard-fail on
id clash — none occurred.

Authoritative gates, run by the orchestrator after the splice:

- `validate-plan.mjs research/plan-spec.json` — **0 errors**. Warnings are the
  pre-existing `redundant-prereq` set and the pre-existing `[size]` on
  `monotone-functions-and-discontinuities`; **no new page trips `size`** (the
  largest is `separation-axioms` at 28, under the 30 ceiling).
- `depsource.mjs` — **0 unresolved**; 8675 deps to a published page, 265 to an
  earlier planned page.

**And the check `depsource` cannot do.** Its `planned-earlier` verdict does not
fail, and in this build a dep onto an unbuilt planned page would wear exactly that
label. So every dependency of all 12 pages was classified independently:

| resolves to | count |
|---|---|
| a published item on disk | 1340 |
| an earlier item on the same page | 477 |
| an item on an earlier `frontier-1` page | 267 |
| **an unbuilt planned page** | **0** |

2084 deps, zero failures. The trap does not occur.

## THE JUDGE DIED MID-BUILD — the ofox account is out of credits

**Confirmed by direct probe, 2026-07-28**, not taken from an agent's report:

```
{"id":"def-binomial-coefficient","model":"z-ai/glm-5.2","keep":null,
 "reason":"NO_CONTENT: {\"error\":{\"message\":\"Insufficient credits.
  Current balance: $-0.984755. Please top up to continue.\",
  \"type\":\"insufficient_credits\",\"code\":402}}"}
```

**This is an owner action, not something the session can resolve.** Topping up
the ofox balance is the only fix; no fallback model is permitted, because
`CLAUDE.md` bars a Claude model for session items and bars GLM/DeepSeek only for
pipeline items, and adopting *any* new judge model requires running the injection
test recorded in the `tools/judge.mts` header first — which itself needs credits.

**What was done about it.** Every running judge process and sweep loop was killed:
retrying a 402 burns wall-clock and fills the ledger with nulls for nothing. All
still-running authors were told to stop judging, that `keep: null` is not a pass
and must never be recorded as one, and to report which of their items carry a real
pass and which carry none.

**Judge coverage is therefore PARTIAL, and is reported as a gap rather than
papered over.** It is counted from `verification.judge` in frontmatter at the
rundown, never from an agent's claim. The build does not stop: the judge is a
cheap screen with measured 21–24% precision that scored **0/3 on real historical
defects here**, so steps 8, 9 and 10a — the reading tiers, which is what actually
finds defects in this corpus — proceed at full strength and are now the *only*
review the unjudged items have had. That is stated plainly to the owner rather
than implied.

### A measured fact about `--batch`, worth keeping

The order-20 author reduced `--batch` from the mandated six A-page slugs to its
own page after three items, and **reported the deviation rather than hiding it**.
Its grounds check out and are worth recording:

- with six pairs named, prompts ran ~136k tokens and throughput was about **one
  verdict per 15 minutes**;
- the harness itself printed `batch context budget reached; omitted:` for **three
  of the five sibling pages on every call**, so most of the batch was being paid
  for and then discarded;
- `depsource` shows **zero** of that page's deps resolve to any other page in this
  build, so no sibling page can bear on any of its steps.

The A/B **pair** context — the unit `CLAUDE.md` actually names — was unchanged
throughout. The relevance-ordering fix made earlier the same day sorts cited pages
first, which is exactly why a page citing nothing in the batch gets no value from
one. **`--batch` pays off across a genuine dependency level and is close to pure
cost across a frontier set of mutually independent pairs.** Recorded here rather
than acted on: changing the standing instruction is an owner decision.

## The escalation: `def-g-delta-and-f-sigma-in-a-topological-space`, audited personally

Refuted **twice** and repaired twice, which fires trigger 2 of the escalation rule
(`LEVELS.md`): the orchestrator audits it personally and does not wait for step 9.
Done, line by line, against the file on disk.

**Nature of the fault, both times: a false claim in DEFINITION-BODY PROSE.** The
item has no proof — it is a definition — so neither fault was in a numbered step,
and neither touched the mathematical core (the two definitions, the
complementation duality, the ℝ dictionary), which was never refuted.

1. The first text conflated the converse *"every `Fσ` is closed"* with the
   condition *"every closed set is `Gδ`"*. Those are different statements; the
   judge named the conflation and gave ℚ ⊂ ℝ as a witness that the first keeps
   failing in a perfectly normal space.
2. The repair's witness was wrong in the same direction: it offered *"a bounded
   open interval is a `Gδ` that is not open"*. An open interval **is** open, so it
   refuted nothing.

**Verdict: the current text is correct.** Checked:

- `{0} = ⋂ₙ (−1/(n+1), 1/(n+1))` — right, and **index-safe**: written over `n+1`
  so nothing divides by `ι(0)`, at `n = 0` the interval is `(−1, 1)`, and the
  exclusion of `t ≠ 0` goes through Archimedes plus "a nonzero natural is a
  successor". This is the ℕ-contains-0 discipline done properly.
- `{0}` is not open — every `(a,b)` with `a < 0 < b` contains `b/2`, which is `> 0`
  hence `≠ 0`, and `< b`, and `> a`. Correct.
- `ℝ ∖ {0}` is `Fσ` and not closed, by the duality. Correct.
- The two automatic inclusions, and the separation of them from the real
  restriction ("every closed set is `Gδ`, equivalently every open set is `Fσ`") —
  which is what rejection 1 was about, and it is now stated correctly.
- The agreement paragraph unfolds `def-open-and-closed-in-r` against
  `def-metric-topology` term by term rather than asserting the identification.

**One non-fatal gap, left alone under the triage rule.** The construction
presenting an at most countable family as a sequence extends a finite list
`V₀ … V_m` by `Vₙ := V_m`, which presumes the list is nonempty. The *claim* is
still true for the empty family (`⋂ = X` via `Vₙ := X`, `⋃ = ∅` via `Fₙ := ∅`);
only the exhibited construction misses that case. A competent reader closes it in
well under 30 seconds, so no effort is spent.

**Ramification of dropping it: severe, and it is not a candidate.**
`def-completely-normal-and-perfectly-normal-spaces` and
`thm-perfectly-normal-implies-completely-normal` both rest on it; removing it
takes perfect normality off the page entirely. No result is removed without
explicit owner approval in any case.

**Still owed: its current text has never been judged** — the credits ran out on
the retry. It is in the unjudged count.

## A mechanism trap found by the separation-axioms author, worth the whole build

**Citing `rem-r-native-topology-scope` propagates the sky ↗ "rests on later
material" chip along `deps`.** That remark is the natural citation for "the two
collections of open subsets of ℝ are one collection" — `def-metrizable-space`
attributes exactly that to it — but it declares `forward_refs`, and
`fwdcheck`/`library-forward.ts` propagate the marking along `deps` to every
consequence. When the author first cited it, **13 items inherited the marker** for
targets all published far *earlier* than page 261.

It removed all 13 by unfolding the identification inline instead. Recorded in
`ARCHITECTURE.md` §3.3, because any future page reaching for that remark hits the
same thing and the chip it earns is false.

## Step 5–7 outcome: all six pairs authored, 212 items

**Judge coverage, counted from `verification.judge` in frontmatter on disk — not
from any agent's claim:**

| page | judged |
|---|---|
| `function-space-topologies` | 24/24 |
| `function-space-topologies-examples` | 9/9 |
| `ordinal-arithmetic` | 25/28 |
| `separation-axioms` | 23/28 |
| `finite-counting-and-binomial-coefficients` | 22/26 |
| `rn-as-a-normed-space` | 18/22 |
| `properties-of-the-integral-and-the-working-ftc` | 8/20 |
| `…-integral…-examples` | 3/13 |
| `ordinal-arithmetic-examples` | 1/8 |
| the other three B pages | 0/14, 0/12, 0/8 |
| **total** | **133/212 (63%)** |

The B pages are worst hit because every author judged its A page first and the
credits ran out before the companions.

**Three of the gaps are NOT credit exhaustion**, and the distinction matters
because the honesty rule produced them deliberately:

- `thm-ordinal-arithmetic-agrees-on-omega` — an HTTP transport failure.
- `fs-ordinal-addition-is-commutative` — a verdict whose payload visibly begins
  `keep:true` but which the harness could not parse. **Not recorded**, because an
  unparsed response is not a pass.
- `thm-componentwise-limits-and-continuity` — **passed, then the pass was
  deleted.** The verdict's own reason quoted a stale step reference left by
  precheck's restratification; fixing that made the pass a claim about text the
  judge never saw. The author discarded a verdict it had earned and could not
  regain. That is the rule working.

**And 14 more passes were deliberately destroyed on the integral pair** — see
below. Coverage there fell from 25/33 to 11/33 as a *result of quality work*.

### The integral author's own Remarks re-read: nine defects, all its own

With the judge gone, it re-read its Remarks with a numbered step's suspicion, as
the brief demands. It was not clean. **Nine defects, every one in a Remark or a
page summary, none in a numbered step** — the fifth consecutive build with that
signature. Four were outright false:

1. *"Half of this page cites claim 2"* — 7 of 20 do. A **count stated in prose**,
   the class nobody re-checks.
2. The witness offered for "∫φ∘f is not a function of ∫f" was `φ(t)=t²` on
   **constants of different values** — no witness at all, since distinct constants
   have distinct integrals.
3. *"Every computation on the companion page runs through the second FTC"* —
   several do not. **Its first repair was also over-quantified** and had to be
   replaced a second time.
4. Darboux's theorem described as *"developed on a **later** page of this track"*.
   It is planned at order **155**, which is **earlier** than 161, and unbuilt.
   This is exactly the failure `LEVELS.md` records: **order-relative phrasing is
   decay-resistant, not decay-proof**, because it does not protect against getting
   the position wrong in the first place. The same error sat in the A page summary
   about Taylor's integral remainder.

Because these were Remarks corrections on items that had already passed, SCHEMA §3
made them material rewrites and **14 `verification.judge` blocks were deleted**.
That is the honest state, not the flattering one.

## Progress

- [x] Step 0 — frontier computed, batched, seams reported
- [ ] Steps 1–2 — Beta-F1-1 and Beta-F1-2 scaffolding (running)
- [ ] Step 3 — findings adjudicated and logged
- [ ] Step 4 — splice into `plan-spec.json`, Alpha-F1 spawned
- [ ] Step 5 — six A/B pairs authored in parallel
- [ ] Step 6 — judged (`z-ai/glm-5.2`, `JUDGE_VERDICTLOG=research/frontier-1-judge.jsonl`, `--batch`)
- [ ] Step 7 — rejections adjudicated
- [ ] Step 8 — batch audits
- [ ] Step 9 — Alpha-F1 whole-build mathematical-accuracy audit
- [ ] Step 10a — scope-denial sweep · 10b — rundown, then pause
