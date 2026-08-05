# Wave 5 — Audit-Beta findings, `topology-countability` batch (A1/A2)

Scope of record: `research/audit/wave5-topology-countability.pages.json` —
2 A/B pairs, **73 items**.

| page | kind | items |
|---|---|---|
| `countability-axioms-and-cardinal-functions` | A | 35 |
| `countability-axioms-and-cardinal-functions-examples` | B | 9 |
| `the-topology-of-euclidean-space` | A | 23 |
| `the-topology-of-euclidean-space-examples` | B | 6 |

**Coverage statement.** Every one of the 73 items was read from disk in full.
Every numbered proof step in the 53 proof-bearing items was verified against its
declared `[F#]`/`[A#]`/`[L#]` facts, and every dependency citation was verified
against the cited target's own on-disk `Statement`/`Definition` section. No
exception; nothing was sampled.

**Headline: no fatal defect.** No false statement, no invalid inference, no
mis-citation that changes a hypothesis, quantifier, direction or conclusion.
All findings below are nonfatal under the standing triage rule.

---

## Checkpoint (substage / next action)

- Substage: **A4 complete.** A1 + A2 were completed in the earlier dispatch.
- Artifacts owned: `wave5-topology-countability.{provenance.jsonl,findings.md,proof-contracts.json}`,
  plus the two apply scripts named in the A4 record below.
- Completed at A4: 73 provenance blocks, 4 `generation.role` blocks, 65 reference
  URLs across 50 items, 2 approved material repairs, 2 ledger rationale
  corrections, 1 contract citation entry. All gates re-run; see the A4 record.
- Next action: **A6 Alpha.** Two things are waiting there and one of them blocks
  the A4 gate — see "Two things A4 could not close" below.

---

## Mechanical gate results (all run on current disk)

| gate | result on my 73 |
|---|---|
| `precheck.mts` | 53 proof-bearing checked, **0 failing** |
| `depcheck.mjs` | corpus OK; **0** `cited-not-in-deps` lines touch my items |
| `citecheck.mjs` | **0** warning blocks for my items |
| `extcheck.mjs` | OK; no item of mine rests on unproved material |
| `fwdcheck.mjs` | OK; no forward reference in my scope |
| `rendercheck.mjs` | OK |
| `prosecheck.mjs` | 0 errors |
| body-wikilink vs `deps` | **0 undeclared wikilinks** across all 73 |
| source URLs | 22 distinct, **all HTTP 200** |

---

## A1 — provenance determination

73 rows in `wave5-topology-countability.provenance.jsonl`.

**No item in this batch carries a legacy `authorship` line.** The A4 retag is
therefore purely additive: it writes `provenance` (and, where noted below,
adds a `sources.references` entry) and deletes nothing. Under
AUDIT-WORKFLOW §6 that preserves every existing `verification.judge` and
`audited` stamp.

### The two dominant sources, checked clause by clause

Both were downloaded and read, not assumed from their titles.

**D. H. Fremlin, *Measure Theory* vol. 5, §5A4** (14 items) is an **exact**
source, and a much better one than its bare citation suggested. 5A4A defines,
verbatim in the library's own **raw** convention (no ℵ₀ normalisation):

- `w(X)` "the least cardinal of any base for T" → `def-weight-density-and-character`
- `d(X)` "the smallest cardinal of any dense subset of X" → same
- `χ(x,X)` "the smallest cardinal of any base of neighbourhoods of x", `χ(X) = sup χ(x,X)` → same
- `L(X)` "the least cardinal κ such that every open cover of X has a subcover with cardinal at most κ" → `def-lindelof-degree-and-cellularity`
- `c(X) = sup{#(G) : G ⊆ T\{∅} is disjoint}` → same

and 5A4A's closing Remark — "X is called 'second-countable' iff w(X) ≤ ω,
'separable' iff d(X) ≤ ω, 'ccc' iff c(X) ≤ ω, 'Lindelöf' if L(X) ≤ ω, …
'first-countable' if χ(X) ≤ ω" — is an exact source for
`cor-cardinal-functions-detect-countability-axioms`, all five equivalences at
once. 5A4B(b) is exact for `prop-subspace-weight-and-character-inequalities`,
5A4B(c) for `prop-continuous-image-density-and-lindelof-degree`, and
5A4B(h)(i) "Suppose that X is metrizable. (i) d(X) = w(X)" for
`thm-metric-weight-equals-density`.

**UCR *General Topology* notes, math205C** (29 items) carries its clauses for
some items and **not** for others. It exactly states the definitions of
separable / second countable / Lindelöf, its THEOREM 1 (second countable ⇒
separable and Lindelöf; metric separable-or-Lindelöf ⇒ second countable), its
PROPOSITION 2 (second countability is hereditary and finitely productive), and
— in its "Lindelöf does not imply separable" example — the non-separability of
`{0,1}^A` for `|A| > 2^ℵ⁰`, i.e. `lem-large-cantor-cubes-are-not-separable`,
by a different (function-counting) argument. That is a genuine semantic source.

