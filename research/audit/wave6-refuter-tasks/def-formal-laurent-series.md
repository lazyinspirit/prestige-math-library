## Target item — `def-formal-laurent-series`

Normalized current SHA-256: `967d86f2feac6ed6e0614674301f61454a7949511df1f36f38b60cc55c90d8cf`

The complete current item follows, including frontmatter:

````markdown
---
id: def-formal-laurent-series
kind: definition
title: "The formal Laurent series $\\mathbb{R}((t^{-1}))$: support bounded below, valuation, leading coefficient"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, thm-reals-ordered-field, def-integers, def-int-order, def-int-operations, thm-int-ordered-ring, def-field, def-ordered-field]
justified_by: [lem-laurent-series-ring, thm-laurent-series-field, thm-laurent-ordered-field]
aliases: []
landmark: true
short: "$\\mathbb{R}((t^{-1}))$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "B. Sambale, An invitation to formal power series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the field of real numbers with its order
([[def-real-numbers]], [[thm-reals-ordered-field]]) and $\mathbb{Z}$ is the
totally ordered commutative ring of integers ([[def-integers]],
[[def-int-operations]], [[def-int-order]], [[thm-int-ordered-ring]]).

For a function $f : \mathbb{Z} \to \mathbb{R}$ write

$$\operatorname{supp} f \;:=\; \{\, k \in \mathbb{Z} : f(k) \ne 0 \,\},$$

and say that $\operatorname{supp} f$ is **bounded below** when there is
$m \in \mathbb{Z}$ with $f(k) = 0$ for every $k < m$. The set of **formal Laurent
series in $t^{-1}$ over $\mathbb{R}$** is

$$K \;=\; \mathbb{R}((t^{-1})) \;:=\; \{\, f : \mathbb{Z} \to \mathbb{R} \;\mid\; \operatorname{supp} f \text{ is bounded below} \,\},$$

equipped with

$$(f + g)(k) := f(k) + g(k), \qquad (fg)(k) := \sum_{i + j = k} f(i)\,g(j),$$

where the product sum ranges over the pairs $(i,j) \in \mathbb{Z} \times
\mathbb{Z}$ with $i + j = k$ and $f(i)g(j) \ne 0$. That set of pairs is finite
for every $k$, and $f + g$ and $fg$ again lie in $K$: this is
[[lem-laurent-series-ring]], which also proves that $K$ with these operations is
a commutative ring whose zero $0_K$ is the constant function $0$ and whose
identity $1_K$ is the function taking the value $1$ at $0$ and $0$ elsewhere.

**Distinguished elements.** For $n \in \mathbb{Z}$ let $t^{-n} \in K$ be the
function taking the value $1$ at $n$ and $0$ at every other index; so
$t^{0} = 1_K$, and $t := t^{-(-1)}$ is the function taking the value $1$ at $-1$.
For $c \in \mathbb{R}$ let $\iota(c) \in K$ be the function taking the value $c$
at $0$ and $0$ elsewhere. The notation $t^{-n}$ is *defined* here as a name;
that it is consistent with the ring multiplication, $t^{-m} \, t^{-n} =
t^{-(m+n)}$, is proved in [[lem-laurent-series-ring]].

**Series notation.** Because $\operatorname{supp} f$ is bounded below, say by
$m$, one writes

$$f \;=\; \sum_{k \ge m} f(k)\, t^{-k},$$

a purely notational device: the object is the function $f$, and no convergence
of any kind is asserted or used.

**Valuation and leading coefficient.** Let $f \in K$ with $f \ne 0_K$. Then
$\operatorname{supp} f$ is nonempty and bounded below, so it has a least element
([[lem-laurent-series-ring]]). Define

$$v(f) \;:=\; \min \operatorname{supp} f \in \mathbb{Z}, \qquad \operatorname{lc}(f) \;:=\; f(v(f)) \in \mathbb{R} \setminus \{0\}.$$

$v(f)$ is the **valuation** and $\operatorname{lc}(f)$ the **leading
coefficient** of $f$. Neither is defined at $f = 0_K$, whose support is empty;
every statement about $v$ or $\operatorname{lc}$ in this library carries the
hypothesis $f \ne 0_K$ explicitly.

**Order.** The **positive cone** of $K$ is

$$P \;:=\; \{\, f \in K : f \ne 0_K \text{ and } \operatorname{lc}(f) > 0 \,\},$$

that is, a nonzero series is positive exactly when its lowest-index nonzero
coefficient is a positive real. That $(K, P)$ is an ordered field
([[def-ordered-field]], [[def-field]]) is [[thm-laurent-ordered-field]], and
that every nonzero element of $K$ is invertible is
[[thm-laurent-series-field]]. As in any ordered field, $f < g$ means
$g - f \in P$.

## Remarks

- **Why the support must be bounded below.** It is exactly what makes the
  product a finite sum. If arbitrary functions $\mathbb{Z} \to \mathbb{R}$ were
  admitted, the defining sum for $(fg)(k)$ would range over an infinite set of
  pairs and would denote nothing, since $K$ carries no notion of convergence.
  The condition is preserved by both operations, which is the content of
  [[lem-laurent-series-ring]].

- **Indices run over all of $\mathbb{Z}$, and the edge cases are real.** The zero
  series has empty support and no valuation. A nonzero constant series
  $\iota(c)$ has $v(\iota(c)) = 0$ and $\operatorname{lc}(\iota(c)) = c$, so the
  index $k = 0$ is an ordinary index and not a boundary. Negative indices are
  admitted, and they are what makes $t = t^{-(-1)}$, whose support is $\{-1\}$,
  an element of $K$; a series may have finitely many terms of negative index but
  never infinitely many.

- **The order is not the coefficientwise order.** Two series are compared by
  their *lowest* differing coefficient, not by all of them at once, and this is
  what makes $t^{-1}$ smaller than every positive real constant while $t$ is
  larger than every real constant. The consequences are drawn in
  [[lem-laurent-non-archimedean]].

- **Relation to the rational functions.** The ordered field $\mathbb{R}(t)$ of
  [[cex-ordered-field-not-archimedean]], ordered so that $f > 0$ exactly when
  $f(x) > 0$ for all sufficiently large real $x$, is the standard first example
  of a non-Archimedean ordered field, and standard treatments identify it with a
  subfield of $K$ by expanding each rational function at infinity. **This page
  neither constructs that identification nor uses it**, and no item here may be
  cited for it: everything proved about $K$ below is proved from the definition
  above and nothing else. What the two objects share, and all that is used here,
  is the idea of ordering by behaviour at infinity.
````

## Proof contract for the target

No proof contract is required for this non-proof-bearing item.

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "def-formal-laurent-series",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-real-numbers",
    "declared_target": "def-real-numbers",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-formal-laurent-series",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "thm-reals-ordered-field",
    "declared_target": "thm-reals-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-formal-laurent-series",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-integers",
    "declared_target": "def-integers",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-formal-laurent-series",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-int-order",
    "declared_target": "def-int-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-formal-laurent-series",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-int-operations",
    "declared_target": "def-int-operations",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-formal-laurent-series",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "thm-int-ordered-ring",
    "declared_target": "thm-int-ordered-ring",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-formal-laurent-series",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-field",
    "declared_target": "def-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-formal-laurent-series",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "def-formal-laurent-series",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "lem-laurent-series-ring",
    "declared_target": "lem-laurent-series-ring",
    "target_statement_provenance": null,
    "targetPage": "formal-laurent-series-field",
    "targetBatch": "wave6-real-analysis-laurent",
    "edge_type": "well_definedness_discharge",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "def-formal-laurent-series",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "thm-laurent-series-field",
    "declared_target": "thm-laurent-series-field",
    "target_statement_provenance": null,
    "targetPage": "formal-laurent-series-field",
    "targetBatch": "wave6-real-analysis-laurent",
    "edge_type": "well_definedness_discharge",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "def-formal-laurent-series",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "thm-laurent-ordered-field",
    "declared_target": "thm-laurent-ordered-field",
    "target_statement_provenance": null,
    "targetPage": "formal-laurent-series-field",
    "targetBatch": "wave6-real-analysis-laurent",
    "edge_type": "well_definedness_discharge",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (13)

### `cex-ordered-field-not-archimedean`

