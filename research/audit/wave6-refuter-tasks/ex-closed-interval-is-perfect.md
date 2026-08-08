## Target item — `ex-closed-interval-is-perfect`

Normalized current SHA-256: `8ca2b341cd591cbb7d28a221240af90d489b8795540739c92085792ab50a6369`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-closed-interval-is-perfect
kind: example
title: "Every nondegenerate closed interval is perfect, giving a second proof that it is uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-perfect-set-r, thm-perfect-set-uncountable-r, cor-interval-uncountable, def-interval, def-limit-point-r, def-neighbourhood-r, def-open-and-closed-in-r, lem-finite-set-has-max, def-max-min, def-ordered-field, def-complete-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value]
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
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.43 and its corollary)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Let $a, b \in \mathbb{R}$ with $a < b$. Then the closed interval
$E := [a,b]$ ([[def-interval]]) is perfect ([[def-perfect-set-r]]), and
therefore uncountable by [[thm-perfect-set-uncountable-r]].

This is a second proof of the uncountability of a nondegenerate interval. The
first, [[cor-interval-uncountable]], runs a trisection argument directly against
an assumed enumeration; the route here checks two purely local properties,
closedness and the absence of isolated points, and lets the perfect-set theorem
do the counting.

## Facts & Assumptions

**Given:** Reals $a < b$ and the interval $E := [a,b] = \{\, x : a \le x \le b \,\}$.

[L1] A set is perfect when it is closed and no point of it is isolated in it; $x \in P$ is isolated in $P$ when some $N_\varepsilon(x)$ meets $P$ only in $x$ ([[def-perfect-set-r]], [[def-limit-point-r]]).

[L2] Each interval of the form $[a,b]$ is a closed set ([[def-open-and-closed-in-r]], [[def-interval]]).

[L3] $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$ ([[def-neighbourhood-r]], [[lem-of-abs-value]]).

[L4] Every nonempty perfect subset of $\mathbb{R}$ is uncountable ([[thm-perfect-set-uncountable-r]]).

[L5] For $a < b$ the intervals $[a,b]$ and $(a,b)$ are uncountable ([[cor-interval-uncountable]]).

[L6] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L7] Ordered-field arithmetic: $0 < 1$, so $2 := 1+1 > 0$ and $0 < d \cdot 2^{-1} < d$ for $d > 0$; adding a constant and multiplying by a positive preserve inequalities; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 $E$ is closed by [L2], and nonempty since $a \in E$. [L2]

1.2 No point of $E$ is isolated in $E$: let $x \in E$ and let $\varepsilon > 0$ be real. If $x < b$, put $t := \min\{\varepsilon,\ b - x\} \cdot 2^{-1}$, which is positive by [L6] and [L7], and $y := x + t$; then $y > x$, and $y \le x + (b-x) \cdot 2^{-1} < b$ by [L7], while $y > x \ge a$, so $y \in E$ with $y \ne x$ and $|y - x| = t \le \varepsilon \cdot 2^{-1} < \varepsilon$. If $x = b$, then $x > a$; put $t := \min\{\varepsilon,\ b - a\} \cdot 2^{-1} > 0$ and $y := x - t$; then $y < x \le b$, and $y \ge b - (b-a) \cdot 2^{-1} > a$ by [L7], so $y \in E$ with $y \ne x$ and $|y - x| = t < \varepsilon$. In both cases $N_\varepsilon(x)$ contains a point of $E$ other than $x$, so no $\varepsilon$ isolates $x$. [L1, L3, L6, L7]

2.1 By steps 1.1 and 1.2 the set $E$ is closed with no isolated points, that is, perfect, and it is nonempty. [step 1.1, step 1.2, L1]

3.1 By [L4] the nonempty perfect set $E$ is uncountable, which reproves for $[a,b]$ the first claim of [L5] along an independent route. [step 1.1, step 2.1, L4, L5] ∎

## Remarks

- **Nondegeneracy is exactly what is needed.** For $a = b$ the set $[a,a] =
  \{a\}$ is closed, its single point is isolated, and it is finite; the argument
  of step 1.2 breaks precisely there, since neither $x < b$ nor $x > a$ holds.
  This matches the hypothesis $a < b$ of [[cor-interval-uncountable]].

- **The open interval supplies only half of the definition.** The computation of
  step 1.2 applies verbatim inside $(a,b)$ and shows it has no isolated points,
  but $(a,b)$ is not closed, so it is not perfect. Perfectness needs both halves,
  which is why the example is stated for the closed interval.

