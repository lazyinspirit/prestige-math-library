# frontier-18 · batch 7 · Lebesgue Measure on Euclidean Space — Beta notes (steps 1–2)

Beta-7. Pair: `lebesgue-measure-on-euclidean-space` (A, order 288.007) and
`lebesgue-measure-on-euclidean-space-examples` (B, order 288.008), category
`measure-theory`, design `research/plan-measure-theory-track.md` §MT-4 (L1928).

Artifacts owned by this batch, and the only files written:

- `research/frontier-18-batch-7.pages.json`
- `research/frontier-18-batch-7.notes.md` (this file)
- `research/frontier-18-batch-7.proof-contracts.json`
- `research/frontier-18-batch-7.coverage.json`

---

## 1. Design-vs-spec drift, recorded and not settled here

The MT-4 design section declares

> `requires`: MT-3, `the-topology-of-euclidean-space`, `compactness-in-metric-spaces`
> (Heine–Borel), `cantor-set-baire-and-measure-zero`,
> `the-riemann-integral-in-rn-and-jordan-content`,
> `determinants-of-matrices-over-a-commutative-ring`,
> `gaussian-elimination-and-row-reduction`

while `research/plan-spec.json` gives the A page a single prerequisite,
`outer-measure-and-the-caratheodory-extension-theorem-examples`. Per the dispatch
this is not adjudicated inside the batch: stage 1's `drift` unit owns it. This
scaffold carries on with the spec and repairs only what `validate-plan`'s
`undeclared-prereq` check actually requires, keeping `requires` a transitive
reduction:

```
requires: [ outer-measure-and-the-caratheodory-extension-theorem-examples,
            areas-of-elementary-plane-figures,
            separation-axioms ]
```

Verified from the spec: the closure of those three already contains every page
the design lists, together with `fubini-and-change-of-variables`,
`cardinal-arithmetic-and-cofinality`, `inner-product-spaces-and-orthogonality`,
`the-total-derivative` and `rn-as-a-normed-space`, all of which this page's item
deps reach. `areas-of-elementary-plane-figures` is needed for
`def-translation-of-a-set-in-rn`; `separation-axioms` for
`def-g-delta-and-f-sigma-in-a-topological-space`.

The design also numbers MT-4 relative and warns that its quoted orders are stale.
The spec's orders were read on 2026-08-24 and are the ones used above.

---

## 2. Source ledger

Every URL below was fetched in this dispatch and carries a `fetch_verified` stamp
in `research/frontier-18-batch-7.coverage.json`; `tools/url-sweep.mjs --recover
--fail-on-dead` reported all five live.

| source | kind | what it backs |
|---|---|---|
| John K. Hunter, *Measure Theory* (UC Davis), Ch. 2 §§2.1–2.9 · `https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf` | lecture-notes | The whole arc in $\mathbb{R}^n$: outer measure of a rectangle, Carathéodory measurability, null sets and completeness, translation invariance, Borel measurability, outer and inner regularity, the $G_\delta$/$F_\sigma$ description, the completion statement, orthogonal invariance, the diagonal case, and the determinant formula. |
| Terence Tao, *An Introduction to Measure Theory* (GSM 126), §1.1.1, §1.2 and §§1.6.1–1.6.2 · `https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf` | textbook | Elementary sets and the well-definedness of elementary measure; the dyadic decomposition of an open set; outer regularity; the four Littlewood conditions (Ex. 1.2.7, 1.2.16, 1.2.19); inner regularity (Ex. 1.2.15); the measurable hull (Ex. 1.2.14); translation invariance (Ex. 1.2.20); the linear change of variables (Ex. 1.2.21); and the uniqueness of Lebesgue measure from empty set, countable additivity, translation invariance and normalisation (Ex. 1.2.23). From §§1.6.1–1.6.2 (printed pp. 137–155), added at the step-3 fix pass for finding B7-2: the Steinhaus theorem itself, stated at Ex. 1.6.8 as "let $E\subseteq\mathbb R^d$ be a Lebesgue measurable set of positive measure; show that the set $E-E:=\{x-y:x,y\in E\}$ contains an open neighbourhood of the origin" (printed p. 140), and the cube-density lemma at Ex. 1.6.25, "there exists a cube $Q\subseteq\mathbb R^d$ of positive side length such that $m(E\cap Q)>(1-\varepsilon)m(Q)$", whose part (ii) asks for the proof that avoids the differentiation theorem and whose part (iii) uses it to reprove Steinhaus — that is exactly this page's route (printed p. 153). |
| Eric A. Carlen, *Notes on Lebesgue Measure on $\mathbb{R}^n$ and $S^{n-1}$* (Rutgers Math 501), §§1–3 · `https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf` | lecture-notes | Exactly this page's construction route: the elementary family of half-open rectangles, the algebra of finite disjoint unions, volume as a premeasure on it (Thm 1.1), $\sigma(\mathcal A_n) = \mathcal B_n$ (Prop 1.4), inner and outer regularity (Thm 1.5), approximation by finite unions of rectangles (Thm 1.6), translation invariance through the uniqueness theorem (Thm 2.3), the invertible linear case (Thm 3.1), rotation invariance (Thm 3.2) and dilation (Thm 3.4). |
| *Steinhaus theorem* (Wikipedia) · `https://en.wikipedia.org/wiki/Steinhaus_theorem` | wiki | **No item is backed by this row any more** (step-3 fix pass, finding B7-2). It is kept as a convention tiebreaker: it is where the Steinhaus–Weil form over a locally compact group and the Falconer application were read, neither of which this library reaches. The three items it used to back are re-backed on the two rows below. |
| J. Ye, L. Yu, X. Zhao, *When is $A+xA=\mathbb{R}$?*, §1 · `https://arxiv.org/pdf/2505.00556` | paper | Statement backing for `cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn`. Its Theorem 1.1 states Steinhaus in exactly this page's form — "suppose $A\subseteq\mathbb R^n$ is Lebesgue measurable and has positive measure; then the difference set $A-A:=\{x-y:x,y\in A\}$ contains a ball with positive radius whose center is at the origin" — and its Corollary 1.2 is "if $A$ is a measurable proper subgroup of $(\mathbb R,+)$, then $A$ is null", the contrapositive of the corollary this page states. Not a primary treatment and not counted as one: the pair's primary backing remains the three above. |

### Convention disagreements found

1. **Which face the half-open box keeps.** Carlen and Folland use $(a,b]$; Tao's
   dyadic cubes (Ex. 1.1.14) use $[a,b)$; Hunter uses closed rectangles and defines
   the outer measure by closed covers, so the question does not arise for him.
   Resolved in favour of $(a_i,b_i]$; see Finding F2.
2. **What "regular" modifies.** MT-3's `def-regular-outer-measure-and-measurable-hull`
   uses *regular* for an outer measure with measurable hulls; Hunter §2.7 and Carlen
   Thm 1.5 use *regular* for a measure approximable by open and compact sets. Both
   hold here and they are different conditions. `rem-two-senses-of-regularity-for-lebesgue-measure`
   is on the page for exactly this reason, and it is the seam item that the level-7
   two-notions-of-open defect asks for.
3. **Where the extension starts.** Cohn and Bogachev extend from a semiring;
   Folland, Bass and Carlen from an algebra. The design's decision D2 fixes the
   algebra route and MT-3 is already built that way, so the semiring form does not
   appear.
4. **Whether the construction is stated in ZF.** None of the three treatments tracks
   its choice principles. MT-1 to MT-3 do, and this page follows them: every item
   whose proof passes through the induced outer measure carries "Assume the Axiom of
   Countable Choice", and the two items that do not need it say so.

---

## 3. Findings, ordered by severity

Each is one recommendation, to approve or decline.

### F1 · The design's $\mathcal{E}_n$ is a ring, not an algebra, unless box parameters may be infinite

**What is wrong.** The design's DEFS line reads "the algebra $\mathcal{E}_n$ of
finite disjoint unions of half-open boxes". With *bounded* boxes, every finite
union is bounded, so $\mathbb{R}^n \notin \mathcal{E}_n$ and $\mathcal{E}_n$ is
closed under difference but not under complement. MT-3's
`def-outer-measure-induced-by-a-premeasure` states in its own text that the family
of covering costs is nonempty *because* $X \in \mathcal A_0$, and
`def-algebra-of-subsets` requires closure under relative complement. So the
premeasure could not be fed to the extension theorem at all.

**Proposal.** Define a half-open box by set-builder with parameters in the extended
reals: $B(a,b) := \{x \in \mathbb{R}^n : a_i < x_i \le b_i \text{ for } i<n\}$ with
$a_i, b_i \in \overline{\mathbb{R}}$ and the comparisons taken in the extended
order, so an infinite parameter imposes no constraint in that coordinate. Volume is
$0$ on the empty box, $+\infty$ when the box is nonempty and some parameter is
infinite, and the real product otherwise. Then $\mathbb{R}^n = B(-\infty,+\infty)$
is a box, $\mathcal{E}_n$ is a genuine algebra, and the design's decision D2 is
implemented rather than contradicted.

**What breaks if declined.** `thm-box-volume-is-a-premeasure-on-the-elementary-algebra`
cannot cite `def-premeasure-on-an-algebra`, and the whole construction stops at
step 1.

**A second reason the case split matters.** `def-extended-reals` leaves every
product with one factor $0$ and the other $\pm\infty$ **undefined**. A nonempty
half-open box has every side length strictly positive, so the volume of a nonempty
box never forms that product; a degenerate side makes the box *empty*, and the
empty box is given volume $0$ by the case split. Closed boxes do not have this
property, which is a second reason the elementary family is half-open.

### F2 · The half-open box is $(a_i,b_i]$, not $[a_i,b_i)$

**What is wrong.** The design writes $\prod_{i<n}[a_i,b_i)$. The published
`thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn` (MT-1, order
288.001) already fixes the library's half-open box as $\prod_{i<n}(a_i,b_i]$, in
its Statement. Minting a second half-open convention one page later is a silent
re-definition of the same object, which is the defect class the seam rule names.

