## Target item — `thm-subsequential-limit-set-closed`

Normalized current SHA-256: `c79175b0dd7047dde7568454bdedc51efd5e0cd0882fda72cc101f55afa9e516`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-subsequential-limit-set-closed
kind: theorem
title: "If each $y_j$ is a subsequential limit of $(x_k)$ and $y_j \\to y \\in \\mathbb{R}$, then $y$ is a subsequential limit of $(x_k)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-subsequential-limit, def-real-limit, def-sequence, thm-recursion, thm-well-ordering-principle, lem-index-map-grows, lem-of-triangle-inequality, lem-of-abs-value, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-rat-embeds-dense, def-nat-order, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: true
short: "$\\operatorname{SL}(x)$ is closed"
proof_strategy: constructive
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
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.7)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "D. Auroux, Math 112 notes, 5 March 2019"
      url: "https://people.math.harvard.edu/~auroux/112s19/Notes_Math_112_march5.pdf"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $(y_j)$ be a
sequence of reals with

- $y_j \in \operatorname{SL}(x)$ for every $j \in \mathbb{N}$ ([[def-subsequential-limit]]), and
- $y_j \to y$ for some $y \in \mathbb{R}$ ([[def-real-limit]]).

Then $y \in \operatorname{SL}(x)$.

In words: the subsequential limit set of a real sequence contains the limit of
every convergent sequence of its own elements. When the topology of $\mathbb{R}$
arrives, that property is what it calls *sequential closedness*; that sequential
closedness is in turn equivalent to closedness for subsets of $\mathbb{R}$ is a
theorem there and not a matter of naming, and the half of that equivalence
running from sequential closedness to closedness spends the axiom of countable
choice. Here the property is stated and proved purely in terms of sequences, with
no choice principle and no topological notion used or needed.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals; a sequence $(y_j)$ of reals with $y_j \in \operatorname{SL}(x)$ for every $j$; and a real $y$ with $y_j \to y$.

[L1] Subsequential limits and convergence: $y_j \in \operatorname{SL}(x)$ means that some strictly increasing $m : \mathbb{N} \to \mathbb{N}$ has $x_{m_i} \to y_j$; convergence of a sequence of reals is the rational-$\varepsilon$ condition of [[def-real-limit]], and to *establish* convergence it suffices to produce a threshold for every real $\varepsilon > 0$, by the remark of [[def-sequence]] ([[def-subsequential-limit]], [[def-sequence]], [[def-real-limit]]).

[L2] Index maps: a strictly increasing $m$ satisfies $m_i \ge i$, and an index map with $n_j < n_{j+1}$ for every $j$ is strictly increasing ([[lem-index-map-grows]]).

[L3] Well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] Recursion theorem: for a set $A$, an element $a \in A$ and $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g_0 = a$ and $g_{j+1} = f(g_j)$ ([[thm-recursion]]).

[L5] Absolute value and the triangle inequality: $|a + b| \le |a| + |b|$, and $|a| < c$ if and only if $-c < a < c$ for $c > 0$ ([[lem-of-triangle-inequality]], [[lem-of-abs-value]]).

[L6] Canonical naturals and reciprocals: for a natural $q \ge 1$ the element $q \cdot 1_{\mathbb{R}}$ is positive and invertible, $\big(2(n+1)\big) \cdot 1_{\mathbb{R}} = 2 \big((n+1) \cdot 1_{\mathbb{R}}\big)$, and $0 < a \le b$ gives $0 < 1/b \le 1/a$; moreover for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L7] The order on $\mathbb{N}$ is total, so any two indices have a common upper bound ([[def-nat-order]], [[thm-nat-linear-order]]).

[L8] Below every positive real lies a positive rational, which is how a convergence hypothesis stated for rational $\varepsilon$ is instantiated at a real threshold ([[lem-rat-embeds-dense]]).

## Proof

**Proof technique:** constructive.

1.1 For $n \in \mathbb{N}$ put $q_n := 2(n+1)$, a natural number $\ge 1$. Then $q_n \cdot 1_{\mathbb{R}} = 2\big((n+1) \cdot 1_{\mathbb{R}}\big) > 0$ is invertible, $1/q_n > 0$, and $1/q_n + 1/q_n = 2/q_n = 1/(n+1)$. [given, L6, algebra]

1.2 By hypothesis $(y_j)$ converges to $y$ and every $y_j$ lies in $\operatorname{SL}(x)$, so for each $j$ there is a strictly increasing $m$ with $x_{m_i} \to y_j$. [given, L1]

2.1 For every $n \in \mathbb{N}$ there is $k > n$ with $|x_k - y| < 1/(n+1)$. Indeed, take a rational $\varepsilon_1$ with $0 < \varepsilon_1 < 1/q_n$ and instantiate the convergence $y_j \to y$ at $\varepsilon_1$ to obtain an index $J$ with $|y_J - y| < \varepsilon_1 < 1/q_n$. Since $y_J \in \operatorname{SL}(x)$, fix a strictly increasing $m$ with $x_{m_i} \to y_J$, take a rational $\varepsilon_2$ with $0 < \varepsilon_2 < 1/q_n$ and an index $I$ with $|x_{m_i} - y_J| < \varepsilon_2$ for all $i \ge I$, and let $i$ be an index at least as large as both $I$ and $n+1$. Then $k := m_i$ satisfies $k = m_i \ge i \ge n + 1 > n$ and, by the triangle inequality applied to $x_k - y = (x_k - y_J) + (y_J - y)$, $|x_k - y| \le |x_k - y_J| + |y_J - y| < 1/q_n + 1/q_n = 1/(n+1)$. [step 1.1, step 1.2, L1, L2, L5, L7, L8]

3.1 Define $f : \mathbb{N} \to \mathbb{N}$ by letting $f(n)$ be the least element of the set $G_n := \{\, k \in \mathbb{N} : k > n \text{ and } |x_k - y| < 1/(n+1) \,\}$, which is nonempty by step 2.1. Then $f(n) > n$ and $|x_{f(n)} - y| < 1/(n+1)$ for every $n$. [step 2.1, L3, construct]

4.1 The recursion theorem applied to $\mathbb{N}$, the element $f(0)$ and the function $f$ gives $n : \mathbb{N} \to \mathbb{N}$ with $n_0 = f(0)$ and $n_{j+1} = f(n_j)$. Then $n_j < n_{j+1}$ for every $j$, so $n$ is strictly increasing and $n_j \ge j$; moreover $|x_{n_{j+1}} - y| < 1/(n_j + 1) \le 1/(j+1)$ for every $j$, using that $n_j + 1 \ge j + 1$. [step 3.1, L2, L4, L6]

5.1 The subsequence $(x_{n_j})$ converges to $y$: given a real $\varepsilon > 0$, take a natural $m \ge 1$ with $1/m < \varepsilon$; every $j \ge m$ satisfies $j \ge 1$, so step 4.1 applied at $j - 1$ gives $|x_{n_j} - y| < 1/j \le 1/m < \varepsilon$. Producing such a threshold for every real $\varepsilon > 0$ establishes convergence, and $n$ is strictly increasing, so $y \in \operatorname{SL}(x)$. [step 4.1, L1, L2, L6, discharge-construct] ∎

## Remarks

- **The diagonal is where the two approximations are balanced.** Step 2.1 spends
  half of the allowance $1/(n+1)$ on getting from $y$ to some $y_J$ and the other
  half on getting from $y_J$ to a term of $(x_k)$ arbitrarily far out. Splitting
  the allowance is what the natural number $q_n = 2(n+1)$ is for; nothing is
  halved in $\mathbb{R}$, so no divisibility fact about the field is needed.

- **Choice is not used**, for the same reason as in
  [[thm-limsup-is-greatest-subsequential-limit]]: the index map is built by taking
  least elements of explicitly described nonempty subsets of $\mathbb{N}$
  ([[thm-well-ordering-principle]]) and applying [[thm-recursion]]. The
  subsequences witnessing $y_J \in \operatorname{SL}(x)$ are used one at a time
  inside a single existence argument, never selected simultaneously for all $J$.

- **The hypothesis that $y$ be real is essential to the statement, not to the
  proof technique.** $\operatorname{SL}(x)$ is a set of real numbers by
  [[def-subsequential-limit]], so a limit outside $\mathbb{R}$ could not be
  asserted to lie in it. The extended set $\overline{\operatorname{SL}}(x)$ always
  contains its greatest and least elements
  ([[thm-limsup-is-greatest-subsequential-limit]],
  [[cor-liminf-is-least-subsequential-limit]]), which is the corresponding
  statement at the two ends.

