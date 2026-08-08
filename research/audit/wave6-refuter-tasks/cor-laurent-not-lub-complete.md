## Target item — `cor-laurent-not-lub-complete`

Normalized current SHA-256: `543b3d27befc5317d8eb9aa5d04b870eef07ad6791c629e61ba7e3bf93c3954e`

The complete current item follows, including frontmatter:

````markdown
---
id: cor-laurent-not-lub-complete
kind: corollary
title: "$\\mathbb{R}((t^{-1}))$ does not have the least-upper-bound property; its canonical naturals have no supremum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-laurent-series, lem-laurent-valuation, thm-laurent-ordered-field, lem-laurent-non-archimedean, thm-of-archimedean, def-complete-ordered-field, def-archimedean-field, def-ordered-field, thm-reals-ordered-field, cor-cauchy-reals-lub-complete]
aliases: []
landmark: true
short: "$K$ is not complete"
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
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Complete ordered fields are Archimedean (Rutgers Math 311 notes)"
      url: "https://sites.math.rutgers.edu/~sussmann/slides-math-311-2020-September-21.pdf"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

$K = \mathbb{R}((t^{-1}))$ is an ordered field that is **not** a complete
ordered field ([[def-complete-ordered-field]]): it does not have the
least-upper-bound property.

The failure is witnessed concretely by the set of canonical naturals
$$A \;:=\; \{\, n \cdot 1_K \;:\; n \in \mathbb{N} \,\} \;\subseteq\; K,$$
which is nonempty and bounded above by $t$, yet has no least upper bound in
$K$: every upper bound of $A$ admits a strictly smaller upper bound.

## Facts & Assumptions

**Given:** $K$ with its valuation $v$, leading coefficient $\operatorname{lc}$, monomials $t^{-a}$ and constants $\iota(c)$; the set $A = \{\, n \cdot 1_K : n \in \mathbb{N} \,\}$.

[L1] $K$ is an ordered field in which $f < g$ holds exactly when $g - f \ne 0_K$ and $\operatorname{lc}(g-f) > 0$; the canonical naturals are $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$; and for $c \ne 0$ the constant $\iota(c)$ is nonzero with $v(\iota(c)) = 0$ and $\operatorname{lc}(\iota(c)) = c$ ([[thm-laurent-ordered-field]]).

[L2] $n \cdot 1_K < t$ for every $n \in \mathbb{N}$, and $K$ is not Archimedean ([[lem-laurent-non-archimedean]], [[def-archimedean-field]]).

[L3] Every complete ordered field is Archimedean ([[thm-of-archimedean]]).

[L4] $F$ is a complete ordered field when every nonempty $S \subseteq F$ that is bounded above has a least upper bound in $F$, a least upper bound being an upper bound $\le$ every upper bound ([[def-complete-ordered-field]]).

[L5] For nonzero $h \in K$: $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; $t^{-a}$ is nonzero with $v(t^{-a}) = a$ and $\operatorname{lc}(t^{-a}) = 1$ ([[def-formal-laurent-series]]).

[L6] For nonzero $f, g \in K$: $fg \ne 0_K$ with $v(fg) = v(f)+v(g)$ and $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$; $-f \ne 0_K$ with $v(-f) = v(f)$ and $\operatorname{lc}(-f) = -\operatorname{lc}(f)$; if $v(f) < v(g)$ then $f+g \ne 0_K$ with $\operatorname{lc}(f+g) = \operatorname{lc}(f)$; and if $v(f) = v(g)$ with $\operatorname{lc}(f)+\operatorname{lc}(g) \ne 0$ then $f+g \ne 0_K$ with $v(f+g) = v(f)$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f)+\operatorname{lc}(g)$ ([[lem-laurent-valuation]]).

[L7] $\mathbb{R}$ is a complete ordered field and hence Archimedean: for every real $c$ there is a natural $n$ with $c < n \cdot 1_{\mathbb{R}}$ ([[thm-reals-ordered-field]], [[cor-cauchy-reals-lub-complete]], [[thm-of-archimedean]]).

[L8] In an ordered field exactly one of $x < y$, $x = y$, $y < x$ holds ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 $K$ is an ordered field that is not Archimedean, while by [L3] every complete ordered field is Archimedean; so $K$ is not a complete ordered field, that is, $K$ does not have the least-upper-bound property of [L4]. [L1, L2, L3, L4]

1.2 $A$ is nonempty, since $0 \cdot 1_K = 0_K$ and $1 \cdot 1_K = 1_K$ lie in it, and it is bounded above by $t$, since $n \cdot 1_K < t$ for every natural $n$ by [L2]. [L1, L2, L4]

1.3 Let $s \in K$ be any upper bound of $A$. Since $1_K \in A$ we have $1_K \le s$, and $1_K > 0_K$ because $\operatorname{lc}(1_K) = 1 > 0$; so $s > 0_K$, hence $s \ne 0_K$ and $\operatorname{lc}(s) > 0$. [L1, L4, L5]

2.1 $v(s) < 0$. Indeed, if $v(s) > 0$ then $v(1_K) = 0 < v(s) = v(-s)$ by [L6], so $1_K - s$ is nonzero with leading coefficient $\operatorname{lc}(1_K) = 1 > 0$, giving $s < 1_K$ and contradicting $1_K \le s$ by [L8]. And if $v(s) = 0$, write $c := \operatorname{lc}(s) > 0$ and use [L7] to fix a natural $n$ with $c < n \cdot 1_{\mathbb{R}}$; then $\iota(n \cdot 1_{\mathbb{R}}) - s$ has both valuations equal to $0$ and leading coefficients summing to $n \cdot 1_{\mathbb{R}} - c \ne 0$, so by [L6] it is nonzero with leading coefficient $n \cdot 1_{\mathbb{R}} - c > 0$, giving $n \cdot 1_K > s$ and contradicting that $s$ is an upper bound of $A$. [step 1.3, L1, L4, L5, L6, L7, L8]

3.1 Put $r := v(s) < 0$ and $c := \operatorname{lc}(s) > 0$, and set $s' := \iota(c/2)\, t^{-r} \in K$. By [L1], [L5] and [L6], $s'$ is nonzero with $v(s') = 0 + r = r$ and $\operatorname{lc}(s') = (c/2)\cdot 1 = c/2 > 0$. [step 1.3, step 2.1, L1, L5, L6]

