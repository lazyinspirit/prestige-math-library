# frontier-14 — step 9, the scope-denial sweep

Lead Alpha (Claude Opus 5, `xhigh`, 1M). Step 9 is a sweep; it did not pause the
build.

Findings are numbered **F1–F10** and declines **D1–D66**. Both numberings are
stable and are the routing keys — never renumber them.

## Corpus

Every `deferred` and `out-of-scope` disposition in the seven
`research/frontier-14-batch-<i>.coverage.json` files. The task file says six
batches; there are **seven** (batch 7, `stone-weierstrass-general`, was restored
after the step-4 splice blocker), and batch 7 is included here.

| batch | page | declines |
|---|---|---|
| 1 | `complex-power-series-and-analytic-functions` | 0 |
| 2 | `ascoli-arzela` | 20 |
| 3 | `complete-metrizability-and-baire`, `covering-spaces-and-lifting` | 14 |
| 4 | `triangularisation-and-jordan-canonical-form` | 8 |
| 5 | `quadratic-residues-and-the-legendre-symbol` | 15 |
| 6 | `reflective-subcategories-and-the-adjoint-functor-theorems` | 4 |
| 7 | `stone-weierstrass-general` | 5 |
| | **total** | **66** |

Verdicts: **61 stand**, **3 overturned** (D62, D63, D64), **2 stand on a
corrected reason** (D18 disposition mislabel, D31 destination claim false).

Two items were built as a result: `cor-vanishing-moments-force-a-continuous-function-to-vanish`
and `cor-differentiable-approximants-with-a-vanishing-derivative-at-a-point`.
Both pass both judge lanes and are stamped. One overturn (D62) is recorded as an
owner decision rather than built; §"Owner decisions" says why.

---

## F1 — D63 overturned. The integral it says is unavailable is in this page's closure

**Erdman, Proposition 21.2.9:** if $\int_0^1 x^n f(x)\,dx = 0$ for every natural
$n$ then $f = 0$. Declined `deferred` on batch 7 with the reason:

> stating it needs the Riemann integral and proving it needs the integral's
> linearity plus the fact that a nonzero continuous function has positive
> integral of its square. **That integration development lives on the
> real-analysis integration pages, not on this topology page**, so the result is
> recorded here for a page that has both in scope rather than dropped.

The reason names three obstructions. Disk satisfies all three, inside this
page's own transitive `requires` closure:

| named obstruction | published item | home page | in closure of `stone-weierstrass-general`? |
|---|---|---|---|
| the Riemann integral | `def-darboux-integral`, `thm-continuous-implies-integrable` | `the-riemann-integral` @159 | **yes** |
| the integral's linearity | `thm-linearity-of-the-integral` | `properties-of-the-integral-and-the-working-ftc` @161 | **yes** |
| nonzero continuous ⇒ positive integral of its square | `thm-nonnegative-continuous-with-zero-integral-vanishes` | `properties-of-the-integral-and-the-working-ftc` @161 | **yes** |
| polynomial approximation | `cor-weierstrass-approximation-on-the-unit-interval` | `approximation-and-compactness-in-ck` @171 | **yes** |

`stone-weierstrass-general` is order 287 and its closure has 64 pages;
`the-riemann-integral@159`, `properties-of-the-integral-and-the-working-ftc@161`
and `approximation-and-compactness-in-ck@171` are all in it. The integration
development does live on the real-analysis pages — and those pages are
prerequisites of this one, so every result on them is citable here. The
inference from "developed elsewhere" to "not available here" is the false step.

This is defect class **A5** (`research/frontier-14-PREVENTIONS.md`), the same
shape as the `frontier-13` `lem-integer-part` decline: a true statement about
where a result lives, used as if it were a statement about what this page may
cite.

**Disposition: overturned and built.** See §"What was built".

## F2 — D64 overturned, same false step

**Erdman, Proposition 21.2.10:** the differentiable functions on $(0,1)$ with
vanishing derivative at $1/2$ are dense in $C([0,1])$. Declined `deferred`:

> the statement cannot even be formed without differentiability on an interval
> and the derivative of a polynomial. **Differential calculus is developed on the
> real-analysis pages rather than here**, so this is deferred to a page carrying
> both calculus and this theorem.

`the-derivative-and-mean-value-theorems@153` is in the closure, carrying
`def-derivative`, `lem-derivative-of-a-power`, `thm-algebra-of-derivatives` and
`thm-chain-rule`. Both named obstructions — differentiability on an interval,
the derivative of a polynomial — are published and citable here.

**Disposition: overturned and built.** See §"What was built".

## F3 — D62 overturned on its second clause; recorded as an owner decision

**Erdman, Proposition 21.2.8:** the Banach algebra $C([a,b])$ is separable and
therefore second countable. Declined `out-of-scope`:

