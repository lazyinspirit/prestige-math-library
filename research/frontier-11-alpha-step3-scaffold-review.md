# frontier-11 — Alpha step-3 scaffold review (breadth and depth)

Alpha, Claude Opus 5 (`claude-opus-5[1m]`), `xhigh`. Stage 0 of
`research/frontier-11-brief-alpha.md`; criteria are `briefs/alpha.md` §"Stage 0"
and `LEVELS.md` §"Step 3". I authored nothing and edited no batch file. Every
finding below is substantiated from disk; the orchestrator routes them to the
owning Beta and I re-check before step 4 splices.

Read first: `research/frontier-11-step3-decisions.md` (D1–D9),
`research/frontier-11-step0-batching.md`, `research/frontier-11-RESUME.md`, and
for each batch `<run>-batch-<i>.{pages.json,notes.md,coverage.json}`.

## BLOCKER — I could not open the sources at their locators

`WebFetch` is not granted to this runtime. Attempting Judson §21.1 and Zhao Ch. 1
returned *"Claude requested permissions to use WebFetch, but you haven't granted
it yet."* Under the standing no-prompt rule I did not retry and did not ask, so I
record it here as the run brief directs.

**Consequence, stated plainly.** Faithfulness criterion 2 — *open the source at
its `locator` and check whether `contents` reflects what that range actually
contains* — I could **not** perform as written. What I did instead, and what each
finding rests on, is:

- the `coverage.json` rows themselves (disk), including locator wording;
- the published corpus, `research/plan-spec.json`, and the repo's own prose plans
  (disk) — this is what carries the strongest findings below, §2 and §3;
- my own knowledge of these standard subjects, which is criterion 1 of the stage
  ("name, from your own knowledge, the results a competent textbook chapter
  proves") and needs no network.

**I therefore allege no omission *inside* a stated range.** Where a finding
depends on what a source contains, I say so and mark the confidence basis. A
re-check with web access is warranted before step 6 for batch 5's two textbook
harvests (§8) and batch 3's Flajolet–Sedgewick leg (§5).

## Verdicts

| # | pair (A page) | batch | items | verdict |
|---|---|---|---|---|
| 1 | `field-extensions-and-the-complex-numbers` | 1 | 16+7 | **insufficient** |
| 2 | `conjugacy-and-simplicity-in-the-symmetric-groups` | 1 | 18+8 | **sufficient** |
| 3 | `the-fundamental-theorems-of-calculus` | 2 | 8+6 | **insufficient** |
| 4 | `arc-length-and-rectifiable-curves` | 2 | 13+6 | **insufficient** |
| 5 | `formal-power-series` | 3 | 22+9 | **sufficient** (2 required corrections) |
| 6 | `extremal-graph-theory` | 3 | 20+7 | **insufficient** |
| 7 | `the-determinant-of-a-linear-operator` | 4 | 18+5 | **insufficient** |
| 8 | `the-integral-logarithm-and-its-characterisations` | 4 | 19+5 | **sufficient** |
| 9 | `universal-properties-and-the-yoneda-lemma` | 5 | 20+14 | **sufficient** (1 required correction) |

No pair is near the 60-item ceiling; **no split is warranted anywhere in this
run**, and no Beta should have proposed one. Largest A page is 22.

---

## 0. A cross-cutting finding: the missing field of fractions

Three of five batches collided with the same absent construction, and each
handled it differently. This is one decision, not three, and it should be made
once.

**Verified from disk.** There is no field-of-fractions / localisation
construction anywhere: `ls items/ | grep -i fraction` is empty, and
`research/plan-spec.json` contains no such page in any category. Two *published*
items simply assume it — `cex-ordered-field-not-archimedean` and
`ex-rational-function-field-order` both open with **"Given: … the field of
fractions of the polynomial ring $\mathbb{R}[t]$"**. Batch 3 independently
confirmed that `euclidean-domains-pids-and-unique-factorisation` does not define
one (`frontier-11-batch-3.notes.md:119`).

The three collisions:

- **Batch 1 (D3)** declined Judson Thm 21.9 `out-of-scope` for want of it.
- **Batch 4 (D7)** routed around it via a rank-one identity — approved, and the
  right call.
- **Batch 3** plans to *assert* it: `thm-formal-power-laurent-dictionary` is
  titled "…**whose field of fractions is** $K((x))$", from Sambale Thm 7.2.

**My ruling.** Do **not** build a fraction-field page inside this run. It is
genuinely another page's topic — a commutative-algebra construction belonging
with orders 46–50, all of them already published and closed — and inserting it at
order 54 or 193 would put ring theory on a field-extension page and a
combinatorics page respectively. The 2026-08-11 build-the-machinery rule bites on
*missing lemmas*, not on relocating a subject.

But the decline is only honest if nothing depends on the term. Concretely:

- Batch 3 must restate its claim without it (§5, correction C1).
- Batch 1's decline stands **for the construction** and falls **for the
  mathematics**, which is buildable without it (§1).
- The orchestrator should record for the owner that the plan has no
  fraction-field page while two published items assume one. That is a plan gap,
  not this run's work, and not a retrofit of published text.

---

## 1. `field-extensions-and-the-complex-numbers` — INSUFFICIENT

The algebraic development is complete and well decomposed: generated subfields,
minimal polynomial via the evaluation kernel, $F[x]/(p)$, Kronecker, the stem-field
universal property, power basis and degree, then $\mathbb{C}$, conjugation,
modulus, $\operatorname{Aut}(\mathbb{C}/\mathbb{R})$, and an FTA-free Cartesian
square root. The B page is real (4 examples, 2 counterexamples, 1 false
statement). Three specific results are absent.

### Ruling on D3, challenge 1 — the transcendental decline

`def-algebraic-and-transcendental-elements` introduces the algebraic/transcendental
dichotomy, and then **every** structure theorem on the page is about the algebraic
half. The transcendental half gets nothing. Beta calls this its only whole-subject
omission and rests it on the absent fraction field.

**The decline is real for the construction and not real for the theorem.** The
mathematical content of Judson Thm 21.9 is provable here in two items, from the
scaffold's own `thm-evaluation-kernel-and-minimal-polynomial` (zero-kernel case,
already retained) plus `def-field-extension-generated-subfields-and-simple-extension`,
with no fraction field anywhere:

