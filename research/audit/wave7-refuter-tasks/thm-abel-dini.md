## Selection reasons

- critical risk (15): 15 declared dependencies; 16 cited facts; 9 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; quotient or equivalence-class construction; analytic limiting/completeness language

## Target item — `thm-abel-dini`

Normalized current SHA-256: `159f7a3f9acd4aa25271cafd04003b8c2f02e516c492cf6a82cd0e11029c56c1`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-abel-dini
kind: theorem
title: "For a divergent series of positive terms with partial sums $s_k$, the series $\\sum a_k/s_k$ diverges and $\\sum a_k/s_k^2$ converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-series, thm-nonnegative-series-bounded-partial-sums, thm-series-cauchy-criterion, lem-telescoping-series, thm-direct-comparison-test, def-monotone-sequence, lem-monotone-unbounded-diverges, def-divergence-to-infinity, def-integer-power, lem-reciprocal-of-null-diverges, lem-of-inverse-positive, lem-series-tail-invariance, def-finite-sum, lem-finite-sum-laws, def-real-limit]
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
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
    - title: "Abel-Dini-Pringsheim theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Abel%E2%80%93Dini%E2%80%93Pringsheim_theorem"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k > 0$ for every $k \in \mathbb{N}$
and suppose $\sum a_k$ **diverges** ([[def-series]]). Write

$$S_n \;:=\; \sum_{k=0}^{n} a_k \qquad (n \in \mathbb{N})$$

for the **inclusive** partial sums, so that $S_n = s_{n+1}$ in the notation
$s_n = \sum_{k<n} a_k$ of [[def-series]]. Then $S_n > 0$ for every
$n \in \mathbb{N}$, and:

1. $\displaystyle\sum_{n} \frac{a_n}{S_n}$ diverges;
2. $\displaystyle\sum_{n} \frac{a_n}{S_n^{2}}$ converges.

**Why the divisor is the inclusive partial sum.** The exclusive partial sum of
[[def-series]] has $s_0 = 0$, the empty sum, so $a_0/s_0$ has no value and a
series divided by $s_n$ would have to begin at $n = 1$. The inclusive sum has
$S_0 = a_0 > 0$, so both series above are series of sequences on $\mathbb{N}$
with no shift and no excluded index. The classical statement, which writes
$s_n = a_1 + \dots + a_n$ and starts at $n = 1$, is this one with the indices
moved by one.

**What the theorem says.** No divergent series of positive terms is slowest:
dividing its terms by the running total produces a series that still diverges but
whose terms are eventually strictly smaller. Dividing by the square of the
running total overshoots and produces a convergent series. Claim 1 is what
refutes the existence of a universal comparison series
([[fs-universal-comparison-series]]).

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k > 0$ for every $k$, with $\sum a_k$ divergent; the exclusive partial sums $s_n = \sum_{k<n} a_k$ and the inclusive partial sums $S_n = \sum_{k=0}^{n} a_k = s_{n+1}$ ([[def-series]], [[def-finite-sum]]).

[L1] For a series of nonnegative terms: the partial sums are nondecreasing, the series converges if and only if their range is bounded above, and otherwise they diverge to $+\infty$ ([[thm-nonnegative-series-bounded-partial-sums]], [[lem-monotone-unbounded-diverges]], [[def-monotone-sequence]], [[def-divergence-to-infinity]]).

[L2] Splitting of finite sums: for $m \le n$, $\sum_{k=0}^{n} a_k = \sum_{k=0}^{m} a_k + \sum_{k=m+1}^{n} a_k$, so $\sum_{k=m+1}^{n} a_k = S_n - S_m$; and monotonicity of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L3] The Cauchy criterion: $\sum d_k$ converges if and only if for every real $\varepsilon > 0$ there is $N$ with $\big|\sum_{k=m+1}^{n} d_k\big| < \varepsilon$ for all $n > m \ge N$ ([[thm-series-cauchy-criterion]]).

[L4] For positive terms, $x_n \to 0$ if and only if $1/x_n \to +\infty$ ([[lem-reciprocal-of-null-diverges]], [[def-real-limit]]).

[L5] $\sum (b_n - b_{n+1})$ converges whenever $(b_n)$ converges ([[lem-telescoping-series]]).

[L6] Direct comparison ([[thm-direct-comparison-test]]), and a series converges if and only if each of its tail series converges ([[lem-series-tail-invariance]]).

[L7] Reciprocation on the positives: $0 < x \le y$ implies $0 < 1/y \le 1/x$ ([[lem-of-inverse-positive]]); and $x^{2} = x \cdot x$ ([[def-integer-power]]).

## Proof

**Proof technique:** direct.

1.1 Every $S_n$ is a sum of positive terms, so $S_n > 0$; and $S_n \le S_{n+1}$ since $S_{n+1} - S_n = a_{n+1} > 0$, so $(S_n)$ is nondecreasing and $S_m \le S_n$ whenever $m \le n$. [given, L2, L1]

1.2 Since $\sum a_k$ diverges and its terms are nonnegative, the exclusive partial sums are unbounded above and $s_n \to +\infty$; hence $S_n = s_{n+1} \to +\infty$, because for a given real $M$ any index bound $K$ working for $(s_n)$ also works for $(S_n)$. [given, L1, algebra]

2.1 For all naturals $n > m$, using $S_k \le S_n$ for $k \le n$ and $a_k > 0$: $\displaystyle\sum_{k=m+1}^{n} \frac{a_k}{S_k} \ \ge \ \sum_{k=m+1}^{n} \frac{a_k}{S_n} \ = \ \frac{S_n - S_m}{S_n} \ = \ 1 - \frac{S_m}{S_n}$. [step 1.1, L2, L7]

2.2 Put $b_n := 1/S_n$, which is positive; since $1/b_n = S_n \to +\infty$, the sequence $(b_n)$ converges to $0$. [step 1.1, step 1.2, L4, L7]

2.3 For every $n \in \mathbb{N}$: $b_n - b_{n+1} = \dfrac{1}{S_n} - \dfrac{1}{S_{n+1}} = \dfrac{S_{n+1}-S_n}{S_n S_{n+1}} = \dfrac{a_{n+1}}{S_n S_{n+1}} \ \ge \ \dfrac{a_{n+1}}{S_{n+1}^{2}} \ > \ 0$, the inequality because $0 < S_n S_{n+1} \le S_{n+1}^{2}$. [step 1.1, L2, L7, algebra]

3.1 Let $N \in \mathbb{N}$ be arbitrary and put $m := N$. Since $S_n \to +\infty$ there is $n > m$ with $S_n > 2 S_m$, and then $S_m/S_n < 1/2$, so the block of step 2.1 satisfies $\sum_{k=m+1}^{n} a_k/S_k > 1/2$. [step 1.2, step 2.1, L7, choose]

3.2 Therefore $\sum_n (b_n - b_{n+1})$ converges. [step 2.2, L5]

4.1 So no $N$ witnesses the Cauchy condition for the tolerance $\varepsilon = 1/2$, and $\sum_n a_n/S_n$ diverges, which is claim 1. [step 3.1, L3]

5.1 By comparison, $\sum_n \dfrac{a_{n+1}}{S_{n+1}^{2}}$ converges; that series is the $1$-st tail series of $\sum_n \dfrac{a_n}{S_n^{2}}$, so the latter converges, which is claim 2. [step 3.2, step 2.3, L6] ∎

## Remarks

- **The two claims are not two theorems but one pair of estimates.** Divergence comes from bounding a block below by $1 - S_m/S_n$, which the Cauchy criterion turns into a refutation of convergence; convergence comes from bounding a single term above by a telescoping difference. The first estimate needs $S_n$ to grow without bound and the second needs it to be nondecreasing, and both facts come from divergence of $\sum a_k$ together with positivity of its terms.

- **The exponent $2$ is not optimal, and this page does not pursue that.** The classical refinement replaces $S_n^{2}$ by $S_n^{1+\delta}$ for a rational $\delta > 0$; the argument is the same in outline but needs an estimate for $S_n^{-\delta} - S_{n+1}^{-\delta}$ that the tools on this page do not supply cleanly. The square is what claim 1 needs a companion for, and it is enough for every use made of the theorem here.

- **Positivity is used at every step.** It gives $S_n > 0$, so the quotients exist; it makes $(S_n)$ nondecreasing, which both estimates use; and it makes the terms of the two derived series nonnegative, which is what lets comparison and the boundedness criterion apply to them.
````

## Wave 7 provenance row for the target

