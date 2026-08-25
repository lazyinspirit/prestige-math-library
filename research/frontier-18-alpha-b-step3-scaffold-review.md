# frontier-18 — group Alpha `b`, step-3 scaffold breadth and depth review

Batches **5** and **10**, four A/B pairs, both categories `combinatorics`.
Group rationale read at `research/frontier-18-alpha-groups.json`: the two batches
share the rank/eigenvalue/counting toolkit and the counting conventions, and
combinatorics fits inside one Alpha, so it was not split.

Read together, per pair: `.pages.json`, `.notes.md`, `.coverage.json`, the Beta
task file, the governing design section, and `research/plan-spec.json`. The
step-0 drift report (`research/frontier-18-alpha-step0-drift.md`) was read first
and its four `no-drift` verdicts on these pages were taken as settled; its one
finding routed to this stage — the unbuilt CB-15 and the dropped Motzkin/Schröder
additions on `lattice-paths-and-catalan-numbers` — is adjudicated here as **B5-1**.

**Governing design sections.** The Beta task files name
`plan-combinatorics-and-categories.md` L1552 (CB-6) and L2265 (CB-13). Both are
superseded by the 2026-08-13 enrichment at **L4668 (CB-6 ENRICHED)** and **L5321
(CB-13 ENRICHED)**, which the file's own header declares supersede §§1–16 in
their CB/GT parts, and which the spec's orders (197, 223) follow rather than
§11's (179, 205). Batch 10's pages are governed by **§16** (L3845–3998), the
Erdős–Hajnal extension from arXiv:2606.06258v2. Both Betas found this
independently and built against the enriched text; that reading is **approved**
and is the reading used throughout below.

---

## Verdicts

| pair | A items | B items | verdict | findings |
|---|---|---|---|---|
| `lattice-paths-and-catalan-numbers` | 51 | 16 | **insufficient** | B5-1, B5-2 |
| `linear-algebra-methods-in-combinatorics` | 46 | 18 | **sufficient** | B5-3, B5-4, B5-5 (all repaired) |
| `modules-substitution-and-prime-graphs` | 34 | 13 | **insufficient** | B10-1 |
| `sparse-restricted-subgraphs-and-rodl-nikiforov` | 26 | 11 | **sufficient** | B10-2, B10-3, B10-4 (all repaired) |

No A page exceeds the 60-item cap and **no split is ordered**. The two
`insufficient` verdicts are narrow: five items on one page and one harvested
source on another. Both scaffolds are otherwise the richest development this
stage has seen — the `group-actions-and-cayleys-theorem` failure mode (orbits
and stabilisers scaffolded, orbit–stabiliser absent) has no analogue in either
batch.

## Severity table

| id | pair | severity | class | disposition |
|---|---|---|---|---|
| B5-1 | lattice-paths | **major** | breadth; a decline whose reason is false of a source in hand | routed to Beta 5; 3 items |
| B5-2 | lattice-paths | **major** | breadth; a decline with no checked reason | routed to Beta 5; 2 items |
| B5-3 | linear-algebra (B) | moderate | false computed witness in a `cex-` | **repaired here** |
| B5-4 | linear-algebra (B) | moderate | an `fs-` that is a claim about a proof, not a proposition | **repaired here** |
| B5-5 | lattice-paths (A) | minor | wrong arithmetic value inside a strategy | **repaired here** |
| B5-6 | lattice-paths | moderate | design-named result dropped with no finding | decline accepted, reason required |
| B5-7 | linear-algebra | — | zero-edge declared prerequisite | decided: keep the edge |
| B5-8 | linear-algebra | — | the design's claim about disk is false | correction approved for step 4 |
| B5-9 | both pairs | — | declines examined and accepted | recorded |
| B10-1 | modules | **major** | source depth: no textbook/monograph/note set | routed to Beta 10 |
| B10-2 | rödl–nikiforov (A) | moderate | one-sided lemma cited for a two-sided conclusion | **repaired here** |
| B10-3 | rödl–nikiforov (A) | moderate | statement quantified over all `n`, route only for large `n` | **repaired here** |
| B10-4 | rödl–nikiforov (A) | moderate | two published definitions of `α`, `ω` used without a dictionary step | **repaired here** |
| B10-5 | batch 10 | — | published page missing a design-required amendment | lead Alpha / owner |
| B10-6 | batch 10 | — | duplicate published definition | lead Alpha / owner |
| B10-7 | batch 10 | — | published real-ceiling amendment absent | workaround approved |
| B10-8 | batch 10 | — | Beta findings F1, F2, F3, F7, F8 | approved |

---

# Batch 5

## `lattice-paths-and-catalan-numbers` (order 197, 51 A items, 16 B items) — **insufficient**

### What is present, and it is a great deal

Every result CB-6 (ENRICHED) keeps from §11 is scaffolded, and the standard
textbook development is complete: the two step sets with a **proved** dictionary
between them (`lem-monotone-and-diagonal-lattice-paths-correspond`), the discrete
change-of-side lemma, reflection **as a two-sided-inverse bijection**, the ballot
problem and its weak form, `C_n` **defined as a count** with its finiteness
obligation discharged (`lem-dyck-paths-of-a-given-semilength-form-a-finite-set`),
the cycle lemma with its full cyclic-shift machinery, the first-return
decomposition, the recurrence, the generating function through the published
`cor-unique-formal-root-with-constant-one`, non-rationality against the preceding
page, and **three proved bijections** (balanced brackets, binary trees, polygon
triangulations) with a fourth family reached through them.

The Catalan count is proved **three genuinely different ways** — reflection, a
free `Z/(2n+1)` action, and formal algebra in `Q[[x]]` — with
`rem-routes-to-the-catalan-count` recording the two arithmetic identities that
make the three conclusions one statement. That is exactly the second-proof
richness the owner licensed on 2026-08-20, and it is welcome.

