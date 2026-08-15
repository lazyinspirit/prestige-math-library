# Group Alpha c — `frontier-14` step-3 scaffold review (batch 7)

Reviewer: group Alpha **c**. Scope: the restored A/B pair
`stone-weierstrass-general` (287) and `stone-weierstrass-general-examples` (288).
Artifacts read: `research/frontier-14-batch-7.{pages.json,notes.md,coverage.json,proof-contracts.json}`,
`research/frontier-14-beta-7.task.md`, `research/frontier-14-alpha-a-step3-scaffold-review.md` §D,
`research/plan-topology-track.md` §T10, `research/plan-functional-analysis-track.md` §FA-18.

## Verdicts

| page | verdict |
|---|---|
| `stone-weierstrass-general` (287) | **insufficient** — C1, C2, C4, C5, C6, C7, C9 |
| `stone-weierstrass-general-examples` (288) | **insufficient** — C1, C2, C3, C9, C11 |

**Read this before acting on the verdicts.** Nothing below is a blocker, nothing
below needs an owner decision, and nothing below licenses dropping either page.
Every finding is a scaffold edit — deps lists, coverage rows, notes rows, contract
quote strings. The pair covers everything T10 asks of it and honours the D1
decision exactly; see §"What is right" first. **This pair is spliceable at step 4
with the findings routed to the Beta, and must be spliced whether or not every
finding is applied.** The one judgment that is not mine is recorded in
§"Decisions that are not mine", explicitly as *not* gating the splice.

---

## D1 compliance — the reason this batch exists

**Honoured, exactly.** Verified mechanically and by reading.

- None of the three forbidden ids occurs anywhere in the four batch-7 artifacts:
  `def-complex-scalar-pairs-for-stone-weierstrass`,
  `thm-complex-scalar-pair-field-and-conjugation-laws`,
  `lem-dyadic-root-of-unity-filter` — 0 occurrences in `pages.json`,
  `coverage.json`, `proof-contracts.json` and `notes.md`.
- `cor-sum-of-roots-of-unity` **is** cited, in
  `cex-disc-algebra-is-not-dense-without-self-adjointness`, and its contract
  quote is the Statement verbatim: *"For $n\in\mathbb N$ with $n\ge2$, the sum
  of all $n$th roots of unity is $0$."* The scaffold does **not** widen it into
  a filter theorem; the notes record that explicitly (convention note 6) and the
  contract's `risk_review` note repeats the instruction.
- `def-self-adjoint-complex-function-algebra` now rests on the published ℂ:
  its deps are `def-complex-numbers-and-arithmetic`,
  `thm-complex-numbers-form-a-field`,
  `def-complex-conjugate-real-imaginary-part-and-modulus`,
  `lem-complex-conjugation-and-modulus-laws`.
- Both D1 edges are live in `plan-spec.json` for page 287:
  `field-extensions-and-the-complex-numbers` (54) and
  `the-complex-exponential-and-eulers-formula` (189).

I recomputed the `requires` closure of 287 (64 pages) and checked **all 23**
external item dependencies: every one exists on disk, every one is
`status: published`, and every one is homed on a page inside the closure. No
out-of-closure citation, no missing file, no draft.

Alpha a's §D is correct and I did not redo it.

---

## What is right (checked, so it is not re-litigated downstream)

- **T10's four mandated forms are all present**, at the ids the design names:
  lattice/Kakutani–Krein (`thm-lattice-stone-weierstrass`), real algebra
  (`thm-real-stone-weierstrass-general`), nowhere-vanishing
  (`cor-real-stone-weierstrass-nowhere-vanishing-form`), complex self-adjoint
  (`thm-complex-stone-weierstrass-self-adjoint`), plus the quotient
  representation theorem. The disc-algebra counterexample is on the B page.
- **FA-18's named supplier is honoured.** `research/plan-functional-analysis-track.md`
  records that FA-18's commutative Gelfand–Naimark surjectivity waits on 287's
  complex self-adjoint theorem and that "the concrete published real
  compact-metric theorem is not strong enough". The scaffold mints
  `thm-complex-stone-weierstrass-self-adjoint` at exactly the id T10 reserves,
  with Erdman 21.2.14's statement. That consumer is safe.
- **Size: no split.** 16 A items, 6 B items. 16/60. I agree with the Beta that
  no split is warranted, and no mandated form was trimmed to reach 16 — the
  three items removed relative to the lost batch-2 scaffold (19 A items) are
  exactly the three D1 re-mints.
