# Run `frontier-12` — Alpha step-6 whole-level audit

**Alpha:** Claude Opus 5, `claude` runner, `xhigh`, 1,000,000-token window
(`claude-opus-5[1m]`), `--permission-mode bypassPermissions`.
**Date:** 2026-08-13. **Scope:** all 454 items across 24 pages, 7 batches.

**Status: COMPLETE.** All sixteen agents returned; every finding adjudicated from
disk; all twelve gates green; both receipts written.

---

## 1. Agents dispatched

**Seven independent readers** (GPT 5.6 Sol, workspace-write, read-only on
content), rotation *i* audits batch *i*+1, reader 7 audits batch 1 — no reader
audits a batch it authored. Reader role caps at 5 concurrent, so readers 6–7
queued behind the first five. Output `research/frontier-12-reader-<i>.findings.md`.

**All seven reported, and all seven state full coverage** — every assigned item
read in full, nothing sampled, nothing uncheckable:

| reader | batch audited | fatal findings |
|---|---|---|
| 1 | 2 — composition series, free modules | none |
| 2 | 3 — eigenvalues, dual spaces | none |
| 3 | 4 — π, line integrals and Green | **8** |
| 4 | 5 — probability foundations and method | **1** |
| 5 | 6 — complex differentiability | **7** |
| 6 | 7 — limits and colimits | none |
| 7 | 1 — localisation, splitting fields | none |

Reader 6 finished after my batch-7 repairs had landed and explicitly re-read
them: *"I re-read the live step-6 repairs to the R-Mod free-module construction,
the pullback-in-Top citation, and the poset coequalizer sentence before making
this call."* That is an independent check on my three most substantial batch-7
repairs, which is exactly the certification the brief asks for when Alpha authors
the fix.

**Nine read-only proof-refuters** (GPT 5.6 Sol, `--sandbox read-only`,
process-level enforcement), assigned by *real mathematical exposure* rather than
by `risk-report` tier:

| refuter | scope | items |
|---|---|---|
| 1 | probabilistic method (221/222) — Local Lemma, Chernoff, Erdős | 34 |
| 2 | line integrals, Green, Poincaré (241/242) | 40 |
| 3 | eigenvalues, Cayley–Hamilton, spectral mapping (86/87) | 30 |
| 4 | batch 1 — localisation, fraction field, splitting fields | 56 |
| 5 | complex differentiability and Cauchy–Riemann (303/304) | 41 |
| 6 | limits and colimits (363/364) | 63 |
| 7 | finite-probability foundations (220.2/220.4) | 48 |
| 8 | dual spaces, bilinear forms, inertia (92/93) | 45 |
| 9 | batch 2 — composition series, free modules, exact sequences | 76 |

Brief: `research/frontier-12-brief-refuter.md`. Refuter 9 was queued for the
first free slot in the cap-8 pool, because batch 2 was the only batch with no
refuter after the initial eight.

---

## 2. Mechanical audits — complete ✅

| check | result |
|---|---|
| `provenance.statement` / `provenance.proof` on all 454 | **0 missing** |
| `literature-derived`/`ai-altered` without a `sources.references` URL | **0** |
| `proved_here: false` items | **0** — no external fallback used this run |
| `ai-generated` **statements** | 8, all on B pages |
| `deps` edges into an `ai-generated` statement | **0** |
| wikilinks to an `ai-generated` statement from another item | **0** |
| A-page summaries: exactly 2 paragraphs, each < 150 words | **12/12 pass** |
| B pages with no authored summary body | **12/12 pass** |
| `content-policy.mjs` on batch manifests | 454 scoped, **0 errors, 0 warnings** |
| `coverage-checklist.mjs` | 12 pages, 888 rows, **0 errors** |
| `included` coverage rows naming a non-authored item | **0** |

`content-policy --manifest-only` errors on all 454 — that is the *pre-authoring*
mode, which by design rejects a manifest whose items already exist. The bare run
is the step-6 gate and it is clean.

### The eight `ai-generated` witnesses were independently verified, not trusted

All eight are examples/counterexamples on B pages, none is a dependency target.
Six are finite numeric claims and I recomputed every one:

- `ex-a-matrix-over-f-two-with-no-eigenvalues` — $\chi_A=x^2+x+1$ over
  $\mathbb F_2$; $\chi(0)=\chi(1)=1$, so no root. ✓
- `cex-congruence-need-not-preserve-trace-or-determinant` — $P^TAP=[2][1][2]=[4]$;
  trace $1\to4$, det $1\to4$. ✓
- `ex-cayley-hamilton-reduces-powers-of-a-two-by-two-matrix` — $\chi_A=x^2-x-1$,
  $A^2=A+I$, Fibonacci induction closes. ✓
- `ex-dual-basis-and-transpose-on-f-three` — $T^*(\varepsilon_1)=\varepsilon_1+2\varepsilon_2$,
  $T^*(\varepsilon_2)=\varepsilon_2$, $[T^*]=[T]^{\mathsf T}$ over $\mathbb F_3$. ✓
- `ex-congruence-diagonalization-and-inertia-of-a-real-quadratic-form` — computed
  $P^{\mathsf T}AP=\operatorname{diag}(2,3)$ and checked the form identity on a grid. ✓
