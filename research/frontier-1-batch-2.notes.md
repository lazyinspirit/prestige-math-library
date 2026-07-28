# frontier-1, batch 2 — scaffold amendments and authoring notes

Beta-F1-2. Pages: `finite-counting-and-binomial-coefficients` (20) +
companion (21); `properties-of-the-integral-and-the-working-ftc` (161) +
companion (162); `rn-as-a-normed-space` (167) + companion (168).

Item scaffolds are in `research/frontier-1-batch-2.pages.json`. This file holds
(1) applyable edits to the prose scaffolds, (2) applyable edits to published
content that I am NOT permitted to make myself, (3) authoring notes with no
scaffold anchor, and (4) the scope drops, each with what would license it.

Gates I actually ran, against a spliced spec built in my scratchpad (I did not
write `research/plan-spec.json`):

* `node tools/validate-plan.mjs <spliced>` — **exit 0.** No new errors; the only
  output is 153 pre-existing `redundant-prereq` warnings and the pre-existing
  `size` warning on `monotone-functions-and-discontinuities` (32 items). None
  names any of my six pages.
* `node tools/depsource.mjs <spliced> --page <each of my six>` — **0 unresolved
  on all six.** Every `planned-earlier` verdict on my pages points at another
  page **inside this batch** (21→20, 162→161, 167→161, 168→167 and 168→161);
  none points at an unbuilt planned page. That is the specific trap the brief
  warned about and it is clean.
* Three `archimedean-reciprocal` triage entries (not defects) are listed in §3.4.

---

## 1. Applyable edits to `research/plan-combinatorics-and-categories.md`

### A1. CB-1 trap (iii) is a plan-order violation — REPLACE

**Section:** `## CB-1 …` → `Traps.` paragraph.

**Old text (exact):**

```
(iii) $0! = 1$
and $\binom{n}{0} = 1$ come out of the empty-product convention already fixed by
`def-monoid-finite-product`; cite it rather than stipulating twice.
```

**New text:**

```
(iii) $0! = 1$ is
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
monoid version.
```

### A2. Well-definedness table row 2 — REPLACE

**Section:** `## 8. Well-definedness obligations`, the row numbered 2.

**Old text (exact):**

```
| 2 | 20 | $n!$ and the falling factorial $n^{\underline{k}}$ | existence and uniqueness of the recursively defined function, by `thm-recursion`; and $0! = 1$ stated as the empty-product convention agreeing with `def-monoid-finite-product` |
```

**New text:**

```
| 2 | 20 | $n!$ and the falling factorial $n^{\underline{k}}$ | existence and uniqueness of the recursively defined function, by `thm-recursion`; $0! = 1$ is the BASE CLAUSE of that recursion, not an imported convention (`def-monoid-finite-product` is at order 24, above this page — see trap (iii)); and the agreement $\iota(n!) = \prod_{j<n}\iota(j+1)$ with the real-valued finite product of `def-finite-sum` is a required clause, because the published `lem-factorial-beats-geometric` (order 122) already defines a real-valued factorial by exactly that product |
```

### A3. CB-1 DEFS/THMS: `def-integer-power` cannot carry $\lvert A^B\rvert$ — REPLACE

**Old text (exact):**

```
$\lvert A^B\rvert = \lvert A\rvert^{\lvert B\rvert}$ (citing
`def-integer-power`);
```

**New text:**

```
$\lvert A^B\rvert = \lvert A\rvert^{\lvert B\rvert}$, which needs
NATURAL-NUMBER exponentiation and therefore a new `def-nat-power` on this page:
`def-integer-power` (order 16) gives $a^{n}$ for a REAL base, so its value is a
real while $\lvert A^{B}\rvert$ is a natural. `def-nat-power` is defined by
`thm-recursion` inside $\mathbb{N}$ and carries the bridge clause
$\iota(m^{n}) = \iota(m)^{n}$ and the agreement $0^{0} = 1$ with
`def-integer-power`;
```

