# frontier-2 batch 2 — scaffolding notes (Beta-F2-2, 2026-07-29)

Pages scaffolded: `hausdorff-via-the-diagonal` + `hausdorff-via-the-diagonal-examples`;
`urysohn-lemma-and-tietze` + `urysohn-lemma-and-tietze-examples`;
`inclusion-exclusion-and-the-pigeonhole-principle` +
`inclusion-exclusion-and-the-pigeonhole-principle-examples`.
Final page objects: `research/frontier-2-batch-2.pages.json`.

Gates run against a SPLICED COPY of the spec in my scratchpad (I did not write to
`research/plan-spec.json`). The splice also carries a **synthetic four-item stand-in
for `compactness` (255)** — see §3 — because without it my topology deps cannot
resolve at all and no gate can run.

- `node tools/validate-plan.mjs <spliced>` — **PASS, 0 errors.** 6 new warnings, all
  `redundant-prereq`, listed in §4.
- `node tools/depsource.mjs <spliced>` — **0 unresolved, 0 planned-later, 0 draft-page,
  0 homeless** on all six pages. Every `planned-earlier` dep targets a page of THIS
  build (`compactness`, `hausdorff-via-the-diagonal`, `urysohn-lemma-and-tietze`) or
  an A page of my own pair. **No dep of mine lands on an unbuilt planned page.**
  Per page: 263 → 82 published / 10 planned-earlier; 264 → 49 / 12; 267 → 125 / 6;
  268 → 57 / 13; 22 → **159 published / 0 planned-earlier**; 23 → 47 / 25.

Everything below is either (1) a prose-scaffold amendment stated as an exact edit, or
(2) an authoring-time note with no scaffold anchor that must reach the step-5 author.
Owner-decision items live in my report, not here.

---

## 1. Prose-scaffold amendments

### 1.1 `research/plan-topology-track.md` — T7, the three inherited results now have homes

**File:** `research/plan-topology-track.md`
**Section:** `## T7. Separation Axioms   [needs F1]`
**Edit:** insert immediately before the line beginning `**Dropped from 261/262, each with what would license it.**`:

```
**frontier-2 audit, 2026-07-29 (batch 2). THE THREE COMPACTNESS-DEPENDENT
RESULTS T7 LOST AT 261 NOW HAVE HOMES, AND NONE OF THEM IS AT 255.** Page 255
`compactness` defines general compactness but sits BELOW 261, so no result whose
statement names regularity, normality or complete regularity can live there;
`fwdcheck` rejects such a statement outright as `forward-on-spine`. The three
results are therefore homed as follows.

(1) *compact Hausdorff => normal* is homed on **263 `hausdorff-via-the-diagonal`**
as `thm-a-compact-hausdorff-space-is-regular-and-normal`, together with the two
separation lemmas it is built from, `lem-a-point-and-a-compact-set-in-a-hausdorff-
space-are-separated-by-disjoint-open-sets` and `lem-two-disjoint-compact-sets-in-a-
hausdorff-space-are-separated-by-disjoint-open-sets`. **263 rather than 267,
because 265 `hereditary-and-productive-separation` needs it and 265 does not
declare 267.** The standard proof that normality is not hereditary runs through a
compact Hausdorff space with a non-normal subspace, and 265 requires 263 and 255
and nothing above them; homing the theorem at 267 would put it out of 265's reach
permanently.

(2) *locally compact Hausdorff => completely regular* is homed on **267
`urysohn-lemma-and-tietze`** as `thm-a-locally-compact-hausdorff-space-is-
completely-regular`, since it needs Urysohn's lemma as well as local compactness.
Its geometric half — that such a space has a neighbourhood base of open sets with
compact closure, hence is regular — is split out onto 263 as `lem-a-locally-
compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure`, because it
needs no Urysohn function. **The route through "complete regularity is
hereditary" is NOT taken**: that property is 265's, 265 is unbuilt, and 265 sits
below 267 so it cannot be back-filled. The proof used instead is direct: shrink to
a compact-closure neighbourhood, apply Urysohn's lemma inside that compact
Hausdorff (hence T4) subspace, and extend by zero with the finite-closed-cover
clause of `lem-continuity-is-local-and-pastes`.

(3) *paracompact Hausdorff => normal* is **NOT on either of these pages.** Its
home is **269 `partitions-of-unity-and-paracompactness`**, which `plan-spec.json`
declares with `requires` = 267 and 255, so it sits above both and above every
separation axiom it names. Nothing about it is scaffolded here.
```

