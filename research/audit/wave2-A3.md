# Wave 2 — A3 orchestrator adjudication

Amendment 6 (gate of record): every number below is recounted from disk by the
orchestrator, never taken from a Beta's report.

## Finding 1 — unresolvable reference URLs (found by the orchestrator, not by a gate)

**Status: raised before A4, so nothing has reached a reader.**

The Beta brief requires that "every URL you record must return HTTP 200." I
fetched all 32 unique URLs in the three ledgers complete at the time of the
check. **29 returned 200. Three did not**, and they are load-bearing for **12
ledger rows**:

| URL | verdict | rows |
|---|---|---|
| `https://math.mit.edu/~fox/MAT307-lecture12.pdf` | **404 — genuinely gone.** The parent directory `https://math.mit.edu/~fox/` also 404s | 6 (combinatorics) |
| `https://people.cs.uchicago.edu/~laci/babai-frankl-book2022.pdf` | **403 Forbidden.** Also fails local CA-chain verification. Not confirmable as 200 | 5 (combinatorics) |
| `https://www.math.utah.edu/~schwede/math435-spring2011/WS1Sols.pdf` | **Connection timeout at 60 s.** Host resolves | 2 (number-theory) |

Only the MIT link is provably dead — its parent directory is gone too. The other
two are *unconfirmable from this environment*: a 403 can be user-agent blocking
and a timeout can be egress filtering, so neither is asserted to be dead. Both
nonetheless fail the recorded standard, which is a URL that returns 200.

Affected rows, **10 of 12 having no second URL at all**:

- MIT 404 — `def-intersecting-family`, `lem-katona-cyclic-interval-bound`,
  `thm-erdos-ko-rado` (has a working CMU alternate),
  `fs-erdos-ko-rado-without-the-ground-set-bound`, `ex-an-erdos-ko-rado-star`,
  `cex-erdos-ko-rado-fails-below-two-k`.
- uchicago 403 — `def-sunflower`, `lem-sunflower-maximal-disjoint-subfamily`,
  `thm-erdos-rado-sunflower-lemma`, `ex-a-four-petal-sunflower-with-nonempty-core`.
- utah timeout — `ex-units-and-totient-modulo-twelve` (has a working UW Oshkosh
  alternate), `ex-units-modulo-eight-are-not-cyclic`.

**Why no gate caught this.** `level-coverage.mjs` requires a source-backed
`literature-derived`/`ai-altered` item to carry a reader-visible
`sources.references` URL — it checks **presence, not liveness**. A dead link
satisfies every existing gate and then ships to readers. The likely mechanism is
that a Beta's `web_search` tool returns search-result metadata rather than a live
fetch, so a URL can be recorded without ever being retrieved.

**Disposition: DECLINED as recorded; correction required before A4.** The
affected batches must either supply a replacement URL that the orchestrator can
fetch at 200, or — where the mathematics is genuinely standard and no source
resolves — reclassify the row to `established-knowledge`, which carries the URL
waiver but requires Alpha's independent concurrence. Reclassifying is the
honest fallback, not a downgrade to avoid work; what is not acceptable is a
sourced label pointing at a link that does not load.

This check is now part of A3 for every future wave: fetch every ledger URL and
require 200 before A4 writes it into `sources.references`.

## Provenance ledger validation (three batches complete at time of check)

| batch | rows | scope | malformed | missing | out-of-scope |
|---|---|---|---|---|---|
| combinatorics | 83 | 83 | 0 | 0 | 0 |
| number-theory | 33 | 33 | 0 | 0 | 0 |
| real-analysis | 25 | 25 | 0 | 0 | 0 |

Label distribution:

- combinatorics — statement: 62 `ai-altered`, 15 `literature-derived`, 6
  `ai-generated`; evidence: 62 `semantic-source`, 15 `exact-source`, 6 `trivial`.
- number-theory — 14 `literature-derived`, 19 `ai-altered`; 14 `exact-source`,
  19 `semantic-source`.
- real-analysis — 12 `literature-derived`, 13 `ai-altered`; 12 `exact-source`,
  13 `semantic-source`.

Rule checks, all clean:

- **Zero** sourced labels (`exact-source`/`semantic-source`) recorded without a
  URL.
- **All 6 `ai-generated` statements carry evidence `trivial`** — the permitted
  directly-verifiable route — and **zero** rest on a novelty determination.
