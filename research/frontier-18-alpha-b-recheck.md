# frontier-18 — group Alpha `b`, step-3 re-check before the step-4 splice

Batches **5** and **10**, four A/B pairs. Reviewed at step 3 in
`research/frontier-18-alpha-b-step3-scaffold-review.md`; the Betas' `## Step-3 fix pass`
sections are `research/frontier-18-batch-5.notes.md` L1008 and
`research/frontier-18-batch-10.notes.md` L986.

Every disposition below was checked against the file as it now stands, not against
what the notes report. Where a fix rests on a source, the source was **re-fetched in
this dispatch** and its stated result read; three of the four claims that mattered
turned on a source, and all three were verified byte-identical to the coverage stamp.

---

## Per finding

| id | disposition | evidence |
|---|---|---|
| **B5-1** Motzkin/Schröder | **confirmed**, and extended | 5 items on disk, not the 3 I named |
| **B5-2** Chung–Feller | **confirmed**; **pushback on my sources accepted** | both sources I named were wrong; Beta found the right one |
| **B5-3** Cauchy–Davenport witness | **confirmed** | my repair intact |
| **B5-4** Fisher over `F_2` | **confirmed** | my repair intact |
| **B5-5** Catalan closed formula | **confirmed** | my repair intact |
| **B5-6** Hankel determinant | **confirmed**; second half **not applied** → repaired here | see below |
| **B5-7** zero-edge prerequisite | **confirmed** | decision recorded, no manifest change, none needed |
| **B5-8** false disk claim in CB-13 | **confirmed** | amendment A1 intact at notes §9 |
| **B5-9** declines examined | **pushback accepted**; artifact **not applied** → repaired here | see below |
| **B10-1** no treatment of the required form | **confirmed** | Harju re-fetched, ToC and results verified |
| **B10-2** density/degree interchange | **confirmed** | my repair intact |
| **B10-3** bounded weakly-restricted partition | **confirmed** | my repair intact |
| **B10-4** two published `α`/`ω` definitions | **confirmed** | my repair intact |
| **B10-5/6/7** published-content debts | **confirmed as routed** | unchanged; lead Alpha and owner |
| **B10-8** Beta findings F1, F2, F3, F7, F8 | **confirmed** | amendments A2.1–A2.3 intact at notes §2 |

### B5-1 — Motzkin and Schröder numbers · **confirmed, and the Beta was right to add more than I asked**

Five items on disk, not three: `def-motzkin-and-schroder-paths`,
`thm-motzkin-numbers-by-first-return-decomposition`,
`cor-motzkin-numbers-as-a-binomial-sum-of-catalan-numbers`,
`thm-large-schroder-numbers-by-first-return-decomposition`,
`cor-large-schroder-numbers-as-a-binomial-sum-of-catalan-numbers`. The Beta's reason —
once §10.8 is harvested, Corollary 10.8.2 needs a disposition and declining it would be
a drop for ergonomics — is correct under the self-contained-scope rule. **Approved.**

**Source re-fetched and read.** `arxiv.org/pdf/1503.05930`, 745,705 bytes,
`sha256_16: 34a56044642417a8` — byte-identical to the coverage stamp. §10.8 is titled
"Elementary results on Motzkin and Schröder paths"; at step 3 I had that from the ar5iv
rendering only, and it is now confirmed in the PDF itself. Read verbatim:

- **Corollary 10.8.2 (10.45)** — the number of Motzkin paths from `(0,0)` to `(n,0)` is
  `Σ_{k=0}^{⌊n/2⌋} binom(n,2k)·(1/(k+1))binom(2k,k)`, which is
  `cor-motzkin-numbers-as-a-binomial-sum-of-catalan-numbers` exactly.
