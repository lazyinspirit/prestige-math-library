# Level-9 batch 1 — scaffolding notes (Beta-9-1, 2026-07-27)

Pages: `compactness-in-metric-spaces` (28) + examples (29), designed from scratch;
`cantor-set-baire-and-measure-zero` (40) + examples (41), audited;
`continuity-ivt-evt-and-uniform-continuity` (44) + examples (45), designed from
the RA-13 prose entry. Final page objects: `research/level9-batch-1.pages.json`.

Gates I ran, against a spliced copy of `plan-spec.json` in my scratchpad (the
authoritative run is the orchestrator's):

- `node tools/validate-plan.mjs <spliced>` — **0 errors**. Warning count rose
  from 3 to 9; all six new warnings are `redundant-prereq` and every one is a
  downstream consequence of the two `requires` edges I added to page 44
  (see §3.3 below). None is on a page I own.
- `node tools/depsource.mjs <spliced>` — **0 unresolved, 0 planned-later,
  0 homeless, 0 draft-page** across the whole spec. My six pages contribute
  one `archimedean-reciprocal` triage line
  (`cex-evt-fails-on-the-open-interval-and-on-the-half-line`), which is a
  legitimate DIRECT-form use of `thm-of-archimedean` ("the identity on
  $[0,\infty)$ is unbounded"), not a citation gap.

Owner-decision items live in my report, not here, except where an edit is
conditional on one (marked OWNER-CONDITIONAL).

---

## 1. Prose-scaffold amendments — `research/plan-topology-track.md`

### 1.1 NEW SECTION for plan order 28 (the page has no prose entry anywhere)

**File:** `research/plan-topology-track.md`
**Section:** insert a whole new section immediately BEFORE the line
`## T2. Topological Spaces and Continuity` (i.e. after the `---` that closes the
T1 section).
**New text:**

```
## M3. Compactness in Metric Spaces   (plan order 28)

NUMBERING WARNING. This file's `T1 ... T10` are the GENERAL-topology pages;
`gen-spec.mjs` uses `t(1), t(2), t(3)` for the METRIC pages `metric-spaces`
(24), `completeness-and-uniform-continuity` (26) and `compactness-in-metric-
spaces` (28). The two numberings do not agree: this file's `## T3` is
`subspaces-products-and-quotients` (order 104). The metric pages 26 and 28 had
no prose section of their own; their material was carried inside the T1 lists.
This section splits out page 28 only. Page 26 is published and needs none.

Level-9 design, 2026-07-27 (batch 1). Six decisions bind authoring.

(1) ORDER 28 IS BEFORE `topology-of-r` (38). Nothing on this page may cite
Heine-Borel for R, `def-open-cover-r`, `thm-compact-iff-sequentially-compact-r`
or anything else homed on page 38. Every statement is genuinely metric-general,
and `thm-heine-borel-rn` is proved here by bisection from
`thm-nested-interval-property`, NOT by citing the R-native page. The dictionary
relating the two notions of "compact subset of R" is stated once, later, on
`continuity-ivt-evt-and-uniform-continuity` (44), in
`lem-real-and-metric-notions-agree`.

(2) THE CHOICE ACCOUNTING IS THE SPINE OF THE PAGE, per implication:
    ZF, no choice at all
      compact => closed and bounded (as a subset of any metric space)
      compact => complete           (via the FIP characterisation applied to
                                     the closures of the tails of a Cauchy
                                     sequence; the textbook route through a
                                     convergent subsequence is NOT choice-free)
      compact => totally bounded
      compact => countably compact
      compact => limit point compact
      countably compact  => sequentially compact
      limit point compact => sequentially compact
      sequentially compact => complete
      closed subset of a compact space is compact
      continuous image of a compact space is compact; EVT; Lebesgue number;
      Heine-Cantor; continuous bijection has continuous inverse
      Heine-Borel in R^n (bisection)
    AC_omega, used exactly once and named
      complete + totally bounded => compact
      a compact metric space has a countable dense subset
    DC (dependent choice)
      sequentially compact => totally bounded
The two ZF "=> sequentially compact" arrows are the reason the equivalence
closes at all; both extract a subsequence by taking the LEAST admissible index
at each stage (`thm-well-ordering-principle` + `thm-recursion`), exactly the
canonical-selection device of `thm-perfect-set-uncountable-r`. Where the range
of the sequence is finite, the repeated value is picked with `lem-finite-choice`,
not with a choice principle.

(3) DEPENDENT CHOICE IS INTRODUCED HERE (`def-dependent-choice`, first item of
the page) because without it the compactness trichotomy cannot be stated as an
equivalence: every route from sequential (or limit point, or countable)
compactness to total boundedness builds an epsilon-separated sequence one term
at a time in terms of the previous ones, and countable choice does not licence
that. See the report for the alternative the owner may prefer (define DC on
`order-zorn-and-the-axiom-of-choice`, order 10) and for the fallback if DC is
refused. NOTE: `thm-perfect-set-uncountable-r` (published, order 38) contains
the sentence "that is the axiom of dependent choice, and no item of this library
states it", which any of these options falsifies; see note 4.2 below.

(4) COMPACTNESS OF A SUBSET is defined as compactness of the metric subspace,
and `lem-compactness-is-intrinsic` then proves BOTH that the relatively open
sets are the traces of ambient open sets and that the two readings of "every
open cover has a finite subcover" agree. Nothing later may use the ambient
reading without citing that lemma.

(5) THE B PAGE IS A LEAF, so `ex-discrete-metric` and
`ex-sup-metric-on-bounded-functions` (both on `metric-spaces-examples`, order
25) MAY NOT BE CITED by anything. The three `fs-` items on this page therefore
build their witnesses inline: the discrete metric on N (three axioms verified in
two lines) for `fs-closed-and-bounded-implies-compact-in-every-metric-space` and
`fs-bounded-implies-totally-bounded`, and (0,1) with |x-y| for
`fs-totally-bounded-implies-compact`. The sup metric on the bounded functions
N -> R comes from `lem-sup-metric-is-a-metric` (A page, order 24), which is
citable.

(6) NO WORD "HOMEOMORPHISM" AND NO WORD "SEPARABLE". Neither is defined at this
point in the reading order (`def-homeomorphism-and-open-maps` is order 102,
separability is nowhere). So the statements are "the inverse map is continuous,
and f carries open sets to open sets" and "has a countable dense subset".

DEFS: dependent choice; open cover, subcover, compact metric space, compact
subset; countably compact, sequentially compact, limit point compact; finite
epsilon-net, totally bounded.

THMS: relative openness and the intrinsic character of compactness; totally
bounded implies bounded, and total boundedness passes to subspaces and closures;
compact iff every family of closed sets with the FIP meets; closed subsets of
compacts are compact; compacts are closed and bounded; compact implies complete
and totally bounded; the ZF implications among the four compactness variants;
sequentially compact implies complete; sequentially compact implies totally
bounded (DC); complete + totally bounded implies compact (AC_omega); the full
equivalence; Heine-Borel in R^n by bisection; continuous images of compacts;
EVT; the Lebesgue number lemma; Heine-Cantor; a continuous bijection from a
compact space has a continuous inverse; a compact metric space has a countable
dense subset.

FS: closed and bounded implies compact in every metric space; totally bounded
implies compact; bounded implies totally bounded.

B: the discrete metric (compact iff totally bounded iff finite, complete always);
the cube [-M,M]^n is totally bounded with an explicit grid net; a convergent
sequence together with its limit is compact; the distance to a nonempty compact
set is attained, and disjoint compacts are at positive distance; the Lebesgue
number of the two-set cover of [0,1] is exactly 1/3.
CEX: the closed unit ball of the bounded functions on N with the sup metric is
closed and bounded and not compact (the singleton indicators are 1-separated);
N with the discrete metric is bounded and not totally bounded; (0,1) is totally
bounded and not compact; on (0,1) the identity has no greatest value and 1/x is
unbounded, so EVT needs compactness; 1/x is continuous and not uniformly
continuous on (0,1); the cover of (0,1) by (1/(k+2), 1) has no Lebesgue number.
```

### 1.2 T1 pointer to the new section

**File:** `research/plan-topology-track.md`
**Section:** `## T1. Metric Spaces`, the paragraph beginning
`Citation note for the metric pages (owner-approved additions of 2026-07-26):`
**Edit:** append at the end of that paragraph, after
`cites \`thm-metric-sequential-closure\` + \`lem-limit-preserves-order\`.`:

```
Level-9 addition (batch 1): the T1 DEFS/THMS lists above cover THREE published
or planned pages, not one — `metric-spaces` (24), `completeness-and-uniform-
continuity` (26) and `compactness-in-metric-spaces` (28). The compactness half
of those lists now has its own section, `## M3` below; read it before authoring
page 28. In particular "compact <=> sequentially compact <=> complete + totally
bounded" is NOT a single theorem here: it is five implications with three
different choice costs, itemised in M3 note (2).
```

---

## 2. Prose-scaffold amendments — `research/plan-realanalysis-pages.md`

### 2.1 RA-11 audit block (new)

**File:** `research/plan-realanalysis-pages.md`
**Section:** `**RA-11 The Cantor Set, Baire Category, and Measure Zero in R** <- RA-10`
**Edit:** append immediately after the line ending
`two homeomorphic sets of different Baire category.`

```
Level-9 audit, 2026-07-27 (Beta-9-1). Seven notes bind authoring of this pair.
(a) TWO NEW ITEMS, and they are load-bearing. `lem-finite-interval-cover-total-
length` (finitely many intervals covering [a,b] have total length >= b - a,
proved by induction on the number of intervals) and `lem-nondegenerate-interval-
is-not-null` (no interval of positive length has measure zero: enlarge the k-th
covering interval to an open one of length |I_k| + eps*2^{-k-1}, apply Heine-
Borel, then the previous lemma). WITHOUT THEM three items on this pair are
unprovable, because each needs "a cover of total length < 1 cannot cover an
interval of length 1": `thm-fat-cantor-set-has-positive-measure`,
`fs-null-implies-content-zero` and `cex-null-set-not-of-content-zero`. The
scaffold had none of it. Both lemmas are also what `the-riemann-integral`
(order 54) will want for Lebesgue's criterion.
(b) THE CHOICE-FREENESS OF BAIRE IS NOT FREE. `rem-baire-in-r-is-choice-free`
claims the nested-interval proof spends no choice; the naive proof picks an
interval at each stage in terms of the previous one, which is dependent choice.
`thm-baire-category-r` must therefore run the canonical selection of
`thm-perfect-set-uncountable-r`: fix one enumeration of Q, and at every stage
take the interval with LEAST-INDEXED RATIONAL ENDPOINTS meeting the
requirements. `thm-rationals-countable`, `lem-rat-embeds-dense` and
`thm-well-ordering-principle` are now in the deps of both items for exactly
this; the remark must name the device, not merely assert the conclusion. This
is also what `rem-baire-category-choice-strength` means by "a fixed countable
dense set removes every choice".
(c) `def-monotone-sequence` WAS DROPPED from `thm-cantor-function-properties`:
it is about SEQUENCES and says nothing about functions, and no definition of a
monotone function exists before RA-14 (order 46). The title now states the
property inline, "satisfies c(x) <= c(y) whenever x <= y".
(d) "TOTALLY DISCONNECTED" IS UNDEFINED IN THIS LIBRARY. `def-connected-r`
defines connectedness for subsets of R and nothing defines total
disconnectedness. `thm-cantor-set-properties` and
`ex-cantor-set-is-perfect-and-totally-disconnected` now say what is actually
provable: the set contains no interval of positive length, so by
`thm-connected-subsets-of-r-are-intervals` its only nonempty connected subsets
are single points. The phrase may appear as a gloss, never as the claim.
(e) THE CANTOR FUNCTION'S CONTINUITY STAYS OFF THIS PAGE and lands at order 44,
as `cor-cantor-function-is-continuous` on `continuity-ivt-evt-and-uniform-
continuity`, together with `rem-cantor-function-increases-only-on-a-null-set`.
The scaffold was RIGHT to claim only well-definedness, monotonicity,
surjectivity and constancy on the removed intervals here: no definition of
continuity for real functions exists before order 42.
(f) TWO PROSE B ITEMS ARE NOT IN THE SCAFFOLD AND SHOULD NOT BE. "Two
homeomorphic perfect nowhere dense sets of which only one is null" and "two
homeomorphic sets of different Baire category" both need a homeomorphism of
subsets of R, and `def-homeomorphism-and-open-maps` is order 102. They belong
on a later page or must be restated without the word; they are not a gap here.
(g) THREE RETITLES, because the words were not available: "outer measure 1/2"
became "cannot be covered by intervals of total length less than 1/2"
(`ex-fat-cantor-measure-computed`) and "a set of full measure" became "the
union of a meager set and a set of measure zero" (`cex-meager-set-of-full-
measure`). No measure-theoretic notion beyond `def-measure-zero-and-content-
zero` exists here.
```

### 2.2 RA-13 audit block (new)

**File:** `research/plan-realanalysis-pages.md`
**Section:** `**RA-13 Continuity, IVT, EVT, and Uniform Continuity** <- RA-12`
**Edit:** append at the end of the RA-13 entry, after the paragraph ending
`which makes psi this track's natural uniformly-continuous example.`

```
Level-9 audit, 2026-07-27 (Beta-9-1). Eight notes bind authoring of this pair.
(a) THE SEAM IS DISCHARGED BY ONE ITEM, `lem-real-and-metric-notions-agree`,
placed immediately after `def-uniform-continuity-real`. It is a LEMMA, not a
remark, so later pages can cite it and move between the two vocabularies. It
records four agreements at once: continuity, uniform continuity, the Lipschitz
and Holder conditions (which are NOT redefined here — they are
`def-lipschitz-holder-contraction` of order 26 instantiated at X = A subset of
(R, |x-y|)), and, as a fifth clause, that a subset of R is compact in the
open-cover sense of `def-open-cover-r` exactly when it is a compact metric
subspace. That fifth clause closes the OTHER seam nobody had noticed: page 28
defines compactness metrically and page 38 defines it again R-natively, and
until now no item said the two agreed.
(b) CONTINUITY AND UNIFORM CONTINUITY ARE DEFINED R-NATIVELY, resting on
`def-function-limit` as the RA-12 retraction requires; Lipschitz and Holder are
NOT. That asymmetry is deliberate: the first two are the subject of the page and
must be stated in the idiom of RA-12, the second two would gain nothing from a
second definition.
(c) EVT, THE CONTINUOUS IMAGE OF A COMPACT SET, AND HEINE-CANTOR ARE STATED
TWICE ON PURPOSE, metric-generally at order 28 and R-natively here, with
distinct ids and distinct proofs, per the standing decision at the head of
`plan-topology-track.md`. The R-native proofs go through
`thm-heine-borel-characterisation-r` and `thm-compact-iff-sequentially-compact-r`
(order 38, choice-free and order-based); the metric proofs go through the cover
machinery of page 28. `lem-real-and-metric-notions-agree` is the single place
where the duplication is acknowledged, and every duplicated item must link it.
(d) THE k-TH ROOTS COROLLARY IS NOT AN A-PAGE ITEM. `thm-nth-roots-exist`
already exists and is published (order 16); minting a second id for the same
statement is forbidden. The IVT re-proof lives on the B page as
`ex-ivt-gives-nth-roots`, which cites the existing theorem.
(e) THE STRICT HIERARCHY IS NOT RESTATED. `thm-metric-regularity-hierarchy`
(order 26) already gives Lipschitz => uniformly continuous => continuous and
Holder => uniformly continuous; via note (a) it applies verbatim. Strictness
belongs in a Remark on `lem-real-and-metric-notions-agree` naming the B-page
witnesses `ex-x-to-the-beta-separates-the-holder-classes` and
`cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval`, as ordinary
same-pair links, not dependencies — the `thm-metric-equivalence-hierarchy`
pattern of the level-7 audit.
(f) "A FUNCTION WITH THE INTERMEDIATE VALUE PROPERTY IS CONTINUOUS" IS NOT
REFUTED HERE. Every witness available at order 44 is an oscillator, and the
only oscillator in the library, `ex-distance-to-the-integers`, is homed on
`limits-of-real-functions-examples` (order 43), a B page, which is a leaf: no
item anywhere may depend on it. The false statement belongs on RA-14, whose B
page already plans the Conway base-13 function. This is a mathematical
placement, not a page-budget cut.
(g) alpha-HOLDER WITH alpha > 1 MUST STATE ITS HYPOTHESIS INLINE.
`def-lipschitz-holder-contraction` defines the Holder condition for RATIONAL
0 < alpha <= 1 only, so "alpha > 1" is not expressible through it;
`thm-holder-exponent-above-one-forces-constancy` writes
|f(x) - f(y)| <= C|x-y|^alpha out in full, with alpha a rational > 1 and
`def-rational-power` supplying the power.
(h) INDEXING. def-sequence is 0-indexed, so the witnesses on the B page are the
pairs 1/(k+2), 1/(k+3) for 1/x on (0,1) and k+1, k+1+1/(k+1) for x^2 on R;
never 1/k or n, n+1/n.
```

### 2.3 RA-13 seam note — correct an unexecutable instruction

**File:** `research/plan-realanalysis-pages.md`
**Section:** `**RA-13 ...**`, the paragraph beginning
`Level-8 seam note (Alpha-8, 2026-07-27, step-9 audit):`
**Old text:**
```
At the same
point, identify psi = dist(., Z) of `ex-distance-to-the-integers` with the set
distance d(x, Z) and its 1-Lipschitz property (`lem-distance-to-set-is-lipschitz`,
level 7), which makes psi this track's natural uniformly-continuous example.
```
**New text:**
```
At the same
point, identify psi = dist(., Z) with the set distance d(x, Z) and its
1-Lipschitz property (`lem-distance-to-set-is-lipschitz`, level 7), which makes
psi this track's natural uniformly-continuous example.

CORRECTION, level-9 audit 2026-07-27 (Beta-9-1). The sentence above originally
routed that identification through `ex-distance-to-the-integers`. That item is
homed on `limits-of-real-functions-examples`, an EXAMPLES page, and examples
pages are leaves (SCHEMA §7): no item on RA-13 or on its B page may depend on
it, so the instruction was unexecutable as written. The identification is made
instead from the A-page items it actually needs — `def-metric-bounded-diameter`
(distance from a point to a nonempty set) and `lem-distance-to-set-is-lipschitz`,
both on `metric-spaces`, order 24 — in the new B item
`ex-distance-to-the-integers-is-1-lipschitz`. That reaches exactly the intended
destination, and it is why the seam obligation is recorded as discharged.
```

---

## 3. Authoring-time notes (no scaffold anchor; brief the step-5 agent)

### 3.1 `compactness-in-metric-spaces` (28)

- **`def-dependent-choice`:** state it in the form already used in prose by
  `rem-choice-ledger` — for a relation R on a nonempty X in which every element
  is R-related to some element, there is a sequence with x_n R x_{n+1} for all
  n, and x_0 may be prescribed. Say explicitly that DC implies AC_omega and is
  implied by AC, that neither implication reverses (external, quoted, not
  proved), and that nothing in this library proves DC. Do NOT assert
  independence results.
- **`lem-compactness-is-intrinsic`:** the trace claim comes straight from
  `B_A(a,r) = B_X(a,r) ∩ A`, which `def-isometry-and-metric-embedding` already
  proves; a relatively open U is the union of its subspace balls, hence the
  trace of the corresponding union of ambient balls. There is no general
  subspace-topology item at this order and none is needed.
- **`thm-compact-implies-the-other-compactness-forms`:** four separate proofs,
  none using choice.
  - compact => limit point compact: if A is infinite with no limit point, the
    FAMILY {U open : U meets A in at most one point} ∪ {X \ A} is an open cover
    (a family cut out by a property, so nothing is selected); a finite subcover
    forces A finite.
  - countably compact => sequentially compact: put F_n = closure{x_k : k >= n};
    if the intersection were empty, {X \ F_n} would be a countable open cover
    with no finite subcover. Take p in the intersection, then at stage k take
    the LEAST j > n_{k-1} with d(x_j, p) < 1/(k+1).
  - limit point compact => sequentially compact: if the range is infinite, a
    limit point p of the range has infinitely many indices in every ball
    (otherwise finitely many points at positive minimum distance would give a
    smaller ball meeting the range only in p), so the same least-index
    recursion works; if the range is finite, some value repeats infinitely often
    and `lem-finite-choice` picks one.
  - Every recursion is `thm-recursion` applied to a total map, with
    `thm-well-ordering-principle` supplying "least".
- **`thm-compact-implies-complete-and-totally-bounded`:** total boundedness is
  the cover {B(x, eps) : x in X}. Completeness must NOT go through a convergent
  subsequence: apply `thm-compact-iff-finite-intersection-property` to the
  closures of the tails of a Cauchy sequence, then show any point of the
  intersection is the limit by a direct epsilon argument.
- **`thm-complete-and-totally-bounded-implies-compact`:** AC_omega is used
  ONCE, at the very start, to fix a sequence (F_n) of finite 1/(n+1)-nets
  TOGETHER WITH an enumeration of each. Everything after that is canonical: at
  stage n take the least-indexed point y of F_n for which the current set
  intersected with B(y, 1/(n+1)) still has no finite subcover. Say in the body
  that the choice is non-dependent, which is exactly why AC_omega suffices and
  DC is not needed here.
- **`thm-sequentially-compact-implies-totally-bounded`:** DC on the relation
  "t' end-extends the epsilon-separated tuple t by one point"; the union of the
  resulting chain is an epsilon-separated sequence, which has no Cauchy
  subsequence. Say in the body why AC_omega does not suffice: a choice function
  for the family of "epsilon-separated tuples of length n" gives tuples with no
  coherence between them, and no diagonal extracts a separated sequence from
  them.
- **`thm-heine-borel-rn`:** bisection into 2^n subboxes, at each stage the
  least-indexed subbox with no finite subcover; the side lengths are
  M*2^{-k}, null by `lem-geometric-sequence-null`; the centres are handled
  coordinatewise by `thm-nested-interval-property`. Watch **n = 0**:
  `thm-euclidean-space-complete` is stated for n >= 1, and R^0 is the
  one-point space of the empty function, compact for trivial reasons — state
  the n = 0 case explicitly rather than letting the induction imply it.
  d_2 <= sqrt(n) d_inf comes from `lem-metrics-on-rn`.
- **`thm-lebesgue-number-lemma`:** take a finite subcover U_1..U_m first, then
  f(x) = max_i d(x, X \ U_i). Two traps: (i) if some U_i = X then X \ U_i is
  empty and d(x, ∅) is undefined — handle that case separately (any delta
  works); (ii) "a max of finitely many 1-Lipschitz functions is 1-Lipschitz"
  is proved inline from |max a_i − max b_i| <= max|a_i − b_i|, there being no
  item for it. f > 0 everywhere because each x lies in some open U_i; EVT gives
  a positive minimum.
- **`thm-extreme-value-metric`:** f[X] is compact in R, hence closed and
  bounded; sup f[X] exists and lies in the closure of f[X] by `lem-sup-epsilon`,
  hence in f[X]. Nonemptiness of X is a hypothesis, not an oversight.
- **`lem-compact-metric-space-has-a-countable-dense-subset`:** the word
  "separable" is banned (nothing defines it); AC_omega is used once, to fix a
  1/(n+1)-net for each n. Cite `thm-countable-union-of-countable` and say
  honestly that its own AC_omega hypothesis is the same one already spent.
- **`fs-closed-and-bounded-implies-compact-in-every-metric-space`:** the
  refutation builds the discrete metric on N inline (verify M1, M2, M3 in two
  lines); N is closed in itself, bounded by diameter 1, and the cover by
  singleton balls B(n, 1/2) has no finite subcover.
- **Indexing:** every 1/n-shaped object on this pair starts high enough under
  0-indexing — the nets are 1/(n+1)-nets, the cover of (0,1) is by
  (1/(k+2), 1), the compact set of the B page is {0} ∪ {1/(k+1) : k in N}.

### 3.2 `cantor-set-baire-and-measure-zero` (40) and its B page

- **`lem-finite-interval-cover-total-length`:** induction on the number of
  covering intervals. The clean induction step: among the intervals covering
  [a,b], one contains a; it has the form with right endpoint c; if c >= b the
  single interval already has length >= b - a; otherwise c is covered by another
  interval and the remaining ones cover [c,b]. State the degenerate cases
  (b = a, empty intervals) explicitly.
- **`lem-nondegenerate-interval-is-not-null`:** the enlargement must produce
  OPEN intervals, because `def-open-cover-r` covers with open subsets of R;
  |J_k| <= |I_k| + eps*2^{-k-1} and `thm-geometric-series` sums the slack to
  eps. Apply the covering lemma to the finite subcover.
- **`thm-baire-category-r`:** see amendment 2.1(b). The remark
  `rem-baire-in-r-is-choice-free` may claim only what is proved: THIS proof
  spends no choice; it may not claim that no choice-using proof is needed in a
  complete metric space beyond what `rem-baire-category-choice-strength`
  already records (that item is `proved_here: false`, so the remark inherits the
  fuchsia ‡ marking — that is correct and intended).
- **`thm-countable-union-of-null-is-null`:** AC_omega picks one cover per set;
  after that, index the doubled family by a bijection with N × N
  (`thm-n-cross-n-countable`) and bound EVERY FINITE partial sum by
  sum_n eps*2^{-n-1}, then use
  `thm-nonnegative-series-bounded-partial-sums`. No rearrangement theorem is
  needed and none is available (order 36 has no items).
- **`thm-compact-null-is-content-zero`:** same enlargement trick as
  `lem-nondegenerate-interval-is-not-null`; `thm-geometric-series` and
  `def-interval` were missing from the scaffold's deps and are now present.
- **`thm-fat-cantor-set-has-positive-measure`:** the removed intervals at stage
  n number 2^{n-1} and have length 4^{-n} each, so the total removed length is
  sum_{n>=1} 2^{n-1} 4^{-n} = 1/2, leaving "length 1/2". The contradiction runs:
  if the set were null it would have content zero (it is compact), so finitely
  many intervals of total length < 1/2 would cover it; adding the removed
  intervals covers [0,1] with total length < 1, contradicting
  `lem-finite-interval-cover-total-length`. Nowhere density needs only that the
  stage-n intervals have length tending to 0.
- **`def-cantor-function` / `thm-cantor-function-properties`:** the extension
  off the Cantor set is c(x) = sup{c(t) : t in C, t <= x}; the sup exists
  because the values lie in [0,1] (`def-bounded-set`, `lem-sup-unique`).
  Monotonicity is stated inline as c(x) <= c(y) for x <= y — there is no
  monotone-function definition at this order.
- **`cex-meager-set-of-full-measure`:** G = intersection over n of
  U_n = union over k of (q_k − 2^{-k-n-2}, q_k + 2^{-k-n-2}). Each U_n is open
  and dense (`lem-q-and-irrationals-dense-r`) and has "total length" at most
  2^{-n}, so G is null; each R \ U_n is closed with empty interior, so
  R \ G is meager. State the decomposition R = (R \ G) ∪ G and nothing stronger:
  the words "full measure" and "measure 1" are not available.
- **`cex-null-set-not-of-content-zero`:** a FINITE family of intervals covering
  Q ∩ [0,1] has closed union (`thm-open-set-algebra-r`) containing the closure
  of Q ∩ [0,1], which is [0,1] (`lem-q-and-irrationals-dense-r`,
  `thm-closure-characterisations-r`); then apply the covering lemma.

### 3.3 `continuity-ivt-evt-and-uniform-continuity` (44) and its B page

- **`requires` CHANGED.** The page now declares three prerequisites, not one:
  `limits-of-real-functions` (42), `cantor-set-baire-and-measure-zero` (40, for
  `cor-cantor-function-is-continuous`) and `compactness-in-metric-spaces` (28,
  for `lem-real-and-metric-notions-agree`). validate-plan accepts this, but it
  makes six pre-existing `requires` entries elsewhere transitively redundant and
  they now WARN. **For Alpha-9 to apply in `plan-spec.json`, at the same time as
  splicing:** drop `cantor-set-baire-and-measure-zero` from the `requires` of
  `monotone-functions-and-discontinuities` (46) and `the-riemann-integral` (54);
  drop `metric-spaces` from `rn-as-a-normed-space` (62); drop
  `completeness-and-uniform-continuity` from `uniform-convergence-of-functions`
  (64); drop `compactness-in-metric-spaces` from
  `approximation-and-compactness-in-ck` (66). Each is now reached transitively,
  and CLAUDE.md asks `requires` to stay a transitive reduction. This is
  OWNER-CONDITIONAL on recommendation R3 of my report; if the 44 -> 40 edge is
  refused, only the last three of the five apply.
- **`def-continuity-real`:** three clauses, and all three must be present. At a
  limit point of A, continuity at c is `lim_{x->c} f(x) = f(c)`; at an isolated
  point of A every function is continuous; on A means at every point of A. Say
  explicitly that this is NOT the raw formula of
  `fs-limit-unique-at-every-point-of-the-domain`: the limit is undefined at an
  isolated point, the continuity is not.
- **`thm-sequential-criterion-for-continuity`:** the epsilon-to-sequence
  direction is ZF; the converse costs AC_omega and inherits it from
  `thm-sequential-criterion-for-function-limits`. Do NOT route algebra,
  composition, IVT, EVT or Heine-Cantor through it — they are all proved
  directly, exactly as RA-12 organised itself (note (b) of the RA-12 audit).
  `rem-heine-criterion-choice-cost` is cited rather than restated.
- **`thm-continuity-preimage-characterisation`:** "relatively open in A" is
  defined inline as "the intersection with A of an open subset of R". There is
  no R-native subspace-topology item, and reaching for the metric one before
  `lem-real-and-metric-notions-agree` would be circular in reading order.
- **`thm-intermediate-value`:** bisection with a fixed rule (always test the
  left half first) so no choice is spent; `thm-nested-interval-property`
  supplies the point, `lem-geometric-sequence-null` the vanishing lengths.
- **`lem-monotone-with-interval-image-is-continuous`:** the whole proof is: given
  eps, if f(c) − eps is in the image pick u with f(u) = f(c) − eps, and u < c
  follows from monotonicity; symmetrically for v; then delta = min(c − u, v − c).
  Endpoint and boundary cases (f(c) ± eps outside the image) are handled by
  taking the corresponding one-sided delta. It does NOT need one-sided limits of
  monotone functions, which are RA-14 material.
- **`cor-cantor-function-is-continuous`:** the image is [0,1] by
  `thm-cantor-function-properties` (surjectivity), which is order-convex, so
  the lemma applies directly. No IVT is needed.
- **`rem-cantor-function-increases-only-on-a-null-set`:** this item carries
  `external_refs: [rem-lebesgue-monotone-differentiation,
  rem-ftc-absolutely-continuous]` (both published, both `proved_here: false`),
  and must LINK both in the body — that is what makes the ‡ marker appear and
  what extcheck enforces. What it may claim: c is continuous, nondecreasing,
  surjective, constant on every removed interval, and the Cantor set has measure
  zero, so the increase happens on a null set. What it may NOT claim: that
  c' = 0 almost everywhere, that c is singular, or anything about Lebesgue
  measure — those are recorded as external, in the two referenced items, and the
  body says so explicitly.
- **`thm-heine-cantor-r`:** proved R-natively by contradiction from
  `thm-compact-iff-sequentially-compact-r` — two sequences x_k, y_k in K with
  |x_k − y_k| < 1/(k+1) and |f(x_k) − f(y_k)| >= eps_0, extract a convergent
  subsequence, contradiction with continuity at the limit. The extraction of the
  two sequences is one AC_omega application; declare `def-countable-choice` and
  name the step, as RA-12 does.
- **`thm-compactness-is-necessary-for-evt-and-uniform-continuity`:** E is not
  compact iff it is unbounded or not closed. Unbounded: the identity is
  continuous and unbounded. Not closed: there is x_0 in the closure of E outside
  E, and 1/(x − x_0) is continuous and unbounded on E, 1/(1 + (x − x_0)^2) is
  bounded continuous with supremum 1 not attained, and if E is bounded the first
  of these is continuous and not uniformly continuous. Prefer the direct
  epsilon argument for "x_0 is adherent" over
  `lem-sequential-characterisation-of-closure-r`, which spends AC_omega.
- **`thm-holder-exponent-above-one-forces-constancy`:** partition [x,y] into n
  equal parts, sum the n estimates C(|x−y|/n)^alpha = C|x−y|^alpha n^{1−alpha},
  which tends to 0 because alpha > 1; `lem-triangle-inequality-finite` sums the
  pieces and `lem-rational-power-monotone` handles the powers.
- **B page, `ex-distance-to-the-integers-is-1-lipschitz`:** build psi from
  `def-metric-bounded-diameter` (distance from a point to the nonempty set Z
  inside R) and get 1-Lipschitzness from `lem-distance-to-set-is-lipschitz`.
  Z sits inside R via `lem-int-embeds-rat` then `lem-rat-embeds-dense`;
  attainment at a nearest integer is `lem-integer-part` (order 42), which now
  exists — do not rebuild it from Archimedean plus well-ordering. Do NOT cite
  `ex-distance-to-the-integers`: it is on a leaf page.
- **B page, `cex-dirichlet-is-nowhere-continuous`:** the two approaching
  sequences come from `lem-sequential-characterisation-of-closure-r` applied to
  the dense sets of `lem-q-and-irrationals-dense-r`; the AC_omega cost is
  inherited through that lemma and should be named, as RA-12 note (f) requires.
- **B page, `ex-fixed-point-from-the-ivt`:** x |-> (x + 2/x)/2 maps [1,2] into
  itself by (sqrt x − sqrt(2/x))^2 >= 0, the same identity
  `ex-banach-fixed-point-for-square-roots` uses; the fixed point is sqrt 2, and
  `thm-nth-roots-exist` names it. No derivatives (the MVT is order 48).
- **Statement-only judging.** The judge sees Statements. Every item whose
  content is "this is the same notion as the metric one" must SAY SO in its
  Statement, not only in its proof — that applies to
  `lem-real-and-metric-notions-agree` above all.

---

## 4. Forward references, cross-page references, and one published-claim decay

### 4.1 Forward references
- **None**, in any `deps`, on any of my six pages. `depsource` reports
  `planned-later 0` for the whole spliced spec.
- One PLANNED orientation-only forward reference, declarable at authoring:
  `rem-compactness-choice-ledger-metric` (page 28) may point at `compactness`
  (order 108), where Tychonoff and the general-topological failure of the
  trichotomy live. That page has no items yet, so no `forward_refs` id can be
  declared now; record it in the ledger when page 108 is scaffolded. It is
  orientation only and must not appear in any Statement or Facts & Assumptions.

### 4.2 A published claim that my batch falsifies — must be amended
`items/thm-perfect-set-uncountable-r.md` (published, order 38) says, in the
paragraph "The selection is canonical, because this library has no dependent
choice":

> that is the axiom of dependent choice, and no item of this library states it;
> only the axiom of countable choice is available, and it does not licence a
> recursive selection.

If `def-dependent-choice` is added anywhere (recommendation R1), the clause
"no item of this library states it" becomes false — this is the published-claim
decay class, and no gate can see it. Minimal repair, which keeps the whole point
of the paragraph intact:

**Old text:** `that is the axiom of dependent choice, and no item of this library states it; only the axiom of countable choice is available, and it does not licence a recursive selection.`
**New text:** `that is the axiom of dependent choice ([[def-dependent-choice]]), which this library defines but deliberately does not assume here; the canonical construction below needs no choice principle at all, and countable choice, which is what the surrounding pages spend, does not licence a recursive selection.`

The item's `deps` would gain `def-dependent-choice` — legal, since
`def-dependent-choice` sits at order 28 and this item at order 38. Its `judge`
block must then be DELETED per SCHEMA §3 (the judge passed text that has since
changed). OWNER-CONDITIONAL on R1.

### 4.3 Same-level cross-page references
- Page 44 depends on page 40 (`thm-cantor-function-properties`,
  `thm-cantor-set-properties`, `def-cantor-set`, `def-cantor-function`,
  `def-measure-zero-and-content-zero`) and on page 28
  (`def-metric-compactness`, `lem-compactness-is-intrinsic`,
  `def-metric-compactness-variants`, `thm-continuous-image-of-a-compact-space-
  is-compact`, `thm-extreme-value-metric`, `thm-heine-cantor-metric`). All three
  pages are in MY batch, so nothing crosses to batch 2.
- **Nothing my batch scaffolds is needed by, or needs, any page of the other
  level-9 batch.** In particular `absolute-convergence-and-rearrangement`
  (order 36) is not cited by page 40: `thm-countable-union-of-null-is-null`
  avoids rearrangement entirely (see §3.2).
- Leaf rule: no item on any of my four A pages cites an item homed on any
  examples page; validate-plan's `b-leaf` check passes.