### A4. CB-1 needs TWO more minted items, and the reason is the same in both cases

**Section:** append to the `Traps.` paragraph of CB-1.

**New text (append):**

```
(v) THE COUNTING IDENTITIES ARE IDENTITIES OF NATURAL NUMBERS, AND THE LIBRARY
HAS NO FINITE SUM IN $\mathbb{N}$. `def-finite-sum` (order 16) is real-valued and
`def-monoid-finite-product` (order 24) is above this page, so the sum rule, the
row sums of Pascal's triangle, the multinomial condition $\sum k_i = n$ and stars
and bars all need a `def-nat-finite-sum-and-product` minted here, by the same
`thm-recursion` construction, together with a `lem-nat-finite-sum-laws-and-the-
canonical-embedding` carrying $\iota(\sum^{\mathbb{N}}) = \sum^{\mathbb{R}}\iota$.
That embedding clause is what lets the binomial theorem live in $\mathbb{R}$ while
every count stays in $\mathbb{N}$.
(vi) The well-definedness of the sum over a finite index set (#5) rests on
PERMUTATION INVARIANCE of a finite sum, which the library does not have anywhere:
`lem-finite-sum-laws` has additivity, splitting, monotonicity, telescoping and the
product laws, and no invariance clause. It is minted here as
`lem-finite-sum-permutation-invariance` and, per SCHEMA §3, it belongs in the
DEFINITION'S `deps` and NOT in its `justified_by`, since it is about
`def-finite-sum` and does not depend on the new definition.
```

### A5. CB-1's B-page line names an object the library has not defined — REPLACE

**Old text (exact):**

```
$\binom{n}{2}$ as the number of edges of a complete graph, stated purely as a
count (the graph pages cite this, so it is a **theorem on the A page**, not a
B item — see traps);
```

**New text:**

```
the number of two-element subsets of an $n$-element set, $\binom{n}{2}$, with
$2\binom{n}{2} = n(n-1)$ in $\mathbb{N}$: a **theorem on the A page**
(`thm-two-element-subsets-count`), because the graph pages cite it and a B page
is a leaf. The words graph, vertex and edge do NOT appear in it — no graph is
defined anywhere in the library at order 20 — and Remarks says only that the
count of unordered pairs is the quantity later pages will want;
```

### A6. §10 amendment 2 (Stirling's formula) is not placeable as written — REPLY

**Section:** `## 10. Amendments owed to other scaffolds`, item 2.

Amendment 2 asks the analysis track to "consider adding **Stirling's formula**
somewhere above `properties-of-the-integral-and-the-working-ftc`". As the
analysis-side scaffolder of that page I have to answer: **not placeable there.**
Stirling needs the logarithm, which is `the-logarithm-and-general-powers` at
order 177, and Wallis, which needs the trigonometric functions at order 179 or
later — both strictly ABOVE 161. A page for Stirling therefore has to sit above
177, not below 161. Recommend the combinatorics scaffolder restate the amendment
as "somewhere above `the-logarithm-and-general-powers` (177)" and note that CB-2
and CB-12's asymptotic estimates stay denied until then. **No edit made by me;
this is a reply, not a change to their file.**

---

## 2. Applyable edits to `research/plan-realanalysis-pages.md`

### B1. RA-19: Arzelà's bounded convergence theorem — DROP with a note

**Section:** `**RA-19 Properties of the Integral and the Working FTC**`.

**Old text (exact):**

```
**Arzela's bounded
convergence theorem (1885)**, the Riemann-integral analogue of dominated
convergence, essentially never taught.
```

**New text:**

