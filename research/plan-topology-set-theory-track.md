# Topology and set theory track: ordinals/cardinals, Euclidean space, and the homotopy block

Prose scaffold, owner-commissioned 2026-07-27 (Tom). Companion to
`research/plan-topology-track.md`, `research/plan-algebra-track.md` and
`research/plan-realanalysis-pages.md`. Machine-readable half:
`research/plan-spec.json`.

> **TS-D2 IS APPLIED (orchestrator, 2026-07-28).** All 24 pages are in
> `research/plan-spec.json` at the orders this file states, the renumber shifted
> 38 existing pages, and `validate-plan.mjs` reports the result acyclic and
> consistent with no forward-pointing `requires`. Two corrections to what this
> file says about the splice:
>
> - **The spec goes 206 → 230 pages, not 206 → 218.** The "218" in TS-D2 counts
>   the 12 A-pages and forgets the 12 B companions the same sentence asks for.
> - **The two ST spec ids were not stated here and had to be coined**:
>   `ordinal-arithmetic` (ST-1) and `cardinal-arithmetic-and-cofinality` (ST-2).
>   Every other id in this file was already fixed by the `requires` lines of the
>   pages above it, and those were used verbatim.
>
> The four `requires` edits owed at splice time are applied. Three of them are
> reported by `validate-plan` as `[redundant-prereq]` — reachable transitively —
> and are kept deliberately, on the same ground as amendment C4: a direct edge
> names the page's load-bearing prerequisite, and the reader's Prerequisites
> section renders from the item closure regardless.
>
> Published-claim decay this splice creates is staged in
> `research/ts-d2-published-amendments.md`. Order 213 falsifies four published
> sentences about second countability and separability.

This file is NOT normative: `SCHEMA.md`, `CLAUDE.md`, `LEVELS.md` and
`ARCHITECTURE.md` win wherever they differ.

**AUTHORITY BOUNDARY (owner decision TS-D3).** This file is authoritative ONLY
for the four new blocks it defines: **ST** (set theory, 2 A-pages), **EU**
(Euclidean space, 1 A-page), **FG** (free groups, 2 A-pages), **HT** (homotopy,
7 A-pages) — 12 A-pages, 24 pages with B companions. It sits BESIDE
`plan-topology-track.md`, which remains authoritative for the general-topology
pages T1–T10 (spec ids `connectedness` … `stone-weierstrass-general`). The only
thing this file says about those pages is the Alpha-addressed amendments list in
§"Amendments to the existing scaffold". Two scaffolds must never claim the same
page.

**ORDER-STALENESS WARNING.** Every order in this file is stated in the
POST-TS-D2 numbering (the renumber table below). `plan-topology-track.md`
internally quotes orders from before the 2026-07-27 insertions (its own banner
cites "plan order 104" for a page the spec now holds at 187, and its M3 header
says 28 for a page now at 106); after TS-D2 both files' neighbours shift again.
Recompute from `plan-spec.json`; never quote an order from prose.

**ORDER-CORRECTION TABLE (Alpha-F1, 2026-07-28), verified page by page against
`research/plan-spec.json`.** A THIRD renumber (the algebra-track insertion) landed
after TS-D2, so every order stated in this file's headings, well-definedness table
and scope denials is now low. The spec ids are stable and are the safe reference;
the orders below are the current truth, and each block's B companion sits at the
A order $+\,1$.

| block | spec id | this file says | spec order |
|---|---|---|---|
| ST-1 | `ordinal-arithmetic` | 185 | **245** |
| ST-2 | `cardinal-arithmetic-and-cofinality` | 187 | **247** |
| EU-1 | `the-topology-of-euclidean-space` | 197 | **257** |
| FG-1 | `free-groups-and-presentations` | 56 | **60** |
| FG-2 | `free-products-and-amalgamation` | 58 | **62** |
| HT-1 | `homotopy-and-homotopy-equivalence` | 229 | **289** |
| HT-2 | `the-fundamental-group` | 231 | **291** |
| HT-3 | `covering-spaces-and-lifting` | 233 | **293** |
| HT-4 | `the-fundamental-group-of-the-circle` | 235 | **295** |
| HT-5 | `the-seifert-van-kampen-theorem` | 237 | **297** |
| HT-6 | `classification-of-covering-spaces` | 239 | **299** |
| HT-7 | `applications-of-the-fundamental-group` | 241 | **301** |

The T-page orders this file quotes in §"Amendments to the existing scaffold" are
stale by the same shift: `connectedness` is **253**, `compactness` **255**,
`partitions-of-unity-and-paracompactness` **269**, `metrization-theorems` **275**,
`complete-metrizability-and-baire` **277**, and the Euler-formula page
`the-complex-exponential-and-eulers-formula` **189** (not 167). `def-symmetric-group`
in well-definedness row 10 is homed on `monoids-groups-and-subgroups`, order **24**,
not 20.

---

## Why this track exists

The owner's commission (2026-07-27): point-set topology from the ground up
including separation axioms, connectedness and path connectedness, compactness,
the equivalent characterisations of $\mathbb{R}^n$, fundamental groups and
homotopy theory, the major 20th-century point-set results; and undergraduate
set theory — ordinals, cardinals, everything up to transfinite induction.

The reconciliation (verified from disk, 2026-07-27): most of that already
exists or is scaffolded. Published: `metric-spaces` (102),
`completeness-and-uniform-continuity` (104), `compactness-in-metric-spaces`
(106), `topological-spaces-and-continuity`, `subspaces-products-and-quotients`,
`order-zorn-and-the-axiom-of-choice` (10), `filters-and-ultrafilters` (12),
`countability-and-uncountability` (18), `ordinals-and-transfinite-recursion`
(183). Scaffolded and adequate: the 17 general-topology A-pages of
`plan-topology-track.md` T2–T10 (connectedness through Stone–Weierstrass),
which cover separation axioms, path connectedness, compactness, Tychonoff,
Urysohn, Tietze, metrization, Baire, Ascoli–Arzelà.

What is genuinely missing, and what this file scaffolds:

1. **Ordinal arithmetic does not exist at all** (grep of `items/`: zero
   ordinal-arithmetic items), **$\omega_1$ has no item anywhere** (only the ‡
   remark `rem-aleph-one-dowker-space-open`), and "every countable subset of
   $\omega_1$ is bounded" — the engine of the long line and of the T5/T7/T8
   counterexamples — is unhomed. → **ST-1**.
2. **No cardinal arithmetic of any kind**: no $\kappa+\lambda$, no Hessenberg,
   no alephs-as-hierarchy, no cofinality, no König. `def-cardinal` (published,
   183) stops at the definition. → **ST-2**.
3. **No page assembles the equivalent characterisations of $\mathbb{R}^n$.**
   The pieces are published (`thm-heine-borel-rn`, `lem-metrics-on-rn`,
   `lem-product-topology-on-rn`, `lem-real-and-metric-notions-agree`) or
   planned (`rn-as-a-normed-space`, 145). → **EU-1**.
4. **Fundamental groups and homotopy are entirely deferred**
   (`library/not-proved-here/deferred-algebraic-topology.md`, still draft).
   → **FG-1/2 + HT-1…7**, the un-deferral of decision TS-D1.

---

## The owner decisions, 2026-07-27 (Tom's commission)

**TS-D1. Homotopy block at full seven-page scope.** Offered 3/5/7 pages, the
owner chose 7: homotopy, the fundamental group, covering spaces and lifting,
the circle, the FULL Seifert–van Kampen theorem (amalgamated form), the
classification of covering spaces with the universal cover and deck
transformations, and an applications page. This forces two algebra pages (free
groups; free products and amalgamation) that nothing else in the library needs.
Consequence accepted by the owner: as HT publishes, entries of the ‡ catalogue
`deferred-algebraic-topology` become real theorems and are removed or amended —
each such removal returns to the owner for explicit approval at publish time
(no theorem or example is ever removed without it). Verified blast radius: as
of 2026-07-27 NO proved item cites any of the 17 ‡ remarks on that page; only
the remarks cite each other, and the catalogue page itself is still
`status: draft`.

**TS-D2. Placement.** Four moves, approved as a package:

1. **FG-1/FG-2 with B companions take orders 56–59, inside the reserved
   band.** This AMENDS the algebra track's decision D2, which reserved 56–67
   and 94–97 for Sylow, Galois and the finitely-generated abelian structure
   theorem; the owner approved spending two pair-slots of it, leaving six pairs
   (60–67, 94–97) for the original purpose. No renumber; the pages need
   nothing above order 40.
2. **ST-1/ST-2 with B companions at 185–188**, directly above
   `ordinals-and-transfinite-recursion` (183): every page at old order
   185 and above shifts **+4**.
3. **EU-1 with B companion at 197/198**, directly after the general
   `compactness` pair: every page at old order 193 and above shifts a further
   **+2** (so **+6** total from old 193 up).
4. **HT-1…HT-7 with B companions appended at 229–242.** No further shift.

Net: the spec goes from 206 to **230** pages (this originally read 218, which
counted the A-pages and dropped the B companions; corrected at splice time,
2026-07-28). Relative order of all existing pages is preserved, so no existing
citation can become forward-pointing. Per `LEVELS.md`: after the splice, grep the
prose scaffolds for the word "order" AND for bare numbers, and verify section
headings against the spec.

**TS-D3. This file sits beside `plan-topology-track.md`** (authority boundary
above). Alpha applies the amendments list; Tom never writes that file.

**TS-D4. Category.** The HT pages are homed in the existing `topology`
category (which grows to 24 A-pages). No new index group, no change to the
frozen `web/lib/library-categories.ts`. FG pages: `abstract-algebra`. ST
pages: `foundations`. EU page: `topology`.

