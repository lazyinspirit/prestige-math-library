# Audit-Beta findings — wave 5, `real-analysis` batch (A1/A2)

Agent: `claude-opus-5` at `xhigh`. Written 2026-08-05. Baseline commit `8a3d814`,
working tree as at wave 5 A0 (`research/audit/wave5-run-state.json` step `A2`).

Batch: one A/B pair, 31 items.

| page | kind | items |
|---|---|---:|
| `monotone-sequences-and-cauchy-completeness` | A | 20 |
| `monotone-sequences-and-cauchy-completeness-examples` | B | 11 |

Artifacts written (the only files this Beta touched):

- `research/audit/wave5-real-analysis.provenance.jsonl` — 31 rows, one per item.
- `research/audit/wave5-real-analysis.proof-contracts.json` — 26 proof-bearing
  items, 322 citation contracts, 211 step contracts, 208 boundary dispositions.
- this file.

**Status as first written (A1/A2): no item file was modified.** A4 has since run
on the two repairs A3 approved — `ex-nested-intervals-single-point` and
`cex-nested-open-intervals-empty` — and both are applied. Everything else below
records the A1/A2 state and is unapplied. See "A4 — repairs applied" at the end,
which also supersedes N2 and the gate counts quoted in the coverage statement.

---

## Coverage statement

Every proof step and every dependency citation in both pages was read from disk.
There is no exception.

Concretely: all 31 items were read in full, including Remarks and the A-page
Statement prose. All 211 numbered steps across the 26 proof-bearing items were
verified against the facts they cite and against the on-disk text of the cited
item. All 60 distinct external dependency targets were opened and their
`Statement` / `Definition` sections read; each `[F#]`/`[A#]`/`[L#]` fact was
checked against the target's actual wording for domain, quantifiers, hypotheses,
direction and conclusion. The five non-proof-bearing items (`def-interval`,
`def-monotone-sequence`, `def-subsequential-limit`, `def-contractive-sequence`,
`rem-completeness-routes`) were read for mathematical accuracy of the definition
text and of every embedded justification.

Mechanical checks run over the batch, all clean unless noted:

- every wikilink in a fact resolves to an existing item, and every such target is
  declared in that item's `deps`/`justified_by` — **0 undeclared dependencies**;
- every `[F#]`/`[A#]`/`[L#]` token appearing in a step tag is a fact the item
  declares, and every `step m.n` reference resolves — **0 dangling references**;
- all 21 distinct `sources.references` URLs across the batch return HTTP 200, as
  do the 6 additional URLs recorded in the provenance ledger;
- `proof-contract.mjs --strict` over the new contract: **3 errors, 0 warnings**,
  26/26 items checked. All three are the single finding N2 below; every one of
  the 322 quotes was confirmed to occur verbatim in the named section of the
  named source item, every step is mapped exactly once, and every step's stated
  inputs cover the tokens the step actually cites.

**No fatal defect was found.** No unambiguous falsehood, no invalid inference, no
missing hypothesis, no inaccurate citation that changes what a step is entitled
to conclude. Six nonfatal observations are recorded below; my recommendation on
every one of them is **no repair**, for the reason given in each case.

---

## A1 — provenance determination

31 rows in `wave5-real-analysis.provenance.jsonl`. Distribution:

| `provenance.statement` | evidence class | count |
|---|---|---:|
| `literature-derived` | `exact-source` | 15 |
| `ai-altered` | `semantic-source` | 13 |
| `ai-generated` | `trivial` | 3 |

No row uses `established-knowledge`, so **no Alpha concurrence is required for
any URL waiver in this batch**. Every `literature-derived` and `ai-altered` row
carries at least one working URL, and every such item already carries a
reader-visible `sources.references` URL supporting its tag, so no
`sources.references` edit is needed to satisfy the tag obligation.

`provenance.proof`: 5 `not-applicable` (the four definitions and the remark),
19 `ai-altered`, 7 `ai-generated`. No `literature-derived` proof: every proof on
these pages is written into this library's numbered-step format against this
library's own dependency items, which is an adaptation even where the argument
is the standard one.

None of the 31 items carries a legacy `authorship:` line and none carries a
`provenance:` block, so **the A4 retag is purely additive** — nothing is deleted
under owner decision D5, and no `verification.judge` or `audited` stamp is
touched.

### The three `ai-generated` calls, and why they are safe

`ex-contractive-sequence-fixed-point`, `cex-unbounded-with-convergent-subsequence`,
`cex-strictly-decreasing-gaps-no-limit`.

Each is tagged on the **witness it constructs**, not on the surrounding
phenomenon, following the `trivial` row of `AUDIT-WORKFLOW.md` §6 and the wave-0
precedent Alpha upheld for `cex-same-cardinality-without-a-canonical-bijection`.
In each case the phenomenon is established (linear fixed-point iteration; the
converse of Bolzano-Weierstrass failing; strictly shrinking gaps being weaker
than a uniform contraction constant), and no source selects the particular map,
interleaving, or recurrence used here. Each ledger row records the full truth
verification carried out directly from the item's stated dependencies.

**Blast radius is nil for all three:** each has **zero `deps` consumers
corpus-wide**, so `content-policy`'s `ai-generated-statement-dependency` rule and
`proof-contract`'s `citation-ai-generated-statement` rule cannot fire on them,
and `genrisk` will compute an empty cone for each seed. I confirmed this by
computing the reverse-`deps` closure over all 2,767 item files.

**Escalated to Alpha, three borderline label calls.** `ai-altered` is defensible
for each under an "instance of a standard family" reading. I made a positive
determination rather than defaulting, and recorded the evidence both ways in each
ledger row; the label changes nothing mechanical here because the cones are
empty. Alpha may retag any of the three without any other consequence.

### One deliberate split label

