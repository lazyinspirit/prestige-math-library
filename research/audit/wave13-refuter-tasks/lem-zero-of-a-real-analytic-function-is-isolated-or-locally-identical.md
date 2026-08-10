## Selection reasons

- critical risk (10): 6 declared dependencies; 6 cited facts; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical`

Normalized current SHA-256: `7f826ac5fcd1e5b3e5cbdfad6a5423d118977d5d7680e6e2223469866ce7ebeb`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical
kind: lemma
title: "At a zero of a real-analytic function, either some first nonzero coefficient makes the zero isolated or every local coefficient vanishes"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-analytic-function, cor-power-series-convergence-dichotomy, cor-power-series-sums-are-smooth-with-coefficient-formula, cor-power-series-sums-are-continuous, lem-sign-preservation-near-a-limit, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Analytic function, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Analytic_function"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "Northwestern Math 320-2 lecture notes"
      url: "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
pipeline_run: null
---

## Statement

Let $f$ be real analytic near $c$ and suppose $f(c)=0$. Exactly one of the following local alternatives holds:

1. every coefficient in a power-series expansion of $f$ about $c$ is zero, so $f$ vanishes on a neighbourhood of $c$;
2. there is a least $m\ge1$ with $f^{(m)}(c)\ne0$, and $c$ is an isolated zero of $f$.

## Facts & Assumptions

**Given:** A real-analytic $f$ ([[def-real-analytic-function]]) with $f(c)=0$ and a local expansion $f(x)=\sum_{n\ge0}a_n(x-c)^n$.

[L1] The coefficients are $a_n=f^{(n)}(c)/\iota(n!)$ ([[cor-power-series-sums-are-smooth-with-coefficient-formula]]).

[L2] Every nonempty subset of $\mathbb N$ has a least member ([[thm-well-ordering-principle]]).

[L3] Power-series sums are continuous inside their radius. If a function has a nonzero limit at a limit point, it is nonzero on a sufficiently small punctured neighbourhood of that point ([[cor-power-series-sums-are-continuous]], [[lem-sign-preservation-near-a-limit]]).

[L4] A power series converges absolutely at every point strictly inside its radius ([[cor-power-series-convergence-dichotomy]]).

## Proof

**Proof technique:** cases.

1.1 If every $a_n=0$, the local expansion gives $f=0$ throughout its neighbourhood. [assume-case allzero, given]

1.2 Otherwise, [L2] gives a least $m$ with $a_m\ne0$. Since $a_0=f(c)=0$, one has $m\ge1$. [assume-case nonzero, given, L2, choose]

2.1 In the second case, write $f(x)=(x-c)^m g(x)$, where $g(x):=\sum_{j\ge0}a_{m+j}(x-c)^j$. At every nonzero point strictly inside the original local radius, the absolute series for $g$ is the corresponding absolute tail for $f$ multiplied by $|x-c|^{-m}$; it also converges at $c$. Thus $g$ has positive local radius and $g(c)=a_m\ne0$. [step 1.2, L4, algebra]

3.1 The alternatives in steps 1.1 and 1.2 are exhaustive. In the second, $g$ is continuous at $c$ and therefore has limit $g(c)=a_m\ne0$ there; [L3] makes $g$ nonzero on a smaller punctured neighbourhood, while it is already nonzero at $c$. Hence $f(x)=0$ there only when $x=c$, and the coefficient formula [L1] translates the least nonzero coefficient into the stated least nonzero derivative. [step 1.1, step 1.2, step 2.1, L1, L3, cases-exhaustive] ∎
````

## Wave 13 provenance row

```json
{
  "id": "lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Power_series",
    "https://sites.math.northwestern.edu/scg479/courses/notes/lecture-notes-320-2.pdf"
  ],
  "rationale": "The literature gives the standard zero alternative obtained from the first nonzero Taylor coefficient. The item phrases it for real-analytic functions with a local-neighbourhood conclusion and expands the conventional proof.",
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
      "source": "cor-power-series-sums-are-smooth-with-coefficient-formula",
      "source_section": "Statement",
      "quote": "Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have positive or infinite radius $R$. Define $f^{(0)}:=f$ and $f^{(m+1)}:=(f^{(m)})'$. Then every derivative exists on $|x-c|<R$, and for each $m\\in\\mathbb N$,\n\n$$f^{(m)}(x)=\\sum_{j=0}^{\\infty}\\iota\\!\\left((m+j)^{\\underline m}\\right)a_{m+j}(x-c)^j.$$\n\nIn particular,\n\n$$f^{(m)}(c)=\\iota(m!)a_m,\\qquad a_m=\\frac{f^{(m)}(c)}{\\iota(m!)}.$$",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-well-ordering-principle",
      "source_section": "Statement",
      "quote": "Every nonempty subset $S \\subseteq \\mathbb{N}$ has a least element: there is $\\ell \\in S$ with $\\ell \\le s$ for all $s \\in S$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "cor-power-series-sums-are-continuous",
      "source_section": "Statement",
      "quote": "If $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ for $|x-c|<R$, then $f$ is continuous at every $x_0$ satisfying $|x_0-c|<R$.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-sign-preservation-near-a-limit",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $c$ be a limit point of $A$\n([[def-limit-point-r]]), let $f : A \\to \\mathbb{R}$ and suppose the limit of $f$\nat $c$ exists with $\\lim_{x \\to c} f(x) = L$ and $L \\ne 0$\n([[def-function-limit]]). Then there is a real $\\delta > 0$ such that every\n$x \\in A$ with $0 < |x - c| < \\delta$ satisfies\n\n$$|f(x)| \\;>\\; \\frac{|L|}{2} \\;>\\; 0 ;$$\n\nin particular $f(x) \\ne 0$ for every such $x$. Moreover:\n\n- if $L > 0$ then $f(x) > L/2 > 0$ for every such $x$;\n- if $L < 0$ then $f(x) < L/2 < 0$ for every such $x$.\n\nConsequently, writing\n\n$$A_0 := \\{\\, x \\in A \\ : \\ f(x) \\ne 0 \\,\\},$$\n\nthe point $c$ is a limit point of $A_0$.\n\n**The bound $|L|/2$, and not merely \"$f \\ne 0$\", is what later proofs need.** The\nquotient case of [[thm-algebra-of-function-limits]] estimates $1/|f|$ near $c$\nand therefore needs a *positive lower* bound on $|f|$ there, and the last claim\nis what lets a limit be taken on the smaller domain $A_0$ at all.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-power-series-convergence-dichotomy",
      "source_section": "Statement",
      "quote": "Let $\\sum a_n(x-c)^n$ have radius $R$. It converges absolutely at every $x$ with $|x-c|<R$ and diverges at every $x$ with $|x-c|>R$. When $0<R<+\\infty$, no common conclusion holds at either endpoint $c\\pm R$: power series of radius $R$ can converge there, even absolutely, or diverge there.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "If every $a_n=0$, the local expansion gives $f=0$ throughout its neighbourhood.",
      "step": "1.1",
      "inputs": [
        "assume-case allzero",
        "given"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Otherwise, [L2] gives a least $m$ with $a_m\\ne0$. Since $a_0=f(c)=0$, one has $m\\ge1$.",
      "step": "1.2",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "In the second case, write $f(x)=(x-c)^m g(x)$, where $g(x):=\\sum_{j\\ge0}a_{m+j}(x-c)^j$. At every nonzero point strictly inside the original local radius, the absolute series for $g$ is the corresponding absolute tail for $f$ multiplied by $|x-c|^{-m}$; it also converges at $c$. Thus $g$ has positive local radius and $g(c)=a_m\\ne0$.",
      "step": "2.1",
      "inputs": [
        "step 1.2",
        "L4"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "The alternatives in steps 1.1 and 1.2 are exhaustive. In the second, $g$ is continuous at $c$ and therefore has limit $g(c)=a_m\\ne0$ there; [L3] makes $g$ nonzero on a smaller punctured neighbourhood, while it is already nonzero at $c$. Hence $f(x)=0$ there only when $x=c$, and the coefficient formula [L1] translates the least nonzero coefficient into the stated least nonzero derivative.",
      "step": "3.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "L3",
        "L1",
        "step 2.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Let $f$ be real analytic near $c$ and suppose $f(c)=0$. Exactly one of the following local alternatives holds: 1. every coefficient in a power-series expansion of $f$ about $c$ is zero, so $f$ vanishes on a neighbourhood"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: the proof explicitly handles the zero-valued parameter or zero object used by the statement."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Let $f$ be real analytic near $c$ and suppose $f(c)=0$. Exactly one of the following local alternatives holds: 1. every coefficient in a power-series expansion of $f$ about $c$ is zero, so $f$ vanishes on a neighbourhood"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: Let $f$ be real analytic near $c$ and suppose $f(c)=0$. Exactly one of the following local alternatives holds: 1. every coefficient in a power-series expansion of $f$ about $c$ is zero, so $f$ vanishes on a neighbourhood"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical: no interval or radial endpoint is part of the conclusion; checked against the Statement: Let $f$ be real analytic near $c$ and suppose $f(c)=0$. Exactly one of the following local alternatives holds: 1. every coefficient in a power-series expansion of $f$ about $c$ is zero, so $f$ vanishes on a neighbourhood"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.2: every witness selected there is drawn after the proof establishes the relevant positivity, existence, or nonemptiness condition."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical: the Statement is not an equivalence, so there is no forward implication obligation: Let $f$ be real analytic near $c$ and suppose $f(c)=0$. Exactly one of the following local alternatives holds: 1. every coefficient in a power-series expansion of $f$ about $c$ is zero, so $f$ vanishes on a neighbourhood"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical: the Statement is not an equivalence, so there is no reverse implication obligation: Let $f$ be real analytic near $c$ and suppose $f(c)=0$. Exactly one of the following local alternatives holds: 1. every coefficient in a power-series expansion of $f$ about $c$ is zero, so $f$ vanishes on a neighbourhood"
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "def-real-analytic-function",
    "declared_target": "def-real-analytic-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "cor-power-series-convergence-dichotomy",
    "declared_target": "cor-power-series-convergence-dichotomy",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "cor-power-series-sums-are-smooth-with-coefficient-formula",
    "declared_target": "cor-power-series-sums-are-smooth-with-coefficient-formula",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "cor-power-series-sums-are-continuous",
    "declared_target": "cor-power-series-sums-are-continuous",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-sign-preservation-near-a-limit",
    "declared_target": "lem-sign-preservation-near-a-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-well-ordering-principle",
    "declared_target": "thm-well-ordering-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
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

### `cor-power-series-convergence-dichotomy`

````markdown
---
id: cor-power-series-convergence-dichotomy
kind: corollary
title: "A real power series converges absolutely inside its radius and diverges outside it, while either behaviour may occur at an endpoint"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cauchy-hadamard-for-real-power-series, def-real-power-series-and-radius-of-convergence, thm-root-test]
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
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
pipeline_run: null
---

## Statement

Let $\sum a_n(x-c)^n$ have radius $R$. It converges absolutely at every $x$ with $|x-c|<R$ and diverges at every $x$ with $|x-c|>R$. When $0<R<+\infty$, no common conclusion holds at either endpoint $c\pm R$: power series of radius $R$ can converge there, even absolutely, or diverge there.

## Facts & Assumptions

**Given:** A real power series $\sum a_n(x-c)^n$ with radius $R$ ([[def-real-power-series-and-radius-of-convergence]]).

[L1] Cauchy-Hadamard identifies $R$ from the limit superior of the coefficient roots and the root test gives absolute convergence below the reciprocal threshold and divergence above it ([[thm-cauchy-hadamard-for-real-power-series]]).

[L2] At root-test boundary value $1$, the coefficient families $1/(n+1)$ and $1/(n+1)^2$ both have root limit superior $1$, while the first series diverges and the second converges; changing the coefficient signs does not change their absolute values ([[thm-root-test]], claim 3).

## Proof

**Proof technique:** direct.

1.1 The assertions for $|x-c|<R$ and $|x-c|>R$ are exactly the two strict alternatives supplied by [L1], including the cases $R=0$ and $R=+\infty$. [L1]

1.2 For endpoint behaviour at radius $1$, the series with coefficients $1/(n+1)^2$ converges absolutely at both $x=1$ and $x=-1$. The series with coefficients $1/(n+1)$ diverges at $x=1$, while the series with coefficients $(-1)^n/(n+1)$ diverges at $x=-1$. All three have radius $1$ by [L2]. [L2]

2.1 Replacing $x$ by $(x-c)/R$ and multiplying coefficients by the corresponding powers of $R^{-1}$ transports the two radius-one examples to any finite $R>0$ and centre $c$. Thus either behaviour may occur at an endpoint, while no assertion has been made when the endpoints are not real. [step 1.2, algebra] ∎
````

### `cor-power-series-sums-are-continuous`

````markdown
---
id: cor-power-series-sums-are-continuous
kind: corollary
title: "The sum of a real power series is continuous at every point strictly inside its interval of convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-power-series-uniform-on-compact-subintervals, thm-uniform-limit-continuous-real-functions, thm-algebra-of-continuous-functions]
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
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "E. Randles, Supplementary Notes for Real Analysis"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Statement

If $f(x)=\sum_{n\ge0}a_n(x-c)^n$ for $|x-c|<R$, then $f$ is continuous at every $x_0$ satisfying $|x_0-c|<R$.

## Facts & Assumptions

**Given:** A power-series sum $f$ and a point $x_0$ strictly inside its radius.

[L1] The series converges uniformly on each closed interval strictly inside its radius ([[thm-power-series-uniform-on-compact-subintervals]]).

[L2] Every polynomial partial sum is continuous, since constants, the identity, powers, scalar multiples and finite sums are continuous ([[thm-algebra-of-continuous-functions]]).

[L3] A uniform limit of continuous real-valued functions is continuous ([[thm-uniform-limit-continuous-real-functions]]).

## Proof

**Proof technique:** direct.

1.1 Choose $\delta>0$ so small that $[x_0-\delta,x_0+\delta]$ lies strictly inside $|x-c|<R$. [given, choose]

1.2 The polynomial partial sums are continuous on this interval by [L2] and converge uniformly there to $f$ by [L1]. [L1, L2]

2.1 By [L3], $f$ is continuous on that interval, and in particular at $x_0$. [step 1.2, L3] ∎
````

### `cor-power-series-sums-are-smooth-with-coefficient-formula`

````markdown
---
id: cor-power-series-sums-are-smooth-with-coefficient-formula
kind: corollary
title: "A power-series sum is infinitely differentiable inside its radius and satisfies $a_n=f^{(n)}(c)/\\iota(n!)$ at its centre"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-termwise-differentiation-of-a-real-power-series, def-factorial-and-falling-factorial, def-canonical-natural, lem-nat-finite-sum-laws-and-the-canonical-embedding, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
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

Let $f(x)=\sum_{n\ge0}a_n(x-c)^n$ have positive or infinite radius $R$. Define $f^{(0)}:=f$ and $f^{(m+1)}:=(f^{(m)})'$. Then every derivative exists on $|x-c|<R$, and for each $m\in\mathbb N$,

$$f^{(m)}(x)=\sum_{j=0}^{\infty}\iota\!\left((m+j)^{\underline m}\right)a_{m+j}(x-c)^j.$$

In particular,

$$f^{(m)}(c)=\iota(m!)a_m,\qquad a_m=\frac{f^{(m)}(c)}{\iota(m!)}.$$

## Facts & Assumptions

**Given:** A power-series sum $f$ of radius $R>0$ and the recursively defined derivatives $f^{(m)}$.

[L1] A power series may be differentiated term by term throughout its open radius, and its first derived series has the same radius ([[thm-termwise-differentiation-of-a-real-power-series]]).

[L2] Falling factorials satisfy $n^{\underline0}=1$ and $n^{\underline{k+1}}=n^{\underline k}(n-k)$ for all natural $n,k$, with truncated difference $n-k$, and $n^{\underline n}=n!\ne0$ ([[def-factorial-and-falling-factorial]]); the canonical embedding into $\mathbb R$ is multiplicative and injective ([[lem-nat-finite-sum-laws-and-the-canonical-embedding]]).

[L3] The induction principle on $\mathbb N$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 For $m=0$, the formula reads $f(x)=\sum_{j\ge0}\iota(j^{\underline0})a_j(x-c)^j=\sum_{j\ge0}a_j(x-c)^j$, so the claim holds. [base, given, L2]

1.2 Fix $m$ and assume the displayed formula for $f^{(m)}$, with radius $R$. [ih]

2.1 By [L1], differentiate the series in step 1.2 term by term. Reindexing $j+1$ as $j$ gives $f^{(m+1)}(x)=\sum_{j\ge0}\iota(j+1)\iota((m+j+1)^{\underline m})a_{m+j+1}(x-c)^j$. [step 1.2, L1]

3.1 The falling-factorial recursion with $n=m+j+1$ and $k=m$ gives $(m+j+1)^{\underline{m+1}}=(m+j+1)^{\underline m}(j+1)$. Since $\iota$ preserves products, step 2.1 is precisely the asserted formula with $m+1$ in place of $m$. [step 2.1, L2, algebra]

4.1 By [L3], the derivative formula holds for every $m$. At each induction step [L1] also preserves the radius $R$, so every derived series has radius $R$. [step 1.1, step 3.1, L1, L3, discharge-induction]

5.1 At $x=c$, every term with $j\ge1$ vanishes and the $j=0$ term is $\iota(m^{\underline m})a_m=\iota(m!)a_m$; since $m!\ne0$, division gives the coefficient formula. [step 4.1, L2, discharge-induction] ∎
````

### `def-real-analytic-function`

````markdown
---
id: def-real-analytic-function
kind: definition
title: "A real-analytic function on an open subset of $\\mathbb{R}$ is locally represented by a convergent real power series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-power-series-and-radius-of-convergence, def-open-and-closed-in-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Analytic function, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Analytic_function"
    - title: "E. Randles, Supplementary Notes for Real Analysis"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb R$ be open ([[def-open-and-closed-in-r]]). A function $f:U\to\mathbb R$ is **real analytic on $U$** if, for every $c\in U$, there are a real $r>0$ and real coefficients $(a_n)_{n\in\mathbb N}$ such that $N_r(c)\subseteq U$ and

$$f(x)=\sum_{n=0}^{\infty}a_n(x-c)^n\qquad(x\in N_r(c)).$$

The representing series must converge throughout this neighbourhood ([[def-real-power-series-and-radius-of-convergence]], [[def-neighbourhood-r]]). The radius and coefficients may initially depend on $c$.
````

### `lem-sign-preservation-near-a-limit`

````markdown
---
id: lem-sign-preservation-near-a-limit
kind: lemma
title: "If $\\lim_{x \\to c} f(x) = L \\ne 0$ then $|f| > |L|/2$ on a punctured neighbourhood of $c$; in particular if $L > 0$ then $f > L/2 > 0$ there"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-function-limit, def-neighbourhood-r, def-limit-point-r, cor-of-reverse-triangle, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: [lem-sign-preservation-for-function-limits]
landmark: true
short: "sign preservation, $|f| > |L|/2$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $c$ be a limit point of $A$
([[def-limit-point-r]]), let $f : A \to \mathbb{R}$ and suppose the limit of $f$
at $c$ exists with $\lim_{x \to c} f(x) = L$ and $L \ne 0$
([[def-function-limit]]). Then there is a real $\delta > 0$ such that every
$x \in A$ with $0 < |x - c| < \delta$ satisfies

$$|f(x)| \;>\; \frac{|L|}{2} \;>\; 0 ;$$

in particular $f(x) \ne 0$ for every such $x$. Moreover:

- if $L > 0$ then $f(x) > L/2 > 0$ for every such $x$;
- if $L < 0$ then $f(x) < L/2 < 0$ for every such $x$.

Consequently, writing

$$A_0 := \{\, x \in A \ : \ f(x) \ne 0 \,\},$$

the point $c$ is a limit point of $A_0$.

**The bound $|L|/2$, and not merely "$f \ne 0$", is what later proofs need.** The
quotient case of [[thm-algebra-of-function-limits]] estimates $1/|f|$ near $c$
and therefore needs a *positive lower* bound on $|f|$ there, and the last claim
is what lets a limit be taken on the smaller domain $A_0$ at all.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a limit point $c$ of $A$, a function $f : A \to \mathbb{R}$ and a real $L \ne 0$ with $\lim_{x \to c} f(x) = L$; and $A_0 := \{\, x \in A : f(x) \ne 0 \,\}$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$ ([[def-function-limit]]).

[L2] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|u| = u$ for $u \ge 0$ and $|u| = -u$ for $u \le 0$; and for $t > 0$, $|u| < t$ is equivalent to $-t < u < t$ ([[lem-of-abs-value]]).

[L3] Reverse triangle inequality: $\bigl| |u| - |v| \bigr| \le |u - v|$ ([[cor-of-reverse-triangle]]).

[L4] Limit point: for every real $\rho > 0$ there is $x \in A$ with $0 < |x - c| < \rho$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L5] Order arithmetic in $\mathbb{R}$: trichotomy, so $u \ne 0$ with $|u| \ge 0$ and $|u| \ne 0$ forces $|u| > 0$; $0 < 1$ ([[cor-of-one-positive]]), hence $2 > 0$ and $2^{-1} > 0$ ([[lem-of-inverse-positive]]), so $t/2 > 0$ and $t - t/2 = t/2$ for $t > 0$ ([[lem-of-sign-rules]]); adding a constant to an inequality ([[lem-of-add-order]]); and of two positive reals the smaller is positive, the order being total ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $L \ne 0$ we have $|L| \ne 0$ while $|L| \ge 0$, so trichotomy gives $|L| > 0$, and $\varepsilon := |L|/2 > 0$ with $|L| - |L|/2 = |L|/2$. [given, L2, L5]