**TS-D5. Three standing requirements, owner's words**, binding every page in
this file: (1) every definition carries its well-definedness obligations as
NUMBERED ITEMS (the table below); (2) forward references are minimized — the
blocks are layered so that **zero load-bearing forward references exist across
all 12 A-pages**, and every page section below ends with an explicit
forward-reference statement; (3) anything requiring machinery outside the
library's published-plus-planned scope is DROPPED with a recoverable note (the
scope-denials section), the sole exemption being the adopted choice axioms
(AC, AC$_\omega$, DC) and independence facts about them.

---

## The renumber table (TS-D2)

| old order | new order | pages |
|---|---|---|
| 1–55 | unchanged | everything below the reserved band |
| 56–59 | — | **NEW: FG-1 A/B, FG-2 A/B** (band slots spent) |
| 60–67, 94–97 | unchanged | reserved band, still reserved |
| 68–93, 98–184 | unchanged | LA, analysis, metric topology, ordinals |
| — | 185–188 | **NEW: ST-1 A/B, ST-2 A/B** |
| 185 → 189, 186 → 190 | | `topological-spaces-and-continuity` pair |
| 187 → 191, 188 → 192 | | `subspaces-products-and-quotients` pair |
| 189 → 193, 190 → 194 | | `connectedness` pair |
| 191 → 195, 192 → 196 | | `compactness` pair |
| — | 197/198 | **NEW: EU-1 A/B** |
| 193 → 199 … 222 → 228 | +6 | `nets-and-filters` … `stone-weierstrass-general-examples` |
| — | 229–242 | **NEW: HT-1 … HT-7, A/B pairs** |

**`requires` edits owed at splice time** (orchestrator; ids, not orders):
`connectedness` += the ST-1 page (the long line); `compactness` += ST-1 (the
$\omega_1$ and long-line counterexamples); `hereditary-and-productive-separation`
+= ST-1 (the Tychonoff plank $[0,\omega_1] \times [0,\omega]$);
`countability-axioms-and-cardinal-functions` += ST-2 (cardinal functions take
cardinal values); `metrization-theorems` and `complete-metrizability-and-baire`
inherit transitively — declare directly only if an item cites directly.

---

## Well-definedness obligations (TS-D5 req. 1)

Each is a REQUIRED numbered item on its page, never a parenthetical, per the
WORKFLOW definition-justification rule.

