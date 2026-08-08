## Target item — `ex-standard-limits-worked`

Normalized current SHA-256: `a4c7a9cb99bcaa5d0fdf757f49c3d11ea36fe0e978179768b5fac260cfcfa493`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-standard-limits-worked
kind: example
title: "The four standard limits $n^{1/n} \\to 1$, $a^{1/n} \\to 1$, $n^{\\alpha}/(1+p)^n \\to 0$ and $x^k/k! \\to 0$, computed"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-nth-root-of-n-tends-to-one, lem-nth-root-of-constant-tends-to-one, lem-power-over-geometric-null, lem-factorial-beats-geometric, thm-algebra-of-limits, def-real-limit, def-sequence, def-rational-power, def-integer-power, thm-nth-roots-exist, def-finite-sum, lem-of-naturals-positive, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules, def-ordered-field, def-complete-ordered-field]
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.20)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.5"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
pipeline_run: null
---

## Example

The four standard limits of this page, written as sequences on $\mathbb{N}$ and
instantiated. Throughout $\iota(n) = n \cdot 1_{\mathbb{R}}$ is the canonical
natural, with $\iota(0) = 0$.

| classical form | as a sequence on $\mathbb{N}$ | value | source |
|---|---|---|---|
| $n^{1/n} \to 1$ | $(k+1)^{1/(k+1)}$ | $1$ | [[lem-nth-root-of-n-tends-to-one]] |
| $a^{1/n} \to 1$, $a > 0$ | $a^{1/(k+1)}$ | $1$ | [[lem-nth-root-of-constant-tends-to-one]] |
| $n^{\alpha}/(1+p)^{n} \to 0$ | $\iota(k)^{\alpha}/(1+p)^{k}$ | $0$ | [[lem-power-over-geometric-null]] |
| $x^{k}/k! \to 0$ | $x^{k}/k!$ | $0$ | [[lem-factorial-beats-geometric]] |

Two of the four need an index shift and two do not, and the reason is visible in
the classical forms: in the first two the index sits in the *exponent* as $1/n$,
which is not a rational number at $n = 0$, so those families begin at $n = 1$ and
are written here with $n = k+1$. In the last two the index sits in the base or in
a factorial, both of which are defined at $0$, so no shift is needed and the
sequences begin at $k = 0$ with the values $0$ and $1$ respectively.

The instances computed below are:

$$2^{1/(k+1)} \to 1, \qquad \frac{\iota(k)^{2}}{2^{k}} \to 0, \qquad \frac{2^{k}}{k!} \to 0, \qquad \frac{(-3)^{k}}{k!} \to 0, \qquad \frac{\iota(k)^{2}}{k!} \to 0 .$$

The last of these is not one of the four; it is the composite that orders the
three scales, and it is obtained from two of them by the product rule.

## Facts & Assumptions

**Given:** The canonical naturals $\iota(n) = n \cdot 1_{\mathbb{R}}$ with $\iota(0) = 0$; the factorial $k! = \prod_{j<k}\iota(j+1)$ of [[lem-factorial-beats-geometric]]; rational powers ([[def-rational-power]]) and integer powers ([[def-integer-power]]).

[L1] $(k+1)^{1/(k+1)} \to 1$, with $1 \le n^{1/n} \le 1 + 2/n^{1/2}$ for every natural $n \ge 1$ ([[lem-nth-root-of-n-tends-to-one]]).

[L2] For every real $a > 0$, $a^{1/(k+1)} \to 1$; and for real $b \ge 1$ and natural $n \ge 1$, $1 \le b^{1/n} \le 1 + (b-1)/\iota(n)$ ([[lem-nth-root-of-constant-tends-to-one]]).

[L3] For every real $p > 0$ and rational $\alpha > 0$, $\iota(k)^{\alpha}/(1+p)^{k} \to 0$ ([[lem-power-over-geometric-null]]).

[L4] For every real $x$, $x^{k}/k! \to 0$ ([[lem-factorial-beats-geometric]]).

[L5] Algebra of limits: products of convergent sequences converge to the product of the limits ([[thm-algebra-of-limits]], [[def-real-limit]], [[def-sequence]]).

[L6] Arithmetic: $0 < 1 < 2 < 3$, so $1$, $2$, $3/2$ and $1/2$ are positive and $2 = 1 + 1$, $3/2 = 1 + 1/2$; a positive integer power of a positive real is positive and nonzero; $2$ is a positive rational and $1/2$ is a positive rational ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[lem-of-naturals-positive]], [[thm-nth-roots-exist]], [[def-finite-sum]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 The first standard limit gives $(k+1)^{1/(k+1)} \to 1$, together with the explicit two-sided bound $1 \le (k+1)^{1/(k+1)} \le 1 + 2/(k+1)^{1/2}$ valid at every $k \in \mathbb{N}$, since $k+1 \ge 1$. [given, L1]

1.2 The second gives $2^{1/(k+1)} \to 1$ and $(1/2)^{1/(k+1)} \to 1$, both bases being positive; for the first of these the explicit bound of [L2] with $b = 2$ reads $1 \le 2^{1/n} \le 1 + 1/\iota(n)$ for every natural $n \ge 1$. [given, L2, L6]

1.3 The third, with $p = 1$ and $\alpha = 2$, gives $\iota(k)^{2}/2^{k} \to 0$; with $p = 1/2$ and $\alpha = 1/2$ it gives $\iota(k)^{1/2}/(3/2)^{k} \to 0$. Both $p$ are positive reals and both $\alpha$ are positive rationals, so [L3] applies in each case. [given, L3, L6]

1.4 The fourth, with $x = 2$ and with $x = -3$, gives $2^{k}/k! \to 0$ and $(-3)^{k}/k! \to 0$; no hypothesis on $x$ is needed, in particular no positivity. [given, L4]

2.1 Multiplying the first limit of step 1.3 by the first of step 1.4 and using $2^{k} \ne 0$ gives $\iota(k)^{2}/k! = \big(\iota(k)^{2}/2^{k}\big)\big(2^{k}/k!\big) \to 0 \cdot 0 = 0$. [step 1.3, step 1.4, L5, L6]

2.2 Multiplying the limit of step 1.1 by the first of step 1.2 gives $(k+1)^{1/(k+1)} \, 2^{1/(k+1)} \to 1 \cdot 1 = 1$. [step 1.1, step 1.2, L5]

3.1 The four limits and the two composites are therefore established as displayed, and together they order the three growth scales: a fixed power of $n$ is beaten by every geometric sequence of ratio $> 1$ by step 1.3, every geometric sequence is beaten by the factorial by step 1.4, and consequently a fixed power of $n$ is beaten by the factorial by step 2.1. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 2.2] ∎

## Remarks

- **The two bounds quoted in steps 1.1 and 1.2 are the useful part in practice.**
  They convert the qualitative statement into a rate: $n^{1/n}$ is within
  $2/n^{1/2}$ of $1$, and $a^{1/n}$ within $(a-1)/n$ of $1$ when $a \ge 1$. The
  second rate is faster, and the difference is real: in $n^{1/n}$ the base itself
  grows with the index.

- **Why $\alpha$ is rational and $p$ is real.** The exponent $\alpha$ must be
  rational because rational powers are all this library has; the base $1+p$ may be
  any real $> 1$ because it is raised only to *integer* powers. The asymmetry is a
  fact about what has been constructed, not about the mathematics, and it
  disappears once real exponents are available.

- **The composite in step 2.1 is the one usually quoted as "factorials beat
  polynomials".** It is not proved directly anywhere on this page: it is the
  product of two of the four standard limits, and the product rule
  ([[thm-algebra-of-limits]]) is what assembles it.

