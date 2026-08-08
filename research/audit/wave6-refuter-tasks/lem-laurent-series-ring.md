## Target item — `lem-laurent-series-ring`

Normalized current SHA-256: `ae23dc7decf3769506b6d2f61928eb5eebba2406e532706f884ef4d1ce7223f6`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-laurent-series-ring
kind: lemma
title: "$\\mathbb{R}((t^{-1}))$ is a commutative ring: the product is a finite sum and both operations preserve support bounded below"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-laurent-series, thm-int-ordered-ring, def-int-order, def-int-operations, thm-well-ordering-principle, lem-nat-embeds-int, def-field, thm-reals-ordered-field]
aliases: []
landmark: false
short: "$K$ is a commutative ring"
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
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "B. Sambale, An invitation to formal power series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ be as in [[def-formal-laurent-series]], and let
$f, g \in K$, with $m, n \in \mathbb{Z}$ chosen so that $f(i) = 0$ for all
$i < m$ and $g(j) = 0$ for all $j < n$. Then:

1. **(Finiteness.)** For every $k \in \mathbb{Z}$ the set
   $S_k := \{\, (i,j) \in \mathbb{Z} \times \mathbb{Z} : i + j = k,\; f(i)g(j) \ne 0 \,\}$
   is finite, so $(fg)(k) = \sum_{i+j=k} f(i)g(j)$ is a finite sum of reals; and
   $S_k = \varnothing$ whenever $k < m + n$.
2. **(Closure.)** $f + g$, $-f$ and $fg$ lie in $K$, with $(f+g)(k) = 0$ for
   $k < \min(m,n)$ and $(fg)(k) = 0$ for $k < m + n$.
3. **(Ring.)** $(K, +, \cdot\,, 0_K, 1_K)$ is a commutative ring with identity,
   and $1_K \ne 0_K$.
4. **(Monomials and constants.)** $(t^{-a}h)(k) = h(k-a)$ for every $h \in K$
   and all $a, k \in \mathbb{Z}$; consequently $t^{-a} \, t^{-b} = t^{-(a+b)}$
   for all $a, b \in \mathbb{Z}$. Moreover $(\iota(c)f)(k) = c\, f(k)$ for all
   $c \in \mathbb{R}$ and $k \in \mathbb{Z}$.
5. **(Least element.)** Every nonempty $S \subseteq \mathbb{Z}$ that is bounded
   below has a least element. In particular $\operatorname{supp} f$ has a least
   element whenever $f \ne 0_K$, so the valuation $v(f)$ and the leading
   coefficient $\operatorname{lc}(f)$ of [[def-formal-laurent-series]] are
   defined.

## Facts & Assumptions

**Given:** $K$, its operations, $0_K$, $1_K$, the monomials $t^{-n}$ and the constants $\iota(c)$ as in [[def-formal-laurent-series]]; elements $f, g \in K$ and bounds $m, n \in \mathbb{Z}$ with $f(i) = 0$ for $i < m$ and $g(j) = 0$ for $j < n$.

[L1] $K$ consists of the functions $\mathbb{Z} \to \mathbb{R}$ whose support is bounded below; $(f+g)(k) = f(k) + g(k)$ and $(fg)(k) = \sum_{i+j=k} f(i)g(j)$; $0_K$ is the zero function, $1_K$ is $1$ at index $0$ and $0$ elsewhere, $t^{-a}$ is $1$ at index $a$ and $0$ elsewhere, and $\iota(c)$ is $c$ at index $0$ and $0$ elsewhere ([[def-formal-laurent-series]]).

[L2] $\mathbb{Z}$ is a totally ordered commutative ring: its order is total, and $x \le y$ implies $x + z \le y + z$ ([[thm-int-ordered-ring]], [[def-int-order]], [[def-int-operations]]).

[L3] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] The map $\varepsilon(a) = [(a,0)]$ is injective from $\mathbb{N}$ onto the set of nonnegative integers and preserves addition and order, so every integer $x \ge 0$ is $\varepsilon(a)$ for a unique natural $a$ ([[lem-nat-embeds-int]]).

