# frontier-13 — Alpha **group B**, step 3 → 4 re-check

**Alpha:** Claude Opus 5 (`claude-opus-5[1m]`), `xhigh`, 1,000,000-token window.
**Scope:** batches **3** and **7** only. Batches 1, 2, 4, 5, 6 were not opened.
**Date:** 2026-08-15. **Authored nothing; edited no batch file, no spec, no item.**

Every verdict below is against disk, not against a Beta's account of its own
repair. Where a repair claims a source, I opened the source: Treil LADW Ch. 4,
Ch. 5 and Ch. 9 (HTML, live), Axler LADR4e (404-page PDF, `pypdf` in a venv),
Conrad *The Minimal Polynomial and Some Applications* (PDF), Conrad *Potential
Diagonalizability* (PDF). No blockers; no permission prompt raised.

---

## Verdicts

| pair | A page | items A/B | verdict |
|---|---|---|---|
| 3-A | `diagonalisation-and-the-minimal-polynomial` (88) | 26 / 12 | **not-ready** |
| 3-B | `inner-product-spaces-and-orthogonality` (94) | 34 / 16 | **ready-for-splice** |
| 7 | `linear-recurrences-and-rational-generating-functions` (195) | 32 / 15 | **not-ready** |

Both `not-ready` verdicts are cheap scaffold edits, not re-scaffolds. The
substitution was done **honestly** — I found no drifted locator and no swapped
URL anywhere. The failures are of a different kind: two findings were never
routed to the Betas, one repair introduced a new undischarged hypothesis, and
**my own step-3 replacement recommendation for page 88 was wrong**, which Beta 3
recorded faithfully rather than papering over. Details below.

---

## Finding-by-finding, by my step-3 ids

The orchestrator's fix tasks renumbered my findings. Mapping, so nothing is lost:
orchestrator F3.4 = my named-challenge 7; orchestrator F3.5 and F7.4 = new
contract items; orchestrator F7.2 = my F7.3; orchestrator F7.3 = my F7.6. **My
F3.4, F3.6, F3.7, F7.2, F7.4, F7.7 and F7.8 were not carried into any fix task.**
Four of those seven are unfixed as a direct result.

### Batch 3

| id | finding | verdict |
|---|---|---|
| F3.1 | dead UCL source, 47 rows | **partially fixed** — clean for page 94, materially incomplete for page 88 |
| F3.2 | multiplicity criterion missing | **fixed** |
| F3.3 | Conrad Cor 5.5 undisposed | **partially fixed** — corollary added, B-page counterexample not |
| F3.4 | Conrad Thm 5.2 iff vs one-directional item | **not fixed** (not routed) |
| F3.5 | least squares / normal equation missing | **fixed** |
| F3.6 | "splits" uncitable on page 88 | **not fixed** (not routed), and a new id now carries the term |
| F3.7 | third B-page summary paragraph | **not fixed** (not routed) |

**F3.1 — fixed for page 94, not for page 88.**
The Kim URL is gone from `coverage.json`, `pages.json` and
`proof-contracts.json` (0 occurrences in each). Beta 3 kept a
`replacement_audit` block carrying all 47 former rows, each marked
`present-in-replacement` (naming the item) or `not-present-in-replacement` with
a specific reason. That is the right artifact and I could not fault a single row
of it.

*Page 94 (25 rows): genuinely repaired.* 23 rows re-anchored to Axler. I opened
LADR4e and checked the claimed numbered results: **6.1, 6.2, 6.4, 6.7, 6.12,
6.14, 6.17, 6.21, 6.22, 6.25, 6.26, 6.27, 6.30, 6.32, 6.35, 6.42, 6.46, 6.49,
6.51, 6.52, 6.55, 6.57, 6.61, 7.1, 7.5, 7.6, 7.9, 7.44, 7.49, 7.51, 7.53, 7.57,
7.58, 7.60 — all present at the claimed numbers with matching content.** The two
non-replacements are honest and correct: Sylvester's law of inertia genuinely is
not in the declared Axler range (and it is an already-published item that keeps
its own source record), and the real three-space Gram–Schmidt computation stays
on live Treil §5.3.2 rather than being misattributed to Axler's integral
example. Two independent treatments now hold with a textbook and a monograph.

