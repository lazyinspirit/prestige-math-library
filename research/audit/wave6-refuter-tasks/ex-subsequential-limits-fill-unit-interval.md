## Target item — `ex-subsequential-limits-fill-unit-interval`

Normalized current SHA-256: `d664b9f6cb19a78775591d71b3601a9fd83f10b9faea55df37dfca9c508c542d`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-subsequential-limits-fill-unit-interval
kind: example
title: "The block sequence $1/1;\\ 1/2, 2/2;\\ 1/3, 2/3, 3/3;\\ \\dots$ has subsequential limit set exactly $[0,1]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-subsequential-limit, def-interval, def-limsup-liminf, thm-limsup-is-greatest-subsequential-limit, cor-liminf-is-least-subsequential-limit, def-extended-limits, def-extended-reals, lem-limsup-exists, lem-extended-reals-complete, thm-recursion, thm-well-ordering-principle, thm-induction-principle, lem-index-map-grows, lem-limit-preserves-order, lem-convergent-implies-bounded, def-divergence-to-infinity, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-sign-rules, lem-of-add-order, prop-of-multiply-inequalities, lem-of-abs-value, def-abs-value, def-sequence, def-real-limit, def-natural-numbers, def-nat-order, thm-nat-linear-order, lem-nat-discrete, def-upper-bound, def-partial-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Example

Write $\iota(n) = n \cdot 1_{\mathbb{R}}$ for the canonical natural. Let
$c : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ be the function supplied by the
recursion theorem ([[thm-recursion]]) from the starting element $(1,1)$ and the
function

$$F(m, j) := (m,\, j+1) \ \text{ if } j < m, \qquad F(m, j) := (m+1,\, 1) \ \text{ if } j = m,$$

write $c_k = (m_k, j_k)$, and define the sequence of reals

$$x_k \;:=\; \frac{\iota(j_k)}{\iota(m_k)} \qquad (k \in \mathbb{N}).$$

Its first terms are

$$\frac{1}{1};\quad \frac{1}{2}, \frac{2}{2};\quad \frac{1}{3}, \frac{2}{3}, \frac{3}{3};\quad \frac{1}{4}, \dots$$

the blocks being the successive values of $m$. Then the subsequential limit set
([[def-subsequential-limit]]) is the whole unit interval ([[def-interval]]),

$$\operatorname{SL}(x) = [0,1],$$

and consequently $\limsup_k x_k = 1$ and $\liminf_k x_k = 0$
([[def-limsup-liminf]]).

**The recursion replaces the block bookkeeping.** Presenting the sequence by the
partial sums $1 + 2 + \dots + (m-1)$ that mark where each block begins would
require inverting that count at every index. Carrying the pair $(m, j)$ along
instead makes each term's block and position immediately available, and the three
facts the argument needs, that $1 \le j_k \le m_k$, that $m_k \le k+1$, and that
every admissible pair occurs, are then three short inductions.

## Facts & Assumptions

**Given:** The recursion $c_k = (m_k, j_k)$ described above, the sequence $x_k = \iota(j_k)/\iota(m_k)$, and a real number $y$ with $0 \le y \le 1$.

[L1] Recursion theorem: for a set $A$, an element $a \in A$ and $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g_0 = a$ and $g_{k+1} = f(g_k)$ ([[thm-recursion]], [[def-natural-numbers]]).

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] Index maps: if $n_i < n_{i+1}$ for every $i$ then $n$ is strictly increasing, and then $n_i \ge i$; the composite $(x_{n_i})$ is a subsequence, and $L \in \operatorname{SL}(x)$ means some subsequence converges to $L$ ([[lem-index-map-grows]], [[def-sequence]], [[def-subsequential-limit]], [[def-real-limit]]).

[L5] Canonical naturals: $\iota(n) > 0$ and invertible for $n \ge 1$, $\iota$ is strictly increasing, $\iota(1) = 1$, and $\iota(n+n') = \iota(n) + \iota(n')$ ([[lem-of-naturals-positive]]).

[L6] Order arithmetic: claim 4 of [[lem-of-sign-rules]], [[lem-of-add-order]] and [[lem-of-inverse-positive]] state the strict forms, that multiplication by a positive element preserves $<$, that inequalities may be translated and added, and that $0 < u < v$ gives $0 < 1/v < 1/u$; adjoining the case of equality, where the two sides coincide, gives the nonstrict forms used below. Products of nonnegative inequalities multiply in the nonstrict form stated by [[prop-of-multiply-inequalities]], and the order is total ([[def-ordered-field]], [[def-complete-ordered-field]]).

[L7] Reciprocal Archimedean property: for every real $\eta > 0$ there is a natural $p \ge 1$ with $1/p < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L8] Limits preserve non-strict inequalities ([[lem-limit-preserves-order]]); a convergent sequence is bounded and a sequence diverging to $\pm\infty$ is unbounded ([[lem-convergent-implies-bounded]], [[def-divergence-to-infinity]]).

[L9] The interval $[0,1] = \{t \in \mathbb{R} : 0 \le t \le 1\}$, with least element $0$ and greatest element $1$ ([[def-interval]]).