- **Zero `established-knowledge` rows**, so these three batches create no Alpha
  concurrence debt. This is a marked improvement on wave 1b, where
  `alpha_concurred` was absent from all 174 rows and had to be chased at A6.

### Wave-wide ledger validation (all five batches, 258/258 rows)

| batch | rows/scope | malformed | missing | out-of-scope | sourced-no-URL | est-knowledge |
|---|---|---|---|---|---|---|
| combinatorics | 83/83 | 0 | 0 | 0 | 0 | 0 |
| foundations | 43/43 | 0 | 0 | 0 | 0 | 0 |
| number-theory | 33/33 | 0 | 0 | 0 | 0 | 0 |
| real-analysis | 25/25 | 0 | 0 | 0 | 0 | 0 |
| topology | 74/74 | 0 | 0 | 0 | 0 | 0 |

**Zero `established-knowledge` rows wave-wide**, so this wave creates no Alpha
concurrence debt at all — the wave-1b failure mode (all 174 rows missing
`alpha_concurred`, chased at A6) does not recur.

Wave-wide URL check: **71 of 75 unique URLs return 200**; the only failures are
the three in Finding 1. `foundations` and `topology` introduced no new bad link.

## Finding 2 — two new `ai-generated` seeds in topology, both with ZERO real blast radius

`wave2-topology` assigned `statement: ai-generated` with evidence `none` to two
remarks, plus one `trivial` example:

- `rem-compactness-choice-ledger-metric` — a page-local ledger of which choice
  principle *this library's own proofs* spend, implication by implication.
- `rem-constructions-this-page-stops-short-of` — a page-local inventory of what
  the page postpones, tied to this library's reading order.
- `ex-lebesgue-number-of-a-two-set-cover` — evidence `trivial`, with the direct
  verification written out in the rationale.