### 1.2 `research/plan-topology-track.md` — T5's THMS list attributes three results to 255 that cannot live there

**File:** `research/plan-topology-track.md`
**Section:** `## T5. Compactness   [needs F1]`
**Old text (inside the THMS paragraph, three fragments on separate lines):**

```
of Hausdorff spaces are closed; compact Hausdorff => normal; continuous images;
```

**New text:**

```
of Hausdorff spaces are closed; continuous images;
```

**Old text:**

```
compact Hausdorff => completely regular; the Baire category theorem for locally
compact Hausdorff spaces; paracompact Hausdorff => normal; partitions of unity;
```

(the line in the file reads `... the one-point compactification and when it is Hausdorff; locally
compact Hausdorff => completely regular; the Baire category theorem for locally
compact Hausdorff spaces; paracompact Hausdorff => normal; partitions of unity;`)

**New text:**

```
the Baire category theorem for locally
compact Hausdorff spaces; partitions of unity;
```

**Edit:** and append to the end of the T5 section, after the CEX line:

```
**frontier-2 audit, 2026-07-29 (batch 2). THREE ITEMS OF THE LIST ABOVE ARE NOT
255's, and were removed from it.** *compact Hausdorff => normal* is homed on 263
`hausdorff-via-the-diagonal`; *locally compact Hausdorff => completely regular* on
267 `urysohn-lemma-and-tietze`; *paracompact Hausdorff => normal* and *partitions
of unity* on 269 `partitions-of-unity-and-paracompactness`. Every one of them
names a separation axiom defined at 261, which is ABOVE 255, so none of them can
be stated at 255 at all. *The Stone-Cech compactification* likewise belongs to 271
`tychonoff-embedding-and-stone-cech`.

**255 MAY NOT REUSE FOUR PUBLISHED IDS.** `def-metric-compactness`,
`lem-closed-subset-of-a-compact-space-is-compact`,
`thm-continuous-image-of-a-compact-space-is-compact`,
`thm-compact-iff-finite-intersection-property`,
`thm-continuous-bijection-from-a-compact-space-has-continuous-inverse`,
`lem-compactness-is-intrinsic` and `lem-tube-lemma-for-a-compact-metric-factor`
are all PUBLISHED on 120 `compactness-in-metric-spaces` and all state the METRIC
case. Ids are immutable, so the general topological versions need distinct ids,
and each of them owes a dictionary sentence saying that the metric case agrees —
this is the level-7 "two notions" defect and it is exactly where it would start.
```

### 1.3 `research/plan-topology-track.md` — scope denials, three new entries

**File:** `research/plan-topology-track.md`
**Section:** `## Scope denials`
**Edit:** append three entries at the end of the list:

```
**Urysohn's lemma in regular spaces, as a false statement (T7's FS list).**
Refuting it needs a regular space in which two disjoint closed sets are not
separated by a continuous function, and the nearest witness is a regular space
that is not normal. 261 already records that no such witness is reachable from
its declared prerequisites, and 267 inherits the same obstruction: the witnesses
need either cardinal arithmetic (247, unbuilt) or the hereditary and productive
behaviour of regularity (265, unbuilt and below 267). DROPPED from 267 with no
substitute. Licensed by: 247 or 265.

**"The Urysohn function of A and B vanishes exactly on A", as a false statement.**
Refuting it needs a normal space with a closed set that is not a zero set, i.e. a
normal space that is not perfectly normal. The standard witness is the ordinal
space omega_1 + 1 with the closed singleton {omega_1}, and it needs the
compactness of omega_1 + 1 proved on an A page — 256 is a B page and its items
are leaf-locked. DROPPED from 267. Licensed by: the compactness of omega_1 + 1
homed on 255 rather than 256. Note that 267 DOES prove the positive
characterisation `thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-
closed-set-is-a-zero-set`, so only the witness is missing, not the theory.

**"Hausdorff iff every net has at most one limit", and the filter forms of the
separation axioms.** Nets and filters on a topological space are 259
`nets-and-filters`, which is unbuilt and sits ABOVE 263. 263 proves the SEQUENCE
form instead (`lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit`), which
is strictly weaker and whose converse the published
`fs-unique-sequential-limits-imply-hausdorff` already refutes. Licensed by: 259.
```