- **Nothing here uses $\limsup$.** All four are ordinary limits, and the page's
  machinery is needed only to *prove* them, not to state them; the connection to
  the rest of the page is that [[thm-ratio-root-inequality]] is the tool that
  makes several of them routine once one of them is known.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-nth-root-of-n-tends-to-one",
      "source_section": "Statement",
      "quote": "For a natural number $n \\ge 1$ write $\\iota(n) := n \\cdot 1_{\\mathbb{R}}$ for the\ncanonical natural of $\\mathbb{R}$ ([[lem-of-naturals-positive]]) and\n$n^{1/n} := \\iota(n)^{1/n}$, $n^{1/2} := \\iota(n)^{1/2}$ for its roots\n([[thm-nth-roots-exist]], [[def-rational-power]]). Then:\n\n1. $\\displaystyle 1 \\;\\le\\; n^{1/n} \\;\\le\\; 1 + \\frac{2}{n^{1/2}}$ for every natural $n \\ge 1$;\n2. the sequence $r_k := (k+1)^{1/(k+1)}$, $k \\in \\mathbb{N}$, converges to $1$\n   ([[def-real-limit]]).\n\n**The index range is not cosmetic.** The expression $n^{1/n}$ is defined only for\n$n \\ge 1$, since $1/n$ is not a rational number when $n = 0$\n([[def-rational-power]]). Sequences in this library are functions on $\\mathbb{N}$\nand $\\mathbb{N}$ contains $0$ ([[def-sequence]]), so the statement of convergence\nis made about the shifted family $r_k = (k+1)^{1/(k+1)}$, which is the classical\nfamily $n^{1/n}$, $n \\ge 1$, reindexed by $n = k+1$. Claim 1 is stated over the\nnatural range $n \\ge 1$ where the expression means something.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-nth-root-of-constant-tends-to-one",
      "source_section": "Statement",
      "quote": "Let $a \\in \\mathbb{R}$ with $a > 0$, write $\\iota(n) := n \\cdot 1_{\\mathbb{R}}$\nfor the canonical natural ([[lem-of-naturals-positive]]) and $a^{1/n}$ for the\n$n$-th root ([[thm-nth-roots-exist]], [[def-rational-power]]), defined for\nnaturals $n \\ge 1$. Then:\n\n1. for every real $b \\ge 1$ and every natural $n \\ge 1$,\n   $$1 \\;\\le\\; b^{1/n} \\;\\le\\; 1 + \\frac{b-1}{\\iota(n)};$$\n2. the sequence $c_k := a^{1/(k+1)}$, $k \\in \\mathbb{N}$, converges to $1$\n   ([[def-real-limit]]).\n\n**Index range.** As for the previous lemma on this page, $a^{1/n}$ requires\n$n \\ge 1$, so the sequence indexed by $\\mathbb{N}$ ([[def-sequence]]) is the\nshifted family $a^{1/(k+1)}$; it is the classical family $a^{1/n}$, $n \\ge 1$,\nreindexed by $n = k+1$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-power-over-geometric-null",
      "source_section": "Statement",
      "quote": "Let $p \\in \\mathbb{R}$ with $p > 0$ and let $\\alpha \\in \\mathbb{Q}$ with\n$\\alpha > 0$. Write $\\iota(n) := n \\cdot 1_{\\mathbb{R}}$ for the canonical\nnatural, with $\\iota(0) := 0$, and let\n\n$$w_k \\;:=\\; \\frac{\\iota(k)^{\\alpha}}{(1+p)^{k}} \\qquad (k \\in \\mathbb{N}),$$\n\nthe numerator being a rational power ([[def-rational-power]]) and the denominator\nan integer power ([[def-integer-power]]). Then $w_k \\to 0$\n([[def-real-limit]]).\n\n**Every term is defined, including the one at $k = 0$.** The supplementary clause\nof [[def-rational-power]] gives $0^{\\alpha} = 0$ for rational $\\alpha > 0$, and\n$(1+p)^0 = 1$, so $w_0 = 0$. No index shift is therefore needed here, in contrast\nwith the two root lemmas earlier on this page, where the *exponent* is the index.\n\nIn words: a fixed power of $n$ is beaten by any geometric sequence of ratio\n$> 1$, however small the excess $p$ and however large the exponent $\\alpha$.",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-factorial-beats-geometric",
      "source_section": "Statement",
      "quote": "Write $\\iota(n) := n \\cdot 1_{\\mathbb{R}}$ for the canonical natural\n([[lem-of-naturals-positive]]) and define the **factorial** as the finite product\n([[def-finite-sum]])\n\n$$k! \\;:=\\; \\prod_{j < k} \\iota(j+1) \\qquad (k \\in \\mathbb{N}),$$\n\nso that $0! = 1$, the empty product, and $(k+1)! = k! \\cdot \\iota(k+1)$. Every\n$k!$ is a positive real. Then, for every $x \\in \\mathbb{R}$,\n\n$$\\frac{x^{k}}{k!} \\longrightarrow 0 ,$$\n\nthe numerator being the integer power of [[def-integer-power]] and the\nconvergence that of [[def-real-limit]].\n\nThe index range needs no adjustment: $k!$ is defined at $k = 0$ with value $1$,\nand $x^0 = 1$, so the sequence begins with $x^0/0! = 1$.",
      "uses": [
        "1.4"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-algebra-of-limits",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to\n$x$ and $y$ respectively ([[def-real-limit]]), and let $c \\in \\mathbb{R}$. Then\n\n$$x_k + y_k \\to x + y, \\qquad c\\,x_k \\to c\\,x, \\qquad x_k - y_k \\to x - y, \\qquad x_k y_k \\to x y,$$\n\nand if in addition $y \\ne 0$ and $y_k \\ne 0$ for every $k \\in \\mathbb{N}$, then\n\n$$\\frac{1}{y_k} \\to \\frac{1}{y} \\qquad \\text{and} \\qquad \\frac{x_k}{y_k} \\to \\frac{x}{y}.$$\n\nThe quotient case rests on an eventual lower bound for $|y_k|$, proved below\nrather than assumed: $|y_k| > |y|/2$ for all sufficiently large $k$.",
      "uses": [
        "2.1",
        "2.2"
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
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity\nsatisfies $0 < 1$; that is, $1 \\in P$.",
      "uses": [
        "1.2",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "1.2",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.2",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "1.2",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-nth-roots-exist",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).\nFor every $a \\in \\mathbb{R}$ with $a \\ge 0$ and every $n \\in \\mathbb{N}$ with\n$n \\ge 1$ there is a **unique** $s \\in \\mathbb{R}$ with $s \\ge 0$ and $s^n = a$\n([[def-integer-power]]); we write\n\n$$s = a^{1/n} = \\sqrt[n]{a}.$$\n\nMoreover $a^{1/n} > 0$ when $a > 0$, and $a^{1/1} = a$.\n\n**This generalises the published [[thm-of-square-roots]], and the case $n = 2$ is\nnot new.** That theorem already produces the unique $\\sqrt{a} \\ge 0$ with\n$(\\sqrt{a})^2 = a$, and it is cited as such throughout the library; the notation\n$a^{1/2}$ introduced here is the same number. What is new is the passage to\ngeneral $n$: the completed square that drives the $n = 2$ argument has no direct\nanalogue, and its place is taken by the factorisation of $b^n - a^n$ and the\nresulting Lipschitz estimate ([[lem-power-difference-factorisation]]).",
      "uses": [
        "1.2",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-finite-sum",
      "source_section": "Definition",
      "quote": "Throughout this page $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), in particular an ordered field\n([[def-ordered-field]]) and a field ([[def-field]]), and $\\mathbb{N}$ is the set\nof natural numbers ([[def-natural-numbers]]) with successor $\\sigma(n) = n + 1$\n([[def-nat-addition]]).\n\nLet $a : \\mathbb{N} \\to \\mathbb{R}$ be a sequence of reals, written $a_k$ for\n$a(k)$. **Finite sums and finite products of $a$ are defined by recursion on the\nupper index**, which is legitimate because of the recursion theorem\n([[thm-recursion]]). That theorem produces a function of one variable, so the\nrunning index has to be carried along inside the value: applying it to the set\n$A = \\mathbb{N} \\times \\mathbb{R}$, the starting element $(0, 0)$ and the function\n$f(n, s) = (\\sigma(n),\\, s + a_n)$ gives a unique\n$g : \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{R}$ with\n\n$$g(0) = (0, 0), \\qquad g(\\sigma(n)) = f(g(n)) \\quad (n \\in \\mathbb{N}).$$\n\nWrite $g(n) = \\big(\\pi_1(g(n)),\\, \\Sigma_n\\big)$ for its two coordinates.\n\n**The first coordinate is the index itself, and that is a small induction, not an\nobservation** ([[thm-induction-principle]]). Indeed $\\pi_1(g(0)) = 0$; and if\n$\\pi_1(g(n)) = n$, then\n$g(\\sigma(n)) = f\\big(\\pi_1(g(n)), \\Sigma_n\\big) = \\big(\\sigma(\\pi_1(g(n))),\\, \\Sigma_n + a_{\\pi_1(g(n))}\\big) = \\big(\\sigma(n),\\, \\Sigma_n + a_n\\big)$,\nso $\\pi_1(g(\\sigma(n))) = \\sigma(n)$. By induction $\\pi_1(g(n)) = n$ for every\n$n \\in \\mathbb{N}$. Only now may the second coordinate of the two displayed\nclauses be read off, and doing so gives\n\n$$\\Sigma_0 = 0, \\qquad \\Sigma_{\\sigma(n)} = \\Sigma_n + a_n .$$\n\n$\\Sigma$ is moreover the **unique** function $\\mathbb{N} \\to \\mathbb{R}$ with those\ntwo properties: if $\\Sigma'$ also has them then $n \\mapsto (n, \\Sigma'_n)$ satisfies\nthe two clauses defining $g$, hence equals $g$ by the uniqueness clause of\n[[thm-recursion]], so $\\Sigma' = \\Sigma$.\n\nWe write $\\sum_{k < n} a_k := \\Sigma_n$. The same construction with starting\nelement $(0, 1)$ and $f(n, p) = (\\sigma(n),\\, p \\cdot a_n)$, with the same\ninduction on the first coordinate and the same uniqueness argument, gives the\nunique $\\Pi : \\mathbb{N} \\to \\mathbb{R}$ with\n\n$$\\Pi_0 = 1, \\qquad \\Pi_{\\sigma(n)} = \\Pi_n \\cdot a_n ,$$\n\nand we write $\\prod_{k < n} a_k := \\Pi_n$.\n\n**Notation.** For $m, n \\in \\mathbb{N}$ we abbreviate\n\n$$\\sum_{k=0}^{n} a_k := \\sum_{k < n+1} a_k, \\qquad \\prod_{k=0}^{n} a_k := \\prod_{k < n+1} a_k,$$\n\nand, for a general lower index $m$ with $m \\le n + 1$, writing $d = n + 1 - m$\nfor the number of terms,\n\n$$\\sum_{k=m}^{n} a_k := \\sum_{j < d} a_{m+j}, \\qquad \\prod_{k=m}^{n} a_k := \\prod_{j < d} a_{m+j} .$$\n\nWhen $m = n + 1$ we have $d = 0$ and the sum is **empty**, with value $0$, while\nthe empty product has value $1$. In the same spirit $\\sum_{k=0}^{-1} a_k$ is\nnotation for the empty sum $\\Sigma_0 = 0$ and $\\prod_{k=0}^{-1} a_k$ for the\nempty product $\\Pi_0 = 1$; the index $-1$ never occurs as an element of\n$\\mathbb{N}$ and is only a way of writing \"no terms\".\n\nOnly finitely many values of $a$ enter $\\sum_{k<n} a_k$, so the notation\n$\\sum_{k<n} a_k$ and $\\prod_{k<n} a_k$ is also used for a list\n$a_0, \\dots, a_{n-1}$ of reals given without reference to any extension of the\nlist to all of $\\mathbb{N}$: extend the list by $a_k = 0$ (respectively\n$a_k = 1$) for $k \\ge n$ and apply the definition above.",
      "uses": [
        "1.2",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.2",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.2",
        "1.3",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "The first standard limit gives $(k+1)^{1/(k+1)} \\to 1$, together with the explicit two-sided bound $1 \\le (k+1)^{1/(k+1)} \\le 1 + 2/(k+1)^{1/2}$ valid at every $k \\in \\mathbb{N}$, since $k+1 \\ge 1$.",
      "step": "1.1",
      "inputs": [
        "given",
        "L1"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "The second gives $2^{1/(k+1)} \\to 1$ and $(1/2)^{1/(k+1)} \\to 1$, both bases being positive; for the first of these the explicit bound of [L2] with $b = 2$ reads $1 \\le 2^{1/n} \\le 1 + 1/\\iota(n)$ for every natural $n \\ge 1$.",
      "step": "1.2",
      "inputs": [
        "given",
        "L2",
        "L6"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "The third, with $p = 1$ and $\\alpha = 2$, gives $\\iota(k)^{2}/2^{k} \\to 0$; with $p = 1/2$ and $\\alpha = 1/2$ it gives $\\iota(k)^{1/2}/(3/2)^{k} \\to 0$. Both $p$ are positive reals and both $\\alpha$ are positive rationals, so [L3] applies in each case.",
      "step": "1.3",
      "inputs": [
        "given",
        "L3",
        "L6"
      ]
    },
    {
      "id": "step-1-4",
      "claim": "The fourth, with $x = 2$ and with $x = -3$, gives $2^{k}/k! \\to 0$ and $(-3)^{k}/k! \\to 0$; no hypothesis on $x$ is needed, in particular no positivity.",
      "step": "1.4",
      "inputs": [
        "given",
        "L4"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Multiplying the first limit of step 1.3 by the first of step 1.4 and using $2^{k} \\ne 0$ gives $\\iota(k)^{2}/k! = \\big(\\iota(k)^{2}/2^{k}\\big)\\big(2^{k}/k!\\big) \\to 0 \\cdot 0 = 0$.",
      "step": "2.1",
      "inputs": [
        "step 1.3",
        "step 1.4",
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "Multiplying the limit of step 1.1 by the first of step 1.2 gives $(k+1)^{1/(k+1)} \\, 2^{1/(k+1)} \\to 1 \\cdot 1 = 1$.",
      "step": "2.2",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "L5"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "The four limits and the two composites are therefore established as displayed, and together they order the three growth scales: a fixed power of $n$ is beaten by every geometric sequence of ratio $> 1$ by step 1.3, every geometric sequence is beaten by the factorial by step 1.4, and consequently a fixed power of $n$ is beaten by the factorial by step 2.1.",
      "step": "3.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "step 1.3",
        "step 1.4",
        "step 2.1",
        "step 2.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The ex-standard-limits-worked statement has no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "The statement and step 2.1 explicitly treat the zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The statement and step 1.3 explicitly treat the unit or first-index boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the equality, singleton, constant, or nonempty degeneracy."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The ex-standard-limits-worked statement has no interval or extended-real endpoint convention."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The ex-standard-limits-worked proof makes no selection from a set whose nonemptiness needs a separate discharge."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The ex-standard-limits-worked statement is not a biconditional requiring a forward implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The ex-standard-limits-worked statement is not a biconditional requiring a reverse implication."
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
    "source": "ex-standard-limits-worked",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-nth-root-of-n-tends-to-one",
    "declared_target": "lem-nth-root-of-n-tends-to-one",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-standard-limits-worked",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-nth-root-of-constant-tends-to-one",
    "declared_target": "lem-nth-root-of-constant-tends-to-one",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-standard-limits-worked",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-power-over-geometric-null",
    "declared_target": "lem-power-over-geometric-null",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-standard-limits-worked",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-factorial-beats-geometric",
    "declared_target": "lem-factorial-beats-geometric",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-standard-limits-worked",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-algebra-of-limits",
    "declared_target": "thm-algebra-of-limits",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-standard-limits-worked",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-standard-limits-worked",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-standard-limits-worked",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-standard-limits-worked",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-standard-limits-worked",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-standard-limits-worked",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-standard-limits-worked",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-standard-limits-worked",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "cor-of-one-positive",
    "declared_target": "cor-of-one-positive",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-standard-limits-worked",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-add-order",
    "declared_target": "lem-of-add-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-standard-limits-worked",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-sign-rules",
    "declared_target": "lem-of-sign-rules",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-standard-limits-worked",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-standard-limits-worked",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (18)

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

### `lem-factorial-beats-geometric`

````markdown
---
id: lem-factorial-beats-geometric
kind: lemma
title: "For every real $x$, $x^k/k! \\to 0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-finite-sum, lem-finite-sum-laws, def-integer-power, lem-power-laws, lem-power-monotone, lem-geometric-sequence-null, thm-of-archimedean, thm-squeeze, thm-algebra-of-limits, lem-limit-of-tail, def-real-limit, def-sequence, lem-of-abs-value, thm-induction-principle, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-sign-rules, lem-of-add-order, prop-of-multiply-inequalities, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [ex-standard-limits-worked]
aliases: []
landmark: false
short: "$x^k/k! \\to 0$"
proof_strategy: induction
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
    - title: "Factorial (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Factorial"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.5"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Write $\iota(n) := n \cdot 1_{\mathbb{R}}$ for the canonical natural
([[lem-of-naturals-positive]]) and define the **factorial** as the finite product
([[def-finite-sum]])

$$k! \;:=\; \prod_{j < k} \iota(j+1) \qquad (k \in \mathbb{N}),$$

so that $0! = 1$, the empty product, and $(k+1)! = k! \cdot \iota(k+1)$. Every
$k!$ is a positive real. Then, for every $x \in \mathbb{R}$,

$$\frac{x^{k}}{k!} \longrightarrow 0 ,$$

the numerator being the integer power of [[def-integer-power]] and the
convergence that of [[def-real-limit]].

The index range needs no adjustment: $k!$ is defined at $k = 0$ with value $1$,
and $x^0 = 1$, so the sequence begins with $x^0/0! = 1$.

## Facts & Assumptions

**Given:** A real $x$; the modulus $M := |x| \ge 0$; the factorials $k! = \prod_{j<k}\iota(j+1)$; and the canonical naturals $\iota(n) = n \cdot 1_{\mathbb{R}}$.

[A1] $P(j)$ denotes the statement $M^{N+j}/(N+j)! \le A \lambda^{j}$, where $N$, $\lambda$ and $A$ are fixed in step 1.3.

[L1] Finite products: the empty product is $1$, $\prod_{j<m+1} a_j = \big(\prod_{j<m} a_j\big) a_m$, and a product of positive factors is positive ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] Integer powers: $z^{0} = 1$, $z^{m+1} = z^{m} z$, and $z \ge 0$ implies $z^{m} \ge 0$ ([[def-integer-power]], [[lem-power-monotone]], [[lem-power-laws]]).

[L3] Absolute value: $|zw| = |z||w|$, $|z| \ge 0$, and $|z| = z$ for $z \ge 0$ ([[lem-of-abs-value]]).

[L4] Induction principle ([[thm-induction-principle]]).

[L5] Canonical naturals: $\iota(n) > 0$ and invertible for $n \ge 1$, $\iota$ is strictly increasing, and for every real $y$ there is a natural $N \ge 1$ with $y < \iota(N)$ ([[lem-of-naturals-positive]], [[thm-of-archimedean]], [[def-nat-order]], [[thm-nat-linear-order]]).

[L6] Order arithmetic: [[lem-of-inverse-positive]], claim 4 of [[lem-of-sign-rules]] and [[lem-of-add-order]] state the strict forms, that $0 < u < v$ gives $0 < 1/v < 1/u$, that multiplication by a positive element preserves $<$, and that inequalities may be translated and added; adjoining the case of equality gives the nonstrict forms used below, and multiplication by $0$ sends both sides to $0$, so a nonnegative multiplier preserves $\le$. Products of nonnegative inequalities multiply in the nonstrict form stated by [[prop-of-multiply-inequalities]].

[L7] Geometric sequences: $|r| < 1$ implies $r^{j} \to 0$ ([[lem-geometric-sequence-null]]); a scalar multiple of a convergent sequence converges to the scalar multiple of the limit ([[thm-algebra-of-limits]]).

[L8] Squeeze theorem, and the fact that a constant sequence converges to its value ([[thm-squeeze]], [[def-sequence]]).

[L9] A sequence converges to $z$ if and only if some tail of it does; the $K$-th tail of $(z_k)$ is $j \mapsto z_{j+K}$ ([[lem-limit-of-tail]], [[def-sequence]]).

## Proof

**Proof technique:** induction.

1.1 Each $k!$ is a product of the positive reals $\iota(j+1)$, $j < k$, hence positive, and $(k+1)! = k! \cdot \iota(k+1)$; also $M = |x| \ge 0$. [given, L1, L3, L5]

1.2 For every $k \in \mathbb{N}$ one has $|x^{k}| = M^{k}$: at $k = 0$ both sides are $|1| = 1 = M^{0}$, and if $|x^{k}| = M^{k}$ then $|x^{k+1}| = |x^{k} x| = |x^{k}||x| = M^{k} M = M^{k+1}$, so this follows by induction on $k$. [given, L2, L3, L4]

1.3 Take a natural $N \ge 1$ with $M < \iota(N)$ and put $\lambda := M/\iota(N)$ and $A := M^{N}/N!$. Then $0 \le \lambda < 1$, since $0 \le M < \iota(N)$ and $\iota(N) > 0$, and $A \ge 0$. [given, L1, L2, L5, L6, choose]

1.4 The statement $P(0)$ holds, with equality: $M^{N+0}/(N+0)! = M^{N}/N! = A = A \cdot 1 = A\lambda^{0}$. [given, A1, L2, base]

1.5 Fix $j \in \mathbb{N}$ and assume $P(j)$, that is $M^{N+j}/(N+j)! \le A\lambda^{j}$. [A1, ih]

2.1 Then $P(j+1)$ holds. Indeed $M^{N+j+1}/(N+j+1)! = \big(M^{N+j}/(N+j)!\big)\big(M/\iota(N+j+1)\big)$, and $N + j + 1 > N$ gives $\iota(N+j+1) > \iota(N) > 0$, hence $0 \le M/\iota(N+j+1) \le M/\iota(N) = \lambda$; since also $0 \le M^{N+j}/(N+j)! \le A\lambda^{j}$ by step 1.5 and $A\lambda^{j} \ge 0$, multiplying the two nonnegative inequalities gives $M^{N+j+1}/(N+j+1)! \le A\lambda^{j}\lambda = A\lambda^{j+1}$. [step 1.5, A1, L1, L2, L5, L6]

3.1 By the induction principle $P(j)$ holds for every $j \in \mathbb{N}$, and $M^{N+j}/(N+j)! \ge 0$ always, so $0 \le M^{N+j}/(N+j)! \le A\lambda^{j}$ for every $j$. [step 1.4, step 2.1, A1, L1, L2, L4]

4.1 Since $|\lambda| = \lambda < 1$, the sequence $(\lambda^{j})_j$ converges to $0$, hence so does $(A\lambda^{j})_j$; the constant sequence $0$ also converges to $0$, so the squeeze theorem applied to step 3.1 shows that the $N$-th tail $j \mapsto M^{N+j}/(N+j)!$ converges to $0$, and therefore $(M^{k}/k!)_k$ converges to $0$. Finally $|x^{k}/k! - 0| = |x^{k}|/k! = M^{k}/k!$ by steps 1.1 and 1.2, so $x^{k}/k! \to 0$. [step 3.1, step 1.1, step 1.2, L3, L7, L8, L9, discharge-induction] ∎

## Remarks

- **The threshold $N$ is chosen so that the ratio is bounded by a constant less
  than $1$.** Beyond index $N$ each further factor of the factorial is at least
  $\iota(N)$, so multiplying by $x$ and dividing by that factor shrinks the term
  by at least the factor $\lambda = M/\iota(N) < 1$. That is the entire mechanism:
  a factorial eventually beats a geometric sequence because its ratios, unlike a
  geometric sequence's, tend to $0$.

- **No halving is used.** Many texts take $N$ with $M/N \le 1/2$; here it is
  enough to take $N$ with $M < \iota(N)$, which the Archimedean property supplies
  directly and which keeps every quantity a ratio of things already in hand.

- **The case $x = 0$ is not special.** Then $M = 0$, $\lambda = 0$ and the bound
  reads $M^{N+j}/(N+j)! \le 0$ for $j \ge 1$, which is correct since those terms
  are $0$; and $(0^{j})_j$ converges to $0$ because $|0| < 1$, so
  [[lem-geometric-sequence-null]] applies unchanged.

- **This is the strongest of the three standard comparisons on this page.**
  [[lem-power-over-geometric-null]] says a power is beaten by a geometric
  sequence; this says every geometric sequence, that is every fixed $x$, is beaten
  by the factorial. Instances are worked in [[ex-standard-limits-worked]].
````

### `lem-nth-root-of-constant-tends-to-one`

````markdown
---
id: lem-nth-root-of-constant-tends-to-one
kind: lemma
title: "For every $a > 0$, $a^{1/n} \\to 1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-nth-roots-exist, lem-bernoulli-inequality, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, thm-squeeze, thm-algebra-of-limits, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-sign-rules, lem-of-add-order, def-real-limit, def-sequence, def-integer-power, def-ordered-field, def-complete-ordered-field, def-nat-order, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "$a^{1/n}\\to 1$"
proof_strategy: cases
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
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "Bernoulli's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bernoulli%27s_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.20)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.5"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "MIT 18.100B, Fall 2011, Problem Set 1 solutions"
      url: "https://math.mit.edu/classes/18.100B/fall_2011/sol1.pdf"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement

Let $a \in \mathbb{R}$ with $a > 0$, write $\iota(n) := n \cdot 1_{\mathbb{R}}$
for the canonical natural ([[lem-of-naturals-positive]]) and $a^{1/n}$ for the
$n$-th root ([[thm-nth-roots-exist]], [[def-rational-power]]), defined for
naturals $n \ge 1$. Then:

1. for every real $b \ge 1$ and every natural $n \ge 1$,
   $$1 \;\le\; b^{1/n} \;\le\; 1 + \frac{b-1}{\iota(n)};$$
2. the sequence $c_k := a^{1/(k+1)}$, $k \in \mathbb{N}$, converges to $1$
   ([[def-real-limit]]).

**Index range.** As for the previous lemma on this page, $a^{1/n}$ requires
$n \ge 1$, so the sequence indexed by $\mathbb{N}$ ([[def-sequence]]) is the
shifted family $a^{1/(k+1)}$; it is the classical family $a^{1/n}$, $n \ge 1$,
reindexed by $n = k+1$.

## Facts & Assumptions

**Given:** A real $a > 0$; the canonical naturals $\iota(n) = n \cdot 1_{\mathbb{R}}$ for $n \ge 1$; and the sequence $c_k := a^{1/(k+1)}$.

[L1] Roots: for real $x \ge 0$ and natural $n \ge 1$ there is a unique real $s \ge 0$ with $s^n = x$, written $x^{1/n}$; it is $> 0$ when $x > 0$, and $1^{1/n} = 1$ by uniqueness ([[thm-nth-roots-exist]], [[def-integer-power]]).

[L2] Rational powers: $x^{1/n}$ is the rational power at exponent $1/n$; for rational $t > 0$, $x > 1$ implies $x^t > 1$; and $(xy)^{1/n} = x^{1/n} y^{1/n}$ for $x, y > 0$ ([[def-rational-power]], [[lem-rational-power-monotone]], [[lem-rational-power-laws]]).

[L3] Bernoulli's inequality: $(1+x)^n \ge 1 + \iota(n) x$ for $x \ge -1$ and $n \in \mathbb{N}$ ([[lem-bernoulli-inequality]]).

[L4] Canonical naturals: $\iota(n) > 0$ and invertible for $n \ge 1$, and $\iota$ is strictly increasing ([[lem-of-naturals-positive]], [[def-nat-order]], [[thm-nat-linear-order]]).

[L5] Reciprocal Archimedean property: for every real $\eta > 0$ there is a natural $p \ge 1$ with $1/p < \eta$; and $0 < x < y$ gives $0 < 1/y < 1/x$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L6] Order arithmetic: inequalities may be added and translated, and multiplying an inequality by a positive element preserves it; the order is total, so exactly one of $a < 1$, $a = 1$, $a > 1$ holds ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L7] Squeeze theorem; a constant sequence converges to its value; to establish convergence it suffices to produce a threshold for every real $\varepsilon > 0$ ([[thm-squeeze]], [[def-sequence]], [[def-real-limit]]).

[L8] Algebra of limits, reciprocal rule: if $z_j \to z$ with $z \ne 0$ and $z_j \ne 0$ for every $j$, then $1/z_j \to 1/z$ ([[thm-algebra-of-limits]]).

## Proof

**Proof technique:** cases.

1.1 Let $b$ be any real with $b \ge 1$ and let $n \ge 1$ be a natural. If $b = 1$ then $b^{1/n} = 1$ and both inequalities hold. If $b > 1$ then $1/n$ is a positive rational, so $t := b^{1/n} - 1 > 0$; Bernoulli's inequality applied to $t \ge -1$ gives $b = \big(b^{1/n}\big)^n = (1+t)^n \ge 1 + \iota(n)t$, hence $\iota(n) t \le b - 1$ and $t \le (b-1)/\iota(n)$ since $\iota(n) > 0$. In both cases $1 \le b^{1/n} \le 1 + (b-1)/\iota(n)$, which is claim 1. [given, L1, L2, L3, L4, L6]

1.2 Case one: $a = 1$. [given, assume-case one]

1.3 Case big: $a > 1$. [given, assume-case big]

1.4 Case small: $0 < a < 1$. [given, assume-case small]

2.1 For every real $b > 1$ the sequence $b^{1/(k+1)}$ converges to $1$. Put $d_k := 1 + (b-1)/\iota(k+1)$. Given a real $\varepsilon > 0$, the quotient $\varepsilon/(b-1)$ is positive, so there is a natural $p \ge 1$ with $1/p < \varepsilon/(b-1)$; for $k \ge p$ we have $k+1 > p$, hence $\iota(k+1) > \iota(p) > 0$ and $0 < (b-1)/\iota(k+1) < (b-1)(1/p) < \varepsilon$, so $|d_k - 1| < \varepsilon$ and $d_k \to 1$. By step 1.1 applied at $n = k+1$ we have $1 \le b^{1/(k+1)} \le d_k$ for every $k$, and the constant sequence $1$ converges to $1$, so the squeeze theorem gives $b^{1/(k+1)} \to 1$. [step 1.1, L4, L5, L6, L7]

2.2 In case one, $c_k = 1^{1/(k+1)} = 1$ for every $k$, so $(c_k)$ is the constant sequence $1$ and converges to $1$. [step 1.2, L1, L7]

3.1 In case big, $a > 1$, so step 2.1 applied with $b = a$ gives $c_k = a^{1/(k+1)} \to 1$. [step 2.1, step 1.3]

3.2 In case small, put $a' := 1/a$, which satisfies $a' > 1$ because $0 < a < 1$. For each natural $n \ge 1$ the product rule for roots gives $a^{1/n} (a')^{1/n} = (a a')^{1/n} = 1^{1/n} = 1$, so $a^{1/n} = 1/(a')^{1/n}$, and $(a')^{1/n} > 0$. By step 2.1 the sequence $(a')^{1/(k+1)}$ converges to $1 \ne 0$ with all terms nonzero, so the reciprocal rule gives $c_k = 1/(a')^{1/(k+1)} \to 1/1 = 1$. [step 2.1, step 1.4, L1, L2, L5, L8]

4.1 The three cases are exhaustive by trichotomy applied to $a$ and $1$, the hypothesis $a > 0$ excluding nothing else, and in each of them $(c_k)$ converges to $1$; together with step 1.1 this proves both claims. [step 2.2, step 3.1, step 3.2, step 1.1, L6, cases: trichotomy of the order, cases-exhaustive] ∎

## Remarks

- **Bernoulli is doing the whole job in the case $a > 1$.** The inequality
  $(1+t)^n \ge 1 + nt$ converts the exact identity $\big(a^{1/n}\big)^n = a$ into
  the linear bound $t \le (a-1)/n$ on the excess $t = a^{1/n} - 1$, and that bound
  is what tends to $0$. No estimate on $a^{1/n}$ itself is needed beyond
  $a^{1/n} > 1$.

- **The case $0 < a < 1$ is not symmetric to the case $a > 1$ and is not proved
  again.** It is transported by the reciprocal, using
  $a^{1/n} (1/a)^{1/n} = 1$ ([[lem-rational-power-laws]]) and the reciprocal rule
  of [[thm-algebra-of-limits]]. The hypothesis of that rule, that the limit be
  nonzero and every term nonzero, is met because roots of positive reals are
  positive.

- **The rate is different from the one in [[lem-nth-root-of-n-tends-to-one]].**
  Here the excess is $O(1/n)$ with a constant depending on $a$; there the base
  itself grows with $n$ and the excess is only $O(1/n^{1/2})$. The two lemmas are
  therefore not instances of one another in either direction.
````

### `lem-nth-root-of-n-tends-to-one`

````markdown
---
id: lem-nth-root-of-n-tends-to-one
kind: lemma
title: "$n^{1/n} \\to 1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-nth-roots-exist, thm-am-gm, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, thm-squeeze, thm-of-archimedean, lem-of-inverse-positive, lem-of-sign-rules, lem-of-naturals-positive, lem-power-monotone, def-integer-power, def-real-limit, def-sequence, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, lem-of-add-order, def-nat-order, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "$n^{1/n}\\to 1$"
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
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "AM-GM inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/AM%E2%80%93GM_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.20)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.5"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

For a natural number $n \ge 1$ write $\iota(n) := n \cdot 1_{\mathbb{R}}$ for the
canonical natural of $\mathbb{R}$ ([[lem-of-naturals-positive]]) and
$n^{1/n} := \iota(n)^{1/n}$, $n^{1/2} := \iota(n)^{1/2}$ for its roots
([[thm-nth-roots-exist]], [[def-rational-power]]). Then:

1. $\displaystyle 1 \;\le\; n^{1/n} \;\le\; 1 + \frac{2}{n^{1/2}}$ for every natural $n \ge 1$;
2. the sequence $r_k := (k+1)^{1/(k+1)}$, $k \in \mathbb{N}$, converges to $1$
   ([[def-real-limit]]).

**The index range is not cosmetic.** The expression $n^{1/n}$ is defined only for
$n \ge 1$, since $1/n$ is not a rational number when $n = 0$
([[def-rational-power]]). Sequences in this library are functions on $\mathbb{N}$
and $\mathbb{N}$ contains $0$ ([[def-sequence]]), so the statement of convergence
is made about the shifted family $r_k = (k+1)^{1/(k+1)}$, which is the classical
family $n^{1/n}$, $n \ge 1$, reindexed by $n = k+1$. Claim 1 is stated over the
natural range $n \ge 1$ where the expression means something.

## Facts & Assumptions

**Given:** For a natural $m \ge 1$ the canonical natural $\iota(m) := m \cdot 1_{\mathbb{R}}$, extended by $\iota(0) := 0$; this extension keeps the additivity $\iota(m + m') = \iota(m) + \iota(m')$ of [[lem-of-naturals-positive]], which for $m$ or $m'$ equal to $0$ reads $\iota(m) = \iota(m) + 0$.

[L1] Roots: for real $a \ge 0$ and natural $n \ge 1$ there is a unique real $s \ge 0$ with $s^n = a$, written $a^{1/n}$; it is $> 0$ when $a > 0$, and $a^{1/1} = a$ ([[thm-nth-roots-exist]], [[def-integer-power]]).

[L2] Rational powers and monotonicity: $a^{1/n}$ is the rational power $a^r$ at $r = 1/n$, and for rational $t > 0$ one has $a^t > 1$ whenever $a > 1$; also $\big(1/a\big)^{1/2} = 1/a^{1/2}$ for $a > 0$ ([[def-rational-power]], [[lem-rational-power-monotone]], [[lem-rational-power-laws]]).

[L3] AM-GM: for a natural $n \ge 1$ and reals $a_0, \dots, a_{n-1} \ge 0$, the geometric mean $\big(\prod_{j<n} a_j\big)^{1/n}$ is $\le$ the arithmetic mean $\frac{1}{\iota(n)}\sum_{j<n} a_j$ ([[thm-am-gm]]).

[L4] Finite sums and products: the empty sum is $0$ and the empty product $1$; sums and products split at any intermediate index; and $\sum_{j<m} \lambda = \iota(m)\lambda$ for a constant $\lambda$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] Induction principle ([[thm-induction-principle]]).

[L6] Canonical naturals: $\iota(m) > 0$ and $\iota(m)$ is invertible for $m \ge 1$, $\iota$ is strictly increasing, and $\iota(2) = 2 > 1$; the Archimedean property gives, for every real $x$, a natural $p \ge 1$ with $x < \iota(p)$ ([[lem-of-naturals-positive]], [[thm-of-archimedean]]).

[L7] Order and reciprocals: $0 < a < b$ gives $0 < 1/b < 1/a$; multiplying an inequality by a positive element preserves it; and inequalities may be added and translated ([[lem-of-inverse-positive]], [[lem-of-sign-rules]], [[lem-of-add-order]]).

[L8] Squares: for $a, b \ge 0$ one has $a < b$ if and only if $a \cdot a < b \cdot b$ ([[lem-power-monotone]], [[def-integer-power]]).

[L9] Squeeze theorem, and the fact that a constant sequence converges to its value; to establish convergence it suffices to produce a threshold for every real $\varepsilon > 0$ ([[thm-squeeze]], [[def-sequence]], [[def-real-limit]]).

[L10] The order on $\mathbb{N}$ is total and $\iota$ respects it ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 For a natural $n \ge 1$ the element $\iota(n)$ is positive and invertible, so $\iota(n)^{1/n}$ and $\iota(n)^{1/2}$ exist and are positive. [given, L1, L6]

1.2 For every natural $m$ one has $\prod_{j<m} 1 = 1$: the empty product is $1$, and if $\prod_{j<m} 1 = 1$ then $\prod_{j<m+1} 1 = \big(\prod_{j<m} 1\big) \cdot 1 = 1$, so this follows by induction on $m$. [given, L4, L5]

2.1 For $n = 1$ one has $\iota(1) = 1$ and $1^{1/1} = 1$; for $n \ge 2$ one has $\iota(n) \ge \iota(2) = 2 > 1$ and $1/n$ is a positive rational, so $\iota(n)^{1/n} > 1$. In either case $n^{1/n} \ge 1$. [step 1.1, L1, L2, L6, L10]

2.2 Let $n \ge 2$ and put $u := \iota(n)^{1/2}$, so that $u > 0$ and $u \cdot u = \iota(n)$. Apply [L3] to the list of $n$ nonnegative reals given by $a_0 = a_1 = u$ and $a_j = 1$ for $2 \le j < n$, the latter range being empty when $n = 2$. Splitting at index $2$ gives $\prod_{j<n} a_j = \big(\prod_{j<2} a_j\big)\big(\prod_{j<n-2} a_{2+j}\big) = (u \cdot u) \cdot 1 = \iota(n)$ by step 1.2, so the geometric mean is $\iota(n)^{1/n}$; and $\sum_{j<n} a_j = \big(\sum_{j<2} a_j\big) + \big(\sum_{j<n-2} 1\big) = (u + u) + \iota(n-2) = (u+u) + \iota(n) - 2$, using additivity of $\iota$ and $\iota(2) = 2$, so the arithmetic mean is $A = \big((u+u) + \iota(n) - 2\big)/\iota(n) = 1 + \big((u+u) - 2\big)/\iota(n)$. Since $(u+u) - 2 < u + u$ and $\iota(n) > 0$, and $(u+u)/\iota(n) = (u+u)/(u \cdot u) = 2/u$, this gives $\iota(n)^{1/n} \le A \le 1 + 2/u = 1 + 2/n^{1/2}$. [step 1.1, step 1.2, L1, L3, L4, L6, L7, algebra]

2.3 For $n = 1$ the same bound holds trivially: $1^{1/1} = 1 \le 1 + 2 = 1 + 2/1^{1/2}$. [step 1.1, L1, L6, L7]

2.4 The sequence $b_k := 1 + 2/(k+1)^{1/2}$ converges to $1$. Given a real $\varepsilon > 0$, put $t := 2/\varepsilon > 0$ and take a natural $p \ge 1$ with $t \cdot t < \iota(p)$. For $k \ge p$ we have $k + 1 > p$, hence $\iota(k+1) > \iota(p) > t \cdot t$, and since $\big(\iota(k+1)^{1/2}\big)\big(\iota(k+1)^{1/2}\big) = \iota(k+1)$ with both factors $\ge 0$, this forces $t < \iota(k+1)^{1/2}$. Therefore $0 < 2/\iota(k+1)^{1/2} < 2/t = \varepsilon$, that is $|b_k - 1| < \varepsilon$. [step 1.1, L1, L6, L7, L8, L9, L10, algebra]

3.1 Claim 1 is the combination of steps 2.1, 2.2 and 2.3, the two upper bounds covering $n \ge 2$ and $n = 1$ respectively. [step 2.1, step 2.2, step 2.3]

4.1 For every $k \in \mathbb{N}$ the natural $k+1$ is $\ge 1$, so claim 1 gives $1 \le r_k \le b_k$. The constant sequence $1$ converges to $1$ and $(b_k)$ converges to $1$ by step 2.4, so the squeeze theorem gives $r_k \to 1$, which is claim 2. [step 3.1, step 2.4, L9] ∎

## Remarks

- **Where the $\sqrt{n}$ comes from.** AM-GM is applied to a list whose product is
  $n$ but whose entries are as close to $1$ as possible: two copies of $n^{1/2}$
  and $n-2$ copies of $1$. The arithmetic mean is then
  $1 + (2n^{1/2} - 2)/n$, which tends to $1$ at the rate $2/n^{1/2}$. Splitting
  $n$ as $n^{1/2} \cdot n^{1/2}$ rather than as $n \cdot 1$ is the whole trick:
  the list $n, 1, \dots, 1$ gives only $n^{1/n} \le 2 - 1/n$, which does not
  converge to $1$.

- **The lower bound is not decoration.** Without $n^{1/n} \ge 1$ the squeeze has
  nothing below it, and the upper bound alone would leave open a limit smaller
  than $1$. It comes from monotonicity of rational powers in the base
  ([[lem-rational-power-monotone]]) and holds with equality only at $n = 1$.

- **No logarithm and no exponential is used.** The usual quick proof writes
  $n^{1/n} = e^{(\log n)/n}$ and appeals to $(\log n)/n \to 0$; neither function
  exists in this library yet, and the AM-GM route needs nothing beyond roots and
  finite sums.
````

### `lem-of-add-order`

````markdown
---
id: lem-of-add-order
kind: lemma
title: "Order is preserved by adding a constant and by adding inequalities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field]
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
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c, d \in F$.

1. **Translation invariance.** If $a < b$ then $a + c < b + c$.
2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c, d \in F$.

[L1] For $x, y \in F$, the relation $x < y$ means $y - x \in P$ ([[def-ordered-field]]).

[L2] $P$ is closed under addition: if $u, v \in P$ then $u + v \in P$ (axiom O2 of [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a < b$; by the definition of the order this means $b - a \in P$. [assume-hyp, L1]

1.2 For every $c \in F$ the field identities give $(b + c) - (a + c) = b - a$. [algebra]

1.3 Assume moreover $c < d$; by the definition of the order this means $d - c \in P$. [assume-hyp, L1]

1.4 The field identities give $(b + d) - (a + c) = (b - a) + (d - c)$. [algebra]

2.1 Hence $(b + c) - (a + c) = b - a \in P$, which is exactly $a + c < b + c$, proving claim 1. [step 1.1, step 1.2, L1]

2.2 Since $b - a \in P$ and $d - c \in P$, closure under addition gives $(b - a) + (d - c) \in P$. [step 1.1, step 1.3, L2]

3.1 Therefore $(b + d) - (a + c) = (b - a) + (d - c) \in P$, which is exactly $a + c < b + d$, proving claim 2. [step 1.4, step 2.2, L1] ∎
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

### `lem-of-sign-rules`

````markdown
---
id: lem-of-sign-rules
kind: lemma
title: "Sign rules for products and monotonicity of multiplication"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field, lem-of-mult-neg, lem-of-zero-mult]
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
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c \in F$.

1. If $a > 0$ and $b > 0$ then $ab > 0$.
2. If $a > 0$ and $b < 0$ then $ab < 0$.
3. If $a < 0$ and $b < 0$ then $ab > 0$.
4. If $c > 0$ then $a < b \iff ac < bc$.
5. If $c < 0$ then $a < b \iff bc < ac$ (multiplication by a negative reverses order).

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c \in F$.

[L1] For $x, y \in F$: $x < y \iff y - x \in P$; $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and (trichotomy) for each $x$ exactly one of $x \in P$, $x = 0$, $-x \in P$ holds, so $0 \notin P$ and $x \in P \Rightarrow x \neq 0$ ([[def-ordered-field]]).

[L2] $P$ is closed under multiplication: if $u, v \in P$ then $uv \in P$ (axiom O2 of [[def-ordered-field]]).

[L3] In any field, $(-u)v = -(uv)$ and $(-u)(-v) = uv$ ([[lem-of-mult-neg]]).

[L4] In any field, $0 \cdot u = 0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$ and $b > 0$, i.e. $a \in P$ and $b \in P$; closure gives $ab \in P$, so $ab > 0$, proving claim 1. [assume-hyp, L1, L2]

1.2 Assume $a > 0$ and $b < 0$, i.e. $a \in P$ and $-b \in P$; closure gives $a(-b) \in P$. [assume-hyp, L1, L2]

1.3 Assume $a < 0$ and $b < 0$, i.e. $-a \in P$ and $-b \in P$; closure gives $(-a)(-b) \in P$. [assume-hyp, L1, L2]

1.4 Assume $c > 0$ and $a < b$, i.e. $c \in P$ and $b - a \in P$; closure gives $(b - a)c \in P$. [assume-hyp, L1, L2]

1.5 Assume $c < 0$ and $a < b$, i.e. $-c \in P$ and $b - a \in P$; closure gives $(b - a)(-c) \in P$. [assume-hyp, L1, L2]

2.1 Since $a(-b) = -(ab)$ by L3, step 1.2 gives $-(ab) \in P$, so $ab < 0$, proving claim 2. [step 1.2, L3, L1]

2.2 Since $(-a)(-b) = ab$ by L3, step 1.3 gives $ab \in P$, so $ab > 0$, proving claim 3. [step 1.3, L3, L1]

2.3 By distributivity $(b - a)c = bc - ac$, so step 1.4 gives $bc - ac \in P$, i.e. $ac < bc$: this is the forward direction of claim 4. [step 1.4, algebra, L1]

2.4 By L3 and distributivity $(b - a)(-c) = -((b - a)c) = -(bc - ac) = ac - bc$, so step 1.5 gives $ac - bc \in P$, i.e. $bc < ac$: this is the forward direction of claim 5. [step 1.5, L3, algebra, L1]

3.1 Conversely, assume $c > 0$ and $ac < bc$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $ac < bc$; if $b < a$ then the argument of step 2.3 applied to the pair $b < a$ gives $bc < ac$, so $bc - ac \in P$ (from $ac < bc$) while $ac - bc \in P$ (from $bc < ac$), putting the element $bc - ac$ and its negative $ac - bc$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 4. [assume-hyp, step 2.3, L4, L1, algebra]

4.1 Conversely, assume $c < 0$ and $bc < ac$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $bc < ac$; if $b < a$ then the argument of step 2.4 applied to the pair $b < a$ gives $ac < bc$, so $ac - bc \in P$ (from $bc < ac$) while $bc - ac \in P$ (from $ac < bc$), putting the element $ac - bc$ and its negative $bc - ac$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 5. [assume-hyp, step 2.4, L4, L1, algebra] ∎
````

### `lem-power-over-geometric-null`

````markdown
---
id: lem-power-over-geometric-null
kind: lemma
title: "For every $p > 0$ and every positive rational $\\alpha$, $n^{\\alpha}/(1+p)^n \\to 0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, def-integer-power, lem-power-laws, lem-power-monotone, lem-bernoulli-inequality, thm-nth-roots-exist, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-sign-rules, lem-of-add-order, lem-of-abs-value, prop-of-multiply-inequalities, def-real-limit, def-sequence, def-nat-order, thm-nat-linear-order, def-ordered-field]
justified_by: []
forward_refs: [ex-standard-limits-worked]
aliases: []
landmark: false
short: "$n^{\\alpha}/(1+p)^n \\to 0$"
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
    - title: "Bernoulli's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bernoulli%27s_inequality"
    - title: "Exponential growth (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponential_growth"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.20)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $p \in \mathbb{R}$ with $p > 0$ and let $\alpha \in \mathbb{Q}$ with
$\alpha > 0$. Write $\iota(n) := n \cdot 1_{\mathbb{R}}$ for the canonical
natural, with $\iota(0) := 0$, and let

$$w_k \;:=\; \frac{\iota(k)^{\alpha}}{(1+p)^{k}} \qquad (k \in \mathbb{N}),$$

the numerator being a rational power ([[def-rational-power]]) and the denominator
an integer power ([[def-integer-power]]). Then $w_k \to 0$
([[def-real-limit]]).

**Every term is defined, including the one at $k = 0$.** The supplementary clause
of [[def-rational-power]] gives $0^{\alpha} = 0$ for rational $\alpha > 0$, and
$(1+p)^0 = 1$, so $w_0 = 0$. No index shift is therefore needed here, in contrast
with the two root lemmas earlier on this page, where the *exponent* is the index.

In words: a fixed power of $n$ is beaten by any geometric sequence of ratio
$> 1$, however small the excess $p$ and however large the exponent $\alpha$.

## Facts & Assumptions

**Given:** A real $p > 0$ and a rational $\alpha > 0$; the base $\beta := 1 + p > 1$; the canonical naturals $\iota(n) = n \cdot 1_{\mathbb{R}}$ with $\iota(0) = 0$; and $w_k = \iota(k)^{\alpha}/\beta^{k}$.

[L1] Rational powers: $x^r$ is defined and positive for real $x > 0$ and rational $r$, and $0^{r} = 0$ for rational $r > 0$; the integer power $x^{m}$ is the rational power at exponent $m$; $(xy)^{r} = x^{r} y^{r}$, which persists for $x, y \ge 0$ when $r > 0$; $x^{-r} = 1/x^{r}$; and $(x^{r})^{s} = x^{rs}$ ([[def-rational-power]], [[lem-rational-power-laws]], [[def-integer-power]], [[thm-nth-roots-exist]]).

[L2] Monotonicity of rational powers: for rational $t > 0$, $x > 1$ implies $x^{t} > 1$; and for rational $t > 0$, $0 < x < y$ implies $x^{t} < y^{t}$ ([[lem-rational-power-monotone]]).

[L3] Integer powers: $x > 0$ implies $x^{m} > 0$, and $x^{m} x^{m'} = x^{m+m'}$, $(x^{m})^{m'} = x^{m m'}$ for integer exponents with $x \ne 0$ ([[lem-power-monotone]], [[lem-power-laws]]).

[L4] Bernoulli's inequality: $(1+x)^{n} \ge 1 + \iota(n) x$ for real $x \ge -1$ and natural $n$ ([[lem-bernoulli-inequality]]).

[L5] Canonical naturals: $\iota(n) > 0$ and invertible for $n \ge 1$, and $\iota$ is strictly increasing ([[lem-of-naturals-positive]], [[def-nat-order]], [[thm-nat-linear-order]]).

[L6] Reciprocal Archimedean property: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; and $0 < x < y$ gives $0 < 1/y < 1/x$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L7] Order arithmetic: [[lem-of-add-order]] and claim 4 of [[lem-of-sign-rules]] state the strict forms, that inequalities may be translated and added and that multiplication by a positive element preserves $<$; adjoining the case of equality gives the nonstrict forms used below. Products of nonnegative inequalities multiply in the nonstrict form stated by [[prop-of-multiply-inequalities]], and the order is total ([[def-ordered-field]]).

[L8] Convergence to $0$: it suffices to produce, for every real $\varepsilon > 0$, a threshold beyond which $|z_k| < \varepsilon$; and $|z| = z$ for $z \ge 0$ ([[def-real-limit]], [[def-sequence]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Since $\alpha > 0$ is rational, so is $1/\alpha$; put $\delta := \beta^{1/\alpha}$ and $\theta := \delta^{1/2}$. From $\beta > 1$ and $1/\alpha > 0$ we get $\delta > 1$, and from $\delta > 1$ and $1/2 > 0$ we get $\theta > 1$; hence $\theta - 1 > 0$ and $\delta > 0$, $\theta > 0$. [given, L1, L2, L7]

1.2 For every natural $n$ one has $\delta^{n} = \theta^{n} \theta^{n}$, because $\theta^{2} = (\delta^{1/2})^{2} = \delta$ and therefore $\delta^{n} = (\theta^{2})^{n} = \theta^{2n} = \theta^{n} \theta^{n}$. [given, L1, L3]

1.3 For every natural $k$ one has $w_k = u_k^{\alpha}$, where $u_k := \iota(k)/\delta^{k}$. Indeed $u_k = \iota(k) \cdot (1/\delta^{k})$ with both factors $\ge 0$, so $u_k^{\alpha} = \iota(k)^{\alpha} \big(1/\delta^{k}\big)^{\alpha} = \iota(k)^{\alpha}/\big(\delta^{k}\big)^{\alpha}$, and $\big(\delta^{k}\big)^{\alpha} = \delta^{k\alpha} = \big(\beta^{1/\alpha}\big)^{k\alpha} = \beta^{(1/\alpha)(k\alpha)} = \beta^{k}$. [given, L1, L3]

2.1 For every natural $n \ge 1$ one has $0 \le u_n < 1/\big(\iota(n)(\theta-1)(\theta-1)\big)$. Bernoulli's inequality applied to $\theta - 1 > 0$ gives $\theta^{n} \ge 1 + \iota(n)(\theta-1) > \iota(n)(\theta-1) > 0$, so multiplying this inequality by itself gives $\delta^{n} = \theta^{n}\theta^{n} > \iota(n)(\theta-1)\iota(n)(\theta-1) > 0$; dividing the positive $\iota(n)$ by the two positive quantities reverses the inequality and yields $u_n = \iota(n)/\delta^{n} < \iota(n)/\big(\iota(n)\iota(n)(\theta-1)(\theta-1)\big) = 1/\big(\iota(n)(\theta-1)(\theta-1)\big)$, while $u_n \ge 0$ because $\iota(n) > 0$ and $\delta^{n} > 0$. [step 1.1, step 1.2, L3, L4, L5, L6, L7]

3.1 The sequence $(u_k)$ converges to $0$. Note first $u_0 = \iota(0)/\delta^{0} = 0/1 = 0$. Given a real $\varepsilon > 0$, put $\eta := \varepsilon(\theta-1)(\theta-1) > 0$ and take a natural $m \ge 1$ with $1/m < \eta$. For $k \ge m$ we have $\iota(k) \ge \iota(m) > 0$, hence $1/\iota(k) \le 1/\iota(m) < \eta$, and therefore $0 \le u_k < 1/\big(\iota(k)(\theta-1)(\theta-1)\big) < \eta/\big((\theta-1)(\theta-1)\big) = \varepsilon$, so $|u_k| < \varepsilon$. [step 2.1, L5, L6, L7, L8]

4.1 The sequence $(w_k)$ converges to $0$. Given a real $\varepsilon > 0$, the element $\varepsilon^{1/\alpha}$ is a positive real, so by step 3.1 there is a threshold beyond which $0 \le u_k < \varepsilon^{1/\alpha}$. For such $k$: if $u_k = 0$ then $w_k = 0^{\alpha} = 0 < \varepsilon$, and if $u_k > 0$ then monotonicity of the rational power $\alpha$ in the base gives $w_k = u_k^{\alpha} < \big(\varepsilon^{1/\alpha}\big)^{\alpha} = \varepsilon^{(1/\alpha)\alpha} = \varepsilon$. In both cases $|w_k| = w_k < \varepsilon$, so $w_k \to 0$. [step 3.1, step 1.3, L1, L2, L8] ∎

## Remarks

- **The proof turns the problem into the single case $\alpha = 1$.** Writing
  $\beta = \delta^{\alpha}$ with $\delta := \beta^{1/\alpha}$ makes
  $w_k = \big(\iota(k)/\delta^{k}\big)^{\alpha}$, so it is enough to know that
  $n/\delta^{n} \to 0$ for a base $\delta > 1$, and then that a fixed positive
  rational power of a nonnegative null sequence is null. The exponent never has to
  be moved inside a limit.

- **Bernoulli is applied to the square root of the base, and that is essential.**
  Applied to $\delta$ itself it gives only $\delta^{n} \ge 1 + n(\delta-1)$, which
  makes $n/\delta^{n}$ bounded but not null. Applied to
  $\theta = \delta^{1/2}$ and then squared it gives
  $\delta^{n} > n^{2}(\theta-1)^{2}$, a quadratic lower bound, and one factor of
  $n$ is then left over to drive the quotient to $0$.

- **Why the route through the root test is not taken.** The chain of
  [[thm-ratio-root-inequality]] together with
  [[lem-nth-root-of-n-tends-to-one]] would give
  $\limsup_k w_k^{1/k} \le \limsup_k \big((k^{1/k})^{\alpha}\big)/\beta$, and
  closing that requires knowing $t_k \to 1 \Rightarrow t_k^{\alpha} \to 1$, that
  is the continuity of $x \mapsto x^{\alpha}$ at $x = 1$. That statement is not
  available in this library and is not proved on this page, so the argument above
  is made directly instead; it needs only Bernoulli and the Archimedean property.

- **The growth hierarchy this places.** Together with
  [[lem-factorial-beats-geometric]] it orders the three standard scales: a fixed
  power of $n$ is beaten by every geometric sequence of ratio $> 1$, and every
  geometric sequence is beaten by $k!$. Worked instances are collected in
  [[ex-standard-limits-worked]].
````

### `thm-algebra-of-limits`

````markdown
---
id: thm-algebra-of-limits
kind: theorem
title: "Algebra of limits: sums, scalar multiples, products and quotients"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-limit, def-sequence, lem-convergent-implies-bounded, lem-null-times-bounded, lem-of-triangle-inequality, lem-of-abs-value, cor-of-reverse-triangle, thm-of-archimedean, lem-of-inverse-positive, lem-rat-embeds-dense, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, thm-rat-ordered-field, thm-nat-linear-order, def-field, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "limits respect $+$, $\\cdot$, $/$"
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
    - title: "OpenStax Calculus Volume 2, §5.1 Sequences"
      url: "https://openstax.org/books/calculus-volume-2/pages/5-1-sequences"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]), and let $c \in \mathbb{R}$. Then

$$x_k + y_k \to x + y, \qquad c\,x_k \to c\,x, \qquad x_k - y_k \to x - y, \qquad x_k y_k \to x y,$$

and if in addition $y \ne 0$ and $y_k \ne 0$ for every $k \in \mathbb{N}$, then

$$\frac{1}{y_k} \to \frac{1}{y} \qquad \text{and} \qquad \frac{x_k}{y_k} \to \frac{x}{y}.$$

The quotient case rests on an eventual lower bound for $|y_k|$, proved below
rather than assumed: $|y_k| > |y|/2$ for all sufficiently large $k$.

## Facts & Assumptions

**Given:** Sequences $(x_k)$, $(y_k)$ of reals with $(x_k)$ converging to $x$ and $(y_k)$ converging to $y$, and a real $c$ ([[def-sequence]], [[def-real-limit]]). For the last two claims we assume in addition $y \ne 0$ and $y_k \ne 0$ for every $k$.

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Absolute value and the triangle inequality: $|uv| = |u|\,|v|$, $|u| \ge 0$, $|u| = 0$ if and only if $u = 0$, $|-u| = |u|$, and $|a + b| \le |a| + |b|$ ([[lem-of-abs-value]], [[lem-of-triangle-inequality]]).

[L3] Real versus rational $\varepsilon$: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$, by density ([[lem-rat-embeds-dense]]) or by the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$ ([[lem-of-inverse-positive]]); consequently the convergence test of [[def-real-limit]] may equivalently be run with real $\varepsilon > 0$ ([[def-sequence]]).

[L4] Convergent sequences are bounded ([[lem-convergent-implies-bounded]]), and a constant sequence $(c)$ is bounded by $|c|$ ([[def-sequence]]).

[L5] A null sequence times a bounded sequence is null ([[lem-null-times-bounded]]).

[L6] Reverse triangle inequality: $\bigl||u| - |v|\bigr| \le |u - v|$, hence $|u| \ge |v| - |v - u|$ ([[cor-of-reverse-triangle]]).

[L7] Inverses and order: $a > 0$ implies $a^{-1} > 0$; $0 < a < b$ implies $0 < b^{-1} < a^{-1}$; $(u^{-1})^{-1} = u$ for $u \ne 0$ ([[lem-of-inverse-positive]], [[def-field]]).

[L8] Order arithmetic in $\mathbb{R}$: adding a constant and adding inequalities preserve the order, multiplying a strict inequality by a positive factor preserves it, and $\le$ and $<$ compose transitively; trichotomy holds, and since $u \ge 0$ means $u > 0$ or $u = 0$, an element with $u \ge 0$ and $u \ne 0$ satisfies $u > 0$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-complete-ordered-field]], [[def-ordered-field]]). Moreover $2 = 1 + 1 > 0$ and $2$ is invertible: $0 < 1$ in any ordered field ([[cor-of-one-positive]]) and the positives are closed under addition, so $2 > 0$ and in particular $2 \ne 0$ ([[def-ordered-field]]), whence $2^{-1}$ exists ([[def-field]]).