`fs-convergent-subsequence-implies-bounded` is tagged
`statement: ai-altered` / `proof: ai-generated`. The refuted **claim** is the
converse of Bolzano-Weierstrass, which is established mathematics; the
**witness** built inside the refutation (the interleaving `1, 1, 2, 1, 3, ...`)
is local. The statement label must classify the claim here and not the witness,
because this item **is** a load-bearing `deps` target —
`cex-unbounded-with-convergent-subsequence` cites it — so tagging it
`ai-generated` would make that edge illegal under `content-policy`. The same
reasoning applies to `fs-nested-open-intervals-nonempty` and
`fs-consecutive-differences-null-implies-cauchy`, whose refuted claims are
sourced cautions and whose witnesses `(0, 1/n)` and `sqrt(n)` are themselves the
canonical ones.

### Items whose load-bearing position constrained nothing

`def-interval` has **338 `deps` consumers**, the largest in-edge count of any
item in wave 4 or wave 5, and is the target of 25 of wave 5's 28 cross-batch
edges. It is tagged `ai-altered`/`semantic-source` against Wikipedia *Interval
(mathematics)* and Lebl §0.3/§1.1, so it remains a legal dependency target and
the four topology batches that cite it are unaffected. I read its full text,
including the nine-form table, the order-convexity verification, the
nondegeneracy argument and the unboundedness remark, and found no error; the
convention deltas are recorded in the ledger row.

---

## A2 — accuracy and citation-precision findings

Nothing here is fatal. Ordered by how much of a reader's attention it deserves.

### N1 — `thm-cauchy-criterion-via-lub` generalises in its title what its cited lemmas prove for `R`

*Class: (d) debatable restatement. Nonfatal. Recommendation: no repair.*

The title reads "The Cauchy criterion from the least-upper-bound property: **in a
complete ordered field** every Cauchy sequence converges", and the Statement's
second paragraph says "The proof below uses nothing about `R` except that
property, through `thm-bolzano-weierstrass`". `[L5]` repeats the claim.

But all three cited lemmas — `lem-cauchy-sequence-bounded`,
`thm-bolzano-weierstrass`, `lem-cauchy-with-convergent-subsequence` — are stated
for sequences of **reals**, and the Cauchy condition they use is
`def-real-limit`'s, which quantifies over **rational** epsilon and is transported
through `lem-rat-embeds-dense`, an item about the specific constructed `R`. So
the general statement is not literally discharged on the page: it needs the
observation that each lemma's proof uses only ordered-field arithmetic plus the
least-upper-bound property, and that in an arbitrary complete ordered field the
rational-epsilon and field-epsilon Cauchy conditions agree because
`thm-of-archimedean` applies. Both of those are true and standard, and the
Remarks already point at the localisation correctly.

Why I am not proposing a repair: the asserted mathematics is **true** — every
Dedekind-complete ordered field is Cauchy complete — so this is not a Statement
asserting more than is true, only more than is carried out inline. Repairing it
means either narrowing a published title (an owner-only reading-order-adjacent
change, and a loss) or adding a transfer paragraph (a material rewrite that voids
`verification.judge` for no mathematical gain). Recorded so that the next reader
does not have to rediscover it, and so that the eventual "equivalent forms of
completeness" page has the obligation written down.

### N2 — two declared facts that no proof step consumes

*Class: (b) citation precision. Nonfatal. Recommendation: no repair.*

> **Superseded at A3, applied at A4.** A3 adjudicated both facts and approved one
> item edit for each: add `L8` to step 2.2's tag in
> `ex-nested-intervals-single-point`, and delete `[L5]` with `L6 -> L5`
> renumbering in `cex-nested-open-intervals-empty`. Both are applied; see
> "A4 — repairs applied" below. The addendum's claim that `[L8]` is dead is
> **withdrawn** and corrected there. The `[L5]` reading stands and A3 reached the
> same conclusion, but its disposition is now deletion rather than no repair.

- `ex-nested-intervals-single-point` `[L8]` — trichotomy, linking
  `def-complete-ordered-field` and `def-ordered-field`. No step tag cites `L8`.
- `cex-nested-open-intervals-empty` `[L5]` — the nested interval property for
  **closed** bounded intervals, linking `thm-nested-interval-property`. No step
  tag cites `L5`; it exists to set up the contrast drawn in the Remarks.

These are the **only** three `proof-contract.mjs --strict` errors on the batch
(`citation-uses`, one per fact/target pair). The tool requires every fact/target
pair to carry a contract *and* requires each contract's `uses` to be non-empty,
so a declared-but-unconsumed fact cannot be contracted without an error. I have
recorded both honestly with `uses: []` rather than omitting them, which would
have produced `citation-fact-uncontracted` instead — the error is a true signal
about the item text, not a defect of the contract.

Why I am not proposing a repair: the standing triage rule names "minor citational
quirks" as explicitly acceptable, and neither fact is wrong — each states its
target faithfully; it is simply unused. Deleting `[L8]` would be clean (it is
last in its list, so no step tag changes); deleting `[L5]` would leave a label
gap or force renumbering `L6` in two step tags. Either edit is a material rewrite
under SCHEMA §3 that voids `verification.judge` and forces a rejudge, for no
mathematical gain. If Alpha wants the gate green rather than explained, the
minimal option is the `[L8]` deletion alone, which fixes two of the three errors.

#### N2 addendum — dead fact, not silent reliance (added after the A4 gate halt)

The A4 gate halted the wave on exactly these three `citation-uses` errors, and
the halt asked the right question: is each fact *dead*, or does some step rely on
it without saying so? Both are dead. Discharging the second alternative
explicitly, since the distinction is the whole finding:

- `cex-nested-open-intervals-empty` `[L5]`. The refutation never needs the true
  nested interval property. Step 1.1 exhibits the family as an instance of the
  refuted claim; 2.1 assumes a common point; 3.1 contradicts it from the
  Archimedean property `[L3]` and trichotomy `[L4]`; 4.1 concludes the
  intersection is empty. A theorem about **closed** intervals licenses no step of
  that argument. `thm-nested-interval-property` stays a legitimate `deps` entry:
  the Remarks wikilink it twice, and that is exactly the contrast `[L5]` was
  written for.
