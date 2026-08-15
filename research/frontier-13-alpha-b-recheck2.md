# frontier-13 — Alpha **group B**, re-check round 2 (final gate before step 4)

**Alpha:** Claude Opus 5 (`claude-opus-5[1m]`), `xhigh`, 1,000,000-token window.
**Scope:** batches **3** and **7** only. Batches 1, 2, 4, 5, 6 were not opened.
**Date:** 2026-08-15. **Authored nothing; edited no batch file, no spec, no item.**

Every verdict is against disk. Where a repair claims a source I opened the
source: Axler LADR4e (404-page PDF, `pypdf` in a venv), Conrad *Potential
Diagonalizability* (PDF), Conrad *The Minimal Polynomial and Some Applications*
(PDF), Treil LADW Ch. 5 (live HTML), and I attempted Knapp *Basic Algebra*.
No blockers; no permission prompt raised.

---

## Verdicts

| pair | A page | items A/B | round 1 | **round 2** |
|---|---|---|---|---|
| 3-A | `diagonalisation-and-the-minimal-polynomial` (88) | 26 / 12 | not-ready | **not-ready** |
| 3-B | `inner-product-spaces-and-orthogonality` (94) | 34 / 16 | ready | **ready-for-splice** |
| 7 | `linear-recurrences-and-rational-generating-functions` (195) | 32 / 15 | not-ready | **ready-for-splice** |

Batch 7's repair is clean and I recommend it for step 4. Page 94 stands, with one
source gap I did not catch in round 1 and name below.

**Page 88 is `not-ready` for one reason, and it is not Beta 3's fault.**
The replacement source you content-verified — Knapp, *Basic Algebra* —
**returns HTTP 404 at the URL in the ledger.** So does every other path under
`~aknapp`. The primary-decomposition spine, the exact material that had no
source in round 1, is now anchored to a URL that does not resolve. This is the
Kim failure one round later, with a different book.

---

## 1. Batch 3, page 88 — the re-anchor

### 1.1 The Knapp URL is dead

```
https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf   404   (196 bytes)
http://  (same path)                                                 404
.../download.html      (the author's download index)                 404
.../books/b2-alg.html  (the book's own page)                         404
.../~aknapp/  and  /~aknapp/index.html                               404
```

Checked with `curl` (http and https, browser user-agent, follow-redirects) and
independently with `WebFetch`, which reported `HTTP 404 Not Found` for the
download index. Two different fetchers, same answer.

**This is not a network or sandbox artifact and not a whole-site outage.**
`https://www.math.stonybrook.edu/` returns 200 with the live department site
(45 KB, real navigation, correct `<title>`). The host serves fine; the
`~aknapp` tree specifically is gone. A control fetch of
`https://linear.axler.net/LADR4e.pdf` in the same session returned 200 and
2.8 MB, and I extracted all 404 pages of it.

Search engines still index the URL — that is what the third pass and I both saw.
The index is historical; the server is authoritative.

### 1.2 What is unbacked as a result

The ledger's own arithmetic is right: **35 source-requiring items, 35
source-anchored, 0 lacking a source** — I reproduced it. Three unrowed B-page
items are the declared `ai-generated` leaves
(`ex-simultaneous-diagonalisation-of-two-commuting-matrices`,
`fs-the-characteristic-polynomial-determines-diagonalisability`,
`fs-diagonalisability-requires-distinct-characteristic-roots`), correctly
excluded, and none is a dependency target. On the A page the count is genuinely
0. **The round-1 nine were closed.**

Subtract the dead source and it reopens. Three items have **no live source at
all** — every `included`/`inline` row naming them is a Knapp row:

- `lem-coprime-kernel-decomposition`
- `cor-primary-projections-are-polynomials-in-the-endomorphism`
- `ex-primary-decomposition-over-q-with-an-irreducible-quadratic`

Two more keep a live row that is **strictly weaker than the item states**:

- `thm-primary-decomposition-for-an-endomorphism` — Knapp Theorem 5.19(a),(c)–(f)
  are the substance. The only non-Knapp row is Axler **Theorem 8.4**, disposed
  `inline`, which says $V=\operatorname{null}T^{\dim V}\oplus\operatorname{range}T^{\dim V}$.
  That is not the irreducible-power primary decomposition; it is the two-way
  split at a single operator.
- `cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial` —
  backed by Axler 8.22, whose text I read: *"Suppose $\mathbf F = \mathbf C$
  and $T\in\mathcal L(V)$."* Axler 8.25 opens the same way. Axler Chapter 8 is
  titled *Operators on Complex Vector Spaces*. It backs the $\mathbf C$ case;
  the library item is over an arbitrary field with a split minimal polynomial.

So the gap is the same one round 1 named, unchanged in kind: **the general
primary decomposition over an arbitrary field, and the coprime-kernel lemma
under it, have no live source in the page's declared set.** Knapp really is the
right book for it — I have no complaint about the mathematical judgement, only
that the URL does not resolve.

Nothing here says the mathematics is wrong. I read the five items and they are
the standard development: Bézout on coprime $f,g$ with $(fg)(T)=0$, iterate over
$\mu_T=\prod q_i^{e_i}$, projections $b_i(T)g_i(T)$. The scaffold cites
published `thm-bezout-identity-for-polynomials`,
`thm-polynomial-ring-over-a-field-is-a-ufd` and `def-internal-direct-sum`, all in
closure. The defect is in the source ledger, not the proof plan.

### 1.3 A live source almost certainly exists — this should be a re-point, not a re-scope

I checked before writing this, because "no honest source" and "the file moved"
call for very different decisions:

- **Project Euclid** distributes the digital second edition and lists
  **Chapter V, *Theory of a Single Linear Transformation*, as Open Access** with
  a per-chapter PDF, at
  `https://projecteuclid.org/ebooks/books-by-independent-authors/Basic-Algebra/toc/10.3792/euclid/9781429799980`.
  The chapter link resolves; the PDF endpoint is behind Incapsula bot protection,
  so it is human-openable but not machine-fetchable from here. Chapter V is
  exactly the declared read range (§3 and §5).
- Two McGill course mirrors of the same book are live
  (`math.mcgill.ca/darmon/courses/19-20/algebra2/knapp.pdf` and
  `.../17-18/algebra2/knapp-basic.pdf`). They serve slowly; I had a partial
  download in flight when I wrote this and could not complete a content check
  against them. A course mirror is also a licensing question the author-hosted
  gift copy did not raise.

So the likely disposition is: **re-point the locator at the Project Euclid
open-access Chapter V, open it there, and confirm §3 pp. 218–226 and §5
pp. 228–231 at the new pagination.** That is cheap. What is not acceptable is
leaving the current URL in place — it is dead, and at step 7
`level-coverage.mjs --verify-current-context` requires a reader-visible
`sources.references` URL for every `literature-derived` / `ai-altered` item.

**I could not verify Knapp's content at any mirror, so I am not certifying the
locator — only reporting that the URL is dead and that a live route appears to
exist.** If Chapter V turns out not to carry Theorem 5.19 at those pages, the
page must be restricted to the split case, which is your call as you said.

### 1.4 What the third pass got right — and I checked all of it

- **Axler is honest, exhaustively.** 53 numbered results are claimed for page 88;
  I extracted the PDF and matched every one against its printed label.
  **53/53 present at the claimed number with matching content**, including the
  precise page anchors: PDF p. 153 = printed 139 = §5A Thm 5.18; p. 158 = 144 =
  §5B "Eigenvalues and the Minimal Polynomial", Def 5.21; p. 163 = 149 = Thm 5.32;
  p. 177 = 163 = §5D opening; p. 312 = 298 = §8A opening; p. 326 = 312 = Thm 8.28.
  No stretched locator, no drifted number.
