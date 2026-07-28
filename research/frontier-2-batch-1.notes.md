# frontier-2 batch 1 — scaffolding notes (Beta-F2-1, 2026-07-29)

Pages scaffolded: `cardinal-arithmetic-and-cofinality` (247) +
`cardinal-arithmetic-and-cofinality-examples` (248); `connectedness` (253) +
`connectedness-examples` (254); `compactness` (255) + `compactness-examples`
(256). Final page objects: `research/frontier-2-batch-1.pages.json`.

Gates actually run, against a SPLICED COPY of the spec in my scratchpad (I did
not write to `research/plan-spec.json`):

- `node tools/validate-plan.mjs <spliced>` — **PASS, 0 errors.** No warning is
  raised against any of my six pages: no `size` (largest is 28 items), no
  `orphan`, no `redundant-prereq` on my own `requires`. The only `size` warning
  in the run is the pre-existing `monotone-functions-and-discontinuities`.
- `node tools/depsource.mjs <spliced>` — **0 unresolved, 0 planned-later,
  0 draft-page, 0 homeless.** Per page: 247 → **195/195 published**;
  253 → **192/192 published**; 255 → 244 published + **11 planned-earlier, all
  of them onto `connectedness` (253), the deliberate intra-batch seam**;
  248 → 54 published + 43 onto its own A page; 254 → 80 + 44; 256 → 108 + 40.
  **No dependency of mine lands on an unbuilt page that is not in this build.**
- `node tools/prosecheck.mjs research/frontier-2-batch-1.*` — see §5.

Everything below is either (1) a prose-scaffold amendment stated as an exact
edit, (2) an authoring-time note with no scaffold anchor that must reach the
step-5 author, or (3) a staged amendment to a PUBLISHED item, which I have NOT
applied. Owner-decision items live in my report, not here.

---

## 1. Prose-scaffold amendments

### 1.1 `research/plan-topology-set-theory-track.md` — ST-2 heading line

**File:** `research/plan-topology-set-theory-track.md`
**Section:** `## ST-2. Cardinal Arithmetic, Cofinality and the Alephs  (order 187, foundations)`
**Old text (the heading line):**

```
## ST-2. Cardinal Arithmetic, Cofinality and the Alephs  (order 187, foundations)
```

**New text:**

```
## ST-2. Cardinal Arithmetic, Cofinality and the Alephs  (spec order 247, foundations)
```

Reason: the "187" is pre-TS-D2 and is stale by two spec insertions. Every order
in this file must be recomputed from `research/plan-spec.json`; `order` is the
one field a splice rewrites, and an agent briefed by a stale order scaffolds
against the wrong neighbours.

### 1.2 `research/plan-topology-set-theory-track.md` — ST-2 audit block (new)

**File:** `research/plan-topology-set-theory-track.md`
**Section:** `## ST-2. Cardinal Arithmetic, Cofinality and the Alephs`
**Edit:** insert immediately after the heading line and its following blank line:

```
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
AC only as mentions, never as a proof step. So `2^{\aleph_0} = \aleph_1$ is a
theorem of ZFC" and "$\kappa < \lambda \Rightarrow 2^\kappa < 2^\lambda$" both
DROP (their refutations are Cohen and Easton). What replaces them is what ZFC
actually proves: `fs-the-continuum-has-cardinality-aleph-omega`, refuted outright
by K\"onig ($\operatorname{cf}(2^{\aleph_0}) > \aleph_0 = \operatorname{cf}
(\aleph_\omega)$), and `fs-cardinal-exponentiation-is-strictly-monotone-in-the-
base`, refuted outright by $\aleph_0 < \aleph_1$ with
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
```

### 1.3 `research/plan-topology-set-theory-track.md` — well-definedness rows 6, 7, 8

**File:** `research/plan-topology-set-theory-track.md`
**Section:** `## Well-definedness obligations (TS-D5 req. 1)`
**Old text (three table rows, verbatim):**

```
| 6 | 187 | cardinal $\kappa + \lambda$, $\kappa \cdot \lambda$, $\kappa^\lambda$ | representative-independence: $A \approx A'$, $B \approx B'$ imply $A \sqcup B \approx A' \sqcup B'$, $A \times B \approx A' \times B'$, ${}^B A \approx {}^{B'}A'$ |
| 7 | 187 | the aleph hierarchy $\alpha \mapsto \aleph_\alpha$ | exists and is unique by transfinite recursion; each $\aleph_\alpha$ is a cardinal; the enumeration is exhaustive (every infinite cardinal is an $\aleph_\alpha$) |
| 8 | 187 | **cofinality** $\operatorname{cf}(\alpha)$ | the set of cofinal order types is nonempty, so a least exists; and $\operatorname{cf}(\kappa)$ is itself a regular cardinal |
```

**New text:**

```
| 6 | 187 (spec **247**) | cardinal $\kappa \oplus \lambda$, $\kappa \otimes \lambda$, $\kappa^\lambda$ | TWO obligations, not one, and they are discharged by two items. `lem-cardinality-of-a-well-orderable-set` first isolates the ZF half of `def-cardinal` (which is stated under AC), so that $\lvert X \rvert$ exists for any well-orderable $X$ without choice. `lem-cardinal-operations-are-well-defined` then proves representative-independence ($A \approx A'$, $B \approx B'$ imply $A \sqcup B \approx A' \sqcup B'$, $A \times B \approx A' \times B'$, ${}^B A \approx {}^{B'}A'$) AND that $\kappa \sqcup \lambda$ and $\kappa \times \lambda$ carry explicit well-orders, so $\oplus$ and $\otimes$ are ZF operations while $\kappa^\lambda$ needs AC |
| 7 | 187 (spec **247**) | the aleph hierarchy $\alpha \mapsto \aleph_\alpha$ AND the beth hierarchy $\alpha \mapsto \beth_\alpha$ | one item, `cor-the-aleph-and-beth-hierarchies-are-well-defined`: both exist and are unique by `lem-recursion-on-the-ordinals` (the published `thm-transfinite-recursion` is stated for a SET and both operations are defined at every ordinal); each value is an infinite cardinal; each is strictly increasing and continuous at limits. Exhaustiveness is a SEPARATE numbered theorem, `thm-every-infinite-cardinal-is-an-aleph`, because it is proved by transfinite induction and not by the recursion. The successor cardinal $\kappa^{+} = \aleph(\kappa)$ is `lem-successor-cardinal-exists` and precedes both |
| 8 | 187 (spec **247**) | **cofinality** $\operatorname{cf}(\alpha)$ | `lem-cofinality-is-well-defined`: the collection of ordinals $\beta$ admitting a map $\beta \to \alpha$ with cofinal range is nonempty (the identity witnesses $\beta = \alpha$), so a least exists; and the witnessing map may always be taken strictly increasing. That $\operatorname{cf}(\alpha)$ is a regular CARDINAL is `thm-cofinality-basics` and is a theorem, not part of the definition — stating it inside the definition would make the definition circular, since regularity is defined through $\operatorname{cf}$ |
```