It contains **no occurrence at all** of: countable chain condition / ccc,
Δ-system, Sorgenfrey or lower-limit topology, one-point compactification, ω₁,
or Cantor cube. Ten items nonetheless carry it as their only reference. See
**N1** below — this is the batch's one systematic citation defect.

### Distribution of the 73 determinations

| `statement` | evidence | count |
|---|---|---|
| `literature-derived` | `exact-source` | 13 |
| `ai-altered` | `semantic-source` | 49 |
| `ai-altered` | `established-knowledge` (needs Alpha concurrence) | 7 |
| `ai-generated` | `trivial` | 4 |

`provenance.proof` is `ai-generated` on 63 of 73 and `not-applicable` on the
remaining 10 (the eight definitions and the two remarks). The uniformity is not
laziness: the numbered-step format, the explicit choice-principle bookkeeping —
this batch names `AC`, `AC_ω` and `DC` where it spends them, which none of the
sources do — and the library-internal citation style mean essentially every
local proof is a local rewrite even where the statement is transcribed verbatim.
No proof in this batch follows a sourced proof closely enough to call
`literature-derived`.

**No item in this batch is tagged `ai-generated` on its statement for want of a
source.** The four `trivial` calls are recorded with the verification written
out, and all four are direct chart/wrapper items:
`ex-euclidean-closed-ball-and-sphere-through-the-compactness-chart`,
`ex-a-ccc-nonseparable-cantor-cube`,
`cex-separability-is-not-hereditary-worked`,
`cex-lindelofness-is-not-productive-worked`.

**Blast-radius note.** None of those four is a `deps` target of any item in the
corpus, so tagging them `ai-generated` adds nothing to `genrisk`'s seed set and
freezes no cone. `def-interval`, `def-countable` and the other heavy targets my
items cite are `ai-altered` or better in their own waves, so every dependency
edge in this batch stays legal under the provenance-order rule.

### Eight items escalated to Alpha for the evidence class

Carrying `escalated_to_alpha: true` in the ledger:
`lem-weight-is-well-defined`, `lem-density-is-well-defined`,
`lem-character-is-well-defined`, `lem-lindelof-degree-is-well-defined`,
`lem-cellularity-is-well-defined`, `thm-basic-cardinal-function-inequalities`,
`rem-countability-axiom-implication-and-choice-ledger`,
`rem-euclidean-topology-dictionary`. Grouped into four cases:

These are unambiguously standard mathematics that no *located* open-access
source states in the exact form the item uses. Under the positive-determination
rule they are **not** `ai-generated`; I have recorded them as `ai-altered` /
`established-knowledge`, which needs Alpha's independent concurrence
(`alpha_concurred` is `false` until Alpha rules):

1. `lem-weight-is-well-defined`, `lem-density-is-well-defined`,
   `lem-character-is-well-defined`, `lem-lindelof-degree-is-well-defined`,
   `lem-cellularity-is-well-defined` — Fremlin *asserts* these minima and
   suprema exist by writing them down; no source proves well-definedness as a
   separate proposition, because in the source's setting it is immediate. The
   library split it out to keep `justified_by` honest. I grouped these as one
   escalation.
2. `thm-basic-cardinal-function-inequalities` — Fremlin 5A4B(a) is exact for
   `c(X) ≤ d(X) ≤ π(X) ≤ w(X)` and `χ(X) ≤ w(X)`, but **`L(X) ≤ w(X)` is not in
   5A4B(a)** and I did not locate it in 5A4. It is standard (a basis of size
   `w(X)` refines any cover) and the item's step 1.3 proves it inline. The
   merged four-inequality statement is therefore `ai-altered`, not
   `literature-derived`.
3. `def-pseudocompact-space` — the item deliberately drops the complete
   regularity that many texts build into the word, and says so in its own
   Remark. Wikipedia's *Pseudocompact space* gives the bounded-image condition
   as the definition, so this is `semantic-source`; I flag the convention delta
   rather than escalating it, but Alpha should confirm the library-wide choice.
4. `rem-euclidean-topology-dictionary` and
   `rem-countability-axiom-implication-and-choice-ledger` — orientation prose
   assembled from the page's own results. Recorded `ai-altered` /
   `established-knowledge`; neither asserts anything the page does not prove.

---

## A2 — proof contracts

`wave5-topology-countability.proof-contracts.json` covers **53 proof-bearing
items** (every item in scope that has a `Proof`, `Refutation` or
`Counterexample` section) with **231 citation contracts**, **191 step
contracts** and **424 boundary dispositions**.

`node tools/proof-contract.mjs research/audit/wave5-topology-countability.proof-contracts.json --strict`
reports **0 errors, 0 warnings, 53/53 items checked**.