- `ex-sylvesters-criterion-for-a-three-by-three-matrix` — minors $2,3,4$; the
  square-completion identity checked against $x^{\mathsf T}Bx$ over a rational grid,
  0 mismatches. ✓

The remaining two are the category-theory counterexamples carrying registered
`finite-smoke` poset checks, both passing.

---

## 3. The five run-specific obligations

### 3.1 D10 wiring survives ✅

All four required ids exist and are **A-page** items on
`the-field-of-fractions-and-localisation` (order 53.2), none on the B page:
`def-field-of-fractions`,
`thm-field-of-fractions-is-a-field-and-the-domain-embeds`,
`thm-universal-property-of-the-field-of-fractions`,
`cor-rational-function-field-as-a-fraction-field`.
No repair moved or renamed any of them. The step-9 wiring is safe.

### 3.2 Green's theorem stays at elementary regions ✅ (one real defect found and repaired — see §5)

`def-type-i-type-ii-and-elementary-green-regions` makes the decomposition **part
of the data** — *"This supplied decomposition is part of the data; it is not
inferred from an arbitrary closed curve"* — and
`thm-greens-theorem-for-finite-unions-of-elementary-regions` step 3.1 states the
disclaimer in the proof rather than a parenthesis.
`rem-greens-theorem-jordan-domain-limitation` still names the boundary. No proof
step assumes a Jordan domain.

### 3.3 `complex-analysis` agrees with the ℂ on disk ✅

`rem-complex-plane-euclidean-dictionary` pins $\mathbb C=\mathbb R[x]/(x^2+1)$
with $i$ the class of $x$, matching the published
`def-complex-numbers-and-arithmetic` verbatim, and takes $\Phi(a+bi)=(a,b)$ from
the published `thm-complex-numbers-are-the-real-coordinate-plane`. The Wirtinger
conventions check out: $\partial_{\bar z}f=\frac12(u_x-v_y)+\frac i2(v_x+u_y)$ is
$\frac12(f_x+if_y)$, and under Cauchy–Riemann $\partial_zf=u_x+iv_x$.

**Presentation is untouched.** `git status` shows no modified file outside
`research/`, `items/` and `library/`; the app repo working tree is clean. The new
`complex-analysis` category directory is content only.

### 3.4 Harvest faithfulness, second pass ✅

`coverage-checklist` is structurally clean and every `included` row names a real
authored item. 73 authored items carry no coverage row; these are
proof-decomposition lemmas and derived examples, which the harvest contract does
not require to have rows — the contract is heading → disposition, not item →
heading.

**C15 from my step-3 recheck is closed as a non-defect.** I had flagged that
`thm-positive-probability-existence-principle` and `thm-first-moment-method` on
page 221 carry no coverage row. I fetched Matoušek–Vondrák and read Chapter 2: it
is titled *"The Probabilistic Method"* and states the existence principle in its
**unnumbered opening prose** — *"If we prove that this probability is strictly
positive, then we conclude that a 'good' object must exist; if all objects were
'bad', the probability would be zero."* The source does carry the material; the
harvest enumerates numbered section and named-result headings, which is what the
contract asks for. No sourcing gap, so no repair. Recording it rather than
manufacturing an edit.

### 3.5 `finite-smoke` and the short registry ✅

Both registered poset checks pass and independently verify batch 7's two
category-theory counterexamples.

**The registry's weakness is concrete and nameable.** Six of the eight
`ai-generated` witnesses are finite arithmetic claims a bounded check could
falsify outright, and none is registered:
`ex-a-matrix-over-f-two-with-no-eigenvalues` (2×2 over $\mathbb F_2$, 4 field
elements to enumerate), `cex-congruence-need-not-preserve-trace-or-determinant`
(1×1), `ex-dual-basis-and-transpose-on-f-three` (2×2 over $\mathbb F_3$),
`ex-sylvesters-criterion-for-a-three-by-three-matrix` (three integer minors plus
a rational-grid identity), `ex-congruence-diagonalization-and-inertia-of-a-real-quadratic-form`
(a 2×2 congruence), and `ex-cayley-hamilton-reduces-powers-of-a-two-by-two-matrix`
(an integer recurrence). I verified all six by hand this run; registering them
would make that verification durable and re-runnable instead of a one-off in this
report. The same applies to the three probability boundary witnesses on page
220.4, which are two- and three-point distributions.

---

## 4. Cross-batch and cross-level relationships (§6c) ✅

`research/frontier-12-audit-manifest.json` — **1669 edges**:

| class | count |
|---|---|
| `same-batch` | 882 |
| `published-backward` | 787 |
| **cross-batch** | **0** |

**Zero cross-batch edges is not a smell here, and I checked why.** No in-run pair
sits in another in-run pair's `requires` closure, so `validate-plan`'s
`undeclared-prereq` forbids a cross-batch citation outright — the count is
mechanically forced, not evidence of duplication. I confirmed the pairs that
*could* want to connect are already same-batch (220.2→221, 53.2→56, 86→92,
183→241).

**But the constraint has a real consequence, and it produced a fatal defect.**
`thm-rmod-is-complete-and-cocomplete` (batch 7, order 363) needs the free module
on a set and its universal property. Both
`def-free-module-on-a-set-and-standard-basis` and
`thm-universal-property-of-free-modules` are **batch-2 drafts** at order 104, and
order 104 is *not* in order 363's `requires` closure, so batch 7 cannot cite
them. See §5.