```
DROPPED FROM RA-19 (Beta-F1-2, frontier-1), deferred not deleted. **Arzela's
bounded convergence theorem (1885)** is in scope in principle — it is a theorem
about the Riemann integral, it predates Lebesgue, and the published measure-zero
toolkit of order 133 plus Heine-Borel is the right neighbourhood for it. It is
dropped because I could not certify a complete and correct proof route at
scaffold time. The obstruction is specific: the elementary proofs (Luxemburg 1971,
Lewin AMM 93 (1986) 395-397, and the Arzela-Osgood argument) all turn on showing
that the outer content of the sets $\{g_n \ge \varepsilon\}$ tends to $0$, and
Jordan outer content is NOT countably additive, so that step needs a delicate
compactness argument that I could not reconstruct with enough confidence to
scaffold. Scaffolding a strategy I cannot certify is the one thing this page must
not do. WHAT WOULD LICENSE IT: a session that works out one of the named
elementary proofs in full and gives it its own numbered lemma chain (the
decreasing case, then the general case by $g_n = \sup_{k\ge n}|f_k - f|$), or the
dominated convergence theorem once a measure-theory track exists. The
counterexample that motivates it, spikes with integral $1$ converging pointwise to
$0$, IS scaffolded on the companion page and stands on its own: it refutes the
interchange for pointwise convergence without asserting anything about the bounded
case.
```

### B2. RA-19: Taylor's integral remainder — DROP with a note

**Old text (exact):**

```
**Taylor's integral remainder**;
```

**New text:**

```
(Taylor's integral remainder is DROPPED from RA-19, Beta-F1-2, frontier-1: it
needs higher derivatives, which are introduced on `darboux-lhopital-and-taylor`
at order 155 — EARLIER in plan order than 161, but not built, so nothing on this
page may cite it. When 155 is built, the integral remainder is best homed THERE,
next to the Lagrange, Cauchy and Peano forms it belongs with, citing this page's
`thm-integration-by-parts`; that is a smaller change than adding it here later.)
```

### B3. RA-19: the integral test must be stated with proper integrals — INSERT

**Old text (exact):**

```
the integral test for series;
```

**New text:**

```
the integral test for series, STATED WITH PROPER INTEGRALS ONLY — improper
integrals are `improper-integrals` at order 165, above this page, so the
conclusion is "the increasing sequence $(\int_0^N f)_N$ is bounded", not
"$\int_0^\infty f$ converges", and the index range starts at $0$ because
$\mathbb{N}$ contains $0$ (a version starting at $1$ is a tail,
`lem-series-tail-invariance`);
```

### B4. RA-22: the operator norm and Lipschitz linear maps — DROP with a note

**Section:** `**RA-22 R^n as a Normed Space; Vector-Valued Functions**`.

**Old text (exact):**

```
the operator norm; linear maps are Lipschitz;
```

**New text:**

```
(the operator norm and "linear maps are Lipschitz" are DROPPED from RA-22,
Beta-F1-2, frontier-1. There is no definition of a linear map anywhere in the
published library: `linear-maps-rank-nullity-and-quotient-spaces` is order 76,
EARLIER in plan order than 167 and not built. Minting a linear map here would be
a re-mint of an earlier page's canonical object, which is worse than the gap.
LICENSED BY: page 76. When it is built, these two items are a short addition to
this page, and the operator norm is then also what `the-total-derivative` (229)
will want.)
```

### B5. RA-22: Bolzano–Weierstrass and Heine–Borel are already published — REPLACE

**Old text (exact):**

```
Bolzano-Weierstrass and **Heine-Borel in R^n by bisection**;
```

**New text:**

```
Bolzano-Weierstrass in $\mathbb{R}^n$ as a COROLLARY. **Heine-Borel in
$\mathbb{R}^n$ by bisection is ALREADY PUBLISHED** as `thm-heine-borel-rn` on
`compactness-in-metric-spaces` (order 120), together with
`thm-metric-compactness-equivalences`; this page CITES them and adds only the
sequential corollary, and re-proving either here would be a duplicate. The same
goes for completeness: `thm-euclidean-space-complete` (order 118) is published
and this page cites it, adding only completeness in an arbitrary norm via norm
equivalence;
```