```json
{
  "id": "thm-abel-dini",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Abel%E2%80%93Dini%E2%80%93Pringsheim_theorem"
  ],
  "rationale": "The source states the divergent-series Abel–Dini–Pringsheim theorem for positive terms with inclusive partial sums S_n: sum a_n/S_n diverges and sum a_n/S_n^t converges for t>1, hence in particular at t=2. These are exactly the item's two claims and convention. The local proof derives the two estimates directly from Cauchy and telescoping facts.",
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
      "source": "thm-nonnegative-series-bounded-partial-sums",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with $a_k \\ge 0$ for every $k \\in \\mathbb{N}$,\nlet $s_n = \\sum_{k<n} a_k$ be its partial sums and let\n$S = \\{\\, s_n : n \\in \\mathbb{N} \\,\\}$ be the range of $(s_n)$ ([[def-series]]).\nThen:\n\n1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \\ge 0$ for every\n   $n$;\n2. $\\sum a_k$ converges **if and only if** $S$ is bounded above\n   ([[def-bounded-set]]), and in that case\n   $$\\sum_{k=0}^{\\infty} a_k \\;=\\; \\sup S ,$$\n   so in particular $s_n \\le \\sum_{k=0}^{\\infty} a_k$ for every $n$;\n3. if $S$ is not bounded above then $s_n \\to +\\infty$\n   ([[def-divergence-to-infinity]]) and $\\sum a_k$ diverges.\n\nThis is the theorem that makes the nonnegative theory work: for terms of one\nsign, convergence is a boundedness question and no candidate limit is ever\nneeded. Every comparison test on this page is an application of it.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-monotone-unbounded-diverges",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a nondecreasing sequence of reals ([[def-sequence]],\n[[def-monotone-sequence]]) whose range $S = \\{x_k : k \\in \\mathbb{N}\\}$ is not\nbounded above ([[def-bounded-set]]). Then $(x_k)$ diverges to $+\\infty$\n([[def-divergence-to-infinity]]): for every $M \\in \\mathbb{R}$ there is\n$K \\in \\mathbb{N}$ with $x_k > M$ for all $k \\ge K$.\n\nRead together with the monotone convergence theorem this says that a nondecreasing\nsequence has exactly two possible behaviours, with nothing in between: it\nconverges to the supremum of its range, or it runs away to $+\\infty$.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-monotone-sequence",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\\mathbb{R}$ ordered\nas in [[def-real-order]] and [[def-complete-ordered-field]], and with\n$\\mathbb{N}$ ordered as in [[def-nat-order]]. The sequence is:\n\n- **nondecreasing** when $x_j \\le x_k$ for all $j \\le k$;\n- **increasing** (or *strictly increasing*) when $x_j < x_k$ for all $j < k$;\n- **nonincreasing** when $x_j \\ge x_k$ for all $j \\le k$;\n- **decreasing** (or *strictly decreasing*) when $x_j > x_k$ for all $j < k$;\n- **monotone** when it is nondecreasing or nonincreasing;\n- **strictly monotone** when it is increasing or decreasing;\n- **eventually monotone** when some tail $x^{(K)}$ ([[def-sequence]]) is\n  monotone, that is when there is $K \\in \\mathbb{N}$ such that the restriction of\n  the comparison to indices $\\ge K$ is one-signed.\n\nAn increasing sequence is nondecreasing and a decreasing sequence is\nnonincreasing, since $j \\le k$ means $j < k$ or $j = k$ and the second case gives\nequality. A sequence that is both nondecreasing and nonincreasing is constant.\n\n**Consecutive comparisons suffice, and that is an induction.** The four\nconditions above quantify over *all* pairs of indices, but what one checks in\npractice, and what a recursive construction delivers, is the comparison of\nconsecutive terms. The two agree:\n\n> $(x_k)$ is nondecreasing **if and only if** $x_k \\le x_{\\sigma(k)}$ for every\n> $k \\in \\mathbb{N}$, and $(x_k)$ is increasing **if and only if**\n> $x_k < x_{\\sigma(k)}$ for every $k \\in \\mathbb{N}$; likewise, with the\n> inequalities reversed, for nonincreasing and decreasing.\n\nThe forward implications are the instances $j = k$, $k = \\sigma(k)$ of the\ndefinitions, using $k < \\sigma(k)$ ([[lem-nat-discrete]]). For the converse,\nsuppose $x_i \\le x_{\\sigma(i)}$ for every $i$ and fix $k$; we show by induction\non $k$ ([[thm-induction-principle]]) that $x_j \\le x_k$ for every $j \\le k$. For\n$k = 0$: $j \\le 0$ forces $j = 0$, and $x_0 \\le x_0$. Assume the statement for\n$k$ and let $j \\le \\sigma(k)$. If $j = \\sigma(k)$ then $x_j \\le x_{\\sigma(k)}$ by\nreflexivity. Otherwise $j < \\sigma(k)$, and then $j \\le k$: were $k < j$ we would\nhave $k < j < \\sigma(k)$, which [[lem-nat-discrete]] excludes, so $j \\le k$ by\ntotality of the order on $\\mathbb{N}$ ([[thm-nat-linear-order]]). The induction\nhypothesis gives $x_j \\le x_k$, and $x_k \\le x_{\\sigma(k)}$ by assumption, so\n$x_j \\le x_{\\sigma(k)}$ by transitivity. This completes the induction. The three\nremaining equivalences are the same argument with $\\le$ replaced by $<$,\n$\\ge$ or $>$, transitivity of the strict order being used in the same place.\n\n**Boundedness of a monotone sequence is one-sided.** A nondecreasing sequence is\nbounded below by its first term $x_0$, and a nonincreasing sequence is bounded\nabove by $x_0$, both immediately from the definition with $j = 0$. So for a\nnondecreasing sequence the only substantive question is whether it is bounded\nabove, and for a nonincreasing sequence whether it is bounded below. The range of\n$(x_k)$ is the set $\\{x_k : k \\in \\mathbb{N}\\}$ ([[def-sequence]]), and it is\nbounded above, bounded below or bounded in the sense of [[def-bounded-set]]\nexactly when the sequence is.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-divergence-to-infinity",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\\mathbb{R}$ ordered\nas in [[def-real-order]] and [[def-complete-ordered-field]].\n\n- $(x_k)$ **diverges to $+\\infty$**, written $x_k \\to +\\infty$, when for every\n  $M \\in \\mathbb{R}$ there is $K \\in \\mathbb{N}$ such that $x_k > M$ for all\n  $k \\ge K$.\n- $(x_k)$ **diverges to $-\\infty$**, written $x_k \\to -\\infty$, when for every\n  $M \\in \\mathbb{R}$ there is $K \\in \\mathbb{N}$ such that $x_k < M$ for all\n  $k \\ge K$.\n\nEquivalently, in the language of [[def-sequence]]: $x_k \\to +\\infty$ when the\nproperty $x_k > M$ holds eventually, for every real $M$.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let\n$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and\nfinite products as in [[def-finite-sum]]. Then:\n\n1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$.\n2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).\n3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$.\n4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.\n5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$.\n6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "uses": [
        "1.1",
        "2.1",
        "2.3"
      ]
    },
    {
      "fact": "L2",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), in particular an ordered field\n([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set\nof natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$\n([[def-nat-addition]]).\n\nLet $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for\n$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the\nupper index**, which is legitimate because of the recursion theorem\n([[thm-recursion]]). That theorem produces a function of one variable, so the\nrunning index has to be carried along inside the value: applying it to the set\n$A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function\n$f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique\n$g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with\n\n$$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$\n\nWrite $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates.\n\n**The first coordinate is the index itself, and that is a small induction, not an\nobservation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if\n$\\pi_1(g(n)) = n$, then\n$g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$,\nso $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every\n$n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed\nclauses be read off, and doing so gives\n\n$$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$\n\n$\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those\ntwo properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies\nthe two clauses defining $g$, hence equals $g$ by the uniqueness clause of\n[[thm-recursion]], so $\\Sigma' = \\Sigma$.\n\nWe write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting\nelement $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same\ninduction on the first coordinate and the same uniqueness argument, gives the\nunique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with\n\n$$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$\n\nand we write $\\prod_{k < n} a_k := \\Pi_n$.\n\n**Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate\n\n$$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$\n\nand, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$\nfor the number of terms,\n\n$$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$\n\nWhen $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while\nthe empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is\nnotation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the\nempty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of\n$\\mathbb{N}$ and is only a way of writing \"no terms\".\n\nOnly finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation\n$\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list\n$a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the\nlist to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively\n$a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "uses": [
        "1.1",
        "2.1",
        "2.3"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-series-cauchy-criterion",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals, with partial sums $s_n = \\sum_{k<n} a_k$\n([[def-series]]). Then $\\sum a_k$ converges **if and only if**\n\n$$\\text{for every real } \\varepsilon > 0 \\text{ there is } N \\in \\mathbb{N} \\text{ such that } \\Big| \\sum_{k=m+1}^{n} a_k \\Big| < \\varepsilon \\text{ for all } n > m \\ge N .$$\n\nThe block $\\sum_{k=m+1}^{n} a_k$ is the finite sum $a_{m+1} + \\dots + a_n$ of\n[[def-finite-sum]], and it equals $s_{n+1} - s_{m+1}$.\n\nThis is the Cauchy criterion transported from sequences to series. Its value is\nthat it decides convergence without producing, or even naming, the sum.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-reciprocal-of-null-diverges",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals with $x_k > 0$ for every $k \\in \\mathbb{N}$\n([[def-sequence]], [[def-real-order]]). Then\n\n$$(x_k) \\text{ converges to } 0 \\iff (1/x_k) \\text{ diverges to } +\\infty,$$\n\nwith convergence as in [[def-real-limit]] and divergence to $+\\infty$ as in\n[[def-divergence-to-infinity]].\n\nThe positivity hypothesis is essential and is not a convenience; see the remarks.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$. It is **Cauchy** when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x_l| < \\hat\\varepsilon$ for all $k, l \\ge K$.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-telescoping-series",
      "source_section": "Statement",
      "quote": "Let $(b_k)$ be a sequence of reals and put $a_k := b_k - b_{k+1}$. Then the\npartial sums of $\\sum a_k$ are\n\n$$s_n \\;=\\; \\sum_{k<n} (b_k - b_{k+1}) \\;=\\; b_0 - b_n \\qquad (n \\in \\mathbb{N}),$$\n\nand consequently $\\sum a_k$ converges ([[def-series]]) **if and only if** $(b_k)$\nconverges ([[def-real-limit]]), in which case\n\n$$\\sum_{k=0}^{\\infty} (b_k - b_{k+1}) \\;=\\; b_0 - \\lim_{k} b_k .$$\n\nFor a family from a general starting index $m$ the same statement holds with $b_0$\nreplaced by $b_m$, being this statement applied to the shifted sequence\n$j \\mapsto b_{j+m}$ ([[def-series]]).",
      "uses": [
        "3.2"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-direct-comparison-test",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals and suppose there is\n$K \\in \\mathbb{N}$ with\n\n$$0 \\;\\le\\; a_k \\;\\le\\; b_k \\qquad \\text{for all } k \\ge K .$$\n\nThen:\n\n1. if $\\sum b_k$ converges then $\\sum a_k$ converges ([[def-series]]);\n2. if $\\sum a_k$ diverges then $\\sum b_k$ diverges.\n\nThe same statement holds verbatim for series with a general starting index $m$,\napplied to the shifted sequences of [[def-series]].\n\nThe hypothesis is on the terms from some index on, not on all of them: finitely\nmany terms of either sequence may violate it, or be negative, without affecting\nthe conclusion. What may not be dropped is nonnegativity of $(a_k)$ from that\nindex on.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-series-tail-invariance",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ be a sequence of reals with partial sums $s_n = \\sum_{k<n} a_k$, let\n$N \\in \\mathbb{N}$, and let $t_j := \\sum_{i<j} a_{N+i}$ be the partial sums of the\n$N$-th tail series $\\sum_{k \\ge N} a_k$ ([[def-series]]). Then:\n\n1. $t_j = s_{j+N} - s_N$ for every $j \\in \\mathbb{N}$;\n2. $\\sum a_k$ converges **if and only if** its $N$-th tail series converges, and\n   in that case\n   $$\\sum_{k=0}^{\\infty} a_k \\;=\\; s_N \\;+\\; \\sum_{k=N}^{\\infty} a_k ;$$\n3. hence the following are equivalent: $\\sum a_k$ converges; every tail series of\n   $\\sum a_k$ converges; some tail series of $\\sum a_k$ converges.\n\nIn words: convergence of a series is a property of its terms from any index on,\nand changing finitely many terms changes the sum but not the fact of convergence.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "2.1",
        "2.2",
        "2.3",
        "3.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$, where $\\mathbb{R}$ is the ambient ordered field\n([[def-ordered-field]], [[def-field]]).\n\n**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to\nthe set $\\mathbb{R}$, the starting element $1$ and the function\n$f(x) = x \\cdot a$, there is a unique function $\\mathbb{N} \\to \\mathbb{R}$,\nwritten $n \\mapsto a^n$, with\n\n$$a^0 = 1, \\qquad a^{n+1} = a^n \\cdot a \\quad (n \\in \\mathbb{N}).$$\n\nThus $a^1 = a$, $a^2 = a \\cdot a$, and so on. Note that this is defined for\n**every** $a$, including $a = 0$.\n\n**Negative exponents.** If $a \\ne 0$ and $n \\in \\mathbb{N}$ with $n \\ge 1$, set\n\n$$a^{-n} := (a^n)^{-1}.$$\n\n**Why that is legitimate.** The right-hand side presupposes that $a^n$ is\ninvertible, that is, that $a^n \\ne 0$. This is a proof obligation and not an\nobservation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \\ne 0$\nin a field, $a^n \\ne 0$ for every $n \\in \\mathbb{N}$, proved there by induction on\n$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).\nThat lemma is a statement *about* the operation introduced here, so it depends on\nthis definition and is recorded in this item's `justified_by` rather than in its\n`deps` (SCHEMA §3). Given $a^n \\ne 0$, the value $(a^n)^{-1}$ is a single\nwell-determined element, because multiplicative inverses in a field are unique\n([[lem-of-inverse-unique]]).\n\n**Integer exponents.** Every integer $m$ ([[def-integers]]) is either\n$\\iota(n)$ or $-\\iota(n)$ for a unique natural $n$, where $\\iota$ is the\nembedding $\\mathbb{N} \\to \\mathbb{Z}$ ([[lem-nat-embeds-int]],\n[[def-int-operations]]). This too is a citation and not a slogan: the order on\n$\\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \\ge 0$ or $m < 0$; the\nimage of $\\iota$ is exactly the set of nonnegative integers, and each of them is\n$\\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then\n$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),\nso $-m = \\iota(n)$ and $m = -\\iota(n)$, with $n$ unique because $\\iota$ is\ninjective. The two clauses above therefore define $a^m$ for every\n$m \\in \\mathbb{Z}$ whenever $a \\ne 0$, and for every $m \\in \\mathbb{N}$ for\narbitrary $a$. The clauses are consistent where they overlap: the only overlap is\n$m = 0$, where $-\\iota(0) = \\iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.",
      "uses": [
        "2.1",
        "2.2",
        "2.3",
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Every $S_n$ is a sum of positive terms, so $S_n > 0$; and $S_n \\le S_{n+1}$ since $S_{n+1} - S_n = a_{n+1} > 0$, so $(S_n)$ is nondecreasing and $S_m \\le S_n$ whenever $m \\le n$.",
      "step": "1.1",
      "inputs": [
        "L2",
        "L1",
        "given"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "Since $\\sum a_k$ diverges and its terms are nonnegative, the exclusive partial sums are unbounded above and $s_n \\to +\\infty$; hence $S_n = s_{n+1} \\to +\\infty$, because for a given real $M$ any index bound $K$ working for $(s_n)$ also works for $(S_n)$.",
      "step": "1.2",
      "inputs": [
        "L1",
        "given",
        "algebra"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "For all naturals $n > m$, using $S_k \\le S_n$ for $k \\le n$ and $a_k > 0$: $\\displaystyle\\sum_{k=m+1}^{n} \\frac{a_k}{S_k} \\ \\ge \\ \\sum_{k=m+1}^{n} \\frac{a_k}{S_n} \\ = \\ \\frac{S_n - S_m}{S_n} \\ = \\ 1 - \\frac{S_m}{S_n}$.",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L2",
        "L7"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "Put $b_n := 1/S_n$, which is positive; since $1/b_n = S_n \\to +\\infty$, the sequence $(b_n)$ converges to $0$.",
      "step": "2.2",
      "inputs": [
        "1.1",
        "1.2",
        "L4",
        "L7"
      ]
    },
    {
      "id": "step-2-3",
      "claim": "For every $n \\in \\mathbb{N}$: $b_n - b_{n+1} = \\dfrac{1}{S_n} - \\dfrac{1}{S_{n+1}} = \\dfrac{S_{n+1}-S_n}{S_n S_{n+1}} = \\dfrac{a_{n+1}}{S_n S_{n+1}} \\ \\ge \\ \\dfrac{a_{n+1}}{S_{n+1}^{2}} \\ > \\ 0$, the inequality because $0 < S_n S_{n+1} \\le S_{n+1}^{2}$.",
      "step": "2.3",
      "inputs": [
        "1.1",
        "L2",
        "L7",
        "algebra"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Let $N \\in \\mathbb{N}$ be arbitrary and put $m := N$. Since $S_n \\to +\\infty$ there is $n > m$ with $S_n > 2 S_m$, and then $S_m/S_n < 1/2$, so the block of step 2.1 satisfies $\\sum_{k=m+1}^{n} a_k/S_k > 1/2$.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "1.2",
        "L7",
        "choose"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "Therefore $\\sum_n (b_n - b_{n+1})$ converges.",
      "step": "3.2",
      "inputs": [
        "2.2",
        "L5"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "So no $N$ witnesses the Cauchy condition for the tolerance $\\varepsilon = 1/2$, and $\\sum_n a_n/S_n$ diverges, which is claim 1.",
      "step": "4.1",
      "inputs": [
        "3.1",
        "L3"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "By comparison, $\\sum_n \\dfrac{a_{n+1}}{S_{n+1}^{2}}$ converges; that series is the $1$-st tail series of $\\sum_n \\dfrac{a_n}{S_n^{2}}$, so the latter converges, which is claim 2.",
      "step": "5.1",
      "inputs": [
        "3.2",
        "2.3",
        "L6"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The Statement concerns a fixed infinite sequence or positive-index family and quantifies over no possibly empty carrier or family."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Statement requires a_k > 0, so S_0 = a_0 > 0 and every quotient is defined; steps 1.1 and 2.2 verify this."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Statement uses the inclusive first sum S_0 = a_0; step 2.3 and step 5.1 check the one-index tail shift in the square-denominator series."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "Strict positivity and divergence exclude a zero or eventually zero series; no independent scalar parameter can collapse."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "steps 1.1-2.3 use inclusive S_n consistently, and step 5.1 restores the omitted n = 0 term by tail invariance."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "steps 3.1: every selected index or tolerance is supplied by the cited limit, order-bound, Archimedean, or divergence clause; no selection from an unproved nonempty family is hidden."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The asserted claim is not a biconditional; any contrapositive wording is the same one-directional implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The asserted claim is not a biconditional, so no independent reverse implication is claimed."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "critical risk (15): 15 declared dependencies; 16 cited facts; 9 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language; quotient or equivalence-class construction; analytic limiting/completeness language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: - Division by zero: a_k > 0 ⇒ S_n > 0 for all n, so a_n/S_n and a_n/S_n² are defined everywhere. - Existence of n with S_n > 2 S_m: S_n → +∞ (L1, from divergence of ∑ a_k with positive terms) guarantees such an n; no choice from an empty set. - Cauchy criterion violation: the block bound 1 – S_m/S_n > 1/2 is attained, so ε = 1/2 can never be satisfied. - Tail shift for claim 2: ∑_{n=0}∞ a_{n+1}/S_{n+1}² is exactly the 1st tail series of ∑ a_n/S_n²; tail invariance (L6) restores the original series. - Comparison test application: 0 ≤ a_{n+1}/S_{n+1}² ≤ b_n – b_{n+1} for every n and ∑ (b_n – b_{n+1}) converges (L5, b_n → 0), so the test yields convergence of the tail. - Counterexample check: a_k = 1 (constant, divergent) gives S_n = n+1; ∑ 1/(n+1) diverges, ∑ 1/(n+1)² converges, consistent with the theorem. All boundary cases from the contract are either not applicable or correctly resolved. Checked surface: Read the title, the public Statement, all proof steps (1.1–5.1), and the Remarks. No fatal defect found. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/thm-abel-dini--2ec0d3834efb2fd5.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-abel-dini",
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
    "source": "thm-abel-dini",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-nonnegative-series-bounded-partial-sums",
    "declared_target": "thm-nonnegative-series-bounded-partial-sums",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-abel-dini",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-series-cauchy-criterion",
    "declared_target": "thm-series-cauchy-criterion",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-abel-dini",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-telescoping-series",
    "declared_target": "lem-telescoping-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-abel-dini",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "thm-direct-comparison-test",
    "declared_target": "thm-direct-comparison-test",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-abel-dini",
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
    "source": "thm-abel-dini",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-monotone-unbounded-diverges",
    "declared_target": "lem-monotone-unbounded-diverges",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-abel-dini",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-divergence-to-infinity",
    "declared_target": "def-divergence-to-infinity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-abel-dini",
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
    "source": "thm-abel-dini",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-reciprocal-of-null-diverges",
    "declared_target": "lem-reciprocal-of-null-diverges",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-abel-dini",
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
    "source": "thm-abel-dini",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-series-tail-invariance",
    "declared_target": "lem-series-tail-invariance",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": "wave7-real-analysis-series",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-abel-dini",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
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
    "source": "thm-abel-dini",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "lem-finite-sum-laws",
    "declared_target": "lem-finite-sum-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-abel-dini",
    "sourcePage": "series-and-nonnegative-tests",
    "batch": "wave7-real-analysis-series",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
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

## Full text of every cited or declared item (16)

### `def-divergence-to-infinity`

````markdown
---
id: def-divergence-to-infinity
kind: definition
title: "Divergence to $+\\infty$ and to $-\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequence, def-real-order, def-real-limit, def-complete-ordered-field, lem-convergent-implies-bounded, thm-of-archimedean, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
short: "$x_k\\to+\\infty$"
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
as in [[def-real-order]] and [[def-complete-ordered-field]].

- $(x_k)$ **diverges to $+\infty$**, written $x_k \to +\infty$, when for every
  $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k > M$ for all
  $k \ge K$.
- $(x_k)$ **diverges to $-\infty$**, written $x_k \to -\infty$, when for every
  $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k < M$ for all
  $k \ge K$.

Equivalently, in the language of [[def-sequence]]: $x_k \to +\infty$ when the
property $x_k > M$ holds eventually, for every real $M$.

## Remarks

- **This is divergence, not convergence.** The symbols $+\infty$ and $-\infty$
  are **not real numbers**: $\mathbb{R}$ is the complete ordered field
  ([[def-complete-ordered-field]]) and contains no element larger than every
  element of itself. Nothing above claims that $(x_k)$ has a limit in the sense
  of [[def-real-limit]], and nothing above defines an object named $+\infty$.
  The whole phrase "$x_k \to +\infty$" is a single abbreviation for the
  displayed condition, exactly as "$(x_k)$ is Cauchy" is an abbreviation for a
  condition and not a claim that some object called a Cauchy value exists.

- **A sequence diverging to $+\infty$ really does diverge.** Suppose
  $x_k \to +\infty$. Given any real $M$, there is $K$ with $x_k > M$ for all
  $k \ge K$; in particular $x_K > M$, so no real $M$ satisfies $x_k \le M$ for
  all $k$. Since $x_k \le |x_k|$ always ([[lem-of-abs-value]]), a bound
  $|x_k| \le M$ valid for all $k$ would give $x_k \le M$ for all $k$, which has
  just been excluded, so no such $M$ exists either. Thus
  $(x_k)$ is unbounded, and an unbounded sequence cannot converge, since
  convergent sequences are bounded ([[lem-convergent-implies-bounded]]). The
  same argument applies to $-\infty$. So the two notions never overlap: a
  sequence that diverges to $\pm\infty$ has no limit whatever.

- **Consequently $\lim_k x_k$ is not written here.** Many texts write
  $\lim_k x_k = +\infty$. This library does not, for the reason recorded in
  [[rem-sup-conventions]] about $\sup S = +\infty$: writing an equation whose
  right-hand side is not an element of $\mathbb{R}$ silently moves the discussion
  into the extended real line, a structure that is not a field, and every
  subsequent algebraic step then needs its own justification. In particular none
  of the rules of [[thm-algebra-of-limits]] may be applied to a divergence to
  $\pm\infty$; the familiar slogans "$\infty + \infty = \infty$" and
  "$\infty \cdot \infty = \infty$" are separate statements about this definition
  and would need separate proofs.

- **Testing against naturals suffices.** Since $\mathbb{R}$ is Archimedean
  ([[thm-of-archimedean]]), every real $M$ is below some canonical natural $n$,
  so the condition "for every real $M$" may equivalently be read as "for every
  natural $n \ge 1$"; the two formulations of $x_k \to +\infty$ agree.

- **Divergence to $+\infty$ is much stronger than divergence.** A sequence
  alternating between $1$ and $-1$ diverges ([[fs-bounded-implies-convergent]])
  but goes to neither $+\infty$ nor $-\infty$, since it is bounded. Divergence
  is the negation of convergence; divergence to $+\infty$ is a positive
  statement about growth.
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

### `def-real-limit`

````markdown
---
id: def-real-limit
kind: definition
title: "Limits and Cauchy sequences of reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

## Remarks

- Quantifying over rational $\varepsilon$ loses nothing: below any real
  $\varepsilon > 0$ lies a positive rational ([[lem-rat-embeds-dense]]).
- $|\cdot|$ is the absolute value of [[def-real-order]].
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

### `fs-universal-comparison-series`

````markdown
---
id: fs-universal-comparison-series
kind: false-statement
title: "FALSE: there is a divergent series of positive terms that diverges more slowly than every other, hence a universal comparison test"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-abel-dini, def-series, thm-nonnegative-series-bounded-partial-sums, lem-monotone-unbounded-diverges, def-divergence-to-infinity, def-monotone-sequence, lem-of-inverse-positive, def-finite-sum, lem-finite-sum-laws]
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
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
    - title: "Abel-Dini-Pringsheim theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Abel%E2%80%93Dini%E2%80%93Pringsheim_theorem"
pipeline_run: null
---

## Statement

**False claim:** there is a sequence $(b_k)$ of reals with $b_k > 0$ for every
$k \in \mathbb{N}$ such that $\sum b_k$ diverges ([[def-series]]) and such that
**every** sequence $(a_k)$ of reals with $a_k > 0$ for every $k$ and $\sum a_k$
divergent satisfies

$$b_k \le a_k \quad \text{for all } k \text{ from some index on.}$$

Such a $(b_k)$ would be a *slowest* divergent series of positive terms, and it
would give a universal comparison test: a positive series would diverge exactly
when its terms eventually dominate those of $(b_k)$.

**No such sequence exists.** The refutation is direct and uses no choice: given
any divergent $\sum b_k$ with positive terms, the Abel-Dini theorem
([[thm-abel-dini]]) manufactures a divergent series of positive terms whose terms
are eventually strictly smaller than the $b_k$, so $(b_k)$ fails its own defining
property.

## Facts & Assumptions

**Given:** An arbitrary sequence $(b_k)$ of reals with $b_k > 0$ for every $k$ and $\sum b_k$ divergent; its inclusive partial sums $B_n = \sum_{k=0}^{n} b_k$ ([[def-series]], [[def-finite-sum]]).

[L1] For a series of nonnegative terms: the partial sums are nondecreasing, and if the series diverges their range is not bounded above and they diverge to $+\infty$ ([[thm-nonnegative-series-bounded-partial-sums]], [[lem-monotone-unbounded-diverges]], [[def-monotone-sequence]], [[def-divergence-to-infinity]]).

[L2] Abel-Dini: if $(a_k)$ has positive terms and $\sum a_k$ diverges, then with $S_n = \sum_{k=0}^{n} a_k$ the series $\sum_n a_n/S_n$ diverges ([[thm-abel-dini]]).

[L3] Order and reciprocals: for $x > 0$ and $y > 1$ one has $0 < x/y < x$ ([[lem-of-inverse-positive]]); and a sum of positive terms is positive ([[lem-finite-sum-laws]]).

[L4] The refuted claim: some divergent series of positive terms is eventually dominated by every divergent series of positive terms.

## Refutation

**Proof technique:** direct.

1.1 Let $(b_k)$ be any sequence of positive reals with $\sum b_k$ divergent, and put $B_n = \sum_{k=0}^{n} b_k$; every $B_n$ is positive, being a sum of positive terms. [given, L3]

1.2 Since $\sum b_k$ diverges and its terms are nonnegative, its exclusive partial sums $s_n = \sum_{k<n} b_k$ diverge to $+\infty$; and $B_n = s_{n+1}$, so $B_n \to +\infty$ as well, any index bound for $(s_n)$ serving for $(B_n)$. [given, L1, algebra]

2.1 Define $c_n := b_n / B_n$ for $n \in \mathbb{N}$. Each $c_n$ is positive, and by Abel-Dini applied to $(b_k)$ the series $\sum c_n$ diverges. [step 1.1, L2, L3]

2.2 Since $B_n \to +\infty$ there is $N \in \mathbb{N}$ with $B_n > 1$ for every $n \ge N$; for such $n$, $c_n = b_n/B_n < b_n$. [step 1.2, L3, choose]

3.1 So $(c_n)$ is a sequence of positive reals with $\sum c_n$ divergent, and there is no index from which $b_n \le c_n$ holds onwards: given any $K$, at every index $n$ that is at least both $K$ and $N$ one has $c_n < b_n$. [step 2.1, step 2.2]

4.1 Therefore the sequence $(b_k)$ does not have the property demanded of it, and since $(b_k)$ was an arbitrary divergent series of positive terms, no such sequence exists and the claim is false. [step 3.1, L4] ∎

## Remarks

- **What this rules out.** There is no fixed series against which comparison decides divergence for all positive series, so the direct comparison test is unavoidably a family of tests, one for each comparison series, with none of them final. The refutation is constructive in the strong sense: it does not merely show that a slowest series cannot exist, it exhibits, for each candidate, a specific divergent series that beats it.

- **The scale of tests on this page inherits the same limitation.** Ratio, Raabe and Gauss are successive refinements, each deciding series the previous one cannot, and the argument above says the sequence of refinements can never terminate in a universal criterion. What Kummer's test adds is a uniform way of describing the whole family, by naming the weights; it does not escape the obstruction, since each choice of weights is still a comparison against the single series $\sum 1/\zeta_k$.
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

### `lem-monotone-unbounded-diverges`

````markdown
---
id: lem-monotone-unbounded-diverges
kind: lemma
title: "A nondecreasing sequence that is not bounded above diverges to $+\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-monotone-sequence, def-divergence-to-infinity, def-sequence, def-bounded-set, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.14 and Def. 3.15)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.2"
      url: "https://www.jirka.org/ra/"
---

## Statement

Let $(x_k)$ be a nondecreasing sequence of reals ([[def-sequence]],
[[def-monotone-sequence]]) whose range $S = \{x_k : k \in \mathbb{N}\}$ is not
bounded above ([[def-bounded-set]]). Then $(x_k)$ diverges to $+\infty$
([[def-divergence-to-infinity]]): for every $M \in \mathbb{R}$ there is
$K \in \mathbb{N}$ with $x_k > M$ for all $k \ge K$.

Read together with the monotone convergence theorem this says that a nondecreasing
sequence has exactly two possible behaviours, with nothing in between: it
converges to the supremum of its range, or it runs away to $+\infty$.

## Facts & Assumptions

**Given:** A nondecreasing sequence $(x_k)$ of reals whose range $S = \{x_k : k \in \mathbb{N}\}$ is not bounded above.

[L1] Monotonicity: $x_j \le x_k$ whenever $j \le k$ ([[def-monotone-sequence]]).

[L2] Bounded above: $S$ is bounded above exactly when some $M \in \mathbb{R}$ satisfies $s \le M$ for every $s \in S$ ([[def-bounded-set]]).

[L3] Trichotomy: for reals $s$ and $M$, exactly one of $s < M$, $s = M$, $s > M$ holds, so the failure of $s \le M$ is $s > M$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L4] Divergence to $+\infty$: $x_k \to +\infty$ when for every $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

[L5] Every element of $S$ is a term of the sequence, and conversely ([[def-sequence]]).

## Proof

**Proof technique:** direct.

1.1 Let $M \in \mathbb{R}$ be arbitrary. Since $S$ is not bounded above, $M$ is not an upper bound of $S$, so some $s \in S$ fails $s \le M$. [given, L2]

2.1 By trichotomy that $s$ satisfies $s > M$, and being an element of $S$ it is a term: fix $K \in \mathbb{N}$ with $s = x_K$, so $x_K > M$. [step 1.1, L3, L5, choose]

3.1 For every $k \ge K$ monotonicity gives $x_K \le x_k$, hence $x_k \ge x_K > M$ and so $x_k > M$. [step 2.1, L1]

4.1 For every real $M$ an index $K$ has been produced with $x_k > M$ for all $k \ge K$, which is exactly divergence to $+\infty$. [step 3.1, L4] ∎

## Remarks

- **Only "not bounded above" is used, not unboundedness of the sequence.** For a
  nondecreasing sequence the two coincide, since such a sequence is bounded below
  by $x_0$ ([[def-monotone-sequence]]), so a nondecreasing sequence is unbounded
  exactly when its range is not bounded above. The hypothesis is stated in the
  one-sided form because that is the form the proof consumes.

- **The dual statement holds with the same proof**: a nonincreasing sequence
  whose range is not bounded below diverges to $-\infty$. Reflecting through the
  origin turns one into the other.

- **$+\infty$ is not a limit.** [[def-divergence-to-infinity]] is deliberately
  not a case of [[def-real-limit]]: a sequence diverging to $+\infty$ is
  unbounded, hence not convergent ([[lem-convergent-implies-bounded]]), and the
  arrow in $x_k \to +\infty$ is an abbreviation for the displayed quantifier
  statement and never an equation.

- The companion statement is [[thm-monotone-convergence]]: between them, a
  nondecreasing sequence converges to the supremum of its range or diverges to
  $+\infty$, with no third possibility.
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

### `lem-reciprocal-of-null-diverges`

````markdown
---
id: lem-reciprocal-of-null-diverges
kind: lemma
title: "For positive terms, null and divergence to $+\\infty$ are reciprocal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-divergence-to-infinity, def-real-limit, def-sequence, lem-limit-of-tail, lem-of-inverse-positive, lem-of-abs-value, lem-rat-embeds-dense, thm-of-archimedean, def-field, def-real-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$x_k\\to0$ iff $1/x_k\\to+\\infty$"
proof_strategy: direct
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

Let $(x_k)$ be a sequence of reals with $x_k > 0$ for every $k \in \mathbb{N}$
([[def-sequence]], [[def-real-order]]). Then

$$(x_k) \text{ converges to } 0 \iff (1/x_k) \text{ diverges to } +\infty,$$

with convergence as in [[def-real-limit]] and divergence to $+\infty$ as in
[[def-divergence-to-infinity]].

The positivity hypothesis is essential and is not a convenience; see the remarks.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals with $x_k > 0$ for every $k$, so that each $x_k$ is nonzero and $1/x_k$ is defined ([[def-sequence]], [[def-real-order]], [[def-field]]).

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]); divergence to $+\infty$, quantified over real $M$ ([[def-divergence-to-infinity]]).

[L2] Inverses and order: $a > 0$ implies $a^{-1} > 0$, and $0 < a < b$ implies $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]).

[L3] The involution $(u^{-1})^{-1} = u$ for $u \ne 0$, from uniqueness of multiplicative inverses ([[def-field]]).

[L4] Absolute value: $|u| = u$ when $u \ge 0$, and $|u - 0| = |u|$ ([[lem-of-abs-value]], [[def-real-order]]).

[L5] Small rationals: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$, by density ([[lem-rat-embeds-dense]]) or by the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$.

[L6] Order arithmetic in $\mathbb{R}$: trichotomy and transitivity, and $u > 0 \ge M$ gives $u > M$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $x_k > 0$ we have $|x_k| = x_k$ and, by [L2], $1/x_k > 0$, for every $k$. [L2, L4]

2.1 Forward direction. Assume $(x_k)$ converges to $0$ and let $M \in \mathbb{R}$ be arbitrary. If $M \le 0$, then $1/x_k > 0 \ge M$ for every $k$ by step 1.1, so the threshold $K = 0$ works. If $M > 0$, then $1/M > 0$ by [L2]; by [L5] choose a rational $\varepsilon$ with $0 < \varepsilon < 1/M$, and by [L1] take $K$ with $|x_k - 0| < \varepsilon$ for all $k \ge K$; for such $k$, step 1.1 gives $0 < x_k = |x_k| < \varepsilon < 1/M$, and applying [L2] to $0 < x_k < 1/M$ gives $1/x_k > (1/M)^{-1} = M$ by [L3]. In both cases there is $K$ with $1/x_k > M$ for all $k \ge K$, so $(1/x_k)$ diverges to $+\infty$. [step 1.1, assume-hyp, L1, L2, L3, L5, L6]

2.2 Backward direction. Assume $(1/x_k)$ diverges to $+\infty$ and let $\varepsilon > 0$ be rational. Then $1/\varepsilon > 0$ by [L2], and by [L1] there is $K$ with $1/x_k > 1/\varepsilon$ for all $k \ge K$. For such $k$, both $1/\varepsilon$ and $1/x_k$ are positive by step 1.1, so applying [L2] to $0 < 1/\varepsilon < 1/x_k$ gives $0 < (1/x_k)^{-1} < (1/\varepsilon)^{-1}$, that is $0 < x_k < \varepsilon$ by [L3]; hence $|x_k - 0| = x_k < \varepsilon$. So $(x_k)$ converges to $0$. [step 1.1, assume-hyp, L1, L2, L3, L4]

3.1 The two implications together give the stated equivalence. [step 2.1, step 2.2] ∎

## Remarks

- **Positivity is essential.** Let $(x_k)$ be as in the lemma, so that $x_k > 0$ for every $k$ and $(x_k)$ converges to $0$; such sequences exist, $x_k = 1/(k+1)$ being the standard one ([[fs-limit-preserves-strict-inequality]]). Put $w_k := -x_k$. Then $|w_k - 0| = |-x_k| = |x_k| = |x_k - 0|$ for every $k$ ([[lem-of-abs-value]]), so $(w_k)$ converges to $0$ as well, and every $w_k$ is nonzero. Yet $(1/w_k)$ does not diverge to $+\infty$: $1/w_k = -(1/x_k)$ by field arithmetic ([[def-field]]), and $1/x_k > 0$ ([[lem-of-inverse-positive]]), so $1/w_k < 0$ at every index, its negative $1/x_k$ being positive ([[def-ordered-field]]), and no threshold works even for $M = 0$. Dropping positivity therefore breaks the forward implication outright. What survives without a sign hypothesis is the statement about absolute values: for a sequence of nonzero terms, $(|x_k|)$ converges to $0$ if and only if $(1/|x_k|)$ diverges to $+\infty$, which is this lemma applied to $(|x_k|)$, whose terms are positive ([[lem-of-abs-value]]).

- The hypothesis $x_k > 0$ is imposed at **every** index so that $1/x_k$ is defined at every index. It is tempting to relax it to "eventually positive" by passing to a tail, and on the convergence side that is exactly [[lem-limit-of-tail]]; but the equivalence also has a divergence side, and the corresponding tail statement for divergence to $+\infty$ ([[def-divergence-to-infinity]]) is proved nowhere in this library, [[lem-limit-of-tail]] covering convergence and the Cauchy condition only. The relaxed form is therefore not asserted here.

- Taking $x_k := 1/(k+1)$, which is null ([[fs-limit-preserves-strict-inequality]]), the lemma turns that one fact into $k + 1 \to +\infty$. The two are the same statement seen twice, which is why this lemma is the standard bridge between the Archimedean property ([[thm-of-archimedean]]) and statements about growth.
````

### `lem-series-tail-invariance`

````markdown
---
id: lem-series-tail-invariance
kind: lemma
title: "A series converges iff each of its tail series converges, and the sum splits as $s_N$ plus the $N$-th tail"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series, lem-limit-of-tail, def-finite-sum, lem-finite-sum-laws, thm-algebra-of-limits, def-real-limit, def-sequence]
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with partial sums $s_n = \sum_{k<n} a_k$, let
$N \in \mathbb{N}$, and let $t_j := \sum_{i<j} a_{N+i}$ be the partial sums of the
$N$-th tail series $\sum_{k \ge N} a_k$ ([[def-series]]). Then:

1. $t_j = s_{j+N} - s_N$ for every $j \in \mathbb{N}$;
2. $\sum a_k$ converges **if and only if** its $N$-th tail series converges, and
   in that case
   $$\sum_{k=0}^{\infty} a_k \;=\; s_N \;+\; \sum_{k=N}^{\infty} a_k ;$$
3. hence the following are equivalent: $\sum a_k$ converges; every tail series of
   $\sum a_k$ converges; some tail series of $\sum a_k$ converges.

In words: convergence of a series is a property of its terms from any index on,
and changing finitely many terms changes the sum but not the fact of convergence.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals, a natural number $N$, the partial sums $s_n = \sum_{k<n} a_k$ and the partial sums $t_j = \sum_{i<j} a_{N+i}$ of the $N$-th tail series ([[def-series]], [[def-finite-sum]]).

[L1] Splitting of finite sums: if $m \le n$ then $\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$ ([[lem-finite-sum-laws]]), and $\sum_{k=m}^{n-1} a_k$ is by definition $\sum_{i<n-m} a_{m+i}$ ([[def-finite-sum]]).

[L2] Convergence depends only on the tail: a sequence $(x_n)$ converges to $x$ if and only if its $N$-th tail $(x_{j+N})_{j}$ converges to $x$ ([[lem-limit-of-tail]], [[def-sequence]]).

[L3] Algebra of limits: if $x_j \to x$ and $y_j \to y$ then $x_j + y_j \to x + y$ and $x_j - y_j \to x - y$ ([[thm-algebra-of-limits]]).

[L4] A constant sequence $y_j = c$ converges to $c$, immediately from the definition of a limit ([[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Fix $j \in \mathbb{N}$ and put $n := j + N$, so that $N \le n$ and $n - N = j$. [given]

1.2 The family $(s_{j+N})_{j \in \mathbb{N}}$ is the $N$-th tail of the sequence $(s_n)$ of partial sums. [given, L2]

2.1 Splitting the partial sum $s_n$ at $N$ gives $s_n = \sum_{k<N} a_k + \sum_{k=N}^{n-1} a_k = s_N + \sum_{i<j} a_{N+i} = s_N + t_j$. [step 1.1, L1]

2.2 Suppose $\sum a_k$ converges, say $s_n \to S$; then the $N$-th tail $(s_{j+N})_j$ converges to $S$. [given, step 1.2, L2]

3.1 Claim 1 follows: $t_j = s_{j+N} - s_N$ for every $j \in \mathbb{N}$. [step 2.1, algebra]

4.1 The constant sequence with value $s_N$ converges to $s_N$, so $t_j = s_{j+N} - s_N \to S - s_N$, and the $N$-th tail series converges with sum $S - s_N$. [step 2.2, step 3.1, L3, L4]

4.2 Conversely, suppose the $N$-th tail series converges, say $t_j \to T$; then $s_{j+N} = s_N + t_j \to s_N + T$ by the same two rules. [step 3.1, L3, L4]

5.1 So the $N$-th tail of $(s_n)$ converges to $s_N + T$, hence $(s_n)$ itself converges to $s_N + T$ and $\sum a_k$ converges. [step 4.2, step 1.2, L2]

6.1 Claim 2 follows: the two convergences are equivalent, and when they hold the sums are related by $S = s_N + T$, which is the displayed identity. [step 4.1, step 5.1, algebra]

7.1 Claim 3 follows as well: if $\sum a_k$ converges then by claim 2 every tail series converges; every tail series converging trivially gives some tail series converging, the family of tails being indexed by all of $\mathbb{N}$; and if some tail series, say the $N$-th, converges then by claim 2 again $\sum a_k$ converges. [step 6.1] ∎

## Remarks

- **Where the hypothesis-free character comes from.** Nothing here assumes the terms have a sign or that any series converges: claim 1 is an identity between finite sums, valid always, and claims 2 and 3 are read off from it by two standard limit rules. That is why the lemma may be used to move between a series and its tails inside proofs that have not yet decided the convergence question.

- **The sum does change.** Only the fact of convergence is tail invariant. The identity in claim 2 is the exact bookkeeping: discarding the first $N$ terms lowers the sum by $s_N$, and no more.
````

### `lem-telescoping-series`

````markdown
---
id: lem-telescoping-series
kind: lemma
title: "$\\sum (b_k - b_{k+1})$ converges iff $(b_k)$ converges, with sum $b_0 - \\lim b_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-series, def-finite-sum, lem-finite-sum-laws, thm-algebra-of-limits, def-real-limit]
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
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(b_k)$ be a sequence of reals and put $a_k := b_k - b_{k+1}$. Then the
partial sums of $\sum a_k$ are

$$s_n \;=\; \sum_{k<n} (b_k - b_{k+1}) \;=\; b_0 - b_n \qquad (n \in \mathbb{N}),$$

and consequently $\sum a_k$ converges ([[def-series]]) **if and only if** $(b_k)$
converges ([[def-real-limit]]), in which case

$$\sum_{k=0}^{\infty} (b_k - b_{k+1}) \;=\; b_0 - \lim_{k} b_k .$$

For a family from a general starting index $m$ the same statement holds with $b_0$
replaced by $b_m$, being this statement applied to the shifted sequence
$j \mapsto b_{j+m}$ ([[def-series]]).

## Facts & Assumptions

**Given:** A sequence $(b_k)$ of reals, the sequence $a_k := b_k - b_{k+1}$, and the partial sums $s_n = \sum_{k<n} a_k$ ([[def-series]], [[def-finite-sum]]).

[L1] Telescoping of finite sums: $\sum_{k<n}(c_{k+1} - c_k) = c_n - c_0$ for every sequence $(c_k)$ of reals and every $n \in \mathbb{N}$ ([[lem-finite-sum-laws]]).

[L2] Algebra of limits: if $x_n \to x$ and $y_n \to y$ then $x_n - y_n \to x - y$ ([[thm-algebra-of-limits]]).

[L3] A constant sequence with value $c$ converges to $c$ ([[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the sequence $c_k := -b_k$: it gives $\sum_{k<n}(-b_{k+1} - (-b_k)) = -b_n - (-b_0)$, that is $\sum_{k<n}(b_k - b_{k+1}) = b_0 - b_n$. [L1, algebra]

2.1 So $s_n = b_0 - b_n$ for every $n \in \mathbb{N}$, and equivalently $b_n = b_0 - s_n$. [step 1.1, algebra]

3.1 Suppose $(b_k)$ converges, say $b_n \to B$; then $s_n = b_0 - b_n \to b_0 - B$, so $\sum a_k$ converges with sum $b_0 - B$. [step 2.1, L2, L3]

3.2 Suppose conversely that $\sum a_k$ converges, say $s_n \to S$; then $b_n = b_0 - s_n \to b_0 - S$, so $(b_k)$ converges. [step 2.1, L2, L3]

4.1 The two implications give the stated equivalence, and in the convergent case step 3.1 gives the sum $b_0 - \lim_k b_k$. [step 3.1, step 3.2] ∎

## Remarks

- **The first term of $(b_k)$ survives and the rest cancel.** That is the whole content, and it is where an off-by-one error is easiest to make: the sum is $b_0 - \lim b_k$ and not $b_1 - \lim b_k$, because the partial sum $s_n = \sum_{k<n}$ starts at $k = 0$ ([[def-series]]). A series written from $k = 1$ telescopes to $b_1 - \lim b_k$ instead.

- **No sign or monotonicity hypothesis is used.** The lemma is an identity between finite sums followed by one limit rule, so it applies to sequences $(b_k)$ of any sign and is not restricted to the decreasing case in which telescoping series usually appear.
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

### `thm-nonnegative-series-bounded-partial-sums`

````markdown
---
id: thm-nonnegative-series-bounded-partial-sums
kind: theorem
title: "A series of nonnegative terms converges iff its partial sums are bounded, and then the sum is their supremum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, def-monotone-sequence, thm-monotone-convergence, cor-monotone-converges-iff-bounded, lem-monotone-unbounded-diverges, def-bounded-set, def-finite-sum, lem-finite-sum-laws, def-sequence, def-divergence-to-infinity, def-complete-ordered-field]
justified_by: []
forward_refs: [cex-comparison-needs-nonnegativity]
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
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.24)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k \ge 0$ for every $k \in \mathbb{N}$,
let $s_n = \sum_{k<n} a_k$ be its partial sums and let
$S = \{\, s_n : n \in \mathbb{N} \,\}$ be the range of $(s_n)$ ([[def-series]]).
Then:

1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \ge 0$ for every
   $n$;
2. $\sum a_k$ converges **if and only if** $S$ is bounded above
   ([[def-bounded-set]]), and in that case
   $$\sum_{k=0}^{\infty} a_k \;=\; \sup S ,$$
   so in particular $s_n \le \sum_{k=0}^{\infty} a_k$ for every $n$;
3. if $S$ is not bounded above then $s_n \to +\infty$
   ([[def-divergence-to-infinity]]) and $\sum a_k$ diverges.

This is the theorem that makes the nonnegative theory work: for terms of one
sign, convergence is a boundedness question and no candidate limit is ever
needed. Every comparison test on this page is an application of it.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k \ge 0$ for every $k$, its partial sums $s_n = \sum_{k<n} a_k$, and the range $S = \{s_n : n \in \mathbb{N}\}$ ([[def-series]], [[def-finite-sum]], [[def-sequence]]).

[L1] The recursion clause of the finite sum: $s_{n+1} = s_n + a_n$ ([[def-finite-sum]]).

[L2] Consecutive comparisons suffice for monotonicity: $(x_k)$ is nondecreasing if and only if $x_k \le x_{k+1}$ for every $k$; and a nondecreasing sequence is bounded below by its first term ([[def-monotone-sequence]]).

[L3] Monotonicity of finite sums: if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$ ([[lem-finite-sum-laws]]).

[L4] A monotone sequence converges if and only if it is bounded, that is if and only if there is $M$ with $|x_k| \le M$ for every $k$ ([[cor-monotone-converges-iff-bounded]], [[def-sequence]]).

[L5] A nondecreasing sequence bounded above converges to the supremum of its range, which exists by the least-upper-bound property ([[thm-monotone-convergence]], [[def-complete-ordered-field]], [[def-bounded-set]]).

[L6] A nondecreasing sequence whose range is not bounded above diverges to $+\infty$ ([[lem-monotone-unbounded-diverges]], [[def-divergence-to-infinity]]).

## Proof

**Proof technique:** direct.

1.1 For every $n$, $s_{n+1} - s_n = a_n \ge 0$, so $s_n \le s_{n+1}$ and $(s_n)$ is nondecreasing. [given, L1, L2]

1.2 For every $n$, $s_n = \sum_{k<n} a_k \ge 0$, all terms being nonnegative. [given, L3]

2.1 Claim 1 is steps 1.1 and 1.2 together. [step 1.1, step 1.2]

2.2 Since $s_n \ge 0$ we have $|s_n| = s_n$, so $(s_n)$ is bounded in the sense of [L4] if and only if $S$ is bounded above. [step 1.2, L4]

3.1 By [L4] applied to the monotone sequence $(s_n)$, the series converges if and only if $(s_n)$ is bounded, hence if and only if $S$ is bounded above. [step 1.1, step 2.2, L4]

4.1 If $S$ is bounded above then $(s_n)$ converges to $\sup S$, so $\sum a_k$ converges with sum $\sup S$; and since $\sup S$ is an upper bound of $S$, $s_n \le \sup S$ for every $n$. [step 1.1, step 3.1, L5]

4.2 If $S$ is not bounded above then $s_n \to +\infty$, and by step 3.1 the series diverges. [step 1.1, step 3.1, L6]

5.1 The equivalence and the identification of the sum as the supremum together make claim 2, and the divergence statement is claim 3. [step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **"Bounded" and "bounded above" coincide here, and only here.** The equivalence used in step 2.2 rests on $s_n \ge 0$, which rests on every term being nonnegative. For a series with terms of both signs the partial sums can be bounded above and still fail to converge, so nothing in this theorem survives the loss of the sign hypothesis. That failure is exhibited by [[cex-comparison-needs-nonnegativity]] on the companion page.

- **Claim 3 is a strictly stronger statement than "diverges".** Divergence alone permits oscillation ([[def-series]]); for nonnegative terms it cannot occur, and the partial sums necessarily run to $+\infty$. This is what licenses the phrase "the series diverges to $+\infty$" for nonnegative terms, and it is what the Abel-Dini theorem later on this page uses.

- **This criterion is the monotone convergence property, worn differently.** The proof above is monotone convergence for $\mathbb{R}$ applied to the nondecreasing sequence of partial sums, and nothing is lost going back the other way. Given a nondecreasing sequence $(x_n)$ of reals, put $y_n := x_n - x_0 \ge 0$ and let $a_0 := 0$, $a_{k+1} := y_{k+1} - y_k \ge 0$; then $s_{n+1} = y_n$ ([[def-series]]), the partial sums are bounded exactly when $(x_n)$ is bounded above, and claim 1 returns the convergence of $(y_n)$ and so of $(x_n)$. Testing boundedness of partial sums is therefore not a device special to series. Read in the vocabulary of [[def-completeness-properties]] it is the property (MCT), which in an arbitrary ordered field already forces the Archimedean property on its own ([[lem-mct-implies-archimedean]]) and with it the least-upper-bound property ([[lem-mct-implies-lub]]). The translation just given is carried out in $\mathbb{R}$, since [[def-series]] is stated for sequences of reals and this library defines no series over a general ordered field.
````

### `thm-series-cauchy-criterion`

````markdown
---
id: thm-series-cauchy-criterion
kind: theorem
title: "A series converges iff for every $\\varepsilon > 0$ there is $N$ with $|a_{m+1} + \\dots + a_n| < \\varepsilon$ for all $n > m \\ge N$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-series, thm-cauchy-criterion-via-lub, lem-convergent-implies-cauchy, def-real-limit, def-finite-sum, lem-finite-sum-laws, cor-archimedean-reciprocal]
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
    - title: "Cauchy's convergence test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_convergence_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals, with partial sums $s_n = \sum_{k<n} a_k$
([[def-series]]). Then $\sum a_k$ converges **if and only if**

$$\text{for every real } \varepsilon > 0 \text{ there is } N \in \mathbb{N} \text{ such that } \Big| \sum_{k=m+1}^{n} a_k \Big| < \varepsilon \text{ for all } n > m \ge N .$$

The block $\sum_{k=m+1}^{n} a_k$ is the finite sum $a_{m+1} + \dots + a_n$ of
[[def-finite-sum]], and it equals $s_{n+1} - s_{m+1}$.

This is the Cauchy criterion transported from sequences to series. Its value is
that it decides convergence without producing, or even naming, the sum.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with partial sums $s_n = \sum_{k<n} a_k$ ([[def-series]], [[def-finite-sum]]).

[L1] Splitting of finite sums: if $m' \le n'$ then $\sum_{k<n'} a_k = \sum_{k<m'} a_k + \sum_{k=m'}^{n'-1} a_k$ ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L2] Every convergent sequence of reals is Cauchy ([[lem-convergent-implies-cauchy]]).

[L3] Every Cauchy sequence of reals converges ([[thm-cauchy-criterion-via-lub]]).

[L4] Cauchyness reads: for every rational $\varepsilon > 0$ there is $K$ with $|s_p - s_q| < \varepsilon$ for all $p, q \ge K$ ([[def-real-limit]]). Rational and real tolerances give the same condition, because every real $\varepsilon > 0$ exceeds some rational $1/n$ with $n \ge 1$ natural ([[cor-archimedean-reciprocal]]), and conversely every positive rational is a positive real.

## Proof

**Proof technique:** direct.

1.1 For all naturals $m < n$, splitting $s_{n+1}$ at the index $m+1 \le n+1$ gives $s_{n+1} = s_{m+1} + \sum_{k=m+1}^{n} a_k$, hence $\sum_{k=m+1}^{n} a_k = s_{n+1} - s_{m+1}$. [L1, algebra]

1.2 Conversely, every pair $p > q \ge 1$ of naturals is of the form $p = n+1$, $q = m+1$ with $n = p - 1 > m = q - 1 \ge 0$. [given, algebra]

1.3 Suppose $\sum a_k$ converges, that is $(s_n)$ converges; then $(s_n)$ is Cauchy. [given, L2]

1.4 Suppose conversely that the stated condition holds, and let a rational $\varepsilon > 0$ be given; take $N$ for $\varepsilon$ as in the condition and put $K := N + 1$. [given, choose]

2.1 Let a real $\varepsilon > 0$ be given, choose a rational $\varepsilon' $ with $0 < \varepsilon' < \varepsilon$, and take $K$ for $\varepsilon'$ as in the Cauchy condition; put $N := K$. [step 1.3, L4, choose]

2.2 Let $p, q \ge K$. If $p = q$ then $|s_p - s_q| = 0 < \varepsilon$; otherwise one of them exceeds the other, and by symmetry we may take $p > q \ge K \ge 1$. [step 1.4, algebra]

3.1 For all $n > m \ge N$ one has $n + 1 > m + 1 \ge K$, so $\big|\sum_{k=m+1}^{n} a_k\big| = |s_{n+1} - s_{m+1}| < \varepsilon' < \varepsilon$, which is the stated condition. [step 2.1, step 1.1, L4]

3.2 Writing $p = n+1$ and $q = m+1$ gives $n > m$ and $m = q - 1 \ge K - 1 = N$, so the condition applies and $|s_p - s_q| = \big|\sum_{k=m+1}^{n} a_k\big| < \varepsilon$. [step 2.2, step 1.2, step 1.1, step 1.4]

4.1 So $(s_n)$ is Cauchy, hence converges, hence $\sum a_k$ converges. [step 2.2, step 3.2, L4, L3]

5.1 The two implications together are the stated equivalence. [step 3.1, step 4.1] ∎

## Remarks

- **The criterion is stated over blocks, not over partial sums, on purpose.** In applications one estimates a run of consecutive terms $a_{m+1}, \dots, a_n$ directly; the translation into $|s_{n+1} - s_{m+1}|$ is step 1.1 and is done once here so that no later proof has to repeat it.

- **Taking $n = m+1$ recovers the term test.** The single-term block gives $|a_{m+1}| < \varepsilon$ for all $m \ge N$, which is $a_k \to 0$; so [[lem-nth-term-test]] is the weakest consequence of this criterion. The criterion is strictly stronger, since it constrains arbitrarily long blocks and not only single terms.
````