[L10] $\limsup_k x_k$ is the greatest and $\liminf_k x_k$ the least element of $\overline{\operatorname{SL}}(x)$, whose real part is $\operatorname{SL}(x)$ ([[thm-limsup-is-greatest-subsequential-limit]], [[cor-liminf-is-least-subsequential-limit]], [[def-extended-limits]], [[def-extended-reals]], [[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L11] Absolute value: $|t| \le \eta$ if and only if $-\eta \le t \le \eta$; and the order on $\mathbb{N}$ is total with $k < k+1$ ([[lem-of-abs-value]], [[def-abs-value]], [[def-nat-order]], [[thm-nat-linear-order]], [[lem-nat-discrete]]).

## Verification

**Proof technique:** constructive.

1.1 The recursion theorem applied to $A = \mathbb{N} \times \mathbb{N}$, the element $(1,1)$ and the function $F$ gives a unique $c$ with $c_0 = (1,1)$ and $c_{k+1} = F(c_k)$, so $(m_k, j_k)$ and hence $x_k$ are well defined once $m_k \ge 1$ is known. [given, L1]

1.2 For every $k$ one has $1 \le j_k \le m_k$: this holds at $k = 0$, where $(m_0, j_0) = (1,1)$; and if $1 \le j_k \le m_k$ then either $j_k < m_k$, so that $c_{k+1} = (m_k, j_k + 1)$ with $1 \le j_k + 1 \le m_k$, or $j_k = m_k$, so that $c_{k+1} = (m_k + 1, 1)$ with $1 \le 1 \le m_k + 1$. The claim follows by induction on $k$; in particular $m_k \ge 1$ always, so $\iota(m_k) > 0$ and $x_k$ is defined. [given, L2, L5, L11]

1.3 For every $k$ one has $m_k \le k+1$: at $k = 0$, $m_0 = 1$; and $m_{k+1}$ is $m_k$ or $m_k + 1$, so $m_{k+1} \le m_k + 1 \le k+2$. This is again an induction on $k$. [given, L2, L11]

1.4 For every natural $m \ge 1$ and every $j$ with $1 \le j \le m$ there is $k$ with $(m_k, j_k) = (m, j)$. Induct on $m$. For $m = 1$ the only admissible $j$ is $1$, realised at $k = 0$. Assume the claim for $m$ and apply it at $j = m$ to get $k$ with $(m_k, j_k) = (m, m)$; then $c_{k+1} = (m+1, 1)$, and a second induction on $i$ shows $c_{k+1+i} = (m+1, 1+i)$ for every $i \le m$: it holds at $i = 0$, and if it holds at $i < m$ then $1 + i < m + 1$, so $c_{k+2+i} = (m+1, 2+i)$. Hence every $j$ with $1 \le j \le m+1$ is realised in block $m+1$. [given, L1, L2, L11]

1.5 Let $y$ be a real with $0 \le y \le 1$. [given, L9]

2.1 For every $k$ one has $0 < x_k \le 1$: from $1 \le j_k \le m_k$ we get $0 < \iota(j_k) \le \iota(m_k)$, and dividing by $\iota(m_k) > 0$ gives $0 < x_k \le 1$. [step 1.2, L5, L6]

2.2 For every natural $m \ge 1$ the set $\{\, j \in \mathbb{N} : 1 \le j \le m \text{ and } y\,\iota(m) \le \iota(j) \,\}$ is nonempty, since $j = m$ belongs to it because $y \le 1$ gives $y\,\iota(m) \le \iota(m)$; let $J(m)$ be its least element. Then $y \le \iota(J(m))/\iota(m)$, and moreover $\iota(J(m))/\iota(m) \le y + 1/\iota(m)$: if $J(m) = 1$ this reads $1/\iota(m) \le y + 1/\iota(m)$, true because $y \ge 0$; and if $J(m) > 1$ then $j := J(m) - 1$ satisfies $1 \le j \le m$ and $j < J(m)$, so minimality gives $\iota(j) < y\,\iota(m)$, that is $\iota(J(m)) - 1 < y\,\iota(m)$, and dividing by $\iota(m) > 0$ gives the bound. Hence $0 \le \iota(J(m))/\iota(m) - y \le 1/\iota(m)$. [step 1.5, L3, L5, L6, L11]

3.1 For every $L \in \operatorname{SL}(x)$ one has $0 \le L \le 1$, since a subsequence of $(x_k)$ converging to $L$ satisfies $0 \le x_{n_i} \le 1$ at every index by step 2.1, and limits preserve non-strict inequalities. So $\operatorname{SL}(x) \subseteq [0,1]$. [step 2.1, L4, L8, L9]

3.2 For every natural $m \ge 1$ the set $\{\, k \in \mathbb{N} : (m_k, j_k) = (m, J(m)) \,\}$ is nonempty by step 1.4, since $1 \le J(m) \le m$; let $K(m)$ be its least element. Then $x_{K(m)} = \iota(J(m))/\iota(m)$, so $|x_{K(m)} - y| \le 1/\iota(m)$ by step 2.2, and $m = m_{K(m)} \le K(m) + 1$ by step 1.3. [step 1.4, step 1.3, step 2.2, L3, L11]

4.1 Define $f : \mathbb{N} \to \mathbb{N}$ by $f(n) := K(n+2)$; then $f(n) \ge (n+2) - 1 = n+1 > n$ and $|x_{f(n)} - y| \le 1/\iota(n+2)$. The recursion theorem applied to $\mathbb{N}$, the element $K(1)$ and the function $f$ gives $n : \mathbb{N} \to \mathbb{N}$ with $n_0 = K(1)$ and $n_{i+1} = f(n_i)$; it is strictly increasing, so $n_i \ge i$, and $|x_{n_{i+1}} - y| \le 1/\iota(n_i + 2) \le 1/\iota(i+2)$. [step 3.2, L1, L4, L5, L6, construct]

5.1 The subsequence $(x_{n_i})$ converges to $y$: given a real $\varepsilon > 0$, take a natural $p \ge 1$ with $1/p < \varepsilon$; every $i \ge p$ satisfies $i \ge 1$, so step 4.1 applied at $i-1$ gives $|x_{n_i} - y| \le 1/\iota(i+1)$, and $i + 1 > p$ gives $1/\iota(i+1) < 1/p < \varepsilon$. Hence $y \in \operatorname{SL}(x)$, and since $y$ was an arbitrary element of $[0,1]$, $[0,1] \subseteq \operatorname{SL}(x)$. [step 4.1, step 1.5, L4, L5, L6, L7, L11]

6.1 Therefore $\operatorname{SL}(x) = [0,1]$. The sequence is bounded by step 2.1, so every subsequence of it is bounded and none diverges to $\pm\infty$; hence $\overline{\operatorname{SL}}(x) = \operatorname{SL}(x) = [0,1]$, whose greatest element is $1$ and least element $0$, and [L10] gives $\limsup_k x_k = 1$ and $\liminf_k x_k = 0$. [step 5.1, step 3.1, step 2.1, L8, L9, L10, discharge-construct] ∎

## Remarks

- **Every point of $[0,1]$ is approached, and the rate is the block width.** In
  block $m$ the terms are $1/m, 2/m, \dots, m/m$, spaced $1/m$ apart and covering
  $(0,1]$, so any target in $[0,1]$ has a term of block $m$ within $1/m$ of it.
  Since blocks of every width occur, and occur arbitrarily late, this produces a
  subsequence converging to the target. That is the whole idea; steps 2.2 and 3.2
  only make the choice of term canonical, by taking a least element rather than
  an arbitrary one, so that no choice principle is used.

- **The set is closed, as it must be.** $[0,1]$ contains the limit of every
  convergent sequence of its own points, which is what
  [[thm-subsequential-limit-set-closed]] predicts for any subsequential limit set.
  This example shows the prediction is not vacuous: the set here is an entire
  interval, in contrast with the two-point set of
  [[ex-limsup-of-alternating-sequence]].

- **Neither endpoint is a value of the sequence in the case of $0$.** Every term
  is $> 0$ by step 2.1, so $0 \in \operatorname{SL}(x)$ is a genuine limit and
  not an attained value, while $1$ is attained, once in every block. Subsequential
  limits need not be values, and values need not be subsequential limits.

- **Why the sequence is not written by a closed formula.** The classical
  presentation defines $x_k$ by first solving $m(m-1)/2 \le k < m(m+1)/2$ for $m$,
  which needs a least-element argument at every index and a quadratic estimate to
  get $m \le k+1$. The recursion carries the block and position forward instead,
  and the estimate $m_k \le k+1$ becomes the one-line induction of step 1.3.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-recursion",
      "source_section": "Statement",
      "quote": "Let $(N,0,\\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \\in A$, and any function $f : A \\to A$, there is a unique function $g : N \\to A$ such that $g(0) = a$ and $g(\\sigma(n)) = f(g(n))$ for all $n \\in N$.",
      "uses": [
        "1.1",
        "1.4",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-natural-numbers",
      "source_section": "Definition",
      "quote": "The set of **natural numbers** is the **smallest inductive set**\n([[def-inductive-set]]),\n\n$$\\mathbb{N} = \\omega := \\bigcap\\,\\{\\, I : I \\text{ is inductive} \\,\\},$$\n\nwhich exists and is itself inductive by [[lem-omega-smallest-inductive]] (the\nAxiom of Infinity, [[def-axiom-of-infinity]], supplies one inductive set to\nintersect within, and Separation, [[def-axiom-schema-of-separation]], makes the\nintersection a set). On $\\mathbb{N}$ we take\n\n$$0 := \\varnothing, \\qquad \\sigma(n) := n \\cup \\{n\\},$$\n\nthe distinguished element and the successor function. Thus\n$0 = \\varnothing$, $1 = \\{0\\}$, $2 = \\{0, 1\\}$, $3 = \\{0, 1, 2\\}$, and in general\n$n = \\{0, 1, \\dots, n-1\\}$ is the set of its predecessors.",
      "uses": [
        "1.1",
        "1.4",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "uses": [
        "1.2",
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-well-ordering-principle",
      "source_section": "Statement",
      "quote": "Every nonempty subset $S \\subseteq \\mathbb{N}$ has a least element: there is $\\ell \\in S$ with $\\ell \\le s$ for all $s \\in S$.",
      "uses": [
        "2.2",
        "3.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-index-map-grows",
      "source_section": "Statement",
      "quote": "Let $n : \\mathbb{N} \\to \\mathbb{N}$ be a function, written $k \\mapsto n_k$, and\nrecall that $n$ is **strictly increasing** when $n_j < n_k$ whenever $j < k$\n([[def-sequence]], [[def-nat-order]]).\n\n1. **Consecutive comparisons suffice.** If $n_i < n_{\\sigma(i)}$ for every\n   $i \\in \\mathbb{N}$, then $n$ is strictly increasing.\n2. **Growth.** If $n$ is strictly increasing then $n_k \\ge k$ for every\n   $k \\in \\mathbb{N}$.\n\nClaim 1 is what one checks in practice when exhibiting a subsequence; claim 2 is\nwhat every later subsequence argument uses.",
      "uses": [
        "3.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],\n[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and\n$\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],\n[[def-nat-order]]).\n\nA **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write\n$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or\n$(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is\nthe subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$.\n\nLet $(x_k)$ be a sequence of reals and let $P$ be a property of indices.\n\n- $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for\n  every $k \\in \\mathbb{N}$; it is **unbounded** otherwise.\n- $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds\n  for every $k \\ge K$.\n- $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some\n  $k \\ge K$ for which $P(k)$ holds.\n- For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence\n  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is\n  again a sequence of reals.\n- A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if\n  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$\n  along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$;\n  it is again a sequence of reals.\n\n**Convergence and Cauchyness are not defined here.** They are already fixed, for\nsequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to\n$x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is\n$K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$\nis *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$\nwith $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the\ntoolkit for those two notions and does not restate them. A sequence\n**converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "3.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-subsequential-limit",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $L \\in \\mathbb{R}$.\nThen $L$ is a **subsequential limit** of $(x_k)$ when some subsequence of $(x_k)$\nconverges to $L$: that is, when there is a strictly increasing\n$n : \\mathbb{N} \\to \\mathbb{N}$ such that\n\n$$x_{n_j} \\longrightarrow L \\qquad (j \\to \\infty)$$\n\nin the sense of [[def-real-limit]]. The **subsequential limit set** of $(x_k)$ is\n\n$$\\operatorname{SL}(x) \\;:=\\; \\{\\, L \\in \\mathbb{R} : L \\text{ is a subsequential limit of } (x_k) \\,\\} \\subseteq \\mathbb{R}.$$\n\nBoth pieces of the definition are already fixed elsewhere and are only combined\nhere: *strictly increasing* and *subsequence* are [[def-sequence]], and\n*converges* is [[def-real-limit]]. Nothing about $(x_k)$ itself is assumed; in\nparticular $(x_k)$ is not assumed to converge, and $\\operatorname{SL}(x)$ may be\nempty, a single point, or larger.\n\n**A subsequence looks arbitrarily far out.** A strictly increasing index map\nsatisfies $n_j \\ge j$ for every $j$ ([[lem-index-map-grows]]), so the indices\n$n_j$ are cofinal in $\\mathbb{N}$ and a subsequential limit is determined by the\nbehaviour of $(x_k)$ at arbitrarily large indices. Consequently no finite\ninitial segment of $(x_k)$ affects $\\operatorname{SL}(x)$: a sequence and each of\nits tails have the same subsequential limits.\n\n**Terminology.** Some texts say *cluster point*, *limit point* or *accumulation\nvalue* of the sequence for the same notion. This library says *subsequential\nlimit* throughout, reserving *limit point* for the topological notion of a limit\npoint of a set, which is a different thing: the set $\\{x_k\\}$ of values of the\nconstant sequence $x_k = 0$ has no limit point, while $0$ is a subsequential\nlimit of that sequence.",
      "uses": [
        "3.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$. It is **Cauchy** when for\nevery rational $\\varepsilon > 0$ there is $K$ with\n$|x_k - x_l| < \\hat\\varepsilon$ for all $k, l \\ge K$.",
      "uses": [
        "3.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "1.2",
        "2.1",
        "2.2",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "2.1",
        "2.2",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "2.1",
        "2.2",
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
        "2.1",
        "2.2",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "prop-of-multiply-inequalities",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field. If $0 < a < b$ and $0 < c < d$ then $ac < bd$. If $0 \\le a \\le b$ and $0 \\le c \\le d$ then $ac \\le bd$.",
      "uses": [
        "2.1",
        "2.2",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "2.1",
        "2.2",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "2.1",
        "2.2",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that\n\n$$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$\n\nwhere $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and\n$1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard\nwe abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$.\n\nThis is the **reciprocal form** of the Archimedean property.\n[[thm-of-archimedean]] on its own delivers only the assertion that the canonical\nnaturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that\nthe reciprocals of the naturals get below every positive bound, is the statement\nabove, and it is recorded separately so that no proof has to reconstruct the\ninversion step in passing.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-limit-preserves-order",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to\n$x$ and $y$ respectively ([[def-real-limit]]). If $x_k \\le y_k$ eventually, that\nis for all $k$ from some index on, then\n\n$$\\lim_{k} x_k \\;\\le\\; \\lim_{k} y_k .$$\n\nIn particular, if $x_k \\ge 0$ eventually then $\\lim_k x_k \\ge 0$, and if\n$a \\le x_k \\le b$ eventually then $a \\le \\lim_k x_k \\le b$.\n\nThe conclusion is **not** strict, and cannot be made strict; see the remarks\nbelow and the false statement at the end of this page.",
      "uses": [
        "3.1",
        "6.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-convergent-implies-bounded",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals converging to $x \\in \\mathbb{R}$\n([[def-sequence]], [[def-real-limit]]). Then $(x_k)$ is bounded: there is\n$M \\in \\mathbb{R}$ with $|x_k| \\le M$ for every $k \\in \\mathbb{N}$.",
      "uses": [
        "3.1",
        "6.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-divergence-to-infinity",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\\mathbb{R}$ ordered\nas in [[def-real-order]] and [[def-complete-ordered-field]].\n\n- $(x_k)$ **diverges to $+\\infty$**, written $x_k \\to +\\infty$, when for every\n  $M \\in \\mathbb{R}$ there is $K \\in \\mathbb{N}$ such that $x_k > M$ for all\n  $k \\ge K$.\n- $(x_k)$ **diverges to $-\\infty$**, written $x_k \\to -\\infty$, when for every\n  $M \\in \\mathbb{R}$ there is $K \\in \\mathbb{N}$ such that $x_k < M$ for all\n  $k \\ge K$.\n\nEquivalently, in the language of [[def-sequence]]: $x_k \\to +\\infty$ when the\nproperty $x_k > M$ holds eventually, for every real $M$.",
      "uses": [
        "3.1",
        "6.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "1.5",
        "3.1",
        "6.1"
      ]
    },
    {
      "fact": "L10",
      "source": "thm-limsup-is-greatest-subsequential-limit",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and write\n$\\Lambda := \\limsup_{k} x_k \\in \\overline{\\mathbb{R}}$ ([[def-limsup-liminf]]).\nThen, with the extended subsequential limit set\n$\\overline{\\operatorname{SL}}(x)$ of [[def-extended-limits]]:\n\n1. $\\Lambda \\in \\overline{\\operatorname{SL}}(x)$: there is a strictly increasing\n   $n : \\mathbb{N} \\to \\mathbb{N}$ such that $(x_{n_j})$ converges to $\\Lambda$ in\n   $\\overline{\\mathbb{R}}$;\n2. $L \\le \\Lambda$ for every $L \\in \\overline{\\operatorname{SL}}(x)$.\n\nSo $\\overline{\\operatorname{SL}}(x)$ is **nonempty** and has a **greatest\nelement**, and that element is $\\limsup_k x_k$. In particular every sequence of\nreals whatever has a subsequence that converges in $\\overline{\\mathbb{R}}$.\n\n**The extended set is the right home for this statement, and the real set is\nnot.** The finite subsequential limit set $\\operatorname{SL}(x)$ of\n[[def-subsequential-limit]] may be empty, and when it is not it may have a\ngreatest element different from $\\limsup_k x_k$; both failures are exhibited by\nthe dedicated counterexample on the companion page. What is true for\n$\\operatorname{SL}(x)$ follows: when $\\Lambda$ is a real number, claim 1 puts it\nin $\\operatorname{SL}(x)$, since the two sets agree on $\\mathbb{R}$\n([[def-extended-limits]]), and claim 2 then makes it the greatest element there\ntoo.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L10",
      "source": "cor-liminf-is-least-subsequential-limit",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]). Then\n$\\liminf_{k} x_k \\in \\overline{\\operatorname{SL}}(x)$ and\n$\\liminf_{k} x_k \\le L$ for every $L \\in \\overline{\\operatorname{SL}}(x)$\n([[def-limsup-liminf]], [[def-extended-limits]]).\n\nSo the extended subsequential limit set of any real sequence has a **least**\nelement as well as a greatest one, and the two are\n$\\liminf_k x_k$ and $\\limsup_k x_k$ respectively\n([[thm-limsup-is-greatest-subsequential-limit]]). Every extended subsequential\nlimit lies between them.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L10",
      "source": "def-extended-limits",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let\n$L \\in \\overline{\\mathbb{R}}$ ([[def-extended-reals]]). Say that $(x_k)$\n**converges to $L$ in $\\overline{\\mathbb{R}}$** when one of the following holds,\naccording to which of the three kinds of element $L$ is:\n\n- $L \\in \\mathbb{R}$ and $(x_k)$ converges to $L$ in the sense of [[def-real-limit]];\n- $L = +\\infty$ and $x_k \\to +\\infty$ in the sense of [[def-divergence-to-infinity]];\n- $L = -\\infty$ and $x_k \\to -\\infty$ in the sense of [[def-divergence-to-infinity]].\n\nThen $L$ is an **extended subsequential limit** of $(x_k)$ when some subsequence\nof $(x_k)$ converges to $L$ in $\\overline{\\mathbb{R}}$: when there is a strictly\nincreasing $n : \\mathbb{N} \\to \\mathbb{N}$ ([[def-sequence]]) such that\n$(x_{n_j})_{j \\in \\mathbb{N}}$ converges to $L$ in the sense just given. The\n**extended subsequential limit set** of $(x_k)$ is\n\n$$\\overline{\\operatorname{SL}}(x) \\;:=\\; \\{\\, L \\in \\overline{\\mathbb{R}} : L \\text{ is an extended subsequential limit of } (x_k) \\,\\} \\subseteq \\overline{\\mathbb{R}}.$$\n\n**This extends the published [[def-subsequential-limit]] and does not replace\nit.** That definition is finite by design: there $L$ ranges over $\\mathbb{R}$ and\n$\\operatorname{SL}(x) \\subseteq \\mathbb{R}$. Its clause is quoted verbatim as the\nfirst of the three clauses above, so\n\n$$\\overline{\\operatorname{SL}}(x) \\cap \\mathbb{R} = \\operatorname{SL}(x),$$\n\nimmediately from the definitions: a real $L$ lies in\n$\\overline{\\operatorname{SL}}(x)$ exactly when some subsequence converges to $L$\nin the sense of [[def-real-limit]], which is exactly the condition\n$L \\in \\operatorname{SL}(x)$. The extended set is therefore\n$\\operatorname{SL}(x)$ together with at most the two extra points $\\pm\\infty$,\neach present exactly when some subsequence diverges to it. Nothing about\n$\\operatorname{SL}(x)$ is redefined, and every statement proved about\n$\\operatorname{SL}(x)$ elsewhere in the library remains a statement about the\nsame set.\n\n**Neither is [[def-divergence-to-infinity]] reinterpreted.** The phrase\n\"$x_k \\to +\\infty$\" keeps exactly the meaning fixed there, an abbreviation for\n\"for every real $M$, eventually $x_k > M$\". What is new is only that the phrase\nis now allowed to appear as one of three clauses in a single definition whose\nparameter $L$ ranges over $\\overline{\\mathbb{R}}$, so that the three situations\ncan be quantified over together. In particular the warning recorded there stands:\na sequence diverging to $+\\infty$ has no limit in $\\mathbb{R}$, and none of the\nrules of [[thm-algebra-of-limits]] applies to it.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L10",
      "source": "def-extended-reals",
      "source_section": "Definition",
      "quote": "Fix two objects $-\\infty$ and $+\\infty$, distinct from one another and neither of\nthem a real number ([[def-real-numbers]]), and set\n\n$$\\overline{\\mathbb{R}} := \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}.$$\n\nThis is a **new object**, introduced here explicitly with its own order and its\nown partial arithmetic. It is not an enlargement of the field $\\mathbb{R}$, and\nno operation of $\\mathbb{R}$ ([[def-complete-ordered-field]]) is redefined by\nanything below.\n\n**The order.** For $a, b \\in \\overline{\\mathbb{R}}$ declare\n\n$$a \\le b \\quad :\\Longleftrightarrow \\quad a = -\\infty \\ \\text{ or } \\ b = +\\infty \\ \\text{ or } \\ \\big(a, b \\in \\mathbb{R} \\text{ and } a \\le b \\text{ in } \\mathbb{R}\\big),$$\n\nwith $\\mathbb{R}$ ordered as in [[def-real-order]], and write $a < b$ for\n\"$a \\le b$ and $a \\ne b$\" as usual ([[def-partial-order]]).\n\n**$(\\overline{\\mathbb{R}}, \\le)$ is a totally ordered set, and the inclusion of\n$\\mathbb{R}$ preserves and reflects the order.** All four checks are immediate\nfrom the displayed clauses.\n\n- *Reflexive.* For $a = \\pm\\infty$ one of the first two clauses applies; for\n  $a \\in \\mathbb{R}$ the third does, since $a \\le a$ in $\\mathbb{R}$.\n- *Antisymmetric.* Suppose $a \\le b$ and $b \\le a$. If $a = -\\infty$ then\n  $b \\le a$ forces $b = -\\infty$, since the clause $a = +\\infty$ fails and $b, a$\n  are not both real. Symmetrically $b = -\\infty$ forces $a = -\\infty$, and\n  $a = +\\infty$ or $b = +\\infty$ forces the other to be $+\\infty$. In the one\n  remaining situation $a$ and $b$ are both real and antisymmetry is that of\n  $\\mathbb{R}$.\n- *Transitive.* Let $a \\le b \\le c$. If $a = -\\infty$ or $c = +\\infty$ the\n  conclusion is one of the first two clauses. Otherwise $a \\ne -\\infty$ forces,\n  in $a \\le b$, either $b = +\\infty$ or $a, b \\in \\mathbb{R}$; and $c \\ne +\\infty$\n  forces, in $b \\le c$, either $b = -\\infty$ or $b, c \\in \\mathbb{R}$. The value\n  $b = +\\infty$ is incompatible with the second alternative pair, so $b$ is real,\n  hence so are $a$ and $c$, and transitivity is that of $\\mathbb{R}$.\n- *Total.* If $a = -\\infty$ or $b = +\\infty$ then $a \\le b$; if $b = -\\infty$ or\n  $a = +\\infty$ then $b \\le a$; otherwise both are real and the order of\n  $\\mathbb{R}$ is total.\n- *Preserved and reflected.* For $a, b \\in \\mathbb{R}$ the first two clauses fail,\n  so $a \\le b$ in $\\overline{\\mathbb{R}}$ says exactly $a \\le b$ in $\\mathbb{R}$.\n\nIn particular $-\\infty$ is the least and $+\\infty$ the greatest element of\n$\\overline{\\mathbb{R}}$, and $-\\infty < x < +\\infty$ for every $x \\in \\mathbb{R}$.\n\n**Reflection.** Extend negation by\n\n$$-(+\\infty) := -\\infty, \\qquad -(-\\infty) := +\\infty,$$\n\nkeeping the field negative on $\\mathbb{R}$. The resulting map\n$\\nu : \\overline{\\mathbb{R}} \\to \\overline{\\mathbb{R}}$, $\\nu(a) = -a$, satisfies\n$\\nu(\\nu(a)) = a$ and\n\n$$a \\le b \\iff -b \\le -a \\qquad (a, b \\in \\overline{\\mathbb{R}}).$$\n\nFor $a$ and $b$ real this is the elementwise order reversal in $\\mathbb{R}$:\ntranslation invariance ([[lem-of-add-order]]) applied with the constant $-a-b$\nturns $a < b$ into $-b < -a$ and, applied with the constant $a+b$, turns it back,\nwhile $a = b$ holds exactly when $-a = -b$. In every other case both sides are\ndecided by the first two clauses of the order: $a = -\\infty$ makes both sides\ntrue, as does $b = +\\infty$, and if $a \\ne -\\infty$, $b \\ne +\\infty$ and $a, b$\nare not both real then one of $a = +\\infty$, $b = -\\infty$ holds and both sides\nare false.\n\n**Partial addition.** For $a, b \\in \\overline{\\mathbb{R}}$ the sum $a + b$ is\ndefined by\n\n- $a + b$ = the field sum, when $a, b \\in \\mathbb{R}$;\n- $a + b := +\\infty$ when $a = +\\infty$ and $b \\ne -\\infty$, or $b = +\\infty$ and $a \\ne -\\infty$;\n- $a + b := -\\infty$ when $a = -\\infty$ and $b \\ne +\\infty$, or $b = -\\infty$ and $a \\ne +\\infty$;\n\nand **the two sums $(+\\infty) + (-\\infty)$ and $(-\\infty) + (+\\infty)$ are left\nundefined**. Addition is commutative where defined, and\n\n$$-(a + b) = (-a) + (-b),$$\n\neach side being defined exactly when the other is: the excluded pairs\n$\\{+\\infty, -\\infty\\}$ are exchanged by $\\nu$, and the three clauses above are\nexchanged accordingly.\n\n**Partial multiplication.** For $a, b \\in \\overline{\\mathbb{R}}$ the product $ab$\nis defined by\n\n- $ab$ = the field product, when $a, b \\in \\mathbb{R}$;\n- $ab := +\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and both are $> 0$ or both are $< 0$;\n- $ab := -\\infty$ when one of $a, b$ is $\\pm\\infty$, the other is $\\ne 0$, and one is $> 0$ and the other $< 0$;\n\nand **every product with one factor $0$ and the other $\\pm\\infty$ is left\nundefined**. The comparisons $> 0$ and $< 0$ here are taken in the order above,\nunder which $+\\infty > 0 > -\\infty$.\n\n**Nothing else is defined.** There is no subtraction, no division, no\nexponentiation and no absolute value on $\\overline{\\mathbb{R}}$ in this library;\nwhere such an expression is wanted it is written out in the two defined\noperations, and where a case falls in the undefined list the statement carries an\nexplicit hypothesis saying so.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L10",
      "source": "def-limsup-liminf",
      "source_section": "Definition",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]). For $n \\in \\mathbb{N}$ let\n\n$$T_n \\;:=\\; \\{\\, x_k : k \\in \\mathbb{N},\\ k \\ge n \\,\\} \\subseteq \\mathbb{R}$$\n\nbe the **$n$-th tail range** of $(x_k)$, a nonempty subset of $\\mathbb{R}$ since\n$x_n \\in T_n$. Regard $T_n$ as a subset of $\\overline{\\mathbb{R}}$\n([[def-extended-reals]]) and put\n\n$$s_n \\;:=\\; \\sup T_n \\in \\overline{\\mathbb{R}}, \\qquad i_n \\;:=\\; \\inf T_n \\in \\overline{\\mathbb{R}},$$\n\nthe supremum and infimum taken in $\\overline{\\mathbb{R}}$, which exist for every\n$n$ and for every sequence by [[lem-extended-reals-complete]]. The **limit\nsuperior** and **limit inferior** of $(x_k)$ are then\n\n$$\\limsup_{k} x_k \\;:=\\; \\inf \\{\\, s_n : n \\in \\mathbb{N} \\,\\}, \\qquad \\liminf_{k} x_k \\;:=\\; \\sup \\{\\, i_n : n \\in \\mathbb{N} \\,\\},$$\n\nagain taken in $\\overline{\\mathbb{R}}$ and again existing by\n[[lem-extended-reals-complete]], since $\\{s_n : n \\in \\mathbb{N}\\}$ and\n$\\{i_n : n \\in \\mathbb{N}\\}$ are subsets of $\\overline{\\mathbb{R}}$ on which no\nhypothesis is needed. Both are elements of $\\overline{\\mathbb{R}}$, and either may\nbe $+\\infty$ or $-\\infty$. The notations $\\limsup_{k \\to \\infty} x_k$,\n$\\varlimsup_k x_k$ and $\\overline{\\lim}_k x_k$ all denote the first of them\nelsewhere; this library writes $\\limsup_k x_k$.\n\n**Every quantity written here exists, and that is why the extended line was\nintroduced.** Each of the four operations above is an application of\n[[lem-extended-reals-complete]] to a subset of $\\overline{\\mathbb{R}}$ carrying no\nhypothesis whatever. Written with the real supremum of\n[[def-complete-ordered-field]] and the real infimum of [[thm-infimum-property]]\ninstead, the definition would be available only for sequences that are bounded\n([[def-bounded-set]]): $\\sup T_n$ needs $T_n$ bounded above, and\n$\\inf\\{s_n\\}$ needs $\\{s_n\\}$ nonempty, bounded below, and made of real numbers\n([[def-infimum]]). None of those is automatic, and the discipline recorded in\n[[rem-sup-conventions]] forbids papering over the gap with a convention. The\nextended supremum is a different operation in a different ordered set, and it is\ntotal.\n\n**Values, when the sequence is bounded.** If $(x_k)$ is bounded, say\n$|x_k| \\le M$ for every $k$, then each $T_n$ is a nonempty subset of $\\mathbb{R}$\nbounded above by $M$ and below by $-M$, so by the agreement clause of\n[[lem-extended-reals-complete]] each $s_n$ and each $i_n$ is the *real* supremum\nor infimum of $T_n$, and lies in $[-M, M]$. The family $\\{s_n\\}$ is then a\nnonempty set of reals bounded below by $-M$, so $\\limsup_k x_k$ is likewise the\nreal infimum of $\\{s_n\\}$ and lies in $[-M, M]$; dually for $\\liminf_k x_k$. So\nfor a bounded sequence both quantities are ordinary real numbers computed with\nthe ordinary real supremum and infimum, and the extended line is doing no work.\nIt is only for unbounded sequences that the values $\\pm\\infty$ occur.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L10",
      "source": "lem-limsup-exists",
      "source_section": "Statement",
      "quote": "Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with tail ranges $T_n$ and\nextended tail bounds $s_n = \\sup T_n$, $i_n = \\inf T_n$ as in\n[[def-limsup-liminf]].\n\n1. **Monotonicity of the extended bounds under inclusion.** If\n   $A \\subseteq B \\subseteq \\overline{\\mathbb{R}}$ ([[def-extended-reals]]) then\n   $$\\sup A \\le \\sup B \\qquad \\text{and} \\qquad \\inf B \\le \\inf A,$$\n   the four quantities being the extended bounds of [[lem-extended-reals-complete]].\n   No hypothesis is placed on $A$ or $B$; in particular $A$ may be empty.\n2. **The tail bounds are monotone.** $T_m \\subseteq T_n$ whenever $n \\le m$, and\n   hence\n   $$s_m \\le s_n \\qquad \\text{and} \\qquad i_n \\le i_m \\qquad (n \\le m).$$\n   In particular $s_{n+1} \\le s_n$ and $i_n \\le i_{n+1}$ for every $n$, and\n   $i_n \\le s_n$ for every $n$.\n3. **Existence.** $\\limsup_k x_k$ and $\\liminf_k x_k$ exist in\n   $\\overline{\\mathbb{R}}$ for **every** sequence of reals, bounded or not.\n\nClaim 1 is the tool the rest of this page uses whenever two extended suprema are\ncompared. It is proved here, from the definition of a least upper bound, rather\nthan quoted from the suprema page, for the reason given in the remarks below.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L10",
      "source": "lem-extended-reals-complete",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\overline{\\mathbb{R}}$ be **any** subset of the extended real\nline ([[def-extended-reals]]) and write $A_{\\mathbb{R}} := A \\cap \\mathbb{R}$.\nThen $A$ has a least upper bound and a greatest lower bound in\n$\\overline{\\mathbb{R}}$ ([[def-upper-bound]]), each unique, which we write\n$\\sup A$ and $\\inf A$ with the ambient set always $\\overline{\\mathbb{R}}$.\nExplicitly:\n\n- $\\sup A = +\\infty$ if $+\\infty \\in A$, or if $A_{\\mathbb{R}}$ is not bounded above in $\\mathbb{R}$;\n- $\\sup A = -\\infty$ if $+\\infty \\notin A$ and $A_{\\mathbb{R}} = \\emptyset$;\n- $\\sup A$ is the real supremum $\\sup A_{\\mathbb{R}}$ ([[def-complete-ordered-field]]) if $+\\infty \\notin A$ and $A_{\\mathbb{R}}$ is nonempty and bounded above in $\\mathbb{R}$;\n\nand dually, with $-\\infty$ and $+\\infty$ exchanged and \"above\" replaced by\n\"below\", for $\\inf A$ ([[def-infimum]], [[thm-infimum-property]]).\n\n**Agreement.** If $A \\subseteq \\mathbb{R}$ is nonempty and bounded above in\n$\\mathbb{R}$ ([[def-bounded-set]]) then $\\sup A$ computed in\n$\\overline{\\mathbb{R}}$ is the real number $\\sup A$ of\n[[def-complete-ordered-field]]; if $A \\subseteq \\mathbb{R}$ is nonempty and\nbounded below then $\\inf A$ computed in $\\overline{\\mathbb{R}}$ is the real\nnumber $\\inf A$ of [[thm-infimum-property]]. In particular the notation is\nunambiguous on the sets for which the real supremum and infimum are defined, and\n$\\sup \\emptyset = -\\infty$, $\\inf \\emptyset = +\\infty$ in\n$\\overline{\\mathbb{R}}$.\n\n**No hypothesis is placed on $A$.** This is exactly what the real supremum cannot\ndo, and it is why every $\\limsup$ statement on this page holds for every sequence\nrather than for bounded ones only. It is also not a weakening of the discipline\nthis library keeps around suprema: the operation supplied here is a *different*\noperation, taken in a *different* ordered set, and the agreement clause records\nexactly where the two coincide.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L10",
      "source": "def-upper-bound",
      "source_section": "Definition",
      "quote": "Let $(P, \\le)$ be a poset ([[def-partial-order]]) and $S \\subseteq P$.\n\nAn element $u \\in P$ is an **upper bound** of $S$ if $s \\le u$ for every\n$s \\in S$.\n\nAn element $u \\in P$ is a **least upper bound** (or **supremum**) of $S$ if $u$\nis an upper bound of $S$ and $u \\le v$ for every upper bound $v$ of $S$. When it\nexists we write $u = \\sup S$.\n\nAn element $u \\in P$ is a **strict upper bound** of $S$ if $s < u$ for every\n$s \\in S$.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L10",
      "source": "def-partial-order",
      "source_section": "Definition",
      "quote": "Let $P$ be a set. A **partial order** on $P$ is a binary relation $\\le$ on $P$\nsuch that, for all $x, y, z \\in P$:\n\n- **(R)** *reflexivity*: $x \\le x$;\n- **(A)** *antisymmetry*: if $x \\le y$ and $y \\le x$, then $x = y$;\n- **(T)** *transitivity*: if $x \\le y$ and $y \\le z$, then $x \\le z$.\n\nThe pair $(P, \\le)$ is a **partially ordered set**, abbreviated **poset**. When\nthe order is clear we write $P$ for the pair.\n\nThe associated **strict order** is defined by\n$$x < y \\quad :\\Longleftrightarrow \\quad x \\le y \\text{ and } x \\ne y.$$\n\nTwo elements $x, y \\in P$ are **comparable** if $x \\le y$ or $y \\le x$, and\n**incomparable** otherwise. A partial order in which every two elements are\ncomparable is a **total order** (equivalently a **linear order**), and $(P, \\le)$\nis then a **totally ordered set**.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L11",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "1.2",
        "1.3",
        "1.4",
        "2.2",
        "3.2",
        "5.1"
      ]
    },
    {
      "fact": "L11",
      "source": "def-abs-value",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of\n$x \\in F$ is\n\n$$|x| \\;:=\\; \\begin{cases} x & \\text{if } x \\ge 0, \\\\ -x & \\text{if } x < 0. \\end{cases}$$",
      "uses": [
        "1.2",
        "1.3",
        "1.4",
        "2.2",
        "3.2",
        "5.1"
      ]
    },
    {
      "fact": "L11",
      "source": "def-nat-order",
      "source_section": "Definition",
      "quote": "For $m, n \\in \\mathbb{N}$, define the **order** by\n\n$$m \\le n \\iff \\exists k \\in \\mathbb{N}\\ (m + k = n),$$\n\nand the **strict order** by $m < n \\iff (m \\le n \\text{ and } m \\neq n)$, using\naddition ([[def-nat-addition]]).",
      "uses": [
        "1.2",
        "1.3",
        "1.4",
        "2.2",
        "3.2",
        "5.1"
      ]
    },
    {
      "fact": "L11",
      "source": "thm-nat-linear-order",
      "source_section": "Statement",
      "quote": "The relation $\\le$ on $\\mathbb{N}$, where $m \\le n \\iff \\exists k\\ (m + k = n)$ ([[def-nat-order]]), is a linear (total) order: reflexive, antisymmetric, transitive, and total.",
      "uses": [
        "1.2",
        "1.3",
        "1.4",
        "2.2",
        "3.2",
        "5.1"
      ]
    },
    {
      "fact": "L11",
      "source": "lem-nat-discrete",
      "source_section": "Statement",
      "quote": "For all $m, n \\in \\mathbb{N}$: $m < n \\iff \\sigma(m) \\le n$ ([[def-nat-order]]). Consequently there is no $k$ with $n < k < \\sigma(n)$: the successor $\\sigma(n)$ is the immediate successor of $n$.",
      "uses": [
        "1.2",
        "1.3",
        "1.4",
        "2.2",
        "3.2",
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "The recursion theorem applied to $A = \\mathbb{N} \\times \\mathbb{N}$, the element $(1,1)$ and the function $F$ gives a unique $c$ with $c_0 = (1,1)$ and $c_{k+1} = F(c_k)$, so $(m_k, j_k)$ and hence $x_k$ are well defined once $m_k \\ge 1$ is known.",
      "step": "1.1",
      "inputs": [
        "given",
        "L1"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "For every $k$ one has $1 \\le j_k \\le m_k$: this holds at $k = 0$, where $(m_0, j_0) = (1,1)$; and if $1 \\le j_k \\le m_k$ then either $j_k < m_k$, so that $c_{k+1} = (m_k, j_k + 1)$ with $1 \\le j_k + 1 \\le m_k$, or $j_k = m_k$, so that $c_{k+1} = (m_k + 1, 1)$ with $1 \\le 1 \\le m_k + 1$. The claim follows by induction on $k$; in particular $m_k \\ge 1$ always, so $\\iota(m_k) > 0$ and $x_k$ is defined.",
      "step": "1.2",
      "inputs": [
        "given",
        "L2",
        "L5",
        "L11"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "For every $k$ one has $m_k \\le k+1$: at $k = 0$, $m_0 = 1$; and $m_{k+1}$ is $m_k$ or $m_k + 1$, so $m_{k+1} \\le m_k + 1 \\le k+2$. This is again an induction on $k$.",
      "step": "1.3",
      "inputs": [
        "given",
        "L2",
        "L11"
      ]
    },
    {
      "id": "step-1-4",
      "claim": "For every natural $m \\ge 1$ and every $j$ with $1 \\le j \\le m$ there is $k$ with $(m_k, j_k) = (m, j)$. Induct on $m$. For $m = 1$ the only admissible $j$ is $1$, realised at $k = 0$. Assume the claim for $m$ and apply it at $j = m$ to get $k$ with $(m_k, j_k) = (m, m)$; then $c_{k+1} = (m+1, 1)$, and a second induction on $i$ shows $c_{k+1+i} = (m+1, 1+i)$ for every $i \\le m$: it holds at $i = 0$, and if it holds at $i < m$ then $1 + i < m + 1$, so $c_{k+2+i} = (m+1, 2+i)$. Hence every $j$ with $1 \\le j \\le m+1$ is realised in block $m+1$.",
      "step": "1.4",
      "inputs": [
        "given",
        "L1",
        "L2",
        "L11"
      ]
    },
    {
      "id": "step-1-5",
      "claim": "Let $y$ be a real with $0 \\le y \\le 1$.",
      "step": "1.5",
      "inputs": [
        "given",
        "L9"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "For every $k$ one has $0 < x_k \\le 1$: from $1 \\le j_k \\le m_k$ we get $0 < \\iota(j_k) \\le \\iota(m_k)$, and dividing by $\\iota(m_k) > 0$ gives $0 < x_k \\le 1$.",
      "step": "2.1",
      "inputs": [
        "step 1.2",
        "L5",
        "L6"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "For every natural $m \\ge 1$ the set $\\{\\, j \\in \\mathbb{N} : 1 \\le j \\le m \\text{ and } y\\,\\iota(m) \\le \\iota(j) \\,\\}$ is nonempty, since $j = m$ belongs to it because $y \\le 1$ gives $y\\,\\iota(m) \\le \\iota(m)$; let $J(m)$ be its least element. Then $y \\le \\iota(J(m))/\\iota(m)$, and moreover $\\iota(J(m))/\\iota(m) \\le y + 1/\\iota(m)$: if $J(m) = 1$ this reads $1/\\iota(m) \\le y + 1/\\iota(m)$, true because $y \\ge 0$; and if $J(m) > 1$ then $j := J(m) - 1$ satisfies $1 \\le j \\le m$ and $j < J(m)$, so minimality gives $\\iota(j) < y\\,\\iota(m)$, that is $\\iota(J(m)) - 1 < y\\,\\iota(m)$, and dividing by $\\iota(m) > 0$ gives the bound. Hence $0 \\le \\iota(J(m))/\\iota(m) - y \\le 1/\\iota(m)$.",
      "step": "2.2",
      "inputs": [
        "step 1.5",
        "L3",
        "L5",
        "L6",
        "L11"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "For every $L \\in \\operatorname{SL}(x)$ one has $0 \\le L \\le 1$, since a subsequence of $(x_k)$ converging to $L$ satisfies $0 \\le x_{n_i} \\le 1$ at every index by step 2.1, and limits preserve non-strict inequalities. So $\\operatorname{SL}(x) \\subseteq [0,1]$.",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L4",
        "L8",
        "L9"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "For every natural $m \\ge 1$ the set $\\{\\, k \\in \\mathbb{N} : (m_k, j_k) = (m, J(m)) \\,\\}$ is nonempty by step 1.4, since $1 \\le J(m) \\le m$; let $K(m)$ be its least element. Then $x_{K(m)} = \\iota(J(m))/\\iota(m)$, so $|x_{K(m)} - y| \\le 1/\\iota(m)$ by step 2.2, and $m = m_{K(m)} \\le K(m) + 1$ by step 1.3.",
      "step": "3.2",
      "inputs": [
        "step 1.4",
        "step 1.3",
        "step 2.2",
        "L3",
        "L11"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Define $f : \\mathbb{N} \\to \\mathbb{N}$ by $f(n) := K(n+2)$; then $f(n) \\ge (n+2) - 1 = n+1 > n$ and $|x_{f(n)} - y| \\le 1/\\iota(n+2)$. The recursion theorem applied to $\\mathbb{N}$, the element $K(1)$ and the function $f$ gives $n : \\mathbb{N} \\to \\mathbb{N}$ with $n_0 = K(1)$ and $n_{i+1} = f(n_i)$; it is strictly increasing, so $n_i \\ge i$, and $|x_{n_{i+1}} - y| \\le 1/\\iota(n_i + 2) \\le 1/\\iota(i+2)$.",
      "step": "4.1",
      "inputs": [
        "step 3.2",
        "L1",
        "L4",
        "L5",
        "L6",
        "construct"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "The subsequence $(x_{n_i})$ converges to $y$: given a real $\\varepsilon > 0$, take a natural $p \\ge 1$ with $1/p < \\varepsilon$; every $i \\ge p$ satisfies $i \\ge 1$, so step 4.1 applied at $i-1$ gives $|x_{n_i} - y| \\le 1/\\iota(i+1)$, and $i + 1 > p$ gives $1/\\iota(i+1) < 1/p < \\varepsilon$. Hence $y \\in \\operatorname{SL}(x)$, and since $y$ was an arbitrary element of $[0,1]$, $[0,1] \\subseteq \\operatorname{SL}(x)$.",
      "step": "5.1",
      "inputs": [
        "step 4.1",
        "step 1.5",
        "L4",
        "L5",
        "L6",
        "L7",
        "L11"
      ]
    },
    {
      "id": "step-6-1",
      "claim": "Therefore $\\operatorname{SL}(x) = [0,1]$. The sequence is bounded by step 2.1, so every subsequence of it is bounded and none diverges to $\\pm\\infty$; hence $\\overline{\\operatorname{SL}}(x) = \\operatorname{SL}(x) = [0,1]$, whose greatest element is $1$ and least element $0$, and [L10] gives $\\limsup_k x_k = 1$ and $\\liminf_k x_k = 0$.",
      "step": "6.1",
      "inputs": [
        "step 5.1",
        "step 3.1",
        "step 2.1",
        "L8",
        "L9",
        "L10",
        "discharge-construct"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The ex-subsequential-limits-fill-unit-interval statement has no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "The statement and step 1.2 explicitly treat the zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The statement and step 1.2 explicitly treat the unit or first-index boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The statement and step 2.2 explicitly treat the equality, singleton, constant, or nonempty degeneracy."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "The statement and step 6.1 explicitly treat the interval or extended-real endpoint case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.4 makes the relevant selection only after its existence or source-set nonemptiness is established."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The ex-subsequential-limits-fill-unit-interval statement is not a biconditional requiring a forward implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The ex-subsequential-limits-fill-unit-interval statement is not a biconditional requiring a reverse implication."
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
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-limsup-liminf",
    "declared_target": "def-limsup-liminf",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-limsup-is-greatest-subsequential-limit",
    "declared_target": "thm-limsup-is-greatest-subsequential-limit",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "cor-liminf-is-least-subsequential-limit",
    "declared_target": "cor-liminf-is-least-subsequential-limit",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-extended-limits",
    "declared_target": "def-extended-limits",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-extended-reals",
    "declared_target": "def-extended-reals",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-limsup-exists",
    "declared_target": "lem-limsup-exists",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-extended-reals-complete",
    "declared_target": "lem-extended-reals-complete",
    "target_statement_provenance": null,
    "targetPage": "limsup-and-subsequential-limits",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-limit-preserves-order",
    "declared_target": "lem-limit-preserves-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "prop-of-multiply-inequalities",
    "declared_target": "prop-of-multiply-inequalities",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-abs-value",
    "declared_target": "def-abs-value",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-subsequential-limits-fill-unit-interval",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-natural-numbers",
    "declared_target": "def-natural-numbers",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-nat-linear-order",
    "declared_target": "thm-nat-linear-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-nat-discrete",
    "declared_target": "lem-nat-discrete",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-upper-bound",
    "declared_target": "def-upper-bound",
    "target_statement_provenance": "ai-altered",
    "targetPage": "order-zorn-and-the-axiom-of-choice",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-subsequential-limits-fill-unit-interval",
    "sourcePage": "limsup-and-subsequential-limits-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-partial-order",
    "declared_target": "def-partial-order",
    "target_statement_provenance": "literature-derived",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-subsequential-limits-fill-unit-interval",
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
    "source": "ex-subsequential-limits-fill-unit-interval",
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

## Full text of every cited or declared item (37)

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

### `def-abs-value`

````markdown
---
id: def-abs-value
kind: definition
title: "Absolute value in an ordered field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: []
landmark: false
short: "|x|"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dartmouth College analysis notes: Absolute value"
      url: "https://math.dartmouth.edu/~m63w21/lecture-m63-02.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of
$x \in F$ is

$$|x| \;:=\; \begin{cases} x & \text{if } x \ge 0, \\ -x & \text{if } x < 0. \end{cases}$$

## Remarks

- The distance between $x$ and $y$ is $|x - y|$.
- The basic algebraic properties ($|x| \ge 0$, $|x| = 0 \iff x = 0$,
  $|xy| = |x|\,|y|$, and the characterisation $|x| < c \iff -c < x < c$) are
  established in [[lem-of-abs-value]]; the triangle inequality is
  [[lem-of-triangle-inequality]].
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

### `def-extended-limits`

````markdown
---
id: def-extended-limits
kind: definition
title: "Convergence in $\\overline{\\mathbb{R}}$ and the extended subsequential limit set: $L \\in \\overline{\\mathbb{R}}$ is an extended subsequential limit when some subsequence converges to $L$, or diverges to $L = \\pm\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-extended-reals, def-sequence, def-real-limit, def-divergence-to-infinity, def-subsequential-limit, lem-limit-unique]
justified_by: []
forward_refs: [cex-limsup-infinite-not-attained-in-r]
aliases: []
landmark: false
short: "$\\overline{\\operatorname{SL}}(x)$"
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.15 to 3.17)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let
$L \in \overline{\mathbb{R}}$ ([[def-extended-reals]]). Say that $(x_k)$
**converges to $L$ in $\overline{\mathbb{R}}$** when one of the following holds,
according to which of the three kinds of element $L$ is:

- $L \in \mathbb{R}$ and $(x_k)$ converges to $L$ in the sense of [[def-real-limit]];
- $L = +\infty$ and $x_k \to +\infty$ in the sense of [[def-divergence-to-infinity]];
- $L = -\infty$ and $x_k \to -\infty$ in the sense of [[def-divergence-to-infinity]].

Then $L$ is an **extended subsequential limit** of $(x_k)$ when some subsequence
of $(x_k)$ converges to $L$ in $\overline{\mathbb{R}}$: when there is a strictly
increasing $n : \mathbb{N} \to \mathbb{N}$ ([[def-sequence]]) such that
$(x_{n_j})_{j \in \mathbb{N}}$ converges to $L$ in the sense just given. The
**extended subsequential limit set** of $(x_k)$ is

$$\overline{\operatorname{SL}}(x) \;:=\; \{\, L \in \overline{\mathbb{R}} : L \text{ is an extended subsequential limit of } (x_k) \,\} \subseteq \overline{\mathbb{R}}.$$

**This extends the published [[def-subsequential-limit]] and does not replace
it.** That definition is finite by design: there $L$ ranges over $\mathbb{R}$ and
$\operatorname{SL}(x) \subseteq \mathbb{R}$. Its clause is quoted verbatim as the
first of the three clauses above, so

$$\overline{\operatorname{SL}}(x) \cap \mathbb{R} = \operatorname{SL}(x),$$

immediately from the definitions: a real $L$ lies in
$\overline{\operatorname{SL}}(x)$ exactly when some subsequence converges to $L$
in the sense of [[def-real-limit]], which is exactly the condition
$L \in \operatorname{SL}(x)$. The extended set is therefore
$\operatorname{SL}(x)$ together with at most the two extra points $\pm\infty$,
each present exactly when some subsequence diverges to it. Nothing about
$\operatorname{SL}(x)$ is redefined, and every statement proved about
$\operatorname{SL}(x)$ elsewhere in the library remains a statement about the
same set.

**Neither is [[def-divergence-to-infinity]] reinterpreted.** The phrase
"$x_k \to +\infty$" keeps exactly the meaning fixed there, an abbreviation for
"for every real $M$, eventually $x_k > M$". What is new is only that the phrase
is now allowed to appear as one of three clauses in a single definition whose
parameter $L$ ranges over $\overline{\mathbb{R}}$, so that the three situations
can be quantified over together. In particular the warning recorded there stands:
a sequence diverging to $+\infty$ has no limit in $\mathbb{R}$, and none of the
rules of [[thm-algebra-of-limits]] applies to it.

## Remarks

- **An extended limit is unique.** Suppose $(x_k)$ converges to $L$ and to $L'$ in
  $\overline{\mathbb{R}}$. If both are real, $L = L'$ by uniqueness of real limits
  ([[lem-limit-unique]]). If one is real and the other is $\pm\infty$, that is
  impossible, because a sequence diverging to $\pm\infty$ is unbounded and so does
  not converge, as [[def-divergence-to-infinity]] records. If $L = +\infty$ and
  $L' = -\infty$ then, taking $M = 0$ in both conditions, there are $K$ and $K'$
  with $x_k > 0$ for $k \ge K$ and $x_k < 0$ for $k \ge K'$; any index at least as
  large as both gives $0 < x_k < 0$, which is impossible. So the three clauses are
  mutually exclusive and each determines $L$.

- **Why the extended set is the right object for a $\limsup$ theorem.** The
  greatest subsequential limit of an arbitrary real sequence need not be a real
  number: the sequence that alternates between $0$ and larger and larger values
  has $\operatorname{SL}(x) = \{0\}$, whose greatest element is $0$, while the
  behaviour that dominates it is a subsequence running off to $+\infty$. That is
  exactly the content of [[cex-limsup-infinite-not-attained-in-r]], and it is why
  [[thm-limsup-is-greatest-subsequential-limit]] is stated for
  $\overline{\operatorname{SL}}(x)$ rather than for $\operatorname{SL}(x)$.

- **A tail changes nothing.** A strictly increasing index map satisfies
  $n_j \ge j$ ([[lem-index-map-grows]]), so all three clauses depend only on the
  behaviour of $(x_k)$ at arbitrarily large indices, and a sequence and each of
  its tails have the same extended subsequential limit set. This is the same
  observation made for $\operatorname{SL}(x)$ in [[def-subsequential-limit]], with
  the two divergence clauses added.
````

### `def-extended-reals`

````markdown
---
id: def-extended-reals
kind: definition
title: "The extended real line $\\overline{\\mathbb{R}} = \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}$, its order, and the arithmetic that is left undefined"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order, def-complete-ordered-field, def-divergence-to-infinity, def-partial-order, lem-of-add-order]
justified_by: []
forward_refs: [cex-zero-times-infinity-indeterminate]
aliases: [def-extended-real-line]
landmark: true
short: "$\\overline{\\mathbb{R}}$"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (1.23, the extended real number system)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.2 (the extended real number system)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. K. Hunter, Measure Theory notes"
      url: "https://www.math.ucdavis.edu/~hunter/m206/ch0_measure.pdf"
pipeline_run: null
---

## Definition

Fix two objects $-\infty$ and $+\infty$, distinct from one another and neither of
them a real number ([[def-real-numbers]]), and set

$$\overline{\mathbb{R}} := \mathbb{R} \cup \{-\infty, +\infty\}.$$

This is a **new object**, introduced here explicitly with its own order and its
own partial arithmetic. It is not an enlargement of the field $\mathbb{R}$, and
no operation of $\mathbb{R}$ ([[def-complete-ordered-field]]) is redefined by
anything below.

**The order.** For $a, b \in \overline{\mathbb{R}}$ declare

$$a \le b \quad :\Longleftrightarrow \quad a = -\infty \ \text{ or } \ b = +\infty \ \text{ or } \ \big(a, b \in \mathbb{R} \text{ and } a \le b \text{ in } \mathbb{R}\big),$$

with $\mathbb{R}$ ordered as in [[def-real-order]], and write $a < b$ for
"$a \le b$ and $a \ne b$" as usual ([[def-partial-order]]).

**$(\overline{\mathbb{R}}, \le)$ is a totally ordered set, and the inclusion of
$\mathbb{R}$ preserves and reflects the order.** All four checks are immediate
from the displayed clauses.

- *Reflexive.* For $a = \pm\infty$ one of the first two clauses applies; for
  $a \in \mathbb{R}$ the third does, since $a \le a$ in $\mathbb{R}$.
- *Antisymmetric.* Suppose $a \le b$ and $b \le a$. If $a = -\infty$ then
  $b \le a$ forces $b = -\infty$, since the clause $a = +\infty$ fails and $b, a$
  are not both real. Symmetrically $b = -\infty$ forces $a = -\infty$, and
  $a = +\infty$ or $b = +\infty$ forces the other to be $+\infty$. In the one
  remaining situation $a$ and $b$ are both real and antisymmetry is that of
  $\mathbb{R}$.
- *Transitive.* Let $a \le b \le c$. If $a = -\infty$ or $c = +\infty$ the
  conclusion is one of the first two clauses. Otherwise $a \ne -\infty$ forces,
  in $a \le b$, either $b = +\infty$ or $a, b \in \mathbb{R}$; and $c \ne +\infty$
  forces, in $b \le c$, either $b = -\infty$ or $b, c \in \mathbb{R}$. The value
  $b = +\infty$ is incompatible with the second alternative pair, so $b$ is real,
  hence so are $a$ and $c$, and transitivity is that of $\mathbb{R}$.
- *Total.* If $a = -\infty$ or $b = +\infty$ then $a \le b$; if $b = -\infty$ or
  $a = +\infty$ then $b \le a$; otherwise both are real and the order of
  $\mathbb{R}$ is total.
- *Preserved and reflected.* For $a, b \in \mathbb{R}$ the first two clauses fail,
  so $a \le b$ in $\overline{\mathbb{R}}$ says exactly $a \le b$ in $\mathbb{R}$.

In particular $-\infty$ is the least and $+\infty$ the greatest element of
$\overline{\mathbb{R}}$, and $-\infty < x < +\infty$ for every $x \in \mathbb{R}$.

**Reflection.** Extend negation by

$$-(+\infty) := -\infty, \qquad -(-\infty) := +\infty,$$

keeping the field negative on $\mathbb{R}$. The resulting map
$\nu : \overline{\mathbb{R}} \to \overline{\mathbb{R}}$, $\nu(a) = -a$, satisfies
$\nu(\nu(a)) = a$ and

$$a \le b \iff -b \le -a \qquad (a, b \in \overline{\mathbb{R}}).$$

For $a$ and $b$ real this is the elementwise order reversal in $\mathbb{R}$:
translation invariance ([[lem-of-add-order]]) applied with the constant $-a-b$
turns $a < b$ into $-b < -a$ and, applied with the constant $a+b$, turns it back,
while $a = b$ holds exactly when $-a = -b$. In every other case both sides are
decided by the first two clauses of the order: $a = -\infty$ makes both sides
true, as does $b = +\infty$, and if $a \ne -\infty$, $b \ne +\infty$ and $a, b$
are not both real then one of $a = +\infty$, $b = -\infty$ holds and both sides
are false.

**Partial addition.** For $a, b \in \overline{\mathbb{R}}$ the sum $a + b$ is
defined by

- $a + b$ = the field sum, when $a, b \in \mathbb{R}$;
- $a + b := +\infty$ when $a = +\infty$ and $b \ne -\infty$, or $b = +\infty$ and $a \ne -\infty$;
- $a + b := -\infty$ when $a = -\infty$ and $b \ne +\infty$, or $b = -\infty$ and $a \ne +\infty$;

and **the two sums $(+\infty) + (-\infty)$ and $(-\infty) + (+\infty)$ are left
undefined**. Addition is commutative where defined, and

$$-(a + b) = (-a) + (-b),$$

each side being defined exactly when the other is: the excluded pairs
$\{+\infty, -\infty\}$ are exchanged by $\nu$, and the three clauses above are
exchanged accordingly.

**Partial multiplication.** For $a, b \in \overline{\mathbb{R}}$ the product $ab$
is defined by

- $ab$ = the field product, when $a, b \in \mathbb{R}$;
- $ab := +\infty$ when one of $a, b$ is $\pm\infty$, the other is $\ne 0$, and both are $> 0$ or both are $< 0$;
- $ab := -\infty$ when one of $a, b$ is $\pm\infty$, the other is $\ne 0$, and one is $> 0$ and the other $< 0$;

and **every product with one factor $0$ and the other $\pm\infty$ is left
undefined**. The comparisons $> 0$ and $< 0$ here are taken in the order above,
under which $+\infty > 0 > -\infty$.

**Nothing else is defined.** There is no subtraction, no division, no
exponentiation and no absolute value on $\overline{\mathbb{R}}$ in this library;
where such an expression is wanted it is written out in the two defined
operations, and where a case falls in the undefined list the statement carries an
explicit hypothesis saying so.

## Remarks

- **$\overline{\mathbb{R}}$ is not a field, and not an ordered field.** It has no
  additive inverse for $+\infty$: $(+\infty) + b$ is $+\infty$ whenever it is
  defined and is never $0$. So none of the field axioms
  ([[def-complete-ordered-field]]) is available here, and no algebraic
  manipulation valid in $\mathbb{R}$ may be transported to
  $\overline{\mathbb{R}}$ without a separate justification.

- **Why the excluded cases are excluded.** The three defined clauses of each
  operation are exactly the cases in which the value is forced by the limiting
  behaviour of the sequences involved, and the excluded cases are exactly the
  ones in which it is not. For the product this is proved on the companion page:
  [[cex-zero-times-infinity-indeterminate]] exhibits a null sequence and two
  sequences diverging to $+\infty$ whose products behave differently, so no value
  assigned to $0 \cdot (+\infty)$ could be compatible with products of limits.
  The same phenomenon rules out a value for $(+\infty) + (-\infty)$: with
  $a_k = k$ and $b_k = -k$ the sum is constantly $0$, while with $b_k = -2k$ it
  diverges to $-\infty$. Leaving them undefined is not squeamishness, it is the
  only option that keeps every later statement about limits true without a
  side condition hidden inside the arithmetic.

- **This is the separate introduction that [[rem-sup-conventions]] points to.**
  That remark refuses the conventions $\sup S = +\infty$ and
  $\inf \emptyset = +\infty$ inside $\mathbb{R}$, and records that the extended
  real line is introduced explicitly here, with its own order and its own partial
  arithmetic kept separate from $\mathbb{R}$ rather than quietly extending it.
  This is that introduction. The suprema and infima of [[def-complete-ordered-field]],
  [[def-infimum]] and the whole suprema page remain real numbers with their
  nonempty and bounded hypotheses intact; what is new is a *separate* supremum
  operation, taken in $\overline{\mathbb{R}}$ and named as such, supplied by
  [[lem-extended-reals-complete]].

- **The symbols were already in circulation, and this definition does not change
  what they meant.** [[def-divergence-to-infinity]] defines the single phrase
  "$x_k \to +\infty$" as an abbreviation for a condition on $(x_k)$, and says in
  as many words that it does not define an object named $+\infty$. That reading
  is still correct: nothing in [[def-divergence-to-infinity]] is restated or
  reinterpreted here, and [[def-extended-limits]] is where the two are related, by
  a definition that quotes the old one rather than replacing it. Likewise the
  interval notation $(a, \infty)$ of [[def-interval]] is notation for a condition
  on one side, not an endpoint, and stays that way.

- **Why the order is defined by three clauses rather than by a picture.** The
  clauses are what the verifications above actually use, and they make the two
  facts that later proofs lean on immediate: every element is $\le +\infty$ and
  every element is $\ge -\infty$, with no case analysis at the point of use.
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

### `def-limsup-liminf`

````markdown
---
id: def-limsup-liminf
kind: definition
title: "Limit superior and limit inferior of a real sequence as $\\inf_n \\sup_{k \\ge n} x_k$ and $\\sup_n \\inf_{k \\ge n} x_k$ in $\\overline{\\mathbb{R}}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extended-reals, def-sequence, def-complete-ordered-field, thm-infimum-property, def-bounded-set, def-infimum, lem-extended-reals-complete]
justified_by: []
aliases: [def-limsup, def-liminf]
landmark: true
short: "$\\limsup$, $\\liminf$"
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.16)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]). For $n \in \mathbb{N}$ let

$$T_n \;:=\; \{\, x_k : k \in \mathbb{N},\ k \ge n \,\} \subseteq \mathbb{R}$$

be the **$n$-th tail range** of $(x_k)$, a nonempty subset of $\mathbb{R}$ since
$x_n \in T_n$. Regard $T_n$ as a subset of $\overline{\mathbb{R}}$
([[def-extended-reals]]) and put

$$s_n \;:=\; \sup T_n \in \overline{\mathbb{R}}, \qquad i_n \;:=\; \inf T_n \in \overline{\mathbb{R}},$$

the supremum and infimum taken in $\overline{\mathbb{R}}$, which exist for every
$n$ and for every sequence by [[lem-extended-reals-complete]]. The **limit
superior** and **limit inferior** of $(x_k)$ are then

$$\limsup_{k} x_k \;:=\; \inf \{\, s_n : n \in \mathbb{N} \,\}, \qquad \liminf_{k} x_k \;:=\; \sup \{\, i_n : n \in \mathbb{N} \,\},$$

again taken in $\overline{\mathbb{R}}$ and again existing by
[[lem-extended-reals-complete]], since $\{s_n : n \in \mathbb{N}\}$ and
$\{i_n : n \in \mathbb{N}\}$ are subsets of $\overline{\mathbb{R}}$ on which no
hypothesis is needed. Both are elements of $\overline{\mathbb{R}}$, and either may
be $+\infty$ or $-\infty$. The notations $\limsup_{k \to \infty} x_k$,
$\varlimsup_k x_k$ and $\overline{\lim}_k x_k$ all denote the first of them
elsewhere; this library writes $\limsup_k x_k$.

**Every quantity written here exists, and that is why the extended line was
introduced.** Each of the four operations above is an application of
[[lem-extended-reals-complete]] to a subset of $\overline{\mathbb{R}}$ carrying no
hypothesis whatever. Written with the real supremum of
[[def-complete-ordered-field]] and the real infimum of [[thm-infimum-property]]
instead, the definition would be available only for sequences that are bounded
([[def-bounded-set]]): $\sup T_n$ needs $T_n$ bounded above, and
$\inf\{s_n\}$ needs $\{s_n\}$ nonempty, bounded below, and made of real numbers
([[def-infimum]]). None of those is automatic, and the discipline recorded in
[[rem-sup-conventions]] forbids papering over the gap with a convention. The
extended supremum is a different operation in a different ordered set, and it is
total.

**Values, when the sequence is bounded.** If $(x_k)$ is bounded, say
$|x_k| \le M$ for every $k$, then each $T_n$ is a nonempty subset of $\mathbb{R}$
bounded above by $M$ and below by $-M$, so by the agreement clause of
[[lem-extended-reals-complete]] each $s_n$ and each $i_n$ is the *real* supremum
or infimum of $T_n$, and lies in $[-M, M]$. The family $\{s_n\}$ is then a
nonempty set of reals bounded below by $-M$, so $\limsup_k x_k$ is likewise the
real infimum of $\{s_n\}$ and lies in $[-M, M]$; dually for $\liminf_k x_k$. So
for a bounded sequence both quantities are ordinary real numbers computed with
the ordinary real supremum and infimum, and the extended line is doing no work.
It is only for unbounded sequences that the values $\pm\infty$ occur.

## Remarks

- **The order of the two operations is not symmetric and must be kept straight.**
  $\limsup$ is an infimum of suprema and $\liminf$ a supremum of infima. Taking
  them in the other order gives $\sup_n \sup_{k \ge n} x_k = \sup_k x_k$ and
  $\inf_n \inf_{k \ge n} x_k = \inf_k x_k$, which are the extreme values of the
  whole sequence and carry no information about its behaviour at large indices.
  The point of the definition is that the inner operation looks at a tail and the
  outer one lets the tail recede.

- **Why tails at all.** Each $s_n$ is a bound on the whole tail from index $n$ on,
  so it forgets the first $n$ terms; letting $n$ grow forgets any fixed finite
  number of them. That is what makes $\limsup$ and $\liminf$ tail quantities in
  the sense of [[lem-limit-of-tail]], and it is the reason they can characterise
  convergence, which is itself a tail property.

- **Neither quantity is a limit, and neither is claimed to be one.** The symbols
  $\limsup$ and $\liminf$ are single pieces of notation for the two displayed
  expressions, exactly as "$x_k \to +\infty$" is a single abbreviation in
  [[def-divergence-to-infinity]]. That the family $(s_n)$ does decrease to
  $\limsup_k x_k$ in a precise sense is a theorem, not part of this definition;
  the monotonicity half is [[lem-limsup-exists]].

- **The tail ranges are sets, not sequences.** $T_n$ is the range of the $n$-th
  tail, so repetitions and order are forgotten ([[def-sequence]]). That is
  harmless here, since a supremum depends only on the set of values, and it is
  what lets the whole definition be phrased with the order-theoretic operations of
  [[lem-extended-reals-complete]] and nothing else.
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

### `def-natural-numbers`

````markdown
---
id: def-natural-numbers
kind: definition
title: "The natural numbers $\\mathbb{N}$ (von Neumann)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inductive-set, lem-omega-smallest-inductive, def-peano-system,
       def-axiom-of-infinity, def-axiom-schema-of-separation]
aliases: [def-omega, natural-numbers]
landmark: true
short: "$\\mathbb{N}=\\omega$, smallest inductive set"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "Axiom of infinity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_infinity"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Definition

The set of **natural numbers** is the **smallest inductive set**
([[def-inductive-set]]),

$$\mathbb{N} = \omega := \bigcap\,\{\, I : I \text{ is inductive} \,\},$$

which exists and is itself inductive by [[lem-omega-smallest-inductive]] (the
Axiom of Infinity, [[def-axiom-of-infinity]], supplies one inductive set to
intersect within, and Separation, [[def-axiom-schema-of-separation]], makes the
intersection a set). On $\mathbb{N}$ we take

$$0 := \varnothing, \qquad \sigma(n) := n \cup \{n\},$$

the distinguished element and the successor function. Thus
$0 = \varnothing$, $1 = \{0\}$, $2 = \{0, 1\}$, $3 = \{0, 1, 2\}$, and in general
$n = \{0, 1, \dots, n-1\}$ is the set of its predecessors.

## Remarks

"Smallest" means $\omega \subseteq I$ for every inductive set $I$. This minimality
is exactly the **induction principle** ([[thm-induction-principle]]): a subset of
$\mathbb{N}$ that contains $0$ and is closed under $\sigma$ is itself inductive,
hence contains $\omega = \mathbb{N}$, hence equals $\mathbb{N}$.

With $0$ and $\sigma$ so defined, $(\mathbb{N}, 0, \sigma)$ satisfies the Peano
axioms ([[def-peano-system]], proved in [[thm-omega-is-peano-system]]), so it is a
**model** of the abstract natural numbers. By categoricity
([[thm-peano-categoricity]]) any other model is uniquely isomorphic to it, so the
particular set-theoretic encoding chosen here is immaterial to every arithmetic
and order property that follows: those are developed from the Peano axioms, not
from the sets themselves.
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

### `def-partial-order`

````markdown
---
id: def-partial-order
kind: definition
title: "Partial order and partially ordered set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
forward_refs: [def-chain-complete-poset, lem-extremal-cut-closed-under-f,
               lem-successor-of-extremal, thm-bourbaki-witt, thm-zorn,
               thm-zorn-implies-ac, fs-maximal-is-greatest]
aliases: [def-poset]
landmark: true
short: "partial order"
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
    - title: "Partially ordered set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partially_ordered_set"
    - title: "Total order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Total_order"
pipeline_run: null
---

## Definition

Let $P$ be a set. A **partial order** on $P$ is a binary relation $\le$ on $P$
such that, for all $x, y, z \in P$:

- **(R)** *reflexivity*: $x \le x$;
- **(A)** *antisymmetry*: if $x \le y$ and $y \le x$, then $x = y$;
- **(T)** *transitivity*: if $x \le y$ and $y \le z$, then $x \le z$.

The pair $(P, \le)$ is a **partially ordered set**, abbreviated **poset**. When
the order is clear we write $P$ for the pair.

The associated **strict order** is defined by
$$x < y \quad :\Longleftrightarrow \quad x \le y \text{ and } x \ne y.$$

Two elements $x, y \in P$ are **comparable** if $x \le y$ or $y \le x$, and
**incomparable** otherwise. A partial order in which every two elements are
comparable is a **total order** (equivalently a **linear order**), and $(P, \le)$
is then a **totally ordered set**.

## Remarks

- Partiality is the whole point: a partial order is permitted to leave pairs
  incomparable, which is what makes maximal elements and chains worth
  distinguishing at all. In a total order every subset is a chain, and a maximal
  element is automatically the greatest element.
- All three axioms are used essentially in the proofs that rest on this
  definition: reflexivity in [[lem-extremal-cut-closed-under-f]] and
  [[lem-successor-of-extremal]],
  transitivity almost everywhere, and antisymmetry in [[thm-bourbaki-witt]],
  where the fixed point is obtained by passing from $f(c) \le c$ and
  $c \le f(c)$ to $f(c) = c$. Antisymmetry is also what makes a least upper
  bound unique when it exists, and uniqueness is what licenses the functional
  notation $\sup$ used in [[def-chain-complete-poset]].
- Dropping antisymmetry gives a **preorder**. Preorders are genuinely useful
  elsewhere (a directed set is preordered).
- Inclusion $\subseteq$ on the power set of any set is the standard example, and
  it is the order that appears concretely in [[thm-zorn]], which applies
  [[thm-bourbaki-witt]] to the set of chains of $P$ ordered by inclusion, and in
  [[thm-zorn-implies-ac]], which applies Zorn's lemma to partial choice
  functions ordered by extension, an inclusion order on their graphs. The
  results themselves are stated for an *arbitrary* poset and are used that way:
  [[thm-zorn]] is applied to whatever poset a later page brings, and the
  refutation in
  [[fs-maximal-is-greatest]] runs in a bare two-element antichain that is not
  presented as an order by inclusion at all.
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

### `def-upper-bound`

````markdown
---
id: def-upper-bound
kind: definition
title: "Upper bound, least upper bound, and strict upper bound"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partial-order]
justified_by: []
aliases: [def-supremum-poset]
landmark: false
short: "upper bound"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Upper and lower bounds (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Upper_and_lower_bounds"
    - title: "Partially ordered set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partially_ordered_set"
pipeline_run: null
---

## Definition

Let $(P, \le)$ be a poset ([[def-partial-order]]) and $S \subseteq P$.

An element $u \in P$ is an **upper bound** of $S$ if $s \le u$ for every
$s \in S$.

An element $u \in P$ is a **least upper bound** (or **supremum**) of $S$ if $u$
is an upper bound of $S$ and $u \le v$ for every upper bound $v$ of $S$. When it
exists we write $u = \sup S$.

An element $u \in P$ is a **strict upper bound** of $S$ if $s < u$ for every
$s \in S$.

## Remarks

- **A least upper bound is unique when it exists.** If $u$ and $u'$ are both
  least upper bounds of $S$ then each is an upper bound and each is below the
  other, so $u \le u'$ and $u' \le u$, whence $u = u'$ by antisymmetry
  ([[def-partial-order]]). This is what makes the notation $\sup S$ legitimate.
  Antisymmetry is not peculiar to this argument: the same two-inequality step
  gives uniqueness of a greatest element ([[def-maximal-element]]), and it is
  used essentially in [[thm-bourbaki-witt]], whose fixed point is obtained by
  passing from $f(c) \le c$ and $c \le f(c)$ to $f(c) = c$. Drop antisymmetry
  and it is the conclusion, not merely the notation, that goes: on two distinct
  elements each below the other, every subset still has a least upper bound, yet
  the map exchanging the two satisfies $x \le f(x)$ and has no fixed point.
- **Every element of $P$ is an upper bound of the empty set**, vacuously.
  Consequently $\sup \emptyset$, when it exists, is the least element of $P$.
- An upper bound of $S$ need not belong to $S$, and $S$ may have many upper
  bounds and no least one. In $\mathbb{Q}$ with its usual order, the set
  $\{q \in \mathbb{Q} : q^2 < 2\}$ has upper bounds but no least upper bound.
- In a poset, a strict upper bound is exactly an upper bound outside $S$. If
  $u$ is strict then $u\notin S$, since $u<u$ is impossible. Conversely, if
  $u$ is an upper bound and $u\notin S$, then every $s\in S$ satisfies
  $s\le u$ and $s\ne u$, hence $s<u$. This distinction from an arbitrary upper
  bound matters in [[thm-zorn]], where the argument must produce one outside
  the chain.
````

### `ex-limsup-of-alternating-sequence`

````markdown
---
id: ex-limsup-of-alternating-sequence
kind: example
title: "$(-1)^k$ has $\\liminf = -1$ and $\\limsup = 1$, so it does not converge"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-limsup-liminf, thm-convergence-iff-limsup-equals-liminf, lem-alternating-sequence, lem-index-map-grows, lem-limsup-exists, lem-extended-reals-complete, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, lem-of-abs-value, def-abs-value, cor-of-one-positive, lem-of-add-order, def-ordered-field, def-complete-ordered-field]
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Example

Let $(s_k)$ be the alternating sequence of [[lem-alternating-sequence]], the
sequence usually written $s_k = (-1)^k$, characterised by $s_0 = 1$ and
$s_{k+1} = -s_k$. Then

$$\liminf_{k} s_k = -1, \qquad \limsup_{k} s_k = 1,$$

so the two differ and $(s_k)$ neither converges nor diverges to $\pm\infty$
([[thm-convergence-iff-limsup-equals-liminf]]).

This is the smallest example in which the inequality
$\liminf \le \limsup$ is strict, and it shows exactly what the gap measures: the
sequence keeps returning to two different values, and neither of them can be the
limit because the other keeps interrupting.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ and the index maps $e, o$ of [[lem-alternating-sequence]], and the tail ranges $T_n = \{s_k : k \ge n\}$ with extended tail bounds $s\!\sup_n := \sup T_n$ and $s\!\inf_n := \inf T_n$ ([[def-limsup-liminf]]).

[L1] The alternating sequence: $|s_k| = 1$ for every $k$, $s_{e_j} = 1$ and $s_{o_j} = -1$ for every $j$, and $e$, $o$ are strictly increasing ([[lem-alternating-sequence]]).

[L2] A strictly increasing index map satisfies $n_j \ge j$ ([[lem-index-map-grows]]).

[L3] Limit superior and limit inferior: $\limsup_k z_k = \inf\{\sup T_n(z)\}$ and $\liminf_k z_k = \sup\{\inf T_n(z)\}$, all four kinds of bound existing in $\overline{\mathbb{R}}$ for every sequence, the supremum being the least upper bound and the infimum the greatest lower bound ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]], [[def-sequence]]).

[L4] The order on $\overline{\mathbb{R}}$ is total and restricts on $\mathbb{R}$ to the order of $\mathbb{R}$ ([[def-extended-reals]]).

[L5] Absolute value: $|t| = 1$ forces $t = 1$ or $t = -1$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L6] Order arithmetic: $0 < 1$, hence $-1 < 1$ and $-1 \ne 1$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L7] A real sequence converges to $L \in \mathbb{R}$ exactly when $\liminf = \limsup = L$, and diverges to $\pm\infty$ exactly when both equal $\pm\infty$ ([[thm-convergence-iff-limsup-equals-liminf]]).

## Verification

**Proof technique:** direct.

1.1 Every value of the sequence is $1$ or $-1$, since $|s_k| = 1$. [given, L1, L5]

1.2 For every $n \in \mathbb{N}$ both values occur at some index $\ge n$: $s_{e_n} = 1$ with $e_n \ge n$, and $s_{o_n} = -1$ with $o_n \ge n$. [given, L1, L2]

2.1 Hence $T_n = \{1, -1\}$ for every $n$. Its least upper bound in $\overline{\mathbb{R}}$ is $1$, since $1$ bounds both elements from above, using $-1 < 1$, and any upper bound is $\ge 1$ because $1 \in T_n$; dually its greatest lower bound is $-1$. [step 1.1, step 1.2, L3, L4, L6]

3.1 Therefore the family of tail suprema is the one-element family $\{1\}$, whose greatest lower bound is $1$, so $\limsup_k s_k = 1$; and the family of tail infima is $\{-1\}$, whose least upper bound is $-1$, so $\liminf_k s_k = -1$. [step 2.1, L3, L4]

4.1 Since $-1 \ne 1$, there is no $L$ with $\liminf_k s_k = \limsup_k s_k = L$, so by [L7] the sequence converges to no real number and diverges to neither $+\infty$ nor $-\infty$. [step 3.1, L6, L7] ∎

## Remarks

- **The two values are exactly the subsequential limits.** By
  [[thm-limsup-is-greatest-subsequential-limit]] and
  [[cor-liminf-is-least-subsequential-limit]] the numbers $1$ and $-1$ are the
  greatest and least elements of $\overline{\operatorname{SL}}(s)$, and since
  every term is $1$ or $-1$ no other value can be a subsequential limit, so
  $\operatorname{SL}(s) = \{-1, 1\}$ exactly.

- **Contrast with [[ex-two-subsequential-limits]].** There the same two
  subsequential limits arise for a sequence none of whose terms equals either of
  them. The limit superior and limit inferior do not care: they are determined by
  the tails, not by whether the values are attained.

- **This sequence is the standard witness for strictness throughout the page.**
  It drives [[fs-limsup-additive]] and [[cex-limsup-subadditivity-strict]], and,
  after an affine change, [[cex-limsup-product-strict]].
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

### `lem-extended-reals-complete`

````markdown
---
id: lem-extended-reals-complete
kind: lemma
title: "Every subset of $\\overline{\\mathbb{R}}$ has a least upper bound and a greatest lower bound in $\\overline{\\mathbb{R}}$, agreeing with the real supremum and infimum on nonempty sets bounded in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-extended-reals, def-upper-bound, def-partial-order, def-complete-ordered-field, thm-infimum-property, def-bounded-set, def-infimum, def-real-order]
justified_by: []
aliases: []
landmark: true
short: "$\\overline{\\mathbb{R}}$ is order complete"
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
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "Complete lattice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_lattice"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $A \subseteq \overline{\mathbb{R}}$ be **any** subset of the extended real
line ([[def-extended-reals]]) and write $A_{\mathbb{R}} := A \cap \mathbb{R}$.
Then $A$ has a least upper bound and a greatest lower bound in
$\overline{\mathbb{R}}$ ([[def-upper-bound]]), each unique, which we write
$\sup A$ and $\inf A$ with the ambient set always $\overline{\mathbb{R}}$.
Explicitly:

- $\sup A = +\infty$ if $+\infty \in A$, or if $A_{\mathbb{R}}$ is not bounded above in $\mathbb{R}$;
- $\sup A = -\infty$ if $+\infty \notin A$ and $A_{\mathbb{R}} = \emptyset$;
- $\sup A$ is the real supremum $\sup A_{\mathbb{R}}$ ([[def-complete-ordered-field]]) if $+\infty \notin A$ and $A_{\mathbb{R}}$ is nonempty and bounded above in $\mathbb{R}$;

and dually, with $-\infty$ and $+\infty$ exchanged and "above" replaced by
"below", for $\inf A$ ([[def-infimum]], [[thm-infimum-property]]).

**Agreement.** If $A \subseteq \mathbb{R}$ is nonempty and bounded above in
$\mathbb{R}$ ([[def-bounded-set]]) then $\sup A$ computed in
$\overline{\mathbb{R}}$ is the real number $\sup A$ of
[[def-complete-ordered-field]]; if $A \subseteq \mathbb{R}$ is nonempty and
bounded below then $\inf A$ computed in $\overline{\mathbb{R}}$ is the real
number $\inf A$ of [[thm-infimum-property]]. In particular the notation is
unambiguous on the sets for which the real supremum and infimum are defined, and
$\sup \emptyset = -\infty$, $\inf \emptyset = +\infty$ in
$\overline{\mathbb{R}}$.

**No hypothesis is placed on $A$.** This is exactly what the real supremum cannot
do, and it is why every $\limsup$ statement on this page holds for every sequence
rather than for bounded ones only. It is also not a weakening of the discipline
this library keeps around suprema: the operation supplied here is a *different*
operation, taken in a *different* ordered set, and the agreement clause records
exactly where the two coincide.

## Facts & Assumptions

**Given:** A subset $A \subseteq \overline{\mathbb{R}}$, and its real part $A_{\mathbb{R}} := A \cap \mathbb{R}$.

[L1] $(\overline{\mathbb{R}}, \le)$ is a totally ordered set in which $-\infty$ is the least element and $+\infty$ the greatest, and whose order restricted to $\mathbb{R}$ is the order of $\mathbb{R}$ ([[def-extended-reals]], [[def-partial-order]], [[def-real-order]]).

[L2] Upper and lower bounds in a poset: $u$ is an upper bound of $A$ when $a \le u$ for all $a \in A$, and a least upper bound when moreover $u \le v$ for every upper bound $v$; dually for lower bounds and greatest lower bounds. Each is unique when it exists, by antisymmetry ([[def-upper-bound]], [[def-partial-order]]).

[L3] Least-upper-bound property of $\mathbb{R}$: every nonempty $S \subseteq \mathbb{R}$ that is bounded above in $\mathbb{R}$ has a real least upper bound $\sup S$ ([[def-complete-ordered-field]]).

[L4] Greatest-lower-bound property of $\mathbb{R}$: every nonempty $S \subseteq \mathbb{R}$ that is bounded below in $\mathbb{R}$ has a real greatest lower bound $\inf S$ ([[thm-infimum-property]], [[def-infimum]]).

[L5] Bounded above and bounded below in $\mathbb{R}$ mean the existence of a real upper, respectively lower, bound ([[def-bounded-set]]).

## Proof

**Proof technique:** cases.

1.1 Case S1 for the supremum: $+\infty \in A$. [given, assume-case suptop]

1.2 Case S2 for the supremum: $+\infty \notin A$ and $A_{\mathbb{R}} = \emptyset$, so that every element of $A$ equals $-\infty$. [given, assume-case supbot]

1.3 Case S3 for the supremum: $+\infty \notin A$, $A_{\mathbb{R}} \ne \emptyset$, and $A_{\mathbb{R}}$ is bounded above in $\mathbb{R}$. [given, assume-case supfin]

1.4 Case S4 for the supremum: $+\infty \notin A$, $A_{\mathbb{R}} \ne \emptyset$, and $A_{\mathbb{R}}$ is not bounded above in $\mathbb{R}$. [given, assume-case supunb]

1.5 Case I1 for the infimum: $-\infty \in A$. [given, assume-case infbot]

1.6 Case I2 for the infimum: $-\infty \notin A$ and $A_{\mathbb{R}} = \emptyset$, so that every element of $A$ equals $+\infty$. [given, assume-case inftop]

1.7 Case I3 for the infimum: $-\infty \notin A$, $A_{\mathbb{R}} \ne \emptyset$, and $A_{\mathbb{R}}$ is bounded below in $\mathbb{R}$. [given, assume-case inffin]

1.8 Case I4 for the infimum: $-\infty \notin A$, $A_{\mathbb{R}} \ne \emptyset$, and $A_{\mathbb{R}}$ is not bounded below in $\mathbb{R}$. [given, assume-case infunb]

2.1 In case S1 the element $+\infty$ is an upper bound of $A$, being the greatest element of $\overline{\mathbb{R}}$; and if $v$ is any upper bound of $A$ then $+\infty \in A$ gives $+\infty \le v$, whence $v = +\infty$ by antisymmetry. So $+\infty$ is the least upper bound of $A$. [step 1.1, L1, L2]

2.2 In case S2 every element of $A$ equals $-\infty$, so $-\infty$ is an upper bound of $A$ by reflexivity; and $-\infty \le v$ for every $v \in \overline{\mathbb{R}}$, being the least element. So $-\infty$ is the least upper bound of $A$. [step 1.2, L1, L2]

2.3 In case S3 the real number $\sigma := \sup A_{\mathbb{R}}$ exists, and it is an upper bound of $A$ in $\overline{\mathbb{R}}$: an element of $A$ is either real, hence lies in $A_{\mathbb{R}}$ and satisfies $a \le \sigma$ in $\mathbb{R}$ and so in $\overline{\mathbb{R}}$, or equals $-\infty$, which is $\le \sigma$; the value $+\infty$ does not occur in $A$ in this case. [step 1.3, L1, L3]

2.4 In case S4 the element $+\infty$ is an upper bound of $A$; and if $v$ is an upper bound then $v \ne -\infty$, because fixing $a \in A_{\mathbb{R}}$, which is possible in this case, gives $a \le v$ with $a$ real and $-\infty$ is below no real, while $v$ real would make $v$ a real upper bound of $A_{\mathbb{R}}$ and contradict the case hypothesis. So $v = +\infty$, and $+\infty$ is the least upper bound of $A$. [step 1.4, L1, L2, L5]

2.5 In case I1 the element $-\infty$ is a lower bound of $A$, being least; and any lower bound $w$ satisfies $w \le -\infty$ because $-\infty \in A$, whence $w = -\infty$ by antisymmetry. So $-\infty$ is the greatest lower bound of $A$. [step 1.5, L1, L2]

2.6 In case I2 every element of $A$ equals $+\infty$, so $+\infty$ is a lower bound of $A$ by reflexivity, and $w \le +\infty$ for every $w$. So $+\infty$ is the greatest lower bound of $A$. [step 1.6, L1, L2]

2.7 In case I3 the real number $\iota := \inf A_{\mathbb{R}}$ exists and is a lower bound of $A$ in $\overline{\mathbb{R}}$: an element of $A$ is either real, hence in $A_{\mathbb{R}}$ and $\ge \iota$, or equals $+\infty \ge \iota$; the value $-\infty$ does not occur in $A$ in this case. [step 1.7, L1, L4]

2.8 In case I4 the element $-\infty$ is a lower bound of $A$; any lower bound $w$ satisfies $w \ne +\infty$, because fixing $a \in A_{\mathbb{R}}$ gives $w \le a$ with $a$ real and $+\infty$ is above no real, while $w$ real would be a real lower bound of $A_{\mathbb{R}}$ and contradict the case hypothesis. So $w = -\infty$ is the greatest lower bound of $A$. [step 1.8, L1, L2, L5]

3.1 In case S3 let $v$ be any upper bound of $A$ and fix $a \in A_{\mathbb{R}}$, which is possible since $A_{\mathbb{R}} \ne \emptyset$. From $a \le v$ with $a$ real we get $v \ne -\infty$, since $-\infty$ is below no real. If $v = +\infty$ then $\sigma \le v$ because $+\infty$ is greatest. Otherwise $v$ is real, and it bounds $A_{\mathbb{R}}$ above in $\mathbb{R}$, so $\sigma \le v$ by leastness of the real supremum. Hence $\sigma$ is the least upper bound of $A$. [step 1.3, step 2.3, L1, L2, L3]

3.2 In case I3 let $w$ be a lower bound of $A$ and fix $a \in A_{\mathbb{R}}$. From $w \le a$ with $a$ real we get $w \ne +\infty$. If $w = -\infty$ then $w \le \iota$; otherwise $w$ is real and bounds $A_{\mathbb{R}}$ below in $\mathbb{R}$, so $w \le \iota$. Hence $\iota$ is the greatest lower bound of $A$. [step 1.7, step 2.7, L1, L2, L4]

4.1 The four supremum cases are exhaustive and mutually exclusive: either $+\infty \in A$, which is S1, or not, and then either $A_{\mathbb{R}} = \emptyset$, which is S2, or $A_{\mathbb{R}} \ne \emptyset$ and it is bounded above in $\mathbb{R}$, which is S3, or it is not, which is S4. In each case a least upper bound was produced, and it is unique. The same four alternatives with $-\infty$, $+\infty$ and "below" in place of $+\infty$, $-\infty$ and "above" are I1 to I4, and in each a greatest lower bound was produced. [step 2.1, step 2.2, step 3.1, step 2.4, step 2.5, step 2.6, step 3.2, step 2.8, L2, L5, cases: a two-fold split followed by a three-fold split, cases-exhaustive]

5.1 The agreement clause follows: a nonempty $A \subseteq \mathbb{R}$ bounded above in $\mathbb{R}$ satisfies $+\infty \notin A$ and $A_{\mathbb{R}} = A$, so case S3 applies and $\sup A = \sup A_{\mathbb{R}}$ is the real supremum; a nonempty $A \subseteq \mathbb{R}$ bounded below satisfies case I3 and $\inf A$ is the real infimum; and $A = \emptyset$ falls under S2 and I2, giving $\sup \emptyset = -\infty$ and $\inf \emptyset = +\infty$. [step 2.3, step 3.1, step 2.7, step 3.2, step 4.1, L3, L4] ∎

## Remarks

- **What makes this work is that $\overline{\mathbb{R}}$ has a top and a bottom.**
  The three defining clauses of the order ([[def-extended-reals]]) put $+\infty$
  above everything and $-\infty$ below everything, and every case above is settled
  by one of those two facts or by the least-upper-bound property of $\mathbb{R}$
  applied to the real part. Nothing else about $\overline{\mathbb{R}}$ is used,
  and in particular no arithmetic is used at all.

- **The two exceptional cases of [[fs-every-set-has-sup]] are not repaired, they
  are relocated.** That false statement records that in $\mathbb{R}$ a set may
  fail to have a supremum, and it stays true; the discipline of
  [[rem-sup-conventions]], which refuses to write $\sup S = +\infty$ inside
  $\mathbb{R}$, also stays in force. What is proved here is a statement about a
  different ordered set.

- **The empty set is not an exception here, and that is the point of the
  ambient set.** In $\mathbb{R}$ the empty set has no supremum, because every
  real is an upper bound and there is no least one.
  In $\overline{\mathbb{R}}$ every element is still an upper bound of $\emptyset$,
  but now there *is* a least one, namely $-\infty$. The two statements are about
  different ordered sets and neither contradicts the other.

- **Where this is consumed.** [[def-limsup-liminf]] needs the supremum of a tail
  range of an arbitrary real sequence, which may be unbounded, and then the
  infimum of the resulting family, which may contain $+\infty$; both are supplied
  here and by nothing earlier in the library. Fourteen items on this page depend
  on it, and five more on the companion page of examples.
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

### `lem-limit-preserves-order`

````markdown
---
id: lem-limit-preserves-order
kind: lemma
title: "Limits preserve non-strict inequalities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-limit, def-sequence, lem-limit-unique, thm-algebra-of-limits, thm-of-archimedean, lem-of-add-order, lem-rat-embeds-dense, lem-of-inverse-positive, lem-of-abs-value, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$x_k\\le y_k$ gives $\\lim x_k\\le\\lim y_k$"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]). If $x_k \le y_k$ eventually, that
is for all $k$ from some index on, then

$$\lim_{k} x_k \;\le\; \lim_{k} y_k .$$

In particular, if $x_k \ge 0$ eventually then $\lim_k x_k \ge 0$, and if
$a \le x_k \le b$ eventually then $a \le \lim_k x_k \le b$.

The conclusion is **not** strict, and cannot be made strict; see the remarks
below and the false statement at the end of this page.

## Facts & Assumptions

**Given:** Sequences $(x_k)$, $(y_k)$ of reals with $(x_k)$ converging to $x$, $(y_k)$ converging to $y$, and an index $K_0 \in \mathbb{N}$ with $x_k \le y_k$ for every $k \ge K_0$ ([[def-sequence]], [[def-real-limit]]). Write $z_k := y_k - x_k$ and $z := y - x$.

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]).