- **Conrad *Potential Diagonalizability* is now in the ledger, and it is right.**
  All four rows verified against the PDF: Example 1 (the real quarter-turn
  $\left(\begin{smallmatrix}0&-1\\1&0\end{smallmatrix}\right)$), Example 2
  ($\left(\begin{smallmatrix}1&1\\0&1\end{smallmatrix}\right)$ nondiagonalisable
  over every extension), Lemma 3, and Theorem 4(1). Locator "PDF pp. 1–2, from
  Example 1 through Theorem 4(1), including Lemma 3 and excluding Theorem 4(2)"
  is exact. URL live (200, 6 pages). **Round-1 remedy 2 fully discharged.**
- **Conrad minimal-polynomial locator now matches its enumeration** — it reads
  "through Corollary 5.5" and the rows run through Corollary 5.5. The round-1
  locator/enumeration mismatch is fixed on this source.
- **The `replacement_audit` survived and is still 22 rows**, 19 with a verified
  replacement and 3 marked `not-present-in-replacement` with a specific reason
  rather than a stretched locator. It is attached to the Axler source block. It
  remains the best artifact either Beta produced in this run.
- **F3.4 fixed.** `thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms`
  now reads "A family of **diagonalisable** endomorphisms of a finite-dimensional
  space is simultaneously diagonalisable **if and only if** its members commute
  pairwise", and the strategy proves the converse ("endomorphisms diagonal in one
  common basis commute because diagonal matrices commute"). Same id, no second id
  minted, and the standing diagonalisability hypothesis is in the subject where it
  belongs — the biconditional is true as stated and matches Conrad Thm 5.2.
- **F3.6 fixed structurally.** `splitting-fields` is in order 88's `requires` in
  `plan-spec.json`; I recomputed the closure — **38 pages, `splitting-fields`
  present**, `def-polynomials-that-split-and-splitting-fields` published on it.
  Five items use "splits" as a technical predicate and **all five cite it**. The
  three page-88 items I checked that do not cite it do not use the predicate:
  `thm-primary-decomposition-…` says the factors "split $V$ into kernels"
  (ordinary English), and
  `thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots` states
  "is a product of distinct linear factors" in its title. Its id still carries
  "splits", which is now harmless because the term is defined in closure.
- **F3.7 fixed.** The summaries section holds exactly two A-page summaries, two
  paragraphs each (79/67 and 70/54 words), and no B-page summary body. The one
  surviving occurrence of "The B pages supply concrete" is the third-pass
  narrative recording the deletion.

### 1.5 Still open on page 88, beyond the URL

**F3.3 is unfixed for the third time, and it is now a coverage gap, not a
preference.** I read Conrad's §5 in the PDF. **Inside the declared range**
("through Corollary 5.5, stopping before §6"), immediately after Corollary 5.5,
there is an unnumbered closing paragraph:

> *"Without commutativity, diagonalizability need not be preserved by addition
> and multiplication. For example, the matrices $\left(\begin{smallmatrix}1&0\\0&2\end{smallmatrix}\right)$
> and $\left(\begin{smallmatrix}0&1\\0&-1\end{smallmatrix}\right)$ are both
> diagonalizable but their sum $\left(\begin{smallmatrix}1&1\\0&1\end{smallmatrix}\right)$
> is not."*

It has **no disposition row**. The harvest's own convention covers unnumbered
observations — the ledger already rows "Unnumbered closing observation in Section 4,
$F[A]$ is isomorphic to $F[T]/(m_A)$". So the harvest is incomplete over its own
declared range, and the missing heading is precisely the necessity witness for the
commuting hypothesis of the new
`cor-polynomials-in-commuting-diagonalisable-endomorphisms-are-diagonalisable`,
which still ships with nothing showing that hypothesis is needed.
`coverage-checklist` passes 0 errors and cannot see this: it validates rows that
exist, never a heading that was never enumerated.

**The notes' narrative record is now contradicting itself, and step 5 reads it.**
The third pass again appended "This section supersedes the earlier … summaries
where they conflict" instead of correcting them. Concretely, in
`research/frontier-13-batch-3.notes.md`:

| line | says | disk says |
|---|---|---|
| 47, 48 | Kim's UCL URL, listed twice as a read range | source deleted; URL dead |
| 46 | Conrad range "through Corollary 5.4" | coverage.json: through Corollary 5.5 |
| 49 | Treil Ch. 5 "§5.4 excluded" | coverage.json: "§5.4.1 through the normal equation" |
| 51 | Axler "is supplementary rather than one of the two enumerated coverage sources, so no Axler heading is counted" | Axler is the primary source, 151 gated rows across the two pages |
| 53 | "126 gated entries" | gate reports 265 harvested |
| 147 | definitions justified by "the enumerated Conrad/**UCL**/Treil treatments" | names the deleted source; Knapp and Axler absent |
| 168 | "84 scoped items … 72 proof contracts" | 88 scoped items, 76 contracts |

One of these is not cosmetic. **Line 159 lists
`ex-primary-decomposition-over-q-with-an-irreducible-quadratic` under
"`statement: literature-derived`, `proof: ai-altered`". Line 327 of the same file
says its step-5 provenance "is therefore `statement: ai-altered`,
`proof: ai-altered`."** The item-by-item table step 5 reads still carries the old
label; only the appended narrative was corrected. That is the failure shape you
asked me to hunt, inside the corrective pass itself: the source moved, the
provenance row did not.

---

## 2. Batch 3, page 94 — ready, with one gap I owe you

The third pass did not touch this pair and nothing regressed: 34/16 items
unchanged, 0 dependency violations, gates clean, the Axler and Treil source
blocks intact, `thm-least-squares-solutions-and-normal-equation` rowed to Treil
§5.4.1. **`ready-for-splice`.**

**A source gap I did not catch in round 1.** Two items are tagged
`statement: literature-derived` and have no backing in either declared source:

- `def-gram-matrix-and-gram-determinant`
- `thm-gram-determinant-detects-linear-independence` (rowed only in the
  `canonical` design checklist, not against any source heading)

"Gram matrix" and "Gram determinant" occur **0 times in the whole 404-page
Axler** and **0 times in Treil Ch. 5** (its 23 "Gram" hits are all
Gram–Schmidt). In round 1 I verified page 94's 25 replacement rows and Axler's
numbered results and did not test its unrowed items; that was my miss, and it is
the same class as the page-88 defect at one-fifth the size.

It does not block the splice — nothing about it is item text or an id — but it is
a real step-5 obligation with a hard step-7 consequence: a `literature-derived`
or `ai-altered` item needs a reader-visible `sources.references` URL, and neither
of page 94's two live URLs contains this material. Either add a source that
states the Gram determinant criterion and row it, or retag both items with a
recorded elementary derivation. Do not write Axler as the reference for them.