> It belongs to the function-space-topology page this page already declares as a
> prerequisite; **nothing in the Stone-Weierstrass development here uses or
> produces it**.

The second clause is false. Separability of $C([a,b])$ is produced directly by
uniform density: the polynomials with rational coefficients are countable and,
by `cor-weierstrass-approximation-on-a-closed-interval` (published, in closure),
dense. That is an approximation-from-an-algebra argument, not the
"countable-dense-set argument" the reason contrasts it with.

The first clause is true but leads nowhere: `function-space-topologies@283` is
**published**, carries no separability item, and published pages are not
retrofitted. The decline therefore has no live destination.

Not built — see §"Owner decisions" for the reason and the recommendation.

## F4 — batches 4–7 emit no `license_page` field at all, and no gate asks for one

32 of the 66 declines carry no `license_page` key; 4 more carry it as `null`.

| batch | declines | with a `license_page` key |
|---|---|---|
| 2 | 20 | 20 (1 explicitly `null`) |
| 3 | 14 | 14 (3 explicitly `null`) |
| 4 | 8 | **0** |
| 5 | 15 | **0** |
| 6 | 4 | **0** |
| 7 | 5 | **0** |

`PREVENTIONS.md` §A4 lists this as **mechanical**: *"every `deferred` /
`out-of-scope` disposition must name a licensing page id. Checked at step 2 with
the coverage gate."* It is not checked. `tools/coverage-checklist.mjs:203`
handles the two decline dispositions and checks only that `reason` clears
`MIN_REASON` characters and that reasons are not templated across rows. The
string `license_page` does not occur in the file.

So A4 is a **brief-level** prevention wearing a mechanical label — exactly the
distinction `PREVENTIONS.md`'s own preamble insists on. Batches 2 and 3 emitted
the field because their Betas read the brief; batches 4–7 did not, and nothing
noticed. This belongs in the same class as the `gates-that-pass-vacuously`
memory: the gate was green and was not checking the thing it was credited with.

**Recommended fix (owner/orchestrator, not applied here):** add a
`coverage-decline-no-license` error to `coverage-checklist.mjs` requiring a
`license_page` that resolves to a `plan-spec.json` page id, with an explicit
`license_page: null` plus `license_note` as the documented escape for the
"the source statement is false" case that D3 and D21 legitimately need.

## F5 — eleven declines name no licensing page id anywhere, in a field or in prose

D3, D21, D22, D31, D60, D61, D62, D63, D64, D65, D66.

They are not one class. Splitting by what is actually true of disk:

**(a) No destination is correct — the source statement is false (D3, D21).**
Both check out and are the best rows in the corpus.

- **D3**, Bradley–Bryson–Terilla's Arzelà theorem as printed: pointwise
  *bounded* equicontinuous maps into an *arbitrary* metric target have a
  uniformly convergent subsequence. False. Take $X$ compact, $Y$ an infinite set
  under the discrete metric (bounded, diameter 1), and $f_n$ the constant map at
  a distinct $y_n$. The family is equicontinuous and pointwise bounded, and
  $d_\infty(f_n,f_m)=1$ for $n\ne m$, so no subsequence is uniformly Cauchy.
  Boundedness has to be strengthened to pointwise relative compactness. Batch 2
  scaffolded the corrected result as
  `cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets` **and** the
  witness as `cex-boundedness-does-not-replace-pointwise-relative-compactness`.
  Refuting a source and building both halves is the disposition working as
  intended.
- **D21**, Kunzinger Proposition 11.3.5, "every sigma-compact metrizable space is
  Polish". False. $\mathbb Q$ is a countable union of singletons, hence
  sigma-compact, and metrizable, but it is meagre in itself and so not
  completely metrizable. The library already carries the second half as
  `fs-the-rational-numbers-form-a-baire-space`. The decline correctly identifies
  the missing local-compactness hypothesis.

**(b) A real result with no destination anywhere in `plan-spec.json` (D22, D60,
D61).** Owner decisions; see that section.

**(c) Batch 7 (D62–D66)** — F1, F2, F3 above, plus D65 and D66 which stand.

## F6 — sixteen declines route to an already-published page, which cannot receive them

D1, D2, D4–D16 (batch 2) and D58 (batch 6) name a destination that is
`status: published` on disk. Published pages are not retrofitted, so these
deferrals can never be discharged where they point.

The rows are **not** equally serious, and the split matters:

