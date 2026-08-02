# Wave 0, topology batch — Audit-Beta findings (steps A1, A2)

Batch: `metric-spaces` (A, 28 items) and `metric-spaces-examples` (B, 12 items),
40 items, exactly the manifest `research/audit/wave0-topology.pages.json`.
Owned files: this one, `wave0-topology.provenance.jsonl`,
`wave0-topology.proof-contracts.json`. No item file was touched.

**Coverage.** Every one of the 40 items was read in full from disk. Every
numbered proof step (211 steps across the 30 proof-bearing items) was verified
against its declared inputs, and every fact citation (414 fact→target pairs)
was checked semantically against the target item's own text on disk, including
the cross-category targets in `real-analysis`, `foundations` and
`number-theory` whose provenance is not yet audited. No exceptions.

**Mechanical receipt.** `node tools/proof-contract.mjs
research/audit/wave0-topology.proof-contracts.json --strict` →
`0 error(s), 0 warning(s), 30/30 item(s) checked`. Every quote in that file is
an exact substring of the cited item's `Statement` / `Definition` / `Example`
section, every numbered step is mapped exactly once, and all eight boundary
cases are disposed of per item.

---

## A1 — provenance determination

Classification applied under the amended owner rule of 2026-08-02: a statement
is tagged `ai-generated` only when it is genuinely AI-invented, never merely
because a source did not surface. **No item in this batch needed that tag and
no item needed `established-knowledge`:** every one of the 40 statements was
matched to a located, HTTP-200-verified source.

| | count |
|---|---|
| `statement: literature-derived` (evidence `exact-source`) | 5 |
| `statement: ai-altered` (evidence `semantic-source`) | 35 |
| `statement: ai-generated` | 0 |
| `proof: not-applicable` (9 definitions + 1 remark) | 10 |
| `proof: ai-generated` | 27 |
| `proof: ai-altered` | 3 |

The five `exact-source` statements are `lem-metric-reverse-triangle`
(Triangle_inequality states `|d(A,C) − d(B,C)| ≤ d(A,B)` verbatim),
`def-metric-topology` (Open_set gives the ball criterion as the definition),
`lem-metric-limits-unique` and `thm-metric-hausdorff-separation`
(Limit_of_a_sequence and Hausdorff_space state both the claim and the
half-distance witness), and `def-metric-continuity` (Continuous_function gives
the ε-δ definition and the neighbourhood restatement).

The three `proof: ai-altered` items are the ones whose sources display the
argument the item uses: `lem-metric-limits-unique`,
`lem-metric-ball-neighbourhood-base` (First-countable_space, with radii `2^-n`
where the item uses `1/n`), `thm-metric-hausdorff-separation`.

Most items are `ai-altered` for one of three recurring, recorded reasons:
(i) the item bundles several sourced definitions into one page item
(`def-metric-space`, `def-metric-ball`, `def-metric-interior-closure-boundary`,
`def-isometry-and-metric-embedding`); (ii) the library's own conventions are
carried into the statement (real-valued metrics only, `N` contains 0, rational
ε in convergence, `sup`/`inf` only after existence, `n ≥ 1` for `d_∞`);
(iii) the standard result is present in the source but the item's witness or
constants differ (`cex-topologically-not-uniformly-equivalent`,
`cex-uniformly-not-lipschitz-equivalent`,
`fs-closed-ball-is-the-closure-of-the-open-ball`).

29 distinct source URLs are recorded, each fetched and returning HTTP 200 in
this session. One is not a Wikipedia article: the ETSU lecture notes on Munkres
§20 (`https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf`), which
supply Theorem 20.1 (`min{d,1}` is a metric inducing the same topology), the
`bounded`/`diameter` definitions for nonempty bounded sets, Lemma 20.A (balls
are open, with the same radius `r − d(x,y)` as `thm-metric-open-set-algebra`
step 1.1), Lemma 20.B (the open-set criterion), and the Euclidean and square
metrics on `R^n`.

---

## A2 — defects and observations

No fatal mathematical error was found. Every proof closes; no cited dependency
was found to be too weak, mis-stated, or cited in the wrong direction; no
title or Statement asserts more than its proof gives. The findings below are
ordered by severity.

### F1 — false claim about the library in a published Remark (class a/d)

**Item:** `items/rem-metric-axiom-conventions.md`, "Why extended metrics are
not treated here".