*Page 88 (22 rows): 18 found no replacement, and 9 items are left with no source
at all.* Beta 3 recorded this plainly — but recording it does not discharge it.
Treil Chapter 4 contains **zero** occurrences of "minimal polynomial", "primary",
"coprime" or "generalized eigenspace". It is *Introduction to Spectral Theory*;
11 of its 28 harvested rows dispose to **already-published** items on the
prerequisite page. Its net new contribution to page 88 is the diagonalisability
definition, the distinct-eigenvalues corollary, the multiplicity criterion and
the real-versus-complex example. The whole minimal-polynomial and
primary-decomposition spine — what the page is *about* — now rests on Conrad's
15-page blurb alone, and these nine items have no source row in the ledger:

`def-primary-component-and-generalised-eigenspace`,
`cor-minimal-polynomial-divides-characteristic-polynomial`,
`lem-coprime-kernel-decomposition`,
`thm-primary-decomposition-for-an-endomorphism`,
`cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial`,
`ex-minimal-polynomials-of-scalar-diagonal-and-zero-dimensional-endomorphisms`,
`ex-nilpotent-shift-and-its-single-primary-component`,
`ex-primary-decomposition-over-q-with-an-irreducible-quadratic`,
`fs-a-split-minimal-polynomial-always-gives-diagonalisability`
(and `cor-primary-projections-are-polynomials-in-the-endomorphism`, unrowed
before and after).

This is not merely untidy. The notes tag every one of them
`statement: literature-derived`, justified by "the enumerated Conrad/UCL/Treil
treatments or by Axler" — a sentence that still names the dead source and that
is now false of all four enumerated ranges. At step 7,
`level-coverage.mjs --verify-current-context` requires a reader-visible
`sources.references` URL for every `literature-derived` / `ai-altered` item, and
for these nine there is no honest URL to write.

**This one is on me.** My step-3 F3.1 asserted Treil Ch. 4 "covers every Kim row
on page 88 — minimal polynomial context, diagonalisability, distinct eigenvalues,
real vs complex". The chapter never mentions the minimal polynomial. Beta 3
followed the instruction exactly and its audit is what exposed the error.

*Remedy, partly verified by me:*
- **Treil LADW Chapter 9** (live, HTTP 200, harvestable ToC — the same book
  already adopted) §9.1 *Cayley–Hamilton Theorem* and §9.3 *Generalized
  eigenspaces. Geometric meaning of algebraic multiplicity* (§9.3.1 Invariant
  subspaces, §9.3.2 Generalized eigenspaces, §9.3.3, §9.3.4). Backs
  `cor-minimal-polynomial-divides-characteristic-polynomial`,
  `def-primary-component-and-generalised-eigenspace` and the split-case
  decomposition. **§9.4–9.5 must be declined** to
  `triangularisation-and-jordan-canonical-form` (order 90) — they are Jordan
  form, that page's assigned topic.
- **Axler LADR4e Chapter 8** — already adopted for the other pair — covers
  generalized eigenvectors and eigenspaces extensively (61 and 46 occurrences)
  but over $\mathbf C$ (8.26 opens "Suppose $\mathbf F=\mathbf C$"), so it backs
  the split case only.
- **Still unsourced after both:** the coprime-kernel lemma and the general
  primary decomposition over an arbitrary field. I checked and ruled out Conrad's
  own blurb (0 occurrences of "primary"/"coprime" across all 7 sections, so
  widening the Conrad range does **not** help), Conrad `splittingmodules` and
  Conrad `modulesoverPID`. Beta 3 must find and enumerate a source that actually
  states it (Hoffman & Kunze §6.8 is the canonical treatment) — **opened at the
  locator and heading-enumerated, not assumed.** That is the specific step that
  failed the first time.

