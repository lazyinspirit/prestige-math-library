## Selection reasons

- critical risk (13): 12 declared dependencies; 14 cited facts; 8 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-p-series-rational`

Normalized current SHA-256: `3b13e2752b289d345174962f1f94586f9a10b73bcca93f15e9ad4013d58ac569`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-p-series-rational
kind: theorem
title: "For rational $p > 0$, $\\sum 1/k^p$ converges iff $p > 1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cauchy-condensation, thm-geometric-series, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, def-monotone-sequence, def-series, lem-of-inverse-positive, thm-nth-roots-exist, lem-of-naturals-positive, def-integer-power, lem-of-abs-value]
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
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "Cauchy condensation test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_condensation_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.28)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Stephen Semmes, Elements of Analysis"
      url: "https://math.rice.edu/~semmes/math331.pdf"
pipeline_run: null
---

## Statement

Let $p \in \mathbb{Q}$ with $p > 0$. For a natural number $k \ge 1$ write
$\iota(k) = k \cdot 1_{\mathbb{R}}$ for the canonical natural, which is positive
([[lem-of-naturals-positive]]), and write $k^{p} := \iota(k)^{p}$ for its rational
power ([[def-rational-power]]). Then

$$\sum_{k \ge 1} \frac{1}{k^{p}} \ \text{converges} \qquad \Longleftrightarrow \qquad p > 1 .$$

In particular the harmonic series $\sum_{k \ge 1} 1/k$ diverges, at $p = 1$, and
$\sum_{k \ge 1} 1/k^{2}$ converges, at $p = 2$.

**The index range is not cosmetic.** The series starts at $k = 1$ because
$1/0^{p}$ is undefined: [[def-rational-power]] gives $0^{p} = 0$ for rational
$p > 0$, and $0$ has no inverse. Sequences here are functions on $\mathbb{N}$ and
$\mathbb{N}$ contains $0$ ([[def-series]]), so the object named above is a series
from the starting index $1$ in the sense of [[def-series]], not a series of a
sequence on $\mathbb{N}$.

**The exponent is rational, and that is a limitation of this page.** Rational
powers of a positive base are what [[def-rational-power]] supplies; real exponents
require the exponential and the logarithm, which this library develops later. The
statement above is therefore the full $p$-series theorem for every exponent this
page can name.

## Facts & Assumptions

**Given:** A rational $p > 0$ and the family $a_k := 1/k^{p} = \iota(k)^{-p}$, defined for naturals $k \ge 1$ ([[def-rational-power]], [[def-series]]).

[L1] Rational powers of a positive base are positive, and $a^{r+s} = a^{r}a^{s}$, $(a^{r})^{s} = a^{rs}$, $a^{-r} = 1/a^{r}$ for $a > 0$ and rationals $r, s$ ([[lem-rational-power-laws]]).

[L2] Monotonicity of rational powers: for rational $t > 0$ and $0 < a < b$ one has $a^{t} < b^{t}$; and for $a > 1$ and rationals $r < s$ one has $a^{r} < a^{s}$ ([[lem-rational-power-monotone]]).

[L3] The integer power and the rational power agree at an integer exponent: for $a > 0$ and $n \in \mathbb{Z}$, $a^{n}$ read as in [[def-integer-power]] equals $a^{n}$ read as in [[def-rational-power]], since $n = n/1$ and $a^{1/1} = a$ ([[thm-nth-roots-exist]], [[def-rational-power]]). In particular $a^{0} = 1$.

[L4] Reciprocation reverses the order on the positives: $0 < a < b$ implies $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

[L5] Condensation: for a family $(x_k)_{k \ge 1}$ that is nonnegative and nonincreasing, $\sum_{k \ge 1} x_k$ converges if and only if $\sum_{j \ge 0} 2^{j} x_{2^{j}}$ converges ([[thm-cauchy-condensation]], [[def-monotone-sequence]]).

[L6] The geometric series: $\sum_{j \ge 0} r^{j}$ converges if and only if $|r| < 1$ ([[thm-geometric-series]], [[lem-of-abs-value]]).

[L7] The canonical naturals are positive and order preserving: $0 < \iota(1) \le \iota(j) < \iota(k)$ for naturals $1 \le j < k$, and $\iota(2) = 2 > 1$ ([[lem-of-naturals-positive]]).

## Proof

**Proof technique:** direct.

1.1 For every natural $k \ge 1$ the base $\iota(k)$ is positive, so $a_k = \iota(k)^{-p}$ is defined and positive; in particular the family is nonnegative. [given, L7, L1]

1.2 For naturals $1 \le j < k$ we have $0 < \iota(j) < \iota(k)$, hence $\iota(j)^{p} < \iota(k)^{p}$ since $p > 0$, hence $a_j = 1/\iota(j)^{p} > 1/\iota(k)^{p} = a_k$; and for $j = k$ the two are equal. So $a_j \ge a_k$ whenever $1 \le j \le k$. [given, L7, L2, L4, L1]

1.3 For every $j \in \mathbb{N}$ the base $2^{j}$ is positive and, reading the exponent $j$ as a rational, $2^{j} a_{2^{j}} = 2^{j} \big(2^{j}\big)^{-p} = 2^{j} \cdot 2^{-jp} = 2^{\,j - jp} = 2^{\,(1-p)j} = \big(2^{\,1-p}\big)^{j}$. [L1, L3, L7, algebra]

1.4 Since $2 > 1$, the map $t \mapsto 2^{t}$ is strictly increasing on $\mathbb{Q}$ and $2^{0} = 1$; hence $r = 2^{\,1-p} < 1 = 2^{0}$ holds exactly when $1 - p < 0$, that is exactly when $p > 1$. [L2, L3, L7]

2.1 Condensation applies to $(a_k)_{k \ge 1}$: $\sum_{k \ge 1} a_k$ converges if and only if $\sum_{j \ge 0} 2^{j} a_{2^{j}}$ converges. [step 1.1, step 1.2, L5]

2.2 So the condensed series is the geometric series $\sum_{j \ge 0} r^{j}$ with $r := 2^{\,1-p}$, and $r > 0$, so $|r| = r$. [step 1.3, L1, L3]

3.1 By the geometric series theorem, $\sum_{j \ge 0} r^{j}$ converges if and only if $r < 1$. [step 2.2, L6]

4.1 Chaining the three equivalences: $\sum_{k \ge 1} 1/k^{p}$ converges $\iff$ the condensed series converges $\iff$ $r < 1$ $\iff$ $p > 1$. [step 2.1, step 2.2, step 3.1, step 1.4] ∎

## Remarks

- **Where the threshold comes from.** Condensation turns the $p$-series into a geometric series of ratio $2^{1-p}$, and the geometric threshold $r = 1$ pulls back to $p = 1$. Nothing about the number $1$ is special to the $p$-series; it is the exponent at which the condensed terms stop shrinking.

- **At $p = 1$ the condensed series is $\sum_{j \ge 0} 1$.** Its terms do not tend to $0$, so it diverges, and with it the harmonic series. That instance is worked out on the companion page, together with the older block argument that does not use condensation at all.

- **Only rational exponents are covered, and the gap is real.** For irrational $p$ the expression $k^{p}$ has no meaning in this library yet, so the statement is not merely unproved there, it is unstatable. The same limitation is what keeps the Bertrand-type series $\sum 1/(k (\log k)^{p})$ off this page entirely, the logarithm not being available.
````

## Wave 7 provenance row for the target

```json
{
  "id": "thm-p-series-rational",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf",
    "https://math.rice.edu/~semmes/math331.pdf"
  ],
  "rationale": "Hunter Example 4.21 and Semmes's condensation chapter give the standard iff threshold p>1 for positive real exponents. The item restricts to rational p because that is the power operation available at this reading level and formalises canonical naturals, so it is a semantic specialization. The proof is the standard condensation-to-geometric-series argument.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-real-analysis-series.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-rational-power-laws",
      "source_section": "Statement",
      "quote": "Let $a, b \\in \\mathbb{R}$ with $a, b > 0$ and let $r, s \\in \\mathbb{Q}$, with\nrational powers as in [[def-rational-power]]. Then:\n\n1. $a^{r} > 0$.\n2. $a^{r+s} = a^{r} a^{s}$.\n3. $(ab)^{r} = a^{r} b^{r}$; in particular $\\big(ab\\big)^{1/N} = a^{1/N} b^{1/N}$ for every natural $N \\ge 1$.\n4. $a^{-r} = \\big(a^{r}\\big)^{-1} = 1/a^{r}$.\n5. $\\big(a^{r}\\big)^{s} = a^{rs}$.\n\nClaims 2 and 3 persist in the supplementary case of [[def-rational-power]]: for\n$a, b \\ge 0$ and rationals $r, s > 0$ ([[def-rat-order]]) one still has\n$(ab)^{r} = a^{r} b^{r}$ and $a^{r+s} = a^{r} a^{s}$. The two identities degenerate\ndifferently, and it is worth saying how. In the product identity, a zero base on\neither side makes both sides $0$. In the addition identity only the base $a$\noccurs, so it degenerates only when $a = 0$, and then both sides are $0$; when\n$a > 0$ that identity holds with no hypothesis on $b$ at all.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-rational-power-monotone",
      "source_section": "Statement",
      "quote": "Let $a \\in \\mathbb{R}$ with $a > 0$ and let $r, s \\in \\mathbb{Q}$ with $r < s$\n([[def-rat-order]]), with rational powers as in [[def-rational-power]].\n\n1. **In the exponent.** If $a > 1$ then $a^{r} < a^{s}$; if $a = 1$ then $a^{r} = a^{s} = 1$; if $0 < a < 1$ then $a^{r} > a^{s}$.\n2. **In the base.** If $r \\in \\mathbb{Q}$ with $r > 0$ and $0 < a < b$, then $a^{r} < b^{r}$; so $a \\mapsto a^{r}$ is strictly increasing on $\\{a \\in \\mathbb{R} : a > 0\\}$.\n3. **Comparison with $1$.** For rational $t > 0$: $a > 1$ implies $a^{t} > 1$, and $0 < a < 1$ implies $a^{t} < 1$.",
      "uses": [
        "1.2",
        "1.4"
      ]
    },
    {
      "fact": "L3",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$, where $\\mathbb{R}$ is the ambient ordered field\n([[def-ordered-field]], [[def-field]]).\n\n**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to\nthe set $\\mathbb{R}$, the starting element $1$ and the function\n$f(x) = x \\cdot a$, there is a unique function $\\mathbb{N} \\to \\mathbb{R}$,\nwritten $n \\mapsto a^n$, with\n\n$$a^0 = 1, \\qquad a^{n+1} = a^n \\cdot a \\quad (n \\in \\mathbb{N}).$$\n\nThus $a^1 = a$, $a^2 = a \\cdot a$, and so on. Note that this is defined for\n**every** $a$, including $a = 0$.\n\n**Negative exponents.** If $a \\ne 0$ and $n \\in \\mathbb{N}$ with $n \\ge 1$, set\n\n$$a^{-n} := (a^n)^{-1}.$$\n\n**Why that is legitimate.** The right-hand side presupposes that $a^n$ is\ninvertible, that is, that $a^n \\ne 0$. This is a proof obligation and not an\nobservation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \\ne 0$\nin a field, $a^n \\ne 0$ for every $n \\in \\mathbb{N}$, proved there by induction on\n$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).\nThat lemma is a statement *about* the operation introduced here, so it depends on\nthis definition and is recorded in this item's `justified_by` rather than in its\n`deps` (SCHEMA §3). Given $a^n \\ne 0$, the value $(a^n)^{-1}$ is a single\nwell-determined element, because multiplicative inverses in a field are unique\n([[lem-of-inverse-unique]]).\n\n**Integer exponents.** Every integer $m$ ([[def-integers]]) is either\n$\\iota(n)$ or $-\\iota(n)$ for a unique natural $n$, where $\\iota$ is the\nembedding $\\mathbb{N} \\to \\mathbb{Z}$ ([[lem-nat-embeds-int]],\n[[def-int-operations]]). This too is a citation and not a slogan: the order on\n$\\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \\ge 0$ or $m < 0$; the\nimage of $\\iota$ is exactly the set of nonnegative integers, and each of them is\n$\\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then\n$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),\nso $-m = \\iota(n)$ and $m = -\\iota(n)$, with $n$ unique because $\\iota$ is\ninjective. The two clauses above therefore define $a^m$ for every\n$m \\in \\mathbb{Z}$ whenever $a \\ne 0$, and for every $m \\in \\mathbb{N}$ for\narbitrary $a$. The clauses are consistent where they overlap: the only overlap is\n$m = 0$, where $-\\iota(0) = \\iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.",
      "uses": [
        "1.3",
        "1.4",
        "2.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-rational-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$ with $a > 0$ and let $r \\in \\mathbb{Q}$ ([[def-rationals]]).\n\nEvery rational has a representative with positive denominator\n([[lem-rat-positive-denominator]]), so write $r = m/n$ with $m \\in \\mathbb{Z}$\nand $n$ a positive integer; a positive integer is the image of a unique natural\n$\\ge 1$ ([[lem-nat-embeds-int]]), and we write $n$ for that natural too. Define\n\n$$a^{r} := \\big(a^{1/n}\\big)^{m},$$\n\nwhere $a^{1/n}$ is the unique nonnegative $n$-th root of $a$\n([[thm-nth-roots-exist]]) and the outer exponent is an integer power\n([[def-integer-power]]). The outer power is legitimate because $a^{1/n} > 0$ when\n$a > 0$, so it has an inverse and negative integer exponents are allowed.\n\n**Well-definedness.** The right-hand side must not depend on which representative\n$m/n$ of $r$ was chosen. It does not: that is [[lem-rational-power-well-defined]],\nwhich is recorded in this item's `justified_by` rather than in its `deps`, since\nit is a statement *about* the operation defined here and therefore depends on\nthis definition.\n\n**The base must be positive.** For $a < 0$ the same formula is not a definition\nat all, because different representatives of the same rational give different\nanswers, or no answer: see [[fs-rational-power-of-negative-base]], which is\nexactly the item that justifies the restriction.\n\n**Supplementary clause for the base $0$.** For $a = 0$ and rational $r > 0$\n([[def-rat-order]]) the displayed formula still makes sense and still does not\ndepend on the representative: $r > 0$ forces $m \\ge 1$, and\n$\\big(0^{1/n}\\big)^{m} = 0^{m} = 0$ ([[thm-nth-roots-exist]] applies to every\n$a \\ge 0$). So we set $0^{r} = 0$ for rational $r > 0$. For $r < 0$ the\nexpression $0^{r}$ is left undefined, since $0$ has no inverse. This clause is\nwhat lets the inequalities later on this page be stated for nonnegative entries\nrather than for positive ones only.",
      "uses": [
        "1.3",
        "1.4",
        "2.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-nth-roots-exist",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).\nFor every $a \\in \\mathbb{R}$ with $a \\ge 0$ and every $n \\in \\mathbb{N}$ with\n$n \\ge 1$ there is a **unique** $s \\in \\mathbb{R}$ with $s \\ge 0$ and $s^n = a$\n([[def-integer-power]]); we write\n\n$$s = a^{1/n} = \\sqrt[n]{a}.$$\n\nMoreover $a^{1/n} > 0$ when $a > 0$, and $a^{1/1} = a$.\n\n**This generalises the published [[thm-of-square-roots]], and the case $n = 2$ is\nnot new.** That theorem already produces the unique $\\sqrt{a} \\ge 0$ with\n$(\\sqrt{a})^2 = a$, and it is cited as such throughout the library; the notation\n$a^{1/2}$ introduced here is the same number. What is new is the passage to\ngeneral $n$: the completed square that drives the $n = 2$ argument has no direct\nanalogue, and its place is taken by the factorisation of $b^n - a^n$ and the\nresulting Lipschitz estimate ([[lem-power-difference-factorisation]]).",
      "uses": [
        "1.3",
        "1.4",
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-cauchy-condensation",
      "source_section": "Statement",
      "quote": "Let $(a_k)_{k \\ge 1}$ be a family from $1$ ([[def-series]]) with\n\n$$a_k \\ge 0 \\ \\ (k \\ge 1) \\qquad \\text{and} \\qquad a_j \\ge a_k \\ \\ \\text{whenever } 1 \\le j \\le k .$$\n\nThen\n\n$$\\sum_{k \\ge 1} a_k \\ \\text{converges} \\qquad \\Longleftrightarrow \\qquad \\sum_{j \\ge 0} 2^{j} a_{2^{j}} \\ \\text{converges} .$$\n\nEvery term of the condensed series is defined, because $2^{j} \\ge 1$ for every\n$j \\in \\mathbb{N}$ ([[lem-power-monotone]]), and the condensed series starts at\n$j = 0$, its first term being $2^0 a_{2^0} = a_1$.\n\nThe monotonicity hypothesis is equivalent to the consecutive form\n$a_{k+1} \\le a_k$ for every $k \\ge 1$, since it says that the sequence\n$b_i := a_{i+1}$, $i \\in \\mathbb{N}$, is nonincreasing ([[def-monotone-sequence]]).\nIt cannot be dropped: the companion page exhibits a nonnegative non-monotone\nfamily for which the two series behave differently.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-monotone-sequence",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\\mathbb{R}$ ordered\nas in [[def-real-order]] and [[def-complete-ordered-field]], and with\n$\\mathbb{N}$ ordered as in [[def-nat-order]]. The sequence is:\n\n- **nondecreasing** when $x_j \\le x_k$ for all $j \\le k$;\n- **increasing** (or *strictly increasing*) when $x_j < x_k$ for all $j < k$;\n- **nonincreasing** when $x_j \\ge x_k$ for all $j \\le k$;\n- **decreasing** (or *strictly decreasing*) when $x_j > x_k$ for all $j < k$;\n- **monotone** when it is nondecreasing or nonincreasing;\n- **strictly monotone** when it is increasing or decreasing;\n- **eventually monotone** when some tail $x^{(K)}$ ([[def-sequence]]) is\n  monotone, that is when there is $K \\in \\mathbb{N}$ such that the restriction of\n  the comparison to indices $\\ge K$ is one-signed.\n\nAn increasing sequence is nondecreasing and a decreasing sequence is\nnonincreasing, since $j \\le k$ means $j < k$ or $j = k$ and the second case gives\nequality. A sequence that is both nondecreasing and nonincreasing is constant.\n\n**Consecutive comparisons suffice, and that is an induction.** The four\nconditions above quantify over *all* pairs of indices, but what one checks in\npractice, and what a recursive construction delivers, is the comparison of\nconsecutive terms. The two agree:\n\n> $(x_k)$ is nondecreasing **if and only if** $x_k \\le x_{\\sigma(k)}$ for every\n> $k \\in \\mathbb{N}$, and $(x_k)$ is increasing **if and only if**\n> $x_k < x_{\\sigma(k)}$ for every $k \\in \\mathbb{N}$; likewise, with the\n> inequalities reversed, for nonincreasing and decreasing.\n\nThe forward implications are the instances $j = k$, $k = \\sigma(k)$ of the\ndefinitions, using $k < \\sigma(k)$ ([[lem-nat-discrete]]). For the converse,\nsuppose $x_i \\le x_{\\sigma(i)}$ for every $i$ and fix $k$; we show by induction\non $k$ ([[thm-induction-principle]]) that $x_j \\le x_k$ for every $j \\le k$. For\n$k = 0$: $j \\le 0$ forces $j = 0$, and $x_0 \\le x_0$. Assume the statement for\n$k$ and let $j \\le \\sigma(k)$. If $j = \\sigma(k)$ then $x_j \\le x_{\\sigma(k)}$ by\nreflexivity. Otherwise $j < \\sigma(k)$, and then $j \\le k$: were $k < j$ we would\nhave $k < j < \\sigma(k)$, which [[lem-nat-discrete]] excludes, so $j \\le k$ by\ntotality of the order on $\\mathbb{N}$ ([[thm-nat-linear-order]]). The induction\nhypothesis gives $x_j \\le x_k$, and $x_k \\le x_{\\sigma(k)}$ by assumption, so\n$x_j \\le x_{\\sigma(k)}$ by transitivity. This completes the induction. The three\nremaining equivalences are the same argument with $\\le$ replaced by $<$,\n$\\ge$ or $>$, transitivity of the strict order being used in the same place.\n\n**Boundedness of a monotone sequence is one-sided.** A nondecreasing sequence is\nbounded below by its first term $x_0$, and a nonincreasing sequence is bounded\nabove by $x_0$, both immediately from the definition with $j = 0$. So for a\nnondecreasing sequence the only substantive question is whether it is bounded\nabove, and for a nonincreasing sequence whether it is bounded below. The range of\n$(x_k)$ is the set $\\{x_k : k \\in \\mathbb{N}\\}$ ([[def-sequence]]), and it is\nbounded above, bounded below or bounded in the sense of [[def-bounded-set]]\nexactly when the sequence is.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-geometric-series",
      "source_section": "Statement",
      "quote": "Let $r \\in \\mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]),\nso that $r^0 = 1$ for every $r$, including $r = 0$.\n\n1. If $|r| < 1$ then the series $\\sum r^k$ converges ([[def-series]]) and\n   $$\\sum_{k=0}^{\\infty} r^{k} \\;=\\; \\frac{1}{1-r} .$$\n2. If $|r| \\ge 1$ then $\\sum r^k$ diverges.\n\nThe series starts at $k = 0$ and its first term is $r^0 = 1$; in particular\n$\\sum_{k=0}^{\\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to\n$1$. Which starting index is meant has to be said, and it is said here.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "1.4"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "For every natural $k \\ge 1$ the base $\\iota(k)$ is positive, so $a_k = \\iota(k)^{-p}$ is defined and positive; in particular the family is nonnegative.",
      "step": "1.1",
      "inputs": [
        "L7",
        "L1",
        "given"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "For naturals $1 \\le j < k$ we have $0 < \\iota(j) < \\iota(k)$, hence $\\iota(j)^{p} < \\iota(k)^{p}$ since $p > 0$, hence $a_j = 1/\\iota(j)^{p} > 1/\\iota(k)^{p} = a_k$; and for $j = k$ the two are equal. So $a_j \\ge a_k$ whenever $1 \\le j \\le k$.",
      "step": "1.2",
      "inputs": [
        "L7",
        "L2",
        "L4",
        "L1",
        "given"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "For every $j \\in \\mathbb{N}$ the base $2^{j}$ is positive and, reading the exponent $j$ as a rational, $2^{j} a_{2^{j}} = 2^{j} \\big(2^{j}\\big)^{-p} = 2^{j} \\cdot 2^{-jp} = 2^{\\,j - jp} = 2^{\\,(1-p)j} = \\big(2^{\\,1-p}\\big)^{j}$.",
      "step": "1.3",
      "inputs": [
        "L1",
        "L3",
        "L7",
        "algebra"
      ]
    },
    {
      "id": "step-1-4",
      "claim": "Since $2 > 1$, the map $t \\mapsto 2^{t}$ is strictly increasing on $\\mathbb{Q}$ and $2^{0} = 1$; hence $r = 2^{\\,1-p} < 1 = 2^{0}$ holds exactly when $1 - p < 0$, that is exactly when $p > 1$.",
      "step": "1.4",
      "inputs": [
        "L2",
        "L3",
        "L7"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Condensation applies to $(a_k)_{k \\ge 1}$: $\\sum_{k \\ge 1} a_k$ converges if and only if $\\sum_{j \\ge 0} 2^{j} a_{2^{j}}$ converges.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.2",
        "L5"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "So the condensed series is the geometric series $\\sum_{j \\ge 0} r^{j}$ with $r := 2^{\\,1-p}$, and $r > 0$, so $|r| = r$.",
      "step": "2.2",
      "inputs": [
        "1.3",
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "By the geometric series theorem, $\\sum_{j \\ge 0} r^{j}$ converges if and only if $r < 1$.",
      "step": "3.1",
      "inputs": [
        "2.2",
        "L6"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Chaining the three equivalences: $\\sum_{k \\ge 1} 1/k^{p}$ converges $\\iff$ the condensed series converges $\\iff$ $r < 1$ $\\iff$ $p > 1$.",
      "step": "4.1",
      "inputs": [
        "2.1",
        "2.2",
        "3.1",
        "1.4"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The family deliberately starts at k = 1, so no empty carrier or k = 0 term is asserted."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement excludes p = 0 and k = 0; step 1.1 verifies every admitted base and reciprocal is positive."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "steps 1.4, 3.1, and 4.1 include the threshold p = 1 and give divergence there."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The hypotheses p > 0 and k >= 1 exclude the undefined zero-base reciprocal and leave no collapsed parameter."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Statement and step 4.1 check the starting index k = 1 and the exact convergence boundary p > 1."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The proof uses fixed data, formula-defined sequences, induction, and cited implications; it selects from no asserted nonempty family."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "step 4.1 chains condensation and the geometric threshold to show convergence forces p > 1."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "the same equivalence chain in step 4.1 shows p > 1 forces convergence."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "critical risk (13): 12 declared dependencies; 14 cited facts; 8 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: All relevant edge cases were examined: p > 0 rational, p = 1, p < 1, p > 1; series starts at k = 1, so k = 0 is never used; all terms a_k are positive and well defined; the sequence is nonincreasing and nonnegative, satisfying the condensation hypothesis; the geometric series ratio r = 2^{1‑p} is positive and handled via |r| = r; the equivalence chain (convergence of Σ a_k ⇔ convergence of condensed series ⇔ r < 1 ⇔ p > 1) is valid in both directions. No counterexample was found. Checked surface: The title, the public claim (including the “iff” and the restriction to rational exponents), every numbered proof step (1.1 through 4.1), the Facts & Assumptions, and the Remarks were read and verified. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/thm-p-series-rational--cc1eeabdc1394fbf.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-p-series-rational",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-cauchy-condensation",
    "declared_target": "thm-cauchy-condensation",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-p-series-rational",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-geometric-series",
    "declared_target": "thm-geometric-series",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-p-series-rational",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-rational-power",
    "declared_target": "def-rational-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-p-series-rational",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-rational-power-monotone",
    "declared_target": "lem-rational-power-monotone",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-p-series-rational",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-rational-power-laws",
    "declared_target": "lem-rational-power-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-p-series-rational",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-monotone-sequence",
    "declared_target": "def-monotone-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-p-series-rational",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-series",
    "declared_target": "def-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-p-series-rational",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-p-series-rational",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-nth-roots-exist",
    "declared_target": "thm-nth-roots-exist",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-p-series-rational",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-p-series-rational",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-integer-power",
    "declared_target": "def-integer-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-p-series-rational",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (12)

### `def-integer-power`

````markdown
---
id: def-integer-power
kind: definition
title: "Integer powers $a^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, def-ordered-field, def-integers, def-field, def-int-operations, lem-nat-embeds-int, lem-of-inverse-unique, lem-of-no-zero-divisors, lem-of-zero-mult, thm-int-ordered-ring]
justified_by: [lem-power-laws]
aliases: [def-power]
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
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §4.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{R}$, where $\mathbb{R}$ is the ambient ordered field
([[def-ordered-field]], [[def-field]]).

**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to
the set $\mathbb{R}$, the starting element $1$ and the function
$f(x) = x \cdot a$, there is a unique function $\mathbb{N} \to \mathbb{R}$,
written $n \mapsto a^n$, with

$$a^0 = 1, \qquad a^{n+1} = a^n \cdot a \quad (n \in \mathbb{N}).$$

Thus $a^1 = a$, $a^2 = a \cdot a$, and so on. Note that this is defined for
**every** $a$, including $a = 0$.

**Negative exponents.** If $a \ne 0$ and $n \in \mathbb{N}$ with $n \ge 1$, set

$$a^{-n} := (a^n)^{-1}.$$

**Why that is legitimate.** The right-hand side presupposes that $a^n$ is
invertible, that is, that $a^n \ne 0$. This is a proof obligation and not an
observation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \ne 0$
in a field, $a^n \ne 0$ for every $n \in \mathbb{N}$, proved there by induction on
$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).
That lemma is a statement *about* the operation introduced here, so it depends on
this definition and is recorded in this item's `justified_by` rather than in its
`deps` (SCHEMA §3). Given $a^n \ne 0$, the value $(a^n)^{-1}$ is a single
well-determined element, because multiplicative inverses in a field are unique
([[lem-of-inverse-unique]]).

**Integer exponents.** Every integer $m$ ([[def-integers]]) is either
$\iota(n)$ or $-\iota(n)$ for a unique natural $n$, where $\iota$ is the
embedding $\mathbb{N} \to \mathbb{Z}$ ([[lem-nat-embeds-int]],
[[def-int-operations]]). This too is a citation and not a slogan: the order on
$\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \ge 0$ or $m < 0$; the
image of $\iota$ is exactly the set of nonnegative integers, and each of them is
$\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then
$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),
so $-m = \iota(n)$ and $m = -\iota(n)$, with $n$ unique because $\iota$ is
injective. The two clauses above therefore define $a^m$ for every
$m \in \mathbb{Z}$ whenever $a \ne 0$, and for every $m \in \mathbb{N}$ for
arbitrary $a$. The clauses are consistent where they overlap: the only overlap is
$m = 0$, where $-\iota(0) = \iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.

## Remarks

- **The convention $0^0 = 1$ is adopted here**, and it is not a matter of taste
  but of agreement with the recursion above: $a^0 = 1$ is the starting value for
  every $a$, exactly as the empty product is $1$ ([[def-finite-sum]]). This is
  the convention that makes the empty product, the binomial theorem, and
  polynomial notation $\sum_k c_k x^k$ work at $x = 0$ without an exception. The
  competing convention "$0^0$ undefined" belongs to contexts where $x^y$ is
  studied as a function of two *real* variables and one wants continuity, which
  is unavailable and irrelevant here: the exponent in $a^m$ is an integer, never
  a real.
- $0^n = 0$ for every $n \ge 1$, since $0^{n} = 0^{n-1} \cdot 0 = 0$, a product
  with a zero factor ([[lem-of-zero-mult]]); and
  $0^{-n}$ is not defined for $n \ge 1$, since $0$ has no inverse.
- The exponent is an integer and stays an integer. Rational exponents are a
  separate construction resting on the existence of roots
  ([[thm-nth-roots-exist]], [[def-rational-power]]), and real exponents do not
  exist in this library yet ([[rem-real-exponents-deferred]]).
- The laws $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$ are
  proved, not assumed, in [[lem-power-laws]]; the order behaviour of $a \mapsto a^n$
  is [[lem-power-monotone]].
````

### `def-monotone-sequence`

````markdown
---
id: def-monotone-sequence
kind: definition
title: "Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequence, def-real-order, def-complete-ordered-field, def-bounded-set, def-nat-order, thm-nat-linear-order, lem-nat-discrete, thm-induction-principle]
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
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Def. 3.13)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.2"
      url: "https://www.jirka.org/ra/"
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
as in [[def-real-order]] and [[def-complete-ordered-field]], and with
$\mathbb{N}$ ordered as in [[def-nat-order]]. The sequence is:

- **nondecreasing** when $x_j \le x_k$ for all $j \le k$;
- **increasing** (or *strictly increasing*) when $x_j < x_k$ for all $j < k$;
- **nonincreasing** when $x_j \ge x_k$ for all $j \le k$;
- **decreasing** (or *strictly decreasing*) when $x_j > x_k$ for all $j < k$;
- **monotone** when it is nondecreasing or nonincreasing;
- **strictly monotone** when it is increasing or decreasing;
- **eventually monotone** when some tail $x^{(K)}$ ([[def-sequence]]) is
  monotone, that is when there is $K \in \mathbb{N}$ such that the restriction of
  the comparison to indices $\ge K$ is one-signed.

An increasing sequence is nondecreasing and a decreasing sequence is
nonincreasing, since $j \le k$ means $j < k$ or $j = k$ and the second case gives
equality. A sequence that is both nondecreasing and nonincreasing is constant.

**Consecutive comparisons suffice, and that is an induction.** The four
conditions above quantify over *all* pairs of indices, but what one checks in
practice, and what a recursive construction delivers, is the comparison of
consecutive terms. The two agree:

> $(x_k)$ is nondecreasing **if and only if** $x_k \le x_{\sigma(k)}$ for every
> $k \in \mathbb{N}$, and $(x_k)$ is increasing **if and only if**
> $x_k < x_{\sigma(k)}$ for every $k \in \mathbb{N}$; likewise, with the
> inequalities reversed, for nonincreasing and decreasing.

The forward implications are the instances $j = k$, $k = \sigma(k)$ of the
definitions, using $k < \sigma(k)$ ([[lem-nat-discrete]]). For the converse,
suppose $x_i \le x_{\sigma(i)}$ for every $i$ and fix $k$; we show by induction
on $k$ ([[thm-induction-principle]]) that $x_j \le x_k$ for every $j \le k$. For
$k = 0$: $j \le 0$ forces $j = 0$, and $x_0 \le x_0$. Assume the statement for
$k$ and let $j \le \sigma(k)$. If $j = \sigma(k)$ then $x_j \le x_{\sigma(k)}$ by
reflexivity. Otherwise $j < \sigma(k)$, and then $j \le k$: were $k < j$ we would
have $k < j < \sigma(k)$, which [[lem-nat-discrete]] excludes, so $j \le k$ by
totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]). The induction
hypothesis gives $x_j \le x_k$, and $x_k \le x_{\sigma(k)}$ by assumption, so
$x_j \le x_{\sigma(k)}$ by transitivity. This completes the induction. The three
remaining equivalences are the same argument with $\le$ replaced by $<$,
$\ge$ or $>$, transitivity of the strict order being used in the same place.

**Boundedness of a monotone sequence is one-sided.** A nondecreasing sequence is
bounded below by its first term $x_0$, and a nonincreasing sequence is bounded
above by $x_0$, both immediately from the definition with $j = 0$. So for a
nondecreasing sequence the only substantive question is whether it is bounded
above, and for a nonincreasing sequence whether it is bounded below. The range of
$(x_k)$ is the set $\{x_k : k \in \mathbb{N}\}$ ([[def-sequence]]), and it is
bounded above, bounded below or bounded in the sense of [[def-bounded-set]]
exactly when the sequence is.

## Remarks

- **The naming is the one that keeps "increasing" strict.** Some texts use
  *increasing* for what is called *nondecreasing* here and *strictly increasing*
  for what is called *increasing*. This library follows the convention in which
  the unqualified word is strict, and always writes *nondecreasing* when
  equality is allowed, so that no statement on this page depends on which
  convention a reader arrives with. Where a proof needs the weak form it says
  *nondecreasing*, and where it needs the strict form it says *increasing*.

- **Eventual monotonicity is exactly monotonicity of a tail**, and by
  [[lem-limit-of-tail]] a sequence and its tails converge to the same limits and
  are Cauchy together. So every convergence statement about monotone sequences on
  this page extends verbatim to eventually monotone sequences, with the limit
  unchanged; only statements about specific terms, such as the identification of
  the limit as the supremum of the *whole* range, need the hypothesis at every
  index. The monotone convergence theorem is a case in point: an eventually
  nondecreasing bounded sequence converges, but to the supremum of the range of
  the monotone tail, which may be smaller than the supremum of the whole range.

- **Monotone is strictly weaker than strictly monotone, and neither is generic.**
  A constant sequence is monotone and not strictly monotone; the sequence with
  terms $1$ and $-1$ alternating ([[lem-alternating-sequence]]) is not monotone
  and not eventually monotone, since every tail contains both values infinitely
  often. That sequence is bounded, so boundedness alone gives neither form of
  monotonicity; what it does give is a monotone *subsequence*
  ([[lem-peak-monotone-subsequence]]), and that is the route to
  Bolzano-Weierstrass.
````

### `def-rational-power`

````markdown
---
id: def-rational-power
kind: definition
title: "Rational powers $a^r$ of a positive base"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-nth-roots-exist, def-integer-power, def-rationals, lem-rat-positive-denominator, lem-nat-embeds-int, def-rat-order, lem-power-monotone, lem-power-laws, lem-of-inverse-positive]
justified_by: [lem-rational-power-well-defined]
aliases: []
landmark: true
short: "$a^{m/n} := (a^{1/n})^m$, $a>0$"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-04
    scope: published-audit-targeted
    context_sha256: 22067f1978d2f781dd7327a6f5c81cccbbc2009bd13885930f7d56ba5a2ceb5e
    item_sha256: 4f75fe6e8c39549d9a1c82a4fc920d13b890d3917b367621daddcaf70f377565
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{R}$ with $a > 0$ and let $r \in \mathbb{Q}$ ([[def-rationals]]).

Every rational has a representative with positive denominator
([[lem-rat-positive-denominator]]), so write $r = m/n$ with $m \in \mathbb{Z}$
and $n$ a positive integer; a positive integer is the image of a unique natural
$\ge 1$ ([[lem-nat-embeds-int]]), and we write $n$ for that natural too. Define

$$a^{r} := \big(a^{1/n}\big)^{m},$$

where $a^{1/n}$ is the unique nonnegative $n$-th root of $a$
([[thm-nth-roots-exist]]) and the outer exponent is an integer power
([[def-integer-power]]). The outer power is legitimate because $a^{1/n} > 0$ when
$a > 0$, so it has an inverse and negative integer exponents are allowed.

**Well-definedness.** The right-hand side must not depend on which representative
$m/n$ of $r$ was chosen. It does not: that is [[lem-rational-power-well-defined]],
which is recorded in this item's `justified_by` rather than in its `deps`, since
it is a statement *about* the operation defined here and therefore depends on
this definition.

**The base must be positive.** For $a < 0$ the same formula is not a definition
at all, because different representatives of the same rational give different
answers, or no answer: see [[fs-rational-power-of-negative-base]], which is
exactly the item that justifies the restriction.

**Supplementary clause for the base $0$.** For $a = 0$ and rational $r > 0$
([[def-rat-order]]) the displayed formula still makes sense and still does not
depend on the representative: $r > 0$ forces $m \ge 1$, and
$\big(0^{1/n}\big)^{m} = 0^{m} = 0$ ([[thm-nth-roots-exist]] applies to every
$a \ge 0$). So we set $0^{r} = 0$ for rational $r > 0$. For $r < 0$ the
expression $0^{r}$ is left undefined, since $0$ has no inverse. This clause is
what lets the inequalities later on this page be stated for nonnegative entries
rather than for positive ones only.

## Remarks

- **Consistency with integer powers.** If $r \in \mathbb{Z}$ then $r = r/1$,
  $a^{1/1} = a$ ([[thm-nth-roots-exist]]), and the definition returns
  $(a^{1})^{r} = a^{r}$ as given by [[def-integer-power]]. So the notation $a^{r}$
  is unambiguous, and rational powers extend integer powers on positive bases.
  At $r = 1/n$ it returns $\big(a^{1/n}\big)^{1} = a^{1/n}$, so the root notation
  of [[thm-nth-roots-exist]] is the special case $r = 1/n$, as intended.
- $a^{r} > 0$ for every $a > 0$ and **every** $r \in \mathbb{Q}$, the exponent $0$
  included. Writing $r = m/n$ with $n \ge 1$: the root $a^{1/n}$ is positive
  ([[thm-nth-roots-exist]]); for $m \ge 0$ the value $\big(a^{1/n}\big)^{m}$ is a
  natural power of a positive element, hence positive, which is claim 1 of
  [[lem-power-monotone]] and covers $m = 0$ as well, since $a^{0} = 1 > 0$; and for
  $m < 0$ the value is $\big(a^{1/n}\big)^{m} = \Big(\big(a^{1/n}\big)^{-m}\Big)^{-1}$
  ([[lem-power-laws]], claim 2), the inverse of a positive element, hence positive
  ([[lem-of-inverse-positive]]). Note that [[lem-power-monotone]] is stated for
  natural exponents only, so it does not by itself settle the negative case; that
  is what the inverse step is for. The exponent laws are
  [[lem-rational-power-laws]] and the order behaviour is
  [[lem-rational-power-monotone]].
- **The exponent is a rational, never a real.** Nothing on this page is a limit,
  a series or a continuous function, and $a^{r}$ is computed in finitely many
  field operations once the root is available. What would be needed to go
  further, why it is deferred here, and where the library later defines $a^{x}$
  for real $x$ are recorded in [[rem-real-exponents-deferred]].
- The convention $0^0 = 1$ of [[def-integer-power]] is untouched: $r = 0$ is not
  covered by the supplementary clause, which asks for $r > 0$. So $0^0 = 1$ while
  $0^{r} = 0$ for every rational $r > 0$. There is no inconsistency, only the
  familiar fact that the two-variable function $(a, r) \mapsto a^{r}$ has no
  continuous extension to $(0,0)$, a statement this library cannot even make yet.
````

### `def-series`

````markdown
---
id: def-series
kind: definition
title: "Series, partial sums, convergence and the sum, divergence, and the tail series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-sum, def-sequence, def-real-limit, def-real-numbers, lem-limit-unique]
justified_by: []
aliases: []
landmark: true
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and
a **sequence of reals** is a function $a : \mathbb{N} \to \mathbb{R}$
([[def-sequence]]), written $(a_k)$; recall that $\mathbb{N}$ contains $0$.

**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial
sums** is

$$s_n \;:=\; \sum_{k < n} a_k \qquad (n \in \mathbb{N}),$$

the finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and
$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses
that define the finite sum. Note that $s_n$ is the sum of the $n$ terms
$a_0, \dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last
one.

**Convergence, the sum, divergence.** The **series** of $(a_k)$, written
$\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges
([[def-real-limit]]), and then the **sum of the series** is

$$\sum_{k=0}^{\infty} a_k \;:=\; \lim_{n} s_n .$$

The series **diverges** when $(s_n)$ does not converge. A convergent sequence of
reals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names
a single real number and nothing further has to be checked for it to be
well defined.

**Series with a general starting index.** Let $m \in \mathbb{N}$ and let $a$ be a
function on $\{\, k \in \mathbb{N} : k \ge m \,\}$, which we call a **family from
$m$** and write $(a_k)_{k \ge m}$. The series

$$\sum_{k \ge m} a_k$$

is by definition the series of the sequence $b_j := a_{j + m}$,
$j \in \mathbb{N}$, which is a genuine sequence of reals; it converges exactly
when that series converges, and its sum is then written
$\sum_{k = m}^{\infty} a_k$. Its partial sums are

$$\sum_{k=m}^{n-1} a_k \;=\; \sum_{j < n-m} a_{m+j} \qquad (n \ge m),$$

in the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum
$0$. A sequence on $\mathbb{N}$ is the case $m = 0$, and the two readings of
$\sum a_k$ agree there, since $b_j = a_j$.

**This clause is not a convenience.** Sequences in this library are functions on
$\mathbb{N}$ and $\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the
classical series are built from expressions that are undefined at the index $0$:
$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \ge 1$. Writing such a series as
$\sum_{k \ge 1} a_k$ names an honest object, whereas writing it as a sequence on
$\mathbb{N}$ would require a value at an index where the defining expression has
none. Every statement on this page says which starting index it uses.

**Tail series.** For $N \in \mathbb{N}$, the **$N$-th tail series** of
$\sum a_k$ is $\sum_{k \ge N} a_k$, that is the series of the $N$-th tail
$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The
$0$-th tail series is the series itself.

## Remarks

- **"Diverges" here means "does not converge", and nothing more.** A divergent
  series may have partial sums that run away to $+\infty$, or to $-\infty$, or
  that oscillate without settling anywhere. The three behaviours are not
  distinguished by the word, and no statement on this page uses "diverges" to
  mean "the partial sums are unbounded" unless it says so.

- **The symbol $\sum_{k=0}^{\infty} a_k$ is defined only for a convergent
  series.** It denotes a real number, not a formal object, and it is illegitimate
  to write it down before convergence has been established. Where a proof needs
  to speak of the series without knowing whether it converges, it speaks of
  $(a_k)$ and of $(s_n)$.

- **Two indices, doing different work.** The index $k$ runs over the terms and is
  bound; the index $n$ runs over the partial sums and is the variable in which the
  limit is taken. Confusing them is the commonest slip in the subject, and it is
  the reason the definition above fixes $s_n = \sum_{k<n} a_k$ rather than
  $\sum_{k \le n} a_k$: with this choice the recursion $s_{n+1} = s_n + a_n$ is
  the one supplied by [[def-finite-sum]], with no shift anywhere.
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

### `lem-of-inverse-positive`

````markdown
---
id: lem-of-inverse-positive
kind: lemma
title: "Inverses of positives are positive, and reciprocation reverses order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ordered-field, lem-of-sign-rules, cor-of-one-positive]
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
    - title: "University of Innsbruck notes: Ordered fields"
      url: "https://www.uibk.ac.at/media/filer_public/28/02/280225fd-dde6-4e9c-bff6-baad33ff4a05/ragen.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b \in F$.

[L1] $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and for $x \neq 0$ exactly one of $x \in P$, $-x \in P$ holds ([[def-ordered-field]]).

[L2] Sign rules: a product of a positive and a negative is negative, a product of two positives is positive, and for $c > 0$ one has $a < b \iff ac < bc$ ([[lem-of-sign-rules]]).

[L3] $0 < 1$; in particular $1 \neq 0$ ([[cor-of-one-positive]]).

[L4] $P$ is closed under addition, so $<$ is transitive ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$, so $a \neq 0$ and its inverse $a^{-1}$ exists with $a \cdot a^{-1} = 1$; moreover $a^{-1} \neq 0$, since $a^{-1}$ has $a$ as its inverse while $0$ is non-invertible ($1 \neq 0$ by L3). [assume-hyp, L1, L3]

2.1 By trichotomy $a^{-1} \in P$ or $-a^{-1} \in P$; if $-a^{-1} \in P$, then $a > 0$ and $a^{-1} < 0$ give $a \cdot a^{-1} < 0$ by the sign rules, i.e. $1 < 0$, contradicting $0 < 1$; hence $a^{-1} \in P$, i.e. $a^{-1} > 0$, proving claim 1. [step 1.1, L2, L3, L1]

3.1 Assume $0 < a < b$; then $0 < b$ by transitivity, so by claim 1 both $a^{-1} > 0$ and $b^{-1} > 0$, and the sign rules give $a^{-1} b^{-1} > 0$. [assume-hyp, step 2.1, L4, L2, L1]

4.1 Multiplying $a < b$ by the positive $a^{-1} b^{-1}$ via the sign rules gives $a (a^{-1} b^{-1}) < b (a^{-1} b^{-1})$; since $a a^{-1} = 1$ and $b b^{-1} = 1$, this simplifies to $b^{-1} < a^{-1}$. [step 3.1, L2, algebra]

5.1 Together with $b^{-1} > 0$ from step 3.1, we conclude $0 < b^{-1} < a^{-1}$, proving claim 2. [step 3.1, step 4.1] ∎
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

### `lem-rational-power-laws`

````markdown
---
id: lem-rational-power-laws
kind: lemma
title: "Laws of rational exponents"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-rational-power, lem-rational-power-well-defined, lem-power-laws, thm-nth-roots-exist, def-rat-operations, lem-power-monotone, def-rationals, def-integer-power, lem-of-inverse-positive, def-rat-order, thm-rat-ordered-field, lem-of-zero-mult]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a, b > 0$ and let $r, s \in \mathbb{Q}$, with
rational powers as in [[def-rational-power]]. Then:

1. $a^{r} > 0$.
2. $a^{r+s} = a^{r} a^{s}$.
3. $(ab)^{r} = a^{r} b^{r}$; in particular $\big(ab\big)^{1/N} = a^{1/N} b^{1/N}$ for every natural $N \ge 1$.
4. $a^{-r} = \big(a^{r}\big)^{-1} = 1/a^{r}$.
5. $\big(a^{r}\big)^{s} = a^{rs}$.

Claims 2 and 3 persist in the supplementary case of [[def-rational-power]]: for
$a, b \ge 0$ and rationals $r, s > 0$ ([[def-rat-order]]) one still has
$(ab)^{r} = a^{r} b^{r}$ and $a^{r+s} = a^{r} a^{s}$. The two identities degenerate
differently, and it is worth saying how. In the product identity, a zero base on
either side makes both sides $0$. In the addition identity only the base $a$
occurs, so it degenerates only when $a = 0$, and then both sides are $0$; when
$a > 0$ that identity holds with no hypothesis on $b$ at all.

## Facts & Assumptions

**Given:** Reals $a, b > 0$ and rationals $r, s$.

[L1] Definition and well-definedness ([[def-rational-power]], [[lem-rational-power-well-defined]]): for ANY representative $r = m/N$ with $m \in \mathbb{Z}$ and $N \ge 1$ natural, $a^{r} = \big(a^{1/N}\big)^{m}$; and $a^{1/N}$ is the unique $x \ge 0$ with $x^{N} = a$ ([[thm-nth-roots-exist]]), which is $> 0$ when $a > 0$.

[L2] Laws of integer exponents ([[lem-power-laws]], [[def-integer-power]]): for $x, y \ne 0$ and integers $j, k$, $x^{j+k} = x^{j}x^{k}$, $(x^{j})^{k} = x^{jk}$, $(xy)^{j} = x^{j}y^{j}$ and $x^{-j} = (x^{j})^{-1}$.

[L3] Positivity and injectivity: $x > 0$ implies $x^{j} > 0$ for every NATURAL $j$ ([[lem-power-monotone]], claim 1), and hence for every integer $j$, since $x^{-j} = \big(x^{j}\big)^{-1}$ ([[lem-power-laws]], claim 2) and the inverse of a positive element is positive ([[lem-of-inverse-positive]]); and $x \mapsto x^{N}$ is injective on $\{x \ge 0\}$ for $N \ge 1$ ([[lem-power-monotone]], claim 2).

[L4] Rational arithmetic ([[def-rat-operations]], [[def-rationals]]): any two rationals can be written with a common positive denominator, $m/N + k/N = (m+k)/N$, $-(m/N) = (-m)/N$, and $(m/n)(p/q) = (mp)/(nq)$.

[L5] The order on $\mathbb{Q}$ ([[thm-rat-ordered-field]], [[def-rat-order]]) is compatible with addition, so $r > 0$ and $s > 0$ imply $r + s > 0$.

[L6] The supplementary clause of [[def-rational-power]]: $0^{t} = 0$ for every rational $t > 0$, while $0^{t}$ is left undefined for rational $t < 0$ and the convention $0^{0} = 1$ of [[def-integer-power]] is untouched. In a field, a product with a factor $0$ is $0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** direct.

1.1 Choose a common denominator: there are a natural $N \ge 1$ and integers $m, k$ with $r = m/N$ and $s = k/N$; then $r + s = (m+k)/N$ and $-r = (-m)/N$. [L4]

1.2 Roots of a product: for $a, b > 0$ and $N \ge 1$ the element $a^{1/N} b^{1/N}$ is positive and satisfies $\big(a^{1/N} b^{1/N}\big)^{N} = \big(a^{1/N}\big)^{N}\big(b^{1/N}\big)^{N} = ab$, so by uniqueness of the nonnegative $N$-th root $\big(ab\big)^{1/N} = a^{1/N} b^{1/N}$. [L1, L2, L3]

2.1 Claim 1: $a^{r} = \big(a^{1/N}\big)^{m}$ with $a^{1/N} > 0$, and a positive element has positive integer powers, so $a^{r} > 0$. [step 1.1, L1, L3]

2.2 Claim 3: $(ab)^{r} = \big((ab)^{1/N}\big)^{m} = \big(a^{1/N} b^{1/N}\big)^{m} = \big(a^{1/N}\big)^{m}\big(b^{1/N}\big)^{m} = a^{r} b^{r}$, using the root-of-a-product identity and then the integer product law. [step 1.1, step 1.2, L1, L2]

3.1 Claim 2: $a^{r+s} = \big(a^{1/N}\big)^{m+k} = \big(a^{1/N}\big)^{m}\big(a^{1/N}\big)^{k} = a^{r} a^{s}$, the middle equality being the integer addition law applied to the nonzero base $a^{1/N}$. [step 1.1, step 2.1, L1, L2]

3.2 Claim 4: $a^{-r} = \big(a^{1/N}\big)^{-m} = \Big(\big(a^{1/N}\big)^{m}\Big)^{-1} = \big(a^{r}\big)^{-1}$. [step 1.1, step 2.1, L1, L2]

3.3 Claim 5: write $r = m/n$ and $s = p/q$ with $n, q \ge 1$, and put $x := a^{1/(nq)}$, so $x > 0$ and $x^{nq} = a$; then $\big(x^{q}\big)^{n} = x^{qn} = a$ with $x^{q} > 0$, so $x^{q} = a^{1/n}$ by uniqueness of the nonnegative $n$-th root; putting $z := x^{m}$ we get $z > 0$ and $z^{q} = \big(x^{m}\big)^{q} = \big(x^{q}\big)^{m} = \big(a^{1/n}\big)^{m} = a^{r}$, so $z$ is the nonnegative $q$-th root of $a^{r}$, that is $z = \big(a^{r}\big)^{1/q}$; therefore $\big(a^{r}\big)^{s} = \Big(\big(a^{r}\big)^{1/q}\Big)^{p} = z^{p} = \big(x^{m}\big)^{p} = x^{mp} = \big(a^{1/(nq)}\big)^{mp} = a^{(mp)/(nq)} = a^{rs}$. [step 2.1, L1, L2, L3, L4]

3.4 The supplementary nonnegative case, product identity: let $a, b \ge 0$ and let $r > 0$ be rational; if $a > 0$ and $b > 0$ this is step 2.2, and otherwise $a = 0$ or $b = 0$, so $ab = 0$ and the left side is $0^{r} = 0$, while the right side $a^{r}b^{r}$ has a factor $0^{r} = 0$ and is therefore $0$ as well. [step 2.2, L6]

4.1 The supplementary nonnegative case, addition identity: the identity $a^{r+s} = a^{r}a^{s}$ involves the base $a$ only, so nothing need be assumed about $b$; for $a > 0$ it is step 3.1 verbatim, which uses only $a > 0$, and both sides are then positive rather than $0$; for $a = 0$ the exponents satisfy $r + s > 0$, so the left side is $0^{r+s} = 0$ and the right side is $0 \cdot 0 = 0$. [step 3.1, L5, L6]

5.1 All five claims hold for positive bases and arbitrary rational exponents, together with the two supplementary identities for nonnegative bases and positive rational exponents. [step 2.1, step 3.1, step 3.2, step 2.2, step 3.3, step 3.4, step 4.1] ∎
````

### `lem-rational-power-monotone`

````markdown
---
id: lem-rational-power-monotone
kind: lemma
title: "Monotonicity of $r \\mapsto a^{r}$ and of $a \\mapsto a^{r}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-rational-power, lem-rational-power-laws, lem-power-monotone, lem-power-laws, lem-rational-power-well-defined, def-rat-order, def-int-order, lem-nat-embeds-int, thm-nth-roots-exist, lem-rat-positive-denominator, lem-of-sign-rules, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
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
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a \in \mathbb{R}$ with $a > 0$ and let $r, s \in \mathbb{Q}$ with $r < s$
([[def-rat-order]]), with rational powers as in [[def-rational-power]].

1. **In the exponent.** If $a > 1$ then $a^{r} < a^{s}$; if $a = 1$ then $a^{r} = a^{s} = 1$; if $0 < a < 1$ then $a^{r} > a^{s}$.
2. **In the base.** If $r \in \mathbb{Q}$ with $r > 0$ and $0 < a < b$, then $a^{r} < b^{r}$; so $a \mapsto a^{r}$ is strictly increasing on $\{a \in \mathbb{R} : a > 0\}$.
3. **Comparison with $1$.** For rational $t > 0$: $a > 1$ implies $a^{t} > 1$, and $0 < a < 1$ implies $a^{t} < 1$.

## Facts & Assumptions

**Given:** A real $a > 0$ and rationals $r < s$; write $t := s - r$, a rational with $t > 0$.

[L1] Positive rationals have positive representatives: $t > 0$ can be written $t = m/N$ with $m, N$ naturals and $m \ge 1$, $N \ge 1$. Every rational has a representative with positive denominator ([[lem-rat-positive-denominator]]); on such a representative $m/N > 0$ holds exactly when $m > 0$ in $\mathbb{Z}$ ([[def-rat-order]], [[def-int-order]]); and a positive integer is the image of a unique natural $\ge 1$ ([[lem-nat-embeds-int]]), which is what turns both the numerator $m > 0$ and the denominator $N > 0$ into naturals $\ge 1$. The last passage is a genuine step and is what [[lem-rational-power-well-defined]] uses at its own [L5].

[L2] Rational power laws ([[lem-rational-power-laws]], [[lem-rational-power-well-defined]], [[def-rational-power]]): $a^{r} > 0$; $a^{r+t} = a^{r} a^{t}$; and $a^{t} = \big(a^{1/N}\big)^{m}$ for the representative $t = m/N$.

[L3] Roots ([[thm-nth-roots-exist]]): $a^{1/N}$ is the unique $x \ge 0$ with $x^{N} = a$, and it is $> 0$ when $a > 0$.

[L4] Integer power monotonicity ([[lem-power-monotone]]): for $N \ge 1$, $x \mapsto x^{N}$ is strictly increasing on $\{x \ge 0\}$ (claim 2); for $m \ge 1$, $x > 1$ implies $x^{m} \ge x > 1$ (claim 3), while $0 \le x < 1$ implies $x^{m} < 1^{m} = 1$, which is claim 2 again with $1$ as the larger base and NOT claim 3, whose nonstrict $x^{m} \le 1$ would not suffice; and $1^{m} = 1$ for every integer $m$, by claim 4 for natural $m$ together with $1^{-k} = (1^{k})^{-1} = 1$ ([[lem-power-laws]]).

[L5] Order arithmetic: for $c > 0$, $x < y \iff cx < cy$; and trichotomy, exactly one of $a < 1$, $a = 1$, $a > 1$ holds ([[lem-of-sign-rules]], [[def-ordered-field]]).

## Proof

**Proof technique:** cases.

1.1 Write $t = s - r$, so $t$ is rational with $t > 0$, and fix a representative $t = m/N$ with naturals $m, N \ge 1$; then $a^{s} = a^{r+t} = a^{r} a^{t}$ with $a^{r} > 0$, so the comparison of $a^{s}$ with $a^{r}$ is exactly the comparison of $a^{t}$ with $1$. [L1, L2, L5]

1.2 Claim 2, which needs no case split: let $r > 0$ be rational with representative $r = m/N$, $m, N \ge 1$, and let $0 < a < b$; then $a^{1/N} < b^{1/N}$, since $b^{1/N} \le a^{1/N}$ would give $b = \big(b^{1/N}\big)^{N} \le \big(a^{1/N}\big)^{N} = a$; raising to the power $m$ preserves the strict inequality between nonnegatives, so $a^{r} = \big(a^{1/N}\big)^{m} < \big(b^{1/N}\big)^{m} = b^{r}$. [L2, L3, L4]

2.1 Case $a > 1$: then $a^{1/N} > 1$, because $a^{1/N} \le 1$ would give $a = \big(a^{1/N}\big)^{N} \le 1$; hence $a^{t} = \big(a^{1/N}\big)^{m} \ge a^{1/N} > 1$, and multiplying $1 < a^{t}$ by $a^{r} > 0$ gives $a^{r} < a^{r} a^{t} = a^{s}$. [assume-case big, step 1.1, L3, L4, L5]

2.2 Case $a = 1$: then $1^{N} = 1$ shows $a^{1/N} = 1$ by uniqueness of the nonnegative $N$-th root, so $a^{u} = 1^{m'} = 1$ for every rational $u$ with representative $m'/N'$; in particular $a^{r} = a^{s} = 1$. [assume-case one, step 1.1, L2, L3, L4]

2.3 Case $0 < a < 1$: then $0 \le a^{1/N} < 1$, because $a^{1/N} \ge 1$ would give $a = \big(a^{1/N}\big)^{N} \ge 1$; hence $a^{t} = \big(a^{1/N}\big)^{m} < 1^{m} = 1$ by strict monotonicity of $x \mapsto x^{m}$ on the nonnegatives, $m \ge 1$, and multiplying $a^{t} < 1$ by $a^{r} > 0$ gives $a^{s} = a^{r} a^{t} < a^{r}$. [assume-case small, step 1.1, L3, L4, L5]

3.1 The three cases $a > 1$, $a = 1$, $0 < a < 1$ exhaust the possibilities for $a > 0$ by trichotomy, so claim 1 holds; claim 3 is the comparison of $a^{t}$ with $1$ established inside the first and third cases; and claim 2 is step 1.2. [cases-exhaustive, step 2.1, step 2.2, step 2.3, step 1.2, L5] ∎
````

### `thm-cauchy-condensation`

````markdown
---
id: thm-cauchy-condensation
kind: theorem
title: "For a nonincreasing nonnegative sequence, $\\sum a_k$ converges iff $\\sum 2^k a_{2^k}$ converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-nonnegative-series-bounded-partial-sums, def-monotone-sequence, def-integer-power, lem-power-monotone, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, def-series, def-bounded-set]
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
    - title: "Cauchy condensation test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_condensation_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.27)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Stephen Semmes, Elements of Analysis"
      url: "https://math.rice.edu/~semmes/math331.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)_{k \ge 1}$ be a family from $1$ ([[def-series]]) with

$$a_k \ge 0 \ \ (k \ge 1) \qquad \text{and} \qquad a_j \ge a_k \ \ \text{whenever } 1 \le j \le k .$$

Then

$$\sum_{k \ge 1} a_k \ \text{converges} \qquad \Longleftrightarrow \qquad \sum_{j \ge 0} 2^{j} a_{2^{j}} \ \text{converges} .$$

Every term of the condensed series is defined, because $2^{j} \ge 1$ for every
$j \in \mathbb{N}$ ([[lem-power-monotone]]), and the condensed series starts at
$j = 0$, its first term being $2^0 a_{2^0} = a_1$.

The monotonicity hypothesis is equivalent to the consecutive form
$a_{k+1} \le a_k$ for every $k \ge 1$, since it says that the sequence
$b_i := a_{i+1}$, $i \in \mathbb{N}$, is nonincreasing ([[def-monotone-sequence]]).
It cannot be dropped: the companion page exhibits a nonnegative non-monotone
family for which the two series behave differently.

## Facts & Assumptions

**Given:** A family $(a_k)_{k \ge 1}$ of reals with $a_k \ge 0$ for $k \ge 1$ and $a_j \ge a_k$ whenever $1 \le j \le k$; the partial sums $A_n = \sum_{k=1}^{n} a_k$ of $\sum_{k \ge 1} a_k$, with $A_0 = 0$; and the partial sums $C_n = \sum_{j<n} 2^{j} a_{2^{j}}$ of the condensed series ([[def-series]], [[def-finite-sum]]).

[L1] Splitting of finite sums, and the meaning of a sum with general bounds: for $m \le n$, $\sum_{k=1}^{n} a_k = \sum_{k=1}^{m} a_k + \sum_{k=m+1}^{n} a_k$, and $\sum_{k=p}^{q} a_k = \sum_{t < q+1-p} a_{p+t}$ ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L2] Monotonicity and scaling of finite sums: if $x_t \le y_t$ for all $t < d$ then $\sum_{t<d} x_t \le \sum_{t<d} y_t$; and a constant sum is $\sum_{t<d} \lambda = d\,\lambda$ ([[lem-finite-sum-laws]]).

[L3] Powers of $2$: $2^{j} \ge 1$ for every $j \in \mathbb{N}$, $2^{j+1} = 2 \cdot 2^{j}$, and $2^{j} < 2^{j+1}$ ([[def-integer-power]], [[lem-power-monotone]]).

[L4] The principle of induction ([[thm-induction-principle]]).

[L5] For a series of nonnegative terms: its partial sums are nondecreasing, it converges if and only if the range of its partial sums is bounded above, and in the convergent case every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 Every term of the condensed series is nonnegative, since $2^{j} \ge 1 > 0$ and $a_{2^{j}} \ge 0$; and every $A_n$, every $C_n$ is nonnegative, both series having nonnegative terms. [given, L3, L5]

1.2 For every $n \in \mathbb{N}$ the block from $2^{n}$ to $2^{n+1}-1$ is $\sum_{k=2^{n}}^{2^{n+1}-1} a_k = \sum_{t < 2^{n}} a_{2^{n}+t}$, since the number of terms is $(2^{n+1}-1)+1-2^{n} = 2^{n}$. [L1, L3, algebra]

1.3 For every $n \in \mathbb{N}$ the block from $2^{n}+1$ to $2^{n+1}$ is $\sum_{k=2^{n}+1}^{2^{n+1}} a_k = \sum_{t < 2^{n}} a_{2^{n}+1+t}$, since the number of terms is $2^{n+1}+1-(2^{n}+1) = 2^{n}$. [L1, L3, algebra]

1.4 **Index growth:** $n \le 2^{n} - 1$ for every $n \in \mathbb{N}$, by induction on $n$. At $n = 0$ this reads $0 \le 0$; and if $n \le 2^{n}-1$, that is $n+1 \le 2^{n}$, then $n+1 \le 2^{n} \le 2 \cdot 2^{n} - 1 = 2^{n+1}-1$, the second inequality being $2^{n} \ge 1$. [L3, L4, algebra]

2.1 In the first block every index satisfies $2^{n} \le 2^{n}+t$, so $a_{2^{n}+t} \le a_{2^{n}}$, and therefore $\sum_{k=2^{n}}^{2^{n+1}-1} a_k \le \sum_{t<2^{n}} a_{2^{n}} = 2^{n} a_{2^{n}}$. [step 1.2, given, L2]

2.2 In the second block every index satisfies $2^{n}+1+t \le 2^{n+1}$ for $t < 2^{n}$, so $a_{2^{n}+1+t} \ge a_{2^{n+1}}$, and therefore $\sum_{k=2^{n}+1}^{2^{n+1}} a_k \ge \sum_{t<2^{n}} a_{2^{n+1}} = 2^{n} a_{2^{n+1}}$. [step 1.3, given, L2, L3]

2.3 Suppose the condensed series converges, with sum $C$; then $C_n \le C$ for every $n$. [given, step 1.1, L5]

2.4 Suppose conversely that $\sum_{k \ge 1} a_k$ converges, with sum $A$; then $A_n \le A$ for every $n$. [given, step 1.1, L5]

3.1 **Upper estimate:** $A_{2^{n}-1} \le C_n$ for every $n \in \mathbb{N}$, by induction on $n$. At $n = 0$ both sides are $0$, since $2^0 - 1 = 0$ and $C_0$ is the empty sum; and if $A_{2^{n}-1} \le C_n$, then splitting at $2^{n}-1$ gives $A_{2^{n+1}-1} = A_{2^{n}-1} + \sum_{k=2^{n}}^{2^{n+1}-1} a_k \le C_n + 2^{n} a_{2^{n}} = C_{n+1}$. [step 2.1, L1, L3, L4]

3.2 **Lower estimate:** $2 A_{2^{n}} \ge \sum_{j=1}^{n} 2^{j} a_{2^{j}}$ for every $n \in \mathbb{N}$, by induction on $n$. At $n = 0$ the right-hand side is the empty sum $0$ and the left-hand side is $2a_1 \ge 0$; and if the inequality holds at $n$, then splitting at $2^{n}$ gives $A_{2^{n+1}} = A_{2^{n}} + \sum_{k=2^{n}+1}^{2^{n+1}} a_k \ge A_{2^{n}} + 2^{n} a_{2^{n+1}}$, whence $2A_{2^{n+1}} \ge 2A_{2^{n}} + 2^{n+1} a_{2^{n+1}} \ge \sum_{j=1}^{n+1} 2^{j} a_{2^{j}}$. [step 2.2, step 1.1, L1, L3, L4]

4.1 For every $N \in \mathbb{N}$ we have $N \le 2^{N}-1$, so $A_N \le A_{2^{N}-1} \le C_N \le C$, the first inequality because the partial sums $A_n$ are nondecreasing. [step 1.4, step 3.1, step 2.3, step 1.1, L5]

4.2 For every $n \in \mathbb{N}$, $\sum_{j=1}^{n} 2^{j} a_{2^{j}} \le 2 A_{2^{n}} \le 2A$, and splitting the condensed partial sum at $j = 1$ gives $C_{n+1} = a_1 + \sum_{j=1}^{n} 2^{j} a_{2^{j}} \le a_1 + 2A$. [step 3.2, step 2.4, L1, L3]

5.1 So the partial sums of $\sum_{k \ge 1} a_k$ are bounded above by $C$, and that series converges. [step 4.1, L5]

5.2 Also $C_0 = 0 \le a_1 + 2A$, so every condensed partial sum is at most $a_1 + 2A$, and the condensed series converges. [step 4.2, step 1.1, L5]

6.1 The two implications just established combine, so the two series converge or diverge together. [step 5.1, step 5.2] ∎

## Remarks

- **What monotonicity buys, in one sentence.** It lets a block of $2^{n}$ consecutive terms be squeezed between $2^{n}$ copies of its last term and $2^{n}$ copies of its first, which is exactly the pair of estimates in steps 2.1 and 2.2. Without it a block carries no information about any single term in it, and the two series decouple entirely.

- **The factor $2$ in the lower estimate is not an artefact.** The blocks used for the two estimates are different: the upper estimate groups $2^{n}, \dots, 2^{n+1}-1$ and the lower estimate groups $2^{n}+1, \dots, 2^{n+1}$, and the second grouping produces $2^{n} a_{2^{n+1}}$, which is half of the condensed term $2^{n+1} a_{2^{n+1}}$. Since only boundedness of the partial sums is at stake, a constant factor is harmless.

- **Base $2$ is a choice, not a necessity.** The same argument with blocks of length $c^{n}$ gives the analogous test for any integer $c \ge 2$. Base $2$ is taken here because it is the one every later application uses, and because the arithmetic of $2^{n+1} = 2 \cdot 2^{n}$ keeps the induction free of extra bookkeeping.
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

### `thm-nth-roots-exist`

````markdown
---
id: thm-nth-roots-exist
kind: theorem
title: "Existence and uniqueness of $n$-th roots: a unique $a^{1/n} \\ge 0$ with $(a^{1/n})^n = a$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-sup-epsilon, lem-sup-unique, lem-power-monotone, lem-power-difference-factorisation, def-bounded-set, lem-of-add-order, thm-of-square-roots, def-integer-power, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, lem-of-zero-mult, lem-of-naturals-positive, lem-of-q-embeds, def-ordered-field]
justified_by: []
aliases: [thm-nth-root, def-nth-root]
landmark: true
short: "unique $s\\ge0$ with $s^n=a$"
proof_strategy: contradiction
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
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Radicals and rational exponents (Emory University)"
      url: "https://mathcenter.oxford.emory.edu/site/math100/radicals/"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.21)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).