- **The compact-Hausdorff framing is right, and is not a generality loss.**
  Erdman 21.2.3/21.2.6/21.2.14 and Carlen 1.26/1.29 all say "compact
  topological space", so I checked whether the added Hausdorff hypothesis costs
  anything. It does not: a family of continuous real functions that separates
  the points of $X$ makes $X$ Hausdorff outright (disjoint reals pull back to
  disjoint opens), so on every separating theorem the hypothesis is redundant
  rather than restrictive. Carlen says so himself on p15. Berkeley 9.3/9.6 state
  it. Do not "fix" this.
- **The $x=y$ boundary of the sweep is already handled.**
  `lem-two-compact-cover-sweeps-for-function-lattices` says: *"When the later
  sweep encounters $x=y$, use the corresponding constant function rather than
  invoking this distinct-point lemma."* Carlen 1.27 quantifies over **every**
  $x,y$ including $x=y$, so this is the correct and necessary reconciliation.
- **The disc-algebra argument is mathematically sound as described.** With
  $\deg p=m$ and $N=m+2$, $\tfrac1N\sum_{k<N}\zeta^k p(\zeta^k)=0$ because
  $N\nmid(j+1)$ for $0\le j\le m$, while $\tfrac1N\sum_{k<N}\zeta^k\overline{\zeta^k}=1$;
  $|1-0|\le\lVert \bar z-p\rVert_\infty<1$ is the contradiction. Every
  evaluation point is on the unit circle. I checked it; it closes.
- **Carlen's analyticity proof is correctly *not* reused.** Carlen p19 proves the
  counterexample from "uniform limits of analytic functions are analytic", which
  is out of closure (complex analysis is order ≥ 289). The provenance row says
  the proof is rebuilt, and the harvest disposition is for the *result*. That is
  the honest handling.
- **The one decline is true and licensed** — see §"Declines checked against disk".
- **The three sources are live, are the documents claimed, and the harvest is
  faithful at the claimed locators** — see §"Harvest faithfulness".
- **No `ai-generated` Statement is load-bearing.** The four items carrying one
  (`prop-general-real-function-algebra-agrees-with-the-metric-definition` proof,
  `cor-self-adjoint-algebra-generated-by-a-separating-family-is-dense` proof,
  `ex-distance-function-lattice-is-dense-on-a-compact-metric-space` proof,
  `ex-finite-space-function-algebras-interpolate-exactly` statement **and**
  proof) appear in no other item's `deps`. Verified mechanically over the
  manifest. No A item cites a B item.
- **Gates, re-run independently by me:** `coverage-checklist` — 1 page, 27
  results, 0 errors, 0 warnings. `content-policy --manifest-only` — 22 scoped
  items, 0 errors, 0 warnings. Both match the Beta's reported results.
- **The Beta's citation-verbatim claim holds.** I independently re-checked all
  contract quotes against `items/*.md` with whitespace normalisation: every quote
  whose source is already published occurs verbatim. (Verbatim is not the same as
  faithful — see C9.)

---

## Findings

Numbered stably. Do not renumber.

### C1 — the complex items give ℂ no metric, though the item that supplies one is in closure

**Page 287 and 288.** `def-topology-of-uniform-convergence` is defined only for a
**metric** target $(Y,d)$. Every complex item on this pair speaks of $C(X,\mathbb C)$
and of uniform density in it, and nothing any of them cites makes ℂ a metric or
topological space:

- `def-self-adjoint-complex-function-algebra`
- `lem-real-part-of-a-self-adjoint-complex-function-algebra`
- `thm-complex-stone-weierstrass-self-adjoint`
- `cor-self-adjoint-algebra-generated-by-a-separating-family-is-dense`
- `cex-disc-algebra-is-not-dense-without-self-adjointness`
- `ex-trigonometric-polynomials-are-dense-on-the-circle`

The route the two B items use instead does **not carry the claim**.
`thm-complex-numbers-are-the-real-coordinate-plane`'s entire Statement is

> The map $\Phi:\mathbb C\to\mathbb R^2$, $\Phi(a+bi)=(a,b)$, is a bijection. Under it, $\Phi((a+bi)+(u+vi))=(a+u,b+v)$ and $\Phi((a+bi)(u+vi))=(au-bv,av+bu)$.

