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

**No item file was modified.** A4 has not run; nothing below has been applied.

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
   costed.

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
