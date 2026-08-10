## Selection reasons

- critical risk (8): 5 declared dependencies; 4 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-termwise-differentiation-of-a-real-power-series`

Normalized current SHA-256: `39b0d21cb1b058208e6aeb49c9fe1f031b2a13064f6a0c4d8bad8618da85d1f1`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-termwise-differentiation-of-a-real-power-series
kind: theorem
title: "Inside its radius a real power series may be differentiated term by term, and the differentiated series has the same radius"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-derived-and-integrated-power-series-have-the-same-radius, thm-power-series-uniform-on-compact-subintervals, thm-uniform-derivative-limit-on-a-closed-interval, lem-derivative-of-a-power, def-derivative]
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
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
    - title: "E. Randles, Supplementary Notes for Real Analysis"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Statement

Let

$$f(x)=\sum_{n=0}^{\infty}a_n(x-c)^n$$

have radius $R$. For every $x$ with $|x-c|<R$, the function $f$ is differentiable at $x$ ([[def-derivative]]) and

$$f'(x)=\sum_{n=0}^{\infty}\iota(n+1)a_{n+1}(x-c)^n.$$

The differentiated series has the same radius $R$.

## Facts & Assumptions

**Given:** A real power series of radius $R$ with polynomial partial sums $p_N(x):=\sum_{n<N}a_n(x-c)^n$.

[L1] The formal derivative series has radius $R$ ([[lem-derived-and-integrated-power-series-have-the-same-radius]]).

[L2] A power series converges uniformly on every closed interval strictly inside its radius ([[thm-power-series-uniform-on-compact-subintervals]]).

[L3] If continuously differentiable functions converge at one point of a closed interval and their derivatives converge uniformly, then the functions converge uniformly to a differentiable function whose derivative is the derivative limit ([[thm-uniform-derivative-limit-on-a-closed-interval]]).

[L4] The derivative of $(x-c)^n$ is $0$ for $n=0$ and $\iota(n)(x-c)^{n-1}$ for $n\ge1$ ([[lem-derivative-of-a-power]] and the algebra of derivatives cited there).

## Proof

**Proof technique:** direct.

1.1 Fix $x_0$ with $|x_0-c|<R$ and choose a closed interval $J$ containing both $c$ and $x_0$ strictly inside the radius. [given, choose]

1.2 Each $p_N$ is continuously differentiable on $J$, and [L4] gives $p_N'(x)=\sum_{n<N-1}\iota(n+1)a_{n+1}(x-c)^n$. The derivative partial sums converge uniformly on $J$ by [L1] and [L2]. [L1, L2, L4]

2.1 The sequence $p_N(c)$ converges to $a_0$, since it equals $a_0$ for every $N\ge1$. Thus [L3] applies and says that the uniform limit of $(p_N)$ on $J$ is differentiable with derivative equal to the uniform limit of $(p_N')$. [step 1.2, L3]

3.1 The uniform limit of $(p_N)$ is $f$, and the limit of $(p_N')$ is the displayed differentiated series. Hence the formula holds at $x_0$; since $x_0$ was arbitrary it holds throughout $|x-c|<R$, and [L1] supplies the equality of radii. [step 2.1, L1] ∎
````

## Wave 13 provenance row

```json
{
  "id": "thm-termwise-differentiation-of-a-real-power-series",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Power_series",
    "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
  ],
  "rationale": "The sources state termwise differentiation throughout the open convergence interval with the same radius. The item expresses coefficients through canonical naturals and adapts the proof to the library's uniform-derivative theorem.",
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
      "source": "lem-derived-and-integrated-power-series-have-the-same-radius",
      "source_section": "Statement",
      "quote": "For a power series $\\sum_{n\\ge0}a_n(x-c)^n$, define its formal derivative and its zero-constant-term formal antiderivative by\n\n$$\\sum_{n\\ge0}\\iota(n+1)a_{n+1}(x-c)^n,\\qquad \\sum_{n\\ge0}\\frac{a_n}{\\iota(n+1)}(x-c)^{n+1},$$\n\nwhere $\\iota(n+1)>0$ is the canonical natural in $\\mathbb R$ ([[def-canonical-natural]], [[lem-of-naturals-positive]]). All three power series have the same radius of convergence.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-power-series-uniform-on-compact-subintervals",
      "source_section": "Statement",
      "quote": "Let $\\sum a_n(x-c)^n$ have radius $R$, and let $[u,v]$ be a nonempty closed interval for which\n\n$$r:=\\max\\{|u-c|,|v-c|\\}<R.$$\n\nThen the function series converges absolutely at every point of $[u,v]$ and converges uniformly there.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-uniform-derivative-limit-on-a-closed-interval",
      "source_section": "Statement",
      "quote": "Let $a<b$ be reals and let $f_k:[a,b]\\to\\mathbb{R}$ be continuously\ndifferentiable: each $f_k$ is differentiable on $[a,b]$ and each derivative\n$f_k'$ is continuous there ([[def-continuity-real]]). Suppose there is\n$c\\in[a,b]$ such that the real\nsequence $(f_k(c))$ converges to $A$, and suppose $f_k'\\to g$ uniformly on\n$[a,b]$. Then there is a differentiable function $f:[a,b]\\to\\mathbb{R}$ such\nthat\n\n$$f_k\\longrightarrow f\\ \\text{ uniformly},\\qquad f'=g.$$",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-derivative-of-a-power",
      "source_section": "Statement",
      "quote": "Powers are those of [[def-integer-power]], and $\\iota : \\mathbb{N} \\to\n\\mathbb{R}$ is the canonical natural of [[def-canonical-natural]], so that\n$\\iota(0) = 0$ and $\\iota(m+1) = \\iota(m) + 1$. Let $n \\in \\mathbb{N}$.\n\n1. The function $p_0 : \\mathbb{R} \\to \\mathbb{R}$, $p_0(x) = x^{0}$, is the\n   constant function $1$, and it is differentiable at every $c \\in \\mathbb{R}$\n   with $p_0'(c) = 0$ ([[def-derivative]]).\n2. For $n \\ge 1$ the function $p_n : \\mathbb{R} \\to \\mathbb{R}$,\n   $p_n(x) = x^{n}$, is differentiable at every $c \\in \\mathbb{R}$, and\n   $$p_n'(c) \\;=\\; \\iota(n)\\,c^{\\,n-1} .$$\n3. For $n \\ge 1$ put $A_0 := \\{\\, x \\in \\mathbb{R} : x \\ne 0 \\,\\}$. The function\n   $m_n : A_0 \\to \\mathbb{R}$, $m_n(x) = x^{-n}$, is differentiable at every\n   $c \\in A_0$ as a function on $A_0$, and\n   $$m_n'(c) \\;=\\; -\\,\\iota(n)\\,c^{\\,-n-1} .$$\n4. Let $a : \\mathbb{N} \\to \\mathbb{R}$ with $a_j = 0$ for $j \\ge n$, and let\n   $P : \\mathbb{R} \\to \\mathbb{R}$ be the polynomial function\n   $P(x) = \\sum_{j<n} a_j x^{j}$ ([[def-finite-sum]]). Then $P$ is\n   differentiable at every $c \\in \\mathbb{R}$, and, defining $e : \\mathbb{N}\n   \\to \\mathbb{R}$ by $e_0 := 0$ and $e_j := \\iota(j)\\,a_j\\,c^{\\,j-1}$ for\n   $j \\ge 1$,\n   $$P'(c) \\;=\\; \\sum_{j<n} e_j .$$\n\n**Claim 2 is stated for $n \\ge 1$ and not for $n \\ge 0$, and that is not\ntimidity.** At $n = 0$ its right-hand side reads $\\iota(0)\\,c^{-1}$, and\n$c^{-1}$ is not defined at $c = 0$ ([[def-integer-power]]), so the formula is\nnot a statement about the whole line. Claim 1 is what covers $n = 0$, and it\nsays the derivative is $0$ there, which is what the informal reading\n\"$0 \\cdot c^{-1}$\" is reaching for. The same shift is why the term $e_0$ of\nclaim 4 is defined to be $0$ outright rather than by the formula.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Fix $x_0$ with $|x_0-c|<R$ and choose a closed interval $J$ containing both $c$ and $x_0$ strictly inside the radius.",
      "step": "1.1",
      "inputs": [
        "given",
        "choose"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Each $p_N$ is continuously differentiable on $J$, and [L4] gives $p_N'(x)=\\sum_{n<N-1}\\iota(n+1)a_{n+1}(x-c)^n$. The derivative partial sums converge uniformly on $J$ by [L1] and [L2].",
      "step": "1.2",
      "inputs": [
        "L4",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "The sequence $p_N(c)$ converges to $a_0$, since it equals $a_0$ for every $N\\ge1$. Thus [L3] applies and says that the uniform limit of $(p_N)$ on $J$ is differentiable with derivative equal to the uniform limit of $(p_N')$.",
      "step": "2.1",
      "inputs": [
        "L3",
        "step 1.2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "The uniform limit of $(p_N)$ is $f$, and the limit of $(p_N')$ is the displayed differentiated series. Hence the formula holds at $x_0$; since $x_0$ was arbitrary it holds throughout $|x-c|<R$, and [L1] supplies the equality of radii.",
      "step": "3.1",
      "inputs": [
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
      "reason": "thm-termwise-differentiation-of-a-real-power-series: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Let $$f(x)=\\sum_{n=0}^{\\infty}a_n(x-c)^n$$ have radius $R$. For every $x$ with $|x-c|<R$, the function $f$ is differentiable at $x$ () and $$f'(x)=\\sum_{n=0}^{\\infty}\\iota(n+1)a_{n+1}(x-c)^n.$$ The differentiated series "
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "thm-termwise-differentiation-of-a-real-power-series: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: Let $$f(x)=\\sum_{n=0}^{\\infty}a_n(x-c)^n$$ have radius $R$. For every $x$ with $|x-c|<R$, the function $f$ is differentiable at $x$ () and $$f'(x)=\\sum_{n=0}^{\\infty}\\iota(n+1)a_{n+1}(x-c)^n.$$ The differentiated series "
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-termwise-differentiation-of-a-real-power-series: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Let $$f(x)=\\sum_{n=0}^{\\infty}a_n(x-c)^n$$ have radius $R$. For every $x$ with $|x-c|<R$, the function $f$ is differentiable at $x$ () and $$f'(x)=\\sum_{n=0}^{\\infty}\\iota(n+1)a_{n+1}(x-c)^n.$$ The differentiated series "
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "thm-termwise-differentiation-of-a-real-power-series: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: Let $$f(x)=\\sum_{n=0}^{\\infty}a_n(x-c)^n$$ have radius $R$. For every $x$ with $|x-c|<R$, the function $f$ is differentiable at $x$ () and $$f'(x)=\\sum_{n=0}^{\\infty}\\iota(n+1)a_{n+1}(x-c)^n.$$ The differentiated series "
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.1: the proof explicitly treats the endpoint, boundary, or radial-limit behaviour used by the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: every witness selected there is drawn after the proof establishes the relevant positivity, existence, or nonemptiness condition."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "thm-termwise-differentiation-of-a-real-power-series: the Statement is not an equivalence, so there is no forward implication obligation: Let $$f(x)=\\sum_{n=0}^{\\infty}a_n(x-c)^n$$ have radius $R$. For every $x$ with $|x-c|<R$, the function $f$ is differentiable at $x$ () and $$f'(x)=\\sum_{n=0}^{\\infty}\\iota(n+1)a_{n+1}(x-c)^n.$$ The differentiated series "
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "thm-termwise-differentiation-of-a-real-power-series: the Statement is not an equivalence, so there is no reverse implication obligation: Let $$f(x)=\\sum_{n=0}^{\\infty}a_n(x-c)^n$$ have radius $R$. For every $x$ with $|x-c|<R$, the function $f$ is differentiable at $x$ () and $$f'(x)=\\sum_{n=0}^{\\infty}\\iota(n+1)a_{n+1}(x-c)^n.$$ The differentiated series "
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-termwise-differentiation-of-a-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-derived-and-integrated-power-series-have-the-same-radius",
    "declared_target": "lem-derived-and-integrated-power-series-have-the-same-radius",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-termwise-differentiation-of-a-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-power-series-uniform-on-compact-subintervals",
    "declared_target": "thm-power-series-uniform-on-compact-subintervals",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-termwise-differentiation-of-a-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-uniform-derivative-limit-on-a-closed-interval",
    "declared_target": "thm-uniform-derivative-limit-on-a-closed-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-termwise-differentiation-of-a-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-derivative-of-a-power",
    "declared_target": "lem-derivative-of-a-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-termwise-differentiation-of-a-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "def-derivative",
    "declared_target": "def-derivative",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
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

## Full exact-current text of every cited or declared item (5)

### `def-derivative`

````markdown
---
id: def-derivative
kind: definition
title: "The derivative $f'(c) = \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c}$ of $f : A \\to \\mathbb{R}$ at a point $c \\in A$ that is a limit point of $A$, and differentiability on a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, lem-function-limit-unique, def-limit-point-r, def-interval, def-neighbourhood-r, def-complete-ordered-field, def-continuity-real, lem-limit-is-local]
justified_by: []
forward_refs: [cex-absolute-value-is-not-differentiable-at-zero]
aliases: [def-differentiable, def-differentiability]
landmark: true
short: "the derivative at a point"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Def. 5.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §10.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), neighbourhoods are those of
[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function

$$q_{f,c} : A \setminus \{c\} \to \mathbb{R}, \qquad q_{f,c}(x) := \frac{f(x) - f(c)}{x - c} .$$

The division is legitimate at every point of the domain, since $x \ne c$ gives
$x - c \ne 0$.

**The point $c$ is a limit point of $A \setminus \{c\}$, not merely of $A$.**
For every real $\varepsilon > 0$ the punctured neighbourhood
$N^{*}_{\varepsilon}(c)$ omits $c$, so

$$N^{*}_{\varepsilon}(c) \cap A \;=\; N^{*}_{\varepsilon}(c) \cap (A \setminus \{c\}) ,$$

and the left-hand side is nonempty because $c$ is a limit point of $A$. So
$q_{f,c}$ is a function on a set having $c$ as a limit point, and
$\lim_{x \to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.

$f$ is **differentiable at $c$** when that limit exists, and then the
**derivative of $f$ at $c$** is

$$f'(c) \;:=\; \lim_{x \to c} q_{f,c}(x) \;=\; \lim_{x \to c} \frac{f(x) - f(c)}{x - c} .$$

**Two obligations are carried by that notation, and both are discharged here.**

1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a
   single real number. That is legitimate: $c$ is a limit point of the domain
   $A \setminus \{c\}$ of $q_{f,c}$, so at most one real can satisfy the
   $\varepsilon$-$\delta$ condition, by [[lem-function-limit-unique]] applied to
   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the
   symbol denotes.
2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not
   decoration. At an **isolated** point of $A$ the punctured condition
   $0 < |x - c| < \delta$ is met by no point of the domain at all, so the
   $\varepsilon$-$\delta$ formula is satisfied vacuously by *every* real at
   once; this is why [[def-function-limit]] leaves the limit undefined there,
   and it is why this library defines $f'(c)$ only at a limit point of $A$. At
   an isolated point of its domain a function is neither differentiable nor
   non-differentiable here: the question is not posed.

**The limit sees only $A \setminus \{c\}$, so how the difference quotient is
extended to $c$ is irrelevant.** Let $Q : A \to \mathbb{R}$ agree with
$q_{f,c}$ at every point of $A \setminus \{c\}$, and let $L \in \mathbb{R}$.
Then $\lim_{x \to c} Q(x) = L$ if and only if $\lim_{x \to c} q_{f,c}(x) = L$.
Both conditions read: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that every point $x$ of the relevant domain with
$0 < |x - c| < \delta$ satisfies $|{\cdot} - L| < \varepsilon$
([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both
quantifiers, so in both cases the points quantified over are exactly the
$x \in A \setminus \{c\}$ with $0 < |x - c| < \delta$, at which $Q$ and
$q_{f,c}$ take the same value. The two conditions are the same condition.

**Differentiability on a set.** For $S \subseteq A$, $f$ is **differentiable on
$S$** when it is differentiable at every $c \in S$; implicit in that phrase is
that every point of $S$ is a limit point of $A$. $f$ is **differentiable** when
it is differentiable on the whole of $A$.

**Restriction of the domain.** Let $B \subseteq A$, let $c \in B$ and suppose
$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the
restriction $f|_B : B \to \mathbb{R}$, and

$$(f|_B)'(c) \;=\; f'(c) .$$

Indeed $B \setminus \{c\} \subseteq A \setminus \{c\}$; the displayed identity
of punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit
point of $B \setminus \{c\}$; the difference quotient $q_{f|_B, c}$ is the
restriction of $q_{f,c}$ to $B \setminus \{c\}$, since $f|_B(c) = f(c)$; and
claim 2 of [[lem-limit-is-local]] carries the limit to that restriction.

**Every point of a nondegenerate interval is a limit point of it.** Let
$J \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) with at least two
elements and let $p \in J$. Choose $q \in J$ with $q \ne p$, and let a real
$\varepsilon > 0$ be given. If $p < q$, put $y := p + \tfrac{1}{2}\min\{\varepsilon,\ q - p\}$;
then $p < y$, and $y - p \le \tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and
order-convexity gives $y \in J$, while $0 < |y - p| < \varepsilon$. If $q < p$,
the point $y := p - \tfrac{1}{2}\min\{\varepsilon,\ p - q\}$ serves in the same
way. So $N^{*}_{\varepsilon}(p) \cap J \ne \varnothing$ for every real
$\varepsilon > 0$, that is, $p$ is a limit point of $J$
([[def-limit-point-r]]).

Consequently, for $f$ defined on a nondegenerate interval $I$, the symbol
$f'(c)$ is meaningful at **every** $c \in I$, endpoints included. At an endpoint
the difference quotient is taken over the points of $I$ lying on the one side
that is available, so what other texts call a one-sided derivative is, here,
simply the derivative of $f$ on $I$.

## Remarks

- **Notation.** $f'(c)$ and $\frac{df}{dx}(c)$ denote the same real number, and
  this library uses the first. Neither is an operation performed on a symbol
  $x$: the variable in the second is a name for the argument and nothing more.

- **Differentiability is a property of the pair $(f, A)$ at $c$, not of $f$
  alone.** The restriction clause above goes in one direction only, and the
  converse fails. Take $A := \mathbb{R}$, $f(x) := |x|$, $B := [0,\infty)$ and
  $c := 0$. Then $f|_B$ is the identity on $B$, whose difference quotient at $0$
  is constantly $1$, so $f|_B$ is differentiable at $0$ with derivative $1$;
  that $f$ itself is not differentiable at $0$ is
  [[cex-absolute-value-is-not-differentiable-at-zero]] on the companion page.
  So enlarging the domain can destroy differentiability, and the phrase
  "$f$ is differentiable at $c$" always carries the domain with it.

- **The relation to continuity is not definitional.** [[def-continuity-real]]
  is a condition on $f$ near $c$ that does not mention a quotient, and it is
  defined at every point of $A$, isolated points included, whereas
  differentiability is defined only at limit points of $A$. That
  differentiability implies continuity is a theorem on this page and not a
  reading of the definitions.

- **No second derivative and no one-sided derivative is introduced here.**
  Both are standard, and both are absent from this page on purpose;
  [[rem-derivative-conventions]] records exactly what is fixed and what is left
  open at this point in the reading order.
````

### `lem-derivative-of-a-power`

````markdown
---
id: lem-derivative-of-a-power
kind: lemma
title: "For a natural $n \\ge 1$ the function $x \\mapsto x^{n}$ is differentiable everywhere with derivative $\\iota(n)\\,x^{\\,n-1}$; for $n = 0$ it is the constant $1$, with derivative $0$; for a natural $n \\ge 1$ the function $x \\mapsto x^{-n}$ is differentiable at every $x \\ne 0$ with derivative $-\\iota(n)\\,x^{-n-1}$; consequently every polynomial function is differentiable at every real, with the derivative computed term by term"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-derivative, thm-algebra-of-derivatives, def-integer-power, lem-power-laws, def-canonical-natural, thm-induction-principle, def-finite-sum, def-function-limit, def-limit-point-r, def-neighbourhood-r]
justified_by: []
aliases: [lem-power-rule]
landmark: true
short: "the power rule"
proof_strategy: induction
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Power rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_rule"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Statement

Powers are those of [[def-integer-power]], and $\iota : \mathbb{N} \to
\mathbb{R}$ is the canonical natural of [[def-canonical-natural]], so that
$\iota(0) = 0$ and $\iota(m+1) = \iota(m) + 1$. Let $n \in \mathbb{N}$.

1. The function $p_0 : \mathbb{R} \to \mathbb{R}$, $p_0(x) = x^{0}$, is the
   constant function $1$, and it is differentiable at every $c \in \mathbb{R}$
   with $p_0'(c) = 0$ ([[def-derivative]]).
2. For $n \ge 1$ the function $p_n : \mathbb{R} \to \mathbb{R}$,
   $p_n(x) = x^{n}$, is differentiable at every $c \in \mathbb{R}$, and
   $$p_n'(c) \;=\; \iota(n)\,c^{\,n-1} .$$
3. For $n \ge 1$ put $A_0 := \{\, x \in \mathbb{R} : x \ne 0 \,\}$. The function
   $m_n : A_0 \to \mathbb{R}$, $m_n(x) = x^{-n}$, is differentiable at every
   $c \in A_0$ as a function on $A_0$, and
   $$m_n'(c) \;=\; -\,\iota(n)\,c^{\,-n-1} .$$
4. Let $a : \mathbb{N} \to \mathbb{R}$ with $a_j = 0$ for $j \ge n$, and let
   $P : \mathbb{R} \to \mathbb{R}$ be the polynomial function
   $P(x) = \sum_{j<n} a_j x^{j}$ ([[def-finite-sum]]). Then $P$ is
   differentiable at every $c \in \mathbb{R}$, and, defining $e : \mathbb{N}
   \to \mathbb{R}$ by $e_0 := 0$ and $e_j := \iota(j)\,a_j\,c^{\,j-1}$ for
   $j \ge 1$,
   $$P'(c) \;=\; \sum_{j<n} e_j .$$

**Claim 2 is stated for $n \ge 1$ and not for $n \ge 0$, and that is not
timidity.** At $n = 0$ its right-hand side reads $\iota(0)\,c^{-1}$, and
$c^{-1}$ is not defined at $c = 0$ ([[def-integer-power]]), so the formula is
not a statement about the whole line. Claim 1 is what covers $n = 0$, and it
says the derivative is $0$ there, which is what the informal reading
"$0 \cdot c^{-1}$" is reaching for. The same shift is why the term $e_0$ of
claim 4 is defined to be $0$ outright rather than by the formula.

## Facts & Assumptions

**Given:** A natural $n$, a real $c$, and the functions $p_n$, $m_n$ and $P$ of the statement.

[L1] Powers ([[def-integer-power]]): $a^{0} = 1$ and $a^{m+1} = a^{m}a$ for every $a \in \mathbb{R}$ and $m \in \mathbb{N}$; $a^{-m} := (a^{m})^{-1}$ for $a \ne 0$ and $m \ge 1$; and $0^{m} = 0$ for $m \ge 1$.

[L2] Canonical naturals ([[def-canonical-natural]]): $\iota(0) = 0$, $\iota(m+1) = \iota(m) + 1$, and hence $\iota(1) = 1$.

[L3] Algebra of derivatives ([[thm-algebra-of-derivatives]]): at a limit point $c$ of the common domain, sums, scalar multiples and products of functions differentiable at $c$ are differentiable at $c$ with the four stated formulas, and if the denominator is nonzero at $c$ then the quotient, restricted to the set where the denominator does not vanish, is differentiable at $c$ with the quotient formula; that restricted set has $c$ as a limit point.

[L4] Derivative and difference quotient ([[def-derivative]]): $f$ is differentiable at a limit point $c$ of its domain $D$ exactly when the difference quotient $x \mapsto (f(x)-f(c))/(x-c)$, a function on $D \setminus \{c\}$, has a limit at $c$, and $f'(c)$ is that limit. A constant function $h \equiv K$ on a set having $c$ as a limit point has $\lim_{x \to c} h(x) = K$: given a real $\varepsilon > 0$, any real $\delta > 0$ serves, since $|K - K| = 0 < \varepsilon$ ([[def-function-limit]]).

[L5] Induction principle on $\mathbb{N}$ ([[thm-induction-principle]]).

[L6] Finite sums ([[def-finite-sum]]): $\sum_{j<0} b_j = 0$ and $\sum_{j<m+1} b_j = \bigl(\sum_{j<m} b_j\bigr) + b_m$.

[L7] Integer exponent laws for a nonzero base ([[lem-power-laws]]): $a^{k} \ne 0$ for every $k \in \mathbb{N}$ when $a \ne 0$; and for integers $j, k$ one has $a^{j}a^{k} = a^{j+k}$, $(a^{j})^{k} = a^{jk}$ and $a^{-k} = (a^{k})^{-1}$.

[L8] Every real is a limit point of $\mathbb{R}$, punctured neighbourhoods in $\mathbb{R}$ being never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]).

## Proof

**Proof technique:** induction.

1.1 **Base case, claim 2 at $n = 1$.** By [L1], $x^{1} = x^{0}x = 1 \cdot x = x$, so $p_1$ is the identity. Fix $c \in \mathbb{R}$; for every $x \ne c$ the difference quotient is $(x - c)/(x - c) = 1$, so it is the constant function $1$ on $\mathbb{R} \setminus \{c\}$, and by [L4] and [L8] its limit at $c$ is $1$. Since $\iota(1)c^{0} = 1 \cdot 1 = 1$ by [L1] and [L2], claim 2 holds at $n = 1$. [base, L1, L2, L4, L8]

1.2 **Inductive hypothesis.** Fix a natural $n \ge 1$ and assume that $p_n$ is differentiable at every $c \in \mathbb{R}$ with $p_n'(c) = \iota(n)c^{\,n-1}$. [ih]

1.3 **Claim 1.** By [L1] the function $p_0$ is the constant function $1$. Fix $c \in \mathbb{R}$; for every $x \ne c$ its difference quotient is $(1-1)/(x-c) = 0$, the constant function $0$ on $\mathbb{R}\setminus\{c\}$, whose limit at $c$ is $0$ by [L4] and [L8]. So $p_0$ is differentiable at every $c$ with $p_0'(c) = 0$. [L1, L4, L8]

2.1 **Successor step.** Let $c \in \mathbb{R}$. By [L1], $p_{n+1}(x) = x^{n+1} = x^{n}x = p_n(x)\,p_1(x)$ for every $x$. Both factors are differentiable at $c$, by step 1.2 and step 1.1, so the product rule of [L3] gives that $p_{n+1}$ is differentiable at $c$ with $p_{n+1}'(c) = p_n'(c)p_1(c) + p_n(c)p_1'(c) = \iota(n)c^{\,n-1}c + c^{n} \cdot 1$. Now $c^{\,n-1}c = c^{\,(n-1)+1} = c^{n}$ by [L1], so the right-hand side is $\iota(n)c^{n} + c^{n} = \bigl(\iota(n)+1\bigr)c^{n} = \iota(n+1)c^{n}$ by [L2]. [step 1.1, step 1.2, L1, L2, L3]

3.1 **Claim 2.** Steps 1.1 and 2.1 are the base case and the successor step of an induction over the naturals $n \ge 1$, so by [L5] the function $p_n$ is differentiable at every $c \in \mathbb{R}$ with $p_n'(c) = \iota(n)c^{\,n-1}$, for every natural $n \ge 1$. [step 1.1, step 2.1, L5]

4.1 **Claim 3.** Let $n \ge 1$. The set $\{\, x \in \mathbb{R} : p_n(x) \ne 0 \,\}$ is exactly $A_0$: a nonzero $x$ has $x^{n} \ne 0$ by [L7], and $0^{n} = 0$ by [L1]. Fix $c \in A_0$. The constant function $1$ on $\mathbb{R}$ is differentiable at $c$ with derivative $0$ by step 1.3, and $p_n$ is differentiable at $c$ with derivative $\iota(n)c^{\,n-1}$ by step 3.1, with $p_n(c) = c^{n} \ne 0$. So the quotient rule of [L3] applies: the function $x \mapsto 1/x^{n}$ on $A_0$, which by [L1] and [L7] is $m_n$, is differentiable at $c$ with derivative $\bigl(0 \cdot c^{n} - 1 \cdot \iota(n)c^{\,n-1}\bigr)/(c^{n})^{2} = -\iota(n)\,c^{\,n-1}\bigl(c^{\,2n}\bigr)^{-1} = -\iota(n)\,c^{\,n-1-2n} = -\iota(n)\,c^{\,-n-1}$, where $(c^{n})^{2} = c^{\,2n}$ and $c^{\,n-1}c^{\,-2n} = c^{\,-n-1}$ are [L7]. [step 1.3, step 3.1, L1, L3, L7]

4.2 **Claim 4, by a second induction on $n$.** Fix $c \in \mathbb{R}$ and the sequence $a$. At $n = 0$ the sum $P(x) = \sum_{j<0} a_j x^{j}$ is $0$ for every $x$ by [L6], so $P$ is the constant function $0$ and, as in step 1.3, $P'(c) = 0 = \sum_{j<0} e_j$. Suppose the claim holds at $n$, and let $P_{n+1}(x) := \sum_{j<n+1} a_j x^{j}$. By [L6], $P_{n+1}(x) = P_n(x) + a_n x^{n}$ for every $x$, where $P_n(x) = \sum_{j<n} a_j x^{j}$. The function $x \mapsto a_n x^{n}$ is differentiable at $c$ with derivative $e_n$: for $n = 0$ it is the constant $a_n$, of derivative $0 = e_0$, by step 1.3 and the scalar rule of [L3]; for $n \ge 1$ it is the scalar multiple $a_n p_n$, of derivative $a_n \iota(n)c^{\,n-1} = e_n$, by step 3.1 and the scalar rule of [L3]. The inductive hypothesis gives $P_n'(c) = \sum_{j<n} e_j$, so the sum rule of [L3] gives that $P_{n+1}$ is differentiable at $c$ with $P_{n+1}'(c) = \sum_{j<n} e_j + e_n = \sum_{j<n+1} e_j$ by [L6]. By [L5] claim 4 holds for every $n \in \mathbb{N}$. [step 1.3, step 3.1, L3, L5, L6]

5.1 All four claims are established: claim 1 by step 1.3, claim 2 by step 3.1, claim 3 by step 4.1 and claim 4 by step 4.2. [step 1.3, step 3.1, step 4.1, step 4.2, discharge-induction] ∎

## Remarks

- **Why the induction starts at $n = 1$ and not at $n = 0$.** The successor step multiplies by the identity, and the identity is $p_1$; starting at $n = 0$ would require the formula of claim 2 to hold at $n = 0$, which it does not, since $c^{-1}$ is undefined at $c = 0$. The two statements are therefore kept apart, and claim 1 is proved on its own from the definition. This is the same index care that [[def-canonical-natural]] records for families of reciprocals: $\mathbb{N}$ contains $0$, and a formula written for "$n$" is a claim about $n = 0$ unless it says otherwise.

- **The negative exponents cost nothing extra.** Claim 3 is the quotient rule of [[thm-algebra-of-derivatives]] applied with numerator the constant $1$, and the domain it produces, the set where $x^{n}$ does not vanish, is exactly $\mathbb{R} \setminus \{0\}$; no separate argument and no separate limit is needed. Rational exponents are a different matter, resting on [[thm-nth-roots-exist]], and are treated on the companion page rather than here.

- **Claim 4 is a statement about a finite sum, not about an infinite one.** Nothing here says anything about differentiating a series term by term; that is a separate question, needing hypotheses about convergence that this page does not have and does not assume.
````

### `lem-derived-and-integrated-power-series-have-the-same-radius`

````markdown
---
id: lem-derived-and-integrated-power-series-have-the-same-radius
kind: lemma
title: "A power series, its formal derivative, and its zero-constant-term formal antiderivative have the same radius of convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-power-series-and-radius-of-convergence, thm-geometric-series, lem-power-monotone, lem-of-abs-value, cor-cauchy-product-absolute, thm-direct-comparison-test, lem-nth-term-test, lem-convergent-implies-bounded, def-canonical-natural, lem-of-naturals-positive]
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

For a power series $\sum_{n\ge0}a_n(x-c)^n$, define its formal derivative and its zero-constant-term formal antiderivative by

$$\sum_{n\ge0}\iota(n+1)a_{n+1}(x-c)^n,\qquad \sum_{n\ge0}\frac{a_n}{\iota(n+1)}(x-c)^{n+1},$$

where $\iota(n+1)>0$ is the canonical natural in $\mathbb R$ ([[def-canonical-natural]], [[lem-of-naturals-positive]]). All three power series have the same radius of convergence.

## Facts & Assumptions

**Given:** The three formal power series in the statement, centred at the same real $c$.

[L1] For $0\le q<1$, the geometric series $\sum q^n$ converges. Its terms are nonnegative, so $|q^n|=q^n$ and the convergence is absolute ([[thm-geometric-series]], [[lem-power-monotone]], [[lem-of-abs-value]]).

[L2] The Cauchy product of two absolutely convergent series converges absolutely; applying this to two copies of $\sum q^n$ shows that $\sum_{n\ge0}\iota(n+1)q^n$ converges ([[cor-cauchy-product-absolute]]).

[L3] The terms of a convergent series tend to $0$ ([[lem-nth-term-test]]), a convergent sequence is bounded ([[lem-convergent-implies-bounded]]), and direct comparison preserves convergence of nonnegative series ([[thm-direct-comparison-test]]).

[L4] The canonical naturals $\iota(n+1)$ are positive and at least $1$ ([[lem-of-naturals-positive]]).

## Proof

**Proof technique:** direct.

1.1 Fix distances $0\le r<s$ and put $q=r/s$ when $s>0$. By [L2], the series with nonnegative terms $\iota(n+1)q^n$ converges. Its terms tend to $0$ and hence form a bounded sequence by [L3], say with bound $M$. [L1, L2, L3, choose]

1.2 Conversely, if the derivative series converges absolutely at a distance $s>0$, then $|a_{n+1}|s^{n+1}\le s\,\iota(n+1)|a_{n+1}|s^n$ because $\iota(n+1)\ge1$. Comparison gives absolute convergence of the original series there, after adjoining its first term. [L3, L4, algebra]

1.3 If the original series converges absolutely at distance $s>0$, then the antiderivative terms satisfy $|a_n|s^{n+1}/\iota(n+1)\le s|a_n|s^n$, so the antiderivative converges absolutely at $s$. [L3, L4, algebra]

2.1 Suppose the original series converges absolutely at distance $s>0$. Its shifted absolute terms $u_n:=|a_{n+1}|s^{n+1}$ form a convergent series. At distance $r<s$, the derivative's absolute terms satisfy $\iota(n+1)|a_{n+1}|r^n=s^{-1}\iota(n+1)q^n u_n\le (M/s)u_n$, so the derivative series converges absolutely there by [L3]. [step 1.1, L3]

2.2 Conversely, if the antiderivative converges absolutely at distance $s>0$, put $v_n:=|a_n|s^{n+1}/\iota(n+1)$. At every $r<s$, $|a_n|r^n=s^{-1}\iota(n+1)q^n v_n\le(M/s)v_n$, so the original series converges absolutely at $r$ by [L3]. [step 1.1, L3]

3.1 Write $R_0,R_D,R_I$ for the three radii. If $0\le r<R_0$, the supremum definition supplies an admissible distance $s>r$ for the original series; choosing $u$ with $r<u<s$, the original series is absolutely convergent at $u$, and step 2.1 makes the derivative absolutely convergent at every distance below $r$. Thus $r$ is admissible for the derivative and $R_0\le R_D$. Conversely, if $0\le r<R_D$, choose an admissible derivative distance $s>r$ and then $u$ with $r<u<s$. The derivative converges absolutely at $u$, so step 1.2 and direct comparison make the original series absolutely convergent at every distance below $r$; hence $R_D\le R_0$. The same argument with steps 1.3 and 2.2 gives $R_0=R_I$. Therefore all three extended radii are equal, including $0$ and $+\infty$. [given, step 2.1, step 1.2, step 1.3, step 2.2, L3] ∎
````

### `thm-power-series-uniform-on-compact-subintervals`

````markdown
---
id: thm-power-series-uniform-on-compact-subintervals
kind: theorem
title: "A power series converges absolutely and uniformly on every closed interval strictly inside its interval of convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-power-series-convergence-dichotomy, thm-weierstrass-m-test-for-function-series, def-series-of-real-functions, def-interval]
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
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
pipeline_run: null
---

## Statement

Let $\sum a_n(x-c)^n$ have radius $R$, and let $[u,v]$ be a nonempty closed interval for which

$$r:=\max\{|u-c|,|v-c|\}<R.$$

Then the function series converges absolutely at every point of $[u,v]$ and converges uniformly there.

## Facts & Assumptions

**Given:** A power series of radius $R$ and a closed interval $[u,v]$ satisfying the strict interior condition above ([[def-interval]], [[def-series-of-real-functions]]).

[L1] The power series converges absolutely at every point whose distance from $c$ is less than $R$ ([[cor-power-series-convergence-dichotomy]]).

[L2] If $|f_n(x)|\le M_n$ for all $n,x$ and $\sum M_n$ converges, the Weierstrass M-test gives absolute pointwise and uniform convergence of $\sum f_n$ ([[thm-weierstrass-m-test-for-function-series]]).

## Proof

**Proof technique:** direct.

1.1 Choose a real $\rho$ with $r<\rho<R$, or merely $\rho>r$ when $R=+\infty$. Then the scalar series $\sum |a_n|\rho^n$ converges by [L1], applied at $x=c+\rho$. [given, L1, choose]

1.2 For every $x\in[u,v]$, order-convexity gives $|x-c|\le\max\{|u-c|,|v-c|\}=r<\rho$, and hence $|a_n(x-c)^n|\le |a_n|\rho^n$ for every $n$. [given, algebra]

2.1 Apply [L2] to $f_n(x)=a_n(x-c)^n$ and $M_n=|a_n|\rho^n$. The series is absolutely convergent at each $x\in[u,v]$ and uniformly convergent on the whole interval. [step 1.1, step 1.2, L2] ∎
````

### `thm-uniform-derivative-limit-on-a-closed-interval`

````markdown
---
id: thm-uniform-derivative-limit-on-a-closed-interval
kind: theorem
title: "If continuously differentiable functions converge at one point and their derivatives converge uniformly on a closed interval, then the functions converge uniformly to a differentiable function whose derivative is the derivative limit"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-real-limit, def-continuity-real, lem-real-and-metric-notions-agree, thm-uniform-limit-continuous-real-functions, thm-uniform-limit-interchanges-riemann-integration, thm-ftc-first-part, thm-ftc-second-part, def-derivative, def-function-limit, def-limit-point-r, def-interval, lem-uniform-integral-error-bound, thm-continuous-implies-integrable, lem-integrability-on-a-subinterval, def-oriented-integral, thm-additivity-over-subintervals, def-the-integral-function, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $a<b$ be reals and let $f_k:[a,b]\to\mathbb{R}$ be continuously
differentiable: each $f_k$ is differentiable on $[a,b]$ and each derivative
$f_k'$ is continuous there ([[def-continuity-real]]). Suppose there is
$c\in[a,b]$ such that the real
sequence $(f_k(c))$ converges to $A$, and suppose $f_k'\to g$ uniformly on
$[a,b]$. Then there is a differentiable function $f:[a,b]\to\mathbb{R}$ such
that

$$f_k\longrightarrow f\ \text{ uniformly},\qquad f'=g.$$

## Facts & Assumptions

**Given:** Reals $a<b$, a point $c\in[a,b]$, continuously differentiable functions $f_k:[a,b]\to\mathbb{R}$, convergence $f_k(c)\to A$, and uniform convergence $f_k'\to g$.

[L1] A uniform limit of continuous real-valued functions is continuous, and a continuous function on $[a,b]$ is Riemann integrable ([[thm-uniform-limit-continuous-real-functions]], [[thm-continuous-implies-integrable]]).

[L2] Uniform convergence of integrable functions preserves integrability and the limit of the integrals ([[thm-uniform-limit-interchanges-riemann-integration]]).

[L3] If $s<t$, $G$ is differentiable on $[s,t]$, and $G'$ is integrable there, then $\int_s^tG'=G(t)-G(s)$ ([[thm-ftc-second-part]]). Restriction to a closed subinterval preserves differentiability and the derivative at its limit points, and integrability on $[a,b]$ passes to every nondegenerate closed subinterval ([[def-derivative]], [[def-function-limit]], [[def-limit-point-r]], [[def-interval]], [[lem-integrability-on-a-subinterval]]). Finally $\int_t^s h=-\int_s^t h$ and $\int_s^s h=0$ whenever the displayed integrals are defined ([[def-oriented-integral]]).

[L4] If $g$ is continuous, its integral function $H(x)=\int_a^xg$ is differentiable with $H'=g$; oriented additivity gives $\int_c^xg=H(x)-H(c)$ ([[thm-ftc-first-part]], [[def-the-integral-function]], [[thm-additivity-over-subintervals]]).

[L5] Sums and scalar multiples of differentiable functions are differentiable, with the corresponding derivative rules ([[thm-algebra-of-derivatives]], [[def-derivative]]).

[L6] A uniform bound $|p-q|\le\eta$ on an interval gives $\left|\int_u^v p-\int_u^v q\right|\le\eta|v-u|$ ([[lem-uniform-integral-error-bound]]).

[L7] On a subset of $\mathbb R$ with its usual subspace metric, real-native continuity is equivalent to metric-space continuity ([[lem-real-and-metric-notions-agree]]).

## Proof

**Proof technique:** constructive.

1.1 By [L7], each real-continuous derivative $f_k'$ is metric-continuous. The uniform-limit clause of [L1] makes $g$ metric-continuous, and [L7] makes $g$ real-continuous. The integrability clause of [L1] therefore makes every $f_k'$ and $g$ Riemann integrable; [L2] also gives the integrability of the uniform limit. [L1, L2, L7]

1.2 Let $\varepsilon>0$. Choose $N_0$ such that $|f_k(c)-A|<\varepsilon/2$ for $k\ge N_0$, and choose $N_1$ such that $|f_k'(x)-g(x)|<\varepsilon/\bigl(2(b-a+1)\bigr)$ for $k\ge N_1$ and all $x\in[a,b]$. [given, choose]

2.1 Fix $k$ and $x\in[a,b]$. If $c<x$, restrict $f_k$ to $[c,x]$; its derivative is $f_k'$ there and that derivative is integrable there by steps 1.1 and [L3], so the first clause of [L3] gives $f_k(x)=f_k(c)+\int_c^x f_k'$. If $x<c$, apply that clause on $[x,c]$ and then use orientation; if $x=c$, use $\int_c^c f_k'=0$. Thus in every case $f_k(x)=f_k(c)+\int_c^x f_k'$. [step 1.1, L3]

2.2 Define $H(x):=\int_a^xg$ and construct $f:[a,b]\to\mathbb{R}$ by $f(x):=A+H(x)-H(c)=A+\int_c^xg$. [step 1.1, L4, construct]

3.1 By [L4] and [L5], $H$ is differentiable with $H'=g$, and therefore the constructed function $f=A+H-H(c)$ is differentiable with $f'=g$. [step 2.2, L4, L5]

3.2 Choose $N$ at least as large as $N_0,N_1$. For $k\ge N$ and $x\in[a,b]$, steps 2.2 and 2.1 with [L6] give $|f_k(x)-f(x)|\le |f_k(c)-A|+\left|\int_c^x f_k'-\int_c^xg\right|<\varepsilon/2+\varepsilon|x-c|/\bigl(2(b-a+1)\bigr)<\varepsilon$. [step 2.2, step 2.1, step 1.2, L6, choose, algebra]

4.1 The index $N$ in step 3.2 serves every $x\in[a,b]$, so $f_k\to f$ uniformly; step 3.1 gives $f'=g$. Thus the constructed $f$ has both asserted properties. [step 3.2, step 3.1, discharge-construct] ∎
````