- `ex-nested-intervals-single-point` `[L8]`. No step needs trichotomy proper.
  Steps 1.1 and 4.1 weaken `>` to `>=` and use reflexivity of `<=`, which is the
  definition of the order relation, not its trichotomy. Step 2.2's `n <= j+1` for
  `j >= n` is in fact strict — `j >= n` gives `j+1 >= n+1 > n` — so `[L4]` applies
  with no case split, and the written `<=` is merely weaker than what holds. The
  row is a carry-over from the twin `cex-nested-open-intervals-empty` `[L4]`,
  which is genuinely consumed at that item's contradiction step 3.1; this example
  has no contradiction step, so the same row arrived unused.

Neither repair is therefore "add the missing tag". The only honest repairs are
deletion of the row or nothing.

**Costed and gate-tested (in `/tmp`, no item touched).** All three candidate
edits pass `precheck.mts`:

| variant | edit | precheck |
|---|---|---|
| A | drop `[L5]`, leave the `L4 -> L6` label gap; no step tag changes | PASS |
| B | drop `[L5]` and renumber `L6 -> L5` in the row and in step tags 1.1, 4.1 | PASS |
| C | drop `[L8]`; it is last, so no step tag changes | PASS |

A label gap is thus mechanically legal, but it is reader-visible on a published
page, so B is the better of A/B if `[L5]` goes at all. C additionally leaves
`def-complete-ordered-field` and `def-ordered-field` declared in `deps` but
wikilinked nowhere in the body; `depcheck` has no error or warning for a declared
dependency that no fact cites (only `dep-unresolved`, `self-dep`, cycles and
`orphan`), so that is legal and I would not also touch `deps` — a dependency edit
would drag in `impact-audit` closure for a cosmetic gain.

**This is corpus-wide, not a wave-5 defect.** Scanning all 2,067 items that have
both a Facts & Assumptions block and numbered steps, **31 carry at least one fact
row that no step cites** — among them `thm-ftc-second-part`, `thm-ratio-test`,
`thm-root-test`, `thm-integration-by-parts`, `thm-cauchy-schwarz-and-the-euclidean-norm`,
`cor-bolzano-weierstrass-in-rn` (two rows) and `ex-harmonic-series-diverges`. Two
of those 31 are mine. No prior level or audit contract in `research/` contains a
single empty `uses`, so waves 0–4 never met the wall; they simply did not scope
one of these items.

That changes where the decision belongs. `proof-contract.mjs` requires every
fact/target link to carry a contract (`citation-fact-uncontracted`) *and* every
contract to name at least one consuming step (`citation-uses`), so a declared but
unconsumed fact is **unrepresentable** — the file cannot state the truth about
the item. Repairing the item is one way out; the other is an explicit, auditable
disposition in the checker (an `unused_reason` string licensing an empty `uses`,
with the error retained for the unexplained case), which is a mechanism change
under `ARCHITECTURE.md` and belongs to the orchestrator and Alpha, not to me. I
have written that `unused_reason` text into all three citation entries of
`research/audit/wave5-real-analysis.proof-contracts.json` as documentation only:
the checker ignores unknown keys and `merge-proof-contracts.mjs` copies entries
verbatim, so **the gate is still red at 3 errors** and nothing is papered over.
Every other item in the batch is clean — `--strict` reports 26/26 checked, these
3 errors, 0 warnings.

### N3 — `lem-geometric-sequence-null` step 3.5 cites the nonnegative product rule for a possibly negative factor

*Class: (b) citation precision. Nonfatal. Recommendation: no repair.*

Step 3.5 reads: "use `[L7]` to fix a natural `n >= 1` with `M/h' < n`; then
`M <= n h'`, since multiplying `M/h' <= n` by `h' > 0` preserves the inequality.
[step 2.3, L7, L9, choose]".

`[L9]` is `prop-of-multiply-inequalities`, restated in the item as
"`0 <= a <= b` and `0 <= c <= d` give `ac <= bd`". `M` is an **arbitrary real**,
so `M/h'` may be negative and the nonnegativity hypothesis of `[L9]` can fail.
The move actually used — multiplying an inequality by a positive constant — is
`lem-of-sign-rules`' rule "for `c > 0`, `x < y` iff `xc < yc`", which holds for
arbitrary `x, y` and is *not* among this item's declared facts.

The conclusion is correct and the gap closes instantly (if `M <= 0` then
`M <= 0 < n h'` outright; otherwise `[L9]` applies as written), so this is well
inside the 30-second rule. Recording it because inflating a cited fact is the
dominant historical defect class and the pattern is worth Alpha seeing, not
because the step is unsound.

### N4 — nonstrict restatements of strict cited claims, inconsistently flagged

*Class: (b) citation precision. Nonfatal. Recommendation: no repair.*

`lem-of-inverse-positive` claim 2 is strict: "If `0 < a < b` then
`0 < b^-1 < a^-1`". Several facts in this batch restate it in nonstrict form
without saying so:

- `ex-two-subsequential-limits` `[L3]`: "`0 < a <= b` gives `0 < 1/b <= 1/a`";
- `ex-nested-intervals-single-point` `[L4]` is stated strictly but step 2.2 uses
  it at `n <= j+1`;
- `cex-nested-open-intervals-empty` `[L2]`, `cex-sqrt-k-differences-null-not-cauchy`
  `[L4]`, `fs-consecutive-differences-null-implies-cauchy` `[L5]` compress it to
  "reciprocation reverses the order".

The same shape appears with `lem-of-naturals-positive`, whose Statement makes the
map `n -> n·1_F` strictly increasing on `{1, 2, 3, ...}`, restated in several
facts as covering `m = 0` as well (`lem-geometric-sequence-null` `[L8]`,
`cex-nested-unbounded-closed-empty` `[L2]`). That case is licensed by the source's
own Given (`0·1_F = 0`) together with `1_F > 0`, so it is sound.

In every instance the equality case is a one-line unfolding and the mathematics
is right. What makes it worth recording is that this library **elsewhere flags
exactly this** at length — `lem-of-triangle-inequality` `[L2]`,
`lem-finite-sum-laws` `[L4]` and `lem-triangle-inequality-finite` `[L4]` each say
in terms that `lem-of-add-order` states only the strict form and that the
nonstrict form adds the equality case by trichotomy. So this is a house-style
inconsistency across pages, not a defect on this one. It is a candidate for a
future convention note, not for an edit here.