- **Two proofs of one fact, sharing one ingredient.** Both routes spend the
  completeness of $\mathbb{R}$ exactly once, [[cor-interval-uncountable]] as a
  supremum and [[thm-perfect-set-uncountable-r]] through
  [[thm-nested-interval-property]]. They differ in everything else: the first
  trisects a given interval against a given enumeration, the second selects
  rational-endpoint intervals by least index. Neither is a corollary of the
  other.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-perfect-set-r",
      "source_section": "Definition",
      "quote": "A set $P \\subseteq \\mathbb{R}$ is **perfect** when\n\n- $P$ is closed ([[def-open-and-closed-in-r]]), and\n- $P$ has no isolated points ([[def-limit-point-r]]): no $x \\in P$ admits a real\n  $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap P = \\{x\\}$.\n\n**Equivalently, $P$ is closed and $P \\subseteq P'$.** By\n[[def-limit-point-r]], a point of $P$ is isolated in $P$ exactly when it is not\na limit point of $P$, so \"no point of $P$ is isolated in $P$\" says precisely\nthat every point of $P$ is a limit point of $P$, that is, $P \\subseteq P'$.\nCombined with the characterisation of closedness as $P' \\subseteq P$\n([[thm-closure-characterisations-r]]), a perfect set is exactly a set with\n$P = P'$, though only the two conditions above are used below.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and $x \\in \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]] and closure as in\n[[def-interior-closure-boundary-r]].\n\n- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne\n  \\varnothing$ for every real $\\varepsilon > 0$.\n- $x$ is a **limit point** (or *accumulation point*) of $A$ when\n  $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real\n  $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.\n- $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real\n  $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$.\n- The **derived set** of $A$ is\n  $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$\n- $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.\n\n**A limit point is an adherent point**, since $N^{*}_\\varepsilon(x) \\subseteq\nN_\\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since\n$x \\in N_\\varepsilon(x) \\cap A$ ([[def-neighbourhood-r]]). So the adherent\npoints of $A$ are exactly the points of $A \\cup A'$, a statement proved as part\nof [[thm-closure-characterisations-r]].\n\n**Limit point and isolated point are exact opposites inside $A$.** For\n$x \\in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point\nof $A$. Indeed $N_\\varepsilon(x) \\cap A = \\{x\\}$ says precisely that\n$N^{*}_\\varepsilon(x) \\cap A = \\varnothing$, because $x$ itself always lies in\n$N_\\varepsilon(x) \\cap A$ when $x \\in A$; so the existence of an $\\varepsilon$\nwitnessing isolation is the negation of the condition defining a limit point.\nA point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and\nnever both.\n\n**A limit point need not belong to the set, and a point of the set need not be a\nlimit point.** Both possibilities occur, and the two examples that matter later\nare $0$, which is a limit point of $\\{\\, 1/k : k \\ge 1 \\,\\}$ without belonging\nto it, and $0$ again, which belongs to $\\{0\\} \\cup [1,2]$ as an isolated point.",
      "uses": [
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "Let $U, F \\subseteq \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]].\n\n- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$\n  with $N_\\varepsilon(x) \\subseteq U$.\n- $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open.\n- A set is **clopen** when it is both open and closed.\n\nThe whole of the topology of $\\mathbb{R}$ developed on this page rests on this\none definition: closedness is *defined* as openness of the complement, and every\nother description of a closed set on this page is a theorem\n([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).\n\n**$\\varnothing$ and $\\mathbb{R}$ are clopen.** The condition defining openness\nquantifies over the elements of the set, so it holds vacuously for\n$\\varnothing$; and for $x \\in \\mathbb{R}$ one has $N_1(x) \\subseteq \\mathbb{R}$,\nso $\\mathbb{R}$ is open. Since each of the two is the complement of the other,\neach is also closed.\n\n**Every neighbourhood is open.** Let $y \\in N_\\varepsilon(x)$ and put\n$\\delta := \\varepsilon - |y - x|$, which is $> 0$ because\n$y \\in N_\\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives\n$N_\\delta(y) \\subseteq N_\\varepsilon(x)$. So every point of $N_\\varepsilon(x)$\nhas a neighbourhood inside it.\n\n**The four open forms of [[def-interval]] are open sets.** Let $a, b \\in\n\\mathbb{R}$.\n\n- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so\n  $\\delta := \\min\\{x - a,\\ b - x\\}$ is a positive real (the minimum of a\n  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).\n  If $|y - x| < \\delta$ then $y > x - \\delta \\ge x - (x - a) = a$ and\n  $y < x + \\delta \\le x + (b - x) = b$, so $y \\in (a,b)$; hence\n  $N_\\delta(x) \\subseteq (a,b)$.\n- $(a,\\infty)$: for $x > a$ take $\\delta := x - a > 0$; then $|y - x| < \\delta$\n  gives $y > x - \\delta = a$.\n- $(-\\infty,b)$: for $x < b$ take $\\delta := b - x > 0$; then $|y - x| < \\delta$\n  gives $y < x + \\delta = b$.\n- $(-\\infty,\\infty) = \\mathbb{R}$: already treated above.\n\n**The four closed forms of [[def-interval]] are closed sets.** In each case the\ncomplement is shown open directly.\n\n- $[a,b]$: if $x \\notin [a,b]$ then $x < a$ or $x > b$ by trichotomy\n  ([[def-ordered-field]]). If $x < a$, take $\\delta := a - x > 0$; every\n  $y \\in N_\\delta(x)$ has $y < x + \\delta = a$, hence $y \\notin [a,b]$. If\n  $x > b$, take $\\delta := x - b > 0$; every $y \\in N_\\delta(x)$ has\n  $y > x - \\delta = b$, hence $y \\notin [a,b]$. So\n  $\\mathbb{R} \\setminus [a,b]$ is open.\n- $[a,\\infty)$: its complement is $(-\\infty,a)$, which is open by the previous\n  paragraph.\n- $(-\\infty,b]$: its complement is $(b,\\infty)$, which is open.\n- $(-\\infty,\\infty) = \\mathbb{R}$: its complement is $\\varnothing$, which is\n  open.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-perfect-set-uncountable-r",
      "source_section": "Statement",
      "quote": "Let $P \\subseteq \\mathbb{R}$ be nonempty and perfect ([[def-perfect-set-r]]).\nThen $P$ is uncountable ([[def-countable]]).\n\n**The selection is canonical, so that this proof spends no dependent choice.**\nThe textbook proof shrinks a neighbourhood at every stage by *choosing* a point\nof $P$ and then a radius, a choice made infinitely often and each time depending\non the previous one: that is the axiom of dependent choice\n([[def-dependent-choice]]), which is not available at this point in the reading\norder; only the axiom of countable choice is, and it does not\nlicence a recursive selection. The construction below therefore fixes an\nenumeration $e$ of the rationals once ([[thm-rationals-countable]],\n[[lem-rat-embeds-dense]]) and, at every stage, takes the interval with\n**least-indexed rational endpoints** meeting the requirements. The requirements\nare met by some rational-endpoint interval, which is what step 2.1 proves, and\nthe least such index is determined by [[thm-well-ordering-principle]], so the\nwhole recursion is a single application of [[thm-recursion]] to a total map and\nno choice principle is used anywhere.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "cor-interval-uncountable",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]) and\nlet $a, b \\in \\mathbb{R}$ with $a < b$. Then both\n\n1. the closed interval $[a,b] = \\{\\, x \\in \\mathbb{R} : a \\le x \\le b \\,\\}$, and\n2. the open interval $(a,b) = \\{\\, x \\in \\mathbb{R} : a < x < b \\,\\}$\n\nare uncountable ([[def-countable]]).\n\n**What this adds to [[thm-r-uncountable]], and what it does not inherit from it.**\nThat theorem states exactly one thing: $\\mathbb{R}$ is uncountable. Its statement\nsays nothing about any interval, so the present result cannot be read off it. Its\n*proof*, on the other hand, is general in every part but its seed: the trisection\nrule of its step 2.1 is constructed there for an arbitrary $(a,b) \\in I$, and its\nsteps 4.1, 5.1 and 6.1, together with the interval reasoning of its step 7.1, use\nnothing about the starting interval beyond the nesting and the strictness\n$a_n < b_n$ that the rule delivers. Only three places are special to $\\mathbb{R}$\nand to $(0,1)$: the surjection of its step 1.1 is onto $\\mathbb{R}$, the recursion\nof its step 3.1 is seeded at $(0,(0,1))$, and the conclusion drawn in its step 7.1\nis about $\\mathbb{R}$. So the construction is re-run below, seeded\ninstead at the **middle third** of $(a,b)$, against a surjection onto $(a,b)$; the\nremarks record why that seed and not $(a,b)$ itself.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "For every $n \\in \\mathbb{N}$ and all $a_0, a_1, \\dots, a_n \\in \\mathbb{R}$, the\nset $\\{a_0, a_1, \\dots, a_n\\}$ has a maximum and a minimum ([[def-max-min]]).\n\nWhat is proved below is exactly the displayed statement, by induction on $n$.\n\nThe usual reading, that *every nonempty finite subset of $\\mathbb{R}$ has a\nmaximum and a minimum*, follows once one identifies the nonempty finite subsets\nof $\\mathbb{R}$ with the sets listable as $\\{a_0, \\dots, a_n\\}$. That\nidentification is recorded as a stipulation in the Given below, because this page\nhas no definition of finiteness to prove it against. **It is discharged, not\nmerely assumed**: [[lem-finite-subsets-listable]] proves that the two\ndescriptions of a nonempty finite subset of $\\mathbb{R}$ agree. That lemma is\nrecorded in `justified_by` rather than in `deps`, since it is about the sets this\nlemma quantifies over and therefore depends on this one. This is what licenses\nthe notation\n$\\max\\{a_1, \\dots, a_n\\}$ and $\\min\\{a_1, \\dots, a_n\\}$ for finite sets of\n**real** numbers from this page onwards.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L6",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$.\n\n- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.\n\nA set has at most one maximum: if $m_1$ and $m_2$ are both maxima then\n$m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so\n$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy\naxiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).\nThe same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L7",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity\nsatisfies $0 < 1$; that is, $1 \\in P$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L7",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L7",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "$E$ is closed by [L2], and nonempty since $a \\in E$.",
      "step": "1.1",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "No point of $E$ is isolated in $E$: let $x \\in E$ and let $\\varepsilon > 0$ be real. If $x < b$, put $t := \\min\\{\\varepsilon,\\ b - x\\} \\cdot 2^{-1}$, which is positive by [L6] and [L7], and $y := x + t$; then $y > x$, and $y \\le x + (b-x) \\cdot 2^{-1} < b$ by [L7], while $y > x \\ge a$, so $y \\in E$ with $y \\ne x$ and $|y - x| = t \\le \\varepsilon \\cdot 2^{-1} < \\varepsilon$. If $x = b$, then $x > a$; put $t := \\min\\{\\varepsilon,\\ b - a\\} \\cdot 2^{-1} > 0$ and $y := x - t$; then $y < x \\le b$, and $y \\ge b - (b-a) \\cdot 2^{-1} > a$ by [L7], so $y \\in E$ with $y \\ne x$ and $|y - x| = t < \\varepsilon$. In both cases $N_\\varepsilon(x)$ contains a point of $E$ other than $x$, so no $\\varepsilon$ isolates $x$.",
      "step": "1.2",
      "inputs": [
        "L1",
        "L3",
        "L6",
        "L7"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "By steps 1.1 and 1.2 the set $E$ is closed with no isolated points, that is, perfect, and it is nonempty.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "L1"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "By [L4] the nonempty perfect set $E$ is uncountable, which reproves for $[a,b]$ the first claim of [L5] along an independent route.",
      "step": "3.1",
      "inputs": [
        "step 1.1",
        "step 2.1",
        "L4",
        "L5"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The ex-closed-interval-is-perfect statement has no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "The ex-closed-interval-is-perfect statement has no zero-valued boundary."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "The ex-closed-interval-is-perfect statement has no unit or first-index boundary."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the equality, singleton, constant, or nonempty degeneracy."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "The statement and step 3.1 explicitly treat the interval or extended-real endpoint case."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The ex-closed-interval-is-perfect proof makes no selection from a set whose nonemptiness needs a separate discharge."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The ex-closed-interval-is-perfect statement is not a biconditional requiring a forward implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The ex-closed-interval-is-perfect statement is not a biconditional requiring a reverse implication."
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
    "source": "ex-closed-interval-is-perfect",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-perfect-set-r",
    "declared_target": "def-perfect-set-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-closed-interval-is-perfect",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-perfect-set-uncountable-r",
    "declared_target": "thm-perfect-set-uncountable-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-closed-interval-is-perfect",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "cor-interval-uncountable",
    "declared_target": "cor-interval-uncountable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-closed-interval-is-perfect",
    "sourcePage": "topology-of-r-examples",
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
    "source": "ex-closed-interval-is-perfect",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-limit-point-r",
    "declared_target": "def-limit-point-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-closed-interval-is-perfect",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-neighbourhood-r",
    "declared_target": "def-neighbourhood-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-closed-interval-is-perfect",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-open-and-closed-in-r",
    "declared_target": "def-open-and-closed-in-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-closed-interval-is-perfect",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-finite-set-has-max",
    "declared_target": "lem-finite-set-has-max",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-closed-interval-is-perfect",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-max-min",
    "declared_target": "def-max-min",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-closed-interval-is-perfect",
    "sourcePage": "topology-of-r-examples",
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
    "source": "ex-closed-interval-is-perfect",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "ex-closed-interval-is-perfect",
    "sourcePage": "topology-of-r-examples",
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
    "source": "ex-closed-interval-is-perfect",
    "sourcePage": "topology-of-r-examples",
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
    "source": "ex-closed-interval-is-perfect",
    "sourcePage": "topology-of-r-examples",
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
    "source": "ex-closed-interval-is-perfect",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (16)

### `cor-interval-uncountable`

````markdown
---
id: cor-interval-uncountable
kind: corollary
title: "Every nondegenerate interval of $\\mathbb{R}$ is uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-r-uncountable, def-countable, def-complete-ordered-field, thm-recursion, lem-sup-epsilon, lem-sup-unique, def-bounded-set, lem-countable-iff-surjection-from-n, lem-subset-of-countable, lem-of-add-order, def-ordered-field, cor-of-one-positive, lem-of-inverse-positive, lem-of-sign-rules, thm-induction-principle, def-natural-numbers, def-nat-order, lem-nat-trichotomy, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: false
short: "$[a,b]$ and $(a,b)$ are uncountable"
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
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Cantor's first set theory article (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_first_set_theory_article"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]) and
let $a, b \in \mathbb{R}$ with $a < b$. Then both

1. the closed interval $[a,b] = \{\, x \in \mathbb{R} : a \le x \le b \,\}$, and
2. the open interval $(a,b) = \{\, x \in \mathbb{R} : a < x < b \,\}$

are uncountable ([[def-countable]]).

**What this adds to [[thm-r-uncountable]], and what it does not inherit from it.**
That theorem states exactly one thing: $\mathbb{R}$ is uncountable. Its statement
says nothing about any interval, so the present result cannot be read off it. Its
*proof*, on the other hand, is general in every part but its seed: the trisection
rule of its step 2.1 is constructed there for an arbitrary $(a,b) \in I$, and its
steps 4.1, 5.1 and 6.1, together with the interval reasoning of its step 7.1, use
nothing about the starting interval beyond the nesting and the strictness
$a_n < b_n$ that the rule delivers. Only three places are special to $\mathbb{R}$
and to $(0,1)$: the surjection of its step 1.1 is onto $\mathbb{R}$, the recursion
of its step 3.1 is seeded at $(0,(0,1))$, and the conclusion drawn in its step 7.1
is about $\mathbb{R}$. So the construction is re-run below, seeded
instead at the **middle third** of $(a,b)$, against a surjection onto $(a,b)$; the
remarks record why that seed and not $(a,b)$ itself.

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$, with $0 \ne 1$ and the order of [[def-ordered-field]]. For $u \le v$ write $[u,v] = \{\, x \in \mathbb{R} : u \le x \le v \,\}$ and $(u,v) = \{\, x \in \mathbb{R} : u < x < v \,\}$, and write $I = \{\, (u,v) \in \mathbb{R} \times \mathbb{R} : u < v \,\}$ for the set of pairs coding nondegenerate closed intervals.

[L1] Least-upper-bound property: every nonempty $S \subseteq \mathbb{R}$ that is bounded above has a least upper bound $\sup S$, an upper bound below every upper bound ([[def-complete-ordered-field]], [[def-bounded-set]]).

[L2] The least upper bound is unique when it exists ([[lem-sup-unique]]).

[L3] Epsilon characterisation: for a nonempty $S$ bounded above and an upper bound $u$ of $S$, $u = \sup S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$ ([[lem-sup-epsilon]]).

[L4] Order and arithmetic in an ordered field: $0 < 1$ ([[cor-of-one-positive]]); $a < b$ implies $a + c < b + c$, and $a < b$ with $c < d$ implies $a + c < b + d$ ([[lem-of-add-order]]); $a > 0$ implies $a^{-1} > 0$ ([[lem-of-inverse-positive]]); a product of positives is positive ([[lem-of-sign-rules]]); the order is transitive and satisfies trichotomy ([[def-ordered-field]]).

[L5] Recursion: for any set $X$, $x_0 \in X$ and $F : X \to X$ there is $h : \mathbb{N} \to X$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$ ([[thm-recursion]]).

[L6] Induction ([[thm-induction-principle]]); any two naturals are comparable ([[lem-nat-trichotomy]]); the order of $\mathbb{N}$ is the additive one, $m \le n$ meaning $m + k = n$ for some $k$ ([[def-nat-order]], [[def-natural-numbers]]), and it satisfies $n < \sigma(n)$ and $m < \sigma(n) \iff m \le n$ ([[lem-nat-order-is-membership]]), so $m \le \sigma(n)$ holds exactly when $m \le n$ or $m = \sigma(n)$.

[L7] A nonempty set is at most countable if and only if some surjection from $\mathbb{N}$ onto it exists; uncountable means not at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L8] Every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that the conclusion fails: there are $a < b$ in $\mathbb{R}$ for which $[a,b]$ is at most countable or $(a,b)$ is at most countable. Fix such a pair. Since $(a,b) \subseteq [a,b]$, in the first case [L8] makes $(a,b)$ at most countable too, so in either case $(a,b)$ is at most countable. [assume-contra, L7, L8]

1.2 Put $3 := 1 + 1 + 1$. Adding the inequality $0 < 1$ to itself twice gives $3 > 0$ by [L4], so $3 \ne 0$ and $3^{-1} > 0$; hence for $d > 0$ the element $d/3 := d \cdot 3^{-1}$ is positive, and $d/3 + d/3 + d/3 = d \cdot 3^{-1} \cdot 3 = d$. [L4, algebra]

2.1 Fix the trisection rule. Let $(u,v) \in I$ and $y \in \mathbb{R}$. Put $d = v - u > 0$, $s = u + d/3$ and $t = s + d/3$; then $u < s < t < v$ by step 1.2 and [L4], since $s - u = t - s = v - t = d/3 > 0$. The three pairs $(u,s)$, $(s,t)$, $(t,v)$ all lie in $I$ and their intervals are contained in $[u,v]$. Moreover $[u,s]$ and $[t,v]$ are disjoint, because $x \le s < t \le x$ is impossible; so $y$ fails to lie in at least one of the three. Define $T(u,v,y)$ to be the **first** of $(u,s)$, $(s,t)$, $(t,v)$, in that fixed order, whose interval does not contain $y$. This is a definition by cases on the three conditions $y \in [u,s]$, $y \in [s,t]$, $y \in [t,v]$, so $T : I \times \mathbb{R} \to I$ is a function and no choice is made. [step 1.2, L4, construct]

3.1 Trisect the fixed interval. Put $d_0 = b - a > 0$, $p = a + d_0/3$ and $q = p + d_0/3$; then $a < p < q < b$ by step 1.2 and [L4], exactly as in step 2.1 applied to $(a,b)$. Hence $(p,q) \in I$, and $[p,q] \subseteq (a,b)$, since $p \le x \le q$ gives $a < p \le x \le q < b$. In particular $p \in (a,b)$, so $(a,b)$ is nonempty. [step 1.2, L4]

4.1 By step 1.1 the set $(a,b)$ is at most countable, and by step 3.1 it is nonempty, so [L7] provides a surjection $g : \mathbb{N} \to (a,b)$. Composing with the inclusion $(a,b) \subseteq \mathbb{R}$ regards $g$ as a function $f : \mathbb{N} \to \mathbb{R}$ with $f(n) = g(n)$ for every $n$. [step 1.1, step 3.1, L7]

5.1 Apply [L5] with $X = \mathbb{N} \times I$, $x_0 = (0, (p,q))$, which lies in $X$ because $p < q$ by step 3.1, and $F(n, (u,v)) = (\sigma(n), T(u, v, f(n)))$: this yields $h : \mathbb{N} \to \mathbb{N} \times I$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$. An induction using [L6] shows the first coordinate of $h(n)$ is $n$, so we may write $h(n) = (n, (a_n, b_n))$ with $a_n < b_n$, $a_0 = p$, $b_0 = q$ and $(a_{\sigma(n)}, b_{\sigma(n)}) = T(a_n, b_n, f(n))$ for every $n$. By step 2.1 this gives $a_n \le a_{\sigma(n)}$, $b_{\sigma(n)} \le b_n$ and $f(n) \notin [a_{\sigma(n)}, b_{\sigma(n)}]$. [step 2.1, step 3.1, step 4.1, L4, L5, L6, construct]

6.1 For $m \le n$ one has $a_m \le a_n$ and $b_n \le b_m$, by induction on $n$ using step 5.1 and transitivity; consequently $a_m \le b_n$ for all $m, n$: if $m \le n$ then $a_m \le a_n < b_n$, and if $n \le m$ then $a_m < b_m \le b_n$, and any two naturals are comparable by [L6]. [step 5.1, L4, L6]

7.1 The set $S = \{\, a_n : n \in \mathbb{N} \,\}$ is nonempty and bounded above by $b_0$ by step 6.1, so [L1] gives its least upper bound $x = \sup S$, unique by [L2]. [step 5.1, step 6.1, L1, L2]

8.1 For every $n$: $a_n \le x$, because $x$ is an upper bound of $S$; and $x \le b_n$, because otherwise $\varepsilon := x - b_n > 0$ and [L3] would produce $a_m \in S$ with $b_n = x - \varepsilon < a_m$, contradicting $a_m \le b_n$ from step 6.1. Hence $x \in [a_n, b_n]$ for every $n$. [step 6.1, step 7.1, L1, L3, L4]

9.1 Taking $n = 0$ in step 8.1 gives $x \in [a_0, b_0] = [p, q]$, and $[p,q] \subseteq (a,b)$ by step 3.1, so $x \in (a,b)$. Fix $n \in \mathbb{N}$: by step 8.1 applied to $\sigma(n)$, $x \in [a_{\sigma(n)}, b_{\sigma(n)}]$, whereas $f(n) \notin [a_{\sigma(n)}, b_{\sigma(n)}]$ by step 5.1, so $x \ne f(n) = g(n)$. As $n$ was arbitrary, the element $x$ of $(a,b)$ is not a value of $g$, contradicting the surjectivity of $g$ obtained in step 4.1. So no such pair $a < b$ exists: for every $a < b$ both $[a,b]$ and $(a,b)$ fail to be at most countable, that is, both are uncountable by [L7]. [step 3.1, step 4.1, step 5.1, step 8.1, L7, discharge-contradiction] ∎

## Remarks

- **Which route this proof takes, and why.** The extension is obtained by re-running the construction of [[thm-r-uncountable]] with a new seed, not by transporting uncountability along a bijection. The reason is that there is nothing to transport: the theorem states that $\mathbb{R}$ is uncountable and nothing more, and no item of this library states that $[0,1]$ is uncountable, so the affine order-isomorphism $t \mapsto a + t(b-a)$ from $[0,1]$ onto $[a,b]$ has no uncountable source to carry across. Re-running is available instead precisely because the theorem's proof is already general: its step 2.1 builds the trisection rule $T$ for an arbitrary $(a,b) \in I$, and its steps 4.1 to 7.1 quote only the nesting $a_n \le a_{\sigma(n)}$, $b_{\sigma(n)} \le b_n$, the strictness $a_n < b_n$ and the omission $f(n) \notin [a_{\sigma(n)}, b_{\sigma(n)}]$. Its step 1.1, the seed of its step 3.1 and the conclusion of its step 7.1 are the special ones, and they are the three replaced here: a surjection onto $(a,b)$ rather than onto $\mathbb{R}$, the seed $(0,(p,q))$ rather than $(0,(0,1))$, and a conclusion about the interval rather than about $\mathbb{R}$.
- **A corollary of the argument, not of the statement.** That distinction is the whole content of the previous remark, and it is why the proof is written out here in full rather than replaced by a citation. A fact of the form "for every $(a,b) \in I$ and every $f : \mathbb{N} \to \mathbb{R}$ there is $x \in [a,b]$ omitted by $f$" is true and is what the theorem's proof establishes, but it is not what the theorem says, so quoting the theorem for it would be an attribution the theorem does not support.
- **Why the seed is the middle third and not $(a,b)$ itself.** The point produced by the construction is a supremum of left endpoints, so it may be an endpoint of the starting interval; seeding at $(a,b)$ would therefore only place $x$ in the closed interval $[a,b]$, which settles claim 1 but not claim 2. Seeding at $(p,q)$, the middle third, costs nothing and gives $x \in [p,q] \subseteq (a,b)$, so the open case comes out directly and the closed case follows from it, since $(a,b) \subseteq [a,b]$ and a subset of an at most countable set is at most countable ([[lem-subset-of-countable]]). The naive order of the two claims is thus reversed: the open interval is the substantive one.
- **What the proof uses.** Exactly what [[thm-r-uncountable]] uses, and nothing else: ordered-field arithmetic, the recursion theorem ([[thm-recursion]]), and completeness at exactly one point, step 7.1 above, where $\sup\{a_n\}$ is produced. In particular the construction still makes no choices, for the same reason as there, namely that the three closed thirds are tried in a fixed order and the first and third are disjoint. The result consequently fails for $\mathbb{Q}$, where the intervals with rational endpoints are countable, and it must, since the supremum taken in step 7.1 above need not exist there.
- **Degeneracy is the only exclusion.** The hypothesis $a < b$ cannot be weakened: $[a,a] = \{a\}$ is finite and $(a,a) = \varnothing$ is finite, so both are at most countable. Every interval that is not a single point or empty contains a nondegenerate open interval, so this corollary gives the uncountability of the half-open and unbounded intervals as well, again by [[lem-subset-of-countable]].
````

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

### `def-max-min`

````markdown
---
id: def-max-min
kind: definition
title: "Maximum and minimum of a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
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
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
pipeline_run: null
---

## Definition

Let $S \subseteq \mathbb{R}$ and $m \in \mathbb{R}$.

- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \in S$ and $s \le m$
  for every $s \in S$.
- $m$ is a **minimum** (or *least element*) of $S$ if $m \in S$ and $m \le s$
  for every $s \in S$.

A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then
$m_1 \in S$ gives $m_1 \le m_2$ and $m_2 \in S$ gives $m_2 \le m_1$, so
$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy
axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).
The same argument applies to minima, so we may write $\max S$ and $\min S$.

## Remarks

- A maximum is precisely an upper bound of $S$ ([[def-complete-ordered-field]])
  that happens to lie in $S$; a minimum is a lower bound of $S$
  ([[def-bounded-set]]) that lies in $S$. In particular a set with a maximum is
  bounded above and a set with a minimum is bounded below.
- The empty set has neither a maximum nor a minimum, because the requirement
  $m \in S$ cannot be met.
- The membership requirement $m \in S$ is exactly what separates a maximum from a
  supremum, and it is the theme of this page. A supremum is a bound on the set
  and is not asked to belong to it; a maximum is an element of the set. The two
  agree exactly when the supremum happens to be attained ([[lem-max-is-sup]]),
  and they genuinely differ in general ([[fs-sup-belongs-to-set]]).
- Every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum
  ([[lem-finite-set-has-max]]), which is what licenses the notation
  $\max\{a_1, \dots, a_n\}$. Infinite sets need not: the failure of attainment is
  an infinitary phenomenon.
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

### `def-open-and-closed-in-r`

````markdown
---
id: def-open-and-closed-in-r
kind: definition
title: "Open subset of $\\mathbb{R}$ (every point has a neighbourhood inside it), closed subset (complement open), and clopen"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-r, def-interval, def-complete-ordered-field, def-ordered-field, def-real-order, lem-finite-set-has-max, def-max-min]
justified_by: []
aliases: []
landmark: true
short: "open, closed, clopen in $\\mathbb{R}$"
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $U, F \subseteq \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]].

