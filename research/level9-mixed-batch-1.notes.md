# Level-9 mixed batch 1 — scaffolding notes (Beta-9-1, 2026-07-28)

Pages scaffolded: `monotone-functions-and-discontinuities` (129) + examples (130),
`the-derivative-and-mean-value-theorems` (131) + examples (132),
`the-riemann-integral` (137) + examples (138). All six had empty item lists.
Final page objects: `research/level9-mixed-batch-1.pages.json`.

Gates run against a spliced copy of `plan-spec.json` in my scratchpad (the
authoritative run is the orchestrator's):

- `node tools/validate-plan.mjs <spliced>` — **0 errors**. Warnings rise from 11
  (baseline) to 16 with a UNION splice, or to 13 with my `requires` taken as
  written. New warnings: three `redundant-prereq` (all a consequence of the two
  new A→A page edges, see §2), one `size` (page 129 has 32 items, target 30),
  and two pre-existing-but-newly-triggered `redundant-prereq` on
  `rn-as-a-normed-space` and `further-trigonometric-identities-and-inverses`
  that fire because page 131/129 now reach further back.
- `node tools/depsource.mjs <spliced>` — **0 unresolved, 0 planned-later,
  0 homeless, 0 draft-page**. No item in this batch contributes an
  `archimedean-reciprocal` triage line.
- Independent check I wrote: all **134** external dependency ids used by this
  batch exist in `items/`, all are `status: published`, all have a page home,
  and **none is homed on a `-examples` (B) page**, so the leaf rule holds.

---

## 1. Prose-scaffold amendments — `research/plan-realanalysis-pages.md`

Each is an applyable edit. Line numbers are from the file as of 2026-07-28.

### 1.1 RA-14 header: the page also needs the linear-algebra page

**Section:** RA-14, line 572.
**Old text:**
```
<- RA-13, RA-11, RA-03
```
**New text:**
```
<- RA-13, RA-11, RA-03, and LA-01 `vector-spaces-and-subspaces` (order 68).
The LA-01 edge is new at level 9 and carries `lem-hamel-basis-exists`
(see the Hamel note below); it is a genuine `requires` entry, not incidental.
```

### 1.2 RA-14: Froda-sharp indexing is off at the first index

`def-sequence` is a function on ℕ and **ℕ contains 0**, so `1 - 1/k` is
undefined at `k = 0`.

**Section:** RA-14 B list, line 593.
**Old text:**
```
(discontinuous exactly at {1 - 1/k}); a Hamel-basis additive function (unbounded
```
**New text:**
```
(discontinuous exactly at {1 - 1/(k+1) : k in N}); a Hamel-basis additive function (unbounded
```

### 1.3 RA-14: Thomae and Dirichlet move from the B page to the A page

The B list said "Thomae continuous exactly at the irrationals". RA-18's B list
independently says "Thomae is integrable with integral 0". **A B page is a leaf,
so page 138 may not depend on anything homed on page 130** — the two entries as
written are a `b-leaf` error waiting to happen. Both functions are now defined
and their continuity sets proved on the A page, and both B pages cite that.

**Section:** RA-14, lines 591–592.
**Old text:**
```
since each is an independent sufficient condition. B: Thomae continuous exactly
at the irrationals; a monotone function discontinuous exactly on Q; Froda sharp
```
**New text:**
```
since each is an independent sufficient condition.
PLACEMENT DECISION (Beta-9-1, level 9). The Dirichlet function 1_Q and Thomae's
function are DEFINED ON THE A PAGE, as `def-dirichlet-and-thomae-functions`, and
their continuity sets are proved there as
`thm-dirichlet-and-thomae-continuity-sets` (1_Q nowhere continuous; Thomae
continuous exactly at the irrationals, with osc_t(c) = t(c)). The reason is the
leaf rule: RA-18's B page needs "Thomae is Riemann integrable with integral 0"
and may not cite anything homed on RA-14's B page. The A-page theorem restates,
across the leaf boundary, what `cex-dirichlet-is-nowhere-continuous` (order 124,
a B page) already proves; the duplication is deliberate and must be acknowledged
in the item, in the style `ex-distance-to-the-integers-is-1-lipschitz` uses.
B: Thomae's values and oscillation computed; a monotone function discontinuous exactly on Q; Froda sharp
```

### 1.4 RA-14: the intermediate-value-property false statement gets its own witness

Owner decision B1-R9 assigned the false statement "a function with the
intermediate value property is continuous" to this page and named the Conway
base-13 function as its witness. Conway is on the **B** page, and an A-page `fs-`
item may not depend on a B-page item. The `fs-` therefore carries its own,
much smaller witness inline, exactly as `fs-continuity-implies-uniform-continuity`
does; Conway stays on the B page as the stronger witness.

**Section:** RA-14, after line 600 (end of the B list, before the level-8 note).
**New text (insert):**
```
FALSE-STATEMENT WITNESS (Beta-9-1, level 9). `fs-intermediate-value-property-
implies-continuity` is an A-page item and so may not cite the Conway function,
which is homed on the B page (a leaf). It states its own witness inline:
psi(1/x) for x != 0 and 0 at x = 0, on [-1,1], with psi(x) = min{x - floor(x),
1 - (x - floor(x))} written out from `lem-integer-part`. That function has the
intermediate value property (its range is [0,1/2] and every value of [0,1/2] is
taken in every neighbourhood of 0, and it is continuous off 0) and is
discontinuous at 0. The Conway base-13 function remains on the B page, where it
is the strictly stronger witness: Darboux and continuous at NO point.
```

### 1.5 RA-15 header: the page now rests on RA-14

**Section:** RA-15, line 648.
**Old text:**
```
**RA-15 The Derivative and the Mean Value Theorems** <- RA-13
```
**New text:**
```
**RA-15 The Derivative and the Mean Value Theorems** <- RA-14
(which subsumes RA-13). The edge to RA-14 is NEW at level 9 and is load bearing
twice: `thm-derivative-of-an-inverse` needs `thm-continuous-inverse`, and
`thm-monotonicity-from-the-derivative` states its conclusion with
`def-monotone-function` rather than re-defining monotonicity inline.
```

### 1.6 RA-15: the general Leibniz rule is DROPPED from this page

**Section:** RA-15, line 652.
**Old text:**
```
implies continuous; algebra of derivatives; the general Leibniz rule; the chain
```
**New text:**
```
implies continuous; algebra of derivatives; the chain
```
**And insert, after line 659 (end of the RA-15 block):**
```
DROPPED FROM RA-15 (Beta-9-1, level 9), deferred not deleted. THE GENERAL
LEIBNIZ RULE, (fg)^(n) = sum_k C(n,k) f^(k) g^(n-k), needs two things this page
does not have. (1) HIGHER DERIVATIVES are introduced on RA-16, which is LATER in
plan order, so the statement cannot even be written here. (2) BINOMIAL
COEFFICIENTS do not exist anywhere in the library: no `def-binomial-*` item, no
binomial theorem, and no combinatorics page in `plan-spec.json` at all (verified
2026-07-28). What would license it: a binomial-coefficient definition with
Pascal's rule, plus RA-16's higher derivatives. RECOMMENDED HOME: RA-16, whose
scaffold must then also mint the binomial coefficient (it needs one for Taylor's
theorem in any case). The ordinary product rule is unaffected and is proved here
inside `thm-algebra-of-derivatives`.
```

### 1.7 RA-15 B list: "Rolle fails over Q" already exists and must not be re-minted

**Section:** RA-15, line 659.
**Old text:**
```
Rolle fails over Q; **the vector-valued MVT failure**, deferred to RA-22.
```
**New text:**
```
**the vector-valued MVT failure**, deferred to RA-22.
REUSE, NOT RE-MINT (Beta-9-1, level 9). "Rolle fails over Q" is DROPPED from this
B list because `cex-rolle-fails-over-a-non-complete-field` already exists and is
PUBLISHED on `equivalent-forms-of-completeness-examples` (order 112). Minting a
second id for the same statement is forbidden, and the existing item is homed on
a B page, so nothing here may cite it either. This is the same trap as
`lem-absolute-convergence-implies-convergence` at level 8. The Beta-8-2
retraction two lines above already fixed the wiring question; this fixes the
placement question.
```

### 1.8 RA-18 header: the page rests on RA-14, and the Lebesgue criterion IS in scope

**Section:** RA-18, line 704.
**Old text:**
```
**RA-18 The Riemann Integral: Definition and Integrability** <- RA-13, RA-11
```
**New text:**
```
**RA-18 The Riemann Integral: Definition and Integrability** <- RA-14
(which subsumes RA-13 and RA-11). The edge to RA-14 is NEW at level 9 and is
load bearing three times: `thm-lebesgue-criterion` needs `def-oscillation`,
`thm-continuity-iff-oscillation-zero` and
`lem-oscillation-superlevel-sets-are-closed`; `thm-monotone-implies-integrable`
needs `def-monotone-function`; and the B page's Thomae example needs
`thm-dirichlet-and-thomae-continuity-sets`. Defining oscillation a second time
here would be the level-7 two-notions-of-open defect.
SCOPE CHECK (Beta-9-1, 2026-07-28). Lebesgue's criterion is FULLY IN SCOPE and is
NOT dropped. "Measure zero" here is `def-measure-zero-and-content-zero` (order
119, published), a cover-by-intervals condition; the proof needs only
`thm-countable-union-of-null-is-null`, `thm-compact-null-is-content-zero`,
`lem-content-zero-implies-null`, `lem-finite-interval-cover-total-length` and
Heine-Borel, all published. No outer measure, no measurable set and no Lebesgue
integral is used or mentioned, and no `proved_here: false` item is cited.
```

### 1.9 RA-18 B list: Thomae's integrability now cites the A page of RA-14

**Section:** RA-18, line 710.
**Old text:**
```
B: the integral of x^2 from the definition; Thomae is integrable with integral 0;
```
**New text:**
```
B: the integral of x^2 from the definition; Thomae is integrable with integral 0
(citing `thm-dirichlet-and-thomae-continuity-sets` on RA-14's A PAGE — see the
placement decision in the RA-14 block; do not restate Thomae's continuity here);
```

### 1.10 RA-17: the Hamel basis it needs is now built on RA-14

**Section:** RA-17, line 700 (end of the "Scope note 2026-07-27" paragraph).
**Old text:**
```
construction shows that without regularity it does not. The construction costs
only AC, an adopted axiom.
```
**New text:**
```
construction shows that without regularity it does not. The construction costs
only AC, an adopted axiom.
The tool exists as of level 9: `lem-hamel-basis-exists` is homed on RA-14
(`monotone-functions-and-discontinuities`, order 129) — a maximal Q-linearly
independent subset of R from Zorn, with uniqueness of the finite Q-coefficients.
Cite it; do not rebuild it, and do not wait for `linear-independence-bases-and-
dimension` (order 70), which has no item list.
```

### 1.11 RA-16: it must mint the binomial coefficient

**Section:** RA-16, after line 684 (end of the block).
**New text (insert):**
```
INHERITED FROM RA-15 (Beta-9-1, level 9). This page inherits **the general
Leibniz rule**, dropped from RA-15 because higher derivatives live here and
binomial coefficients live nowhere. When this page is scaffolded it must ALSO
mint a binomial-coefficient definition (Pascal's rule and C(n,k) as a natural
number) — it needs one for Taylor's theorem regardless — and only then state
Leibniz. Verified 2026-07-28: no `def-binomial-*`, no binomial theorem and no
combinatorics page exists anywhere in `plan-spec.json` or `items/`.
```

---

## 2. The two new A→A page edges (report them; they are not accidents)

`plan-spec.json` had pages 129, 131 and 137 mutually independent. **They are
not**, and pretending otherwise would force either a false theorem or a silent
re-definition. Both new edges point backwards in plan order, so nothing is
forward-cited and `validate-plan` is clean.

| edge | why it is unavoidable |
|---|---|
| 131 → 129 | `thm-derivative-of-an-inverse` needs the inverse to be continuous at the point before the limit of the difference quotient can be taken. The only theorem that supplies that is `thm-continuous-inverse` (129). The alternative — assuming continuity of the inverse as a hypothesis — is strictly weaker and pushes the obligation onto every caller. Also `thm-monotonicity-from-the-derivative` states its conclusion in `def-monotone-function` (129) rather than writing "f(x) <= f(y) whenever x <= y" inline for the third time in the library. |
| 137 → 129 | `thm-lebesgue-criterion` is stated and proved in terms of oscillation, and oscillation is defined on 129. `thm-monotone-implies-integrable` needs `def-monotone-function`. The B page's Thomae example needs `thm-dirichlet-and-thomae-continuity-sets`. |

**`requires` as I wrote it is the transitive reduction:** 131 and 137 require
only `monotone-functions-and-discontinuities`, which itself requires
`continuity-ivt-evt-and-uniform-continuity` and `cantor-set-baire-and-measure-zero`.
The splice takes the UNION with what `plan-spec.json` already holds, which
re-introduces those two as direct entries and produces three
`redundant-prereq` warnings. **Recommended: prune 131's `continuity-…` entry and
137's `continuity-…` and `cantor-…` entries after splicing**, so `requires` stays
a transitive reduction as CLAUDE.md's flowchart rule asks. Nothing breaks if it
is not pruned; the warnings just stand.

Page 129 additionally requires `vector-spaces-and-subspaces` (order 68), which is
in no existing closure of 119 or 123. That entry is not redundant.

---

## 3. Authoring notes with no scaffold anchor (these must reach the step-5 author)

1. **`def-oscillation` is valued in the extended reals.** `lem-extended-reals-complete`
   supplies every sup and inf, so no boundedness hypothesis on `f` is needed and
   the definition covers unbounded `f`. Two obligations: say that `omega_f(c)` is
   an infimum over a nonempty set (`c` itself lies in every `A ∩ N_delta(c)`, so
   the inner sup is a sup over a nonempty set and never `-infinity`); and record
   that for bounded `f` the value is real, which is the case the Riemann-integral
   page uses. Use `\omega_f` throughout, never `osc`.

2. **`thm-discontinuity-set-is-f-sigma` is stated RELATIVELY** ("the intersection
   with A of an F_sigma set"), with the absolute form only for `A = R`. That is
   what `thm-baire-one-continuity-points` needs on `[a,b]`, and stating the
   absolute form for arbitrary `A` would be false.

3. **Index the exhaustion from 0.** The discontinuity set is
   `⋃_{n ∈ ℕ} {x : omega_f(x) >= 1/iota(n+1)}`, never `⋃_{n >= 1} … 1/n`.
   Same for `ex-froda-is-sharp` (`1 - 1/(k+1)`), for
   `ex-integral-of-x-squared-from-the-definition` (the 0-indexed closed form is
   `sum_{k<n} k^2 = n(n-1)(2n-1)/6`, **not** the 1-indexed `n(n+1)(2n+1)/6`;
   check it at n = 3, where both the sum and the formula give 5), and for
   `lem-derivative-of-a-power` (the formula `n x^{n-1}` is stated for `n >= 1`
   only, because at `n = 0` it would read `0 · x^{-1}`, undefined at `x = 0`;
   the coefficient is the canonical natural `iota(n)`, not the von Neumann
   natural `n`).

4. **`lem-monotone-with-interval-image-is-continuous` (order 123) is the engine
   of two items** — `thm-continuous-inverse` and `cor-cantor-function-is-continuous`.
   It is stated for the nondecreasing case; the decreasing case goes through
   `-f`. Do not restate or move it, and do not reprove continuity of the inverse
   by an epsilon-delta argument.

5. **`cor-cantor-function-is-continuous` uses no IVT.** Claim 3 of
   `thm-cantor-function-properties` gives surjectivity onto `[0,1]`, which is
   order-convex; claim 2 gives `c(x) <= c(y)` for `x <= y`; `[0,1]` is
   order-convex; apply the lemma. That is the whole proof.

6. **`rem-cantor-function-increases-only-on-a-null-set` carries NO `external_refs`
   and links no `proved_here: false` item** (self-contained-scope rule, owner
   2026-07-27; the earlier instruction to point at
   `rem-lebesgue-monotone-differentiation` and `rem-ftc-absolutely-continuous` is
   withdrawn). It may say: `c` is continuous, nondecreasing, `c(0)=0`, `c(1)=1`,
   constant on every removed interval, and the Cantor set is null. It may NOT say
   `c' = 0` almost everywhere, that `c` is singular, or anything about Lebesgue
   measure. There is no derivative anywhere in the library at order 129 either —
   `def-derivative` is order 131.

7. **`thm-dirichlet-and-thomae-continuity-sets` must acknowledge the duplication**
   with `cex-dirichlet-is-nowhere-continuous` (order 124, a B page and therefore a
   leaf), in one sentence, in the style of `lem-real-and-metric-notions-agree` and
   `ex-distance-to-the-integers-is-1-lipschitz`. Silent re-proof is the defect;
   acknowledged re-proof across a leaf boundary is the house pattern.

8. **Thomae needs lowest terms.** Every nonzero rational has exactly one
   representation `p/q` with `q >= 1` and `gcd(p,q) = 1`; get it from
   `def-common-divisor-and-gcd`, `lem-gcd-basic-values` and
   `cor-gcd-quotients-coprime` (order 22, published), not from a fresh argument.
   Fix `t(0) := 1` (the representation `0/1`), and say so.

9. **`lem-baire-category-in-a-closed-interval` is a NEW lemma, not a citation of
   `thm-baire-category-r`.** The published Baire theorem is about dense open
   subsets of `R`; Baire's theorem on Baire-class-one functions needs the category
   theorem INSIDE a closed bounded interval. The proof is the published proof's
   own device transplanted: nested closed subintervals with rational endpoints
   chosen by least index under a fixed enumeration of `Q`
   (`thm-rationals-countable`, `thm-well-ordering-principle`, `thm-recursion`),
   closed by `thm-nested-interval-property`. It therefore spends no choice
   principle, and the item should say so, as `thm-baire-category-r` does.

10. **`lem-hamel-basis-exists` is homed here for want of a better home.**
    `linear-independence-bases-and-dimension` (order 70) has no item list, so
    "every vector space has a basis" is not available. The lemma is proved
    directly from `thm-zorn` on the poset of Q-linearly independent subsets of
    R ordered by inclusion, with Q-linear independence written out inline (the
    library has `def-linear-combination-and-span` and
    `lem-span-is-the-set-of-linear-combinations` but no independence definition).
    `lem-restriction-of-scalars` clause 3 is what makes `R` a `Q`-vector space,
    `Q` being a subfield via `lem-rat-embeds-dense`. AC is an adopted axiom, so
    this is inside the self-contained-scope rule. When page 70 is built it will
    state the general theorem; that is a different statement and a different id,
    and this lemma should then be cross-referenced, never retired.

11. **`thm-cauchy-functional-equation-regularity` has SIX clauses and none of them
    mentions measure.** The two measure clauses were already dropped by the owner
    on 2026-07-27. Sign-constancy on an interval is a special case of boundedness
    below on an interval and should be presented as such rather than proved
    twice. The non-dense-graph clause uses `R^2` as a metric space through
    `lem-metrics-on-rn`, which is stated for `n >= 1` — `n = 2` is inside that.

12. **`thm-darboux-equals-riemann` is the hard proof on page 137.** The direction
    "Darboux integrable ⇒ the mesh condition" is the one that needs work: refine a
    near-optimal partition, and bound the contribution of the subintervals
    straddling its points by `2 · (number of points) · mesh · sup|f|`. Boundedness
    of `f` is a standing hypothesis of the whole page and is what makes that
    bound finite; say so once, in `def-darboux-sums`.

13. **`rem-riemann-integral-choice-ledger` must not overclaim.**
    `thm-continuous-implies-integrable` routes through `thm-heine-cantor-r`,
    which spends countable choice exactly once (its own remarks say so), so
    "everything before the Lebesgue criterion is ZF" would be false. The honest
    ledger is: ZF for `thm-riemann-criterion`, `thm-darboux-equals-riemann`,
    `lem-refinement-inequalities`, `lem-integral-elementary-bounds` and
    `thm-monotone-implies-integrable`; one use of AC_omega inherited from
    Heine-Cantor for `thm-continuous-implies-integrable` and
    `thm-finitely-many-discontinuities-integrable`; a second inherited from
    `thm-countable-union-of-null-is-null` for `thm-lebesgue-criterion`.

14. **No scope-denial phrasing.** Where an item wants to say a notion is not
    available, write "not available at this point in the reading order", never
    "this library does not develop X". Six published claims of the second form
    were falsified by level 8 alone.

15. **Recommended `landmark: true`** (the scaffold format carries no landmark
    field, so this is the record):
    - 129: `def-monotone-function`, `thm-monotone-one-sided-limits-exist`,
      `thm-froda`, `thm-monotone-with-prescribed-discontinuity-set`,
      `thm-continuous-inverse`, `def-oscillation`,
      `thm-discontinuity-set-is-f-sigma`, `thm-continuity-set-realisation`,
      `cor-no-function-is-continuous-exactly-on-q`, `thm-semicontinuous-evt`,
      `thm-baire-one-continuity-points`,
      `thm-cauchy-functional-equation-regularity`, `lem-hamel-basis-exists`.
    - 131: `def-derivative`, `thm-caratheodory-characterisation`,
      `thm-chain-rule`, `thm-derivative-of-an-inverse`,
      `thm-fermat-interior-extremum`, `thm-rolle`, `thm-cauchy-mean-value`,
      `cor-mean-value-theorem`, `thm-monotonicity-from-the-derivative`.
    - 137: `def-partition-and-refinement`, `def-darboux-integral`,
      `thm-riemann-criterion`, `thm-darboux-equals-riemann`,
      `thm-continuous-implies-integrable`, `thm-monotone-implies-integrable`,
      `thm-lebesgue-criterion`.

16. **Page 129 is 32 items and trips the `size` warning.** I did not trim it:
    the owner's standing instruction is a rich library and no landmark trimming,
    and every item is either named in the prose scaffold, mandated by an owner
    decision, or a tool something else on the page needs. If the owner wants it
    under 30, the two cheapest cuts that break nothing downstream are
    `thm-continuity-set-realisation` (nothing in this batch depends on it) and
    the semicontinuity triple; the Cauchy-functional-equation group and the
    Baire-one group are each internally load bearing and should be cut whole
    or not at all.

17. **Forward references: none.** No item in this batch declares one, and
    `depsource` reports `planned-later 0`. Page 132's and 138's
    `forwardRefs` whitelist (`sine-cosine-and-the-definition-of-pi`) is carried
    through from `plan-spec.json` unused; I introduced no trigonometric example.
