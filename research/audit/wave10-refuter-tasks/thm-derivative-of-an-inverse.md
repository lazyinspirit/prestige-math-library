## Wave 10 target — `thm-derivative-of-an-inverse`

Selection: mandatory Wave 10 high/critical proof-bearing route (risk report classifies all 49 contracts critical).

Normalized current SHA-256: `f7f52ccd13157fa7f1f171c4b5d29c61ce063c3849810379c58849eced7d25e4`

## Complete current target

````markdown
---
id: thm-derivative-of-an-inverse
kind: theorem
title: "Derivative of an inverse: if $f$ is continuous and injective on a nondegenerate interval $I$ and differentiable at $c \\in I$ with $f'(c) \\ne 0$, then the inverse $g$ is differentiable at $f(c)$ with $g'(f(c)) = 1/f'(c)$; and if $f'(c) = 0$ then $g$ is not differentiable at $f(c)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-derivative, thm-caratheodory-characterisation, thm-chain-rule, thm-continuous-inverse, def-continuity-real, def-injection-surjection-bijection, def-interval, thm-algebra-of-continuous-functions, thm-composition-of-continuous-functions, def-function-limit, def-limit-point-r, cor-of-one-positive]
justified_by: []
aliases: [thm-inverse-function-rule]
landmark: true
short: "derivative of an inverse"
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
    - title: "Inverse function rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inverse_function_rule"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex with at least two elements
([[def-interval]]), let $f : I \to \mathbb{R}$ be continuous on $I$
([[def-continuity-real]]) and injective
([[def-injection-surjection-bijection]]), and let $g : f[I] \to I$ be the
inverse of $f : I \to f[I]$ supplied by [[thm-continuous-inverse]]. Let
$c \in I$ and put $b := f(c)$.

Then $c$ is a limit point of $I$ and $b$ is a limit point of $f[I]$, so that
$f'(c)$ and $g'(b)$ are meaningful symbols ([[def-derivative]]), and, assuming
$f$ is differentiable at $c$:

1. if $f'(c) \ne 0$, then $g$ is differentiable at $b$ and
   $$g'(b) \;=\; \frac{1}{f'(c)} ;$$
2. if $f'(c) = 0$, then $g$ is **not** differentiable at $b$.

**The two claims together say that the inverse inherits differentiability
exactly where the derivative does not vanish.** Nothing is asserted at a point
of $f[I]$ that is not of the form $f(c)$ with $f$ differentiable at $c$, and
nothing is asserted about $g$ being differentiable *on* a set.

**No compactness and no boundedness is assumed.** $I$ may be open, half-open or
unbounded; all that is used of it is order-convexity and the presence of two
distinct points, the latter being exactly what makes every point of $I$ a limit
point of $I$ ([[def-derivative]]).

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$ with at least two elements, a continuous injective $f : I \to \mathbb{R}$, a point $c \in I$, and $b := f(c)$; from step 1.3 onwards also the hypothesis that $f$ is differentiable at $c$ ([[def-interval]], [[def-continuity-real]], [[def-injection-surjection-bijection]], [[def-derivative]]).

[L1] Continuous inverse theorem ([[thm-continuous-inverse]], claims 2, 3 and 5): $f[I]$ is order-convex; $f : I \to f[I]$ is a bijection, so there is exactly one $g : f[I] \to I$ with $g(f(x)) = x$ for every $x \in I$ and $f(g(u)) = u$ for every $u \in f[I]$; and $g$ is continuous on $f[I]$.

[L2] Carathéodory's characterisation ([[thm-caratheodory-characterisation]]), used in both directions: for $D \subseteq \mathbb{R}$, a point $p \in D$ that is a limit point of $D$ and $h : D \to \mathbb{R}$, the function $h$ is differentiable at $p$ if and only if there is $\eta : D \to \mathbb{R}$, continuous at $p$, with $h(y) - h(p) = \eta(y)(y-p)$ for every $y \in D$, and then $\eta(p) = h'(p)$.

[L3] Every point of an order-convex subset of $\mathbb{R}$ with at least two elements is a limit point of that set ([[def-derivative]], [[def-interval]], [[def-limit-point-r]]).