- **Already covered there (D4, D5, D6).** The named page genuinely carries the
  content, so these are `already-published` rows filed as `out-of-scope`.
  Verified: D4 → `fs-bounded-implies-totally-bounded` with `forward_refs:
  [cex-bounded-not-totally-bounded]` on `compactness-in-metric-spaces`, a
  discrete witness where Munkres uses a bounded remetrisation of the line, so
  "a different discrete witness" is exactly right. D5 →
  `thm-metric-compactness-equivalences` and
  `thm-complete-and-totally-bounded-implies-compact`. D6 →
  `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous`,
  whose title reads "The ramps on $[0,1]$", confirming the reason's claim that
  Ascoli reuses a published ramp witness rather than Munkres's $x^n$.
- **Partly covered — the published page has the metric case, the declined
  heading is the topological widening (D1, D2, D7, D8, D14, D15, D16).**
  Verified against the published Statements: `def-topology-of-compact-convergence`
  is titled "…on $C(X,Y)$ for metric $X$ and $Y$"; `thm-comparison-of-the-three-function-space-topologies`
  opens "Let $(X,d_X)$ be a **nonempty** metric space", so D14's "nonempty metric
  domain" claim is exact; `thm-the-exponential-law` and
  `thm-exponential-correspondence-is-continuous` are both on
  `function-space-topologies`, so D1/D2 are right that the exponential-law
  development is homed there. What is deferred is only the widening of the
  domain from metric to topological — real, but a smaller loss than the row
  reads as.
- **Not covered anywhere, and no planned page carries it (D9–D13).** Compact
  generation / $k$-spaces. `grep -rli 'compactly generated\|k-space' items/`
  returns nothing, and no `plan-spec.json` page id matches. Five headings
  deferred to a published page for a topic the library has never developed and
  has no plan to. The declines are individually sound — the Ascoli proof gets
  continuity of limits from a direct neighbourhood estimate and never reasons
  through $k$-spaces — but as a set they are the whole $k$-space theory going
  quietly missing. Owner decision.
- **D58** — Riehl Example 4.5.13(iv), restriction of scalars along a ring
  epimorphism. Reason: the extension-of-scalars construction "is licensed by
  `tensor-products-of-modules`, which is outside this page's declared
  prerequisite closure." **Checked and true**, and it is the converse case the
  brief warns about: `tensor-products-of-modules` is published, at order 106,
  well before this page's 365.003 — but it is *not* in the 78-page closure of
  `reflective-subcategories-and-the-adjoint-functor-theorems`, which reaches
  `modules-and-module-homomorphisms@102` and `free-modules-and-exact-sequences@104`
  and stops. Published and earlier is not the same as in closure. The decline
  stands; the destination is nonetheless a published page.

## F7 — D18 is mislabelled; the result is published and in closure

D18 declines Shapiro's "Step I, a compact metric space has a countable dense
subset" as `out-of-scope`. `lem-compact-metric-space-has-a-countable-dense-subset`
is **published**, homed on `compactness-in-metric-spaces@120`, and **in the
closure** of `ascoli-arzela@285`. The correct disposition is
`already-published` with that item id.

Nothing is lost mathematically — the proof genuinely does not use it — but an
`out-of-scope` row hides a published result the harvest is supposed to surface.
Disposition correction only; no build.

## F8 — D31's "no planned page licenses this" is false, and its own batch contradicts it

D31 declines May's "sphere covers real projective space and computes its
fundamental group" with:

> No planned page currently licenses the projective-space fundamental-group
> computation.

Eleven sibling rows in the same batch (D23–D30, D32–D34) route covering-space
classification to `classification-of-covering-spaces@299`, which is precisely
where $S^n \to \mathbb{RP}^n$ and $\pi_1(\mathbb{RP}^n)=\mathbb Z/2$ belong; and
`applications-of-the-fundamental-group@301` is also planned. The claim is false.

The decline nonetheless **stands as a decline**: building it on
`covering-spaces-and-lifting@293` needs $\pi_1(S^n)=1$ for $n\ge2$, which needs
Seifert–van Kampen at order 297. It cannot be built here without a
reading-order change.

**Disposition: stands on a corrected reason**, destination
`classification-of-covering-spaces`. No build.

## F9 — three results with a real statement and no destination in the plan

Owner decisions; see that section. D22, D60, D61.

## F10 — D48 asserts a destination's "declared topic" that the plan does not state

D48 defers Hackman's "criteria for quadratic residues modulo odd prime powers
and powers of two" to `quadratic-reciprocity-and-the-jacobi-symbol`, "whose
declared topic includes square roots modulo composite $n$." That page's
`plan-spec.json` entry is `{order: 57.005, title: "Quadratic Reciprocity and the
Jacobi Symbol", items: []}` — the title names reciprocity and the Jacobi symbol
and nothing about composite moduli, and the page is unscaffolded so there is no
item list to check against.