- $U$ is **open** when for every $x \in U$ there is a real $\varepsilon > 0$
  with $N_\varepsilon(x) \subseteq U$.
- $F$ is **closed** when its complement $\mathbb{R} \setminus F$ is open.
- A set is **clopen** when it is both open and closed.

The whole of the topology of $\mathbb{R}$ developed on this page rests on this
one definition: closedness is *defined* as openness of the complement, and every
other description of a closed set on this page is a theorem
([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).

**$\varnothing$ and $\mathbb{R}$ are clopen.** The condition defining openness
quantifies over the elements of the set, so it holds vacuously for
$\varnothing$; and for $x \in \mathbb{R}$ one has $N_1(x) \subseteq \mathbb{R}$,
so $\mathbb{R}$ is open. Since each of the two is the complement of the other,
each is also closed.

**Every neighbourhood is open.** Let $y \in N_\varepsilon(x)$ and put
$\delta := \varepsilon - |y - x|$, which is $> 0$ because
$y \in N_\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives
$N_\delta(y) \subseteq N_\varepsilon(x)$. So every point of $N_\varepsilon(x)$
has a neighbourhood inside it.

**The four open forms of [[def-interval]] are open sets.** Let $a, b \in
\mathbb{R}$.

- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so
  $\delta := \min\{x - a,\ b - x\}$ is a positive real (the minimum of a
  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).
  If $|y - x| < \delta$ then $y > x - \delta \ge x - (x - a) = a$ and
  $y < x + \delta \le x + (b - x) = b$, so $y \in (a,b)$; hence
  $N_\delta(x) \subseteq (a,b)$.
- $(a,\infty)$: for $x > a$ take $\delta := x - a > 0$; then $|y - x| < \delta$
  gives $y > x - \delta = a$.
- $(-\infty,b)$: for $x < b$ take $\delta := b - x > 0$; then $|y - x| < \delta$
  gives $y < x + \delta = b$.
- $(-\infty,\infty) = \mathbb{R}$: already treated above.

**The four closed forms of [[def-interval]] are closed sets.** In each case the
complement is shown open directly.

- $[a,b]$: if $x \notin [a,b]$ then $x < a$ or $x > b$ by trichotomy
  ([[def-ordered-field]]). If $x < a$, take $\delta := a - x > 0$; every
  $y \in N_\delta(x)$ has $y < x + \delta = a$, hence $y \notin [a,b]$. If
  $x > b$, take $\delta := x - b > 0$; every $y \in N_\delta(x)$ has
  $y > x - \delta = b$, hence $y \notin [a,b]$. So
  $\mathbb{R} \setminus [a,b]$ is open.
- $[a,\infty)$: its complement is $(-\infty,a)$, which is open by the previous
  paragraph.
- $(-\infty,b]$: its complement is $(b,\infty)$, which is open.
- $(-\infty,\infty) = \mathbb{R}$: its complement is $\varnothing$, which is
  open.

## Remarks

- **Open and closed are not opposites, and not exhaustive.** A set may be
  neither: the half-open interval $[0,1)$ is neither open nor closed
  ([[fs-every-set-is-open-or-closed]]). A set may be both: $\varnothing$ and
  $\mathbb{R}$ are clopen. The words are inherited from the interval terminology
  of [[def-interval]], and the agreement between the two usages is exactly the
  two lists verified above: an interval called open there is an open set here,
  and an interval called closed there is a closed set here.

- **A clopen set is a disconnection waiting to happen.** If $A$ is clopen and
  both $A$ and $\mathbb{R} \setminus A$ are nonempty, then each of the two is
  its own closure, so the two are separated in the sense of
  [[def-connected-r]] and $\mathbb{R} = A \cup (\mathbb{R} \setminus A)$ is a
  disconnection. Since $\mathbb{R}$ is order-convex it is connected
  ([[thm-connected-subsets-of-r-are-intervals]]), so no such $A$ exists:
  $\varnothing$ and $\mathbb{R}$ are the only clopen subsets of $\mathbb{R}$.

- **The half-open forms are the ones the two lists omit**, and deliberately so:
  $[a,b)$ and $(a,b]$ with $a < b$ are neither open nor closed as subsets of
  $\mathbb{R}$.

- **The radius depends on the point.** Openness asks for *some* $\varepsilon$
  at each point, and that $\varepsilon$ may shrink to nothing as the point
  approaches the edge of the set, as the computation for $(a,b)$ shows: there
  $\delta = \min\{x - a,\ b - x\}$ tends to $0$ as $x$ tends to either endpoint.
  Asking instead for a single $\varepsilon$ that works simultaneously at every
  point of the set is a strictly stronger condition, and it is not what is
  defined here; nothing on this page uses it.
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

### `def-perfect-set-r`

````markdown
---
id: def-perfect-set-r
kind: definition
title: "Perfect subset of $\\mathbb{R}$: closed with no isolated points"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-point-r, def-open-and-closed-in-r, thm-closure-characterisations-r]
justified_by: []
forward_refs: [cex-closed-set-with-an-isolated-point-is-not-perfect, ex-closed-interval-is-perfect]
aliases: []
landmark: false
short: "perfect set"
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
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18(h))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
    - title: "A. Erdman, Companion to Real Analysis"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