CB-6 (ENRICHED)'s reversal of §11 on **Lindström–Gessel–Viennot** is scaffolded
in full, including the sign-reversing-involution lemma with the canonicality of
every choice made a numbered step, and a corollary whose compatibility hypothesis
is proved rather than assumed. Approved (Beta finding F4): both
`symmetric-groups-and-the-sign-homomorphism` (44) and
`determinants-of-matrices-over-a-commutative-ring` (82) are inside the declared
closure — I recomputed the closure independently and found **0 dependencies
outside it and 0 B-page citations** on all four pages of this group.

I checked the page's stated identities rather than trusting them. `(n+1)C_n =
binom(2n,n)`, `(2n+1)C_n = binom(2n+1,n)`, `C_n + binom(2n,n+1) = binom(2n,n)`,
the ballot identity `(p+q)N = (p−q)binom(p+q,p)`, its weak form
`(p+1)N = (p−q+1)binom(p+q,q)` and the consistency of the two, the square-root
coefficients `[x^k](1−4x)^{1/2} = −(2/k)binom(2k−2,k−1)` against
`1, −2, −2, −4, −10, −28`, and the passage from those coefficients back to the
closed formula: all correct.

The B page is real: eleven worked examples, three false statements and two
counterexamples, including the two CEX the design asks for. The design's `fs-`
"every Catalan-family bijection is order-preserving" was replaced by
`fs-the-catalan-numbers-satisfy-a-constant-coefficient-linear-recurrence`, which
is the sharper item and the one that consumes the page's seam with order 195.
Accepted.

### B5-1 — Motzkin and Schröder numbers: the decline's reason is false of a source already in hand · **major**

CB-6 (ENRICHED) names "**Motzkin and Schröder numbers** via CB-15 specifications,
with their algebraic equations solved by the fixed-point theorem". Neither is
scaffolded. `research/frontier-18-batch-5.notes.md` F10 declines them because
"the enriched design gets them from CB-15's symbolic method, which is not in the
spec; building the symbolic method here is a page of its own". I confirmed CB-15
is absent from `plan-spec.json` — there is no `combinatorial-classes-and-the-symbolic-method`
page id at any order — so the *design's* route is genuinely unavailable, and the
step-0 drift review was right not to mint it onto a scaffolded run.

**But the page's own route is available, and it needs nothing built.** The
decline is about the design's road, not about the mathematics:

1. `lem-first-return-decomposition-of-a-nonempty-dyck-path` already factors a
   nonempty Dyck path uniquely as `U P D Q`. The same argument on the step set
   `{U, D, L}` with `L = (1,0)` splits a nonempty Motzkin path on its first step:
   either `L M'`, or `U P D Q` with `P` and `Q` Motzkin. That is
   `M_{n+1} = M_n + Σ_{i=0}^{n−1} M_i M_{n−1−i}`, hence
   `M(x) = 1 + x M(x) + x² M(x)²` by the coefficient comparison
   `thm-catalan-generating-function-satisfies-a-quadratic-equation` already
   performs.
2. Completing the square gives `(2x²M + x − 1)² = 1 − 2x − 3x²`, whose right-hand
   side lies in `1 + xQ[[x]]`, so the **uniqueness** clause of the published
   `cor-unique-formal-root-with-constant-one` identifies the root — the identical
   move to `thm-catalan-generating-function-closed-form`, and the move CB-6's
   trap (ii) exists to protect. Large Schröder is the same page again with
   `L = (2,0)`: `R(x) = 1 + x R(x) + x R(x)²`, root of `1 − 6x + x²`.

No combinatorial class, no SEQ/MSET/CYC, no specification and no `x`-adic
fixed-point theorem is required.

**And the source is already in the pair's own primary treatment.** Krattenthaler,
"Lattice Path Enumeration" (arXiv:1503.05930), **§10.8 is titled "Elementary
results on Motzkin and Schröder paths"** — verified 2026-08-24 against the ar5iv
rendering, which lists that heading verbatim, and independently corroborated by
the section list on the author-hosted copy at
`mat.univie.ac.at/~kratt/artikel/encylatt.pdf`. The harvest's declared locator is
"ch. 10, §§10.1–10.4 and §10.13", which stops **four sections short of it**. The
word "elementary" in the section's own title is the point: the source itself does
not route Motzkin and Schröder through the symbolic method.

This is the case the 2026-08-11 rule was written for — a missing prerequisite is a
thing to build — except that here nothing even needs building. **Add three items**
(`def-motzkin-and-schroder-paths`, `thm-motzkin-numbers-by-first-return-decomposition`,
`thm-large-schroder-numbers-by-first-return-decomposition`), extend the
`coverage.json` locator to include §10.8, and enumerate that section's own
headings with a disposition each.

### B5-2 — Chung–Feller: the machinery is built and under-used · **major**

CB-6 (ENRICHED) names "**The Chung–Feller theorem** (the number of paths with
exactly `k` steps above the axis is independent of `k`) — a cycle-lemma corollary,
cheap and striking". F10 declines it: "It is not a corollary of the cycle lemma as
this page states it, and it appears in neither harvested source's declared range
… I did not verify that its bijective proof closes in a bounded number of numbered
steps and will not scaffold a proof I have not checked."

Refusing to scaffold an unverified proof is right. But "I did not check" is an
admission, not a decline, and this stage exists to check it. Two things weigh
against the decline:

**The cost is already sunk.** `def-cyclic-shift-and-the-periodic-partial-sum-function`,
`lem-cyclic-shift-is-an-action-of-the-integers-modulo-the-length`,
`lem-a-word-whose-weight-is-coprime-to-its-length-has-a-trivial-shift-stabiliser`,
`lem-cyclic-shift-positivity-is-a-strict-right-minimum-of-the-partial-sums`,
`lem-strict-right-minima-of-a-quasiperiodic-partial-sum-function`, `thm-cycle-lemma`
and `thm-catalan-numbers-by-the-cycle-lemma` are **seven items** of machinery
consumed by exactly one theorem. Chung–Feller is what that machinery is for.

