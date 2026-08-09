## Selection reasons

- critical risk (14): 9 declared dependencies; 12 cited facts; biconditional / both-direction claim; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; analytic limiting/completeness language

## Target item — `thm-two-sided-limit-iff-both-one-sided`

Normalized current SHA-256: `8b4d3833fc4ac281c7cffc0e4222dbb58889952fbae74c0ccfb6f8e392f85058`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-two-sided-limit-iff-both-one-sided
kind: theorem
title: "If $c$ is a limit point of the domain from both sides, the limit exists iff both one-sided limits exist and agree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-one-sided-limits, def-function-limit, def-limit-point-r, def-neighbourhood-r, def-interval, lem-limit-is-local, lem-function-limit-unique, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "two-sided iff both one-sided"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "One-sided limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/One-sided_limit"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in
\mathbb{R}$ be a limit point of **both** $A^{-} = A \cap (-\infty, c)$ and
$A^{+} = A \cap (c, \infty)$ ([[def-limit-point-r]], [[def-interval]]), so that
both one-sided limits at $c$ are well posed ([[def-one-sided-limits]]). Then $c$
is a limit point of $A$, and for every $L \in \mathbb{R}$:

$$\lim_{x \to c} f(x) = L \quad \Longleftrightarrow \quad \lim_{x \to c^{-}} f(x) = L \ \text{ and } \ \lim_{x \to c^{+}} f(x) = L$$

([[def-function-limit]]). Consequently the limit of $f$ at $c$ **exists** if and
only if both one-sided limits exist and are equal, and in that case

$$\lim_{x \to c} f(x) \;=\; \lim_{x \to c^{-}} f(x) \;=\; \lim_{x \to c^{+}} f(x) .$$

**The hypothesis on both sides is what makes the statement an equivalence.** If
$c$ is a limit point of only one of the two sets — as $1$ is for
$\{0\} \cup [1,2]$ — then the one-sided limit on that side and the two-sided
limit are the same condition, and the symbol on the other side is not defined at
all ([[def-one-sided-limits]]).

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$, a real $c$ that is a limit point of both $A^{-} = A \cap (-\infty, c)$ and $A^{+} = A \cap (c, \infty)$, and a real $L$ ([[def-limit-point-r]], [[def-interval]], [[def-one-sided-limits]]).

[L1] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - L| < \varepsilon$.

[L2] Limit point: $c$ is a limit point of $S$ when for every real $\delta > 0$ there is $x \in S$ with $0 < |x - c| < \delta$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Intervals: $A^{-} = \{\, x \in A : x < c \,\}$ and $A^{+} = \{\, x \in A : x > c \,\}$ ([[def-interval]]).

[L4] Absolute value and order: $|x - c| = 0$ exactly when $x = c$; the order is total, so every $x \ne c$ satisfies $x < c$ or $x > c$; and $0 < |x - c| < \delta$ is equivalent to $c - \delta < x < c$ for $x < c$ and to $c < x < c + \delta$ for $x > c$ ([[lem-of-abs-value]], [[def-ordered-field]]). Of two positive reals the smaller is positive.

[L5] Restriction: if $B \subseteq A$ has $c$ as a limit point and $\lim_{x \to c} f(x) = L$, then $\lim_{x \to c} f|_B(x) = L$ (claim 2 of [[lem-limit-is-local]]).

[L6] One-sided limits are by definition the limits of the restrictions $f|_{A^{-}}$ and $f|_{A^{+}}$ at $c$ ([[def-one-sided-limits]]).

[L7] At a limit point of its domain a function has at most one limit ([[lem-function-limit-unique]]); applied to $f|_{A^{-}}$ and to $f|_{A^{+}}$ it makes each one-sided limit a single real, and applied to $f$ it does the same for the two-sided limit.

## Proof

**Proof technique:** direct.

1.1 $c$ is a limit point of $A$: it is one of $A^{+}$ by hypothesis, and $A^{+} \subseteq A$, so every point of $A^{+}$ found in a punctured neighbourhood of $c$ is a point of $A$ there. [L2, L3]

1.2 For $x \in A$ the condition $0 < |x - c|$ says exactly $x \ne c$, and then $x < c$ or $x > c$, that is $x \in A^{-}$ or $x \in A^{+}$; moreover for $x \in A^{-}$ the condition $0 < |x - c| < \delta$ reads $c - \delta < x < c$ and for $x \in A^{+}$ it reads $c < x < c + \delta$. [L3, L4]

2.1 Suppose $\lim_{x \to c} f(x) = L$. Both $A^{-}$ and $A^{+}$ are subsets of $A$ having $c$ as a limit point, so [L5] gives $\lim_{x \to c} f|_{A^{-}}(x) = L$ and $\lim_{x \to c} f|_{A^{+}}(x) = L$, which by [L6] is exactly $\lim_{x \to c^{-}} f(x) = L$ and $\lim_{x \to c^{+}} f(x) = L$. [step 1.1, step 1.2, L5, L6]

2.2 Suppose conversely that both one-sided limits equal $L$, and let $\varepsilon > 0$ be an arbitrary real. By [L6] and [L1] fix reals $\delta_1, \delta_2 > 0$ such that every $x \in A^{-}$ with $0 < |x - c| < \delta_1$ and every $x \in A^{+}$ with $0 < |x - c| < \delta_2$ satisfies $|f(x) - L| < \varepsilon$; let $\delta$ be the smaller of the two. Every $x \in A$ with $0 < |x - c| < \delta$ lies in $A^{-}$ or in $A^{+}$ by step 1.2, and in either case $|f(x) - L| < \varepsilon$. As $\varepsilon$ was arbitrary, $\lim_{x \to c} f(x) = L$. [step 1.2, L1, L4, L6, choose]

3.1 The displayed equivalence is steps 2.1 and 2.2. For the consequence: if the limit of $f$ at $c$ exists, say with value $L$, then step 2.1 gives that both one-sided limits exist with the same value $L$, so they agree; and if both one-sided limits exist and are equal, to the common value $L$, then step 2.2 gives that the limit of $f$ at $c$ exists and equals $L$. Each of the three symbols denotes a single real by [L7], so the three are equal. [step 2.1, step 2.2, L7] ∎

## Remarks

- **The two directions are not symmetric in difficulty.** From the two-sided limit to the one-sided ones is pure restriction, [[lem-limit-is-local]]; the converse has to glue two estimates, and the gluing is legitimate precisely because every point of $A$ other than $c$ lies strictly on one side of $c$, which is the totality of the order.