### 1.4 `research/plan-combinatorics-and-categories.md` — CB-2 audit block

**File:** `research/plan-combinatorics-and-categories.md`
**Section:** `## CB-2. Inclusion–Exclusion, the Pigeonhole Principle and Double Counting  (order 22, combinatorics)`
**Edit:** insert immediately after the `` `requires`: `finite-counting-and-binomial-coefficients` (20) `` line and its following blank line:

```
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
```

### 1.5 `research/plan-combinatorics-and-categories.md` — well-definedness rows 6 and 7

**File:** `research/plan-combinatorics-and-categories.md`
**Section:** `## 8. Well-definedness obligations (CC-D10, requirement 1)`, table rows 6 and 7
**Old text (two lines):**

```
| 6 | 22 | the inclusion–exclusion alternating sum | the index set (nonempty subsets of a finite index set) is finite by #3, so the sum is a finite sum in the sense of #5 |
| 7 | 22 | the derangement number $D_n$ | the set of fixed-point-free bijections of a finite set is finite |
```

**New text (three lines — a row is added):**

```
| 6 | 22 | the inclusion–exclusion alternating sum | the index set (nonempty subsets of a finite index set) is finite, from `cor-cardinality-of-the-power-set` and `thm-subset-of-a-finite-set`, so the sum is a finite sum in the sense of #5. TWO further obligations, added frontier-2: the summand is REAL, since it carries a sign, so the identity is stated in $\mathbb{R}$ through `def-canonical-natural`; and the COMPLEMENTARY form runs over all subsets including the empty one, so the ambient finite set $X$ must be named in the definition and $A_\varnothing := X$ stipulated there. Both live in `def-a-sieve-family-and-its-intersections` |
| 6b | 22 | $\lceil m/n \rceil$ for $n \ge 1$ | the set of $q$ with $m \le nq$ is nonempty, so it has a least element by `thm-well-ordering-principle`. Minted as `def-the-ceiling-of-a-quotient-of-naturals` because the library has NO floor or ceiling and `thm-division-algorithm-in-z` is homed above this page, on `divisibility-gcd-and-bezout` |
| 7 | 22 | the derangement number $D_n$ | the set of fixed-point-free bijections of a finite set is finite, being a subset of $\operatorname{Bij}(A)$, which is finite by `thm-number-of-bijections-of-a-finite-set`; and $D_0 = 1$, the empty function being vacuously fixed-point-free |
```

### 1.6 `research/plan-combinatorics-and-categories.md` — scope denials, one new entry

**File:** `research/plan-combinatorics-and-categories.md`
**Section:** `## 9. Scope denials (CC-D10, requirement 3)`
**Edit:** append at the end of the numbered list:

```
**Floor and ceiling as library-wide notions.** `def-the-ceiling-of-a-quotient-of-
naturals` on page 22 defines only what the strong pigeonhole principle needs: the
least $q$ with $m \le nq$, for naturals $m$ and $n \ge 1$. It is not the real
floor, it is not defined for a real argument, and it does not carry the division
algorithm. A general floor and ceiling on $\mathbb{R}$ would be licensed by any
page above `divisibility-gcd-and-bezout` (26) choosing to mint them; page 22 is
below it and cannot.
```

---

## 2. Authoring-time notes (no scaffold anchor — these must reach the step-5 author)

### 2.1 Both topology pages

- **`thm-uniform-limit-theorem` MAY NOT BE CITED.** It is published, and it is homed
  on `function-space-topologies` at order 283, above 267. Its own prerequisites
  `def-topology-of-uniform-convergence` and `lem-uniform-metric-on-a-function-space`
  are homed there too, so it cannot be relocated either. 267 therefore mints
  `lem-a-uniformly-approximable-real-valued-map-is-continuous`, which proves the
  epsilon/3 criterion for REAL-VALUED maps only — that is all Tietze and the zero-set
  theorem need. Do not write a Remark surveying where the general case lives, and do
  not declare a `forward_refs` edge to 283: a forward reference propagates the sky
  marker along `deps` to every consequence, and Tietze is a consequence.

- **Do not route any dependency through `rem-r-native-topology-scope`.** Citing it
  propagates the "rests on later material" chip to everything downstream. Unfold the
  identification inline instead.