**Text:** "It is not available in this library, for one reason and one reason
only: its values would have to live in the extended real line
$\overline{\mathbb{R}} = \mathbb{R} \cup \{-\infty, +\infty\}$, and
$\overline{\mathbb{R}}$ **has deliberately not been built**." and "The
library's $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) and nothing else." and "If a later page needs
extended metrics, the honest way to add them is to build
$\overline{\mathbb{R}}$ first, as a new object with its own order and its own
partial arithmetic".

**Why it is wrong:** `items/def-extended-reals.md` is **published** and builds
exactly that object — "This is a **new object**, introduced here explicitly
with its own order and its own partial arithmetic" — on
`library/real-analysis/limsup-and-subsequential-limits.md`, together with
`lem-extended-reals-complete` and `def-extended-limits`. Both items were
authored in the same commit (2026-07-26, "author level 7, metric spaces,
limsup, topology of R"), so this is a claim that was already inaccurate when
written, not only decayed. The mathematics of the page is untouched by it: no
proof uses the claim, and the design decision it defends (metrics take values
in `R`) is unaffected.

**Proposed repair (smallest correction, class b/d, needs A3 approval):** replace
the two sentences with a statement of the actual position, e.g. "Its values
would have to live in the extended real line
$\overline{\mathbb{R}} = \mathbb{R} \cup \{-\infty,+\infty\}$, which this
library does build, as a separate object with its own order and partial
arithmetic ([[def-extended-reals]]) and not as an enlargement of the field
$\mathbb{R}$. Extending the metric axioms over it would mean restating
[[def-metric-space]] there and re-proving everything on this page in that
setting, which this library does not do; every metric here takes real values."
The last paragraph ("the honest way to add them is to build
$\overline{\mathbb{R}}$ first") should then say that the remaining work is the
restatement, not the construction. Adding `def-extended-reals` to `deps` would
create a new cross-category edge and is a reading-order question, so the
minimal repair should cite it in prose only, or the wording should avoid the
link entirely — **flagging this choice for Alpha.**

**Related, same cause, lower severity:** the same "there is no extended real
line here" phrasing appears in `def-metric-bounded-diameter` ("there is no
extended real line and no convention $\sup\emptyset = -\infty$"),
`lem-real-line-is-a-metric-space` (third remark) and
`lem-sup-metric-is-a-metric` (first remark, "the extended real line, which this
library does not use"). In all three the sentence is doing the same work — it
explains the `sup`/`inf` convention — and the cited `rem-sup-conventions` says
only that the library **does not adopt** the `±∞` supremum conventions, which
remains true. Suggested minimal wording for all three: "this library does not
use the extended real line for suprema ([[rem-sup-conventions]])". Nonfatal;
recorded rather than chased.

### F2 — dead reference URL in four published items (class b)

`https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_set` returns **HTTP
404**; no Wikipedia article of that title exists. It is listed in
`sources.references` of:

- `items/def-metric-bounded-diameter.md`
- `items/lem-distance-to-set-is-lipschitz.md`
- `items/thm-metric-closure-characterisation.md`
- `items/cex-set-distance-is-not-a-metric.md`

**Proposed repair:** replace it with
`https://en.wikipedia.org/wiki/Hausdorff_distance` (verified 200), which
contains the definition `d(a,B) := inf_{b∈B} d(a,b)`, the statement that
`x ↦ d(x,B)` is 1-Lipschitz, and the statement that the infimum distance
between two disjoint closed sets can be zero so that it fails the metric
axioms — i.e. the exact material those four items cite it for. This is the same
URL recorded in the provenance ledger for those items, so A4 can apply the
retag and the URL fix in one edit.

### F3 — book citations whose URL is not the source (class b, nonfatal)

Throughout both pages, references to textbooks carry a Wikipedia URL for the
*book or the author* rather than for the statement: "W. Rudin, Principles of
Mathematical Analysis, 3rd ed., Ch. 2" → `/wiki/Principles_of_Mathematical_Analysis`
(36 such Rudin/Munkres/Tao references across the 40 items), "J. Munkres,
Topology, 2nd ed., §17/§18/§20/§30" → `/wiki/James_Munkres`. These are honest
bibliographic pointers, not fabrications, but they cannot serve as the
reader-visible evidence URL the retro-tag requires. Every item in this batch
also carries at least one topic URL that does contain the statement, and the
ledger records the ones that do. No repair needed beyond A4 ensuring the
evidence URL from the ledger is present in `sources.references`.

### F4 — an unstated use of symmetry (class b, nonfatal)

`items/thm-metric-sequential-closure.md` step 1.1: "so $a_K \in B(x,r) \cap A$
**by symmetry of $d$**". Symmetry (M2) is genuinely used there — convergence
gives `d(a_k,x) < r` and ball membership is `d(x,a_K) < r` — but no `[A#]`/`[L#]`
fact of that item carries it; `def-metric-space` is in `deps` and is cited only
through the closure and convergence facts. **Proposed repair:** extend `[A2]`
with "and $d(u,v) = d(v,u)$ (M2) ([[def-metric-space]])", or add a fact `[L6]`
for (M2). A competent reader closes this in well under 30 seconds, so it is
nonfatal; it is worth fixing only because the proof text already names the
appeal.

### F5 — statement prose names a witness the item does not use (class d)

`items/fs-closed-ball-is-the-closure-of-the-open-ball.md`, Statement: "it fails
already in a **two-point subspace** of the real line." The witness actually
used in the Facts and Refutation is `X = {0} ∪ [1,2]`, which is infinite. The
sentence is *true* (in `{0,1} ⊆ R` the open ball `B(0,1) = {0}` is closed while
`B̄(0,1) = {0,1}`), so this is imprecision, not falsehood. **Proposed repair:**
"it fails already in a subspace of the real line with a gap, and the witness
below is `{0} ∪ [1,2]`." Nonfatal.

### F6 — a Remark uses an operation the library has not defined (class d)

`items/ex-post-office-metric.md`, second remark: "for $x \in \mathbb{R}^n$ and
$r > 0$ the element $x + w$, with $w$ the vector of step 1.3, satisfies
$d_2(x, x+w) = \|w\| = r/2 < r$". `R^n` is defined in `lem-metrics-on-rn` as the
set of functions `n → R`; pointwise addition of two such functions is never
defined in the library at this point, so `x + w` is notation the reader has to
supply. The claim is true under the evident pointwise addition and it is
non-load-bearing (a remark, no `deps` edge rests on it). **Proposed repair:**
name the point directly, "the element $y$ with $y_0 = x_0 + r/2$ and $y_k = x_k$
for $1 \le k < n$". Nonfatal.

### F7 — naming quirk, post-office vs SNCF metric (class d, record only)

`items/ex-post-office-metric.md` calls `ρ(x,y) = ‖x‖ + ‖y‖` "the post-office
metric (also called the SNCF metric)". PlanetMath's `sncfmetric` gives two
definitions under that name: Definition 1 is exactly the item's construction
(`d_P(x,y) = d(x,P) + d(P,y)` for `x ≠ y`), while its "enhanced" Definition 2 is
the collinear-ray variant, which is a **different** function. The item's usage
matches Definition 1 and matches common usage; no repair proposed, but the
distinction is recorded because a reader who follows the name to the ray
variant would find a different metric.

### F8 — page-prose defects of the SCHEMA §6 classes (class d, record only)

Both page files predate the two-paragraph page-summary contract (owner,
2026-07-30) and are long multi-paragraph "Objective" narratives; that is not
retro-fixable and is not proposed for repair. Two SCHEMA §6 classes do appear
in them and are recorded for the A9 sweep:

- **Counts.** `library/topology/metric-spaces-examples.md`: "Six examples carry
  out a full verification on a concrete space, and six counterexamples supply
  the witnesses". `library/topology/metric-spaces.md`: "Two false statements
  close the page".
- **Corpus-wide scope claims.** `library/topology/metric-spaces.md`: "None of
  these had a home in the library before", and "Three metric spaces are
  established here, and they are the ones later pages cite".

### F9 — corpus-state claims that later levels have overtaken (published-claim decay, class d)

Beyond F1, three claims of the form "not in this library yet" now have
published counterparts. All are phrased with "yet" or "a later page", so each is
defensible as a reading-order statement; they are listed so Alpha can decide
whether the wording should be tightened to name the page that now exists.

| item | text | now exists |
|---|---|---|
| `def-metric-topology` (remark 1) | "the abstract notion of a topological space … is not introduced in this library yet" | `def-topological-space` (published, `library/topology/topological-spaces-and-continuity.md`) |
| `cex-topologically-not-uniformly-equivalent` (remark 3) | "Cauchy sequences in a metric space are not defined in this library yet" | `def-complete-metric-space` (published) |
| `def-metric-continuity`, `def-equivalent-metrics`, `thm-metric-equivalence-hierarchy` | uniform continuity "is defined on a later page" | `def-metric-uniform-continuity` (published) — claim is correct, no action |

One claim points at a page that does **not** exist: `cex-set-distance-is-not-a-metric`
remark 1, "the Hausdorff distance, which is taken up on a later page and not
defined here" — no Hausdorff-distance item is in the corpus. Recorded for the
A10 owner queue as an unfulfilled forward promise, not a repair.

### F10 — checks that came back clean (recorded so they are not re-done)

- **Finite choice.** `thm-metric-open-set-algebra` step 1.3 picks one radius per
  `k < n`. This is a finite selection, provable in ZF, and the item does not
  claim otherwise; no choice-principle citation is required. The only genuine
  choice principle on the page is the `AC_ω` of `thm-metric-sequential-closure`
  step 1.2, which is declared in the Statement, cited to `def-countable-choice`,
  and correctly inherited (not added to) by
  `thm-metric-continuity-characterisations` (d)⇒(e).
- **Scope hypotheses.** Every place the library's partiality conventions bite is
  carried explicitly: `A ≠ ∅` for `d(x,A)` and `diam`, bounded-and-nonempty for
  `diam`, `S ≠ ∅` for the sup metric, `n ≥ 1` for `d_∞` and for `R^n` indices,
  `r > 0` for every ball, and `X ≠ ∅` before `x_0` is fixed in
  `lem-bounded-remetrisation` step 2.3.
- **No overstated dependency.** Six facts explicitly flag that the cited lemma
  gives only the strict form of an order fact and that the nonstrict form used
  is that plus the equality case (`lem-metric-reverse-triangle` [L2],
  `lem-distance-to-set-is-lipschitz` [L3], `lem-real-line-is-a-metric-space`
  [L5], `lem-metrics-on-rn` [L9], `lem-sup-metric-is-a-metric` [L6],
  `lem-bounded-remetrisation` [L4]). Each was checked against
  `lem-of-add-order`, `lem-of-sign-rules` and `lem-of-inverse-positive`: the
  cited lemmas do state only the strict forms, and the items do not inflate
  them.
- **Minkowski at p = 1.** `lem-metrics-on-rn` [L4] cites `thm-minkowski-finite`
  at the rational exponent 1; that theorem's Statement contains the paragraph
  "On the case $p = 1$" giving exactly the summed two-term inequality the fact
  states, so the citation is precise and no rational-power machinery is pulled
  in.
- **`fs-`/`cex-` pairing.** Both false statements are refuted by companion
  counterexamples with matching data (`{0} ∪ [1,2]`, `x = 0`, `r = 1`; and `R`
  with `d` vs `min{d,1}`), and each false statement keeps only the inclusion or
  implication that really does survive.
- **Every fact target is declared.** All 414 fact→target pairs resolve to an id
  present in the item's `deps` (checked mechanically), and none of the targets
  carries `provenance.statement: ai-generated`.

---

## Notes for A3 / A4

Proposed edits, in the order they should be applied, all inside the delegation:

1. **F2** (four items): replace the 404 URL with the Hausdorff_distance URL.
   Pure `sources.references` edit; combine with the provenance retag.
2. **F1** (`rem-metric-axiom-conventions`): rewrite two sentences; this is the
   only proposal that changes mathematical prose a judge would read, so the
   item's `verification.judge` and `audited` stamp go under §9 and an
   independent reader certifies it at A6. The `def-extended-reals` linkage
   choice is flagged for Alpha.
3. **F1-related** (three items): soften "there is no extended real line here"
   to "this library does not use the extended real line for suprema".
4. **F4** (`thm-metric-sequential-closure`): add (M2) to `[A2]`.
5. **F5**, **F6**: single-sentence prose corrections.
6. Provenance retag of all 40 items per the ledger, deleting no `authorship`
   line (none of these items carries one) and preserving the existing
   `verification` blocks for the pure retags.

Item `ex-p-adic-ultrametric` has no `verification.judge` block at all (removed
2026-07-27 by the level-7-algebra scope-denial sweep, per the comment in its
frontmatter) and is owner-audited only; A7 should judge it on current text.

---

## A4 — applied (2026-08-02, after A3 approval; `research/audit/wave0-topology.A3.md`)

The orchestrator took the pre-A4 `touchlog` snapshot; no `touchlog` or
git state-changing command was run from here. Nothing outside the approved list
was touched: the 36 about-the-book URLs (F3), the page-prose counts and
corpus-scope claims in the two page files (F8 prose), the SNCF naming quirk (F7)
and the unbacked Hausdorff-distance forward promise (F9) are all left as they
were, for the A10 owner queue.

### R1 — provenance retags, all 40 items (class c, pure retag)

Each item gained, immediately after `origin:`,

```yaml
provenance:
  statement: <ledger value>
  proof: <ledger value>
```

exactly as recorded in `wave0-topology.provenance.jsonl` (5
`literature-derived`/`exact-source`, 35 `ai-altered`/`semantic-source`; proof 10
`not-applicable`, 27 `ai-generated`, 3 `ai-altered`). No item carried a legacy
`authorship:` line, so decision D5 is a no-op here. Every ledger evidence URL
absent from an item's `sources.references` was appended with a house-style
title; 34 of the 40 items gained one URL, 6 already carried all of theirs. No
`generation:` block was written, because no statement in this batch is
`ai-generated`. Pure retags: `verification.judge` and `verification.audited`
were preserved on the 31 items with no text change.

### R2 — F2, dead source URL (class b, pure URL swap)

In `def-metric-bounded-diameter`, `lem-distance-to-set-is-lipschitz`,
`thm-metric-closure-characterisation` and `cex-set-distance-is-not-a-metric`:

- old: `- title: "Distance from a point to a set (Wikipedia)"` /
  `url: "https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_set"` (HTTP 404)
- new: `- title: "Hausdorff distance (Wikipedia)"` /
  `url: "https://en.wikipedia.org/wiki/Hausdorff_distance"` (verified 200; carries
  `d(a,B) := inf_{b∈B} d(a,b)`, the 1-Lipschitz property, and the
  disjoint-closed-sets-at-distance-zero fact)

### R3 — F1, the false claim about the library (class a, material)

`items/rem-metric-axiom-conventions.md`, two passages.

- old: "It is not available in this library, for one reason and one reason only:
  its values would have to live in the extended real line … and
  $\overline{\mathbb{R}}$ **has deliberately not been built**. … The library's
  $\mathbb{R}$ is the complete ordered field … and nothing else."
- new: "It is not treated here, for one reason: its values would have to live in
  the extended real line … whereas the axioms of [[def-metric-space]] are stated
  over the complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]])
  and are never read anywhere else. … Every value of every metric in this
  library is therefore an element of $\mathbb{R}$."