- **The typical failure** is a function whose two one-sided limits exist and differ: the sign function at $0$, on the companion page. Then the two-sided limit cannot exist, since by step 2.1 it would force both one-sided values to equal it.

- **A function may also have no two-sided limit for a different reason**, namely that a one-sided limit fails to exist rather than that the two disagree. The theorem covers that case too, since its right-hand side asserts the existence of both one-sided values, so its failure on one side alone already blocks the two-sided limit. The companion page exhibits both patterns.
````

## Wave 7 provenance row for the target

```json
{
  "id": "thm-two-sided-limit-iff-both-one-sided",
  "statement": "literature-derived",
  "proof": "ai-generated",
  "evidence": "exact-source",
  "urls": [
    "https://en.wikipedia.org/wiki/One-sided_limit",
    "https://www.jirka.org/ra/html/sec_limoffunc.html"
  ],
  "rationale": "Lebl, Proposition 3.1.17, states exactly the local hypotheses that c is a cluster point of both one-sided restrictions and concludes that the two-sided limit equals L iff both one-sided limits equal L; it also gives the equal-limits consequence. The local proof is independently expanded.",
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
      "source": "def-function-limit",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]) with its order and absolute value\n([[def-real-order]]).\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$, let $c \\in \\mathbb{R}$\nbe a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \\in \\mathbb{R}$.\nWe say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write\n\n$$\\lim_{x \\to c} f(x) = L ,$$\n\nwhen\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ 0 < |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - L| < \\varepsilon\\ \\bigr],$$\n\nwhere $\\varepsilon$ and $\\delta$ range over the **positive reals**.\n\nIn the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:\nfor every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with\n\n$$f\\bigl(A \\cap N^{*}_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}(L),$$\n\n$N^{*}_{\\delta}(c) = \\{\\, y : 0 < |y - c| < \\delta \\,\\}$ being the punctured\n$\\delta$-neighbourhood of $c$ and $N_{\\varepsilon}(L) = (L - \\varepsilon,\\ L +\n\\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because\n$|f(x) - L| < \\varepsilon$ says exactly $f(x) \\in N_\\varepsilon(L)$, and\n$0 < |x - c| < \\delta$ says exactly $x \\in N^{*}_\\delta(c)$.\n\n**Three features of this definition are load bearing, not decoration.**\n\n1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that\n   says every punctured neighbourhood of $c$ meets $A$, so for every $\\delta > 0$\n   the set $A \\cap N^{*}_\\delta(c)$ over which the implication quantifies is\n   nonempty. Drop the requirement and the implication can be satisfied\n   vacuously by *every* real $L$ at once, which is exactly what\n   [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$\n   that is not a limit point of $A$ — an isolated point — the symbol\n   $\\lim_{x \\to c} f(x)$ is therefore **not defined** in this library.\n\n2. **$c \\in A$ is not required.** A limit point of $A$ need not belong to $A$\n   ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This\n   is what allows a limit to be taken at a point where the function is not\n   defined at all, as at $0$ for $x \\mapsto x\\,\\psi(1/x)$.\n\n3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis\n   $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the\n   single point $c$ changes nothing. Equality of the limit with the value is an\n   extra condition, not a consequence: [[fs-limit-equals-value]].\n\n**The notation presumes uniqueness.** Writing $\\lim_{x \\to c} f(x) = L$ treats\nthe left-hand side as a name for a single real number, which is legitimate only\nbecause at a limit point at most one $L$ can satisfy the displayed condition.\nThat obligation is discharged by [[lem-function-limit-unique]], recorded in this\nitem's `justified_by`. As with $\\sup S$ ([[rem-sup-conventions]]) and\n$\\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function\nalready known to have a limit at $c$.\n\n**Real and rational $\\varepsilon$ define the same relation.** Above,\n$\\varepsilon$ and $\\delta$ range over the positive reals. Restricting either\nquantifier to the positive rationals gives the same relation: every positive\nrational is a positive real, and below every positive real lies a positive\nrational ([[lem-rat-embeds-dense]]), so an $\\varepsilon$-condition verified for\nall positive rationals is verified for an arbitrary positive real $\\eta$ by\nrunning it at a rational $\\varepsilon$ with $0 < \\varepsilon < \\eta$, and a\n$\\delta$ produced as a real may be shrunk to a rational one below it. This is\nthe passage sanctioned in the remarks of [[def-sequence]], and it is what lets\nthis definition be compared with [[def-real-limit]], whose $\\varepsilon$ is\nrational, in [[thm-sequential-criterion-for-function-limits]].",
      "uses": [
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and $x \\in \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]] and closure as in\n[[def-interior-closure-boundary-r]].\n\n- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne\n  \\varnothing$ for every real $\\varepsilon > 0$.\n- $x$ is a **limit point** (or *accumulation point*) of $A$ when\n  $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real\n  $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.\n- $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real\n  $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$.\n- The **derived set** of $A$ is\n  $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$\n- $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.\n\n**A limit point is an adherent point**, since $N^{*}_\\varepsilon(x) \\subseteq\nN_\\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since\n$x \\in N_\\varepsilon(x) \\cap A$ ([[def-neighbourhood-r]]). So the adherent\npoints of $A$ are exactly the points of $A \\cup A'$, a statement proved as part\nof [[thm-closure-characterisations-r]].\n\n**Limit point and isolated point are exact opposites inside $A$.** For\n$x \\in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point\nof $A$. Indeed $N_\\varepsilon(x) \\cap A = \\{x\\}$ says precisely that\n$N^{*}_\\varepsilon(x) \\cap A = \\varnothing$, because $x$ itself always lies in\n$N_\\varepsilon(x) \\cap A$ when $x \\in A$; so the existence of an $\\varepsilon$\nwitnessing isolation is the negation of the condition defining a limit point.\nA point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and\nnever both.\n\n**A limit point need not belong to the set, and a point of the set need not be a\nlimit point.** Both possibilities occur, and the two examples that matter later\nare $0$, which is a limit point of $\\{\\, 1/k : k \\ge 1 \\,\\}$ without belonging\nto it, and $0$ again, which belongs to $\\{0\\} \\cup [1,2]$ as an isolated point.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "1.2",
        "2.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.2",
        "2.2"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-limit-is-local",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and let $c$ be a limit point of $A$\n([[def-limit-point-r]]).\n\n1. **Locality.** Let $f, g : A \\to \\mathbb{R}$ and $L \\in \\mathbb{R}$, and\n   suppose there is a real $\\eta > 0$ with $f(x) = g(x)$ for every $x \\in A$\n   satisfying $0 < |x - c| < \\eta$. Then\n   $$\\lim_{x \\to c} f(x) = L \\iff \\lim_{x \\to c} g(x) = L$$\n   ([[def-function-limit]]).\n\n2. **Restriction.** Let $B \\subseteq A$ with $c$ a limit point of $B$, let\n   $f : A \\to \\mathbb{R}$ and suppose $\\lim_{x \\to c} f(x) = L$. Then $c$ is a\n   limit point of $A$ as well, and $\\lim_{x \\to c} f|_B(x) = L$, where\n   $f|_B : B \\to \\mathbb{R}$ is the restriction of $f$.\n\nSo the limit at $c$ sees only the values of $f$ on an arbitrarily small\npunctured neighbourhood of $c$, and it survives shrinking the domain, provided\nthe smaller domain still accumulates at $c$. Together with\n[[lem-function-limit-unique]] this is what makes the phrase *the* limit at $c$ a\nlocal notion.\n\n**The converse of claim 2 is false in general**: a restriction may have a limit\nwhere the function has none, as the one-sided limits of the sign function on the\ncompanion page show.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-one-sided-limits",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in\n\\mathbb{R}$. Put\n\n$$A^{-} := A \\cap (-\\infty, c), \\qquad A^{+} := A \\cap (c, \\infty)$$\n\n([[def-interval]]), and write $f^{-} := f|_{A^{-}}$ and $f^{+} := f|_{A^{+}}$\nfor the restrictions of $f$ to those sets.\n\n**Right limit.** Suppose $c$ is a limit point of $A^{+}$ ([[def-limit-point-r]]).\nFor $L \\in \\mathbb{R}$ we write\n\n$$\\lim_{x \\to c^{+}} f(x) = L \\quad :\\Longleftrightarrow \\quad \\lim_{x \\to c} f^{+}(x) = L$$\n\nin the sense of [[def-function-limit]]. Written out: for every real\n$\\varepsilon > 0$ there is a real $\\delta > 0$ such that\n\n$$|f(x) - L| < \\varepsilon \\qquad \\text{for every } x \\in A \\text{ with } c < x < c + \\delta .$$\n\n**Left limit.** Suppose $c$ is a limit point of $A^{-}$. For $L \\in \\mathbb{R}$\nwe write $\\lim_{x \\to c^{-}} f(x) = L$ when $\\lim_{x \\to c} f^{-}(x) = L$; written\nout, for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ with\n$|f(x) - L| < \\varepsilon$ for every $x \\in A$ with $c - \\delta < x < c$.\n\n**The written-out forms agree with the definitions.** For $x \\in A^{+}$ the two\nconditions $0 < |x - c| < \\delta$ and $c < x < c + \\delta$ are the same: $x > c$\ngives $x - c > 0$, so $|x - c| = x - c$ and $0 < |x - c| < \\delta$ reads\n$0 < x - c < \\delta$ ([[lem-of-abs-value]]). Symmetrically on the left, where\n$x < c$ gives $|x - c| = c - x$.\n\n**Well-posedness is inherited, not reproved.** A one-sided limit *is* a limit,\nnamely the limit of a restriction, so:\n\n- **Uniqueness.** At most one $L$ can occur, by [[lem-function-limit-unique]]\n  applied to $f^{+}$ on the domain $A^{+}$ (respectively to $f^{-}$ on\n  $A^{-}$), which is legitimate exactly because $c$ was required to be a limit\n  point of that set. This is what makes the notation $\\lim_{x \\to c^{+}} f(x)$\n  denote a single real.\n- **Locality and restriction.** Both claims of [[lem-limit-is-local]] apply\n  verbatim to $f^{+}$ and $f^{-}$.\n\n**When the symbols are defined.** If $c$ is not a limit point of $A^{+}$ — for\ninstance if $A$ contains no point to the right of $c$, or only points bounded\naway from $c$ on that side — then $\\lim_{x \\to c^{+}} f(x)$ is **not defined**\nhere, for the reason given in [[def-function-limit]]: the\n$\\varepsilon$-$\\delta$ condition would be satisfied vacuously by every real at\nonce. The same applies on the left.",
      "uses": [
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-function-limit-unique",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$, let $c$ be a limit\npoint of $A$ ([[def-limit-point-r]]) and let $L, L' \\in \\mathbb{R}$. If\n\n$$\\lim_{x \\to c} f(x) = L \\qquad \\text{and} \\qquad \\lim_{x \\to c} f(x) = L'$$\n\n([[def-function-limit]]), then $L = L'$.\n\nA function therefore has **at most one** limit at a limit point of its domain,\nwhich is what licenses the notation $\\lim_{x \\to c} f(x)$ for a single real\nnumber. This lemma is recorded in the `justified_by` field of\n[[def-function-limit]] for exactly that reason.\n\n**The hypothesis that $c$ is a limit point is not removable.** At an isolated\npoint of the domain the same $\\varepsilon$-$\\delta$ formula is satisfied\nvacuously by every real at once, which is the content of\n[[fs-limit-unique-at-every-point-of-the-domain]].",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "$c$ is a limit point of $A$: it is one of $A^{+}$ by hypothesis, and $A^{+} \\subseteq A$, so every point of $A^{+}$ found in a punctured neighbourhood of $c$ is a point of $A$ there.",
      "step": "1.1",
      "inputs": [
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "For $x \\in A$ the condition $0 < |x - c|$ says exactly $x \\ne c$, and then $x < c$ or $x > c$, that is $x \\in A^{-}$ or $x \\in A^{+}$; moreover for $x \\in A^{-}$ the condition $0 < |x - c| < \\delta$ reads $c - \\delta < x < c$ and for $x \\in A^{+}$ it reads $c < x < c + \\delta$.",
      "step": "1.2",
      "inputs": [
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Suppose $\\lim_{x \\to c} f(x) = L$. Both $A^{-}$ and $A^{+}$ are subsets of $A$ having $c$ as a limit point, so [L5] gives $\\lim_{x \\to c} f|_{A^{-}}(x) = L$ and $\\lim_{x \\to c} f|_{A^{+}}(x) = L$, which by [L6] is exactly $\\lim_{x \\to c^{-}} f(x) = L$ and $\\lim_{x \\to c^{+}} f(x) = L$.",
      "step": "2.1",
      "inputs": [
        "L5",
        "L6",
        "1.1",
        "1.2"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "Suppose conversely that both one-sided limits equal $L$, and let $\\varepsilon > 0$ be an arbitrary real. By [L6] and [L1] fix reals $\\delta_1, \\delta_2 > 0$ such that every $x \\in A^{-}$ with $0 < |x - c| < \\delta_1$ and every $x \\in A^{+}$ with $0 < |x - c| < \\delta_2$ satisfies $|f(x) - L| < \\varepsilon$; let $\\delta$ be the smaller of the two. Every $x \\in A$ with $0 < |x - c| < \\delta$ lies in $A^{-}$ or in $A^{+}$ by step 1.2, and in either case $|f(x) - L| < \\varepsilon$. As $\\varepsilon$ was arbitrary, $\\lim_{x \\to c} f(x) = L$.",
      "step": "2.2",
      "inputs": [
        "L6",
        "L1",
        "1.2",
        "L4",
        "choose"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "The displayed equivalence is steps 2.1 and 2.2. For the consequence: if the limit of $f$ at $c$ exists, say with value $L$, then step 2.1 gives that both one-sided limits exist with the same value $L$, so they agree; and if both one-sided limits exist and are equal, to the common value $L$, then step 2.2 gives that the limit of $f$ at $c$ exists and equals $L$. Each of the three symbols denotes a single real by [L7], so the three are equal.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "2.2",
        "L7"
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
      "evidence": "step 1.2: For $x \\in A$ the condition $0 < |x - c|$ says exactly $x \\ne c$, and then $x < c$ or $x > c$, that is $x \\in A^{-}$ or $x \\in A^{+}$; moreover for $x \\in A^{-}$ the condition $0 < |x - c| < \\delta$ reads $c - \\delta < x < c$ and for $x \\in A^{+}$ it reads $c "
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: $c$ is a limit point of $A$: it is one of $A^{+}$ by hypothesis, and $A^{+} \\subseteq A$, so every point of $A^{+}$ found in a punctured neighbourhood of $c$ is a point of $A$ there."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 2.2: Suppose conversely that both one-sided limits equal $L$, and let $\\varepsilon > 0$ be an arbitrary real. By [L6] and [L1] fix reals $\\delta_1, \\delta_2 > 0$ such that every $x \\in A^{-}$ with $0 < |x - c| < \\delta_1$ and every $x \\in A^{+}$ with $0 < |x - c| <"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The Statement has no interval endpoint or finite-index endpoint boundary."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 2.2: all existence or selection moves were checked; any countable-choice use is explicitly tagged in the cited step."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "step 1.1: the forward direction (or first implication in the stated equivalence cycle) starts here and was checked through the subsequent cited steps."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "step 2.2: the converse direction (or closing implication in the stated equivalence cycle) is established here and was checked."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "critical risk (14): 9 declared dependencies; 12 cited facts; biconditional / both-direction claim; existence, choice, uniqueness, or well-definedness; boundary-sensitive language; analytic limiting/completeness language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: The theorem’s hypothesis explicitly requires that c is a limit point of both A⁻ and A⁺, which guarantees both one‑sided limits are defined and eliminates degenerate cases (e.g., one side empty or not accumulating). The proof’s gluing argument in step 2.2 uses the total order to partition the punctured neighborhood into left and right portions, and the minimum of two positive deltas is positive—no boundary or hidden choice issues. The zero‑denominator, empty‑set, and endpoint boundaries were checked and are either not applicable or correctly handled. Checked surface: The title, the public Statement, every numbered proof step (1.1, 1.2, 2.1, 2.2, 3.1), and the Remarks were read. No logical gaps or mathematical inaccuracies were found. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/thm-two-sided-limit-iff-both-one-sided--a3eae114ccb6c348.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-two-sided-limit-iff-both-one-sided",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-one-sided-limits",
    "declared_target": "def-one-sided-limits",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-two-sided-limit-iff-both-one-sided",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-function-limit",
    "declared_target": "def-function-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-two-sided-limit-iff-both-one-sided",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-limit-point-r",
    "declared_target": "def-limit-point-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-two-sided-limit-iff-both-one-sided",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-neighbourhood-r",
    "declared_target": "def-neighbourhood-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-two-sided-limit-iff-both-one-sided",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "thm-two-sided-limit-iff-both-one-sided",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-limit-is-local",
    "declared_target": "lem-limit-is-local",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-two-sided-limit-iff-both-one-sided",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-function-limit-unique",
    "declared_target": "lem-function-limit-unique",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-two-sided-limit-iff-both-one-sided",
    "sourcePage": "limits-of-real-functions",
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
    "source": "thm-two-sided-limit-iff-both-one-sided",
    "sourcePage": "limits-of-real-functions",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
    "target_statement_provenance": "ai-altered",
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

## Full text of every cited or declared item (9)

### `def-function-limit`

````markdown
---
id: def-function-limit
kind: definition
title: "The $\\varepsilon$-$\\delta$ limit $\\lim_{x \\to c} f(x) = L$ of $f : A \\to \\mathbb{R}$ at a limit point $c$ of $A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-point-r, def-neighbourhood-r, def-interval, def-real-order, def-complete-ordered-field, lem-of-abs-value, lem-rat-embeds-dense]
justified_by: [lem-function-limit-unique]
aliases: [def-epsilon-delta-limit, def-limit-of-a-function]
landmark: true
short: "the $\\varepsilon$-$\\delta$ limit of a function"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Def. 4.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) with its order and absolute value
([[def-real-order]]).

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$, let $c \in \mathbb{R}$
be a **limit point** of $A$ ([[def-limit-point-r]]), and let $L \in \mathbb{R}$.
We say that **$f(x)$ tends to $L$ as $x$ tends to $c$**, and write

$$\lim_{x \to c} f(x) = L ,$$

when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ 0 < |x - c| < \delta \ \Longrightarrow\ |f(x) - L| < \varepsilon\ \bigr],$$

where $\varepsilon$ and $\delta$ range over the **positive reals**.

In the language of neighbourhoods ([[def-neighbourhood-r]]) the condition reads:
for every real $\varepsilon > 0$ there is a real $\delta > 0$ with

$$f\bigl(A \cap N^{*}_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}(L),$$

$N^{*}_{\delta}(c) = \{\, y : 0 < |y - c| < \delta \,\}$ being the punctured
$\delta$-neighbourhood of $c$ and $N_{\varepsilon}(L) = (L - \varepsilon,\ L +
\varepsilon)$ the open interval of [[def-interval]]. The two forms agree because
$|f(x) - L| < \varepsilon$ says exactly $f(x) \in N_\varepsilon(L)$, and
$0 < |x - c| < \delta$ says exactly $x \in N^{*}_\delta(c)$.

**Three features of this definition are load bearing, not decoration.**

1. **$c$ is required to be a limit point of $A$.** By [[def-limit-point-r]] that
   says every punctured neighbourhood of $c$ meets $A$, so for every $\delta > 0$
   the set $A \cap N^{*}_\delta(c)$ over which the implication quantifies is
   nonempty. Drop the requirement and the implication can be satisfied
   vacuously by *every* real $L$ at once, which is exactly what
   [[fs-limit-unique-at-every-point-of-the-domain]] records. At a point of $A$
   that is not a limit point of $A$ — an isolated point — the symbol
   $\lim_{x \to c} f(x)$ is therefore **not defined** in this library.

2. **$c \in A$ is not required.** A limit point of $A$ need not belong to $A$
   ([[def-limit-point-r]]), and the definition never evaluates $f$ at $c$. This
   is what allows a limit to be taken at a point where the function is not
   defined at all, as at $0$ for $x \mapsto x\,\psi(1/x)$.

3. **The value $f(c)$, when it exists, is irrelevant.** The hypothesis
   $0 < |x - c|$ excludes $x = c$ from the quantifier, so changing $f$ at the
   single point $c$ changes nothing. Equality of the limit with the value is an
   extra condition, not a consequence: [[fs-limit-equals-value]].

**The notation presumes uniqueness.** Writing $\lim_{x \to c} f(x) = L$ treats
the left-hand side as a name for a single real number, which is legitimate only
because at a limit point at most one $L$ can satisfy the displayed condition.
That obligation is discharged by [[lem-function-limit-unique]], recorded in this
item's `justified_by`. As with $\sup S$ ([[rem-sup-conventions]]) and
$\lim_k x_k$ ([[lem-limit-unique]]), the symbol is written only for a function
already known to have a limit at $c$.

**Real and rational $\varepsilon$ define the same relation.** Above,
$\varepsilon$ and $\delta$ range over the positive reals. Restricting either
quantifier to the positive rationals gives the same relation: every positive
rational is a positive real, and below every positive real lies a positive
rational ([[lem-rat-embeds-dense]]), so an $\varepsilon$-condition verified for
all positive rationals is verified for an arbitrary positive real $\eta$ by
running it at a rational $\varepsilon$ with $0 < \varepsilon < \eta$, and a
$\delta$ produced as a real may be shrunk to a rational one below it. This is
the passage sanctioned in the remarks of [[def-sequence]], and it is what lets
this definition be compared with [[def-real-limit]], whose $\varepsilon$ is
rational, in [[thm-sequential-criterion-for-function-limits]].

## Remarks

- **Terminology.** *Limit point* here is a property of the set $A$ and the point
  $c$, in the sense of [[def-limit-point-r]]; it has nothing to do with
  subsequential limits ([[def-subsequential-limit]]), and the distinction is the
  one that item records.

- **Why the punctured condition, and not $|x - c| < \delta$.** With the
  unpunctured condition the definition would force $f$ to be defined at $c$ and
  would force $|f(c) - L| < \varepsilon$ for every $\varepsilon$, that is,
  $L = f(c)$. The resulting notion is continuity at $c$, a strictly stronger
  condition, and conflating the two is the error catalogued in
  [[fs-limit-equals-value]].

- **One-sided and infinite variants.** Restricting the domain to one side of $c$
  gives the one-sided limits of [[def-one-sided-limits]]; replacing the
  conditions on $x$ or on $f(x)$ by unboundedness conditions gives the limits at
  and to infinity of [[def-limits-at-infinity]]. Both are built on this
  definition rather than beside it.
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

### `def-limit-point-r`

````markdown
---
id: def-limit-point-r
kind: definition
title: "Limit point, isolated point, adherent point, derived set, and dense subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-r, def-open-and-closed-in-r, def-interior-closure-boundary-r]
justified_by: []
aliases: [def-accumulation-point-r, def-derived-set-r, def-dense-in-r]
landmark: true
short: "limit point, isolated point, dense"
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
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$ and $x \in \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]] and closure as in
[[def-interior-closure-boundary-r]].

- $x$ is an **adherent point** of $A$ when $N_\varepsilon(x) \cap A \ne
  \varnothing$ for every real $\varepsilon > 0$.
- $x$ is a **limit point** (or *accumulation point*) of $A$ when
  $N^{*}_\varepsilon(x) \cap A \ne \varnothing$ for every real
  $\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.
- $x$ is an **isolated point** of $A$ when $x \in A$ and there is a real
  $\varepsilon > 0$ with $N_\varepsilon(x) \cap A = \{x\}$.
- The **derived set** of $A$ is
  $$A' \;:=\; \{\, x \in \mathbb{R} : x \text{ is a limit point of } A \,\}.$$
- $A$ is **dense in $\mathbb{R}$** when $\overline{A} = \mathbb{R}$.

**A limit point is an adherent point**, since $N^{*}_\varepsilon(x) \subseteq
N_\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since
$x \in N_\varepsilon(x) \cap A$ ([[def-neighbourhood-r]]). So the adherent
points of $A$ are exactly the points of $A \cup A'$, a statement proved as part
of [[thm-closure-characterisations-r]].

**Limit point and isolated point are exact opposites inside $A$.** For
$x \in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point
of $A$. Indeed $N_\varepsilon(x) \cap A = \{x\}$ says precisely that
$N^{*}_\varepsilon(x) \cap A = \varnothing$, because $x$ itself always lies in
$N_\varepsilon(x) \cap A$ when $x \in A$; so the existence of an $\varepsilon$
witnessing isolation is the negation of the condition defining a limit point.
A point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and
never both.

**A limit point need not belong to the set, and a point of the set need not be a
limit point.** Both possibilities occur, and the two examples that matter later
are $0$, which is a limit point of $\{\, 1/k : k \ge 1 \,\}$ without belonging
to it, and $0$ again, which belongs to $\{0\} \cup [1,2]$ as an isolated point.

## Remarks

- **Terminology: *limit point* here is about a set, never about a sequence.**
  This library reserves *subsequential limit* for the sequential notion
  ([[def-subsequential-limit]]), and the two are genuinely different: the
  constant sequence $x_k = 0$ has $0$ as a subsequential limit, while its set of
  values $\{0\}$ has no limit point at all. The distinction is the one
  [[def-subsequential-limit]] records under "Terminology", and it is respected
  throughout this page.

- **Density is defined through the closure, not through intervals.** Saying
  $\overline{A} = \mathbb{R}$ is equivalent to saying that every nonempty open
  subset of $\mathbb{R}$ meets $A$, and also to saying that every neighbourhood
  of every real meets $A$; the equivalences follow from
  [[thm-closure-characterisations-r]] and are used in that form in
  [[lem-q-and-irrationals-dense-r]].

- **The derived set need not be comparable with the set.** It can be strictly
  larger, as for $\mathbb{Q}$: every punctured neighbourhood of any real
  contains a rational, since density supplies one strictly between $x$ and
  $x + \varepsilon$ ([[lem-q-and-irrationals-dense-r]]), so the derived set of
  $\mathbb{Q}$ is all of $\mathbb{R}$. It can be strictly smaller, as for
  $\{0\}$, whose derived set is empty; and it can be neither, as for
  $\{0\} \cup (1,2)$, whose derived set is $[1,2]$, a set containing points
  outside the original and omitting the point $0$ of it. A closed set satisfying
  $A \subseteq A'$ is called perfect ([[def-perfect-set-r]]).
````

### `def-neighbourhood-r`

````markdown
---
id: def-neighbourhood-r
kind: definition
title: "The $\\varepsilon$-neighbourhood and the punctured $\\varepsilon$-neighbourhood of a point of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-order, def-interval, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, def-abs-value, lem-of-triangle-inequality]
justified_by: []
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
    - title: "Neighbourhood (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18(a))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.1 and §1.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]) and its absolute value ([[def-abs-value]]).

Let $x \in \mathbb{R}$ and let $\varepsilon \in \mathbb{R}$ with
$\varepsilon > 0$. The **$\varepsilon$-neighbourhood of $x$** is

$$N_\varepsilon(x) \;:=\; \{\, y \in \mathbb{R} : |y - x| < \varepsilon \,\},$$

and the **punctured $\varepsilon$-neighbourhood of $x$** is

$$N^{*}_\varepsilon(x) \;:=\; N_\varepsilon(x) \setminus \{x\} \;=\; \{\, y \in \mathbb{R} : 0 < |y - x| < \varepsilon \,\}.$$

The two descriptions of $N^{*}_\varepsilon(x)$ agree because $|y - x| = 0$ holds
exactly when $y = x$ ([[lem-of-abs-value]]).

**A neighbourhood is an open interval.** For every $x$ and every
$\varepsilon > 0$,

$$N_\varepsilon(x) \;=\; (x - \varepsilon,\ x + \varepsilon),$$

the interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for
$\varepsilon > 0$, the equivalence $|y - x| < \varepsilon \iff -\varepsilon <
y - x < \varepsilon$, and adding $x$ throughout turns the right-hand side into
$x - \varepsilon < y < x + \varepsilon$ ([[def-ordered-field]]).

**The centre lies in its own neighbourhoods.** $x \in N_\varepsilon(x)$, since
$|x - x| = |0| = 0 < \varepsilon$ ([[lem-of-abs-value]]).

**Punctured neighbourhoods are never empty.** The element
$y := x + \varepsilon/2$ satisfies $|y - x| = \varepsilon/2$, which is
$> 0$ and $< \varepsilon$, so $y \in N^{*}_\varepsilon(x)$
([[lem-of-abs-value]], [[def-ordered-field]]).

**Monotonicity in the radius.** If $0 < \delta \le \varepsilon$ then
$N_\delta(x) \subseteq N_\varepsilon(x)$, because $|y - x| < \delta \le
\varepsilon$ ([[def-ordered-field]]).

**Nesting at an interior point.** If $y \in N_\varepsilon(x)$ and
$0 < \delta \le \varepsilon - |y - x|$, then

$$N_\delta(y) \;\subseteq\; N_\varepsilon(x).$$

Indeed for $z \in N_\delta(y)$ the triangle inequality
([[lem-of-triangle-inequality]]) gives
$|z - x| = |(z - y) + (y - x)| \le |z - y| + |y - x| < \delta + |y - x| \le
\varepsilon$. Note that $\varepsilon - |y - x| > 0$ precisely because
$y \in N_\varepsilon(x)$, so such a $\delta$ always exists.

## Remarks

- **The radius is a real number, not a rational.** Nothing on this page tests a
  condition against rational radii only. That convention belongs to
  [[def-real-limit]], where the quantifier is over rational $\varepsilon$ and
  the passage between the rational and the real form is the sanctioned remark of
  [[def-sequence]]. Here $\varepsilon$ ranges over the positive reals
  throughout, and every statement above is proved for an arbitrary positive
  real.

- **Why the punctured version is separated out.** A limit point of a set is a
  point every punctured neighbourhood of which meets the set
  ([[def-limit-point-r]]), and deleting the centre is exactly what stops a point
  of the set from qualifying automatically. The unpunctured condition defines
  the weaker notion of an adherent point, and the difference between the two is
  precisely an isolated point.

- **Nesting is the workhorse.** Almost every openness verification on this page
  has the shape "given $y$ in the set, shrink the radius by the distance
  already travelled", which is the nesting property above. It is recorded here
  once so that no later proof has to redo the triangle inequality in passing.
````

### `def-one-sided-limits`

````markdown
---
id: def-one-sided-limits
kind: definition
title: "The left and right limits of $f$ at $c$, as limits of the restrictions of $f$ to $A \\cap (-\\infty, c)$ and $A \\cap (c, \\infty)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-interval, lem-limit-is-local, lem-function-limit-unique, lem-of-abs-value]
justified_by: []
aliases: [def-left-limit, def-right-limit]
landmark: true
short: "one-sided limits"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "One-sided limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/One-sided_limit"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in
\mathbb{R}$. Put

$$A^{-} := A \cap (-\infty, c), \qquad A^{+} := A \cap (c, \infty)$$

([[def-interval]]), and write $f^{-} := f|_{A^{-}}$ and $f^{+} := f|_{A^{+}}$
for the restrictions of $f$ to those sets.

**Right limit.** Suppose $c$ is a limit point of $A^{+}$ ([[def-limit-point-r]]).
For $L \in \mathbb{R}$ we write

$$\lim_{x \to c^{+}} f(x) = L \quad :\Longleftrightarrow \quad \lim_{x \to c} f^{+}(x) = L$$

in the sense of [[def-function-limit]]. Written out: for every real
$\varepsilon > 0$ there is a real $\delta > 0$ such that

$$|f(x) - L| < \varepsilon \qquad \text{for every } x \in A \text{ with } c < x < c + \delta .$$

**Left limit.** Suppose $c$ is a limit point of $A^{-}$. For $L \in \mathbb{R}$
we write $\lim_{x \to c^{-}} f(x) = L$ when $\lim_{x \to c} f^{-}(x) = L$; written
out, for every real $\varepsilon > 0$ there is a real $\delta > 0$ with
$|f(x) - L| < \varepsilon$ for every $x \in A$ with $c - \delta < x < c$.

**The written-out forms agree with the definitions.** For $x \in A^{+}$ the two
conditions $0 < |x - c| < \delta$ and $c < x < c + \delta$ are the same: $x > c$
gives $x - c > 0$, so $|x - c| = x - c$ and $0 < |x - c| < \delta$ reads
$0 < x - c < \delta$ ([[lem-of-abs-value]]). Symmetrically on the left, where
$x < c$ gives $|x - c| = c - x$.

**Well-posedness is inherited, not reproved.** A one-sided limit *is* a limit,
namely the limit of a restriction, so:

- **Uniqueness.** At most one $L$ can occur, by [[lem-function-limit-unique]]
  applied to $f^{+}$ on the domain $A^{+}$ (respectively to $f^{-}$ on
  $A^{-}$), which is legitimate exactly because $c$ was required to be a limit
  point of that set. This is what makes the notation $\lim_{x \to c^{+}} f(x)$
  denote a single real.
- **Locality and restriction.** Both claims of [[lem-limit-is-local]] apply
  verbatim to $f^{+}$ and $f^{-}$.

**When the symbols are defined.** If $c$ is not a limit point of $A^{+}$ — for
instance if $A$ contains no point to the right of $c$, or only points bounded
away from $c$ on that side — then $\lim_{x \to c^{+}} f(x)$ is **not defined**
here, for the reason given in [[def-function-limit]]: the
$\varepsilon$-$\delta$ condition would be satisfied vacuously by every real at
once. The same applies on the left.

## Remarks

- **Neither one-sided limit requires $c \in A$, and neither looks at $f(c)$.**
  Both properties are inherited from [[def-function-limit]], since $c \notin
  A^{-} \cup A^{+}$: the point $c$ belongs to neither $(-\infty, c)$ nor
  $(c, \infty)$.

- **The two one-sided limits and the two-sided limit.** When $c$ is a limit
  point of both $A^{-}$ and $A^{+}$, the two-sided limit exists exactly when
  both one-sided limits exist and agree, and then all three coincide:
  [[thm-two-sided-limit-iff-both-one-sided]]. When $c$ is a limit point of only
  one of the two sets, that one-sided limit and the two-sided limit are the same
  condition, again by claim 2 of [[lem-limit-is-local]] together with the
  observation that $A$ and that one side have the same points in a small enough
  punctured neighbourhood of $c$.

- **Notation.** Some texts write $f(c+)$ and $f(c-)$ for these values. This
  library writes only $\lim_{x \to c^{+}} f(x)$ and $\lim_{x \to c^{-}} f(x)$,
  because the shorter notation looks like an evaluation of $f$ and these
  quantities are not values of $f$: they are defined without reference to
  $f(c)$, which may not even exist.
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

### `lem-function-limit-unique`

````markdown
---
id: lem-function-limit-unique
kind: lemma
title: "At a limit point of the domain a function has at most one limit"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-triangle-inequality, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "uniqueness of the function limit"
proof_strategy: contradiction
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$, let $c$ be a limit
point of $A$ ([[def-limit-point-r]]) and let $L, L' \in \mathbb{R}$. If

$$\lim_{x \to c} f(x) = L \qquad \text{and} \qquad \lim_{x \to c} f(x) = L'$$

([[def-function-limit]]), then $L = L'$.

A function therefore has **at most one** limit at a limit point of its domain,
which is what licenses the notation $\lim_{x \to c} f(x)$ for a single real
number. This lemma is recorded in the `justified_by` field of
[[def-function-limit]] for exactly that reason.

**The hypothesis that $c$ is a limit point is not removable.** At an isolated
point of the domain the same $\varepsilon$-$\delta$ formula is satisfied
vacuously by every real at once, which is the content of
[[fs-limit-unique-at-every-point-of-the-domain]].

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$, a limit point $c$ of $A$, and reals $L, L'$ with $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} f(x) = L'$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$, and likewise with $L'$ in place of $L$ ([[def-function-limit]]).

[L2] Limit point: for every real $\delta > 0$ there is $x \in A$ with $0 < |x - c| < \delta$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Triangle inequality: $|u + v| \le |u| + |v|$ in $\mathbb{R}$ ([[lem-of-triangle-inequality]]).

[L4] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; and $|-u| = |u|$ ([[lem-of-abs-value]]).

[L5] Order arithmetic in $\mathbb{R}$: trichotomy, so $u \ne 0$ together with $|u| \ge 0$ and $|u| \ne 0$ forces $|u| > 0$, and $t < t$ is impossible; adding two strict inequalities ([[lem-of-add-order]]); $0 < 1$ ([[cor-of-one-positive]]), hence $2 := 1 + 1 > 0$ and $2^{-1} > 0$ ([[lem-of-inverse-positive]]), so $\eta/2 > 0$ and $(\eta/2) \cdot 2 = \eta$ whenever $\eta > 0$ ([[lem-of-sign-rules]], [[def-ordered-field]]); and of two positive reals the smaller is positive, the order being total.

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $L \ne L'$. [assume-contra]

2.1 Then $L - L' \ne 0$, so $|L - L'| \ne 0$ while $|L - L'| \ge 0$, and trichotomy gives $|L - L'| > 0$; hence $\varepsilon := |L - L'|/2 > 0$ and $2\varepsilon = |L - L'|$. [step 1.1, L4, L5]

3.1 Applying [L1] twice with this $\varepsilon$, fix reals $\delta_1 > 0$ and $\delta_2 > 0$ such that every $x \in A$ with $0 < |x - c| < \delta_1$ has $|f(x) - L| < \varepsilon$ and every $x \in A$ with $0 < |x - c| < \delta_2$ has $|f(x) - L'| < \varepsilon$; put $\delta$ to be the smaller of $\delta_1$ and $\delta_2$, so $\delta > 0$. [step 2.1, L1, L5, choose]

4.1 Since $c$ is a limit point of $A$, fix $x \in A$ with $0 < |x - c| < \delta$. [step 3.1, L2, choose]

5.1 That $x$ satisfies $0 < |x - c| < \delta_1$ and $0 < |x - c| < \delta_2$, hence both $|f(x) - L| < \varepsilon$ and $|f(x) - L'| < \varepsilon$. [step 3.1, step 4.1, L1]

6.1 Therefore $|L - L'| = |(L - f(x)) + (f(x) - L')| \le |L - f(x)| + |f(x) - L'| = |f(x) - L| + |f(x) - L'| < \varepsilon + \varepsilon = 2\varepsilon = |L - L'|$. [step 5.1, L3, L4, L5]

7.1 So $|L - L'| < |L - L'|$, which trichotomy forbids; the assumption $L \ne L'$ is untenable, and hence $L = L'$. [step 6.1, L5, discharge-contradiction] ∎

## Remarks

- **Where each hypothesis is spent.** The limit conditions are used only in step 5.1, and the limit-point hypothesis only in step 4.1, to produce a *single* point $x$ of the domain near $c$ at which both estimates can be read. Without such a point the two estimates never meet and nothing forces $L = L'$; that is the whole mechanism, and it is the reason [[fs-limit-unique-at-every-point-of-the-domain]] is false.

- **The sequential analogue** is [[lem-limit-unique]], proved by the same two-estimates-at-one-index argument. Neither statement uses any choice principle.

- **One-sided limits inherit this.** By [[def-one-sided-limits]] a one-sided limit is the limit of a restriction of $f$, so applying this lemma to that restriction gives uniqueness there too; nothing has to be reproved.
````

### `lem-limit-is-local`

````markdown
---
id: lem-limit-is-local
kind: lemma
title: "The limit at $c$ depends only on the restriction of $f$ to a punctured neighbourhood of $c$, and passes to any subset of the domain having $c$ as a limit point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-function-limit, def-neighbourhood-r, def-limit-point-r, lem-function-limit-unique, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [lem-locality-of-function-limits]
landmark: false
short: "locality and restriction"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and let $c$ be a limit point of $A$
([[def-limit-point-r]]).

1. **Locality.** Let $f, g : A \to \mathbb{R}$ and $L \in \mathbb{R}$, and
   suppose there is a real $\eta > 0$ with $f(x) = g(x)$ for every $x \in A$
   satisfying $0 < |x - c| < \eta$. Then
   $$\lim_{x \to c} f(x) = L \iff \lim_{x \to c} g(x) = L$$
   ([[def-function-limit]]).

2. **Restriction.** Let $B \subseteq A$ with $c$ a limit point of $B$, let
   $f : A \to \mathbb{R}$ and suppose $\lim_{x \to c} f(x) = L$. Then $c$ is a
   limit point of $A$ as well, and $\lim_{x \to c} f|_B(x) = L$, where
   $f|_B : B \to \mathbb{R}$ is the restriction of $f$.

So the limit at $c$ sees only the values of $f$ on an arbitrarily small
punctured neighbourhood of $c$, and it survives shrinking the domain, provided
the smaller domain still accumulates at $c$. Together with
[[lem-function-limit-unique]] this is what makes the phrase *the* limit at $c$ a
local notion.

**The converse of claim 2 is false in general**: a restriction may have a limit
where the function has none, as the one-sided limits of the sign function on the
companion page show.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$ and a limit point $c$ of $A$; for claim 1 functions $f, g : A \to \mathbb{R}$, a real $L$ and a real $\eta > 0$ with $f(x) = g(x)$ for every $x \in A$ satisfying $0 < |x - c| < \eta$; for claim 2 a subset $B \subseteq A$ having $c$ as a limit point, a function $f : A \to \mathbb{R}$ and a real $L$ with $\lim_{x \to c} f(x) = L$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: $\lim_{x \to c} h(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - L| < \varepsilon$ ([[def-function-limit]]).

[L2] Limit point: $c$ is a limit point of a set $S$ when for every real $\delta > 0$ there is $x \in S$ with $0 < |x - c| < \delta$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Order arithmetic: of two positive reals the smaller is positive, the order being total; and $u < v \le w$ gives $u < w$ ([[def-ordered-field]]).

[L4] Absolute value ([[lem-of-abs-value]]); and uniqueness of the limit at a limit point ([[lem-function-limit-unique]]), which is what makes the phrase "the limit" in the statement denote.

## Proof

**Proof technique:** direct.

1.1 For claim 1, assume $\lim_{x \to c} f(x) = L$ and let $\varepsilon > 0$ be an arbitrary real. [assume-hyp, L1]

1.2 For claim 2, $B \subseteq A$ and $c$ is a limit point of $B$; hence $c$ is a limit point of $A$, since for every real $\delta > 0$ a point $x \in B$ with $0 < |x - c| < \delta$ is also a point of $A$ with $0 < |x - c| < \delta$. [L2]

1.3 For claim 2, assume $\lim_{x \to c} f(x) = L$ and let $\varepsilon > 0$ be an arbitrary real. [assume-hyp, L1]

2.1 By [L1] fix a real $\delta_0 > 0$ such that every $x \in A$ with $0 < |x - c| < \delta_0$ satisfies $|f(x) - L| < \varepsilon$, and put $\delta$ to be the smaller of $\delta_0$ and $\eta$, so $\delta > 0$. [step 1.1, L1, L3, choose]

2.2 By [L1] fix a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$. [step 1.3, L1, choose]

3.1 Every $x \in A$ with $0 < |x - c| < \delta$ satisfies both $0 < |x - c| < \delta_0$ and $0 < |x - c| < \eta$, so $g(x) = f(x)$ and $|g(x) - L| = |f(x) - L| < \varepsilon$; as $\varepsilon > 0$ was arbitrary, $\lim_{x \to c} g(x) = L$. [step 2.1, L1, L3, L4]

3.2 Every $x \in B$ with $0 < |x - c| < \delta$ lies in $A$ and satisfies $0 < |x - c| < \delta$, so $f|_B(x) = f(x)$ and therefore $|f(x) - L| < \varepsilon$; as $\varepsilon > 0$ was arbitrary, and $c$ is a limit point of $B$, $\lim_{x \to c} f|_B(x) = L$. [step 2.2, L1, L4]

4.1 The hypothesis of claim 1 is symmetric in $f$ and $g$, so interchanging their roles in steps 1.1, 2.1 and 3.1 gives the implication in the other direction, and claim 1 is proved; claim 2 is steps 1.2 and 3.2. [step 1.2, step 3.1, step 3.2] ∎

## Remarks

- **What claim 1 is used for.** It is the licence to modify a function outside a punctured neighbourhood of $c$, or at $c$ itself, without changing the limit; the change at $c$ alone is already invisible to [[def-function-limit]], since the condition $0 < |x - c|$ excludes that point.

- **What claim 2 is used for.** It is the step that lets a statement proved on $A$ be transported to a smaller domain: the one-sided limits of [[def-one-sided-limits]] are exactly limits of restrictions, and the quotient case of [[thm-algebra-of-function-limits]] is proved on the smaller domain where the denominator does not vanish.

- **Both claims are choice free.** Only the $\varepsilon$-$\delta$ definition is used; no sequence is constructed anywhere in the proof.
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