That receipt is worth reading precisely, because the gate is stronger than it
looks. For all 231 citations it independently re-derived, from the item text on
disk, that: the `quote` occurs verbatim in the named `Statement` /
`Definition` / `Statement refuted` / `Example` section of the cited item; the
cited source is actually linked by that `[F#]`/`[A#]`/`[L#]` fact; the source is
declared in `deps` or `justified_by`; the source's `provenance.statement` is not
`ai-generated`; and `uses` lists **exactly** the proof steps that cite that fact
— no step omitted (`citation-use-unmapped`) and none invented
(`citation-use-not-supported`). Every fact/link pair has a contract
(`citation-fact-uncontracted`), and each of the 191 numbered steps is claimed by
exactly one entry (`step-unmapped`, `step-entry-duplicate`), with its `inputs`
covering every fact the step actually cites (`step-entry-input-omitted`).

Method note, so the receipt is not over-read: the structural half of the
contract — fact/source/uses, the step map, the input lists — was extracted
mechanically from the item text and then re-verified by the gate against that
same text, so it is exact by construction rather than by my transcription. The
mathematical half — that the quoted clause actually *licenses* the step that
cites it — is my reading, recorded in the findings above; no substring test
establishes an implication and I do not claim it does.

Two things the contracts do **not** contain, by design: `finite_smoke` is empty
(nothing in this batch is a finite/combinatorial claim with a bounded
countermodel search available — the Δ-system lemma and the Cantor-cube ccc
theorem are about *uncountable* families), and `risk_review` is absent because
that record is Alpha's to write.

### Risk routing for Alpha

`risk-report.mjs` on this contract file routes **18 CRITICAL, 20 HIGH, 10
MODERATE**, 0 errors. Per `QUALITY-CONTROLS.md` each high/critical item needs an
additional proof-refuter reading and an Alpha `risk_review` disposition. The
critical set is:

`lem-weight-is-well-defined`, `lem-density-is-well-defined`,
`lem-character-is-well-defined`, `lem-lindelof-degree-is-well-defined`,
`lem-cellularity-is-well-defined`, `cor-cardinal-functions-detect-countability-axioms`,
`thm-metric-countability-equivalences`, `thm-countable-products-of-second-countable-spaces`,
`thm-basic-cardinal-function-inequalities`, `lem-uncountable-delta-system-for-finite-sets`,
`fs-separable-spaces-are-second-countable`, `fs-lindelofness-is-productive`,
`thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`,
`cor-euclidean-compactness-equivalence-chart`, `lem-euclidean-polygonal-paths-are-continuous`,
`thm-open-connected-subsets-of-rn-are-polygonally-connected`,
`lem-finite-powers-of-countable-sets-are-countable`,
`thm-radial-straight-line-map-on-punctured-rn`.

The score is a structural triage signal, not a defect count — it fires on
dependency counts, biconditionals and boundary vocabulary. It happens to agree
with where I spent my own effort: `fs-lindelofness-is-productive`,
`lem-uncountable-delta-system-for-finite-sets` and
`thm-euclidean-heine-borel-pseudocompactness-and-extreme-values` are both the
top of this list and the three arguments I checked hardest. I found no defect in
any of the 18.

---

## A2 — accuracy and citation-precision findings

All nonfatal. Each carries my recommendation; **none is a repair I would apply
without Alpha's A3 approval**, and I recommend "no repair" for most.

### N1 — ten items cite a source that does not contain their statement *(class b, the one I would actually fix)*

`https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf` is the sole
reference on ten items whose subject matter it never mentions:

| item | what UCR lacks |
|---|---|
| `def-countable-chain-condition` | no "countable chain condition", no "ccc" |
| `prop-separable-spaces-are-ccc` | same |
| `lem-uncountable-delta-system-for-finite-sets` | no Δ-system / sunflower |
| `thm-cantor-cubes-are-ccc` | no Cantor cube, no ccc |
| `fs-ccc-spaces-are-separable` | same |
| `fs-separable-spaces-are-second-countable` | no lower-limit / Sorgenfrey |
| `fs-separability-is-hereditary` | no Sorgenfrey plane |
| `fs-lindelofness-is-productive` | same |
| `fs-lindelofness-is-hereditary` | no one-point compactification |
| `ex-cardinal-functions-of-the-lower-limit-line` | no lower-limit topology |
| `ex-countability-profile-of-omega-one` | no ω₁ |
| `ex-cardinal-functions-of-a-one-point-compactification` | no one-point compactification |

This is the same defect class the `real-analysis` Beta recorded as its N6 (a
Rudin theorem paired with the Wikipedia article *about the book*), and it has a
one-line-per-item fix that changes no mathematics. Verified HTTP 200
replacements that do carry the clause:

- ccc → `https://en.wikipedia.org/wiki/Countable_chain_condition`
- Δ-system → `https://en.wikipedia.org/wiki/Delta-system_lemma`
- Sorgenfrey line/plane → `https://en.wikipedia.org/wiki/Lower_limit_topology`, `https://en.wikipedia.org/wiki/Sorgenfrey_plane`
- Cantor cube → `https://en.wikipedia.org/wiki/Cantor_cube`
- ω₁ → `https://en.wikipedia.org/wiki/First_uncountable_ordinal`
- one-point compactification → `https://en.wikipedia.org/wiki/Alexandroff_extension`
- separable ⇒ ccc → Fremlin 5A4B(a), `c(X) ≤ d(X)` (already in the corpus)