| # | page | the definition | what must be proved |
|---|---|---|---|
| 1 | 185 (spec **245**) | ordinal $\alpha+\beta$, $\alpha\cdot\beta$, $\alpha^\beta$ | each exists and is unique, via the new bridge item `lem-recursion-on-the-ordinals` (the published `thm-transfinite-recursion` is stated for a well-order, i.e. a SET, and gives a class operation only after a coherence argument that its uniqueness clause supplies); THREE cases at $0$, at a successor and at a limit via `def-limit-ordinal`, never two; the exponentiation limit clause runs over $0 < \beta < \lambda$ so that $0^\lambda = 0$; conventions $0^0 = 1$ and $\alpha^0 = 1$ stated where defined |
| 2 | 185 (spec **245**) | ordinal subtraction and division | for $\alpha \le \beta$ a UNIQUE $\gamma$ with $\alpha + \gamma = \beta$; unique $(\xi, \rho)$ with $\beta = \alpha\cdot\xi + \rho$, $\rho < \alpha$ — both are what CNF rests on |
| 3 | 185 (spec **245**) | **Cantor normal form** | existence AND uniqueness of the representation $\alpha = \omega^{\beta_1} c_1 + \cdots + \omega^{\beta_k} c_k$; uniqueness is what licenses the definite article |
| 4 | 185 (spec **245**) | **$\omega_1$** | defined as the Hartogs number $\aleph(\omega)$ (`thm-hartogs`, published, choice-free); a numbered item proves it is the LEAST uncountable ordinal, and that it is a cardinal |
| 5 | 185 (spec **245**) | agreement with published arithmetic on $\omega$ | ordinal $+$ and $\cdot$ restricted to $\omega$ AGREE with the published Peano operations (`thm-omega-is-peano-system`) — the dictionary item; without it the library holds two arithmetics on $\mathbb{N}$ that say nothing to each other, the level-7 two-notions defect by construction |
| 6 | 187 (spec **247**) | cardinal $\kappa \oplus \lambda$, $\kappa \otimes \lambda$, $\kappa^\lambda$ | TWO obligations, not one, and they are discharged by two items. `lem-cardinality-of-a-well-orderable-set` first isolates the ZF half of `def-cardinal` (which is stated under AC), so that $\lvert X \rvert$ exists for any well-orderable $X$ without choice. `lem-cardinal-operations-are-well-defined` then proves representative-independence ($A \approx A'$, $B \approx B'$ imply $A \sqcup B \approx A' \sqcup B'$, $A \times B \approx A' \times B'$, ${}^B A \approx {}^{B'}A'$) AND that $\kappa \sqcup \lambda$ and $\kappa \times \lambda$ carry explicit well-orders, so $\oplus$ and $\otimes$ are ZF operations while $\kappa^\lambda$ needs AC |
| 7 | 187 (spec **247**) | the aleph hierarchy $\alpha \mapsto \aleph_\alpha$ AND the beth hierarchy $\alpha \mapsto \beth_\alpha$ | one item, `cor-the-aleph-and-beth-hierarchies-are-well-defined`: both exist and are unique by `lem-recursion-on-the-ordinals` (the published `thm-transfinite-recursion` is stated for a SET and both operations are defined at every ordinal); each value is an infinite cardinal; each is strictly increasing and continuous at limits. Exhaustiveness is a SEPARATE numbered theorem, `thm-every-infinite-cardinal-is-an-aleph`, because it is proved by transfinite induction and not by the recursion. The successor cardinal $\kappa^{+} = \aleph(\kappa)$ is `lem-successor-cardinal-exists` and precedes both |
| 8 | 187 (spec **247**) | **cofinality** $\operatorname{cf}(\alpha)$ | `lem-cofinality-is-well-defined`: the collection of ordinals $\beta$ admitting a map $\beta \to \alpha$ with cofinal range is nonempty (the identity witnesses $\beta = \alpha$), so a least exists; and the witnessing map may always be taken strictly increasing. That $\operatorname{cf}(\alpha)$ is a regular CARDINAL is `thm-cofinality-basics` and is a theorem, not part of the definition — stating it inside the definition would make the definition circular, since regularity is defined through $\operatorname{cf}$ |
| 9 | 197 (spec **257**) | polygonal path, and concatenation | the concatenation of finitely many segments is a path (pasting lemma, published `lem-continuity-is-local-and-pastes`) |
| 10 | 56 (spec **60**) | **the free group $F(S)$** | associativity of reduced-word multiplication — by van der Waerden's trick: realise the operations as permutations of the set of reduced words via the published `def-symmetric-group` (`monoids-groups-and-subgroups`, spec order 24), so associativity is inherited from composition instead of a case analysis |
| 11 | 56 (spec **60**) | rank of a finitely generated free group | $F(S) \cong F(T)$ with $S, T$ finite forces $\lvert S\rvert = \lvert T\rvert$, by counting homomorphisms to $\mathbb{Z}/2$ with the published counting lemmas of `finite-counting-and-binomial-coefficients` (spec order 20). (Infinite rank: DROPPED here, see denials — the cardinality argument needs ST-2 at spec order 247, above this page) |
| 12 | 56 (spec **60**) | presentation $\langle S \mid R \rangle$ | the normal closure of $R$ exists (intersection of the normal subgroups containing $R$, nonempty family) and the quotient is a group |
| 13 | 58 (spec **62**) | free product $G * H$ (and arbitrary families) | associativity again by van der Waerden; the normal-form theorem (uniqueness of reduced words) is a separate numbered theorem |
| 14 | 58 (spec **62**) | amalgamated product $G *_A H$ | it is a quotient of $G * H$ by a normal closure, hence a group; its universal property (pushout) proved outright |
| 15 | 231 (spec **291**) | **the operation on $\pi_1(X, x_0)$** | concatenation respects path-homotopy classes; associativity and inverses up to homotopy via explicit reparametrisation lemmas |
| 16 | 231 (spec **291**) | $\pi_1(f)$, and change of basepoint | $f_*[\gamma] := [f \circ \gamma]$ independent of representative; the basepoint isomorphism depends on the CLASS of the connecting path, stated where defined (the two-path witness needs a nonabelian $\pi_1$, so it lives on HT-5's B page — see traps) |
| 17 | 235 (spec **295**) | **the degree of a loop in $\mathbb{R}/\mathbb{Z}$** | independent of the chosen lift (unique lifting, fixed start) AND of the representative loop (homotopy lifting) — two separate steps, in that order |
| 18 | 237 (spec **297**) | the van Kampen homomorphism | the map out of $\pi_1(U) *_{\pi_1(U \cap V)} \pi_1(V)$ is well defined via the universal property of FG-2, before surjectivity or injectivity is argued |
| 19 | 239 (spec **299**) | **the universal cover $\widetilde{X}$** | the basis of the constructed topology is a basis (published `thm-basis-criterion`); the projection is well defined on path classes and is a covering map |

---

## Scope denials (TS-D5 req. 3)

Dropped from the scaffold, each with what would license it. A dropped item is
deferred, not deleted.

1. **Normal form / injectivity of the factors in $G *_A H$.** Van Kampen needs
   only the universal property, and every application below amalgamates over
   the trivial group, where FG-2's plain free-product normal form suffices.
   Licensed by a combinatorial-group-theory page (Schreier coset arguments).
2. **Infinite-rank invariance for free groups** ($F(S) \cong F(T) \Rightarrow
   \lvert S \rvert = \lvert T \rvert$ for infinite $S$). The argument runs
   through $\lvert F(S)\rvert = \max(\lvert S\rvert, \aleph_0)$, which is ST-2
   cardinal arithmetic at spec order 247, ABOVE the FG pages at 60 and 62.
   Finite rank is proved at FG-1. Licensed by: a later item, on any page above
   247, citing both — recorded here so it is not silently forgotten. (ST-2 is
   scaffolded at `frontier-2`; the FG pages are not built, so the licence is
   still open.)
3. **Nielsen–Schreier** (subgroups of free groups are free). The honest proofs
   run through covering spaces of graphs or through Schreier transversals,
   either being a page of machinery. Licensed by a graphs-and-coverings page
   after HT-6.
4. **$\pi_1$ of an INFINITE wedge of circles is free of infinite rank.** Van
   Kampen as proved at HT-5 handles two open sets, hence finite wedges by
   induction; the infinite case needs a direct-limit argument. Licensed by a
   van Kampen extension (directed covers). The Hawaiian earring is NOT this
   space and must never be offered as it (the ‡ catalogue already says so).
5. **Jordan curve theorem.** Stays ‡ (`rem-jordan-curve-theorem`). Even with
   $\pi_1(S^1)$ the standard proofs need genuinely more. Licensed by a
   homology track, or a dedicated hard-analysis proof page.
6. **Invariance of domain; dimension invariance for general $n$.** Needs
   homology; stays ‡. The in-scope fragments ARE built: $\mathbb{R} \not\cong
   \mathbb{R}^n$ (EU-1, connectedness) and $\mathbb{R}^2 \not\cong
   \mathbb{R}^n$ (HT-7, via $\pi_1$).
7. **Brouwer fixed point, $n \ge 3$.** Stays ‡; dimension 2 is proved at HT-7
   and `rem-brouwer-fixed-point` is AMENDED, not removed. Licensed by homology
   or a Sperner's-lemma page.
8. **Hahn–Mazurkiewicz.** Licensed by a Peano-continua page. The honest
   fragment — a space-filling curve — goes to the T8 pages as an amendment
   (below), not here.
9. **Hawaiian earring: $\pi_1$ uncountable and not free.** Needs inverse
   limits / infinite free products; stays ‡. The no-universal-cover half IS
   proved (HT-7).
10. **Higher homotopy groups $\pi_n$, $n \ge 2$.** Not commissioned beyond
    "homotopy theory", read as: homotopy, homotopy equivalence, $\pi_1$,
    coverings. `rem-warsaw-circle-weakly-contractible` stays ‡. Licensed by
    a dedicated extension.
11. **Surface classification, CW complexes, attaching cells beyond the
    published adjunction machinery.** Not commissioned; the torus is handled
    as a product, not a polygon-with-identifications.
12. **CH/GCH proved either way; GCH $\Rightarrow$ AC.** Independence facts
    stay ‡ on `deferred-set-theory-beyond-choice` per the axiom exemption;
    ST-2 states, cites, never proves.
13. **The cofinality FUNCTION $\operatorname{cf}(\alpha)$, and regularity or
    singularity of $\omega_1$.** ST-1 defines only *cofinal subset of an
    ordinal*, which is all its boundedness theorem needs. The function and the
    regular/singular vocabulary are ST-2's (spec order 247), and 247 is unbuilt
    at frontier-1. Licensed by: building ST-2. **DISCHARGED at frontier-2
    (2026-07-29): ST-2 is scaffolded at spec order 247, and defines
    $\operatorname{cf}$, regular and singular.**
14. **$\aleph_1$ as a notation, and $\aleph_1 \le 2^{\aleph_0}$.** ST-1 mints
    $\omega_1$ and proves it is a cardinal, but the aleph HIERARCHY
    $\alpha \mapsto \aleph_\alpha$ is ST-2's well-definedness obligation #7. The
    scaffolded page therefore writes $\omega_1$ throughout and never $\aleph_1$.
    Licensed by: ST-2. **DISCHARGED at frontier-2 (2026-07-29): 247 defines
    $\aleph_\alpha$ and records $\aleph_0 = \omega$, $\aleph_1 = \omega_1$;
    $\aleph_1 \le 2^{\aleph_0}$ is on its B page 248.**
15. **Ordinal arithmetic on the LEFT is not developed beyond monotonicity.**
    Right subtraction, left division, and the fixed-point (Veblen) theory of
    normal functions are dropped; $\varepsilon_0$ is exhibited by hand instead.
    Licensed by: a dedicated normal-functions page.
16. **Goodstein sequences, and any proof-theoretic use of Cantor normal form.**
    Not commissioned, and the termination proof needs transfinite induction up to
    $\varepsilon_0$ plus arithmetic coding. Licensed by: a proof-theory page.
17. **`fs-` items whose refutation is an independence result.** "$2^{\aleph_0} =
    \aleph_1$ is a theorem of ZFC" and "$\kappa < \lambda \Rightarrow 2^\kappa <
    2^\lambda$" are dropped at 247. Their refutations are Cohen's and Easton's
    theorems, which are recorded-not-proved, and an `fs-` Refutation is
    phase-format, so refuting them would use ‡ material as a proof step. The
    self-contained-scope rule allows independence facts about AC as MENTIONS
    only. Both survive as sentences in `rem-cardinal-arithmetic-choice-ledger`,
    which mentions the ‡ records through `external_refs`. Licensed by: a track
    that develops forcing, which is out of scope by construction.
18. **The Suslin line and Suslin trees, and Martin's axiom.** They stay ‡ on
    `deferred-set-theory-beyond-choice` and `open-problems-and-research-frontier`.
    247 supplies cofinality and 253 supplies the order topology of a linearly
    ordered set, but the ccc arguments additionally need separability and the
    countable chain condition, which are `countability-axioms-and-cardinal-
    functions` (spec order 273). Licensed by: page 273.
19. **Cardinal invariants of the continuum**, and any statement of the form
    "$\mathfrak{b}$, $\mathfrak{d}$, $\mathfrak{c}$ satisfy ...". Not
    commissioned; 247 proves the one ZFC constraint that was asked for,
    $\operatorname{cf}(2^{\aleph_0}) > \aleph_0$. Licensed by: a dedicated page.

---

## Un-deferral ledger (consequence of TS-D1)

The ‡ catalogue `deferred-algebraic-topology` (draft) loses or amends entries
as HT publishes. Every removal needs explicit owner approval at that time; ids
are immutable, and the new theorems mint their own `thm-`/`def-` ids — a ‡
`rem-` id is retired via `aliases`, never reused.

| ‡ item | fate | discharged by |
|---|---|---|
| `rem-simple-connectedness` | removed | HT-2 `def-simply-connected` |
| `rem-pi1-circle-is-z` | removed | HT-4 |
| `rem-covering-spaces-and-universal-cover` | removed | HT-3 + HT-6 |
| `rem-semilocal-simple-connectedness` | removed | HT-6 |
| `rem-exponential-sequence-as-covering` | removed once BOTH HT-4 and the Euler-formula page (order 167) are published | HT-4 dictionary + 167 |
| `rem-brouwer-fixed-point` | AMENDED: dim 2 proved, dim $\ge 3$ stays deferred | HT-7 |
| `rem-hawaiian-earring-fundamental-group` | AMENDED: no-universal-cover half proved, $\pi_1$ structure stays | HT-7 |
| `rem-riemann-surface-of-log` | AMENDED: branches-as-lifts becomes statable against HT-3 | HT-3 + 167 |
| `rem-dimension-invariance-of-euclidean-space` | AMENDED: the $\mathbb{R}^2$ case joins the $\mathbb{R}$ case as proved | HT-7 |
| remaining 8 (Jordan, invariance of domain, homology, de Rham, Hopf, shape, Warsaw circle, classical continua) | stay | — |

---

## Amendments to the existing scaffold (addressed to Alpha; Tom does not write `plan-topology-track.md`)

1. **`compactness` (new 195):** add Kelley's converse, Tychonoff $\Rightarrow$
   AC, closing F1's promise "AC $\iff$ Tychonoff". Short: cofinite-style
   topologies on the factors.
2. **`partitions-of-unity-and-paracompactness` (new 209):** ensure **Stone's
   theorem** (every metric space is paracompact) is listed by name; T5's list
   currently has paracompact $\Rightarrow$ normal but not Stone.
3. **`metrization-theorems` / `complete-metrizability-and-baire` (new
   215/217):** add **Brouwer's characterisation of the Cantor set** (nonempty
   compact metrizable perfect totally disconnected $\cong$ the Cantor set) and
   a **space-filling curve** (from T8's existing Cantor-surjection theorem by
   interpolation). Exact homes are the scaffolding Beta's choice.
4. **`connectedness` (new 193):** the parenthetical "(simply connected:
   forward pointer only)" now has a real target — declare `forward_refs` to
   HT-2's `def-simply-connected` once planned, Remarks-only. The long line and
   its connectedness theorem cite ST-1's $\omega_1$ items; `requires` gains
   the ST-1 page.
5. **General:** orders quoted inside `plan-topology-track.md` predate two
   renumbers and now a third; recompute from the spec (banner already present
   in that file, TS-D2 makes it more wrong).

---

# The pages

Format per page: order, category, `requires` (direct; Beta computes the
closure), inventory, traps, forward-reference statement. Item ids are
suggestions for step 1, not commitments, except where a well-definedness row
or bridge fixes one. Every A page has its examples companion; B content is
listed with its A page. B pages are leaves: nothing outside a B page may cite
an item homed there. ~30 items is the `validate-plan` size ceiling; inventories
here are written to land at 22–28.

---

