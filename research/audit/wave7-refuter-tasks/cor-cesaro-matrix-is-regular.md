## Selection reasons

- critical risk (10): 13 declared dependencies; 14 cited facts; 7 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language

## Target item — `cor-cesaro-matrix-is-regular`

Normalized current SHA-256: `000f945e60f0579c84b36174eb26cc7713d0875b01c0e41b4ffe92c38acf1d72`

The complete current item follows, including frontmatter:

````markdown
---
id: cor-cesaro-matrix-is-regular
kind: corollary
title: "The Cesaro matrix satisfies the Silverman-Toeplitz conditions, giving a second proof of the Cesaro mean theorem"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-silverman-toeplitz, def-summability-matrix, def-cesaro-mean, def-sequence, def-finite-sum, lem-finite-sum-laws, def-real-limit, cor-archimedean-reciprocal, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-abs-value, def-complete-ordered-field, def-ordered-field]
forward_refs: [cex-irregular-summability-matrix]
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
    - title: "Toeplitz matrix (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Toeplitz_matrix"
    - title: "Summation methods (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Summation_methods"
    - title: "Silverman-Toeplitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Silverman%E2%80%93Toeplitz_theorem"
    - title: "Cesàro summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ces%C3%A0ro_summation"
pipeline_run: null
---

## Statement

Define $c_{n,k} := (n+1)^{-1}$ for $k \le n$ and $c_{n,k} := 0$ for $k > n$.
Then:

1. $c$ is a summability matrix ([[def-summability-matrix]]), with $n$ an
   admissible bound for row $n$;
2. the transform of a sequence $(x_k)$ by $c$ is exactly its sequence of Cesaro
   means ([[def-cesaro-mean]]), $y_n = \sigma_n$;
3. $c$ satisfies the three conditions of [[thm-silverman-toeplitz]], so $c$ is
   regular.

Consequently every convergent sequence has $\sigma_n \to \lim_k x_k$, which is a
second proof of [[thm-cesaro-mean-theorem]], obtained from the general
characterisation rather than from a direct estimate.

## Facts & Assumptions

**Given:** The matrix $c$ with $c_{n,k} = (n+1)^{-1}$ for $k \le n$ and $c_{n,k} = 0$ for $k > n$.

[L1] Summability matrices: finite row support, the transform, the row sum, the row absolute sum and regularity ([[def-summability-matrix]], [[def-sequence]]).

[L2] The Cesaro means $\sigma_n = (n+1)^{-1}\sum_{k=0}^{n} x_k$ ([[def-cesaro-mean]]).

[L3] Silverman-Toeplitz: a summability matrix is regular exactly when every column tends to $0$, the row sums tend to $1$, and the row absolute sums are uniformly bounded ([[thm-silverman-toeplitz]]).

[L4] Finite sums and their laws, in particular $\sum_{k<d}\lambda = d\lambda$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] Convergence, and the fact that a constant sequence converges to its value ([[def-real-limit]], [[def-sequence]]).

[L6] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $m \ge 1$ with $1/m < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L7] Order arithmetic: $(n+1)\cdot 1_{\mathbb{R}} > 0$ for every $n \in \mathbb{N}$ ([[lem-of-naturals-positive]]); a positive element is invertible with positive inverse, and reciprocation reverses the order ([[lem-of-inverse-positive]]); $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Row $n$ of $c$ vanishes at every $k > n$, so $n$ is an admissible bound for row $n$ and $c$ is a summability matrix; its transform is $y_n = \sum_{k=0}^{n}(n+1)^{-1}x_k = (n+1)^{-1}\sum_{k=0}^{n}x_k = \sigma_n$. [L1, L2, L4]

1.2 For every $n$ the canonical natural $(n+1)\cdot 1_{\mathbb{R}}$ is positive, hence invertible with $(n+1)^{-1} > 0$; so $|c_{n,k}| = c_{n,k}$ for all $n,k$. [L7]

2.1 **Columns are null.** Fix $k$ and let $\varepsilon > 0$; choose $m \ge 1$ with $1/m < \varepsilon$. For $n \ge m$ one has $n + 1 > m$, so $|c_{n,k} - 0| \le (n+1)^{-1} < 1/m < \varepsilon$, the case $n < k$ giving $c_{n,k} = 0$ outright. Hence $\lim_n c_{n,k} = 0$. [step 1.2, L5, L6, L7]

2.2 **Row sums tend to $1$.** For every $n$, $\sum_k c_{n,k} = \sum_{k=0}^{n}(n+1)^{-1} = (n+1)(n+1)^{-1} = 1$, a constant sequence, which converges to $1$. [step 1.1, step 1.2, L1, L4, L5]

2.3 **Row absolute sums are uniformly bounded.** For every $n$, $\sum_k |c_{n,k}| = \sum_k c_{n,k} = 1 \le 1$. [step 1.1, step 1.2, L1, L4]

3.1 All three conditions hold, so $c$ is regular. [step 2.1, step 2.2, step 2.3, L3]

4.1 Therefore, for every convergent sequence $(x_k)$, the transform $(\sigma_n)$ converges with $\lim_n \sigma_n = \lim_k x_k$. [step 1.1, step 3.1, L1] ∎

## Remarks

- **Which condition is doing what.** For the Cesaro matrix the row sums and the
  row absolute sums are not merely convergent and bounded, they are constantly
  $1$; the whole content is that the columns are null, that is, that each single
  term contributes a weight $1/(n+1)$ which fades away. That is the precise
  sense in which averaging forgets any finite head, and it is why
  [[fs-cesaro-converse]] is false: forgetting the head is not the same as
  recovering the sequence.

- **Two proofs, two costs.** [[thm-cesaro-mean-theorem]] is proved directly by a
  head-and-tail estimate, with no machinery at all;
  [[thm-silverman-toeplitz]] proves the same estimate once for every weighting
  and then reads the Cesaro case off three trivial verifications. Both are kept,
  because the direct proof is what a reader should see first and the general one
  is what generalises.

- **A weighting with unbounded row absolute sums need not be regular**, and the
  Cesaro matrix is as far from that as possible, its rows being nonnegative and
  summing to $1$. See [[cex-irregular-summability-matrix]] for the contrast.
````

## Wave 7 provenance row for the target