````markdown
---
id: cex-ordered-field-not-archimedean
kind: counterexample
title: "Not every ordered field is Archimedean"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ordered-field, def-archimedean-field, thm-of-archimedean, thm-reals-ordered-field]
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Non-Archimedean ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Non-Archimedean_ordered_field"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every ordered field is Archimedean, that is, in every ordered
field $F$ each $x \in F$ satisfies $x < n \cdot 1_F$ for some natural number $n$.

The witness is $\mathbb{R}(t)$, the field of rational functions over $\mathbb{R}$,
ordered so that $f > 0$ exactly when $f(x) > 0$ for all sufficiently large real
$x$. In this ordered field the element $t$ exceeds every canonical natural
number, so the naturals are not cofinal.

## Facts & Assumptions

**Given:** $\mathbb{R}(t)$, the field of fractions of the polynomial ring $\mathbb{R}[t]$, and the set $P = \{f \in \mathbb{R}(t) : f \ne 0 \text{ and } f(x) > 0 \text{ for all sufficiently large real } x\}$.

[L1] An ordered field is a field with a positive cone $P$ satisfying trichotomy (for each nonzero $x$, exactly one of $x \in P$, $-x \in P$) and closure of $P$ under addition and multiplication; then $a < b$ means $b - a \in P$ ([[def-ordered-field]]).

[L2] An ordered field $F$ is Archimedean when for every $x \in F$ there is a natural number $n$ with $x < n \cdot 1_F$, equivalently the canonical naturals $n \cdot 1_F$ are cofinal ([[def-archimedean-field]]).

[L3] Every complete ordered field is Archimedean ([[thm-of-archimedean]]).