4.1 $s'$ is an upper bound of $A$: it satisfies $s' > 0_K$ by [L1], which settles $n = 0$; and for $n \ge 1$ the element $n \cdot 1_K$ is nonzero with valuation $0$ by [L1], so $v(s') = r < 0 = v(-(n \cdot 1_K))$ and [L6] makes $s' - n\cdot 1_K$ nonzero with leading coefficient $c/2 > 0$, that is $n \cdot 1_K < s'$. [step 3.1, L1, L5, L6]

4.2 $s' < s$: both $s$ and $-s'$ are nonzero of valuation $r$, and their leading coefficients sum to $c - c/2 = c/2 \ne 0$, so by [L6] the difference $s - s'$ is nonzero with leading coefficient $c/2 > 0$. [step 3.1, L1, L6]

5.1 Steps 4.1 and 4.2 show that every upper bound $s$ of $A$ admits an upper bound $s'$ with $s' < s$, so no upper bound of $A$ is least and $A$ has no least upper bound in $K$; with [step 1.2] this exhibits a nonempty subset of $K$ that is bounded above and has no supremum, which is the concrete form of the failure already established in [step 1.1]. [step 1.1, step 1.2, step 4.1, step 4.2, L4] ∎

## Remarks

- **Two proofs of one fact, kept apart on purpose.** [step 1.1] is the abstract
  route: non-Archimedean ordered fields cannot be complete, by the contrapositive
  of [[thm-of-archimedean]], and nothing about Laurent series enters it. The rest
  of the proof is the concrete route, and it names the failing set. Only the
  concrete route tells the reader *what* has no supremum, which matters because
  the same field will be shown to be sequentially Cauchy complete in
  [[thm-laurent-cauchy-complete]]: the reader is entitled to see the set on which
  the two notions of completeness disagree.

- **The halving is not special.** Any real $\lambda$ with $0 < \lambda < 1$
  would serve in place of $1/2$: the only properties used are that
  $\lambda c > 0$, so the smaller element is still positive of valuation $r < 0$
  and therefore still above every canonical natural, and that
  $c - \lambda c \ne 0$, so the descent is strict. Both hold for every such
  $\lambda$, which is why the set of upper bounds of $A$ has no least element
  rather than merely failing to contain one particular candidate.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-laurent-ordered-field",
      "source_section": "Statement",
      "quote": "Let $K = \\mathbb{R}((t^{-1}))$ and let\n$P = \\{\\, f \\in K : f \\ne 0_K \\text{ and } \\operatorname{lc}(f) > 0 \\,\\}$\n([[def-formal-laurent-series]]). Then:\n\n1. $P$ is a positive cone on $K$, so $(K, P)$ is an ordered field\n   ([[def-ordered-field]]), and $f < g$ holds exactly when $g - f \\ne 0_K$ and\n   $\\operatorname{lc}(g - f) > 0$.\n2. For $f \\ne 0_K$ the absolute value ([[def-abs-value]]) satisfies\n   $|f| \\ne 0_K$, $v(|f|) = v(f)$ and\n   $\\operatorname{lc}(|f|) = \\lvert \\operatorname{lc}(f) \\rvert > 0$.\n3. The map $\\iota : \\mathbb{R} \\to K$ sending $c$ to the series with value $c$\n   at index $0$ is an injective ring homomorphism with $\\iota(c) \\in P$ exactly\n   when $c > 0$; and the canonical naturals of $K$ are\n   $n \\cdot 1_K = \\iota(n \\cdot 1_{\\mathbb{R}})$ for every $n \\in \\mathbb{N}$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "3.1",
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-laurent-non-archimedean",
      "source_section": "Statement",
      "quote": "Let $K = \\mathbb{R}((t^{-1}))$ be the ordered field of\n[[thm-laurent-ordered-field]], and identify a natural number with its image in\n$\\mathbb{Z}$ when it is used as an index. Then:\n\n1. $n \\cdot 1_K < t$ for every $n \\in \\mathbb{N}$; consequently $K$ is **not**\n   Archimedean ([[def-archimedean-field]]).\n2. $0_K < t^{-(k+1)} < t^{-k}$ for every $k \\in \\mathbb{Z}$.\n3. **(Countable cofinality.)** For every $\\varepsilon \\in K$ with\n   $\\varepsilon > 0_K$ there is $k \\in \\mathbb{N}$ with\n   $0_K < t^{-k} < \\varepsilon$; indeed every integer $k > v(\\varepsilon)$\n   works.\n4. **(The monomials measure the valuation.)** For $h \\in K$ and $k \\in\n   \\mathbb{Z}$: if $h(j) = 0$ for every $j \\le k$ then $|h| < t^{-k}$; and\n   conversely, if $|h| < t^{-k}$ then $h(j) = 0$ for every $j < k$.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-archimedean-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). For a natural number\n$n \\ge 1$, write $n \\cdot 1_F := \\underbrace{1_F + \\cdots + 1_F}_{n}$ for the\n$n$-fold sum of the multiplicative identity, and $0 \\cdot 1_F := 0$. These are\nthe **canonical natural numbers** of $F$.\n\n$F$ is **Archimedean** if for every $x \\in F$ there is a natural number $n$ with\n\n$$x < n \\cdot 1_F.$$\n\nEquivalently, the canonical naturals $(n \\cdot 1_F)_{n \\ge 1}$ are **cofinal**:\nno single element of $F$ is an upper bound for all of them.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "5.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-formal-laurent-series",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the field of real numbers with its order\n([[def-real-numbers]], [[thm-reals-ordered-field]]) and $\\mathbb{Z}$ is the\ntotally ordered commutative ring of integers ([[def-integers]],\n[[def-int-operations]], [[def-int-order]], [[thm-int-ordered-ring]]).\n\nFor a function $f : \\mathbb{Z} \\to \\mathbb{R}$ write\n\n$$\\operatorname{supp} f \\;:=\\; \\{\\, k \\in \\mathbb{Z} : f(k) \\ne 0 \\,\\},$$\n\nand say that $\\operatorname{supp} f$ is **bounded below** when there is\n$m \\in \\mathbb{Z}$ with $f(k) = 0$ for every $k < m$. The set of **formal Laurent\nseries in $t^{-1}$ over $\\mathbb{R}$** is\n\n$$K \\;=\\; \\mathbb{R}((t^{-1})) \\;:=\\; \\{\\, f : \\mathbb{Z} \\to \\mathbb{R} \\;\\mid\\; \\operatorname{supp} f \\text{ is bounded below} \\,\\},$$\n\nequipped with\n\n$$(f + g)(k) := f(k) + g(k), \\qquad (fg)(k) := \\sum_{i + j = k} f(i)\\,g(j),$$\n\nwhere the product sum ranges over the pairs $(i,j) \\in \\mathbb{Z} \\times\n\\mathbb{Z}$ with $i + j = k$ and $f(i)g(j) \\ne 0$. That set of pairs is finite\nfor every $k$, and $f + g$ and $fg$ again lie in $K$: this is\n[[lem-laurent-series-ring]], which also proves that $K$ with these operations is\na commutative ring whose zero $0_K$ is the constant function $0$ and whose\nidentity $1_K$ is the function taking the value $1$ at $0$ and $0$ elsewhere.\n\n**Distinguished elements.** For $n \\in \\mathbb{Z}$ let $t^{-n} \\in K$ be the\nfunction taking the value $1$ at $n$ and $0$ at every other index; so\n$t^{0} = 1_K$, and $t := t^{-(-1)}$ is the function taking the value $1$ at $-1$.\nFor $c \\in \\mathbb{R}$ let $\\iota(c) \\in K$ be the function taking the value $c$\nat $0$ and $0$ elsewhere. The notation $t^{-n}$ is *defined* here as a name;\nthat it is consistent with the ring multiplication, $t^{-m} \\, t^{-n} =\nt^{-(m+n)}$, is proved in [[lem-laurent-series-ring]].\n\n**Series notation.** Because $\\operatorname{supp} f$ is bounded below, say by\n$m$, one writes\n\n$$f \\;=\\; \\sum_{k \\ge m} f(k)\\, t^{-k},$$\n\na purely notational device: the object is the function $f$, and no convergence\nof any kind is asserted or used.\n\n**Valuation and leading coefficient.** Let $f \\in K$ with $f \\ne 0_K$. Then\n$\\operatorname{supp} f$ is nonempty and bounded below, so it has a least element\n([[lem-laurent-series-ring]]). Define\n\n$$v(f) \\;:=\\; \\min \\operatorname{supp} f \\in \\mathbb{Z}, \\qquad \\operatorname{lc}(f) \\;:=\\; f(v(f)) \\in \\mathbb{R} \\setminus \\{0\\}.$$\n\n$v(f)$ is the **valuation** and $\\operatorname{lc}(f)$ the **leading\ncoefficient** of $f$. Neither is defined at $f = 0_K$, whose support is empty;\nevery statement about $v$ or $\\operatorname{lc}$ in this library carries the\nhypothesis $f \\ne 0_K$ explicitly.\n\n**Order.** The **positive cone** of $K$ is\n\n$$P \\;:=\\; \\{\\, f \\in K : f \\ne 0_K \\text{ and } \\operatorname{lc}(f) > 0 \\,\\},$$\n\nthat is, a nonzero series is positive exactly when its lowest-index nonzero\ncoefficient is a positive real. That $(K, P)$ is an ordered field\n([[def-ordered-field]], [[def-field]]) is [[thm-laurent-ordered-field]], and\nthat every nonzero element of $K$ is invertible is\n[[thm-laurent-series-field]]. As in any ordered field, $f < g$ means\n$g - f \\in P$.",
      "uses": [
        "1.3",
        "2.1",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-laurent-valuation",
      "source_section": "Statement",
      "quote": "Let $K = \\mathbb{R}((t^{-1}))$ with its valuation $v$ and leading coefficient\n$\\operatorname{lc}$ ([[def-formal-laurent-series]]), and let $f, g \\in K$ with\n$f \\ne 0_K$ and $g \\ne 0_K$. Then:\n\n1. **(Products.)** $fg \\ne 0_K$, and\n   $$v(fg) = v(f) + v(g), \\qquad \\operatorname{lc}(fg) = \\operatorname{lc}(f)\\operatorname{lc}(g).$$\n   In particular $K$ has no zero divisors.\n2. **(Negatives.)** $-f \\ne 0_K$, $v(-f) = v(f)$ and\n   $\\operatorname{lc}(-f) = -\\operatorname{lc}(f)$.\n3. **(Unequal valuations.)** If $v(f) < v(g)$ then $f + g \\ne 0_K$,\n   $v(f+g) = v(f)$ and $\\operatorname{lc}(f+g) = \\operatorname{lc}(f)$.\n4. **(Equal valuations, no cancellation.)** If $v(f) = v(g) = q$ and\n   $\\operatorname{lc}(f) + \\operatorname{lc}(g) \\ne 0$, then $f + g \\ne 0_K$,\n   $v(f+g) = q$ and\n   $\\operatorname{lc}(f+g) = \\operatorname{lc}(f) + \\operatorname{lc}(g)$.\n5. **(Sums in general.)** If $f + g \\ne 0_K$ then\n   $v(f+g) \\ge \\min\\{v(f), v(g)\\}$.",
      "uses": [
        "2.1",
        "3.1",
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-reals-ordered-field",
      "source_section": "Statement",
      "quote": "The relation of [[def-real-order]] is well defined and makes $\\mathbb{R}$\n([[thm-reals-field]]) a totally ordered field.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "cor-cauchy-reals-lub-complete",
      "source_section": "Statement",
      "quote": "The Cauchy-sequence reals $\\mathbb{R}_C$ have the **least-upper-bound property**:\nevery nonempty $S \\subseteq \\mathbb{R}_C$ that is bounded above has a least upper\nbound $\\sup S \\in \\mathbb{R}_C$. Hence, together with [[thm-reals-ordered-field]],\n$\\mathbb{R}_C$ is a **complete ordered field** ([[def-complete-ordered-field]]).",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "$K$ is an ordered field that is not Archimedean, while by [L3] every complete ordered field is Archimedean; so $K$ is not a complete ordered field, that is, $K$ does not have the least-upper-bound property of [L4].",
      "step": "1.1",
      "inputs": [
        "L3",
        "L4",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "$A$ is nonempty, since $0 \\cdot 1_K = 0_K$ and $1 \\cdot 1_K = 1_K$ lie in it, and it is bounded above by $t$, since $n \\cdot 1_K < t$ for every natural $n$ by [L2].",
      "step": "1.2",
      "inputs": [
        "L2",
        "L1",
        "L4"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "Let $s \\in K$ be any upper bound of $A$. Since $1_K \\in A$ we have $1_K \\le s$, and $1_K > 0_K$ because $\\operatorname{lc}(1_K) = 1 > 0$; so $s > 0_K$, hence $s \\ne 0_K$ and $\\operatorname{lc}(s) > 0$.",
      "step": "1.3",
      "inputs": [
        "L1",
        "L4",
        "L5"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "$v(s) < 0$. Indeed, if $v(s) > 0$ then $v(1_K) = 0 < v(s) = v(-s)$ by [L6], so $1_K - s$ is nonzero with leading coefficient $\\operatorname{lc}(1_K) = 1 > 0$, giving $s < 1_K$ and contradicting $1_K \\le s$ by [L8]. And if $v(s) = 0$, write $c := \\operatorname{lc}(s) > 0$ and use [L7] to fix a natural $n$ with $c < n \\cdot 1_{\\mathbb{R}}$; then $\\iota(n \\cdot 1_{\\mathbb{R}}) - s$ has both valuations equal to $0$ and leading coefficients summing to $n \\cdot 1_{\\mathbb{R}} - c \\ne 0$, so by [L6] it is nonzero with leading coefficient $n \\cdot 1_{\\mathbb{R}} - c > 0$, giving $n \\cdot 1_K > s$ and contradicting that $s$ is an upper bound of $A$.",
      "step": "2.1",
      "inputs": [
        "L6",
        "L8",
        "L7",
        "L1",
        "L4",
        "L5",
        "step 1.3"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Put $r := v(s) < 0$ and $c := \\operatorname{lc}(s) > 0$, and set $s' := \\iota(c/2)\\, t^{-r} \\in K$. By [L1], [L5] and [L6], $s'$ is nonzero with $v(s') = 0 + r = r$ and $\\operatorname{lc}(s') = (c/2)\\cdot 1 = c/2 > 0$.",
      "step": "3.1",
      "inputs": [
        "L1",
        "L5",
        "L6",
        "step 1.3",
        "step 2.1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "$s'$ is an upper bound of $A$: it satisfies $s' > 0_K$ by [L1], which settles $n = 0$; and for $n \\ge 1$ the element $n \\cdot 1_K$ is nonzero with valuation $0$ by [L1], so $v(s') = r < 0 = v(-(n \\cdot 1_K))$ and [L6] makes $s' - n\\cdot 1_K$ nonzero with leading coefficient $c/2 > 0$, that is $n \\cdot 1_K < s'$.",
      "step": "4.1",
      "inputs": [
        "L1",
        "L6",
        "L5",
        "step 3.1"
      ]
    },
    {
      "id": "step-4.2",
      "claim": "$s' < s$: both $s$ and $-s'$ are nonzero of valuation $r$, and their leading coefficients sum to $c - c/2 = c/2 \\ne 0$, so by [L6] the difference $s - s'$ is nonzero with leading coefficient $c/2 > 0$.",
      "step": "4.2",
      "inputs": [
        "L6",
        "L1",
        "step 3.1"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "Steps 4.1 and 4.2 show that every upper bound $s$ of $A$ admits an upper bound $s'$ with $s' < s$, so no upper bound of $A$ is least and $A$ has no least upper bound in $K$; with [step 1.2] this exhibits a nonempty subset of $K$ that is bounded above and has no supremum, which is the concrete form of the failure already established in [step 1.1].",
      "step": "5.1",
      "inputs": [
        "L4",
        "step 1.2",
        "step 1.1",
        "step 4.1",
        "step 4.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Step 1.2 proves A is nonempty by displaying 0_K and 1_K."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.2 includes 0_K in A and step 4.1 treats n=0 separately when proving the smaller element is still an upper bound."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.3 uses the explicit member 1_K to force every upper bound s to be positive."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The possible valuation cases v(s)>0 and v(s)=0 are both refuted at step 2.1, leaving exactly v(s)<0."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 4.2 uses strict coefficient halving c/2<c, so the constructed upper bound cannot coincide with s."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 2.1 invokes the Archimedean witness n only after c>0 is established; step 3.1 then defines s prime explicitly."
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
    "source": "cor-laurent-not-lub-complete",
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
    "source": "cor-laurent-not-lub-complete",
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
    "source": "cor-laurent-not-lub-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "thm-laurent-ordered-field",
    "declared_target": "thm-laurent-ordered-field",
    "target_statement_provenance": null,
    "targetPage": "formal-laurent-series-field",
    "targetBatch": "wave6-real-analysis-laurent",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-laurent-not-lub-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "lem-laurent-non-archimedean",
    "declared_target": "lem-laurent-non-archimedean",
    "target_statement_provenance": null,
    "targetPage": "formal-laurent-series-field",
    "targetBatch": "wave6-real-analysis-laurent",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-laurent-not-lub-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
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
    "source": "cor-laurent-not-lub-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
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
    "source": "cor-laurent-not-lub-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "def-archimedean-field",
    "declared_target": "def-archimedean-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-laurent-not-lub-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
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
    "source": "cor-laurent-not-lub-complete",
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
    "source": "cor-laurent-not-lub-complete",
    "sourcePage": "formal-laurent-series-field",
    "batch": "wave6-real-analysis-laurent",
    "target": "cor-cauchy-reals-lub-complete",
    "declared_target": "cor-cauchy-reals-lub-complete",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (11)

### `cor-cauchy-reals-lub-complete`

````markdown
---
id: cor-cauchy-reals-lub-complete
kind: corollary
title: "The Cauchy-sequence reals have the least-upper-bound property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-ordered-field, thm-reals-cauchy-complete, lem-cauchy-reals-archimedean, thm-reals-ordered-field, def-real-limit, def-real-order, lem-rat-embeds-dense]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Purdue University notes: Number systems and the real numbers"
      url: "https://www.math.purdue.edu/~jlipman/503/numbers.pdf"
    - title: "East Tennessee State University notes: Uniqueness of the real numbers"
      url: "https://faculty.etsu.edu/gardnerr/4217/Beamer-proofs/Proofs-Reals-Unique.pdf"
pipeline_run: null
---

## Statement

The Cauchy-sequence reals $\mathbb{R}_C$ have the **least-upper-bound property**:
every nonempty $S \subseteq \mathbb{R}_C$ that is bounded above has a least upper
bound $\sup S \in \mathbb{R}_C$. Hence, together with [[thm-reals-ordered-field]],
$\mathbb{R}_C$ is a **complete ordered field** ([[def-complete-ordered-field]]).

## Facts & Assumptions

**Given:** A nonempty set $S \subseteq \mathbb{R}_C$ bounded above by $U \in \mathbb{R}_C$.

[L1] Upper bound, least upper bound, and the least-upper-bound property ([[def-complete-ordered-field]]).

[L2] Every Cauchy sequence of reals converges to a real ([[thm-reals-cauchy-complete]]).

[L3] Convergence and the Cauchy condition for real sequences are quantified over positive rational $\varepsilon$ ([[def-real-limit]]).

[L4] $\mathbb{R}_C$ is Archimedean, so the reals $2^k$ are cofinal and $(b_0 - a_0)/2^k \to 0$ ([[lem-cauchy-reals-archimedean]]).

[L5] $\mathbb{R}_C$ is a totally ordered field: midpoints $(a + b)/2$, halving, and order arithmetic ([[thm-reals-ordered-field]], [[def-real-order]]).

[L6] The rationals embed densely; below any real lies a rational ([[lem-rat-embeds-dense]]).

## Proof

**Proof technique:** direct.

1.1 Fix $s_0 \in S$ (possible as $S \ne \emptyset$); by [L6] choose a real $a_0 < s_0$, so $a_0$ is not an upper bound of $S$, and put $b_0 = U$, an upper bound of $S$. [given, L6, L5, L1]

2.1 Define $(a_k), (b_k)$ by bisection: given $a_k$ (not an upper bound) and $b_k$ (an upper bound), let $m = (a_k + b_k)/2$; if $m$ is an upper bound set $a_{k+1} = a_k, b_{k+1} = m$, otherwise set $a_{k+1} = m, b_{k+1} = b_k$. [step 1.1, L5]

3.1 An induction on $k$ shows each $b_k$ is an upper bound of $S$, each $a_k$ is not, $a_k \le a_{k+1} \le b_{k+1} \le b_k$, and $b_k - a_k = (b_0 - a_0)/2^k$. [step 2.1, L5, L1]

4.1 Given rational $\varepsilon > 0$, by [L4] choose $k$ with $(b_0 - a_0) < 2^k \hat\varepsilon$; then for all $j \ge k$, $b_j - a_j = (b_0 - a_0)/2^j \le (b_0 - a_0)/2^k < \hat\varepsilon$. [step 3.1, L4, L5]

5.1 For $j, l \ge k$ both $a_j, a_l, b_j, b_l$ lie in the nested interval $[a_k, b_k]$, so $|a_j - a_l| \le b_k - a_k < \hat\varepsilon$ and likewise $|b_j - b_l| < \hat\varepsilon$; hence $(a_k)$ and $(b_k)$ are Cauchy sequences of reals. [step 3.1, step 4.1, L3, L5]

6.1 By [L2], $(a_k)$ converges to a real $s$ and $(b_k)$ to a real $s'$. If $s < s'$, choose by [L6] a positive rational $\varepsilon$ with $3\hat\varepsilon < s'-s$. For all large $k$, convergence and step 4.1 give $|a_k-s| < \hat\varepsilon$, $|b_k-s'| < \hat\varepsilon$ and $b_k-a_k < \hat\varepsilon$, whence $s'-s \le |s'-b_k|+(b_k-a_k)+|a_k-s| < 3\hat\varepsilon$, a contradiction. If $s' < s$, choose $2\hat\varepsilon < s-s'$; for all large $k$, $a_k \le b_k$ and the two convergence bounds give $s-s' \le |s-a_k|+(a_k-b_k)+|b_k-s'| < 2\hat\varepsilon$, again a contradiction. Thus $s=s'$. For fixed $k$ and every $j \ge k$, step 3.1 gives $a_k \le a_j \le b_j \le b_k$. If $s<a_k$, choose $0<\hat\varepsilon<a_k-s$ and use $a_j\to s$; if $b_k<s$, choose $0<\hat\varepsilon<s-b_k$ and use $b_j\to s$. Each choice contradicts the displayed inequalities for all large $j$, so $a_k \le s \le b_k$. [step 3.1, step 4.1, step 5.1, L2, L3, L5, L6, algebra]

7.1 Every $t \in S$ satisfies $t \le b_k$ for all $k$, since each $b_k$ is an upper bound. If $s<t$, choose by [L6] a positive rational $\varepsilon$ with $\hat\varepsilon<t-s$. Since $b_k\to s$, eventually $|b_k-s|<\hat\varepsilon$, hence $b_k<s+\hat\varepsilon<t$, contradicting $t\le b_k$. Therefore $t\le s$, so $s$ is an upper bound of $S$. [step 3.1, step 6.1, L1, L3, L5, L6]

7.2 If $v$ is any upper bound of $S$, then for each $k$ some element of $S$ exceeds $a_k$, because $a_k$ is not an upper bound; hence $a_k<v$. If $v<s$, choose by [L6] a positive rational $\varepsilon$ with $\hat\varepsilon<s-v$. Since $a_k\to s$, eventually $|a_k-s|<\hat\varepsilon$, so $a_k>s-\hat\varepsilon>v$, a contradiction. Thus $s\le v$, and $s$ is the least upper bound. [step 3.1, step 6.1, L1, L3, L5, L6]

8.1 Hence $s = \sup S$ exists in $\mathbb{R}_C$; as $S$ was an arbitrary nonempty bounded-above set, $\mathbb{R}_C$ has the least-upper-bound property and is a complete ordered field. [step 7.1, step 7.2, L1] ∎
````

### `def-archimedean-field`

````markdown
---
id: def-archimedean-field
kind: definition
title: "Archimedean ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ordered-field, def-field]
aliases: []
landmark: false
short: "Archimedean"
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
    - title: "UTSA Mathematics: The Archimedean property"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Real_Numbers%3AArchimedean_Property"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]). For a natural number
$n \ge 1$, write $n \cdot 1_F := \underbrace{1_F + \cdots + 1_F}_{n}$ for the
$n$-fold sum of the multiplicative identity, and $0 \cdot 1_F := 0$. These are
the **canonical natural numbers** of $F$.

$F$ is **Archimedean** if for every $x \in F$ there is a natural number $n$ with

$$x < n \cdot 1_F.$$

Equivalently, the canonical naturals $(n \cdot 1_F)_{n \ge 1}$ are **cofinal**:
no single element of $F$ is an upper bound for all of them.

## Remarks

- Equivalently (applying the definition to $1/\varepsilon$): for every
  $\varepsilon > 0$ in $F$ there is $n$ with $1/(n \cdot 1_F) < \varepsilon$, so
  the canonical fractions $1/n$ are arbitrarily small.
- That the canonical naturals are well-defined, positive, and strictly
  increasing is [[lem-of-naturals-positive]]. Every complete ordered field is
  Archimedean ([[thm-of-archimedean]]); an ordered field need not be
  ([[cex-ordered-field-not-archimedean]]).
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

### `lem-laurent-non-archimedean`

````markdown
---
id: lem-laurent-non-archimedean
kind: lemma
title: "$\\mathbb{R}((t^{-1}))$ is non-Archimedean, and the monomials $t^{-k}$ are cofinal below its positive elements"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-formal-laurent-series, lem-laurent-valuation, thm-laurent-ordered-field, def-archimedean-field, def-ordered-field, def-abs-value, thm-int-ordered-ring, lem-nat-embeds-int, def-int-order]
aliases: []
landmark: true
short: "$K$ is non-Archimedean"
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
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ be the ordered field of
[[thm-laurent-ordered-field]], and identify a natural number with its image in
$\mathbb{Z}$ when it is used as an index. Then:

1. $n \cdot 1_K < t$ for every $n \in \mathbb{N}$; consequently $K$ is **not**
   Archimedean ([[def-archimedean-field]]).
2. $0_K < t^{-(k+1)} < t^{-k}$ for every $k \in \mathbb{Z}$.
3. **(Countable cofinality.)** For every $\varepsilon \in K$ with
   $\varepsilon > 0_K$ there is $k \in \mathbb{N}$ with
   $0_K < t^{-k} < \varepsilon$; indeed every integer $k > v(\varepsilon)$
   works.
4. **(The monomials measure the valuation.)** For $h \in K$ and $k \in
   \mathbb{Z}$: if $h(j) = 0$ for every $j \le k$ then $|h| < t^{-k}$; and
   conversely, if $|h| < t^{-k}$ then $h(j) = 0$ for every $j < k$.

## Facts & Assumptions

**Given:** $K$ with its valuation $v$, leading coefficient $\operatorname{lc}$, monomials $t^{-a}$ and constants $\iota(c)$.

[L1] For nonzero $h \in K$, $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; $t^{-a}$ is $1$ at index $a$ and $0$ elsewhere, so $t^{-a} \ne 0_K$ with $v(t^{-a}) = a$ and $\operatorname{lc}(t^{-a}) = 1$; and $t = t^{-(-1)}$ ([[def-formal-laurent-series]]).

[L2] $K$ is an ordered field in which $f < g$ holds exactly when $g - f \ne 0_K$ and $\operatorname{lc}(g-f) > 0$; for $f \ne 0_K$ one has $|f| \ne 0_K$, $v(|f|) = v(f)$ and $\operatorname{lc}(|f|) > 0$; and $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$, which for $n \ge 1$ is nonzero with $v = 0$ ([[thm-laurent-ordered-field]], [[def-abs-value]]).

[L3] For nonzero $f, g \in K$: $-f \ne 0_K$ with $v(-f) = v(f)$; and if $v(f) < v(g)$ then $f + g \ne 0_K$ with $\operatorname{lc}(f+g) = \operatorname{lc}(f)$ ([[lem-laurent-valuation]]).

[L4] An ordered field $F$ is Archimedean when for every $x \in F$ there is a natural $n$ with $x < n \cdot 1_F$; and in an ordered field exactly one of $x < y$, $x = y$, $y < x$ holds ([[def-archimedean-field]], [[def-ordered-field]]).

[L5] The order on $\mathbb{Z}$ is total, and every integer $\ge 0$ is the image of a unique natural number; so for every $m \in \mathbb{Z}$ there is a natural $k$ whose image exceeds $m$ ([[thm-int-ordered-ring]], [[def-int-order]], [[lem-nat-embeds-int]]).

## Proof

**Proof technique:** direct.

1.1 For every $k \in \mathbb{Z}$ the monomial $t^{-k}$ is nonzero with $\operatorname{lc}(t^{-k}) = 1 > 0$, so $t^{-k} > 0_K$ by [L2]; and since $v(t^{-k}) = k < k+1 = v(-t^{-(k+1)})$ by [L1] and [L3], the difference $t^{-k} - t^{-(k+1)}$ is nonzero with leading coefficient $\operatorname{lc}(t^{-k}) = 1 > 0$, so $t^{-(k+1)} < t^{-k}$. [L1, L2, L3]

1.2 Let $n \in \mathbb{N}$. If $n = 0$ then $t - n \cdot 1_K = t$, which is nonzero with $\operatorname{lc}(t) = 1 > 0$. If $n \ge 1$ then $n \cdot 1_K$ is nonzero with $v(n \cdot 1_K) = 0$, so $-(n\cdot 1_K)$ is nonzero with valuation $0$ by [L3], while $v(t) = -1 < 0$; hence $t - n\cdot 1_K$ is nonzero with leading coefficient $\operatorname{lc}(t) = 1 > 0$ by [L3]. In both cases $n \cdot 1_K < t$ by [L2]. [L1, L2, L3]

1.3 Conversely, let $h \in K$ and $k \in \mathbb{Z}$ with $|h| < t^{-k}$, and suppose $h \ne 0_K$ with $v(h) < k$. Then $v(|h|) = v(h) < k = v(t^{-k})$ and $\operatorname{lc}(|h|) > 0$ by [L2], so $|h| - t^{-k}$ is nonzero with leading coefficient $\operatorname{lc}(|h|) > 0$ by [L3], giving $t^{-k} < |h|$ and contradicting $|h| < t^{-k}$ by the trichotomy of [L4]. Hence $h = 0_K$ or $v(h) \ge k$, and in either case $h(j) = 0$ for every $j < k$ by [L1]. [L1, L2, L3, L4]

2.1 Let $h \in K$ and $k \in \mathbb{Z}$ with $h(j) = 0$ for every $j \le k$. If $h = 0_K$ then $|h| = 0_K < t^{-k}$ by [step 1.1]. Otherwise $h \ne 0_K$ with $v(h) > k$, so $|h| \ne 0_K$ with $v(|h|) = v(h) > k = v(t^{-k})$ by [L1] and [L2]; then $t^{-k} - |h|$ is nonzero with leading coefficient $\operatorname{lc}(t^{-k}) = 1 > 0$ by [L3], so $|h| < t^{-k}$ by [L2]. [step 1.1, L1, L2, L3]

2.2 Let $\varepsilon \in K$ with $\varepsilon > 0_K$, so $\varepsilon \ne 0_K$ and $\operatorname{lc}(\varepsilon) > 0$ by [L2]; put $m := v(\varepsilon)$ and use [L5] to fix a natural $k$ with $k > m$. Then $v(\varepsilon) = m < k = v(t^{-k}) = v(-t^{-k})$ by [L1] and [L3], so $\varepsilon - t^{-k}$ is nonzero with leading coefficient $\operatorname{lc}(\varepsilon) > 0$, that is $t^{-k} < \varepsilon$; and $t^{-k} > 0_K$ by [step 1.1]. The same computation applies to every integer $k > m$. [step 1.1, L1, L2, L3, L5]

2.3 By [step 1.2], $n \cdot 1_K < t$ for every natural $n$; by the trichotomy of [L4] no natural $n$ can then satisfy $t < n \cdot 1_K$, so the defining condition of [L4] fails at $x = t$ and $K$ is not Archimedean. [step 1.2, L4]

3.1 Clause 1 is [step 1.2] with [step 2.3], clause 2 is [step 1.1], clause 3 is [step 2.2], and clause 4 is [step 2.1] together with [step 1.3]. [step 1.1, step 2.1, step 1.3, step 2.2, step 2.3] ∎

## Remarks

- **Why clause 3 is the pivotal one.** The valuation takes its values in
  $\mathbb{Z}$, which has countable cofinality, and clause 3 is the translation
  of that fact into the order of $K$: a *countable* family, the monomials
  $t^{-k}$ with $k \in \mathbb{N}$, already gets below every positive element.
  This is what makes the sequential Cauchy condition in $K$ testable against
  countably many thresholds, and it is the reason a sequence indexed by
  $\mathbb{N}$ suffices to reach a limit in [[thm-laurent-cauchy-complete]].
  Nothing like it would hold if the exponents were allowed to range over a
  group of uncountable cofinality.

- **Non-Archimedean here is a statement about $t$, not about the constants.**
  The canonical naturals of $K$ are the constant series
  $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$ (clause 3 of
  [[thm-laurent-ordered-field]]), all of valuation $0$, and what bounds them
  above is $t$, of valuation $-1$. The computation in step 1.2 uses nothing
  about $t$ beyond that: every *positive* element of negative valuation exceeds
  every canonical natural, because a strict inequality between valuations
  decides the comparison outright, whatever the coefficients are.
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

### `thm-laurent-cauchy-complete`

````markdown
---
id: thm-laurent-cauchy-complete
kind: theorem
title: "Every Cauchy sequence in $\\mathbb{R}((t^{-1}))$ converges: $K$ is sequentially Cauchy complete"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-laurent-series, lem-laurent-series-ring, thm-laurent-ordered-field, lem-laurent-non-archimedean, def-sequences-in-an-ordered-field, def-ordered-field, def-abs-value, thm-well-ordering-principle, thm-induction-principle, def-natural-numbers, def-nat-order, thm-nat-linear-order, lem-nat-embeds-int]
aliases: []
landmark: true
short: "$K$ is Cauchy complete"
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "Complete field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_field"
    - title: "B. Sambale, An invitation to formal power series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "Laurent series (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Laurent_series"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Every sequence $(f^{(n)})_{n \in \mathbb{N}}$ in $K = \mathbb{R}((t^{-1}))$ that
is Cauchy in $K$ ([[def-sequences-in-an-ordered-field]]) converges in $K$. That
is, the ordered field $K$ of [[thm-laurent-ordered-field]] is **sequentially
Cauchy complete**.

The limit is built coefficient by coefficient: at each index $j \in \mathbb{Z}$
the real numbers $f^{(n)}(j)$ are eventually constant in $n$, and $L(j)$ is that
eventual value.

## Scratch

The whole theorem turns on one structural fact about $K$, and it is worth
isolating before the proof: **the value group is $\mathbb{Z}$, so it has
countable cofinality.** Concretely, the countably many monomials $t^{-k}$,
$k \in \mathbb{N}$, get below every positive element of $K$
([[lem-laurent-non-archimedean]], clause 3). Two consequences drive everything.

First, the Cauchy condition, which quantifies over the uncountably many positive
$\varepsilon \in K$, is *equivalent* to its restriction to the countable family
$\varepsilon = t^{-(k+1)}$, and by clause 4 of the same lemma that restricted
condition says exactly: for each $k$ the coefficients at all indices $j \le k$
are eventually constant along the sequence.

Second, a sequence indexed by $\mathbb{N}$ is long enough to reach the limit.
For each of the countably many thresholds $t^{-k}$ there is an index $N_k$ past
which the sequence is that close, and $\sup$-free bookkeeping over $\mathbb{N}$
assembles the $N_k$ into a single limit. In a field whose value group had
uncountable cofinality this last step would fail, and a sequence would not
suffice.

The one genuinely non-formal point is that the assembled $L$ must have support
bounded below, so that it is an element of $K$ at all. That does not follow from
the eventual constancy at each index separately; it comes from the *single*
threshold $k = 0$, which already pins down every negative index at once.

## Facts & Assumptions

**Given:** A sequence $(f^{(n)})_{n \in \mathbb{N}}$ in $K$ that is Cauchy in $K$.

[L1] $K$ consists of the functions $\mathbb{Z} \to \mathbb{R}$ whose support is bounded below; $t^{-a}$ is $1$ at index $a$ and $0$ elsewhere ([[def-formal-laurent-series]]).

[L2] $K$ is an ordered field, so its order is transitive and total ([[thm-laurent-ordered-field]], [[def-ordered-field]], [[def-abs-value]]); and $(g - h)(j) = g(j) - h(j)$ for $g, h \in K$ ([[lem-laurent-series-ring]]).

[L3] In $K$: $0_K < t^{-(k+1)} < t^{-k}$ for every $k \in \mathbb{Z}$; for every $\varepsilon > 0$ in $K$ there is $k \in \mathbb{N}$ with $t^{-k} < \varepsilon$; if $h(j) = 0$ for every $j \le k$ then $|h| < t^{-k}$; and if $|h| < t^{-k}$ then $h(j) = 0$ for every $j < k$ ([[lem-laurent-non-archimedean]]).

[L4] $(x_n)$ is Cauchy in $K$ when for every $\varepsilon > 0$ in $K$ there is $N \in \mathbb{N}$ with $|x_n - x_m| < \varepsilon$ for all $n, m \ge N$; and $(x_n)$ converges to $L$ in $K$ when for every $\varepsilon > 0$ in $K$ there is $N$ with $|x_n - L| < \varepsilon$ for all $n \ge N$ ([[def-sequences-in-an-ordered-field]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] The order on $\mathbb{N}$ is total ([[thm-nat-linear-order]], [[def-nat-order]]), induction is available ([[thm-induction-principle]], [[def-natural-numbers]]), and every integer $\ge 0$ is the image of a unique natural number, so a natural number may be used as an index in $\mathbb{Z}$ ([[lem-nat-embeds-int]]).

## Proof

**Proof technique:** constructive.

1.1 For $k \in \mathbb{N}$ put $M_k := \{\, N \in \mathbb{N} : |f^{(n)} - f^{(m)}| < t^{-(k+1)} \text{ for all } n, m \ge N \,\}$. Since $t^{-(k+1)} > 0_K$ by [L3] and the sequence is Cauchy, $M_k \ne \varnothing$ by [L4]; let $N_k := \min M_k$, which exists by [L5]. [given, L3, L4, L5, construct]

2.1 For every $k \in \mathbb{N}$, all $n, m \ge N_k$ and every $j \le k$ one has $f^{(n)}(j) = f^{(m)}(j)$: by [step 1.1] $|f^{(n)} - f^{(m)}| < t^{-(k+1)}$, so [L3] gives $(f^{(n)} - f^{(m)})(j) = 0$ for every $j < k+1$, that is for every $j \le k$, and $(f^{(n)} - f^{(m)})(j) = f^{(n)}(j) - f^{(m)}(j)$ by [L2]. [step 1.1, L2, L3, L6]

2.2 $N_a \le N_b$ whenever $a \le b$ in $\mathbb{N}$: for consecutive indices, $t^{-(k+2)} < t^{-(k+1)}$ by [L3], so any $N$ witnessing membership in $M_{k+1}$ also witnesses membership in $M_k$ by transitivity of the order [L2]; hence $M_{k+1} \subseteq M_k$ and $N_k = \min M_k \le \min M_{k+1} = N_{k+1}$. The general case follows by induction on $b$ [L6]. [step 1.1, L2, L3, L6]

2.3 Define $\kappa : \mathbb{Z} \to \mathbb{N}$ by $\kappa(j) := j$ for $j \ge 0$ and $\kappa(j) := 0$ for $j < 0$, so that $j \le \kappa(j)$ for every $j \in \mathbb{Z}$; then define $L : \mathbb{Z} \to \mathbb{R}$ by $L(j) := f^{(N_{\kappa(j)})}(j)$. [step 1.1, L6, construct]

3.1 For every $j \in \mathbb{Z}$ and every $n \ge N_{\kappa(j)}$ one has $f^{(n)}(j) = L(j)$: apply [step 2.1] with $k = \kappa(j)$, which is legitimate since $j \le \kappa(j)$, to the two indices $n$ and $N_{\kappa(j)}$, both of which are $\ge N_{\kappa(j)}$. [step 2.1, step 2.3, L6]

3.2 $L \in K$. The series $f^{(N_0)}$ lies in $K$, so by [L1] there is $m_0 \in \mathbb{Z}$ with $f^{(N_0)}(j) = 0$ for every $j < m_0$. If $j < m_0$ and $j < 0$ then $\kappa(j) = 0$, so $L(j) = f^{(N_0)}(j) = 0$; hence $L(j) = 0$ for every $j$ below both $m_0$ and $0$, the support of $L$ is bounded below, and $L \in K$. [step 2.3, L1]

4.1 For every $k \in \mathbb{N}$, every $n \ge N_k$ and every $j \le k$ one has $f^{(n)}(j) = L(j)$: if $j \ge 0$ then $\kappa(j) = j \le k$, and if $j < 0$ then $\kappa(j) = 0 \le k$, so in both cases $N_{\kappa(j)} \le N_k \le n$ by [step 2.2] and [step 3.1] applies. [step 2.2, step 3.1, L6]

5.1 $(f^{(n)})$ converges to $L$ in $K$. Let $\varepsilon > 0$ in $K$. By [L3] — this is the countable-cofinality step, and it is the only place where anything special about $K$ is used — there is $k \in \mathbb{N}$ with $t^{-k} < \varepsilon$. Put $N := N_k$. For every $n \ge N$, [step 4.1] and [L2] give $(f^{(n)} - L)(j) = f^{(n)}(j) - L(j) = 0$ for every $j \le k$, so $|f^{(n)} - L| < t^{-k}$ by [L3] and therefore $|f^{(n)} - L| < \varepsilon$ by transitivity [L2]. As $\varepsilon$ was arbitrary, this is convergence in the sense of [L4]. [step 3.2, step 4.1, L2, L3, L4]

6.1 The sequence $(f^{(n)})$ was an arbitrary Cauchy sequence in $K$, and [step 3.2] and [step 5.1] produce an element $L \in K$ to which it converges; so every Cauchy sequence in $K$ converges in $K$. [step 3.2, step 5.1, discharge-construct] ∎

## Remarks

- **What makes the argument work, in one sentence.** The value group of $K$ is $\mathbb{Z}$, whose cofinality is countable, so the continuum of thresholds $\varepsilon > 0$ in the Cauchy condition collapses to the countable family $t^{-k}$, $k \in \mathbb{N}$ ([[lem-laurent-non-archimedean]], clause 3), and a sequence indexed by $\mathbb{N}$ can meet all of them. A proof that skipped this step would be proving nothing: it is exactly the point at which the countability of the index set $\mathbb{N}$ is matched to the structure of the field.

- **Support-boundedness of the limit is a separate obligation, and it is discharged from a single threshold.** Knowing that each coefficient $f^{(n)}(j)$ is eventually constant gives a function $\mathbb{Z} \to \mathbb{R}$ and nothing more; there is no reason *a priori* why its support should be bounded below. What supplies that is [step 3.2]: the threshold $k = 0$ freezes *all* indices $j \le 0$ simultaneously from the single stage $N_0$ onward, so $L$ agrees with the one series $f^{(N_0)}$ on the whole negative half-line and inherits its lower bound.

- **No choice is used.** The stage $N_k$ is not chosen: it is defined as the least element of $M_k$, which exists by the well-ordering principle ([[thm-well-ordering-principle]]). This matters because the construction makes countably many selections, and a version of it that said "pick some $N_k$" would be an appeal to countable choice for no reason.

- **This is Cauchy completeness and nothing more.** $K$ is sequentially Cauchy complete and at the same time lacks the least-upper-bound property ([[cor-laurent-not-lub-complete]]); the two are not the same condition, and in a non-Archimedean field they come apart. Nor does this theorem give the unrestricted nested interval property: see [[cor-laurent-nested-intervals]] for what it does give, and [[cex-laurent-nested-intervals-empty]] for what it does not.
````

### `thm-laurent-ordered-field`

````markdown
---
id: thm-laurent-ordered-field
kind: theorem
title: "$\\mathbb{R}((t^{-1}))$ is an ordered field, ordered by the sign of the leading coefficient"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-formal-laurent-series, lem-laurent-series-ring, lem-laurent-valuation, thm-laurent-series-field, def-ordered-field, def-archimedean-field, def-field, def-abs-value, thm-reals-ordered-field, thm-induction-principle, def-natural-numbers, thm-int-ordered-ring]
aliases: []
landmark: true
short: "$K$ is an ordered field"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ and let
$P = \{\, f \in K : f \ne 0_K \text{ and } \operatorname{lc}(f) > 0 \,\}$
([[def-formal-laurent-series]]). Then:

1. $P$ is a positive cone on $K$, so $(K, P)$ is an ordered field
   ([[def-ordered-field]]), and $f < g$ holds exactly when $g - f \ne 0_K$ and
   $\operatorname{lc}(g - f) > 0$.
2. For $f \ne 0_K$ the absolute value ([[def-abs-value]]) satisfies
   $|f| \ne 0_K$, $v(|f|) = v(f)$ and
   $\operatorname{lc}(|f|) = \lvert \operatorname{lc}(f) \rvert > 0$.
3. The map $\iota : \mathbb{R} \to K$ sending $c$ to the series with value $c$
   at index $0$ is an injective ring homomorphism with $\iota(c) \in P$ exactly
   when $c > 0$; and the canonical naturals of $K$ are
   $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$ for every $n \in \mathbb{N}$.

## Facts & Assumptions

**Given:** $K$ with its valuation $v$, leading coefficient $\operatorname{lc}$, constants $\iota(c)$ and the set $P$ above.

[L1] For nonzero $h \in K$, $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; $\iota(c)$ is $c$ at index $0$ and $0$ elsewhere; $1_K = \iota(1)$ ([[def-formal-laurent-series]]).

[L2] $K$ is a commutative ring, $(f+g)(k) = f(k)+g(k)$, and $(\iota(c)h)(k) = c\,h(k)$ ([[lem-laurent-series-ring]]).

[L3] For nonzero $f, g \in K$: $fg \ne 0_K$ with $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$; $-f \ne 0_K$ with $v(-f) = v(f)$ and $\operatorname{lc}(-f) = -\operatorname{lc}(f)$; if $v(f) < v(g)$ then $f+g \ne 0_K$ with $v(f+g) = v(f)$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f)$; and if $v(f) = v(g)$ with $\operatorname{lc}(f) + \operatorname{lc}(g) \ne 0$ then $f+g \ne 0_K$ with $\operatorname{lc}(f+g) = \operatorname{lc}(f) + \operatorname{lc}(g)$ ([[lem-laurent-valuation]]).

[L4] $K$ is a field ([[thm-laurent-series-field]], [[def-field]]).

[L5] An ordered field is a field with a subset $P$ satisfying (O1) trichotomy, for each $x$ exactly one of $x \in P$, $x = 0$, $-x \in P$, and (O2) closure of $P$ under addition and multiplication; the order is then $a < b :\iff b - a \in P$ ([[def-ordered-field]]). For $n \ge 1$, $n \cdot 1_F$ is the $n$-fold sum of $1_F$, and $0 \cdot 1_F = 0$ ([[def-archimedean-field]]).

[L6] $\mathbb{R}$ is an ordered field: exactly one of $x > 0$, $x = 0$, $x < 0$ holds for each real $x$, and sums and products of positive reals are positive ([[thm-reals-ordered-field]], [[def-ordered-field]]).

[L7] $|x| = x$ when $x \ge 0$ and $|x| = -x$ when $x < 0$, in any ordered field and in $\mathbb{R}$ ([[def-abs-value]]).

[L8] Induction: a property holding at $0$ and inherited from $n$ to $n+1$ holds at every natural number ([[thm-induction-principle]], [[def-natural-numbers]]).

[L9] The order on $\mathbb{Z}$ is total, so for $p, q \in \mathbb{Z}$ exactly one of $p < q$, $p = q$, $q < p$ holds ([[thm-int-ordered-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $f \in K$. If $f = 0_K$ then neither $f$ nor $-f = 0_K$ lies in $P$, since membership in $P$ requires being nonzero. If $f \ne 0_K$ then $-f \ne 0_K$ and $\operatorname{lc}(-f) = -\operatorname{lc}(f)$ by [L3], and by trichotomy in $\mathbb{R}$ ([L6]) exactly one of $\operatorname{lc}(f) > 0$ and $-\operatorname{lc}(f) > 0$ holds. So for every $f$ exactly one of $f \in P$, $f = 0_K$, $-f \in P$ holds, which is (O1). [L1, L3, L5, L6]

1.2 Let $f, g \in P$. By [L3] $fg \ne 0_K$ and $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$, a product of two positive reals, hence positive by [L6]; so $fg \in P$. [L3, L6]

1.3 $\iota(c) + \iota(d) = \iota(c+d)$ because addition is computed index by index, and $\iota(c)\iota(d) = \iota(cd)$ because $(\iota(c)\iota(d))(k) = c\,\iota(d)(k)$ by [L2], which is $cd$ at $k = 0$ and $0$ elsewhere; also $\iota(1) = 1_K$, and $\iota$ is injective since $\iota(c)(0) = c$. [L1, L2]

2.1 Let $f, g \in P$ and compare $v(f)$ with $v(g)$, which by [L9] are related in exactly one of three ways. If $v(f) < v(g)$ then by [L3] $f + g \ne 0_K$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f) > 0$; if $v(g) < v(f)$ the same argument with the roles exchanged applies; and if $v(f) = v(g)$ then $\operatorname{lc}(f) + \operatorname{lc}(g) > 0$ by [L6], in particular nonzero, so by [L3] $f+g \ne 0_K$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f) + \operatorname{lc}(g) > 0$. In every case $f + g \in P$, which with [step 1.2] is (O2). [step 1.2, L3, L6, L9]

2.2 For $c \ne 0$ the series $\iota(c)$ is nonzero with $v(\iota(c)) = 0$ and $\operatorname{lc}(\iota(c)) = c$, so $\iota(c) \in P$ exactly when $c > 0$; and $\iota(0) = 0_K \notin P$. With [step 1.3] this makes $\iota$ an injective ring homomorphism carrying the positive reals onto the positive constants. [step 1.3, L1]

2.3 For every natural $n$, $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$: at $n = 0$ both sides are $0_K$ by [L5] and [L1], and if the identity holds at $n$ then $(n+1)\cdot 1_K = n \cdot 1_K + 1_K = \iota(n \cdot 1_{\mathbb{R}}) + \iota(1) = \iota(n \cdot 1_{\mathbb{R}} + 1) = \iota((n+1)\cdot 1_{\mathbb{R}})$ by [step 1.3]. [step 1.3, L1, L5, L8]

3.1 By [step 1.1] and [step 2.1] the set $P$ satisfies (O1) and (O2), and $K$ is a field by [L4]; hence $(K,P)$ is an ordered field, in which $f < g$ means $g - f \in P$, that is, $g - f \ne 0_K$ and $\operatorname{lc}(g-f) > 0$. [step 1.1, step 2.1, L4, L5]

4.1 Let $f \ne 0_K$. If $f \in P$ then $f > 0_K$ by [step 3.1], so $|f| = f$ by [L7], and $\operatorname{lc}(|f|) = \operatorname{lc}(f) = \lvert \operatorname{lc}(f)\rvert$ since $\operatorname{lc}(f) > 0$. Otherwise $-f \in P$ by [step 1.1], so $f < 0_K$ and $|f| = -f$, whence $|f| \ne 0_K$, $v(|f|) = v(f)$ and $\operatorname{lc}(|f|) = -\operatorname{lc}(f) = \lvert\operatorname{lc}(f)\rvert$, again positive. In both cases $v(|f|) = v(f)$ and $\operatorname{lc}(|f|) = \lvert\operatorname{lc}(f)\rvert > 0$. [step 1.1, step 3.1, L3, L7]

5.1 Clause 1 is [step 3.1], clause 2 is [step 4.1], and clause 3 is [step 2.2] with [step 2.3]. [step 3.1, step 2.2, step 4.1, step 2.3] ∎

## Remarks

- **The order compares lowest terms, and only those.** By clause 1, deciding $f < g$ means finding the least index at which $f$ and $g$ differ and comparing the two coefficients there. Every later coefficient is irrelevant, which is why $\iota(c) > t^{-1}$ for every positive real $c$, however small, and why the order is not the coefficientwise one.

- **$\mathbb{R}$ sits inside $K$ as an ordered subfield, and that is all clause 3 says.** It does not say that $\mathbb{R}$ is cofinal in $K$, and indeed it is not: the computation used for the canonical naturals in [[lem-laurent-non-archimedean]] applies verbatim to every constant, since $v(t) = -1 < 0 = v(\iota(c))$ for every $c \ne 0$, so $\iota(c) < t$ for every real $c$. The identification $n \cdot 1_K = \iota(n \cdot 1_{\mathbb{R}})$ is recorded because the Archimedean property is a statement about the canonical naturals ([[def-archimedean-field]]), and it is the bridge between those and the constant series.
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