- old: "If a later page needs extended metrics, the honest way to add them is to
  build $\overline{\mathbb{R}}$ first, as a new object with its own order and
  its own partial arithmetic, and then to restate [[def-metric-space]] over it.
  Nothing in the plan for this library currently requires that …"
- new: "Adding extended metrics honestly would mean restating [[def-metric-space]]
  over a totally ordered set with a greatest element, carrying its own partial
  arithmetic, and re-proving over it everything this page proves over
  $\mathbb{R}$. No such restatement is made anywhere in this library, and until
  one is, every metric here takes real values."

Both are true of the corpus as it stands: `def-extended-reals` exists and is
published, and no restatement of `def-metric-space` over it exists. Per A3 the
text is honest **without** a `def-extended-reals` wikilink; adding one is
Alpha's call at A6 (it would be a new cross-category edge). The two links used,
`def-metric-space` and `def-complete-ordered-field`, are already in this item's
`deps`.

### R4 — F1-related scope-denial sentences (class b, material)

- `def-metric-bounded-diameter`: "there is no extended real line and no
  convention $\sup \emptyset = -\infty$" → "the extended real line is not used
  for suprema, and there is no convention $\sup \emptyset = -\infty$".
- `lem-real-line-is-a-metric-space` (remark 3): "there is no extended real line
  here, so an unbounded set has no diameter at all" → "suprema here are real
  numbers and the extended real line is not used for them, so an unbounded set
  has no diameter at all".