Low severity: the Jacobi-symbol page is the conventional home for prime-power
and 2-adic residue criteria, and the destination is real and later in the order
(57.005 > 57.003). Recorded because the row states as fact something the plan
does not say. The same caveat applies to D49 (`…-examples@57.006`).

---

## Verdict table — all 66

`published` / `planned` / `draft` marks what the named destination is on disk
right now. "—" means no page id anywhere.

### Batch 2 — `ascoli-arzela` (20, all `out-of-scope`)

| D | heading | destination | verdict |
|---|---|---|---|
| D1 | Thm 5.5, compact-open is splitting | `function-space-topologies` *published* | stands (F6) |
| D2 | Thm 5.6, exponential correspondence for loc. cpt. Hausdorff | `function-space-topologies` *published* | stands (F6) |
| D3 | Arzelà's theorem for an arbitrary metric target | — | **stands; source statement refuted** (F5a) |
| D4 | §45 Ex 1, bounded ≠ totally bounded | `compactness-in-metric-spaces` *published* | stands; is `already-published` (F6) |
| D5 | §45 Ex 2, completeness vs total boundedness | `compactness-in-metric-spaces` *published* | stands; is `already-published` (F6) |
| D6 | §46 Ex 1, $x^n$ → discontinuous limit | `function-space-topologies-examples` *published* | stands; is `already-published` (F6) |
| D7 | §46 Def, topology of compact convergence | `function-space-topologies` *published* | stands (F6) |
| D8 | Thm 46.2, compact convergence = uniform on compacts | `function-space-topologies` *published* | stands (F6) |
| D9 | §46 Def, compactly generated space | `function-space-topologies` *published* | stands; **$k$-spaces absent from the plan** (F6) |
| D10 | Lem 46.3, loc. cpt. or first countable ⇒ compactly generated | `function-space-topologies` *published* | stands; ditto |
| D11 | Lem 46.4, continuity detected on compact subspaces | `function-space-topologies` *published* | stands; ditto |
| D12 | Thm 46.5, $C(X,Y)$ closed for compact convergence | `function-space-topologies` *published* | stands; ditto |
| D13 | Cor 46.6, compact convergence preserves continuity | `function-space-topologies` *published* | stands; ditto |
| D14 | Thm 46.7, uniform ⊃ compact ⊃ pointwise | `function-space-topologies` *published* | stands; "nonempty metric domain" verified exact (F6) |
| D15 | Thm 46.8, compact-open = compact convergence, metric target | `function-space-topologies` *published* | stands (F6) |
| D16 | Cor 46.9, metric-independence of compact convergence | `function-space-topologies` *published* | stands (F6) |
| D17 | Shapiro §2, alternative proof of Arzelà–Ascoli | `ascoli-arzela` *draft, self* | stands |
| D18 | Step I, compact metric ⇒ countable dense subset | `ascoli-arzela` *draft, self* | **stands on a corrected disposition** (F7) |
| D19 | Step II, diagonal extraction | `ascoli-arzela` *draft, self* | stands |
| D20 | Step III, dense-set to uniform Cauchy upgrade | `ascoli-arzela` *draft, self* | stands |

### Batch 3 — `complete-metrizability-and-baire`, `covering-spaces-and-lifting` (14)

| D | heading | destination | verdict |
|---|---|---|---|
| D21 | Prop 11.3.5, sigma-compact metrizable ⇒ Polish | — | **stands; source statement refuted** (F5a) |
| D22 | Věta 75, arbitrary products of Čech-complete are Baire | — | stands; **owner decision** (F9) |
| D23 | Ex 1.35, graph coverings $X_{mn}$ | `classification-of-covering-spaces` *planned @299* | stands |
| D24 | Prop 1.36, every subgroup realised by a connected covering | `classification-of-covering-spaces` *planned* | stands |
| D25 | Prop 1.37, pointed/unpointed isomorphism criteria | `classification-of-covering-spaces` *planned* | stands |
| D26 | Thm 1.38, classification by subgroups | `classification-of-covering-spaces` *planned* | stands |
| D27 | Prop 1.39, deck group as a normalizer quotient | `classification-of-covering-spaces` *planned* | stands |
| D28 | Prop 1.40(c), quotient formula for covering-space actions | `classification-of-covering-spaces` *planned* | stands |
| D29 | May §2 Thm, conjugacy of fibre-basepoint subgroups | `classification-of-covering-spaces` *planned* | stands |
| D30 | May §2 Def, regular covers | `classification-of-covering-spaces` *planned* | stands |
| D31 | May §2 Ex, $S^n \to \mathbb{RP}^n$ and $\pi_1$ | — | **stands on a corrected reason** (F8) |
| D32 | Ex 1.30, connected circle coverings and $\pi_1(S^1)$ | `classification-of-covering-spaces` + `the-fundamental-group-of-the-circle` *planned* | stands |
| D33 | Thm 1.33, pointed covers classified by image subgroups | `classification-of-covering-spaces` *planned* | stands |
| D34 | Thm 1.34, subgroup realisation | `classification-of-covering-spaces` *planned* | stands |