```json
{
  "id": "cor-cesaro-matrix-is-regular",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Toeplitz_matrix",
    "https://encyclopediaofmath.org/wiki/Summation_methods"
  ],
  "rationale": "The sources identify Cesaro averaging as a matrix summation method and give the three regularity conditions. The local corollary verifies them for the zero-based row-finite Cesaro matrix.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-real-analysis-completeness-limits.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-summability-matrix",
      "source_section": "Definition",
      "quote": "A **summability matrix**, also called a **Toeplitz matrix**, is a function\n\n$$c : \\mathbb{N} \\times \\mathbb{N} \\to \\mathbb{R}, \\qquad (n,k) \\mapsto c_{n,k},$$\n\nwith **finite row support**: for every $n \\in \\mathbb{N}$ there is $R \\in\n\\mathbb{N}$ such that $c_{n,k} = 0$ for every $k > R$. Such an $R$ is called an\n**admissible bound for row $n$**. Rows are indexed by $n$ and columns by $k$; the\n$k$-th **column** of $c$ is the sequence $n \\mapsto c_{n,k}$ ([[def-sequence]]).\n\n**The transform.** Let $(x_k)$ be a sequence of reals. The **transform of\n$(x_k)$ by $c$** is the sequence $(y_n)$ given by\n\n$$y_n \\;:=\\; \\sum_{k=0}^{R} c_{n,k}\\,x_k ,$$\n\nwhere $R$ is any admissible bound for row $n$ and the sum is the finite sum of\n[[def-finite-sum]]. We write $\\sum_k c_{n,k} x_k$ for this value.\n\n**This is well defined, and the check is the reason finite row support is part\nof the definition.** Suppose $R \\le R'$ are both admissible bounds for row $n$.\nSplitting the longer sum ([[lem-finite-sum-laws]]) gives\n\n$$\\sum_{k=0}^{R'} c_{n,k}x_k \\;=\\; \\sum_{k=0}^{R} c_{n,k}x_k \\;+\\; \\sum_{k=R+1}^{R'} c_{n,k}x_k ,$$\n\nand every term of the second sum has $k > R$, hence $c_{n,k} = 0$ and\n$c_{n,k}x_k = 0$; a finite sum all of whose terms are $0$ is $0$, by the scaling\nlaw of [[lem-finite-sum-laws]] with $\\lambda = 0$. So the two agree. For two\narbitrary admissible bounds $R_1, R_2$, the order on $\\mathbb{N}$ is total\n([[thm-nat-linear-order]]), so each may be compared with the larger of the two,\nand the three values agree. Hence $y_n$ is a single well-determined real for\neach $n$, and $(y_n)$ is a sequence of reals.\n\nTwo instances of the transform have their own names. The **row sum** of row $n$\nis $\\sum_k c_{n,k}$, the transform of the constant sequence $1$; the **row\nabsolute sum** is $\\sum_k |c_{n,k}|$, the transform of the constant sequence $1$\nby the matrix $(n,k) \\mapsto |c_{n,k}|$, which again has finite row support with\nthe same admissible bounds.\n\n**Regularity.** The summability matrix $c$ is **regular** when for every\nconvergent sequence $(x_k)$ of reals the transform $(y_n)$ converges and\n\n$$\\lim_n y_n \\;=\\; \\lim_k x_k .$$\n\nBoth limits are asserted to exist there: the right-hand one by hypothesis on\n$(x_k)$, the left-hand one as part of the condition. Limits of real sequences\nare unique ([[lem-limit-unique]], [[def-real-limit]]), so the condition is\nunambiguous.",
      "uses": [
        "1.1",
        "2.2",
        "2.3",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],\n[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and\n$\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],\n[[def-nat-order]]).\n\nA **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write\n$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or\n$(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is\nthe subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$.\n\nLet $(x_k)$ be a sequence of reals and let $P$ be a property of indices.\n\n- $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for\n  every $k \\in \\mathbb{N}$; it is **unbounded** otherwise.\n- $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds\n  for every $k \\ge K$.\n- $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some\n  $k \\ge K$ for which $P(k)$ holds.\n- For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence\n  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is\n  again a sequence of reals.\n- A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if\n  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$\n  along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$;\n  it is again a sequence of reals.\n\n**Convergence and Cauchyness are not defined here.** They are already fixed, for\nsequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to\n$x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is\n$K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$\nis *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$\nwith $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the\ntoolkit for those two notions and does not restate them. A sequence\n**converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "1.1",
        "2.2",
        "2.3",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-cesaro-mean",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with finite sums as in\n[[def-finite-sum]]. For $n \\in \\mathbb{N}$ the **$n$-th Cesaro mean** of\n$(x_k)$ is\n\n$$\\sigma_n \\;:=\\; \\frac{1}{n+1}\\sum_{k=0}^{n} x_k \\;=\\; \\frac{x_0 + x_1 + \\dots + x_n}{n+1},$$\n\nwhere $n+1$ denotes the canonical natural $(n+1)\\cdot 1_{\\mathbb{R}}$.\n\n**This is well defined.** The only thing that could fail is the division: since\n$n + 1 \\ge 1$, the canonical natural $(n+1)\\cdot 1_{\\mathbb{R}}$ is strictly\npositive ([[lem-of-naturals-positive]]), hence nonzero by trichotomy\n([[def-complete-ordered-field]]), hence invertible. The sum\n$\\sum_{k=0}^{n} x_k$ is the finite sum $\\sum_{k < n+1} x_k$ of\n[[def-finite-sum]], a single well-determined real for each $n$. So\n$(\\sigma_n)_{n \\in \\mathbb{N}}$ is again a sequence of reals.\n\nThe sequence $(x_k)$ is **$(C,1)$-summable to $L \\in \\mathbb{R}$**, or\n**Cesaro summable to $L$**, when the sequence of Cesaro means converges to $L$\n([[def-real-limit]]). Limits of real sequences are unique\n([[lem-limit-unique]]), so such an $L$ is unique when it exists, and we write it\n$\\lim_n \\sigma_n$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-silverman-toeplitz",
      "source_section": "Statement",
      "quote": "Let $c$ be a summability matrix ([[def-summability-matrix]]), so that every row\nhas only finitely many nonzero entries. Then $c$ is regular if and only if all\nthree of the following hold:\n\n1. **(Columns are null.)** For every $k \\in \\mathbb{N}$ the $k$-th column\n   converges with $\\lim_n c_{n,k} = 0$.\n2. **(Row sums tend to $1$.)** The sequence of row sums converges with\n   $\\lim_n \\sum_k c_{n,k} = 1$.\n3. **(Row absolute sums are uniformly bounded.)** There is $M \\in \\mathbb{R}$\n   with $\\sum_k |c_{n,k}| \\le M$ for every $n \\in \\mathbb{N}$.\n\nIn 1 and 2 the existence of the limit is part of the assertion. The notation is\nlicensed by uniqueness of limits of real sequences ([[lem-limit-unique]]).\n\nCondition 3 is the one that cannot be seen on any single sequence: 1 and 2 are\nread off two particular convergent inputs, while the necessity of 3 needs a\nsequence built against the matrix, by a gliding hump.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), in particular an ordered field\n([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set\nof natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$\n([[def-nat-addition]]).\n\nLet $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for\n$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the\nupper index**, which is legitimate because of the recursion theorem\n([[thm-recursion]]). That theorem produces a function of one variable, so the\nrunning index has to be carried along inside the value: applying it to the set\n$A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function\n$f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique\n$g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with\n\n$$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$\n\nWrite $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates.\n\n**The first coordinate is the index itself, and that is a small induction, not an\nobservation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if\n$\\pi_1(g(n)) = n$, then\n$g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$,\nso $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every\n$n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed\nclauses be read off, and doing so gives\n\n$$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$\n\n$\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those\ntwo properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies\nthe two clauses defining $g$, hence equals $g$ by the uniqueness clause of\n[[thm-recursion]], so $\\Sigma' = \\Sigma$.\n\nWe write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting\nelement $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same\ninduction on the first coordinate and the same uniqueness argument, gives the\nunique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with\n\n$$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$\n\nand we write $\\prod_{k < n} a_k := \\Pi_n$.\n\n**Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate\n\n$$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$\n\nand, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$\nfor the number of terms,\n\n$$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$\n\nWhen $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while\nthe empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is\nnotation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the\nempty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of\n$\\mathbb{N}$ and is only a way of writing \"no terms\".\n\nOnly finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation\n$\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list\n$a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the\nlist to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively\n$a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "uses": [
        "1.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-finite-sum-laws",
      "source_section": "Statement",
      "quote": "Let $a, b, c : \\mathbb{N} \\to \\mathbb{R}$ be sequences of reals, let\n$\\lambda \\in \\mathbb{R}$, and let $m, n \\in \\mathbb{N}$, with finite sums and\nfinite products as in [[def-finite-sum]]. Then:\n\n1. **Additivity.** $\\displaystyle\\sum_{k<n}(a_k + b_k) = \\sum_{k<n} a_k + \\sum_{k<n} b_k$.\n2. **Scaling.** $\\displaystyle\\sum_{k<n} \\lambda a_k = \\lambda \\sum_{k<n} a_k$; in particular $\\displaystyle\\sum_{k<n} \\lambda = n\\lambda$, where $n$ denotes the canonical natural $\\iota(n) \\in \\mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).\n3. **Splitting.** If $m \\le n$ then $\\displaystyle\\sum_{k<n} a_k = \\sum_{k<m} a_k + \\sum_{k=m}^{n-1} a_k$, and $\\displaystyle\\prod_{k<n} a_k = \\Big(\\prod_{k<m} a_k\\Big)\\Big(\\prod_{k=m}^{n-1} a_k\\Big)$.\n4. **Monotonicity.** If $a_k \\le b_k$ for all $k < n$ then $\\displaystyle\\sum_{k<n} a_k \\le \\sum_{k<n} b_k$. In particular, if $a_k \\ge 0$ for all $k < n$ then $\\sum_{k<n} a_k \\ge 0$, every single term satisfies $a_j \\le \\sum_{k<n} a_k$ for $j < n$, and $\\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.\n5. **Telescoping.** $\\displaystyle\\sum_{k<n}\\big(c_{k+1} - c_k\\big) = c_n - c_0$.\n6. **Products.** $\\displaystyle\\prod_{k<n}(a_k b_k) = \\Big(\\prod_{k<n} a_k\\Big)\\Big(\\prod_{k<n} b_k\\Big)$; if $a_k \\ge 0$ for all $k < n$ then $\\prod_{k<n} a_k \\ge 0$, and if $a_k > 0$ for all $k < n$ then $\\prod_{k<n} a_k > 0$.",
      "uses": [
        "1.1",
        "2.2",
        "2.3"
      ]
    },
    {
      "fact": "L5",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$. It is **Cauchy** when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x_l| < \\hat\\varepsilon$ for all $k, l \\ge K$.",
      "uses": [
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L5",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],\n[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and\n$\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],\n[[def-nat-order]]).\n\nA **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write\n$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or\n$(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is\nthe subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$.\n\nLet $(x_k)$ be a sequence of reals and let $P$ be a property of indices.\n\n- $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for\n  every $k \\in \\mathbb{N}$; it is **unbounded** otherwise.\n- $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds\n  for every $k \\ge K$.\n- $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some\n  $k \\ge K$ for which $P(k)$ holds.\n- For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence\n  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is\n  again a sequence of reals.\n- A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if\n  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$\n  along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$;\n  it is again a sequence of reals.\n\n**Convergence and Cauchyness are not defined here.** They are already fixed, for\nsequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to\n$x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is\n$K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$\nis *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$\nwith $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the\ntoolkit for those two notions and does not restate them. A sequence\n**converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L6",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that\n\n$$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$\n\nwhere $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and\n$1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard\nwe abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$.\n\nThis is the **reciprocal form** of the Archimedean property.\n[[thm-of-archimedean]] on its own delivers only the assertion that the canonical\nnaturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that\nthe reciprocals of the naturals get below every positive bound, is the statement\nabove, and it is recorded separately so that no proof has to reconstruct the\ninversion step in passing.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.2",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Row $n$ of $c$ vanishes at every $k > n$, so $n$ is an admissible bound for row $n$ and $c$ is a summability matrix; its transform is $y_n = \\sum_{k=0}^{n}(n+1)^{-1}x_k = (n+1)^{-1}\\sum_{k=0}^{n}x_k = \\sigma_n$.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "L4"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "For every $n$ the canonical natural $(n+1)\\cdot 1_{\\mathbb{R}}$ is positive, hence invertible with $(n+1)^{-1} > 0$; so $|c_{n,k}| = c_{n,k}$ for all $n,k$.",
      "step": "1.2",
      "inputs": [
        "L7"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "**Columns are null.** Fix $k$ and let $\\varepsilon > 0$; choose $m \\ge 1$ with $1/m < \\varepsilon$. For $n \\ge m$ one has $n + 1 > m$, so $|c_{n,k} - 0| \\le (n+1)^{-1} < 1/m < \\varepsilon$, the case $n < k$ giving $c_{n,k} = 0$ outright. Hence $\\lim_n c_{n,k} = 0$.",
      "step": "2.1",
      "inputs": [
        "1.2",
        "L5",
        "L6",
        "L7"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "**Row sums tend to $1$.** For every $n$, $\\sum_k c_{n,k} = \\sum_{k=0}^{n}(n+1)^{-1} = (n+1)(n+1)^{-1} = 1$, a constant sequence, which converges to $1$.",
      "step": "2.2",
      "inputs": [
        "1.1",
        "1.2",
        "L1",
        "L4",
        "L5"
      ]
    },
    {
      "id": "step-2-3",
      "claim": "**Row absolute sums are uniformly bounded.** For every $n$, $\\sum_k |c_{n,k}| = \\sum_k c_{n,k} = 1 \\le 1$.",
      "step": "2.3",
      "inputs": [
        "1.1",
        "1.2",
        "L1",
        "L4"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "All three conditions hold, so $c$ is regular.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "2.2",
        "2.3",
        "L3"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Therefore, for every convergent sequence $(x_k)$, the transform $(\\sigma_n)$ converges with $\\lim_n \\sigma_n = \\lim_k x_k$.",
      "step": "4.1",
      "inputs": [
        "1.1",
        "3.1",
        "L1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The Statement quantifies over fixed nonempty data and introduces no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: Row $n$ of $c$ vanishes at every $k > n$, so $n$ is an admissible bound for row $n$ and $c$ is a summability matrix; its transform is $y_n = \\sum_{k=0}^{n}(n+1)^{-1}x_k = (n+1)^{-1}\\sum_{k=0}^{n}x_k = \\sigma_n$."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: Row $n$ of $c$ vanishes at every $k > n$, so $n$ is an admissible bound for row $n$ and $c$ is a summability matrix; its transform is $y_n = \\sum_{k=0}^{n}(n+1)^{-1}x_k = (n+1)^{-1}\\sum_{k=0}^{n}x_k = \\sigma_n$."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 2.2: **Row sums tend to $1$.** For every $n$, $\\sum_k c_{n,k} = \\sum_{k=0}^{n}(n+1)^{-1} = (n+1)(n+1)^{-1} = 1$, a constant sequence, which converges to $1$."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The Statement has no interval endpoint or finite-index endpoint boundary."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 2.1: all existence or selection moves were checked; any countable-choice use is explicitly tagged in the cited step."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement is not a biconditional; it is a one-directional result, example, or refutation."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement is not a biconditional; no reverse implication is asserted."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "critical risk (10): 13 declared dependencies; 14 cited facts; 7 numbered proof steps; boundary-sensitive language; analytic limiting/completeness language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: Checked boundary cases (n=0, k=0, n<k, indices at extremes) — the admissible bound n works for n=0, the row sums are constantly 1, the column limit argument handles n<k trivially, and the uniform row-absolute-sum bound 1 holds for all n. The reciprocal Archimedean choice m ≥ 1 always gives a positive integer, and the inequality (n+1)⁻¹ < 1/m for n ≥ m is justified by the strict decreasing of reciprocals on positive reals. No hidden degenerate, empty, or endpoint case breaks the reasoning. Checked surface: Read the title, the public Statement, every numbered proof step (1.1, 1.2, 2.1, 2.2, 2.3, 3.1, 4.1), and the Remarks section. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/cor-cesaro-matrix-is-regular--bcb309fc8fc7e6ff.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cor-cesaro-matrix-is-regular",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-silverman-toeplitz",
    "declared_target": "thm-silverman-toeplitz",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-cesaro-matrix-is-regular",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-summability-matrix",
    "declared_target": "def-summability-matrix",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-cesaro-matrix-is-regular",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-cesaro-mean",
    "declared_target": "def-cesaro-mean",
    "target_statement_provenance": "literature-derived",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-cesaro-matrix-is-regular",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-sequence",
    "declared_target": "def-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-cesaro-matrix-is-regular",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cor-cesaro-matrix-is-regular",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cor-cesaro-matrix-is-regular",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-cesaro-matrix-is-regular",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "cor-archimedean-reciprocal",
    "declared_target": "cor-archimedean-reciprocal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-cesaro-matrix-is-regular",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cor-cesaro-matrix-is-regular",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cor-cesaro-matrix-is-regular",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cor-cesaro-matrix-is-regular",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-cesaro-matrix-is-regular",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-cesaro-matrix-is-regular",
    "sourcePage": "equivalent-forms-of-completeness",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "cex-irregular-summability-matrix",
    "declared_target": "cex-irregular-summability-matrix",
    "target_statement_provenance": "ai-generated",
    "targetPage": "equivalent-forms-of-completeness-examples",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (16)

### `cex-irregular-summability-matrix`

````markdown
---
id: cex-irregular-summability-matrix
kind: counterexample
title: "A summability matrix failing exactly one Silverman-Toeplitz condition and transforming a convergent sequence to a divergent one"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-silverman-toeplitz, def-summability-matrix, def-real-limit, def-sequence, def-finite-sum, lem-finite-sum-laws, lem-alternating-sequence, fs-bounded-implies-convergent, thm-algebra-of-limits, cor-archimedean-reciprocal, thm-of-archimedean, def-bounded-set, lem-of-abs-value, lem-of-inverse-positive, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field]
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
    - title: "Silverman-Toeplitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Silverman%E2%80%93Toeplitz_theorem"
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** a summability matrix whose columns tend to $0$ and whose row
sums tend to $1$ is regular; equivalently, the uniform bound on the row absolute
sums in [[thm-silverman-toeplitz]] is redundant.

The witness is the matrix with exactly two nonzero entries in each row,

$$c_{n,n} := -(n+1), \qquad c_{n,n+1} := n+2, \qquad c_{n,k} := 0 \text{ for } k \notin \{n, n+1\},$$

together with the null sequence $x_k := s_k/(k+1)$, where $(s_k)$ is the
alternating sequence of [[lem-alternating-sequence]]. Every column of $c$ is
eventually $0$; every row sum is exactly $1$; the row absolute sums are
$2n+3$ and are unbounded. The transform of $(x_k)$ is

$$y_n \;=\; -(n+1)\frac{s_n}{n+1} \;+\; (n+2)\frac{s_{n+1}}{n+2} \;=\; -s_n + s_{n+1} \;=\; -2 s_n,$$

which does not converge although $x_k \to 0$. So $c$ is not regular, and the
third condition of [[thm-silverman-toeplitz]] is not redundant.

## Facts & Assumptions

**Given:** The matrix $c$ above, the alternating sequence $(s_k)$ with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$, and the sequence $x_k := s_k\,((k+1)\cdot 1_{\mathbb{R}})^{-1}$.

[L1] Summability matrices, the transform, row sums, row absolute sums and regularity ([[def-summability-matrix]], [[def-sequence]]); finite sums and their laws ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] The Silverman-Toeplitz conditions and the theorem that they characterise regularity ([[thm-silverman-toeplitz]]).

[L3] The alternating sequence: $|s_k| = 1$, $s_{k+1} = -s_k$ ([[lem-alternating-sequence]]); it does not converge ([[fs-bounded-implies-convergent]]).

[L4] Convergence of real sequences ([[def-real-limit]]); a sequence that is eventually $0$ converges to $0$; the reciprocal Archimedean property ([[cor-archimedean-reciprocal]]); no real bounds every canonical natural ([[thm-of-archimedean]], [[def-bounded-set]]).

[L5] Algebra of limits, in particular the scalar-multiple rule ([[thm-algebra-of-limits]]).

[L6] Order arithmetic: $(k+1)\cdot 1_{\mathbb{R}} > 0$ ([[lem-of-naturals-positive]]) hence invertible with positive inverse, and reciprocation reverses the order ([[lem-of-inverse-positive]]); $|u| \ge 0$ and $|uv| = |u||v|$ ([[lem-of-abs-value]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 $c$ is a summability matrix: row $n$ vanishes at every $k > n+1$, so $n+1$ is an admissible bound for row $n$. [L1]

1.2 Every column of $c$ converges to $0$: for fixed $k$, the entry $c_{n,k}$ is nonzero only when $n = k$ or $n + 1 = k$, so $c_{n,k} = 0$ for every $n \ge k+1$ and the column is eventually $0$. [L1, L4]

1.3 Every row sum is $1$: $\sum_k c_{n,k} = -(n+1) + (n+2) = 1$, so the row sums form the constant sequence $1$ and converge to $1$. [L1]

1.4 The row absolute sums are not bounded above: $\sum_k |c_{n,k}| = (n+1) + (n+2) = 2n+3$, and no real exceeds every canonical natural. [L1, L4, L6]

1.5 $(x_k)$ converges to $0$: $|x_k| = ((k+1)\cdot 1_{\mathbb{R}})^{-1}$, and given a real $\varepsilon > 0$ and a natural $m \ge 1$ with $1/m < \varepsilon$, every $k \ge m$ has $|x_k - 0| < \varepsilon$. [L3, L4, L6]

2.1 The transform of $(x_k)$ by $c$ is $y_n = c_{n,n}x_n + c_{n,n+1}x_{n+1} = -(n+1)\,s_n\,((n+1)\cdot 1)^{-1} + (n+2)\,s_{n+1}\,((n+2)\cdot 1)^{-1} = -s_n + s_{n+1} = -2s_n$. [step 1.1, step 1.5, L1, L3, L6]

3.1 $(y_n)$ does not converge: were $y_n \to M$, then $s_n = (-1/2)\,y_n$ would converge to $-M/2$ by the scalar-multiple rule, contradicting [L3]. [step 2.1, L3, L5]

4.1 So $c$ has null columns and row sums tending to $1$, yet transforms the convergent sequence $(x_k)$ into a divergent one and is therefore not regular; the claim is false, and by [[thm-silverman-toeplitz]] what fails is exactly the uniform bound on the row absolute sums, as step 1.4 confirms. [step 1.2, step 1.3, step 1.4, step 1.5, step 3.1, L1, L2] ∎

## Remarks

- **Exactly one condition fails**, and the counterexample is arranged so. The
  columns are eventually $0$ and the row sums are constantly $1$, so conditions
  1 and 2 of [[thm-silverman-toeplitz]] hold outright; only the uniform bound
  fails, and the failure is visible in a single line, $2n+3$ being unbounded.

- **How the failure is exploited.** The two entries of row $n$ are large and of
  opposite sign, so they nearly cancel on a slowly varying input and do not
  cancel at all on an alternating one. The input $x_k = s_k/(k+1)$ is chosen so
  that the large factors $n+1$ and $n+2$ exactly cancel the small factors
  $1/(n+1)$ and $1/(n+2)$, leaving the undamped oscillation $-2s_n$. That is the
  gliding hump of the necessity proof in
  [[thm-silverman-toeplitz]], in its simplest possible instance.

- **The failure is the stronger of the two possible ones.** A matrix can be
  irregular by changing a limit, for instance $c_{n,n} = 2$ and all other
  entries $0$, whose row sums tend to $2$ rather than $1$ and which sends
  $(x_k)$ to $(2x_k)$. The matrix above destroys convergence altogether.

- **Contrast with the Cesaro matrix**, whose rows are nonnegative and sum to $1$,
  so its row absolute sums are constantly $1$ and it is regular
  ([[cor-cesaro-matrix-is-regular]]). Uniform boundedness of the row absolute
  sums is what stops a weighting from amplifying, and it is the only one of the
  three conditions that is not tested by a single fixed input.
````

### `cor-archimedean-reciprocal`

````markdown
---
id: cor-archimedean-reciprocal
kind: corollary
title: "For every $\\varepsilon > 0$ in a complete ordered field there is a natural $n \\ge 1$ with $1/n < \\varepsilon$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-of-archimedean, lem-of-inverse-positive, def-complete-ordered-field, def-ordered-field, def-field]
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.20(a) and its corollaries)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.4 (Prop. 5.4.12, the Archimedean property)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "UTSA Mathematics: The Archimedean property"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Real_Numbers%3AArchimedean_Property"
---

## Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let
$\varepsilon \in F$ with $\varepsilon > 0$. Then there is a natural number
$n \ge 1$ such that

$$\frac{1}{n \cdot 1_F} < \varepsilon ,$$

where $n \cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and
$1/(n \cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard
we abbreviate $n \cdot 1_F$ to $n$ and write the conclusion $1/n < \varepsilon$.

This is the **reciprocal form** of the Archimedean property.
[[thm-of-archimedean]] on its own delivers only the assertion that the canonical
naturals are cofinal, $x < n \cdot 1_F$; the form actually used in analysis, that
the reciprocals of the naturals get below every positive bound, is the statement
above, and it is recorded separately so that no proof has to reconstruct the
inversion step in passing.

## Facts & Assumptions

**Given:** A complete ordered field $F$ and an element $\varepsilon \in F$ with $\varepsilon > 0$.

[L1] Archimedean property: for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$ ([[thm-of-archimedean]], [[def-complete-ordered-field]]).

[L2] Inverses and order: if $a > 0$ then $a^{-1} > 0$, and if $0 < a < b$ then $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]], [[def-ordered-field]]).

[L3] Field arithmetic: an element $a$ with $a > 0$ is nonzero by trichotomy, hence has a multiplicative inverse $a^{-1}$, and $(a^{-1})^{-1} = a$ ([[def-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $\varepsilon > 0$, trichotomy gives $\varepsilon \ne 0$, so $\varepsilon^{-1}$ exists, and $\varepsilon^{-1} > 0$. [given, L2, L3]

2.1 Apply [L1] to $x = \varepsilon^{-1}$: fix a natural number $n \ge 1$ with $\varepsilon^{-1} < n \cdot 1_F$. [step 1.1, L1, choose]

3.1 Chaining the two displayed inequalities gives $0 < \varepsilon^{-1} < n \cdot 1_F$; in particular $n \cdot 1_F > 0$, so $n \cdot 1_F \ne 0$ and $1/(n \cdot 1_F)$ is defined. [step 1.1, step 2.1, L3]

4.1 Apply the second claim of [L2] with $a = \varepsilon^{-1}$ and $b = n \cdot 1_F$: $0 < (n \cdot 1_F)^{-1} < (\varepsilon^{-1})^{-1}$. [step 3.1, L2]

5.1 By [L3], $(\varepsilon^{-1})^{-1} = \varepsilon$, so the natural number $n \ge 1$ fixed in step 2.1 satisfies $1/(n \cdot 1_F) < \varepsilon$, which is the assertion. [step 4.1, L3] ∎

## Remarks

- **Monotonicity gives the eventual form for free.** If $m \ge n \ge 1$ then
  $m \cdot 1_F \ge n \cdot 1_F > 0$, because $k \mapsto k \cdot 1_F$ is strictly
  increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]), and so
  $1/(m \cdot 1_F) \le 1/(n \cdot 1_F) < \varepsilon$ by [[lem-of-inverse-positive]]
  again. So the corollary yields not merely one index but a threshold: every
  $m \ge n$ satisfies $1/m < \varepsilon$. That one extra line is what a
  convergence proof needs, and it is left to the caller rather than folded into
  the statement, because the caller usually has a threshold of its own to combine
  it with.

- **Completeness is used only through [[thm-of-archimedean]].** Nothing here
  needs the least-upper-bound property directly. The corollary therefore holds
  verbatim in any Archimedean ordered field, in particular in $\mathbb{Q}$, and
  it fails in a non-Archimedean ordered field, where an infinitesimal
  $\varepsilon > 0$ is below every $1/n$ by construction.

- The equivalence is exact: the reciprocal form implies the cofinal form back
  again, since given $x > 0$ one applies it to $\varepsilon = 1/x$. The two are
  the same property written on the two sides of the inversion, and only the
  direction proved above is used in this library.
````

### `def-cesaro-mean`

````markdown
---
id: def-cesaro-mean
kind: definition
title: "The Cesaro means $\\sigma_n = (x_0 + \\dots + x_n)/(n+1)$ and $(C,1)$-summability"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-sequence, def-finite-sum, def-real-limit, lem-of-naturals-positive, lem-limit-unique, def-complete-ordered-field]
forward_refs: [ex-cesaro-means-of-alternating]
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
    - title: "Summation methods (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Summation_methods"
    - title: "Cesàro summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ces%C3%A0ro_summation"
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
    - title: "G. H. Hardy, Divergent Series, Ch. 1 and Ch. 5"
      url: "https://archive.org/details/divergentseries033523mbp"
pipeline_run: null
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with finite sums as in
[[def-finite-sum]]. For $n \in \mathbb{N}$ the **$n$-th Cesaro mean** of
$(x_k)$ is

$$\sigma_n \;:=\; \frac{1}{n+1}\sum_{k=0}^{n} x_k \;=\; \frac{x_0 + x_1 + \dots + x_n}{n+1},$$

where $n+1$ denotes the canonical natural $(n+1)\cdot 1_{\mathbb{R}}$.

**This is well defined.** The only thing that could fail is the division: since
$n + 1 \ge 1$, the canonical natural $(n+1)\cdot 1_{\mathbb{R}}$ is strictly
positive ([[lem-of-naturals-positive]]), hence nonzero by trichotomy
([[def-complete-ordered-field]]), hence invertible. The sum
$\sum_{k=0}^{n} x_k$ is the finite sum $\sum_{k < n+1} x_k$ of
[[def-finite-sum]], a single well-determined real for each $n$. So
$(\sigma_n)_{n \in \mathbb{N}}$ is again a sequence of reals.

The sequence $(x_k)$ is **$(C,1)$-summable to $L \in \mathbb{R}$**, or
**Cesaro summable to $L$**, when the sequence of Cesaro means converges to $L$
([[def-real-limit]]). Limits of real sequences are unique
([[lem-limit-unique]]), so such an $L$ is unique when it exists, and we write it
$\lim_n \sigma_n$.

## Remarks

- **The indexing starts at $0$ and the denominator is $n+1$, not $n$.**
  Sequences here are functions on $\mathbb{N}$ and $\mathbb{N}$ contains $0$
  ([[def-sequence]]), so $\sigma_n$ averages the $n+1$ terms
  $x_0, \dots, x_n$. Writing $\sigma_n = (x_1 + \dots + x_n)/n$, as texts
  indexing from $1$ do, would leave $\sigma_0$ undefined and would not be a
  sequence on $\mathbb{N}$ at all. The convention chosen here is also what makes
  the Cesaro matrix $c_{n,k} = 1/(n+1)$ for $k \le n$ a genuine
  $\mathbb{N} \times \mathbb{N}$ summability matrix
  ([[def-summability-matrix]], [[cor-cesaro-matrix-is-regular]]).

- **$(C,1)$-summability is strictly weaker than convergence.** Every convergent
  sequence is $(C,1)$-summable to its limit ([[thm-cesaro-mean-theorem]]), and
  the converse fails ([[fs-cesaro-converse]]): the Cesaro means of the
  alternating sequence converge to $0$ while the sequence itself diverges
  ([[ex-cesaro-means-of-alternating]]). That is the entire point of the notion:
  it assigns a value to some divergent sequences, consistently with the ordinary
  limit wherever the ordinary limit exists.

- **Nothing here sums a series.** The object averaged is the sequence $(x_k)$
  itself, not its partial sums, and $\sum_{k=0}^{n} x_k$ is a finite sum in the
  sense of [[def-finite-sum]]. Applied instead to the partial sums of a series,
  the same definition gives the classical Cesaro summation of divergent series;
  series are not available until the next page of this track and nothing above
  presupposes them.
````

### `def-complete-ordered-field`

````markdown
---
id: def-complete-ordered-field
kind: definition
title: "Complete ordered field (least-upper-bound property)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: [def-dedekind-complete-field]
landmark: true
short: "complete ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Wisconsin Math 521 notes: Real analysis"
      url: "https://people.math.wisc.edu/~jwrobbin/521dir/521.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]) and $S \subseteq F$.

- $u \in F$ is an **upper bound** of $S$ if $s \le u$ for all $s \in S$; $S$ is
  **bounded above** if it has an upper bound.
- $u \in F$ is a **least upper bound** (or **supremum**, $\sup S$) of $S$ if $u$
  is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$.

$F$ is a **complete ordered field** (equivalently, $F$ has the
**least-upper-bound property**, or is **Dedekind complete**) if every nonempty
$S \subseteq F$ that is bounded above has a least upper bound in $F$.

## Remarks

- A least upper bound, if it exists, is unique (two least upper bounds are each
  $\le$ the other, so equal by antisymmetry of the order).
- Applying the property to $\{-s : s \in S\}$ yields the dual **greatest lower
  bound** (infimum) property, so the two are equivalent.
- The Dedekind-cut reals have this property by construction
  ([[thm-dedekind-complete]]); the Cauchy-sequence reals acquire it via
  [[cor-cauchy-reals-lub-complete]]. This definition is the target for the
  uniqueness theorem [[thm-uniqueness-complete-ordered-field]].
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

### `def-ordered-field`

````markdown
---
id: def-ordered-field
kind: definition
title: "Ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field]
aliases: []
landmark: true
short: "ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
---

## Definition

An **ordered field** is a field $F$ ([[def-field]]) together with a subset
$P \subseteq F$, the set of **positive** elements (the *positive cone*),
satisfying:

- **(O1) Trichotomy.** For each $x \in F$, exactly one of the following holds:
  $x \in P$, or $x = 0$, or $-x \in P$.
- **(O2) Closure.** If $x, y \in P$ then $x + y \in P$ and $x \cdot y \in P$.

We write $x > 0$ for $x \in P$ (read "$x$ is positive"), and define the order by

$$a < b \;:\Longleftrightarrow\; b - a \in P, \qquad a \le b \;:\Longleftrightarrow\; a < b \text{ or } a = b.$$

Thus $a > b$ means $b < a$, and $a \ge b$ means $b \le a$. An element $x$ with
$-x \in P$ (equivalently $x < 0$) is called **negative**.

## Remarks

- By trichotomy applied to $b - a$, for any $a, b$ exactly one of $a < b$,
  $a = b$, $a > b$ holds; this makes $\le$ a total order.
- (O2) says the positives are closed under addition and multiplication: sums and
  products of positives are positive.
- The rationals ([[thm-rat-ordered-field]]) and both constructions of the reals
  ([[thm-reals-ordered-field]], [[thm-reals-dedekind-ordered-field]]) are ordered
  fields, so every fact proved here from (O1)-(O2) holds in each of them.
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

### `def-sequence`

````markdown
---
id: def-sequence
kind: definition
title: "Sequences of reals: bounded, eventually, frequently, tails, subsequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-natural-numbers, def-nat-order, def-real-limit, def-real-order, def-complete-ordered-field, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: true
short: "$(x_k)$, bounded, eventually, subsequence"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "Sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],
[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and
$\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],
[[def-nat-order]]).

A **sequence of reals** is a function $x : \mathbb{N} \to \mathbb{R}$. We write
$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or
$(x_k)_{k \in \mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is
the subset $\{\, x_k : k \in \mathbb{N} \,\} \subseteq \mathbb{R}$.

Let $(x_k)$ be a sequence of reals and let $P$ be a property of indices.

- $(x_k)$ is **bounded** if there is $M \in \mathbb{R}$ with $|x_k| \le M$ for
  every $k \in \mathbb{N}$; it is **unbounded** otherwise.
- $P$ holds **eventually** if there is $K \in \mathbb{N}$ such that $P(k)$ holds
  for every $k \ge K$.
- $P$ holds **frequently** if for every $K \in \mathbb{N}$ there is some
  $k \ge K$ for which $P(k)$ holds.
- For $K \in \mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence
  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \in \mathbb{N}$; it is
  again a sequence of reals.
- A function $n : \mathbb{N} \to \mathbb{N}$ is **strictly increasing** if
  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$
  along $n$ is the composite $x \circ n$, written $(x_{n_k})_{k \in \mathbb{N}}$;
  it is again a sequence of reals.

**Convergence and Cauchyness are not defined here.** They are already fixed, for
sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to
$x \in \mathbb{R}$ when for every rational $\varepsilon > 0$ there is
$K \in \mathbb{N}$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and $(x_k)$
is *Cauchy* when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$
with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$. This page builds the
toolkit for those two notions and does not restate them. A sequence
**converges** if it converges to some real, and **diverges** if it does not.

## Remarks

- **Identification of $\mathbb{Q}$ with its image.** The map $q \mapsto \hat q$
  is an embedding of ordered fields ([[lem-rat-embeds-dense]]), and as is
  standard we write $q$ for $\hat q$, so that a rational may be compared with a
  real without further comment. [[def-real-limit]] is stated with the hat; every
  rational $\varepsilon$ occurring on this page is its image under this
  embedding.

- **Rational and real $\varepsilon$ agree.** [[def-real-limit]] tests convergence
  against every *rational* $\varepsilon > 0$, and its own remark records that
  this loses nothing. Spelled out: suppose that for every rational
  $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all
  $k \ge K$, and let $\eta > 0$ be an arbitrary *real*. Since $0 < \eta$,
  density of $\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]) supplies a
  rational $\varepsilon$ with $0 < \varepsilon < \eta$, and the index $K$
  belonging to that $\varepsilon$ satisfies $|x_k - x| < \varepsilon < \eta$ for
  all $k \ge K$. The converse implication is immediate, since every positive
  rational is a positive real. So the two formulations define the same relation,
  and the same two lines apply verbatim to the Cauchy condition and to any
  condition of the shape "for every $\varepsilon > 0$, eventually
  $\cdots < \varepsilon$". Proofs on this page therefore run the test with a real
  $\varepsilon$ wherever that is more convenient, and say so by citing this
  remark; nothing is smuggled in.

- **Constant sequences converge.** For $c \in \mathbb{R}$ the constant sequence
  $x_k := c$ converges to $c$, because $|x_k - c| = |0| = 0 < \varepsilon$ for
  every $\varepsilon > 0$ and every $k$; it is bounded by $|c|$.

- **Eventually and frequently are dual.** $P$ holds frequently exactly when
  $\lnot P$ does not hold eventually, and $P$ holds eventually exactly when
  $\lnot P$ does not hold frequently. So the two quantifier patterns are
  negations of one another applied to the complementary property, and there is no
  third pattern hiding between them.

- **A sequence is not its range.** $(x_k)$ is a function, not a set, and the
  range does not determine the function: the sequence $x_0 = 0$, $x_k = 1$ for
  $k \ge 1$ and the sequence $y_0 = y_1 = 0$, $y_k = 1$ for $k \ge 2$ have the
  same range $\{0, 1\}$, yet they differ at $k = 1$, so they are different
  sequences. Order and repetition are part of the data and the range forgets
  both. Boundedness, on the other hand, depends only on the range.

- **Indexing.** Sequences here start at $k = 0$ because $\mathbb{N}$ contains
  $0$ ([[def-natural-numbers]]). Texts that index from $1$ describe the same
  objects up to a shift, and the shift changes nothing about convergence, by
  [[lem-limit-of-tail]].
````

### `def-summability-matrix`

````markdown
---
id: def-summability-matrix
kind: definition
title: "A summability (Toeplitz) matrix, the transformed sequence $y_n = \\sum_k c_{n,k} x_k$, and regularity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequence, def-real-limit, def-finite-sum, lem-finite-sum-laws, lem-limit-unique, thm-nat-linear-order, def-complete-ordered-field]
forward_refs: [cex-irregular-summability-matrix, ex-cesaro-means-of-alternating]
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
    - title: "Toeplitz matrix (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Toeplitz_matrix"
    - title: "Summation methods (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Summation_methods"
    - title: "Silverman-Toeplitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Silverman%E2%80%93Toeplitz_theorem"
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
    - title: "G. H. Hardy, Divergent Series, Ch. 3"
      url: "https://archive.org/details/divergentseries033523mbp"
pipeline_run: null
---

## Definition

A **summability matrix**, also called a **Toeplitz matrix**, is a function

$$c : \mathbb{N} \times \mathbb{N} \to \mathbb{R}, \qquad (n,k) \mapsto c_{n,k},$$

with **finite row support**: for every $n \in \mathbb{N}$ there is $R \in
\mathbb{N}$ such that $c_{n,k} = 0$ for every $k > R$. Such an $R$ is called an
**admissible bound for row $n$**. Rows are indexed by $n$ and columns by $k$; the
$k$-th **column** of $c$ is the sequence $n \mapsto c_{n,k}$ ([[def-sequence]]).

**The transform.** Let $(x_k)$ be a sequence of reals. The **transform of
$(x_k)$ by $c$** is the sequence $(y_n)$ given by

$$y_n \;:=\; \sum_{k=0}^{R} c_{n,k}\,x_k ,$$

where $R$ is any admissible bound for row $n$ and the sum is the finite sum of
[[def-finite-sum]]. We write $\sum_k c_{n,k} x_k$ for this value.

**This is well defined, and the check is the reason finite row support is part
of the definition.** Suppose $R \le R'$ are both admissible bounds for row $n$.
Splitting the longer sum ([[lem-finite-sum-laws]]) gives

$$\sum_{k=0}^{R'} c_{n,k}x_k \;=\; \sum_{k=0}^{R} c_{n,k}x_k \;+\; \sum_{k=R+1}^{R'} c_{n,k}x_k ,$$

and every term of the second sum has $k > R$, hence $c_{n,k} = 0$ and
$c_{n,k}x_k = 0$; a finite sum all of whose terms are $0$ is $0$, by the scaling
law of [[lem-finite-sum-laws]] with $\lambda = 0$. So the two agree. For two
arbitrary admissible bounds $R_1, R_2$, the order on $\mathbb{N}$ is total
([[thm-nat-linear-order]]), so each may be compared with the larger of the two,
and the three values agree. Hence $y_n$ is a single well-determined real for
each $n$, and $(y_n)$ is a sequence of reals.

Two instances of the transform have their own names. The **row sum** of row $n$
is $\sum_k c_{n,k}$, the transform of the constant sequence $1$; the **row
absolute sum** is $\sum_k |c_{n,k}|$, the transform of the constant sequence $1$
by the matrix $(n,k) \mapsto |c_{n,k}|$, which again has finite row support with
the same admissible bounds.

**Regularity.** The summability matrix $c$ is **regular** when for every
convergent sequence $(x_k)$ of reals the transform $(y_n)$ converges and

$$\lim_n y_n \;=\; \lim_k x_k .$$

Both limits are asserted to exist there: the right-hand one by hypothesis on
$(x_k)$, the left-hand one as part of the condition. Limits of real sequences
are unique ([[lem-limit-unique]], [[def-real-limit]]), so the condition is
unambiguous.

## Remarks

- **Finite row support is not a technical convenience, it is what makes the
  transform mean anything at all at this point of the library.** The classical
  definition allows every row to be an infinite series $\sum_{k=0}^{\infty}
  c_{n,k}x_k$, and asks that each such series converge. Series are not defined
  anywhere in this library yet; they arrive on the next page of this track. Every
  sum above is therefore a *finite* sum in the sense of [[def-finite-sum]], and
  no convergence question arises inside a row.

- **What is lost, and what is not.** The restriction excludes matrices such as
  the Abel and Borel means, whose rows are genuine series. It does not exclude
  anything needed here: the Cesaro matrix has $c_{n,k} = 1/(n+1)$ for $k \le n$
  and $0$ beyond ([[cor-cesaro-matrix-is-regular]]), so row $n$ has admissible
  bound $n$; and the counterexample of
  [[cex-irregular-summability-matrix]] has two nonzero entries per row.
  [[thm-silverman-toeplitz]] characterises regularity within this class.

- **Regularity says the transform is a genuine generalisation of the limit.** It
  is exactly the condition that $c$ never changes the value of a limit that
  already exists. It says nothing at all about sequences that do not converge,
  and the interest of such matrices is precisely that a regular one may still
  assign a value to a divergent sequence: the Cesaro matrix does so for the
  alternating sequence ([[ex-cesaro-means-of-alternating]]).

- **A matrix that fails regularity can fail it in two different ways**, by
  changing a limit or by destroying convergence outright.
  [[cex-irregular-summability-matrix]] does the second, which is the stronger
  failure.
````

### `fs-cesaro-converse`

````markdown
---
id: fs-cesaro-converse
kind: false-statement
title: "FALSE: if the Cesaro means of a sequence converge then the sequence converges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cesaro-mean-theorem, def-cesaro-mean, lem-alternating-sequence, fs-bounded-implies-convergent, cor-archimedean-reciprocal, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, def-real-limit, def-sequence, lem-of-abs-value, lem-of-inverse-positive, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field]
forward_refs: [ex-cesaro-means-of-alternating]
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
    - title: "Grandi's series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Grandi%27s_series"
    - title: "Cesàro summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ces%C3%A0ro_summation"
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
    - title: "G. H. Hardy, Divergent Series, Ch. 1"
      url: "https://archive.org/details/divergentseries033523mbp"
pipeline_run: null
---

## Statement

**False claim:** if the Cesaro means $(\sigma_n)$ of a sequence $(x_k)$ of reals
converge ([[def-cesaro-mean]]), then $(x_k)$ converges.

The implication in the opposite direction is true and is
[[thm-cesaro-mean-theorem]]. The claim above asserts its converse, and it is
refuted below by the alternating sequence $s_k = (-1)^k$, whose Cesaro means
converge to $0$ while the sequence itself does not converge at all.

That is the whole reason Cesaro summability is worth defining: it is a strictly
larger notion than convergence, consistent with it where both apply.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ of [[lem-alternating-sequence]], the unique sequence of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$, together with the index maps $e$ and $o$ of that lemma; and its partial sums $S_n := \sum_{k<n} s_k$ ([[def-finite-sum]]), and its Cesaro means $\sigma_n = (n+1)^{-1}S_{n+1}$ ([[def-cesaro-mean]]).

[L1] The alternating sequence: $e$ and $o$ are the unique maps with $e_0 = 0$, $e_{\sigma(j)} = \sigma(\sigma(e_j))$, $o_0 = \sigma(0)$, $o_{\sigma(j)} = \sigma(\sigma(o_j))$; both are strictly increasing; $\mathbb{N}$ is the disjoint union of their ranges; $(s_k)$ is the unique sequence with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$; $|s_k| = 1$, $s_{e_j} = 1$ and $s_{o_j} = -1$ ([[lem-alternating-sequence]]).

[L2] Finite sums: $\sum_{k<0} s_k = 0$ and $\sum_{k<n+1} s_k = \sum_{k<n} s_k + s_n$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L3] Induction principle ([[thm-induction-principle]]).

[L4] Cesaro means: $\sigma_n = (n+1)^{-1}\sum_{k=0}^{n}x_k$, and $\sum_{k=0}^{n} = \sum_{k<n+1}$ ([[def-cesaro-mean]], [[def-finite-sum]]).

[L5] The alternating sequence does not converge: it is bounded and divergent, which is the refutation of [[fs-bounded-implies-convergent]], carried out there for the very same sequence, the one determined by $s_0 = 1$ and $s_{\sigma(k)} = -s_k$, which [[lem-alternating-sequence]] shows is unique.

[L6] Reciprocal Archimedean property ([[cor-archimedean-reciprocal]]); convergence of a real sequence ([[def-real-limit]], [[def-sequence]]).

[L7] Order arithmetic: $(n+1)\cdot 1_{\mathbb{R}} > 0$ ([[lem-of-naturals-positive]]) hence invertible with positive inverse, and reciprocation reverses the order ([[lem-of-inverse-positive]]); $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Refutation

**Proof technique:** direct.

1.1 By induction on $j$, $o_j = \sigma(e_j)$ and $e_{\sigma(j)} = \sigma(o_j)$: at $j = 0$ one has $o_0 = \sigma(0) = \sigma(e_0)$, and $e_{\sigma(j)} = \sigma(\sigma(e_j)) = \sigma(o_j)$ follows from the first identity at $j$, while $o_{\sigma(j)} = \sigma(\sigma(o_j)) = \sigma(e_{\sigma(j)})$ carries the first identity to $\sigma(j)$. [L1, L3]

1.2 The partial sums satisfy $S_0 = 0$ and $S_{\sigma(n)} = S_n + s_n$, and $\sigma_n = (n+1)^{-1}S_{\sigma(n)}$. [L2, L4, L7]

1.3 $(s_k)$ does not converge. [L5]

2.1 By induction on $j$: $S_{e_j} = 0$ and $S_{o_j} = 1$. At $j = 0$: $S_{e_0} = S_0 = 0$ and $S_{o_0} = S_{\sigma(0)} = S_0 + s_0 = 1$. For the step, $S_{e_{\sigma(j)}} = S_{\sigma(o_j)} = S_{o_j} + s_{o_j} = 1 + (-1) = 0$ and $S_{o_{\sigma(j)}} = S_{\sigma(e_{\sigma(j)})} = S_{e_{\sigma(j)}} + s_{e_{\sigma(j)}} = 0 + 1 = 1$. [step 1.1, step 1.2, L1, L3]

3.1 Every natural number is $e_j$ for exactly one $j$ or $o_j$ for exactly one $j$, so $S_m \in \{0,1\}$ for every $m$; in particular $0 \le S_{\sigma(n)} \le 1$ for every $n$. [step 1.1, step 2.1, L1]

4.1 Hence $0 \le \sigma_n = (n+1)^{-1}S_{\sigma(n)} \le (n+1)^{-1}$ and so $|\sigma_n| \le (n+1)^{-1}$ for every $n$. [step 1.2, step 3.1, L7]

5.1 Given a real $\varepsilon > 0$, choose $m \ge 1$ with $1/m < \varepsilon$; for every $n \ge m$ one has $n+1 > m$ and therefore $|\sigma_n - 0| \le (n+1)^{-1} < 1/m < \varepsilon$. So $(\sigma_n)$ converges to $0$, that is, $(s_k)$ is $(C,1)$-summable to $0$. [step 4.1, L4, L6, L7]

6.1 So $(s_k)$ has convergent Cesaro means and does not converge, and the claim is false. [step 1.3, step 5.1] ∎

## Remarks

- **What averaging destroys.** The Cesaro mean of the first $n+1$ terms of an
  alternating sequence is either $0$ or $1/(n+1)$, because the terms cancel in
  pairs and at most one is left over. The oscillation is real and is not damped
  by any tail condition; it is simply invisible to the average. So the transform
  loses information, and no regular summability method can be expected to
  recover a limit that does not exist ([[cor-cesaro-matrix-is-regular]]).

- **The worked computation** of the means, with the values displayed, is
  [[ex-cesaro-means-of-alternating]].

- **A correct converse needs an extra hypothesis.** The classical one is
  Tauberian: if the Cesaro means converge and in addition $k(x_k - x_{k-1})$ is
  bounded, then $(x_k)$ converges. No such theorem is proved in this library,
  and none may be cited from it; the statement is mentioned only to say what the
  repaired claim would look like.

- **The failure is not caused by unboundedness.** The witness is bounded, with
  $|s_k| = 1$ at every index. It is the same sequence that refutes the claim
  that bounded sequences converge ([[fs-bounded-implies-convergent]]), and for
  the same underlying reason: boundedness forbids escaping, not oscillating.
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

### `thm-cesaro-mean-theorem`

````markdown
---
id: thm-cesaro-mean-theorem
kind: theorem
title: "If $x_k \\to L$ then $\\sigma_n \\to L$: convergence implies $(C,1)$-summability to the same value"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cesaro-mean, def-sequence, def-finite-sum, lem-finite-sum-laws, lem-triangle-inequality-finite, def-real-limit, lem-rat-embeds-dense, cor-archimedean-reciprocal, lem-of-inverse-positive, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value, lem-of-naturals-positive, lem-limit-unique, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
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
    - title: "Summation methods (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Summation_methods"
    - title: "Cesàro summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ces%C3%A0ro_summation"
    - title: "Silverman-Toeplitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Silverman%E2%80%93Toeplitz_theorem"
    - title: "G. H. Hardy, Divergent Series, Ch. 5"
      url: "https://archive.org/details/divergentseries033523mbp"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals that converges ([[def-sequence]],
[[def-real-limit]]), and let $(\sigma_n)$ be its sequence of Cesaro means
([[def-cesaro-mean]]). Then $(\sigma_n)$ converges as well, and

$$\lim_n \sigma_n \;=\; \lim_k x_k .$$

Both limits are asserted to exist: the right-hand one by hypothesis, the
left-hand one as part of the conclusion. Equivalently: a convergent sequence is
$(C,1)$-summable, to its own limit. The notation is licensed by uniqueness of
limits of real sequences ([[lem-limit-unique]]).

The converse is false ([[fs-cesaro-converse]]).

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals converging to $L := \lim_k x_k$, and its Cesaro means $\sigma_n = (n+1)^{-1}\sum_{k=0}^{n} x_k$.

[L1] The Cesaro means and $(C,1)$-summability ([[def-cesaro-mean]]); $(n+1)\cdot 1_{\mathbb{R}} > 0$ for every $n \in \mathbb{N}$ ([[lem-of-naturals-positive]]).

[L2] Finite sums ([[def-finite-sum]]) and their laws: additivity, scaling with $\sum_{k<d}\lambda = d\lambda$, splitting $\sum_{k<n} = \sum_{k<m} + \sum_{k=m}^{n-1}$ for $m \le n$, and monotonicity of $\sum$ in its terms ([[lem-finite-sum-laws]]).

[L3] Triangle inequality for finite sums: $\big|\sum_{k<n} a_k\big| \le \sum_{k<n}|a_k|$ ([[lem-triangle-inequality-finite]]).

[L4] Convergence: for every rational $\varepsilon > 0$ there is $K$ with $|x_k - L| < \varepsilon$ for all $k \ge K$, and equivalently for every real $\varepsilon > 0$, since below every positive real lies a positive rational ([[def-real-limit]], [[def-sequence]], [[lem-rat-embeds-dense]]).

[L5] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $m \ge 1$ with $1/m < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L6] Order arithmetic: $a > 0$ gives $a^{-1} > 0$ and $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); for $c > 0$, $a \le b$ gives $ac \le bc$ ([[lem-of-sign-rules]]); adding a constant preserves the order and inequalities add ([[lem-of-add-order]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]); $|u| \ge 0$ ([[lem-of-abs-value]]); and $d \cdot 1_{\mathbb{R}} \le e \cdot 1_{\mathbb{R}}$ whenever $d \le e$ in $\mathbb{N}$ ([[lem-of-naturals-positive]]). In each clause above, [[lem-of-sign-rules]] and [[lem-of-add-order]] state the STRICT forms and only those; the nonstrict forms used below are those together with the equality cases, which trichotomy settles, the order being total ([[def-ordered-field]]).

[L7] The order on $\mathbb{N}$ is total, so two indices have a larger one ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be an arbitrary real; choose $K \in \mathbb{N}$ with $|x_k - L| < \varepsilon/2$ for every $k \ge K$. [L4, L6, choose]

1.2 Put $C := \sum_{k<K} |x_k - L|$, a real with $C \ge 0$ because every summand is $\ge 0$. [L2, L6]

2.1 For every $n \ge K$: since $\sum_{k=0}^{n} L = (n+1)L$, one has $\sigma_n - L = (n+1)^{-1}\sum_{k=0}^{n}(x_k - L)$, hence $|\sigma_n - L| \le (n+1)^{-1}\sum_{k=0}^{n}|x_k - L| = (n+1)^{-1}\big(C + \sum_{k=K}^{n}|x_k - L|\big) \le (n+1)^{-1}\big(C + (n+1-K)(\varepsilon/2)\big) \le C(n+1)^{-1} + \varepsilon/2$, the last two steps using $|x_k - L| < \varepsilon/2$ for $K \le k \le n$ and $n+1-K \le n+1$. [step 1.1, step 1.2, L1, L2, L3, L6]

2.2 Since $\varepsilon\,(2(C+1))^{-1} > 0$, choose a natural $m \ge 1$ with $1/m < \varepsilon\,(2(C+1))^{-1}$; then for every $n \ge m$ one has $n + 1 > m$, so $C(n+1)^{-1} \le C/m \le (C+1)/m < \varepsilon/2$. [step 1.2, L5, L6, choose]

3.1 Let $N$ be the larger of $K$ and $m$; for every $n \ge N$ both estimates apply and $|\sigma_n - L| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 2.1, step 2.2, L6, L7]

4.1 As $\varepsilon > 0$ was arbitrary, $(\sigma_n)$ converges to $L$, so $\lim_n \sigma_n$ exists and equals $L = \lim_k x_k$. [step 3.1, L1, L4] ∎

## Remarks

- **The shape of the argument is the shape of every regularity proof.** The
  terms split into a fixed head, whose contribution is a constant divided by
  $n+1$ and therefore eventually negligible, and a tail, all of whose terms are
  already within $\varepsilon/2$ of $L$ and whose weights sum to at most $1$.
  [[thm-silverman-toeplitz]] is exactly this argument carried out for an
  arbitrary weighting, and [[cor-cesaro-matrix-is-regular]] recovers the theorem
  above from it.

- **The bound $C+1$ rather than $C$** in the second estimate is there only so
  that the divisor is positive when $C = 0$, which happens whenever the first
  $K$ terms already equal $L$.

- **Nothing here needs boundedness of $(x_k)$** as a separate hypothesis: it
  follows from convergence, and in any case only the fixed head
  $x_0, \dots, x_{K-1}$ is estimated crudely, and it is finite.
````

### `thm-silverman-toeplitz`

````markdown
---
id: thm-silverman-toeplitz
kind: theorem
title: "A summability matrix with only finitely many nonzero entries per row is regular iff each column tends to $0$, the row sums tend to $1$, and the row absolute sums are uniformly bounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-summability-matrix, def-sequence, thm-of-archimedean, def-finite-sum, lem-finite-sum-laws, lem-triangle-inequality-finite, lem-of-abs-value, def-real-limit, lem-rat-embeds-dense, lem-convergent-implies-bounded, thm-algebra-of-limits, cor-archimedean-reciprocal, def-complete-ordered-field, def-upper-bound, def-bounded-set, lem-finite-set-has-max, def-max-min, thm-recursion, thm-well-ordering-principle, thm-induction-principle, thm-nat-linear-order, lem-index-map-grows, lem-of-inverse-positive, lem-of-sign-rules, lem-of-add-order, lem-of-naturals-positive, lem-limit-unique, def-ordered-field]
forward_refs: [cex-irregular-summability-matrix]
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
    - title: "Toeplitz matrix (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Toeplitz_matrix"
    - title: "Silverman-Toeplitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Silverman%E2%80%93Toeplitz_theorem"
    - title: "Divergent series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Divergent_series"
    - title: "G. H. Hardy, Divergent Series, Ch. 3"
      url: "https://archive.org/details/divergentseries033523mbp"
pipeline_run: null
---

## Statement

Let $c$ be a summability matrix ([[def-summability-matrix]]), so that every row
has only finitely many nonzero entries. Then $c$ is regular if and only if all
three of the following hold:

1. **(Columns are null.)** For every $k \in \mathbb{N}$ the $k$-th column
   converges with $\lim_n c_{n,k} = 0$.
2. **(Row sums tend to $1$.)** The sequence of row sums converges with
   $\lim_n \sum_k c_{n,k} = 1$.
3. **(Row absolute sums are uniformly bounded.)** There is $M \in \mathbb{R}$
   with $\sum_k |c_{n,k}| \le M$ for every $n \in \mathbb{N}$.

In 1 and 2 the existence of the limit is part of the assertion. The notation is
licensed by uniqueness of limits of real sequences ([[lem-limit-unique]]).

Condition 3 is the one that cannot be seen on any single sequence: 1 and 2 are
read off two particular convergent inputs, while the necessity of 3 needs a
sequence built against the matrix, by a gliding hump.

## Facts & Assumptions

**Given:** A summability matrix $c : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ with finite row support. For a sequence $(x_k)$ of reals we write $(y_n)$ for its transform, $y_n = \sum_k c_{n,k}x_k$, and $r_n := \sum_k |c_{n,k}|$ for the row absolute sums.

[L1] Summability matrices: finite row support, the transform and its independence of the admissible row bound used, the row sum, the row absolute sum, and regularity ([[def-summability-matrix]], [[def-sequence]]).

[L2] Finite sums ([[def-finite-sum]]) and their laws: additivity, scaling with $\sum_{k<d}\lambda = d\lambda$, splitting, and monotonicity in the terms ([[lem-finite-sum-laws]]).

[L3] Triangle inequality for finite sums ([[lem-triangle-inequality-finite]]); $|uv| = |u|\,|v|$, $|u| \ge 0$, $\big||u|\big| = |u|$ and $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]).

[L4] Convergence: for every real $\varepsilon > 0$ there is $N$ beyond which the terms are within $\varepsilon$ of the limit, the rational and real formulations agreeing ([[def-real-limit]], [[def-sequence]], [[lem-rat-embeds-dense]]); limits are unique ([[lem-limit-unique]]); a sequence that is eventually $0$ converges to $0$.

[L5] Every convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]).

[L6] Algebra of limits for sums and scalar multiples ([[thm-algebra-of-limits]]).

[L7] Archimedean property of $\mathbb{R}$: for every real $z$ there is a natural $n \ge 1$ with $z < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]); equivalently, for every real $\varepsilon > 0$ there is a natural $J \ge 1$ with $1/J < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L8] Least upper bounds: a nonempty subset of $\mathbb{R}$ bounded above has a supremum, which dominates every element of the set ([[def-complete-ordered-field]], [[def-upper-bound]], [[def-bounded-set]]).

[L9] Every nonempty finite set of reals has a maximum, which lies in the set and dominates it ([[lem-finite-set-has-max]], [[def-max-min]]).

[L10] Recursion theorem ([[thm-recursion]]); well-ordering principle ([[thm-well-ordering-principle]]); induction principle ([[thm-induction-principle]]); totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]); and consecutive comparisons suffice for strict increase, with $k_j \ge j$ for a strictly increasing index map ([[lem-index-map-grows]]).

[L11] Order arithmetic: $a > 0$ gives $a^{-1} > 0$ and $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); for $c > 0$, $a \le b$ if and only if $ac \le bc$ ([[lem-of-sign-rules]]); adding a constant preserves the order and inequalities add ([[lem-of-add-order]]); canonical naturals are positive and increasing ([[lem-of-naturals-positive]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]). In each clause above, [[lem-of-sign-rules]] and [[lem-of-add-order]] state the STRICT forms and only those; the nonstrict forms used below are those together with the equality cases, which trichotomy settles, the order being total ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 **Sufficiency.** Assume conditions 1, 2 and 3, let $(x_k)$ converge to $L$, and let $\varepsilon > 0$ be an arbitrary real; fix $M \ge 0$ as in condition 3, and fix $D \ge 0$ with $|x_k - L| \le D$ for every $k$, which exists because a convergent sequence is bounded. [L1, L3, L4, L5, L11, choose]

1.2 Choose $K \in \mathbb{N}$ with $|x_k - L| < \varepsilon\,(3(M+1))^{-1}$ for every $k \ge K$. [L4, L11, choose]

1.3 For every $n$, choosing an admissible bound $R \ge K$ for row $n$, one has $y_n - L = \sum_{k=0}^{R} c_{n,k}(x_k - L) + \big(\textstyle\sum_k c_{n,k} - 1\big)L$, since $\sum_{k=0}^{R} c_{n,k}L = L\sum_k c_{n,k}$. [L1, L2]

1.4 **Necessity.** The remaining steps, apart from 2.1, 2.2, 2.3 and 3.1 which finish the sufficiency argument above, assume instead that $c$ is regular. [L1]

1.5 Suppose, towards a contradiction, that the row absolute sums $(r_n)$ are not bounded above, that is, for every $T \in \mathbb{R}$ there is $n$ with $r_n > T$. [L1, L11, assume-contra]

1.6 For each $n$ the set of admissible bounds for row $n$ is a nonempty subset of $\mathbb{N}$, so it has a least element $\rho(n)$; thus $c_{n,k} = 0$ for every $k > \rho(n)$, and every $R \ge \rho(n)$ is admissible for row $n$. [L1, L10]

2.1 For every $n$: $\big|\sum_{k=0}^{R} c_{n,k}(x_k-L)\big| \le \sum_{k<K}|c_{n,k}|\,|x_k-L| + \sum_{k=K}^{R}|c_{n,k}|\,|x_k-L| \le D\sum_{k<K}|c_{n,k}| + \varepsilon\,(3(M+1))^{-1} r_n \le D\sum_{k<K}|c_{n,k}| + \varepsilon/3$, the last step because $r_n \le M < M+1$. [step 1.1, step 1.2, step 1.3, L2, L3, L11]

2.2 By condition 1 each of the finitely many columns $k < K$ satisfies $c_{n,k} \to 0$, hence $|c_{n,k}| \to 0$ since $\big||c_{n,k}| - 0\big| = |c_{n,k} - 0|$; a sum of finitely many null sequences is null, by induction on the number of summands, so $\sum_{k<K}|c_{n,k}| \to 0$ in $n$ and there is $N_1$ with $\sum_{k<K}|c_{n,k}| < \varepsilon\,(3(D+1))^{-1}$ for every $n \ge N_1$. [step 1.1, step 1.2, L3, L4, L6, L10, L11, choose]

2.3 By condition 2 there is $N_2$ with $\big|\sum_k c_{n,k} - 1\big| < \varepsilon\,(3(|L|+1))^{-1}$ for every $n \ge N_2$, so that $\big|(\sum_k c_{n,k} - 1)L\big| < \varepsilon/3$ for such $n$. [step 1.1, L3, L4, L11, choose]

2.4 **Condition 1 holds.** Fix $k$ and let $e$ be the sequence with $e_k = 1$ and $e_j = 0$ for $j \ne k$; it is eventually $0$, so it converges to $0$, and its transform at row $n$ is $c_{n,k}$ because every other term of the row sum vanishes. Regularity gives $\lim_n c_{n,k} = 0$. [step 1.4, L1, L2, L4]

2.5 **Condition 2 holds.** The constant sequence with value $1$ converges to $1$ and its transform at row $n$ is the row sum $\sum_k c_{n,k}$, so regularity gives $\lim_n \sum_k c_{n,k} = 1$. [step 1.4, L1, L4]

3.1 For every $n$ beyond both $N_1$ and $N_2$: $|y_n - L| \le D\sum_{k<K}|c_{n,k}| + \varepsilon/3 + \varepsilon/3 < \varepsilon/3 + \varepsilon/3 + \varepsilon/3 = \varepsilon$; as $\varepsilon$ was arbitrary, $y_n \to L$, and as $(x_k)$ was an arbitrary convergent sequence, $c$ is regular. [step 1.3, step 2.1, step 2.2, step 2.3, L1, L4, L10, L11]

3.2 Each column converges, hence is bounded, so $M_k := \sup\{\,|c_{n,k}| : n \in \mathbb{N}\,\}$ exists in $\mathbb{R}$ for every $k$; putting $B_m := \sum_{k=0}^{m} M_k$ one has $\sum_{k=0}^{m}|c_{n,k}| \le B_m$ for every $n$ and every $m$, and $B_m \ge 0$. [step 2.4, L2, L3, L5, L8, L11]

4.1 Define by recursion $k_0 := 0$, $n_0 := 0$ and, for $j \ge 1$, first $T_j := $ the larger of $\max\{r_n : n \le n_{j-1}\}$ and $B_{k_{j-1}} + j\,(j + B_{k_{j-1}})$, then $n_j := \min\{n : r_n > T_j\}$, which exists by step 1.5 and well-ordering, and then $k_j := $ the larger of $k_{j-1}+1$ and $\rho(n_j)$; then $n_j > n_{j-1}$, because $r_{n_j}$ exceeds every $r_n$ with $n \le n_{j-1}$, and $k_{j-1} < k_j$ with $c_{n_j,k} = 0$ for every $k > k_j$, and $r_{n_j} > B_{k_{j-1}} + j\,(j + B_{k_{j-1}})$. [step 1.5, step 1.6, step 3.2, L9, L10, L11, construct]

5.1 Since $(k_j)$ is strictly increasing with $k_0 = 0$, every $k \ge 1$ lies in exactly one block $k_{j-1} < k \le k_j$ with $j \ge 1$; define $x_0 := 0$ and, for $k$ in the $j$-th block, $x_k := \operatorname{sgn}(c_{n_j,k})\,j^{-1}$, where $\operatorname{sgn}(t) := 1$ for $t \ge 0$ and $\operatorname{sgn}(t) := -1$ for $t < 0$. Then $|x_k| \le 1$ for every $k$, and $x_k \to 0$: given $\varepsilon > 0$, take $J \ge 1$ with $1/J < \varepsilon$, and every $k > k_J$ lies in a block with index $j > J$, so $|x_k| = 1/j < 1/J < \varepsilon$. [step 4.1, L3, L7, L10, L11, construct]

6.1 For every $j \ge 1$: the terms of $y_{n_j}$ with $k > k_j$ vanish, so $y_{n_j} = \sum_{k \le k_{j-1}} c_{n_j,k}x_k + \sum_{k_{j-1} < k \le k_j} c_{n_j,k}x_k$; the second sum equals $j^{-1}\sum_{k_{j-1}<k\le k_j}|c_{n_j,k}| = j^{-1}\big(r_{n_j} - \sum_{k \le k_{j-1}}|c_{n_j,k}|\big) \ge j^{-1}(r_{n_j} - B_{k_{j-1}})$, while the first has absolute value at most $\sum_{k\le k_{j-1}}|c_{n_j,k}| \le B_{k_{j-1}}$; hence $y_{n_j} \ge j^{-1}(r_{n_j} - B_{k_{j-1}}) - B_{k_{j-1}} > j^{-1}\,j\,(j + B_{k_{j-1}}) - B_{k_{j-1}} = j$. [step 3.2, step 4.1, step 5.1, L2, L3, L11]

7.1 But $(x_k)$ converges to $0$, so regularity makes $(y_n)$ converge, hence bounded, so some $S \in \mathbb{R}$ has $|y_n| \le S$ for every $n$; taking $j$ with $j \cdot 1_{\mathbb{R}} > S$, available by the Archimedean property, step 6.1 gives $y_{n_j} > j > S$, a contradiction. [step 1.4, step 5.1, step 6.1, L1, L5, L7, L11]

8.1 The assumption of step 1.5 is therefore untenable and condition 3 holds; with steps 2.4 and 2.5, regularity implies all three conditions. [step 2.4, step 2.5, step 7.1, discharge-contradiction]

9.1 Sufficiency is step 3.1 and necessity is step 8.1, so $c$ is regular exactly when conditions 1, 2 and 3 all hold. [step 3.1, step 8.1] ∎

## Remarks

- **No one of the three conditions follows from the other two**, and each is tested by a different input. Condition 1 is what a single nonzero coordinate detects, condition 2 what the constant sequence detects, and condition 3 is invisible to any fixed sequence: for each individual bounded input a matrix with unbounded row absolute sums may behave perfectly well, and the failure only appears against a sequence whose signs are chosen row by row. The substantial case is 3, and it is [[cex-irregular-summability-matrix]], which exhibits a matrix satisfying 1 and 2 and failing 3, together with a null sequence whose transform diverges. The other two are settled in a line each and are recorded here rather than given items of their own: the matrix with $c_{n,0} = 1$ and every other entry $0$ has row sums and row absolute sums constantly $1$, so it satisfies 2 and 3, while its $0$-th column is constantly $1$ and fails 1; and the zero matrix has null columns and row absolute sums $0$, so it satisfies 1 and 3, while its row sums are constantly $0$ and fail 2.

- **The gliding hump.** The witness of the necessity argument is built in blocks: on the $j$-th block its terms have modulus $1/j$, so the sequence tends to $0$, and their signs are chosen to align with the entries of one row $n_j$, so that on that row the transform picks up almost the whole row absolute sum, divided by $j$. Choosing $r_{n_j}$ larger than $j$ times its own head bound makes the transform exceed $j$ there. The bound $B_{k_{j-1}}$ on the head is available *before* $n_j$ is chosen, because it depends only on the earlier block boundary, and that is what keeps the construction from circling.

- **No choice is used.** Every stage of the recursion takes a least element or a maximum of a finite set; the row bound $\rho(n)$ is the least admissible one; and $M_k$ is a supremum, that is, a definite element of $\mathbb{R}$ rather than a selected bound.
````