### 1.4 `research/plan-topology-set-theory-track.md` — scope denials 13 and 14 are DISCHARGED

**File:** `research/plan-topology-set-theory-track.md`
**Section:** `## Scope denials (TS-D5 req. 3)`
**Edit:** append to entries 13 and 14, each as a final sentence:

Entry 13, append: `**DISCHARGED at frontier-2 (2026-07-29): ST-2 is scaffolded at
spec order 247, and defines $\operatorname{cf}$, regular and singular.**`

Entry 14, append: `**DISCHARGED at frontier-2 (2026-07-29): 247 defines
$\aleph_\alpha$ and records $\aleph_0 = \omega$, $\aleph_1 = \omega_1$;
$\aleph_1 \le 2^{\aleph_0}$ is on its B page 248.**`

### 1.5 `research/plan-topology-set-theory-track.md` — scope denials, three new entries

**File:** `research/plan-topology-set-theory-track.md`
**Section:** `## Scope denials (TS-D5 req. 3)`
**Edit:** append after the last numbered entry:

```
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
```

### 1.6 `research/plan-topology-track.md` — T4 audit block (new)

**File:** `research/plan-topology-track.md`
**Section:** `## T4. Connectedness`
**Edit:** insert immediately after the heading line and its following blank line:

```
**frontier-2 audit, 2026-07-29 (batch 1). T4 IS SPEC PAGE 253 `connectedness`
(companion 254). Six notes bind authoring.**

**(1) THE ORDER TOPOLOGY OF A LINEARLY ORDERED SET IS MINTED HERE, AND IT HAS TO
BE.** There is no order topology this page or page 255 may legally cite. The
published `def-order-topology-on-an-ordinal` is homed on `separation-axioms`
(order 261), ABOVE both; the published `ex-order-topology` is homed on
`topological-spaces-and-continuity-examples` (order 250) and is a B-page item,
hence leaf-locked and citable from nowhere. `grep` of `items/` finds no third.
So 253 mints `def-order-topology-on-a-linearly-ordered-set` — the general
definition, rays as a subbasis — which is the lowest-ordered page of this build
that needs one, and 255 cites it for the ordinal spaces. **The id
`def-order-topology` is NOT available: it is an alias of the published
`ex-order-topology`.** The new definition carries a dictionary paragraph in its
Remarks naming `ex-order-topology` (a wikilink in a Remarks section creates no
`deps` edge and no b-leaf violation, so this is legal and is the only way to
record the agreement), and 261's definition receives a staged amendment.

**(2) THE TOPOLOGIST'S SINE CURVE IS DROPPED AND REPLACED, BECAUSE THIS LIBRARY
HAS NO SINE.** `sine-cosine-and-the-definition-of-pi` is spec order 179, i.e.
EARLIER than 253, and it is UNBUILT; nothing on disk defines $\sin$. A dep onto
it would be classified `planned-earlier`, which `depsource` does not fail, and
would be an unbuildable page. The replacement is
`lem-the-oscillating-zigzag-curve`: the graph of the piecewise-linear map on
$(0,1]$ that runs between $0$ and $1$ on each $[1/(n+2), 1/(n+1)]$. Its graph is
path-connected, its closure adds $\{0\} \times [0,1]$, and that closure is
connected, not path-connected and not locally connected — every property the sine
curve was there for, with no transcendental function anywhere. The library
already has a precedent for this substitution: the published
`ex-distance-to-the-integers` calls $\psi(x) = \inf_{n} \lvert x - n \rvert$ "the
trigonometry-free oscillator".

**(3) THE LONG LINE IS KEPT AND IS THE REASON 253 DECLARES `ordinal-arithmetic`.**
`def-the-long-line` and `thm-the-long-line-is-a-connected-linear-continuum` are
on the A page, not the B page, because 255 needs the long ray for "countably
compact and not compact" and a B-page item would be leaf-locked. The theorem
proves three things and no more: the long ray is a linear continuum; hence it is
connected; and every at most countable subset of it is bounded (this last clause
is the one 255 consumes, and it inherits the $\mathrm{AC}_\omega$ cost of
`thm-countable-subsets-of-omega-one-are-bounded`). **Path-connectedness of the
long ray is DROPPED**: it needs an order isomorphism $[0,x] \cong [0,1]$, which is
a transfinite construction of its own.

**(4) THE REAL-LINE DICTIONARY IS UNFOLDED INLINE AND NEVER ROUTED THROUGH
`rem-r-native-topology-scope`.** That remark is one of the five items in the
library that seed the forward-dependence marker (it uses its `forward_refs`
outside a Remarks section), so a `deps` edge to it would propagate the sky ↗
"rests on later material" chip to every consequence on this page. The
identification needed by `cor-connected-subsets-of-the-line` is one sentence and
is written out: $B(x,r) = (x-r, x+r) = N_r(x)$, so "open in
`def-open-and-closed-in-r`" and "open in `def-metric-topology` for
$d_{\mathbb{R}}$" are the same condition word for word. `def-connected-r` and
`thm-connected-subsets-of-r-are-intervals` are themselves safe to cite: each
declares a forward reference but uses it only inside `## Remarks`, so neither is a
seed.

**(5) "QUASI-COMPONENTS COINCIDE WITH COMPONENTS IN COMPACT HAUSDORFF SPACES" IS
NOT ON THIS PAGE.** Compactness is spec order 255, above 253. The item is homed on
255 as `thm-quasicomponents-equal-components-in-a-compact-hausdorff-space`, which
is legal because 255 may cite 253. 253 keeps
`thm-quasicomponents-contain-components` and states no equality.

**(6) DROPPED FROM T4, each with what would license it.** *Arcwise connectedness
and continua*: a continuum is a compact connected Hausdorff space and compactness
is 255; the notion belongs to 255 or above, and arcwise connectedness needs the
Hahn-Mazurkiewicz circle of ideas, denied in this file's scope denials. *The
Warsaw circle and the Knaster-Kuratowski fan*: both are several pages of
construction, and the fan additionally needs a Cantor-set indexing whose payoff
(totally disconnected but not zero-dimensional) rests on `countability-axioms-and-
cardinal-functions` (273). *Simple connectedness*: the T4 list already marks it
"forward pointer only", and under the self-contained-scope rule a forward pointer
to unbuilt material is not written at all; `homotopy-and-homotopy-equivalence` is
spec order 289 and owns it. *The Cantor set as a totally disconnected perfect
space*: the published `ex-cantor-set-is-perfect-and-totally-disconnected` (order
134) already says it, and re-minting it at 254 would be a second item for one
statement.
```

### 1.7 `research/plan-topology-track.md` — T5 audit block (new)

**File:** `research/plan-topology-track.md`
**Section:** `## T5. Compactness   [needs F1]`
**Edit:** insert immediately after the heading line and its following blank line:

```
**frontier-2 audit, 2026-07-29 (batch 1). T5 IS SPEC PAGE 255 `compactness`
(companion 256). Seven notes bind authoring.**

**(1) THREE DICTIONARY OBLIGATIONS LAND HERE AND ALL THREE ARE DISCHARGEABLE
BACKWARD.** `def-metric-compactness` and `def-metric-compactness-variants` are
`compactness-in-metric-spaces` (order 120), BELOW 255, so the agreement is an
ordinary backward citation and is a numbered item on this page,
`thm-compactness-agrees-with-metric-compactness`, plus a dictionary clause inside
`def-compactness-variants`. `def-locally-compact-metric-space` is
`function-space-topologies` (order 283), ABOVE 255, so the agreement CANNOT be
cited from here in either a Statement or a Remark without a forward reference —
and a forward reference declared on `def-locally-compact-space`, a base
definition, would propagate the sky ↗ chip to every consequence on the page. So
255 states the metric unfolding of its own definition (a point has a compact
neighbourhood exactly when some ball lies inside a compact set) WITHOUT naming the
later item, and the agreement is recorded by a staged amendment to the published
item, which is where the standing obligation was written.

**(2) "COMPACT HAUSDORFF $\Rightarrow$ NORMAL" IS NOT ON THIS PAGE, AND T5'S LIST
IS WRONG TO HOME IT HERE.** Normality is defined at 261, above 255, so as listed
it is a forward reference on the spine and `fwdcheck` rejects it outright
(`forward-on-spine`). Its only legal home is a page above BOTH 255 and 261. The
same holds for *locally compact Hausdorff $\Rightarrow$ completely regular*
(which additionally needs Urysohn's lemma, spec order 267) and for *partitions of
unity*. What 255 supplies instead is the exact separation input those proofs
need, stated as clauses of `thm-compact-subset-of-a-hausdorff-space-is-closed`: a
point and a disjoint compact set, and two disjoint compact sets, have disjoint
open neighbourhoods.

**(3) PARACOMPACTNESS IS DROPPED ENTIRELY, and this is not a loss.**
`partitions-of-unity-and-paracompactness` is spec order **269** and ALREADY
declares `compactness` among its `requires`. Every theorem T5 lists about
paracompactness (paracompact Hausdorff $\Rightarrow$ normal, partitions of unity)
needs normality, which 269 has and 255 does not. Defining paracompactness and
locally finite refinements at 255 would leave a definition with nothing to prove
and would pre-empt 269.

**(4) TYCHONOFF TAKES THE ALEXANDER SUBBASE ROUTE, NOT THE ULTRAFILTER ROUTE, AND
THIS IS FORCED.** The published `filters-and-ultrafilters` (order 12) has filters,
the finite intersection property, ultrafilters, the ultrafilter lemma and the
prime characterisation — and NO notion of a filter converging in a topological
space, which is what "compact iff every ultrafilter converges" needs. That notion
is `nets-and-filters`, spec order **259**, above 255, and 259 already declares
`compactness` in its `requires`. So 255 proves `thm-alexander-subbase-lemma`
directly from Zorn (published at order 10) and derives Tychonoff from it; the
ultrafilter proof, and the equivalence "Tychonoff for Hausdorff spaces iff the
ultrafilter lemma", belong to 259. What 255 does use from page 12 is
`def-finite-intersection-property` and `lem-fip-generates-filter`, in
`thm-compact-iff-fip`.

**(5) "SECOND COUNTABLE $\Rightarrow$ LINDELOF" IS DROPPED.** Second countability
is `countability-axioms-and-cardinal-functions`, spec order **273**, ABOVE 255.
Minting a second-countability definition here would take 273's material and create
a second notion. 255 defines Lindelof and proves the hierarchy that does not
mention a countable basis. Licensed by: page 273.

**(6) "THE BAIRE CATEGORY THEOREM FOR LOCALLY COMPACT HAUSDORFF SPACES" IS
DROPPED FOR PAGE SIZE, and its home is 255 or above.** Note that
`complete-metrizability-and-baire` is spec order **277**, above 255, so it CAN
host it once it declares `compactness` in `requires`; the alternative is a later
item on 255 itself. Nothing else in this build needs it. Licensed by: page 277
plus a `requires` edge to 255.

**(7) THE `fs-` THAT CANNOT BE WRITTEN.** T5 lists "infinite products of compacts
are compact without AC". Its refutation is the independence of AC, which is
recorded-not-proved, and the self-contained-scope rule allows independence facts
about AC only as a MENTION, never as a proof step in a phase-format Refutation.
It is dropped as an `fs-` and survives as a sentence in
`rem-compactness-conventions-and-choice-ledger`, which mentions the published ‡
`rem-schechter-kelley-tychonoff` through `external_refs`. The other five `fs-`
items of T5's list are all kept and all have witnesses reachable from this page.

**Kept, and what carries them.** *$[0,1]^{[0,1]}$-style compact non-sequentially-
compact*: the witness minted inside the `fs-` is
$\{0,1\}^{\{0,1\}^{\mathbb{N}}}$ with $F_n(x) = x_n$, which needs only Tychonoff
and pointwise convergence and avoids binary expansions of reals entirely.
*$\omega_1$ sequentially compact and not compact*, *$\omega_1 + 1$ compact*: from
`lem-the-order-topology-on-an-ordinal` and `thm-ordinal-spaces-and-compactness`,
both on the A page, and from the published `thm-countable-subsets-of-omega-one-
are-bounded`. *The long line countably compact and not compact*: from 253's
`def-the-long-line`. *The Sorgenfrey line Lindelof with a non-Lindelof square*:
the published `ex-sorgenfrey-line` (250) and `ex-sorgenfrey-plane` (252) are
B-page items and leaf-locked, so the line is re-minted on the B page 256, where a
Remarks wikilink to the published item records that it is the same space; the
payoff needs only that the antidiagonal is an uncountable closed discrete
subspace, not Jones' lemma. *A closed bounded subset of $\mathbb{Q}$ that is not
compact*: already published as `cex-closed-bounded-in-q-not-compact` (order 132)
and not re-minted; the related hereditary failure is
`fs-local-compactness-is-hereditary` on the A page.
```

### 1.8 `research/plan-topology-track.md` — Scope denials, five new entries

**File:** `research/plan-topology-track.md`
**Section:** `## Scope denials`
**Edit:** append after entry 12:

```
13. **Paracompactness, locally finite refinements and partitions of unity at
    page 255.** Every theorem about them on T5's list needs normality, defined at
    261. `partitions-of-unity-and-paracompactness` is spec order 269 and already
    requires `compactness`. Licensed by: page 269, which owns the whole topic.
14. **"Second countable implies Lindelof" at page 255.** Second countability is
    `countability-axioms-and-cardinal-functions`, spec order 273, above 255.
    Licensed by: page 273.
15. **The Baire category theorem for locally compact Hausdorff spaces.** Dropped
    from 255 for page size, not for reachability: it is provable from the
    material 255 has. Licensed by: page 277
    `complete-metrizability-and-baire` once that page declares `compactness` in
    its `requires`, or a later item on 255 itself.
16. **The ultrafilter proof of Tychonoff, and "Tychonoff for Hausdorff spaces iff
    the ultrafilter lemma".** The published `filters-and-ultrafilters` (order 12)
    has no notion of a filter converging in a topological space. Licensed by:
    page 259 `nets-and-filters`, which already requires `compactness`.
17. **The Stone-Cech compactification and its universal property.** T5 lists it
    "(statement)"; nothing on 255 states it. Licensed by: page 271
    `tychonoff-embedding-and-stone-cech`.
18. **Arcwise connectedness, continua, the Warsaw circle, the
    Knaster-Kuratowski fan, and simple connectedness, at page 253.** A continuum
    is compact connected Hausdorff and compactness is 255; the fan's payoff needs
    273; simple connectedness is 289's. Licensed by: those pages.
19. **Path-connectedness of the long ray.** Proved nowhere in this build: it
    needs an order isomorphism $[0,x] \cong [0,1]$ for every $x$, a transfinite
    construction of its own. 253 proves the long ray is a connected linear
    continuum and stops there. Licensed by: a dedicated item.
20. **The topologist's sine curve, under that name.** This library has no
    $\sin$: `sine-cosine-and-the-definition-of-pi` is spec order 179 and is
    unbuilt. 253 proves every property it was wanted for on a piecewise-linear
    substitute, `lem-the-oscillating-zigzag-curve`. Licensed by: building page
    179, after which the classical curve may be added as a second witness.
```

---

## 2. Authoring-time notes with no scaffold anchor

### 2.1 Binding on all six pages

- **A wikilink inside `## Remarks` creates no `deps` edge, and this is the
  mechanism three dictionary obligations in this batch use.** `depcheck`'s
  `cited-not-in-deps` scans only Statement / Statement refuted / Facts &
  Assumptions / Proof / Refutation / Counterexample / Verification; `## Remarks`
  and `## Definition` are not scanned. So a Remark may name a leaf-locked B-page
  item (`ex-order-topology`, `ex-sorgenfrey-line`) without a b-leaf violation and
  without a false prerequisite edge. It may NOT be used to smuggle a
  load-bearing step: if the identification is used in a proof it goes in `deps`
  and the item must be citable.
- **Five published items are forward-dependence SEEDS and must not enter any
  `deps` list here**: `rem-r-native-topology-scope`,
  `rem-counting-conventions-and-scope`, `rem-extended-real-conventions`,
  `rem-integral-conventions-and-scope`, `rem-rearrangement-in-higher-dimensions`.
  Each uses one of its `forward_refs` outside a Remarks section, so citing it
  propagates the sky ↗ chip along `deps` to every consequence. None of them is in
  the scaffolded `deps` of this batch; keep it that way.
- **$\mathbb{N}$ contains $0$.** Every reciprocal on these pages is written
  $1/(n+1)$, never $1/n$: the zigzag intervals are $[1/(n+2), 1/(n+1)]$, the comb
  teeth stand at $1/(n+1)$, and the collapsed set of
  `cex-a-continuous-image-of-a-locally-compact-space` is
  $\{1/(n+1) : n \in \mathbb{N}\} \cup \{0\}$. `cor-archimedean-reciprocal` is
  stated for $n \ge 1$, so the shift is the bridge and is cited wherever a
  reciprocal appears.
- **A natural number is a von Neumann natural, hence not a real.** $1/(n+1)$
  means $1/\iota(n+1)$; `def-canonical-natural` is in the `deps` of every item
  that writes one.
- **No wikilink inside `$...$`.** Several titles here carry displayed operators
  ($\kappa \oplus \lambda$, $\aleph_{\alpha+1}$, $\operatorname{cf}$,
  $\omega_1 + 1$); keep every `[[id]]` outside math.
- **`proof_strategy` for transfinite-induction proofs is `direct`.** The
  published `thm-mostowski-collapse`, `lem-ordinal-basics` and every proof-bearing
  item of page 245 set this precedent: precheck's `induction` strategy wants
  `[base]`/`[ih]`/`[discharge-induction]` shaped for induction on $\mathbb{N}$,
  and a transfinite induction is written as a direct proof citing
  `thm-transfinite-induction` as a fact. The ONLY item in this batch declared
  `induction` is `thm-finite-products-of-compact-spaces`, which really is an
  ordinary induction on $n \in \mathbb{N}$ via `thm-induction-principle`.
- **`external_refs`, not `deps`, for every independence citation**, and never as
  a proof step (self-contained scope, axiom exemption).
  `rem-cardinal-arithmetic-choice-ledger` (247) declares
  `rem-independence-of-ch-and-gch`, `rem-gch-implies-ac` and
  `rem-gitik-all-uncountable-cardinals-singular`;
  `rem-compactness-conventions-and-choice-ledger` (255) declares
  `rem-schechter-kelley-tychonoff`. All four targets are published
  `proved_here: false` items, every body must actually link its declared target,
  and `extcheck` enforces the rest. None appears in the scaffolded `deps` lists,
  which is why `depsource` does not show them.
- **`justified_by`, not `deps`, for the definitional discharges.** The JSON shape
  has no `justified_by` field, so the obligations are recorded here:
  `def-cofinality` is justified by `thm-cofinality-basics` (that
  $\operatorname{cf}(\lambda)$ is a regular cardinal is ABOUT the object the
  definition introduces, so it points forward and a `deps` entry would be a
  spurious cycle); `def-one-point-compactification` by
  `thm-one-point-compactification-properties`; `def-the-long-line` by
  `thm-the-long-line-is-a-connected-linear-continuum`. Everything else follows the
  published `cor-*-well-defined` / `def-*` pattern, where the discharging item
  PRECEDES the definition and is therefore an ordinary `dep`:
  `lem-cardinal-operations-are-well-defined` before `def-cardinal-arithmetic`,
  `cor-the-aleph-and-beth-hierarchies-are-well-defined` before
  `def-aleph-and-beth-hierarchies`, `lem-cofinality-is-well-defined` before
  `def-cofinality`. **Do not accept a `justified_by` the scaffold does not name**:
  SCHEMA restricts the field to well-definedness discharges.

### 2.2 Page 247/248 `cardinal-arithmetic-and-cofinality`

- **Notation, fixed once in `def-cardinal-arithmetic` and then used silently.**
  $\kappa \oplus \lambda := \lvert \kappa \sqcup \lambda \rvert$ where
  $\kappa \sqcup \lambda := (\{0\} \times \kappa) \cup (\{1\} \times \lambda)$;
  $\kappa \otimes \lambda := \lvert \kappa \times \lambda \rvert$;
  $\kappa^{\lambda} := \lvert {}^{\lambda}\kappa \rvert$, the set of functions
  $\lambda \to \kappa$. The definition cites
  `rem-ordinal-versus-cardinal-exponentiation` at the point of definition, as ST-2
  trap (ii) requires.