The eight `classification-of-covering-spaces` rows are the cleanest deferral
block in the corpus: one destination, planned at order 299, six orders after the
declining page, and the page really does own the Galois correspondence. Batch 3's
scaffold builds the universal-cover special case of each general result it
defers (`thm-deck-group-of-a-universal-cover-is-the-fundamental-group` against
D27's general normalizer quotient, `thm-sheets-equal-fundamental-group-index`
against D26), which is the "split, don't drop" behaviour the rule asks for.

### Batch 4 — `triangularisation-and-jordan-canonical-form` (8, all `deferred`)

| D | heading | destination | verdict |
|---|---|---|---|
| D35 | Axler 5.47, every complex operator is upper-triangularisable | `the-fundamental-theorem-of-algebra` *planned @139* | **stands — verified precisely** |
| D36 | HK §7.2 def, $T$-admissible subspace | `modules-over-a-pid-and-canonical-forms` *planned @110* | stands |
| D37 | HK Thm 3, Cyclic Decomposition Theorem | `modules-over-a-pid-and-canonical-forms` *planned* | stands |
| D38 | HK Thm 3 Step 1, maximal-degree conductors | `modules-over-a-pid-and-canonical-forms` *planned* | stands |
| D39 | HK Thm 3 Step 2, conductor divisibility reduction | `modules-over-a-pid-and-canonical-forms` *planned* | stands |
| D40 | HK Thm 3 Step 3, independent cyclic direct sum | `modules-over-a-pid-and-canonical-forms` *planned* | stands |
| D41 | HK Thm 3 Step 4, uniqueness of the annihilator sequence | `modules-over-a-pid-and-canonical-forms` *planned* | stands |
| D42 | HK Cor, $T$-admissible subspaces have invariant complements | `modules-over-a-pid-and-canonical-forms` *planned* | stands |

**D35 is the row this sweep exists to check, and it is correct.** Its claim:
`thm-fundamental-theorem-of-algebra-minimum-modulus-proof` "is homed on
`the-complex-exponential-and-eulers-formula` at order 189, above and outside this
page's declared closure, so it is not citable here."

Checked: the item is `status: published`; its home page in `plan-spec.json` is
`the-complex-exponential-and-eulers-formula`, order **189**;
`triangularisation-and-jordan-canonical-form` is order **90** and its closure is
39 pages, which does **not** contain order 189. Every clause is true. This is
the converse the brief describes — published, but published *outside the
closure*, which does not license a citation.

Cross-check that the page did not lose the mathematics: `def-algebraically-closed-field`
and `cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue`
**are** in closure (both homed on `eigenvalues-eigenvectors-and-the-characteristic-polynomial`),
which is exactly why the page keeps the conditional algebraically-closed-field
form and defers only the unconditional complex one. Nothing was dropped.

### Batch 5 — `quadratic-residues-and-the-legendre-symbol` (15)

| D | heading | destination | verdict |
|---|---|---|---|
| D43 | D.I.3, Legendre symbols mod 13 | `…-legendre-symbol-examples` *draft, self* | stands |
| D44 | D.I.8, primitive-root computation mod 13 | `primitive-roots-and-unit-groups-modulo-n-examples` *published* | stands |
| D45 | D.I.10, Freshman's Dream for complex integers | `number-fields-rings-of-integers-and-discriminants` *planned @111.041* | stands |
| D46 | D.I.12, quadratic reciprocity | `quadratic-reciprocity-and-the-jacobi-symbol` *planned @57.005* | stands |
| D47 | D.I.13, examples applying reciprocity | `…-jacobi-symbol-examples` *planned @57.006* | stands |
| D48 | D.I.14, criteria mod odd prime powers and powers of 2 | `quadratic-reciprocity-and-the-jacobi-symbol` *planned* | stands; see F10 |
| D49 | D.I.15, quadratic congruence for a composite modulus | `…-jacobi-symbol-examples` *planned* | stands; see F10 |
| D50 | §D.I Exercises 1–24 | `…-legendre-symbol-examples` *draft* + `…-jacobi-symbol-examples` *planned* | stands |
| D51 | §D.IV Exercises | same | stands |
| D52 | SAGE Ex 4.1.3, computing Legendre symbols | `…-legendre-symbol-examples` *draft, self* | stands |
| D53 | Thm 4.1.7(a), quadratic reciprocity | `quadratic-reciprocity-and-the-jacobi-symbol` *planned* | stands |
| D54 | Ex 4.1.8, applying reciprocity | `…-jacobi-symbol-examples` *planned* | stands |
| D55 | SAGE Ex 4.1.9, computer verification of reciprocity | `…-jacobi-symbol-examples` *planned* | stands |
| D56 | Rem 4.1.10, Jacobi-symbol extension | `quadratic-reciprocity-and-the-jacobi-symbol` *planned* | stands |
| D57 | SAGE Ex 4.3.2, exploration after Gauss's lemma | `…-legendre-symbol-examples` *draft, self* | stands |