[L2] Difference rule: $(z_k) = (y_k - x_k)$ converges to $y - x = z$ ([[thm-algebra-of-limits]]).

[L3] Small rationals: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$, by density ([[lem-rat-embeds-dense]]) or by the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$ ([[lem-of-inverse-positive]]).

[L4] Absolute value: $|u| < c$ if and only if $-c < u < c$, for $c > 0$ ([[lem-of-abs-value]]).

[L5] Order arithmetic in $\mathbb{R}$: adding a constant preserves $<$ and $\le$; $u \le v$ and $v < w$ give $u < w$; trichotomy, so exactly one of $z < 0$, $z = 0$, $z > 0$ holds and the negation of $z < 0$ is $z \ge 0$; $u \le v$ if and only if $v - u \ge 0$; and $u < u$ is impossible ([[lem-of-add-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).

[L6] The order on $\mathbb{N}$ is total, so any two indices admit a common upper bound ([[thm-nat-linear-order]]).

[L7] For $c \in \mathbb{R}$ the constant sequence $(c)$ converges to $c$ ([[def-sequence]], [[def-real-limit]]).

[L8] A sequence of reals has at most one limit ([[lem-limit-unique]]), which is what licenses writing $\lim_k x_k$ and $\lim_k y_k$ for the limits named in the statement; without it those symbols would not denote.

## Proof

**Proof technique:** contradiction.

1.1 By [L2] the sequence $(z_k)$ converges to $z = y - x$, and by hypothesis $z_k = y_k - x_k \ge 0$ for every $k \ge K_0$. [given, L2, L5]

1.2 Suppose, for contradiction, that $z < 0$. [assume-contra]

2.1 Then $-z > 0$, so by [L3] we may choose a rational $\varepsilon$ with $0 < \varepsilon < -z$. [step 1.2, L3, L5, choose]

3.1 Applying convergence of $(z_k)$ to this $\varepsilon$ gives $K_1 \in \mathbb{N}$ with $|z_k - z| < \varepsilon$ for all $k \ge K_1$, hence $z_k - z < \varepsilon$ and so $z_k < z + \varepsilon$ for all such $k$. [step 1.1, step 2.1, L1, L4, L5]

4.1 Fix an index $k$ with $k \ge K_0$ and $k \ge K_1$. Then $0 \le z_k < z + \varepsilon < z + (-z) = 0$, so $0 < 0$, which is impossible. [step 1.1, step 2.1, step 3.1, L5, L6]

5.1 The assumption $z < 0$ is therefore untenable; by trichotomy $z \ge 0$, that is $y - x \ge 0$, that is $x \le y$; since $x$ and $y$ are the unique limits of $(x_k)$ and $(y_k)$ by [L8], that is exactly $\lim_k x_k \le \lim_k y_k$. Since $(x_k)$ and $(y_k)$ were an arbitrary pair satisfying the hypotheses, the conclusion applies to every such pair, and the two stated special cases are instances of it. Let $(w_k)$ be convergent. If $w_k \ge 0$ from some index on, apply the conclusion to the pair consisting of the constant sequence $0$, which converges to $0$ by [L7], and of $(w_k)$: it gives $0 \le \lim_k w_k$. If $a \le w_k \le b$ from some index on, apply it first to the constant sequence $a$ and $(w_k)$, then to $(w_k)$ and the constant sequence $b$: it gives $a \le \lim_k w_k$ and $\lim_k w_k \le b$. [step 4.1, L5, L7, L8, discharge-contradiction] ∎

## Remarks

- The two special cases are instances of the main claim, discharged in step 5.1 by taking one of the two sequences constant; that a constant sequence converges to its value ([[def-sequence]]) is the only extra ingredient they need.

- **The inequality does not become strict.** From $x_k < y_k$ for every $k$ one may conclude only $\lim x_k \le \lim y_k$; the witness $x_k = 0 < 1/(k+1) = y_k$ has equal limits ([[fs-limit-preserves-strict-inequality]]). Intuitively, the order relation $<$ is not preserved by passage to a limit because a strict gap may shrink to nothing, while $\le$ is preserved because it is closed under that shrinking.

- The proof routes through the single sequence $(z_k) = (y_k - x_k)$ and the difference rule of [[thm-algebra-of-limits]]. That is not an economy of writing only: it isolates the one thing being proved, namely that a sequence eventually $\ge 0$ cannot have a negative limit.
````

### `lem-limsup-exists`

````markdown
---
id: lem-limsup-exists
kind: lemma
title: "The tail suprema of any real sequence are nonincreasing in $\\overline{\\mathbb{R}}$, so the limit superior exists for every sequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-limsup-liminf, def-extended-reals, lem-extended-reals-complete, def-upper-bound, def-partial-order, def-sequence, def-nat-order, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "$s_{n+1}\\le s_n$"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with tail ranges $T_n$ and
extended tail bounds $s_n = \sup T_n$, $i_n = \inf T_n$ as in
[[def-limsup-liminf]].

1. **Monotonicity of the extended bounds under inclusion.** If
   $A \subseteq B \subseteq \overline{\mathbb{R}}$ ([[def-extended-reals]]) then
   $$\sup A \le \sup B \qquad \text{and} \qquad \inf B \le \inf A,$$
   the four quantities being the extended bounds of [[lem-extended-reals-complete]].
   No hypothesis is placed on $A$ or $B$; in particular $A$ may be empty.
2. **The tail bounds are monotone.** $T_m \subseteq T_n$ whenever $n \le m$, and
   hence
   $$s_m \le s_n \qquad \text{and} \qquad i_n \le i_m \qquad (n \le m).$$
   In particular $s_{n+1} \le s_n$ and $i_n \le i_{n+1}$ for every $n$, and
   $i_n \le s_n$ for every $n$.
3. **Existence.** $\limsup_k x_k$ and $\liminf_k x_k$ exist in
   $\overline{\mathbb{R}}$ for **every** sequence of reals, bounded or not.

Claim 1 is the tool the rest of this page uses whenever two extended suprema are
compared. It is proved here, from the definition of a least upper bound, rather
than quoted from the suprema page, for the reason given in the remarks below.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, its tail ranges $T_n = \{x_k : k \ge n\}$, and the extended bounds $s_n = \sup T_n$, $i_n = \inf T_n$ ([[def-sequence]], [[def-limsup-liminf]]).

[L1] Every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound in $\overline{\mathbb{R}}$, with no hypothesis on the subset ([[lem-extended-reals-complete]]).

[L2] Least upper bound and greatest lower bound in a poset: $\sup A$ is an upper bound of $A$ that is $\le$ every upper bound of $A$, and $\inf A$ is a lower bound that is $\ge$ every lower bound; each is unique when it exists ([[def-upper-bound]], [[def-partial-order]]).

[L3] $(\overline{\mathbb{R}}, \le)$ is a totally ordered set, so its order is reflexive and transitive ([[def-extended-reals]], [[def-partial-order]]).

[L4] The order on $\mathbb{N}$ is total and transitive ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $A \subseteq B \subseteq \overline{\mathbb{R}}$ be arbitrary. By [L1] the four elements $\sup A$, $\sup B$, $\inf A$, $\inf B$ of $\overline{\mathbb{R}}$ all exist and are uniquely determined. [given, L1, L2]

1.2 Let $n \le m$ in $\mathbb{N}$. Every element of $T_m$ has the form $x_k$ with $k \ge m$, and then $k \ge n$ by transitivity, so $x_k \in T_n$; hence $T_m \subseteq T_n$. [given, L4]

1.3 For every $n$ the tail range $T_n$ contains $x_n$, so $i_n \le x_n$ because $i_n$ is a lower bound of $T_n$, and $x_n \le s_n$ because $s_n$ is an upper bound of $T_n$; transitivity gives $i_n \le s_n$. [given, L1, L2, L3]

2.1 Since $\sup B$ is an upper bound of $B$ and $A \subseteq B$, every element of $A$ is $\le \sup B$, so $\sup B$ is an upper bound of $A$; as $\sup A$ is the least of the upper bounds of $A$, this gives $\sup A \le \sup B$. Dually $\inf B$ is a lower bound of $B$, hence of $A$, and as $\inf A$ is the greatest of the lower bounds of $A$ this gives $\inf B \le \inf A$. Claim 1 is proved. [step 1.1, L1, L2]

3.1 Applying claim 1 to the inclusion $T_m \subseteq T_n$ valid for $n \le m$ gives $s_m \le s_n$ and $i_n \le i_m$; the special case $m = n + 1$ gives $s_{n+1} \le s_n$ and $i_n \le i_{n+1}$. Together with $i_n \le s_n$ this is claim 2. [step 1.2, step 1.3, step 2.1]

4.1 The families $\{s_n : n \in \mathbb{N}\}$ and $\{i_n : n \in \mathbb{N}\}$ are subsets of $\overline{\mathbb{R}}$, so [L1] applies to them with no hypothesis, and $\limsup_k x_k = \inf\{s_n\}$ and $\liminf_k x_k = \sup\{i_n\}$ exist in $\overline{\mathbb{R}}$ for every sequence of reals. This is claim 3. [step 3.1, L1, L2] ∎

## Remarks

- **The monotonicity is where the two operations of the definition interlock.**
  Because $(s_n)$ is nonincreasing, the outer infimum in
  $\limsup_k x_k = \inf_n s_n$ is an infimum of a decreasing family, so it is the
  value the tail suprema are pressing down towards; and because $(i_n)$ is
  nondecreasing, $\liminf_k x_k = \sup_n i_n$ is the value the tail infima are
  pressing up towards. Nothing in this lemma says the pressing converges, and for
  an unbounded sequence there is nothing in $\mathbb{R}$ for it to converge to;
  the exact statement is [[lem-limsup-epsilon-characterisation]].

- **Why the word "nonincreasing" is spelled out rather than cited.**
  [[def-monotone-sequence]] defines monotone for sequences of *reals*, and
  $(s_n)$ takes values in $\overline{\mathbb{R}}$, so the definition does not
  apply to it. Claim 2 is therefore stated as the inequality it is. When $(x_k)$
  is bounded every $s_n$ is real ([[def-limsup-liminf]]) and $(s_n)$ is then a
  nonincreasing sequence of reals in the sense of [[def-monotone-sequence]], but
  no proof on this page needs that reading.

- **Claim 1 is not [[lem-sup-monotone]].** That lemma is the same one-line
  argument carried out in $\mathbb{R}$, and its statement carries the hypotheses
  that the smaller set be nonempty and the larger one bounded above, without
  which neither supremum denotes anything. Those are exactly the hypotheses that
  the extended bounds of [[lem-extended-reals-complete]] dispense with, so the
  extended statement is not an instance of the real one and is proved from the
  definition of a least upper bound instead.

- **Claim 1 costs nothing and is used everywhere.** It is the one-line poset
  argument: the larger set's supremum bounds the smaller set, and leastness does
  the rest. It is stated as part of this lemma rather than as an item of its own
  because it is used only in company with the tail bounds.
````

### `lem-nat-discrete`

````markdown
---
id: lem-nat-discrete
kind: lemma
title: "Discreteness: $\\sigma(n)$ is the immediate successor"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-nat-order, def-nat-addition, lem-nat-nonzero-is-successor, lem-nat-add-successor-left, lem-nat-add-cancellative, lem-nat-add-commutative, thm-omega-is-peano-system]
aliases: []
landmark: false
short: "$m<n\\iff\\sigma(m)\\le n$"
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
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

For all $m, n \in \mathbb{N}$: $m < n \iff \sigma(m) \le n$ ([[def-nat-order]]). Consequently there is no $k$ with $n < k < \sigma(n)$: the successor $\sigma(n)$ is the immediate successor of $n$.

## Facts & Assumptions

**Given:** The order $m \le n \iff \exists j\ (m + j = n)$, with $m < n$ meaning $m \le n$ and $m \ne n$ ([[def-nat-order]]), and addition with $m + 0 = m$, $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]).