- **What is ZF and what is not, stated in each Statement and not only in Facts.**
  ZF: `lem-cardinality-of-a-well-orderable-set`, `lem-cardinal-operations-are-
  well-defined` for $\oplus$ and $\otimes$, `lem-successor-cardinal-exists`,
  `thm-hessenberg`, `cor-cardinal-absorption`, `thm-every-infinite-cardinal-is-an-
  aleph` (for CARDINALS; the version for arbitrary sets is the AC clause),
  `lem-cofinality-is-well-defined`, `thm-cofinality-basics`, and the
  $\operatorname{cf}(\aleph_\omega) = \aleph_0$ clause of
  `thm-regularity-of-the-alephs`. AC: cardinal exponentiation and everything
  reached through it, `thm-cardinal-comparability-iff-ac`, `thm-tarski-square`,
  the regularity of $\aleph_{\alpha+1}$, `thm-konig` and
  `cor-cofinality-of-a-cardinal-power`.
- **Hessenberg's proof is the canonical (Gödel) well-order and nothing else.**
  On $\kappa \times \kappa$ order pairs by $\max$ first, then by the first
  coordinate, then by the second. Transfinite induction on the infinite cardinal
  $\kappa$: the initial segment below $(\xi,\eta)$ is contained in
  $\gamma \times \gamma$ for $\gamma = \max(\xi,\eta)^{+} < \kappa$, and by the
  induction hypothesis $\lvert \gamma \times \gamma \rvert = \lvert \gamma \rvert
  < \kappa$ when $\gamma$ is infinite, $\lvert \gamma \times \gamma \rvert$ finite
  when $\gamma$ is finite. So every initial segment has order type $< \kappa$ and
  the whole order type is $\le \kappa$. **No choice is used anywhere**: the order
  is defined, not chosen. Say so — this page's whole point is where AC starts.
- **`thm-tarski-square`, in full, since it is the hardest item on the page.**
  Forward: AC gives a well-order of $A$, so $A \approx \kappa$ for an infinite
  cardinal $\kappa$ and Hessenberg applies. Backward, assuming $A \times A \approx
  A$ for every infinite $A$: let $A$ be infinite, let $\kappa = \aleph(A)$, which
  is an infinite cardinal by the inline fact of note (7) in the ST-2 audit block,
  and put $B = A \sqcup \kappa$, which is infinite. Fix a bijection
  $f : B \times B \to B$. If some $a \in A$ has $f[\{a\} \times \kappa] \subseteq
  A$ then $\kappa$ injects into $A$, contradicting the defining property of the
  Hartogs number. Otherwise every $a \in A$ admits a LEAST $\xi_a \in \kappa$ with
  $f(a, \xi_a) \in \kappa$ — least, so nothing is chosen — and
  $a \mapsto (\xi_a, f(a,\xi_a))$ is injective into $\kappa \times \kappa$, which
  is equinumerous with $\kappa$ by Hessenberg. So $A$ injects into $\kappa$ and is
  well-orderable; with the finite case trivial, `cor-ac-iff-well-ordering` closes
  it.
- **`thm-konig` is stated with AC in the Statement, not only in Facts**, because
  the theorem implies AC. The proof is the diagonal one: given
  $f : \bigsqcup_i \kappa_i \to \prod_i \lambda_i$, for each $i$ the $i$-th
  coordinates of $f$ on the $i$-th block miss some element of $\lambda_i$ (the
  block has size $\kappa_i < \lambda_i$); AC picks one for each $i$, and the
  resulting element of the product is not in the image. AC is spent TWICE — once
  to know the product is nonempty and once in the diagonalisation — and both must
  be named.
- **`cor-cofinality-of-a-cardinal-power` is where the continuum result lives.**
  $\kappa < \kappa^{\operatorname{cf}(\kappa)}$ by writing $\kappa$ as a sum of
  $\operatorname{cf}(\kappa)$ many cardinals each $< \kappa$ and applying König.
  Then $\operatorname{cf}(2^{\kappa}) > \kappa$: if it were $\le \kappa$ then
  $2^{\kappa} < (2^{\kappa})^{\operatorname{cf}(2^\kappa)} \le
  (2^{\kappa})^{\kappa} = 2^{\kappa \otimes \kappa} = 2^{\kappa}$ by Hessenberg,
  a contradiction.
- **The B page proves $\lvert \mathbb{R} \rvert = 2^{\aleph_0}$, and the
  published `rem-continuum-hypothesis` says the library has not.** The route is
  Schröder-Bernstein between two injections, neither of which needs binary
  expansions: $\{0,1\}^{\mathbb{N}} \to \mathbb{R}$ is the published
  `thm-cantor-set-ternary-description` claim 3 composed with the inclusion of the
  Cantor set, and $\mathbb{R} \to \mathcal{P}(\mathbb{Q})$ is
  $x \mapsto \{q \in \mathbb{Q} : q < x\}$, injective by density
  (`lem-of-q-dense`), with $\mathcal{P}(\mathbb{Q}) \approx
  \mathcal{P}(\mathbb{N})$ by `thm-rationals-countable` and representative
  independence. The staged amendment to `rem-continuum-hypothesis` is §3.5 below
  and must be applied in the same commit.

### 2.3 Page 253/254 `connectedness`

- **`def-connected-space` defines a separation as a pair of disjoint NONEMPTY
  OPEN sets covering the space, and states the convention for the empty space and
  the one-point space explicitly** (this library counts both as connected; the
  fork is live in the literature and `rem-connectedness-conventions` records it).
- **`lem-connected-subsets-and-separated-sets` is the bridge to the published
  real-line development** and must be stated in `def-connected-r`'s own
  vocabulary: $A$ is disconnected as a subspace exactly when
  $A = A_1 \cup A_2$ with both nonempty and
  $\overline{A_1}^{X} \cap A_2 = \varnothing = A_1 \cap \overline{A_2}^{X}$. The
  proof is `thm-subspace-closure-and-interior` and nothing else.
- **`thm-product-of-connected-spaces` uses AC exactly once**, to fix a base point
  $a \in \prod X_i$ when $I$ is infinite; the finite-support subproducts are
  connected by `thm-unions-of-connected-sets` and their union is dense, so
  `thm-closure-of-a-connected-set` finishes. Name the choice principle in the
  Statement, and note that for finite $I$ nothing is spent
  (`lem-finite-choice` is a ZF theorem).