- **Consequence: a nonempty $\operatorname{SL}(x)$ that is bounded above contains
  its supremum.** Write $\sigma := \sup \operatorname{SL}(x)$, a real number under
  those two hypotheses. For each $j$ the element $\sigma - 1/(j+1)$ fails to bound
  $\operatorname{SL}(x)$ above ([[lem-sup-epsilon]]), so some
  $y_j \in \operatorname{SL}(x)$ satisfies $\sigma - 1/(j+1) < y_j \le \sigma$, and
  such a sequence converges to $\sigma$ by the reciprocal Archimedean property and
  the squeeze ([[cor-archimedean-reciprocal]], [[thm-squeeze]]). The theorem then
  puts $\sigma$ in $\operatorname{SL}(x)$. This is a second route to the *finite*
  case of [[thm-limsup-is-greatest-subsequential-limit]], available only when the
  set is already known to be nonempty and bounded above; the route taken there is
  direct and covers the infinite cases too, which this one cannot.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$. It is **Cauchy** when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x_l| < \\hat\\varepsilon$ for all $k, l \\ge K$.",
      "uses": [
        "1.2",
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],\n[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and\n$\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],\n[[def-nat-order]]).\n\nA **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write\n$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or\n$(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is\nthe subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$.\n\nLet $(x_k)$ be a sequence of reals and let $P$ be a property of indices.\n\n- $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for\n  every $k \\in \\mathbb{N}$; it is **unbounded** otherwise.\n- $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds\n  for every $k \\ge K$.\n- $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some\n  $k \\ge K$ for which $P(k)$ holds.\n- For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence\n  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is\n  again a sequence of reals.\n- A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if\n  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$\n  along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$;\n  it is again a sequence of reals.\n\n**Convergence and Cauchyness are not defined here.** They are already fixed, for\nsequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to\n$x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is\n$K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$\nis *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$\nwith $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the\ntoolkit for those two notions and does not restate them. A sequence\n**converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "1.2",
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-subsequential-limit",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $L \\in \\mathbb{R}$.\nThen $L$ is a **subsequential limit** of $(x_k)$ when some subsequence of $(x_k)$\nconverges to $L$: that is, when there is a strictly increasing\n$n : \\mathbb{N} \\to \\mathbb{N}$ such that\n\n$$x_{n_j} \\longrightarrow L \\qquad (j \\to \\infty)$$\n\nin the sense of [[def-real-limit]]. The **subsequential limit set** of $(x_k)$ is\n\n$$\\operatorname{SL}(x) \\;:=\\; \\{\\, L \\in \\mathbb{R} : L \\text{ is a subsequential limit of } (x_k) \\,\\} \\subseteq \\mathbb{R}.$$\n\nBoth pieces of the definition are already fixed elsewhere and are only combined\nhere: *strictly increasing* and *subsequence* are [[def-sequence]], and\n*converges* is [[def-real-limit]]. Nothing about $(x_k)$ itself is assumed; in\nparticular $(x_k)$ is not assumed to converge, and $\\operatorname{SL}(x)$ may be\nempty, a single point, or larger.\n\n**A subsequence looks arbitrarily far out.** A strictly increasing index map\nsatisfies $n_j \\ge j$ for every $j$ ([[lem-index-map-grows]]), so the indices\n$n_j$ are cofinal in $\\mathbb{N}$ and a subsequential limit is determined by the\nbehaviour of $(x_k)$ at arbitrarily large indices. Consequently no finite\ninitial segment of $(x_k)$ affects $\\operatorname{SL}(x)$: a sequence and each of\nits tails have the same subsequential limits.\n\n**Terminology.** Some texts say *cluster point*, *limit point* or *accumulation\nvalue* of the sequence for the same notion. This library says *subsequential\nlimit* throughout, reserving *limit point* for the topological notion of a limit\npoint of a set, which is a different thing: the set $\\{x_k\\}$ of values of the\nconstant sequence $x_k = 0$ has no limit point, while $0$ is a subsequential\nlimit of that sequence.",
      "uses": [
        "1.2",
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-index-map-grows",
      "source_section": "Statement",
      "quote": "Let $n : \\mathbb{N} \\to \\mathbb{N}$ be a function, written $k \\mapsto n_k$, and\nrecall that $n$ is **strictly increasing** when $n_j < n_k$ whenever $j < k$\n([[def-sequence]], [[def-nat-order]]).\n\n1. **Consecutive comparisons suffice.** If $n_i < n_{\\sigma(i)}$ for every\n   $i \\in \\mathbb{N}$, then $n$ is strictly increasing.\n2. **Growth.** If $n$ is strictly increasing then $n_k \\ge k$ for every\n   $k \\in \\mathbb{N}$.\n\nClaim 1 is what one checks in practice when exhibiting a subsequence; claim 2 is\nwhat every later subsequence argument uses.",
      "uses": [
        "2.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-well-ordering-principle",
      "source_section": "Statement",
      "quote": "Every nonempty subset $S \\subseteq \\mathbb{N}$ has a least element: there is $\\ell \\in S$ with $\\ell \\le s$ for all $s \\in S$.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-recursion",
      "source_section": "Statement",
      "quote": "Let $(N,0,\\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \\in A$, and any function $f : A \\to A$, there is a unique function $g : N \\to A$ such that $g(0) = a$ and $g(\\sigma(n)) = f(g(n))$ for all $n \\in N$.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-triangle-inequality",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$. Then\n\n$$|x + y| \\le |x| + |y|.$$",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "1.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "1.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that\n\n$$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$\n\nwhere $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and\n$1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard\nwe abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$.\n\nThis is the **reciprocal form** of the Archimedean property.\n[[thm-of-archimedean]] on its own delivers only the assertion that the canonical\nnaturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that\nthe reciprocals of the naturals get below every positive bound, is the statement\nabove, and it is recorded separately so that no proof has to reconstruct the\ninversion step in passing.",
      "uses": [
        "1.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "1.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-nat-order",
      "source_section": "Definition",
      "quote": "For $m, n \\in \\mathbb{N}$, define the **order** by\n\n$$m \\le n \\iff \\exists k \\in \\mathbb{N}\\ (m + k = n),$$\n\nand the **strict order** by $m < n \\iff (m \\le n \\text{ and } m \\neq n)$, using\naddition ([[def-nat-addition]]).",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-nat-linear-order",
      "source_section": "Statement",
      "quote": "The relation $\\le$ on $\\mathbb{N}$, where $m \\le n \\iff \\exists k\\ (m + k = n)$ ([[def-nat-order]]), is a linear (total) order: reflexive, antisymmetric, transitive, and total.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "For $n \\in \\mathbb{N}$ put $q_n := 2(n+1)$, a natural number $\\ge 1$. Then $q_n \\cdot 1_{\\mathbb{R}} = 2\\big((n+1) \\cdot 1_{\\mathbb{R}}\\big) > 0$ is invertible, $1/q_n > 0$, and $1/q_n + 1/q_n = 2/q_n = 1/(n+1)$.",
      "step": "1.1",
      "inputs": [
        "given",
        "L6",
        "algebra"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "By hypothesis $(y_j)$ converges to $y$ and every $y_j$ lies in $\\operatorname{SL}(x)$, so for each $j$ there is a strictly increasing $m$ with $x_{m_i} \\to y_j$.",
      "step": "1.2",
      "inputs": [
        "given",
        "L1"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "For every $n \\in \\mathbb{N}$ there is $k > n$ with $|x_k - y| < 1/(n+1)$. Indeed, take a rational $\\varepsilon_1$ with $0 < \\varepsilon_1 < 1/q_n$ and instantiate the convergence $y_j \\to y$ at $\\varepsilon_1$ to obtain an index $J$ with $|y_J - y| < \\varepsilon_1 < 1/q_n$. Since $y_J \\in \\operatorname{SL}(x)$, fix a strictly increasing $m$ with $x_{m_i} \\to y_J$, take a rational $\\varepsilon_2$ with $0 < \\varepsilon_2 < 1/q_n$ and an index $I$ with $|x_{m_i} - y_J| < \\varepsilon_2$ for all $i \\ge I$, and let $i$ be an index at least as large as both $I$ and $n+1$. Then $k := m_i$ satisfies $k = m_i \\ge i \\ge n + 1 > n$ and, by the triangle inequality applied to $x_k - y = (x_k - y_J) + (y_J - y)$, $|x_k - y| \\le |x_k - y_J| + |y_J - y| < 1/q_n + 1/q_n = 1/(n+1)$.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "L1",
        "L2",
        "L5",
        "L7",
        "L8"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Define $f : \\mathbb{N} \\to \\mathbb{N}$ by letting $f(n)$ be the least element of the set $G_n := \\{\\, k \\in \\mathbb{N} : k > n \\text{ and } |x_k - y| < 1/(n+1) \\,\\}$, which is nonempty by step 2.1. Then $f(n) > n$ and $|x_{f(n)} - y| < 1/(n+1)$ for every $n$.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L3",
        "construct"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "The recursion theorem applied to $\\mathbb{N}$, the element $f(0)$ and the function $f$ gives $n : \\mathbb{N} \\to \\mathbb{N}$ with $n_0 = f(0)$ and $n_{j+1} = f(n_j)$. Then $n_j < n_{j+1}$ for every $j$, so $n$ is strictly increasing and $n_j \\ge j$; moreover $|x_{n_{j+1}} - y| < 1/(n_j + 1) \\le 1/(j+1)$ for every $j$, using that $n_j + 1 \\ge j + 1$.",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "L2",
        "L4",
        "L6"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "The subsequence $(x_{n_j})$ converges to $y$: given a real $\\varepsilon > 0$, take a natural $m \\ge 1$ with $1/m < \\varepsilon$; every $j \\ge m$ satisfies $j \\ge 1$, so step 4.1 applied at $j - 1$ gives $|x_{n_j} - y| < 1/j \\le 1/m < \\varepsilon$. Producing such a threshold for every real $\\varepsilon > 0$ establishes convergence, and $n$ is strictly increasing, so $y \\in \\operatorname{SL}(x)$.",
      "step": "5.1",
      "inputs": [
        "step 4.1",
        "L1",
        "L2",
        "L6",
        "discharge-construct"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The thm-subsequential-limit-set-closed statement has no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "The thm-subsequential-limit-set-closed statement has no zero-valued boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the unit or first-index boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The statement and step 3.1 explicitly treat the equality, singleton, constant, or nonempty degeneracy."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The thm-subsequential-limit-set-closed statement has no interval or extended-real endpoint convention."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.2 makes the relevant selection only after its existence or source-set nonemptiness is established."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The thm-subsequential-limit-set-closed statement is not a biconditional requiring a forward implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The thm-subsequential-limit-set-closed statement is not a biconditional requiring a reverse implication."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": null,
    "notes": "Reserved for the independent Alpha proof-refuter when risk routing is run after A3."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-subsequential-limit-set-closed",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "def-subsequential-limit",
    "declared_target": "def-subsequential-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-subsequential-limit-set-closed",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
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
    "source": "thm-subsequential-limit-set-closed",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
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
    "source": "thm-subsequential-limit-set-closed",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-recursion",
    "declared_target": "thm-recursion",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-subsequential-limit-set-closed",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-well-ordering-principle",
    "declared_target": "thm-well-ordering-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-subsequential-limit-set-closed",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-index-map-grows",
    "declared_target": "lem-index-map-grows",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-subsequential-limit-set-closed",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-triangle-inequality",
    "declared_target": "lem-of-triangle-inequality",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-subsequential-limit-set-closed",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
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
    "source": "thm-subsequential-limit-set-closed",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
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
    "source": "thm-subsequential-limit-set-closed",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-of-archimedean",
    "declared_target": "thm-of-archimedean",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-subsequential-limit-set-closed",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
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
    "source": "thm-subsequential-limit-set-closed",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
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
    "source": "thm-subsequential-limit-set-closed",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-rat-embeds-dense",
    "declared_target": "lem-rat-embeds-dense",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-subsequential-limit-set-closed",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "def-nat-order",
    "declared_target": "def-nat-order",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-subsequential-limit-set-closed",
    "sourcePage": "limsup-and-subsequential-limits",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-nat-linear-order",
    "declared_target": "thm-nat-linear-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (19)

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

### `cor-liminf-is-least-subsequential-limit`

````markdown
---
id: cor-liminf-is-least-subsequential-limit
kind: corollary
title: "The limit inferior is the least subsequential limit in $\\overline{\\mathbb{R}}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-limsup-is-greatest-subsequential-limit, lem-limsup-reflection, def-limsup-liminf, def-subsequential-limit, def-extended-limits, def-extended-reals, thm-algebra-of-limits, def-divergence-to-infinity, def-real-limit, def-sequence, lem-of-add-order]
justified_by: []
aliases: []
landmark: false
short: "$\\liminf = \\min \\overline{\\operatorname{SL}}$"
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.17)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]). Then
$\liminf_{k} x_k \in \overline{\operatorname{SL}}(x)$ and
$\liminf_{k} x_k \le L$ for every $L \in \overline{\operatorname{SL}}(x)$
([[def-limsup-liminf]], [[def-extended-limits]]).

So the extended subsequential limit set of any real sequence has a **least**
element as well as a greatest one, and the two are
$\liminf_k x_k$ and $\limsup_k x_k$ respectively
([[thm-limsup-is-greatest-subsequential-limit]]). Every extended subsequential
limit lies between them.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, and its reflection $y_k := -x_k$.

[L1] Reflection on $\overline{\mathbb{R}}$: $a \mapsto -a$ satisfies $-(-a) = a$ and $a \le b$ if and only if $-b \le -a$ ([[def-extended-reals]]).

[L2] $\limsup_k(-x_k) = -\liminf_k x_k$ ([[lem-limsup-reflection]]).

[L3] For every real sequence the extended subsequential limit set is nonempty and has greatest element the limit superior ([[thm-limsup-is-greatest-subsequential-limit]]).

[L4] Convergence in $\overline{\mathbb{R}}$, subsequences and the set $\overline{\operatorname{SL}}$ ([[def-extended-limits]], [[def-subsequential-limit]], [[def-sequence]], [[def-real-limit]]).

[L5] Scalar multiples of convergent sequences: $z_j \to z$ in $\mathbb{R}$ implies $c z_j \to c z$ ([[thm-algebra-of-limits]]).

[L6] Divergence to $\pm\infty$, and order reversal: $z_j > M$ is equivalent to $-z_j < -M$, and $M$ runs over all reals exactly when $-M$ does ([[def-divergence-to-infinity]], [[lem-of-add-order]]).

[L7] Limit superior and limit inferior of a real sequence ([[def-limsup-liminf]]).

## Proof

**Proof technique:** direct.

1.1 Put $y_k := -x_k$, a sequence of reals; then $-y_k = x_k$ for every $k$, by the involution property of the reflection. [given, L1, L4]

1.2 Let $L \in \overline{\mathbb{R}}$ and let $n : \mathbb{N} \to \mathbb{N}$ be strictly increasing with $(x_{n_j})$ converging to $L$ in $\overline{\mathbb{R}}$. [given, L4]

1.3 By [L3] applied to the sequence $(y_k)$, the set $\overline{\operatorname{SL}}(y)$ is nonempty and has greatest element $N_0 := \limsup_k y_k$, and $N_0 = -\liminf_k x_k$ by [L2]. [given, L2, L3, L7]

2.1 The reflected subsequence $(y_{n_j}) = (-x_{n_j})$ converges to $-L$ in $\overline{\mathbb{R}}$. If $L$ is real this is the scalar rule with $c = -1$. If $L = +\infty$ then for every real $M$ there is $J$ with $x_{n_j} > M$ for all $j \ge J$, hence $y_{n_j} < -M$ for all such $j$; since $-M$ runs over all reals as $M$ does, $y_{n_j} \to -\infty = -L$. If $L = -\infty$ the same argument with the inequalities exchanged gives $y_{n_j} \to +\infty = -L$. [step 1.2, L1, L4, L5, L6]

3.1 Hence $L \in \overline{\operatorname{SL}}(x)$ implies $-L \in \overline{\operatorname{SL}}(y)$, the same index map serving. Applying that implication to the sequence $(y_k)$, whose reflection is $(x_k)$, gives conversely that $N \in \overline{\operatorname{SL}}(y)$ implies $-N \in \overline{\operatorname{SL}}(x)$. So $\overline{\operatorname{SL}}(x) = \{\, -N : N \in \overline{\operatorname{SL}}(y) \,\}$. [step 2.1, step 1.1, L1, L4]

4.1 Therefore $-N_0 \in \overline{\operatorname{SL}}(x)$, and $-N_0 = -(-\liminf_k x_k) = \liminf_k x_k$; and for any $L \in \overline{\operatorname{SL}}(x)$ the element $-L$ lies in $\overline{\operatorname{SL}}(y)$, so $-L \le N_0$ by maximality, whence $\liminf_k x_k = -N_0 \le L$ by order reversal. Thus $\liminf_k x_k$ is the least element of $\overline{\operatorname{SL}}(x)$. [step 3.1, step 1.3, L1, L2] ∎

## Remarks

- **Nothing is reconstructed.** The subsequence realising $\liminf_k x_k$ is the
  one produced by [[thm-limsup-is-greatest-subsequential-limit]] for the reflected
  sequence, read back through $y \mapsto -y$. That is the whole point of proving
  [[lem-limsup-reflection]] first: the recursion and the well-ordering argument
  are done once.

- **Combined with the greatest element, this brackets every subsequential
  limit.** For any real sequence and any $L \in \overline{\operatorname{SL}}(x)$,
  $$\liminf_{k} x_k \;\le\; L \;\le\; \limsup_{k} x_k,$$
  which contains [[lem-liminf-le-limsup]] as the special case obtained by taking
  for $L$ either endpoint, both of which are in the set.

- **The real subsequential limit set inherits the statement only when the value is
  finite.** If $\liminf_k x_k$ is a real number it is the least element of
  $\operatorname{SL}(x)$ as well, since the two sets agree on $\mathbb{R}$
  ([[def-extended-limits]]). If it is $-\infty$, then $\operatorname{SL}(x)$ may
  have no least element at all, or be empty.
````

### `def-nat-order`

````markdown
---
id: def-nat-order
kind: definition
title: "Order on the natural numbers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-numbers, def-nat-addition]
aliases: []
landmark: false
short: "$m\\le n\\iff\\exists k\\,(m+k=n)$"
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
    - title: "T. Tao, Analysis I, 3rd ed., §2.2 (Ordering of the naturals)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
pipeline_run: null
---

## Definition

For $m, n \in \mathbb{N}$, define the **order** by

$$m \le n \iff \exists k \in \mathbb{N}\ (m + k = n),$$

and the **strict order** by $m < n \iff (m \le n \text{ and } m \neq n)$, using
addition ([[def-nat-addition]]).

## Remarks

Read $m \le n$ as "$n$ is $m$ plus something": the gap $k$ with $m + k = n$ is
unique when it exists (by commutativity and cancellation,
[[lem-nat-add-commutative]], [[lem-nat-add-cancellative]]) and is
written $n - m$ once subtraction is available. That $\le$ is genuinely a linear
order, reflexive, antisymmetric, transitive, and total, is proved in
[[thm-nat-linear-order]] and [[lem-nat-trichotomy]]; compatibility with the
arithmetic ([[lem-nat-order-add-compatible]],
[[lem-nat-order-mult-compatible]]) and discreteness
($m < n \iff \sigma(m) \le n$, [[lem-nat-discrete]]) follow.

In the von Neumann model this order coincides with membership and inclusion:
$m \le n \iff m \subseteq n$ and $m < n \iff m \in n$, matching the picture of
each natural number as the set $\{0, 1, \dots, n-1\}$ of its predecessors
([[def-natural-numbers]]). That coincidence is not proved here; it is derived
from the additive definition above on a later page. The least-element property of every nonempty subset,
the **well-ordering principle** ([[thm-well-ordering-principle]]), is the deepest
consequence.
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

### `def-subsequential-limit`

````markdown
---
id: def-subsequential-limit
kind: definition
title: "Subsequential limit of a real sequence, and the subsequential limit set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-sequence, def-real-limit, lem-index-map-grows]
justified_by: []
forward_refs: [ex-two-subsequential-limits, cex-unbounded-with-convergent-subsequence]
aliases: []
landmark: false
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
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Def. 3.5, subsequential limits)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $L \in \mathbb{R}$.
Then $L$ is a **subsequential limit** of $(x_k)$ when some subsequence of $(x_k)$
converges to $L$: that is, when there is a strictly increasing
$n : \mathbb{N} \to \mathbb{N}$ such that

$$x_{n_j} \longrightarrow L \qquad (j \to \infty)$$

in the sense of [[def-real-limit]]. The **subsequential limit set** of $(x_k)$ is

$$\operatorname{SL}(x) \;:=\; \{\, L \in \mathbb{R} : L \text{ is a subsequential limit of } (x_k) \,\} \subseteq \mathbb{R}.$$

Both pieces of the definition are already fixed elsewhere and are only combined
here: *strictly increasing* and *subsequence* are [[def-sequence]], and
*converges* is [[def-real-limit]]. Nothing about $(x_k)$ itself is assumed; in
particular $(x_k)$ is not assumed to converge, and $\operatorname{SL}(x)$ may be
empty, a single point, or larger.

**A subsequence looks arbitrarily far out.** A strictly increasing index map
satisfies $n_j \ge j$ for every $j$ ([[lem-index-map-grows]]), so the indices
$n_j$ are cofinal in $\mathbb{N}$ and a subsequential limit is determined by the
behaviour of $(x_k)$ at arbitrarily large indices. Consequently no finite
initial segment of $(x_k)$ affects $\operatorname{SL}(x)$: a sequence and each of
its tails have the same subsequential limits.

**Terminology.** Some texts say *cluster point*, *limit point* or *accumulation
value* of the sequence for the same notion. This library says *subsequential
limit* throughout, reserving *limit point* for the topological notion of a limit
point of a set, which is a different thing: the set $\{x_k\}$ of values of the
constant sequence $x_k = 0$ has no limit point, while $0$ is a subsequential
limit of that sequence.

## Remarks

- **A convergent sequence has exactly one subsequential limit, its limit.** If
  $x_k \to x$ then every subsequence converges to $x$
  ([[lem-subsequence-inherits-limit]]), so every subsequential limit equals $x$
  by uniqueness of limits ([[lem-limit-unique]]); and $x$ itself is one, taking
  $n_j = j$, which is strictly increasing. So $\operatorname{SL}(x) = \{x\}$. The
  converse fails: $\operatorname{SL}$ being a single point does not force
  convergence, as the unbounded sequence of
  [[cex-unbounded-with-convergent-subsequence]] shows.

- **The subsequential limit set can be empty.** The sequence $x_k = k$ has no
  subsequential limit at all, since every subsequence is unbounded and an
  unbounded sequence does not converge ([[lem-convergent-implies-bounded]]).
  Bolzano-Weierstrass ([[thm-bolzano-weierstrass]]) says exactly that
  boundedness is what rules this out: for a bounded sequence,
  $\operatorname{SL}(x) \ne \emptyset$.

- **It can also be large.** The alternating sequence of
  [[lem-alternating-sequence]] has subsequential limit set $\{-1, 1\}$, and
  [[ex-two-subsequential-limits]] carries out that computation for a sequence
  that converges to neither. The systematic study of $\operatorname{SL}(x)$, in
  particular that it has a greatest and a least element for a bounded sequence,
  belongs to the $\limsup$ page and is not begun here.
````

### `lem-index-map-grows`

````markdown
---
id: lem-index-map-grows
kind: lemma
title: "A strictly increasing index map satisfies $n_k \\ge k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sequence, thm-induction-principle, lem-nat-discrete, def-nat-order, def-nat-addition, lem-nat-add-identity, lem-nat-successor-neq-self, thm-nat-linear-order, lem-nat-trichotomy]
justified_by: []
aliases: []
landmark: false
short: "$n_k\\ge k$"
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
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "University of Wisconsin Math 521, Homework 5"
      url: "https://people.math.wisc.edu/~angenent/521.2016s/index.html"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $n : \mathbb{N} \to \mathbb{N}$ be a function, written $k \mapsto n_k$, and
recall that $n$ is **strictly increasing** when $n_j < n_k$ whenever $j < k$
([[def-sequence]], [[def-nat-order]]).

1. **Consecutive comparisons suffice.** If $n_i < n_{\sigma(i)}$ for every
   $i \in \mathbb{N}$, then $n$ is strictly increasing.
2. **Growth.** If $n$ is strictly increasing then $n_k \ge k$ for every
   $k \in \mathbb{N}$.

Claim 1 is what one checks in practice when exhibiting a subsequence; claim 2 is
what every later subsequence argument uses.

## Facts & Assumptions

**Given:** A function $n : \mathbb{N} \to \mathbb{N}$, written $k \mapsto n_k$, with $\sigma$ the successor and the order of [[def-nat-order]]; claim 1 is proved under the standing assumption that $n_i < n_{\sigma(i)}$ for every $i$, and claim 2 under the standing assumption that $n$ is strictly increasing ([[def-sequence]]).

[A1] $Q(k)$ denotes the statement: $n_j < n_k$ for every $j < k$.

[A2] $P(k)$ denotes the statement: $n_k \ge k$.

[L1] Order and successor on $\mathbb{N}$: $m \le p$ means $m + i = p$ for some $i$, so $0 \le m$ for every $m$ because $0 + m = m$; and $\sigma(k) = k + 1$ with $\sigma(k) \ne k$, so $k < \sigma(k)$ ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-add-identity]], [[lem-nat-successor-neq-self]]).