**The arithmetic closes exactly, and I checked it.** `thm-catalan-numbers-by-the-cycle-lemma`
already establishes that the words of length `2n+1` over `{+1,−1}` with `n`
entries `−1` fall into orbits of size exactly `2n+1` (trivial stabiliser, since
the weight is `1` and `gcd(1, 2n+1) = 1`), and that the orbits number `C_n`. Each
orbit has exactly `n+1` shifts beginning with `+1`, and deleting that forced
leading `+1` lands in the set of `binom(2n,n)` words with `n` of each sign. The
count matches on the nose:

    binom(2n+1, n) · (n+1)/(2n+1) = binom(2n, n),

so the `C_n` orbits partition all `binom(2n,n)` paths into classes of size `n+1`,
one path per class per value of the above-the-axis statistic. Chung–Feller is
precisely the claim that the statistic is a transversal on each class.

What is **not** free is the lemma carrying that last clause: that as `j` runs over
the `n+1` `U`-initial positions of a necklace, the resulting paths realise each of
`0, 2, …, 2n` steps above the axis exactly once. That is real content and it is
where `lem-strict-right-minima-of-a-quasiperiodic-partial-sum-function` will be
re-used. **Add two items** — that lemma and `thm-chung-feller` — and source the
lemma before scaffolding: Krattenthaler §10.12 ("Further results for lattice paths
in the plane") or Stanley, *Catalan Numbers*, are the two places to look. If
neither carries a proof the Beta can transcribe into numbered steps, **report it
rather than improvise**; the route above is my reconstruction and is not a
substitute for a source.

### B5-3, B5-4, B5-5 — repaired here

**B5-5 · `cor-catalan-closed-formula` (A page), minor, repaired.** The strategy
reduced `(n+1)C_n = binom(2n,n)` to `(n+1)binom(2n,n+1) = n·binom(2n,n)` — correct
— and then asserted that "both sides times `(n+1)!(n−1)!` equal `n(2n)!` for
`n ≥ 1`". They equal `(n+1)(2n)!`, not `n(2n)!`:
`(n+1)·binom(2n,n+1)·(n+1)!(n−1)! = (n+1)(2n)!`, and
`n·binom(2n,n)·(n+1)!(n−1)! = n(2n)!·(n+1)/n = (n+1)(2n)!`. The identity being
reduced to is right and only the displayed common value was wrong. Corrected in
the manifest.

**B5-3 · `cex-cauchy-davenport-fails-for-a-composite-modulus` (B page of the
linear-algebra pair), moderate, repaired.** The item claimed
`A + B = {0}` and `|A + B| = 1` for `A = B = {0,2}` in `Z/4`. The four sums are
`0, 2, 2, 0`, so `A + B = {0,2}` and `|A + B| = 2`. The counterexample survives —
`2 < 3 = min{4, |A|+|B|−1}` — but its displayed witness was false, and its
`provenance.statement` is `ai-generated`, which is exactly the truth-risk class
the component-provenance rule flags. Corrected, with all four sums required to be
displayed and the subgroup obstruction (`A = B = H` a subgroup forces `A+B = H`)
stated as the general reason.

**B5-4 · `fs-fisher-inequality-holds-over-the-two-element-field` (same page),
moderate, repaired.** The item was titled "FALSE: the Fisher bound `m ≤ n` follows
from the same argument run over `F_2`" — a claim about a *proof*, which an `fs-`
cannot be. The Eventown family refutes a proposition, and the proposition it
refutes is the `F_2` shadow of Fisher's hypothesis: over `F_2`,
`lem-the-standard-form-of-two-incidence-vectors-is-the-intersection-size` sees an
intersection only through its parity, so "all pairwise intersections equal"
degrades to "all pairwise intersections of the same parity". Restated as **FALSE:
distinct nonempty `A_1,…,A_m ⊆ [n]` whose pairwise intersections all have the same
parity satisfy `m ≤ n`**, refuted by an Eventown family of `2^⌊n/2⌋` sets (`2^⌊n/2⌋ − 1`
after dropping `∅`), which exceeds `n` from `n = 6`. The strategy now also names
the exact step with no `F_2` analogue — that
`Σ c_i²(d_i − t) + t(Σ c_i)² = 0` forces each term to vanish only because a sum of
nonnegative reals does — and records that the clause `⟨v_i,v_i⟩ > t` has no `F_2`
analogue at all, which is what the Eventown family exploits. This preserves the
design's intent exactly ("Fisher's inequality holds over `F_2` — the witness is an
Eventown family, and the contrast is the page's pedagogical payload").

### B5-6 — the Hankel determinant is dropped with no finding · moderate, decline accepted

CB-6 (ENRICHED) lists five additions; F10 examines four. The fifth — "**The Hankel
determinant** `det(C_{i+j})_{0≤i,j≤n−1} = 1` by LGV" — appears in no finding and is
dropped with only a mention in `rem-lattice-path-conventions`. It matters because
it is the design's own headline consumer for keeping LGV on this page.

I accept the drop for this run, for a reason the scaffold does not state:
`thm-lindstrom-gessel-viennot` is proved for **all** monotone paths in `Z²`, so its
matrix entries are binomial coefficients, not Catalan numbers. Getting
`det(C_{i+j}) = 1` needs LGV restated for a family of monotone paths **closed under
tail-swapping at a common point** — those weakly below a fixed diagonal are such a
family, and the tail-swap does stay inside it — plus an A-page corollary that the
monotone paths from `(0,0)` to `(m,m)` weakly below the diagonal number `C_m`,
which the page currently derives only inside a B-page refutation
(`fs-monotone-paths-weakly-below-the-diagonal-are-half-of-all-monotone-paths`).
That is three more items on top of B5-1 and B5-2, which would put the page at 59
of 60 and force the split the design does not ask for.

**Required of the Beta at `3-fix`:** `rem-lattice-path-conventions` already
promises to close "with the results this page states but does not build, naming
for each what it would need". Name the Hankel determinant there with that reason —
the generalisation of LGV to a tail-swap-closed path family, and the
weakly-below-the-diagonal count — and not with a bare "not built here".

### B5-9(a) — the other declines on this pair, examined and accepted

- **Non-crossing partitions.** F10 defers them to
  `set-partitions-stirling-numbers-and-exponential-generating-functions`. I
  verified the destination resolves: it is in `plan-spec.json` at **order 199**,
  strictly later than 197, with no item list and no file under `library/`, so it
  is planned-but-unbuilt and the deferral is recoverable. The design's stated
  reason for homing them here — that CB-19 and CB-20 want them — does evaporate,
  since neither page exists in the spec. **Accepted.**
- **Narayana numbers and the Catalan triangle.** No source in the declared read
  ranges carries them, and unlike Motzkin/Schröder I could not place them in a
  section of a source already in hand. Adding them means a re-harvest, and the
  headroom is spent on B5-1 and B5-2. **Accepted**, and recorded here as the first
  thing to add if the page is ever revisited.
- **Krattenthaler's fourteen `deferred` rows** (two-sided boundaries, the
  rational-slope μ-step family, Spitzer's lemma, the Jacobi–Trudi and Pfaffian
  forms of LGV, turn enumeration, the weighted LGV theorem). Each names machinery
  the page genuinely lacks and each reason is about that specific result. The
  Pfaffian rows in particular are correct: the library has no Pfaffian.
  **Accepted.**