- **`lem-the-oscillating-zigzag-curve`, in full.** Let
  $f : (0,1] \to [0,1]$ be linear on each $[1/(n+2), 1/(n+1)]$ with
  $f(1/(n+1)) = 0$ for even $n$ and $1$ for odd $n$, and $f(1) = 0$. Continuity is
  the OPEN-cover clause of `lem-continuity-is-local-and-pastes`, never the closed
  one: the closed cover by the intervals $[1/(n+2), 1/(n+1)]$ is infinite, and the
  published `cex-pasting-fails-for-an-infinite-closed-cover` is exactly the
  warning. Claims: (a) the graph $G$ is homeomorphic to $(0,1]$, hence
  path-connected and locally connected; (b)
  $\overline{G} = G \cup (\{0\} \times [0,1])$, because $f$ attains both $0$ and
  $1$ in every interval $(0,\delta)$; (c) $\overline{G}$ is connected by
  `thm-closure-of-a-connected-set`; (d) $\overline{G}$ is not path-connected — a
  path from $(0,t)$ into $G$ has connected image, so its first coordinate takes
  every value in some $[0,\varepsilon)$ by `cor-connected-subsets-of-the-line`,
  and continuity of the second coordinate then fails at $0$; (e) $\overline{G}$ is
  not locally connected at any $(0,t)$.
- **`cex-components-differ-from-quasicomponents` (B page) needs a compact
  witness and must not say so.** The space is
  $X = (\{0,1\} \times \{0\}) \cup \bigcup_n (\{0,1\} \times \{1/(n+1)\})$ as a
  subspace of $\mathbb{R}^2$; the quasicomponent of $(0,0)$ is
  $\{(0,0),(1,0)\}$ and its component is $\{(0,0)\}$. The argument uses only
  clopen sets and `cor-connected-subsets-of-the-line`; **do not write "compact",
  which is spec order 255 and above this page.**
- **The B page's comb space** is
  $C = ([0,1] \times \{0\}) \cup (\{0\} \cup \{1/(n+1) : n \in \mathbb{N}\})
  \times [0,1]$. It is path-connected (down a tooth, along the base, up another)
  and fails local connectedness at every $(0,t)$ with $t > 0$. That is a fact the
  zigzag does not give, which is why both spaces are on the page.

### 2.4 Page 255/256 `compactness`

- **`def-compact-space` takes the INTRINSIC reading of "compact subset", exactly
  as the published `def-metric-compactness` does**, and
  `lem-compactness-of-a-subspace-is-ambient` is the item that licenses the ambient
  reading, in both the family form and the INDEXED form. Almost every later proof
  on the page wants the indexed form, because a cover is produced by a rule that
  attaches an open set to each point; a set of open sets forgets the rule. This
  mirrors `lem-compactness-is-intrinsic` claim 3 and should say so.
- **`thm-compactness-agrees-with-metric-compactness` is what makes the whole
  published metric development available**, and it is a one-line proof that must
  not be dressed up: the open sets of $(X,d)$ used by `def-metric-compactness` are
  literally the members of $\mathcal{T}_d$, so the two conditions are the same
  condition. Everything after it may cite the published metric theorems by name.
- **`thm-compact-subset-of-a-hausdorff-space-is-closed` must state the two
  separation clauses, not only the closedness clause.** Beta-F2-2 needs exactly
  those clauses (see §4).
- **`thm-alexander-subbase-lemma`: the Zorn set is the family of subbasic-cover-
  free open covers**, ordered by inclusion; a maximal element exists because the
  union of a chain of covers with no finite subcover has no finite subcover. Then
  the maximal cover's subbasic members cover, by maximality plus the basis
  criterion, and the hypothesis gives a finite subcover. Name Zorn in the
  Statement.
- **`thm-compactness-variants-hierarchy`: the T1 hypothesis is written out, never
  cited.** "Limit point compact implies countably compact" needs every singleton
  to be closed, which is `def-t0-and-t1-spaces` at spec order 261, ABOVE this
  page. Write the hypothesis as "every singleton of $X$ is closed" in
  `def-topological-space` vocabulary, and record in a Remark that this hypothesis
  is the $T_1$ axiom, named on a page this one does not cite. **Do not link it.**
  The $\mathrm{AC}_\omega$ cost of "countably compact implies sequentially
  compact"-style arguments must be named wherever a sequence is extracted.
- **`lem-the-order-topology-on-an-ordinal` is the item that reconciles the two
  descriptions of an ordinal space** and is the reason the staged amendment to
  `def-order-topology-on-an-ordinal` can be one sentence: it proves that
  $\{[0,\beta]\} \cup \{(\alpha,\beta]\}$ is a basis for the order topology of
  253's general definition, restricted to an ordinal. Both inclusions are three
  lines: $(\alpha,\beta] = (\alpha, \beta^{+})$ when $\beta^{+} \in \gamma$ and is
  the upper ray otherwise; conversely $\xi \in (\alpha,\beta)$ gives
  $\xi \in (\alpha,\xi] \subseteq (\alpha,\beta)$. Hausdorffness follows from the
  clopen basis; **regularity is NOT claimed here**, since
  `lem-ordinal-order-topology-is-t3` is at 261 and regularity is not defined below
  it.
- **`thm-ordinal-spaces-and-compactness`.** (a) $\gamma^{+}$ is compact: given a
  cover, transfinite induction on $\delta \le \gamma$ shows $[0,\delta]$ has a
  finite subcover — the successor step adds one basic set, the limit step uses a
  set covering $\delta$ itself, which contains some $(\alpha,\delta]$. (b) A limit
  ordinal $\lambda$ is not compact: the cover by $\{[0,\beta] : \beta < \lambda\}$
  has no finite subcover. (c) $\omega_1$ is countably compact and sequentially
  compact, both by `thm-countable-subsets-of-omega-one-are-bounded` — a sequence
  lies in some $[0,\alpha]$ with $\alpha < \omega_1$, which is compact by (a) and
  metrizable in no sense the page needs; extract a monotone subsequence by the
  well-order and take its supremum. State the $\mathrm{AC}_\omega$ cost, inherited
  from the published theorem.
- **`cex-limit-point-compact-without-countable-compactness`** is
  $\mathbb{N} \times \{a,b\}$ with the second factor indiscrete: every nonempty
  subset has a limit point (the partner of any of its points), and the open cover
  by the sets $\{n\} \times \{a,b\}$ is countable with no finite subcover. This is
  the item that shows the singleton-closed hypothesis of
  `thm-compactness-variants-hierarchy` is not decoration.
- **`ex-one-point-compactifications-of-the-line-and-of-the-naturals` uses inverse
  stereographic projection and no trigonometry.** $S^1 \subseteq \mathbb{R}^2$ is
  compact by `cor-heine-borel-in-the-product-topology`, the map
  $(x,y) \mapsto x/(1-y)$ is a homeomorphism $S^1 \setminus \{(0,1)\} \to
  \mathbb{R}$ with algebraic inverse
  $t \mapsto (2t/(t^2+1), (t^2-1)/(t^2+1))$, and
  `thm-compactness-under-continuous-maps` upgrades the extension to a
  homeomorphism $\mathbb{R}^{*} \to S^1$. Do NOT reach for
  `ex-circle-as-r-mod-z`: it is a B-page item at order 252 and is leaf-locked.