[L1] Every nonzero natural is a successor: $j \ne 0 \Rightarrow j = \sigma(i)$ ([[lem-nat-nonzero-is-successor]]).

[L2] $\sigma(m) + i = \sigma(m + i)$ (the left successor law, [[lem-nat-add-successor-left]]) and $m + \sigma(i) = \sigma(m + i)$ (the addition recursion).

[L3] Cancellation: $x + k = y + k \Rightarrow x = y$ ([[lem-nat-add-cancellative]]).

[L4] $\sigma(x) \ne 0$ for every $x$ (Peano axiom P1) ([[thm-omega-is-peano-system]]).

[L5] Addition is commutative: $x + y = y + x$ ([[lem-nat-add-commutative]]).

## Proof

**Proof technique:** direct.

1.1 Forward: if $m < n$ then $m \le n$ and $m \ne n$, so $m + j = n$ for some $j$, with $j \ne 0$ since $j = 0$ would give $m = n$; then $j = \sigma(i)$ [L1] and $n = m + \sigma(i) = \sigma(m + i) = \sigma(m) + i$ [L2], hence $\sigma(m) \le n$. [given, L1, L2]

1.2 Backward: if $\sigma(m) \le n$ then $\sigma(m) + i = n$, so $n = \sigma(m) + i = \sigma(m + i) = m + \sigma(i)$ [L2], hence $m \le n$; and $m \ne n$, since $m = n$ would give $m + \sigma(i) = m = m + 0$, so $\sigma(i) + m = 0 + m$ by [L5] and $\sigma(i) = 0$ by [L3], contradicting [L4]; therefore $m < n$. [given, L2, L3, L4, L5]

