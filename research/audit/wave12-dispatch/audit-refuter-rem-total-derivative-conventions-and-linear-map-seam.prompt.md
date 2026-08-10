# Audit proof-refuter brief — Wave 12, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** You are read-only and
> tool-less. Do not ask for shell or edit permission. Everything available to
> you is reproduced in the dispatch task.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as
an independent adversarial proof-refuter. Return evidence only; Audit-Alpha
alone adjudicates and edits.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the target's title, complete public statement, Facts & Assumptions, every
numbered proof/refutation/verification step, and Remarks. Try to falsify every
load-bearing inference. Before alleging that a cited dependency is too weak,
compare the exact current supplied dependency: domain, hypotheses, quantifiers,
direction, conclusion, boundary cases, and conventions. Check biconditionals,
existence/uniqueness, recursion/induction, limits, index shifts, empty/zero/one/
endpoint/degenerate cases, hidden division, hidden choice, and false Remarks.
For an `ai-generated` Statement or consumer, actively search for a
counterexample or a failure in the witness or cited generated premise. A false
public claim, invalid proof, missing necessary hypothesis, circularity, or
materially inaccurate load-bearing citation is fatal; a quickly closable gap is
nonfatal.

Return no more than 450 words, exactly in this shape:

```text
VERDICT: CLEAN | DEFECTS
```

For each defect:

```text
FINDING 1
  location: [exact section/fact/step]
  severity: fatal | nonfatal
  claim:    [exact assertion]
  evidence: [counterexample, invalid inference, or exact source mismatch]
```