pipeline_run: null
---

## Definition

A set $P \subseteq \mathbb{R}$ is **perfect** when

- $P$ is closed ([[def-open-and-closed-in-r]]), and
- $P$ has no isolated points ([[def-limit-point-r]]): no $x \in P$ admits a real
  $\varepsilon > 0$ with $N_\varepsilon(x) \cap P = \{x\}$.

**Equivalently, $P$ is closed and $P \subseteq P'$.** By
[[def-limit-point-r]], a point of $P$ is isolated in $P$ exactly when it is not
a limit point of $P$, so "no point of $P$ is isolated in $P$" says precisely
that every point of $P$ is a limit point of $P$, that is, $P \subseteq P'$.
Combined with the characterisation of closedness as $P' \subseteq P$
([[thm-closure-characterisations-r]]), a perfect set is exactly a set with
$P = P'$, though only the two conditions above are used below.

## Remarks

- **Both conditions are needed and neither implies the other.** The set
  $\{0\} \cup [1,2]$ is closed and has the isolated point $0$, so it is not
  perfect ([[cex-closed-set-with-an-isolated-point-is-not-perfect]]); the open
  interval $(0,1)$ has no isolated points and is not closed, so it is not
  perfect either.

- **$\varnothing$ is perfect**, vacuously: it is closed and has no points at
  all, hence no isolated ones. This is why
  [[thm-perfect-set-uncountable-r]] carries the hypothesis that $P$ is nonempty:
  the empty set is perfect and countable.