**Add T1 — `thm-simple-transcendental-extension-is-rational-expressions-in-the-generator`.**
For $a$ transcendental over $F$ in an extension $L$: evaluation
$F[x]\to F[a]$ is injective, and
$F(a)=\{f(a)g(a)^{-1} : f,g\in F[x],\ g\neq 0\}$.
*Proof:* $g\neq 0\Rightarrow g(a)\neq 0$ by transcendence, so each $g(a)$ is
invertible in $L$; the displayed set contains $F$ and $a$, is closed under the
field operations, and lies in every subfield containing $F$ and $a$.
*Source:* Judson Thm 21.9 and Milne FT Ch. 1 — **both already in batch 1's
ledger**, currently disposed `out-of-scope` and `out-of-scope` (Ex. 1.24).

**Add T2 — `thm-simple-transcendental-extensions-are-uniquely-f-isomorphic`.**
If $a\in L$ and $b\in M$ are both transcendental over $F$, there is a unique
$F$-isomorphism $F(a)\to F(b)$ with $a\mapsto b$.
*Proof:* send $f(a)g(a)^{-1}\mapsto f(b)g(b)^{-1}$; well-defined because
$f_1(a)g_2(a)=f_2(a)g_1(a)$ forces $f_1g_2=f_2g_1$ **in $F[x]$** by injectivity of
evaluation at $a$, which then gives the same relation at $b$. Bijectivity and
uniqueness are immediate from T1.
*Same source.* This is Judson 21.9's classification with $F(x)$ replaced by "any
other simple transcendental extension" — the content, minus the naming.

Retag the two `out-of-scope` rows: the *construction* $F(x)$ remains declined
(§0), the *theorem* is now `included`.

### Ruling on D3, challenge 2 — the composite of subfields

**The deferral is both unsupported and unnecessary. Overturn it.**

- *Unsupported:* it defers to `splitting-fields` (order 56). I read that page's
  design, `research/plan-algebra-track.md` §AA-13 (line 1278): Kronecker,
  splitting field, existence by induction on degree, uniqueness up to
  $F$-isomorphism, roots with multiplicity, $f=c\prod(x-\alpha_i)$. **Composites
  appear nowhere in it**, nor in §AA-15 (`algebraic-extensions-degree-and-finite-fields`,
  order 96), which is the other candidate. As written the deferral is a silent
  loss.
- *Unnecessary:* the page already defines $F(S)$ for an **arbitrary** subset $S$.
  The composite is that definition instantiated at $S=E\cup E'$.

**Add T3 — `cor-composite-of-two-subfields`.** For subfields $E,E'$ of a field
$\Omega$, the composite $EE' := E(E')=E'(E)$ is the smallest subfield of $\Omega$
containing both; it is the subfield generated by $E\cup E'$.
*Source:* Milne FT Ch. 1, "Composite of two subfields" — **already in the
ledger**, currently `deferred`. Cost: one corollary whose proof is the
minimality clause of a definition already on the page.

### A third finding, not in D3 — the stem-field isomorphism

The harvest disposes Milne's heading *"Unique $F$-isomorphism between two stem
fields carrying one distinguished root to the other"* as `included` against
`thm-universal-property-of-adjoining-an-irreducible-root`. But that item's title
and strategy state a **universal property** — a unique homomorphism out of
$F[x]/(p)$ — not the **isomorphism of two stem fields**. A harvested result is
disposed to an item that does not carry it. This is the
`group-actions-and-cayleys-theorem` pattern in miniature, and the receiving
result is what `splitting-fields` uniqueness at order 56 will actually consume.

**Add T4 — `cor-stem-fields-are-uniquely-f-isomorphic`.** For monic irreducible
$p\in F[x]$, if $L=F(\alpha)$ and $M=F(\beta)$ with $p(\alpha)=p(\beta)=0$, there
is a unique $F$-isomorphism $L\to M$ with $\alpha\mapsto\beta$. *Proof:* apply the
universal property both ways and use its uniqueness clause on the two composites.
*Source:* Milne FT Ch. 1, "Stem fields" — already in the ledger.