**Recommendation: add** the matching URL alongside the existing UCR entry, do
not remove UCR. Adding a reference that changes no claim is not a material
rewrite under SCHEMA §3, so no judge stamp is voided and the whole thing rides
the single A4 stage snapshot with the retags. The `ai-altered` /
`semantic-source` rows for these ten items depend on this addition being made;
until it is, four of them would have to fall back to `established-knowledge`.

One further instance outside the countability page:
`rem-euclidean-topology-dictionary` cites "J. R. Munkres, *Topology*, 2nd ed.,
§§19, 20" with the URL `https://en.wikipedia.org/wiki/James_Munkres` — the
article about the *person*. Suggested replacement carrying the clause:
`https://en.wikipedia.org/wiki/Product_topology`.

### N2 — `cor-components-of-open-subsets-of-rn-are-polygonally-connected` uses "path-connected ⇒ connected" without declaring it *(class b)*

Its `[L1]` asserts "A Euclidean ball is path-connected, **hence connected**"
citing only `def-metric-ball`, `def-norm-and-normed-space` and
`lem-euclidean-polygonal-paths-are-continuous`. The implication itself is
`thm-path-connected-implies-connected`, which is **not** in this item's `deps`
— although the sibling corollary
`cor-rn-is-polygonally-connected-and-locally-path-connected` does declare it for
the identical inference, and `[L3]` here reaches it transitively.

Nonfatal: no wikilink dangles, `depcheck` and `citecheck` are both silent, and
the fact is a published library theorem one edge away. **Recommendation: no
repair.** Adding a `deps` edge to a published item changes the rendered
prerequisite closure and would drag a `impact-audit` disposition behind it —
disproportionate to a citational quirk the triage rule explicitly parks.

### N3 — `lem-character-is-well-defined` `[L3]` slightly overstates `lem-ordinal-basics`

`[L3]` reads "a set of ordinals has union as its least upper bound"; the cited
clause `lem-ordinal-basics(e)` says only that `⋃A` **is an ordinal**. That it is
the *least* upper bound is immediate (`α ⊆ ⋃A` for `α ∈ A`; and `⋃A ⊆ β`
whenever `β` bounds `A`) but is not in the quoted clause. `lem-cellularity-is-well-defined`
`[L2]` carries the same wording. **Recommendation: no repair** — a 30-second
gap, and the derivation is elementary set theory the reader has in hand.

### N4 — `thm-cantor-cubes-are-ccc` step 2.1 applies the Δ-system lemma to supports without noting they are uncountably many

Step 1.1 chooses a basic cylinder `[p_U] ⊆ U` for each `U`, notes "Distinct `U`
give distinct cylinders", then 2.1 says "By [L1], after passing to an
uncountable subfamily the supports form a Δ-system". `[L1]` needs an
**uncountable family of finite sets**; what is uncountable is the family of
`U`s, and the set of *supports* is uncountable only because `U ↦ p_U` is
injective and there are just `2^|F|` functions on a fixed finite support `F`.
The item supplies the injectivity remark that makes this work but does not
join the two sentences.

I checked this is not a gap in the mathematics: if the support set were at most
countable, each support would carry finitely many `U`s and `𝒰` would be a
countable union of finite sets, contradicting its uncountability. **Recommendation:
no repair** — the load-bearing observation is already on the page, one sentence
earlier.

### N5 — `ex-countability-profile-of-omega-one` writes the cover of initial segments as `{α : α < ω₁}`

That expression denotes `ω₁` itself, not the family `{[0,α) : α < ω₁}` the
argument needs. The very next clause ("any at most countable subfamily has
bounded union and therefore fails to cover") makes the intent unambiguous.
Notation slip, not a mathematical error. **Recommendation: no repair** under the
letter-level clause of the triage rule; it is the one place in the batch where I
would understand Alpha choosing otherwise, since it costs one character pair.

### N6 — two items disagree with their own frontmatter about proof technique

`thm-rational-points-and-boxes-in-rn` and `lem-punctured-rn-is-polygonally-connected`
both declare `proof_strategy: direct` in frontmatter while their body reads
"**Proof technique:** constructive" (and both use `construct` /
`discharge-construct` step tags). `precheck.mts` reads the frontmatter value and
passes both, so nothing mechanical catches it. **Recommendation: no repair** —
cosmetic, and any edit to a proof body is a material rewrite that would void a
judge stamp for no mathematical gain.

### N7 — the countability A-page summary names material that lives on its B page

Paragraph 1 lists "ordinal spaces" among the prerequisites the development
uses, and paragraph 2 credits "discrete, lower-limit, compactification,
**ordinal**, and large-cube constructions" with refuting the converses. The
ordinal construction is `ex-countability-profile-of-omega-one`, which sits on
`countability-axioms-and-cardinal-functions-examples`, not on the A page whose
`items:` list the summary describes. Every other construction named is on the A
page. **Recommendation: no repair** — the A/B pair is the reader's unit and the
judge's context unit, so the sentence is true of the pair; flagging for Alpha in
case the page-summary contract is meant strictly per-page.

### N8 — `thm-radial-straight-line-map-on-punctured-rn` identifies a product with a metric subspace tacitly

`[L4]`'s componentwise-continuity clause (`thm-componentwise-limits-and-continuity`,
clause 1) is stated for a map from a subset of a **metric** space into `ℝ^m`.
Here the domain is `P × [0,1]` with the **product** topology. The two agree —
that is `lem-product-topology-on-rn` claim 3, which the batch's own
`rem-euclidean-topology-dictionary` records — but this item does not cite it.
**Recommendation: no repair**; 30-second gap, and the identification is the
page's opening remark.