**Disposition: APPROVED.** Both rationales make an affirmative novelty
determination ("bespoke, page-local audit … not a recoverable literature
proposition") rather than reasoning from a failed search, which is exactly the
positive-determination standard. A ledger of what *this corpus's* proofs spend
has no literature counterpart by construction.

**Blast radius, checked from disk rather than assumed.** Both remarks have
`deps` consumers, and an `ai-generated` statement is barred as a dependency
target — so the edges were inspected individually:

| seed | consumer | edge is |
|---|---|---|
| `rem-compactness-choice-ledger-metric` | `cor-bolzano-weierstrass-in-rn` | **mention** — prose above Facts: "the arrow-by-arrow account is [[…]]" |
| | `rem-compactness-conventions-and-choice-ledger` | **mention** — remark-to-remark cross reference |
| `rem-constructions-this-page-stops-short-of` | `ex-cylinder-and-mobius-band-as-quotients` | **mention** — scope-limitation prose above Facts |

Every one of the three sits in unnumbered prose **above** the Facts &
Assumptions section; none appears in a `[F#]`/`[L#]` fact or a numbered proof
step. Under the workflow's rule that a dependence propagates and a mention does
not, **both seeds have zero propagating cone**. Alpha still records the
disposition at A6, but the evidence is here and the answer is
`not-load-bearing`, not a repair cycle.

`genrisk.json` was regenerated at A0, *before* these tags existed, so it must be
regenerated after A4 or it will not show these seeds at all.

## Finding 3 — real-analysis: one Beta classification OVERTURNED

`wave2-real-analysis` (the only batch whose Beta had exited at the time of this
adjudication) proposed one class-(a) unambiguous falsehood, three class-(b)
citation-precision repairs, and four class-(d) restatements.

**OVERTURNED — the class-(a) falsehood is not a falsehood.** The Beta reads the
`suprema-and-infima` summary sentence

> "the least-upper-bound property requires the set to be nonempty and bounded
> above, and each hypothesis fails on its own witness, the empty set for the
> first and the set of canonical naturals of $\mathbb{R}$ for the second"

as assigning the empty set to *nonattainment*, which would indeed be false — the
empty set has no supremum at all, and the open interval is the nonattainment
witness. But the sentence's grammatical subject is "each **hypothesis**", and the
hypotheses are named in the same clause immediately prior: *nonempty* and
*bounded above*. Under that nearest antecedent, "the first" is nonemptiness
(witness: the empty set) and "the second" is boundedness above (witness: the
canonical naturals). **Both assignments are then correct, and the sentence is
mathematically true as written.**

The Beta's misreading is available — the two bolded false statements appear just
before, and a reader can bind "first/second" to those instead — so this is a
genuine **ambiguity**, reclassified from **(a) unambiguous falsehood to (d)
debatable restatement**. The distinction is not pedantic: class (a) counts as a
fatal mathematical error in the A10 report, and recording a clarity defect as a
falsehood would inflate the wave's fatal count.

**The proposed repair is nevertheless APPROVED**, on independent grounds: the
summary has four paragraphs where the page-summary contract requires exactly
two, and it carries positional prose ("the first page of analysis proper"), a
corpus-wide downstream claim, and a count ("three things") — all barred by
SCHEMA §6. The Beta's replacement text is two paragraphs, is under the word
limit, and resolves the ambiguity as a side effect.

**APPROVED — the three class-(b) citation-precision repairs**, each verified
against the cited item on disk:

1. `cex-empty-set-has-no-sup` `[L4]` cites `rem-sup-conventions`, a free-prose
   convention remark, as a proof source clause; steps 1.1–3.1 already establish
   the conclusion. Remove `[L4]`, its step tag, and the `deps` edge; keep the
   link in prose. A dependency-edge removal is inside the R1 delegation — it is
   not an item deletion or an id change.
2. `cex-sup-not-attained` `[L1]` attributes four instance facts jointly to
   `ex-sup-of-open-interval` and `lem-sup-epsilon`; the generic epsilon lemma
   states none of them. Drop the `lem-sup-epsilon` link and `deps` edge.
3. `ex-sup-rationals-below-sqrt-two` `[L5]` renders `fs-sqrt2-rational` as "No
   rational squares to 2", but that item's Statement *displays the false
   existential* and its Refutation establishes the negation. Restate the fact to
   say what the cited item records. This is the dominant historical defect class.

**APPROVED — `lem-finite-set-has-max` published-claim decay, and it is the
wave's sharpest prose defect so far.** The item's second Remark asserts "no
published item of the library cites either it or this lemma," and adds that "no
published proof is retroactively made to depend on this page." Verified
independently from disk: **117 items list `lem-finite-set-has-max` in `deps`,
all 117 published**, and sampled consumers body-cite `[[lem-finite-set-has-max]]`
directly (`cex-bounded-not-totally-bounded`,
`cex-open-cover-of-unit-interval-no-finite-subcover`,
`cex-continuous-map-destroying-cauchyness`, among others). The sentence was true
when written and is now flatly false. Replace it with durable prose that makes
no claim about consumers, per the Beta's proposal.

**APPROVED — `rem-sup-conventions`**: its promise that a later page "will
introduce" the extended real line has already been kept by `def-extended-reals`.
Replace the promise with a statement of fact; record the link as a forward
reference, never as a logical `deps` edge.

## Finding 4 — topology: the wave's heaviest batch, one overturn and one split

The topology Beta's coverage is the strongest in the wave: 74 items, 532 numbered
steps, 898 declared dependency edges to 160 distinct targets, 488 boundary
dispositions, and — importantly — it **fetched all 29 of its own ledger URLs and
recorded them as HTTP 200**, which my independent check confirmed. The dead-link
defect in Finding 1 is therefore a per-Beta difference in diligence, not a
wave-wide tooling gap.

It also handled the A0 structural hazard exactly as briefed: all 172 batch-leaving
edges checked, including all 123 into later-wave real-analysis pages, against the
targets' **current on-disk text** rather than their provenance tags, and the 47
edges into concurrently-audited `suprema-and-infima` against current text rather
than a hoped-for repaired version.

### A-01 `def-hausdorff-space` — UPHELD as class (a) falsehood

The Remark reads: "The condition is about pairs of points, not about single
points. **It says nothing about whether singletons are closed**, and it is not
equivalent to that weaker condition."

The second clause is true (T₁ does not imply Hausdorff). The first is false:
Hausdorff **implies** singletons are closed. For fixed $x$, each $y \ne x$ has an
open neighbourhood disjoint from one of $x$, hence avoiding $x$; the union of
those over all $y \ne x$ is exactly $X \setminus \{x\}$, which is therefore open.

A charitable reading — "the *definition* does not mention singletons" — is
available, but the sentence sits between two clauses about logical relationships,
so a reader will take "says nothing about" as "implies nothing about." That
licenses the false belief that a Hausdorff space may have a non-closed singleton.
Repair approved: state that Hausdorff implies the singleton-closed (T₁) property
and that the converse fails. Another falsehood in Remark prose, where no
mechanical gate reads — the wave-1b lesson repeating.

### A-04 — SPLIT. The Beta grouped three items that are not alike

The Beta proposed all three as class (a) "unqualified false statements … in the
library's explicit foundational regime." Read from disk they differ materially:

**A-04a `thm-product-universal-property` — OVERTURNED, no defect.** The choice
cost is declared *in the title* ("…which for an infinite index set uses the Axiom
of Choice") **and in claim 4 itself** ("for $I$ a natural number this is a theorem
of ZF; for an arbitrary $I$ it is the Axiom of Choice"). A claim that states which
axiom its own general case requires is correctly scoped, not unqualified. No
repair.

**A-04b `thm-box-finer-than-product` — UPHELD as class (a).** Claim 3 reads
"Suppose every $X_i$ is nonempty and let $J := \{…\}$. If $J$ is not finite then
$\mathcal{T}^{\Pi} \subsetneq \mathcal{T}^{\square}$" — **no choice hypothesis in
the claim, and none in the title.** The disclosure lives only in fact `[L3]` and
in commentary ("Claim 3 spends the Axiom of Choice twice"). This is precisely the
wave-1b dominant defect: a Statement asserting more than its licensed regime, with
the qualification parked in prose. `CLAUDE.md` is explicit that a title or
Statement asserting more than the proof gives is fatal, because the judge reads
Statements and cannot see a false title.

**A-04c `thm-product-of-subspaces-and-closures` — DOWNGRADED to (d)
title-precision.** Claim 2 states the closure identity unconditionally, but the
`## Statement` section itself continues: "When every $A_i$ is nonempty the
inclusion $\supseteq$ of claim 2 uses the Axiom of Choice for infinite $I$ … and
that is the only place in the item where a choice principle is spent." The
Statement therefore *does* disclose the cost to any reader of the item, so it is
not an unqualified false statement. The **title** omits it, and the title is what
renders in listings, search and the flowchart. Repair the title only; do not
restate claim 2.

### A-02, A-03 — UPHELD

- `cex-r-mod-q-is-indiscrete-like` claims a nontrivial indiscrete space "fails
  every separation condition at once." Too strong: several separation properties
  hold vacuously on indiscrete spaces under standard conventions. Only failure of
  Hausdorff separation is needed and proved. Narrow it to the axiom actually
  defined at this point.
- The same item's Remark infers that $\mathbb{R}/\mathbb{Q}$ is uncountable
  "since its classes are countable." That needs a countable-union-of-countables
  principle, and the on-disk `thm-countable-union-of-countable` explicitly assumes
  countable choice. The construction needs only the two distinct classes already
  proved at step 6.1. Approved: delete the unneeded assertion rather than import
  $\mathrm{AC}_\omega$. **This is the wave-1b Countable Choice class recurring in
  a third wave.**

### B-01 — UPHELD, and it independently corroborates the wave-1b owner queue

Three items reach "the hyperbola $H = \{(x,y) : xy = 1\}$ is closed" through
`thm-metric-sequential-closure`, whose Statement is unqualified while its own
proof spends $\mathrm{AC}_\omega$. **This is the exact item already queued for the
owner from wave 1b** (21 downstream consumers), found independently by a different
Beta in a different category — which is good evidence the queue entry is real and
not a wave-1b artifact. The Beta correctly declined to repair it from this batch.

Its proposed local fix is approved and is the right one: $H$ is the preimage of
the closed singleton $\{1\}$ under the continuous map $(x,y) \mapsto xy$, hence
closed with no choice principle at all. That removes the unlicensed route while
leaving every statement and witness intact.

### B-02, class (d) — APPROVED as recorded

Five Remark-only facts produce exactly eight `citation-uses` strict-contract
errors; the fix is mechanical (move the links into the Remark, drop genuinely
unused facts, regenerate). Both A-page summaries breach the two-paragraph /
150-word contract badly — `compactness-in-metric-spaces` at 9 paragraphs / 732
words, `subspaces-products-and-quotients` at 10 paragraphs / 1,225 words — and
carry counts and reading-order surveys barred by SCHEMA §6.

### Escalated to Alpha, not decided here

The Beta notes the two generated remarks "admit no role in the current
`generation.role` vocabulary" and asks Alpha to route the legacy-policy warning
rather than invent a role or weaken the positive determination. That is the
correct escalation and it stands: **Alpha decides at A6.** The orchestrator will
not invent a vocabulary entry to silence a gate.

## Finding 5 — combinatorics, foundations, number-theory: all proposals APPROVED

All five Betas exited 0 and **no item or page file was modified at A1/A2**
(`git status --porcelain items library` empty), so the propose-don't-apply
boundary held wave-wide.

None of these three batches found a class (a) falsehood. Their proposals are
citation-precision and restatement work, and every one I sampled verified exactly.

**combinatorics — six citation-precision repairs (W2-COMB-001…006), approved.**
The sharpest is **W2-COMB-004**, verified from disk and a textbook instance of the
dominant historical defect class:

> `thm-dense-finite-graph-is-connected` `[L1]`: "A simple graph on a $q$-element
> vertex set has at most $\binom{q}{2}$ edges, with equality for the complete
> graph ([[cor-complete-graph-edge-count]])."

The cited corollary is titled "**The complete graph** on an $n$-element vertex set
has $\binom{n}{2}$ edges." It states the count *for the complete graph* and does
**not** state the universal upper bound over all simple graphs — which is exactly
what step 2.1 consumes. The fix (add the subset-count route:
`def-finite-simple-graph`, `thm-two-element-subsets-count`,
`thm-subset-of-a-finite-set`, retaining the corollary for the equality case) is
approved.

**W2-COMB-005/006** are one defect appearing twice: `[F3]`/`[F2]` claim "every
vertex of a cycle graph has two neighbours" while citing
`def-graph-walk-trail-path-and-cycle`, which defines a cycle as a *closed-walk
substructure*, not the graph $C_n$. Retarget to
`def-standard-complete-bipartite-path-and-cycle-graphs`. Two distinct notions were
being cited interchangeably. W2-COMB-001/002 remove genuinely unused facts;
W2-COMB-003 supplies the exact partition target.

**foundations — B1/B2/B3 approved.** B1 verified: `[A1]` of
`thm-well-ordering-implies-ac` reads "Every set carries a well-order
([[def-well-order]])", but that target is titled "Well-order and well-ordered
set" — a definition, which cannot assert that every set has one. The existence
claim is the theorem's own Given. The mathematics is sound; the citation
over-attributes. B2 and B3 delete facts no numbered step uses, clearing the two
residual `citation-uses` strict-contract errors.

**number-theory — the stale Wilson URL, approved, and it sharpens Finding 1.**
`lem-wilson-inverse-pairing` and `thm-wilsons-theorem` both carry a LibreTexts URL
with a stale chapter slug. Fetched both: **old → 404, new → 200**, and the old URL
is live in two **published** items right now.

This is the same defect class as Finding 1 seen from the other end. Finding 1 is
dead links the audit would *introduce*; this is a dead link the corpus *already
ships*. Neither is caught by any gate, because `level-coverage.mjs` tests that a
`sources.references` URL exists, not that it resolves. **Recommendation for A10:
add link-liveness to a gate, or the audit will keep finding these one wave at a
time.**

Each Beta's triage dispositions (elementary finite-enumeration inferences, the
`citecheck` "Reflexivity" and `prosecheck` "one of these" warnings, both correctly
called false positives) were reviewed and accepted under the 30-second rule.

## A3 disposition summary

| batch | (a) falsehood | (b) citation | (c) retag | (d) restatement | overturned |
|---|---|---|---|---|---|
| combinatorics | 0 | 6 | 83 | 0 | 0 |
| foundations | 0 | 3 | 43 | 2 | 0 |
| number-theory | 0 | 2 (one URL, two items) | 33 | 0 | 0 |
| real-analysis | 0 (1 proposed, reclassified) | 3 | 25 | 4 | 1 |
| topology | 3 (4 proposed, 1 overturned, 1 downgraded) | 2 groups | 74 | 2 | 1 |

**Two Beta classifications overturned, one downgraded**, each with the disk
evidence recorded above: the `suprema-and-infima` witness sentence (true under its
grammatical antecedent), `thm-product-universal-property` (choice cost declared in
both title and claim), and `thm-product-of-subspaces-and-closures` (Statement
discloses the cost; only the title omits it, so title-precision not falsehood).

**Confirmed fatal for A4: 3**, all in topology — `def-hausdorff-space`'s false
singleton Remark, `thm-box-finer-than-product`'s unqualified claim 3, and
`cex-r-mod-q-is-indiscrete-like`'s over-strong separation sweep plus its
unlicensed uncountability inference.

**Escalated to Alpha at A6, not decided here:** the `generation.role` vocabulary
gap for the two generated remarks.

**Blocking A4:** Finding 1 must be cleared first — no dead URL is written into
`sources.references`.