- `lem-sup-metric-is-a-metric` (remark 1): "the extended real line, which this
  library does not use" → "… which this library does not use for suprema".

### R5 — F4, the unstated symmetry use (class b, material)

`items/thm-metric-sequential-closure.md`:

- `[A2]` gained a clause: "; and $d(u,v) = d(v,u)$ for all $u, v \in X$, which is
  the symmetry axiom (M2) ([[def-metric-space]])". `def-metric-space` was already
  in `deps`.
- step 1.1: "so $a_K \in B(x,r) \cap A$ by symmetry of $d$" → "so
  $d(x,a_K) = d(a_K,x) < r$ by the symmetry axiom (M2) of [A2] and hence
  $a_K \in B(x,r) \cap A$". The step's tag `[A1, A2]` was already correct and is
  unchanged.

### R6 — F5, Statement aligned with its witness (class d, material)

`items/fs-closed-ball-is-the-closure-of-the-open-ball.md`: "it fails already in a
two-point subspace of the real line." → "it fails already in a subspace of the
real line with a gap, and the witness used below is $\{0\} \cup [1,2]$."

### R7 — F6, undefined vector addition in a Remark (class d, material)

`items/ex-post-office-metric.md`, remark 2: "the element $x + w$, with $w$ the
vector of step 1.3, satisfies $d_2(x, x+w) = \|w\| = r/2 < r$" → "the element $y$
with $y_0 := x_0 + r/2$ and $y_k := x_k$ for $1 \le k < n$ satisfies
$d_2(x, y) = r/2 < r$, by the computation of step 1.3". No operation outside the
library's `R^n` (functions `n → R`) is now used.

