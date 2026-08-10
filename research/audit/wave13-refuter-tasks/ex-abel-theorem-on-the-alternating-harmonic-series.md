## Selection reasons

- high risk (5): 3 cited facts; boundary-sensitive language; analytic limiting/completeness language

## Target item — `ex-abel-theorem-on-the-alternating-harmonic-series`

Normalized current SHA-256: `24036b837233dbac24c956467a54aa19720a23072767d77793882e7bb819b84b`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: ex-abel-theorem-on-the-alternating-harmonic-series
kind: example
title: "The alternating harmonic series illustrates Abel's boundary-limit theorem without evaluating its sum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-alternating-series-test, thm-abel-limit-theorem, def-canonical-natural]
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
    - title: "Abel theorem, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Abel_theorem"
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
    - title: "S. Semmes, Rice Math 322 notes"
      url: "https://math.rice.edu/~semmes/math322.pdf"
pipeline_run: null
---

## Statement

Let $s$ denote the ordinary sum of the alternating harmonic series

$$s:=\sum_{n=0}^{\infty}\frac{(-1)^n}{\iota(n+1)}.$$

Then, without evaluating $s$,

$$\lim_{x\uparrow1}\sum_{n=0}^{\infty}\frac{(-1)^nx^n}{\iota(n+1)}=s.$$

## Facts & Assumptions

**Given:** The zero-indexed alternating harmonic series.

[L1] It converges by the alternating-series test ([[thm-alternating-series-test]], [[def-canonical-natural]]).

[L2] Abel's limit theorem identifies the boundary limit with the ordinary sum of any convergent series ([[thm-abel-limit-theorem]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the ordinary sum $s$ exists. [L1]

2.1 Apply [L2] to its coefficients $a_n=(-1)^n/\iota(n+1)$ to obtain the displayed limit. No closed-form evaluation of $s$ is needed. [step 1.1, L2] ∎
````

## Wave 13 provenance row