- **A nonempty perfect set is forced to be large.** It is uncountable
  ([[thm-perfect-set-uncountable-r]]), and the simplest examples are the
  nondegenerate closed intervals ([[ex-closed-interval-is-perfect]]). A perfect
  set need not contain any interval, the Cantor set being the standard example
  of that; it is not constructed anywhere in this library, and the statement is
  recorded here as orientation only, on the references above.
````

### `lem-finite-set-has-max`

````markdown
---
id: lem-finite-set-has-max
kind: lemma
title: "Every nonempty finite set of reals has a maximum and a minimum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-max-min, thm-induction-principle, def-nat-addition, def-complete-ordered-field, def-ordered-field]
justified_by: [lem-finite-subsets-listable]
forward_refs: [def-countable]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$ and all $a_0, a_1, \dots, a_n \in \mathbb{R}$, the
set $\{a_0, a_1, \dots, a_n\}$ has a maximum and a minimum ([[def-max-min]]).

What is proved below is exactly the displayed statement, by induction on $n$.

The usual reading, that *every nonempty finite subset of $\mathbb{R}$ has a
maximum and a minimum*, follows once one identifies the nonempty finite subsets
of $\mathbb{R}$ with the sets listable as $\{a_0, \dots, a_n\}$. That
identification is recorded as a stipulation in the Given below, because this page
has no definition of finiteness to prove it against. **It is discharged, not
merely assumed**: [[lem-finite-subsets-listable]] proves that the two
descriptions of a nonempty finite subset of $\mathbb{R}$ agree. That lemma is
recorded in `justified_by` rather than in `deps`, since it is about the sets this
lemma quantifies over and therefore depends on this one. This is what licenses
the notation
$\max\{a_1, \dots, a_n\}$ and $\min\{a_1, \dots, a_n\}$ for finite sets of
**real** numbers from this page onwards.

## Facts & Assumptions

**Given:** Real numbers $a_0, a_1, a_2, \dots$; for $n \in \mathbb{N}$ write $F_n := \{a_0, \dots, a_n\}$, so that $F_{n+1} = F_n \cup \{a_{n+1}\}$. A subset of $\mathbb{R}$ is nonempty and finite exactly when it equals $F_n$ for some $n \in \mathbb{N}$ and some choice of $a_0, \dots, a_n$.

[A1] $P(n)$ denotes the statement: for all $a_0, \dots, a_n \in \mathbb{R}$, the set $F_n$ has a maximum and a minimum.

[L1] Maximum and minimum: $m = \max X$ means $m \in X$ and $x \le m$ for all $x \in X$; $m = \min X$ means $m \in X$ and $m \le x$ for all $x \in X$; each is unique when it exists ([[def-max-min]]).