For every $a \in \mathbb{R}$ with $a \ge 0$ and every $n \in \mathbb{N}$ with
$n \ge 1$ there is a **unique** $s \in \mathbb{R}$ with $s \ge 0$ and $s^n = a$
([[def-integer-power]]); we write

$$s = a^{1/n} = \sqrt[n]{a}.$$

Moreover $a^{1/n} > 0$ when $a > 0$, and $a^{1/1} = a$.

**This generalises the published [[thm-of-square-roots]], and the case $n = 2$ is
not new.** That theorem already produces the unique $\sqrt{a} \ge 0$ with
$(\sqrt{a})^2 = a$, and it is cited as such throughout the library; the notation
$a^{1/2}$ introduced here is the same number. What is new is the passage to
general $n$: the completed square that drives the $n = 2$ argument has no direct
analogue, and its place is taken by the factorisation of $b^n - a^n$ and the
resulting Lipschitz estimate ([[lem-power-difference-factorisation]]).

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]]), that is, an ordered field ([[def-ordered-field]]) with the least-upper-bound property; an element $a \ge 0$; and a natural $n \ge 1$, with $\iota(n) \in \mathbb{R}$ written $n$ ([[lem-of-naturals-positive]], [[lem-of-q-embeds]]).

[L1] Least-upper-bound property: every nonempty subset of $\mathbb{R}$ that is bounded above ([[def-bounded-set]]) has a least upper bound, and it is unique, so the notation $\sup S$ is legitimate ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L2] Epsilon characterisation of the supremum: if $S$ is nonempty and bounded above and $u = \sup S$, then for every $\varepsilon > 0$ there is $t \in S$ with $u - \varepsilon < t$ ([[lem-sup-epsilon]]).

