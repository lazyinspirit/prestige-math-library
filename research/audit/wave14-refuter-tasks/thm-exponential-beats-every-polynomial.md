## Selection reasons

- high risk (7): 6 declared dependencies; 3 cited facts; quotient or equivalence-class construction; analytic limiting/completeness language

## Target item — `thm-exponential-beats-every-polynomial`

Normalized current SHA-256: `5afca04f00278d84bc10976941134c6c48ec48d3df05a0aa4f65768e45547408`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-exponential-beats-every-polynomial
kind: theorem
title: "The exponential dominates every fixed nonnegative integer power at $+\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-exponential-function-and-e, cor-exponential-reciprocal-and-positivity, def-limits-at-infinity, def-factorial-and-falling-factorial, def-canonical-natural, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "MIT 18.102, Chapter 4 notes"
      url: "https://math.mit.edu/~rbm/18-102-Sp16/Chapter4.pdf"
pipeline_run: null
---

## Statement

For every $m\in\mathbb N$ and every real $a>0$,
$$\frac{x^m}{\exp(ax)}\longrightarrow0\qquad(x\to+\infty).$$

## Facts & Assumptions

**Given:** $m\in\mathbb N$ and $a>0$.

[L1] Every term of the exponential series is nonnegative at a nonnegative argument ([[def-real-exponential-function-and-e]]).

[L2] The exponential reciprocal identity is [[cor-exponential-reciprocal-and-positivity]], and limits at infinity are [[def-limits-at-infinity]].

## Proof

**Proof technique:** direct.

1.1 For $x>0$, retain term $m+1$ of the series at $ax$: $\exp(ax)\ge (ax)^{m+1}/\iota((m+1)!)$.   [L1, given]

2.1 Hence $0\le x^m/\exp(ax)\le \iota((m+1)!)/(a^{m+1}x)$.  [step 1.1, L2, algebra]

3.1 The upper bound tends to $0$, so the quotient tends to $0$.  [step 2.1, L2] ∎
````

## Wave 14 provenance row