**F3.2 — fixed.** `thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree`
added at index 16/26, rowed to Treil §4.2.5 and Theorem 4.2.8, with
`def-algebraic-and-geometric-multiplicity-of-an-eigenvalue` and
`thm-geometric-multiplicity-does-not-exceed-algebraic-multiplicity` in `deps`
(both published, both in order 88's closure). I checked the statement against
Treil 4.2.8 verbatim: Treil assumes "exactly $n=\dim V$ eigenvalues (counting
multiplicities)" — the split condition — and concludes the multiplicity
equivalence. The library item folds that standing hypothesis into the iff as a
conjunct. Both directions survive the fold; title, id and strategy agree.

**F3.3 — half done.** `cor-polynomials-in-commuting-diagonalisable-endomorphisms-are-diagonalisable`
added at index 24/26; the Conrad locator now ends at Corollary 5.5 and the row
exists. The title spells out $F[A,B]$ as "every finite linear combination of
products of their powers" rather than using undefined shorthand — accurate to
Conrad and better written than the source. **The B-page counterexample I asked
for was not added**: the B page is still 12 items, and Conrad's ready-made
witness ($\operatorname{diag}(1,2)$ and $\left(\begin{smallmatrix}0&1\\0&-1\end{smallmatrix}\right)$
diagonalisable with non-diagonalisable sum) has no home. The new corollary
therefore ships with nothing showing its commuting hypothesis is necessary.

**F3.4 — not fixed, and the coverage row now overclaims.** The Conrad Thm 5.2 row
was reworded from "if and only if it commutes" to "**exactly when** it commutes"
and still disposes `included` to
`thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms`,
whose title remains one-directional: "Every pairwise commuting family … is
simultaneously diagonalisable". Conrad's Thm 5.2 really is an iff (PDF p. 9).
The converse is one line. Add it to the same item and make the title an iff —
do not mint a second id.

**F3.6 — not fixed, and now slightly worse.** I recomputed page 88's closure: 37
pages, `splitting-fields` **not** among them, so
`def-polynomials-that-split-and-splitting-fields` still cannot be cited. The
scaffold uses "split"/"splits" 25 times, and the repair minted a **new id**
containing the term:
`thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree`.
Ids are immutable once on `main`, so this is the last free moment. Either reword
to "is a product of linear factors" (zero cost, and
`thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots` already
had the same issue) or add `splitting-fields` to order 88's `requires` — I
re-simulated it at step 3: closure 37 → 38, zero cross-pair seams.

**F3.7 — not fixed.** The third paragraph, "The B pages supply concrete
computations and misconception checks…", is still in the notes' §"Reader-facing
page summaries" after page 94's two paragraphs. An A-page summary is exactly two
paragraphs and a B page has no authored summary body. Drop at step 5.

**New item added by the repair, and a gap in it.**
`lem-minimal-polynomial-is-invariant-under-field-extension` (index 4/26) is
mathematically sound — I checked the argument line by line and it is the
standard one: for nonzero $q=\sum c_ix^i\in K[x]$ killing $A$, extract an
$F$-basis $d_1,\dots,d_s$ of the $F$-span of the coefficients, write
$0=q(A)=\sum_j d_j\bigl(\sum_i a_{ij}A^i\bigr)$ with $\sum_i a_{ij}A^i\in
M_n(F)$, and $F$-independence of the $d_j$ forces each to vanish entrywise; some
one of them is a nonzero polynomial of degree $\le\deg q$. With
$\mu_{A,K}\mid\mu_{A,F}$ and equal degrees and monicity, they coincide. I also
verified the claimed source: Conrad, *Potential Diagonalizability*, **Theorem
4(1)** — *"For each $A\in M_n(F)$, its minimal polynomial in $F[T]$ is its
minimal polynomial in $E[T]$"* — live at
`https://kconrad.math.uconn.edu/blurbs/linmultialg/potdiagonalizable.pdf`
(HTTP 200, 6 pages), and its proof runs through the same Lemma 3 linear-relation
argument the strategy encodes.