[L4] $\mathbb{R}$ is a totally ordered field ([[thm-reals-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $f=p/q\ne0$, where $p(x)=a_mx^m+\cdots+a_0$ and $q(x)=b_nx^n+\cdots+b_0$ have nonzero leading coefficients. For $x>1$, dividing by the leading terms gives $p(x)=a_mx^m(1+\sum_{i<m}(a_i/a_m)x^{i-m})$ and the analogous formula for $q$. If $x$ is larger than $1$ plus the sums of the absolute values of the lower coefficient ratios, then both lower-term sums have absolute value less than $1$. Thus $p(x)$ and $q(x)$ eventually have the signs of $a_m$ and $b_n$, respectively, and $f(x)$ has the constant nonzero eventual sign of $a_m/b_n$. Hence exactly one of $f\in P$ and $-f\in P$ holds. [given, L4, algebra]

1.2 If $f, g \in P$ then $f(x) > 0$ and $g(x) > 0$ for all large $x$, so $(f + g)(x) > 0$ and $(fg)(x) > 0$ for all large $x$, giving $f + g \in P$ and $fg \in P$. [given, algebra]

1.3 For each natural number $n$ the rational function $t - n \cdot 1 = t - n$ satisfies $(t - n)(x) = x - n > 0$ for all $x > n$, so $t - n \in P$. [given, algebra]

2.1 By the trichotomy of step 1.1 and the closure of step 1.2, $P$ is a positive cone, so $\mathbb{R}(t)$ is an ordered field. [step 1.1, step 1.2, L1]

2.2 By step 1.3, $t - n \cdot 1 \in P$ for every natural $n$, which by [L1] means $n \cdot 1 < t$ for every natural $n$. [step 1.3, L1]

3.1 In the ordered field $\mathbb{R}(t)$ the element $t$ satisfies $n \cdot 1 < t$ for every natural $n$ (step 2.2), so no natural $n$ has $t < n \cdot 1$; the canonical naturals are not cofinal and $\mathbb{R}(t)$ is not Archimedean, refuting the claim that every ordered field is Archimedean. [step 2.1, step 2.2, L2]

4.1 This is consistent with [L3], whose contrapositive states that a non-Archimedean ordered field cannot be complete: $\mathbb{R}(t)$ is an ordered field that is not complete. [step 3.1, L3] ∎
````

### `def-field`

````markdown
---
id: def-field
kind: definition
title: "Field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
justified_by: [lem-of-inverse-unique]
aliases: []
landmark: false
short: "field"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-28
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "Elias Zakon, Mathematical Analysis: Axioms and Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.01%3A_Axioms_and_Basic_Definitions"
pipeline_run: null
---

## Definition

A **field** is a set $F$ equipped with two binary operations $+$ (addition) and
$\cdot$ (multiplication) and two distinguished elements $0 \ne 1$ of $F$,
satisfying:

- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is
  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an
  additive inverse $-x$ with $x + (-x) = 0$.
- **(M)** Multiplication is associative and commutative **on all of $F$**, and
  $x \cdot 1 = x$ for every $x \in F$; moreover $(F \setminus \{0\}, \cdot)$ is an
  abelian group with identity $1$, so every $x \ne 0$ has a multiplicative inverse
  $x^{-1}$ with $x \cdot x^{-1} = 1$.
- **(D)** Multiplication distributes over addition: $x \cdot (y + z) = x\cdot y + x\cdot z$.

We write $x - y := x + (-y)$ and $x/y := x \cdot y^{-1}$ (for $y \ne 0$), and
abbreviate $x \cdot y$ as $xy$.

## Remarks

- The rationals $\mathbb{Q}$ ([[thm-rat-field]]) and both constructions of the
  reals ([[thm-reals-field]], [[thm-reals-dedekind-field]]) are fields. This
  definition states the field axioms once, abstractly, so that every field fact
  proved from them applies to all of these at once.
- The requirement $0 \ne 1$ excludes the trivial one-element structure.
- **Why (M) quantifies over all of $F$ explicitly** (amended 2026-07-28, owner
  approved). An earlier wording headed (M) with the group
  $(F \setminus \{0\}, \cdot)$ alone, and under that strict reading the axioms
  do not pin down the products $0 \cdot y$: take $\mathbb{F}_2$ and redefine
  $0 \cdot y := y$, which leaves (A) untouched, leaves
  $(F \setminus \{0\}, \cdot)$ the trivial group, and satisfies (D) in all eight
  instances, yet has $0 \cdot 1 = 1$ — making [[lem-of-zero-mult]] false in a
  purported model of the axioms. Associativity, commutativity and
  $x \cdot 1 = x$ are therefore asserted on **all** of $F$, the element $0$
  included. Commutativity on all of $F$ is also what turns (D) into its
  right-hand form $(y + z) \cdot x = y \cdot x + z \cdot x$, which
  [[lem-of-zero-mult]] uses.
- The identities $0, 1$ and the inverses $-x, x^{-1}$ are unique
  ([[lem-of-inverse-unique]]), so writing them as single-valued notation, and
  the abbreviations $x - y := x + (-y)$ and $x/y := x y^{-1}$, are legitimate.
````

### `def-int-operations`

````markdown
---
id: def-int-operations
kind: definition
title: "Arithmetic on the integers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integers, def-nat-addition, def-nat-multiplication]
justified_by: [lem-int-add-well-defined, lem-int-mul-well-defined]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Definition

On $\mathbb{Z}$ ([[def-integers]]) define, on representatives,

$$[(a,b)] + [(c,d)] := [(a+c,\; b+d)],$$
$$[(a,b)] \cdot [(c,d)] := [(ac+bd,\; ad+bc)],$$
$$-[(a,b)] := [(b,a)], \qquad 0 := [(0,0)], \qquad 1 := [(1,0)].$$

These do not depend on the chosen representatives
([[lem-int-add-well-defined]], [[lem-int-mul-well-defined]]).

## Remarks

- The product formula is forced by the intended meaning: if $(a,b)$ stands for
  $a-b$ and $(c,d)$ for $c-d$, then $(a-b)(c-d) = (ac+bd) - (ad+bc)$.
- Negation swaps the components: $-(a-b) = b-a$.
````

### `def-int-order`

````markdown
---
id: def-int-order
kind: definition
title: "Order on the integers"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-integers]
justified_by: [thm-int-ordered-ring]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Definition

For integers $x = [(a,b)]$ and $y = [(c,d)]$ ([[def-integers]]) define

$$x \le y \iff a + d \le b + c \quad \text{in } \mathbb{N}.$$

Write $x < y$ when $x \le y$ and $x \ne y$. An integer $x$ is **positive**
when $0 < x$; on representatives, $0 < [(a,b)]$ exactly when $b < a$.

## Remarks

- The defining inequality is "$a - b \le c - d$" restated without subtraction.
- Well-definedness, totality, and compatibility with the arithmetic are proved
  in [[thm-int-ordered-ring]].
````

### `def-integers`

````markdown
---
id: def-integers
kind: definition
title: "The integers as equivalence classes of pairs of naturals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-numbers, def-nat-addition]
justified_by: [lem-int-equivalence]
aliases: []
landmark: true
short: "ℤ"
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://archive.org/details/foundationsofana0000land"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Definition

On the set $\mathbb{N} \times \mathbb{N}$ of pairs of natural numbers, define

$$(a,b) \sim (c,d) \iff a + d = b + c.$$

This is an equivalence relation ([[lem-int-equivalence]]). The **integers** are
the quotient

$$\mathbb{Z} := (\mathbb{N} \times \mathbb{N}) / \sim,$$

and we write $[(a,b)]$ for the equivalence class of $(a,b)$.

## Remarks

- The pair $(a,b)$ encodes the formal difference $a - b$; the defining relation
  $a + d = b + c$ is the equation "$a - b = c - d$" restated using only
  addition, which is all $\mathbb{N}$ has.
- $\mathbb{N}$ and its arithmetic (commutativity, associativity,
  distributivity, cancellation of addition, the order) are taken as given
  background throughout this construction.
````

### `def-ordered-field`

````markdown
---
id: def-ordered-field
kind: definition
title: "Ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field]
aliases: []
landmark: true
short: "ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
---

## Definition

An **ordered field** is a field $F$ ([[def-field]]) together with a subset
$P \subseteq F$, the set of **positive** elements (the *positive cone*),
satisfying:

- **(O1) Trichotomy.** For each $x \in F$, exactly one of the following holds:
  $x \in P$, or $x = 0$, or $-x \in P$.
- **(O2) Closure.** If $x, y \in P$ then $x + y \in P$ and $x \cdot y \in P$.

We write $x > 0$ for $x \in P$ (read "$x$ is positive"), and define the order by

$$a < b \;:\Longleftrightarrow\; b - a \in P, \qquad a \le b \;:\Longleftrightarrow\; a < b \text{ or } a = b.$$

Thus $a > b$ means $b < a$, and $a \ge b$ means $b \le a$. An element $x$ with
$-x \in P$ (equivalently $x < 0$) is called **negative**.

## Remarks

- By trichotomy applied to $b - a$, for any $a, b$ exactly one of $a < b$,
  $a = b$, $a > b$ holds; this makes $\le$ a total order.
- (O2) says the positives are closed under addition and multiplication: sums and
  products of positives are positive.
- The rationals ([[thm-rat-ordered-field]]) and both constructions of the reals
  ([[thm-reals-ordered-field]], [[thm-reals-dedekind-ordered-field]]) are ordered
  fields, so every fact proved here from (O1)-(O2) holds in each of them.
````

### `def-real-numbers`

````markdown
---
id: def-real-numbers
kind: definition
title: "The real numbers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-cauchy-ring, lem-null-ideal]
justified_by: [thm-reals-field]
aliases: []
landmark: true
short: "ℝ"
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §5.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "L. S. Krapp, Constructions of the real numbers: a set theoretical approach (Oxford, 2014)"
      url: "https://www.math.uni-konstanz.de/~krapp/research/Constructions_of_the_real_numbers.pdf"
pipeline_run: null
---

## Definition

The **real numbers** are the quotient ring

$$\mathbb{R} := \mathcal{C} / \mathcal{N}$$

of the ring of Cauchy sequences ([[thm-cauchy-ring]]) by the ideal of null
sequences ([[lem-null-ideal]]). The class of $(a_n)$ is written
$[(a_n)]$. Each rational $q$ maps to the class $\hat q$ of the constant
sequence $(q, q, q, \dots)$.

## Remarks

- Two Cauchy sequences define the same real exactly when their difference is a
  null sequence.
- That $\mathbb{R}$ is a field is [[thm-reals-field]]; its order is
  [[def-real-order]].
````

### `lem-laurent-non-archimedean`

````markdown
---
id: lem-laurent-non-archimedean
kind: lemma
title: "$\\mathbb{R}((t^{-1}))$ is non-Archimedean, and the monomials $t^{-k}$ are cofinal below its positive elements"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-formal-laurent-series, lem-laurent-valuation, thm-laurent-ordered-field, def-archimedean-field, def-ordered-field, def-abs-value, thm-int-ordered-ring, lem-nat-embeds-int, def-int-order]
aliases: []
landmark: true
short: "$K$ is non-Archimedean"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ be the ordered field of
[[thm-laurent-ordered-field]], and identify a natural number with its image in
$\mathbb{Z}$ when it is used as an index. Then:

1. $n \cdot 1_K < t$ for every $n \in \mathbb{N}$; consequently $K$ is **not**
   Archimedean ([[def-archimedean-field]]).
2. $0_K < t^{-(k+1)} < t^{-k}$ for every $k \in \mathbb{Z}$.
3. **(Countable cofinality.)** For every $\varepsilon \in K$ with
   $\varepsilon > 0_K$ there is $k \in \mathbb{N}$ with
   $0_K < t^{-k} < \varepsilon$; indeed every integer $k > v(\varepsilon)$
   works.
4. **(The monomials measure the valuation.)** For $h \in K$ and $k \in
   \mathbb{Z}$: if $h(j) = 0$ for every $j \le k$ then $|h| < t^{-k}$; and
   conversely, if $|h| < t^{-k}$ then $h(j) = 0$ for every $j < k$.

## Facts & Assumptions

**Given:** $K$ with its valuation $v$, leading coefficient $\operatorname{lc}$, monomials $t^{-a}$ and constants $\iota(c)$.

[L1] For nonzero $h \in K$, $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; $t^{-a}$ is $1$ at index $a$ and $0$ elsewhere, so $t^{-a} \ne 0_K$ with $v(t^{-a}) = a$ and $\operatorname{lc}(t^{-a}) = 1$; and $t = t^{-(-1)}$ ([[def-formal-laurent-series]]).

[L2] $K$ is an ordered field in which $f < g$ holds exactly when $g - f \ne 0_K$ and $\operatorname{lc}(g-f) > 0$; for $f \ne 0_K$ one has $|f| \ne 0_K$, $v(|f|) = v(f)$ and $\operatorname{lc}(|f|) > 0$; and $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$, which for $n \ge 1$ is nonzero with $v = 0$ ([[thm-laurent-ordered-field]], [[def-abs-value]]).

[L3] For nonzero $f, g \in K$: $-f \ne 0_K$ with $v(-f) = v(f)$; and if $v(f) < v(g)$ then $f + g \ne 0_K$ with $\operatorname{lc}(f+g) = \operatorname{lc}(f)$ ([[lem-laurent-valuation]]).

[L4] An ordered field $F$ is Archimedean when for every $x \in F$ there is a natural $n$ with $x < n \cdot 1_F$; and in an ordered field exactly one of $x < y$, $x = y$, $y < x$ holds ([[def-archimedean-field]], [[def-ordered-field]]).

[L5] The order on $\mathbb{Z}$ is total, and every integer $\ge 0$ is the image of a unique natural number; so for every $m \in \mathbb{Z}$ there is a natural $k$ whose image exceeds $m$ ([[thm-int-ordered-ring]], [[def-int-order]], [[lem-nat-embeds-int]]).

## Proof

**Proof technique:** direct.

1.1 For every $k \in \mathbb{Z}$ the monomial $t^{-k}$ is nonzero with $\operatorname{lc}(t^{-k}) = 1 > 0$, so $t^{-k} > 0_K$ by [L2]; and since $v(t^{-k}) = k < k+1 = v(-t^{-(k+1)})$ by [L1] and [L3], the difference $t^{-k} - t^{-(k+1)}$ is nonzero with leading coefficient $\operatorname{lc}(t^{-k}) = 1 > 0$, so $t^{-(k+1)} < t^{-k}$. [L1, L2, L3]

1.2 Let $n \in \mathbb{N}$. If $n = 0$ then $t - n \cdot 1_K = t$, which is nonzero with $\operatorname{lc}(t) = 1 > 0$. If $n \ge 1$ then $n \cdot 1_K$ is nonzero with $v(n \cdot 1_K) = 0$, so $-(n\cdot 1_K)$ is nonzero with valuation $0$ by [L3], while $v(t) = -1 < 0$; hence $t - n\cdot 1_K$ is nonzero with leading coefficient $\operatorname{lc}(t) = 1 > 0$ by [L3]. In both cases $n \cdot 1_K < t$ by [L2]. [L1, L2, L3]

1.3 Conversely, let $h \in K$ and $k \in \mathbb{Z}$ with $|h| < t^{-k}$, and suppose $h \ne 0_K$ with $v(h) < k$. Then $v(|h|) = v(h) < k = v(t^{-k})$ and $\operatorname{lc}(|h|) > 0$ by [L2], so $|h| - t^{-k}$ is nonzero with leading coefficient $\operatorname{lc}(|h|) > 0$ by [L3], giving $t^{-k} < |h|$ and contradicting $|h| < t^{-k}$ by the trichotomy of [L4]. Hence $h = 0_K$ or $v(h) \ge k$, and in either case $h(j) = 0$ for every $j < k$ by [L1]. [L1, L2, L3, L4]

2.1 Let $h \in K$ and $k \in \mathbb{Z}$ with $h(j) = 0$ for every $j \le k$. If $h = 0_K$ then $|h| = 0_K < t^{-k}$ by [step 1.1]. Otherwise $h \ne 0_K$ with $v(h) > k$, so $|h| \ne 0_K$ with $v(|h|) = v(h) > k = v(t^{-k})$ by [L1] and [L2]; then $t^{-k} - |h|$ is nonzero with leading coefficient $\operatorname{lc}(t^{-k}) = 1 > 0$ by [L3], so $|h| < t^{-k}$ by [L2]. [step 1.1, L1, L2, L3]

2.2 Let $\varepsilon \in K$ with $\varepsilon > 0_K$, so $\varepsilon \ne 0_K$ and $\operatorname{lc}(\varepsilon) > 0$ by [L2]; put $m := v(\varepsilon)$ and use [L5] to fix a natural $k$ with $k > m$. Then $v(\varepsilon) = m < k = v(t^{-k}) = v(-t^{-k})$ by [L1] and [L3], so $\varepsilon - t^{-k}$ is nonzero with leading coefficient $\operatorname{lc}(\varepsilon) > 0$, that is $t^{-k} < \varepsilon$; and $t^{-k} > 0_K$ by [step 1.1]. The same computation applies to every integer $k > m$. [step 1.1, L1, L2, L3, L5]

2.3 By [step 1.2], $n \cdot 1_K < t$ for every natural $n$; by the trichotomy of [L4] no natural $n$ can then satisfy $t < n \cdot 1_K$, so the defining condition of [L4] fails at $x = t$ and $K$ is not Archimedean. [step 1.2, L4]

3.1 Clause 1 is [step 1.2] with [step 2.3], clause 2 is [step 1.1], clause 3 is [step 2.2], and clause 4 is [step 2.1] together with [step 1.3]. [step 1.1, step 2.1, step 1.3, step 2.2, step 2.3] ∎

## Remarks

- **Why clause 3 is the pivotal one.** The valuation takes its values in
  $\mathbb{Z}$, which has countable cofinality, and clause 3 is the translation
  of that fact into the order of $K$: a *countable* family, the monomials
  $t^{-k}$ with $k \in \mathbb{N}$, already gets below every positive element.
  This is what makes the sequential Cauchy condition in $K$ testable against
  countably many thresholds, and it is the reason a sequence indexed by
  $\mathbb{N}$ suffices to reach a limit in [[thm-laurent-cauchy-complete]].
  Nothing like it would hold if the exponents were allowed to range over a
  group of uncountable cofinality.

- **Non-Archimedean here is a statement about $t$, not about the constants.**
  The canonical naturals of $K$ are the constant series
  $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$ (clause 3 of
  [[thm-laurent-ordered-field]]), all of valuation $0$, and what bounds them
  above is $t$, of valuation $-1$. The computation in step 1.2 uses nothing
  about $t$ beyond that: every *positive* element of negative valuation exceeds
  every canonical natural, because a strict inequality between valuations
  decides the comparison outright, whatever the coefficients are.
````

### `lem-laurent-series-ring`

````markdown
---
id: lem-laurent-series-ring
kind: lemma
title: "$\\mathbb{R}((t^{-1}))$ is a commutative ring: the product is a finite sum and both operations preserve support bounded below"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-laurent-series, thm-int-ordered-ring, def-int-order, def-int-operations, thm-well-ordering-principle, lem-nat-embeds-int, def-field, thm-reals-ordered-field]
aliases: []
landmark: false
short: "$K$ is a commutative ring"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "B. Sambale, An invitation to formal power series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ be as in [[def-formal-laurent-series]], and let
$f, g \in K$, with $m, n \in \mathbb{Z}$ chosen so that $f(i) = 0$ for all
$i < m$ and $g(j) = 0$ for all $j < n$. Then:

1. **(Finiteness.)** For every $k \in \mathbb{Z}$ the set
   $S_k := \{\, (i,j) \in \mathbb{Z} \times \mathbb{Z} : i + j = k,\; f(i)g(j) \ne 0 \,\}$
   is finite, so $(fg)(k) = \sum_{i+j=k} f(i)g(j)$ is a finite sum of reals; and
   $S_k = \varnothing$ whenever $k < m + n$.
2. **(Closure.)** $f + g$, $-f$ and $fg$ lie in $K$, with $(f+g)(k) = 0$ for
   $k < \min(m,n)$ and $(fg)(k) = 0$ for $k < m + n$.
3. **(Ring.)** $(K, +, \cdot\,, 0_K, 1_K)$ is a commutative ring with identity,
   and $1_K \ne 0_K$.
4. **(Monomials and constants.)** $(t^{-a}h)(k) = h(k-a)$ for every $h \in K$
   and all $a, k \in \mathbb{Z}$; consequently $t^{-a} \, t^{-b} = t^{-(a+b)}$
   for all $a, b \in \mathbb{Z}$. Moreover $(\iota(c)f)(k) = c\, f(k)$ for all
   $c \in \mathbb{R}$ and $k \in \mathbb{Z}$.
5. **(Least element.)** Every nonempty $S \subseteq \mathbb{Z}$ that is bounded
   below has a least element. In particular $\operatorname{supp} f$ has a least
   element whenever $f \ne 0_K$, so the valuation $v(f)$ and the leading
   coefficient $\operatorname{lc}(f)$ of [[def-formal-laurent-series]] are
   defined.

## Facts & Assumptions

**Given:** $K$, its operations, $0_K$, $1_K$, the monomials $t^{-n}$ and the constants $\iota(c)$ as in [[def-formal-laurent-series]]; elements $f, g \in K$ and bounds $m, n \in \mathbb{Z}$ with $f(i) = 0$ for $i < m$ and $g(j) = 0$ for $j < n$.

[L1] $K$ consists of the functions $\mathbb{Z} \to \mathbb{R}$ whose support is bounded below; $(f+g)(k) = f(k) + g(k)$ and $(fg)(k) = \sum_{i+j=k} f(i)g(j)$; $0_K$ is the zero function, $1_K$ is $1$ at index $0$ and $0$ elsewhere, $t^{-a}$ is $1$ at index $a$ and $0$ elsewhere, and $\iota(c)$ is $c$ at index $0$ and $0$ elsewhere ([[def-formal-laurent-series]]).

[L2] $\mathbb{Z}$ is a totally ordered commutative ring: its order is total, and $x \le y$ implies $x + z \le y + z$ ([[thm-int-ordered-ring]], [[def-int-order]], [[def-int-operations]]).

[L3] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] The map $\varepsilon(a) = [(a,0)]$ is injective from $\mathbb{N}$ onto the set of nonnegative integers and preserves addition and order, so every integer $x \ge 0$ is $\varepsilon(a)$ for a unique natural $a$ ([[lem-nat-embeds-int]]).

