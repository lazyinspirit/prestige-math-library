# Combinatorics, graph theory, category theory, and homological algebra

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

**Deliberately NOT denied, because they are reachable and it would be a mistake
to drop them by reflex:** locally presentable and accessible categories, and the
accessible adjoint functor theorem — they need regular cardinals and
$\kappa$-filtered colimits, and `cardinal-arithmetic-and-cofinality` (new 229)
supplies exactly that; **the algebraic universal coefficient and Künneth
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

## GT-3. Eulerian Circuits, Hamiltonian Cycles and Tournaments  (order 193, combinatorics)

`requires`: `trees-forests-and-spanning-trees` (191)

DEFS: Eulerian trail and circuit; Hamiltonian path and cycle; tournament;
Hamiltonian-connected; the closure of a graph (for Bondy–Chvátal).

THMS: **Euler's theorem** (landmark): a connected graph has an Eulerian circuit
iff every degree is even, and an Eulerian trail iff exactly two degrees are odd
— with the directed version stated separately; Hierholzer's construction as the
existence proof; **Dirac's theorem** ($\delta \ge n/2$, $n \ge 3$ $\Rightarrow$
Hamiltonian, landmark); **Ore's theorem** (the degree-sum condition, which
implies Dirac — state the implication as an item, so the two are not two
notions); Bondy–Chvátal via the closure; every tournament has a Hamiltonian
path (Rédei, an induction); every strongly connected tournament is Hamiltonian
(Camion) — keep if the page is under the cap; a Hamiltonian graph is
2-connected.

FS: a connected graph with all degrees even has a Hamiltonian cycle; Dirac's
bound $n/2$ can be lowered to $n/2 - 1$ (witness: two disjoint copies of
$K_{n/2}$, and the near-extremal witness is the point); every graph with a
Hamiltonian path has a Hamiltonian cycle; Eulerian and Hamiltonian are dual
notions.

B: the Königsberg bridges as the historical instance, stated as a multigraph
degree computation; the Petersen graph is not Hamiltonian (a real, finite case
analysis — **keep only if it can be written as a bounded number of numbered
steps**; if not, DROP with a note, because a hand-waved case check is worse than
no item); $K_{3,3}$ is Hamiltonian; a graph satisfying Ore but not Dirac.

CEX: an Eulerian non-Hamiltonian graph and a Hamiltonian non-Eulerian one; a
graph just below Dirac's bound with no Hamiltonian cycle.

Traps. (i) Hierholzer's argument is a construction and every step must be a
numbered step; "keep walking until stuck" is not one. (ii) There is no
characterisation of Hamiltonicity, and the page must say so plainly, in the
non-decaying form (what is proved here), not as a claim about mathematics at
large. (iii) The Petersen item is the page's size risk.

Forward references: NONE.

## GT-4. Matchings, Covers, Menger and Network Flows  (order 195, combinatorics)

`requires`: `eulerian-and-hamiltonian-graphs` (193),
`chains-antichains-sperner-and-dilworth` (173),
`filters-and-ultrafilters` (12)

**The ordering decision this page records.** Two coherent syllabi exist: Diestel,
West, Cambridge and Bollobás prove Menger and Hall combinatorially and treat
flows separately; Oxford B8.5 derives "Menger's theorem and Hall's theorem" as
applications of max-flow min-cut. **This scaffold takes the first route**, and
the reason is a dependency reason, not a taste: the flow route makes Menger and
Hall inherit Ford–Fulkerson's integrality-and-termination hypothesis, which
neither of them needs. Flows come afterwards and re-derive both as corollaries,
with an explicit agreement remark.

DEFS: matching, maximal vs **maximum** matching (two words, one letter apart,
and a `rem-` fixing them), perfect matching, $\nu(G)$; vertex cover, $\tau(G)$;
augmenting path; a system of distinct representatives; network, capacity, flow,
value, cut; the residual network.

THMS: **Berge's theorem** (a matching is maximum iff there is no augmenting
path, landmark); **Hall's marriage theorem** (landmark), proved combinatorially
by induction, with the SDR restatement; **König's theorem** ($\nu = \tau$ in
bipartite graphs, landmark) and the König–Egerváry edge-cover form; the
defect version of Hall; **Tutte's 1-factor theorem** (landmark; Lovász's proof,
elementary); the Tutte–Berge formula; **Menger's theorem** in all four forms
(vertex/edge, local/global, undirected/directed), proved by induction on edges
(landmark); the global vertex form: $G$ is $k$-connected iff any two vertices
are joined by $k$ internally disjoint paths (Whitney) — **this is the form
GT-8's Kuratowski proof consumes**, so it is a numbered A-page theorem;
**max-flow min-cut** (landmark) for **integer or rational** capacities, with the
termination argument explicit and the hypothesis in the Statement; the
integrality theorem; **Menger and Hall re-derived from max-flow min-cut**, each
with an agreement remark naming the first proof; **the infinite marriage theorem
for a family of finite sets** (Rado), whose Statement names **BPI** and cites
the published `thm-ultrafilter-lemma` (§7).

FS: Hall's condition is sufficient for a family of arbitrary infinite sets
(denied version, §9.17 — the `fs-` states it and refutes it with the standard
witness: one set $\mathbb{N}$ and countably many singletons... **check the
witness closes from published material; if it does not, this `fs-` DROPS and
the denial note stands alone**); every maximal matching is maximum; $\nu = \tau$
in every graph (witness $C_5$ or $K_3$); Ford–Fulkerson terminates for arbitrary
real capacities (the classic irrational-capacity non-termination example —
**keep only if it can be built from published real-analysis material; else DROP
with a note**, since it is the honest reason the Statement says rational).

B: a bipartite graph with a perfect matching found by augmenting paths; Hall's
condition failing on a concrete family; $K_3$ with $\nu = 1 < 2 = \tau$; a small
network with its max flow and min cut exhibited; the SDR of a small set system.

CEX: a maximal matching that is not maximum; a graph satisfying Tutte's
condition minus one component; a non-bipartite graph where König fails.

Traps. (i) Menger's four forms are four statements; prove one and derive the
others, and say which is primary. (ii) The rational-capacity hypothesis is
load-bearing and must be in the Statement, not the proof. (iii) The BPI cost of
the infinite marriage theorem goes in the Statement (§7), and the page carries a
`rem-choice-ledger`. (iv) Maximal/maximum is this page's notational trap.

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

FS: the Yoneda lemma needs $\mathcal{C}$ to be small; $\operatorname{Nat}(F,G)$
is a set for arbitrary functors between locally small categories (§6.3(2), and
the honest refutation is a size argument — **if it cannot be written as a proof
from the library's cardinal arithmetic at 229, it becomes a Remark**); two
non-isomorphic objects can have isomorphic hom-functors.

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
| 177/178 | `linear-recurrences-and-rational-generating-functions` | Linear Recurrences and Rational Generating Functions | combinatorics | 18 / 12 |
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
| 395/396 | erdos-hajnal-property-and-homogeneous-sets | erdos-hajnal-property-and-homogeneous-sets-examples | EH constants, the conjecture, complement invariance, monotonicity and family/single-graph formulations. |
| 397/398 | modules-substitution-and-prime-graphs | modules-substitution-and-prime-graphs-examples | Modules, prime graphs, substitution and the Alon–Pach–Solymosi theorem (1.4). |
| 399/400 | regular-pairs-and-induced-counting | regular-pairs-and-induced-counting-examples | Density, regularity, energy increment, slicing, induced counting and induced removal. |
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