### R8 — F9 decay corrections, in-batch items only (class d, material)

- `def-metric-topology` (remark 1): "the abstract notion of a topological space
  … is not introduced in this library yet" → "… is introduced on a later page
  and is not used here" (`def-topological-space` is published).
- `cex-topologically-not-uniformly-equivalent` (remark 3): "Cauchy sequences in a
  metric space are not defined in this library yet" → "… are defined on a later
  page and are not available here" (`def-complete-metric-space` is published).

### Stamps

The nine items whose mathematical text changed (R3–R8:
`rem-metric-axiom-conventions`, `def-metric-bounded-diameter`,
`lem-real-line-is-a-metric-space`, `lem-sup-metric-is-a-metric`,
`thm-metric-sequential-closure`,
`fs-closed-ball-is-the-closure-of-the-open-ball`, `ex-post-office-metric`,
`def-metric-topology`, `cex-topologically-not-uniformly-equivalent`) had their
stale `verification.judge` block and obsolete `verification.audited` stamp
deleted; each now carries `verification.precheck` only and awaits the
independent A6 reading (`verification.verified`, `scope: published-audit`) and
the A7 judge lanes. No repair was self-certified. The other 31 items keep their
existing stamps, the retag being non-material;
`ex-p-adic-ultrametric` continues to carry no judge block (removed 2026-07-27).