- **(10.46)** — "If `n` is even, the number of Schröder paths from `(0,0)` to `(n,0)` is
  `Σ_{k=0}^{n/2} binom(n/2+k,2k)·(1/(k+1))binom(2k,k)`." The source's `n` is the
  horizontal extent, so its `n/2` is this page's half-length; the scaffold's
  `R_n = Σ_{k=0}^{n} binom(n+k,2k) C_k` is that statement re-indexed, and the Beta's
  re-indexing note is right.
- **Theorem 10.9.2 (10.49), (10.50)** — `Σ M_n z^n = (1−z−√(1−2z−3z²))/(2z²)` and
  `Σ S_n z^n = (1−z−√(1−6z+z²))/(2z)`. Both scaffold titles are these statements with
  the non-unit denominator cleared, so both are transcriptions and only their proofs
  are local. (10.50) also confirms that the source indexes the large Schröder numbers
  by half-length, which is the convention `def-motzkin-and-schroder-paths` fixes.

**Mathematics checked, not read.** `x²M²+(x−1)M+1=0` gives `(2x²M+x−1)² = (x−1)²−4x² =
1−2x−3x²`; `xR²+(x−1)R+1=0` gives `(2xR+x−1)² = (x−1)²−4x = 1−6x+x²`; both roots have
constant coefficient `1`, so the uniqueness clause of the published
`cor-unique-formal-root-with-constant-one` identifies them and neither item divides by a
non-unit. The Beta's asymmetry claim is the one thing on this page that a careless author
would copy wrong, and it is correct: in the `n+1` form the Motzkin convolution runs
`i = 0,…,n−1` and the Schröder one runs `i = 0,…,n`, because a `U` and a `D` consume two
units of length but one unit of half-length. I recomputed `M_0..M_4 = 1,1,2,4,9` and
`R_0..R_4 = 1,2,6,22,90` from both the recurrences and the two closed sums independently;
all agree.

**Harvest.** The Krattenthaler locator is now `ch. 10, §§10.1–10.4, §§10.8–10.9 and
§10.13`, twelve rows longer. One bookkeeping correction to the notes, which claim "six
included, six deferred": the twelve rows are **five `included` and seven `deferred`**.
Every deferred row carries a reason about its own result; nothing on disk is wrong.

### B5-2 — Chung–Feller · **confirmed, and my two suggested sources are withdrawn**

**Pushback accepted, with the evidence.** My step-3 finding named Krattenthaler §10.12 or
Stanley's *Catalan Numbers* as where to source the height-profile lemma. Krattenthaler
does not contain Chung–Feller: over the full extracted text of `1503.05930` the strings
"Chung" and "Feller" occur **once**, as bibliography entry `[38] W. Feller`. The Beta
checked this before rejecting my suggestion and was right to; §10.12 is not even the
section I named it as. The instruction that mattered — source it before scaffolding,
report rather than improvise, and do not transcribe my sketch — was followed.

**The source the Beta found, verified.** A. Huq, *Generalized Chung-Feller Theorems for
Lattice Paths*, `arxiv.org/pdf/0907.3254`, 1,094,110 bytes,
`sha256_16: 437dc39f79b8237b` — byte-identical to the stamp. Read verbatim:

- **Theorem 1.1.3** — "Among the `binom(2n,n)` paths from `(0,0)` to `(2n,0)`, the number
  of paths with `2k` steps lying above the `x`-axis is independent of `k` for `0 ≤ k ≤ n`,
  and is equal to `(1/(n+1))binom(2n,n)`." `thm-chung-feller`'s title is this with no
  change of quantifier or range, so `provenance.statement: literature-derived` is right.
- **Theorem 2.1.1** — "Suppose `a₁+⋯+aₙ = 1` where each `aᵢ ∈ Z`. Then for each `k`,
  `1 ≤ k ≤ n`, there is exactly one conjugate of `a` with exactly `k` nonpositive partial
  sums." That is
  `lem-shifts-of-a-weight-one-word-realise-each-count-of-nonpositive-partial-sums-once`,
  and the source's proof does perturb by `−i/n`, so `provenance.proof: ai-altered` for the
  integer-key replacement is right.