- **B-page items that may not be cited from anywhere:** `ex-sorgenfrey-line`,
  `ex-sorgenfrey-plane`, `cex-antidiagonal-of-the-sorgenfrey-plane`,
  `ex-order-topology`, `cex-box-topology-diagonal-not-continuous`,
  `ex-the-ordinal-spaces-omega-plus-one-and-omega-one`,
  `cex-the-deleted-tychonoff-plank-is-not-normal`, and every
  `ex-`/`cex-` on `separation-axioms-examples`. B pages are leaves; this includes
  citations from another B page.

- **`fs-` items on an A page ARE citable** — they are homed on an A page. The false
  statements of `separation-axioms` sit in the `examples:` field of the A page 261,
  not on 262, and `fs-unique-sequential-limits-imply-hausdorff` is cited by 263 for
  exactly that reason.

### 2.2 `hausdorff-via-the-diagonal` (263)

- **`X \times Y` means `\prod_{i<2} X_i`.** `def-product-topology` fixes this: a point
  is a FUNCTION on the von Neumann `2`, written `(u,v)`. Write the diagonal as
  `\Delta_X = \{ z \in X \times X : z_0 = z_1 \}` and say once that this is
  `\{(x,x) : x \in X\}`; do not silently treat the product as a primitive.

- **The diagonal criterion is about the PRODUCT topology and the proof uses that a
  basis for `X \times X` is the set of all boxes `U \times V`** — for a two-element
  index set the product basis and the box basis coincide, which
  `def-product-topology` states explicitly. Say so; the criterion is false for an
  infinite box product and the published `cex-box-topology-diagonal-not-continuous`
  is about the same distinction.

- **THE TWO COMPACT-SEPARATION LEMMAS MUST BE WRITTEN CHOICE-FREE, AND THE NAIVE
  PROOF IS NOT.** "For each `y \in K` choose disjoint open `U_y \ni x`, `V_y \ni y`"
  is a choice over an arbitrary index set, i.e. the Axiom of Choice, and it is
  avoidable. Write instead:
  > Let `\mathcal{V}` be the family of ALL open `V` for which there exists an open
  > `U` with `x \in U` and `U \cap V = \varnothing`. This family is defined by a
  > formula, so no selection is made. It covers `K`, because `X` is Hausdorff and
  > `x \notin K`. Extract a finite subcover `V_0, \dots, V_{n-1}` by compactness.
  > NOW choose one `U_i` for each `i < n` — finitely many choices, licensed by
  > `lem-finite-choice`, which is a theorem of ZF. Put `U := \bigcap_{i<n} U_i` and
  > `V := \bigcup_{i<n} V_i`.
  The same trick gives the compact-versus-compact lemma (take the family of open `W`
  admitting an open `U \supseteq K` disjoint from it) and the closed-graph theorem of
  step 2.4 below. State in Facts that only `lem-finite-choice` is used, and say in
  Remarks why the naive form would have cost more.

- **`thm-a-compact-hausdorff-space-is-regular-and-normal`.** Regularity: a closed
  subset of a compact space is compact, so a point off a closed set is a point off a
  compact set. Normality: two disjoint closed sets are two disjoint compact sets.
  `T_3` and `T_4` then need `T_1`, which comes from Hausdorff by
  `lem-urysohn-sits-between-hausdorff-and-regular-plus-t1`. **Do not write a title
  claiming more than this** — in particular the space is NOT claimed completely
  regular here; that is 267's, and it costs a choice principle.

- **`thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain` has two halves
  with DIFFERENT hypotheses**, and the title must not merge them. Graph closed needs
  `Y` Hausdorff and `f` continuous. Continuity needs `Y` compact and the graph
  closed; Hausdorffness is NOT used in that direction. The equivalence is stated only
  for `Y` compact Hausdorff.