[L5] $\mathbb{R}$ is a field: addition and multiplication are associative and commutative, multiplication distributes over addition, $0 \ne 1$, and a finite sum of reals is independent of the order and bracketing of its terms ([[def-field]], [[thm-reals-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Let $S \subseteq \mathbb{Z}$ be nonempty with $s \ge b$ for all $s \in S$. Every element of $T := \{\, s - b : s \in S \,\}$ is a nonnegative integer, so by [L4] $T = \{\, \varepsilon(a) : a \in A \,\}$ for a nonempty $A \subseteq \mathbb{N}$; by [L3] $A$ has a least element $a_0$, and since $\varepsilon$ preserves order and $x \mapsto x + b$ preserves order, $\varepsilon(a_0) + b$ is an element of $S$ that is $\le$ every element of $S$. [L2, L3, L4]

1.2 Fix $k \in \mathbb{Z}$ and let $(i,j) \in S_k$. Then $f(i) \ne 0$ and $g(j) \ne 0$, so $i \ge m$ and $j \ge n$; from $i + j = k$ and $j \ge n$ we get $i = k - j \le k - n$. Hence $m \le i \le k - n$, and $j = k - i$ is determined by $i$. [given, L1, L2]

2.1 The integers $i$ with $m \le i \le k - n$ are in order-preserving bijection with the naturals $a$ satisfying $\varepsilon(a) \le k - n - m$ by [L4], and there are finitely many of these, none at all when $k - n - m < 0$; so $S_k$ is a finite set by [step 1.2], it is empty whenever $k < m + n$, and therefore $(fg)(k)$ is a finite sum of reals which is $0$ whenever $k < m + n$. [step 1.2, L2, L4, L5]

3.1 $(f+g)(k) = f(k) + g(k) = 0$ for every $k < \min(m,n)$ and $(-f)(k) = -f(k) = 0$ for every $k < m$, so $f + g$ and $-f$ have support bounded below; and $(fg)(k) = 0$ for every $k < m+n$ by [step 2.1], so $fg$ does too. All three therefore lie in $K$. [step 2.1, given, L1, L5]

3.2 $(fg)(k) = \sum_{i+j=k} f(i)g(j) = \sum_{j+i=k} g(j)f(i) = (gf)(k)$, since the two sums have the same finite index set and their terms agree by commutativity of multiplication in $\mathbb{R}$; so multiplication on $K$ is commutative. [step 2.1, L5]

3.3 For $f, g, h \in K$ and $k \in \mathbb{Z}$, expanding both $((fg)h)(k)$ and $(f(gh))(k)$ by [L1] and [L5] gives the sum of $f(i)g(j)h(l)$ over the triples $(i,j,l)$ with $i + j + l = k$ and $f(i)g(j)h(l) \ne 0$; that set is finite because the argument of [step 1.2] bounds $i$, $j$ and $l$ from below and hence, as in [step 2.1], from above as well. So multiplication on $K$ is associative. [step 1.2, step 2.1, L5]

3.4 $(f(g+h))(k) = \sum_{i+j=k} f(i)\bigl(g(j) + h(j)\bigr) = \sum_{i+j=k} f(i)g(j) + \sum_{i+j=k} f(i)h(j) = (fg)(k) + (fh)(k)$, all three sums being finite; so multiplication distributes over addition. [step 2.1, L5]

3.5 For $h \in K$, $(t^{-a}h)(k) = \sum_{i+j=k} t^{-a}(i)h(j)$ has at most one nonzero term, the one with $i = a$ and $j = k - a$, so $(t^{-a}h)(k) = h(k-a)$; taking $h = t^{-b}$ gives $(t^{-a}t^{-b})(k) = t^{-b}(k-a)$, which is $1$ when $k = a+b$ and $0$ otherwise, that is, $t^{-a}t^{-b} = t^{-(a+b)}$. [step 2.1, L1]

3.6 $(\iota(c)f)(k) = \sum_{i+j=k} \iota(c)(i) f(j)$ has at most one nonzero term, the one with $i = 0$ and $j = k$, so $(\iota(c)f)(k) = c\,f(k)$. [step 2.1, L1]

3.7 $(f \cdot 1_K)(k) = \sum_{i+j=k} f(i) 1_K(j)$ has at most one nonzero term, the one with $j = 0$ and $i = k$, so $(f \cdot 1_K)(k) = f(k)$ and $f \cdot 1_K = f$; moreover $1_K(0) = 1 \ne 0 = 0_K(0)$, so $1_K \ne 0_K$. [step 2.1, L1, L5]

4.1 Addition on $K$ is defined index by index, and $K$ is closed under it and under negation by [step 3.1]; so associativity, commutativity, the law $f + 0_K = f$ and the law $f + (-f) = 0_K$ each hold at every index by the corresponding law in $\mathbb{R}$, and $(K, +, 0_K)$ is an abelian group. [step 3.1, L1, L5]

5.1 By [step 4.1] addition makes $K$ an abelian group, by [step 3.2], [step 3.3] and [step 3.7] multiplication is commutative and associative with identity $1_K \ne 0_K$, and by [step 3.4] it distributes over addition; hence $K$ is a commutative ring with identity. [step 3.2, step 3.3, step 3.4, step 3.7, step 4.1]

6.1 Clause 1 is [step 2.1], clause 2 is [step 3.1] with [step 2.1], clause 3 is [step 5.1], clause 4 is [step 3.5] and [step 3.6], and clause 5 is [step 1.1] applied to $S = \operatorname{supp} f$, which is nonempty when $f \ne 0_K$ and bounded below because $f \in K$. [step 1.1, step 2.1, step 3.1, step 3.5, step 3.6, step 5.1] ∎
````

### `thm-int-ordered-ring`

````markdown
---
id: thm-int-ordered-ring
kind: theorem
title: "The integers form a totally ordered ring"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integers, def-int-operations, def-int-order, def-nat-order,
       thm-int-comm-ring, lem-nat-add-commutative,
       lem-nat-add-associative, thm-nat-linear-order,
       lem-nat-order-add-compatible, lem-nat-mult-commutative,
       lem-nat-mult-associative, lem-nat-mult-distributive,
       lem-nat-mult-identity, lem-nat-order-mult-compatible]
aliases: []
landmark: true
short: "ℤ ordered ring"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-dependency-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Statement

The relation of [[def-int-order]] is well defined and is a total order on
$\mathbb{Z}$; it is compatible with addition ($x \le y$ implies
$x + z \le y + z$) and positives are closed under multiplication
($0 < x$ and $0 < y$ imply $0 < xy$). Thus $\mathbb{Z}$ is a totally
ordered commutative ring.

## Facts & Assumptions

**Given:** Integers $x = [(a,b)]$, $y = [(c,d)]$, $z = [(e,f)]$ with the operations of [[def-int-operations]].

[L1] Addition on $\mathbb{N}$ is commutative and associative ([[lem-nat-add-commutative]], [[lem-nat-add-associative]]).

[L2] The order on $\mathbb{N}$ is total, antisymmetric, and transitive ([[thm-nat-linear-order]]).

[L3] Natural order is translation-invariant: $x\le y\iff x+z\le y+z$ ([[lem-nat-order-add-compatible]]).

[L4] By the definition of natural order, $x\le y$ exactly when $y=x+k$ for some natural $k$; if $x<y$, such a gap is nonzero ([[def-nat-order]]).

[L5] Natural multiplication is commutative and associative, distributes over addition, and has the usual zero and identity laws; multiplication by a nonzero natural preserves strict order ([[lem-nat-mult-commutative]], [[lem-nat-mult-associative]], [[lem-nat-mult-distributive]], [[lem-nat-mult-identity]], [[lem-nat-order-mult-compatible]]).

[L6] The integer operations make $\mathbb{Z}$ a commutative ring with multiplicative identity ([[thm-int-comm-ring]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $(a,b) \sim (a',b')$ and $(c,d) \sim (c',d')$, i.e. $a + b' = b + a'$ and $c + d' = d + c'$. [given]

1.2 Suppose $a + d \le b + c$. [given]

1.3 Totality: in $\mathbb{N}$ either $a + d \le b + c$ or $b + c \le a + d$, so $x \le y$ or $y \le x$. [L2]

1.4 Antisymmetry: $x \le y$ and $y \le x$ give $a + d \le b + c$ and $b + c \le a + d$, hence $a + d = b + c$, which is $x = y$ as classes. [L2]

1.5 Transitivity: from $a + d \le b + c$ and $c + f \le d + e$, adding gives $(a+d)+(c+f) \le (b+c)+(d+e)$; regrouping, $(a+f)+(c+d) \le (b+e)+(c+d)$; cancelling, $a + f \le b + e$, i.e. $x \le z$. [L1, L2, L3]

1.6 Compatibility with addition: $x + z \le y + z$ reads $(a+e)+(d+f) \le (b+f)+(c+e)$, which regroups to $(a+d) + (e+f) \le (b+c) + (e+f)$, equivalent to $a + d \le b + c$, i.e. $x \le y$. [L1, L3]

1.7 Suppose $0 < x$ and $0 < y$, i.e. $b < a$ and $d < c$. [given]

2.1 Adding $(a'+d')$: $(a+d) + (a'+d') \le (b+c) + (a'+d')$. [step 1.2, L3]

2.2 Regrouping with the equations of step 1.1: $(b+c) + (a'+d') = (b+a') + (c+d') = (a+b') + (d+c') = (a+d) + (b'+c')$. [step 1.1, L1]

2.3 Write $a = b + k$ and $c = d + m$ with nonzero naturals $k,m$. [step 1.7, L4]

3.1 So $(a+d) + (a'+d') \le (a+d) + (b'+c')$; cancelling $(a+d)$ gives $a'+d'\le b'+c'$. Applying the same argument with primed and unprimed representatives exchanged proves the converse implication, so the relation is independent of representatives. [step 1.1, step 2.1, step 2.2, L3]

3.2 Expanding both components of $xy = [(ac+bd,\, ad+bc)]$: $ac + bd = (b+k)(d+m) + bd = (bd + bm + kd + bd) + km$ and $ad + bc = (b+k)d + b(d+m) = bd + kd + bd + bm$, so $ac + bd = (ad + bc) + km$. [step 2.3, L1, L5]

4.1 Since $k,m$ are nonzero, $0<k$ and $0<m$ by [L4]. Hence [L5] gives $0=0\cdot m<km$, and step 3.2 yields $ad+bc<ac+bd$, which is $0<xy$. [step 2.3, step 3.2, L2, L4, L5]

5.1 The order is well defined, total, compatible with addition, and positives are closed under multiplication; together with [L6], this makes $\mathbb{Z}$ a totally ordered commutative ring. [step 3.1, step 1.3, step 1.4, step 1.5, step 1.6, step 4.1, L6] ∎
````

### `thm-laurent-ordered-field`

````markdown
---
id: thm-laurent-ordered-field
kind: theorem
title: "$\\mathbb{R}((t^{-1}))$ is an ordered field, ordered by the sign of the leading coefficient"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-formal-laurent-series, lem-laurent-series-ring, lem-laurent-valuation, thm-laurent-series-field, def-ordered-field, def-archimedean-field, def-field, def-abs-value, thm-reals-ordered-field, thm-induction-principle, def-natural-numbers, thm-int-ordered-ring]
aliases: []
landmark: true
short: "$K$ is an ordered field"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ and let
$P = \{\, f \in K : f \ne 0_K \text{ and } \operatorname{lc}(f) > 0 \,\}$
([[def-formal-laurent-series]]). Then:

1. $P$ is a positive cone on $K$, so $(K, P)$ is an ordered field
   ([[def-ordered-field]]), and $f < g$ holds exactly when $g - f \ne 0_K$ and
   $\operatorname{lc}(g - f) > 0$.
2. For $f \ne 0_K$ the absolute value ([[def-abs-value]]) satisfies
   $|f| \ne 0_K$, $v(|f|) = v(f)$ and
   $\operatorname{lc}(|f|) = \lvert \operatorname{lc}(f) \rvert > 0$.
3. The map $\iota : \mathbb{R} \to K$ sending $c$ to the series with value $c$
   at index $0$ is an injective ring homomorphism with $\iota(c) \in P$ exactly
   when $c > 0$; and the canonical naturals of $K$ are
   $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$ for every $n \in \mathbb{N}$.

## Facts & Assumptions

**Given:** $K$ with its valuation $v$, leading coefficient $\operatorname{lc}$, constants $\iota(c)$ and the set $P$ above.

[L1] For nonzero $h \in K$, $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; $\iota(c)$ is $c$ at index $0$ and $0$ elsewhere; $1_K = \iota(1)$ ([[def-formal-laurent-series]]).

[L2] $K$ is a commutative ring, $(f+g)(k) = f(k)+g(k)$, and $(\iota(c)h)(k) = c\,h(k)$ ([[lem-laurent-series-ring]]).

[L3] For nonzero $f, g \in K$: $fg \ne 0_K$ with $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$; $-f \ne 0_K$ with $v(-f) = v(f)$ and $\operatorname{lc}(-f) = -\operatorname{lc}(f)$; if $v(f) < v(g)$ then $f+g \ne 0_K$ with $v(f+g) = v(f)$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f)$; and if $v(f) = v(g)$ with $\operatorname{lc}(f) + \operatorname{lc}(g) \ne 0$ then $f+g \ne 0_K$ with $\operatorname{lc}(f+g) = \operatorname{lc}(f) + \operatorname{lc}(g)$ ([[lem-laurent-valuation]]).

[L4] $K$ is a field ([[thm-laurent-series-field]], [[def-field]]).

[L5] An ordered field is a field with a subset $P$ satisfying (O1) trichotomy, for each $x$ exactly one of $x \in P$, $x = 0$, $-x \in P$, and (O2) closure of $P$ under addition and multiplication; the order is then $a < b :\iff b - a \in P$ ([[def-ordered-field]]). For $n \ge 1$, $n \cdot 1_F$ is the $n$-fold sum of $1_F$, and $0 \cdot 1_F = 0$ ([[def-archimedean-field]]).

[L6] $\mathbb{R}$ is an ordered field: exactly one of $x > 0$, $x = 0$, $x < 0$ holds for each real $x$, and sums and products of positive reals are positive ([[thm-reals-ordered-field]], [[def-ordered-field]]).

[L7] $|x| = x$ when $x \ge 0$ and $|x| = -x$ when $x < 0$, in any ordered field and in $\mathbb{R}$ ([[def-abs-value]]).

[L8] Induction: a property holding at $0$ and inherited from $n$ to $n+1$ holds at every natural number ([[thm-induction-principle]], [[def-natural-numbers]]).

[L9] The order on $\mathbb{Z}$ is total, so for $p, q \in \mathbb{Z}$ exactly one of $p < q$, $p = q$, $q < p$ holds ([[thm-int-ordered-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $f \in K$. If $f = 0_K$ then neither $f$ nor $-f = 0_K$ lies in $P$, since membership in $P$ requires being nonzero. If $f \ne 0_K$ then $-f \ne 0_K$ and $\operatorname{lc}(-f) = -\operatorname{lc}(f)$ by [L3], and by trichotomy in $\mathbb{R}$ ([L6]) exactly one of $\operatorname{lc}(f) > 0$ and $-\operatorname{lc}(f) > 0$ holds. So for every $f$ exactly one of $f \in P$, $f = 0_K$, $-f \in P$ holds, which is (O1). [L1, L3, L5, L6]

1.2 Let $f, g \in P$. By [L3] $fg \ne 0_K$ and $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$, a product of two positive reals, hence positive by [L6]; so $fg \in P$. [L3, L6]

1.3 $\iota(c) + \iota(d) = \iota(c+d)$ because addition is computed index by index, and $\iota(c)\iota(d) = \iota(cd)$ because $(\iota(c)\iota(d))(k) = c\,\iota(d)(k)$ by [L2], which is $cd$ at $k = 0$ and $0$ elsewhere; also $\iota(1) = 1_K$, and $\iota$ is injective since $\iota(c)(0) = c$. [L1, L2]

2.1 Let $f, g \in P$ and compare $v(f)$ with $v(g)$, which by [L9] are related in exactly one of three ways. If $v(f) < v(g)$ then by [L3] $f + g \ne 0_K$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f) > 0$; if $v(g) < v(f)$ the same argument with the roles exchanged applies; and if $v(f) = v(g)$ then $\operatorname{lc}(f) + \operatorname{lc}(g) > 0$ by [L6], in particular nonzero, so by [L3] $f+g \ne 0_K$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f) + \operatorname{lc}(g) > 0$. In every case $f + g \in P$, which with [step 1.2] is (O2). [step 1.2, L3, L6, L9]

2.2 For $c \ne 0$ the series $\iota(c)$ is nonzero with $v(\iota(c)) = 0$ and $\operatorname{lc}(\iota(c)) = c$, so $\iota(c) \in P$ exactly when $c > 0$; and $\iota(0) = 0_K \notin P$. With [step 1.3] this makes $\iota$ an injective ring homomorphism carrying the positive reals onto the positive constants. [step 1.3, L1]

2.3 For every natural $n$, $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$: at $n = 0$ both sides are $0_K$ by [L5] and [L1], and if the identity holds at $n$ then $(n+1)\cdot 1_K = n \cdot 1_K + 1_K = \iota(n \cdot 1_{\mathbb{R}}) + \iota(1) = \iota(n \cdot 1_{\mathbb{R}} + 1) = \iota((n+1)\cdot 1_{\mathbb{R}})$ by [step 1.3]. [step 1.3, L1, L5, L8]

3.1 By [step 1.1] and [step 2.1] the set $P$ satisfies (O1) and (O2), and $K$ is a field by [L4]; hence $(K,P)$ is an ordered field, in which $f < g$ means $g - f \in P$, that is, $g - f \ne 0_K$ and $\operatorname{lc}(g-f) > 0$. [step 1.1, step 2.1, L4, L5]

4.1 Let $f \ne 0_K$. If $f \in P$ then $f > 0_K$ by [step 3.1], so $|f| = f$ by [L7], and $\operatorname{lc}(|f|) = \operatorname{lc}(f) = \lvert \operatorname{lc}(f)\rvert$ since $\operatorname{lc}(f) > 0$. Otherwise $-f \in P$ by [step 1.1], so $f < 0_K$ and $|f| = -f$, whence $|f| \ne 0_K$, $v(|f|) = v(f)$ and $\operatorname{lc}(|f|) = -\operatorname{lc}(f) = \lvert\operatorname{lc}(f)\rvert$, again positive. In both cases $v(|f|) = v(f)$ and $\operatorname{lc}(|f|) = \lvert\operatorname{lc}(f)\rvert > 0$. [step 1.1, step 3.1, L3, L7]

5.1 Clause 1 is [step 3.1], clause 2 is [step 4.1], and clause 3 is [step 2.2] with [step 2.3]. [step 3.1, step 2.2, step 4.1, step 2.3] ∎

## Remarks

- **The order compares lowest terms, and only those.** By clause 1, deciding $f < g$ means finding the least index at which $f$ and $g$ differ and comparing the two coefficients there. Every later coefficient is irrelevant, which is why $\iota(c) > t^{-1}$ for every positive real $c$, however small, and why the order is not the coefficientwise one.

- **$\mathbb{R}$ sits inside $K$ as an ordered subfield, and that is all clause 3 says.** It does not say that $\mathbb{R}$ is cofinal in $K$, and indeed it is not: the computation used for the canonical naturals in [[lem-laurent-non-archimedean]] applies verbatim to every constant, since $v(t) = -1 < 0 = v(\iota(c))$ for every $c \ne 0$, so $\iota(c) < t$ for every real $c$. The identification $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$ is recorded because the Archimedean property is a statement about the canonical naturals ([[def-archimedean-field]]), and it is the bridge between those and the constant series.
````

### `thm-laurent-series-field`

````markdown
---
id: thm-laurent-series-field
kind: theorem
title: "$\\mathbb{R}((t^{-1}))$ is a field: every nonzero formal Laurent series is invertible"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-laurent-series, lem-laurent-series-ring, lem-laurent-valuation, def-field, thm-reals-ordered-field, thm-recursion, thm-induction-principle, def-natural-numbers]
aliases: []
landmark: true
short: "$K$ is a field"
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "B. Sambale, An invitation to formal power series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "Laurent series (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Laurent_series"
pipeline_run: null
---

## Statement

$K = \mathbb{R}((t^{-1}))$ ([[def-formal-laurent-series]]) is a field
([[def-field]]): it is a commutative ring with $1_K \ne 0_K$, and every
$f \in K$ with $f \ne 0_K$ has a multiplicative inverse in $K$.

Explicitly, if $p = v(f)$ and $c = \operatorname{lc}(f)$, then
$f = \iota(c)\, t^{-p}\,(1_K - u)$ for the element $u \in K$ given by
$u(j) = -c^{-1}f(p+j)$ for $j \ge 1$ and $u(j) = 0$ for $j \le 0$, and
$f^{-1} = \iota(c^{-1})\, t^{p}\, g$, where
$g \in K$ vanishes at every index $< 0$ and is given at $k \ge 0$ by
$g(k) = \sum_{n=0}^{k} (u^{n})(k)$.

## Scratch

The identity behind the construction is the geometric series
$(1-u)^{-1} = 1 + u + u^{2} + \cdots$. It cannot be used as written, because $K$
has no notion of an infinite sum. What replaces it is the observation that
$u^{n}$ vanishes at every index below $n$, so at any single index $k$ only the
terms $n \le k$ can contribute; the displayed formula for $g(k)$ is that finite
truncation, and the support of the result is bounded below because every
$u^{n}$ vanishes below $0$.

## Facts & Assumptions

**Given:** A nonzero $f \in K$; write $p := v(f) \in \mathbb{Z}$ and $c := \operatorname{lc}(f) \in \mathbb{R} \setminus \{0\}$, so that $f(k) = 0$ for every $k < p$ and $f(p) = c$.

[L1] $K$ is the set of functions $\mathbb{Z} \to \mathbb{R}$ whose support is bounded below; $t^{-a}$ is $1$ at index $a$ and $0$ elsewhere; $\iota(c)$ is $c$ at index $0$ and $0$ elsewhere; for nonzero $h \in K$ one has $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$ ([[def-formal-laurent-series]]).

[L2] $K$ is a commutative ring with identity $1_K \ne 0_K$; $(h_1h_2)(k) = \sum_{i+j=k} h_1(i)h_2(j)$ is a finite sum; if $h_1$ vanishes at every index $< a$ and $h_2$ at every index $< b$ then $h_1h_2$ vanishes at every index $< a + b$; $(t^{-a}h)(k) = h(k-a)$ and hence $t^{-a}t^{-b} = t^{-(a+b)}$; and $(\iota(c)h)(k) = c\,h(k)$ ([[lem-laurent-series-ring]]).

[L3] A product of two nonzero elements of $K$ is nonzero ([[lem-laurent-valuation]]).

[L4] $\mathbb{R}$ is a field: every nonzero $c$ has an inverse $c^{-1}$ with $cc^{-1} = 1$, and a finite sum of reals may be reordered and regrouped freely ([[def-field]], [[thm-reals-ordered-field]]).

[L5] Recursion on $\mathbb{N}$: for a set $A$, an element $a \in A$ and a function $F : A \to A$ there is a unique $\Gamma : \mathbb{N} \to A$ with $\Gamma(0) = a$ and $\Gamma(\sigma(n)) = F(\Gamma(n))$ ([[thm-recursion]], [[def-natural-numbers]]).

[L6] Induction: a property holding at $0$ and inherited from $n$ to $\sigma(n)$ holds at every natural number ([[thm-induction-principle]]).

[L7] A field is a commutative ring with $0 \ne 1$ in which multiplication restricted to the nonzero elements is an abelian group, that is, in which the nonzero elements are closed under multiplication and each has an inverse ([[def-field]]).

## Proof

**Proof technique:** constructive.

1.1 Define $u : \mathbb{Z} \to \mathbb{R}$ by $u(j) := -c^{-1} f(p + j)$ for $j \ge 1$ and $u(j) := 0$ for $j \le 0$. Then $u$ vanishes at every index $< 1$, so its support is bounded below and $u \in K$. [given, L1, L4, construct]

1.2 By [L5] with $A = K$, $a = 1_K$ and $F(h) = hu$ there is a family $(u^{n})_{n \in \mathbb{N}}$ in $K$ with $u^{0} = 1_K$ and $u^{\sigma(n)} = u^{n} u$. [L2, L5, construct]

2.1 For every $k \in \mathbb{Z}$, $\bigl(\iota(c)\,t^{-p}\,(1_K - u)\bigr)(k) = c\,(1_K - u)(k - p)$ by [L2]; this is $0$ when $k < p$ because $1_K - u$ vanishes at every negative index, it is $c$ when $k = p$, and it is $c \cdot \bigl(-u(k-p)\bigr) = c c^{-1} f(k) = f(k)$ when $k > p$. Comparing with $f(k) = 0$ for $k < p$ and $f(p) = c$, we get $f = \iota(c)\, t^{-p}\,(1_K - u)$. [step 1.1, given, L1, L2, L4]

2.2 For every $n \in \mathbb{N}$, $u^{n}$ vanishes at every index $< n$: at $n = 0$ this says $1_K$ vanishes at every negative index, which holds by [L1]; and if $u^{n}$ vanishes at every index $< n$ then, since $u$ vanishes at every index $< 1$ by [step 1.1], the product $u^{\sigma(n)} = u^{n}u$ vanishes at every index $< n + 1$ by [L2]. [step 1.1, step 1.2, L1, L2, L6]

3.1 Define $g : \mathbb{Z} \to \mathbb{R}$ by $g(k) := \sum_{n=0}^{k} (u^{n})(k)$ for $k \ge 0$ and $g(k) := 0$ for $k < 0$; each value is a finite sum of reals, and $g$ vanishes at every index $< 0$, so $g \in K$. [step 2.2, L1, L4, construct]

4.1 Fix $k \ge 1$. In $(ug)(k) = \sum_{i+j=k} u(i)g(j)$ a term can be nonzero only when $i \ge 1$ and $j \ge 0$, hence only for $1 \le i \le k$ and $j = k - i$; so $(ug)(k) = \sum_{i=1}^{k} u(i)\, g(k-i) = \sum_{i=1}^{k} u(i) \sum_{n=0}^{k-i} (u^{n})(k-i)$. [step 1.1, step 3.1, L1, L2]

4.2 For $k \le 0$ one has $(ug)(k) = 0$, since $u$ vanishes at every index $< 1$ and $g$ at every index $< 0$, so every pair $(i,j)$ with $i + j = k$ has $u(i)g(j) = 0$. [step 1.1, step 3.1, L1, L2]

5.1 In the inner sum of [step 4.1] the terms with $k - i < n \le k-1$ vanish by [step 2.2], so the inner sum may be extended to $n = 0, \dots, k-1$ without changing its value; interchanging the two finite sums gives $(ug)(k) = \sum_{n=0}^{k-1} \sum_{i=1}^{k} u(i)\,(u^{n})(k-i)$. [step 2.2, step 4.1, L4]

6.1 For each $n$, $\sum_{i=1}^{k} u(i)(u^{n})(k-i) = \sum_{i+j=k} u(i)(u^{n})(j) = (u\,u^{n})(k) = (u^{\sigma(n)})(k)$, because a term of the full convolution can be nonzero only for $i \ge 1$ and $j \ge 0$; hence $(ug)(k) = \sum_{n=0}^{k-1} (u^{\sigma(n)})(k) = \sum_{n=1}^{k} (u^{n})(k)$ for every $k \ge 1$. [step 1.2, step 2.2, step 5.1, L2]

7.1 For $k \ge 1$, $\bigl((1_K - u)g\bigr)(k) = g(k) - (ug)(k) = \sum_{n=0}^{k}(u^{n})(k) - \sum_{n=1}^{k}(u^{n})(k) = (u^{0})(k) = 1_K(k)$; for $k = 0$, $g(0) = (u^{0})(0) = 1$ and $(ug)(0) = 0$, so the value is $1 = 1_K(0)$; and for $k < 0$ both $g(k)$ and $(ug)(k)$ are $0$, as is $1_K(k)$. Hence $(1_K - u)g = 1_K$. [step 3.1, step 4.2, step 6.1, L1, L2]

8.1 Using [step 2.1], [L2] and $cc^{-1} = 1$, one computes $f \cdot \bigl(\iota(c^{-1})\,t^{p}\,g\bigr) = \iota(c)\iota(c^{-1})\, t^{-p}t^{-(-p)}\,(1_K - u)g = 1_K \cdot 1_K \cdot 1_K = 1_K$, so $\iota(c^{-1}) t^{p} g \in K$ is a multiplicative inverse of $f$. [step 2.1, step 7.1, L2, L4]

9.1 $K$ is a commutative ring with $1_K \ne 0_K$ by [L2], its nonzero elements are closed under multiplication by [L3], and by [step 8.1] every nonzero element has an inverse; so $K$ satisfies the field axioms of [L7] and the construction is complete. [step 8.1, L2, L3, L7, discharge-construct] ∎

## Remarks

- **Where support-boundedness is really used.** Twice, and in different ways.
  It makes each coefficient of a product a finite sum, which is what lets
  $(u^{n})(k)$ be spoken of at all; and it is what has to be re-established for
  the constructed inverse, which is why $g$ was *defined* to vanish at every
  negative index rather than found to. The verification that this definition is
  consistent with $(1_K - u)g = 1_K$ is [step 7.1], and it is exactly the point
  at which an infinite geometric series would have had to be summed.

- **The normalisation is forced, and that is why the recipe is explicit.**
  Suppose $f = \iota(c')t^{-p'}(1_K - w)$ with $c' \ne 0$ and $w$ vanishing at
  every index $\le 0$. Evaluating as in [step 2.1] gives
  $f(k) = c'(1_K - w)(k - p')$, which is $0$ for $k < p'$ and equals $c'$ at
  $k = p'$; so $p' = v(f)$ and $c' = \operatorname{lc}(f)$, and then
  $w(j) = -c'^{-1}f(p'+j)$ for $j \ge 1$. The factorisation used in the proof is
  therefore the only one of its shape, and the formula for the inverse is a
  recipe rather than a choice.
````

### `thm-reals-ordered-field`

````markdown
---
id: thm-reals-ordered-field
kind: theorem
title: "The reals form a totally ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-order, def-real-numbers, thm-reals-field, lem-cauchy-away-from-zero, thm-rat-ordered-field, def-null-sequence]
aliases: []
landmark: true
short: "ℝ ordered field"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "L. S. Krapp, Constructions of the real numbers: a set theoretical approach (Oxford, 2014)"
      url: "https://www.math.uni-konstanz.de/~krapp/research/Constructions_of_the_real_numbers.pdf"
pipeline_run: null
---

## Statement

The relation of [[def-real-order]] is well defined and makes $\mathbb{R}$
([[thm-reals-field]]) a totally ordered field.

## Facts & Assumptions

**Given:** Reals $x, y$ with representatives $(a_n), (b_n)$.

[L1] A sequence $(u_n)_{n \ge 1}$ of rational numbers is null if, for every rational $\varepsilon > 0$, there is $N \in \mathbb{N}$ such that $|u_n| < \varepsilon$ for every $n \ge N$ ([[def-null-sequence]]).

[L2] Ordered-field arithmetic in $\mathbb{Q}$: $\delta/2 > 0$; sums and products of eventual lower bounds ([[thm-rat-ordered-field]]).

[L3] Dichotomy for non-null Cauchy sequences: eventually $> \delta$ or eventually $< -\delta$ ([[lem-cauchy-away-from-zero]]).

[L4] $\mathbb{R}$ is a field ([[thm-reals-field]]).

[L5] In $\mathbb{R} = \mathcal{C}/\mathcal{N}$, $x = 0$ iff a representative is null; so $x \ne 0$ iff every representative is non-null ([[def-real-numbers]]).

## Proof

**Proof technique:** direct.

1.1 Positivity is independent of the representative: if $a_n > \delta$ for $n \ge N$ and $(a'_n - a_n)$ is null, then beyond some $N' \ge N$ also $|a'_n - a_n| < \delta/2$, so $a'_n > \delta/2$: the defining property holds for $(a'_n)$ with $\delta/2$. [L1, L2]

1.2 Trichotomy: if $x \ne 0$, any representative is non-null, so by the dichotomy either $a_n > \delta$ eventually ($x$ positive) or $a_n < -\delta$ eventually ($-x$ positive); the two exclude each other, and exactly one of $x$ positive, $x = 0$, $-x$ positive holds. [L1, L3, L5]

1.3 Positives are closed under $+$ and $\cdot$: from $a_n > \delta$ and $b_n > \delta'$ eventually, $a_n + b_n > \delta + \delta'$ and $a_n b_n > \delta\delta'$ eventually, with $\delta + \delta', \delta\delta' > 0$. [L2]

2.1 Consequently $\le$ is a total order (trichotomy plus transitivity from closure under sums), compatible with addition (translation preserves the difference) and with multiplication by positives: $\mathbb{R}$ is a totally ordered field. [step 1.1, step 1.2, step 1.3, L4] ∎
````