[L9] Rational arithmetic: $\varepsilon/2$ is a rational $> 0$ whenever $\varepsilon$ is, and $\varepsilon/2 + \varepsilon/2 = \varepsilon$ ([[thm-rat-ordered-field]]); the order on $\mathbb{N}$ is total, so finitely many thresholds admit a common index ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Reduction to null sequences: for any sequence $(z_k)$ of reals and any real $z$, the statements "$(z_k)$ converges to $z$" and "$(z_k - z)$ converges to $0$" are literally the same condition, because $|(z_k - z) - 0| = |z_k - z|$ for every $k$. [L1, L2]

1.2 Sum rule, in general form. Let $(u_k) \to u$ and $(v_k) \to v$ be any convergent sequences of reals and let $\varepsilon > 0$ be rational; take $K_1$ with $|u_k - u| < \varepsilon/2$ for $k \ge K_1$ and $K_2$ with $|v_k - v| < \varepsilon/2$ for $k \ge K_2$, and let $K$ be an index at least as large as both. For $k \ge K$, $|(u_k + v_k) - (u + v)| = |(u_k - u) + (v_k - v)| \le |u_k - u| + |v_k - v| < \varepsilon/2 + \varepsilon/2 = \varepsilon$; hence $u_k + v_k \to u + v$, and in particular $x_k + y_k \to x + y$. [L1, L2, L8, L9, algebra]