[L3] Monotonicity of powers ([[lem-power-monotone]]): $x \mapsto x^n$ is strictly increasing on $\{x \ge 0\}$ for $n \ge 1$, hence injective there; $x \ge 0$ implies $x^n \ge 0$ and $x > 0$ implies $x^n > 0$; and $x \ge 1$ implies $x^n \ge x$.

[L4] Lipschitz estimate ([[lem-power-difference-factorisation]]): if $0 \le x \le y \le B$ and $n \ge 1$ then $0 \le y^n - x^n \le n B^{\,n-1}(y - x)$.

[L5] Order arithmetic: adding a constant preserves the order and for $c > 0$, $x < y \iff cx < cy$ ([[lem-of-add-order]], [[lem-of-sign-rules]]), both stated there for the STRICT order alone, so where a $\le$ is added or scaled below the move is that statement together with the case of equality, settled by trichotomy ([[def-ordered-field]]); $1 > 0$, which is proved in [[cor-of-one-positive]] and stated by none of those three, hence $2 = 1 + 1 > 0$; and $0 < 2^{-1} < 1$, since $0 < 1 < 2$ gives $0 < 2^{-1} < 1^{-1} = 1$ ([[lem-of-inverse-positive]], claim 2).

[L6] Trichotomy: for $x, y \in \mathbb{R}$ exactly one of $x < y$, $x = y$, $y < x$ holds; consequently any two elements have a minimum ([[def-ordered-field]]).