### N5 — a Remark in `lem-cauchy-sequence-bounded` names a lemma in the wrong direction

*Class: (b) citation precision, in prose. Nonfatal. Recommendation: no repair.*

The second Remark reads: "the alternating sequence ... is bounded and, being
divergent, is not Cauchy (`lem-convergent-implies-cauchy` would otherwise make it
convergent by `thm-cauchy-criterion-via-lub`)".

The argument intended is: *if* it were Cauchy, then `thm-cauchy-criterion-via-lub`
would make it convergent, contradiction. `lem-convergent-implies-cauchy` runs the
other way (convergent implies Cauchy) and does no work in that sentence. The
conclusion drawn is true and the operative citation is present; the extra name is
inert. This is prose in a Remark, not a proof step, and triage says record and do
not chase.

### N6 — book references paired with stand-in Wikipedia URLs

*Class: (b) citation precision, reader-facing. Nonfatal. Corpus-wide, not
batch-local. Recommendation: A10 queue, no local repair.*

Across this batch, `sources.references` entries naming a printed book are given a
URL that resolves (all 21 return HTTP 200) but does not contain the cited clause:

- "W. Rudin, *Principles of Mathematical Analysis*, 3rd ed., Ch. 3 (Thm 3.14)"
  → `https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis`, the
  Wikipedia article *about the book*, which contains no theorem statements.
  **24 of the 31 items in this batch** carry a reference of this shape.
- "R. Bartle and D. Sherbert, *Introduction to Real Analysis*, 4th ed., §3.5" →
  `https://en.wikipedia.org/wiki/Cauchy_sequence` in `def-contractive-sequence`
  and `ex-contractive-sequence-fixed-point`, and
  → `https://en.wikipedia.org/wiki/Fixed-point_iteration` in
  `thm-contractive-implies-cauchy`, `fs-consecutive-differences-null-implies-cauchy`
  and `cex-strictly-decreasing-gaps-no-limit` — five entries in all. Neither
  Wikipedia page mentions Bartle and Sherbert.

The *title* is an honest citation and the *URL* is an honest reachable link; the
pairing is what misleads, because a reader who follows the link does not reach
the clause the title names. This is a legacy convention that predates the audit
and is visible across the corpus, so repairing it item by item inside one batch
would be both out of scope and inconsistent. Raised for the A10 owner queue as a
possible corpus-wide convention decision.

Not a finding, but relevant to it: I located open sources carrying the exact
cited clauses for several of these, and recorded them in the provenance ledger —
`https://planetmath.org/contractivesequence` (verbatim definition of a
contractive sequence, the theorem that it is Cauchy, and the geometric error
bound), `https://proofwiki.org/wiki/Peak_Point_Lemma`,
`https://proofwiki.org/wiki/Sequence_of_Square_Roots_of_Natural_Numbers_is_not_Cauchy`,
`http://mathonline.wikidot.com/the-monotone-subsequence-theorem`,
`https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_lec92.pdf`
and `https://www.jirka.org/ra/html/sec_bw.html`. All return HTTP 200. Adding
them to the relevant items' `sources.references` at A4 would be a pure additive
retag change that strengthens reader-visible sourcing without touching any
mathematical text; I have **not** done so and offer it to Alpha as an optional
A3 proposal, listed at the end.

---

## Verified clean — things I looked hard at and found correct

Recorded because a later reader should not have to redo them.

- **`thm-contractive-implies-cauchy`, the `k >= 1` hypothesis.** The Statement
  claims both claim 1 and claim 3 are *false* at `k = 0` and supplies a witness:
  `c = 1/2`, `x_0 = 0`, `x_k = 1` for `k >= 1`. I checked it. The sequence is
  contractive with that `c` (the only nontrivial instance is `k = 0`, where
  `|x_2 - x_1| = 0 <= (1/2)|x_1 - x_0| = 1/2`); the limit is `1`; the right-hand
  side of claim 3 at `k = 0` is `2 · 0 / (1/2) = 0` while `|x - x_0| = 1`; and
  claim 1 at `k = 0` reads `1 <= 0`. Both fail exactly as asserted. This is an
  index-boundary hypothesis the source (Bartle-Sherbert, indexed from 1) never
  has to state, and the item both states it and justifies it.
- **`thm-contractive-implies-cauchy` step 7.1.** The threshold is `J + 1`, and
  `k >= J + 1` gives `k - 1 >= J`, which is what makes `c^(k-1) < delta`
  applicable; the `A + 1` in `delta := epsilon/(2(A+1))` is what keeps `delta`
  defined when `A = 0` (a constant sequence). Both are load-bearing and both are
  right.
- **`lem-peak-monotone-subsequence` is genuinely choice-free.** Steps 2.2 and 3.2
  define `f` and `h` by taking *least* elements from `thm-well-ordering-principle`,
  and `thm-recursion` then produces the index map. The Remark's claim that no form
  of choice is used is accurate. Case (i) and case (ii) are literal negations, so
  the split needs nothing about `R`; the only use of `R` anywhere is trichotomy at
  step 3.2, as the Remark says.
- **`thm-nested-interval-property` step 5.3.** The identification
  `∩ I_k = [a, b]` turns on "x is an upper bound of A and a lower bound of B iff
  `a <= x <= b`", which needs leastness of the supremum in one direction and the
  upper-bound property in the other. Both directions check out.
- **`ex-babylonian-sqrt-two` step 1.2.** The identity
  `g_{j+1}^2 - 2 = ((g_j^2 - 2)/(2 g_j))^2` is correct: expanding
  `((g + 2/g)/2)^2 - 2` gives `(g^2 - 4 + 4/g^2)/4 = ((g^2 - 2)/(2g))^2`. The
  proof also discharges `L != 0` at step 4.1 *before* invoking the quotient case
  of `thm-algebra-of-limits` at step 5.1, which is exactly the place this argument
  is usually left incomplete, and the item's own Remark says so.