### N9 — `ex-countability-profile-of-the-lower-limit-plane` sources positive facts from two `fs-` items

It cites `fs-separability-is-hereditary` and `fs-lindelofness-is-productive` for
the antidiagonal being uncountable, discrete and closed. Those facts really are
established inside those items' `## Refutation` sections, and I verified both
(discreteness at `fs-separability-is-hereditary` 1.2; closedness at
`fs-lindelofness-is-productive` 1.3, including the `u+v<0` case, where a
rectangle of side `-(u+v)/2` is exactly short enough). Citing a false-statement
item for a true auxiliary fact is unusual but sound. **Recommendation: no
repair.**

---

## Verification notes on the arguments I checked hardest

Recorded because these are the places a defect would most plausibly have hidden.

- **`fs-lindelofness-is-productive`** is the most intricate proof in the batch
  and is correct. The Sorgenfrey line's Lindelöfness is split into the
  "interior" part `C` (covered by countably many rational-interval selections)
  and `ℝ\C`, shown at most countable by injecting `x ↦ r_x` into `ℚ`; the
  injection works because `x < y` with `r_x = r_y` forces `y ∈ (x,r_x) ⊆ C`.
  Both countable-choice uses are legitimate and are the ones the statement
  declares. The `S²` half is the standard closed uncountable discrete
  antidiagonal.
- **`thm-metric-weight-equals-density`** step 1.1 picks `d ∈ D` with
  `‖x−d‖ < ε/3` and then a rational `q` with `‖x−d‖ < q < ε − ‖x−d‖`; such a
  `q` exists precisely because `ε/3 < ε/2`. The finite case in 1.2 is genuinely
  disposed of (`X = D`, discrete, `w = |X| = d`), including `D = ∅`.
- **`lem-uncountable-delta-system-for-finite-sets`** — the `n = 0` base is
  vacuous for the right reason, the induction step's map `A ↦ A∖{x}` is
  injective on `{A : x ∈ A}`, and Zorn's poset is nonempty because `∅` is a
  pairwise-disjoint family.
- **`thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`** closes
  the cycle `4 ⇒ 3 ⇒ 2 ⇒ 1 ⇒ 4` and its ZF claim survives: every ingredient
  (`thm-heine-borel-rn`, `thm-compactness-under-continuous-maps` claim 2, and
  both pseudocompactness lemmas) is choice-free.
- **`thm-open-connected-subsets-of-rn-are-polygonally-connected`** — the `U = ∅`
  branch is correct under this library's `def-connected-space`, where a
  separation requires two **nonempty** pieces, so `∅` is connected.
- **`fs-connected-subsets-of-rn-are-polygonally-connected`** — the identity
  `‖(u+v)/2‖² = 1 − ‖u−v‖²/4` for unit `u,v` is exact, not approximate.
- **`lem-radial-normalisation-is-continuous`** — the constant `4/d` in step 1.2
  is the right one: the two terms each contribute `‖x−a‖/‖x‖ < 2‖x−a‖/d`.

## For the A10 owner queue

Nothing. No deletion, id change or reading-order change is needed anywhere in
this batch.

---

# A4 record — applied 2026-08-05

Authority: `research/audit/wave5-A3.md` §9, which authorises for this batch a
bulk pure-retag pass plus two of the three §6 accuracy repairs. Nothing in §1
(F1) or §2 (the ten `citation-uses` errors) falls in this batch: my A2 contract
was already `0 errors`, and I re-ran it to confirm before starting.

## 1. Material repairs — two items

Both are §6 repairs that A3 approved **over** my own A2 "no repair"
recommendation. I re-read both from disk before applying; A3's reading is
correct in each case and my A2 call was the weaker one.

Each took a dedicated pre-edit `touchlog` snapshot, per the wave-2 granularity
rule. The bulk retag rode the driver's single `pre-A4` stage snapshot.

### R1 — `cor-components-of-open-subsets-of-rn-are-polygonally-connected`

- **Class:** (b) citation precision. **Snapshot:**
  `pre-A4-cor-components-of-open-subsets-of-rn-are-polygonally-connected`.
- **Defect:** `[L1]` asserted "A Euclidean ball is path-connected, **hence
  connected**" while citing only `def-metric-ball`,
  `def-norm-and-normed-space` and `lem-euclidean-polygonal-paths-are-continuous`.
  None of the three states the implication, and
  `thm-path-connected-implies-connected` was absent from `deps`. Step 1.1 then
  uses "The ball is connected by [L1]", so the untraceable inference was
  load-bearing.