### B6. RA-22: the crispest mean-value witness is unavailable — REPLACE

**Old text (exact):**

```
**f(x) = cos x +
i sin x on [0, 2pi]** is the crispest failure (forward-citing, see D-TRIG);
```

**New text:**

```
(the classical witness $t \mapsto (\cos t, \sin t)$ on $[0,2\pi]$ is DROPPED,
Beta-F1-2, frontier-1: the trigonometric functions are order 179, above this
page, and the level-9 forward-citing plan for it is superseded by the
self-contained-scope rule of 2026-07-27. The polynomial curve $t\mapsto(t^2,t^3)$
carries the same refutation and is scaffolded instead; the substitution is
recorded IN the item, so a reader who knows the classical example is told why it
is absent. LICENSED BY: order 179.)
```

### B7. RA-22: the Lévy–Steinitz note is PARTLY discharged — APPEND to the level-9 note

**Section:** the indented "Level-9 inheritance note (Alpha-9, step 4, 2026-07-27
— owner decision B2-R4; BINDING when this page is scaffolded)".

**New text (append to that note):**

```
STATUS AT SCAFFOLD TIME (Beta-F1-2, frontier-1, 2026-07-28): PARTLY DISCHARGED,
and the residue is named here so it cannot vanish. Scaffolded on this page as
proved items: `def-series-of-vectors-and-rearrangement` (series of vectors,
absolute convergence, rearrangement, the set $\mathcal{S}(x)$ of rearrangement
sums, with the agreement clause against `def-series` and
`def-rearrangement-and-unconditional-convergence` at $n = 1$);
`def-the-space-of-summing-directions` ($\Gamma$ and $\Gamma^{\perp}$, both proved
to be linear subspaces, phrased with the Euclidean inner product and NOT with
linear functionals, because dual spaces are order 92 and unbuilt);
`thm-steinitz-polygonal-confinement` (the Steinitz rounding / polygonal
confinement theorem, in full, as its own numbered theorem); and
`thm-rearrangement-sums-lie-in-an-affine-subspace` (the CONTAINMENT half:
$\mathcal{S}(x)$ is nonempty and contained in the affine subspace
$s + \Gamma^{\perp}$, with the absolutely convergent case and the published
one-dimensional dichotomy as clauses). NOT scaffolded: the REVERSE inclusion,
i.e. that every point of $s+\Gamma^{\perp}$ is a rearrangement sum for $n \ge 2$,
and Sierpinski's refinement. WHY: every proof of the reverse inclusion known to
me routes through (a) a reduction to $\Gamma = \{0\}$ by orthogonal projection,
which needs the orthogonal decomposition of `inner-product-spaces-and-orthogonality`
(order 94, EARLIER in plan order and unbuilt, so minting it here would be a
re-mint), and (b) a finite-dimensional separation argument for convex sets, which
exists nowhere in the library and is owned by no planned page (`convexity` at 157
is about convex FUNCTIONS on intervals). Both are structural, not effort, gaps.
WHAT WOULD LICENSE IT: pages 94 and 76 being built, plus a convex-separation
item; the natural discharge is then an ADDITION to this same page (adding items to
a published page is always allowed), not a new page, so the plan line stays where
`rem-rearrangement-in-higher-dimensions` promised it. NOTHING on this page states
the reverse inclusion in any form, no `proved_here: false` stub was created, and
the page's scope remark says only what was proved. The companion page carries
`fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space`,
which refutes the naive $\mathbb{R}^d$ generalisation of the Riemann series
theorem outright, using only the containment half — so a reader is protected from
the wrong expectation even while the sharp answer is outstanding.
```

---

## 3. Notes with no scaffold anchor

### 3.1. An applyable edit to PUBLISHED content that I did NOT make

`items/rem-rearrangement-in-higher-dimensions.md` (published, order 129) is the
item whose promise page 167 partly keeps. When page 167 is authored, it must gain