## ST-1. Ordinal Arithmetic and the First Uncountable Ordinal  (order 185, foundations)

**frontier-1 audit, 2026-07-28 (batch 1). Six notes bind authoring of this page
pair.** (0) THE HEADING ORDER IS STALE. This page is `ordinal-arithmetic` at spec
order **245**, its companion `ordinal-arithmetic-examples` at **246** (verified
against `research/plan-spec.json`, 2026-07-28); "185/186" is the post-TS-D2
numbering, which a later renumber superseded. See the order-correction table in
the ORDER-STALENESS WARNING at the top of this file. (1) THE PUBLISHED RECURSION
THEOREM IS NOT ENOUGH AS QUOTED.
`thm-transfinite-recursion` is stated for a well-order $(W,<)$, i.e. for a SET;
ordinal $\alpha+\beta$ is a class operation defined at every ordinal $\beta$, so
a bridge item is REQUIRED and is scaffolded as `lem-recursion-on-the-ordinals`:
apply the published theorem to each ordinal $\gamma$ (which is a well-order under
$\in$ by clause 2 of `def-ordinal`, whose initial segment below $\beta \in \gamma$
is literally $\beta$), then note that the restriction of $F_\gamma$ to $\delta \in
\gamma$ satisfies the same recursion on $\delta$ and so equals $F_\delta$ by the
published UNIQUENESS clause. Coherence, not a new recursion principle. (2) THE
EXPONENTIATION LIMIT CLAUSE RUNS OVER $0 < \beta < \lambda$, NOT OVER $\beta <
\lambda$. With the naive clause $0^\lambda$ would come out $\ge 1$, since
$0^0 = 1$. With the restricted clause the single formula
$\alpha^\lambda = \bigcup\{\alpha^\beta : 0 < \beta < \lambda\}$ is correct for
EVERY $\alpha$ including $0$, and no case split on $\alpha$ is needed; this is
worth a Remark because most texts split. (3) ORDER-TYPE CHARACTERISATIONS ARE
SCAFFOLDED AS SEPARATE ITEMS (`lem-ordinal-sum-as-an-order-type`,
`lem-ordinal-product-as-an-order-type`), because the recursive definition alone
makes $1 + \omega = \omega$ and $2 \cdot \omega = \omega$ tedious and the order
types make them immediate; both cite the published `thm-mostowski-collapse`.
The product convention is $\alpha \cdot \beta = \operatorname{ot}(\alpha \times
\beta)$ under LAST DIFFERENCES ($\beta$ copies of $\alpha$), which is what makes
$\omega \cdot 2 = \omega + \omega$; state it where it is defined. (4) CANTOR
NORMAL FORM NEEDS $\beta \le \alpha^\beta$ for $\alpha > 1$, otherwise "the
largest $\beta$ with $\omega^\beta \le \alpha$" is not known to exist; that
inequality is scaffolded as a clause of `thm-ordinal-exponent-laws`, together
with continuity at limits, which is what makes the set of such $\beta$ closed and
therefore attain its supremum. (5) NATURAL-NUMBER EXPONENTIATION IS NOT PUBLISHED.
`construction-of-the-natural-numbers` has `def-nat-addition` and
`def-nat-multiplication` and NO exponentiation, so the dictionary item
`thm-ordinal-arithmetic-agrees-on-omega` claims agreement for $+$ and $\cdot$
only, and claims CLOSURE of $\omega$ under all three. Do not write a title
asserting agreement of exponentiation with a Peano operation that does not exist.
(6) $\varepsilon_0$ ON THE B PAGE IS ORIENTATION PLUS ONE HONEST PROOF: define it
as the supremum of the $\omega$-tower (by the published `thm-recursion` over
$\mathbb{N}$, not by any fixed-point theory), then $\omega^{\varepsilon_0} =
\varepsilon_0$ IS proved, from continuity at limits. No fixed-point theorem.

`requires`: `ordinals-and-transfinite-recursion`, `countability-and-uncountability`

