# Step 4 — splice-refusal adjudication, run `frontier-15`

Lead Alpha (Claude Opus 5, `xhigh`, 1M window). Adjudicated 2026-08-17 against
`research/frontier-15-splice-refusals.json` (3 edges, batches 2 and 7) and the
`4-splice` gate battery.

Decisions are per edge. Nothing was batch-approved, and I did not run the splice:
`splice-plan --all --dry-run` now reports 0 refusals and both withheld batches
ready (batch 2 → 4 pages / 108 items, batch 7 → 2 pages / 72 items).

---

## Edge 1 — batch 2, `chain-conditions-and-semisimple-modules` → `the-field-of-fractions-and-localisation`

**Decision: APPLIED, moved to the page that consumes it.**

Evidence read from disk:

* Order: target 53.2, declaring page 108, its B companion 109. Backward on both,
  so `prereq-order` is satisfied either way.
* Consumption: exactly one item in the pair cites the target page, and it is on
  the **B** page — `fs-noetherian-rings-have-noetherian-subrings`, which cites
  `def-field-of-fractions` and
  `thm-field-of-fractions-is-a-field-and-the-domain-embeds`. A reverse sweep of
  every dep in the whole batch-2 manifest against the target page's 22 published
  ids returned those two hits and nothing else; the only prose occurrence of
  "localisation" in the manifest was the `requires` entry itself. **No A-page
  item consumes the edge.**
* Target content: `def-field-of-fractions` defines `Frac(D) = (D\{0})^{-1}D` for
  an integral domain; `thm-field-of-fractions-is-a-field-and-the-domain-embeds`
  proves it is a field with `d ↦ d/1` injective. That is exactly what the false
  statement needs — `K = Frac(F[x_0,x_1,…])` is a field (hence Noetherian) with
  the non-Noetherian domain `R` as a subring.
* Beta's reason: batch-2 notes §B2-4 records a step-3 group Alpha having added
  the edge to the A page and the Beta preserving it, correctly noting order 53.2
  is not a forward reference. The reason is sound; only the placement is wrong.
* Convention: 15 published `-examples` pages already carry a prerequisite their A
  page does not, including `equivalent-forms-of-completeness-examples`, which
  requires **this same target page**. `undeclared-prereq` is closed over the
  transitive closure, so B reaches the target through its own declaration.

Exact edits:

* `research/frontier-15-batch-2.pages.json` — struck
  `the-field-of-fractions-and-localisation` from
  `chain-conditions-and-semisimple-modules`.requires (the A page's own items
  never use it; leaving it there asserts a prerequisite the A page does not
  have).
* `research/frontier-15-batch-2.pages.json` — added it to
  `chain-conditions-and-semisimple-modules-examples`.requires.
* `research/plan-spec.json` — added it to
  `chain-conditions-and-semisimple-modules-examples`.requires. Manifest and plan
  now agree, so the re-splice raises no refusal.

---

## Edge 2 — batch 7, `monads-comonads-and-their-algebras` → `categories-functors-and-natural-transformations-examples`

**Decision: STRUCK, and the dependency behind it repaired. The edge could not
have been applied: the dep it would have licensed is itself illegal.**

Evidence read from disk:

* Consumption: one item, `thm-the-covariant-power-set-monad`, cites
  `ex-singletons-define-a-natural-transformation-to-the-power-set-functor`.
* That item is published and **homed on the examples page**
  `categories-functors-and-natural-transformations-examples`.
  `validate-plan.mjs` check 6 (`b-leaf`, the published-dep arm at line 229) makes
  any dep on an examples-page item a hard error, whatever the page-level
  `requires` says. Adding the edge would have left the gate red and hidden the
  real defect behind a reading-order claim.
* The A page of the same target, `categories-functors-and-natural-transformations`
  (order 359), is **already in the closure** of this page's declared requires, so
  no new edge is needed for the replacement route.
* What the cited example actually supplies: `𝒫(f)(S) = f[S]` is a functor
  (`1_X[S]=S`, `(gf)[S]=g[f[S]]`) and `η_X(x)={x}` is natural. I opened it before
  substituting. Every component of that is available A-homed and in closure:
  `def-functor-and-contravariant-functor`, `def-natural-transformation`,
  `prop-sets-and-functions-form-category-set` (order 359),
  `def-image-and-preimage-under-a-relation` (relations page),
  `def-power-set` and `def-union-of-a-set-and-binary-union` (ZFC page).
* This is the remedy the rule's own history prescribes: the level-9 Beta that hit
  the same trap "rebuilt the setups natively". The theorem has to verify unit
  naturality anyway as part of establishing the monad, so the added obligation is
  two elementwise lines, not a new lemma — and the same page already does exactly
  this natively on the ultrafilter side
  (`lem-ultrafilter-pushforward-is-an-ultrafilter-and-is-functorial` →
  `lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural` →
  `def-the-ultrafilter-endofunctor-unit-and-multiplication`).

Exact edits (`research/frontier-15-batch-7.pages.json`):