**Proposal.** Use $(a_i,b_i]$ throughout MT-4, and amend the design accordingly.
Three grounds: the published generator theorem; MT-6, whose distribution-function
correspondence is $\mu_F((a,b]) = F(b)-F(a)$ for right-continuous $F$ and which
would otherwise have to change convention mid-track; and Carlen, the one harvested
source that follows this page's construction route, which uses $(a,b]$. The
mathematics is unchanged and `lem-half-open-boxes-generate-the-borel-sigma-algebra-on-rn`
gains a second, published route to $\sigma(\mathcal{E}_n) = \mathcal{B}(\mathbb{R}^n)$.

**What breaks if declined.** Nothing mathematical; the page would carry a second
convention for "half-open box" and MT-6 would inherit the mismatch.

### F3 · This page's whole spine rests on draft items

**What is wrong.** All of MT-3 — `outer-measure-and-the-caratheodory-extension-theorem`,
its page file and its items — is `status: draft` on disk, committed by frontier-17
and awaiting the owner's publish. `depsource` classifies fifteen of this page's
external deps as `draft-page`, all into MT-3: `def-outer-measure`,
`def-caratheodory-measurable-set`, `def-premeasure-on-an-algebra`,
`def-outer-measure-induced-by-a-premeasure`,
`cor-premeasure-induced-set-function-is-an-outer-measure`,
`lem-induced-outer-measure-agrees-with-premeasure`,
`lem-source-algebra-is-caratheodory-measurable`,
`thm-caratheodory-outer-measure-theorem`, `thm-caratheodory-extension-theorem`,
`thm-caratheodory-domain-is-the-completion-under-sigma-finiteness`,
`thm-premeasure-induced-outer-measure-is-regular` and
`def-regular-outer-measure-and-measurable-hull`.

**Proposal.** Keep the dependencies: there is no honest way to build Lebesgue
measure on the Carathéodory route without them, and rebuilding the abstract theory
inside MT-4 would duplicate an authored page. Record that this page cannot reach
`status: published` before MT-3 does, and carry that to the owner at step 10.

**What breaks if declined.** The alternative is Hunter's route, which defines the
outer measure directly by closed-cube covers and reproves Carathéodory's theorem
in the special case. That contradicts design decision D2 and duplicates
thirty-five authored items.

### F4 · Two of the design's false statements cannot be refuted on this page

**What is wrong.** MT-4's FS list contains "Every subset of $\mathbb{R}$ is
Lebesgue measurable" and "$\lambda_n$ is inner regular by compact sets on every
subset of $\mathbb{R}^n$". Both refutations require a non-measurable set. The first
is the Vitali argument; the second needs a bounded set whose inner and outer
measures differ, which is again a non-measurable set. MT-5,
`non-measurable-sets-and-the-cost-of-choice`, is the declared owner of that
material and of the exact choice principle it costs, and the design says so in its
own MT-5 section. Refuting either here would either forward-reference MT-5 or
import the axiom of choice into a page that is otherwise a theorem of ZF plus
countable choice.

**Proposal.** Drop both from MT-4 and record them for MT-5, whose FS list already
names the first. The MT-4 companion page keeps the two false statements it can
honestly refute — the Jordan-content equality and the empty-interior claim — plus
the two the design assigns it that are refutable here.

**What breaks if declined.** MT-4 would carry a false statement with no refutation
it can write, or an unnecessary forward reference on the spine.

### F5 · The linear change of variables must state the singular case separately

**What is wrong.** Written as $\lambda_n(T[E]) = |\det T| \, \lambda_n(E)$ for
every linear $T$, the identity is not a well-formed statement in this library when
$\det T = 0$ and $\lambda_n(E) = +\infty$: `def-extended-reals` leaves
$0 \cdot (+\infty)$ undefined, on purpose, and says that "where a case falls in the
undefined list the statement carries an explicit hypothesis saying so".

**Proposal.** State the theorem in two clauses. Invertible $T$: $T[E]$ is
measurable and $\lambda_n(T[E]) = |\det T| \, \lambda_n(E)$, both sides possibly
infinite, the product defined because $|\det T| > 0$. Singular $T$: $T[E]$ is
Lebesgue null for every $E$, because $T[\mathbb{R}^n]$ is a proper subspace. The
boundary worksheet of `thm-linear-change-of-variables-for-lebesgue-measure` records
this on the `zero` axis.

**What breaks if declined.** A Statement containing an undefined expression, which
is a fatal defect under the schema's own arithmetic rules.

### F6 · A published ‡ remark has already decayed

**What is wrong.** `rem-lebesgue-measure-and-integral` is published,
`proved_here: false`, and says in its Remarks: "**This library does not prove any
of it.** ... The whole measure track is deferred", and "What is missing is the
$\sigma$-algebra, the measure defined on it, and the integral." The
$\sigma$-algebra and the measure are published today, on
`sigma-algebras-and-borel-sets` and `measures-and-their-basic-properties`. The
claim was true when written and is not now. This is defect class 5 of the dispatch,
a scope-denial that decayed.

**Proposal.** Report to the owner; do not edit. The item is a `rem-` with empty
`deps`, so nothing depends on the false sentences and the
obvious-published-dependency-repair licence does not reach it: the correction
needs a judgement about what the remark should say once MT-4 and MT-8 land, and it
touches the ‡ tier's own catalogue. It is also not this batch's page.

**What breaks if declined.** A published page keeps a sentence that the library's
own published content contradicts, and the gap widens when MT-4 is published.

### F7 · The premeasure theorem is choice-free, and the proof must be written so

**What is wrong.** The standard proof of countable additivity of the volume
premeasure enlarges each piece $A_k$ to an open superset, which is a countable
sequence of selections and therefore countable choice. MT-3's
`lem-induced-outer-measure-agrees-with-premeasure` carries an explicit Remark
saying no choice principle is used in it, so MT-4 spending one where it need not
would be a visible regression.

**Proposal.** Use the canonical enlargement
$A^{+\delta} := \bigcup_{s \in [0,\delta]^n} (A+s)$, which on a box $(a,b]$ is the
box $(a, b+\delta\mathbf{1}]$, is elementary for every elementary $A$, contains $A$
in its interior, and depends on $A$ and $\delta$ alone. Take
$\delta_k := 2^{-m_k}$ with $m_k$ the *least* natural number making the volume
increase small enough; a least element is a definition, not a choice. The single
inner compact set is one existential instantiation, which ZF allows. Recorded on
the `nonempty-choice` axis of the contract for
`thm-box-volume-is-a-premeasure-on-the-elementary-algebra` and reused verbatim by
`thm-lebesgue-outer-regularity-for-arbitrary-subsets`.

**What breaks if declined.** The premeasure theorem acquires a countable-choice
hypothesis it does not need, and every item citing it inherits it.

### F8 · The A page is at fifty-five items; the split I would make if it grows

**What is wrong.** Nothing yet: `validate-plan` passes and the ceiling is sixty.
But the margin is five items, and a step-3 instruction to add material would cross
it.

**Proposal.** Approve the page as one unit. If Alpha adds material, split at the
boundary between the construction-and-dictionary half and the
invariance-and-geometry half, which is where the page's own dependency graph is
thinnest:

- `lebesgue-measure-on-euclidean-space` keeps `def-half-open-box` through
  `cor-cantor-set-is-an-uncountable-lebesgue-null-set` (forty items), with companion
  `lebesgue-measure-on-euclidean-space-examples`;
- a new `invariance-and-the-linear-change-of-variables-for-lebesgue-measure` takes
  `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant` through
  `cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn` (fifteen items), with
  a new companion `invariance-and-the-linear-change-of-variables-for-lebesgue-measure-examples`.

Only one dep edge crosses backwards from the second block to the first
(`thm-lebesgue-measure-under-dilations-and-reflections` and everything after it
cite the construction block), so the split needs no re-proof. It does mint two page
ids, shift the order of MT-5 onwards, and require MT-5's `requires` to name the new
companion. That is why the recommendation is to keep one page unless the item list
must grow.

### F9 · Two harvested results are disposed `out-of-scope` for a route reason

Hunter's Lemma 2.29 and Proposition 2.30 are steps of his direct geometric proof
that an orthogonal transformation preserves outer measure. This page reaches the
same theorem as a corollary of the determinant formula, which comes from the
uniqueness theorem, so the two approximation facts support no statement that is
left unbuilt. They are recorded `out-of-scope` with that reason rather than
`inline`, because no proof here absorbs them. Alpha should confirm the call; the
alternative is to build Hunter's route as a second proof of orthogonal invariance,
which the owner's second-proof licence would allow but which the design does not
ask for.

### F10 · MT-3 material is disposed `deferred`, not `already-published`

`coverage-checklist` rejects `already-published` for an item that is not
`status: published` on disk. Every Carathéodory heading harvested from Hunter and
Carlen therefore carries `disposition: deferred` with destination
`outer-measure-and-the-caratheodory-extension-theorem`, which is the honest
statement of where it lives, together with a reason naming the authored item. If
MT-3 is published before step 6 these rows should be re-dispositioned.

---

## 4. Per-page item list

### A page · `lebesgue-measure-on-euclidean-space` · fifty-five items, in reading order