All 787 backward edges to published content point at eligible statements:
408 `literature-derived`, 379 `ai-altered`, **0 `ai-generated`**, **0
legacy-unclassified**. 327 distinct published targets.

Five `well_definedness_discharge` edges, all same-batch and all the correct
pattern (a definition discharged by the theorem that makes it well defined):
`def-split-short-exact-sequence` ← `thm-splitting-lemma-for-modules`;
`def-definiteness-inertia-and-signature-data-over-the-reals` ←
`thm-sylvesters-law-of-inertia`;
`def-scalar-and-vector-line-integrals-along-piecewise-c1-paths` ←
`lem-line-integrals-are-independent-of-the-piecewise-c1-partition`;
`def-product-of-finite-probability-spaces` ←
`thm-product-probability-has-independent-coordinate-events`;
`def-complex-differentiability-holomorphic-and-entire` ←
`lem-uniqueness-of-the-complex-derivative`.

**Zero forward references** are declared by any run item — consistent, since the
D10 forward reference is wired at step 9 from the published side.

---

## 5. Adjudicated findings and repairs

Every finding below was verified against disk before disposition. A finding is
evidence, never a verdict; where a reader or refuter called something fatal that
I judge nonfatal, I say so and give the reason.

### 5.1 Confirmed fatal — false claims

| # | item | defect | disposition |
|---|---|---|---|
| **1** | `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann` | **False title.** It listed the three equivalents as "a complex-linear real total derivative, $\partial_{\bar z}f=0$, and real differentiability plus the Cauchy–Riemann equations" — the middle clause **drops real differentiability**, so read literally the title asserts complex differentiability $\iff\partial_{\bar z}f=0$, which is false. The page's own `fs-cauchy-riemann-at-a-point-implies-complex-differentiability` is the counterexample. The **Statement was correct**; only the title overclaimed. | Title rewritten to "…equivalent to real total differentiability together with a complex-linear derivative, with $\partial_{\bar z}f=0$, or with the Cauchy–Riemann equations". The **page summary carried the same overclaim** and was corrected identically. Found by refuter-5 and reader-5 independently. |
| **2** | `def-positive-orientation-for-elementary-region-boundaries` | **$\int_{\partial D}$ was undefined for most of its own hypothesis class.** A finite elementary Green region need not be connected or simply connected, so the surviving boundary arcs need not assemble into one closed path — but the integral was defined only through single-path concatenation, which requires meeting endpoints. Green's theorem and the area corollary therefore used an undefined quantity whenever $\partial D$ had more than one component. | Defined the **positive boundary chain** and its integral as the finite sum over surviving oriented arcs, noted that this agrees with the concatenated path whenever the arcs do assemble into one, and recast `lem-green-boundary-cancellation-under-finite-gluing` step 2.1 as a finite-sum rearrangement rather than a concatenation. Found by reader-3. This is the most consequential defect in the run. |
| **3** | `thm-rmod-is-complete-and-cocomplete` | **Cocompleteness rested on machinery the page cannot cite.** Steps used the free module $R^{(S)}$ and its unique linear extension property, citing `def-generated-cyclic-finitely-generated-and-free-modules`, which only *defines* a basis. The items that do supply them — `def-free-module-on-a-set-and-standard-basis`, `thm-universal-property-of-free-modules` — are **batch-2 drafts at order 104, and order 104 is not in order 363's `requires` closure**, so batch 7 cannot legally cite them. | **I authored the construction and its extension property inline** as new step 1.4 (finitely supported $\lambda:S\to R$, pointwise operations, basis $\{e_s\}$, prescription on the basis determines the map), restated [F3] to claim only what the published definition gives, and renumbered the proof. **No new item was minted**, deliberately — an item created at step 6 that never enters `plan-spec.json` escapes both judge lanes. Found by refuter-6. |
| **4** | `lem-random-graph-independence-number-bound` | **False boundary clause in the Statement:** "For $s=0,1$, the first inequality is equality." At $s=1$ the left side is $1$ and the right side is $n$, so it is strict for every $n\ge2$. | Replaced with the true dispositions: at $s=0$ every displayed quantity is $1$; at $s=1$ both bounds are $n$, so the **second** inequality is an equality while the first is strict for $n\ge2$. Found by refuter-1. |
| **5** | `ex-products-in-a-poset-are-infima` | **False Example assertion**, contradicting its own step 2.1: it claimed the identity of a parallel pair's **domain** is both an equalizer and a coequalizer. For $f,g:x\rightrightarrows y$ the coequalizer is $1_y$, and in a poset $x<y$ the arrow $1_x$ is not even correctly typed as one. | Corrected to "the identity of its domain is an equalizer while the identity of its codomain is a coequalizer". Found by refuter-6. |
| **6** | `ex-second-moment-bound-for-a-nonempty-random-subset` | **False computed endpoint:** step 3.1 claimed that at $p=1,n>0$ "both relevant bounds equal $1$". The Markov upper bound is $np=n$, which is $2$ at $n=2$. | Corrected to state the exact probability $1$, the second-moment bound $1$, and the Markov bound $n$, noting it is vacuous for $n\ge2$. Found by refuter-1. |
| **7** | `ex-square-map-sends-a-grid-to-orthogonal-parabolas` | **Title and Example overclaim**, contradicted by the item's own steps 2.1 and 2.2: the two coordinate axes map onto **rays**, not parabolas, and the "away from its critical point" qualifier does not repair this because deleting one point from a ray leaves a ray. | Title narrowed to grid lines **off the coordinate axes**; the Example now names the two axes as the exceptions. The conformality claim, correctly restricted to $z\ne0$, was already right. Found by refuter-5 and reader-5. |