2.1 Apply [L1] with this $\varepsilon$: fix a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < |L|/2$. [step 1.1, L1, choose]

3.1 For every such $x$ the reverse triangle inequality gives $\bigl| |f(x)| - |L| \bigr| \le |f(x) - L| < |L|/2$, hence $|f(x)| - |L| > -|L|/2$ and so $|f(x)| > |L| - |L|/2 = |L|/2 > 0$; in particular $|f(x)| \ne 0$ and therefore $f(x) \ne 0$. [step 2.1, L2, L3, L5]

3.2 If $L > 0$ then $|L| = L$, and for every such $x$ the estimate $|f(x) - L| < L/2$ gives $-L/2 < f(x) - L$, that is $f(x) > L - L/2 = L/2 > 0$. [step 2.1, L2, L5]

3.3 If $L < 0$ then $|L| = -L$, and for every such $x$ the estimate $|f(x) - L| < -L/2$ gives $f(x) - L < -L/2$, that is $f(x) < L - L/2 = L/2 < 0$. [step 2.1, L2, L5]

4.1 Let $\eta > 0$ be an arbitrary real and let $\rho$ be the smaller of $\delta$ and $\eta$, so $\rho > 0$. Since $c$ is a limit point of $A$ there is $x \in A$ with $0 < |x - c| < \rho$; that $x$ satisfies $0 < |x - c| < \delta$, hence $f(x) \ne 0$ by step 3.1, so $x \in A_0$ and $0 < |x - c| < \eta$. As $\eta$ was arbitrary, $c$ is a limit point of $A_0$. [step 3.1, L4, L5]