- **`ex-recursive-sqrt-two-plus-x` step 4.1.** The bound `L >= 1` is proved, not
  assumed, and it is what excludes the root `L = -1` of `L^2 = 2 + L`. Squaring
  the recursion before passing to the limit avoids continuity of the square root,
  which this library has not proved at this point; the device is sound.
- **`lem-alternating-sequence` step 1.6.** The interleaved induction tracks `n`
  and `sigma(n)` together, which is necessary because neither alternative alone is
  preserved by the successor. Both successor cases check out. Disjointness at step
  2.3 is settled through the sequence (`s` is `1` on one range, `-1` on the other,
  and `1 != -1` by step L6), which is legitimate and avoids arithmetic on `N`.
- **`ex-contractive-sequence-fixed-point` Remark arithmetic.** `|x_2 - x_1|` for
  this recursion: `x_1 = (a+1)/3`, `x_2 = (a+4)/9`, so
  `x_2 - x_1 = (1 - 2a)/9` and `|x_2 - x_1| = (2/9)|a - 1/2|`, exactly as the
  Remark states.
- **`cex-strictly-decreasing-gaps-no-limit` Remark ratio claim.** The ratio of
  consecutive gaps is `d_{j+1}/d_j = g_j/g_{j+1} = g_j^2/(g_j^2 + 1)`, which is
  below `1` at every index and tends to `1`. The Remark's assertion that the
  supremum of the ratios is `1` itself, so no contraction constant fits, is right.
- **`rem-completeness-routes` mathematical content.** Every claim in it is true:
  the least-upper-bound property implies Cauchy completeness; the converse fails,
  the standard witnesses being Cauchy-complete non-Archimedean ordered fields;
  Cauchy completeness together with the Archimedean property does give the
  least-upper-bound property; the same relation holds for the nested interval
  property; and the complete ordered field is unique up to isomorphism. Its
  closing chain — least-upper-bound property gives monotone convergence, which
  gives both nested intervals and, through the peak lemma, Bolzano-Weierstrass,
  which gives the Cauchy criterion — matches the actual `deps` graph of this page
  edge for edge.
- **`def-interval`'s unasserted converse.** The Definition's Remark says it is
  true that every order-convex subset of `R` is empty or one of the nine forms,
  and explicitly declines to prove it. The claim is true (it is the standard
  classification of convex subsets of `R`, with the empty set the only case the
  nine forms do not already cover), and declining to prove it is honest.
- **`def-interval`'s unboundedness argument.** `x = a + |u - a| + 1` satisfies
  `x >= a` and `x >= u + 1 > u`, using only `|t| >= t` and `1 > 0`. The Remark's
  claim that this uses no Archimedean property is correct: it is the failure of a
  single bound, not cofinality.
- **Published-claim decay: none found.** No claim on these pages is falsified by
  anything later in the corpus that I could find. One cross-page assertion I could
  not fully check is in `thm-monotone-convergence`'s Statement — "Everything on
  the sequences page held in any Archimedean ordered field" — which is a claim
  about `sequences-and-limits`, a **wave-4** page outside this batch's scope. It
  is plausible on the face of the items it names and I found no counterexample,
  but it is a cross-wave claim and I flag it rather than certify it.

---

## Proposals for A3

Nothing is proposed as required. Three optional items, all class (c) or (b):

1. **(c), recommended)** Apply the A1 retag: write the `provenance` block to all
   31 items, and a `generation: role:` block to the three `ai-generated` items
   (`example` for `ex-contractive-sequence-fixed-point`, `counterexample` for the
   two `cex-` items). Purely additive — no `authorship` line exists to delete, no
   mathematical text changes, so `verification.judge` and `audited` stamps stand.
   Under the A4 snapshot rule this is a **bulk pure-retag pass** and takes **one
   stage snapshot**, not one per item.
2. **(b), optional)** Add the six open-access URLs listed under N6 to the
   `sources.references` of the items they document. Additive frontmatter only.
   Improves reader-visible sourcing where a book title currently points at a
   stand-in Wikipedia URL. I recommend this only if Alpha wants N6 partially
   addressed inside the batch; otherwise it belongs with N6 on the A10 queue.
3. **(b), not recommended)** Delete the unused `[L8]` from
   `ex-nested-intervals-single-point` — the one edit that would take
   `proof-contract.mjs --strict` from 3 errors to 1. It is a material rewrite for
   a cosmetic gain and I advise against it; recorded so Alpha has the option
   costed. **Revised after the A4 halt (see the N2 addendum):** if the wave needs
   the gate green, the complete edit is `[L8]` plus variant B on
   `cex-nested-open-intervals-empty` (drop `[L5]`, renumber `L6 -> L5` in the row
   and in step tags 1.1 and 4.1) — all three variants pass `precheck`. Both are
   material rewrites: delete the stale `verification.judge` and the `audited`
   stamp on each, and let A6 write `verification.verified` with
   `scope: published-audit`. Neither is a public-interface change, so no impact
   closure is due. My recommendation is still not to edit the items, and to take
   the decision at mechanism level instead, because 31 published items corpus-wide
   have the same shape and every future wave that scopes one of them stops here.

Owner-only, for the A10 queue: N6 (the book-title/stand-in-URL convention,
corpus-wide) and, if it is ever thought worth acting on, N1's title wording,
since narrowing a published title touches reading order.

---

## Checkpoint (context continuity, owner 2026-08-01)

Substage at time of writing: **A1 and A2 complete; A3 not started; A4 not
started, nothing applied.** Owned artifacts: the three files named at the top of
this document; no other path was written. Completed checks: the coverage
statement above. Open mathematical constraints: none blocking — the six findings
are all nonfatal and none blocks A3. Exact next action: hand this file, the
provenance ledger and the proof contract to Alpha for A3 adjudication, and await
approval before any A4 edit. Working-tree baseline at the time of writing:
`8a3d814` plus the wave-5 A0 artifacts already present in the tree.

