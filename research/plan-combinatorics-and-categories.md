# Combinatorics, graph theory, category theory, and homological algebra

> ## READ FIRST — 2026-08-13 enrichment (`subjects-01`, `combinatorics` lane)
>
> The owner commissioned an enrichment of every prose scaffold on 2026-08-13:
> *amend and expand the prose scaffolds to enrich future mathematical content*,
> developing each subject from the ground up at graduate level. The
> `combinatorics` lane owns the **CB-\*** and **GT-\*** material in this file and
> nothing else. The category-theory blocks (CT, AB/MO) are superseded by
> `research/plan-category-theory-track.md`, and the HA blocks by
> `research/plan-homological-algebra-track.md`. They remain historical prose in
> this combined file and are not splice authority. The CB/GT material remains
> authoritative here.
>
> **Everything the `combinatorics` lane added or corrected lives in §17 (below)
> and §18–§29 (at the end of this file).** §17 is the summary for the
> orchestrator; §18 records what in §1–§16 is now stale and what replaces it;
> §19 the shape of the enrichment; §20–§21 the well-definedness and choice
> ledgers; §22–§25 the four blocks of A/B pairs; §26 the canonical-coverage
> harvest; §27 the inventory and build frontier; §28 amendments owed; §29 seams,
> denials and blockers.
>
> Sections **§1, §2, §3 (CC-D1…D3, CC-D6, CC-D9), §4, §7, §8, §9, §10, §13, §14
> are stale in their CB/GT parts** — they were written on 2026-07-28 against a
> 230-page spec, before the splice and before eighteen of these pages were
> authored. §18 lists every stale claim, with the disk evidence. The CT/AB/MO/HA
> parts of those sections were left exactly as they were.
>
> The **seven** verbatim source harvests behind §17–§29 are checked in beside
> this file as `research/subjects-01-combinatorics-harvest-{enumerative,
> graphtheory,algebraic,probabilistic,matroids,tutte,gapfill}.md`. A step-2 Beta
> converts the harvest rows for its own pair into
> `research/<run>-batch-<i>.coverage.json`; **§26** gives the source-section
> dispositions and points at the verbatim named-result rows.

---

# 17. Summary for the orchestrator

**Lane:** `subjects-01` / `combinatorics`, 2026-08-13. **Mode:** ENRICH, in place,
within the existing band. **File written:** this one, and only this one. No item,
no page, no `plan-spec.json` entry, no `status:` field was touched. The seven
harvest files listed above are research artifacts this lane commissioned.

## 17.1 Pairs scaffolded — 51 A/B pairs, 42 new and 9 enriched

| block | relative labels |
|---|---|
| **§22 enumerative** | CB-15 (symbolic method, NEW) · CB-5 (linear recurrences + transfer matrix) · CB-6 (lattice paths, cycle lemma, Catalan) · CB-16 (permutation statistics, NEW) · CB-7 (set partitions, Stirling, EGF) · CB-8 (integer partitions, twelvefold way) · CB-17 ($q$-analogues, NEW) · CB-18 (sieve methods, rook polynomials, NEW) · CB-19 (posets II, partition lattice, NEW) · CB-20 (permutation patterns, Stanley–Wilf, NEW) · CB-21 (extremal set theory II, NEW) · CB-10 (cycle index, Pólya) · CB-22 (species, NEW, placed high) |
| **§23 algebraic, spectral, design** | CB-13 (rank bounds, inclusion matrices) · CB-23 (Combinatorial Nullstellensatz, NEW) · CB-24 (polynomial spaces, Frankl–Wilson, Borsuk, NEW) · CB-14a (designs, Steiner systems) · CB-14b (projective planes, MOLS, Bruck–Ryser, NEW) · CB-14c (codes, association schemes, Delsarte, NEW) · GT-7a (adjacency, Perron–Frobenius, matrix-tree, NEW) · GT-7b (interlacing, Hoffman, srg, friendship, NEW) |
| **§24 graph theory** | GT-9 (degeneracy, critical, Brooks, De Bruijn–Erdős) · GT-10 (chromatic polynomial, broken circuits, reciprocity) · GT-11 (edge colouring: König, Vizing, Shannon) · GT-12 (list colouring, kernels, Galvin) · GT-13 (perfect graphs, chordal, WPGT) · GT-14 (blocks, ears, Tutte's wheel) · GT-15 (tree-decompositions, treewidth, wqo) · GT-16 (Tutte 1-factor, Tutte–Berge, Gallai–Edmonds) · GT-17a/b/c (matroids: axioms+duality, optimization, representability) · GT-18 (Tutte polynomial, nowhere-zero flows) · GT-19 (regularity, removal, Roth) · GT-20 (Rado graph, Fraïssé) · GT-21 (expansion, Cheeger) · GT-22/GT-23 (plane duality + flow–colouring duality; 5-choosability, Grötzsch, crossing numbers — **both placed high**) · GT-24 (Hamiltonicity II) |
| **§25 probabilistic, Ramsey, additive** | CB-25 (entropy, NEW) · CB-29 (four functions, FKG, Janson, NEW) · CB-30 (martingales, Azuma, McDiarmid, NEW) · CB-26 (discrepancy, Beck–Fiala, NEW) · CB-12 (LLL extensions, thresholds, derandomization) · CB-11 (Ramsey II, Hindman) · CB-31 (quasirandomness, Paley, NEW) · CB-27 (finite Fourier, Roth, NEW) · CB-28 (slice rank, cap sets, NEW) · CB-32 (sumset calculus, NEW) · CB-33 (Kneser, Vosper, EGZ, NEW) · CB-34 (incidences, sum–product, NEW, placed high) |

Every A page is designed against the **60-item ceiling**, which forced four
splits: CB-14 → a/b/c, GT-7 → a/b, GT-17 → a/b/c, and §11's single GT-5 colouring
page → GT-9…GT-13. **Splitting is never dropping**; every result §11 named
survives, and many it did not reach are added.

## 17.2 Sources obtained in full

**Thirty-plus full-text sources**, every one legitimately open. Enumerative:
Stanley EC1, Flajolet–Sedgewick, Sagan, Wilf, Cameron LTCC, Postnikov/Dillon,
de Mier, Grinberg. Algebraic/spectral/design: Brouwer–Haemers, Spielman, Stanley
*TAC*, Babai–Frankl (v2.2.1, Nov 2024), Godsil ×3, Alon's Nullstellensatz paper,
Forbes on Bruck–Ryser. Graph theory: Diestel 5th ed. **in full with its margin
dependency apparatus extracted**, Zhao *GTAC*, Schrijver ×2, two independent
Cambridge Part II note sets, Harju, Keller–Trotter. Probabilistic/additive:
Alon–Spencer, Zhao *PM*, Matoušek–Vondrák, Gowers's Part III entropy course,
Tao–Vu. Matroids: Oxley's survey, Schrijver ch. 10, Reiner, Ellis-Monaghan–Merino,
Waterloo CO 446, KAIST MAS480A. Polynomials: Goodall (134 pp.), Beck–Sanyal,
Sokal, Stanley 1973, Blass–Sagan, Dohmen, Read. Rado graph: Cameron ×2,
Macpherson, Bodirsky, Cambridge Part III, Schlicht, Hubička. Edge colouring and
matching: Kostochka's UIUC notes, **Stiebitz–Scheide–Toft–Favrholdt's author-hosted
back matter carrying Vizing's 1964 and 1965 papers in full English translation**,
West's *EJC* paper, Chekuri's notes. Full ledger with URLs and ranges: **§26.1**.

**One named source is disqualified:** Bollobás, *Extremal Graph Theory* — chapter
list only, headings unenumerable by any route tried, therefore **cannot carry a
disposition and cannot be one of a pair's two treatments**.

## 17.3 Seams consumed, and seams owed

**Consumed** (cited, never re-minted): the published finite-probability pages;
`thm-ultrafilter-lemma` and `thm-konig-infinity-lemma-for-ordered-trees` (both ZF);
`thm-cauchy-frobenius-orbit-counting`; the whole plane-graph page including
**Kuratowski–Wagner** and plane duality; `the-determinant-of-a-linear-operator`'s
cofactor/adjugate machinery; Menger in all four forms; `thm-konig-bipartite-matching-cover`,
which is what makes matroid intersection reachable; `cor-rational-root-of-an-integer-is-an-integer`;
`cor-sum-of-roots-of-unity`; `thm-finite-jensen-inequality`;
`def-erdos-renyi-random-graph`.

**Owed — fourteen amendments, listed in full at §28.** After reconciliation,
the remaining owner/orchestrator questions start with **A1**, the excluded
owner-only re-home of five published items off the planarity page (fallbacks
are already scaffolded), plus the unauthorised A5/A6 decisions. A2, A7, A10,
A11 and A12 are applied below; R-3 makes duplicate character minting forbidden.

### 17.3.1 Reconciliation receipt (applied 2026-08-14)

- A2 is accepted: abstract algebra LA-7 mints `thm-cauchy-binet-formula`;
  GT-7a cites it in the matrix-tree proof and does not mint it.
- R-3 settles A10: abstract algebra RT-3 mints
  `def-character-of-a-finite-abelian-group` and character orthogonality.
  CB-27, CB-31 and CB-14c cite those ids and do not mint either notion.
- A7 is accepted: number theory NT-22 supplies successive minima and
  Minkowski's second theorem; CB-32 may state the full Freiman theorem using
  those suppliers rather than retaining the geometry-of-numbers denial.
- A11/A12 are applied: the §16 Erdős--Hajnal pages cite GT-19's regularity
  lemma, and CB-21 adds `rem-lattice-fkg-and-probabilistic-fkg-agree` pointing
  to CB-29.
- CB-11 adds the power-form finite Ramsey corollary; CB-12 adds Erdős's finite
  $G(n,1/2)$ construction with no clique or stable set larger than
  $2\log_2 n+O(1)$. Both cite RA-12 `def-floor-and-ceiling`, the finite
  geometric-sum identity, and the elementary power/exponential estimates.
- The finite-probability pages point to PT-1/PT-2 for their later
  measure-theoretic restriction agreement. The finite statements stay owned
  here and no probability theorem is re-minted.
- `trees-forests-and-spanning-trees` is explicitly finite. GT-14 owns the
  bridge to arbitrary simplicial trees and normal spanning trees; later pages
  cite that bridge rather than silently generalising the published page.

## 17.4 Unresolved forward references

**Two, and both are on consequence kinds, which SEAMS §5 permits.** CB-23's
planar-bipartite $3$-choosability corollary of Alon–Tarsi, and — only if the
orchestrator declines the reorder — CB-14c's MacWilliams identity. **No
load-bearing forward reference sits on a spine item anywhere in this scaffold.**
Five ordering questions that are placement rather than mathematics are at §29.1.

## 17.5 Scope denials

Every denial is at §29.2 with the specific reason. The categories: **rests on a
subject the library has not reached** (algebraic topology — Kneser's lower bound,
the Colin de Verdière invariant; measure theory — graphons, the phase transition,
Borel–Cantelli, Talagrand's *presentation* but see below; first-order logic —
zero–one laws; LP duality — Seymour's decomposition; geometry of numbers — full
Freiman); and **genuinely unbuildable at bounded length, with the source's own
verdict quoted** (the strong perfect graph theorem, Szemerédi's theorem, the graph
minor theorem, the Moser–Tardos runtime).

**Two denials were reviewed and WITHDRAWN, and one rating was reversed**, which is
the finding this lane most wants to hand on. §11 denied **Frankl–Wilson** on
length; Babai–Frankl's own preface certifies a self-contained proof, so CB-24
carries it and the Borsuk disproof with it. §11's **CB-10 premise was false** —
Burnside's lemma is published. And the **basis-activity expansion of the Tutte
polynomial** was rated [C] by one harvest and [B] by a better-sourced one; the
better-sourced verdict wins and it is scaffolded. **A denial recorded before the
sources were read is a hypothesis, not a finding.**

Two denials are worth flagging as *not* what they look like: **Talagrand's
inequality is blocked by finite convex geometry, not by measure theory** — the
space is finite and the sum is finite — so a future level that builds finite
polytopes closes it. And **Moser–Tardos is not merely long**: its runtime theorem
quantifies over an infinite product space, and Alon–Spencer say so.

## 17.6 Corrections made to this file's own earlier content

Thirteen stale claims corrected in §18 by a previous instance of this lane, plus
three by this one: **§19.2 F2 is withdrawn** — the cofactor expansion, minors, the
adjugate and Cramer's rule *are* published, on a different page from the one F2
checked, and only Cauchy–Binet is genuinely absent (§23.0); **§19.1's "exactly one
pair above the planarity page" is superseded** by three, because Kuratowski–Wagner
turned out to be published; and **§20 row #83 is revised**, because it demanded a
proof of coefficient order-independence that is free, while missing the real
obligation, which is that the NBC complex *is* order-dependent. All internal `§n`
cross-references written under an earlier numbering have been reconciled.

## 17.7 Blockers

Fourteen, in full at §29.3. The ones that would stop a step-2 Beta: **CB-22
(species) has only one open treatment** and needs a second before the source-depth
gate; **Skolem's Steiner-triple-system block list was never verified against a
primary source** and must be copied, not reconstructed; **Grötzsch's theorem and
the crossing lemma are not source-complete**; **GT-10's broken-circuit and Stanley
reciprocity items are now sourced but Whitney's 1932 originals are gated**; and
**Bondy–Murty Exercise 17.2.8a ($\chi'\le2\Delta-\mu$) is unproved and unsourced —
do not scaffold it.** Two things a future session should not re-derive: `file -b`
misreports PDF page counts (it called a 42-page survey "6 pages", which would have
caused a false discard), and a "missing" library result must be searched for **by
id across `items/`**, not by reading the page where it is expected to live — that
is exactly what F2 got wrong.

**No permission was requested by this lane or by any of its seven subagents, and
no operation was blocked for want of authority.**

Prose scaffold, owner-commissioned 2026-07-28. Companion to
`research/plan-algebra-track.md`, `research/plan-topology-track.md`,
`research/plan-topology-set-theory-track.md` and
`research/plan-realanalysis-pages.md`. Machine-readable half:
`research/plan-spec.json`.

This file is **NOT normative**: `SCHEMA.md`, `CLAUDE.md`, `LEVELS.md` and
`ARCHITECTURE.md` win wherever they differ. It is a step-0 input.

**NOT YET SPLICED.** Nothing here is in `research/plan-spec.json` as of
2026-07-28. Every order below is a PROPOSAL in the post-splice numbering
defined by the renumber table in §4. Until the orchestrator applies that table,
`plan-spec.json` holds the 230-page numbering and the two do not agree.

**AUTHORITY BOUNDARY.** This file is authoritative ONLY for the four blocks it
defines — **CB** (combinatorics, 14 A-pages), **GT** (graph theory, 8 A-pages),
**CT** (category theory, 6 A-pages), **AB/MO** (additive, abelian and monoidal
categories, 5 A-pages) and **HA** (homological algebra, 6 A-pages), plus one
contingent module page: **40 A-pages, 40 B companions, 80 pages**. It does not
claim any existing page. Amendments owed to other scaffolds are collected in
§10 and are addressed to their owners; this file never edits them.

**ORDER-STALENESS WARNING.** Do not quote an order out of any prose scaffold,
including this one after the next insertion. `order` lives only in
`plan-spec.json`. Everything below was recomputed from that file on 2026-07-28,
when it held 230 pages with a maximum order of 242 and empty reserved bands at
60–67 and 94–97.

**CONCURRENCY WARNING (read before splicing).** Two other agents were working in
this repo on 2026-07-28, one of them scaffolding **modules and representation
theory**. This file's homological algebra block *consumes* modules and does not
scaffold them; §5 is the interface it needs. Whichever splice lands second must
recompute its own renumber table from the post-first-splice spec. For that
reason every threshold in §4 is stated as a **page id**, never only as a number.

---

## 1. Why this track exists

The library today proves a great deal *with* finite counting and has never
defined it. Verified on disk, 2026-07-28:

- **There is no binomial coefficient anywhere.** No `def-binomial-*`, no
  binomial theorem, no Pascal's rule. `items/def-integer-power.md` is the only
  file in the corpus that even contains the word. Two scaffolds have already
  hit this: `research/plan-realanalysis-pages.md` dropped **the general Leibniz
  rule** from RA-15 for exactly this reason and left RA-16 (`darboux-lhopital-and-taylor`)
  an inherited obligation to *mint a binomial coefficient itself* before it can
  state Taylor's theorem. That obligation should be discharged by a combinatorics
  page below it, not by an analysis page inventing counting in passing.
- **There is no factorial as a counting statement.** `lem-factorial-beats-geometric`
  exists as a growth estimate; nothing says $\lvert\operatorname{Sym}(n)\rvert = n!$.
  `plan-algebra-track.md` AA-7 (`symmetric-groups-and-the-sign-homomorphism`)
  simply asserts $\lvert S_n\rvert = n!$ in its inventory.
- **`lem-pigeonhole` exists and is published** (homed on
  `countability-and-uncountability`), in the sharp set-theoretic form "no
  injection $\sigma(n) \to n$". The strong/quantitative pigeonhole, double
  counting, and inclusion–exclusion do not exist.
- **The multinomial coefficient does not exist**, and `mixed-partials-taylor-and-extrema`
  is scaffolded to state Taylor's theorem in several variables, which is written
  in multi-indices.
- `library/combinatorics/_category.md` **already exists**, `status: draft`, with
  no pages in it, and `combinatorics` already has a registered rose accent in
  the frozen `web/lib/library-categories.ts`. The index group was created and
  never filled.

Above that floor there is nothing at all: no graph, no generating function, no
category, no chain complex. Four fields, greenfield.

What *is* already available and must be cited rather than re-minted is
substantial, and it is what makes this track self-contained:

| available | where | matters for |
|---|---|---|
| finiteness (`def-countable`, alias `def-finite-set`), `def-equinumerous`, `def-injection-surjection-bijection`, `lem-pigeonhole` | `countability-and-uncountability`, order 18, published | every counting item |
| `thm-recursion`, `thm-induction-principle`, `thm-strong-induction`, `thm-well-ordering-principle` | orders 6, 10, published | $n!$, $\mu$, every "least $n$ such that" definition |
| `def-finite-sum`, `lem-finite-sum-laws` | `roots-and-rational-powers`, order 16, published | inclusion–exclusion, generating functions, expectation |
| `def-partial-order`, `def-chain`, `def-well-order`, `thm-zorn` | `order-zorn-and-the-axiom-of-choice`, order 10, published | posets, Dilworth, resolutions |
| `thm-ultrafilter-lemma`, `def-ultrafilter`, `def-filter` | `filters-and-ultrafilters`, order 12, published | De Bruijn–Erdős, compactness arguments |
| `def-axiom-of-choice`, `def-countable-choice`, `def-dependent-choice`, `rem-choice-ledger` | orders 10–12, published | the choice ledger of §7 |
| `def-formal-laurent-series`, `lem-laurent-series-ring`, `thm-laurent-series-field` | `formal-laurent-series-field`, order 110, published | the dictionary owed by the formal power series page |
| **class language as a theorem schema** — `thm-transfinite-recursion` is explicitly stated for a *class function* and its body says "Because $G$ is a class function rather than a set, this is a theorem schema"; `fs-ordinals-form-a-set` and `thm-burali-forti` are published | `construction-of-the-natural-numbers`, `ordinals-and-transfinite-recursion` | **the entire size question in category theory** — see decision CC-D5 |

The last row is the most important fact in this file. The library has already
committed to the device that makes large categories statable in ZFC without a
new axiom, and it is already used in published, audited content.

---

## 2. What was checked and found absent

Verified absent from `items/` and from `plan-spec.json` on 2026-07-28, so that
nothing below is a silent duplicate:

`def-binomial-*`, `def-multinomial-*`, `def-factorial`, `def-graph`,
`def-digraph`, `def-tree`, `def-matching`, `def-chromatic-*`, `def-category`,
`def-functor`, `def-natural-transformation`, `def-module`, `def-tensor-product`,
`def-chain-complex`, `def-exact-sequence`, `def-generating-function`,
`def-formal-power-series` (only the **Laurent** field over $\mathbb{R}$ exists),
`def-partition-of-an-integer`, `def-stirling-*`, `def-catalan-*`,
`def-ramsey-*`, `def-poset-lattice` (only `def-partial-order` and `def-chain`),
`def-incidence-algebra`, `def-mobius-function`.

`lem-pigeonhole`, `def-countable`, `def-partial-order`, `def-chain`,
`thm-ultrafilter-lemma`, `def-finite-sum`, `lem-finite-sum-laws`,
`def-monoid-finite-product` **exist and are published** and are cited, never
re-minted. `def-monoid-finite-product` (order 20, `monoids-groups-and-subgroups`)
is the general finite product in a monoid and is the correct source for
$\prod$ over a finite index set once a monoid is in play; `def-finite-sum` is
the ordered-field one and is the correct source below order 20.

`AA-6` (`group-actions-and-cayleys-theorem`) is scaffolded with orbit–stabiliser
and the class equation but **not** with Burnside's orbit-counting lemma, so
CB-10 mints it without duplication. This was checked in
`plan-algebra-track.md` §AA-6 rather than assumed.

---

## 3. The owner decisions this file records

These are the decisions the commission of 2026-07-28 requires. Several are
**owner questions, not settled facts** — they are marked. A scaffolder may not
settle CC-D5, CC-D8 or CC-D9 unilaterally.

**CC-D1. Elementary counting goes LOW, at order 20, and forces a renumber.**
The full argument, with the trade-off the owner asked to see stated, is §4.1.
Two A-pages and their companions occupy orders 20–23; every page from old order
20 upward shifts, keeping relative order, so no existing citation can become
forward-pointing.

**CC-D2. Everything else in combinatorics and graph theory goes in ONE block
immediately above `the-complex-exponential-and-eulers-formula-examples`** (old
order 168). At that point the whole of abstract algebra, linear algebra, the
spectral theorem, and single-variable real analysis through $\exp$, $\log$ and
the trigonometric functions are below it, and nothing below it needs it. §4.2.

**CC-D3. Planarity is separated from the rest of graph theory and placed above
`the-topology-of-euclidean-space`.** Planarity is the one graph-theory topic
that is genuinely topological: "face" is undefined until the complement of a
plane graph is known to have finitely many regions, which is the polygonal
Jordan curve theorem. See §4.3 and the GT-8 page section.

**CC-D4. Category theory, abelian and monoidal categories, and homological
algebra are appended at the top of the reading order.** Their motivating
examples are groups, rings, modules, vector spaces AND topological spaces; a
category theory page below `topological-spaces-and-continuity` cannot use
$\mathbf{Top}$, and one below the module block cannot use $R\text{-}\mathbf{Mod}$.
Both are satisfied only at the top. §4.3.

**CC-D5 (OWNER DECISION REQUIRED). The foundational treatment of size.**
See §6. The recommendation is the **class-as-formula schema device the library
already uses** in `thm-transfinite-recursion`. It is ZFC-conservative and adds
no axiom, which is what the self-contained-scope rule requires. The cost is
real and is stated in §6.3. The alternatives (a universe axiom; restricting to
small categories only) are both rejected there, with reasons. **A scaffolder
must not pick one; the owner does.**

**CC-D6. Index groups.** Combinatorics and graph theory are homed in the
**existing `combinatorics` group** (rose accent, already registered, category
file already on disk). No code change. Category theory, abelian/monoidal
categories and homological algebra need a **new index group**; see §12.

**CC-D7. Modules are consumed, not scaffolded.** §5 is the interface. If the
concurrent module scaffold does not deliver the tensor product, the contingent
page at proposed order 297 supplies it; if it does, that page is DELETED at
splice time and its `requires` re-pointed. Two scaffolds must never claim the
same page.

**CC-D8 (OWNER DECISION REQUIRED). Block size.** As scaffolded this track is
**40 A-pages and 40 B-pages, 80 pages**, taking the spec from 230 to 310. That
is a third again as large as the library's entire current plan. §4.5 gives a
phased alternative that ships the same mathematics in three commits and lets
the owner stop after any of them.

**CC-D9 (OWNER DECISION REQUIRED). The four colour theorem stays ‡.** GT-8
proves the five colour theorem and states the four colour theorem as a recorded,
not-proved-here result. The proof is computer-assisted and cannot be audited by
this library's gates. See §9, denial 12.

**CC-D10. Standing requirements, unchanged from the owner's earlier
commissions**, binding every page below: (1) every definition carries its
well-definedness obligations as **numbered items**, never a parenthetical — §6
is the table; (2) forward references are minimized, and the blocks are layered
so that **no page below carries a load-bearing forward reference**; (3) anything
needing machinery outside published-plus-planned scope is DROPPED with a
recoverable note — §8 — the sole exemption being the adopted choice axioms
(AC, AC$_\omega$, DC, and BPI as an explicitly-flagged weak form) and
independence facts about them.

---

## 4. Placement, and the renumber it costs

### 4.1 The low insertion, and the trade-off the owner asked to see

**The floor.** Elementary counting needs exactly four things: $\mathbb{N}$ with
induction and recursion (order 6), finite sums (order 16), finiteness and
bijections (`def-countable`, `def-equinumerous`,
`def-injection-surjection-bijection`, order 18), and `lem-pigeonhole` (order
18). All four are published. **Order 20 is therefore the earliest legal slot**
— the same floor, for the same reason, that `plan-algebra-track.md` D1 found for
abstract algebra, and the truthful prerequisite line is again
"combinatorics requires `countability-and-uncountability`".

**The pull upward.** Everything that wants counting sits above 20:
`symmetric-groups-and-the-sign-homomorphism` wants $\lvert S_n \rvert = n!$;
`the-structure-of-finite-abelian-groups` and `cosets-and-lagranges-theorem`
want finite counting lemmas; `congruences-and-the-chinese-remainder-theorem`
wants the totient, whose product formula is an inclusion–exclusion;
`determinants-of-matrices-over-a-commutative-ring` wants the $n!$-term Leibniz
sum; `darboux-lhopital-and-taylor` has a *recorded, outstanding* obligation to
mint binomial coefficients; `mixed-partials-taylor-and-extrema` needs
multi-indices and multinomial coefficients.

**The tension, stated plainly.** The band 6–19 is dense and every insertion into
it renumbers essentially the whole library. Insertion 2 (algebra, 2026-07-27)
shifted 120 pages; insertion 3 (number theory) shifted 177; insertion 4 (TS-D2)
shifted 38. This one shifts **211 of 230 pages**, the largest yet.

**Why the recommendation is still to insert low.** The renumber itself is cheap
and mechanical: `order` lives in exactly one file, no item or page frontmatter
carries it, only four tools read it, and relative order is preserved so no
existing citation can become forward-pointing (`LEVELS.md` §"`order` is not
stable across insertions"). The expensive part is the prose sweep — the orders
quoted inside `plan-algebra-track.md`, `plan-topology-track.md`,
`plan-realanalysis-pages.md` and `plan-topology-set-theory-track.md` all go
stale. That sweep is owed anyway: `plan-topology-track.md` is already stale by
two renumbers and says so, and `LEVELS.md` records that the last sweep missed a
capitalised heading, two bare parentheticals and an entire table column.

**The alternative, and why it is worse.** Elementary counting could take slots
in the reserved band (now 60–67 and 94–97 pre-shift), with no renumber at all —
that is what TS-D2 did with four of the old 56–67 slots. It fails here for a
concrete reason: the band sits **above** `symmetric-groups-and-the-sign-homomorphism`
(40) and above the whole number theory block (22–27), so $\lvert S_n\rvert = n!$
and the totient formula could not cite it, and the sign homomorphism, Lagrange
and the CRT would each go on quietly inventing the counting they need. That is
the two-notions defect the library has already paid for twice. **Recommend:
insert low.**

**One consequence to hand to the number theory scaffolder.** With counting at
20–23, the number-theory block (new 26–31) may cite it, and the Euler totient
product formula becomes an inclusion–exclusion instead of a CRT corollary. §9.

### 4.2 The middle insertion

The rest of combinatorics and all of graph theory except planarity go in one
contiguous block **immediately above `the-complex-exponential-and-eulers-formula-examples`**
(old 168, new 172). Justification, page by page, is in each page section; the
binding constraints are:

- `algebraic-and-spectral-graph-theory` needs the spectral theorem for real
  symmetric matrices (old 127, new 131) before "the second-smallest Laplacian
  eigenvalue" is even defined, and Courant–Fischer before interlacing.
- `formal-power-series` owes a dictionary item to the published
  `def-formal-laurent-series` (old 110, new 114), and cannot be below it.
- `finite-probability-and-the-probabilistic-method` wants $e$ and $e^{-x}$
  bounds, which are `the-exponential-function` (old 153, new 157). Placing the
  block above 168 buys those, and with them the $e p (d+1) \le 1$ form of the
  Lovász Local Lemma and the standard first- and second-moment estimates,
  instead of forcing the awkward choice-free surrogates.
- `block-designs-and-finite-projective-planes` needs finite fields (old 92, new
  96) and rank over $\mathbb{R}$ (old 76/90, new 80/94).
- Nothing at old order $\le 168$ needs any of it. The only counting the analysis
  pages want is binomial and multinomial coefficients, and CC-D1 delivers those
  at 20.

Placing the block at 168 rather than at, say, 128 is strictly free: strictly
more is below it and nothing is lost.

### 4.3 The top block

Appended after the current maximum (old 242, new 282):

- `planarity-and-the-five-colour-theorem` needs
  `the-topology-of-euclidean-space` (old 197, new 239) for the polygonal Jordan
  curve theorem, plus `graph-colouring` and `trees-forests-and-spanning-trees`
  from the middle block.
- The CT/AB/MO/HA chain needs `subspaces-products-and-quotients` (new 231) and
  `topological-spaces-and-continuity` (new 229) for $\mathbf{Top}$, the module
  block for $R\text{-}\mathbf{Mod}$, and — for the best examples — the
  fundamental group as a functor (new 271) and `compactness` (new 235) for the
  Stone–Čech adjunction. Every one of those is below 282.

### 4.4 The renumber table

| old order | new order | pages |
|---|---|---|
| 1–19 | unchanged | deferred catalogue, $\mathbb{N}$, $\mathbb{R}$, order/AC, filters, sup/inf, roots, countability |
| — | **20–23** | **NEW: CB-1 A/B, CB-2 A/B** (elementary counting) |
| 20–59 | +4 → 24–63 | abstract algebra, number theory, free groups |
| 60–67 (empty, reserved) | +4 → 64–71 (empty, still reserved) | Sylow / Galois / f.g. abelian |
| 68–93 | +4 → 72–97 | linear algebra, algebraic extensions |
| 94–97 (empty, reserved) | +4 → 98–101 (empty, still reserved) | as above |
| 98–168 | +4 → 102–172 | analysis, metric topology, FTA, spectral theorem, exp/log/trig |
| — | **173–210** | **NEW: CB-3 … CB-14, GT-1 … GT-7, with B companions** (19 A-pages) |
| 169–242 | +42 → 211–284 | multivariable analysis, ordinals/cardinals, general topology, homotopy |
| — | **285–322** | **NEW: GT-8, CT-1…6, [tensor], AB-1…3, MO-1…2, HA-1…6, with B companions** (19 A-pages) |

Net: **230 → 310 pages**, maximum order 322. The reserved bands survive the
shift and stay empty. Relative order of every existing page is preserved.

Post-splice orders of the existing pages this file cites most (recomputed, not
remembered): `countability-and-uncountability` 18, `filters-and-ultrafilters` 12,
`roots-and-rational-powers` 16, `monoids-groups-and-subgroups` 24,
`congruences-and-the-chinese-remainder-theorem` 30,
`group-actions-and-cayleys-theorem` 42,
`symmetric-groups-and-the-sign-homomorphism` 44,
`rings-subrings-and-integral-domains` 46, `polynomial-rings-and-roots` 52,
`symmetric-polynomials` 58, `linear-independence-bases-and-dimension` 74,
`gaussian-elimination-and-row-reduction` 80,
`determinants-of-matrices-over-a-commutative-ring` 82,
`algebraic-extensions-degree-and-finite-fields` 96,
`inner-product-spaces-and-orthogonality` 94,
`formal-laurent-series-field` 114,
`continuity-ivt-evt-and-uniform-continuity` 127,
`the-spectral-theorem-and-singular-value-decomposition` 131,
`darboux-lhopital-and-taylor` 137, `the-exponential-function` 157,
`mixed-partials-taylor-and-extrema` 213,
`ordinals-and-transfinite-recursion` 225,
`cardinal-arithmetic-and-cofinality` 229,
`topological-spaces-and-continuity` 231,
`subspaces-products-and-quotients` 233, `connectedness` 235, `compactness` 237,
`the-topology-of-euclidean-space` 239, `the-fundamental-group` 273,
`applications-of-the-fundamental-group` 283.

`requires` edits owed to EXISTING pages at splice time (ids, not orders) — each
is a genuine new direct prerequisite, not a redundant one:

- `symmetric-groups-and-the-sign-homomorphism` += `finite-counting-and-binomial-coefficients` ($\lvert S_n\rvert = n!$).
- `congruences-and-the-chinese-remainder-theorem` += `inclusion-exclusion-and-the-pigeonhole-principle` (the totient product formula, if §9's amendment is accepted).
- `darboux-lhopital-and-taylor` += `finite-counting-and-binomial-coefficients` (general Leibniz rule, Taylor).
- `mixed-partials-taylor-and-extrema` += `finite-counting-and-binomial-coefficients` (multi-index Taylor).
- `determinants-of-matrices-over-a-commutative-ring` += `finite-counting-and-binomial-coefficients` **only if** its Leibniz-sum items actually cite a counting item; declare directly only if an item cites directly.

Run `node tools/validate-plan.mjs research/plan-spec.json` after the splice and
expect zero forward-pointing `requires`. Then grep every prose scaffold for the
word "order" **and for bare numbers**, and verify section headings against the
spec — the sweep that missed four classes of reference last time.

### 4.5 The phased alternative (CC-D8)

If 76 pages in one splice is too much, the three sites are independent and can
be spliced in this order, each a complete deliverable:

1. **Phase 1, 4 pages** (CB-1, CB-2 at 20–23). Discharges the recorded binomial
   coefficient obligation, unblocks $\lvert S_n\rvert = n!$ and multi-index
   Taylor, and is buildable **today** — every prerequisite is published. This
   is the highest-value 4 pages in the file.
2. **Phase 2, 38 pages** (CB-3…CB-14, GT-1…GT-7). Needs the algebra and linear
   algebra bands built, and the spectral theorem.
3. **Phase 3, 38 pages** (GT-8, CT, AB/MO, HA). Needs general topology, the
   module block, and CC-D5 settled.

Phase 1 does not commit the owner to phases 2 or 3. Phase 3 alone can be
deferred without touching phases 1–2. Phase 2 and phase 3 both renumber, so
doing them separately costs one extra prose sweep each; that is the price of
the option.

---

## 5. What this track needs from the module scaffold (CC-D7)

A concurrent agent is scaffolding modules and representation theory. This file
does **not** scaffold modules. The homological algebra block needs the
following, and needs them homed at an order below 309. Each line is an
interface, not a design:

| # | needed | used by |
|---|---|---|
| M1 | left/right $R$-module over a not-necessarily-commutative ring with 1; submodule; quotient module (with the representative-independence obligation); module homomorphism | everything in AB, HA |
| M2 | $\operatorname{Hom}_R(M,N)$ as an abelian group, and as an $R$-module when $R$ is commutative; functoriality in both variables, contravariant in the first | AB-1, HA-4, HA-5 |
| M3 | direct sums and direct products of arbitrary families of modules, with their universal properties | AB-1, HA-3 |
| M4 | free modules on a set; every module is a quotient of a free module | HA-3 (enough projectives) |
| M5 | exact sequences of modules — **or** this track owns them, see below | AB-3, HA-1 |
| M6 | **tensor product $M \otimes_R N$**: existence, the universal property for $R$-balanced/bilinear maps, functoriality, associativity and unit isomorphisms, right-exactness | MO-1 ($R\text{-}\mathbf{Mod}$ as monoidal), HA-5 (Tor) |
| M7 | $\mathbb{Z}$-modules are abelian groups (the dictionary item), so that $\mathbf{Ab} = \mathbb{Z}\text{-}\mathbf{Mod}$ is a theorem and not a coincidence | AB-2, HA-5 |
| M8 | $R[G]$, the group ring, if group cohomology is wanted on HA-5's B page | HA-5 B (optional) |

**M5 and M6 are the contested ones.** Exact sequences of modules are naturally
the module scaffold's; if that scaffold does not have them, AB-3 states them for
an arbitrary abelian category and HA-1's B page instantiates in
$R\text{-}\mathbf{Mod}$, which is the better layering anyway. The tensor product
is the real risk: it is a page of work with a genuine well-definedness
obligation (§6, #47). **The contingent page `tensor-products-of-modules` at
proposed order 297 exists precisely so the gap cannot be silent.** At splice
time the orchestrator does exactly one of: delete that page and re-point
`requires` at the module scaffold's page; or keep it and tell the module
scaffold not to mint $\otimes$. Not both, and not neither.

**Projective, injective and flat modules are OWNED HERE**, on HA-3, not
requested from the module scaffold. They are homological notions, their proper
statement is in an abelian category, and Baer's criterion carries a choice cost
that belongs in this file's ledger. If the module scaffold defines them anyway,
that is a duplication the orchestrator must resolve before either is authored.

---

## 6. The size question in category theory (CC-D5)

### 6.1 The problem, precisely

A category is a pair of collections plus composition. For $\mathbf{Set}$,
$\mathbf{Grp}$, $\mathbf{Top}$ the collection of objects is a proper class. In
plain ZFC a proper class is not an object of the theory, so — as the standard
foundational surveys put it — a sentence of the form "for every large category
$\mathcal{A}$ …" cannot even be *stated*, let alone proved. Mac Lane's own
solution is to assume a Grothendieck universe, i.e. an inaccessible cardinal;
that is a new axiom with strictly greater consistency strength than ZFC.

### 6.2 The three options

**(a) Universe axiom.** Rejected. The self-contained-scope rule exempts exactly
the adopted choice axioms and independence facts about them. "There exists an
inaccessible cardinal" is neither, it raises consistency strength, and adopting
it would silently change the foundations of every published page.

**(b) Small categories only.** Rejected. It is ZFC-clean and it guts the
subject: $\mathbf{Set}$, $\mathbf{Grp}$, $\mathbf{Top}$, $R\text{-}\mathbf{Mod}$
are all gone, so the Yoneda lemma has no presheaf category to land in, the
adjoint functor theorem has nothing to apply to, and every motivating example
the owner named is unavailable. It also fails the commission.

**(c) RECOMMENDED — classes as formulas, theorems as schemas.** This is the
device **the library already uses and has already published**:
`thm-transfinite-recursion` is stated for a class function $G$ and its own body
says "Because $G$ is a class function rather than a set, this is a theorem
schema"; `thm-burali-forti` and `fs-ordinals-form-a-set` are published items
about a proper class. A large category is specified by two formulas (objects,
morphisms) plus a composition formula, and every theorem quantifying over large
categories is a schema with one instance per defining formula. No new axiom, no
new consistency strength, and it is continuous with published practice rather
than a second foundation bolted on.

**(c1) vs (c2), and this is the part the owner must actually decide.** Option
(c) has two forms and they are NOT equivalent:

- **(c1) schemas over ZFC**, the library's current device. Predicative: a class
  is a formula. It gives everything except **global choice** — there is no way
  to pick one object out of each of a proper class of nonempty collections.
- **(c2) NBG with global choice.** NBG$+$GC is a **conservative extension of
  ZFC**: every statement about *sets* provable in it is provable in ZFC, and it
  adds no consistency strength. (Morse–Kelley is *not* conservative and is not
  on the table.) It gives explicit class variables and global choice.

**Recommendation: (c2), with global choice named in the Statement of every
theorem that uses it, exactly as AC is.** The reason is concrete, and it is
three specific theorems: "the limit" as a *functor* $\varprojlim : \mathcal{C}^\mathcal{J}
\to \mathcal{C}$, "the" derived functor $L_nF$, and "fully faithful $+$
essentially surjective $\Rightarrow$ equivalence" for large categories, each of
which chooses one representative per object of a proper class. Riehl says so
outright about the first — "this functor is not canonically defined but rather
requires an arbitrary choice of a limit to serve as 'the' limit for each
diagram" — and offers anafunctors as the choice-free repair.

**But global choice is NOT on the owner's exempt list** (which is AC, AC$_\omega$,
DC). So (c2) is a genuine extension of the adopted axioms, mitigated only by
conservativity. **If the owner declines it, (c1) still works** and the cost is
paid three times, in a uniform and honest way: state the **split** form of each
theorem, where the choice is supplied as data rather than asserted to exist —
split essential surjectivity, a *chosen* limit cone, a *chosen* resolution — and
record the AC/GC version as a corollary. The split forms are theorems of ZF.
**This file scaffolds the split forms as primary either way**, so that nothing
downstream breaks under either decision; only the corollaries move.

### 6.3 What option (c) costs, stated honestly

**First, what it does NOT cost.** Verified against Riehl, Leinster, Mac Lane,
Johnstone's Part III notes and the nLab: the Yoneda lemma, representables, all
small limits and colimits, the limits-from-products-and-equalizers theorem,
preservation/reflection/creation, adjunctions, RAPL, GAFT, SAFT, monads,
Eilenberg–Moore, Kleisli, Beck monadicity, monoidal categories, coherence,
strictification, additive and abelian categories, every diagram lemma, chain
complexes, derived functors, Ext, Tor and spectral sequences **all go through
with no universe**. The commission is not blocked anywhere.

**Second, the bill.** Six things are lost; every one of them is DROPPED under
the self-contained-scope rule and recorded in §9:

1. **There is no category of all categories.** $\mathbf{CAT}$ is not formable.
   $\mathbf{Cat}$, the category of **small** categories, IS formable. Say which
   one every statement means.
2. **The functor category $[\mathcal{C},\mathcal{D}]$ exists as a legitimate
   (locally small) category only when $\mathcal{C}$ is small and $\mathcal{D}$
   is locally small.** Riehl is explicit: if both are large but locally small,
   $\mathcal{D}^\mathcal{C}$ need not be locally small. **Consequence that
   changes a definition:** $[\mathcal{C},\mathcal{C}]$ is illegitimate for large
   $\mathcal{C}$, so **a monad must be defined directly** as $(T,\eta,\mu)$, and
   "a monoid object in the endofunctor category" is a Remark with a size caveat,
   never the definition (§8, #43).
3. **Presheaf categories on a large $\mathcal{C}$**, hence
   "$\mathbf{Set}^{\mathcal{C}^{op}}$ is the free cocompletion of $\mathcal{C}$"
   for large $\mathcal{C}$. Restricted to small $\mathcal{C}$; the single most
   visible casualty.
4. **Yoneda $\operatorname{Ext}^n$** (n-fold extension classes) as a *set*
   rather than a proper class needs well-poweredness. HA-5 uses **derived-functor
   $\operatorname{Ext}$** and states the Baer-sum $\operatorname{Ext}^1$
   interpretation for module categories only.
5. **"The" limit as a functor and "the" derived functor $L_nF$** need a choice
   over a proper class — global choice, not AC. §6.2(c1/c2) is exactly this
   decision.
6. **Iterated universe levels.** Never needed if rule 7 below is obeyed.

**Third, and this is the one that turns a convention into a theorem.** The
restriction "limits are indexed by SMALL categories" is not a concession, it is
forced. **Freyd's proposition** (Riehl 3.7.3): *any category admitting products
of families of objects as large as its own cardinality is a preorder* — if
$f \ne g : B \rightrightarrows A$ and $\kappa = \lvert\operatorname{mor}\mathcal{C}\rvert$,
then $\mathcal{C}(B, A^\kappa)$ would have $2^\kappa$ elements inside a
collection of size $\kappa$, contradicting Cantor. **The library already owns
`thm-cantor-powerset`**, so this is a real, cheap, in-scope theorem, and it is
what licenses the word "complete" meaning "small-complete". **It goes on CT-3 as
a numbered item**, because otherwise every completeness hypothesis in the block
looks like an arbitrary restriction.

**Fourth, a definitional consequence for adjunctions.** The hom-set definition
of an adjunction *presupposes* local smallness (Riehl notes the isomorphisms are
"possibly valued in a larger set-theoretical universe"); the unit–counit
definition presupposes nothing. **CT-4 therefore takes unit–counit $+$ the
triangle identities as the definition and proves the hom-set bijection as an
equivalent characterisation under local smallness.** This deliberately deviates
from Mac Lane, Riehl and Leinster, all of which take hom-set as primitive, and
the deviation is recorded on the page as a `rem-`.

None of these blocks any theorem the owner named. They change the hypotheses,
and the hypotheses must be visible.

---

## 7. The choice ledger

The library states choice costs in the Statement itself. Every use in this track:

| result | page | cost | note |
|---|---|---|---|
| finite counting, all of CB-1/CB-2 | 20, 22 | **none** | `lem-finite-choice` is a theorem of ZF; nothing here chooses |
| finite Ramsey, van der Waerden, Schur, Turán, all extremal graph theory | 199, 201 | **none** | finite objects throughout |
| **infinite Ramsey theorem** | 199 | **DC** (`def-dependent-choice`) | the nested-infinite-sets construction is a dependent choice. Cambridge Part II lists the infinite form with "no specific prerequisites", i.e. it is taught as needing nothing beyond $\mathbb{N}$ — the choice use is invisible in a normal course and must NOT be invisible here. The authoring agent states whether AC$_\omega$ suffices for the exact form proved, and does not guess |
| **König's lemma** (infinite finitely-branching tree has an infinite branch) | 199 | **DC** | flagged in the Statement |
| **De Bruijn–Erdős** ($\chi(G) \le k$ iff every finite subgraph has $\chi \le k$) | 197 | **BPI**, via the published `thm-ultrafilter-lemma` | BPI is strictly weaker than AC and the library already owns it; it is not an unproved dependency, it is a cited published theorem. The Statement names it |
| **infinite Hall / marriage theorem** for a family of finite sets | 195 | **BPI** (Rado selection, same route) | the version for infinite sets is DENIED, §9 |
| every vector space has a basis, used by Fisher's inequality only in finite dimension | 205 | **none** | finite-dimensional; cite `thm-any-two-finite-bases-have-the-same-size`, not the Zorn version |
| **Baer's criterion**; $R\text{-}\mathbf{Mod}$ has enough injectives | 315 | **AC** (Zorn, `thm-zorn`) | named in the Statement |
| every module is a quotient of a free module (enough projectives) | 315 | **none** beyond what M4 already assumes | the free module on the underlying set is canonical |
| **fully faithful + SPLIT essentially surjective $\iff$ equivalence** | 287 | **none** — a theorem of ZF | *split* means the object and the isomorphism $Fa \cong b$ are given as DATA. This is the primary form, and it is why nothing downstream depends on the decision of §6.2 |
| fully faithful + essentially surjective $\Rightarrow$ equivalence | 287 | **AC** (small); **global choice** (large) | a corollary of the split form. Johnstone: "note that the choice is always required"; the statement is *equivalent* to AC, not merely implied by it. The forward direction is choice-free |
| "every equivalence can be improved to an adjoint equivalence" | 287 | **none** | choice-free; state it, because it is what makes the split form usable |
| $\varprojlim$ as a FUNCTOR $\mathcal{C}^\mathcal{J} \to \mathcal{C}$ | 291 | **global choice** (§6.2) | the split form — a chosen limit cone for each diagram, given as data — is choice-free and is what CT-3 states |
| the adjoint functor theorem (GAFT) | 293 | **AC** where a choice of solution-set elements is made | Riehl's proof of the initial-object lemma makes a class-indexed choice; the standard repair (joint equalizer of the endomorphisms of the limit, legitimate because local smallness makes $\mathcal{C}(\ell,\ell)$ a set) avoids it. **Use the repaired version and say so** |
| $L_nF$, $R^nF$ as FUNCTORS | 317 | **DC** for the resolution's construction; **global choice** for a chosen resolution per object | same shape as $\varprojlim$; the split form takes the resolution as data |
| existence of injective resolutions of arbitrary length | 315 | **AC** and **DC** (the recursion picks an embedding at each stage) | state both |
| transfinite constructions in HA | 315–321 | **AC** | the library's `thm-transfinite-recursion` is choice-free; the *choices fed into it* are not |

A `rem-choice-ledger`-style remark, in the style of the published one, is
REQUIRED on CB-11 (`ramsey-theory`, 199), on GT-4
(`matchings-covers-menger-and-network-flows`, 195), on GT-5 (`graph-colouring`,
197), on CT-4 (`adjunctions-and-the-adjoint-functor-theorems`, 293) and on HA-3
(`projective-and-injective-resolutions`, 315).

---

## 8. Well-definedness obligations (CC-D10, requirement 1)

Each row is a **required numbered item** on the page named, never a
parenthetical, per the WORKFLOW definition-justification rule. Orders are
post-splice.

| # | page | the definition | what must be proved first |
|---|---|---|---|
| 1 | 20 | $\lvert A \rvert$ for finite $A$ | there is **exactly one** natural $n$ with $A \approx n$ — existence is `def-countable`, uniqueness is `lem-pigeonhole`. Without this, every count in the library is ambiguous |
| 2 | 20 | $n!$ and the falling factorial $n^{\underline{k}}$ | existence and uniqueness of the recursively defined function, by `thm-recursion`; $0! = 1$ is the BASE CLAUSE of that recursion, not an imported convention (`def-monoid-finite-product` is at order 24, above this page — see trap (iii)); and the agreement $\iota(n!) = \prod_{j<n}\iota(j+1)$ with the real-valued finite product of `def-finite-sum` is a required clause, because the published `lem-factorial-beats-geometric` (`limsup-and-subsequential-limits`, order 122) already defines a real-valued factorial by exactly that product |
| 3 | 20 | $\binom{n}{k}$, **defined as $\lvert [A]^k \rvert$** | the set $[A]^k$ of $k$-element subsets of a finite $A$ is finite (so #1 applies), and $\lvert [A]^k\rvert$ depends only on $\lvert A\rvert$. **Defining it as $n!/(k!(n-k)!)$ instead is not legitimate until integrality is a theorem** — which is exactly the content of $\binom{n}{k}\,k!\,(n-k)! = n!$ |
| 4 | 20 | the multinomial coefficient $\binom{n}{k_1,\dots,k_m}$ | the set of ordered partitions of an $n$-set into blocks of the prescribed sizes is finite and nonempty **iff** $\sum k_i = n$; the hypothesis is part of the definition |
| 5 | 20 | $\sum_{i<n} a_i$ over a finite INDEX SET rather than an initial segment | independence of the chosen enumeration (commutativity/associativity), so that "the sum over $S$" is defined. **CORRECTED (Alpha-F1, frontier-1, 2026-07-28): this canNOT be discharged by citation.** The published `lem-finite-sum-laws` has additivity, scaling, splitting, monotonicity, telescoping and the product laws and **no permutation-invariance clause**, verified on disk; nothing else in the corpus carries one. So `lem-finite-sum-permutation-invariance` is MINTED here (trap (vi)) and cited alongside `lem-finite-subsets-listable`. Per SCHEMA §3 it goes in the definition's `deps`, not its `justified_by` |
| 6 | 22 | the inclusion–exclusion alternating sum | the index set (nonempty subsets of a finite index set) is finite, from `cor-cardinality-of-the-power-set` and `thm-subset-of-a-finite-set`, so the sum is a finite sum in the sense of #5. TWO further obligations, added frontier-2: the summand is REAL, since it carries a sign, so the identity is stated in $\mathbb{R}$ through `def-canonical-natural`; and the COMPLEMENTARY form runs over all subsets including the empty one, so the ambient finite set $X$ must be named in the definition and $A_\varnothing := X$ stipulated there. Both live in `def-a-sieve-family-and-its-intersections` |
| 6b | 22 | $\lceil m/n \rceil$ for $n \ge 1$ | the set of $q$ with $m \le nq$ is nonempty, so it has a least element by `thm-well-ordering-principle`. Minted as `def-the-ceiling-of-a-quotient-of-naturals` because the library has NO floor or ceiling and `thm-division-algorithm-in-z` is homed above this page, on `divisibility-gcd-and-bezout` |
| 7 | 22 | the derangement number $D_n$ | the set of fixed-point-free bijections of a finite set is finite, being a subset of $\operatorname{Bij}(A)$, which is finite by `thm-number-of-bijections-of-a-finite-set`; and $D_0 = 1$, the empty function being vacuously fixed-point-free |
| 8 | 173 | height, width of a finite poset | the sets of chain and antichain sizes are nonempty (singletons are both) and finite, so maxima exist by `lem-finite-set-has-max` |
| 9 | 175 | $R[[x]]$, the convolution product | each coefficient $\sum_{i+j=n} f_i g_j$ is a **finite** sum; then associativity, distributivity, commutativity when $R$ is |
| 10 | 175 | **summable family** in $R[[x]]$ | $(f_i)_{i \in I}$ is summable iff for each $n$ only finitely many $f_i$ have $[x^n]f_i \ne 0$; only then is $\sum_i f_i$ defined. **Every infinite product and every infinite sum of generating functions in this track is illegitimate until this item exists** — it is what the partition generating function rests on |
| 11 | 175 | composition $f \circ g$ | defined only when $g$ has zero constant term; the proof is that the family $(f_n g^n)$ is then summable in the sense of #10. The hypothesis is part of the definition |
| 12 | 175 | the inverse $1/f$ | exists iff $f_0$ is a unit of $R$, and is then unique |
| 13 | 175 | $\sqrt{1 - 4x}$ and general $(1+x)^\alpha$ | existence and **uniqueness** of the square root with constant term $1$; without uniqueness the Catalan generating function argument picks a root it has not shown to be the right one |
| 14 | 175 | the formal residue $[x^{-1}]$ in $R((x))$, used by Lagrange inversion | it is $R$-linear, and $[x^{-1}](f' f^{n}) = 0$ for $n \ne -1$ — the identity the whole inversion formula turns on. Plus the **dictionary item** relating $R[[x]]$ for $R = \mathbb{R}$ to the published `def-formal-laurent-series` (an isomorphism onto the nonnegative-support subring, after the variable renaming), so the library does not hold two unrelated notions of formal series |
| 15 | 177 | the generating function of a sequence | none — it is a bijection by construction; but the **rational** generating function's partial-fraction decomposition needs the field of fractions of $F[x]$ and the fact that the denominator factors over a splitting field, so the field must be named |
| 16 | 179 | the Catalan number $C_n$ | $\binom{2n}{n}/(n+1)$ is an integer. This is a **theorem** (cycle lemma or reflection), not a definition; state $C_n$ as a count first and derive the formula |
| 17 | 181 | $S(n,k)$, the Stirling number of the second kind | the set of partitions of an $n$-set into exactly $k$ nonempty blocks is finite |
| 18 | 181 | the exponential generating function | division by $n!$ needs $R$ to be a $\mathbb{Q}$-algebra; state the hypothesis where the definition is made, not later |
| 19 | 183 | $p(n)$, the partition number | the set of partitions of $n$ is finite (bounded by the compositions count) |
| 20 | 183 | the infinite product $\prod_{k \ge 1} (1-x^k)^{-1}$ | summability, #10. Also: the *identity* of two formal series is coefficientwise equality, so "Euler's identity" is a claim about infinitely many finite computations and must be proved as such |
| 21 | 185 | the incidence algebra $I(P,R)$ | the convolution $(f*g)(x,y) = \sum_{x \le z \le y} f(x,z)g(z,y)$ is a finite sum **only if $P$ is locally finite**; local finiteness is a hypothesis of the definition, and the counterexample (a non-locally-finite poset where $*$ is undefined) is the B page's job |
| 22 | 185 | the Möbius function $\mu$ | existence and uniqueness by recursion on the finite intervals, i.e. $\delta$ is a unit of $I(P,R)$ and $\zeta$ is invertible; the recursion is `thm-recursion` on interval size |
| 23 | 187 | the cycle index $Z(G)$ | it lives in $\mathbb{Q}[x_1,\dots,x_n]$, a polynomial ring in several variables. **Check on disk whether `symmetric-polynomials` (new 58) actually mints multivariate polynomial rings**; if it only handles symmetric functions, this page mints $R[x_1,\dots,x_n]$ with a dictionary to `polynomial-rings-and-roots` |
| 24 | 203 | a finite probability space, and $\mathbb{E}[X]$ | the weights are nonnegative and sum to $1$; $\mathbb{E}[X] = \sum_\omega p(\omega)X(\omega)$ is a finite sum. Linearity of $\mathbb{E}$ is a numbered theorem, not an appeal to intuition, and it is the only thing the first-moment method uses |
| 25 | 199 | the Ramsey number $R(s,t)$ | **the set of $n$ that work is nonempty**, which is Ramsey's theorem — so the theorem precedes the definition, not the other way round; then `thm-well-ordering-principle` gives the least. Identical shape for the van der Waerden number $W(k,r)$ and the Schur number |
| 26 | 189 | $d(u,v)$, the graph distance | the set of $u$–$v$ walk lengths is nonempty **iff** $u$ and $v$ are in the same component; either restrict the definition to a component or adopt $d = \infty$ as a stated convention with the arithmetic of $\infty$ pinned down |
| 27 | 189 | connectivity $\kappa(G)$, girth $g(G)$ | $\kappa$ is a minimum over a set that is EMPTY for complete graphs, so $\kappa(K_n) := n-1$ is a **convention** and must be labelled one; $g$ is undefined for forests, same treatment |
| 28 | 191 | the number of spanning trees $\tau(G)$ | the set of spanning trees of a finite graph is finite |
| 29 | 197 | the chromatic number $\chi(G)$ | the set of feasible $k$ is nonempty ($k = \lvert V\rvert$ works), so a least exists |
| 30 | 197 | the chromatic **polynomial** $P(G,k)$ | that the number of proper $k$-colourings **is** a polynomial function of $k$ is a theorem (deletion–contraction). The word "polynomial" in the name is not licensed until it is proved |
| 31 | 209 | the Laplacian spectrum, $\lambda_2$, the spectral gap | the eigenvalues of a real symmetric matrix are real and can be listed in order — the spectral theorem (new 131). Before it, "the second-smallest eigenvalue" is not a definition |
| 32 | 209 | "**the** cofactor" in the matrix-tree theorem | all cofactors of the Laplacian are equal; that theorem is what licenses the definite article |
| 33 | 285 | a **face** of a plane graph | the complement of a plane graph in $\mathbb{R}^2$ has finitely many regions. This rests on the **polygonal Jordan curve theorem**, which GT-8 proves as a numbered theorem. Euler's formula is meaningless until $F$ is defined, and this is the single largest well-definedness obligation in the file |
| 34 | 285 | a plane graph, and planarity | the definition fixes edges as **polygonal arcs**; see §8 denial 15 for what is NOT claimed |
| 35 | 287 | composition of natural transformations | the vertical composite is natural (a proof, not an observation); the horizontal composite is well defined, and the **interchange law** holds — without it the 2-categorical structure of $\mathbf{Cat}$ is asserted, not proved |
| 36 | 287 | the functor category $[\mathcal{C},\mathcal{D}]$ | $\operatorname{Nat}(F,G)$ is a **set**, which needs $\mathcal{C}$ small and $\mathcal{D}$ locally small (§6.3(2)). The size hypothesis IS the well-definedness |
| 37 | 287 | isomorphism, monomorphism, epimorphism | mono/epi are defined by cancellation, and the theorem that in $\mathbf{Set}$ they are injective/surjective is a separate item; conflating them is the standard error and the B page carries the ring-theoretic counterexample ($\mathbb{Z} \hookrightarrow \mathbb{Q}$ is epi in $\mathbf{Ring}$, not surjective) |
| 38 | 289 | the Yoneda embedding | $\operatorname{Nat}(\mathcal{C}(-,c),F)$ is a priori a class; the bijection with $Fc$ **proves** it is a set, so the bijection is constructed before it is called a hom-set (§6.3(3)) |
| 39 | 291 | "**the**" limit, product, equalizer, pullback, kernel | uniqueness **up to unique isomorphism compatible with the cone**. The definite article and the notations $\prod$, $\varprojlim$, $\ker$ are all illegitimate until this is proved, once, in general |
| 40 | 291 | limits from products and equalizers | the construction requires the products indexed by $\operatorname{ob}\mathcal{J}$ and $\operatorname{mor}\mathcal{J}$ to exist, i.e. $\mathcal{J}$ **small** and $\mathcal{C}$ to have small products |
| 41 | 293 | adjunction | **the definition is unit–counit $+$ the two triangle identities** (§6.3, fourth point); the hom-set bijection is a *characterisation* under local smallness, and the equivalence is a numbered theorem with six discharges: define $\eta_c := \Phi(\mathrm{id})$ and $\varepsilon_d := \Phi^{-1}(\mathrm{id})$; naturality of $\eta$ (from naturality of $\Phi$ in the first variable); naturality of $\varepsilon$ (second variable); the triangle identities; the converse construction $\Phi(f) = Gf \circ \eta$; and that the two constructions are mutually inverse both ways |
| 42 | 293 | the left adjoint as a functor | given a universal arrow for each object, the assignment on morphisms is forced and functoriality is a proof; and picking the universal arrows is where the choice cost of §7 enters |
| 43 | 295 | the Eilenberg–Moore category $\mathcal{C}^T$ | it IS a category: algebra morphisms compose, identities are algebra morphisms |
| 44 | 297 | $\operatorname{Lan}_K F$ | existence via the colimit formula needs the comma categories to be **small** and $\mathcal{D}$ to be cocomplete; the pointwise/global distinction is stated, not blurred |
| 45 | 301 | the biproduct $A \oplus B$, and the notation | **define the biproduct enrichment-free** — the canonical map $A \sqcup B \to A \times B$ built from identities and zero morphisms is an isomorphism; this presupposes only zero morphisms. **Then addition is FREE**: a category with finite biproducts is canonically and uniquely $\mathbf{CMon}$-enriched via $f + g := \nabla \circ (f \oplus g) \circ \Delta$, and the uniqueness is what licenses the notation. The converse ($\mathbf{Ab}$-enriched $+$ finite products $\Rightarrow$ biproducts) is a **separate** theorem with different hypotheses; both are stated. Neither extends to infinite (co)products — say so |
| 46 | 301 | the additive structure on $\operatorname{Hom}$ | bilinearity of composition is part of the definition of preadditive and must be checked in every example, not assumed |
| 47 | 299 | $M \otimes_R N$ | existence (free module on $M \times N$ modulo the balancing relations) **and** the universal property; the induced map $M \otimes N \to P$ from a balanced map is well defined; functoriality; and the associativity/unit isomorphisms are natural. If the module scaffold owns this page, it owns this row too |
| 48 | 303 | image, coimage, and **abelian** | $\operatorname{im} f := \ker(\operatorname{coker} f)$ requires both to exist; the canonical $\operatorname{coim} f \to \operatorname{im} f$ must be **constructed** before anything says it is an isomorphism. **Axiomatise abelian as AB0 (finite products and coproducts exist and agree) $+$ AB1 (all kernels and cokernels) $+$ AB2 (the canonical map is iso), and prove $\mathbf{Ab}$-enrichment as a THEOREM**, never postulate it: $-\mathrm{id} := p_1 i \circ (p_2 i)^{-1}$ where $i = \ker(\nabla)$. The equivalence with "every mono is a kernel and every epi is a cokernel", and the corollary that abelian categories are **balanced**, are separate numbered items |
| 49 | 303 | subobject, and the quotient $A/B$ | subobjects are equivalence classes of monos; the relation must be shown to be an equivalence. $A/B := \operatorname{coker}(B \rightarrowtail A)$ |
| 50 | 305 | exactness at a node | $\operatorname{im} f \le \ker g$ is a comparison of **subobjects**, so the canonical mono $\operatorname{im} f \to \ker g$ must exist before "exact" can say it is an isomorphism |
| 51 | 305 | the pseudo-element ("member") calculus | the route the diagram lemmas take (§9 denial 20). **Prerequisite: the pullback of an epi is an epi** — its own numbered lemma, and the only thing needed first. A member of $a$ is an arrow into $a$; $x \equiv y$ iff $xu = yv$ for some epis $u,v$, and **transitivity is exactly where the pullback lemma is spent**. Then Mac Lane VIII.4 Theorem 3 as **six numbered rules**, of which rule (vi), the subtraction surrogate, is the whole art: members have no subtraction, and the five lemma cannot be proved without (vi) |
| 52 | 305 | the connecting morphism of the snake lemma | **build it arrow-theoretically, not elementwise.** $\delta_0 = p^{\prime} g k^{\prime}$ satisfies $s^{\prime}\delta_0 = 0$ and $\delta_0 s = 0$, so since $u^{\prime} = \ker s^{\prime}$ and $u = \operatorname{coker} s$, it factors **uniquely** as $u^{\prime}\delta u$ — existence AND uniqueness come free from the universal properties, with no choices to be independent of. Members are then used only to compute exactness. **Naturality of $\delta$ is a SEPARATE obligation** and the long exact sequence of HA-2 requires it |
| 53 | 307 | the $n$-fold tensor product, and unparenthesised strings | **coherence** is what licenses writing $A_1 \otimes \cdots \otimes A_n$ at all; until then only explicitly parenthesised products are defined. Route: prove **strictness** (every monoidal category is monoidally equivalent to a strict one, by the Joyal–Street clique construction) and get coherence as a **half-page corollary**, EGNO §2.8→§2.9 — not Mac Lane's six-page direct combinatorial proof. State coherence as "every diagram in the FREE monoidal category commutes": Mac Lane himself warns that the slogan "every diagram commutes" is false as stated. This row is a large fan-in: **every later item writing an unbracketed tensor string depends on it**, and the edge must be explicit |
| 54 | 307 | the unit constraints | the triangle axiom, plus the derived facts $\rho_I = \lambda_I$ and the redundancy of some of Mac Lane's original axioms — state which axioms are assumed and which are proved |
| 55 | 309 | a $\mathcal{V}$-enriched category | composition is a morphism of $\mathcal{V}$ and associativity/unit are commuting diagrams in $\mathcal{V}$; then the **dictionary theorem**: preadditive $=$ $\mathbf{Ab}$-enriched, citing AB-1 backwards |
| 56 | 311 | $H_n(C) = \ker d_n / \operatorname{im} d_{n+1}$ | $d^2 = 0$ gives a canonical mono $\operatorname{im} d_{n+1} \to \ker d_n$ (row 50), and the quotient is row 49. Both precede the definition |
| 57 | 311 | the homotopy category $K(\mathcal{A})$ | chain homotopy is an equivalence relation compatible with composition, so the quotient category exists |
| 58 | 315 | a projective / injective resolution | existence needs enough projectives/injectives; and the **comparison theorem** — any two resolutions are chain homotopy equivalent — is what every later definition rests on |
| 59 | 317 | $L_nF(A)$, $R^nF(A)$ | seven discharges, each a numbered item: (a) resolutions exist (enough projectives $+$ recursion, i.e. **DC**); (b) comparison theorem, **existence** of a chain lift; (c) comparison theorem, **uniqueness up to chain homotopy**; (d) **an additive functor preserves chain homotopies** — this is where additivity is spent and it is not optional; (e) a chain homotopy equivalence induces an isomorphism on homology; (f) the resulting isomorphisms are canonical and compose, so $L_nF$ is a **functor**, not merely well defined on objects; (g) $L_0F \cong F$ for right-exact $F$ and $L_nF(P) = 0$ for projective $P$. Plus the global-choice debt of §7 |
| 60 | 319 | $\operatorname{Ext}^n_R(A,B)$ | the **balancing theorem**: a projective resolution of $A$ and an injective resolution of $B$ give **naturally** isomorphic answers, so both enough projectives and enough injectives are hypotheses. **Prove it by the double complex $\operatorname{Hom}(P_\bullet, I^\bullet)$ with an acyclic-resolution argument (Weibel §2.7), NOT via spectral sequences.** Routing balancing through spectral sequences and then explaining the spectral sequence extension problem via $\operatorname{Ext}^1$ is a circularity, and in a strictly ordered library it is a fatal one |
| 61 | 319 | $\operatorname{Tor}^R_n(M,N)$ | balanced in the same sense; and for commutative $R$, $\operatorname{Tor}_n(M,N) \cong \operatorname{Tor}_n(N,M)$ |
| 62 | 321 | the spectral sequence of a filtered complex | $E^{r}_{p,q}$ and $d^r$ are well defined and $d^r \circ d^r = 0$; **convergence** requires an explicit boundedness hypothesis on the filtration and the definite article "the abutment" waits on it |

---

## 9. Scope denials (CC-D10, requirement 3)

Dropped from the scaffold rather than authored with an unproved dependency.
Each records **why** and **what would license it**. A dropped result is
deferred, not deleted.

1. **Analytic combinatorics: singularity analysis, transfer theorems,
   saddle-point asymptotics** (Flajolet–Sedgewick). Needs complex analysis —
   Cauchy's integral formula, residues, analytic continuation — and **the
   library has no complex analysis track at all** (it has $\mathbb{C}$ as a
   field and the complex exponential, and stops). Licensed by a complex
   analysis track. Everything generating-function-shaped in this file is
   therefore **formal**, in $R[[x]]$, and never analytic.
2. **Asymptotics of $p(n)$ (Hardy–Ramanujan) and of the Bell and Catalan
   numbers.** Circle method / saddle point; same denial as 1.
3. **Stirling's formula for $n!$.** Not out of scope mathematically — it needs
   the integral, $\log$, and Wallis, all planned — but it is **not in
   `plan-spec.json` anywhere**. Denied here and raised as an amendment to the
   analysis track (§10). Once it exists, elementary asymptotic estimates in
   CB-2 and CB-12 become licensed. **Its earliest legal home is order 177
   (`the-logarithm-and-general-powers`), and 179 if the proof uses Wallis**
   (`sine-cosine-and-the-definition-of-pi`) — see §10 amendment 2, which was
   corrected on 2026-07-28 after asking for a home above order 161, which no
   page can satisfy.
4. **Szemerédi's regularity lemma, and Szemerédi's theorem on arithmetic
   progressions.** The regularity lemma is a page of machinery on its own and
   the theorem is research-level. Licensed by a dedicated regularity page. Van
   der Waerden's theorem **is kept** (elementary double induction).
5. **Erdős–Stone–Simonovits.** The elementary proof is long and rests on
   Kővári–Sós–Turán plus a delicate induction. **Kővári–Sós–Turán is kept**;
   Erdős–Stone is denied and licensed by either a regularity page or a
   dedicated extremal page. Turán's theorem, Mantel's theorem and the Turán
   density of complete graphs are all kept.
6. **Measure-theoretic probability, and everything resting on it**: infinite
   probability spaces, the Rado graph / countable random graph, 0–1 laws,
   martingale concentration, Azuma. Measure theory is `deferred-measure-and-integration`.
   The probabilistic method in this track is **finite** throughout: a finite
   probability space is a finite set with weights, and expectation is a finite
   sum. Chernoff-type bounds ARE keepable in the finite setting once $\exp$ is
   below the page (it is, new order 157) and are flagged on CB-12 for the
   authoring agent to include or drop with a note.
7. **The strong perfect graph theorem** (Chudnovsky–Robertson–Seymour–Thomas).
   Research-level. The **weak** perfect graph theorem (Lovász) has an
   elementary proof and is flagged as optional on GT-5. Licensed by a
   dedicated page.
8. **The graph minor theorem** (Robertson–Seymour) and well-quasi-ordering of
   graphs. Research-level. **Wagner's theorem** ($K_5$/$K_{3,3}$ minors) is
   kept on GT-8; Kuratowski's is kept.
9. **Bruck–Ryser–Chowla.** Needs the Lagrange four-square theorem or
   Hasse–Minkowski over $\mathbb{Q}$, neither of which is in the spec.
   **Fisher's inequality is kept** (a rank argument over $\mathbb{R}$, fully in
   scope). Licensed by a quadratic-forms-over-$\mathbb{Q}$ page.
10. **Existence of Steiner systems in general** (Wilson, Keevash). Research-level.
    **Steiner triple systems are kept** (the Bose/Skolem constructions are
    elementary and constructive), as are finite projective planes over
    $\mathbb{F}_q$.
11. **Kruskal–Katona.** Long, and its natural home is a shadows page. Denied;
    the local LYM inequality is kept and is what Sperner actually needs.
12. **The four colour theorem** (CC-D9). Computer-assisted; the library's gates
    cannot audit a discharge of $\sim 600$ configurations, and asserting it
    would be a claim the library cannot stand behind. **Stated as a
    `not-proved-here` ‡ entry** on the existing catalogue, with the five colour
    theorem proved outright on GT-8. Licensed by nothing this library can do.
13. **Vizing's theorem for multigraphs and the Goldberg–Seymour conjecture.**
    The simple-graph Vizing theorem is kept (the fan argument is elementary).
14. **Hadwiger's conjecture; list-colouring conjecture; Hadwiger–Nelson.** Open
    problems; they belong on `open-problems-and-research-frontier`, not here.
15. **The equivalence of combinatorial and topological planarity, and Fáry's
    and Steinitz's theorems.** GT-8 defines a plane graph with **polygonal**
    edges and proves everything about that notion, exactly as Diestel does.
    What is NOT claimed is that this agrees with embeddability by arbitrary
    Jordan arcs, nor that every abstract planar graph has a straight-line
    drawing. Licensed by a surfaces/embeddings page. **The general Jordan curve
    theorem stays ‡** (`rem-jordan-curve-theorem`); only the **polygonal** case
    is proved, and only that case is used.
16. **Genus, embeddings in surfaces, the Heawood formula, rotation systems.**
    Needs surface topology. Denied; licensed by a surfaces page after the
    homotopy block.
17. **The infinite marriage theorem for families of infinite sets.** Hall's
    condition is not sufficient; the correct statement (Aharoni) is
    research-level. The finite-sets version is kept, with its BPI cost in the
    Statement (§7).
18. **Matroid theory, Tutte polynomials beyond the chromatic polynomial,
    the Tutte–Berge formula's matroid generalisation.** Not commissioned.
    Recorded so that a later matroid page has a starting point.
19. **Additive combinatorics** (Freiman, Plünnecke, sum–product). Not
    commissioned.
20. **The Freyd–Mitchell embedding theorem.** Its proof needs the theory of
    Grothendieck categories, injective envelopes and a substantial amount of
    module theory, and it would be the only justification for "diagram chase as
    if elements existed". **Denied, and replaced**: AB-3 proves the diagram
    lemmas by the pseudo-element / "member" calculus (Mac Lane VIII.4), whose
    rules are numbered lemmas (§8, #51). This is more work than a Freyd–Mitchell
    citation and it is the only route compatible with the self-contained-scope
    rule. Licensed by a Grothendieck-categories page.
21. **A universe axiom / inaccessible cardinal.** §6.2(a). Rejected on the
    self-contained-scope rule; it is not a choice axiom.
22. **Global choice.** Not adopted. Every theorem that would need it is either
    restricted to small categories or restated with the choice supplied as a
    hypothesis (§6.3(4), §7).
23. **$\infty$-categories, model categories, derived categories, triangulated
    categories, derived $\otimes$.** Not commissioned and each is a track.
    Recorded because HA-6's B page will be tempted to gesture at them; a
    Remarks-only orientation note is permitted, a dependency is not.
24. **The Grothendieck spectral sequence, hyperhomology, and general
    convergence theory** (Boardman). HA-6 covers filtered complexes, double
    complexes and the two spectral sequences of a double complex, with
    convergence under an **explicit boundedness hypothesis** only. The
    Grothendieck spectral sequence is flagged as optional on HA-6 and dropped
    if the page exceeds the size cap. Cartan–Eilenberg resolutions are denied.
25. **Group cohomology beyond $H^0, H^1$ and the bar resolution as an
    example.** Needs $R[G]$ (module-scaffold item M8) and, to be worth doing,
    the classification of extensions. Kept only as HA-5 B-page examples if M8
    lands; dropped with a note otherwise.
26. **Topological applications of homological algebra** — singular homology,
    the universal coefficient theorem *for spaces*, de Rham. The **algebraic**
    universal coefficient and Künneth theorems for complexes of modules over a
    PID are kept on HA-5, because they are pure homological algebra. Their
    topological instantiation stays ‡ on `deferred-algebraic-topology`.
27. **Monoidal categories: the full coherence theorem for braided and symmetric
    monoidal categories, and coherence for closed structure.** MO-1 proves Mac
    Lane's coherence theorem for monoidal categories; MO-2 states the braided
    hexagons and proves the consequences it needs, and the braided coherence
    theorem is denied with a note. Licensed by a dedicated coherence page.
28. **Tannaka duality, fusion categories, modular tensor categories.** Not
    commissioned.
29. **The special adjoint functor theorem's application to $\mathbf{Top}$ via
    cogenerators**, if it turns out to need more point-set material than the
    topology track proves. Flagged on CT-4 for the authoring agent to verify on
    disk; if the cogenerator facts are absent, the SAFT example drops to
    $\mathbf{Grp}$ and $R\text{-}\mathbf{Mod}$ and a note is recorded.
30. **$\mathbf{CAT}$; $[\mathcal{C},\mathcal{D}]$ for large $\mathcal{C}$;
    presheaf categories on a large $\mathcal{C}$; the free-cocompletion theorem
    for large $\mathcal{C}$.** §6.3, casualties 1–3. Licensed by a universe
    axiom, which is denial 21. **Consequence to enforce at authoring time: the
    monad is defined directly, never as a monoid in $[\mathcal{C},\mathcal{C}]$.**
31. **Yoneda $\operatorname{Ext}^n$ as a set** (n-fold extension classes without
    well-poweredness). §6.3, casualty 4. HA-5 uses derived-functor
    $\operatorname{Ext}$; the Baer-sum description of $\operatorname{Ext}^1$ is
    stated for module categories, where well-poweredness is available.
32. **Simplicial sets, the Dold–Kan correspondence, simplicial methods**
    (Weibel ch. 8). A track of its own. Licensed by a simplicial-sets page.
33. **Lie algebra homology and cohomology** (Weibel ch. 7). Weibel himself has
    to review Lie algebras first because they are not among his prerequisites;
    they are not among this library's either.
34. **Hochschild and cyclic homology** (Weibel ch. 9). Needs algebras over a
    commutative ring and considerably more.
35. **Derived categories, triangulated categories, localisation and calculi of
    fractions** (Weibel ch. 10; Gelfand–Manin III–IV), and **model categories /
    homotopical algebra** (Gelfand–Manin V; the small object argument needs AC
    and a transfinite construction). Each is a large self-contained track.
    Deferred, not denied on principle.
36. **Sheaves and sheaf cohomology; the Leray–Serre spectral sequence.** Sheaf
    theory is absent, and Leray–Serre needs fibrations, which are beyond the
    library's $\pi_1$/covering-space homotopy. Licensed by a sheaves page and by
    a fibrations page respectively.
37. **EGNO chapters 3 and beyond** — $\mathbb{Z}_+$-rings, fusion categories,
    modular tensor categories, Hopf algebras. Needs Perron–Frobenius and Hopf
    algebras. **Only EGNO ch. 1–2 and §8.1 are in reach**, which is exactly what
    MO-1 and MO-2 cover.
38. **Braided and symmetric coherence in the "every diagram commutes" form.**
    The true statement restricts to diagrams with the same underlying
    permutation, and is a genuine strengthening of MO-1's coherence theorem.
    MO-2 states the hexagons and proves the consequences it needs; the coherence
    theorem itself is denied with this note.

**Added by the `frontier-1` build (Beta-F1-2 scaffolding CB-1, applied by
Alpha-F1 2026-07-28).** These are the three CB-1 drops the scaffold names, moved
here from `research/frontier-1-batch-2.notes.md` §4 so the record lives where a
reader of this file will find it. Orders verified against
`research/plan-spec.json`.

39. **The ring form of the binomial theorem.** `def-ring` is homed on
    `rings-subrings-and-integral-domains`, order **46**, twenty-six pages above
    CB-1; trap (ii) of CB-1 is explicit that no ring version may be stated there.
    The binomial theorem at order 20 is stated **in $\mathbb{R}$**. Licensed by:
    order 46, together with §10 amendment 3's companion decision about where the
    ring version is stated and how the agreement is recorded.
40. **Any use of `def-symmetric-group` for
    $\lvert\operatorname{Bij}(A)\rvert = n!$.** `def-symmetric-group` is homed on
    `monoids-groups-and-subgroups`, order **24**, above CB-1. The theorem is
    therefore stated about bijections of a finite set with **no group vocabulary
    at all**, and it is homed on the A page so that
    `symmetric-groups-and-the-sign-homomorphism` (order 44) can cite it for
    $\lvert S_n\rvert = n!$ (§10 amendment 3). Licensed by: order 24 — but note
    the item is not blocked, only its group phrasing is.
41. **Stirling's formula, and any asymptotics of $n!$.** Needs the logarithm
    (`the-logarithm-and-general-powers`, order **177**) and Wallis
    (`sine-cosine-and-the-definition-of-pi`, order **179**). Licensed by: order
    177 and above. This is denial 3 restated at CB-1's own site; see §10
    amendment 2, which asked for a home above order 161 and was corrected on
    2026-07-28 because no page satisfies that.
42. **Floor and ceiling as library-wide notions.** `def-the-ceiling-of-a-quotient-of-
    naturals` on page 22 defines only what the strong pigeonhole principle needs:
    the least $q$ with $m \le nq$, for naturals $m$ and $n \ge 1$. It is not the
    real floor, it is not defined for a real argument, and it does not carry the
    division algorithm. A general floor and ceiling on $\mathbb{R}$ would be
    licensed by any page above `divisibility-gcd-and-bezout` (26) choosing to
    mint them; page 22 is below it and cannot.

**Reconciled category-theory denial (applied 2026-08-14).** Locally presentable
and accessible categories, and the accessible adjoint functor theorem, are
denied here because they form a separate subject-sized development, not because
regular cardinals are absent. The authoritative scope explanation is
`research/plan-category-theory-track.md` §8/§11. The remaining deliberately
reachable material is **the algebraic universal coefficient and Künneth
theorems** over a PID, which are pure homological algebra even though their
topological corollaries are not (denial 26); **group cohomology** via
$\mathbb{Z}[G]$, which needs only groups, rings and modules; and the **entire
members / diagram-lemma apparatus**, which needs no smallness, no choice, and is
constructive.

---

## 10. Amendments owed to other scaffolds

Addressed to their owners. This file never edits them.

1. **To the analysis track** (`plan-realanalysis-pages.md`): RA-16
   (`darboux-lhopital-and-taylor`, new 137) **no longer needs to mint binomial
   coefficients**. Its recorded obligation — "when this page is scaffolded it
   must ALSO mint a binomial-coefficient definition" — is discharged by CB-1 at
   order 20. Delete the obligation, add `finite-counting-and-binomial-coefficients`
   to `requires`, and state the general Leibniz rule citing it. Same for
   `mixed-partials-taylor-and-extrema` (new 213) and multi-indices.
2. **To the analysis track**: consider adding **Stirling's formula** somewhere
   above **`the-logarithm-and-general-powers` (order 177)**. It is in scope, it
   is absent from the spec, and denial 3 above is the only reason this track has
   no asymptotics.
   **AMENDED (Alpha-F1, frontier-1, 2026-07-28), answering Beta-F1-2's finding
   F-8.** This amendment previously read "somewhere above
   `properties-of-the-integral-and-the-working-ftc`" (order 161), which is
   **unsatisfiable**: Stirling needs the logarithm, homed on
   `the-logarithm-and-general-powers` at order **177**, and Wallis' product,
   which needs the trigonometric functions of `sine-cosine-and-the-definition-of-pi`
   at order **179** — both strictly ABOVE 161, so no page above 161 but below 177
   can carry it. All three orders verified against `research/plan-spec.json`,
   2026-07-28. The floor is therefore **177**, and 179 if the proof goes through
   Wallis. Nothing below 177 may state Stirling in any form, and CB-2's and
   CB-12's asymptotic estimates stay denied until a Stirling page exists (§9
   denials 3 and 41).
3. **To the algebra track** (`plan-algebra-track.md`): AA-7
   (`symmetric-groups-and-the-sign-homomorphism`, new 44) should **cite** CB-1
   for $\lvert S_n \rvert = n!$ rather than assert it. Add
   `finite-counting-and-binomial-coefficients` to `requires`.
4. **To the algebra track**: AA-6 (`group-actions-and-cayleys-theorem`, new 42)
   does **not** list Burnside's orbit-counting lemma. CB-10 mints it. If AA-6's
   scaffolder wants it instead, say so before either is authored — it must not
   be minted twice.
5. **To the algebra track**: confirm whether AA-14 (`symmetric-polynomials`,
   new 58) mints the **multivariate** polynomial ring $R[x_1,\dots,x_n]$ as its
   own object. CB-10 (cycle index) and CB-7 (multivariate generating functions)
   need it. If it does not, CB-10 mints it with a dictionary; that decision must
   be made once.
6. **To the number theory scaffolder**: `congruences-and-the-chinese-remainder-theorem`
   (new 30) may now derive **Euler's totient product formula by
   inclusion–exclusion** (CB-2, order 22) instead of by CRT. Both are correct;
   pick one and record which, and if both are wanted make the second an
   explicitly-labelled second proof.
7. **To the topology track**: `the-topology-of-euclidean-space` (new 239) is
   cited by GT-8 for exactly two things — polygonal paths and the
   compactness/connectedness facts about $\mathbb{R}^2$ — and GT-8 proves the
   **polygonal Jordan curve theorem** itself. If the topology scaffolder would
   rather home the polygonal JCT on 237, say so; it is a reasonable home and
   `rem-jordan-curve-theorem` on the ‡ catalogue would then be **amended**
   rather than left untouched. Either way it is proved exactly once.
8. **To the module scaffolder**: §5 is the interface, and M5/M6 are the
   contested rows. Answer them before either scaffold is authored.
9. **To the orchestrator**: the ‡ catalogue `deferred-algebraic-topology` has an
   entry for the Jordan curve theorem. GT-8 proves only the polygonal case, so
   that entry is **amended, not removed** — and per CLAUDE.md no result is ever
   removed without explicit owner approval.

---

# 11. The pages

Format per page: **proposed order**, category, `requires` (direct, as page ids;
Beta computes the closure), then **DEFS / THMS / FS / B / CEX**, then traps and
an explicit forward-reference statement. Item ids are suggestions for step 1,
not commitments, except where a well-definedness row fixes one. Every A page has
its `-examples` companion; **B pages are leaves — nothing outside a B page may
cite an item homed there**, which is why every witness a later page needs is
called out here and homed on an A page instead. `validate-plan.mjs` warns above
30 items; inventories are written to land at 18–26 for A pages and 10–16 for B.

---

## SITE A — elementary counting (orders 20–23)

## CB-1. Finite Counting, Factorials and Binomial Coefficients  (order 20, combinatorics)

`requires`: `countability-and-uncountability` (18), `roots-and-rational-powers` (16)

The floor page. It exists so that no other page in the library has to invent
counting in passing, and it is placed at the earliest legal order for exactly
that reason (§4.1).

DEFS: **the cardinality $\lvert A\rvert$ of a finite set** (well-definedness #1
— the unique $n$ with $A \approx n$, existence from `def-countable`, uniqueness
from `lem-pigeonhole`); the sum over a finite index set (#5); the factorial and
the falling factorial $n^{\underline{k}}$ by recursion (#2, `thm-recursion`);
the set $[A]^k$ of $k$-element subsets; **the binomial coefficient
$\binom{n}{k} := \lvert [n]^k\rvert$** (#3 — a count, so integrality is free);
the multinomial coefficient (#4); composition and weak composition of an
integer.

THMS: a subset of a finite set is finite, and $\lvert B\rvert \le \lvert A\rvert$
with equality iff $B = A$ (the finite Dedekind statement, the workhorse);
**the sum rule** for a finite disjoint union and for a partition into $m$
blocks; **the product rule** $\lvert A \times B\rvert = \lvert A\rvert\lvert B\rvert$
and its iterate; $\lvert A^B\rvert = \lvert A\rvert^{\lvert B\rvert}$, which needs
NATURAL-NUMBER exponentiation and therefore a new `def-nat-power` on this page:
`def-integer-power` (order 16) gives $a^{n}$ for a REAL base, so its value is a
real while $\lvert A^{B}\rvert$ is a natural. `def-nat-power` is defined by
`thm-recursion` inside $\mathbb{N}$ and carries the bridge clause
$\iota(m^{n}) = \iota(m)^{n}$ and the agreement $0^{0} = 1$ with
`def-integer-power`; the number of injections $B \to A$ is
$n^{\underline{k}}$; **$\lvert\operatorname{Bij}(A)\rvert = n!$** (landmark —
this is the item `symmetric-groups-and-the-sign-homomorphism` should cite for
$\lvert S_n\rvert = n!$, §10 amendment 3); $\lvert \mathcal{P}(A)\rvert = 2^n$;
$\binom{n}{k}k!(n-k)! = n!$, hence the closed formula **and** the integrality of
$n!/(k!(n-k)!)$; **Pascal's rule** (landmark); symmetry $\binom{n}{k} =
\binom{n}{n-k}$; $\sum_k \binom{n}{k} = 2^n$ and $\sum_k (-1)^k\binom{n}{k} = 0$;
Vandermonde's identity; the hockey-stick identity; **the binomial theorem** in
$\mathbb{R}$ (landmark); the multinomial theorem; **stars and bars**: the number
of weak compositions of $n$ into $k$ parts is $\binom{n+k-1}{k-1}$.

FS: every injection of a set into itself is a bijection (witness $\mathbb{N}$,
$n \mapsto n+1$; the finite case is the theorem above, and the point is exactly
that finiteness is the hypothesis); $\lvert A \cup B\rvert = \lvert A\rvert +
\lvert B\rvert$ without disjointness; the product rule holds for infinite sets
in the form $\lvert A \times B\rvert > \lvert A\rvert$ (witness
`thm-n-cross-n-countable`, published).

B: worked counts — committees, anagrams via the multinomial coefficient, hands
from a deck; Pascal's triangle computed to row 6 with Pascal's rule checked;
the number of two-element subsets of an $n$-element set, $\binom{n}{2}$, with
$2\binom{n}{2} = n(n-1)$ in $\mathbb{N}$: a **theorem on the A page**
(`thm-two-element-subsets-count`), because the graph pages cite it and a B page
is a leaf. The words graph, vertex and edge do NOT appear in it — no graph is
defined anywhere in the library at order 20 — and Remarks says only that the
count of unordered pairs is the quantity later pages will want; the number of surjections deferred to CB-2.

CEX: two different sets with the same cardinality and no canonical bijection
(orientation for why $\lvert\cdot\rvert$ is defined by existence of *some*
bijection); a "count" that double-counts, worked to show where the sum rule's
disjointness hypothesis is spent.

Traps. (i) **Nothing on this page may be homed on the B page if a later page
needs it.** $\binom{n}{2}$ as an edge count, $n!$ as $\lvert\operatorname{Bij}\rvert$
and the binomial theorem are all consumed by later A-pages; they go on the A
page. This is the b-leaf rule and it has bitten this library before. (ii) The
binomial theorem is stated **in $\mathbb{R}$**, because commutative rings arrive
at order 46. The ring generalisation is a genuinely separate statement; §10
amendment 3's companion decision is whether `rings-subrings-and-integral-domains`
(published, 46) gets an amendment or whether a later page states it with an
agreement remark. **Do not silently state a ring version here.** (iii) $0! = 1$ is
taken as the BASE CLAUSE of the recursion defining the factorial
(`thm-recursion`, published at order 6), NOT imported: `def-monoid-finite-product`
is homed on `monoids-groups-and-subgroups` at order 24, four pages ABOVE this
one, so citing it here is a forward citation on the spine and `fwdcheck` rejects
it (`forward-on-spine`). `def-binomial-coefficient` gets $\binom{n}{0} = 1$ from
the count itself, $[A]^{0} = \{\varnothing\}$, so no empty-product convention is
involved there at all. The page then RECORDS the agreements in one place
(`rem-counting-conventions-and-scope`): the empty sum $0$, the empty product $1$,
$0! = 1$ and $0^{0} = 1$ are one convention, agreeing with `def-finite-sum` and
`def-integer-power` (both order 16, below this page), and an orientation-only
forward reference in Remarks points at `def-monoid-finite-product` for the
monoid version. (iv) The
sum over a finite index set (#5) is not the same object as `def-finite-sum`'s
sum over an initial segment; the bridge item is mandatory and is where the
"two notions" defect would otherwise start.
(v) THE COUNTING IDENTITIES ARE IDENTITIES OF NATURAL NUMBERS, AND THE LIBRARY
HAS NO FINITE SUM IN $\mathbb{N}$. `def-finite-sum` (order 16) is real-valued and
`def-monoid-finite-product` (order 24) is above this page, so the sum rule, the
row sums of Pascal's triangle, the multinomial condition $\sum k_i = n$ and stars
and bars all need a `def-nat-finite-sum-and-product` minted here, by the same
`thm-recursion` construction, together with a `lem-nat-finite-sum-laws-and-the-canonical-embedding`
carrying $\iota(\sum^{\mathbb{N}}) = \sum^{\mathbb{R}}\iota$.
That embedding clause is what lets the binomial theorem live in $\mathbb{R}$ while
every count stays in $\mathbb{N}$.
(vi) The well-definedness of the sum over a finite index set (#5) rests on
PERMUTATION INVARIANCE of a finite sum, which the library does not have anywhere:
`lem-finite-sum-laws` has additivity, splitting, monotonicity, telescoping and the
product laws, and no invariance clause. It is minted here as
`lem-finite-sum-permutation-invariance` and, per SCHEMA §3, it belongs in the
DEFINITION'S `deps` and NOT in its `justified_by`, since it is about
`def-finite-sum` and does not depend on the new definition.

Forward references: NONE.

## CB-2. Inclusion–Exclusion, the Pigeonhole Principle and Double Counting  (order 22, combinatorics)

`requires`: `finite-counting-and-binomial-coefficients` (20)

**frontier-2 audit, 2026-07-29 (batch 2). Traps (i), (ii) and (iii) were
re-checked against `plan-spec.json` and all three are still accurate**
(`divisibility-gcd-and-bezout` is 26, `congruences-and-the-chinese-remainder-
theorem` is 30, `matrices-and-the-matrix-of-a-linear-map` is 78 — all above 22).
Seven further notes bind authoring of this page pair.

(1) THE SIEVE IDENTITY CANNOT BE STATED IN N. It has minus signs, and the
library's naturals have only a truncated difference. Every alternating identity
on this page is stated in R through the canonical natural of
`def-canonical-natural`, exactly as the binomial theorem is at 20, and the counts
themselves stay in N. Clauses 6 and 7 of
`lem-nat-finite-sum-laws-and-the-canonical-embedding` are the licence.

(2) THE EMPTY INTERSECTION NEEDS AN AMBIENT SET NAMED. The complementary form of
the sieve runs over ALL subsets J of the index set, including the empty one, and
the intersection of no subsets of X is only defined once X is named. So the sieve
setup is a definition, `def-a-sieve-family-and-its-intersections`, that fixes a
finite ambient X and stipulates A_empty := X. Well-definedness obligation #6 is
discharged there, together with the finiteness of the index set of subsets, which
comes from `cor-cardinality-of-the-power-set` and `thm-subset-of-a-finite-set`.

(3) THE SIEVE PROOF NEEDS AN INTERCHANGE OF A DOUBLE SUM, AND THE LIBRARY HAS NO
SUCH LEMMA. `thm-sum-rule` splits a sum along a partition of its index set and
stops there. `lem-a-double-sum-over-finite-index-sets-may-be-interchanged` is
minted as the FIRST item of this page and is reused by the sieve, by the
Bonferroni inequalities and by double counting, which is why it precedes all
three.

(4) THE BONFERRONI PROOF NEEDS A PARTIAL ALTERNATING BINOMIAL SUM, which 20 does
not have: `cor-binomial-theorem-consequences` gives only the FULL alternating row
sum, and only for n at least 1. `lem-the-partial-alternating-sum-of-a-binomial-
row` is minted here for the truncated version and proved by induction from
`thm-pascals-rule`.

(5) THE CEILING FORM OF THE STRONG PIGEONHOLE HAS NO NOTATION TO USE. The library
has no floor and no ceiling, and `thm-division-algorithm-in-z` is homed on
`divisibility-gcd-and-bezout` at order 26, above this page. So the ceiling is
minted here as `def-the-ceiling-of-a-quotient-of-naturals`: the LEAST q with
m <= nq, which exists by `thm-well-ordering-principle` and needs no division.

(6) THE SURJECTION COUNT IS CORRECT AT n = 0 ONLY BECAUSE 0^0 = 1. At n = 0 and
k = 0 there is exactly one surjection, the empty function, and the formula returns
0^0; at n = 0 and k at least 1 there is none, and the formula returns the full
alternating row sum, which is 0. Both readings are part of the statement and both
turn on the convention that `def-nat-power` fixes as a base clause. Likewise the
term at i = 0 of the derangement formula is 1 and D_0 = 1.

(7) THE ERDOS-SZEKERES TIGHTNESS WITNESS IS AN A-PAGE THEOREM, because the false
statement that the bound can be lowered cites it and a B page is a leaf. It is
`thm-the-erdos-szekeres-bound-is-sharp`; the concrete small instance stays on the
B page.

DEFS: the sieve setup (a finite family $A_1,\dots,A_n$ of subsets of a finite
set, and the intersections indexed by subsets of $[n]$; well-definedness #6);
**the derangement number $D_n$** (#7); an incidence structure / bipartite
incidence relation, for double counting; the strong pigeonhole hypothesis.

THMS: **inclusion–exclusion** (landmark), in both the union form and the
complementary "in none of them" form; the **Bonferroni inequalities** (odd
truncations over-estimate, even truncations under-estimate); **the number of
surjections $[n] \to [k]$** is $\sum_i (-1)^i\binom{k}{i}(k-i)^n$; the derangement
formula $D_n = n!\sum_{i \le n} (-1)^i/i!$ and the recurrences $D_n = nD_{n-1} +
(-1)^n$ and $D_n = (n-1)(D_{n-1}+D_{n-2})$; **the strong pigeonhole principle**
(if $\lvert A\rvert > kn$ and $f: A \to [n]$ then some fibre has more than $k$
elements), with the ceiling form; **double counting** as a theorem: for a finite
relation $R \subseteq X \times Y$, $\sum_{x}\lvert R_x\rvert = \lvert R\rvert =
\sum_y \lvert R^y\rvert$ (landmark — this is the single most reused item in the
whole track: the handshake lemma, LYM, Fisher, Turán and Kővári–Sós–Turán all
cite it); the averaging corollary (some fibre is at least the average, some is
at most); **Erdős–Szekeres**: any sequence of $mn+1$ distinct reals has an
increasing subsequence of length $m+1$ or a decreasing one of length $n+1$
(landmark — the pigeonhole application the Ramsey page cites).

FS: $\lvert A\cup B\cup C\rvert = \lvert A\rvert+\lvert B\rvert+\lvert C\rvert -
\lvert A\cap B\rvert - \lvert A\cap C\rvert - \lvert B\cap C\rvert$ (the missing
triple term — the classic, with an explicit three-set witness); the Bonferroni
truncation at any fixed depth is exact; the Erdős–Szekeres bound $(m n + 1)$ can
be lowered (refuted by the tightness construction, which is therefore an **A-page
theorem**, not a B item).

B: a worked three-set and four-set sieve; the number of onto functions
$[5]\to[3]$ computed both ways; derangements of $4$ listed; the hat-check
probability as a ratio of counts (no probability space needed, and none is
claimed); pigeonhole applications — two people in a room of $n$ with the same
number of acquaintances, and $\lceil n/k\rceil$ bounds; double counting used to
prove the handshake identity for a finite incidence table.

CEX: a sieve computation that omits a term and produces a wrong count; a
sequence of length $mn$ with no long monotone subsequence (the tightness witness,
restated concretely); a family where the naive averaging argument gives a bound
that is not attained.

Traps. (i) The classic pigeonhole example "among $n+1$ numbers from
$\{1,\dots,2n\}$ one divides another" needs divisibility, which is
`divisibility-gcd-and-bezout` at new order **26**, *above* this page. **DROP it
from the B page** and record it: the number-theory B page is its home, and it
may cite this page's strong pigeonhole. This is denial-shaped and is exactly the
kind of thing a scaffolder plants without checking. (ii) The Euler totient
formula is likewise number theory; §10 amendment 6 hands it to the CRT page
rather than pulling divisibility down here. (iii) Double counting is stated for
a **relation**, not for a matrix — matrices are at new order 78 — and the
matrix form is a corollary on a later page.

Forward references: NONE.

---

## SITE B — combinatorics proper and graph theory (orders 173–210)

## CB-3. Chains, Antichains, Sperner and Dilworth  (order 173, combinatorics)

`requires`: `order-zorn-and-the-axiom-of-choice`,
`countability-and-uncountability`,
`finite-counting-and-binomial-coefficients`, and
`inclusion-exclusion-and-the-pigeonhole-principle`.

The examples companion additionally requires
`primes-and-the-fundamental-theorem-of-arithmetic`, because the concrete divisor
lattice uses unique prime factorisation.

The pure-counting half of extremal set theory. The linear-algebra half is CB-13
at 205; the split follows Oxford C8.3's and CMU 21-301's ordering, which both
isolate the field-dependent methods into a later contiguous block.

DEFS: antichains, chain covers and antichain covers, reusing the published
`def-partial-order` and `def-chain`; **height and width of a nonempty finite
poset**; graded posets and rank; the Boolean lattice $2^{[n]}$ and its levels;
lattices, distributive lattices, order ideals and join-irreducibles; lower and
upper shadows; intersecting uniform families; and sunflowers, petals and their
common core.

THMS: **finite Dilworth** (landmark: for a nonempty finite poset, width equals
the minimum size of a chain cover), decomposed into the maximal-antichain
down-set/up-set lemma and the induction/splicing lemma; **finite Mirsky** (height
equals the minimum size of an antichain cover); the two are not treated as
corollaries of one another; the **LYM inequality**
$\sum_{F\in\mathcal{F}}\binom{n}{\lvert F\rvert}^{-1}\leq 1$ for an antichain in
$2^{[n]}$, proved by counting maximal chains; the upper-shadow form of the local
LYM inequality, with the equivalent lower-shadow form retained in a Remark;
binomial symmetry and unimodality; and **Sperner's theorem** (landmark),
including its equality cases. For odd $n$, a maximum antichain is one complete
middle level, not a mixture of the two middle levels; this classification uses
the local LYM equality analysis and does not follow from the bare LYM inequality
alone. A symmetric chain decomposition of $2^{[n]}$ gives a second constructive
proof of Sperner's bound.

The remaining finite results are **Erdős–Ko–Rado** for $1\leq k$ and
$n\geq 2k$, giving the bound
$\lvert\mathcal{F}\rvert\leq\binom{n-1}{k-1}$ and proving that a star attains
it, without claiming uniqueness of extremizers; the Erdős–Rado sunflower lemma
for distinct $k$-sets with $r\geq 2$ and the strict threshold
$\lvert\mathcal{F}\rvert>k!(r-1)^k$; **Birkhoff's representation theorem** for
finite distributive lattices; and the Erdős–Szekeres monotone-subsequence
corollary obtained from finite Mirsky.

The proof scaffold retains the closed intermediate results: maximal-chain
counting for LYM, the symmetric-chain induction step, Katona's cyclic-interval
bound, the maximal-disjoint-subfamily lemma for sunflowers, and the
join-irreducible decomposition, join-prime and order-ideal-lattice lemmas for
Birkhoff's theorem.

FS: every maximal antichain in a finite poset has maximum cardinality; and the
Erdős–Ko–Rado bound holds without $n\geq 2k$.

NOT SCAFFOLDED: no infinite-Dilworth false statement is asserted. Dilworth has
valid infinite extensions, while a genuine failure at infinite width requires
cardinal-valued width and chain-cover definitions and a dependency-closed
witness not developed here. The page proves only the finite theorem. The
classification of Erdős–Ko–Rado extremizers is likewise omitted: uniqueness is
false at the boundary $n=2k$, while the sharp bound and the attaining star are
closed within the finite scaffold.

B: $2^{[4]}$ with ranks, width, shadows and a symmetric chain decomposition; a
six-element poset of width three together with a three-chain cover; the divisor
lattice of $60$, using the separately declared fundamental-theorem-of-arithmetic
prerequisite; a four-petal sunflower with nonempty core; and an Erdős–Ko–Rado
star attaining the bound.

CEX: a maximal antichain that is not maximum; for example, with
$k<n<2k$, the whole $k$th level is intersecting and is larger than a star; and
explicit distributive-law failures in $M_3$ and $N_5$. There is no proposed
counterexample to the LYM equality case: that proposal was false and is replaced
by the proved equality classification in Sperner's theorem.

Traps. (i) `def-partial-order` and `def-chain` are **published**; re-minting
them is the level-7 defect. The antichain is genuinely new. (ii) Dilworth's
finite proof is an induction with a case split that is easy to get subtly
wrong; budget for it and make each case a numbered step. (iii) Kruskal–Katona
is DENIED (§9.11) — do not let the shadow definition drag it in. (iv) Machine
`strategy` fields use only the schema vocabulary; double counting, compactness,
Katona's cycle method and counterexample construction belong in the proof
technique prose, not in `strategy`.

Forward references: NONE.

## CB-4. Formal Power Series  (order 175, combinatorics)

`requires`: `polynomial-rings-and-roots` (52),
`euclidean-domains-pids-and-unique-factorisation` (50),
`formal-laurent-series-field` (114)

This page exists because **every generating function in this track is formal**,
and formal means a ring must be built before a single identity is written.
Flajolet–Sedgewick put formal power series and Lagrange inversion in
Appendix A, "Auxiliary Elementary Notions", and quarantine complex analysis in
Appendix B; Bóna draws the same line, putting analytic combinatorics in a
separate Part III. This page IS that boundary, and §9.1 is the denial on the
other side of it.

DEFS: $R[[x]]$ for a commutative ring $R$, as functions $\mathbb{N}\to R$ with
the convolution product (well-definedness #9); **summable family** (#10);
composition (#11); the inverse of a unit (#12); order/valuation $\operatorname{ord}(f)$;
the formal derivative; $R((x))$ and the formal residue $[x^{-1}]$ (#14);
$\exp$ and $\log$ **as formal series over a $\mathbb{Q}$-algebra**, with the
hypothesis stated at the definition.

THMS: $R[[x]]$ is a commutative ring, and a domain when $R$ is; $f$ is a unit
iff $f_0$ is a unit of $R$ (#12), so $F[[x]]$ is a local ring with maximal ideal
$(x)$ for a field $F$; the summability criterion and that $\sum_i f_i$ is
independent of any enumeration of $I$ (this is what makes an infinite product
meaningful — #10); composition is well defined when $\operatorname{ord}(g) \ge 1$
and is a ring homomorphism (#11); the **formal binomial series**: for
$\alpha$ in a $\mathbb{Q}$-algebra, $(1+x)^\alpha := \sum \binom{\alpha}{n}x^n$
with $\binom{\alpha}{n}$ the generalised binomial coefficient, and
$(1+x)^\alpha(1+x)^\beta = (1+x)^{\alpha+\beta}$; **existence and uniqueness of
the square root with constant term $1$** (#13); the product rule, chain rule and
the fact that $f' = 0$ iff $f$ is constant over a $\mathbb{Q}$-algebra;
$\exp(\log(1+x)) = 1+x$; **the compositional inverse** exists and is unique when
$\operatorname{ord}(f) = 1$ and $f_1$ is a unit; **Lagrange inversion**
(landmark), proved formally via the residue identity $[x^{-1}](f^n f') = 0$ for
$n \ne -1$; **the dictionary theorem** (#14): $\mathbb{R}[[x]]$ is isomorphic to
the nonnegative-support subring of the published $\mathbb{R}((t^{-1}))$ under
$x \leftrightarrow t^{-1}$, and $R[x]$ embeds in $R[[x]]$ compatibly with
`polynomial-rings-and-roots`.

FS: a formal power series with nonzero constant term has a compositional
inverse; a formal identity of power series may be established by checking
finitely many coefficients; $\sum_i f_i$ makes sense for any family (witness:
$f_i = 1$ for all $i \in \mathbb{N}$, not summable); every formal power series
over $\mathbb{R}$ converges somewhere (witness $\sum n! x^n$ — **this `fs-` is
kept only if the notion of radius of convergence is available below this page;
`power-series-and-real-analytic-functions` is at new order 155, which is
below 175, so it is**).

B: $1/(1-x) = \sum x^n$ verified coefficientwise; $(1-x)^{-k}$ and the stars-and-bars
identity recovered from CB-1; $\sqrt{1-4x}$ computed to five terms; a
compositional inverse computed by Lagrange inversion; the non-summable family
above; $R[[x]]$ for $R = \mathbb{Z}/4$ showing zero divisors survive.

CEX: two distinct series with the same first $10$ coefficients; a series with
$f_0$ a nonunit and no inverse; composition attempted with
$\operatorname{ord}(g) = 0$, showing an infinite coefficient sum.

Traps. (i) **Summability (#10) is the page's spine.** Every later infinite
product — the partition generating function above all — is illegitimate without
it. Do not let it become a remark. (ii) The dictionary item is MANDATORY. The
library already owns a formal-series object; two unrelated ones is exactly the
defect class this library keeps paying for. (iii) The $\mathbb{Q}$-algebra
hypothesis for $\exp$, $\log$ and EGFs must appear at the definition, not in a
later proof. (iv) Nothing on this page is analytic. No radius of convergence
enters a proof; the one `fs-` that mentions convergence is refuted by a
published analysis item and cites it.

**Amendments (Alpha, `frontier-11` step 4, 2026-08-12). Orders in this file are
pre-`frontier-11`; `research/plan-spec.json` puts this pair at 193/194.**

1. **The mandatory dictionary (#14) is delivered in a generalised shape, and
   trap (ii) is satisfied.** The scaffold defines $K((x))$ for a field $K$ as
   coefficient functions on $\mathbb{Z}$ with support bounded below — the same
   construction as the published `def-formal-laurent-series`, which builds
   $\mathbb{R}((t^{-1}))$ that way — citing that item and its ring and
   valuation lemmas, and stating explicitly that it generalises the coefficients
   from $\mathbb{R}$ to $K$ while renaming the indeterminate $t^{-1}$ to $x$.
   The dictionary theorem then embeds $K[[x]]$ in $K((x))$ as the
   nonnegative-order subring and proves the unique factorisation
   $h=x^{v(h)}u$ with $u$ a power-series unit and $h^{-1}=x^{-v(h)}u^{-1}$. That
   is the anti-duplication guarantee trap (ii) exists for; a step-6 reader
   should confirm the published-object relation is actually written into the
   authored text and not merely into the strategy.
2. **No field of fractions, localisation, quotient representation or universal
   property is named**, and the dictionary theorem's title no longer asserts
   one. **The library has no field-of-fractions or localisation construction
   anywhere** (D10 — recorded for a future owner decision; its natural home is
   with orders 46–50 in the algebra track, not on this page). Do not "improve"
   the dictionary into a fraction-field theorem.

Forward references: NONE.

## CB-5. Linear Recurrences and Rational Generating Functions  (order 177, combinatorics)

`requires`: `formal-power-series` (175),
`eigenvalues-eigenvectors-and-the-characteristic-polynomial` (86),
`splitting-fields` (56)

DEFS: a linear recurrence with constant coefficients, and its characteristic
polynomial; the generating function of a sequence (#15); a rational generating
function; the transfer/companion matrix.

THMS: a sequence satisfies a linear recurrence of order $k$ **iff** its
generating function is $P(x)/Q(x)$ with $\deg P < k$ and $Q(0) \ne 0$
(landmark — the equivalence that makes the whole method a theorem rather than a
technique); **partial fractions over a splitting field** and the closed form
$a_n = \sum_i p_i(n)\lambda_i^{-n}$, with repeated roots handled by the
polynomial factor; the Fibonacci and Lucas closed forms; the companion-matrix
route ($a_n$ is a matrix entry, so the characteristic polynomial of the
recurrence IS the characteristic polynomial of the companion matrix — the
dictionary item that keeps linear algebra and combinatorics speaking); the
Cayley–Hamilton reading of the recurrence; the product and sum of two rational
generating functions are rational; the Hadamard product of rational series is
rational (keep only if the page is under the cap).

FS: every sequence has a rational generating function (witness $n!$, whose OGF is
not rational — refuted via the recurrence characterisation, no analysis); the
closed form of a linear recurrence is always a sum of pure exponentials (repeated
roots); a recurrence and its characteristic polynomial determine the sequence
(initial conditions).

B: Fibonacci in closed form and the $\varphi^n/\sqrt5$ rounding statement
proved, not asserted; a recurrence with a repeated root worked; Catalan's
recurrence shown NOT to be linear with constant coefficients (the item that
motivates CB-6); the derangement recurrence solved; a tiling count.

CEX: two sequences with the same characteristic polynomial and different values;
a rational function whose partial fraction decomposition needs a proper
extension field.

Traps. (i) The splitting field is needed to factor $Q$; **name it in the
Statement**, and do not assume $\mathbb{R}$ or $\mathbb{C}$ silently. (ii)
Reciprocal-root bookkeeping ($Q(x) = \prod(1-\lambda_i x)$, not
$\prod(x - \lambda_i)$) is where sign errors live; fix the convention in a
`rem-` and cite it. (iii) Nothing here is asymptotic; "$a_n \sim c\lambda^n$"
needs §9.3's denied Stirling/asymptotics machinery.

Forward references: NONE.

## CB-6. Lattice Paths and Catalan Numbers  (order 179, combinatorics)

`requires`: `linear-recurrences-and-rational-generating-functions` (177),
`formal-power-series` (175)

DEFS: lattice path, step set, Dyck path, ballot sequence; **the Catalan number
$C_n$, defined as the number of Dyck paths of semilength $n$** (well-definedness
#16 — the formula is derived, never assumed); the cycle lemma setup; binary
trees and triangulations as the objects the bijections land in.

THMS: **the reflection principle** and the ballot problem (landmark); the cycle
lemma (Dvoretzky–Motzkin) and the count $\frac{1}{n+1}\binom{2n}{n}$ **as a
theorem**, which is where the integrality of $\binom{2n}{n}/(n+1)$ comes from;
**the Catalan generating function**: $C(x) = 1 + xC(x)^2$ and $C(x) =
(1-\sqrt{1-4x})/(2x)$, using CB-4's #13 to justify choosing the root — the
second proof, with an agreement remark against the cycle-lemma one; the Catalan
recurrence $C_{n+1} = \sum C_iC_{n-i}$; **three bijections** onto Catalan
families (Dyck paths, balanced parenthesisations, binary trees) with the
bijectivity proved, not asserted; $\binom{2n}{n} - \binom{2n}{n+1} = C_n$; the
central binomial coefficient's divisibility statement; Lindström–Gessel–Viennot
**only if** the determinant machinery is wanted here rather than on GT-7 —
recommend DROPPING it here and recording it, since it duplicates a determinant
argument better placed at 209.

FS: $\binom{2n}{n}/(n+1)$ is an integer only for small $n$; every Catalan-family
bijection is order-preserving; the number of paths from $(0,0)$ to $(n,n)$
staying weakly below the diagonal is $\binom{2n}{n}/2$.

B: Dyck paths of semilength 3 enumerated and matched to parenthesisations and
trees; the reflection worked pictorially in prose; triangulations of a hexagon;
$C_n$ for $n \le 6$ computed both ways.

CEX: a "bijection" between two Catalan families that fails injectivity on a
concrete pair (the point being that a bijection is proved, not drawn); a step
set for which the reflection principle fails.

Traps. (i) The reflection principle's proof is a bijection between two path
sets and must be given as one; "reflect and count" is not a step. (ii) The
generating-function route needs #13 (uniqueness of the square root) or it picks
a root it has not identified. (iii) $C_n$ is DEFINED as a count; if the formula
is taken as the definition, #16 is unpayable.

Forward references: NONE.

## CB-7. Set Partitions, Stirling Numbers and Exponential Generating Functions  (order 181, combinatorics)

`requires`: `lattice-paths-and-catalan-numbers` (179),
`inclusion-exclusion-and-the-pigeonhole-principle` (22)

DEFS: set partition, block; **$S(n,k)$, the Stirling number of the second kind**
(well-definedness #17), and the Bell number $B_n$; the Stirling number of the
first kind $c(n,k)$ (unsigned, as a count of permutations with $k$ cycles) and
the signed $s(n,k)$; the rising factorial; **the exponential generating
function** (#18, over a $\mathbb{Q}$-algebra).

THMS: the recurrence $S(n,k) = kS(n-1,k) + S(n-1,k-1)$ and $B_{n+1} =
\sum\binom{n}{k}B_k$; **$x^n = \sum_k S(n,k)x^{\underline{k}}$** and the inverse
relation with $s(n,k)$ (the two Stirling triangles are inverse matrices — a
clean linear-algebra dictionary, citing new order 78); the explicit
inclusion–exclusion formula for $S(n,k)$ from CB-2's surjection count;
$\sum_k c(n,k)x^k = x^{\overline{n}}$; the EGF product rule (the EGF of a
"labelled pair" is a product) and the **exponential formula** $\sum B_n x^n/n! =
\exp(e^x - 1)$ (landmark), proved formally in $\mathbb{Q}[[x]]$;
$\sum_n S(n,k)x^n/n! = (e^x-1)^k/k!$; the EGF for permutations by cycle type;
**Dobinski's formula is DROPPED** — it is an infinite series of reals and needs
convergence, i.e. analysis this page deliberately does not use (recorded, §9.1).

FS: $B_n$ counts the ordered partitions of $[n]$ (that is the Fubini/ordered
Bell number, a different sequence — a genuinely useful `fs-`); $S(n,k)$ counts
surjections $[n]\to[k]$ (it counts them up to relabelling the codomain, off by
$k!$); the EGF of a product of structures is the product of the EGFs without
the labelled-product hypothesis.

B: partitions of $[4]$ listed by block count; $S(4,2)$ computed three ways
(recurrence, formula, listing); the ordered Bell numbers contrasted with $B_n$;
the two Stirling triangles multiplied to the identity for $n \le 4$; the EGF of
$\{1\}$-blocks worked.

CEX: two set partitions with the same block sizes that are distinct (the
integer partition forgets information — the item that sets up CB-8); a formula
that works for $S(n,k)$ and fails for $c(n,k)$.

Traps. (i) The four Stirling conventions (signed/unsigned, first/second, and
two bracket notations) are a notation minefield: fix one in a `rem-` and cite it
everywhere, exactly as the library does for concatenation order. (ii) EGFs
require a $\mathbb{Q}$-algebra (#18); over $\mathbb{Z}$ the definition is
meaningless. (iii) The exponential formula is proved **formally**; the standard
analytic proof is denied.

Forward references: NONE.

## CB-8. Integer Partitions and the Twelvefold Way  (order 183, combinatorics)

`requires`: `set-partitions-stirling-numbers-and-exponential-generating-functions` (181),
`formal-power-series` (175)

The twelvefold way is homed **here**, not on CB-7, because three independent
sources put it after set partitions, integer partitions **and**
inclusion–exclusion: Stanley EC1 §1.9 (after §1.7–1.8), Bóna's *Introduction to
Enumerative and Analytic Combinatorics* Ch. 2, and Berkeley Math 172 topic 6
after topics 4 and 5. Only at this page are all twelve cells populated.

DEFS: partition of an integer, part, Ferrers/Young diagram, conjugate partition;
**$p(n)$** (well-definedness #19) and $p(n,k)$; restricted partitions (distinct
parts, odd parts, parts $\le m$); the infinite products of #20.

THMS: conjugation is an involution, and the number of partitions with at most
$k$ parts equals the number with parts $\le k$; **the generating function
$\sum p(n)x^n = \prod_{k\ge1}(1-x^k)^{-1}$** (landmark; legitimate only via
CB-4's summability, #20); the generating functions for distinct parts and for
odd parts; **Euler's identity**: distinct parts $=$ odd parts, proved
**twice** — by generating functions and by Glaisher's bijection, with an
agreement remark; **Euler's pentagonal number theorem** (landmark), proved by
**Franklin's involution**, which is purely bijective and needs no analysis;
the resulting recurrence for $p(n)$; **the twelvefold way** (landmark): all
twelve counts of functions $N \to X$ under the four (un)distinguishability
regimes and the three injectivity regimes, each cell citing the item that
proves it — nine from CB-1/CB-2/CB-7 and three from this page. The twelvefold
way is stated as **one theorem with twelve numbered clauses**, so no cell can
be quietly left unproved.

FS: $p(n)$ has a closed form as a finite sum of powers (refuted by the
recurrence characterisation of CB-5 plus the pentagonal recurrence's shape —
**check this closes without asymptotics; if it does not, DROP with a note**,
since Hardy–Ramanujan is denied §9.2); the number of partitions of $n$ into
exactly $k$ parts equals $\binom{n-1}{k-1}$ (that is compositions, not
partitions — the sharpest `fs-` on the page); conjugation is a bijection between
partitions with distinct parts and partitions into odd parts (it is not; that is
Glaisher's map).

B: the partitions of $6$ listed and conjugated; Ferrers diagrams for a
self-conjugate partition; Glaisher's bijection applied to a concrete partition;
the pentagonal recurrence used to compute $p(10)$; each of the twelve cells
instantiated with $n = 3$, $k = 2$.

CEX: a partition whose conjugate is itself, and one whose conjugate is not; a
"bijection" between distinct-part and odd-part partitions that fails; the
naive product $\prod(1-x^k)^{-1}$ manipulated without summability, producing a
coefficient that is not a finite sum.

Traps. (i) #20 is the whole legitimacy of this page. Every infinite product is
a summability claim first. (ii) Franklin's involution has exceptional cases that
are the entire content; each exceptional case is its own numbered step. (iii)
The twelvefold way must not silently reuse an item homed on a **B** page; check
each of the twelve citations against the b-leaf rule.

Forward references: NONE.

## CB-9. Incidence Algebras and Möbius Inversion  (order 185, combinatorics)

`requires`: `chains-antichains-sperner-and-dilworth` (173),
`rings-subrings-and-integral-domains` (46),
`primes-and-the-fundamental-theorem-of-arithmetic` (28)

DEFS: **locally finite poset** (the hypothesis IS the well-definedness, #21);
the incidence algebra $I(P,R)$ and its convolution; $\delta$ and $\zeta$;
**the Möbius function $\mu_P$** (#22); the classical number-theoretic $\mu$ as
the special case of the divisibility poset.

THMS: $I(P,R)$ is an associative $R$-algebra with identity $\delta$;
$f \in I$ is invertible iff $f(x,x)$ is a unit for all $x$, so $\zeta$ is
invertible and $\mu := \zeta^{-1}$ exists and is unique (#22); **Möbius
inversion** on a locally finite poset (landmark); the **product theorem**
($\mu$ of a product poset is the product of the $\mu$'s); $\mu$ of the Boolean
lattice is $(-1)^{\lvert B\setminus A\rvert}$, and hence **inclusion–exclusion
is recovered** as a special case — the dictionary item against CB-2, mandatory;
$\mu$ of the divisor lattice is the classical Möbius function, and classical
Möbius inversion follows, with the multiplicativity of $\mu$ proved here rather
than assumed; $\mu$ of the chain and of the partition lattice
$\Pi_n$ ($(-1)^{n-1}(n-1)!$); the **Euler characteristic / cross-cut**
statements are DROPPED (they belong with order complexes and simplicial
topology — recorded).

FS: every poset has a Möbius function (witness a non-locally-finite poset where
$*$ is undefined — the `cex-` below is its refutation); $\mu(x,y)$ depends only
on the interval's cardinality; classical Möbius inversion and
inclusion–exclusion are unrelated results.

B: $\mu$ computed on $2^{[3]}$, on the chain, on the divisor lattice of $12$,
and on $\Pi_3$; Möbius inversion applied to recover $\varphi$ from
$\sum_{d\mid n}\varphi(d) = n$ (citing the number theory pages at 26–30);
the necklace-counting inversion.

CEX: **a poset that is not locally finite**, where the convolution sum is
infinite and $I(P,R)$ does not exist — the counterexample that makes #21 a real
hypothesis; a function that is not invertible in $I(P,R)$.

Traps. (i) #21 is not a technicality; the counterexample is required. (ii) The
number-theoretic $\mu$ already has a home if the NT pages minted one — **check
`primes-and-the-fundamental-theorem-of-arithmetic` and
`congruences-and-the-chinese-remainder-theorem` on disk**; if a classical $\mu$
exists there, this page proves the agreement instead of re-minting.
(iii) `def-partial-order` is published; cite.

Forward references: NONE.

## CB-10. Counting up to Symmetry: Burnside and Pólya  (order 187, combinatorics)

`requires`: `group-actions-and-cayleys-theorem` (42),
`symmetric-groups-and-the-sign-homomorphism` (44),
`set-partitions-stirling-numbers-and-exponential-generating-functions` (181),
`symmetric-polynomials` (58)

Verified against `plan-algebra-track.md`: AA-6 scaffolds orbit–stabiliser and
the class equation but **not** the orbit-counting lemma, so this page mints it
(§10 amendment 4).

DEFS: the fixed-point set $X^g$; **the cycle index $Z(G)$** (well-definedness
#23 — it lives in a multivariate polynomial ring, and §10 amendment 5 settles
where that ring comes from); a colouring of $X$ by a finite set, and the induced
action; the pattern inventory.

THMS: **Burnside's orbit-counting lemma** $\lvert X/G\rvert = \frac{1}{\lvert
G\rvert}\sum_g \lvert X^g\rvert$ (landmark), by double counting the set
$\{(g,x): gx = x\}$ — CB-2's item — and orbit–stabiliser from AA-6;
**Pólya's enumeration theorem** (landmark) in both the plain and the weighted
(pattern-inventory) form; the cycle index of $C_n$, $D_n$, $S_n$ computed as
theorems; the number of necklaces and of bracelets; the number of
non-isomorphic graphs on $n$ vertices as a Pólya count on $S_n$ acting on
$[n]^{(2)}$ — **stated here as a count of orbits of edge-sets, since `def-graph`
arrives at 189**, with the graph-theoretic reading added as a Remark on GT-1.

FS: the number of orbits equals $\lvert X\rvert/\lvert G\rvert$ (false unless
the action is free — the single most common error, and the reason Burnside is a
theorem); Burnside's lemma holds for infinite groups in the stated form; the
cycle index determines the group.

B: necklaces with 6 beads and 2 colours, both by Burnside and by Pólya; colourings
of the faces of a cube under rotation; $Z(S_3)$ and $Z(C_4)$ computed; the count
of graphs on 4 vertices up to isomorphism, as orbits.

CEX: a non-free action where the naive division fails; two non-isomorphic groups
with the same cycle index for a given action.

Traps. (i) The name: this library's convention is the most widely adopted one,
so "Burnside's lemma" with a Remark recording Cauchy–Frobenius; do not open the
attribution question inside a Statement. (ii) The multivariate polynomial ring
(#23) is a real prerequisite — **verify on disk** which page mints it before
writing a single `requires` line. (iii) The action of $S_n$ on pairs needs
$\binom{n}{2}$ from CB-1 (an A-page item, checked).

Forward references: a Remarks-only pointer to GT-1's graph reading, declared in
`forward_refs`, non-load-bearing.

## GT-1. Graphs, Walks and Connectivity  (order 189, combinatorics)

`requires`: `inclusion-exclusion-and-the-pigeonhole-principle` (22),
`chains-antichains-sperner-and-dilworth` (173)

The whole graph block follows Diestel's ordering, which is unusually useful
here: his preface states that "apart from two clearly marked exceptions, any
results used in the proof of others precede them in the text", and every proof
carries the reference numbers of the results it uses in the margin. That is a
topologically sorted graph theory text with an explicit dependency index — the
closest thing in the literature to this library's `deps` field, and it is what
the ordering below is checked against. Diestel also states his external
prerequisites exactly: linear algebra for §1.9 and §5.5, plane topology for
ch. 4, elementary probability for ch. 11. Those three gates are precisely GT-7,
GT-8 and CB-12 in this scaffold.

DEFS: **simple graph** as a pair $(V,E)$ with $E \subseteq [V]^2$ (finite unless
said otherwise, and the finiteness convention fixed in a `rem-` and cited);
multigraph and loop, as a separate definition, so that a theorem never
silently changes which object it is about; digraph; adjacency, incidence,
neighbourhood, degree, $\delta(G)$, $\Delta(G)$; subgraph, induced subgraph,
spanning subgraph; walk, trail, path, cycle; **the graph distance** (#26) and
girth (#27); connected, component; **connectivity $\kappa$ and edge-connectivity
$\lambda$** (#27); bipartite graph, complete graph $K_n$, complete bipartite
$K_{m,n}$, cycle $C_n$, path $P_n$; graph isomorphism; complement; the
line graph and the contraction $G/e$, minors and topological minors.

THMS: **the handshake lemma** $\sum_v d(v) = 2\lvert E\rvert$ (landmark — an
immediate corollary of CB-2's double counting, cited, not re-proved), and the
corollary that the number of odd-degree vertices is even; $\lvert E(K_n)\rvert =
\binom{n}{2}$ (cites CB-1); every $u$–$v$ walk contains a $u$–$v$ path; being
connected is an equivalence relation on $V$ and the components partition it;
$\delta(G) \ge 2$ forces a cycle, and $\delta(G) \ge k$ forces a path of length
$k$; **a graph is bipartite iff it has no odd cycle** (landmark); $\kappa(G) \le
\lambda(G) \le \delta(G)$ (Whitney); a graph with $n$ vertices and more than
$\binom{n-1}{2}$ edges is connected; the number of labelled graphs on $[n]$ is
$2^{\binom{n}{2}}$, and the number up to isomorphism is CB-10's Pólya count
(the backward citation that discharges CB-10's forward pointer).

FS: a graph is determined up to isomorphism by its degree sequence (witness: two
non-isomorphic graphs with degree sequence $(2,2,2,2,2,2)$ — $C_6$ and
$2C_3$); every graph with all degrees even is a cycle; $\kappa = \lambda$
always; a walk of minimum length between two vertices need not be a path.

B: small graphs drawn in adjacency-list prose; the Petersen graph defined and its
degree, girth and connectivity computed (it is the standard witness for four
later pages, so it is defined on the **A** page and only *computed* here);
$C_6$ vs $2C_3$; the components of a disconnected example; $K_{3,3}$ and $K_5$
introduced as objects (needed by GT-8, so again A-page definitions).

CEX: two non-isomorphic graphs with the same degree sequence; a graph with
$\kappa < \lambda < \delta$; a bipartite graph with an even cycle and no odd one,
and a non-bipartite one with an odd cycle exhibited.

Traps. (i) **The finiteness convention.** State once, in a `rem-`, that "graph"
means finite simple graph unless a statement says otherwise, and cite it from
every infinite statement (De Bruijn–Erdős, infinite Ramsey). Silent switching is
the classic defect. (ii) $K_5$, $K_{3,3}$ and the Petersen graph are consumed by
later A-pages, so they are A-page items here, not B-page examples. (iii) The
handshake lemma is CB-2's double counting instantiated — cite, do not reprove.

Forward references: NONE.

## GT-2. Trees, Forests and Spanning Trees  (order 209, combinatorics)

`requires`: `graphs-walks-and-connectivity` (207)

DEFS: tree, forest and leaf; rooted tree, parent and level; spanning tree; the
finite set of spanning trees and tau(G); labelled Prüfer encoding and decoding;
a real-weighted graph and minimum spanning tree.

THMS: every nonempty forest has a vertex of degree at most one; the forest
identity |V|=|E|+c and the tree edge count; deletion of a tree edge and addition
of a nonedge; the full nonempty finite-tree characterisation theorem; every
nontrivial tree has two leaves; rooted-tree parent and level properties; a
maximal acyclic spanning subgraph of a connected graph is a spanning tree, and
a finite graph is connected iff it has a spanning tree; fundamental cycles and
cuts; finiteness of the spanning-tree set; the Prüfer bijection and Cayley's
formula; the spanning-tree exchange lemma; exact MST cut and cycle properties;
distinct edge weights imply uniqueness; and correctness of Kruskal and Prim as
constructive finite existence procedures, with arbitrary tie-breaking.

B: trees through five vertices; a Prüfer computation in both directions;
tau(C_n)=n and tau(K_4)=16; fundamental cycle and cut computations; two spanning
trees in one graph; a complete Kruskal/Prim computation; disconnected acyclic
and n-1-edge counterexamples; a nonunique MST with repeated weights; and the
false statements that Cayley counts unlabelled trees and that every edge belongs
to every spanning tree.

Traps. Every graph here is finite, simple and undirected. The null graph is not
connected, K_1 is a tree with no degree-one leaf, and the equivalence list is
stated for a nonempty graph. Write |V|=|E|+c rather than natural subtraction.
Prüfer labels are the von Neumann natural n={0,...,n-1}; the code and formula are
stated for n>=2, with tau(K_0)=0 and tau(K_1)=1 handled separately. Cayley's
formula is labelled, not unlabelled. The infinite spanning-tree theorem is
outside scope. MST algorithms carry no computational-complexity assertion.

Forward references: NONE.

## GT-3. Eulerian Circuits, Hamiltonian Cycles and Tournaments  (order 211, combinatorics)

`requires`: `trees-forests-and-spanning-trees` (209)

DEFS: multigraph degree with loops counted twice; digraph indegree and
outdegree with a loop counted once in each; underlying/weak connectivity;
directed walks, trails, paths and cycles and strong connectivity; Euler trails
and circuits in multigraphs and digraphs; Hamilton paths and cycles,
Hamiltonian and Hamilton-connected graphs; the Bondy–Chvátal closure; finite
tournaments.

THMS: the two focused Hierholzer lemmas (a maximal unused-edge trail closes,
and edge-disjoint closed trails sharing a vertex splice); **Euler's theorem**
for connected finite undirected multigraphs, proved constructively; the exact
trail corollary: an Euler trail exists iff there are **zero or two** odd-degree
vertices, and an open Euler trail exists exactly in the two-odd-vertex case;
the directed Euler-circuit theorem for finite digraphs without isolated
vertices: weak connectivity plus equality of indegree and outdegree at every
vertex; the Hamilton-cycle vertex-deletion component bound and the corollary
that a Hamiltonian graph on at least three vertices is 2-connected; the
Bondy–Chvátal edge-addition lemma, closure well-definedness, and closure
theorem; **Ore's theorem**; the implication Dirac condition => Ore condition;
**Dirac's theorem**; **Rédei's theorem** by induction; the tournament
cycle-insertion lemma; **Camion's theorem** for strongly connected tournaments
on at least three vertices.

B: the Königsberg bridges degree obstruction; two triangles sharing one vertex
as Eulerian but non-Hamiltonian; $K_4$ as Hamiltonian but non-Eulerian; $P_3$
as having a Hamilton path but no Hamilton cycle; two disjoint copies of $K_m$
showing sharpness one below Dirac's even-order threshold; an explicit Hamilton
cycle in $K_{3,3}$; $K_4$ plus a vertex adjacent to two clique vertices as Ore
without Dirac; the transitive tournament; the directed three-cycle tournament.

DROP: the Petersen non-Hamiltonicity item. No bounded, dependency-closed proof
was located that is short enough for this pair, and a hand-waved finite case
check is not licensed. It can be restored on a later examples page with an
explicit case decomposition.

Traps. Euler trail includes the closed case, so "iff exactly two odd degrees"
is false; use zero or two, and reserve exactly two for an open trail. Do not
confuse weak connectivity with strong connectivity in the directed Euler
theorem. The local cycle convention has at least three distinct vertices, so
Camion's theorem is stated for order at least three. Every Hierholzer extension
and splice is a numbered constructive step. No false-statement items are
created: the scaffold's false sentences are removed rather than promoted into
AI-generated claims. There is no characterisation of Hamiltonicity among the
results proved on this page.

Forward references: NONE.

## GT-4. Matchings, Covers, Menger and Network Flows  (order 213, combinatorics)

`requires`: `eulerian-and-hamiltonian-graphs` (211),
`incidence-algebras-and-mobius-inversion` (203)

DEFS: matchings, saturated vertices, maximal and maximum matchings, perfect
matchings and $\nu(G)$; a source-backed remark fixing maximal versus maximum;
vertex covers and edge covers with $\tau(G)$ and $\rho(G)$; alternating and
augmenting paths; bipartite neighbourhoods, Hall's condition and systems of
distinct representatives; finite integral networks with distinguishable arcs,
integer capacities, feasible integral flows, values, cuts, and labelled
forward/reverse residual arcs; arc-, edge-, and internally vertex-disjoint path
families and their corresponding local separators.

THMS: switching along an augmenting path; the alternating path/even-cycle
decomposition of the symmetric difference of two matchings; **Berge's theorem**;
the strict and tight subinstances in the standard inductive proof of **Hall's
finite marriage theorem**; the finite-family SDR form; Hall's deficiency formula;
the alternating-reachability cover construction and **König's theorem**
$\nu(G)=\tau(G)$ for finite bipartite graphs; **Gallai's edge-cover identity**
$\nu(G)+\rho(G)=|V(G)|$ for graphs without isolated vertices.

For integral networks, the flow-across-a-cut identity and weak duality precede
the residual augmentation and tight-reachable-cut lemmas. They yield a complete
Ford–Fulkerson termination proof and **max-flow min-cut for finite integer
capacities**, with an integral optimum. Integral flow decomposition is proved
before the unit bipartite network identifies matching size with flow value and
vertex-cover size with cut capacity; this records the agreement with the earlier
Hall and König proofs without duplicating either theorem.

**Menger's theorem** is stated with four explicit finite clauses: directed arc,
undirected edge, directed internally vertex-disjoint paths for terminals with no
source-to-sink arc, and undirected internally vertex-disjoint paths for
nonadjacent terminals. The directed arc form follows from unit-capacity flow and
flow decomposition; antiparallel cancellation gives the undirected edge form;
labelled vertex splitting with capacity-one bottlenecks gives the two vertex
forms. The global Whitney corollary states that, for $k\ge1$, a finite graph on
at least $k+1$ vertices is $k$-connected iff every two vertices are joined by
$k$ internally disjoint paths, including an explicit adjacent-terminal case.

B: $P_4$ with a maximal nonmaximum middle-edge matching and its augmenting path;
three left vertices with only two collective neighbours; a three-set SDR; the
triangle with $\nu=1<2=\tau$; a four-vertex integral network with maximum flow
and minimum cut both five; and the three internally disjoint paths and
three-vertex separator between the size-two part of $K_{2,3}$.

DROP/DEFER: Tutte's theorem and the Tutte–Berge formula require nonbipartite
matching structure (factor-critical components or blossom machinery) not built
by the declared prerequisites. The infinite marriage theorem and its exact
choice-strength attribution are deferred to an infinite matching development;
the source pass confirmed an AC-dependent locally finite form but did not
license the prose scaffold's exact BPI claim from the available closure. The
arbitrary-infinite-set Hall denial is deferred with it. Arbitrary rational and
real capacities are not asserted: the page proves the integer form by a
terminating augmenting-path argument, and does not need the irrational
nontermination construction. No `proved_here: false` fallback is necessary for
the finite results retained here.

Traps. Residual arcs are labelled copies of original arcs, so a forward
residual arc and the reverse copy of an antiparallel original arc never collapse
into one arc. A residual augmentation states separately how much cancels a
reverse original flow and how much uses unused forward capacity. In the
undirected edge-Menger reduction, opposing flows are cancelled before path
decomposition so two paths cannot use opposite orientations of one undirected
edge. Vertex Menger excludes adjacent terminals locally; the global Whitney
corollary handles adjacent terminals by applying the local theorem to $G-uv$
and then restoring the edge $uv$. Maximal and maximum remain distinct.

Forward references: NONE.

## GT-5. Graph Colouring  (order 197, combinatorics)

`requires`: `matchings-covers-menger-and-network-flows` (195),
`filters-and-ultrafilters` (12)

DEFS: proper vertex colouring, **$\chi(G)$** (#29); proper edge colouring and
$\chi'(G)$; $k$-degenerate; clique number $\omega(G)$ and independence number
$\alpha(G)$; **the chromatic polynomial $P(G,k)$** (#30); list colouring and
the choice number (definitions only, if the page stays under the cap); perfect
graph.

THMS: $\chi(G) \le \Delta(G)+1$ by the greedy bound, and the sharper
$\chi \le 1 + \max_{H \subseteq G}\delta(H)$ (degeneracy); $\chi(G) \ge
\omega(G)$ and $\chi(G) \ge n/\alpha(G)$; **Brooks' theorem** (landmark:
$\chi \le \Delta$ unless $G$ is complete or an odd cycle) — a real proof with
several cases, each numbered; **Vizing's theorem** (landmark: $\Delta \le \chi'
\le \Delta+1$, the fan argument, simple graphs only, §9.13); **König's edge
colouring theorem** ($\chi' = \Delta$ for bipartite graphs, from GT-4);
**deletion–contraction** and the theorem that $P(G,k)$ **is** a polynomial with
integer coefficients, leading coefficient 1, degree $n$, alternating signs (#30);
$P(G,k)$ determines $n$, $\lvert E\rvert$ and the number of components;
$\chi(G) = \min\{k : P(G,k) > 0\}$; **De Bruijn–Erdős**: an infinite graph is
$k$-colourable iff every finite subgraph is (landmark), with **BPI named in the
Statement** and `thm-ultrafilter-lemma` cited (§7); the **weak perfect graph
theorem** is FLAGGED OPTIONAL (§9.7) — include only if the page stays under the
cap and the proof can be written in numbered steps.

FS: the chromatic polynomial determines the graph up to isomorphism (witness:
all trees on $n$ vertices have $P = k(k-1)^{n-1}$); $\chi(G) = \omega(G)$ always
(witness $C_5$: $\omega = 2$, $\chi = 3$); Brooks' theorem holds without the two
exceptions; $\chi'(G) = \Delta(G)$ always (witness $K_3$ or the Petersen graph);
every planar graph is 4-colourable **is NOT stated as an `fs-`** — it is true and
unproved here, so it is a ‡ catalogue entry (§9.12), and confusing "not proved
here" with "false" would be the worst possible error on this page.

B: greedy colouring order-dependence shown on a concrete graph; $\chi(C_5) = 3$;
$P(K_3,k)$, $P(P_n,k)$, $P(C_n,k)$ computed by deletion–contraction; a graph
with $\chi' = \Delta+1$; a $k$-colouring of an infinite graph obtained from De
Bruijn–Erdős on a concrete family.

CEX: two non-isomorphic graphs with equal chromatic polynomials; a graph where
greedy uses $\Delta+1$ colours though $\chi = 2$; a Brooks exception.

Traps. (i) #30 is the page's headline obligation: the word "polynomial" is not
licensed until deletion–contraction proves it. (ii) The four colour theorem
must be handled exactly as §9.12 says — ‡ catalogue, never an `fs-`, never a
citation. (iii) De Bruijn–Erdős is the only infinite statement on the page;
the finiteness convention of GT-1 must be explicitly suspended in its Statement.
(iv) Brooks' case analysis is the size risk; budget it.

Forward references: NONE.

## CB-11. Ramsey Theory  (order 199, combinatorics)

`requires`: `graph-colouring` (197),
`inclusion-exclusion-and-the-pigeonhole-principle` (22),
`countability-and-uncountability` (18)

DEFS: the arrow notation $n \to (s,t)^2$ and its $r$-colour, $k$-uniform
generalisation; **the Ramsey number $R(s,t)$** (well-definedness #25 — the
theorem strictly precedes the definition); the van der Waerden number $W(k,r)$
and the Schur number, same shape; a finitely branching tree, for König's lemma.

THMS: **the finite Ramsey theorem** for graphs (landmark), with the
$R(s,t) \le R(s-1,t)+R(s,t-1)$ recursion and the bound $R(s,t) \le
\binom{s+t-2}{s-1}$ (CB-1's binomial coefficient); $R(3,3) = 6$ exactly, with
both bounds proved; **Ramsey's theorem for $k$-uniform hypergraphs and $r$
colours** (landmark, by induction on $k$); **the infinite Ramsey theorem**
(landmark), with **DC named in the Statement** (§7) and a choice-ledger remark;
**the finite theorem derived from the infinite one by compactness** (König's
lemma, DC), as a *second* proof with an agreement remark — the first proof is
choice-free and that contrast is the item's whole point; **König's lemma**;
**van der Waerden's theorem** (landmark; the double induction, elementary and
choice-free for the finite statement); **Schur's theorem** and the corollary
that $x^n + y^n \equiv z^n \pmod p$ has a nontrivial solution for large $p$
(cites the number theory pages at 26–30); **Erdős–Szekeres restated** as a
Ramsey corollary, with the agreement remark against CB-2's direct proof;
**the lower bound $R(k,k) > 2^{k/2}$ by counting** — Erdős's original argument
is a comparison of two finite counts and needs **no probability**, so it lives
here and CB-12 re-derives it probabilistically (the reverse of the usual
textbook order, and deliberate: it keeps CB-11 choice-free and
probability-free).

FS: $R(s,t)$ is known for all $s,t$ (this is a claim about mathematics, not a
mathematical claim — **do NOT make it an `fs-`**; it is a Remark. Recorded here
so no scaffolder plants it); the infinite Ramsey theorem is a theorem of ZF
(**check before shipping**: the DC cost is real but the exact reversal over ZF
must be verified, and if it cannot be, this becomes a Remark citing the ‡
independence catalogue under the axiom exemption); every $2$-colouring of
$\mathbb{N}$ has an infinite monochromatic **arithmetic progression** (false;
van der Waerden gives arbitrarily long finite ones, and the infinite version
fails — the sharpest `fs-` available here).

B: $R(3,3) = 6$ worked in both directions with the explicit $K_5$ colouring;
$W(3,2) = 9$ stated with the extremal colouring exhibited; a $2$-colouring of
$K_5$ with no monochromatic triangle; the infinite Ramsey theorem applied to
recover Erdős–Szekeres for infinite sequences.

CEX: the $K_5$ colouring witnessing $R(3,3) > 5$; a colouring of $[8]$ with no
$3$-term monochromatic AP; a finitely branching infinite tree with no infinite
branch **if** the branching is not finite (the hypothesis of König's lemma made
sharp).

Traps. (i) #25 — the theorem before the definition, always. (ii) The choice
bookkeeping is the page's real content: finite Ramsey is choice-free, infinite
Ramsey costs DC, and the compactness derivation of finite from infinite costs DC
too. All three facts are stated, and the ledger remark ties them together.
(iii) The finiteness convention of GT-1 is suspended here; say so.

Forward references: NONE.

## GT-6. Extremal Graph Theory  (order 201, combinatorics)

`requires`: `ramsey-theory` (199), `graph-colouring` (197)

DEFS: the extremal number $\operatorname{ex}(n,H)$; the Turán graph $T_r(n)$;
$H$-free; the Zarankiewicz problem's $z(m,n;s,t)$.

THMS: **Mantel's theorem** ($K_3$-free $\Rightarrow \lvert E\rvert \le
n^2/4$, landmark) with the extremal graph characterised; **Turán's theorem**
(landmark) in the $\lvert E\rvert \le (1-1/(r-1))n^2/2$ form, proved twice — by
the Zykov symmetrisation and by the weight-shifting/Motzkin–Straus argument, or
by induction — with an agreement remark, and with $T_{r-1}(n)$ identified as the
**unique** extremal graph; the complement form (Turán $\iff$ a bound on the
independence number, and hence a second proof of the Ramsey lower bound's
shape); **Kővári–Sós–Turán** (landmark: $\operatorname{ex}(n,K_{s,t}) =
O(n^{2-1/s})$, by double counting $s$-sets — CB-2's item again); the
$C_4$-free case worked exactly; the Erdős–Ko–Rado-flavoured corollary for
$\operatorname{ex}(n,C_4)$; the **Erdős–Gallai** bound for paths, if the page
stays under the cap; $\operatorname{ex}(n,H)$ for bipartite $H$ is
$o(n^2)$ **is DENIED here** — it is the Erdős–Stone corollary (§9.5).

FS: Turán's bound is attained by many graphs (uniqueness); a $K_4$-free graph
can have $n^2/3$ edges; $\operatorname{ex}(n,K_{2,2}) = \Theta(n^{3/2})$ is
achieved by a random graph (the construction is algebraic, and the honest
statement is a Remark — **keep as an `fs-` only if the false claim can be
refuted from material below this page; else DROP**).

B: $T_3(7)$ drawn and counted; Mantel's bound attained by $K_{n/2,n/2}$; a
$C_4$-free graph on 9 vertices; the Zarankiewicz count for small parameters.

CEX: a $K_3$-free graph with $n^2/4$ edges that is not complete bipartite (there
is none for $n$ even — so the CORRECT item is the uniqueness theorem, and the
`cex-` slot is instead a near-extremal graph one edge short); a graph meeting
Kővári–Sós–Turán's bound order but not its constant.

Traps. (i) Asymptotic notation: $O$, $o$ and $\Theta$ must be **defined** or
avoided. The library has limits (new order 102) and can define them; if the
authoring agent does not want to, every statement is written with explicit
constants. Decide once, on this page, and record it. (ii) Erdős–Stone is denied
(§9.5) and the page must not state its corollaries as though proved.
(iii) Turán's uniqueness clause is where most textbook proofs get vague; it is a
numbered item.

**Amendments (Alpha, `frontier-11` step 4, 2026-08-12). Orders in this file are
pre-`frontier-11`; `research/plan-spec.json` puts this pair at 219/220.**

1. **Trap (i) is answered, as it asked to be: the notation is DEFINED on this
   page.** `def-asymptotic-extremal-notation-and-edge-density` defines edge
   density and $O$, $o$, $\Omega$, $\Theta$ for extremal functions, and every
   asymptotic statement below it cites that definition rather than leaving the
   symbols to the reader.
2. **Erdős–Stone IS proved here, and §9.5's own licence is what permits it.**
   §9.5 denies Erdős–Stone "licensed by either a regularity page or **a
   dedicated extremal page**" — this is that page, and no regularity lemma is
   used. The route is a locally proved hypergraph Kővári–Sós–Turán bound for
   $K^{(r)}_{s,\dots,s}$, then Erdős–Stone for balanced blowups, then the full
   Erdős–Stone–Simonovits theorem and the corollary that asymptotic extremal
   density depends only on $\chi(H)$. Trap (ii) is therefore satisfied, not
   violated: the corollaries are stated *because* the theorem is proved, and the
   2026-08-11 build-the-machinery rule is what makes the hypergraph lemma a
   thing to build rather than a reason to decline. The bipartite $o(n^2)$
   statement the THMS line denies is likewise proved, but as a direct corollary
   of ordinary KST rather than of Erdős–Stone.
3. **The $\operatorname{ex}(n,K_{2,2})=\Theta(n^{3/2})$ `fs-` is DROPPED**, on
   the FS line's own instruction: the matching lower bound is algebraic
   (Erdős–Rényi polarity graphs) or probabilistic, and neither is available
   below this page. The two source headings carrying it are `deferred` with
   named receiving pages — `finite-probability-and-the-probabilistic-method` for
   the deletion argument, `block-designs-and-finite-projective-planes` for the
   projective-plane construction.
4. **"$H$-free" means ORDINARY-subgraph avoidance here, and the published
   library uses the phrase for INDUCED subgraphs.** The definition item fixes
   the ordinary-subgraph convention explicitly and keeps it separate; do not let
   a citation cross between the two readings.

Forward references: NONE.

## CB-12. Finite Probability and the Probabilistic Method  (order 203, combinatorics)

`requires`: `extremal-graph-theory` (201),
`the-exponential-function` (157), `the-logarithm-and-general-powers` (159)

Diestel names "a previous first encounter with elementary probability" as the
only prerequisite of his probabilistic chapter, and it is his last. This page
supplies that prerequisite **from scratch and finitely** — no measure theory
appears anywhere, because none is available (§9.6).

DEFS: **a finite probability space** as a finite set with nonnegative weights
summing to $1$ (well-definedness #24); event, independence, conditional
probability; **a random variable and its expectation** (#24), variance,
covariance; the uniform space on a finite family; the random graph $G(n,p)$
**for fixed $n$**, as a finite probability space on the $2^{\binom{n}{2}}$
labelled graphs.

THMS: **linearity of expectation** (landmark — a finite-sum theorem, and the
only thing the first-moment method uses); the union bound; **the first moment
method** ($\mathbb{P}[X > 0] > 0$ when $\mathbb{E}[X] > 0$, and the averaging
form: some outcome is at least the mean); Markov's and Chebyshev's inequalities;
**the second moment method**; the **Lovász Local Lemma**, general
(non-symmetric, with the $x_i$) form proved first — it is choice-free and
constant-free — then the symmetric corollary $e\,p\,(d+1) \le 1$, which is why
this page sits above `the-exponential-function`; **Chernoff-type bounds** for
sums of independent bounded variables, FLAGGED (§9.6): include if the
exponential-function items support the moment-generating estimate cleanly, else
drop with a note; **the Ramsey lower bound $R(k,k) > 2^{k/2}$ re-derived
probabilistically**, with the agreement remark against CB-11's counting proof;
**Erdős's theorem: for all $k,g$ there is a graph with girth $> g$ and chromatic
number $> k$** (landmark — the deletion method, the block's showpiece, and the
result that shows $\chi$ is not a local invariant); every tournament on $n$
vertices has a Hamiltonian path count $\ge n!/2^{n-1}$ (Szele, the first
probabilistic argument ever); the crossing-number and dependent-random-choice
arguments are DROPPED (crossing number needs planarity, which is GT-8 above
this page).

FS: $\mathbb{E}[XY] = \mathbb{E}[X]\mathbb{E}[Y]$ without independence;
linearity of expectation requires independence (the single most valuable `fs-`
on the page); a graph with high girth has low chromatic number (refuted by
Erdős's theorem itself — so this is a restatement `fs-`, keep only if it earns
its place); the probabilistic method produces an explicit object.

B: the union bound applied to a small family; $\mathbb{E}$ of the number of
triangles in $G(n,p)$; the two-colouring of a hypergraph with fewer than
$2^{k-1}$ edges; Szele's tournament count; the deletion step of Erdős's theorem
worked with explicit parameters.

CEX: two dependent random variables with $\mathbb{E}[XY] \ne
\mathbb{E}[X]\mathbb{E}[Y]$; a random variable whose Chebyshev bound is far from
tight; an event of positive probability with no explicit witness (the honest
statement of what the method does and does not give).

Traps. (i) **Nothing on this page may quantify over an infinite probability
space.** $G(n,p)$ is a finite space for each $n$; statements "as $n \to \infty$"
are statements about a sequence of real numbers and use the published limit
machinery (new order 102), not a measure. (ii) The LLL's non-symmetric form is
proved first precisely so the symmetric constant $e$ is a corollary and not a
hypothesis. (iii) Expectation is a finite sum in the sense of CB-1's #5; cite it.

Forward references: NONE.

## CB-13. Linear Algebra Methods in Combinatorics  (order 205, combinatorics)

`requires`: `finite-probability-and-the-probabilistic-method` (203),
`inner-product-spaces-and-orthogonality` (94),
`gaussian-elimination-and-row-reduction` (80),
`polynomial-rings-and-roots` (52)

Oxford C8.3 and CMU 21-301 independently isolate the linear-algebra methods into
a single late block, after the pure-counting extremal results and before spectral
graph theory. This page is that block, and the split is why CB-3 could stay at
173 with no field dependency at all.

DEFS: the incidence vector of a set; a family of vectors in general position;
**VC dimension** and shattering; the polynomial method setup.

THMS: **the linear-algebra bound**: a family of vectors that is linearly
independent has size at most the dimension — instantiated as the master lemma of
the page, citing `thm-any-two-finite-bases-have-the-same-size` and rank
(new 80); **the odd-town theorem** ($\lvert\mathcal{F}\rvert \le n$ over
$\mathbb{F}_2$) and **even-town**; **Fisher's inequality** (landmark: a family
of sets with constant pairwise intersection has at most $n$ members, over
$\mathbb{R}$ — the rank argument, and the reason this page needs a field);
the Frankl–Wilson theorem is **DENIED** (§9, long) and recorded;
**the Combinatorial Nullstellensatz** (landmark; Alon's theorem, whose proof is
a polynomial-ring induction and needs nothing analytic), with two applications
— the Cauchy–Davenport theorem (cites the number theory pages) and a graph
colouring corollary; **Sauer–Shelah** (landmark: a family with VC dimension $d$
on $n$ points has at most $\sum_{i\le d}\binom{n}{i}$ members, by the shifting/
down-compression argument, which is **pure counting** and needs no linear
algebra — stated here for topical coherence, with a `rem-` saying so, since a
reader will otherwise assume it inherits the page's field dependency);
the Ray-Chaudhuri–Wilson bound if the page stays under the cap.

FS: the odd-town bound $n$ can be improved to $n-1$; Fisher's inequality holds
over $\mathbb{F}_2$ (the field matters, and the witness is even-town);
a family with VC dimension $d$ has at most $n^d$ members (the Sauer–Shelah bound
is a sum of binomials, and the crude power bound is false for small $n$ —
**check the witness before shipping**).

B: odd-town on $[4]$ with a maximal family; Fisher's inequality applied to the
Fano plane; the Combinatorial Nullstellensatz applied to a small colouring
problem; a family of VC dimension 2 attaining Sauer–Shelah.

CEX: an even-town family of size $2^{\lfloor n/2\rfloor}$, showing the parity
matters; a set family whose incidence vectors are dependent over $\mathbb{F}_2$
and independent over $\mathbb{R}$.

Traps. (i) The field is a hypothesis of every theorem here; $\mathbb{F}_2$ and
$\mathbb{R}$ give different bounds and the `fs-` list exists to make that
unmissable. (ii) Sauer–Shelah does **not** need the page's machinery; the
`rem-` is required so a reader does not inherit a false prerequisite.
(iii) `inner-product-spaces-and-orthogonality` is at 94 and is a legal
prerequisite; check on disk that the rank facts this page needs are homed on an
**A** page there.

Forward references: NONE.

## CB-14. Block Designs and Finite Projective Planes  (order 207, combinatorics)

`requires`: `linear-algebra-methods-in-combinatorics` (205),
`algebraic-extensions-degree-and-finite-fields` (96),
`congruences-and-the-chinese-remainder-theorem` (30)

DEFS: a $2$-$(v,k,\lambda)$ design (BIBD), its replication number $r$ and block
count $b$ (both **derived**, not stipulated — the derivation is the page's first
well-definedness obligation, since the definition presupposes they are constant);
symmetric design; Steiner system $S(t,k,v)$ and Steiner triple system; a finite
projective plane, its order, and the Fano plane; a Latin square and orthogonal
Latin squares; the incidence matrix.

THMS: the counting identities $bk = vr$ and $r(k-1) = \lambda(v-1)$, and the
divisibility conditions they force (double counting, CB-2); **Fisher's
inequality for designs**, $b \ge v$, as a corollary of CB-13's rank argument
(the reuse this page's placement buys); the incidence matrix identity
$NN^{\mathsf{T}} = (r-\lambda)I + \lambda J$ and its determinant, hence the
symmetric-design constraints; **the existence of a Steiner triple system on $v$
points iff $v \equiv 1, 3 \pmod 6$** (landmark; the necessity is the divisibility
condition above, the sufficiency is the Bose and Skolem constructions, which are
explicit and elementary — **and if the sufficiency proof cannot be written in a
bounded number of numbered steps, it DROPS to the necessity half with a note**);
**the projective plane $PG(2,q)$ over a finite field exists for every prime power
$q$** (landmark, citing `algebraic-extensions-degree-and-finite-fields`); a
projective plane of order $n$ has $n^2+n+1$ points and lines, and is a symmetric
$2$-$(n^2+n+1, n+1, 1)$ design; the equivalence between a projective plane of
order $n$ and a complete set of $n-1$ mutually orthogonal Latin squares;
**Bruck–Ryser–Chowla is DENIED** (§9.9) and the page says exactly what is and is
not known about orders $6$ and $10$, in Remarks, citing nothing.

FS: every $2$-$(v,k,\lambda)$ parameter triple satisfying the divisibility
conditions is realised (the conditions are necessary, not sufficient — and the
honest witness is a parameter set ruled out by Bruck–Ryser–Chowla, which is
denied, so this `fs-` must instead use a small case ruled out by hand, or DROP);
a projective plane exists of every order (open); Fisher's inequality can be
reversed to $b \le v$.

B: the Fano plane written out with its seven lines; a Steiner triple system on
$7$ and on $9$ points; two orthogonal Latin squares of order $3$; $PG(2,3)$
counted; the incidence matrix of the Fano plane and its determinant.

CEX: a parameter set passing the divisibility test with no design; two Latin
squares that are not orthogonal; a design that is not symmetric.

Traps. (i) The constancy of $r$ (and hence $b$) is a **theorem**; a definition
that stipulates it is stipulating something provable, and the library's rule is
to prove it. (ii) Bruck–Ryser–Chowla's denial removes the natural
non-existence witnesses; check every `fs-` on this page against that before
committing to it. (iii) Finite fields are at 96; the plane construction cites
them and does not rebuild $\mathbb{F}_q$.

Forward references: NONE.

## GT-7. Algebraic and Spectral Graph Theory  (order 209, combinatorics)

`requires`: `block-designs-and-finite-projective-planes` (207),
`the-spectral-theorem-and-singular-value-decomposition` (131),
`determinants-of-matrices-over-a-commutative-ring` (82),
`trees-forests-and-spanning-trees` (191)

Every source consulted puts eigenvalue methods terminal or optional — Bollobás
VIII–X, Cambridge's two-lecture "Eigenvalue methods", CMU 21-301's final block,
MIT 18.212 L29–32 — and every one of them names linear algebra as the gate.
Stanley's *Algebraic Combinatorics* quotes the real spectral theorem without
proof in its first chapter although its stated prerequisite is only "basic
linear algebra". **That hidden dependency is exactly what this library must make
explicit**, and it is why this page sits above order 131 and not lower.

DEFS: the adjacency matrix $A(G)$ and the **spectrum** of a graph
(well-definedness #31 — the eigenvalues are real by the spectral theorem, and
only then can they be listed in order); the Laplacian $L = D - A$ and the
normalised Laplacian; $\lambda_2$, the algebraic connectivity; cospectral graphs;
the incidence matrix; an expander (definition only).

THMS: the $(i,j)$ entry of $A^k$ counts walks of length $k$ (landmark — the
dictionary between linear algebra and GT-1, and the item everything else
uses); the spectrum is an isomorphism invariant; $\lambda_{\max} \le \Delta$ and
$\lambda_{\max} \ge \bar d$; $G$ is bipartite iff the spectrum is symmetric about
$0$; $L$ is positive semidefinite and $L\mathbf{1} = 0$; **the multiplicity of
$0$ in $\operatorname{spec}(L)$ is the number of components** (landmark), hence
$\lambda_2 > 0$ iff $G$ is connected; **the matrix-tree theorem** (landmark:
$\tau(G)$ is any cofactor of $L$, well-definedness #32 — all cofactors are
equal), proved either by **Cauchy–Binet** (**check on disk whether
`determinants-of-matrices-over-a-commutative-ring` mints it; if not, this page
mints it, and it is an in-scope determinant identity**) or by deletion–contraction,
with the route recorded; **Cayley's formula, second proof**, with an agreement
remark citing GT-2's Prüfer proof; **Cauchy interlacing** (needs
Courant–Fischer — **verify it is on the A page of 131**), and the **Hoffman
ratio bound** $\alpha(G) \le n\,(-\lambda_n)/(\lambda_1 - \lambda_n)$ for regular
$G$; **the friendship theorem** (landmark: if every two people have exactly one
common friend then someone knows everyone — the trace/eigenvalue-integrality
argument, a beautiful and fully in-scope application); the discrete **Cheeger
inequality** FLAGGED: keep if the Rayleigh-quotient machinery at 131 supports it
in numbered steps, drop with a note otherwise; the spectrum of $K_n$, $C_n$,
$K_{m,n}$ and the Petersen graph computed as theorems.

FS: cospectral graphs are isomorphic (witness: the standard smallest cospectral
pair, which must be exhibited concretely — if a small witness cannot be
verified in numbered steps, this `fs-` DROPS); $\lambda_2 > 0$ characterises
$2$-connectivity (it characterises connectivity); the matrix-tree theorem needs
a *particular* cofactor.

B: $A(C_4)$, $A(K_3)$ and their spectra; $\tau(K_4)$ by the matrix-tree theorem
checked against Cayley; walks of length 3 in a small graph counted by $A^3$;
the Petersen graph's spectrum $\{3, 1^5, (-2)^4\}$ and the Hoffman bound
applied to it.

CEX: two cospectral non-isomorphic graphs; a graph where $\lambda_{\max} =
\Delta$ and one where it is strictly smaller; a disconnected graph's Laplacian
kernel.

Traps. (i) #31 is not a formality: without the spectral theorem there is no
ordered list of eigenvalues and half the page is unstatable. (ii) Cauchy–Binet
and Courant–Fischer are both "probably already there" facts — **verify on disk
before writing `requires`**, and if either is homed on a B page, the b-leaf rule
forbids citing it and it must be re-proved here with an agreement remark.
(iii) The friendship theorem's endgame is an integrality argument about
eigenvalues; it cites the number theory pages, not hand-waving.

Forward references: NONE.

---

## SITE C — planarity, category theory, and homological algebra (orders 285–322)

## GT-8. Plane Graphs, Euler's Formula and the Five Colour Theorem  (order 285, combinatorics)

`requires`: `the-topology-of-euclidean-space` (239), `graph-colouring` (197),
`matchings-covers-menger-and-network-flows` (195),
`trees-forests-and-spanning-trees` (191)

**Why this page is separated from the rest of graph theory** (CC-D3). Diestel
names plane topology as the external prerequisite of his chapter 4, and it is
the only such gate in graph theory besides linear algebra and probability. The
word *face* is undefined until the complement of a plane graph is known to have
finitely many regions, and that is the **polygonal Jordan curve theorem**. This
page proves it. The general Jordan curve theorem stays ‡ and is never used.

DEFS: a **polygonal arc** and a polygon in $\mathbb{R}^2$ (built from EU-1's
polygonal paths, cited); a **plane graph** — a finite set of points and
polygonal arcs meeting only at endpoints (well-definedness #34); the **regions**
of $\mathbb{R}^2 \setminus G$ and a **face** (#33); the frontier of a face; a
planar graph (one isomorphic to a plane graph); plane dual $G^*$; subdivision;
maximal plane graph / plane triangulation.

THMS: **the polygonal Jordan curve theorem** (landmark): for a polygon $P$,
$\mathbb{R}^2 \setminus P$ has exactly two regions, each with frontier $P$
— the ray-crossing parity argument, entirely elementary, citing EU-1's
connectedness and compactness items and `lem-continuity-is-local-and-pastes`;
the arc version (removing a polygonal arc leaves $\mathbb{R}^2$ connected);
**a plane graph has finitely many faces** (#33) and exactly one unbounded face;
an edge lies on at most two faces, and on exactly two iff it is on a cycle;
**Euler's formula $n - m + \ell = 2$ for connected plane graphs** (landmark), by
induction on $m$ with the two cases (bridge / cycle edge) each a numbered step;
the corollaries $m \le 3n-6$ for $n \ge 3$, and $m \le 2n-4$ for triangle-free
plane graphs; **$K_5$ and $K_{3,3}$ are not planar** (landmark), each from the
matching corollary; **every planar graph has a vertex of degree $\le 5$**;
**the five colour theorem** (landmark; the Kempe-chain argument, which uses the
cyclic order of the neighbours of the degree-$\le 5$ vertex — a fact about the
*plane* embedding, so the step that extracts it is numbered, not assumed);
**Kuratowski's theorem** (landmark: planar iff no subdivision of $K_5$ or
$K_{3,3}$), via 3-connectivity, citing GT-4's Menger/Whitney form and building
the drawing by induction on edge contraction; **Wagner's theorem** (the minor
form) as a corollary; the plane dual and $(G^*)^* \cong G$ for connected plane
graphs; the number of faces is an invariant of the abstract planar graph for
3-connected graphs (Whitney) — FLAG: keep only if it closes cheaply, else drop
with a note.

FS: every planar graph is 3-colourable (witness $K_4$); every graph with
$m \le 3n-6$ is planar (witness: $K_{3,3}$ plus isolated vertices, or $K_5$
minus an edge plus padding); a graph and its plane dual have the same number of
edges but the dual is unique for every planar graph (it depends on the
**embedding**, and the standard two-embedding witness is the item); the four
colour theorem is **NOT** an `fs-` — see traps.

B: $K_4$ drawn plane with its four faces; Euler's formula checked on three
examples including a tree ($\ell = 1$); the Petersen graph shown non-planar via
Kuratowski; two plane embeddings of one graph with non-isomorphic duals; a
five-colouring of a small planar graph by Kempe chains.

CEX: a planar graph needing four colours; a non-planar graph satisfying
$m \le 3n-6$; a "plane graph" drawn with a non-polygonal arc, showing why the
definition fixes polygonal (orientation item, and the boundary of denial 15).

Traps. (i) **Everything geometric on this page is polygonal.** The moment an
argument reaches for an arbitrary Jordan arc it has left the library's scope
(§9.15). (ii) The four colour theorem is TRUE and unproved here: it is a ‡
catalogue entry, never an `fs-`, never a citation, and the page's summary says
so in the non-decaying form. (iii) Kuratowski's proof is the longest single
argument in the combinatorics block; the 3-connected case is a separate numbered
theorem and the reduction to it is another. (iv) Euler's formula's induction
needs "every edge on a cycle borders two faces", which needs the polygonal JCT —
do not let it become "clearly".

Forward references: NONE.

## CT-1. Categories, Functors and Natural Transformations  (order 287, category theory)

`requires`: `subspaces-products-and-quotients` (233),
`topological-spaces-and-continuity` (231),
`group-homomorphisms-and-the-isomorphism-theorems` (36),
`rings-subrings-and-integral-domains` (46),
`vector-spaces-and-subspaces` (72), the module block (§5, M1–M2),
`order-zorn-and-the-axiom-of-choice` (10),
`ordinals-and-transfinite-recursion` (225)

DEFS: **the size conventions** (CC-D5, §6): class, small, locally small, large,
and the schema/NBG presentation the owner picked — a `rem-` fixing it once,
cited by every size hypothesis in the block; category; the opposite category and
**the duality principle** (stated as a schema, which is exactly what it is);
isomorphism, monomorphism, epimorphism, split mono/epi (#37); initial, terminal
and zero objects; zero morphisms; functor, and covariant/contravariant;
faithful, full, fully faithful, essentially surjective, **split essentially
surjective**; embedding; natural transformation; **vertical and horizontal
composite** (#35); the product category; **the functor category** (#36);
natural isomorphism; equivalence of categories, adjoint equivalence; the
skeleton; comma, slice and coslice categories; a diagram as a functor.

THMS: the identity and composition laws make $\mathbf{Set}$, $\mathbf{Grp}$,
$\mathbf{Ring}$, $\mathbf{Vect}_F$, $R\text{-}\mathbf{Mod}$, $\mathbf{Top}$,
$\mathbf{Poset}$, a monoid, a group, and a preorder into categories — each a
numbered item citing the page that built the objects, and each stating whether
it is small, locally small or large; **the duality principle**; in
$\mathbf{Set}$, mono $=$ injective and epi $=$ surjective; **in $\mathbf{Ring}$,
$\mathbb{Z} \hookrightarrow \mathbb{Q}$ is epi and not surjective** (the item
that stops the conflation, and it is an A-page theorem because later pages need
it); split mono $\Rightarrow$ mono, and the converse fails; the vertical
composite is natural, the horizontal composite is well defined, and **the
interchange law** (#35), making $\mathbf{Cat}$ a $2$-category; a functor
preserves isomorphisms but not monos in general; **fully faithful $+$ split
essentially surjective $\iff$ equivalence** (landmark, **choice-free**, §7), with
the AC corollary and the adjoint-equivalence improvement stated separately; a
fully faithful functor reflects isomorphisms; **$\pi_1$ is a functor**
$\mathbf{Top}_* \to \mathbf{Grp}$ (the backward citation into the homotopy block
at 271 — the library's most satisfying instance, and it costs nothing because
that block is below); **the Eckmann–Hilton argument** as pure algebra (two
unital operations satisfying interchange agree, and are commutative and
associative), stated here because it needs nothing categorical and is used by
MO-2.

FS: a functor that is bijective on objects and morphisms is an isomorphism of
categories, and every equivalence is one (the skeleton witness); mono $+$ epi
$\Rightarrow$ iso in every category ($\mathbb{Z}\to\mathbb{Q}$ in
$\mathbf{Ring}$, or the two-element monoid); every category is locally small
(there is no cheap witness at this order — **DROP unless one closes, and record
it**); a natural transformation is determined by its component at one object.

B: the forgetful functors and the free constructions named (as functors only —
their adjointness is CT-4); $\mathbf{Set}^{\to}$; the fundamental groupoid;
a monoid as a one-object category; a preorder as a category and a monotone map
as a functor; the determinant as a natural transformation
$GL_n \Rightarrow (-)^\times$ (cites the LA pages at 82–84); the double-dual
natural transformation $V \to V^{**}$ and its failure to be an isomorphism in
infinite dimension (cites 92).

CEX: two categories that are equivalent and not isomorphic; a functor that is
full and faithful and not essentially surjective; a natural family that is not
natural.

Traps. (i) The size `rem-` is cited by roughly half the block; write it once and
never restate it. (ii) $\mathbf{Cat}$ (small categories) and $\mathbf{CAT}$ (not
formable) must be distinguished at first use (§6.3). (iii) The
$\mathbb{Z}\to\mathbb{Q}$ epi witness needs the ring pages; check it is an
A-page fact there. (iv) Every "is a category" item names the page that built the
underlying objects; this page proves categoricity, it does not rebuild groups.

Forward references: NONE.

## CT-2. Universal Properties, Representables and the Yoneda Lemma  (order 289, category theory)

`requires`: `categories-functors-and-natural-transformations` (287)

DEFS: the hom-functor $\mathcal{C}(c,-)$ and $\mathcal{C}(-,c)$ (locally small);
representable functor and universal element; presheaf; the Yoneda embedding
(#38); universal arrow; the category of elements.

THMS: the hom-functors are functors, and $\mathcal{C}(-,-)$ is a bifunctor;
**the Yoneda lemma** (landmark): for locally small $\mathcal{C}$ and any
$F : \mathcal{C}\to\mathbf{Set}$, $\operatorname{Nat}(\mathcal{C}(c,-),F) \cong
Fc$, naturally in $c$ and $F$ — **stated with local smallness as the ONLY size
hypothesis**, and with #38's order of business: the bijection is constructed
first and *proves* the collection is a set; the lemma is **choice-free**;
**the Yoneda embedding is fully faithful** (landmark) and its corollary,
$c \cong c'$ iff $\mathcal{C}(-,c) \cong \mathcal{C}(-,c')$; a representation is
unique up to unique isomorphism; universal arrows are initial objects of comma
categories, and conversely; initial and terminal objects are unique up to unique
isomorphism (the template for every "the" in the block).

FS: the Yoneda lemma needs $\mathcal{C}$ to be small; two non-isomorphic objects
can have isomorphic hom-functors. (The $\operatorname{Nat}(F,G)$ sethood clause
that stood here is withdrawn — amendment 1 below.)

B: the Yoneda lemma unwound for $\mathcal{C}$ a monoid (it becomes the statement
that a $G$-map out of the regular representation is determined by one element);
representability of the forgetful functor $\mathbf{Grp}\to\mathbf{Set}$ by
$\mathbb{Z}$, and of $\mathbf{Ring}\to\mathbf{Set}$ by $\mathbb{Z}[x]$; the
underlying-set functor on $\mathbf{Top}$ represented by the one-point space;
a presheaf on a poset.

CEX: a functor that is not representable (a small, checkable one); a natural
transformation between hom-functors not induced by a morphism (there is none —
so the correct item is the fully-faithfulness theorem, and the `cex-` slot goes
to a *non*-hom functor pair instead).

Traps. (i) #38's ordering is the classic circularity and the judge will not see
it; make the construction step precede the word "hom-set". (ii) Yoneda is
choice-free; say so, because almost everything else in the block is not.
(iii) Contravariant vs covariant Yoneda: state one, derive the other by duality,
and fix the variance convention in a `rem-`.

**Amendments (Alpha, `frontier-11` step 4, 2026-08-12; proposed by Beta-5,
approved as orchestrator decision D9).** The heading above still carries this
pair's pre-`frontier-11` order; `research/plan-spec.json` is the machine
authority and no prose renumbering is required. Recompute the order from the
spec rather than quoting one from this file.

1. **The $\operatorname{Nat}(F,G)$ false-statement item is withdrawn, and
   becomes a Remark.** The clause it stood on — that
   $\operatorname{Nat}(F,G)$ is a set for arbitrary functors between locally
   small categories — is **false as written**, so it was never an `fs-` item to
   refute; it was an error. What is true, and what §6.3(2) and the published
   `def-functor-category` actually say, is that local smallness alone does not
   make $\operatorname{Nat}(F,G)$ a set for arbitrary $F$ and $G$, whereas the
   explicit Yoneda bijection *proves* sethood when the source functor is
   representable. Write that as a Remark. **Do not assert a global
   counterexample**: its proper-class calculation is not provable from the size
   machinery this library owns, and asserting one would be a generated claim
   dressed as a theorem.
2. **Size convention for the Yoneda embedding.** Under the published convention
   of `def-functor-category`, $y : \mathcal{C}\to[\mathcal{C}^{op},\mathbf{Set}]$
   is an actual functor **when $\mathcal{C}$ is small**. For an arbitrary locally
   small $\mathcal{C}$, state the objectwise Yoneda assignment and its local
   full-faithfulness bijections directly, without silently forming a functor
   category on a large source.
3. **"Full embedding" is reserved.** The Yoneda functor is **fully faithful**.
   The published `def-embedding-of-categories` makes an embedding faithful *and
   injective on objects*, and a full embedding an embedding that is also full,
   so call the Yoneda functor a full embedding only where that extra
   object-injectivity condition actually holds. "Yoneda embedding" is retained
   as the traditional proper name.
4. **The $\mathbf{Ring}\to\mathbf{Set}$ example keeps its noncommutative-target
   proof note.** The B-page clause is correct as it stands: $\mathbb{Z}[x]$
   represents the underlying-set functor on $\mathbf{Ring}$ even though
   $\mathbf{Ring}$ has noncommutative objects, because a homomorphism out of
   $\mathbb{Z}[x]$ need only land where integer scalars are central and the
   powers of the chosen element commute with one another. Prove the evaluation
   map multiplicative directly; **do not cite the published polynomial
   universal-property theorem as though its target were arbitrary** — that
   theorem assumes a commutative target.

Forward references: NONE.

## CT-3. Limits and Colimits  (order 291, category theory)

`requires`: `universal-properties-and-the-yoneda-lemma` (289),
`cardinal-arithmetic-and-cofinality` (229)

DEFS: cone and cocone over a diagram; **limit and colimit** (#39, uniqueness up
to unique isomorphism compatible with the legs); the special cases — terminal,
product, equalizer, pullback, kernel, and duals; small-complete and
small-cocomplete; preservation, reflection and creation of limits; filtered
category and filtered colimit; final functor.

THMS: **uniqueness up to unique isomorphism** (#39, landmark — the item that
licenses $\prod$, $\varprojlim$, $\ker$ everywhere below); limits in
$\mathbf{Set}$ computed explicitly; **the limit of a diagram is the equalizer of
two maps between products** (#40, landmark), hence a category with small
products and equalizers is small-complete, with the finite version stated
separately; **Freyd's proposition**: a category with products of families as
large as its own cardinality is a preorder (landmark — the theorem that makes
"small-complete" the only sensible notion, §6.3, proved from the published
`thm-cantor-powerset`); **representables preserve limits**
($\mathcal{C}(x,\varprojlim F)\cong \varprojlim\mathcal{C}(x,F-)$, landmark —
and the item that makes $\operatorname{Hom}(M,-)$ left exact for free at AB-1,
so no elementwise proof is ever written); limits commute with limits;
the pullback of a monomorphism is a monomorphism, and **the pullback of an epi
is an epi in an abelian category** is deferred to AB-2 where the hypothesis
exists; the split form of $\varprojlim$ as a functor (§7), with the global-choice
corollary; $\mathbf{Set}$, $\mathbf{Grp}$, $\mathbf{Top}$ and
$R\text{-}\mathbf{Mod}$ are small-complete and small-cocomplete, each a numbered
item; filtered colimits in $\mathbf{Set}$ commute with finite limits.

FS: every category has all limits (Freyd's proposition is the refutation, and
that is why it is on the A page); a functor preserving products and equalizers
need not preserve all limits; the forgetful functor $\mathbf{Top}\to\mathbf{Set}$
does not preserve limits (it does; the false statement is the useful one);
colimits in $\mathbf{Grp}$ are computed on underlying sets (the coproduct is the
free product — cites the FG pages at 60–63, a lovely backward citation).

B: pullbacks in $\mathbf{Set}$ and $\mathbf{Top}$; the equalizer of two group
homomorphisms; the colimit of a chain of subobjects; products in a poset are
infima; the limit of the diagram with no objects is the terminal object.

CEX: a diagram with no limit in a category that has products; a functor
preserving monos and not pullbacks; a limit computed in a subcategory
differently from the ambient one.

Traps. (i) #40 needs $\mathcal{J}$ **small** to index the two products; the
hypothesis is not decoration. (ii) Freyd's proposition must be proved, not
cited — it is short and it is what makes the block's completeness hypotheses
honest. (iii) The "the limit is a functor" item is stated in the split form
(§7) so the block survives either resolution of CC-D5.

Forward references: NONE.

## CT-4. Adjunctions and the Adjoint Functor Theorems  (order 293, category theory)

`requires`: `limits-and-colimits` (291)

DEFS: **an adjunction as $(F,G,\eta,\varepsilon)$ with the triangle identities**
(#41; the deviation from Mac Lane/Riehl/Leinster is recorded in a `rem-` with
the size reason, §6.3); the hom-set formulation; unit, counit; reflective
subcategory; subobject, **well-powered**, (co)separating set, intersection of
subobjects; the solution set condition.

THMS: **the two definitions are equivalent under local smallness** (#41,
landmark, six discharges); the universal-arrow characterisation; **adjoints are
unique up to unique natural isomorphism**; adjunctions compose; **RAPL**
(landmark) — proved by the direct unit/counit argument, which is size-free,
with the representable proof as a second route and an agreement remark;
left adjoints preserve colimits; a right adjoint is left exact and a left
adjoint right exact; **GAFT** (landmark: $\mathcal{A}$ locally small and
small-complete, $U$ continuous, plus the solution set condition), staged through
the two lemmas — $U$ has a left adjoint iff every $s \downarrow U$ has an
initial object, and a locally small small-complete category with a jointly
weakly initial **set** has an initial object, **proved by the joint-equalizer
route so that no class-indexed choice is made** (§7); **SAFT** (landmark:
$+$ well-powered $+$ a small coseparating set); the Freyd representability
theorem; the free–forgetful adjunctions for $\mathbf{Grp}$,
$R\text{-}\mathbf{Mod}$ and $\mathbf{Vect}$ as numbered instances; the
discrete/forgetful/indiscrete triple adjunction for $\mathbf{Top}$;
the Stone–Čech adjunction FLAGGED (§9.29): include only if
`tychonoff-embedding-and-stone-cech` (new 253) supplies what it needs on an A
page; a choice-ledger remark for the page.

FS: a functor preserving all small limits has a left adjoint (the solution set
condition is not automatic — the standard witness is a large-ordinal-indexed
one and needs 225/229; **check it closes, else DROP with a note**); the unit and
counit determine the adjunction without the triangle identities; every
reflective subcategory is closed under colimits.

B: free group $\dashv$ forgetful worked; abelianisation $\dashv$ inclusion;
$-\times A \dashv (-)^A$ in $\mathbf{Set}$; the discrete-topology adjunction;
the unit and counit of free-vector-space $\dashv$ forgetful computed.

CEX: a functor with a left adjoint and no right adjoint; a continuous functor
failing the solution set condition (as above, FLAG); a "unit" that is not
natural.

Traps. (i) The definitional deviation (#41) is deliberate and must be recorded,
or a later reader will read it as an error. (ii) GAFT's standard textbook proof
makes a class-indexed choice; the repaired proof is the one to author, and the
repair must be visible in the steps. (iii) SAFT's hypotheses need subobject and
well-powered, which are minted here — they are also needed by AB-2, so they are
A-page items.

Forward references: NONE.

## CT-5. Monads and their Algebras  (order 295, category theory)

`requires`: `adjunctions-and-the-adjoint-functor-theorems` (293)

DEFS: **a monad defined directly** as $(T,\eta,\mu)$ with the unit and
associativity diagrams (#43 and §6.3(2) — the "monoid in
$[\mathcal{C},\mathcal{C}]$" reading is a Remark with a size caveat, never the
definition); comonad; $T$-algebra and the Eilenberg–Moore category; the Kleisli
category; the comparison functor; monadic functor; **split coequalizer** and
absoluteness; reflexive pair; conservative functor.

THMS: every adjunction induces a monad; the Eilenberg–Moore category carries an
adjunction inducing $T$, and it is **terminal** among such; the Kleisli category
likewise and is **initial** (both landmarks — the two universal properties are
stated, since "the" category of algebras is otherwise unlicensed);
the comparison functor is unique making the triangles commute; **a split
coequalizer is absolute** (landmark — preserved by every functor, and the engine
of the next theorem); **Beck's monadicity theorem** (landmark): $U$ is monadic
iff it has a left adjoint and creates coequalizers of $U$-split pairs, with the
expanded conservative form; **crude monadicity** (left adjoint $+$ conservative
$+$ $\mathcal{D}$ has and $U$ preserves reflexive coequalizers); limits in
$\mathcal{C}^T$ are created by the forgetful functor, and colimits are not;
$\mathbf{Grp}$, $R\text{-}\mathbf{Mod}$ and $\mathbf{CompHaus}$ are monadic over
$\mathbf{Set}$ — the last FLAGGED, since it needs `tychonoff-embedding-and-stone-cech`
and the ultrafilter monad, and drops with a note if that page does not supply it.

FS: the Kleisli and Eilenberg–Moore categories are equivalent (they are the
initial and terminal objects of the same category of adjunctions, and equal only
in degenerate cases); every functor with a left adjoint is monadic (witness:
$\mathbf{Top}\to\mathbf{Set}$, which has both adjoints and is not monadic —
because it is not conservative); a monad is a monoid object in
$[\mathcal{C},\mathcal{C}]$ **for every $\mathcal{C}$** (the size claim, §6.3).

B: the free-monoid monad on $\mathbf{Set}$ and its algebras (monoids); the
powerset monad and its algebras (complete join-semilattices) — keep only if
lattices are available from CB-3 at 173, which they are; the free-group monad;
a Kleisli composite computed.

CEX: a functor that is conservative and not monadic; an algebra for a monad that
is not free; a coequalizer not preserved by a forgetful functor.

Traps. (i) The direct definition (#43) is forced by size, not chosen for taste;
record it. (ii) Beck's theorem's proof turns entirely on absoluteness of split
coequalizers, which must therefore precede it as its own item. (iii) The
$\mathbf{CompHaus}$ example is the page's best one and its most fragile;
verify the topology track's state before committing.

Forward references: NONE.

## CT-6. Kan Extensions, Ends and Coends  (order 297, category theory)

`requires`: `monads-and-their-algebras` (295)

DEFS: dinatural transformation and the wedge; **end and coend** (for a functor
$\mathcal{C}^{op}\times\mathcal{C}\to\mathcal{D}$ with $\mathcal{C}$ **small**);
left and right Kan extension, local and global (#44); pointwise Kan extension;
density; the free cocompletion.

THMS: ends are limits over the twisted arrow category, hence exist when
$\mathcal{D}$ is small-complete; **Fubini for ends**; the natural-transformation
end formula $\operatorname{Nat}(F,G)\cong\int_c \mathcal{D}(Fc,Gc)$ — the item
that recasts CT-1's functor category and makes #36's size hypothesis visible
again; **the existence theorem for Kan extensions** (landmark, #44): for
$\mathcal{C}$ small, $\mathcal{D}$ locally small and $\mathcal{E}$
small-cocomplete, $\operatorname{Lan}_K F$ exists and is given by the
comma-category colimit formula; **a Kan extension given by the colimit formula
is pointwise** (landmark), which is the standard route to pointwise-ness and is
why the two notions are not conflated; $\operatorname{Lan}_K \dashv K^* \dashv
\operatorname{Ran}_K$ when both exist; **the density theorem** (landmark: every
presheaf on a small $\mathcal{C}$ is canonically a colimit of representables);
**$\mathbf{Set}^{\mathcal{C}^{op}}$ is the free cocompletion of a SMALL
$\mathcal{C}$** (landmark, with the smallness hypothesis named — §6.3(3) is the
reason, and the page says so); Kan extensions as coends; "all concepts are Kan
extensions": limits, colimits and adjoints exhibited as Kan extensions, each a
numbered corollary.

FS: every Kan extension is pointwise; the free cocompletion statement holds for
large $\mathcal{C}$ (§6.3(3) — refuted by a size argument if one closes from
229, else a Remark); $\operatorname{Lan}_K F \circ K \cong F$ always (it holds
when $K$ is fully faithful, and that positive statement sits beside it).

B: $\operatorname{Lan}$ along the inclusion of a full subcategory; the left Kan
extension computing a free functor; a coend computing a tensor product of
functors; the end formula checked against $\operatorname{Nat}$ for a small
example.

CEX: a Kan extension that is not pointwise; a functor category that is not
locally small (the size witness, if it closes).

Traps. (i) Every construction on this page carries a smallness hypothesis; there
are no exceptions and the page must not develop a habit of dropping them.
(ii) The free-cocompletion restriction is the block's most visible casualty and
should be stated as such in the page summary, in the non-decaying form.
(iii) If this page threatens the size cap, the ends/coends half is the part to
split off, not the Kan extensions.

Forward references: NONE.

## MD-1. Tensor Products of Modules  (order 299, abstract-algebra) — CONTINGENT

`requires`: the module block (§5, M1–M5), `abelian-categories` is NOT required
(this page is module-theoretic and sits below AB by design)

**CONTINGENT PAGE, CC-D7.** It exists only if the concurrent module scaffold
does not own $\otimes$. At splice time the orchestrator does exactly one of:
delete this page and re-point MO-1 and HA-5 at the module scaffold's page; or
keep it and instruct the module scaffold not to mint $\otimes$. Its category is
`abstract-algebra`, not the new group, precisely because it belongs to the
module block.

DEFS: $R$-balanced and $R$-bilinear maps; **$M\otimes_R N$** (well-definedness
#47) as the free abelian group on $M\times N$ modulo the balancing relations;
the simple tensor; the bimodule structure; flat module.

THMS: the **universal property** (landmark) and uniqueness up to unique
isomorphism; **the induced map from a balanced map is well defined** (#47(b–d));
**the $R$-module structure on $M\otimes_R N$ for commutative $R$ is well
defined** (#47(e)) — and it **cannot** be checked on simple tensors, which is
the classic trap; functoriality of $f\otimes g$; associativity and the unit
isomorphisms, and their **naturality** (#47(f–g)); $R\otimes_R M\cong M$;
$\otimes$ commutes with arbitrary direct sums; **the tensor–hom adjunction**
$M\otimes_S - \dashv \operatorname{Hom}_R(M,-)$ (landmark); **$\otimes$ is right
exact** — proved in two lines from RAPL (CT-4) applied to the adjunction, and
**not** by an elementwise chase; free $\Rightarrow$ projective $\Rightarrow$
flat; $\mathbb{Z}/m\otimes_{\mathbb{Z}}\mathbb{Z}/n\cong\mathbb{Z}/\gcd(m,n)$
(cites the number theory pages at 26–30).

FS: $M\otimes_R N = 0$ implies $M = 0$ or $N = 0$ (witness
$\mathbb{Z}/2\otimes\mathbb{Z}/3$); every element of $M\otimes N$ is a simple
tensor; $\otimes$ is left exact (witness: $\mathbb{Z}\xrightarrow{2}\mathbb{Z}$
tensored with $\mathbb{Z}/2$ — the canonical failure, and the reason Tor exists);
a map on simple tensors always extends.

B: $\mathbb{Z}/2\otimes\mathbb{Z}/3 = 0$; $\mathbb{Q}\otimes_{\mathbb{Z}}
\mathbb{Z}/n = 0$; the failure of left exactness worked in full; a basis of
$V\otimes_F W$ from bases of the factors (cites 74).

CEX: a bilinear map that is not balanced over a noncommutative ring; a
"well-defined" map on simple tensors that is not well defined.

Traps. (i) #47(e) is the trap; the item must go through the universal property.
(ii) Right exactness comes from RAPL — authoring an elementwise proof duplicates
a general theorem and is exactly the kind of duplication the library forbids.
(iii) If this page is deleted at splice time, MO-1 and HA-5 must be re-pointed
in the same commit.

Forward references: NONE.

## AB-1. Additive Categories and Biproducts  (order 301, category theory)

`requires`: `kan-extensions-ends-and-coends` (297),
`limits-and-colimits` (291), the module block (§5, M1–M3)

DEFS: pointed category, zero morphisms; **the biproduct, defined without any
enrichment** (#45 — the canonical map $A\sqcup B\to A\times B$ built from
identities and zero morphisms is an isomorphism); semiadditive category;
**preadditive** ($\mathbf{Ab}$-enriched, defined concretely: hom-sets are abelian
groups and composition is bilinear — #46); additive category; additive functor;
matrix notation for morphisms between biproducts.

THMS: zero morphisms exist and are unique in a category with a zero object;
**a category with finite biproducts is canonically and UNIQUELY
$\mathbf{CMon}$-enriched**, via $f+g := \nabla\circ(f\oplus g)\circ\Delta$
(landmark, #45 — addition is *free*, and this is the direction most texts get
backwards); **the converse**: an $\mathbf{Ab}$-enriched category with finite
products has biproducts (a separate theorem with different hypotheses, and both
are stated); the semiadditive-to-additive gap is real — $\mathbf{CMon}$ itself is
semiadditive and not additive, so additive inverses are an extra axiom here (they
become a theorem only at AB-2); **none of this extends to infinite
(co)products**, stated as an item; an additive functor preserves biproducts, and
conversely a functor between additive categories preserving biproducts is
additive; $\operatorname{Hom}(M,-)$ is **left exact for free**, as a corollary of
CT-3's "representables preserve limits" — no elementwise proof;
$R\text{-}\mathbf{Mod}$ and $\mathbf{Ab}$ are additive, and $\mathbf{Grp}$ and
$\mathbf{Top}$ are not, each a numbered item; the matrix calculus for morphisms
$A_1\oplus A_2 \to B_1\oplus B_2$ and its composition rule.

FS: every category with finite products and coproducts has biproducts (witness
$\mathbf{Set}$: coproduct is disjoint union, product is cartesian, and the
canonical map is not iso); a preadditive category has a zero object (it has a
zero *morphism* structure; the zero object is an extra assumption); the
enrichment of a semiadditive category can be chosen in more than one way
(uniqueness is the theorem, and this `fs-` is what makes it land).

B: biproducts in $R\text{-}\mathbf{Mod}$ and the identification $\oplus = \times$
for finitely many summands; the failure of $\oplus = \prod$ for infinitely many
(cites M3); $\mathbf{Set}$ has no biproducts; the additive structure on
$\operatorname{Hom}$ computed for $\mathbb{Z}$-modules; a preadditive category
with one object is a ring (the dictionary item, citing 46).

CEX: a category with products and coproducts and no biproducts; a functor
preserving products and not biproducts; $\mathbf{CMon}$ as semiadditive and not
additive.

Traps. (i) The direction of #45 is the page's entire point: define the biproduct
enrichment-free, then get addition. Defining preadditive first and biproducts
second makes the free-addition theorem invisible. (ii) The
infinite-(co)product caveat must be an item; it is silently false otherwise.
(iii) Left exactness of $\operatorname{Hom}$ is inherited from CT-3; do not
re-prove.

Forward references: NONE.

## AB-2. Abelian Categories  (order 303, category theory)

`requires`: `additive-categories-and-biproducts` (301)

DEFS: kernel and cokernel (as limits, citing CT-3 for uniqueness); preabelian;
**image and coimage, and the canonical map** (#48); **abelian**, axiomatised as
**AB0** (finite products and coproducts exist and coincide) $+$ **AB1** (all
kernels and cokernels) $+$ **AB2** (the canonical $\operatorname{coim}\to
\operatorname{im}$ is an isomorphism); subobject and quotient object (#49);
well-powered; the Grothendieck axioms AB3–AB5.

THMS: **AB0 $+$ AB1 imply $\mathbf{Ab}$-enrichment** (landmark, #48 — additivity
is a *theorem*: with $i = \ker(\nabla)$, both $p_1 i$ and $p_2 i$ are isomorphisms
and $p_1 i + p_2 i = 0$, giving $-\mathrm{id} := p_1 i\circ (p_2 i)^{-1}$).
**This is the page's headline and it is what stops additivity being an
unmotivated axiom**; the equivalence of AB2 with "every mono is a kernel and
every epi is a cokernel" (landmark); **abelian categories are balanced**
(mono $+$ epi $\Rightarrow$ iso); every mono is the kernel of its cokernel;
subobjects of an object form a poset (#49) with intersections;
**the pullback of an epimorphism is an epimorphism** (landmark — the single
prerequisite of AB-3's member calculus, #51, and the reason it is proved here);
$\ker$ and $\operatorname{coker}$ are functorial; an abelian category is
small-complete iff it has small products (AB3/AB4 bookkeeping);
$R\text{-}\mathbf{Mod}$ and $\mathbf{Ab}$ are abelian, and the category of
finitely generated free modules is additive and **not** abelian, each numbered;
the opposite of an abelian category is abelian (so every theorem below comes
with its dual for free — an explicit duality item).

FS: an additive category with kernels and cokernels is abelian (AB2 is the
content — witness: filtered abelian groups, or topological abelian groups, and
**if no witness closes from published material, this `fs-` DROPS with a note**,
because it is precisely the interesting one); in every category, mono $+$ epi
$\Rightarrow$ iso; the image of a morphism is its set-theoretic image (there are
no elements).

B: kernels and cokernels in $R\text{-}\mathbf{Mod}$; the canonical map for a
concrete morphism; the subobject poset of $\mathbb{Z}$ in $\mathbf{Ab}$;
$\mathbf{Ab}$ is abelian, verified axiom by axiom; the additive non-abelian
example worked.

CEX: an additive category failing AB2; a mono that is not a kernel in a
non-abelian additive category; two monos representing the same subobject.

Traps. (i) The additivity theorem must not be circular: AB0 and AB1 are stated
without any reference to addition, and the enrichment is derived. (ii) The
pullback-of-an-epi lemma is easy to omit and AB-3 dies without it. (iii)
Duality is a schema here as everywhere (CT-1); state it once and use it.

Forward references: NONE.

## AB-3. Exactness and the Diagram Lemmas  (order 305, category theory)

`requires`: `abelian-categories` (303)

**The route decision this page records** (§9.20). Freyd–Mitchell is DENIED:
its statement carries a smallness hypothesis, and Riehl's own comment on Freyd's
proof is that "most of the material presented in the preceding 150 pages appears
to be necessary". The diagram lemmas are instead proved by **Mac Lane's member
calculus** (CWM VIII.4), which is smallness-free, choice-free and constructive,
and whose stated purpose is exactly this. Wise's element-free proof is the
cross-check.

DEFS: **exactness at a node** (#50 — the canonical mono $\operatorname{im} f\to
\ker g$ must exist before "exact" can say it is an isomorphism); short exact
sequence; split SES; exact, left exact, right exact functor; **member** of an
object, and the relation $x\equiv y$ (#51).

THMS: $0\to A\to B$ exact iff $A\to B$ is mono, and the dual; **the member
relation is an equivalence relation** (#51 — transitivity is exactly where
AB-2's pullback-of-an-epi lemma is spent); **the six chasing rules** (landmark,
#51), each its own numbered lemma: mono via members; mono via cancellation of
members; epi via members; $h = 0$ via members; exactness via members; and
**rule (vi), the subtraction surrogate** — members have no subtraction, and rule
(vi) is the deliberately weakened replacement, without which the five lemma
cannot be proved; **the short five lemma** (landmark); **the five lemma** and the
sharp four lemma (landmark) — both rows must be **fully exact**, and the
hypothesis cannot be weakened to "composites are zero"; **the snake lemma**
(landmark), with the connecting morphism built arrow-theoretically (#52:
$\delta_0 = p'gk'$ factors uniquely through $\ker s'$ and $\operatorname{coker} s$,
so existence and uniqueness are free), members used only for exactness, and
**naturality of $\delta$ as a separate numbered item**; **the nine (3×3) lemma**
(landmark: columns exact and two of three rows exact force the third);
the splitting lemma (TFAE for a SES: left split, right split, biproduct);
a left exact functor preserves kernels and monos, and the dual;
$\operatorname{Hom}(A,-)$ is left exact and $\operatorname{Hom}(-,B)$ takes
colimits to limits, both cited from CT-3, not re-proved.

FS: the five lemma holds if only the composites in each row are zero; the snake
lemma's connecting map depends on the choices made in its construction (#52 is
the refutation, and it is the sharpest `fs-` in the block); every diagram lemma
requires the ambient category to be a module category (Freyd–Mitchell as a
*necessity* claim — false, and the page is the witness); a short exact sequence
of abelian groups always splits (witness $0\to\mathbb{Z}\to\mathbb{Z}\to
\mathbb{Z}/2\to 0$).

B: the snake lemma instantiated in $R\text{-}\mathbf{Mod}$ with an explicit
$\delta$; the five lemma applied; a non-split SES; the member calculus run on a
small concrete diagram; the nine lemma checked on a bicomplex of abelian groups.

CEX: a diagram satisfying four of the five lemma's five hypotheses and failing
its conclusion; a "connecting map" defined by an unjustified choice; the sharp
four lemma's hypotheses shown necessary.

Traps. (i) Rule (vi) is the page's crux; Mac Lane flags it explicitly for the
five lemma and a proof that skips it is wrong. (ii) Naturality of $\delta$ is
**required** by HA-2 and is routinely omitted; it is a numbered item here.
(iii) The five lemma also holds in $\mathbf{Grp}$ (a homological, non-abelian
category); that is a Remark, not a theorem, because homological categories are
not developed here.

Forward references: NONE.

## MO-1. Monoidal Categories, Strictness and Coherence  (order 307, category theory)

`requires`: `exact-sequences-and-the-diagram-lemmas` (305),
`limits-and-colimits` (291), `tensor-products-of-modules` (299)

DEFS: **monoidal category** $(\mathcal{C},\otimes,I,\alpha,\lambda,\rho)$ with
the **pentagon** and **triangle** axioms (#54); strict monoidal; lax, strong and
oplax monoidal functor; monoidal natural transformation; monoidal equivalence;
monoid and comonoid object.

THMS: **the Kelly redundancies are THEOREMS, not axioms** (#54): from pentagon
$+$ triangle alone, $\lambda_{x\otimes y} = (\lambda_x\otimes y)\circ\alpha$,
$\rho_{x\otimes y} = (x\otimes\rho_y)\circ\alpha$, and **$\lambda_I = \rho_I$**;
composites of monoidal functors are monoidal; **Mac Lane's strictness theorem**
(landmark: every monoidal category is monoidally equivalent to a strict one, by
the Joyal–Street clique construction — objects are contractible groupoids of
bracketings); **Mac Lane's coherence theorem as a half-page COROLLARY of
strictness** (landmark, #53) — transport the diagram along the equivalence, get
a prism whose other faces commute; stated correctly as **"every diagram in the
free monoidal category on a set of generators commutes"**, since Mac Lane
himself warns the slogan "every diagram commutes" is false as stated; the
$n$-fold tensor product and unbracketed strings are **licensed by coherence and
by nothing else** (#53); strictness gives an **equivalence, not an isomorphism**,
and one cannot always have skeletal and strict simultaneously (both stated as
Remarks with the reasons); $\operatorname{End}(I)$ is a commutative monoid, by
CT-1's Eckmann–Hilton item; $(\mathbf{Set},\times,1)$,
$(\mathbf{Ab},\otimes_{\mathbb{Z}},\mathbb{Z})$,
$(R\text{-}\mathbf{Mod},\otimes_R,R)$ for commutative $R$,
$(\mathbf{Vect}_F,\otimes_F,F)$ and $([\mathcal{C},\mathcal{C}],\circ,\mathrm{Id})$
for **small** $\mathcal{C}$ are monoidal — each numbered, and the last with the
size caveat that makes CT-5's direct definition of a monad necessary;
a monoid object in $(\mathbf{Ab},\otimes)$ is a ring (the dictionary item,
citing 46).

FS: every diagram in a monoidal category commutes (Mac Lane's own warning, made
into the page's sharpest `fs-`); the pentagon axiom follows from the triangle
axiom; a monoidal category is monoidally *isomorphic* to a strict one; a monad
is a monoid object in the endofunctor category for every $\mathcal{C}$ (the size
claim again, §6.3(2)).

B: $(\mathbf{Set},\times)$ and $(\mathbf{Set},\sqcup)$ both monoidal on the same
category; the pentagon drawn out for four objects; a monoid object in
$\mathbf{Top}$ (a topological monoid); the strictification of a small monoidal
category described concretely; $\operatorname{End}(I)$ computed for
$R\text{-}\mathbf{Mod}$.

CEX: two monoidal structures on one category that are not equivalent; a lax
monoidal functor that is not strong; a "coherence" diagram in a specific
monoidal category that fails because its vertices are accidentally equal (Mac
Lane's own caution, made concrete).

Traps. (i) The **strictness $\to$ coherence** order is the cheap one and is the
recommendation; Mac Lane's direct six-page combinatorial proof is not.
(ii) #53 is a huge fan-in edge: every later unbracketed tensor string depends on
coherence, and the dependency must be declared, not assumed. (iii) The
$[\mathcal{C},\mathcal{C}]$ example must carry its size hypothesis, or it
contradicts CT-5.

Forward references: NONE.

## MO-2. Braided, Symmetric, Closed and Enriched Categories  (order 309, category theory)

`requires`: `monoidal-categories-strictness-and-coherence` (307),
`adjunctions-and-the-adjoint-functor-theorems` (293)

DEFS: braiding and the **two hexagon axioms**; braided monoidal category;
symmetric monoidal category; closed monoidal category (an adjunction
$-\otimes x\dashv [x,-]$); **a category enriched over a monoidal $\mathcal{V}$**
(#55); $\mathcal{V}$-functor and $\mathcal{V}$-natural transformation.

THMS: in the **symmetric** case one hexagon implies the other, and in the braided
case it does not (landmark — the exact statement of what symmetry buys);
$c_{I,x} = c_{x,I}$ and the compatibility of the braiding with the unit
constraints; a symmetric monoidal category's $n$-fold products are permutable;
**closed monoidal implies $-\otimes x$ preserves colimits** (RAPL from CT-4, a
one-line corollary and a good demonstration of the block paying for itself);
$\mathbf{Set}$, $\mathbf{Ab}$, $R\text{-}\mathbf{Mod}$ and $\mathbf{Vect}$ are
symmetric monoidal closed, each numbered; **the dictionary theorem: a preadditive
category is exactly an $\mathbf{Ab}$-enriched category** (#55, landmark — a
backward citation to AB-1 that closes the loop the block opened, and the reason
AB-1 could define preadditive concretely without a forward reference);
a $\mathbf{Set}$-enriched category is an ordinary locally small category;
a one-object $\mathcal{V}$-category is a monoid in $\mathcal{V}$;
**Eckmann–Hilton applied**: a monoid object in $\mathbf{Mon}$ is a commutative
monoid, and the interchange law in a $2$-category (both citing CT-1's item);
**braided and symmetric coherence are DENIED** in the "every diagram commutes"
form (§9.38); the true restricted statement is quoted in a Remark and nothing
depends on it.

FS: every braided monoidal category is symmetric (witness: the braid category,
or a category of $G$-graded vector spaces with a nontrivial braiding — **check a
witness closes from available material; else this `fs-` becomes a Remark**);
one hexagon suffices in the braided case; every monoidal category is closed
(witness $\mathbf{Ab}$ with $\otimes$? no — $\mathbf{Ab}$ *is* closed; the honest
witness is a monoidal category whose tensor fails to preserve colimits, and the
`fs-` is stated in that form).

B: the symmetry of $\otimes$ on $\mathbf{Vect}$ written out; the internal hom of
$\mathbf{Ab}$; an $\mathbf{Ab}$-enriched category that is a ring (one object);
a $2$-category as a $\mathbf{Cat}$-enriched category; the braid group's relations
as the hexagons instantiated.

CEX: a braided non-symmetric structure; a monoidal category that is not closed;
an enrichment that does not come from an ordinary category.

Traps. (i) The enriched definition needs **coherence** (MO-1) to write its
diagrams unambiguously; declare the dependency. (ii) The AB-1 dictionary is the
whole reason MO-2 sits above AB-1; do not move it. (iii) Denial 38 must be
respected: the page states the hexagons and proves only what it needs.

Forward references: NONE.

## HA-1. Chain Complexes, Homology and Chain Homotopy  (order 311, category theory)

`requires`: `exact-sequences-and-the-diagram-lemmas` (305), the module block
(§5, M1–M5)

DEFS: chain and cochain complex in an abelian category $\mathcal{A}$; chain map;
**$\operatorname{Ch}(\mathcal{A})$**; cycles, boundaries, **homology $H_n$**
(well-definedness #56); quasi-isomorphism; **chain homotopy** and the homotopy
category $K(\mathcal{A})$ (#57); the mapping cone and cylinder; the shift
$C[n]$; a bounded/bounded-below/bounded-above complex.

THMS: $\operatorname{Ch}(\mathcal{A})$ is abelian, with kernels and cokernels
degreewise (landmark); **$\operatorname{im} d_{n+1}$ is a subobject of
$\ker d_n$** (#56 — $d^2 = 0$ makes $d_{n+1}$ factor through $\ker d_n$, then
mono cancellation puts $\operatorname{im}$ inside it), so $H_n$ is defined, and
**$H_n$ is a functor** (a second, separate item); chain homotopy is an
equivalence relation compatible with composition (#57), so $K(\mathcal{A})$
exists; **homotopic chain maps induce equal maps on homology** (landmark) —
the fact that makes everything downstream possible; a chain homotopy equivalence
is a quasi-isomorphism, and the converse fails; the mapping cone's long exact
sequence relation to the shift; **an additive functor preserves chain
homotopies** (landmark — this is where additivity is spent, and HA-4's
well-definedness rests on it); an exact functor commutes with $H_n$;
$H_n$ of a complex of $R$-modules computed as a quotient module (the dictionary
instantiation, on the A page because HA-5 needs it).

FS: a quasi-isomorphism is a chain homotopy equivalence (the canonical failure
witness in $\mathbf{Ab}$, which must be exhibited); homology commutes with every
additive functor; a complex with zero homology is exact iff it is contractible
(again false without projectivity hypotheses); $H_n$ of a direct product is the
product of the $H_n$ (true for $\oplus$ in $R\text{-}\mathbf{Mod}$ and the
distinction is the point).

B: the complex $\cdots\to\mathbb{Z}\xrightarrow{2}\mathbb{Z}\to\cdots$ and its
homology; a contractible complex; two homotopic chain maps; the mapping cone of
the identity; a quasi-isomorphism that is not a homotopy equivalence.

CEX: the standard non-split quasi-isomorphism; a non-additive functor destroying
homotopies; a complex where $\operatorname{im}\ne\ker$ measured explicitly.

Traps. (i) #56 is the page's foundation and is a three-step construction, not an
observation. (ii) $\oplus$ vs $\prod$ for infinite families (module item M3) is
a real distinction here. (iii) Everything on this page is stated for a general
abelian category; the module instantiations are separate, numbered, and are what
HA-5 cites.

Forward references: NONE.

## HA-2. Long Exact Sequences and Mapping Cones  (order 313, category theory)

`requires`: `chain-complexes-and-homology` (311)

DEFS: a short exact sequence of complexes; the connecting homomorphism in
degree $n$; the long exact sequence; a homomorphism of long exact sequences.

THMS: **the long exact sequence of a short exact sequence of complexes**
(landmark) — obtained **directly from AB-3's snake lemma applied degreewise**,
with the connecting map inherited (no second construction, no second
well-definedness argument: this is the payoff of AB-3 #52); **naturality of the
long exact sequence** (landmark), which needs AB-3's naturality-of-$\delta$
item and is the reason that item exists; the five lemma applied to give: a map
of short exact sequences inducing isomorphisms on two of three terms' homology
induces one on the third; the mapping cone sequence and the identification of
its connecting map; a SES of complexes that splits degreewise still need not
split as complexes (the item that motivates the horseshoe lemma at HA-3);
Euler characteristic additivity for bounded complexes of finite-length modules,
if the length function is available — **FLAG: verify the module block supplies
composition series/length; if not, drop with a note**.

FS: the long exact sequence exists for any sequence of complexes that is exact
in each degree at the ends only; the connecting homomorphism is natural without
hypotheses on the maps (it is natural, and the false version omits the
commutativity of the map of short exact sequences); a degreewise split SES of
complexes is split.

B: the LES of $0\to\mathbb{Z}\xrightarrow{n}\mathbb{Z}\to\mathbb{Z}/n\to 0$
viewed as complexes; the mapping cone LES computed; a naturality square checked;
the five-lemma corollary applied.

CEX: a SES of complexes that is degreewise split and not split; a connecting map
that fails to commute with a non-commuting map of sequences.

Traps. (i) **Do not re-derive $\delta$.** Everything here is AB-3 applied; the
value of this page is that it is short because AB-3 did the work.
(ii) Naturality is the load-bearing half and the one textbooks skip.

Forward references: NONE.

## HA-3. Projective and Injective Objects and Resolutions  (order 315, category theory)

`requires`: `long-exact-sequences-and-mapping-cones` (313), the module block
(§5, M1–M4), `tensor-products-of-modules` (299),
`order-zorn-and-the-axiom-of-choice` (10)

DEFS: projective and injective object in an abelian category; enough projectives
/ enough injectives (an **extra hypothesis**, never automatic); projective and
injective resolution (#58); the length of a resolution; divisible abelian group;
flat module.

THMS: four equivalent characterisations of a projective module (lifting
property; every SES ending in it splits; direct summand of a free module; the
functor $\operatorname{Hom}(P,-)$ is exact) — landmark, and the exactness clause
is a corollary of AB-3, not a new argument; free $\Rightarrow$ projective;
**$R\text{-}\mathbf{Mod}$ has enough projectives** (landmark, and essentially
**choice-free**: every module is a quotient of the free module on its underlying
set); **Baer's criterion** (landmark, **AC via Zorn**, named in the Statement,
§7); divisible $\iff$ injective in $\mathbf{Ab}$ (AC); **$R\text{-}\mathbf{Mod}$
has enough injectives** (landmark, **AC**): embed into a divisible group, then
coinduce along $\operatorname{Hom}_{\mathbb{Z}}(R,-)$, which is right adjoint to
an exact restriction and therefore preserves injectives — the adjointness
argument citing CT-4, not an elementwise construction; **existence of
resolutions** (#58, by recursion, **DC**); **the comparison theorem** (landmark):
a map of objects lifts to a map of resolutions, uniquely up to chain homotopy —
existence and uniqueness are two numbered items; **the horseshoe lemma**
(landmark); projective $\Rightarrow$ flat; a choice-ledger remark for the page,
recording the asymmetry: **enough projectives is free, enough injectives costs
AC**, so the entire right-derived branch below carries a choice cost the left
branch does not.

FS: every module is projective (witness $\mathbb{Z}/2$ over $\mathbb{Z}$); a
projective module is free (witness: a non-principal ideal of a Dedekind domain
— **FLAG: needs the ring pages to supply one; if none is available at an A-page,
substitute $\mathbb{Z}/2$ over $\mathbb{Z}/6$ and record the substitution**);
$\mathbb{Z}$ is an injective $\mathbb{Z}$-module; enough injectives is automatic
in any abelian category.

B: a projective resolution of $\mathbb{Z}/n$ over $\mathbb{Z}$ (length 1); an
injective resolution of $\mathbb{Z}$ over $\mathbb{Z}$ ($\mathbb{Q}\to
\mathbb{Q}/\mathbb{Z}$); a free resolution of a module over $k[x]$; the
comparison theorem run on a concrete lift; the horseshoe applied.

CEX: a non-projective module; a non-injective module; two resolutions of one
module that are not isomorphic but are homotopy equivalent (the item that makes
the comparison theorem's "up to homotopy" sharp).

Traps. (i) The AC cost of Baer and of enough injectives goes in the Statement.
(ii) The coinduction argument is an adjointness argument; authoring it
elementwise duplicates CT-4. (iii) The comparison theorem's uniqueness clause is
what HA-4 depends on; existence alone is not enough.

Forward references: NONE.

## HA-4. Derived Functors  (order 317, category theory)

`requires`: `projective-and-injective-resolutions` (315)

DEFS: **$L_nF$ and $R^nF$** for an additive functor (well-definedness #59, seven
discharges); acyclic object for $F$; a $\delta$-functor (homological and
cohomological); universal and effaceable $\delta$-functor.

THMS: **$L_nF(A)$ is independent of the resolution** (landmark, #59) — via the
comparison theorem, HA-3's homotopy uniqueness, and HA-1's "additive functors
preserve chain homotopies"; **$L_nF$ is a functor** (a separate item, since
independence on objects is not functoriality); $L_0F\cong F$ when $F$ is right
exact, and $R^0F\cong F$ when $F$ is left exact; $L_nF(P) = 0$ for $n>0$ and $P$
projective; **the long exact sequence of derived functors** attached to a SES
(landmark), from the horseshoe lemma and HA-2; naturality of that sequence;
$L_nF$ may be computed from any $F$-acyclic resolution (landmark — the theorem
that makes derived functors usable); **$\{L_nF\}$ is a universal $\delta$-functor**
(landmark; Grothendieck's effaceability criterion), which is the abstract
characterisation and the cleanest uniqueness statement available;
$F$ exact $\Rightarrow$ $L_nF = 0$ for $n>0$; the split form of the definition
(the resolution supplied as data) is stated first and the global-choice
corollary second (§7).

FS: $L_nF$ depends on the resolution chosen; $L_0F\cong F$ for every additive
$F$ (right exactness is the hypothesis); a functor with vanishing higher derived
functors is exact (it is, for right-exact $F$ — so the honest `fs-` is the
version without the right-exactness hypothesis); derived functors of a
contravariant functor are computed with projective resolutions in the same
variable (variance bookkeeping, and it is the most common student error, so it
earns its place).

B: $L_n$ of a right-exact functor computed on a length-1 resolution;
$R^n\operatorname{Hom}(A,-)$ set up; the long exact sequence of derived functors
written out for a concrete SES; an $F$-acyclic resolution used in place of a
projective one.

CEX: a functor that is additive and not exact, with nonvanishing $L_1$; two
resolutions giving the same $L_n$ concretely; a $\delta$-functor that is not
universal.

Traps. (i) #59's seven discharges are all required; the one most often dropped
is (d), that additive functors preserve chain homotopies. (ii) Variance: state
the four cases (covariant/contravariant × left/right) once in a `rem-` and cite
it. (iii) The universal-$\delta$-functor characterisation is worth the pages; it
is the only statement that makes "the" derived functor a definite description.

Forward references: NONE.

## HA-5. Ext and Tor  (order 319, category theory)

`requires`: `derived-functors` (317), `tensor-products-of-modules` (299),
`euclidean-domains-pids-and-unique-factorisation` (50)

DEFS: $\operatorname{Ext}^n_R(A,B)$ by a projective resolution of $A$;
$\operatorname{Ext}^n_R(A,B)$ by an injective resolution of $B$;
**$\operatorname{Tor}^R_n(M,N)$** (which exists only because a tensor product
does — §5.2, and the reason this page names the module block explicitly);
the Baer sum on $\operatorname{Ext}^1$; projective, injective and global
dimension.

THMS: **the balancing theorem for $\operatorname{Ext}$** (landmark, #60), proved
by the double complex $\operatorname{Hom}(P_\bullet, I^\bullet)$ with an
acyclic-resolution argument, **before spectral sequences exist** — Weibel's
ordering, adopted deliberately to foreclose the circularity with HA-6's
extension problem; $\operatorname{Ext}^0 = \operatorname{Hom}$;
$\operatorname{Ext}^n(A,B) = 0$ for $n>0$ when $A$ is projective or $B$
injective; the two long exact sequences of $\operatorname{Ext}$;
**$\operatorname{Ext}^1$ classifies extensions**, with the **Baer sum well
defined** (its own numbered item) and the bijection with equivalence classes of
extensions (landmark — stated for module categories, where well-poweredness is
available, §9.31); **$\operatorname{Tor}$ is balanced**; $\operatorname{Tor}_0 =
\otimes$; **$M$ is flat iff $\operatorname{Tor}_1(M,-) = 0$** (landmark);
$\operatorname{Tor}_1^{\mathbb{Z}}(A,\mathbb{Z}/n)\cong A[n]$, so
$\operatorname{Tor}$ measures torsion (the name is earned, not asserted);
$\operatorname{Tor}_n^R(M,N)\cong\operatorname{Tor}_n^R(N,M)$ for commutative
$R$ — **from balancing and the symmetry of $\otimes_R$; do NOT take the
PID-only argument as the general one, and verify against Weibel §2.7/§3.1
before authoring**; **the algebraic universal coefficient theorem** (landmark:
$R$ a **PID**, $C_\bullet$ a complex of **free** modules — both hypotheses in
the Statement — with the splitting **non-canonical and not natural**, which is
itself a numbered remark); **the algebraic Künneth theorem** (landmark; PID,
freeness, and finite type for the cohomology version); global dimension and
$\operatorname{Ext}$ vanishing; **group cohomology** FLAGGED (§9.25): if the
module block supplies $\mathbb{Z}[G]$ (item M8), $H^*(G;M) =
\operatorname{Ext}^*_{\mathbb{Z}G}(\mathbb{Z},M)$ with $H^0$, $H^1$ as crossed
homomorphisms and $H^2$ as extensions goes on the B page; otherwise dropped with
a note.

FS: $\operatorname{Ext}^1(A,B) = 0$ implies every extension is trivial **and
conversely for every abelian category** (the classification needs
well-poweredness); $\operatorname{Tor}$ can be defined in any abelian category
(§5.2 — the sharpest structural `fs-` in the block); the universal coefficient
sequence splits naturally; $\operatorname{Tor}_n(M,N)\cong
\operatorname{Tor}_n(N,M)$ over a noncommutative ring.

B: $\operatorname{Ext}^1_{\mathbb{Z}}(\mathbb{Z}/m,\mathbb{Z}/n)\cong
\mathbb{Z}/\gcd(m,n)$ and the extensions it classifies;
$\operatorname{Tor}_1^{\mathbb{Z}}(\mathbb{Z}/m,\mathbb{Z}/n)$; a Baer sum
computed; UCT applied to a small complex; $\operatorname{Ext}$ over $k[x]$.

CEX: a non-split extension realising a nonzero $\operatorname{Ext}^1$ class; a
non-natural splitting in UCT; a flat module that is not projective
(**FLAG: $\mathbb{Q}$ over $\mathbb{Z}$ works and needs nothing special**).

Traps. (i) The Weibel ordering (balancing before spectral sequences) is a
**structural** decision: reversing it creates a circularity that no gate in this
library would catch. (ii) The PID and freeness hypotheses of UCT/Künneth are
load-bearing; over a general ring both statements are false and are replaced by
spectral sequences. (iii) The $\operatorname{Tor}$-symmetry statement must not be
sourced from the PID-specific argument.

Forward references: NONE.

## HA-6. Spectral Sequences  (order 321, category theory)

`requires`: `ext-and-tor` (319)

DEFS: a filtered complex, exhaustive / Hausdorff / complete filtration; the
associated graded; **a spectral sequence**, with the isomorphisms
$\alpha_r : H(E_r)\to E_{r+1}$ given as **data, not as a property** (this is a
common sloppiness and it is fixed here); bounded, first-quadrant,
third-quadrant; weak, ordinary and strong convergence (#62); double complex,
total complex, the two canonical filtrations; exact couple.

THMS: the spectral sequence of a filtered complex exists;
**boundedness implies stabilisation** (landmark, #62): if each total degree has
finitely many nonzero terms then for large $r$ both the incoming and outgoing
differentials vanish and $E_{r+1}\cong E_r$ — an **elementary and constructive**
argument needing no choice and no extra hypothesis, and worth saying so;
first- and third-quadrant spectral sequences are bounded; exhaustive $+$
Hausdorff gives $E_\infty^{p,q}\cong \operatorname{gr}_p H_{p+q}$ (#62 — and the
filtration conditions are needed **only** to recover the abutment, not for
stabilisation, which is a distinction most treatments blur); the two spectral
sequences of a double complex; the **five-term exact sequence**; **the extension
problem**: $E_\infty$ determines $H$ only up to extensions, it splits
automatically over a field, and generally needs $\operatorname{Ext}^1$
vanishing — **citing HA-5, which is below, exactly as the ordering was chosen to
allow**; exact couples and their derived couples, as the alternative primitive;
the **Grothendieck spectral sequence** FLAGGED: include only if the page stays
under the cap, since it needs $F$-acyclics from HA-4 and Cartan–Eilenberg
resolutions are denied (§9.24); the LES of HA-2 recovered from a two-column
spectral sequence, as the sanity-check item.

FS: a spectral sequence determines its abutment (the extension problem is the
refutation and it is the page's whole moral); convergence follows from
stabilisation alone; every spectral sequence degenerates at some finite page;
the two spectral sequences of a double complex have the same $E_2$.

B: a first-quadrant spectral sequence with a two-column $E_2$, worked to
$E_\infty$; the five-term sequence extracted; a double complex whose two
filtrations give different $E_2$ and the same abutment; an extension problem
with two non-isomorphic solutions.

CEX: two complexes with the same $E_\infty$ and non-isomorphic homology; a
non-bounded spectral sequence that does not stabilise; a filtration that is
exhaustive and not Hausdorff.

Traps. (i) Stabilisation and convergence are **different theorems with different
hypotheses**; conflating them is the standard error and this page exists partly
to separate them. (ii) The extension problem cites $\operatorname{Ext}^1$ from
HA-5; that is legal only because balancing was proved by Weibel's route at 319
(§9, denial 24 and HA-5's traps). (iii) $\alpha_r$ as data, not property.

Forward references: NONE.

---

# 12. Index groups, and the one code change this track needs (CC-D6)

**Combinatorics and graph theory: no code change.** They are homed in the
existing `combinatorics` group. `library/combinatorics/_category.md` is already
on disk (`status: draft`), and `combinatorics` already has a registered rose
accent in `web/lib/library-categories.ts`. The group grows to **22 A-pages**,
which is in line with `abstract-algebra` (19 A-pages) and below `topology` (30).
A separate `graph-theory` group is the alternative and is NOT recommended: it
would need a second hue for no mathematical reason, and the owner commissioned
"combinatorics and graph theory" as one block.

**Category theory, abelian/monoidal categories and homological algebra: ONE new
index group, and it needs an owner decision plus a small code change.**

- Proposed slug **`category-theory`**, title **"Category Theory and Homological
  Algebra"**, 18 A-pages (CT-1…6, MD-1 is homed in `abstract-algebra`,
  AB-1…3, MO-1…2, HA-1…6).
- New file `library/category-theory/_category.md`, matching the existing
  one-name-one-title-one-status shape. That is content and needs no decision.
- **One 6-line addition to the `STYLES` map in `web/lib/library-categories.ts`.**
  The presentation is FROZEN and this file does not choose the hue. The
  constraints, from CLAUDE.md and the existing map: **sky and fuchsia are
  reserved** (forward references and the ‡ tier), and indigo, emerald, violet,
  teal, orange and rose are taken by the six existing groups. Candidates that
  remain distinguishable in both themes: **amber**, **cyan**, **blue**. The
  owner picks. Without a `STYLES` entry the group still renders — the map has a
  neutral `FALLBACK` — but it would be the only grey group on the index, which
  is a presentation regression, so this is not a "do nothing" option.
- Splitting into two groups (`category-theory` and `homological-algebra`) is the
  alternative; it costs a second hue from a shrinking palette and gains a
  9-page group. Not recommended.

**Nothing else in either repo changes.** No renderer change, no restyle, no
frontmatter contract change. Per CLAUDE.md the normative docs are updated in the
same commit as the change they describe, so the splice commit carries the
`STYLES` addition, the `_category.md`, and the `plan-spec.json` renumber
together.

---

# 13. The page inventory

Orders are post-splice (§4.4). "Items" is the scaffolder's target, not a
commitment; `validate-plan.mjs` warns above 30. Every A page has an
`-examples` B companion at order $+1$ with the item count in the second column.

| order | id | title | category | A / B items |
|---|---|---|---|---|
| 20/21 | `finite-counting-and-binomial-coefficients` | Finite Counting, Factorials and Binomial Coefficients | combinatorics | 24 / 12 |
| 22/23 | `inclusion-exclusion-and-the-pigeonhole-principle` | Inclusion–Exclusion, the Pigeonhole Principle and Double Counting | combinatorics | 20 / 14 |
| 173/174 | `chains-antichains-sperner-and-dilworth` | Chains, Antichains, Sperner and Dilworth | combinatorics | 22 / 13 |
| 175/176 | `formal-power-series` | Formal Power Series | combinatorics | 24 / 12 |
| 195/196 | `linear-recurrences-and-rational-generating-functions` | Linear Recurrences and Rational Generating Functions | combinatorics | 32 / 15 — **scaffolded, `frontier-13` batch 7** |
| 179/180 | `lattice-paths-and-catalan-numbers` | Lattice Paths and Catalan Numbers | combinatorics | 19 / 12 |
| 181/182 | `set-partitions-stirling-numbers-and-exponential-generating-functions` | Set Partitions, Stirling Numbers and Exponential Generating Functions | combinatorics | 21 / 13 |
| 183/184 | `integer-partitions-and-the-twelvefold-way` | Integer Partitions and the Twelvefold Way | combinatorics | 22 / 15 |
| 185/186 | `incidence-algebras-and-mobius-inversion` | Incidence Algebras and Möbius Inversion | combinatorics | 19 / 12 |
| 187/188 | `counting-up-to-symmetry-burnside-and-polya` | Counting up to Symmetry: Burnside and Pólya | combinatorics | 18 / 12 |
| 189/190 | `graphs-walks-and-connectivity` | Graphs, Walks and Connectivity | combinatorics | 25 / 14 |
| 191/192 | `trees-forests-and-spanning-trees` | Trees, Forests and Spanning Trees | combinatorics | 20 / 12 |
| 193/194 | `eulerian-and-hamiltonian-graphs` | Eulerian Circuits, Hamiltonian Cycles and Tournaments | combinatorics | 18 / 12 |
| 195/196 | `matchings-covers-menger-and-network-flows` | Matchings, Covers, Menger and Network Flows | combinatorics | 26 / 14 |
| 197/198 | `graph-colouring` | Graph Colouring | combinatorics | 23 / 13 |
| 199/200 | `ramsey-theory` | Ramsey Theory | combinatorics | 22 / 12 |
| 201/202 | `extremal-graph-theory` | Extremal Graph Theory | combinatorics | 18 / 11 |
| 203/204 | `finite-probability-and-the-probabilistic-method` | Finite Probability and the Probabilistic Method | combinatorics | 23 / 13 |
| 205/206 | `linear-algebra-methods-in-combinatorics` | Linear Algebra Methods in Combinatorics | combinatorics | 19 / 12 |
| 207/208 | `block-designs-and-finite-projective-planes` | Block Designs and Finite Projective Planes | combinatorics | 21 / 13 |
| 209/210 | `algebraic-and-spectral-graph-theory` | Algebraic and Spectral Graph Theory | combinatorics | 24 / 13 |
| 285/286 | `plane-graphs-euler-and-the-five-colour-theorem` | Plane Graphs, Euler's Formula and the Five Colour Theorem | combinatorics | 26 / 14 |
| 287/288 | `categories-functors-and-natural-transformations` | Categories, Functors and Natural Transformations | **category-theory (NEW)** | 27 / 15 |
| 289/290 | `universal-properties-and-the-yoneda-lemma` | Universal Properties, Representables and the Yoneda Lemma | category-theory | 17 / 11 |
| 291/292 | `limits-and-colimits` | Limits and Colimits | category-theory | 24 / 14 |
| 293/294 | `adjunctions-and-the-adjoint-functor-theorems` | Adjunctions and the Adjoint Functor Theorems | category-theory | 23 / 13 |
| 295/296 | `monads-and-their-algebras` | Monads and their Algebras | category-theory | 20 / 12 |
| 297/298 | `kan-extensions-ends-and-coends` | Kan Extensions, Ends and Coends | category-theory | 20 / 11 |
| 299/300 | `tensor-products-of-modules` | Tensor Products of Modules **(CONTINGENT, CC-D7)** | abstract-algebra | 19 / 12 |
| 301/302 | `additive-categories-and-biproducts` | Additive Categories and Biproducts | category-theory | 20 / 12 |
| 303/304 | `abelian-categories` | Abelian Categories | category-theory | 21 / 12 |
| 305/306 | `exact-sequences-and-the-diagram-lemmas` | Exactness and the Diagram Lemmas | category-theory | 25 / 13 |
| 307/308 | `monoidal-categories-strictness-and-coherence` | Monoidal Categories, Strictness and Coherence | category-theory | 22 / 13 |
| 309/310 | `braided-symmetric-and-enriched-categories` | Braided, Symmetric, Closed and Enriched Categories | category-theory | 19 / 12 |
| 311/312 | `chain-complexes-and-homology` | Chain Complexes, Homology and Chain Homotopy | category-theory | 20 / 12 |
| 313/314 | `long-exact-sequences-and-mapping-cones` | Long Exact Sequences and Mapping Cones | category-theory | 14 / 10 |
| 315/316 | `projective-and-injective-resolutions` | Projective and Injective Objects and Resolutions | category-theory | 22 / 13 |
| 317/318 | `derived-functors` | Derived Functors | category-theory | 20 / 12 |
| 319/320 | `ext-and-tor` | Ext and Tor | category-theory | 25 / 14 |
| 321/322 | `spectral-sequences` | Spectral Sequences | category-theory | 20 / 12 |

**40 A-pages, 40 B companions, 80 pages; roughly 850 A-items and 500 B-items.**
Two pages are at the top of the size band and are the first candidates to split
if `validate-plan.mjs` complains: `categories-functors-and-natural-transformations`
(27) and `matchings-covers-menger-and-network-flows` / `plane-graphs-euler-and-the-five-colour-theorem`
(26 each). `long-exact-sequences-and-mapping-cones` is deliberately the smallest
page in the file — it is short precisely because AB-3 did its work.

---

# 14. Build-frontier note (order is not build order)

Computed from publication state on disk, 2026-07-28. Published pages: orders
6–19 in full, plus `metric-spaces`, `completeness-and-uniform-continuity`,
`compactness-in-metric-spaces`, `monoids-groups-and-subgroups`,
`rings-subrings-and-integral-domains`, `divisibility-gcd-and-bezout`,
`primes-and-the-fundamental-theorem-of-arithmetic`, `vector-spaces-and-subspaces`,
`linear-independence-bases-and-dimension`, `ordinals-and-transfinite-recursion`,
`topological-spaces-and-continuity`, `subspaces-products-and-quotients` and the
analysis spine through `continuity-ivt-evt-and-uniform-continuity`.

**Buildable today, with every prerequisite published:**

- **CB-1 (20) and CB-2 (22).** `countability-and-uncountability` (18) and
  `roots-and-rational-powers` (16) are published, and nothing else is needed.
  These two pages are the whole of phase 1 (§4.5), they discharge a recorded
  obligation that two other scaffolds are waiting on, and they are the highest
  value-per-page in this file. **Recommend building them first, independently of
  every other decision in this document**, including CC-D5 and CC-D8.

**Blocked, and on what:**

| pages | blocked on |
|---|---|
| CB-3 (173) | nothing but its own order — its `requires` are CB-2 and the published order-10 poset material. It could be built immediately after phase 1 if the owner wants a second cheap win |
| CB-4 … CB-6 (175–180) | `polynomial-rings-and-roots` (52) and `euclidean-domains-pids-and-unique-factorisation` (50), both **unbuilt** (0 items in the spec) — the algebra track's own frontier |
| CB-7, CB-8 (181–184) | CB-4 only |
| CB-9 (185) | `rings-subrings-and-integral-domains` (published) and the number theory pages at 26–30, of which `congruences-and-the-chinese-remainder-theorem` is **unbuilt** |
| CB-10 (187) | `group-actions-and-cayleys-theorem` (42) and `symmetric-groups-and-the-sign-homomorphism` (44), both unbuilt; plus the multivariate polynomial ring question of §10 amendment 5 |
| GT-1 … GT-3 (189–194) | CB-2 and CB-3 only. **The three cheapest graph pages in the file**; after phase 1 they need nothing else |
| GT-4, GT-5 (195–198) | GT-3, plus the published `filters-and-ultrafilters` — so also cheap |
| CB-11, GT-6 (199–202) | GT-5 |
| CB-12 (203) | `the-exponential-function` (157) and `the-logarithm-and-general-powers` (159), both unbuilt |
| CB-13, CB-14 (205–208) | `inner-product-spaces-and-orthogonality` (94), `gaussian-elimination-and-row-reduction` (80), `algebraic-extensions-degree-and-finite-fields` (96) — the linear algebra band, unbuilt |
| GT-7 (209) | `the-spectral-theorem-and-singular-value-decomposition` (131), unbuilt, which itself waits on the FTA at 129 |
| GT-8 (285) | `the-topology-of-euclidean-space` (239), unbuilt, which waits on `connectedness`, `compactness` and `rn-as-a-normed-space` |
| CT-1 … CT-6 (287–298) | `subspaces-products-and-quotients` (published) and the **module block**, which does not exist yet. CT-1 needs modules only for examples; if the module block slips, CT-1 can be built with $\mathbf{Grp}$, $\mathbf{Ring}$, $\mathbf{Vect}$ and $\mathbf{Top}$ and the $R\text{-}\mathbf{Mod}$ items added later — **but that is a retrofit, which this library does not do to published pages**, so it is better to wait |
| MD-1 (299) | the module block, and CC-D7 |
| AB-1 … AB-3 (301–306) | CT-6 and the module block |
| MO-1, MO-2 (307–310) | AB-3, MD-1 or its replacement |
| HA-1 … HA-6 (311–322) | AB-3, the module block, MD-1; and HA-3 onwards additionally on CC-D5, since the split-vs-choice form of every "the derived functor" statement depends on it |

**The critical path is the module block.** Eighteen of the forty A-pages here
cannot start until it exists, and the tensor-product question (§5, M6) must be
answered before any of them is scaffolded.

**Nothing in this file changes the current level-10 build**, and nothing in it
touches `items/`, `library/` or `plan-spec.json`.

---

# 15. Sources

Consulted 2026-07-28. Layering, not prose, was extracted from each.

**Combinatorics.**
Stanley, *Enumerative Combinatorics* vol. 1 — §1.7 multiset permutations, §1.8
partition identities, §1.9 the twelvefold way, the ordering this file follows.
Stanley, *Algebraic Combinatorics*, <https://math.mit.edu/~rstan/algcomb/algcomb.pdf>
— the source of the observation that a book whose stated prerequisite is "basic
linear algebra" quotes the real spectral theorem without proof in chapter 1,
which is exactly the hidden dependency GT-7 makes explicit.
Flajolet & Sedgewick, *Analytic Combinatorics*, table of contents,
<https://algo.inria.fr/flajolet/Publications/AnaCombi/contents.html> — **Appendix
A "Auxiliary Elementary Notions" contains A.5 Formal power series and A.6
Lagrange inversion; Appendix B is Basic Complex Analysis; Appendix C is
Concepts of Probability Theory including measure**. The seam falls at §IV.1
"Generating functions as analytic objects". This is the direct justification for
denial §9.1 and for CB-4 being purely formal.
Bóna, *Introduction to Enumerative and Analytic Combinatorics* — draws the same
line, quarantining analytic combinatorics into Part III ch. 7, and places
inclusion–exclusion before the twelvefold way.
Bóna, *A Walk Through Combinatorics*, <https://archive.org/stream/a-walk-through-combinatorics/a-walk-through-combinatorics_djvu.txt>.
van Lint & Wilson, *A Course in Combinatorics*.
Berkeley Math 172 (Haiman), <https://math.berkeley.edu/~mhaiman/math172-spring10/>
— topic 4 set partitions/Stirling/Bell, topic 5 integer partitions, topic 6 the
twelvefold way; the third independent confirmation of CB-7 → CB-8 order.
Oxford C8.3 Combinatorics, <https://courses.maths.ox.ac.uk/course/view.php?id=6104>
— chains/antichains/Sperner/LYM/Dilworth, then shadows, then intersecting
families with **Fisher's inequality**, then VC/Sauer–Shelah, then the
combinatorial nullstellensatz. The split between CB-3 and CB-13 is this
ordering.
CMU 21-301 — groups the linear-algebra methods into one late block and puts
spectral graph theory after it; the second independent source for that split.
MIT 18.212 — Cayley L25–26, **matrix-tree L27, Cauchy–Binet L28**, spectral
L29, weighted matrix-tree L31; the source for GT-7's Cauchy–Binet flag. Its
prerequisite is 18.701/18.703, i.e. abstract algebra, not merely 18.06.
MIT 18.217 — extremal §2 then Ramsey §3, with regularity inside the extremal
chapter.
Cambridge Part II Graph Theory — 5 lectures extremal, 3 Ramsey, 3 probabilistic;
Erdős–Stone taught with a "sketch of proof" (denial §9.5); "Ramsey's theorem
(finite and infinite forms)" with "no specific prerequisites", which is exactly
the invisible choice cost §7 makes visible.

**Graph theory.**
Diestel, *Graph Theory* (GTM 173), 6th ed.
Contents: <https://diestel-graph-theory.com/Contents.pdf>.
Preface: <https://diestel-graph-theory.com/Preface1.II.pdf> — "apart from two
clearly marked exceptions, **any results used in the proof of others precede
them in the text**", with the reference numbers of the results used printed in
the margin of each proof, and back-references in square brackets. A topologically
sorted graph theory text with a printed dependency index; the ordering of GT-1…8
is checked against it. Its stated external prerequisites — linear algebra for
§1.9 and §5.5, plane topology for ch. 4, elementary probability for ch. 11 — are
GT-7, GT-8 and CB-12 in this scaffold.
Diestel ch. 4 preview: <https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf>
— the **Jordan curve theorem for polygons** as the topological prerequisite,
which is what GT-8 proves and denial §9.15 bounds.
West, *Introduction to Graph Theory* — note that ch. 6 and ch. 7 swapped between
editions and West's own syllabus postpones §6.3; evidence that the
planarity/colouring region has genuine slack.
Bollobás, *Modern Graph Theory* — puts planarity at §I.4 by keeping the topology
informal, which this library cannot do; and eigenvalue methods at VIII–X,
terminal.
Bondy & Murty; Oxford B8.5 <https://courses.maths.ox.ac.uk/course/view.php?id=6064>
— derives "Menger's theorem and Hall's theorem" from max-flow min-cut, the route
GT-4 explicitly declines and says why.

**Category theory.**
Mac Lane, *Categories for the Working Mathematician*, 2nd ed.,
<https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/maclanecat-ocr.pdf>
— I.6–I.7 the universe assumption (denial §9.21); **VII.2 coherence**, with his
own warning that "every diagram commutes" is false as stated and only *formal*
diagrams are covered; **VIII.4 the members / pseudo-element calculus**, Theorem
3's six rules including the subtraction rule (vi), and the arrow-theoretic
construction of the snake lemma's connecting morphism. The preface states the
design intent: chapter VIII "covers … the means to prove all of the diagram
lemmas without ever chasing an element around a diagram".
Riehl, *Category Theory in Context*, <https://emilyriehl.github.io/files/context.pdf>
— §1.1 fn. 14 (the universe assumption, taken only under duress and never used
in the body); Thm 1.5.9 (equivalence needs AC); Thm 2.2.4 (Yoneda for locally
small $\mathcal{C}$, and the remark that the bijection itself proves the
collection is a set); Thm 3.5.11 (limits from products and equalizers);
**Prop 3.7.3, Freyd** (a category with products as large as its cardinality is a
preorder — §6.3); §3.7 Matters of Size, and the anafunctor remark about "the"
limit; Thm 4.6.2 (RAPL); §4.7 the adjoint functor theorems; Cor 6.2.7 (Kan
extension existence); Epilogue E.5 (abelian categories; Thm E.5.2
Freyd–Mitchell, with the comment that "most of the material presented in the
preceding 150 pages appears to be necessary").
Leinster, *Basic Category Theory*, <https://arxiv.org/abs/1612.09375> —
§3.1–3.2 "Interlude on sets", the informal small/large class discipline;
Prop 5.1.26.
Awodey, *Category Theory* — the ordering that takes unit/universal-arrow before
hom-sets, which is the ordering CT-4 adopts for a different (size) reason.
Johnstone, Cambridge Part III Category Theory notes,
<https://qk206.user.srcf.net/notes/category_theory.pdf> — Lemma 1.2 headed
"Assuming the axiom of choice", with "note that the choice is always required"
and the remark that almost any assertion about skeletons is equivalent to AC.
Cambridge Part III outline,
<https://www.maths.cam.ac.uk/postgrad/part-iii/files/GtC/Foundations/CategoryTheory_outline_2526.pdf>
— "Limits. Construction of limits from products and equalizers. Preservation and
creation of limits. The Adjoint Functor Theorems. [4 lectures]".
nLab: [Yoneda lemma](https://ncatlab.org/nlab/show/Yoneda+lemma),
[adjoint functor theorem](https://ncatlab.org/nlab/show/adjoint+functor+theorem),
[monad](https://ncatlab.org/nlab/show/monad),
[monadicity theorem](https://ncatlab.org/nlab/show/monadicity+theorem),
[Kan extension](https://ncatlab.org/nlab/show/Kan+extension),
[equivalence of categories](https://ncatlab.org/nlab/show/equivalence+of+categories),
[Eckmann–Hilton argument](https://ncatlab.org/nlab/show/Eckmann-Hilton+argument).

**Additive, abelian and monoidal.**
nLab: [additive category](https://ncatlab.org/nlab/show/additive+category),
[biproduct](https://ncatlab.org/nlab/show/biproduct) (the enrichment-free
definition and the free, unique CMon-enrichment — the direction AB-1 adopts),
[abelian category](https://ncatlab.org/nlab/show/abelian+category),
[snake lemma](https://ncatlab.org/nlab/show/snake+lemma),
[five lemma](https://ncatlab.org/nlab/show/five+lemma) (the generalized-element
escape from Freyd–Mitchell),
[3x3 lemma](https://ncatlab.org/nlab/show/3x3+lemma),
[Freyd–Mitchell embedding theorem](https://ncatlab.org/nlab/show/Freyd-Mitchell+embedding+theorem),
[monoidal category](https://ncatlab.org/nlab/show/monoidal+category),
[coherence theorem for monoidal categories](https://ncatlab.org/nlab/show/coherence+theorem+for+monoidal+categories).
Wise, *A non-elementary proof of the snake lemma*,
<https://ncatlab.org/nlab/files/Wise-SnakeLemma.pdf> — AB0/AB1/AB2, additivity
derived rather than assumed (AB-2's headline), and an element-free snake lemma
valid in any abelian category.
Etingof–Gelaki–Nikshych–Ostrik, *Tensor Categories*,
<https://math.mit.edu/~etingof/egnobookfinal.pdf> — §2.1 and §2.2 the two
axiomatisations; **§2.8 strictness (Joyal–Street cliques) and §2.9 coherence as
its half-page corollary**, the route MO-1 takes; Remark 2.9.3, the explicit
licence to drop bracketings, which is why #53 is a fan-in edge; Remarks 2.8.6
and 2.8.7 (equivalence not isomorphism; no simultaneous skeletal-and-strict);
§8.1 braided and the hexagons.

**Homological algebra.**
Weibel, *An Introduction to Homological Algebra*, contents
<https://math.mit.edu/~hrm/palestine/weibel/contents.pdf> — **§2.7 balancing
Tor and Ext, which is before ch. 5 spectral sequences**; this ordering is what
HA-5 and HA-6 adopt, and denial §9.24 records why. Also §2.3 (enough
injectives), §3.6 (universal coefficients), §5.4–5.9 (filtrations, convergence,
double complexes, exact couples), and the chapters this file denies (7 Lie
algebra, 8 simplicial, 9 Hochschild, 10 derived categories).
Rotman, *An Introduction to Homological Algebra*, 2nd ed., contents
<https://archive.org/stream/AnIntroductionToHomologicalAlgebra2ndRotman/An%20Introduction%20to%20Homological%20Algebra,%202nd%20-%20Rotman_djvu.txt>
— §7.4 universal coefficients, §10.10 Künneth, §10.1–10.3 bicomplexes,
filtrations and exact couples.
Gelfand & Manin, *Methods of Homological Algebra*,
<https://www.gbv.de/dms/ilmenau/toc/216003059.PDF>.
nLab: [derived functor](https://ncatlab.org/nlab/show/derived+functor),
[Ext](https://ncatlab.org/nlab/show/Ext), [Tor](https://ncatlab.org/nlab/show/Tor),
[spectral sequence](https://ncatlab.org/nlab/show/spectral+sequence),
[injective object](https://ncatlab.org/nlab/show/injective+object),
[Baer's criterion](https://ncatlab.org/nlab/show/Baer%27s+criterion) (which
states the choice hypothesis inside the proposition — the source of §7's row),
[universal coefficient theorem](https://ncatlab.org/nlab/show/universal+coefficient+theorem).
**Two nLab statements this file deliberately does NOT rely on**, recorded so an
authoring agent does not either: the `Ext` page states balancing with no
hypotheses at all, and the `Tor` page's symmetry proof is PID-specific. Both are
to be checked against Weibel §2.7 and §3.1 before authoring (HA-5 traps).
MIT 18.905/18.906 <https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/pages/syllabus/>
and Harvard 231a <https://dongryul-kim.github.io/harvard_notes/Math231a/Notes_Math231a.pdf>
— both assume PID module theory before the universal coefficient theorem, which
is the hypothesis HA-5 puts in the Statement.

**Foundations of size.**
The survey literature on categorical foundations without universes, in
particular the standard observation that in plain ZFC a sentence "for any large
category $\mathcal{A}$…" cannot be stated, and that NBG (with global choice) is
a conservative extension of ZFC while Morse–Kelley is not:
<https://arxiv.org/pdf/0810.1279> (Shulman, *Set theory for category theory*),
<https://arxiv.org/pdf/1801.08528> (*Formulating categorical concepts using
classes*), <https://arxiv.org/pdf/1312.6198> (*Categories within the foundation
of mathematics*), <https://arxiv.org/pdf/1603.03272> (Feferman's forays).
And, decisively for this library, **its own published items**:
`items/thm-transfinite-recursion.md` ("Because $G$ is a class function rather
than a set, this is a **theorem schema**"), `items/thm-burali-forti.md` and
`items/fs-ordinals-form-a-set.md`.

---

# 16. Erdős–Hajnal extension from arXiv:2606.06258v2

**Reconciliation receipt (2026-08-14).** Every use of the ordinary graph
regularity lemma in this section cites GT-19's landmark item; this section does
not mint or restate it. The finite Ramsey estimates cite RA-12
`def-floor-and-ceiling`, the real-analysis geometric-sum identity, and its
elementary power/exponential bounds.

This extension follows a full reading of the target paper: paragraphs, proofs,
captions and bibliography as well as displayed definitions and environments.
The v2 source has 54 formal environments: 10 theorems, 29 lemmas, 13 claims,
one corollary and one conjecture. Its three headline reductions are restated
later, so the library will give each one canonical item and later source labels
only as backward-linking remarks.

This is a scaffold addition, not a publication of the paper's mathematics.
Every future A page must establish its load-bearing results in focused items;
B pages contain examples and are leaves. A-page summaries remain exactly two
nonempty paragraphs, each below 150 words; B pages have no summary section.

## 16.1 Amendments to pre-existing graph scaffolds

- GT-1 Graphs, Walks and Connectivity must own graph order, vertex and edge
  deletion, neighborhoods, degrees, leaves and pendant edges, E(X,Y), induced
  copies/isomorphism, complements, clique/stable-set notation and
  alpha/omega, connected and anticonnected components, P_n, C_n, K_n,
  K_{s,t}, stars, 1-subdivision, wheels and disjoint unions. It must give the
  handshake theorem on A, because the existing instance is B-only. Bull, E,
  Bird and their complements receive A-page edge-list definitions.
- GT-5 Graph Colouring adds the proved greedy stable-set bound and the
  chi(G) >= |G|/alpha(G) corollary used in the sparse-set exits.
- CB-11 Ramsey Theory adds the power-form finite Ramsey corollary: a K_t-free
  n-vertex graph has a polynomial-size stable set, as used in Lemma 2.1.
- CB-12 Finite Probability adds Erdős's finite G(n,1/2) construction with no
  clique or stable set of size 2 log_2 n for all sufficiently large n.
- The real-analysis support must add real ceilings, their floor/ceiling
  inequalities, finite geometric sums, and the elementary power/exponential
  estimates used in the iterative exponent calculations. The logarithm and
  general-powers page is therefore load-bearing.

Every graph is finite, simple and undirected. Induced-H-free means no induced
copy, never the ordinary-subgraph convention. The paper uses homogeneous set
both for clique/stable set and for module; this extension calls the latter
module (homogeneous set). Sparse-to is directional, weak sparsity is symmetric,
and a blockade is an ordered sequence. All proposed proofs are finite and add
no choice principle beyond ZF.

## 16.2 Added A/B pairs

| order | A page | B page | rigorous future scope |
|---|---|---|---|
| 393/394 | induced-subgraphs-and-hereditary-graph-classes | induced-subgraphs-and-hereditary-graph-classes-examples | Injective induced embeddings and the injection count ind_H(G); H-free and family-free graphs; isomorphism-closed hereditary graph classes and their unique possibly infinite minimal forbidden induced-subgraph bases; complementation; clique and stable-set numbers; connected/anticonnected components; and complete, anticomplete, pure and mixed disjoint vertex-set pairs. |
| 395/396 | erdos-hajnal-property-and-homogeneous-sets | erdos-hajnal-property-and-homogeneous-sets-examples | Homogeneous sets and $\operatorname{hom}(G)$; EH exponents and their downward closure; the Erdős–Hajnal conjecture; complement, subclass and forbidden-pattern monotonicity; equivalence of the universally quantified single-pattern and finite-family formulations; the explicit $\tfrac12\log_2 n$ Ramsey baseline; and a first-moment $G(n,1/2)$ construction proving that the class of all graphs admits no positive-power bound. |
| 397/398 | modules-substitution-and-prime-graphs | modules-substitution-and-prime-graphs-examples | Modules, prime graphs, substitution and the Alon–Pach–Solymosi theorem (1.4). |
| 399/400 | regular-pairs-and-induced-counting | regular-pairs-and-induced-counting-examples | Edge density; regular pairs, slicing, robustness and typical degrees; regular partitions and the energy-increment proof of Szemerédi regularity with an explicit tower recurrence; self-regular subsets; triangle, graph and induced counting; ordinary removal; strong regularity and energy approximation with wowzer growth; representative subsets regular also with themselves; and a full proof of fixed-pattern induced removal. |
| 401/402 | sparse-restricted-subgraphs-and-rodl-nikiforov | sparse-restricted-subgraphs-and-rodl-nikiforov-examples | c-sparse/restricted sets and full Rödl/Nikiforov theorems (1.1–1.2). |
| 403/404 | classical-and-loglog-erdos-hajnal-bounds | classical-and-loglog-erdos-hajnal-bounds-examples | The classical and log-log general EH lower bounds quoted in the introduction. |
| 405/406 | polynomial-rodl-and-viral-equivalence | polynomial-rodl-and-viral-equivalence-examples | Polynomial Rödl, viral properties and Bucić–Fox–Pham equivalence (1.3). |
| 407/408 | blockades-combs-and-pattern-graphs | blockades-combs-and-pattern-graphs-examples | Blockades, combs, patterns, sparse orientations, and Lemmas 2.3 and 2.6. |
| 409/410 | pure-pairs-forests-and-path-antipath-classes | pure-pairs-forests-and-path-antipath-classes-examples | Pure pairs, forest/path-antipath results, and leaf/co-leaf viral preservation (1.7–1.8). |
| 411/412 | bull-free-graphs-and-the-erdos-hajnal-property | bull-free-graphs-and-the-erdos-hajnal-property-examples | The complete bull-free structural proof and its EH conclusion. |
| 413/414 | cographs-perfect-patterns-and-pure-pairs | cographs-perfect-patterns-and-pure-pairs-examples | Cographs, perfect patterns, tau-criticality, B-rainbow copies and pure-pair lemmas. |
| 415/416 | the-five-cycle-and-erdos-hajnal | the-five-cycle-and-erdos-hajnal-examples | The full C_5 EH theorem (1.5) and its comb/blockade recurrence. |
| 417/418 | star-expansions-and-erdos-hajnal | star-expansions-and-erdos-hajnal-examples | Star expansions, theorem 1.9, and C_6, C_7 and hat-C_5 consequences. |
| 419/420 | iterative-sparsification-and-the-five-vertex-path | iterative-sparsification-and-the-five-vertex-path-examples | Nice graphs and the full P_5/co-P_5 EH theorem (1.6). |
| 421/422 | small-graph-erdos-hajnal-consequences | small-graph-erdos-hajnal-consequences-examples | Graphs through five vertices, prime six-vertex figures, E, Bird, H-plus/minus and H_0,...,H_5. |
| 423/424 | iterative-restriction-and-comb-extraction-lemmas | iterative-restriction-and-comb-extraction-lemmas-examples | Lemmas 2.4, 2.5 and 2.7–2.10, including all rounding and exponent bounds. |
| 425/426 | leaf-reducibility-and-wonderful-families | leaf-reducibility-and-wonderful-families-examples | Leaf-reducibility, wonderfulness, Lemmas 2.1–2.2 and their pattern-embedding proof. |
| 427/428 | generalized-niceness-and-reduction-outcomes | generalized-niceness-and-reduction-outcomes-examples | Generalized niceness and Lemmas 3.1–3.3, decomposed by outcome and scale. |
| 429/430 | from-generalized-niceness-to-erdos-hajnal | from-generalized-niceness-to-erdos-hajnal-examples | Rödl initialization and Lemmas 3.4–3.5/1.12. |
| 431/432 | property-star-and-comb-outcomes | property-star-and-comb-outcomes-examples | Property (*), comb alternatives and Lemmas 4.1–4.5/1.13. |
| 433/434 | the-structural-criterion-for-property-star | the-structural-criterion-for-property-star-examples | Lemma 5.1/1.14: partitions, pattern lifting, geometric layers and contradiction. |
| 435/436 | quotient-blockades-and-mixing-relations | quotient-blockades-and-mixing-relations-examples | Mixed-block equivalence, quotients, termination and Lemmas 6.1–6.2. |
| 437/438 | co-e-free-comb-structure | co-e-free-comb-structure-examples | H_5/co-E auxiliary EH theorem (6.3), Claims 6.4.1–6.4.3 and Lemma 6.4. |
| 439/440 | co-bird-free-comb-structure | co-bird-free-comb-structure-examples | P_2+P_1/P_3+P_1 witnesses, E-overlap relation and Lemma 6.5. |
| 441/442 | erdos-hajnal-for-the-e-graph-and-bird | erdos-hajnal-for-the-e-graph-and-bird-examples | Explicit final deductions of Theorems 1.10–1.11 and a dependency ledger. |

CONVENTION AMENDMENT (Beta-F6-1). Here ind_H(G) counts injective maps preserving
both adjacency and nonadjacency, not unlabelled vertex subsets; in particular
ind_{K_2}(G)=2|E(G)|. Hereditary means closed under isomorphism as well as under
induced subgraphs. A forbidden basis is unique only up to graph isomorphism and
may be infinite. Every graph is finite, simple and undirected. Complete and
anticomplete are both vacuously true when one of the two disjoint vertex sets is
empty, so such a pair is pure, not mixed.

## 16.3 Item-level proof and example requirements

No source theorem above may be a citation-only Fact. Regularity gets energy,
defect Cauchy–Schwarz, slicing and induced-embedding lemmas before removal;
Rödl/Nikiforov gets reduced-graph selection, induced-count bookkeeping and
parameter-transfer lemmas; Bucić–Fox–Pham gets finite-family exponent,
hereditary amplification and induced-count lemmas before the equivalence.

The bull proof gets narrow/perfect/composite cases and weighted functions. The
C_5 and star-expansion proofs are separate so their cograph/perfect-pattern and
pure-pair machinery stays below the 100-item A-page ceiling. The P_5 source owns
its two iteration chains. Sections 2–6 each expose every sparse-pair
orientation, maximal sequence, local adjacency case, induced witness,
equivalence closure, rounding loss and termination claim as a named lemma.

B pages must check every figure by finite adjacency data: bull; both prime
six-vertex graphs; P_4 star expansion; E, Bird and complements; H_0,H_1,H_5;
both co-E and co-Bird witnesses; all relevant C_5, P_5, H_5 and E neighborhood
patterns; and numerical weak-versus-directional sparse blockades. A later A
page may not cite a B item.

## 16.4 Article coverage and final routes

Conjecture 1 and introductory language map to 393–396; the historical Ramsey
and random-graph paragraphs to the amended CB-11/CB-12; general bounds to 403.
Theorems 1.1–1.2, 1.3, 1.4, 1.5, 1.6, 1.7–1.8 and 1.9 map respectively to
401, 405, 397, 415, 419, 409 and 417. The repeated reductions 1.12/3.5,
1.13/4.5 and 1.14/5.1 canonicalize on 429, 431 and 433. Lemmas 2.1–2.2 map to
425; 2.3 and 2.6 to 407; 2.4–2.5 and 2.7–2.10 to 423; and Sections 3–6 map in
order to 427–440.

The E proof route is pendant-leaf deletion to P_5, wonderfulness, property (*)
from co-E structure and the H_5/co-E auxiliary class, generalized niceness,
then EH. The Bird route deletes to the bull and uses the established E theorem
as auxiliary input. Both routes must be explicit theorem items on 441, not
mere prose inferences after Lemma 6.5.

## 16.5 Source and correction ledger

Open these sources in full during future scaffold/authoring work: target
[arXiv v2](https://arxiv.org/html/2606.06258v2);
[Diestel](https://diestel-graph-theory.com/) and
[Bondy–Murty](https://link.springer.com/book/9781846289699);
[Erdős–Hajnal](https://doi.org/10.1016/0166-218X(89)90045-0),
[Chudnovsky's survey](https://arxiv.org/abs/1606.08827) and the
[log-log improvement](https://arxiv.org/abs/2301.10147);
[Rödl](https://doi.org/10.1016/0012-365X(86)90076-2),
[Nikiforov](https://arxiv.org/abs/math/0404503), and
[induced regularity/removal](https://doi.org/10.1007/s004930070001);
[Bucić–Fox–Pham](https://arxiv.org/abs/2403.08303) and
[Alon–Pach–Solymosi](https://doi.org/10.1007/s004930100016);
[bull-free graphs](https://doi.org/10.1016/j.jctb.2008.02.005),
[C_5/star expansions](https://arxiv.org/abs/2102.04994),
[P_5](https://arxiv.org/abs/2312.15333),
[leaf extension](https://arxiv.org/abs/2307.06455),
[bounded-VC iteration](https://arxiv.org/abs/2312.15572),
[paths and antipaths](https://doi.org/10.1016/j.jctb.2015.01.001), and
[forest pure pairs](https://arxiv.org/abs/1809.00919).

Wikipedia may check a name or drawing but is never proof authority. Correct the
target source explicitly rather than silently: the first Lemma 2.7 size bound
needs its |G| factor; Lemma 3.1's D,D_i should be B,B_i; affected Lemma 4.5
language should quantify G, not F; Section 6.2 is co-Bird-free; Theorem 1.7
needs its complement notation restored; Lemma 2.1's first alternative needs an
explicit existential graph; and geometric layers need integral floor/ceiling
bounds.

---

# 18. Reconciliation: what §1–§16 got right, and what is now stale

`subjects-01`, `combinatorics` lane, 2026-08-13. Every claim below was checked
against `research/plan-spec.json` and the actual files in `items/` and
`library/` on that date, not against any scaffold's prose. **A page in the spec
with a non-empty `items` array is authored; an empty one is a plan and its
content does not exist.**

## 18.1 The premise of §1 and §2 is discharged

§1 opens *"The library today proves a great deal with finite counting and has
never defined it"* and §2 lists `def-binomial-*`, `def-factorial`, `def-graph`,
`def-tree`, `def-matching`, `def-chromatic-*`, `def-ramsey-*`,
`def-formal-power-series`, `def-incidence-algebra`, `def-mobius-function` as
verified absent. **All of that is now published.** Eighteen combinatorics A/B
pairs were built between 2026-07-28 and 2026-08-12:

| page id | order | A items |
|---|---|---|
| `finite-counting-and-binomial-coefficients` | 20 | 26 |
| `inclusion-exclusion-and-the-pigeonhole-principle` | 22 | 21 |
| `chains-antichains-sperner-and-dilworth` | 191 | 32 |
| `formal-power-series` | 193 | 22 |
| `incidence-algebras-and-mobius-inversion` | 203 | 24 |
| `graphs-walks-and-connectivity` | 207 | 35 |
| `trees-forests-and-spanning-trees` | 209 | 27 |
| `eulerian-and-hamiltonian-graphs` | 211 | 22 |
| `matchings-covers-menger-and-network-flows` | 213 | 25 |
| `graph-colouring` | 215 | **4** |
| `ramsey-theory` | 217 | 21 |
| `extremal-graph-theory` | 219 | 20 |
| `finite-probability-spaces-and-random-variables` | 220.2 | 37 |
| `finite-probability-and-the-probabilistic-method` | 221 | 28 |
| `plane-graphs-euler-and-the-five-colour-theorem` | 357 | 40 |
| `induced-subgraphs-and-hereditary-graph-classes` | 393 | 23 |

Orders are quoted here only as the disk state on 2026-08-13; per the seam
contract they are recomputed at splice and must not be carried into any new
scaffold text. Everything below uses page ids and relative labels.

Still planned and **unauthored** in the band, i.e. the eight first-class
enrichment targets: `linear-recurrences-and-rational-generating-functions`,
`lattice-paths-and-catalan-numbers`,
`set-partitions-stirling-numbers-and-exponential-generating-functions`,
`integer-partitions-and-the-twelvefold-way`,
`counting-up-to-symmetry-burnside-and-polya`,
`linear-algebra-methods-in-combinatorics`,
`block-designs-and-finite-projective-planes`,
`algebraic-and-spectral-graph-theory`.

## 18.2 Stale claims, corrected

**S1. §2 and §10 amendment 4: "AA-6 does not list Burnside's orbit-counting
lemma, so CB-10 mints it without duplication." FALSE.**
`group-actions-and-cayleys-theorem` was authored with 37 items and publishes
`thm-cauchy-frobenius-orbit-counting`, together with `def-group-action`,
`def-orbit-and-stabilizer`, `thm-orbits-partition-the-set`, `thm-orbit-stabilizer`,
`cor-orbit-stabilizer-cardinality`, `def-free-group-action`,
`def-fixed-point-sets-of-a-group-action`, `lem-stabilizers-in-one-orbit-are-conjugate`
and `thm-jordans-derangement-theorem`. Its examples page carries
`cex-orbit-count-is-not-set-size-divided-by-group-order`,
`ex-binary-necklaces-of-length-four` and
`ex-two-colourings-of-a-square-up-to-dihedral-symmetry`.
**CB-10 therefore cites the orbit-counting lemma and must not re-mint it**; its
own content is the cycle index, Pólya's enumeration theorem and de Bruijn's
weighted form. §10 amendment 4 is discharged. The `fs-` "the number of orbits is
$\lvert X\rvert/\lvert G\rvert$" that §11 planned for CB-10 already exists as the
counterexample above; since that item is homed on a B page it is a leaf and
cannot be cited, but duplicating it under a second id would violate the reuse
rule, so CB-10 drops it and the B page instead exhibits a *different* non-free
action. §22 gives CB-10's replacement inventory.

**S2. §10 amendment 5: "confirm whether AA-14 mints the multivariate polynomial
ring." ANSWERED — it exists, on a different page.**
`def-multivariate-polynomial-ring-by-iteration` and
`cor-multivariate-polynomial-ring-over-a-domain-is-a-domain` are published on
`polynomial-rings-and-roots`, not on `symmetric-polynomials` (which is still
unauthored, 0 items). Well-definedness row #23 (the cycle index lives in
$\mathbb{Q}[x_1,\dots,x_n]$) is therefore discharged by citation, and the
Combinatorial Nullstellensatz of §23 has its ring. `symmetric-polynomials`
remains unauthored and nothing in the CB/GT enrichment depends on it.

**S3. §7 choice ledger, rows for the infinite Ramsey theorem and König's lemma:
superseded by what was actually built.** The ledger assigns **DC** to both. The
authored `ramsey-theory` page proves `thm-konig-infinity-lemma-for-ordered-trees`
("an ordered finitely branching tree with a node at every level has an infinite
branch, **in ZF**"), `lem-infinite-pigeonhole-on-the-naturals` ("in ZF") and
`thm-infinite-ramsey-on-the-naturals` ("in ZF"), together with
`cor-finite-ramsey-by-konig-compactness`. The device is the *ordered* branching:
fixing a linear order on each successor set makes the branch canonical, so no
choice is consumed. The scaffold's DC rows are wrong about the library's actual
content and are replaced by §21's ledger.

**S4. §7 row "infinite Hall / marriage theorem … BPI (Rado selection, same
route)": not licensed, and the build said so.**
`matchings-covers-menger-and-network-flows` deferred the infinite marriage
theorem outright, recording that its source pass "confirmed an AC-dependent
locally finite form but did not license the prose scaffold's exact BPI claim
from the available closure." §21 restates the row honestly and §24 (GT-16) scaffolds
the result in the two forms that *can* be closed.

**S5. §9 denial 6: "the Rado graph / countable random graph" denied as needing
measure-theoretic probability. WRONG, and the denial is withdrawn.** The Rado
graph needs no probability at all: it is constructed explicitly from the binary
expansion (the BIT predicate) on $\mathbb{N}$, characterised up to isomorphism by
the finite extension property, and the uniqueness proof is a back-and-forth
argument on a countable set. Diestel §8.1–§8.3 develops exactly this. §24 (GT-20)
scaffolds it, from Cameron's survey and four model-theory note sets.
The *probabilistic* statement — that $G(\mathbb{N},1/2)$ is almost surely
isomorphic to it — does need a measure and stays denied.

**S6. §9 denial 4: Szemerédi's regularity lemma denied, "licensed by a dedicated
regularity page." That page is now scaffolded (§24, GT-19).** The 2026-08-11
build-the-machinery rule is what changes the disposition: "it is a page of
machinery on its own" is a reason to build the page, not to drop the theorem.
Szemerédi's *theorem* on arithmetic progressions stays denied; Roth's theorem
does not — the scaffold proves it twice, by triangle removal (§24, GT-19) and by
finite Fourier analysis (§25, CB-27), with a required agreement `rem-` between
them.

**S7. §9 denial 5 (Erdős–Stone–Simonovits) was already overridden in-file by the
`frontier-11` amendment and is now authored.** `extremal-graph-theory` publishes
`thm-erdos-stone-for-balanced-blowups`, `thm-erdos-stone-simonovits`,
`cor-chromatic-number-extremal-density` and `thm-hypergraph-kovari-sos-turan-bound`.
No further action; recorded so no future reader re-denies it from §9.

**S8. §9 denials 18 and 19 — matroids and additive combinatorics, both declined
as "not commissioned" — are commissioned now.** The 2026-08-13 dispatch names
additive combinatorics explicitly, and the build-the-machinery rule reopens
matroids, whose only obstacle was that nothing had built them. §24 (GT-17a/b/c)
and §25 (CB-27, CB-28, CB-32, CB-33, CB-34) scaffold both.

**S9. §9 denial 11 (Kruskal–Katona, "long, and its natural home is a shadows
page") no longer meets the bar for a decline.** `def-shadow-of-a-uniform-family`,
`thm-local-lym-inequality` and `def-intersecting-family` are published on
`chains-antichains-sperner-and-dilworth`, so the shadows page exists in all but
name. §22 (CB-21) scaffolds the compression machinery and the theorem, and §25
(CB-25) adds the independent entropy proof.

**S10. §3 CC-D9 and §9 denial 12 — "the four colour theorem is stated as a
`not-proved-here` ‡ entry on the existing catalogue" — WAS NEVER DONE.**
`grep -ri "four.colou\?r" items/ library/` returns nothing: there is no
four-colour item anywhere in the corpus. `plane-graphs-euler-and-the-five-colour-theorem`
proves `thm-six-colour-theorem-for-planar-graphs` and `thm-five-colour-theorem`
and says nothing about four. The decision CC-D9 recorded is sound and is kept;
its *disposition* is outstanding, and §24 is where the ‡ record is scaffolded —
on GT-22, alongside flow–colouring duality, with Grötzsch's theorem and
Thomassen's 5-choosability moving to GT-23. Note
also that all five `deferred-*` / `open-problems-*` catalogue pages carry 0 items
in the spec, so "the existing catalogue" is not a place an item can currently be
homed; GT-22 homes the record on its own page.

**S11. `graph-colouring` is published with four items and is genuinely thin.**
It carries `def-proper-vertex-colouring-and-chromatic-number`,
`lem-greedy-colouring-bound`, `def-clique-and-independence-numbers` and
`thm-clique-independence-chromatic-bounds`; its B page has two items. It was
built at `frontier-9` as a *support* page for the Erdős–Hajnal programme, and
`research/frontier-11-batch-3.notes.md` records the consequence: "`graph-colouring`
contains only four items … contributes no extremal theorem … only
`def-proper-vertex-colouring-and-chromatic-number` and
`def-clique-and-independence-numbers` supply the required interfaces". Nothing in
the §11 GT-5 inventory beyond those four items exists: no Brooks, no Vizing, no
chromatic polynomial, no list colouring, no perfect graphs, no De Bruijn–Erdős.
**Published pages are not retrofitted**, so the remedy is not to add items to
that page but to scaffold the missing development as new pairs above it. §24
does that as GT-9 through GT-13, and §19.3 and §24.0 record why that is the right
shape.

**S12. §4 (the renumber table), §13 (the page inventory) and §14 (the
build-frontier note) are superseded wholesale in their CB/GT parts.** The splice
happened; `research/plan-spec.json` now holds 448 pages. §27 gives the current
inventory for the CB/GT material only.

**S13. Two normative docs disagree about the A-page ceiling, and the code
settles it.** `CLAUDE.md` and `briefs/beta-scaffold.md` §"When the machinery
makes the page big" say **60**; `SCHEMA.md` §6 and `briefs/beta-scaffold.md`
§4a.3 say **100**. `tools/validate-plan.mjs` documents and defaults to
`--max-items 60` and emits error code `size` above it. **60 binds**, and every
page in §22–§25 is designed under it. Recorded in §28 as an amendment owed to
whoever maintains those two docs; not fixed here, because they are not this
lane's files.

## 18.3 What §1–§16 got right and is kept unchanged

- The **formal/analytic seam**. §9 denial 1 quarantines singularity analysis,
  saddle-point asymptotics and the circle method behind complex analysis, and
  puts every generating function in $R[[x]]$. That was correct and the authored
  `formal-power-series` page honours it. §19 extends the same discipline to the
  symbolic method: the whole of Flajolet–Sedgewick Part A is formal, Part B is
  not, and the seam falls exactly at their §IV.1.
- The **self-contained-scope discipline** and the insistence that a definition's
  well-definedness is a numbered item, not a parenthetical. §20 continues the
  numbered obligation table from #62.
- The **choice ledger as a page-level artifact** with the cost named in the
  Statement. §21 continues it.
- Diestel as the **dependency-ordered** graph theory source. His preface's claim
  — "apart from two clearly marked exceptions, any results used in the proof of
  others precede them in the text", with the reference numbers printed in the
  margin of each proof — is what §24's ordering is checked against, and the 2026
  harvest reproduces his full contents and named results verbatim in
  `research/subjects-01-combinatorics-harvest-graphtheory.md`.
- **CC-D3**, separating planarity from the rest of graph theory because "face" is
  undefined until the polygonal Jordan curve theorem is proved. The authored page
  proves `thm-polygonal-jordan-curve` and does exactly this.

---

# 19. The shape of the enrichment, and the structural findings behind it

## 19.1 Placement, stated as anchors

Per the seam contract §0.2, **no absolute order appears below**. Every new pair
is placed by naming the published or planned page id it sits immediately after.
The orchestrator computes integers at splice. The combinatorics band already
uses fractional orders (`finite-probability-spaces-and-random-variables` sits at
220.2), so an in-band insertion needs no renumber of the rest of the library.

Three placement facts constrain everything:

1. **`plane-graphs-euler-and-the-five-colour-theorem` is far above the band.**
   Anything that genuinely needs a plane embedding — flow/colouring duality,
   Grötzsch, Thomassen's 5-choosability, crossing numbers, the four colour
   record — must sit above it, not in the band. **This clause is SUPERSEDED as
   written**: it said one pair sits there, and §24 puts **three** — GT-22 (plane
   duality, cycles and bonds, flow–colouring duality), GT-23 (5-choosability,
   Grötzsch, crossing numbers) and CB-34 (incidences and sum–product). The reason
   is a disk finding this paragraph did not have: the published plane-graph page
   already proves **Kuratowski–Wagner** and publishes plane duality and the
   maximal-plane-triangulation characterisation, so the block above it is not the
   thin remainder assumed here, and forcing it into one pair would have breached
   the 60-item ceiling.
2. **The linear-algebra prerequisites of the algebraic block are planned but
   unauthored.** `inner-product-spaces-and-orthogonality`,
   `algebraic-extensions-degree-and-finite-fields` and
   `the-spectral-theorem-and-singular-value-decomposition` all carry 0 items.
   They sit below the band in plan order, so citing them is legal and the
   scaffold does; but nothing in §23 can be *built* until they are. That is a
   build-frontier fact, not a scaffold defect, and §27 states it.
3. **The Erdős–Hajnal block is above everything here.** Its pages are planned and
   unauthored. Where the enrichment builds a general tool that block also needs —
   the ordinary regularity lemma above all — the general tool goes in the band
   and the Erdős–Hajnal page cites it. §28 records that amendment; this lane does
   not edit §16.

## 19.2 Five structural findings from disk

**F1. Five general graph-theory items are homed on the planarity page, above the
whole band, and therefore cannot be cited by anything in it.**
`plane-graphs-euler-and-the-five-colour-theorem` publishes
`def-bridge-in-a-graph`, `lem-edge-is-a-bridge-iff-it-lies-on-no-cycle`,
`lem-three-connected-graph-has-a-contractible-edge`, `def-kempe-chain` and
`lem-kempe-component-colour-swap`. None of those is about plane graphs. Their
declared `deps` were read from the spec and every one resolves at or below
`graph-colouring`:

| item | its deps' home pages | earliest legal home |
|---|---|---|
| `def-bridge-in-a-graph` | `graphs-walks-and-connectivity` only | just above `graphs-walks-and-connectivity` |
| `lem-edge-is-a-bridge-iff-it-lies-on-no-cycle` | that page, plus `def-bridge-in-a-graph` | same |
| `lem-three-connected-graph-has-a-contractible-edge` | `graphs-walks-and-connectivity`, `matchings-covers-menger-and-network-flows`, `finite-counting-and-binomial-coefficients` | just above `matchings-covers-menger-and-network-flows` |
| `def-kempe-chain` | `graph-colouring`, `graphs-walks-and-connectivity` | just above `graph-colouring` |
| `lem-kempe-component-colour-swap` | `def-kempe-chain`, `graph-colouring`, `graphs-walks-and-connectivity` | same |

`lem-alternating-kempe-paths-cannot-both-occur` is a genuine exception: it cites
`thm-polygonal-jordan-curve` and `def-plane-graph-face-and-boundary`, so it is
correctly homed where it is.

This matters concretely. A Kempe chain is the central device of Vizing's fan
argument and of every Brooks-style recolouring, and GT-11 cannot use the
published one. A bridge is what an ear decomposition and the whole of flow theory
talk about. **Recommended remedy: re-home those five items to their earliest
legal page.** Re-homing changes only which page lists an id; the item file, its
id and its text are untouched, and acyclicity is preserved because every dep is
already below the new home. It is nevertheless a **reading-order change, which is
owner-only**, so it is recorded in §28 as amendment A1 and not
applied here. Two cautions for whoever applies it: a re-home is only complete
when the **donor** page file stops listing the item — no gate fails on a
half-done re-home, because both pages listing the same id looks legal to
`depcheck`; and `plane-graphs-euler-and-the-five-colour-theorem` is published, so
its page file changes and its own prerequisite closure must be re-derived.

**Fallback if the owner declines.** GT-11 and GT-14 are scaffolded so that the
fallback is a design change, not a lost result: GT-11 states the two-colour
recolouring lemma it needs in the form it needs it — *for a proper edge colouring
and two colours $\alpha,\beta$, the components of the subgraph of $\alpha$- and
$\beta$-coloured edges are paths and even cycles, and swapping the two colours on
one component leaves a proper edge colouring* — which is the **edge** analogue and
is a genuinely different statement from the published vertex-colouring
`lem-kempe-component-colour-swap`, so it is not a duplicate id under any reading.
For bridges, GT-14 works with `def-vertex-and-edge-connectivity` and cut edges
defined as $\lambda(G[\cdot])$-witnesses; that is clumsier and is the reason the
re-home is recommended.

**F2 — WITHDRAWN. It is wrong, and §23.0 records the correction and the
methodological lesson.** The cofactor expansion, minors, the adjugate and Cramer's
rule are all published, on `the-determinant-of-a-linear-operator` — a *different*
page from the one F2 checked. Only Cauchy–Binet is genuinely absent. F2 is left
standing below, unedited, so that the correction has something to point at.

**F2. The determinant page has no cofactor expansion, no adjugate and no
Cauchy–Binet.** `determinants-of-matrices-over-a-commutative-ring` publishes 24
items — the Leibniz formula, uniqueness as the normalised alternating multilinear
function, behaviour under row operations, multiplicativity, the transpose and
triangular cases — and stops. There is no Laplace expansion along a row, no
adjugate, no Cramer's rule, and no Cauchy–Binet. The matrix-tree theorem is
*stated* in terms of cofactors, so GT-7a cannot even phrase it by citation. §28
records the amendment owed to the algebra track; §23 scaffolds the fallback, in
which GT-7a mints the cofactor expansion, the adjugate identity and Cauchy–Binet
itself, with an explicit dictionary remark against the published determinant
items. Cauchy–Binet is a determinant identity over a commutative ring and its
proof is a Leibniz-formula computation, so it is in scope either way.

**F3. Courant–Fischer and Cauchy interlacing exist nowhere.** Neither
`eigenvalues-eigenvectors-and-the-characteristic-polynomial` (authored) nor the
unauthored `the-spectral-theorem-and-singular-value-decomposition` is scaffolded
with the min–max theorem. Half of spectral graph theory — the Hoffman ratio
bound, interlacing, the Cheeger inequality — is unstatable without it. §28 asks
the linear-algebra track to mint Courant–Fischer and Cauchy interlacing on the
spectral page; §23 scaffolds GT-7b to mint them if it does not.

**F4. Perron–Frobenius is reachable without a fixed-point theorem, and this
library already has what the elementary route needs.** The Collatz–Wielandt
characterisation
$\rho(A) = \max_{x \ge 0,\, x \ne 0} \min_{i : x_i > 0} (Ax)_i / x_i$
is attained because the standard simplex is a closed bounded subset of
$\mathbb{R}^n$ and the relevant function is upper semicontinuous on it; the
library publishes `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`
and `thm-heine-borel-characterisation-r`. No Brouwer fixed-point theorem is
needed, which matters because Brouwer in dimension $\ge 2$ is deferred
(`DEFERRED.md` §4). §23 scaffolds the irreducible nonnegative case, which is all
that spectral graph theory uses.

**F5. Finite Fourier analysis is fully available below the band.**
`the-complex-exponential-and-eulers-formula` publishes
`thm-complex-nth-roots-and-roots-of-unity` and `cor-sum-of-roots-of-unity`, and
`congruences-and-the-chinese-remainder-theorem` publishes the modular arithmetic.
Characters of $\mathbb{Z}/N\mathbb{Z}$ and their orthogonality are therefore
elementary consequences of published material, with no representation theory and
no analysis. **Roth's theorem is in reach**, twice over: by triangle removal from
GT-19 and by the Fourier/density-increment argument of §25. This is the single
most consequential availability finding in the enrichment.

## 19.3 Why the colouring gap becomes four pages and not one

The §11 GT-5 inventory tried to carry Brooks, Vizing, König edge colouring,
deletion–contraction and the chromatic polynomial, De Bruijn–Erdős, list
colouring and the weak perfect graph theorem on one A page, with the note
"Brooks' case analysis is the size risk; budget it". Against the 60-item ceiling
that is not a budget problem, it is a split. Each of Brooks' theorem, Vizing's
theorem, the polynomiality of $P(G,k)$ with the broken-circuit expansion, and the
weak perfect graph theorem is a multi-lemma development with its own machinery —
colour-critical graphs and Dirac's degree bound; fans and two-colour interchange;
deletion–contraction and the no-broken-circuit basis; the replication lemma and
Gasparian's rank argument. Splitting is never dropping: §24 keeps every result
the §11 inventory named, plus the ones it did not reach, and gives each its own
place in reading order.

The published `graph-colouring` page keeps both of its definitions and both of
its theorems, and every new page cites them rather than restating them. Nothing
is retrofitted onto it.

---

# 17bis. Continuity checkpoint — `subjects-01` `combinatorics` lane, 2026-08-13

*(Written at the 60% context boundary per `CLAUDE.md` §"Context continuity". It
is a working record for this lane's own resumption, not scaffold content. It is
superseded by §17 once §17 is written and may be deleted at splice.)*

**Objective.** Enrich the CB-\* and GT-\* material of this file only, from full
source research, at graduate depth. Write no other file; author no items; change
no `status:`.

**Done.** Header pointer block; §18 (reconciliation, 13 stale claims corrected
from disk); §19 (placement, five structural findings F1–F5, the colouring
split). Four source-research subagents dispatched and their harvests checked in
at `research/subjects-01-combinatorics-harvest-{enumerative,graphtheory,
algebraic,probabilistic}.md`. Enumerative and probabilistic harvests read and
their verdicts absorbed; graph-theory and algebraic harvests have their verbatim
`B` sections complete and their `C`–`F` sections were still being written when
this checkpoint was taken.

**Section numbering, fixed.** §17 summary · §18 reconciliation · §19 shape ·
§20 well-definedness obligations, continuing the numbering from #62 · §21 choice
ledger · §22 enumerative block · §23 algebraic, spectral and design block ·
§24 graph-theory block · §25 probabilistic, Ramsey and additive block ·
§26 canonical-coverage harvest · §27 inventory and build frontier ·
§28 amendments owed · §29 unresolved seams, denials reviewed, blockers.
**Cross-references written into §18 and §19 before this numbering was fixed must
be re-checked in a final pass** — several point at the wrong section.

**Exact next action.** Write §20 onward in that order, then §17, then reconcile
every internal `§n` reference.

---

# 20. Well-definedness obligations, continued

The §8 table runs to #62. This continues its numbering and its rule: **each row
is a required numbered item on the page named, never a parenthetical.** Pages are
named by relative label; §22–§25 define the labels.

| # | page | the definition | what must be proved first |
|---|---|---|---|
| 63 | CB-15 | a combinatorial class $(\mathcal{A}, \lvert\cdot\rvert)$ | each level $\mathcal{A}_n$ is **finite**, which is what makes $a_n = \lvert\mathcal{A}_n\rvert$ exist by `def-finite-cardinality`. The finiteness of every level is part of the definition, not a later remark |
| 64 | CB-15 | $\operatorname{SEQ}(\mathcal{B})$ | it is a combinatorial class **iff** $\mathcal{B}$ has no object of size $0$. Both directions: if $b_0 = 0$ a sequence of size $n$ has length at most $n$, so the level is a finite union of finite products; if $b_0 > 0$ the level is infinite. The hypothesis is not cosmetic and the failing case is the B page's counterexample |
| 65 | CB-15 | $A(x) = 1/(1 - B(x))$ | two separate obligations: $1 - B(x)$ is a **unit** of $R[[x]]$, by the published `thm-formal-power-series-unit-criterion`; and the family $(B(x)^k)_{k \ge 0}$ is **summable**, by `def-summable-family-of-formal-series` and `thm-summable-families-and-rearrangement`. Neither may be assumed from the shape of the formula |
| 66 | CB-15 | $\operatorname{MSET}(\mathcal{B})$, $\operatorname{PSET}(\mathcal{B})$ | a multiset over $\mathcal{B}$ is a function $\mathcal{B}\to\mathbb{N}$ of finite support and its size is the weighted sum, so the size is a finite sum; the level is finite exactly when $b_0 = 0$. The product $\prod_{n\ge1}(1-x^n)^{-b_n}$ is legitimate only through summability (#65's second clause). The $\exp\bigl(\sum_{k\ge1} B(x^k)/k\bigr)$ form additionally needs a $\mathbb{Q}$-algebra and is a **separate** statement |
| 67 | CB-15 | $\operatorname{CYC}(\mathcal{B})$ | a cycle is an **orbit** of the cyclic shift on nonempty sequences: cite `thm-orbits-partition-the-set`, and prove that size is constant on an orbit so the size of an orbit is well defined. The $\sum_{k\ge1}\frac{\varphi(k)}{k}\log\frac{1}{1-B(x^k)}$ form needs Euler's totient (published) **and** a $\mathbb{Q}$-algebra |
| 68 | CB-15 | the class defined by a recursive specification | **existence and uniqueness** of the solution, before any "the". The route is the published `thm-x-adic-completeness-and-polynomial-density` together with `def-formal-order-and-x-adic-topology`: a specification whose right-hand side strictly raises order is a contraction, so the sequence of truncations stabilises in each coefficient. Without this, "$C(x) = 1 + xC(x)^2$ defines the Catalan series" is an assertion, not a definition |
| 69 | CB-16 | $\operatorname{des}(\sigma)$, $\operatorname{maj}(\sigma)$, $\operatorname{exc}(\sigma)$ | the descent set is a subset of a finite set and $\operatorname{maj}$ is a finite sum over it. **The inversion number is NOT minted here**: `def-inversions-inversion-number-and-sign` is published on `symmetric-groups-and-the-sign-homomorphism`, and CB-16 cites it. A dictionary item recording that the new statistics live on the same object as the published one is required — this is the two-notions trap |
| 70 | CB-16 | the Eulerian number $A(n,k)$ and the $q$-factorial $[n]_q!$ | $A(n,k)$ counts a subset of a finite set. $[n]_q! \in \mathbb{Z}[q]$ is a finite product of polynomials; MacMahon's $\sum_{\sigma} q^{\operatorname{inv}\sigma} = [n]_q!$ is a **theorem**, and it is what licenses calling $[n]_q!$ a $q$-analogue of $n!$ |
| 71 | CB-17 | the Gaussian binomial coefficient $\binom{n}{k}_q$ | defined as $[n]_q!/([k]_q![n-k]_q!)$, this is a **quotient in a polynomial ring and is not obviously a polynomial**. Integrality is a theorem, exactly as $\binom{n}{k}$'s was at order 20. Prove it from the $q$-Pascal recurrence, and only then state the subspace-counting theorem $\binom{n}{k}_q = \#\{k\text{-subspaces of } \mathbb{F}_q^n\}$ for a prime power $q$, which is the convention anchor |
| 72 | CB-17 | the bivariate ring carrying the Jacobi triple product | $\sum_{n\in\mathbb{Z}} c_n(q) z^n$ with $c_n \in \mathbb{Z}[[q]]$ is not a formal Laurent series in either variable alone. The ring must be minted with an explicit **support condition** — for each $N$, only finitely many $n$ have $\operatorname{ord}_q c_n \le N$ — and the product must be shown well defined under it. This is the page's largest obligation and the reason the triple product is not free |
| 73 | CB-17 | a formal limit of a sequence of polynomials | the finite Rogers–Ramanujan polynomials converge coefficientwise; "converge" means the $x$-adic limit of the published `def-formal-order-and-x-adic-topology`, and the limit exists by `thm-x-adic-completeness-and-polynomial-density`. Say so, rather than writing $\lim$ and hoping |
| 74 | CB-18 | the rook numbers $r_k(B)$ and $N_j$ | both count subsets of finite sets; and $N_n(x) = \sum_k r_k (n-k)!(x-1)^k$ is an identity of **polynomials**, so it is proved for all $x$, not checked at integers and extended by hand-waving — or, if proved for positive integers, the extension is the separate citable fact that a polynomial identity over an infinite domain follows from agreement on infinitely many values (`cor-polynomials-over-an-infinite-domain-are-determined-by-values`, published) |
| 75 | CB-18 | a sign-reversing involution and its fixed-point count | that an involution partitions a finite set into fixed points and $2$-element orbits is a lemma, and it is what makes $\sum_{s\in S}\operatorname{sgn}(s) = \sum_{s\in\operatorname{Fix}}\operatorname{sgn}(s)$ true. Every determinant evaluation on the page spends it |
| 76 | CB-19 | the characteristic polynomial $\chi_P(t)$ of a graded poset | needs a rank function, i.e. `def-graded-poset-and-rank` (published), **and** a $\hat{0}$; the sum $\sum_{x} \mu(\hat{0},x)t^{\rho(x)}$ is over a finite poset. That $\chi_P$ is a polynomial is immediate here; that the chromatic polynomial of a graph **is** $\chi$ of its lattice of flats is the page's theorem, not its definition |
| 77 | CB-19 | the partition lattice $\Pi_n$ | that refinement is a partial order is one item; that $\Pi_n$ is a **lattice** — every pair has a meet and a join — is a second, and the join is the transitive closure of the union of the two partitions' relations, which needs proof |
| 78 | CB-20 | pattern containment and $\operatorname{Av}(\tau)$ | "$\sigma$ contains $\tau$" is the existence of an order-isomorphic subsequence; order-isomorphism of two finite sequences of distinct reals must be defined before "the pattern of a subsequence" has a referent |
| 79 | CB-x (extremal set theory) | the colex order and the compression $C_{ij}$ | colex is a linear order on $k$-sets — prove it is one; a compression is a map on families, and that it does not increase the shadow and terminates are two separate lemmas. Kruskal–Katona is unprovable without both |
| 80 | GT-9 | degeneracy $d(G)$ and the colouring number | $\max_{H\subseteq G}\delta(H)$ is a maximum over a **nonempty finite** set of subgraphs, so $G$ must be nonempty; the null graph is a stated boundary case, matching the published `def-proper-vertex-colouring-and-chromatic-number`, which fixes $\chi(\varnothing)=0$ |
| 81 | GT-9 | a $k$-critical graph | the definition is $\chi(G)=k$ and $\chi(G-e)<k$ for every edge; that a $k$-chromatic graph **contains** a $k$-critical subgraph is a theorem (take an edge-minimal one), and everything Dirac proves about critical graphs is vacuous without it |
| 82 | GT-10 | the chromatic **polynomial** $P(G,k)$ | that the number of proper $k$-colourings is a polynomial function of $k$ is deletion–contraction's content. The word is not licensed before it. Carried over from §8 #30, which was never discharged because the page was never built |
| 83 | GT-10 | the broken-circuit complex | **REVISED by the polynomial harvest, and the revision matters because the original phrasing demanded a proof of something that needs none.** Order-independence of the **coefficients** of $P(G,k)$ is *free*: the left-hand side of Whitney's theorem mentions no order at all, so equality with an order-dependent-looking right-hand side already delivers it. What is genuinely order-dependent is the **NBC complex itself**, and the obligation is the opposite one — the page must **not** claim the complex is order-independent. Separately, the definition of "broken circuit" carries a live convention split: T1 removes the **first** edge of a circuit, while T3, T6, T7 and T8 remove the **last**, and for a fixed order these are **not interchangeable**. Adopt the majority (last-edge) convention and state it at the definition |
| 84 | GT-10 | $P(G,-1)$ and acyclic orientations | evaluating a polynomial at a negative integer is legitimate because $P$ is a polynomial with integer coefficients (#82); Stanley's reciprocity theorem is then a statement about $(-1)^{n}P(G,-k)$, not a formal manipulation of a counting function |
| 85 | GT-11 | $\chi'(G)$ | the set of feasible $k$ is nonempty ($k=\lvert E\rvert$ works), so a least exists by `thm-well-ordering-principle` |
| 86 | GT-11 | the $\alpha\beta$-subgraph of a proper edge colouring | its components are **paths and even cycles** — a lemma, proved from the fact that each vertex meets at most one $\alpha$-edge and one $\beta$-edge — and only then is "swap the two colours on one component" a well-defined operation producing a proper colouring. This is the edge analogue of the published `lem-kempe-component-colour-swap` and a genuinely different statement (§19.2 F1) |
| 87 | GT-12 | the choice number $\operatorname{ch}(G)$ | the set of feasible $k$ is nonempty ($k=\lvert V\rvert$); and $\operatorname{ch}$ is defined by a quantifier over **all** list assignments of that size, so the definition ranges over a finite set of assignments only after the colour universe is fixed — fix it, or quantify over lists drawn from a fixed countable set and prove the value does not depend on the choice |
| 88 | GT-13 | a perfect graph | $\chi(H)=\omega(H)$ for **every induced subgraph** $H$, including $G$ itself and the null graph; cite `def-subgraph-induced-subgraph-and-spanning-subgraph`. The one-line trap is quantifying over subgraphs rather than induced subgraphs |
| 89 | GT-13 | the replication $G\circ v$ | replacing $v$ by two adjacent copies with the same outside neighbourhood is a construction whose result must be shown to be a graph with the intended $\omega$ and $\chi$; the replication lemma is what the weak perfect graph theorem's inductive step spends |
| 90 | GT-14 | a block, and the block–cut tree | "block" = maximal connected subgraph without a cut vertex; that the blocks of a graph **partition its edge set** is a theorem, and that the block–cut incidence graph is a **tree** is a second. The definite article in "the block tree" waits on both |
| 91 | GT-15 | a tree-decomposition and $\operatorname{tw}(G)$ | the width is $\max_t \lvert V_t\rvert - 1$ over a finite tree, and the treewidth is a minimum over a **nonempty** set of decompositions (the one-bag decomposition always exists); the $-1$ is a convention and must be labelled one, since it is what makes $\operatorname{tw}(\text{tree}) = 1$ |
| 92 | GT-16 | the deficiency $\operatorname{def}(G)=\max_S (o(G-S)-\lvert S\rvert)$ | $o(\cdot)$ counts odd components; the maximum is over a finite set and is attained at $S=\varnothing$ at worst, so it is $\ge 0$. Tutte–Berge is a statement about this maximum and needs it defined first |
| 93 | GT-17 | a matroid | give the independence axioms, then prove **all bases have the same size** before defining the rank function; $r(X)$ is otherwise not well defined. The circuit, basis, rank and closure axiomatisations are separate definitions and their equivalence is a numbered theorem, not an assertion of "the same thing in different language" |
| 94 | GT-17 | the dual matroid $M^*$ | that the complements of bases are the bases of a matroid is a theorem; $r^*(X) = \lvert X\rvert - r(M) + r(E\setminus X)$ follows and is not the definition |
| 95 | GT-18 | the Tutte polynomial $T(G;x,y)$ | **define it by the rank–nullity sum $\sum_{A\subseteq E}(x-1)^{r(E)-r(A)}(y-1)^{\lvert A\rvert-r(A)}$, which is manifestly well defined, and prove deletion–contraction as a theorem.** Defining it by the recursion first forces an independence-of-the-deletion-order obligation that is real work and that most textbooks wave through |
| 96 | GT-18 | a nowhere-zero $H$-flow | needs a fixed orientation, and the count must be shown **independent of the orientation chosen**; Tutte's theorem that the number depends only on $\lvert H\rvert$ and not on the group is the page's landmark and it presupposes this |
| 97 | GT-19 | $\varepsilon$-regularity, an equitable partition, and the index/energy | density $d(X,Y)=e(X,Y)/(\lvert X\rvert\lvert Y\rvert)$ needs $X,Y$ nonempty; the energy $q(\mathcal{P})=\sum \frac{\lvert V_i\rvert\lvert V_j\rvert}{n^2}d(V_i,V_j)^2$ is a finite sum bounded by $1$ — that bound is what makes the iteration terminate, and it is a numbered item, not an observation |
| 98 | GT-19 | the regularity lemma's $M(\varepsilon)$ | the statement is "there is $M$ such that every graph admits an $\varepsilon$-regular equitable partition into at most $M$ parts"; $M$ is produced by the energy iteration and the tower bound is a **separate**, stated fact. Do not write "the" $M(\varepsilon)$ without a least-witness argument |
| 99 | GT-21 | the edge expansion $h(G)$ and $\lambda_2$ | $h(G)=\min_{0<\lvert S\rvert\le n/2} e(S,\bar S)/\lvert S\rvert$ — a minimum over a nonempty finite set; $\lambda_2$ needs the eigenvalues ordered, i.e. the spectral theorem, exactly as §8 #31 said |
| 100 | GT-7a | the spectrum of a graph | §8 #31, restated because the page is still unbuilt: the eigenvalues are real by the spectral theorem for real symmetric matrices, and only then can they be listed in order |
| 101 | GT-7a | "**the** cofactor" in the matrix-tree theorem | §8 #32, and now with a prerequisite that did not exist when it was written: the determinant page has **no cofactor expansion at all** (§19.2 F2), so the page must first define the $(i,j)$ minor and cofactor and prove the Laplace expansion, then prove all cofactors of $L$ are equal |
| 102 | GT-7b | a strongly regular graph, and its eigenvalue multiplicities | the parameters $(n,k,\lambda,\mu)$ determine the eigenvalues; the multiplicities are given by a formula that must be a **nonnegative integer**, and that integrality is the feasibility condition — so the multiplicities are computed before any parameter set is called feasible |
| 103 | CB-13 | VC dimension and shattering | the set of shattered subsets is nonempty ($\varnothing$ is shattered) and finite, so a maximum exists; $\operatorname{VC}(\mathcal{F})=0$ for a one-element family is the boundary case |
| 104 | CB-14 | the replication number $r$ and block count $b$ of a $2$-$(v,k,\lambda)$ design | §8's row said this and it stands: **$r$ is constant is a THEOREM**, proved by double counting flags through a fixed point, and $b$ follows. A definition that stipulates them stipulates something provable |
| 105 | CB-14 | the order of a finite projective plane | that every line has the same number of points is a theorem, proved by exhibiting a bijection between two lines through a point off both; "the order $n$" is illegitimate until it is proved |
| 106 | CB-25 | Shannon entropy $H(X)$ on a finite space | $-\sum_x p(x)\log p(x)$ with the stipulation $0\log 0 = 0$, which is a convention and must be labelled one; it is a finite sum of reals and needs `def-natural-logarithm`. Every bound on the page is Jensen applied to a convex function, so `thm-finite-jensen-inequality` is a declared dependency |
| 107 | CB-26 | the discrepancy $\operatorname{disc}(\mathcal{F})$ | a minimum over the finite set of $\pm1$ colourings of a maximum over a finite family — both attained, and the order of the quantifiers is the definition |
| 108 | CB-27 | the Fourier transform on $\mathbb{F}_p^n$ | $\hat f(r) = p^{-n}\sum_x f(x)\omega^{-r\cdot x}$ with $\omega$ a primitive $p$-th root of unity: **the choice of $\omega$ must be fixed once**, cite `thm-complex-nth-roots-and-roots-of-unity`, and character orthogonality is proved from `cor-sum-of-roots-of-unity`, not assumed |
| 109 | CB-28 | the slice rank of $F:A^3\to\mathbb{F}$ | the set of representations of $F$ as a sum of slice-rank-one functions is nonempty (the trivial one has $\lvert A\rvert$ terms), so a least $k$ exists by `thm-well-ordering-principle`. Every step of Ellenberg–Gijswijt is a bound on this minimum |

---

# 21. The choice ledger, extended and corrected

The library states choice costs in the Statement itself. §7's table is corrected
here where the build overtook it (§18.2 S3, S4) and extended to the new material.
**Pages are relative labels; no order is quoted.**

## 21.1 Corrections to §7

| result | §7 said | disk says | disposition |
|---|---|---|---|
| infinite Ramsey theorem on $\mathbb{N}$ | **DC** | `thm-infinite-ramsey-on-the-naturals` is titled "**in ZF**" and is published | §7's row is wrong. The published route fixes a linear order on each successor set, which makes the branch canonical and spends no choice. Any new statement about infinite Ramsey cites the published item and repeats **ZF** |
| König's lemma | **DC** | `thm-konig-infinity-lemma-for-ordered-trees`, "**in ZF**", published | same. The **ordered** hypothesis is what buys it; a version for unordered finitely branching trees does need a choice principle and must not be conflated with the published one |
| infinite Hall / marriage theorem | **BPI** via Rado selection | not built; `matchings-covers-menger-and-network-flows` deferred it and recorded that the source pass "did not license the prose scaffold's exact BPI claim" | §7's row is **unlicensed** and is withdrawn. §24 GT-16 replaces it with two results that do close: the **countable** locally finite case from the published ZF König's lemma, and the general family-of-finite-sets case with **BPI named in the Statement** and the exact reversal explicitly not claimed |
| De Bruijn–Erdős | **BPI**, via the published `thm-ultrafilter-lemma` | never built | stands, and is now scaffolded on §24 GT-9. Läuchli's equivalence with BPI over ZF is a **separate** claim; state the implication the proof gives and do not assert the reversal without a source |

## 21.2 New rows

| result | page | cost | note |
|---|---|---|---|
| the whole symbolic method: classes, $\operatorname{SEQ}$, $\operatorname{MSET}$, $\operatorname{PSET}$, $\operatorname{CYC}$, recursive specifications | CB-15 | **none** | every level is finite and every sum is a finite sum; the $x$-adic fixed point is constructed, not chosen |
| permutation statistics, $q$-analogues, partition identities, the twelvefold way, rook polynomials, LGV, the involution principle | CB-16…CB-19 | **none** | finite objects throughout |
| Kruskal–Katona, compressions, the four functions theorem, Harris/FKG, Kleitman | CB-x | **none** | finite lattices; the four functions theorem is an induction on $n$ |
| Brooks, Vizing, König edge colouring, the chromatic polynomial, Gallai–Roy, Mycielski, critical graphs | GT-9…GT-11 | **none** | finite graphs |
| **De Bruijn–Erdős** ($\chi(G)\le k$ iff every finite subgraph has $\chi \le k$) | GT-9 | **BPI**, via the published `thm-ultrafilter-lemma` | named in the Statement. This is the only infinite statement on its page and the finiteness convention of `rem-finite-simple-graph-convention` is explicitly suspended in it |
| the list-colouring compactness analogue ($\operatorname{ch}$ of an infinite graph) | GT-12 | **BPI** | same route; state it, or omit the infinite case entirely — do not prove it silently |
| perfect graphs, chordal graphs, the weak perfect graph theorem | GT-13 | **none** | finite; Gasparian's rank argument is linear algebra over $\mathbb{R}$ |
| blocks, ear decompositions, Tutte's wheel theorem, Mader, tree-decompositions, brambles | GT-14, GT-15 | **none** | finite |
| **the countable infinite marriage theorem** for a locally finite bipartite graph | GT-16 | **none — ZF** | via the published ZF König's lemma on the tree of partial matchings. This is the form the library can prove choice-free, and it is why it is scaffolded first |
| **the marriage theorem for an arbitrary family of finite sets** | GT-16 | **BPI** | the Rado selection route through `thm-ultrafilter-lemma`. Name BPI in the Statement; do **not** claim the converse, and do not claim it for families of infinite sets — that is false and the correct statement (Aharoni) stays denied |
| **Kruskal's tree theorem** (finite trees are well-quasi-ordered under topological minors) | GT-15 | **DC** | Nash-Williams' minimal bad sequence argument constructs an infinite descending selection; that is a dependent choice and the Statement says so. If the authoring agent finds a choice-free route it may state ZF instead, but it must not guess |
| **the graph minor theorem** | — | — | denied (§29); statement only |
| **the Rado graph**: explicit construction, the extension property, uniqueness, homogeneity, universality | GT-20 | **none — ZF** | the construction is the BIT predicate on $\mathbb{N}$; uniqueness is back-and-forth on a countable set, which needs no choice because the enumeration is given. Universality for **countable** graphs likewise. The statement "$G(\mathbb{N},1/2)$ is a.s. isomorphic to it" needs a measure and stays out (§18.2 S5) |
| every infinite connected graph has a spanning tree | — | **AC** (equivalent) | **not used**, and recorded so no proof quietly leans on it |
| the regularity lemma, removal lemmas, Roth via removal | GT-19 | **none** | every object is a finite graph; the iteration terminates by the energy bound |
| finite probability, martingale concentration, entropy, discrepancy, derandomization | CB-25, CB-26 | **none** | finite spaces throughout; expectation and entropy are finite sums |
| finite Fourier analysis, Roth in $\mathbb{F}_p^n$ and in $\mathbb{Z}/N\mathbb{Z}$, cap sets, Behrend, Ruzsa–Plünnecke | CB-27, CB-28 | **none** | finite abelian groups and finite-dimensional vector spaces |
| linear-algebra methods, designs, projective planes, spectral graph theory | CB-13, CB-14, GT-7a/b | **none** | finite dimensions; `thm-any-two-finite-bases-have-the-same-size` is the finite statement, never the Zorn one |
| **Perron–Frobenius for an irreducible nonnegative matrix** | GT-7a | **none** | via Collatz–Wielandt and the attainment of an extremum on the standard simplex, which is closed and bounded in $\mathbb{R}^n$: cite `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`. **No fixed-point theorem**, which matters because Brouwer in dimension $\ge 2$ is deferred (`DEFERRED.md` §4) |

A `rem-choice-ledger`-style remark, in the style of the published one, is
**required** on GT-9 (De Bruijn–Erdős), GT-15 (Kruskal's tree theorem) and GT-16
(the two marriage theorems), and on GT-20 (the Rado graph), whose whole point is
that a "random" object is constructed in ZF.

---

# 22. The enumerative block

Format follows §11: **anchor** (the page id this pair sits immediately after),
`requires` as page ids, then DEFS / THMS / FS / B / CEX, then traps. Item ids are
suggestions except where a §8 or §20 row fixes one. Every A page has its
`-examples` companion; **B pages are leaves**, so every witness a later page needs
is called out here and homed on an A page. Target 25–45 A-items, hard ceiling 60
(§18.2 S13).

Sources are keyed to the harvest: **S1** Stanley EC1 (author-hosted,
`https://math.mit.edu/~rstan/ec/ec1.pdf`), **S2** Flajolet–Sedgewick
(`https://ac.cs.princeton.edu/home/AC.pdf`), **S3** Sagan *Combinatorics: The Art
of Counting*, **S4** Wilf *generatingfunctionology*, **S5** Cameron LTCC
*Enumerative Combinatorics*, **S6** Postnikov/Dillon survey, **S7** de Mier
Oxford notes, **S8** Grinberg class notes. Full ledger and verbatim headings:
`research/subjects-01-combinatorics-harvest-enumerative.md`.

---

## CB-15 (NEW). Combinatorial Classes and the Symbolic Method

**Anchor:** immediately after `formal-power-series-examples`.
`requires`: `formal-power-series`, `finite-counting-and-binomial-coefficients`,
`congruences-and-the-chinese-remainder-theorem` (Euler's totient, for the cycle
construction), `group-actions-and-cayleys-theorem` (orbits, for the cycle
construction).

This page is why the rest of the enumerative block is short. Flajolet–Sedgewick's
Preface says it in one sentence — *"a collection of general (and simple) theorems
provide a systematic translation mechanism between combinatorial constructions
and operations on generating functions. **This translation process is a purely
formal one.**"* — and their Part A / Part B boundary is exactly the library's
formal/analytic seam (§9 denial 1). Everything here is Part A.

The page also pays a debt the authored `formal-power-series` page left open: it
has summability, the $x$-adic topology and completeness, and nothing that uses
them. This is what uses them.

DEFS: a **combinatorial class** $(\mathcal{A},\lvert\cdot\rvert)$ with every level
finite (#63); the counting sequence and the **ordinary generating function**
$A(x)=\sum a_nx^n \in \mathbb{Z}[[x]]$; isomorphism of classes as a
size-preserving bijection; the neutral class $\mathcal{E}$ and the atomic class
$\mathcal{Z}$; disjoint union and Cartesian product; $\operatorname{SEQ}$ (#64);
multisets over a class, $\operatorname{MSET}$ and $\operatorname{PSET}$ (#66);
$\operatorname{CYC}$ as an orbit class of the cyclic shift (#67); substitution
$\mathcal{A}\circ\mathcal{B}$; pointing $\Theta\mathcal{A}$; a **combinatorial
specification** and a recursive specification (#68).

THMS: **the sum and product rules** $A+B$ and $AB$, each proved from
`thm-sum-rule` / `thm-product-rule` and the convolution of
`def-formal-power-series-and-coefficient-extraction`; **the sequence theorem**
$\operatorname{SEQ}(\mathcal{B}) \Rightarrow 1/(1-B(x))$, whose two hypotheses are
#65 (landmark); **the multiset theorem** in the product form
$\prod_{n\ge1}(1-x^n)^{-b_n}$ over any commutative ring, and the
$\exp\bigl(\sum_{k\ge1}B(x^k)/k\bigr)$ form **over a $\mathbb{Q}$-algebra**, as a
separate statement with the hypothesis at the statement; **the powerset theorem**
$\prod_{n\ge1}(1+x^n)^{b_n}$ and its $\exp$ form; **the cycle theorem**
$\sum_{k\ge1}\frac{\varphi(k)}{k}\log\frac{1}{1-B(x^k)}$ over a
$\mathbb{Q}$-algebra, whose proof is Burnside's lemma applied to the cyclic
group — the citation of the published `thm-cauchy-frobenius-orbit-counting` that
makes this page a genuine seam rather than a restatement; **substitution**
$\mathcal{A}\circ\mathcal{B}\Rightarrow A(B(x))$ when $b_0=0$, citing the
published `thm-formal-composition-laws`; **pointing** $\Theta A(x)=xA'(x)$;
**the fixed-point theorem for recursive specifications** (landmark, #68): a
specification whose right side raises order has a unique solution in $R[[x]]$,
by the published `thm-x-adic-completeness-and-polynomial-density`.

Immediate consequences, each a numbered corollary rather than an exercise:
binary words and $1/(1-2x)$; **compositions of an integer** as
$\operatorname{SEQ}(\operatorname{SEQ}_{\ge1}(\mathcal{Z}))$, recovering
$2^{n-1}$ and, with $k$ parts, the published `thm-stars-and-bars`;
**partitions of an integer** as $\operatorname{MSET}(\operatorname{SEQ}_{\ge1}
(\mathcal{Z}))$, giving Euler's product $\prod(1-x^k)^{-1}$ **as a corollary of
the multiset theorem** rather than as a fresh summability argument on CB-8;
**plane trees** $\mathcal{G}=\mathcal{Z}\times\operatorname{SEQ}(\mathcal{G})$ and
**binary trees** $\mathcal{B}=\mathcal{E}+\mathcal{Z}\times\mathcal{B}^2$, both
legitimate by the fixed-point theorem, handing CB-6 its Catalan equation with the
existence question already settled; **necklaces** as
$\operatorname{CYC}$ of a finite alphabet, with the count
$\frac1n\sum_{d\mid n}\varphi(d)m^{n/d}$.

FS: $\operatorname{SEQ}(\mathcal{B})$ is a combinatorial class for every
$\mathcal{B}$ (refuted by any $\mathcal{B}$ with an object of size $0$ — the
witness that makes #64 a real hypothesis); the OGF of $\mathcal{A}\times
\mathcal{B}$ is $A(x)B(x)$ when the product is not disjoint, i.e. when the pair
is not determined by its two components; $\prod_{n\ge1}(1-x^n)^{-b_n}$ is defined
for every sequence $(b_n)$ (refuted by summability); every class is specified by
a finite specification.

B: the constructions run on binary sequences, compositions, partitions into parts
$\le 3$, plane trees with $\le 4$ nodes, necklaces of length $6$ in $2$ colours
computed both by $\operatorname{CYC}$ and by the published Burnside lemma with an
agreement note; a specification solved by iterating truncations to order $6$,
exhibiting the $x$-adic convergence concretely.

CEX: a "class" whose level $\mathcal{A}_2$ is infinite, so no OGF exists; two
non-isomorphic classes with the same OGF (the counting sequence forgets
structure — the item CB-20 will want).

Traps. (i) **Every construction carries a hypothesis and the hypothesis is the
content.** $b_0=0$ for $\operatorname{SEQ}$, $\operatorname{MSET}$,
$\operatorname{CYC}$ and substitution; a $\mathbb{Q}$-algebra for every $\exp$ or
$\log$ form. Stating the $\exp$ form over $\mathbb{Z}$ is the page's one fatal
temptation. (ii) **The labelled/EGF half of the symbolic method is NOT here** —
it is on CB-7, which already owns exponential generating functions. Do not
duplicate the table. (iii) F&S §V.6 is titled "Transfer matrix models" and §V.3
"Regular specifications and languages", and both sit in **Part B**; a scaffolder
who greps F&S for "transfer matrix" imports complex asymptotics. The formal
transfer-matrix theory is Stanley §4.7 and belongs to CB-5. (iv) Nothing on this
page is analytic; no radius of convergence enters any proof.

Forward references: NONE.

---

## CB-5 (ENRICHED). Linear Recurrences, Rational Generating Functions and the Transfer-Matrix Method

**Anchor:** `linear-recurrences-and-rational-generating-functions`, scaffolded by
`frontier-13` batch 7 (2026-08-15) at orders 195/196, A 32 / B 15, no split
proposed, and unauthored. Retitled to name the transfer-matrix method, which the
2026-07-28 inventory did not carry.
`requires` (live in `plan-spec.json`): `formal-power-series`,
`eigenvalues-eigenvectors-and-the-characteristic-polynomial`, `splitting-fields`,
`the-field-of-fractions-and-localisation` — the last added as `frontier-13` R7.1,
for `cor-rational-function-field-as-a-fraction-field`, which is what lets a
rational series be *defined* rather than gestured at. CB-15 and
`determinants-of-matrices-over-a-commutative-ring` are reached transitively and
are not declared directly.

Kept from §11: the recurrence $\iff$ rational GF equivalence, partial fractions
over a splitting field, the closed form with polynomial factors at repeated
roots, the companion-matrix dictionary, Fibonacci and Lucas, the Cayley–Hamilton
reading, closure of rational series under sum and product.

**Added.** **The transfer-matrix theorem** (S1 Theorem 4.7.2, landmark): for a
finite digraph with edge weights in a commutative ring and adjacency matrix $A$,
$\sum_{n\ge0}(A^n)_{uv}x^n$ is the rational function
$(-1)^{u+v}\det(I-xA : v,u)/\det(I-xA)$, and the trace form
$\sum_n \operatorname{tr}(A^n)x^n$ likewise. The proof is *formal*: $I - xA$ is
invertible in $M_p(R[[x]])$ because $xA$ has positive order, so no spectral
radius and no convergence hypothesis appears (harvest §E2(7)). **This is the
theorem that makes "count the walks / count the words avoiding a pattern /
count the tilings" a theorem rather than a technique**, and it is the single
largest addition to this page. It needs the cofactor/adjugate machinery, and
**that question is settled: the machinery is already published and this page
cites it** (`frontier-13` D7.1, 2026-08-15). `thm-laplace-cofactor-expansion`,
`def-matrix-minors-cofactors-and-adjugate`,
`thm-adjugate-identity-over-a-commutative-ring` and `cor-inverse-matrix-by-adjugate`
are homed on `the-determinant-of-a-linear-operator`, which is inside the live
closure; §19.2 F2's claim that the determinant page does not have them is stale,
and nothing is minted here. Also added: the transfer-matrix count of
binary words avoiding a fixed factor, the Fibonacci tiling model as its smallest
instance, and the **Hadamard product** of rational series is rational.

The equivalence "rational $\iff$ linear recurrence" is proved by S1's
**dimension count of four vector spaces**, not by partial fractions, with the
partial-fraction closed form as the separate consequence: the two are different
statements and only the first is convention-free.

Traps, kept and added. (i) Name the splitting field in the Statement; do not
assume $\mathbb{R}$ or $\mathbb{C}$. (ii) Fix the reciprocal-root convention
$Q(x)=\prod(1-\lambda_ix)$ in a `rem-` and cite it everywhere. (iii) Nothing here
is asymptotic. (iv) **New:** S1's Corollary 4.7.3 states the eigenvalue form of
the transfer-matrix result and that one *does* touch algebraic closure; keep the
cofactor form as primary and state the eigenvalue form with its hypothesis.

---

## CB-6 (ENRICHED). Lattice Paths, the Cycle Lemma and Catalan Numbers

**Anchor:** `lattice-paths-and-catalan-numbers` (planned, unauthored).
`requires`: CB-5, `formal-power-series`, CB-15,
`symmetric-groups-and-the-sign-homomorphism` (the sign, for LGV),
`determinants-of-matrices-over-a-commutative-ring`.

Kept from §11: lattice and Dyck paths, $C_n$ **defined as a count** (#16), the
reflection principle as a bijection, the ballot problem, the cycle lemma, the
generating-function route using the published
`cor-unique-formal-root-with-constant-one`, the Catalan recurrence, three proved
bijections, $\binom{2n}{n}-\binom{2n}{n+1}=C_n$.

**Added, and one recommendation reversed.**
- **Lindström–Gessel–Viennot is KEPT HERE**, against §11's recommendation to drop
  it. §11 argued it "duplicates a determinant argument better placed at 209";
  that is wrong on two counts. Its proof is a **sign-reversing involution on
  intersecting path tuples**, which is combinatorics and not linear algebra; and
  its consumers — the Hankel determinants of the Catalan numbers, the
  Lindström–Gessel–Viennot form of the matrix-tree theorem, MacMahon's box
  formula — are spread across three later pages, so a lattice-path home is the
  one that serves them all. S1 Theorem 2.7.1 and S3 Theorem 2.5.4 are the two
  independent treatments. It brings the sign-reversing-involution lemma (#75)
  with it, which CB-18 then reuses.
- **The Chung–Feller theorem** (the number of paths with exactly $k$ steps above
  the axis is independent of $k$) — a cycle-lemma corollary, cheap and striking.
- **Narayana numbers**, the Catalan triangle, and the refinement of $C_n$ by peaks.
- **Motzkin and Schröder numbers** via CB-15 specifications, with their algebraic
  equations solved by the fixed-point theorem.
- Two further Catalan bijections — **triangulations of a polygon** and
  **non-crossing partitions** — proved, not asserted; non-crossing partitions
  are the object CB-19 wants for $\Pi_n$ and CB-20 for pattern classes, so they
  are **A-page** definitions.
- **The Hankel determinant** $\det(C_{i+j})_{0\le i,j\le n-1}=1$ by LGV.

Traps: §11's three stand. Added: (iv) the cycle lemma's orientation — F&S cut
after the **left-most** minimum, Postnikov/Dillon select the leftmost lowest
point after the $i$-th down step; these are the same lemma but a page that mixes
them gets a $1$-to-$\nu$ bijection pointing the wrong way. Fix the convention in
a `rem-` and cite Dershowitz–Zaks. (v) The published
`ex-lagrange-inversion-catalan-coefficients` lives on `formal-power-series-examples`,
a **B page and therefore a leaf**: this page may not cite it, and must derive
what it needs from `thm-lagrange-burmann-inversion` on the A page.

---

## CB-16 (NEW). Permutation Statistics, Inversions and Eulerian Numbers

**Anchor:** immediately after CB-6.
`requires`: `symmetric-groups-and-the-sign-homomorphism`, CB-15,
`formal-power-series`, `finite-counting-and-binomial-coefficients`.

The library has the symmetric group, disjoint cycle decomposition, cycle type,
the inversion number and the sign, and no statistic beyond them. This page is the
enumerative theory of $S_n$ that everything $q$-analogous rests on.

DEFS: the descent set, $\operatorname{des}$, $\operatorname{maj}$,
$\operatorname{exc}$, $\operatorname{fix}$ (#69), with the **required dictionary
item** recording that $\operatorname{inv}$ is the published
`def-inversions-inversion-number-and-sign` and is not re-minted; the Eulerian
number $A(n,k)$ (#70); the $q$-integer, $q$-factorial and $q$-multinomial (#70);
the code (Lehmer code) of a permutation; the weak order and the Bruhat order as
partial orders on $S_n$ (definitions, for CB-19).

THMS: the Lehmer code is a **bijection** $S_n\to\prod_{i}\{0,\dots,i\}$, hence
$\lvert S_n\rvert=n!$ recomputed and $\sum_\sigma q^{\operatorname{inv}\sigma} =
[n]_q!$ (**MacMahon**, landmark); $\operatorname{maj}$ is **equidistributed** with
$\operatorname{inv}$, proved by **Foata's bijection**, which is constructed and
proved bijective rather than described; the Eulerian recurrence
$A(n,k)=(k+1)A(n-1,k)+(n-k)A(n-1,k-1)$; **Worpitzky's identity**
$x^n=\sum_k A(n,k)\binom{x+k}{n}$; the exponential generating function
$\sum_n A_n(t)x^n/n! = \frac{t-1}{t-e^{(t-1)x}}$ over a $\mathbb{Q}$-algebra;
the symmetry $A(n,k)=A(n,n-1-k)$; $\operatorname{des}$ and $\operatorname{exc}$
are equidistributed (the second Eulerian statistic, by a bijection);
the number of permutations by cycle type is $n!/\prod k^{m_k}m_k!$, which is the
**cycle-index input CB-10 needs and is homed here so CB-10 can cite it**;
the transition matrix between $x^{\underline{n}}$ and $x^n$ is the Stirling
matrix, stated here and proved on CB-7 with an agreement remark; **the
number of alternating permutations** and its EGF $\sec x+\tan x$ — kept only if
the page stays under the cap, since it needs the formal trigonometric series.

FS: $\operatorname{maj}$ and $\operatorname{inv}$ agree permutation by
permutation (they are equidistributed, not equal — the sharpest false statement
available here, refuted by a concrete $\sigma\in S_3$); the Eulerian numbers count
permutations with $k$ **ascents** under the same recurrence; every statistic
equidistributed with $\operatorname{inv}$ is a Mahonian statistic by definition
(it is a definition, so this is a category error and belongs in a Remark, **not**
an `fs-` — recorded so no scaffolder plants it).

B: $S_3$ and $S_4$ tabulated by $\operatorname{inv}$, $\operatorname{des}$,
$\operatorname{maj}$; Foata's bijection run on a concrete $\sigma\in S_5$;
$[4]_q!$ expanded and matched against the inversion table; $A(4,k)$ computed
three ways.

CEX: two permutations with the same descent set and different inversion numbers;
a statistic that is equidistributed with $\operatorname{des}$ but not with
$\operatorname{inv}$.

Traps. (i) The published inversion definition fixes an orientation ($i<j$ and
$\sigma(i)>\sigma(j)$); every new statistic is stated against it and the
dictionary item is mandatory (#69). (ii) $q$-analogues here are polynomials in
$\mathbb{Z}[q]$; the $q\to1$ specialisation is evaluation at $1$, not a limit.
(iii) Foata's bijection is defined by a case-split recursion and each case is a
numbered step; "the first-letter transformation" is not a proof.

---

## CB-7 (ENRICHED). Set Partitions, Stirling Numbers and Exponential Generating Functions

**Anchor:** `set-partitions-stirling-numbers-and-exponential-generating-functions`
(planned, unauthored).
`requires`: CB-16, `inclusion-exclusion-and-the-pigeonhole-principle`, CB-15,
`the-exponential-function` (for Dobinski only — see below),
`matrices-and-the-matrix-of-a-linear-map`.

Kept from §11: set partitions and blocks, $S(n,k)$ (#17), $B_n$, the unsigned and
signed first-kind numbers, the rising factorial, the EGF over a
$\mathbb{Q}$-algebra (#18), the recurrences, $x^n=\sum_kS(n,k)x^{\underline{k}}$
and the inverse relation, the explicit sieve formula for $S(n,k)$ from the
published `thm-the-number-of-surjections`, $\sum_k c(n,k)x^k=x^{\overline{n}}$,
the EGF product rule, the exponential formula, $\sum_nS(n,k)x^n/n!=(e^x-1)^k/k!$.

**Added.**
- **The labelled half of the symbolic method** (S2 Ch. II), which CB-15
  deliberately left here: labelled classes; the **labelled product** $\star$ by
  order-consistent relabelling, with the count $\binom{n}{k}$ of label
  distributions as its content; $\operatorname{SEQ}$, $\operatorname{SET}$ and
  $\operatorname{CYC}$ for labelled classes and their EGF images
  $1/(1-A)$, $\exp A$, $\log\frac1{1-A}$; the boxed product. The **exponential
  formula becomes the $\operatorname{SET}$ construction**, and the EGF of
  permutations by cycle type becomes $\exp\bigl(\sum_k A_k(x)/k\bigr)$. Every one
  of these needs a $\mathbb{Q}$-algebra and says so at the statement — this is a
  genuine mathematical difference from CB-15's table, not a presentational one.
- **Dobinski's formula** $B_n=e^{-1}\sum_{\ell\ge0}\ell^n/\ell!$ — **restored**
  from §11's drop. §11 dropped it as "an infinite series of reals … analysis this
  page deliberately does not use", but this page sits above
  `the-exponential-function` and the library has absolute convergence and the
  Cauchy product. The formula is stated **in $\mathbb{R}$**, proved by absolute
  convergence, and accompanied by a Remark recording that the *formal*
  manipulation $e^{e^z}=\sum_\ell e^{\ell z}/\ell!$ is illegal in $\mathbb{R}[[z]]$
  — Stanley's Example 1.1.7 is exactly this warning, and the contrast is the
  item's value. **Authoring check:** confirm on disk that rearrangement of an
  absolutely convergent double series is available on a page below this one; if
  it is not, drop Dobinski with a note naming the missing lemma rather than
  proving it in passing.
- The **involution numbers** and their EGF $\exp(x+x^2/2)$; the **ordered Bell
  (Fubini) numbers** and their EGF $1/(2-e^x)$; **Lah numbers**; the number of
  set partitions with all blocks of size $\ge 2$.
- **Touchard's congruence** $B_{p+n}\equiv B_n+B_{n+1} \pmod p$, citing the
  published congruence machinery — a cheap, striking corollary of the recurrence.

Traps. (i) §11's Stirling notation trap is sharper than it looked: the harvest
records that $S(n,k)$ and $c(n,k)$ are **not** inverse matrices — $S$ and the
*signed* $s$ are. A page adopting Knuth's signless brackets $\genfrac[]{0pt}{}{n}{k}$
must still carry a signed symbol for the inversion theorem or state it with an
explicit $(-1)^{n-k}$. Fix the convention in a `rem-` and cite it. (ii) The
$\mathbb{Q}$-algebra hypothesis appears at the definition. (iii) The exponential
formula is proved **formally**; Dobinski is the page's one deliberately analytic
item and is labelled as such in its own Remark.

---

## CB-8 (ENRICHED). Integer Partitions and the Twelvefold Way

**Anchor:** `integer-partitions-and-the-twelvefold-way` (planned, unauthored).
`requires`: CB-7, `formal-power-series`, CB-15.

Kept from §11 in full: partitions, Ferrers diagrams, conjugation, $p(n)$ (#19),
$p(n,k)$, restricted partitions, Euler's product (#20) — **now a corollary of
CB-15's multiset theorem, with the direct summability proof kept as the second
route and an agreement remark** — distinct $=$ odd proved twice, the pentagonal
number theorem by Franklin's involution, the resulting recurrence, and the
twelvefold way as one theorem with twelve numbered clauses.

**Added.** The **Durfee square** identity $\sum_n p(n)x^n =
\sum_{k\ge0}\frac{x^{k^2}}{\prod_{i\le k}(1-x^i)^2}$; **self-conjugate partitions
$=$ partitions into distinct odd parts**, by a diagram bijection; the
**Rogers–Ramanujan-adjacent** counts $p(n\mid \text{parts} \equiv \pm1 \bmod 5)$
stated here and proved on CB-17; the recurrence $p(n,k)=p(n-1,k-1)+p(n-k,k)$ and
the **partitions-in-a-box** count, which is CB-17's Gaussian binomial;
**Ramanujan's congruence $p(5n+4)\equiv0\pmod5$**, proved from the pentagonal
number theorem and an elementary series manipulation in $\mathbb{Z}[[q]]$ —
the page's capstone, and dropped with a note if the manipulation cannot be
written in bounded numbered steps.

Traps: §11's three stand. Added: (iv) the twelvefold way's twelve cells are
stated against **one** fixed reading of "composition" and "weak composition" —
composition means positive parts — and against one fixed reading of which of
$n,k$ is the domain. The harvest records that "$n$ balls into $k$ boxes" is the
**inverse** of "$f : D\to R$ with $\lvert D\rvert=n$", and a source read the
wrong way transposes the table. Fix both conventions in the definition and cite
them from every clause.

---

## CB-17 (NEW). $q$-Analogues, Gaussian Binomial Coefficients and Partition Identities

**Anchor:** immediately after CB-8.
`requires`: CB-8, CB-16, `formal-power-series`,
`algebraic-extensions-degree-and-finite-fields` (for the subspace theorem only).

DEFS: the Gaussian binomial coefficient (#71); the $q$-Pochhammer symbols
$(a;q)_n$ and $(a;q)_\infty$; the bivariate ring of §20 #72; a formal limit of
polynomials (#73).

THMS: the **$q$-Pascal recurrences** in both forms, hence **integrality** of
$\binom{n}{k}_q$ (#71, landmark — the exact shape of the order-20 integrality
argument, one $q$ later); $\binom{n}{k}_q$ is the generating function for
partitions fitting in a $k\times(n-k)$ box, giving CB-8's box count; **the
subspace theorem** $\binom{n}{k}_q=\#\{k\text{-dimensional subspaces of }
\mathbb{F}_q^n\}$ for a prime power $q$ (landmark — the convention anchor, and
the item CB-19 cites for $\mu(L_n(q))$); **the $q$-binomial theorem**
$\prod_{i=0}^{n-1}(1+xq^i)=\sum_k q^{\binom{k}{2}}\binom{n}{k}_qx^k$; **Euler's
two $q$-exponentials** and the identities $\prod(1-xq^i)^{-1}=\sum
\frac{x^n}{(q;q)_n}$ and $\prod(1+xq^i)=\sum\frac{q^{\binom n2}x^n}{(q;q)_n}$;
**the Jacobi triple product** (landmark), proved in the bivariate ring of #72 by
Cameron's state-counting argument, with **the pentagonal number theorem
recovered as a specialisation** and an agreement remark against CB-8's Franklin
involution; the **finite Rogers–Ramanujan identities** (Schur's polynomial
recurrence) and the two **Rogers–Ramanujan identities** obtained as their formal
limit (#73).

**Rogers–Ramanujan is the page's declared size and difficulty risk.** Stanley
states plainly that no known bijective proof is simple; the route here is
$q$-difference equations on the Schur polynomials, which is bounded but long.
**If it cannot be written in bounded numbered steps, it drops to the finite
identities plus a `deferred` note naming Andrews, *The Theory of Partitions*, as
the source a later page must open** — the harvest flags Andrews as the source to
add for exactly this, and none of the eight sources obtained carries a proof.

FS: $\binom{n}{k}_q$ is a rational function and not a polynomial (refuted by
#71); the $q$-binomial theorem holds with $x$ and $q$ interchanged; every
$q$-analogue specialises at $q=1$ to its classical counterpart (a false general
claim — exhibit one that does not).

B: $\binom{4}{2}_q$ expanded and matched against both the box partitions and the
$2$-subspaces of $\mathbb{F}_2^4$; the triple product truncated and checked to
order $6$; the first Rogers–Ramanujan identity verified to $n=10$.

CEX: a $q$-identity that fails at $q=0$; two partitions counted by the same
Gaussian coefficient under different box shapes.

Traps. (i) #72 is the page's legitimacy: the two-variable ring is minted with its
support condition or the triple product is not a statement. (ii) Define
$\binom{n}{k}_q$ by the $q$-integer quotient and state the subspace theorem
immediately, so convention drift is detectable. (iii) The finite fields this page
cites are **planned and unauthored**; the subspace theorem is the only item that
needs them, so if that page slips, the theorem moves and the rest of the page
does not.

---

## CB-18 (NEW). Sieve Methods: Restricted Position, Rook Polynomials and the Involution Principle

**Anchor:** immediately after `incidence-algebras-and-mobius-inversion-examples`.
`requires`: `incidence-algebras-and-mobius-inversion`,
`inclusion-exclusion-and-the-pigeonhole-principle`, CB-16,
`determinants-of-matrices-over-a-commutative-ring`, CB-6 (the sign-reversing
involution lemma).

Stanley EC1 chapter 2 is the one chapter of the four with no page in the library
at all: `incidence-algebras-and-mobius-inversion` covers §3.6–3.9, and §2.2–2.7
— restricted position, rook polynomials, Ferrers boards, V-partitions, the
involution principle, determinants — is untouched.

DEFS: the operator form of the sieve, $\varphi f(T)=\sum_{Y\supseteq T}f(Y)$ on
the $2^n$-dimensional space of functions $2^S\to K$ (S1 2.1.1); a board
$B\subseteq[n]\times[n]$, non-attacking rook placements, the rook numbers
$r_k(B)$ and the hit polynomial $N_n(x)$ (#74); a Ferrers board; the permanent of
a square matrix; a sign-reversing involution (#75).

THMS: **$\varphi$ is invertible with $\varphi^{-1}f(T)=\sum_{Y\supseteq
T}(-1)^{\lvert Y-T\rvert}f(Y)$** (S1 2.1.1, landmark) — the linear-operator form
of inclusion–exclusion, whose proof reduces to the published
`cor-binomial-theorem-consequences`, and whose relation to the published
`thm-inclusion-exclusion` and `cor-inclusion-exclusion-is-boolean-mobius-inversion`
is a **mandatory dictionary item**; the **hit-polynomial theorem**
$N_n(x)=\sum_k r_k(n-k)!(x-1)^k$ (S1 2.3.1, landmark) with both of Stanley's
proofs and an agreement remark; the derangement numbers and the **problème des
ménages** as its two named instances, with the non-consecutive-selection lemma
(S1 2.3.4); **the factorisation theorem for the rook polynomial of a Ferrers
board** (S1 2.4.1) and **rook equivalence** with the unique increasing
representative (S1 2.4.3–2.4.5); $N_0=\operatorname{per}(J-A_B)$, the permanent
dictionary; **the involution principle** (S1 §2.6, S3 Theorem 2.3.2) with the
digraph lemma (S3 2.3.1) and Euler's identity re-proved by it, with an agreement
remark against CB-8's Glaisher bijection; **the Vandermonde determinant** and
**Cauchy–Binet** by sign-reversing involution, if the cofactor machinery is homed
here rather than on GT-7a (§19.2 F2 — **decide once**).

FS: rook-equivalent boards are congruent; the hit polynomial determines the
board; every sign-reversing involution has a fixed point.

B: the $3\times3$ derangement board with $r_k$ tabulated; the ménages numbers for
$n\le5$; two rook-equivalent Ferrers boards exhibited; the involution principle
run on Stanley's Example 2.6.1.

CEX: two distinct boards with the same rook polynomial; an involution with no
fixed point on an odd-sized set (impossible — so the correct item is the parity
lemma, and the `cex-` slot instead exhibits a **sign**-reversing involution whose
fixed-point set is empty, showing the alternating sum can vanish).

Traps. (i) The library already has inclusion–exclusion twice, as
`thm-inclusion-exclusion` and as Boolean Möbius inversion. This page adds a
**third** presentation, and the dictionary item is what keeps that from being the
two-notions defect. (ii) Permanent theory beyond the rook connection has **no
source in the harvest** — do not develop it; state the dictionary and stop.
(iii) The hit-polynomial identity is an identity of polynomials (#74).

---

## CB-19 (NEW). Posets II: the Partition Lattice, Characteristic Polynomials and Möbius Algebra

**Anchor:** immediately after CB-18.
`requires`: `incidence-algebras-and-mobius-inversion`,
`chains-antichains-sperner-and-dilworth`, CB-17 (for $L_n(q)$), CB-7.

The published incidence-algebra page computes $\mu$ for the Boolean lattice, the
chain, a product and the divisor lattice, and stops. Stanley EC1 §3.7–3.11 is
the rest.

DEFS: the partition lattice $\Pi_n$ (#77); the lattice of subspaces $L_n(q)$; a
**semimodular** and a **geometric** lattice (definitions only here — the matroid
connection is GT-17's); the characteristic polynomial $\chi_P(t)$ (#76); a
crosscut; an atom and a coatom.

THMS: $\Pi_n$ is a lattice and its intervals factor as products of smaller
partition lattices; **$\mu_{\Pi_n}(\hat0,\hat1)=(-1)^{n-1}(n-1)!$** (landmark),
by the $\mathbb{Q}$-algebra/exponential-formula route of CB-7 or by Weisner —
prove one, record the other; **$\mu_{L_n(q)}(\hat0,\hat1)=(-1)^nq^{\binom n2}$**,
citing CB-17's subspace theorem; **Weisner's theorem** and its corollaries;
**Rota's crosscut theorem**; the **Möbius algebra** of a finite lattice and the
proof that it is isomorphic to a product of copies of the base ring, giving a
third route to $\mu$; the characteristic polynomial of a graded poset and its
behaviour under products; **the chromatic polynomial of a graph is the
characteristic polynomial of its lattice of contractions/flats**, with **Whitney's
broken-circuit theorem** as its corollary — this is the theorem that GT-10 cites
rather than reproves, and it is why this page precedes GT-10 in the reading
order; the **Euler characteristic** of a finite poset defined as $\mu+1$ and
computed for the examples, with the simplicial reading explicitly **not** claimed.

FS: every finite lattice is semimodular; $\mu(x,y)$ of a geometric lattice
alternates in sign without further hypotheses; the characteristic polynomial
determines the poset.

B: $\Pi_3$ and $\Pi_4$ drawn with $\mu$ computed; $L_2(2)$ and $L_3(2)$; the
crosscut theorem applied to $\Pi_4$; $\chi$ of the Boolean lattice recomputed
against the published $\mu$; the broken-circuit expansion of $P(C_4,k)$.

CEX: a lattice whose $\mu$ is not alternating; two non-isomorphic posets with the
same characteristic polynomial.

Traps. (i) §11's own trap for CB-9 applies again: the published items are cited,
never re-minted, and the page opens `def-poset-mobius-function` and
`thm-mobius-inversion-for-lower-finite-posets` before writing a single `requires`
line. (ii) Order complexes, shellability and the topological reading of $\mu$ are
**out of scope** (§29) — the crosscut theorem is proved combinatorially, and the
word "homotopy" does not appear. (iii) `def-graded-poset-and-rank` is published
and fixes a rank convention; #76 is stated against it.

---

## CB-20 (NEW). Permutation Patterns, Stanley–Wilf and Marcus–Tardos

**Anchor:** immediately after CB-16, or after CB-6 if the orchestrator prefers
the Catalan classes adjacent to their bijections.
`requires`: CB-16, CB-6, `inclusion-exclusion-and-the-pigeonhole-principle`.

DEFS: pattern containment and $\operatorname{Av}(\tau)$ (#78); a permutation class
and its basis; a $0$–$1$ matrix, its pattern containment, and the extremal
function $\operatorname{ex}(n,P)$ for matrices.

THMS: **every $\tau\in S_3$ has $\lvert\operatorname{Av}_n(\tau)\rvert=C_n$**
(landmark), by bijections to Dyck paths — the six cases reduce to two by
symmetry, and the two are proved; **stack-sortable permutations are exactly the
$231$-avoiding ones** (Knuth), constructed and proved; the Erdős–Szekeres theorem
restated as $\operatorname{Av}(12\cdots(k+1),\,(l+1)\cdots21)$ being finite,
citing the published `thm-erdos-szekeres`; **the Füredi–Hajnal quantity
$\operatorname{ex}(n,P)$ is $O(n)$ for every permutation matrix $P$
(Marcus–Tardos)** (landmark) — the harvest's clearest short-proof landmark, a
block-decomposition and counting argument writable in a bounded list of numbered
steps; **Stanley–Wilf**: $\lvert\operatorname{Av}_n(\tau)\rvert^{1/n}$ is bounded,
derived from Marcus–Tardos by the Klazar reduction; the multiplicativity of
$\lvert\operatorname{Av}_n\rvert$ giving the existence of the Stanley–Wilf limit
by **Fekete's subadditivity lemma**, which the page mints if the library does not
have it — check on disk before writing `requires`.

FS: $\lvert\operatorname{Av}_n(\tau)\rvert$ depends only on $\lvert\tau\rvert$
(false for $\lvert\tau\rvert=4$ — the classes $1342$ and $1234$ have different
counts, and the honest item states only that they differ, not the values);
$\operatorname{Av}(\tau)$ is closed under composition; every permutation class is
$\operatorname{Av}$ of a finite basis (false — infinite antichains exist; state
carefully or drop).

B: the six $S_3$ classes tabulated to $n=5$; a stack sort run on a concrete
permutation; the Marcus–Tardos block decomposition on a small matrix.

CEX: a permutation avoiding $132$ but not $213$; a $0$–$1$ matrix meeting the
Füredi–Hajnal bound's order.

Traps. (i) Pattern containment is about **order isomorphism of subsequences**, not
consecutive subwords; the consecutive variant is a different subject and a Remark
says so. (ii) Fekete's lemma is a real prerequisite; if the library lacks it, it
is minted here as a numbered item — it is elementary and this is exactly the
"build the machinery" case. (iii) The Stanley–Wilf **limit's value** is unknown
for most $\tau$; the theorem asserts existence and finiteness, and the Statement
must not suggest otherwise.

---

## CB-21 (NEW). Extremal Set Theory II: Shadows, Compressions and Correlation Inequalities

**Anchor:** immediately after `chains-antichains-sperner-and-dilworth-examples`.
`requires`: `chains-antichains-sperner-and-dilworth`,
`inclusion-exclusion-and-the-pigeonhole-principle`,
`finite-counting-and-binomial-coefficients`.

The published page has shadows, the local LYM inequality, intersecting families,
Erdős–Ko–Rado, sunflowers and Birkhoff. It has no compression machinery, no
Kruskal–Katona, and no correlation inequality. This page is the rest of the
subject, and it is what the entropy page (CB-25) and the probabilistic pages cite.

DEFS: the colex order on $k$-sets and the initial segment (#79); the compressions
$C_{ij}$ and $D_{ij}$ (down-compression and shifting); a down-set (order ideal in
the cube — cite the published `def-lattice-distributive-lattice-and-order-ideal`);
the cascade (binomial) representation of an integer; a cross-intersecting pair.

THMS: colex is a linear order and initial segments minimise the shadow among
their own size (the base case); **compressions do not increase the shadow, and
compression terminates** — two separate lemmas, and #79 is unpayable without
both; **the Kruskal–Katona theorem** (landmark) in the cascade form and in
Lovász's $\binom{t}{d}$ form, with an agreement remark; the **Erdős–Ko–Rado
theorem re-proved by shifting**, with an agreement remark against the published
Katona cycle proof — the value of the second proof is that shifting also gives
the Hilton–Milner refinement; **the Hilton–Milner theorem** if the page stays
under the cap; the **Bollobás set-pair inequality** with **both** its proofs, the
counting/permutation one and the exterior-algebra/linear one (the second is
CB-13's method and is cross-referenced, not duplicated); **the four functions
theorem** (Ahlswede–Daykin, landmark), by induction on $n$; **Harris's inequality
/ the FKG inequality** on the cube for monotone events, and **Kleitman's lemma**,
both as corollaries of the four functions theorem; **the Kleitman
diametric-family bound** via Shearer, stated here and proved on CB-25 with an
agreement remark. Add `rem-lattice-fkg-and-probabilistic-fkg-agree`, pointing
to CB-29's probabilistic formulation and asserting the finite-cube agreement
without re-proving either inequality.

FS: the shadow of an initial segment of colex is an initial segment of colex in
one lower level (true, and therefore not an `fs-` — recorded so no scaffolder
plants it as one); compression preserves the family's size but may destroy
intersecting-ness; Harris's inequality holds for a monotone and an antitone event
in the same direction.

B: colex on $[5]^{(3)}$ listed with shadows; a compression sequence run to its
fixed point; the cascade representation of $30$ with $d=3$; the four functions
theorem checked on $2^{[2]}$; two monotone events on $2^{[3]}$ with their
correlation computed.

CEX: a family whose shadow is smaller than Kruskal–Katona would allow if the
cascade representation is read off wrongly (the arithmetic trap, exhibited);
two events on the cube that are negatively correlated, one of them not monotone.

Traps. (i) The cascade representation's uniqueness is a lemma and the whole
statement of Kruskal–Katona is unreadable without it. (ii) The published
`def-shadow-of-a-uniform-family` fixes lower and upper shadows; state
Kruskal–Katona for the one the published definition calls the lower shadow and
derive the upper form, rather than silently switching. (iii) The four functions
theorem is stated for **nonnegative real-valued** functions on a finite
distributive lattice; the set-system corollaries are separate items.

---

## CB-10 (ENRICHED). Counting up to Symmetry: the Cycle Index and Pólya Enumeration

**Anchor:** `counting-up-to-symmetry-burnside-and-polya` (planned, unauthored).
`requires`: `group-actions-and-cayleys-theorem`,
`symmetric-groups-and-the-sign-homomorphism`, CB-16, CB-15,
`polynomial-rings-and-roots`.

**The §11 inventory for this page must be rewritten, because its central premise
is false (§18.2 S1).** Burnside's orbit-counting lemma is published as
`thm-cauchy-frobenius-orbit-counting`, orbit–stabiliser and the fixed-point-set
definition with it, and the naive-division counterexample is on the published
examples page. The replacement inventory:

DEFS: the **cycle index** $Z(G)$ of a permutation group (#23, in the published
`def-multivariate-polynomial-ring-by-iteration`); a colouring of $X$ by a finite
set and the induced action; the **pattern inventory** with weights in a
commutative ring; the cycle-index series of a class, for the CB-15 seam.

THMS: **the cycle index of $C_n$, $D_n$, $S_n$ and $A_n$ computed as theorems**,
using CB-16's count of permutations by cycle type; **Pólya's enumeration theorem**
(landmark) in the plain form, proved by applying the published orbit-counting
lemma to the action on colourings; **the weighted pattern-inventory form**
(landmark); the necklace and bracelet counts, with the necklace count matched
against CB-15's $\operatorname{CYC}$ construction in a **mandatory agreement
item** — the two derivations are genuinely different and the library must not
hold two unrelated necklace counts; the number of non-isomorphic graphs on $n$
vertices as a Pólya count for $S_n$ acting on $[n]^{(2)}$, **which may now be
stated in graph language**, since `def-finite-simple-graph` and
`def-graph-isomorphism-and-complement` are published below this page — §11's
workaround of phrasing it as "orbits of edge-sets" is no longer needed, and its
forward reference to GT-1 is **discharged**; $Z(S_n)$'s exponential generating
function $\exp\bigl(\sum_k s_kx^k/k\bigr)$, the identity that connects this page
to CB-7's labelled $\operatorname{SET}$ construction.

**Not scaffolded: de Bruijn's generalisation of Pólya enumeration.** The harvest
searched Stanley EC1, Flajolet–Sedgewick Part A, Sagan, Cameron, Wilf, de Mier,
Postnikov and Grinberg and found **no source for it**. Under the
generated-claim-minimization rule it is not written from memory. Recorded in §29
with the licence: any reputable source stating it exactly.

FS: two distinct groups have distinct cycle indices; the cycle index determines
the abstract group; the pattern inventory specialises to the plain count under
every weight assignment.

B: $Z(C_4)$, $Z(D_4)$, $Z(S_3)$ computed; face colourings of a cube under
rotation; necklaces with $6$ beads and $2$ colours by both routes; graphs on $4$
vertices up to isomorphism.

CEX: two non-isomorphic groups with the same cycle index for a given action
(a genuine and instructive witness); a weighted count where the naive
substitution $x_i\mapsto x^i$ gives the wrong inventory.

Traps. (i) **The name.** Sagan writes "Burnside's Lemma", Cameron "the
Orbit-Counting Lemma"; the published item is titled Cauchy–Frobenius. Use the
published item's own name in every citation and record the alternatives in a
`rem-`; do not open the attribution question inside a Statement. Sagan likewise
titles the pattern inventory the **Redfield–Pólya** theorem, which is the
better-attributed form. (ii) §11's trap (ii) is discharged: the multivariate
polynomial ring is published (§18.2 S2). (iii) The action of $S_n$ on pairs cites
`thm-two-element-subsets-count`, an A-page item, as §11 checked.

---

## CB-22 (NEW, placed high). Combinatorial Species

**Anchor:** immediately after `universal-properties-and-the-yoneda-lemma`.
`requires`: `categories-functors-and-natural-transformations`, CB-15, CB-7,
CB-10.

**Why it is placed there and not in the band.** Joyal's definition is *a functor
from the groupoid of finite sets and bijections to itself*, and the library's
category-theory vocabulary — `categories-functors-and-natural-transformations` —
is authored well above the combinatorics band. The alternatives were to give an
informal "bijection-respecting assignment" definition in the band, which is what
Cameron does under protest (*"I will take a more informal approach"*), or to
place the pair where the honest definition is legal. **Placing it high is the
choice the forward-reference rule prefers**: no content is dropped and no
load-bearing forward reference is created. Everything it uses as an example — the
symbolic method, EGFs, cycle indices, Pólya — sits below it.

DEFS: the groupoid $\mathbb{B}$ of finite sets and bijections; a **species** as a
functor $\mathbb{B}\to\mathbb{B}$ (or to $\mathbf{Set}$, with the transport of
structure explicit); the associated EGF, OGF and **cycle-index series** in
$\mathbb{Q}[[s_1,s_2,\dots]]$; sum, product, substitution $F[G]$ (requiring
$G(\varnothing)=\varnothing$) and the derivative/rooting operations.

THMS: the cycle-index specialisations $f(x)=Z(F;s_n\mapsto x^n)$ and
$F(x)=Z(F;s_1\mapsto x,\,s_n\mapsto0)$ give the unlabelled OGF and the labelled
EGF (landmark — **the single formula that unifies CB-15 and CB-7**, and the
reason this page is worth its placement); the cycle indices of $\mathrm{Set}$,
$\mathrm{Lin}$, $\mathrm{Circ}$, computed; the multiplicativity of $Z$ under sum
and product; **the substitution rule** $Z(F[G])=Z(F;s_n\mapsto Z(G;s_m\mapsto
s_{nm}))$ and its two generating-function corollaries; rooting-then-deleting is
differentiation; the worked identities $\mathrm{Set}[\mathrm{Set}_{\ge1}]$ =
set partitions, $\mathrm{Set}[\mathrm{Circ}]=\mathrm{Perm}$,
$\mathrm{Graph}=\mathrm{Set}[\mathrm{ConnGraph}]$, $\mathrm{Cat}=E+\mathrm{Cat}^2$;
**Cayley's formula proved by species**, with an agreement remark against the
published Prüfer proof.

**Source constraint, recorded honestly.** Bergeron–Labelle–Leroux is **not open
access** and neither is Joyal's original paper; the harvest could not obtain
either. The one open-access treatment obtained is **Cameron LTCC §8** (with §10.2
and §10.4 for the applications), which is a genuine treatment but a short one.
**A step-2 Beta must obtain a second independent treatment before this pair
passes the source-depth gate** — `arXiv:1312.0542`, `arXiv:math/0512052` and
`arXiv:2305.05059` are the candidates the harvest identified but did not read.
Until then this pair is **scaffolded but not source-complete**, and that is
stated in §29 as a blocker rather than hidden.

---

# 23. The algebraic, spectral and design block

Sources are keyed **A1**–**A10**, distinct from §22's **S1**–**S8**:
**A1** Brouwer & Haemers, *Spectra of Graphs*
(`https://www.win.tue.nl/~aeb/2WF02/spectra.pdf`, 255 pp., full text);
**A2** Spielman, *Spectral and Algebraic Graph Theory*
(`http://cs-www.cs.yale.edu/homes/spielman/sagt/sagt.pdf`, 400 pp., full text);
**A3** Stanley, *Topics in Algebraic Combinatorics*
(`https://math.mit.edu/~rstan/algcomb/algcomb.pdf`, 225 pp., full text);
**A4** Babai & Frankl, *Linear Algebra Methods in Combinatorics*, v2.2.1, Nov 2024
(`https://people.cs.uchicago.edu/~laci/babai-frankl-book2024.pdf`, 251 pp., full
text); **A5** Godsil, *Association Schemes*
(`https://www.math.uwaterloo.ca/~cgodsil/pdfs/assoc2.pdf`, 242 pp.);
**A6** Godsil, *Finite Geometry*
(`https://www.math.uwaterloo.ca/~cgodsil/pdfs/fgeom.pdf`, 81 pp.);
**A7** Godsil, *Tools from Linear Algebra*
(`https://www.math.uwaterloo.ca/~cgodsil/pdfs/tools.pdf`, 52 pp.);
**A8** Alon, "Combinatorial Nullstellensatz", *CPC* **8** (1999) 7–29
(`https://www.tau.ac.il/~nogaa/PDFS/null2.pdf`);
**A9** Forbes, "The Bruck–Ryser theorem for projective planes"
(`https://www.theoremoftheday.org/MathsStudyGroup/ADF-Bruck%20Ryser.pdf`);
**A10** Godsil, *Symmetries and Eigenvectors*
(`https://www.math.uwaterloo.ca/~cgodsil/pdfs/mont.pdf`). Verbatim headings and
the full prerequisite audit: `research/subjects-01-combinatorics-harvest-algebraic.md`.

## 23.0 A correction to §19.2 F2, verified from disk

**F2 is wrong and is withdrawn.** It reported that the library has no cofactor
expansion, no adjugate and no Cauchy–Binet, having checked
`determinants-of-matrices-over-a-commutative-ring`. That page indeed has none of
them — but **the next page does**. `the-determinant-of-a-linear-operator`
publishes `def-matrix-minors-cofactors-and-adjugate`,
`thm-laplace-cofactor-expansion`, `thm-adjugate-identity-over-a-commutative-ring`,
`cor-inverse-matrix-by-adjugate`, `thm-adjugate-is-equivariant-under-similarity`,
`thm-cramers-rule-over-a-commutative-ring`, `cor-cramers-rule-over-a-field`,
`def-adjugate-of-a-linear-operator` and `thm-operator-adjugate-identity`, with
`ex-four-by-four-determinant-by-cofactors-and-row-reduction` and
`ex-three-by-three-inverse-by-adjugate` on its companion.

Consequences, all in the library's favour:

- GT-7a does **not** mint the minor, the cofactor or the Laplace expansion. It
  cites `def-matrix-minors-cofactors-and-adjugate` and
  `thm-laplace-cofactor-expansion`, and the matrix-tree theorem can be *phrased*
  by citation from the first line.
- §20 row **#101** is amended: the prerequisite it demands is already met; what
  remains on GT-7a is only the proof that **all cofactors of $L$ are equal**,
  which is a genuine lemma and stays.
- The amendment §19.2 F2 owed to the algebra track is **cancelled** for cofactors
  and the adjugate. It survives only for **Cauchy–Binet**, which is genuinely
  absent on disk at reconciliation time. **Applied 2026-08-14:** abstract
  algebra LA-7 now scaffolds `thm-cauchy-binet-formula`; GT-7a cites that id
  and no longer mints the identity.

The methodological lesson is worth recording for the whole commission: **a
"missing" result must be searched for by id across `items/`, not by reading the
one page where you expect it to live.** The library splits determinants across
two pages and the machinery sits on the second.

## 23.1 Conventions this block adopts, and the disagreements behind them

| # | question | sources disagree | this library adopts | why |
|---|---|---|---|---|
| 1 | the Laplacian | $L=D-A$ (A1 §1.1, A2 §3.1, A3 Ch. 9, Godsil–Royle, Biggs) vs. the normalised $\mathcal{L}=I-D^{-1/2}AD^{-1/2}$ (Chung) vs. $L_{\mathrm{rw}}=I-D^{-1}A$ vs. the analysis-facing $A-D$ | **$L=D-A$** as the primary object; $\mathcal{L}$ introduced explicitly and only where conductance needs it, with the relation stated; **$A-D$ never used** | $L=D-A$ is what the matrix-tree theorem needs ($L=NN^{\mathsf T}$), and for $d$-regular $G$ it gives the clean $\mu_i = d-\theta_i$ |
| 2 | eigenvalue ordering | A1 §1.3: adjacency **decreasing** $\theta_1\ge\dots\ge\theta_n$, Laplace **increasing** $0=\mu_1\le\dots\le\mu_n$; A2 pairs them the same way | **exactly A1's pairing, stated on the page as a numbered convention remark** | the two orders are opposite on purpose — index $1$ is the trivial eigenvalue in both. But it means $\lambda_2$ is the second-*smallest* Laplace and second-*largest* adjacency eigenvalue, which is a live false-statement risk |
| 3 | design notation | $t$-$(v,k,\lambda)$ (modern: Beth–Jungnickel–Lenz, A1, Stinson, Colbourn–Dinitz) vs. $S_\lambda(t,k,v)$ (older, **$v$ in the reversed position**) vs. $\mathrm{BIBD}(v,b,r,k,\lambda)$ | **$2$-$(v,k,\lambda)$**, defined once, with the other two recorded as synonyms in a `rem-` | the five-parameter form would actively misrepresent the mathematics, because CB-14a *proves* that $b$ and $r$ are determined by $v,k,\lambda$ |
| 4 | plane "order" | universal for projective planes ($n+1$ points per line, $n^2+n+1$ points); the trap is the **affine** case ($n$ points per line, $n^2$ points) | **state both counts explicitly every time "order" appears** | sources agree; authors routinely conflate them |
| 5 | strongly regular parameters | $(v,k,\lambda,\mu)$ essentially universal; distance-regular literature writes $(v,k,a_1,c_2)$ | **$(v,k,\lambda,\mu)$**, plus a required `rem-` disambiguating this $\lambda$ from the $\lambda$ of a $2$-$(v,k,\lambda)$ design | the two $\lambda$s appear on adjacent pages and denote different things |
| 6 | expansion constant | edge expansion $h(G)=\min_{0<\lvert S\rvert\le n/2}\lvert\partial S\rvert/\lvert S\rvert$ (A1 §4.4) vs. conductance $\varphi(S)=w(\partial S)/\min(\operatorname{vol}S,\operatorname{vol}\bar S)$ (Chung, A2 §21.1) vs. **vertex** expansion $\min\lvert N(S)\setminus S\rvert/\lvert S\rvert$ (A2 §27.4) | **$h(G)$ and the adjacency form of Cheeger** for the $d$-regular development; conductance as a `rem-` with the conversion $\varphi=h/d$; vertex expansion kept visibly separate | the adjacency form needs no normalised Laplacian at all. Conflating edge and vertex expansion is a false-statement risk, not a style choice |

---

## CB-13 (ENRICHED). Linear-Algebra Methods: Rank Bounds and Inclusion Matrices

**Anchor:** `linear-algebra-methods-in-combinatorics` (planned, unauthored).
`requires`: `inner-product-spaces-and-orthogonality`,
`gaussian-elimination-and-row-reduction`, `finite-counting-and-binomial-coefficients`,
`inclusion-exclusion-and-the-pigeonhole-principle`,
`the-field-of-fractions-and-localisation` (no — see traps), `polynomial-rings-and-roots`.

The §11 inventory for this page is kept and extended. Two of its three flagged
uncertainties are now resolved from disk: `thm-any-two-finite-bases-have-the-same-size`,
`def-rank-and-nullity`, `thm-rank-nullity`, `cor-matrix-rank-nullity` and
`thm-row-rank-equals-column-rank` are all published on A pages, so the master
rank bound may cite rather than rebuild. The third — whether
`inner-product-spaces-and-orthogonality` homes what this page needs — **cannot be
resolved, because that page carries 0 items** (§27).

DEFS: the **incidence vector** $v_A\in\mathbb{F}^n$ of $A\subseteq[n]$ over a
stated field; the standard bilinear form $\langle x,y\rangle=\sum x_iy_i$ on
$\mathbb{F}^n$, **explicitly as a bilinear form and not as an inner product**;
the **inclusion matrix** $W_{t,k}(n)$ whose rows are $t$-sets, columns $k$-sets,
entry $1$ iff containment; an $L$-intersecting family; **VC dimension** and
shattering (#103); the down-shift (compression) $S_i$ on a set family.

THMS: **the linear-algebra bound** (landmark) — a linearly independent subset of
an $n$-dimensional vector space has at most $n$ elements, instantiated as this
page's master lemma, citing `thm-any-two-finite-bases-have-the-same-size` and
`thm-dimension-of-a-linear-subspace`; the three **independence criteria** that do
the real work, stated as separate items because every later proof names one of
them — the **diagonal criterion** (A4 Prop. 2.4), the **triangular criterion**
(A4 Props. 2.5/2.8/2.9) and the **determinant criterion** (A4 Prop. 2.7);
**Oddtown** (landmark, A4 Cor. 1.2, A3 Thm 12.2) — sets of odd size with pairwise
even intersections number at most $n$; **Eventown** (A4 Thm 2.32) — the same with
all sizes even gives $2^{\lfloor n/2\rfloor}$, by the totally isotropic subspace
argument $U\subseteq U^{\perp}$, together with A4 Thm 2.33/Cor. 2.34 that every
*maximal* Eventown system is *maximum*; **the nonuniform Fisher inequality**
(landmark, A4 Thm 4.1, A3 Thm 12.4) — distinct $C_i\subseteq[n]$ with
$\lvert C_i\cap C_j\rvert=\lambda\ge1$ constant number at most $n$, by positive
definiteness of $D+\lambda J$ over $\mathbb{R}$; **Graham–Pollak** (landmark, A1
Prop. 1.5.1, A4 Thm 1.8, A3 Thm 12.3) — a partition of $E(K_n)$ into complete
bipartite graphs needs at least $n-1$ parts, by the rank-nullity argument on
$\sum_{i<j}x_ix_j$; **Sauer–Shelah** (landmark) by **shifting**, with the two
compression lemmas separated (the shift does not increase $\lvert\mathcal F\rvert$;
the shift creates no new shattered set) and the downward-closed case as the base;
the **rank of the inclusion matrix** $\operatorname{rank}_{\mathbb{Q}}W_{t,k}(n)=\binom{n}{t}$
for $t\le k\le n-t$ (A4 §7.1), and the second, linear-algebraic proof of
Sauer–Shelah from it (A4 §7.4); **the nonuniform Ray-Chaudhuri–Wilson bound**
moves to CB-24.

FS: the Oddtown bound $n$ can be improved to $n-1$; Fisher's inequality holds over
$\mathbb{F}_2$ — the witness is an Eventown family, and the contrast is the
page's pedagogical payload; a family of VC dimension $d$ has at most $n^d$
members (the true bound is $\sum_{i<d}\binom{n}{i}$, and the crude power bound
fails for small $n$ — **the witness must be checked before shipping**); the
standard bilinear form on $\mathbb{F}_2^n$ is an inner product.

B: Oddtown on $[4]$ with a maximal family; an Eventown family of size
$2^{\lfloor n/2\rfloor}$ exhibited; the nonuniform Fisher bound applied to the
Fano plane's line set; $K_4$ partitioned into $3$ complete bipartite graphs and
the Graham–Pollak bound checked; a family of VC dimension $2$ attaining
Sauer–Shelah; $W_{1,2}(4)$ written out and its rank computed.

CEX: an even-town family of size $2^{\lfloor n/2\rfloor}$, showing the parity
hypothesis is doing the work; a set family whose incidence vectors are dependent
over $\mathbb{F}_2$ and independent over $\mathbb{R}$; a family of $\mathbb{F}_2$
vectors that is self-orthogonal but not isotropic in the quadratic sense.

Proof strategy where it is not routine. Oddtown is ~6 steps: pair
$\sum c_iv_i=0$ with $v_j$ and read $c_j=0$ off $\langle v_i,v_i\rangle=1$,
$\langle v_i,v_j\rangle=0$. **The form on $\mathbb{F}_2^n$ is degenerate and the
proof never needs it not to be** — it uses bilinearity and the diagonal, nothing
more. Graham–Pollak is ~8 steps: if $m<n-1$ then the $m+1<n$ equations
$\sum_ix_i=0$, $\sum_{i\in A_k}x_i=0$ have a nonzero real solution, and
substituting into
$\sum_{i<j}x_ix_j=\sum_k(\sum_{A_k}x_i)(\sum_{B_k}x_j)$ gives
$0=\tfrac12[(\sum x_i)^2-\sum x_i^2]=-\tfrac12\sum x_i^2$.

Traps. (i) **`the-field-of-fractions-and-localisation` is NOT a prerequisite** —
it appears in the `requires` line above struck through deliberately, as a warning:
a scaffolder reaching for "the field this page needs" will find it and it is the
wrong page. What the page needs is a *stated* field, $\mathbb{F}_2$ or
$\mathbb{R}$, on each theorem. (ii) The field is a hypothesis of every theorem
here and the `fs-` list exists to make that unmissable. (iii) Sauer–Shelah by
shifting needs **no algebra at all**; the required `rem-` says so, and the
inclusion-matrix proof is offered beside it as the page's one deliberate
two-routes item — which is exactly how A4 organises its own book. (iv) Do not
write "inner product space over $\mathbb{F}_2$" anywhere on this page. It is a
false statement and A4's own phrasing avoids it.

Provenance: every Statement `literature-derived` (A4, A3, A7 carry all of them
verbatim); proofs `literature-derived` except the two-routes `rem-` and the
`fs-` items, which are `ai-generated` and **non-load-bearing by construction**.

---

## CB-23 (NEW). The Polynomial Method and the Combinatorial Nullstellensatz

**Anchor:** immediately after CB-13's examples page.
`requires`: `polynomial-rings-and-roots`, CB-13,
`algebraic-extensions-degree-and-finite-fields`,
`congruences-and-the-chinese-remainder-theorem`,
`finite-counting-and-binomial-coefficients`.

This page exists because the harvest's prerequisite audit found the
Combinatorial Nullstellensatz to be **the single best-value target in the whole
algebraic group**: two theorems and one lemma, about twelve numbered steps
together, needing nothing beyond $\mathbb{F}[x_1,\dots,x_n]$, which the library
publishes. §11 put it on CB-13 as one theorem with "two applications". That
undersells it by an order of magnitude — Cauchy–Davenport, Chevalley–Warning,
Alon–Tarsi list colouring and Dvir's finite-field Kakeya theorem all fall out of
the same lemma, and each is a genuine landmark.

DEFS: the multivariate polynomial ring over a field (cite
`def-multivariate-polynomial-ring-by-iteration`); $\deg_{x_i}$ and total degree;
a **multilinear** polynomial and the multilinear reduction of $f$ modulo
$x_i^2-x_i$ on $\{0,1\}^n$; the **graph polynomial**
$f_G(x)=\prod_{ij\in E,\,i<j}(x_i-x_j)$; an **Eulerian sub-digraph** of an
orientation and the Alon–Tarsi numbers $\mathrm{EE}(D)$, $\mathrm{EO}(D)$; a
**Kakeya set** in $\mathbb{F}_q^n$.

THMS: **the polynomial identity lemma** (landmark; A8 Lemma 2.1, verbatim: if
$\deg_{x_i}P\le t_i$ for each $i$ and $P$ vanishes on $S_1\times\dots\times S_n$
with $\lvert S_i\rvert\ge t_i+1$, then $P\equiv0$) — an induction on $n$ whose
base case is only "a nonzero univariate polynomial of degree $t_1$ has at most
$t_1$ roots", which is published as part of `polynomial-rings-and-roots`;
**Combinatorial Nullstellensatz I** (landmark; A8 Theorem 1.1, quoted exactly:
with $g_i(x_i)=\prod_{s\in S_i}(x_i-s)$, if $f$ vanishes on every common zero of
$g_1,\dots,g_n$ then $f=\sum h_ig_i$ with $\deg h_i\le\deg f-\deg g_i$, and the
coefficients stay in any subring $R$ containing those of $f$ and the $g_i$);
**Combinatorial Nullstellensatz II** (landmark; A8 Theorem 1.2 — if
$\deg f=\sum t_i$ and the coefficient of $\prod x_i^{t_i}$ in $f$ is nonzero,
then for any $S_i$ with $\lvert S_i\rvert>t_i$ there are $s_i\in S_i$ with
$f(s_1,\dots,s_n)\ne0$); **Cauchy–Davenport** (landmark; for $p$ prime and
nonempty $A,B\subseteq\mathbb{Z}/p$, $\lvert A+B\rvert\ge\min(p,\lvert A\rvert+\lvert B\rvert-1)$),
whose proof applies CN II to $f(x,y)=\prod_{c\in C}(x+y-c)$ and needs
$\binom{\lvert A\rvert+\lvert B\rvert-2}{\lvert A\rvert-1}\not\equiv0\pmod p$ —
**and that non-vanishing is a separate cited step**, not an observation;
**Chevalley–Warning** (A8 §3) — if $f_1,\dots,f_m\in\mathbb{F}_q[x_1,\dots,x_n]$
have $\sum\deg f_i<n$ then $p$ divides the number of common zeros, so a common
zero is never unique; the **Erdős–Ginzburg–Ziv theorem** as a corollary of
Chevalley–Warning; **Alon–Tarsi** (landmark; A8 §§4–7) — if $G$ has an
orientation $D$ with $\mathrm{EE}(D)\ne\mathrm{EO}(D)$ then $G$ is
$(d^+_D+1)$-choosable, proved by applying CN II to $f_G$, with the corollary that
every planar bipartite graph is $3$-choosable **stated but forward-referenced**,
since planarity lives above the band (§24, GT-22); **Dvir's finite-field Kakeya
theorem** (landmark) — a set $K\subseteq\mathbb{F}_q^n$ containing a line in every
direction has $\lvert K\rvert\ge\binom{q+n-1}{n}\ge q^n/n!$.

FS: CN II holds without the hypothesis that the coefficient of $\prod x_i^{t_i}$
is nonzero; Cauchy–Davenport holds for $\mathbb{Z}/n$ with $n$ composite (the
witness is a proper subgroup, and it is the cleanest possible illustration that
primality is load-bearing); the polynomial identity lemma holds with
$\lvert S_i\rvert=t_i$; Dvir's bound holds for a set containing a line in every
direction of a *proper subspace*.

B: CN II applied by hand to a $2$-variable example; Cauchy–Davenport checked
against $A=B=\{0,1,2\}$ in $\mathbb{Z}/7$; the regular bipartite $3$-choosability
instance computed for $K_{2,4}$; a Kakeya set in $\mathbb{F}_3^2$ exhibited with
its size compared to the bound; Chevalley–Warning applied to a single quadratic
in $3$ variables over $\mathbb{F}_2$.

CEX: a composite modulus where Cauchy–Davenport fails; a polynomial vanishing on
a grid with $\lvert S_i\rvert=\deg_{x_i}$ that is not identically zero; a graph
whose every orientation has $\mathrm{EE}=\mathrm{EO}$ (so Alon–Tarsi gives
nothing) — **check this witness exists before scaffolding it**; if it cannot be
exhibited, the `cex-` drops and the page says so.

Proof strategy for Dvir, in full, because it is short and the page's best
advertisement: if $\lvert K\rvert<\binom{n+q-1}{n}=\dim\{$polys of degree
$\le q-1$ in $n$ variables$\}$ then some nonzero $g$ of degree $d\le q-1$
vanishes on $K$; for each direction $b$ the univariate $t\mapsto g(a+tb)$ has
degree $\le q-1$ and vanishes at all $q$ values of $t$, so it is the zero
polynomial, so its leading coefficient — the top homogeneous part $g_d(b)$ —
vanishes; hence $g_d$ vanishes on all of $\mathbb{F}_q^n$, and the polynomial
identity lemma with $\deg g_d<q$ forces $g_d\equiv0$, a contradiction. Ten
numbered steps, and it re-spends the page's own Lemma.

Traps. (i) A8 Theorem 1.1's "moreover" clause about the subring $R$ is part of
the statement and is what makes the integer applications legal; do not drop it.
(ii) The Cauchy–Davenport binomial non-vanishing is where an author will
hand-wave; it is $\lvert A\rvert+\lvert B\rvert-2<p$ plus Lucas or a direct
factorial-valuation argument, and it must be a numbered step. (iii) The
planar-bipartite corollary of Alon–Tarsi is the one forward reference this page
declares, and it is legal only on a `cor-` — a consequence kind — per SEAMS §5.

Provenance: Statements all `literature-derived` from A8 (read verbatim in full
for §§1–2). Proofs `literature-derived` for CN I, CN II, the identity lemma,
Cauchy–Davenport and Dvir; `ai-altered` where a source proof is split across
lemmas.

---

## CB-24 (NEW). Polynomial Spaces, Ray-Chaudhuri–Wilson and Frankl–Wilson

**Anchor:** immediately after CB-23's examples page.
`requires`: CB-13, CB-23, `algebraic-extensions-degree-and-finite-fields`,
`finite-counting-and-binomial-coefficients`.

§11 recorded the Frankl–Wilson theorem as **DENIED** (§9) on length grounds. That
denial is **withdrawn**, and the reason is a fact §9 did not have: A4's preface
states that its §§5.4 and 5.6 "together give a complete and self-contained proof"
of the Kahn–Kalai disproof of Borsuk's conjecture, and the harvest's step audit
confirms the chain is [B] — roughly 15–20 numbered steps for modular
Ray-Chaudhuri–Wilson once the multilinearisation lemma is in hand, which CB-23
already supplies. Withdrawing the denial is the self-contained-scope rule working
as intended: the machinery was buildable and "it would have taken three more
lemmas" was never a licence to drop it.

DEFS: a **polynomial space** — a space of functions on a finite domain spanned by
polynomials, with its dimension; the **multilinearisation** map (A4 Prop. 5.16)
and the space of multilinear polynomials of degree $\le s$ in $n$ variables, of
dimension $\sum_{i\le s}\binom{n}{i}$; an **$L$-intersecting** and a **modular
$L$-intersecting** family; the **$\pm1$ cube** construction and the diameter of a
bounded subset of $\mathbb{R}^d$; **Borsuk's number** $f(d)$ (A4 Thm 5.23) — the
least $m$ such that every bounded subset of $\mathbb{R}^d$ splits into $m$ sets of
strictly smaller diameter.

THMS: **the multilinearisation lemma** (A4 Prop. 5.16) — on $\{0,1\}^n$ every
polynomial agrees with a unique multilinear one of no larger degree, so
independence may be tested in the multilinear space; **the nonuniform
Ray-Chaudhuri–Wilson / Frankl–Wilson bound** (landmark; A4 Thm 5.34, Thm 7.8) —
an $L$-intersecting family with $\lvert L\rvert=s$ on $n$ points has at most
$\sum_{i=0}^{s}\binom{n}{i}$ members, by attaching
$f_F(x)=\prod_{\ell\in L}(\langle x,v_F\rangle-\ell)$ to each set and proving the
$f_F$ independent; **the uniform Ray-Chaudhuri–Wilson theorem** (A4 Thm 4.10,
Thm 7.13) — for a $k$-uniform $L$-intersecting family the bound sharpens to
$\binom{n}{s}$, **as its own item**, since the sharpening needs the higher
inclusion matrices of A4 §7.3 and Gottlieb's theorem (A4 Thm 7.16) and is
genuinely harder than the nonuniform bound; **the modular Frankl–Wilson theorem**
(landmark; A4 Thm 7.15, cf. Thm 5.37) — $p$ prime, $L$ a set of $s$ residues,
$\mathcal F$ $k$-uniform with $k\bmod p\notin L$ and all pairwise intersections in
$L$ mod $p$, then $\lvert\mathcal F\rvert\le\binom{n}{s}$; **Deza–Frankl** (A4
Thm 5.15, the nonuniform modular version); **the Kahn–Kalai disproof of Borsuk's
conjecture** (landmark; A4 Thm 5.23) — $f(d)$ grows at least like $(1.2)^{\sqrt d}$,
so Borsuk's $f(d)=d+1$ is false; **the Frankl–Wilson chromatic numbers of the
distance graphs** on $\mathbb{R}^n$ and $\{0,1\}^n$ (A4 Thm 5.21, Thm 5.22,
Cor. 5.33), which is the in-reach analogue of "a chromatic number computed by
algebra"; **the Frankl–Wilson explicit Ramsey graph** — an explicit graph on $N$
vertices with no clique or independent set of size $\exp(c\sqrt{\log N\log\log N})$,
which §25's CB-11 cites as the constructive counterpart to the probabilistic lower
bound.

**Not scaffolded, with reasons.** *Kneser's conjecture* (Lovász's theorem
$\chi(K(n,k))=n-2k+2$): the **upper bound is an explicit colouring and IS
scaffolded**; the lower bound is denied, because every known proof is
Borsuk–Ulam or a discretisation of it — Lovász's original, Bárány's (which A4
gives as Thm 3.32, itself resting on Gale's Thm 3.28 and **Borsuk's Thm 3.29,
which A4 states without proving**), Greene's one-page 2002 proof, and Matoušek's
2004 "combinatorial" proof via the octahedral Tucker lemma, which is a discrete
Borsuk–Ulam in substance and is not short. The library has no algebraic topology.
Disposition: `deferred`, recorded in §29 with the exact licence — an algebraic
topology track supplying Borsuk–Ulam. *Frankl–Rödl* (A4 Thm 5.19, the omitted
intersection theorem): [B/C] on the same machinery; scaffolded as a stated
theorem with `proved_here: false` **only if** a step-2 Beta confirms the proof
closes in bounded steps, otherwise deferred.

FS: the uniform and nonuniform Ray-Chaudhuri–Wilson bounds agree; Frankl–Wilson
holds with $p$ composite; Borsuk's conjecture holds in the plane (it does — and
that is why the `fs-` must be phrased about general $d$, not $d=2$: **the
$d=2$ and $d=3$ cases are true theorems**, so a careless false-statement item here
would itself be false); the distance-graph chromatic number is polynomial in $n$.

B: the nonuniform bound checked against all $2$-subsets of $[4]$; the
multilinearisation of a small polynomial computed; the Frankl–Wilson hypothesis
verified on an explicit $k$-uniform family; the $\pm1$-cube construction written
out for small $d$ with its diameter computed.

CEX: an $L$-intersecting family attaining $\sum_{i\le s}\binom ni$; a $k$-uniform
family with $k\bmod p\in L$ violating the modular bound, showing that hypothesis
is load-bearing.

Traps. (i) The uniform sharpening is **not** a corollary of the nonuniform bound
and must not be written as one. (ii) Borsuk's conjecture is *true* for $d\le3$;
any Statement or `fs-` on this page must quantify correctly or it becomes a false
statement about a true theorem. (iii) $L$ is a set of *integers* in the classical
theorem and a set of *residues* in the modular one; the two hypotheses look alike
and are not.

Provenance: Statements `literature-derived` (A4, read verbatim). Proofs
`literature-derived`; the split into multilinearisation lemma + independence
argument + counting is `ai-altered` structuring of A4's own proof.

---

## CB-14a (ENRICHED, split). Block Designs, Steiner Systems and Fisher's Inequality

**Anchor:** `block-designs-and-finite-projective-planes` (planned, unauthored).
`requires`: CB-13, `congruences-and-the-chinese-remainder-theorem`,
`inclusion-exclusion-and-the-pigeonhole-principle`,
`determinants-of-matrices-over-a-commutative-ring`,
`eigenvalues-eigenvectors-and-the-characteristic-polynomial`,
`cyclic-groups-and-orders` (for Bose's quasigroup).

§11 put designs, projective planes, MOLS and the Steiner existence theorem on one
page. Against the 60-item ceiling and the enrichment this block now carries, that
is a split, not a budget problem: CB-14a takes the design theory proper, CB-14b
the geometry, CB-14c the coding and scheme-theoretic continuation. **Splitting is
never dropping** — every result §11 named survives, and several it did not reach
are added.

DEFS: a $2$-$(v,k,\lambda)$ design with $2\le k<v$, together with a `rem-`
recording $\mathrm{BIBD}(v,b,r,k,\lambda)$ and $S_\lambda(2,k,v)$ as synonyms
(convention 3); the **point–block incidence matrix** $N$; a **symmetric** design
($b=v$); a $t$-$(v,k,\lambda)$ design and the **Steiner system** $S(t,k,v)$ as
the $\lambda=1$ case; a **Steiner triple system** $\mathrm{STS}(v)$; a
**resolution** and a resolvable design; a **difference set** in a finite group and
its **development**; a **Hadamard matrix** and a Hadamard design.

THMS: **the replication number is constant** (landmark; #104) — every point lies
in the same number $r$ of blocks, by double counting the pairs $(q,B)$ with
$q\ne p$ and $p,q\in B$, which gives $r_p(k-1)=\lambda(v-1)$ independent of $p$;
**$bk=vr$**, by double counting incident point–block pairs; the **divisibility
conditions** these force, and their necessity for existence; **Fisher's
inequality** (landmark) $b\ge v$, from $NN^{\mathsf T}=(r-\lambda)I+\lambda J$
with $r>\lambda$ when $k<v$, so $NN^{\mathsf T}$ is positive definite, hence
nonsingular, hence $v=\operatorname{rank}NN^{\mathsf T}\le\operatorname{rank}N\le b$;
**$\det(aI+bJ)=(a+bv)a^{v-1}$** as its own lemma, since three later theorems spend
it; **the symmetric-design identities** — $\det(NN^{\mathsf T})=(k-\lambda)^{v-1}k^2$,
$\det N=\pm k(k-\lambda)^{(v-1)/2}$, and $N^{\mathsf T}N=NN^{\mathsf T}$, i.e.
**any two distinct blocks of a symmetric design meet in exactly $\lambda$
points** and the dual is again a symmetric design; **Bruck–Ryser–Chowla, the even
case** (landmark) — if a symmetric $2$-$(v,k,\lambda)$ design with $v$ even
exists then $k-\lambda$ is a perfect square, in five steps from
$(\det N)^2=(k-\lambda)^{v-1}k^2$, $\det N\in\mathbb{Z}$ and $v-1$ odd;
**the existence of $\mathrm{STS}(v)$ iff $v\equiv1,3\pmod 6$** (landmark), with
necessity from the divisibility arithmetic and sufficiency split into **Bose's
construction** for $v\equiv3$ and **Skolem's** for $v\equiv1$, each its own
theorem; the **development of a difference set is a symmetric design**;
**a Hadamard matrix has order $1$, $2$ or a multiple of $4$**; **the equivalence
between a Hadamard matrix of order $4m$ and a symmetric $2$-$(4m-1,2m-1,m-1)$
design**; the **Paley construction** of Hadamard matrices from quadratic residues
in $\mathbb{F}_q$.

**Bose's construction, scaffolded in full** because the harvest verified it step
by step and because "if the sufficiency proof cannot be written in a bounded
number of numbered steps it DROPS" (§11) is now answerable: it can. Write
$v=3n$ with $n=2t+1$ odd. On $\mathbb{Z}/n$ define $x\circ y=\frac{n+1}{2}(x+y)$,
well defined because $2$ is invertible mod an odd $n$; $\circ$ is commutative and
idempotent and $x\circ-$ is a bijection. Points $\mathbb{Z}/n\times\{1,2,3\}$;
blocks $\{(x,1),(x,2),(x,3)\}$ for each $x$, and $\{(x,i),(y,i),(x\circ y,i+1)\}$
for each $i\in\mathbb{Z}/3$ and each unordered pair $x\ne y$. The count is
$n+3\binom n2=n(3n-1)/2=v(v-1)/6$. The verification splits into two cases — same
layer, and adjacent layers, where $x=y$ takes the type-(i) block and $x\ne y$ needs
the unique $b$ with $x\circ b=y$, which is $\ne x$ because $b=x$ would force
$y=x\circ x=x$. About fifteen numbered steps including the case analysis.

**Skolem's construction is scaffolded but flagged.** It adjoins $\infty$ to
$\mathbb{Z}/n\times\{1,2,3\}$ with $n=2t$ even and uses the half-idempotent
commutative quasigroup $x\circ y=(t+1)(x+y)\bmod 2t$; $x\circ x=2x$, so only $t$
elements are idempotent and $\infty$ absorbs the rest. **The exact block list must
be copied from a source before authoring** — van Lint & Wilson Ch. 19,
Lindner & Rodger *Design Theory*, or Colbourn & Dinitz *Handbook* Part II — and
the harvest explicitly did **not** verify it against a primary source. Recorded as
a blocker in §29. Do not reconstruct it from memory; that is precisely the failure
mode the generated-claim rule exists to stop.

FS: every parameter triple satisfying the divisibility conditions is realised
(the honest witness is now available — a symmetric design with $v$ even and
$k-\lambda$ not a square, ruled out by the even case of BRC, which this page
**does** prove; §11's note that the natural witnesses were all denied is stale);
Fisher's inequality reverses to $b\le v$; $r$ may be stipulated in the definition
rather than derived; a Hadamard matrix exists of every order divisible by $4$
(open — so this is a `rem-` about an open problem, **not** an `fs-`).

B: $\mathrm{STS}(7)$ = the Fano plane's lines and $\mathrm{STS}(9)$ written out;
Bose's construction run at $v=9$ and its blocks checked against that list; the
incidence matrix of $\mathrm{STS}(7)$ and $NN^{\mathsf T}$ computed; a
$(7,3,1)$-difference set in $\mathbb{Z}/7$ developed; the Paley Hadamard matrix
of order $8$; Kirkman's schoolgirl problem stated with a resolution of
$\mathrm{STS}(15)$ exhibited but not derived.

CEX: a parameter set passing the divisibility test with no design; a design that
is not symmetric; a $\pm1$ matrix of order $3$ with orthogonal rows (there is
none — so this `cex-` must instead be the order-$3$ *non-existence*, phrased as
the theorem it is).

Traps. (i) The constancy of $r$ is a **theorem**; a definition that stipulates it
stipulates something provable, and this is the page's first well-definedness
obligation. (ii) Fisher's inequality fails over $\mathbb{F}_2$ and the reason is
mathematical, not technical: the argument turns on positive definiteness, an
ordered-field notion, and $\det((r-\lambda)I+\lambda J)=(r-\lambda)^{v-1}(r-\lambda+\lambda v)$
can vanish mod $2$. Say so; do not write "over any field". (iii) Kirkman's
schoolgirl problem is a *resolvable* $\mathrm{STS}(15)$; the general theorem
($\mathrm{KTS}(v)$ exists iff $v\equiv3\bmod 6$, Ray-Chaudhuri–Wilson 1971) is
**statement only** with `proved_here: false`. Wilson's and Keevash's existence
theorems likewise.

Provenance: Statements `literature-derived` throughout. Bose's construction's
proof is `literature-derived`; Skolem's is `not-supplied` until the block list is
sourced, and the item does not ship before then.

---

## CB-14b (NEW, split). Finite Projective Planes, MOLS and Bruck–Ryser

**Anchor:** immediately after CB-14a's examples page.
`requires`: CB-14a, `algebraic-extensions-degree-and-finite-fields`,
`vector-spaces-and-linear-independence`, `primes-and-the-fundamental-theorem-of-arithmetic`,
`congruences-and-the-chinese-remainder-theorem`.

DEFS: a **finite projective plane** by its three axioms — two distinct points lie
on a unique line; two distinct lines meet in a unique point; there exist four
points no three collinear — with the third axiom labelled as exactly what
excludes the degenerate models; the **order** of a plane (#105) with the affine
counts stated alongside (convention 4); $PG(2,q)$; an **affine plane**; a
**Latin square**, **orthogonal** Latin squares, $N(n)$, and a **transversal
design** $TD(k,n)$; a **Desarguesian** plane.

THMS: **every line of a finite projective plane has the same number of points**
(#105, landmark) — the bijection between two lines through a point off both, and
only then may "the order $n$" be written; **a plane of order $n$ has $n^2+n+1$
points and $n^2+n+1$ lines, with $n+1$ points on each line and $n+1$ lines
through each point**, and **is a symmetric $2$-$(n^2+n+1,n+1,1)$ design**, which
is the bridge item to CB-14a; **the axioms are self-dual**, so every theorem
dualises — stated as a theorem about the dual incidence structure, not as a
slogan; **$PG(2,q)$ is a projective plane of order $q$ for every prime power
$q$** (landmark), from $1$- and $2$-dimensional subspaces of $\mathbb{F}_q^3$ and
$(q^3-1)/(q-1)=q^2+q+1$; **$N(n)\le n-1$**, and **$N(n)=n-1$ iff a projective
plane of order $n$ exists**, equivalently an affine plane of order $n$,
equivalently a $TD(n+1,n)$ — three equivalences, each its own item because each
is a different construction; **$N(q)=q-1$ for a prime power $q$** by
$L_a(i,j)=ai+j$ over $\mathbb{F}_q$, $a\ne0$; **Bruck–Ryser for projective
planes** (landmark) — if a projective plane of order $n$ exists and
$n\equiv1,2\pmod4$ then $n$ is a sum of two integer squares — hence **no plane of
order $6$**; the **Fano plane is the unique plane of order $2$**.

**Bruck–Ryser is the page's one substantial build, and the harvest audited it in
full (A9).** The chain is: $AA^{\mathsf T}=A^{\mathsf T}A=nI+J$ and
$\det A=(n+1)n^{n(n+1)/2}\ne0$; the substitution $z=xA$ giving
$\sum z_i^2=n\sum x_i^2+(\sum x_i)^2$, then adding $nx_{v+1}^2$ to both sides —
**and this is exactly where $n\equiv1,2\pmod4$ is used**, because it makes
$v+1=n^2+n+2$ a multiple of $4$ so the variables group in fours; **Lagrange's
four-square theorem** to write $n=n_1^2+n_2^2+n_3^2+n_4^2$; **Euler's four-square
identity** realised as the matrix
$N=\begin{psmallmatrix}n_1&-n_2&-n_3&-n_4\\ n_2&n_1&-n_4&n_3\\ n_3&n_4&n_1&-n_2\\ n_4&-n_3&n_2&n_1\end{psmallmatrix}$
with $\lvert N\rvert=n^2$, so $y=Nx$ satisfies $\sum y^2=n\sum x^2$ blockwise; a
lemma that positive definiteness of a quadratic form survives a nonsingular
substitution and the elimination of one variable; a descent eliminating
$x_1,\dots,x_v$ one at a time, ending at $nx_{v+1}^2=Y^2+s^2$; and finally the
**Fermat two-square descent** ($p\mid A^2+B^2$ with $p\nmid A,B$ implies $p$ is a
sum of two squares) together with the **Brahmagupta–Fibonacci identity**
$(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2$. Split as
`lem-quadratic-form-nonsingular-substitution`, `lem-fermat-two-square-descent`,
`lem-brahmagupta-fibonacci-identity`, `thm-bruck-ryser-projective-plane`.
**No Hasse–Minkowski, no $p$-adics, no Witt cancellation** — the harvest checked
this specifically, because the common belief that Bruck–Ryser needs local–global
theory is what would otherwise have got it denied.

**The one external input is Lagrange's four-square theorem, and this library does
not have it.** `ls items/ | grep -i four-square` returns nothing, and neither
quadratic residues nor sums of two squares appear anywhere in `items/`. Under the
SEAMS §4 ownership table, "Diophantine equations" belong to `number-theory`,
whose elementary block anchors after `splitting-fields-examples` — **below** the
combinatorics band, so citing it is legal in plan order and creates no forward
reference. Disposition, in preference order: (1) `number-theory` mints
`thm-lagrange-four-squares` and CB-14b cites it — **recorded as an amendment owed
in §28**; (2) if that track declines or lands elsewhere, CB-14b mints it locally
(the descent proof is bounded and needs only modular arithmetic, which is
published), with a `rem-` recording the duplication risk; (3) never a
`proved_here: false` fallback, because the theorem is provable in scope and the
narrow last resort is not for results one is merely reluctant to build. **This is
an unresolved seam and §29 records it as such.**

**Denied, with the reason stated on the page.** *General Bruck–Ryser–Chowla for
odd $v$* — the Diophantine condition
$z^2=(k-\lambda)x^2+(-1)^{(v-1)/2}\lambda y^2$ — needs Hasse–Minkowski, or Hall's
classical route through Witt cancellation and rational quadratic forms. The
library has no theory of rational quadratic forms. Disposition: a source-cited
`rem-` with `proved_here: false`, the exact source, and the failed in-library
route recorded, exactly as the narrow last resort requires. *Nonexistence of a
plane of order $10$* (Lam–Thiel–Swiercz, by computer search): statement only,
`proved_here: false`. *Bose–Shrikhande–Parker* (Euler's conjecture is false;
$N(n)\ge2$ for all $n\ne2,6$): statement only. *Full coordinatisation* — a
Desarguesian projective plane is $PG(2,K)$ for a skew field $K$, and a finite one
is $PG(2,q)$ by Wedderburn's little theorem (A6 §3.4, §3.7): the **statement** is
scaffolded, the coordinatisation proof is deferred with its reason. **Wedderburn's
little theorem itself belongs to `abstract-algebra`** and is recorded in §28.

FS: a projective plane exists of every order (open — a `rem-`, not an `fs-`);
Bruck–Ryser rules out order $10$ ($10\equiv2\bmod4$ and $10=1+9$ **is** a sum of
two squares, so BR says nothing — this is the sharpest possible illustration that
BR is a necessary and not a sufficient condition, and it is the page's best
`fs-`); every affine plane extends uniquely to a projective plane (it does — so
the `fs-` must be about something else); $N(6)=5$.

B: the Fano plane written out with its seven lines; $PG(2,3)$ counted and one
line exhibited; two orthogonal Latin squares of order $3$ from $ai+j$ over
$\mathbb{F}_3$; a complete set of $2$ MOLS of order $3$ converted into the affine
plane of order $3$; Bruck–Ryser applied to $n=6$ in full arithmetic; the
incidence matrix of the Fano plane and its determinant.

CEX: two Latin squares that are not orthogonal; a degenerate incidence structure
satisfying the first two axioms but not the third (a near-pencil), which is
exactly what axiom three excludes; a plane order allowed by BR for which existence
is open.

Traps. (i) Affine and projective orders differ and every "order" sentence states
both counts. (ii) The Fano plane is $\mathrm{STS}(7)$ and $PG(2,2)$ and the
unique $2$-$(7,3,1)$ design; **one item establishes the identifications and every
later page cites that item**, or the library will end up holding three unrelated
Fano planes. (iii) Latin squares are not defined on CB-14a; if the enumerative
block wants them earlier, that is an amendment, not a second definition.

Provenance: Statements `literature-derived` (A6, A9, A1 §4.8, van Lint–Wilson).
Bruck–Ryser's proof is `literature-derived` from A9, read in full.

---

## CB-14c (NEW). Linear Codes, Association Schemes and the Delsarte Bound

**Anchor:** immediately after CB-14b's examples page.
`requires`: CB-14b, CB-13, `algebraic-extensions-degree-and-finite-fields`,
`gaussian-elimination-and-row-reduction`, GT-7a (for simultaneous
diagonalisation — see the placement note).

**Placement note.** This pair genuinely needs *commuting symmetric matrices are
simultaneously diagonalisable* (A1 Prop. 2.1.1), which GT-7a mints. Two orders
were possible; putting CB-14c after GT-7a rather than before it costs nothing —
codes do not appear in the spectral pages — and avoids a forward reference. If
the orchestrator prefers to keep the design block contiguous, CB-14c may sit here
and declare the simultaneous-diagonalisation citation as its single forward
reference on the `thm-bose-mesner-algebra` item; the scaffold's preference is the
reorder, per SEAMS §5(1).

DEFS: a linear $[n,k,d]_q$ code; generator and parity-check matrices; Hamming
weight and distance, and the **minimum distance**; a **perfect** code; an
**MDS** code; the **weight enumerator** $W_C(x,y)$; an **association scheme**
$(A_0,\dots,A_d)$ on a finite set; the **Bose–Mesner algebra**; the primitive
idempotents $E_j$ and the eigenmatrices $P$, $Q$; the **inner distribution** of a
subset.

THMS: for a linear code, **minimum distance = minimum nonzero weight** — the
first item, and the reason linear codes are tractable at all; the **Singleton
bound** $d\le n-k+1$ and the definition of MDS as the equality case; the
**Hamming (sphere-packing) bound**; **Hamming codes**
$[(q^r-1)/(q-1),\,(q^r-1)/(q-1)-r,\,3]_q$ **are perfect**, with the observation —
as a numbered theorem, not an aside — that the parity-check matrix is exactly the
point set of $PG(r-1,q)$, which is what makes this page the natural continuation
of CB-14b; **Reed–Solomon codes are MDS**, needing only that a nonzero polynomial
of degree $<k$ has fewer than $k$ roots (the same published fact CB-23 spends);
the **Plotkin bound** by double counting; **the Bose–Mesner algebra is closed
under both matrix and Schur product** and has the two distinguished bases
$\{A_i\}$ and $\{E_j\}$ (A1 Thm 11.2.1, 11.2.2), resting on **commuting symmetric
matrices are simultaneously diagonalisable** (A1 Prop. 2.1.1); **Delsarte's linear
programming bound** in its inequality form $aQ\ge0$ (A1 Thm 11.3.1);
**MacWilliams' identity** $W_{C^{\perp}}(x,y)=\lvert C\rvert^{-1}W_C(x+(q-1)y,\,x-y)$.

**MacWilliams character seam (settled by R-3).** Its proof cites abstract
algebra RT-3 `def-character-of-a-finite-abelian-group` and the accompanying
orthogonality theorem. CB-14c does not mint character vocabulary and no
forward reference to CB-27 remains. Godsil's Bose--Mesner route remains an
alternative proof, not a second definition.

**Denied.** The **Golay codes** $G_{23}$, $G_{11}$ and their
uniqueness/perfectness classification; **Reed–Muller** decoding theory; the
**Witt designs** $S(5,24,8)$, $S(5,12,6)$, $S(4,11,5)$, $S(3,8,4)$ and the
**Mathieu groups** $M_{24}$, $M_{12}$, $M_{11}$ — statement-only `rem-` items,
because their constructions are long and the Mathieu groups rest on a
sporadic-simple-group development the library has not reached. Using Delsarte's
bound as an actual **optimisation** to derive numerical bounds is [C] and is
deferred: the inequality is scaffolded, the LP is not.

FS: every perfect code is a Hamming or Golay code (this is essentially true — van
Lint–Tietäväinen — so the `fs-` must be phrased about *linear* perfect codes over
arbitrary alphabets, or dropped; **check before shipping**); the Singleton bound
is attained by every code; MacWilliams holds for nonlinear codes.

B: the binary Hamming $[7,4,3]$ code with its parity-check matrix identified with
the Fano plane's points; a Reed–Solomon code over $\mathbb{F}_5$; the Hamming
bound checked against $[7,4,3]$; the weight enumerator of $[7,4,3]$ and its dual
computed and checked against MacWilliams; the Hamming scheme $H(2,2)$ with its
$P$ and $Q$ matrices.

CEX: a nonlinear code whose minimum distance is not the minimum weight; a code
meeting the Hamming bound that is not perfect (there is none — so this `cex-`
must be replaced by a code *not* meeting the bound, or dropped).

Traps. (i) $\lambda$ is overloaded three ways across CB-14a/b/c and the strongly
regular pages; the disambiguating `rem-` of convention 5 is required. (ii) The
Hamming code's parity-check matrix **is** $PG(r-1,q)$'s point set — an identity,
proved, not an analogy. (iii) Delsarte's bound is an inequality here; do not
write "the LP bound gives $\dots$" for a numerical value the page does not derive.

Provenance: Statements `literature-derived` (A1 Ch. 11, A5, van Lint–Wilson).
Proofs `literature-derived`; the Hamming/$PG$ identification item is `ai-altered`
(both facts are standard; the explicit identification as a numbered theorem is
the library's phrasing).

---

## GT-7a (NEW, split). Spectral Graph Theory I: the Adjacency Matrix, Perron–Frobenius and the Matrix-Tree Theorem

**Anchor:** `algebraic-and-spectral-graph-theory` (planned, unauthored).
`requires`: `the-spectral-theorem-and-singular-value-decomposition`,
`the-determinant-of-a-linear-operator`,
`determinants-of-matrices-over-a-commutative-ring`,
`eigenvalues-eigenvectors-and-the-characteristic-polynomial`,
`graphs-walks-and-connectivity`, `trees-forests-and-spanning-trees`,
`inner-product-spaces-and-orthogonality`.

§11's GT-7 is split in two. The reason is not length alone: GT-7a is the
dictionary between linear algebra and graphs and everything downstream cites it,
while GT-7b is a body of applications that a reader can take or leave. Two of
§11's three "verify on disk" flags are now answered — the cofactor machinery is
published (§23.0), Cauchy–Binet is supplied by abstract algebra LA-7 under the
2026-08-14 reconciliation — and the third, Courant–Fischer, is
answered in the worst way: **the spectral theorem page carries 0 items** (§27).

DEFS: the **adjacency matrix** $A(G)$ of a finite simple graph and the
**spectrum** (#100) — the eigenvalues are real by the spectral theorem for real
symmetric matrices, and only then may they be listed
$\theta_1\ge\dots\ge\theta_n$ (convention 2); the **degree matrix** $D$ and the
**Laplacian** $L=D-A$ (convention 1); the **signless Laplacian** $Q=D+A$, named
as A1 §1.1 names it; the **directed incidence matrix** $M$ of an orientation;
**cospectral** graphs; the **normalised Laplacian** $\mathcal{L}=D^{-1/2}LD^{-1/2}$,
minted here and used only where conductance requires it; the **weighted**
adjacency matrix and weighted Laplacian.

THMS: **$(A^h)_{xy}$ counts walks of length $h$ from $x$ to $y$** (landmark; A1
Prop. 1.3.1, A3 Thm 1.1) — induction on $h$, and the item everything else on
these two pages uses; hence $\operatorname{tr}A^h=\sum\theta_i^h$, with
$\operatorname{tr}A=0$, $\operatorname{tr}A^2=2\lvert E\rvert$ and
$\operatorname{tr}A^3=6\cdot\#\text{triangles}$ as three corollaries;
**the spectrum is an isomorphism invariant, and the converse is false** — the
smallest witness is exhibited concretely on the B page ($K_{1,4}$ and
$C_4\cup K_1$, both with spectrum $\{2,0,0,0,-2\}$), which discharges §11's
"if a small witness cannot be verified in numbered steps, this `fs-` DROPS";
**$\bar d\le\theta_1\le\Delta$** (A1 Prop. 3.1.1), lower by the Rayleigh quotient
at $\mathbf 1$, upper by the largest eigenvector coordinate;
**Perron–Frobenius, symmetric case** (landmark; A2 Thm 4.5.1) — for a connected
graph, $\theta_1$ has a strictly positive eigenvector, $\theta_1\ge-\theta_n$,
and $\theta_1>\theta_2$ — with **A2 Lemma 4.5.2 as a separate item** (a
nonnegative eigenvector of $A$ on a connected graph is strictly positive);
**$G$ connected and bipartite iff $\theta_n=-\theta_1$**, and then the whole
spectrum is symmetric about $0$ (A2 Props. 4.5.3, 4.5.4);
**$x^{\mathsf T}Lx=\sum_{uv\in E}(x_u-x_v)^2$**, hence $L$ is positive
semidefinite and $L\mathbf 1=0$, and $L=MM^{\mathsf T}$;
**$\dim\ker L$ is the number of connected components** (landmark; A1
Prop. 1.3.7), hence $\mu_2>0$ iff $G$ is connected; **Cauchy–Binet is cited**
from abstract algebra LA-7 `thm-cauchy-binet-formula` in its rectangular
$m\le n$ form. GT-7a does not mint it and retains only a `rem-` explaining why
ordinary determinant multiplicativity is insufficient;
**all cofactors of $L$ are equal** (#101, A3 Lemma 9.9: if all row sums and all
column sums vanish then all cofactors agree) — the residual half of §20 #101 now
that the Laplace expansion is published; **the matrix-tree theorem** (landmark;
A3 Thm 9.8) — every cofactor of $L$ equals the number $\tau(G)$ of spanning
trees, by Cauchy–Binet applied to $L=MM^{\mathsf T}$ with one row deleted, plus
A3 Lemma 9.7 that $\det(M_0[S])=\pm1$ if $S$ is a spanning tree and $0$ otherwise;
the **weighted matrix-tree theorem**, whose cofactor is
$\sum_T\prod_{e\in T}w_e$; **Cayley's formula, second proof**, with a required
agreement `rem-` citing the published Prüfer proof on
`trees-forests-and-spanning-trees`; the **spectra of $K_n$, $C_n$, $K_{m,n}$, the
hypercube $Q_n$ and the Petersen graph, computed as theorems**; **eigenvalues of
a circulant** $\sum_{s\in S}\omega^{js}$ from `thm-complex-nth-roots-and-roots-of-unity`,
and of the hypercube $n-2\lvert u\rvert$ from the $\pm1$ characters
$\chi_u(x)=(-1)^{u\cdot x}$ — **both needing no representation theory**, which is
why they are the two Cayley-graph cases scaffolded here.

**Perron–Frobenius is the finding that makes this page possible.** The general
nonnegative irreducible theorem needs compactness or Brouwer, and Brouwer in
dimension $\ge2$ is deferred (`DEFERRED.md` §4). Stanley confirms the cost by
declining to pay it — A3 §3 states the theorem "without proof". But the
**symmetric** case, which is the only case a graph needs, has a one-page
elementary proof (A2 Thm 4.5.1) using the spectral theorem, the variational
characterisation $\theta_1=\max_{\lVert x\rVert=1}x^{\mathsf T}Ax$ *together with
the fact that a maximiser is an eigenvector*, and connectivity. **No compactness,
no fixed point, no topology**, about eighteen numbered steps. Two cautions for
the author: A2 proves it for $M=A+H$ with $H$ nonnegative diagonal but writes the
proof for $H=0$, so either state it for $H=0$ or supply the routine extension;
and §21's Collatz–Wielandt row remains a legitimate *alternative* route for the
general irreducible nonnegative case via
`thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, which §19.2 F4
verified — **the two routes are both available and the page should scaffold the
symmetric one and record the other in a `rem-`**, since the symmetric proof is
shorter and needs no metric topology at all.

FS: cospectral graphs are isomorphic; $\mu_2>0$ characterises $2$-connectivity
(it characterises connectivity); the matrix-tree theorem needs a *particular*
cofactor; $\theta_1=\Delta$ for every graph; Cauchy–Binet follows from
multiplicativity of the determinant.

B: $A(C_4)$, $A(K_3)$ and their spectra; $\tau(K_4)$ by the matrix-tree theorem
checked against Cayley's $4^2=16$; walks of length $3$ counted by $A^3$ in a
named small graph; the Petersen spectrum $\{3,1^5,(-2)^4\}$; $K_{1,4}$ and
$C_4\cup K_1$ exhibited as the smallest cospectral pair with both characteristic
polynomials computed; $Q_3$'s spectrum from the character formula; a circulant on
$5$ vertices.

CEX: two cospectral non-isomorphic graphs; a graph with $\theta_1<\Delta$; a
disconnected graph whose Laplacian kernel has dimension $>1$; a nonnegative
eigenvector of a *disconnected* graph's adjacency matrix that is not strictly
positive, showing connectivity is load-bearing in Lemma 4.5.2.

Traps. (i) Convention 2 is not a formality: $\lambda_2$ means opposite ends of
the spectrum for $A$ and for $L$, and a page that does not state its ordering
will ship a false statement. (ii) Cauchy–Binet must be cited from LA-7
`thm-cauchy-binet-formula`, not re-minted (§23.0). (iii) The Laplace cofactor expansion **is** published — cite
`thm-laplace-cofactor-expansion`, do not re-mint it. (iv) $L=MM^{\mathsf T}$
needs an *orientation*; the theorem's content is that the cofactor does not depend
on which one, and that is a numbered step.

Provenance: Statements `literature-derived` (A1, A2, A3, all read in full).
Proofs `literature-derived`; the choice to present Perron–Frobenius in A2's
symmetric form with A1's general version as a remark is `ai-altered` structuring.

---

## GT-7b (NEW, split). Spectral Graph Theory II: Interlacing, the Hoffman Bounds and Strongly Regular Graphs

**Anchor:** immediately after GT-7a's examples page.
`requires`: GT-7a, `the-spectral-theorem-and-singular-value-decomposition`,
`inner-product-spaces-and-orthogonality`, `polynomial-rings-and-roots`,
`graph-colouring`, CB-14a.

DEFS: the **Rayleigh quotient** $R_A(x)=x^{\mathsf T}Ax/x^{\mathsf T}x$; an
**equitable partition** and its **quotient matrix**; a **strongly regular graph**
$\mathrm{srg}(v,k,\lambda,\mu)$ (#102), with the required `rem-` separating this
$\lambda$ from the design $\lambda$ (convention 5); a **conference graph**; a
**Moore graph**; the **Lovász theta function** $\vartheta(G)$ **defined by
orthonormal representations**, not by a semidefinite program.

THMS: **Courant–Fischer** (landmark; A1 Thm 2.4.1)
$\theta_k=\max_{\dim W=k}\min_{0\ne x\in W}R_A(x)$ — **minted here if and only if
the spectral-theorem page does not mint it**; §19.2 F3 asks the linear-algebra
track for it and §28 carries the amendment, but that page is unauthored and this
scaffold does not depend on a promise; **Cauchy interlacing** for principal
submatrices (A1 Cor. 2.5.2, $\theta_i\ge\eta_i\ge\theta_{n-m+i}$) and the general
$S^{\mathsf T}S=I$ form (A1 Thm 2.5.1), plus **quotient-matrix interlacing** for
an equitable partition (A1 Cor. 2.5.4); **the Hoffman ratio bound** (landmark;
A1 Thm 3.5.2, verbatim: "If $\Gamma$ is regular of nonzero degree $k$, then
$\alpha(\Gamma)\le n(-\theta_n)/(k-\theta_n)$, and if a coclique $C$ meets this
bound, then every vertex not in $C$ is adjacent to precisely $-\theta_n$ vertices
of $C$") — **proved by the direct route**, writing the characteristic vector as
$(\lvert S\rvert/n)\mathbf 1+w$ with $w\perp\mathbf 1$ and using
$\chi^{\mathsf T}A\chi=0$ and $w^{\mathsf T}Aw\ge\theta_n\lVert w\rVert^2$, which
needs no interlacing at all — with the interlacing proof recorded as the source's
route in a `rem-`; the **Cvetković inertia bound** (A1 Thm 3.5.1) and the
**nonregular ratio bound** (A1 Prop. 3.5.3); **Hoffman's chromatic bound**
$\chi(\Gamma)\ge1-\theta_1/\theta_n$ (A1 Thm 3.6.2); **Wilf's bound**
$\chi(\Gamma)\le1+\theta_1$ (A1 Prop. 3.6.1) — **the inequality only**, since its
equality case invokes Brooks' theorem, which §24 GT-9 supplies, so the equality
clause is either a citation of GT-9 (if GT-9 lands below) or is dropped with a
note; **the strongly regular parameter identity** $A^2=kI+\lambda A+\mu(J-I-A)$
and $k(k-\lambda-1)=\mu(v-k-1)$; **the srg eigenvalues**
$r,s=\tfrac12[(\lambda-\mu)\pm\sqrt{(\lambda-\mu)^2+4(k-\mu)}]$ with their
multiplicities; **the integrality (rationality) condition** (landmark; A1
Thm 9.1.3) — the multiplicities are nonnegative integers, so either $f=g$ (the
half case, forcing $v=4\mu+1$, $k=2\mu$, $\lambda=\mu-1$) or
$\sqrt{(\lambda-\mu)^2+4(k-\mu)}$ is a positive integer; **the integrality
lemma** as its own item — a rational algebraic integer is a rational integer,
citing the published `cor-rational-root-of-an-integer-is-an-integer`;
**the friendship theorem** (landmark) — a finite graph in which every two
distinct vertices have exactly one common neighbour has a vertex adjacent to all
others — split as `lem-friendship-graph-is-regular` (the purely combinatorial
half: non-adjacent vertices have equal degree by the induced bijection between
neighbourhoods) plus the algebraic endgame $A^2=(k-1)I+J$, $n=k^2-k+1$,
eigenvalues $\pm\sqrt{k-1}$ off $\mathbf 1$, $\operatorname{tr}A=0=k+(f-g)s$ so
$s\mid k=s^2+1$ so $s=1$; **the Hoffman–Singleton / Moore graph theorem**
(landmark; A1 Thm 9.1.5) — a $k$-regular graph of girth $5$ and diameter $2$ has
$k^2+1$ vertices, is an $\mathrm{srg}(k^2+1,k,0,1)$, and $k\in\{2,3,7,57\}$,
because $\sqrt{4k-3}=s$ must be an integer with $s\mid15$; **the Lovász sandwich**
$\alpha(\Gamma)\le\vartheta(\Gamma)\le\chi(\bar\Gamma)$ (A1 Thm 3.7.4),
**$\vartheta(\Gamma\boxtimes\Delta)\le\vartheta(\Gamma)\vartheta(\Delta)$**
(A1 Lemma 3.7.2), the **Shannon capacity bound** $c(\Gamma)\le\vartheta(\Gamma)$
(A1 Thm 3.7.3), and **$\vartheta(C_5)=\sqrt5$**, hence the Shannon capacity of
$C_5$ is $\sqrt5$; **Paley graphs are strongly regular** (A1 Prop. 9.1.1), which
is the page's finite-field example and the seam to CB-14b.

**Denied.** The **SDP characterisation of $\vartheta$**, which needs convex/SDP
duality: a source-cited `rem-`. **Ramanujan graph existence** (LPS, Margulis):
statement only. **Non-abelian Cayley graph spectra**, which need the full
Artin–Wedderburn representation theory of finite groups (A1 §6.3, A5's algebra
chapters): `deferred`, and the reason is a seam rather than a difficulty —
representation theory is owned by `abstract-algebra` (SEAMS §4) and its block's
placement relative to the combinatorics band is not settled. §29 records it.
**Alon–Boppana** ($\theta_2\ge2\sqrt{k-1}-o(1)$, A1 Prop. 4.1.1) moves to §24
GT-21 with the rest of the expander material.

FS: the srg parameter conditions are sufficient for existence (they are not; the
$(v,k,\lambda,\mu)=(21,10,4,5)$-type feasibility discussion belongs in a `rem-`
and a genuine non-existent-but-feasible parameter set must be **checked against a
source before shipping**); Hoffman's ratio bound holds for non-regular graphs in
the same form; interlacing holds for arbitrary (non-principal) submatrices; every
Moore graph of degree $57$ exists (**open** — a `rem-`, not an `fs-`).

B: the Petersen graph as $\mathrm{srg}(10,3,0,1)$ with its eigenvalues and
multiplicities computed and the Hoffman bound giving $\alpha\le4$, checked against
the true $\alpha=4$; $\vartheta(C_5)=\sqrt5$ computed from an explicit orthonormal
representation (the Lovász umbrella); the friendship theorem checked on the
windmill graphs; $\mathrm{Paley}(13)$ exhibited as an srg; interlacing checked on
a $3\times3$ principal submatrix of $A(C_5)$.

CEX: a feasible parameter set with no strongly regular graph; a non-regular graph
where the regular Hoffman bound fails; a graph of girth $5$ and diameter $2$ that
is not regular (there is none — the regularity is a theorem, so this `cex-` must
instead be a girth-$5$ graph of diameter $3$).

Traps. (i) Every result on this page is stated for a **regular** graph unless it
says otherwise; the nonregular versions are genuinely different statements with
different bounds. (ii) The friendship theorem's endgame is an integrality
argument and cites the published rational-root corollary, not "clearly $s$ is an
integer". (iii) $\vartheta$ must be defined once, by orthonormal representations;
a page that switches to the SDP definition mid-development is asserting an
equivalence it has not proved.

Provenance: Statements `literature-derived` (A1, verbatim where quoted; A4 for
the friendship theorem). Proofs `literature-derived`; presenting the Hoffman
bound by the direct route with interlacing as a remark is `ai-altered`
structuring of A1's presentation.

---

## 23.9 Well-definedness obligations added by this block

Continuing §20's numbering and its rule — **each row is a required numbered item
on the page named, never a parenthetical.**

| # | page | the definition | what must be proved first |
|---|---|---|---|
| 110 | CB-13 | the bilinear form $\langle x,y\rangle=\sum x_iy_i$ on $\mathbb{F}_2^n$ | it is **bilinear and symmetric, and degenerate**; it is not an inner product and there is no positivity to appeal to. The whole Oddtown argument needs only bilinearity and $\langle v_i,v_i\rangle=1$, and saying otherwise is a false statement |
| 111 | CB-13 | the down-shift $S_i$ on a family | that $S_i(\mathcal F)$ has the same cardinality and that iterating terminates are **two separate lemmas**; Sauer–Shelah by shifting is unprovable without both |
| 112 | CB-23 | the multilinear reduction of $f$ on $\{0,1\}^n$ | existence **and uniqueness**, before "the" multilinear polynomial agreeing with $f$; uniqueness is the identity lemma with $t_i=1$ |
| 113 | CB-23 | $\mathrm{EE}(D)$, $\mathrm{EO}(D)$ | Eulerian sub-digraphs of a finite digraph form a finite set, so the two counts exist; and the Alon–Tarsi hypothesis is $\mathrm{EE}\ne\mathrm{EO}$ for **some** orientation, an existential the statement must carry explicitly |
| 114 | CB-24 | the space of multilinear polynomials of degree $\le s$ | its dimension is $\sum_{i\le s}\binom ni$ — a **theorem** (the squarefree monomials are a basis), and every bound on the page is that number |
| 115 | CB-24 | $f(d)$, Borsuk's number | the set of admissible $m$ is nonempty for a bounded set, so a least exists by `thm-well-ordering-principle`; and "smaller diameter" needs diameter defined for a bounded subset of $\mathbb{R}^d$ as a supremum that is attained or not — state which |
| 116 | CB-14a | $r$ and $b$ | **#104 restated and kept**: $r$ constant is a theorem by double counting, and $b$ follows from $bk=vr$. A definition that stipulates them stipulates something provable |
| 117 | CB-14a | $\det(aI+bJ)=(a+bv)a^{v-1}$ | its own lemma, proved from the eigenvalue $a+bv$ on $\mathbf 1$ and $a$ with multiplicity $v-1$; three later theorems spend it and it must not be recomputed inline three times |
| 118 | CB-14a | Bose's operation $x\circ y=\frac{n+1}{2}(x+y)$ on $\mathbb{Z}/n$ | **well defined only because $n$ is odd**, so $2$ is invertible; commutativity, idempotence and the bijectivity of $x\circ-$ are three separate numbered facts, and the block-count verification uses all three |
| 119 | CB-14b | "the order $n$" of a projective plane | **#105 restated and kept**: that every line has the same number of points is a theorem, by the bijection between two lines through a point off both. The affine counts are stated in the same breath |
| 120 | CB-14b | $N(n)$, the maximum number of MOLS | the set of sizes of pairwise-orthogonal families is nonempty and bounded by $n-1$ (itself a theorem), so a maximum exists; $N(1)$ and $N(2)$ are stated boundary cases |
| 121 | CB-14c | the minimum distance of a code | a minimum over a **nonempty** finite set of pairs, so $\lvert C\rvert\ge2$ is a hypothesis; for a linear code the equality with the minimum nonzero weight is the page's first theorem and is what makes it computable |
| 122 | CB-14c | the primitive idempotents $E_j$ of an association scheme | their existence and uniqueness rests on **commuting symmetric matrices are simultaneously diagonalisable**; the eigenmatrices $P,Q$ are defined by the two bases and are well defined only after that |
| 123 | GT-7a | the spectrum of a graph | **#100 restated and kept**: real by the spectral theorem, and only then listable in order. Convention 2 is part of the definition |
| 124 | GT-7a | $L=MM^{\mathsf T}$ and the matrix-tree cofactor | $M$ depends on a chosen orientation; that $L$, and hence every cofactor, is **independent of the orientation** is a numbered step, not a remark |
| 125 | GT-7a | the normalised Laplacian $\mathcal{L}=D^{-1/2}LD^{-1/2}$ | $D^{-1/2}$ requires every degree to be nonzero, i.e. **no isolated vertices**; state the hypothesis at the definition, since the graphs the expansion pages care about are regular and the hypothesis is invisible there |
| 126 | GT-7b | the Rayleigh quotient and Courant–Fischer | $R_A(x)$ needs $x\ne0$; the max–min is over a nonempty set of subspaces of each dimension. If the spectral-theorem page does not mint Courant–Fischer, GT-7b mints it and the attainment of the extremum is part of the statement |
| 127 | GT-7b | the srg eigenvalue multiplicities $f,g$ | **#102 restated and kept**: they are given by a formula that must be a nonnegative integer, and that integrality **is** the feasibility condition — so they are computed before any parameter set is called feasible |
| 128 | GT-7b | $\vartheta(G)$ by orthonormal representations | the infimum is over a nonempty set (the standard basis representation of $\bar G$ always works) and is **attained** — say which, and do not silently switch to the SDP definition, whose equality with this one is not proved here |

## 23.10 Choice ledger rows added by this block

Every result in §23 is finite-dimensional or finite-combinatorial and costs
**nothing**: rank bounds over a stated field, polynomial spaces of finite
dimension, finite designs and planes, and the spectral theorem for a real
symmetric $n\times n$ matrix. Two rows are worth recording explicitly because a
reader will expect a cost and there is none.

| result | page | cost | note |
|---|---|---|---|
| **Perron–Frobenius, symmetric case** | GT-7a | **none — ZF** | via the spectral theorem and the variational characterisation. **No Brouwer, no compactness.** The general nonnegative irreducible version, if ever wanted, goes through Collatz–Wielandt and `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values` (§19.2 F4), which is also choice-free |
| **the Kahn–Kalai disproof of Borsuk's conjecture** | CB-24 | **none** | a finite $\pm1$-cube construction plus the modular Frankl–Wilson bound; nothing about $\mathbb{R}^d$ beyond the diameter of a finite point set |
| every other result in §23 | CB-13, CB-23, CB-24, CB-14a/b/c, GT-7a/b | **none** | recorded once here rather than page by page, so that a page which *does* spend choice stands out |

---

# 24. The graph-theory block

Sources are keyed **G1**–**G10**: **G1** Diestel, *Graph Theory*, 5th ed.
(`https://diestel-graph-theory.com/`, obtained in full, all 12 chapters);
**G2** Zhao, *Graph Theory and Additive Combinatorics*
(`https://yufeizhao.com/gtacbook/gtacbook.pdf`, 342 pp., full text; also mirrored
at MIT OCW); **G3** Schrijver, *A Course in Combinatorial Optimization*
(`https://homepages.cwi.nl/~lex/files/dict.pdf`, full text) and his "A Pythagoras
proof of Szemerédi's regularity lemma"
(`https://homepages.cwi.nl/~lex/files/szem_pf3.pdf`, 2 pp.); **G4** Cambridge
Part II Graph Theory, Leader (Michaelmas 2007) and Thomason (2005), two
independent note sets, both full; **G5** Harju, *Lecture Notes on Graph Theory*,
full; **G6** Keller & Trotter, *Applied Combinatorics* (2017), full;
**G7** West, *Introduction to Graph Theory*, 2nd ed., TOC; **G8** Bondy & Murty,
*Graph Theory* GTM 244 (2008) and *Graph Theory with Applications* (1976), TOC
at section and named-subsection level; **G9** Bollobás, *Modern Graph Theory*
GTM 184, TOC; **G10** Oxford B8.5 / C8.3 synopses. Verbatim headings, the full
margin-apparatus dependency extraction, and the step-by-step proof audits:
`research/subjects-01-combinatorics-harvest-graphtheory.md`.

**One source is explicitly disqualified.** Bollobás, *Extremal Graph Theory*
(1978 / Dover 2004) could be obtained at **chapter-list level only** — every
archive.org derivative returns a content block, WorldCat and the ACM DL are
gated, Google Books has no structured contents, and the Library of Congress MARC
record carries no 505 formatted-contents note. Because its headings cannot be
enumerated, **no disposition can be given for them, so it cannot satisfy clause
(b)/(c) of the source-depth rule and must not be counted as one of a pair's two
independent treatments.** The dispatch named it as a standard reference; it is
one, and it is nevertheless unusable under this library's harvest rule. Recorded
in §29.

## 24.0 The colouring anomaly, investigated

The dispatch flagged `graph-colouring` (published) as "anomalously thin next to
its neighbours". It is, and the investigation is worth recording because the
number understates the gap.

**What is actually on the page**, read from the spec: four A items —
`def-proper-vertex-colouring-and-chromatic-number`, `lem-greedy-colouring-bound`
($\chi\le\Delta+1$), `def-clique-and-independence-numbers`, and
`thm-clique-independence-chromatic-bounds` ($\omega(G)\le\chi(G)$ and
$\lvert V(G)\rvert\le\chi(G)\alpha(G)$) — plus two B items,
`ex-chromatic-number-of-a-complete-graph` and `cex-greedy-order-on-p-four`.
Its neighbours run 20–35 items. It is a stub: a definition, the greedy bound, and
two inequalities.

**Three findings sharpen what the enrichment must do.**

1. **The gap is not one page's worth.** Every source harvested treats vertex
   colouring, edge colouring, list colouring and perfect graphs as four separate
   developments. G1 ch. 5 alone has 6 sections, 21 numbered results and 54
   exercises; the Cambridge Part II schedule gives colouring **5 of 24
   lectures**, equal-largest with extremal graph theory. §19.3 already concluded
   four pages from the 60-item ceiling; the source structure gives the same
   answer independently.
2. **Colouring is load-bearing, not a leaf.** G1's margin apparatus — a number in
   square brackets beside a result names a later result that uses it — shows
   Lemma 5.2.3 (every $k$-chromatic graph has a $k$-chromatic subgraph of minimum
   degree $\ge k-1$) used at **7.3, 9.2.1, 9.2.3 and 11.2.3**, four separate later
   chapters; Prop. 5.5.2 (chordal $\Rightarrow$ perfect) used at 7.3.3; Prop. 5.5.1
   (chordal $\iff$ pasting along complete subgraphs) used at 12.3.6, which feeds
   12.4.4. **The library's four-item colouring page is a structural bottleneck for
   extremal graph theory, Ramsey theory and graph minors alike**, and that is a
   second, independent argument for closing it.
3. **One published item is already half of a landmark.**
   `thm-clique-independence-chromatic-bounds` gives $\lvert V\rvert\le\chi\alpha$.
   For a perfect graph $\chi=\omega$, so this is exactly the necessity direction of
   Lovász's criterion $\lvert H\rvert\le\alpha(H)\omega(H)$ (G1 Thm 5.5.6) — the
   theorem whose sufficiency direction *implies* the perfect graph theorem. GT-13
   cites the published item for necessity and proves only sufficiency. **Nothing
   is retrofitted onto the published page**; the citation runs the other way.

**A duplicate-notion finding, recorded for the orchestrator.** The library defines
clique and independence numbers **twice**: `def-clique-and-independence-numbers`
on `graph-colouring`, and `def-clique-stable-set-and-numbers` on
`induced-subgraphs-and-hereditary-graph-classes`. Both are published, neither is
wrong, and the second page also publishes
`lem-complement-swaps-cliques-and-stable-sets`. Nothing in this scaffold may mint
a third. **Every new page cites `def-clique-and-independence-numbers`**, which is
the earlier of the two, and GT-13 carries a `rem-` recording the synonymy —
"independent" (G1) and "stable" (G3, G8) are the same notion, and this library
holds both names. This is an observation about published content, not a repair;
retrofitting published items is forbidden and none is proposed.

## 24.1 Conventions this block adopts

Taken from the harvest's §D, where each is backed by a verbatim quotation.

| # | question | the disagreement | adopted | why |
|---|---|---|---|---|
| 7 | "graph" | G1 §1.1: "A **graph** is a pair $G=(V,E)$ of sets such that $E\subseteq[V]^2$" — simple. G8 (both editions) admit loops and parallel edges and say *simple graph* for the restricted notion. G1's own note: "authors who usually work with multigraphs tend to call them 'graphs'" | **graph = simple**, matching the published `def-finite-simple-graph` and `rem-finite-simple-graph-convention` | it is what the library already publishes, and it is the graduate standard (G1, G7, G9, G4, G10) |
| 8 | when multigraphs are unavoidable | G1 switches deliberately in exactly two places and says why: "there are areas in graph theory (such as plane duality; see Chapters 4.6 and 6.5) where multigraphs arise more naturally than graphs" | **every flow item and every plane-duality item declares `multigraph`**, citing the published `def-multigraph-loop-and-digraph` | G1's Thms 6.3.1, 6.3.3, 6.5.3, 6.6.1 and all three Tutte flow conjectures are stated for multigraphs and are **false or vacuous** if silently restricted to simple graphs: contracting a plane graph produces loops and parallel edges |
| 9 | "$H$-free" | **the most dangerous ambiguity in this block.** Extremal graph theory (Turán, Erdős–Stone, Kővári–Sós–Turán, the regularity method) means *no subgraph*; structural theory (the strong perfect graph theorem, $\chi$-boundedness, hereditary classes) means *no induced subgraph*. G1 always writes "as an induced subgraph" in ch. 5; G2 ch. 1 is titled "Forbidding a Subgraph" | **never write "$H$-free" bare.** Extremal pages write "no subgraph isomorphic to $H$"; structural pages write "no induced copy of $H$", citing the published `def-h-free-and-family-free-graph`, which is the *induced* notion. Each page carries a `rem-` naming the reading in force | the library **already straddles both**: `extremal-graph-theory` (20 items) uses the subgraph reading and `induced-subgraphs-and-hereditary-graph-classes` (23 items) uses the induced one. "Triangle-free" is the case where they coincide, which is exactly why the ambiguity survives unnoticed |
| 10 | $\kappa(K^n)$ | G1 §1.4: "$G$ is **$k$-connected** if $\lvert G\rvert>k$ and $G-X$ is connected for every $X$ with $\lvert X\rvert<k$", hence "$\kappa(K^n)=n-1$ for all $n\ge1$". Some sources set $\kappa(K^n)=\infty$ or leave it undefined | **$\kappa(K^n)=n-1$**, citing the published `def-vertex-and-edge-connectivity` | the $\lvert G\rvert>k$ clause is the whole point: without it $K^n$ would be $k$-connected for every $k$. It is what makes global Menger and $\kappa\le\lambda\le\delta$ come out right for complete graphs. $\kappa(K^1)=0$ and $\kappa(K^2)=1$ are stated boundary cases |
| 11 | girth of a forest | G1 §1.3: girth $=\infty$ and circumference $=0$ when there is no cycle. Some sources leave girth undefined, a few set it to $0$ | **$\infty$**, matching the published `def-graph-distance-and-girth` | it is what makes "girth at least $g$" monotone and the $\delta\ge3\Rightarrow g<2\log\lvert G\rvert$ corollary contrapositive-clean |
| 12 | is the null graph connected? | G1 §1.4: "connected if it is **non-empty** and any two of its vertices are linked by a path"; hence "the empty graph has no components". The opposite convention is common in topology-influenced treatments | **G1's**, matching the published `def-connected-graph-and-connected-component` | it is **load-bearing for Tutte's 1-factor theorem**, where $q(G-S)$ counts odd components and $S=V(G)$ must give $q(\varnothing)=0$ |
| 13 | degeneracy vs colouring number | G1's $\operatorname{col}(G)$ = least $k$ with a vertex enumeration in which each vertex is preceded by fewer than $k$ neighbours; the literature's **degeneracy** $=\operatorname{col}-1=\max_{H\subseteq G}\delta(H)$ | **both names in the definition item, with the relation proved**; the greedy bound reads $\chi\le\operatorname{col}=\text{degeneracy}+1$ | the off-by-one is a real trap and both names are standard |
| 14 | $\operatorname{ch}(G)$ vs $\chi_\ell(G)$ | G1 and G8 write $\operatorname{ch}$; Molloy–Reed and most recent papers write $\chi_\ell$ | **define both in one sentence, then use $\operatorname{ch}$** | neither is wrong and a reader who knows only one must not be stranded |
| 15 | tree-width's $-1$ | universal; G1's own footnote: "the '$-1$' in the definition of width serves no other purpose than to make this statement true" — namely $\operatorname{tw}(\text{tree})=1$ | **the $-1$, labelled as a convention with the reason** | omitting it gives $\operatorname{tw}(\text{tree})=2$ |
| 16 | regularity-lemma form | G1 7.4.1 bakes equitability into the definition (exceptional bin $V_0$, equal other parts) and allows a lower bound $m\le k$; G2 2.1.9 states the plain version and derives equitability separately (2.1.20); G3's Pythagoras note states a directed **refinement** version. Worse, **G1 alone uses two regularity notions**: §7.4's $\varepsilon$-regular and §7.6's $(\varepsilon,d)$-uniform, with his own warning "To avoid confusion, we shall call this '$\varepsilon$-uniformity' here" | **G1's $\varepsilon$-regular as primary; equitability and the lower bound $m$ as explicit stated clauses, not hidden in the definition; $\varepsilon$-uniformity as its own definition item with both implications proved** ($\varepsilon$-regular $\Rightarrow$ $\varepsilon$-uniform, $\varepsilon$-uniform $\Rightarrow$ $\sqrt[3]{\varepsilon}$-regular) | **a proof that silently swaps the two notions is a fatal citation defect, not a nitpick** |
| 17 | chromatic polynomial normalisation | four conventions circulate: the counting one ($P(G,k)=\#$ proper $k$-colourings, monic, alternating signs); two forms of deletion–contraction; the Whitney rank expansion, whose $(-1)^{\lvert S\rvert}$ is intrinsic; and the Tutte normalisation $P(G,k)=(-1)^{r(E)}k^{c(G)}T(G;1-k,0)$, where books absorb the sign and the $k^{c}$ differently | **the counting convention as the definition**; the Whitney and Tutte forms as separate theorems each carrying its own stated normalisation | a Tutte-normalised identity and a counting-normalised identity must never sit on a page together without a reconciling `rem-` |
| 18 | small vocabulary | "independent" (G1) = "stable" (G3, G8); "nonseparable" (G8) $\ne$ "2-connected" exactly (a block may be $K^2$ or $K^1$); "chordal" (G1) = "triangulated", but *triangulated* collides with the plane-triangulation sense; G1's $\log$ is **base 2** and $\ln$ is natural; G1's $\mathbb{N}$ **includes** $0$ | **independent, 2-connected, chordal**; every asymptotic statement quoted from G1 states its log base explicitly | "triangulated" would collide with `def-maximal-plane-and-maximally-planar-graph`'s sense, and a silently reinterpreted $\log$ changes an asymptotic statement's content |

---

## GT-9 (NEW). Vertex Colouring I: Degeneracy, Critical Graphs, Brooks and De Bruijn–Erdős

**Anchor:** `graph-colouring-examples` (published).
`requires`: `graph-colouring`, `graphs-walks-and-connectivity`,
`trees-forests-and-spanning-trees`, `ramsey-theory` (for the ultrafilter lemma's
home page — verify at build time), `matchings-covers-menger-and-network-flows`.

DEFS: the **colouring number** $\operatorname{col}(G)$, verbatim from G1 p. 127 —
"the least number $k$ such that $G$ has a vertex enumeration in which each vertex
is preceded by fewer than $k$ of its neighbours" — together with **degeneracy**
$\max_{H\subseteq G}\delta(H)$ and the proved relation (convention 13, #80); the
**smallest-last (degeneracy) ordering**; a **$k$-critical** graph and a
**colour-critical** edge (#81); the **Mycielski construction** $\mu(G)$;
**arboricity**.

THMS: **$\chi(G)\le\operatorname{col}(G)=\max_{H\subseteq G}\delta(H)+1$**
(landmark; G1 Prop. 5.2.2) — the sharpened greedy bound, proved by building the
ordering backwards, choosing $v_n$ of minimum degree in $G$, then $v_{n-1}$ of
minimum degree in $G-v_n$, and so on, with the converse
$\operatorname{col}(G)\ge\operatorname{col}(H)\ge\delta(H)+1$ for $H\subseteq G$;
**every $k$-chromatic graph has a $k$-chromatic subgraph of minimum degree at
least $k-1$** (G1 Lemma 5.2.3) — **three steps, and the highest-fan-out cheap item
in the whole block** (G1 uses it in four later chapters), proved by taking
$H\subseteq G$ minimal with $\chi(H)=k$ and noting a vertex of degree $\le k-2$
would let a $(k-1)$-colouring of $H-v$ extend; **every $k$-chromatic graph
contains a $k$-critical subgraph** (#81) — take an edge-minimal one — with the
corollary $\delta\ge k-1$ for a $k$-critical graph, which is Dirac's bound and
which the id `lem-k-chromatic-subgraph-of-large-minimum-degree` should carry
rather than a bare `dirac` name, since `cor-diracs-hamiltonicity-theorem` is
already published and means something else; **every $k$-critical graph is
$2$-connected** and **has no cut vertex**; **Brooks' theorem** (landmark; G1
Thm 5.2.4, verbatim: "Let $G$ be a connected graph. If $G$ is neither complete
nor an odd cycle, then $\chi(G)\le\Delta(G)$"); **Gallai–Roy** (every orientation
has a directed path on $\chi(G)$ vertices, and some orientation achieves it) —
sourced from G7/G8 rather than G1, so a step-2 Beta confirms the exact statement
before authoring; **the Mycielskian is triangle-free with chromatic number one
larger**, hence **triangle-free graphs of arbitrarily large chromatic number**
(landmark — the single best answer to "surely a graph with no triangle is easy to
colour"); **De Bruijn–Erdős** (landmark; G1 Thm 8.1.3, verbatim: "Let $G=(V,E)$ be
a graph and $k\in\mathbb{N}$. If every finite subgraph of $G$ has chromatic
number at most $k$, then so does $G$").

**Brooks is scaffolded with BOTH proofs, and the split is what makes it
affordable.** G1's route is an induction on $\lvert G\rvert$ with four claims,
about 14–18 steps as one proof — too long for one item, and it decomposes exactly
along its own claims into four items of $\le8$ steps: *every $\Delta$-colouring of
$G-v$ uses all $\Delta$ colours on $N(v)$*; *for $i\ne j$ the vertices $v_i,v_j$
lie in a common component $C_{i,j}$ of the two-colour subgraph $H_{i,j}$*; *each
$C_{i,j}$ is a $v_i$–$v_j$ **path***; *for distinct $i,j,k$ the paths $C_{i,j}$
and $C_{i,k}$ meet only in $v_i$*. Lovász's route (G1 Exercise 17, attributed in
the Notes to Lovász 1973) is shorter overall — ~10 steps for the greedy-order
lemma, ~8 for the non-separating-pair lemma, ~4 to assemble — but the second
lemma is where the work hides and it needs the connectivity machinery of GT-14.
**Scaffold G1's as the main proof, Lovász's as the second proof**: G1's needs only
greedy colouring, and Lovász's exhibits the greedy-order technique the degeneracy
items also spend, so the two pay for different machinery. Both exception cases are
exactly $K^{\Delta+1}$ and the odd cycles, and **connectedness is essential** — the
statement is false for a disjoint union containing a $K^{\Delta+1}$, which is the
page's required `cex-`.

**De Bruijn–Erdős is scaffolded at three choice strengths, and this is unusually
valuable** — G1 gives three proofs and the library can show the same theorem at
three costs on one page.

- **Countable $G$, via König's infinity lemma.** Enumerate $V$, set
  $G_n:=G[v_0,\dots,v_n]$, let $V_n$ be the (finite, nonempty) set of
  $k$-colourings of $G_n$, join each to its restriction, and take a ray. **Five to
  six steps given the published `thm-konig-infinity-lemma-for-ordered-trees`,
  which is titled "in ZF"** — so this half is **choice-free**, and §21's corrected
  row says exactly that. The *ordered* hypothesis is what buys it.
- **Arbitrary $G$, via the ultrafilter lemma.** G1's third proof takes the compact
  product $\{1,\dots,k\}^V$ and applies Tychonoff to closed sets $A_U$ with the
  finite intersection property. This library publishes
  `thm-ultrafilter-lemma` and `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma`,
  so the route is available **and its cost is BPI, named in the Statement**
  (§21's row, unchanged).
- **The reversal HOLDS, and it is now sourced rather than folklore.** For each
  fixed **$k\ge3$**, De Bruijn–Erdős is **equivalent to the ultrafilter lemma /
  BPI over ZF** — Läuchli 1971, reproved openly as **Corollary 4.2 of
  Rorabaugh, Tardif & Wehlau, *LMCS* **13**(1:1) (2017)**, and catalogued as
  Howard–Rubin **Form 14 G(n)**. **The $k=2$ case is different**: it is equivalent
  to Choice(2) (Mycielski), not to BPI, and a page that states one equivalence for
  all $k$ is wrong. The countable case is ZF, and Gasarch–Hirst locate it at
  $\mathrm{WKL}_0$ over $\mathrm{RCA}_0$. **Scaffold the equivalence for $k\ge3$
  as a numbered theorem with the hypothesis on $k$ in the Statement**, the $k=2$
  case as its own item, and the countable ZF case as the third.

A `rem-choice-ledger`-style remark is **required** on this page, and the
finiteness convention of the published `rem-finite-simple-graph-convention` is
**explicitly suspended** in the De Bruijn–Erdős statement — it is the only
infinite statement on the page.

FS: $\chi(G)\le\Delta(G)$ for every graph (the witnesses are $K^{n}$ and the odd
cycles, and they are exactly Brooks' exceptions); every $k$-critical graph is
$k$-regular; $\operatorname{col}(G)=\Delta(G)+1$ always; a triangle-free graph has
chromatic number at most $3$ (the witness is the Mycielskian tower); De
Bruijn–Erdős holds for the **list** chromatic number with the same proof (it does
not, and GT-12 says why).

B: $\operatorname{col}$ and the degeneracy ordering computed on a named small
graph; the Petersen graph's chromatic number by Brooks; $\mu(C_5)$ = the
Grötzsch graph exhibited, triangle-free with $\chi=4$; a $4$-critical graph
exhibited; the greedy bound and the degeneracy bound compared on a star.

CEX: a disconnected graph violating Brooks' conclusion, showing connectedness is
a hypothesis; a graph where the natural vertex order makes greedy use
$\Delta+1$ colours while the degeneracy order uses fewer (the published
`cex-greedy-order-on-p-four` is the $P_4$ case and is **cited, not re-minted**);
a $k$-chromatic graph with a vertex of degree $<k-1$, showing why Lemma 5.2.3
passes to a subgraph rather than to $G$.

Traps. (i) `def-clique-and-independence-numbers` is published; cite it (§24.0).
(ii) The published `lem-greedy-colouring-bound` is $\chi\le\Delta+1$; the new
$\chi\le\operatorname{col}$ is a **sharpening**, so the new item cites the
published one and does not restate it. (iii) Brooks' exception list depends on
$\Delta$: for $\Delta=2$ it is the odd cycles and $K^3=C_3$, for $\Delta\ge3$ only
$K^{\Delta+1}$. A Statement that says "except $K^{\Delta+1}$ and odd cycles"
without that observation is still correct, but the `ex-` must show both regimes.

Provenance: Statements `literature-derived` (G1, quoted). Proofs
`literature-derived`; the decomposition of Brooks into four claim-items is
`ai-altered` structuring of G1's own claim numbering.

---

## GT-10 (NEW). Vertex Colouring II: the Chromatic Polynomial, Broken Circuits and Acyclic Orientations

**Anchor:** immediately after GT-9's examples page.
`requires`: GT-9, `graph-colouring`, `incidence-algebras-and-mobius-inversion`,
`polynomial-rings-and-roots`, `graphs-walks-and-connectivity`,
CB-19 (the partition lattice and characteristic polynomials, §22).

DEFS: $P(G,k)$ as **the number of proper colourings $V(G)\to\{1,\dots,k\}$**
(convention 17) — a *function* until the polynomiality theorem licenses the word
"polynomial" (#82); deletion and contraction, citing the published
`def-graph-deletion-contraction-minor-and-subdivision`; a **broken circuit**
relative to a chosen linear order of $E(G)$, and the **broken-circuit complex**
(#83); an **acyclic orientation**; the **lattice of flats** of a graph.

THMS: **deletion–contraction** $P(G,k)=P(G-e,k)-P(G/e,k)$ (landmark), and hence
**$P(G,\cdot)$ is a polynomial** of degree $n=\lvert G\rvert$, monic, with
coefficient of $k^{n-1}$ equal to $-\lVert G\rVert$ and coefficients alternating
in sign (#82 — the word "polynomial" is not licensed before this item, and §8 #30
recorded this obligation years ago against a page that was never built);
**the Whitney rank expansion** $P(G,k)=\sum_{S\subseteq E}(-1)^{\lvert S\rvert}k^{c(S)}$,
where $c(S)$ is the number of components of $(V,S)$, whose $(-1)^{\lvert S\rvert}$
is intrinsic and not a convention; **Whitney's broken-circuit theorem**
(landmark) — the coefficients of $P(G,k)$ count subsets containing no broken
circuit — together with **the independence of the coefficients from the chosen
edge order** (#83), which is the well-definedness obligation that makes the
theorem non-false-sounding; **the chromatic polynomial of a graph is the
characteristic polynomial of its lattice of flats** (landmark), the item that
connects this page to CB-19's Möbius machinery and repays the incidence-algebra
page the library already publishes; **Stanley's reciprocity theorem** (landmark)
— $(-1)^{n}P(G,-k)$ counts pairs consisting of an acyclic orientation and a
compatible $k$-colouring, hence $\lvert P(G,-1)\rvert$ is the number of acyclic
orientations (#84) — legitimate precisely because $P$ is a polynomial with integer
coefficients, which #82 established; the chromatic polynomials of $K_n$, trees,
cycles and complete bipartite graphs computed as theorems.

**Source status, stated honestly.** G1 gives the chromatic polynomial as
**Exercise 19 only** — "let $P_G(k)$ denote the number of vertex colourings
$V(G)\to\{1,\dots,k\}$. Show that $P_G$ is a polynomial in $k$ of degree
$n:=\lvert G\rvert$, in which the coefficient of $k^n$ is $1$ and the coefficient
of $k^{n-1}$ is $-\lVert G\rVert$" — and never defines $T(G;x,y)$. **The gap is
now closed**, by a dedicated harvest whose sources are keyed **T1** Goodall, *The
Tutte polynomial and related polynomials* (Charles University lecture notes,
134 pp., full text with a full TOC — **the primary lecture-note-set backing, and
the source that closes the Diestel gap completely**); **T2** Beck & Sanyal,
*Combinatorial Reciprocity Theorems* (317 pp., ch. 1 = colourings and flows);
**T3** Ellis-Monaghan & Merino (= M4, obtained here in full LaTeX source);
**T4** Sokal, *The multivariate Tutte polynomial* (54 pp.); **T5** Stanley 1973,
the original reciprocity paper; **T6** Blass & Sagan 1986; **T7** Dohmen 2010;
**T8** Read 1968; **T9** Bondy & Murty §8.4. Full ledger:
`research/subjects-01-combinatorics-harvest-tutte.md`.

**The library has no chromatic polynomial at all** — only the chromatic *number* —
so under the build-the-machinery rule the definition, the polynomiality and the
deletion–contraction recursion are a **three-item, ~30-step build on this page**,
and GT-17c and GT-18 cite it rather than rebuilding it. **Three independent routes
to polynomiality were obtained**, and one of them is unexpectedly cheap for this
library: the **bond-lattice Möbius route**, which the published
`def-poset-mobius-function` and `cor-mobius-inversion-for-finite-posets` already
support. Scaffold deletion–contraction as the main proof and the Möbius route as
the second, since the second is also what the lattice-of-flats identity needs.

**Both previously open items are now source-complete.** The **broken-circuit
theorem** has **three full proofs** in hand — Whitney's involution as Goodall
gives it, Dohmen's induction, and the Blass–Sagan bijection — and is [B]. **Stanley's
reciprocity theorem** is 22–26 steps and **purely elementary**, from T5 with T2's
modern treatment. Neither needs anything the library lacks.

FS: every polynomial with alternating integer coefficients is the chromatic
polynomial of some graph; $P(G,k)$ determines $G$ up to isomorphism (the witness
is any two non-isomorphic trees on the same number of vertices — both have
$k(k-1)^{n-1}$, and it is the cheapest chromatically-equivalent pair available);
the broken-circuit count depends on the edge order; $P(G,-1)$ is the number of
*all* orientations.

B: $P(K_3,k)$, $P(P_4,k)$, $P(C_4,k)$ and $P(K_{2,3},k)$ computed by
deletion–contraction; the broken-circuit expansion of $C_4$ under two different
edge orders, giving the same coefficients; $\lvert P(C_4,-1)\rvert=14$ checked
against a direct count of acyclic orientations; two non-isomorphic trees with
equal chromatic polynomials.

CEX: two chromatically equivalent non-isomorphic graphs; a subset of edges
containing a broken circuit but no circuit, showing the two notions differ; an
integer polynomial with alternating signs that is not any graph's chromatic
polynomial.

Traps. (i) "Polynomial" is unlicensed until #82; the definition item must speak
of the *number of colourings*. (ii) A broken circuit depends on the edge order and
the coefficients do not — those are two different sentences and both must appear.
(iii) The Tutte normalisation is a **separate theorem with its own stated
normalisation** (convention 17) and belongs to GT-18, not here.

Provenance: Statements `literature-derived` pending the polynomial harvest;
`ai-altered` is the correct label for any statement whose exact form this scaffold
had to reconstruct, and no statement on this page may ship as `ai-generated`.

---

## GT-11 (NEW). Edge Colouring: König, Vizing, and Class 1 versus Class 2

**Anchor:** immediately after GT-10's examples page.
`requires`: GT-9, `graph-colouring`, `graphs-walks-and-connectivity` (for
`thm-bipartite-iff-no-odd-cycle` and `def-line-graph`),
`matchings-covers-menger-and-network-flows`.

DEFS: a **proper edge colouring** and the **chromatic index** $\chi'(G)$ (#85);
the **$\alpha\beta$-subgraph** of a proper edge colouring (#86); a **fan** at a
vertex, in G1's sequence formulation; **class 1** and **class 2** graphs, verbatim
from G1 p. 133; the **snark**, verbatim from G1 §6.6: "A cubic bridgeless graph or
multigraph without a $4$-flow (equivalently, without a $3$-edge-colouring)".

THMS: **the components of the $\alpha\beta$-subgraph are paths and even cycles**
(#86) — each vertex meets at most one $\alpha$-edge and one $\beta$-edge — and
hence **swapping $\alpha$ and $\beta$ on one component leaves a proper edge
colouring**; **König's edge-colouring theorem** (landmark; G1 Prop. 5.3.1: "Every
bipartite graph $G$ satisfies $\chi'(G)=\Delta(G)$") — 8–10 steps, and **the
single cheapest substantial colouring item available**, since its only dependency
is the published `thm-bipartite-iff-no-odd-cycle`; **Vizing's theorem** (landmark;
G1 Thm 5.3.2: "Every graph $G$ satisfies $\Delta(G)\le\chi'(G)\le\Delta(G)+1$"),
in **G1's sequence formulation of the fan argument**, which is exactly one printed
page and 12–16 numbered steps, against 2–3 pages for the set-of-edges
presentations in G7 §7.1 and G8 §17.2 that carry more case analysis — the two are
the same argument and the shorter one loses nothing; **every regular graph of odd
order is class 2**, in $\le6$ steps (a colour class is a matching, so has at most
$(n-1)/2$ edges, so $\Delta$ classes cover at most $\Delta(n-1)/2<\Delta n/2=\lVert G\rVert$);
**the Petersen graph is class 2**; **$\chi'(G)\in\{\omega(L(G)),\omega(L(G))+1\}$**,
i.e. Vizing restated for line graphs, which is three steps given Vizing and is the
seam to GT-13's perfect-graph material.

**§19.2 F1's fallback is what this page uses, and it is a design decision rather
than a loss.** The published `lem-kempe-component-colour-swap` is homed on
`plane-graphs-euler-and-the-five-colour-theorem`, far above this band, and cannot
be cited here. It is also the **vertex**-colouring statement. GT-11 needs the
**edge** analogue — *for a proper edge colouring and colours $\alpha,\beta$, the
components of the subgraph of $\alpha$- and $\beta$-coloured edges are paths and
even cycles* — which is a genuinely different statement, so minting it here is not
a duplicate id under any reading. The re-home §19.2 F1 recommends would still
help, because `def-kempe-chain` would then be citable as the shared vocabulary;
it remains an owner-only reading-order change and §28 carries it.

**The sourcing gap is CLOSED, and the find is worth recording.** G1 gives only the
simple-graph Vizing bound. **Shannon's bound $\chi'\le\lfloor3\Delta/2\rfloor$**
now has a complete **16-step route, uniform in $\Delta$**, from Kostochka's UIUC
Math 412 notes — **[B]**, and it is scaffolded as a theorem. **Vizing's multigraph
theorem $\chi'\le\Delta+\mu$** was closed by the harvest's best single find:
**Stiebitz, Scheide, Toft & Favrholdt's author-hosted back matter carries Vizing's
1964 and 1965 papers in full English translation with their proofs**, so the
theorem has a 22–26-step route **from the original**. It is **both** a fan and a
Kempe-chain argument, and its Corollary A.4 **is** the simple-graph case $p=1$ —
so this page proves Vizing once, in the multigraph generality, and gets G1's
Thm 5.3.2 as a corollary rather than proving it twice. **Goldberg–Seymour is
statement-only**, explicitly labelled, citing Chen–Jing–Zang; its lower bound
$\chi'\ge\lceil\Gamma\rceil$ splits out as a 4-step **[A]** item and is
scaffolded. **König's $\chi'=\Delta$ is confirmed for bipartite MULTIgraphs** by
three independent sources, so the page states it in that generality.

**One warning carried straight through from the harvest: Bondy & Murty
Exercise 17.2.8a ($\chi'\le2\Delta-\mu$) is unproved and unsourced. Do not
scaffold it.** It is exactly the kind of plausible-looking bound that a page on
this topic would otherwise absorb without a source.

FS: $\chi'(G)=\Delta(G)$ for every graph (the witness is any odd cycle, or the
Petersen graph); a class-2 graph has a vertex of degree $>\Delta$; the
$\alpha\beta$-subgraph of a proper edge colouring can contain an odd cycle;
$\chi'(G)=\chi(L(G))$ **is true by definition** — so this is not an `fs-` and the
page must not pretend otherwise.

B: $\chi'(K_4)=3$ and $\chi'(K_5)=5$ computed; $\chi'(C_5)=3$; a $\Delta$-edge-colouring
of $K_{3,3}$ by König; the Petersen graph shown class 2 by the odd-order argument
applied to a suitable subgraph, or directly; a fan constructed explicitly on a
small graph.

CEX: a class-2 graph of even order (so that "odd order" is sufficient and not
necessary); an $\alpha\beta$-swap that fails when the two colours are not both
proper.

Traps. (i) G1's "class 1 / class 2" quotation includes the reason there is no
characterisation — "no easily checkable 'certificate' is known for a graph to be
class 2" — and that is a `rem-`, not a theorem. (ii) Vizing's theorem is
$\Delta\le\chi'\le\Delta+1$; the lower bound is trivial and the upper is the
content, and both belong in the Statement. (iii) The snark definition quoted here
mentions $4$-flows, which are GT-18's material; either quote the
$3$-edge-colouring half only, or declare the forward reference on a `rem-`.

Provenance: Statements `literature-derived` (G1, quoted). Proofs
`literature-derived`.

---

## GT-12 (NEW). List Colouring, Kernels and Galvin's Theorem

**Anchor:** immediately after GT-11's examples page.
`requires`: GT-11, GT-9, `graphs-walks-and-connectivity` (`def-line-graph`),
`matchings-covers-menger-and-network-flows`, CB-23 (for Alon–Tarsi).

DEFS: **$k$-choosable** and the **choice number**, verbatim from G1 p. 134, with
$\chi_\ell$ recorded as the synonym (convention 14, #87); the edge version
$\operatorname{ch}'(G):=\operatorname{ch}(L(G))$; a **kernel** of a digraph,
verbatim from G1: "an independent set $U\subseteq V(D)$ [is] a kernel of $D$ if,
for every vertex $v\in D-U$, there is an edge in $D$ directed from $v$ to a vertex
in $U$"; a **stable matching** and the preference structure it needs.

THMS: **$\operatorname{ch}(G)\ge\chi(G)$ and $\operatorname{ch}'(G)\ge\chi'(G)$**,
because ordinary colouring is the equal-lists case; **the kernel lemma**
(landmark; G1 Lemma 5.4.3) — if $H$ has an orientation $D$ with
$d^{+}(v)<\lvert S_v\rvert$ for every $v$ and every induced subgraph of $D$ has a
kernel, then $H$ is colourable from the lists — proved by induction on
$\lvert H\rvert$ in 6–8 steps, **with G1's warning reproduced as a `rem-`: keeping
the list lengths variable is essential, and the induction fails with uniform
lengths**; **the Gale–Shapley stable matching theorem** (landmark) — **minted
here, because the library does not have it** (`ls items/ | grep -i stable-matching`
returns nothing, and `matchings-covers-menger-and-network-flows` publishes Hall,
König, Berge, Gallai and Ford–Fulkerson but no stable matching); **Galvin's
theorem** (landmark; G1 Thm 5.4.4: "Every bipartite graph $G$ satisfies
$\operatorname{ch}'(G)=\chi'(G)$"), by orienting the line graph so that for
adjacent $e,e'$ with $c(e)<c(e')$ the edge runs from $e'$ to $e$ if they meet in
$X$ and from $e$ to $e'$ if they meet in $Y$, computing $d^{+}(e)<k$, and reading
"every induced subgraph has a kernel" **directly off Gale–Shapley**, since a
stable matching *is* a kernel; **$\operatorname{ch}'(G)=\Delta(G)$ for bipartite
$G$** (G1 Cor. 5.4.5), free from Galvin and König; **$\operatorname{ch}(K_{2,4})=3$
while $\chi(K_{2,4})=2$**, the smallest explicit witness that the gap is real; and
**the gap is unbounded even for bipartite graphs** — for every $k$ there is a
$2$-chromatic graph with choice number $\ge k$ (G1 Exercise 30), with G1
Exercise 33's $\operatorname{ch}(K_{2,2,\dots,2})=r$ as the clean family.

**Alon–Tarsi is cited from CB-23, not re-minted.** CB-23 proves that a graph with
an orientation $D$ satisfying $\mathrm{EE}(D)\ne\mathrm{EO}(D)$ is
$(d^{+}_D+1)$-choosable, via the Combinatorial Nullstellensatz applied to the
graph polynomial. That page sits below this one, so this is a plain citation and
the two routes to choosability — the kernel lemma and the polynomial method — sit
side by side, which is the page's best `rem-`.

**Thomassen's 5-choosability theorem is NOT here.** It needs a plane embedding
and therefore sits above `plane-graphs-euler-and-the-five-colour-theorem`;
**GT-22 carries it**, and this page declares no forward reference to it, because
nothing here uses it.

FS: $\operatorname{ch}(G)=\chi(G)$ for every graph (the witness is $K_{2,4}$);
$\operatorname{ch}(G)\le\Delta(G)+1$ fails (it holds — greedy works with lists too
— so this must not be written as a false statement); every digraph has a kernel
(the witness is a directed triangle, and it is the reason the kernel lemma
quantifies over induced subgraphs); the list-colouring conjecture
$\operatorname{ch}'=\chi'$ is known (it is **open** — a `rem-`, not an `fs-` —
with Kahn's 1994 asymptotic result as the recorded state of the art).

B: an explicit $2$-chromatic graph with choice number $3$, namely $K_{2,4}$ with
the lists written out; the kernel of a small orientation exhibited; Galvin applied
to $K_{3,3}$; a stable matching computed by Gale–Shapley on a $3\times3$ instance.

CEX: a digraph with no kernel; a list assignment defeating a greedy order that
succeeds for equal lists; a bipartite graph with $\operatorname{ch}$ strictly
above $\chi$.

Traps. (i) $\operatorname{ch}$ quantifies over **all** list assignments of a given
size (#87); the definition ranges over a finite set only once the colour universe
is fixed, so either fix it or quantify over lists drawn from a fixed countable set
and prove independence of that choice. (ii) The kernel lemma's variable list
lengths are load-bearing; a uniform-length restatement is a false simplification.
(iii) The **infinite** case of the choice number needs BPI (§21) and either states
it or omits the infinite case entirely — never proves it silently.

Provenance: Statements `literature-derived` (G1, quoted). Gale–Shapley's statement
is `literature-derived` and its proof `literature-derived`; a step-2 Beta must
open a source for it, since G1 states it as Thm 2.1.4 without the library having
it.

---

## GT-13 (NEW). Perfect Graphs, Chordal Graphs and the Weak Perfect Graph Theorem

**Anchor:** immediately after GT-12's examples page.
`requires`: GT-9, `graph-colouring`, `induced-subgraphs-and-hereditary-graph-classes`,
`matchings-covers-menger-and-network-flows` (for König),
`chains-antichains-sperner-and-dilworth`, `gaussian-elimination-and-row-reduction`.

DEFS: a **perfect** graph — $\chi(H)=\omega(H)$ for **every induced subgraph** $H$,
including $G$ itself (#88), citing the published
`def-subgraph-induced-subgraph-and-spanning-subgraph` and
`def-clique-and-independence-numbers`; **holes** and **antiholes**, verbatim from
G1 p. 141: "induced cycles of length at least 4 in $G$ are usually referred to as
holes in $G$, while holes in $\bar G$ are antiholes of $G$"; a **chordal**
(triangulated) graph, verbatim: "each of its cycles of length at least 4 has a
chord, i.e. … it contains no induced cycles other than triangles"; **pasting**
along a complete subgraph, verbatim from G1; the **replication** $G\circ v$ (#89);
**comparability** and **interval** graphs, both verbatim from G1's exercises;
a **$\chi$-bounded** class.

THMS: **chordal $\iff$ constructible by pasting along complete subgraphs**
(landmark; G1 Prop. 5.5.1) — forward is 4 steps, the converse ~10 by taking a
minimal $a$–$b$ separator $X$ and showing $G[X]$ is complete via two shortest
$X$-paths forming a chordless cycle of length $\ge4$; **every chordal graph is
perfect** (G1 Prop. 5.5.2, 6 steps, by pasting and combining an $\omega(H_1)$- and
an $\omega(H_2)$-colouring across the complete intersection);
**Lovász's criterion** (landmark; G1 Thm 5.5.6: "A graph $G$ is perfect if and
only if $\lvert H\rvert\le\alpha(H)\cdot\omega(H)$ for all induced subgraphs
$H\subseteq G$") — **whose necessity direction is the published
`thm-clique-independence-chromatic-bounds`, cited not re-proved** (§24.0), leaving
only sufficiency, which is Gasparian's 1996 argument in 12–16 steps and is
entirely self-contained: every nonempty independent $U$ has
$\chi(G-U)=\omega(G-U)=\omega$; a $K^\omega$ meets every colour class of $G-u$ or
all but one; taking $A_0$ a maximum independent set and $A_1,\dots,A_{\alpha\omega}$
the colour classes of $\omega$-colourings of $G-u_i$, every $K^\omega$ misses
exactly one $A_i$; the incidence matrices $A$ (rows $A_i$) and $B$ (columns $K_j$)
have $AB=J-I$ of size $(\alpha\omega+1)$, which is nonsingular, so $A$ has rank
$\alpha\omega+1$ and hence $n\ge\alpha\omega+1$; **the weak perfect graph theorem**
(landmark; G1 Thm 5.5.4, Lovász 1972: "A graph is perfect if and only if its
complement is perfect") — **free from Lovász's criterion, whose condition is
symmetric in $G$ and $\bar G$**; the **replication lemma** (G1 Lemma 5.5.5: "Any
graph obtained from a perfect graph by replicating a vertex is again perfect",
#89, ~10 steps splitting on whether $\omega$ rises) and **Lovász's original route
to the perfect graph theorem through it** (~26 steps across three items), kept as
the second proof because the replication lemma is independently useful and G1's
Exercise 51 generalises it to substituting whole perfect graphs for vertices;
**the complement of a bipartite graph is perfect** (~5 steps from the published
`thm-konig-bipartite-matching-cover`); **comparability graphs are perfect** (~8
steps, Mirsky/Dilworth-flavoured, and the seam to the published
`chains-antichains-sperner-and-dilworth`); **every interval graph is chordal**,
and **the complement of an interval graph is a comparability graph**, ~6 steps
each; **$P$-free graphs are $\chi$-bounded for a fixed path $P$** (G1 Prop. 5.6.2
via Lemma 5.6.3, ~12 steps, needing nothing but induction).

**Denied, and it is the clearest case in the whole track.** The **strong perfect
graph theorem** (G1 Thm 5.5.3, Chudnovsky–Robertson–Seymour–Thomas 2006: "A graph
$G$ is perfect if and only if neither $G$ nor $\bar G$ contains an odd cycle of
length at least 5 as an induced subgraph") is 178 journal pages, and G1 declines
even to sketch it: "The proof of the strong perfect graph theorem is long and
technical, and it would not be too illuminating to attempt to sketch it."
Disposition: a source-cited `rem-` with `proved_here: false`, the exact source
(Ann. Math. **164** (2006), 51–229), and the failed in-library route recorded.
**This is the narrow last resort used exactly as the owner rule contemplates** —
well-established, source-checked, genuinely unbuildable in scope — and it is worth
contrasting with CB-24's Frankl–Wilson, where the same reflex was wrong and the
denial was withdrawn. Scott–Seymour 2016 (no odd hole $\Rightarrow$ $\chi$-bounded)
is likewise statement-only.

FS: a graph is perfect iff $\chi(G)=\omega(G)$ (the quantifier over induced
subgraphs is the content — $C_5$ plus a pendant vertex is the kind of witness
needed, and it must be checked); perfection passes to arbitrary subgraphs (it
passes to **induced** subgraphs; the witness is a graph with an odd hole as a
non-induced subgraph); every chordal graph is an interval graph; the strong
perfect graph theorem's condition can be checked in the obvious way on $G$ alone.

B: $C_5$ shown imperfect with $\chi=3>2=\omega$; the pasting construction of a
chordal graph run explicitly; Lovász's criterion checked on $C_5$
($5>2\cdot2$); a replication computed and its $\omega,\chi$ verified; an interval
representation exhibited and its chordality checked; the complement of $C_6$
identified.

CEX: an imperfect graph whose complement is imperfect (any odd hole, by the weak
theorem — but the `cex-` must be a graph exhibiting *both* directions to be worth
its place); a graph satisfying $\lvert G\rvert\le\alpha\omega$ that is imperfect
(there is none by Lovász's criterion — so this `cex-` must instead be an induced
subgraph violating it, and the page must not ship the impossible version).

Traps. (i) #88's quantifier is over **induced** subgraphs; convention 9's
"$H$-free" discipline applies to every statement on this page. (ii) $\alpha$ and
$\omega$ swap under complementation (G1: "$\alpha(\bar G)=\omega(G)$ and
$\omega(\bar G)=\alpha(G)$"); the library publishes
`lem-complement-swaps-cliques-and-stable-sets` and this page cites it.
(iii) "Triangulated" is a synonym for chordal that collides with the plane sense
(convention 18); use **chordal** everywhere and record the synonym once.

Provenance: Statements `literature-derived` (G1, quoted throughout). Proofs
`literature-derived`; choosing Gasparian's route as primary and Lovász's as
secondary is `ai-altered` structuring, and the observation that the published
$\lvert V\rvert\le\chi\alpha$ item supplies the necessity half is this scaffold's
own — it is recorded here rather than asserted inside any Statement.

---

## GT-14 (NEW). Connectivity Structure: Blocks, Ear Decompositions and Tutte's Wheel Theorem

**Anchor:** immediately after GT-13's examples page.
`requires`: `graphs-walks-and-connectivity`,
`matchings-covers-menger-and-network-flows`, `trees-forests-and-spanning-trees`,
`graph-colouring`.

This page is cheap and high-fan-out. G1's margin apparatus shows Menger 3.3.1 as
**the single highest-fan-out result in the whole book** — five forward markers
across chapters 3, 8 and 12 — and the library already publishes all four Menger
forms (`thm-menger-finite-directed-and-undirected-path-forms`,
`cor-whitney-k-connected-path-characterisation`). So the whole of G1 §§3.1–3.2 is
reachable with no new connectivity work, and GT-15 then becomes reachable too.

DEFS: a **cut vertex** and a **block** — verbatim from G1 §3.1, "a **block** is a
maximal connected subgraph without a cutvertex. Thus, every block is either a
maximal 2-connected subgraph, or a bridge (with its ends), or an isolated vertex"
(#90); the **block graph**; an **$H$-path**; an **ear decomposition**; the
**wheel** $W_n$; the **cycle space** of a graph and a **non-separating induced
cycle**.

THMS: **the blocks partition the edge set** (#90); **the block graph of a
connected graph is a tree** (landmark; G1 Lemma 3.1.4), which is what licenses
"the block tree"; **two edges lie in a common block iff …** (G1 Lemma 3.1.3, three
equivalent conditions); **cycles and bonds of $G$ are those of its blocks** (G1
Lemma 3.1.2); **the ear-decomposition theorem** (landmark; G1 Prop. 3.1.1: "A
graph is 2-connected if and only if it can be constructed from a cycle by
successively adding $H$-paths to graphs $H$ already constructed") — forward is 2
steps, converse ~8 by taking a maximal constructible subgraph, noting it is
induced, and extending along an edge $vw$ with $v\notin H$ using a $v$–$H$ path in
$G-w$; **if $G\cdot e$ is 3-connected then so is $G$** (G1 Lemma 3.2.1, ~8 steps,
citing the published `thm-whitney-connectivity-inequalities`); **every 3-connected
$G\ne K^4$ has an edge $e$ with $G\cdot e$ 3-connected** (G1 Lemma 3.2.2, ~15
steps, via finding a $TK^4$); **Tutte's wheel theorem** (landmark; G1 Thm 3.2.3:
"$G$ is 3-connected if and only if there exists a sequence $G_0,\dots,G_n$ of
graphs such that (i) $G_0=K^4$ and $G_n=G$; (ii) $G_{i+1}$ has an edge $e$ such
that $G_i=G_{i+1}\cdot e$, for every $i<n$"); **the cycle space of a 3-connected
graph is generated by its non-separating induced cycles** (G1 Thm 3.2.6, Tutte
1963); **Mader's theorem** — high average degree forces a highly connected
subgraph (G1 Thm 1.4.3), which G1's apparatus shows feeding 7.2.3 and 11.2.3, so
it is worth its place here even though it is stated in his ch. 1.

**A published item is homed above this page and cannot be cited: §19.2 F1's
`def-bridge-in-a-graph` and `lem-edge-is-a-bridge-iff-it-lies-on-no-cycle`.**
Both sit on `plane-graphs-euler-and-the-five-colour-theorem`, both have all their
dependencies on `graphs-walks-and-connectivity`, and neither is about plane
graphs. The re-home §19.2 F1 recommends is an owner-only reading-order change
(§28). **Until it happens, GT-14 works with `def-vertex-and-edge-connectivity` and
defines a cut edge as a $\lambda$-witness** — clumsier, and the reason the re-home
is recommended rather than merely noted. `lem-three-connected-graph-has-a-contractible-edge`
is in the same position and is exactly G1's Lemma 3.2.2, so **if the re-home
happens, GT-14 cites it instead of minting it**, and the scaffold is written so
that this is a one-item substitution rather than a redesign.

FS: every 2-connected graph has an ear decomposition starting from any cycle
(it does — so the false version must be about starting from any *edge*, or the
`fs-` drops); the block graph of a connected graph is connected but need not be a
tree; a 3-connected graph has a contractible edge even when it is $K^4$ (it does
not, and $K^4$ is exactly the base case of the wheel theorem).

B: the block tree of a small graph drawn out; an ear decomposition of $K_4$
constructed; the wheel theorem run backwards from $W_5$ to $K^4$; a contractible
edge exhibited in a 3-connected graph and a non-contractible one in $K^4$.

CEX: a 2-connected graph with a non-contractible edge; a connected graph whose
blocks overlap in an edge (there is none — so this `cex-` must exhibit blocks
overlapping in a *vertex*, which is what makes the block graph a tree rather than
a forest of disjoint pieces).

Traps. (i) A block may be $K^2$ or $K^1$, so "block = maximal 2-connected
subgraph" is false as a definition (convention 18). (ii) G1's $\kappa(K^n)=n-1$
(convention 10) is what makes the wheel theorem's base case right.
(iii) Contraction of a simple graph can create parallel edges; state whether
$G\cdot e$ is taken simple, and be consistent — G1 takes it simple in ch. 3 and
multigraph in ch. 6.

Provenance: Statements `literature-derived` (G1, quoted). Proofs
`literature-derived`.

---

## GT-15 (NEW). Tree-Decompositions, Tree-Width and Well-Quasi-Ordering

**Anchor:** immediately after GT-14's examples page.
`requires`: GT-14, GT-13 (chordal graphs),
`matchings-covers-menger-and-network-flows` (Menger),
`graphs-walks-and-connectivity` (`def-graph-deletion-contraction-minor-and-subdivision`),
`chains-antichains-sperner-and-dilworth`.

DEFS: a **tree-decomposition**, verbatim from G1 §12.3 with its three conditions
(T1) $V(G)=\bigcup_{t\in T}V_t$, (T2) every edge has both ends in some bag,
(T3) $V_{t_1}\cap V_{t_3}\subseteq V_{t_2}$ whenever $t_2\in t_1Tt_3$; the
**width** $\max_t\lvert V_t\rvert-1$ and the **tree-width** (#91, convention 15);
**touching** sets and a **bramble**, verbatim: "A set of mutually touching
connected vertex sets in $G$ is a bramble … The least number of vertices covering
a bramble is the **order** of that bramble"; the **$k\times k$ grid** and its
**crosses**, both verbatim from G1; a **well-quasi-ordering**; the **minor** and
**topological minor** relations, citing the published
`def-graph-deletion-contraction-minor-and-subdivision`.

THMS: **an edge of $T$ induces a separation of $G$** (landmark; G1 Lemma 12.3.1)
— **three steps, and it is the whole point of tree-decompositions**;
G1 Lemmas 12.3.2–12.3.4 and Cor. 12.3.5, each $\le8$ steps; **$G$ is chordal iff
$G$ has a tree-decomposition into complete parts** (G1 Prop. 12.3.6, ~10 steps,
spending GT-13's Prop. 5.5.1 — this is the payoff that makes the chordal material
load-bearing rather than decorative); **tree-width is minor-monotone**
($H\preccurlyeq G\Rightarrow\operatorname{tw}(H)\le\operatorname{tw}(G)$, G1
Lemma 12.4.1, ~4 steps); **$\operatorname{tw}(G)=\min\{\omega(H)-1:G\subseteq H,\ H$
chordal$\}$** (G1 Prop. 12.4.4, ~10 steps); **tree-width duality** (landmark;
G1 Thm 12.4.3, Seymour & Thomas 1993: "A graph has tree-width $<k$ if and only if
it contains no bramble of order $>k$") — the forward implication is short and the
converse is the long half, so **split it into two items**, with G1's own
reformulation reproduced as a `rem-`: the tree-width of a graph is exactly one
less than its bramble number; **the crosses of the $k\times k$ grid form a bramble
of order $k$**, hence the grid has tree-width $\ge k-1$ (in fact $k$, G1
Exercise 34) — the concrete lower bound that makes the duality theorem usable;
**Kruskal's tree theorem** (landmark; G1 Thm 12.2.1) — the finite trees are
well-quasi-ordered by the topological minor relation — via **G1 Lemma 12.1.3**
($X$ wqo $\Rightarrow[X]^{<\omega}$ wqo), ~25 steps across two items by the
minimal-bad-sequence argument; **graphs of bounded tree-width are wqo by minors**
(G1 Thm 12.4.2).

**Denied, with reasons, and two of the three denials are sourcing facts rather
than difficulty judgments.**

- **The grid theorem** (G1 Thm 12.6.3, Robertson & Seymour 1986: for every $r$
  there is a $k$ such that every graph of tree-width $\ge k$ has an $r\times r$
  grid minor) is **stated without proof in the 5th edition**. G1's ch. 12 Notes
  record that the Diestel–Gorbunov–Jensen–Thomassen proof "was included in
  editions 2–4 of this book", and only the 5th edition is free. **So a proved grid
  theorem is a 4th-edition or a Leaf–Seymour citation** ("Treewidth and planar
  minors", *JCTB* **111** (2015), 38–53), never a 5th-edition one. Disposition:
  **statement with `proved_here: false`, the exact source, and the failed
  in-library route** — the source we can legally reach states it without proof.
  Its Corollary 12.6.4 (the graphs without an $H$ minor have bounded tree-width
  iff $H$ is planar) is ~6 steps *given* the grid theorem and is the reason it is
  worth stating at all; it inherits `proved_here: false`.
- **The graph minor theorem** (G1 Thm 12.7.1: the finite graphs are
  well-quasi-ordered by the minor relation) — statement only; G1 gives a sketch,
  not a proof. Its Corollaries 12.7.2 (every minor-closed property has a finite
  Kuratowski set) and 12.7.3 (finite excluded-minor characterisation of
  embeddability in each surface) are each ~3 steps given it and are what make it
  worth stating. §11's denial stands and §29 records it.
- **Tangles** (G1 §12.5, new in the 5th edition) — deferred, as a body of theory
  rather than a result.

**A forward-reference warning specific to this page.** G1's preface says the book
is topologically sorted "apart from **two clearly marked exceptions**", and one of
them lands here: G1's §5.2 discussion cites Lemma 12.6.1 when characterising the
minimal $k$-chromatic graphs, and Lemma 12.6.1 carries the reverse marker `[5.2]`.
**Any item mirroring that passage inherits a genuine forward reference** and must
carry `forward_refs` per SCHEMA §3, with its consequences marked too. This is the
one place where copying G1's order naively produces a cycle.

**Kruskal's theorem costs dependent choice** and §21's row says so: Nash-Williams'
minimal-bad-sequence argument constructs an infinite descending selection. The
Statement names DC. If an authoring agent finds a choice-free route it may state
ZF instead, **but it must not guess** — and the library's own experience is that
guessing choice strength is how §7's infinite-Ramsey and König rows came to be
wrong (§21.1).

FS: tree-width is subgraph-monotone but not minor-monotone (it is both);
every graph of tree-width $k$ has a bramble of order exactly $k+1$; the finite
graphs are wqo by the *subgraph* relation (they are not — the cycles form an
infinite antichain, and that is the cleanest possible illustration of why "minor"
is the right relation); a tree-decomposition of minimum width is unique.

B: a tree-decomposition of a small graph exhibited with its width; the crosses
bramble of the $3\times3$ grid written out; $\operatorname{tw}(\text{tree})=1$ and
$\operatorname{tw}(C_n)=2$ computed; the cycles exhibited as an infinite
subgraph-antichain; a chordal completion of a small graph.

CEX: a graph whose tree-width exceeds its clique number minus one; a family of
connected sets that pairwise touch except one pair, so not a bramble; a bad
sequence with no minimal bad subsequence under a non-wqo relation.

Traps. (i) The $-1$ in the width is a convention with a stated reason
(convention 15). (ii) "Touching" means sharing a vertex **or** joined by an edge;
dropping the second clause changes the theorem. (iii) Minor and topological minor
are different relations and Kruskal's theorem is about the **topological** one for
trees; the published `lem-kuratowski-minors-are-topological-minors` records where
they coincide.

Provenance: Statements `literature-derived` (G1, quoted). Proofs
`literature-derived` where proved; `not-supplied` for the grid theorem and the
graph minor theorem, whose items carry `proved_here: false`.

---

## GT-16 (NEW). Matching Theory II: Tutte's 1-Factor Theorem, Gallai–Edmonds and the Infinite Marriage Theorems

**Anchor:** immediately after GT-15's examples page.
`requires`: `matchings-covers-menger-and-network-flows`,
`graphs-walks-and-connectivity`, `trees-forests-and-spanning-trees`,
`ramsey-theory` (König's infinity lemma), GT-14.

The published matching page is strong — Berge, Hall, König, Gallai,
Ford–Fulkerson, Menger, 25 items — and has exactly one obvious hole: **Tutte's
theorem is missing**, and with it everything about matchings in non-bipartite
graphs.

DEFS: the **odd-component count** $q(G-S)$, which needs convention 12 (the null
graph is not connected, so $q(\varnothing)=0$ — **load-bearing here, not
pedantry**); a **1-factor**; a **factor-critical** graph, verbatim from G1: "$G$
has no 1-factor but for every vertex $v\in G$ the graph $G-v$ has a 1-factor";
**matchable to $\mathcal{C}_{G-S}$**, verbatim from G1; the **deficiency**
$\operatorname{def}(G)=\max_S(o(G-S)-\lvert S\rvert)$ (#92); a **$2$-factor**.

THMS: **Tutte's 1-factor theorem** (landmark; G1 Thm 2.2.1: "A graph $G$ has a
1-factor if and only if $q(G-S)\le\lvert S\rvert$ for all $S\subseteq V(G)$"),
12–16 steps and needing nothing the library lacks — necessity is immediate; then
one may assume $G$ edge-maximal without a 1-factor; the condition (∗) that all
components of $G-S$ are complete and every $s\in S$ is adjacent to all of $G-s$;
then a case analysis on a maximal alternating path from $d$ producing an even
cycle whose only non-edge is $bd$; **the Tutte–Berge formula**
$\nu(G)=\tfrac12(\lvert V\rvert-\max_S(o(G-S)-\lvert S\rvert))$ (#92);
**the Gallai–Edmonds structure theorem** in G1's form (Thm 2.2.3: every graph has
a set $S$ matchable to $\mathcal{C}_{G-S}$ with every component of $G-S$
factor-critical, and $G$ has a 1-factor iff $\lvert S\rvert=\lvert\mathcal{C}_{G-S}\rvert$),
~25 steps and a candidate for splitting; **Petersen's theorem** (every bridgeless
cubic graph has a perfect matching), free from Tutte in ~8 steps and the seam to
GT-11's snarks; **the countable infinite marriage theorem** for a locally finite
bipartite graph, via the published ZF `thm-konig-infinity-lemma-for-ordered-trees`
applied to the tree of partial matchings; **the marriage theorem for an arbitrary
family of finite sets**, by the Rado selection route through the published
`thm-ultrafilter-lemma`.

**§21.1 withdrew §7's infinite-Hall row and this page is the replacement.**
§7 asserted BPI via Rado selection for "the infinite Hall theorem"; the published
matching page had already deferred that result and recorded that its source pass
"did not license the prose scaffold's exact BPI claim". So the scaffold now
carries **two** results that do close, at two different costs, with the costs named
in the Statements: the countable locally finite case is **ZF**, and the
family-of-finite-sets case is **BPI**. **The converse of neither is claimed**, and
the version for families of *infinite* sets is false — the correct statement there
is Aharoni's theorem, which stays denied. A `rem-choice-ledger` item is required.

**Sourcing status: CLOSED, and cheaper than expected.** G1 proves Tutte 2.2.1 and
gives Gallai–Edmonds in the weaker form above, but states **neither the Tutte–Berge
formula nor the full $D(G)$/$A(G)$/$C(G)$ structure theorem**. The gap-fill
harvest supplied both, and both are short: **Tutte–Berge has a 9-step proof
needing only Berge's theorem**, which is published as
`thm-berge-augmenting-path-characterisation` (Schrijver, *A Course in
Combinatorial Optimization*); and **the full $D/A/C$ structure theorem is proved
from Hall alone in 12–16 steps** in West's five-page *Electronic J. Combinatorics*
paper — exactly the bounded route this scaffold needed, with Chekuri's notes
giving an independent second treatment. **Edmonds' blossom algorithm now has a
writable correctness proof**: 20–24 steps via Schrijver's Theorems 6/7/8, whereas
Bondy & Murty's twelve-page version is out of reach. Scaffold Schrijver's.
**Petersen's theorem is 6 steps.** Lovász & Plummer, *Matching Theory*, was reached
at chapter level only and is not needed.

FS: a graph with all degrees even has a 1-factor; Tutte's condition need only be
checked for $S=\varnothing$ (the witness is any graph with a cut vertex separating
three odd components); every bridgeless graph has a perfect matching (the cubic
hypothesis is load-bearing); the deficiency is attained only at $S=\varnothing$.

B: Tutte's condition checked on the Petersen graph; a factor-critical graph
exhibited ($C_5$); $\operatorname{def}(G)$ computed on a small tree; the countable
marriage theorem run on an explicit locally finite bipartite graph; a family of
finite sets with no SDR, violating Hall.

CEX: a graph satisfying Hall's condition on one side but with no 1-factor
(bipartiteness is what makes Hall enough); a bridgeless non-cubic graph without a
perfect matching; an infinite family of **infinite** sets satisfying Hall's
condition with no SDR — **the witness that keeps the library honest about why the
infinite theorem is stated for finite sets**.

Traps. (i) $q(\varnothing)=0$ depends on convention 12 and Tutte's theorem is
false with the other convention. (ii) The two marriage theorems have different
hypotheses *and* different choice costs; a page that states "the infinite Hall
theorem" once has already made an error. (iii) `def-matching-maximum-perfect-and-matching-number`
and `rem-maximal-versus-maximum-matching` are published; cite them, and note that
a **1-factor** is a perfect matching, so the new word needs a dictionary item and
not a second definition.

Provenance: Statements `literature-derived` (G1, quoted) for Tutte, Gallai–Edmonds
and Petersen; the two marriage theorems `literature-derived` pending the harvest;
nothing on this page ships as `ai-generated`.

---

## GT-17a (NEW). Matroids: Axioms, Duality and Minors

**Anchor:** immediately after GT-16's examples page.
`requires`: `trees-forests-and-spanning-trees`, `graphs-walks-and-connectivity`,
`matchings-covers-menger-and-network-flows`,
`vector-spaces-and-linear-independence`, `gaussian-elimination-and-row-reduction`,
`chains-antichains-sperner-and-dilworth`, `incidence-algebras-and-mobius-inversion`.

Sources are keyed **M1** Oxley, *What is a matroid?*
(`https://www.math.lsu.edu/~oxley/survey4.pdf`, full text, §1–§7);
**M2** Schrijver, *A Course in Combinatorial Optimization*
(`https://homepages.cwi.nl/~lex/files/dict.pdf`, ch. 10, pp. 173–198, full text);
**M3** Reiner, *Lectures on Matroids and Oriented Matroids*, §1–§5, full text.
Verbatim headings, per-heading dispositions and the step audits:
`research/subjects-01-combinatorics-harvest-matroids.md`.

**The library has no matroid content of any kind** — `ls items/ | grep -i matroid`
is empty — so this is greenfield and nothing is retrofitted. It is also the
subject the published corpus is best prepared for: `lem-spanning-tree-exchange`,
`lem-fundamental-cycle-of-a-spanning-tree` and
`lem-fundamental-cut-of-a-spanning-tree` are **exactly the graphic shadows of
basis exchange and of the fundamental circuit $C(e,B)$**, so the page can open by
*recognising* published results rather than by asserting an abstraction. That is
the strongest available answer to "why should a reader care", and the scaffold
should use it.

DEFS: a **finite** matroid by the independence axioms — with **"finite" in the
displayed statement, not in prose** (convention 34), because equicardinality, the
existence of maximal independent sets and the termination of the greedy algorithm
are all false without it; a **basis**, a **circuit**, the **rank function**, the
**closure** operator and a **flat**; **loops**, **parallel** elements and a
**simple** matroid; the **uniform matroid** $U_{r,n}$ (rank first, convention 35);
the **vector matroid** $M[A]$ — **whose ground set is the set of column *labels*,
not the set of vectors** (convention 36); the **graphic matroid** $M(G)$; the
**transversal**, **partition** and **matching** matroids; the **dual** $M^{*}$
(written $M^{*}$, not $M^{\perp}$, convention 37); a **cocircuit** and a
**coloop**; deletion, contraction, and a **minor**; the **direct sum**.

THMS: **all bases have the same size** (landmark), in the **local** form and
**before the rank function is defined** — this is a non-negotiable ordering
constraint (#137) and is [A]; **the rank function is well defined** and satisfies
the rank axioms; **circuit elimination**; the **two basis-exchange axioms**, stated
separately and named distinctly, with their equivalence proved — **not pedantry:
the existence proof of the dual matroid is exactly the observation that
complementation swaps them, and that argument is unavailable to a page carrying
only one** (convention 38); **the equivalence of the independence, rank, circuit,
basis and closure axiomatisations** (landmark; M2 Thm 10.2), **scaffolded as seven
or eight lemmas plus one chaining theorem, never as one item**; the standard
examples proved to be matroids, with `lem-spanning-tree-exchange` and the two
published fundamental-cycle/cut lemmas cited as the graphic instances;
**the dual matroid exists**, with $r^{*}(X)=\lvert X\rvert-r(M)+r(E\setminus X)$
proved as a **consequence** and not taken as the definition (#138), and
$r(M)+r(M^{*})=\lvert E\rvert$; **$(U_{r,n})^{*}\cong U_{n-r,n}$**; **cocircuits
of $M(G)$ are the bonds of $G$**; **deletion and contraction commute**, and the
**duality–minor interchange** $(M/X)^{*}=M^{*}\setminus X$; **the dual of a
representable matroid is representable**, by the **orthogonal-complement route**,
which needs only the published `thm-rank-nullity` — **and this matters, because the
determinant proof needs Cauchy–Binet, which GT-7a mints but which sits on a page
this one need not depend on**; **the forward half of Whitney's planarity theorem**
— if $G$ is planar then $M(G)^{*}$ is graphic — citing the published
`def-plane-dual-multigraph` and Euler's formula.

**One prerequisite must be built, and it is exactly the "build the machinery"
case rather than the `deferred` case:** the **forest edge count** — a forest on
vertex set $V$ with $c$ components has $\lvert V\rvert-c$ edges — is one item,
~8 steps, a direct corollary of the published `cor-tree-edge-count`, and it is
what makes $M(G)$'s rank function computable. A **maximal-independent-extension
micro-lemma** (~4 steps) is used about ten times across this pair and GT-17b and
should be scaffolded early and explicitly rather than re-derived inline.

**Denied, but with a cheap substitute that keeps the content.** **The converse of
Whitney's planarity theorem** ($M(G)^{*}$ graphic $\Rightarrow$ $G$ planar) is
**[C], source-confirmed**: the Waterloo course proves it, but only on top of its
entire matroid-connectivity chapter, and says so. Statement only. **The substitute
is scaffolded and is not a consolation prize:** $M(K_5)^{*}$ and $M(K_{3,3})^{*}$
are **not graphic**, ~12 steps each, which gives a reader the concrete content of
the converse — the two Kuratowski graphs are exactly the obstructions — without
the connectivity machinery. **Whitney's 2-isomorphism theorem** needs matroid
2-sums, 3-connectivity and Whitney twists; **no source in the harvest proves it**,
and M1's survey does not even state it. Statement only, `proved_here: false`,
citing M3 Thm 23 and Oxley's book ch. 5. The related cheaper-sounding fact — *a
3-connected graph is determined up to isomorphism by its cycle matroid* — is
**also unproved in the harvest and must not be smuggled in as obvious.**
**Geometric lattices and Birkhoff's theorem** (M3 Thm 9) — deferred.
**Oriented matroids** (M3 §§1.8–1.10, 2.4, 3.2.4) — `out-of-scope`, a whole
subject area the library has not reached, which is the disposition `LEVELS.md`
reserves for exactly this case. **Simplicial complexes, shellability, hyperplane
arrangements** — `out-of-scope`.

FS: the intersection of two matroids' independent-set families is a matroid (the
`cex-` is on GT-17b and is one of the most instructive on either page); every
matroid is representable over some field (the witness is the non-Pappus or
Vámos matroid — **check which is exhibitable in bounded steps before shipping**);
$M^{*}$ is defined by $r^{*}(X)=\lvert X\rvert-r(X)$; the ground set of a vector
matroid may be taken to be the set of vectors (convention 36 — **the most common
silent error in a first matroid definition**, and it is what makes parallel
elements impossible).

B: $M(K_4)$ written out with its bases and circuits; $U_{2,4}$ and its dual;
the graphic matroid of a small graph identified with its published spanning-tree
material; a transversal matroid built from an explicit bipartite graph; the dual
of a representable matroid computed.

Traps. (i) "Circuit" is the matroid word and "cycle" is the graph word; the page
uses **circuit** throughout with one explicit bridging sentence and a `def-`
cross-reference the first time $M(G)$ appears, and it does **not** redefine
"cycle" (convention 39). (ii) A **coloop** is a bridge in $M(G)$ — say it once
(convention 40). (iii) Contraction of a loop is the special case
$M/\{x\}=M\setminus\{x\}$ (M2 Ex. 10.7); **a proof that omits that case split is
wrong**. (iv) M1 is a survey and **defers many proofs to Oxley's book**; a pointer
is not a proof, and the harvest lists exactly which results M1 proves in full
(3.11, 3.20, 4.1, 4.7, 4.8, 5.3, 5.4, 5.15). Everything else in M1 must be proved
locally, rescoped, or routed to the narrow `rem-` fallback.

Provenance: Statements `literature-derived` (M1, M2, M3). Proofs
`literature-derived`; **two textual defects in M2 must be repaired when
scaffolding and not inherited** — its proof of (iv)$\Rightarrow$(i) on p. 177
reuses the variable $y$ for two different elements (correct argument, wrong
naming: rename one), and its (i)$\Rightarrow$(vi) on p. 177 has the typo
"$F\subseteq F\subseteq Y\cup Z$" for "$F\subseteq F'\subseteq Y\cup Z$".

---

## GT-17b (NEW). Matroids and Combinatorial Optimization: Greedy, Intersection and Union

**Anchor:** immediately after GT-17a's examples page.
`requires`: GT-17a, `matchings-covers-menger-and-network-flows`,
`trees-forests-and-spanning-trees`.

**The pair with the highest payoff-per-step in the whole matroid harvest, and it
is only possible because `thm-konig-bipartite-matching-cover` is already
published** — M2's Lemma 10.1, the enabler for matroid intersection, is König.
The harvest's honest count is ~180 numbered steps over 12 items plus definitions,
which is a full A page and is why it is its own pair.

DEFS: a **weighted matroid** and a maximum-weight basis; the **exchange graph**;
the **augmenting digraph**; the **matroid union** $M_1\vee M_2$ (convention 41 —
and it is **not** a lattice join); the **covering number** and the **base-packing
number**; **arboricity**.

THMS: **the greedy algorithm characterises matroids** (landmark; Rado–Edmonds;
M1 Thms 4.7, 4.8 — both proved in full there — and M2) — **both directions**: on a
matroid the greedy algorithm returns a maximum-weight basis for every weighting,
and conversely a family closed downwards for which greedy always succeeds is a
matroid; **local optimality implies global optimality** for a maximum-weight
basis; the two technical exchange-graph lemmas; **Edmonds' matroid intersection
theorem** (landmark; M2 §10.4) —
$\max\{\lvert I\rvert:I\in\mathcal{I}_1\cap\mathcal{I}_2\}=\min_{U\subseteq E}(r_1(U)+r_2(E\setminus U))$
— ~78 steps over five items, via the augmenting digraph and König;
**König's theorem and Rado's theorem re-derived from it**, which is the item that
shows the abstraction paying for itself; **matroid union** (M1 Ex. 3.12, M2
Ex. 10.27) — ~40 steps over three items given intersection; **Edmonds' covering
theorem** and **base-packing theorem**; **Nash-Williams' arboricity formula**
$\Upsilon(G)=\max_{H\subseteq G}\lceil\lVert H\rVert/(\lvert H\rvert-1)\rceil$;
**the Nash-Williams/Tutte tree-packing theorem**, with M1's constructive $k=2$
case (Cor. 3.11) proved in full there; **partition into partial transversals**.

**The Nash-Williams theorems are the payoff that justifies the union machinery**,
and they are cheap once union is in hand — [A]/[B] and [B] respectively. A
scaffold that builds intersection and union and then stops has spent 180 steps
for nothing a reader can see.

**A route decision the harvest forced, and it is not arbitrary.** M2 derives
**union from intersection**; the Waterloo course derives **intersection from
union**. The two orders are genuinely different developments, not presentational
variants. **Take M2's order** — the Waterloo route is shorter only because it
hides a free-extension prerequisite that would then have to be built anyway, so
its saving is nominal. Record the alternative in a `rem-`.

FS: $\mathcal{I}_1\cap\mathcal{I}_2$ is the independent-set family of a matroid
(**the `cex-` here is the page's most instructive item**: two matroids on a small
ground set whose common independent sets violate augmentation); greedy works for
an arbitrary downward-closed family; the intersection theorem extends to three
matroids (it does not — three-matroid intersection is NP-hard, which is a
complexity statement and therefore a `rem-`, not an `fs-`).

B: Kruskal's algorithm recognised as greedy on $M(G)$, citing the published
`thm-kruskals-minimum-spanning-tree-algorithm` — **the library already frames the
motivating instance, so this item is a recognition and not a construction**;
matroid intersection run on a small bipartite instance recovering a maximum
matching; arboricity of $K_4$ computed.

Provenance: Statements `literature-derived` (M1, M2). Proofs
`literature-derived`.

---

## GT-17c (NEW). Representable Matroids and the Binary Excluded Minor

**Anchor:** immediately after GT-17b's examples page.
`requires`: GT-17a, `algebraic-extensions-degree-and-finite-fields`,
`gaussian-elimination-and-row-reduction`, `determinants-of-matrices-over-a-commutative-ring`.

DEFS: **representable**, **binary**, **ternary** and **regular** matroids; the
**Fano** and **non-Fano** matroids, citing CB-14b's Fano plane so that the library
holds one Fano plane and not two; **relaxation** of a circuit-hyperplane.

THMS: **$U_{2,n}$ is representable over $\mathbb{F}_q$ iff $q\ge n-1$**;
**$U_{2,4}$ is not binary**; **the matrix operations preserving $M[A]$** (row
operations, column scaling, field automorphisms); **the fundamental circuits
determine a binary matroid**; **Tutte's binary excluded-minor theorem**
(landmark; M1 Thm 5.15, proved in full there) — a matroid is binary iff it has no
$U_{2,4}$ minor; **the Fano matroid is representable exactly in characteristic 2**
(M1 Prop. 5.3, proved in full) and the **non-Fano exactly in characteristic
$\ne2$**, hence **their direct sum is representable over no field** (M1 Thm 5.4,
proved in full) — the cleanest possible answer to "is every matroid a vector
matroid"; the **characteristic polynomial of a matroid** via the published
`cor-mobius-inversion-for-finite-posets` on its lattice of flats, which is the
seam to CB-19 and GT-10.

**A prerequisite build is required and is [B], about two or three items:** M1
Prop. 5.3 needs *a field of characteristic $p$ contains $\mathbb{F}_p$* and
*characteristic $0$ contains $\mathbb{Q}$*. The library publishes `def-field` and
`def-integers-modulo-n` but **no prime-subfield or $\mathbb{F}_q$ apparatus**, and
`algebraic-extensions-degree-and-finite-fields` carries 0 items (§27). Binary
matroids alone need only $\mathbb{F}_2=\mathbb{Z}/2$ and are nearly free; the Fano
results need the full characteristic apparatus. **This is a build-the-machinery
case, and §28 records the amendment owed to `abstract-algebra` in case that track
supplies it first.**

**Denied, statement-only, each with `proved_here: false` and a working source
URL.** Tutte's excluded-minor characterisations of **ternary**, **regular**,
**graphic** and **cographic** matroids (Bixby–Seymour machinery). **Seymour's
decomposition theorem** — `out-of-scope`, because it needs linear-programming
duality, integral polyhedra and total unimodularity, none of which the library has;
this exclusion is clean and takes M2 §10.7 (matroid polytopes) and M1 §6 with it.
**Whitney's 2-isomorphism theorem.** **Basis activities and the internal/external
activity expansion of the Tutte polynomial** — the interval-partition lemma is
unproved in the harvest, so this is [C] and goes to GT-18's deferral list.

FS: every matroid representable over $\mathbb{R}$ is representable over
$\mathbb{Q}$; a matroid representable over two fields is representable over every
field (the Fano/non-Fano direct sum is the witness); binary matroids are exactly
the graphic ones (the witness is a binary non-graphic matroid, and it must be
exhibited concretely).

Provenance: Statements `literature-derived` (M1, M3). Proofs
`literature-derived` for the results M1 proves in full; every other result on this
page is either proved locally from library dependencies or carries
`proved_here: false` — **M1's pointers to Oxley's book are not proofs** and the
batch notes record which route each item took.

---

## GT-18 (NEW). The Tutte Polynomial and Nowhere-Zero Flows

**Anchor:** immediately after GT-17c's examples page.
`requires`: GT-17a (matroid rank and duality), GT-10 (the chromatic polynomial),
`graphs-walks-and-connectivity` (`def-multigraph-loop-and-digraph`,
`def-graph-deletion-contraction-minor-and-subdivision`),
`trees-forests-and-spanning-trees`, `matchings-covers-menger-and-network-flows`,
`incidence-algebras-and-mobius-inversion`, `polynomial-rings-and-roots`,
`cyclic-groups-and-orders`.

Sources: **M4** Ellis-Monaghan & Merino, *The Tutte Polynomial* (42 pp., full
text, §1–§9 with Propositions 1–3, Theorems 1–33 and Corollaries 1–5 enumerated),
**M3** Reiner §3.1, **G1** Diestel ch. 6, and the two full course sets
(Waterloo CO 446, KAIST MAS480A). **M4 is what makes this pair honestly provable
rather than assertible:** it states the three definitions of $T$ — the linear
recursion, the rank–nullity generating function and the spanning-tree expansion —
**and proves them equivalent**, which is exactly the content M3's Theorem 27
asserts without proof.

**Convention 8 binds this page absolutely: these are theorems about
MULTIGRAPHS.** G1 switches to multigraphs in exactly two places and says why —
plane duality and flows — and his Thms 6.3.1, 6.3.3, 6.5.3, 6.6.1 and all three
flow conjectures are **false or vacuous** if silently restricted to simple graphs,
because contracting a plane graph produces loops and parallel edges.

DEFS: the rank $r(A)$ and nullity $n(A)=\lvert A\rvert-r(A)$ of an edge subset —
**written out in full rather than called "corank"**, because M3 uses "corank" for
$r(E)-r(A)$ while the rest of the literature uses it for $r(M^{*})$
(convention 42); the **Tutte polynomial**
$T(G;x,y)=\sum_{A\subseteq E}(x-1)^{r(E)-r(A)}(y-1)^{\lvert A\rvert-r(A)}$ (#95);
a **circulation** and an **$H$-flow** for a finite abelian group $H$; a
**nowhere-zero $k$-flow** and the **flow number** $\varphi(G)$ (#96);
**internal and external activity** of a basis; the **beta invariant**.

THMS: **$T$ is a polynomial in $x,y$ with integer coefficients** — 8 steps, because
the exponents are nonnegative integers by the rank axioms — **and this is why #95
takes the rank–nullity sum as the definition**: it is manifestly well defined,
whereas defining $T$ by the recursion first forces an
independence-of-the-deletion-order obligation that is real work and that most
textbooks wave through; **deletion–contraction** $T=T(G\setminus e)+T(G/e)$ for
$e$ neither a loop nor a coloop, **as a theorem** (~22 steps: split the sum on
$A\not\ni e$ and $A\ni e$, use $r_{M\setminus e}(A)=r_M(A)$ and
$r_{M/e}(A)=r_M(A\cup e)-r_M(\{e\})$, then handle the loop and coloop cases
separately); **the three definitions agree** (M4 §3, the equivalence proved
there); **duality** $T(G^{*};x,y)=T(G;y,x)$ for a plane dual pair (M4 Prop. 2),
and in matroid generality $T_{M^{*}}(x,y)=T_M(y,x)$ (M3), by substituting
$r^{*}(A)=\lvert A\rvert-r(E)+r(E\setminus A)$ and reindexing $A\mapsto E\setminus A$;
**multiplicativity** over disjoint unions and one-point joins (M4 Prop. 1) and
over matroid direct sums; **the universality / recipe theorem** (landmark; M4
Thms 1–2, M3 Prop. 28) — every deletion–contraction invariant on a minor-closed
class, valued in a commutative ring, is an evaluation of $T$ — ~20 steps by
induction against the recursion; **the evaluations** (M4 Thm 3) $T(1,1)=$ the
number of spanning trees, $T(2,1)=$ spanning forests, $T(1,2)=$ spanning connected
subgraphs, $T(2,2)=2^{\lvert E\rvert}$; **the matrix-tree connection** (M4 Thm 4),
which cites GT-7a and is the item that ties the polynomial to the spectral block;
**the chromatic specialisation** (landmark; M4 Thm 10)
$\chi(G;\lambda)=(-1)^{r(E)}\lambda^{c(G)}T(G;1-\lambda,0)$ — **citing GT-10's
chromatic polynomial rather than rebuilding it**; **the Whitney rank formulation**
and the **bad-colouring polynomial** (M4 Thms 11–13); **the flow polynomial**
(landmark; M4 Thm 14, G1 Thm 6.3.1, Tutte 1954) — for every multigraph there is a
polynomial $P$ such that for **any** finite abelian group $H$ the number of
$H$-flows is $P(\lvert H\rvert-1)$ — with G1's Cor. 6.3.2 as the striking
consequence that whether $G$ has an $H$-flow depends only on $\lvert H\rvert$ and
not on the group structure, and G1 Thm 6.3.3 that a $k$-flow exists iff a
$\mathbb{Z}/k$-flow does; **the reliability polynomial** (M4 Thm 17); **the beta
invariant and the characterisation of series-parallel graphs by $\beta=1$**
(M4 Thms 19–23); **the characteristic polynomial of a matroid via Möbius
inversion on its lattice of flats** (M3), which is **unexpectedly affordable**
because `def-poset-mobius-function` and `cor-mobius-inversion-for-finite-posets`
are published, and which is the shared item connecting GT-18, GT-10 and CB-19;
**the small-$k$ flow theorems** (G1 §6.4, each ~4–10 steps): a graph has a
$2$-flow iff all degrees are even; a cubic graph has a $3$-flow iff it is
bipartite; $\varphi(K^n)=3$ for even $n\ge4$; every $4$-edge-connected graph has a
$4$-flow; **a cubic graph has a $4$-flow iff it is $3$-edge-colourable**, which is
what makes "snark" and "class 2" the same notion for cubic bridgeless graphs and
is the seam back to GT-11.

**Seymour's six-flow theorem** (G1 Thm 6.6.1: every bridgeless multigraph has a
$6$-flow) is ~30 steps and uses global Menger, which is published. **Scaffold it
split into a main lemma plus assembly**; if a step-2 Beta cannot split it into
bounded items, it is `deferred` with that reason recorded — not dropped silently.

**One verdict is REVERSED between the two harvests, and the better-sourced one
wins.** The matroid harvest rated the **basis-activity (spanning-tree)
expansion** $T=\sum_B x^{\mathrm{ia}(B)}y^{\mathrm{ea}(B)}$ as **[C]**, because
the lemma that the bases partition $2^E$ into intervals is unproved in *its*
sources. The polynomial harvest, which obtained T1 (Goodall, 134 pp.) and T3 in
full, rates it **[B] and in reach**. **Scaffold it**, split into (a) the
activities are well defined, (b) the bases partition $2^E$ into intervals,
(c) the count. This is the second time in this scaffold that a denial recorded
before the sources were read turned out to be a hypothesis rather than a finding
(§29.2), and it is worth the reader noticing.

**A second finding that changes GT-7a.** T1 proves the **matrix-tree theorem by
deletion–contraction**, so **Cauchy–Binet is not needed for it**. GT-7a cites
LA-7 `thm-cauchy-binet-formula` — A1 Prop. 1.3.5 and A3 Thm 9.4 both prove it, it is a
determinant identity over a commutative ring, it is genuinely absent from the
library, and it is reusable for Gram determinants — but the page should record
T1's route in a `rem-`, because a reader is entitled to know the theorem does not
*depend* on the heavier identity.

**Denied, each with its reason.** **Tutte's
three flow conjectures** — quoted verbatim as `rem-` items, never as theorems:
the five-flow conjecture ("Every bridgeless multigraph has a 5-flow"), the
four-flow conjecture ("Every bridgeless multigraph not containing the Petersen
graph as a minor has a 4-flow"), and the three-flow conjecture. **The complexity
of evaluating $T$** (M4 §8, Thms 31–33, #P-hardness) — `out-of-scope`, a
complexity level the library has not reached. **Abelian sandpile models**
(M4 §6.4), **the shelling polynomial** (M4 §6.6, needing shellability), **zeros
and derivatives of $T$** (M4 §§7.3–7.4) — `deferred`.

FS: the Tutte polynomial determines the graph up to isomorphism (the witness is
any two non-isomorphic trees on $n$ vertices, both with $T=x^{n-1}$); the
deletion–contraction recursion holds for every edge (loops and coloops are the
exceptions and they are the whole reason the definition is taken as the
rank–nullity sum); the flow number is defined without reference to an orientation
(#96 — the count must be **shown** independent of the orientation); $T(G;x,y)$ and
$\chi(G;\lambda)$ carry the same information (the flow polynomial is a different
specialisation and $\chi$ does not determine $T$).

B: $T(K_3;x,y)$ and $T(K_4;x,y)$ computed both ways, by the recursion and by the
rank–nullity sum, and checked to agree; $T(1,1)$ for $K_4$ checked against
Cayley's $16$; $\chi(C_4;\lambda)$ recovered from $T$ by the specialisation;
the flow polynomial of $K_4$ evaluated at $\lvert H\rvert=4$ over both
$\mathbb{Z}/4$ and $\mathbb{Z}/2\times\mathbb{Z}/2$, exhibiting Cor. 6.3.2;
$\varphi(\text{Petersen})=5$ stated.

Traps. (i) **Convention 17.** A Tutte-normalised identity and a counting-normalised
chromatic identity must never share a page without a reconciling `rem-`; the sign
$(-1)^{r(E)}$ and the factor $\lambda^{c(G)}$ are absorbed differently by different
books, and M4 Thm 10 is the normalisation this library adopts. (ii) Convention 8:
multigraphs. (iii) The universality theorem is stated for a **minor-closed class**
and a **commutative ring**; both hypotheses are load-bearing and neither may be
dropped for readability. (iv) **A silent notation collision across this page's own
sources**: T4 writes $c(A)$ for the **nullity** of $A$, while T3/M4 writes $c(G)$
for the number of **non-trivial components**. They are different quantities and
both appear in formulas this page states. Fix one meaning at the definition and
never reuse the letter. (v) **G1's flow polynomial is in $\lvert H\rvert-1$**, not
$\lvert H\rvert$; a statement that drops the $-1$ is off by a substitution.

Provenance: Statements `literature-derived` (M4, M3, G1, quoted). Proofs
`literature-derived`; the decision to define $T$ by the rank–nullity sum and prove
deletion–contraction, rather than the reverse, is `ai-altered` structuring and is
recorded at #95 with its reason.

---

## GT-19 (NEW). Szemerédi's Regularity Lemma, the Removal Lemmas and Roth's Theorem

**Anchor:** immediately after GT-18's examples page (§24, below).
`requires`: `extremal-graph-theory`, `graphs-walks-and-connectivity`,
`finite-probability-spaces-and-random-variables`,
`inclusion-exclusion-and-the-pigeonhole-principle`,
`inner-product-spaces-and-orthogonality` (only for the Schrijver route — see the
route decision), `congruences-and-the-chinese-remainder-theorem`.

**This is the largest single development in the block, and the harvest establishes
that it is affordable if and only if it is split along the source's own lemma
boundaries.** Six items, each $\le15$ numbered steps. Attempted as one item it is
not writable.

DEFS: the **density** $d(X,Y)=\lVert X,Y\rVert/\lvert X\rvert\lvert Y\rvert$ for
disjoint nonempty $X,Y$ (#97); an **$\varepsilon$-regular pair**, verbatim from G1
p. 193: "all $X\subseteq A$ and $Y\subseteq B$ with $\lvert X\rvert\ge\varepsilon\lvert A\rvert$
and $\lvert Y\rvert\ge\varepsilon\lvert B\rvert$ satisfy
$\lvert d(X,Y)-d(A,B)\rvert\le\varepsilon$"; an **$\varepsilon$-regular partition**
with its three verbatim conditions (exceptional set $V_0$ with
$\lvert V_0\rvert\le\varepsilon\lvert V\rvert$; equal other parts; all but at most
$\varepsilon k^2$ pairs regular); **$(\varepsilon,d)$-uniformity** as its own
definition (convention 16); the **energy** $q(\mathcal{P})$ (#97); a **regularity
graph** $R$ and its **blow-up** $R_s$, both verbatim from G1.

THMS, in the build order G1's own margin apparatus dictates — twelve items in a
strict chain with no cycles: **defect Cauchy–Schwarz**
($\sum e_i^2/\mu_i\ge(\sum e_i)^2/\sum\mu_i$, ~3 steps from the published
`thm-cauchy-schwarz-finite`); **the energy is at most 1** (#97 — the bound that
makes the iteration terminate, and a numbered item, not an observation);
**refinement never decreases energy** (G1 Lemma 7.4.2, ~8 steps, in two parts —
for a pair and for a partition); **an irregular pair gives a definite gain**
(G1 Lemma 7.4.3: two-part partitions with
$q(\mathcal{C},\mathcal{D})\ge q(C,D)+\varepsilon^4\lvert C\rvert\lvert D\rvert/n^2$,
~10 steps and the only genuinely computational item); **an irregular partition
gives a constant gain** (G1 Lemma 7.4.4, ~15 steps including the bookkeeping that
cuts refined sets into equal pieces of size $\lfloor c/4^k\rfloor$);
**the regularity lemma** (landmark; G1 Thm 7.4.1, verbatim: "For every
$\varepsilon>0$ and every integer $m\ge1$ there exists an integer $M$ such that
every graph of order at least $m$ admits an $\varepsilon$-regular partition
$\{V_0,V_1,\dots,V_k\}$ with $m\le k\le M$"), by the iteration
$s:=2/\varepsilon^5$ (#98 — $M$ is produced by the iteration and the tower bound
is a **separate** stated fact); **the $\varepsilon$-regular degree lemma**
(G1 Lemma 7.5.1, ~4 steps); **the blow-up lemma** (G1 Lemma 7.5.2, ~15 steps);
**the triangle counting lemma** (G2 Thm 2.2.1, ~8 steps — the right starting
point, against ~20 for G1's general Lemma 7.6.2); **the triangle removal lemma**
(landmark; G2 Thm 2.3.1, Ruzsa–Szemerédi 1978: "For all $\varepsilon>0$, there
exists $\delta>0$ such that any graph on $n$ vertices with fewer than $\delta n^3$
triangles can be made triangle-free by removing fewer than $\varepsilon n^2$
edges"), by G2's own recipe, quoted as a `rem-`: **partition–clean–count**;
**the general removal lemma** (G2 Thm 2.6.5, whose phrasing is cleaner than G1
7.6.3's); **every edge in exactly one triangle forces $o(n^2)$ edges** (G1
Cor. 7.6.5, equivalently G2's diamond-free lemma Cor. 2.3.3);
**Roth's theorem** (landmark; G1 Prop. 7.7.3, G2 Thm 2.4.1); **the second proof of
Erdős–Stone–Simonovits from regularity** (G1 §7.5, G2 Thm 2.6.7) — a **second
proof of an already-published item**, which SCHEMA treats as an addition and not a
rewrite, with G2's framing worth a `rem-`: regularity is the template for boosting
an exact extremal result to an asymptotic one.

**Roth's proof, decomposed, because it is the block's best item.** Given
$\varepsilon>0$ set $\gamma:=\varepsilon/12$; let $D\subseteq[n]$ be 3-AP-free;
build the tripartite graph on $X=[n]$, $Y=[2n]$, $Z=[3n]$ with the **defining
triangles** $K(x,d)$ on $\{x,x+d,2x+d\}$ for $x\in X$, $d\in D$; any two vertices
of a defining triangle determine the third, so they are edge-disjoint,
$\lvert G\rvert=6n$ and $\lVert G\rVert=3n\lvert D\rvert$; a non-defining triangle
would have its three edges in three distinct defining triangles $K(x,a)$, $K(x,b)$,
$K(x',c)$ with $x'\ne x$, forcing $a=c+(x'-x)$ and $b=c+2(x'-x)$, i.e. a 3-AP in
$D$ with nonzero difference; so every edge lies in exactly one triangle, and
Cor. 7.6.5 gives $\lVert G\rVert\le\gamma(6n)^2$, i.e.
$\lvert D\rvert\le12\gamma n=\varepsilon n$. **Nine to twelve numbered steps.**

**The route decision, made deliberately.** The harvest found **three genuinely
different proofs** of the regularity lemma. G1's energy-increment argument is
fully elementary — defect Cauchy–Schwarz and nothing else. G2's is the same idea
with cleaner bookkeeping and equitability separated out. **G3's Pythagoras proof
is two pages**, realising the energy as the squared Frobenius norm of the
orthogonal projection of the adjacency matrix onto the span of the partition's
indicator blocks, so that the refinement increase is literally the Pythagorean
theorem — but it needs orthogonal projection in a finite-dimensional real
inner-product space of matrices, and `inner-product-spaces-and-orthogonality`
carries 0 items (§27). **Scaffold G1's route as the main proof** — it is the one
whose only prerequisite is published — **and G3's as a second proof conditional on
that page being built.** Similarly, **three constructions for Roth** exist (G1's
tripartite defining triangles, G2's three copies of $\mathbb{Z}/M$, G3's directed
Cayley graph on $[2n]$); G1's is the most transparent to verify step by step and
is the one scaffolded.

**Sparseness caveat, required as a `rem-`, verbatim from G1 p. 194:** "the
regularity lemma in this form is designed for use with dense graphs: for sparse
graphs it becomes trivial, because all densities of pairs – and hence their
differences – tend to zero." Without it a reader will misuse the lemma.

**Denied.** **Szemerédi's theorem** itself — statement-only in every source
harvested; G1: "Even given the regularity lemma, Szemerédi's theorem is still a
deep result far beyond the scope of this book." **Gowers' tower-type lower bound**
on the number of parts (G2 Thm 2.1.17, citing Moshkovitz–Shapira 2016) —
statement only. **Fox's non-regularity improvement** of the removal-lemma bound —
statement only.

FS: the regularity lemma gives a partition into a bounded number of parts with
*every* pair regular; $\varepsilon$-regular and $\varepsilon$-uniform are the same
notion (they are not — convention 16, and this `fs-` is the page's most important,
because swapping them silently is a fatal citation defect); the removal lemma's
$\delta$ can be taken polynomial in $\varepsilon$; a 3-AP-free subset of $[n]$ has
size $O(\sqrt n)$.

B: an $\varepsilon$-regular pair exhibited and an irregular one; the energy of a
two-part partition computed and the gain from refining it; the defining-triangle
construction run for a small 3-AP-free $D$; the triangle counting lemma checked
against a blow-up of $K_3$.

CEX: a pair that is $\varepsilon$-uniform but not $\varepsilon$-regular; a sparse
graph for which the regularity lemma is vacuous; a partition refinement that
strictly increases the energy.

Traps. (i) Convention 16 governs every statement here. (ii) $M(\varepsilon)$ is
produced by the iteration (#98); do not write "the" $M(\varepsilon)$ without a
least-witness argument. (iii) The Erdős–Stone reproof must cite the published
`thm-erdos-stone-simonovits` and be labelled a second proof; it must not restate
the theorem.

Provenance: Statements `literature-derived` (G1, G2, quoted). Proofs
`literature-derived`; the choice of G1's route with G2's triangle counting lemma
in place of G1's general one is `ai-altered` structuring, recorded here because it
mixes two sources within one chain.

---

## GT-20 (NEW). Infinite Graphs: the Rado Graph, Homogeneity and Fraïssé Limits

**Anchor:** immediately after GT-19's examples page.
`requires`: `graphs-walks-and-connectivity`, `ramsey-theory` (König's infinity
lemma), `countability-and-uncountability`, `congruences-and-the-chinese-remainder-theorem`,
`primes-and-the-fundamental-theorem-of-arithmetic`, `the-axiom-of-choice-and-its-equivalents`.

Sources are keyed **R1** Cameron, "The Random Graph" (`arXiv:1301.7544`, 27 pp.,
full text — Cameron's own updated chapter for the second edition of *The
Mathematics of Paul Erdős II*, strictly better than the 1997 original, which is
paywalled); **R2** Cameron, "The Random Graph Revisited" (3ECM Barcelona 2000,
7 pp., full text); **R3** Macpherson, "A survey of homogeneous structures", the
author's final preprint dated 14 January 2011, 77 pp., **retrieved via the Wayback
Machine because the Leeds original is dead and ScienceDirect returns 403** — **so
it must be cited by section and result number, never by page, since the preprint's
pagination differs from the journal's**; **R4** Bodirsky, *Model Theory Course
Notes* (TU Dresden), ch. 4 "Fraïssé Amalgamation"; **R5** Cambridge Part III
*Model Theory* (Barbina/Tomczak), §4; **R6** Schlicht, Bonn *Introduction to Model
Theory*, §2.2; **R7** Hubička, *Homogeneous structures*; **R8**
Chatterjee–Diaconis–Miclo, "A random walk on the Rado graph" (`arXiv:2205.06894`),
§§1–2.1. Full ledger and verbatim headings:
`research/subjects-01-combinatorics-harvest-gapfill.md`.

**The finiteness convention of the published `rem-finite-simple-graph-convention`
is suspended on this page in its entirety**, and the page says so in its first
item — it is the library's only page about a countably infinite graph.

DEFS: the **extension property**, stated as Cameron's $(\ast)$ — *given finitely
many distinct vertices $u_1,\dots,u_m,v_1,\dots,v_n$ there is a vertex $z$
adjacent to every $u_i$ and to no $v_j$* — **with the naming disagreement recorded
in a `rem-`**: R1 writes $(\ast)$, R3 writes $(\ast)_n$ and calls it the *Alice's
Restaurant Axiom*, R4/R6/R7 say *extension property*, R5 writes $(r_n)$, R6 writes
$\sigma_{m,n}$, and R2 calls the general version the *I-property*;
**homogeneity** — every isomorphism between finite induced substructures extends
to an automorphism — with R3's naming note that some sources say
**ultrahomogeneous**; the **age** of a structure; the **amalgamation property**
and the **joint embedding property**; a **Fraïssé class** and its **Fraïssé
limit**; **switching** with respect to a vertex set; a **universal** set of
positive integers.

THMS: **a graph with $(\ast)$ is infinite**, immediate and worth its own line
since R1 makes the point explicitly; **any two countable graphs satisfying
$(\ast)$ are isomorphic** (landmark; R1 Fact 2) — **split into the one-point
extension lemma and the back-and-forth induction**, seven numbered steps in all;
**$R$ is homogeneous** (R1 Prop. 9), by starting the same machine from a given
finite isomorphism; **$R$ is universal** (landmark; R1 Prop. 6) — every **finite
or countable** graph embeds as an induced subgraph — by *going forth only*, which
is the point: forth alone needs $(\ast)$ in the target and nothing in the source;
**$R$ is isomorphic to its complement** (R1 Prop. 5), because $(\ast)$ is
self-complementary; **Fraïssé's theorem** (landmark; R1 Thm 3, R3 Thm 2.1.3,
R7 Thm 3.1) — a class of finite relational structures is the age of a countable
homogeneous structure iff it is closed under isomorphism and induced substructure,
has countably many members up to isomorphism, and has the amalgamation property;
and that structure is unique up to isomorphism — with **the class of all finite
graphs as the instance whose limit is $R$**; **the pigeonhole property**
(landmark; R1 Prop. 3) — if $V(R)$ is partitioned into finitely many parts, one
part induces a copy of $R$ — by a three-line contrapositive taking
$U=\bigcup U_i$, $V=\bigcup V_i$; **and its converse characterisation** (R1
Prop. 4, R2 Thm 2.1) — **the only countable graphs with the pigeonhole property
are the complete graph, the null graph and $R$**, which is what makes the property
worth having.

**The choice audit, and it is the reason this page can exist at all.**

- **The construction is explicit and costs nothing.** R1's BIT construction: the
  vertex set is $\mathbb{N}$, and $x\sim y$ iff the $x$-th binary digit of $y$ is
  $1$ or vice versa. **The digit indexing must be pinned**, because only two of
  the sources state it: R1 and R2 fix it by giving the encoding
  $\{a_1,\dots,a_n\}\mapsto 2^{a_1}+\dots+2^{a_n}$, so "the $x$-th digit" is the
  coefficient of $2^x$ and indexing is **from $0$, from the right**; R8 says so in
  words. **R5 leaves it unstated**, and a scaffolder copying R5 will ship an
  ambiguous definition. R1 also notes that the construction needs only Empty Set,
  Pairing, Union and Foundation — **not even the Axiom of Infinity** for the
  encoding itself.
- **Uniqueness is ZF, and R1 is the source that says so.** Its back-and-forth
  proof carries the parenthetical, verbatim: *"(To avoid the use of the Axiom of
  Choice, select the correctly-joined vertex of $\Gamma_2$ with smallest index to
  be the image of $x_m$.)"* **R1 is the only one of the four treatments read that
  makes this remark.** R4's general Fraïssé proof takes the least index in the
  *source* but obtains the image through an arbitrary embedding and an arbitrary
  extending automorphism, and R5 chooses arbitrarily throughout — so **a scaffolder
  following R4 or R5 would silently spend choice.** §21's row ("none — ZF … because
  the enumeration is given") is confirmed, and the Statement says ZF with the
  canonical least-index selection written into the proof as a numbered step, not
  left implicit.
- **The probabilistic characterisation stays out.** R1 Thm 1 — a countable random
  graph with independent edge probability $\tfrac12$ is almost surely isomorphic
  to $R$ — is genuinely measure-theoretic: R1's own proof invokes "an elementary
  lemma from measure theory: the union of countably many null sets is null", and
  the space is an infinite product. **Confirmed `out-of-scope`**, and §18.2 S5's
  earlier ruling stands. **But an in-scope substitute exists and is scaffolded,
  built on the library's own published FINITE `def-erdos-renyi-random-graph`**: for
  each fixed instance of the extension property with $m+n$ specified vertices, the
  probability that $G(N,\tfrac12)$ contains no correctly-joined vertex is
  $(1-2^{-(m+n)})^{N-m-n}$ — a finite computation on a finite space, with an
  explicit bound and no limit in it — and it tends to $0$ as $N\to\infty$. That is
  the honest finite shadow of R1 Thm 1: it says the extension property is
  overwhelmingly likely at each finite stage and says nothing about an infinite
  product. **Author the finite inequality as the theorem, the limit as its
  corollary, and R1's almost-sure statement as a `rem-` that names the measure it
  would need.** The **Baire-category twin** (R1 Fact 3, "it is simpler for
  Baire category than for measure — no limit is required!") is a different matter
  and is **scaffolded conditionally**: the library publishes the Baire category
  theorem on two pages, and if a step-2 Beta can realise the space of countable
  graphs as a complete metric or completely metrizable space from published
  material, the category version is in reach. Recorded in §29.

**Five constructions are scaffolded, and each earns its place by being a
different kind of object.** (1) The **BIT predicate** on $\mathbb{N}$, above.
(2) **The $\in$-graph of a countable model of set theory** (R1 Thm 2): $x\sim y$
iff $x\in y$ or $y\in x$; the witness for $(\ast)$ is $z=\{u_1,\dots,u_m,x\}$ with
$x=\{v_1,\dots,v_n\}$, and **Foundation is what rules out both failure cases**.
(3) **Primes $\equiv1\pmod4$ with the Legendre symbol** (R1 §1.2): $p\sim q$ iff
$p$ is a quadratic residue mod $q$, which is symmetric **by quadratic
reciprocity**, and $(\ast)$ holds by the **Chinese remainder theorem** — published —
plus **Dirichlet's theorem on primes in arithmetic progressions**, which is
**not** published and belongs to `number-theory` (§28). (4) **A universal set $S$
of positive integers**, giving the Cayley graph of $\mathbb{Z}$ with connection set
$S$; the simplest universal sequence is the concatenation of all finite binary
sequences. (5) **The direct inductive construction**: $\Gamma_0=\varnothing$, and
$\Gamma_{k+1}$ adds a vertex $z(U)$ with neighbourhood exactly $U$ for each
$U\subseteq V(\Gamma_k)$.

**Indestructibility, with the infinite case handled honestly — this is the part a
careless page gets wrong.**

- **The correctly-joined set is itself a copy** (R1 Prop. 1): for distinct
  $u_1,\dots,u_m,v_1,\dots,v_n$, the set
  $Z=\{z:z\sim u_i\ \forall i,\ z\not\sim v_j\ \forall j\}$ is infinite and induces
  a graph isomorphic to $R$. **Every other indestructibility result is a corollary
  of this one**, and it should be the page's second theorem.
- **Finite damage is repairable** (R1 Prop. 2): deleting finitely many vertices;
  changing finitely many edges to non-edges or vice versa; switching with respect
  to a **finite** vertex set. Each is a separate numbered item.
- **Infinite damage is NOT in general repairable, and the page must say so.**
  R4 Exercise 70 states it exactly: *"Show that the random graph can be
  partitioned into two subsets so that both parts are isomorphic to the random
  graph. Show that the same is not true for all partitions of the random graph
  into two infinite subsets."* The general criterion — $R[A]\cong R$ **iff** $A$
  itself satisfies $(\ast)$ — is an immediate consequence of Fact 2 and Prop. 6 and
  is scaffolded as a **derived** theorem, not quoted from any source. A concrete
  witness: fix $v$ and delete the non-neighbours of $v$; in the survivor $v$ is
  adjacent to all others, which $(\ast)$ with $m=0,n=1$ forbids in $R$. **This is
  the required `cex-`**, and it mirrors R1's own remark that switching with respect
  to $N(x)$ isolates $x$.
- **Some infinite edge deletion is safe**: R1 records that deleting the edges of a
  locally finite graph from $R$ leaves $R$.

**The automorphism group is statement-only, and the reason is a sourcing fact.**
$\lvert\operatorname{Aut}(R)\rvert=2^{\aleph_0}$ (R1 Prop. 13, independently R3
§4.2); $\operatorname{Aut}(R)$ is a **rank 3** permutation group on vertices;
$\operatorname{Aut}(R)$ is **simple** (Truss); $R$ has the **strong small index
property**; there is a **residual conjugacy class** of generic automorphisms whose
elements have infinitely many cycles of each finite length and no infinite cycles;
Simon Thomas's theorem that $R$ has exactly **five** reducts. **Truss's 1985 paper
was not obtained** — Cambridge Core is paywalled and no preprint exists — so every
one of these is attributed to R1/R3 **as reporters** and each ships as a
source-cited `rem-` with `proved_here: false`. **And one number must not be
quoted:** R1 (2013) reports Truss's strengthening as "five conjugates of $g$ or
$g^{-1}$", but Truss's 2003 paper is titled *"four conjugates good, three
conjugates better"* and improves it to **three**. Neither paper was obtained.
**Do not cite "five" as the best known bound**; state simplicity without the
conjugate count, or record both with the discrepancy flagged. §29 carries it.

**Denied.** The **first-order theory** of $R$, its completeness and
$\aleph_0$-categoricity, and the **zero–one law** (R5 Thm 4.11, R6 Thm 2.2.10) —
`out-of-scope`: they need first-order logic, Vaught's test and
Ehrenfeucht–Fraïssé games, a subject area the library has not reached. **The
squarefree-integer variant** of construction (3) is **not sourced**: targeted
searching found only the *primes* version in R1, R2 and R8, and the squarefree
variant only in Wikipedia and its mirrors, which the source-depth rule bars as
primary backing. **It must not be authored from this scaffold.**

FS: every countable graph in which every vertex has infinite degree is isomorphic
to $R$; deleting any infinite set of vertices from $R$ leaves a copy of $R$ (R4
Ex. 70 and the witness above); $R$ is the unique countable graph with the
pigeonhole property (the complete and null graphs are the other two — R1 Prop. 4,
and getting this `fs-` wrong is easy); switching $R$ with respect to any vertex
set gives $R$ (the witness is switching with respect to $N(x)$).

B: the BIT graph's adjacencies computed for vertices $0$–$7$, with the $0$-indexing
made explicit; $(\ast)$ verified for a small instance in the BIT model; the
$\in$-graph witness $z=\{u_1,\dots,u_m,\{v_1,\dots,v_n\}\}$ written out; a
correctly-joined set exhibited and its own $(\ast)$ checked; $C_5$ embedded into
$R$ by the go-forth argument.

Traps. (i) Digit indexing (above). (ii) The amalgamation property is stated
**with $A=\varnothing$ allowed** — R1 says so explicitly — and it is only under
that convention that JEP is a special case of AP, which is why R7 and R4 can drop
JEP from the list and R1 and R3 cannot. **A restatement that keeps AP but drops
JEP must carry the empty-structure convention or it is wrong.** (iii) R5's axiom
scheme uses a single index and does **not** require the $x_i$ pairwise distinct;
R1, R3, R4 and R6 parametrise by two independent sizes. The schemes are equivalent
but not literally the same, and anyone reusing $(r_n)$ must not assume
distinctness. (iv) "Countable" includes finite in R3 and in R1's universality
statement ("finite or countable"); the library's own convention must be stated
once and matched.

Provenance: Statements `literature-derived` (R1, R3, R4, R7, quoted verbatim).
Proofs `literature-derived` for $(\ast)$, uniqueness, homogeneity, universality,
the pigeonhole property and its converse, and the five constructions; the general
criterion "$R[A]\cong R$ iff $A$ satisfies $(\ast)$" and the concrete infinite
counterexample are **`ai-altered`** — both are immediate from R1's Fact 2 and
Prop. 6, neither is quoted from a source, and the page must prove them rather than
cite them. Every automorphism-group item is `not-supplied` with
`proved_here: false`.

---

## GT-21 (NEW). Expansion, the Expander Mixing Lemma and Cheeger's Inequality

**Anchor:** immediately after GT-19's examples page.
`requires`: GT-7a, GT-7b, GT-19,
`the-spectral-theorem-and-singular-value-decomposition`,
`inner-product-spaces-and-orthogonality`,
`finite-probability-spaces-and-random-variables`.

Sources are A1 §4 and A2 §§20–21 (§23's keys), with G1 and G2 for the
combinatorial framing. This page is spectral, so it is anchored after GT-7b even
though it carries a GT label.

DEFS: the **edge boundary** $\partial S$ and the **edge expansion**
$h(G)=\min_{0<\lvert S\rvert\le n/2}\lvert\partial S\rvert/\lvert S\rvert$ (#99,
convention 6); **conductance** $\varphi$ and **vertex expansion**, both minted as
separate definitions with the conversion $\varphi=h/d$ for $d$-regular $G$ and an
explicit warning that vertex expansion is a genuinely different and generally
incomparable quantity; an **$(n,d,\lambda)$-graph** and a **Ramanujan** graph; a
**sweep cut** of a vector.

THMS: **the expander mixing lemma** (landmark; A1 Prop. 4.3.2) — for $d$-regular
$G$ with $\lambda=\max(\lvert\theta_2\rvert,\lvert\theta_n\rvert)$ and all
$S,T\subseteq V$,
$\lvert e(S,T)-d\lvert S\rvert\lvert T\rvert/n\rvert\le\lambda\sqrt{\lvert S\rvert\lvert T\rvert}$
— ~8 steps, expanding characteristic vectors in an eigenbasis and applying
`thm-cauchy-schwarz-and-the-euclidean-norm`, and **the best entry point to the
whole expander story**; its corollaries bounding the independence number and the
chromatic number of an $(n,d,\lambda)$-graph; **Cheeger's inequality, easy
direction** $h(G)\ge(d-\theta_2)/2$ — a single Rayleigh-quotient test vector, ~6
steps; **Cheeger's inequality, hard direction** $h(G)\le\sqrt{2d(d-\theta_2)}$,
~20 steps; **Alon–Boppana** (A1 Prop. 4.1.1) $\theta_2\ge2\sqrt{d-1}-o(1)$ for
$d$-regular graphs, ~15 steps by Nilli's short trace/test-vector argument on
balls, with A1 Prop. 4.1.2 (Serre) as the recorded refinement; **a $d$-regular
graph is connected iff $\theta_1>\theta_2$** and **bipartite iff
$\theta_n=-\theta_1$**, both cited from GT-7a rather than restated;
**random walks on a regular graph mix at rate $\lambda/d$**, using the published
finite-probability page and the observation (A3 Thm 3.2) that the walk matrix is
diagonalisable with real eigenvalues via the similarity $D^{1/2}MD^{-1/2}$ —
**which needs only the spectral theorem and no Markov-chain theory at all**, and
is why this page can talk about mixing without a probability track.

**The hard direction of Cheeger is scaffolded by sweep cuts, not by a continuous
density, and the reason is a library constraint rather than a preference.** A2
Thm 21.1.3 follows Trevisan's proof, which chooses the threshold $\tau$ at random
with density $2\lvert t\rvert$ and argues
$\mathbb{E}[w(\partial S_\tau)]\le\sqrt{2\rho}\,\mathbb{E}[\min(d(S_\tau),d(V-S_\tau))]$.
That needs an expectation over a **continuous** distribution, and **this library
has finite probability only** (`finite-probability-spaces-and-random-variables`,
`finite-probability-and-the-probabilistic-method`) — measure-theoretic probability
belongs to the `probability-theory` track (SEAMS §4). But the threshold only ever
matters at the $n-1$ distinct sweep values $z(1)\le\dots\le z(n)$, so the
continuous density is replaceable by a **finite weighted average over the $n-1$
sweep cuts**, turning the argument into finite averaging plus Cauchy–Schwarz.
**Scaffold the sweep-cut version; record the continuous-density formulation as the
source's own presentation in a `rem-`.** A2 §16.5's Andersen proof is the recorded
alternative. This is a good example of the self-contained-scope rule producing a
better item rather than a weaker one.

**Denied.** **Ramanujan graph existence** (Lubotzky–Phillips–Sarnak, Margulis) —
statement only; the construction rests on number theory and representation theory
the library has not reached. **Zig-zag products and the combinatorial
constructions of expander families** — deferred as a body of theory; the page
defines expansion and proves the spectral bounds, and does not claim to construct
an infinite family.

FS: every $d$-regular graph with $d\ge3$ is an expander; $h(G)$ and the vertex
expansion agree up to a factor of $d$ (they do not — convention 6, and conflating
them is a false-statement risk rather than a stylistic choice); the expander mixing
lemma holds for irregular graphs in the stated form; Cheeger's two directions are
tight simultaneously.

B: $h(K_n)$, $h(C_n)$ and $h(Q_n)$ computed; the mixing lemma checked against the
Petersen graph; the sweep cuts of an explicit eigenvector on a small graph; the
easy Cheeger direction verified numerically on $C_6$.

CEX: a graph where the easy and hard Cheeger bounds are far apart; a $d$-regular
graph with small $h$ and small $\lambda$ (there is none, by Cheeger — so this
`cex-` must instead show small $h$ forcing large $\lambda$, i.e. it is a
consequence and not a counterexample, and the item drops or is rephrased).

Traps. (i) Convention 6 fixes the expansion constant; state it. (ii) Convention 2
fixes what $\theta_2$ and $\lambda_2$ mean, and this page uses **both** the
adjacency and the Laplacian orderings. (iii) $\min(\lvert S\rvert\le n/2)$ makes
$h$ well defined and nonempty (#99); the null and complete cases are stated
boundary cases.

Provenance: Statements `literature-derived` (A1, A2, quoted). Proofs
`literature-derived`; the finite sweep-cut replacement for Trevisan's continuous
threshold is `ai-altered` — the mathematics is A2's, the finiteness reduction is
this scaffold's, and it must be written out in full rather than asserted.

---

## GT-22 (NEW, placed high). Plane Duality, Cycles and Bonds, and Flow–Colouring Duality

**Anchor:** `plane-graphs-euler-and-the-five-colour-theorem-examples` (published).
`requires`: `plane-graphs-euler-and-the-five-colour-theorem`, GT-18,
`graphs-walks-and-connectivity` (`def-multigraph-loop-and-digraph`),
`matchings-covers-menger-and-network-flows`, `trees-forests-and-spanning-trees`.

**§19.1's "exactly one pair above the planarity page" is superseded**, and the
reason is a disk finding §19.1 did not have: the published plane-graph page is far
stronger than the enrichment assumed. It already proves
`thm-kuratowski-wagner-planarity-characterisation`, publishes
`def-plane-dual-multigraph` and
`thm-plane-dual-exists-and-double-dual-recovers-primal`, and carries
`prop-maximal-plane-triangulation-characterisation`,
`prop-face-boundaries-in-two-connected-plane-graphs` and
`prop-face-boundaries-in-three-connected-plane-graphs` — 40 items in all. So the
Kuratowski/Wagner circle the dispatch names as a target **is already closed**, and
what remains above the planarity page is flow–colouring duality, the colouring
results that need an embedding, and crossing numbers. That is **two pairs, not
one**, and §19.1 is corrected accordingly rather than being allowed to force a
60-item overflow.

DEFS: **cycles and bonds** of a multigraph and the **cut space** / **cycle space**;
the induced bijection $\vec e\mapsto\vec e^{*}$ on directed edges (G1 Lemma 6.5.1);
the **flow number** $\varphi(G)$; a **snark**, verbatim from G1 §6.6 and now
statable in full, since both halves — no $4$-flow, no $3$-edge-colouring — are
available.

THMS: **every cut is a disjoint union of bonds** (G1 Lemma 1.9.3);
**the cycles of $G$ correspond to the bonds of $G^{*}$** (landmark; G1 Thm 4.6.1),
citing the published `def-plane-dual-multigraph`; **$g$ is a circulation on
$G^{*}$ iff $f$ satisfies (F1) and vanishes on every oriented cycle** (G1
Lemma 6.5.2); **flow–colouring duality** (landmark; G1 Thm 6.5.3, Tutte 1954:
"For every dual pair $G$, $G^{*}$ of plane multigraphs, $\chi(G)=\varphi(G^{*})$"),
~20 steps across three items, using the published normal-spanning-tree material;
**a cubic graph has a $4$-flow iff it is $3$-edge-colourable** (G1 6.4.5, cited
from GT-18), which is what makes "snark" and "class 2" the same notion for cubic
bridgeless graphs; **the four colour theorem stated**, with `proved_here: false`
and the Appel–Haken and Robertson–Sanders–Seymour–Thomas sources, and its
translation into the $4$-flow conjecture recorded.

**G1's dictionary, reproduced as a required `rem-` because it is the page's
point:** by flow–colouring duality the $3$-flow conjecture translates to
Grötzsch's theorem, the $4$-flow conjecture to the four colour theorem (since the
Petersen graph is not planar, it is not a minor of a planar graph), and the
$5$-flow conjecture to the five colour theorem — which the library already
publishes as `thm-five-colour-theorem`. Tutte's three flow conjectures are quoted
verbatim as open problems in `rem-` items, never as theorems.

**Whitney's 2-isomorphism theorem** (two graphs have isomorphic cycle matroids
iff each is obtainable from the other by vertex identifications, splittings and
Whitney twists) is **conditional on GT-17**: it is a matroid statement, and the
matroid harvest (§29) decides whether it is scaffolded here, on GT-17, or
deferred.

FS: every plane multigraph has a unique dual (the published
`ex-one-planar-graph-two-nonisomorphic-duals` is the witness and is **cited, not
re-minted**); flow–colouring duality holds for abstract, non-plane graphs; a
bridgeless graph always has a $4$-flow.

B: the dual of a small plane multigraph drawn and its cycles matched to bonds;
$\varphi(K_4)$ computed and checked against $\chi$ of its dual; the Petersen graph
identified as a snark.

Traps. (i) **Multigraphs, not graphs** (convention 8): contracting a plane graph
produces loops and parallel edges, and these theorems are false or vacuous for
simple graphs. (ii) Duality is a property of a **plane** graph, i.e. of an
embedding, not of a planar graph — the published counterexample says so.
(iii) The four colour theorem is `proved_here: false` and its consequences inherit
the ‡ marker.

Provenance: Statements `literature-derived` (G1, quoted). Proofs
`literature-derived`; the four colour theorem's proof is `not-supplied`.

---

## GT-23 (NEW, placed high). Colouring Plane Graphs: 5-Choosability, Grötzsch and Crossing Numbers

**Anchor:** immediately after GT-22's examples page.
`requires`: GT-22, GT-12, GT-9,
`plane-graphs-euler-and-the-five-colour-theorem`,
`finite-probability-and-the-probabilistic-method`.

THMS: **Thomassen's theorem** (landmark; G1 Thm 5.4.2: "Every planar graph is
5-choosable") — **8–12 numbered steps, one of the best value-for-length results in
all of graph colouring**, proved through the strengthened assertion (∗) quoted
verbatim from G1: every inner face bounded by a triangle, the outer face by a
cycle $C=v_1\dots v_kv_1$, $v_1$ coloured 1 and $v_2$ coloured 2, lists of size
$\ge3$ on the rest of $C$ and $\ge5$ off it, then the colouring extends. The
induction splits on whether $C$ has a chord; **its only dependency is
`prop-maximal-plane-triangulation-characterisation`, which the library already
publishes** (G1's Prop. 4.2.8). **The five colour theorem falls out as a free
corollary with a genuinely different proof** — G1 says so explicitly: "The proof of
this does not use the five colour theorem (or even Euler's formula …). We thus
reobtain the five colour theorem as a corollary, with a very different proof." An
agreement `rem-` against the published `thm-five-colour-theorem` is **required**;
the library must not hold two unrelated five-colour theorems.
**Planar graphs are not in general 4-choosable** (Voigt 1993, a plane graph of
order 238) — statement only, `proved_here: false`, and it is what makes Thomassen's
theorem best possible.

**Grötzsch's theorem** (every triangle-free planar graph is 3-colourable) is
scaffolded **conditionally**. G1 states it as Thm 5.1.3; the harvest did not
establish whether the 5th edition proves it, and the classical proof is a
discharging argument. Disposition: a step-2 Beta confirms from the source whether
a bounded proof is available — Thomassen's short proofs of Grötzsch's theorem are
the candidate — and if not, the theorem is a source-cited `rem-` with
`proved_here: false` and the failed route recorded. **It is not written from
memory**, and §29 records it as an open sourcing question.

**The crossing number and the crossing lemma.** The crossing number $\operatorname{cr}(G)$
is defined here; the **crossing lemma**
$\operatorname{cr}(G)\ge\lVert G\rVert^3/(64\lvert G\rvert^2)$ for
$\lVert G\rVert\ge4\lvert G\rvert$ is scaffolded, because its proof is exactly the
kind this library can write: the linear bound
$\operatorname{cr}(G)\ge\lVert G\rVert-3\lvert G\rvert+6$ from the published
`cor-planar-simple-graph-edge-bound`, then a **random induced subgraph** and the
published `finite-probability-and-the-probabilistic-method` machinery to amplify
it. ~12 steps. **No source for it was obtained by any harvest in this run**, so it
is scaffolded but not source-complete; the candidates recorded in §29 are
Schaefer's open dynamic survey *The Graph Crossing Number and its Variants* and
the original Ajtai–Chvátal–Newborn–Szemerédi and Leighton papers. Its consequence,
the **Szemerédi–Trotter incidence theorem**, is scaffolded only if that source
pass succeeds; it is the classic payoff and it should not be dropped for want of
one fetch.

FS: every planar graph is 4-choosable; the crossing lemma holds without the
density hypothesis $\lVert G\rVert\ge4\lvert G\rvert$ (it does not — the witness is
a sparse graph, and the hypothesis is exactly what makes the probabilistic
amplification legal); Grötzsch's theorem extends to graphs of girth 4 on the
torus.

B: Thomassen's induction run on a small triangulation with explicit lists;
$\operatorname{cr}(K_5)=1$ and $\operatorname{cr}(K_6)=3$; the crossing lemma
evaluated on a dense small graph; the Grötzsch graph ($\mu(C_5)$, from GT-9)
identified as triangle-free with $\chi=4$ and **non-planar**, which is exactly why
Grötzsch's theorem needs planarity.

Traps. (i) Thomassen's (∗) is a strengthening; proving the theorem directly does
not work and the strengthened statement is the item. (ii) The five-colour
corollary needs the agreement `rem-`. (iii) $\mu(C_5)$ is the standard witness that
triangle-freeness alone does not bound $\chi$; on this page it is the witness that
planarity is load-bearing in Grötzsch. Both readings are correct and the item must
say which it is using.

Provenance: Statements `literature-derived` (G1, quoted) for Thomassen and Voigt;
Grötzsch and the crossing lemma are `literature-derived` **pending the source
pass** and must not ship before it.

---

## GT-24 (NEW). Hamiltonicity II: Chvátal–Erdős, Degree Sequences and Toughness

**Anchor:** immediately after `eulerian-and-hamiltonian-graphs-examples`
(published).
`requires`: `eulerian-and-hamiltonian-graphs`, `graphs-walks-and-connectivity`,
`graph-colouring`, GT-14.

The published page carries Dirac and Ore (`cor-diracs-hamiltonicity-theorem`,
`lem-dirac-condition-implies-ore-condition`, `ex-ore-condition-without-dirac-condition`,
`cex-dirac-threshold-sharp`). Everything here strictly strengthens them, so this
pair is an extension and nothing on the published page is touched.

THMS: **Chvátal–Erdős** (landmark; G1 Prop. 10.1.2: "Every graph $G$ with
$\lvert G\rvert\ge3$ and $\alpha(G)\le\kappa(G)$ has a Hamilton cycle") — ~12
steps by taking a longest cycle and deriving a contradiction from a component of
$G-C$, and it needs only $\kappa$ and $\alpha$, both published;
**Asratian–Khachatrian** (G1 Thm 10.1.3: a connected graph of order $\ge3$ is
hamiltonian if $d(u)+d(w)\ge\lvert N(u)\cup N(v)\cup N(w)\rvert$ for every induced
path $uvw$) — ~20 steps, and it **implies both Dirac and Ore**, so the page carries
two required derivation items citing the published theorems and showing they are
special cases; **Chvátal's degree-sequence theorem** (landmark; G1 Thm 10.2.1) —
~20–25 steps for both directions — with G1 Cor. 10.2.2 as the path version;
**toughness** defined and the relation to hamiltonicity stated; **Tutte's theorem
that every 4-connected planar graph has a Hamilton cycle** — statement only in G1,
so `proved_here: false`; **Fleischner's theorem** ($G^2$ is hamiltonian for
2-connected $G$) — G1 proves it but it is his longest chapter-10 proof at ~5
printed pages; disposition **deferred**, with the reason recorded, unless a step-2
Beta finds a split into bounded items.

FS: $\alpha(G)\le\kappa(G)$ is necessary for hamiltonicity (it is sufficient, not
necessary — the witness is any long cycle); every $1$-tough graph is hamiltonian
(open in general and **false** in the strong form — this must be checked against a
source before shipping, since the tough-graph literature is where a careless
statement becomes a false theorem); Chvátal's condition is symmetric in the
sequence.

B: Chvátal–Erdős applied to the Petersen graph (which fails it, $\alpha=4>3=\kappa$,
and is indeed non-hamiltonian — the published `def-petersen-graph` is cited);
Chvátal's condition checked on an explicit degree sequence; a hamiltonian graph
failing Dirac's bound.

CEX: a non-hamiltonian graph satisfying Ore's condition minus one; a $1$-tough
non-hamiltonian graph — **check the witness against a source**.

Provenance: Statements `literature-derived` (G1, quoted); the two items showing
Asratian–Khachatrian implies the published Dirac and Ore theorems are
`ai-altered`, since the derivations are routine but the pairing with *these*
published items is this library's.

---

# 25. The probabilistic, Ramsey and additive block

Sources are keyed **P1**–**P6**: **P1** Alon & Spencer, *The Probabilistic
Method*; **P2** Zhao, *Graph Theory and Additive Combinatorics* (= G2);
**P3** Zhao, *Probabilistic Methods in Combinatorics*
(`https://yufeizhao.com/pm/probmethod_notes.pdf` — note the singular `probmethod`,
the plural path 404s); **P4** Matoušek & Vondrák, *The Probabilistic Method*
lecture notes; **P5** Gowers, *Entropy Methods in Combinatorics*, Cambridge
Part III (`https://danielnaylor.uk/notes/III/Lent/EMC/EMC.pdf`, with per-section
HTML at `.../HTML/EMCse{1..7}.html`); **P6** Tao & Vu, *Additive Combinatorics*.
Frieze–Karoński, Bollobás *Random Graphs*, Janson–Łuczak–Ruciński and
Molloy–Reed were harvested at contents level. Full ledger, the finiteness audit
and the verbatim headings: `research/subjects-01-combinatorics-harvest-probabilistic.md`.

## 25.0 The finiteness discipline this whole block runs on

The library has **finite probability only** — `finite-probability-spaces-and-random-variables`
(37 items) and `finite-probability-and-the-probabilistic-method` (28 items) are
published, and measure-theoretic probability belongs to the `probability-theory`
track (SEAMS §4), which must **cite** this material and not rebuild it. That is a
real constraint and the harvest's central job was to say exactly what survives
it. The answer is: **almost everything, and the surviving statements are often
sharper than the ones a measure-theoretic treatment would state.**

Three verdicts govern every item below, and every page states which applies:

- **[F] finite** — a theorem about a single finite probability space, or about no
  probability at all. Authored as a theorem, with explicit constants.
- **[L] a limit of finite** — a statement about a *sequence* of finite spaces,
  expressed with real limits, which the library has. **In almost every case there
  is a finite inequality underneath, and that inequality is the theorem while the
  limit is a corollary.** Chebyshev's $\Pr[X=0]\le\operatorname{Var}X/(\mathbb{E}X)^2$
  is the model: valid for each fixed $n$ with no limit at all.
- **[X] out of reach** — genuinely needs measure theory or another subject.

**Three traps this discipline creates, all of them ways to author a false
statement, and each is a required `rem-` on the page where it arises.**

1. **Do not flatten a sharp limit to "whp".** The connectivity threshold
   (Frieze–Karoński Thm 4.1) says: with $m=\frac12 n(\log n+c_n)$, the limit of
   $\Pr[G_m$ connected$]$ is $0$ if $c_n\to-\infty$, **$e^{-e^{-c}}$ if
   $c_n\to c$**, and $1$ if $c_n\to\infty$. Restating that as "whp connected"
   authors a *weaker* statement than the source.
2. **Do not sharpen a "whp" statement to a finite one.** The two-point
   concentration of $\omega(G(n,\tfrac12))$ asserts the existence of a function
   $k(n)$ with $\lim\Pr[k(n)\le\omega\le k(n)+1]=1$; **$k(n)$ is not in closed
   form and no source gives an error bound.** Any finite-$n$ version would
   overstate every standard source.
3. **Do not use "almost surely".** The harvest's recommendation, adopted: write
   $\lim_{n\to\infty}\mu_n(P_n)=1$ explicitly. P1's older "almost always" and the
   modern "whp / a.a.s." are the same notion, but "almost surely" carries
   measure-theoretic freight this library cannot support.

**The two questions the dispatch singled out are both answered favourably.**
Martingale concentration is **[F]**: P1 defines a martingale as a *finite*
sequence $X_0,\dots,X_m$, conditional expectation on a finite space is a weighted
finite average, and Azuma–Hoeffding is six steps. The entropy method is **[F] in
full**, and it is the best value in the harvest.

## 25.1 Conventions this block adopts

| # | question | disagreement | adopted | why |
|---|---|---|---|---|
| 19 | random graph model | $G(n,p)$ vs $G(n,M)$ | **$G(n,p)$**, matching the published finite-space construction | it is a product of finite two-point spaces, so it *is* the library's published product-space construction; and every calculation factors |
| 20 | "with high probability" | (a) whp / a.a.s. (P2, Bollobás, JLR); (b) "almost always" (P1); (c) $\ge1-n^{-C}$ (the CS convention, genuinely quantitative and **different**) | **write the limit explicitly**; never "almost surely" | (a) and (b) agree; (c) does not, and the phrase "almost surely" imports measure theory |
| 21 | arrow notation | superscript = uniformity, subscript = colours (GRS) vs a target size per colour | **GRS**, extending the published `def-ramsey-colouring-and-arrow-notation` without breaking it | the library's published notation is the two-colour, pair case and must remain a special case |
| 22 | multicolour Ramsey numbers | $R_c(k)$ vs $R(k_1,\dots,k_c)$ | **$R(k_1,\dots,k_c)$** | it degrades gracefully to the published two-colour `def-off-diagonal-ramsey-number`; $R_c(k)$ adds a parameter position for information already in the argument count |
| 23 | additive energy | unnormalised count (P2 Def 7.13.1) vs $E/(\lvert A\rvert^{3/2}\lvert B\rvert^{3/2})$ (P6 and the analytic literature) | **the unnormalised count** | it is an integer and makes "small doubling implies large energy" a clean inequality between integers |
| 24 | Sidon / $B_h$ | the combinatorial $B_2$ notion; $B_h[g]$; **and the harmonic-analysis "Sidon set", a completely different concept**; and Erdős's distinct-subset-sums condition, which is **stronger** than Sidon | **the combinatorial $B_2$ definition, named explicitly**, with the other three recorded as distinct notions | three easily confused concepts, one of which is a false friend |
| 25 | discrepancy sign | $\chi:\Omega\to\{-1,+1\}$ with $\operatorname{disc}=\min_\chi\max_A\lvert\chi(A)\rvert$ (P1 §13.1); the red/blue form, numerically identical; the deviation-from-half form, which is **half** | **the $\pm1$ convention** | every constant in the literature ($6\sqrt n$, $2t-1$) is stated against it; the half-deviation convention silently halves every bound |
| 26 | entropy base | base 2 (P1 §15.7, P5) vs natural log (nats) | **base 2, fixed explicitly in the definition** | it makes $H(X)\le\log_2\lvert S\rvert$ and the counting corollaries come out cleanly. G1's $\log$ is also base 2 (convention 18), so the whole library is consistent |
| 27 | Azuma indexing | $X_0=0$ with $\Pr[X_m>\lambda\sqrt m]$ (P1 Thm 7.2.1); $Z_0,\dots,Z_n$ (P4); per-step bounds $c_i$ giving $\exp(-\lambda^2/(2\sum c_i^2))$ (P3) | **the per-step-bounds form**, deriving the $\sqrt m$ form as a corollary | it subsumes the others |
| 28 | $(n,d,\lambda)$-graph | $\lambda$ = second-largest **absolute** eigenvalue vs second-largest signed eigenvalue | **absolute value**, matching convention 2's ordering | it is what makes the expander mixing lemma true as stated |

---

## CB-25 (NEW). Entropy in Combinatorics

**Anchor:** immediately after `finite-probability-and-the-probabilistic-method-examples`
(published). `requires`: `finite-probability-spaces-and-random-variables`,
`finite-probability-and-the-probabilistic-method`, `convexity-and-jensen` (the
page homing `thm-finite-jensen-inequality` — verify at build),
`finite-counting-and-binomial-coefficients`, `the-natural-logarithm`.

**The harvest's strongest single recommendation, and the reason is worth
recording: entropy is the one major modern technique whose every object is a
finite sum, so a library with no measure theory loses nothing at all.** P5's
Cambridge Part III course states in its first line that "random variable" means
"discrete random variable" throughout.

DEFS: **Shannon entropy** $H(X)=-\sum_{x\in S}p(x)\log_2 p(x)$ on a finite range
(#106, convention 26), with $0\log0=0$ **labelled as the convention it is**;
conditional entropy $H(X\mid Y)$; joint entropy; the projection $X(G)$ of a random
vector onto a coordinate set $G$; the **binary entropy function**.

THMS: the four basic bounds (P1 Lemma 15.7.1) — $H(X)\le\log_2\lvert S\rvert$ with
equality iff uniform; $H(X,Y)\ge H(X)$; $H(X,Y)\le H(X)+H(Y)$;
$H(X\mid Y,Z)\le H(X\mid Y)$ — each a short Jensen argument on $\log z$ and
$z\log z$, citing the published `thm-finite-jensen-inequality`;
**subadditivity** $H(X)\le\sum_iH(X_i)$ (P1 Prop. 15.7.2); the **chain rule**
(P5 Lemma 1.3, P3 Lemma 10.1.7); **submodularity** (P5 Prop. 1.14);
**Shearer's lemma** (landmark; P1 Prop. 15.7.4, P3 Thm 10.4.5, P5 Lemma 4.1) — if
$\mathcal{G}$ is a family of subsets of $[n]$ with each $i$ in at least $k$
members then $k\cdot H(X)\le\sum_{G\in\mathcal{G}}H(X(G))$ — by induction on $k$,
the step replacing $G_1,G_2$ by $G_1\cup G_2$ and $G_1\cap G_2$ using
submodularity and terminating because the move decreases a finite sum, ~6 steps;
**Shearer's counting form** $\lvert\mathcal{F}\rvert^k\le\prod_i\lvert\mathcal{F}_i\rvert$
(P1 Cor. 15.7.5), by taking $X$ uniform on $\mathcal{F}$ so that
$H(X)=\log\lvert\mathcal{F}\rvert$; **the discrete Loomis–Whitney inequality**
$\lvert A\rvert^{n-1}\le\prod_i\lvert\pi_i(A)\rvert$ for finite $A\subseteq\mathbb{Z}^n$
(P3 Cor. 10.4.6, P5 Cor. 4.3); **Kruskal–Katona** in Lovász's form (P5 Thm 4.8) —
**and here the library gets a second proof of a result CB-21 proves by
compressions (§22), which is exactly the kind of pairing the house style
rewards**; **Brégman's theorem** (landmark; P1's Probabilistic Lens, P3 Thm 10.2.1,
P5 Thm 3.1) — $\operatorname{per}(A)\le\prod_i(d_i!)^{1/d_i}$ for a $0/1$ matrix
with row sums $d_i$, i.e. the Minc conjecture, by the entropy of a uniformly
random permutation contributing to the permanent revealed in a random order, ~8
steps; **Kahn–Lovász** as its corollary; the **edge-isoperimetric inequalities**
in the cube ($\lvert\partial A\rvert\ge\lvert A\rvert(n-\log\lvert A\rvert)$, P5
Thm 4.7) and in $\mathbb{Z}^n$ (P5 Thm 4.6), both ~4 steps from Shearer;
**$\Delta$-intersecting families** (Kleitman–Shearer–Sturtevant, P1 Cors. 15.7.3
and 15.7.7); **Sidorenko's conjecture in its known cases** (P5 Thm 2.1, P3
§10.3 — Blakey–Roy).

**Take the DISCRETE Loomis–Whitney.** P1 Cor. 15.7.6 states it for "a measurable
body $B$ in $n$-dimensional Euclidean space", which is **[X]**. P3 Cor. 10.4.6 and
P5 Cor. 4.3 give the discrete form with the same content for this library's
purposes and no measure theory. This is a case where two sources state the same
named result at different strengths and only one is usable — the page must cite
the discrete one and must not quote P1's phrasing.

**Prerequisite to verify, and it is the page's only risk.**
`thm-finite-jensen-inequality` is published, and `ex-finite-jensen-gives-the-mean-square-inequality`
with it. Every bound here is Jensen applied to a convex function (#106). If the
homing page turns out to be a B page, the b-leaf rule forbids citing it and the
lemma must be reproved here with an agreement `rem-`; **check on disk before
writing `requires`.**

FS: $H(X,Y)=H(X)+H(Y)$ always; Shearer's lemma holds with "each $i$ in at least
$k$ members" weakened to "on average $k$"; the continuous and discrete
Loomis–Whitney inequalities are the same statement; $H(X)\le\log_2\lvert S\rvert$
with equality for every non-degenerate $X$.

B: $H$ of a fair and a biased coin; Shearer applied to $\mathcal{G}=$ all
$(n-1)$-subsets of $[3]$; discrete Loomis–Whitney checked on an explicit
$A\subseteq\mathbb{Z}^3$; Brégman's bound evaluated on a small $0/1$ matrix and
checked against a direct permanent computation; the entropy proof of
Kruskal–Katona run on a small family and compared with CB-21's compression proof.

CEX: two dependent variables with $H(X,Y)<H(X)+H(Y)$; a family where the naive
"average $k$" version of Shearer fails.

Provenance: Statements `literature-derived` (P1, P3, P5). Proofs
`literature-derived`. The pairing of the entropy and compression proofs of
Kruskal–Katona is `ai-altered` structuring and needs an agreement `rem-`.

---

## CB-29 (NEW). Correlation Inequalities, the Four Functions Theorem and Janson's Inequalities

**Anchor:** immediately after CB-25's examples page.
`requires`: CB-25, `finite-probability-spaces-and-random-variables`,
`chains-antichains-sperner-and-dilworth` (finite lattices),
`incidence-algebras-and-mobius-inversion`.

**Every object on this page is finite by hypothesis in the source itself** — P1
Thm 6.1.1 says "four functions on $\mathcal{P}(N)$", Cor. 6.1.2 says "a **finite**
distributive lattice", Thm 8.1.1 says "Let $\Omega$ be a **finite** universal
set … $I$ a **finite** index set". Nothing here mentions a $\sigma$-algebra.

DEFS: an **increasing** (monotone) family and an increasing event; the set
operations $\mathcal{A}\vee\mathcal{B}$, $\mathcal{A}\wedge\mathcal{B}$ on
families; a **finite distributive lattice**, cited from the published lattice
material; the dependency graph relation $i\sim j$ ($A_i\cap A_j\ne\varnothing$);
$\mu$, $\Delta$ and $M$ in Janson's setting.

THMS: **the Four Functions Theorem** (landmark; P1 Thm 6.1.1, Ahlswede–Daykin) —
if $\alpha(A)\beta(B)\le\gamma(A\cup B)\delta(A\cap B)$ for all $A,B\subseteq N$
then the same holds for families — by induction on $\lvert N\rvert$ whose base
case is a two-line algebraic identity reducing to
$(\gamma_1\delta_0-\alpha_0\beta_1)(\gamma_1\delta_0-\alpha_1\beta_0)\ge0$;
**its extension to a finite distributive lattice** (P1 Cor. 6.1.2);
**the FKG inequality** (landmark; P1 Thm 6.2.1), in ~4 steps by setting
$\alpha=\mu f$, $\beta=\mu g$, $\gamma=\mu fg$, $\delta=\mu$; **Harris's
inequality** for increasing events on the cube; **Janson's inequality**
(landmark; P1 Thm 8.1.1) — $M\le\Pr[\bigwedge\neg B_i]\le Me^{\Delta/(2(1-\varepsilon))}$
and $\Pr[\bigwedge\neg B_i]\le e^{-\mu+\Delta/2}$ — by the Boppana–Spencer route
(P1 §8.2) through the two conditional inequalities
$\Pr[B_i\mid\bigwedge_{j\in J}\neg B_j]\le\Pr[B_i]$ and
$\Pr[B_i\mid B_k\wedge\bigwedge_{j\in J}\neg B_j]\le\Pr[B_i\mid B_k]$, ~8–12 steps
— **and the first of those is exactly Harris/FKG, which is why the correlation
material must precede it on the same page**; **the extended Janson inequality**
(P1 Thm 8.1.2) $\Pr[\bigwedge\neg B_i]\le e^{-\mu^2/(2\Delta)}$ when $\Delta\ge\mu$;
**Suen's inequality** (P1 Thm 8.7.1).

**CB-21 (§22) already carries the four functions theorem, Harris/FKG and
Kleitman's lemma in their set-system forms.** This page must not re-mint them. The
division adopted: **CB-21 states them for finite distributive lattices and
set systems as extremal-set-theory results; CB-29 cites CB-21 and adds only the
probabilistic reading and Janson.** §28 records the amendment CB-21 owes — a
`rem-` pointing forward to the probabilistic use — and §29 flags this as the one
place in the enrichment where two blocks converge on the same theorem.

FS: Janson's inequality holds without the independence of the ground-set
indicators; FKG holds for one increasing and one decreasing function in the same
direction (it reverses — and that reversal is the page's most useful `fs-`,
because getting the direction wrong is the standard error); $\Delta$ may be taken
over unordered pairs (P1 sums over **ordered** pairs, and halving it silently
breaks every constant).

B: FKG checked on two increasing events in the $3$-cube; Janson applied to the
probability that $G(n,p)$ is triangle-free, with $\mu$ and $\Delta$ computed
explicitly; the four functions theorem verified on $N=\{1,2\}$.

Provenance: Statements `literature-derived` (P1, quoted). Proofs
`literature-derived`.

---

## CB-30 (NEW). Martingales and Concentration on Finite Spaces

**Anchor:** immediately after CB-29's examples page.
`requires`: CB-29, `finite-probability-spaces-and-random-variables`,
`finite-probability-and-the-probabilistic-method`, `the-exponential-function`,
`graph-colouring`.

**This page is the harvest's decisive finiteness verdict made concrete.** A
martingale here is a *finite sequence*; conditional expectation on a finite space
is a weighted finite average; **no filtration, no $\sigma$-algebra, no
measurability hypothesis appears anywhere.** P3's own parenthetical — "(To be more
formal, we should talk about filtrations of a probability space …)" — names
exactly the formality a finite space lets the library skip, and the page should
say so in a `rem-`.

DEFS: a **finite martingale** $X_0,\dots,X_m$ with
$\mathbb{E}[X_{i+1}\mid X_i,\dots,X_0]=X_i$ (P1's definition, verbatim); the
**edge-exposure** and **vertex-exposure** martingales on $G(n,p)$; the **Doob
martingale** of a function on a finite product; the **edge** and **vertex
Lipschitz** conditions; a **gradation** $\varnothing=B_0\subset\dots\subset B_m=B$.

THMS: **Azuma–Hoeffding** (landmark; P1 Thm 7.2.1) — six numbered steps: set
$\alpha=\lambda/\sqrt m$, $Y_i=X_i-X_{i-1}$; bound
$\mathbb{E}[e^{\alpha Y_i}\mid X_{i-1},\dots,X_0]\le\cosh\alpha\le e^{\alpha^2/2}$;
telescope the finite product to $\mathbb{E}[e^{\alpha X_m}]\le e^{\alpha^2m/2}$;
apply the published Markov inequality to $e^{\alpha X_m}$ — authored in the
**per-step-bounds form** $\exp(-\lambda^2/(2\sum c_i^2))$ (convention 27) with the
$\sqrt m$ form as a corollary; **the Lipschitz transfer** (P1 Thms 7.2.3, 7.4.1) —
the edge/vertex Lipschitz condition gives $\lvert X_{i+1}-X_i\rvert\le1$ — proved
in the general setting $\Omega=A^B$ with a gradation and independent coordinates,
by a finite double-sum rearrangement; **bounded differences / McDiarmid's
inequality** (landmark; P3 Thms 9.1.1, 9.1.3) with **all three of its names
recorded** — McDiarmid, Azuma–Hoeffding, bounded differences — via the Doob
martingale and Hoeffding's lemma; **Shamir–Spencer** (landmark; P1 Thm 7.2.4) —
$\Pr[\lvert\chi(G(n,p))-\mathbb{E}\chi\rvert>\lambda\sqrt{n-1}]<2e^{-\lambda^2/2}$
— three steps from the vertex-exposure martingale plus the observation that one
vertex can always take a new colour, and **the one genuinely finite theorem in the
random-graph literature: it holds for every $n$ and every $t$, with an explicit
constant and no limit at all**; **the chromatic-number concentration bound**
$\Pr[\lvert\chi-\mathbb{E}\chi\rvert\ge t]\le2\exp(-t^2/2n)$ in that same finite
form; **Bollobás's theorem** $\chi(G(n,\tfrac12))\sim n/(2\log_2 n)$ (P1
Thm 7.3.2/10.3.1) as an **[L]** statement with the finite martingale estimates
underneath authored as the theorems.

**Denied, with the reason in each case.** **Talagrand's inequality** is *not*
blocked by measure theory — the product space is finite and P1's
$\int_\Omega e^{\rho^2(A,x)/4}\,dx\le1/\Pr[A]$ is a finite sum — but the convex
distance $\rho(A,x)=\min_{v\in V(A,x)}\lvert v\rvert$ is a minimum over a **convex
hull** in $\mathbb{R}^n$, so it needs convex hulls, attainment on a compact convex
set, and a separating-hyperplane argument. **Disposition: `deferred`, with the
gate named precisely — finite polytope and convex-geometry machinery, not measure
theory.** The convex hull of $U(A,x)\subseteq\{0,1\}^n$ is a polytope, so a future
level that builds finite convex geometry closes it; §29 records the licence.
**Kim–Vu polynomial concentration** — `deferred` on length. **The martingale
convergence theorem, Borel–Cantelli, the Erdős–Rényi phase transition (which runs
through Galton–Watson branching processes), zero–one laws, graphons, and the
Gaussian/isoperimetric block** — all **[X]**, each recorded with the specific
infinite object that puts it out of reach. **Borel–Cantelli in particular must not
be used anywhere in this track**: it is a statement about $\sum_{n=1}^\infty\Pr[A_n]$.

FS: Azuma requires the increments to be independent (it requires only the
martingale property and the bound — this is the page's most valuable `fs-`,
because assuming independence is the standard misreading); Shamir–Spencer
concentrates $\chi$ around $n/(2\log_2 n)$ (it concentrates $\chi$ around its own
expectation, and locating that expectation is Bollobás's much harder theorem —
**conflating the two is a real and common error**); McDiarmid holds when the
$\Omega_i$ are infinite.

B: Azuma applied to a simple random walk; the edge-exposure martingale of the
triangle count on $G(4,\tfrac12)$ written out in full; Shamir–Spencer evaluated
numerically for a small $n$; a Doob martingale on a finite product.

Provenance: Statements `literature-derived` (P1, P3, quoted). Proofs
`literature-derived`.

---

## CB-26 (NEW). Discrepancy

**Anchor:** immediately after CB-30's examples page.
`requires:` CB-25, CB-30, CB-13, CB-14b (Hadamard matrices),
`gaussian-elimination-and-row-reduction`,
`finite-probability-and-the-probabilistic-method`.

DEFS: a colouring $\chi:\Omega\to\{-1,+1\}$, $\chi(A)=\sum_{j\in A}\chi(j)$, and
$\operatorname{disc}(\mathcal{F})=\min_\chi\max_{A\in\mathcal{F}}\lvert\chi(A)\rvert$
(#107, convention 25); the **degree** $\deg(\mathcal{F})$; **linear** and
**hereditary** discrepancy; a **partial colouring**.

THMS: **the random-colouring bound** $\operatorname{disc}(\mathcal{F})\le\sqrt{2m\ln(2n)}$
for $n$ subsets of an $m$-set (P1 Thm 13.1.1) — three steps from the published
Chernoff bound for random signs and a union bound; **Beck–Fiala** (landmark;
P1 Thm 13.5.1) — $\deg(\mathcal{F})\le t$ implies
$\operatorname{disc}(\mathcal{F})\le2t-1$, **with no restriction on the number or
size of the sets** — by keeping every active set at value $0$, observing that
active sets outnumbered by floating points give an underdetermined system, moving
along a line until some coordinate hits $\pm1$, and iterating: **~7 numbered
steps and no probability at all.** P1's own remark is the reason it belongs here:
the proof "uses only methods from linear algebra and thus is technically outside
the scope we have set for this book" — which is precisely why it fits a library
with no measure theory, and it is the harvest's single most elegant cheap item;
**six standard deviations** (landmark; P1 Thm 13.2.1, P3 Thm 5.1.3) —
$n$ subsets of an $n$-set have $\operatorname{disc}\le6\sqrt n$; **linear and
hereditary discrepancy** $\operatorname{lindisc}\le\operatorname{herdisc}$ and
$\operatorname{disc}(\mathcal{F})\le12\sqrt n$ for arbitrary set sizes (P1
Thms 13.3.1–13.3.2, Cors. 13.3.3–13.3.4), by a finite rounding argument;
**the Hadamard lower bound** (P1 Thm 13.4.1) — a Hadamard matrix of order $n>1$
gives $n$ subsets of an $n$-set with $\operatorname{disc}\ge\sqrt n/2$ — which
cites CB-14b and closes the gap between the upper and lower bounds.

**The route decision for six standard deviations is load-bearing, not stylistic.**
Two proofs exist. Spencer's original **partial-colouring / entropy** method is a
pigeonhole over finitely many colourings using CB-25's entropy bound — **entirely
finite**. P1's fourth edition presents **Lovett–Meka** (Thms 13.2.2–13.2.5), a
Gaussian random walk in $\mathbb{R}^n$ needing chi-squared distributions and
Gaussian martingales — **[X]**. **Scaffold the entropy route only**, and say in
the batch notes that the fourth-edition presentation was rejected for a stated
reason. This is also why CB-25 must precede CB-26 on the reading path.

**Denied:** the Beck–Fiala and Komlós conjectures — statements only.

FS: $\operatorname{disc}$ is monotone under adding sets to $\mathcal{F}$;
Beck–Fiala's bound depends on the number of sets (it does not, and that is the
theorem's whole point); the half-deviation convention gives the same constants
(convention 25 — it halves every bound).

B: $\operatorname{disc}$ of all $2$-subsets of $[4]$ computed by hand; Beck–Fiala
run on an explicit degree-$2$ family; the Hadamard construction of order $4$ and
its discrepancy; the random-colouring bound evaluated and compared with the truth
on a small family.

Provenance: Statements `literature-derived` (P1, P3). Proofs
`literature-derived`; the explicit rejection of the Lovett–Meka route is this
scaffold's decision and belongs in the batch notes, not in any Statement.

---

## CB-12 (ENRICHED). The Probabilistic Method: the Local Lemma, Thresholds and Derandomization

**Anchor:** `finite-probability-and-the-probabilistic-method` (published,
28 items). `requires`: the published probability pages, CB-29, CB-30, `ramsey-theory`.

The published page carries the method and the local lemma. This pair adds what it
does not reach, and **nothing on the published page is touched**.

Add `thm-erdos-finite-random-graph-ramsey-construction`: for each sufficiently
large $n$ there is an $n$-vertex graph with neither a clique nor an independent
set larger than $2\log_2 n+O(1)$. The proof is the finite $G(n,1/2)$ union-bound
calculation; it cites RA-12 `def-floor-and-ceiling`, finite geometric sums and
the real-analysis power/exponential estimates. PT-1/PT-2 receive an
orientation-only restriction link; this finite theorem remains combinatorics'.

THMS: **the lopsided local lemma** (P3 Thm 6.5.1, Cor. 6.5.2) — replacing mutual
independence by $\Pr[A_i\mid\bigwedge_{j\in S}\neg A_j]\le\Pr[A_i]$ for $S$ not
adjacent to $i$ — **cheap, because the ordinary LLL proof only ever uses that
inequality**, so this is a short strengthening of published content; **nonnegative
dependence for random injections** (P3 Thm 6.5.5) and the **derangement lower
bound** (P3 Cor. 6.5.6); **the LLL Ramsey lower bounds** — the diagonal
improvement $R(k,k)>(\sqrt2/e)(1+o(1))k2^{k/2}$ (P1 Prop. 5.3.1), which P1
themselves call "somewhat disappointing" at a factor of 2, and the off-diagonal
bounds $R(k,3)>c k^2/\log^2k$ and $R(k,4)>k^{5/2+o(1)}$ where the asymmetric LLL
earns its keep (P3 Thm 1.1.9, Spencer 1977) — each **[F] for fixed $n$**, with the
$o(1)$ refinement **[L]**; **second-moment thresholds** for a balanced graph $H$
(P4 Thms 5.3.4–5.3.5, P1 Thm 4.4.1) — **authored as the finite Chebyshev
inequality $\Pr[X=0]\le\operatorname{Var}X/(\mathbb{E}X)^2$, which is valid for
each fixed $n$ with no limit, and the threshold as its corollary**; **the method
of conditional expectations** (P1 §16.1) — the splitting identity
$f^i_{p-1}(\varepsilon_1,\dots,\varepsilon_{p-1})=\frac12[f^i_p(\dots,-1)+f^i_p(\dots,+1)]$
and the pessimistic-estimator inequality, both finite; **$d$-wise independence in
small sample spaces** (P1 Thm 16.2.1, Lemma 16.2.2) — for $n=2^k-1$ and $d=2t+1$
there is a symmetric probability space of size $2(n+1)^t$ carrying $d$-wise
independent fair bits, via the parity-check matrix of a BCH code, **entirely finite
$\mathbb{F}_2$ linear algebra and one of the few places where a small explicit
finite probability space is the object of study rather than an approximation**;
this last item cites CB-14c's coding material and is the seam between the design
block and this one.

**Two denials, and both are about *what kind of object* the statement is.**

- **The Moser–Tardos runtime theorem is OUT OF REACH and must not be written as a
  theorem of finite probability.** P1 say plainly: "A priori, $T_{\mathrm{LOG}}=\infty$
  is possible, but we shall give conditions that imply
  $\mathbb{E}[T_{\mathrm{LOG}}]<\infty$, which in turn implies that the FIX-IT
  Algorithm will terminate with probability 1." An unbounded run of resamplings is
  an infinite sequence of independent choices, and P1 Thm 5.7.1 sums over the
  **infinite** set of Moser trees. **Author only the finite truncation** — for each
  $N$, a bound on $\Pr[\text{not terminated within }N\text{ steps}]$ — with the
  limiting statement as a `rem-`. The existence conclusion of the LLL is already
  published; Moser–Tardos adds algorithmic content, and the algorithmic content is
  what does not fit.
- **The LLL cannot be applied to infinitely many events.** P1 give an explicit
  counterexample, and their Thm 5.2.2 (multicoloured sets of reals) proves the
  finite case by LLL and then extends to $\mathbb{R}$ **by Tychonoff, which P1
  explicitly flag as equivalent to AC**. P3 Lemma 6.2.7 is the same move. **Any
  item in this family names the compactness principle it spends**, and §25.9's
  choice ledger carries the row. This is the same discipline §21 applies to De
  Bruijn–Erdős, and the same failure mode §21.1 caught in §7.

**Shearer's exact bound** (1985) — the characterisation, via the independent-set
polynomial $Q_D(p)=\sum_{I\text{ indep}}(-1)^{\lvert I\rvert}\prod_{i\in I}p_i$,
of which probability vectors admit the LLL conclusion for a fixed dependency
graph, together with the optimality of $e$ in $epd\le1$ — is **[F]** (a finite
algebraic statement about a finite graph) but substantially harder than the LLL.
Disposition: **scaffold the "$e$ is optimal" half; state Shearer's
characterisation as a source-cited `rem-`.**

FS: the LLL applies to infinitely many events (P1's counterexample is the
witness); the lopsided LLL needs mutual independence; the second-moment method
gives $\Pr[X>0]\to1$ from $\mathbb{E}X\to\infty$ alone (the variance condition is
the content).

Provenance: Statements `literature-derived` (P1, P3, quoted). Proofs
`literature-derived`.

---

## CB-11 (ENRICHED). Ramsey Theory II: Multicolour, Hypergraph, and the Modern Bounds

**Anchor:** `ramsey-theory-examples` (published).
`requires`: `ramsey-theory`, CB-12, CB-24, `finite-probability-and-the-probabilistic-method`.

The published page is strong — 21 items including finite and infinite Ramsey,
canonical Ramsey for pairs, van der Waerden, Schur, König's infinity lemma, and
the counting lower bound. **§21.1 already corrected §7's two wrong choice rows
against it.** This pair adds the multicolour and hypergraph extensions, the
explicit constructions, and the modern records.

THMS: **multicolour Ramsey numbers** $R(k_1,\dots,k_c)$ (convention 22) with the
recursion and the exponential lower bound (P2 Prop. 0.1.12); the **multicolour
triangle Ramsey theorem** (P2 Thm 0.1.4); **hypergraph Ramsey** beyond the
published `thm-finite-ramsey-for-uniform-subsets`, in the GRS arrow notation
(convention 21); the **power-form finite Ramsey corollary**: for every fixed
$t$ there is an explicit exponent $c_t>0$ such that every $K_t$-free graph on
$n$ vertices has an independent set of size at least $n^{c_t}$, with floors
and exponential estimates cited from real analysis; **the Erdős–Szekeres happy-ending theorem** and the
$\binom{2n}{n}$-type bounds; **the Frankl–Wilson explicit Ramsey graph**, cited
from CB-24 — **the constructive counterpart to the published probabilistic lower
bound `thm-diagonal-ramsey-counting-lower-bound`, and the reason CB-24 is worth
its cost**; **Hindman's theorem**, in ZF.

**Hindman's theorem is the page's choice-strength centrepiece, and the harvest's
answer corrects a widespread belief.** The statement: for every finite colouring
of $\mathbb{N}$ there is an infinite $D\subseteq\mathbb{N}$ with all finite sums
of distinct elements of $D$ the same colour. Three standard proofs have
strikingly different logical strength, and Blass–Hirst–Simpson's
reverse-mathematics analysis is the reference: Hindman's original combinatorial
proof formalises in $\mathrm{ACA}_0^{+}$; Baumgartner's streamlined proof in
$\Pi^1_2\text{-}\mathrm{TI}_0$; the Galvin–Glazer ultrafilter proof needs more
still, because idempotent ultrafilters in $\beta\mathbb{N}$ come from Ellis's
lemma, i.e. Zorn applied to closed subsemigroups. **So Hindman's theorem does not
need full AC and does not even need BPI: it is a ZF theorem.** What needs AC is
only the *ultrafilter proof*. **A library item must therefore not state "Hindman's
theorem requires AC"** — it must state the theorem in ZF, cite the combinatorial
proof, and record Galvin–Glazer as a `rem-` with its choice cost named. This is
exactly the statement/proof provenance split SCHEMA already supports, and it is
the cleanest illustration of it anywhere in this scaffold. Sources:
Blass–Hirst–Simpson; Hirst, *Hindman's Theorem, ultrafilters, and reverse
mathematics*; Towsner, `arXiv:0906.3885`.

**The modern records, as `rem-` items with `proved_here: false` and exact
sources.** Shearer's 1983 bound giving $R(3,k)\le(1+o(1))k^2/\log k$ and Kim's
1995 matching lower bound; **Campos, Jenssen, Michelen & Sahasrabudhe 2025**
(`arXiv:2505.13371`), $R(3,k)\ge(\tfrac13+o(1))k^2/\log k$, **disproving a
conjecture of Fiz Pontiveros, Griffiths and Morris** that $\tfrac14$ was sharp;
**Campos, Griffiths, Morris & Sahasrabudhe** (`arXiv:2303.09521`), the first
exponential improvement on Erdős–Szekeres, $R(k)\le(4-\varepsilon)^k$ with the
announced explicit $3.993^k$, and the follow-up `arXiv:2407.19026` reporting
$R(k,k)\le3.8^{k+o(k)}$. These are recorded because a library page on Ramsey
theory that quietly implies $4^k$ is the state of the art is misleading a reader,
and because a `rem-` is exactly the right vehicle.

**The choice audit for the extensions, from the harvest, item by item:** finite
Ramsey in all uniformities and colour counts is **ZF**; infinite Ramsey for
$k$-tuples on $\mathbb{N}$ with finitely many colours is **ZF** and is published —
**but a scaffolder must make the definability of the nested-set recursion explicit,
because the "obvious" proof that picks an arbitrary element at each stage is a DC
argument in disguise**; infinite Ramsey on an *arbitrary* infinite set needs more
than ZF and is **not** scaffolded without the extra hypothesis stated; König's
lemma for **arbitrary** branching is DC and must never be conflated with the
published finitely-branching ZF version; compactness/Rado transfer from infinite
to finite is **BPI**, which the library has; Hales–Jewett, van der Waerden,
Gallai, Rado, Deuber and Folkman in their finite versions are all **ZF**.

FS: the infinite Ramsey theorem holds for infinitely many colours; $R(3,3,3)$ is
known to equal $17$ **and** the general multicolour values are computable (the
first is true, the second is not — so this `fs-` must be phrased about the second
alone); König's lemma holds for arbitrarily branching trees in ZF.

Provenance: Statements `literature-derived`. The reverse-mathematics facts about
Hindman are `literature-derived` from Blass–Hirst–Simpson and belong in a `rem-`,
never inside a mathematical Statement.

---

## CB-31 (NEW). Quasirandomness, Paley Graphs and Quadratic-Residue Tournaments

**Anchor:** immediately after GT-21's examples page (§24), since it needs the
expander mixing lemma. `requires`: GT-21, GT-7a, GT-7b, CB-14b,
`the-complex-exponential-and-eulers-formula`,
`congruences-and-the-chinese-remainder-theorem`, `finite-probability-and-the-probabilistic-method`.

DEFS: an **$(n,d,\lambda)$-graph** (convention 28); a **quasirandom** graph
sequence; cite RT-3's finite-abelian-character definition and orthogonality
relations; the **Paley graph** and the **Paley tournament**; property $S_k$ for a
tournament, citing the published item.

THMS: **the expander mixing lemma is cited from GT-21, not restated**; its
**converse** (P2 Thm 3.2.12); **Chung–Graham–Wilson** (landmark; P1 Thms 9.3.1,
9.3.2; P2 Thm 3.1.1, Def. 3.1.2) — the equivalence of the discrepancy,
$4$-cycle-count, eigenvalue-separation, subgraph-count and codegree properties;
**abelian Cayley graph eigenvalues as character sums** (P2 Thm 3.3.8), with
**Paley graphs** (P2 Def. 3.3.5) and the **Gauss sum** evaluation (P2 Thms 3.3.12,
3.3.14); **the quadratic-residue tournament has property $S_k$ for
$k=O(\log p)$** (P1 §9.1, Thm 9.1.1, Lemma 9.1.2) — **the explicit construction
matching the library's already-published probabilistic existence proof of
property $S_k$, which makes this one of the most attractive pairings in the whole
enrichment**.

**Chung–Graham–Wilson is authored in the quantitative single-graph form, not the
classical asymptotic one, and the reason is a finiteness fact.** P1 are explicit
that "the notions below apply to a sequence of graphs $G=G_n$ … for which the
number of vertices $n$ is going to infinity", so the seven-way equivalence as
classically stated is **[L]**. P2 §3.1 states the same properties in
$\varepsilon$-quantified single-graph form, each of which is **[F]**. **Author
P2's quantitative implications as the theorems and record the asymptotic
equivalence as the organising corollary** — which is why P2 is the better primary
source here.

**The character theory seam is settled by R-3.** The characters of a finite
abelian group and their orthogonality are needed here, by CB-27, and by CB-14c's
MacWilliams identity. SEAMS §4 gives `abstract-algebra` "representation theory of
finite groups: group algebra, Maschke, characters, induced representations". For
an *abelian* group the character is a homomorphism to $\mathbb{C}^\times$ and the
orthogonality is a five-step consequence of the published
`cor-sum-of-roots-of-unity` and `thm-complex-nth-roots-and-roots-of-unity`, with
no representation theory at all (§19.2 F5). Abstract algebra RT-3 nevertheless
owns and mints `def-character-of-a-finite-abelian-group` and its orthogonality
theorem. CB-31, CB-27 and CB-14c cite those exact ids and do not mint them.

FS: every $d$-regular graph with small $\lambda$ is quasirandom in the vertex-set
sense too; the Chung–Graham–Wilson properties are equivalent for sparse graphs
(they are stated for $d=(\tfrac12+o(1))n$, and the hypothesis is load-bearing);
the Paley graph on $p$ vertices is quasirandom for every prime $p$ including
$p\equiv3\pmod4$ (the construction needs $p\equiv1\pmod4$ for the graph to be
undirected — and this is the page's sharpest `fs-`).

Provenance: Statements `literature-derived` (P1, P2, quoted).

---

## CB-27 (NEW). Finite Fourier Analysis and Roth's Theorem

**Anchor:** immediately after CB-31's examples page.
`requires`: CB-31, `the-complex-exponential-and-eulers-formula`,
`congruences-and-the-chinese-remainder-theorem`,
`algebraic-extensions-degree-and-finite-fields`,
`vector-spaces-and-linear-independence`, `finite-counting-and-binomial-coefficients`.

**§19.2 F5 called this the most consequential availability finding in the
enrichment, and the harvest confirms it independently:** the Fourier proof of
Roth's theorem in the finite-field model needs **only finite Fourier analysis on
a finite abelian group and nothing else** — no measure theory, no infinite groups,
no analysis beyond finite sums.

DEFS: cite RT-3 `def-character-of-a-finite-abelian-group`; define only the dual
group notation used on this page and
$\hat f(r)=\mathbb{E}_{x\in\mathbb{F}_p^n}f(x)\omega^{-r\cdot x}=p^{-n}\sum_xf(x)\omega^{-r\cdot x}$
with $\omega$ a fixed primitive $p$-th root of unity (#108 — **the choice of
$\omega$ is fixed once**, citing `thm-complex-nth-roots-and-roots-of-unity`);
**convolution**; the **3-AP density** $\Lambda_3(f)$; a **density increment**;
a **Bohr set**.

THMS: cite RT-3's **character orthogonality** theorem (#108); **Fourier inversion**
$f(x)=\sum_r\hat f(r)\omega^{r\cdot x}$ (P2 Thm 6.1.2); **Parseval/Plancherel**
(P2 Thm 6.1.3); **the convolution identity** (P2 Def. 6.1.5, Thm 6.1.7);
**the 3-AP density identity** $\Lambda_3(f)=\sum_r\hat f(r)^2\hat f(-2r)$ (P2
Prop. 6.1.9); the **3-AP counting lemma** (P2 Lemma 6.2.4); **3-AP-free implies a
large Fourier coefficient** (P2 Lemma 6.2.6); **a large Fourier coefficient implies
a density increment** (P2 Lemma 6.2.7); **3-AP-free implies a density increment**
(P2 Lemma 6.2.8); **Roth's theorem in the finite-field model / Meshulam's bound**
(landmark; P2 Thm 6.2.1: every 3-AP-free subset of $\mathbb{F}_3^n$ has size
$O(3^n/n)$), by iterating the density increment down a descending chain of
subspaces with $\alpha_{i+1}\ge\alpha_i+\alpha_i^2/4$, giving $O(1/\alpha)$ rounds
and hence $\alpha=O(1/n)$; **Roth's theorem in $\mathbb{Z}/N\mathbb{Z}$**
(P2 §§6.3–6.4, Thm 6.4.1), the same architecture transported, plus **Dirichlet's
lemma** (P2 Lemma 6.4.4) and the **partition into progression level sets**
(P2 Lemma 6.4.5); **Behrend's construction** (landmark; P2 Thm 2.5.1) — a
3-AP-free subset of $[N]$ of size $N e^{-O(\sqrt{\log N})}$, by taking points of
$[n]^d$ on a sphere $\sum x_i^2=r$ chosen by pigeonhole and mapping them to
integers by base-$2n$ digits, **with the strict convexity of the Euclidean sphere
doing the work** — ~6 steps, and the matching lower bound that shows Roth's bound
cannot be improved past a certain point; **Bogolyubov's lemma** in
$\mathbb{F}_p^n$ (P2 Thm 7.8.3).

**GT-19's Roth is a genuinely different proof of a genuinely different statement,
and an agreement `rem-` is REQUIRED.** GT-19 proves $r_3(n)/n\to0$ over $[n]$ by
triangle removal; this page proves the finite-field bound $O(3^n/n)$ by Fourier,
and the $\mathbb{Z}/N\mathbb{Z}$ version separately. The library must not end up
holding three unrelated Roth theorems. **The `rem-` states which is which, which
implies which, and that the regularity route gives no explicit bound while the
Fourier route does.**

FS: the Fourier transform is independent of the choice of $\omega$ (it is not —
#108, and different primitive roots give different transforms, though the
theorems are invariant); Roth's bound $O(3^n/n)$ is best possible (Behrend and,
in the finite-field model, CB-28's $O(2.756^n)$ both bear on this, and the `fs-`
must say which); Parseval holds without normalisation.

B: the characters of $\mathbb{Z}/5\mathbb{Z}$ written out and orthogonality
checked; $\hat f$ computed for an explicit $f$ on $\mathbb{F}_3^2$; the 3-AP
density identity verified on a small set; Behrend's construction run for small
parameters.

Provenance: Statements `literature-derived` (P2, quoted). Proofs
`literature-derived`.

---

## CB-28 (NEW). The Polynomial Method II: Slice Rank and the Cap Set Problem

**Anchor:** immediately after CB-27's examples page.
`requires`: CB-27, CB-23, `algebraic-extensions-degree-and-finite-fields`,
`polynomial-rings-and-roots`, `vector-spaces-and-linear-independence`,
`gaussian-elimination-and-row-reduction`, `finite-counting-and-binomial-coefficients`.

**The cheapest famous theorem in the whole harvest: no probability, no analysis,
everything inside a finite-dimensional polynomial ring, about thirteen numbered
steps.** §23's algebraic harvest had rated the cap-set bound **[C]** on the
strength of the monomial-counting estimate; P2 §6.5 supplies that count as its own
lemma (Thm 6.5.7), so the rating is **corrected to [B]** and the result is
scaffolded in full rather than as a framework plus a source-cited constant.

DEFS: the **slice rank** of $F:A^3\to\mathbb{F}$ (#109) — slice rank one means
$F=f(x)g(y,z)$ or $f(y)g(x,z)$ or $f(z)g(x,y)$, and the slice rank is the least
$k$ with $F$ a sum of $k$ such; the ring $\mathbb{F}_3[x_1,\dots,x_n]/(x_i^3-x_i)$
as a **finite-dimensional** vector space; a **cap set**.

THMS: **the trivial upper bound** $\operatorname{sr}(F)\le\lvert A\rvert$ (P2
Lemma 6.5.3) — four lines, by restricting to slices $\delta_a(x)F(a,y,z)$ and
summing; **a $k$-dimensional subspace of an $n$-dimensional space over any field
contains a point with at least $k$ nonzero coordinates** (P2 Lemma 6.5.4) — four
lines, because a $k\times n$ matrix of rank $k$ has an invertible $k\times k$
submatrix; **the slice rank of a diagonal is exactly its support size** (landmark;
P2 Lemma 6.5.5) — if $F(x,y,z)\ne0$ iff $x=y=z$ then
$\operatorname{sr}(F)=\lvert A\rvert$; **the Croot–Lev–Pach lemma** (landmark;
P2 Lemma 6.5.6) — an upper bound on the slice rank of $\mathbf 1_{x+y+z=0}$, by
expanding $\prod_i(1-(x_i+y_i+z_i)^2)$ and splitting monomials by degree;
**the trinomial coefficient estimate** (P2 Lemma 6.5.7); **Ellenberg–Gijswijt /
the cap set theorem** (landmark; P2 Thm 6.5.9) — every 3-AP-free subset of
$\mathbb{F}_3^n$ has size $O(2.756^n)$, a power saving over CB-27's $O(3^n/n)$.

**P2's own caveat is required as a `rem-`:** "the polynomial method proof appears
to be specific to the finite field model, and it is not known how to extend the
strategy to the integers." Without it a reader will assume the technique transfers
and that Roth in $\mathbb{Z}$ has a power-saving bound.

FS: the slice rank equals the tensor rank (they differ, and the difference is the
whole reason slice rank was invented); the cap-set bound transfers to
$\mathbb{Z}/N\mathbb{Z}$; a diagonal tensor has slice rank $1$.

B: the slice rank of a small explicit diagonal computed; the CLP expansion carried
out for $n=1$; a maximal cap in $\mathbb{F}_3^2$ (size $4$) and in
$\mathbb{F}_3^3$ (size $9$) exhibited and compared with the bound.

Provenance: Statements `literature-derived` (P2, quoted). Proofs
`literature-derived`.

---

## CB-32 (NEW). Sumset Calculus: Ruzsa, Plünnecke and Freiman

**Anchor:** immediately after CB-28's examples page.
`requires`: CB-27, `finite-counting-and-binomial-coefficients`,
`cyclic-groups-and-orders`, `inclusion-exclusion-and-the-pigeonhole-principle`.

DEFS: sumsets $A+B$, difference sets $A-B$, iterated sumsets $mB-nB$; the
**doubling constant**; **additive energy** $E(A,B)=\#\{(a_1,a_2,b_1,b_2):a_1+b_1=a_2+b_2\}$
as an **unnormalised count** (convention 23); a **generalised arithmetic
progression** and its **rank**; a **Freiman homomorphism**.

THMS: **the Ruzsa triangle inequality**
$\lvert A\rvert\cdot\lvert B-C\rvert\le\lvert A-B\rvert\cdot\lvert A-C\rvert$
(landmark; P2 Thm 7.2.1, P5 Lemma 6.1) — an injection argument on finite sets, 3–4
steps, and the outstanding first item of the page; **the Ruzsa covering lemma**
(P2 Thm 7.4.1, P5 Lemma 6.2) — $\lvert A+B\rvert\le K\lvert B\rvert$ implies
$A\subseteq X+B-B$ for some $X$ with $\lvert X\rvert\le K$, by a greedy maximal
disjoint family, 3 steps; **the Plünnecke–Ruzsa inequality** (landmark; P2
Thms 7.3.1, 7.3.3) — $\lvert A+B\rvert\le K\lvert A\rvert$ implies
$\lvert mB-nB\rvert\le K^{m+n}\lvert A\rvert$ — **by Petridis's proof, a purely
finite combinatorial induction choosing $X\subseteq A$ minimising
$\lvert X+B\rvert/\lvert X\rvert$**, ~8 steps and needing no graph-theoretic
magnification at all; the corollary
$\lvert A\mp B\rvert\le\lvert A\pm B\rvert^3/(\lvert A\rvert\lvert B\rvert)$;
**small doubling implies large additive energy** (P2 Prop. 7.13.4);
**Freiman's theorem in a group of bounded exponent** (landmark; P2 Thms 7.5.1,
7.5.4) — $\lvert A+A\rvert\le K\lvert A\rvert$ in a group of exponent $r$ implies
$A$ lies in a subgroup of size $\le C(K,r)\lvert A\rvert$ — **provable from the
covering lemma and Plünnecke alone**.

**Full Freiman's theorem in $\mathbb{Z}$ is now included after A7.** P2 §7.9 is titled "Geometry of
Numbers" and contains Def. 7.9.1 (lattice), Def. 7.9.2 (successive minima),
Thm 7.9.4 (**Minkowski's second theorem**), Thm 7.9.6 (Blichfeldt), Thm 7.9.7
(Minkowski's first theorem); §7.10 then finds a GAP inside a Bohr set, and §7.11
assembles the theorem, together with Bogolyubov's lemma, Freiman homomorphisms and
the Ruzsa modeling lemma. Number theory NT-22 supplies successive minima and
Minkowski's second theorem; its existing geometry-of-numbers material supplies
the remaining cited inputs. CB-32 mints the additive-combinatorial modeling,
Bohr-set and GAP steps and states the full theorem; it does not reprove the
number-theory suppliers.
**Balog–Szemerédi–Gowers** is **[F]** but long (the proof is finite graph theory,
P2 Thms 7.13.6–7.13.11) — `deferred` unless a step-2 Beta finds room, with P5
Lemma 6.11's entropic route as the recorded alternative. **Polynomial
Freiman–Ruzsa** — statements only, with the note that the $\mathbb{F}_2^n$ case is
now the Gowers–Green–Manners–Tao theorem (P5 Thm 7.1), proved by **entropy** and
therefore finite but long.

FS: the Ruzsa triangle inequality holds with sumsets in place of difference sets
(it does not, and the asymmetry is exactly what makes it useful); Plünnecke's
inequality is symmetric in $A$ and $B$; small doubling implies $A$ is close to a
subgroup in $\mathbb{Z}$ (it implies a GAP, and the difference is Freiman's
theorem).

Provenance: Statements `literature-derived` (P2, P5, P6). Proofs
`literature-derived`.

---

## CB-33 (NEW). Kneser, Vosper and Erdős–Ginzburg–Ziv

**Anchor:** immediately after CB-32's examples page.
`requires`: CB-32, CB-23 (Cauchy–Davenport by the Combinatorial Nullstellensatz),
`cyclic-groups-and-orders`, `congruences-and-the-chinese-remainder-theorem`,
`algebraic-extensions-degree-and-finite-fields`.

**Cauchy–Davenport is proved on CB-23 and is NOT re-minted here.** What this page
adds is a second proof by a genuinely different method and three theorems that
build on it. The two proofs are the page's best `rem-`: the **$e$-transform**
route (P6 Thm 5.4, ~6 steps) is self-contained and needs only the coset lemma
P6 Prop. 2.2; the **Nullstellensatz** route (P6 §§9.1–9.2) is heavier but is the
only one that reaches Erdős–Heilbronn — **P6 say so explicitly on p. 334**, and
that is why the extra machinery is worth carrying.

DEFS: the **$e$-transform** $A^{(e)}=A\cup(B+e)$, $B^{(e)}=B\cap(A-e)$; the
**stabiliser** $\operatorname{Sym}_1(A)=\{h:A+h=A\}$ (P6 Def. 2.32); the
**restricted sumset** $A\oplus B$.

THMS: **Cauchy–Davenport by the $e$-transform** (a second proof, with the
agreement `rem-` against CB-23); **Erdős–Heilbronn** (P6 Thm 9.5:
$\lvert A\oplus B\rvert\ge\min(\lvert A\rvert+\lvert B\rvert-3,p)$), citing
CB-23's Nullstellensatz; **Erdős–Ginzburg–Ziv** (landmark; P6 Thm 9.28) — any
$2\lvert Z\rvert-1$ elements of a finite abelian group $Z$ contain
$\lvert Z\rvert$ of them summing to $0$ — in eight numbered steps: the prime case
orders $a_1\le\dots\le a_{2p-1}$, uses $a_i=a_{i+p-1}$ to get $p$ equal terms
summing to $0$, and otherwise applies iterated Cauchy–Davenport to
$A_i=\{a_i,a_{i+p-1}\}$ to get $\lvert A_1+\dots+A_{p-1}\rvert\ge\min(p,2(p-1)-(p-2))=p$;
the induction $n=pm$ greedily extracts $2m-1$ disjoint $p$-element subsets with
sums $\equiv0$ and applies the hypothesis in $\mathbb{Z}/m$ — **with sharpness
recorded**, since $2\lvert Z\rvert-2$ elements do not suffice ($\lvert Z\rvert-1$
copies each of $0$ and $1$); Chevalley–Warning from CB-23 gives an alternative
route and the page records it; **Kneser's theorem** (P6 Thm 5.5) — for finite
nonempty $A,B$ in **any** abelian group,
$\lvert A+B\rvert\ge\lvert A+\operatorname{Sym}_1(A+B)\rvert+\lvert B+\operatorname{Sym}_1(A+B)\rvert-\lvert\operatorname{Sym}_1(A+B)\rvert\ge\lvert A\rvert+\lvert B\rvert-\lvert\operatorname{Sym}_1(A+B)\rvert$
— **no primality and no finiteness assumption on the ambient group**, with
Cauchy–Davenport as the $\mathbb{Z}/p$ case; **Vosper's theorem** (P6 Thm 5.9) —
for $p$ prime, $A,B\subseteq\mathbb{Z}/p$ with $\lvert A\rvert,\lvert B\rvert\ge2$
and $\lvert A+B\rvert\le p-2$, equality $\lvert A+B\rvert=\lvert A\rvert+\lvert B\rvert-1$
holds **iff** $A$ and $B$ are arithmetic progressions with the same step.

**Two warnings the harvest flagged as false-statement risks.** Kneser's proof is a
**triple induction** — upward on $\lvert A+B\rvert$, downward on
$\lvert A\rvert+\lvert B\rvert$ for fixed $\lvert A+B\rvert$, upward on
$\lvert B\rvert$ — which P6 themselves call "surprisingly delicate"; scaffold it
only with that warning attached and with the three inductions as separate numbered
structure. And **both of Vosper's side conditions are necessary**: singletons and
near-full sumsets are genuine exceptions, and **a scaffolder dropping either would
author a false statement.** Both belong in the Statement and both need a `cex-`.

FS: Vosper's characterisation holds without the hypothesis $\lvert A\rvert,\lvert B\rvert\ge2$;
Cauchy–Davenport holds in $\mathbb{Z}/n$ for composite $n$ (the witness is a
proper subgroup — the same witness CB-23 uses, so **one of the two pages states it
and the other cites**); Erdős–Ginzburg–Ziv holds with $2\lvert Z\rvert-2$
elements.

Provenance: Statements `literature-derived` (P6, quoted). Proofs
`literature-derived`.

---

## CB-34 (NEW, placed high). Incidences, the Crossing Lemma and the Sum–Product Problem

**Anchor:** immediately after GT-23's examples page (§24), because the crossing
lemma needs Euler's formula and the published planar edge bound, both of which
sit above the combinatorics band.
`requires`: GT-23, CB-32, `plane-graphs-euler-and-the-five-colour-theorem`,
`finite-probability-and-the-probabilistic-method`.

THMS: **the crossing lemma is cited from GT-23**; **the Szemerédi–Trotter
incidence theorem** (P2 Thm 8.2.5, P3 Thm 2.6.2) — $m$ points and $n$ lines in
the plane determine $O(m^{2/3}n^{2/3}+m+n)$ incidences — from the crossing lemma
in ~8 steps; **Elekes' sum–product bound** (P2 Thm 8.2.1)
$\max(\lvert A+A\rvert,\lvert A\cdot A\rvert)\ge c\lvert A\rvert^{5/4}$ from
Szemerédi–Trotter; **Solymosi's bound** (P2 Thm 8.3.1) if the pair has room.

**The Erdős–Szemerédi conjecture and the current record, as a sourced `rem-`.**
Writing $\max(\lvert A+A\rvert,\lvert AA\rvert)\ge\lvert A\rvert^{1+c-o(1)}$ over
$\mathbb{R}$: Erdős–Szemerédi 1983 (non-explicit $c>0$) → Elekes 1997 ($c=1/4$) →
Solymosi 2009 ($1/3$) → Konyagin–Shkredov → Shakan 2019 → **Rudnev–Stevens 2022,
$c=1/3+2/1167\approx0.33504$ (`arXiv:2005.11145`) — the safe citable state of the
art** → Bloom 2025, $c=1/3+2/951\approx0.33543$. **A December 2025 preprint
(`arXiv:2512.13849`) claiming $c\approx0.33560$ is provisional and not yet
refereed; it must not be cited as established.** Over $\mathbb{F}_p$ the record is
$1/4$ (Mohammadi–Stevens 2023), and Garaev's obstruction means some size
restriction there is unavoidable. Source for the history:
`http://thomasbloom.org/notes/sumproduct.html` — **note the host's TLS certificate
is currently broken and the page had to be retrieved with `curl --insecure`**, so
a step-2 Beta must find a citable mirror before this URL goes in
`sources.references`.

FS: Szemerédi–Trotter holds for circles in place of lines with the same exponents;
the sum–product conjecture is proved; Elekes' bound is tight.

Provenance: Statements `literature-derived` (P2, P3); the record table is
`literature-derived` and belongs in a `rem-`.

## 25.9 Well-definedness and choice rows added by this block

| # | page | the definition | what must be proved first |
|---|---|---|---|
| 129 | CB-25 | $H(X)$ | **#106 restated and kept**: $0\log0=0$ is a convention and is labelled one; base 2 is fixed in the definition (convention 26); the sum is finite and needs `def-natural-logarithm` or its base-2 companion |
| 130 | CB-29 | $\Delta=\sum_{i\sim j}\Pr[B_i\wedge B_j]$ | P1 sums over **ordered** pairs; a page that sums over unordered pairs halves $\Delta$ and breaks every constant on the page. State the convention at the definition |
| 131 | CB-30 | the edge-exposure martingale | $X_i(H)=\mathbb{E}[f(G)\mid e_j\in G\iff e_j\in H,\ 1\le j\le i]$ is a conditional expectation over a **finite partition of a finite set**, i.e. a weighted finite average; that it *is* a martingale is a finite identity and is a numbered item, not a definitional stipulation |
| 132 | CB-26 | $\operatorname{disc}(\mathcal{F})$ | **#107 restated and kept**: a minimum over the finite set of $\pm1$ colourings of a maximum over a finite family; both attained, and the quantifier order **is** the definition |
| 133 | CB-27 | $\hat f$ | **#108 restated and kept**: $\omega$ is fixed once; orthogonality is proved from `cor-sum-of-roots-of-unity`, not assumed |
| 134 | CB-28 | slice rank | **#109 restated and kept**: the set of representations is nonempty (the trivial one has $\lvert A\rvert$ terms), so a least $k$ exists by `thm-well-ordering-principle` |
| 135 | CB-32 | additive energy | an unnormalised **integer** count (convention 23); the normalised version is a different quantity and must not appear in the same inequality |
| 136 | CB-33 | $\operatorname{Sym}_1(A+B)$ | it is a **subgroup** — a numbered lemma — and Kneser's statement is about that subgroup's order, so the lemma precedes the theorem |

**Choice ledger rows.** Everything on CB-25, CB-26, CB-27, CB-28, CB-29, CB-30,
CB-31, CB-32, CB-33 and CB-34 is finite and costs **nothing**. Three rows are
exceptions and each names its principle in the Statement:

| result | page | cost | note |
|---|---|---|---|
| **Hindman's theorem** | CB-11 | **ZF** | via Hindman's or Towsner's combinatorial proof, which formalises in $\mathrm{ACA}_0^{+}$. The Galvin–Glazer ultrafilter proof spends **AC** (Zorn on closed subsemigroups of $\beta\mathbb{N}$) and is recorded as a `rem-`; **the theorem is not an AC theorem and the page must not say it is** |
| upgrading a finite LLL colouring statement to all of $\mathbb{R}$ | CB-12 | **AC**, via Tychonoff | P1 flag the equivalence themselves. The finite statement is choice-free; only the upgrade is not, and the two must be separate items |
| compactness / Rado transfer from an infinite Ramsey theorem to its finite form | CB-11 | **BPI** | the published `thm-ultrafilter-lemma` supplies it |

---

# 26. The canonical-coverage harvest

`CLAUDE.md` §"Source depth and the canonical-coverage harvest" requires three
things of a scaffold: (a) **two independent treatments per pair**, at least one a
textbook, monograph or full lecture-note set with a harvestable table of contents;
(b) for every source, **the exact chapter/section range read** and **that source's
own section and named-result headings** over that range, verbatim; (c) **an
explicit disposition for every harvested heading** — `included` (naming the item
id), `inline` (naming the absorbing item), `already-published` (naming the
published item), `deferred` or `out-of-scope`, the last two with a written reason
about *that specific result*.

**How this section discharges (b) and (c).** The verbatim heading enumerations are
long — they run to several thousand headings across seven harvests — and they live
in the harvest files, which are committed research artifacts, not scratch:

| harvest file | verbatim headings in |
|---|---|
| `research/subjects-01-combinatorics-harvest-enumerative.md` | §B1–§B9 |
| `research/subjects-01-combinatorics-harvest-graphtheory.md` | §B.0–§B.4.5 |
| `research/subjects-01-combinatorics-harvest-algebraic.md` | §B.1–§B.8 |
| `research/subjects-01-combinatorics-harvest-probabilistic.md` | §B |
| `research/subjects-01-combinatorics-harvest-matroids.md` | §B.1–§B.3, with its own per-heading disposition table already at §B.4 |
| `research/subjects-01-combinatorics-harvest-tutte.md` | §B |
| `research/subjects-01-combinatorics-harvest-gapfill.md` | §B |

**§26.2 supplies the dispositions**, which is the part the harvests do not already
carry (the matroid harvest is the exception and its §B.4 is adopted wholesale).
Dispositions are given at **the source's own section granularity** where the
source's TOC is section-level, and at **chapter granularity** where only chapters
were obtainable; the granularity is stated per source, and a chapter-level
disposition is a statement about **every** heading under that chapter, which is
what makes it a disposition rather than a summary. Where a chapter splits, the
split is written out.

**This is a prose scaffold, not a build.** No `.coverage.json` is produced by this
commission — that artifact belongs to step 2 of a future level build, and
`tools/coverage-checklist.mjs` gates it there. §26 is its input.

## 26.1 Source ledger

**Primary backing** — full text obtained, machine-readable, with a harvestable TOC.
Every pair in §§22–25 is backed by at least two of these.

| key | source | working URL | form | range read |
|---|---|---|---|---|
| S1 | Stanley, *Enumerative Combinatorics* vol. 1, 2nd ed. | `https://math.mit.edu/~rstan/ec/ec1.pdf` | full text | whole book |
| S2 | Flajolet & Sedgewick, *Analytic Combinatorics* | `https://ac.cs.princeton.edu/home/AC.pdf` | full text | Part A in detail; Parts B–C for the boundary |
| S3 | Sagan, *Combinatorics: The Art of Counting* | author-hosted | full text | whole book |
| S4 | Wilf, *generatingfunctionology*, 2nd ed. | author-hosted | full text | whole book |
| S5 | Cameron, *Enumerative Combinatorics* (LTCC) | author-hosted | full text | whole notes |
| S6 | Postnikov / Dillon, *A Survey of Enumerative Combinatorics* | author-hosted | full text | whole notes |
| S7 | de Mier, Oxford *Enumerative Combinatorics* notes | author-hosted | full text | whole notes |
| S8 | Grinberg, *Enumerative Combinatorics: class notes* | author-hosted | full text | whole notes |
| A1 | Brouwer & Haemers, *Spectra of Graphs* | `https://www.win.tue.nl/~aeb/2WF02/spectra.pdf` | full text, toc+named | whole book, ch. 1–15; 238 named results extracted |
| A2 | Spielman, *Spectral and Algebraic Graph Theory* | `http://cs-www.cs.yale.edu/homes/spielman/sagt/sagt.pdf` | full text, 376-entry outline | whole book; §2, §4.5, §§20–21 in detail |
| A3 | Stanley, *Topics in Algebraic Combinatorics* | `https://math.mit.edu/~rstan/algcomb/algcomb.pdf` | full text, toc+named | whole book, ch. 1–12 + appendices; ch. 3, 9, 12 in detail |
| A4 | Babai & Frankl, *Linear Algebra Methods in Combinatorics*, v2.2.1 (Nov 2024) | `https://people.cs.uchicago.edu/~laci/babai-frankl-book2024.pdf` | full text, toc+named | whole book, ch. 1–10 + answers |
| A5 | Godsil, *Association Schemes* | `https://www.math.uwaterloo.ca/~cgodsil/pdfs/assoc2.pdf` | full text, 143-entry outline | whole notes |
| A6 | Godsil, *Finite Geometry* | `https://www.math.uwaterloo.ca/~cgodsil/pdfs/fgeom.pdf` | full text | §1.1–§7.5 |
| A7 | Godsil, *Tools from Linear Algebra* | `https://www.math.uwaterloo.ca/~cgodsil/pdfs/tools.pdf` | full text | §1–§7 |
| A8 | Alon, "Combinatorial Nullstellensatz", *CPC* **8** (1999) | `https://www.tau.ac.il/~nogaa/PDFS/null2.pdf` | full text | §§1–2 verbatim; §§3–10 headings |
| A9 | Forbes, "The Bruck–Ryser theorem for projective planes" | `https://www.theoremoftheday.org/MathsStudyGroup/ADF-Bruck%20Ryser.pdf` | full text | whole note |
| G1 | Diestel, *Graph Theory*, 5th ed. | `https://diestel-graph-theory.com/` | full text, toc+named+margin apparatus | all 12 chapters + appendices |
| G2/P2 | Zhao, *Graph Theory and Additive Combinatorics* | `https://yufeizhao.com/gtacbook/gtacbook.pdf` | full text | whole book, ch. 0–9 |
| G3 | Schrijver, *A Course in Combinatorial Optimization* | `https://homepages.cwi.nl/~lex/files/dict.pdf` | full text | whole; ch. 10 in detail |
| G3′ | Schrijver, "A Pythagoras proof of Szemerédi's regularity lemma" | `https://homepages.cwi.nl/~lex/files/szem_pf3.pdf` | full text | whole (2 pp.) |
| G4 | Cambridge Part II Graph Theory — Leader (2007) **and** Thomason (2005) | author/department-hosted | full text, two independent sets | whole |
| G5 | Harju, *Lecture Notes on Graph Theory* | author-hosted | full text | whole |
| G6 | Keller & Trotter, *Applied Combinatorics* (2017) | author-hosted | full text | graph-relevant chapters |
| P1 | Alon & Spencer, *The Probabilistic Method* | — | full text | whole; ch. 5–9, 13, 15–16 in detail |
| P3 | Zhao, *Probabilistic Methods in Combinatorics* | `https://yufeizhao.com/pm/probmethod_notes.pdf` | full text | whole |
| P4 | Matoušek & Vondrák, *The Probabilistic Method* | author-hosted | full text | whole |
| P5 | Gowers, *Entropy Methods in Combinatorics* (Part III) | `https://danielnaylor.uk/notes/III/Lent/EMC/EMC.pdf` | full text | whole course |
| P6 | Tao & Vu, *Additive Combinatorics* | — | full text | ch. 2, 5, 9 in detail |
| M1 | Oxley, *What is a matroid?* | `https://www.math.lsu.edu/~oxley/survey4.pdf` | full text | §1–§7 |
| M2 | Schrijver, *A Course in Combinatorial Optimization*, ch. 10 | as G3 | full text | pp. 173–198 |
| M3 | Reiner, *Lectures on Matroids and Oriented Matroids* | author-hosted | full text | §1–§5 |
| M4 | Ellis-Monaghan & Merino, *The Tutte Polynomial* | `arXiv:0803.3079` | full text | §1–§9; Props. 1–3, Thms 1–33, Cors. 1–5 enumerated |
| M5 | Waterloo CO 446 (90 pp.) **and** KAIST MAS480A / Sang-il Oum (88 pp.) | course-hosted | full text, two independent sets | whole |
| T1 | Goodall, *The Tutte polynomial and related polynomials* (Charles Univ.), 134 pp. | course-hosted | full text, full TOC | whole |
| T2 | Beck & Sanyal, *Combinatorial Reciprocity Theorems*, 317 pp. | author-hosted | full text | ch. 1 (colourings and flows) |
| T4 | Sokal, *The multivariate Tutte polynomial (alias Potts model)* | `arXiv:math/0503607` | full text | whole (54 pp.) |
| T5–T9 | Stanley 1973 (the original reciprocity paper); Blass & Sagan 1986; Dohmen 2010; Read 1968; Bondy & Murty §8.4 | as recorded in the polynomial harvest §A | full text | the relevant sections |
| R1 | Cameron, "The Random Graph" | `https://arxiv.org/pdf/1301.7544` | full text | §§1.1–1.10 |
| R2 | Cameron, "The Random Graph Revisited" | `https://www.math.uni-bielefeld.de/~rehmann/ECM/cdrom/3ecm/pdfs/pant3/camer.pdf` | full text | §§1–3 |
| R3 | Macpherson, "A survey of homogeneous structures", author's final preprint, 14 Jan 2011 | `http://web.archive.org/web/2018/http://www1.maths.leeds.ac.uk/Pure/staff/macpherson/homog_final2.pdf` | full text | §1, §2.1–2.2, §3.2, §4.1–4.2, §5.2 |
| R4 | Bodirsky, *Model Theory Course Notes* | `https://wwwpub.zih.tu-dresden.de/~bodirsky/Model-theory.pdf` | full text | §3.3, ch. 4 + exercises 57–71 |
| R5–R8 | Cambridge Part III *Model Theory* (Barbina/Tomczak); Schlicht (Bonn); Hubička; Chatterjee–Diaconis–Miclo | see the gapfill harvest §A | full text | as recorded there |
| E1 | Kostochka, UIUC Math 412 notes | course-hosted | full text | the edge-colouring block (Shannon's bound in full) |
| E2 | Stiebitz, Scheide, Toft & Favrholdt, *Graph Edge Coloring* — **author-hosted back matter**, `tu-ilmenau.de` | author-hosted | full text of the back matter | **Vizing's 1964 and 1965 papers in full English translation, with proofs**; Thm A.3 and Cor. A.4 |
| E3 | West, "A short proof of the Berge–Tutte formula and the Gallai–Edmonds structure theorem", *Electron. J. Combin.* | open access | full text | whole (5 pp.) |
| E4 | Schrijver, *A Course in Combinatorial Optimization* / *Combinatorial Optimization: Polyhedra and Efficiency* vol. I | as G3 | full text | the matching chapters; Thms 6/7/8 for the blossom algorithm |
| E5 | Chekuri, matching lecture notes | course-hosted | full text | the $D(G)/A(G)/C(G)$ development |

**Convention tiebreakers only.** Wikipedia and encyclopedia entries were used
nowhere as a pair's primary backing, and the one place a scaffolder might have
been tempted — the squarefree-integer variant of the Rado-graph Legendre
construction — is **explicitly denied** in GT-20 for exactly that reason.

**Contents-level only; usable for convention checks and for naming a result, never
as one of a pair's two treatments.** West, *Introduction to Graph Theory* 2nd ed.;
Bondy & Murty, GTM 244 (2008) and *Graph Theory with Applications* (1976);
Bollobás, *Modern Graph Theory* GTM 184; Bóna; van Lint & Wilson;
Beth–Jungnickel–Lenz; Hughes–Piper; Stinson; Cameron, *Combinatorics*;
Godsil & Royle; Godsil & Meagher; Biggs; Frieze–Karoński; Bollobás, *Random
Graphs*; Janson–Łuczak–Ruciński; Molloy & Reed; Spencer, *Ten Lectures*;
Lovász–Plummer; Oxley, *Matroid Theory*; Welsh.

**Disqualified.** **Bollobás, *Extremal Graph Theory* (1978 / Dover 2004)** — a
chapter list only. Every archive.org derivative returns a content block; WorldCat
and the ACM DL are gated; Google Books has no structured contents and its API
returned 429; the Library of Congress MARC record retrieved from OpenLibrary's
`source_records` carries **no 505 formatted-contents note**. Because its headings
cannot be enumerated, **no disposition can be given for them**, so it fails clause
(b)/(c) and **must not be counted as one of a pair's two independent treatments**.
It is a standard reference and it is nevertheless unusable under this rule; §29
records it and names the untried routes.

## 26.2 Dispositions

### G1 Diestel, *Graph Theory* 5th ed. — chapter granularity, with splits written out

Verbatim section headings and all named results: graph-theory harvest §B.0–§B.1.

| G1 chapter | disposition |
|---|---|
| **1. The Basics** (§§1.1–1.10) | `already-published` throughout — `graphs-walks-and-connectivity` (35 items) and `trees-forests-and-spanning-trees` (27) cover §§1.1–1.8. **Two exceptions**: §1.4's Mader theorem (1.4.3) is `included` on GT-14; §1.9 "Some linear algebra" is `included` on GT-22 (cut/cycle space, 1.9.3) |
| **2. Matching, Covering and Packing** | §2.1 `already-published` (`matchings-covers-menger-and-network-flows`, 25 items: Hall, König, Berge, Gallai). §2.2 `included` on GT-16 (Tutte 2.2.1, Gallai–Edmonds 2.2.3). §2.3 Erdős–Pósa `deferred` — it is a minor-theoretic packing/covering duality whose natural home is GT-15's successor and it is not needed by any scaffolded result. §2.4 tree packing and arboricity `included` on GT-17b, via matroid union, which is a better route than G1's. §2.5 path covers `included` on GT-16 |
| **3. Connectivity** | §3.1 `included` on GT-14 (blocks, ear decomposition). §3.2 `included` on GT-14 (Tutte's wheel theorem). §3.3 `already-published` (all four Menger forms). §3.4 A-paths and Mader `included` on GT-14. §3.5 linking pairs / Thomas–Wollan `deferred` — it is used by G1 only inside the minor-structure programme, which is itself deferred |
| **4. Planar Graphs** | `already-published` in full — `plane-graphs-euler-and-the-five-colour-theorem` (40 items) publishes the topological prerequisites, Euler's formula, the edge bounds, maximal plane triangulations, **Kuratowski–Wagner**, and plane duality. §4.6 (cycles vs bonds under duality) is `included` on GT-22, being the one part not published |
| **5. Colouring** | the block this enrichment exists for. §5.1 `already-published` in part (five and six colour theorems); Grötzsch 5.1.3 `included` on GT-23 **conditionally** (§29). §5.2 `included` on GT-9. §5.3 `included` on GT-11. §5.4 `included` on GT-12, except Thomassen 5.4.2 `included` on GT-23. §5.5 `included` on GT-13; the strong perfect graph theorem 5.5.3 `included` as a `proved_here: false` `rem-`. §5.6 $\chi$-boundedness: Prop. 5.6.2 and Lemma 5.6.3 `included` on GT-13; Thm 5.6.1 (Scott–Seymour) statement-only |
| **6. Flows** | §§6.1–6.4 `included` on GT-18. §6.5 `included` on GT-22 (flow–colouring duality). §6.6 Seymour's 6-flow theorem `included` on GT-18 if the ~30 steps split, else `deferred` with the reason; the three Tutte flow conjectures `included` as `rem-` items |
| **7. Extremal Graph Theory** | §7.1 `already-published` (`extremal-graph-theory`, 20 items: Turán, Erdős–Stone–Simonovits, Kővári–Sós–Turán). §7.2 (Mader, Thomas–Wollan) `inline` in GT-14's Mader item. §7.3 Hadwiger's conjecture `deferred` — it rests on the minor-structure programme; the $r=4$ case via chordal graphs is `included` on GT-13 as a corollary if it fits. §§7.4–7.7 `included` on GT-19 in full |
| **8. Infinite Graphs** | §8.1 `included` on GT-9 (De Bruijn–Erdős, all three proofs). §8.2 ends, the star–comb lemma, Halin's theorems: `deferred` — the theory of ends is a development in its own right and no scaffolded result needs it. §§8.3–8.5 `deferred`, same reason. §8.6 the Freudenthal compactification and §8.7 the topological cycle space: `out-of-scope` — they need a compactification of a graph as a topological space, which belongs with the topology band, not here |
| **9. Ramsey Theory for Graphs** | §9.1–9.2 `already-published` (`ramsey-theory`, 21 items) and extended on CB-11. §9.3 Ramsey properties and connectivity, §9.4 induced Ramsey theorems: `deferred` — induced Ramsey theory is the Erdős–Hajnal programme's neighbour and §16's block is the library's route into it. §9.5 Ramsey properties of sparse graphs `deferred` |
| **10. Hamilton Cycles** | §10.1 `included` on GT-24 (Chvátal–Erdős, Asratian–Khachatrian); Tutte 10.1.4 statement-only. §10.2 `included` on GT-24 (Chvátal's degree-sequence theorem). §10.3 Fleischner `deferred` — G1's longest ch. 10 proof, ~5 printed pages, with the reason recorded |
| **11. Random Graphs** | `already-published` in part (`finite-probability-and-the-probabilistic-method`); the rest is `included` on CB-12 and CB-30 **in the finite forms §25.0 permits**, and the phase-transition material is `out-of-scope` with the Galton–Watson reason |
| **12. Graph Minors** | §§12.1–12.2 `included` on GT-15 (wqo, Kruskal). §§12.3–12.4 `included` on GT-15 (tree-decompositions, tree-width, bramble duality). §12.5 tangles `deferred`. §12.6 the grid theorem: `included` as a statement with `proved_here: false`, because **the 5th edition states it without proof** and only the 5th is free. §12.7 the graph minor theorem: statement-only, with Cors. 12.7.2–12.7.3 `included` as its consequences |

### G2/P2 Zhao, *GTAC* — section granularity

| Zhao section | disposition |
|---|---|
| 0.1 Schur's theorem | `already-published` (`thm-schur-monochromatic-sum`) |
| 0.2 Progressions, 0.3 What's next | `inline` in CB-11's motivation |
| 1.1–1.5 Mantel, Turán, Turán density, KST, Erdős–Stone–Simonovits | `already-published` — `extremal-graph-theory` publishes all five |
| 1.6 Forbidding a cycle | `deferred` — the even-cycle bounds are a development the published extremal page did not take and no scaffolded result needs |
| 1.7 Dependent random choice | `included` on CB-12 |
| 1.8–1.11 lower-bound, randomized and algebraic constructions | 1.9–1.10 `included` on CB-12 and CB-31; 1.11 randomized algebraic constructions `deferred` |
| 2.1–2.6 regularity, counting, removal, Roth, Behrend, general removal | `included` on GT-19 in full; Behrend 2.5 `included` on CB-27 instead, where it pairs with the Fourier bound |
| 2.7–2.9 property testing, induced removal, strong regularity | `deferred` — property testing is a complexity-flavoured topic the library has not reached |
| 2.10–2.11 hypergraph removal and regularity, Szemerédi's theorem | `out-of-scope` — G1 and G2 agree Szemerédi's theorem is far beyond scope |
| 3.1 Quasirandom graphs | `included` on CB-31, **in the $\varepsilon$-quantified single-graph form** |
| 3.2 Expander mixing lemma | `included` on GT-21 |
| 3.3 Abelian Cayley graphs and eigenvalues | `included` on GT-7a (circulants, hypercube) and CB-31 (general abelian) |
| 3.4–3.5 quasirandom groups, Grothendieck's inequality | `deferred` — Grothendieck's inequality is functional-analytic |
| 3.6 Alon–Boppana | `included` on GT-21 |
| 4.1–4.9 graph limits and graphons | `out-of-scope` — a measurable $W:[0,1]^2\to[0,1]$; the `probability-theory` and `measure-theory` tracks would be the prerequisite, and even then this is a subject of its own |
| 5.1–5.5 homomorphism inequalities | 5.5 (entropy) `included` on CB-25; 5.1–5.4 `deferred` |
| 6.1–6.2 Fourier on $\mathbb{F}_p^n$, Roth in the finite-field model | `included` on CB-27 in full |
| 6.3–6.4 Fourier on $\mathbb{Z}$, Roth in the integers | `included` on CB-27 |
| 6.5 Polynomial method | `included` on CB-28 in full |
| 6.6–6.7 arithmetic regularity, popular common difference | `deferred` |
| 7.1 Freiman's theorem | `included` on CB-32 after A7; NT-22 supplies successive minima and Minkowski's second theorem |
| 7.2–7.5 Ruzsa triangle, Plünnecke, covering, bounded exponent | `included` on CB-32 |
| 7.6–7.11 modeling, Bogolyubov, geometry of numbers, Bohr sets, the proof | 7.8 Bogolyubov in $\mathbb{F}_p^n$ `included` on CB-27; the rest `deferred` with the geometry-of-numbers reason |
| 7.12 polynomial Freiman–Ruzsa | statement-only `rem-` |
| 7.13 additive energy, BSG | additive energy `included` on CB-32; BSG `deferred` on length |
| 8 Sum–product | `included` on CB-34 |
| 9 Green–Tao, relative Szemerédi | `out-of-scope` |

### A1 Brouwer–Haemers, A2 Spielman, A3 Stanley *TAC*, A4 Babai–Frankl — chapter granularity

Verbatim section headings and the 238 + 376 + named-result extractions: algebraic
harvest §B.1–§B.4.

| source, chapter | disposition |
|---|---|
| A1 ch. 1 Graph spectrum | `included` on GT-7a (matrices, spectrum, walks, spanning trees, bipartiteness, named spectra, Cayley graphs); §1.5 decompositions `included` on CB-13 (Graham–Pollak); §1.8 cospectral graphs and switching `included` on GT-7a (the smallest witness) with Godsil–McKay switching `deferred` |
| A1 ch. 2 Linear algebra | `included` on GT-7a/GT-7b (simultaneous diagonalisation, Perron–Frobenius, equitable partitions, Rayleigh quotient, interlacing, Gram matrices); Schur complements, Courant–Weyl, Geršgorin `deferred` — none is needed by a scaffolded result |
| A1 ch. 3 Eigenvalues and eigenvectors | `included` on GT-7b (largest eigenvalue, interlacing, cliques and cocliques, chromatic bounds, Lovász $\vartheta$, Shannon capacity); §3.11 Grone–Merris `deferred`; §3.12 hypergraph Laplacian `deferred`; §3.13 applications (PageRank, drawing, clustering) `out-of-scope` |
| A1 ch. 4 The second largest eigenvalue | `included` on GT-21 (bounds, randomness, expansion, mixing); §4.5 toughness/Hamiltonicity `included` on GT-24 if it fits, else `deferred`; §4.8 block designs `included` on CB-14a; §4.9 polarities `deferred` |
| A1 ch. 5 Trees | `deferred` — characteristic polynomials of trees, sign patterns and integral trees form a development of their own that no scaffolded result uses |
| A1 ch. 6 Groups and graphs | §6.1–6.3 `included` on CB-31 (Cayley graphs, abelian case); non-abelian §6.3 `deferred` pending the representation-theory seam (§29); §6.4 covers, §6.5 Cayley sum graphs `deferred` |
| A1 ch. 7 Topology (Colin de Verdière) | `out-of-scope` — the invariant is defined through a transversality condition on matrix manifolds |
| A1 ch. 8 Euclidean representations, root lattices | `deferred` — the Cameron–Goethals–Seidel–Shult classification is a substantial programme |
| A1 ch. 9 Strongly regular graphs | `included` on GT-7b (definition, parameters, eigenvalues, integrality, Paley, examples); §9.6 generalized quadrangles, §9.7 the (81,20,1,6) graph, §9.8 two-weight codes `deferred` |
| A1 ch. 10 Regular two-graphs | `deferred`; §10.5 Paley/Hadamard constructions `included` on CB-14a |
| A1 ch. 11 Association schemes | `included` on CB-14c (Bose–Mesner, $P$/$Q$, Delsarte's inequality); the LP **optimisation** `deferred` |
| A1 ch. 12–15 (distance-regular graphs, $p$-ranks, spectral characterisations, graphs with few eigenvalues) | `deferred` — each is a research programme; §14.2's cospectral constructions are `inline` in GT-7a's witness item |
| A2 ch. 1–5 | `included` on GT-7a (Laplacian, Rayleigh quotients, Courant–Fischer, Perron–Frobenius symmetric case, named spectra) |
| A2 ch. 6–19 | `deferred` — the algorithmic and numerical-linear-algebra material (Laplacian solvers, sparsification, effective resistance) is a different subject; §16.5 Andersen's Cheeger proof is `inline` in GT-21's route remark |
| A2 ch. 20–21 | `included` on GT-21 (conductance, Cheeger both directions, the sweep-cut route) |
| A2 ch. 22–33 | `deferred`; §24.4–24.5 (Perron–Frobenius for Laplacians, nodal domains) `deferred` with the reason that Fiedler's nodal domain theorem is [B] and no scaffolded result needs it; §27.4 vertex expansion `inline` in GT-21's convention remark |
| A3 ch. 1–3 | `included` on GT-7a (walk counting, the hypercube via $\mathbb{Z}_2^n$ characters, random walks and the $D^{1/2}MD^{-1/2}$ similarity) |
| A3 ch. 4–8 | `deferred` — the Radon transform, $q$-analogues of the cube, group actions on boolean algebras and Young's lattice belong with a symmetric-functions development the library has not reached; the $q$-analogue material overlaps CB-17 (§22) and is `already-scaffolded` there |
| A3 ch. 9–10 | `included` on GT-7a (matrix-tree, Cauchy–Binet, the all-cofactors lemma, Cayley's second proof); the BEST theorem and de Bruijn sequences `included` on GT-7a if the ceiling permits, else `deferred` with the reason |
| A3 ch. 11–12 | ch. 12 `included` on CB-13 (Oddtown, Graham–Pollak, nonuniform Fisher); Thm 12.6 (circulant Hadamard) `deferred`, needing cyclotomic integers $\mathbb{Z}[\zeta]$ and Kronecker's theorem; ch. 11 `deferred` |
| A4 ch. 1–2 | `included` on CB-13 (the linear algebra bound and the three independence criteria, Oddtown, Eventown, Graham–Pollak) |
| A4 ch. 3 | `deferred` — Gale's and Borsuk's theorems are stated without proof by A4 itself, and the Kneser lower bound they serve is denied (CB-24) |
| A4 ch. 4 | `included` on CB-13 (nonuniform Fisher) and CB-24 (uniform Ray-Chaudhuri–Wilson) |
| A4 ch. 5 | `included` on CB-24 in full — multilinearisation, modular RW, Deza–Frankl, Frankl–Rödl, the distance-graph chromatic numbers, and the Kahn–Kalai Borsuk disproof, which A4's preface certifies as self-contained across §§5.4 and 5.6 |
| A4 ch. 6 | `deferred` |
| A4 ch. 7 | `included` on CB-13 (inclusion-matrix rank, §7.4's VC route) and CB-24 (§7.3, Gottlieb, the sharp uniform bound, the explicit Ramsey graph) |
| A4 ch. 8–10 | `deferred` |

### P1 Alon–Spencer, P3 Zhao *PM*, P4 Matoušek–Vondrák, P5 Gowers, P6 Tao–Vu

The probabilistic harvest's §B already carries chapter-level dispositions for
these; they are **adopted** here, with the following amendments made by this
scaffold:

- P1 ch. 6 and ch. 8 (correlation, Janson) — `included` on CB-29, **not** on the
  published probabilistic-method page, and CB-21 (§22) keeps the set-system forms.
- P1 ch. 7 — `included` on CB-30, **excluding** §7.6 Talagrand (`deferred`, gated
  by finite convex geometry, not by measure theory) and §7.8 Kim–Vu (`deferred`).
- P1 ch. 13 — `included` on CB-26, with §13.2's **Lovett–Meka presentation
  explicitly rejected** and Spencer's entropy/partial-colouring route taken.
- P1 ch. 15 §15.7 and P5 in full — `included` on CB-25, with P1 Cor. 15.7.6
  (continuous Loomis–Whitney) `out-of-scope` and the discrete form taken instead.
- P1 ch. 16 — `included` on CB-12 (conditional expectations, BCH $d$-wise
  independence), with the polynomial-time claims `out-of-scope` as `rem-` only.
- P1 ch. 11 — `out-of-scope` in full (branching processes, Poisson limits).
- P6 §§5.1–5.5, §§9.1–9.5 — `included` on CB-33; the rest of P6 `deferred`.

### M1 Oxley, M2 Schrijver ch. 10, M3 Reiner

**The matroid harvest's §B.4 already gives a disposition for every harvested
heading and is adopted wholesale**, with the routing fixed here: its Pair 1 is
GT-17a, its Pair 2 is GT-17b, its Pair 3 is GT-17c, and the Tutte-polynomial
portion of its Pair 3 is routed to **GT-18** instead so that the library holds one
Tutte polynomial and not two. Its `out-of-scope` verdicts on M2 §10.7 (matroid
polytopes), M1 §6 (Seymour decomposition) and M3 §§1.8–1.10, 2.4, 3.2.4 (oriented
matroids) are adopted with their stated reasons — LP duality and total
unimodularity in the first two, and a whole subject area in the third.

### M4, T1–T9 (the polynomials)

M4/T3's §§1–9 and T1's full TOC: `included` on GT-10 and GT-18 for the chromatic
polynomial, Whitney rank expansion, broken circuits, reciprocity, the Tutte
polynomial with all three definitions and their equivalence, universality, the
$T(1,1)/(2,1)/(1,2)/(2,2)$ evaluations, the matrix-tree connection, the chromatic
and flow specialisations, reliability, the beta invariant, and the spanning-tree
activity expansion. `deferred`: flow reciprocity (no elementary proof in hand),
Greene–Zaslavsky source-and-sink, bicycles and $T(-1,-1)$, abelian sandpiles
(M4 §6.4), the shelling polynomial (M4 §6.6, needing shellability), and the zeros
and derivatives of $T$ (M4 §§7.3–7.4). `out-of-scope`: M4 §8, the complexity of
evaluating $T$, and T4's statistical-mechanics and coding material.

### E1–E5 (edge colouring and matching)

E1: `included` on GT-11 (Shannon's bound, 16 steps, uniform in $\Delta$). E2:
`included` on GT-11 (Vizing's multigraph theorem $\chi'\le\Delta+\mu$ from the
1964/1965 originals, with the simple-graph case as its Cor. A.4); the Goldberg–Seymour
conjecture `rem-` only, citing Chen–Jing–Zang. E3 and E5: `included` on GT-16
(Tutte–Berge in 9 steps from the published Berge theorem; the full $D/A/C$
structure theorem in 12–16 steps from Hall alone). E4: `included` on GT-16
(the blossom algorithm's correctness, 20–24 steps via Thms 6/7/8) and on GT-17b
(matroid intersection and union). Bondy & Murty's twelve-page blossom treatment:
`deferred`, superseded by E4's shorter route. **Bondy & Murty Ex. 17.2.8a: NOT
scaffolded** — unproved and unsourced.

### R1–R8 (the Rado graph)

R1 §§1.1–1.5, 1.7 — `included` on GT-20. R1 §1.6 (first-order theory) —
`out-of-scope`, first-order logic. R1 §1.8 (the automorphism group) — `included`
as `proved_here: false` `rem-` items, because Truss's papers could not be
obtained. R1 §1.9 (topological aspects), §1.10 (Urysohn space, KPT theory) —
`deferred`. R3 §§2.1–2.2 — `included` on GT-20 (Fraïssé's theorem); R3 §§3–6 —
`deferred` (model theory of homogeneous structures). R4 ch. 4 — `included`; R4
§3.3 (Vaught's test) — `out-of-scope`. R5, R6 — `included` for the extension
scheme and the back-and-forth decomposition; their 0–1 laws — `out-of-scope`.

---

# 27. Page inventory and the build frontier

## 27.1 What this enrichment adds

| block | pairs | of which NEW | of which ENRICHED |
|---|---|---|---|
| §22 enumerative | CB-15, CB-5, CB-6, CB-16, CB-7, CB-8, CB-17, CB-18, CB-19, CB-20, CB-21, CB-10, CB-22 | 8 | 5 |
| §23 algebraic, spectral, design | CB-13, CB-23, CB-24, CB-14a, CB-14b, CB-14c, GT-7a, GT-7b | 6 | 2 |
| §24 graph theory | GT-9…GT-24 (GT-17 as a, b, c) | 18 | 0 |
| §25 probabilistic, Ramsey, additive | CB-25, CB-29, CB-30, CB-26, CB-12, CB-11, CB-31, CB-27, CB-28, CB-32, CB-33, CB-34 | 10 | 2 |

**Fifty-one A/B pairs — 102 pages** — of which **forty-two are new** and **nine
enrich** a planned-but-unauthored page whose §11 inventory this file replaces. Every A page
is scaffolded against the **60-item ceiling** and the four places where the
ceiling forced a split are stated where they occur: CB-14 → CB-14a/b/c, GT-7 →
GT-7a/b, GT-17 → GT-17a/b/c, and the §11 GT-5 colouring page → GT-9…GT-13.

## 27.2 The build frontier — what cannot be built yet, and why that is not a defect

**`order` is not build order.** A page may be scaffolded and legally placed and
still be unbuildable, because a page it cites is planned and unauthored. Verified
from `research/plan-spec.json` on 2026-08-13:

| page needed | items | consequence |
|---|---|---|
| `inner-product-spaces-and-orthogonality` | **0** | blocks CB-13's rank facts, GT-7b's orthogonal decomposition, GT-21 entirely, and G3′'s Pythagoras route for GT-19 |
| `the-spectral-theorem-and-singular-value-decomposition` | **0** | blocks GT-7a (the spectrum is not even *definable* without it — #100/#123), GT-7b, GT-21, CB-31, CB-14c |
| `algebraic-extensions-degree-and-finite-fields` | **0** | blocks CB-14b ($PG(2,q)$, MOLS over $\mathbb{F}_q$), CB-14c, CB-23's Chevalley–Warning, CB-24, CB-27, CB-28, GT-17c |
| `graph-colouring` | 4, published | **does not block** — it is thin, and GT-9…GT-13 cite it and extend it |

**The whole algebraic/spectral/design block and most of the additive block are
scaffold-complete and build-blocked.** That is a build-frontier fact and it is
recorded rather than worked around: the scaffold cites those pages because they
sit below the band in plan order and citing them is legal, and a future build
cycle must author them first. §28 carries the amendments those pages owe.

**Two prerequisites this scaffold commits to building itself**, because the
build-the-machinery rule applies and `deferred` is not available: the **forest
edge count** (GT-17a, ~8 steps from the published `cor-tree-edge-count`) and the
**Gale–Shapley stable matching theorem** (GT-12, absent from `items/` and needed
by Galvin's theorem). Two more are conditional on another track: **Lagrange's
four-square theorem** (CB-14b) and **prime subfields / $\mathbb{F}_q$
characteristic** (GT-17c).

---

# 28. Amendments owed to other scaffolds

The only legal way this lane affects another track's file. Each row names the
owner, the exact change, and what this scaffold does if it is declined.

| # | owed to | the amendment | fallback if declined |
|---|---|---|---|
| A1 | **the owner** (reading-order changes remain owner-only) | **Re-home five items** off `plane-graphs-euler-and-the-five-colour-theorem` to their earliest legal page: `def-bridge-in-a-graph` and `lem-edge-is-a-bridge-iff-it-lies-on-no-cycle` above `graphs-walks-and-connectivity`; `lem-three-connected-graph-has-a-contractible-edge` above `matchings-covers-menger-and-network-flows`; `def-kempe-chain` and `lem-kempe-component-colour-swap` above `graph-colouring`. Every dep of each already resolves at or below the new home, so acyclicity is preserved and no item text changes. **Two cautions:** a re-home is complete only when the **donor** page stops listing the id — no gate fails on a half-done re-home — and the donor page is **published**, so its prerequisite closure must be re-derived | GT-11 mints the **edge**-colouring two-colour swap lemma, which is a genuinely different statement from the published vertex version and not a duplicate id; GT-14 works with `def-vertex-and-edge-connectivity` and $\lambda$-witnesses. Both are scaffolded that way already, so declining costs clumsiness, not results |
| A2 | `abstract-algebra` — **APPLIED 2026-08-14** | LA-7 mints `thm-cauchy-binet-formula`, the rectangular commutative-ring identity requested here. | GT-7a cites it; no local mint or fallback remains |
| A3 | `abstract-algebra` (linear-algebra completion) | Mint **Courant–Fischer** and **Cauchy interlacing** on `the-spectral-theorem-and-singular-value-decomposition`. Half of spectral graph theory is unstatable without the min–max theorem | GT-7b mints Courant–Fischer itself. Scaffolded that way already; the scaffold does not depend on a promise |
| A4 | `abstract-algebra` | **§19.2 F2 is WITHDRAWN.** The cofactor expansion, minors, the adjugate and Cramer's rule are published on `the-determinant-of-a-linear-operator`. No amendment is owed for them; §23.0 records the correction | — |
| A5 | `number-theory` | Mint **`thm-lagrange-four-squares`**. CB-14b's Bruck–Ryser needs it, `ls items/ \| grep -i four-square` is empty, and `number-theory`'s elementary block anchors **below** the combinatorics band, so citing it creates no forward reference | CB-14b mints it locally — the descent proof is bounded and needs only published modular arithmetic — with a `rem-` recording the duplication risk. **Never a `proved_here: false` fallback**: the theorem is provable in scope and the narrow last resort is not for results one is reluctant to build |
| A6 | `number-theory` | Mint **Dirichlet's theorem on primes in arithmetic progressions**. GT-20's Legendre-symbol construction of the Rado graph needs it, and it is `number-theory`'s analytic block by SEAMS §4 | GT-20 drops that construction to a `rem-` with `proved_here: false` and keeps the other four constructions, which are choice-free and self-contained |
| A7 | `number-theory` — **APPLIED 2026-08-14** | NT-22 adds successive minima and Minkowski's second theorem; the existing geometry-of-numbers spine supplies the rest. | CB-32 may state full Freiman using those citations; the bounded-exponent fallback is no longer the ceiling |
| A8 | `abstract-algebra` | Mint **prime subfields** and the $\mathbb{F}_q$ characteristic apparatus ("a field of characteristic $p$ contains $\mathbb{F}_p$"; "characteristic $0$ contains $\mathbb{Q}$"). GT-17c's Fano representability needs it | GT-17c builds it, ~2–3 items, [B]. Binary matroids need only $\mathbb{Z}/2$ and are unaffected |
| A9 | `abstract-algebra` | Mint **Wedderburn's little theorem** (every finite division ring is a field). CB-14b's coordinatisation statement names it | CB-14b keeps the coordinatisation **statement** and defers the proof, which it does anyway |
| A10 | `abstract-algebra` — **APPLIED 2026-08-14, R-3** | RT-3 mints **`def-character-of-a-finite-abelian-group`** and character orthogonality. CB-27, CB-31 and CB-14c cite them. | no fallback; local minting is forbidden by the ruling |
| A11 | this file's own §16 — **APPLIED 2026-08-14** | The Erdős--Hajnal pages cite GT-19's ordinary regularity lemma rather than restating it. | none |
| A12 | this file's own §22 (CB-21) — **APPLIED 2026-08-14** | Add `rem-lattice-fkg-and-probabilistic-fkg-agree` pointing to CB-29's probabilistic reading. | none |
| A13 | `probability-theory` (wave 3) | **Do not rebuild finite probability.** SEAMS §4 already assigns it here; this scaffold adds CB-25, CB-26, CB-29, CB-30 and CB-31 to what that track must cite rather than re-mint — in particular **Azuma–Hoeffding, McDiarmid and the exposure martingales are finite-space theorems and belong here** | none; this is a notification, not a request |
| A14 | `monoidal-abelian-categories` (wave 1, concurrent) | CB-22 (combinatorial species, §22) is anchored after `universal-properties-and-the-yoneda-lemma` and cites `categories-functors-and-natural-transformations`. It needs the groupoid of finite sets and bijections, nothing more | none; the citation is to already-authored category-theory content |

---

# 29. Unresolved seams, denials reviewed, and blockers

## 29.1 Unresolved seams — for the orchestrator, not for this lane

1. **Character ownership and MacWilliams ordering — RESOLVED by R-3.** RT-3
   mints the character definition and orthogonality theorem. CB-14c, CB-27 and
   CB-31 cite them, so no CB-14c/CB-27 forward edge is required.
2. **Non-abelian Cayley graph spectra** (GT-7b) rest on the Artin–Wedderburn
   representation theory of finite groups, owned by `abstract-algebra`. Whether
   they are `deferred` or citable depends on where that track's RT block lands
   relative to the combinatorics band — a placement question, not a mathematical
   one.
3. **CB-14c's placement after GT-7a.** It needs simultaneous diagonalisation of
   commuting symmetric matrices, which GT-7a mints. The scaffold prefers the
   reorder to a forward reference (SEAMS §5(1)); the orchestrator may prefer to
   keep the design block contiguous.
4. **Amendment A1's re-home is owner-only** and until it is decided, GT-11 and
   GT-14 carry the fallback design.

## 29.2 Denials, each with the specific reason

`deferred` and `out-of-scope` are reserved for material belonging to another
page's topic or resting on a subject area the library has not reached. Every
denial below names which.

**Rests on a subject the library has not reached.** Kneser's conjecture, lower
bound (Borsuk–Ulam or the octahedral Tucker lemma — algebraic topology); the
Colin de Verdière invariant (transversality on matrix manifolds); the topological
cycle space and the Freudenthal compactification (topology of an infinite graph);
oriented matroids, shellability, hyperplane arrangements (M3's own §§1.8–1.10,
2.4, 3.2.4); Seymour's matroid decomposition and matroid polytopes (LP duality,
integral polyhedra, total unimodularity); the remaining unapplied
geometry-of-numbers sequels beyond NT-22;
Talagrand's inequality (**finite convex geometry, explicitly NOT measure theory** —
the convex hull of $U(A,x)\subseteq\{0,1\}^n$ is a polytope, so a future finite
polytope development closes it); graphons and graph limits, the Erdős–Rényi phase
transition, Borel–Cantelli, the martingale convergence theorem, the continuous
Loomis–Whitney inequality, the Lovett–Meka proof of six standard deviations, and
the probabilistic characterisation of the Rado graph (all measure theory);
zero–one laws and the first-order theory of $R$ (first-order logic and
Ehrenfeucht–Fraïssé games); property testing (complexity).

**Long or technical beyond a bounded proof, with the source's own verdict.** The
strong perfect graph theorem (178 journal pages; G1 declines even to sketch it);
Szemerédi's theorem (G1: "far beyond the scope of this book"); the graph minor
theorem (G1 gives a sketch, not a proof); Fleischner's theorem (G1's longest ch. 10
proof); the Moser–Tardos runtime theorem (**not merely long — it is a statement
about an infinite product space, and P1 say so**); Ramanujan graph existence; the
Golay codes and the Mathieu groups; Bose–Shrikhande–Parker; Lam–Thiel–Swiercz;
general Bruck–Ryser–Chowla for odd $v$ (Hasse–Minkowski or Witt cancellation);
Whitney's 2-isomorphism theorem; the ternary, regular, graphic and cographic
excluded-minor characterisations; Balog–Szemerédi–Gowers (length only — recorded
as reachable).

**Two denials were REVIEWED AND WITHDRAWN**, and both matter as precedents.
§11 denied **Frankl–Wilson** on length; A4's preface certifies that §§5.4 and 5.6
give a complete self-contained proof of the Kahn–Kalai theorem, so CB-24 carries
it in full. §11's **CB-10 premise was false** — Burnside's lemma is published as
`thm-cauchy-frobenius-orbit-counting` — so that page's inventory was rewritten
(§18.2 S1). The general lesson, and it is the one this lane most wants to hand
on: **a denial recorded before the sources were read is a hypothesis, not a
finding.**

## 29.3 Blockers

1. **Bollobás, *Extremal Graph Theory*, cannot satisfy the harvest rule.** Chapter
   list only; every route to its section headings is blocked (§26.1). **It must
   not be counted as one of a pair's two treatments.** Untried routes for a future
   session: a different institutional archive.org mirror, a HathiTrust catalog
   snippet search, a library-proxy PDF.
2. **CB-22 (combinatorial species) is scaffolded but not source-complete.**
   Bergeron–Labelle–Leroux and Joyal's original are not open access; the only open
   treatment obtained is Cameron LTCC §8, which is genuine but short. **A step-2
   Beta must obtain a second independent treatment**; the candidates identified
   but unread are `arXiv:1312.0542`, `arXiv:math/0512052`, `arXiv:2305.05059`.
3. **Skolem's Steiner-triple-system block list was not verified against a primary
   source.** The prerequisite answer (nothing beyond modular arithmetic on
   $\mathbb{Z}/2t$) is solid, but **the exact block list must be copied from van
   Lint & Wilson ch. 19, Lindner & Rodger, or Colbourn & Dinitz Part II before
   authoring.** Do not reconstruct it from memory.
4. **Grötzsch's theorem and the crossing lemma are not source-complete.** G1
   states Grötzsch as Thm 5.1.3 and the harvest did not establish whether the 5th
   edition proves it; no source for the crossing lemma or Szemerédi–Trotter was
   obtained by any harvest in this run. GT-23 and CB-34 are scaffolded
   conditionally and must not ship before the source pass.
5. **RESOLVED, and recorded because the resolution changed two verdicts.** GT-10's
   polynomial material and GT-18 were blocked on a primary source, G1 giving the
   chromatic polynomial as Exercise 19 only and never defining $T(G;x,y)$. Two
   harvests closed it: the matroid harvest obtained **M4** Ellis-Monaghan & Merino
   and the polynomial harvest obtained **T1** Goodall (134 pp.), **T2** Beck &
   Sanyal, **T4** Sokal and the primary reciprocity literature. Residual items:
   **Whitney's 1932 originals are AMS/JSTOR-gated** (low severity — four secondary
   sources agree verbatim); **Bollobás *Modern Graph Theory* §X.5 was not
   obtained**, which leaves T1's Prop. 3.15 unproved in anything obtained;
   **T3/M4's unique-extension theorem is stated but not proved there**, closable by
   adopting T1's formulation instead; and **flow reciprocity has no elementary
   proof in hand**, so it stays `deferred` along with Greene–Zaslavsky
   source-and-sink and the bicycle evaluation $T(-1,-1)$.
6. **RESOLVED, and the graph harvest's dangling pointer is recorded so a future
   session does not go looking for it:** its own §C.4 and §C.11 promised a §C.13
   covering the multigraph edge-colouring bounds, Tutte–Berge and full
   Gallai–Edmonds, **and that §C.13 was never written.** The gap-fill harvest
   supplied all of it (§24, GT-11 and GT-16). Residual, and each is a real
   limitation rather than a formality: **Stiebitz–Scheide–Toft–Favrholdt's body
   chapters, the Berge–Fournier and Kierstead originals, and West's main text were
   not obtained**; **Lovász–Plummer *Matching Theory* was reached at chapter level
   only** (not needed, since Schrijver and West's *EJC* paper suffice); and
   **Bondy & Murty Exercise 17.2.8a ($\chi'\le2\Delta-\mu$) is unproved and
   unsourced — it must NOT be scaffolded.**
7. **RESOLVED.** The De Bruijn–Erdős reversal was recorded as unsourced folklore;
   the gap-fill harvest sourced it. For each fixed $k\ge3$ it is **equivalent** to
   BPI over ZF (Läuchli 1971; Rorabaugh–Tardif–Wehlau, *LMCS* **13**(1:1) (2017),
   Cor. 4.2, which is open access; Howard–Rubin Form 14 G(n)), while $k=2$ is
   equivalent to Choice(2) (Mycielski) — **so the equivalence is not uniform in
   $k$**, and that is the part a careless page would get wrong.
8. **Truss's papers on $\operatorname{Aut}(R)$ were not obtained**, and there is a
   live numerical discrepancy: R1 (2013) reports "five conjugates", while Truss's
   2003 paper is titled *"four conjugates good, three conjugates better"*.
   **Do not cite "five" as the best known bound.**
9. **The squarefree-integer variant of the Rado-graph Legendre construction is not
   sourced** — only Wikipedia and its mirrors carry it, and the source-depth rule
   bars them as primary backing. **It must not be authored.** The *primes*
   $\equiv1\pmod4$ version is fully sourced and is the one scaffolded.
10. **Two textual defects in M2 must be repaired, not inherited**: the reused
    variable $y$ in its (iv)$\Rightarrow$(i) proof, and the typo
    "$F\subseteq F\subseteq Y\cup Z$" in its (i)$\Rightarrow$(vi) proof (p. 177).
11. **`thomasbloom.org`'s TLS certificate is currently broken** — the sum–product
    history had to be retrieved with `curl --insecure`. A citable mirror must be
    found before that URL goes in a `sources.references`.
12. **Two matroid-adjacent TOCs could not be obtained**: Gordon & McNulty's
    section-level contents (Cambridge's asset host never completes TLS, and the
    services path serves HTML under a `.pdf` name) and Ardila's AMS *Notices*
    article (a genuine Cloudflare JS challenge, unbeatable by headers). **Neither
    blocks any content** — M1, M2, M3, M4 and M5 already exceed the two-treatment
    requirement for every matroid pair.
13. **A full-text copy of the in-copyright Oxley monograph is publicly reachable.**
    The matroid harvest flagged it and **deliberately did not use it**; the survey
    M1 is Oxley's own open text and is what the scaffold cites. Recorded so that a
    future session does not "discover" the copy and treat reachability as licence.
14. **No permission was requested by this lane or by any of its subagents**, and
    no operation was blocked for want of authority.

**Methodological notes worth carrying forward.** `WebFetch` cannot read PDFs —
every PDF in this run was fetched with `curl -L` and extracted with `pypdf` in a
venv, and `file -b` must be checked, because four apparent 404s were HTML error
pages saved with a `.pdf` extension. **But `file -b` must not be trusted for page
counts**: it reported the 42-page Ellis-Monaghan–Merino survey as "6 pages", which
would have caused a false discard of a source this scaffold now depends on. Use
`pypdf` or `pdfinfo` as authoritative. Fetch arXiv PDFs from `export.arxiv.org`
rather than `arxiv.org`. Some extracted text contains non-UTF-8 bytes, so plain
`grep` reports "binary file matches" and prints nothing — use `grep -a`, or a
session will wrongly conclude the extraction failed. Some university servers apply hotlink
protection: a browser user-agent alone gets 403, and adding a `Referer` for the
same host succeeds. One PDF silently truncated to 6 pages on first fetch and
returned its real 242 pages on a retry, so **page counts must be checked against
the source's own description**. Publisher domains (Springer, Wiley, SIAM,
Cambridge Core) were the least reliable route in this run; author-hosted pages,
the Wayback Machine and national-library contents scans were the most reliable.
And a "missing" library result must be searched for **by id across `items/`**, not
by reading the one page where it is expected to live — that is what §19.2 F2 got
wrong (§23.0).

---

# 17ter. Continuity checkpoint 2 — `subjects-01` `combinatorics` lane, 2026-08-13

*(Second checkpoint, per `CLAUDE.md` §"Context continuity". **SUPERSEDED — §17 is
now written and the run completed; the "still open" list below was discharged in
full.** Both checkpoints are working records, not scaffold content, and both
should be deleted at splice.)*

**Objective, unchanged.** Enrich the CB-\* and GT-\* material of this file only,
from full source research, at graduate depth. Write no other file except the
research harvests this lane commissions; author no items; change no `status:`.

**Done since §17bis.** §23 (the algebraic, spectral and design block: CB-13,
CB-23, CB-24, CB-14a, CB-14b, CB-14c, GT-7a, GT-7b, plus §23.0's correction of
F2, §23.1's six conventions, §23.9's well-definedness rows #110–#128 and §23.10's
choice rows). §24 (the graph-theory block: §24.0's investigation of the colouring
anomaly, §24.1's conventions 7–18, then GT-9, GT-10, GT-11, GT-12, GT-13, GT-14,
GT-15, GT-16, GT-19, GT-21, GT-22, GT-23, GT-24). §25 (the probabilistic, Ramsey
and additive block: §25.0's finiteness discipline, §25.1's conventions 19–28, then
CB-25, CB-29, CB-30, CB-26, CB-12, CB-11, CB-31, CB-27, CB-28, CB-32, CB-33,
CB-34, and §25.9's rows #129–#136 plus three choice rows).

**Two disk findings that changed the design and are already written in.**
(a) **§19.2 F2 is wrong** — the Laplace cofactor expansion, minors, the adjugate
and Cramer's rule are all published on `the-determinant-of-a-linear-operator`, a
different page from the one F2 checked. Only Cauchy–Binet is genuinely absent.
§23.0 records the withdrawal. (b) **Kuratowski–Wagner, plane duality and the
maximal-plane-triangulation characterisation are already published** on
`plane-graphs-euler-and-the-five-colour-theorem` (40 items), so §19.1's "exactly
one pair above the planarity page" is superseded by GT-22 + GT-23 + CB-34.

**Still open — the exact next actions, in order.**

1. **Three source-research subagents are running** and their returns are owed
   sections: `research/subjects-01-combinatorics-harvest-matroids.md` (→ GT-17),
   `research/subjects-01-combinatorics-harvest-tutte.md` (→ GT-18, and the
   completion of GT-10's sourcing), and
   `research/subjects-01-combinatorics-harvest-gapfill.md` (→ GT-11's multigraph
   edge-colouring bounds, GT-16's Tutte–Berge and full Gallai–Edmonds, GT-20 the
   Rado graph, and the De Bruijn–Erdős choice-principle question in GT-9).
   **GT-17, GT-18 and GT-20 are NOT yet written.** GT-19's anchor already names
   GT-18's examples page, so GT-18 must be placed before GT-19 in reading order.
2. **§26** — the canonical-coverage harvest: source ledger plus per-heading
   dispositions. The verbatim headings live in the harvest files; §26 supplies the
   dispositions, which is what `CLAUDE.md` requires and what the harvests do not
   already contain.
3. **§27** — page inventory and build frontier. Must record that
   `inner-product-spaces-and-orthogonality`, `the-spectral-theorem-and-singular-value-decomposition`
   and `algebraic-extensions-degree-and-finite-fields` all carry **0 items**, so
   the whole algebraic/spectral block is scaffold-complete but not buildable yet.
4. **§28** — amendments owed. Already accumulated in the text: the §19.2 F1
   re-home (owner-only), Cauchy–Binet to the algebra track, Courant–Fischer and
   Cauchy interlacing to the spectral page, `thm-lagrange-four-squares` to
   `number-theory`, Wedderburn's little theorem to `abstract-algebra`, the
   character-of-a-finite-abelian-group mint, geometry of numbers to
   `number-theory`, and CB-21's forward `rem-` to CB-29.
5. **§29** — unresolved seams, denials reviewed, blockers. Must include: Bollobás
   *Extremal Graph Theory* unusable under the harvest rule; CB-22 species not
   source-complete; Skolem's block list unverified; Grötzsch and the crossing
   lemma not source-complete; the De Bruijn–Erdős reversal unsourced; the
   character-theory seam; the MacWilliams/CB-27 ordering seam.
6. **§17** — the orchestrator summary, written LAST, at the top of the file.
7. **The cross-reference pass.** §19 was written under an earlier numbering and
   several of its `§n` pointers are wrong. The mapping to apply: §19's "§22"
   (algebraic/spectral) → **§23**; §19's "§23" (Fourier/density increment) →
   **§25**; §19's "§25" (graph theory, the colouring split, GT-22) → **§24**;
   §19's "§26" (build frontier) → **§27**; §19's "§27" (amendments) → **§28**.
   §19.1's "exactly one pair" sentence also needs the correction recorded above.

**Working-tree baseline.** This file is the only scaffold file this lane has
written. The four wave-1 harvests were committed at `b6678d4f`; the three new
harvests are being written by subagents into `research/` and are research
artifacts, not scaffold files.