### Gates after A4

- `tools/reflow.mts` on the six changed proof-bearing items: reflowed.
- `tools/precheck.mts` on all 40 batch items: **30 checked, 0 failing — all clean**.
- Contracts regenerated against the final text (the new `A2 → def-metric-space`
  (M2) citation is captured, with the exact quote "**(M2) Symmetry.**
  $d(x,y) = d(y,x)$", and step 1.1's claim is refreshed):
  `tools/proof-contract.mjs … --strict` → **0 errors, 0 warnings, 30/30 items**.
- Ledger/disk consistency self-check: all 40 items carry exactly the ledger's two
  provenance values, every ledger URL is present, the 404 URL is gone, and the
  stamp handling matches the material/pure split.
- `tools/extcheck.mjs` OK, `tools/fwdcheck.mjs` OK. `tools/depcheck.mjs` reports
  49 `published-unaudited` items wave-wide, 9 of them mine — the expected state
  between A4 and A6; its `cited-not-in-deps` and `multi-home` findings touch no
  item in this batch.

## Checkpoint (2026-08-02)

Substage: A4 complete. On disk: the 40 repaired/retagged items,
`wave0-topology.provenance.jsonl` (40 rows), `wave0-topology.proof-contracts.json`
(30 items, strict-clean against the final text), this findings file. Next
action: A6 — independent readers certify the nine material repairs (no
self-certification), Alpha decides the `def-extended-reals` linkage in R3, then
A7 judges every wave-0 item on current text.