**But that source is in no ledger and carries no URL.** It appears nowhere in
`coverage.json`, has no range or heading enumeration, and the notes name it
without a link. Under the recheck contract a new item needs "a coverage row whose
disposition changed to `included` naming it" — this one has none. Add the source
with its read range (Lemma 3 and Theorem 4) and its rows; the URL above is
verified.

`thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors`
now cites the new lemma and states determinant-invariance of $\chi_T$ under
scalar extension as an explicit step. That closes the one 30-second seam I
recorded at step 3. It is more machinery than the proof strictly needs, but the
fix task asked for invariance proved rather than assumed and this delivers it.

### Batch 7

| id | finding | verdict |
|---|---|---|
| F7.1 | CH corollary drops field and invertibility | **fixed — both halves** |
| F7.2 | "has a root" cited where consumers need "splits" | **not fixed** (not routed) |
| F7.3 | reciprocity stated in unreachable $K(x)$ | **fixed** |
| F7.4 | binomial machinery uncited | **not fixed** (not routed) |
| F7.5 | false decline reason about reading order | **fixed** |
| F7.6 | Stanley Ex 4.7.5 undisposed; corollary with no B consumer | **fixed**, but the new example has a new defect |
| F7.7 | B-page summary authored | **not fixed** (not routed) |
| F7.8 | `def-finite-words-…` declares `deps: []` | **not fixed** (not routed) |

**F7.1 — fixed, both halves, and I checked the second specifically.**
The title is now "For an **invertible** matrix **over a field**, Cayley–Hamilton
makes every matrix-power entry and trace sequence linearly recurrent". The
strategy opens "Let $K$ be a field", so the field-only `thm-cayley-hamilton` is
correctly licensed and the ring/field mismatch is gone; retaining
`def-coordinate-endomorphism-over-a-commutative-ring` in `deps` is right, since a
field is a commutative ring and the two now agree. `cor-invertible-matrix-has-unit-determinant`
is published and cited as `[L6]` with `uses: ["1.1","2.1"]`. Critically, the
contract's `degenerate` boundary — which at step 3 was the unanchored template
sentence — now reads *"Planned step 1.1 uses invertibility to make $\det(A)\ne0$
and therefore excludes the singular case in which the required trailing
recurrence coefficient can vanish."* The obligation moved with the claim.

**F7.2 — not fixed, and the contract now hides the gap.**
`cor-eigenvalue-form-of-the-transfer-matrix-trace` still takes
`def-algebraically-closed-field` as input `[L2]`, quoting *"every nonconstant
polynomial $p\in F[x]$ has a root in $F$"*, and in the same step 1.1 applies
`thm-spectral-mapping-for-polynomials` `[L6]` and `thm-trace-is-sum-of-eigenvalues`
`[L7]`. I reopened both published items. Each takes the split factorisation as an
explicit hypothesis of its Statement:

> Let $T$ be an endomorphism of an $n$-dimensional vector space over $F$. **If**
> $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$ in $F[x]$, **then** $\operatorname{tr}(T)=\sum_{i<n}\lambda_i$.

The contract's `[L7]` quote is literally `"then $\operatorname{tr}(T)=\sum_{i<n}\lambda_i$."`
— it begins at the consequent and drops the hypothesis. Under the
citation-fidelity rule that is not the smallest faithful shortening; it is a
restatement with a hypothesis removed, and it conceals the very gap it should
expose. Having one root is not having the factorisation, nothing bridges them,
and I re-confirmed no published item says polynomials split over an
algebraically closed field.

**F7.6 — fixed, but the new example inherits F7.2 and adds to it.**
Stanley Ex 4.7.5 is rowed, §4.7 and §4.7.3 gained rows, and §4.7.4, Prop 4.7.13,
Lemma 4.7.14 and Ex 4.7.15 all gained dispositions. `ex-closed-walks-in-the-complete-graph`
was added at index 6/15 and cites `cor-eigenvalue-form-of-the-transfer-matrix-trace`,
so the landmark corollary finally has a worked instance. Good.