— a bijection and two arithmetic formulas, with `thm-complex-numbers-form-a-field`
as its only dep. It asserts nothing metric or topological, and it does not say
which representation of $\mathbb R^2$ the pair $(a,b)$ is (`lem-metrics-on-rn`
defines $\mathbb R^n$ as the set of *functions* $n\to\mathbb R$). Batch note 5 sees
half of this — it requires $|z-w|=d_2(\Phi z,\Phi w)$ to be derived — but that
derivation is itself unsupported by the cited item.

**What is missing, and where it is.**
`def-complex-metric-convergence-and-continuity` is published, homed on
`the-complex-exponential-and-eulers-formula` (order 189), and **in 287's closure**.
Its Definition reads:

> For $z=x+iy$ and $w=u+iv$, put $d_{\mathbb C}(z,w):=|z-w|=\sqrt{(x-u)^2+(y-v)^2}=\lVert(x-u,y-v)\rVert_2$. Under the identification $\mathbb C=\mathbb R^2$, this is exactly the metric $d_2$ induced by the Euclidean norm … It is a metric by `lem-p-norms-are-norms-and-induce-the-published-metrics`, so the metric axioms are established rather than assumed.

That is precisely both halves: ℂ is a metric space, and its metric is $d_2$ on
$\mathbb R^2$. The item that states the same thing more fully,
`rem-complex-plane-euclidean-dictionary`, is homed at order **303** and is a
forward reference — do not reach for it.

**Fix.** Add `def-complex-metric-convergence-and-continuity` to the deps of the
six items above. It replaces, rather than supplements,
`thm-complex-numbers-are-the-real-coordinate-plane` as the metric/compactness
bridge in the two B items; the coordinate-arithmetic formulas are not used by
either argument.
**Source:** the published item itself, `items/def-complex-metric-convergence-and-continuity.md`.

### C2 — metric compactness is never converted to topological compactness, and metric-⟹-Hausdorff is never cited

**Page 287 and 288.** `thm-heine-borel-rn` concludes compactness in the sense of
`def-metric-compactness` (page 120). Every theorem on the A page hypothesises
`def-compact-space` (page 255) **and Hausdorff**. Three items need the conversion
and none of them cites it:

- `cex-disc-algebra-is-not-dense-without-self-adjointness` (closed unit disc)
- `ex-trigonometric-polynomials-are-dense-on-the-circle` (unit circle)
- `ex-distance-function-lattice-is-dense-on-a-compact-metric-space` (compact
  metric space, applied to `thm-lattice-stone-weierstrass`, whose hypotheses are
  topological)

Both bridges are published and in closure:

- `thm-compactness-agrees-with-metric-compactness` (page 255) — *"$(X,d)$ is a
  compact metric space if and only if $(X,\mathcal T_d)$ is a compact topological
  space"*, with the subset clause.
- `thm-metric-hausdorff-separation` (page 116).

This is not a novel pattern for this run: the sibling batch already does it —
`prop-general-compact-open-topology-agrees-with-the-metric-definition` on page 285
cites `thm-compactness-agrees-with-metric-compactness` for exactly this purpose.

**The same gap sits in `prop-general-real-function-algebra-agrees-with-the-metric-definition`.**
Its deps are only the two definitions. But
`def-unital-separating-real-function-algebra` is stated on a *nonempty compact
metric* space with ambient
`def-continuous-real-functions-on-a-compact-metric-space` (page 169, in closure),
while `def-unital-separating-real-function-algebra-general` is on a compact
Hausdorff space with ambient `def-continuous-map-top`. The strategy compares the
algebra clauses one by one and never reconciles the two *ambient* spaces or the
two compactness notions. Its clause-by-clause comparison is correct as far as it
goes — I read both definitions on disk and the constant/linear/product/separation
clauses do match verbatim in content.

**Fix.** Add `thm-compactness-agrees-with-metric-compactness` and
`thm-metric-hausdorff-separation` to the three items above; add both plus
`def-continuous-real-functions-on-a-compact-metric-space` and
`thm-metric-continuity-characterisations` (page 116, in closure) to the dictionary
proposition, and extend its strategy to state the ambient reconciliation as a
step.
**Source:** all four are published items in 287's closure.

### C3 — the disc counterexample cannot obtain a primitive root, or the finite geometric identity, from anything it cites

**Page 288.** The averaging argument needs three things the item's deps do not
supply.

(a) **The roots as powers of one root.** `thm-complex-nth-roots-and-roots-of-unity`
enumerates the $n$th roots of unity as $\exp\!\big(i\,2\pi k/n\big)$ for
$0\le k<n$. It does **not** say they are $\zeta^0,\dots,\zeta^{n-1}$ for
$\zeta=\exp(2\pi i/n)$. That step is de Moivre —
`cor-complex-de-moivre-formula`, published on page 189, in closure, not cited.

