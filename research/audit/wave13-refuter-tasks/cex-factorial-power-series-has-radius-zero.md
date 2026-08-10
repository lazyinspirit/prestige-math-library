## Selection reasons

- critical risk (8): 4 declared dependencies; 4 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `cex-factorial-power-series-has-radius-zero`

Normalized current SHA-256: `00a2d07f5b7dabd0e8ff8b8df27e56613e950e14641087d21c40266358f7d5bc`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cex-factorial-power-series-has-radius-zero
kind: counterexample
title: "The series $\\sum_{n\\ge0}\\iota(n!)x^n$ converges only at $x=0$ and has radius zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-cauchy-hadamard-for-real-power-series, lem-factorial-beats-geometric, def-factorial-and-falling-factorial, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Cauchy-Hadamard theorem, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Cauchy-Hadamard_theorem"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
pipeline_run: null
---

## Statement

The real power series $\sum_{n\ge0}\iota(n!)x^n$ has radius $0$: it converges at its centre $x=0$ and diverges at every $x\ne0$.

## Facts & Assumptions

**Given:** Coefficients $a_n:=\iota(n!)$.

[L1] Factorials eventually exceed every fixed geometric progression ([[lem-factorial-beats-geometric]], [[def-factorial-and-falling-factorial]], [[def-canonical-natural]]).

[L2] Cauchy–Hadamard assigns radius $0$ when the coefficient-root limit superior is $+\infty$ ([[thm-cauchy-hadamard-for-real-power-series]]).

## Verification

**Proof technique:** direct.

1.1 For every real $M>0$, [L1] applied to a geometric base larger than $M$ shows that $\iota((k+1)!)^{1/(k+1)}>M$ eventually. Hence the coefficient-root limit superior is $+\infty$. [L1]

2.1 By [L2], the radius is $0$. At $x=0$ only the constant term survives, while for $x\ne0$ the terms fail to tend to zero, so the stated convergence set follows. [step 1.1, L2] ∎
````

## Wave 13 provenance row