| # | id | kind | landmark |
|---|---|---|---|
| 1 | `def-half-open-box` | definition | yes |
| 2 | `lem-half-open-boxes-form-an-elementary-family` | lemma | |
| 3 | `def-elementary-set-in-rn` | definition | yes |
| 4 | `prop-elementary-sets-form-an-algebra` | proposition | yes |
| 5 | `lem-elementary-sets-are-finite-disjoint-unions-of-half-open-boxes` | lemma | |
| 6 | `lem-box-volume-is-additive-over-grid-subdivisions` | lemma | |
| 7 | `thm-elementary-volume-is-well-defined` | theorem | yes |
| 8 | `prop-elementary-volume-is-finitely-additive-and-monotone` | proposition | |
| 9 | `lem-elementary-sets-admit-compact-inner-and-open-outer-approximations` | lemma | |
| 10 | `thm-box-volume-is-a-premeasure-on-the-elementary-algebra` | theorem | yes |
| 11 | `def-lebesgue-outer-measure` | definition | yes |
| 12 | `thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume` | theorem | |
| 13 | `def-lebesgue-measure-and-the-lebesgue-sigma-algebra` | definition | yes |
| 14 | `thm-lebesgue-measure-is-a-complete-measure` | theorem | yes |
| 15 | `def-dyadic-cube-in-rn` | definition | |
| 16 | `lem-dyadic-cubes-of-one-generation-partition-rn` | lemma | |
| 17 | `lem-two-dyadic-cubes-are-nested-or-disjoint` | lemma | |
| 18 | `thm-open-subsets-of-rn-are-countable-disjoint-unions-of-dyadic-cubes` | theorem | yes |
| 19 | `lem-half-open-boxes-generate-the-borel-sigma-algebra-on-rn` | lemma | |
| 20 | `thm-borel-sets-are-lebesgue-measurable` | theorem | yes |
| 21 | `thm-lebesgue-measure-of-a-box-of-every-kind` | theorem | yes |
| 22 | `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets` | proposition | |
| 23 | `prop-countable-subsets-of-rn-are-lebesgue-null` | proposition | |
| 24 | `prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null` | proposition | |
| 25 | `thm-lebesgue-outer-regularity-for-arbitrary-subsets` | theorem | yes |
| 26 | `cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls` | corollary | |
| 27 | `lem-lebesgue-measurable-sets-have-small-open-excess` | lemma | |
| 28 | `lem-small-open-excess-implies-lebesgue-measurable` | lemma | |
| 29 | `thm-littlewood-characterisations-of-lebesgue-measurability` | theorem | yes |
| 30 | `thm-lebesgue-inner-regularity-by-closed-and-compact-sets` | theorem | yes |
| 31 | `cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure` | corollary | yes |
| 32 | `rem-two-senses-of-regularity-for-lebesgue-measure` | remark | |
| 33 | `lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure` | lemma | yes |
| 34 | `thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line` | theorem | yes |
| 35 | `thm-lebesgue-null-agrees-with-elementary-nullity-in-rn` | theorem | yes |
| 36 | `cor-elementary-almost-everywhere-is-lebesgue-almost-everywhere` | corollary | |
| 37 | `cor-riemann-integrability-and-lebesgue-null-discontinuity-sets` | corollary | yes |
| 38 | `rem-nullity-and-nowhere-density-remain-independent-for-lebesgue-measure` | remark | |
| 39 | `thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content` | theorem | yes |
| 40 | `cor-cantor-set-is-an-uncountable-lebesgue-null-set` | corollary | |
| 41 | `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant` | theorem | yes |
| 42 | `thm-lebesgue-measure-under-dilations-and-reflections` | theorem | |
| 43 | `lem-dyadic-cube-values-are-forced-by-translation-invariance-and-normalisation` | lemma | |
| 44 | `thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure` | theorem | yes |
| 45 | `thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant` | theorem | |
| 46 | `lem-coordinate-scalings-and-permutations-scale-the-unit-cube-by-the-absolute-determinant` | lemma | |
| 47 | `lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one` | lemma | |
| 48 | `lem-lipschitz-images-of-lebesgue-null-sets-are-lebesgue-null` | lemma | |
| 49 | `thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null` | theorem | |
| 50 | `thm-linear-change-of-variables-for-lebesgue-measure` | theorem | yes |
| 51 | `cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps` | corollary | yes |
| 52 | `rem-linear-change-of-variables-for-jordan-content-and-lebesgue-measure` | remark | |
| 53 | `lem-a-set-of-positive-finite-measure-fills-most-of-a-dyadic-cube` | lemma | |
| 54 | `thm-steinhaus-difference-set-contains-a-ball` | theorem | yes |
| 55 | `cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn` | corollary | |

### B page · `lebesgue-measure-on-euclidean-space-examples` · thirteen items, in reading order

| # | id | kind |
|---|---|---|
| 1 | `ex-lebesgue-measure-of-intervals-boxes-and-the-rationals` | example |
| 2 | `ex-cantor-set-measure-from-the-removed-intervals` | example |
| 3 | `ex-smith-volterra-cantor-set-has-lebesgue-measure-one-half` | example |
| 4 | `ex-a-dense-open-subset-of-the-unit-interval-of-small-measure` | example |
| 5 | `ex-a-dense-null-g-delta-set-containing-the-rationals` | example |
| 6 | `ex-the-graph-of-a-continuous-real-function-is-lebesgue-null-in-the-plane` | example |
| 7 | `ex-lebesgue-measure-of-a-linear-image-of-the-unit-cube` | example |
| 8 | `ex-proper-measurable-subgroups-of-the-line-are-lebesgue-null` | example |
| 9 | `cex-lebesgue-null-sets-need-not-have-zero-jordan-outer-content` | counterexample |
| 10 | `fs-lebesgue-outer-measure-equals-jordan-outer-content-for-bounded-sets` | false-statement |
| 11 | `fs-a-lebesgue-measurable-set-with-empty-interior-is-lebesgue-null` | false-statement |
| 12 | `fs-a-translation-invariant-borel-measure-on-the-line-is-a-multiple-of-lebesgue-measure` | false-statement |
| 13 | `fs-every-lebesgue-measurable-set-is-a-borel-set` | false-statement |

---

## 5. Richness report for the pair

Both passes were performed.

### Long proofs decomposed