- **`ex-the-sorgenfrey-line-is-lindelof-and-its-square-is-not` re-mints the
  space.** The published `ex-sorgenfrey-line` (250) and `ex-sorgenfrey-plane`
  (252) are B-page items and may not be cited from anywhere. The re-minted item
  must carry a Remarks sentence, with a wikilink and no `deps` entry, saying it is
  the same space as the published one and that the duplication is forced by the
  leaf rule. Lindelofness uses `thm-open-subsets-of-r-structure`; the square uses
  only that the antidiagonal $\{(x,-x)\}$ is uncountable, closed and discrete.

---

## 3. Staged amendments to PUBLISHED items — NOT APPLIED

Each is a decayed claim: true when written, falsified by a page of this build.
None can be applied by me and each must land in the same commit as the page that
falsifies it.

### 3.1 `items/rem-ordinal-versus-cardinal-exponentiation.md` (page 245) — falsified by 247

**Old text (verbatim, one sentence spanning two lines):**

```
**It is not defined anywhere in this library**, because the cardinal arithmetic
that would support it has not been built here.
```

**New text:**

```
**It is not defined on this page or on any page this one rests on.** It is
defined on [[def-cardinal-arithmetic]], which comes after this page in the
reading order.
```

Reason: `cardinal-arithmetic-and-cofinality` (spec order 247) defines it, and 247
is after 245. As written the sentence becomes a published falsehood the moment
247 publishes. The replacement is scoped to this page's prerequisites, which is
the non-decaying form.

### 3.2 `items/def-cofinal-subset-of-an-ordinal.md` (page 245) — falsified by 247

**Old text (verbatim, from the "What is deliberately not defined here" bullet):**

```
  belong to a page on cardinal arithmetic and cofinality that this library has
  not built, and nothing on this page needs them: the boundedness theorem below
```

**New text:**

```
  belong to [[def-cofinality]], on a page after this one in the reading order,
  and nothing on this page needs them: the boundedness theorem below
```

Note the second half of the bullet ("regular and singular ordinals") should also
be corrected to **cardinals**: `def-cofinality` defines regular and singular for
cardinals, and `thm-cofinality-basics` is what makes $\operatorname{cf}$ of a
limit ordinal a cardinal in the first place.

### 3.3 `items/rem-separation-axiom-conventions.md` (page 261) — falsified by 255

**Old text (verbatim, §5 first bullet):**

```
- **Compactness.** "A compact Hausdorff space is normal" is the standard first
  example of a normal space, and it is absent here because this library has no
  general topological compactness at this point: the only compactness on disk is
  the metric notion, and the general one belongs to a page below this one in the
  reading order. What would license the statement is that page, plus a home for
  it above the present one.
```

**New text:**

```
- **Compactness.** "A compact Hausdorff space is normal" is the standard first
  example of a normal space, and it is absent here because it was not available
  when this page was written: at that point the only compactness in the library
  was the metric notion. General topological compactness is now
  [[def-compact-space]], on a page before this one in the reading order, and the
  separation input the proof needs is
  [[thm-compact-subset-of-a-hausdorff-space-is-closed]]. The statement is not
  added here, because this page is where normality is DEFINED and a theorem
  combining it with compactness belongs above the definition, not beside it.
```

### 3.4 `items/def-normal-and-t4-spaces.md` (page 261) — falsified by 247

**Old text (verbatim):**

```
  prerequisites: the planned page carrying cardinal arithmetic and cofinality sits
  *below* this one and is not yet built, and the hereditary and productive
```

**New text:**

```
  prerequisites: the page carrying cardinal arithmetic and cofinality sits
  *below* this one in the reading order and is not among this page's declared
  prerequisites, and the hereditary and productive
```

### 3.5 `items/rem-continuum-hypothesis.md` (page 18) — falsified by 248

**Old text (verbatim):**

```
$\mathbb{R} \approx \mathcal{P}(\mathbb{N})$, and **this library has not proved
that**. The natural proof identifies a real in $[0,1]$ with its binary expansion,
that is, with a subset of $\mathbb{N}$, and binary expansions are infinite series,
which are developed much later.
```

**New text:**

```
$\mathbb{R} \approx \mathcal{P}(\mathbb{N})$, and **nothing on this page or on
any page it rests on proves that**; it is proved later, in
[[ex-the-cardinality-of-the-continuum]]. The natural proof identifies a real in
$[0,1]$ with its binary expansion, that is, with a subset of $\mathbb{N}$, and
binary expansions are infinite series, which are developed after this page.
```

Everything after this passage in that remark stays: the two uncountability
results ON THAT PAGE really are separate facts there, and nothing on page 18
depends on the bridge.

### 3.6 `items/def-order-topology-on-an-ordinal.md` (page 261) — two-notions fix, falsified by 253/255

**Old text (verbatim, from the "This definition is for ordinals only" paragraph):**

```
The family $\mathcal{B}_\gamma$ above is exactly the general order
basis for an ordinal, rewritten so that no case analysis is needed; nothing here
claims to define the order topology of an arbitrary linearly ordered set, and no
statement on this page is about such a set.
```

**New text:**

```
The family $\mathcal{B}_\gamma$ above is exactly the general order
basis for an ordinal, rewritten so that no case analysis is needed, and that
agreement is now a theorem rather than a remark:
[[lem-the-order-topology-on-an-ordinal]] proves that $\mathcal{B}_\gamma$ is a
basis for the order topology of [[def-order-topology-on-a-linearly-ordered-set]]
restricted to $\gamma$, so the topology defined here IS the general order
topology and not a second notion. No statement on this page is about a linearly
ordered set that is not an ordinal.
```

This is the anti-two-notions obligation for the order topology, and it runs in
the legal direction: 253 and 255 are both below 261.

### 3.7 `items/def-locally-compact-metric-space.md` (page 283) — the standing obligation, falsified by 255

**Old text (verbatim, the first Remarks bullet, second paragraph and the sentence
before it):**

```
  arbitrary topological space, by the same words: every point has a compact
  neighbourhood, compactness there being the open-cover condition for arbitrary
  topological spaces. This library has no general topological compactness at this
  point in the reading order — the only compactness available is
  [[def-metric-compactness]], for metric spaces — so the definition above is
  stated for a metric space and for nothing else, and it never claims to be the
  general one.
```

**New text:**

```
  arbitrary topological space, by the same words: every point has a compact
  neighbourhood. That general notion is [[def-locally-compact-space]], on a page
  before this one in the reading order, and **the two agree**: by
  [[thm-compactness-agrees-with-metric-compactness]] a subset of a metric space is
  compact in the metric sense exactly when it is compact in the topological sense
  of its metric topology, and "has a compact neighbourhood" is then the same
  condition on both sides. The definition above was written when only
  [[def-metric-compactness]] was available and is stated for a metric space; it is
  the metric special case of the general notion and not a second notion.
```

