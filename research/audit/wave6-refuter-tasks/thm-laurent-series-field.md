## Target item — `thm-laurent-series-field`

Normalized current SHA-256: `ed482c58a6fabe882ca218543aec53daf902ec342981fb08e519c453c6705dd1`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-laurent-series-field
kind: theorem
title: "$\\mathbb{R}((t^{-1}))$ is a field: every nonzero formal Laurent series is invertible"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-laurent-series, lem-laurent-series-ring, lem-laurent-valuation, def-field, thm-reals-ordered-field, thm-recursion, thm-induction-principle, def-natural-numbers]
aliases: []
landmark: true
short: "$K$ is a field"
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
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "B. Sambale, An invitation to formal power series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "Laurent series (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Laurent_series"
pipeline_run: null
---

## Statement

$K = \mathbb{R}((t^{-1}))$ ([[def-formal-laurent-series]]) is a field
([[def-field]]): it is a commutative ring with $1_K \ne 0_K$, and every
$f \in K$ with $f \ne 0_K$ has a multiplicative inverse in $K$.

Explicitly, if $p = v(f)$ and $c = \operatorname{lc}(f)$, then
$f = \iota(c)\, t^{-p}\,(1_K - u)$ for the element $u \in K$ given by
$u(j) = -c^{-1}f(p+j)$ for $j \ge 1$ and $u(j) = 0$ for $j \le 0$, and
$f^{-1} = \iota(c^{-1})\, t^{p}\, g$, where
$g \in K$ vanishes at every index $< 0$ and is given at $k \ge 0$ by
$g(k) = \sum_{n=0}^{k} (u^{n})(k)$.

## Scratch

The identity behind the construction is the geometric series
$(1-u)^{-1} = 1 + u + u^{2} + \cdots$. It cannot be used as written, because $K$
has no notion of an infinite sum. What replaces it is the observation that
$u^{n}$ vanishes at every index below $n$, so at any single index $k$ only the
terms $n \le k$ can contribute; the displayed formula for $g(k)$ is that finite
truncation, and the support of the result is bounded below because every
$u^{n}$ vanishes below $0$.

## Facts & Assumptions

**Given:** A nonzero $f \in K$; write $p := v(f) \in \mathbb{Z}$ and $c := \operatorname{lc}(f) \in \mathbb{R} \setminus \{0\}$, so that $f(k) = 0$ for every $k < p$ and $f(p) = c$.

[L1] $K$ is the set of functions $\mathbb{Z} \to \mathbb{R}$ whose support is bounded below; $t^{-a}$ is $1$ at index $a$ and $0$ elsewhere; $\iota(c)$ is $c$ at index $0$ and $0$ elsewhere; for nonzero $h \in K$ one has $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$ ([[def-formal-laurent-series]]).

[L2] $K$ is a commutative ring with identity $1_K \ne 0_K$; $(h_1h_2)(k) = \sum_{i+j=k} h_1(i)h_2(j)$ is a finite sum; if $h_1$ vanishes at every index $< a$ and $h_2$ at every index $< b$ then $h_1h_2$ vanishes at every index $< a + b$; $(t^{-a}h)(k) = h(k-a)$ and hence $t^{-a}t^{-b} = t^{-(a+b)}$; and $(\iota(c)h)(k) = c\,h(k)$ ([[lem-laurent-series-ring]]).

[L3] A product of two nonzero elements of $K$ is nonzero ([[lem-laurent-valuation]]).

[L4] $\mathbb{R}$ is a field: every nonzero $c$ has an inverse $c^{-1}$ with $cc^{-1} = 1$, and a finite sum of reals may be reordered and regrouped freely ([[def-field]], [[thm-reals-ordered-field]]).

[L5] Recursion on $\mathbb{N}$: for a set $A$, an element $a \in A$ and a function $F : A \to A$ there is a unique $\Gamma : \mathbb{N} \to A$ with $\Gamma(0) = a$ and $\Gamma(\sigma(n)) = F(\Gamma(n))$ ([[thm-recursion]], [[def-natural-numbers]]).

[L6] Induction: a property holding at $0$ and inherited from $n$ to $\sigma(n)$ holds at every natural number ([[thm-induction-principle]]).

[L7] A field is a commutative ring with $0 \ne 1$ in which multiplication restricted to the nonzero elements is an abelian group, that is, in which the nonzero elements are closed under multiplication and each has an inverse ([[def-field]]).

## Proof

**Proof technique:** constructive.

1.1 Define $u : \mathbb{Z} \to \mathbb{R}$ by $u(j) := -c^{-1} f(p + j)$ for $j \ge 1$ and $u(j) := 0$ for $j \le 0$. Then $u$ vanishes at every index $< 1$, so its support is bounded below and $u \in K$. [given, L1, L4, construct]

1.2 By [L5] with $A = K$, $a = 1_K$ and $F(h) = hu$ there is a family $(u^{n})_{n \in \mathbb{N}}$ in $K$ with $u^{0} = 1_K$ and $u^{\sigma(n)} = u^{n} u$. [L2, L5, construct]

2.1 For every $k \in \mathbb{Z}$, $\bigl(\iota(c)\,t^{-p}\,(1_K - u)\bigr)(k) = c\,(1_K - u)(k - p)$ by [L2]; this is $0$ when $k < p$ because $1_K - u$ vanishes at every negative index, it is $c$ when $k = p$, and it is $c \cdot \bigl(-u(k-p)\bigr) = c c^{-1} f(k) = f(k)$ when $k > p$. Comparing with $f(k) = 0$ for $k < p$ and $f(p) = c$, we get $f = \iota(c)\, t^{-p}\,(1_K - u)$. [step 1.1, given, L1, L2, L4]

2.2 For every $n \in \mathbb{N}$, $u^{n}$ vanishes at every index $< n$: at $n = 0$ this says $1_K$ vanishes at every negative index, which holds by [L1]; and if $u^{n}$ vanishes at every index $< n$ then, since $u$ vanishes at every index $< 1$ by [step 1.1], the product $u^{\sigma(n)} = u^{n}u$ vanishes at every index $< n + 1$ by [L2]. [step 1.1, step 1.2, L1, L2, L6]

3.1 Define $g : \mathbb{Z} \to \mathbb{R}$ by $g(k) := \sum_{n=0}^{k} (u^{n})(k)$ for $k \ge 0$ and $g(k) := 0$ for $k < 0$; each value is a finite sum of reals, and $g$ vanishes at every index $< 0$, so $g \in K$. [step 2.2, L1, L4, construct]

4.1 Fix $k \ge 1$. In $(ug)(k) = \sum_{i+j=k} u(i)g(j)$ a term can be nonzero only when $i \ge 1$ and $j \ge 0$, hence only for $1 \le i \le k$ and $j = k - i$; so $(ug)(k) = \sum_{i=1}^{k} u(i)\, g(k-i) = \sum_{i=1}^{k} u(i) \sum_{n=0}^{k-i} (u^{n})(k-i)$. [step 1.1, step 3.1, L1, L2]

4.2 For $k \le 0$ one has $(ug)(k) = 0$, since $u$ vanishes at every index $< 1$ and $g$ at every index $< 0$, so every pair $(i,j)$ with $i + j = k$ has $u(i)g(j) = 0$. [step 1.1, step 3.1, L1, L2]

5.1 In the inner sum of [step 4.1] the terms with $k - i < n \le k-1$ vanish by [step 2.2], so the inner sum may be extended to $n = 0, \dots, k-1$ without changing its value; interchanging the two finite sums gives $(ug)(k) = \sum_{n=0}^{k-1} \sum_{i=1}^{k} u(i)\,(u^{n})(k-i)$. [step 2.2, step 4.1, L4]

6.1 For each $n$, $\sum_{i=1}^{k} u(i)(u^{n})(k-i) = \sum_{i+j=k} u(i)(u^{n})(j) = (u\,u^{n})(k) = (u^{\sigma(n)})(k)$, because a term of the full convolution can be nonzero only for $i \ge 1$ and $j \ge 0$; hence $(ug)(k) = \sum_{n=0}^{k-1} (u^{\sigma(n)})(k) = \sum_{n=1}^{k} (u^{n})(k)$ for every $k \ge 1$. [step 1.2, step 2.2, step 5.1, L2]

7.1 For $k \ge 1$, $\bigl((1_K - u)g\bigr)(k) = g(k) - (ug)(k) = \sum_{n=0}^{k}(u^{n})(k) - \sum_{n=1}^{k}(u^{n})(k) = (u^{0})(k) = 1_K(k)$; for $k = 0$, $g(0) = (u^{0})(0) = 1$ and $(ug)(0) = 0$, so the value is $1 = 1_K(0)$; and for $k < 0$ both $g(k)$ and $(ug)(k)$ are $0$, as is $1_K(k)$. Hence $(1_K - u)g = 1_K$. [step 3.1, step 4.2, step 6.1, L1, L2]

8.1 Using [step 2.1], [L2] and $cc^{-1} = 1$, one computes $f \cdot \bigl(\iota(c^{-1})\,t^{p}\,g\bigr) = \iota(c)\iota(c^{-1})\, t^{-p}t^{-(-p)}\,(1_K - u)g = 1_K \cdot 1_K \cdot 1_K = 1_K$, so $\iota(c^{-1}) t^{p} g \in K$ is a multiplicative inverse of $f$. [step 2.1, step 7.1, L2, L4]

9.1 $K$ is a commutative ring with $1_K \ne 0_K$ by [L2], its nonzero elements are closed under multiplication by [L3], and by [step 8.1] every nonzero element has an inverse; so $K$ satisfies the field axioms of [L7] and the construction is complete. [step 8.1, L2, L3, L7, discharge-construct] ∎

## Remarks

- **Where support-boundedness is really used.** Twice, and in different ways.
  It makes each coefficient of a product a finite sum, which is what lets
  $(u^{n})(k)$ be spoken of at all; and it is what has to be re-established for
  the constructed inverse, which is why $g$ was *defined* to vanish at every
  negative index rather than found to. The verification that this definition is
  consistent with $(1_K - u)g = 1_K$ is [step 7.1], and it is exactly the point
  at which an infinite geometric series would have had to be summed.

- **The normalisation is forced, and that is why the recipe is explicit.**
  Suppose $f = \iota(c')t^{-p'}(1_K - w)$ with $c' \ne 0$ and $w$ vanishing at
  every index $\le 0$. Evaluating as in [step 2.1] gives
  $f(k) = c'(1_K - w)(k - p')$, which is $0$ for $k < p'$ and equals $c'$ at
  $k = p'$; so $p' = v(f)$ and $c' = \operatorname{lc}(f)$, and then
  $w(j) = -c'^{-1}f(p'+j)$ for $j \ge 1$. The factorisation used in the proof is
  therefore the only one of its shape, and the formula for the inverse is a
  recipe rather than a choice.
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
        "1.1",
        "2.1",
        "2.2",
        "3.1",
        "4.1",
        "4.2",
        "7.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-laurent-series-ring",
      "source_section": "Statement",
      "quote": "Let $K = \\mathbb{R}((t^{-1}))$ be as in [[def-formal-laurent-series]], and let\n$f, g \\in K$, with $m, n \\in \\mathbb{Z}$ chosen so that $f(i) = 0$ for all\n$i < m$ and $g(j) = 0$ for all $j < n$. Then:\n\n1. **(Finiteness.)** For every $k \\in \\mathbb{Z}$ the set\n   $S_k := \\{\\, (i,j) \\in \\mathbb{Z} \\times \\mathbb{Z} : i + j = k,\\; f(i)g(j) \\ne 0 \\,\\}$\n   is finite, so $(fg)(k) = \\sum_{i+j=k} f(i)g(j)$ is a finite sum of reals; and\n   $S_k = \\varnothing$ whenever $k < m + n$.\n2. **(Closure.)** $f + g$, $-f$ and $fg$ lie in $K$, with $(f+g)(k) = 0$ for\n   $k < \\min(m,n)$ and $(fg)(k) = 0$ for $k < m + n$.\n3. **(Ring.)** $(K, +, \\cdot\\,, 0_K, 1_K)$ is a commutative ring with identity,\n   and $1_K \\ne 0_K$.\n4. **(Monomials and constants.)** $(t^{-a}h)(k) = h(k-a)$ for every $h \\in K$\n   and all $a, k \\in \\mathbb{Z}$; consequently $t^{-a} \\, t^{-b} = t^{-(a+b)}$\n   for all $a, b \\in \\mathbb{Z}$. Moreover $(\\iota(c)f)(k) = c\\, f(k)$ for all\n   $c \\in \\mathbb{R}$ and $k \\in \\mathbb{Z}$.\n5. **(Least element.)** Every nonempty $S \\subseteq \\mathbb{Z}$ that is bounded\n   below has a least element. In particular $\\operatorname{supp} f$ has a least\n   element whenever $f \\ne 0_K$, so the valuation $v(f)$ and the leading\n   coefficient $\\operatorname{lc}(f)$ of [[def-formal-laurent-series]] are\n   defined.",
      "uses": [
        "1.2",
        "2.1",
        "2.2",
        "4.1",
        "4.2",
        "6.1",
        "7.1",
        "8.1",
        "9.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-laurent-valuation",
      "source_section": "Statement",
      "quote": "Let $K = \\mathbb{R}((t^{-1}))$ with its valuation $v$ and leading coefficient\n$\\operatorname{lc}$ ([[def-formal-laurent-series]]), and let $f, g \\in K$ with\n$f \\ne 0_K$ and $g \\ne 0_K$. Then:\n\n1. **(Products.)** $fg \\ne 0_K$, and\n   $$v(fg) = v(f) + v(g), \\qquad \\operatorname{lc}(fg) = \\operatorname{lc}(f)\\operatorname{lc}(g).$$\n   In particular $K$ has no zero divisors.\n2. **(Negatives.)** $-f \\ne 0_K$, $v(-f) = v(f)$ and\n   $\\operatorname{lc}(-f) = -\\operatorname{lc}(f)$.\n3. **(Unequal valuations.)** If $v(f) < v(g)$ then $f + g \\ne 0_K$,\n   $v(f+g) = v(f)$ and $\\operatorname{lc}(f+g) = \\operatorname{lc}(f)$.\n4. **(Equal valuations, no cancellation.)** If $v(f) = v(g) = q$ and\n   $\\operatorname{lc}(f) + \\operatorname{lc}(g) \\ne 0$, then $f + g \\ne 0_K$,\n   $v(f+g) = q$ and\n   $\\operatorname{lc}(f+g) = \\operatorname{lc}(f) + \\operatorname{lc}(g)$.\n5. **(Sums in general.)** If $f + g \\ne 0_K$ then\n   $v(f+g) \\ge \\min\\{v(f), v(g)\\}$.",
      "uses": [
        "9.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-field",
      "source_section": "Definition",
      "quote": "A **field** is a set $F$ equipped with two binary operations $+$ (addition) and\n$\\cdot$ (multiplication) and two distinguished elements $0 \\ne 1$ of $F$,\nsatisfying:\n\n- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is\n  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an\n  additive inverse $-x$ with $x + (-x) = 0$.\n- **(M)** Multiplication is associative and commutative **on all of $F$**, and\n  $x \\cdot 1 = x$ for every $x \\in F$; moreover $(F \\setminus \\{0\\}, \\cdot)$ is an\n  abelian group with identity $1$, so every $x \\ne 0$ has a multiplicative inverse\n  $x^{-1}$ with $x \\cdot x^{-1} = 1$.\n- **(D)** Multiplication distributes over addition: $x \\cdot (y + z) = x\\cdot y + x\\cdot z$.\n\nWe write $x - y := x + (-y)$ and $x/y := x \\cdot y^{-1}$ (for $y \\ne 0$), and\nabbreviate $x \\cdot y$ as $xy$.",
      "uses": [
        "1.1",
        "2.1",
        "3.1",
        "5.1",
        "8.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-reals-ordered-field",
      "source_section": "Statement",
      "quote": "The relation of [[def-real-order]] is well defined and makes $\\mathbb{R}$\n([[thm-reals-field]]) a totally ordered field.",
      "uses": [
        "1.1",
        "2.1",
        "3.1",
        "5.1",
        "8.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-recursion",
      "source_section": "Statement",
      "quote": "Let $(N,0,\\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \\in A$, and any function $f : A \\to A$, there is a unique function $g : N \\to A$ such that $g(0) = a$ and $g(\\sigma(n)) = f(g(n))$ for all $n \\in N$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "def-natural-numbers",
      "source_section": "Definition",
      "quote": "The set of **natural numbers** is the **smallest inductive set**\n([[def-inductive-set]]),\n\n$$\\mathbb{N} = \\omega := \\bigcap\\,\\{\\, I : I \\text{ is inductive} \\,\\},$$\n\nwhich exists and is itself inductive by [[lem-omega-smallest-inductive]] (the\nAxiom of Infinity, [[def-axiom-of-infinity]], supplies one inductive set to\nintersect within, and Separation, [[def-axiom-schema-of-separation]], makes the\nintersection a set). On $\\mathbb{N}$ we take\n\n$$0 := \\varnothing, \\qquad \\sigma(n) := n \\cup \\{n\\},$$\n\nthe distinguished element and the successor function. Thus\n$0 = \\varnothing$, $1 = \\{0\\}$, $2 = \\{0, 1\\}$, $3 = \\{0, 1, 2\\}$, and in general\n$n = \\{0, 1, \\dots, n-1\\}$ is the set of its predecessors.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{N}$. If $0 \\in S$ and $\\sigma(n) \\in S$ whenever $n \\in S$, then $S = \\mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \\Rightarrow P(\\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \\in \\mathbb{N}$. This is the induction principle, the basis of proof by induction.",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L7",
      "source": "def-field",
      "source_section": "Definition",
      "quote": "A **field** is a set $F$ equipped with two binary operations $+$ (addition) and\n$\\cdot$ (multiplication) and two distinguished elements $0 \\ne 1$ of $F$,\nsatisfying:\n\n- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is\n  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an\n  additive inverse $-x$ with $x + (-x) = 0$.\n- **(M)** Multiplication is associative and commutative **on all of $F$**, and\n  $x \\cdot 1 = x$ for every $x \\in F$; moreover $(F \\setminus \\{0\\}, \\cdot)$ is an\n  abelian group with identity $1$, so every $x \\ne 0$ has a multiplicative inverse\n  $x^{-1}$ with $x \\cdot x^{-1} = 1$.\n- **(D)** Multiplication distributes over addition: $x \\cdot (y + z) = x\\cdot y + x\\cdot z$.\n\nWe write $x - y := x + (-y)$ and $x/y := x \\cdot y^{-1}$ (for $y \\ne 0$), and\nabbreviate $x \\cdot y$ as $xy$.",
      "uses": [
        "9.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Define $u : \\mathbb{Z} \\to \\mathbb{R}$ by $u(j) := -c^{-1} f(p + j)$ for $j \\ge 1$ and $u(j) := 0$ for $j \\le 0$. Then $u$ vanishes at every index $< 1$, so its support is bounded below and $u \\in K$.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L4",
        "given",
        "construct"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "By [L5] with $A = K$, $a = 1_K$ and $F(h) = hu$ there is a family $(u^{n})_{n \\in \\mathbb{N}}$ in $K$ with $u^{0} = 1_K$ and $u^{\\sigma(n)} = u^{n} u$.",
      "step": "1.2",
      "inputs": [
        "L5",
        "L2",
        "construct"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "For every $k \\in \\mathbb{Z}$, $\\bigl(\\iota(c)\\,t^{-p}\\,(1_K - u)\\bigr)(k) = c\\,(1_K - u)(k - p)$ by [L2]; this is $0$ when $k < p$ because $1_K - u$ vanishes at every negative index, it is $c$ when $k = p$, and it is $c \\cdot \\bigl(-u(k-p)\\bigr) = c c^{-1} f(k) = f(k)$ when $k > p$. Comparing with $f(k) = 0$ for $k < p$ and $f(p) = c$, we get $f = \\iota(c)\\, t^{-p}\\,(1_K - u)$.",
      "step": "2.1",
      "inputs": [
        "L2",
        "L1",
        "L4",
        "step 1.1",
        "given"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "For every $n \\in \\mathbb{N}$, $u^{n}$ vanishes at every index $< n$: at $n = 0$ this says $1_K$ vanishes at every negative index, which holds by [L1]; and if $u^{n}$ vanishes at every index $< n$ then, since $u$ vanishes at every index $< 1$ by [step 1.1], the product $u^{\\sigma(n)} = u^{n}u$ vanishes at every index $< n + 1$ by [L2].",
      "step": "2.2",
      "inputs": [
        "L1",
        "L2",
        "L6",
        "step 1.1",
        "step 1.2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Define $g : \\mathbb{Z} \\to \\mathbb{R}$ by $g(k) := \\sum_{n=0}^{k} (u^{n})(k)$ for $k \\ge 0$ and $g(k) := 0$ for $k < 0$; each value is a finite sum of reals, and $g$ vanishes at every index $< 0$, so $g \\in K$.",
      "step": "3.1",
      "inputs": [
        "L1",
        "L4",
        "step 2.2",
        "construct"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Fix $k \\ge 1$. In $(ug)(k) = \\sum_{i+j=k} u(i)g(j)$ a term can be nonzero only when $i \\ge 1$ and $j \\ge 0$, hence only for $1 \\le i \\le k$ and $j = k - i$; so $(ug)(k) = \\sum_{i=1}^{k} u(i)\\, g(k-i) = \\sum_{i=1}^{k} u(i) \\sum_{n=0}^{k-i} (u^{n})(k-i)$.",
      "step": "4.1",
      "inputs": [
        "L1",
        "L2",
        "step 1.1",
        "step 3.1"
      ]
    },
    {
      "id": "step-4.2",
      "claim": "For $k \\le 0$ one has $(ug)(k) = 0$, since $u$ vanishes at every index $< 1$ and $g$ at every index $< 0$, so every pair $(i,j)$ with $i + j = k$ has $u(i)g(j) = 0$.",
      "step": "4.2",
      "inputs": [
        "L1",
        "L2",
        "step 1.1",
        "step 3.1"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "In the inner sum of [step 4.1] the terms with $k - i < n \\le k-1$ vanish by [step 2.2], so the inner sum may be extended to $n = 0, \\dots, k-1$ without changing its value; interchanging the two finite sums gives $(ug)(k) = \\sum_{n=0}^{k-1} \\sum_{i=1}^{k} u(i)\\,(u^{n})(k-i)$.",
      "step": "5.1",
      "inputs": [
        "L4",
        "step 4.1",
        "step 2.2"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "For each $n$, $\\sum_{i=1}^{k} u(i)(u^{n})(k-i) = \\sum_{i+j=k} u(i)(u^{n})(j) = (u\\,u^{n})(k) = (u^{\\sigma(n)})(k)$, because a term of the full convolution can be nonzero only for $i \\ge 1$ and $j \\ge 0$; hence $(ug)(k) = \\sum_{n=0}^{k-1} (u^{\\sigma(n)})(k) = \\sum_{n=1}^{k} (u^{n})(k)$ for every $k \\ge 1$.",
      "step": "6.1",
      "inputs": [
        "L2",
        "step 1.2",
        "step 2.2",
        "step 5.1"
      ]
    },
    {
      "id": "step-7.1",
      "claim": "For $k \\ge 1$, $\\bigl((1_K - u)g\\bigr)(k) = g(k) - (ug)(k) = \\sum_{n=0}^{k}(u^{n})(k) - \\sum_{n=1}^{k}(u^{n})(k) = (u^{0})(k) = 1_K(k)$; for $k = 0$, $g(0) = (u^{0})(0) = 1$ and $(ug)(0) = 0$, so the value is $1 = 1_K(0)$; and for $k < 0$ both $g(k)$ and $(ug)(k)$ are $0$, as is $1_K(k)$. Hence $(1_K - u)g = 1_K$.",
      "step": "7.1",
      "inputs": [
        "L1",
        "L2",
        "step 3.1",
        "step 4.2",
        "step 6.1"
      ]
    },
    {
      "id": "step-8.1",
      "claim": "Using [step 2.1], [L2] and $cc^{-1} = 1$, one computes $f \\cdot \\bigl(\\iota(c^{-1})\\,t^{p}\\,g\\bigr) = \\iota(c)\\iota(c^{-1})\\, t^{-p}t^{-(-p)}\\,(1_K - u)g = 1_K \\cdot 1_K \\cdot 1_K = 1_K$, so $\\iota(c^{-1}) t^{p} g \\in K$ is a multiplicative inverse of $f$.",
      "step": "8.1",
      "inputs": [
        "L2",
        "L4",
        "step 2.1",
        "step 7.1"
      ]
    },
    {
      "id": "step-9.1",
      "claim": "$K$ is a commutative ring with $1_K \\ne 0_K$ by [L2], its nonzero elements are closed under multiplication by [L3], and by [step 8.1] every nonzero element has an inverse; so $K$ satisfies the field axioms of [L7] and the construction is complete.",
      "step": "9.1",
      "inputs": [
        "L2",
        "L3",
        "L7",
        "step 8.1",
        "discharge-construct"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The inverse construction is only for nonzero f, so its support and leading index are nonempty by the statement."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "The zero coefficient boundary for u and g is treated at steps 1.1, 3.1, 4.2, and 7.1; the theorem correctly does not invert 0_K."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "For f=1_K, the construction gives p=0, c=1, u=0 and g=1_K; steps 2.1 through 8.1 reduce to the identity calculation."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The degenerate tail u=0 is admitted: step 2.2 makes all positive powers vanish and step 7.1 gives (1_K-u)g=1_K."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "The split at k<0, k=0, and k>=1 is exhaustive and checked separately at steps 3.1, 4.1, 4.2, and 7.1."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "The powers u^n are supplied uniquely by recursion at step 1.2, and all coefficient sums used to define g are explicit finite sums at step 3.1."
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
    "source": "thm-laurent-series-field",
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
    "source": "thm-laurent-series-field",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "lem-laurent-series-ring",
    "declared_target": "lem-laurent-series-ring",
    "target_statement_provenance": null,
    "targetPage": "formal-laurent-series-field",
    "targetBatch": "wave6-real-analysis-laurent",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-laurent-series-field",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "lem-laurent-valuation",
    "declared_target": "lem-laurent-valuation",
    "target_statement_provenance": null,
    "targetPage": "formal-laurent-series-field",
    "targetBatch": "wave6-real-analysis-laurent",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-laurent-series-field",
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
    "source": "thm-laurent-series-field",
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
  },
  {
    "source": "thm-laurent-series-field",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
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
    "source": "thm-laurent-series-field",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
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
    "source": "thm-laurent-series-field",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-natural-numbers",
    "declared_target": "def-natural-numbers",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
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

### `lem-laurent-series-ring`

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

### `lem-laurent-valuation`

````markdown
---
id: lem-laurent-valuation
kind: lemma
title: "Valuation and leading coefficient in $\\mathbb{R}((t^{-1}))$: $v(fg) = v(f) + v(g)$, and the behaviour of $v$ under sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-laurent-series, lem-laurent-series-ring, def-field, thm-reals-ordered-field, thm-int-ordered-ring, def-int-order]
aliases: []
landmark: false
short: "$v(fg) = v(f)+v(g)$"
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
    - title: "Valuation (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Valuation_(algebra)"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "B. Sambale, An invitation to formal power series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "Laurent series (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Laurent_series"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ with its valuation $v$ and leading coefficient
$\operatorname{lc}$ ([[def-formal-laurent-series]]), and let $f, g \in K$ with
$f \ne 0_K$ and $g \ne 0_K$. Then:

1. **(Products.)** $fg \ne 0_K$, and
   $$v(fg) = v(f) + v(g), \qquad \operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g).$$
   In particular $K$ has no zero divisors.
2. **(Negatives.)** $-f \ne 0_K$, $v(-f) = v(f)$ and
   $\operatorname{lc}(-f) = -\operatorname{lc}(f)$.
3. **(Unequal valuations.)** If $v(f) < v(g)$ then $f + g \ne 0_K$,
   $v(f+g) = v(f)$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f)$.
4. **(Equal valuations, no cancellation.)** If $v(f) = v(g) = q$ and
   $\operatorname{lc}(f) + \operatorname{lc}(g) \ne 0$, then $f + g \ne 0_K$,
   $v(f+g) = q$ and
   $\operatorname{lc}(f+g) = \operatorname{lc}(f) + \operatorname{lc}(g)$.
5. **(Sums in general.)** If $f + g \ne 0_K$ then
   $v(f+g) \ge \min\{v(f), v(g)\}$.

## Facts & Assumptions

**Given:** $f, g \in K$ with $f \ne 0_K$ and $g \ne 0_K$; write $p := v(f)$ and $q := v(g)$.

[L1] For a nonzero $h \in K$ one has $h(k) = 0$ for every $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; conversely, if $h(k) = 0$ for all $k < r$ and $h(r) \ne 0$ then $h \ne 0_K$, $v(h) = r$ and $\operatorname{lc}(h) = h(r)$ ([[def-formal-laurent-series]]).

[L2] $(f+g)(k) = f(k) + g(k)$ and $(fg)(k) = \sum_{i+j=k} f(i)g(j)$, a finite sum; if $f$ vanishes at every index below $m$ and $g$ at every index below $n$, then $fg$ vanishes at every index below $m+n$ ([[lem-laurent-series-ring]], [[def-formal-laurent-series]]).

[L3] $\mathbb{R}$ is a field, so a product of two nonzero reals is nonzero, and $-x = 0$ only for $x = 0$ ([[def-field]], [[thm-reals-ordered-field]]).

[L4] The order on $\mathbb{Z}$ is total and compatible with addition ([[thm-int-ordered-ring]], [[def-int-order]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] $f$ vanishes at every index below $p$ and $g$ at every index below $q$, so by [L2] $(fg)(k) = 0$ for every $k < p + q$. [L1, L2]

1.2 If $(i,j)$ satisfies $i + j = p+q$ and $f(i)g(j) \ne 0$ then $i \ge p$ and $j \ge q$ by [L1], and $i + j = p + q$ then forces $i = p$ and $j = q$; hence $(fg)(p+q) = f(p)g(q) = \operatorname{lc}(f)\operatorname{lc}(g)$, which is nonzero by [L3]. [L1, L2, L3, L4]

1.3 $(-f)(k) = -f(k)$ for every $k$, so $-f$ vanishes exactly where $f$ does; by [L1] and [L3] this gives $-f \ne 0_K$, $v(-f) = p$ and $\operatorname{lc}(-f) = -\operatorname{lc}(f) \ne 0$. [L1, L2, L3]

1.4 Suppose $p < q$. For $k < p$ both $f(k) = 0$ and $g(k) = 0$, so $(f+g)(k) = 0$; and $g(p) = 0$ because $p < q$, so $(f+g)(p) = \operatorname{lc}(f) \ne 0$. By [L1], $f + g \ne 0_K$ with $v(f+g) = p$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f)$. [L1, L2, L4]

1.5 Suppose $p = q$ and $\operatorname{lc}(f) + \operatorname{lc}(g) \ne 0$. For $k < p$ both terms vanish, so $(f+g)(k) = 0$; and $(f+g)(p) = \operatorname{lc}(f) + \operatorname{lc}(g) \ne 0$. By [L1], $f+g \ne 0_K$, $v(f+g) = p$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f) + \operatorname{lc}(g)$. [L1, L2]

1.6 For $k < \min\{p,q\}$ one has $f(k) = g(k) = 0$, hence $(f+g)(k) = 0$; so if $f + g \ne 0_K$ then its valuation, being the least index at which it is nonzero, satisfies $v(f+g) \ge \min\{p,q\}$. [L1, L2, L4]

2.1 By [step 1.1] $fg$ vanishes at every index below $p+q$ and by [step 1.2] it is nonzero at $p+q$; so by [L1] $fg \ne 0_K$, $v(fg) = p + q$ and $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$. Since $f$ and $g$ were arbitrary nonzero elements, no product of nonzero elements of $K$ is zero. [step 1.1, step 1.2, L1]

3.1 Clause 1 is [step 2.1], clause 2 is [step 1.3], clause 3 is [step 1.4], clause 4 is [step 1.5] and clause 5 is [step 1.6]. [step 1.3, step 1.4, step 1.5, step 1.6, step 2.1] ∎
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