Also carry forward from round 1: the notes' stale ledger fix above covers this
pair too (line 49's Treil range).

---

## 3. Batch 7 — the superseded instruction, corrected cleanly

**`ready-for-splice`.** Every routed item landed, and the headline fix landed the
way F7.1 did.

- **The corollary now takes the split factorisation.**
  `cor-eigenvalue-form-of-the-transfer-matrix-trace` reads *"Let $K$ be a field,
  $p\ge1$, and $A\in M_p(K)$. If $\chi_A(t)=\prod_{i<p}(t-\lambda_i)$ in $K[t]$,
  then the transfer-matrix trace series is $\sum_{i<p}(1-\lambda_i x)^{-1}$."*
  `def-algebraically-closed-field` is gone from `deps` — and from the contract,
  the input map, and the whole batch (`algebraically-closed` now occurs 0 times
  in pages, contracts and coverage). The hypothesis is now byte-for-byte what its
  two published consumers state.
- **The round-1 citation-fidelity defect is closed.** `[L7]` used to quote
  `thm-trace-is-sum-of-eigenvalues` starting at "then …". Both consumer quotes
  now carry their hypotheses in full: *"Let $T$ be an endomorphism of an
  $n$-dimensional vector space over $F$. If $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$
  in $F[x]$, then …"*, and the same for spectral mapping.
- **The example is over $\mathbb Q$ and the mathematics checks.**
  `ex-closed-walks-in-the-complete-graph`: $A=J-I$, the all-ones vector and
  $e_i-e_0$ for $1\le i<p$, eigenvalues $p-1$ and $-1$,
  $\chi_A(t)=(t-(p-1))(t+1)^{p-1}$ split in $\mathbb Q[t]$,
  $\operatorname{tr}(A^n)=(p-1)^n+(p-1)(-1)^n$. I checked the basis claim
  specifically: $\mathbf 1$ escapes the sum-zero span because $p\neq0$ in
  $\mathbb Q$ — the argument works over $\mathbb Q$ for every $p$ and would not
  over $\mathbf F_p$. The $p=1$ boundary gives 0 and the contract records it.
  No $\mathbb C$, no FTA, no forward reference.
- **The lemma was removed, with no orphan.**
  `lem-monic-polynomials-split-over-an-algebraically-closed-field` is absent from
  `pages.json`, the contract scope and the contract map, and has **0 occurrences
  in `coverage.json`** — it never acquired a row, so none was left behind. The
  notes record the removal explicitly and keep the second-pass section as
  historical record. A-page count is back to 32.
- **The provenance row moved with the statement.**
  `cor-eigenvalue-form-of-the-transfer-matrix-trace` is now tagged
  `ai-altered`/`ai-altered` with a rationale naming the new hypothesis:
  *"adapted to arbitrary matrices whose characteristic polynomial is given as a
  product of linear factors over the base field."* This is the thing that failed
  in batch 6 and on page 88, and it did not fail here.
- **F7.4 fixed, better than asked.** `def-binomial-coefficient` and
  `thm-pascals-rule` are in `deps`, in the contract citations, and in **both**
  input maps. The `thm-pascals-rule` quote is the hockey-stick identity itself,
  $\sum_{i<n+1}\binom{i}{k}=\binom{n+1}{k+1}$ — I opened the published item and
  the library states hockey-stick as clause 2 of that theorem. (Step-5 nit: the
  strategy still says the identity is "obtained by a short induction from
  Pascal's rule"; the library publishes it outright, so that clause can go.)
- **F7.5 fixed.** The Stanley Cor 4.7.4 row is `deferred` and its reason names
  the true obstruction — order 94 and order 141, both below 195, neither
  published nor in the declared closure, with the in-flight status of each
  recorded.
- **F7.7 fixed.** One A-page summary, two paragraphs (74/79 words), no B-page
  summary body.
- **F7.8 fixed.** `def-finite-words-factor-avoidance-and-prefix-states` declares
  `def-natural-numbers`, which is homed on `construction-of-the-natural-numbers`
  and in order 195's closure; the provenance rationale records why ("supplies the
  natural-number index set for a finite sequence" — the free-group word page is
  out of closure). Thin but not empty, and correct.

### Does this pass meet the F7.1 standard?

**For the corollary, yes** — Statement, `deps`, contract citations, input map,
the removed input, and the provenance row all moved together, and the consumer
quotes were repaired at the same time. That is the whole shape.

**For the example, not quite.** Two carry-forwards, both declaration-level:

1. **`ex-closed-walks-in-the-complete-graph` declares one dependency and uses
   three.** Its Statement is *"Closed walks of length $n$ in $K_p$ are counted by
   $(p-1)^n+(p-1)(-1)^n$"*, and contract step 2.1 asserts "identify the trace with
   the number of closed walks of length $n$" from inputs `step 1.1` and the
   eigenvalue corollary alone. It needs
   `def-finite-weighted-digraph-walk-and-transfer-matrix` to say what the
   adjacency matrix and a closed walk are, and
   `thm-weighted-walks-are-entries-of-transfer-matrix-powers` (or
   `cor-closed-walk-trace-generating-functions`) to license
   $\operatorname{tr}(A^n)=\#\{\text{closed }n\text{-walks}\}$. Every other
   walk/transfer example on the same B page declares that machinery —
   `ex-fibonacci-monomer-domino-tilings-by-transfer-matrix` cites the walk
   theorem, `ex-lucas-cyclic-tilings-and-the-trace-method` cites the trace
   corollary, `ex-north-east-west-walks-…` cites the cofactor theorem. This one
   was re-based from $\mathbb C$ to $\mathbb Q$ and its walk-counting obligation
   stayed behind. Both citations are published and in closure; the fix is two
   `deps` entries and one contract input.
2. **The Stanley locator is still narrower than its enumeration** — unrouted
   since round 1, third pass in a row. It reads "…Section 4.7.1 through Corollary
   4.7.4, then Examples 4.7.6-4.7.7 and Proposition 4.7.8 … Example 4.7.16",
   while the rows now correctly include **Example 4.7.5**, §4.7, §4.7.3, §4.7.4,
   Prop 4.7.13, Lemma 4.7.14 and Ex 4.7.15. At step 3 the locator was wider than
   the enumeration; now it is narrower. Widen it to the range actually read.

I let batch 7 through on these because neither touches item text, an id, or a
mathematical claim: both are declarations that stay cheap through step 5, and the
step-5 author who writes that proof must cite the walk theorem anyway. Page 88 is
`not-ready` on a different footing — a dead source can force the page to be
re-scoped, and that is a scaffold change, not a declaration edit.

---

## 4. Did anything else regress?

All against disk, both batches:

| check | batch 3 | batch 7 |
|---|---|---|
| items | 26 / 12, 34 / 16 — unchanged | 32 / 15 — unchanged |
| dependency violations (closure, order, unresolved) | **0** | **0** |
| B-leaf integrity (any item targeting a B item) | **0** | **0** |
| `ai-generated` statements that are load-bearing | 0 of 17 | 0 |
| `coverage-checklist` | 2 pages, 265 harvested, **0 errors 0 warnings** | 1 page, 68 harvested, **0/0** |
| `content-policy --manifest-only` | 88 items, **0/0** | 47 items, **0/0** |
| `validate-plan` | OK — acyclic, no forward refs, no B-page deps, no unresolved ids | same run |
| proof contracts | 76 contracts, 181 citations, **0 empty arrays** | 38, 113, **0** |
| published quotes matched to disk | **104 / 104 exact** | **46 / 46 exact** |

**150 of 150 published contract quotes are exact**, up from 144 at round 1, so
the newly populated citations are real clauses. Closures recomputed from
`plan-spec.json`: order 88 → 38 pages (37 → 38, the `splitting-fields` edge, as I
simulated at step 3), order 94 → 37, order 195 → 43. Every page in all three
closures is published.

**Citation-fidelity sweep.** I re-extracted every contract quote and looked for
the F7.2 shape — a quote that is an exact substring but starts past its
hypothesis. Batch 3: none. Batch 7: six quotes open mid-sentence, and I read each
against its published item. Five drop only a setup clause
(`thm-formal-power-series-unit-criterion`, `prop-coefficient-extraction-…`). One
is worth a step-5 line: `[L2]` in `thm-hadamard-product-of-rational-series-is-rational`
quotes clause 2 of `cor-independent-set-is-no-larger-than-a-finite-spanning-set`
without its "suppose $V$ has a spanning subset $S$ with $S\approx n$" hypothesis —
but the contract's step 1.1 explicitly works inside a finite span, so the
hypothesis is discharged. Nonfatal; the quote should carry it.

**Ids versus content.** The third pass minted no id in either batch and removed
one in batch 7. I re-read every id the pass touched: none overclaims relative to
its title and strategy. Nothing needs a rename, which is the point of checking
now.

---

## 5. For the orchestrator

**A source substitution needs a liveness test *at the moment of the swap*, and
this run does not have one.** I wrote in round 1 that liveness was being checked
for the wrong question. It is worse than that. `tools/url-sweep.mjs` exists and
does exactly this job, but grepping the tools and the normative docs, its only
caller is `tools/run-wave.mjs` — the **audit** driver. `run-level.mjs` never
invokes it, and its inputs are `--manifests` and `--ledgers`, not a
`coverage.json`. So the build side has a liveness tool it never runs, and would
not point it at the artifact that carries the source URLs if it did.
`coverage-checklist` validates row structure and never fetches. Two dead sources
in three passes on one page is not bad luck.

**`research/frontier-13-batch-1.coverage.json` carries the same dead Knapp URL.**
Outside my scope — batch 1 is not mine and I did not audit it — but the fix3 task
justified the choice partly by "already in this run's source ledger (batch 1 uses
it) and verified live", and that verification is stale for batch 1 too. Whoever
owns batch 1 should re-check it before step 4. A one-line sweep over all seven
`coverage.json` files would settle it.