1.3 Boundedness: every convergent sequence of reals is bounded, and every constant sequence $(d)$ is bounded by $|d|$. [L4]

1.4 Quotient preparation. Assume $y \ne 0$ and $y_k \ne 0$ for every $k$. Then $|y| > 0$ by [L2], so $|y|/2 > 0$; running the convergence test of $(y_k)$ with the real number $|y|/2$ as tolerance, which [L3] licenses, produces $K_0 \in \mathbb{N}$ with $|y_k - y| < |y|/2$ for all $k \ge K_0$. [L1, L2, L3, L7, L8, choose]

2.1 Scalar rule, in general form. Let $(u_k) \to u$ and let $d \in \mathbb{R}$. By step 1.1 the sequence $(u_k - u)$ is null and by step 1.3 the constant sequence $(d)$ is bounded, so $(d(u_k - u)) = (d u_k - d u)$ is null by [L5]; by step 1.1 again, $d u_k \to d u$, and in particular $c x_k \to c x$. [step 1.1, step 1.3, L5, algebra]

2.2 Product rule, in general form. Let $(u_k) \to u$ and $(v_k) \to v$, and write $u_k v_k - u v = u_k(v_k - v) + v(u_k - u)$. By step 1.1 both $(v_k - v)$ and $(u_k - u)$ are null; by step 1.3 both $(u_k)$ and the constant sequence $(v)$ are bounded; so both $(u_k(v_k - v))$ and $(v(u_k - u))$ are null by [L5], and their sum is null by step 1.2 applied with both limits equal to $0$. By step 1.1, $u_k v_k \to u v$, and in particular $x_k y_k \to x y$. [step 1.1, step 1.2, step 1.3, L5, algebra]

