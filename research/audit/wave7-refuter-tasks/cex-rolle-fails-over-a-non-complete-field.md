## Selection reasons

- critical risk (17): 16 declared dependencies; 18 cited facts; 8 numbered proof steps; biconditional / both-direction claim; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; quotient or equivalence-class construction; analytic limiting/completeness language
- Wave 7 ai-generated statement seed
- top-20 dependency-cone consumer (16 generated manifest edges)

## Target item — `cex-rolle-fails-over-a-non-complete-field`

Normalized current SHA-256: `51d14294fd25bd7036549675a0923a026ecea4ca9247486eabcd780c5a63739c`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-rolle-fails-over-a-non-complete-field
kind: counterexample
title: "Over $\\mathbb{Q}$ there is a nonconstant differentiable function with identically zero derivative, so Rolle and the mean value theorem both fail"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [cex-evt-and-ivt-fail-over-a-non-complete-field, def-sequences-in-an-ordered-field, def-completeness-properties, def-rationals, thm-rat-ordered-field, thm-of-square-roots, fs-sqrt2-rational, def-integer-power, lem-power-monotone, lem-of-abs-value, lem-of-inverse-positive, lem-of-sign-rules, lem-of-add-order, lem-of-naturals-positive, def-ordered-field, def-complete-ordered-field]
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
    - title: "Rolle's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rolle%27s_theorem"
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement refuted

**The notion of derivative used here is stated in full, and is not imported.**
Let $F$ be an ordered field, $D \subseteq F$, $\varphi : D \to F$ and $c \in D$
a point that is not isolated in $D$, meaning that for every $\delta > 0$ in $F$
there is $x \in D$ with $0 < |x - c| < \delta$. Say $\varphi$ is
**differentiable at $c$ with derivative $L \in F$** when

$$\text{for every } \varepsilon > 0 \text{ in } F \text{ there is } \delta > 0 \text{ in } F \text{ with } \Big|\frac{\varphi(x)-\varphi(c)}{x-c} - L\Big| < \varepsilon \text{ for all } x \in D \text{ with } 0 < |x-c| < \delta,$$

and write $\varphi'(c) = L$. This is the ordinary difference-quotient condition,
read entirely inside $F$. Nothing below cites a definition of the derivative
from elsewhere in this library, because there is none yet.

**Refuted claim:** over every ordered field $F$, if
$\varphi : [a,b]_F \to F$ with $a < b$ is differentiable at every point of
$[a,b]_F$ ([[def-sequences-in-an-ordered-field]]), then

1. **(Rolle)** $\varphi(a) = \varphi(b)$ implies $\varphi'(c) = 0$ for some
   $c \in [a,b]_F$, and
2. **(Mean value)** $\varphi(b) - \varphi(a) = \varphi'(c)\,(b-a)$ for some
   $c \in [a,b]_F$.

The witness is $F = \mathbb{Q}$ and $D = [0,2]_{\mathbb{Q}}$ with

$$\varphi(x) \;=\; \begin{cases} 0 & x^2 < 2, \\ 1 & x^2 > 2, \end{cases} \qquad\text{and}\qquad \rho(x) \;=\; \varphi(x) - \frac{x}{2}.$$

$\varphi$ is well defined on $D$ because no rational squares to $2$
([[fs-sqrt2-rational]]). It is locally constant, hence differentiable everywhere
on $D$ with $\varphi' \equiv 0$, and it is not constant, since
$\varphi(0) = 0$ and $\varphi(2) = 1$; that refutes clause 2. And $\rho$
satisfies $\rho(0) = \rho(2) = 0$ while $\rho'(c) = -1/2$ for every $c$; that
refutes clause 1.

## Facts & Assumptions

**Given:** The ordered field $\mathbb{Q}$; $D := [0,2]_{\mathbb{Q}}$; the functions $\varphi$ and $\rho$ above.

[L1] $\mathbb{Q}$ is an ordered field ([[thm-rat-ordered-field]], [[def-rationals]], [[def-ordered-field]]); closed intervals $[a,b]_F$ are as in [[def-sequences-in-an-ordered-field]].

[L2] No rational squares to $2$ ([[fs-sqrt2-rational]]); consequently $x^2 \ne 2$ and $|x^2-2| > 0$ for every $x \in D$, and $\mathbb{Q}$ is not a complete ordered field, since a complete one would contain a square root of $2$ ([[thm-of-square-roots]], [[def-complete-ordered-field]], [[def-completeness-properties]]). This is step 1.1 and step 1.2 of [[cex-evt-and-ivt-fail-over-a-non-complete-field]].

[L3] For all $x, c \in D$: $|x^2 - c^2| \le 4\,|x - c|$, which is step 1.4 of [[cex-evt-and-ivt-fail-over-a-non-complete-field]].

[L4] Absolute value: $|u| \ge 0$, $|u| = u$ for $u \ge 0$, $|uv| = |u||v|$, and $|u| < c$ exactly when $-c < u < c$ ([[lem-of-abs-value]]); powers ([[def-integer-power]], [[lem-power-monotone]]).