### 5.2 Confirmed fatal — missing hypotheses

The Axiom of Choice appeared three times as a hypothesis used but not declared.
The library defines a local ring as having **exactly one maximal ideal**, so
"the maximal ideal is exactly the nonunits" needs Krull's theorem and hence Zorn;
I verified that route rather than assuming it.

| item | disposition |
|---|---|
| `thm-local-ring-unit-characterisations` | Statement already assumed AC; the **title** asserted the characterization unconditionally. Title now carries "Assuming the Axiom of Choice". (refuter-4) |
| `cor-every-local-ring-is-its-localisation-at-its-maximal-ideal` | Neither title nor Statement carried AC, while `[F1]` used the choice-dependent direction. Both now do. (refuter-4) |
| `cor-local-rings-have-only-trivial-idempotents` | Same defect, same repair. (refuter-4) |
| `fs-every-injective-module-is-projective` | The Facts declared "Under AC" but the Given and title did not; *divisible $\Rightarrow$ injective* rests on Baer's criterion and Zorn. Given and title now say so. I record this as **confirmed but nonfatal** — the hypothesis was visible in the Facts, so nothing was concealed. (refuter-9) |

**Blast radius checked, not assumed:** I grepped for consumers of the two
AC-gaining corollaries. **Nothing in the library cites either of them**, so the
added hypothesis propagates nowhere.

### 5.3 Confirmed fatal — a convention break with real consequences

`def-closed-and-exact-c1-vector-fields` wrote $F=(F_1,\ldots,F_n)$ and quantified
closedness over $1\le i,j\le n$. **The library is unambiguously zero-based:**
`lem-standard-basis-of-f-n` says *"Every index runs from $0$, so the coordinates
of an element of $F^n$ are $x_0,\dots,x_{n-1}$"*, and
`def-jacobian-matrix-and-gradient` writes the Jacobian $(\partial_jf_i)_{i<n,j<m}$
and the gradient $(\partial_0f,\ldots,\partial_{m-1}f)$. So in $\mathbb R^2$ the
definition asserted something about $\partial_2F_1=\partial_1F_2$ — and neither
$F_2$ nor $\partial_2$ exists there. Three items then "verified closedness" of
witnesses using the nonexistent component $F_2$.

**I checked the scope before repairing.** `def-closed-and-exact-c1-vector-fields`
is the **only** item in the library using that one-based vector-field style, and
it is a draft in this run, so there is no published precedent to preserve and no
published item to touch. Repaired the definition to $F=(F_0,\ldots,F_{n-1})$ with
$i,j<n$, and reindexed the three concrete $\mathbb R^2$ computations
(`cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane`,
`ex-constructing-a-potential-on-an-open-rectangle`,
`fs-every-closed-c1-field-on-a-connected-open-set-is-exact`). Found by reader-3.

**What I deliberately did *not* do.** Reader 3's finding generalises to one-based
*basis lists* ($v_1,\ldots,v_n$) across the linear-algebra pages. I checked, and
**published items already use that style** (`cor-parallelepiped-content-is-the-absolute-determinant`,
`thm-ores-hamiltonicity-theorem`). That is an informal list naming, not an
indexed-interface use feeding $\partial_j$ or a Jacobian, and published items are
not retrofitted. Out of scope; recorded here so the next run does not re-derive it.

### 5.4 Confirmed, nonfatal — citation fidelity

The dominant finding class this run, and the readers and refuters agree on it:
a `[F#]`/`[L#]` fact restating a dependency as saying more than it does. None is
a false mathematical claim; each is a real breach of the citation-fidelity rule,
and each was repaired **here at step 6**, where polish is permitted and no verdict
exists to void. Repaired:

- **Four items attributing $|\bar z|=|z|$ or the reverse triangle inequality to
  `lem-complex-conjugation-and-modulus-laws`**, which states neither. I checked
  its on-disk Statement: it gives $z\bar z=|z|^2$, definiteness, multiplicativity
  and the *ordinary* triangle inequality. Both missing facts follow in one line,
  which I wrote into each Fact. (`ex-reciprocal-function-from-the-complex-difference-quotient`,
  `thm-conjugate-difference-quotient-characterizes-antiholomorphic-maps`,
  `cex-modulus-squared-is-complex-differentiable-only-at-zero`,
  `fs-cauchy-riemann-at-a-point-implies-complex-differentiability`.) reader-5.
- **`thm-spectral-mapping-for-polynomials`** — `[L1]` claimed matrix
  representation preserves *sums* while citing only the composite theorem; added
  `thm-matrix-representation-is-a-vector-space-isomorphism`. refuter-3.
- **`cor-positive-dimensional-operator-…-has-an-eigenvalue`** and
  **`cor-inverse-of-an-invertible-operator-is-a-polynomial-in-the-operator`** —
  both attributed **endomorphism**-level claims to a lemma stated for
  $A\in M_n(F)$. Added the operator↔matrix bridges
  (`def-characteristic-polynomial-of-an-operator`,
  `def-determinant-of-a-linear-operator`). refuter-3.