*(Non-blocking note.)* Judson Ex. 21.7's transcendence of $\pi$ and $e$ is
`inline` on a definition. It must stay reader-facing prose and must not become
load-bearing; a proved-nowhere transcendence claim would need the `proved_here:
false` machinery.

---

## 2. `conjugacy-and-simplicity-in-the-symmetric-groups` — SUFFICIENT

I checked the scaffold against the standard chapter and found no gap. Present:
relabelling; conjugate $\iff$ equal cycle type; classes indexed by cycle type;
$|C_{S_n}(\sigma)|=\prod k^{c_k}c_k!$; the class equation; $Z(S_n)=1$ for
$n\ge3$; adjacent-transposition generation; the $(1\,2\,\ldots\,n),(1\,2)$
generating pair; $3$-cycles generate $A_n$; the index-two splitting lemma and the
distinct-odd-lengths criterion **with fixed points counted as $1$-cycles**; both
simplicity lemmas; $A_n$ simple for $n\ge5$; the normal-subgroup classification of
$S_n$; and both derived subgroups. Boundary statements I spot-checked are correctly
hypothesised ($n\ge5$ in `cor-three-cycles-form-one-conjugacy-class-in-a-n` is
needed exactly because the repeated $1$-cycle in type $(3,1^{n-3})$ blocks the
split).

Decomposition is honest — the simplicity proof is three separate lemmas, not one
monolith. The B page is real: $S_4$ and $S_5$ class tables, the $A_5$ table with
the split $5$-cycles, $V_4\trianglelefteq A_4$, and three false statements
including the two traps (`same cycle type ⟹ conjugate in $A_n$`, `any
transposition and any $n$-cycle generate $S_n$`). Declines are historical
narrative and Cayley-embedding material that belongs with order 42. Two
independent full treatments (Milne GT, Judson §10.2) plus Conrad and Craven.

---

## 3. `the-fundamental-theorems-of-calculus` — INSUFFICIENT

### Ruling on D5, challenge 1 — the page that states neither theorem

**First, what order 161 actually owns**, read from
`library/real-analysis/properties-of-the-integral-and-the-working-ftc.md` and the
item files:

- `thm-ftc-first-part` — *landmark*. The **sharp pointwise** first FTC: $f$
  integrable on $[a,b]$, continuous at $c$ $\Rightarrow F'(c)=f(c)$, one-sided at
  the endpoints, with the "continuous $f$ $\Rightarrow$ $F$ is a primitive"
  consequence stated in the item.
- `thm-ftc-second-part` — *landmark*, aliased **`thm-newton-leibniz`**. $G$
  differentiable on $[a,b]$, $G'=f$ integrable $\Rightarrow \int_a^b f=G(b)-G(a)$,
  no continuity of $f$ assumed.
- plus `def-the-integral-function`, `thm-the-integral-function-is-lipschitz`,
  `cor-primitives-of-a-continuous-function`, `thm-integration-by-parts`,
  `thm-substitution`, both mean value theorems for integrals, and
  `rem-integral-conventions-and-scope` — 20 items.

So both fundamental theorems are published, in sharp form, on a page whose own
title contains "the Working FTC" and whose objective paragraph reads "the two
fundamental theorems in the form that computes."

**Relocating them to order 239 is not available, and not close.** Order 239 sits
*after* the multivariable block (229–237) and before `line-integrals-and-the-gradient-theorem`
(241). Twenty-nine other published items reference the two FTC ids, 22 of them
with a `deps` edge, and consumers lie
throughout the interval — `arc-length-and-rectifiable-curves` at order **181**,
this run's own pair, cites `thm-ftc-first-part` in
`cor-regular-c1-paths-have-c1-unit-speed-parametrizations`. A D1-style relocation
to 239 would turn every consumer between 161 and 239 into a backward-order
violation. It is foreclosed on structural grounds, not merely editorial ones.

**Therefore: the page is legitimately a refinements page, and 8 items is not the
defect. The defect is that it drops the plan's own device for exactly this
problem.** `research/plan-realanalysis-pages.md` §RA-39 — the design for this page
— opens its inventory with **`rem-ftc-roadmap`**, and the scaffold has no such
item. That remark is what a reader arriving directly at *The Fundamental Theorems
of Calculus* needs in the first screen: the theorems the title names, where they
live, and what this page adds. With it, the title is an accurate index. Without
it, the title is a misnomer, and a title asserting more than the page gives is a
step-6 fatal.

Batch 4 independently reached the same design for the same problem — its
`rem-logarithm-roadmap-and-circularity` on order 178.1. Batch 2 should follow it.

**Add F1 — `rem-ftc-roadmap`.** Names `thm-ftc-first-part` and
`thm-ftc-second-part` on order 161 and states the three strengths of FTC I and the
five of FTC II that RA-39 enumerates, marking which are published, which are on
this page, and which are deferred to a Lebesgue development. *Source:* the plan
itself; no external harvest needed. Non-load-bearing prose.

### Two named results the plan requires and the scaffold neither has nor declines