**The new defect:** the example's strategy says "work over $\mathbb C$" and its
sole contract citation quotes "**Over an algebraically closed field**, …". To
instantiate that at $\mathbb C$ you need the fundamental theorem of algebra. I
computed order 195's closure: 43 pages, and `the-fundamental-theorem-of-algebra`
(order 139, `status: planned`) is **not** in it. The library has no item stating
that $\mathbb C$ is algebraically closed. The hypothesis cannot be discharged.

Note that the batch's own dependency-closure audit reports
`out_of_closure_published_deps: 0` and is right to — the missing fact is not a
declared dependency at all, so no gate can see it. This is a gate blind spot,
not a gate failure.

**F7.2 and this defect close together with one edit.** Restate
`cor-eigenvalue-form-of-the-transfer-matrix-trace` with hypothesis *"$\chi_A$
splits over $F$"* instead of *"$F$ algebraically closed"*. Then it matches its
two published consumers' hypotheses exactly, no bridging lemma is needed, and
the complete-graph example works over $\mathbb Q$ — where $\chi_{A(K_p)}$ splits,
eigenvalues $p-1$ and $-1$ — with no $\mathbb C$ and no FTA. If Beta 7 prefers to
keep algebraic closure in the Statement, it must add
`lem-monic-polynomials-split-over-an-algebraically-closed-field` (induction on
degree from `cor-factor-theorem-over-a-commutative-ring`, published and in
closure) **and** the example still needs re-basing off $\mathbb C$.

**F7.3 — fixed.** `the-field-of-fractions-and-localisation` is in order 195's
`requires` in `plan-spec.json`; I recomputed the closure and it is present.
`prop-reciprocity-for-biinfinite-linear-recurrences` now states
$F_+(x)=-F_-(x^{-1})$ **in $K(x)$**, and `cor-rational-function-field-as-a-fraction-field`
(published) is in both `deps` and the contract with an exact Statement quote. The
conclusion was reached honestly, not restated to dodge $K(x)$; the strategy names
the rational-function equality explicitly, matching Stanley's Note. One step-5
seam worth naming: nothing yet licenses the substitution $x\mapsto x^{-1}$ as a
$K$-algebra map of $K(x)$. Nonfatal, but it should be a numbered step.

**F7.4 — not fixed.** `lem-binomial-series-for-a-repeated-pole` still declares
only `thm-formal-power-series-unit-criterion` and
`prop-coefficient-extraction-linearity-and-extensionality`, in `deps` and in its
contract. Its Statement contains $\binom{n+j-1}{j-1}$ and its strategy still
says "applying the hockey-stick identity" with nothing cited for either.
`def-binomial-coefficient` and `thm-pascals-rule` are published and I confirmed
`finite-counting-and-binomial-coefficients` **is** in order 195's closure.

**F7.5 — fixed.** The Stanley Cor 4.7.4 row is now `deferred` (was
`out-of-scope`) and reads: *"That theorem is homed on
inner-product-spaces-and-orthogonality at order 94, below order 195, but that
page is not in this pair's declared requires closure."* Accurate on both the
order and the true obstruction.

**F7.7 — not fixed.** The notes still carry a two-paragraph authored summary for
`linear-recurrences-and-rational-generating-functions-examples`. Drop at step 5.

**F7.8 — not fixed.** `def-finite-words-factor-avoidance-and-prefix-states` still
declares `deps: []`.

**Bookkeeping:** the Stanley locator was **not** widened to match the new rows.
It still reads "Section 4.7.1 through Corollary 4.7.4, then Examples 4.7.6-4.7.7
and Proposition 4.7.8 … Example 4.7.16, printed pp. 583-585", while the
enumeration now correctly includes Ex 4.7.5, §4.7, §4.7.3, §4.7.4, Prop 4.7.13,
Lemma 4.7.14 and Ex 4.7.15. At step 3 the locator was wider than the
enumeration; now it is narrower. Same defect, opposite sign.

---