[L2] Discreteness: $m < p$ if and only if $\sigma(m) \le p$ ([[lem-nat-discrete]]).

[L3] Induction principle: if $R(0)$ holds and $R(k)$ implies $R(\sigma(k))$ for every $k$, then $R(k)$ holds for every $k \in \mathbb{N}$ ([[thm-induction-principle]]).

[L4] The order on $\mathbb{N}$ is reflexive, antisymmetric, transitive and total, and satisfies trichotomy ([[thm-nat-linear-order]], [[lem-nat-trichotomy]]).

## Proof

**Proof technique:** induction.

1.1 Base case for claim 1: $Q(0)$ holds vacuously, since no $j$ satisfies $j < 0$; indeed $0 \le j$ always holds, and $j < 0$ together with $0 \le j$ would contradict antisymmetry. [base, A1, L1, L4]

1.2 Inductive hypothesis for claim 1: fix $k \in \mathbb{N}$ and assume $Q(k)$, that is $n_j < n_k$ for every $j < k$. [ih, A1]

1.3 Base case for claim 2: $P(0)$ states $n_0 \ge 0$, which holds because $0 \le m$ for every natural $m$. [base, A2, L1]

1.4 Inductive hypothesis for claim 2: fix $k \in \mathbb{N}$ and assume $P(k)$, that is $k \le n_k$. [ih, A2]