DEFS: ordinal addition, multiplication, exponentiation (by transfinite
recursion on the right argument, successor/limit split; well-definedness #1);
$\omega_1$ as $\aleph(\omega)$ (well-definedness #4); cofinal subset of an
ordinal (the definition only — the cofinality FUNCTION is ST-2's).

THMS: associativity of $+$ and $\cdot$; left distributivity
$\alpha(\beta+\gamma) = \alpha\beta + \alpha\gamma$; strict monotonicity in the
right argument, weak in the left; continuity at limits in the right argument;
the agreement item on $\omega$ (well-definedness #5, the dictionary);
subtraction and division with remainder (well-definedness #2); the laws
$\alpha^{\beta+\gamma} = \alpha^\beta \alpha^\gamma$,
$(\alpha^\beta)^\gamma = \alpha^{\beta\gamma}$; **Cantor normal form**
(landmark; well-definedness #3); $\omega_1$ is the least uncountable ordinal
and is a cardinal (#4); **every countable subset of $\omega_1$ is bounded**
(landmark — the engine of the long line, of $\omega_1$'s sequential
compactness, and of the T7/T8 counterexamples), via the published
`def-countable-choice` and `thm-countable-union-of-countable`, with the choice
cost named in the statement; $\sup$ of a countable set of countable ordinals is
countable (the same theorem's working form); a choice-ledger remark in the
style of the published `rem-choice-ledger`, recording that ZF alone cannot
prove the boundedness theorem and pointing at the ‡ Feferman–Levy model
(axiom-independence exemption, mention via `external_refs`, never a dep).

FS: ordinal addition is commutative ($1 + \omega = \omega < \omega + 1$);
ordinal multiplication is commutative ($2 \cdot \omega = \omega <
\omega \cdot 2$); right distributivity holds
($(\omega + 1) \cdot 2 \ne \omega \cdot 2 + 1 \cdot 2$... state the standard
witness $(1+1)\cdot\omega = \omega \ne \omega\cdot 2 = 1\cdot\omega +
1\cdot\omega$); strict monotonicity in the LEFT argument
($1 + \omega = 0 + \omega$).

B: worked sums and products ($\omega \cdot 2$ vs $2 \cdot \omega$ pictured as
order types); $\omega^2$, $\omega^\omega$, $\varepsilon_0$ as
$\sup\{\omega, \omega^\omega, \dots\}$ with $\omega^{\varepsilon_0} =
\varepsilon_0$ (orientation, no fixed-point theory); CNF computed on a concrete
ordinal; the countable-subset-boundedness engine applied: a strictly increasing
$\omega$-sequence in $\omega_1$ has a countable supremum below $\omega_1$.

Traps. (i) The successor/limit case split is everywhere; cite
`def-limit-ordinal` and `lem-omega-least-limit-ordinal`, and check the zero
case separately — three cases, not two. (ii) The dictionary item #5 is not
optional: without it the page mints a SECOND arithmetic on $\mathbb{N}$, the
canonical two-notions defect. (iii) "Uncountable" means `def-countable`'s
negation (order 18); do not re-mint. (iv) $\omega_1$ exists in ZF — Hartogs is
choice-free and this must be SAID, because the boundedness theorem two items
later genuinely needs AC$_\omega$ and the reader must see where the cost
starts. (v) Exponentiation is ORDINAL exponentiation; $2^\omega = \omega$
here, which collides head-on with cardinal exponentiation where
$2^{\aleph_0} > \aleph_0$ — a remark on the notation collision is REQUIRED and
ST-2 links back to it. (vi) `rem-aleph-one-dowker-space-open` (‡, published)
speaks of $\aleph_1$; once $\omega_1$ exists, check its text for decayed
scope-denial claims per the standing sweep.

Forward references: NONE load-bearing. None expected at all.

## ST-2. Cardinal Arithmetic, Cofinality and the Alephs  (spec order 247, foundations)

**frontier-2 audit, 2026-07-29 (batch 1). Seven notes bind authoring of this page
pair.** (1) CARDINALITY MUST BE RE-STATED FOR ZF BEFORE ANYTHING IS DEFINED. The
published `def-cardinal` introduces $\lvert X \rvert$ under the Axiom of Choice,
because it opens with "Assume the Axiom of Choice"; its actual argument needs only
that $X$ carries a well-order. Hessenberg is a ZF theorem and Tarski's theorem is
about the gap between ZF and ZFC, so both are unstatable until the choice-free
half is isolated. `lem-cardinality-of-a-well-orderable-set` is that item and it is
the first on the page: if $X$ is equinumerous with some ordinal there is a least
such ordinal, it is a cardinal, and equinumerous sets receive the same one, all in
ZF. (2) THE OPERATIONS ARE WRITTEN $\oplus$ AND $\otimes$, NOT $+$ AND $\cdot$.
The immediately preceding page defines ordinal $+$ and $\cdot$ on the same
objects with different values ($\omega \oplus \omega = \omega$ while
$\omega + \omega \neq \omega$), and `rem-ordinal-versus-cardinal-exponentiation`
already warns that $\alpha^\beta$ is two operations. Exponentiation keeps the
notation $\kappa^{\lambda}$ under a hard rule stated at the definition: base and
exponent are always alephs or cardinal letters $\kappa, \lambda, \mu$, never
$\omega$ and never an ordinal letter. (3) TWO OF THE FOUR PLANNED `fs-` ITEMS
CANNOT BE WRITTEN AND ARE REPLACED. Trap (i) of this section is decisive: an
`fs-` Refutation is phase-format and may not rest on recorded-not-proved
material, and the self-contained-scope rule allows the independence facts about
AC only as mentions, never as a proof step. So "$2^{\aleph_0} = \aleph_1$ is a
theorem of ZFC" and "$\kappa < \lambda \Rightarrow 2^\kappa < 2^\lambda$" both
DROP (their refutations are Cohen and Easton). What replaces them is what ZFC
actually proves: `fs-the-continuum-has-cardinality-aleph-omega`, refuted outright
by K\"onig ($\operatorname{cf}(2^{\aleph_0}) > \aleph_0 =
\operatorname{cf}(\aleph_\omega)$), and
`fs-cardinal-exponentiation-is-strictly-monotone-in-the-base`, refuted outright
by $\aleph_0 < \aleph_1$ with
$\aleph_0^{\aleph_0} = \aleph_1^{\aleph_0} = 2^{\aleph_0}$. Both are ZFC theorems
of this page's own machinery and neither cites an independence result.
(4) THE BETH HIERARCHY IS FOLDED INTO THE ALEPH ITEMS, not given items of its
own: the recursion, its uniqueness and its continuity are one argument, and
splitting them would put the page over the 30-item ceiling for no mathematical
gain. (5) THE FINITE DICTIONARY IS REQUIRED AND IS THE REASON THIS PAGE DECLARES
`finite-counting-and-binomial-coefficients`. That page's `def-finite-cardinality`
already writes $\lvert A \rvert$, for finite $A$, as a NATURAL NUMBER, and says
in its own remarks that this is not `def-cardinal`'s $\lvert A \rvert$. Without
`thm-cardinal-arithmetic-agrees-with-finite-counting` the library ships two
meanings of $\lvert A \rvert$ and two meanings of $+$ on $\omega$.
(6) EVERY $\omega_1$ FACT THIS PAGE NEEDS IS ALREADY PUBLISHED ON 245.
`thm-countable-subsets-of-omega-one-are-bounded` clause (b) is exactly "no at
most countable subset of $\omega_1$ is cofinal in it", so
`cex-omega-one-has-no-at-most-countable-cofinal-subset` — which is leaf-locked on
the B page 246 and may not be cited — is not needed by anything.
(7) TARSKI NEEDS ONE FACT THAT IS NOT PUBLISHED and must be proved inline: if $A$
is not finite then every natural number injects into $A$, hence
$\aleph(A) \ge \omega$. Two lines by induction: an injection $n \to A$ that is not
surjective extends, and it cannot be surjective or $A$ would be finite. Nothing is
chosen; the extension point is asserted to exist, not selected.

`requires`: the ST-1 page, `order-zorn-and-the-axiom-of-choice`

DEFS: cardinal sum, product, exponentiation (well-definedness #6); the aleph
hierarchy by transfinite recursion (well-definedness #7); **cofinality**
(well-definedness #8); regular and singular cardinals; successor and limit
cardinals; the beth hierarchy $\beth_\alpha$.

THMS: $\kappa + \lambda$ and $\kappa \cdot \lambda$ agree with the published
finite arithmetic on naturals (dictionary, citing the published counting lemmas
of `finite-counting-and-binomial-coefficients`, spec order 20 — the "AA-2 at
order 28" this line used to name predates the counting insertion; the lemmas
are `def-finite-cardinality`, `thm-sum-rule`, `thm-product-rule` — reuse, never
re-mint); $2^\kappa = \lvert \mathcal{P}(\kappa)
\rvert$ (functions-to-$\{0,1\}$ vs subsets); Cantor's theorem restated
cardinally, $\kappa < 2^\kappa$ (cites published `thm-cantor-powerset`);
**Hessenberg's theorem** $\aleph_\alpha \cdot \aleph_\alpha = \aleph_\alpha$,
proved CHOICE-FREE via the canonical (Gödel) well-ordering of
$\alpha \times \alpha$ (landmark); the absorption laws $\kappa + \lambda =
\kappa \cdot \lambda = \max(\kappa, \lambda)$ for infinite cardinals of
well-orderable sets, and for arbitrary sets under AC; every infinite cardinal
is an aleph (AC, via `thm-well-ordering-theorem`); **cardinal comparability
$\iff$ AC** (forward direction from well-ordering; converse via
`thm-hartogs`); **Tarski's theorem: AC $\iff$ $\mathfrak{m}^2 = \mathfrak{m}$
for every infinite cardinal** (the $\mathfrak{m} + \aleph(\mathfrak{m})$
argument — states precisely why Hessenberg's ZF theorem does NOT globalise
without choice); $\operatorname{cf}$ basics: $\operatorname{cf}(\kappa)$ is
regular; $\aleph_{\alpha+1}$ is regular (AC); $\aleph_\omega$ is singular, the
least singular infinite cardinal (in ZFC); **König's theorem** (AC, named in
the statement — it implies choice, so the cost is not decoration);
$\kappa < \kappa^{\operatorname{cf}(\kappa)}$ and
**$\operatorname{cf}(2^{\aleph_0}) > \aleph_0$**, hence $2^{\aleph_0} \ne
\aleph_\omega$ — the exact boundary of what ZFC proves about the continuum,
stated against the published `rem-continuum-hypothesis` (order 18; cite, do
not re-mint) with the independence facts mentioned via `external_refs` to the
‡ `deferred-set-theory-beyond-choice` items (axiom exemption); a
choice-ledger remark for the whole page.

FS: $2^{\aleph_0} = \aleph_1$ is a theorem of ZFC (refuted by citing the
recorded independence — careful: the REFUTATION of this `fs-` can only be the
honest remark-level one, see traps); cardinal exponentiation is determined by
the axioms (same shape); $\aleph_{\alpha}$ is always regular (witness
$\aleph_\omega$); if $\kappa < \lambda$ then $2^\kappa < 2^\lambda$ (the
recorded consistency of $2^{\aleph_0} = 2^{\aleph_1}$ — Luzin; same remark
caution).

B: $\lvert \mathbb{R} \rvert = 2^{\aleph_0} = \beth_1$ (cites the published
uncountability and CSB machinery of order 18); $\aleph_1 \le 2^{\aleph_0}$
under AC; $\operatorname{cf}(\aleph_\omega) = \aleph_0$ computed; an aleph
fixed point $\aleph_\alpha = \alpha$ constructed by recursion (the
$\omega$-iterate); $\beth_\omega$; worked absorption computations.

Traps. (i) THE `fs-` ITEMS ON INDEPENDENCE ARE A HAZARD: an `fs-` item's
Refutation is phase-format and may not rest on ‡ material. The honest design:
state the false claim as "$\dots$ is a theorem of ZFC", and refute by
exhibiting what ZFC ACTUALLY proves (e.g. König's constraint) while the
independence itself stays a Remark citing the ‡ records — if the scaffolding
Beta finds the refutation cannot close without ‡ material, the item DROPS to a
remark, not to a hand-wave. (ii) Cardinal exponentiation vs ordinal
exponentiation: the ST-1 notation-collision remark is cited at the point of
definition. (iii) Operations are defined on cardinals-as-initial-ordinals
(sets), so #6 is about $\approx$-invariance, not about proper classes.
(iv) Hessenberg is ZF for ALEPHS; Tarski is the reason the global statement
costs AC — do not let a Statement quantify over "all infinite sets"
choice-free. (v) Finite counting: `finite-counting-and-binomial-coefficients`
(spec order 20) owns the finite lemmas; cite them. (vi) König's proof uses a choice function TWICE (choosing
representatives and diagonalising); name AC in Facts, not silently.

Forward references: NONE load-bearing. Mentions of independence go through
`external_refs` (‡, exempt class).

## EU-1. The Topology of Euclidean Space  (spec order 257, topology)

**Frontier-4 propagation, 2026-07-30.** The machine scaffold has **23 A-page
items and 6 B-page items**. Its approved direct prerequisites are exactly
`compactness`, `rn-as-a-normed-space`, and
`finite-counting-and-binomial-coefficients`. The first prerequisite already
reaches the connectedness, subspace/product, and metric-compactness results used
below; the finite-counting page supplies the finite-power countability argument
and finite-index constructions.

This is the common home for the equivalent topologies and compactness properties
of Euclidean space. It cites the published metric, norm, product, real-line, and
compactness results rather than restating them.

DEFS: pseudocompact topological space, meaning that every continuous
real-valued map has bounded image, with no separation axiom built into the
term; polygonal path and polygonally connected subset of $\mathbb{R}^n$;
Euclidean spheres and closed balls as subspaces.

THMS: **the ZF Euclidean compactness equivalence** (landmark): for a
**nonempty** subset $A\subseteq\mathbb{R}^n$, compactness, closedness and
boundedness, pseudocompactness, and attainment of both a maximum and a minimum
by every continuous real-valued function are equivalent. The proof separates
the two new pseudocompactness lemmas from the published Heine--Borel and
continuous-image/extreme-value results. Assuming countable choice and dependent
choice, a corollary adds sequential compactness, countable compactness, limit
point compactness, and completeness together with total boundedness, by the
published metric compactness equivalence theorem. The empty subset is excluded
because the extreme-value condition is otherwise false or vacuous, depending on
its formulation.

The product, Euclidean-metric and norm topologies on $\mathbb{R}^n$ agree, and
for $n=1$ they agree with the real-line topology. For open subsets of
$\mathbb{R}^n$, connectedness, path-connectedness and polygonal connectedness
are equivalent; connected components of open sets are therefore open and
polygonally connected. The page also proves local compactness and
$\sigma$-compactness of $\mathbb{R}^n$, that $\mathbb{Q}^n$ is an at most
countable dense subset and rational open boxes form an at most countable basis,
and the compactness of closed balls and positive-radius spheres. It does not use
“separable” or “second countable” as defined terms before
`countability-axioms-and-cardinal-functions`.

For $n\ge 2$, punctured Euclidean space is polygonally connected and
$S^{n-1}$ is path-connected. Radial normalisation is continuous, and the
straight-line map
$H(x,t)=((1-t)+t/\lVert x\rVert_2)x$ is stated with its concrete endpoint,
fixed-point and nonvanishing properties; homotopy terminology is left to the
later homotopy block. Removing a point then proves
$\mathbb{R}\not\cong\mathbb{R}^n$ for $n\ge2$. Norm equivalence is cited from
`rn-as-a-normed-space`, never restated as a new result here.

FS: the published metric false statement “closed and bounded implies compact in
every metric space” is cited rather than re-minted. “Every connected subset of
$\mathbb{R}^n$ is polygonally connected” is refuted by the unit circle. Keep
the claim “every pseudocompact topological space is compact” and refute it
self-containedly on the B page: in an infinite particular-point space every
continuous real-valued map is constant, while the cover
$\{\{p,x\}:x\ne p\}$ has no finite subcover.

B: the closed ball and sphere worked through the choice-qualified compactness
chart; an open bounded set that is not compact; a closed unbounded set that is
not compact; an open Euclidean ball with its straight-segment polygonal path;
$GL_1(\mathbb{R})=\mathbb{R}\setminus\{0\}$ disconnected while
$\mathbb{R}^2\setminus\{0\}$ is polygonally connected; and the infinite
particular-point pseudocompact noncompact space.

Traps. (i) Every clause of either compactness equivalence names the published
item that carries it, and only the genuinely new implications receive new
proofs. Keep the ZF core separate from the
countable-choice-and-dependent-choice extension. (ii) State the radial map and
its concrete properties without importing later homotopy terminology.
(iii) State countable dense subsets and countable bases in full rather than
using countability-axiom vocabulary defined only at order 273. (iv) Segments
and convex combinations cite the existing vector-space and norm structures.

Forward references: NONE. (HT-1 cites INTO this page, not the reverse.)

## FG-1. Free Groups and Presentations  (order 56, abstract-algebra)

`requires`: `group-homomorphisms-and-the-isomorphism-theorems` (32)

DEFS: words over $S \sqcup S^{-1}$ (finite sequences — reuse the library's
finite-tuple machinery, do not re-mint); reduced word; the free group $F(S)$
(well-definedness #10, van der Waerden realisation inside
$\operatorname{Sym}(\text{reduced words})$, citing the published
`def-symmetric-group` at order 20); rank (finite case, well-definedness #11);
presentation $\langle S \mid R \rangle$ and normal closure (well-definedness
#12); finitely generated, finitely presented.

THMS: the reduction of a word terminates in a unique reduced word (the
diamond/induction lemma — this IS the normal-form theorem for $F(S)$);
**the universal property** (landmark): every map $S \to G$ extends to a unique
homomorphism $F(S) \to G$; $F(\{s\}) \cong \mathbb{Z}$ (cites
`thm-int-comm-ring` for the target — NOT the AA-1 B-page items, which are
leaf-locked); $F(S)$ for $\lvert S \rvert \ge 2$ is nonabelian ($ab \ne ba$ as
reduced words — the witness HT-5's `fs-` needs later); **every group is a
quotient of a free group** (landmark); the universal property of
$\langle S \mid R \rangle$: a map $S \to G$ killing $R$ factors uniquely;
presentations computed: $\langle a \mid a^n \rangle \cong \mathbb{Z}/n$
(cites the published NT-3/AA machinery), $\mathbb{Z} \times \mathbb{Z} \cong
\langle a, b \mid aba^{-1}b^{-1} \rangle$ (needed by nothing below but the
natural second example; keep only if the page stays under the size cap).

FS: a subgroup of a finitely generated group is finitely generated (witness:
the commutator subgroup of $F(2)$ — CAREFUL, see traps); every group has a
finite presentation.

B: reduced-word computations in $F(2)$; the extension of a concrete
$S \to \mathbb{Z}/2$ map worked through the universal property; homomorphism
counting $\lvert \operatorname{Hom}(F(S), \mathbb{Z}/2) \rvert = 2^{\lvert S
\rvert}$ for finite $S$ (the rank engine); two different presentations of the
same group.

Traps. (i) Never "check associativity by cases on cancellation" — that is the
famous wrong proof; van der Waerden or nothing. (ii) The `fs-` on subgroups:
the standard witness (commutator subgroup of $F(2)$ infinitely generated)
normally rests on Nielsen–Schreier machinery, which is DENIED (#3). If the
scaffolding Beta cannot close it with an elementary argument (a homomorphism-
counting or abelianisation route), the `fs-` DROPS with a note — do not ship a
refutation resting on an unproved classification. (iii) Infinite rank: denial
#2; the rank definition is stated for finitely generated free groups, titled
accordingly. (iv) `lem-pigeonhole`-style finite counting comes from AA-2
(order 28); cite. (v) This page sits in the reserved band; its `requires` must
not reach above order 55.

Forward references: NONE load-bearing. A Remarks-only orientation note that
free groups exist for van Kampen (HT-5) is permitted once HT-5's items are
planned, `forward_refs`-declared.

## FG-2. Free Products and Amalgamation  (order 58, abstract-algebra)

`requires`: `free-groups-and-presentations` (56)

DEFS: the free product $G * H$, and of an arbitrary family
(well-definedness #13); the amalgamated free product $G *_A H$ over
$\varphi\colon A \to G$, $\psi\colon A \to H$ (well-definedness #14); reduced
sequence (for the normal form).

THMS: the universal property of $G * H$ (it is the coproduct; landmark); the
**normal form theorem for free products** (uniqueness of alternating reduced
sequences, by the van der Waerden action); the factors embed in $G * H$
(corollary of normal form); $\mathbb{Z} * \mathbb{Z} \cong F(2)$ (dictionary
with FG-1 — two constructions, one group, the anti-two-notions obligation);
$G *_A H$ is a group with homomorphisms from $G$ and $H$ agreeing on $A$, and
its **universal property (pushout)** (landmark) — existence and uniqueness of
the induced map, which is all van Kampen consumes; amalgamation over the
trivial group recovers $G * H$.

FS: $G$ and $H$ always embed in $G *_A H$ (FALSE in general only with
non-injective edge maps — state carefully; if the honest witness needs the
denied normal form, the `fs-` DROPS with a note, per denial #1); the free
product of abelian groups is abelian (witness in $\mathbb{Z}/2 * \mathbb{Z}/2$:
$st \ne ts$ by normal form).

B: $\mathbb{Z}/2 * \mathbb{Z}/2$ worked: the element $st$ has infinite order
(normal form) — the infinite dihedral group named as such only if a
presentation item supports it; a pushout computed via the universal property;
the two projections $G * H \to G \times H$ compared.

Traps. (i) Denial #1 is live on this page: injectivity of the factors into
$G *_A H$ is NOT proved here; nothing below may cite it. Statements about
$G *_A H$ are universal-property statements. (ii) Arbitrary families: the
construction is the same reduced-word argument; do not restrict to two factors
and then silently use finitely many at HT-5 — state the finite-family
corollary explicitly. (iii) The dictionary item $\mathbb{Z} * \mathbb{Z}
\cong F(2)$ is mandatory, not decorative.

Forward references: NONE load-bearing.

## HT-1. Homotopy and Homotopy Equivalence  (order 229, topology)

`requires`: `the-topology-of-euclidean-space` (197),
`subspaces-products-and-quotients` (191)

DEFS: homotopy $F\colon X \times [0,1] \to Y$ (product topology published at
191); homotopy relative to a subset; path homotopy; nullhomotopic;
contractible; retraction; **deformation retract** (naming EU-1's concrete
$\mathbb{R}^n \setminus \{0\} \to S^{n-1}$ map as the running example, a
backward citation); homotopy equivalence; the straight-line homotopy.

THMS: homotopy (and path homotopy, and homotopy rel $A$) are equivalence
relations — transitivity via the pasting lemma
(`lem-continuity-is-local-and-pastes`, published); composition respects
homotopy; homotopy equivalence is an equivalence relation; convex subsets of
$\mathbb{R}^n$ are contractible (straight-line; segments via 68/145);
a deformation retract is a homotopy equivalence; contractible spaces are
path-connected; $\mathbb{R}^n \setminus \{0\} \simeq S^{n-1}$ (the EU-1 map,
now in the formalism).

FS: a retract of a space is a deformation retract; homotopy-equivalent spaces
are homeomorphic (witness: $\mathbb{R}^n$ vs a point); a subspace homotopy
equivalent to the whole space is a deformation retract of it (the comb-space
shaped witness — if the witness cannot be built cheaply from published
material, the `fs-` drops to the weaker homeomorphism one; Beta decides,
recorded).

B: the straight-line homotopy worked; the cone on a space is contractible
(cites the published `def-adjunction-cone-suspension`); $[0,1]$ and
$\mathbb{R}^n$ contractible; an explicit retraction that is not a deformation
retract candidate discussed at the level available.

Traps. (i) Reparametrisation lemmas (the square-to-square maps) are stated
once here and cited forever after — HT-2's group axioms die without them.
(ii) $X \times [0,1]$ compactness facts come from 195/106 via
`lem-product-topology-on-rn`-style dictionaries; do not hand-wave "clearly
compact". (iii) Everything on this page is metric-free general topology
EXCEPT the convexity items; keep the hypotheses honest.

Forward references: NONE load-bearing.

## HT-2. The Fundamental Group  (order 231, topology)

`requires`: `homotopy-and-homotopy-equivalence` (229),
`group-homomorphisms-and-the-isomorphism-theorems` (32)

DEFS: concatenation of paths; $\pi_1(X, x_0)$ (well-definedness #15); the
convention item: concatenation order fixed ONCE (a `rem-` recording that
$[\alpha][\beta]$ means $\alpha$ first — the judge-conventions class of
decision), cited by every later computation; induced homomorphism $\pi_1(f)$
and change of basepoint (well-definedness #16); **simply connected** (this is
the definition that discharges ‡ `rem-simple-connectedness`).

THMS: $\pi_1(X, x_0)$ is a group (landmark); the change-of-basepoint
isomorphism; functoriality (identities and composition); **homotopy
invariance**: homotopy equivalences induce isomorphisms (landmark; the
basepoint bookkeeping is the real content — budget for it); $\pi_1$ of a
product is the product (universal property of 191); convex sets and all
contractible spaces are simply connected; simply connected $\iff$ any two
paths with common endpoints are path-homotopic.

FS: $\pi_1$ is independent of the basepoint without path-connectedness
(two-component witness, cheap); a continuous bijection induces an isomorphism
on $\pi_1$ (witness available cheaply from published discrete-vs-usual
examples once the circle exists — if not closable at this order, it moves to
HT-5's B; Beta decides, recorded). NOTE: "the fundamental group is abelian" is
DELIBERATELY NOT on this page — its witness needs $F(2) = \pi_1$(wedge), which
is HT-5; the `fs-` is homed there. Same for the two-paths-two-isomorphisms
witness of #16. Recording this here is what stops a scaffolder from planting
an unclosable `fs-` at 231.

B: $\pi_1$ of a convex set computed through the definitions; the
change-of-basepoint isomorphism worked in a path-connected space; a
first-computations item ($\pi_1$ of a product of contractible spaces).

Traps. (i) Every group-theoretic word (homomorphism, isomorphism, kernel)
cites the AA pages (30–32); none is re-minted. (ii) Homotopy invariance's
standard proof via the $\beta_h$ conjugation lemma: state the lemma as its own
item; it is where the errors live. (iii) At this order NO space with
nontrivial $\pi_1$ exists yet in the library — every example is trivial-group;
that is honest and temporary, and the page summary should say so plainly
in a non-decaying form (claims about what THIS PAGE proves, not about what
the library contains).

Forward references: NONE load-bearing. A Remarks-only orientation pointer to
HT-4 ("the first nontrivial computation") is permitted, declared.

## HT-3. Covering Spaces and Lifting  (order 233, topology)

`requires`: `the-fundamental-group` (231), `compactness` (195)

DEFS: evenly covered open set; covering map (convention fixed: $p$ surjective,
every point evenly covered; connectivity is NOT baked into the definition —
each theorem states its own hypotheses); lift of a map; the fiber; degree
(cardinality of the fiber) on a connected base.

THMS: a covering map is open, and a local homeomorphism; the fiber cardinality
is locally constant, hence constant on a connected base; **unique lifting**
(two lifts of a map on a connected domain agreeing at a point agree — the
clopen argument); **path lifting** (landmark); **homotopy lifting** (landmark)
— both by Lebesgue-number subdivision of $[0,1]$ and $[0,1]^2$, citing the
published Lebesgue number lemma (106), `thm-heine-borel-rn` (106) and the
product dictionary `lem-product-topology-on-rn` (191); the induced map
$p_*\colon \pi_1(E) \to \pi_1(X)$ is injective; the **monodromy action** of
$\pi_1(X, x)$ on the fiber, with orbit–stabiliser bookkeeping citing AA-6
(order 38); the **general lifting criterion**: for $Y$ connected and locally
path-connected, $f$ lifts $\iff$ $f_*\pi_1(Y) \subseteq p_*\pi_1(E)$
(landmark).

FS: every local homeomorphism is a covering map (witness: the restriction of
a genuine covering to a half-open interval — buildable the moment HT-4's
$\mathbb{R} \to \mathbb{R}/\mathbb{Z}$ exists; since that is LATER, the
witness here is instead an inclusion of an open subinterval into $[0,1]$-style
spaces... if no cheap witness closes at 233, the `fs-` moves to HT-4's B page;
Beta decides, recorded); path lifting holds for arbitrary continuous
surjections.

B: the trivial covering $X \times D \to X$ with $D$ discrete; a two-fold
covering of a published quotient example if one closes cheaply; the lifting
theorems traced through a concrete subdivided path.

Traps. (i) This page deliberately proves lifting ONCE, in general — HT-4
specialises and must not re-prove. (ii) The subdivision arguments are where
precheck's phase format bites hardest (nested finite inductions); budget
authoring time. (iii) Local path-connectedness enters ONLY at the lifting
criterion; keep it out of the covering definition. (iv) The degree needs the
dictionary between "cardinality" language (order 18/187) and the fiber — for
finite fibers cite AA-2's counting lemmas, for infinite the `def-countable`
vocabulary; do not reach for ST-2 unless a statement genuinely needs it.

Forward references: NONE load-bearing.

## HT-4. The Fundamental Group of the Circle  (order 235, topology)

`requires`: `covering-spaces-and-lifting` (233),
`sine-cosine-and-the-definition-of-pi` (157) [dictionary item only — see
traps for the exact trig page, which Beta pins at step 1]

DEFS: $S^1 := \mathbb{R}/\mathbb{Z}$ with the quotient topology (published
machinery of 191; the published B-page torus example already treats
$\mathbb{R}/\mathbb{Z}$ — a B item, so it is REBUILT here on the A page from
`def-quotient-topology`, with an agreement remark, exactly the NT-3 pattern
for $\mathbb{Z}/n$); the degree of a loop (well-definedness #17).

THMS: $p\colon \mathbb{R} \to \mathbb{R}/\mathbb{Z}$ is an open quotient map,
restricting to a homeomorphism on every interval of length $< 1$;
$\mathbb{R}/\mathbb{Z}$ is Hausdorff (published `def-hausdorff-space`),
compact (image of $[0,1]$, via 195), path-connected, metrizable via an
explicit metric IF cheap, else omitted; **$p$ is a covering map** (landmark);
**$\pi_1(S^1) \cong \mathbb{Z}$** (landmark): degree is well defined (#17), a
homomorphism to $(\mathbb{Z}, +)$ — the group structure citing
`thm-int-comm-ring` (order 7, A-page; the AA-1 B items are leaf-locked) —
injective (homotopy lifting) and surjective (explicit loops); **the
dictionary item**: $t \mapsto (\cos 2\pi t, \sin 2\pi t)$ induces a
homeomorphism from $\mathbb{R}/\mathbb{Z}$ onto the unit circle of
$\mathbb{R}^2$ (continuous bijection from a compact space to a Hausdorff
space, the compact-to-Hausdorff theorem of 195; trig from the analysis
track).

FS: a nullhomotopic loop in $S^1$ can have nonzero degree (refuted by #17 —
really an `fs-` shaped restatement; keep only if it earns its place); every
continuous map $S^1 \to S^1$ is nullhomotopic (witness: the identity, degree
1); the local homeomorphism `fs-` inherited from HT-3 if it moved here.

B: degree computed for the standard loops $t \mapsto nt$; a homotopy between
two equal-degree loops built through the lifting machinery; the circle as the
first published space with nontrivial fundamental group — the B page states
what became available.

Traps. (i) THE THEOREM NEEDS NO TRIGONOMETRY — $S^1$ is $\mathbb{R}/\mathbb{Z}$
throughout; trig enters ONLY in the dictionary item. If the analysis track's
surjectivity/periodicity facts for $(\cos, \sin)$ live on a different page
than 157 (161/163 candidates), Beta pins the `requires` to the page that
actually carries them — verify on disk, not from this file. (ii) The
$\mathbb{Z}$ trap: the b-leaf rule blocks the obvious citation for
"$(\mathbb{Z}, +)$ is a group"; `thm-int-comm-ring` is the legal source.
(iii) The published torus example's $\mathbb{R}/\mathbb{Z}$ is a B item —
agreement remark required, silent re-definition is the level-7 defect.
(iv) Evenly covered neighbourhoods: the saturation argument for openness of
$p$ must be a step, not a "clearly".

Forward references: NONE load-bearing.

## HT-5. The Seifert–van Kampen Theorem  (order 237, topology)

`requires`: `the-fundamental-group-of-the-circle` (235),
`free-products-and-amalgamation` (58)

THMS: the **generation lemma** (stage 1, its own item): $X = U \cup V$, $U, V$
open, $U \cap V$ path-connected containing the basepoint $\Rightarrow$
$\pi_1(X)$ is generated by the images of $\pi_1(U)$ and $\pi_1(V)$
(Lebesgue-number subdivision, 106/195); **$\pi_1(S^n) = 1$ for $n \ge 2$**
(landmark; corollary of the generation lemma — $S^n$ minus two antipodal
points, stereographic-projection homeomorphisms with the continuity of each
formula CITED into the analysis machinery, not waved; $U \cap V$
path-connected for $n \ge 2$ via EU-1's sphere/annulus items); **the full
Seifert–van Kampen theorem** (landmark): the induced map
$\pi_1(U) *_{\pi_1(U \cap V)} \pi_1(V) \to \pi_1(X)$ (well-definedness #18,
via FG-2's pushout property) is an isomorphism; the wedge $X \vee Y$ of
pointed spaces (via the published `def-adjunction-cone-suspension` /
coproduct-quotient machinery) and **$\pi_1$ of a FINITE wedge of circles is
free of that rank** (landmark; needs the basepoint's neighbourhood
deformation behaviour — for the wedge of circles built from
$\mathbb{R}/\mathbb{Z}$ the required open sets are constructed explicitly;
see traps); $\pi_1(T^2) \cong \mathbb{Z} \times \mathbb{Z}$ via the PUBLISHED
product identification of the torus (191 B has the example; the A-page route
is $\pi_1$-of-a-product from HT-2 applied to $(\mathbb{R}/\mathbb{Z})^2$ —
no van Kampen needed, and the presentation route is NOT taken, per denial
#11).

FS: **the fundamental group is always abelian** — homed HERE, where the
witness finally exists: $\pi_1(S^1 \vee S^1) \cong F(2)$, nonabelian by
FG-1's reduced-word theorem (this is the item HT-2's traps promised); the
van Kampen conclusion holds without path-connectedness of $U \cap V$
(witness: $S^1$ covered by two arcs with two-component intersection —
$\pi_1(U) * \pi_1(V)$ trivial, $\pi_1(S^1) \ne 1$, all published/earlier).

B: the two-isomorphisms change-of-basepoint witness owed by HT-2 (#16), now
buildable in $F(2)$; $\pi_1(S^1 \vee S^1)$ computed; $\pi_1$ of the sphere
with $k$ punctures for small $k$ if it closes cheaply from the material
above; $\mathbb{R}^2 \setminus \{0\}$ has $\pi_1 \cong \mathbb{Z}$ (HT-1's
deformation retract + HT-4).

Traps. (i) Van Kampen's proof is the longest single argument in the block;
the generation lemma first, as stage 1, is mandatory structure — it is
citable alone and $\pi_1(S^n)$ must not wait on the full theorem's
injectivity half. (ii) The wedge's basepoint: for TWO circles glued at a
point, the open sets $U, V$ (circle plus an open arc of the other) must be
constructed with explicit even coverings; "clearly the wedge point is nice"
is the classic gap — for this concrete wedge it is honest work, and the
GENERAL wedge (arbitrary spaces) is not attempted (denials #4, #11).
(iii) Stereographic projection formulas: rational functions of the
coordinates; continuity cites the analysis pages' algebra-of-continuity
items, componentwise. (iv) Amalgamation appears with $A = \pi_1(U \cap V)$;
when $U \cap V$ is simply connected this is a plain free product — say which
case each corollary uses, since injectivity-of-factors is denied (#1) and
nothing may silently use it.

Forward references: NONE load-bearing.

## HT-6. Classification of Covering Spaces  (order 239, topology)

`requires`: `covering-spaces-and-lifting` (233),
`the-fundamental-group-of-the-circle` (235)

DEFS: morphism and isomorphism of coverings over a fixed base; **semilocally
simply connected** (discharges ‡ `rem-semilocal-simple-connectedness`); the
**universal cover** (definition by the simply-connected property, then
existence as the theorem); **deck transformation** and the deck group; regular
(normal) covering.

THMS: uniqueness of lifts gives uniqueness of covering morphisms; the
**existence of the universal cover** for a connected, locally path-connected,
semilocally simply connected base (landmark; the path-class construction,
well-definedness #19); if $X$ has a universal cover then $X$ is semilocally
simply connected (the cheap converse — the pair makes the hypothesis exact);
**the classification** (landmark): over such a base, connected coverings up
to isomorphism correspond to conjugacy classes of subgroups of
$\pi_1(X, x_0)$ (lifting criterion of HT-3 both ways); the **deck group**:
$\operatorname{Deck}(E/X) \cong N_{\pi_1(X)}(p_*\pi_1(E)) / p_*\pi_1(E)$,
normaliser citing AA-6 (order 38); a covering is regular iff $p_*\pi_1(E)$ is
normal iff the deck group acts transitively on fibers; **$\mathbb{R}$ is the
universal cover of $S^1$, with deck group $\mathbb{Z}$** (the item that,
together with HT-3, discharges ‡ `rem-covering-spaces-and-universal-cover`);
the $n$-fold coverings of $S^1$ classified (the subgroups $n\mathbb{Z}$ —
which are the ones the published AA material provides via
`thm-int-comm-ring`-adjacent items; check on disk which A-page item carries
"subgroups of $\mathbb{Z}$ are $n\mathbb{Z}$", since the scaffold placed one
copy on a B page — if only the B copy exists, the fact is re-proved here
citing the division algorithm `thm-division-algorithm-in-z`, with an
agreement remark).

FS: every space has a universal cover (witness: the Hawaiian earring —
DELIBERATELY NOT here: the non-s.s.c. proof needs HT-7's retraction argument;
the `fs-` is homed on HT-7, recorded here so nobody plants it at 239 with an
unclosable witness; the cheap witness HERE, if one is wanted, does not exist —
so this page carries no such `fs-` and the claim is HT-7's); a simply
connected covering exists only if the base is semilocally simply connected —
that is a THEOREM here, not an `fs-`.

B: the coverings of $S^1$ enumerated with their subgroups; a regular and a
non-regular covering contrasted once a non-regular example closes from
available material (the standard non-regular examples live over wedges —
buildable from HT-5's wedge; else drop with note); the deck group of
$\mathbb{R} \to S^1$ computed.

Traps. (i) The universal-cover topology (#19) is the hardest well-definedness
obligation in the block: the basis condition and the evenly-covered
verification are each their own items. (ii) Local path-connectedness is used
silently by every textbook here; every statement carries it explicitly.
(iii) The correspondence needs basepoint care (conjugacy classes, not
subgroups); the change-of-basepoint machinery of HT-2 is the citation.

Forward references: NONE load-bearing.

## HT-7. Applications of the Fundamental Group  (order 241, topology)

`requires`: `the-seifert-van-kampen-theorem` (237),
`classification-of-covering-spaces` (239)

THMS: **no-retraction**: there is no retraction of the closed disk
$D^2$ onto $S^1$ (functoriality + $\pi_1(S^1) \cong \mathbb{Z}$ +
contractibility of $D^2$); **Brouwer fixed point in dimension 2** (landmark;
the ray construction's continuity is a real proof obligation — the quadratic
formula for the ray-circle intersection, cited into the analysis machinery);
**the fundamental theorem of algebra via $\pi_1$** (landmark; SECOND proof —
the algebraic proof is planned at order 125; a dictionary/agreement remark
names the duplication exactly as algebra-track D6 did for unique
factorisation); **Borsuk–Ulam in dimension 2** (odd maps $S^1 \to S^1$ have
odd degree, via lifting; then the antipodal theorem — if the odd-degree lemma
resists the available machinery, Borsuk–Ulam DROPS with a note naming it;
nothing below cites it); **$\mathbb{R}^2 \not\cong \mathbb{R}^n$ for
$n \ne 2$** (landmark; $n = 1$ cites EU-1; $n \ge 3$: removing a point leaves
$\pi_1 \cong \mathbb{Z}$ vs $1$, via HT-1's deformation retract and HT-5's
$\pi_1(S^{n-1}) = 1$) — the item that upgrades ‡
`rem-dimension-invariance-of-euclidean-space`; **the Hawaiian earring**:
defined (subspace of $\mathbb{R}^2$), compact, path-connected; it is NOT
semilocally simply connected (retraction of the earring onto its $n$-th
circle + $\pi_1(S^1) \ne 1$ shows small loops are essential), hence **has no
universal cover** (HT-6's converse theorem) — the items that discharge the
point-set half of ‡ `rem-hawaiian-earring-fundamental-group`.

FS: every compact path-connected subset of $\mathbb{R}^2$ has a universal
cover (the earring, now closable — this is the `fs-` HT-6 deferred here);
a continuous $f\colon D^2 \to D^2$ moving every boundary point has a fixed
point... (keep the `fs-` list short; the standard false strengthenings of
Brouwer only if their witnesses are cheap).

B: the retraction the no-retraction theorem forbids, attempted and failed
concretely; a degree-$n$ polynomial's loop computation at large radius (the
FTA engine, worked); the earring's retraction onto its largest circle,
explicit; winding-number reading of degree for plane loops (prose dictionary
with the analysis track's future winding material — orientation remark only,
NO dependency, since the analysis winding items live on pages whose state
must be checked at authoring time).

Traps. (i) FTA-via-$\pi_1$ needs polynomial continuity and the large-radius
estimate — all analysis citations into published/planned pages 121–125;
check what order 125's algebraic FTA page actually states so the agreement
remark quotes it faithfully (it may not exist yet at authoring time — then
the remark is written in the non-decaying form: what THIS proof does, not
what the library contains). (ii) Brouwer's ray map: the explicit formula and
its continuity are numbered steps; "geometrically obvious" ships defects.
(iii) The earring items must not claim anything about $\pi_1$'s structure
(denial #9); the boundary is: essential small loops YES, uncountable/not-free
NO.

Forward references: NONE load-bearing. The winding-number dictionary is
Remarks-only orientation, declared if the target pages have planned items by
then, plain prose otherwise.

---

## Build-frontier notes (for the orchestrator; order ≠ build order)

- **ST-1 is buildable NOW and is scaffolded in build `frontier-1`** (spec order
  245; the "183" above is pre-TS-D2 and is stale — recompute from the spec). Its
  prerequisites `ordinals-and-transfinite-recursion` and
  `countability-and-uncountability` are published, and `depsource` confirms all
  138 of its scaffolded dependencies resolve to published items. **ST-2 is NOT in
  frontier-1** and remains unbuilt; every page that needs cardinal arithmetic
  (`countability-axioms-and-cardinal-functions`' cardinal functions, the
  Jones-lemma counterexamples) still waits on it. The plank counterexample does
  NOT wait on ST-2 and is built at `separation-axioms-examples` (spec 262).
- **FG-1/FG-2** wait on AA pages 28–40 (counting lemmas, isomorphism
  theorems, AA-6's actions for HT-3's later use) — the algebra track's own
  frontier.
- **EU-1** waits on 145 (`rn-as-a-normed-space`) and the general
  `connectedness`/`compactness` pair.
- **HT-1…HT-7** wait on EU-1, FG-2, and (HT-4's dictionary only) the trig
  pages; the block is strictly chained internally.
- Nothing here changes the CURRENT level-10 build.