```yaml
forward_refs: [thm-rearrangement-sums-lie-in-an-affine-subspace, thm-steinitz-polygonal-confinement]
```

and a sentence in the body linking both, because `fwdcheck` errors
`forward-unused` on a declared target that is never linked. **Two consequences the
applying agent must not skip.**

1. The link is ORIENTATION ONLY and must sit in prose that carries no logical
   weight; a `rem-` is a consequence kind so `forward-on-spine` does not fire,
   but the remark must not start depending on the new theorem.
2. **The item's `verification.judge` block must be DELETED, not left in place.**
   SCHEMA §3 is explicit that a correction anywhere in a `rem-` item is a material
   rewrite ("a `rem-` item IS its prose"), and this edit changes what the judge
   would read. Leaving the block would claim a pass on text the judge never saw.
   The item will need re-judging before it is republished.
3. The existing sentence "**What the literature answers is not stated here in any
   form**" stays TRUE after the edit and must not be weakened: page 167 proves the
   containment half, which is not what the literature is being cited for.

I did not touch the file.

### 3.2. Two seams with published items that this batch closes, and one it cannot

* **CLOSED.** `lem-factorial-beats-geometric` (published, order 122) defines a
  real-valued factorial inline as $k! := \prod_{j<k}\iota(j+1)$. Page 20's
  `def-factorial-and-falling-factorial` defines a natural-number factorial and
  carries the clause $\iota(n!) = \prod_{j<n}\iota(j+1)$, so the two are one
  notion. Without that clause the library would hold two unrelated factorials.
* **CLOSED.** `lem-metrics-on-rn` (published, order 116) defines $d_1,d_2,d_\infty$
  on $\mathbb{R}^n$. Page 167's
  `lem-p-norms-are-norms-and-induce-the-published-metrics` proves the norms of
  that page induce exactly those metrics. This is the level-7
  two-notions-of-open defect pre-empted.
* **NOT CLOSABLE HERE.** `def-monoid-finite-product` (published, order 24) is the
  monoid finite product, and page 20 mints the $\mathbb{N}$-valued one at order
  **20**, below it. The canonical home of the general notion is therefore ABOVE
  the special case, and page 24 is published so it cannot be retrofitted. Page
  20's definition records the agreement from its own side (identical recursion
  clauses) with an orientation-only forward reference. Recommendation is finding
  F-6 in my report.

### 3.3. Standing hypotheses the step-5 author must carry unchanged

* **$n \ge 1$ on page 167.** `lem-metrics-on-rn`, `thm-euclidean-space-complete`
  and `thm-heine-borel-rn` are all published for $n \ge 1$ only, because
  $d_\infty$ is a maximum over an empty index set at $n = 0$. Every completeness,
  Bolzano–Weierstrass, Heine–Borel and norm-equivalence item on page 167 inherits
  it. The boundary is between the ALGEBRA and the METRIC: the inner product, the
  vector space structure and `lem-standard-basis-of-f-n` are all fine at $n = 0$.
  Do not cite the published theorems for all $n$.
* **Rational exponents only.** `def-rational-power` and `thm-minkowski-finite`
  are stated for rational $p$; real exponents do not exist
  (`rem-real-exponents-deferred`). Never write "for $p \in [1,\infty)$".
* **$\iota$ is visible.** A natural number is a von Neumann natural, i.e. a set,
  so $\binom{n}{k}$, $n!$ and $n$ are not elements of $\mathbb{R}$. The binomial
  theorem's coefficient is $\iota\binom{n}{k}$; $1/(m+1)$ is $1/\iota(m+1)$.
* **Index ranges checked at the FIRST index.** Three items exist only because of
  this: `cor-binomial-theorem-consequences` clause 2 is FALSE at $n = 0$;
  `thm-stars-and-bars` is ill-formed at $m = 0$; the integral test starts at
  $k = 0$. Each has a matching false statement on its companion page.