2.3 Eventual lower bound. For every $k \ge K_0$, the reverse triangle inequality gives $|y_k| \ge |y| - |y - y_k| = |y| - |y_k - y| > |y| - |y|/2 = |y|/2 > 0$; so $|y_k| > |y|/2$ for all $k \ge K_0$, and in particular $|y_k| \ne 0$ there. [step 1.4, L2, L6, L8]

3.1 Difference rule. Applying step 2.1 to the sequence $(y_k)$ with $d = -1$ gives $-y_k \to -y$; the sum rule of step 1.2 applied to $(x_k)$ and $(-y_k)$ then gives $x_k - y_k = x_k + (-y_k) \to x + (-y) = x - y$. [step 1.2, step 2.1, L8, algebra]

3.2 Reciprocal estimate. For $k \ge K_0$ we have $y_k \ne 0$ and $|y_k| > |y|/2 > 0$, so [L7] applied to $0 < |y|/2 < |y_k|$ gives $0 < |y_k|^{-1} < 2/|y|$, and therefore $\left|\dfrac{1}{y_k} - \dfrac{1}{y}\right| = \dfrac{|y - y_k|}{|y_k|\,|y|} \le \dfrac{2}{|y|^2}\,|y_k - y|$. [step 2.3, L2, L7, L8, algebra]