(b) **Primitivity.** $\zeta^r\ne1$ for $1\le r<N$ is what makes
$\sum_{k<N}\zeta^{rk}=0$. Its supplier is
`thm-kernel-and-fibres-of-complex-exponential` — *"$\ker(\exp)=2\pi i\mathbb Z$,
and $\exp z=\exp w$ exactly when $z-w\in2\pi i\mathbb Z$"* — published on page
189, in closure, not cited.

(c) **The finite geometric identity.** The contract's single derivation lists
`"finite geometric identity"` and `"field algebra"` as free-text inputs with no
supplier. There is none: `thm-geometric-series` (page 127, in closure) is the
*infinite* real series $\sum r^k=1/(1-r)$ for $|r|<1$ and carries nothing about
$\sum_{k<N}x^k$. So $(x-1)\sum_{k<N}x^k=x^N-1$ is an inline induction and must be
written as numbered steps, not carried as an unnamed contract input.

**Fix.** Add `cor-complex-de-moivre-formula` and
`thm-kernel-and-fibres-of-complex-exponential` to
`cex-disc-algebra-is-not-dense-without-self-adjointness`; replace the two
free-text contract inputs with an explicit inline-derivation entry for the finite
geometric identity.
**Source:** both items are published on `the-complex-exponential-and-eulers-formula`,
in 287's closure.

### C4 — both primary sources carry a strictly stronger theorem than the nowhere-vanishing corollary, and it has no disposition

**Page 287.** Carlen states a **dichotomy**, not a nowhere-vanishing form.
Theorem 1.26 (p15, verbatim):

> Let $X$ be a compact topological space, and let $A$ be a subset of $C(X,\mathbb R)$ that is a separating algebra. Let $B$ be the uniform closure of $A$. Then either $B=C(X,\mathbb R)$, or else $B$ consists of all continuous functions on $X$ that vanish at some fixed point $x_0$. In particular, if $A$ contains the constant functions, $B=C(X,\mathbb R)$.

Theorem 1.29 (p19) is the identical dichotomy for separating $*$-algebras in
$C(X,\mathbb C)$.

The scaffold keeps only the consequence. The coverage row names Carlen 1.26
*"real Stone–Weierstrass theorem including the nowhere-vanishing form"* and
dispositions it `included` → `cor-real-stone-weierstrass-nowhere-vanishing-form`.
Carlen states no nowhere-vanishing form; that form is the immediate consequence of
the dichotomy (nowhere vanishing kills the second alternative), and **the
dichotomy itself is dropped with no coverage row at all**. The second alternative
is also well posed for free: if $A$ separates, a common zero is unique.

**Fix.** Add `thm-real-stone-weierstrass-dichotomy-for-separating-algebras`
stating Carlen 1.26 in full, with
`cor-real-stone-weierstrass-nowhere-vanishing-form` derived from it, and either a
$*$-algebra analogue or an explicit second clause of
`thm-complex-stone-weierstrass-self-adjoint`. Correct the harvest row's name and
add a row for the dichotomy.
**Source:** Carlen, `https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf`,
Theorem 1.26 (p15) and Theorem 1.29 (p19). Read from extracted text.

### C5 — the harvest maps Erdman 21.2.2 to an item that is not it, and the mis-mapping is carried into two provenance rows

**Page 287 and 288.** Erdman 21.2.2 (p174, verbatim):

> Let $X$ be a topological space. We will say that a family $F$ of continuous functions on $X$ possesses the **two-point duplication property with respect to a function** $f\in C(X)$ if for every pair of points $x\ne y$ in $X$ there exists $h\in F$ which agrees with $f$ at $x$ and $y$.

That is the interpolation hypothesis of 21.2.3 — a property of a family relative
to a target function. It is **not** a relation on the points of $X$ and it is not
an equivalence relation.

The coverage dispositions it `included` → `def-function-algebra-indistinguishability-quotient`.
The notes' provenance table then records that definition as `literature-derived`,
rationale *"Erdman 21.2.2's duplication relation expressed as the canonical
equivalence quotient"*, and records
`ex-two-point-duplication-algebra-and-its-quotient` as *"Erdman 21.2.2 and
21.2.15"*. Both rest on the same misreading, and the word "duplication" is being
carried across to a different concept.

