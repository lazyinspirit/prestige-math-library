## Selection reasons

- critical risk (9): 7 declared dependencies; 7 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `cor-termwise-integration-of-a-real-power-series`

Normalized current SHA-256: `8f5a36049e3e57c8846a9747976594b739871eab108a7bbb63edca8147b1be41`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cor-termwise-integration-of-a-real-power-series
kind: corollary
title: "Inside its radius a real power series may be integrated term by term on every closed subinterval"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-derived-and-integrated-power-series-have-the-same-radius, thm-power-series-uniform-on-compact-subintervals, thm-uniform-limit-interchanges-riemann-integration, thm-ftc-first-part, thm-termwise-differentiation-of-a-real-power-series, cor-zero-derivative-implies-constant, cor-differentiable-implies-continuous]
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

Let $f(x)=\sum_{n\ge0}a_n(x-c)^n$ have radius $R$, and define

$$G(x):=\sum_{n=0}^{\infty}\frac{a_n}{\iota(n+1)}(x-c)^{n+1}.$$

For every closed interval $[u,v]$ strictly inside $|x-c|<R$, the function $f$ is Riemann integrable and

$$\int_u^v f(x)\,dx=G(v)-G(u)=\sum_{n=0}^{\infty}\frac{a_n}{\iota(n+1)}\bigl((v-c)^{n+1}-(u-c)^{n+1}\bigr).$$

Thus the power series may be integrated term by term, and the antiderivative series has radius $R$.

## Facts & Assumptions

**Given:** The power-series sum $f$, its zero-constant-term formal antiderivative $G$, and a closed interval $[u,v]$ strictly inside the radius.

[L1] The antiderivative series has radius $R$ ([[lem-derived-and-integrated-power-series-have-the-same-radius]]).

[L2] Both series converge uniformly on $[u,v]$ ([[thm-power-series-uniform-on-compact-subintervals]]), and a uniform limit of integrable functions is integrable with the integral equal to the limit of the integrals ([[thm-uniform-limit-interchanges-riemann-integration]]).

[L3] Termwise differentiation applied to $G$ gives $G'=f$ on the open radius interval ([[thm-termwise-differentiation-of-a-real-power-series]]).

[L4] If $H(x)=\int_u^x f$, then $H'=f$ on $(u,v)$ because $f$ is continuous on $[u,v]$ ([[thm-ftc-first-part]]).