I checked: **`Botsko`, `Cousin` and `roadmap` appear nowhere** in
`frontier-11-batch-2.coverage.json` or `.notes.md`. Not scaffolded, not disposed.
That is the exact defect this stage exists to catch — "a result in neither is the
defect", and here the naming authority is the library's own page design.

**Add F2 — `thm-newton-leibniz-with-a-countable-exceptional-set` (Botsko).**
RA-39: *"**Botsko's theorem** (countable exceptional set, with continuity of $F$
indispensable)"*. Statement: $F$ continuous on $[a,b]$, $E\subseteq(a,b)$
countable, $F'(x)=f(x)$ for every $x\in(a,b)\setminus E$, and $f$ Riemann
integrable $\Rightarrow \int_a^b f=F(b)-F(a)$.

This is **strictly stronger** than the scaffolded
`cor-newton-leibniz-with-finitely-many-exceptional-points`, and it is not a
Lebesgue theorem: the standard proof is an $\varepsilon\,2^{-n}$ absorption over
the countable exceptional set against continuity of $F$, plus the derivative
elsewhere — Riemann/Darboux machinery and completeness only. D4's approved
declines (Lebesgue FTC, Banach–Zarecki, full Henstock–Kurzweil) do not reach it,
and the scaffold has no other reason to omit it. The continuity of $F$ is
load-bearing and the Cantor function on the B page is already the witness that
shows so.
*Source:* the Botsko note named in RA-39 (M. W. Botsko, *Mathematics Magazine*,
1991) — **the owning Beta must confirm the exact bibliographic entry and
statement at harvest; I could not open it (see BLOCKER)** — corroborated by any
gauge-integral text's treatment of the countable-exception FTC (Bartle, *A Modern
Theory of Integration*; Gordon, *The Integrals of Lebesgue, Denjoy, Perron and
Henstock*).

**Add F3 — `lem-cousin` (secondary).** RA-39: *"**Cousin's lemma** and a remark on
the Henstock–Kurzweil repair"*. For every gauge $\delta:[a,b]\to(0,\infty)$ there
is a tagged partition subordinate to $\delta$. This needs **no** gauge-integration
theory — it follows from the least-upper-bound property alone (take the supremum
of $x$ for which $[a,x]$ admits such a partition), and that route spends no choice,
which matters on a page that already declares its Countable-Choice cost in
`cor-ftc-integral-function-differentiable-almost-everywhere`. D4 correctly
declined the HK **integral**; the covering lemma is not the integral.

I mark F3 secondary because a lemma with no consumer is padding. It stops being
idle if F2's proof is written the gauge way, which is the cleanest route. Beta's
call: **either** F3 + a gauge proof of F2, **or** F2 by direct absorption and F3
dropped with a `deferred` coverage row naming the HK integral. What is not
acceptable is silence on both.

**Optional F4 — `cor-leibniz-rule-with-variable-limits`.**
$\frac{d}{dx}\int_{u(x)}^{v(x)}f(t,x)\,dt = f(v(x),x)v'(x)-f(u(x),x)u'(x)+\int_{u}^{v}\partial_x f$.
The scaffold's `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`
covers only fixed limits, and the variable-limit form is what references call *the*
Leibniz integral rule. It is a direct composition of that theorem with
`thm-ftc-first-part` and the chain rule. Recommended, not required.

The B page is real as it stands (Volterra as centrepiece, Cantor function,
Thomae, dense jumps, sparse spikes, $x^2\sin(1/x)$) and matches RA-39's B
inventory.

---

## 4. `arc-length-and-rectifiable-curves` — INSUFFICIENT

### Ruling on D5, challenge 2 — the textbook-free backing

**On the letter of the rule the sourcing passes; the thinness is real but it is
the *range*, not the *kind*.** Shastri's *Metric Spaces* and Lang's *Differential
Geometry I* are both full lecture-note sets with harvestable contents, which the
2026-08-11 rule explicitly admits as primary backing. What is thin is how much
was read: **pp. 34–39, pp. 1–4, pp. 18–21 — fourteen pages across three sources
for a whole A/B pair**, yielding 17 source headings. Batch 1 harvested 80.

And the consequence is visible, which is what makes it a finding rather than an
observation. Applying faithfulness criterion 4 — *does anything standard appear in
**no** source's `contents` at all?* — three standard results do:

**Add A1 — `cor-chord-length-is-at-most-arc-length`.** $L(\gamma)\ge
\lVert\gamma(b)-\gamma(a)\rVert$, with the classical reading that a segment is the
shortest path between two points. One line from the definition (the two-point
partition is one of the partitions the supremum is taken over). It is **already
used inline** — `thm-every-rectifiable-path-has-an-arc-length-parametrization`
argues "chord distance is at most subpath length" to get the $1$-Lipschitz bound —
so the page must establish it regardless; naming it costs nothing and recovers the
classical statement.

**Add A2 — `cor-length-of-the-graph-of-a-c1-function`.** For $f$ continuous on
$[a,b]$, differentiable on $(a,b)$, with $f'$ extending continuously, the graph
path $t\mapsto(t,f(t))$ has length $\int_a^b\sqrt{1+f'(t)^2}\,dt$. This is the
single most-taught consequence of arc length and it is in none of the three
sources' contents. It is a direct specialisation of
`thm-c1-paths-have-length-equal-to-the-integral-of-speed`
($\gamma'=(1,f')$, $\lVert\gamma'\rVert_2=\sqrt{1+f'^2}$) and needs only square
roots, already available.