[L2] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L3] The order on $\mathbb{R}$ is reflexive, total and transitive: $a \le a$; for all $a, b$ exactly one of $a < b$, $a = b$, $b < a$ holds, so at least one of $a \le b$ and $b \le a$ holds; and $a \le b$ with $b \le c$ gives $a \le c$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 Base case: $F_0 = \{a_0\}$, and $a_0 \in F_0$ with $a_0 \le a_0$ by reflexivity, so $a_0$ is both a maximum and a minimum of $F_0$; hence $P(0)$ holds. [base, A1, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that is, for all reals $a_0, \dots, a_n$ the set $F_n$ has a maximum and a minimum. [ih, A1]

2.1 Let $a_0, \dots, a_{n+1} \in \mathbb{R}$ be arbitrary; by the inductive hypothesis the set $F_n$ has a maximum $M$ and a minimum $m$, and $F_{n+1} = F_n \cup \{a_{n+1}\}$. [step 1.2, L1]

3.1 By totality at least one of $a_{n+1} \le M$ and $M \le a_{n+1}$ holds. If $a_{n+1} \le M$, then $M \in F_n \subseteq F_{n+1}$, every element of $F_n$ is $\le M$ because $M = \max F_n$, and $a_{n+1} \le M$ as well, so $M$ is a maximum of $F_{n+1}$. If $M \le a_{n+1}$, then $a_{n+1} \in F_{n+1}$, every $x \in F_n$ satisfies $x \le M \le a_{n+1}$ hence $x \le a_{n+1}$ by transitivity, and $a_{n+1} \le a_{n+1}$, so $a_{n+1}$ is a maximum of $F_{n+1}$. Either way $F_{n+1}$ has a maximum. [step 2.1, L1, L3]

3.2 Dually, at least one of $m \le a_{n+1}$ and $a_{n+1} \le m$ holds. If $m \le a_{n+1}$, then $m \in F_{n+1}$ and every element of $F_{n+1}$ is $\ge m$, so $m$ is a minimum of $F_{n+1}$. If $a_{n+1} \le m$, then $a_{n+1} \in F_{n+1}$ and every $x \in F_n$ satisfies $a_{n+1} \le m \le x$ hence $a_{n+1} \le x$ by transitivity, so $a_{n+1}$ is a minimum of $F_{n+1}$. Either way $F_{n+1}$ has a minimum. [step 2.1, L1, L3]

4.1 Since $a_0, \dots, a_{n+1}$ were arbitrary, $F_{n+1}$ has a maximum and a minimum for every such list, that is, $P(n)$ implies $P(n+1)$. [step 3.1, step 3.2, A1]

5.1 The base case and the inductive step give $P(n)$ for every $n \in \mathbb{N}$ by the induction principle; since a nonempty finite subset of $\mathbb{R}$ is exactly a set of the form $F_n$, every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum. [step 1.1, step 4.1, given, L2, discharge-induction] ∎

## Remarks

- **Where the stipulation is discharged.** Finiteness itself is defined later, in [[def-countable]], as equinumerosity with a von Neumann natural; with that definition in hand [[lem-finite-subsets-listable]] proves that a subset of $\mathbb{R}$ is nonempty and finite exactly when it is listable as $\{a_0, \dots, a_n\}$, which is the Given below. So nothing on this page rests on an assumption that is never paid for; it is paid for later, and the payment is recorded in `justified_by`.
- **Only the total order is used, never completeness.** The base case needs reflexivity, the inductive step needs totality and transitivity, and the induction itself runs over $\mathbb{N}$. The same induction works in any totally ordered field; what is recorded here is its specialisation to $\mathbb{R}$.
- Nonemptiness is essential: $\emptyset$ is finite and has no maximum ([[def-max-min]]). Finiteness is essential too: $\{x \in \mathbb{R} : 0 < x < 1\}$ is bounded and has no maximum ([[fs-sup-belongs-to-set]]).
- Combined with claim 1 of [[lem-max-is-sup]], this says every nonempty finite subset of $\mathbb{R}$ has a supremum, and that the supremum is attained, because it equals the maximum. The infimum half is *not* part of [[lem-max-is-sup]], which speaks only of maxima and suprema; it follows from the minimum proved here together with the reflection identity $\inf X = -\sup(-X)$ ([[lem-reflection]], [[thm-infimum-property]]).
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

### `thm-nested-interval-property`

````markdown
---
id: thm-nested-interval-property
kind: theorem
title: "A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-interval, def-monotone-sequence, thm-monotone-convergence, def-complete-ordered-field, lem-sup-unique, thm-infimum-property, def-bounded-set, def-real-limit, def-sequence, thm-algebra-of-limits, lem-limit-unique, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [ex-nested-intervals-single-point, cex-nested-open-intervals-empty, cex-nested-unbounded-closed-empty]
aliases: []
landmark: true
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
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.38)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §1.4"
      url: "https://www.jirka.org/ra/"
---

## Statement

For each $k \in \mathbb{N}$ let $I_k = [a_k, b_k]$ be a closed bounded interval
with $a_k \le b_k$ ([[def-interval]]), and suppose the family is **nested**:

$$I_{k+1} \subseteq I_k \qquad (k \in \mathbb{N}).$$

Write $\ell_k = b_k - a_k \ge 0$ for the length of $I_k$. Then:

1. $\displaystyle\bigcap_{k \in \mathbb{N}} I_k$ is **nonempty**. More precisely,
   with $a = \sup\{a_k : k \in \mathbb{N}\}$ and
   $b = \inf\{b_k : k \in \mathbb{N}\}$, both of which exist, one has $a \le b$
   and $$\bigcap_{k \in \mathbb{N}} I_k = [a, b].$$
2. $\displaystyle\bigcap_{k \in \mathbb{N}} I_k$ is a **single point** if and only
   if $\ell_k \to 0$ ([[def-real-limit]]).

Every hypothesis is load bearing. Dropping closedness makes the intersection
empty; dropping boundedness does the same; and dropping nonemptiness of the
individual intervals is vacuously fatal.

## Facts & Assumptions

**Given:** Closed bounded intervals $I_k = [a_k, b_k]$ with $a_k \le b_k$ for every $k \in \mathbb{N}$ and $I_{k+1} \subseteq I_k$ for every $k$; the sequences $(a_k)$ and $(b_k)$ of reals ([[def-sequence]]); their ranges $A = \{a_k : k \in \mathbb{N}\}$ and $B = \{b_k : k \in \mathbb{N}\}$, both nonempty; and $\ell_k = b_k - a_k$.

[L1] Closed bounded intervals: $[a,b] = \{x \in \mathbb{R} : a \le x \le b\}$; it is nonempty exactly when $a \le b$, it is the singleton $\{a\}$ when $a = b$, it has two distinct elements $a$ and $b$ when $a < b$, and its length is $b - a$ ([[def-interval]]).

[L2] Least-upper-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ bounded above has a unique supremum; the supremum is an upper bound and is $\le$ every upper bound ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L3] Greatest-lower-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ bounded below has a unique infimum; the infimum is a lower bound and is $\ge$ every lower bound ([[thm-infimum-property]], [[lem-sup-unique]]).

[L4] Monotone sequences, and the fact that consecutive comparisons suffice: $x_k \le x_{k+1}$ for all $k$ makes $(x_k)$ nondecreasing, and $x_{k+1} \le x_k$ for all $k$ makes it nonincreasing ([[def-monotone-sequence]]).

[L5] Monotone convergence: a nondecreasing sequence whose range is bounded above converges to the supremum of its range, and a nonincreasing sequence whose range is bounded below converges to the infimum ([[thm-monotone-convergence]]).

[L6] Algebra of limits: if $u_k \to u$ and $v_k \to v$ then $u_k - v_k \to u - v$ ([[thm-algebra-of-limits]]).

[L7] A sequence of reals has at most one limit ([[lem-limit-unique]]).

[L8] Bounded above and bounded below, for a subset of $\mathbb{R}$ ([[def-bounded-set]]).

[L9] The order on $\mathbb{N}$ is total and transitive, so any two indices $k, l$ admit an index $m$ with $k \le m$ and $l \le m$, namely the larger of the two ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Nestedness read on the endpoints: since $a_{k+1} \le b_{k+1}$, both $a_{k+1}$ and $b_{k+1}$ lie in $I_{k+1} \subseteq I_k$, so $a_k \le a_{k+1}$ and $b_{k+1} \le b_k$ for every $k$. [given, L1]

2.1 Hence $(a_k)$ is nondecreasing and $(b_k)$ is nonincreasing. [step 1.1, L4]

3.1 For all indices $k$ and $l$: choosing $m$ with $k \le m$ and $l \le m$ gives $a_k \le a_m \le b_m \le b_l$, so $a_k \le b_l$. [step 2.1, given, L9]

4.1 Every $b_l$ is therefore an upper bound of $A$ and every $a_k$ a lower bound of $B$; both sets are nonempty, so $a := \sup A$ and $b := \inf B$ exist and are unique. [step 3.1, L2, L3, L8]