[L4] Injectivity ([[def-injection-surjection-bijection]]): $f(x) = f(x')$ implies $x = x'$, so $x \ne c$ gives $f(x) \ne f(c)$; and the image $f[I] = \{ f(x) : x \in I \}$.

[L5] Algebra and composition of continuous functions: a composite of functions continuous at the relevant points is continuous ([[thm-composition-of-continuous-functions]]); every constant function is continuous ([[thm-algebra-of-continuous-functions]], claim 5); and if $u, v : D \to \mathbb{R}$ are continuous at $p \in D$ with $v(p) \ne 0$, then $(u/v)$ restricted to $\{ y \in D : v(y) \ne 0 \}$ is continuous at $p$ ([[thm-algebra-of-continuous-functions]], claim 4).

[L6] Chain rule ([[thm-chain-rule]]): with $g$ differentiable at the limit point $b = f(c)$ of $f[I]$ and $f$ differentiable at the limit point $c$ of $I$, the composite $g \circ f$ is differentiable at $c$ with $(g \circ f)'(c) = g'(b)\,f'(c)$.

[L7] The identity on a set $D$ is differentiable at every limit point $p$ of $D$ with derivative $1$: its difference quotient is $(y - p)/(y - p) = 1$ for every $y \in D \setminus \{p\}$, a constant function, whose limit at $p$ is $1$ ([[def-derivative]], [[def-function-limit]]). The derivative at a point is a single real ([[def-derivative]]), and $0 \ne 1$ in $\mathbb{R}$ ([[cor-of-one-positive]]).

## Proof

**Proof technique:** direct.

1.1 $I$ has at least two elements, so by [L4] its image $f[I]$ has at least two elements; and $f[I]$ is order-convex by [L1]. So [L3] applies to both sets: every point of $I$ is a limit point of $I$, and every point of $f[I]$ is a limit point of $f[I]$. In particular $c$ is a limit point of $I$ and $b = f(c) \in f[I]$ is a limit point of $f[I]$. [L1, L3, L4]

1.2 Fix the inverse $g : f[I] \to I$ of $f : I \to f[I]$, continuous on $f[I]$; it satisfies $g(f(x)) = x$ for every $x \in I$, so in particular $g(b) = c$. [L1, choose]

1.3 Assume $f$ is differentiable at $c$. By [L2], applied to $f$ on $I$ at the limit point $c$, fix $\varphi : I \to \mathbb{R}$, continuous at $c$, with $f(x) - f(c) = \varphi(x)(x - c)$ for every $x \in I$ and $\varphi(c) = f'(c)$. [L2, choose]

2.1 $\varphi(x) \ne 0$ for every $x \in I$ with $x \ne c$: injectivity gives $f(x) \ne f(c)$, so $\varphi(x)(x-c) \ne 0$ and hence $\varphi(x) \ne 0$. If moreover $f'(c) \ne 0$ then $\varphi(c) = f'(c) \ne 0$ as well, so $\varphi$ vanishes at no point of $I$. [step 1.3, L4]

2.2 **The increment of $g$, rewritten.** Let $u \in f[I]$ and put $x := g(u) \in I$, so $f(x) = u$ by [L1]. Then $u - b = f(x) - f(c) = \varphi(x)(x - c) = \varphi(g(u))\,\bigl(g(u) - g(b)\bigr)$, using $g(b) = c$ from step 1.2. [step 1.2, step 1.3, L1]

2.3 **Claim 2.** Assume $f'(c) = 0$, and suppose $g$ were differentiable at $b$. Since $f[I] \subseteq f[I]$, since $f$ is differentiable at the limit point $c$ of $I$ and since $b = f(c)$ is a limit point of $f[I]$ by step 1.1, the chain rule [L6] gives that $g \circ f : I \to \mathbb{R}$ is differentiable at $c$ with $(g \circ f)'(c) = g'(b)\,f'(c) = g'(b) \cdot 0 = 0$. But $g \circ f$ is the identity on $I$ by step 1.2, and by [L7] the identity on $I$ is differentiable at the limit point $c$ with derivative $1$; the derivative at $c$ being a single real, this forces $0 = 1$, which [L7] excludes. So $g$ is not differentiable at $b$. [step 1.1, step 1.2, L6, L7]

3.1 **The reciprocal factor.** Assume $f'(c) \ne 0$. The map $g$ is continuous at $b$ by step 1.2 and sends $f[I]$ into $I$, and $\varphi$ is continuous at $c = g(b)$ by step 1.3, so $\varphi \circ g : f[I] \to \mathbb{R}$ is continuous at $b$ by [L5]; by step 2.1 it vanishes at no point of $f[I]$, since $g$ takes values in $I$, and $(\varphi \circ g)(b) = \varphi(c) = f'(c) \ne 0$. Hence, by [L5] applied with the constant numerator $1$ and denominator $\varphi \circ g$ on the domain $f[I]$, where the set on which the denominator does not vanish is the whole of $f[I]$, the function $\Phi := 1/(\varphi \circ g) : f[I] \to \mathbb{R}$ is continuous at $b$ and $\Phi(b) = 1/f'(c)$. [step 1.2, step 1.3, step 2.1, L5]

4.1 **The factorisation for $g$.** Assume $f'(c) \ne 0$ and let $u \in f[I]$. Dividing the identity of step 2.2 by the nonzero number $(\varphi \circ g)(u)$ gives $g(u) - g(b) = \Phi(u)\,(u - b)$, and this holds for every $u \in f[I]$. [step 2.2, step 3.1]

5.1 **Claim 1.** Assume $f'(c) \ne 0$. By step 1.1 the point $b$ is a limit point of $f[I]$; by step 4.1 the function $\Phi : f[I] \to \mathbb{R}$ factors the increment of $g$ at $b$; and by step 3.1 it is continuous at $b$. So [L2], applied to $g$ on $f[I]$ at $b$, gives that $g$ is differentiable at $b$ with $g'(b) = \Phi(b) = 1/f'(c)$. [step 1.1, step 3.1, step 4.1, L2]

6.1 Claim 1 is step 5.1 and claim 2 is step 2.3, and the two limit-point assertions are step 1.1. [step 2.3, step 5.1] ∎

## Remarks

- **Why claim 2 is not a defect of the method.** It is a theorem: at a point where $f' = 0$ no inverse can be differentiable, because the chain rule would then make the derivative of the identity equal to $0$. The geometry is the familiar one, a horizontal tangent reflecting into a vertical one, and the argument above is that picture with no picture in it.

- **What is used of [[thm-continuous-inverse]], and what is not.** Only that $f[I]$ is order-convex, that the two-sided inverse exists and is unique, and that it is continuous. The strict monotonicity that theorem also proves is not needed here, though it is what makes the situation intelligible.

- **The formula is often written $g'(b) = 1/f'(g(b))$**, which is the same statement since $g(b) = c$. Written that way it is a formula for $g'$ at every point of $f[I]$ at which the hypothesis holds, and that is how the companion page uses it to differentiate $x \mapsto x^{1/n}$.
````

## Current Wave 10 provenance determination

```json
{
  "id": "thm-derivative-of-an-inverse",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/der_chapter.html",
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
  ],
  "rationale": "The sources give the inverse-function derivative formula for a continuous strictly monotone function with nonzero derivative. The item packages that theorem with the converse zero-derivative obstruction and explicit interval-image limit-point conditions.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 10 proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-continuous-inverse",
      "source_section": "Statement",
      "quote": "Let $I \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) and let\n$f : I \\to \\mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and\ninjective ([[def-injection-surjection-bijection]]). Then:\n\n1. $f$ is strictly monotone ([[def-monotone-function]]);\n2. $f[I]$ is order-convex;\n3. the map $f : I \\to f[I]$ is a bijection, so there is exactly one\n   $g : f[I] \\to I$ with $g(f(x)) = x$ for every $x \\in I$ and $f(g(u)) = u$ for\n   every $u \\in f[I]$;\n4. $g$ is strictly monotone in the same sense as $f$: increasing if $f$ is\n   increasing, decreasing if $f$ is decreasing;\n5. $g$ is continuous on $f[I]$.\n\n**\"Interval\" means \"order-convex\" here**, as throughout this library\n([[thm-connected-subsets-of-r-are-intervals]] is what licenses the word and\n[[def-interval]] records that the classification of order-convex sets into the\nnine written forms is not proved here). No compactness and no boundedness is\nassumed: $I$ may be open, half-open, unbounded, or a single point.",
      "uses": [
        "1.1",
        "1.2",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-caratheodory-characterisation",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a\nlimit point of $A$ ([[def-limit-point-r]]). The following are equivalent.\n\n1. $f$ is differentiable at $c$ ([[def-derivative]]).\n2. There is a function $\\varphi : A \\to \\mathbb{R}$, continuous at $c$\n   ([[def-continuity-real]]), with\n   $$f(x) - f(c) \\;=\\; \\varphi(x)\\,(x - c) \\qquad \\text{for every } x \\in A .$$\n\nWhen they hold, the function $\\varphi$ of claim 2 is **unique** and satisfies\n$\\varphi(c) = f'(c)$.\n\n**What the reformulation buys.** Claim 2 contains no quotient and no limit: it\nis an algebraic identity plus a continuity hypothesis at one point. Every\ndifferentiation rule on this page is proved by exhibiting the factor $\\varphi$\nfor the new function and reading its continuity off the algebra and composition\ntheorems for continuous functions. In particular the chain rule becomes a\none-line substitution, with none of the case analysis that the\ndifference-quotient proof needs where the inner increment vanishes.\n\n**The hypothesis that $c$ is a limit point of $A$ is used in both directions.**\nIt is what makes $f'(c)$ a defined symbol at all ([[def-derivative]]), and it is\nwhat makes continuity of $\\varphi$ at $c$ equivalent to a statement about the\nlimit of $\\varphi$ there ([[def-continuity-real]], clause 1). At an isolated\npoint of $A$ claim 2 holds for *every* $f$, with $\\varphi$ arbitrary off $c$,\nbecause every function is continuous at an isolated point; claim 1 is not even a\nstatement there.",
      "uses": [
        "1.3",
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-derivative",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), neighbourhoods are those of\n[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a\n**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function\n\n$$q_{f,c} : A \\setminus \\{c\\} \\to \\mathbb{R}, \\qquad q_{f,c}(x) := \\frac{f(x) - f(c)}{x - c} .$$\n\nThe division is legitimate at every point of the domain, since $x \\ne c$ gives\n$x - c \\ne 0$.\n\n**The point $c$ is a limit point of $A \\setminus \\{c\\}$, not merely of $A$.**\nFor every real $\\varepsilon > 0$ the punctured neighbourhood\n$N^{*}_{\\varepsilon}(c)$ omits $c$, so\n\n$$N^{*}_{\\varepsilon}(c) \\cap A \\;=\\; N^{*}_{\\varepsilon}(c) \\cap (A \\setminus \\{c\\}) ,$$\n\nand the left-hand side is nonempty because $c$ is a limit point of $A$. So\n$q_{f,c}$ is a function on a set having $c$ as a limit point, and\n$\\lim_{x \\to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.\n\n$f$ is **differentiable at $c$** when that limit exists, and then the\n**derivative of $f$ at $c$** is\n\n$$f'(c) \\;:=\\; \\lim_{x \\to c} q_{f,c}(x) \\;=\\; \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c} .$$\n\n**Two obligations are carried by that notation, and both are discharged here.**\n\n1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a\n   single real number. That is legitimate: $c$ is a limit point of the domain\n   $A \\setminus \\{c\\}$ of $q_{f,c}$, so at most one real can satisfy the\n   $\\varepsilon$-$\\delta$ condition, by [[lem-function-limit-unique]] applied to\n   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the\n   symbol denotes.\n2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not\n   decoration. At an **isolated** point of $A$ the punctured condition\n   $0 < |x - c| < \\delta$ is met by no point of the domain at all, so the\n   $\\varepsilon$-$\\delta$ formula is satisfied vacuously by *every* real at\n   once; this is why [[def-function-limit]] leaves the limit undefined there,\n   and it is why this library defines $f'(c)$ only at a limit point of $A$. At\n   an isolated point of its domain a function is neither differentiable nor\n   non-differentiable here: the question is not posed.\n\n**The limit sees only $A \\setminus \\{c\\}$, so how the difference quotient is\nextended to $c$ is irrelevant.** Let $Q : A \\to \\mathbb{R}$ agree with\n$q_{f,c}$ at every point of $A \\setminus \\{c\\}$, and let $L \\in \\mathbb{R}$.\nThen $\\lim_{x \\to c} Q(x) = L$ if and only if $\\lim_{x \\to c} q_{f,c}(x) = L$.\nBoth conditions read: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ such that every point $x$ of the relevant domain with\n$0 < |x - c| < \\delta$ satisfies $|{\\cdot} - L| < \\varepsilon$\n([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both\nquantifiers, so in both cases the points quantified over are exactly the\n$x \\in A \\setminus \\{c\\}$ with $0 < |x - c| < \\delta$, at which $Q$ and\n$q_{f,c}$ take the same value. The two conditions are the same condition.\n\n**Differentiability on a set.** For $S \\subseteq A$, $f$ is **differentiable on\n$S$** when it is differentiable at every $c \\in S$; implicit in that phrase is\nthat every point of $S$ is a limit point of $A$. $f$ is **differentiable** when\nit is differentiable on the whole of $A$.\n\n**Restriction of the domain.** Let $B \\subseteq A$, let $c \\in B$ and suppose\n$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the\nrestriction $f|_B : B \\to \\mathbb{R}$, and\n\n$$(f|_B)'(c) \\;=\\; f'(c) .$$\n\nIndeed $B \\setminus \\{c\\} \\subseteq A \\setminus \\{c\\}$; the displayed identity\nof punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit\npoint of $B \\setminus \\{c\\}$; the difference quotient $q_{f|_B, c}$ is the\nrestriction of $q_{f,c}$ to $B \\setminus \\{c\\}$, since $f|_B(c) = f(c)$; and\nclaim 2 of [[lem-limit-is-local]] carries the limit to that restriction.\n\n**Every point of a nondegenerate interval is a limit point of it.** Let\n$J \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) with at least two\nelements and let $p \\in J$. Choose $q \\in J$ with $q \\ne p$, and let a real\n$\\varepsilon > 0$ be given. If $p < q$, put $y := p + \\tfrac{1}{2}\\min\\{\\varepsilon,\\ q - p\\}$;\nthen $p < y$, and $y - p \\le \\tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and\norder-convexity gives $y \\in J$, while $0 < |y - p| < \\varepsilon$. If $q < p$,\nthe point $y := p - \\tfrac{1}{2}\\min\\{\\varepsilon,\\ p - q\\}$ serves in the same\nway. So $N^{*}_{\\varepsilon}(p) \\cap J \\ne \\varnothing$ for every real\n$\\varepsilon > 0$, that is, $p$ is a limit point of $J$\n([[def-limit-point-r]]).\n\nConsequently, for $f$ defined on a nondegenerate interval $I$, the symbol\n$f'(c)$ is meaningful at **every** $c \\in I$, endpoints included. At an endpoint\nthe difference quotient is taken over the points of $I$ lying on the one side\nthat is available, so what other texts call a one-sided derivative is, here,\nsimply the derivative of $f$ on $I$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and $x \\in \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]] and closure as in\n[[def-interior-closure-boundary-r]].\n\n- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne\n  \\varnothing$ for every real $\\varepsilon > 0$.\n- $x$ is a **limit point** (or *accumulation point*) of $A$ when\n  $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real\n  $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.\n- $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real\n  $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$.\n- The **derived set** of $A$ is\n  $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$\n- $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.\n\n**A limit point is an adherent point**, since $N^{*}_\\varepsilon(x) \\subseteq\nN_\\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since\n$x \\in N_\\varepsilon(x) \\cap A$ ([[def-neighbourhood-r]]). So the adherent\npoints of $A$ are exactly the points of $A \\cup A'$, a statement proved as part\nof [[thm-closure-characterisations-r]].\n\n**Limit point and isolated point are exact opposites inside $A$.** For\n$x \\in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point\nof $A$. Indeed $N_\\varepsilon(x) \\cap A = \\{x\\}$ says precisely that\n$N^{*}_\\varepsilon(x) \\cap A = \\varnothing$, because $x$ itself always lies in\n$N_\\varepsilon(x) \\cap A$ when $x \\in A$; so the existence of an $\\varepsilon$\nwitnessing isolation is the negation of the condition defining a limit point.\nA point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and\nnever both.\n\n**A limit point need not belong to the set, and a point of the set need not be a\nlimit point.** Both possibilities occur, and the two examples that matter later\nare $0$, which is a limit point of $\\{\\, 1/k : k \\ge 1 \\,\\}$ without belonging\nto it, and $0$ again, which belongs to $\\{0\\} \\cup [1,2]$ as an isolated point.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-injection-surjection-bijection",
      "source_section": "Definition",
      "quote": "Let $A$ and $B$ be sets and let $f : A \\to B$ be a function ([[def-function]]).\n\n- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all\n  $x, y \\in A$.\n- $f$ is **surjective** (onto) if for every $b \\in B$ there is some $x \\in A$\n  with $f(x) = b$; equivalently, the image $f[A] := \\{ f(x) : x \\in A \\}$ equals\n  $B$.\n- $f$ is **bijective** if it is both injective and surjective.\n\nFor $S \\subseteq A$ we write $f[S] = \\{ f(x) : x \\in S \\}$ for the image of $S$,\nand for $T \\subseteq B$ we write $f^{-1}[T] = \\{ x \\in A : f(x) \\in T \\}$ for the\npreimage of $T$; these are the image and preimage of a set under $f$ read as a\nrelation ([[def-image-and-preimage-under-a-relation]]).",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-composition-of-continuous-functions",
      "source_section": "Statement",
      "quote": "Let $A, B \\subseteq \\mathbb{R}$, let $g : A \\to \\mathbb{R}$ with\n$g(A) \\subseteq B$, and let $f : B \\to \\mathbb{R}$, so that the composite\n$f \\circ g : A \\to \\mathbb{R}$ is defined. Let $c \\in A$. If $g$ is continuous\nat $c$ and $f$ is continuous at $g(c) \\in B$, then $f \\circ g$ is continuous at\n$c$ ([[def-continuity-real]]).\n\nConsequently, if $g$ is continuous on $A$ and $f$ is continuous on $B$, then\n$f \\circ g$ is continuous on $A$.\n\n**No side hypothesis is needed, and that is the whole point.** The composition\ntheorem for limits, [[thm-composition-of-function-limits]], must assume one of\ntwo extra conditions: either $L \\in B$ with $f(L) = M$, or $g \\ne L$ on a\npunctured neighbourhood of $c$; with both dropped the statement is false, which\nis [[fs-naive-composition-of-limits]]. The first of those conditions is exactly\n*continuity of $f$ at $L$* written out, so under the hypotheses above it holds\nautomatically and nothing has to be assumed. The mechanism is visible in the\nproof: [[def-continuity-real]] quantifies over $|y - b| < \\rho$ rather than over\n$0 < |y - b| < \\rho$, so the value $y = b$ that the limit version cannot control\nis precisely the one the continuity hypothesis does control.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-algebra-of-continuous-functions",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f, g : A \\to \\mathbb{R}$, let\n$\\alpha \\in \\mathbb{R}$ and let $c \\in A$. Suppose $f$ and $g$ are continuous at\n$c$ ([[def-continuity-real]]). Then:\n\n1. $f + g$, $\\alpha f$ and $fg$ are continuous at $c$;\n2. $|f|$, the function $x \\mapsto |f(x)|$, is continuous at $c$;\n3. $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, defined pointwise by\n   $x \\mapsto \\max\\{f(x), g(x)\\}$ and $x \\mapsto \\min\\{f(x), g(x)\\}$\n   ([[def-max-min]]), are continuous at $c$;\n4. if $g(c) \\ne 0$ then, writing $A_0 := \\{\\, x \\in A : g(x) \\ne 0 \\,\\}$, the\n   point $c$ lies in $A_0$ and the quotient\n   $(f/g)|_{A_0} : A_0 \\to \\mathbb{R}$, $x \\mapsto f(x)/g(x)$, is continuous at\n   $c$ as a function on $A_0$.\n\nMoreover, with no hypothesis at all:\n\n5. every constant function $A \\to \\mathbb{R}$ and the identity\n   $\\mathrm{id} : A \\to \\mathbb{R}$, $x \\mapsto x$, are continuous on $A$; hence\n   so is $x \\mapsto x^{n}$ for every $n \\in \\mathbb{N}$\n   ([[def-integer-power]]), and hence so is every **polynomial function**\n   $x \\mapsto a_0 + a_1 x + \\dots + a_n x^{n}$ with real coefficients.\n\nConsequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$,\n$\\alpha f$, $fg$, $|f|$, $\\max\\{f,g\\}$ and $\\min\\{f,g\\}$, and\n$(f/g)|_{A_0}$ is continuous on $A_0$.\n\n**Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**,\nand $g$ may well vanish at points of $A$ far from $c$. The hypothesis is\n$g(c) \\ne 0$, not \"$g$ nowhere zero\"; what it buys is that $c$ itself lies in\nthe smaller domain, which is what makes continuity there mean anything.\n\n**Nothing here is proved through a sequence.** Claims 1 and 4 are read off from\n[[thm-algebra-of-function-limits]], which is itself proved from $\\varepsilon$\nand $\\delta$, and claims 2, 3 and 5 are proved directly below. So no choice\nprinciple is used anywhere in this item.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-chain-rule",
      "source_section": "Statement",
      "quote": "Let $A, B \\subseteq \\mathbb{R}$, let $g : A \\to \\mathbb{R}$ with\n$g[A] \\subseteq B$ and let $f : B \\to \\mathbb{R}$, so that the composite\n$f \\circ g : A \\to \\mathbb{R}$ is defined. Let $c \\in A$ be a limit point of\n$A$ ([[def-limit-point-r]]) at which $g$ is differentiable\n([[def-derivative]]), put $b := g(c)$, and suppose $b$ is a limit point of $B$\nat which $f$ is differentiable. Then $f \\circ g$ is differentiable at $c$ and\n\n$$(f \\circ g)'(c) \\;=\\; f'\\bigl(g(c)\\bigr)\\,g'(c) .$$\n\n**Both limit-point hypotheses are needed, and neither is automatic.** That $c$\nis a limit point of $A$ is what makes $g'(c)$ and $(f \\circ g)'(c)$ defined\nsymbols; that $b = g(c)$ is a limit point of $B$ is what makes $f'(b)$ one.\nNothing forces the second: $g$ may be differentiable at $c$ and send $c$ to an\nisolated point of $B$, and there $f'(b)$ is not defined and the formula asserts\nnothing.\n\n**No case analysis appears anywhere.** The naive difference-quotient proof\nwrites $\\frac{f(g(x)) - f(g(c))}{g(x) - g(c)} \\cdot \\frac{g(x) - g(c)}{x - c}$\nand then has to say what happens where $g(x) = g(c)$, which may occur at points\narbitrarily close to $c$. Carathéodory's factorisation never divides by the\ninner increment, so the difficulty does not arise.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L7",
      "source": "def-derivative",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), neighbourhoods are those of\n[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a\n**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function\n\n$$q_{f,c} : A \\setminus \\{c\\} \\to \\mathbb{R}, \\qquad q_{f,c}(x) := \\frac{f(x) - f(c)}{x - c} .$$\n\nThe division is legitimate at every point of the domain, since $x \\ne c$ gives\n$x - c \\ne 0$.\n\n**The point $c$ is a limit point of $A \\setminus \\{c\\}$, not merely of $A$.**\nFor every real $\\varepsilon > 0$ the punctured neighbourhood\n$N^{*}_{\\varepsilon}(c)$ omits $c$, so\n\n$$N^{*}_{\\varepsilon}(c) \\cap A \\;=\\; N^{*}_{\\varepsilon}(c) \\cap (A \\setminus \\{c\\}) ,$$\n\nand the left-hand side is nonempty because $c$ is a limit point of $A$. So\n$q_{f,c}$ is a function on a set having $c$ as a limit point, and\n$\\lim_{x \\to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.\n\n$f$ is **differentiable at $c$** when that limit exists, and then the\n**derivative of $f$ at $c$** is\n\n$$f'(c) \\;:=\\; \\lim_{x \\to c} q_{f,c}(x) \\;=\\; \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c} .$$\n\n**Two obligations are carried by that notation, and both are discharged here.**\n\n1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a\n   single real number. That is legitimate: $c$ is a limit point of the domain\n   $A \\setminus \\{c\\}$ of $q_{f,c}$, so at most one real can satisfy the\n   $\\varepsilon$-$\\delta$ condition, by [[lem-function-limit-unique]] applied to\n   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the\n   symbol denotes.\n2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not\n   decoration. At an **isolated** point of $A$ the punctured condition\n   $0 < |x - c| < \\delta$ is met by no point of the domain at all, so the\n   $\\varepsilon$-$\\delta$ formula is satisfied vacuously by *every* real at\n   once; this is why [[def-function-limit]] leaves the limit undefined there,\n   and it is why this library defines $f'(c)$ only at a limit point of $A$. At\n   an isolated point of its domain a function is neither differentiable nor\n   non-differentiable here: the question is not posed.\n\n**The limit sees only $A \\setminus \\{c\\}$, so how the difference quotient is\nextended to $c$ is irrelevant.** Let $Q : A \\to \\mathbb{R}$ agree with\n$q_{f,c}$ at every point of $A \\setminus \\{c\\}$, and let $L \\in \\mathbb{R}$.\nThen $\\lim_{x \\to c} Q(x) = L$ if and only if $\\lim_{x \\to c} q_{f,c}(x) = L$.\nBoth conditions read: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ such that every point $x$ of the relevant domain with\n$0 < |x - c| < \\delta$ satisfies $|{\\cdot} - L| < \\varepsilon$\n([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both\nquantifiers, so in both cases the points quantified over are exactly the\n$x \\in A \\setminus \\{c\\}$ with $0 < |x - c| < \\delta$, at which $Q$ and\n$q_{f,c}$ take the same value. The two conditions are the same condition.\n\n**Differentiability on a set.** For $S \\subseteq A$, $f$ is **differentiable on\n$S$** when it is differentiable at every $c \\in S$; implicit in that phrase is\nthat every point of $S$ is a limit point of $A$. $f$ is **differentiable** when\nit is differentiable on the whole of $A$.\n\n**Restriction of the domain.** Let $B \\subseteq A$, let $c \\in B$ and suppose\n$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the\nrestriction $f|_B : B \\to \\mathbb{R}$, and\n\n$$(f|_B)'(c) \\;=\\; f'(c) .$$\n\nIndeed $B \\setminus \\{c\\} \\subseteq A \\setminus \\{c\\}$; the displayed identity\nof punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit\npoint of $B \\setminus \\{c\\}$; the difference quotient $q_{f|_B, c}$ is the\nrestriction of $q_{f,c}$ to $B \\setminus \\{c\\}$, since $f|_B(c) = f(c)$; and\nclaim 2 of [[lem-limit-is-local]] carries the limit to that restriction.\n\n**Every point of a nondegenerate interval is a limit point of it.** Let\n$J \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) with at least two\nelements and let $p \\in J$. Choose $q \\in J$ with $q \\ne p$, and let a real\n$\\varepsilon > 0$ be given. If $p < q$, put $y := p + \\tfrac{1}{2}\\min\\{\\varepsilon,\\ q - p\\}$;\nthen $p < y$, and $y - p \\le \\tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and\norder-convexity gives $y \\in J$, while $0 < |y - p| < \\varepsilon$. If $q < p$,\nthe point $y := p - \\tfrac{1}{2}\\min\\{\\varepsilon,\\ p - q\\}$ serves in the same\nway. So $N^{*}_{\\varepsilon}(p) \\cap J \\ne \\varnothing$ for every real\n$\\varepsilon > 0$, that is, $p$ is a limit point of $J$\n([[def-limit-point-r]]).\n\nConsequently, for $f$ defined on a nondegenerate interval $I$, the symbol\n$f'(c)$ is meaningful at **every** $c \\in I$, endpoints included. At an endpoint\nthe difference quotient is taken over the points of $I$ lying on the one side\nthat is available, so what other texts call a one-sided derivative is, here,\nsimply the derivative of $f$ on $I$.",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L7",
      "source": "def-function-limit",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]) with its order and absolute value\n([[def-real-order]]).\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$, let $c \\in \\mathbb{R}$\nbe a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \\in \\mathbb{R}$.\nWe say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write\n\n$$\\lim_{x \\to c} f(x) = L ,$$\n\nwhen\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ 0 < |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - L| < \\varepsilon\\ \\bigr],$$\n\nwhere $\\varepsilon$ and $\\delta$ range over the **positive reals**.\n\nIn the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:\nfor every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with\n\n$$f\\bigl(A \\cap N^{*}_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}(L),$$\n\n$N^{*}_{\\delta}(c) = \\{\\, y : 0 < |y - c| < \\delta \\,\\}$ being the punctured\n$\\delta$-neighbourhood of $c$ and $N_{\\varepsilon}(L) = (L - \\varepsilon,\\ L +\n\\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because\n$|f(x) - L| < \\varepsilon$ says exactly $f(x) \\in N_\\varepsilon(L)$, and\n$0 < |x - c| < \\delta$ says exactly $x \\in N^{*}_\\delta(c)$.\n\n**Three features of this definition are load bearing, not decoration.**\n\n1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that\n   says every punctured neighbourhood of $c$ meets $A$, so for every $\\delta > 0$\n   the set $A \\cap N^{*}_\\delta(c)$ over which the implication quantifies is\n   nonempty. Drop the requirement and the implication can be satisfied\n   vacuously by *every* real $L$ at once, which is exactly what\n   [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$\n   that is not a limit point of $A$ — an isolated point — the symbol\n   $\\lim_{x \\to c} f(x)$ is therefore **not defined** in this library.\n\n2. **$c \\in A$ is not required.** A limit point of $A$ need not belong to $A$\n   ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This\n   is what allows a limit to be taken at a point where the function is not\n   defined at all, as at $0$ for $x \\mapsto x\\,\\psi(1/x)$.\n\n3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis\n   $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the\n   single point $c$ changes nothing. Equality of the limit with the value is an\n   extra condition, not a consequence: [[fs-limit-equals-value]].\n\n**The notation presumes uniqueness.** Writing $\\lim_{x \\to c} f(x) = L$ treats\nthe left-hand side as a name for a single real number, which is legitimate only\nbecause at a limit point at most one $L$ can satisfy the displayed condition.\nThat obligation is discharged by [[lem-function-limit-unique]], recorded in this\nitem's `justified_by`. As with $\\sup S$ ([[rem-sup-conventions]]) and\n$\\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function\nalready known to have a limit at $c$.\n\n**Real and rational $\\varepsilon$ define the same relation.** Above,\n$\\varepsilon$ and $\\delta$ range over the positive reals. Restricting either\nquantifier to the positive rationals gives the same relation: every positive\nrational is a positive real, and below every positive real lies a positive\nrational ([[lem-rat-embeds-dense]]), so an $\\varepsilon$-condition verified for\nall positive rationals is verified for an arbitrary positive real $\\eta$ by\nrunning it at a rational $\\varepsilon$ with $0 < \\varepsilon < \\eta$, and a\n$\\delta$ produced as a real may be shrunk to a rational one below it. This is\nthe passage sanctioned in the remarks of [[def-sequence]], and it is what lets\nthis definition be compared with [[def-real-limit]], whose $\\varepsilon$ is\nrational, in [[thm-sequential-criterion-for-function-limits]].",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L7",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity\nsatisfies $0 < 1$; that is, $1 \\in P$.",
      "uses": [
        "2.3"
      ]
    }
  ],
  "derivations": [
    {
      "id": "thm-derivative-of-an-inverse-step-1-1",
      "claim": "$I$ has at least two elements, so by [L4] its image $f[I]$ has at least two elements; and $f[I]$ is order-convex by [L1]. So [L3] applies to both sets: every point of $I$ is a limit point of $I$, and every point of $f[I]$ is a limit point of $f[I]$. In particular $c$ is a limit point of $I$ and $b = f(c) \\in f[I]$ is a limit point of $f[I]$. [L1, L3, L4]",
      "step": "1.1",
      "inputs": [
        "L4",
        "L1",
        "L3"
      ]
    },
    {
      "id": "thm-derivative-of-an-inverse-step-1-2",
      "claim": "Fix the inverse $g : f[I] \\to I$ of $f : I \\to f[I]$, continuous on $f[I]$; it satisfies $g(f(x)) = x$ for every $x \\in I$, so in particular $g(b) = c$. [L1, choose]",
      "step": "1.2",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "thm-derivative-of-an-inverse-step-1-3",
      "claim": "Assume $f$ is differentiable at $c$. By [L2], applied to $f$ on $I$ at the limit point $c$, fix $\\varphi : I \\to \\mathbb{R}$, continuous at $c$, with $f(x) - f(c) = \\varphi(x)(x - c)$ for every $x \\in I$ and $\\varphi(c) = f'(c)$. [L2, choose]",
      "step": "1.3",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "thm-derivative-of-an-inverse-step-2-1",
      "claim": "$\\varphi(x) \\ne 0$ for every $x \\in I$ with $x \\ne c$: injectivity gives $f(x) \\ne f(c)$, so $\\varphi(x)(x-c) \\ne 0$ and hence $\\varphi(x) \\ne 0$. If moreover $f'(c) \\ne 0$ then $\\varphi(c) = f'(c) \\ne 0$ as well, so $\\varphi$ vanishes at no point of $I$. [step 1.3, L4]",
      "step": "2.1",
      "inputs": [
        "1.3",
        "L4"
      ]
    },
    {
      "id": "thm-derivative-of-an-inverse-step-2-2",
      "claim": "**The increment of $g$, rewritten.** Let $u \\in f[I]$ and put $x := g(u) \\in I$, so $f(x) = u$ by [L1]. Then $u - b = f(x) - f(c) = \\varphi(x)(x - c) = \\varphi(g(u))\\,\\bigl(g(u) - g(b)\\bigr)$, using $g(b) = c$ from step 1.2. [step 1.2, step 1.3, L1]",
      "step": "2.2",
      "inputs": [
        "L1",
        "1.2",
        "1.3"
      ]
    },
    {
      "id": "thm-derivative-of-an-inverse-step-2-3",
      "claim": "**Claim 2.** Assume $f'(c) = 0$, and suppose $g$ were differentiable at $b$. Since $f[I] \\subseteq f[I]$, since $f$ is differentiable at the limit point $c$ of $I$ and since $b = f(c)$ is a limit point of $f[I]$ by step 1.1, the chain rule [L6] gives that $g \\circ f : I \\to \\mathbb{R}$ is differentiable at $c$ with $(g \\circ f)'(c) = g'(b)\\,f'(c) = g'(b) \\cdot 0 = 0$. But $g \\circ f$ is the identity on $I$ by step 1.2, and by [L7] the identity on $I$ is differentiable at the limit point $c$ with derivative $1$; the derivative at $c$ being a single real, this forces $0 = 1$, which [L7] excludes. So $g$ is not differentiable at $b$. [step 1.1, step 1.2, L6, L7]",
      "step": "2.3",
      "inputs": [
        "1.1",
        "L6",
        "1.2",
        "L7"
      ]
    },
    {
      "id": "thm-derivative-of-an-inverse-step-3-1",
      "claim": "**The reciprocal factor.** Assume $f'(c) \\ne 0$. The map $g$ is continuous at $b$ by step 1.2 and sends $f[I]$ into $I$, and $\\varphi$ is continuous at $c = g(b)$ by step 1.3, so $\\varphi \\circ g : f[I] \\to \\mathbb{R}$ is continuous at $b$ by [L5]; by step 2.1 it vanishes at no point of $f[I]$, since $g$ takes values in $I$, and $(\\varphi \\circ g)(b) = \\varphi(c) = f'(c) \\ne 0$. Hence, by [L5] applied with the constant numerator $1$ and denominator $\\varphi \\circ g$ on the domain $f[I]$, where the set on which the denominator does not vanish is the whole of $f[I]$, the function $\\Phi := 1/(\\varphi \\circ g) : f[I] \\to \\mathbb{R}$ is continuous at $b$ and $\\Phi(b) = 1/f'(c)$. [step 1.2, step 1.3, step 2.1, L5]",
      "step": "3.1",
      "inputs": [
        "1.2",
        "1.3",
        "L5",
        "2.1"
      ]
    },
    {
      "id": "thm-derivative-of-an-inverse-step-4-1",
      "claim": "**The factorisation for $g$.** Assume $f'(c) \\ne 0$ and let $u \\in f[I]$. Dividing the identity of step 2.2 by the nonzero number $(\\varphi \\circ g)(u)$ gives $g(u) - g(b) = \\Phi(u)\\,(u - b)$, and this holds for every $u \\in f[I]$. [step 2.2, step 3.1]",
      "step": "4.1",
      "inputs": [
        "2.2",
        "3.1"
      ]
    },
    {
      "id": "thm-derivative-of-an-inverse-step-5-1",
      "claim": "**Claim 1.** Assume $f'(c) \\ne 0$. By step 1.1 the point $b$ is a limit point of $f[I]$; by step 4.1 the function $\\Phi : f[I] \\to \\mathbb{R}$ factors the increment of $g$ at $b$; and by step 3.1 it is continuous at $b$. So [L2], applied to $g$ on $f[I]$ at $b$, gives that $g$ is differentiable at $b$ with $g'(b) = \\Phi(b) = 1/f'(c)$. [step 1.1, step 3.1, step 4.1, L2]",
      "step": "5.1",
      "inputs": [
        "1.1",
        "4.1",
        "3.1",
        "L2"
      ]
    },
    {
      "id": "thm-derivative-of-an-inverse-step-6-1",
      "claim": "Claim 1 is step 5.1 and claim 2 is step 2.3, and the two limit-point assertions are step 1.1. [step 2.3, step 5.1] ∎",
      "step": "6.1",
      "inputs": [
        "5.1",
        "2.3",
        "1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Step 2.1 explicitly treats or excludes the empty/vacuous case."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 2.1 explicitly includes the zero-valued, vanishing, or zero-index case."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.1 explicitly includes the unit, singleton, or first-index case."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The claim is local or algebraic and has no interval-length or repeated-endpoint boundary."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement explicitly states the interval and endpoint convention used by the result."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.2 supplies each displayed witness by formula or by the cited existence premise before using it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The stated result is not a biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The stated result is not a biconditional."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "thm-derivative-of-an-inverse",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "def-derivative",
    "declared_target": "def-derivative",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-derivative-of-an-inverse",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "thm-caratheodory-characterisation",
    "declared_target": "thm-caratheodory-characterisation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-derivative-of-an-inverse",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "thm-chain-rule",
    "declared_target": "thm-chain-rule",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-derivative-of-an-inverse",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "thm-continuous-inverse",
    "declared_target": "thm-continuous-inverse",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-derivative-of-an-inverse",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-derivative-of-an-inverse",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "def-injection-surjection-bijection",
    "declared_target": "def-injection-surjection-bijection",
    "target_statement_provenance": "ai-altered",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-derivative-of-an-inverse",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-derivative-of-an-inverse",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "thm-algebra-of-continuous-functions",
    "declared_target": "thm-algebra-of-continuous-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-derivative-of-an-inverse",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "thm-composition-of-continuous-functions",
    "declared_target": "thm-composition-of-continuous-functions",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-derivative-of-an-inverse",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "def-function-limit",
    "declared_target": "def-function-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-derivative-of-an-inverse",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "def-limit-point-r",
    "declared_target": "def-limit-point-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-derivative-of-an-inverse",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "cor-of-one-positive",
    "declared_target": "cor-of-one-positive",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (12)

### `cor-of-one-positive`

````markdown
---
id: cor-of-one-positive
kind: corollary
title: "The multiplicative identity is positive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-of-square-positive, def-field]
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
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
proof_strategy: direct
---

## Statement

In any ordered field $F$ with positive cone $P$, the multiplicative identity
satisfies $0 < 1$; that is, $1 \in P$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$ and multiplicative identity $1$ ([[def-field]]).

[L1] In any field $1 \neq 0$ ([[def-field]]).

[L2] For every $x \neq 0$ the square satisfies $x^2 > 0$ ([[lem-of-square-positive]]).

[L3] The identity axiom gives $1 = 1 \cdot 1 = 1^2$ ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 By the field axioms $1 \neq 0$, and $1 = 1 \cdot 1 = 1^2$. [L1, L3]

2.1 Since $1 \neq 0$, applying the square lemma with $x = 1$ gives $1^2 > 0$. [step 1.1, L2]

3.1 Because $1 = 1^2$, it follows that $1 > 0$, i.e. $0 < 1$. [step 2.1, step 1.1, L3] ∎
````

### `def-continuity-real`

````markdown
---
id: def-continuity-real
kind: definition
title: "Continuity of $f : A \\to \\mathbb{R}$ at a point of $A$ and on $A$: the $\\varepsilon$-$\\delta$ condition, its agreement with $\\lim_{x \\to c} f(x) = f(c)$ at a limit point, and continuity at an isolated point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, def-open-and-closed-in-r, def-interval, lem-of-abs-value, def-complete-ordered-field]
justified_by: []
aliases: [def-continuity-at-a-point-r]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "continuity of a real function"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.1: Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.01%3A_Basic_Definitions"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field with its order and
absolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and
neighbourhoods are those of [[def-neighbourhood-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. Then
$f$ is **continuous at $c$** when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ |x - c| < \delta \ \Longrightarrow\ |f(x) - f(c)| < \varepsilon\ \bigr],$$

with $\varepsilon$ and $\delta$ ranging over the **positive reals**. In the
language of neighbourhoods: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ with

$$f\bigl(A \cap N_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}\bigl(f(c)\bigr).$$

$f$ is **continuous on $A$** when it is continuous at every point of $A$.

**The point $c$ is required to lie in $A$, and the condition is unpunctured.**
Both differ from [[def-function-limit]], and deliberately. There the quantifier
runs over $0 < |x - c| < \delta$, which removes $x = c$; here $x = c$ is allowed,
and at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \varepsilon$, which is
automatic. So allowing $x = c$ costs nothing, and it is what lets the definition
be stated at every point of $A$, including the points where no limit exists.

**Three clauses, and all three are part of the definition.**

1. **At a limit point.** Suppose $c \in A$ is a limit point of $A$
   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the
   limit of $f$ at $c$ exists and
   $$\lim_{x \to c} f(x) \;=\; f(c)$$
   ([[def-function-limit]]). Indeed, for a given $\varepsilon > 0$ a $\delta$
   witnessing continuity witnesses the limit condition, because the limit
   condition quantifies over a subset of the points continuity quantifies over;
   and conversely a $\delta$ witnessing $\lim_{x \to c} f(x) = f(c)$ witnesses
   continuity, because the one point it omits, $x = c$, satisfies
   $|f(c) - f(c)| < \varepsilon$ anyway.

2. **At an isolated point.** Suppose $c \in A$ is an isolated point of $A$
   ([[def-limit-point-r]]), so that $N_{\eta}(c) \cap A = \{c\}$ for some real
   $\eta > 0$. Then **every** $f : A \to \mathbb{R}$ is continuous at $c$: take
   $\delta := \eta$, so that the only $x \in A$ with $|x - c| < \delta$ is $c$
   itself, and $|f(c) - f(c)| = 0 < \varepsilon$.

3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and
   nothing more. It is not a condition relating $f$ to points outside $A$.

Every point of $A$ is either a limit point of $A$ or an isolated point of $A$,
and never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe
continuity at every point of $A$.

**This is not the raw $\varepsilon$-$\delta$ formula of
[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes
wrong when the *punctured* formula of [[def-function-limit]] is written down at
an arbitrary point of the domain: at an isolated point it is satisfied
vacuously by every real $L$ at once, so it defines nothing, and this library
therefore leaves $\lim_{x \to c} f(x)$ **undefined** at an isolated point.
Continuity at an isolated point is a different matter: the formula above is not
vacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the
only value being compared with itself — and it names a single, well-defined
property. The limit is undefined there; the continuity is defined, and is
automatic. Clause 1 is the only place where the two notions meet, and it is
stated only where the limit exists as a notion.

**Where the distinction disappears.** If $A$ is an open subset of $\mathbb{R}$
([[def-open-and-closed-in-r]]), then every $c \in A$ has some
$N_{\eta}(c) \subseteq A$, and a punctured neighbourhood is never empty
([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and
clause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate
interval ([[def-interval]]). Isolated points are what force clause 2 to exist at
all, and they occur as soon as $A$ is allowed to be an arbitrary subset of
$\mathbb{R}$, as in $A = \{0\} \cup [1,2]$.

## Remarks

- **Continuity is local.** If $\eta > 0$ and $g : A \to \mathbb{R}$ agrees with
  $f$ on $A \cap N_{\eta}(c)$, then $f$ is continuous at $c$ if and only if $g$
  is: any $\delta$ may be replaced by $\min\{\delta, \eta\}$, after which the
  condition only ever evaluates the two functions where they agree. So
  continuity at $c$ sees only an arbitrarily small neighbourhood of $c$, exactly
  as the limit does ([[lem-limit-is-local]]).

- **Continuity passes to subsets of the domain.** If $B \subseteq A$ and
  $c \in B$, then continuity of $f$ at $c$ gives continuity of the restriction
  $f|_B$ at $c$, with the same $\delta$: the condition on $f|_B$ quantifies over
  fewer points. The converse fails, and the standard witness is the indicator of
  $\mathbb{Q}$ restricted to $\mathbb{Q}$, which is constant and hence
  continuous, while the indicator itself is continuous nowhere
  ([[cex-dirichlet-is-nowhere-continuous]]).

- **The radius is a real number.** As in [[def-neighbourhood-r]], $\varepsilon$
  and $\delta$ range over the positive reals here. Restricting either quantifier
  to the positive rationals defines the same relation, by the passage recorded
  in [[def-function-limit]]: below every positive real lies a positive rational
  ([[lem-rat-embeds-dense]]), and a real $\delta$ may be shrunk to a rational
  one below it.

- **The word *continuous* is used for two things in this library, and they
  agree.** [[def-metric-continuity]] defines continuity of a map between metric
  spaces, and $A \subseteq \mathbb{R}$ carries the metric $d(x,y) = |x-y|$. The
  two notions coincide, and that is proved, not assumed:
  [[lem-real-and-metric-notions-agree]] is the dictionary, and it is stated on
  this page precisely so that no later item has to guess.
````

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

### `def-function-limit`

````markdown
---
id: def-function-limit
kind: definition
title: "The $\\varepsilon$-$\\delta$ limit $\\lim_{x \\to c} f(x) = L$ of $f : A \\to \\mathbb{R}$ at a limit point $c$ of $A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-point-r, def-neighbourhood-r, def-interval, def-real-order, def-complete-ordered-field, lem-of-abs-value, lem-rat-embeds-dense]
justified_by: [lem-function-limit-unique]
aliases: [def-epsilon-delta-limit, def-limit-of-a-function]
landmark: true
short: "the $\\varepsilon$-$\\delta$ limit of a function"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Def. 4.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) with its order and absolute value
([[def-real-order]]).

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$, let $c \in \mathbb{R}$
be a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \in \mathbb{R}$.
We say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write

$$\lim_{x \to c} f(x) = L ,$$

when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ 0 < |x - c| < \delta \ \Longrightarrow\ |f(x) - L| < \varepsilon\ \bigr],$$

where $\varepsilon$ and $\delta$ range over the **positive reals**.

In the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:
for every real $\varepsilon > 0$ there is a real $\delta > 0$ with

$$f\bigl(A \cap N^{*}_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}(L),$$

$N^{*}_{\delta}(c) = \{\, y : 0 < |y - c| < \delta \,\}$ being the punctured
$\delta$-neighbourhood of $c$ and $N_{\varepsilon}(L) = (L - \varepsilon,\ L +
\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because
$|f(x) - L| < \varepsilon$ says exactly $f(x) \in N_\varepsilon(L)$, and
$0 < |x - c| < \delta$ says exactly $x \in N^{*}_\delta(c)$.

**Three features of this definition are load bearing, not decoration.**

1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that
   says every punctured neighbourhood of $c$ meets $A$, so for every $\delta > 0$
   the set $A \cap N^{*}_\delta(c)$ over which the implication quantifies is
   nonempty. Drop the requirement and the implication can be satisfied
   vacuously by *every* real $L$ at once, which is exactly what
   [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$
   that is not a limit point of $A$ — an isolated point — the symbol
   $\lim_{x \to c} f(x)$ is therefore **not defined** in this library.

2. **$c \in A$ is not required.** A limit point of $A$ need not belong to $A$
   ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This
   is what allows a limit to be taken at a point where the function is not
   defined at all, as at $0$ for $x \mapsto x\,\psi(1/x)$.

3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis
   $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the
   single point $c$ changes nothing. Equality of the limit with the value is an
   extra condition, not a consequence: [[fs-limit-equals-value]].

**The notation presumes uniqueness.** Writing $\lim_{x \to c} f(x) = L$ treats
the left-hand side as a name for a single real number, which is legitimate only
because at a limit point at most one $L$ can satisfy the displayed condition.
That obligation is discharged by [[lem-function-limit-unique]], recorded in this
item's `justified_by`. As with $\sup S$ ([[rem-sup-conventions]]) and
$\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function
already known to have a limit at $c$.

**Real and rational $\varepsilon$ define the same relation.** Above,
$\varepsilon$ and $\delta$ range over the positive reals. Restricting either
quantifier to the positive rationals gives the same relation: every positive
rational is a positive real, and below every positive real lies a positive
rational ([[lem-rat-embeds-dense]]), so an $\varepsilon$-condition verified for
all positive rationals is verified for an arbitrary positive real $\eta$ by
running it at a rational $\varepsilon$ with $0 < \varepsilon < \eta$, and a
$\delta$ produced as a real may be shrunk to a rational one below it. This is
the passage sanctioned in the remarks of [[def-sequence]], and it is what lets
this definition be compared with [[def-real-limit]], whose $\varepsilon$ is
rational, in [[thm-sequential-criterion-for-function-limits]].

## Remarks

- **Terminology.** *Limit point* here is a property of the set $A$ and the point
  $c$, in the sense of [[def-limit-point-r]]; it has nothing to do with
  subsequential limits ([[def-subsequential-limit]]), and the distinction is the
  one that item records.

- **Why the punctured condition, and not $|x - c| < \delta$.** With the
  unpunctured condition the definition would force $f$ to be defined at $c$ and
  would force $|f(c) - L| < \varepsilon$ for every $\varepsilon$, that is,
  $L = f(c)$. The resulting notion is continuity at $c$, a strictly stronger
  condition, and conflating the two is the error catalogued in
  [[fs-limit-equals-value]].

- **One-sided and infinite variants.** Restricting the domain to one side of $c$
  gives the one-sided limits of [[def-one-sided-limits]]; replacing the
  conditions on $x$ or on $f(x)$ by unboundedness conditions gives the limits at
  and to infinity of [[def-limits-at-infinity]]. Both are built on this
  definition rather than beside it.
````

### `def-injection-surjection-bijection`

````markdown
---
id: def-injection-surjection-bijection
kind: definition
title: "Injection, surjection, bijection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function, def-image-and-preimage-under-a-relation]
justified_by: []
aliases: [def-injective, def-surjective, def-bijective]
landmark: false
short: "injective, surjective, bijective"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "T. Tao, Analysis I, 3rd ed., §3.3 (Functions)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets and let $f : A \to B$ be a function ([[def-function]]).

- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all
  $x, y \in A$.
- $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$
  with $f(x) = b$; equivalently, the image $f[A] := \{ f(x) : x \in A \}$ equals
  $B$.
- $f$ is **bijective** if it is both injective and surjective.

For $S \subseteq A$ we write $f[S] = \{ f(x) : x \in S \}$ for the image of $S$,
and for $T \subseteq B$ we write $f^{-1}[T] = \{ x \in A : f(x) \in T \}$ for the
preimage of $T$; these are the image and preimage of a set under $f$ read as a
relation ([[def-image-and-preimage-under-a-relation]]).

## Remarks

- **Composition.** If $f : A \to B$ and $g : B \to C$ are both injective then so
  is $g \circ f$, since $g(f(x)) = g(f(y))$ forces $f(x) = f(y)$ and then
  $x = y$; if both are surjective then so is $g \circ f$, since any $c \in C$ is
  $g(b)$ for some $b \in B$ and that $b$ is $f(a)$ for some $a \in A$. Hence a
  composition of bijections is a bijection. These verifications, together with the
  two partial converses, are
  [[prop-composition-preserves-injectivity-surjectivity-and-bijectivity]].

- **Inverses.** $f : A \to B$ is bijective exactly when there is a function
  $f^{-1} : B \to A$ with $f^{-1}(f(x)) = x$ for all $x \in A$ and
  $f(f^{-1}(b)) = b$ for all $b \in B$; that two-sided inverse is unique, and it
  is itself a bijection. Injectivity alone gives a bijection from $A$ onto the
  image $f[A]$, and hence an inverse defined on $f[A]$ only. No choice principle
  is involved: the value $f^{-1}(b)$ is the *unique* $x$ with $f(x) = b$, so it
  is determined rather than selected. The full statement, with the uniqueness of the
  two-sided inverse, is
  [[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]; the
  corresponding statement for an arbitrary surjection is not available at this point
  in the reading order, because a right inverse for every surjection is equivalent
  to the Axiom of Choice.

- **What this item does and does not do.** A function $A \to B$ is a set of ordered
  pairs, single valued and total on $A$ ([[def-function]]); ordered pairs, Cartesian
  products, images and preimages are fixed by [[def-ordered-pair]],
  [[def-cartesian-product]] and [[def-image-and-preimage-under-a-relation]]. This
  item only fixes the three adjectives and the notation used for them. Nothing here
  is proved.
````

### `def-interval`

````markdown
---
id: def-interval
kind: definition
title: "Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field, def-real-order, def-bounded-set]
justified_by: []
aliases: []
landmark: true
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
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (segments and cells)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §0.3 and §1.1"
      url: "https://www.jirka.org/ra/"
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## Remarks

- **Why the five unbounded forms really are unbounded.** Take $[a,\infty)$ and
  suppose $u \in \mathbb{R}$ were an upper bound of it. The element
  $x = a + |u - a| + 1$ satisfies $x \ge a$, so $x \in [a,\infty)$, and
  $x \ge a + (u - a) + 1 = u + 1 > u$, since $|t| \ge t$ ([[lem-of-abs-value]])
  and $1 > 0$ ([[cor-of-one-positive]]). That contradicts $x \le u$. The same
  computation with $a$ replaced by any element of $(a,\infty)$ handles the open
  form, and reflecting through the origin handles $(-\infty,b)$ and
  $(-\infty,b]$; $\mathbb{R}$ itself is unbounded on both sides for the same
  reason. Note that this uses no Archimedean property: it is the failure of a
  *single* bound, not the cofinality of the naturals.

- **The converse classification is not asserted here.** It is true that every
  order-convex subset of $\mathbb{R}$ is empty or one of the nine forms, and the
  proof runs through suprema and infima, but nothing in this library needs it and
  it is not proved anywhere here. What is used is only the direction proved
  above: each of the nine forms is order-convex.

- **Degenerate intervals are kept, not excluded.** $[a,a] = \{a\}$ and
  $(a,a) = \emptyset$ are intervals under this definition. Excluding them would
  force a nonemptiness hypothesis into every statement that produces an interval,
  and the nested interval property is a good illustration: its conclusion is that
  the intersection is nonempty, and in the equality case the intersection is the
  degenerate interval $[a,a]$, which is exactly the single point.
````

### `def-limit-point-r`

````markdown
---
id: def-limit-point-r
kind: definition
title: "Limit point, isolated point, adherent point, derived set, and dense subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-r, def-open-and-closed-in-r, def-interior-closure-boundary-r]
justified_by: []
aliases: [def-accumulation-point-r, def-derived-set-r, def-dense-in-r]
landmark: true
short: "limit point, isolated point, dense"
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
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$ and $x \in \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]] and closure as in
[[def-interior-closure-boundary-r]].

- $x$ is an **adherent point** of $A$ when $N_\varepsilon(x) \cap A \ne
  \varnothing$ for every real $\varepsilon > 0$.
- $x$ is a **limit point** (or *accumulation point*) of $A$ when
  $N^{*}_\varepsilon(x) \cap A \ne \varnothing$ for every real
  $\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.
- $x$ is an **isolated point** of $A$ when $x \in A$ and there is a real
  $\varepsilon > 0$ with $N_\varepsilon(x) \cap A = \{x\}$.
- The **derived set** of $A$ is
  $$A' \;:=\; \{\, x \in \mathbb{R} : x \text{ is a limit point of } A \,\}.$$
- $A$ is **dense in $\mathbb{R}$** when $\overline{A} = \mathbb{R}$.

**A limit point is an adherent point**, since $N^{*}_\varepsilon(x) \subseteq
N_\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since
$x \in N_\varepsilon(x) \cap A$ ([[def-neighbourhood-r]]). So the adherent
points of $A$ are exactly the points of $A \cup A'$, a statement proved as part
of [[thm-closure-characterisations-r]].

**Limit point and isolated point are exact opposites inside $A$.** For
$x \in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point
of $A$. Indeed $N_\varepsilon(x) \cap A = \{x\}$ says precisely that
$N^{*}_\varepsilon(x) \cap A = \varnothing$, because $x$ itself always lies in
$N_\varepsilon(x) \cap A$ when $x \in A$; so the existence of an $\varepsilon$
witnessing isolation is the negation of the condition defining a limit point.
A point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and
never both.

**A limit point need not belong to the set, and a point of the set need not be a
limit point.** Both possibilities occur, and the two examples that matter later
are $0$, which is a limit point of $\{\, 1/k : k \ge 1 \,\}$ without belonging
to it, and $0$ again, which belongs to $\{0\} \cup [1,2]$ as an isolated point.

## Remarks

- **Terminology: *limit point* here is about a set, never about a sequence.**
  This library reserves *subsequential limit* for the sequential notion
  ([[def-subsequential-limit]]), and the two are genuinely different: the
  constant sequence $x_k = 0$ has $0$ as a subsequential limit, while its set of
  values $\{0\}$ has no limit point at all. The distinction is the one
  [[def-subsequential-limit]] records under "Terminology", and it is respected
  throughout this page.

- **Density is defined through the closure, not through intervals.** Saying
  $\overline{A} = \mathbb{R}$ is equivalent to saying that every nonempty open
  subset of $\mathbb{R}$ meets $A$, and also to saying that every neighbourhood
  of every real meets $A$; the equivalences follow from
  [[thm-closure-characterisations-r]] and are used in that form in
  [[lem-q-and-irrationals-dense-r]].

- **The derived set need not be comparable with the set.** It can be strictly
  larger, as for $\mathbb{Q}$: every punctured neighbourhood of any real
  contains a rational, since density supplies one strictly between $x$ and
  $x + \varepsilon$ ([[lem-q-and-irrationals-dense-r]]), so the derived set of
  $\mathbb{Q}$ is all of $\mathbb{R}$. It can be strictly smaller, as for
  $\{0\}$, whose derived set is empty; and it can be neither, as for
  $\{0\} \cup (1,2)$, whose derived set is $[1,2]$, a set containing points
  outside the original and omitting the point $0$ of it. A closed set satisfying
  $A \subseteq A'$ is called perfect ([[def-perfect-set-r]]).
````

### `thm-algebra-of-continuous-functions`

````markdown
---
id: thm-algebra-of-continuous-functions
kind: theorem
title: "Sums, scalar multiples, products, absolute values, maxima, minima and quotients with nonvanishing denominator of continuous functions are continuous, as are constants, the identity and every polynomial function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, thm-algebra-of-function-limits, lem-sign-preservation-near-a-limit, def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, cor-of-reverse-triangle, def-max-min, lem-finite-set-has-max, def-integer-power, def-ordered-field, def-field]
justified_by: []
aliases: [thm-continuity-algebra]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "algebra of continuous functions"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.4, 4.9)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f, g : A \to \mathbb{R}$, let
$\alpha \in \mathbb{R}$ and let $c \in A$. Suppose $f$ and $g$ are continuous at
$c$ ([[def-continuity-real]]). Then:

1. $f + g$, $\alpha f$ and $fg$ are continuous at $c$;
2. $|f|$, the function $x \mapsto |f(x)|$, is continuous at $c$;
3. $\max\{f,g\}$ and $\min\{f,g\}$, defined pointwise by
   $x \mapsto \max\{f(x), g(x)\}$ and $x \mapsto \min\{f(x), g(x)\}$
   ([[def-max-min]]), are continuous at $c$;
4. if $g(c) \ne 0$ then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the
   point $c$ lies in $A_0$ and the quotient
   $(f/g)|_{A_0} : A_0 \to \mathbb{R}$, $x \mapsto f(x)/g(x)$, is continuous at
   $c$ as a function on $A_0$.

Moreover, with no hypothesis at all:

5. every constant function $A \to \mathbb{R}$ and the identity
   $\mathrm{id} : A \to \mathbb{R}$, $x \mapsto x$, are continuous on $A$; hence
   so is $x \mapsto x^{n}$ for every $n \in \mathbb{N}$
   ([[def-integer-power]]), and hence so is every **polynomial function**
   $x \mapsto a_0 + a_1 x + \dots + a_n x^{n}$ with real coefficients.

Consequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$,
$\alpha f$, $fg$, $|f|$, $\max\{f,g\}$ and $\min\{f,g\}$, and
$(f/g)|_{A_0}$ is continuous on $A_0$.

**Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**,
and $g$ may well vanish at points of $A$ far from $c$. The hypothesis is
$g(c) \ne 0$, not "$g$ nowhere zero"; what it buys is that $c$ itself lies in
the smaller domain, which is what makes continuity there mean anything.

**Nothing here is proved through a sequence.** Claims 1 and 4 are read off from
[[thm-algebra-of-function-limits]], which is itself proved from $\varepsilon$
and $\delta$, and claims 2, 3 and 5 are proved directly below. So no choice
principle is used anywhere in this item.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, functions $f, g : A \to \mathbb{R}$, a real $\alpha$, a point $c \in A$ at which $f$ and $g$ are continuous, and, for claim 4, the hypothesis $g(c) \ne 0$ together with $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$.

[L1] Continuity at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$ ([[def-continuity-real]]).

[L2] A point of $A$ is either a limit point of $A$ or an isolated point of $A$, and never both; at an isolated point of its domain every function is continuous; at a limit point $c$ of $A$, continuity of $f$ at $c$ is exactly the statement that the limit of $f$ at $c$ exists and equals $f(c)$ ([[def-continuity-real]], [[def-limit-point-r]], [[def-neighbourhood-r]], [[def-function-limit]]).

[L3] Algebra of function limits at a limit point $c$ of $A$: if the limits of $f$ and $g$ at $c$ exist with values $L$ and $M$, then the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist with values $L+M$, $\alpha L$ and $LM$; and if $M \ne 0$ then $c$ is a limit point of $A_0$, and the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $L/M$ ([[thm-algebra-of-function-limits]]).

[L4] Sign preservation: if the limit of $g$ at a limit point $c$ of $A$ exists and is nonzero, then $c$ is a limit point of $A_0 = \{\, x \in A : g(x) \ne 0 \,\}$ ([[lem-sign-preservation-near-a-limit]]).

[L5] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$ ([[cor-of-reverse-triangle]]); and $|u| \ge 0$, $|u| = 0$ exactly when $u = 0$, $|uv| = |u||v|$ ([[lem-of-abs-value]]).

[L6] Maximum and minimum of a two-element set of reals exist ([[lem-finite-set-has-max]], [[def-max-min]]), and for all reals $u, v$ one has $\max\{u,v\} = \tfrac{1}{2}\bigl(u + v + |u-v|\bigr)$ and $\min\{u,v\} = \tfrac{1}{2}\bigl(u + v - |u-v|\bigr)$.

[L7] Ordered-field arithmetic in $\mathbb{R}$: trichotomy and totality of the order, the field identities, and $0 < 1$ so that $2 \ne 0$ and $t/2$ is defined ([[def-ordered-field]], [[def-field]]).

[L8] Integer powers: $a^{0} = 1$ and $a^{n+1} = a^{n} \cdot a$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 **Justification of the identity in [L6].** Let $u, v \in \mathbb{R}$. By totality either $u \ge v$ or $v \ge u$. If $u \ge v$ then $u - v \ge 0$, so $|u-v| = u-v$ and $\tfrac{1}{2}(u+v+|u-v|) = \tfrac{1}{2}(2u) = u = \max\{u,v\}$, while $\tfrac{1}{2}(u+v-|u-v|) = v = \min\{u,v\}$. If $v \ge u$ the same computation with the roles exchanged applies, since $|u-v| = v-u$ there. [L5, L6, L7]

1.2 **The isolated case.** Suppose $c$ is an isolated point of $A$, say $N_{\eta}(c) \cap A = \{c\}$ with $\eta > 0$ real. Then every function on $A$ is continuous at $c$ by [L2], which gives claims 1, 2 and 3 at once. For claim 4, assume $g(c) \ne 0$; then $c \in A_0$, and $N_{\eta}(c) \cap A_0 \subseteq N_{\eta}(c) \cap A = \{c\}$ with $c$ in the left-hand side, so $c$ is an isolated point of $A_0$ and every function on $A_0$, in particular $(f/g)|_{A_0}$, is continuous at $c$. [L2]

1.3 **Claim 2, at any point of $A$.** Let a real $\varepsilon > 0$ be given and let $\delta > 0$ be as in [L1] for $f$ and this $\varepsilon$. For $x \in A$ with $|x - c| < \delta$ the reverse triangle inequality gives $\bigl||f(x)| - |f(c)|\bigr| \le |f(x) - f(c)| < \varepsilon$. So $|f|$ is continuous at $c$, and no case distinction was needed. [L1, L5]

1.4 **Claim 5, constants and the identity.** If $f$ is constant then $|f(x) - f(c)| = 0 < \varepsilon$ for every $x \in A$ and every real $\varepsilon > 0$, so any $\delta > 0$ serves. For the identity, given a real $\varepsilon > 0$ take $\delta := \varepsilon$: every $x \in A$ with $|x - c| < \delta$ has $|\mathrm{id}(x) - \mathrm{id}(c)| = |x - c| < \varepsilon$. Both are continuous at every point of $A$. [L1, L5, L7]

1.5 **The limit-point case, claim 1.** Suppose $c$ is a limit point of $A$. By [L2] the limits of $f$ and of $g$ at $c$ exist and equal $f(c)$ and $g(c)$. By [L3] the limits of $f+g$, $\alpha f$ and $fg$ at $c$ exist and equal $f(c)+g(c)$, $\alpha f(c)$ and $f(c)g(c)$, which are exactly the values of those three functions at $c$; by [L2] again, each of them is continuous at $c$. [L2, L3]

1.6 **The limit-point case, claim 4.** Suppose $c$ is a limit point of $A$ and $g(c) \ne 0$. Then $c \in A_0$, and by [L4] the point $c$ is a limit point of $A_0$. By [L3] the limit of $(f/g)|_{A_0}$ at $c$ exists and equals $f(c)/g(c)$, which is the value of $(f/g)|_{A_0}$ at $c$; by [L2] applied on the domain $A_0$, that function is continuous at $c$. [L2, L3, L4]

2.1 **Claims 1 and 4 in general.** By [L2] the point $c$ is either isolated in $A$ or a limit point of $A$; step 1.2 settles the first case and steps 1.5 and 1.6 the second. So claims 1 and 4 hold as stated. [step 1.2, step 1.5, step 1.6, L2]

3.1 **Claim 3.** By claim 1 the function $f - g = f + (-1)g$ is continuous at $c$, by step 1.3 so is $|f-g|$, and by claim 1 again so are $f + g + |f-g|$ and its scalar multiple by $1/2$. By step 1.1 that scalar multiple is the function $x \mapsto \max\{f(x), g(x)\}$, so the maximum is continuous at $c$; the same argument with $-|f-g|$ gives the minimum. [step 1.1, step 1.3, step 2.1, L6, L7]

3.2 **Claim 5, powers and polynomials.** The map $x \mapsto x^{0}$ is the constant $1$ and $x \mapsto x^{1}$ is the identity, both continuous on $A$ by step 1.4; and if $x \mapsto x^{n}$ is continuous on $A$ then so is $x \mapsto x^{n+1} = x^{n} \cdot x$, being a product of two functions continuous on $A$ by step 2.1. By induction on $n$, $x \mapsto x^{n}$ is continuous on $A$ for every $n \in \mathbb{N}$. A polynomial function $a_0 + a_1x + \dots + a_nx^{n}$ is obtained from these by finitely many scalar multiplications and additions, each of which preserves continuity by step 2.1. [step 1.4, step 2.1, L8]

4.1 Claims 1 to 5 are proved, all of them at an arbitrary point $c$ of $A$ and therefore, applied at every point, on the whole of $A$; and no sequence and no choice principle was used. [step 1.3, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Why the two-case shape, and why it is not an inconvenience.** Continuity is defined at every point of the domain, including isolated points, where no limit exists ([[def-continuity-real]]). The algebra of limits therefore cannot be applied blindly; but at an isolated point every function is continuous, so the case is settled before it is opened. Claims 2 and 5 are proved directly from $\varepsilon$ and $\delta$ and need no case distinction at all.

- **Absolute value, maximum and minimum are not in [[thm-algebra-of-function-limits]]**, and the reason is that they are not needed there. They are needed here: the extreme value theorem and the one-dimensional fixed point theorem both build auxiliary functions out of maxima, minima and differences, and [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]] builds its witnesses out of $|x - x_0|$ and quotients.

- **The converse of claim 2 is false**: $|f|$ may be continuous while $f$ is continuous nowhere. The function equal to $1$ on $\mathbb{Q}$ and to $-1$ elsewhere has constant absolute value; that it is nowhere continuous follows from the argument of [[cex-dirichlet-is-nowhere-continuous]] applied verbatim, since that argument uses only that the two values are distinct.
````

### `thm-caratheodory-characterisation`

````markdown
---
id: thm-caratheodory-characterisation
kind: theorem
title: "Carathéodory's characterisation: $f$ is differentiable at $c$ if and only if there is $\\varphi : A \\to \\mathbb{R}$, continuous at $c$, with $f(x) - f(c) = \\varphi(x)(x - c)$ for every $x \\in A$, and then $\\varphi$ is unique and $\\varphi(c) = f'(c)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-derivative, def-continuity-real, def-function-limit, lem-function-limit-unique, def-limit-point-r, lem-limit-is-local]
justified_by: []
aliases: [thm-caratheodory-derivative]
landmark: true
short: "Carathéodory's characterisation"
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
    - title: "Carathéodory's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Carath%C3%A9odory%27s_theorem"
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "S. Kuhn, The Derivative à la Carathéodory, Amer. Math. Monthly 98 (1991)"
      url: "https://en.wikipedia.org/wiki/Constantin_Carath%C3%A9odory"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
limit point of $A$ ([[def-limit-point-r]]). The following are equivalent.

1. $f$ is differentiable at $c$ ([[def-derivative]]).
2. There is a function $\varphi : A \to \mathbb{R}$, continuous at $c$
   ([[def-continuity-real]]), with
   $$f(x) - f(c) \;=\; \varphi(x)\,(x - c) \qquad \text{for every } x \in A .$$

When they hold, the function $\varphi$ of claim 2 is **unique** and satisfies
$\varphi(c) = f'(c)$.

**What the reformulation buys.** Claim 2 contains no quotient and no limit: it
is an algebraic identity plus a continuity hypothesis at one point. Every
differentiation rule on this page is proved by exhibiting the factor $\varphi$
for the new function and reading its continuity off the algebra and composition
theorems for continuous functions. In particular the chain rule becomes a
one-line substitution, with none of the case analysis that the
difference-quotient proof needs where the inner increment vanishes.

**The hypothesis that $c$ is a limit point of $A$ is used in both directions.**
It is what makes $f'(c)$ a defined symbol at all ([[def-derivative]]), and it is
what makes continuity of $\varphi$ at $c$ equivalent to a statement about the
limit of $\varphi$ there ([[def-continuity-real]], clause 1). At an isolated
point of $A$ claim 2 holds for *every* $f$, with $\varphi$ arbitrary off $c$,
because every function is continuous at an isolated point; claim 1 is not even a
statement there.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a point $c \in A$ that is a limit point of $A$ ([[def-limit-point-r]]).

[L1] Differentiability at $c$ ([[def-derivative]]): the difference quotient $q(x) := (f(x) - f(c))/(x - c)$ is a function on $A \setminus \{c\}$, the point $c$ is a limit point of $A \setminus \{c\}$, and $f$ is differentiable at $c$ exactly when $\lim_{x \to c} q(x)$ exists, its value then being $f'(c)$; moreover, for any $Q : A \to \mathbb{R}$ agreeing with $q$ on $A \setminus \{c\}$ and any real $L$, the conditions $\lim_{x \to c} Q(x) = L$ and $\lim_{x \to c} q(x) = L$ are the same condition, since the clause $0 < |x - c|$ removes $x = c$ from both quantifiers.

[L2] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - L| < \varepsilon$.

[L3] Continuity at a limit point ([[def-continuity-real]], clause 1): for $c \in A$ a limit point of $A$, a function $\psi : A \to \mathbb{R}$ is continuous at $c$ if and only if $\lim_{x \to c} \psi(x)$ exists and equals $\psi(c)$.

[L4] At a limit point of its domain a function has at most one limit ([[lem-function-limit-unique]]).

[L5] Locality (claim 1 of [[lem-limit-is-local]]): if two functions on $A$ agree at every $x \in A$ with $0 < |x - c| < \eta$ for some real $\eta > 0$, then for every real $L$ one has $\lim_{x \to c} = L$ for the first exactly when it holds for the second.

## Proof

**Proof technique:** direct.

1.1 **Claim 1 implies claim 2: the factor.** Assume $f$ is differentiable at $c$, and define $\varphi : A \to \mathbb{R}$ by $\varphi(x) := (f(x) - f(c))/(x - c)$ for $x \in A$ with $x \ne c$, and $\varphi(c) := f'(c)$. This is a function on the whole of $A$, since every $x \in A$ falls under exactly one of the two clauses and the division is by a nonzero number. [L1, construct]

1.2 **Claim 2 implies claim 1: the hypothesis.** Assume instead that some $\varphi : A \to \mathbb{R}$ is continuous at $c$ and satisfies $f(x) - f(c) = \varphi(x)(x - c)$ for every $x \in A$. [assume-hyp]

1.3 **Uniqueness.** Let $\varphi$ and $\psi$ both be as in claim 2. For $x \in A$ with $x \ne c$ the identity gives $\varphi(x)(x - c) = f(x) - f(c) = \psi(x)(x - c)$, and dividing by $x - c \ne 0$ gives $\varphi(x) = \psi(x)$; so the two agree on $A \setminus \{c\}$, hence at every $x \in A$ with $0 < |x - c| < 1$. By [L3] each has a limit at $c$, equal to its own value there; by [L5] those two limits are limits of functions agreeing near $c$, so by [L4] they are equal, that is $\varphi(c) = \psi(c)$. Hence $\varphi = \psi$. [L3, L4, L5]

2.1 **The identity holds for the factor built in step 1.1.** For $x \in A$ with $x \ne c$, multiplying the defining equation $\varphi(x) = (f(x) - f(c))/(x - c)$ by $x - c$ gives $\varphi(x)(x - c) = f(x) - f(c)$; and at $x = c$ both sides are $0$, since $f(c) - f(c) = 0$ and $\varphi(c)(c - c) = 0$. So the identity of claim 2 holds for every $x \in A$. [step 1.1]

2.2 **The factor built in step 1.1 is continuous at $c$.** That $\varphi$ agrees with the difference quotient $q$ at every point of $A \setminus \{c\}$ is its definition, so by [L1] the limit $\lim_{x \to c} \varphi(x)$ exists and equals $f'(c)$, which is $\varphi(c)$. Since $c$ is a limit point of $A$, [L3] turns that into continuity of $\varphi$ at $c$. [step 1.1, L1, L3]

2.3 **Under the hypothesis of step 1.2, $\varphi$ extends the difference quotient.** For $x \in A$ with $x \ne c$, dividing the identity by $x - c \ne 0$ gives $q(x) = \varphi(x)(x-c)/(x-c) = \varphi(x)$. So $\varphi$ agrees with $q$ at every point of $A \setminus \{c\}$. [step 1.2]

2.4 **Under the hypothesis of step 1.2, $\varphi$ has a limit at $c$.** Continuity of $\varphi$ at the limit point $c$ gives, by [L3], that $\lim_{x \to c} \varphi(x)$ exists and equals $\varphi(c)$. [step 1.2, L3]

3.1 **Claim 2 implies claim 1.** By step 2.3 the function $\varphi$ agrees with $q$ off $c$, so the last clause of [L1] applies with $Q := \varphi$ and $L := \varphi(c)$: from $\lim_{x \to c} \varphi(x) = \varphi(c)$, given by step 2.4, it follows that $\lim_{x \to c} q(x) = \varphi(c)$. By [L1] again, $f$ is differentiable at $c$ and $f'(c) = \varphi(c)$. [step 2.3, step 2.4, L1, L2]

4.1 Both implications and both supplementary claims are proved: claim 1 gives claim 2 by steps 1.1, 2.1 and 2.2, with $\varphi(c) = f'(c)$ by construction; claim 2 gives claim 1 by step 3.1, with $\varphi(c) = f'(c)$ established there; and the factor is unique by step 1.3. [step 1.1, step 1.3, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **The identity at $x = c$ is empty, and that is the point.** Both sides vanish there whatever $\varphi(c)$ is, so the identity alone determines $\varphi$ only off $c$; it is the *continuity* hypothesis that pins the remaining value, and it pins it to $f'(c)$. Drop continuity and claim 2 becomes true for every $f$ whatsoever, with $\varphi(c)$ arbitrary.

- **Why this is not circular.** The proof of claim 2 from claim 1 builds $\varphi$ out of the very quotient whose limit is $f'(c)$, so nothing new is asserted in that direction. The content is the other direction: a factorisation with a factor merely continuous at one point already forces the quotient to converge. That is the direction every rule on this page uses.

- **The factor is a genuinely useful object, not a device.** For $f(x) = x^{n}$ it can be written down in closed form, as the polynomial $\varphi(x) = \sum_{k < n} c^{k} x^{\,n-1-k}$ supplied by [[lem-power-difference-factorisation]]; the companion page writes that factor out and differentiates a composite with it.
````

### `thm-chain-rule`

````markdown
---
id: thm-chain-rule
kind: theorem
title: "The chain rule, in one line from Carathéodory: if $g$ is differentiable at $c$ and $f$ is differentiable at $g(c)$, then $f \\circ g$ is differentiable at $c$ with $(f \\circ g)'(c) = f'(g(c))\\,g'(c)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derivative, thm-caratheodory-characterisation, thm-composition-of-continuous-functions, cor-differentiable-implies-continuous, thm-algebra-of-continuous-functions, def-continuity-real, def-limit-point-r]
justified_by: []
aliases: []
landmark: true
short: "the chain rule"
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
    - title: "Chain rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Chain_rule"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.5)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $A, B \subseteq \mathbb{R}$, let $g : A \to \mathbb{R}$ with
$g[A] \subseteq B$ and let $f : B \to \mathbb{R}$, so that the composite
$f \circ g : A \to \mathbb{R}$ is defined. Let $c \in A$ be a limit point of
$A$ ([[def-limit-point-r]]) at which $g$ is differentiable
([[def-derivative]]), put $b := g(c)$, and suppose $b$ is a limit point of $B$
at which $f$ is differentiable. Then $f \circ g$ is differentiable at $c$ and

$$(f \circ g)'(c) \;=\; f'\bigl(g(c)\bigr)\,g'(c) .$$

**Both limit-point hypotheses are needed, and neither is automatic.** That $c$
is a limit point of $A$ is what makes $g'(c)$ and $(f \circ g)'(c)$ defined
symbols; that $b = g(c)$ is a limit point of $B$ is what makes $f'(b)$ one.
Nothing forces the second: $g$ may be differentiable at $c$ and send $c$ to an
isolated point of $B$, and there $f'(b)$ is not defined and the formula asserts
nothing.

**No case analysis appears anywhere.** The naive difference-quotient proof
writes $\frac{f(g(x)) - f(g(c))}{g(x) - g(c)} \cdot \frac{g(x) - g(c)}{x - c}$
and then has to say what happens where $g(x) = g(c)$, which may occur at points
arbitrarily close to $c$. Carathéodory's factorisation never divides by the
inner increment, so the difficulty does not arise.

## Facts & Assumptions

**Given:** Sets $A, B \subseteq \mathbb{R}$, functions $g : A \to \mathbb{R}$ with $g[A] \subseteq B$ and $f : B \to \mathbb{R}$, a point $c \in A$ that is a limit point of $A$ at which $g$ is differentiable, and the point $b := g(c) \in B$, a limit point of $B$ at which $f$ is differentiable ([[def-derivative]], [[def-limit-point-r]]).

[L1] Carathéodory's characterisation ([[thm-caratheodory-characterisation]]), used in both directions: for $D \subseteq \mathbb{R}$, a point $p \in D$ that is a limit point of $D$ and $h : D \to \mathbb{R}$, the function $h$ is differentiable at $p$ if and only if there is $\eta : D \to \mathbb{R}$, continuous at $p$, with $h(y) - h(p) = \eta(y)(y - p)$ for every $y \in D$, and then $\eta(p) = h'(p)$.

[L2] Algebra of continuous functions ([[thm-algebra-of-continuous-functions]], claim 1): a product of two functions continuous at a point of their common domain is continuous there.

[L3] Composition of continuous functions ([[thm-composition-of-continuous-functions]]): if $g : A \to \mathbb{R}$ has $g[A] \subseteq B$ and is continuous at $c \in A$, and if $\eta : B \to \mathbb{R}$ is continuous at $g(c)$, then $\eta \circ g$ is continuous at $c$ ([[def-continuity-real]]).

[L4] A function differentiable at a point is continuous there ([[cor-differentiable-implies-continuous]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], applied to $g$ on $A$ at $c$, fix $\psi : A \to \mathbb{R}$, continuous at $c$, with $g(x) - g(c) = \psi(x)(x - c)$ for every $x \in A$ and $\psi(c) = g'(c)$. [L1, choose]

1.2 By [L1], applied to $f$ on $B$ at $b$, fix $\varphi : B \to \mathbb{R}$, continuous at $b$, with $f(y) - f(b) = \varphi(y)(y - b)$ for every $y \in B$ and $\varphi(b) = f'(b)$. [L1, choose]

2.1 **The factorisation.** Let $x \in A$. Then $g(x) \in B$, so taking $y := g(x)$ in step 1.2 gives $f(g(x)) - f(b) = \varphi(g(x))\bigl(g(x) - b\bigr)$, and $g(x) - b = g(x) - g(c) = \psi(x)(x-c)$ by step 1.1. Since $(f \circ g)(c) = f(g(c)) = f(b)$, this reads $(f \circ g)(x) - (f \circ g)(c) = \chi(x)(x - c)$ for every $x \in A$, where $\chi : A \to \mathbb{R}$ is the pointwise product $\chi := (\varphi \circ g)\,\psi$. [step 1.1, step 1.2]

2.2 **The outer factor is continuous at $c$.** By [L4] the function $g$ is continuous at $c$; by step 1.2 the function $\varphi$ is continuous at $b = g(c)$; and $g[A] \subseteq B$. So $\varphi \circ g$ is continuous at $c$ by [L3]. [step 1.2, L3, L4]

3.1 **The factor is continuous at $c$, with the right value.** $\chi$ is the product of $\varphi \circ g$, continuous at $c$ by step 2.2, with $\psi$, continuous at $c$ by step 1.1, so $\chi$ is continuous at $c$ by [L2]; and $\chi(c) = \varphi(g(c))\,\psi(c) = \varphi(b)\,\psi(c) = f'(b)\,g'(c)$. [step 1.1, step 2.2, L2]

4.1 By step 2.1 the function $\chi : A \to \mathbb{R}$ factors the increment of $f \circ g$ at $c$, and by step 3.1 it is continuous at $c$. So [L1], applied to $f \circ g$ on $A$ at the limit point $c$, gives that $f \circ g$ is differentiable at $c$ with $(f \circ g)'(c) = \chi(c) = f'(g(c))\,g'(c)$. [step 2.1, step 3.1, L1] ∎

## Remarks

- **Where the classical proof goes wrong, precisely.** It divides by $g(x) - g(c)$, which may vanish at points arbitrarily close to $c$ even when $g$ is differentiable at $c$ with $g'(c) = 0$; the usual repair defines an auxiliary function equal to the outer quotient off the bad set and to $f'(b)$ on it, and then proves that auxiliary function continuous. That auxiliary function is $\varphi \circ g$, and [[thm-caratheodory-characterisation]] is the observation that it exists before any repair is attempted.

- **What is composed is continuity, not differentiability.** The only theorem about composites used above is [[thm-composition-of-continuous-functions]], and it needs no side hypothesis, unlike the corresponding statement for limits. That is the whole reason the proof has no cases.

- **The formula is about the point $g(c)$, not about $g$ near $c$.** Both derivatives on the right are taken at single points, and the theorem says nothing about $f$ on the image of any neighbourhood of $c$. In particular no hypothesis is placed on $g[A]$ beyond its lying in $B$.
````

### `thm-composition-of-continuous-functions`

````markdown
---
id: thm-composition-of-continuous-functions
kind: theorem
title: "A composite of continuous functions is continuous, with no side hypothesis of the kind the composition of limits needs"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuity-real, thm-composition-of-function-limits, fs-naive-composition-of-limits, def-function-limit, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "composition of continuous functions"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.7)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "MIT 18.100B lecture notes"
      url: "https://math.mit.edu/classes/18.100/100B.S1-Lects.html"
pipeline_run: null
---

## Statement

Let $A, B \subseteq \mathbb{R}$, let $g : A \to \mathbb{R}$ with
$g(A) \subseteq B$, and let $f : B \to \mathbb{R}$, so that the composite
$f \circ g : A \to \mathbb{R}$ is defined. Let $c \in A$. If $g$ is continuous
at $c$ and $f$ is continuous at $g(c) \in B$, then $f \circ g$ is continuous at
$c$ ([[def-continuity-real]]).

Consequently, if $g$ is continuous on $A$ and $f$ is continuous on $B$, then
$f \circ g$ is continuous on $A$.

**No side hypothesis is needed, and that is the whole point.** The composition
theorem for limits, [[thm-composition-of-function-limits]], must assume one of
two extra conditions: either $L \in B$ with $f(L) = M$, or $g \ne L$ on a
punctured neighbourhood of $c$; with both dropped the statement is false, which
is [[fs-naive-composition-of-limits]]. The first of those conditions is exactly
*continuity of $f$ at $L$* written out, so under the hypotheses above it holds
automatically and nothing has to be assumed. The mechanism is visible in the
proof: [[def-continuity-real]] quantifies over $|y - b| < \rho$ rather than over
$0 < |y - b| < \rho$, so the value $y = b$ that the limit version cannot control
is precisely the one the continuity hypothesis does control.

## Facts & Assumptions

**Given:** Sets $A, B \subseteq \mathbb{R}$, functions $g : A \to \mathbb{R}$ with $g(A) \subseteq B$ and $f : B \to \mathbb{R}$, a point $c \in A$ at which $g$ is continuous, and the hypothesis that $f$ is continuous at $b := g(c) \in B$.

[L1] Continuity of $g$ at $c$: for every real $\rho > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|g(x) - g(c)| < \rho$ ([[def-continuity-real]]).

[L2] Continuity of $f$ at $b$: for every real $\varepsilon > 0$ there is a real $\rho > 0$ such that every $y \in B$ with $|y - b| < \rho$ satisfies $|f(y) - f(b)| < \varepsilon$ ([[def-continuity-real]]).

[L3] Neighbourhoods and the unpunctured quantifier: the condition in [L2] is imposed at every $y \in B$ with $|y - b| < \rho$, the value $y = b$ included ([[def-neighbourhood-r]], [[def-continuity-real]]).

## Proof

**Proof technique:** direct.

1.1 Write $b := g(c)$; by hypothesis $b \in B$, since $g(A) \subseteq B$ and $c \in A$. Also $(f \circ g)(c) = f(b)$. [given]

1.2 Let a real $\varepsilon > 0$ be given. By [L2] fix a real $\rho > 0$ such that every $y \in B$ with $|y - b| < \rho$ satisfies $|f(y) - f(b)| < \varepsilon$. [L2, choose]

2.1 By [L1], applied with this $\rho$, fix a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|g(x) - b| < \rho$. [step 1.2, L1, choose]

3.1 Let $x \in A$ with $|x - c| < \delta$. Then $g(x) \in B$ and $|g(x) - b| < \rho$ by step 2.1, so $y := g(x)$ is admissible in step 1.2 and gives $\bigl|f(g(x)) - f(b)\bigr| < \varepsilon$, that is $\bigl|(f \circ g)(x) - (f \circ g)(c)\bigr| < \varepsilon$. Note that the case $g(x) = b$ is included, by [L3]. [step 1.1, step 1.2, step 2.1, L3]

4.1 The real $\varepsilon > 0$ was arbitrary and a $\delta > 0$ was produced for it, so $f \circ g$ is continuous at $c$; applying this at every point of $A$ gives continuity of $f \circ g$ on $A$ whenever $g$ is continuous on $A$ and $f$ on $B$. [step 3.1, L1, L2] ∎

## Remarks

- **The contrast with limits, in one sentence.** [[thm-composition-of-function-limits]] cannot control $f$ at the single value $L$, because [[def-function-limit]] never evaluates $f$ there; continuity of $f$ at that value is exactly the missing information, and it is hypothesis (i) of that theorem. So the present theorem is not a strengthening obtained by cleverness: it is the composition theorem under the hypothesis that makes the obstruction vanish.

- **What is not claimed.** Continuity of $f \circ g$ at $c$ does not follow from continuity of $g$ at $c$ alone together with $f$ merely having a limit at $b$; nor does it follow from continuity of $f$ at $b$ together with $g$ merely having a limit at $c$, since then $g(c)$ need not be $b$ at all. Both hypotheses above are hypotheses about the same two points, $c$ and $g(c)$.
````

### `thm-continuous-inverse`

````markdown
---
id: thm-continuous-inverse
kind: theorem
title: "Continuous inverse theorem: a continuous injective $f$ on an interval $I$ is a bijection onto the order-convex set $f[I]$, and the inverse $g : f[I] \\to I$ is continuous and strictly monotone in the same sense as $f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [thm-continuous-injection-on-an-interval-is-strictly-monotone, def-monotone-function, cor-continuous-image-of-an-interval-is-an-interval, lem-monotone-with-interval-image-is-continuous, def-continuity-real, def-interval, def-injection-surjection-bijection, thm-algebra-of-continuous-functions, thm-composition-of-continuous-functions]
justified_by: []
aliases: [thm-inverse-function-continuity]
landmark: true
short: "continuous inverse theorem"
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
    - title: "Inverse function theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inverse_function_theorem"
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Real Analysis Notes 10 (California State University, Dominguez Hills)"
      url: "https://math.csudh.edu/~pong/a3/Notes_10.html"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and
injective ([[def-injection-surjection-bijection]]). Then:

1. $f$ is strictly monotone ([[def-monotone-function]]);
2. $f[I]$ is order-convex;
3. the map $f : I \to f[I]$ is a bijection, so there is exactly one
   $g : f[I] \to I$ with $g(f(x)) = x$ for every $x \in I$ and $f(g(u)) = u$ for
   every $u \in f[I]$;
4. $g$ is strictly monotone in the same sense as $f$: increasing if $f$ is
   increasing, decreasing if $f$ is decreasing;
5. $g$ is continuous on $f[I]$.

**"Interval" means "order-convex" here**, as throughout this library
([[thm-connected-subsets-of-r-are-intervals]] is what licenses the word and
[[def-interval]] records that the classification of order-convex sets into the
nine written forms is not proved here). No compactness and no boundedness is
assumed: $I$ may be open, half-open, unbounded, or a single point.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$ and a continuous injective $f : I \to \mathbb{R}$.

[L1] A continuous injective function on an order-convex subset of $\mathbb{R}$ is strictly monotone ([[thm-continuous-injection-on-an-interval-is-strictly-monotone]]).

[L2] The image of an order-convex subset of the domain under a continuous function is order-convex ([[cor-continuous-image-of-an-interval-is-an-interval]], claim 1).

[L3] If $J \subseteq \mathbb{R}$ is order-convex, $h : J \to \mathbb{R}$ satisfies $h(u) \le h(v)$ whenever $u, v \in J$ and $u \le v$, and $h[J]$ is order-convex, then $h$ is continuous on $J$ ([[lem-monotone-with-interval-image-is-continuous]]).

[L4] Sums, scalar multiples and composites of continuous functions are continuous; in particular $u \mapsto -u$ is continuous on every subset of $\mathbb{R}$, being the scalar multiple $(-1)\,\mathrm{id}$ of the identity ([[thm-algebra-of-continuous-functions]], [[thm-composition-of-continuous-functions]]).

[L5] $f$ is injective, so $f : I \to f[I]$ is a bijection and has a unique two-sided inverse ([[def-injection-surjection-bijection]]).

[L6] $f$ increasing means $f(x) < f(y)$ whenever $x < y$ in $I$; $-f$ is decreasing exactly when $f$ is increasing, and $-S$ is order-convex exactly when $S$ is ([[def-monotone-function]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is immediate: $f$ is continuous and injective on the order-convex set $I$, hence strictly monotone. [L1]

1.2 Claim 2 is immediate: $I$ is order-convex and $f$ is continuous on $I$, so $f[I]$ is order-convex. [L2]

1.3 Claim 3 is immediate: $f$ is injective and $f : I \to f[I]$ is onto its image by definition of the image, so it is a bijection and has a unique two-sided inverse $g : f[I] \to I$. [L5]

2.1 Suppose $f$ is increasing, and let $u, v \in f[I]$ with $u < v$. Write $u = f(p)$ and $v = f(q)$ with $p = g(u)$ and $q = g(v)$ in $I$. If $q \le p$ then $f(q) \le f(p)$, since $q = p$ gives equality and $q < p$ gives $f(q) < f(p)$; that is $v \le u$, contradicting $u < v$. Hence $p < q$, that is $g(u) < g(v)$, and $g$ is increasing. [step 1.1, step 1.3, L6]

2.2 Suppose instead that $f$ is decreasing, and put $F := -f$, that is $F(x) := -f(x)$. Then $F$ is continuous on $I$, it is injective because $f$ is, and it is increasing. [step 1.1, L4, L6]

3.1 Still with $f$ increasing: $g$ satisfies $g(u) \le g(v)$ whenever $u \le v$ in $f[I]$, by step 2.1 when $u < v$ and trivially when $u = v$; the domain $f[I]$ is order-convex by step 1.2; and the image $g[f[I]]$ is $I$, which is order-convex, because $g$ is onto $I$. So the monotone-with-interval-image criterion applies and $g$ is continuous on $f[I]$. [step 1.2, step 1.3, step 2.1, L3]

4.1 By steps 2.1 and 3.1 applied to $F$, the inverse $G : F[I] \to I$ of $F$ is increasing and continuous, and $F[I] = -f[I]$ is order-convex. [step 2.1, step 3.1, step 2.2]

5.1 For $u \in f[I]$ one has $-u \in F[I]$ and $G(-u) = g(u)$, since $F(g(u)) = -f(g(u)) = -u$ and $G$ is the inverse of $F$. So $g$ is the composite of the continuous map $u \mapsto -u$ from $f[I]$ into $F[I]$ with the continuous $G$, hence continuous on $f[I]$. [step 1.3, step 4.1, L4]

6.1 In that case $g$ is decreasing: for $u < v$ in $f[I]$ one has $-v < -u$ in $F[I]$, so $G(-v) < G(-u)$ because $G$ is increasing, that is $g(v) < g(u)$. [step 4.1, step 5.1]

7.1 Claims 4 and 5 are now proved in both cases: for $f$ increasing by steps 2.1 and 3.1, and for $f$ decreasing by steps 5.1 and 6.1; and by step 1.1 there is no other case. [step 1.1, step 2.1, step 3.1, step 5.1, step 6.1] ∎

## Remarks

- **No epsilon-delta argument appears anywhere.** Continuity of the inverse is obtained entirely from [[lem-monotone-with-interval-image-is-continuous]], whose hypotheses are exactly the two facts the theorem has already established: the inverse is monotone, and its image is the order-convex set $I$. The decreasing case is reduced to the increasing one by composing with $u \mapsto -u$ rather than repeating the argument.

- **What the theorem is used for.** It is the tool that turns a strictly monotone continuous bijection into a continuous one in the other direction, and the standard elementary functions are built with it: the companion page derives the continuity of $x \mapsto x^{1/n}$ this way.
````