- **Theorem 2.2.1** and **2.3.1(1)** — the blocking and the `k = 1,…,n+1` count, both
  dispositioned `inline` and both genuinely inline steps of `thm-chung-feller`.

**The Beta caught a slip in its own source and did not transcribe it.** Huq writes "since
there are `n+1` up steps, `p` has `n` conjugates that start with an up step"; the Beta
recorded this as a slip for `n+1`. Theorem 2.3.1(1)'s own range, `k = 1,2,…,n+1`,
confirms it. That is the right handling of a source error.

**The id differs from the one I named, deliberately and correctly.** I asked for
`lem-the-shifts-of-a-necklace-realise-each-height-profile-once`; what is built is about
the nonpositive partial sums of a weight-one integer word, which is the statement the
source actually carries. The id follows the statement, not my sketch.

**Proof traced step by step.** The lemma: `T(i) = m·S_a(i) − i` is `m`-periodic because
`S_a(i+m) = S_a(i)+1`; injective on `{0,…,m−1}` because `m | i−j` with `|i−j| < m`;
`S_a(j+r) ≤ S_a(j) ⟺ T(j+r) ≤ T(j)` for `0 ≤ r < m` because `T(j+r)−T(j) = md−r` is
`≤ −r ≤ 0` for `d ≤ 0` and `≥ m−r ≥ 1` for `d ≥ 1` — and the strategy already names
`r < m` as the hypothesis spent exactly there, which is the step a reader skips. `X` is
then the rank of `T(j)` and is injective, so it is a bijection onto `{1,…,m}`. The
theorem: the blocked word `b` has length `n+1` and weight `S_a(t₀+2n+1) − S_a(t₀) = 1`;
`|U| = binom(2n,n) = (n+1)C_n`; each orbit meets `U` in `n+1` words realising each of
`1,…,n+1` once; deleting the forced leading `+1` shifts heights by one, so
`k = 1 + #{U steps of q starting at height ≤ −1}`; the telescoping of
`i ↦ [h_q(i) ≥ c+1]` to `0` pairs those with the `D` steps below level `0`, giving
`2(k−1)` steps below and `2(n−k+1)` above. I checked `n = 1` and `n = 2` by hand. The
argument closes.

**The blocked word is an arbitrary integer word, and the page's definition covers it.**
`def-cyclic-shift-and-the-periodic-partial-sum-function` is stated "for `m ≥ 1` and a word
`a = a₀⋯a_{m−1}` of integers", not for `{+1,−1}` words, so step 2's `b` is inside it. This
was the one way the route could have failed to close and it does not.

### B5-6 — Hankel determinant · **confirmed**; Narayana half **not applied**, repaired here

`rem-lattice-path-conventions` now names the Hankel determinant with both things it would
need — `thm-lindstrom-gessel-viennot` restated for a family of monotone paths closed
under tail-swapping at a common point, and the count of monotone paths from `(0,0)` to
`(m,m)` weakly below the diagonal — and says the page supplies neither. Motzkin, Schröder
and Chung–Feller are removed from that list, which is required now that the run builds
them. The remark deliberately does not wikilink the B-page item carrying the
weakly-below count; that is right and preserves the zero B-page-citation property.

**What was not applied.** The same remark still read: *"The Narayana refinement of `C_n`
by the number of peaks would need a source: no treatment in the ranges this page reads
carries it."* The Beta's own B5-9 entry concludes that this reason is no longer honest —
Huq §2.5 carries the Narayana formulas and Huq is now a stamped source of this pair — and
says so explicitly, *"because leaving it would put a false reason in a durable artifact"*.
It then corrected the notes and left the artifact. `rem-lattice-path-conventions` is
reader-facing prose; the notes are not.

