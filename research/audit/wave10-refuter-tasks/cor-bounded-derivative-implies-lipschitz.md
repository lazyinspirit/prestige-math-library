## Wave 10 target — `cor-bounded-derivative-implies-lipschitz`

Selection: mandatory Wave 10 high/critical proof-bearing route (risk report classifies all 49 contracts critical).

Normalized current SHA-256: `0a1faf5ab4a04abe8ee983dd74ce08399b7f12ec75b5f17185b5c0561fdb1083`

## Complete current target

````markdown
---
id: cor-bounded-derivative-implies-lipschitz
kind: corollary
title: "If $f$ is continuous on an interval $I$ and $|f'| \\le M$ at every interior point, then $|f(x) - f(y)| \\le M|x-y|$ for all $x,y \\in I$, so $f$ is Lipschitz with constant $M$ and uniformly continuous on $I$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-mean-value-theorem, def-derivative, def-interval, def-continuity-real, def-uniform-continuity-real, lem-real-and-metric-notions-agree, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, lem-of-abs-value, def-interior-closure-boundary-r, def-neighbourhood-r, prop-of-multiply-inequalities, def-limit-point-r]
justified_by: []
forward_refs: [cex-differentiable-with-unbounded-derivative-is-not-lipschitz]
aliases: []
landmark: true
short: "bounded derivative gives Lipschitz"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]), let
$f : I \to \mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and
differentiable at every point of $I$ interior to $I$
([[def-interior-closure-boundary-r]], [[def-derivative]]), and let
$M \in \mathbb{R}$ with $M \ge 0$ satisfy

$$|f'(x)| \;\le\; M \qquad \text{at every interior point } x \text{ of } I .$$

Then

$$|f(x) - f(y)| \;\le\; M\,|x - y| \qquad \text{for all } x, y \in I ,$$

which is exactly the statement that $f$ is **Lipschitz with constant $M$** on
$I$ ([[def-lipschitz-holder-contraction]], clause 3 of
[[lem-real-and-metric-notions-agree]]). Consequently $f$ is uniformly
continuous on $I$ ([[def-uniform-continuity-real]]).

**$M \ge 0$ is a hypothesis, not a deduction.** It follows from
$|f'(x)| \le M$ at any single interior point, absolute values being
nonnegative, but $I$ need have no interior point at all, and then the sign
condition has to be asked for. With $M \ge 0$ assumed the conclusion is a
genuine statement in every case, and at $x = y$ it reads $0 \le 0$.

**Boundedness of $f'$ cannot be dropped.** A function may be continuous on an
interval and differentiable at every interior point with no bound on $|f'|$, and
then it need not be Lipschitz there; the companion page's square root on
$(0,1]$ is such a function.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$, a function $f : I \to \mathbb{R}$ continuous on $I$ and differentiable at every interior point of $I$, and a real $M \ge 0$ with $|f'(x)| \le M$ at every interior point $x$ of $I$.

[L1] Mean value theorem ([[cor-mean-value-theorem]]): for $u < v$ and $h : [u,v] \to \mathbb{R}$ continuous on $[u,v]$ and differentiable at every point of $(u,v)$, there is $c \in (u,v)$ with $h(v)-h(u) = h'(c)(v-u)$.

[L2] Order-convexity ([[def-interval]]): $u, v \in I$ with $u \le v$ gives $[u,v] \subseteq I$; and for $u < v$ in $I$ every $x \in (u,v)$ is interior to $I$, since $N_{\varepsilon}(x) \subseteq (u,v) \subseteq I$ for $\varepsilon := \min\{x-u,\ v-x\} > 0$ ([[def-neighbourhood-r]], [[def-interior-closure-boundary-r]]).

[L3] Restriction of the domain ([[def-derivative]]): if $B \subseteq A$, if $p \in B$ is a limit point of $B$ and if $h : A \to \mathbb{R}$ is differentiable at $p$, then $h|_B$ is differentiable at $p$ with the same derivative; every point of an order-convex set with at least two elements is a limit point of it ([[def-limit-point-r]]).

[L4] Continuity passes to a subset of the domain ([[def-continuity-real]]).

[L5] Absolute value ([[lem-of-abs-value]]): $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; $|uw| = |u|\,|w|$; and $|{-u}| = |u|$, so $|x - y| = |y - x|$.