**Add A3 — at least one worked length computation on the B page.** The pair's main
computational theorem has **no** worked example anywhere: the B page holds a
segment, a non-rectifiable graph, a corner, a repeated trace, a sawtooth and the
Cantor graph — every one of them qualitative. Two options, both legal here:

- *Trig route, and the better one:* the circular arc $t\mapsto(\cos t,\sin t)$ on
  $[0,\theta]$ has length $\theta$ — the theorem that makes radian measure *be*
  arc length. `sine-cosine-and-the-definition-of-pi` is **order 179, published**,
  so this is legal and needs only `sine-cosine-and-the-definition-of-pi` added to
  order 181's `requires` (179 < 181, no cycle, level unchanged).
- *Trig-free route:* the graph of $x^{3/2}$ on $[0,1]$, whose length
  $\int_0^1\sqrt{1+\tfrac94x}\,dx=\tfrac{8}{27}\bigl((\tfrac{13}{4})^{3/2}-1\bigr)$
  closes in elementary form via A2.

**Required strengthening R-A:** add a genuine textbook/monograph treatment and
harvest its headings, both to lift the backing above the run's thinnest and
because the three additions above are exactly what a fuller source would have
surfaced. Recommended: **Apostol, *Mathematical Analysis*, 2nd ed., Ch. 6**
(*Functions of Bounded Variation and Rectifiable Curves*) — the standard
reference, and its BV framing matches the page's own
`thm-rectifiable-iff-coordinate-functions-have-bounded-variation`; alternatively
**Burago–Burago–Ivanov, *A Course in Metric Geometry*, §§2.3–2.5** for the
metric-space treatment that matches the page's unit-speed factorisation. *I could
not open either (BLOCKER); Beta records exact locators at harvest.*

Everything else on this pair is in good shape: refinement monotonicity, the BV
equivalence, additivity, reparametrisation invariance including pauses and
reversal, Lipschitz/isometry/dilation behaviour, lower semicontinuity with the
sawtooth witness, the $C^1$ speed integral, piecewise-$C^1$ with corners, the
arc-length function, the general unit-speed factorisation, and the regular-$C^1$
$C^1$ reparametrisation. The decomposition is honest and the B page has three
genuine boundary items.

---

## 5. `formal-power-series` — SUFFICIENT, with 2 required corrections

22 items covering: $R[[x]]$ and $[x^n]$; order and the $x$-adic topology;
summable families with regrouping and rearrangement; completeness and polynomial
density; the unit criterion; $K[[x]]$ local and a domain; admissible composition
and its laws; compositional inverses; the formal derivative with product,
quotient, chain and coefficient-recovery laws; formal $\exp$, $\log$ and binomial
powers; unique $k$th roots of $1+u$; formal Laurent series and the residue;
residue integration by parts, logarithmic differentiation and change of variables;
**Lagrange–Bürmann inversion**; and the dictionary to the published real Laurent
field. The B page is real (6 examples, 3 counterexamples, including the two
traps: substitution at a nonzero constant, and non-summability of a constant
family). Sambale's §§2, 3 and 7 are enumerated heading by heading — 38 rows — and
that is a faithful harvest. Declines are two, both real: the partial-fraction
computation belongs to `linear-recurrences-and-rational-generating-functions`,
which I verified is a real planned page at **order 195**, and the Nottingham
group is group theory.

**Correction C1 (required, mathematical).** `thm-formal-power-laurent-dictionary`
is titled "…**whose field of fractions is** $K((x))$", inherited from Sambale Thm
7.2. The library defines no field of fractions (§0). Beta's notes show it knows
this and intends the explicit route — *"the dictionary is built directly from the
explicit factorization $x^m u$"* — so only the claim as displayed is wrong, and
fixing it now costs a title edit rather than a step-6 rewrite. Restate as: *$K[[x]]$
is the subring of $K((x))$ of series of nonnegative order; every nonzero
$h\in K((x))$ is uniquely $x^{n}u$ with $n=v(h)$ and $u\in K[[x]]^{\times}$; hence
every element of $K((x))$ is $fg^{-1}$ with $f,g\in K[[x]]$, $g\ne0$; and
$K((x))=K[[x]][x^{-1}]$.* That is the whole content, with no undefined term.

**Correction C2 (required, sourcing).** The pair's second treatment is
**Flajolet–Sedgewick Appendix A.5–A.6, four pages, contributing two harvested
headings**. *Analytic Combinatorics* is a monograph, so the rule's letter is met,
but a 22-item page effectively rests on one survey. Add a substantial second
treatment and enumerate its headings: **Stanley, *Enumerative Combinatorics* Vol.
1, §1.1 and Ch. 4**; or **Wilf, *generatingfunctionology*, Ch. 1–2** (freely
available); or **Niven, "Formal power series", *Amer. Math. Monthly* 76 (1969)**.
*Not opened — BLOCKER.*