2.1 Inductive step for claim 1: let $j < \sigma(k)$. By trichotomy either $k < j$, or $j = k$, or $j < k$. The case $k < j$ is impossible, since it gives $\sigma(k) \le j$ by [L2], which together with $j < \sigma(k)$ contradicts antisymmetry. If $j = k$ then $n_j = n_k < n_{\sigma(k)}$ by the standing assumption. If $j < k$ then $n_j < n_k$ by step 1.2 and $n_k < n_{\sigma(k)}$ by the standing assumption, so $n_j < n_{\sigma(k)}$ by transitivity. In every admissible case $n_j < n_{\sigma(k)}$, so $Q(\sigma(k))$ holds. [step 1.2, A1, L2, L4]

2.2 Inductive step for claim 2: $k < \sigma(k)$ by [L1], so strict increase gives $n_k < n_{\sigma(k)}$; combined with $k \le n_k$ from step 1.4 this yields $k < n_{\sigma(k)}$, hence $\sigma(k) \le n_{\sigma(k)}$ by [L2], which is $P(\sigma(k))$. [step 1.4, A2, L1, L2, L4]

3.1 Both inductions are complete, so by the induction principle $Q(k)$ holds for every $k$, which is claim 1, and $P(k)$ holds for every $k$, which is claim 2. [step 1.1, step 1.3, step 2.1, step 2.2, L3, discharge-induction] ∎

## Remarks

- Claim 2 is sharp: the identity map $n_k = k$ is strictly increasing with $n_k = k$ throughout, so no better bound than $n_k \ge k$ holds for all strictly increasing index maps.

- Claim 2 is exactly what makes a subsequence inherit a limit ([[lem-subsequence-inherits-limit]]): a threshold $K$ that works for the original sequence works unchanged for the subsequence, because $n_k \ge k \ge K$ whenever $k \ge K$.

- Nothing here is about $\mathbb{R}$; both claims are about $(\mathbb{N}, \le, \sigma)$ alone. Both are proved **by induction** ([L3]), and that is the method, not an order property. Claim 2 needs three order facts on top of the induction: that $0$ is least, which is what makes its base case $n_0 \ge 0$ true ([L1], step 1.3); discreteness ([[lem-nat-discrete]], [L2]), which upgrades $k < n_{\sigma(k)}$ to $\sigma(k) \le n_{\sigma(k)}$ (step 2.2); and transitivity in its mixed form, which composes $k \le n_k$ with $n_k < n_{\sigma(k)}$ into $k < n_{\sigma(k)}$ ([L4], step 2.2). Claim 1 additionally uses trichotomy and antisymmetry ([L4]).

- Of those three, neither the least element nor discreteness may be dropped. Discreteness alone is not enough: $(\mathbb{Z}, \le)$ is discrete in the same sense, $m < p$ iff $m + 1 \le p$, yet $k \mapsto k - 1$ is strictly increasing on $\mathbb{Z}$ with $n_k < k$ everywhere. What $\mathbb{Z}$ lacks is a least element to anchor the induction. A least element alone is not enough either, which is what fails over $\mathbb{Q}$: on the nonnegative rationals $x \mapsto x/2$ is strictly increasing and fixes the least element $0$, but $x/2 < x$ at every positive rational.
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