- **`lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-
  closure`, proof shape.** Let `K` be a compact neighbourhood of `x` and `U` open
  with `x \in U`. `K` is compact Hausdorff, hence `T_4`. Work inside the subspace
  `K`: the set `K \setminus (U \cap \operatorname{int} K)` is closed in `K` and misses
  `x`, so regularity of `K` gives `V` open in `K` with
  `x \in V \subseteq \operatorname{cl}_K(V) \subseteq U \cap \operatorname{int} K`.
  Then `V` is open in `X` because `V \subseteq \operatorname{int} K` and
  `\operatorname{int} K` is open in `X`; and `\operatorname{cl}_X(V) =
  \operatorname{cl}_K(V)` because `K` is closed in `X` (a compact subset of a
  Hausdorff space is closed) and closure traces, which is claim 1 of
  `thm-subspace-closure-and-interior`. Regularity of `X` follows. **The definition of
  "locally compact" this uses is the weakest one: every point has a compact
  neighbourhood.** If 255 adopts a different clause, say so in Facts and derive the
  neighbourhood form there.

- **`fs-a-function-with-closed-graph-is-continuous`, witness.** `f : \mathbb{R} \to
  \mathbb{R}`, `f(x) = 1/x` for `x \ne 0` and `f(0) = 0`. Closedness of the
  complement of the graph at a point `(a,b)` with `a \ne 0` uses continuity of the
  reciprocal (`thm-algebra-of-continuous-functions`); at `a = 0` with `b \ne 0` take
  the explicit box `(-1/(2|b|), 1/(2|b|)) \times (b - |b|/2, b + |b|/2)`, which misses
  the graph because `|1/x| > 2|b|` there and because `f(0) = 0` is outside the second
  factor. Discontinuity at `0` is immediate. The codomain `\mathbb{R}` is not
  compact, which is exactly the hypothesis the theorem carries.

- **`fs-two-continuous-maps-agreeing-on-a-dense-subset-are-equal`, witness.** `Z =
  \mathbb{R}`, `Y = \{a,b\}` indiscrete (`def-standard-topologies`), `f` constant `a`,
  `g` equal to `a` on `\mathbb{Q}` and `b` off it. Every map into an indiscrete space
  is continuous, since the only preimages to check are of `\varnothing` and `Y`. `Y`
  is not Hausdorff, and that is the hypothesis being tested.

### 2.3 `urysohn-lemma-and-tietze` (267)

- **URYSOHN'S LEMMA COSTS DEPENDENT CHOICE, NOT COUNTABLE CHOICE, AND THE LIBRARY
  ALREADY SAYS SO ON DISK.** The published `rem-urysohn-lemma-not-a-zf-theorem`
  records Laeuchli 1962 (UL is not a theorem of ZF) and Tachtsis 2019 (UL is not a
  theorem of ZF + countable choice), and records that DC implies UL by the usual
  dyadic construction. So:
  - the DC hypothesis goes in the STATEMENT of `thm-urysohn-lemma` and in its TITLE,
    the way `thm-perfectly-normal-implies-completely-normal` carries countable choice;
  - a claim that the construction is choice-free, or that countable choice suffices,
    is a published falsehood — countable choice provably does not suffice;
  - `rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem` MENTIONS
    `rem-urysohn-lemma-not-a-zf-theorem` through **`external_refs`, never `deps`**.
    That item has `proved_here: false`; a `deps` edge would propagate the fuchsia
    marker to every consequence, and a mention does not. `extcheck` also requires the
    body to link it.

- **Where DC is spent, exactly.** The recursion builds, for each `n`, an assignment
  of an open set to each dyadic rational of level `n`, extending the level `n-1`
  assignment, with `\overline{U_r} \subseteq U_s` for `r < s`. Take `P` = the set of
  such level assignments, and `R` = "extends". `R` is entire on `P`: each new dyadic
  is the midpoint of two consecutive old ones, `lem-normality-via-shrinking` supplies
  an interpolating open set for each, and there are FINITELY many new dyadics at each
  level, so `lem-finite-choice` (a ZF theorem) produces the whole level at once. DC
  then produces the sequence of levels, and `U_r` is read off the level containing
  `r`. **DC is used once, at that one step.** Everything after it — the definition of
  `f` and its continuity — is `lem-a-dyadic-scale-of-open-sets-defines-a-continuous-
  function`, which is choice-free, which is why it is split out as its own item.