[L7] A product with a zero factor vanishes: $0 \cdot x = x \cdot 0 = 0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** contradiction.

1.1 If $a = 0$ then $s = 0$ satisfies $s \ge 0$ and $s^n = 0 = a$, since $0^n = 0^{n-1} \cdot 0 = 0$ for $n \ge 1$; so existence holds in that case and we assume $a > 0$ from here on. [given, L3, L7, algebra]

1.2 Uniqueness holds as soon as a root exists: if $u, v \ge 0$ satisfy $u^n = v^n$, then strict monotonicity of $x \mapsto x^n$ on the nonnegatives rules out both $u < v$ and $v < u$, so $u = v$ by trichotomy. [L3, L6]

1.3 Define $S = \{t \in \mathbb{R} : t \ge 0 \text{ and } t^n \le a\}$; then $0 \in S$, because $0 \ge 0$ and $0^n = 0 \le a$, so $S$ is nonempty. [given, L3, L7]

1.4 The element $M := 1 + a$ is an upper bound of $S$: since $a > 0$ and $1 > 0$ we have $M > 1$ and $M > a$, so any $t > M$ satisfies $t > 1$, whence $t^n \ge t > M > a$ and $t \notin S$. [given, L3, L5]

2.1 By the least-upper-bound property $s := \sup S$ exists in $\mathbb{R}$; moreover $s \ge 0$ because $0 \in S$, and $s \le M$ because $M$ is an upper bound and $s$ is the least one. [L1, step 1.3, step 1.4]