### `lem-of-triangle-inequality`

````markdown
---
id: lem-of-triangle-inequality
kind: lemma
title: "The triangle inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-of-abs-value, lem-of-add-order, def-ordered-field]
aliases: []
landmark: true
short: "Triangle ineq."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
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

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$. Then

$$|x + y| \le |x| + |y|.$$

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] For every $u \in F$, $-|u| \le u \le |u|$, and $|u|$ equals $u$ or $-u$ ([[lem-of-abs-value]]).

[L2] Order compatible with addition: if $a \le b$ and $c \le d$, then $a + c \le b + d$. [[lem-of-add-order]] states the STRICT forms and only those ($a < b \Rightarrow a + c < b + c$, and $a < b$ with $c < d$ giving $a + c < b + d$); the nonstrict form used here is those two together with the cases $a = b$ and $c = d$, settled by trichotomy, the order being total ([[def-ordered-field]]). Explicitly: if $a < b$ and $c < d$ the second strict form applies; if $a < b$ and $c = d$ the first gives $a + c < b + c = b + d$; if $a = b$ and $c < d$ the first gives $a + c < a + d = b + d$; and if $a = b$ and $c = d$ the two sides are equal.

[L3] Field and order arithmetic: $-(a + b) = -a + (-b)$, and $a \le b \iff -b \le -a$ ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $-|x| \le x \le |x|$ and $-|y| \le y \le |y|$. [L1]

2.1 Adding the two chains of [step 1.1] with [L2] and using $-(|x| + |y|) = -|x| + (-|y|)$ from [L3] gives $-(|x| + |y|) \le x + y \le |x| + |y|$. [step 1.1, L2, L3]

3.1 By [L1] the value $|x + y|$ equals $x + y$ or $-(x + y)$; both $x + y \le |x| + |y|$ and $-(x + y) \le |x| + |y|$ hold by [step 2.1] and [L3] (the latter from $-(|x| + |y|) \le x + y$), so $|x + y| \le |x| + |y|$. [step 2.1, L1, L3] ∎
````

### `lem-rat-embeds-dense`

````markdown
---
id: lem-rat-embeds-dense
kind: lemma
title: "The rationals embed densely in the reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-numbers, def-real-order, thm-reals-ordered-field, thm-reals-field, def-rational-cauchy-sequence, thm-rat-ordered-field, thm-rat-field]
aliases: []
proof_strategy: direct
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
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
pipeline_run: null
---

## Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

## Facts & Assumptions

**Given:** A real $x = [(a_n)]$ and a rational $\varepsilon > 0$.

[L1] The orders of $\mathbb{Q}$ and $\mathbb{R}$; ordered-field arithmetic ([[thm-rat-ordered-field]], [[thm-reals-ordered-field]]).

[L2] Field arithmetic in $\mathbb{Q}$: $\varepsilon/2, \delta/4$ are positive rationals, and every nonzero rational $q$ has a reciprocal $1/q$ with $q \cdot (1/q) = 1$ ([[thm-rat-field]]).

[L3] Cauchy definition ([[def-rational-cauchy-sequence]]).

[L4] Real positivity via eventual rational lower bounds ([[def-real-order]]).

[L5] $\mathbb{R} = \mathcal{C}/\mathcal{N}$ is a field ([[thm-reals-field]]), and $0_{\mathbb{R}} = \hat 0$, $1_{\mathbb{R}} = \hat 1$ are the classes of the constant sequences ([[def-real-numbers]]). A multiplicative inverse there is unique: if $ab = 1_{\mathbb{R}} = ac$ then $b = b(ac) = (ba)c = c$.

## Proof

**Proof technique:** direct.

1.1 Embedding: constant sequences are Cauchy; $\hat q = \hat r$ iff the constant $q - r$ is null iff $q = r$; operations match termwise; and $q < r$ gives the constant lower bound $r - q > 0$, so $\hat q < \hat r$ and order is preserved and reflected. [L1, L4]

1.2 Fix $N$ with $|a_m - a_n| < \varepsilon/2$ for all $m, n \ge N$, and set $q = a_N$. [L3, L2]

2.1 The difference $\hat q - x$ has representative $(a_N - a_n)$ with $|a_N - a_n| < \varepsilon/2$ for $n \ge N$; hence both $\hat\varepsilon - (x - \hat q)$ and $\hat\varepsilon - (\hat q - x)$ have representatives eventually $> \varepsilon/2$, so both are positive: $|x - \hat q| < \hat\varepsilon$. [step 1.2, L4, L1]

2.2 Inverses: let $q$ be a nonzero rational. Then $\hat q \ne \hat 0 = 0_{\mathbb{R}}$ by the injectivity of step 1.1, and $1/q$ exists in $\mathbb{Q}$ by [L2]; since the operations match termwise (step 1.1), $\hat q \cdot \widehat{1/q} = \widehat{q \cdot (1/q)} = \hat 1 = 1_{\mathbb{R}}$. Inverses in $\mathbb{R}$ are unique by [L5], so $(\hat q)^{-1} = \widehat{1/q}$: the embedding preserves reciprocals. [step 1.1, L2, L5]

3.1 Density: let $x < y$; pick $\delta > 0$ rational and $N$ with the representative of $y - x$ eventually $> \delta$; set $\varepsilon = \delta/4$ and pick $q$ with $|x - \hat q| < \hat\varepsilon$; then $q' = q + 2\varepsilon$ satisfies $\hat q' - x \ge -\hat\varepsilon + 2\hat\varepsilon = \hat\varepsilon > 0$ and $y - \hat q' \ge \hat\delta - \hat\varepsilon - 2\hat\varepsilon = \hat\delta/4 > 0$, so $x < \hat q' < y$. [step 2.1, L4, L1, L2]

4.1 The rationals embed as an ordered subfield — injectively, preserving the order in both directions, the ring operations, and reciprocals — and they approximate every real arbitrarily well and separate any two reals. [step 1.1, step 2.2, step 3.1] ∎
````

### `lem-sup-epsilon`

````markdown
---
id: lem-sup-epsilon
kind: lemma
title: "Epsilon characterisation of the supremum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-sup-unique, def-ordered-field]
justified_by: []
aliases: []
landmark: false
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
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded above, and let $u$ be an
upper bound of $S$ ([[def-complete-ordered-field]]). Then

$$u = \sup S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } u - \varepsilon < s.$$

In words: among the upper bounds of $S$, the supremum is exactly the one that
cannot be lowered by any positive amount and still bound $S$.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded above, and an upper bound $u$ of $S$; since $S$ is nonempty and bounded above, $\sup S$ exists.

[L1] Supremum: $u = \sup S$ exactly when $u$ is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$; and every nonempty subset of $\mathbb{R}$ that is bounded above has such a least upper bound ([[def-complete-ordered-field]]).

[L2] The least upper bound is unique, so the equation $u = \sup S$ says precisely that $u$ is a least upper bound of $S$ ([[lem-sup-unique]]).

[L3] The order is total: for $a, b \in \mathbb{R}$ exactly one of $a < b$, $a = b$, $b < a$ holds, so the negation of $a \le b$ is $b < a$; and $a < b$ holds exactly when $b - a > 0$ ([[def-complete-ordered-field]], [[def-ordered-field]]). (Translation invariance follows in one line from that last equivalence, since $(b + c) - (a + c) = b - a$, but no step below uses it and it is not claimed here as a quoted result.)

## Proof

**Proof technique:** direct.

1.1 For the forward implication assume $u = \sup S$, that is, $u$ is an upper bound of $S$ that is $\le$ every upper bound of $S$, and let $\varepsilon > 0$ be arbitrary. [assume-hyp, L1, L2]

1.2 For the converse implication assume that $u$ is an upper bound of $S$ such that for every $\varepsilon > 0$ there exists $s \in S$ with $u - \varepsilon < s$, and let $u'$ be an arbitrary upper bound of $S$. [assume-hyp]

2.1 Since $u - (u - \varepsilon) = \varepsilon > 0$, we have $u - \varepsilon < u$. [step 1.1, L3, algebra]

2.2 By totality either $u \le u'$ or $u' < u$; in the second case put $\varepsilon_0 := u - u'$, so that $\varepsilon_0 > 0$ and $u - \varepsilon_0 = u'$. [step 1.2, L3, algebra]

3.1 The element $u - \varepsilon$ is not an upper bound of $S$: if it were, the leastness of $u$ among upper bounds would give $u \le u - \varepsilon$, which contradicts $u - \varepsilon < u$ by trichotomy. [step 2.1, step 1.1, L1, L3]

3.2 In that second case the hypothesis applied to $\varepsilon_0$ yields $s_0 \in S$ with $u' = u - \varepsilon_0 < s_0$, so $s_0 \le u'$ fails, contradicting that $u'$ is an upper bound of $S$; the second case is therefore impossible and $u \le u'$. [step 2.2, step 1.2, L3]

4.1 Failing to be an upper bound of $S$ means precisely that some $s \in S$ does not satisfy $s \le u - \varepsilon$, and by totality that says $u - \varepsilon < s$; since $\varepsilon > 0$ was arbitrary, the forward implication is proved. [step 3.1, L3]

4.2 Since $u'$ was an arbitrary upper bound of $S$, we get $u \le u'$ for every upper bound $u'$; as $u$ is itself an upper bound, $u$ is a least upper bound of $S$, hence $u = \sup S$ by uniqueness, which proves the converse implication. [step 3.2, step 1.2, L1, L2]

5.1 Both implications hold, so for an upper bound $u$ of a nonempty set $S$ bounded above, $u = \sup S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$. [step 4.1, step 4.2] ∎
````

### `thm-limsup-is-greatest-subsequential-limit`