- **`thm-top-is-complete-and-cocomplete-…`** and **`ex-pullback-in-top`** — both
  attributed characteristic properties to `def-initial-and-final-topology` and
  `def-product-topology`, which **explicitly defer them to "the next item"**.
  Re-cited `thm-initial-and-final-characteristic-properties` and
  `thm-product-universal-property`, both published and both stating exactly the
  iff used. refuter-6.
- **`fs-real-differentiability-implies-complex-differentiability`** — conjugation
  attributed to `thm-complex-numbers-are-the-real-coordinate-plane`, which gives
  only $\Phi$ and the arithmetic formulas; added
  `def-complex-conjugate-real-imaginary-part-and-modulus`. refuter-5, reader-5.
- **`thm-complex-exponential-is-entire-with-derivative-itself`** — `[L5]` added a
  derivative formula the cited theorem does not conclude; split the citation.
  refuter-5.
- **`fs-cauchy-riemann-on-an-open-set-without-regularity-implies-holomorphy`** —
  `[L2]` asserted an unrestricted "power rule"; replaced with the exact product,
  reciprocal and chain rules plus the two-line derivation for $z^{-4}$. reader-5.
- **`lem-random-graph-short-cycle-expectation`** — `[L4]` took the *counting*
  interpretation of $n^{\underline r}$ from a definition that only gives the
  recursion; added `thm-number-of-injections`. `[L2]` cited the girth definition
  for the notion of a cycle; added `def-graph-walk-trail-path-and-cycle`. reader-4.
- **`thm-szele-many-hamilton-paths-in-a-tournament`** — `[L2]` said a Hamilton
  path visits vertices "along directed arcs" while citing
  `def-hamilton-path-cycle-and-hamilton-connected`, which is an **undirected
  simple-graph** definition. The theorem is about tournaments. Re-cited
  `def-directed-walk-trail-path-cycle-and-strong-connectivity`, matching the
  precedent already set by the published `thm-redei-tournament-hamilton-path`.
  refuter-1.
- **`lem-wallis-integrals-recurrence-and-squeeze`** — step 1.3 used monotonicity
  of the integral; `[L4]` gave only linearity and the constant integral. Added
  `thm-monotonicity-of-the-integral`. reader-3.
- **`cor-potentials-differ-by-a-componentwise-constant`** — `[L1]` claimed the
  cited definition defines *path components*; it defines only path-connectedness
  of an open set. Wrote the equivalence relation inline. reader-3.
- **`thm-canonical-map-to-double-dual-is-surjective-iff-finite-dimensional`** —
  step 1.2 said "Choice supplies an infinite Hamel basis" with no fact citing
  basis existence; added `cor-every-vector-space-has-a-basis`. reader-2.
- **`ex-the-empty-set-is-the-product-of-the-large-family-of-all-sets`** — `[F1]`
  silently extended a **set**-indexed product definition to a proper-class-indexed
  diagram. Made the extension an explicit stipulation and said why it is the point
  of the example. refuter-6.
- **`ex-two-composition-series-of-the-cyclic-group-of-order-twelve`** — `[L1]`
  cited a subgroup theorem for a claim about **quotients**; added the one-line
  quotient argument. refuter-9.
- **`thm-matrix-of-transpose-is-the-transposed-matrix`** — step 2.1's first
  displayed expression $v_j^*(T^*(w_i^*))$ is **ill-typed**: it applies
  $v_j^*\in V^*$ to an element of $V^*$. Replaced with the correct
  characterisation via $\phi=\sum_j\phi(v_j)v_j^*$. reader-2. *(Reader 2 filed
  this as nonfatal because the following expression is correct; I agree it is not
  a false claim, but an ill-typed displayed formula is exactly what a step-7 judge
  flags, so it was worth closing now.)*

### 5.5 Confirmed, nonfatal — 30-second gaps closed at step 6

- **`lem-green-type-i-boundary-identity`** and **`lem-green-type-ii-boundary-identity`** —
  the cited Newton–Leibniz theorem assumes $a<b$, but the region definition
  permits $\alpha=\beta$ at the two endpoints. Both sides vanish there; I wrote
  the degenerate case in explicitly. refuter-2.
- **`lem-green-boundary-cancellation-under-finite-gluing`** — boundedness of $H$
  was used in step 2.2 but established in step 3.1; moved it up. **I also caught
  independently** that the bound $|q|\le NM\mathbf 1_S$ understates the count —
  at a point of $S$ up to $N$ piece extensions *and* the extension from $D$ are
  nonzero, so it is $(N+1)M$. Immaterial to the conclusion since $\int\mathbf1_S=0$,
  but corrected.
- **`thm-path-independence-iff-zero-closed-loop-integrals`** and
  **`thm-path-independent-field-has-a-potential-by-line-integrals`** —
  concatenation is defined only for paths on $[0,1]$, and both proofs concatenated
  arbitrary-domain paths. Added the explicit affine normalisation, licensed by
  `thm-line-integrals-under-oriented-reparametrization`. **refuter-2 and reader-3
  found this independently**, which is the cross-check working.