---

## `linear-algebra-methods-in-combinatorics` (order 223, 46 A items, 18 B items) — **sufficient**

### Against CB-13 (ENRICHED)

Every designed result is scaffolded: the master rank bound citing published
dimension theory; **all three** independence criteria as separate items (diagonal,
triangular, determinant), which is what makes every later citation nameable;
Oddtown with its sharpness corollary; Eventown by the totally-isotropic-subspace
argument **and** maximal-is-maximum; the nonuniform Fisher inequality with the
`|A_i| = t` case given its own branch — the case that is usually skipped, and the
scaffold says so; Graham–Pollak by the rank-nullity argument on `Σ_{i<j} x_i x_j`;
Sauer–Shelah by shifting **with the two compression lemmas separated**, exactly as
the design demands, and the downward-closed base case as its own item; the
inclusion matrix with its composition identity; and a second, genuinely different
proof of Sauer–Shelah from the multilinear polynomial space.

The design's four `fs-` are all present, its six B-page items are all present, and
the required `rem-sauer-shelah-uses-no-linear-algebra` and
`rem-the-field-is-a-hypothesis-of-every-bound-on-this-page` are both scaffolded.
Trap (iv) is respected: `def-standard-bilinear-form-on-a-coordinate-space` states
on the A page that this is **not** an inner product, and the phrase the trap bans
appears only inside a B-page `fs-` that refutes it — which is what the design's own
`fs-` list asks for.

I checked the two witnesses the design flags as needing verification before
shipping. `fs-a-family-of-vc-dimension-d-has-at-most-n-to-the-d-members`: at
`n = 1`, `d = 1` the family `{∅, {0}}` shatters `{0}`, so its VC dimension is 1, it
has 2 members, and `n^d = 1` — the witness is correct and the true bound
`Σ_{i≤1} binom(1,i) = 2` is tight. `fs-the-combinatorial-nullstellensatz-holds-without-the-top-coefficient-hypothesis`:
`f(x,y) = x² − x` over `Q` with `t₁ = t₂ = 1`, `S₁ = S₂ = {0,1}` has total degree
`2 = t₁ + t₂`, `|S_i| = 2 > 1`, coefficient of `xy` equal to `0`, and vanishes at
all four grid points — correct. `cor-sauer-shelah-polynomial-bound`'s two-step
route also checks: `binom(n,i) ≤ n^i` and `Σ_{i≤d} n^i ≤ Σ_j binom(d,j) n^j = (n+1)^d`.

### Beta findings adjudicated

**F1 — build the Combinatorial Nullstellensatz block here. APPROVED.** CB-13
(ENRICHED) moves the polynomial method to CB-23 and the nonuniform bound to CB-24.
I confirmed that **neither CB-23 nor CB-24 exists in `plan-spec.json` at any
order**, exactly as CB-15 does not. A `deferred` disposition must name a
destination that resolves, and these do not; dropping a result for want of a page
that does not exist is not a permitted disposition under the self-contained-scope
rule, and §11 CB-13 — the design the dispatch names — homes the Nullstellensatz
here. The page carries both inventories, which is why it is at 46 items rather
than 30. **F7** (the nonuniform Ray-Chaudhuri–Wilson bound built here) is approved
on the same grounds; note that the two names in the literature — Babai–Frankl's
"nonuniform Ray-Chaudhuri–Wilson" and the "Frankl–Wilson" of Matoušek's Miniature
17 — are the same theorem, so `thm-frankl-wilson-nonuniform-bound` is not a
misattribution and its id stands. The **modular** Frankl–Wilson theorem, which §11
denies, is correctly declined and is a different statement.

**F3 — the design's claim about disk is false. APPROVED, correction owed at step 4.**
CB-13 (ENRICHED) L5335 says `inner-product-spaces-and-orthogonality` "carries 0
items". I opened `library/linear-algebra/inner-product-spaces-and-orthogonality.md`:
it is `status: published` with a full item list including `def-inner-product-space`,
`prop-standard-coordinate-inner-products`,
`thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces` and
`thm-gram-schmidt-orthonormalisation`. The scaffold cites two of them. Amendment
A1 in the batch notes is correct and lands with the lead Alpha at step 4; left
standing, the next scaffolder to read that line re-mints Cauchy–Schwarz.

**F5 — Alon–Füredi in place of §11's "graph colouring corollary". APPROVED.**
Alon–Tarsi and its consequences need orientations, Eulerian sub-digraphs, the
graph polynomial and choosability, none of them published, and the enriched design
routes them to CB-23 with planarity as a forward reference. `thm-alon-furedi-hyperplane-cover-of-the-cube`
is Alon Theorem 6.3 and Matoušek Miniature 16, so it is doubly sourced, and it
needs nothing the page does not already build. The scaffold's `S_i = {0,1}` route
with the constant fixed by evaluating at the origin is the standard argument, and
the strategy correctly makes the sign check its own numbered step.