````markdown
---
id: thm-limsup-is-greatest-subsequential-limit
kind: theorem
title: "The limit superior is itself a subsequential limit in $\\overline{\\mathbb{R}}$ and is the greatest one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limsup-liminf, def-subsequential-limit, def-extended-limits, lem-limsup-epsilon-characterisation, lem-limsup-exists, lem-extended-reals-complete, lem-liminf-le-limsup, thm-convergence-iff-limsup-equals-liminf, thm-recursion, thm-well-ordering-principle, lem-index-map-grows, def-extended-reals, def-divergence-to-infinity, def-real-limit, lem-limit-preserves-order, def-sequence, def-upper-bound, def-partial-order, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-rat-embeds-dense, lem-of-abs-value, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [cex-limsup-infinite-not-attained-in-r]
aliases: []
landmark: true
short: "$\\limsup = \\max \\overline{\\operatorname{SL}}$"
proof_strategy: constructive
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.17)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and write
$\Lambda := \limsup_{k} x_k \in \overline{\mathbb{R}}$ ([[def-limsup-liminf]]).
Then, with the extended subsequential limit set
$\overline{\operatorname{SL}}(x)$ of [[def-extended-limits]]:

1. $\Lambda \in \overline{\operatorname{SL}}(x)$: there is a strictly increasing
   $n : \mathbb{N} \to \mathbb{N}$ such that $(x_{n_j})$ converges to $\Lambda$ in
   $\overline{\mathbb{R}}$;
2. $L \le \Lambda$ for every $L \in \overline{\operatorname{SL}}(x)$.

So $\overline{\operatorname{SL}}(x)$ is **nonempty** and has a **greatest
element**, and that element is $\limsup_k x_k$. In particular every sequence of
reals whatever has a subsequence that converges in $\overline{\mathbb{R}}$.

**The extended set is the right home for this statement, and the real set is
not.** The finite subsequential limit set $\operatorname{SL}(x)$ of
[[def-subsequential-limit]] may be empty, and when it is not it may have a
greatest element different from $\limsup_k x_k$; both failures are exhibited by
the dedicated counterexample on the companion page. What is true for
$\operatorname{SL}(x)$ follows: when $\Lambda$ is a real number, claim 1 puts it
in $\operatorname{SL}(x)$, since the two sets agree on $\mathbb{R}$
([[def-extended-limits]]), and claim 2 then makes it the greatest element there
too.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, its tail ranges $T_n = \{x_k : k \ge n\}$, the extended tail suprema $s_n = \sup T_n$, and $\Lambda := \limsup_k x_k = \inf\{s_n : n \in \mathbb{N}\}$ ([[def-limsup-liminf]]).

[L1] All of $s_n$ and $\Lambda$ exist in $\overline{\mathbb{R}}$, with $s_n$ the least upper bound of $T_n$ and $\Lambda$ the greatest lower bound of $\{s_n\}$ ([[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total, so the failure of $a \le b$ is $b < a$; $-\infty$ is least and $+\infty$ greatest; every real is $< +\infty$ and $> -\infty$; and on $\mathbb{R}$ the order is that of $\mathbb{R}$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] Epsilon characterisation for a real $\Lambda$: for every real $\eta > 0$ one has $x_k < \Lambda + \eta$ eventually and $x_k > \Lambda - \eta$ frequently ([[lem-limsup-epsilon-characterisation]]).

[L4] Recursion theorem: for a set $A$, an element $a \in A$ and a function $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g_0 = a$ and $g_{j+1} = f(g_j)$ ([[thm-recursion]]).

[L5] Well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] Index maps: if $n_j < n_{j+1}$ for every $j$ then $n$ is strictly increasing, and then $n_j \ge j$ for every $j$; the composite $(x_{n_j})$ is a subsequence ([[lem-index-map-grows]], [[def-sequence]]).

[L7] Convergence in $\overline{\mathbb{R}}$ and the extended subsequential limit set ([[def-extended-limits]]); convergence to a real, for which it suffices to produce a threshold for every real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]); divergence to $\pm\infty$ ([[def-divergence-to-infinity]]); and $|a - b| < c$ if and only if $b - c < a < b + c$ for $c > 0$ ([[lem-of-abs-value]]).

[L8] If $\limsup_k x_k = -\infty$ then $\liminf_k x_k = -\infty$ and $x_k \to -\infty$ ([[lem-liminf-le-limsup]], [[thm-convergence-iff-limsup-equals-liminf]]).

[L9] Limits preserve non-strict inequalities: if $y_j \le c$ for all large $j$ and $y_j \to y$ in $\mathbb{R}$, then $y \le c$ ([[lem-limit-preserves-order]]).

[L10] Archimedean facts: for every real $M$ there is a natural $p \ge 1$ with $M < p \cdot 1_{\mathbb{R}}$, and for every real $\eta > 0$ a natural $m \ge 1$ with $1/m < \eta$; the canonical naturals satisfy $0 \le n \cdot 1_{\mathbb{R}}$ and are increasing in $n$, and $0 < a \le b$ gives $0 < 1/b \le 1/a$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L11] Strictly between any two reals lies a rational, hence a real ([[lem-rat-embeds-dense]]).

[L12] The order on $\mathbb{N}$ is total and transitive, so any two indices have a common upper bound ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** constructive.

1.1 The element $\Lambda = \limsup_k x_k$ exists in $\overline{\mathbb{R}}$, and exactly one of the following holds: $\Lambda$ is a real number, $\Lambda = +\infty$, or $\Lambda = -\infty$. [given, L1, L2]

1.2 Suppose $\Lambda = +\infty$. Since $\Lambda$ is a lower bound of $\{s_n\}$, every $n$ has $+\infty \le s_n$ and so $s_n = +\infty$. Consequently, for every $n \in \mathbb{N}$ and every real $M$ there is $k \ge n$ with $x_k > M$: otherwise $M$ would be an upper bound of $T_n$ and leastness would give $s_n \le M$, contradicting $M < +\infty$. [given, L1, L2]

1.3 Suppose $\Lambda$ is real. Then for every $n \in \mathbb{N}$ and every real $\eta > 0$ there is $k \ge n$ with $|x_k - \Lambda| < \eta$: by [L3] fix $K$ with $x_k < \Lambda + \eta$ for all $k \ge K$, let $K'$ be an index at least as large as both $n$ and $K$, and use that $x_k > \Lambda - \eta$ frequently to obtain $k \ge K'$ with $x_k > \Lambda - \eta$; that $k$ satisfies $k \ge K$, hence also $x_k < \Lambda + \eta$, and $k \ge n$. [given, L3, L7, L12]

1.4 Suppose $\Lambda = -\infty$. Then $x_k \to -\infty$ by [L8], and the identity map $j \mapsto j$ is strictly increasing, so the subsequence $(x_j)$ of $(x_k)$ converges to $-\infty$ in $\overline{\mathbb{R}}$ and $\Lambda \in \overline{\operatorname{SL}}(x)$. [given, L6, L7, L8]

1.5 Let $L \in \overline{\operatorname{SL}}(x)$ be arbitrary and fix a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ such that $(x_{n_j})$ converges to $L$ in $\overline{\mathbb{R}}$; then $n_j \ge j$ for every $j$. [given, L6, L7]

2.1 In the case $\Lambda = +\infty$, define $f : \mathbb{N} \to \mathbb{N}$ by letting $f(n)$ be the least element of $E_n := \{\, k \in \mathbb{N} : k > n \text{ and } x_k > n \cdot 1_{\mathbb{R}} \,\}$, which is nonempty by step 1.2 applied with the index $n+1$ and the real $M = n \cdot 1_{\mathbb{R}}$, and let $a$ be the least element of $\{\, k : x_k > 0 \,\}$, nonempty by step 1.2 with $n = 0$ and $M = 0$. Then $f(n) > n$ and $x_{f(n)} > n \cdot 1_{\mathbb{R}}$ for every $n$. [step 1.2, L5, construct]

2.2 In the case $\Lambda$ real, define $g : \mathbb{N} \to \mathbb{N}$ by letting $g(n)$ be the least element of $F_n := \{\, k \in \mathbb{N} : k > n \text{ and } |x_k - \Lambda| < 1/(n+1) \,\}$, which is nonempty by step 1.3 applied with the index $n+1$ and $\eta = 1/(n+1) > 0$, and let $b$ be the least element of $\{\, k : |x_k - \Lambda| < 1 \,\}$, nonempty by step 1.3 with $n = 0$ and $\eta = 1$. Then $g(n) > n$ and $|x_{g(n)} - \Lambda| < 1/(n+1)$ for every $n$. [step 1.3, L5, L10, construct]

2.3 If $L = -\infty$ then $L \le \Lambda$, since $-\infty$ is the least element of $\overline{\mathbb{R}}$. [step 1.5, L2]

2.4 If $L = +\infty$, then for every real $M$ there is $J$ with $x_{n_j} > M$ for all $j \ge J$. Fix $n \in \mathbb{N}$ and a real $M$, and take $j$ at least as large as both $J$ and $n$; then $n_j \ge j \ge n$, so $x_{n_j} \in T_n$ and $M < x_{n_j} \le s_n$. As $M$ was an arbitrary real, $s_n$ is neither real nor $-\infty$, so $s_n = +\infty$; as $n$ was arbitrary, $\Lambda = \inf\{s_n\} = +\infty$ and $L \le \Lambda$. [step 1.5, L1, L2, L7, L12]