**Optional:** `cor-ideals-of-k-formal-power-series-are-powers-of-x` — every
nonzero ideal of $K[[x]]$ is $(x^n)$, so $K[[x]]$ is a PID and a discrete
valuation ring. One corollary from the unit criterion and the order function,
both already on the page, and `euclidean-domains-pids-and-unique-factorisation`
is already in `requires`.

---

## 6. `extremal-graph-theory` — INSUFFICIENT

The A page is strong — Mantel with uniqueness, Zykov symmetrisation, Turán with
uniqueness, the Ramsey lower bound, Turán density and supersaturation,
Zarankiewicz and Kővári–Sós–Turán, bipartite density zero, hypergraph KST,
Erdős–Stone and Erdős–Stone–Simonovits — and Zhao Ch. 1 is enumerated faithfully.
Two failures, both on the boundary side.

**Finding E1 — the B page has no boundary at all.** Seven items, **all
`example`**: zero counterexamples, zero false statements. "Counterexamples that
mark the boundary of each theorem are the point of the B page." Two boundaries
are refutable from what the page itself proves:

- **`fs-erdos-stone-simonovits-determines-the-extremal-number-for-every-graph`** —
  FALSE, and it is the standard caveat of the whole subject. For $\chi(H)=2$ the
  formula returns $1-\frac{1}{\chi(H)-1}=0$, i.e. only
  $\operatorname{ex}(n,H)=o(n^2)$, which fixes no order of magnitude. The page's
  own `thm-kovari-sos-turan-bound` supplies a strictly better bound
  ($O(n^{3/2})$ for $K_{2,2}$) than Erdős–Stone–Simonovits gives, which refutes
  the claim without needing any lower bound. Source: Zhao Cor. 1.4.5 and Thm
  1.5.1, both already in the ledger.
- **`fs-every-triangle-free-graph-is-bipartite`** — FALSE, refuted by $C_5$,
  which is **already on the B page** as `ex-five-cycle-k-two-two-free`. It marks
  the exact boundary of Mantel's uniqueness clause: the *extremal* triangle-free
  graph is complete bipartite, but triangle-freeness alone does not give
  bipartiteness.

**Finding E2 — the missing decline is a real gap in the record, not in the
scaffold.** The page proves an upper bound for the Zarankiewicz problem and
declines Zhao's Conjecture 1.4.4 correctly (an open problem must not be presented
as machinery). But it offers **no matching lower-bound construction and no
disposition for one**, so the reader is left unable to tell whether KST is near
optimal, and `coverage.json` does not record that anything is missing.

I checked whether it is buildable, and **it is not**: the Erdős–Rényi polarity
graph needs projective planes — `block-designs-and-finite-projective-planes` is
**order 225** — and the deletion method needs
`finite-probability-and-the-probabilistic-method`, **order 221**. Both sit *after*
219 in the reading order, so this is the licensed use of `deferred`: whole subject
areas the library has not reached. Add a `deferred` coverage row naming the
Erdős–Rényi/projective-plane construction for $\operatorname{ex}(n,C_4)=\Theta(n^{3/2})$
and the probabilistic deletion bound, and citing orders 225 and 221 as what would
license them. That is what makes the omission recoverable.

*Optional:* a one-paragraph `rem-` on the page saying the same thing to the
reader.

---

## 7. `the-determinant-of-a-linear-operator` — INSUFFICIENT

D6 and D7 were right, and I confirm the premise D6 corrected: order 82 owns the
Leibniz determinant, alternation, multiplicativity, elementary-row effects,
triangular determinants, similarity invariance, **`thm-determinant-of-transpose`**
and **`thm-determinant-is-the-unique-normalized-alternating-multilinear-function`**
— but no minor, cofactor, Laplace, adjugate or Cramer item. Building them locally
is required, not duplication. D7's rank-one route is sound and its target identity
$\operatorname{adj}(P^{-1}AP)=P^{-1}\operatorname{adj}(A)P$ is classically true; I
verified it independently from $\operatorname{adj}(AB)=\operatorname{adj}(B)\operatorname{adj}(A)$
and $\operatorname{adj}(P)=\det(P)P^{-1}$.

**Finding D-1 — the decline that should have been a build, and a misdisposed
heading.** The harvest declines **Axler 9.40**, the action $\alpha_T$ on
alternating multilinear forms, as belonging "to the later multilinear and
exterior-algebra development". That reason is checkable, and for the **top
degree** it is false:

- The library already owns
  `thm-determinant-is-the-unique-normalized-alternating-multilinear-function` and
  `lem-rigidity-of-alternating-multilinear-matrix-functions` at order 82. What is
  missing is transporting them along the coordinate isomorphism $V\cong F^n$ that
  this page already uses to define $\det T$ at all. No exterior algebra, no
  $\Lambda^m$ for $m<n$, no general multilinear development.
- And the row immediately below it disposes **Axler 9.41, "definition:
  determinant of an operator"** to `def-determinant-of-a-linear-operator` — but
  Axler's 9.41 *is* the alternating-form definition, which is defined **through**
  the 9.40 the harvest declined, whereas the scaffold's item defines $\det T$
  from its matrix in an ordered basis. A harvested heading is disposed to an item
  that does not carry it. Same pattern as §1's stem fields.