**F6 — only the `t = 1` inclusion-matrix rank is built. APPROVED.** I worked the
declined route rather than accepting the report. Splitting rows and columns of
`W_{t,k}(n)` on whether they contain the last point gives a block-triangular matrix
with diagonal blocks `W_{t−1,k−1}(n−1)` and `W_{t,k}(n−1)`, and the second block's
hypothesis is `t ≤ k ≤ (n−1) − t`, so the provable range does lose one unit at each
step and the induction proves nothing new — the report is right. The boundary case
`k = n − t` is, after complementation, the nonsingularity of the disjointness
matrix, whose known proofs go through the Johnson scheme's eigenvalues or
Gottlieb's construction, neither declared. This is a **real** decline about a
specific result, and `rem-the-rank-of-a-general-inclusion-matrix-is-not-established-here`
states it without stating the theorem the page does not have. That remark is the
right shape and must survive to step 5 intact.

**F11 — `(n+1)^d` rather than `(en/d)^d`. APPROVED**, checked above; `d ≥ 1` is
stated and both small-`n` ends are in the contract.

**F9 — two sources recorded as Wayback snapshots. APPROVED as recorded.** The
canonical URLs (`people.cs.uchicago.edu/~laci/babai-frankl-book2024.pdf`,
`kam.mff.cuni.cz/~matousek/stml-53-matousek-1.pdf`) are alive; it is this
environment's gate fetcher that fails them, on certificate-chain validation and on
timeout respectively. Recording the snapshot with the canonical link in
`original_url` and the failure in `recovery_note` is the recover-before-replace
convention applied correctly — no source was replaced and no locator moved, so no
item's provenance is affected. `url-sweep --recover --fail-on-dead` reports 8/8
live. At step 6, if the fetcher is fixed, the canonical URLs may be restored and
re-stamped; that is an improvement, not a defect to be repaired now.

### B5-7 — `finite-probability-and-the-probabilistic-method` is a declared prerequisite with no edge · decided

F8 reports that nothing in the scaffold rests on order 221 and declines to invent
an edge. **Declining to invent one is right** and is what generated-claim
minimization requires; the only place the two subjects genuinely meet is the
explicit Ramsey construction from the **modular** Frankl–Wilson bound, which this
page correctly does not build.

**Decision: keep the edge; do not remove it and do not manufacture a citation.**
Two reasons, both checked from disk. It is the page's immediate reading-order
predecessor (221 → 223). And it is the declared route by which
`finite-counting-and-binomial-coefficients` (20) and
`inclusion-exclusion-and-the-pigeonhole-principle` (22) enter this page's closure —
both are cited heavily, and the enriched design's own `requires` line names them
directly. Removing 221 would either break the closure or force two backward edges
to restore what it already supplies, and `validate-plan.mjs` would then report both
as `redundant-prereq` anyway.

Recorded here so that **step 6c does not read the zero edge as a missing
citation**: a declared edge list of zero is a finding, and this is the finding,
with its reason.

### B5-9(b) — declines on this pair, examined and accepted

Babai–Frankl's two-distance sets, jigsaw puzzles, projective spaces, field
extension, block designs, the constructive Ramsey bound, the classical extremal
theorems, the extended inclusion matrices and shadows; Matoušek's Miniatures on
algorithms, equiangular lines, Schoenberg, Moore graphs and tilings; Pikhurko's
Lindström theorem, regular subgraphs, Chevalley–Warning and hyperplane-meeting
sets; Alon's ideal-membership form and §6 regular-subgraph results. I read every
reason. Each names a specific object the library lacks — a Euclidean metric on
`R^d`, a projective space, a general finite field `F_q`, the adjacency spectrum, a
model of computation, the shadow operator — rather than gesturing. The
`out-of-scope` rows on the three algorithmic Miniatures are the right disposition:
"faster" is not a proposition in any structure the library records. **Accepted.**

The one design item declined without a finding is the third CEX, "a family of `F_2`
vectors that is self-orthogonal but not isotropic in the quadratic sense". It
needs a quadratic form the page deliberately never introduces, and introducing one
would contradict trap (iv). **Accepted**; recorded here so it is not read at step 6
as an omission.

---

# Batch 10

## `modules-substitution-and-prime-graphs` (order 397, 34 A items, 13 B items) — **insufficient**

### What is present

§16.2's scope for the pair is "Modules, prime graphs, substitution and the
Alon–Pach–Solymosi theorem (1.4)", and all of it is scaffolded, together with the
full modular-decomposition development a textbook chapter gives: the three
equivalent module criteria, complement invariance, unions of components and
anticomponents, the intersection/union/difference closure lemmas with the overlap
hypothesis isolated, restriction to induced subgraphs, transitivity of
modules-of-modules, prime graphs, the substitution operation with its complement
law, the recognition theorem (prime ⟺ not a substitution), modular partitions and
quotients, and **Gallai's modular decomposition theorem** with the corollary that
the prime quotient has at least four vertices.

**I verified the flagship proof rather than trusting it.**
`thm-substitution-preserves-the-erdos-hajnal-property` is the one item on this
page where a constant can silently be wrong, and every constant in its strategy
checks out: with `β = 1/(2(h₁+1))` and `ε = β·min{ε₁,ε₂}`, an `m`-set with
`m = ⌈n^β⌉` satisfies `m^{ε₁} ≥ n^{βε₁} ≥ n^ε > hom(G)`, so it carries an induced
`H₁`; supersaturation gives at least `((n−h₁+1)/m)^{h₁}` good `h₁`-sets, and
dividing by the at most `n^{h₁−1}` induced embeddings of `H₁ − v` leaves an
extension set of size at least `4^{−h₁} n^{1−βh₁}`, using `n − h₁ + 1 ≥ n/2` and
`m ≤ 2n^β`; that exceeds `m` because `1 − β(h₁+1) = 1/2` exactly. The small-`n`
tail is handled honestly too: shrinking `ε` to `min{ε, 1/log₂ n₀}` gives
`n^ε ≤ n₀^{1/log₂ n₀} = 2 ≤ hom(G)` for `2 ≤ n < n₀`, and `n = 1` separately. The
supersaturation lemma's own ratio `Π(n−i)/Π(m−i)` is exactly
`binom(n,m)/binom(n−h,m−h)`, as claimed. This is a correct and carefully staged
route.