- **`def-circular-arcs-circumference-and-diameter`** — an arc was defined as a
  *trace* (a set) with a length attached, but a set does not determine a length;
  the page's own `cex-a-multiple-traversal-…` exhibits one trace with lengths
  $2\pi$ and $4\pi$. Made the arc a parametrized restriction. reader-3.
- **`thm-line-integrals-under-reversal-and-concatenation`** and
  **`ex-line-segment-scalar-and-vector-line-integrals`** — free symbols $f,F$ with
  no continuity or domain hypotheses, while the sibling reparametrization theorem
  states them. Quantified both. reader-3.
- **`thm-finite-second-moment-lower-bound`** — the title asserted
  $\mathbb P(X\ne0)\ge\mathbb E[X]^2/\mathbb E[X^2]$ unconditionally, and the
  denominator may vanish (constant-zero variable gives $0/0$). The Statement
  already restricted correctly; title now carries $\mathbb E[X^2]>0$. refuter-7.
- **Four proof-contract boundary rows re-anchored** in
  `research/frontier-12-batch-4.proof-contracts.json`: `thm-unit-semicircle-arc-length-is-pi`
  (`degenerate` was "checked" on evidence about translation and rotation → now
  `not_applicable` with the real reason), `thm-scalar-and-vector-line-integral-estimates`
  (`empty` was "checked" on the $M=0$ calculation, which is the *zero* case →
  `not_applicable`), `cor-scalar-line-integral-of-one-is-arc-length` and
  `cor-conservative-fields-are-path-independent-and-have-zero-circulation`
  (both anchored to steps that do not discharge the named case → re-anchored to
  the steps that do). reader-3. **This is the failure my memory flags: a contract
  that passes mechanically while its evidence does not support the row.**

### 5.6 Findings I refuted or declined

- **`thm-cayley-hamilton` / `def-characteristic-polynomial-of-a-matrix`, "the
  scalar extension $F\to F[x]$ is unlicensed"** (refuter-3, filed fatal).
  **Downgraded to nonfatal.** Regarding $A\in M_n(F)$ as a matrix over $F[x]$ is
  the entrywise constant embedding, and $F\to F[x]$ is a ring homomorphism from
  `def-polynomial-ring-over-a-commutative-ring`, already a declared dependency;
  applying a ring homomorphism entrywise commutes with the Leibniz determinant.
  That is a sub-30-second identification, nothing false is asserted, and the
  adjugate proof is correct. Recorded, not repaired.
- **C15 from my step-3 recheck** — closed as a **non-defect**; see §3.4. I fetched
  the source rather than assume, and the material is there in unnumbered prose.
- **The remaining ~30 nonfatal citation-precision findings** from readers 1, 2, 4
  and 5 (restatements that add an associativity clause, an enumeration, or an
  entry formula to a cited algebraic-laws theorem) are **recorded as confirmed and
  nonfatal**. Each is a one-line consequence of what the cited item does state,
  none affects a Statement, hypothesis or conclusion, and the 30-second rule
  governs. Repairing all of them would multiply the step-7 rejudge set for no
  mathematical gain.

---

## 6. Proofs I verified personally

Beyond adjudication, I read these end to end because they carry the run's real
exposure:

- **`lem-local-lemma-conditional-probability-bound`** — the Local Lemma's actual
  induction. Strong induction on $|S|$; $S_1=S\cap N^+(i)$, $S_2=S\setminus S_1$;
  the conditioning sets in the chain rule have $|S_2|+q-1\le m-1<m$ elements, so
  the induction is well-founded; each has positive probability because its
  complement intersection contains $C_1\cap C_2$; the denominator
  $\mathbb P(C_1\mid C_2)\ge\prod_{j\in S_1}(1-x_j)>0$ is bounded below before
  dividing; and $S_1\subseteq N^+(i)$ makes the final cancellation exact.
  **Correct.**
- **`def-dependency-digraph-for-finite-events`** — carries the strong form
  (independence from *every* conjunction of complements over non-out-neighbours),
  which is what the lemma needs. Not merely pairwise. **Correct.**
- **`cor-symmetric-lovasz-local-lemma`** — $ep(d+1)\le1$ with $x_i=1/(d+1)$ gives
  $x_i\prod(1-x_j)\ge\frac1{d+1}(1-\frac1{d+1})^d\ge\frac1{e(d+1)}\ge p$; the
  $d=0$ branch is handled separately at $x_i=1/e$. Constant and off-by-one both
  **correct**.
- **`thm-cayley-hamilton`** — coefficient comparison gives $-AB_0=c_0I$,
  $B_{k-1}-AB_k=c_kI$, $B_{n-1}=I$; left-multiplying by $A^k$ telescopes exactly
  to $\sum c_kA^k=0$. Never substitutes into a matrix-coefficient polynomial. The
  $\dim V=0$ case is handled. **Correct.**
- **`thm-poincare-lemma-for-star-shaped-domains`** — the integrand derivative is
  $F_j(z_t)+t\sum_i(\partial_jF_i)(z_t)(x_i-a_i)$, which closedness turns into
  $\frac{d}{dt}(tF_j(z_t))$, and Newton–Leibniz gives $F_j(x)$. Star-shapedness is
  a Statement hypothesis and is genuinely used; never upgraded to connected.
  **Correct.**