4.1 Reciprocal rule. Let $\varepsilon > 0$ be an arbitrary real and put $\eta := \varepsilon |y|^2/2$, a real $> 0$; by [L3] there is $K_1$ with $|y_k - y| < \eta$ for all $k \ge K_1$. For every $k$ at least as large as both $K_0$ and $K_1$, step 3.2 gives $\left|\dfrac{1}{y_k} - \dfrac{1}{y}\right| \le \dfrac{2}{|y|^2}|y_k - y| < \dfrac{2}{|y|^2}\,\eta = \varepsilon$; hence $1/y_k \to 1/y$. [step 3.2, L1, L3, L7, L8, L9, algebra]

5.1 Quotient rule. By step 4.1 the sequence $(1/y_k)$ converges to $1/y$, so the product rule of step 2.2 applied to $(x_k)$ and $(1/y_k)$ gives $x_k/y_k = x_k \cdot (1/y_k) \to x \cdot (1/y) = x/y$. [step 2.2, step 4.1, algebra]

6.1 All the claims are established: the sum rule in step 1.2, the scalar rule in step 2.1, the difference rule in step 3.1, the product rule in step 2.2, and the reciprocal and quotient rules in steps 4.1 and 5.1. [step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1] ∎

## Remarks

- **The quotient case is where proofs usually cheat.** The estimate $|1/y_k - 1/y| = |y - y_k| / (|y_k||y|)$ is worthless until $|y_k|$ is known to stay away from $0$: without a lower bound the denominator can be arbitrarily small and the fraction arbitrarily large, even while $|y - y_k|$ shrinks. Step 2.3 supplies that bound, $|y_k| > |y|/2$ for $k \ge K_0$, and it is proved from the reverse triangle inequality, not assumed.