5.1 So on $A \cap N^{*}_{\delta}(c)$ the function is bounded away from $0$ by $|L|/2$ and carries the sign of $L$, and $c$ remains a limit point of the set $A_0$ where $f$ does not vanish. [step 3.1, step 3.2, step 3.3, step 4.1] ∎

## Remarks

- **Why $|L|/2$ and not some other fraction.** Any $\varepsilon$ strictly between $0$ and $|L|$ gives a positive lower bound $|L| - \varepsilon$; the choice $\varepsilon = |L|/2$ makes the bound $|L|/2$, which is the form used downstream and needs only that $2$ is invertible and positive ([[cor-of-one-positive]], [[lem-of-inverse-positive]]).

- **The last claim is the one that is easy to forget.** Restricting a quotient to the set where the denominator does not vanish is useless unless $c$ is still a limit point of that set, since [[def-function-limit]] is stated only at a limit point. Step 4.1 is exactly that check, and it is what [[thm-algebra-of-function-limits]] cites when it forms $A_0$.

- **Nothing here says anything about $f(c)$.** As always the point $c$ itself is excluded by $0 < |x - c|$, so $f(c)$ may be $0$ even when $L \ne 0$; the function of [[fs-limit-equals-value]], read with the roles of $0$ and $1$ exchanged, is such an example.
````