## Did the repair break anything else?

Systematic checks across both batches, all against disk:

- **Intra-page dependency order:** every A and B page re-walked; **0 violations**.
  All five new items sit after their same-pair dependencies (indices 4, 16, 24 of
  26; 28 of 34; 6 of 15).
- **B-leaf integrity:** no `ex-`/`cex-`/`fs-` id is a dependency target in either
  batch. Every `ai-generated` statement in both batches is a B-page leaf; none is
  load-bearing. Batch 7's one load-bearing seam proposition,
  `prop-ring-trace-agrees-with-the-published-field-trace`, is tagged
  `ai-altered`/`ai-altered`, not `ai-generated` — correct.
- **Unresolved dependencies:** none in either batch.
- **Gates, re-run by me:** `coverage-checklist` 0 errors on both (2 pages / 201
  harvested; 1 page / 68 harvested); `content-policy --manifest-only` 0 errors on
  both (88 and 47 scoped items). The Betas' quoted gate output matches what I
  reproduced.
- **Statements versus titles on every repaired item:** no title claims more than
  its strategy delivers. The four new batch-3 statements and the repaired
  batch-7 corollary are each accurate as titled — this is the defect class that
  reaches step 7 intact, and it is clean here.

**Proof-contract citations — the hollow-contract check.** Both batches report 0
empty arrays (76 contracts / 176 citations; 38 / 112). Rather than trust the
count I re-extracted **every** citation whose source is a published item and
matched its quote against the item file on disk after whitespace normalisation:

| batch | published quotes | exact | mismatched | same-batch step-5 obligations |
|---|---:|---:|---:|---:|
| 3 | 99 | **99** | 0 | 77 |
| 7 | 45 | **45** | 0 | 67 |

**144 of 144 exact, 0 placeholders** — up from 134 at step 3, so the newly
populated citations are real clauses, not filler. The one citation-fidelity
defect is `[L7]` in `cor-eigenvalue-form-of-the-transfer-matrix-trace`, described
under F7.2: exact as a substring, but truncated past its hypothesis.