**Repaired here** (step-3 licence: correct a planned statement that is false or misleading).
The remark now gives the reason that is true — the refinement counts Dyck paths by a
statistic and no route to `C_n` built here tracks the number of peaks, so it needs
machinery the page does not build — and records that Huq §2.5 carries the formulas and
lies outside the declared read range, so it is not a missing source. The decline itself
stands: the page is at 58 of 60 items and the peak statistic is real work, not a
transcription.

### B5-9 — declines · **pushback accepted**

The Narayana correction is right and is the finding above. The rest — non-crossing
partitions to order 199, the fourteen Krattenthaler `deferred` rows, the Miniature and
Babai–Frankl declines — is unchanged and was accepted at step 3 result by result.

### B10-1 — the pair now has a treatment of the required form · **confirmed**

`research/frontier-18-batch-10.coverage.json` carries T. Harju, *Lecture Notes on
Combinatorial Structures in Graph Theory* (Turku, 2019),
`users.utu.fi/harju/Structures/Structure2018.pdf`, `kind: lecture-notes`, locator
"§§1–5 in full … notes pp. 1–31".

**Re-fetched independently in this dispatch:** 501,289 bytes,
`sha256_16: 8afed3c23b96a4d3` — byte-identical to the stamp, and live. Its own table of
contents reads *1 Preliminaries (1.1 Notation, 1.2 Edge coloured graphs), 2 Clans (2.1
Definition, 2.2 Prime clans), 3 Quotients and Homomorphisms (3.1, 3.2, 3.3), 4 Clan
Decomposition (4.1 Maximal prime clans, 4.2 The clan decomposition theorem), 5 Primitive
Graphs (5.1–5.4)*, with §6 beginning at p. 32. The declared locator is exactly right, the
document is a full lecture-note set with a harvestable table of contents, and it is
independent of Habib–Paul. **The source-depth rule is satisfied and the verdict flips.**

**The harvest is faithful.** I enumerated the numbered results of §§1–5 from the document
itself: 54 (22 Theorems, 16 Lemmas, 4 Corollaries, 12 Remarks). The harvest carries **49**
of them, plus the section and subsection headings, the worked Examples, the substantive
Exercises and the per-section notes-on-references — 86 rows. The five not harvested are
Remarks 1.1, 1.2, 1.3, 3.2 and 3.3; I read all five. Remarks 1.1–1.3 are commentary on the
reversibility condition and on how a ∆-graph is drawn, and carry no statement. Remarks 3.2
and 3.3 do carry statements — that a pre-morphism need not pull clans back, and that the
inverse image of a singleton prime clan need not be prime — but both are about the ∆-graph
epimorphism calculus, which this page does not define, and both would be `out-of-scope`
rows if present. Nothing mathematical is lost. **Noted, not a finding.**

**Three of Harju's results the Beta chose to build, verified against the source.**

- `lem-the-quotient-is-an-induced-subgraph-on-a-transversal` — Harju Theorem 3.1 reads
  "Let `X` be a factorization of a graph `g`. Then the quotient `g/X` is isomorphic to the
  subgraph `g[T]`, where `T` is any transversal of `X`." The undirected specialisation is
  what is scaffolded, and `ai-altered`/`ai-altered` is the right pair of labels.
- `cor-the-modular-partition-with-a-prime-quotient-is-unique` — Harju Theorem 3.10 reads
  "Each ∆-graph `g` can have at most one factorization `X` such that the quotient `g/X` is
  **truly primitive**", and Theorem 4.5 identifies that factorization as `P_max(g)`. The
  Beta's convention finding C8 is correct and is not decoration: under this page's
  `def-prime-graph` a two-vertex graph is prime, so the edgeless graph on three vertices
  has two distinct modular partitions with prime quotients, and the undirected form of
  3.10 is false without a hypothesis. I checked that the hypothesis chosen — connected and
  anticonnected — is exactly enough: it kills the `k = 2` case (two parts complete or
  anticomplete disconnect `G` or `Ḡ`), `k = 3` is killed by
  `lem-graphs-on-three-vertices-are-not-prime`, and above that Harju's uniqueness applies.
  I then traced the whole proof: `M(x) ⊇ M_i`; every part meeting `M(x)` lies inside it by
  maximality and the overlapping-modules lemma; so `M(x)` is a union of parts whose index
  set is a module of a prime quotient, hence a single part. It closes.