**The nonfatal findings are still not travelling.** Round 1 flagged seven
findings that never reached a fix task; four of those were unfixed for that
reason. This round, three of the same kind were dropped again: F3.3's B-page
counterexample (third pass in a row), the Stanley locator (third pass in a row),
and the batch-3 notes correction (second pass in a row, and it has now produced a
provenance-label contradiction inside one file). The fix3 tasks routed the
mathematical findings faithfully and correctly; it is the bookkeeping tail that
keeps falling off, and one of those tail items has now become a step-5 input that
says two different things.

**A note for groups A and C, if page 88 is not the only one.** The test that
caught this is cheap and neither gate performs it: take every URL in a batch's
`coverage.json`, fetch it, and separately confirm the fetched document contains
the terms the rows claim. The first half takes seconds. The second half is what
found that Treil Ch. 4 has zero occurrences of "minimal polynomial", and it is
what would have found this before a third pass was spent on it.

**Nothing blocks me.** I re-check page 88 when Beta 3 reports, then run 6a/6b for
batches 3 and 7. Step 4 propagation, step 6c and step 8 belong to group A.

---

## 6. Exact remaining work

**3-A (page 88) — blocking:**

1. **Replace the dead Knapp URL.** Open Project Euclid's open-access Chapter V
   (*Theory of a Single Linear Transformation*) at
   `https://projecteuclid.org/ebooks/books-by-independent-authors/Basic-Algebra/toc/10.3792/euclid/9781429799980`,
   confirm §3 and §5 and Theorem 5.19 at that edition's pagination, and re-record
   the URL, locator and page numbers. Verify by opening, not by HTTP status — the
   old URL returned 200 in a search index and 404 from the server.
