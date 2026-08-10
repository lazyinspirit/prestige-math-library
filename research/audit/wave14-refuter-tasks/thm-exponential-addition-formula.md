## Selection reasons

- high risk (7): 9 declared dependencies; 6 cited facts; analytic limiting/completeness language

## Target item — `thm-exponential-addition-formula`

Normalized current SHA-256: `013a8f457cfbaed96e888f4d3ea8e2647b1c90db0117dc86d201b32ff2792c8e`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-exponential-addition-formula
kind: theorem
title: "The exponential addition formula $\\exp(x+y)=\\exp(x)\\exp(y)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-exponential-series-has-infinite-radius, lem-cauchy-product-of-real-power-series, thm-binomial-theorem, thm-binomial-closed-formula, def-binomial-coefficient, def-factorial-and-falling-factorial, def-canonical-natural, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
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
    - title: "J. K. Hunter, An Introduction to Real Analysis, Chapter 10"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch10.pdf"
pipeline_run: null
---

## Statement

For all real $x,y$,
$$\exp(x+y)=\exp(x)\exp(y).$$

## Facts & Assumptions

**Given:** $x,y\in\mathbb R$.

[L1] For fixed $x,y$, the auxiliary power series $\sum_{n\ge0}x^nz^n/\iota(n!)$ and $\sum_{n\ge0}y^nz^n/\iota(n!)$ have infinite radius by [[lem-exponential-series-has-infinite-radius]]. Inside their common radius, their product is the Cauchy product of their coefficients ([[lem-cauchy-product-of-real-power-series]]).

[L2] The binomial theorem says $(x+y)^n=\sum_{k=0}^n\iota\binom nk x^ky^{n-k}$ ([[thm-binomial-theorem]], [[def-binomial-coefficient]]).

[L3] For $k\le n$, $\iota\binom nk=\iota(n!)/(\iota(k!)\iota((n-k)!))$ ([[thm-binomial-closed-formula]]). Therefore $1/(\iota(k!)\iota((n-k)!))=\iota\binom nk/\iota(n!)$, with all naturals read in $\mathbb R$ through [[def-canonical-natural]].

## Proof

**Proof technique:** direct.

1.1 Apply [L1] at the auxiliary value $z=1$. The coefficient of degree $n$ in the resulting Cauchy product for $\exp(x)\exp(y)$ is $\sum_{k=0}^n x^ky^{n-k}/(\iota(k!)\iota((n-k)!))$.   [L1, given]

2.1 Apply [L3] and [L2] to identify this finite sum with $(x+y)^n/\iota(n!)$.  [step 1.1, L2, L3, algebra]

3.1 Summing over $n$ gives the exponential series at $x+y$, hence the formula.  [step 2.1, L1] ∎
````

## Wave 14 provenance row