- `cex-maximal-proper-modules-need-not-be-disjoint-in-a-disconnected-graph` — Harju Remark
  4.1 asserts that the maximal clans need not form a factorization and supplies **no**
  witness; the Beta supplies one and it is correct. In the edgeless graph on `{a,b,c}`
  every subset is a module, `{a,b}` and `{a,c}` are maximal proper modules, they meet in
  `a`, and their union is not proper. The complement reading is right too. The witness has
  three vertices and was checked exhaustively, so the truth-risk obligation on an
  `ai-generated` proof is discharged.

**The 46 new declines were examined.** Each names the object the page lacks — the ∆-graph
colour set and involution, the epimorphism/kernel calculus, the strong-module (prime clan)
tree, the cograph development — or a destination page. Every named destination resolves in
`plan-spec.json`: `cographs-perfect-patterns-and-pure-pairs` (413) and
`small-graph-erdos-hajnal-consequences` (421), both confirmed at step 3.

**One decline I opened and accepted.** Harju **Theorem 5.1**, "a truly primitive ∆-graph
has a primitive subgraph of 3 or 4 vertices" — for undirected graphs, every prime graph on
at least four vertices contains an induced `P₄`. That is a headline result about prime
graphs and this page is about prime graphs, so the decline needed checking rather than
accepting. The recorded reason is that its proof needs Seinsche's theorem. **The reason is
true of the source's own proof**: Harju's argument runs through Lemma 5.2(ii), the
equivalence between uniform non-primitivity and the property that every nontrivial induced
subgraph splits into two clans, which is Seinsche's content. And Seinsche's theorem is
already deferred to page 413 by the Chudnovsky harvest — row "Theorem 2.1 [Sei74] (a
P4-free graph on at least two vertices, or its complement, is disconnected)", a decline I
accepted at step 3. Splitting the two halves across two pages would be worse. **Accepted**,
and recorded here so it is not read at step 6 as an omission.

**Yield.** The `coverage-low-yield` warning on this page now reads 46/153 rather than
17/67. The cause is unchanged and already adjudicated: §16 splits one research programme
across twenty-five A/B pairs, and the ∆-graph generality accounts for most of the new
`out-of-scope` rows. **Confirmed.**

### B10-5, B10-6, B10-7 — **confirmed as routed, unchanged**

All three remain changes to published content and none is repairable inside a batch. The
B10-7 workaround is carried in §6.1 of the batch notes and no item on either page of batch
10 writes the ceiling of a real number.

---

## Found at the re-check, not at step 3

**N1 — the CB-6 (ENRICHED) design text still names the route the run did not take ·
amendment written.** Batch 5's notes §9 carried A1, A2 and A3, none of which touches CB-6
(ENRICHED)'s additions list. That list still says Motzkin and Schröder come "via CB-15
specifications, with their algebraic equations solved by the fixed-point theorem" and that
Chung–Feller is "a cycle-lemma corollary" — the first route does not exist in the spec, and
the second is false of the cycle lemma as this page states it. Left standing, the next
scaffolder re-derives an unavailable route; that is exactly the defect A1 exists to
correct, one section away. **I wrote amendment `A4` into
`research/frontier-18-batch-5.notes.md` §9**, attributed to this dispatch, with the exact
old text (verified to occur verbatim in `plan-combinatorics-and-categories.md`) and the
exact replacement, recording all three routes and the Narayana position. **For the lead
Alpha at step 4**, alongside A1–A3.

