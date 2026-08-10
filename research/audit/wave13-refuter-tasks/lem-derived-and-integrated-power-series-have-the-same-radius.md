## Selection reasons

- critical risk (10): 10 declared dependencies; 8 cited facts; 6 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language
- top-20 manifest-edge consumer (10 outgoing relationships)

## Target item — `lem-derived-and-integrated-power-series-have-the-same-radius`

Normalized current SHA-256: `22d83b94bc45d4dab1d0f6bc77b04ea022aa5ad6566a16a257bd843a12c7c5fc`

The complete exact-current item follows, including frontmatter:

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

## Wave 13 provenance row

```json
{
  "id": "lem-derived-and-integrated-power-series-have-the-same-radius",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Power_series",
    "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
  ],
  "rationale": "The sources state termwise differentiation and integration without changing the radius. The item isolates a bespoke three-series comparison lemma and gives its own coefficient-bound proof, so the statement is a semantic extraction and the proof is locally generated.",
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
      "source": "thm-geometric-series",
      "source_section": "Statement",
      "quote": "Let $r \\in \\mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]),\nso that $r^0 = 1$ for every $r$, including $r = 0$.\n\n1. If $|r| < 1$ then the series $\\sum r^k$ converges ([[def-series]]) and\n   $$\\sum_{k=0}^{\\infty} r^{k} \\;=\\; \\frac{1}{1-r} .$$\n2. If $|r| \\ge 1$ then $\\sum r^k$ diverges.\n\nThe series starts at $k = 0$ and its first term is $r^0 = 1$; in particular\n$\\sum_{k=0}^{\\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to\n$1$. Which starting index is meant has to be said, and it is said here.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-power-monotone",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let\n$a, b \\in \\mathbb{R}$ and let $n \\in \\mathbb{N}$, with powers as in\n[[def-integer-power]].\n\n1. **Signs.** If $a \\ge 0$ then $a^n \\ge 0$, and if $a > 0$ then $a^n > 0$.\n2. **Strict monotonicity in the base.** If $0 \\le a < b$ and $n \\ge 1$ then $a^n < b^n$. Consequently, for $a, b \\ge 0$ and $n \\ge 1$: $a < b \\iff a^n < b^n$ and $a \\le b \\iff a^n \\le b^n$, and $x \\mapsto x^n$ is injective on $\\{x \\in \\mathbb{R} : x \\ge 0\\}$.\n3. **Comparison with the base.** If $a \\ge 1$ and $n \\ge 1$ then $a^n \\ge a \\ge 1$; if $a > 1$ and $n \\ge 1$ then $a^n \\ge a > 1$; and if $0 \\le a \\le 1$ then $a^n \\le 1$.\n4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-cauchy-product-absolute",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals whose series both converge\nabsolutely ([[def-absolute-and-conditional-convergence]]), with sums $A$ and $B$,\nand let $(c_n)$ be their Cauchy product ([[def-cauchy-product]]). Then $\\sum c_n$\nconverges **absolutely**, and\n\n$$\\sum_{n=0}^{\\infty} c_n \\;=\\; A\\,B .$$\n\nMoreover $\\sum_{n=0}^{\\infty} |c_n| \\le \\bigl(\\sum_{k=0}^{\\infty}|a_k|\\bigr)\n\\bigl(\\sum_{k=0}^{\\infty}|b_k|\\bigr)$.\n\nCombined with [[thm-dirichlet-rearrangement]] this says that within the\nabsolutely convergent series the product behaves exactly as one would want: it\nconverges, its sum is the product of the sums, and neither factor's order nor the\nproduct's order matters.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-nth-term-test",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals. If the series $\\sum a_k$ converges\n([[def-series]]) then the sequence $(a_k)$ converges ([[def-real-limit]]), with\n\n$$\\lim_{k} a_k \\;=\\; 0 .$$\n\nEquivalently, in the contrapositive form in which the lemma is almost always\nused: **if $(a_k)$ does not converge to $0$ then $\\sum a_k$ diverges.**\n\nThe same statement holds for a series $\\sum_{k \\ge m} a_k$ with a general\nstarting index, with the conclusion that $(a_{j+m})_{j \\in \\mathbb{N}}$ converges\nto $0$: that series is by definition the series of the sequence\n$b_j = a_{j+m}$ ([[def-series]]), so it is the statement above applied to $(b_j)$.\n\nThe converse is false; it is refuted by [[fs-nth-term-test-converse]].",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-convergent-implies-bounded",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals converging to $x \\in \\mathbb{R}$\n([[def-sequence]], [[def-real-limit]]). Then $(x_k)$ is bounded: there is\n$M \\in \\mathbb{R}$ with $|x_k| \\le M$ for every $k \\in \\mathbb{N}$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-direct-comparison-test",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals and suppose there is\n$K \\in \\mathbb{N}$ with\n\n$$0 \\;\\le\\; a_k \\;\\le\\; b_k \\qquad \\text{for all } k \\ge K .$$\n\nThen:\n\n1. if $\\sum b_k$ converges then $\\sum a_k$ converges ([[def-series]]);\n2. if $\\sum a_k$ diverges then $\\sum b_k$ diverges.\n\nThe same statement holds verbatim for series with a general starting index $m$,\napplied to the shifted sequences of [[def-series]].\n\nThe hypothesis is on the terms from some index on, not on all of them: finitely\nmany terms of either sequence may violate it, or be negative, without affecting\nthe conclusion. What may not be dropped is nonnegativity of $(a_k)$ from that\nindex on.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2",
        "1.3"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Fix distances $0\\le r<s$ and put $q=r/s$ when $s>0$. By [L2], the series with nonnegative terms $\\iota(n+1)q^n$ converges. Its terms tend to $0$ and hence form a bounded sequence by [L3], say with bound $M$.",
      "step": "1.1",
      "inputs": [
        "L2",
        "L3",
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Conversely, if the derivative series converges absolutely at a distance $s>0$, then $|a_{n+1}|s^{n+1}\\le s\\,\\iota(n+1)|a_{n+1}|s^n$ because $\\iota(n+1)\\ge1$. Comparison gives absolute convergence of the original series there, after adjoining its first term.",
      "step": "1.2",
      "inputs": [
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "If the original series converges absolutely at distance $s>0$, then the antiderivative terms satisfy $|a_n|s^{n+1}/\\iota(n+1)\\le s|a_n|s^n$, so the antiderivative converges absolutely at $s$.",
      "step": "1.3",
      "inputs": [
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Suppose the original series converges absolutely at distance $s>0$. Its shifted absolute terms $u_n:=|a_{n+1}|s^{n+1}$ form a convergent series. At distance $r<s$, the derivative's absolute terms satisfy $\\iota(n+1)|a_{n+1}|r^n=s^{-1}\\iota(n+1)q^n u_n\\le (M/s)u_n$, so the derivative series converges absolutely there by [L3].",
      "step": "2.1",
      "inputs": [
        "L3",
        "step 1.1"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "Conversely, if the antiderivative converges absolutely at distance $s>0$, put $v_n:=|a_n|s^{n+1}/\\iota(n+1)$. At every $r<s$, $|a_n|r^n=s^{-1}\\iota(n+1)q^n v_n\\le(M/s)v_n$, so the original series converges absolutely at $r$ by [L3].",
      "step": "2.2",
      "inputs": [
        "L3",
        "step 1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Write $R_0,R_D,R_I$ for the three radii. If $0\\le r<R_0$, the supremum definition supplies an admissible distance $s>r$ for the original series; choosing $u$ with $r<u<s$, the original series is absolutely convergent at $u$, and step 2.1 makes the derivative absolutely convergent at every distance below $r$. Thus $r$ is admissible for the derivative and $R_0\\le R_D$. Conversely, if $0\\le r<R_D$, choose an admissible derivative distance $s>r$ and then $u$ with $r<u<s$. The derivative converges absolutely at $u$, so step 1.2 and direct comparison make the original series absolutely convergent at every distance below $r$; hence $R_D\\le R_0$. The same argument with steps 1.3 and 2.2 gives $R_0=R_I$. Therefore all three extended radii are equal, including $0$ and $+\\infty$.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "step 1.2",
        "step 1.3",
        "step 2.2",
        "L3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "lem-derived-and-integrated-power-series-have-the-same-radius: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: For a power series $\\sum_{n\\ge0}a_n(x-c)^n$, define its formal derivative and its zero-constant-term formal antiderivative by $$\\sum_{n\\ge0}\\iota(n+1)a_{n+1}(x-c)^n,\\qquad \\sum_{n\\ge0}\\frac{a_n}{\\iota(n+1)}(x-c)^{n+1},$$"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "lem-derived-and-integrated-power-series-have-the-same-radius: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: For a power series $\\sum_{n\\ge0}a_n(x-c)^n$, define its formal derivative and its zero-constant-term formal antiderivative by $$\\sum_{n\\ge0}\\iota(n+1)a_{n+1}(x-c)^n,\\qquad \\sum_{n\\ge0}\\frac{a_n}{\\iota(n+1)}(x-c)^{n+1},$$"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "lem-derived-and-integrated-power-series-have-the-same-radius: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: For a power series $\\sum_{n\\ge0}a_n(x-c)^n$, define its formal derivative and its zero-constant-term formal antiderivative by $$\\sum_{n\\ge0}\\iota(n+1)a_{n+1}(x-c)^n,\\qquad \\sum_{n\\ge0}\\frac{a_n}{\\iota(n+1)}(x-c)^{n+1},$$"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "lem-derived-and-integrated-power-series-have-the-same-radius: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: For a power series $\\sum_{n\\ge0}a_n(x-c)^n$, define its formal derivative and its zero-constant-term formal antiderivative by $$\\sum_{n\\ge0}\\iota(n+1)a_{n+1}(x-c)^n,\\qquad \\sum_{n\\ge0}\\frac{a_n}{\\iota(n+1)}(x-c)^{n+1},$$"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "lem-derived-and-integrated-power-series-have-the-same-radius: no interval or radial endpoint is part of the conclusion; checked against the Statement: For a power series $\\sum_{n\\ge0}a_n(x-c)^n$, define its formal derivative and its zero-constant-term formal antiderivative by $$\\sum_{n\\ge0}\\iota(n+1)a_{n+1}(x-c)^n,\\qquad \\sum_{n\\ge0}\\frac{a_n}{\\iota(n+1)}(x-c)^{n+1},$$"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: every witness selected there is drawn after the proof establishes the relevant positivity, existence, or nonemptiness condition."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "lem-derived-and-integrated-power-series-have-the-same-radius: the Statement is not an equivalence, so there is no forward implication obligation: For a power series $\\sum_{n\\ge0}a_n(x-c)^n$, define its formal derivative and its zero-constant-term formal antiderivative by $$\\sum_{n\\ge0}\\iota(n+1)a_{n+1}(x-c)^n,\\qquad \\sum_{n\\ge0}\\frac{a_n}{\\iota(n+1)}(x-c)^{n+1},$$"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "lem-derived-and-integrated-power-series-have-the-same-radius: the Statement is not an equivalence, so there is no reverse implication obligation: For a power series $\\sum_{n\\ge0}a_n(x-c)^n$, define its formal derivative and its zero-constant-term formal antiderivative by $$\\sum_{n\\ge0}\\iota(n+1)a_{n+1}(x-c)^n,\\qquad \\sum_{n\\ge0}\\frac{a_n}{\\iota(n+1)}(x-c)^{n+1},$$"
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "lem-derived-and-integrated-power-series-have-the-same-radius",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "def-real-power-series-and-radius-of-convergence",
    "declared_target": "def-real-power-series-and-radius-of-convergence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-derived-and-integrated-power-series-have-the-same-radius",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-geometric-series",
    "declared_target": "thm-geometric-series",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-derived-and-integrated-power-series-have-the-same-radius",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-power-monotone",
    "declared_target": "lem-power-monotone",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-derived-and-integrated-power-series-have-the-same-radius",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-derived-and-integrated-power-series-have-the-same-radius",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "cor-cauchy-product-absolute",
    "declared_target": "cor-cauchy-product-absolute",
    "target_statement_provenance": "literature-derived",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-derived-and-integrated-power-series-have-the-same-radius",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "thm-direct-comparison-test",
    "declared_target": "thm-direct-comparison-test",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-derived-and-integrated-power-series-have-the-same-radius",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-nth-term-test",
    "declared_target": "lem-nth-term-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-derived-and-integrated-power-series-have-the-same-radius",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-convergent-implies-bounded",
    "declared_target": "lem-convergent-implies-bounded",
    "target_statement_provenance": "literature-derived",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-derived-and-integrated-power-series-have-the-same-radius",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
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
    "source": "lem-derived-and-integrated-power-series-have-the-same-radius",
    "sourcePage": "power-series-and-real-analytic-functions",
    "batch": "wave13-real-analysis",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
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

## Full exact-current text of every cited or declared item (10)

### `cor-cauchy-product-absolute`

````markdown
---
id: cor-cauchy-product-absolute
kind: corollary
title: "If $\\sum a_k$ and $\\sum b_k$ both converge absolutely then their Cauchy product converges absolutely, with sum $AB$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-mertens, def-cauchy-product, def-absolute-and-conditional-convergence, lem-absolute-convergence-implies-convergence, thm-nonnegative-series-bounded-partial-sums, thm-direct-comparison-test, lem-triangle-inequality-finite, lem-of-abs-value, lem-finite-sum-laws, def-finite-sum, def-series]
justified_by: []
aliases: []
landmark: false
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
    - title: "Cauchy product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_product"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals whose series both converge
absolutely ([[def-absolute-and-conditional-convergence]]), with sums $A$ and $B$,
and let $(c_n)$ be their Cauchy product ([[def-cauchy-product]]). Then $\sum c_n$
converges **absolutely**, and

$$\sum_{n=0}^{\infty} c_n \;=\; A\,B .$$

Moreover $\sum_{n=0}^{\infty} |c_n| \le \bigl(\sum_{k=0}^{\infty}|a_k|\bigr)
\bigl(\sum_{k=0}^{\infty}|b_k|\bigr)$.

Combined with [[thm-dirichlet-rearrangement]] this says that within the
absolutely convergent series the product behaves exactly as one would want: it
converges, its sum is the product of the sums, and neither factor's order nor the
product's order matters.

## Facts & Assumptions

**Given:** Sequences $(a_k)$ and $(b_k)$ with $\sum |a_k|$ and $\sum |b_k|$ convergent, sums $L_a$ and $L_b$ respectively, partial sums $P_N = \sum_{k<N}|a_k|$ and $Q_m = \sum_{j<m}|b_j|$, and the Cauchy product $c_n = \sum_{k=0}^{n} a_k b_{n-k}$ ([[def-cauchy-product]]).

[L1] The finite identity of [[thm-mertens]], claim 1: for arbitrary sequences $(x_k)$, $(y_k)$ with partial sums $Y_m = \sum_{j<m} y_j$ and Cauchy product $(z_n)$, one has $\sum_{n<N} z_n = \sum_{i<N} x_i\, Y_{N-i}$ for every $N$.

[L2] Mertens' theorem, claim 2 of [[thm-mertens]]: if $\sum x_k$ converges absolutely and $\sum y_k$ converges, their Cauchy product converges to the product of the sums.

[L3] $\bigl|\sum_{k<n} x_k\bigr| \le \sum_{k<n}|x_k|$ ([[lem-triangle-inequality-finite]]).

[L4] Absolute value: $|xy| = |x|\,|y|$ and $|x| \ge 0$ ([[lem-of-abs-value]]).

[L5] Finite sums are monotone in their terms and scale by a constant factor; the empty sum is $0$ ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L6] For a series of nonnegative terms, convergence is equivalent to the range of the partial sums being bounded above, and then every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

[L7] Direct comparison ([[thm-direct-comparison-test]]).

[L8] If $\sum |x_k|$ converges then $\sum x_k$ converges ([[lem-absolute-convergence-implies-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Both $L_a$ and $L_b$ are nonnegative, and $P_N \le L_a$ and $Q_m \le L_b$ for all $N$ and $m$, the terms $|a_k|$ and $|b_j|$ being nonnegative. [given, L4, L6]

1.2 Put $\gamma_n := \sum_{k=0}^{n} |a_k|\,|b_{n-k}|$, the Cauchy product of the sequences $(|a_k|)$ and $(|b_k|)$; every $\gamma_n$ is nonnegative. [given, L4, L5]

2.1 For every $n$, $|c_n| = \bigl|\sum_{k=0}^{n} a_k b_{n-k}\bigr| \le \sum_{k=0}^{n} |a_k b_{n-k}| = \gamma_n$. [step 1.2, L3, L4]

2.2 Applying [L1] to $(|a_k|)$ and $(|b_k|)$ gives $\sum_{n<N} \gamma_n = \sum_{i<N} |a_i|\, Q_{N-i}$ for every $N$. [step 1.2, L1]

3.1 Since $0 \le Q_{N-i} \le L_b$ and $|a_i| \ge 0$, monotonicity and scaling give $\sum_{i<N} |a_i|\,Q_{N-i} \le \sum_{i<N} |a_i|\,L_b = L_b\,P_N \le L_b L_a$ for every $N$. [step 1.1, step 2.2, L5]

4.1 So $\sum \gamma_n$ is a series of nonnegative terms whose partial sums are bounded above by $L_a L_b$; it therefore converges, with sum at most $L_a L_b$. [step 1.2, step 3.1, L6]

5.1 By step 2.1 and comparison, $\sum |c_n|$ converges, and its sum is at most that of $\sum \gamma_n$, hence at most $L_a L_b$; that is, $\sum c_n$ converges absolutely and satisfies the displayed bound. [step 2.1, step 4.1, L6, L7]

6.1 The hypotheses of Mertens' theorem hold, $\sum a_k$ converging absolutely and $\sum b_k$ converging by step 1.1 and [L8]; so $\sum c_n$ converges with sum $AB$. [given, L2, L8] ∎

## Remarks

- **Only claim 1 of [[thm-mertens]] is reused, and it is reused for a different pair of sequences.** The identity there is proved for arbitrary real sequences and carries no convergence hypothesis, which is exactly what allows it to be applied here to $(|a_k|)$ and $(|b_k|)$. Nothing about the absolute values is reproved.

- **The bound is not an equality.** The sum of $\sum|c_n|$ can be strictly less than $L_a L_b$, since cancellation inside each $c_n$ is invisible to $\gamma_n$; the inequality is all that is claimed and all that is needed.

- **Absolute convergence of both factors is a genuine strengthening.** Mertens' theorem already gives $\sum c_n = AB$ with only one factor absolutely convergent; what the second hypothesis buys is that the product series is itself absolutely convergent, hence unconditionally convergent ([[thm-dirichlet-rearrangement]]), so that its terms may be reordered in turn.
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

### `def-real-power-series-and-radius-of-convergence`

````markdown
---
id: def-real-power-series-and-radius-of-convergence
kind: definition
title: "A real power series about a centre, its interval of convergence, and its radius in $[0,+\\infty]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-series, def-absolute-and-conditional-convergence, def-integer-power, def-extended-reals, lem-extended-reals-complete, def-interval]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
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

## Definition

Let $(a_n)_{n\in\mathbb N}$ be a sequence of reals and let $c\in\mathbb R$. The **real power series about the centre $c$ with coefficients $(a_n)$** is the series

$$\sum_{n=0}^{\infty}a_n(x-c)^n$$

at a real argument $x$, where powers are those of [[def-integer-power]] and convergence is that of [[def-series]]. Its value, when the series converges, is called its **sum at $x$**. At $x=c$ the series always converges to $a_0$: the term with $n=0$ is $a_0$ because $0^0=1$, and every later term is $0$.

For $r\ge0$ let $P(r)$ mean that the series converges absolutely at every real $x$ with $|x-c|<r$. The set of such $r$ contains $0$, since the condition $|x-c|<0$ has no solutions. The **radius of convergence** is

$$R:=\sup_{\overline{\mathbb R}}\{r\in\mathbb R:r\ge0\text{ and }P(r)\}\in[0,+\infty],$$

where the supremum is taken in the extended real line of [[def-extended-reals]]. Thus $R$ may be a nonnegative real or $+\infty$, but never $-\infty$.

The **open interval determined by the radius** is

$$I_R:=\{x\in\mathbb R:|x-c|<R\}.$$

When $0<R<+\infty$ this is $(c-R,c+R)$, when $R=+\infty$ it is all of $\mathbb R$, and when $R=0$ it is empty. The centre still carries the convergent value $a_0$ in the last case. No endpoint is included in $I_R$; convergence at $c-R$ or $c+R$, when these are real, is a separate question.

## Remarks

The radius is extended-valued, but no undefined arithmetic in $\overline{\mathbb R}$ is used. Expressions such as $c\pm R$ are written only when $R$ is finite. The reciprocal conventions used in Cauchy-Hadamard are stated explicitly in [[thm-cauchy-hadamard-for-real-power-series]].
````

### `lem-convergent-implies-bounded`

````markdown
---
id: lem-convergent-implies-bounded
kind: lemma
title: "Every convergent sequence is bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-real-limit, def-sequence, lem-finite-set-has-max, def-max-min, lem-of-triangle-inequality, lem-of-abs-value, lem-of-add-order, cor-of-one-positive, thm-rat-ordered-field, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "convergent implies bounded"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]). Then $(x_k)$ is bounded: there is
$M \in \mathbb{R}$ with $|x_k| \le M$ for every $k \in \mathbb{N}$.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals converging to a real $x$ ([[def-sequence]], [[def-real-limit]]).

[L1] Convergence: for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - x| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]); and $1$ is a rational $> 0$, since $\mathbb{Q}$ is an ordered field ([[thm-rat-ordered-field]]) and $0 < 1$ in every ordered field ([[cor-of-one-positive]]).

[L2] Triangle inequality: $|a + b| \le |a| + |b|$ in $\mathbb{R}$ ([[lem-of-triangle-inequality]], [[def-complete-ordered-field]]).

[L3] Absolute value: $|u| \ge 0$ for every real $u$ ([[lem-of-abs-value]]).

[L4] Finite maxima: for every $n \in \mathbb{N}$ and all reals $a_0, \dots, a_n$ the set $\{a_0, \dots, a_n\}$ has a maximum ([[lem-finite-set-has-max]]); a maximum lies in the set and dominates every element of it ([[def-max-min]]).

[L5] Order arithmetic in $\mathbb{R}$: transitivity of $\le$ and of $<$; both mixed forms, $u < v \le w \Rightarrow u < w$ and $u \le v < w \Rightarrow u < w$, and the implication $u < v \Rightarrow u \le v$, all immediate from the reading of $u \le v$ as "$u < v$ or $u = v$" ([[def-complete-ordered-field]], [[def-ordered-field]]); and translation invariance, $a < b \Rightarrow a + c < b + c$ ([[lem-of-add-order]]).

[L6] The order on $\mathbb{N}$ is total, so every index $k$ satisfies $k < K$ or $k \ge K$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Apply convergence with the rational $\varepsilon = 1$: fix $K \in \mathbb{N}$ such that $|x_k - x| < 1$ for all $k \ge K$. [L1]

2.1 For every $k \ge K$ we have $|x_k| = |(x_k - x) + x| \le |x_k - x| + |x|$, while adding $|x|$ to both sides of $|x_k - x| < 1$ gives $|x_k - x| + |x| < 1 + |x| = |x| + 1$; composing the non-strict inequality with the strict one yields $|x_k| < |x| + 1$. [step 1.1, L2, L5]

2.2 Define $M := \max\{\, |x_0|, |x_1|, \dots, |x_{K-1}|, |x| + 1 \,\}$, the maximum of the finite list obtained by appending $|x| + 1$ to the first $K$ values $|x_0|, \dots, |x_{K-1}|$; the list is nonempty because its last entry is always present (when $K = 0$ the list is the single entry $|x| + 1$), so the maximum exists by [L4]. [step 1.1, L4, choose]

3.1 For every $k < K$ the value $|x_k|$ is one of the entries of that list, hence $|x_k| \le M$. [step 2.2, L4]

3.2 For every $k \ge K$ we have $|x_k| < |x| + 1 \le M$, since $|x| + 1$ is an entry of the list, hence $|x_k| \le M$. [step 2.1, step 2.2, L4, L5]

4.1 Every index satisfies $k < K$ or $k \ge K$, and in both cases $|x_k| \le M$; therefore $(x_k)$ is bounded. [step 3.1, step 3.2, L3, L6] ∎

## Remarks

- This is where [[lem-finite-set-has-max]] does its main work on this page: the first $K$ terms are bounded because a nonempty finite set of reals has a maximum, and that fact is proved once, by induction, rather than re-derived here. It is not the only consumer, and no claim of uniqueness is made: [[lem-null-times-bounded]] and [[rem-sequence-conventions]] cite the same lemma, each for a maximum of finitely many reals.

- The converse is false. A bounded sequence need not converge ([[fs-bounded-implies-convergent]]). What is true in that direction is the Bolzano-Weierstrass theorem, which requires a passage to a subsequence; it is **not available at this point in the reading order**, being the subject of the next page of this track, *Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness*, where it is proved.

- Boundedness is exactly what makes [[lem-null-times-bounded]] applicable to a convergent factor, and that is how boundedness enters the product rule of [[thm-algebra-of-limits]].
````

### `lem-nth-term-test`

````markdown
---
id: lem-nth-term-test
kind: lemma
title: "If a series converges then its terms tend to $0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, thm-algebra-of-limits, def-real-limit, def-finite-sum, lem-limit-of-tail, def-sequence]
justified_by: []
aliases: []
landmark: true
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
    - title: "Term test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Term_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals. If the series $\sum a_k$ converges
([[def-series]]) then the sequence $(a_k)$ converges ([[def-real-limit]]), with

$$\lim_{k} a_k \;=\; 0 .$$

Equivalently, in the contrapositive form in which the lemma is almost always
used: **if $(a_k)$ does not converge to $0$ then $\sum a_k$ diverges.**

The same statement holds for a series $\sum_{k \ge m} a_k$ with a general
starting index, with the conclusion that $(a_{j+m})_{j \in \mathbb{N}}$ converges
to $0$: that series is by definition the series of the sequence
$b_j = a_{j+m}$ ([[def-series]]), so it is the statement above applied to $(b_j)$.

The converse is false; it is refuted by [[fs-nth-term-test-converse]].

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals whose series converges, with partial sums $s_n = \sum_{k<n} a_k$ ([[def-series]], [[def-finite-sum]]).

[A1] $(s_n)$ converges to some real $S$ ([[def-series]], [[def-real-limit]]).

[L1] The recursion clause of the finite sum: $s_{n+1} = s_n + a_n$ for every $n \in \mathbb{N}$ ([[def-finite-sum]], [[def-series]]).

[L2] Convergence depends only on the tail: if $(x_n)$ converges to $x$ then so does its $1$-st tail $(x_{n+1})_{n}$ ([[lem-limit-of-tail]], [[def-sequence]]).

[L3] Algebra of limits: if $x_n \to x$ and $y_n \to y$ then $x_n - y_n \to x - y$ ([[thm-algebra-of-limits]]).

## Proof

**Proof technique:** direct.

1.1 The sequence $(s_{n+1})_{n \in \mathbb{N}}$ is the $1$-st tail of $(s_n)$, and it converges to $S$. [A1, L2]

1.2 From the recursion clause, $a_n = s_{n+1} - s_n$ for every $n \in \mathbb{N}$. [L1, algebra]

2.1 Hence $(a_n)$ is the difference of two sequences converging to $S$, so it converges to $S - S = 0$. [step 1.1, step 1.2, A1, L3]

3.1 That is the claim, and its contrapositive is the assertion that a series whose terms do not tend to $0$ diverges. [step 2.1] ∎

## Remarks

- **This is a necessary condition and never a sufficient one.** It rules a series out; it never rules one in. The harmonic series has terms tending to $0$ and diverges, which is exactly the content of [[fs-nth-term-test-converse]].

- **What the proof actually uses.** Only that the partial sums converge and that consecutive partial sums differ by a term. No sign hypothesis is placed on $(a_k)$, and none is available at this point on the page.
````

### `lem-of-abs-value`

````markdown
---
id: lem-of-abs-value
kind: lemma
title: "Basic properties of the absolute value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-abs-value, def-ordered-field, lem-of-mult-neg, lem-of-sign-rules]
aliases: []
landmark: false
short: "|x| properties"
proof_strategy: cases
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
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] Absolute value: $|u| = u$ if $u \ge 0$, and $|u| = -u$ if $u < 0$ ([[def-abs-value]]).

[L2] Ordered-field order: trichotomy holds (for each $u$ exactly one of $u > 0$, $u = 0$, $u < 0$), $a < b$ means $b - a$ is positive, and sums and products of positives are positive ([[def-ordered-field]]).

[L3] Signs in products: $(-a)b = -(ab)$ and $(-a)(-b) = ab$ ([[lem-of-mult-neg]]).

[L4] Sign rules: a product of two elements of the same sign is positive, and a product of two elements of opposite sign is negative ([[lem-of-sign-rules]]).

## Proof

**Proof technique:** cases.

1.1 Case $x > 0$: by [L1] $|x| = x > 0$, so $|x| \ge 0$ and $|x| \ne 0$; since $-x < 0$ we get $|-x| = -(-x) = x = |x|$ by [L1], and $-|x| = -x < 0 < x = |x|$, so $-|x| \le x \le |x|$. [assume-case pos, L1, L2, algebra]

1.2 Case $x = 0$: then $|x| = |0| = 0$, so $|x| \ge 0$ holds with $|x| = 0$ and $x = 0$, while $|-x| = |0| = |x|$ and $-|x| = 0 \le 0 \le 0 = |x|$. [assume-case zero, L1]

1.3 Case $x < 0$: by [L1] $|x| = -x$, and [L2] gives $-x > 0$, so $|x| > 0$ and $|x| \ne 0$; here $|-x| = -x = |x|$ by [L1], and $-|x| = -(-x) = x \le x$ while $x < 0 < -x = |x|$, so $-|x| \le x \le |x|$. [assume-case neg, L1, L2, algebra]

1.4 Case $x = 0$ or $y = 0$: then $xy = 0$, so $|xy| = 0$, and one of $|x|, |y|$ is $0$, whence $|x|\,|y| = 0 = |xy|$. [assume-case zerofactor, L1]

1.5 Case $x, y$ have the same sign (both positive or both negative): by [L4] $xy > 0$, so $|xy| = xy$, while $|x|\,|y| = xy$ by [L3] (for $x, y < 0$ this is $(-x)(-y) = xy$), hence $|xy| = |x|\,|y|$. [assume-case same, L1, L3, L4]

1.6 Case $x, y$ have opposite signs (one positive, one negative): by [L4] $xy < 0$, so $|xy| = -(xy)$, while $|x|\,|y| = -(xy)$ by [L3] (namely $x(-y)$ or $(-x)y$), hence $|xy| = |x|\,|y|$. [assume-case opposite, L1, L3, L4]

2.1 By trichotomy [L2] each $x$ lies in exactly one of the cases 1.1-1.3, and in each we verified $|x| \ge 0$, that $|x| = 0 \iff x = 0$, that $|-x| = |x|$, and that $-|x| \le x \le |x|$; hence all four hold for every $x$. [step 1.1, step 1.2, step 1.3, cases-exhaustive]

2.2 By trichotomy [L2] each pair $x, y$ lies in exactly one of the cases 1.4-1.6, and in each $|xy| = |x|\,|y|$; hence $|xy| = |x|\,|y|$ for all $x, y$. [step 1.4, step 1.5, step 1.6, cases-exhaustive]

3.1 Let $c > 0$: if $|x| < c$ then $-c < -|x| \le x \le |x| < c$ by [step 2.1] and [L2], so $-c < x < c$; conversely if $-c < x < c$ then both $x < c$ and $-x < c$, and since $|x|$ equals $x$ or $-x$ by [L1], we get $|x| < c$, so $|x| < c \iff -c < x < c$. [step 2.1, L1, L2] ∎
````

### `lem-of-naturals-positive`

````markdown
---
id: lem-of-naturals-positive
kind: lemma
title: "Canonical naturals are positive and strictly increasing"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-of-one-positive, lem-of-add-order, def-field]
aliases: []
landmark: false
short: "n·1 > 0"
proof_strategy: induction
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
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field, with field structure as in [[def-field]], and for
$n \ge 1$ let $n \cdot 1_F$ denote the canonical natural number
$\underbrace{1_F + \cdots + 1_F}_{n}$, defined recursively by $1 \cdot 1_F = 1_F$
and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$. Then for every $n \ge 1$:

- $n \cdot 1_F > 0$ and $(n+1) \cdot 1_F > n \cdot 1_F$;
- the map $n \mapsto n \cdot 1_F$ is strictly increasing, hence injective, on $\{1, 2, 3, \dots\}$;
- $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$.

## Facts & Assumptions

**Given:** An ordered field $F$ whose canonical naturals are defined recursively by $1 \cdot 1_F = 1_F$ and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, with $0 \cdot 1_F = 0$.

[L1] $0 < 1_F$ in every ordered field ([[cor-of-one-positive]]).

[L2] The order is compatible with addition and positives are closed under addition: $a < b$ implies $a + c < b + c$, and $a > 0$, $b > 0$ imply $a + b > 0$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** induction.

1.1 Base case $n = 1$: by definition $1 \cdot 1_F = 1_F$, and $1_F > 0$. [L1, base]

1.2 Inductive hypothesis: assume $n \cdot 1_F > 0$ for some fixed $n \ge 1$. [ih]

1.3 By the recursion, $(n+1) \cdot 1_F - n \cdot 1_F = 1_F > 0$, so $(n+1) \cdot 1_F > n \cdot 1_F$. [given, L1]

1.4 Additive identity: fix $m$ and induct on $n$; at $n = 1$, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F$ by the recursion, and if $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ then $(m+n+1) \cdot 1_F = (m+n) \cdot 1_F + 1_F = m \cdot 1_F + n \cdot 1_F + 1_F = m \cdot 1_F + (n+1) \cdot 1_F$. [given, algebra]

2.1 Inductive step: $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$ is a sum of two positives, by the hypothesis and $1_F > 0$, hence $(n+1) \cdot 1_F > 0$. [step 1.2, L1, L2]

2.2 Iterating 1.3, for $m < n$ one has $m \cdot 1_F < n \cdot 1_F$, so $n \mapsto n \cdot 1_F$ is strictly increasing and therefore injective on $\{1, 2, 3, \dots\}$. [step 1.3, L2]

2.3 Multiplicative identity: fix $m$ and induct on $n$; at $n = 1$, $(m \cdot 1) \cdot 1_F = m \cdot 1_F = (m \cdot 1_F)(1 \cdot 1_F)$, and the step $(m(n+1)) \cdot 1_F = (mn + m) \cdot 1_F = (mn) \cdot 1_F + m \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F) + (m \cdot 1_F)(1_F) = (m \cdot 1_F)((n+1) \cdot 1_F)$ uses 1.4 and distributivity. [step 1.4, algebra]

3.1 By induction on 1.1, 1.2, 2.1, $n \cdot 1_F > 0$ for every $n \ge 1$; with the strict increase 2.2 and the identities 1.4, 2.3, every claim holds. [step 2.1, step 2.2, step 1.4, step 2.3, discharge-induction] ∎
````

### `lem-power-monotone`

````markdown
---
id: lem-power-monotone
kind: lemma
title: "Monotonicity of $x \\mapsto x^n$ and of $n \\mapsto a^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, cor-of-one-positive, lem-of-sign-rules, prop-of-multiply-inequalities, thm-induction-principle, def-ordered-field, def-nat-order, lem-nat-discrete]
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
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let
$a, b \in \mathbb{R}$ and let $n \in \mathbb{N}$, with powers as in
[[def-integer-power]].

1. **Signs.** If $a \ge 0$ then $a^n \ge 0$, and if $a > 0$ then $a^n > 0$.
2. **Strict monotonicity in the base.** If $0 \le a < b$ and $n \ge 1$ then $a^n < b^n$. Consequently, for $a, b \ge 0$ and $n \ge 1$: $a < b \iff a^n < b^n$ and $a \le b \iff a^n \le b^n$, and $x \mapsto x^n$ is injective on $\{x \in \mathbb{R} : x \ge 0\}$.
3. **Comparison with the base.** If $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; if $a > 1$ and $n \ge 1$ then $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1$.
4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.

## Facts & Assumptions

**Given:** An ordered field $\mathbb{R}$, elements $a, b \in \mathbb{R}$ and naturals $m, n$.

[L1] Definition of powers ([[def-integer-power]]): $a^0 = 1$ and $a^{n+1} = a^n a$.

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Sign and scaling rules: a product of positives is positive, and for $c > 0$, $x < y \iff cx < cy$ ([[lem-of-sign-rules]]); the positives are closed under addition and satisfy trichotomy ([[def-ordered-field]]); and $1 > 0$ ([[cor-of-one-positive]], which is where that fact is proved: neither of the two items just named states it).

[L4] Multiplying inequalities of nonnegatives: if $0 \le x \le y$ and $0 \le u \le v$ then $xu \le yv$, and if $0 < x < y$ and $0 < u < v$ then $xu < yv$ ([[prop-of-multiply-inequalities]]).

[L5] Trichotomy and transitivity of the order: for $x, y$ exactly one of $x < y$, $x = y$, $y < x$ holds, and $<$ and $\le$ are transitive ([[def-ordered-field]]).

[L6] The order on the exponents: $m \le n$ holds exactly when $n = m + k$ for some natural $k$ ([[def-nat-order]]), and $m < n$ holds exactly when $m + 1 \le n$ ([[lem-nat-discrete]]); combining the two, $m < n$ holds exactly when $n = m + d$ for some natural $d \ge 1$.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: $a^0 = 1 > 0$, so claim 1 holds; claim 2 is vacuous at $n = 0$; $a^0 = 1 \ge 1$ and $a^0 = 1 \le 1$, so claim 3 holds at $n = 0$ in the nonstrict readings. [base, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume, for all $a, b$: $a \ge 0 \Rightarrow a^n \ge 0$ and $a > 0 \Rightarrow a^n > 0$; and $0 \le a \le b \Rightarrow a^n \le b^n$, with $a^n < b^n$ when moreover $a < b$ and $n \ge 1$. [ih]

2.1 Signs at $n+1$: if $a \ge 0$ then $a^{n+1} = a^n a$ is a product of two nonnegatives, hence $\ge 0$, and if $a > 0$ it is a product of two positives, hence $> 0$. [step 1.2, L1, L3, L4]

3.1 Strict monotonicity at $n+1$, assuming $0 \le a < b$: then $b > 0$, and the hypothesis gives $0 \le a^n \le b^n$ with $b^n > 0$ by step 2.1; if $a = 0$ then $a^{n+1} = 0 < b^{n+1}$ since $b^{n+1} = b^n b > 0$; if $a > 0$ then $a^{n+1} = a^n a \le b^n a$ by multiplying $a^n \le b^n$ by $a > 0$, and $b^n a < b^n b$ by multiplying $a < b$ by $b^n > 0$, so $a^{n+1} < b^{n+1}$ by transitivity; and in either case $0 \le a \le b$ gives $a^{n+1} \le b^{n+1}$ by [L4]. [step 1.2, step 2.1, L1, L3, L4, L5]

4.1 By the induction principle, claims 1 and 2 hold for every $n$, in the form: $a \ge 0 \Rightarrow a^n \ge 0$; $a > 0 \Rightarrow a^n > 0$; and $0 \le a < b$ with $n \ge 1$ gives $a^n < b^n$. [step 1.1, step 2.1, step 3.1, L2]

5.1 The equivalences of claim 2 follow by trichotomy: for $a, b \ge 0$ and $n \ge 1$, if $a^n < b^n$ then neither $a = b$ (which would give $a^n = b^n$) nor $b < a$ (which would give $b^n < a^n$) is possible, so $a < b$; the $\le$ form is the negation of the $<$ form with $a$ and $b$ exchanged; and injectivity is the case $a^n = b^n$, where $a < b$ and $b < a$ are both excluded. [step 4.1, L5]

5.2 Claim 4: for $a > 1$ we have $a^{n+1} = a^n a > a^n \cdot 1 = a^n$, multiplying $1 < a$ by $a^n > 0$, so $a^n$ is strictly increasing in $n$, and hence $a^m < a^n$ whenever $m < n$: writing $n = m + d$ with $d \ge 1$ and inducting on $d$, the case $d = 1$ is that one-step inequality and the passage from $d$ to $d+1$ is $a^m < a^{m+d} < a^{m+d+1}$ by transitivity; for $a = 1$ an induction gives $1^n = 1$ for all $n$; and for $0 < a < 1$ we have $a^{n+1} = a^n a < a^n \cdot 1 = a^n$, so $a^n$ is strictly decreasing in $n$ and the same induction on the gap $d$ gives $a^m > a^n$ for $m < n$. [step 4.1, L1, L2, L3, L5, L6]

6.1 Claim 3: if $a \ge 1$ and $n \ge 1$ then applying step 4.1 to $1 \le a$ gives $1 = 1^n \le a^n$, and $a^n = a^{n-1} a \ge 1 \cdot a = a$ since $a^{n-1} \ge 1$ by the same argument and $a > 0$; if $a > 1$ the same computation gives $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1^n = 1$. [step 4.1, step 5.1, L1, L3, L4]

7.1 All four claims are proved: signs and strict monotonicity in the base by the induction of steps 1.1 and 3.1, the order equivalences and injectivity by trichotomy, and the comparisons with the base and the behaviour in the exponent by steps 6.1 and 5.2. [step 4.1, step 5.1, step 6.1, step 5.2, discharge-induction] ∎
````

### `thm-direct-comparison-test`

````markdown
---
id: thm-direct-comparison-test
kind: theorem
title: "If $0 \\le a_k \\le b_k$ eventually, convergence of $\\sum b_k$ gives convergence of $\\sum a_k$, and divergence of $\\sum a_k$ gives divergence of $\\sum b_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-nonnegative-series-bounded-partial-sums, lem-series-tail-invariance, def-series, lem-finite-sum-laws, def-bounded-set, def-finite-sum]
justified_by: []
aliases: []
landmark: true
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
    - title: "Direct comparison test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Direct_comparison_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.25)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals and suppose there is
$K \in \mathbb{N}$ with

$$0 \;\le\; a_k \;\le\; b_k \qquad \text{for all } k \ge K .$$

Then:

1. if $\sum b_k$ converges then $\sum a_k$ converges ([[def-series]]);
2. if $\sum a_k$ diverges then $\sum b_k$ diverges.

The same statement holds verbatim for series with a general starting index $m$,
applied to the shifted sequences of [[def-series]].

The hypothesis is on the terms from some index on, not on all of them: finitely
many terms of either sequence may violate it, or be negative, without affecting
the conclusion. What may not be dropped is nonnegativity of $(a_k)$ from that
index on.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(b_k)$ of reals and $K \in \mathbb{N}$ with $0 \le a_k \le b_k$ for all $k \ge K$; the partial sums $\alpha_j = \sum_{i<j} a_{K+i}$ and $\beta_j = \sum_{i<j} b_{K+i}$ of the $K$-th tail series ([[def-series]], [[def-finite-sum]]).

[L1] Monotonicity of finite sums: if $x_i \le y_i$ for all $i < j$ then $\sum_{i<j} x_i \le \sum_{i<j} y_i$ ([[lem-finite-sum-laws]]).

[L2] A series converges if and only if its $K$-th tail series converges ([[lem-series-tail-invariance]]).

[L3] For a series of nonnegative terms: it converges if and only if the range of its partial sums is bounded above, and in the convergent case every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 For every $i \in \mathbb{N}$ the index $K + i$ is at least $K$, so $0 \le a_{K+i} \le b_{K+i}$; in particular both tail series have nonnegative terms. [given]

1.2 Assume $\sum b_k$ converges. Then its $K$-th tail series $\sum_{k \ge K} b_k$ converges. [given, L2]

2.1 By monotonicity of finite sums, $\alpha_j \le \beta_j$ for every $j \in \mathbb{N}$. [step 1.1, L1]

2.2 That tail series has nonnegative terms, so its partial sums satisfy $\beta_j \le B$ for every $j$, where $B$ is its sum. [step 1.2, step 1.1, L3]

3.1 Hence $\alpha_j \le \beta_j \le B$ for every $j$, so the range of $(\alpha_j)$ is bounded above by $B$. [step 2.1, step 2.2]

4.1 The tail series $\sum_{k \ge K} a_k$ has nonnegative terms and partial sums bounded above, so it converges. [step 3.1, step 1.1, L3]

5.1 Therefore $\sum a_k$ converges, which is claim 1. [step 4.1, L2]

6.1 Claim 2 is the contrapositive of claim 1: if $\sum a_k$ diverges then $\sum b_k$ cannot converge. [step 5.1] ∎

## Remarks

- **Both nonnegativity hypotheses are used, and in different places.** $a_k \ge 0$ is what lets convergence of $\sum_{k \ge K} a_k$ be read off from boundedness of its partial sums, and $b_k \ge a_k \ge 0$ is what makes the sum of $\sum_{k \ge K} b_k$ an upper bound for the partial sums $\beta_j$. Drop the sign hypothesis and the theorem is false, not merely unproved; the companion page exhibits a pair with $a_k \le b_k$ for every $k$, $\sum b_k$ convergent and $\sum a_k$ divergent.

- **The comparison is with a series, not with a limit.** No quotient $a_k/b_k$ appears and no $b_k$ is required to be nonzero, which is what distinguishes this test from the limit comparison test proved next.
````

### `thm-geometric-series`

````markdown
---
id: thm-geometric-series
kind: theorem
title: "For $|r| < 1$, $\\sum_{k \\ge 0} r^k = 1/(1-r)$, and for $|r| \\ge 1$ the series diverges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, lem-power-difference-factorisation, lem-geometric-sequence-null, lem-nth-term-test, def-integer-power, thm-algebra-of-limits, def-finite-sum, lem-of-abs-value, lem-power-monotone, thm-induction-principle, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
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
    - title: "Geometric series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $r \in \mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]),
so that $r^0 = 1$ for every $r$, including $r = 0$.

1. If $|r| < 1$ then the series $\sum r^k$ converges ([[def-series]]) and
   $$\sum_{k=0}^{\infty} r^{k} \;=\; \frac{1}{1-r} .$$
2. If $|r| \ge 1$ then $\sum r^k$ diverges.

The series starts at $k = 0$ and its first term is $r^0 = 1$; in particular
$\sum_{k=0}^{\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to
$1$. Which starting index is meant has to be said, and it is said here.

## Facts & Assumptions

**Given:** A real number $r$, the integer powers $r^k$ ([[def-integer-power]]), and the partial sums $s_n = \sum_{k<n} r^k$ of $\sum r^k$ ([[def-series]], [[def-finite-sum]]).

[L1] Factorisation of a difference of powers: for $a, b \in \mathbb{R}$ and natural $n \ge 1$, $b^n - a^n = (b-a)\sum_{k=0}^{n-1} a^k b^{\,n-1-k}$ ([[lem-power-difference-factorisation]]).

[L2] For $|r| < 1$ the sequence $(r^k)$ is null, that is $r^k \to 0$ ([[lem-geometric-sequence-null]]).

[L3] Algebra of limits: sums, differences and quotients of convergent sequences converge to the corresponding combination, the quotient rule requiring a nonzero limit and nonzero denominators ([[thm-algebra-of-limits]], [[def-real-limit]]).

[L4] Absolute value: $|xy| = |x|\,|y|$, $|x| \ge 0$, and $|x| = 0$ exactly when $x = 0$; also $|1| = 1$, since $1 > 0$ ([[lem-of-abs-value]]).

[L5] Powers and order: $a^0 = 1$ for every $a$; if $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; and $1^n = 1$ for every $n$ ([[lem-power-monotone]], [[def-integer-power]]).

[L6] The principle of induction ([[thm-induction-principle]]).

[L7] If a series converges then its terms tend to $0$ ([[lem-nth-term-test]]).

[L8] Notation of [[def-finite-sum]]: $\sum_{k=0}^{n-1} x_k$ is $\sum_{k<n} x_k$, and the empty sum $\sum_{k<0} x_k$ is $0$.

## Proof

**Proof technique:** cases.

1.1 Assume $|r| < 1$. [assume-case lt]

1.2 Assume instead $|r| \ge 1$. [assume-case ge]

1.3 For every natural $n \ge 1$, applying [L1] with $b = 1$ and $a = r$ gives $1 - r^n = (1-r)\sum_{k=0}^{n-1} r^k \cdot 1^{\,n-1-k} = (1-r)\,s_n$, using $1^m = 1$ and the notation of [L8]. [L1, L5, L8]

1.4 At $n = 0$ the identity $1 - r^n = (1-r)s_n$ also holds, both sides being $0$ because $r^0 = 1$ and $s_0$ is the empty sum. [L5, L8]

2.1 In the case $|r| < 1$ we have $r \ne 1$, since $|1| = 1$ and $|r| < 1$; hence $1 - r \ne 0$. [step 1.1, L4, algebra]

2.2 In the case $|r| \ge 1$, an induction gives $|r^k| = |r|^k$ for every $k \in \mathbb{N}$: at $k = 0$ both sides are $1$, and if $|r^k| = |r|^k$ then $|r^{k+1}| = |r^k \cdot r| = |r^k|\,|r| = |r|^k |r| = |r|^{k+1}$. [step 1.2, L4, L5, L6]

2.3 In the case $|r| \ge 1$ we get $|r|^k \ge 1$ for every $k \in \mathbb{N}$: at $k = 0$ this reads $1 \ge 1$, and for $k \ge 1$ it is the comparison $|r|^k \ge |r| \ge 1$. [step 1.2, L5]

3.1 In the case $|r| < 1$, dividing by $1 - r \ne 0$ gives $s_n = (1 - r^n)/(1-r)$ for every $n \in \mathbb{N}$. [step 2.1, step 1.3, step 1.4, algebra]

3.2 In the case $|r| \ge 1$, combining the two previous steps gives $|r^k - 0| = |r^k| = |r|^k \ge 1$ for every $k \in \mathbb{N}$. [step 2.2, step 2.3]

4.1 In the case $|r| < 1$ the sequence $(r^n)$ is null, so $1 - r^n \to 1$ and therefore $s_n \to 1/(1-r)$, the denominator being the nonzero constant $1-r$; hence $\sum r^k$ converges with sum $1/(1-r)$, which is claim 1. [step 1.1, step 3.1, step 2.1, L2, L3]

4.2 In the case $|r| \ge 1$ the sequence $(r^k)$ does not converge to $0$, since the rational tolerance $\varepsilon = 1$ admits no index $K$ with $|r^k - 0| < 1$ for all $k \ge K$; so by the term test $\sum r^k$ diverges, which is claim 2. [step 3.2, L7]

5.1 The two cases $|r| < 1$ and $|r| \ge 1$ exhaust the possibilities, since the order on $\mathbb{R}$ is total, so claims 1 and 2 together cover every real $r$. [step 4.1, step 4.2, cases-exhaustive] ∎

## Remarks

- **The divergence half needs no separate treatment of $r = 1$ and $r = -1$.** Both are covered by $|r| \ge 1$, and the single reason is the same in every case: the terms have absolute value at least $1$, so they cannot tend to $0$. For $r = 1$ the partial sums are $s_n = n$ and run to $+\infty$; for $r = -1$ they oscillate between $0$ and $1$. The theorem says only that neither converges, which is all that "diverges" means here ([[def-series]]).

- **Why the identity is proved at $n = 0$ separately.** [[lem-power-difference-factorisation]] requires $n \ge 1$, since its right-hand side is a sum over $k < n$ of a term involving $b^{\,n-1-k}$, and $n-1$ is not a natural number at $n = 0$. The identity is still true at $n = 0$, but by inspection of two empty objects rather than by that lemma, and step 1.4 says so rather than letting the reader assume the citation covers it.
````