This matters beyond bookkeeping: the alternating-form characterisation is the
reason a page called *The Determinant of a Linear Operator* exists separately from
the matrix page at order 82. Without it the page's own basis-independence theorem
is a computation rather than a consequence.

**Add D1 — `lem-alternating-top-forms-are-determined-by-one-ordered-basis`.** For
$\dim V=n\ge1$ and an ordered basis $B$, every alternating $n$-linear
$\omega:V^n\to F$ satisfies $\omega(v_1,\dots,v_n)=\omega(B)\cdot\det M_B(v_1,\dots,v_n)$,
where $M_B$ is the coordinate matrix. *Proof:* transport
`thm-determinant-is-the-unique-normalized-alternating-multilinear-function` along
the coordinate isomorphism.

**Add D2 — `thm-operator-determinant-scales-every-alternating-top-form`.** For
$T\in L(V)$ and every alternating $n$-linear $\omega$,
$\omega(Tv_1,\dots,Tv_n)=\det(T)\,\omega(v_1,\dots,v_n)$, and $\det T$ is the
unique scalar with this property. *Consequences, free:* basis independence and
multiplicativity both drop out, which is the point.
*Source:* Axler, *Linear Algebra Done Right*, 4th ed., §9C, 9.40–9.42 — **already
in the ledger**, currently `out-of-scope`; and Hoffman–Kunze, *Linear Algebra*,
§§5.3–5.4. Retag the 9.40 row `included` and correct the 9.41 row.

**Finding D-2 — the B page has no boundary.** Six items, **all `example`**: zero
counterexamples, zero false statements, on a page whose whole subtlety is the
gap between *unit* and *nonzero* determinant over a commutative ring. Add at
least:

- **`fs-a-square-matrix-over-a-commutative-ring-is-invertible-iff-its-determinant-is-nonzero`**
  — FALSE, refuted by the doubling map on $\mathbb{Z}$ **already on the B page**
  as `ex-doubling-integers-has-nonunit-determinant`; the A page's
  `cor-square-matrix-invertible-iff-determinant-is-a-unit` is the correct
  statement, and this is the single most-made error about it.
- **`cex-the-determinant-is-not-additive`** — $\det(A+B)\ne\det A+\det B$ in
  general; a $2\times2$ witness suffices. It marks the exact boundary of
  "multilinear in the columns" against "linear".

**Required strengthening R-D (sourcing).** Five items —
`def-coordinate-endomorphism-over-a-commutative-ring`,
`thm-cramers-rule-over-a-commutative-ring`,
`thm-adjugate-is-equivariant-under-similarity`,
`def-adjugate-of-a-linear-operator`, `thm-operator-adjugate-identity` — carry **no
source heading at all**; the two textbooks are Axler §9C (over a field) and
Margalit–Rabinoff §4.2 (a first course over $\mathbb{R}$), and the commutative-ring
generality comes from Beta's own synthesis plus one lemma from a control-theory
paper. `thm-adjugate-is-equivariant-under-similarity` is **load-bearing** — it is
what makes `def-adjugate-of-a-linear-operator` basis-independent — so under the
generated-claim rule it wants literature support. It has a locally proved,
source-grounded route (D7), so this is a strengthening rather than a blocker, but
one source treating the adjugate and Cramer's rule **over a commutative ring**
should be harvested: **W. C. Brown, *Matrices over Commutative Rings*, Ch. 2**;
**Lang, *Algebra*, Ch. XIII §4**; or **Keith Conrad, "Universal identities"**,
which proves $\operatorname{adj}(AB)=\operatorname{adj}(B)\operatorname{adj}(A)$
over an arbitrary commutative ring by the polynomial-identity argument. *Not
opened — BLOCKER.*

---

## 8. `the-integral-logarithm-and-its-characterisations` — SUFFICIENT

**The standing RA-27b obligation closes on all three gaps**, which I checked
individually against `LEVELS.md` §0.5 and `research/plan-realanalysis-pages.md`
§RA-27b:

1. **Integral-first construction with no `exp` in its proofs** — items 1–7:
   `def-integral-logarithm`, derivative and normalisation, strict monotonicity,
   the product law, reciprocals and integer powers, unboundedness, bijectivity.
   `def-integral-exponential` arrives only afterwards, as the *inverse* of $L$, so
   the construction is genuinely exp-free.