**N2 — `def-motzkin-and-schroder-paths`, the finiteness obligation · repaired.** The
well-definedness clause said each set injects into the words over a three-element step set
"of the corresponding number of steps". That is determined for a Motzkin path of length
`n`, and **not** for a Schröder path of half-length `n`, whose step count `n+k` depends on
its number `k` of up steps. Rewritten to bound the length: exactly `n` for Motzkin, at
most `2n` for Schröder, with the dependence stated. The finiteness itself was never in
doubt; the sentence discharging it did not cover one of its two cases.

**N3 — `thm-chung-feller` step 1, citation precision · repaired.** The step read "the
orbits partition `W` and there are `C_n` of them by
`thm-catalan-numbers-by-the-cycle-lemma`". That theorem's Statement is the identity
`(2n+1)C_n = binom(2n+1,n)`; a count of orbits is a line of its proof, not its Statement,
and at step 5 that phrasing produces a `[T#]` attributing to it something it does not say.
Rewritten so the orbit count is derived — `|W| = (2n+1)·(number of orbits)`, the cited
identity, then cancellation in `N` — with an explicit instruction to cite the theorem for
its own identity and never for a count of orbits.

**N4 — a harvest row for the Schröder generating function · added.** Krattenthaler Theorem
10.9.2 states both (10.49) and (10.50), and the single row for it back-pointed only at
`thm-motzkin-numbers-by-first-return-decomposition`, leaving
`thm-large-schroder-numbers-by-first-return-decomposition` — a `literature-derived`
statement — with no harvest row naming it. Split into two rows, one per equation, matching
the granularity the file already uses for (10.45) and (10.46). Both equations were read in
the PDF before the row was written.

---

## Observations for step 6, not findings

- **Batch 10's proof contracts carry no citation rows at all.** 76 contracts, 0 citations,
  against 102–740 in every other batch of the run. This is **not** a defect and not a gate
  failure: `proof-contract` drives the check from the authored item's `[F#]` lines, nothing
  is authored yet, and batch 10's contracts record their inputs as item ids on the
  derivations instead. It matters anyway, because batch 5's own fix pass found **eleven**
  citation quotes that were words from the cited item's title rather than clauses from its
  text, and found them precisely because that file pre-populates quotes. Batch 10 has no
  such surface until step 5 writes it. I verified batch 5's repair independently: all 119
  quotes whose cited item exists on disk occur verbatim in it, 0 mismatches.
- **`lattice-paths-and-catalan-numbers` has two items of headroom**, 58 of 60. B5-6
  declined the Hankel determinant on a headroom argument that assumed 56; the argument is
  stronger now, not weaker, and the Beta was right to flag it. The page cannot absorb
  another block without a split.
- **`rem-modules-and-the-word-homogeneous` should carry Harju's synonym list** — closed set
  (Gallai), autonomous, partitive, externally related, condensible, homogeneous set,
  interval. That instruction lives in convention note C7 of the batch-10 notes and in no
  manifest field; the item's `strategy` is empty. Worth confirming at step 6 that it landed.
- **Notes bookkeeping.** Batch 5's notes say the Krattenthaler addition is "six included,
  six deferred"; it is five and seven. Batch 10's `already-published` row for graph
  isomorphism and `g[A]` carries no reason, which the gate permits.

---

## Gates run at this re-check