- The hypothesis $y_k \ne 0$ for every $k$ is only there so that $1/y_k$ is defined for every index. It is not needed for the limit: step 2.3 shows $|y_k| > |y|/2 > 0$ from $K_0$ on, so a sequence with $y \ne 0$ has at most finitely many zero terms, and by [[lem-limit-of-tail]] one may pass to the $K_0$-th tail and read the conclusion there.

- The hypothesis $y \ne 0$ cannot be dropped. With $x_k = 1$ and $y_k = 1/(k+1)$, both sequences converge: the first is constant ([[def-sequence]]) and the second is null ([[fs-limit-preserves-strict-inequality]]), so $y = 0$. Yet $x_k/y_k = k+1$, and no real $M$ bounds every $k+1$, by the Archimedean property ([[thm-of-archimedean]]); so the quotient sequence is unbounded, hence not convergent by [[lem-convergent-implies-bounded]].

- Nothing in the proof uses completeness of $\mathbb{R}$ beyond the Archimedean property invoked in [L3], so the same rules hold verbatim for sequences of rationals.
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

### `thm-ratio-root-inequality`

````markdown
---
id: thm-ratio-root-inequality
kind: theorem
title: "For $a_k > 0$: $\\liminf a_{k+1}/a_k \\le \\liminf a_k^{1/k} \\le \\limsup a_k^{1/k} \\le \\limsup a_{k+1}/a_k$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-limsup-liminf, lem-limsup-epsilon-characterisation, lem-liminf-le-limsup, lem-limsup-monotone-comparison, lem-limsup-exists, lem-extended-reals-complete, thm-convergence-iff-limsup-equals-liminf, def-extended-reals, def-divergence-to-infinity, thm-nth-roots-exist, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, lem-nth-root-of-constant-tends-to-one, lem-power-monotone, def-integer-power, lem-power-laws, thm-of-archimedean, cor-archimedean-reciprocal, lem-of-inverse-positive, thm-algebra-of-limits, thm-induction-principle, lem-rat-embeds-dense, lem-of-add-order, lem-of-sign-rules, prop-of-multiply-inequalities, def-sequence, def-real-limit, def-upper-bound, def-partial-order, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [ex-ratio-fails-root-succeeds, ex-strict-ratio-root-chain]
aliases: []
landmark: true
short: "ratio-to-root chain"
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
    - title: "Root test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Root_test"
    - title: "Ratio test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ratio_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.37)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "University of Maryland Math 410, Notes on the Real Numbers"
      url: "https://math.umd.edu/~lvrmr/2010-2011-F/Classes/MATH410/NOTES/Reals.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)_{k \in \mathbb{N}}$ be a sequence of reals ([[def-sequence]]) with
$a_k > 0$ for every $k$. Put

$$q_k := \frac{a_{k+1}}{a_k}, \qquad r_k := a_{k+1}^{1/(k+1)} \qquad (k \in \mathbb{N}),$$

with roots as in [[thm-nth-roots-exist]] and [[def-rational-power]]. Then, in
$\overline{\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]),

$$\liminf_{k} q_k \;\le\; \liminf_{k} r_k \;\le\; \limsup_{k} r_k \;\le\; \limsup_{k} q_k .$$

**The root sequence must start at index $1$, and $(r_k)$ is the shift that makes
it a sequence on $\mathbb{N}$.** The classical statement writes $a_n^{1/n}$, which
is meaningful only for $n \ge 1$, since $1/0$ is not a rational number; sequences
here are functions on $\mathbb{N}$ and $\mathbb{N}$ contains $0$
([[def-sequence]]), so the root family is written $r_k = a_{k+1}^{1/(k+1)}$,
which is $a_n^{1/n}$ reindexed by $n = k+1$. The ratio family $q_k$ needs no
shift, and the four quantities in the display are those of the two sequences
$(q_k)$ and $(r_k)$ exactly as written here.

**This is why the root test dominates the ratio test.** If the ratios converge,
the outer two quantities coincide and the chain forces the roots to converge to
the same value; but the roots can converge when the ratios do not, and then the
chain is strict at both ends. Both phenomena are exhibited by named examples on
the companion page.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k > 0$ for every $k$; the ratio sequence $q_k = a_{k+1}/a_k$; the root sequence $r_k = a_{k+1}^{1/(k+1)}$; and $\iota(n) = n \cdot 1_{\mathbb{R}}$ for the canonical naturals.

