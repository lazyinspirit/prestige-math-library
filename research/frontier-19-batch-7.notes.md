# frontier-19 · Beta-7 · batch notes — `non-measurable-sets-and-the-cost-of-choice` (steps 1–2)

Run `frontier-19`, batch `7`, one A/B pair, category `measure-theory`.
Author: Beta-7 (Claude Opus 5, claude CLI, `xhigh`, 1M context).
Design section: `research/plan-measure-theory-track.md` §"MT-5. Non-Measurable Sets and the Cost of Choice", lines 2051-2156.

Artifacts owned by this batch and written here:
`research/frontier-19-batch-7.pages.json`,
`research/frontier-19-batch-7.coverage.json`,
`research/frontier-19-batch-7.proof-contracts.json`, and this file.

The dispatch's §1 "ONLY files you may write" list omits `coverage.json`, but `QUALITY-CONTROLS.md` and the same dispatch also make the coverage harvest mandatory and gate-checked. I followed the frontier-18 four-artifact pattern and treated the omission as a prompt defect, not as permission to skip the required harvest.

---

## 0. Design-vs-spec drift

`research/plan-measure-theory-track.md` lists

`requires`: MT-4, `order-zorn-and-the-axiom-of-choice`,
`ordinals-and-transfinite-recursion`, `cardinal-arithmetic-and-cofinality`,
`countability-and-uncountability`, `filters-and-ultrafilters`,
`cantor-set-baire-and-measure-zero`

but `research/plan-spec.json` currently gives the page only

`requires`: `lebesgue-measure-on-euclidean-space-examples`

Per dispatch rule, I did **not** choose between them. I scaffolded against the
current spec and recorded the conflict here for Alpha's drift handling.

---

## 1. Applyable scaffold amendments

### Amendment A — replace the MT-5 `THMS.` paragraph

File: `research/plan-measure-theory-track.md`

Section anchor: `## MT-5. Non-Measurable Sets and the Cost of Choice`

Exact old text:

```md
**THMS.** A Vitali set exists (**AC** on a family of size $\mathfrak{c}$; **not**
AC$_\omega$, and the Statement says which); **a Vitali set is not Lebesgue
measurable** (**landmark**; the countable-translates-tile-a-bounded-interval
argument, with both the "measure zero" and "positive measure" branches written
out). Every set of positive outer measure contains a non-measurable subset
(**landmark**; via Steinhaus or via translating a Vitali set). $\mathcal{L}$ is not
closed under continuous images: the Cantor function carries a Lebesgue null set
onto a set of positive measure, so there is a Lebesgue measurable set whose image
under a continuous strictly increasing map is non-measurable, and there is a
Lebesgue measurable $E$ and a continuous $g$ with $g^{-1}(E)$ non-measurable
(**landmark**, and the standard warning for MT-7's composition rules). Consequently
**there is a Lebesgue measurable set that is not Borel** — proved twice: once by
this explicit route and once by cardinality,
$\lvert\mathcal{L}(\mathbb{R})\rvert=2^{\mathfrak{c}}>\mathfrak{c}=\lvert\mathcal{B}(\mathbb{R})\rvert$,
using MT-1's cardinality theorem and the fact that every subset of the Cantor set
is null hence measurable. A **Bernstein set** exists (transfinite recursion of
length $\mathfrak{c}$ over the perfect subsets of $\mathbb{R}$, using
`thm-well-ordering-theorem`), and it is non-measurable with
$\lambda_*(B)=0$ and $\lambda^*(B\cap I)=\lvert I\rvert$ for every interval — so
"non-measurable" can fail as badly as possible. **A free ultrafilter on
$\mathbb{N}$, viewed as a subset of $\{0,1\}^{\mathbb{N}}\cong[0,1]$ up to a null
set, is not Lebesgue measurable** (Sierpiński; it discharges half of the published
`rem-sierpinski-ultrafilter-not-measurable`). **The proof route is a $0$–$1$ law and
an involution, and is NOT Steinhaus** — see the traps. It needs one supporting item,
proved here: **a measurable $A\subseteq[0,1]$ invariant under changing finitely many
binary digits has $\lambda(A)\in\{0,1\}$**, proved from MT-4's translation invariance
(each "change the first $n$ digits" map is a piecewise translation of $[0,1]$, hence
measure preserving) plus dyadic approximation to an open superset, so the relative
measure $\lambda(A\cap I)/\lambda(I)$ is the same for every dyadic interval $I$. There is **no** translation-invariant
measure on all of $\mathcal{P}(\mathbb{R})$ that is finite and nonzero on $[0,1]$
(**landmark**, the honest general statement the Vitali construction really proves).
```

Exact new text:

```md
**THMS.** **Inner measure** on $\mathbb{R}$, and for bounded $E\subseteq\mathbb{R}$
the criterion $\lambda_*(E)=\lambda^*(E)$ for Lebesgue measurability. A Vitali set
exists (**AC** on a family of size $\mathfrak{c}$; **not** AC$_\omega$, and the
Statement says which). **A Vitali set is not Lebesgue measurable** (**landmark**;
the countable-translates-tile-a-bounded-interval argument, with both the "measure
zero" and "positive measure" branches written out). **No translation-invariant
measure on all subsets of $\mathbb{R}$ can be finite and nonzero on $[0,1]$**
(**landmark**, the honest general statement the Vitali construction really proves).
Every set of positive outer measure contains a non-measurable subset
(**landmark**; the chosen route is Vitali plus Steinhaus, not a second selector
construction). The Cantor–Lebesgue homeomorphism $\psi(x)=x+c(x)$ from $[0,1]$ to
$[0,2]$ carries the Cantor set onto a compact set of measure $1$, so there is a
Lebesgue measurable set whose image under a continuous strictly increasing map is
non-measurable, and there is a Lebesgue measurable $E$ and a continuous $g$ with
$g^{-1}(E)$ non-measurable (**landmark**, and the standard warning for MT-7's
composition rules). Consequently **there is a Lebesgue measurable set that is not
Borel** by an explicit witness on this page; the separate **cardinality-only**
existence proof is already planned one page earlier as
`fs-every-lebesgue-measurable-set-is-a-borel-set` on
`lebesgue-measure-on-euclidean-space`, so MT-5 must not duplicate it. A
**Bernstein set** exists. To license its transfinite recursion honestly, the page
first proves that every nonempty perfect subset of $\mathbb{R}$ has cardinality
continuum. A Bernstein set then has $\lambda_*(B)=0$ and
$\lambda^*(B\cap I)=\lvert I\rvert$ for every nondegenerate interval, so
"non-measurable" can fail as badly as possible. **A free ultrafilter on
$\mathbb{N}$, viewed as a subset of $\{0,1\}^{\mathbb{N}}$ and hence of $[0,1]$ up
to a null set, is not Lebesgue measurable** (Sierpiński; it discharges half of the
published `rem-sierpinski-ultrafilter-not-measurable`). **The proof route is a
$0$–$1$ law and an involution, and is NOT Steinhaus** — see the traps. It needs one
supporting item, proved here: **a measurable $A\subseteq[0,1]$ invariant under
changing finitely many binary digits has $\lambda(A)\in\{0,1\}$**, proved from
MT-4's translation invariance plus dyadic intervals and open-superset
approximation.
```

### Amendment B — replace the MT-5 `FS.` paragraph

File: `research/plan-measure-theory-track.md`

Section anchor: `## MT-5. Non-Measurable Sets and the Cost of Choice`

Exact old text:

```md
**FS.** Every subset of $\mathbb{R}$ is Lebesgue measurable. A non-measurable set
can be constructed without the axiom of choice. Every Lebesgue measurable set is
Borel. The continuous image of a Lebesgue measurable set is Lebesgue measurable.
The composition $g\circ f$ of a Lebesgue measurable $g$ with a continuous $f$ is
Lebesgue measurable. A set of outer measure zero and a set of full inner measure
cannot both be dense in every interval.
```