2.5 If $L$ is real, suppose for the sake of the comparison that $\Lambda < L$. By step 1.1 the element $\Lambda$ is then real or $-\infty$; choose a real $c$ with $\Lambda < c < L$, taking a rational strictly between $\Lambda$ and $L$ in the first case and $c := L - 1$ in the second. Since $\Lambda$ is the greatest lower bound of $\{s_n\}$ and $\Lambda < c$, the element $c$ is not a lower bound, so there is $n$ with $s_n < c$, and then $x_k \le s_n < c$ for every $k \ge n$. For $j \ge n$ we have $n_j \ge j \ge n$, hence $x_{n_j} \le c$, so $L \le c$ by [L9], contradicting $c < L$. By totality $L \le \Lambda$. [step 1.5, step 1.1, L1, L2, L9, L11]

3.1 In the case $\Lambda = +\infty$, the recursion theorem applied to $\mathbb{N}$, the element $a$ and the function $f$ gives $n : \mathbb{N} \to \mathbb{N}$ with $n_0 = a$ and $n_{j+1} = f(n_j)$. Then $n_j < n_{j+1}$ for every $j$, so $n$ is strictly increasing and $n_j \ge j$; and $x_{n_{j+1}} > n_j \cdot 1_{\mathbb{R}} \ge j \cdot 1_{\mathbb{R}}$ for every $j$. [step 2.1, L4, L6, L10]

3.2 In the case $\Lambda$ real, the recursion theorem applied to $\mathbb{N}$, the element $b$ and the function $g$ gives $n : \mathbb{N} \to \mathbb{N}$ with $n_0 = b$ and $n_{j+1} = g(n_j)$. Then $n$ is strictly increasing with $n_j \ge j$, and $|x_{n_{j+1}} - \Lambda| < 1/(n_j + 1) \le 1/(j+1)$ for every $j$. [step 2.2, L4, L6, L10]

4.1 In the case $\Lambda = +\infty$, the subsequence $(x_{n_j})$ diverges to $+\infty$: given a real $M$, take a natural $p \ge 1$ with $M < p \cdot 1_{\mathbb{R}}$; every $j \ge p + 1$ satisfies $j - 1 \ge p$, so step 3.1 applied at $j - 1$ gives $x_{n_j} > (j-1) \cdot 1_{\mathbb{R}} \ge p \cdot 1_{\mathbb{R}} > M$. Hence $(x_{n_j})$ converges to $+\infty = \Lambda$ in $\overline{\mathbb{R}}$ and $\Lambda \in \overline{\operatorname{SL}}(x)$. [step 3.1, L7, L10, L12]

4.2 In the case $\Lambda$ real, the subsequence $(x_{n_j})$ converges to $\Lambda$: given a real $\varepsilon > 0$, take a natural $m \ge 1$ with $1/m < \varepsilon$; every $j \ge m$ satisfies $j \ge 1$, so step 3.2 applied at $j - 1$ gives $|x_{n_j} - \Lambda| < 1/j \le 1/m < \varepsilon$. Producing such a threshold for every real $\varepsilon > 0$ establishes convergence, so $(x_{n_j})$ converges to $\Lambda$ in $\overline{\mathbb{R}}$ and $\Lambda \in \overline{\operatorname{SL}}(x)$. [step 3.2, L7, L10]

5.1 The three cases of step 1.1 are exhaustive, and each produces a subsequence converging to $\Lambda$ in $\overline{\mathbb{R}}$: step 4.1 when $\Lambda = +\infty$, step 4.2 when $\Lambda$ is real, and step 1.4 when $\Lambda = -\infty$. So $\Lambda \in \overline{\operatorname{SL}}(x)$, which is claim 1. [step 4.1, step 4.2, step 1.4, L7]

6.1 Steps 2.3, 2.4 and 2.5 cover the three possibilities for an arbitrary $L \in \overline{\operatorname{SL}}(x)$ and give $L \le \Lambda$ in each, which is claim 2. With claim 1 this makes $\overline{\operatorname{SL}}(x)$ nonempty with greatest element $\Lambda = \limsup_k x_k$. [step 5.1, step 2.3, step 2.4, step 2.5, L2, discharge-construct] ∎

## Remarks

- **The construction uses no choice.** Both index maps are built by taking a
  *least* element ([[thm-well-ordering-principle]]) of an explicitly described
  nonempty set of naturals, so the functions $f$ and $g$ are defined outright and
  [[thm-recursion]] then produces the index map. This is the same device as in
  [[lem-peak-monotone-subsequence]], and for the same reason: a subsequence
  selected by repeated arbitrary choices would need a choice principle, and none
  is needed here.

- **Why the recursion threshold is indexed by the previous index rather than by
  the step number.** The recursion theorem produces a function of one variable, so
  the state carried from one step to the next is the index $n_j$ alone. Demanding
  $x_{n_{j+1}} > n_j$ rather than $x_{n_{j+1}} > j$ keeps that single-variable
  form, and $n_j \ge j$ ([[lem-index-map-grows]]) then upgrades the bound to the
  one actually wanted. The same trick fixes the accuracy in the finite case at
  $1/(n_j+1) \le 1/(j+1)$.

- **Claim 2 is where the $\limsup$ earns the word "greatest".** A subsequence
  cannot do better than the tail suprema allow: past any index $n$, every term of
  the sequence, and so every term of any subsequence, is at most $s_n$, and
  $\Lambda$ is the infimum of those. That is the entire content of step 2.5, and
  the strictness of the inequality $\Lambda < c$ is what gives the contradiction,
  since a limit inherits only the non-strict inequality
  ([[lem-limit-preserves-order]]).

- **Both failures of the real version really occur**, and
  [[cex-limsup-infinite-not-attained-in-r]] on the companion page is the witness:
  there $\operatorname{SL}(x)$ is nonempty with greatest element $0$ while
  $\limsup_k x_k = +\infty$.

- **The dual statement is [[cor-liminf-is-least-subsequential-limit]]**, obtained
  from this theorem by reflection rather than by repeating the construction.
````

### `thm-nat-linear-order`

````markdown
---
id: thm-nat-linear-order
kind: theorem
title: "$\\le$ is a linear order on $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-nat-order, def-nat-addition, lem-nat-add-identity, lem-nat-add-associative, lem-nat-add-commutative, lem-nat-add-cancellative, lem-nat-nonzero-is-successor, lem-nat-trichotomy, thm-omega-is-peano-system]
aliases: []
landmark: true
short: "reflexive, antisymmetric, transitive, total"
proof_strategy: direct
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
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
pipeline_run: null
---

## Statement

The relation $\le$ on $\mathbb{N}$, where $m \le n \iff \exists k\ (m + k = n)$ ([[def-nat-order]]), is a linear (total) order: reflexive, antisymmetric, transitive, and total.

## Facts & Assumptions

**Given:** The order $m \le n \iff \exists k\ (m + k = n)$ ([[def-nat-order]]) and addition with $m + 0 = m$, $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]).

[L1] $0 + k = k$ and addition is associative ([[lem-nat-add-identity]], [[lem-nat-add-associative]]).

[L2] Cancellation: $m + k = n + k \Rightarrow m = n$ ([[lem-nat-add-cancellative]]).

[L3] Every nonzero natural is a successor: if $j \ne 0$ then $j = \sigma(i)$ for some $i$ ([[lem-nat-nonzero-is-successor]]).

[L4] Trichotomy: exactly one of $m < n$, $m = n$, $m > n$ holds ([[lem-nat-trichotomy]]).

[L5] Addition is commutative ([[lem-nat-add-commutative]]).

[L6] $\sigma(x) \ne 0$ for every $x$ (Peano axiom P1) ([[thm-omega-is-peano-system]]).

## Proof

**Proof technique:** direct.

1.1 Reflexive: $m + 0 = m$, so $m \le m$. [given]

1.2 Transitive: if $m \le n$ and $n \le p$, say $m + k = n$ and $n + j = p$, then $m + (k + j) = (m + k) + j = n + j = p$, so $m \le p$. [given, L1]

1.3 A sum is zero only if both summands are: if $k + j = 0$ with $j \ne 0$ then $j = \sigma(i)$ and $k + j = k + \sigma(i) = \sigma(k + i) \ne 0$ [L6], a contradiction, so $k = j = 0$. [L1, L3, L6]

1.4 Total: by trichotomy one of $m < n$, $m = n$, $m > n$ holds, and each of these gives $m \le n$ or $n \le m$. [L4]

2.1 Antisymmetric: if $m \le n$ and $n \le m$, say $m + k = n$ and $n + j = m$, then $m + (k + j) = (m + k) + j = n + j = m = m + 0$; commuting both sides [L5] gives $(k + j) + m = 0 + m$, and cancelling the common right summand $m$ [L2] gives $k + j = 0$, hence $k = j = 0$ by step 1.3 and $m = n$. [given, L1, L2, L5, step 1.3]

3.1 Reflexivity, antisymmetry, transitivity, and totality all hold, so $\le$ is a linear order on $\mathbb{N}$. [step 1.1, step 1.2, step 2.1, step 1.4] ∎
````

### `thm-of-archimedean`

````markdown
---
id: thm-of-archimedean
kind: theorem
title: "Every complete ordered field is Archimedean"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-naturals-positive, cor-of-one-positive, def-ordered-field]
aliases: []
landmark: true
short: "complete ⇒ Archimedean"
proof_strategy: contradiction
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
    - title: "Neil Donaldson, Math 140A notes: Completeness and the Archimedean property"
      url: "https://www.math.uci.edu/~ndonalds/math140a/1complete.html"
pipeline_run: null
---