- **`f(x) := \inf(\{ r \in D : x \in U_r \} \cup \{1\})`.** The `\cup \{1\}` is not
  cosmetic: it is what makes the set nonempty and bounded below so that
  `def-infimum` applies, and it is what gives `f = 1` off every `U_r`. Continuity is
  checked against the SUBBASIS of `[0,1]` consisting of the sets `[0,a)` and `(a,1]`,
  using clause (d) of `thm-continuity-characterisations-top`; that these generate the
  subspace topology of `[0,1]` follows from `thm-basis-criterion` and
  `def-subspace-topology-top` and should be discharged in Facts, since the library has
  no item asserting it. The two computations are
  `f(x) < a \iff x \in U_r` for some `r < a`, and
  `f(x) > a \iff x \notin \overline{U_r}` for some `r > a`.

- **State Urysohn's lemma for NORMAL spaces, not for `T_4` spaces.** `T_1` is not
  needed for the lemma and is needed only for the corollary that a normal `T_1` space
  is completely regular, where it is what makes `\{x_0\}` closed
  (`thm-t1-iff-singletons-are-closed`). The published
  `rem-urysohn-lemma-not-a-zf-theorem` states the `T_4` form; note in Remarks that
  the form proved here is the more general one, without claiming the published item
  is wrong.

- **`cor-urysohns-lemma-closes-the-separation-chain` is the flagship.** 261's
  `thm-the-separation-implication-chain` is short by exactly one arrow and its
  `rem-separation-axiom-conventions` names it: `T_4 \Rightarrow T_{3\frac12}`. This
  corollary supplies it. The assembled statement must carry forward every hypothesis
  the 261 chain carries, including the countable choice in its clause 1, AND the DC
  of this page. Do not assert the assembled chain is a theorem of ZF.

- **`thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-
  set`.** Forward direction: `C` closed and `G_\delta`, write `C = \bigcap_n U_n`,
  Urysohn gives `f_n` with `f_n = 0` on `C` and `f_n = 1` off `U_n`, and
  `f = \sum_n 2^{-(n+1)} f_n` is continuous by the uniform-approximation lemma and has
  `Z(f) = C`. Selecting one `f_n` per `n` is COUNTABLE choice on top of the DC inside
  Urysohn; since DC implies countable choice, state the item as a theorem of ZF + DC
  and say in Facts that both are used and where. Converse: a zero set is a
  `G_\delta`, which `def-zero-sets-and-cozero-sets` already proves, so that half is
  free and choice-free.

- **Tietze, proof shape and the boundary readings.** Reduce to `f : A \to [-1,1]`.
  At each stage apply Urysohn to the disjoint closed subsets of `A` where
  `f_n \le -M_n/3` and `f_n \ge M_n/3` to get `g_n` on `X` with
  `|g_n| \le M_n/3` and `|f_n - g_n| \le 2M_n/3` on `A`, with `M_{n+1} = 2M_n/3`.
  The series `\sum g_n` is dominated by a geometric series (`thm-geometric-series`,
  `thm-direct-comparison-test`), converges uniformly, and its sum is continuous by
  the uniform-approximation lemma. **Every index starts at 0**; `M_0 = 1`, and the
  bound after `n` stages is `(2/3)^n`, not `(2/3)^{n-1}`. Selecting one `g_n` per
  stage is again dependent choice, since stage `n+1` is defined from `f_{n+1} = f_n -
  g_n|_A`. Clause 2 of the theorem — that the extension property characterises
  normality — is proved by taking `A \cup B` closed and the two-valued function on it.

- **Tietze into an open interval.** From the `[-1,1]` case get `F`; the set
  `D = F^{-1}[\{-1,1\}]` is closed and disjoint from `A`, so Urysohn gives `\varphi`
  with `\varphi = 0` on `D` and `\varphi = 1` on `A`, and `\varphi F` is the required
  extension into `(-1,1)`. The unbounded case composes with a homeomorphism
  `(-1,1) \to \mathbb{R}`, `t \mapsto t/(1-|t|)`, whose continuity comes from
  `thm-algebra-of-continuous-functions`.

- **`fs-every-normal-space-is-completely-regular`, witness.** Sierpinski space from
  `def-standard-topologies`: it is normal, since no two of its closed sets are
  disjoint and nonempty; it is not regular, the only open set containing the closed
  point being the whole space; and complete regularity implies regularity
  (`thm-completely-regular-implies-regular`). This is precisely why the corollary
  above carries `T_1`. The A-page item must prove normality and non-regularity itself
  rather than cite `ex-sierpinski-space-is-t0-normal-and-not-regular`, which is
  leaf-locked on 262.