```json
{
  "id": "ex-abel-theorem-on-the-alternating-harmonic-series",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf",
    "https://math.rice.edu/~semmes/math322.pdf"
  ],
  "rationale": "The sources state Abel's theorem and discuss the alternating harmonic series as an application. The item records the zero-indexed version and applies the local theorem directly.",
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
      "source": "thm-alternating-series-test",
      "source_section": "Statement",
      "quote": "Let $(\\varepsilon_k)$ be the alternating sequence of [[lem-alternating-sequence]],\nthat is the unique sequence of reals with $\\varepsilon_0 = 1$ and\n$\\varepsilon_{k+1} = -\\varepsilon_k$, which is what is usually written\n$\\varepsilon_k = (-1)^k$; let $e$ and $o$ be its even and odd index maps, so that\n$\\varepsilon_{e_j} = 1$, $\\varepsilon_{o_j} = -1$, and every natural number is\n$e_j$ for exactly one $j$ or $o_j$ for exactly one $j$.\n\nLet $(b_k)$ be a sequence of reals that is nonincreasing\n([[def-monotone-sequence]]) and converges to $0$ ([[def-real-limit]]); then\n$b_k \\ge 0$ for every $k$. Write $t_n := \\sum_{k<n} \\varepsilon_k b_k$ for the\npartial sums ([[def-series]]). Then:\n\n1. the series $\\sum \\varepsilon_k b_k$ converges; write $L$ for its sum;\n2. $t_{e_j} \\le L \\le t_{o_j}$ for every $j \\in \\mathbb{N}$, and for every\n   $n \\in \\mathbb{N}$ the sum $L$ lies between the two consecutive partial sums\n   $t_n$ and $t_{n+1}$;\n3. $|L - t_n| \\le b_n$ for every $n \\in \\mathbb{N}$.\n\nClaim 3 is the error bound: the partial sum $t_n$, which uses the $n$ terms\n$\\varepsilon_0 b_0, \\dots, \\varepsilon_{n-1}b_{n-1}$, differs from the sum by at\nmost the first term omitted.\n\n**Only claim 1 is a corollary of [[thm-dirichlet-test]].** Claims 2 and 3 are not:\nthey come from the interlacing of the even-index and odd-index partial sums, and\nthat argument is carried out below rather than smuggled into the Dirichlet\nestimate, which produces no bracketing at all.",
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
      "source": "thm-abel-limit-theorem",
      "source_section": "Statement",
      "quote": "If the real series $\\sum_{n\\ge0}a_n$ converges ordinarily to $s$, then it is Abel summable to $s$:\n\n$$\\lim_{x\\uparrow1}\\sum_{n=0}^{\\infty}a_nx^n=s.$$",
      "quote_selection": "full-source-section",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "By [L1], the ordinary sum $s$ exists.",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Apply [L2] to its coefficients $a_n=(-1)^n/\\iota(n+1)$ to obtain the displayed limit. No closed-form evaluation of $s$ is needed.",
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
      "status": "not_applicable",
      "reason": "ex-abel-theorem-on-the-alternating-harmonic-series: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Let $s$ denote the ordinary sum of the alternating harmonic series $$s:=\\sum_{n=0}^{\\infty}\\frac{(-1)^n}{\\iota(n+1)}.$$ Then, without evaluating $s$, $$\\lim_{x\\uparrow1}\\sum_{n=0}^{\\infty}\\frac{(-1)^nx^n}{\\iota(n+1)}=s.$"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "ex-abel-theorem-on-the-alternating-harmonic-series: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: Let $s$ denote the ordinary sum of the alternating harmonic series $$s:=\\sum_{n=0}^{\\infty}\\frac{(-1)^n}{\\iota(n+1)}.$$ Then, without evaluating $s$, $$\\lim_{x\\uparrow1}\\sum_{n=0}^{\\infty}\\frac{(-1)^nx^n}{\\iota(n+1)}=s.$"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "ex-abel-theorem-on-the-alternating-harmonic-series: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Let $s$ denote the ordinary sum of the alternating harmonic series $$s:=\\sum_{n=0}^{\\infty}\\frac{(-1)^n}{\\iota(n+1)}.$$ Then, without evaluating $s$, $$\\lim_{x\\uparrow1}\\sum_{n=0}^{\\infty}\\frac{(-1)^nx^n}{\\iota(n+1)}=s.$"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "ex-abel-theorem-on-the-alternating-harmonic-series: no geometric or algebraic degeneracy changes the asserted conclusion; checked against the Statement: Let $s$ denote the ordinary sum of the alternating harmonic series $$s:=\\sum_{n=0}^{\\infty}\\frac{(-1)^n}{\\iota(n+1)}.$$ Then, without evaluating $s$, $$\\lim_{x\\uparrow1}\\sum_{n=0}^{\\infty}\\frac{(-1)^nx^n}{\\iota(n+1)}=s.$"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "ex-abel-theorem-on-the-alternating-harmonic-series: no interval or radial endpoint is part of the conclusion; checked against the Statement: Let $s$ denote the ordinary sum of the alternating harmonic series $$s:=\\sum_{n=0}^{\\infty}\\frac{(-1)^n}{\\iota(n+1)}.$$ Then, without evaluating $s$, $$\\lim_{x\\uparrow1}\\sum_{n=0}^{\\infty}\\frac{(-1)^nx^n}{\\iota(n+1)}=s.$"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "ex-abel-theorem-on-the-alternating-harmonic-series: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement: Let $s$ denote the ordinary sum of the alternating harmonic series $$s:=\\sum_{n=0}^{\\infty}\\frac{(-1)^n}{\\iota(n+1)}.$$ Then, without evaluating $s$, $$\\lim_{x\\uparrow1}\\sum_{n=0}^{\\infty}\\frac{(-1)^nx^n}{\\iota(n+1)}=s.$"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "ex-abel-theorem-on-the-alternating-harmonic-series: the Statement is not an equivalence, so there is no forward implication obligation: Let $s$ denote the ordinary sum of the alternating harmonic series $$s:=\\sum_{n=0}^{\\infty}\\frac{(-1)^n}{\\iota(n+1)}.$$ Then, without evaluating $s$, $$\\lim_{x\\uparrow1}\\sum_{n=0}^{\\infty}\\frac{(-1)^nx^n}{\\iota(n+1)}=s.$"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "ex-abel-theorem-on-the-alternating-harmonic-series: the Statement is not an equivalence, so there is no reverse implication obligation: Let $s$ denote the ordinary sum of the alternating harmonic series $$s:=\\sum_{n=0}^{\\infty}\\frac{(-1)^n}{\\iota(n+1)}.$$ Then, without evaluating $s$, $$\\lim_{x\\uparrow1}\\sum_{n=0}^{\\infty}\\frac{(-1)^nx^n}{\\iota(n+1)}=s.$"
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "ex-abel-theorem-on-the-alternating-harmonic-series",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "thm-alternating-series-test",
    "declared_target": "thm-alternating-series-test",
    "target_statement_provenance": "literature-derived",
    "targetPage": "absolute-convergence-and-rearrangement",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-abel-theorem-on-the-alternating-harmonic-series",
    "sourcePage": "power-series-and-real-analytic-functions-examples",
    "batch": "wave13-real-analysis",
    "target": "thm-abel-limit-theorem",
    "declared_target": "thm-abel-limit-theorem",
    "target_statement_provenance": "literature-derived",
    "targetPage": "power-series-and-real-analytic-functions",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-abel-theorem-on-the-alternating-harmonic-series",
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

## Full exact-current text of every cited or declared item (3)

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

### `thm-abel-limit-theorem`

````markdown
---
id: thm-abel-limit-theorem
kind: theorem
title: "Abel's limit theorem: if a real series converges to $s$, then its power series tends to $s$ as $x\\uparrow1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-abel-and-cesaro-summability-of-a-series, lem-abel-summation-by-parts, thm-geometric-series, lem-convergent-implies-bounded, thm-direct-comparison-test]
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
    - title: "Abel theorem, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Abel_theorem"
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
    - title: "S. Semmes, Rice Math 322 notes"
      url: "https://math.rice.edu/~semmes/math322.pdf"
pipeline_run: null
---

## Statement

If the real series $\sum_{n\ge0}a_n$ converges ordinarily to $s$, then it is Abel summable to $s$:

$$\lim_{x\uparrow1}\sum_{n=0}^{\infty}a_nx^n=s.$$

## Facts & Assumptions

**Given:** Inclusive partial sums $S_n:=\sum_{k=0}^{n}a_k$ with $S_n\to s$.

[L1] Finite Abel summation gives $\sum_{k=0}^{N}a_kx^k=S_Nx^N+(1-x)\sum_{k=0}^{N-1}S_kx^k$ ([[lem-abel-summation-by-parts]]).

[L2] A convergent sequence is bounded ([[lem-convergent-implies-bounded]]).

[L3] $\sum_{n\ge0}x^n=1/(1-x)$ for $0\le x<1$ ([[thm-geometric-series]]).

[L4] A nonnegative series dominated termwise by a convergent nonnegative series converges ([[thm-direct-comparison-test]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], choose $M$ with $|S_n|\le M$ for every $n$. For fixed $0\le x<1$, one has $|S_nx^n|\le Mx^n$, so [L3] and [L4] give absolute convergence of $\sum_nS_nx^n$; the same bound gives $S_Nx^N\to0$. [L2, L3, L4, choose]

2.1 Apply [L1] and let $N\to\infty$. Step 1.1 gives convergence of the Abel series and $A(x)=(1-x)\sum_{n\ge0}S_nx^n$. Subtracting $s=(1-x)\sum_{n\ge0}sx^n$ gives $A(x)-s=(1-x)\sum_{n\ge0}(S_n-s)x^n$. [step 1.1, L1, L3]

3.1 Given $\varepsilon>0$, choose $N$ so that $|S_n-s|<\varepsilon$ for $n\ge N$. The tail of step 2.1 has absolute value at most $\varepsilon(1-x)\sum_{n\ge N}x^n\le\varepsilon$. [given, step 2.1, L3, choose]

4.1 The finite head $(1-x)\sum_{n<N}(S_n-s)x^n$ tends to $0$ as $x\uparrow1$. Thus $|A(x)-s|<2\varepsilon$ for all sufficiently large $x<1$, proving the asserted one-sided limit and Abel summability. [step 2.1, step 3.1] ∎
````

### `thm-alternating-series-test`

````markdown
---
id: thm-alternating-series-test
kind: theorem
title: "The alternating series test: if $(b_k)$ is nonincreasing with $b_k \\to 0$ then $\\sum_{k} (-1)^{k} b_k$ converges, the sum lies between any two consecutive partial sums, and the error after $n$ terms is at most $b_n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dirichlet-test, lem-alternating-sequence, def-monotone-sequence, lem-limit-preserves-order, lem-subsequence-inherits-limit, thm-induction-principle, lem-of-abs-value, def-series, def-real-limit]
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
    - title: "Alternating series test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alternating_series_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Statement

Let $(\varepsilon_k)$ be the alternating sequence of [[lem-alternating-sequence]],
that is the unique sequence of reals with $\varepsilon_0 = 1$ and
$\varepsilon_{k+1} = -\varepsilon_k$, which is what is usually written
$\varepsilon_k = (-1)^k$; let $e$ and $o$ be its even and odd index maps, so that
$\varepsilon_{e_j} = 1$, $\varepsilon_{o_j} = -1$, and every natural number is
$e_j$ for exactly one $j$ or $o_j$ for exactly one $j$.

Let $(b_k)$ be a sequence of reals that is nonincreasing
([[def-monotone-sequence]]) and converges to $0$ ([[def-real-limit]]); then
$b_k \ge 0$ for every $k$. Write $t_n := \sum_{k<n} \varepsilon_k b_k$ for the
partial sums ([[def-series]]). Then:

1. the series $\sum \varepsilon_k b_k$ converges; write $L$ for its sum;
2. $t_{e_j} \le L \le t_{o_j}$ for every $j \in \mathbb{N}$, and for every
   $n \in \mathbb{N}$ the sum $L$ lies between the two consecutive partial sums
   $t_n$ and $t_{n+1}$;
3. $|L - t_n| \le b_n$ for every $n \in \mathbb{N}$.

Claim 3 is the error bound: the partial sum $t_n$, which uses the $n$ terms
$\varepsilon_0 b_0, \dots, \varepsilon_{n-1}b_{n-1}$, differs from the sum by at
most the first term omitted.

**Only claim 1 is a corollary of [[thm-dirichlet-test]].** Claims 2 and 3 are not:
they come from the interlacing of the even-index and odd-index partial sums, and
that argument is carried out below rather than smuggled into the Dirichlet
estimate, which produces no bracketing at all.

## Facts & Assumptions

**Given:** A nonincreasing sequence $(b_k)$ of reals with $b_k \to 0$, the alternating sequence $(\varepsilon_k)$ with its index maps $e$ and $o$, and the partial sums $t_n = \sum_{k<n} \varepsilon_k b_k$.

[L1] The alternating sequence and its index maps: $\varepsilon_0 = 1$, $\varepsilon_{k+1} = -\varepsilon_k$, $|\varepsilon_k| = 1$; $e_0 = 0$ and $e_{j+1} = e_j + 2$; $o_0 = 1$ and $o_{j+1} = o_j + 2$; both $e$ and $o$ are strictly increasing; $\mathbb{N}$ is the disjoint union of their ranges; $\varepsilon_{e_j} = 1$ and $\varepsilon_{o_j} = -1$ ([[lem-alternating-sequence]]).

[L2] Nonincreasing means $b_j \ge b_k$ whenever $j \le k$ ([[def-monotone-sequence]]).

[L3] Limits preserve non-strict inequalities holding eventually ([[lem-limit-preserves-order]], [[def-real-limit]]).

[L4] Dirichlet's test: if the partial sums of $\sum x_k$ are bounded and $(y_k)$ is nonincreasing with $y_k \to 0$, then $\sum x_k y_k$ converges ([[thm-dirichlet-test]]).

[L5] A subsequence of a convergent sequence converges to the same limit ([[lem-subsequence-inherits-limit]]).

[L6] Partial sums satisfy $t_0 = 0$ and $t_{n+1} = t_n + \varepsilon_n b_n$ ([[def-series]]).

[L7] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L8] Absolute value: $|xy| = |x|\,|y|$ and $|x| \ge 0$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 For each fixed $k$ the inequality $b_m \le b_k$ holds for all $m \ge k$, and $(b_m)_m$ converges to $0$ while the constant sequence with value $b_k$ converges to $b_k$; hence $b_k \ge 0$. [given, L2, L3]

1.2 Writing $A_n = \sum_{k<n}\varepsilon_k$, an induction gives that for every $n$ either $A_n = 0$ and $\varepsilon_n = 1$, or $A_n = 1$ and $\varepsilon_n = -1$: at $n = 0$ we have $A_0 = 0$ and $\varepsilon_0 = 1$; and if $A_n = 0$ and $\varepsilon_n = 1$ then $A_{n+1} = 1$ and $\varepsilon_{n+1} = -1$, while if $A_n = 1$ and $\varepsilon_n = -1$ then $A_{n+1} = 0$ and $\varepsilon_{n+1} = 1$. In particular $|A_n| \le 1$ for every $n$. [L1, L6, L7]

1.3 For every $j$ one has $o_j = e_j + 1$ and $e_{j+1} = o_j + 1$, by induction: $o_0 = 1 = e_0 + 1$; and if $o_j = e_j + 1$ then $e_{j+1} = e_j + 2 = o_j + 1$ and $o_{j+1} = o_j + 2 = e_{j+1} + 1$. [L1, L7]

1.4 By [L6], $t_{n+1} - t_n = \varepsilon_n b_n$ for every $n$; hence $t_{e_j + 1} = t_{e_j} + b_{e_j}$ and $t_{o_j + 1} = t_{o_j} - b_{o_j}$. [L1, L6]

2.1 The partial sums of $\sum \varepsilon_k$ are bounded by step 1.2 and $(b_k)$ is nonincreasing with limit $0$, so $\sum \varepsilon_k b_k$ converges by Dirichlet's test; write $L$ for its sum, so that $t_n \to L$. [step 1.2, given, L4]

2.2 Using step 1.3, $t_{o_j} = t_{e_j + 1} = t_{e_j} + b_{e_j}$ and $t_{e_{j+1}} = t_{o_j + 1} = t_{o_j} - b_{o_j}$, so $t_{e_{j+1}} = t_{e_j} + b_{e_j} - b_{o_j}$ and $t_{o_{j+1}} = t_{e_{j+1}} + b_{e_{j+1}} = t_{o_j} - b_{o_j} + b_{e_{j+1}}$. [step 1.3, step 1.4]

3.1 Since $e_j < o_j < e_{j+1}$ and $(b_k)$ is nonincreasing, $b_{e_j} - b_{o_j} \ge 0$ and $b_{e_{j+1}} - b_{o_j} \le 0$; so by step 2.2 the sequence $(t_{e_j})_j$ is nondecreasing and the sequence $(t_{o_j})_j$ is nonincreasing. [step 1.3, step 2.2, L2]

3.2 The maps $e$ and $o$ are strictly increasing, so $(t_{e_j})_j$ and $(t_{o_j})_j$ are subsequences of $(t_n)$ and both converge to $L$. [step 2.1, L1, L5]

4.1 Fix $j$. For every $m \ge j$ one has $t_{e_j} \le t_{e_m}$, and $(t_{e_m})_m$ converges to $L$, so $t_{e_j} \le L$; symmetrically $t_{o_j} \ge L$. This is the first half of claim 2. [step 3.1, step 3.2, L3]

5.1 Let $n \in \mathbb{N}$. If $n = e_j$ then $t_n = t_{e_j} \le L$ and $t_{n+1} = t_{e_j+1} = t_{o_j} \ge L$; if $n = o_j$ then $t_n = t_{o_j} \ge L$ and $t_{n+1} = t_{o_j+1} = t_{e_{j+1}} \le L$. Since every $n$ is of exactly one of these two forms, $L$ always lies between $t_n$ and $t_{n+1}$, which is the second half of claim 2. [step 1.3, step 4.1, L1]

6.1 Consequently $|L - t_n| \le |t_{n+1} - t_n| = |\varepsilon_n b_n| = |\varepsilon_n|\,b_n = b_n$ for every $n$, using $b_n \ge 0$ and $|\varepsilon_n| = 1$; this is claim 3. [step 5.1, step 1.4, step 1.1, L1, L8] ∎

## Remarks

- **The two hypotheses are not interchangeable with "$b_k \to 0$" alone.** A null sequence that is not monotone can make $\sum \varepsilon_k b_k$ diverge, and the bracketing of step 3.1 is exactly where monotonicity enters; the error bound is false without it. The test as stated is the classical Leibniz criterion.

- **Why the index maps rather than "$2j$" and "$2j+1$".** The even and odd index maps come from [[lem-alternating-sequence]] together with the parity object itself, and step 1.3 is the only arithmetic needed about them. Rebuilding $(-1)^k$ by a fresh recursion inside this proof, and then proving afresh that the even indices and the odd indices partition $\mathbb{N}$, is precisely what that lemma exists to prevent.

- **What the test does not give.** It produces the sum $L$ as a limit and bounds the error, and it identifies $L$ with no closed expression. For the alternating harmonic series the value is not available at this point in the reading order; see [[rem-sums-proved-to-exist-but-not-evaluated]].
````