2.1 No $k$ satisfies $n < k < \sigma(n)$: if $n < k$ then $\sigma(n) \le k$ by the equivalence, so $k \ge \sigma(n)$, contradicting $k < \sigma(n)$; thus $\sigma(n)$ is the immediate successor. [step 1.1, step 1.2] ∎
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

### `prop-of-multiply-inequalities`

````markdown
---
id: prop-of-multiply-inequalities
kind: proposition
title: "Multiplying inequalities of positives"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field, lem-of-sign-rules]
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
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field. If $0 < a < b$ and $0 < c < d$ then $ac < bd$. If $0 \le a \le b$ and $0 \le c \le d$ then $ac \le bd$.

## Facts & Assumptions

**Given:** Elements $a, b, c, d$ of an ordered field $F$.

[L1] For a positive multiplier $c > 0$: $x < y \iff xc < yc$; multiplying a strict inequality by a positive element preserves it ([[lem-of-sign-rules]]).

[L2] For $c \ge 0$: $x \le y \Rightarrow xc \le yc$; the case $c > 0$ is [L1] and the case $c = 0$ gives $0 \le 0$ ([[lem-of-sign-rules]]).

[L3] The order is transitive: if $x < y$ and $y < z$ then $x < z$, and likewise for $\le$, since the positive cone is closed under addition ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $0 < a < b$ and $0 < c < d$; since $c > 0$, scaling $a < b$ by $c$ gives $ac < bc$. [L1]