The B page is real and its witnesses are right. I checked the claim that `P₄` is
the only prime graph on four vertices against the six connected four-vertex graphs
— the star, `C₄`, the paw, the diamond and `K₄` all have disconnected complements,
and `P₄` is self-complementary — and I checked that substituting `K₂` for an
endpoint of `P₃` gives the paw. The two `cex-` about the union and difference
lemmas both exhibit correct witnesses, and
`cex-primality-is-not-inherited-by-induced-subgraphs` is right that deleting the
middle vertex of `P₅` leaves `2K₂`.

### B10-1 — the pair has no treatment of the required form · **major**

`research/frontier-18-batch-10.coverage.json` declares three sources for this page:

| source | declared `kind` |
|---|---|
| Habib & Paul, *A Survey on Algorithmic Aspects of Modular Decomposition* | `survey` |
| Chudnovsky, *The Erdős–Hajnal Conjecture — A Survey* | `survey` |
| Huang, Ju & Zhou, arXiv:2606.06258v2 | `paper` |

The standing rule is two independent treatments per pair, **at least one a
textbook, monograph or full lecture-note set with a harvestable table of
contents**. Two surveys and a paper is none of those three forms. The Beta applied
the rule correctly everywhere else in this group — Guichard backs the lattice-path
pair, Babai–Frankl and Matoušek back the linear-algebra pair, Zhao backs the
Rödl–Nikiforov pair — and this pair is the one that slipped. Nothing in §7 or §14
of the batch notes addresses it.

To be plain about severity: **the mathematics is not in question and no item is
affected.** Habib–Paul §2 is a genuine full treatment and 30 headings were
enumerated over it. What is missing is the backing, and the rule exists precisely
so that "a survey said so" is never a pair's foundation.

**Required at `3-fix`:** harvest one treatment in the required form over a stated
chapter range, enumerate that source's own section and named-result headings, and
give each a disposition. Fetch-verify before adopting; the likely candidates are
Golumbic, *Algorithmic Graph Theory and Perfect Graphs* (the substitution and
modular-decomposition chapter), Ehrenfeucht–Harju–Rozenberg, *The Theory of
2-Structures*, Brandstädt–Le–Spinrad, *Graph Classes: A Survey* (the
modular-decomposition chapter), or a full lecture-note set on graph classes. If
none is openly retrievable, **record the attempt and the failure and report it** —
do not relabel a survey, which is the failure mode the rule names explicitly.

### Beta findings adjudicated

**F2 — Gallai's modular decomposition theorem added beyond §16.2's one-line scope.
APPROVED.** The paper's framing is that the conjecture reduces to prime graphs,
and `cor-the-erdos-hajnal-conjecture-reduces-to-prime-graphs` is on the page; a
reduction to prime graphs is a statement about how a graph decomposes, and without
the theorem the page can say a non-prime graph is *some* substitution but not that
every graph is assembled from prime quotients. It is also the standard capstone of
any chapter with this title. Amendment A2.1 is approved for step 4.

**F7 — declines resolving to `owner-decision`. CONFIRMED.** The strong-module tree
and its correspondence lemma, Habib–Paul's Theorem 4 hierarchy, Gowers's tower
lower bound, Fox–Sudakov's regularity-free Rödl proof, Nikiforov's partition form,
Chudnovsky–Scott–Seymour–Spirkl's Theorem 1.4, Prömel–Rödl, and the listed
conjectures and exercises. Each has a real statement and no page in the plan to
hold it, and none is needed by any page of the 393–442 block. The
**strong-module tree** is the one a reader of this title will look for; it is in
the checklist with a disposition, which is what the rule requires, and I record
here that it is the first thing to add if the page is revisited. **Accepted.**

I confirmed the `deferred` destinations resolve. Every page named —
`cographs-perfect-patterns-and-pure-pairs` (413),
`bull-free-graphs-and-the-erdos-hajnal-property` (411),
`the-five-cycle-and-erdos-hajnal` (415),
`iterative-sparsification-and-the-five-vertex-path` (419),
`star-expansions-and-erdos-hajnal` (417),
`blockades-combs-and-pattern-graphs` (407),
`leaf-reducibility-and-wonderful-families` (425),
`small-graph-erdos-hajnal-consequences` (421),
`pure-pairs-forests-and-path-antipath-classes` (409),
`erdos-hajnal-for-the-e-graph-and-bird` (441),
`classical-and-loglog-erdos-hajnal-bounds` (403) and
`polynomial-rodl-and-viral-equivalence` (405) — is in `plan-spec.json` with an
order and an empty item list. No deferral on this page points at nothing.

---

## `sparse-restricted-subgraphs-and-rodl-nikiforov` (order 401, 26 A items, 11 B items) — **sufficient**

### What is present

§16.2's scope is "c-sparse/restricted sets and full Rödl/Nikiforov theorems
(1.1–1.2)", and both theorems are proved, not cited: `thm-nikiforov-few-induced-copies-force-a-linear-restricted-set`
and `cor-rodl-every-h-free-graph-has-a-linear-restricted-set`, with the family
version, the density version, the interchange between the two normalisations, the
inheritance under linearly large induced subgraphs, the bounded cover and the
bounded weakly-restricted partition. §16.3's "induced-count bookkeeping and
parameter-transfer lemmas" are all named items: monotonicity in the parameter,
transfer to a large subset, the self-density conversion both ways, the
weakly-sparse trimming lemma, the two self-regular trimming lemmas, the
intermediate-density counting lemma and the few-copies inheritance lemma.