Exact new text:

```md
**FS.** Every subset of $\mathbb{R}$ is Lebesgue measurable. A non-measurable set
can be constructed without the axiom of choice. The continuous image of a
Lebesgue measurable set is Lebesgue measurable. The continuous preimage of a
Lebesgue measurable set is Lebesgue measurable. A set of outer measure zero and a
set of full inner measure cannot both be dense in every interval. The false
statement "every Lebesgue measurable set is Borel" is already planned one page
earlier as `fs-every-lebesgue-measurable-set-is-a-borel-set`, so it should stay
there rather than being duplicated on MT-5.
```

### Amendment C — replace the MT-5 `B page.` paragraph

File: `research/plan-measure-theory-track.md`

Section anchor: `## MT-5. Non-Measurable Sets and the Cost of Choice`

Exact old text:

```md
**B page.** *Examples*: the explicit coset structure of $\mathbb{R}/\mathbb{Q}$;
the Cantor–Lebesgue function $\psi(x) = x + c(x)$ (with $c$ the published
`def-cantor-function`) as a homeomorphism $[0,1]\to[0,2]$ carrying the Cantor set
onto a set of measure $1$ — the engine of the "measurable not Borel" route;
counting the Vitali translates. *Counterexamples*: the Vitali set itself; a
Bernstein set; two disjoint non-measurable sets whose union is measurable, showing
that measurability of a union says nothing about the pieces; a non-measurable
subgroup of $(\mathbb{R},+)$ (a Hamel-basis construction — `AC`, and the library's
`cex-discontinuous-midpoint-convex-hamel-function` is already published and can be
cited rather than rebuilt).
```

Exact new text:

```md
**B page.** *Examples*: the explicit coset structure of $\mathbb{R}/\mathbb{Q}$;
counting the Vitali translates on $[0,1]$; the Cantor–Lebesgue homeomorphism
$\psi(x)=x+c(x)$ as a concrete map $[0,1]\to[0,2]$ carrying the Cantor set onto a
compact set of measure $1$. *Counterexamples*: a Vitali set; a Bernstein set; two
disjoint non-measurable sets whose union is measurable, showing that measurability
of a union says nothing about the pieces; and a proper subgroup of $(\mathbb{R},+)$
that is non-measurable, using the published Hamel-basis coefficient-map machinery
instead of rebuilding the discontinuous additive-function page. *False statements*:
"every subset of $\mathbb{R}$ is measurable", "a non-measurable set can be built
without stronger choice", "continuous images of measurable sets are measurable",
"continuous preimages of measurable sets are measurable", and the dense
outer-measure-zero/full-inner-measure incompatibility claim.
```

---

## 2. Per-page item list

### A page `non-measurable-sets-and-the-cost-of-choice` — order 288.009 — 21 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `def-lebesgue-inner-measure-on-r` | definition | Lebesgue inner measure on the real line |
| 2 | `thm-bounded-subsets-of-r-are-lebesgue-measurable-exactly-when-inner-and-outer-measures-agree` | theorem | For bounded subsets of $\mathbb{R}$, Lebesgue measurability is equivalent to equality of inner and outer measure |
| 3 | `def-vitali-set-on-the-unit-interval` | definition | Vitali set on $[0,1]$ |
| 4 | `thm-vitali-sets-exist-under-choice-on-r-over-q` | theorem | Assuming choice on the cosets of $\mathbb{Q}$ in $\mathbb{R}$, a Vitali set in $[0,1]$ exists |
| 5 | `thm-a-vitali-set-is-not-lebesgue-measurable` | theorem | Assuming the Axiom of Choice, a Vitali set is not Lebesgue measurable |
| 6 | `thm-no-translation-invariant-measure-on-all-subsets-of-r-is-finite-and-nonzero-on-unit-interval` | theorem | Assuming the Axiom of Choice, no translation-invariant measure on $\mathcal{P}(\mathbb{R})$ is both finite and nonzero on $[0,1]$ |
| 7 | `cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset` | corollary | Every subset of $\mathbb{R}$ of positive Lebesgue outer measure contains a nonmeasurable subset |
| 8 | `lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two` | lemma | The map $x \mapsto x + c(x)$ is a homeomorphism from $[0,1]$ onto $[0,2]$ |
| 9 | `lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one` | lemma | The homeomorphism $x \mapsto x + c(x)$ sends the Cantor set onto a compact set of Lebesgue measure $1$ |
| 10 | `cor-a-continuous-image-of-a-lebesgue-measurable-set-can-be-nonmeasurable` | corollary | A continuous image of a Lebesgue measurable subset of $\mathbb{R}$ can be nonmeasurable |
| 11 | `cor-a-continuous-preimage-of-a-lebesgue-measurable-set-can-be-nonmeasurable` | corollary | A continuous preimage of a Lebesgue measurable subset of $\mathbb{R}$ can be nonmeasurable |
| 12 | `cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel` | corollary | There is a Lebesgue measurable subset of $\mathbb{R}$ that is not Borel |
| 13 | `def-bernstein-set-on-r` | definition | Bernstein subset of $\mathbb{R}$ |
| 14 | `thm-every-nonempty-perfect-subset-of-r-has-cardinality-continuum` | theorem | Every nonempty perfect subset of $\mathbb{R}$ has the cardinality of the continuum |
| 15 | `thm-bernstein-sets-exist-under-a-well-ordering-of-r` | theorem | Assuming the real line can be well ordered, a Bernstein set exists |
| 16 | `lem-compact-subsets-of-a-bernstein-set-are-countable` | lemma | Every compact subset of a Bernstein set is countable |
| 17 | `thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval` | theorem | A Bernstein set has inner measure $0$, and in every nondegenerate interval its intersection has full outer measure |
| 18 | `cor-a-bernstein-set-is-not-lebesgue-measurable` | corollary | A Bernstein set is not Lebesgue measurable |
| 19 | `lem-finite-binary-digit-changes-do-not-alter-zero-one-measure` | lemma | A Lebesgue measurable subset of $[0,1]$ that is invariant under changing finitely many binary digits has measure $0$ or $1$ |
| 20 | `thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable` | theorem | A free ultrafilter on $\mathbb{N}$, viewed as a subset of $\{0,1\}^{\mathbb{N}}$ and hence of $[0,1]$, is not Lebesgue measurable |
| 21 | `rem-choice-costs-of-vitali-bernstein-and-free-ultrafilters` | remark | What the Vitali set, Bernstein sets and free ultrafilters cost in choice |

Landmarks for step 5: items 2, 5, 6, 7, 10, 12, 15, 17 and 20.