- **`fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends`,
  witness.** The reciprocal on `(0,1] \subseteq \mathbb{R}`. Any continuous extension
  to `\mathbb{R}` would be continuous on `[0,1]` and therefore bounded
  (`cor-boundedness-theorem-r`), while the reciprocal is unbounded on `(0,1]` by
  `cor-archimedean-reciprocal`. `\mathbb{R}` is normal by
  `thm-metric-spaces-are-completely-normal`, so it is the CLOSEDNESS of the subspace
  that fails and nothing else.

- **`cex-tietze-fails-in-a-t1-space-that-is-not-normal` (B page).** The `K`-topology
  on `\mathbb{R}` from the published `lem-the-k-topology-is-hausdorff-and-not-regular`
  is `T_1` and not regular, hence not normal by `thm-t4-implies-t3`. In it, `K` is
  closed and `\{0\}` is closed, so `K \cup \{0\}` is closed; the function that is `0`
  on `K` and `1` at `0` is continuous on that subspace because `(-1,1) \setminus K` is
  open and traces to `\{0\}`; and a continuous extension would separate `K` from `0`
  by the preimages of `(-1/2,1/2)` and `(1/2,3/2)`, which the cited lemma says is
  impossible.

### 2.4 `inclusion-exclusion-and-the-pigeonhole-principle` (22)

- **Everything this page cites is PUBLISHED.** depsource reports 159 published deps
  and nothing else, so the author never has to reason about an unbuilt page.

- **Read `def-sum-over-a-finite-index-set` before writing any sum.** It is defined for
  `a : S \to \mathbb{R}` and for `a : S \to \mathbb{N}`, it carries the bridge to
  `\sum_{k<n}`, the reindexing clause along a bijection, the empty-index clause and
  the constant clause. It does NOT carry an `\iota` bridge for a sum over a finite
  index set; derive that in one line from its clause (a) plus clause 6 of
  `lem-nat-finite-sum-laws-and-the-canonical-embedding`, in Facts, rather than citing
  a clause that is not there. **Citing an item for a claim it does not make is this
  library's dominant defect class.**

- **`lem-finite-sum-permutation-invariance` exists and `lem-finite-sum-laws` does
  not contain it.** The published `lem-finite-sum-permutation-invariance` was minted
  for exactly this reason and its Statement says so. Cite the right one.

- **Sieve proof.** For `x \in \bigcup_i A_i` let `T(x) = \{ i \in I : x \in A_i \}`,
  which is nonempty with `t = |T(x)| \ge 1`. The number of nonempty `J \subseteq I`
  with `x \in A_J` is the number of nonempty subsets of `T(x)`, and
  `\sum_{\varnothing \ne J \subseteq T(x)} (-1)^{|J|+1} = 1` because the FULL
  alternating row sum vanishes for `t \ge 1` (`cor-binomial-theorem-consequences`
  clause 2) and the `J = \varnothing` term is `1`. Grouping the subsets of `T(x)` by
  size uses `thm-sum-rule` clause 3 and `def-binomial-coefficient`. Then interchange
  the double sum over `x` and over `J`.

- **Bonferroni, exact statement.** With `S_j := \sum_{J \subseteq I, |J| = j}
  \iota|A_J|` for `j \ge 1` and `T_m := \sum_{j=1}^{m} (-1)^{j+1} S_j`, the claim is
  `\iota|\bigcup_i A_i| \le T_m` for odd `m` and `\ge T_m` for even `m`. Check it at
  `m = 1`, where `T_1 = \sum_i \iota|A_i|` and the inequality is the union bound.

- **Derangements, boundary values.** `D_0 = 1` (the empty function is vacuously
  fixed-point-free), `D_1 = 0`, `D_2 = 1`. The first recurrence holds for `n \ge 1`
  and the second for `n \ge 2`; both hypotheses are part of the statement, and the
  second is false at `n = 1` where its right-hand side would need `D_{-1}`.