**I verified the constants in `thm-nikiforov-…`.** With `η = ε/4` and
`γ ≤ min{ε/8, γ(H,η)}`, the two trimming constants are `(η+γ)/(1−γ) ≤ 0.4ε` and
`(η+2γ)/(1−γ) ≤ 0.54ε`, both under `ε` since `ε < 1/2` forces `γ ≤ 1/16`; and
`δ = min{δ₁/N, δ₁c^{1/h}, (1−γ)δ₁}` makes each of the three branches land — the
short branch gives `δn < 1` so a singleton suffices, the middling-density branch
contradicts `ind_H(G) < (δn)^h` because `c|W|^h ≥ c(δ₁n)^h ≥ (δn)^h`, and the
trimmed set has more than `(1−γ)δ₁n ≥ δn` vertices. I also checked the two
trimming lemmas against the **published** `lem-typical-degrees-in-a-regular-pair`
clause by clause, including that `Y' = W` satisfies its `|Y'| ≥ ε|Y|` hypothesis
and that `|W| < |W'|/(1−γ)` is what converts each bound to a fraction of `|W'|`.
The `cor-rodl-in-the-edge-density-form` threshold `|X| ≥ 2/ε`, and its consequence
`n ≥ 2/(εδ)`, are both correct.

Every B-page witness on this page checks: the clique self-density `1 − 1/s`, the
union-of-two-cliques bound `max{a,b} ≤ 1/(1−2ε)`, the balanced-bipartite
computation, the star's `ε < 1/3` threshold, the perfect-matching subset that is
exactly tight against the `1/λ` charge in the transfer lemma, the asymmetry
witness for directional sparsity, and the disjoint-cliques refutation of "a sparse
set contains a stable set of half its size", which is tight against
`cor-a-restricted-set-contains-a-large-stable-set-or-clique`'s `|X|/(c|X|+1)`.
`ex-rodls-theorem-with-an-explicit-constant-for-p-three-free-graphs` is correct
and is a good item: it shows the theorem's content without regularity.

### Beta findings adjudicated

**F1 — Rödl and Nikiforov through the published self-regular subset rather than a
reduced graph. APPROVED.** §16.3's "reduced-graph selection" describes one route;
what the requirement is really enforcing is that no source theorem be a
citation-only Fact, and this route exposes more named lemmas, not fewer. It is
also the honest one: `thm-large-self-regular-subset` is published at order 399 and
a reduced-graph argument would re-derive it from the regularity partition it was
proved from, and would additionally need a Ramsey step and a slicing pass. I
traced the whole route and it closes. Amendment A2.3 approved for step 4.

**F3 — both normalisations of "restricted". APPROVED.** Three of the pair's
sources state Rödl's theorem with edge density and the target paper states it with
maximum degree; proving the stronger maximum-degree form, deriving the density
form, and proving the return trip is the only arrangement in which the page's
citations support its statements. Amendment A2.2 approved.

**F8 — page 401 stays free of the homogeneous number. APPROVED.** Consistent with
the step-0 drift ruling and with §16.4, which routes the Erdős–Hajnal property
itself to 393–396 and the general bounds to 403. I confirmed from the manifest
that no item on 401 cites `def-homogeneous-set-and-homogeneous-number`, so the
single `requires` edge to order 399 is exactly right. Recording the reason here, as
F8 asks, because the absence will look like an omission to a reader who knows the
subject.

### B10-2, B10-3, B10-4 — repaired here

**B10-2 · `cor-the-density-form-and-the-degree-form-of-rodls-theorem-are-interchangeable`,
moderate, repaired.** The item concludes for both the sparse and the dense branch,
but `lem-a-weakly-sparse-set-has-a-large-sparse-subset` states **only** the sparse
half; the dense half lives in that lemma's strategy prose ("reading the same
computation in the complement"), which is not a Statement a consumer may cite. The
route does close, but only through the complement:
`d_{Ḡ}(X,X) = 1 − 1/|X| − d_G(X,X) ≤ ε/4` by the diagonal convention, the trimming
lemma applies in `Ḡ`, and `lem-restrictedness-is-complement-invariant` carries the
result back. That lemma was **not among the item's `deps`**. Added it, and rewrote
the strategy to make the complement passage its own numbered step and to forbid
the phrase "the lemma gives the dense version too".

**B10-3 · `thm-a-bounded-partition-into-weakly-restricted-sets`, moderate,
repaired.** The statement is quantified over every `H`-free graph; the route works
only for large `n`, and two thresholds were unstated. Converting the maximum-degree
form to self-density in the dense case costs the `1/|X_i|` slack of
`lem-a-sparse-set-has-small-self-density`, so it needs `|X_i| ≥ 2/ε`, which holds
for every extracted set because the last extraction still runs inside a remainder
of at least `λn` vertices — and that in turn forces `n ≥ n₀(H,ε)`. The statement is
nonetheless **true as written**, because for `n < n₀` the singleton partition has
every part of self-density `0` and at most `n₀` parts, so the bound on the number
of parts is `max{t+1, n₀}` and still depends only on `H` and `ε`. Rewrote the
strategy to make both thresholds numbered steps and to state the small case, so
that step 5 does not author a proof narrower than its own theorem.

**B10-4 · `cor-a-restricted-set-contains-a-large-stable-set-or-clique`, moderate,
repaired.** This is the consumer-side half of the Beta's structural finding F5.
The item is the only place on either page that cites **both**
`def-clique-and-independence-numbers` (order 215) and
`def-clique-stable-set-and-numbers` (order 393), and it must, because
`lem-greedy-colouring-bound` and `thm-clique-independence-chromatic-bounds` are
stated against the first while `lem-complement-swaps-cliques-and-stable-sets` is
stated against the second. I opened both definitions: they define the same two
invariants under the same symbols `α` and `ω`, so the proof is correct — but it
moves between two published definitions of `α` without saying so, and identical
notation is exactly what makes that invisible. Rewrote the strategy to require the
agreement as a numbered step, verified from the two Definitions rather than assumed
from the notation. This is the same dictionary discipline the group's other pages
already apply in `lem-monotone-and-diagonal-lattice-paths-correspond` and
`rem-modules-and-the-word-homogeneous`.

### B10-5, B10-6, B10-7 — verified from disk, routed onward

None of these is repairable inside a batch: each is a change to published content,
and the 2026-08-24 minting and reordering authority is step-0 planning of unbuilt
pages and does not reach published pages, whose ids are immutable on `main`.