[L5] Differentiable functions are continuous, and two continuous functions on an interval with the same derivative differ by a constant ([[cor-differentiable-implies-continuous]], [[cor-zero-derivative-implies-constant]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $G$ and $f$ converge uniformly on $[u,v]$; in particular $f$ is integrable there, and [L3] gives $G'=f$. [L1, L2, L3]

2.1 Define $H(x):=\int_u^x f(t)\,dt$. The sum $f$ is continuous as a differentiable function by [L3] and [L5], so [L4] gives $H'=f$ on $(u,v)$, while the integral construction makes $H$ continuous on $[u,v]$. [step 1.1, L3, L4, L5]

3.1 The functions $H$ and $G$ are continuous and have the same derivative on the interval. By [L5], $H-G$ is constant; evaluating at $u$ gives $H(v)=G(v)-G(u)$. [step 2.1, L5]

4.1 Subtracting the two convergent series for $G(v)$ and $G(u)$ term by term is licensed by their convergence, and gives the displayed series. This is also the limit of the integrals of the polynomial partial sums by [L2]. [step 3.1, L2, algebra] ∎
````

## Wave 13 provenance row

```json
{
  "id": "cor-termwise-integration-of-a-real-power-series",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Power_series",
    "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
  ],
  "rationale": "The sources give termwise antiderivatives and integration of power series inside the radius. The item adds a closed-subinterval integral identity and zero-constant-term normalization, with a proof adapted through the local FTC and uniform integration theorem.",
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
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-power-series-uniform-on-compact-subintervals",
      "source_section": "Statement",
      "quote": "Let $\\sum a_n(x-c)^n$ have radius $R$, and let $[u,v]$ be a nonempty closed interval for which\n\n$$r:=\\max\\{|u-c|,|v-c|\\}<R.$$\n\nThen the function series converges absolutely at every point of $[u,v]$ and converges uniformly there.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-uniform-limit-interchanges-riemann-integration",
      "source_section": "Statement",
      "quote": "Let $a<b$ be reals. Suppose every $f_k:[a,b]\\to\\mathbb{R}$ is Riemann\nintegrable and $f_k\\to f$ uniformly on $[a,b]$. Then $f$ is Riemann\nintegrable and\n\n$$\\int_a^b f_k\\longrightarrow\\int_a^b f.$$",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-termwise-differentiation-of-a-real-power-series",
      "source_section": "Statement",
      "quote": "Let\n\n$$f(x)=\\sum_{n=0}^{\\infty}a_n(x-c)^n$$\n\nhave radius $R$. For every $x$ with $|x-c|<R$, the function $f$ is differentiable at $x$ ([[def-derivative]]) and\n\n$$f'(x)=\\sum_{n=0}^{\\infty}\\iota(n+1)a_{n+1}(x-c)^n.$$\n\nThe differentiated series has the same radius $R$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-ftc-first-part",
      "source_section": "Statement",
      "quote": "Let $a < b$ be reals, let $f : [a,b] \\to \\mathbb{R}$ be integrable\n([[def-darboux-integral]]), let $F$ be its integral function\n([[def-the-integral-function]]), and let $c \\in [a,b]$ be a point at which $f$ is\ncontinuous ([[def-continuity-real]]). Then $F$ is differentiable at $c$ as a\nfunction on $[a,b]$ ([[def-derivative]]) and\n\n$$F'(c) \\;=\\; f(c) .$$\n\nAt $c = a$ and $c = b$ this is the one-sided statement, which is what\n[[def-derivative]] means at those points: every point of a nondegenerate interval\nis a limit point of it, so $F'(c)$ is a meaningful symbol at every $c \\in [a,b]$,\nand the difference quotient is taken over $[a,b] \\setminus \\{c\\}$.\n\n**Consequently, if $f$ is continuous on the whole of $[a,b]$, then $F$ is a\nprimitive of $f$ there**: $F' = f$ at every point of $[a,b]$.\n\n**Continuity at $c$ is a hypothesis and it cannot be dropped.** For an integrable\n$f$ that is discontinuous at $c$, $F'(c)$ may fail to exist, and it may exist and\ndiffer from $f(c)$; both are exhibited on the companion page, by\nan integrable function with no primitive and by a false\nstatement about the integral function.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "cor-differentiable-implies-continuous",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a\nlimit point of $A$ ([[def-limit-point-r]]). If $f$ is differentiable at $c$\n([[def-derivative]]) then $f$ is continuous at $c$ ([[def-continuity-real]]).\n\nConsequently, if $f$ is differentiable on a set $S \\subseteq A$ then $f$ is\ncontinuous at every point of $S$.\n\n**No converse is asserted, and none holds.** Continuity at $c$ does not give\ndifferentiability at $c$, and the standard witness is worked out on the\ncompanion page.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "cor-zero-derivative-implies-constant",
      "source_section": "Statement",
      "quote": "Let $I \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) and let\n$f : I \\to \\mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and\ndifferentiable at every point of $I$ that is interior to $I$\n([[def-interior-closure-boundary-r]], [[def-derivative]]), with\n\n$$f'(x) = 0 \\qquad \\text{at every interior point } x \\text{ of } I .$$\n\nThen $f$ is constant on $I$: there is a real $k$ with $f(x) = k$ for every\n$x \\in I$.\n\nConsequently, if $f, g : I \\to \\mathbb{R}$ are both continuous on $I$ and both\ndifferentiable at every interior point of $I$, with $f'(x) = g'(x)$ at every\ninterior point $x$, then there is a real $k$ with\n\n$$f(x) \\;=\\; g(x) + k \\qquad \\text{for every } x \\in I .$$\n\n**Order-convexity of $I$ is essential and is not a convenience.** The\nconclusion is false on a domain that falls into separate pieces, since a\nfunction may be constant on each piece with different constants; nothing in the\nproof would survive, because the mean value theorem is applied to the segment\njoining two points of the domain and that segment must lie in the domain.\n\n**The hypothesis is imposed only at interior points.** At an endpoint of $I$\nnothing is asked at all: $f$ need not be differentiable there, and the proof\nnever evaluates a difference quotient at an endpoint, since it applies the mean\nvalue theorem on a segment $[u,v] \\subseteq I$ and uses the derivative only at\npoints of $(u,v)$, all of which are interior to $I$. What is *not* meant is that\nthe derivative at an endpoint is free to be nonzero: once $f$ is known to be\nconstant its difference quotient at an endpoint is constantly $0$, so wherever\n$f'$ exists at an endpoint it is $0$ too. That is a consequence of the theorem,\nnot a hypothesis of it.",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "By [L1] and [L2], $G$ and $f$ converge uniformly on $[u,v]$; in particular $f$ is integrable there, and [L3] gives $G'=f$.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Define $H(x):=\\int_u^x f(t)\\,dt$. The sum $f$ is continuous as a differentiable function by [L3] and [L5], so [L4] gives $H'=f$ on $(u,v)$, while the integral construction makes $H$ continuous on $[u,v]$.",
      "step": "2.1",
      "inputs": [
        "L3",
        "L5",
        "L4",
        "step 1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "The functions $H$ and $G$ are continuous and have the same derivative on the interval. By [L5], $H-G$ is constant; evaluating at $u$ gives $H(v)=G(v)-G(u)$.",
      "step": "3.1",
      "inputs": [
        "L5",
        "step 2.1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Subtracting the two convergent series for $G(v)$ and $G(u)$ term by term is licensed by their convergence, and gives the displayed series. This is also the limit of the integrals of the polynomial partial sums by [L2].",
      "step": "4.1",
      "inputs": [
        "L2",
        "step 3.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "cor-termwise-integration-of-a-real-power-series: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have radius $R$, and define $$G(x):=\\sum_{n=0}^{\\infty}\\frac{a_n}{\\iota(n+1)}(x-c)^{n+1}.$$ For every closed interval $[u,v]$ strictly inside $|x-c|<R$, the function $f$ is Riemann integ"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "cor-termwise-integration-of-a-real-power-series: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have radius $R$, and define $$G(x):=\\sum_{n=0}^{\\infty}\\frac{a_n}{\\iota(n+1)}(x-c)^{n+1}.$$ For every closed interval $[u,v]$ strictly inside $|x-c|<R$, the function $f$ is Riemann integ"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "cor-termwise-integration-of-a-real-power-series: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have radius $R$, and define $$G(x):=\\sum_{n=0}^{\\infty}\\frac{a_n}{\\iota(n+1)}(x-c)^{n+1}.$$ For every closed interval $[u,v]$ strictly inside $|x-c|<R$, the function $f$ is Riemann integ"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement: degeneracy is explicitly excluded or separated by the hypotheses: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have radius $R$, and define $$G(x):=\\sum_{n=0}^{\\infty}\\frac{a_n}{\\iota(n+1)}(x-c)^{n+1}.$$ For every closed interval $[u,v]$ strictly inside $|x-c|<R$, the function $f$ is Riemann integ"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement: the assertion expressly restricts to the open/interior regime, leaving endpoint behaviour outside its quantifiers: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have radius $R$, and define $$G(x):=\\sum_{n=0}^{\\infty}\\frac{a_n}{\\iota(n+1)}(x-c)^{n+1}.$$ For every closed interval $[u,v]$ strictly inside $|x-c|<R$, the function $f$ is Riemann integ"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "cor-termwise-integration-of-a-real-power-series: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have radius $R$, and define $$G(x):=\\sum_{n=0}^{\\infty}\\frac{a_n}{\\iota(n+1)}(x-c)^{n+1}.$$ For every closed interval $[u,v]$ strictly inside $|x-c|<R$, the function $f$ is Riemann integ"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "cor-termwise-integration-of-a-real-power-series: the Statement is not an equivalence, so there is no forward implication obligation: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have radius $R$, and define $$G(x):=\\sum_{n=0}^{\\infty}\\frac{a_n}{\\iota(n+1)}(x-c)^{n+1}.$$ For every closed interval $[u,v]$ strictly inside $|x-c|<R$, the function $f$ is Riemann integ"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "cor-termwise-integration-of-a-real-power-series: the Statement is not an equivalence, so there is no reverse implication obligation: Let $f(x)=\\sum_{n\\ge0}a_n(x-c)^n$ have radius $R$, and define $$G(x):=\\sum_{n=0}^{\\infty}\\frac{a_n}{\\iota(n+1)}(x-c)^{n+1}.$$ For every closed interval $[u,v]$ strictly inside $|x-c|<R$, the function $f$ is Riemann integ"
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cor-termwise-integration-of-a-real-power-series",
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
    "source": "cor-termwise-integration-of-a-real-power-series",
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
    "source": "cor-termwise-integration-of-a-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-uniform-limit-interchanges-riemann-integration",
    "declared_target": "thm-uniform-limit-interchanges-riemann-integration",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-convergence-of-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-termwise-integration-of-a-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-ftc-first-part",
    "declared_target": "thm-ftc-first-part",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-termwise-integration-of-a-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-termwise-differentiation-of-a-real-power-series",
    "declared_target": "thm-termwise-differentiation-of-a-real-power-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-termwise-integration-of-a-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "cor-zero-derivative-implies-constant",
    "declared_target": "cor-zero-derivative-implies-constant",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-termwise-integration-of-a-real-power-series",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "cor-differentiable-implies-continuous",
    "declared_target": "cor-differentiable-implies-continuous",
    "target_statement_provenance": "literature-derived",
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

## Full exact-current text of every cited or declared item (7)

### `cor-differentiable-implies-continuous`

````markdown
---
id: cor-differentiable-implies-continuous
kind: corollary
title: "A function differentiable at $c$ is continuous at $c$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, thm-caratheodory-characterisation, def-continuity-real, thm-algebra-of-continuous-functions, def-limit-point-r]
justified_by: []
forward_refs: [cex-absolute-value-is-not-differentiable-at-zero]
aliases: []
landmark: true
short: "differentiable implies continuous"
proof_strategy: direct
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
    - title: "Differentiable function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Differentiable_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.2)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
limit point of $A$ ([[def-limit-point-r]]). If $f$ is differentiable at $c$
([[def-derivative]]) then $f$ is continuous at $c$ ([[def-continuity-real]]).

Consequently, if $f$ is differentiable on a set $S \subseteq A$ then $f$ is
continuous at every point of $S$.

**No converse is asserted, and none holds.** Continuity at $c$ does not give
differentiability at $c$, and the standard witness is worked out on the
companion page.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a point $c \in A$ that is a limit point of $A$ at which $f$ is differentiable ([[def-derivative]], [[def-limit-point-r]]).

[L1] Carathéodory's characterisation ([[thm-caratheodory-characterisation]]): since $f$ is differentiable at the limit point $c$ of $A$, there is $\varphi : A \to \mathbb{R}$, continuous at $c$, with $f(x) - f(c) = \varphi(x)(x - c)$ for every $x \in A$, and $\varphi(c) = f'(c)$.

[L2] Algebra of continuous functions ([[thm-algebra-of-continuous-functions]]): sums, scalar multiples and products of functions continuous at a point of the common domain are continuous there (claim 1); and every constant function on $A$ and the identity $x \mapsto x$ on $A$ are continuous at every point of $A$ (claim 5).

[L3] Continuity of $f$ at $c$ is the $\varepsilon$-$\delta$ condition of [[def-continuity-real]], and continuity on a set is continuity at each of its points.

## Proof

**Proof technique:** direct.

1.1 Fix a function $\varphi : A \to \mathbb{R}$, continuous at $c$, with $f(x) - f(c) = \varphi(x)(x - c)$ for every $x \in A$. [L1, choose]

1.2 The identity $x \mapsto x$ on $A$ and every constant function on $A$ are continuous at $c$; hence so is $x \mapsto x - c$, which is the sum of the identity and the constant function with value $-c$. [L2]

2.1 The pointwise product $x \mapsto \varphi(x)(x - c)$ is continuous at $c$, being the product of two functions on $A$ continuous at $c$. [step 1.1, step 1.2, L2]

3.1 For every $x \in A$ one has $f(x) = f(c) + \varphi(x)(x - c)$, so $f$ is the sum of the constant function with value $f(c)$ and the product of step 2.1. [step 1.1, L1]

4.1 A sum of two functions continuous at $c$ is continuous at $c$, so $f$ is continuous at $c$. [step 2.1, step 3.1, L2, L3]

5.1 The point $c$ was an arbitrary point of $A$, a limit point of $A$, at which $f$ is differentiable; applying step 4.1 at every point of a set $S \subseteq A$ on which $f$ is differentiable gives continuity of $f$ at every point of $S$. [step 3.1, L3] ∎

## Remarks

- **Where the work actually is.** None of it is here. Carathéodory's characterisation already replaces the quotient by a product, and a product is visibly small when one factor is bounded near $c$ and the other tends to $0$; the algebra of continuous functions packages exactly that. A direct proof from the quotient would multiply and divide by $x - c$ and would have to say why that is legal, which is the same observation in a less convenient place.

- **The converse fails.** $x \mapsto |x|$ is continuous at $0$ and not differentiable there, which is [[cex-absolute-value-is-not-differentiable-at-zero]] on the companion page. So continuity is strictly weaker, and the gap is not exotic: it opens at a single corner.

- **What is *not* claimed.** Nothing here says that a function differentiable on a set has a continuous derivative, and nothing here says that $f'$ is defined anywhere except where it was assumed to be. Both are separate questions, and neither is settled on this page.
````

### `cor-zero-derivative-implies-constant`

````markdown
---
id: cor-zero-derivative-implies-constant
kind: corollary
title: "A function continuous on an interval $I$ whose derivative vanishes at every interior point of $I$ is constant on $I$; consequently two such functions with the same derivative differ by a constant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-mean-value-theorem, def-derivative, def-continuity-real, def-interval, thm-algebra-of-derivatives, thm-algebra-of-continuous-functions, def-interior-closure-boundary-r, def-neighbourhood-r, def-limit-point-r]
justified_by: []
aliases: [cor-antiderivatives-differ-by-a-constant]
landmark: true
short: "zero derivative gives a constant"
proof_strategy: direct
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
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, Mean Value Theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and
differentiable at every point of $I$ that is interior to $I$
([[def-interior-closure-boundary-r]], [[def-derivative]]), with

$$f'(x) = 0 \qquad \text{at every interior point } x \text{ of } I .$$

Then $f$ is constant on $I$: there is a real $k$ with $f(x) = k$ for every
$x \in I$.

Consequently, if $f, g : I \to \mathbb{R}$ are both continuous on $I$ and both
differentiable at every interior point of $I$, with $f'(x) = g'(x)$ at every
interior point $x$, then there is a real $k$ with

$$f(x) \;=\; g(x) + k \qquad \text{for every } x \in I .$$

**Order-convexity of $I$ is essential and is not a convenience.** The
conclusion is false on a domain that falls into separate pieces, since a
function may be constant on each piece with different constants; nothing in the
proof would survive, because the mean value theorem is applied to the segment
joining two points of the domain and that segment must lie in the domain.

**The hypothesis is imposed only at interior points.** At an endpoint of $I$
nothing is asked at all: $f$ need not be differentiable there, and the proof
never evaluates a difference quotient at an endpoint, since it applies the mean
value theorem on a segment $[u,v] \subseteq I$ and uses the derivative only at
points of $(u,v)$, all of which are interior to $I$. What is *not* meant is that
the derivative at an endpoint is free to be nonzero: once $f$ is known to be
constant its difference quotient at an endpoint is constantly $0$, so wherever
$f'$ exists at an endpoint it is $0$ too. That is a consequence of the theorem,
not a hypothesis of it.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$ and a function $f : I \to \mathbb{R}$, continuous on $I$ and differentiable with vanishing derivative at every interior point of $I$; for the second claim also a second such function $g$ with $f' = g'$ at every interior point.

[L1] Mean value theorem ([[cor-mean-value-theorem]]): for $u < v$ and $h : [u,v] \to \mathbb{R}$ continuous on $[u,v]$ and differentiable at every point of $(u,v)$, there is $c \in (u,v)$ with $h(v) - h(u) = h'(c)(v-u)$.

[L2] Order-convexity ([[def-interval]]): if $u, v \in I$ and $u \le z \le v$ then $z \in I$; so $u, v \in I$ with $u \le v$ gives $[u,v] \subseteq I$.

[L3] For $u < v$ in $I$ and $x \in (u,v)$, the point $x$ is interior to $I$: put $\varepsilon := \min\{x - u,\ v - x\}$, a positive real; every $y$ with $|y - x| < \varepsilon$ satisfies $u < y < v$, so $N_{\varepsilon}(x) \subseteq (u,v) \subseteq [u,v] \subseteq I$ ([[def-neighbourhood-r]], [[def-interior-closure-boundary-r]], [[def-interval]]).

[L4] Restriction of the domain ([[def-derivative]]): if $B \subseteq A$, if $p \in B$ is a limit point of $B$ and if $h : A \to \mathbb{R}$ is differentiable at $p$, then $h|_B$ is differentiable at $p$ with $(h|_B)'(p) = h'(p)$. Moreover every point of an order-convex subset of $\mathbb{R}$ with at least two elements is a limit point of it ([[def-derivative]], [[def-limit-point-r]]).

[L5] Continuity passes to a subset of the domain: if $B \subseteq A$ and $h : A \to \mathbb{R}$ is continuous at $p \in B$, then $h|_B$ is continuous at $p$ ([[def-continuity-real]]).

[L6] Algebra ([[thm-algebra-of-continuous-functions]], claim 1, and [[thm-algebra-of-derivatives]], claims 1 and 2): sums and scalar multiples of functions continuous at a point are continuous there, and sums and scalar multiples of functions differentiable at a limit point of the common domain are differentiable there, with the corresponding derivatives.

## Proof

**Proof technique:** direct.

1.1 If $I$ has at most one element then $f$ is constant on $I$ and there is nothing to prove, the second claim following likewise. So assume $I$ has at least two elements and let $u, v \in I$ with $u < v$ be arbitrary. [given, L2]

2.1 By [L2] the segment $[u,v]$ is contained in $I$, and $u < v$, so $[u,v]$ is a nondegenerate interval. The restriction $f|_{[u,v]}$ is continuous on $[u,v]$ by [L5]. [step 1.1, L2, L5]

2.2 Let $x \in (u,v)$. By [L3] the point $x$ is interior to $I$, so $f$ is differentiable at $x$ with $f'(x) = 0$ by hypothesis. By [L4] the point $x$ is a limit point of $[u,v]$, so $f|_{[u,v]}$ is differentiable at $x$ with $(f|_{[u,v]})'(x) = f'(x) = 0$. [step 1.1, L3, L4]

3.1 By steps 2.1 and 2.2 the function $f|_{[u,v]}$ satisfies the hypotheses of [L1] on $[u,v]$, so there is $c \in (u,v)$ with $f(v) - f(u) = (f|_{[u,v]})'(c)\,(v-u) = 0 \cdot (v-u) = 0$. Hence $f(u) = f(v)$. [step 2.1, step 2.2, L1]

4.1 Any two distinct points of $I$ can be named $u$ and $v$ with $u < v$, and step 3.1 then gives $f(u) = f(v)$; at a single point the equality is trivial. So $f$ takes one and the same value at every point of $I$, and $f$ is constant on $I$. [step 1.1, step 3.1]

5.1 **Second claim.** Put $h := f + (-1)g$, so $h(x) = f(x) - g(x)$ on $I$. By [L6] the function $h$ is continuous on $I$. If $I$ has at most one element the claim is trivial; otherwise every point of $I$ is a limit point of $I$ by [L4], so at every interior point $x$ of $I$ the sum rule of [L6] applies and gives that $h$ is differentiable at $x$ with $h'(x) = f'(x) - g'(x) = 0$. By step 4.1, applied to $h$ in place of $f$, the function $h$ is constant on $I$; writing $k$ for its value, $f(x) = g(x) + k$ for every $x \in I$. [step 4.1, L4, L6] ∎

## Remarks

- **What is really being used.** Only that any two points of $I$ are joined by a segment inside $I$, and that on such a segment the mean value theorem turns a vanishing derivative into a vanishing increment. Both facts are about $I$, not about $f$, which is why order-convexity is the hypothesis and not, say, openness or connectedness in some other sense.

- **The second claim is the uniqueness half of antidifferentiation.** It says that a function on an interval is determined by its derivative up to one additive constant. It says nothing about existence: that some given function *is* a derivative is a separate question, settled by different machinery, and this page does not address it.

- **A vanishing derivative at every interior point is far stronger than a vanishing derivative somewhere.** The theorem consumes the hypothesis at every point of a segment at once; a single stationary point carries no information about $f$ anywhere else, which is what [[thm-fermat-interior-extremum]] already made clear from the other side.
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

### `thm-ftc-first-part`

````markdown
---
id: thm-ftc-first-part
kind: theorem
title: "The first fundamental theorem: if $f$ is integrable on $[a,b]$ and continuous at $c$, then $F'(c) = f(c)$; in particular a continuous $f$ has $F$ as a primitive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-integral-function, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, cor-integrability-of-absolute-values-products-and-lattice-operations, lem-integral-elementary-bounds, lem-integrability-on-a-subinterval, thm-additivity-over-subintervals, def-oriented-integral, def-derivative, def-function-limit, def-continuity-real, def-interval, def-darboux-integral, lem-of-abs-value, def-abs-value, def-ordered-field, def-complete-ordered-field, thm-of-archimedean, cor-archimedean-reciprocal]
forward_refs: [cex-an-integrable-function-with-no-primitive, fs-the-integral-function-is-always-a-primitive]
justified_by: []
aliases: [thm-fundamental-theorem-of-calculus-first-part]
landmark: true
short: "first fundamental theorem"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]), let $F$ be its integral function
([[def-the-integral-function]]), and let $c \in [a,b]$ be a point at which $f$ is
continuous ([[def-continuity-real]]). Then $F$ is differentiable at $c$ as a
function on $[a,b]$ ([[def-derivative]]) and

$$F'(c) \;=\; f(c) .$$

At $c = a$ and $c = b$ this is the one-sided statement, which is what
[[def-derivative]] means at those points: every point of a nondegenerate interval
is a limit point of it, so $F'(c)$ is a meaningful symbol at every $c \in [a,b]$,
and the difference quotient is taken over $[a,b] \setminus \{c\}$.

**Consequently, if $f$ is continuous on the whole of $[a,b]$, then $F$ is a
primitive of $f$ there**: $F' = f$ at every point of $[a,b]$.

**Continuity at $c$ is a hypothesis and it cannot be dropped.** For an integrable
$f$ that is discontinuous at $c$, $F'(c)$ may fail to exist, and it may exist and
differ from $f(c)$; both are exhibited on the companion page, by
an integrable function with no primitive and by a false
statement about the integral function.

## Facts & Assumptions

**Given:** Reals $a < b$, an integrable $f : [a,b] \to \mathbb{R}$, its integral function $F(x) = \int_a^x f$, a point $c \in [a,b]$ at which $f$ is continuous, and a real $\varepsilon > 0$.

[L1] $F(x) - F(c) = \int_c^x f$ for all $x, c \in [a,b]$, in either order ([[def-the-integral-function]], [[thm-additivity-over-subintervals]]).

[L2] Continuity at $c$: for every real $\eta > 0$ there is a real $\delta > 0$ such that every $t \in [a,b]$ with $|t - c| < \delta$ satisfies $|f(t) - f(c)| < \eta$ ([[def-continuity-real]]).

[L3] Every point of a nondegenerate interval is a limit point of it, so $F'(c) = \lim_{x\to c} \bigl(F(x)-F(c)\bigr)/(x-c)$ is a meaningful symbol, the limit being taken over $[a,b]\setminus\{c\}$ ([[def-derivative]], [[def-function-limit]], [[def-interval]]).

[L4] For $p < q$ in $[a,b]$: $f$ and $|f|$ and every constant are integrable on $[p,q]$; $\int_p^q \lambda = \lambda(q-p)$; sums and scalar multiples of integrable functions are integrable with the corresponding identity; and $\bigl|\int_p^q u\bigr| \le \int_p^q |u|$ ([[lem-integrability-on-a-subinterval]], [[lem-integral-elementary-bounds]], [[thm-linearity-of-the-integral]], [[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L5] If $u \le w$ pointwise on $[p,q]$ and both are integrable then $\int_p^q u \le \int_p^q w$ ([[thm-monotonicity-of-the-integral]]).

[L6] With oriented limits, $\int_q^p u = -\int_p^q u$ and $\int_p^p u = 0$ ([[def-oriented-integral]]).

[L7] Absolute value and ordered-field arithmetic: $|{-t}| = |t|$, $|t\,s| = |t||s|$, $|t| \le c$ follows from $-c \le t \le c$, a positive real has a positive inverse, and the order is total and transitive ([[lem-of-abs-value]], [[def-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]). The nonstrict forms of the order facts follow from the strict ones by adjoining equality.

[L8] For every real $\eta > 0$ there is a real $\eta' > 0$ with $\eta' < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] with $\eta := \varepsilon \cdot 2^{-1}$, fix a real $\delta > 0$ such that $|f(t)-f(c)| < \varepsilon\cdot 2^{-1}$ for every $t \in [a,b]$ with $|t-c| < \delta$. [given, L2, L7, L8, choose]

1.2 For $x \in [a,b]$ with $x \ne c$, [L1] and [L4] give $F(x) - F(c) - f(c)(x-c) = \int_c^x f - \int_c^x f(c) = \int_c^x \bigl(f(t) - f(c)\bigr)\,\mathrm{d}t$, the constant $f(c)$ having integral $f(c)(x-c)$ over the oriented interval from $c$ to $x$ by [L4] and [L6]. [L1, L4, L6]

2.1 **The estimate for $c < x < c+\delta$.** Every $t \in [c,x]$ has $|t-c| < \delta$, so $-\varepsilon\cdot2^{-1} \le f(t)-f(c) \le \varepsilon\cdot 2^{-1}$ there by step 1.1, whence $\bigl|\int_c^x (f - f(c))\bigr| \le \varepsilon\cdot2^{-1}\,(x-c)$ by [L4] and [L5]. [step 1.1, step 1.2, L4, L5, L7]

2.2 **The estimate for $c-\delta < x < c$.** By [L6], $\int_c^x (f-f(c)) = -\int_x^c (f-f(c))$, and every $t \in [x,c]$ has $|t-c| < \delta$, so the same argument gives $\bigl|\int_c^x (f-f(c))\bigr| \le \varepsilon\cdot 2^{-1}\,(c-x)$. [step 1.1, step 1.2, L4, L5, L6, L7]

3.1 In both cases $\bigl|\int_c^x(f-f(c))\bigr| \le \varepsilon\cdot 2^{-1}\,|x-c|$, so dividing by the nonzero $|x-c|$ and using step 1.2 gives $\Bigl|\dfrac{F(x)-F(c)}{x-c} - f(c)\Bigr| \le \varepsilon\cdot 2^{-1} < \varepsilon$ for every $x \in [a,b]$ with $0 < |x-c| < \delta$. [step 1.2, step 2.1, step 2.2, L7]

4.1 Since $\varepsilon > 0$ was arbitrary, the limit of the difference quotient of $F$ at $c$ exists and equals $f(c)$ by [L3]; that is, $F'(c) = f(c)$. [step 1.1, step 3.1, L3]

5.1 If $f$ is continuous at every point of $[a,b]$ then step 4.1 applies at every $c \in [a,b]$, so $F' = f$ on $[a,b]$ and $F$ is a primitive of $f$. [step 4.1, L3] ∎

## Remarks

- **The estimate is written out for $x < c$ as well, and that is not redundancy.** For $x < c$ the factor $1/(x-c)$ is negative and the naive chain $m(x-c) \le \int_c^x \le M(x-c)$ reverses; what makes the argument uniform is taking absolute values *before* dividing, which is what steps 2.1, 2.2 and 3.1 do. This is the single most common error in this proof.

- **The route is the definition of the derivative, not the mean value theorem for integrals.** Deducing $F'(c) = f(c)$ from [[thm-first-mean-value-theorem-for-integrals]] would need $f$ continuous on a whole subinterval around $c$, which is a strictly stronger hypothesis than continuity at the single point $c$. The theorem as stated is the sharp one.

- **What is proved at a point is proved at a point.** Nothing here says $F$ is differentiable anywhere else, and nothing says $F' = f$ off the continuity set of $f$. Where $f$ is merely integrable, all that survives is [[thm-the-integral-function-is-lipschitz]].

- **Forward references, orientation only.** The two failures at a discontinuity are worked out on the companion page as [[cex-an-integrable-function-with-no-primitive]] and [[fs-the-integral-function-is-always-a-primitive]]; nothing above depends on either.
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

### `thm-termwise-differentiation-of-a-real-power-series`

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

### `thm-uniform-limit-interchanges-riemann-integration`

````markdown
---
id: thm-uniform-limit-interchanges-riemann-integration
kind: theorem
title: "A uniform limit of Riemann-integrable functions is Riemann integrable, and its integral is the limit of their integrals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, thm-riemann-criterion, lem-uniform-integral-error-bound, def-darboux-integral, def-darboux-sums, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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

Let $a<b$ be reals. Suppose every $f_k:[a,b]\to\mathbb{R}$ is Riemann
integrable and $f_k\to f$ uniformly on $[a,b]$. Then $f$ is Riemann
integrable and

$$\int_a^b f_k\longrightarrow\int_a^b f.$$

## Facts & Assumptions

**Given:** Reals $a<b$, integrable functions $f_k:[a,b]\to\mathbb{R}$, and uniform convergence $f_k\to f$.

[A1] Uniform convergence means that for every real $\eta>0$ one index makes $|f_k(x)-f(x)|<\eta$ for every later $k$ and every $x\in[a,b]$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[L1] An integrable function on $[a,b]$ is bounded; conversely, a bounded function $h$ there is Riemann integrable exactly when, for every real $\varepsilon>0$, some partition $P$ satisfies $U(h,P)-L(h,P)<\varepsilon$ ([[def-darboux-integral]], [[thm-riemann-criterion]]).

[L2] Darboux upper and lower sums are finite sums of the subinterval suprema and infima times the subinterval lengths; finite sums preserve inequalities and split and telescope in the usual way ([[def-darboux-sums]], [[lem-finite-sum-laws]]).

[L3] If two integrable functions differ by at most $\eta$ uniformly, then their integrals differ by at most $\eta(b-a)$ ([[lem-uniform-integral-error-bound]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon>0$ be real, put $\eta:=\varepsilon/(4(b-a))>0$, and choose an index $j$ such that $|f_j(x)-f(x)|<\eta$ for every $x\in[a,b]$. [A1, choose]

1.2 By integrability of $f_j$ and [L1], choose a partition $P$ with $U(f_j,P)-L(f_j,P)<\varepsilon/2$. [L1, choose]

2.1 The integrable function $f_j$ is bounded, say $|f_j(x)|\le M$ on $[a,b]$; then $|f(x)|\le M+\eta$, so $f$ is bounded. [step 1.1, L1, algebra]

3.1 On each subinterval of $P$, step 1.1 gives $\sup f\le\sup f_j+\eta$ and $\inf f\ge\inf f_j-\eta$; these suprema and infima exist by step 2.1. Multiplying by the nonnegative subinterval lengths and summing gives $U(f,P)\le U(f_j,P)+\eta(b-a)$ and $L(f,P)\ge L(f_j,P)-\eta(b-a)$. [step 1.1, step 1.2, step 2.1, L2, algebra]

4.1 Therefore $U(f,P)-L(f,P)\le U(f_j,P)-L(f_j,P)+2\eta(b-a)<\varepsilon$, so [L1] makes $f$ integrable. [step 3.1, L1, algebra]

5.1 Now let $\varepsilon>0$ be real and choose $N$ such that $|f_k(x)-f(x)|<\varepsilon/(b-a+1)$ for every $k\ge N$ and every $x\in[a,b]$. [step 4.1, A1, choose]

6.1 For $k\ge N$, both functions are integrable, so [L3] gives $\left|\int_a^b f_k-\int_a^b f\right|\le \varepsilon(b-a)/(b-a+1)<\varepsilon$. [step 4.1, step 5.1, L3, algebra]

7.1 Step 6.1 proves $\int_a^b f_k\to\int_a^b f$, while step 4.1 proves integrability of $f$. [step 4.1, step 6.1] ∎
````