5.1 $a \le b$: each $b_l$ is an upper bound of $A$, so $a \le b_l$ for every $l$ by leastness of the supremum; thus $a$ is a lower bound of $B$, and $a \le b$ by greatestness of the infimum. [step 4.1, L2, L3]

5.2 By monotone convergence, $a_k \to a$ and $b_k \to b$. [step 2.1, step 4.1, L5]

5.3 The intersection is exactly $[a,b]$: a real $x$ lies in every $I_k$ exactly when $a_k \le x \le b_k$ for every $k$, that is exactly when $x$ is an upper bound of $A$ and a lower bound of $B$, and by leastness of $a$ and greatestness of $b$ that holds exactly when $a \le x \le b$. [step 4.1, L1, L2, L3]

6.1 $\ell_k = b_k - a_k \to b - a$ by the algebra of limits. [step 5.2, L6]

6.2 Since $a \le b$, the interval $[a,b]$ is nonempty, so the intersection is nonempty; together with step 5.3 this is claim 1. [step 5.1, step 5.3, L1]

7.1 If $\ell_k \to 0$ then $b - a = 0$ by uniqueness of limits, so $a = b$ and the intersection is $[a,a] = \{a\}$, a single point. [step 5.3, step 6.1, L1, L7]

7.2 Conversely, if the intersection is a single point then $a = b$: it equals $[a,b]$ with $a \le b$, and $a < b$ would give the two distinct elements $a$ and $b$. Hence $b - a = 0$ and $\ell_k \to 0$ by step 6.1. [step 5.1, step 5.3, step 6.1, L1]

8.1 Claim 1 is step 6.2 and claim 2 is the pair of implications in steps 7.1 and 7.2, so a nested sequence of nonempty closed bounded intervals has nonempty intersection, equal to $[a,b]$, and that intersection is a single point exactly when the lengths tend to $0$. [step 6.2, step 7.1, step 7.2] ∎

## Remarks

- **No Archimedean input is needed.** The lengths are handled entirely by the
  algebra of limits and the uniqueness of limits: $\ell_k$ always converges, to
  $b - a$, and the two directions of claim 2 are then the two directions of
  "$b - a = 0$". A proof that instead argues "if $b - a > 0$ then some $\ell_k$
  is smaller" does need the Archimedean property
  ([[cor-archimedean-reciprocal]]), and it is avoidable, so it is avoided.

- **Nestedness gives more than it is usually stated to give.** The intersection
  is not merely nonempty; it is the closed interval $[a,b]$, and $a$ and $b$ are
  the limits of the endpoint sequences. The single-point case is exactly the case
  in which those two limits agree, and that is what makes the nested interval
  property usable as a *construction* of a real number, as in
  [[ex-nested-intervals-single-point]].

- **This is one of the standard equivalents of completeness.** Nested intervals
  together with the Archimedean property imply the least-upper-bound property, so
  the implication proved here is not reversible for free: it is half of an
  equivalence whose other half needs the Archimedean hypothesis separately.
  [[rem-completeness-routes]] records where this library stands on those routes.

- **The witnesses for the two deleted hypotheses** are
  [[cex-nested-open-intervals-empty]], which keeps boundedness and drops
  closedness, and [[cex-nested-unbounded-closed-empty]], which keeps closedness
  and drops boundedness. Neither is used above; each shows that the corresponding
  hypothesis cannot be removed.
````

### `thm-perfect-set-uncountable-r`

````markdown
---
id: thm-perfect-set-uncountable-r
kind: theorem
title: "Every nonempty perfect subset of $\\mathbb{R}$ is uncountable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-perfect-set-r, thm-nested-interval-property, def-countable, lem-countable-iff-surjection-from-n, thm-recursion, def-interval, def-neighbourhood-r, thm-closure-characterisations-r, def-open-and-closed-in-r, def-limit-point-r, lem-rat-embeds-dense, thm-rationals-countable, thm-well-ordering-principle, cor-archimedean-reciprocal, thm-of-archimedean, def-injection-surjection-bijection, def-equinumerous, def-real-limit, def-sequence, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-abs-value, lem-finite-set-has-max, def-max-min, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [ex-closed-interval-is-perfect, cex-closed-set-with-an-isolated-point-is-not-perfect, ex-reciprocals-with-zero-are-compact]
aliases: []
landmark: true
short: "nonempty perfect $\\Rightarrow$ uncountable"
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "Cantor-Bendixson theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%E2%80%93Bendixson_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.43)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "A. W. Miller, Tameness notes"
      url: "https://people.math.osu.edu/miller.1987/tameness.pdf"
pipeline_run: null
---

## Statement

Let $P \subseteq \mathbb{R}$ be nonempty and perfect ([[def-perfect-set-r]]).
Then $P$ is uncountable ([[def-countable]]).

**The selection is canonical, so that this proof spends no dependent choice.**
The textbook proof shrinks a neighbourhood at every stage by *choosing* a point
of $P$ and then a radius, a choice made infinitely often and each time depending
on the previous one: that is the axiom of dependent choice
([[def-dependent-choice]]), which is not available at this point in the reading
order; only the axiom of countable choice is, and it does not
licence a recursive selection. The construction below therefore fixes an
enumeration $e$ of the rationals once ([[thm-rationals-countable]],
[[lem-rat-embeds-dense]]) and, at every stage, takes the interval with
**least-indexed rational endpoints** meeting the requirements. The requirements
are met by some rational-endpoint interval, which is what step 2.1 proves, and
the least such index is determined by [[thm-well-ordering-principle]], so the
whole recursion is a single application of [[thm-recursion]] to a total map and
no choice principle is used anywhere.

## Facts & Assumptions

**Given:** A nonempty perfect set $P \subseteq \mathbb{R}$. Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$ under $q \mapsto \hat q$. A pair $(p,q) \in \mathbb{Q}_{\mathbb{R}} \times \mathbb{Q}_{\mathbb{R}}$ is called **good** when $p < q$ and $(p,q) \cap P \ne \varnothing$, and $G$ denotes the set of good pairs.

[L1] $P$ is perfect: $P$ is closed and every $x \in P$ is a limit point of $P$, so every punctured neighbourhood of $x$ meets $P$ ([[def-perfect-set-r]], [[def-limit-point-r]]).

[L2] $\overline{A}$ is the set of points every neighbourhood of which meets $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[thm-closure-characterisations-r]], [[def-open-and-closed-in-r]]).

[L3] $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$; $x \in N_\varepsilon(x)$; $N^{*}_\varepsilon(x) = N_\varepsilon(x) \setminus \{x\}$; and $y \in N_\varepsilon(x)$ with $0 < \delta \le \varepsilon - |y - x|$ gives $N_\delta(y) \subseteq N_\varepsilon(x)$ ([[def-neighbourhood-r]]).

[L4] Intervals: $(p,q)$ is an open set and $[p,q]$ is a closed bounded interval, nonempty when $p \le q$ ([[def-interval]], [[def-open-and-closed-in-r]]).

[L5] A nonempty at most countable set admits a surjection from $\mathbb{N}$; uncountable means not at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L6] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]); $q \mapsto \hat q$ is injective with image $\mathbb{Q}_{\mathbb{R}}$ and strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]]); a composition of bijections is a bijection ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L7] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L8] Recursion: for a set $Y$, an element $y_0 \in Y$ and a function $T : Y \to Y$ there is $h : \mathbb{N} \to Y$ with $h(0) = y_0$ and $h(\sigma(k)) = T(h(k))$ ([[thm-recursion]]).

[L9] Nested interval property: for nonempty closed bounded intervals $I_k = [a_k,b_k]$ with $I_{k+1} \subseteq I_k$, the intersection is nonempty, and it is a single point exactly when the lengths $b_k - a_k$ tend to $0$ ([[thm-nested-interval-property]]).

[L10] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]); canonical naturals are positive and increasing, and reciprocation of positives reverses the order ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L11] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]); $0 < 1$, so $2 := 1+1 > 0$ and $0 < d \cdot 2^{-1} < d$ for $d > 0$; adding a constant and multiplying by a positive preserve inequalities ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L12] Convergence of a sequence of reals to $0$ is tested against rational $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

[L13] Absolute value: $|z| \ge 0$, and $|y - x| \le b - a$ whenever $x, y \in [a,b]$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that the nonempty perfect set $P$ is at most countable; by [L5] fix a surjection $f : \mathbb{N} \to P$. [assume-contra, L5, choose]

1.2 By [L6] fix a bijection $\beta : \mathbb{N} \to \mathbb{Q}$ and put $e := \iota \circ \beta$ with $\iota(q) = \hat q$, a bijection from $\mathbb{N}$ onto $\mathbb{Q}_{\mathbb{R}}$. [L6, choose]