**Did I find the batch-6 failure shape here?** I looked specifically for a
changed Statement whose dependencies, contract input map or coverage row failed
to follow. Batch 7's F7.1 repair is the clean counter-example — Statement,
`deps`, contract citations, input map and the `degenerate` boundary all moved
together. The instances I did find are the mirror image: **coverage rows that did
not move with content that stayed put** (F3.4's iff row) and **provenance
justifications that did not move with a deleted source** (page 88's nine spine
items).

**Notes hygiene, both batches.** Beta 3 appended a repair section headed "This
section supersedes the earlier source and check summaries where they conflict"
rather than correcting them. The consequence is that
§"Canonical-coverage source ledger" still lists **Kim's dead URL twice**, still
says Treil Ch. 5 excluded §5.4, still says Axler "is supplementary rather than
one of the two enumerated coverage sources", and still reports "126 gated
entries" against 187 rows on disk; and §"Per-item provenance rationale" still
justifies definitions by "the enumerated Conrad/**UCL**/Treil treatments". Step 5
reads these notes to write `sources.references`. The gated artifacts are correct;
the narrative record contradicts them.

---

## Ids versus content

The last free moment for this, so I checked every id the repair touched or minted.

- `thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree`
  — accurate, but carries "splits" on a page that cannot cite the term (F3.6).
  The only id-level flag in either batch.
- `cor-cayley-hamilton-recurrences-for-matrix-powers` — the id never claimed
  "every matrix"; the overclaim was in the title and the title is now correct.
  No rename needed, and none is possible.
- `lem-minimal-polynomial-is-invariant-under-field-extension`,
  `cor-polynomials-in-commuting-diagonalisable-endomorphisms-are-diagonalisable`,
  `thm-least-squares-solutions-and-normal-equation`,
  `ex-closed-walks-in-the-complete-graph`,
  `prop-reciprocity-for-biinfinite-linear-recurrences` — each id matches its
  narrowed content. No id overclaims relative to its title and strategy.

---

## Exact remaining work

**3-A (page 88) — blocking:**
1. Source the nine unbacked spine items. Treil Ch. 9 §9.1 and §9.3 (verified
   live) plus Axler Ch. 8 cover the Cayley–Hamilton and split-case parts; the
   coprime-kernel lemma and the general primary decomposition still need a source
   that states them, opened and heading-enumerated. Decline Treil §9.4–9.5 to
   order 90.
2. Add Conrad *Potential Diagonalizability* to the ledger with its range and
   rows; URL verified above.
3. F3.4: make `thm-simultaneous-diagonalisation-…` an iff in the same item.
4. F3.6: reword "splits" or recommend the `splitting-fields` edge.
5. F3.3: add the B-page counterexample.
6. Correct the notes' source ledger and provenance rationale instead of
   superseding them.

**3-B (page 94) — ready, carry two items into step 5:** drop the third summary
paragraph (F3.7); the notes' stale ledger fix above covers this pair too.

**7 — blocking:**
1. Restate `cor-eigenvalue-form-of-the-transfer-matrix-trace` with a
   split-characteristic-polynomial hypothesis; re-base
   `ex-closed-walks-in-the-complete-graph` off $\mathbb C$ (F7.2 + the new
   defect, one edit).
2. F7.4: add `def-binomial-coefficient` and `thm-pascals-rule` and name the
   hockey-stick identity.
3. F7.8: cite the finite-sequence notion. F7.7: drop the B-page summary.
4. Widen the Stanley locator to match the enumeration.

---

## For the orchestrator

**The routing gap is the largest process finding.** Seven of my step-3 findings
never reached a fix task, and four are unfixed for that reason alone — including
F7.2, a genuine undischarged hypothesis in a landmark corollary, and F3.4, where
a coverage row asserts an iff the item does not deliver. The fix tasks also
renumbered my ids, so a straight re-read of my report against a Beta's reply
does not line up. If findings are going to be re-numbered, the mapping needs to
travel with them, and the nonfatal bookkeeping items need to travel at all.

**A source substitution needs a coverage test, not just a liveness test.** Both
replacement URLs were verified live, and both were verified live for the *wrong
question*. Axler happened to cover page 94 because Beta 3 had already read it;
Treil Ch. 4 did not cover page 88, and nothing in the pipeline would have caught
that — `coverage-checklist` validates the rows that exist, and deleting a row is
invisible to it. Beta 3's `replacement_audit` is what surfaced it, and it is not
a required artifact. **It should be.** A row-by-row present/not-present audit is
the only thing between a dead-source repair and a silently thinner page, and it
cost one Beta one section to produce.

**A gate blind spot worth recording.** The dependency-closure audit reports
`out_of_closure_published_deps: 0` for batch 7 while
`ex-closed-walks-in-the-complete-graph` rests on "$\mathbb C$ is algebraically
closed", which is in no closure. The audit checks declared dependencies; an
*undeclared* hypothesis is structurally invisible to it. Groups A and C should
assume the same for any item whose strategy instantiates a general hypothesis
("work over $\mathbb C$", "take a splitting field") at a specific object — the
gates will pass regardless.

**Bearing on other groups, recorded not acted on.** The locator-versus-enumeration
mismatch I flagged at step 3 (F3.3, F7.6) recurred in *both* repairs, in both
directions — batch 3 tightened its Conrad locator correctly but batch 7 left its
Stanley locator narrower than the rows it added. I checked whether it recurred in
the new Axler harvest and it did **not**: 14 numbers inside the declared ranges
have no row, and I opened every one — all are numbered display equations inside
proofs, not named results, so the enumeration is complete. Groups A and C can
apply the same test cheaply: pull the numbered labels out of the source, subtract
the rowed ones, and read what is left before calling it a gap.

**Nothing here blocks me.** I re-check these two fixes when Beta 3 and Beta 7
report, then run 6a/6b for batches 3 and 7. Step 4 propagation, step 6c and step
8 belong to group A.