### B page `non-measurable-sets-and-the-cost-of-choice-examples` — order 288.010 — 11 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `ex-cosets-of-q-in-r-and-the-vitali-translates-on-unit-interval` | example | The cosets of $\mathbb{Q}$ in $\mathbb{R}$ meet $[0,1]$ in pairwise disjoint classes, and rational translates of a Vitali set count them |
| 2 | `ex-the-homeomorphism-x-plus-cx-carries-the-cantor-set-to-a-measure-one-compact-set` | example | The map $x \mapsto x+c(x)$ carries the Cantor set onto a compact set of Lebesgue measure $1$ inside $[0,2]$ |
| 3 | `cex-a-vitali-set` | counterexample | A Vitali set shows that not every subset of $\mathbb{R}$ is Lebesgue measurable |
| 4 | `cex-a-bernstein-set` | counterexample | A Bernstein set is dense in every interval, has inner measure $0$, and is not Lebesgue measurable |
| 5 | `cex-two-disjoint-nonmeasurable-sets-can-have-a-measurable-union` | counterexample | Two disjoint nonmeasurable subsets of $[0,1]$ can have the measurable union $[0,1]$ |
| 6 | `cex-a-proper-subgroup-of-r-can-be-nonmeasurable` | counterexample | Assuming Choice, a proper subgroup of $(\mathbb{R},+)$ can be nonmeasurable |
| 7 | `fs-every-subset-of-r-is-lebesgue-measurable` | false-statement | FALSE: assuming the Axiom of Choice, every subset of $\mathbb{R}$ is Lebesgue measurable |
| 8 | `fs-continuous-images-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable` | false-statement | FALSE: every continuous image of a Lebesgue measurable subset of $\mathbb{R}$ is Lebesgue measurable |
| 9 | `fs-continuous-preimages-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable` | false-statement | FALSE: every continuous preimage of a Lebesgue measurable subset of $\mathbb{R}$ is Lebesgue measurable |
| 10 | `fs-a-dense-set-of-outer-measure-zero-and-a-dense-set-of-full-inner-measure-cannot-coexist` | false-statement | FALSE: a dense subset of $\mathbb{R}$ of outer measure zero and a dense subset of full inner measure cannot both meet every open interval |
| 11 | `fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice` | false-statement | FALSE: a nonmeasurable subset of $\mathbb{R}$ can be constructed in ZF + DC without any stronger choice principle |

Both counts are recountable from the tables above. No split is needed.

---

## 3. Per-pair richness report

Both passes were run on this pair.

**Proof-decomposition pass.**

- The Bernstein block was the only place where a single theorem would otherwise have hidden multiple nontrivial subclaims. I split it into:
  `thm-every-nonempty-perfect-subset-of-r-has-cardinality-continuum`,
  `lem-compact-subsets-of-a-bernstein-set-are-countable`,
  `thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval`,
  and the short consequence `cor-a-bernstein-set-is-not-lebesgue-measurable`.
- The free-ultrafilter block keeps exactly one local support lemma, as the design requires:
  `lem-finite-binary-digit-changes-do-not-alter-zero-one-measure`.
  I did **not** split off a separate finite-modification invariance lemma because the theorem itself can carry that ultrafilter-specific verification cleanly, and a one-line lemma there would not improve reuse.
- The Cantor-homeomorphism route is split into the homeomorphism lemma and the measure-one image lemma. That keeps the witness route auditable and makes the measurable-image and measurable-preimage consequences genuinely short.

**Corollary pass.**

- Added `cor-a-continuous-preimage-of-a-lebesgue-measurable-set-can-be-nonmeasurable`, because the inverse-homeomorphism consequence is immediate once the continuous-image witness exists and is one of the design's named deliverables.
- Added `cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel`, but **only** by the explicit witness route. The cardinality-only existence proof is already planned one page earlier and is not duplicated here.
- Added `cor-a-bernstein-set-is-not-lebesgue-measurable` as the short reader-facing consequence of the stronger intervalwise theorem.
- No page approaches the 60-item ceiling.

---

## 4. Findings for the step-3 Alpha

### Finding 1 — MT-5's design currently duplicates a proof already planned on MT-4 (approve the amendment)

**What is wrong.** The MT-5 `THMS.` paragraph says the measurable-not-Borel result is "proved twice", once explicitly and once by cardinality. But `research/plan-spec.json` already places the cardinality-only refutation on the immediately previous page as `fs-every-lebesgue-measurable-set-is-a-borel-set`. Building it again on MT-5 would duplicate an earlier item and blur the reading-order ownership.

**What I propose.** Apply Amendment A and Amendment B above: keep the explicit witness route on MT-5, and leave the counting-only route on MT-4.

**If declined.** The run will carry the same mathematical argument twice on adjacent pages under different packaging, with an avoidable seam defect and a likely id-duplication temptation at step 5.

### Finding 2 — the design/spec `requires` lists disagree (record for drift, do not self-resolve)

**What is wrong.** The design names seven prerequisite pages, while `plan-spec.json` names only `lebesgue-measure-on-euclidean-space-examples`.

**What I propose.** Do not patch the prose in this batch; leave the spec authoritative for scaffolding and hand the discrepancy to Alpha's drift process.

**If declined.** Different agents can legitimately scaffold against different closures, which is how step-4 splicing and later dep-source checks end up talking about different plans.

### Finding 3 — Bernstein existence needs an explicit continuum-size lemma, not just "uncountable perfect sets" (approve the item addition)

**What is wrong.** The design says only that Bernstein sets exist by transfinite recursion over the perfect subsets. That recursion needs the stronger fact that every nonempty perfect subset of $\mathbb{R}$ has size continuum, so that fewer than continuum many earlier choices do not exhaust the current perfect set. The published theorem `thm-perfect-set-uncountable-r` is too weak for that role.

**What I propose.** Keep `thm-every-nonempty-perfect-subset-of-r-has-cardinality-continuum` as a named A-page theorem before Bernstein existence.

**If declined.** `thm-bernstein-sets-exist-under-a-well-ordering-of-r` would rely on an unstated cardinality strengthening and ship with a real proof-closure hole.

### Finding 4 — the free-ultrafilter theorem must be routed through the local zero-one lemma, never through Steinhaus (approve)

**What is wrong.** The design already warns against conflating the Sierpiński ultrafilter theorem with the different Steinhaus-based theorem about sums of null sets. The scaffold must enforce that separation structurally, not just in prose.

**What I propose.** Keep the theorem exactly as scaffolded: one local support lemma, `lem-finite-binary-digit-changes-do-not-alter-zero-one-measure`, and then the complement-swapping involution argument.

**If declined.** Step 5 would be exposed to exactly the citation-fidelity regression the design warns about, with a plausible but wrong Steinhaus proof route available.

### Finding 5 — MT-5 needs its own inner-measure criterion to support the Bernstein extremal statement (approve the item addition)

**What is wrong.** The design introduces inner measure and immediately uses the phrases "inner measure $0$" and "full inner measure" in later claims, but without scaffolding the bounded-set criterion $\lambda_*=\lambda^*$ that lets the page turn those phrases into measurable/nonmeasurable consequences.

**What I propose.** Keep `def-lebesgue-inner-measure-on-r` and
`thm-bounded-subsets-of-r-are-lebesgue-measurable-exactly-when-inner-and-outer-measures-agree`
as items 1 and 2.

**If declined.** The page would use inner-measure language as exposition only, without the theorem that makes the Bernstein conclusions and the final false statement exact.

### Finding 6 — the choice-cost false statement needs an external-dependency route, and that is acceptable here (approve)

**What is wrong.** The design's FS block includes "a non-measurable set can be constructed without the axiom of choice." Refuting that statement in-scope requires Solovay/Shelah consistency-strength facts that this page does not prove locally.

**What I propose.** Keep `fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice`, with dependencies on the published recorded remarks `rem-solovay-model` and `rem-shelah-inaccessible-and-the-baire-property`.

**If declined.** The page loses one of the design's central "cost of choice" counterclaims, precisely where the reader expects to see it.

---

## 5. Forward references kept

None in the scaffold.

The only cross-page orientation I kept is the seam note that the cardinality-only
measurable-not-Borel proof already lives on MT-4; that is not a forward reference
because it points backward in the reading order.

---

## 6. New ids proposed

I ran broad duplicate sweeps with:

```sh
rg -n "def-.*inner-measure|vitali-set|bernstein-set|nonmeasurable-subset|translation-invariant-measure-on-all-subsets|free-ultrafilter.*measurable|continuous-image.*nonmeasurable|continuous-preimage.*nonmeasurable|dense.*full inner measure|composition.*continuous.*measurable" items research/plan-spec.json
rg -n "^id: (def|thm|lem|cor|prop|ex|cex|fs|rem)-(lebesgue-inner-measure|vitali|bernstein|homeomorphism-of-the-cantor-set|free-ultrafilter|continuous-image-of-a-lebesgue-measurable-set|continuous-preimage|choice-ledger-for-nonmeasurable)" items/*.md
```

No existing on-disk or planned ids collide with the new batch ids below.

`def-lebesgue-inner-measure-on-r`

`thm-bounded-subsets-of-r-are-lebesgue-measurable-exactly-when-inner-and-outer-measures-agree`

`def-vitali-set-on-the-unit-interval`

`thm-vitali-sets-exist-under-choice-on-r-over-q`

`thm-a-vitali-set-is-not-lebesgue-measurable`

`thm-no-translation-invariant-measure-on-all-subsets-of-r-is-finite-and-nonzero-on-unit-interval`

`cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset`

`lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two`

`lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one`

`cor-a-continuous-image-of-a-lebesgue-measurable-set-can-be-nonmeasurable`

`cor-a-continuous-preimage-of-a-lebesgue-measurable-set-can-be-nonmeasurable`

`cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel`

`def-bernstein-set-on-r`

`thm-every-nonempty-perfect-subset-of-r-has-cardinality-continuum`

`thm-bernstein-sets-exist-under-a-well-ordering-of-r`

`lem-compact-subsets-of-a-bernstein-set-are-countable`

`thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval`

`cor-a-bernstein-set-is-not-lebesgue-measurable`

`lem-finite-binary-digit-changes-do-not-alter-zero-one-measure`

`thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable`

`rem-choice-costs-of-vitali-bernstein-and-free-ultrafilters`

`ex-cosets-of-q-in-r-and-the-vitali-translates-on-unit-interval`

`ex-the-homeomorphism-x-plus-cx-carries-the-cantor-set-to-a-measure-one-compact-set`

`cex-a-vitali-set`

`cex-a-bernstein-set`

`cex-two-disjoint-nonmeasurable-sets-can-have-a-measurable-union`

`cex-a-proper-subgroup-of-r-can-be-nonmeasurable`

`fs-every-subset-of-r-is-lebesgue-measurable`

`fs-continuous-images-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable`

`fs-continuous-preimages-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable`

`fs-a-dense-set-of-outer-measure-zero-and-a-dense-set-of-full-inner-measure-cannot-coexist`

`fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice`

---

## 7. Cross-batch dependencies

None.

Every load-bearing dependency I kept is already `status: published` on disk. I
deliberately avoided depending on the earlier frontier-19 MT-4 draft/example items,
even when the route would have been shorter, because this batch does not need them.

---

## 8. Expected provenance by item

Legend:

- `L/N` = `statement: literature-derived`, `proof: not-applicable`
- `L/A` = `statement: literature-derived`, `proof: ai-altered`
- `A/N` = `statement: ai-altered`, `proof: not-applicable`
- `A/A` = `statement: ai-altered`, `proof: ai-altered`

No `ai-generated` statement is planned anywhere in this batch, so there is no
generation frontmatter and no extra counterexample-search obligation beyond the
ordinary theorem checks.

### A page

| id | expected provenance | rationale |
|---|---|---|
| `def-lebesgue-inner-measure-on-r` | `L/N` | Standard definition from the measure texts; no local proof component. |
| `thm-bounded-subsets-of-r-are-lebesgue-measurable-exactly-when-inner-and-outer-measures-agree` | `L/A` | Standard criterion, but the proof is assembled from the library's outer-regularity and Littlewood characterisations rather than copied from a single source. |
| `def-vitali-set-on-the-unit-interval` | `L/N` | Standard selector definition. |
| `thm-vitali-sets-exist-under-choice-on-r-over-q` | `L/A` | Classical existence claim; proof phrased to expose the exact size of the family chosen from. |
| `thm-a-vitali-set-is-not-lebesgue-measurable` | `L/A` | Standard theorem; local proof written in the library's translation-invariance vocabulary. |
| `thm-no-translation-invariant-measure-on-all-subsets-of-r-is-finite-and-nonzero-on-unit-interval` | `L/A` | Standard Vitali consequence; proof adapted to the library's measure axioms. |
| `cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset` | `L/A` | Standard theorem, but the chosen proof route is the library's Steinhaus-plus-Vitali decomposition. |
| `lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two` | `A/A` | Standard object, but this exact formulation is chosen locally for the MT-5 route. |
| `lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one` | `A/A` | Standard fact behind the Cantor–Lebesgue route, but the proof is stitched from published library results. |
| `cor-a-continuous-image-of-a-lebesgue-measurable-set-can-be-nonmeasurable` | `A/A` | Immediate consequence of the chosen Cantor-homeomorphism route; source-backed but locally formulated. |
| `cor-a-continuous-preimage-of-a-lebesgue-measurable-set-can-be-nonmeasurable` | `A/A` | Same. |
| `cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel` | `L/A` | Hunter's Example 2.22 supplies the classical content; the local proof uses the page's homeomorphism witness rather than Hunter's monotone inverse map. |
| `def-bernstein-set-on-r` | `L/N` | Standard definition. |
| `thm-every-nonempty-perfect-subset-of-r-has-cardinality-continuum` | `L/A` | Standard theorem; proof localized via a Cantor-scheme recursion inside a perfect set. |
| `thm-bernstein-sets-exist-under-a-well-ordering-of-r` | `L/A` | Classical existence theorem; proof phrased to make the continuum-size dependency explicit. |
| `lem-compact-subsets-of-a-bernstein-set-are-countable` | `L/A` | Standard supporting fact; proof assembled from the library's closed/perfect machinery. |
| `thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval` | `L/A` | Standard extremal-measure statement; proof adapted to the library's regularity tools. |
| `cor-a-bernstein-set-is-not-lebesgue-measurable` | `L/A` | Immediate classical consequence of the preceding theorem and the inner/outer criterion. |
| `lem-finite-binary-digit-changes-do-not-alter-zero-one-measure` | `A/A` | This exact lemma is the page's chosen in-library zero-one route; it is source-backed in method but locally packaged. |
| `thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable` | `L/A` | Classical Sierpiński theorem; proof adapted to the page's local zero-one lemma and the library's ultrafilter vocabulary. |
| `rem-choice-costs-of-vitali-bernstein-and-free-ultrafilters` | `A/N` | A locally authored ledger remark synthesizing published and externally recorded choice facts. |

### B page

| id | expected provenance | rationale |
|---|---|---|
| `ex-cosets-of-q-in-r-and-the-vitali-translates-on-unit-interval` | `L/A` | Standard worked example around the Vitali construction. |
| `ex-the-homeomorphism-x-plus-cx-carries-the-cantor-set-to-a-measure-one-compact-set` | `A/A` | Example chosen to make the A-page witness concrete. |
| `cex-a-vitali-set` | `L/A` | Direct source-backed counterexample. |
| `cex-a-bernstein-set` | `L/A` | Direct source-backed counterexample. |
| `cex-two-disjoint-nonmeasurable-sets-can-have-a-measurable-union` | `A/A` | Built locally from the Vitali witness; checkable and standard. |
| `cex-a-proper-subgroup-of-r-can-be-nonmeasurable` | `L/A` | Standard Hamel-basis counterexample, but routed through published library items. |
| `fs-every-subset-of-r-is-lebesgue-measurable` | `L/A` | Standard false claim, refuted by the Vitali witness. |
| `fs-continuous-images-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable` | `L/A` | Standard false claim, refuted by the Cantor-homeomorphism witness. |
| `fs-continuous-preimages-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable` | `L/A` | Standard false claim, refuted by the inverse-homeomorphism witness. |
| `fs-a-dense-set-of-outer-measure-zero-and-a-dense-set-of-full-inner-measure-cannot-coexist` | `A/A` | Natural false inference sourced from the nearby dense-null/full-measure examples and the new inner-measure criterion. |
| `fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice` | `A/A` | Locally packaged false claim whose refutation depends on the published recorded Solovay/Shelah items. |