1.3 Recall the terminology of the Given: a pair $(p,q)$ of elements of $\mathbb{Q}_{\mathbb{R}}$ is good when $p < q$ and $(p,q) \cap P \ne \varnothing$, and $G$ is the set of good pairs. [given, construct]

2.1 **Refinement claim.** For every good $(p,q)$, every $x \in \mathbb{R}$ and every real $\eta > 0$ there is a good $(p',q')$ with $[p',q'] \subseteq (p,q)$, $x \notin [p',q']$ and $q' - p' < \eta$. To see it, fix $y \in (p,q) \cap P$ and, $(p,q)$ being open, a real $\varepsilon > 0$ with $N_\varepsilon(y) \subseteq (p,q)$; since $y \in P$ is not isolated, [L1] gives $z \in N^{*}_\varepsilon(y) \cap P$, so $z \in P \cap (p,q)$ and $z \ne y$. At least one of $y, z$ differs from $x$; let $w$ be $y$ if $y \ne x$ and $z$ otherwise, so $w \in P \cap N_\varepsilon(y)$ and $w \ne x$. Put $\delta := \min\{\, \varepsilon - |w - y|,\ |w - x|,\ \eta \cdot 2^{-1} \,\}$, a positive real by [L11] since each entry is positive, and use [L6] to fix $p', q' \in \mathbb{Q}_{\mathbb{R}}$ with $w - \delta < p' < w < q' < w + \delta$. Then $[p',q'] \subseteq N_\delta(w) \subseteq N_\varepsilon(y) \subseteq (p,q)$ by [L3], the pair $(p',q')$ is good because $w \in (p',q') \cap P$, the point $x$ lies outside $N_\delta(w)$ because $|x - w| \ge \delta$, and $q' - p' < 2\delta \le \eta$. [step 1.3, L1, L3, L4, L6, L11, choose]

3.1 **Successor rule.** For $(k,(p,q)) \in \mathbb{N} \times G$ let $m$ be the least natural for which some natural $n$ makes $(e(m),e(n))$ good with $[e(m),e(n)] \subseteq (p,q)$, $f(k) \notin [e(m),e(n)]$ and $e(n) - e(m) < 1/(k+1)$, and let $n$ be the least natural with those properties for that $m$; put $T(k,(p,q)) := (\sigma(k), (e(m),e(n)))$. The set of eligible $m$ is nonempty by step 2.1 applied with $x = f(k)$ and $\eta = 1/(k+1) > 0$, since $e$ is onto $\mathbb{Q}_{\mathbb{R}}$, so both minima exist by [L7] and $T : \mathbb{N} \times G \to \mathbb{N} \times G$ is a total function defined without any selection. [step 2.1, L6, L7, L10, construct]

4.1 **The recursion.** $P$ is nonempty, so fix $y_0 \in P$ and, by [L6], elements $p_0 < y_0 < q_0$ of $\mathbb{Q}_{\mathbb{R}}$; then $(p_0,q_0)$ is good. Apply [L8] with $Y = \mathbb{N} \times G$, seed $(0,(p_0,q_0))$ and map $T$ to get $h : \mathbb{N} \to \mathbb{N} \times G$ with $h(0) = (0,(p_0,q_0))$ and $h(\sigma(k)) = T(h(k))$; an induction on $k$ shows the first coordinate of $h(k)$ is $k$, so write $h(k) = (k,(p_k,q_k))$ with every $(p_k,q_k)$ good. [step 1.3, step 3.1, L6, L8, construct]

5.1 Writing $I_k := [p_k,q_k]$ and $\ell_k := q_k - p_k > 0$, the rule of step 3.1 gives, for every $k \in \mathbb{N}$: $I_{k+1} \subseteq (p_k,q_k) \subseteq I_k$, so the intervals are nested and nonempty; $f(k) \notin I_{k+1}$; $\ell_{k+1} < 1/(k+1)$; and $I_k \cap P \ne \varnothing$, because $(p_k,q_k) \cap P \ne \varnothing$. [step 3.1, step 4.1, L4]

6.1 For every real $\varepsilon > 0$ there is $k \ge 1$ with $\ell_k < \varepsilon$, and moreover $\ell_k \to 0$: by step 5.1 one has $\ell_j < 1/j$ for every $j \ge 1$, since $\ell_j = \ell_{(j-1)+1} < 1/((j-1)+1) = 1/j$; given $\varepsilon > 0$, [L10] supplies a natural $n \ge 1$ with $1/n < \varepsilon$, and then every $k \ge n$ satisfies $k \ge 1$ and $|\ell_k - 0| = \ell_k < 1/k \le 1/n < \varepsilon$ by [L10] and [L13], which is both assertions, the second by [L12] since a rational $\varepsilon > 0$ is in particular a real one. [step 5.1, L10, L12, L13]

7.1 By [L9] the nested family $(I_k)$ of nonempty closed bounded intervals has an intersection that is a single point, since its lengths tend to $0$ by step 6.1; write $\{x\}$ for it, so $x \in I_k$ for every $k$. [step 5.1, step 6.1, L9]

8.1 $x \in P$: let $\varepsilon > 0$ be real and use step 6.1 to fix $k \ge 1$ with $\ell_k < \varepsilon$; by step 5.1 there is $y \in I_k \cap P$, and $x \in I_k$ by step 7.1, so $|y - x| \le \ell_k < \varepsilon$ by [L13] and $y \in N_\varepsilon(x) \cap P$. Every neighbourhood of $x$ therefore meets $P$, so $x \in \overline{P} = P$ by [L1] and [L2]. [step 5.1, step 6.1, step 7.1, L1, L2, L3, L13]

9.1 For every $k \in \mathbb{N}$ one has $x \in I_{k+1}$ by step 7.1 while $f(k) \notin I_{k+1}$ by step 5.1, so $x \ne f(k)$; thus the element $x$ of $P$ found in step 8.1 is not a value of $f$, contradicting the surjectivity of the $f$ fixed in step 1.1. The assumption is therefore untenable: a nonempty perfect subset of $\mathbb{R}$ is not at most countable, that is, it is uncountable. [step 1.1, step 5.1, step 7.1, step 8.1, L5, discharge-contradiction] ∎

## Remarks

- **Which hypothesis does what.** Closedness of $P$ is used exactly once, at the
  step that puts the limit point $x$ back into $P$; without it the construction
  still produces a point, but that point may lie outside $P$ and the
  contradiction evaporates. Having no isolated points is used exactly once, in
  the refinement claim, to produce a second point of $P$ inside a neighbourhood,
  which is what allows the excluded point $f(k)$ to be dodged. Nonemptiness is
  used to seed the recursion, and it cannot be dropped: $\varnothing$ is perfect
  and countable ([[def-perfect-set-r]]).

- **Why rational endpoints.** They are what make the construction canonical.
  The requirement "some good rational-endpoint interval inside $(p,q)$ misses
  $f(k)$ and is short" is a property of a pair of natural numbers, so it can be
  minimised by [[thm-well-ordering-principle]]; the same requirement stated for
  arbitrary real endpoints comes with no canonical least witness, and picking one
  would be a choice made afresh at every stage. This is the same device that
  keeps
  [[lem-subset-of-countable]] and [[lem-countable-iff-surjection-from-n]] choice
  free, transplanted from subsets of $\mathbb{N}$ to intervals.

- **The shrinking condition is $\ell_{k+1} < 1/(k+1)$ and not $1/k$.** Sequences
  and recursions here are indexed from $0$ ([[def-sequence]]), so the bound
  available at stage $k$ has to be positive at $k = 0$; $1/k$ is undefined
  there. The consequence, $\ell_j < 1/j$ for $j \ge 1$, is what step 6.1 uses,
  and it says nothing about $\ell_0$, which is not needed.

- **The result is sharp in both directions.** A nondegenerate closed interval is
  perfect and uncountable ([[ex-closed-interval-is-perfect]]), and deleting the
  no-isolated-points clause loses the conclusion: a closed set with an isolated
  point need not be perfect
  ([[cex-closed-set-with-an-isolated-point-is-not-perfect]]) and may be
  countable, as $\{\, 1/k : k \ge 1 \,\} \cup \{0\}$ is
  ([[ex-reciprocals-with-zero-are-compact]]). Applied to a
  nondegenerate closed interval, which [[ex-closed-interval-is-perfect]] shows
  to be perfect, the theorem reproves the uncountability of intervals
  ([[cor-interval-uncountable]]) by a different route; the two proofs share
  nothing but the completeness of $\mathbb{R}$, which
  [[cor-interval-uncountable]] spends as a supremum and the argument above
  spends through [[thm-nested-interval-property]].
````