* Struck `categories-functors-and-natural-transformations-examples` from the A
  page's `requires`; it now matches the plan, so no refusal.
* `thm-the-covariant-power-set-monad`.deps: dropped the examples-page citation;
  now `def-monad`, `def-power-set`, `def-union-of-a-set-and-binary-union`,
  `def-image-and-preimage-under-a-relation`,
  `def-functor-and-contravariant-functor`, `def-natural-transformation`,
  `prop-sets-and-functions-form-category-set`.
* Rewrote its `strategy` to name the route (build `𝒫` by direct image, verify the
  functor laws, take `η_X(x)={x}` and `μ_X(𝒜)=⋃𝒜`, prove naturality of each
  elementwise, then the unit laws and associativity) and to say why the published
  example must not be cited. The route is in the manifest, not only in this
  report, so the authoring Beta cannot re-introduce the illegal edge from the
  scaffold alone.

The A page stays at 59 items — no split, no ceiling pressure.

---

## Edge 3 — batch 7, `monads-comonads-and-their-algebras-examples` → `filters-and-ultrafilters-examples`

**Decision: STRUCK, and the three dependencies behind it repaired. Same
`b-leaf` bar as edge 2.**

Evidence read from disk:

* Consumption: one item, `ex-the-ultrafilter-monad-on-a-finite-set`, cites
  `ex-ultrafilter-selects-a-cell-of-a-finite-partition`, `ex-principal-ultrafilter`
  and `ex-free-ultrafilter-on-naturals` — all three published and homed on
  `filters-and-ultrafilters-examples`. Illegal as item deps regardless of the
  requires edge.
* `filters-and-ultrafilters` (order 12, the A page) is **already in the closure**,
  so the replacement route needs no new edge.
* I opened all three cited items and matched each use to an A-homed substitute:
  * *finite ⇒ principal*: `lem-ultrafilter-prime` (A page) states that for every
    `n ∈ ℕ` and list `s : n → 𝒫(X)`, if `⋃_{i∈n} s(i) ∈ 𝒰` then some `s(i) ∈ 𝒰`.
    Applied to `X = ⋃_{x∈X}{x}` this *is* the argument the finite-partition
    example runs; with upward closure and `{x} ∩ A = ∅` for `x ∉ A` it gives
    `𝒰 = {A : x ∈ A}`, so no separate principal-ultrafilter citation is needed —
    `def-ultrafilter` and `def-filter` carry the definition and the filter laws.
  * *unit not invertible on ℕ*: `fs-every-ultrafilter-principal` is homed on the
    **A** page (`filters-and-ultrafilters`, in its `examples:` block — I checked
    the page frontmatter, not just the id), and its refutation builds, from
    `thm-ultrafilter-lemma`, an ultrafilter on ℕ containing every tail and no
    singleton. That is precisely the free ultrafilter the B-homed example was
    cited for, and it is outside the image of `η_ℕ`.
  * *naturality*: added the in-batch
    `lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural`,
    which the "naturally isomorphic to the identity" half of the title needs and
    which was previously reached only implicitly.
  * *finiteness*: `def-finite-cardinality` (A-homed, in closure) gives the item
    the notion of finite set its statement quantifies over. Worth noting for step
    5: `fs-every-ultrafilter-principal`'s third remark records the finite case as
    motivation "rather than as a proved item" because the library then lacked a
    theory of finite sets; it has one now, and this item is where the argument
    gets written.
* Provenance check on the substitutes: `fs-every-ultrafilter-principal` is
  `statement: ai-altered` / `proof: ai-generated` — eligible (the statement, not
  the proof, controls eligibility), carries reader-visible `sources.references`,
  and I read the refutation line by line before citing it. `lem-ultrafilter-prime`
  is a paired-judged published lemma.

Exact edits (`research/frontier-15-batch-7.pages.json`):

* Struck `filters-and-ultrafilters-examples` from the B page's `requires`.
* `ex-the-ultrafilter-monad-on-a-finite-set`.deps: now
  `def-the-ultrafilter-endofunctor-unit-and-multiplication`,
  `thm-the-ultrafilter-monad-is-a-monad`,
  `lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural`,
  `lem-ultrafilter-prime`, `def-ultrafilter`, `def-filter`,
  `def-finite-cardinality`, `thm-ultrafilter-lemma`,
  `fs-every-ultrafilter-principal`.
* Rewrote its `strategy` with the full route and the choice cost, and with the
  reason the three published examples must not be cited.

**No forward edges appeared in any refusal**, so nothing in this stage is blocked
on an owner reading-order decision.

---

## Three further defects fixed to leave the gate clean

The `4-splice` stage's gate battery includes `validate-plan.mjs`
(`stages/mathlib.mts:789`). It was **already red before my dispatch**, with three
errors that no refusal named: they became visible only at this stage, because
validate-plan asserts item-level dependencies for pages that have item lists, and
batches 1 and 3–6 acquired theirs in this splice. Two are the same `b-leaf` defect
as edges 2 and 3, on a batch that spliced cleanly. Leaving them would have held
the stage on a red gate with no owner attached, so I repaired them under the same
scaffold-repair licence.