2. If Chapter V does not carry Theorem 5.19 as claimed, **report it as a blocker
   rather than absorbing it**: the alternative is restricting the page to the
   split case, and that is the owner's decision.
3. **F3.3:** dispose Conrad's unnumbered closing paragraph after Corollary 5.5
   (inside the declared range) and add the B-page counterexample it supplies —
   $\operatorname{diag}(1,2)$ and
   $\left(\begin{smallmatrix}0&1\\0&-1\end{smallmatrix}\right)$ diagonalisable
   with non-diagonalisable sum.
4. **Correct the notes instead of superseding them** — the seven rows in §1.5,
   and in particular reconcile line 159 with line 327 on
   `ex-primary-decomposition-over-q-with-an-irreducible-quadratic`'s provenance.

**3-B (page 94) — ready; carry into step 5:** source or retag
`def-gram-matrix-and-gram-determinant` and
`thm-gram-determinant-detects-linear-independence`; the notes' stale Treil range.

**7 — ready; carry into step 4/5:** add
`def-finite-weighted-digraph-walk-and-transfer-matrix` and
`thm-weighted-walks-are-entries-of-transfer-matrix-powers` to
`ex-closed-walks-in-the-complete-graph`'s `deps` and to contract step 2.1's
inputs; widen the Stanley locator to the range actually enumerated; carry the
`[L2]` hypothesis into the Hadamard quote and drop the redundant "short
induction" clause in the repeated-pole strategy.