- **Old text:** `[L1] A Euclidean ball is path-connected, hence connected: the
  norm triangle inequality keeps every straight segment in the ball, and the
  segment is continuous ([[def-metric-ball]], [[def-norm-and-normed-space]],
  [[lem-euclidean-polygonal-paths-are-continuous]]).`
- **New text:** `[L1] A Euclidean ball is path-connected, hence connected: the
  norm triangle inequality keeps every straight segment in the ball, the segment
  is continuous, and every path-connected space is connected
  ([[def-metric-ball]], [[def-norm-and-normed-space]],
  [[lem-euclidean-polygonal-paths-are-continuous]],
  [[thm-path-connected-implies-connected]]).`
  Plus `thm-path-connected-implies-connected` added to `deps`.
- **Source:** the target's own Statement, claim 2: *"**Path-connected implies
  connected.** If $X$ is path-connected then $X$ is connected. The same holds
  for a subset: a path-connected subset of $X$ is a connected subset of $X$."*
  Read from `items/thm-path-connected-implies-connected.md`, `status: published`,
  `provenance.statement: ai-altered` — so a legal `deps` target. Its sibling
  `cor-rn-is-polygonally-connected-and-locally-path-connected` already declares
  the same target at its own `[L3]` for the identical inference.
- **Provenance transition:** none. `proof` was already `ai-generated` and stays
  so under the §9 rule; `statement` is untouched by a Facts repair.
- **Contract:** one citation entry added to the batch contract —
  `L1 → thm-path-connected-implies-connected`, `source_section: Statement`,
  exact quote as above, `uses: ["1.1"]`. Without it `proof-contract --strict`
  raises `citation-fact-uncontracted`, so the contract edit is not optional.
- **Impact:** `impact-audit` from the dedicated baseline reports **0 logical,
  0 direct-citation consumers**. Independently recomputed over all 2,767 item
  files: nothing declares this id in `deps` or `justified_by`. Closure is empty.

### R2 — `ex-countability-profile-of-omega-one`

- **Class:** (a) unambiguous falsehood in reader-facing text (notation naming
  the wrong object). **Snapshot:** `pre-A4-ex-countability-profile-of-omega-one`.
- **Old text:** `The open initial segments $\{\alpha:\alpha<\omega_1\}$ cover
  $\omega_1$, but any at most countable subfamily has bounded union and
  therefore fails to cover.`
- **New text:** `The open initial segments $\{\,[0,\beta] : \beta<\omega_1\,\}$
  cover $\omega_1$, but any at most countable subfamily has bounded union and
  therefore fails to cover.`
- **Why this notation and not A3's `{[0,α) : α < ω₁}`.** A3's parenthetical was
  illustrative; the load-bearing correction is that the expression must denote a
  *family of open initial segments* rather than `ω₁` itself. I used the closed
  form because it is the library's own: `def-order-topology-on-an-ordinal` —
  which this item declares in `deps` — defines exactly `[0,\beta]` and
  `(\alpha,\beta]` and *nothing else*, so `[0,\alpha)` would introduce notation
  the reader has not been given. `thm-ordinal-spaces-and-compactness` step 1.2
  writes the same cover the same way: "the family $\{\,[0,\beta] : \beta \in
  \lambda\,\}$ consists of open sets by [L2] and covers $\lambda$".