**(a) `ex-biquadratic-extension-has-four-embeddings` (batch 3, B page).** Depended
on published `ex-q-sqrt-two-sqrt-three-and-a-primitive-generator`, homed on
`algebraic-extensions-degree-and-finite-fields-examples`. Repaired by building the
tower on the page: Eisenstein at 2, 3, 2 makes `x²−2`, `x²−3`, `x²−6` irreducible
over ℚ, so `[ℚ(√2):ℚ]=2` with basis `(1,√2)`; if `√3 = a+b√2` then squaring forces
`ab=0`, and `b=0` makes `√3` rational while `a=0` makes `√6 = 2b` rational; the
tower law then gives degree 4, and the two in-batch embedding results finish it.
Deps now `thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots`,
`lem-restriction-fibres-for-embeddings-in-a-finite-tower`,
`thm-tower-law-for-finite-field-extensions`,
`thm-simple-algebraic-extension-quotient-power-basis-and-degree`,
`def-field-extension-generated-subfields-and-simple-extension`,
`thm-eisenstein-irreducibility-criterion` — all A-homed and in closure. I did not
add `lem-product-basis-for-a-tower-of-finite-extensions`: the route does not use
it, and an unused edge is its own defect.

**(b) `fs-every-algebraic-extension-is-simple` (batch 3, B page).** Depended on
published `cex-an-algebraic-extension-need-not-be-finite`, same illegal home.
Repaired with a strictly better route that needs no rebuild: the page's **own**
item `ex-algebraic-closure-of-a-finite-field` (index 1, so it precedes this item —
`intra-order` holds) already establishes that an algebraic closure of `𝔽_p` is
algebraic over `𝔽_p` and infinite. With
`cor-element-algebraic-iff-simple-extension-finite`, a generator would make it
finite, so it is not simple. Deps now those two.

**(c) `cor-cauchy-inequalities` (batch 6, A page) — undeclared prerequisite.** Its
strategy substitutes the circle length `2πr` into the ML estimate and it cites
`thm-circle-circumference-diameter-ratio-is-pi`, whose statement is exactly
`C(r)=2πr`; that item is homed on `pi-the-equivalent-characterizations`, order 183,
which the goursat page (order 309) did not declare. Backward and genuinely
consumed, so applied: `pi-the-equivalent-characterizations` added to
`goursat-and-cauchys-theorem-in-a-convex-domain`.requires in **both**
`research/frontier-15-batch-6.pages.json` and `research/plan-spec.json`.

This one is the mirror image of a splice refusal — a prerequisite the manifest
*failed* to declare — and `splice-plan` structurally cannot see it: it refuses only
on manifest-declared edges the plan lacks, never on plan-missing edges an item dep
induces. Worth an engine note.

**Why batch 3's repairs touch `plan-spec.json` directly.** Those pages were spliced
before the withholding, and `splice-plan`'s drift test (`--verify`, and the
`same` test at line 146) compares **item ids only**. A deps-or-strategy-only change
in a manifest is therefore reported "already correct" and never propagates. I
mirrored both repaired item objects into the plan by copying them from the
manifest programmatically — not retyped — and verified `deps` and `strategy` are
byte-identical on both sides. Second engine note: manifest→plan drift below the id
level is currently invisible to both the splice and its verify mode.

---

## Gate state

* `node tools/validate-plan.mjs research/plan-spec.json` → **OK**, 0 errors
  (was 3 before this dispatch), 313 warnings, all `redundant-prereq` hygiene.
  Exactly one warning is new: goursat reaches `rn-as-a-normed-space` through
  `pi-the-equivalent-characterizations` as well as through the two pages it
  already reached it by. It flags a pre-existing redundant direct edge, not the
  edge I added; I left it alone rather than restructure another batch's
  prerequisites at step 4.
* Simulated post-splice plan (batches 2 and 7 items spliced in): **0 errors** —
  the gate will stay green once the engine re-splices.
* `node tools/splice-plan.mjs --run frontier-15 --all --dry-run` → exit 0, no
  refusals, batch 2 and batch 7 splice.
* Independent sweep of all seven manifests for any remaining dep on a published
  examples-page item: **0**. (I wrote this check separately from validate-plan's;
  the first version of it silently scanned nothing, so it is the corrected one
  whose count is reported.)

## Not done, deliberately

* **No defect-ledger rows.** `CLAUDE.md` pairs a ledger row with an adjudication
  at 6b/6c, 8 and 9; step 4 owns none, and these five are scaffold-structure
  defects against items that do not exist yet, so typing them as `accuracy`
  findings would distort the statistic the owner watches. They are accounted for
  here in full. If a reader surfaces any of them again at step 6, that is where
  the row belongs.
* **No splice run**, per the dispatch: the engine re-splices the withheld batches
  mechanically.
* **No item added or deleted**, no id renamed, no page order changed.