* **$\mathbb{R}^m$ is a function space**, the set of functions $m \to \mathbb{R}$,
  so $\mathbb{R}^1$ is not literally $\mathbb{R}$ and every comparison with the
  one-dimensional theory goes through a stated identification.

### 3.4. `depsource` triage entries (not defects)

Three items landed on the `archimedean-reciprocal` worklist: they cite
`thm-of-archimedean` without `cor-archimedean-reciprocal` or
`lem-of-inverse-positive`. All three genuinely use the $1/n < \varepsilon$ form,
so the author should ADD `cor-archimedean-reciprocal` to the deps of
`thm-composition-with-a-continuous-function`, `thm-ftc-first-part` and
`fs-all-norms-on-any-real-vector-space-are-equivalent` when authoring. (Two of
them already carry it; the worklist fires on the third and on the two where the
use is inside a sub-estimate.) Cheap to fix at authoring time, not worth a
scaffold change.

### 3.5. Items whose inclusion depends on a decision the orchestrator may reverse

Flagged per F1-D5. If any of these is reversed, the page is still coherent
without it.

1. **`thm-steinitz-polygonal-confinement` and
   `thm-rearrangement-sums-lie-in-an-affine-subspace` (page 167).** Included on my
   judgement that the confinement proof is completely writable from published
   material (see the six-stage strategy in the JSON, including the support bound
   $\#\mathrm{supp} \le k-1$, which is the step an inattentive proof omits) and
   that the containment half is a five-line consequence of
   `thm-dirichlet-rearrangement`. If the orchestrator judges the risk too high,
   both come out cleanly and the only casualties are
   `ex-steinitz-confinement-worked-in-the-plane`,
   `ex-gamma-and-its-complement-computed-for-a-plane-series` and
   `fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space`
   on the companion page. `def-the-space-of-summing-directions` would go with
   them.
2. **`thm-second-mean-value-theorem-for-integrals` (page 161), general monotone
   form.** Its strategy carries an explicit fallback: if the mesh-to-zero passage
   in stage (5) cannot be made clean, state and prove the $C^1$ monotone form
   instead (three lines from integration by parts and the first MVT) and record
   the general case as a scope drop. I judge the general form writable but it is
   the riskiest proof on page 161.
3. **`fs-substitution-holds-for-every-integrable-integrand` (page 162).** Its
   witness needs an explicit $\varphi$ with $f\circ\varphi$ non-integrable; the
   strategy tells the author to construct it or to weaken the item to the
   undefinedness form. If neither is clean, delete the item; the page keeps
   `cex-a-composition-of-integrable-functions-that-is-not-integrable`, which is
   the mathematics that matters.
4. **`requires` on page 161 now includes `absolute-convergence-and-rearrangement`
   (129)**, purely for `lem-abel-summation-by-parts` in the second MVT. If
   decision 2 falls back to the $C^1$ form, that edge can be dropped and 161's
   `requires` returns to the spec's two entries. Note the knock-on: page 167's
   `requires` is the single entry `properties-of-the-integral-and-the-working-ftc`
   precisely because 161's closure carries 129, 127, 120, 118, 116, 74, 72, 16
   and 153; if 129 leaves 161, page 167 must declare it directly.

### 3.6. `requires` changed from the spec on two of my three A pages

* **161:** spec had `["the-riemann-integral","the-derivative-and-mean-value-theorems"]`.
  Scaffolded as `[…, "absolute-convergence-and-rearrangement"]` — see 3.5(4).
* **167:** spec had `["the-derivative-and-mean-value-theorems","metric-spaces"]`,
  which is **insufficient**: componentwise integrals need page 161 and the whole
  rearrangement block needs 129. Scaffolded as
  `["properties-of-the-integral-and-the-working-ftc"]` alone, because that single
  edge transitively carries 159, 153, 129, 127, 120, 118, 116, 74, 72, 16 and the
  spec's two entries become redundant (rule 17 would warn on them). This is the
  honest closure, and `validate-plan`'s `undeclared-prereq` check passes on it.
* **20:** unchanged, `["countability-and-uncountability","roots-and-rational-powers"]`,
  whose closure already covers everything page 20 cites.

### 3.7. Naming collision to be aware of

`lem-steinitz` is a published ALIAS of `thm-steinitz-exchange` (order 74, the
Steinitz exchange lemma of linear algebra). Page 167's new
`thm-steinitz-polygonal-confinement` is a different theorem by the same author.
The ids do not collide, but the page's Remarks should say which Steinitz result
is meant, and no item may use the bare alias.

---

## 4. Scope drops, consolidated

Every item the prose scaffolds list that I did NOT scaffold, with why and what
would license it. A dropped result is deferred, not deleted.

| # | dropped from | what | why | what would license it |
|---|---|---|---|---|
| 1 | RA-19 (161) | **Arzelà's bounded convergence theorem (1885)** | in scope in principle; I could not certify a complete proof route at scaffold time (the outer-content step is delicate and Jordan content is not countably additive) | a worked-out Luxemburg/Lewin proof given its own lemma chain, or dominated convergence from a measure track. See B1. |
| 2 | RA-19 (161) | **Taylor's integral remainder** | needs higher derivatives, homed on `darboux-lhopital-and-taylor` (155) — earlier in plan order but unbuilt | page 155; and it is better homed THERE than here. See B2. |
| 3 | RA-19 (161) | improper-integral reading of the integral test | `improper-integrals` is order 165, above this page | page 165. The proper-integral form IS scaffolded. See B3. |
| 4 | RA-22 (167) | **the operator norm; linear maps are Lipschitz** | no definition of a linear map exists in the published library; `linear-maps-rank-nullity-and-quotient-spaces` is order 76, earlier in plan order and unbuilt. Minting one here would re-mint an earlier page's canonical object | page 76. See B4. |
| 5 | RA-22 (167) | **the reverse inclusion of Lévy–Steinitz, and Sierpiński's refinement** | needs orthogonal decomposition (`inner-product-spaces-and-orthogonality`, 94, unbuilt and earlier) and finite-dimensional convex separation, which no planned page owns | pages 94 and 76 plus a convex-separation item; discharge as an ADDITION to page 167. See B7. The confinement theorem and the containment half ARE scaffolded. |
| 6 | RA-22 (167) | **$f(t) = (\cos t, \sin t)$ on $[0,2\pi]$** as the mean-value witness | trigonometric functions are order 179; the level-9 plan to forward-cite is superseded by the self-contained-scope rule | order 179. $t\mapsto(t^2,t^3)$ is scaffolded in its place and the substitution is recorded in the item. See B6. |
| 7 | RA-22 (167) | abstract inner-product-space theory (orthonormal bases, Gram–Schmidt, orthogonal projection) | `inner-product-spaces-and-orthogonality` is order 94, earlier in plan order and unbuilt | page 94. Only the CONCRETE Euclidean dot product on $\mathbb{R}^n$ is defined here, with a scope note saying so. |
| 8 | CB-1 (20) | the ring form of the binomial theorem | `def-ring` is order 46, twenty-six pages above; trap (ii) of the scaffold is explicit | order 46, and §10 amendment 3's companion decision about where the ring version is stated. |
| 9 | CB-1 (20) | any use of `def-symmetric-group` for $\lvert\operatorname{Bij}(A)\rvert = n!$ | `def-symmetric-group` is order 24, above this page | order 24. The theorem is stated about bijections of a finite set, with no group vocabulary, and is on the A page so that order 44 can cite it. |
| 10 | CB-1 (20) | Stirling's formula / any asymptotics of $n!$ | needs the logarithm (177) and Wallis (179+) | order 177 and above. See A6: it also cannot be placed above 161 as §10 amendment 2 requests. |