3.1 Put $B := M + 1 = a + 2$; then $B > M \ge 1 > 0$, so $B^{\,n-1} > 0$ and $n B^{\,n-1} > 0$, and every $x$ with $0 \le x \le M + 1$ satisfies $0 \le x \le B$. [step 2.1, L3, L5]

3.2 Assume, for contradiction, that $s^n \ne a$; by trichotomy either $s^n < a$ or $s^n > a$. [assume-contra, step 2.1, L6]

4.1 (Case $s^n < a$.) Put $\delta := \min\{1, (a - s^n)(n B^{\,n-1})^{-1}\}$, which is $> 0$ since $a - s^n > 0$ and $n B^{\,n-1} > 0$, and put $h := 2^{-1}\delta$, so that $0 < h < \delta \le 1$ and $h < (a - s^n)(nB^{\,n-1})^{-1}$; then $0 \le s \le s + h \le M + 1 = B$, so the Lipschitz estimate gives $(s+h)^n - s^n \le nB^{\,n-1} h < a - s^n$, hence $(s+h)^n < a$ and $s + h \in S$, while $s + h > s$ contradicts that $s$ is an upper bound of $S$. [assume-case low, step 3.2, step 2.1, step 3.1, L4, L5, L6, choose]

4.2 (Case $s^n > a$.) Here $s > 0$, since $s = 0$ would give $s^n = 0 \le a$; put $\delta := \min\{s, (s^n - a)(nB^{\,n-1})^{-1}\} > 0$ and $h := 2^{-1}\delta$, so that $0 < h < s$ and $h < (s^n - a)(nB^{\,n-1})^{-1}$; then $0 \le s - h \le s \le B$, so the Lipschitz estimate gives $s^n - (s-h)^n \le nB^{\,n-1}h < s^n - a$, hence $(s-h)^n > a$; applying the epsilon characterisation with $\varepsilon = h$ produces $t \in S$ with $t > s - h \ge 0$, whence $t^n > (s-h)^n > a$ by strict monotonicity, contradicting $t \in S$. [assume-case high, step 3.2, step 2.1, step 3.1, L2, L3, L4, L5, L6, L7, choose]

5.1 Both cases of the disjunction in step 3.2 are impossible, so the assumption fails and $s^n = a$; this $s$ is the unique nonnegative $n$-th root of $a$ by step 1.2, it satisfies $s > 0$ when $a > 0$ because $s = 0$ would force $a = s^n = 0$, and at $n = 1$ the element $a$ itself is a nonnegative solution of $s^1 = a$, so $a^{1/1} = a$; writing $a^{1/n} = \sqrt[n]{a}$ for it, the case $n = 2$ recovers the already published $\sqrt{a}$ of [[thm-of-square-roots]]. [step 4.1, step 4.2, step 3.2, step 1.2, step 1.1, L3, L7, cases, discharge-contradiction] ∎
````