```json
{
  "id": "thm-exponential-addition-formula",
  "statement": "literature-derived",
  "proof": "literature-derived",
  "evidence": "exact-source",
  "urls": [
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch10.pdf",
    "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
  ],
  "rationale": "Hunter Proposition 10.24 states E(x)E(y)=E(x+y) for all real x,y and proves it by the same Cauchy-product and binomial-theorem calculation. The library's embedded-factorial notation is only a notational convention.",
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
      "source": "lem-exponential-series-has-infinite-radius",
      "source_section": "Statement",
      "quote": "For every real $x$, the series $\\sum_{n\\ge0}x^n/\\iota(n!)$ converges absolutely. Its power-series radius is therefore $+\\infty$.",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-cauchy-product-of-real-power-series",
      "source_section": "Statement",
      "quote": "Suppose $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ and $g(x)=\\sum_{n\\ge0}b_n(x-c)^n$ have radii $R_f,R_g$. For $|x-c|<\\min(R_f,R_g)$,\n\n$$f(x)g(x)=\\sum_{n=0}^{\\infty}\\left(\\sum_{k=0}^{n}a_kb_{n-k}\\right)(x-c)^n,$$\n\nand the displayed product series converges absolutely.",
      "uses": [
        "1.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-binomial-theorem",
      "source_section": "Statement",
      "quote": "For all $x, y \\in \\mathbb{R}$ and every $n \\in \\mathbb{N}$,\n\n$$(x+y)^{n} \\;=\\; \\sum_{k<n+1} \\iota\\binom{n}{k}\\, x^{k}\\, y^{\\,n-k},$$\n\nwhere the powers are the integer powers of [[def-integer-power]], the sum is the\nreal finite sum of [[def-finite-sum]] over $k = 0, 1, \\dots, n$, the difference\n$n-k$ is a genuine one because $k \\le n$ throughout the range, and $\\iota$ is the\ncanonical natural of [[def-canonical-natural]].\n\n**The coefficient is $\\iota\\binom{n}{k}$ and not $\\binom{n}{k}$.** A binomial\ncoefficient is a natural number, that is a von Neumann natural, that is a set; it\nis not an element of $\\mathbb{R}$, and it enters the field through $\\iota$.\n\n**The identity is stated in $\\mathbb{R}$ and only in $\\mathbb{R}$.** The same\nproof uses nothing but commutativity, associativity, distributivity and\nnatural-number multiples of a ring element, so a commutative-ring version is\navailable wherever rings are; rings are not available at this point in the\nreading order, and the ring statement is a separate statement, to be made where\nthey are. See the Remarks below.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-binomial-coefficient",
      "source_section": "Definition",
      "quote": "For a finite set $A$ and $k \\in \\mathbb{N}$ put\n\n$$[A]^{k} := \\{\\, S \\subseteq A \\ :\\ \\lvert S\\rvert = k \\,\\},$$\n\nthe set of $k$-element subsets of $A$. Every $S \\subseteq A$ is finite\n([[thm-subset-of-a-finite-set]]), so the condition $\\lvert S\\rvert = k$ makes\nsense for every subset.\n\n**$[A]^{k}$ is finite.** It is a subset of $\\mathcal{P}(A)$, which is finite by\n[[cor-cardinality-of-the-power-set]], so [[thm-subset-of-a-finite-set]] applies.\n\n**$\\lvert [A]^{k}\\rvert$ depends only on $\\lvert A\\rvert$.** Let $h : A \\to A'$ be\na bijection of finite sets. The direct image map $S \\mapsto h[S]$ carries\n$[A]^{k}$ into $[A']^{k}$, because $h$ restricted to $S$ is a bijection of $S$\nonto $h[S]$ and so $\\lvert h[S]\\rvert = \\lvert S\\rvert = k$ by the transport\nclause of [[def-finite-cardinality]]; the map $T \\mapsto h^{-1}[T]$ is its\ntwo-sided inverse, since $h^{-1}[h[S]] = S$ and $h[h^{-1}[T]] = T$ for a\nbijection $h$. So $[A]^{k} \\approx [A']^{k}$ and the two have the same\ncardinality.\n\n**Definition.** For $n, k \\in \\mathbb{N}$ set\n\n$$\\binom{n}{k} := \\big\\lvert\\, [n]^{k} \\,\\big\\rvert \\in \\mathbb{N},$$\n\nthe **binomial coefficient**. By the previous paragraph and $\\lvert n\\rvert = n$,\n\n$$\\big\\lvert [A]^{k}\\big\\rvert = \\binom{\\lvert A\\rvert}{k} \\qquad \\text{for every finite } A .$$\n\n**$\\binom{n}{k}$ is a count, so it is a natural number by construction.** It is\n*not* defined as $n!/(k!\\,(n-k)!)$: that expression involves a division, hence\nlives in $\\mathbb{R}$, and the assertion that its value is a natural number is a\ntheorem, proved in [[thm-binomial-closed-formula]]. Defining the coefficient as a\ncount makes integrality free and leaves the closed formula something to prove.\n\n**Boundary values, read off the definition and not stipulated.**\n\n- $\\binom{n}{0} = 1$ **for every $n$, including $n = 0$**: the subsets of $n$ of\n  cardinality $0$ are exactly the subsets equal to $\\varnothing$\n  ([[def-finite-cardinality]], clause (b)), so $[n]^{0} = \\{\\varnothing\\}$, a\n  one-element set. No empty-product convention is involved.\n- $\\binom{n}{n} = 1$: if $S \\subseteq n$ has $\\lvert S\\rvert = n = \\lvert n\\rvert$\n  then $S = n$ by clause 3 of [[thm-subset-of-a-finite-set]], so\n  $[n]^{n} = \\{n\\}$.\n- $\\binom{n}{k} = 0$ for $k > n$: a subset $S \\subseteq n$ has\n  $\\lvert S\\rvert \\le n$ by clause 2 of [[thm-subset-of-a-finite-set]], so\n  $\\lvert S\\rvert = k > n$ is impossible and $[n]^{k} = \\varnothing$\n  ([[lem-nat-trichotomy]]).\n- $\\binom{n}{1} = n$: a subset of cardinality $1$ is $\\{x\\}$ for exactly one\n  $x \\in n$, since $\\lvert S\\rvert = 1$ means $S \\approx \\{0\\}$; so\n  $S \\mapsto$ its unique element is a bijection $[n]^{1} \\to n$.\n- $\\binom{0}{0} = 1$ and $\\binom{0}{k} = 0$ for $k \\ge 1$, both instances of the\n  above.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-binomial-closed-formula",
      "source_section": "Statement",
      "quote": "Let $n, k \\in \\mathbb{N}$ with $k \\le n$. Then, in $\\mathbb{N}$,\n\n$$\\binom{n}{k}\\cdot k!\\cdot (n-k)! = n! ,$$\n\nand consequently:\n\n1. $\\binom{n}{k}\\cdot k! = n^{\\underline{k}}$\n   ([[def-factorial-and-falling-factorial]]);\n2. **integrality**: in $\\mathbb{R}$,\n   $\\iota\\binom{n}{k} = \\dfrac{\\iota(n!)}{\\iota(k!)\\,\\iota((n-k)!)}$, so the\n   familiar quotient $n!/(k!\\,(n-k)!)$ is the canonical natural of a natural\n   number, namely of the count $\\binom{n}{k}$;\n3. **symmetry**: $\\binom{n}{k} = \\binom{n}{n-k}$.\n\nHere $\\iota$ is the canonical natural of [[def-canonical-natural]] and $n-k$ the\ntruncated difference, which for $k \\le n$ is the ordinary one.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-canonical-natural",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and\nmultiplicative identity $1_F$. Define\n$\\iota : \\mathbb{N} \\to F$ by recursion on $\\mathbb{N}$\n([[def-natural-numbers]], [[thm-recursion]]):\n\n$$\\iota(0) \\;:=\\; 0_F, \\qquad \\iota(n+1) \\;:=\\; \\iota(n) + 1_F .$$\n\n$\\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written\n$n \\cdot 1_F$, and for $n \\ge 1$ it is $1_F$ added to itself $n$ times.\n\n**Why the notation is needed at all.** A natural number in this library is a von\nNeumann natural, that is a set ([[def-natural-numbers]]), and a set is not an\nelement of $F$. So $1/n$, $n^{\\alpha}$ and $x/n$ are not expressions of $F$ when\n$n$ is a natural: what they mean is $1/\\iota(n)$, $\\iota(n)^{\\alpha}$ and\n$x/\\iota(n)$. The map $\\iota$ is what carries a counting number into the field,\nand writing it is the whole reason a reader meets $1/\\iota(k+1)$ where an\ninformal text would write $1/(k+1)$.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Apply [L1] at the auxiliary value $z=1$. The coefficient of degree $n$ in the resulting Cauchy product for $\\exp(x)\\exp(y)$ is $\\sum_{k=0}^n x^ky^{n-k}/(\\iota(k!)\\iota((n-k)!))$.   [L1, given]",
      "step": "1.1",
      "inputs": [
        "L1",
        "given"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Apply [L3] and [L2] to identify this finite sum with $(x+y)^n/\\iota(n!)$.  [step 1.1, L2, L3, algebra]",
      "step": "2.1",
      "inputs": [
        "L3",
        "L2",
        "1.1",
        "algebra"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Summing over $n$ gives the exponential series at $x+y$, hence the formula.  [step 2.1, L1] ∎",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement concerns real numbers or functions, not a set-valued assertion with an empty-domain case."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "The statement and steps 1.1–3.1 include x=0 or y=0; the n=0 coefficient is retained."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The statement and steps 1.1–3.1 include x=1 or y=1 without a convention change."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "No interval, quotient, or structure can collapse in this assertion."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The statement has no finite endpoint hypothesis."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The proof makes no choice from an arbitrary nonempty family."
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
    "source": "thm-exponential-addition-formula",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "lem-exponential-series-has-infinite-radius",
    "declared_target": "lem-exponential-series-has-infinite-radius",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-exponential-function",
    "targetBatch": "wave14-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-addition-formula",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "lem-cauchy-product-of-real-power-series",
    "declared_target": "lem-cauchy-product-of-real-power-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-addition-formula",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-binomial-theorem",
    "declared_target": "thm-binomial-theorem",
    "target_statement_provenance": "ai-altered",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-addition-formula",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "thm-binomial-closed-formula",
    "declared_target": "thm-binomial-closed-formula",
    "target_statement_provenance": "ai-altered",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-addition-formula",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-binomial-coefficient",
    "declared_target": "def-binomial-coefficient",
    "target_statement_provenance": "literature-derived",
    "targetPage": "finite-counting-and-binomial-coefficients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-addition-formula",
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
    "source": "thm-exponential-addition-formula",
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
    "source": "thm-exponential-addition-formula",
    "sourcePage": "the-exponential-function",
    "batch": "wave14-real-analysis",
    "target": "def-finite-sum",
    "declared_target": "def-finite-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-exponential-addition-formula",
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

## Full exact-current text of every cited or declared item (9)

### `def-binomial-coefficient`

````markdown
---
id: def-binomial-coefficient
kind: definition
title: "The set $[A]^{k}$ of $k$-element subsets and the binomial coefficient $\\binom{n}{k} := \\lvert [n]^{k}\\rvert$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-cardinality, cor-cardinality-of-the-power-set, thm-subset-of-a-finite-set,
       def-injection-surjection-bijection, def-equinumerous, def-natural-numbers,
       def-nat-order, lem-nat-order-is-membership, lem-nat-trichotomy]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Combination (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Combination"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Definition

For a finite set $A$ and $k \in \mathbb{N}$ put

$$[A]^{k} := \{\, S \subseteq A \ :\ \lvert S\rvert = k \,\},$$

the set of $k$-element subsets of $A$. Every $S \subseteq A$ is finite
([[thm-subset-of-a-finite-set]]), so the condition $\lvert S\rvert = k$ makes
sense for every subset.

**$[A]^{k}$ is finite.** It is a subset of $\mathcal{P}(A)$, which is finite by
[[cor-cardinality-of-the-power-set]], so [[thm-subset-of-a-finite-set]] applies.

**$\lvert [A]^{k}\rvert$ depends only on $\lvert A\rvert$.** Let $h : A \to A'$ be
a bijection of finite sets. The direct image map $S \mapsto h[S]$ carries
$[A]^{k}$ into $[A']^{k}$, because $h$ restricted to $S$ is a bijection of $S$
onto $h[S]$ and so $\lvert h[S]\rvert = \lvert S\rvert = k$ by the transport
clause of [[def-finite-cardinality]]; the map $T \mapsto h^{-1}[T]$ is its
two-sided inverse, since $h^{-1}[h[S]] = S$ and $h[h^{-1}[T]] = T$ for a
bijection $h$. So $[A]^{k} \approx [A']^{k}$ and the two have the same
cardinality.

**Definition.** For $n, k \in \mathbb{N}$ set

$$\binom{n}{k} := \big\lvert\, [n]^{k} \,\big\rvert \in \mathbb{N},$$

the **binomial coefficient**. By the previous paragraph and $\lvert n\rvert = n$,

$$\big\lvert [A]^{k}\big\rvert = \binom{\lvert A\rvert}{k} \qquad \text{for every finite } A .$$

**$\binom{n}{k}$ is a count, so it is a natural number by construction.** It is
*not* defined as $n!/(k!\,(n-k)!)$: that expression involves a division, hence
lives in $\mathbb{R}$, and the assertion that its value is a natural number is a
theorem, proved in [[thm-binomial-closed-formula]]. Defining the coefficient as a
count makes integrality free and leaves the closed formula something to prove.

**Boundary values, read off the definition and not stipulated.**

- $\binom{n}{0} = 1$ **for every $n$, including $n = 0$**: the subsets of $n$ of
  cardinality $0$ are exactly the subsets equal to $\varnothing$
  ([[def-finite-cardinality]], clause (b)), so $[n]^{0} = \{\varnothing\}$, a
  one-element set. No empty-product convention is involved.
- $\binom{n}{n} = 1$: if $S \subseteq n$ has $\lvert S\rvert = n = \lvert n\rvert$
  then $S = n$ by clause 3 of [[thm-subset-of-a-finite-set]], so
  $[n]^{n} = \{n\}$.
- $\binom{n}{k} = 0$ for $k > n$: a subset $S \subseteq n$ has
  $\lvert S\rvert \le n$ by clause 2 of [[thm-subset-of-a-finite-set]], so
  $\lvert S\rvert = k > n$ is impossible and $[n]^{k} = \varnothing$
  ([[lem-nat-trichotomy]]).
- $\binom{n}{1} = n$: a subset of cardinality $1$ is $\{x\}$ for exactly one
  $x \in n$, since $\lvert S\rvert = 1$ means $S \approx \{0\}$; so
  $S \mapsto$ its unique element is a bijection $[n]^{1} \to n$.
- $\binom{0}{0} = 1$ and $\binom{0}{k} = 0$ for $k \ge 1$, both instances of the
  above.

## Remarks

- **Notation.** $[A]^{k}$ is standard for the set of $k$-element subsets; it is
  unrelated to the notation $A^{B}$ for a set of functions, which appears on this
  page as well. Where confusion is possible the words are used in full.

- **Symmetry is not visible yet.** $\binom{n}{k} = \binom{n}{n-k}$ is proved in
  [[thm-binomial-closed-formula]] by exhibiting the complementation bijection
  $S \mapsto n \setminus S$; from the definition alone there is no reason for the
  two counts to agree.

- **$0$ is a legitimate value of $k$ and of $n$.** Every boundary clause above is
  checked at $0$, which is where a statement about binomial coefficients most
  often goes wrong in this library's index convention.
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

### `def-finite-sum`

````markdown
---
id: def-finite-sum
kind: definition
title: "Finite sums and finite products, by recursion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, thm-induction-principle, def-ordered-field, def-natural-numbers, def-nat-addition, def-field, def-complete-ordered-field, lem-of-naturals-positive, lem-of-q-embeds]
justified_by: []
aliases: [def-finite-product]
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Empty sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_sum"
    - title: "T. Tao, Analysis I, 3rd ed., §7.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), in particular an ordered field
([[def-ordered-field]]) and a field ([[def-field]]), and $\mathbb{N}$ is the set
of natural numbers ([[def-natural-numbers]]) with successor $\sigma(n) = n + 1$
([[def-nat-addition]]).

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals, written $a_k$ for
$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the
upper index**, which is legitimate because of the recursion theorem
([[thm-recursion]]). That theorem produces a function of one variable, so the
running index has to be carried along inside the value: applying it to the set
$A = \mathbb{N} \times \mathbb{R}$, the starting element $(0, 0)$ and the function
$f(n, s) = (\sigma(n),\, s + a_n)$ gives a unique
$g : \mathbb{N} \to \mathbb{N} \times \mathbb{R}$ with

$$g(0) = (0, 0), \qquad g(\sigma(n)) = f(g(n)) \quad (n \in \mathbb{N}).$$

Write $g(n) = \big(\pi_1(g(n)),\, \Sigma_n\big)$ for its two coordinates.

**The first coordinate is the index itself, and that is a small induction, not an
observation** ([[thm-induction-principle]]). Indeed $\pi_1(g(0)) = 0$; and if
$\pi_1(g(n)) = n$, then
$g(\sigma(n)) = f\big(\pi_1(g(n)), \Sigma_n\big) = \big(\sigma(\pi_1(g(n))),\, \Sigma_n + a_{\pi_1(g(n))}\big) = \big(\sigma(n),\, \Sigma_n + a_n\big)$,
so $\pi_1(g(\sigma(n))) = \sigma(n)$. By induction $\pi_1(g(n)) = n$ for every
$n \in \mathbb{N}$. Only now may the second coordinate of the two displayed
clauses be read off, and doing so gives

$$\Sigma_0 = 0, \qquad \Sigma_{\sigma(n)} = \Sigma_n + a_n .$$

$\Sigma$ is moreover the **unique** function $\mathbb{N} \to \mathbb{R}$ with those
two properties: if $\Sigma'$ also has them then $n \mapsto (n, \Sigma'_n)$ satisfies
the two clauses defining $g$, hence equals $g$ by the uniqueness clause of
[[thm-recursion]], so $\Sigma' = \Sigma$.

We write $\sum_{k < n} a_k := \Sigma_n$. The same construction with starting
element $(0, 1)$ and $f(n, p) = (\sigma(n),\, p \cdot a_n)$, with the same
induction on the first coordinate and the same uniqueness argument, gives the
unique $\Pi : \mathbb{N} \to \mathbb{R}$ with

$$\Pi_0 = 1, \qquad \Pi_{\sigma(n)} = \Pi_n \cdot a_n ,$$

and we write $\prod_{k < n} a_k := \Pi_n$.

**Notation.** For $m, n \in \mathbb{N}$ we abbreviate

$$\sum_{k=0}^{n} a_k := \sum_{k < n+1} a_k, \qquad \prod_{k=0}^{n} a_k := \prod_{k < n+1} a_k,$$

and, for a general lower index $m$ with $m \le n + 1$, writing $d = n + 1 - m$
for the number of terms,

$$\sum_{k=m}^{n} a_k := \sum_{j < d} a_{m+j}, \qquad \prod_{k=m}^{n} a_k := \prod_{j < d} a_{m+j} .$$

When $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while
the empty product has value $1$. In the same spirit $\sum_{k=0}^{-1} a_k$ is
notation for the empty sum $\Sigma_0 = 0$ and $\prod_{k=0}^{-1} a_k$ for the
empty product $\Pi_0 = 1$; the index $-1$ never occurs as an element of
$\mathbb{N}$ and is only a way of writing "no terms".

Only finitely many values of $a$ enter $\sum_{k<n} a_k$, so the notation
$\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ is also used for a list
$a_0, \dots, a_{n-1}$ of reals given without reference to any extension of the
list to all of $\mathbb{N}$: extend the list by $a_k = 0$ (respectively
$a_k = 1$) for $k \ge n$ and apply the definition above.

## Remarks

- **Why recursion and not "$a_0 + a_1 + \cdots + a_{n-1}$".** The dots are not a
  definition: they presuppose that the displayed pattern determines a value for
  every $n$, which is exactly what the recursion theorem
  ([[thm-recursion]]) supplies, and its uniqueness clause is what makes
  $\sum_{k<n} a_k$ a single well-determined real rather than a family of choices.
  Associativity and commutativity of addition are *not* used in the definition;
  they are used in the laws proved from it ([[lem-finite-sum-laws]]).
- **Naturals and rationals inside $\mathbb{R}$ (a convention used on the whole
  page).** A natural number $n$ and a rational number $r$ are not literally
  elements of $\mathbb{R}$: they enter $\mathbb{R}$ through the canonical
  embedding $\iota : \mathbb{Q} \to \mathbb{R}$, which is an injective,
  order-preserving field homomorphism ([[lem-of-q-embeds]]), restricting on
  positive naturals to $n \mapsto n \cdot 1_{\mathbb{R}} = 1_\mathbb{R} + \cdots + 1_\mathbb{R}$
  ([[lem-of-naturals-positive]]). Following ordinary practice, and only where no
  confusion is possible, we write $n$ for $\iota(n)$ and $r$ for $\iota(r)$; so,
  for instance, $\frac{1}{n}\sum_{k<n} a_k$ means
  $\iota(n)^{-1} \cdot \sum_{k<n} a_k$, which makes sense because
  $\iota(n) > 0$ for $n \ge 1$. Exponents are the one place where the
  identification is deliberately NOT made: in $a^n$ and $a^r$ the exponent stays
  a natural, an integer or a rational ([[def-integer-power]],
  [[def-rational-power]]), never a real.
- The two indexings are related by $\sum_{k=0}^{n} a_k = \sum_{k < n+1} a_k$, so
  a statement proved for one is available for the other. Sums over $k < n$ are
  the primitive form here because $\Sigma_0$, the empty sum, is then the base
  case of every induction, and no index outside $\mathbb{N}$ is ever needed.
````

### `lem-cauchy-product-of-real-power-series`

````markdown
---
id: lem-cauchy-product-of-real-power-series
kind: lemma
title: "Inside the common radius the product of two power-series sums is represented by the Cauchy product of their coefficients"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-power-series-convergence-dichotomy, def-cauchy-product, cor-cauchy-product-absolute]
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
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "E. Randles, Supplementary Notes for Real Analysis"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Statement

Suppose $f(x)=\sum_{n\ge0}a_n(x-c)^n$ and $g(x)=\sum_{n\ge0}b_n(x-c)^n$ have radii $R_f,R_g$. For $|x-c|<\min(R_f,R_g)$,

$$f(x)g(x)=\sum_{n=0}^{\infty}\left(\sum_{k=0}^{n}a_kb_{n-k}\right)(x-c)^n,$$

and the displayed product series converges absolutely.

## Facts & Assumptions

**Given:** The two power series in the statement and a point in their common open radius.

[L1] Both numerical series converge absolutely there ([[cor-power-series-convergence-dichotomy]]).

[L2] The Cauchy product of two absolutely convergent series converges absolutely to the product of their sums ([[def-cauchy-product]], [[cor-cauchy-product-absolute]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to the numerical series with terms $a_k(x-c)^k$ and $b_j(x-c)^j$, whose absolute convergence is [L1]. [L1, L2]

2.1 Its $n$th Cauchy-product term is $\sum_{k=0}^{n}a_kb_{n-k}(x-c)^n$, which gives the formula and absolute convergence. [step 1.1, algebra] ∎
````

### `lem-exponential-series-has-infinite-radius`

````markdown
---
id: lem-exponential-series-has-infinite-radius
kind: lemma
title: "The exponential series converges absolutely for every real argument"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-exponential-function-and-e, thm-direct-comparison-test, thm-geometric-series, lem-absolute-convergence-implies-convergence, thm-of-archimedean, def-factorial-and-falling-factorial, def-canonical-natural, lem-of-naturals-positive]
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
pipeline_run: null
---

## Statement

For every real $x$, the series $\sum_{n\ge0}x^n/\iota(n!)$ converges absolutely. Its power-series radius is therefore $+\infty$.

## Facts & Assumptions

**Given:** A real $x$.

[L1] Archimedes supplies a natural larger than any prescribed real ([[thm-of-archimedean]]).

[L2] A tail bounded termwise by a convergent geometric series converges ([[thm-direct-comparison-test]], [[thm-geometric-series]]), and absolute convergence implies convergence ([[lem-absolute-convergence-implies-convergence]]).

[L3] Factorials satisfy $(n+1)!=n!(n+1)$ and are nonzero naturals; every positive natural has a positive, hence nonzero, canonical real image ([[def-factorial-and-falling-factorial]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

## Proof

**Proof technique:** direct.

1.1 If $x=0$, the series is $1+0+0+\cdots$ and converges absolutely. Hence assume $x\ne0$. Choose $N\ge1$ with $\iota(N)>2|x|$. For $n\ge N$, the absolute terms $a_n=|x|^n/\iota(n!)$ are positive and satisfy $a_{n+1}/a_n=|x|/\iota(n+1)<1/2$.  [L1, L3, choose]

2.1 Thus $a_{N+j}\le a_N2^{-j}$ by induction, and the tail is dominated by a convergent geometric series.  [step 1.1, L2]

3.1 The zero case from step 1.1 and, when $x\ne0$, adding the finite initial segment to the convergent tail prove absolute convergence for arbitrary $x$. Hence every nonnegative radius works and the radius is $+\infty$.  [step 1.1, step 2.1, L2] ∎
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

### `thm-binomial-closed-formula`

````markdown
---
id: thm-binomial-closed-formula
kind: theorem
title: "$\\binom{n}{k}\\,k!\\,(n-k)! = n!$ for $k \\le n$; hence $\\binom{n}{k}\\,k! = n^{\\underline{k}}$, the quotient $n!/(k!(n-k)!)$ is a natural number, and $\\binom{n}{k} = \\binom{n}{n-k}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-binomial-coefficient, thm-number-of-bijections-of-a-finite-set,
       def-factorial-and-falling-factorial, thm-sum-rule, thm-product-rule,
       def-sum-over-a-finite-index-set, def-finite-cardinality, thm-subset-of-a-finite-set,
       lem-nat-mult-cancellative, lem-nat-mult-associative, lem-nat-mult-commutative,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-canonical-natural,
       lem-of-inverse-unique, def-field, def-nat-order, lem-nat-add-cancellative,
       def-injection-surjection-bijection, def-equinumerous]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Double counting (proof technique) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Double_counting_(proof_technique)"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Statement

Let $n, k \in \mathbb{N}$ with $k \le n$. Then, in $\mathbb{N}$,

$$\binom{n}{k}\cdot k!\cdot (n-k)! = n! ,$$

and consequently:

1. $\binom{n}{k}\cdot k! = n^{\underline{k}}$
   ([[def-factorial-and-falling-factorial]]);
2. **integrality**: in $\mathbb{R}$,
   $\iota\binom{n}{k} = \dfrac{\iota(n!)}{\iota(k!)\,\iota((n-k)!)}$, so the
   familiar quotient $n!/(k!\,(n-k)!)$ is the canonical natural of a natural
   number, namely of the count $\binom{n}{k}$;
3. **symmetry**: $\binom{n}{k} = \binom{n}{n-k}$.

Here $\iota$ is the canonical natural of [[def-canonical-natural]] and $n-k$ the
truncated difference, which for $k \le n$ is the ordinary one.

## Facts & Assumptions

**Given:** Naturals $n, k$ with $k \le n$; the initial segment $k = \{\,i : i<k\,\}$, which satisfies $k \subseteq n$; and $\operatorname{Bij}(X,Y)$ for the set of bijections $X \to Y$.

[L1] $\binom{m}{j} = \lvert [X]^{j}\rvert$ for every finite $X$ with $\lvert X\rvert = m$; $[X]^{j}$ is finite ([[def-binomial-coefficient]]).

[L2] $\lvert\operatorname{Bij}(X,Y)\rvert = m!$ when $\lvert X\rvert = \lvert Y\rvert = m$, and such a set is finite ([[thm-number-of-bijections-of-a-finite-set]]).

[L3] The sum rule ([[thm-sum-rule]]) and $\sum_{i \in S} c = \lvert S\rvert\cdot c$ ([[def-sum-over-a-finite-index-set]]).

[L4] The product rule $\lvert X \times Y\rvert = \lvert X\rvert\lvert Y\rvert$ ([[thm-product-rule]]).

[L5] Factorials ([[def-factorial-and-falling-factorial]]): $m! \ne 0$ for every $m$; $n^{\underline{k}}(n-k)! = n!$ for $k \le n$.

[L6] Cardinality and subsets ([[def-finite-cardinality]], [[thm-subset-of-a-finite-set]]): transport along a bijection; $\lvert m\rvert = m$; a subset of a finite set is finite.

[L7] Arithmetic of $\mathbb{N}$: multiplication is associative and commutative, and $x\cdot c = y\cdot c$ with $c \ne 0$ gives $x = y$ ([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]], [[lem-nat-mult-cancellative]]); $k + t = n$ determines $t = n-k$ ([[def-nat-order]], [[lem-nat-add-cancellative]]).

[L8] The embedding $\iota$ is multiplicative and injective, and $\iota(m) \ne 0$ for $m \ne 0$ (clauses 0 and 7 of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]], [[def-canonical-natural]]); a nonzero element of a field has a unique inverse, so division by it is legitimate ([[lem-of-inverse-unique]], [[def-field]]).

[L9] Maps ([[def-injection-surjection-bijection]], [[def-equinumerous]]): a map with a two-sided inverse is a bijection; a bijection of $n$ carries a subset onto a subset and the complement onto the complement.

## Proof

**Proof technique:** direct.

1.1 The set to be counted twice is $\operatorname{Bij}(n)$, of cardinality $n!$ by [L2]. For $S \in [n]^{k}$ put $\operatorname{Bij}_S := \{\, f \in \operatorname{Bij}(n) : f[k] = S \,\}$. These sets are pairwise disjoint, since $f$ determines $f[k]$, and their union over $S \in [n]^{k}$ is all of $\operatorname{Bij}(n)$, because $f[k]$ is a subset of $n$ of cardinality $k$ for every bijection $f$ of $n$. [L1, L2, L6, L9, construct]

1.2 For any $X \subseteq n$ with $\lvert X\rvert = k$ one has $\lvert n \setminus X\rvert = n-k$: the sets $X$ and $n \setminus X$ are disjoint with union $n$, so $n = k + \lvert n\setminus X\rvert$ by [L3], and [L7] identifies the second summand as $n-k$. [L3, L6, L7]

2.1 $\lvert\operatorname{Bij}_S\rvert = k!\,(n-k)!$ for every $S \in [n]^{k}$. Indeed $f \mapsto (f\restriction k,\ f\restriction (n\setminus k))$ maps $\operatorname{Bij}_S$ to $\operatorname{Bij}(k, S) \times \operatorname{Bij}(n\setminus k,\ n\setminus S)$: if $f[k] = S$ then $f$ restricted to $k$ is a bijection onto $S$, and, $f$ being a bijection of $n$, it carries $n \setminus k$ onto $n \setminus S$. The map $(u,v) \mapsto u \cup v$ is a two-sided inverse, the union of the two functions being a function on $k \cup (n\setminus k) = n$ and a bijection onto $S \cup (n\setminus S) = n$. Since $\lvert k\rvert = \lvert S\rvert = k$ and $\lvert n\setminus k\rvert = \lvert n\setminus S\rvert = n-k$ by step 1.2, [L2] and [L4] give the cardinality $k!\,(n-k)!$. [step 1.1, step 1.2, L2, L4, L6, L9]

2.2 Symmetry. The map $S \mapsto n \setminus S$ sends $[n]^{k}$ into $[n]^{\,n-k}$ by step 1.2, and $T \mapsto n\setminus T$ sends $[n]^{\,n-k}$ into $[n]^{k}$, again by step 1.2 together with $n-(n-k) = k$, which holds because $(n-k) + k = n$. The two are mutually inverse, since $n\setminus(n\setminus S) = S$ for $S \subseteq n$. Hence $\binom{n}{k} = \binom{n}{n-k}$. [step 1.2, L1, L6, L7, L9, construct]

3.1 Counting $\operatorname{Bij}(n)$ by the blocks of step 1.1 and using [L3], $n! = \lvert\operatorname{Bij}(n)\rvert = \sum_{S \in [n]^{k}}\lvert\operatorname{Bij}_S\rvert = \sum_{S \in [n]^{k}} k!\,(n-k)! = \big\lvert [n]^{k}\big\rvert\cdot k!\,(n-k)! = \binom{n}{k}\,k!\,(n-k)!$, the summand being constant. [step 1.1, step 2.1, L1, L3]

4.1 Clause 1. By [L5], $n^{\underline{k}}(n-k)! = n!$, so $\big(\binom{n}{k}k!\big)(n-k)! = n^{\underline{k}}(n-k)!$ by step 3.1 and associativity; since $(n-k)! \ne 0$, cancellation gives $\binom{n}{k}\,k! = n^{\underline{k}}$. [step 3.1, L5, L7]

4.2 Clause 2. Applying $\iota$ to step 3.1 and using multiplicativity, $\iota(n!) = \iota\binom{n}{k}\,\iota(k!)\,\iota((n-k)!)$. Both $\iota(k!)$ and $\iota((n-k)!)$ are nonzero by [L5] and [L8], so their product is invertible in $\mathbb{R}$ and $\iota\binom{n}{k} = \iota(n!)\big/\big(\iota(k!)\iota((n-k)!)\big)$. The left-hand side is the canonical natural of the count $\binom{n}{k}$, which is what the word *integrality* means here. [step 3.1, L5, L8]

5.1 The displayed identity is step 3.1, clause 1 is step 4.1, clause 2 is step 4.2 and clause 3 is step 2.2. [step 2.2, step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **Why the symmetry is proved by a bijection.** Complementation is shorter than
  manipulating the closed formula, it needs no hypothesis beyond $k \le n$, and
  it is the argument that survives to the multinomial coefficient, where no
  single closed formula is available until the analogous count has been made.

- **Where $k \le n$ is used.** In step 1.1, so that $k$ is a subset of $n$ of
  cardinality $k$ and $[n]^{k}$ is nonempty; and in step 1.2, so that $n-k$ is a
  genuine difference. For $k > n$ both sides of the displayed identity are still
  defined, but the left-hand side is $0$ while $n!$ is not, so the hypothesis is
  not removable.

- **The quotient formula is a theorem about a natural number.** A reader who
  starts from $n!/(k!(n-k)!)$ has to prove that the division comes out exact.
  Starting from the count, the exactness is what step 3.1 says, and the quotient
  is a consequence.
````

### `thm-binomial-theorem`

````markdown
---
id: thm-binomial-theorem
kind: theorem
title: "The binomial theorem in $\\mathbb{R}$: $(x+y)^{n} = \\sum_{k<n+1} \\iota\\!\\binom{n}{k}\\, x^{k} y^{\\,n-k}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-pascals-rule, def-binomial-coefficient, def-finite-sum, lem-finite-sum-laws,
       def-nat-finite-sum-and-product, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       def-integer-power, def-canonical-natural, lem-of-zero-mult,
       lem-nat-add-cancellative, lem-nat-nonzero-is-successor, def-nat-order,
       thm-induction-principle, def-field, def-ordered-field]
justified_by: []
forward_refs: [def-ring]
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Binomial theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_theorem"
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Pascal's rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pascal%27s_rule"
pipeline_run: null
---

## Statement

For all $x, y \in \mathbb{R}$ and every $n \in \mathbb{N}$,

$$(x+y)^{n} \;=\; \sum_{k<n+1} \iota\binom{n}{k}\, x^{k}\, y^{\,n-k},$$

where the powers are the integer powers of [[def-integer-power]], the sum is the
real finite sum of [[def-finite-sum]] over $k = 0, 1, \dots, n$, the difference
$n-k$ is a genuine one because $k \le n$ throughout the range, and $\iota$ is the
canonical natural of [[def-canonical-natural]].

**The coefficient is $\iota\binom{n}{k}$ and not $\binom{n}{k}$.** A binomial
coefficient is a natural number, that is a von Neumann natural, that is a set; it
is not an element of $\mathbb{R}$, and it enters the field through $\iota$.

**The identity is stated in $\mathbb{R}$ and only in $\mathbb{R}$.** The same
proof uses nothing but commutativity, associativity, distributivity and
natural-number multiples of a ring element, so a commutative-ring version is
available wherever rings are; rings are not available at this point in the
reading order, and the ring statement is a separate statement, to be made where
they are. See the Remarks below.

## Facts & Assumptions

**Given:** Reals $x, y$; a natural $n$; and the abbreviation $c_k := \iota\binom{n}{k}$ for **every** $k \in \mathbb{N}$, so that $c_k = \iota(0) = 0$ whenever $k > n$.

[L1] Induction ([[thm-induction-principle]]).

[L2] Integer powers ([[def-integer-power]]): $a^{0} = 1$ for **every** real $a$, including $a = 0$, and $a^{\sigma(m)} = a^{m}\cdot a$. An immediate induction gives $1^{m} = 1$.

[L3] Real finite sums ([[def-finite-sum]]): $\sum_{k<0} u_k = 0$ and $\sum_{k<\sigma(N)} u_k = \sum_{k<N} u_k + u_N$; additivity $\sum(u_k+v_k) = \sum u_k + \sum v_k$, scaling $\sum \lambda u_k = \lambda\sum u_k$, and splitting $\sum_{k<N} u_k = \sum_{k<p} u_k + \sum_{j<N-p} u_{p+j}$ for $p \le N$ ([[lem-finite-sum-laws]], clauses 1, 2 and 3).

[L4] $\iota$ is additive and multiplicative with $\iota(0) = 0$ and $\iota(1) = 1$ (clause 0 of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]], [[def-canonical-natural]]).

[L5] Binomial coefficients ([[def-binomial-coefficient]]): $\binom{m}{0} = 1$ and $\binom{m}{j} = 0$ for $j > m$; Pascal's rule $\binom{\sigma(m)}{\sigma(j)} = \binom{m}{j} + \binom{m}{\sigma(j)}$ for all $m, j$ ([[thm-pascals-rule]], clause 1).

[L6] Field arithmetic of $\mathbb{R}$: associativity, commutativity, distributivity, $0 \cdot a = 0$ ([[def-field]], [[def-ordered-field]], [[lem-of-zero-mult]]).

[L7] Arithmetic of $\mathbb{N}$: for $k \le n$, $k + (n-k) = n$, and hence $(n-k)+1 = \sigma(n)-k$ and $\sigma(n) - \sigma(k) = n-k$; every nonzero natural is a successor ([[def-nat-order]], [[lem-nat-add-cancellative]], [[lem-nat-nonzero-is-successor]], [[def-nat-finite-sum-and-product]] for the truncated difference).

## Proof

**Proof technique:** induction.

1.1 Both sides are functions of $n$ with $x, y$ fixed, and the induction is on $n$. Note first that $c_{\sigma(n)} = \iota\binom{n}{\sigma(n)} = \iota(0) = 0$, since $\sigma(n) > n$. [given, L4, L5]

1.2 Base case $n = 0$. The left-hand side is $(x+y)^{0} = 1$ by [L2]. The right-hand side is $\sum_{k<1}\iota\binom{0}{k}x^{k}y^{\,0-k} = \iota\binom{0}{0}x^{0}y^{0} = 1\cdot 1\cdot 1 = 1$, using [L3], $\binom{0}{0} = 1$, $\iota(1) = 1$ and [L2]. This is correct at $x = 0$ and at $y = 0$ as well, because $a^{0} = 1$ for every real $a$. [base, L2, L3, L4, L5]

1.3 Inductive hypothesis: fix $n$ and assume $(x+y)^{n} = \sum_{k<\sigma(n)} c_k x^{k}y^{\,n-k}$ for all $x, y \in \mathbb{R}$. [ih]

2.1 Expanding one factor. By [L2] and distributivity, $(x+y)^{\sigma(n)} = (x+y)^{n}(x+y) = \big(\sum_{k<\sigma(n)} c_k x^{k}y^{\,n-k}\big)x + \big(\sum_{k<\sigma(n)} c_k x^{k}y^{\,n-k}\big)y$, using the hypothesis of step 1.3; and by the scaling clause of [L3] together with $x^{k}x = x^{\sigma(k)}$ and $y^{\,n-k}y = y^{\,(n-k)+1}$ this equals $\Sigma_1 + \Sigma_2$ with $\Sigma_1 := \sum_{k<\sigma(n)} c_k x^{\sigma(k)}y^{\,n-k}$ and $\Sigma_2 := \sum_{k<\sigma(n)} c_k x^{k}y^{\,(n-k)+1}$. [step 1.3, L2, L3, L6]

3.1 Rewriting $\Sigma_2$. For $k \le n$ one has $(n-k)+1 = \sigma(n)-k$ by [L7], so $\Sigma_2 = \sum_{k<\sigma(n)} c_k x^{k}y^{\,\sigma(n)-k}$. Extending the range by one term costs nothing: by the recursion clause of [L3], $\sum_{k<\sigma(\sigma(n))} c_k x^{k}y^{\,\sigma(n)-k} = \Sigma_2 + c_{\sigma(n)}x^{\sigma(n)}y^{0}$, and $c_{\sigma(n)} = 0$ by step 1.1, so the added term is $0$ by [L6] and $\Sigma_2 = \sum_{k<\sigma(\sigma(n))} c_k x^{k}y^{\,\sigma(n)-k}$. [step 1.1, step 2.1, L3, L6, L7]

3.2 Rewriting $\Sigma_1$. Define a list $b$ of length $\sigma(\sigma(n))$ by $b_0 := 0$ and $b_{\sigma(i)} := c_i x^{\sigma(i)}y^{\,n-i}$ for $i < \sigma(n)$; every index below $\sigma(\sigma(n))$ is $0$ or a successor $\sigma(i)$ with $i < \sigma(n)$, by [L7], so $b$ is well defined. Splitting at $p = 1$ by [L3] and using $\sigma(\sigma(n)) - 1 = \sigma(n)$ and $1 + i = \sigma(i)$, $\sum_{j<\sigma(\sigma(n))} b_j = b_0 + \sum_{i<\sigma(n)} b_{\sigma(i)} = 0 + \Sigma_1 = \Sigma_1$. [step 2.1, L3, L6, L7]

4.1 Adding the two. By step 3.1, step 3.2 and the additivity clause of [L3], $(x+y)^{\sigma(n)} = \sum_{k<\sigma(\sigma(n))}\big(b_k + c_k x^{k}y^{\,\sigma(n)-k}\big)$. Evaluate the general term. At $k = 0$ it is $0 + \iota\binom{n}{0}x^{0}y^{\,\sigma(n)} = y^{\,\sigma(n)} = \iota\binom{\sigma(n)}{0}x^{0}y^{\,\sigma(n)-0}$, both coefficients being $\iota(1) = 1$. At $k = \sigma(i)$ with $i < \sigma(n)$ it is $c_i x^{\sigma(i)}y^{\,n-i} + c_{\sigma(i)}x^{\sigma(i)}y^{\,\sigma(n)-\sigma(i)}$, and $\sigma(n)-\sigma(i) = n-i$ by [L7], so the term equals $\big(\iota\binom{n}{i} + \iota\binom{n}{\sigma(i)}\big)x^{\sigma(i)}y^{\,\sigma(n)-\sigma(i)} = \iota\binom{\sigma(n)}{\sigma(i)}x^{\sigma(i)}y^{\,\sigma(n)-\sigma(i)}$ by the additivity of $\iota$ and Pascal's rule. Hence $(x+y)^{\sigma(n)} = \sum_{k<\sigma(\sigma(n))}\iota\binom{\sigma(n)}{k}x^{k}y^{\,\sigma(n)-k}$, which is the claim at $\sigma(n)$. [step 3.1, step 3.2, L3, L4, L5, L6, L7]

5.1 By step 1.2, step 4.1 and induction the identity holds for every $n \in \mathbb{N}$ and all reals $x$, $y$; in particular at $x = 0$ or $y = 0$, where the convention $a^{0} = 1$ of [[def-integer-power]] is what makes the extreme terms come out right and no exceptional case is needed. [step 1.2, step 4.1, L1, L2, discharge-induction] ∎

## Remarks

- **Two index traps, both checked.** The sum runs over $k < n+1$, that is
  $k \le n$, so the exponent $n-k$ is never a truncated difference in disguise;
  and the inductive step needs the coefficient $\binom{n}{\sigma(n)}$, which is
  $0$ by the boundary values of [[def-binomial-coefficient]] rather than
  undefined. Step 1.1 records that once and both rewritings use it.

- **Where $0^{0}$ matters.** At $x = 0$ the term with $k = 0$ is
  $\iota\binom{n}{0}\,0^{0}y^{n} = y^{n}$, and the identity reads
  $y^{n} = y^{n}$. A treatment leaving $0^{0}$ undefined would have to state the
  theorem with exceptions; [[def-integer-power]] fixes $a^{0} = 1$ for every real
  $a$, so there are none.

- **The ring version is a different statement.** It says the same thing about
  $x, y$ in a commutative ring, with $\iota\binom{n}{k}$ replaced by the
  $\binom{n}{k}$-fold multiple of the ring element. Making it requires rings,
  which come later in the reading order; the pointer to [[def-ring]] is
  orientation only and nothing above rests on it.
````