The indistinguishability quotient has **no** source in this harvest. Its honest
backing is Erdman 21.2.15 — which supplies an *abstract* compact Hausdorff $Y$,
not the canonical quotient — and its honest label is `ai-altered`, which is
exactly what the row for `thm-closed-real-function-algebras-are-function-spaces-on-their-quotients`
already says. 21.2.2 belongs with
`lem-two-point-interpolation-for-a-separating-real-function-lattice`, alongside
21.2.5.

**Fix.** Re-point the 21.2.2 coverage row at
`lem-two-point-interpolation-for-a-separating-real-function-lattice`; give
`def-function-algebra-indistinguishability-quotient` an honest row against 21.2.15
and retag its provenance `ai-altered`; correct the
`ex-two-point-duplication-algebra-and-its-quotient` rationale.
**Source:** Erdman, `https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf`,
21.2.2 and 21.2.5 (p174–175). Read from extracted text.

### C6 — the lattice criterion is silently narrowed from the form both primary sources state

**Page 287.** Erdman 21.2.3 (p174, verbatim):

> **Theorem (Stone-Weierstrass theorem: lattice version).** Let $X$ be a compact topological space. If a sublattice $A$ of $C(X)$ has the two-point duplication property with respect to a function $f\in C(X)$, then $f\in\overline A$.

Carlen 1.27 (p16) is the same result in limit-point form. Neither requires the
sublattice to be unital, separating, or a vector space: the interpolation property
*is* the hypothesis, and the conclusion is about the single target $f$.

The scaffold's `lem-two-compact-cover-sweeps-for-function-lattices` deps on
`lem-two-point-interpolation-for-a-separating-real-function-lattice`, so it exists
only for a unital separating **vector** sublattice. The general criterion — which
is each source's own theorem, and therefore the best-backed statement available
for this page — is not scaffolded, and the harvest records 21.2.3 as `included`
in the *specialisation* `thm-lattice-stone-weierstrass`.

This also matters downstream: the general criterion is what makes C4's dichotomy
provable, because Carlen's second alternative is reached by applying the criterion
to a lattice that is not unital.

**Fix.** State the sweeps lemma at the sources' generality — a sublattice with the
two-point duplication property with respect to $f$ contains $f$ in its uniform
closure — mint `def-two-point-duplication-property` for the hypothesis (Erdman
21.2.2, which C5 frees up), and let `thm-lattice-stone-weierstrass` be the unital
separating specialisation it already is.
**Source:** Erdman 21.2.2–21.2.3 (p174); Carlen Lemma 1.27 (p16).

### C7 — Berkeley's printed Theorem 9.6 is false, the scaffold is right, and the divergence is unrecorded

**Page 287.** Berkeley Definition 9.4 (p28, verbatim):

> $S\subset C_{\mathbb R}(X)$ is called a lattice if for all $f,g\in S$, we can define $f\wedge g=\min\{f,g\}$ and $f\vee g=\max\{f,g\}$.

— closure under $\wedge,\vee$ only. Theorem 9.6 (p28, verbatim):

> **(Kakutani-Krein).** Suppose $X$ is compact and Hausdorff, and suppose $L\subset C_{\mathbb R}(X)$ is a lattice which is closed, separates points, with $1\in L$. Then $L=C_{\mathbb R}(X)$.

**As printed this is false.** Take $X=[0,1]$ and
$L=\{f\in C([0,1],\mathbb R): f(0)\le f(1)\}$. It is closed under $\wedge$ and
$\vee$ (both $\max$ and $\min$ preserve the inequality coordinatewise at the two
endpoints), uniformly closed (a uniform limit preserves $\le$), separating
(witness $f(t)=t$), and contains $1$. Yet $t\mapsto 1-t\notin L$, so
$L\ne C_{\mathbb R}([0,1])$. Berkeley's own proof silently uses two-point
interpolation — *"for $x,y\in X$, choose $f_{x,y}\in L$ with $f_{x,y}(x)=h(x)$
and $f_{x,y}(y)=h(y)$"* — which the printed hypotheses do not give.