**Update, A4 gate halt.** Substage: A4 halted on the three `citation-uses`
errors of N2; nothing applied, no item touched. The only write since the
checkpoint above is documentary: an `unused_reason` string on each of the three
empty-`uses` citation entries in
`research/audit/wave5-real-analysis.proof-contracts.json`, plus the N2 addendum
and the revised proposal 3 in this file. The gate is unchanged at 3 errors,
26/26 items checked, deliberately — the errors are true statements about two
published items, and closing them needs either an approved item repair (variant
B on `cex-nested-open-intervals-empty` and `[L8]` on
`ex-nested-intervals-single-point`, both precheck-tested) or a checker
disposition for a fact no step consumes. Both decisions are above a Beta. Exact
next action: Alpha or the orchestrator picks one of those two routes.

---

## A4 — repairs applied

Two **material** repairs, both adjudicated and approved at A3
(`research/audit/wave5-A3.md`, the `citation-uses` disposition table). Neither
was mine to decide; what follows is the application record and the checking I
did before writing each one.

### R1 — `ex-nested-intervals-single-point`: `[L8]` added to step 2.2's tag

*Class: (b) citation precision. A3 disposition: ADD `L8` to step 2.2's tag;
proposal 3 (delete `[L8]`) declined outright.*

| | |
|---|---|
| old | `... since $\ell_j > 0$. [step 1.1, L3, L4, L5, L6, L7]` |
| new | `... since $\ell_j > 0$. [step 1.1, L3, L4, L5, L6, L7, L8]` |

Nothing else in the item changed; the fact rows, the prose and every other step
are untouched.

**I checked A3's mathematics before writing this, and A3 is right — my earlier
reading was wrong.** Step 2.2 asserts the intermediate `0 < n <= j+1` and infers
`0 < 1/(j+1) <= 1/n`. `[L4]` (`lem-of-inverse-positive`) states only the strict
form, `0 < a < b => 0 < 1/b < 1/a`, so it does not license a nonstrict
conclusion from a nonstrict hypothesis. The missing piece is the disjunction
`a <= b` iff `a < b` or `a = b` — `def-ordered-field` *defines* `<=` that way and
its Remark derives the totality of the order from (O1) Trichotomy — followed by
`[L4]` in the strict case and reflexivity of `=` in the equality case. That is
exactly `[L8]`. The fact is consumed by the step as written, so the tag is a
citation repair, not tag padding.

My N2 addendum argued the opposite on the ground that `j >= n` gives
`j+1 >= n+1 > n`, so the strict inequality holds anyway. That observation is
true, and it is beside the point: it describes an argument the item does not
make. The written step routes through `<=`, and a reader checking the written
step needs the equality case. Correcting a proof's *text* to the strict form
would have been a second, unapproved edit; the approved repair cites what the
existing text uses.

**House precedent, which settles that `[L8]` is the conventional citation here
rather than an invented one.** Three published items in this corpus state the
same move explicitly, all citing `def-ordered-field`:

- `lem-of-triangle-inequality` `[L2]`: "`lem-of-add-order` states the STRICT
  forms and only those ...; the nonstrict form used here is those two together
  with the cases `a = b` and `c = d`, settled by trichotomy, the order being
  total (`def-ordered-field`)."
- `lem-finite-sum-laws` `[L4]` and `lem-triangle-inequality-finite` `[L4]` say
  the same thing in the same words.

This also closes N4 for this item, which had recorded step 2.2's nonstrict use of
a strict cited claim as an unflagged instance of that pattern. It is now flagged
the way the library flags it elsewhere. N4's other instances are untouched: they
are on items outside this repair's licence.

### R2 — `cex-nested-open-intervals-empty`: `[L5]` deleted, `L6` renumbered to `L5`

*Class: (b) citation precision. A3 disposition: DELETE `[L5]`, renumber
`L6 -> L5` in the fact list and in steps 1.1 and 4.1.*

| | |
|---|---|
| removed | `[L5] Nested interval property, for nonempty **closed** bounded intervals ([[thm-nested-interval-property]]).` |
| renumbered | `[L6] The refuted claim: ...` -> `[L5] The refuted claim: ...` |
| step 1.1 | `[given, L1, L6]` -> `[given, L1, L5]` |
| step 4.1 | `[step 1.1, step 3.1, L1, L6]` -> `[step 1.1, step 3.1, L1, L5]` |

The deleted fact was a theorem about **closed** intervals in an item about
**open** ones; no step cited it and none could. Its content survives untouched in
the first Remark, which carries its own `[[thm-nested-interval-property]]` link
and states the contrast the fact was written for. No label gap remains.

**`thm-nested-interval-property` stays in `deps`. The citation rules neither
require nor permit removing it, and removing it would be a change of a different
kind.** Precisely:

- **Nothing requires the dep.** `depcheck`'s load-bearing scan
  (`tools/depcheck.mjs`, the `cited-not-in-deps` block) reads Statement,
  Statement refuted, Facts & Assumptions, Proof, Refutation, Counterexample and
  Verification, and **excludes Remarks by design** — its own comment: "Remarks
  are excluded, since a 'see also' there is not a dependency." After R2 the id
  appears only in a Remark, so no gate demands a `deps` entry for it.
- **Nothing forbids the dep either.** SCHEMA §3 makes `deps` a lower bound —
  "every item this item's statement OR proof logically depends on" — not an exact
  set, and `depcheck` has no error or warning class for a declared dependency that
  no fact cites (its hard errors are `dep-unresolved`, `link-unresolved`,
  `self-dep`, the two cycle classes, the page classes, `published-unaudited` and
  `b-leaf-content`; its warnings are `orphan` and `multi-home`).