Self-license claims checked against the batch-5 scaffold and all true: D43/D52's
"the modulo-11 table" is `ex-quadratic-residues-and-nonresidues-modulo-eleven`;
D57's "the retained hand computation for $(3/11)$" is
`ex-gauss-lemma-for-three-modulo-eleven`; D44's "the exponent method already
developed on `primitive-roots-and-unit-groups-modulo-n-examples`" is
`ex-index-table-modulo-seventeen` and
`ex-primitive-root-modulo-thirteen-by-prime-divisor-tests`, both published.
D45's "the ordinary integer clause is already published" is
`thm-frobenius-endomorphism-and-finite-field-automorphism` ("Frobenius $x\mapsto
x^p$ is an injective endomorphism in characteristic $p$"), published — the ring
form of the Freshman's Dream, so only the Gaussian-integer clause is deferred.

This batch is where the dispatch's topical cut ("stop after the two
supplements") does the most work, and every row respects it: the page ends at
`thm-second-supplement-to-quadratic-reciprocity` and reciprocity itself is the
next page's headline. No row defers anything the cut does not require.

### Batch 6 — `reflective-subcategories-and-the-adjoint-functor-theorems` (4)

| D | heading | destination | verdict |
|---|---|---|---|
| D58 | Ex 4.5.13(iv), restriction of scalars along a ring epimorphism | `tensor-products-of-modules` *published* | **stands — closure claim verified** (F6) |
| D59 | Ex 4.5.13(v), sheafification | `presheaves-sheaves-stalks-and-sheafification` *planned @366.057* | stands |
| D60 | Ex 4.5.13(vi), the nerve and the Segal condition | — | stands; **owner decision** (F9) |
| D61 | Cor 4.5.15, `Cat` is complete and cocomplete | — | stands; **owner decision** (F9) |

D60/D61's claim — "no planned page in `plan-spec.json` explicitly licenses this
simplicial-set categorical construction" — checked and **true**: `nerve` matches
zero page ids or titles; `simplicial` matches four pages, all of which are
simplicial *complexes* and simplicial homology (366.001/002) or simplicial trees
and group actions (302.009/010). Simplicial *sets* are not in the plan.

### Batch 7 — `stone-weierstrass-general` (5)

| D | heading | destination | verdict |
|---|---|---|---|
| D62 | Prop 21.2.8, $C([a,b])$ is separable and second countable | — | **overturned; owner decision** (F3) |
| D63 | Prop 21.2.9, vanishing moments force $f=0$ | — | **OVERTURNED — BUILT** (F1) |
| D64 | Prop 21.2.10, differentiable functions with $f'(1/2)=0$ are dense | — | **OVERTURNED — BUILT** (F2) |
| D65 | Ex 21.2.11, condition for approximation by polynomials in $x^2$ | — | stands |
| D66 | Ex 21.2.12, limit of $\int_0^1 x^nf/\int_0^1 x^n$ | — | stands on a corrected reason |

**D65 stands.** Two independent grounds, and the second is the load-bearing one:
Erdman poses it as an open-ended exercise with no stated result to import, and
its subject is uniform approximation on a possibly **noncompact** closed subset
of $[0,\infty)$, whereas every theorem on this page assumes a compact Hausdorff
domain. The second ground is a hypothesis mismatch, not an availability claim,
so it is untouched by F1's finding.

**D66 stands on a corrected reason.** Its second clause — "uses none of this
page's machinery" — is true: the limit is $f(1)$ by concentration of $x^n$ near
the endpoint, an $\varepsilon$/split-the-interval argument that never invokes
uniform approximation. But its first clause, "it belongs with the integration
pages", repeats F1's false step, and names no page id. The result is not lost by
the same argument that loses D63: it genuinely is not a consequence of this
page. Destination should be named explicitly; recorded, not built.

---

## What was built

Two items, both on `stone-weierstrass-general-examples` (batch 7's B page), which
already carries interval-specific consequences of density
(`ex-polynomial-algebra-is-dense-but-not-closed-on-an-interval`). No new page, no
reading-order change, no id renamed or removed. Precedent for a `cor-` item in a
B page's `examples:` list is `cor-nowhere-differentiable-functions-are-residual-in-c01`
on `complete-metrizability-and-baire-examples`.

### 1. `cor-vanishing-moments-force-a-continuous-function-to-vanish` (F1 / D63)

> Let $f:[0,1]\to\mathbb R$ be continuous and suppose $\int_0^1 x^nf(x)\,dx=0$
> for every $n\in\mathbb N$. Then $f(x)=0$ for every $x\in[0,1]$.

Erdman Proposition 21.2.9. `provenance.statement: literature-derived`,
`provenance.proof: ai-generated`.

Every dependency is published and in closure: continuity of products and of
polynomials (`thm-algebra-of-continuous-functions`), integrability
(`thm-continuous-implies-integrable`), linearity and monotonicity
(`thm-linearity-of-the-integral`, `thm-monotonicity-of-the-integral`), products
(`cor-integrability-of-absolute-values-products-and-lattice-operations`),
uniform density (`cor-weierstrass-approximation-on-the-unit-interval`), and the
finish (`thm-nonnegative-continuous-with-zero-integral-vanishes`) — the exact
fact D63's reason named as unavailable.

### 2. `cor-differentiable-approximants-with-a-vanishing-derivative-at-a-point` (F2 / D64)

> Let $c\in(0,1)$, $f\in C([0,1],\mathbb R)$, $\varepsilon>0$. There is a
> $g:\mathbb R\to\mathbb R$, differentiable at every real point, with $g'(c)=0$
> and $\sup_{x\in[0,1]}|f(x)-g(x)|<\varepsilon$.

Erdman Proposition 21.2.10. `provenance.statement: ai-altered` — the source
fixes $c=1/2$ and asks only for differentiability on $(0,1)$; the item states an
arbitrary $c$ and delivers an approximant differentiable on all of $\mathbb R$,
which is what the construction gives. The alteration is recorded in the
Statement itself. `provenance.proof: ai-generated`.

Construction: Weierstrass gives a polynomial $p$ within $\varepsilon/3$; if
$a:=p'(c)\ne0$, subtract $(a/\lambda)\sin(\lambda(x-c))$, which has derivative
$a$ at $c$ and sup norm at most $|a|/\lambda$, with $\lambda$ from
`cor-archimedean-reciprocal`.

**The $\varepsilon/3$ split is load-bearing.** A strict pointwise bound gives
only a non-strict bound on the supremum, so halves would have ended at
$\sup\le\varepsilon$ and the statement as written would have been false. Thirds
end at $\le2\varepsilon/3<\varepsilon$.

### Gates run on both

| gate | result |
|---|---|
| `precheck` | PASS both, canonical stratification adopted |
| `depcheck` | clean (two definitional deps added after a `cited-not-in-deps` flag) |
| `citecheck`, `content-policy`, `rendercheck`, `fwdcheck`, `extcheck` | clean |
| `proof-contract --strict --require-reviewed` | 0 errors; contracts written into `research/frontier-14-batch-7.proof-contracts.json` and merged |
| `boundary-audit` | no template reuse, no contradicted disposition |
| `citation-fidelity` | no widening candidates |
| `risk-report` | both routed CRITICAL; both carry an Alpha `risk_review` |
| `gate-liveness` | `finite-smoke` 1 check, `proof-contract` 291 items, `precheck` 3940 items — no gate passed vacuously |
| paired judges | **both lanes pass both items** |
| `apply-judge-stamps` | both stamped `deepseek-v4-pro + gpt-5.6-terra`, verdict pass |

### The judges caught two real defects in my first drafts

Reported as outcomes, not rates. Both were mine, both are `dependency_citation`,
both are adjudicated `confirmed_fatal` in
`research/frontier-14-judge-adjudications.jsonl`, and both are repaired.

1. **`cor-differentiable-approximants…`, step 5.1 — gpt-5.6-terra.** My `[L2]`
   shortened `lem-derivative-of-a-power` to bare differentiability of a
   polynomial function, but step 5.1 used the derivative **value** $v'=\lambda$.
   The value is in the source, in clause 4; I had shortened it away while
   avoiding the applied canonical-natural notation the house rule bans. This is
   defect class **A1 running in reverse** — a restatement that says *less* than
   the source, with a step leaning on the difference. Repaired by restating
   clause 4 with its formula written $\sum_{1\le j<n} j\,a_j\,c^{\,j-1}$.
2. **`cor-vanishing-moments…`, step 3.1 — gpt-5.6-terra.** The step asserted
   $(f-p)f$ integrable "as a product of the integrable $f-p$ and $f$" while
   never establishing that $f-p$ is integrable. True and two lines away, but not
   licensed by what was cited. Repaired by deriving it in the step: $p$ is
   continuous by `[L2]`, integrable by `[L3]`, so $f-p$ is integrable by `[L4]`.

DeepSeek passed both drafts including both defects. On this evidence the
cross-family screen was not the one that bit; the same-family lane was. Worth
weighing at step 10 against the standing note that Terra shares a family with
audit Alpha.

Both items were rejudged by **both** lanes after repair and both lanes pass the
final text.

## Owner decisions

Five results have a real statement and nowhere in the library or the plan to put
them. None can be built without a new page or a reading-order change, so under
the step-9 rule they are recorded rather than built.

1. **D62 — $C([a,b])$ is separable and second countable** (Erdman 21.2.8).
   Overturned as a *reason* (F3): separability follows from uniform density of
   the polynomials with rational coefficients, and
   `cor-weierstrass-approximation-on-a-closed-interval` is published and in
   closure. Not built, because it is a statement about the topology of the
   function space rather than an approximation theorem, and this page's spaces
   are general compact Hausdorff, where $C(X)$ need not be separable at all. Its
   natural home, `approximation-and-compactness-in-ck@171`, is **published**.
   Recommendation: land the general form — *for compact metric $X$, $C(X,\mathbb R)$
   is separable* — on a future page, since that version is a genuine consequence
   of this page's lattice theorem and covers Erdman's interval case.
2. **D22 — arbitrary products of Čech-complete spaces are Baire** (Oxtoby). The
   batch built `thm-countable-products-of-cech-complete-spaces`; the arbitrary
   product is a different and harder theorem needing a pseudo-completeness or
   Banach–Mazur game development. No planned page carries it.
3. **D60, D61 — the nerve, `Cat` as a reflective subcategory of simplicial sets,
   and completeness/cocompleteness of `Cat` by that reflection** (Riehl
   4.5.13(vi), 4.5.15). Verified: `nerve` matches no page id or title in
   `plan-spec.json`, and every `simplicial` match is simplicial complexes,
   simplicial homology, or simplicial trees. Simplicial **sets** are not in the
   plan at all. This is a plan gap, not a scaffold gap.
4. **D9–D13 — compact generation and $k$-spaces** (Munkres §46). Five headings
   deferred to `function-space-topologies`, which is published. No item in
   `items/` mentions compact generation or $k$-spaces and no `plan-spec.json`
   page id matches. The individual declines are sound; the set is a whole
   standard topic with no destination.

## What I could not check

- **Harvest faithfulness against the sources.** Step 9 checks claims against
  *disk*. Whether a decline's description of a source heading matches what the
  source actually says is the step-6 check (`AUDIT-WORKFLOW`/`LEVELS` §6), and
  I did not re-fetch any PDF here. D65 in particular rests on "Erdman poses this
  as an open-ended exercise asking the reader to supply the condition" — I did
  not open Erdman to confirm the exercise is open-ended. Its second ground, the
  compact-domain hypothesis mismatch, is checkable from the scaffold and holds.
- **`ex-frobenius` as the Freshman's Dream.** D45 says "the ordinary integer
  clause is already published". I matched it to
  `thm-frobenius-endomorphism-and-finite-field-automorphism`, which is the ring
  form in characteristic $p$. If Hackman's D.I.10 states something narrower
  about $\mathbb Z$ specifically, the match is close but not literal.

## A receipt condition this sweep surfaced, which I did not cause and did not fix

`apply-judge-stamps --ledger research/frontier-14-judge.jsonl --manifests
research/frontier-14-batch-<i>.pages.json` reports, per batch:

| batch | scope | stamped | skipped |
|---|---|---|---|
| 1 | 73 | 27 | 46 (`lane-rejected` 13, `no-current-verdict` 33) |
| 2 | 24 | 13 | 11 (`lane-rejected` 11) |
| 3 | 86 | 0 | 86 (`no-current-verdict` 86) |
| 4 | 53 | 18 | 35 (`lane-rejected` 13, `no-current-verdict` 22) |
| 5 | 25 | 15 | 10 (`lane-rejected` 10) |
| 6 | 53 | 1 | 52 (`no-current-verdict` 52) |
| 7 | 26 | 2 | 24 (`no-current-verdict` 24) |

**This is pre-existing.** I verified it by reverting my edit to
`library/topology/stone-weierstrass-general-examples.md` to `HEAD` and re-running
batch 7: still `skipped 24 {"no-current-verdict": 24}`. Before this sweep, **zero
items in `items/` carried a paired judge stamp**; the only two that carry one now
are the two built here.

`level-coverage.mjs --verify-current-context` requires a current verdict from both
lanes for every scoped item, so this blocks step 10 as it stands. It is a
step-7/step-10 receipt matter and outside step 9's remit — flagged for the
orchestrator, not fixed here.