- **Erdos-Szekeres, proof.** For an injective `a : (mn+1) \to \mathbb{R}` let
  `\mathrm{inc}(i)` be the greatest length of a strictly increasing sublist ending at
  index `i` and `\mathrm{dec}(i)` likewise for decreasing; both are maxima over
  nonempty finite sets of naturals. If no increasing sublist has length `m+1` and no
  decreasing one has length `n+1`, then `i \mapsto (\mathrm{inc}(i)-1,
  \mathrm{dec}(i)-1)` maps into `m \times n`, and it is INJECTIVE because for `i < j`
  either `a_i < a_j`, forcing `\mathrm{inc}(j) > \mathrm{inc}(i)`, or `a_i > a_j`,
  forcing `\mathrm{dec}(j) > \mathrm{dec}(i)`. `|m \times n| = mn` by
  `thm-product-rule`, and there is no injection from `mn+1` into `mn` by
  `lem-pigeonhole` clause 2.

- **Erdos-Szekeres tightness, the construction, with the blocks the right way round.**
  Use `m` blocks of length `n`. For `b < m` and `j < n` set
  `a_{bn+j} := \iota(bn + n - j)`. Within a block the values decrease, so a strictly
  increasing sublist meets each block at most once and has length at most `m`. Across
  blocks the values increase, so a strictly decreasing sublist lies inside one block
  and has length at most `n`. The list has `mn` terms. **Getting the two block counts
  the wrong way round proves the opposite statement**; check the bound each half
  yields before writing it.

- **No graph vocabulary anywhere on 22 or 23.** No graph is defined in this page's
  declared prerequisites; `graphs-walks-and-connectivity` is at order 207. The
  handshake example is stated for a finite symmetric irreflexive RELATION, and
  `thm-two-element-subsets-count` (published, A page 20) supplies `2\binom{n}{2} =
  n(n-1)`. This is the same discipline page 20 already follows.

- **No probability anywhere on 22 or 23.** The hat-check item is a ratio of two counts
  and says so; no probability space is defined in this page's declared prerequisites.

---

## 3. The synthetic `compactness` (255) stand-in, and the ids that must be rebound

Beta-F2-1 is scaffolding 255 in parallel and its item ids were not knowable here. To
make my pages resolvable and gate-testable I used four placeholder ids and spliced a
synthetic 255 carrying them. **Every one of these is a placeholder for the
orchestrator to rebind at step 4:**

| placeholder id used in my JSON | the statement I need | used by |
|---|---|---|
| `def-compact-space` | open cover, subcover, compact space, and COMPACT SUBSET of a space | 263 (×5 items), 264 (×2), 267 (×3) |
| `lem-closed-subspace-of-a-compact-space-is-compact` | a closed subset of a compact space is compact | 263 (×3) |
| `thm-compact-subset-of-a-hausdorff-space-is-closed` | a compact subset of a Hausdorff space is closed | 263 (×1) |
| `def-locally-compact-space` | locally compact: every point has a compact NEIGHBOURHOOD | 263 (×1), 267 (×1) |

Note that `lem-closed-subset-of-a-compact-space-is-compact` (without "-space-") is
already PUBLISHED and is the METRIC statement, which is why the placeholder above is
spelled differently. See §1.2.

---

## 4. Gate results in detail

`node tools/validate-plan.mjs <spliced>` — **0 errors.** Six new warnings against the
unspliced baseline, all `redundant-prereq` and all expected:

```
[redundant-prereq] urysohn-lemma-and-tietze requires compactness ... through hausdorff-via-the-diagonal
[redundant-prereq] urysohn-lemma-and-tietze requires separation-axioms ... through hausdorff-via-the-diagonal
[redundant-prereq] hereditary-and-productive-separation requires compactness ... through hausdorff-via-the-diagonal
[redundant-prereq] hereditary-and-productive-separation requires ordinal-arithmetic ... through hausdorff-via-the-diagonal
[redundant-prereq] partitions-of-unity-and-paracompactness requires compactness ... through urysohn-lemma-and-tietze
[redundant-prereq] complete-metrizability-and-baire requires compactness-in-metric-spaces ... through metrization-theorems
```

The last one is an artefact of the synthetic 255 stand-in and will change once
Beta-F2-1's real page is spliced. The `separation-axioms` line comes from
`plan-spec.json`'s own declaration for 267, not from my `requires`. The two on 265 and
the one on 269 are the spec's own explicit declarations becoming redundant now that
263 declares `compactness`; leaving them is the safer choice, since they document a
direct citation.

No `[size]` warning on any of my pages: 263 has 15 items, 264 has 8, 267 has 13,
268 has 8, 22 has 21, 23 has 10.