[L1] Tail ranges, extended tail bounds and the two quantities exist for every sequence, with $s_n$ the least upper bound of the $n$-th tail range and $i_n$ its greatest lower bound, $\limsup = \inf\{s_n\}$ and $\liminf = \sup\{i_n\}$ ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total and transitive, $+\infty$ is greatest and $-\infty$ least, it restricts on $\mathbb{R}$ to the order of $\mathbb{R}$, and an element between two reals is real ([[def-extended-reals]], [[def-partial-order]]).

[L3] Epsilon characterisation, for a real $L$: $L = \limsup_k z_k$ gives $z_k < L + \varepsilon$ eventually for every real $\varepsilon > 0$; $L = \liminf_k z_k$ gives $z_k > L - \varepsilon$ eventually for every real $\varepsilon > 0$ ([[lem-limsup-epsilon-characterisation]]).

[L4] $\liminf_k z_k \le \limsup_k z_k$ ([[lem-liminf-le-limsup]]).

[L5] Comparison: $z_k \le w_k$ eventually implies $\limsup_k z_k \le \limsup_k w_k$ and $\liminf_k z_k \le \liminf_k w_k$ ([[lem-limsup-monotone-comparison]]).

[L6] A sequence converging to a real $c$ has $\limsup = \liminf = c$; and $\liminf_k z_k = +\infty$ implies $z_k \to +\infty$, hence $z_k > M$ eventually for every real $M$ ([[thm-convergence-iff-limsup-equals-liminf]], [[def-divergence-to-infinity]]).

[L7] For every real $C > 0$ the sequence $C^{1/(k+1)}$ converges to $1$ ([[lem-nth-root-of-constant-tends-to-one]]).

[L8] Algebra of limits: a scalar multiple of a convergent sequence converges to the scalar multiple of the limit ([[thm-algebra-of-limits]]).

[L9] Roots and powers of positive reals: $x^{1/n}$ exists, is unique and is $> 0$ for $x > 0$ and $n \ge 1$; $(xy)^{1/n} = x^{1/n} y^{1/n}$; the integer power $x^n$ is the rational power at exponent $n$, so $(x^n)^{1/n} = x^{n \cdot (1/n)} = x$; $x^{-m} = 1/x^m$ and $x^{m} x^{m'} = x^{m+m'}$ for integer exponents and $x \ne 0$; $x^n > 0$ for $x > 0$; and $0 \le x \le y$ implies $x^{1/n} \le y^{1/n}$ ([[thm-nth-roots-exist]], [[def-rational-power]], [[lem-rational-power-laws]], [[lem-rational-power-monotone]], [[def-integer-power]], [[lem-power-laws]], [[lem-power-monotone]]).

[L10] Induction principle ([[thm-induction-principle]]).

[L11] Archimedean facts: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; and $0 < x < y$ gives $0 < 1/y < 1/x$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L12] Order arithmetic: [[lem-of-add-order]] and claim 4 of [[lem-of-sign-rules]] state the strict forms, that inequalities may be translated and added and that multiplication by a positive element preserves $<$; adjoining the case of equality, where both sides move or scale alike, gives the nonstrict forms used below. Products of nonnegative inequalities multiply in the nonstrict form stated by [[prop-of-multiply-inequalities]], and the order on $\mathbb{R}$ is total.

[L13] Strictly between any two reals lies a rational ([[lem-rat-embeds-dense]]).

[L14] The order on $\mathbb{N}$ is total and transitive ([[def-nat-order]], [[thm-nat-linear-order]], [[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Every $q_k$ is positive, being a quotient of positive reals, and every $r_k$ is positive, being a root of the positive real $a_{k+1}$. Hence $0$ is a lower bound of every tail range of $(q_k)$ and of $(r_k)$, so every tail infimum is $\ge 0$ and therefore $\liminf_k q_k \ge 0$ and $\liminf_k r_k \ge 0$; with [L4] this also gives $\limsup_k q_k \ge 0$. [given, L1, L2, L4, L9, L11]

1.2 Let $c > 0$ be real, let $N \in \mathbb{N}$ and put $C := a_N c^{-N}$, a positive real. If $a_{k+1} \le c\,a_k$ for every $k \ge N$ then $a_n \le C c^n$ for every $n \ge N$; if $a_{k+1} \ge c\,a_k$ for every $k \ge N$ then $a_n \ge C c^n$ for every $n \ge N$. Both are inductions on $j$ for $n = N + j$: at $j = 0$ one has $C c^N = a_N c^{-N} c^N = a_N c^0 = a_N$, and the inductive step multiplies the bound at $n$ by the positive $c$ and uses the hypothesis at $k = n$. [given, L9, L10, L12]

1.3 Let $C > 0$ and $c > 0$ be real and $n \ge 1$ a natural. Then $(C c^n)^{1/n} = C^{1/n} (c^n)^{1/n} = C^{1/n} c$. Consequently $0 < a_n \le C c^n$ gives $a_n^{1/n} \le C^{1/n} c$, and $a_n \ge C c^n > 0$ gives $a_n^{1/n} \ge C^{1/n} c$, since $x \mapsto x^{1/n}$ is nondecreasing on the nonnegative reals. [given, L9]

1.4 For real $C > 0$ and $c > 0$ the sequence $u_k := C^{1/(k+1)} c$ converges to $c$, by [L7] and the scalar rule; hence $\limsup_k u_k = \liminf_k u_k = c$. [given, L6, L7, L8]

1.5 If $\limsup_k q_k = +\infty$ then $\limsup_k r_k \le \limsup_k q_k$, since $+\infty$ is the greatest element of $\overline{\mathbb{R}}$. [given, L2]

2.1 Suppose $\beta := \limsup_k q_k$ is real, and let $\varepsilon > 0$ be an arbitrary real. Put $c := \beta + \varepsilon$, which is positive since $\beta \ge 0$. By [L3] there is $N$ with $q_k < c$ for all $k \ge N$, that is $a_{k+1} < c\,a_k$ after multiplying by $a_k > 0$; so $a_{k+1} \le c\,a_k$ for $k \ge N$, and step 1.2 gives $a_n \le C c^n$ for all $n \ge N$ with $C := a_N c^{-N} > 0$. For $k \ge N$ the index $n := k+1$ satisfies $n \ge N$ and $n \ge 1$, so step 1.3 gives $r_k \le C^{1/(k+1)} c = u_k$. By step 1.4 and [L5], $\limsup_k r_k \le \limsup_k u_k = c = \beta + \varepsilon$. [step 1.1, step 1.2, step 1.3, step 1.4, L3, L5, L12, L14]

2.2 If $\alpha := \liminf_k q_k = 0$ then $\liminf_k r_k \ge 0 = \alpha$ by step 1.1. [step 1.1]

2.3 Suppose $\alpha := \liminf_k q_k > 0$ and let $c$ be a real with $0 < c < \alpha$. Then $q_k > c$ eventually: if $\alpha$ is real this is [L3] applied with $\varepsilon := \alpha - c > 0$, and if $\alpha = +\infty$ then $q_k \to +\infty$ by [L6], so $q_k > c$ eventually. Fix $N$ with $q_k > c$ for all $k \ge N$; then $a_{k+1} \ge c\,a_k$ for $k \ge N$, so step 1.2 gives $a_n \ge C c^n$ for all $n \ge N$ with $C := a_N c^{-N} > 0$, and step 1.3 gives $r_k \ge C^{1/(k+1)} c = u_k$ for every $k \ge N$. By step 1.4 and [L5], $\liminf_k r_k \ge \liminf_k u_k = c$. [step 1.1, step 1.2, step 1.3, step 1.4, L3, L5, L6, L12, L14]

3.1 Hence $\limsup_k r_k \le \limsup_k q_k$. By step 1.1 the element $\beta = \limsup_k q_k$ is $\ge 0$, so it is either $+\infty$, which is step 1.5, or real. In the real case step 2.1 with $\varepsilon = 1$ gives $\limsup_k r_k \le \beta + 1$, a real, so $\limsup_k r_k \ne +\infty$; if $\limsup_k r_k = -\infty$ it is $\le \beta$; and otherwise it is a real $S$, and $S > \beta$ would give, on choosing a natural $m \ge 1$ with $1/m < S - \beta$ and applying step 2.1 with $\varepsilon = 1/m$, the impossibility $S \le \beta + 1/m < S$. By totality $\limsup_k r_k \le \beta$. [step 2.1, step 1.5, step 1.1, L2, L11, L12]

3.2 Hence $\liminf_k q_k \le \liminf_k r_k$. By step 1.1 the element $\alpha = \liminf_k q_k$ is $\ge 0$, so it is $0$, or a positive real, or $+\infty$. The first case is step 2.2. If $\alpha$ is a positive real and $\liminf_k r_k < \alpha$, then $\liminf_k r_k$ lies between the reals $0$ and $\alpha$ by step 1.1 and is therefore real, so [L13] supplies a real $c$ with $\liminf_k r_k < c < \alpha$, necessarily $c > 0$; step 2.3 then gives $\liminf_k r_k \ge c$, contradicting $c > \liminf_k r_k$, so $\liminf_k r_k \ge \alpha$ by totality. If $\alpha = +\infty$, step 2.3 gives $\liminf_k r_k \ge c$ for every real $c$ with $c > 0$, so $\liminf_k r_k$ is not $-\infty$, and it is not a real $t$ either, since $t \ge 0$ by step 1.1 and then $c := t+1 > 0$ would give $t \ge t+1$; hence $\liminf_k r_k = +\infty = \alpha$. [step 2.2, step 2.3, step 1.1, L2, L12, L13]

4.1 Combining the three links, $\liminf_k q_k \le \liminf_k r_k$ by step 3.2, $\liminf_k r_k \le \limsup_k r_k$ by [L4], and $\limsup_k r_k \le \limsup_k q_k$ by step 3.1. [step 3.1, step 3.2, L4] ∎

## Remarks

- **The mechanism is that a ratio bound integrates to a geometric bound.** If the
  ratios are eventually below $c$ then the terms are eventually below a constant
  times $c^n$, and taking $n$-th roots turns the constant into $C^{1/n}$, which
  tends to $1$ by [[lem-nth-root-of-constant-tends-to-one]]. That single lemma is
  what makes the constant disappear, and it is the only analytic input; everything
  else is the comparison lemma [[lem-limsup-monotone-comparison]] and order
  bookkeeping.

- **All four quantities can be different, and the two outer inequalities can both
  be strict.** [[ex-strict-ratio-root-chain]] gives a positive sequence with
  chain $0 < 1/3 < 1/2 < +\infty$, so no two of the four coincide, and
  [[ex-ratio-fails-root-succeeds]] is the standard witness in which the roots
  converge while the ratios oscillate across $1$.

- **The chain also explains the practical rule.** When
  $\limsup_k q_k < 1$ the chain forces $\limsup_k r_k < 1$, so any conclusion
  drawn from the roots is available from the ratios; but
  $\limsup_k r_k < 1$ can hold with $\limsup_k q_k > 1$, and then only the root
  side is usable. This is the sense in which the root criterion is the stronger
  of the two.

- **The hypothesis $a_k > 0$ is needed at every index, not merely eventually.**
  The ratios must be defined, which needs $a_k \ne 0$, and the roots must be
  defined, which needs $a_{k+1} \ge 0$; positivity also lets the ratio
  inequalities be cleared of denominators. A sequence positive only from some
  index on can be handled by passing to that tail, which changes none of the four
  quantities.
````