- **Volume is a premeasure** (the design's landmark and its hardest step) is split
  into five earlier items: `lem-half-open-boxes-form-an-elementary-family`,
  `lem-elementary-sets-are-finite-disjoint-unions-of-half-open-boxes`,
  `lem-box-volume-is-additive-over-grid-subdivisions`,
  `thm-elementary-volume-is-well-defined` and
  `lem-elementary-sets-admit-compact-inner-and-open-outer-approximations`. The last
  is where the canonical enlargement of F7 lives, and it is cited again by the outer
  regularity theorem, so the decomposition buys reuse and not only length.
- **The Littlewood characterisations** are split into
  `lem-lebesgue-measurable-sets-have-small-open-excess` and
  `lem-small-open-excess-implies-lebesgue-measurable`, so the shell decomposition
  needed for a set of infinite measure sits in one lemma and the $G_\delta$
  construction in the other.
- **The dyadic machinery** — `def-dyadic-cube-in-rn`,
  `lem-dyadic-cubes-of-one-generation-partition-rn`,
  `lem-two-dyadic-cubes-are-nested-or-disjoint`,
  `thm-open-subsets-of-rn-are-countable-disjoint-unions-of-dyadic-cubes` — is built
  once and used four times: to generate the Borel sets, in the uniqueness theorem,
  in the density lemma behind Steinhaus, and in the cube-cover clause of the
  agreement lemma.
- **The linear change of variables** is split into
  `thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant` (the
  uniqueness argument), `lem-coordinate-scalings-and-permutations-scale-the-unit-cube-by-the-absolute-determinant`
  and `lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one` (the two
  computations), plus `thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null`
  for the singular case. The shear lemma is the only genuinely geometric step and
  it is isolated so it can be refuted on its own.
- **Steinhaus** is split into `lem-a-set-of-positive-finite-measure-fills-most-of-a-dyadic-cube`
  and the theorem, so the density estimate is separable from the overlap count.
- **The dictionary with the published elementary theory** rests on one lemma,
  `lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure`, cited by
  both agreement theorems and by the Jordan comparison, rather than repeating the
  endpoint conversion three times.

### Corollaries added

`cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls`,
`cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure`,
`cor-elementary-almost-everywhere-is-lebesgue-almost-everywhere`,
`cor-riemann-integrability-and-lebesgue-null-discontinuity-sets`,
`cor-cantor-set-is-an-uncountable-lebesgue-null-set`,
`cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps` and
`cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn`. Each has a short
honest proof from a named earlier item and each is a statement a reader would
otherwise have to assemble.

### Second proofs

None minted. The published
`thm-linear-images-scale-jordan-content-by-absolute-determinant` proves the
determinant formula for Jordan content by elementary matrices and a Cavalieri
argument; this page's `thm-linear-change-of-variables-for-lebesgue-measure` is a
statement about a different set function, not a second proof of the same theorem,
and `rem-linear-change-of-variables-for-jordan-content-and-lebesgue-measure`
records how the two agree where both apply. That remark is the seam item the
dispatch's §7 asks for.

### Seams checked

Three pages that should connect to this one now do:
`the-riemann-integral-in-rn-and-jordan-content` (through the nullity dictionary and
the Jordan comparison), `cantor-set-baire-and-measure-zero` (through the agreement
theorem on the line, the Cantor corollary and the nowhere-density remark) and
`fubini-and-change-of-variables` (through the Jordan/Lebesgue determinant remark).
Without those items the two developments of "size in $\mathbb{R}^n$" would share no
dep edge in either direction.

---

## 6. Component provenance for every planned mathematical item

Values are `provenance.statement` / `provenance.proof`.

**`literature-derived` statement, `ai-altered` proof** — the statement is the
source's, the local proof is adapted to this library's dependencies and choice
ledger. This is the default and covers: `def-half-open-box` (Carlen §1, Folland
h-intervals; proof `not-applicable`), `def-elementary-set-in-rn` (Carlen §1;
`not-applicable`), `def-lebesgue-outer-measure` (Carlen Def. 1.2; `not-applicable`),
`def-lebesgue-measure-and-the-lebesgue-sigma-algebra` (Hunter Def. 2.10;
`not-applicable`), `def-dyadic-cube-in-rn` (Tao Ex. 1.1.14; `not-applicable`),
`prop-elementary-sets-form-an-algebra`, `lem-elementary-sets-are-finite-disjoint-unions-of-half-open-boxes`
(Tao Lem. 1.1.2(i), Ex. 1.1.2), `lem-box-volume-is-additive-over-grid-subdivisions`
(Hunter Lem. 2.5), `thm-elementary-volume-is-well-defined` (Tao Lem. 1.1.2(ii)),
`prop-elementary-volume-is-finitely-additive-and-monotone` (Hunter Prop. 2.6),
`thm-box-volume-is-a-premeasure-on-the-elementary-algebra` (Carlen Thm. 1.1),
`thm-lebesgue-measure-is-a-complete-measure` (Hunter Thm. 2.9, Prop. 2.12),
`thm-open-subsets-of-rn-are-countable-disjoint-unions-of-dyadic-cubes` (Tao Lem.
1.2.11, Hunter Prop. 2.20), `lem-half-open-boxes-generate-the-borel-sigma-algebra-on-rn`
(Carlen Prop. 1.4), `thm-borel-sets-are-lebesgue-measurable` (Hunter Prop. 2.21),
`thm-lebesgue-measure-of-a-box-of-every-kind` (Hunter Prop. 2.7),
`thm-lebesgue-outer-regularity-for-arbitrary-subsets` (Tao Lem. 1.2.12),
`thm-littlewood-characterisations-of-lebesgue-measurability` (Tao Ex. 1.2.7, 1.2.19;
Hunter Thms. 2.24, 2.25, 2.27), `thm-lebesgue-inner-regularity-by-closed-and-compact-sets`
(Tao Ex. 1.2.15, Carlen Thm. 1.5), `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`
(Hunter Prop. 2.16, Carlen Thm. 2.3),
`thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure`
(Tao Ex. 1.2.23), `thm-linear-change-of-variables-for-lebesgue-measure` (Hunter
Thm. 2.33, Tao Ex. 1.2.21, Carlen Thm. 3.1),
`cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps` (Hunter Thm. 2.31,
Carlen Thm. 3.2), `thm-lebesgue-measure-under-dilations-and-reflections` (Carlen
Thm. 3.4), and `thm-steinhaus-difference-set-contains-a-ball` (Tao Ex. 1.6.8,
printed p. 140, which states the theorem under its own name; corroborated by
Ye–Yu–Zhao Thm. 1.1, which states it for $\mathbb R^n$ with the conclusion written
as a ball about the origin, the form this item's title uses).

**`ai-altered` statement, `ai-altered` proof** — the statement is the source's
result adapted, most often by naming this library's own published objects or by
adding the choice hypothesis MT-3 tracks:
`lem-half-open-boxes-form-an-elementary-family` (Folland's elementary family,
restated for extended parameters per F1),
`lem-elementary-sets-admit-compact-inner-and-open-outer-approximations` (the
canonical enlargement of F7 is this page's formulation),
`thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume` (Hunter Thm.
2.4 plus the choice ledger), `lem-dyadic-cubes-of-one-generation-partition-rn` and
`lem-two-dyadic-cubes-are-nested-or-disjoint` (Tao's dyadic mesh, stated as two
lemmas), `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`,
`prop-countable-subsets-of-rn-are-lebesgue-null` (Hunter Ex. 2.3),
`prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null` (Hunter Ex.
2.15), `cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls` (Tao Ex.
1.2.14), `lem-lebesgue-measurable-sets-have-small-open-excess` and
`lem-small-open-excess-implies-lebesgue-measurable` (the two halves of Hunter Thm.
2.24), `cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure`
(Hunter Thm. 2.28, obtained here from MT-3),
`lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure` (Hunter's
remark that the elementary family may be varied, made into a lemma),
`thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line`,
`thm-lebesgue-null-agrees-with-elementary-nullity-in-rn`,
`cor-elementary-almost-everywhere-is-lebesgue-almost-everywhere`,
`cor-riemann-integrability-and-lebesgue-null-discontinuity-sets`,
`thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content` (Tao Ex.
1.2.8 strengthened to the equality of values),
`cor-cantor-set-is-an-uncountable-lebesgue-null-set` (Hunter Ex. 2.14, Tao Ex.
1.2.9), `lem-dyadic-cube-values-are-forced-by-translation-invariance-and-normalisation`
and `thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant` (the two
halves of Tao Ex. 1.2.23 and Carlen Thm. 3.1),
`lem-coordinate-scalings-and-permutations-scale-the-unit-cube-by-the-absolute-determinant`
(Hunter Prop. 2.32), `lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one`
(the cut-and-translate argument, stated for the unit cube),
`lem-lipschitz-images-of-lebesgue-null-sets-are-lebesgue-null` and
`thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null` (published
Lipschitz theorem, transported),
`lem-a-set-of-positive-finite-measure-fills-most-of-a-dyadic-cube` (Tao Ex. 1.6.25,
printed p. 153, which states it for a cube; `ai-altered` because this page states it
for a **dyadic** cube and in the $\theta$ form, the specialisation Tao's own part (ii)
route produces, and because the finiteness hypothesis is made explicit here), and
`cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn` (Ye–Yu–Zhao Cor. 1.2,
"if $A$ is a measurable proper subgroup of $(\mathbb R,+)$, then $A$ is null";
`ai-altered` because this page states the positive form over $\mathbb{R}^n$ rather than
the null form over $\mathbb{R}$, and `ex-proper-measurable-subgroups-of-the-line-are-lebesgue-null`
carries the source's own contrapositive on the line).

The three `rem-` items — `rem-two-senses-of-regularity-for-lebesgue-measure`,
`rem-nullity-and-nowhere-density-remain-independent-for-lebesgue-measure` and
`rem-linear-change-of-variables-for-jordan-content-and-lebesgue-measure` — are
`ai-altered` / `not-applicable`. Each justifies a hypothesis or records an
agreement between two named items; none surveys what the library contains
elsewhere.

### The B page, and the truth-risk obligations

`ex-lebesgue-measure-of-intervals-boxes-and-the-rationals`,
`ex-cantor-set-measure-from-the-removed-intervals`,
`ex-proper-measurable-subgroups-of-the-line-are-lebesgue-null`,
`cex-lebesgue-null-sets-need-not-have-zero-jordan-outer-content`,
`fs-lebesgue-outer-measure-equals-jordan-outer-content-for-bounded-sets`,
`fs-a-lebesgue-measurable-set-with-empty-interior-is-lebesgue-null`,
`fs-a-translation-invariant-borel-measure-on-the-line-is-a-multiple-of-lebesgue-measure`
and `fs-every-lebesgue-measurable-set-is-a-borel-set` are `ai-altered` /
`ai-altered`: each construction is the standard one and each false statement is one
the sources warn against explicitly (Hunter Remark 2.19 and Tao Remarks 1.2.7,
1.2.8 and 1.2.19).

Four items are `ai-generated` in their construction and carry
`generation.role`, matching the design's own list. None is a `deps` target
anywhere in this batch, which `content-policy` confirms:

| id | `generation.role` | truth-risk obligation discharged at step 5 |
|---|---|---|
| `ex-smith-volterra-cantor-set-has-lebesgue-measure-one-half` | `example` | The value follows from the published recursion for the stage lengths; before authoring, recompute $2^n\lambda_n$ independently for the first several stages and confirm the closed form $\tfrac12 + 2^{-n-1}$, and confirm that the sequence decreases to $\tfrac12$ rather than to $0$. |
| `ex-a-dense-open-subset-of-the-unit-interval-of-small-measure` | `example` | Check the total length with the index starting at $0$: the first interval must have length $\varepsilon/2$, not $\varepsilon$, or the bound fails by a factor of two. |
| `ex-a-dense-null-g-delta-set-containing-the-rationals` | `example` | Confirm the construction covers the integer points, which the open-unit-interval construction omits, before claiming the intersection is dense in the whole line. |
| `ex-lebesgue-measure-of-a-linear-image-of-the-unit-cube` | `example` | Verify the two determinants by row reduction rather than by quoting them, and check that the singular example's image really is a segment and not a parallelogram. |

`ex-the-graph-of-a-continuous-real-function-is-lebesgue-null-in-the-plane` is
`ai-altered` / `ai-altered`: the statement is standard and appears in Tao Ex. 1.1.7
in its Jordan form, and the proof here is the uniform-continuity covering argument.

### Legacy-unclassified and AI-generated dependency check

Every item this batch proposes as a `deps` target was opened from disk. None is
legacy-unclassified and none has `provenance.statement: ai-generated`; every one is
`literature-derived` or `ai-altered`. A scan over the whole citation set in the
proof contract confirms this mechanically. No `established-from-knowledge` or
`source-checked` route was therefore needed for any dependency.

### External fallback

None. No item on this pair is `proved_here: false`, and none needs to be.

---

## 7. Applyable amendments to `research/plan-measure-theory-track.md`

These are for the lead Alpha to apply; this batch does not write prose scaffolds.

**A1 — §MT-4 DEFS, line 1935.**

- old: `**DEFS.** A **half-open box** $\prod_{i<n}[a_i,b_i)$ and its **volume**;`
- new: `**DEFS.** A **half-open box** $B(a,b)=\{x\in\mathbb{R}^n : a_i<x_i\le b_i\ (i<n)\}$ with parameters in $\overline{\mathbb{R}}$, and its **volume** (a case split: $0$ on the empty box, $+\infty$ when a parameter is infinite, the real product otherwise);`

Reason: F1 and F2 together.

**A2 — §MT-4 DEFS, line 1936.**

- old: `the algebra $\mathcal{E}_n$ of finite disjoint unions of half-open boxes;`
- new: `the algebra $\mathcal{E}_n$ of finite unions of half-open boxes, which is an algebra rather than a ring only because the parameters may be infinite, so that $\mathbb{R}^n\in\mathcal{E}_n$;`

Reason: F1. This makes decision D2 correct as written.

**A3 — §MT-4 FS.**

- old: `**FS.** Every subset of $\mathbb{R}$ is Lebesgue measurable. A Lebesgue measurable`
- new: `**FS.** A Lebesgue measurable`

and

- old: `$\lambda_n$ is inner regular by compact sets on every subset of $\mathbb{R}^n$
(false without measurability). A translation-invariant Borel measure on`
- new: `A translation-invariant Borel measure on`

Reason: F4. Both refutations require a non-measurable set, which MT-5 owns.

**A4 — §MT-4 Traps, after trap (vi).**

- old (two source lines, wrapped exactly as shown):

  ```
  (vi) Do not state the $C^1$ change of variables here — §8 seam 4 puts it on MT-11
  if at all.
  ```

- new:

  ```
  (vi) Do not state the $C^1$ change of variables here — §8 seam 4 puts it on MT-11
  if at all. (vii) The linear change of variables must state the singular case
  separately: with $\det T = 0$ and $\lambda_n(E) = \infty$, the expression
  $|\det T|\lambda_n(E)$ is the product `def-extended-reals` leaves undefined, so
  the singular clause asserts instead that $T[E]$ is Lebesgue null.
  ```

Reason: F5.

**A5 — §MT-5 FS**, for the MT-5 author rather than for MT-4.

- old: `**FS.** Every subset of $\mathbb{R}$ is Lebesgue measurable. A non-measurable set`
- new: `**FS.** Every subset of $\mathbb{R}$ is Lebesgue measurable. $\lambda_n$ is inner regular by compact sets on every subset of $\mathbb{R}^n$. A non-measurable set`

Reason: F4, the second half.

---

## 8. Notes that reach the step-5 author without a scaffold anchor

- **The construction is a theorem of ZF up to a named point.**
  `thm-box-volume-is-a-premeasure-on-the-elementary-algebra`,
  `lem-half-open-boxes-form-an-elementary-family`,
  `lem-elementary-sets-are-finite-disjoint-unions-of-half-open-boxes`,
  `lem-box-volume-is-additive-over-grid-subdivisions`,
  `thm-elementary-volume-is-well-defined` and
  `prop-elementary-volume-is-finitely-additive-and-monotone` use no choice
  principle. Countable choice enters at
  `thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume`, through
  MT-3's corollary, and every later item inherits it. Say so in the Statement of
  each item that carries the hypothesis, as MT-3 does, and do not attach it to the
  six that do not. **Every item downstream of that point carries it, including
  `thm-lebesgue-inner-regularity-by-closed-and-compact-sets`**, whose title omitted
  the qualifier until the step-3 fix pass (finding B7-4): it uses
  `thm-littlewood-characterisations-of-lebesgue-measurability`, which is stated
  "Assuming countable choice", so the conclusion inherits the hypothesis and the
  Statement must say so.
- **The proof of `lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one`
  depends on the unit cube being half-open.** With $[0,1]^n$ the pieces overlap on
  their faces and the assembled map is not a bijection. The argument is: for
  $x\in(0,1]^n$ let $k$ be the integer with $x_i+tx_j\in(k,k+1]$; only finitely many
  $k$ occur; $x\mapsto T(x)-ke_i$ is a bijection of $(0,1]^n$ onto itself.
- **`thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant` needs
  $T[(0,1]^n]$ to have finite positive measure** before the uniqueness theorem can
  be applied to the normalised push-forward. Finiteness is boundedness; positivity
  is nonempty interior. Write both.
- **The agreement theorems quote the published definitions exactly.**
  `def-measure-zero-and-content-zero` uses **closed** intervals, a sequence indexed
  from $0$, and the condition "converges with sum $\le\varepsilon$";
  `def-null-and-content-zero-in-rn` uses **closed cubes** and a volume series with
  sum at most $\varepsilon$. Quote those clauses; a paraphrase into open intervals
  is the citation-fidelity defect the design's trap (iii) names.
- **No applied canonical embedding.** Write $2^{-kn}$, $2^{kn}$, $n$ and $k$ as
  numbers; the batch plans no occurrence of the applied embedding around a natural
  number, and `content-policy`'s `notation-iota-applied` gates it.
- **`lim` notation.** The only limits on the page are of monotone sequences of
  measures, taken through `thm-continuity-from-below-for-measures` and
  `thm-continuity-from-above-for-measures`, which state suprema and infima. Where a
  limit is written after well-definedness, use `\lim`.
- **Counts.** The A page summary must not count items, name a position in the
  reading order that is not derived from the spec, or say what other pages contain.
  Paragraph 1 names the declared dependencies used: outer measures and the
  Carathéodory extension, measures and their continuity properties, the Borel
  sigma-algebra, Heine–Borel in $\mathbb{R}^n$, the published covering notions of
  nullity, Jordan content, and the determinant and elementary-matrix material.
  Paragraph 2 names the construction, the regularity and Littlewood results, the
  uniqueness theorem, the change of variables and Steinhaus, and their order.

---

## 9. Cross-batch and cross-page dependencies

- **From other batches of `frontier-18`: none.** Batch 7 is the only measure-theory
  batch in this run and no other batch's page sits below order 288.007 in a way this
  page uses. Checked against every `research/frontier-18-batch-*.pages.json`.
- **To other batches of `frontier-18`: none.** No other batch's design section
  names Lebesgue measure.
- **To later pages of the measure-theory track**, recorded here because they are
  not in this run and the notes are where they survive:
  - **MT-5** inherits the two false statements of F4, and should know that
    `fs-every-lebesgue-measurable-set-is-a-borel-set` on this page's companion
    already refutes the Borel-equals-Lebesgue claim by the cardinality count. MT-5's
    design announces two proofs that $\mathcal{L}\supsetneq\mathcal{B}$, one of them
    by cardinality; the explicit Cantor-function route is the one that is new after
    this page, and the cardinality route should cite rather than repeat.
  - **MT-6** gets the $(a,b]$ convention it needs, per F2.
  - **MT-11** owns the graph of a measurable function and the product formula, both
    deferred from here with that destination.
  - **MT-17** owns the Lebesgue density theorem; this page proves Steinhaus from the
    weaker dyadic estimate instead, which is recorded as its own lemma so the
    density theorem can subsume it later without a rewrite.

---

## 10. Gates run, and what was not run

Run from the repo root in this dispatch:

| gate | result |
|---|---|
| `validate-plan.mjs` against the spec with this batch spliced into a scratch copy | pass, no errors; the only warnings are the pre-existing `redundant-prereq` cluster on `categories-functors-and-natural-transformations`, which this batch does not touch |
| `depsource.mjs --page lebesgue-measure-on-euclidean-space` on the same scratch copy | `0 unresolved`, `0 planned-later`; 148 published, 15 `draft-page`, all into MT-3 (F3) |
| `depsource.mjs --page lebesgue-measure-on-euclidean-space-examples` | `0 unresolved`, `0 planned-later`; 50 published, 31 planned-earlier |
| `content-policy.mjs --manifest-only` | pass, 0 errors, 0 warnings |
| `coverage-checklist.mjs --require-destination` | pass, 0 errors, 0 warnings, 123 harvested results |
| `source-fetch-check.mjs --stamp` then check mode | 4 of 4 fetch-verified |
| `url-sweep.mjs --recover --fail-on-dead` | 4 of 4 live, 0 recoverable, 0 suspect |
| `merge-proof-contracts.mjs` into a scratch path | merged, 60 scoped items |
| `boundary-audit.mjs --min-cluster 3` | no template reuse, no contradicted dispositions |
| `prosecheck.mjs` on this file | see the line below the table |

Not run, and why: `proof-contract.mjs`, `risk-report.mjs`, `finite-smoke.mjs` and
`citation-fidelity.mjs` all read `items/*.md` and this batch has authored no item
yet; each reports `item-missing` for all sixty scoped ids. They belong to step 5.
`audit-manifest.mjs` fails the same way. The scratch copy of the spec used for
`validate-plan` and `depsource` was written outside the repository, because this
batch's write boundary is four namespaced files and `research/plan-spec.json` is
spliced by `tools/splice-plan.mjs` at step 4; the engine's run is the authoritative
one.

`prosecheck.mjs` on this file exits clean — no errors, and "no positional claim
contradicts the spec" — with warnings in three classes, none of which is a defect
in this artifact. Most are `count-in-prose`: the dispatch requires this report to
state item counts that a reader can recount, and every one of them is recountable
from the tables in §4. One is `count-of-this-page`, on a phrase in §9 referring
back to a list in the same sentence. One is `library-scope-denial`, on the sentence
"This library does not prove any of it", which is a verbatim quotation of the
published remark that F6 reports as decayed. The tool's rules govern page
summaries, pathway briefs and category overviews, and this batch writes none of
those.

---

## 11. Confidence, and what was not verified

**High confidence.** The dependency resolution: every published or draft item named
in `deps` was opened from disk and its Statement or Definition read; the exact
quotes recorded in the proof contract were checked mechanically against the cited
section for all 117 citations whose source is already on disk, and all 117 match.
No cited source has an `ai-generated` statement. The plan-order constraint: every
external dep resolves to a page of strictly smaller order, and `depsource` reports
no `planned-later` dep on either page.

**Medium confidence.** The proof strategies. Each was designed against a source
statement and checked for its boundary cases, but none has been written out. The
three I would look at hardest are `lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one`
(the bijection claim is exactly right only for the half-open cube),
`lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure` (the cube
clause needs the covering box bounded before it is subdivided, and the unbounded
case must be handled separately), and
`thm-box-volume-is-a-premeasure-on-the-elementary-algebra` (the choice-free
enlargement of F7 is the part that is this page's own and not a source's).

**What I did not verify.**

- I did not verify that MT-3's thirty-five draft items are *correct*. I read the
  Statements of the twelve this page cites and used them as written; they carry
  frontier-17's judge and audit record, not mine.
- I did not check the faithfulness of the harvest against the sources a second
  time. The dispositions were written while reading the extracted text of each
  source over the exact locator range, but Alpha's step-6 faithfulness check is a
  separate reading and I have not pre-empted it.
- I did not run the four gates named in §10 as not-run, and I make no claim about
  what they will report at step 5.
- The `finite_smoke` selections are thin. The registry's ten checks are graph,
  group, poset, arithmetic, polynomial and matrix checks, and none is a bounded
  countermodel search for a statement about Lebesgue measure. Two were selected
  because they exercise a real part of an argument here — `matrix-ring-laws-mod-n`
  for the determinant multiplicativity the change of variables rests on, and
  `linear-recurrence-matches-rational-series` for the recurrence behind the
  Smith–Volterra–Cantor computation — and their `asserts` strings are sentences this
  batch commits to authoring verbatim. The other fifty-eight contracts carry an
  empty `finite_smoke`, and I did not invent a check to fill them.
- I did not verify the two-paragraph page summary against the prose rules, because
  it is written at step 5 and does not exist yet.

---

## Continuity checkpoint

- **Substage.** Steps 1 and 2 complete. Next action: report to the step-3 Alpha and
  wait; then return at step 5 as the author of both pages.
- **Owned artifacts on disk.** `research/frontier-18-batch-7.pages.json` (2 pages,
  55 + 13 items), `research/frontier-18-batch-7.coverage.json` (1 page, 4 sources,
  123 harvested results, all stamped), `research/frontier-18-batch-7.proof-contracts.json`
  (version 1, 60 scoped items, 480 boundary rows), and this file.
- **Completed checks.** §10's table.
- **Open constraints carried into step 5.** F1 (extended box parameters), F2 (the
  $(a,b]$ convention), F5 (the singular clause of the change of variables), F7 (the
  canonical enlargement keeps the premeasure theorem in ZF), and the exact-quote
  obligations in the proof contract for the 116 citations whose source is an item
  this batch authors.
- **Blockers.** None. F3 is a publish-time dependency on MT-3, not a scaffold
  blocker.

---

## Step-3 fix pass

Group Alpha `a` reviewed this batch; its report is
`research/frontier-18-alpha-a-step3-scaffold-review.md` and its verdicts are in
`research/frontier-18-alpha-a-step3-verdicts.json`. The verdict for
`lebesgue-measure-on-euclidean-space` was **insufficient**, on B7-1 and B7-2.
Four findings carry the `B7-` prefix; all four are answered below. Nothing in
this pass touched `plan-spec.json`, another batch, `items/` or `library/`.

### B7-1 · MAJOR · contract fact labels outside the `F`/`A`/`L` grammar — **applied**

Alpha is right and I confirmed the mechanism before editing:
`tools/facts-block.mjs` parses a Facts entry only on
`FACT_LINE_RE = /^\s*\[([FLA]\d+)\]\s*(.+)$/`, and `tools/proof-contract.mjs:110`
looks the contract's `fact` up in exactly that map. My `T#`/`P#`/`C#`/`E#`/`X#`
labels were a per-kind scheme with no authored form that could satisfy them, and
`C#` additionally collides with the diagram-cell tag of SCHEMA §5.1.

All **233** citations across the 60 contract entries are relabelled, and the
**315** label references in `derivations[].inputs` follow the rename. The rule
applied, chosen because batch 5 uses it and it is the one distinction the label
can usefully carry for the step-5 author:

- **`F#`** — the cited item is published on disk, outside this batch (**117**).
- **`L#`** — the cited item is built inside this batch, on either page of the
  pair (**116**).

Numbering restarts at 1 per family per entry, in the order the citations already
sat in. 156 labels changed and 77 were already correct. Verified after the edit:
every `fact` matches `^[FAL]\d+$`, no label repeats inside an entry, and every
one of the 315 label inputs resolves to a citation declared in its own entry.
`uses` arrays name step ids and were untouched, as Alpha said. No mathematics
changed and no item was touched.

### B7-2 · MAJOR · a landmark backed only by Wikipedia — **applied**

Alpha's finding is correct: `thm-steinhaus-difference-set-contains-a-ball` is a
landmark in the dependency backbone and the Wikipedia article was the only source
with an `included` row for it. Fixed by harvesting real treatments, not by
weakening the item.

**Tao, GSM 126, §§1.6.1–1.6.2** — Alpha's first suggestion, and it holds. I read
the range and enumerated its headings; the source's own index confirms the two
locations ("Steinhaus theorem, 140, 153").

- **Exercise 1.6.8 (Steinhaus theorem), printed p. 140:** "Let $E\subseteq\mathbb R^d$
  be a Lebesgue measurable set of positive measure. Show that the set
  $E-E:=\{x-y:x,y\in E\}$ contains an open neighbourhood of the origin." Tao's hint
  is the convolution route, not this page's; that is fine, and Alpha said so —
  what was missing was a treatment that **states** the theorem.
- **Exercise 1.6.25, printed p. 153:** "there exists a cube $Q\subseteq\mathbb R^d$
  of positive side length such that $m(E\cap Q)>(1-\varepsilon)m(Q)$", with part (ii)
  asking for the proof that avoids the differentiation theorem — hint: "reduce to
  the case when $E$ is bounded, then approximate $E$ by an almost disjoint union of
  cubes" — and part (iii) using it to reprove Steinhaus. That is this page's route
  in the source's own words, and it backs
  `lem-a-set-of-positive-finite-measure-fills-most-of-a-dyadic-cube`.

The locator now reads §§1.6.1–1.6.2 complete, printed pp. 137–155 (PDF pp.
153–171), Theorem 1.6.11 through Exercise 1.6.27, and **37 harvest rows** were
added for that range: 2 `included` (the two above), 2 `already-published`
(Exercise 1.6.10 → `thm-open-subsets-of-r-structure`; Exercise 1.6.23, Cousin's
theorem → `thm-cousins-lemma-for-gauges`) and 33 `deferred`, each to a plan-spec
page that resolves — `the-maximal-function-and-lebesgue-differentiation`,
`differentiation-of-monotone-functions-and-the-vitali-covering-theorem`,
`density-separability-and-convolution-in-lp`,
`the-lebesgue-integral-and-the-convergence-theorems` and
`pontryagin-duality-for-locally-compact-abelian-groups` — with a reason written
about that specific result. The recurring honest reason is that §1.6 is
differentiation theory: it is stated for absolutely integrable functions, and this
page stops before any integral exists.

**Ye–Yu–Zhao, `arXiv:2505.00556`, §1** — added for
`cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn`, because **no textbook
or lecture-note treatment I could reach states that corollary**. Its Theorem 1.1 is
Steinhaus in exactly this page's form, "suppose $A\subseteq\mathbb R^n$ is Lebesgue
measurable and has positive measure; then the difference set $A-A$ … contains a
ball with positive radius whose center is at the origin", and its Corollary 1.2 is
"if $A$ is a measurable proper subgroup of $(\mathbb R,+)$, then $A$ is null" — the
contrapositive this page's own strategy note already said "is the form the sources
state". Recorded as `kind: paper`, a secondary kind: it is **not** counted as
primary backing, and the pair's three primary treatments are unchanged.

What I checked and did not find, so that Alpha need not repeat it: Stein &
Shakarchi and Bogachev are not fetchable, so I did not record a locator in either;
Hunter, Carlen, Fremlin's *Measure Theory* ch. 44, Bruckner–Bruckner–Thomson, the
Princeton MAT425 notes, Heil's Georgia Tech notes, Jury's Florida notes and
McMullen's Harvard notes were each fetched and searched, and **none of them
contains the word "Steinhaus"** except Fremlin, whose treatment is the abstract
Haar-measure form. The LSE survey *Beyond Lebesgue and Baire III* states only the
normed-group generalisation.

Provenance after the fix: `thm-steinhaus-difference-set-contains-a-ball` moves to
**`literature-derived`** on Tao Ex. 1.6.8;
`lem-a-set-of-positive-finite-measure-fills-most-of-a-dyadic-cube` stays
`ai-altered` on Tao Ex. 1.6.25 (this page states it for a **dyadic** cube, in the
$\theta$ form, with the finiteness hypothesis explicit);
`cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn` stays `ai-altered` on
Ye–Yu–Zhao Cor. 1.2 (positive form over $\mathbb R^n$ against the source's null form
over $\mathbb R$). All three keep a fetch-verified `sources.references` URL, and the
Wikipedia row now backs **no item**.

Both new-and-changed sources are stamped:
`source-fetch-check --stamp` reports 5/5 verified, and Tao's hash is byte-identical
to the earlier stamp, so the re-harvest is against the same document I read the
first time. `url-sweep --recover --fail-on-dead` reports 5/5 live.

### B7-3 · minor · eight dispositions describing a draft state — **applied, seven of eight; one pushed back**

Verified from disk before editing: `outer-measure-and-the-caratheodory-extension-theorem`,
`the-riemann-integral-in-rn-and-jordan-content` and `compactness-in-metric-spaces`
are `status: published`, as are `def-outer-measure`,
`def-caratheodory-measurable-set`, `def-premeasure-on-an-algebra`,
`def-outer-measure-induced-by-a-premeasure`, `def-metric-outer-measure`,
`thm-caratheodory-outer-measure-theorem` and `thm-caratheodory-extension-theorem`.
Seven rows are re-dispositioned to `already-published` naming the item:

| harvested heading | now names |
|---|---|
| Hunter §2.3 Carathéodory measurability | `def-caratheodory-measurable-set` |
| Hunter Definition 2.8 | `def-caratheodory-measurable-set` |
| Hunter Theorem 2.9 | `thm-caratheodory-outer-measure-theorem` |
| Tao Exercise 1.2.1 | `cex-rational-points-in-unit-square-have-no-jordan-content` |
| Tao Remark 1.2.4 | `def-outer-measure` |
| Tao Lemma 1.2.5 | `def-metric-outer-measure` |
| Carlen Theorem 1.3 | `thm-caratheodory-extension-theorem` |

**Pushed back: Tao Exercise 1.2.4** ("two disjoint closed sets, one compact, are
positively separated, and compactness cannot be dropped"). `already-published`
would be an inaccurate citation, which is the defect class this stage exists to
catch. What is published is *weaker*: `ex-distance-to-a-set-is-attained-on-a-compact-set`
proves positive distance for two disjoint **compact** sets, and
`cex-set-distance-is-not-a-metric` supplies two disjoint **closed** subsets of
$\mathbb R$ at distance $0$; the compact-plus-closed statement between them is
carried by neither, and `compactness-in-metric-spaces` has no item stating it. I
did not build it either: this page separates compact from closed sets through
Heine–Borel and $\sigma$-compactness directly, so nothing here needs it, and adding
a metric-topology item to a Lebesgue-measure page is the silent-seam defect. The
row is now `deferred` to `owner-decision`, which is the destination the rule names
for a result with a real statement whose natural home page is already published.

### B7-4 · minor · missing choice scope — **applied**

`thm-lebesgue-inner-regularity-by-closed-and-compact-sets` now reads "Assuming
countable choice, the Lebesgue measure of a measurable set is the supremum of the
measures of its compact subsets", carries `def-countable-choice` in `deps` as its
two neighbours do, and its `strategy` opens by saying the hypothesis is inherited
from `thm-littlewood-characterisations-of-lebesgue-measurability` and is stated
rather than dropped. §8's choice bullet now names the item explicitly so the
step-5 author cannot lose it again.

### Alpha's adjudications of my own findings, acknowledged

F1, F2, F4, F5, F7 and F8 approved as written; F6 approved as reported and carried
to the owner at step 10, the licence confirmed not to reach it. F3 is closed — MT-3
is published on disk today — and F10 is what B7-3 acts on. On **F9** Alpha
considered building Hunter's oblique-rectangle route to orthogonal invariance as a
second proof under the owner's 2026-08-20 licence and declined it as an
approximation argument rather than a different idea; I accept that, and note the
page is unchanged at **fifty-five A items**, since B7-2 added sources rather than
items.

### Gates re-run after this pass

```
node tools/coverage-checklist.mjs research/frontier-18-batch-7.coverage.json
node tools/source-fetch-check.mjs --coverage research/frontier-18-batch-7.coverage.json --stamp
node tools/url-sweep.mjs --coverage research/frontier-18-batch-7.coverage.json --recover --fail-on-dead
node tools/content-policy.mjs --manifest-only research/frontier-18-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
```

---

## Continuity checkpoint (step 5, authoring in progress)

- **Substage.** Step 5, authoring. Items 1–44 of the A page are written to
  `items/` and each passes `tools/precheck.mts`. Remaining: A-page items 45–55
  and all thirteen B-page items, then the two page files under
  `library/measure-theory/`, then the contract/coverage/gate pass and the report.
- **Conventions fixed while authoring, binding on the rest.** $B(a,b)$ with
  parameters in $\overline{\mathbb R}$; $(u,v]^n := B(\mathbf u,\mathbf v)$;
  $\mathbf u$ is the constant parameter with value $u$; $\mu_0$ elementary
  volume; $\lambda_n^*$, $\lambda_n$, $\mathcal L(\mathbb R^n)$; a fact label is
  `F#` for a published source outside the batch and `L#` for one built inside it.
- **Devices used repeatedly.** (i) a finite sum in $[0,+\infty]$ is $+\infty$
  exactly when a term is and is otherwise the real finite sum, which reduces the
  extended-value sum laws to `lem-finite-sum-laws`; (ii) the product estimate
  $\prod q_i-\prod p_i\le V^{\,r}\sum(q_i-p_i)$, proved inline by induction where
  needed; (iii) canonical enlargement $A^{+\delta}$ with $\delta=1/(m+1)$ and $m$
  **least**, which is what keeps the premeasure theorem and outer regularity out
  of countable choice at that step; (iv) bounding a nonnegative extended series
  by bounding every partial sum, which avoids any series-rearrangement lemma.
- **Next action.** Author `thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant`
  and the rest of the linear-algebra block.
- **Blockers.** None.

## Step-5 authoring

### Authored scope

- Authored the two page files
  `library/measure-theory/lebesgue-measure-on-euclidean-space.md` and
  `library/measure-theory/lebesgue-measure-on-euclidean-space-examples.md`.
- Authored the thirteen missing B-page items:
  `ex-lebesgue-measure-of-intervals-boxes-and-the-rationals`,
  `ex-cantor-set-measure-from-the-removed-intervals`,
  `ex-smith-volterra-cantor-set-has-lebesgue-measure-one-half`,
  `ex-a-dense-open-subset-of-the-unit-interval-of-small-measure`,
  `ex-a-dense-null-g-delta-set-containing-the-rationals`,
  `ex-the-graph-of-a-continuous-real-function-is-lebesgue-null-in-the-plane`,
  `ex-lebesgue-measure-of-a-linear-image-of-the-unit-cube`,
  `ex-proper-measurable-subgroups-of-the-line-are-lebesgue-null`,
  `cex-lebesgue-null-sets-need-not-have-zero-jordan-outer-content`,
  `fs-lebesgue-outer-measure-equals-jordan-outer-content-for-bounded-sets`,
  `fs-a-lebesgue-measurable-set-with-empty-interior-is-lebesgue-null`,
  `fs-a-translation-invariant-borel-measure-on-the-line-is-a-multiple-of-lebesgue-measure`,
  and `fs-every-lebesgue-measurable-set-is-a-borel-set`.
- Retained all 55 scaffolded A-page items. No id was renamed, dropped, merged or
  withdrawn from the pair.

### Per-item precheck

```text
- def-half-open-box: n/a
- lem-half-open-boxes-form-an-elementary-family: pass
- def-elementary-set-in-rn: n/a
- prop-elementary-sets-form-an-algebra: pass
- lem-elementary-sets-are-finite-disjoint-unions-of-half-open-boxes: pass
- lem-box-volume-is-additive-over-grid-subdivisions: pass
- thm-elementary-volume-is-well-defined: pass
- prop-elementary-volume-is-finitely-additive-and-monotone: pass
- lem-elementary-sets-admit-compact-inner-and-open-outer-approximations: pass
- thm-box-volume-is-a-premeasure-on-the-elementary-algebra: pass
- def-lebesgue-outer-measure: n/a
- thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume: pass
- def-lebesgue-measure-and-the-lebesgue-sigma-algebra: n/a
- thm-lebesgue-measure-is-a-complete-measure: pass
- def-dyadic-cube-in-rn: n/a
- lem-dyadic-cubes-of-one-generation-partition-rn: pass
- lem-two-dyadic-cubes-are-nested-or-disjoint: pass
- thm-open-subsets-of-rn-are-countable-disjoint-unions-of-dyadic-cubes: pass
- lem-half-open-boxes-generate-the-borel-sigma-algebra-on-rn: pass
- thm-borel-sets-are-lebesgue-measurable: pass
- thm-lebesgue-measure-of-a-box-of-every-kind: pass
- prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets: pass
- prop-countable-subsets-of-rn-are-lebesgue-null: pass
- prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null: pass
- thm-lebesgue-outer-regularity-for-arbitrary-subsets: pass
- cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls: pass
- lem-lebesgue-measurable-sets-have-small-open-excess: pass
- lem-small-open-excess-implies-lebesgue-measurable: pass
- thm-littlewood-characterisations-of-lebesgue-measurability: pass
- thm-lebesgue-inner-regularity-by-closed-and-compact-sets: pass
- cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure: pass
- rem-two-senses-of-regularity-for-lebesgue-measure: n/a
- lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure: pass
- thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line: pass
- thm-lebesgue-null-agrees-with-elementary-nullity-in-rn: pass
- cor-elementary-almost-everywhere-is-lebesgue-almost-everywhere: pass
- cor-riemann-integrability-and-lebesgue-null-discontinuity-sets: pass
- rem-nullity-and-nowhere-density-remain-independent-for-lebesgue-measure: n/a
- thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content: pass
- cor-cantor-set-is-an-uncountable-lebesgue-null-set: pass
- thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: pass
- thm-lebesgue-measure-under-dilations-and-reflections: pass
- lem-dyadic-cube-values-are-forced-by-translation-invariance-and-normalisation: pass
- thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure: pass
- thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant: pass
- lem-coordinate-scalings-and-permutations-scale-the-unit-cube-by-the-absolute-determinant: pass
- lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one: pass
- lem-lipschitz-images-of-lebesgue-null-sets-are-lebesgue-null: pass
- thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null: pass
- thm-linear-change-of-variables-for-lebesgue-measure: pass
- cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps: pass
- rem-linear-change-of-variables-for-jordan-content-and-lebesgue-measure: n/a
- lem-a-set-of-positive-finite-measure-fills-most-of-a-dyadic-cube: pass
- thm-steinhaus-difference-set-contains-a-ball: pass
- cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn: pass
- ex-lebesgue-measure-of-intervals-boxes-and-the-rationals: pass
- ex-cantor-set-measure-from-the-removed-intervals: pass
- ex-smith-volterra-cantor-set-has-lebesgue-measure-one-half: pass
- ex-a-dense-open-subset-of-the-unit-interval-of-small-measure: pass
- ex-a-dense-null-g-delta-set-containing-the-rationals: pass
- ex-the-graph-of-a-continuous-real-function-is-lebesgue-null-in-the-plane: pass
- ex-lebesgue-measure-of-a-linear-image-of-the-unit-cube: pass
- ex-proper-measurable-subgroups-of-the-line-are-lebesgue-null: pass
- cex-lebesgue-null-sets-need-not-have-zero-jordan-outer-content: pass
- fs-lebesgue-outer-measure-equals-jordan-outer-content-for-bounded-sets: pass
- fs-a-lebesgue-measurable-set-with-empty-interior-is-lebesgue-null: pass
- fs-a-translation-invariant-borel-measure-on-the-line-is-a-multiple-of-lebesgue-measure: pass
- fs-every-lebesgue-measurable-set-is-a-borel-set: pass
```

### Provenance and route ledger

- The A-page provenance ledger in §6 is now realised on disk as written; no
  A-page component changed provenance class during authoring.
- The authored B-page items realise the B-page part of §6 exactly:

```text
- ex-lebesgue-measure-of-intervals-boxes-and-the-rationals: ai-altered / ai-altered
- ex-cantor-set-measure-from-the-removed-intervals: ai-altered / ai-altered
- ex-smith-volterra-cantor-set-has-lebesgue-measure-one-half: ai-generated / ai-generated / generation example
- ex-a-dense-open-subset-of-the-unit-interval-of-small-measure: ai-generated / ai-generated / generation example
- ex-a-dense-null-g-delta-set-containing-the-rationals: ai-generated / ai-generated / generation example
- ex-the-graph-of-a-continuous-real-function-is-lebesgue-null-in-the-plane: ai-altered / ai-altered
- ex-lebesgue-measure-of-a-linear-image-of-the-unit-cube: ai-generated / ai-generated / generation example
- ex-proper-measurable-subgroups-of-the-line-are-lebesgue-null: ai-altered / ai-altered
- cex-lebesgue-null-sets-need-not-have-zero-jordan-outer-content: ai-altered / ai-altered
- fs-lebesgue-outer-measure-equals-jordan-outer-content-for-bounded-sets: ai-altered / ai-altered
- fs-a-lebesgue-measurable-set-with-empty-interior-is-lebesgue-null: ai-altered / ai-altered
- fs-a-translation-invariant-borel-measure-on-the-line-is-a-multiple-of-lebesgue-measure: ai-altered / ai-altered
- fs-every-lebesgue-measurable-set-is-a-borel-set: ai-altered / ai-altered
```

- Statement/route changes from the step-3 scaffold:
  - `ex-a-dense-null-g-delta-set-containing-the-rationals`: changed from the
    originally scaffolded dependence on the generated open-set example to the
    source-backed $G_\delta$-hull route through
    `cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls`, because
    generated statements may not be `deps` targets.
  - `fs-a-lebesgue-measurable-set-with-empty-interior-is-lebesgue-null`:
    changed from the originally scaffolded dependence on the generated exact-value
    Smith-Volterra example to the published nonnullity theorem plus the line
    agreement theorem, for the same no-generated-dependency reason.
  - `fs-lebesgue-outer-measure-equals-jordan-outer-content-for-bounded-sets`:
    changed from citing the companion counterexample item as a source fact to
    reproving the witness inline from source-backed A-page items, because the
    proof-contract gate permits source quotes only from Statement/Definition/
    Example/Statement-refuted sections.
  - `cor-cantor-set-is-an-uncountable-lebesgue-null-set`,
    `prop-countable-subsets-of-rn-are-lebesgue-null`, and
    `thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content`:
    dropped non-load-bearing survey/companion links from Statement prose so
    `deps` stay honest and the A-page items obey the leaf rule.
- Dependency-list reconciliation from the scaffold baseline:
  - the general reason is uniform unless one of the item-specific route changes
    above says otherwise: every `deps` list below was reconciled to the exact
    prerequisites actually cited in the final on-disk item text, adding any real
    proof-use edge and dropping every unused scaffold edge.
  - ids whose final `deps` differ from the scaffold baseline:

```text
def-half-open-box
prop-elementary-sets-form-an-algebra
lem-elementary-sets-are-finite-disjoint-unions-of-half-open-boxes
lem-box-volume-is-additive-over-grid-subdivisions
thm-elementary-volume-is-well-defined
prop-elementary-volume-is-finitely-additive-and-monotone
lem-elementary-sets-admit-compact-inner-and-open-outer-approximations
thm-box-volume-is-a-premeasure-on-the-elementary-algebra
def-lebesgue-outer-measure
thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume
thm-lebesgue-measure-is-a-complete-measure
def-dyadic-cube-in-rn
lem-dyadic-cubes-of-one-generation-partition-rn
lem-two-dyadic-cubes-are-nested-or-disjoint
thm-open-subsets-of-rn-are-countable-disjoint-unions-of-dyadic-cubes
lem-half-open-boxes-generate-the-borel-sigma-algebra-on-rn
thm-borel-sets-are-lebesgue-measurable
thm-lebesgue-measure-of-a-box-of-every-kind
prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
prop-countable-subsets-of-rn-are-lebesgue-null
prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null
thm-lebesgue-outer-regularity-for-arbitrary-subsets
cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls
lem-lebesgue-measurable-sets-have-small-open-excess
lem-small-open-excess-implies-lebesgue-measurable
thm-littlewood-characterisations-of-lebesgue-measurability
thm-lebesgue-inner-regularity-by-closed-and-compact-sets
cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure
lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure
thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line
thm-lebesgue-null-agrees-with-elementary-nullity-in-rn
cor-elementary-almost-everywhere-is-lebesgue-almost-everywhere
cor-riemann-integrability-and-lebesgue-null-discontinuity-sets
rem-nullity-and-nowhere-density-remain-independent-for-lebesgue-measure
thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content
cor-cantor-set-is-an-uncountable-lebesgue-null-set
thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
thm-lebesgue-measure-under-dilations-and-reflections
lem-dyadic-cube-values-are-forced-by-translation-invariance-and-normalisation
thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure
thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant
lem-coordinate-scalings-and-permutations-scale-the-unit-cube-by-the-absolute-determinant
lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one
lem-lipschitz-images-of-lebesgue-null-sets-are-lebesgue-null
thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null
thm-linear-change-of-variables-for-lebesgue-measure
cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps
rem-linear-change-of-variables-for-jordan-content-and-lebesgue-measure
lem-a-set-of-positive-finite-measure-fills-most-of-a-dyadic-cube
thm-steinhaus-difference-set-contains-a-ball
cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn
ex-lebesgue-measure-of-intervals-boxes-and-the-rationals
ex-cantor-set-measure-from-the-removed-intervals
ex-smith-volterra-cantor-set-has-lebesgue-measure-one-half
ex-a-dense-open-subset-of-the-unit-interval-of-small-measure
ex-a-dense-null-g-delta-set-containing-the-rationals
ex-the-graph-of-a-continuous-real-function-is-lebesgue-null-in-the-plane
ex-lebesgue-measure-of-a-linear-image-of-the-unit-cube
ex-proper-measurable-subgroups-of-the-line-are-lebesgue-null
cex-lebesgue-null-sets-need-not-have-zero-jordan-outer-content
fs-lebesgue-outer-measure-equals-jordan-outer-content-for-bounded-sets
fs-a-lebesgue-measurable-set-with-empty-interior-is-lebesgue-null
fs-a-translation-invariant-borel-measure-on-the-line-is-a-multiple-of-lebesgue-measure
fs-every-lebesgue-measurable-set-is-a-borel-set
```

### Escalations

- No new blocker inside the batch.
- Carried forward from the scaffold notes and still not resolved inside batch 7:
  `rem-lebesgue-measure-and-integral` contains decayed published scope-denial
  prose; this remains an owner-level report item, not an obvious-dependency
  repair.
- Carried forward from Alpha step 3 and still not resolved here:
  Tao Exercise 1.2.4 ("two disjoint closed sets, one compact, are positively
  separated") remains `deferred -> owner-decision`; no current batch item needs
  it and building it on this page would be a silent seam.

### Final gate record

- `node tools/tsx-run.mjs tools/reflow.mts items/<all 68 ids>`: unchanged on all
  inputs.
- `node tools/tsx-run.mjs tools/precheck.mts items/<all 68 ids>`: **pass**,
  60/60 proof-bearing items clean; 8 definitions/remarks remain `n/a`.
- `node tools/proof-contract.mjs research/frontier-18-batch-7.proof-contracts.json --strict`:
  **pass**, 60/60 checked, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/frontier-18-batch-7.coverage.json`:
  **pass**, 166 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-18-batch-7.coverage.json`:
  **pass**, 5/5 fetch-verified.
- `node tools/content-policy.mjs research/frontier-18-batch-7.pages.json`:
  **pass**, 68 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: **pass**.
- `node tools/prosecheck.mjs <A-page, B-page and 13 new B-item files> --warnings`:
  **pass**, 0 errors, 0 warnings.
- `node tools/extcheck.mjs`: **pass** repo-wide.
- `node tools/citecheck.mjs`: no batch-7 warnings surfaced; repo-wide heuristic
  warnings remain on unrelated items outside this pair.
- `node tools/depcheck.mjs` and `node tools/fwdcheck.mjs`: still non-green
  repo-wide because of unrelated existing items outside batch 7. The batch-local
  hits they initially surfaced (`cor-cantor-set-is-an-uncountable-lebesgue-null-set`,
  `prop-countable-subsets-of-rn-are-lebesgue-null`,
  `thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content`) were
  repaired and no longer appear in targeted rechecks.
- A fresh step-5 `url-sweep` rerun was started with an `--out` receipt path but
  not completed in this turn, so **no fresh pass is claimed here**. The
  step-2/source-harvest receipt recorded earlier in this file remains the last
  completed URL-liveness pass for the batch.

### Confidence

High on the authored item/page text, on the generated-example truth-risk checks
listed in §6, and on the batch-local contract/coverage/proof-format state: the
full batch now prechecks and the strict proof contract is synchronized to current
disk text. I did **not** run the step-7 judge, any step-6 independent reading, or
any publication action. I also did **not** obtain a fresh completed step-5
`url-sweep` receipt, and the repo-wide `depcheck`/`fwdcheck` commands remain red
for unrelated items outside this pair, so my confidence statement is batch-local,
not repository-global.