## Statement

Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:
for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$,
where $n \cdot 1_F$ is the canonical natural of the ordered field $F$
([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.

## Facts & Assumptions

**Given:** A complete ordered field $F$; write $A = \{\, n \cdot 1_F : n \ge 1 \,\}$ for the set of its canonical naturals.

[L1] Least-upper-bound property: every nonempty $S \subseteq F$ that is bounded above has a least upper bound $\sup S \in F$ ([[def-complete-ordered-field]]).

[L2] Each canonical natural satisfies $n \cdot 1_F > 0$, one has $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, and $(n+1) \cdot 1_F > n \cdot 1_F$ ([[lem-of-naturals-positive]]).

[L3] $0 < 1_F$ ([[cor-of-one-positive]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $F$ is not Archimedean: there is some $x \in F$ with $n \cdot 1_F \le x$ for all $n \ge 1$, that is, $x$ is an upper bound of $A$. [assume-contra]

2.1 The set $A$ is nonempty, since $1 \cdot 1_F = 1_F \in A$, and it is bounded above by $x$. [step 1.1, L2]

3.1 By the least-upper-bound property, $A$ has a least upper bound $s = \sup A \in F$. [step 2.1, L1]

4.1 Since $1_F > 0$, we have $s - 1_F < s$; as $s$ is the least upper bound, $s - 1_F$ is not an upper bound of $A$. [step 3.1, L3]

5.1 Hence there is some $m \ge 1$ with $m \cdot 1_F > s - 1_F$. [step 4.1]

6.1 Adding $1_F$ to both sides, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F > s$. [step 5.1, L2]

7.1 But $(m+1) \cdot 1_F \in A$, so $(m+1) \cdot 1_F \le s$ because $s$ is an upper bound of $A$, contradicting 6.1. [step 6.1, step 3.1, L2]

8.1 The assumption is therefore untenable, so $F$ is Archimedean. [step 7.1, discharge-contradiction] ∎
````

### `thm-recursion`

````markdown
---
id: thm-recursion
kind: theorem
title: "The recursion theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-peano-system, def-natural-numbers, thm-induction-principle]
aliases: [dedekind-recursion, recursion-theorem]
landmark: true
short: "$g(0)=a,\\ g(\\sigma n)=f(g n)$ unique"
proof_strategy: direct
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
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $(N,0,\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

## Facts & Assumptions

**Given:** a Peano system $(N,0,\sigma)$, a set $A$, an element $a \in A$, and a function $f : A \to A$. Call a set $R \subseteq N \times A$ **closed** when $(0,a) \in R$ and, for all $n \in N$ and $x \in A$, $(n,x) \in R$ implies $(\sigma(n),f(x)) \in R$.

[L1] Induction holds in $N$: any $S \subseteq N$ with $0 \in S$ that is closed under $\sigma$ equals $N$ (axiom P3, [[thm-induction-principle]]).

[L2] In a Peano system $\sigma(n) \ne 0$ (P1) and $\sigma$ is injective (P2) ([[def-peano-system]]).

## Proof

**Proof technique:** direct.

1.1 The set $N \times A$ is closed, so the collection of closed subsets of $N \times A$ is nonempty; let $g := \bigcap \{ R : R \subseteq N \times A \text{ closed} \}$, which is itself closed, since if every closed $R$ contains $(0,a)$ then so does $g$, and if $(n,x) \in g$ then $(n,x) \in R$ for each closed $R$, whence $(\sigma(n),f(x)) \in R$ for each such $R$, so $(\sigma(n),f(x)) \in g$. [given, construct]

2.1 Let $D = \{ n \in N : \exists x \in A,\ (n,x) \in g \}$; then $0 \in D$ since $(0,a) \in g$, and if $n \in D$ with $(n,x) \in g$ then $(\sigma(n),f(x)) \in g$ by closure, so $\sigma(n) \in D$; by induction $D = N$, hence $g$ relates every $n$ to at least one $x$. [L1, step 1.1]

2.2 Suppose $(0,b) \in g$ with $b \ne a$; then $g \setminus \{(0,b)\}$ still contains $(0,a)$ and is closed, since any generated pair $(\sigma(m),f(z))$ has $\sigma(m) \ne 0$ by P1 and so is never equal to $(0,b)$; this contradicts the minimality of $g$, so $a$ is the unique second coordinate paired with $0$. [L2, step 1.1]

3.1 Let $U = \{ n \in N : \text{there is exactly one } x \text{ with } (n,x) \in g \}$; then $0 \in U$ by step 2.2. [step 2.2]

4.1 Assume $n \in U$ with unique value $x$, so $(n,x) \in g$ and $(\sigma(n),f(x)) \in g$ by closure; if $(\sigma(n),c) \in g$ with $c \ne f(x)$, then $g \setminus \{(\sigma(n),c)\}$ contains $(0,a)$ because $\sigma(n) \ne 0$, and is closed, because a generated pair $(\sigma(m),f(z))$ with $(m,z) \in g \setminus \{(\sigma(n),c)\}$ can equal $(\sigma(n),c)$ only if $\sigma(m) = \sigma(n)$ and $f(z) = c$, but $\sigma(m) = \sigma(n)$ forces $m = n$ by injectivity, then $z = x$ by uniqueness at $n$, giving $f(z) = f(x) \ne c$, a contradiction; hence $g \setminus \{(\sigma(n),c)\}$ is closed and smaller than $g$, contradicting minimality, so $f(x)$ is the unique value at $\sigma(n)$ and $\sigma(n) \in U$. [L2, step 3.1, step 1.1]

5.1 By induction $U = N$, so together with the totality from step 2.1 the relation $g$ is a function $g : N \to A$; it satisfies $g(0) = a$, and closure with uniqueness gives $g(\sigma(n)) = f(g(n))$ for all $n$. [L1, step 2.1, step 3.1, step 4.1]

6.1 If $h : N \to A$ also satisfies $h(0) = a$ and $h(\sigma(n)) = f(h(n))$, then the set $\{ n : g(n) = h(n) \}$ contains $0$ and is closed under $\sigma$, since $g(n) = h(n)$ implies $g(\sigma(n)) = f(g(n)) = f(h(n)) = h(\sigma(n))$, so by induction it equals $N$, that is $h = g$. [L1, step 5.1] ∎
````

### `thm-squeeze`

````markdown
---
id: thm-squeeze
kind: theorem
title: "The squeeze theorem"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [def-real-limit, def-sequence, lem-of-add-order, lem-of-abs-value, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [sandwich-theorem]
landmark: true
short: "squeeze"
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
    - title: "Squeeze theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Squeeze_theorem"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(a_k)$, $(x_k)$ and $(b_k)$ be sequences of reals ([[def-sequence]]) with

$$a_k \le x_k \le b_k \quad \text{eventually},$$

and suppose $(a_k)$ and $(b_k)$ both converge to the same real $L$
([[def-real-limit]]). Then $(x_k)$ converges to $L$.

The middle sequence is not assumed to converge; that is the point of the
theorem, and it is why the squeeze is a tool for *establishing* convergence
rather than for computing a limit already known to exist.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(x_k)$, $(b_k)$ of reals, an index $K_0 \in \mathbb{N}$ with $a_k \le x_k \le b_k$ for every $k \ge K_0$, and a real $L$ such that $(a_k)$ converges to $L$ and $(b_k)$ converges to $L$ ([[def-sequence]], [[def-real-limit]]).

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Absolute value: for $c > 0$, $|u| < c$ if and only if $-c < u < c$ ([[lem-of-abs-value]]).

[L3] Order arithmetic in $\mathbb{R}$: adding a constant preserves $<$ and $\le$; $u < v \le w$ and $u \le v < w$ both give $u < w$; and $\le$ is transitive ([[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).

[L4] The order on $\mathbb{N}$ is total and transitive, so three indices $K_0, K_1, K_2$ admit an index $K$ with $K \ge K_0$, $K \ge K_1$ and $K \ge K_2$, and then $k \ge K$ gives $k \ge K_0$, $k \ge K_1$, $k \ge K_2$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be rational. By convergence of $(a_k)$ there is $K_1$ with $|a_k - L| < \varepsilon$ for all $k \ge K_1$, and by convergence of $(b_k)$ there is $K_2$ with $|b_k - L| < \varepsilon$ for all $k \ge K_2$. [L1]

2.1 By [L2], $|a_k - L| < \varepsilon$ gives $-\varepsilon < a_k - L$, that is $L - \varepsilon < a_k$, for all $k \ge K_1$; and $|b_k - L| < \varepsilon$ gives $b_k - L < \varepsilon$, that is $b_k < L + \varepsilon$, for all $k \ge K_2$. [step 1.1, L2, L3]

3.1 Choose $K$ with $K \ge K_0$, $K \ge K_1$ and $K \ge K_2$. For every $k \ge K$ the hypothesis gives $a_k \le x_k \le b_k$, so $L - \varepsilon < a_k \le x_k \le b_k < L + \varepsilon$, hence $L - \varepsilon < x_k < L + \varepsilon$, hence $-\varepsilon < x_k - L < \varepsilon$, hence $|x_k - L| < \varepsilon$. [step 2.1, given, L2, L3, L4, choose]

4.1 The rational $\varepsilon > 0$ was arbitrary, so for every rational $\varepsilon > 0$ there is an index $K$ beyond which $|x_k - L| < \varepsilon$; that is, $(x_k)$ converges to $L$. [step 3.1, L1] ∎

## Remarks

- The proof is direct from the definition and does not route through [[lem-limit-preserves-order]]. It could not: that lemma assumes the middle sequence converges, which is what is being proved here.

- Both bounding sequences must have the **same** limit. With $a_k = -1$, $b_k = 1$ and any $(x_k)$ taking values in $[-1, 1]$ the hypothesis $a_k \le x_k \le b_k$ holds and nothing whatever follows, since a bounded sequence need not converge ([[fs-bounded-implies-convergent]]).

- The most common use is with $a_k = -c_k$ and $b_k = c_k$ for a null sequence $(c_k)$: if $|x_k| \le c_k$ eventually and $c_k \to 0$, then $x_k \to 0$. That special case also follows from [[lem-null-times-bounded]] whenever $x_k$ is presented as a product of a null sequence and a bounded one, but the squeeze needs no such presentation.
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