2. **Functional-equation characterisation** — both regularity strengths
   (continuous with $f(e)=1$; differentiable at $1$ with $f'(1)=1$) plus
   `cor-continuous-logarithmic-functions-form-a-one-parameter-family`, and the
   B page's Hamel-basis counterexample showing regularity cannot simply be
   dropped. Choice is permitted and correctly flagged.
3. **Equivalence theorem presenting the identities as competing definitions** —
   `thm-logarithm-definition-equivalence`, five characterisations.

Also present and good: `rem-logarithm-roadmap-and-circularity`, which is the
device §3 asks batch 2 to copy. D8's substitution of the A-page source
`thm-log-one-plus-x-power-series` for the B-page id is right and preserves the
B-page leaf rule; the deviation is already flagged for step 10.

*Non-blocking note.* The equivalence theorem lists **five** characterisations
while Ricardo's article supplies **four** (A–D). The fifth — the continued
Mercator series — has no harvest row, and neither does
`cex-mercator-series-does-not-define-logarithm-globally`. The series itself is
published (`thm-log-one-plus-x-power-series`, order 177), so this is not a
truth risk; add either a source row or an explicit `canonical` disposition so the
harvest accounts for it.

---

## 9. `universal-properties-and-the-yoneda-lemma` — SUFFICIENT, with 1 required correction

### Ruling on challenge 5

**Nothing published at order 359 is restated.** I diffed all 34 scaffold ids
against every id appearing in
`categories-functors-and-natural-transformations{,-examples}.md`: **zero
clashes**. The scaffold consumes 359's definitions — `def-initial-terminal-and-zero-object`,
`def-functor-category`, `prop-size-of-functor-categories`,
`def-comma-slice-and-coslice-categories`, `def-product-category`,
`def-natural-transformation`, `def-natural-isomorphism`,
`def-full-faithful-and-essentially-surjective-functor`, `def-embedding-of-categories` —
without re-minting any of them. The one place a restatement could have hidden is
`thm-initial-and-terminal-objects-are-unique-up-to-unique-isomorphism`: order 359
carries only the *definition*, not the uniqueness theorem, so it is a genuine
addition.

**Yoneda naturality in both variables is scaffolded, not just the bijection.**
`lem-yoneda-evaluation-bijection` establishes the bijection and the sethood of
$\operatorname{Nat}(\mathcal C(a,-),F)$; `thm-yoneda-lemma-is-natural-in-both-variables`
is a separate item for naturality in $a$ **and** $F$;
`cor-contravariant-yoneda-lemma` states the presheaf form naturally in both. This
is the right decomposition and it is what makes `thm-yoneda-embedding-is-fully-faithful`
honest.

D9 is well handled: the size question is confined to
`rem-size-of-natural-transformation-collections`, which distinguishes the
representable case (where Yoneda *proves* sethood) from the general one, and
"full embedding" is reserved for injectivity on objects. That is exactly right,
and declining to assert a global counterexample it cannot prove is the correct
call under the generated-claim rule.

Breadth is good: hom-functors and the bifunctor, representables and presheaves,
initial/terminal as representations, Yoneda in both variances, the embedding,
isomorphism detection, universal elements, categories of elements, universal
arrows and comma categories. The B page is the run's richest (11 examples across
Set, Mon, Grp, Ring, Top and posets; a non-representable functor; two false
statements including the smallness trap). Colimit-dependent material (the density
theorem) is correctly absent — `limits-and-colimits` is not reached.

**Correction Y1 (required, harvest).** Both textbook locators read *"**selected
results read in** §2.1 pp. 54–58 (Definitions 2.1.3–2.1.4 and Examples 2.1.5(i),
2.1.6(iv))…"* and *"**selected named results read in** §4.1 pp. 89–100
(Definitions 4.1.1, 4.1.3, 4.1.15–4.1.17, 4.1.21–4.1.22)…"*. The 2026-08-11 rule
asks for **that source's own section and named-result headings over the stated
range**, and a self-declared selection is not that — it is the shape
`coverage-checklist.mjs` passes cleanly and cannot see. Re-enumerate Riehl §§2.1–2.4
and Leinster §§4.1–4.3 heading by heading over the ranges already declared, and
give each a disposition. I expect most to land `inline` or `already-published`
against order 359, and I found no content gap this would expose — but that is a
prediction, and I could not check it (BLOCKER). It is a scaffold edit now and a
step-6 repair later.

---

## Summary of what goes back to the Betas

| batch | pair | required |
|---|---|---|
| 1 | field-extensions | **T1**, **T2** (transcendental structure + uniqueness), **T3** (composite), **T4** (stem-field isomorphism); retag 3 coverage rows |
| 2 | fundamental-theorems | **F1** `rem-ftc-roadmap`, **F2** Botsko countable-exception Newton–Leibniz, **F3** Cousin *or* a `deferred` row; optional **F4** |
| 2 | arc-length | **A1** chord bound, **A2** graph-length formula, **A3** a worked computation (+`sine-cosine-and-the-definition-of-pi` in `requires` if the circle is chosen); **R-A** add a textbook treatment |
| 3 | formal-power-series | **C1** restate the "field of fractions" claim; **C2** add a second substantial treatment |
| 3 | extremal-graph-theory | **E1** two B-page boundary items; **E2** a `deferred` row for the KST lower-bound constructions (orders 221, 225) |
| 4 | determinant-of-an-operator | **D1**, **D2** (alternating top-form characterisation), two B-page boundary items; **R-D** a commutative-ring source |
| 5 | yoneda | **Y1** re-enumerate the Riehl and Leinster harvests over their stated ranges |

Nothing here requires an owner decision. The one item for the owner's awareness,
not this run's work, is §0: the plan has no field-of-fractions page while two
published items assume one.

I re-check every routed finding before step 4 splices, and I do not splice a pair
I marked `insufficient` until its findings are resolved.