- **`thm-zassenhaus-butterfly-lemma`** — verified $V=A^*\cap B\subseteq M$ (so
  $X^*=XM$), both Dedekind applications' containment hypotheses, and the
  normalizer argument $ava^{-1}=(ava^{-1}v^{-1})v\in AV$. **Correct.**
- **`thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann`** —
  all four conditions carry real total differentiability explicitly, so the classic
  trap (CR equations alone) is avoided; the B page marks that boundary twice, in
  `fs-cauchy-riemann-at-a-point-implies-complex-differentiability` and
  `fs-cauchy-riemann-on-an-open-set-without-regularity-implies-holomorphy`.
  Statement **correct** — but the *title* was not, see §5.
- **`thm-sylvesters-law-of-inertia`** — hypothesis is a finite-dimensional **real**
  vector space and the proof genuinely uses positive square roots. **Correct.**
- **`thm-five-lemma-for-modules` / `lem-four-lemma-for-modules`** — the five lemma
  defers correctly and the four lemma proves both halves.
- **`lem-green-boundary-cancellation-under-finite-gluing`**, the Green block, and
  the three probability boundary witnesses on page 220.4 (Markov sharp, Markov
  without nonnegativity, Chebyshev sharp) — all recomputed. **Correct.**

---

## 7. Items I edited

**No item was created or deleted, so nothing needs splicing into
`plan-spec.json`.** This matters: on the previous run a reader created an item at
step 6 that never entered the spec and was therefore judged by neither lane. I
deliberately supplied the missing free-module construction as an inline proof
step rather than as a new item for exactly that reason.

The **step-7 sweep judges every A page in the level**, so this list is not a
rejudge set — it is the record for step-8 `item_sha256` accounting, and the list
the orchestrator should use if any targeted rejudge is later needed.

**44 files: 43 items and 1 page summary.**

`cex-modulus-squared-is-complex-differentiable-only-at-zero` ·
`cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane` ·
`cor-every-local-ring-is-its-localisation-at-its-maximal-ideal` ·
`cor-inverse-of-an-invertible-operator-is-a-polynomial-in-the-operator` ·
`cor-local-rings-have-only-trivial-idempotents` ·
`cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue` ·
`cor-potentials-differ-by-a-componentwise-constant` ·
`def-circular-arcs-circumference-and-diameter` ·
`def-closed-and-exact-c1-vector-fields` ·
`def-positive-orientation-for-elementary-region-boundaries` ·
`ex-constructing-a-potential-on-an-open-rectangle` ·
`ex-line-segment-scalar-and-vector-line-integrals` ·
`ex-products-in-a-poset-are-infima` · `ex-pullback-in-top` ·
`ex-reciprocal-function-from-the-complex-difference-quotient` ·
`ex-second-moment-bound-for-a-nonempty-random-subset` ·
`ex-square-map-sends-a-grid-to-orthogonal-parabolas` ·
`ex-the-empty-set-is-the-product-of-the-large-family-of-all-sets` ·
`ex-two-composition-series-of-the-cyclic-group-of-order-twelve` ·
`fs-cauchy-riemann-at-a-point-implies-complex-differentiability` ·
`fs-cauchy-riemann-on-an-open-set-without-regularity-implies-holomorphy` ·
`fs-every-closed-c1-field-on-a-connected-open-set-is-exact` ·
`fs-every-injective-module-is-projective` ·
`fs-real-differentiability-implies-complex-differentiability` ·
`lem-green-boundary-cancellation-under-finite-gluing` ·
`lem-green-type-i-boundary-identity` · `lem-green-type-ii-boundary-identity` ·
`lem-random-graph-independence-number-bound` ·
`lem-random-graph-short-cycle-expectation` ·
`lem-wallis-integrals-recurrence-and-squeeze` ·
`thm-canonical-map-to-double-dual-is-surjective-iff-finite-dimensional` ·
`thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann` ·
`thm-complex-exponential-is-entire-with-derivative-itself` ·
`thm-conjugate-difference-quotient-characterizes-antiholomorphic-maps` ·
`thm-finite-second-moment-lower-bound` ·
`thm-line-integrals-under-reversal-and-concatenation` ·
`thm-local-ring-unit-characterisations` ·
`thm-matrix-of-transpose-is-the-transposed-matrix` ·
`thm-path-independence-iff-zero-closed-loop-integrals` ·
`thm-path-independent-field-has-a-potential-by-line-integrals` ·
`thm-rmod-is-complete-and-cocomplete` · `thm-spectral-mapping-for-polynomials` ·
`thm-szele-many-hamilton-paths-in-a-tournament` ·
`thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both`

Plus the page summary `library/complex-analysis/complex-differentiability-and-cauchy-riemann.md`
(the same false-equivalence overclaim as the theorem title).

**I authored one new proof myself:** the construction of the free module
$R^{(S)}$ on a set and its unique linear extension property, as step 1.4 of
`thm-rmod-is-complete-and-cocomplete`.

