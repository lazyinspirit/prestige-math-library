# Step 3b — pair `eastons-theorem-and-cardinal-invariants-of-the-continuum` (batch 13)

Run `frontier-35-ten-categories`; role alpha-high; label
`step3b-pair-eastons-theorem-and-cardinal-invariants-of-the-continuum-2be99c10bba9d5db`.
Owned A page: `eastons-theorem-and-cardinal-invariants-of-the-continuum` (41 items),
B page: `…-examples` (4 items). Batch 13 contains only this pair, so no sibling
rows exist in the shared batch files.

## Checkpoint (updated after each item; resume here)

Adopted from the interrupted first dispatch (files already on disk, verified
against this dispatch's clauses before use):
`thm-regular-continuum-function-constraints`, `def-easton-function`,
`def-easton-support-product`, `def-easton-support-iteration`,
`lem-easton-head-cc-and-tail-closure`.

Local scaffold repairs made in this dispatch (work to do, not proof text):

- `lem-easton-head-cc-and-tail-closure` was **not** in the canonical
  stratified form the normative checker wants (its step 1.2 cited step 1.1 but
  sat in layer 1, so precheck printed a REPAIR block); adopted the canonical
  layer numbering with `tools/tsx-run.mjs /tmp/fixproof.mjs`, which is
  byte-for-byte the repair block. Precheck now pass. No claim changed.
- `thm-set-easton-product-preserves-cardinals-and-cofinalities` asserted the
  projection-of-genericity fact as a fact row sourced to
  [[def-dense-open-sets-and-model-generic-filters]], whose text only defines
  genericity and density. The fact row now quotes that definition and the
  projection claim is derived in the proof step (dense preimage argument).
  Precheck pass.

Authored in this dispatch, in prerequisite order (each row = one item,
precheck = the exact command named below run on that file alone):

| # | item | claim (short) / source locator | stage |
|---|---|---|---|
| 6 | `lem-easton-head-tail-no-new-short-sequences` | tail + cc head ⇒ no new `λ`-sequences; Jech Lemma 15.19 p.234 (strict closure) | precheck pass |
| 7 | `thm-set-easton-product-preserves-cardinals-and-cofinalities` | set Easton product keeps ordinals, cofinalities, cardinals; Jech pp.234–235, Williams Cor. 56 | precheck pass |
| 8 | `lem-easton-head-cardinality-and-name-count` | GCH ⇒ `|P≤κ|=F(κ)` and ≤ `F(κ)` nice subset names; Jech p.234, Williams Thm 58 | precheck pass |
| 9 | `thm-set-easton-product-realizes-regular-pattern` | `2^κ=F(κ)` for `κ ∈ dom F` over a ZFC+GCH ground; Jech p.234, Williams Thm 58 | precheck pass |
| 10 | `def-gbc-global-choice-ground-for-easton` | GBC + Global Choice + GCH ground model with definable class function; Jech pp.235–237; conditional (no ZFC existence claim) | precheck n/a (definition) |
| 11 | `lem-easton-class-forcing-truth-and-set-names` | class forcing truth lemma for set-parameter formulas + set stages of names; Jech pp.235–236 | precheck pass |
| 12 | `lem-easton-class-tail-head-decision` | uniform head-antichain decisions below one class tail condition; Jech pp.234, 236–237 | precheck pass |
| 13 | `lem-easton-class-separation-and-power-set` | class-forcing Power Set via head antichain candidate names (fills Jech's omitted Separation step); Jech p.236 | precheck pass |
| 14 | `lem-easton-class-replacement` | class-forcing Replacement via witness names in one head stage; Jech pp.236–237 | precheck pass |
| 15 | `lem-easton-class-generic-model-satisfies-zfc` | `M[G] ⊨ ZFC` for the class product; Jech pp.235–237 + 13/14 | precheck pass |
| 16 | `thm-eastons-theorem-for-regular-cardinals` | Easton's theorem on regular cardinals over a GBC+GCH ground; Jech Thm 15.18 | precheck pass |
| 17 | `rem-easton-singular-cardinal-caveat` | remark: the singular-cardinal prescription is not asserted here; Jech Ch.15 remark | precheck n/a (remark) |

Local scaffold repair recorded while authoring item 12: its proof steps had been
written in literal Unicode (`α`, `⊩`, `𝒞`) rather than `$…$` LaTeX; the same
argument was retypeset in LaTeX. No claim, hypothesis, or cited fact changed.

| 18 | `def-almost-inclusion-pseudointersection-and-tower` | `⊆*`, pseudointersection, SFIP, tower, `P(ω)/fin`, and the repeat-removal normal form; Monk pp.1, 13–14, Malliaris–Shelah Def 14.3 | precheck n/a (definition) |
| 19 | `lem-small-tower-exists` | ZFC: a tower of length ≤ 𝔠 exists (well-order `[ω]^ω`, running pseudointersection, split off the defeated half); Monk before Prop 34 | precheck pass (canonical numbering adopted) |
| 20 | `def-pseudointersection-and-tower-numbers` | `p` = least SFIP-without-pseudointersection size, attained; `t` = least tower length, attained, a cardinal ≤ 𝔠; Monk Blass 6.2/6.22 | precheck n/a (definition) |
| 21 | `lem-basic-pseudointersection-and-tower-bounds` | ZFC: `ℵ1 ≤ p ≤ t ≤ 𝔠`; countable SFIP and countable descending families have pseudointersections; Monk Prop 34/48 (proof cites the diagonal) | precheck pass (canonical numbering adopted) |
| 22 | `def-eventual-domination-bounding-and-dominating-numbers` | `≤*`, `b`, `d` as attained cardinal minima; Monk Thm 1, Bartoszyński §2 | precheck n/a (definition) |
| 23 | `lem-basic-bounding-and-dominating-relations` | ZFC: `ℵ1 ≤ b = cf(b) ≤ cf(d) ≤ d ≤ 𝔠`; Monk Thm 1 | precheck pass (canonical numbering adopted) |
| 24 | `def-splitting-and-reaping-numbers` | splitting families `s`, unreaped families `r`, both attained with `s,r ≤ 𝔠`; Monk Blass 3.1, Prop 27 | precheck n/a (definition) |
| 25 | `lem-splitting-reaping-comparison-with-b-and-d` | ZFC: `ℵ1 ≤ s ≤ d ≤ 𝔠`, `ℵ1 ≤ b ≤ r ≤ 𝔠`; internal interval-partition machinery (Monk 2.9–2.10, Lemma 14/15, Thm 16) | precheck pass (canonical numbering adopted) |

Local scaffold repair recorded while authoring item 21: its original step
numbering (with the `p ≤ t` step late) is not the canonical stratification, so
the canonical repair block was adopted; the same claims, in the same order of
dependency, now number 1.1, 1.2, 2.1, 3.1, 4.1, 4.2, 5.1, 5.2, 6.1, 7.1. The
prose reference "steps 1.1 to 1.3" was replaced by the concrete new numbers
before adoption. Same treatment (renumbering only) for items 19, 23 and 25.

Source note for item 25: Monk prints Theorem 16 with a reference to "Lemma 14";
Lemma 14 is the countable lower bound `ω < s`, while the splitter implication
used is Lemma 15. The item cites the claims, not the misprinted number, and the
numbering slip is reported for the reconciliation record.

Conventions declared for the whole pair: closure is the library's strict
convention (`κ-closed` = every descending sequence of length **below** `κ` has a
lower bound, [[def-kappa-closure-distributivity-and-chain-condition]]); Jech's
`λ-closed` therefore reads `λ⁺-closed` here, exactly as the Step-1 scaffold
repair recorded. `M` is a transitive ground model, `G` generic for the set-sized
Easton product `P(F)`; `P^{≤λ}`/`P^{>λ}` are the head and tail of
[[def-easton-support-product]].

Item 9 pins the following local conventions (reused by the class items 11–15):
genericity is the density-meeting definition of
[[def-dense-open-sets-and-model-generic-filters]]; the head `P^{≤κ}` is a
`κ⁺-cc` set and the tail `P^{>κ}` is `κ⁺`-closed; the lower bound uses the
canonical column names `ẋ_β` for `β<F(κ)` and the fresh-coordinate density
argument (support bound at `κ` is `|dom(p)|<κ`, so two fresh triples may always
be adjoined). No GCH is used in the lower bound; GCH enters only through
[[lem-easton-head-cardinality-and-name-count]] in the upper bound. AC is spent
in the least-nice-name selection of step 2.1 (and inherited by the suppliers).

Qualification recorded while authoring item 6 (scaffold repair, not a dropped
claim): Jech's Lemma 15.19 (printed p. 234) is proved for functions whose values
lie in a ground-model set; the item proves the function form `f: λ → M` by
reducing to the ordinal case through the rank function and a ground-model
bijection, so no quantifier is weakened. The product-genericity projection used
there is proved inside the item from
[[def-dense-open-sets-and-model-generic-filters]].

## Session 2 checkpoint (continuation of the same dispatch)

Rows 26–29, 33, 40 of A and the four B examples were authored after the table
above; each row was checked with explicit-path precheck on its own file and
with rendercheck, and the canonical numbering was adopted wherever precheck
printed REPAIR (with the in-text cross-references rewritten by hand before
adoption).

| # | item | claim (short) / source locator | stage |
|---|---|---|---|
| 26 | `def-null-and-meagre-cardinal-invariants` | `add`, `cov`, `non`, `cof` for the null and meagre ideals on ℝ, with the minima shown to exist and be attained; singleton witnesses, ℝ ∉ I; Bartoszyński §2 list, printed p.2 | precheck n/a (definition) |
| 27 | `lem-basic-ideal-cardinal-inequalities` | ZFC: ℵ1 ≤ add ≤ min(cov,non) ≤ max(cov,non) ≤ cof ≤ 𝔠 for I = N, M; countable closure from the published σ-ideal theorems (ACC), cof ≤ 𝔠 from Borel hulls (G_δ hulls for N, F_σ closures for M) and \|B(ℝ)\| = 𝔠 | precheck pass |
| 28 | `lem-cantor-coin-measure-from-binary-expansion` | ZFC/ACC: the fair-coin measure on 2^ω with μ([s]) = 2^-|s|, built as the Carathéodory extension of the fair-coin content on the cylinder algebra (premeasure verified through compactness of Cantor space) | precheck pass |
| 29 | `def-null-meagre-borel-master-codes` | null master codes (clopen limsup, μ ≤ 2^-n), meagre master codes (dense open stages), the slalom space and eventual inclusion | precheck n/a (definition) |
| 33 | `lem-ideal-tukey-morphism-controls-add-and-cof` | u(A) ⊆ B ⇒ A ⊆ v(B) gives add(J) ≤ add(I) and cof(I) ≤ cof(J), also for morphisms between inclusion-cofinal subfamilies (AC); Bartoszyński Lemma 2.2 with both directions checked | precheck pass (canonical numbering adopted) |
| 40 | `fs-zfc-determines-the-continuum-function` | FALSE at κ = ℵ1: the GCH picture gives 2^ℵ1 = ℵ2 and the Add(ℵ1,ℵ3) picture gives 2^ℵ1 = ℵ3; external finite-fragment reading, no transitive-model inference | precheck pass (canonical numbering adopted) |

| B | item | claim (short) | stage |
|---|---|---|---|
| B1 | `ex-countable-decreasing-family-has-a-pseudointersection` | explicit diagonal construction of a pseudointersection of a ⊆*-descending sequence | precheck pass (canonical numbering adopted) |
| B2 | `ex-ch-collapses-classical-cardinal-invariants` | under CH all fourteen numbers (p,t,b,d,s,r and the eight add/cov/non/cof values) equal ℵ1, by the pinching ℵ1 ≤ x ≤ 𝔠 = ℵ1 and ordinal antisymmetry | precheck pass (canonical numbering adopted) |
| B3 | `ex-easton-two-regular-cardinal-pattern` | over a transitive ZFC+GCH ground model with dom F = {ℵ0, ℵ1} and F ≡ ℵ3, the Easton product gives (2^ℵ0)^{M[G]} = (2^ℵ1)^{M[G]} = ℵ3 with cardinals preserved | precheck pass |
| B4 | `ex-ma-model-null-meagre-additivity-equals-continuum` | in the ω2 MA iteration over GCH, 𝔠 = ℵ2 and add(N) = add(M) = ℵ2 | precheck pass (canonical numbering adopted) |

Repairs made in session 2 to already-authored draft items of this dispatch:

- `lem-basic-pseudointersection-and-tower-bounds` (item 21) had two prose
  cross-references that pointed at the wrong steps ("steps 1.1, 4.1 and 4.2",
  self-referential, in steps 4.1 and 4.2); both now read "steps 1.1, 2.1 and
  3.1", which is the chain actually used. No claim, hypothesis or tag list
  changed; precheck still passes.

Design decisions recorded in session 2:

- Item 28 supplies the fair-coin measure **locally** by Carathéodory extension
  rather than by the published dyadic-coding lemma
  (`lem-dyadic-coding-coin-measure-and-lebesgue-transfer`) or the published
  fair-coin content item (`def-binary-sequence-cylinders-and-fair-coin-content`),
  because those two published items lie **outside** this page's `requires`
  closure (page `measure-preserving-transformations-and-poincare-recurrence`),
  while the whole Carathéodory toolkit (`def-premeasure-on-an-algebra`,
  `def-outer-measure-induced-by-a-premeasure`,
  `thm-caratheodory-extension-theorem`) lies inside it. The closure was
  computed mechanically from `research/plan-spec.json`.
- Item 29 fixed the notation `(𝕊, ⊆*)` for the slalom space so that `𝒞` stays
  reserved for Cantor space; downstream items must use `𝕊`.
- Item 33 is stated for arbitrary proper ideals on a set with the four minimum
  clauses of item 26, with a second clause covering morphisms given only
  between inclusion-cofinal subfamilies (this is what the master-code chain
  needs).

## Open obligations

### Handoff status at the end of this session

**Completed and checked (31 of the 41 A items, plus all 4 B examples).**
A items 1–29 (items 1–17 adopted from the interrupted first dispatch, 18–25
authored in the first session, 26–29 in the second), item 33
(`lem-ideal-tukey-morphism-controls-add-and-cof`) and item 40
(`fs-zfc-determines-the-continuum-function`); B examples
`ex-countable-decreasing-family-has-a-pseudointersection`,
`ex-ch-collapses-classical-cardinal-invariants`,
`ex-easton-two-regular-cardinal-pattern`,
`ex-ma-model-null-meagre-additivity-equals-continuum`.

**Item decisions recorded (10, all `accept`, confidence 1, with examined
dependency lists and item-specific evidence):** the four A items and one
false-statement above plus the four examples. Receipts:
`research/frontier-35-ten-categories-step3b-review-<id>.json`.

**Checks actually run, with results.**

- `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` on every item
  authored in this session (explicit paths): PASS for the 8 proof-bearing
  items, "precheck n/a" for the 2 definition items. Every REPAIR block
  (canonical stratified renumbering) was adopted, with in-text
  cross-references rewritten by hand first.
- `node tools/rendercheck.mjs items/<ids>.md` on all 11 new/edited files: OK
  (no wikilink in math, no multiline display, KaTeX and YAML parse).
- `node tools/depcheck.mjs` (repo-wide; already failing for unrelated
  pre-existing reasons — the Brauer page cycle and others): filtered output
  for this pair's ids shows **only** the expected transient
  `link-unresolved` entries to items 30–39 that are not yet authored, plus
  two `cited-not-in-deps` findings that were **fixed** in this session
  (`ex-ch-collapses-classical-cardinal-invariants`,
  `lem-cantor-coin-measure-from-binary-expansion`).
- `node tools/step3-decisions.mjs check --run frontier-35-ten-categories
  --phase final`: run not closed (241 items accepted overall); every one of
  this pair's recorded items is accepted.
- Final whole-batch sweep at the end of the session: explicit-path precheck on
  **all 35** batch items that exist on disk (31 A items + the 4 B examples) —
  `checked=35 failures=0`; rendercheck OK on the 11 files written in this
  session and on the earlier batch files when they were authored.

**Local suppliers added (not dropped promises, not Recorded results).**
`thm-baire-category-r`, `prop-countable-subsets-of-rn-are-lebesgue-null`,
`thm-lebesgue-measure-is-a-complete-measure`,
`cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls`,
`thm-cardinality-of-the-borel-sigma-algebra-on-rn`,
`prop-meagre-subsets-form-a-sigma-ideal`,
`prop-null-sets-form-a-sigma-ideal-in-a-complete-space`,
`def-premeasure-on-an-algebra`, `def-outer-measure-induced-by-a-premeasure`,
`thm-caratheodory-extension-theorem`, `lem-compactness-is-intrinsic`,
`lem-closed-subset-of-a-compact-space-is-compact`,
`thm-cardinality-of-a-set-of-functions`, `thm-sum-rule`, `lem-power-laws`,
`thm-continuity-from-above-for-measures`, `thm-geometric-series`,
`thm-regularity-of-the-alephs`, `lem-ordinal-trichotomy`,
`thm-omega-two-iteration-forces-ma-and-not-ch`,
`thm-ma-small-unions-of-null-sets`, `thm-ma-small-unions-of-meagre-sets`,
`thm-higher-cohen-forcing-violates-gch`,
`thm-formal-consistency-of-zfc-plus-gch-from-zf`,
`cor-positive-relative-consistency-of-ch-and-gch`,
`cor-formal-negative-consistency-of-ch-and-gch`. All were checked to be
`status: published` and (except the two out-of-closure exceptions recorded
below) inside this page's `requires` closure, computed mechanically from
`research/plan-spec.json`.

**Published concerns carried forward** (in addition to F1–F6 and the Monk
Theorem 16 numbering slip already recorded above):

1. `def-binary-sequence-cylinders-and-fair-coin-content` and
   `lem-dyadic-coding-coin-measure-and-lebesgue-transfer` (both published,
   page `measure-preserving-transformations-and-poincare-recurrence`) state
   exactly the fair-coin-measure facts this page needs for items 30–37, but
   lie **outside** this page's `requires` closure. Item 28 therefore
   re-derives the measure locally through the in-closure Carathéodory
   toolkit; the owner may prefer to add that page to `requires` and shorten
   the chain. Reported, not acted on.
2. The scaffolded `def-null-meagre-borel-master-codes` meagre codes and the
   scaffolded good-clopen-family lemma (item 32) use the same symbol `C` for
   the slalom space that this library reserves for Cantor space; item 29
   fixes `(𝕊,⊆*)` and downstream items must follow it.

- Author the ten remaining A items 30, 31, 32, 34, 35, 36, 37, 38, 39 and 41
  (`def-measure-null-set-and-almost-everywhere` is the supplier for 41's
  statement hygiene if needed), then the two page files. The page files
  cannot be created before every listed item exists: `library/foundations/…`
  would otherwise fail depcheck's page-item-missing gate and would drop
  promised results.
- Item 32 (`lem-good-clopen-family-for-summable-slaloms`) is the only remaining
  item whose dependencies are all in place (def-product-topology alone); it is
  the next item to author. Items 30, 31, 34, 35, 36, 37 need the uniform
  Borel-section machinery, and items 38, 39 the Cichoń assembly.
- Write `research/frontier-35-ten-categories-batch-13.proof-contracts.json`
  (strict) after the items are final.
- Refresh the batch cross-batch dependency input
  (`…-batch-13.cross-batch-dependencies.json`, currently `[]`) after checking
  every dependency use, then refresh the run ledger.
- Run explicit-path precheck, rendercheck, content-policy, depcheck/extcheck,
  coverage-checklist `--require-destination`, manifest-deps and validate-plan
  for this batch; record each actual result.
- Final dispatch report sections: completed IDs, checks actually run, local
  suppliers added, published concerns, open obligations.

### validate-plan result (run in this session) and the pre-splice mismatch

`node tools/validate-plan.mjs research/plan-spec.json` exits **OK**: "declared
page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 1188 page(s) with
item lists", with the standing note that 431 planned pages carry no item list
yet. Our own A page (order 715) is one of them: its `plan-spec.json` entry has
`"items": []`, while the authoritative inventory is
`research/frontier-35-ten-categories-batch-13.pages.json`. **This is a
pre-splice plan mismatch to report to Step 4, not something to hide**: the
plan-level item list for this page was never spliced from the batch manifest
(the deferred `thm-pseudointersection-number-equals-tower-number` being removed
is consistent with the owner direction and is not a dropped claim of this
dispatch). Nothing in this session edited `plan-spec.json`.

The remaining batch gates (proof-contract `--strict`, content-policy,
`merge-contracts`, `coverage-checklist --require-destination`, manifest-deps,
extcheck/fwdcheck/url-sweep/source-backing, finite-smoke, risk-report,
boundary-audit, citation-fidelity, gate-liveness) were **not** run: they need
the batch's contract file and the complete item inventory, which cannot be
final while A items 30–39 and 41 and the two page files are unwritten. Running
them now would produce failures that carry no information, and the dispatch
forbids hiding unresolved dependencies; the honest state is recorded here.