[L5] Order arithmetic: a positive element is invertible with positive inverse ([[lem-of-inverse-positive]]); for $c > 0$, $a < b$ if and only if $ac < bc$ ([[lem-of-sign-rules]]); adding a constant preserves the order and inequalities add ([[lem-of-add-order]]); $2 \cdot 1 > 0$ and $8 \cdot 1 > 0$ ([[lem-of-naturals-positive]]); the order is total and transitive ([[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 Every $x \in D$ has $x^2 \ne 2$, so exactly one of $x^2 < 2$, $x^2 > 2$ holds and $\varphi$ is well defined on $D$; moreover $0^2 = 0 < 2$ and $1^2 = 1 < 2$ and $2^2 = 4 > 2$, so $\varphi(0) = \varphi(1) = 0$ and $\varphi(2) = 1$, and $\varphi$ is not constant on $D$. [L1, L2, L5]

1.2 For all $x, c \in D$ one has $|x^2 - c^2| \le 4|x-c|$. [L3]

1.3 No point of $D$ is isolated in $D$: given $c \in D$ and $\delta > 0$, let $\eta$ be the smaller of $\delta$ and $1$, and take $x := c + \eta/2$ if $c \le 1$ and $x := c - \eta/2$ otherwise; then $x \in D$ and $0 < |x - c| < \delta$. [L1, L5]

2.1 $\varphi$ is differentiable at every $c \in D$ with $\varphi'(c) = 0$. Put $A := |c^2-2| > 0$ and $\delta_0 := A\,(8)^{-1} > 0$. For $x \in D$ with $|x - c| < \delta_0$ step 1.2 gives $|x^2 - c^2| < A\,(2)^{-1}$; so if $c^2 < 2$, that is $A = 2 - c^2$, then $x^2 < c^2 + A(2)^{-1} = (c^2+2)(2)^{-1} < 2$, while if $c^2 > 2$, that is $A = c^2 - 2$, then $x^2 > c^2 - A(2)^{-1} = (c^2+2)(2)^{-1} > 2$. In either case $\varphi(x) = \varphi(c)$, so the difference quotient is $0$ for every such $x$ with $x \ne c$, and $|0 - 0| < \varepsilon$ for every $\varepsilon > 0$; the same $\delta_0$ serves for every $\varepsilon$. [step 1.1, step 1.2, step 1.3, L4, L5]

3.1 $\rho$ is differentiable at every $c \in D$ with $\rho'(c) = -1/2$: with $\delta_0$ as in step 2.1, every $x \in D$ with $0 < |x-c| < \delta_0$ has $(\rho(x)-\rho(c))(x-c)^{-1} = (\varphi(x)-\varphi(c))(x-c)^{-1} - (2)^{-1} = -(2)^{-1}$, so the quotient is constantly $-1/2$ near $c$; and $\rho(0) = 0$, $\rho(2) = 1 - 1 = 0$, $\rho(1) = -1/2$. [step 1.1, step 2.1, L5]

3.2 The mean value clause fails for $\varphi$ on $D$: $\varphi(2) - \varphi(0) = 1$ while $\varphi'(c)(2-0) = 0$ for every $c \in D$, and $1 \ne 0$. [step 1.1, step 2.1, L5]

4.1 The Rolle clause fails for $\rho$ on $D$: $\rho$ is differentiable at every point of $D$, $\rho(0) = \rho(2)$, and yet $\rho'(c) = -1/2 \ne 0$ for every $c \in D$. [step 3.1, L5]

5.1 So over the ordered field $\mathbb{Q}$, on the closed interval $D = [0,2]_{\mathbb{Q}}$, both clauses of the claim are false, and $\mathbb{Q}$ is an ordered field without the least-upper-bound property. [step 1.1, step 3.2, step 4.1, L2] ∎

## Remarks

- **Where the classical proof breaks.** Rolle's theorem is proved by taking a point where the function attains its maximum and showing the derivative vanishes there. Over $\mathbb{Q}$ the maximum need not exist: that is [[cex-evt-and-ivt-fail-over-a-non-complete-field]], proved on the same interval and by the same missing $\sqrt 2$. So this counterexample is not independent of that one, it is its consequence for the differential calculus.

- **A locally constant function need not be constant** when the domain is disconnected, and $D$ is disconnected in exactly the way $\mathbb{Q}$ is: the sets $\{x \in D : x^2 < 2\}$ and $\{x \in D : x^2 > 2\}$ are disjoint, nonempty, cover $D$, and each is open in the $\varepsilon$-$\delta$ sense. Over $\mathbb{R}$ no such split of an interval exists, and that is the connectedness that the mean value theorem really rests on.

- **The derivative here is genuinely a derivative**, not a degenerate reading: the difference quotient is not merely small near $c$, it is exactly $0$ for $\varphi$ and exactly $-1/2$ for $\rho$ on a whole punctured neighbourhood, so the limit exists in the strongest possible sense.

- **This item does not use, and does not need, a general theory of differentiation.** The difference-quotient condition is stated in the Statement refuted and every use of it above is a direct verification, so the item is self-contained and nothing here waits on a later page. As with [[cex-evt-and-ivt-fail-over-a-non-complete-field]], that is deliberate: the claim refuted is a claim about an *arbitrary* ordered field and is refuted over $\mathbb{Q}$, so a derivative defined for real functions on subsets of $\mathbb{R}$ would not apply to it. The condition above is the ordinary difference-quotient one read inside $F$, and it specialises to the real-variable definition at $F = \mathbb{R}$.
````

## Wave 7 provenance row for the target

```json
{
  "id": "cex-rolle-fails-over-a-non-complete-field",
  "statement": "ai-generated",
  "proof": "ai-generated",
  "evidence": "trivial",
  "urls": [],
  "rationale": "Positive novelty determination: the exact locally constant two-valued witness assembled from the rational cut at sqrt(2) is a bespoke companion to the preceding item. Its endpoint equality, continuity, and absence of a zero derivative are checked directly in the numbered proof.",
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
      "source": "thm-rat-ordered-field",
      "source_section": "Statement",
      "quote": "The relation of [[def-rat-order]] is well defined and makes the field\n$\\mathbb{Q}$ ([[thm-rat-field]]) a totally ordered field: the order is total,\n$x \\le y$ implies $x + z \\le y + z$, and $0 < x$, $0 < y$ imply\n$0 < xy$.",
      "uses": [
        "1.1",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-rationals",
      "source_section": "Definition",
      "quote": "On the set of pairs $(a,b)$ with $a, b \\in \\mathbb{Z}$ and $b \\ne 0$, define\n\n$$(a,b) \\sim (c,d) \\iff ad = cb \\quad \\text{in } \\mathbb{Z}.$$\n\nThis is an equivalence relation ([[lem-rat-equivalence]]). The **rationals** are\nthe quotient $\\mathbb{Q}$, and $[(a,b)]$ is written $a/b$.",
      "uses": [
        "1.1",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.1",
        "1.3"
      ]
    },
    {
      "fact": "L1",
      "source": "def-sequences-in-an-ordered-field",
      "source_section": "Definition",
      "quote": "Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and\nits absolute value $|\\cdot|$ ([[def-abs-value]]), and $\\mathbb{N}$ is the set of\nnatural numbers with its order ([[def-natural-numbers]], [[def-nat-order]]).\n\nA **sequence in $F$** is a function $x : \\mathbb{N} \\to F$. We write $x_k$ for\n$x(k)$ and $(x_k)$, or $(x_k)_{k \\in \\mathbb{N}}$, for the function itself.\n\nLet $(x_k)$ be a sequence in $F$.\n\n- $(x_k)$ is **bounded** when there is $M \\in F$ with $|x_k| \\le M$ for every\n  $k \\in \\mathbb{N}$.\n- $(x_k)$ **converges to** $L \\in F$ when\n\n  $$\\text{for every } \\varepsilon \\in F \\text{ with } \\varepsilon > 0 \\text{ there is } N \\in \\mathbb{N} \\text{ such that } |x_k - L| < \\varepsilon \\text{ for all } k \\ge N.$$\n\n  We then write $x_k \\to L$ *in $F$*. The sequence is **convergent in $F$** when\n  it converges to some $L \\in F$, and **divergent in $F$** otherwise.\n- $(x_k)$ is **Cauchy in $F$** when\n\n  $$\\text{for every } \\varepsilon \\in F \\text{ with } \\varepsilon > 0 \\text{ there is } N \\in \\mathbb{N} \\text{ such that } |x_k - x_l| < \\varepsilon \\text{ for all } k, l \\ge N.$$\n\n- $(x_k)$ is **nondecreasing** when $x_j \\le x_k$ for all $j \\le k$,\n  **increasing** when $x_j < x_k$ for all $j < k$, **nonincreasing** when\n  $x_j \\ge x_k$ for all $j \\le k$, **decreasing** when $x_j > x_k$ for all\n  $j < k$, and **monotone** when it is nondecreasing or nonincreasing.\n- For a strictly increasing $n : \\mathbb{N} \\to \\mathbb{N}$, the **subsequence**\n  of $(x_k)$ along $n$ is the composite $(x_{n_j})_{j \\in \\mathbb{N}}$. An\n  element $L \\in F$ is a **subsequential limit** of $(x_k)$ when some\n  subsequence of $(x_k)$ converges to $L$ in $F$.\n\n**Closed intervals and nesting.** For $a, b \\in F$ with $a \\le b$, the **closed\ninterval** with endpoints $a$ and $b$ is\n\n$$[a,b]_F \\;:=\\; \\{\\, x \\in F : a \\le x \\le b \\,\\},$$\n\nand its **length** is $b - a \\ge 0$. A sequence $(I_k)_{k \\in \\mathbb{N}}$ of\nclosed intervals $I_k = [a_k, b_k]_F$ is **nested** when $I_{k+1} \\subseteq I_k$\nfor every $k$. Its **lengths tend to $0$ in $F$** when the sequence\n$(b_k - a_k)_{k \\in \\mathbb{N}}$ converges to $0$ in the sense above, that is,\nwhen for every $\\varepsilon > 0$ in $F$ there is $N \\in \\mathbb{N}$ with\n$b_k - a_k < \\varepsilon$ for all $k \\ge N$ (the absolute value may be dropped\nbecause each length is $\\ge 0$).",
      "uses": [
        "1.1",
        "1.3"
      ]
    },
    {
      "fact": "L2",
      "source": "fs-sqrt2-rational",
      "source_section": "Statement",
      "quote": "**False claim:** there exists $x \\in \\mathbb{Q}$ with $x^2 = 2$.",
      "uses": [
        "1.1",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-of-square-roots",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every\n$a \\in F$ with $a \\ge 0$ has a **unique** $s \\in F$ with $s \\ge 0$ and $s^2 = a$;\nwe write $s = \\sqrt{a}$. Consequently the positive elements of $F$ are exactly the\nnonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \\neq 0$.",
      "uses": [
        "1.1",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.1",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-completeness-properties",
      "source_section": "Definition",
      "quote": "Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and\nits absolute value. Sequences in $F$, and the notions of convergence in $F$,\nCauchyness in $F$, boundedness, nondecreasing and nonincreasing, subsequence,\nclosed interval $[a,b]_F$, nesting, and lengths tending to $0$ in $F$, are the\nones fixed once and for all in [[def-sequences-in-an-ordered-field]]. They are\nnot restated here and they are never read in $\\mathbb{R}$: every $\\varepsilon$\nbelow ranges over the positive elements of $F$ itself.\n\nA sequence $(x_k)$ in $F$ is **bounded above** when there is $B \\in F$ with\n$x_k \\le B$ for every $k \\in \\mathbb{N}$, and a subset $S \\subseteq F$ is bounded\nabove when there is $B \\in F$ with $s \\le B$ for every $s \\in S$\n([[def-complete-ordered-field]], [[def-upper-bound]]).\n\nThe following are five properties that $F$ may or may not have.\n\n- **(LUB), the least-upper-bound property.** Every nonempty $S \\subseteq F$ that\n  is bounded above has a least upper bound in $F$. This is exactly the condition\n  that makes $F$ a complete ordered field ([[def-complete-ordered-field]]), and\n  the two names are used interchangeably here.\n\n- **(MCT), the monotone convergence property.** Every nondecreasing sequence in\n  $F$ that is bounded above converges in $F$.\n\n- **(NIP), the nested interval property.** For every nested sequence\n  $(I_k)_{k \\in \\mathbb{N}}$ of closed intervals $I_k = [a_k, b_k]_F$ of $F$\n  whose lengths tend to $0$ in $F$, the intersection\n\n  $$\\bigcap_{k \\in \\mathbb{N}} I_k$$\n\n  is nonempty.\n\n- **(BW), the Bolzano-Weierstrass property.** Every bounded sequence in $F$ has\n  a subsequence that converges in $F$.\n\n- **(CC), Cauchy completeness.** Every Cauchy sequence in $F$ converges in $F$.\n\nAlongside these we use the **Archimedean property (ARCH)** of\n[[def-archimedean-field]]: for every $x \\in F$ there is a natural number $n$\nwith $x < n \\cdot 1_F$.",
      "uses": [
        "1.1",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "cex-evt-and-ivt-fail-over-a-non-complete-field",
      "source_section": "Statement refuted",
      "quote": "**The notion of continuity used here is stated in full, and is not imported.**\nLet $F$ be an ordered field, $D \\subseteq F$ and $\\varphi : D \\to F$. Say\n$\\varphi$ is **continuous at** $c \\in D$ when\n\n$$\\text{for every } \\varepsilon > 0 \\text{ in } F \\text{ there is } \\delta > 0 \\text{ in } F \\text{ with } |\\varphi(x) - \\varphi(c)| < \\varepsilon \\text{ whenever } x \\in D \\text{ and } |x - c| < \\delta,$$\n\nand **continuous on $D$** when it is continuous at every point of $D$. This is\nthe ordinary $\\varepsilon$-$\\delta$ condition, read entirely inside $F$. Nothing\nbelow cites a definition of continuity from elsewhere in this library, because\nthere is none yet.\n\n**Refuted claim:** over every ordered field $F$, a function\n$\\varphi : [a,b]_F \\to F$ that is continuous on the closed interval $[a,b]_F$\n([[def-sequences-in-an-ordered-field]]) is bounded there, attains a maximum\nthere, and takes every value between $\\varphi(a)$ and $\\varphi(b)$. In other\nwords, the extreme value theorem and the intermediate value theorem hold over an\narbitrary ordered field.\n\nThe witness is $F = \\mathbb{Q}$ and $D = [0,2]_{\\mathbb{Q}}$, with three\nfunctions, one for each clause:\n\n$$f(x) = \\frac{1}{x^2 - 2}, \\qquad g(x) = -\\,(x^2-2)^2, \\qquad h(x) = x^2 - 2 .$$\n\nAll three are continuous on $D$ in the sense above. $f$ is unbounded; $g$ is\nbounded and has no maximum; $h$ satisfies $h(0) = -2 < 0 < 2 = h(2)$ and never\ntakes the value $0$. What $\\mathbb{Q}$ lacks is the least-upper-bound property\n(LUB) of [[def-completeness-properties]], and each of the three clauses fails\nbecause of that single omission.",
      "uses": [
        "1.1",
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "cex-evt-and-ivt-fail-over-a-non-complete-field",
      "source_section": "Statement refuted",
      "quote": "**The notion of continuity used here is stated in full, and is not imported.**\nLet $F$ be an ordered field, $D \\subseteq F$ and $\\varphi : D \\to F$. Say\n$\\varphi$ is **continuous at** $c \\in D$ when\n\n$$\\text{for every } \\varepsilon > 0 \\text{ in } F \\text{ there is } \\delta > 0 \\text{ in } F \\text{ with } |\\varphi(x) - \\varphi(c)| < \\varepsilon \\text{ whenever } x \\in D \\text{ and } |x - c| < \\delta,$$\n\nand **continuous on $D$** when it is continuous at every point of $D$. This is\nthe ordinary $\\varepsilon$-$\\delta$ condition, read entirely inside $F$. Nothing\nbelow cites a definition of continuity from elsewhere in this library, because\nthere is none yet.\n\n**Refuted claim:** over every ordered field $F$, a function\n$\\varphi : [a,b]_F \\to F$ that is continuous on the closed interval $[a,b]_F$\n([[def-sequences-in-an-ordered-field]]) is bounded there, attains a maximum\nthere, and takes every value between $\\varphi(a)$ and $\\varphi(b)$. In other\nwords, the extreme value theorem and the intermediate value theorem hold over an\narbitrary ordered field.\n\nThe witness is $F = \\mathbb{Q}$ and $D = [0,2]_{\\mathbb{Q}}$, with three\nfunctions, one for each clause:\n\n$$f(x) = \\frac{1}{x^2 - 2}, \\qquad g(x) = -\\,(x^2-2)^2, \\qquad h(x) = x^2 - 2 .$$\n\nAll three are continuous on $D$ in the sense above. $f$ is unbounded; $g$ is\nbounded and has no maximum; $h$ satisfies $h(0) = -2 < 0 < 2 = h(2)$ and never\ntakes the value $0$. What $\\mathbb{Q}$ lacks is the least-upper-bound property\n(LUB) of [[def-completeness-properties]], and each of the three clauses fails\nbecause of that single omission.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "Let $a \\in \\mathbb{R}$, where $\\mathbb{R}$ is the ambient ordered field\n([[def-ordered-field]], [[def-field]]).\n\n**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to\nthe set $\\mathbb{R}$, the starting element $1$ and the function\n$f(x) = x \\cdot a$, there is a unique function $\\mathbb{N} \\to \\mathbb{R}$,\nwritten $n \\mapsto a^n$, with\n\n$$a^0 = 1, \\qquad a^{n+1} = a^n \\cdot a \\quad (n \\in \\mathbb{N}).$$\n\nThus $a^1 = a$, $a^2 = a \\cdot a$, and so on. Note that this is defined for\n**every** $a$, including $a = 0$.\n\n**Negative exponents.** If $a \\ne 0$ and $n \\in \\mathbb{N}$ with $n \\ge 1$, set\n\n$$a^{-n} := (a^n)^{-1}.$$\n\n**Why that is legitimate.** The right-hand side presupposes that $a^n$ is\ninvertible, that is, that $a^n \\ne 0$. This is a proof obligation and not an\nobservation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \\ne 0$\nin a field, $a^n \\ne 0$ for every $n \\in \\mathbb{N}$, proved there by induction on\n$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).\nThat lemma is a statement *about* the operation introduced here, so it depends on\nthis definition and is recorded in this item's `justified_by` rather than in its\n`deps` (SCHEMA §3). Given $a^n \\ne 0$, the value $(a^n)^{-1}$ is a single\nwell-determined element, because multiplicative inverses in a field are unique\n([[lem-of-inverse-unique]]).\n\n**Integer exponents.** Every integer $m$ ([[def-integers]]) is either\n$\\iota(n)$ or $-\\iota(n)$ for a unique natural $n$, where $\\iota$ is the\nembedding $\\mathbb{N} \\to \\mathbb{Z}$ ([[lem-nat-embeds-int]],\n[[def-int-operations]]). This too is a citation and not a slogan: the order on\n$\\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \\ge 0$ or $m < 0$; the\nimage of $\\iota$ is exactly the set of nonnegative integers, and each of them is\n$\\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then\n$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),\nso $-m = \\iota(n)$ and $m = -\\iota(n)$, with $n$ unique because $\\iota$ is\ninjective. The two clauses above therefore define $a^m$ for every\n$m \\in \\mathbb{Z}$ whenever $a \\ne 0$, and for every $m \\in \\mathbb{N}$ for\narbitrary $a$. The clauses are consistent where they overlap: the only overlap is\n$m = 0$, where $-\\iota(0) = \\iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-power-monotone",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let\n$a, b \\in \\mathbb{R}$ and let $n \\in \\mathbb{N}$, with powers as in\n[[def-integer-power]].\n\n1. **Signs.** If $a \\ge 0$ then $a^n \\ge 0$, and if $a > 0$ then $a^n > 0$.\n2. **Strict monotonicity in the base.** If $0 \\le a < b$ and $n \\ge 1$ then $a^n < b^n$. Consequently, for $a, b \\ge 0$ and $n \\ge 1$: $a < b \\iff a^n < b^n$ and $a \\le b \\iff a^n \\le b^n$, and $x \\mapsto x^n$ is injective on $\\{x \\in \\mathbb{R} : x \\ge 0\\}$.\n3. **Comparison with the base.** If $a \\ge 1$ and $n \\ge 1$ then $a^n \\ge a \\ge 1$; if $a > 1$ and $n \\ge 1$ then $a^n \\ge a > 1$; and if $0 \\le a \\le 1$ then $a^n \\le 1$.\n4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "1.1",
        "1.3",
        "2.1",
        "3.1",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.1",
        "1.3",
        "2.1",
        "3.1",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "1.1",
        "1.3",
        "2.1",
        "3.1",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "1.1",
        "1.3",
        "2.1",
        "3.1",
        "3.2",
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.1",
        "1.3",
        "2.1",
        "3.1",
        "3.2",
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Every $x \\in D$ has $x^2 \\ne 2$, so exactly one of $x^2 < 2$, $x^2 > 2$ holds and $\\varphi$ is well defined on $D$; moreover $0^2 = 0 < 2$ and $1^2 = 1 < 2$ and $2^2 = 4 > 2$, so $\\varphi(0) = \\varphi(1) = 0$ and $\\varphi(2) = 1$, and $\\varphi$ is not constant on $D$.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "L5"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "For all $x, c \\in D$ one has $|x^2 - c^2| \\le 4|x-c|$.",
      "step": "1.2",
      "inputs": [
        "L3"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "No point of $D$ is isolated in $D$: given $c \\in D$ and $\\delta > 0$, let $\\eta$ be the smaller of $\\delta$ and $1$, and take $x := c + \\eta/2$ if $c \\le 1$ and $x := c - \\eta/2$ otherwise; then $x \\in D$ and $0 < |x - c| < \\delta$.",
      "step": "1.3",
      "inputs": [
        "L1",
        "L5"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "$\\varphi$ is differentiable at every $c \\in D$ with $\\varphi'(c) = 0$. Put $A := |c^2-2| > 0$ and $\\delta_0 := A\\,(8)^{-1} > 0$. For $x \\in D$ with $|x - c| < \\delta_0$ step 1.2 gives $|x^2 - c^2| < A\\,(2)^{-1}$; so if $c^2 < 2$, that is $A = 2 - c^2$, then $x^2 < c^2 + A(2)^{-1} = (c^2+2)(2)^{-1} < 2$, while if $c^2 > 2$, that is $A = c^2 - 2$, then $x^2 > c^2 - A(2)^{-1} = (c^2+2)(2)^{-1} > 2$. In either case $\\varphi(x) = \\varphi(c)$, so the difference quotient is $0$ for every such $x$ with $x \\ne c$, and $|0 - 0| < \\varepsilon$ for every $\\varepsilon > 0$; the same $\\delta_0$ serves for every $\\varepsilon$.",
      "step": "2.1",
      "inputs": [
        "1.2",
        "1.1",
        "1.3",
        "L4",
        "L5"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "$\\rho$ is differentiable at every $c \\in D$ with $\\rho'(c) = -1/2$: with $\\delta_0$ as in step 2.1, every $x \\in D$ with $0 < |x-c| < \\delta_0$ has $(\\rho(x)-\\rho(c))(x-c)^{-1} = (\\varphi(x)-\\varphi(c))(x-c)^{-1} - (2)^{-1} = -(2)^{-1}$, so the quotient is constantly $-1/2$ near $c$; and $\\rho(0) = 0$, $\\rho(2) = 1 - 1 = 0$, $\\rho(1) = -1/2$.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "1.1",
        "L5"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "The mean value clause fails for $\\varphi$ on $D$: $\\varphi(2) - \\varphi(0) = 1$ while $\\varphi'(c)(2-0) = 0$ for every $c \\in D$, and $1 \\ne 0$.",
      "step": "3.2",
      "inputs": [
        "1.1",
        "2.1",
        "L5"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "The Rolle clause fails for $\\rho$ on $D$: $\\rho$ is differentiable at every point of $D$, $\\rho(0) = \\rho(2)$, and yet $\\rho'(c) = -1/2 \\ne 0$ for every $c \\in D$.",
      "step": "4.1",
      "inputs": [
        "3.1",
        "L5"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "So over the ordered field $\\mathbb{Q}$, on the closed interval $D = [0,2]_{\\mathbb{Q}}$, both clauses of the claim are false, and $\\mathbb{Q}$ is an ordered field without the least-upper-bound property.",
      "step": "5.1",
      "inputs": [
        "1.1",
        "3.2",
        "4.1",
        "L2"
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
      "evidence": "step 1.1: Every $x \\in D$ has $x^2 \\ne 2$, so exactly one of $x^2 < 2$, $x^2 > 2$ holds and $\\varphi$ is well defined on $D$; moreover $0^2 = 0 < 2$ and $1^2 = 1 < 2$ and $2^2 = 4 > 2$, so $\\varphi(0) = \\varphi(1) = 0$ and $\\varphi(2) = 1$, and $\\varphi$ is not constant"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: Every $x \\in D$ has $x^2 \\ne 2$, so exactly one of $x^2 < 2$, $x^2 > 2$ holds and $\\varphi$ is well defined on $D$; moreover $0^2 = 0 < 2$ and $1^2 = 1 < 2$ and $2^2 = 4 > 2$, so $\\varphi(0) = \\varphi(1) = 0$ and $\\varphi(2) = 1$, and $\\varphi$ is not constant"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 1.1: Every $x \\in D$ has $x^2 \\ne 2$, so exactly one of $x^2 < 2$, $x^2 > 2$ holds and $\\varphi$ is well defined on $D$; moreover $0^2 = 0 < 2$ and $1^2 = 1 < 2$ and $2^2 = 4 > 2$, so $\\varphi(0) = \\varphi(1) = 0$ and $\\varphi(2) = 1$, and $\\varphi$ is not constant"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 5.1: So over the ordered field $\\mathbb{Q}$, on the closed interval $D = [0,2]_{\\mathbb{Q}}$, both clauses of the claim are false, and $\\mathbb{Q}$ is an ordered field without the least-upper-bound property."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: the proof begins from named data and uses only explicit witnesses or deterministic constructions; no selection from an unindexed nonempty family is hidden."
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
    "notes": "critical risk (17): 16 declared dependencies; 18 cited facts; 8 numbered proof steps; biconditional / both-direction claim; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; quotient or equivalence-class construction; analytic limiting/completeness language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: All declared boundaries (endpoints, zero/one/degenerate cases, nonempty‑choice, iff‑forward/reverse) were checked in the contract and re‑examined here. The interval endpoints 0 and 2 are not isolated (step 1.3), both φ and ρ are differentiable at the endpoints with the given derivatives, and the zero, one, and degenerate values are correctly handled in step 1.1. No hidden boundary failure was found. Checked surface: The title, the public statement (both clauses of the refuted claim), every numbered proof step (1.1 through 5.1), and the Remarks were read in full. The reasoning is logically valid and mathematically accurate; the counterexample correctly exhibits a non‑complete ordered field (ℚ) on which Rolle and the Mean Value Theorem both fail under the explicit ε‑δ definition of derivative. Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/cex-rolle-fails-over-a-non-complete-field--49f5bb738320d1e0.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cex-rolle-fails-over-a-non-complete-field",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "cex-evt-and-ivt-fail-over-a-non-complete-field",
    "declared_target": "cex-evt-and-ivt-fail-over-a-non-complete-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness-examples",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rolle-fails-over-a-non-complete-field",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-sequences-in-an-ordered-field",
    "declared_target": "def-sequences-in-an-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "formal-laurent-series-field",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rolle-fails-over-a-non-complete-field",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-completeness-properties",
    "declared_target": "def-completeness-properties",
    "target_statement_provenance": "ai-altered",
    "targetPage": "equivalent-forms-of-completeness",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rolle-fails-over-a-non-complete-field",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-rationals",
    "declared_target": "def-rationals",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rolle-fails-over-a-non-complete-field",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-rat-ordered-field",
    "declared_target": "thm-rat-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rolle-fails-over-a-non-complete-field",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-of-square-roots",
    "declared_target": "thm-of-square-roots",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rolle-fails-over-a-non-complete-field",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "fs-sqrt2-rational",
    "declared_target": "fs-sqrt2-rational",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rolle-fails-over-a-non-complete-field",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cex-rolle-fails-over-a-non-complete-field",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-power-monotone",
    "declared_target": "lem-power-monotone",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rolle-fails-over-a-non-complete-field",
    "sourcePage": "equivalent-forms-of-completeness-examples",
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
    "source": "cex-rolle-fails-over-a-non-complete-field",
    "sourcePage": "equivalent-forms-of-completeness-examples",
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
    "source": "cex-rolle-fails-over-a-non-complete-field",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cex-rolle-fails-over-a-non-complete-field",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "cex-rolle-fails-over-a-non-complete-field",
    "sourcePage": "equivalent-forms-of-completeness-examples",
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
    "source": "cex-rolle-fails-over-a-non-complete-field",
    "sourcePage": "equivalent-forms-of-completeness-examples",
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
    "source": "cex-rolle-fails-over-a-non-complete-field",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (16)

### `cex-evt-and-ivt-fail-over-a-non-complete-field`

````markdown
---
id: cex-evt-and-ivt-fail-over-a-non-complete-field
kind: counterexample
title: "On a closed interval of $\\mathbb{Q}$ there is a continuous unbounded function, a bounded one with no maximum, and one without the intermediate value property"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sequences-in-an-ordered-field, def-completeness-properties, def-rationals, thm-rat-ordered-field, lem-rat-archimedean, thm-of-square-roots, fs-sqrt2-rational, def-integer-power, lem-power-monotone, lem-bernoulli-inequality, thm-recursion, thm-induction-principle, lem-of-abs-value, lem-of-triangle-inequality, lem-of-inverse-positive, lem-of-sign-rules, lem-of-add-order, lem-of-naturals-positive, def-ordered-field, def-complete-ordered-field, def-field]
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
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement refuted

**The notion of continuity used here is stated in full, and is not imported.**
Let $F$ be an ordered field, $D \subseteq F$ and $\varphi : D \to F$. Say
$\varphi$ is **continuous at** $c \in D$ when

$$\text{for every } \varepsilon > 0 \text{ in } F \text{ there is } \delta > 0 \text{ in } F \text{ with } |\varphi(x) - \varphi(c)| < \varepsilon \text{ whenever } x \in D \text{ and } |x - c| < \delta,$$

and **continuous on $D$** when it is continuous at every point of $D$. This is
the ordinary $\varepsilon$-$\delta$ condition, read entirely inside $F$. Nothing
below cites a definition of continuity from elsewhere in this library, because
there is none yet.

**Refuted claim:** over every ordered field $F$, a function
$\varphi : [a,b]_F \to F$ that is continuous on the closed interval $[a,b]_F$
([[def-sequences-in-an-ordered-field]]) is bounded there, attains a maximum
there, and takes every value between $\varphi(a)$ and $\varphi(b)$. In other
words, the extreme value theorem and the intermediate value theorem hold over an
arbitrary ordered field.

The witness is $F = \mathbb{Q}$ and $D = [0,2]_{\mathbb{Q}}$, with three
functions, one for each clause:

$$f(x) = \frac{1}{x^2 - 2}, \qquad g(x) = -\,(x^2-2)^2, \qquad h(x) = x^2 - 2 .$$

All three are continuous on $D$ in the sense above. $f$ is unbounded; $g$ is
bounded and has no maximum; $h$ satisfies $h(0) = -2 < 0 < 2 = h(2)$ and never
takes the value $0$. What $\mathbb{Q}$ lacks is the least-upper-bound property
(LUB) of [[def-completeness-properties]], and each of the three clauses fails
because of that single omission.

## Facts & Assumptions

**Given:** The ordered field $\mathbb{Q}$; the set $D := [0,2]_{\mathbb{Q}} = \{x \in \mathbb{Q} : 0 \le x \le 2\}$; the functions $f, g, h$ above; and the map $T(x) := (2x+2)(x+2)^{-1}$.

[L1] $\mathbb{Q}$ is an ordered field ([[thm-rat-ordered-field]], [[def-rationals]], [[def-field]], [[def-ordered-field]]) and is Archimedean ([[lem-rat-archimedean]]).

[L2] No rational squares to $2$ ([[fs-sqrt2-rational]]).

[L3] In a complete ordered field every element $\ge 0$ has a square root ([[thm-of-square-roots]], [[def-complete-ordered-field]]).

[L4] Closed intervals $[a,b]_F$ of an ordered field ([[def-sequences-in-an-ordered-field]]); the properties (LUB) and the rest ([[def-completeness-properties]]).

[L5] Absolute value: $|uv| = |u||v|$, $|u| \ge 0$, $|u| = u$ for $u \ge 0$, and $|u| < c$ exactly when $-c < u < c$ ([[lem-of-abs-value]]); $|u+v| \le |u|+|v|$ ([[lem-of-triangle-inequality]]).

[L6] Powers: $a^0 = 1$, $a^{n+1} = a^n a$ ([[def-integer-power]]); for $0 \le a < b$ and $n \ge 1$, $a^n < b^n$ ([[lem-power-monotone]]); $(1+x)^n \ge 1 + nx$ for $x \ge -1$ ([[lem-bernoulli-inequality]]).

[L7] Recursion theorem ([[thm-recursion]]) and induction principle ([[thm-induction-principle]]).

[L8] Order arithmetic: a positive element is invertible with positive inverse and reciprocation reverses the order ([[lem-of-inverse-positive]]); for $c > 0$, $a < b$ if and only if $ac < bc$ ([[lem-of-sign-rules]]); adding a constant preserves the order and inequalities add ([[lem-of-add-order]]); canonical naturals are positive ([[lem-of-naturals-positive]]); the order is total and transitive ([[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 For every $x \in D$ one has $x^2 \ne 2$, so $x^2 - 2 \ne 0$ and $|x^2-2| > 0$; and $0 \le x \le 2$ gives $0 \le x^2 \le 4$, so $|x^2 - 2| \le 2$. Hence $f$, $g$ and $h$ are defined on all of $D$. [L2, L5, L6, L8]

1.2 $\mathbb{Q}$ is an ordered field that is not complete: a complete ordered field has a square root of $2$, and no rational squares to $2$. [L1, L2, L3, L4]

1.3 For $x \in D$ one has $x + 2 \ge 2 > 0$, so $T(x) = 2 - 2(x+2)^{-1}$ is defined, and $(x+2)^{-1}$ lies between $(4)^{-1}$ and $(2)^{-1}$, so $1 \le T(x) \le 3/2$ and $T(x) \in D$; moreover $T(x)^2 - 2 = 2(x^2-2)(x+2)^{-2}$ and $(x+2)^2 \ge 4$, so $|T(x)^2 - 2| \le |x^2-2|\,(2)^{-1}$. [L5, L6, L8]

1.4 For all $x, c \in D$: $|x^2 - c^2| = |x-c|\,|x+c| \le 4\,|x-c|$, since $0 \le x + c \le 4$. [L5, L8]

2.1 $h$ is continuous on $D$: given $\varepsilon > 0$ take $\delta := \varepsilon\,(4)^{-1}$, and $|x - c| < \delta$ gives $|h(x)-h(c)| = |x^2-c^2| \le 4|x-c| < \varepsilon$. [step 1.4, L5, L8]

2.2 $g$ is continuous on $D$: $|g(x)-g(c)| = |x^2-c^2|\cdot|(x^2-2)+(c^2-2)| \le 4|x-c| \cdot 4 = 16|x-c|$, using step 1.1 for the second factor, so $\delta := \varepsilon\,(16)^{-1}$ works. [step 1.1, step 1.4, L5, L8]

2.3 $f$ is continuous on $D$: fix $c \in D$ and put $A := |c^2-2| > 0$; for $x \in D$ with $|x-c| < A\,(8)^{-1}$ one gets $|x^2 - c^2| < A\,(2)^{-1}$ and hence $|x^2-2| \ge A - |x^2-c^2| > A\,(2)^{-1}$, so $|f(x)-f(c)| = |c^2-x^2|\big(|x^2-2|\,|c^2-2|\big)^{-1} < 8|x-c|\,A^{-2}$; taking $\delta$ to be the smaller of $A(8)^{-1}$ and $\varepsilon A^2 (8)^{-1}$ gives $|f(x)-f(c)| < \varepsilon$. [step 1.1, step 1.4, L5, L8]

2.4 By the recursion theorem applied to $D$, the element $1 \in D$ and the map $T$, there is a sequence $(x_n)$ in $D$ with $x_0 = 1$ and $x_{n+1} = T(x_n)$; and by induction $|x_n^2 - 2| \le (2^n)^{-1}$, the base case being $|1 - 2| = 1$ and the step being step 1.3. [step 1.3, L6, L7]

2.5 $g$ is bounded on $D$, with $-4 \le g(x) \le 0$, and has no maximum: for every $c \in D$ the point $T(c)$ lies in $D$ and satisfies $|T(c)^2-2| \le |c^2-2|(2)^{-1} < |c^2-2|$, so $(T(c)^2-2)^2 < (c^2-2)^2$ and $g(T(c)) > g(c)$. [step 1.1, step 1.3, L6, L8]

3.1 $f$ is unbounded on $D$: $|f(x_n)| = |x_n^2-2|^{-1} \ge 2^n$, and given any $M \in \mathbb{Q}$ the Archimedean property supplies $n$ with $M < n \cdot 1$, whence $2^n \ge 1 + n \cdot 1 > M$ by Bernoulli. [step 2.4, L1, L6, L8]

3.2 $h$ is continuous on $D$ with $h(0) = -2$ and $h(2) = 2$, so $0$ lies strictly between $h(0)$ and $h(2)$, and yet $h(x) = 0$ has no solution in $D$, since that would be a rational squaring to $2$. [step 1.1, step 2.1, L2]

4.1 Over the ordered field $\mathbb{Q}$, on the closed interval $D = [0,2]_{\mathbb{Q}}$: $f$ is continuous and unbounded, $g$ is continuous and bounded with no maximum, and $h$ is continuous and omits a value strictly between its values at the endpoints. All three clauses of the claim are therefore false, and the field involved is exactly one failing (LUB). [step 1.2, step 2.2, step 2.3, step 2.5, step 3.1, step 3.2] ∎

## Remarks

- **One mechanism, three failures.** All three functions are built from $x^2 - 2$, whose zero is missing from $\mathbb{Q}$. The map $T$ is a contraction towards that missing zero: it halves $|x^2-2|$ at every step while staying inside $D$. So $|x^2-2|$ has infimum $0$ on $D$ and does not attain it, and the three failures are three ways of reading that one sentence.

- **Nothing here is peculiar to $\mathbb{Q}$.** The same construction runs in any ordered subfield of $\mathbb{R}$ that omits $\sqrt 2$, since every step above uses only the field operations, the order, and the absence of a square root of $2$. This item exhibits the cheapest witness; no claim is made here about ordered fields in general.

- **This item does not use, and does not need, a general theory of continuous functions.** The $\varepsilon$-$\delta$ condition is stated in the Statement refuted and every use of it above is a direct verification, so the item is self-contained and nothing here waits on a later page. That is deliberate and not a placeholder: the claim refuted here is a claim about an *arbitrary* ordered field, and it is refuted over $\mathbb{Q}$, so a definition of continuity written for real functions on subsets of $\mathbb{R}$ would not apply to it. This library has no notion of continuity over a general ordered field and needs none elsewhere, and inventing an id for one would put an unused definition on a page about completeness properties. The condition above is the ordinary one read inside $F$, and it specialises to the real-variable definition at $F = \mathbb{R}$.

- **What is true over $\mathbb{Q}$.** Continuity, sums and products of continuous functions, and composition all behave normally; what fails is every statement whose proof needs a supremum. That is the content of the page this one belongs to.
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

### `def-completeness-properties`

````markdown
---
id: def-completeness-properties
kind: definition
title: "The five completeness properties of an ordered field: least upper bound, monotone convergence, nested intervals, Bolzano-Weierstrass, and Cauchy completeness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sequences-in-an-ordered-field, def-ordered-field, def-archimedean-field, def-complete-ordered-field, def-upper-bound]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §1.2 and §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and
its absolute value. Sequences in $F$, and the notions of convergence in $F$,
Cauchyness in $F$, boundedness, nondecreasing and nonincreasing, subsequence,
closed interval $[a,b]_F$, nesting, and lengths tending to $0$ in $F$, are the
ones fixed once and for all in [[def-sequences-in-an-ordered-field]]. They are
not restated here and they are never read in $\mathbb{R}$: every $\varepsilon$
below ranges over the positive elements of $F$ itself.

A sequence $(x_k)$ in $F$ is **bounded above** when there is $B \in F$ with
$x_k \le B$ for every $k \in \mathbb{N}$, and a subset $S \subseteq F$ is bounded
above when there is $B \in F$ with $s \le B$ for every $s \in S$
([[def-complete-ordered-field]], [[def-upper-bound]]).

The following are five properties that $F$ may or may not have.

- **(LUB), the least-upper-bound property.** Every nonempty $S \subseteq F$ that
  is bounded above has a least upper bound in $F$. This is exactly the condition
  that makes $F$ a complete ordered field ([[def-complete-ordered-field]]), and
  the two names are used interchangeably here.

- **(MCT), the monotone convergence property.** Every nondecreasing sequence in
  $F$ that is bounded above converges in $F$.

- **(NIP), the nested interval property.** For every nested sequence
  $(I_k)_{k \in \mathbb{N}}$ of closed intervals $I_k = [a_k, b_k]_F$ of $F$
  whose lengths tend to $0$ in $F$, the intersection

  $$\bigcap_{k \in \mathbb{N}} I_k$$

  is nonempty.

- **(BW), the Bolzano-Weierstrass property.** Every bounded sequence in $F$ has
  a subsequence that converges in $F$.

- **(CC), Cauchy completeness.** Every Cauchy sequence in $F$ converges in $F$.

Alongside these we use the **Archimedean property (ARCH)** of
[[def-archimedean-field]]: for every $x \in F$ there is a natural number $n$
with $x < n \cdot 1_F$.

## Remarks

- **(NIP) is stated in the shrinking form because that is the form both
  satisfied by the formal Laurent series field and used by the bisection
  theorem.** The field $\mathbb{R}((t^{-1}))$ is Cauchy complete without having
  least upper bounds ([[thm-laurent-cauchy-complete]],
  [[cor-laurent-not-lub-complete]]), and it satisfies shrinking (NIP)
  ([[cor-laurent-nested-intervals]]). The same shrinking condition is exactly
  what the bisection argument of
  [[lem-nested-intervals-and-archimedean-imply-bw]] produces.

- **"Lengths tend to $0$" is read in $F$.** For a non-Archimedean $F$ this is
  strictly stronger than the same words read in $\mathbb{R}$ through some
  identification of the rational scalars, and the difference is not academic:
  the remarks of [[cor-laurent-nested-intervals]] exhibit intervals in
  $\mathbb{R}((t^{-1}))$ whose lengths are the real constants $2/(n+1)$, which
  tend to $0$ in the ordinary real sense and do not tend to $0$ in the order of
  that field.

- **Boundedness of a sequence is two-sided, boundedness above is not.**
  [[def-sequences-in-an-ordered-field]] calls $(x_k)$ bounded when
  $|x_k| \le M$ for every $k$, which is the hypothesis of (BW); (MCT) asks only
  for the one-sided bound $x_k \le B$, which for a nondecreasing sequence is the
  only side in question, since $x_0 \le x_k$ always.

- **(MCT) is stated for nondecreasing sequences only.** The nonincreasing case
  is not a separate assumption: if $(x_k)$ is nonincreasing and bounded below by
  $b$ then $(-x_k)$ is nondecreasing and bounded above by $-b$, and $x_k \to L$
  exactly when $-x_k \to -L$, because $|(-x_k) - (-L)| = |x_k - L|$. That
  reduction is used in the proof of [[lem-mct-implies-lub]].

- **Nothing here presumes that any of the five holds.** They are predicates on
  an ordered field, and the point of the page they open is that in the presence
  of (ARCH) they are all the same predicate ([[thm-completeness-equivalences]]),
  while without it two of them are strictly weaker
  ([[fs-nested-intervals-implies-lub]], [[fs-cauchy-complete-implies-lub]]).

- **(CC) is this library's third rendering of "Cauchy complete", and for $\mathbb{R}$ all three agree.** [[def-cauchy-in-metric]] and [[def-complete-metric-space]] read Cauchyness and completeness in a metric space, and the case $n = 1$ of [[thm-euclidean-space-complete]] proves $(\mathbb{R}, |x-y|)$ complete; [[def-real-limit]] reads both notions for real sequences, with $\varepsilon$ ranging over the positive rationals; the present definition reads them in an ordered field $F$. For $F = \mathbb{R}$ under the metric $d(x,y) = |x-y|$ of [[lem-real-line-is-a-metric-space]] the three unfold to the same quantified statement: below every positive real lies a positive rational ([[lem-rat-embeds-dense]]), so the two ranges of $\varepsilon$ pick out the same Cauchy sequences and the same convergent ones. So "$\mathbb{R}$ satisfies (CC)" is a statement this library has already proved twice, as [[thm-cauchy-criterion-via-lub]] and as the case $n = 1$ of [[thm-euclidean-space-complete]]. The parallel stops at $\mathbb{R}$. The absolute value of an ordered field takes its values in $F$, while a metric is required to take its values in $\mathbb{R}$ ([[def-metric-space]]), so for a non-Archimedean $F$ the map $(x,y) \mapsto |x-y|$ is not a metric in this library's sense and the metric development says nothing about it. That is why [[lem-of-sequence-basics]] had to be proved from the order axioms alone, although its Cauchy clauses reappear for metric spaces as [[lem-metric-convergent-implies-cauchy]], [[lem-metric-cauchy-bounded]] and [[lem-metric-cauchy-with-convergent-subsequence]]. Neither development generalises the other; they meet exactly at $\mathbb{R}$.
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

### `def-rationals`

````markdown
---
id: def-rationals
kind: definition
title: "The rationals as equivalence classes of pairs of integers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integers, thm-int-comm-ring]
justified_by: [lem-rat-equivalence]
aliases: []
landmark: true
short: "ℚ"
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://archive.org/details/foundationsofana0000land"
    - title: "Rational number — formal construction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
pipeline_run: null
---

## Definition

On the set of pairs $(a,b)$ with $a, b \in \mathbb{Z}$ and $b \ne 0$, define

$$(a,b) \sim (c,d) \iff ad = cb \quad \text{in } \mathbb{Z}.$$

This is an equivalence relation ([[lem-rat-equivalence]]). The **rationals** are
the quotient $\mathbb{Q}$, and $[(a,b)]$ is written $a/b$.

## Remarks

- The pair $(a,b)$ encodes the formal quotient $a/b$; the relation
  $ad = cb$ is "$a/b = c/d$" cleared of denominators, using only the ring
  arithmetic of $\mathbb{Z}$ ([[thm-int-comm-ring]]).
````

### `def-sequences-in-an-ordered-field`

````markdown
---
id: def-sequences-in-an-ordered-field
kind: definition
title: "Sequences, convergence, Cauchyness, monotonicity, boundedness and closed intervals in an arbitrary ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ordered-field, def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-natural-numbers, def-nat-order, def-sequence, def-real-limit, def-monotone-sequence, def-interval, def-subsequential-limit]
aliases: []
landmark: false
short: "sequences in an ordered field $F$"
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
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Cauchy sequences in ordered fields (University of Tennessee notes)"
      url: "https://web.math.utk.edu/~freire/teaching/m300f12/m300s12handout7.pdf"
pipeline_run: null
---

## Definition

Throughout, $F$ is an ordered field ([[def-ordered-field]]) with its order and
its absolute value $|\cdot|$ ([[def-abs-value]]), and $\mathbb{N}$ is the set of
natural numbers with its order ([[def-natural-numbers]], [[def-nat-order]]).

A **sequence in $F$** is a function $x : \mathbb{N} \to F$. We write $x_k$ for
$x(k)$ and $(x_k)$, or $(x_k)_{k \in \mathbb{N}}$, for the function itself.

Let $(x_k)$ be a sequence in $F$.

- $(x_k)$ is **bounded** when there is $M \in F$ with $|x_k| \le M$ for every
  $k \in \mathbb{N}$.
- $(x_k)$ **converges to** $L \in F$ when

  $$\text{for every } \varepsilon \in F \text{ with } \varepsilon > 0 \text{ there is } N \in \mathbb{N} \text{ such that } |x_k - L| < \varepsilon \text{ for all } k \ge N.$$

  We then write $x_k \to L$ *in $F$*. The sequence is **convergent in $F$** when
  it converges to some $L \in F$, and **divergent in $F$** otherwise.
- $(x_k)$ is **Cauchy in $F$** when

  $$\text{for every } \varepsilon \in F \text{ with } \varepsilon > 0 \text{ there is } N \in \mathbb{N} \text{ such that } |x_k - x_l| < \varepsilon \text{ for all } k, l \ge N.$$

- $(x_k)$ is **nondecreasing** when $x_j \le x_k$ for all $j \le k$,
  **increasing** when $x_j < x_k$ for all $j < k$, **nonincreasing** when
  $x_j \ge x_k$ for all $j \le k$, **decreasing** when $x_j > x_k$ for all
  $j < k$, and **monotone** when it is nondecreasing or nonincreasing.
- For a strictly increasing $n : \mathbb{N} \to \mathbb{N}$, the **subsequence**
  of $(x_k)$ along $n$ is the composite $(x_{n_j})_{j \in \mathbb{N}}$. An
  element $L \in F$ is a **subsequential limit** of $(x_k)$ when some
  subsequence of $(x_k)$ converges to $L$ in $F$.

**Closed intervals and nesting.** For $a, b \in F$ with $a \le b$, the **closed
interval** with endpoints $a$ and $b$ is

$$[a,b]_F \;:=\; \{\, x \in F : a \le x \le b \,\},$$

and its **length** is $b - a \ge 0$. A sequence $(I_k)_{k \in \mathbb{N}}$ of
closed intervals $I_k = [a_k, b_k]_F$ is **nested** when $I_{k+1} \subseteq I_k$
for every $k$. Its **lengths tend to $0$ in $F$** when the sequence
$(b_k - a_k)_{k \in \mathbb{N}}$ converges to $0$ in the sense above, that is,
when for every $\varepsilon > 0$ in $F$ there is $N \in \mathbb{N}$ with
$b_k - a_k < \varepsilon$ for all $k \ge N$ (the absolute value may be dropped
because each length is $\ge 0$).

## Remarks

- **The thresholds range over $F$, and that is not a stylistic choice.** In an
  Archimedean ordered field one may equivalently test $\varepsilon$ over the
  canonical rationals, and that is what the $\mathbb{R}$-specific
  [[def-real-limit]] does; the two agree there, as the remark on rational and
  real $\varepsilon$ in [[def-sequence]] records. In a general $F$ they do
  **not** agree, because the canonical rationals need not be cofinal below the
  positive elements. A concrete failure lives on this page: in
  $\mathbb{R}((t^{-1}))$ every positive rational constant exceeds $t^{-1}$
  (clause 4 of [[lem-laurent-non-archimedean]], since a nonzero constant is
  nonzero at index $0$), so the sequence taking the value $0$ at even indices
  and $t^{-1}$ at odd indices would satisfy the Cauchy condition read with
  rational thresholds only, while failing it at $\varepsilon = t^{-2}$, where
  consecutive terms differ by $t^{-1} > t^{-2}$; and it has no limit at all,
  since a convergent sequence is Cauchy by the triangle inequality. Every
  definition above therefore
  quantifies over $\varepsilon \in F$, and no proof in this library may
  substitute a rational threshold in a field that has not been shown to be
  Archimedean.

- **These are the $\mathbb{R}$-notions with $\mathbb{R}$ replaced by $F$, and
  nothing more.** Sequence, tail, subsequence and boundedness are
  [[def-sequence]]; monotonicity is [[def-monotone-sequence]]; subsequential
  limits are [[def-subsequential-limit]]; convergence and Cauchyness are
  [[def-real-limit]]; closed intervals are the form $[a,b]$ of
  [[def-interval]]. Only the field in which the inequalities are read has
  changed.

- **Transfer of theorems is not automatic, and citing an $\mathbb{R}$-item for a
  general $F$ is a citation error.** A result proved about sequences of reals is
  a statement about $\mathbb{R}$. Many such proofs use only the ordered-field
  axioms and go through for any $F$ verbatim, and many others use completeness
  or the Archimedean property and do not. Which is which has to be settled by
  reading the proof; until an item is stated for a general ordered field, it may
  not be cited for one.

- **Limits are unique in any ordered field.** If $x_k \to L$ and $x_k \to L'$
  in $F$ with $L \ne L'$, put $\varepsilon := |L - L'|/2$, which is positive
  because $|L-L'| > 0$ ([[lem-of-abs-value]]) and $2 = 1 + 1 > 0$. Choose $N$
  beyond which both $|x_k - L| < \varepsilon$ and $|x_k - L'| < \varepsilon$
  hold, and take any $k \ge N$: the triangle inequality
  ([[lem-of-triangle-inequality]], proved for an arbitrary ordered field) gives
  $|L - L'| \le |L - x_k| + |x_k - L'| < 2\varepsilon = |L - L'|$, which is
  impossible. So the limit, when it exists, is unique, and the notation
  $\lim_k x_k$ is unambiguous. No completeness and no Archimedean hypothesis is
  used.

- **Indexing starts at $0$**, as everywhere in this library, because
  $0 \in \mathbb{N}$ ([[def-natural-numbers]]). A nested sequence of intervals
  therefore begins with $I_0$, and a statement about "the first $N$ terms" means
  the indices $0, \dots, N-1$.
````

### `fs-sqrt2-rational`

````markdown
---
id: fs-sqrt2-rational
kind: false-statement
title: "FALSE: some rational number squares to 2"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rationals, thm-rat-field]
aliases: []
proof_strategy: contradiction
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
    - title: "T. Tao, Analysis I, 3rd ed., §4.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Square root of 2 — proofs of irrationality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_root_of_2"
pipeline_run: null
---

## Statement

**False claim:** there exists $x \in \mathbb{Q}$ with $x^2 = 2$.

## Facts & Assumptions

**Given:** The rationals as quotients of integer pairs ([[def-rationals]]).

[A1] Every rational can be written $a/b$ in lowest terms, with $a, b$ not both even (cancel common factors of $2$; the process terminates by well-ordering of $\mathbb{N}$).

[A2] Parity in $\mathbb{Z}$: if $k^2$ is even then $k$ is even (an odd $k = 2j+1$ has odd square $4j^2 + 4j + 1$).

## Refutation

**Proof technique:** contradiction.

1.1 Assume, for contradiction, that some $x \in \mathbb{Q}$ has $x^2 = 2$; write $x = a/b$ in lowest terms, $a, b$ not both even. [assume-contra, A1]

2.1 Clearing denominators: $a^2 = 2b^2$. [step 1.1, algebra]

3.1 $a^2$ is even, hence $a$ is even: $a = 2c$. [step 2.1, A2]

4.1 Substituting: $4c^2 = 2b^2$, so $b^2 = 2c^2$ is even, hence $b$ is even. [step 3.1, A2, algebra]

5.1 Both $a$ and $b$ are even, contradicting the lowest-terms choice of step 1.1; the assumption fails: no rational squares to $2$. [step 4.1, step 1.1, discharge-contradiction] ∎
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

### `lem-power-monotone`

````markdown
---
id: lem-power-monotone
kind: lemma
title: "Monotonicity of $x \\mapsto x^n$ and of $n \\mapsto a^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, cor-of-one-positive, lem-of-sign-rules, prop-of-multiply-inequalities, thm-induction-principle, def-ordered-field, def-nat-order, lem-nat-discrete]
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
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let
$a, b \in \mathbb{R}$ and let $n \in \mathbb{N}$, with powers as in
[[def-integer-power]].

1. **Signs.** If $a \ge 0$ then $a^n \ge 0$, and if $a > 0$ then $a^n > 0$.
2. **Strict monotonicity in the base.** If $0 \le a < b$ and $n \ge 1$ then $a^n < b^n$. Consequently, for $a, b \ge 0$ and $n \ge 1$: $a < b \iff a^n < b^n$ and $a \le b \iff a^n \le b^n$, and $x \mapsto x^n$ is injective on $\{x \in \mathbb{R} : x \ge 0\}$.
3. **Comparison with the base.** If $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; if $a > 1$ and $n \ge 1$ then $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1$.
4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.

## Facts & Assumptions

**Given:** An ordered field $\mathbb{R}$, elements $a, b \in \mathbb{R}$ and naturals $m, n$.

[L1] Definition of powers ([[def-integer-power]]): $a^0 = 1$ and $a^{n+1} = a^n a$.

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Sign and scaling rules: a product of positives is positive, and for $c > 0$, $x < y \iff cx < cy$ ([[lem-of-sign-rules]]); the positives are closed under addition and satisfy trichotomy ([[def-ordered-field]]); and $1 > 0$ ([[cor-of-one-positive]], which is where that fact is proved: neither of the two items just named states it).

[L4] Multiplying inequalities of nonnegatives: if $0 \le x \le y$ and $0 \le u \le v$ then $xu \le yv$, and if $0 < x < y$ and $0 < u < v$ then $xu < yv$ ([[prop-of-multiply-inequalities]]).

[L5] Trichotomy and transitivity of the order: for $x, y$ exactly one of $x < y$, $x = y$, $y < x$ holds, and $<$ and $\le$ are transitive ([[def-ordered-field]]).

[L6] The order on the exponents: $m \le n$ holds exactly when $n = m + k$ for some natural $k$ ([[def-nat-order]]), and $m < n$ holds exactly when $m + 1 \le n$ ([[lem-nat-discrete]]); combining the two, $m < n$ holds exactly when $n = m + d$ for some natural $d \ge 1$.

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: $a^0 = 1 > 0$, so claim 1 holds; claim 2 is vacuous at $n = 0$; $a^0 = 1 \ge 1$ and $a^0 = 1 \le 1$, so claim 3 holds at $n = 0$ in the nonstrict readings. [base, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume, for all $a, b$: $a \ge 0 \Rightarrow a^n \ge 0$ and $a > 0 \Rightarrow a^n > 0$; and $0 \le a \le b \Rightarrow a^n \le b^n$, with $a^n < b^n$ when moreover $a < b$ and $n \ge 1$. [ih]

2.1 Signs at $n+1$: if $a \ge 0$ then $a^{n+1} = a^n a$ is a product of two nonnegatives, hence $\ge 0$, and if $a > 0$ it is a product of two positives, hence $> 0$. [step 1.2, L1, L3, L4]

3.1 Strict monotonicity at $n+1$, assuming $0 \le a < b$: then $b > 0$, and the hypothesis gives $0 \le a^n \le b^n$ with $b^n > 0$ by step 2.1; if $a = 0$ then $a^{n+1} = 0 < b^{n+1}$ since $b^{n+1} = b^n b > 0$; if $a > 0$ then $a^{n+1} = a^n a \le b^n a$ by multiplying $a^n \le b^n$ by $a > 0$, and $b^n a < b^n b$ by multiplying $a < b$ by $b^n > 0$, so $a^{n+1} < b^{n+1}$ by transitivity; and in either case $0 \le a \le b$ gives $a^{n+1} \le b^{n+1}$ by [L4]. [step 1.2, step 2.1, L1, L3, L4, L5]

4.1 By the induction principle, claims 1 and 2 hold for every $n$, in the form: $a \ge 0 \Rightarrow a^n \ge 0$; $a > 0 \Rightarrow a^n > 0$; and $0 \le a < b$ with $n \ge 1$ gives $a^n < b^n$. [step 1.1, step 2.1, step 3.1, L2]

5.1 The equivalences of claim 2 follow by trichotomy: for $a, b \ge 0$ and $n \ge 1$, if $a^n < b^n$ then neither $a = b$ (which would give $a^n = b^n$) nor $b < a$ (which would give $b^n < a^n$) is possible, so $a < b$; the $\le$ form is the negation of the $<$ form with $a$ and $b$ exchanged; and injectivity is the case $a^n = b^n$, where $a < b$ and $b < a$ are both excluded. [step 4.1, L5]

5.2 Claim 4: for $a > 1$ we have $a^{n+1} = a^n a > a^n \cdot 1 = a^n$, multiplying $1 < a$ by $a^n > 0$, so $a^n$ is strictly increasing in $n$, and hence $a^m < a^n$ whenever $m < n$: writing $n = m + d$ with $d \ge 1$ and inducting on $d$, the case $d = 1$ is that one-step inequality and the passage from $d$ to $d+1$ is $a^m < a^{m+d} < a^{m+d+1}$ by transitivity; for $a = 1$ an induction gives $1^n = 1$ for all $n$; and for $0 < a < 1$ we have $a^{n+1} = a^n a < a^n \cdot 1 = a^n$, so $a^n$ is strictly decreasing in $n$ and the same induction on the gap $d$ gives $a^m > a^n$ for $m < n$. [step 4.1, L1, L2, L3, L5, L6]

6.1 Claim 3: if $a \ge 1$ and $n \ge 1$ then applying step 4.1 to $1 \le a$ gives $1 = 1^n \le a^n$, and $a^n = a^{n-1} a \ge 1 \cdot a = a$ since $a^{n-1} \ge 1$ by the same argument and $a > 0$; if $a > 1$ the same computation gives $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1^n = 1$. [step 4.1, step 5.1, L1, L3, L4]

7.1 All four claims are proved: signs and strict monotonicity in the base by the induction of steps 1.1 and 3.1, the order equivalences and injectivity by trichotomy, and the comparisons with the base and the behaviour in the exponent by steps 6.1 and 5.2. [step 4.1, step 5.1, step 6.1, step 5.2, discharge-induction] ∎
````

### `thm-of-square-roots`

````markdown
---
id: thm-of-square-roots
kind: theorem
title: "Square roots exist: a unique $\\sqrt{a} \\ge 0$ with $(\\sqrt{a})^2 = a$; the positives are $\\{x^2 : x \\neq 0\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-sign-rules, lem-of-square-monotone, lem-of-square-positive, prop-of-multiply-inequalities, def-ordered-field]
aliases: []
landmark: true
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.21)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Colorado analysis notes: The real numbers"
      url: "https://spot.colorado.edu/~baggett/chap1.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every
$a \in F$ with $a \ge 0$ has a **unique** $s \in F$ with $s \ge 0$ and $s^2 = a$;
we write $s = \sqrt{a}$. Consequently the positive elements of $F$ are exactly the
nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \neq 0$.

## Facts & Assumptions

**Given:** A complete ordered field $F$ ([[def-complete-ordered-field]]), that is, an ordered field ([[def-ordered-field]]) with the least-upper-bound property, and an element $a \in F$ with $a \ge 0$.

[L1] Every nonempty subset of $F$ that is bounded above has a least upper bound in $F$ ([[def-complete-ordered-field]]).

[L2] Sign and scaling rules: a product of positives is positive, and for $c > 0$ one has $x < y \iff cx < cy$ ([[lem-of-sign-rules]]).

[L3] Squaring is strictly monotone on the nonnegatives: if $0 \le x < y$ then $x^2 < y^2$; in particular squaring is injective on $\{x : x \ge 0\}$ ([[lem-of-square-monotone]]).

[L4] A nonzero square is positive: if $y \neq 0$ then $y^2 > 0$ ([[lem-of-square-positive]]).

[L5] Multiplying inequalities of positives: if $0 < x < y$ and $0 < u < v$ then $xu < yv$ ([[prop-of-multiply-inequalities]]).

## Proof

**Proof technique:** contradiction.

1.1 If $a = 0$, then $s = 0$ satisfies $s \ge 0$ and $s^2 = 0 = a$, so existence holds; assume henceforth $a > 0$. [given, algebra]

1.2 Uniqueness holds once a root exists: if $u, v \ge 0$ satisfy $u^2 = v^2$, then strict monotonicity of squaring on nonnegatives [L3] rules out both $u < v$ and $u > v$, forcing $u = v$; so at most one $s \ge 0$ has $s^2 = a$. [L3, given]

1.3 Define $S = \{ t \in F : t \ge 0 \text{ and } t^2 \le a \}$; then $0 \in S$ because $0 \ge 0$ and $0^2 = 0 \le a$, so $S \neq \emptyset$. [given, algebra]

1.4 The element $1 + a$ is an upper bound of $S$: since $a > 0$ we have $1 + a > 1$, so any $t > 1 + a$ has $t > 1$ and $t > 0$, whence $t^2 = t \cdot t > 1 \cdot t = t > 1 + a > a$, giving $t \notin S$. [given, L2]

2.1 By completeness [L1], $s := \sup S$ exists in $F$; and since $0 \in S$ we have $s \ge 0$. [L1, step 1.3, step 1.4]

3.1 Assume, for contradiction, that $s^2 \neq a$; by trichotomy either $s^2 < a$ or $s^2 > a$. [assume-contra, step 2.1]

4.1 (Case $s^2 < a$.) Choose $h$ with $0 < h < 1$ and $h < \dfrac{a - s^2}{2s + 1}$, possible since $a - s^2 > 0$ and $2s + 1 \ge 1 > 0$; then $h^2 = h \cdot h < h \cdot 1 = h$ and $h(2s+1) < a - s^2$, so $(s+h)^2 = s^2 + 2sh + h^2 < s^2 + 2sh + h = s^2 + h(2s+1) < a$, whence $s + h \in S$ with $s + h > s$, contradicting that $s$ is an upper bound of $S$. [assume-case low, step 3.1, step 2.1, L2, L5, choose]

4.2 (Case $s^2 > a$.) Here $s > 0$ since $s^2 > a \ge 0$; choose $h$ with $0 < h < s$ and $h < \dfrac{s^2 - a}{2s}$, so $2sh < s^2 - a$ and $(s-h)^2 = s^2 - 2sh + h^2 \ge s^2 - 2sh > a$, hence every $t \in S$ has $t^2 \le a < (s-h)^2$ with $t \ge 0$ and $s - h > 0$, so $t < s - h$ by [L3]; thus $s - h$ is an upper bound of $S$ with $s - h < s$, contradicting that $s$ is the least upper bound. [assume-case high, step 3.1, step 2.1, L3, choose]

5.1 Both cases of the disjunction in step 3.1 give a contradiction, so the assumption fails and $s^2 = a$: a unique (by step 1.2) $s = \sqrt{a} \ge 0$ with $s^2 = a$ exists, and applying this to any $x > 0$ writes $x = (\sqrt{x})^2$ with $\sqrt{x} \neq 0$ while conversely any nonzero square is positive by [L4], so the positive elements of $F$ are exactly the nonzero squares. [step 4.1, step 4.2, step 3.1, step 1.2, L4, cases, discharge-contradiction] ∎
````

### `thm-rat-ordered-field`

````markdown
---
id: thm-rat-ordered-field
kind: theorem
title: "The rationals form a totally ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-rat-order, def-rat-operations, thm-rat-field, thm-int-ordered-ring]
aliases: []
landmark: true
short: "ℚ ordered field"
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
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "L. S. Krapp, Constructions of the real numbers: a set theoretical approach (Oxford, 2014)"
      url: "https://www.math.uni-konstanz.de/~krapp/research/Constructions_of_the_real_numbers.pdf"
pipeline_run: null
---

## Statement

The relation of [[def-rat-order]] is well defined and makes the field
$\mathbb{Q}$ ([[thm-rat-field]]) a totally ordered field: the order is total,
$x \le y$ implies $x + z \le y + z$, and $0 < x$, $0 < y$ imply
$0 < xy$.

## Facts & Assumptions

**Given:** Rationals $x = [(a,b)]$, $y = [(c,d)]$, $z = [(e,f)]$ with $b, d, f > 0$.

[L1] $\mathbb{Z}$ is a totally ordered commutative ring; positives are closed under products ([[thm-int-ordered-ring]]).

## Proof

**Proof technique:** direct.

1.1 Order-scaling in $\mathbb{Z}$: for $p > 0$, if $u < v$ then $0 < (v-u)p$, so $up < vp$; conversely if $up \le vp$ and $v < u$ then $vp < up$, impossible; hence $u \le v$ iff $up \le vp$. [L1, algebra]

1.2 Suppose $(a,b) \sim (a',b')$ and $(c,d) \sim (c',d')$ with $b', d' > 0$, i.e. $ab' = a'b$ and $cd' = c'd$; suppose also $ad \le cb$. [given]

1.3 Totality: $ad \le cb$ or $cb \le ad$ in $\mathbb{Z}$, so $x \le y$ or $y \le x$. [L1]

1.4 Antisymmetry: $ad \le cb$ and $cb \le ad$ give $ad = cb$, i.e. $x = y$ as classes. [L1]

1.5 Positive products: if $0 < x$ and $0 < y$ then $0 < a$ and $0 < c$, so $xy = [(ac,\, bd)]$ has $ac > 0$ and $bd > 0$, hence $0 < xy$. [L1]

1.6 For transitivity, let $z = [(e,f)]$ with $f > 0$ and suppose additionally $y \le z$, i.e. $cf \le ed$. [given]

2.1 Scaling the hypothesis $ad \le cb$ by $b'd' > 0$: $(ad)(b'd') \le (cb)(b'd')$. [step 1.1, step 1.2, L1]

2.2 Rearranging both sides with $ab' = a'b$ and $cd' = c'd$: $(ad)(b'd') = (ab')(dd') = (a'b)(dd') = (a'd')(bd)$ and $(cb)(b'd') = (cd')(bb') = (c'd)(bb') = (c'b')(bd)$. [step 1.2, L1]

2.3 Transitivity: from $ad \le cb$ and $cf \le ed$, scaling by $f > 0$ and $b > 0$ gives $(af)d = (ad)f \le (cb)f = (cf)b \le (ed)b = (eb)d$; cancelling $d > 0$ via order-scaling, $af \le eb$, i.e. $x \le z$. [step 1.1, step 1.2, step 1.6, L1]

2.4 Compatibility with addition: $x + z \le y + z$ reads $(af+eb)(df) \le (cf+ed)(bf)$, which expands to $(ad)f^2 + (eb)(df) \le (cb)f^2 + (ed)(bf)$; the second terms are equal, so this is $(ad)f^2 \le (cb)f^2$, equivalent by order-scaling with $f^2 > 0$ to $ad \le cb$, i.e. $x \le y$. [step 1.1, L1]

3.1 Combining: $(a'd')(bd) \le (c'b')(bd)$ with $bd > 0$, so $a'd' \le c'b'$ by order-scaling: the order is independent of representatives. [step 2.1, step 2.2, step 1.1, L1]

4.1 The order is well defined, total, compatible with addition, and positives are closed under multiplication: $\mathbb{Q}$ is a totally ordered field. [step 3.1, step 1.3, step 1.4, step 2.3, step 2.4, step 1.5] ∎
````