**The scaffold is correct**: `def-separating-real-function-lattice` requires a
**vector** sublattice, and unital + separating + vector subspace does give
two-point interpolation (affine rescaling of a separator, which is what the
scaffold's interpolation lemma does). But the harvest maps Def 9.4 →
`def-separating-real-function-lattice` and Thm 9.6 → `thm-lattice-stone-weierstrass`
as plain `included`, and the notes' convention list records Carlen's codomain typo
and not this one. Under the citation-fidelity rule a source-strengthening is
exactly as reportable as a source-narrowing.

**Fix.** Add a convention-disagreement row, in the style of the existing note 1,
recording that the scaffold's lattice is a vector sublattice and that Berkeley's
printed Def 9.4/Thm 9.6 omit the hypothesis their proof uses. No mathematics
changes.
**Source:** Berkeley Math 205B,
`https://math.berkeley.edu/~moorxu/oldsite/notes/205b/205bmain.pdf`, p28. Read
from extracted text.

### C8 — no A-page `fs-` item, though T10's FS list owes one

**Page 287.** T10's FS block lists *"complex Stone-Weierstrass holds without
closure under conjugation"*. Page 283 built three of T10's five FS items
(`fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets`,
`fs-the-compact-open-topology-is-always-metrizable`,
`fs-the-evaluation-map-is-always-continuous`); the two remaining belong to 285 and
287. No `fs-` item exists on disk for either.

The scaffold covers the **mathematics** with the B-page
`cex-disc-algebra-is-not-dense-without-self-adjointness`, and the coverage
`canonical` block dispositions it that way (*"Failure of the complex theorem when
self-adjointness is omitted"* → `included`). What is absent is the A-page
false-statement form, which is the reader-facing tier and is citable, where a B
item is leaf-locked.

This is a judgment call and it is not mine — see §"Decisions that are not mine".
It does not gate the splice either way.

### C9 — contract citation quotes are excerpt fragments, not the cited propositions

**Page 287 and 288.** Every published quote is verbatim on disk (I re-checked all
23 independently). But several quote a bold clause label or an opening fragment,
which the house rule names explicitly: *"A clause's opening words are not a
citation."*

| item cited | quote as recorded | what is wrong |
|---|---|---|
| `thm-complex-nth-roots-and-roots-of-unity` | "Thus the $n$th roots of unity are precisely" | cut off before the formula — opening words only |
| `lem-compactness-of-a-subspace-is-ambient` | "Compactness read in the ambient space." | the bold clause label, not the clause |
| `lem-compactness-of-a-subspace-is-ambient` | "The same in indexed form." | the bold clause label, not the clause |
| `thm-compactness-under-continuous-maps` | "then $f[X]$ is a compact subset of $Y$." | begins mid-sentence; the continuity and compactness hypotheses are gone |
| `thm-heine-borel-rn` | "…if and only if $K$ is closed in $\mathbb{R}^n$" | drops "and bounded" — half the criterion |
| `def-topology-of-uniform-convergence` | "The whole content is the quantifier order: …" | quotes the commentary paragraph, not the definition |
| `lem-complex-conjugation-and-modulus-laws` | "$z\overline z=\|z\|^2" | truncated, unbalanced `$` |

At step 3 these are string edits in `proof-contracts.json`. Left alone they become
the authored `[F#]` facts at step 5, and a dependency restated more weakly or more
strongly than it reads is the largest fatal class in this library.

**Fix.** Rewrite each quote as the cited proposition — exact where practical,
else the smallest faithful shortening with no dropped hypothesis or conclusion.

### C10 — every contract has exactly one derivation step, so the input map checks nothing

**Page 287 and 288, advisory.** All 18 contracts have `derivations` of length 1
and `routine_steps` empty. The input map therefore covers every numbered step
exactly once by construction, and `proof-contract.mjs --strict` and
`boundary-audit.mjs --min-cluster 3` both pass while checking nothing about the
proof structure. Every `[F#]` fact lists `uses: ["1.1"]`.

The other half is genuine: the 144 boundary rows are individually written against
this pair's mathematics, and I found **no** repeated rationale across all 18
items — this is not the templated-`not_applicable` failure.

Not a step-3 blocker: the contracts are rewritten at step 5 against real numbered
steps. Recording it because the step-5 and step-6 runs will report green either
way, and the check that matters is whether the rewritten `derivations` array has
one entry per numbered proof step.

### C11 — the trigonometric-polynomial example uses negative powers and conjugation with no supplier

**Page 288.** Carlen 1.30's context (p20) defines a complex trigonometric
polynomial as $f(z)=\sum_{j=-n}^{n}a_jz^{j}$ — **negative** exponents. The
scaffold's strategy rewrites these as combinations of $z$ and $\bar z$, which on
the unit circle is right, because $z\bar z=|z|^2=1$ gives $\bar z=z^{-1}$.

But `ex-trigonometric-polynomials-are-dense-on-the-circle`'s deps carry neither
`def-complex-integer-powers` (which is what makes $z^{-j}$ mean anything) nor
`lem-complex-conjugation-and-modulus-laws` (which supplies $z\bar z=|z|^2$). Both
are published, both are in 287's closure, and both are already cited elsewhere in
this same batch.

**Fix.** Add both to that item's deps, and record the $\bar z=z^{-1}$ identity as
a step rather than an identification.
**Source:** Carlen p20, Theorem 1.30 and the paragraph defining $A$.

---

## Declines checked against disk

There is exactly **one** decline in the harvest, and it is true.

| decline | disposition | checked |
|---|---|---|
| Gelfand duality for commutative Banach and $C^*$-algebras | `out-of-scope`, `license_page: gelfand-theory-and-commutative-c-star-algebras` | **True and licensed.** The page id exists in `research/plan-spec.json` at order **288.081** with `items: []`, and `research/plan-functional-analysis-track.md` §FA-18 is that page. It is forward of 287, so 287 cannot cite it and the deferral direction is right. The stated reason (characters, spectra, Banach-algebra norms, $C^*$ structure) matches FA-18's own enumerated contents. This is a concrete page id, not "a functional-analysis track". |

There are no `deferred` rows at all, so there is no prose-only deferral of the
`frontier-13` kind.

The four `already-published` rows are the other class of "not built here", so I
checked each on disk as well. All four are published and all four are homed
**inside** 287's closure — this is the converse of the `frontier-13` failure, and
here the calls are correct:

| row | item | home page (order) | in closure |
|---|---|---|---|
| Erdman 21.2.7, Weierstrass approximation | `cor-weierstrass-approximation-on-a-closed-interval` | `approximation-and-compactness-in-ck` (171) | yes |
| complex field / coordinate-pair foundation | `thm-complex-numbers-form-a-field` | `field-extensions-and-the-complex-numbers` (54) | yes |
| conjugation and modulus laws | `lem-complex-conjugation-and-modulus-laws` | `field-extensions-and-the-complex-numbers` (54) | yes |
| finite roots-of-unity cancellation | `cor-sum-of-roots-of-unity` | `the-complex-exponential-and-eulers-formula` (189) | yes |

`cor-weierstrass-approximation-on-a-closed-interval` reads *"For $a\le b$, every
continuous real function on $[a,b]$ is a uniform limit of polynomials"* — the
$a\le b$ clause is on disk as the notes claim, and it covers both uses ($|t|$ on
$[-M,M]$ and $1/t$ on $[m,M]$).

---

## Harvest faithfulness

Checked by **extracting text**, not by fetching a URL. All three sources were
downloaded and parsed with `pypdf`; all three are the documents claimed and all
three returned real PDFs (Erdman 265 pp / 2.4 MB, Berkeley 57 pp / 605 KB, Carlen
21 pp / 291 KB). No bot wall.

| claimed locator | found |
|---|---|
| Erdman §21.2, items 21.2.1–21.2.7 and 21.2.13–21.2.15 | **all present**, pp174–175, at those exact numbers, with the claimed titles |
| Erdman 21.2.8–21.2.12 "outside the claimed range" | **honest** — they are Banach-algebra separability, two integral propositions and two exercises, genuinely a different topic |
| Berkeley Ch. 9, Thm 9.3 → Thm 9.6, incl. the remark after 9.3 | **all present**, p28. The remark reads *"We also have a complex version, with $B$ as before, but with another property: the space is closed under complex conjugation $B=\bar B$"* — the coverage row's description of it is accurate |
| Carlen §1.6, Thms 1.26–1.30, Lemmas 1.27–1.28, the self-adjoint definition, the unnumbered disc counterexample | **all present**, pp15–20, including the unnumbered counterexample on p19 and the $*$-algebra definition immediately before 1.29 |

The harvest is structurally complete **and** the named material really is at the
named locators. Where it is *not* faithful is in what the mapped items claim
relative to the source: C4 (a stronger theorem present and undispositioned), C5
(a heading mapped to a different notion), C6 (a source theorem narrowed), C7 (a
source hypothesis strengthened without record). Those are findings above, not
locator errors.

Convention note 1 (Carlen's Theorem 1.29 printing $C(X,\mathbb R)$ where the
statement is complex) is **confirmed on disk**: the printed text is *"In
particular, if $A$ contains the constant functions, $B=C(X,\mathbb R)$"* inside a
theorem about $C(X,\mathbb C)$. The scaffold's correction to $C(X,\mathbb C)$,
cross-checked against Erdman 21.2.14, is right.

---

## Split recommendation

**None.** `stone-weierstrass-general` has 16 items against the 60-item ceiling and
retains every form T10 mandates; `stone-weierstrass-general-examples` has 6.
Applying C4 and C6 adds at most three items and does not approach the ceiling. I
do not recommend a split, and the Beta was right not to propose one.

---

## Decisions that are not mine

**One, and it does not gate the splice.**

**C8 — whether page 287 mints the A-page `fs-` item T10's FS list names.**
The mathematics is covered either way by the B-page counterexample, which is
scaffolded and sound. The legitimate alternatives:

1. **Mint it** — `fs-complex-stone-weierstrass-holds-without-closure-under-conjugation`
   on the A page, witnessed by the disc (or circle) algebra, matching the house
   pattern of `fs-the-evaluation-map-is-always-continuous` on page 283. Cost: one
   A item, and the witness argument is already scaffolded for the B page.
2. **Record it as covered by the B-page counterexample** and add a `canonical`
   coverage row saying so explicitly, so the FS is dispositioned rather than
   silently absent.

Relevant context for whichever way it goes: **page 285 shipped in the same state.**
T10's FS list also owes *"Ascoli holds without equicontinuity"*, `ascoli-arzela`
has 19 spliced items and none is an `fs-`, and its B page carries
`cex-boundedness-does-not-replace-pointwise-relative-compactness` instead. Alpha a
did not raise it. So this is a consistent pattern across both batches of T10's
tail, and the orchestrator will probably want to settle 285 and 287 the same way
rather than one of them.

**This is recorded here so it cannot be resolved by dropping the page.** If no
decision is taken, alternative 2 is the default and the pair splices unchanged.

---

## What I could not check

- **The proofs.** None are written; per the brief I did not review them. Where I
  state that an argument closes (the disc averaging, the approximate unit, the
  quotient representation) I checked the *strategy* as described, not authored
  text.
- **Whether the step-5 authored text honours the notes' seven convention
  cautions.** Only the record exists at step 3. Note 7 in particular — that the
  scaffold will not copy the legacy applied-$\iota$ notation out of
  `thm-complex-nth-roots-and-roots-of-unity`'s Statement — is a real collision
  with `content-policy.mjs`'s batch-scoped `notation-iota-applied`, because that
  Statement reads $\iota_{\mathbb R}(k)$ and $\iota_{\mathbb R}(n)$ and a verbatim
  quote of it in an `[F#]` would trip the gate. The Beta has recorded the right
  handling; it can only be verified at step 5, and it interacts with C9's rewrite
  of that quote.
- **Item-level `validate-plan` on the live spec.** Page 287 still carries
  `items: []` in `research/plan-spec.json`, so the item-aware validation the Beta
  reports (an in-memory splice) cannot be reproduced from disk alone. I verified
  the manifest's 22 ids are unique, that no A item cites a B item, and that all 23
  external deps resolve to published items inside the closure, which is the part
  that matters at step 3.
- **`url-sweep.mjs --recover --fail-on-dead` on this batch's three URLs.** I
  verified liveness directly instead, by downloading and parsing each PDF, which
  is the stronger check. All three are live and readable.

---

## Re-check note for step 4

When the Beta returns, the cheap re-checks are:

1. `grep -c` the three D1 ids across the four artifacts — still 0.
2. The six items in C1 carry `def-complex-metric-convergence-and-continuity`.
3. The three items in C2 carry `thm-compactness-agrees-with-metric-compactness`
   and `thm-metric-hausdorff-separation`; the dictionary proposition carries the
   ambient bridges too.
4. `cex-disc-algebra-is-not-dense-without-self-adjointness` carries
   `cor-complex-de-moivre-formula` and
   `thm-kernel-and-fibres-of-complex-exponential`, and its contract no longer has
   free-text inputs.
5. New coverage rows exist for the Carlen dichotomy (C4) and the re-pointed
   Erdman 21.2.2 (C5); the quotient definition's provenance is `ai-altered`.
6. The seven quotes in C9's table are rewritten to the propositions.
7. Every new external dep re-checked for closure membership — the closure is 64
   pages and all four new suppliers (189, 255, 116, 169) are already in it, so
   no new `requires` edge is needed for any finding in this report.

**No finding in this report requires a new page edge, a new owner decision, or a
change to `plan-spec.json`.**