```json
{
  "id": "cex-factorial-power-series-has-radius-zero",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Power_series"
  ],
  "rationale": "The Encyclopedia explicitly gives Σ n!(z-a)^n as a radius-zero example. The item is its real specialization, while the coefficient-root verification is written locally.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Exact-current proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-factorial-beats-geometric",
      "source_section": "Statement",
      "quote": "Write $\\iota(n) := n \\cdot 1_{\\mathbb{R}}$ for the canonical natural\n([[lem-of-naturals-positive]]) and define the **factorial** as the finite product\n([[def-finite-sum]])\n\n$$k! \\;:=\\; \\prod_{j < k} \\iota(j+1) \\qquad (k \\in \\mathbb{N}),$$\n\nso that $0! = 1$, the empty product, and $(k+1)! = k! \\cdot \\iota(k+1)$. Every\n$k!$ is a positive real. Then, for every $x \\in \\mathbb{R}$,\n\n$$\\frac{x^{k}}{k!} \\longrightarrow 0 ,$$\n\nthe numerator being the integer power of [[def-integer-power]] and the\nconvergence that of [[def-real-limit]].\n\nThe index range needs no adjustment: $k!$ is defined at $k = 0$ with value $1$,\nand $x^0 = 1$, so the sequence begins with $x^0/0! = 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-factorial-and-falling-factorial",
      "source_section": "Definition",
      "quote": "**The factorial.** By the recursion theorem ([[thm-recursion]]) applied to the\nset $\\mathbb{N}\\times\\mathbb{N}$, the starting element $(0,1)$ and the function\n$f(k, v) = (\\sigma(k),\\, v \\cdot \\sigma(k))$, and by the same induction on the\nfirst coordinate as in [[def-nat-finite-sum-and-product]], there is a unique\n$F : \\mathbb{N} \\to \\mathbb{N}$ with\n\n$$F(0) = 1, \\qquad F(\\sigma(n)) = F(n)\\cdot\\sigma(n) \\quad (n \\in \\mathbb{N}).$$\n\nWe write $n! := F(n)$. Thus $0! = 1$, $1! = 0!\\cdot 1 = 1$, $2! = 1!\\cdot 2 = 2$,\n$3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$.\n\n**$0! = 1$ is the base clause of this recursion**, not a convention imported from\nelsewhere. Nothing about empty products is presupposed; the agreement with the\nempty product is proved below, in clause (a), rather than assumed.\n\n**Truncated difference.** Throughout, $n - k$ is the operation fixed in\n[[def-nat-finite-sum-and-product]]: the unique $j$ with $k + j = n$ when\n$k \\le n$, and $0$ when $n < k$.\n\n**The falling factorial.** For $n \\in \\mathbb{N}$ define $n^{\\underline{k}}$ by\nrecursion on $k$, by the recursion theorem applied to\n$\\mathbb{N}\\times\\mathbb{N}$ with starting element $(0,1)$ and\n$f(k, v) = (\\sigma(k),\\, v \\cdot (n-k))$:\n\n$$n^{\\underline{0}} = 1, \\qquad n^{\\underline{\\sigma(k)}} = n^{\\underline{k}}\\cdot(n-k) .$$\n\nSo $n^{\\underline{1}} = 1\\cdot(n-0) = n$ and $n^{\\underline{2}} = n\\,(n-1)$, and\nfor $k \\le n$ the value is the product $n(n-1)\\cdots(n-k+1)$ of the $k$ topmost\nfactors.\n\n**Four facts, proved here because the page uses each of them.**\n\n**(a) The factorial is the product of the first $n$ positive naturals.**\n$n! = \\prod_{j<n}\\sigma(j) = \\prod_{j<n}(j+1)$, the $\\mathbb{N}$-valued product of\n[[def-nat-finite-sum-and-product]]. Induction ([[thm-induction-principle]]): at\n$n = 0$ both sides are $1$, the empty product and the base clause agreeing; and\n$\\prod_{j<\\sigma(n)}\\sigma(j) = \\big(\\prod_{j<n}\\sigma(j)\\big)\\cdot\\sigma(n) = n!\\cdot\\sigma(n) = \\sigma(n)!$.\n**So the empty-product reading and the base-clause reading are the same reading**,\nand neither was assumed.\n\n**(b) $n! \\ne 0$, and $\\iota(n!) = \\prod^{\\mathbb{R}}_{j<n}\\iota(j+1)$.** For the\nfirst, $0! = 1 \\ne 0$ ([[thm-omega-is-peano-system]]) and\n$\\sigma(n)! = n!\\cdot\\sigma(n)$ is a product of two nonzero naturals, which is\nnonzero: if $xy = 0$ with $y \\ne 0$ then $xy = 0\\cdot y$\n([[lem-nat-mult-identity]]) and cancellation gives $x = 0$\n([[lem-nat-mult-cancellative]]). So $n! \\ne 0$ for every $n$ by induction. For the second, apply the bridge clause\n6 of that lemma to clause (a) above. This is what makes the factorial of this\npage and the real-valued product $\\prod_{j<n}(j+1)$ used elsewhere in the library\n**one object seen twice**, rather than two unrelated notions.\n\n**(c) $n^{\\underline{k}}\\cdot(n-k)! = n!$ for $k \\le n$.** Induction on $k$, for\nall $n$ at once. At $k = 0$ this reads $1 \\cdot n! = n!$. Assume it at $k$ and\nlet $\\sigma(k) \\le n$; then $k \\le n$, and writing $d := n - k$ we have\n$k + d = n$ and $d \\ne 0$, since $k + 0 = k \\ne n$; so $d = \\sigma(e)$ for a\nunique $e$ ([[lem-nat-nonzero-is-successor]]), and $\\sigma(k) + e = n$, that is\n$e = n - \\sigma(k)$ ([[lem-nat-add-cancellative]]). Therefore\n$n^{\\underline{\\sigma(k)}}\\cdot\\big(n-\\sigma(k)\\big)! = n^{\\underline{k}}\\cdot(n-k)\\cdot e! = n^{\\underline{k}}\\cdot\\big(e!\\cdot\\sigma(e)\\big) = n^{\\underline{k}}\\cdot\\sigma(e)! = n^{\\underline{k}}\\cdot(n-k)! = n!$,\nusing commutativity and associativity of multiplication\n([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]]) and the recursion\nclause for the factorial.\n\n**(d) Boundary values.** $n^{\\underline{0}} = 1$ for every $n$, by the base\nclause; $n^{\\underline{n}} = n!$, since clause (c) at $k = n$ gives\n$n^{\\underline{n}}\\cdot 0! = n!$ and $0! = 1$; and\n$n^{\\underline{k}} = 0$ whenever $k > n$. For the last, $n - n = 0$ gives\n$n^{\\underline{\\sigma(n)}} = n^{\\underline{n}}\\cdot 0 = 0$, the clause\n$x \\cdot 0 = 0$ being definitional ([[def-nat-multiplication]]), and if\n$n^{\\underline{k}} = 0$ then\n$n^{\\underline{\\sigma(k)}} = 0$ as well, so $n^{\\underline{k}} = 0$ for every\n$k \\ge \\sigma(n)$ by induction.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):\n\n$$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$\n\n$\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written\n$n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times.\n\n**Why the notation is needed at all.** A natural number in this library is a von\nNeumann natural, that is a set ([[def-natural-numbers]]), and a set is not an\nelement of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when\n$n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and\n$x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field,\nand writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an\ninformal text would write $1/(k+1)$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-cauchy-hadamard-for-real-power-series",
      "source_section": "Statement",
      "quote": "Let $\\sum_{n\\ge0}a_n(x-c)^n$ be a real power series with radius $R$ ([[def-real-power-series-and-radius-of-convergence]]), and put\n\n$$L:=\\limsup_{k\\to\\infty}|a_{k+1}|^{1/(k+1)}\\in[0,+\\infty].$$\n\nThen $R$ is the reciprocal of $L$ in the following explicit sense:\n\n$$R=\\begin{cases}+\\infty,&L=0,\\\\[2pt]1/L,&0<L<+\\infty,\\\\[2pt]0,&L=+\\infty.\\end{cases}$$\n\nEquivalently, with the conventions $1/0:=+\\infty$ and $1/(+\\infty):=0$, one has $R=1/L$. The roots use $a_{k+1}$ and the exponent $1/(k+1)$ because $\\mathbb N$ starts at $0$ and a zeroth root is undefined.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "For every real $M>0$, [L1] applied to a geometric base larger than $M$ shows that $\\iota((k+1)!)^{1/(k+1)}>M$ eventually. Hence the coefficient-root limit superior is $+\\infty$.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By [L2], the radius is $0$. At $x=0$ only the constant term survives, while for $x\\ne0$ the terms fail to tend to zero, so the stated convergence set follows.",
      "step": "2.1",
      "inputs": [
        "L2",
        "step 1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "step 2.1: the proof explicitly disposes of the empty or zero-length family case."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 2.1: the proof explicitly handles the zero-valued parameter or zero object used by the statement."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "cex-factorial-power-series-has-radius-zero: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: The real power series $\\sum_{n\\ge0}\\iota(n!)x^n$ has radius $0$: it converges at its centre $x=0$ and diverges at every $x\\ne0$."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "cex-factorial-power-series-has-radius-zero: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: The real power series $\\sum_{n\\ge0}\\iota(n!)x^n$ has radius $0$: it converges at its centre $x=0$ and diverges at every $x\\ne0$."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "cex-factorial-power-series-has-radius-zero: no interval or radial endpoint is part of the conclusion; checked against the Statement: The real power series $\\sum_{n\\ge0}\\iota(n!)x^n$ has radius $0$: it converges at its centre $x=0$ and diverges at every $x\\ne0$."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "cex-factorial-power-series-has-radius-zero: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement: The real power series $\\sum_{n\\ge0}\\iota(n!)x^n$ has radius $0$: it converges at its centre $x=0$ and diverges at every $x\\ne0$."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "cex-factorial-power-series-has-radius-zero: the Statement is not an equivalence, so there is no forward implication obligation: The real power series $\\sum_{n\\ge0}\\iota(n!)x^n$ has radius $0$: it converges at its centre $x=0$ and diverges at every $x\\ne0$."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "cex-factorial-power-series-has-radius-zero: the Statement is not an equivalence, so there is no reverse implication obligation: The real power series $\\sum_{n\\ge0}\\iota(n!)x^n$ has radius $0$: it converges at its centre $x=0$ and diverges at every $x\\ne0$."
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cex-factorial-power-series-has-radius-zero",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "thm-cauchy-hadamard-for-real-power-series",
    "declared_target": "thm-cauchy-hadamard-for-real-power-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-factorial-power-series-has-radius-zero",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "lem-factorial-beats-geometric",
    "declared_target": "lem-factorial-beats-geometric",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-factorial-power-series-has-radius-zero",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "def-factorial-and-falling-factorial",
    "declared_target": "def-factorial-and-falling-factorial",
    "target_statement_provenance": "ai-altered",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-factorial-power-series-has-radius-zero",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (4)

### `def-canonical-natural`

````markdown
---
id: def-canonical-natural
kind: definition
title: "The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-natural-numbers, thm-recursion]
justified_by: []
forward_refs: [def-metric-completion]
aliases: []
landmark: false
short: "$\\iota(n) = n \\cdot 1_F$"
verification:
  precheck: n/a
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Characteristic (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Characteristic_(algebra)"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

## Remarks

- **Where the index shift comes from.** $\mathbb{N}$ contains $0$
  ([[def-natural-numbers]]) and $\iota(0) = 0_F$, so $1/\iota(k)$ is undefined at
  $k = 0$. A family of reciprocals indexed by $\mathbb{N}$ is therefore written
  over $\iota(k+1)$, which is why the harmonic and telescoping families of this
  library run over $k+1$ rather than over $k$. This is bookkeeping, not a
  restriction: the values are the usual ones.

- **This definition records notation; the arithmetic is proved elsewhere.** That
  $\iota$ is strictly increasing and positive on $n \ge 1$, and that it carries
  sums to sums and products to products, is [[lem-of-naturals-positive]], stated
  for an ordered field. That lemma introduces the same element by the equivalent
  recursion $1 \cdot 1_F = 1_F$, $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, which
  agrees with the definition above because $\iota(1) = \iota(0) + 1_F = 1_F$.
  Nothing here is new mathematics; the definition exists so that the notation has
  a home a reader can look up.

- **The symbol $\iota$ is used in this library for other canonical maps, and this
  definition does not govern them.** It also denotes the canonical field
  embedding $\iota : \mathbb{Q} \to F$ ([[lem-of-q-embeds]]), the isometric
  embedding of a metric space into a completion ([[def-metric-completion]]), and
  an inclusion map $\iota : S \to X$ of a subspace. Each of those is introduced
  where it is used and means something different from the map defined here. What
  the four share is only that each is the canonical map of its situation.

- **Fields, not just ordered fields.** The recursion needs no order, so the
  definition is stated for a field; every use in this library is in an ordered
  field, and the order is what makes $\iota$ injective
  ([[lem-of-naturals-positive]]). In a field of positive characteristic $\iota$
  is not injective, which is one reason the injectivity is a lemma rather than
  part of the definition.
````

### `def-factorial-and-falling-factorial`

````markdown
---
id: def-factorial-and-falling-factorial
kind: definition
title: "The factorial $n!$ and the falling factorial $n^{\\underline{k}}$, defined by recursion in $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-recursion, thm-induction-principle, def-nat-finite-sum-and-product,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-nat-multiplication,
       lem-nat-mult-associative, lem-nat-mult-commutative, lem-nat-mult-identity,
       lem-nat-mult-cancellative, lem-nat-add-cancellative, def-nat-order,
       lem-nat-nonzero-is-successor, thm-omega-is-peano-system, def-canonical-natural]
justified_by: []
forward_refs: [lem-factorial-beats-geometric, def-monoid-finite-product]
aliases: []
landmark: true
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Factorial (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Factorial"
    - title: "Falling and rising factorials (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Falling_and_rising_factorials"
    - title: "Empty product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_product"
pipeline_run: null
---

## Definition

**The factorial.** By the recursion theorem ([[thm-recursion]]) applied to the
set $\mathbb{N}\times\mathbb{N}$, the starting element $(0,1)$ and the function
$f(k, v) = (\sigma(k),\, v \cdot \sigma(k))$, and by the same induction on the
first coordinate as in [[def-nat-finite-sum-and-product]], there is a unique
$F : \mathbb{N} \to \mathbb{N}$ with

$$F(0) = 1, \qquad F(\sigma(n)) = F(n)\cdot\sigma(n) \quad (n \in \mathbb{N}).$$

We write $n! := F(n)$. Thus $0! = 1$, $1! = 0!\cdot 1 = 1$, $2! = 1!\cdot 2 = 2$,
$3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$.

**$0! = 1$ is the base clause of this recursion**, not a convention imported from
elsewhere. Nothing about empty products is presupposed; the agreement with the
empty product is proved below, in clause (a), rather than assumed.

**Truncated difference.** Throughout, $n - k$ is the operation fixed in
[[def-nat-finite-sum-and-product]]: the unique $j$ with $k + j = n$ when
$k \le n$, and $0$ when $n < k$.

**The falling factorial.** For $n \in \mathbb{N}$ define $n^{\underline{k}}$ by
recursion on $k$, by the recursion theorem applied to
$\mathbb{N}\times\mathbb{N}$ with starting element $(0,1)$ and
$f(k, v) = (\sigma(k),\, v \cdot (n-k))$:

$$n^{\underline{0}} = 1, \qquad n^{\underline{\sigma(k)}} = n^{\underline{k}}\cdot(n-k) .$$

So $n^{\underline{1}} = 1\cdot(n-0) = n$ and $n^{\underline{2}} = n\,(n-1)$, and
for $k \le n$ the value is the product $n(n-1)\cdots(n-k+1)$ of the $k$ topmost
factors.

**Four facts, proved here because the page uses each of them.**

**(a) The factorial is the product of the first $n$ positive naturals.**
$n! = \prod_{j<n}\sigma(j) = \prod_{j<n}(j+1)$, the $\mathbb{N}$-valued product of
[[def-nat-finite-sum-and-product]]. Induction ([[thm-induction-principle]]): at
$n = 0$ both sides are $1$, the empty product and the base clause agreeing; and
$\prod_{j<\sigma(n)}\sigma(j) = \big(\prod_{j<n}\sigma(j)\big)\cdot\sigma(n) = n!\cdot\sigma(n) = \sigma(n)!$.
**So the empty-product reading and the base-clause reading are the same reading**,
and neither was assumed.

**(b) $n! \ne 0$, and $\iota(n!) = \prod^{\mathbb{R}}_{j<n}\iota(j+1)$.** For the
first, $0! = 1 \ne 0$ ([[thm-omega-is-peano-system]]) and
$\sigma(n)! = n!\cdot\sigma(n)$ is a product of two nonzero naturals, which is
nonzero: if $xy = 0$ with $y \ne 0$ then $xy = 0\cdot y$
([[lem-nat-mult-identity]]) and cancellation gives $x = 0$
([[lem-nat-mult-cancellative]]). So $n! \ne 0$ for every $n$ by induction. For the second, apply the bridge clause
6 of that lemma to clause (a) above. This is what makes the factorial of this
page and the real-valued product $\prod_{j<n}(j+1)$ used elsewhere in the library
**one object seen twice**, rather than two unrelated notions.

**(c) $n^{\underline{k}}\cdot(n-k)! = n!$ for $k \le n$.** Induction on $k$, for
all $n$ at once. At $k = 0$ this reads $1 \cdot n! = n!$. Assume it at $k$ and
let $\sigma(k) \le n$; then $k \le n$, and writing $d := n - k$ we have
$k + d = n$ and $d \ne 0$, since $k + 0 = k \ne n$; so $d = \sigma(e)$ for a
unique $e$ ([[lem-nat-nonzero-is-successor]]), and $\sigma(k) + e = n$, that is
$e = n - \sigma(k)$ ([[lem-nat-add-cancellative]]). Therefore
$n^{\underline{\sigma(k)}}\cdot\big(n-\sigma(k)\big)! = n^{\underline{k}}\cdot(n-k)\cdot e! = n^{\underline{k}}\cdot\big(e!\cdot\sigma(e)\big) = n^{\underline{k}}\cdot\sigma(e)! = n^{\underline{k}}\cdot(n-k)! = n!$,
using commutativity and associativity of multiplication
([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]]) and the recursion
clause for the factorial.

**(d) Boundary values.** $n^{\underline{0}} = 1$ for every $n$, by the base
clause; $n^{\underline{n}} = n!$, since clause (c) at $k = n$ gives
$n^{\underline{n}}\cdot 0! = n!$ and $0! = 1$; and
$n^{\underline{k}} = 0$ whenever $k > n$. For the last, $n - n = 0$ gives
$n^{\underline{\sigma(n)}} = n^{\underline{n}}\cdot 0 = 0$, the clause
$x \cdot 0 = 0$ being definitional ([[def-nat-multiplication]]), and if
$n^{\underline{k}} = 0$ then
$n^{\underline{\sigma(k)}} = 0$ as well, so $n^{\underline{k}} = 0$ for every
$k \ge \sigma(n)$ by induction.

## Remarks

- **Why $0! = 1$ is not imported.** The empty-product convention of an arbitrary
  monoid is fixed in [[def-monoid-finite-product]], which comes later in the
  reading order, so citing it here would be a dependency pointing the wrong way.
  Taking $0! = 1$ as the base clause of the factorial's own recursion costs
  nothing and owes nothing, and clause (a) then records the agreement.

- **The library's other factorial.** [[lem-factorial-beats-geometric]], later in
  the reading order, works with a real-valued factorial defined as the product
  $\prod_{j<n}(j+1)$ in $\mathbb{R}$. Clause (b) says that this is exactly
  $\iota(n!)$, so the two agree and no second notion has been created. That
  pointer is orientation only.

- **Check every clause at $k = 0$ and at $k = n$.** The falling factorial is
  defined by two regimes, one for $k \le n$ and one beyond, and the recursion
  above covers both because the truncated difference is $0$ past the end. The
  two values that get used constantly are $n^{\underline{0}} = 1$ and
  $n^{\underline{n}} = n!$, and both are clause (d).
````

### `lem-factorial-beats-geometric`

````markdown
---
id: lem-factorial-beats-geometric
kind: lemma
title: "For every real $x$, $x^k/k! \\to 0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-finite-sum, lem-finite-sum-laws, def-integer-power, lem-power-laws, lem-power-monotone, lem-geometric-sequence-null, thm-of-archimedean, thm-squeeze, thm-algebra-of-limits, lem-limit-of-tail, def-real-limit, def-sequence, lem-of-abs-value, thm-induction-principle, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-sign-rules, lem-of-add-order, prop-of-multiply-inequalities, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [ex-standard-limits-worked]
aliases: []
landmark: false
short: "$x^k/k! \\to 0$"
proof_strategy: induction
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
    - title: "Factorial (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Factorial"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.5"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Write $\iota(n) := n \cdot 1_{\mathbb{R}}$ for the canonical natural
([[lem-of-naturals-positive]]) and define the **factorial** as the finite product
([[def-finite-sum]])

$$k! \;:=\; \prod_{j < k} \iota(j+1) \qquad (k \in \mathbb{N}),$$

so that $0! = 1$, the empty product, and $(k+1)! = k! \cdot \iota(k+1)$. Every
$k!$ is a positive real. Then, for every $x \in \mathbb{R}$,

$$\frac{x^{k}}{k!} \longrightarrow 0 ,$$

the numerator being the integer power of [[def-integer-power]] and the
convergence that of [[def-real-limit]].

The index range needs no adjustment: $k!$ is defined at $k = 0$ with value $1$,
and $x^0 = 1$, so the sequence begins with $x^0/0! = 1$.

## Facts & Assumptions

**Given:** A real $x$; the modulus $M := |x| \ge 0$; the factorials $k! = \prod_{j<k}\iota(j+1)$; and the canonical naturals $\iota(n) = n \cdot 1_{\mathbb{R}}$.

[A1] $P(j)$ denotes the statement $M^{N+j}/(N+j)! \le A \lambda^{j}$, where $N$, $\lambda$ and $A$ are fixed in step 1.3.

[L1] Finite products: the empty product is $1$, $\prod_{j<m+1} a_j = \big(\prod_{j<m} a_j\big) a_m$, and a product of positive factors is positive ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] Integer powers: $z^{0} = 1$, $z^{m+1} = z^{m} z$, and $z \ge 0$ implies $z^{m} \ge 0$ ([[def-integer-power]], [[lem-power-monotone]], [[lem-power-laws]]).

[L3] Absolute value: $|zw| = |z||w|$, $|z| \ge 0$, and $|z| = z$ for $z \ge 0$ ([[lem-of-abs-value]]).

[L4] Induction principle ([[thm-induction-principle]]).

[L5] Canonical naturals: $\iota(n) > 0$ and invertible for $n \ge 1$, $\iota$ is strictly increasing, and for every real $y$ there is a natural $N \ge 1$ with $y < \iota(N)$ ([[lem-of-naturals-positive]], [[thm-of-archimedean]], [[def-nat-order]], [[thm-nat-linear-order]]).

[L6] Order arithmetic: [[lem-of-inverse-positive]], claim 4 of [[lem-of-sign-rules]] and [[lem-of-add-order]] state the strict forms, that $0 < u < v$ gives $0 < 1/v < 1/u$, that multiplication by a positive element preserves $<$, and that inequalities may be translated and added; adjoining the case of equality gives the nonstrict forms used below, and multiplication by $0$ sends both sides to $0$, so a nonnegative multiplier preserves $\le$. Products of nonnegative inequalities multiply in the nonstrict form stated by [[prop-of-multiply-inequalities]].

[L7] Geometric sequences: $|r| < 1$ implies $r^{j} \to 0$ ([[lem-geometric-sequence-null]]); a scalar multiple of a convergent sequence converges to the scalar multiple of the limit ([[thm-algebra-of-limits]]).

[L8] Squeeze theorem, and the fact that a constant sequence converges to its value ([[thm-squeeze]], [[def-sequence]]).

[L9] A sequence converges to $z$ if and only if some tail of it does; the $K$-th tail of $(z_k)$ is $j \mapsto z_{j+K}$ ([[lem-limit-of-tail]], [[def-sequence]]).

## Proof

**Proof technique:** induction.

1.1 Each $k!$ is a product of the positive reals $\iota(j+1)$, $j < k$, hence positive, and $(k+1)! = k! \cdot \iota(k+1)$; also $M = |x| \ge 0$. [given, L1, L3, L5]

1.2 For every $k \in \mathbb{N}$ one has $|x^{k}| = M^{k}$: at $k = 0$ both sides are $|1| = 1 = M^{0}$, and if $|x^{k}| = M^{k}$ then $|x^{k+1}| = |x^{k} x| = |x^{k}||x| = M^{k} M = M^{k+1}$, so this follows by induction on $k$. [given, L2, L3, L4]

1.3 Take a natural $N \ge 1$ with $M < \iota(N)$ and put $\lambda := M/\iota(N)$ and $A := M^{N}/N!$. Then $0 \le \lambda < 1$, since $0 \le M < \iota(N)$ and $\iota(N) > 0$, and $A \ge 0$. [given, L1, L2, L5, L6, choose]

1.4 The statement $P(0)$ holds, with equality: $M^{N+0}/(N+0)! = M^{N}/N! = A = A \cdot 1 = A\lambda^{0}$. [given, A1, L2, base]

1.5 Fix $j \in \mathbb{N}$ and assume $P(j)$, that is $M^{N+j}/(N+j)! \le A\lambda^{j}$. [A1, ih]

2.1 Then $P(j+1)$ holds. Indeed $M^{N+j+1}/(N+j+1)! = \big(M^{N+j}/(N+j)!\big)\big(M/\iota(N+j+1)\big)$, and $N + j + 1 > N$ gives $\iota(N+j+1) > \iota(N) > 0$, hence $0 \le M/\iota(N+j+1) \le M/\iota(N) = \lambda$; since also $0 \le M^{N+j}/(N+j)! \le A\lambda^{j}$ by step 1.5 and $A\lambda^{j} \ge 0$, multiplying the two nonnegative inequalities gives $M^{N+j+1}/(N+j+1)! \le A\lambda^{j}\lambda = A\lambda^{j+1}$. [step 1.5, A1, L1, L2, L5, L6]

3.1 By the induction principle $P(j)$ holds for every $j \in \mathbb{N}$, and $M^{N+j}/(N+j)! \ge 0$ always, so $0 \le M^{N+j}/(N+j)! \le A\lambda^{j}$ for every $j$. [step 1.4, step 2.1, A1, L1, L2, L4]

4.1 Since $|\lambda| = \lambda < 1$, the sequence $(\lambda^{j})_j$ converges to $0$, hence so does $(A\lambda^{j})_j$; the constant sequence $0$ also converges to $0$, so the squeeze theorem applied to step 3.1 shows that the $N$-th tail $j \mapsto M^{N+j}/(N+j)!$ converges to $0$, and therefore $(M^{k}/k!)_k$ converges to $0$. Finally $|x^{k}/k! - 0| = |x^{k}|/k! = M^{k}/k!$ by steps 1.1 and 1.2, so $x^{k}/k! \to 0$. [step 3.1, step 1.1, step 1.2, L3, L7, L8, L9, discharge-induction] ∎

## Remarks

- **The threshold $N$ is chosen so that the ratio is bounded by a constant less
  than $1$.** Beyond index $N$ each further factor of the factorial is at least
  $\iota(N)$, so multiplying by $x$ and dividing by that factor shrinks the term
  by at least the factor $\lambda = M/\iota(N) < 1$. That is the entire mechanism:
  a factorial eventually beats a geometric sequence because its ratios, unlike a
  geometric sequence's, tend to $0$.

- **No halving is used.** Many texts take $N$ with $M/N \le 1/2$; here it is
  enough to take $N$ with $M < \iota(N)$, which the Archimedean property supplies
  directly and which keeps every quantity a ratio of things already in hand.

- **The case $x = 0$ is not special.** Then $M = 0$, $\lambda = 0$ and the bound
  reads $M^{N+j}/(N+j)! \le 0$ for $j \ge 1$, which is correct since those terms
  are $0$; and $(0^{j})_j$ converges to $0$ because $|0| < 1$, so
  [[lem-geometric-sequence-null]] applies unchanged.

- **This is the strongest of the three standard comparisons on this page.**
  [[lem-power-over-geometric-null]] says a power is beaten by a geometric
  sequence; this says every geometric sequence, that is every fixed $x$, is beaten
  by the factorial. Instances are worked in [[ex-standard-limits-worked]].
````

### `thm-cauchy-hadamard-for-real-power-series`

````markdown
---
id: thm-cauchy-hadamard-for-real-power-series
kind: theorem
title: "Cauchy–Hadamard: the reciprocal radius is $\\limsup_{k\\to\\infty}|a_{k+1}|^{1/(k+1)}$, with the zero and infinite cases included"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-power-series-and-radius-of-convergence, def-limsup-liminf, lem-limsup-exists, lem-limsup-epsilon-characterisation, thm-root-test, def-absolute-and-conditional-convergence]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Cauchy-Hadamard theorem, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Cauchy-Hadamard_theorem"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
pipeline_run: null
---

## Statement

Let $\sum_{n\ge0}a_n(x-c)^n$ be a real power series with radius $R$ ([[def-real-power-series-and-radius-of-convergence]]), and put

$$L:=\limsup_{k\to\infty}|a_{k+1}|^{1/(k+1)}\in[0,+\infty].$$

Then $R$ is the reciprocal of $L$ in the following explicit sense:

$$R=\begin{cases}+\infty,&L=0,\\[2pt]1/L,&0<L<+\infty,\\[2pt]0,&L=+\infty.\end{cases}$$

Equivalently, with the conventions $1/0:=+\infty$ and $1/(+\infty):=0$, one has $R=1/L$. The roots use $a_{k+1}$ and the exponent $1/(k+1)$ because $\mathbb N$ starts at $0$ and a zeroth root is undefined.

## Facts & Assumptions

**Given:** A real power series $\sum a_n(x-c)^n$, its radius $R$, the nonnegative root sequence $q_k:=|a_{k+1}|^{1/(k+1)}$, and $L:=\limsup_k q_k$.

[L1] The limit superior $L$ exists in $\overline{\mathbb R}$ for every real sequence ([[def-limsup-liminf]], [[lem-limsup-exists]]).

[L2] If $L$ is real, then for every real $\varepsilon>0$, $q_k<L+\varepsilon$ eventually and $q_k>L-\varepsilon$ frequently ([[lem-limsup-epsilon-characterisation]]).

[L3] The root test says that a real series from index $1$ converges absolutely when the limit superior of its shifted roots is $<1$, and diverges when that limit superior is $>1$ ([[thm-root-test]]).

[L4] Absolute convergence means convergence of the series of absolute values ([[def-absolute-and-conditional-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in\mathbb R$ and put $d:=|x-c|$. The shifted roots of the terms $a_n(x-c)^n$, $n\ge1$, are $|a_{k+1}(x-c)^{k+1}|^{1/(k+1)}=q_kd$. [given, algebra]

2.1 If $L=0$, then for $d=0$ every root in step 1.1 is $0$, while for $d>0$ and any $\eta>0$, [L2] applied with $\varepsilon=\eta/d$ makes $q_kd<\eta$ eventually. Thus $\limsup_k(q_kd)=0<1$ for every $x$. [step 1.1, L2]

2.2 Suppose $0<L<+\infty$. If $d<1/L$, choose a real $t$ with $L<t<1/d$ (with the second inequality omitted when $d=0$). By [L2], $q_k<t$ eventually, so $\limsup_k(q_kd)\le td<1$. If $d>1/L$, choose $t$ with $1/d<t<L$; [L2] gives $q_k>t$ frequently, so $\limsup_k(q_kd)\ge td>1$. [step 1.1, L2, choose]

2.3 If $L=+\infty$ and $d>0$, then for every real $M>0$ and every index $N$ there is $k\ge N$ with $q_k>M$: otherwise $M$ would bound a tail and its supremum, forcing the infimum of the tail suprema to be finite. Taking $M>1/d$ shows $q_kd>1$ arbitrarily late, hence $\limsup_k(q_kd)>1$. [L1, step 1.1, choose]

3.1 By [L3] and [L4], step 2.1 gives absolute convergence at every real $x$ when $L=0$; step 2.2 gives absolute convergence for $d<1/L$ and divergence for $d>1/L$ when $0<L<+\infty$; and step 2.3 gives divergence at every $x\ne c$ when $L=+\infty$, while the series converges at $c$ to $a_0$. [step 2.1, step 2.2, step 2.3, L3, L4]

4.1 Reading these three alternatives through the definition of the radius yields $R=+\infty$, $R=1/L$, and $R=0$, respectively, which is the stated convention-complete formula. [step 3.1] ∎
````