**B10-5 · the §16.1 GT-1 amendment is not on disk.** §16.1 requires
`graphs-walks-and-connectivity` (published, order 207) to carry A-page edge-list
definitions of the bull, the E-graph, the Bird and their complements. I read its
item list: it carries none of them. **This run is unaffected** — batch 10's
primality examples use paths and the five-cycle, supplied by
`def-standard-complete-bipartite-path-and-cycle-graphs`. What it blocks is later:
`bull-free-graphs-and-the-erdos-hajnal-property` (411),
`the-five-cycle-and-erdos-hajnal` (415), `small-graph-erdos-hajnal-consequences`
(421), `co-e-free-comb-structure` (437), `co-bird-free-comb-structure` (439) and
`erdos-hajnal-for-the-e-graph-and-bird` (441) have no way to name the figures
their theorems are about. **For the lead Alpha and the owner**, as a debt of the
393–442 block and not of this run.

**B10-6 · the clique and stable-set numbers are defined twice in published
content.** `def-clique-and-independence-numbers` (order 215) and
`def-clique-stable-set-and-numbers` (order 393) are both `status: published` and
define `α` and `ω` identically. Item ids are immutable on `main`, so the remedy is
an alias or a dictionary remark on published content, which is an owner decision.
B10-4 above closes the one consumer inside this group. **For the lead Alpha and
the owner.**

**B10-7 · the §16.1 real-ceiling amendment is not on disk.** The library has
`def-the-ceiling-of-a-quotient-of-naturals`, which is about quotients of naturals,
and `ex-ceiling-and-floor-are-adjoint-to-the-inclusion-of-the-integers`, which is
on a B page and therefore a leaf that no A page may cite. **The workaround is
approved**: taking least naturals above a real bound via `thm-of-archimedean` and
`thm-well-ordering-principle`, exactly as
`thm-substitution-preserves-the-erdos-hajnal-property` already does, and recorded
in §6.1 of the batch notes so step 5 does not silently write a ceiling. Later
pages in the block doing explicit exponent arithmetic will hit the same wall with
more arithmetic to route around. **For the lead Alpha and the owner.**

---

# Mechanical checks run over this group

- **Every dependency opened.** All external `deps` across the four pages resolve
  to files in `items/`; **0 missing, 0 not `published`, 0 with an `ai-generated`
  statement, 0 with `proved_here: false`, 0 satisfied by another batch of this
  run.** The provenance-order rule is satisfied with no exception and no external
  fallback is claimed anywhere.
- **Declared closure.** Recomputed independently from `plan-spec.json`: **0
  dependencies outside the declared `requires` closure and 0 citations of a
  B-page item** on any of the four pages. This corroborates the step-0 drift
  review's four `no-drift` verdicts rather than restating them.
- **Size.** 51, 46, 34 and 26 A items against the 60 cap. With B5-1 and B5-2 the
  lattice-path page reaches 56. **No split is required.**
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0,
  `redundant-prereq` advisories only. **I made no edit to `plan-spec.json`**: no
  backward re-pin was needed, since every declared closure already holds.
- `node tools/content-policy.mjs --manifest-only research/frontier-18-batch-5.pages.json research/frontier-18-batch-10.pages.json`
  — 215 scoped items, **0 errors, 0 warnings**, after my repairs.
- `node tools/coverage-checklist.mjs research/frontier-18-batch-5.coverage.json research/frontier-18-batch-10.coverage.json`
  — 277 harvested results, **0 errors**, three `coverage-low-yield` warnings on
  `linear-algebra-methods-in-combinatorics` (23/66),
  `modules-substitution-and-prime-graphs` (17/67) and
  `sparse-restricted-subgraphs-and-rodl-nikiforov` (14/92). The warning asks Alpha
  to confirm the declines and **they are confirmed above, individually**: on the
  first pair by the reasons examined at B5-9(b), on the two batch-10 pairs by the
  §16 routing, where the surveys survey a twenty-five-pair programme and the
  `deferred` rows overwhelmingly name other pages of that programme — every one of
  which I confirmed exists in `plan-spec.json`.

## What I changed

Six items in two batch manifests, all under the step-3 repair licence (correct a
false Statement or title; supply the intermediate step a route needs). No item was
added or deleted, no id was renamed, no page's `requires` changed, no
`plan-spec.json` line changed, and no published item was touched.

| file | item | change |
|---|---|---|
| `frontier-18-batch-5.pages.json` | `cor-catalan-closed-formula` | strategy: common value `n(2n)!` → `(n+1)(2n)!` |
| | `cex-cauchy-davenport-fails-for-a-composite-modulus` | title and strategy: `\|A+B\|=1` → `\|A+B\|=2`, all four sums displayed, subgroup obstruction stated |
| | `fs-fisher-inequality-holds-over-the-two-element-field` | title and strategy: restated as a proposition about set systems |
| `frontier-18-batch-10.pages.json` | `cor-the-density-form-and-the-degree-form-of-rodls-theorem-are-interchangeable` | added `lem-restrictedness-is-complement-invariant` to `deps`; complement passage made a numbered step |
| | `thm-a-bounded-partition-into-weakly-restricted-sets` | strategy: two thresholds named, small-`n` singleton case stated |
| | `cor-a-restricted-set-contains-a-large-stable-set-or-clique` | strategy: agreement of the two published `α`/`ω` definitions required as a numbered step |

## Honest remaining gaps

- **B5-2's route is my reconstruction, not a source.** The orbit arithmetic is
  checked and exact; the height-profile lemma is not, and the Beta must source it
  before scaffolding rather than transcribing my sketch.
- **The Narayana refinement and the Hankel determinant stay out**, and the reason
  is the 60-item cap rather than a mathematical one. Both are recorded above with
  what they would need.
- **B10-1 may not be satisfiable openly.** If no modular-decomposition treatment in
  the required form is retrievable, the honest outcome is a recorded failure and a
  report, not a relabelled survey — and at that point it becomes an owner
  decision, not a Beta fix.
- **Neither `insufficient` verdict is about correctness.** I found no false
  Statement, no unlicensed inference and no inaccurate citation left standing in
  either batch after the six repairs above.

No permission prompt was raised at any point in this dispatch.