```
node tools/scaffold-verdicts.mjs --run frontier-18 --require-sufficient
  -> 14/14 A page(s) reviewed; 0 insufficient, 0 unreviewed
node tools/content-policy.mjs --manifest-only research/frontier-18-batch-5.pages.json research/frontier-18-batch-10.pages.json
  -> 225 scoped item(s), 0 error(s), 0 warning(s)
node tools/coverage-checklist.mjs research/frontier-18-batch-5.coverage.json research/frontier-18-batch-10.coverage.json
  -> 4 page(s), 387 harvested result(s), 0 error(s), 3 coverage-low-yield warning(s), each confirmed above
node tools/source-fetch-check.mjs --coverage research/frontier-18-batch-5.coverage.json,research/frontier-18-batch-10.coverage.json
  -> 18/18 source(s) fetch-verified
node tools/url-sweep.mjs --coverage … --recover --fail-on-dead --out /tmp/f18b-urlsweep.json
  -> 17/17 live; 0 failed; 0 recoverable; 0 suspect
node tools/validate-plan.mjs research/plan-spec.json
  -> exit 0, redundant-prereq advisories only, none on this group's pages
node tools/prosecheck.mjs research/frontier-18-batch-5.pages.json --warnings
  -> 0 error(s), 8 warning(s) — the count before my edits, unchanged by them
node tools/prosecheck.mjs research/frontier-18-batch-10.pages.json --warnings
  -> 0 error(s), 3 warning(s)
```

Independent source re-fetches, each byte-identical to its coverage stamp:
Krattenthaler `34a56044642417a8` (745,705 B), Huq `437dc39f79b8237b` (1,094,110 B),
Harju `8afed3c23b96a4d3` (501,289 B).

`proof-contract --strict` and `depsource` remain unsatisfied for the documented
pre-authoring reason — nothing is on disk until step 5 and the spec is spliced at step 4 —
and are evidence about neither this pass nor the last.

## What I changed at this re-check

| file | change |
|---|---|
| `frontier-18-batch-5.pages.json` | `rem-lattice-path-conventions` — Narayana decline reason corrected (N1/B5-9) |
| | `def-motzkin-and-schroder-paths` — finiteness bound stated for both families (N2) |
| | `thm-chung-feller` — orbit count derived rather than attributed (N3) |
| `frontier-18-batch-5.coverage.json` | Theorem 10.9.2 split into its (10.49) and (10.50) rows (N4) |
| `frontier-18-batch-5.notes.md` | amendment **A4** added at §9, for the lead Alpha at step 4 (N1) |
| `frontier-18-alpha-b-step3-verdicts.json` | both `insufficient` rows flipped to `sufficient` |

No item was added or deleted, no id renamed, no page's `requires` changed, no
`plan-spec.json` line changed, and no published item touched.

## Per-pair verdict

| pair | A/B items | verdict |
|---|---|---|
| `lattice-paths-and-catalan-numbers` | 58 / 16 | **ready for splice** |
| `linear-algebra-methods-in-combinatorics` | 46 / 18 | **ready for splice** |
| `modules-substitution-and-prime-graphs` | 36 / 14 | **ready for splice** |
| `sparse-restricted-subgraphs-and-rodl-nikiforov` | 26 / 11 | **ready for splice** |

Nothing blocks the splice. No A page exceeds the 60-item cap and no split is ordered;
`lattice-paths-and-catalan-numbers` is the only one near it, at 58.

## Honest remaining gaps

- **The step-4 splice owes A1–A4 on batch 5 and A2.1–A2.3 on batch 10**, and A4 is mine
  rather than the Beta's. If it is not applied, the design keeps a false route claim for
  Motzkin, Schröder and Chung–Feller.
- **B10-5, B10-6 and B10-7 are unresolved and are not this run's to resolve.** They are
  debts of the 393–442 block: the missing bull/E-graph/Bird definitions on
  `graphs-walks-and-connectivity`, the duplicate published definition of `α` and `ω`, and
  the absent real-ceiling amendment.
- **Harju Theorem 5.1 and the strong-module tree stay out of page 397** with reasons I
  verified rather than accepted. Both are the first things to add if that page is revisited.
- **Batch 10's citation quotes are unwritten**, so the largest confirmed-fatal class in the
  library's history has no mechanical surface on that batch until step 5 populates one.

No permission prompt was raised at any point in this dispatch.