The paragraph that follows it in the published item ("The agreement, when the
general notion arrives, will be immediate...") should be shortened to keep only
its last sentence about why stating this matters; its forward-looking wording is
now spent. **This is the amendment that discharges the standing obligation
recorded on that item and in `research/plan-topology-track.md` §"Scope denials".**

### 3.8 OPTIONAL, owner call: `items/lem-tube-lemma-for-a-compact-metric-factor.md`

That published item carries `aliases: [lem-tube-lemma]`, so the general name is
claimed by the metric special case, and page 255's general lemma has to be called
`lem-tube-lemma-for-a-compact-factor`. Nothing in the corpus cites the bare alias
(`grep` finds only the declaration). Removing it would free the natural name for a
future rename and remove a two-notions hazard; leaving it changes nothing today.
**I recommend leaving it** — ids and aliases are treated as immutable here — and
recording the situation, which this note does.

### 3.9 LOW SEVERITY, no falsehood: `rem-aleph-one-dowker-space-open`, `rem-dowker-spaces`, `rem-suslin-line-non-ccc-square-unverified`

The first two speak of $\aleph_1$, which 247 finally defines; the third says "the
library now has the order topology and $\omega_1$", which 253 broadens to an
arbitrary linearly ordered set. None contains a claim that this build falsifies,
so no amendment is forced. Flagged as an opportunity to add links, not as a
defect. (Beta-F1-1 flagged the first two on the same ground at frontier-1.)

---

## 4. Cross-batch: what Beta-F2-2 needs from page 255

Page 255 hosts nothing that needs pages 263 or 267, and declares no dependency on
them. The traffic is one way.

| item Beta-F2-2 wants | legal home | the ids of mine it must cite |
|---|---|---|
| compact Hausdorff $\Rightarrow$ normal | 263 `hausdorff-via-the-diagonal` or 267 `urysohn-lemma-and-tietze`; both are above 255 and above 261 | `def-compact-space`, `lem-compactness-of-a-subspace-is-ambient`, `thm-closed-subspace-of-a-compact-space-is-compact`, **`thm-compact-subset-of-a-hausdorff-space-is-closed`** (whose clauses (b) and (c) — point vs compact, and compact vs compact, separated by disjoint opens — are the whole proof) |
| locally compact Hausdorff $\Rightarrow$ completely regular | **267 only** (it needs Urysohn's lemma) | `def-locally-compact-space`, `thm-locally-compact-hausdorff-basics`, `def-one-point-compactification`, `thm-one-point-compactification-properties`. The route that avoids 265: $X^{*}$ is compact Hausdorff, hence normal by the item above; apply Urysohn in $X^{*}$ to $\{x\}$ and $C \cup \{\infty\}$, both closed there; restrict to $X$. This needs no hereditary property, so it does not wait on `hereditary-and-productive-separation` (265) |
| paracompact Hausdorff $\Rightarrow$ normal | **NEITHER 263 NOR 267.** Paracompactness is dropped from 255 (see §1.7 note 3) and `partitions-of-unity-and-paracompactness` is spec order **269**, which already declares `compactness` in its `requires`. This item is not hostable anywhere in `frontier-2` | — |

Whichever of 263 / 267 hosts the first two must add `compactness` to its
`requires`; neither declares it today.

---

## 5. `requires` amendments the orchestrator must splice

Five of my six page objects carry `requires` different from `plan-spec.json`.
All point strictly downward and none produces a `redundant-prereq` warning.

| page | spec `requires` | mine | why |
|---|---|---|---|
| 247 | `ordinal-arithmetic`, `order-zorn-and-the-axiom-of-choice` | `ordinal-arithmetic`, **`finite-counting-and-binomial-coefficients`** (20) | 20 homes `def-finite-cardinality`, `thm-sum-rule`, `thm-product-rule`, `thm-cardinality-of-a-set-of-functions` and `def-nat-power`, all needed by the finite dictionary. `order-zorn-and-the-axiom-of-choice` is **dropped as redundant**: `ordinal-arithmetic` reaches it through `ordinals-and-transfinite-recursion` |
| 248 | `cardinal-arithmetic-and-cofinality` | `+ cantor-set-baire-and-measure-zero` (133) | 133 homes `def-cantor-set` and `thm-cantor-set-ternary-description`, the injection $\{0,1\}^{\mathbb{N}} \to \mathbb{R}$ |
| 253 | `subspaces-products-and-quotients`, `ordinal-arithmetic` | `+ topology-of-r` (131) | 131 homes `def-connected-r` and `thm-connected-subsets-of-r-are-intervals`, which `cor-connected-subsets-of-the-line` transports, and `lem-q-and-irrationals-dense-r` |
| 254 | `connectedness` | `+ rn-as-a-normed-space` (167) | 167 homes `def-norm-and-normed-space` and `def-p-norms-on-rn`, needed for convex subsets of $\mathbb{R}^n$ |
| 255 | `subspaces-products-and-quotients`, `filters-and-ultrafilters`, `ordinal-arithmetic` | **`connectedness`** (253), **`compactness-in-metric-spaces`** (120) | 253 for the order topology, the long line and the component machinery; 120 for the compactness dictionary. All three spec entries are **dropped as redundant**: 253 reaches 251 and 245 directly, and 120 reaches 12 |
| 256 | `compactness` | `+ cantor-set-baire-and-measure-zero` (133) | the Cantor set is one of the three worked compact spaces |

**Take my `requires` as a REPLACEMENT, not a union, for 247 and 255.** Unioning
the spec's entries back in produces four `redundant-prereq` warnings on those two
pages and breaks the transitive-reduction convention of `CLAUDE.md`. I verified
both readings: with replacement, `validate-plan` raises **no warning at all**
against any of my six pages.

**Eight NEW `redundant-prereq` warnings appear on OTHER pages** once 255 requires
253, because several later pages declare both (`the-topology-of-euclidean-space`,
`hereditary-and-productive-separation`, `countability-axioms-and-cardinal-
functions`, `complete-metrizability-and-baire`, `uniform-spaces`,
`covering-spaces-and-lifting`, `the-riemann-sphere-and-mobius-transformations`).
These are those pages' own `requires` fields, they are warnings, and tidying them
is a separate, mechanical edit I have not made.

---

## 6. `prosecheck`

`node tools/prosecheck.mjs research/frontier-2-batch-1.notes.md
research/frontier-2-batch-1.pages.json` — result recorded in my report. These two
files are research notes, not items or pages, and are not part of the gated
corpus; the rule they are written to obey is rule (2), no positional claim not
derived from the spec. Every order quoted in this file was read from
`research/plan-spec.json` on 2026-07-29, never from a prose scaffold, and every
"above"/"below" is stated together with the two orders it compares.