### `thm-well-ordering-principle`

````markdown
---
id: thm-well-ordering-principle
kind: theorem
title: "The well-ordering principle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-nat-order, thm-induction-principle, lem-nat-discrete, lem-nat-trichotomy, thm-omega-is-peano-system, lem-nat-add-successor-left, lem-nat-add-identity]
aliases: [well-ordering]
landmark: true
short: "every nonempty $S\\subseteq\\mathbb N$ has a least element"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$.

## Facts & Assumptions

**Given:** A nonempty subset $S \subseteq \mathbb{N}$. Define $T = \{\, n \in \mathbb{N} : \text{every } m \text{ with } m \le n \text{ satisfies } m \notin S \,\}$ (informally, no element of $S$ is $\le n$).

[L1] Induction principle: a subset of $\mathbb{N}$ that contains $0$ and is closed under $\sigma$ equals $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] $m < n \iff \sigma(m) \le n$; consequently no $k$ satisfies $n < k < \sigma(n)$ ([[lem-nat-discrete]]).

[L3] Exactly one of $s < n$, $s = n$, $n < s$ holds ([[lem-nat-trichotomy]]); and $n < s \iff \sigma(n) \le s$ ([[lem-nat-discrete]]).

[L4] $\sigma$ is injective (Peano axiom P2) ([[thm-omega-is-peano-system]]).