[L5] $\mathbb{R}$ is a field: addition and multiplication are associative and commutative, multiplication distributes over addition, $0 \ne 1$, and a finite sum of reals is independent of the order and bracketing of its terms ([[def-field]], [[thm-reals-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Let $S \subseteq \mathbb{Z}$ be nonempty with $s \ge b$ for all $s \in S$. Every element of $T := \{\, s - b : s \in S \,\}$ is a nonnegative integer, so by [L4] $T = \{\, \varepsilon(a) : a \in A \,\}$ for a nonempty $A \subseteq \mathbb{N}$; by [L3] $A$ has a least element $a_0$, and since $\varepsilon$ preserves order and $x \mapsto x + b$ preserves order, $\varepsilon(a_0) + b$ is an element of $S$ that is $\le$ every element of $S$. [L2, L3, L4]

1.2 Fix $k \in \mathbb{Z}$ and let $(i,j) \in S_k$. Then $f(i) \ne 0$ and $g(j) \ne 0$, so $i \ge m$ and $j \ge n$; from $i + j = k$ and $j \ge n$ we get $i = k - j \le k - n$. Hence $m \le i \le k - n$, and $j = k - i$ is determined by $i$. [given, L1, L2]

2.1 The integers $i$ with $m \le i \le k - n$ are in order-preserving bijection with the naturals $a$ satisfying $\varepsilon(a) \le k - n - m$ by [L4], and there are finitely many of these, none at all when $k - n - m < 0$; so $S_k$ is a finite set by [step 1.2], it is empty whenever $k < m + n$, and therefore $(fg)(k)$ is a finite sum of reals which is $0$ whenever $k < m + n$. [step 1.2, L2, L4, L5]

3.1 $(f+g)(k) = f(k) + g(k) = 0$ for every $k < \min(m,n)$ and $(-f)(k) = -f(k) = 0$ for every $k < m$, so $f + g$ and $-f$ have support bounded below; and $(fg)(k) = 0$ for every $k < m+n$ by [step 2.1], so $fg$ does too. All three therefore lie in $K$. [step 2.1, given, L1, L5]

3.2 $(fg)(k) = \sum_{i+j=k} f(i)g(j) = \sum_{j+i=k} g(j)f(i) = (gf)(k)$, since the two sums have the same finite index set and their terms agree by commutativity of multiplication in $\mathbb{R}$; so multiplication on $K$ is commutative. [step 2.1, L5]

3.3 For $f, g, h \in K$ and $k \in \mathbb{Z}$, expanding both $((fg)h)(k)$ and $(f(gh))(k)$ by [L1] and [L5] gives the sum of $f(i)g(j)h(l)$ over the triples $(i,j,l)$ with $i + j + l = k$ and $f(i)g(j)h(l) \ne 0$; that set is finite because the argument of [step 1.2] bounds $i$, $j$ and $l$ from below and hence, as in [step 2.1], from above as well. So multiplication on $K$ is associative. [step 1.2, step 2.1, L5]

3.4 $(f(g+h))(k) = \sum_{i+j=k} f(i)\bigl(g(j) + h(j)\bigr) = \sum_{i+j=k} f(i)g(j) + \sum_{i+j=k} f(i)h(j) = (fg)(k) + (fh)(k)$, all three sums being finite; so multiplication distributes over addition. [step 2.1, L5]

3.5 For $h \in K$, $(t^{-a}h)(k) = \sum_{i+j=k} t^{-a}(i)h(j)$ has at most one nonzero term, the one with $i = a$ and $j = k - a$, so $(t^{-a}h)(k) = h(k-a)$; taking $h = t^{-b}$ gives $(t^{-a}t^{-b})(k) = t^{-b}(k-a)$, which is $1$ when $k = a+b$ and $0$ otherwise, that is, $t^{-a}t^{-b} = t^{-(a+b)}$. [step 2.1, L1]

3.6 $(\iota(c)f)(k) = \sum_{i+j=k} \iota(c)(i) f(j)$ has at most one nonzero term, the one with $i = 0$ and $j = k$, so $(\iota(c)f)(k) = c\,f(k)$. [step 2.1, L1]

3.7 $(f \cdot 1_K)(k) = \sum_{i+j=k} f(i) 1_K(j)$ has at most one nonzero term, the one with $j = 0$ and $i = k$, so $(f \cdot 1_K)(k) = f(k)$ and $f \cdot 1_K = f$; moreover $1_K(0) = 1 \ne 0 = 0_K(0)$, so $1_K \ne 0_K$. [step 2.1, L1, L5]

4.1 Addition on $K$ is defined index by index, and $K$ is closed under it and under negation by [step 3.1]; so associativity, commutativity, the law $f + 0_K = f$ and the law $f + (-f) = 0_K$ each hold at every index by the corresponding law in $\mathbb{R}$, and $(K, +, 0_K)$ is an abelian group. [step 3.1, L1, L5]

5.1 By [step 4.1] addition makes $K$ an abelian group, by [step 3.2], [step 3.3] and [step 3.7] multiplication is commutative and associative with identity $1_K \ne 0_K$, and by [step 3.4] it distributes over addition; hence $K$ is a commutative ring with identity. [step 3.2, step 3.3, step 3.4, step 3.7, step 4.1]

6.1 Clause 1 is [step 2.1], clause 2 is [step 3.1] with [step 2.1], clause 3 is [step 5.1], clause 4 is [step 3.5] and [step 3.6], and clause 5 is [step 1.1] applied to $S = \operatorname{supp} f$, which is nonempty when $f \ne 0_K$ and bounded below because $f \in K$. [step 1.1, step 2.1, step 3.1, step 3.5, step 3.6, step 5.1] ∎
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-formal-laurent-series",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the field of real numbers with its order\n([[def-real-numbers]], [[thm-reals-ordered-field]]) and $\\mathbb{Z}$ is the\ntotally ordered commutative ring of integers ([[def-integers]],\n[[def-int-operations]], [[def-int-order]], [[thm-int-ordered-ring]]).\n\nFor a function $f : \\mathbb{Z} \\to \\mathbb{R}$ write\n\n$$\\operatorname{supp} f \\;:=\\; \\{\\, k \\in \\mathbb{Z} : f(k) \\ne 0 \\,\\},$$\n\nand say that $\\operatorname{supp} f$ is **bounded below** when there is\n$m \\in \\mathbb{Z}$ with $f(k) = 0$ for every $k < m$. The set of **formal Laurent\nseries in $t^{-1}$ over $\\mathbb{R}$** is\n\n$$K \\;=\\; \\mathbb{R}((t^{-1})) \\;:=\\; \\{\\, f : \\mathbb{Z} \\to \\mathbb{R} \\;\\mid\\; \\operatorname{supp} f \\text{ is bounded below} \\,\\},$$\n\nequipped with\n\n$$(f + g)(k) := f(k) + g(k), \\qquad (fg)(k) := \\sum_{i + j = k} f(i)\\,g(j),$$\n\nwhere the product sum ranges over the pairs $(i,j) \\in \\mathbb{Z} \\times\n\\mathbb{Z}$ with $i + j = k$ and $f(i)g(j) \\ne 0$. That set of pairs is finite\nfor every $k$, and $f + g$ and $fg$ again lie in $K$: this is\n[[lem-laurent-series-ring]], which also proves that $K$ with these operations is\na commutative ring whose zero $0_K$ is the constant function $0$ and whose\nidentity $1_K$ is the function taking the value $1$ at $0$ and $0$ elsewhere.\n\n**Distinguished elements.** For $n \\in \\mathbb{Z}$ let $t^{-n} \\in K$ be the\nfunction taking the value $1$ at $n$ and $0$ at every other index; so\n$t^{0} = 1_K$, and $t := t^{-(-1)}$ is the function taking the value $1$ at $-1$.\nFor $c \\in \\mathbb{R}$ let $\\iota(c) \\in K$ be the function taking the value $c$\nat $0$ and $0$ elsewhere. The notation $t^{-n}$ is *defined* here as a name;\nthat it is consistent with the ring multiplication, $t^{-m} \\, t^{-n} =\nt^{-(m+n)}$, is proved in [[lem-laurent-series-ring]].\n\n**Series notation.** Because $\\operatorname{supp} f$ is bounded below, say by\n$m$, one writes\n\n$$f \\;=\\; \\sum_{k \\ge m} f(k)\\, t^{-k},$$\n\na purely notational device: the object is the function $f$, and no convergence\nof any kind is asserted or used.\n\n**Valuation and leading coefficient.** Let $f \\in K$ with $f \\ne 0_K$. Then\n$\\operatorname{supp} f$ is nonempty and bounded below, so it has a least element\n([[lem-laurent-series-ring]]). Define\n\n$$v(f) \\;:=\\; \\min \\operatorname{supp} f \\in \\mathbb{Z}, \\qquad \\operatorname{lc}(f) \\;:=\\; f(v(f)) \\in \\mathbb{R} \\setminus \\{0\\}.$$\n\n$v(f)$ is the **valuation** and $\\operatorname{lc}(f)$ the **leading\ncoefficient** of $f$. Neither is defined at $f = 0_K$, whose support is empty;\nevery statement about $v$ or $\\operatorname{lc}$ in this library carries the\nhypothesis $f \\ne 0_K$ explicitly.\n\n**Order.** The **positive cone** of $K$ is\n\n$$P \\;:=\\; \\{\\, f \\in K : f \\ne 0_K \\text{ and } \\operatorname{lc}(f) > 0 \\,\\},$$\n\nthat is, a nonzero series is positive exactly when its lowest-index nonzero\ncoefficient is a positive real. That $(K, P)$ is an ordered field\n([[def-ordered-field]], [[def-field]]) is [[thm-laurent-ordered-field]], and\nthat every nonzero element of $K$ is invertible is\n[[thm-laurent-series-field]]. As in any ordered field, $f < g$ means\n$g - f \\in P$.",
      "uses": [
        "1.2",
        "3.1",
        "3.3",
        "3.5",
        "3.6",
        "3.7",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-int-ordered-ring",
      "source_section": "Statement",
      "quote": "The relation of [[def-int-order]] is well defined and is a total order on\n$\\mathbb{Z}$; it is compatible with addition ($x \\le y$ implies\n$x + z \\le y + z$) and positives are closed under multiplication\n($0 < x$ and $0 < y$ imply $0 < xy$). Thus $\\mathbb{Z}$ is a totally\nordered commutative ring.",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-int-order",
      "source_section": "Definition",
      "quote": "For integers $x = [(a,b)]$ and $y = [(c,d)]$ ([[def-integers]]) define\n\n$$x \\le y \\iff a + d \\le b + c \\quad \\text{in } \\mathbb{N}.$$\n\nWrite $x < y$ when $x \\le y$ and $x \\ne y$. An integer $x$ is **positive**\nwhen $0 < x$; on representatives, $0 < [(a,b)]$ exactly when $b < a$.",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-int-operations",
      "source_section": "Definition",
      "quote": "On $\\mathbb{Z}$ ([[def-integers]]) define, on representatives,\n\n$$[(a,b)] + [(c,d)] := [(a+c,\\; b+d)],$$\n$$[(a,b)] \\cdot [(c,d)] := [(ac+bd,\\; ad+bc)],$$\n$$-[(a,b)] := [(b,a)], \\qquad 0 := [(0,0)], \\qquad 1 := [(1,0)].$$\n\nThese do not depend on the chosen representatives\n([[lem-int-add-well-defined]], [[lem-int-mul-well-defined]]).",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-well-ordering-principle",
      "source_section": "Statement",
      "quote": "Every nonempty subset $S \\subseteq \\mathbb{N}$ has a least element: there is $\\ell \\in S$ with $\\ell \\le s$ for all $s \\in S$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-nat-embeds-int",
      "source_section": "Statement",
      "quote": "The map $\\iota(n) = [(n,0)]$ is injective and preserves addition,\nmultiplication, and order. Its image is exactly the set of nonnegative\nintegers, so every $x \\ge 0$ in $\\mathbb{Z}$ is $\\iota(k)$ for a unique\nnatural $k$.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-field",
      "source_section": "Definition",
      "quote": "A **field** is a set $F$ equipped with two binary operations $+$ (addition) and\n$\\cdot$ (multiplication) and two distinguished elements $0 \\ne 1$ of $F$,\nsatisfying:\n\n- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is\n  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an\n  additive inverse $-x$ with $x + (-x) = 0$.\n- **(M)** Multiplication is associative and commutative **on all of $F$**, and\n  $x \\cdot 1 = x$ for every $x \\in F$; moreover $(F \\setminus \\{0\\}, \\cdot)$ is an\n  abelian group with identity $1$, so every $x \\ne 0$ has a multiplicative inverse\n  $x^{-1}$ with $x \\cdot x^{-1} = 1$.\n- **(D)** Multiplication distributes over addition: $x \\cdot (y + z) = x\\cdot y + x\\cdot z$.\n\nWe write $x - y := x + (-y)$ and $x/y := x \\cdot y^{-1}$ (for $y \\ne 0$), and\nabbreviate $x \\cdot y$ as $xy$.",
      "uses": [
        "2.1",
        "3.1",
        "3.2",
        "3.3",
        "3.4",
        "3.7",
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-reals-ordered-field",
      "source_section": "Statement",
      "quote": "The relation of [[def-real-order]] is well defined and makes $\\mathbb{R}$\n([[thm-reals-field]]) a totally ordered field.",
      "uses": [
        "2.1",
        "3.1",
        "3.2",
        "3.3",
        "3.4",
        "3.7",
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Let $S \\subseteq \\mathbb{Z}$ be nonempty with $s \\ge b$ for all $s \\in S$. Every element of $T := \\{\\, s - b : s \\in S \\,\\}$ is a nonnegative integer, so by [L4] $T = \\{\\, \\varepsilon(a) : a \\in A \\,\\}$ for a nonempty $A \\subseteq \\mathbb{N}$; by [L3] $A$ has a least element $a_0$, and since $\\varepsilon$ preserves order and $x \\mapsto x + b$ preserves order, $\\varepsilon(a_0) + b$ is an element of $S$ that is $\\le$ every element of $S$.",
      "step": "1.1",
      "inputs": [
        "L4",
        "L3",
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Fix $k \\in \\mathbb{Z}$ and let $(i,j) \\in S_k$. Then $f(i) \\ne 0$ and $g(j) \\ne 0$, so $i \\ge m$ and $j \\ge n$; from $i + j = k$ and $j \\ge n$ we get $i = k - j \\le k - n$. Hence $m \\le i \\le k - n$, and $j = k - i$ is determined by $i$.",
      "step": "1.2",
      "inputs": [
        "L1",
        "L2",
        "given"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "The integers $i$ with $m \\le i \\le k - n$ are in order-preserving bijection with the naturals $a$ satisfying $\\varepsilon(a) \\le k - n - m$ by [L4], and there are finitely many of these, none at all when $k - n - m < 0$; so $S_k$ is a finite set by [step 1.2], it is empty whenever $k < m + n$, and therefore $(fg)(k)$ is a finite sum of reals which is $0$ whenever $k < m + n$.",
      "step": "2.1",
      "inputs": [
        "L4",
        "L2",
        "L5",
        "step 1.2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "$(f+g)(k) = f(k) + g(k) = 0$ for every $k < \\min(m,n)$ and $(-f)(k) = -f(k) = 0$ for every $k < m$, so $f + g$ and $-f$ have support bounded below; and $(fg)(k) = 0$ for every $k < m+n$ by [step 2.1], so $fg$ does too. All three therefore lie in $K$.",
      "step": "3.1",
      "inputs": [
        "L1",
        "L5",
        "step 2.1",
        "given"
      ]
    },
    {
      "id": "step-3.2",
      "claim": "$(fg)(k) = \\sum_{i+j=k} f(i)g(j) = \\sum_{j+i=k} g(j)f(i) = (gf)(k)$, since the two sums have the same finite index set and their terms agree by commutativity of multiplication in $\\mathbb{R}$; so multiplication on $K$ is commutative.",
      "step": "3.2",
      "inputs": [
        "L5",
        "step 2.1"
      ]
    },
    {
      "id": "step-3.3",
      "claim": "For $f, g, h \\in K$ and $k \\in \\mathbb{Z}$, expanding both $((fg)h)(k)$ and $(f(gh))(k)$ by [L1] and [L5] gives the sum of $f(i)g(j)h(l)$ over the triples $(i,j,l)$ with $i + j + l = k$ and $f(i)g(j)h(l) \\ne 0$; that set is finite because the argument of [step 1.2] bounds $i$, $j$ and $l$ from below and hence, as in [step 2.1], from above as well. So multiplication on $K$ is associative.",
      "step": "3.3",
      "inputs": [
        "L1",
        "L5",
        "step 1.2",
        "step 2.1"
      ]
    },
    {
      "id": "step-3.4",
      "claim": "$(f(g+h))(k) = \\sum_{i+j=k} f(i)\\bigl(g(j) + h(j)\\bigr) = \\sum_{i+j=k} f(i)g(j) + \\sum_{i+j=k} f(i)h(j) = (fg)(k) + (fh)(k)$, all three sums being finite; so multiplication distributes over addition.",
      "step": "3.4",
      "inputs": [
        "L5",
        "step 2.1"
      ]
    },
    {
      "id": "step-3.5",
      "claim": "For $h \\in K$, $(t^{-a}h)(k) = \\sum_{i+j=k} t^{-a}(i)h(j)$ has at most one nonzero term, the one with $i = a$ and $j = k - a$, so $(t^{-a}h)(k) = h(k-a)$; taking $h = t^{-b}$ gives $(t^{-a}t^{-b})(k) = t^{-b}(k-a)$, which is $1$ when $k = a+b$ and $0$ otherwise, that is, $t^{-a}t^{-b} = t^{-(a+b)}$.",
      "step": "3.5",
      "inputs": [
        "L1",
        "step 2.1"
      ]
    },
    {
      "id": "step-3.6",
      "claim": "$(\\iota(c)f)(k) = \\sum_{i+j=k} \\iota(c)(i) f(j)$ has at most one nonzero term, the one with $i = 0$ and $j = k$, so $(\\iota(c)f)(k) = c\\,f(k)$.",
      "step": "3.6",
      "inputs": [
        "L1",
        "step 2.1"
      ]
    },
    {
      "id": "step-3.7",
      "claim": "$(f \\cdot 1_K)(k) = \\sum_{i+j=k} f(i) 1_K(j)$ has at most one nonzero term, the one with $j = 0$ and $i = k$, so $(f \\cdot 1_K)(k) = f(k)$ and $f \\cdot 1_K = f$; moreover $1_K(0) = 1 \\ne 0 = 0_K(0)$, so $1_K \\ne 0_K$.",
      "step": "3.7",
      "inputs": [
        "L1",
        "L5",
        "step 2.1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Addition on $K$ is defined index by index, and $K$ is closed under it and under negation by [step 3.1]; so associativity, commutativity, the law $f + 0_K = f$ and the law $f + (-f) = 0_K$ each hold at every index by the corresponding law in $\\mathbb{R}$, and $(K, +, 0_K)$ is an abelian group.",
      "step": "4.1",
      "inputs": [
        "L1",
        "L5",
        "step 3.1"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "By [step 4.1] addition makes $K$ an abelian group, by [step 3.2], [step 3.3] and [step 3.7] multiplication is commutative and associative with identity $1_K \\ne 0_K$, and by [step 3.4] it distributes over addition; hence $K$ is a commutative ring with identity.",
      "step": "5.1",
      "inputs": [
        "step 4.1",
        "step 3.2",
        "step 3.3",
        "step 3.7",
        "step 3.4"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "Clause 1 is [step 2.1], clause 2 is [step 3.1] with [step 2.1], clause 3 is [step 5.1], clause 4 is [step 3.5] and [step 3.6], and clause 5 is [step 1.1] applied to $S = \\operatorname{supp} f$, which is nonempty when $f \\ne 0_K$ and bounded below because $f \\in K$.",
      "step": "6.1",
      "inputs": [
        "step 2.1",
        "step 3.1",
        "step 5.1",
        "step 3.5",
        "step 3.6",
        "step 1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "The empty convolution index set is handled explicitly at step 2.1, where it gives coefficient 0 below the product support bound."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "The zero series is covered at steps 3.1, 3.7, and 4.1; closure, the identity distinction, and additive inverses are all checked coefficientwise."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The singleton convolution case is the monomial calculation at step 3.5 and the identity calculation at step 3.7."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "If either factor is zero, step 2.1 gives an empty nonzero-term set at every coefficient and step 3.1 retains the zero product in K."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "The lower support endpoints m+n and min(m,n) are included correctly at steps 2.1 and 3.1; only indices strictly below them are forced to vanish."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "The only nonempty selection is the least element at step 1.1, supplied by well-ordering after an explicit translation to N."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional, so there is no forward implication boundary to audit."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional, so there is no reverse implication boundary to audit."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-laurent-series-ring",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-formal-laurent-series",
    "declared_target": "def-formal-laurent-series",
    "target_statement_provenance": null,
    "targetPage": "formal-laurent-series-field",
    "targetBatch": "wave6-real-analysis-laurent",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-laurent-series-ring",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "thm-int-ordered-ring",
    "declared_target": "thm-int-ordered-ring",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-laurent-series-ring",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-int-order",
    "declared_target": "def-int-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-laurent-series-ring",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-int-operations",
    "declared_target": "def-int-operations",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-laurent-series-ring",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
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
    "source": "lem-laurent-series-ring",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "lem-nat-embeds-int",
    "declared_target": "lem-nat-embeds-int",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-laurent-series-ring",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-field",
    "declared_target": "def-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-laurent-series-ring",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "thm-reals-ordered-field",
    "declared_target": "thm-reals-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (8)

### `def-field`

````markdown
---
id: def-field
kind: definition
title: "Field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
justified_by: [lem-of-inverse-unique]
aliases: []
landmark: false
short: "field"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-28
    scope: page
    delegated_by: owner
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
---

## Definition

A **field** is a set $F$ equipped with two binary operations $+$ (addition) and
$\cdot$ (multiplication) and two distinguished elements $0 \ne 1$ of $F$,
satisfying:

- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is
  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an
  additive inverse $-x$ with $x + (-x) = 0$.
- **(M)** Multiplication is associative and commutative **on all of $F$**, and
  $x \cdot 1 = x$ for every $x \in F$; moreover $(F \setminus \{0\}, \cdot)$ is an
  abelian group with identity $1$, so every $x \ne 0$ has a multiplicative inverse
  $x^{-1}$ with $x \cdot x^{-1} = 1$.
- **(D)** Multiplication distributes over addition: $x \cdot (y + z) = x\cdot y + x\cdot z$.

We write $x - y := x + (-y)$ and $x/y := x \cdot y^{-1}$ (for $y \ne 0$), and
abbreviate $x \cdot y$ as $xy$.

## Remarks

- The rationals $\mathbb{Q}$ ([[thm-rat-field]]) and both constructions of the
  reals ([[thm-reals-field]], [[thm-reals-dedekind-field]]) are fields. This
  definition states the field axioms once, abstractly, so that every field fact
  proved from them applies to all of these at once.
- The requirement $0 \ne 1$ excludes the trivial one-element structure.
- **Why (M) quantifies over all of $F$ explicitly** (amended 2026-07-28, owner
  approved). An earlier wording headed (M) with the group
  $(F \setminus \{0\}, \cdot)$ alone, and under that strict reading the axioms
  do not pin down the products $0 \cdot y$: take $\mathbb{F}_2$ and redefine
  $0 \cdot y := y$, which leaves (A) untouched, leaves
  $(F \setminus \{0\}, \cdot)$ the trivial group, and satisfies (D) in all eight
  instances, yet has $0 \cdot 1 = 1$ — making [[lem-of-zero-mult]] false in a
  purported model of the axioms. Associativity, commutativity and
  $x \cdot 1 = x$ are therefore asserted on **all** of $F$, the element $0$
  included. Commutativity on all of $F$ is also what turns (D) into its
  right-hand form $(y + z) \cdot x = y \cdot x + z \cdot x$, which
  [[lem-of-zero-mult]] uses.
- The identities $0, 1$ and the inverses $-x, x^{-1}$ are unique
  ([[lem-of-inverse-unique]]), so writing them as single-valued notation, and
  the abbreviations $x - y := x + (-y)$ and $x/y := x y^{-1}$, are legitimate.
````

### `def-formal-laurent-series`

````markdown
---
id: def-formal-laurent-series
kind: definition
title: "The formal Laurent series $\\mathbb{R}((t^{-1}))$: support bounded below, valuation, leading coefficient"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, thm-reals-ordered-field, def-integers, def-int-order, def-int-operations, thm-int-ordered-ring, def-field, def-ordered-field]
justified_by: [lem-laurent-series-ring, thm-laurent-series-field, thm-laurent-ordered-field]
aliases: []
landmark: true
short: "$\\mathbb{R}((t^{-1}))$"
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
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "B. Sambale, An invitation to formal power series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the field of real numbers with its order
([[def-real-numbers]], [[thm-reals-ordered-field]]) and $\mathbb{Z}$ is the
totally ordered commutative ring of integers ([[def-integers]],
[[def-int-operations]], [[def-int-order]], [[thm-int-ordered-ring]]).

For a function $f : \mathbb{Z} \to \mathbb{R}$ write

$$\operatorname{supp} f \;:=\; \{\, k \in \mathbb{Z} : f(k) \ne 0 \,\},$$

and say that $\operatorname{supp} f$ is **bounded below** when there is
$m \in \mathbb{Z}$ with $f(k) = 0$ for every $k < m$. The set of **formal Laurent
series in $t^{-1}$ over $\mathbb{R}$** is

$$K \;=\; \mathbb{R}((t^{-1})) \;:=\; \{\, f : \mathbb{Z} \to \mathbb{R} \;\mid\; \operatorname{supp} f \text{ is bounded below} \,\},$$

equipped with

$$(f + g)(k) := f(k) + g(k), \qquad (fg)(k) := \sum_{i + j = k} f(i)\,g(j),$$

where the product sum ranges over the pairs $(i,j) \in \mathbb{Z} \times
\mathbb{Z}$ with $i + j = k$ and $f(i)g(j) \ne 0$. That set of pairs is finite
for every $k$, and $f + g$ and $fg$ again lie in $K$: this is
[[lem-laurent-series-ring]], which also proves that $K$ with these operations is
a commutative ring whose zero $0_K$ is the constant function $0$ and whose
identity $1_K$ is the function taking the value $1$ at $0$ and $0$ elsewhere.

**Distinguished elements.** For $n \in \mathbb{Z}$ let $t^{-n} \in K$ be the
function taking the value $1$ at $n$ and $0$ at every other index; so
$t^{0} = 1_K$, and $t := t^{-(-1)}$ is the function taking the value $1$ at $-1$.
For $c \in \mathbb{R}$ let $\iota(c) \in K$ be the function taking the value $c$
at $0$ and $0$ elsewhere. The notation $t^{-n}$ is *defined* here as a name;
that it is consistent with the ring multiplication, $t^{-m} \, t^{-n} =
t^{-(m+n)}$, is proved in [[lem-laurent-series-ring]].

**Series notation.** Because $\operatorname{supp} f$ is bounded below, say by
$m$, one writes

$$f \;=\; \sum_{k \ge m} f(k)\, t^{-k},$$

a purely notational device: the object is the function $f$, and no convergence
of any kind is asserted or used.

**Valuation and leading coefficient.** Let $f \in K$ with $f \ne 0_K$. Then
$\operatorname{supp} f$ is nonempty and bounded below, so it has a least element
([[lem-laurent-series-ring]]). Define

$$v(f) \;:=\; \min \operatorname{supp} f \in \mathbb{Z}, \qquad \operatorname{lc}(f) \;:=\; f(v(f)) \in \mathbb{R} \setminus \{0\}.$$

$v(f)$ is the **valuation** and $\operatorname{lc}(f)$ the **leading
coefficient** of $f$. Neither is defined at $f = 0_K$, whose support is empty;
every statement about $v$ or $\operatorname{lc}$ in this library carries the
hypothesis $f \ne 0_K$ explicitly.

**Order.** The **positive cone** of $K$ is

$$P \;:=\; \{\, f \in K : f \ne 0_K \text{ and } \operatorname{lc}(f) > 0 \,\},$$

that is, a nonzero series is positive exactly when its lowest-index nonzero
coefficient is a positive real. That $(K, P)$ is an ordered field
([[def-ordered-field]], [[def-field]]) is [[thm-laurent-ordered-field]], and
that every nonzero element of $K$ is invertible is
[[thm-laurent-series-field]]. As in any ordered field, $f < g$ means
$g - f \in P$.

## Remarks

- **Why the support must be bounded below.** It is exactly what makes the
  product a finite sum. If arbitrary functions $\mathbb{Z} \to \mathbb{R}$ were
  admitted, the defining sum for $(fg)(k)$ would range over an infinite set of
  pairs and would denote nothing, since $K$ carries no notion of convergence.
  The condition is preserved by both operations, which is the content of
  [[lem-laurent-series-ring]].

- **Indices run over all of $\mathbb{Z}$, and the edge cases are real.** The zero
  series has empty support and no valuation. A nonzero constant series
  $\iota(c)$ has $v(\iota(c)) = 0$ and $\operatorname{lc}(\iota(c)) = c$, so the
  index $k = 0$ is an ordinary index and not a boundary. Negative indices are
  admitted, and they are what makes $t = t^{-(-1)}$, whose support is $\{-1\}$,
  an element of $K$; a series may have finitely many terms of negative index but
  never infinitely many.

- **The order is not the coefficientwise order.** Two series are compared by
  their *lowest* differing coefficient, not by all of them at once, and this is
  what makes $t^{-1}$ smaller than every positive real constant while $t$ is
  larger than every real constant. The consequences are drawn in
  [[lem-laurent-non-archimedean]].

- **Relation to the rational functions.** The ordered field $\mathbb{R}(t)$ of
  [[cex-ordered-field-not-archimedean]], ordered so that $f > 0$ exactly when
  $f(x) > 0$ for all sufficiently large real $x$, is the standard first example
  of a non-Archimedean ordered field, and standard treatments identify it with a
  subfield of $K$ by expanding each rational function at infinity. **This page
  neither constructs that identification nor uses it**, and no item here may be
  cited for it: everything proved about $K$ below is proved from the definition
  above and nothing else. What the two objects share, and all that is used here,
  is the idea of ordering by behaviour at infinity.
````

### `def-int-operations`

````markdown
---
id: def-int-operations
kind: definition
title: "Arithmetic on the integers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integers, def-nat-addition, def-nat-multiplication]
justified_by: [lem-int-add-well-defined, lem-int-mul-well-defined]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Definition

On $\mathbb{Z}$ ([[def-integers]]) define, on representatives,

$$[(a,b)] + [(c,d)] := [(a+c,\; b+d)],$$
$$[(a,b)] \cdot [(c,d)] := [(ac+bd,\; ad+bc)],$$
$$-[(a,b)] := [(b,a)], \qquad 0 := [(0,0)], \qquad 1 := [(1,0)].$$

These do not depend on the chosen representatives
([[lem-int-add-well-defined]], [[lem-int-mul-well-defined]]).

## Remarks

- The product formula is forced by the intended meaning: if $(a,b)$ stands for
  $a-b$ and $(c,d)$ for $c-d$, then $(a-b)(c-d) = (ac+bd) - (ad+bc)$.
- Negation swaps the components: $-(a-b) = b-a$.
````

### `def-int-order`

````markdown
---
id: def-int-order
kind: definition
title: "Order on the integers"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-integers]
justified_by: [thm-int-ordered-ring]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Definition

For integers $x = [(a,b)]$ and $y = [(c,d)]$ ([[def-integers]]) define

$$x \le y \iff a + d \le b + c \quad \text{in } \mathbb{N}.$$

Write $x < y$ when $x \le y$ and $x \ne y$. An integer $x$ is **positive**
when $0 < x$; on representatives, $0 < [(a,b)]$ exactly when $b < a$.

## Remarks

- The defining inequality is "$a - b \le c - d$" restated without subtraction.
- Well-definedness, totality, and compatibility with the arithmetic are proved
  in [[thm-int-ordered-ring]].
````

### `lem-nat-embeds-int`

````markdown
---
id: lem-nat-embeds-int
kind: lemma
title: "The naturals embed in the integers"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-integers, def-int-operations, def-int-order, def-natural-numbers, def-nat-order, lem-nat-add-identity, lem-nat-mult-identity, thm-nat-linear-order]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Statement

The map $\iota(n) = [(n,0)]$ is injective and preserves addition,
multiplication, and order. Its image is exactly the set of nonnegative
integers, so every $x \ge 0$ in $\mathbb{Z}$ is $\iota(k)$ for a unique
natural $k$.

## Facts & Assumptions

**Given:** The map $\iota : \mathbb{N} \to \mathbb{Z}$, $\iota(n) = [(n,0)]$.

[A1] Arithmetic identities in $\mathbb{N}$: $x + 0 = x$, $0 + x = x$, $x \cdot 0 = 0$, $0 \cdot x = 0$, $x \cdot 1 = x$.

[A2] The order on $\mathbb{N}$, and: $x \le y$ iff $y = x + k$ for some $k$.

## Proof

**Proof technique:** direct.

1.1 Injectivity: $[(m,0)] = [(n,0)]$ means $m + 0 = 0 + n$, i.e. $m = n$. [A1]

1.2 Addition: $\iota(m) + \iota(n) = [(m+n,\, 0+0)] = \iota(m+n)$. [A1]

1.3 Multiplication: $\iota(m)\,\iota(n) = [(mn + 0 \cdot 0,\; m \cdot 0 + 0 \cdot n)] = \iota(mn)$. [A1]

1.4 Order: $\iota(m) \le \iota(n)$ reads $m + 0 \le 0 + n$, i.e. $m \le n$. [A1, A2]

1.5 Image: if $0 \le [(a,b)]$ then $b \le a$, so $a = b + k$ and $(a,b) \sim (k,0)$, giving $[(a,b)] = \iota(k)$; conversely $0 \le \iota(k)$ for every $k$. [A2, algebra]

2.1 $\iota$ embeds $\mathbb{N}$ into $\mathbb{Z}$, preserving arithmetic and order, with image the nonnegative integers. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
````

### `thm-int-ordered-ring`

````markdown
---
id: thm-int-ordered-ring
kind: theorem
title: "The integers form a totally ordered ring"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integers, def-int-operations, def-int-order, def-nat-order,
       thm-int-comm-ring, lem-nat-add-commutative,
       lem-nat-add-associative, thm-nat-linear-order,
       lem-nat-order-add-compatible, lem-nat-mult-commutative,
       lem-nat-mult-associative, lem-nat-mult-distributive,
       lem-nat-mult-identity, lem-nat-order-mult-compatible]
aliases: []
landmark: true
short: "ℤ ordered ring"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-dependency-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Statement

The relation of [[def-int-order]] is well defined and is a total order on
$\mathbb{Z}$; it is compatible with addition ($x \le y$ implies
$x + z \le y + z$) and positives are closed under multiplication
($0 < x$ and $0 < y$ imply $0 < xy$). Thus $\mathbb{Z}$ is a totally
ordered commutative ring.

## Facts & Assumptions

**Given:** Integers $x = [(a,b)]$, $y = [(c,d)]$, $z = [(e,f)]$ with the operations of [[def-int-operations]].

[L1] Addition on $\mathbb{N}$ is commutative and associative ([[lem-nat-add-commutative]], [[lem-nat-add-associative]]).

[L2] The order on $\mathbb{N}$ is total, antisymmetric, and transitive ([[thm-nat-linear-order]]).

[L3] Natural order is translation-invariant: $x\le y\iff x+z\le y+z$ ([[lem-nat-order-add-compatible]]).

[L4] By the definition of natural order, $x\le y$ exactly when $y=x+k$ for some natural $k$; if $x<y$, such a gap is nonzero ([[def-nat-order]]).

[L5] Natural multiplication is commutative and associative, distributes over addition, and has the usual zero and identity laws; multiplication by a nonzero natural preserves strict order ([[lem-nat-mult-commutative]], [[lem-nat-mult-associative]], [[lem-nat-mult-distributive]], [[lem-nat-mult-identity]], [[lem-nat-order-mult-compatible]]).

[L6] The integer operations make $\mathbb{Z}$ a commutative ring with multiplicative identity ([[thm-int-comm-ring]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $(a,b) \sim (a',b')$ and $(c,d) \sim (c',d')$, i.e. $a + b' = b + a'$ and $c + d' = d + c'$. [given]

1.2 Suppose $a + d \le b + c$. [given]

1.3 Totality: in $\mathbb{N}$ either $a + d \le b + c$ or $b + c \le a + d$, so $x \le y$ or $y \le x$. [L2]

1.4 Antisymmetry: $x \le y$ and $y \le x$ give $a + d \le b + c$ and $b + c \le a + d$, hence $a + d = b + c$, which is $x = y$ as classes. [L2]

1.5 Transitivity: from $a + d \le b + c$ and $c + f \le d + e$, adding gives $(a+d)+(c+f) \le (b+c)+(d+e)$; regrouping, $(a+f)+(c+d) \le (b+e)+(c+d)$; cancelling, $a + f \le b + e$, i.e. $x \le z$. [L1, L2, L3]

1.6 Compatibility with addition: $x + z \le y + z$ reads $(a+e)+(d+f) \le (b+f)+(c+e)$, which regroups to $(a+d) + (e+f) \le (b+c) + (e+f)$, equivalent to $a + d \le b + c$, i.e. $x \le y$. [L1, L3]

1.7 Suppose $0 < x$ and $0 < y$, i.e. $b < a$ and $d < c$. [given]

2.1 Adding $(a'+d')$: $(a+d) + (a'+d') \le (b+c) + (a'+d')$. [step 1.2, L3]

2.2 Regrouping with the equations of step 1.1: $(b+c) + (a'+d') = (b+a') + (c+d') = (a+b') + (d+c') = (a+d) + (b'+c')$. [step 1.1, L1]

2.3 Write $a = b + k$ and $c = d + m$ with nonzero naturals $k,m$. [step 1.7, L4]

3.1 So $(a+d) + (a'+d') \le (a+d) + (b'+c')$; cancelling $(a+d)$ gives $a'+d'\le b'+c'$. Applying the same argument with primed and unprimed representatives exchanged proves the converse implication, so the relation is independent of representatives. [step 1.1, step 2.1, step 2.2, L3]

3.2 Expanding both components of $xy = [(ac+bd,\, ad+bc)]$: $ac + bd = (b+k)(d+m) + bd = (bd + bm + kd + bd) + km$ and $ad + bc = (b+k)d + b(d+m) = bd + kd + bd + bm$, so $ac + bd = (ad + bc) + km$. [step 2.3, L1, L5]

4.1 Since $k,m$ are nonzero, $0<k$ and $0<m$ by [L4]. Hence [L5] gives $0=0\cdot m<km$, and step 3.2 yields $ad+bc<ac+bd$, which is $0<xy$. [step 2.3, step 3.2, L2, L4, L5]

5.1 The order is well defined, total, compatible with addition, and positives are closed under multiplication; together with [L6], this makes $\mathbb{Z}$ a totally ordered commutative ring. [step 3.1, step 1.3, step 1.4, step 1.5, step 1.6, step 4.1, L6] ∎
````

### `thm-reals-ordered-field`

````markdown
---
id: thm-reals-ordered-field
kind: theorem
title: "The reals form a totally ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-order, def-real-numbers, thm-reals-field, lem-cauchy-away-from-zero, thm-rat-ordered-field, def-null-sequence]
aliases: []
landmark: true
short: "ℝ ordered field"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "L. S. Krapp, Constructions of the real numbers: a set theoretical approach (Oxford, 2014)"
      url: "https://www.math.uni-konstanz.de/~krapp/research/Constructions_of_the_real_numbers.pdf"
pipeline_run: null
---

## Statement

The relation of [[def-real-order]] is well defined and makes $\mathbb{R}$
([[thm-reals-field]]) a totally ordered field.

## Facts & Assumptions

**Given:** Reals $x, y$ with representatives $(a_n), (b_n)$.

[L1] A sequence $(u_n)_{n \ge 1}$ of rational numbers is null if, for every rational $\varepsilon > 0$, there is $N \in \mathbb{N}$ such that $|u_n| < \varepsilon$ for every $n \ge N$ ([[def-null-sequence]]).

[L2] Ordered-field arithmetic in $\mathbb{Q}$: $\delta/2 > 0$; sums and products of eventual lower bounds ([[thm-rat-ordered-field]]).

[L3] Dichotomy for non-null Cauchy sequences: eventually $> \delta$ or eventually $< -\delta$ ([[lem-cauchy-away-from-zero]]).

[L4] $\mathbb{R}$ is a field ([[thm-reals-field]]).

[L5] In $\mathbb{R} = \mathcal{C}/\mathcal{N}$, $x = 0$ iff a representative is null; so $x \ne 0$ iff every representative is non-null ([[def-real-numbers]]).

## Proof

**Proof technique:** direct.

1.1 Positivity is independent of the representative: if $a_n > \delta$ for $n \ge N$ and $(a'_n - a_n)$ is null, then beyond some $N' \ge N$ also $|a'_n - a_n| < \delta/2$, so $a'_n > \delta/2$: the defining property holds for $(a'_n)$ with $\delta/2$. [L1, L2]

1.2 Trichotomy: if $x \ne 0$, any representative is non-null, so by the dichotomy either $a_n > \delta$ eventually ($x$ positive) or $a_n < -\delta$ eventually ($-x$ positive); the two exclude each other, and exactly one of $x$ positive, $x = 0$, $-x$ positive holds. [L1, L3, L5]

1.3 Positives are closed under $+$ and $\cdot$: from $a_n > \delta$ and $b_n > \delta'$ eventually, $a_n + b_n > \delta + \delta'$ and $a_n b_n > \delta\delta'$ eventually, with $\delta + \delta', \delta\delta' > 0$. [L2]

2.1 Consequently $\le$ is a total order (trichotomy plus transitivity from closure under sums), compatible with addition (translation preserves the difference) and with multiplication by positives: $\mathbb{R}$ is a totally ordered field. [step 1.1, step 1.2, step 1.3, L4] ∎
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