1.2 Since $b > 0$ (from $0 < a < b$), scaling $c < d$ by $b$ gives $bc < bd$. [L1]

1.3 Assume instead $0 \le a \le b$ and $0 \le c \le d$; since $c \ge 0$, from $a \le b$ we get $ac \le bc$. [L2]

1.4 Since $b \ge 0$ (from $0 \le a \le b$), from $c \le d$ we get $bc \le bd$. [L2]

2.1 By transitivity, $ac < bc < bd$, hence $ac < bd$, proving the strict claim. [L3, step 1.1, step 1.2]

2.2 By transitivity of $\le$, $ac \le bc \le bd$, hence $ac \le bd$, proving the nonstrict claim. [L3, step 1.3, step 1.4]

3.1 Both the strict and the nonstrict inequalities hold. [step 2.1, step 2.2] ∎
````

### `thm-induction-principle`

````markdown
---
id: thm-induction-principle
kind: theorem
title: "The principle of mathematical induction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-inductive-set, lem-omega-smallest-inductive]
aliases: [principle-of-induction, induction-principle]
landmark: true
short: "$0\\in S$, $\\sigma$-closed $\\Rightarrow S=\\mathbb N$"
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
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ is the smallest inductive set ([[def-inductive-set]], [[def-natural-numbers]], [[lem-omega-smallest-inductive]]); $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$.

[L1] $\omega$ is contained in every inductive set ([[lem-omega-smallest-inductive]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $S \subseteq \mathbb{N}$ with $0 = \varnothing \in S$ and ($x \in S \Rightarrow \sigma(x) = x \cup \{x\} \in S$). [given]

2.1 Then $S$ contains $\varnothing$ and is closed under $x \mapsto x \cup \{x\}$, so $S$ is an inductive set. [step 1.1]

3.1 $\mathbb{N} = \omega \subseteq S$ because $\omega$ is a subset of every inductive set. [L1, step 2.1]

4.1 With $S \subseteq \mathbb{N}$ by hypothesis, $S = \mathbb{N}$. [step 3.1, given]

5.1 The property form is the set case with $S = \{n \in \mathbb{N} : P(n)\}$: $P(0)$ and $P(n) \Rightarrow P(\sigma(n))$ give $0 \in S$ and $\sigma$-closure, so $S = \mathbb{N}$, i.e. $P$ holds for all $n$; conversely the set form is the property form applied to $P(n) :\equiv n \in S$, so the two are equivalent. [step 4.1] ∎
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

### `thm-subsequential-limit-set-closed`

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