[L5] $\sigma(a) + i = \sigma(a + i)$ for all $a, i$ (the left successor law, [[lem-nat-add-successor-left]]).

[L6] $0 + k = k$ for all $k$ ([[lem-nat-add-identity]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $S$ is nonempty but has no least element. [assume-contra]

1.2 If $m < \sigma(n)$ then $m \le n$: by [L2] applied to $m$ and $\sigma(n)$ we get $\sigma(m) \le \sigma(n)$, say $\sigma(m) + i = \sigma(n)$; then $\sigma(m + i) = \sigma(m) + i = \sigma(n)$ [L5], so $m + i = n$ by injectivity [L4], hence $m \le n$. [L2, L4, L5]

2.1 First, $0 \in T$: if $0 \in S$ then $0 \le s$ for all $s \in S$, since $0 + s = s$ [L6], making $0$ a least element, contrary to the assumption; hence $0 \notin S$; moreover $m \le 0$ forces $m = 0$, because $m \ne 0$ would give $0 < m$ (as $0 + m = m$ [L6] with $m \ne 0$) while $m \le 0$ gives $m < 0$, and [L3] admits at most one of these; so every $m \le 0$ lies outside $S$. [step 1.1, L3, L6, given]

2.2 Next, $T$ is closed under $\sigma$: assume $n \in T$; if $\sigma(n) \in S$ then no $s \in S$ satisfies $s < \sigma(n)$ (else $s \le n$ by step 1.2, so $s \notin S$ because $n \in T$, a contradiction), hence $\sigma(n) \le s$ for all $s \in S$ by [L3], making $\sigma(n)$ a least element, contrary to the assumption; therefore $\sigma(n) \notin S$, and any $m$ with $m \le \sigma(n)$ satisfies $m = \sigma(n)$ or $m \ne \sigma(n)$; in the second case $m \le \sigma(n)$ together with $m \ne \sigma(n)$ gives $m < \sigma(n)$ by the definition of the strict order, hence $m \le n$ by step 1.2 and $m \notin S$ because $n \in T$, while in the first case $m = \sigma(n) \notin S$; so every $m \le \sigma(n)$ lies outside $S$, giving $\sigma(n) \in T$. [step 1.1, step 1.2, L3]

3.1 By the induction principle [L1], from $0 \in T$ and closure under $\sigma$, $T = \mathbb{N}$; then for every $n$, taking $m = n \le n$ shows $n \notin S$, so $S = \varnothing$, contradicting nonemptiness; therefore $S$ has a least element. [step 2.1, step 2.2, L1, discharge-contradiction] ∎
````