**Twice-touched items: one.**
`thm-canonical-map-to-double-dual-is-surjective-iff-finite-dimensional` appears in
two snapshot intervals of the touch ledger — the content repair (adding `[L5]` and
`cor-every-vector-space-has-a-basis`, because step 1.2 asserted "Choice supplies an
infinite Hamel basis" with no Fact citing basis existence), and a later edit to the
step brackets so `proof-contract --strict` would accept `[L5]` and step 1.2 as
declared inputs. **Both edits serve the same single repair and no second
mathematical defect was found in it**; I record it here because the ledger flags it
and the twice-touched escalation is advisory. Every other repaired item was
finished in one pass.

---

## 8. Gate state at close

Every gate re-run after the last repair.

| gate | result |
|---|---|
| `precheck` | 3251 checked, **0 failing** |
| `depcheck` | **OK** — no cycles, all references resolve, no draft items on published pages |
| `fwdcheck` | **OK** |
| `extcheck` | **OK** |
| `rendercheck` | **OK** — 4424 files, KaTeX and frontmatter parse |
| `prosecheck` | **OK** |
| `citecheck` | 4172 items scanned |
| `content-policy` (batch manifests) | 454 scoped, **0 errors, 0 warnings** |
| `coverage-checklist` | 12 pages, 888 harvested results, **0 errors** |
| `proof-contract --strict` | **0 errors, 0 warnings, 370/370** |
| `finite-smoke` | **0 errors**, 2 checks |
| `risk-report --require-reviewed` | **0 errors**, 370 routed, **236 risk_reviews** |
| `impact-audit` `after-authoring` → `verify-final` | **40 changed interfaces, 66 affected items**, every disposition reviewed |
| `audit-manifest` | 1687 edges regenerated — 890 same-batch, 797 published-backward, **0 cross-batch**, 0 `ai-generated` targets |

Receipts: `research/frontier-12-audit-coverage.json` (whole-level),
`research/frontier-12-impact.json` (impact), `research/frontier-12-audit-manifest.json`.

### Two notes on gates that could have passed vacuously

1. **`impact-audit` first reported "0 changed public interfaces"** after I had
   edited 43 items. Without `--to`, it compares the named snapshot against the
   latest snapshot in the ledger — which was still `after-authoring`, so it was
   comparing that snapshot with itself. I took a fresh `after-alpha-step6`
   snapshot and re-ran with an explicit `--to`; the real answer is 40 changed
   interfaces and 66 affected items. **A bare `--from` run at this stage is not
   evidence of anything.** I also re-cut the final receipt across
   `after-authoring` → `verify-final` after the last repair, rather than leaving it
   anchored to an intermediate snapshot that predated two edits.
2. **`risk_review` records must be written into the *batch* contracts, not the
   merged file.** `merge-proof-contracts.mjs` copies `contracts[id]` wholesale
   from each batch file, so reviews written only into the merged artifact are
   destroyed by the next re-merge. All 236 are in the batch files and survived
   three subsequent re-merges.

---

## 9. Honest remaining gaps

1. **The `finite-smoke` registry is two checks long, and I can name what belongs
   in it.** See §3.5: six of the eight `ai-generated` witnesses and the three new
   probability boundary witnesses are finite claims a bounded check could falsify.
   I verified all of them by hand this run; that verification is currently durable
   only as prose in this report.
2. **The proof-contract schema cannot record a literature-only citation.**
   `thm-ideal-correspondence-for-localisation` cites The Stacks Project Lemmas
   10.9.16 and 10.17.5 in `[L1]` and `[L2]` with no on-disk wikilink, so the
   contract has no citation entry for either and `--strict` passes without
   checking them. This is not a Beta omission: **zero** contracts in the run
   record a literature-only citation, because the `citations` array is keyed on an
   on-disk `source` id with an exact section quote. Both statements are faithful
   to the named Stacks results (I checked, and refuter-4 checked independently),
   and both claims are **proved locally**, so this is not an undeclared external
   dependency and `extcheck` is right to pass. Flagged for the owner as a schema
   gap, not repaired by fabricating a slot the tool does not define. *(reader-7)*
3. **~30 nonfatal citation-precision findings are recorded but not repaired**
   (§5.6). Each is a one-line consequence of what the cited item states and none
   touches a Statement, hypothesis or conclusion. If the owner would rather have
   them closed, they are cheap — but they are step-6 work, and after step 7 they
   become step-8 work, where the fatal-only rule forbids them.
4. **One-based basis lists persist in published linear-algebra items** (§5.3).
   Out of scope this run; recorded so it is not re-derived.

---

## 10. Verdict

**Yes — the level is ready to freeze for the step-7 paired judges.**

454 items across 24 pages were read in full by seven independent readers and nine
read-only proof-refuters, none auditing content it authored. I adjudicated every
finding from disk, confirmed 11 fatal defects and repaired all 11, downgraded one
fatal finding with reasons, closed a further 20-odd nonfatal citation and
boundary defects while the text was still unfrozen, and recorded the rest.

The three defects that would have mattered most were all genuinely load-bearing
and none was visible to any mechanical gate: a **false title** on the theorem that
fixes complex-analysis conventions for 53 downstream pages, an **undefined
boundary integral** for every disconnected Green region, and a **cocompleteness
proof resting on a free-module construction its page is forbidden to cite**. The
first was found by a refuter and a reader independently; the second and third by
one agent each.

All twelve gates are green, both receipts are written, the D10 wiring is intact,
Green's theorem is still scoped to elementary regions, the new `complex-analysis`
category agrees with the ℂ actually on disk, and presentation is untouched.

No blocker. Nothing here requires an owner decision before step 7.