Always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm title, public claim, every numbered step, and Remarks]
```


---

# This dispatch

## Selection reasons

- logical consumer of generated-risk seed rem-rn-conventions-and-scope
- direct-citation consumer of generated-risk seed rem-rn-conventions-and-scope

## Target item — `rem-total-derivative-conventions-and-linear-map-seam`

Normalized current SHA-256: `4c211efafe04f7480c8b25cb61f69fb9d21a19abf067ec5760ce68c1f4a99136`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: rem-total-derivative-conventions-and-linear-map-seam
kind: remark
title: "Dimension, openness, norm, Jacobian, and the native Euclidean linear-map agreement seam"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [rem-rn-conventions-and-scope, def-euclidean-linear-map, def-total-derivative-in-euclidean-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

The derivative definition is stated on open Euclidean domains so every sufficiently small increment is admissible. Its remainder uses the Euclidean norm; in finite-dimensional Euclidean spaces an equivalent norm would give the same differentiability notion, but that change is not part of this definition.

The linear-map definition on this page is deliberately the concrete Euclidean special case identified in [[rem-rn-conventions-and-scope]]. A future general linear-map development must prove agreement with [[def-euclidean-linear-map]], not silently replace the meaning of $Df(a)$.
````

## Wave 12 provenance row

```json
null
```

## Exact-current proof contract

No Wave 12 proof contract is required for this target.

## Generated audit-manifest relationships

```json
[]
```

## Relevant current generated-risk rows

```json
[
  {
    "id": "rem-rn-conventions-and-scope",
    "file": "items/rem-rn-conventions-and-scope.md",
    "source": "provenance",
    "cone_size": 7,
    "logical_consumers": [
      "rem-total-derivative-conventions-and-linear-map-seam"
    ],
    "direct_citation_consumers": [
      {
        "id": "cex-the-one-norm-comes-from-no-inner-product",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "def-euclidean-inner-product",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "def-norm-and-normed-space",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "ex-gamma-and-its-complement-computed-for-a-plane-series",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "rem-total-derivative-conventions-and-linear-map-seam",
        "via": [
          "deps",
          "wikilink"
        ]
      },
      {
        "id": "thm-absolute-convergence-in-rn",
        "via": [
          "wikilink"
        ]
      },
      {
        "id": "thm-rearrangement-sums-lie-in-an-affine-subspace",
        "via": [
          "wikilink"
        ]
      }
    ],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  }
]
```

## Full exact-current text of every cited or declared item (3)

### `def-euclidean-linear-map`

````markdown
---
id: def-euclidean-linear-map
kind: definition
title: "A linear map $L:\\mathbb{R}^m\\to\\mathbb{R}^n$ in Euclidean coordinates"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Definition

Let $m,n\ge1$. A map $L:\mathbb R^m\to\mathbb R^n$ is **linear** when

$$L(\alpha u+\beta v)=\alpha L(u)+\beta L(v)$$

for all $u,v\in\mathbb R^m$ and all $\alpha,\beta\in\mathbb R$. Both spaces carry their Euclidean vector-space operations and Euclidean norms from [[def-euclidean-inner-product]].

## Remarks

This is the concrete Euclidean notion required for total differentiation. It makes no assertion about linear maps between arbitrary vector spaces.
````

### `def-total-derivative-in-euclidean-space`

````markdown
---
id: def-total-derivative-in-euclidean-space
kind: definition
title: "The total (Fréchet) derivative $Df(a)$ as the linear first-order approximation with $o(\\|h\\|_2)$ remainder"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-euclidean-linear-map, def-norm-and-normed-space, def-vector-valued-functions-limits-and-continuity, def-metric-topology]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb R^m$ be open, let $a\in U$, and let $f:U\to\mathbb R^n$. The map $f$ is **totally differentiable at $a$** when there is a linear map $L:\mathbb R^m\to\mathbb R^n$ ([[def-euclidean-linear-map]]) such that

$$\lim_{h\to0}\frac{\|f(a+h)-f(a)-Lh\|_2}{\|h\|_2}=0,$$

where the quotient is considered for $h\ne0$ with $a+h\in U$. The map $L$, when it exists, is denoted $Df(a)$ and called the **total derivative**. Equivalently, $f(a+h)=f(a)+Df(a)h+r(h)$ with $\|r(h)\|_2/\|h\|_2\to0$.
````

### `rem-rn-conventions-and-scope`

````markdown
---
id: rem-rn-conventions-and-scope
kind: remark
title: "Conventions of this page, the standing $n \\ge 1$ hypothesis, and what is taken up elsewhere in the reading order"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-norm-and-normed-space, def-linear-map, def-euclidean-inner-product, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-cauchy-schwarz-and-the-euclidean-norm, def-equivalent-norms, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-all-norms-on-rn-are-equivalent, thm-componentwise-convergence-and-completeness, cor-bolzano-weierstrass-in-rn, def-vector-valued-functions-limits-and-continuity, thm-componentwise-limits-and-continuity, def-vector-valued-derivative-and-integral, thm-norm-inequality-for-the-vector-valued-integral, thm-mean-value-inequality, cor-vector-valued-ftc-and-lipschitz-bound, def-series-of-vectors-and-rearrangement, thm-absolute-convergence-in-rn, def-the-space-of-summing-directions, thm-steinitz-polygonal-confinement, thm-rearrangement-sums-lie-in-an-affine-subspace, lem-metrics-on-rn, rem-real-exponents-deferred, def-function-space, def-rational-power, lem-standard-basis-of-f-n, thm-euclidean-space-complete, thm-heine-borel-rn, thm-minkowski-finite]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Levy-Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
pipeline_run: null
---

## 1. The standing hypothesis $n \ge 1$, and exactly where it comes from

The published [[lem-metrics-on-rn]] defines $\mathbb{R}^{n}$ together with the
metrics $d_1$, $d_2$, $d_\infty$ **only for $n \ge 1$**, and says why: at $n = 0$
the value $d_\infty(x,y)$ would be a maximum over the empty index set, which does
not exist. Everything downstream of that item inherits the hypothesis, and this
page inherits it too. In particular [[thm-euclidean-space-complete]] and
[[thm-heine-borel-rn]] are stated for $n \ge 1$ and **are never cited here for
all $n$**.

**The boundary runs between the algebra and the metric, not where a reader would
guess.** The following items of this page carry no hypothesis on the dimension:

- [[def-norm-and-normed-space]] — including the observation that the zero space
  carries exactly one norm;
- [[def-euclidean-inner-product]], whose sum is the empty sum at $n = 0$;
- [[thm-cauchy-schwarz-and-the-euclidean-norm]], all four of whose clauses hold
  for every $n$, apart from the closing sentence of clause 2 identifying the
  induced metric with $d_2$;
- [[def-equivalent-norms]], which is about an arbitrary real vector space;
- clause 1 of [[lem-p-norms-are-norms-and-induce-the-published-metrics]], that
  each $\lVert\cdot\rVert_p$ with rational $p \ge 1$ is a norm;
- clause 1 of [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]],
  the finite and reverse triangle inequalities for a norm on any real vector
  space.

The remaining items all carry $n \ge 1$ (or $m \ge 1$ for the codomain of a
vector-valued function), and each states it in its own Statement:
[[def-p-norms-on-rn]] for $\lVert\cdot\rVert_\infty$; clauses 2 and 3 of
[[lem-p-norms-are-norms-and-induce-the-published-metrics]]; clauses 2, 3, 4 of
[[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]];
[[thm-all-norms-on-rn-are-equivalent]];
[[thm-componentwise-convergence-and-completeness]];
[[cor-bolzano-weierstrass-in-rn]];
[[def-vector-valued-functions-limits-and-continuity]];
[[thm-componentwise-limits-and-continuity]];
[[def-vector-valued-derivative-and-integral]];
[[thm-norm-inequality-for-the-vector-valued-integral]];
[[thm-mean-value-inequality]];
[[cor-vector-valued-ftc-and-lipschitz-bound]];
[[def-series-of-vectors-and-rearrangement]];
[[thm-absolute-convergence-in-rn]];
[[def-the-space-of-summing-directions]];
[[thm-steinitz-polygonal-confinement]]; and
[[thm-rearrangement-sums-lie-in-an-affine-subspace]].

Where a statement about $n = 0$ is nevertheless true, it is proved here from
scratch rather than imported: see the second remark of
[[thm-componentwise-convergence-and-completeness]] for completeness of
$\mathbb{R}^{0}$.

## 2. The exponent of a $p$-norm is rational

[[def-rational-power]] supplies $a^{r}$ for a nonnegative base and a **rational**
exponent, and real exponents do not exist at this point in the reading order;
[[rem-real-exponents-deferred]] records why. Consequently
[[def-p-norms-on-rn]] defines $\lVert\cdot\rVert_p$ for rational $p \ge 1$ only,
and the published Minkowski inequality it rests on is itself stated for rational
$p$. **No statement on this page is written with $p$ ranging over a real
interval**, and the phrase "for $p \in [1,\infty)$" appears nowhere.

## 3. $\mathbb{R}^{n}$ is a function space

$\mathbb{R}^{n}$ is the set of functions $n \to \mathbb{R}$
([[def-function-space]], [[lem-metrics-on-rn]]), so $\mathbb{R}^{1}$ is **not
literally** $\mathbb{R}$: its elements are functions on the one-element set $1$.
Every comparison on this page between the theory in $\mathbb{R}^{n}$ and the
published one-dimensional theory therefore goes through the isometric bijection
$\theta : \mathbb{R} \to \mathbb{R}^{1}$ sending $t$ to the function with value
$t$ at $0$, and each item that makes such a comparison states the identification
explicitly: [[cor-bolzano-weierstrass-in-rn]],
[[def-vector-valued-functions-limits-and-continuity]],
[[def-series-of-vectors-and-rearrangement]] and
[[thm-rearrangement-sums-lie-in-an-affine-subspace]]. Coordinates are indexed
from $0$ throughout, as [[lem-standard-basis-of-f-n]] fixes.

## 4. What is taken up elsewhere in the reading order

Each item below is a statement about **where material sits in this library's
reading order**, and none of them is a claim about mathematics that this library
denies.

- **Linear maps, the operator norm, and "a linear map between finite-dimensional
  normed spaces is Lipschitz".** Abstract linear maps are defined on the earlier
  linear-algebra page in [[def-linear-map]]. This page neither defines an
  operator norm nor proves that every linear map between finite-dimensional
  normed spaces is Lipschitz. The later total-derivative treatment uses a
  concrete Euclidean formulation; identifying that formulation with the
  abstract definition requires an explicit agreement argument rather than a
  second silent meaning of "linear map".
- **Inner product spaces and orthogonality.** [[def-euclidean-inner-product]]
  defines the concrete Euclidean form on $\mathbb{R}^{n}$ and claims nothing
  about abstract inner product spaces: orthonormal bases, Gram-Schmidt,
  orthogonal projection, orthogonal complements of arbitrary subspaces and the
  decomposition $V = W \oplus W^{\perp}$ all belong to a page earlier in the plan
  order that is not yet built. **In particular nothing on this page asserts that
  $\mathbb{R}^{n}$ is the direct sum of $\Gamma$ and $\Gamma^{\perp}$**
  ([[def-the-space-of-summing-directions]]).
- **Uniform convergence, the total derivative, and integration over subsets of
  $\mathbb{R}^{n}$** all come later in this track.
- **The classical mean value witness.** The crispest counterexample to the
  equality form of the mean value theorem for vector-valued functions is
  $t \mapsto (\cos t, \sin t)$ on $[0,2\pi]$. The trigonometric functions are
  introduced later in the reading order than this page, so the companion page
  uses the polynomial curve $t \mapsto (t^{2},t^{3})$ on $[0,1]$ instead. The
  substitution is recorded in the companion item that carries the witness, not
  here, so that a reader meeting the polynomial curve is told at once why the
  classical one is absent; the theorem whose equality form it refutes is
  [[thm-mean-value-inequality]].

## 5. The open half of the rearrangement question

[[thm-rearrangement-sums-lie-in-an-affine-subspace]] proves that the set
$\mathcal{S}(x)$ of rearrangement sums of a convergent series in $\mathbb{R}^{n}$
is nonempty and **contained in** the affine subspace $s + \Gamma^{\perp}$, and
[[thm-steinitz-polygonal-confinement]] proves Steinitz's polygonal confinement
lemma in full. **The reverse inclusion is not proved on this page, and this page
asserts nothing about it in either direction, for any $n \ge 2$.** No
recorded-not-proved item has been created for it either.

The obstruction is machinery and not effort. Every route to the reverse inclusion
known to the author of this page reduces first to the case $\Gamma = \{0\}$ by an
orthogonal projection, which needs the orthogonal decomposition named in §4, and
then runs a separation argument for convex sets in $\mathbb{R}^{n}$, which
exists nowhere in this library and is owned by no planned page. When both exist,
the discharge is an **addition to this page**, not a new page.

The published [[rem-rearrangement-in-higher-dimensions]] raised this question on
the series page and declined to state what the literature answers; this page
answers the part it can and continues to decline the rest. What a reader is
protected from meanwhile is the wrong guess: the companion page refutes outright
the naive $\mathbb{R}^{n}$ analogue of the Riemann series theorem, using the
containment half and nothing more.

## 6. A naming collision worth stating once

[[thm-steinitz-polygonal-confinement]] is Steinitz's polygonal confinement lemma
from his 1913 paper on conditionally convergent series. It is **not** the
Steinitz exchange lemma of linear algebra, which is published in this library
under the id `thm-steinitz-exchange` and additionally carries the alias
`lem-steinitz`. The two are different theorems by the same author; the ids do not
collide, and no item on this page uses the bare alias.
````