- **So the question is dispositional, and the answer is leave it.** A `deps` edge
  drives the rendered page-level Prerequisites closure and the flowchart, so
  dropping one is a public-interface change that owes `impact-audit` closure —
  spent for no mathematical gain. A3 gave exactly this instruction for the
  parallel case (`lem-uniform-metric-on-a-function-space`: "Leave `deps`
  untouched — an unused dep is not a defect"), and R2 is not licensed to go
  further than the approved edit.

### Contract changes

`research/audit/wave5-real-analysis.proof-contracts.json`:

- `ex-nested-intervals-single-point`: both `L8` citation entries
  (`def-complete-ordered-field`, `def-ordered-field`) now carry `uses: ["2.2"]`;
  the `step-2.2` derivation's `inputs` gains `"L8"`, which
  `proof-contract.mjs` requires since `explicitTokens` reads the step's tag.
- `cex-nested-open-intervals-empty`: the `L5 -> thm-nested-interval-property`
  citation entry is deleted; the `1.1` and `4.1` derivation `inputs` now name
  `L5` where they named `L6`.
- All three `unused_reason` keys are removed. They documented a state these
  repairs eliminate.

**One discrepancy with the dispatch's instruction, resolved by the checker's own
rule.** The dispatch said to "renumber the old `L6` entry to `L5`, keeping its
`uses` intact". There was no `L6` **citation** entry to renumber, and correctly
so: old `[L6]` was the refuted claim itself, a fact with no `[[link]]`, and
`proof-contract.mjs` requires a citation contract only per fact/link pair
(`citation-fact-uncontracted`, one per `fact.links` entry). The renumbering that
was actually due was in the `derivations` `inputs`, where `L6` appeared for steps
1.1 and 4.1, and that is what I changed. Nothing was dropped.

### Stamps, snapshots, and what A6 still owes

Both repairs are material — the judge sees a changed fact list and changed step
tags — so on each item I deleted the stale `verification.judge` block
(`z-ai/glm-5.2`, 2026-07-26) and the obsolete `audited: 2026-07-26` stamp. I
certify neither repair; A6 writes `verification.verified` with
`scope: published-audit`.

Dedicated per-item `touchlog` snapshots, taken immediately before each item's
first edit, into `research/audit/wave5-touches.json`:
`pre-repair-ex-nested-intervals-single-point` and
`pre-repair-cex-nested-open-intervals-empty`. Two rows, matching the
`pre-repair-<id>` convention already in that ledger; the material-repair
granularity rule, not the bulk-retag one.

Neither repair changes a Statement, a Definition or a public mathematical claim,
so no `impact-audit` closure is due beyond the baselines those snapshots anchor.

### Gate results

`node tools/proof-contract.mjs research/audit/wave5-real-analysis.proof-contracts.json --strict`:

```
proof-contract: 0 error(s), 0 warning(s), 26/26 item(s) checked
```

`node tools/tsx-run.mjs tools/precheck.mts` on the two edited items:

```
PASS items/ex-nested-intervals-single-point.md (direct)
PASS items/cex-nested-open-intervals-empty.md (direct)

2 checked, 0 failing — all clean
```

`node tools/tsx-run.mjs tools/precheck.mts` bare, whole corpus:

```
2111 checked, 0 failing — all clean
```

`node tools/depcheck.mjs` reports 11 `published-unaudited` errors, of which two
are mine and nine belong to sibling batches' A4 repairs. That is the documented
A4-to-A6 window: the flag `--pending-audit-ok` exists for exactly this caller and
takes the run to 0 errors, 164 warnings. It closes when A6 certifies.

**`tools/reflow.mts` was run and its output deliberately not kept.** Neither
repair hard-wrapped anything, so reflow found nothing to fix in the Facts list or
the numbered steps; its only effect on these two files was to unwrap the
**Remarks bullets**, which the surrounding published corpus stores wrapped. I
restored both files from `HEAD` and re-applied only the licensed edits, so the
diff is exactly the repairs above plus the stale-stamp deletions. Verified after
the fact: reflow's remaining diff on both files is confined to Remarks prose and
touches no step and no fact row, and precheck passes on the stored form.

## Checkpoint (context continuity) — A4 applied

Substage: **A4 complete for the two A3-approved item repairs.** Applied: R1 and
R2 above. Written this stage: `items/ex-nested-intervals-single-point.md`,
`items/cex-nested-open-intervals-empty.md`,
`research/audit/wave5-real-analysis.proof-contracts.json`, this file, and two
snapshot rows in `research/audit/wave5-touches.json`. No provenance ledger row,
no other batch's file, no other item was touched — the A1 retag pass (proposal 1)
is still unapplied and belongs to its own bulk pass. Gate state: batch
proof-contract 0 errors; precheck clean corpus-wide; depcheck in the expected
pending-audit window. Exact next action: the orchestrator re-merges the batch
contracts and re-runs the full A4 gate table; then A6 certifies both repaired
items independently and writes `verification.verified` with
`scope: published-audit`.

## A4 — provenance retag applied (the pass that was never run)

The A1 determinations were complete in
`research/audit/wave5-real-analysis.provenance.jsonl` but had never been written
to disk: none of the 31 items carried a `provenance:` block, which is why
`content-policy --audit` reported 124 errors against this batch (31 each of
`provenance-statement-missing`, `provenance-proof-missing`,
`audit-ledger-mismatch`, `audit-ledger-evidence-mismatch`). Applied now by
`research/audit/wave5-real-analysis.apply-retag.mjs`, the missing sibling of
`apply-wave5-fs-retag.mjs`, `apply-wave5-sep-retag.mjs` and
`wave5-topology-countability.apply-retag.mjs`.

Nothing was re-determined. Every label is read from the ledger row and copied;
the script fails loudly rather than adapting a label to a gate. Authorised by
`research/audit/wave5-A3.md` §9, which lists three writes for this batch:

1. **`provenance.statement` / `provenance.proof` on all 31 items**, inserted
   after `origin:` where SCHEMA §3 and the rest of the corpus keep it.
2. **`generation:\n  role:` on the three `trivial`-class `ai-generated`
   statements** — `ex-contractive-sequence-fixed-point` (`example`),
   `cex-unbounded-with-convergent-subsequence` and
   `cex-strictly-decreasing-gaps-no-limit` (`counterexample`). Written on those
   three and nowhere else: `content-policy` errors
   `generation-on-non-generated-statement` over any other label.
3. **Nine `sources.references` URLs across seven items** — the §5b set of six,
   plus `jirka.org/ra/html/sec_seqsandlims.html` on
   `cor-monotone-converges-iff-bounded` per §4d.

| item | URL added | why |
|---|---|---|
| `cor-monotone-converges-iff-bounded` | `https://www.jirka.org/ra/html/sec_seqsandlims.html` | §4d: its three existing URLs are two book-landing pages and an article *about* Rudin, none carrying the clause. This page carries Lebl Thm 2.1.10 verbatim, "A monotone sequence \(\{x_n\}\) is bounded if and only if it is convergent" — I refetched and confirmed the sentence. Without it the row demotes to `semantic-source` |
| `lem-peak-monotone-subsequence` | `proofwiki.org/wiki/Peak_Point_Lemma`, `mathonline.wikidot.com/the-monotone-subsequence-theorem` | §5b |
| `def-contractive-sequence`, `thm-contractive-implies-cauchy` | `planetmath.org/contractivesequence` | §5b |
| `fs-consecutive-differences-null-implies-cauchy`, `cex-sqrt-k-differences-null-not-cauchy` | `proofwiki.org/wiki/Sequence_of_Square_Roots_of_Natural_Numbers_is_not_Cauchy` | §5b |
| `ex-two-subsequential-limits` | `ocw.mit.edu/.../mit18_100af20_lec92.pdf`, `www.jirka.org/ra/html/sec_bw.html` | §5b |

All nine refetched as written on disk: **HTTP 200, nine of nine.** Titles follow
the host convention already dominant in the corpus — `X (PlanetMath)` after
"SNCF metric (PlanetMath)", `X (ProofWiki)`/`X (Mathonline)` after the
`(Wikipedia)`/`(nLab)` pattern, `J. Lebl, Basic Analysis I, <section>` after the
41 existing jirka.org entries, and `MIT 18.100A, Lecture 9: ...` after
"MIT 18.100C, Lecture 11: Power Series". The OCW PDF's own first page reads
"18.100A: Complete Lecture Notes / Lecture 9: Limsup, Liminf, and the
Bolzano-Weierstrass Theorem", so the title names the lecture rather than guessing
from the filename.

**Two ledger URLs deliberately NOT added, offered to Alpha.** Both are gaps
between a ledger row's `urls` and the item's reader-visible references, and
neither is in A3's approved set, so adding either would be an unapproved
frontmatter write:

- `cor-monotone-converges-iff-bounded` — `https://www.jirka.org/ra/` is missing
  from the item. It is the Lebl **landing page**, and §4d's finding is precisely
  that a landing page is not evidence. Adding the clause-carrying section instead
  is what §4d authorises, and that is what was done. Recommend the row's landing
  URL simply not be read as evidence, as §4d says of the other sixteen.
- `rem-completeness-routes` — `https://en.wikipedia.org/wiki/Archimedean_property`
  is recorded as A1 evidence but absent from the item. It is live and
  clause-carrying; it is just outside the approved §5b set. A one-line addition
  if Alpha wants it, and no gate depends on it: the item already carries four
  references and `content-policy` reports it clean.

**D5:** no item in this batch carried a legacy `authorship` key, so nothing was
deleted. The script implements the deletion and reports a count rather than
assuming the absence — it printed `0 legacy authorship key(s) removed`.

**Snapshots.** One stage snapshot for the whole pass, not one per item:
`pre-A4-real-analysis-retag` and `post-A4-real-analysis-retag` in
`research/audit/wave5-touches.json`. A pure retag changes no mathematical text
and no `verification:` block, so it voids no judge verdict and needs no
per-item impact baseline.

**One thing the twice-touched counter will now say, and what it means.**
`touchlog report --min 2` went from 43 to 45 items, the two new entries being
`ex-nested-intervals-single-point` and `cex-nested-open-intervals-empty`. Their
first transition is the A3-approved material repair recorded above; their second
is **this retag**, not a second repair. No mathematical text in either item
changed in this pass. The other 29 items show exactly one transition.

### Gate state after the pass

```
content-policy --audit --ledger wave5-real-analysis.provenance.jsonl wave5-real-analysis.pages.json
  content-policy: 31 scoped item(s), 0 error(s), 0 warning(s)

content-policy --audit, all four wave-5 ledgers and manifests
  content-policy: 209 scoped item(s), 0 error(s), 1 warning(s)
  (the one warning is the function-spaces batch's legacy generated-kind on
   rem-function-space-conventions, pre-existing and not this batch's)

precheck.mts, bare, whole corpus
  2111 checked, 0 failing — all clean

depcheck.mjs                     FAIL — 11 published-unaudited, 2 mine, 9 sibling batches'
depcheck.mjs --pending-audit-ok  OK — exit 0
```

The four halting codes are gone: 0/31 on each of
`provenance-statement-missing`, `provenance-proof-missing`,
`audit-ledger-mismatch`, `audit-ledger-evidence-mismatch`, and 0 on
`legacy-authorship-retained` and `source-backed-provenance-uncited`, with 3/3
`ai-generated` statements carrying `generation.role`.

`depcheck`'s 11 `published-unaudited` errors are the documented A4-to-A6 window,
unchanged in character from the previous checkpoint and not caused by this pass:
a retag writes no `verification:` block. The two of them that are mine are the
A3-approved repairs whose stale stamps A4 deleted; the nine others belong to
sibling batches. `--pending-audit-ok` is the flag for this caller and exits 0.
The window closes when A6 certifies.

## Checkpoint (context continuity) — A4 retag applied

Substage: **A4 complete for this batch** — both the two approved item repairs
(previous checkpoint) and the 31-item provenance retag (this one). Written this
stage: the 31 `items/*.md` frontmatter blocks,
`research/audit/wave5-real-analysis.apply-retag.mjs`, this file, and two stage
snapshot rows in `research/audit/wave5-touches.json`. Not touched: the provenance
ledger, the proof-contract file, any other batch's items or files. Exact next
action: the orchestrator re-runs the full A4 gate table; A6 then certifies the
two repaired items independently and writes `verification.verified` with
`scope: published-audit`, and Alpha disposes of the two unadded ledger URLs
above.