```json
{
  "id": "thm-exponential-beats-every-polynomial",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.mit.edu/~rbm/18-102-Sp16/Chapter4.pdf"
  ],
  "rationale": "The MIT notes prove that the exponential dominates every fixed polynomial power using a retained factorial-series term. The item includes an arbitrary positive scaling a and spells out both infinity limits, a standard change of variables and reciprocal reformulation.",
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
      "source": "def-real-exponential-function-and-e",
      "source_section": "Definition",
      "quote": "For $x\\in\\mathbb R$, define\n$$\\exp(x):=\\sum_{n=0}^{\\infty}\\frac{x^n}{\\iota(n!)}, \\qquad e:=\\exp(1),$$\nprovided by the all-real convergence proved in [[lem-exponential-series-has-infinite-radius]]. Here $n!\\in\\mathbb N$ is the factorial of [[def-factorial-and-falling-factorial]], $\\iota(n!)$ is its nonzero real image ([[def-canonical-natural]], [[lem-of-naturals-positive]]), and powers and series are those of [[def-integer-power]] and [[def-series]].\n\nThis is a real power series centred at $0$ ([[def-real-power-series-and-radius-of-convergence]]). No logarithm, irrational power, or differential equation enters the definition.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-exponential-reciprocal-and-positivity",
      "source_section": "Statement",
      "quote": "For every real $x$, $\\exp(x)>0$ and\n$$\\exp(-x)=\\frac1{\\exp(x)}.$$",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-limits-at-infinity",
      "source_section": "Definition",
      "quote": "Throughout, $+\\infty$ and $-\\infty$ are **abbreviations and not real numbers**,\nexactly as in [[def-interval]] and [[def-divergence-to-infinity]]. Every phrase\nbelow is a single abbreviation for a displayed condition on reals, and no\narithmetic is ever performed with the symbols.\n\n**Limits at $+\\infty$.** Let $A \\subseteq \\mathbb{R}$ be **not bounded above**\n([[def-bounded-set]]), let $f : A \\to \\mathbb{R}$ and let $L \\in \\mathbb{R}$. We\nwrite\n\n$$\\lim_{x \\to +\\infty} f(x) = L$$\n\nwhen for every real $\\varepsilon > 0$ there is a real $M$ such that\n\n$$|f(x) - L| < \\varepsilon \\qquad \\text{for every } x \\in A \\text{ with } x > M .$$\n\n**Limits at $-\\infty$.** Let $A$ be **not bounded below**. We write\n$\\lim_{x \\to -\\infty} f(x) = L$ when for every real $\\varepsilon > 0$ there is a\nreal $M$ with $|f(x) - L| < \\varepsilon$ for every $x \\in A$ with $x < M$.\n\n**Why unboundedness is required.** It plays exactly the role the limit-point\ncondition plays in [[def-function-limit]]. Saying that $A$ is not bounded above\nsays that no real is an upper bound of $A$, that is, that for every real $M$\nthere is $x \\in A$ with $x > M$ ([[def-bounded-set]],\n[[def-complete-ordered-field]]); so the set over which the condition quantifies\nis never empty and the condition is never vacuous. Without the hypothesis every\nreal $L$ would satisfy it and the notation would not denote.\n\n**Uniqueness, proved here.** Suppose $A$ is not bounded above and\n$\\lim_{x \\to +\\infty} f(x) = L$ and $\\lim_{x \\to +\\infty} f(x) = L'$ with\n$L \\ne L'$. Then $|L - L'| > 0$ ([[lem-of-abs-value]]), so\n$\\varepsilon := |L - L'|/2 > 0$ ([[cor-of-one-positive]],\n[[lem-of-inverse-positive]], [[lem-of-sign-rules]]). Choose reals $M_1, M_2$\nwitnessing the two conditions at this $\\varepsilon$ and let $M$ be the larger of\nthem, the order being total. Since $A$ is not bounded above there is $x \\in A$\nwith $x > M$, hence with $x > M_1$ and $x > M_2$, and then\n\n$$|L - L'| = |(L - f(x)) + (f(x) - L')| \\le |f(x) - L| + |f(x) - L'| < 2\\varepsilon = |L - L'|$$\n\n([[lem-of-triangle-inequality]], [[lem-of-abs-value]], [[lem-of-add-order]]),\nwhich trichotomy forbids. So $L = L'$, and the notation\n$\\lim_{x \\to +\\infty} f(x)$ denotes a single real. The same four lines, with the\ninequalities on $x$ reversed, give uniqueness at $-\\infty$.\n\n**Infinite limits at a point.** Let $A \\subseteq \\mathbb{R}$, let $c$ be a limit\npoint of $A$ ([[def-limit-point-r]]) and let $f : A \\to \\mathbb{R}$. We write\n\n$$f(x) \\to +\\infty \\ \\text{ as } \\ x \\to c$$\n\nwhen for every real $M$ there is a real $\\delta > 0$ such that $f(x) > M$ for\nevery $x \\in A$ with $0 < |x - c| < \\delta$; and $f(x) \\to -\\infty$ as $x \\to c$\nwhen for every real $M$ there is a real $\\delta > 0$ with $f(x) < M$ for every\nsuch $x$.\n\n**This library does not write $\\lim_{x \\to c} f(x) = +\\infty$.** The right-hand\nside would not be an element of $\\mathbb{R}$, and writing the equation would\nsilently move the discussion into the extended real line, a structure that is\nnot a field. That is the convention already fixed by\n[[def-divergence-to-infinity]] for sequences and by [[rem-sup-conventions]] for\nsuprema, and it is kept here. In particular none of the rules of\n[[thm-algebra-of-function-limits]] may be applied to a function tending to\n$\\pm\\infty$.\n\n**Combined forms.** Let $A$ be not bounded above and $f : A \\to \\mathbb{R}$. We\nwrite $f(x) \\to +\\infty$ as $x \\to +\\infty$ when for every real $N$ there is a\nreal $M$ with $f(x) > N$ for every $x \\in A$ with $x > M$. The other forms are\nobtained the same way, by pairing one of the two conditions on $x$ (unbounded\nabove, unbounded below) with one of the two conditions on $f(x)$ (above every\nreal, below every real); each is again a single abbreviation for the displayed\ncondition, and none of them is an equation.",
      "uses": [
        "2.1",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "For $x>0$, retain term $m+1$ of the series at $ax$: $\\exp(ax)\\ge (ax)^{m+1}/\\iota((m+1)!)$.   [L1, given]",
      "step": "1.1",
      "inputs": [
        "L1",
        "given"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Hence $0\\le x^m/\\exp(ax)\\le \\iota((m+1)!)/(a^{m+1}x)$.  [step 1.1, L2, algebra]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L2",
        "algebra"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "The upper bound tends to $0$, so the quotient tends to $0$.  [step 2.1, L2] ∎",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "No set parameter is present."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.1 explicitly permits m=0 by retaining the m+1 series term."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.1 covers m=1 and every a>0."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The hypothesis a>0 excludes the only degeneracy a=0."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 2.1 and 3.1 check the +infinity limits after the substitutions t=ax and t=a(-x)."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "No arbitrary choice is used."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-exponential-beats-every-polynomial",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-real-exponential-function-and-e",
    "declared_target": "def-real-exponential-function-and-e",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-beats-every-polynomial",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "cor-exponential-reciprocal-and-positivity",
    "declared_target": "cor-exponential-reciprocal-and-positivity",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-beats-every-polynomial",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-limits-at-infinity",
    "declared_target": "def-limits-at-infinity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-beats-every-polynomial",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
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
    "source": "thm-exponential-beats-every-polynomial",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-beats-every-polynomial",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
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

## Full exact-current text of every cited or declared item (6)

### `cor-exponential-reciprocal-and-positivity`

````markdown
---
id: cor-exponential-reciprocal-and-positivity
kind: corollary
title: "The exponential is positive and satisfies $\\exp(-x)=1/\\exp(x)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-exponential-addition-formula, def-real-exponential-function-and-e, lem-of-square-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "J. K. Hunter, An Introduction to Real Analysis, Chapter 10"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch10.pdf"
    - title: "S. G. Johnson, Exponential Functions"
      url: "https://math.mit.edu/~stevenj/exponential.pdf"
pipeline_run: null
---

## Statement

For every real $x$, $\exp(x)>0$ and
$$\exp(-x)=\frac1{\exp(x)}.$$

## Facts & Assumptions

**Given:** $x\in\mathbb R$.

[L1] $\exp(x+y)=\exp(x)\exp(y)$ ([[thm-exponential-addition-formula]]), and $\exp(0)=1$ from [[def-real-exponential-function-and-e]].

[L2] Every nonzero square in an ordered field is positive ([[lem-of-square-positive]]).

## Proof

**Proof technique:** direct.

1.1 Setting $y=-x$ in [L1] gives $\exp(x)\exp(-x)=1$, so both factors are nonzero.  [L1, algebra]

2.1 Also $\exp(x)=\exp(x/2)^2$, so it is nonnegative; by step 1.1 and [L2] it is positive.  [L1, L2]

3.1 Dividing the identity in step 1.1 by $\exp(x)$ gives the reciprocal formula.  [step 1.1, algebra] ∎
````

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

### `def-limits-at-infinity`

````markdown
---
id: def-limits-at-infinity
kind: definition
title: "Limits at $+\\infty$ and $-\\infty$, and infinite limits at a point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-divergence-to-infinity, def-interval, def-bounded-set, def-complete-ordered-field, lem-of-abs-value, lem-of-triangle-inequality, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive]
justified_by: []
aliases: [def-limit-at-infinity, def-infinite-limit-at-a-point]
landmark: true
short: "limits at and to infinity"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.5"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Throughout, $+\infty$ and $-\infty$ are **abbreviations and not real numbers**,
exactly as in [[def-interval]] and [[def-divergence-to-infinity]]. Every phrase
below is a single abbreviation for a displayed condition on reals, and no
arithmetic is ever performed with the symbols.

**Limits at $+\infty$.** Let $A \subseteq \mathbb{R}$ be **not bounded above**
([[def-bounded-set]]), let $f : A \to \mathbb{R}$ and let $L \in \mathbb{R}$. We
write

$$\lim_{x \to +\infty} f(x) = L$$

when for every real $\varepsilon > 0$ there is a real $M$ such that

$$|f(x) - L| < \varepsilon \qquad \text{for every } x \in A \text{ with } x > M .$$

**Limits at $-\infty$.** Let $A$ be **not bounded below**. We write
$\lim_{x \to -\infty} f(x) = L$ when for every real $\varepsilon > 0$ there is a
real $M$ with $|f(x) - L| < \varepsilon$ for every $x \in A$ with $x < M$.

**Why unboundedness is required.** It plays exactly the role the limit-point
condition plays in [[def-function-limit]]. Saying that $A$ is not bounded above
says that no real is an upper bound of $A$, that is, that for every real $M$
there is $x \in A$ with $x > M$ ([[def-bounded-set]],
[[def-complete-ordered-field]]); so the set over which the condition quantifies
is never empty and the condition is never vacuous. Without the hypothesis every
real $L$ would satisfy it and the notation would not denote.

**Uniqueness, proved here.** Suppose $A$ is not bounded above and
$\lim_{x \to +\infty} f(x) = L$ and $\lim_{x \to +\infty} f(x) = L'$ with
$L \ne L'$. Then $|L - L'| > 0$ ([[lem-of-abs-value]]), so
$\varepsilon := |L - L'|/2 > 0$ ([[cor-of-one-positive]],
[[lem-of-inverse-positive]], [[lem-of-sign-rules]]). Choose reals $M_1, M_2$
witnessing the two conditions at this $\varepsilon$ and let $M$ be the larger of
them, the order being total. Since $A$ is not bounded above there is $x \in A$
with $x > M$, hence with $x > M_1$ and $x > M_2$, and then

$$|L - L'| = |(L - f(x)) + (f(x) - L')| \le |f(x) - L| + |f(x) - L'| < 2\varepsilon = |L - L'|$$

([[lem-of-triangle-inequality]], [[lem-of-abs-value]], [[lem-of-add-order]]),
which trichotomy forbids. So $L = L'$, and the notation
$\lim_{x \to +\infty} f(x)$ denotes a single real. The same four lines, with the
inequalities on $x$ reversed, give uniqueness at $-\infty$.

**Infinite limits at a point.** Let $A \subseteq \mathbb{R}$, let $c$ be a limit
point of $A$ ([[def-limit-point-r]]) and let $f : A \to \mathbb{R}$. We write

$$f(x) \to +\infty \ \text{ as } \ x \to c$$

when for every real $M$ there is a real $\delta > 0$ such that $f(x) > M$ for
every $x \in A$ with $0 < |x - c| < \delta$; and $f(x) \to -\infty$ as $x \to c$
when for every real $M$ there is a real $\delta > 0$ with $f(x) < M$ for every
such $x$.

**This library does not write $\lim_{x \to c} f(x) = +\infty$.** The right-hand
side would not be an element of $\mathbb{R}$, and writing the equation would
silently move the discussion into the extended real line, a structure that is
not a field. That is the convention already fixed by
[[def-divergence-to-infinity]] for sequences and by [[rem-sup-conventions]] for
suprema, and it is kept here. In particular none of the rules of
[[thm-algebra-of-function-limits]] may be applied to a function tending to
$\pm\infty$.

**Combined forms.** Let $A$ be not bounded above and $f : A \to \mathbb{R}$. We
write $f(x) \to +\infty$ as $x \to +\infty$ when for every real $N$ there is a
real $M$ with $f(x) > N$ for every $x \in A$ with $x > M$. The other forms are
obtained the same way, by pairing one of the two conditions on $x$ (unbounded
above, unbounded below) with one of the two conditions on $f(x)$ (above every
real, below every real); each is again a single abbreviation for the displayed
condition, and none of them is an equation.

## Remarks

- **These are the same definition with a different notion of "near".** In
  [[def-function-limit]] the sets $A \cap N^{*}_\delta(c)$ shrink to $c$; here
  the sets $\{\, x \in A : x > M \,\}$ shrink towards being unbounded above. The
  limit-point hypothesis and the unboundedness hypothesis play the same role:
  each says the relevant sets are never empty.

- **One-sided infinite limits.** Combining this definition with
  [[def-one-sided-limits]] gives, for instance, $f(x) \to +\infty$ as
  $x \to c^{+}$, meaning $f^{+}(x) \to +\infty$ as $x \to c$ for the restriction
  $f^{+}$ of $f$ to $A \cap (c, \infty)$, provided $c$ is a limit point of that
  set. Nothing new has to be defined.

- **The extended reals are not needed on these pages.** The extended line
  $\overline{\mathbb{R}}$ of [[def-extended-reals]] exists in this library and is
  the right home for $\limsup$; it is deliberately not used here, because every
  statement above is a statement about reals and quantifiers, and introducing a
  second ordered structure would oblige every later algebraic step to say which
  structure it is working in.
````

### `def-real-exponential-function-and-e`

````markdown
---
id: def-real-exponential-function-and-e
kind: definition
title: "The real exponential function and the number $e$ by a power series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-power-series-and-radius-of-convergence, def-factorial-and-falling-factorial, def-integer-power, def-canonical-natural, lem-of-naturals-positive, def-series]
justified_by: [lem-exponential-series-has-infinite-radius]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Definition

For $x\in\mathbb R$, define
$$\exp(x):=\sum_{n=0}^{\infty}\frac{x^n}{\iota(n!)}, \qquad e:=\exp(1),$$
provided by the all-real convergence proved in [[lem-exponential-series-has-infinite-radius]]. Here $n!\in\mathbb N$ is the factorial of [[def-factorial-and-falling-factorial]], $\iota(n!)$ is its nonzero real image ([[def-canonical-natural]], [[lem-of-naturals-positive]]), and powers and series are those of [[def-integer-power]] and [[def-series]].

This is a real power series centred at $0$ ([[def-real-power-series-and-radius-of-convergence]]). No logarithm, irrational power, or differential equation enters the definition.
````

### `lem-finite-sum-laws`

````markdown
---
id: lem-finite-sum-laws
kind: lemma
title: "Laws of finite sums and finite products"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum, thm-induction-principle, def-ordered-field, def-field, lem-of-add-order, lem-of-sign-rules, lem-of-zero-mult, cor-of-one-positive, lem-of-q-embeds, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## Facts & Assumptions

**Given:** Sequences $a, b, c : \mathbb{N} \to \mathbb{R}$, a real $\lambda$, and naturals $m, n$. Write $\Sigma_n = \sum_{k<n} a_k$ and $\Pi_n = \prod_{k<n} a_k$.

[L1] Recursion clauses ([[def-finite-sum]]): $\sum_{k<0} a_k = 0$ and $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n$; $\prod_{k<0} a_k = 1$ and $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) \cdot a_n$; and $\sum_{k=m}^{n-1} a_k = \sum_{j < n-m} a_{m+j}$ for $m \le n$, likewise for products.

[L2] Field axioms: addition and multiplication are associative and commutative, $0$ and $1$ are the identities, $x - x = 0$, and multiplication distributes over addition ([[def-field]], [[def-ordered-field]]); and $0 \cdot x = 0$, which is not an axiom but a lemma ([[lem-of-zero-mult]]).

[L3] Induction principle: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L4] Adding inequalities: $x \le y$ and $u \le v$ imply $x + u \le y + v$. [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + c < y + c$, and $x < y$ with $u < v$ giving $x + u < y + v$); the nonstrict form used throughout below is those two together with the cases $x = y$ and $u = v$, which are settled by trichotomy, the order being total and transitive ([[def-ordered-field]]).

[L5] The canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is a field homomorphism, so $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[L6] Sign rules: a product of two positives is positive ([[lem-of-sign-rules]], claim 1), and a product of two nonnegatives is nonnegative, since a factor equal to $0$ makes the product $0$ ([[lem-of-zero-mult]]) and otherwise both factors are positive; and $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of the items named above.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: every claim holds at $n = 0$, since both sides of claim 1 are $0 = 0 + 0$, both sides of claim 2 are $0 = \lambda \cdot 0$ and $0 = \iota(0)\lambda$, claim 4 reads $0 \le 0$ with no term to bound and the hypothesis $\sum_{k<0} a_k = 0$ giving nothing to prove, claim 5 reads $0 = c_0 - c_0$, and claim 6 reads $1 = 1 \cdot 1$ with $1 > 0$. [base, L1, L2, L5, L6]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume claims 1, 2, 4, 5 and 6 hold for this $n$ and for all sequences $a, b, c$ and all $\lambda$. [ih]

1.3 Splitting, claim 3, by a separate induction on the number of trailing terms $d = n - m$ with $m$ fixed: for $d = 0$ the claim reads $\sum_{k<m} a_k = \sum_{k<m} a_k + 0$ and $\prod_{k<m} a_k = \big(\prod_{k<m} a_k\big) \cdot 1$, which hold; and if $\sum_{k<m+d} a_k = \sum_{k<m} a_k + \sum_{j<d} a_{m+j}$, then $\sum_{k<m+d+1} a_k = \sum_{k<m+d} a_k + a_{m+d} = \sum_{k<m} a_k + \big(\sum_{j<d} a_{m+j} + a_{m+d}\big) = \sum_{k<m} a_k + \sum_{j<d+1} a_{m+j}$ by associativity, and identically for products with $1$ in place of $0$ and multiplication in place of addition, so induction on $d$ gives claim 3 for every $m \le n$. [L1, L2, L3]

2.1 Additivity at $n+1$: $\sum_{k<n+1}(a_k + b_k) = \sum_{k<n}(a_k + b_k) + (a_n + b_n) = \big(\sum_{k<n} a_k + \sum_{k<n} b_k\big) + (a_n + b_n) = \big(\sum_{k<n} a_k + a_n\big) + \big(\sum_{k<n} b_k + b_n\big) = \sum_{k<n+1} a_k + \sum_{k<n+1} b_k$, using the recursion clause, the hypothesis, and commutativity with associativity of addition. [step 1.2, L1, L2]

2.2 Scaling at $n+1$: $\sum_{k<n+1} \lambda a_k = \sum_{k<n} \lambda a_k + \lambda a_n = \lambda \sum_{k<n} a_k + \lambda a_n = \lambda\big(\sum_{k<n} a_k + a_n\big) = \lambda \sum_{k<n+1} a_k$ by the recursion clause, the hypothesis and distributivity; taking $a_k = 1$ for all $k$ gives $\sum_{k<n+1} \lambda = \sum_{k<n} \lambda + \lambda = \iota(n)\lambda + \lambda = (\iota(n) + 1)\lambda = \iota(n+1)\lambda$. [step 1.2, L1, L2, L5]

2.3 Monotonicity at $n+1$: assume $a_k \le b_k$ for all $k < n+1$; then $a_k \le b_k$ for all $k < n$, so the hypothesis gives $\sum_{k<n} a_k \le \sum_{k<n} b_k$, and adding the inequality $a_n \le b_n$ gives $\sum_{k<n+1} a_k = \sum_{k<n} a_k + a_n \le \sum_{k<n} b_k + b_n = \sum_{k<n+1} b_k$. [step 1.2, L1, L4]

2.4 Telescoping at $n+1$: $\sum_{k<n+1}(c_{k+1} - c_k) = \sum_{k<n}(c_{k+1} - c_k) + (c_{n+1} - c_n) = (c_n - c_0) + (c_{n+1} - c_n) = c_{n+1} - c_0$, by the recursion clause, the hypothesis and the field identities. [step 1.2, L1, L2]

2.5 Products at $n+1$: $\prod_{k<n+1}(a_k b_k) = \big(\prod_{k<n}(a_k b_k)\big)(a_n b_n) = \big(\prod_{k<n} a_k\big)\big(\prod_{k<n} b_k\big)(a_n b_n) = \big(\prod_{k<n+1} a_k\big)\big(\prod_{k<n+1} b_k\big)$ by the recursion clause, the hypothesis, and commutativity with associativity of multiplication; and if every $a_k \ge 0$ for $k < n+1$ then $\prod_{k<n+1} a_k = \big(\prod_{k<n} a_k\big) a_n$ is a product of two nonnegatives, hence nonnegative, with the same argument giving positivity from positivity since $\prod_{k<0} a_k = 1 > 0$. [step 1.2, L1, L2, L6]

3.1 Consequences of monotonicity, completing claim 4: monotonicity itself holds at every $n$, by the induction principle applied to the base case of step 1.1 and the successor step 2.3, so it is available for an arbitrary $n$ in what follows; if $a_k \ge 0$ for all $k < n$ then comparing with the zero sequence gives $\sum_{k<n} a_k \ge \sum_{k<n} 0 = 0$; for $j < n$ splitting at $j$ and then at $j+1$ writes $\sum_{k<n} a_k = \sum_{k<j} a_k + a_j + \sum_{k=j+1}^{n-1} a_k$ with the first and third summands $\ge 0$, so $a_j \le \sum_{k<n} a_k$; and if moreover $\sum_{k<n} a_k = 0$ then $0 \le a_j \le 0$ for every $j < n$, so $a_j = 0$. [step 1.1, step 2.3, step 1.3, L3, L4, L2]

4.1 By the induction principle claims 1, 2, 4, 5 and 6 hold for every $n \in \mathbb{N}$, and claim 3 was proved in step 1.3 with its consequences in step 3.1, so all six laws hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 1.3, step 3.1, L3, discharge-induction] ∎
````