[L6] Dictionary ([[lem-real-and-metric-notions-agree]], clause 3): for a real $L \ge 0$, "$f : A \to \mathbb{R}$ is Lipschitz with constant $L$" means exactly that $|f(x)-f(x')| \le L\,|x-x'|$ for all $x, x' \in A$, this being the metric condition of [[def-lipschitz-holder-contraction]] instantiated at $A \subseteq \mathbb{R}$ with $d(x,y) = |x-y|$.

[L7] Regularity hierarchy ([[thm-metric-regularity-hierarchy]], claim 2), transported to real functions by clauses 2 and 6 of [[lem-real-and-metric-notions-agree]]: a Lipschitz $f : A \to \mathbb{R}$ is uniformly continuous on $A$ in the sense of [[def-uniform-continuity-real]].

[L8] Multiplying non-strict inequalities of nonnegatives ([[prop-of-multiply-inequalities]]): $0 \le s \le t$ and $0 \le w \le z$ imply $sw \le tz$.

## Proof

**Proof technique:** direct.

1.1 Let $x, y \in I$. If $x = y$ then $|f(x)-f(y)| = |0| = 0$ and $M|x-y| = M \cdot 0 = 0$, so the asserted inequality holds. Assume therefore $x \ne y$, and put $u := \min\{x,y\}$ and $v := \max\{x,y\}$, so that $u, v \in I$, $u < v$, and $|x - y| = v - u = |v - u|$ by [L5]. [given, L5]

2.1 By [L2] the segment $[u,v]$ lies in $I$ and is nondegenerate; the restriction $f|_{[u,v]}$ is continuous on $[u,v]$ by [L4]; and each $x' \in (u,v)$ is interior to $I$ by [L2], hence a point at which $f$ is differentiable with $|f'(x')| \le M$, while $x'$ is a limit point of $[u,v]$ by [L3], so $f|_{[u,v]}$ is differentiable at $x'$ with the same derivative. [step 1.1, L2, L3, L4]

3.1 By step 2.1 the function $f|_{[u,v]}$ satisfies the hypotheses of [L1], so fix $c \in (u,v)$ with $f(v) - f(u) = f'(c)\,(v-u)$. [step 2.1, L1, choose]

4.1 Taking absolute values in step 3.1 and using $|uw| = |u||w|$ gives $|f(v)-f(u)| = |f'(c)|\,|v-u|$. The point $c$ lies in $(u,v)$, hence is interior to $I$ by step 2.1, so $0 \le |f'(c)| \le M$; and $0 \le |v-u| \le |v-u|$. So [L8] gives $|f'(c)|\,|v-u| \le M\,|v-u|$, whence $|f(v)-f(u)| \le M\,|v-u|$. Since $\{u,v\} = \{x,y\}$ and $|f(v)-f(u)| = |f(x)-f(y)|$ by [L5], and $|v-u| = |x-y|$ by step 1.1, this is $|f(x)-f(y)| \le M\,|x-y|$. [step 2.1, step 3.1, L5, L8]

5.1 The pair $x, y \in I$ was arbitrary and the case $x = y$ was settled in step 1.1, so $|f(x)-f(y)| \le M|x-y|$ for all $x, y \in I$. By [L6] that is the statement that $f$ is Lipschitz with constant $M$ on $I$, and by [L7] such an $f$ is uniformly continuous on $I$. [step 1.1, step 4.1, L6, L7] ∎

## Remarks

- **The constant is the bound on the derivative, unchanged.** No factor is lost and none is gained: the mean value theorem turns the increment into a single value of $f'$ times the increment of the argument, so whatever bounds $|f'|$ bounds the Lipschitz ratio. That is why this corollary is so much sharper than the mere uniform continuity that follows from it.

- **Uniform continuity is obtained through the metric dictionary, not reproved.** [[lem-real-and-metric-notions-agree]] says that the Lipschitz condition for a real function is the metric one instantiated, and [[thm-metric-regularity-hierarchy]] says that a Lipschitz map is uniformly continuous. Neither statement is restated here in an $\mathbb{R}$-native form, because both already exist in the library and duplicating them would create exactly the seam those items were written to close.

- **What the converse would say, and why it is not asserted.** A Lipschitz function need not be differentiable at any particular point, so no statement about $f'$ follows from a Lipschitz bound alone, and this corollary asserts none.

- **The boundedness hypothesis is exactly what is needed.** [[cex-differentiable-with-unbounded-derivative-is-not-lipschitz]] on the companion page exhibits a function continuous on $(0,1]$ and differentiable at every interior point, with $|f'|$ bounded by no real at all, which is not Lipschitz there. So the hypothesis cannot be replaced by mere differentiability, and it cannot be replaced by a bound holding only near one end of the interval.
````

## Current Wave 10 provenance determination

```json
{
  "id": "cor-bounded-derivative-implies-lipschitz",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
  ],
  "rationale": "The source derives the Lipschitz estimate from a uniform derivative bound using the mean value theorem. The item adds the explicit uniform-continuity consequence.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 10 proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "cor-mean-value-theorem",
      "source_section": "Statement",
      "quote": "Let $a, b \\in \\mathbb{R}$ with $a < b$ and let $f : [a,b] \\to \\mathbb{R}$ be\ncontinuous on $[a,b]$ ([[def-continuity-real]], [[def-interval]]) and\ndifferentiable at every point of $(a,b)$ as a function on $[a,b]$\n([[def-derivative]]). Then there is $c \\in (a,b)$ with\n\n$$f(b) - f(a) \\;=\\; f'(c)\\,(b - a) .$$\n\nEquivalently, since $b - a \\ne 0$, there is $c \\in (a,b)$ at which\n$f'(c) = \\bigl(f(b)-f(a)\\bigr)/(b-a)$: the derivative somewhere inside equals\nthe average rate of change across the whole interval.\n\n**Continuity on the closed interval cannot be dropped.** Differentiability at\nevery point of $(a,b)$ alone does not suffice: a function on $[0,1]$,\ndifferentiable at every point of $(0,1)$ with derivative constantly $1$, for\nwhich no $c$ works, is exhibited later on this page as a false statement, and\nthe companion page works the same witness out in full.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-interior-closure-boundary-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$, with open and closed sets as in\n[[def-open-and-closed-in-r]].\n\n- The **interior** of $A$ is the union of all open subsets of $A$:\n  $$A^{\\circ} \\;:=\\; \\bigcup \\{\\, U \\subseteq \\mathbb{R} : U \\text{ open and } U \\subseteq A \\,\\}.$$\n- The **closure** of $A$ is the intersection of all closed supersets of $A$:\n  $$\\overline{A} \\;:=\\; \\bigcap \\{\\, F \\subseteq \\mathbb{R} : F \\text{ closed and } A \\subseteq F \\,\\}.$$\n- The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus A^{\\circ}$.\n- The **exterior** of $A$ is $\\operatorname{ext} A := (\\mathbb{R} \\setminus A)^{\\circ}$.\n\n**Both operators are well defined and deliver what their names claim.** The\nfamily whose union defines $A^{\\circ}$ always contains $\\varnothing$, and the\nfamily whose intersection defines $\\overline{A}$ always contains $\\mathbb{R}$,\nso the second family is nonempty and both expressions denote subsets of\n$\\mathbb{R}$ without appeal to any convention about empty unions or\nintersections. Moreover:\n\n- $A^{\\circ}$ is **open**, being a union of open sets\n  ([[thm-open-set-algebra-r]], claim 1), and $A^{\\circ} \\subseteq A$, since\n  every set in the family is a subset of $A$. It is therefore the **largest**\n  open subset of $A$: any open $U \\subseteq A$ is a member of the family and so\n  $U \\subseteq A^{\\circ}$.\n- $\\overline{A}$ is **closed**, being an intersection of a nonempty family of\n  closed sets ([[thm-open-set-algebra-r]], claim 3), and $A \\subseteq\n  \\overline{A}$, since every set in the family contains $A$. It is therefore the\n  **smallest** closed superset of $A$: any closed $F \\supseteq A$ is a member of\n  the family and so $\\overline{A} \\subseteq F$.\n\n**Pointwise description of the interior.** For $x \\in \\mathbb{R}$,\n\n$$x \\in A^{\\circ} \\iff \\text{there is } \\varepsilon > 0 \\text{ with } N_\\varepsilon(x) \\subseteq A .$$\n\nIf $x \\in A^{\\circ}$ then, $A^{\\circ}$ being open and containing $x$, there is\n$\\varepsilon > 0$ with $N_\\varepsilon(x) \\subseteq A^{\\circ} \\subseteq A$.\nConversely if $N_\\varepsilon(x) \\subseteq A$ then $N_\\varepsilon(x)$ is an open\nsubset of $A$ ([[def-open-and-closed-in-r]]) containing $x$, hence\n$x \\in N_\\varepsilon(x) \\subseteq A^{\\circ}$ ([[def-neighbourhood-r]]).\n\nThe corresponding pointwise description of the closure is not a definitional\nmatter and is proved separately, as [[thm-closure-characterisations-r]].",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-derivative",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]]), neighbourhoods are those of\n[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$ be a\n**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function\n\n$$q_{f,c} : A \\setminus \\{c\\} \\to \\mathbb{R}, \\qquad q_{f,c}(x) := \\frac{f(x) - f(c)}{x - c} .$$\n\nThe division is legitimate at every point of the domain, since $x \\ne c$ gives\n$x - c \\ne 0$.\n\n**The point $c$ is a limit point of $A \\setminus \\{c\\}$, not merely of $A$.**\nFor every real $\\varepsilon > 0$ the punctured neighbourhood\n$N^{*}_{\\varepsilon}(c)$ omits $c$, so\n\n$$N^{*}_{\\varepsilon}(c) \\cap A \\;=\\; N^{*}_{\\varepsilon}(c) \\cap (A \\setminus \\{c\\}) ,$$\n\nand the left-hand side is nonempty because $c$ is a limit point of $A$. So\n$q_{f,c}$ is a function on a set having $c$ as a limit point, and\n$\\lim_{x \\to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.\n\n$f$ is **differentiable at $c$** when that limit exists, and then the\n**derivative of $f$ at $c$** is\n\n$$f'(c) \\;:=\\; \\lim_{x \\to c} q_{f,c}(x) \\;=\\; \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c} .$$\n\n**Two obligations are carried by that notation, and both are discharged here.**\n\n1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a\n   single real number. That is legitimate: $c$ is a limit point of the domain\n   $A \\setminus \\{c\\}$ of $q_{f,c}$, so at most one real can satisfy the\n   $\\varepsilon$-$\\delta$ condition, by [[lem-function-limit-unique]] applied to\n   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the\n   symbol denotes.\n2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not\n   decoration. At an **isolated** point of $A$ the punctured condition\n   $0 < |x - c| < \\delta$ is met by no point of the domain at all, so the\n   $\\varepsilon$-$\\delta$ formula is satisfied vacuously by *every* real at\n   once; this is why [[def-function-limit]] leaves the limit undefined there,\n   and it is why this library defines $f'(c)$ only at a limit point of $A$. At\n   an isolated point of its domain a function is neither differentiable nor\n   non-differentiable here: the question is not posed.\n\n**The limit sees only $A \\setminus \\{c\\}$, so how the difference quotient is\nextended to $c$ is irrelevant.** Let $Q : A \\to \\mathbb{R}$ agree with\n$q_{f,c}$ at every point of $A \\setminus \\{c\\}$, and let $L \\in \\mathbb{R}$.\nThen $\\lim_{x \\to c} Q(x) = L$ if and only if $\\lim_{x \\to c} q_{f,c}(x) = L$.\nBoth conditions read: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ such that every point $x$ of the relevant domain with\n$0 < |x - c| < \\delta$ satisfies $|{\\cdot} - L| < \\varepsilon$\n([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both\nquantifiers, so in both cases the points quantified over are exactly the\n$x \\in A \\setminus \\{c\\}$ with $0 < |x - c| < \\delta$, at which $Q$ and\n$q_{f,c}$ take the same value. The two conditions are the same condition.\n\n**Differentiability on a set.** For $S \\subseteq A$, $f$ is **differentiable on\n$S$** when it is differentiable at every $c \\in S$; implicit in that phrase is\nthat every point of $S$ is a limit point of $A$. $f$ is **differentiable** when\nit is differentiable on the whole of $A$.\n\n**Restriction of the domain.** Let $B \\subseteq A$, let $c \\in B$ and suppose\n$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the\nrestriction $f|_B : B \\to \\mathbb{R}$, and\n\n$$(f|_B)'(c) \\;=\\; f'(c) .$$\n\nIndeed $B \\setminus \\{c\\} \\subseteq A \\setminus \\{c\\}$; the displayed identity\nof punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit\npoint of $B \\setminus \\{c\\}$; the difference quotient $q_{f|_B, c}$ is the\nrestriction of $q_{f,c}$ to $B \\setminus \\{c\\}$, since $f|_B(c) = f(c)$; and\nclaim 2 of [[lem-limit-is-local]] carries the limit to that restriction.\n\n**Every point of a nondegenerate interval is a limit point of it.** Let\n$J \\subseteq \\mathbb{R}$ be order-convex ([[def-interval]]) with at least two\nelements and let $p \\in J$. Choose $q \\in J$ with $q \\ne p$, and let a real\n$\\varepsilon > 0$ be given. If $p < q$, put $y := p + \\tfrac{1}{2}\\min\\{\\varepsilon,\\ q - p\\}$;\nthen $p < y$, and $y - p \\le \\tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and\norder-convexity gives $y \\in J$, while $0 < |y - p| < \\varepsilon$. If $q < p$,\nthe point $y := p - \\tfrac{1}{2}\\min\\{\\varepsilon,\\ p - q\\}$ serves in the same\nway. So $N^{*}_{\\varepsilon}(p) \\cap J \\ne \\varnothing$ for every real\n$\\varepsilon > 0$, that is, $p$ is a limit point of $J$\n([[def-limit-point-r]]).\n\nConsequently, for $f$ defined on a nondegenerate interval $I$, the symbol\n$f'(c)$ is meaningful at **every** $c \\in I$, endpoints included. At an endpoint\nthe difference quotient is taken over the points of $I$ lying on the one side\nthat is available, so what other texts call a one-sided derivative is, here,\nsimply the derivative of $f$ on $I$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-limit-point-r",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and $x \\in \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]] and closure as in\n[[def-interior-closure-boundary-r]].\n\n- $x$ is an **adherent point** of $A$ when $N_\\varepsilon(x) \\cap A \\ne\n  \\varnothing$ for every real $\\varepsilon > 0$.\n- $x$ is a **limit point** (or *accumulation point*) of $A$ when\n  $N^{*}_\\varepsilon(x) \\cap A \\ne \\varnothing$ for every real\n  $\\varepsilon > 0$: every punctured neighbourhood of $x$ meets $A$.\n- $x$ is an **isolated point** of $A$ when $x \\in A$ and there is a real\n  $\\varepsilon > 0$ with $N_\\varepsilon(x) \\cap A = \\{x\\}$.\n- The **derived set** of $A$ is\n  $$A' \\;:=\\; \\{\\, x \\in \\mathbb{R} : x \\text{ is a limit point of } A \\,\\}.$$\n- $A$ is **dense in $\\mathbb{R}$** when $\\overline{A} = \\mathbb{R}$.\n\n**A limit point is an adherent point**, since $N^{*}_\\varepsilon(x) \\subseteq\nN_\\varepsilon(x)$; and an element of $A$ is an adherent point of $A$, since\n$x \\in N_\\varepsilon(x) \\cap A$ ([[def-neighbourhood-r]]). So the adherent\npoints of $A$ are exactly the points of $A \\cup A'$, a statement proved as part\nof [[thm-closure-characterisations-r]].\n\n**Limit point and isolated point are exact opposites inside $A$.** For\n$x \\in A$: $x$ is an isolated point of $A$ exactly when it is not a limit point\nof $A$. Indeed $N_\\varepsilon(x) \\cap A = \\{x\\}$ says precisely that\n$N^{*}_\\varepsilon(x) \\cap A = \\varnothing$, because $x$ itself always lies in\n$N_\\varepsilon(x) \\cap A$ when $x \\in A$; so the existence of an $\\varepsilon$\nwitnessing isolation is the negation of the condition defining a limit point.\nA point of $A$ is therefore either isolated in $A$ or a limit point of $A$, and\nnever both.\n\n**A limit point need not belong to the set, and a point of the set need not be a\nlimit point.** Both possibilities occur, and the two examples that matter later\nare $0$, which is a limit point of $\\{\\, 1/k : k \\ge 1 \\,\\}$ without belonging\nto it, and $0$ again, which belongs to $\\{0\\} \\cup [1,2]$ as an isolated point.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field with its order and\nabsolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and\nneighbourhoods are those of [[def-neighbourhood-r]].\n\nLet $A \\subseteq \\mathbb{R}$, let $f : A \\to \\mathbb{R}$ and let $c \\in A$. Then\n$f$ is **continuous at $c$** when\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x \\in A)\\ \\bigl[\\ |x - c| < \\delta \\ \\Longrightarrow\\ |f(x) - f(c)| < \\varepsilon\\ \\bigr],$$\n\nwith $\\varepsilon$ and $\\delta$ ranging over the **positive reals**. In the\nlanguage of neighbourhoods: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ with\n\n$$f\\bigl(A \\cap N_{\\delta}(c)\\bigr) \\;\\subseteq\\; N_{\\varepsilon}\\bigl(f(c)\\bigr).$$\n\n$f$ is **continuous on $A$** when it is continuous at every point of $A$.\n\n**The point $c$ is required to lie in $A$, and the condition is unpunctured.**\nBoth differ from [[def-function-limit]], and deliberately. There the quantifier\nruns over $0 < |x - c| < \\delta$, which removes $x = c$; here $x = c$ is allowed,\nand at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \\varepsilon$, which is\nautomatic. So allowing $x = c$ costs nothing, and it is what lets the definition\nbe stated at every point of $A$, including the points where no limit exists.\n\n**Three clauses, and all three are part of the definition.**\n\n1. **At a limit point.** Suppose $c \\in A$ is a limit point of $A$\n   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the\n   limit of $f$ at $c$ exists and\n   $$\\lim_{x \\to c} f(x) \\;=\\; f(c)$$\n   ([[def-function-limit]]). Indeed, for a given $\\varepsilon > 0$ a $\\delta$\n   witnessing continuity witnesses the limit condition, because the limit\n   condition quantifies over a subset of the points continuity quantifies over;\n   and conversely a $\\delta$ witnessing $\\lim_{x \\to c} f(x) = f(c)$ witnesses\n   continuity, because the one point it omits, $x = c$, satisfies\n   $|f(c) - f(c)| < \\varepsilon$ anyway.\n\n2. **At an isolated point.** Suppose $c \\in A$ is an isolated point of $A$\n   ([[def-limit-point-r]]), so that $N_{\\eta}(c) \\cap A = \\{c\\}$ for some real\n   $\\eta > 0$. Then **every** $f : A \\to \\mathbb{R}$ is continuous at $c$: take\n   $\\delta := \\eta$, so that the only $x \\in A$ with $|x - c| < \\delta$ is $c$\n   itself, and $|f(c) - f(c)| = 0 < \\varepsilon$.\n\n3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and\n   nothing more. It is not a condition relating $f$ to points outside $A$.\n\nEvery point of $A$ is either a limit point of $A$ or an isolated point of $A$,\nand never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe\ncontinuity at every point of $A$.\n\n**This is not the raw $\\varepsilon$-$\\delta$ formula of\n[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes\nwrong when the *punctured* formula of [[def-function-limit]] is written down at\nan arbitrary point of the domain: at an isolated point it is satisfied\nvacuously by every real $L$ at once, so it defines nothing, and this library\ntherefore leaves $\\lim_{x \\to c} f(x)$ **undefined** at an isolated point.\nContinuity at an isolated point is a different matter: the formula above is not\nvacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the\nonly value being compared with itself — and it names a single, well-defined\nproperty. The limit is undefined there; the continuity is defined, and is\nautomatic. Clause 1 is the only place where the two notions meet, and it is\nstated only where the limit exists as a notion.\n\n**Where the distinction disappears.** If $A$ is an open subset of $\\mathbb{R}$\n([[def-open-and-closed-in-r]]), then every $c \\in A$ has some\n$N_{\\eta}(c) \\subseteq A$, and a punctured neighbourhood is never empty\n([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and\nclause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate\ninterval ([[def-interval]]). Isolated points are what force clause 2 to exist at\nall, and they occur as soon as $A$ is allowed to be an arbitrary subset of\n$\\mathbb{R}$, as in $A = \\{0\\} \\cup [1,2]$.",
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
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-real-and-metric-notions-agree",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$ carry the subspace metric of the usual metric\n$d_{\\mathbb{R}}(x,y) = |x-y|$ of $\\mathbb{R}$, that is\n$d_A(x,y) = |x - y|$ for $x, y \\in A$\n([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]),\nand let $f : A \\to \\mathbb{R}$, regarded also as a map of metric spaces\n$(A, d_A) \\to (\\mathbb{R}, d_{\\mathbb{R}})$. Then the $\\mathbb{R}$-native\nnotions of this page and the metric-space notions of the earlier pages are the\n**same notions**, in the following five senses.\n\n1. **Continuity.** For every $c \\in A$: $f$ is continuous at $c$ in the sense of\n   [[def-continuity-real]] if and only if $f$ is continuous at $c$ in the sense\n   of [[def-metric-continuity]]. Consequently $f$ is continuous on $A$ if and\n   only if it is continuous as a map of metric spaces.\n2. **Uniform continuity.** $f$ is uniformly continuous on $A$ in the sense of\n   [[def-uniform-continuity-real]] if and only if it is uniformly continuous as\n   a map of metric spaces ([[def-metric-uniform-continuity]]).\n3. **Lipschitz.** For a real $L \\ge 0$: $f$ is Lipschitz with constant $L$ as a\n   map of metric spaces ([[def-lipschitz-holder-contraction]]) if and only if\n   $$|f(x) - f(x')| \\le L\\,|x - x'| \\qquad \\text{for all } x, x' \\in A .$$\n   This displayed condition is what \"$f$ is Lipschitz with constant $L$\" means\n   for a real function on $A$ in this library; no second definition is made.\n4. **Hölder.** For a rational $\\alpha$ with $0 < \\alpha \\le 1$ and a real\n   $C \\ge 0$: $f$ is $\\alpha$-Hölder with constant $C$ as a map of metric spaces\n   if and only if\n   $$|f(x) - f(x')| \\le C\\,|x - x'|^{\\alpha} \\qquad \\text{for all } x, x' \\in A ,$$\n   the power being the rational power of a nonnegative base\n   ([[def-rational-power]]).\n5. **Compactness, in both senses used in this library.** For $K \\subseteq\n   \\mathbb{R}$ with the subspace metric $d_K$:\n   - $K$ is compact in the open-cover sense of [[def-open-cover-r]] — every\n     family of open subsets of $\\mathbb{R}$ covering $K$ has a finite subfamily\n     covering $K$ — if and only if the metric space $(K, d_K)$ is compact\n     ([[def-metric-compactness]]);\n   - $K$ is sequentially compact in the sense of [[def-open-cover-r]] if and\n     only if $(K, d_K)$ is sequentially compact as a metric space\n     ([[def-metric-compactness-variants]]).\n\nTwo consequences are recorded, since they are the reason the dictionary is\nstated as a lemma rather than as a remark.\n\n6. **The regularity hierarchy transfers verbatim.** By clauses 1 to 4 and\n   [[thm-metric-regularity-hierarchy]]: a Lipschitz $f : A \\to \\mathbb{R}$ is\n   uniformly continuous on $A$; an $\\alpha$-Hölder $f$ with rational\n   $0 < \\alpha \\le 1$ is uniformly continuous on $A$; a uniformly continuous $f$\n   is continuous on $A$; and if $A$ is nonempty and bounded, a Lipschitz $f$ is\n   $\\alpha$-Hölder for every rational $\\alpha$ with $0 < \\alpha \\le 1$. No\n   strictness is claimed here, and none is claimed there.\n7. **Cauchy sequences transfer.** A sequence $(x_k)$ with terms in $A$ is Cauchy\n   in $(A, d_A)$ ([[def-cauchy-in-metric]]) if and only if it is Cauchy as a\n   sequence of reals ([[def-real-limit]]); so by clause 2 and\n   [[thm-uniform-continuity-preserves-cauchy]], a uniformly continuous\n   $f : A \\to \\mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of\n   $\\mathbb{R}$.\n\n**Why this lemma exists, and why it is a lemma.** Three results of this page —\n[[thm-continuous-image-of-a-compact-set-r]], [[thm-extreme-value-r]] and\n[[thm-heine-cantor-r]] — are stated a second time here, having already been\nproved metric-generally as\n[[thm-continuous-image-of-a-compact-space-is-compact]],\n[[thm-extreme-value-metric]] and [[thm-heine-cantor-metric]]. The duplication is\ndeliberate: the $\\mathbb{R}$-native proofs run through\n[[thm-heine-borel-characterisation-r]] and\n[[thm-compact-iff-sequentially-compact-r]], which are order-based, while the\nmetric proofs run through the cover machinery of metric spaces. **This item is\nthe single place in the library where that duplication is acknowledged**, and\nclauses 1 and 5 are what make the two families of statements literally the same\nstatements. It is a lemma, and not a remark, precisely so that later pages can\ncite it and move between the two vocabularies.\n\n**Clause 5 closes a second seam.** The phrase *compact subset of $\\mathbb{R}$*\nis defined twice in this library — metrically, as compactness of the metric\nsubspace ([[def-metric-compactness]]), and $\\mathbb{R}$-natively, by covers by\nopen subsets of $\\mathbb{R}$ ([[def-open-cover-r]]) — and until this clause no\nitem asserted that the two agree.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-lipschitz-holder-contraction",
      "source_section": "Definition",
      "quote": "Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let\n$f : X \\to Y$ be a function. Recall that a metric takes nonnegative real values\n([[lem-metric-nonnegativity]]).\n\n- $f$ is **Lipschitz** with **constant** $L$, where $L \\in \\mathbb{R}$ and\n  $L \\ge 0$, if\n  $$d_Y\\big(f(x), f(x')\\big) \\;\\le\\; L \\, d_X(x,x') \\qquad \\text{for all } x, x' \\in X .$$\n  $f$ is *Lipschitz* if it is Lipschitz with some such constant.\n- Let $\\alpha \\in \\mathbb{Q}$ with $0 < \\alpha \\le 1$ ([[def-rat-order]]). $f$ is\n  **$\\alpha$-Hölder** with **constant** $C$, where $C \\in \\mathbb{R}$ and\n  $C \\ge 0$, if\n  $$d_Y\\big(f(x), f(x')\\big) \\;\\le\\; C \\, d_X(x,x')^{\\alpha} \\qquad \\text{for all } x, x' \\in X ,$$\n  the power being the rational power of a nonnegative base\n  ([[def-rational-power]]). $f$ is *$\\alpha$-Hölder* if it is so with some such\n  constant, and *Hölder* if it is $\\alpha$-Hölder for some rational\n  $\\alpha \\in (0,1]$.\n- $f$ is a **contraction** with constant $q$ if it is Lipschitz with constant $q$\n  and $0 \\le q < 1$. The number $q$ is then called a **contraction constant** for\n  $f$.\n\n**The power $d_X(x,x')^{\\alpha}$ is defined at every pair, including $x = x'$.**\nThe base $d_X(x,x')$ is a nonnegative real, and [[def-rational-power]] defines\n$a^{\\alpha}$ for every $a > 0$ and, by its supplementary clause, sets\n$0^{\\alpha} = 0$ for every rational $\\alpha > 0$. Since $\\alpha > 0$ is required\nhere, the displayed inequality at $x = x'$ reads $0 \\le C \\cdot 0$, which holds;\nso no separate clause and no restriction to $x \\ne x'$ is needed. Note that this\ndoes not by itself explain the strict inequality $\\alpha>0$: if one extended the\nformula to $\\alpha=0$ using the convention $0^0=1$ of [[def-integer-power]], the\nequal-point inequality would still be the automatic $0\\le C$. Globally, however,\nthat extension would reduce to the bounded-diameter condition\n$d_Y(f(x),f(x'))\\le C$, outside the standard Hölder range adopted here.\n\n**Why the exponent is a rational and why it is at most $1$.** This library has no\nreal exponents ([[def-rational-power]]), so $\\alpha$ ranges over the rationals;\nthat is a limitation of the ambient toolkit and not of the notion. The upper\nbound $\\alpha \\le 1$ is the standard convention, and it is where the notion is\nuseful: the classical theory reserves the name for $\\alpha \\in (0,1]$, and\nnothing in this library uses an exponent outside that range. No claim is made\nhere about what an exponent $\\alpha > 1$ would do.\n\n**Constants are not unique and are not part of the data.** If $f$ is Lipschitz\nwith constant $L$ it is Lipschitz with every constant $L' \\ge L$, and likewise\nfor Hölder constants; the adjectives above are existential statements. A\n*contraction*, by contrast, requires a constant strictly below $1$, and that is a\nreal restriction: exhibiting the constant is part of exhibiting a contraction, and\na map that shrinks every distance without admitting one uniform constant is not a\ncontraction here.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-metric-regularity-hierarchy",
      "source_section": "Statement",
      "quote": "Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let\n$f : X \\to Y$ be a function, with the three regularity conditions as in\n[[def-lipschitz-holder-contraction]]. Then:\n\n1. If $f$ is a contraction, it is Lipschitz.\n2. If $f$ is Lipschitz, it is uniformly continuous\n   ([[def-metric-uniform-continuity]]).\n3. If $f$ is uniformly continuous, it is continuous\n   ([[def-metric-continuity]]).\n4. If $f$ is $\\alpha$-Hölder for some rational $\\alpha$ with $0 < \\alpha \\le 1$,\n   it is uniformly continuous.\n5. Suppose $X$ is nonempty and bounded, and put\n   $R := \\operatorname{diam}(X) + 1$, a real with $R > 0$\n   ([[def-metric-bounded-diameter]]). If $f$ is Lipschitz with constant $L$, then\n   for **every** rational $\\alpha$ with $0 < \\alpha \\le 1$ the map $f$ is\n   $\\alpha$-Hölder with constant $L\\,R^{\\,1-\\alpha}$.\n\n**Claim 5 carries its boundedness hypothesis for a reason, and no unconditional\n\"Lipschitz implies Hölder\" is asserted anywhere here.** On an unbounded space the\nimplication is false; the witness and its verification are in the first remark\nbelow.\n\n**Strictness is not claimed.** The five implications are asserted and nothing\nmore; that none of them reverses is witnessed elsewhere, and those witnesses are\nnot prerequisites of this theorem. See the second remark.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-real-and-metric-notions-agree",
      "source_section": "Statement",
      "quote": "Let $A \\subseteq \\mathbb{R}$ carry the subspace metric of the usual metric\n$d_{\\mathbb{R}}(x,y) = |x-y|$ of $\\mathbb{R}$, that is\n$d_A(x,y) = |x - y|$ for $x, y \\in A$\n([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]),\nand let $f : A \\to \\mathbb{R}$, regarded also as a map of metric spaces\n$(A, d_A) \\to (\\mathbb{R}, d_{\\mathbb{R}})$. Then the $\\mathbb{R}$-native\nnotions of this page and the metric-space notions of the earlier pages are the\n**same notions**, in the following five senses.\n\n1. **Continuity.** For every $c \\in A$: $f$ is continuous at $c$ in the sense of\n   [[def-continuity-real]] if and only if $f$ is continuous at $c$ in the sense\n   of [[def-metric-continuity]]. Consequently $f$ is continuous on $A$ if and\n   only if it is continuous as a map of metric spaces.\n2. **Uniform continuity.** $f$ is uniformly continuous on $A$ in the sense of\n   [[def-uniform-continuity-real]] if and only if it is uniformly continuous as\n   a map of metric spaces ([[def-metric-uniform-continuity]]).\n3. **Lipschitz.** For a real $L \\ge 0$: $f$ is Lipschitz with constant $L$ as a\n   map of metric spaces ([[def-lipschitz-holder-contraction]]) if and only if\n   $$|f(x) - f(x')| \\le L\\,|x - x'| \\qquad \\text{for all } x, x' \\in A .$$\n   This displayed condition is what \"$f$ is Lipschitz with constant $L$\" means\n   for a real function on $A$ in this library; no second definition is made.\n4. **Hölder.** For a rational $\\alpha$ with $0 < \\alpha \\le 1$ and a real\n   $C \\ge 0$: $f$ is $\\alpha$-Hölder with constant $C$ as a map of metric spaces\n   if and only if\n   $$|f(x) - f(x')| \\le C\\,|x - x'|^{\\alpha} \\qquad \\text{for all } x, x' \\in A ,$$\n   the power being the rational power of a nonnegative base\n   ([[def-rational-power]]).\n5. **Compactness, in both senses used in this library.** For $K \\subseteq\n   \\mathbb{R}$ with the subspace metric $d_K$:\n   - $K$ is compact in the open-cover sense of [[def-open-cover-r]] — every\n     family of open subsets of $\\mathbb{R}$ covering $K$ has a finite subfamily\n     covering $K$ — if and only if the metric space $(K, d_K)$ is compact\n     ([[def-metric-compactness]]);\n   - $K$ is sequentially compact in the sense of [[def-open-cover-r]] if and\n     only if $(K, d_K)$ is sequentially compact as a metric space\n     ([[def-metric-compactness-variants]]).\n\nTwo consequences are recorded, since they are the reason the dictionary is\nstated as a lemma rather than as a remark.\n\n6. **The regularity hierarchy transfers verbatim.** By clauses 1 to 4 and\n   [[thm-metric-regularity-hierarchy]]: a Lipschitz $f : A \\to \\mathbb{R}$ is\n   uniformly continuous on $A$; an $\\alpha$-Hölder $f$ with rational\n   $0 < \\alpha \\le 1$ is uniformly continuous on $A$; a uniformly continuous $f$\n   is continuous on $A$; and if $A$ is nonempty and bounded, a Lipschitz $f$ is\n   $\\alpha$-Hölder for every rational $\\alpha$ with $0 < \\alpha \\le 1$. No\n   strictness is claimed here, and none is claimed there.\n7. **Cauchy sequences transfer.** A sequence $(x_k)$ with terms in $A$ is Cauchy\n   in $(A, d_A)$ ([[def-cauchy-in-metric]]) if and only if it is Cauchy as a\n   sequence of reals ([[def-real-limit]]); so by clause 2 and\n   [[thm-uniform-continuity-preserves-cauchy]], a uniformly continuous\n   $f : A \\to \\mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of\n   $\\mathbb{R}$.\n\n**Why this lemma exists, and why it is a lemma.** Three results of this page —\n[[thm-continuous-image-of-a-compact-set-r]], [[thm-extreme-value-r]] and\n[[thm-heine-cantor-r]] — are stated a second time here, having already been\nproved metric-generally as\n[[thm-continuous-image-of-a-compact-space-is-compact]],\n[[thm-extreme-value-metric]] and [[thm-heine-cantor-metric]]. The duplication is\ndeliberate: the $\\mathbb{R}$-native proofs run through\n[[thm-heine-borel-characterisation-r]] and\n[[thm-compact-iff-sequentially-compact-r]], which are order-based, while the\nmetric proofs run through the cover machinery of metric spaces. **This item is\nthe single place in the library where that duplication is acknowledged**, and\nclauses 1 and 5 are what make the two families of statements literally the same\nstatements. It is a lemma, and not a remark, precisely so that later pages can\ncite it and move between the two vocabularies.\n\n**Clause 5 closes a second seam.** The phrase *compact subset of $\\mathbb{R}$*\nis defined twice in this library — metrically, as compactness of the metric\nsubspace ([[def-metric-compactness]]), and $\\mathbb{R}$-natively, by covers by\nopen subsets of $\\mathbb{R}$ ([[def-open-cover-r]]) — and until this clause no\nitem asserted that the two agree.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-uniform-continuity-real",
      "source_section": "Definition",
      "quote": "Let $A \\subseteq \\mathbb{R}$ and let $f : A \\to \\mathbb{R}$. Then $f$ is\n**uniformly continuous on $A$** when\n\n$$(\\forall \\varepsilon > 0)\\ (\\exists \\delta > 0)\\ (\\forall x, x' \\in A)\\ \\bigl[\\ |x - x'| < \\delta \\ \\Longrightarrow\\ |f(x) - f(x')| < \\varepsilon\\ \\bigr],$$\n\nwith $\\varepsilon$ and $\\delta$ ranging over the positive reals.\n\n**The whole content is in the order of the quantifiers.** Written out,\ncontinuity on $A$ ([[def-continuity-real]]) is\n\n$$\\forall \\varepsilon\\ \\forall c \\in A\\ \\exists \\delta\\ \\forall x \\in A ,$$\n\nand uniform continuity is\n\n$$\\forall \\varepsilon\\ \\exists \\delta\\ \\forall x' \\in A\\ \\forall x \\in A .$$\n\nMoving $\\exists \\delta$ to the left of the point quantifier is the entire\ndifference: for continuity the radius may shrink from point to point, for\nuniform continuity one radius must serve the whole of $A$ at once. This is the\nsame distinction, for the same reason, that [[def-metric-uniform-continuity]]\ndraws for maps of metric spaces.\n\n**Uniform continuity implies continuity.** Given $\\varepsilon > 0$, take the\n$\\delta$ supplied by uniform continuity and, at a point $c \\in A$, apply the\ncondition with $x' := c$: every $x \\in A$ with $|x - c| < \\delta$ satisfies\n$|f(x) - f(c)| < \\varepsilon$. So the same $\\delta$ witnesses continuity at\nevery point of $A$ simultaneously. The converse fails, and the failure is not\nmarginal: [[fs-continuity-implies-uniform-continuity]] refutes it on this page,\nand the companion page works two witnesses out in full.\n\n**Uniform continuity is a property of the pair $(f, A)$, not of $f$ alone.** The\nsame formula may be uniformly continuous on one set and not on another:\n$x \\mapsto 1/x$ is uniformly continuous on $[1,\\infty)$ and not on $(0,1)$, and\n$x \\mapsto x^{2}$ is uniformly continuous on every bounded interval and not on\n$\\mathbb{R}$. Restricting the domain therefore never destroys uniform\ncontinuity, since the condition then quantifies over fewer pairs; enlarging it\nmay.\n\n**The two points are unordered and may coincide.** Nothing above excludes\n$x = x'$, at which the implication reads $|f(x) - f(x)| = 0 < \\varepsilon$\n([[lem-of-abs-value]]) and is automatic, and the condition is symmetric in the\ntwo points because $|x - x'| = |x' - x|$.",
      "uses": [
        "5.1"
      ]
    },
    {
      "fact": "L8",
      "source": "prop-of-multiply-inequalities",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field. If $0 < a < b$ and $0 < c < d$ then $ac < bd$. If $0 \\le a \\le b$ and $0 \\le c \\le d$ then $ac \\le bd$.",
      "uses": [
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "cor-bounded-derivative-implies-lipschitz-step-1-1",
      "claim": "Let $x, y \\in I$. If $x = y$ then $|f(x)-f(y)| = |0| = 0$ and $M|x-y| = M \\cdot 0 = 0$, so the asserted inequality holds. Assume therefore $x \\ne y$, and put $u := \\min\\{x,y\\}$ and $v := \\max\\{x,y\\}$, so that $u, v \\in I$, $u < v$, and $|x - y| = v - u = |v - u|$ by [L5]. [given, L5]",
      "step": "1.1",
      "inputs": [
        "L5"
      ]
    },
    {
      "id": "cor-bounded-derivative-implies-lipschitz-step-2-1",
      "claim": "By [L2] the segment $[u,v]$ lies in $I$ and is nondegenerate; the restriction $f|_{[u,v]}$ is continuous on $[u,v]$ by [L4]; and each $x' \\in (u,v)$ is interior to $I$ by [L2], hence a point at which $f$ is differentiable with $|f'(x')| \\le M$, while $x'$ is a limit point of $[u,v]$ by [L3], so $f|_{[u,v]}$ is differentiable at $x'$ with the same derivative. [step 1.1, L2, L3, L4]",
      "step": "2.1",
      "inputs": [
        "L2",
        "L4",
        "L3",
        "1.1"
      ]
    },
    {
      "id": "cor-bounded-derivative-implies-lipschitz-step-3-1",
      "claim": "By step 2.1 the function $f|_{[u,v]}$ satisfies the hypotheses of [L1], so fix $c \\in (u,v)$ with $f(v) - f(u) = f'(c)\\,(v-u)$. [step 2.1, L1, choose]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L1"
      ]
    },
    {
      "id": "cor-bounded-derivative-implies-lipschitz-step-4-1",
      "claim": "Taking absolute values in step 3.1 and using $|uw| = |u||w|$ gives $|f(v)-f(u)| = |f'(c)|\\,|v-u|$. The point $c$ lies in $(u,v)$, hence is interior to $I$ by step 2.1, so $0 \\le |f'(c)| \\le M$; and $0 \\le |v-u| \\le |v-u|$. So [L8] gives $|f'(c)|\\,|v-u| \\le M\\,|v-u|$, whence $|f(v)-f(u)| \\le M\\,|v-u|$. Since $\\{u,v\\} = \\{x,y\\}$ and $|f(v)-f(u)| = |f(x)-f(y)|$ by [L5], and $|v-u| = |x-y|$ by step 1.1, this is $|f(x)-f(y)| \\le M\\,|x-y|$. [step 2.1, step 3.1, L5, L8]",
      "step": "4.1",
      "inputs": [
        "3.1",
        "2.1",
        "L8",
        "L5",
        "1.1"
      ]
    },
    {
      "id": "cor-bounded-derivative-implies-lipschitz-step-5-1",
      "claim": "The pair $x, y \\in I$ was arbitrary and the case $x = y$ was settled in step 1.1, so $|f(x)-f(y)| \\le M|x-y|$ for all $x, y \\in I$. By [L6] that is the statement that $f$ is Lipschitz with constant $M$ on $I$, and by [L7] such an $f$ is uniformly continuous on $I$. [step 1.1, step 4.1, L6, L7] ∎",
      "step": "5.1",
      "inputs": [
        "1.1",
        "L6",
        "L7",
        "4.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement fixes concrete points/functions and has no empty family or empty-domain branch."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.1 explicitly includes the zero-valued, vanishing, or zero-index case."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 2.1 explicitly includes the unit, singleton, or first-index case."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The claim is local or algebraic and has no interval-length or repeated-endpoint boundary."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 2.1 explicitly keeps endpoints/interior points within the stated relative-domain convention."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 supplies each displayed witness by formula or by the cited existence premise before using it."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The stated result is not a biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The stated result is not a biconditional."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "cor-bounded-derivative-implies-lipschitz",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "cor-mean-value-theorem",
    "declared_target": "cor-mean-value-theorem",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bounded-derivative-implies-lipschitz",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "def-derivative",
    "declared_target": "def-derivative",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bounded-derivative-implies-lipschitz",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
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
    "source": "cor-bounded-derivative-implies-lipschitz",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bounded-derivative-implies-lipschitz",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "def-uniform-continuity-real",
    "declared_target": "def-uniform-continuity-real",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bounded-derivative-implies-lipschitz",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "lem-real-and-metric-notions-agree",
    "declared_target": "lem-real-and-metric-notions-agree",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bounded-derivative-implies-lipschitz",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "def-lipschitz-holder-contraction",
    "declared_target": "def-lipschitz-holder-contraction",
    "target_statement_provenance": "ai-altered",
    "targetPage": "completeness-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bounded-derivative-implies-lipschitz",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "thm-metric-regularity-hierarchy",
    "declared_target": "thm-metric-regularity-hierarchy",
    "target_statement_provenance": "ai-altered",
    "targetPage": "completeness-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bounded-derivative-implies-lipschitz",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
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
    "source": "cor-bounded-derivative-implies-lipschitz",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "def-interior-closure-boundary-r",
    "declared_target": "def-interior-closure-boundary-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-bounded-derivative-implies-lipschitz",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
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
    "source": "cor-bounded-derivative-implies-lipschitz",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
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
    "source": "cor-bounded-derivative-implies-lipschitz",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
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
    "source": "cor-bounded-derivative-implies-lipschitz",
    "sourcePage": "the-derivative-and-mean-value-theorems",
    "batch": "wave10-real-analysis",
    "target": "cex-differentiable-with-unbounded-derivative-is-not-lipschitz",
    "declared_target": "cex-differentiable-with-unbounded-derivative-is-not-lipschitz",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems-examples",
    "targetBatch": "wave10-real-analysis",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (14)

### `cex-differentiable-with-unbounded-derivative-is-not-lipschitz`

````markdown
---
id: cex-differentiable-with-unbounded-derivative-is-not-lipschitz
kind: counterexample
title: "$x \\mapsto \\sqrt{x}$ on $(0,1]$ is differentiable with unbounded derivative and is not Lipschitz there, so the boundedness hypothesis in the Lipschitz corollary cannot be dropped"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-bounded-derivative-implies-lipschitz, ex-derivative-of-the-nth-root-by-the-inverse-rule, def-derivative, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, thm-nth-roots-exist, def-bounded-set, def-interval, lem-real-and-metric-notions-agree, def-lipschitz-holder-contraction, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-sign-rules, prop-of-multiply-inequalities, lem-power-monotone, def-integer-power, cor-differentiable-implies-continuous, def-interior-closure-boundary-r, def-neighbourhood-r, def-canonical-natural, lem-of-naturals-positive, lem-of-abs-value, def-limit-point-r]
justified_by: []
aliases: []
landmark: true
short: "unbounded derivative, not Lipschitz"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Square root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_root"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Práctica 5: Continuidad uniforme (UNLP)"
      url: "https://www.mate.unlp.edu.ar/practicas/51_5_0505202117553.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** let $I \subseteq \mathbb{R}$ be order-convex
([[def-interval]]) and let $h : I \to \mathbb{R}$ be continuous on $I$ and
differentiable at every interior point of $I$ ([[def-derivative]]). Then $h$ is
Lipschitz on $I$, that is, there is a real $L \ge 0$ with
$|h(x)-h(y)| \le L|x-y|$ for all $x, y \in I$
([[def-lipschitz-holder-contraction]], clause 3 of
[[lem-real-and-metric-notions-agree]]).

That is [[cor-bounded-derivative-implies-lipschitz]] with the hypothesis
$|h'| \le M$ deleted. It is false, and the witness is the square root on
$(0,1]$: an interval on which the derivative exists at every interior point and
is bounded above by no real.

## Facts & Assumptions

**Given:** The set $I := (0,1]$, order-convex with at least two elements ([[def-interval]]), and the function $s : I \to \mathbb{R}$, $s(b) := b^{1/2}$, the nonnegative square root ([[thm-nth-roots-exist]], [[def-rational-power]]); numerals denote canonical naturals ([[def-canonical-natural]]).

[L1] Derivative of the square root ([[ex-derivative-of-the-nth-root-by-the-inverse-rule]], at $n = 2$, with the restriction clause of [[def-derivative]] and $I \subseteq (0,\infty)$): $s$ is differentiable at every $b \in I$ with $s'(b) = \frac{1}{\iota(2)}b^{-1/2}$, every point of $I$ being a limit point of $I$ ([[def-limit-point-r]]).

[L2] A function differentiable at a point is continuous there ([[cor-differentiable-implies-continuous]]).

[L3] Uniqueness of the nonnegative square root ([[thm-nth-roots-exist]]): for $a \ge 0$ there is exactly one $t \ge 0$ with $t^{2} = a$, and it is $a^{1/2}$ ([[def-rational-power]], [[def-integer-power]]).

[L4] Rational powers ([[lem-rational-power-laws]], [[lem-rational-power-monotone]]): $a^{r} > 0$ for $a > 0$; $a^{-r} = 1/a^{r}$; $(a^{r})^{s} = a^{rs}$; and for rational $r > 0$, $0 < a < b$ implies $a^{r} < b^{r}$ (claim 2 of the monotonicity lemma).

[L5] Archimedean property in reciprocal form ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]): for every real $\varepsilon > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \varepsilon$.

[L6] Order and numeral arithmetic ([[lem-of-inverse-positive]], [[lem-of-sign-rules]], [[prop-of-multiply-inequalities]], [[lem-of-naturals-positive]], [[lem-power-monotone]], [[lem-of-abs-value]], [[def-canonical-natural]]): $\iota(m) > 0$ for $m \ge 1$; $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]); a product of positives is positive and multiplying a STRICT inequality by a positive real preserves it ([[lem-of-sign-rules]]); the NONSTRICT form, $0 \le x \le y$ and $0 \le u \le v$ imply $xu \le yv$, is not stated by [[lem-of-sign-rules]], whose multiplicative claims are strict, but by [[prop-of-multiply-inequalities]], and it is what licenses both multiplying a $\le$ by a positive real and dividing a $\le$ by one, the divisor entering as its positive inverse; $0 \le a \le b$ gives $a^{2} \le b^{2}$ ([[lem-power-monotone]], claim 2); $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]); and $\iota(mn) = \iota(m)\iota(n)$ and $\iota(m+n) = \iota(m)+\iota(n)$ for naturals $m, n \ge 1$, so $\iota(2)^{2} = \iota(4)$, $\iota(2) - 1 = 1$ and $\iota(4) - 1 = \iota(3)$.

[L7] Interiority and boundedness ([[def-interior-closure-boundary-r]], [[def-neighbourhood-r]], [[def-bounded-set]]): $p$ is interior to $S$ exactly when $N_{\varepsilon}(p) \subseteq S$ for some real $\varepsilon > 0$; and a set of reals is bounded above when some real exceeds or equals all of its elements.

[L8] The corollary under test ([[cor-bounded-derivative-implies-lipschitz]]) additionally requires a real $M \ge 0$ with $|h'| \le M$ at every interior point.

## Counterexample

**Proof technique:** direct.

1.1 By [L1] the function $s$ is differentiable at every $b \in I$ with $s'(b) = \frac{1}{\iota(2)}b^{-1/2} > 0$, using [L4] and [L6]; and by [L2] it is continuous at every point of $I$, hence continuous on $I$. [L1, L2, L4, L6]

1.2 The interior points of $I = (0,1]$ are exactly the reals $b$ with $0 < b < 1$: for such a $b$ the neighbourhood $N_{\rho}(b)$ with $\rho := \min\{b,\ 1-b\} > 0$ lies in $(0,1) \subseteq I$; the point $1$ is not interior, since $1 + \varepsilon/2 \in N_{\varepsilon}(1)$ and $1 + \varepsilon/2 \notin I$ for every real $\varepsilon > 0$; and every interior point lies in $I$. [L7]

2.1 **The derivative is bounded above by no real.** Let $K$ be a real. If $K \le 0$, any $b$ with $0 < b < 1$ has $s'(b) > 0 \ge K$ by step 1.1. If $K > 0$, put $\beta := \bigl(1/(\iota(2)K)\bigr)^{2}$, a positive real, and use [L5] to fix a natural $m \ge 1$ with $1/\iota(m) < \min\{\beta,\ 1\}$; put $b := 1/\iota(m)$, so $0 < b < 1$ and $b < \beta$. By [L4], $b^{1/2} < \beta^{1/2} = \bigl(1/(\iota(2)K)\bigr)^{2 \cdot (1/2)} = 1/(\iota(2)K)$, so $b^{-1/2} = 1/b^{1/2} > \iota(2)K$ by [L6], and hence $s'(b) = \frac{1}{\iota(2)}b^{-1/2} > K$. So for every real $K$ there is an interior point $b$ of $I$ with $s'(b) > K$, and the set of values of $s'$ on the interior of $I$ is bounded above by no real. [step 1.1, step 1.2, L4, L5, L6, L7]

2.2 **$s$ is not Lipschitz on $I$.** Suppose some real $L \ge 0$ satisfied $|s(x)-s(y)| \le L|x-y|$ for all $x, y \in I$. Let $t$ be a real with $0 < t \le 1/\iota(2)$, and put $x := t^{2}$ and $y := \iota(4)t^{2}$. Then $0 < x \le y = \iota(4)t^{2} \le \iota(4)/\iota(4) = 1$, so $x, y \in I$; and $s(x) = t$ and $s(y) = \iota(2)t$ by [L3], since $t \ge 0$ with $t^{2} = x$ and $\iota(2)t \ge 0$ with $(\iota(2)t)^{2} = \iota(4)t^{2} = y$. Hence $|s(y)-s(x)| = \iota(2)t - t = t$ and $|y - x| = \iota(3)t^{2}$ by [L6], and the supposition gives $t \le L\,\iota(3)t^{2}$; dividing by $t > 0$ gives $1 \le \iota(3)Lt$ for every such $t$. Taking $t := 1/\iota(2)$ shows $\iota(3)L/\iota(2) \ge 1$, so $L > 0$. Now use [L5] to fix a natural $m \ge 1$ with $1/\iota(m) < 1/(\iota(3)L)$ and put $t := \min\{1/\iota(m),\ 1/\iota(2)\}$, a real with $0 < t \le 1/\iota(2)$; then $\iota(3)Lt \le \iota(3)L/\iota(m) < 1$, contradicting $1 \le \iota(3)Lt$. So no such $L$ exists. [step 1.1, L3, L4, L5, L6]

3.1 The refuted claim therefore fails at $I := (0,1]$ and $h := s$: by step 1.1 the function $s$ is continuous on the order-convex set $I$ and differentiable at every point of $I$, in particular at every interior point of $I$ by step 1.2, and yet by step 2.2 it is not Lipschitz on $I$. Nothing in [L8] is contradicted: by step 2.1 no real $M$ bounds $|s'|$ on the interior of $I$, so the hypothesis deleted from that corollary is exactly the one that fails. [step 1.1, step 1.2, step 2.1, step 2.2, L8] ∎

## Remarks

- **The two failures are separate statements, and both are proved.** That the derivative is unbounded (step 2.1) does not by itself refute the claim, since the claim is about a Lipschitz bound and not about $s'$; and the Lipschitz bound is refuted directly, by a pair of points whose square roots differ by $t$ while the points themselves differ by $\iota(3)t^{2}$. Only step 2.1 is needed to say **which** hypothesis of [[cor-bounded-derivative-implies-lipschitz]] is the one that fails.

- **Contrast with the same function on $[1,\infty)$.** There the derivative is bounded by $1/\iota(2)$ and the corollary applies, which is [[ex-mean-value-theorem-bounds-the-square-root-increment]] on this page. The function is the same; the interval is what decides. That is the sense in which the Lipschitz property is a property of the pair (function, domain), exactly as [[def-uniform-continuity-real]] records for uniform continuity.

- **What is not claimed.** This item asserts the failure of the Lipschitz condition on $(0,1]$ and nothing more. In particular nothing above says whether $s$ is uniformly continuous on $(0,1]$, nor whether it satisfies a Hölder condition of some exponent below $1$ there; those are separate questions, and no item on this page is entitled to be cited for either.
````

### `cor-mean-value-theorem`

````markdown
---
id: cor-mean-value-theorem
kind: corollary
title: "The mean value theorem, as the case $g(x) = x$ of Cauchy's: for $f$ continuous on $[a,b]$ with $a < b$ and differentiable on $(a,b)$ there is $c \\in (a,b)$ with $f(b) - f(a) = f'(c)(b-a)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchy-mean-value, def-derivative, def-continuity-real, thm-algebra-of-continuous-functions, def-interval, def-function-limit]
justified_by: []
forward_refs: [cex-mean-value-theorem-fails-without-continuity-at-the-endpoints]
aliases: [thm-mean-value-theorem, thm-lagrange-mean-value]
landmark: true
short: "the mean value theorem"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.10)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, Mean Value Theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a < b$ and let $f : [a,b] \to \mathbb{R}$ be
continuous on $[a,b]$ ([[def-continuity-real]], [[def-interval]]) and
differentiable at every point of $(a,b)$ as a function on $[a,b]$
([[def-derivative]]). Then there is $c \in (a,b)$ with

$$f(b) - f(a) \;=\; f'(c)\,(b - a) .$$

Equivalently, since $b - a \ne 0$, there is $c \in (a,b)$ at which
$f'(c) = \bigl(f(b)-f(a)\bigr)/(b-a)$: the derivative somewhere inside equals
the average rate of change across the whole interval.

**Continuity on the closed interval cannot be dropped.** Differentiability at
every point of $(a,b)$ alone does not suffice: a function on $[0,1]$,
differentiable at every point of $(0,1)$ with derivative constantly $1$, for
which no $c$ works, is exhibited later on this page as a false statement, and
the companion page works the same witness out in full.

## Facts & Assumptions

**Given:** Reals $a < b$ and a function $f : [a,b] \to \mathbb{R}$ continuous on $[a,b]$ and differentiable at every point of $(a,b)$.

[L1] Cauchy's mean value theorem ([[thm-cauchy-mean-value]]): for $f, g$ continuous on $[a,b]$ and differentiable at every point of $(a,b)$ there is $c \in (a,b)$ with $\bigl(f(b)-f(a)\bigr)g'(c) = \bigl(g(b)-g(a)\bigr)f'(c)$.

[L2] The identity $x \mapsto x$ is continuous at every point of any $A \subseteq \mathbb{R}$ ([[thm-algebra-of-continuous-functions]], claim 5).

[L3] The identity $g$ on $[a,b]$ is differentiable at every $c \in [a,b]$ with $g'(c) = 1$: with $a < b$ the set $[a,b]$ is order-convex with at least two elements, so every one of its points is a limit point of it ([[def-derivative]], [[def-interval]]); and the difference quotient of $g$ at $c$ is $(x - c)/(x - c) = 1$ for every $x \in [a,b]$ with $x \ne c$, a constant function, whose limit at $c$ is $1$ ([[def-function-limit]], [[def-derivative]]).

## Proof

**Proof technique:** direct.

1.1 Define $g : [a,b] \to \mathbb{R}$ by $g(x) := x$. [construct]

2.1 $g$ is continuous on $[a,b]$ by [L2]; it is differentiable at every $c \in (a,b)$ with $g'(c) = 1$ by [L3]; and $g(b) - g(a) = b - a$. [step 1.1, L2, L3]

3.1 By step 2.1 the pair $f, g$ satisfies every hypothesis of [L1], so there is $c \in (a,b)$ with $\bigl(f(b)-f(a)\bigr)g'(c) = \bigl(g(b)-g(a)\bigr)f'(c)$. Substituting $g'(c) = 1$ and $g(b)-g(a) = b-a$ gives $f(b) - f(a) = f'(c)(b-a)$. [step 2.1, L1] ∎

## Remarks

- **The geometric reading, and what it is not.** The conclusion says that some tangent line is parallel to the chord from $(a, f(a))$ to $(b, f(b))$. It does not say which one, it does not say there is only one, and it says nothing at all about $f$ between the endpoints beyond the hypotheses. Every use of the theorem on this page is a use of the equation, never of the picture.

- **Why this is a corollary and not the primitive statement.** [[thm-cauchy-mean-value]] is proved from [[thm-rolle]] with one auxiliary function, and this statement is that theorem at $g(x) = x$; deriving it the other way round, from this statement to Cauchy's, is also possible but needs an auxiliary function of its own, so nothing is saved. What matters is that both rest on Rolle, and Rolle on the extreme value theorem.

- **The two hypotheses are on different sets on purpose.** Continuity is asked for on the closed interval and differentiability only on the open one, so nothing at all is required of the difference quotients at $a$ and at $b$. Weakening the continuity in step with the differentiability, so that both are asked for on $(a,b)$ only, destroys the theorem, which is exactly what [[cex-mean-value-theorem-fails-without-continuity-at-the-endpoints]] shows on the companion page.
````

### `def-continuity-real`

````markdown
---
id: def-continuity-real
kind: definition
title: "Continuity of $f : A \\to \\mathbb{R}$ at a point of $A$ and on $A$: the $\\varepsilon$-$\\delta$ condition, its agreement with $\\lim_{x \\to c} f(x) = f(c)$ at a limit point, and continuity at an isolated point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, def-open-and-closed-in-r, def-interval, lem-of-abs-value, def-complete-ordered-field]
justified_by: []
aliases: [def-continuity-at-a-point-r]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "continuity of a real function"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.1: Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.01%3A_Basic_Definitions"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field with its order and
absolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and
neighbourhoods are those of [[def-neighbourhood-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. Then
$f$ is **continuous at $c$** when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ |x - c| < \delta \ \Longrightarrow\ |f(x) - f(c)| < \varepsilon\ \bigr],$$

with $\varepsilon$ and $\delta$ ranging over the **positive reals**. In the
language of neighbourhoods: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ with

$$f\bigl(A \cap N_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}\bigl(f(c)\bigr).$$

$f$ is **continuous on $A$** when it is continuous at every point of $A$.

**The point $c$ is required to lie in $A$, and the condition is unpunctured.**
Both differ from [[def-function-limit]], and deliberately. There the quantifier
runs over $0 < |x - c| < \delta$, which removes $x = c$; here $x = c$ is allowed,
and at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \varepsilon$, which is
automatic. So allowing $x = c$ costs nothing, and it is what lets the definition
be stated at every point of $A$, including the points where no limit exists.

**Three clauses, and all three are part of the definition.**

1. **At a limit point.** Suppose $c \in A$ is a limit point of $A$
   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the
   limit of $f$ at $c$ exists and
   $$\lim_{x \to c} f(x) \;=\; f(c)$$
   ([[def-function-limit]]). Indeed, for a given $\varepsilon > 0$ a $\delta$
   witnessing continuity witnesses the limit condition, because the limit
   condition quantifies over a subset of the points continuity quantifies over;
   and conversely a $\delta$ witnessing $\lim_{x \to c} f(x) = f(c)$ witnesses
   continuity, because the one point it omits, $x = c$, satisfies
   $|f(c) - f(c)| < \varepsilon$ anyway.

2. **At an isolated point.** Suppose $c \in A$ is an isolated point of $A$
   ([[def-limit-point-r]]), so that $N_{\eta}(c) \cap A = \{c\}$ for some real
   $\eta > 0$. Then **every** $f : A \to \mathbb{R}$ is continuous at $c$: take
   $\delta := \eta$, so that the only $x \in A$ with $|x - c| < \delta$ is $c$
   itself, and $|f(c) - f(c)| = 0 < \varepsilon$.

3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and
   nothing more. It is not a condition relating $f$ to points outside $A$.

Every point of $A$ is either a limit point of $A$ or an isolated point of $A$,
and never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe
continuity at every point of $A$.

**This is not the raw $\varepsilon$-$\delta$ formula of
[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes
wrong when the *punctured* formula of [[def-function-limit]] is written down at
an arbitrary point of the domain: at an isolated point it is satisfied
vacuously by every real $L$ at once, so it defines nothing, and this library
therefore leaves $\lim_{x \to c} f(x)$ **undefined** at an isolated point.
Continuity at an isolated point is a different matter: the formula above is not
vacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the
only value being compared with itself — and it names a single, well-defined
property. The limit is undefined there; the continuity is defined, and is
automatic. Clause 1 is the only place where the two notions meet, and it is
stated only where the limit exists as a notion.

**Where the distinction disappears.** If $A$ is an open subset of $\mathbb{R}$
([[def-open-and-closed-in-r]]), then every $c \in A$ has some
$N_{\eta}(c) \subseteq A$, and a punctured neighbourhood is never empty
([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and
clause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate
interval ([[def-interval]]). Isolated points are what force clause 2 to exist at
all, and they occur as soon as $A$ is allowed to be an arbitrary subset of
$\mathbb{R}$, as in $A = \{0\} \cup [1,2]$.

## Remarks

- **Continuity is local.** If $\eta > 0$ and $g : A \to \mathbb{R}$ agrees with
  $f$ on $A \cap N_{\eta}(c)$, then $f$ is continuous at $c$ if and only if $g$
  is: any $\delta$ may be replaced by $\min\{\delta, \eta\}$, after which the
  condition only ever evaluates the two functions where they agree. So
  continuity at $c$ sees only an arbitrarily small neighbourhood of $c$, exactly
  as the limit does ([[lem-limit-is-local]]).

- **Continuity passes to subsets of the domain.** If $B \subseteq A$ and
  $c \in B$, then continuity of $f$ at $c$ gives continuity of the restriction
  $f|_B$ at $c$, with the same $\delta$: the condition on $f|_B$ quantifies over
  fewer points. The converse fails, and the standard witness is the indicator of
  $\mathbb{Q}$ restricted to $\mathbb{Q}$, which is constant and hence
  continuous, while the indicator itself is continuous nowhere
  ([[cex-dirichlet-is-nowhere-continuous]]).

- **The radius is a real number.** As in [[def-neighbourhood-r]], $\varepsilon$
  and $\delta$ range over the positive reals here. Restricting either quantifier
  to the positive rationals defines the same relation, by the passage recorded
  in [[def-function-limit]]: below every positive real lies a positive rational
  ([[lem-rat-embeds-dense]]), and a real $\delta$ may be shrunk to a rational
  one below it.

- **The word *continuous* is used for two things in this library, and they
  agree.** [[def-metric-continuity]] defines continuity of a map between metric
  spaces, and $A \subseteq \mathbb{R}$ carries the metric $d(x,y) = |x-y|$. The
  two notions coincide, and that is proved, not assumed:
  [[lem-real-and-metric-notions-agree]] is the dictionary, and it is stated on
  this page precisely so that no later item has to guess.
````

### `def-derivative`

````markdown
---
id: def-derivative
kind: definition
title: "The derivative $f'(c) = \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c}$ of $f : A \\to \\mathbb{R}$ at a point $c \\in A$ that is a limit point of $A$, and differentiability on a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, lem-function-limit-unique, def-limit-point-r, def-interval, def-neighbourhood-r, def-complete-ordered-field, def-continuity-real, lem-limit-is-local]
justified_by: []
forward_refs: [cex-absolute-value-is-not-differentiable-at-zero]
aliases: [def-differentiable, def-differentiability]
landmark: true
short: "the derivative at a point"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Def. 5.1)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §10.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
    - title: "J. Lebl, Basic Analysis I, The Derivative"
      url: "https://www.jirka.org/ra/html/der_chapter.html"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]), neighbourhoods are those of
[[def-neighbourhood-r]] and limit points those of [[def-limit-point-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$ be a
**limit point of $A$**. The **difference quotient of $f$ at $c$** is the function

$$q_{f,c} : A \setminus \{c\} \to \mathbb{R}, \qquad q_{f,c}(x) := \frac{f(x) - f(c)}{x - c} .$$

The division is legitimate at every point of the domain, since $x \ne c$ gives
$x - c \ne 0$.

**The point $c$ is a limit point of $A \setminus \{c\}$, not merely of $A$.**
For every real $\varepsilon > 0$ the punctured neighbourhood
$N^{*}_{\varepsilon}(c)$ omits $c$, so

$$N^{*}_{\varepsilon}(c) \cap A \;=\; N^{*}_{\varepsilon}(c) \cap (A \setminus \{c\}) ,$$

and the left-hand side is nonempty because $c$ is a limit point of $A$. So
$q_{f,c}$ is a function on a set having $c$ as a limit point, and
$\lim_{x \to c} q_{f,c}(x)$ is a notion that [[def-function-limit]] defines.

$f$ is **differentiable at $c$** when that limit exists, and then the
**derivative of $f$ at $c$** is

$$f'(c) \;:=\; \lim_{x \to c} q_{f,c}(x) \;=\; \lim_{x \to c} \frac{f(x) - f(c)}{x - c} .$$

**Two obligations are carried by that notation, and both are discharged here.**

1. **Uniqueness.** Writing $f'(c)$ treats the right-hand side as a name for a
   single real number. That is legitimate: $c$ is a limit point of the domain
   $A \setminus \{c\}$ of $q_{f,c}$, so at most one real can satisfy the
   $\varepsilon$-$\delta$ condition, by [[lem-function-limit-unique]] applied to
   $q_{f,c}$. Two reals both meeting the condition are therefore equal, and the
   symbol denotes.
2. **Meaningfulness.** The hypothesis that $c$ is a limit point of $A$ is not
   decoration. At an **isolated** point of $A$ the punctured condition
   $0 < |x - c| < \delta$ is met by no point of the domain at all, so the
   $\varepsilon$-$\delta$ formula is satisfied vacuously by *every* real at
   once; this is why [[def-function-limit]] leaves the limit undefined there,
   and it is why this library defines $f'(c)$ only at a limit point of $A$. At
   an isolated point of its domain a function is neither differentiable nor
   non-differentiable here: the question is not posed.

**The limit sees only $A \setminus \{c\}$, so how the difference quotient is
extended to $c$ is irrelevant.** Let $Q : A \to \mathbb{R}$ agree with
$q_{f,c}$ at every point of $A \setminus \{c\}$, and let $L \in \mathbb{R}$.
Then $\lim_{x \to c} Q(x) = L$ if and only if $\lim_{x \to c} q_{f,c}(x) = L$.
Both conditions read: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that every point $x$ of the relevant domain with
$0 < |x - c| < \delta$ satisfies $|{\cdot} - L| < \varepsilon$
([[def-function-limit]]). The clause $0 < |x - c|$ removes $x = c$ from both
quantifiers, so in both cases the points quantified over are exactly the
$x \in A \setminus \{c\}$ with $0 < |x - c| < \delta$, at which $Q$ and
$q_{f,c}$ take the same value. The two conditions are the same condition.

**Differentiability on a set.** For $S \subseteq A$, $f$ is **differentiable on
$S$** when it is differentiable at every $c \in S$; implicit in that phrase is
that every point of $S$ is a limit point of $A$. $f$ is **differentiable** when
it is differentiable on the whole of $A$.

**Restriction of the domain.** Let $B \subseteq A$, let $c \in B$ and suppose
$c$ is a limit point of $B$. If $f$ is differentiable at $c$, then so is the
restriction $f|_B : B \to \mathbb{R}$, and

$$(f|_B)'(c) \;=\; f'(c) .$$

Indeed $B \setminus \{c\} \subseteq A \setminus \{c\}$; the displayed identity
of punctured neighbourhoods above, applied to $B$, shows that $c$ is a limit
point of $B \setminus \{c\}$; the difference quotient $q_{f|_B, c}$ is the
restriction of $q_{f,c}$ to $B \setminus \{c\}$, since $f|_B(c) = f(c)$; and
claim 2 of [[lem-limit-is-local]] carries the limit to that restriction.

**Every point of a nondegenerate interval is a limit point of it.** Let
$J \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) with at least two
elements and let $p \in J$. Choose $q \in J$ with $q \ne p$, and let a real
$\varepsilon > 0$ be given. If $p < q$, put $y := p + \tfrac{1}{2}\min\{\varepsilon,\ q - p\}$;
then $p < y$, and $y - p \le \tfrac{1}{2}(q-p) < q - p$, so $p < y < q$ and
order-convexity gives $y \in J$, while $0 < |y - p| < \varepsilon$. If $q < p$,
the point $y := p - \tfrac{1}{2}\min\{\varepsilon,\ p - q\}$ serves in the same
way. So $N^{*}_{\varepsilon}(p) \cap J \ne \varnothing$ for every real
$\varepsilon > 0$, that is, $p$ is a limit point of $J$
([[def-limit-point-r]]).

Consequently, for $f$ defined on a nondegenerate interval $I$, the symbol
$f'(c)$ is meaningful at **every** $c \in I$, endpoints included. At an endpoint
the difference quotient is taken over the points of $I$ lying on the one side
that is available, so what other texts call a one-sided derivative is, here,
simply the derivative of $f$ on $I$.

## Remarks

- **Notation.** $f'(c)$ and $\frac{df}{dx}(c)$ denote the same real number, and
  this library uses the first. Neither is an operation performed on a symbol
  $x$: the variable in the second is a name for the argument and nothing more.

- **Differentiability is a property of the pair $(f, A)$ at $c$, not of $f$
  alone.** The restriction clause above goes in one direction only, and the
  converse fails. Take $A := \mathbb{R}$, $f(x) := |x|$, $B := [0,\infty)$ and
  $c := 0$. Then $f|_B$ is the identity on $B$, whose difference quotient at $0$
  is constantly $1$, so $f|_B$ is differentiable at $0$ with derivative $1$;
  that $f$ itself is not differentiable at $0$ is
  [[cex-absolute-value-is-not-differentiable-at-zero]] on the companion page.
  So enlarging the domain can destroy differentiability, and the phrase
  "$f$ is differentiable at $c$" always carries the domain with it.

- **The relation to continuity is not definitional.** [[def-continuity-real]]
  is a condition on $f$ near $c$ that does not mention a quotient, and it is
  defined at every point of $A$, isolated points included, whereas
  differentiability is defined only at limit points of $A$. That
  differentiability implies continuity is a theorem on this page and not a
  reading of the definitions.

- **No second derivative and no one-sided derivative is introduced here.**
  Both are standard, and both are absent from this page on purpose;
  [[rem-derivative-conventions]] records exactly what is fixed and what is left
  open at this point in the reading order.
````

### `def-interior-closure-boundary-r`

````markdown
---
id: def-interior-closure-boundary-r
kind: definition
title: "Interior, closure, boundary and exterior of a subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-open-and-closed-in-r, def-neighbourhood-r, thm-open-set-algebra-r]
justified_by: []
aliases: []
landmark: true
short: "$A^{\\circ}$, $\\overline{A}$, $\\partial A$"
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
    - title: "Interior (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interior_(topology)"
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Boundary (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boundary_(topology)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, with open and closed sets as in
[[def-open-and-closed-in-r]].

- The **interior** of $A$ is the union of all open subsets of $A$:
  $$A^{\circ} \;:=\; \bigcup \{\, U \subseteq \mathbb{R} : U \text{ open and } U \subseteq A \,\}.$$
- The **closure** of $A$ is the intersection of all closed supersets of $A$:
  $$\overline{A} \;:=\; \bigcap \{\, F \subseteq \mathbb{R} : F \text{ closed and } A \subseteq F \,\}.$$
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus A^{\circ}$.
- The **exterior** of $A$ is $\operatorname{ext} A := (\mathbb{R} \setminus A)^{\circ}$.

**Both operators are well defined and deliver what their names claim.** The
family whose union defines $A^{\circ}$ always contains $\varnothing$, and the
family whose intersection defines $\overline{A}$ always contains $\mathbb{R}$,
so the second family is nonempty and both expressions denote subsets of
$\mathbb{R}$ without appeal to any convention about empty unions or
intersections. Moreover:

- $A^{\circ}$ is **open**, being a union of open sets
  ([[thm-open-set-algebra-r]], claim 1), and $A^{\circ} \subseteq A$, since
  every set in the family is a subset of $A$. It is therefore the **largest**
  open subset of $A$: any open $U \subseteq A$ is a member of the family and so
  $U \subseteq A^{\circ}$.
- $\overline{A}$ is **closed**, being an intersection of a nonempty family of
  closed sets ([[thm-open-set-algebra-r]], claim 3), and $A \subseteq
  \overline{A}$, since every set in the family contains $A$. It is therefore the
  **smallest** closed superset of $A$: any closed $F \supseteq A$ is a member of
  the family and so $\overline{A} \subseteq F$.

**Pointwise description of the interior.** For $x \in \mathbb{R}$,

$$x \in A^{\circ} \iff \text{there is } \varepsilon > 0 \text{ with } N_\varepsilon(x) \subseteq A .$$

If $x \in A^{\circ}$ then, $A^{\circ}$ being open and containing $x$, there is
$\varepsilon > 0$ with $N_\varepsilon(x) \subseteq A^{\circ} \subseteq A$.
Conversely if $N_\varepsilon(x) \subseteq A$ then $N_\varepsilon(x)$ is an open
subset of $A$ ([[def-open-and-closed-in-r]]) containing $x$, hence
$x \in N_\varepsilon(x) \subseteq A^{\circ}$ ([[def-neighbourhood-r]]).

The corresponding pointwise description of the closure is not a definitional
matter and is proved separately, as [[thm-closure-characterisations-r]].

## Remarks

- **The four sets partition nothing by themselves, but three of them do.** For
  every $A$ the three sets $A^{\circ}$, $\partial A$ and $\operatorname{ext} A$
  are pairwise disjoint with union $\mathbb{R}$. This is not proved here and is
  not used on this page; what is used is only the definitions above and the
  characterisations of [[thm-closure-characterisations-r]].

- **Interior and closure are dual.** Complementation exchanges the two families
  above, since $U$ is open exactly when $\mathbb{R} \setminus U$ is closed, so
  $\mathbb{R} \setminus A^{\circ} = \overline{\mathbb{R} \setminus A}$ and
  $\mathbb{R} \setminus \overline{A} = (\mathbb{R} \setminus A)^{\circ} =
  \operatorname{ext} A$. The second identity is the reason the exterior is
  usually described as "the complement of the closure".

- **$A$ is open exactly when $A = A^{\circ}$, and closed exactly when
  $A = \overline{A}$.** For the first: $A^{\circ} \subseteq A$ always, and
  $A \subseteq A^{\circ}$ holds exactly when $A$ is one of the open subsets of
  $A$, that is, exactly when $A$ is open. The closure half is the same argument
  read the other way, and it is recorded as a claim of
  [[thm-closure-characterisations-r]] because the rest of that theorem needs it.

- **Boundary points may or may not belong to the set.** $\partial (0,1) =
  \partial [0,1] = \{0,1\}$, and the two boundary points lie outside the first
  set and inside the second; the boundary sees only the way the set meets its
  complement, not which side the edge is assigned to.
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

### `def-lipschitz-holder-contraction`

````markdown
---
id: def-lipschitz-holder-contraction
kind: definition
title: "Lipschitz map, $\\alpha$-Hölder map for rational $0 < \\alpha \\le 1$, and contraction"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-uniform-continuity, def-metric-space, def-rational-power,
       def-rat-order, lem-metric-nonnegativity, def-integer-power]
justified_by: []
forward_refs: [cex-strict-contraction-without-a-fixed-point]
aliases: []
landmark: true
short: "Lipschitz, Hölder, contraction"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 6ba2b991536bc17f37491fe225d5ca0331683968cabffb15013849f789373315
    item_sha256: 7580b1f334d2d1aa4963b16bc10cb18dc484349fdedcdeb64d60dfc5c8999aa1
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Hölder condition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/H%C3%B6lder_condition"
    - title: "Contraction mapping (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Contraction_mapping"
pipeline_run: null
---

## Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function. Recall that a metric takes nonnegative real values
([[lem-metric-nonnegativity]]).

- $f$ is **Lipschitz** with **constant** $L$, where $L \in \mathbb{R}$ and
  $L \ge 0$, if
  $$d_Y\big(f(x), f(x')\big) \;\le\; L \, d_X(x,x') \qquad \text{for all } x, x' \in X .$$
  $f$ is *Lipschitz* if it is Lipschitz with some such constant.
- Let $\alpha \in \mathbb{Q}$ with $0 < \alpha \le 1$ ([[def-rat-order]]). $f$ is
  **$\alpha$-Hölder** with **constant** $C$, where $C \in \mathbb{R}$ and
  $C \ge 0$, if
  $$d_Y\big(f(x), f(x')\big) \;\le\; C \, d_X(x,x')^{\alpha} \qquad \text{for all } x, x' \in X ,$$
  the power being the rational power of a nonnegative base
  ([[def-rational-power]]). $f$ is *$\alpha$-Hölder* if it is so with some such
  constant, and *Hölder* if it is $\alpha$-Hölder for some rational
  $\alpha \in (0,1]$.
- $f$ is a **contraction** with constant $q$ if it is Lipschitz with constant $q$
  and $0 \le q < 1$. The number $q$ is then called a **contraction constant** for
  $f$.

**The power $d_X(x,x')^{\alpha}$ is defined at every pair, including $x = x'$.**
The base $d_X(x,x')$ is a nonnegative real, and [[def-rational-power]] defines
$a^{\alpha}$ for every $a > 0$ and, by its supplementary clause, sets
$0^{\alpha} = 0$ for every rational $\alpha > 0$. Since $\alpha > 0$ is required
here, the displayed inequality at $x = x'$ reads $0 \le C \cdot 0$, which holds;
so no separate clause and no restriction to $x \ne x'$ is needed. Note that this
does not by itself explain the strict inequality $\alpha>0$: if one extended the
formula to $\alpha=0$ using the convention $0^0=1$ of [[def-integer-power]], the
equal-point inequality would still be the automatic $0\le C$. Globally, however,
that extension would reduce to the bounded-diameter condition
$d_Y(f(x),f(x'))\le C$, outside the standard Hölder range adopted here.

**Why the exponent is a rational and why it is at most $1$.** This library has no
real exponents ([[def-rational-power]]), so $\alpha$ ranges over the rationals;
that is a limitation of the ambient toolkit and not of the notion. The upper
bound $\alpha \le 1$ is the standard convention, and it is where the notion is
useful: the classical theory reserves the name for $\alpha \in (0,1]$, and
nothing in this library uses an exponent outside that range. No claim is made
here about what an exponent $\alpha > 1$ would do.

**Constants are not unique and are not part of the data.** If $f$ is Lipschitz
with constant $L$ it is Lipschitz with every constant $L' \ge L$, and likewise
for Hölder constants; the adjectives above are existential statements. A
*contraction*, by contrast, requires a constant strictly below $1$, and that is a
real restriction: exhibiting the constant is part of exhibiting a contraction, and
a map that shrinks every distance without admitting one uniform constant is not a
contraction here.

## Remarks

- **The three conditions are ranked, and the ranking is a theorem.** Contraction
  implies Lipschitz by definition; Lipschitz and Hölder each imply uniform
  continuity ([[def-metric-uniform-continuity]]), and uniform continuity implies
  continuity. That is [[thm-metric-regularity-hierarchy]], where the one
  implication that needs a hypothesis, namely Lipschitz implies Hölder, is stated
  with the boundedness hypothesis it actually needs.
- **A Lipschitz map with constant $0$ is constant** when $X$ is nonempty, since
  $d_Y(f(x),f(x')) \le 0$ forces $f(x) = f(x')$ by the separation axiom (M1)
  ([[def-metric-space]]). So the constant maps are exactly the maps admitting
  every nonnegative constant, and they are contractions with constant $0$.
- **Naming forks.** Many texts call a Lipschitz map with constant $L < 1$ a
  *contraction* and one with $d(fx,fy) < d(x,y)$ for $x \ne y$ a *contractive* or
  *weakly contractive* map. This library uses *contraction* only in the first
  sense; the second condition is strictly weaker and does not force a fixed point
  ([[fs-strict-contraction-has-a-fixed-point]]), witnessed by
  [[cex-strict-contraction-without-a-fixed-point]], which is precisely why the two
  names are kept apart here.
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

### `def-uniform-continuity-real`

````markdown
---
id: def-uniform-continuity-real
kind: definition
title: "Uniform continuity of $f : A \\to \\mathbb{R}$: one $\\delta$ serving every pair of points of $A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-continuity-real, def-interval, def-neighbourhood-r, lem-of-abs-value]
justified_by: []
aliases: []
forward_refs: [cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval, cex-x-squared-is-not-uniformly-continuous-on-r]
landmark: true
short: "uniform continuity of a real function"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Def. 4.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$ and let $f : A \to \mathbb{R}$. Then $f$ is
**uniformly continuous on $A$** when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x, x' \in A)\ \bigl[\ |x - x'| < \delta \ \Longrightarrow\ |f(x) - f(x')| < \varepsilon\ \bigr],$$

with $\varepsilon$ and $\delta$ ranging over the positive reals.

**The whole content is in the order of the quantifiers.** Written out,
continuity on $A$ ([[def-continuity-real]]) is

$$\forall \varepsilon\ \forall c \in A\ \exists \delta\ \forall x \in A ,$$

and uniform continuity is

$$\forall \varepsilon\ \exists \delta\ \forall x' \in A\ \forall x \in A .$$

Moving $\exists \delta$ to the left of the point quantifier is the entire
difference: for continuity the radius may shrink from point to point, for
uniform continuity one radius must serve the whole of $A$ at once. This is the
same distinction, for the same reason, that [[def-metric-uniform-continuity]]
draws for maps of metric spaces.

**Uniform continuity implies continuity.** Given $\varepsilon > 0$, take the
$\delta$ supplied by uniform continuity and, at a point $c \in A$, apply the
condition with $x' := c$: every $x \in A$ with $|x - c| < \delta$ satisfies
$|f(x) - f(c)| < \varepsilon$. So the same $\delta$ witnesses continuity at
every point of $A$ simultaneously. The converse fails, and the failure is not
marginal: [[fs-continuity-implies-uniform-continuity]] refutes it on this page,
and the companion page works two witnesses out in full.

**Uniform continuity is a property of the pair $(f, A)$, not of $f$ alone.** The
same formula may be uniformly continuous on one set and not on another:
$x \mapsto 1/x$ is uniformly continuous on $[1,\infty)$ and not on $(0,1)$, and
$x \mapsto x^{2}$ is uniformly continuous on every bounded interval and not on
$\mathbb{R}$. Restricting the domain therefore never destroys uniform
continuity, since the condition then quantifies over fewer pairs; enlarging it
may.

**The two points are unordered and may coincide.** Nothing above excludes
$x = x'$, at which the implication reads $|f(x) - f(x)| = 0 < \varepsilon$
([[lem-of-abs-value]]) and is automatic, and the condition is symmetric in the
two points because $|x - x'| = |x' - x|$.

## Remarks

- **A single $\delta$, and a picture.** For a uniformly continuous $f$ one may
  slide a rectangle of width $\delta$ and height $2\varepsilon$ along the graph
  and never have the graph leave it through the top or bottom. For a merely
  continuous $f$ the rectangle must be narrowed as one moves, and on
  $x \mapsto 1/x$ over $(0,1)$ it must be narrowed without limit.

- **Neighbourhood form.** The condition says
  $f\bigl(A \cap N_{\delta}(x')\bigr) \subseteq N_{\varepsilon}(f(x'))$ for
  every $x' \in A$, with one $\delta$ ([[def-neighbourhood-r]]). That is
  continuity on $A$ with the radius independent of the centre.

- **On an interval this is the notion the extension theorem needs.** A
  uniformly continuous function on a set $D$ extends to one on the closure of
  $D$ ([[cor-continuous-extension-from-a-dense-subset-r]]); mere continuity does
  not suffice, since $x \mapsto 1/x$ on $(0,1)$ has no continuous extension to
  $[0,1]$ ([[def-interval]]).

- **The two standard witnesses, for orientation.** The converse fails in two
  independent ways, each worked out on the companion page:
  [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]] on a
  bounded domain that is not closed, and
  [[cex-x-squared-is-not-uniformly-continuous-on-r]] on a closed domain that is
  not bounded. Both are named here for orientation only; nothing in this
  definition rests on them.

- **Lipschitz and Hölder conditions are stronger still, and are not redefined
  here.** They are [[def-lipschitz-holder-contraction]] instantiated at
  $A \subseteq \mathbb{R}$ with $d(x,y) = |x-y|$; the dictionary that makes that
  instantiation legitimate, and that transports the implications of
  [[thm-metric-regularity-hierarchy]] to real functions, is
  [[lem-real-and-metric-notions-agree]], immediately below.
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

### `lem-real-and-metric-notions-agree`

````markdown
---
id: lem-real-and-metric-notions-agree
kind: lemma
title: "Dictionary: for $A \\subseteq \\mathbb{R}$ with the metric $d(x,y) = |x-y|$, continuity and uniform continuity of $f : A \\to \\mathbb{R}$ agree with the metric-space notions, the Lipschitz and Hölder conditions are the metric ones instantiated, and a subset of $\\mathbb{R}$ is compact in the open-cover sense of $\\mathbb{R}$ exactly when it is a compact metric subspace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuity-real, def-uniform-continuity-real, def-metric-continuity, def-metric-uniform-continuity, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, thm-uniform-continuity-preserves-cauchy, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding, def-metric-space, def-metric-ball, def-metric-topology, def-metric-compactness, lem-compactness-is-intrinsic, def-metric-compactness-variants, def-metric-convergence, def-cauchy-in-metric, def-open-cover-r, def-open-and-closed-in-r, def-real-limit, def-sequence, def-rational-power, lem-of-abs-value, lem-metric-nonnegativity]
justified_by: []
aliases: [lem-metric-dictionary-for-r]
forward_refs: [ex-x-to-the-beta-separates-the-holder-classes, cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]
landmark: true
short: "real and metric notions agree"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 and Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "W. Trench, Introduction to Real Analysis, Ch. 8: Metric Spaces"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ carry the subspace metric of the usual metric
$d_{\mathbb{R}}(x,y) = |x-y|$ of $\mathbb{R}$, that is
$d_A(x,y) = |x - y|$ for $x, y \in A$
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]),
and let $f : A \to \mathbb{R}$, regarded also as a map of metric spaces
$(A, d_A) \to (\mathbb{R}, d_{\mathbb{R}})$. Then the $\mathbb{R}$-native
notions of this page and the metric-space notions of the earlier pages are the
**same notions**, in the following five senses.

1. **Continuity.** For every $c \in A$: $f$ is continuous at $c$ in the sense of
   [[def-continuity-real]] if and only if $f$ is continuous at $c$ in the sense
   of [[def-metric-continuity]]. Consequently $f$ is continuous on $A$ if and
   only if it is continuous as a map of metric spaces.
2. **Uniform continuity.** $f$ is uniformly continuous on $A$ in the sense of
   [[def-uniform-continuity-real]] if and only if it is uniformly continuous as
   a map of metric spaces ([[def-metric-uniform-continuity]]).
3. **Lipschitz.** For a real $L \ge 0$: $f$ is Lipschitz with constant $L$ as a
   map of metric spaces ([[def-lipschitz-holder-contraction]]) if and only if
   $$|f(x) - f(x')| \le L\,|x - x'| \qquad \text{for all } x, x' \in A .$$
   This displayed condition is what "$f$ is Lipschitz with constant $L$" means
   for a real function on $A$ in this library; no second definition is made.
4. **Hölder.** For a rational $\alpha$ with $0 < \alpha \le 1$ and a real
   $C \ge 0$: $f$ is $\alpha$-Hölder with constant $C$ as a map of metric spaces
   if and only if
   $$|f(x) - f(x')| \le C\,|x - x'|^{\alpha} \qquad \text{for all } x, x' \in A ,$$
   the power being the rational power of a nonnegative base
   ([[def-rational-power]]).
5. **Compactness, in both senses used in this library.** For $K \subseteq
   \mathbb{R}$ with the subspace metric $d_K$:
   - $K$ is compact in the open-cover sense of [[def-open-cover-r]] — every
     family of open subsets of $\mathbb{R}$ covering $K$ has a finite subfamily
     covering $K$ — if and only if the metric space $(K, d_K)$ is compact
     ([[def-metric-compactness]]);
   - $K$ is sequentially compact in the sense of [[def-open-cover-r]] if and
     only if $(K, d_K)$ is sequentially compact as a metric space
     ([[def-metric-compactness-variants]]).

Two consequences are recorded, since they are the reason the dictionary is
stated as a lemma rather than as a remark.

6. **The regularity hierarchy transfers verbatim.** By clauses 1 to 4 and
   [[thm-metric-regularity-hierarchy]]: a Lipschitz $f : A \to \mathbb{R}$ is
   uniformly continuous on $A$; an $\alpha$-Hölder $f$ with rational
   $0 < \alpha \le 1$ is uniformly continuous on $A$; a uniformly continuous $f$
   is continuous on $A$; and if $A$ is nonempty and bounded, a Lipschitz $f$ is
   $\alpha$-Hölder for every rational $\alpha$ with $0 < \alpha \le 1$. No
   strictness is claimed here, and none is claimed there.
7. **Cauchy sequences transfer.** A sequence $(x_k)$ with terms in $A$ is Cauchy
   in $(A, d_A)$ ([[def-cauchy-in-metric]]) if and only if it is Cauchy as a
   sequence of reals ([[def-real-limit]]); so by clause 2 and
   [[thm-uniform-continuity-preserves-cauchy]], a uniformly continuous
   $f : A \to \mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of
   $\mathbb{R}$.

**Why this lemma exists, and why it is a lemma.** Three results of this page —
[[thm-continuous-image-of-a-compact-set-r]], [[thm-extreme-value-r]] and
[[thm-heine-cantor-r]] — are stated a second time here, having already been
proved metric-generally as
[[thm-continuous-image-of-a-compact-space-is-compact]],
[[thm-extreme-value-metric]] and [[thm-heine-cantor-metric]]. The duplication is
deliberate: the $\mathbb{R}$-native proofs run through
[[thm-heine-borel-characterisation-r]] and
[[thm-compact-iff-sequentially-compact-r]], which are order-based, while the
metric proofs run through the cover machinery of metric spaces. **This item is
the single place in the library where that duplication is acknowledged**, and
clauses 1 and 5 are what make the two families of statements literally the same
statements. It is a lemma, and not a remark, precisely so that later pages can
cite it and move between the two vocabularies.

**Clause 5 closes a second seam.** The phrase *compact subset of $\mathbb{R}$*
is defined twice in this library — metrically, as compactness of the metric
subspace ([[def-metric-compactness]]), and $\mathbb{R}$-natively, by covers by
open subsets of $\mathbb{R}$ ([[def-open-cover-r]]) — and until this clause no
item asserted that the two agree.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$ with the subspace metric $d_A(x,y) = |x-y|$, a function $f : A \to \mathbb{R}$, and a set $K \subseteq \mathbb{R}$ with the subspace metric $d_K$.

[L1] The usual metric: $d_{\mathbb{R}}(x,y) = |x-y|$ is a metric on $\mathbb{R}$; its open balls are the intervals $B(x,r) = (x-r, x+r)$; and a set $U \subseteq \mathbb{R}$ is open in the metric topology of $d_{\mathbb{R}}$ exactly when it is open in the sense of [[def-open-and-closed-in-r]] ([[lem-real-line-is-a-metric-space]], [[def-metric-space]], [[def-metric-ball]], [[def-metric-topology]]).

[L2] Subspace metric: for $S \subseteq \mathbb{R}$ the restriction $d_S$ of $d_{\mathbb{R}}$ to $S \times S$ is a metric on $S$, so $d_S(x,y) = |x-y|$ for $x, y \in S$ ([[def-isometry-and-metric-embedding]]).

[L3] Metric continuity at $a \in X$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in X$ with $d_X(x,a) < \delta$ satisfies $d_Y(f(x), f(a)) < \varepsilon$ ([[def-metric-continuity]]).

[L4] Metric uniform continuity: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in X$ with $d_X(x,x') < \delta$ satisfy $d_Y(f(x), f(x')) < \varepsilon$ ([[def-metric-uniform-continuity]]).

[L5] Continuity and uniform continuity of a real function on $A$, in the forms of [[def-continuity-real]] and [[def-uniform-continuity-real]].

[L6] Lipschitz and Hölder for a map of metric spaces: $d_Y(f(x),f(x')) \le L\,d_X(x,x')$, respectively $d_Y(f(x),f(x')) \le C\,d_X(x,x')^{\alpha}$ for a rational $\alpha$ with $0 < \alpha \le 1$, the power being that of [[def-rational-power]] with the convention $0^{\alpha} = 0$ ([[def-lipschitz-holder-contraction]]).

[L7] The regularity hierarchy for maps of metric spaces: Lipschitz implies uniformly continuous, uniformly continuous implies continuous, $\alpha$-Hölder implies uniformly continuous, and on a nonempty bounded space Lipschitz implies $\alpha$-Hölder for every rational $\alpha \in (0,1]$ ([[thm-metric-regularity-hierarchy]]).

[L8] Intrinsic character of compactness: a subset $K$ of a metric space $X$ is a compact metric space in its own right, with the subspace metric, exactly when every family of open subsets of $X$ whose union contains $K$ has a finite subfamily whose union contains $K$ ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]]).

[L9] Compactness and sequential compactness of $K \subseteq \mathbb{R}$ in the $\mathbb{R}$-native sense ([[def-open-cover-r]]), and sequential compactness of a metric space ([[def-metric-compactness-variants]]).

[L10] Metric convergence: $x_k \to p$ in $(X,d)$ means $d(x_k,p) \to 0$ in $\mathbb{R}$ ([[def-metric-convergence]]); convergence and the Cauchy condition for real sequences are those of [[def-real-limit]] and [[def-sequence]]; a metric is nonnegative ([[lem-metric-nonnegativity]]); and $|u| \ge 0$ with $\bigl||u|\bigr| = |u|$ ([[lem-of-abs-value]]).

[L11] Cauchy in a metric space: $(x_k)$ is Cauchy in $(X,d)$ when for every rational $\varepsilon > 0$ there is $N$ with $d(x_m,x_n) < \varepsilon$ for all $m,n \ge N$ ([[def-cauchy-in-metric]]).

[L12] A uniformly continuous map of metric spaces sends Cauchy sequences to Cauchy sequences ([[thm-uniform-continuity-preserves-cauchy]]).

## Proof

**Proof technique:** direct.

1.1 **The two distances are the two absolute values.** By [L1] and [L2], for $x, x' \in A$ we have $d_A(x,x') = |x - x'|$, and for $u, v \in \mathbb{R}$ we have $d_{\mathbb{R}}(u,v) = |u - v|$; in particular $d_{\mathbb{R}}(f(x), f(x')) = |f(x) - f(x')|$. [L1, L2]

1.2 **Clause 5, the cover half.** Take the ambient metric space to be $(\mathbb{R}, d_{\mathbb{R}})$ and $K \subseteq \mathbb{R}$ with $d_K$. By [L8], $(K,d_K)$ is a compact metric space exactly when every family of sets open in $(\mathbb{R}, d_{\mathbb{R}})$ whose union contains $K$ has a finite subfamily whose union contains $K$. By [L1] the sets open in $(\mathbb{R}, d_{\mathbb{R}})$ are exactly the open subsets of $\mathbb{R}$ in the sense of [[def-open-and-closed-in-r]]. So the displayed condition is word for word the definition of compactness of $K$ in [L9]. [L1, L8, L9]

2.1 **Clause 1.** Fix $c \in A$. Substituting the identities of step 1.1 into [L3], with $X := (A,d_A)$, $Y := (\mathbb{R}, d_{\mathbb{R}})$ and $a := c$, turns metric continuity at $c$ into: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$. That is verbatim the condition of [L5] defining continuity of $f$ at $c$ in the sense of [[def-continuity-real]]. The two conditions are therefore the same condition, and each holds at every point of $A$ exactly when the other does. [step 1.1, L3, L5]

2.2 **Clause 2.** The same substitution in [L4] turns metric uniform continuity into: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in A$ with $|x - x'| < \delta$ satisfy $|f(x) - f(x')| < \varepsilon$, which is verbatim [[def-uniform-continuity-real]] as recorded in [L5]. [step 1.1, L4, L5]

2.3 **Clauses 3 and 4.** The same substitution in [L6] turns the Lipschitz condition into $|f(x) - f(x')| \le L\,|x-x'|$ for all $x,x' \in A$, and the $\alpha$-Hölder condition into $|f(x) - f(x')| \le C\,|x-x'|^{\alpha}$, the power being that of [[def-rational-power]] and defined at $x = x'$ by the convention $0^{\alpha} = 0$ recorded in [L6]. Since this library gives no other definition of the two conditions for a real function on $A$, the displayed inequalities are what those words mean here. [step 1.1, L6]

2.4 **Clause 5, the sequential half: convergence first.** Let $(x_j)$ be a sequence with terms in $K$ and let $p \in K$. By [L10] and step 1.1, convergence of $(x_j)$ to $p$ in $(K,d_K)$ says $d_K(x_j,p) = |x_j - p| \to 0$ in $\mathbb{R}$; and $|x_j - p| \to 0$ says that for every rational $\varepsilon > 0$ there is $J$ with $\bigl||x_j - p| - 0\bigr| = |x_j - p| < \varepsilon$ for $j \ge J$, which is verbatim the statement $x_j \to p$ of [L10]. So the two convergences are the same relation. [step 1.1, L10]

3.1 **Clause 5, the sequential half.** A sequence in $(K,d_K)$ is exactly a sequence of reals with all terms in $K$, and by step 2.4 a subsequence of it converges to a point of $K$ in $(K,d_K)$ exactly when it converges to that point in $\mathbb{R}$. Hence "every sequence in $K$ has a subsequence converging in $(K,d_K)$ to a point of $K$" and "every sequence of reals with terms in $K$ has a subsequence converging in $\mathbb{R}$ to a point of $K$" are the same statement, which is the assertion of [L9] and [[def-metric-compactness-variants]]. [step 2.4, L9, L10]

3.2 **Clause 6.** By clauses 1 to 4, the four $\mathbb{R}$-native conditions are the corresponding metric conditions for the map $(A,d_A) \to (\mathbb{R},d_{\mathbb{R}})$, so the implications of [L7] hold between them verbatim; the boundedness hypothesis in the last of them is boundedness of the metric space $(A,d_A)$, which for $A \subseteq \mathbb{R}$ is boundedness of $A$ as a set of reals, since $d_A(x,x') = |x-x'|$. [step 2.1, step 2.2, step 2.3, L7]

3.3 **Clause 7.** By step 1.1 and [L11], a sequence $(x_k)$ with terms in $A$ is Cauchy in $(A,d_A)$ exactly when for every rational $\varepsilon > 0$ there is $N$ with $|x_m - x_n| < \varepsilon$ for all $m,n \ge N$, which is verbatim the Cauchy condition of [L10] for a sequence of reals. Combining this with clause 2 and [L12] gives that a uniformly continuous $f : A \to \mathbb{R}$ carries Cauchy sequences of $A$ to Cauchy sequences of reals. [step 1.1, step 2.2, L10, L11, L12]

4.1 Clauses 1 to 7 are proved, each by rewriting one definition into the other along the identity $d_A(x,x') = |x-x'|$ or, for clause 5, along [L8] and the agreement of the two notions of open subset of $\mathbb{R}$. [step 2.1, step 2.2, step 2.3, step 1.2, step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **Nothing here is a new theorem, and that is the point.** Every clause is an identification of two forms of words, and the only clause with any content beyond substitution is 5, which needs [[lem-compactness-is-intrinsic]] to move between covers by relatively open sets and covers by open subsets of $\mathbb{R}$, and needs [[lem-real-line-is-a-metric-space]] to know that the metric topology of $\mathbb{R}$ is the topology of [[def-open-and-closed-in-r]]. A reader who takes those two identifications for granted is taking for granted exactly what this library refuses to leave unsaid.

- **The hierarchy of clause 6 is not strict by fiat, and the witnesses live on the companion page.** [[thm-metric-regularity-hierarchy]] asserts the four implications and claims no converse. That none of them reverses for real functions is witnessed here: [[ex-x-to-the-beta-separates-the-holder-classes]] gives, for rationals $0 < \beta < \alpha \le 1$, a function on $[0,1]$ that is $\beta$-Hölder and not $\alpha$-Hölder, and in particular ($\alpha = 1$) is uniformly continuous and not Lipschitz; and [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]] gives a continuous function that is not uniformly continuous. Those two items are links, not dependencies: they are examples on the companion page, and nothing on this page rests on them.

- **What the dictionary does *not* say.** It does not say that the two proofs of a duplicated theorem are the same proof, and they are not: the $\mathbb{R}$-native ones use the order of $\mathbb{R}$ and spend no choice beyond what is named in each item, while the metric ones use covers and, where the equivalence of the compactness variants is invoked, countable or dependent choice. What the dictionary establishes is that the two *statements* coincide, so that a later page may use whichever proof it prefers and cite whichever form it needs.
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

### `thm-metric-regularity-hierarchy`

````markdown
---
id: thm-metric-regularity-hierarchy
kind: theorem
title: "Contraction implies Lipschitz implies uniformly continuous implies continuous; every Hölder map is uniformly continuous, and a Lipschitz map on a bounded space is Hölder for every exponent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-lipschitz-holder-contraction, def-metric-uniform-continuity,
       def-metric-continuity, def-rational-power, lem-rational-power-monotone,
       def-metric-bounded-diameter, lem-rational-power-laws, def-metric-space,
       lem-metric-nonnegativity, lem-of-inverse-positive, lem-of-sign-rules,
       def-rat-order, thm-of-archimedean, def-complete-ordered-field]
justified_by: []
forward_refs: [ex-square-root-is-half-holder, cex-continuous-map-destroying-cauchyness]
aliases: []
landmark: true
short: "contraction $\\Rightarrow$ Lipschitz $\\Rightarrow$ uniform $\\Rightarrow$ continuous"
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
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Hölder condition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/H%C3%B6lder_condition"
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
pipeline_run: null
---

## Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function, with the three regularity conditions as in
[[def-lipschitz-holder-contraction]]. Then:

1. If $f$ is a contraction, it is Lipschitz.
2. If $f$ is Lipschitz, it is uniformly continuous
   ([[def-metric-uniform-continuity]]).
3. If $f$ is uniformly continuous, it is continuous
   ([[def-metric-continuity]]).
4. If $f$ is $\alpha$-Hölder for some rational $\alpha$ with $0 < \alpha \le 1$,
   it is uniformly continuous.
5. Suppose $X$ is nonempty and bounded, and put
   $R := \operatorname{diam}(X) + 1$, a real with $R > 0$
   ([[def-metric-bounded-diameter]]). If $f$ is Lipschitz with constant $L$, then
   for **every** rational $\alpha$ with $0 < \alpha \le 1$ the map $f$ is
   $\alpha$-Hölder with constant $L\,R^{\,1-\alpha}$.

**Claim 5 carries its boundedness hypothesis for a reason, and no unconditional
"Lipschitz implies Hölder" is asserted anywhere here.** On an unbounded space the
implication is false; the witness and its verification are in the first remark
below.

**Strictness is not claimed.** The five implications are asserted and nothing
more; that none of them reverses is witnessed elsewhere, and those witnesses are
not prerequisites of this theorem. See the second remark.

## Facts & Assumptions

**Given:** Metric spaces $(X,d_X)$, $(Y,d_Y)$, a function $f : X \to Y$, a real $\varepsilon > 0$, and a rational $\alpha$ with $0 < \alpha \le 1$.

[A1] $f$ is a contraction with constant $q$: $f$ is Lipschitz with constant $q$ and $0 \le q < 1$ ([[def-lipschitz-holder-contraction]]).

[A2] $f$ is Lipschitz with constant $L \ge 0$: $d_Y(f(x),f(x')) \le L\,d_X(x,x')$ for all $x,x' \in X$ ([[def-lipschitz-holder-contraction]]).

[A3] $f$ is $\alpha$-Hölder with constant $C \ge 0$: $d_Y(f(x),f(x')) \le C\,d_X(x,x')^{\alpha}$ for all $x,x' \in X$ ([[def-lipschitz-holder-contraction]]).

[A4] $X$ is nonempty and bounded, so $\operatorname{diam}(X)$ exists and $d_X(x,x') \le \operatorname{diam}(X)$ for all $x,x' \in X$ ([[def-metric-bounded-diameter]], [[def-complete-ordered-field]]).

[L1] Uniform continuity: one $\delta > 0$ per $\varepsilon > 0$ serving every pair ([[def-metric-uniform-continuity]]); continuity at a point allows $\delta$ to depend on the point as well ([[def-metric-continuity]]).

[L2] Rational powers of a positive base, with $a^{1} = a$, $a^{0} = 1$, and the supplementary clause $0^{r} = 0$ for rational $r > 0$ ([[def-rational-power]], [[def-rat-order]]).

[L3] Exponent laws for positive bases: $a^{r+s} = a^{r}a^{s}$, $(a^{r})^{s} = a^{rs}$, and $a^{r} > 0$ ([[lem-rational-power-laws]]).

[L4] Monotonicity in the base: for rational $r > 0$ and $0 < a < b$ one has $a^{r} < b^{r}$ ([[lem-rational-power-monotone]]).

[L5] A metric is nonnegative, and $d(x,x') = 0$ forces $x = x'$ ([[lem-metric-nonnegativity]], [[def-metric-space]]).

[L6] Positivity of inverses and multiplication of inequalities by positives ([[lem-of-inverse-positive]], [[lem-of-sign-rules]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is immediate from the definitions: a contraction with constant $q$ is Lipschitz with the constant $q$, and $q \ge 0$. [A1, A2]

1.2 Claim 2: assume [A2] and put $\delta := \varepsilon/(L+1)$, a positive real since $L + 1 > 0$. If $d_X(x,x') < \delta$ then, using $d_X(x,x') \ge 0$, $d_Y(f(x),f(x')) \le L\,d_X(x,x') \le (L+1)\,d_X(x,x') < (L+1)\delta = \varepsilon$; the same $\delta$ served every pair, so $f$ is uniformly continuous. [A2, L1, L5, L6]

1.3 Claim 3: assume $f$ uniformly continuous and let $a \in X$; the $\delta$ belonging to $\varepsilon$ satisfies $d_X(x,a) < \delta \Rightarrow d_Y(f(x),f(a)) < \varepsilon$ for all $x$, which is continuity at $a$, and $a$ was arbitrary. [L1]

1.4 Claim 4, the case of equal points: assume [A3]; if $d_X(x,x') = 0$ then $x = x'$, so $d_Y(f(x),f(x')) = 0 < \varepsilon$ whatever $\delta$ is. [A3, L5]

1.5 Claim 4, the main case: put $\eta := \varepsilon/(C+1) > 0$ and $\delta := \eta^{1/\alpha}$, which is a positive real because $1/\alpha$ is a positive rational and $\eta > 0$. [L2, L3, L6, choose]

1.6 Claim 5: assume [A2] and [A4], put $R := \operatorname{diam}(X) + 1$ and $C := L\,R^{\,1-\alpha}$. Since $\operatorname{diam}(X) \ge 0$ we have $R \ge 1 > 0$, so $R^{\,1-\alpha}$ is defined and positive and $C \ge 0$. [A2, A4, L2, L3]

2.1 Let $t := d_X(x,x')$ with $0 < t < \delta$. Then $t^{\alpha} < \delta^{\alpha} = (\eta^{1/\alpha})^{\alpha} = \eta^{(1/\alpha)\alpha} = \eta^{1} = \eta$, so $d_Y(f(x),f(x')) \le C\,t^{\alpha} \le (C+1)\,t^{\alpha} < (C+1)\eta = \varepsilon$. [step 1.5, A3, L2, L3, L4, L6]

2.2 Let $x, x' \in X$ and $t := d_X(x,x')$; then $0 \le t \le \operatorname{diam}(X) < R$. If $t = 0$ then $d_Y(f(x),f(x')) \le L \cdot 0 = 0 = C \cdot 0^{\alpha} = C\,t^{\alpha}$, because $\alpha > 0$. [step 1.6, A2, A4, L2, L5]

2.3 If $t > 0$ then $t = t^{\alpha + (1-\alpha)} = t^{\alpha}\,t^{\,1-\alpha}$ and $t^{\,1-\alpha} \le R^{\,1-\alpha}$: for $\alpha < 1$ the exponent $1-\alpha$ is a positive rational and $0 < t < R$, and for $\alpha = 1$ both sides are $1$. Multiplying by $L\,t^{\alpha} \ge 0$ gives $L t = L\,t^{\alpha}\,t^{\,1-\alpha} \le L\,R^{\,1-\alpha}\,t^{\alpha} = C\,t^{\alpha}$, and hence $d_Y(f(x),f(x')) \le L t \le C\,t^{\alpha}$. [step 1.6, A2, L2, L3, L4, L6]

3.1 Steps 1.4 and 2.1 cover every pair with $d_X(x,x') < \delta$, and $\delta$ did not depend on the pair, so $f$ is uniformly continuous: claim 4 holds. [step 1.4, step 2.1, L1]

4.1 Steps 2.2 and 2.3 give $d_Y(f(x),f(x')) \le C\,d_X(x,x')^{\alpha}$ for every pair, so $f$ is $\alpha$-Hölder with constant $C = L\,R^{\,1-\alpha}$, which is claim 5; claims 1 to 4 are steps 1.1, 1.2, 1.3 and 3.1. [step 1.1, step 1.2, step 1.3, step 3.1, step 2.2, step 2.3] ∎

## Remarks

- **Boundedness in claim 5 cannot be dropped, and here is the witness.** Take $X = Y = \mathbb{R}$ with the usual metric and $f(x) = x$, which is Lipschitz with constant $1$. Suppose $f$ were $\alpha$-Hölder with constant $C \ge 0$ for some rational $\alpha$ with $0 < \alpha < 1$, so that $|x - y| \le C\,|x-y|^{\alpha}$ for all reals $x,y$. Taking $y = 0$ and $x = t$ with $t > 0$, and writing $t = t^{\alpha} t^{\,1-\alpha}$ ([[lem-rational-power-laws]]), division by $t^{\alpha} > 0$ gives $t^{\,1-\alpha} \le C$ for every real $t > 0$. At $t = 1$ this reads $1 \le C$, so $C > 0$; and then choosing a natural $n$ with $n > C^{1/(1-\alpha)}$, which exists by the Archimedean property ([[thm-of-archimedean]]), and raising to the positive rational power $1-\alpha$ ([[lem-rational-power-monotone]], [[lem-rational-power-laws]]) gives $n^{\,1-\alpha} > \big(C^{1/(1-\alpha)}\big)^{1-\alpha} = C$, contradicting $t^{\,1-\alpha} \le C$ at $t = n$. So the identity of $\mathbb{R}$ is Lipschitz and $\alpha$-Hölder for no exponent $\alpha < 1$. A chain reading "Lipschitz implies Hölder implies uniformly continuous" is therefore false as stated, which is why claims 4 and 5 are separated here and why claim 5 carries a hypothesis.
- **No implication reverses, and two of the witnesses are on the companion page.** The square root on $[0,\infty)$ is $1/2$-Hölder and not Lipschitz ([[ex-square-root-is-half-holder]]), and $x \mapsto 1/x$ on $(0,1)$ is continuous and not uniformly continuous ([[cex-continuous-map-destroying-cauchyness]]). Both are read here as orientation only: this theorem does not depend on them and claims nothing about strictness. That a Lipschitz map need not be a contraction is visible already in the identity map, whose only Lipschitz constants are the reals $\ge 1$.
- **The constant $L+1$ and the constant $C+1$ are there to avoid a case split.** Dividing by $L$ or by $C$ would require them to be nonzero, and a Lipschitz constant or a Hölder constant is allowed to be $0$ ([[def-lipschitz-holder-contraction]]). Enlarging the constant by $1$ is harmless, since the defining inequalities are preserved by enlarging the constant.
- **What claim 5 costs.** The constant it produces, $L\,R^{1-\alpha}$, grows with the diameter of $X$, and that dependence is exactly what the unbounded counterexample above exploits: as $R \to \infty$ no single Hölder constant survives.
````