- **Elementary derivation that the repaired sentence is true.** Each
  $[0,\beta]$ is basic open in the order topology. They cover: $\xi \in
  [0,\xi]$ for every $\xi < \omega_1$. A countable subfamily
  $\{[0,\beta_i]\}_{i\in\mathbb{N}}$ has union $[0,\sup_i \beta_i]$, and
  $\sup_i \beta_i < \omega_1$ by `thm-countable-subsets-of-omega-one-are-bounded`
  (already in this item's `deps`), so the union misses $(\sup_i\beta_i)^{+}$.
  The item's next clause is exactly this and needed no change.
- **Provenance transition:** none, same reason as R1.
- **Contract:** none. The item has no numbered proof steps and is not in the
  batch contract's 53-item scope.
- **Impact:** `impact-audit` from the dedicated baseline reports **0 logical,
  0 direct-citation consumers**; recomputed corpus-wide, likewise zero.

### Stamps on both

`verification.judge` (glm-5.2, 2026-07-31) and `verification.audited` deleted on
both items, per §9 — the judge would see different text and I may not certify my
own repair. Both now show as `[published-unaudited]` under
`depcheck --pending-audit-ok`, which is the A4-correct state; **A6's independent
reading owes each a `verification.verified` / `scope: published-audit` /
`delegated_by: owner`**, and A7 owes each a targeted rejudge.

## 2. Bulk pure-retag — 73 items, one stage snapshot

Applied by `research/audit/wave5-topology-countability.apply-retag.mjs`
(idempotent, frontmatter edited as text so no field is re-serialized):

- **73** `provenance.statement` / `provenance.proof` blocks, inserted after
  `origin:` per SCHEMA §3 field order. Distribution as balloted at A1:
  13 `literature-derived`, 56 `ai-altered`, 4 `ai-generated` statements.
- **4** `generation:` blocks on the `ai-generated` statements —
  `ex-a-ccc-nonseparable-cantor-cube` and
  `ex-euclidean-closed-ball-and-sphere-through-the-compactness-chart`
  (`role: example`), `cex-separability-is-not-hereditary-worked` and
  `cex-lindelofness-is-not-productive-worked` (`role: counterexample`).
  Containment re-verified by me over all 2,767 item files, not taken from A3:
  **each of the four has zero `deps`/`justified_by` consumers**, so no
  `ai-generated-statement-dependency` edge exists and each `genrisk` cone is
  empty.
- **0** legacy `authorship` lines to delete — none of the 73 had one — so the
  retag is purely additive and voided no stamp.

## 3. Reference URLs — 65 added across 50 items, no URL removed

**This is wider than the thirteen items A3 §5a enumerated, and the widening is
deliberate. Flagging it so Alpha can reverse it cheaply at A6.**

§5a approved the N1 repair: add the clause-carrying URL alongside the existing
entry, never remove one. Applying that to the thirteen N1 items would have left
**37 further items** whose approved ledger row rests on a source the reader
cannot see — an item citing Fremlin 5A4A in its rationale while showing only the
UCR notes. That is the same defect N1 is about, and A3 §5c approved exactly this
action for the sibling `topology-separation` batch at exactly this scale ("99
URLs across 60 items … a mechanical consequence of A1, not a defect"). So I
synced the whole batch: **every URL recorded as evidence in the ledger is now
reader-visible in that item's `sources.references`**, and nothing that was there
before was touched.

- Titles reuse the most common title already paired with that URL elsewhere in
  the corpus, so a source reads the same on every page. Six URLs are new to the
  corpus (`Cantor_cube`, `Cardinal_function`, `Delta-system_lemma`, `Fort_space`,
  `Second-countable_space`, `Sunflower_lemma`) and take the dominant
  `X (Wikipedia)` convention.
- **All 39 distinct ledger URLs re-fetched by me at A4: 39/39 HTTP 200.**
  Sixteen returned `429` on the first sweep and `200` on a backed-off retry —
  Wikipedia rate limiting, not a dead link. Worth knowing for future waves: a
  fast sequential URL sweep from this host, with sibling Betas sweeping at the
  same time, produces false negatives.

## 4. Ledger rationale corrections (A3 §4c)

A3 found my A2 claim "UCR contains no one-point-compactification material" to be
wrong. **I re-verified it myself rather than accepting the correction**: fetched
`gentop-notes.pdf`, `pdftotext`'d it (423 KB), and confirmed a section headed
*"The Alexandroff one point compactification"* carrying the construction for a
locally compact non-compact Hausdorff `X`, its uniqueness, and the
identification of the one-point compactification of `Rⁿ` with `Sⁿ`. My A2 search
missed it because the notes write the phrase unhyphenated. A3 is right.

Corrected the trailing note on both affected rows —
`fs-lindelofness-is-hereditary` and
`ex-cardinal-functions-of-a-one-point-compactification` — to record UCR as a
genuine semantic source for the *construction*. The rest of each rationale
stands, and so does the added URL: in the same extraction, **"hereditar" does
not occur anywhere in the notes**, and neither do "chain condition", "ccc",
"Sorgenfrey", "lower limit", "Cantor cube", "sunflower", "Δ-system", "ω1" or
"first uncountable" (0 occurrences each, re-measured here). So UCR still does
not carry either item's own claim.

## 5. Two things A4 could not close

### BLOCKER — the seven `established-knowledge` rows fail the A4 gate

`content-policy.mjs --audit` on this batch reports **7 errors, 0 warnings**, all
`audit-ledger-alpha-concurrence`:

```
lem-weight-is-well-defined            lem-density-is-well-defined
lem-character-is-well-defined         lem-lindelof-degree-is-well-defined
lem-cellularity-is-well-defined       rem-countability-axiom-implication-and-choice-ledger
rem-euclidean-topology-dictionary
```

A3 §3 approved these rows to be written with `alpha_concurred: false` and routed
the concurrence **to Alpha at A6**. The gate table does not permit that ordering.
`tools/gates.mjs:229` puts `content-policy.mjs --audit` in the A4 list with no
`required: false`, and `content-policy.mjs:319` errors unconditionally when
`evidence === 'established-knowledge' && alpha_concurred !== true`. So the wave
**halts at A4 with `gate-failed` before it can reach the step that resolves it** —
the same shape of gate-ordering trap A3 §2 caught for `proof-contract --strict`,
one step later in the same table. Wave-wide this is 8 rows: my 7 plus the
separation batch's `ex-free-ultrafilter-converging-in-a-convergent-sequence-space`.

I applied the rows exactly as approved and did **not** work around it. Setting
`alpha_concurred: true` myself would forge the concurrence the field exists to
record, and reclassifying the evidence is the judgement A3 explicitly reserved.

Two resolutions, both above my authority:

1. **Bring A3 §3's routing forward from A6 to A4** — Alpha concurs (or declines)
   on these 8 rows now. The wave-0 ledgers show the mechanism: concurrence was
   recorded by *appending* a corrected row, and `content-policy` keys its ledger
   map by id so the last row wins.
2. **Reclassify.** Worth Alpha's attention because it may be the true reading:
   `established-knowledge` is defined by the brief as "no source surfaced after a
   real search", and it is the **sole URL waiver**. All seven of these rows
   *have* URLs and now show them, so none of them needs the waiver — with the
   references synced, all seven pass `source-backed-provenance-uncited` on their
   own. My A2 self used the class to mean something narrower: *the source states
   the ambient material but not this separate lemma*. For the five
   well-definedness lemmas that is precisely the situation — Fremlin 5A4A writes
   "the least cardinal of any base for T", which **asserts** the minimum exists
   without arguing it, and the lemma is the argument. Whether that makes Fremlin
   a `semantic-source` for the existence claim is a real question and it is
   Alpha's.

### N10 — `content-policy.mjs` cannot read a flow-style `sources:` line

Found at A4, not at A2, because it only fires once provenance is written. It
produced **35 false `source-backed-provenance-uncited` errors on this batch** —
items with a perfectly good reader-visible URL reported as having none.

`tools/content-policy.mjs:117` `referenceUrls` says in its own comment that it
supports "both the normal block form and YAML's inline flow form". It does not.
Its locator is

```js
lines.findIndex((line) => /^\s{2}references:\s*/.test(line))
```

so `references:` must **start a line** under exactly two spaces. That matches
`  references: [{…}]` under a block `sources:`, but a whole-mapping flow line

```yaml
sources: {scraped: [], references: [{title: "…", url: "…"}]}
```

keeps `references:` mid-line, the finder returns `-1`, and the reader reports no
URLs at all. Diagnosis confirmed exactly: all 35 errors were on flow-style items,
the other 3 flow-style items in the batch are the `ai-generated`/`ai-generated`
ones the check does not apply to, and **no block-style item errored**.

**Corpus-wide 67 items are written that way**, so this is latent for every wave
that tags one of them, not a fact about this batch.

**The real repair is one line in `content-policy.mjs` and is not a Beta's to
make.** What I did instead, inside the items I was already editing: normalized
this batch's 38 flow-style `sources:` mappings into the block form SCHEMA §3
prescribes (`research/audit/wave5-topology-countability.normalize-sources.mjs`,
which verifies the ordered `(title, url)` list is identical before and after and
refuses to write otherwise). Same YAML, same rendered page, no claim touched —
but the gate can now read a truth it previously could not see. **If the tool is
fixed, this normalization is harmless and can stay; it is canonical form either
way.**

## 6. Gate results after A4 (all run on current disk)

| gate | result |
|---|---|
| `precheck.mts` (73 files) | **53 checked, 0 failing** |
| `reflow.mts` (2 repaired items) | unchanged |
| `depcheck.mjs --pending-audit-ok` | **exit 0**; my batch contributes exactly the 2 expected `published-unaudited` rows and one pre-existing `b-leaf-legacy` warning. **No `cited-not-in-deps` on any of my 73** |
| `proof-contract.mjs --strict` (batch) | **0 errors, 0 warnings, 53/53 checked** |
| `finite-smoke.mjs` | 0 errors |
| `risk-report.mjs` (tiers only) | 0 errors, 53 routed — tiers unchanged from A2; the `risk_review` dispositions remain Alpha's at A6 |
| `content-policy.mjs --audit` | **7 errors** — the concurrence blocker above, and nothing else. 0 warnings |
| `audit-manifest.mjs` | exit 0 |
| `fwdcheck` / `extcheck` / `rendercheck` / `prosecheck` / `citecheck` / `depsource` | all exit 0; **zero lines mention any of my 73 items** |
| `impact-audit.mjs` (both dedicated baselines) | exit 0; both repaired items have 0 logical and 0 direct-citation consumers |

## 7. Coverage statement

Every one of the 73 items in
`research/audit/wave5-topology-countability.pages.json` now carries both
component-provenance tags, has a matching ledger row, and shows every URL that
row rests on. Every proof step and every dependency citation in the two pairs was
read at A2 and nothing at A4 changed that reading except where recorded above.
Two items were materially repaired and neither is certified — **A6 owes both an
independent reading and A7 a targeted rejudge**; I certified nothing of my own.
No id was renamed or removed, no deletion or reading-order change was made, and
nothing outside the 73 manifest items was edited.

Files written: the three namespaced batch artifacts, the two apply scripts named
above, and the 73 item files. My two repairs are recorded here rather than in a
shared `wave5-published-repairs.md`: wave 4's own ledger states that per-batch
Beta repairs live in the batch findings files, and four Betas were applying A4
concurrently, so a shared read-modify-write file was the wrong place for them.