---

## 9. Web research ledger

All URLs listed below were opened in web research before scaffolding. The coverage
file records the machine-readable harvest; this ledger records what each source
supports and the convention disagreements I found.

### Source support

- `https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf`
  Supports completeness, translation invariance, the strict inclusion
  `B(R) ⊊ L(R)`, and the explicit measurable-not-Borel witness route in Example
  2.22.
- `https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf`
  Supports the inner/outer-measure criterion, outer regularity, the Vitali
  obstruction to universal translation-invariant measure, and the general
  nonmeasurable-subset route.
- `https://ki.pwr.edu.pl/cichon/Materialy/BOOK.pdf`
  Supports the Vitali selector construction and Theorem 8.2, Bernstein's
  existence theorem and the immediate nonmeasurability paragraph after it, and
  Theorem 8.13 on non-principal ultrafilters.
- `https://www.researchgate.net/publication/239065757_A_Model_of_Set_Theory_in_Which_Every_Set_of_Reals_is_Lebesgue_Measurable`
  Supports the exact Solovay hypothesis: ZFC plus an inaccessible cardinal yields
  ZF + DC + every set of reals measurable/Baire/perfect-set property.
- `https://shelah.logic.at/files/95333/176.pdf`
  Supports the exact Shelah split: the inaccessible is necessary for the
  measurability half, not for the Baire-property half.

### Convention disagreements found

- **Vitali set wording.** Some sources say "the Vitali set". The design is right:
  the page must say "a Vitali set", because the selector depends on the choice
  function.
- **Measurable-not-Borel route.** Hunter's Example 2.22 uses an increasing map
  from `[0,1]` onto the Cantor set. MT-5 instead uses the designer's explicit
  Cantor–Lebesgue homeomorphism `x+c(x)`. Same phenomenon, different witness.
- **Cardinality route.** The counting proof is source-backed, but in this library
  it already belongs to MT-4's false statement item and therefore is a seam issue,
  not a missing theorem on MT-5.
- **Ultrafilter coding.** The replacement monograph states Theorem 8.13 for the
  coded set `F(U) ⊆ P(ω)` attached to a non-principal ultrafilter `U`, whereas
  MT-5 phrases the same pathology on `\{0,1\}^{\mathbb N}` and then on `[0,1]`
  up to the standard binary-expansion null set. The coding changes, not the
  measure-theoretic obstruction.
- **Solovay/Shelah framing.** The precise statement is:
  Solovay's model needs an inaccessible cardinal for the measurability clause; Shelah proves that necessity and separately shows the Baire-property clause is equiconsistent with ZFC alone.

---

## 10. Dependency-closure statement

Every proposed load-bearing dependency was opened from disk and checked for
`status: published`.

Every load-bearing dependency in this scaffold is either:

- earlier on the same A page, or
- published on a strictly earlier page.

Exceptions: none.

No dependency targets an `ai-generated` statement. No cross-batch dependency is
needed. The only external-dependency content is the explicitly choice-theoretic
false statement `fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice`,
which depends on the already published recorded remarks `rem-solovay-model` and
`rem-shelah-inaccessible-and-the-baire-property`; that externality is intentional
and documented in Finding 6.

Legacy-unclassified dependency use: none.

Published-dependency falsehoods discovered at steps 1–2: none.

---

## 11. Confidence statement

High on the page cut, the seam with MT-4, and the dependency closure: every
load-bearing dependency I kept is published on disk, and I intentionally avoided
borrowing draft frontier-19 material from another batch.

Medium on the exact source-harvest completeness for the re-harvested monograph
passages: the replacement clearly carries the four orphaned results, but Alpha
should still check the final PDF page numbering against the direct document once
the network-capable fetch-stamp pass runs.

Not verified at this step:

- no authored item text exists yet, so no `precheck` or item-text proof stratification was run;
- no spliced `plan-spec.json` gate was run, only the batch artifacts;
- the networked fetch-stamping gate is blocked in this shell by DNS resolution failure (`EAI_AGAIN`), so the sources are web-read but not locally stamped.

---

## 12. Gates run

`node tools/content-policy.mjs research/frontier-19-batch-7.pages.json --manifest-only`

- result: `content-policy: 32 scoped item(s), 0 error(s), 0 warning(s)`

`node tools/coverage-checklist.mjs research/frontier-19-batch-7.coverage.json --require-destination`

- result: `coverage-checklist: 1 page(s), 24 harvested result(s), 0 error(s), 0 warning(s)`

`node tools/source-backing.mjs --coverage research/frontier-19-batch-7.coverage.json --liveness research/frontier-19-url-liveness.json`

- result: `source-backing: 8 authored result(s) across 1 file(s), every one still backed by an openable source`

`node tools/source-fetch-check.mjs --coverage research/frontier-19-batch-7.coverage.json --stamp`

- result: blocked by environment, not by bad URLs in web research.
- exact output:

```text
ERROR fetch-check-dead: non-measurable-sets-and-the-cost-of-choice: https://ki.pwr.edu.pl/cichon/Materialy/BOOK.pdf — EAI_AGAIN
source-fetch-check: 2/3 source(s) fetch-verified (0 newly stamped), 1 FAILED
```

`node tools/url-sweep.mjs --coverage research/frontier-19-batch-7.coverage.json --out /tmp/frontier-19-batch-7-url-liveness.json --recover --fail-on-dead --timeout-ms 5000`

- result: blocked by the same shell-side DNS failure across all three hosts.
- exact output:

```text
url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-19-batch-7-url-liveness.json
FAIL 0 https://ki.pwr.edu.pl/cichon/Materialy/BOOK.pdf — curl: (6) Could not resolve host: ki.pwr.edu.pl
  no archived snapshot under any host variant — re-sourcing is justified here
FAIL 0 https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf — curl: (6) Could not resolve host: terrytao.wordpress.com
  no archived snapshot under any host variant — re-sourcing is justified here
FAIL 0 https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf — curl: (6) Could not resolve host: www.math.ucdavis.edu
  no archived snapshot under any host variant — re-sourcing is justified here
```

`node tools/proof-contract.mjs research/frontier-19-batch-7.proof-contracts.json`

- result: expected pre-authoring failure only.
- exact class: `item-missing` for all 28 scoped items, because step 5 has not yet created the corresponding `items/*.md` files. No structural JSON error was reported.

`node tools/prosecheck.mjs research/frontier-19-batch-7.notes.md --warnings`

- result: `0 error(s), 10 warning(s)`.
- warning class only: `count-in-prose`, coming from the mandatory recountable per-page item totals and the sentence-level "one page / one lemma" wording in this report.

Not run here:

- `validate-plan.mjs` and `depsource.mjs` against a spliced spec; step 4 owns the splice.
- item-text gates such as `precheck`, because no item markdown exists yet.

---

## Continuity checkpoint

Substage: steps 1–2 complete; all namespaced artifacts written; batch-scope
pre-splice gates run as far as the sandbox permits.

Owned artifact paths:

- `research/frontier-19-batch-7.pages.json`
- `research/frontier-19-batch-7.coverage.json`
- `research/frontier-19-batch-7.proof-contracts.json`
- `research/frontier-19-batch-7.notes.md`

Completed checks:

- canonical repo docs read as dispatched
- MT-5 design section read and compared to `plan-spec.json`
- published dependency files opened on disk for all intended load-bearing edges
- duplicate-id sweep run
- `pages.json`, `coverage.json`, and `proof-contracts.json` parse as JSON
- `content-policy --manifest-only` clean
- `coverage-checklist --require-destination` clean
- `source-backing` clean after the re-harvest
- `source-fetch-check` blocked only on the replacement source by `EAI_AGAIN`
- `proof-contract` reaches only the expected `item-missing` pre-authoring failures
- `prosecheck` clean apart from count-in-prose warnings

Open mathematical/dependency constraints:

- keep the measurable-not-Borel **cardinality** proof on MT-4 only
- keep the ultrafilter proof route zero-one plus involution, not Steinhaus
- Bernstein existence needs the continuum-size perfect-set theorem
- the false statement about building a nonmeasurable set without stronger choice
  is intentionally external-dependent on the published Solovay/Shelah remarks

Exact next action:

1. hand this batch to the step-3 Alpha for drift and item-list adjudication
2. in a network-capable runtime, rerun the source stamp on the replacement monograph URL
3. at step 5, author the items against the contracts and rerun the item-text gates

## Re-harvest round

Dead source replaced: `https://www.researchgate.net/publication/266861065_The_regularity_properties_on_the_real_line`
for Michal Staš, *The regularity properties on the real line*. The discarded row
already preserved `http://dml.cz/dmlcz/143756` as its own `original_url`; that
older provenance now lives in this note because the replacement source needs the
coverage row's single `original_url` slot for the dead reader-facing
ResearchGate URL.

Same-document scouting tried the dead DML original, the still-dead
ResearchGate mirror recorded by the run's liveness ledger (`403`, no recovered
snapshot), and a title/author search that surfaced the EuDML catalog page
`https://eudml.org/doc/261197`. In this DNS-blocked session I could not
mechanically recover or stamp a direct full-text document URL for the same Staš
article, so I treated the fix as a genuine re-harvest rather than a same-source
swap.

Replacement source:
`https://ki.pwr.edu.pl/cichon/Materialy/BOOK.pdf`
Jacek Cichoń, Aleksander Kharazishvili, and Bogdan Węglorz,
*Subsets of the Real Line*.

Exact range re-read:
Chapter 8, the Vitali-set subsection at printed pp. 149-150, especially the
selector construction immediately before Theorem 8.2 and Theorem 8.2 itself;
Theorem 8.5 with the following paragraph at printed pp. 153-154; and Theorem
8.13 at printed pp. 166-167.

Why the replacement carries each orphaned result:

- `thm-vitali-sets-exist-under-choice-on-r-over-q` is carried by the selector
  construction immediately before Theorem 8.2, where a Vitali set is defined as
  a selector of the `Q`-equivalence classes on `R`.
- `thm-bernstein-sets-exist-under-a-well-ordering-of-r` is carried by Theorem
  8.5 (Bernstein): there are Bernstein subsets of the real line.
- `cor-a-bernstein-set-is-not-lebesgue-measurable` is carried by the paragraph
  immediately after Theorem 8.5: no Bernstein set is Lebesgue measurable or has
  the Baire property.
- `thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable` is carried by
  Theorem 8.13, which states the measurable/Baire-pathology result for the
  coded set `F(U)` of a non-principal ultrafilter on `ω`.

Item-statement movement forced by the new source: none. The only convention
difference is presentational: the replacement phrases the ultrafilter theorem on
`P(ω)`/Cantor-space coding, while the scaffold already phrases the same object
as a subset of `\{0,1\}^{\mathbb N}` and then of `[0,1]` up to the standard
null-set quotient.

Post-repair gate state in this shell:

- `source-backing` is green on the rewritten coverage file.
- `coverage-checklist --require-destination` is green on the rewritten coverage
  file.
- `source-fetch-check --stamp` still cannot stamp the replacement because this
  runtime has no DNS for outbound fetches.
- `url-sweep --recover --fail-on-dead` shows the same shell-wide DNS blocker on
  all three retained source hosts, so its local failure is not evidence against
  the replacement URL specifically.

## Step-3 fix pass

- `B7-1` — already correct: `cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel` in `research/frontier-19-batch-7.pages.json` now names the subspace-trace theorem in both its strategy and its `deps`, exactly as Alpha required. I also synchronized the proof contract to the repaired route and added the explicit completeness dependency that the Cantor-set pullback uses.
- `B7-2` — already correct: `fs-a-dense-set-of-outer-measure-zero-and-a-dense-set-of-full-inner-measure-cannot-coexist` in `research/frontier-19-batch-7.pages.json` now depends on `cex-dense-set-of-measure-zero` and `thm-lebesgue-measure-of-a-box-of-every-kind`, not on the published `ai-generated` example Alpha rejected. I also synchronized the proof contract to those repaired dependencies.

## Continuity checkpoint

Substage: step 5 authoring has started; the repo-wide instructions, MT-5 design,
Alpha step-3 review, and the published dependency statements for the inner
measure, Vitali, Cantor-homeomorphism, Bernstein, and ultrafilter routes have
been re-opened from disk in this session.

Owned artifact paths:

- `research/frontier-19-batch-7.pages.json`
- `research/frontier-19-batch-7.coverage.json`
- `research/frontier-19-batch-7.proof-contracts.json`
- `research/frontier-19-batch-7.notes.md`

Completed gates in this resumed authoring context: none yet on item text; the
pre-authoring scaffold gates recorded above still stand.

Frozen-text state: no `items/*.md` or `library/measure-theory/*.md` files for
batch `7` exist on disk yet.

Open mathematical constraints:

- keep the bounded inner-versus-outer criterion bounded, because compact inner
  approximation is the route
- keep the Vitali theorem on a fixed selector, not "the" Vitali set
- keep the positive-outer-measure corollary on the Steinhaus route
- keep the measurable-not-Borel route on the subspace-trace theorem
- keep the ultrafilter theorem on finite-modification invariance plus the
  zero-one lemma, never Steinhaus

Exact next action: write the first authoring patch, covering the inner-measure
definition and theorem together with the Vitali definition, existence theorem,
nonmeasurability theorem, universal translation-invariant-measure obstruction,
and positive-outer-measure corollary; then reconcile their contracts against the
final step numbering.

## Step-5 authoring

Authored every planned batch-7 item file and both page files:

- `library/measure-theory/non-measurable-sets-and-the-cost-of-choice.md`
- `library/measure-theory/non-measurable-sets-and-the-cost-of-choice-examples.md`

Per-item precheck status:

- `def-lebesgue-inner-measure-on-r` — `n/a`
- `thm-bounded-subsets-of-r-are-lebesgue-measurable-exactly-when-inner-and-outer-measures-agree` — `pass`
- `def-vitali-set-on-the-unit-interval` — `n/a`
- `thm-vitali-sets-exist-under-choice-on-r-over-q` — `pass`
- `thm-a-vitali-set-is-not-lebesgue-measurable` — `pass`
- `thm-no-translation-invariant-measure-on-all-subsets-of-r-is-finite-and-nonzero-on-unit-interval` — `pass`
- `cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset` — `pass`
- `lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two` — `pass`
- `lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one` — `pass`
- `cor-a-continuous-image-of-a-lebesgue-measurable-set-can-be-nonmeasurable` — `pass`
- `cor-a-continuous-preimage-of-a-lebesgue-measurable-set-can-be-nonmeasurable` — `pass`
- `cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel` — `pass`
- `def-bernstein-set-on-r` — `n/a`
- `thm-every-nonempty-perfect-subset-of-r-has-cardinality-continuum` — `pass`
- `thm-bernstein-sets-exist-under-a-well-ordering-of-r` — `pass`
- `lem-compact-subsets-of-a-bernstein-set-are-countable` — `pass`
- `thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval` — `pass`
- `cor-a-bernstein-set-is-not-lebesgue-measurable` — `pass`
- `lem-finite-binary-digit-changes-do-not-alter-zero-one-measure` — `pass`
- `thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable` — `pass`
- `rem-choice-costs-of-vitali-bernstein-and-free-ultrafilters` — `n/a`
- `ex-cosets-of-q-in-r-and-the-vitali-translates-on-unit-interval` — `pass`
- `ex-the-homeomorphism-x-plus-cx-carries-the-cantor-set-to-a-measure-one-compact-set` — `pass`
- `cex-a-vitali-set` — `pass`
- `cex-a-bernstein-set` — `pass`
- `cex-two-disjoint-nonmeasurable-sets-can-have-a-measurable-union` — `pass`
- `cex-a-proper-subgroup-of-r-can-be-nonmeasurable` — `pass`
- `fs-every-subset-of-r-is-lebesgue-measurable` — `pass`
- `fs-continuous-images-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable` — `pass`
- `fs-continuous-preimages-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable` — `pass`
- `fs-a-dense-set-of-outer-measure-zero-and-a-dense-set-of-full-inner-measure-cannot-coexist` — `pass`
- `fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice` — `pass`

Per-item component provenance and source/edit basis:

- `def-lebesgue-inner-measure-on-r` — `statement: literature-derived`, `proof: not-applicable`; Tao and Hunter for the definition, with local wording only.
- `thm-bounded-subsets-of-r-are-lebesgue-measurable-exactly-when-inner-and-outer-measures-agree` — `statement: literature-derived`, `proof: ai-altered`; source-backed criterion, but the proof is rebuilt from published Littlewood and outer-regularity items.
- `def-vitali-set-on-the-unit-interval` — `statement: literature-derived`, `proof: not-applicable`; standard selector definition from the MT-5 sources.
- `thm-vitali-sets-exist-under-choice-on-r-over-q` — `statement: literature-derived`, `proof: ai-altered`; classical existence claim, with the proof rewritten in the library’s choice-function language.
- `thm-a-vitali-set-is-not-lebesgue-measurable` — `statement: literature-derived`, `proof: ai-altered`; classical theorem, with the proof routed through the library’s translation-invariance and interval-measure items.
- `thm-no-translation-invariant-measure-on-all-subsets-of-r-is-finite-and-nonzero-on-unit-interval` — `statement: literature-derived`, `proof: ai-altered`; the Vitali obstruction recast for an arbitrary measure on all subsets.
- `cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset` — `statement: literature-derived`, `proof: ai-altered`; source-backed result, but the proof is the local Steinhaus plus Vitali route.
- `lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two` — `statement: ai-altered`, `proof: ai-altered`; local witness lemma built from published Cantor-function properties and compactness facts.
- `lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one` — `statement: ai-altered`, `proof: ai-altered`; local witness lemma assembled from the homeomorphism and published measure facts.
- `cor-a-continuous-image-of-a-lebesgue-measurable-set-can-be-nonmeasurable` — `statement: ai-altered`, `proof: ai-altered`; direct witness consequence of the chosen Cantor-homeomorphism route.
- `cor-a-continuous-preimage-of-a-lebesgue-measurable-set-can-be-nonmeasurable` — `statement: ai-altered`, `proof: ai-altered`; inverse-homeomorphism version of the same witness route.
- `cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel` — `statement: literature-derived`, `proof: ai-altered`; Hunter’s Example 2.22 backs the claim, but the local proof uses the repaired subspace-trace route.
- `def-bernstein-set-on-r` — `statement: literature-derived`, `proof: not-applicable`; standard definition.
- `thm-every-nonempty-perfect-subset-of-r-has-cardinality-continuum` — `statement: literature-derived`, `proof: ai-altered`; classical size theorem, but the proof is a local binary-tree construction plus a cut-map injection.
- `thm-bernstein-sets-exist-under-a-well-ordering-of-r` — `statement: literature-derived`, `proof: ai-altered`; classical existence theorem, with the proof made explicit via coded perfect sets and transfinite recursion.
- `lem-compact-subsets-of-a-bernstein-set-are-countable` — `statement: literature-derived`, `proof: ai-altered`; local closed-set kernel argument written out to avoid citing a theorem the library does not have.
- `thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval` — `statement: literature-derived`, `proof: ai-altered`; standard extremal-measure theorem, rebuilt from the local compact-subset lemma and outer regularity.
- `cor-a-bernstein-set-is-not-lebesgue-measurable` — `statement: literature-derived`, `proof: ai-altered`; immediate source-backed consequence of the previous theorem and the bounded inner/outer criterion.
- `lem-finite-binary-digit-changes-do-not-alter-zero-one-measure` — `statement: ai-altered`, `proof: ai-altered`; local zero-one lemma chosen by the design, sourced in method but packaged specifically for this page.
- `thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable` — `statement: literature-derived`, `proof: ai-altered`; Sierpiński’s theorem in local binary-coding form, proved from the page’s zero-one lemma and ultrafilter facts.
- `rem-choice-costs-of-vitali-bernstein-and-free-ultrafilters` — `statement: ai-altered`, `proof: not-applicable`; locally synthesized ledger from the page’s theorems and the published Solovay/Shelah/choice-strength remarks.
- `ex-cosets-of-q-in-r-and-the-vitali-translates-on-unit-interval` — `statement: literature-derived`, `proof: ai-altered`; worked example of the selector geometry from the A-page Vitali setup.
- `ex-the-homeomorphism-x-plus-cx-carries-the-cantor-set-to-a-measure-one-compact-set` — `statement: ai-altered`, `proof: ai-altered`; local computation-driven witness example.
- `cex-a-vitali-set` — `statement: literature-derived`, `proof: ai-altered`; direct source-backed counterexample via the A-page witness.
- `cex-a-bernstein-set` — `statement: literature-derived`, `proof: ai-altered`; direct source-backed counterexample, with density read off from the Bernstein property.
- `cex-two-disjoint-nonmeasurable-sets-can-have-a-measurable-union` — `statement: ai-altered`, `proof: ai-altered`; checkable local construction from a Vitali set and its complement.
- `cex-a-proper-subgroup-of-r-can-be-nonmeasurable` — `statement: literature-derived`, `proof: ai-altered`; classical Hamel-basis route, but expressed through the published coefficient-map lemma and measurable-subgroup theorem.
- `fs-every-subset-of-r-is-lebesgue-measurable` — `statement: literature-derived`, `proof: ai-altered`; refuted by the Vitali witness.
- `fs-continuous-images-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable` — `statement: literature-derived`, `proof: ai-altered`; refuted by the Cantor-homeomorphism witness.
- `fs-continuous-preimages-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable` — `statement: literature-derived`, `proof: ai-altered`; refuted by the inverse-homeomorphism witness.
- `fs-a-dense-set-of-outer-measure-zero-and-a-dense-set-of-full-inner-measure-cannot-coexist` — `statement: ai-altered`, `proof: ai-altered`; local false inference, refuted from the dense rational/null and dense irrational/full-inner-measure pair.
- `fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice` — `statement: ai-altered`, `proof: ai-altered`; locally packaged false claim, refuted by the published Solovay/Shelah consistency-strength remarks.

AI-generated statement/construction audit: none in this batch. No item uses `provenance.statement: ai-generated`, so no counterexample-search ledger row is owed on that axis.

Ledger of scaffold-to-authoring changes:

- `def-lebesgue-inner-measure-on-r` — expanded `deps` to add `thm-heine-borel-characterisation-r`, `thm-borel-sets-are-lebesgue-measurable`, and `def-countable-choice`, because the definition text now explicitly justifies why `\lambda(K)` is already defined for compact `K`.
- `thm-bounded-subsets-of-r-are-lebesgue-measurable-exactly-when-inner-and-outer-measures-agree` — added `def-countable-choice` and `thm-borel-sets-are-lebesgue-measurable`, because the authored proof uses the published countable-choice hypotheses and Borel measurability of compact/closed pieces.
- `thm-a-vitali-set-is-not-lebesgue-measurable` — dropped the unused scaffold dependency on `thm-vitali-sets-exist-under-choice-on-r-over-q`, added `def-countable-choice` and `thm-of-archimedean`, and chose the finite-union positive-measure branch rather than the scaffold’s countably-additive infinite-sum phrasing.
- `thm-no-translation-invariant-measure-on-all-subsets-of-r-is-finite-and-nonzero-on-unit-interval` — added `thm-of-archimedean`, because the authored proof uses a finite-union contradiction inside the bounded interval `[-1,2]`.
- `cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset` — replaced the scaffold’s translation-invariance / measure-subadditivity route with the direct Steinhaus plus Vitali-partition route, and declared the countable-choice / measure dependencies the final proof actually uses.
- `lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two` — rewrote the proof to use the interval-image theorem plus compact-to-Hausdorff homeomorphism, so the actual `deps` differ materially from the scaffold’s shorter informal route.
- `lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one` — added the compactness and countable-choice dependencies the final proof needs for the open-gap decomposition and measure calculation.
- `cor-a-continuous-image-of-a-lebesgue-measurable-set-can-be-nonmeasurable` — added the explicit homeomorphism dependency because the proof is written through the restricted map, not only through the image set.
- `cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel` — added `thm-borel-sets-are-lebesgue-measurable` and `def-countable-choice`, because the repaired subspace-trace route ends by turning Borelness back into measurability.
- `thm-every-nonempty-perfect-subset-of-r-has-cardinality-continuum` — replaced the scaffold’s cardinal-arithmetic route with a direct binary-tree injection plus a cut-map / Schröder-Bernstein argument, so the final dependencies shifted to `lem-finite-choice`, `thm-nested-interval-property`, `thm-schroder-bernstein`, and the rational-density/countability items.
- `thm-bernstein-sets-exist-under-a-well-ordering-of-r` — replaced the scaffold’s bare appeal to well-ordering with an explicit coded-perfect-set ordering and transfinite recursion, so the final `deps` add `thm-transfinite-recursion`, `def-well-order`, the Cantor-set coding theorem, and rational coding support.
- `lem-compact-subsets-of-a-bernstein-set-are-countable` — replaced the scaffold’s unavailable “perfect-set theorem for closed sets” citation with a local condensation-point kernel argument, so the final dependencies shifted to `def-perfect-set-r` and `lem-q-and-irrationals-dense-r`.
- `thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval` — replaced the scaffold’s line-null theorem and completeness dependencies with the local compact-subset lemma, `lem-countable-sets-are-null`, `def-lebesgue-inner-measure-on-r`, and the explicit closed-set kernel reuse.
- `lem-finite-binary-digit-changes-do-not-alter-zero-one-measure` — replaced the scaffold’s loose Cantor/null-set placeholders with the actual approximation and dyadic-partition dependencies used in the authored proof.
- `thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable` — added `def-ultrafilter`, `lem-countable-sets-are-null`, `thm-lebesgue-measure-of-a-box-of-every-kind`, and `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, because the proof is written through finite-modification invariance, dyadic null sets, and the `x \mapsto 1-x` symmetry on `[0,1]`.
- `ex-cosets-of-q-in-r-and-the-vitali-translates-on-unit-interval` — dropped the unused existence theorem dependency after fixing the example to start from a given Vitali set.
- `cex-a-bernstein-set` — added `thm-lebesgue-measure-of-a-box-of-every-kind`, because the density argument is written through closed subintervals.
- `cex-two-disjoint-nonmeasurable-sets-can-have-a-measurable-union` — dropped the unused scaffold dependency on `thm-lebesgue-measure-is-a-complete-measure`; the authored proof only uses the interval-measure theorem.
- `cex-a-proper-subgroup-of-r-can-be-nonmeasurable` — dropped the unused `def-axiom-of-choice`, `def-subgroup`, and measure-subadditivity scaffold deps, and added `thm-lebesgue-measure-of-a-box-of-every-kind`, because the authored refutation only needs the Hamel-basis kernel, the positive-measure subgroup theorem, countability of the rationals, and positivity of `\lambda([0,1])`.
- `fs-a-dense-set-of-outer-measure-zero-and-a-dense-set-of-full-inner-measure-cannot-coexist` — after authoring, I removed the repaired scaffold dependency on the published B-page witness `cex-dense-set-of-measure-zero` to satisfy the leaf rule, and rewrote the item to rest on the published A-page facts `prop-countable-subsets-of-rn-are-lebesgue-null` and `lem-q-and-irrationals-dense-r` instead.

No title was changed. No planned item was dropped or merged. No item needed an `ai-generated` statement/construction retag, and no counterexample search beyond the normal theorem checks was triggered.

Gates run on authored text:

- `node tools/tsx-run.mjs tools/reflow.mts items/<all batch-7 ids>` — pass
- `node tools/tsx-run.mjs tools/precheck.mts items/<all batch-7 ids>` — pass (`28` proof-bearing items); definitions and the remark are `n/a`
- `node tools/content-policy.mjs research/frontier-19-batch-7.pages.json` — pass (`32` scoped items, `0` errors, `0` warnings)
- `node tools/validate-plan.mjs research/plan-spec.json` — pass; output is large because it reports the whole planned library
- `node tools/proof-contract.mjs research/frontier-19-batch-7.proof-contracts.json --strict` — pass (`28/28` checked)
- `node tools/coverage-checklist.mjs research/frontier-19-batch-7.coverage.json --require-destination` — pass
- `node tools/prosecheck.mjs library/measure-theory/non-measurable-sets-and-the-cost-of-choice*.md --warnings` — pass

Whole-repo checks run, with honest scope notes:

- `node tools/depcheck.mjs` — still globally red on pre-existing repository issues outside batch `7`; my batch-specific `b-leaf-content` defect on `fs-a-dense-set-of-outer-measure-zero-and-a-dense-set-of-full-inner-measure-cannot-coexist` was repaired, and the remaining mentions of batch `7` are `multi-home` warnings from listing the B-page examples on both the A page and the companion page, which `depcheck` itself marks as legal.
- `node tools/fwdcheck.mjs` — run at repository scope; no batch-7-specific blocker surfaced in its output, but I did not clear unrelated inherited rows.
- `node tools/extcheck.mjs` — pass; the page’s use of published recorded remarks stays within the existing `proved_here: false` discipline.
- `node tools/citecheck.mjs` — repository-scope heuristic warnings only; I did not adjudicate unrelated rows outside batch `7`.

Escalations / blockers:

- No missing item id blocked authoring.
- No published dependency repair was applied.
- The batch-local mathematical and contract gates are green, but the repository-wide `depcheck` output is not globally green because of existing issues outside batch `7`, including unresolved planned-library links and unrelated page cycles.
- The earlier shell-side DNS blocker remains unchanged, so I did not rerun source-fetch stamping in this authoring pass.

Confidence statement:

Medium overall. The authored batch itself now has clean item precheck, clean batch-local contract, clean coverage, clean content-policy, and clean page-summary prose. I did not run any judge lane, I did not publish, and I did not make the repository-wide `depcheck` or `citecheck` outputs globally green because their remaining failures and warnings are outside this batch. The most delicate local proofs are the two Bernstein constructions, the finite-digit zero-one lemma, and the free-ultrafilter coding argument; they are the items I would want step 6 to reread first.
