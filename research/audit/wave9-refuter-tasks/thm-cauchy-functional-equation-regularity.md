## Wave 9 target — `thm-cauchy-functional-equation-regularity`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `412be5ff8b2a5fe36ed07ad005aa0bd1e059426313e62f1647004e157ff8662c`

## Complete current target

````markdown
---
id: thm-cauchy-functional-equation-regularity
kind: theorem
title: "Six regularity conditions each force an additive $f : \\mathbb{R} \\to \\mathbb{R}$ to be $x \\mapsto f(1)x$: continuity at a single point, monotonicity on a nondegenerate interval, boundedness above on one, boundedness below on one, constancy of sign on one, and a graph that is not dense in $\\mathbb{R}^{2}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
  evidence: semantic-source
deps: [def-additive-function, lem-additive-is-q-linear, lem-additive-bounded-above-on-an-interval-is-linear, def-monotone-function, def-continuity-real, def-interval, def-bounded-set, lem-metrics-on-rn, def-metric-space, def-metric-ball, def-metric-interior-closure-boundary, thm-metric-closure-characterisation, lem-rat-embeds-dense, cor-archimedean-reciprocal, lem-of-abs-value, def-complete-ordered-field, def-neighbourhood-r]
justified_by: []
aliases: [thm-cauchy-equation-regularity]
landmark: true
short: "regularity forces linearity"
proof_strategy: cases
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
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
    - title: "Hamel basis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "Additive operators approximately preserving Birkhoff-James orthogonality (Aequationes mathematicae)"
      url: "https://link.springer.com/article/10.1007/s00010-025-01210-4"
pipeline_run: null
---

## Statement

Let $f : \mathbb{R} \to \mathbb{R}$ be additive ([[def-additive-function]]) and
put $c := f(1)$. Write $\mathbb{R}^{2}$ for the set of functions
$2 \to \mathbb{R}$ with the metric
$d_\infty\bigl((a,b),(a',b')\bigr) = \max\{|a-a'|,\ |b-b'|\}$
([[lem-metrics-on-rn]], [[def-metric-space]]), and let

$$\Gamma \;:=\; \{\, (x, f(x)) \;:\; x \in \mathbb{R} \,\} \;\subseteq\; \mathbb{R}^{2}$$

be the graph of $f$. If **any one** of the following six conditions holds, then
$f(x) = c\,x$ for every real $x$.

1. $f$ is continuous at some single point of $\mathbb{R}$
   ([[def-continuity-real]]).
2. $f$ is monotone on some nondegenerate interval
   ([[def-monotone-function]], [[def-interval]]).
3. $f$ is bounded above on some nondegenerate interval ([[def-bounded-set]]).
4. $f$ is bounded below on some nondegenerate interval.
5. $f$ has constant sign on some nondegenerate interval $I$: either $f(z) \ge 0$
   for every $z \in I$, or $f(z) \le 0$ for every $z \in I$.
6. $\Gamma$ is **not** dense in $\mathbb{R}^{2}$
   ([[def-metric-interior-closure-boundary]]).

**Conditions 3, 4 and 5 are not independent, and the proof does not pretend they
are.** Condition 5 is the special case of 3 or of 4 with the bound $0$, and
condition 4 is condition 3 applied to $-f$; they are listed separately only
because each is the form in which the hypothesis usually arises. Condition 1 and
condition 2 are each reduced to condition 3 in one line. Condition 6 is the only
one that is not, and it is proved in the contrapositive: if $f$ is not of the
form $x \mapsto cx$, then $\Gamma$ is dense.

**Two classical clauses are absent.** *Boundedness on a set of positive measure*
and *Lebesgue measurability* also force linearity, and neither is stated here:
both require a measure, and this library develops none as it stands. Each is an
independent sufficient condition, so restoring them would change nothing else on
this page.

## Facts & Assumptions

**Given:** An additive $f : \mathbb{R} \to \mathbb{R}$ with $c := f(1)$, and its graph $\Gamma = \{(x,f(x)) : x \in \mathbb{R}\}$.

[A1] $f(x+y) = f(x)+f(y)$ for all reals $x, y$ ([[def-additive-function]]).

[L1] An additive $f$ satisfies $f(0)=0$, $f(-x) = -f(x)$ and $f(qx) = qf(x)$ for every rational $q$ and every real $x$ ([[lem-additive-is-q-linear]]).

[L2] If an additive $g$ is bounded above on some $[p,r]$ with $p < r$, then $g(x) = g(1)x$ for every real $x$ ([[lem-additive-bounded-above-on-an-interval-is-linear]]).

[L3] A nondegenerate interval contains a closed $[p,r]$ with $p < r$, by order-convexity ([[def-interval]]).

[L4] $f$ continuous at $c_{0}$ means: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(c_{0})| < \varepsilon$ whenever $|x - c_{0}| < \delta$; and $|u| < \varepsilon$ gives $u < \varepsilon$ ([[def-continuity-real]], [[def-neighbourhood-r]], [[lem-of-abs-value]]).

[L5] $f$ nondecreasing on $I$ means $f(x) \le f(y)$ for $x \le y$ in $I$, and nonincreasing means $f(x) \ge f(y)$; monotone means one of the two ([[def-monotone-function]]).

[L6] $d_\infty$ is a metric on $\mathbb{R}^{2}$ and its open ball of centre $(a,b)$ and radius $\varepsilon$ is $\{(u,v) : |u-a| < \varepsilon \text{ and } |v-b| < \varepsilon\}$; a subset $S$ of a metric space is dense exactly when every open ball meets $S$ ([[lem-metrics-on-rn]], [[def-metric-ball]], [[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]]).

[L7] Strictly between any two distinct reals there lies a rational; $\mathbb{R}$ is a field, so a nonzero real is invertible ([[lem-rat-embeds-dense]], [[def-complete-ordered-field]], [[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** cases.

1.1 Assume at least one of the six conditions holds. The six steps below treat the six conditions in turn and are exhaustive for that assumption; in each the conclusion reached is $f(x) = cx$ for every real $x$. [construct]

2.1 **Condition 3.** If $f$ is bounded above on a nondegenerate interval, that interval contains a closed $[p,r]$ with $p < r$ on which $f$ is bounded above, and the boundedness lemma gives $f(x) = f(1)x = cx$ for every real $x$. [step 1.1, L2, L3, assume-case above]

2.2 **Condition 6, in the contrapositive: if $f$ is not $x \mapsto cx$ then $\Gamma$ is dense in $\mathbb{R}^{2}$.** Suppose $f(x_{2}) \ne c\,x_{2}$ for some real $x_{2}$. Then $x_{2} \ne 0$, since $f(0) = 0$. Put $x_{1} := 1$, $v_{1} := (x_{1}, f(x_{1})) = (1, c)$ and $v_{2} := (x_{2}, f(x_{2}))$, and put $\Delta := x_{1}f(x_{2}) - x_{2}f(x_{1}) = f(x_{2}) - c\,x_{2}$, which is nonzero by assumption. [step 1.1, L1, assume-case graph]

3.1 **Condition 4.** If $f$ is bounded below on a nondegenerate interval $I$, say $f(z) \ge m$ for $z \in I$, then $-f$ is additive and satisfies $-f(z) \le -m$ on $I$, so $-f$ is bounded above on $I$; by step 2.1 applied to $-f$ we get $-f(x) = (-f)(1)\,x = -cx$, hence $f(x) = cx$. [step 2.1, A1, assume-case below]

3.2 **Condition 2.** Let $f$ be monotone on a nondegenerate interval, which contains $[p,r]$ with $p < r$. If $f$ is nondecreasing there then $f(z) \le f(r)$ for every $z \in [p,r]$, and if $f$ is nonincreasing there then $f(z) \le f(p)$; either way $f$ is bounded above on $[p,r]$ and step 2.1 applies. [step 2.1, L3, L5, assume-case mono]

3.3 **Condition 1.** Let $f$ be continuous at a point $c_{0}$. Taking $\varepsilon := 1$ gives a real $\delta > 0$ with $|f(x) - f(c_{0})| < 1$, hence $f(x) < f(c_{0}) + 1$, for every $x$ with $|x - c_{0}| < \delta$. The set of such $x$ is the nondegenerate interval $(c_{0}-\delta,\ c_{0}+\delta)$, so $f$ is bounded above on a nondegenerate interval and step 2.1 applies. [step 2.1, L3, L4, assume-case cont]

3.4 Let $(a,b) \in \mathbb{R}^{2}$ and let $\varepsilon > 0$ be real. Put $\alpha := (a\,f(x_{2}) - b\,x_{2})/\Delta$ and $\beta := (b\,x_{1} - a\,f(x_{1}))/\Delta$. Then $\alpha x_{1} + \beta x_{2} = a$ and $\alpha f(x_{1}) + \beta f(x_{2}) = b$, as multiplying out and cancelling $\Delta$ shows in each case. [step 2.2, L7]

4.1 **Condition 5.** If $f(z) \ge 0$ for every $z$ in a nondegenerate interval $I$ then $f$ is bounded below on $I$ by $0$ and step 3.1 applies; if $f(z) \le 0$ for every $z \in I$ then $f$ is bounded above on $I$ by $0$ and step 2.1 applies. So sign-constancy is a special case of the two preceding conditions and needs no separate argument. [step 2.1, step 3.1, assume-case sign]

4.2 Choose rationals $q_{1}, q_{2}$ with $|q_{1} - \alpha| < \eta$ and $|q_{2} - \beta| < \eta$, where $\eta > 0$ is a real chosen with $\eta\,(|x_{1}| + |x_{2}|) < \varepsilon$ and $\eta\,(|f(x_{1})| + |f(x_{2})|) < \varepsilon$; such rationals exist because a rational lies strictly between any two distinct reals, and such an $\eta$ exists because for a real $K \ge 0$ the inequality $\eta K < \varepsilon$ holds for all small enough $\eta > 0$. [step 3.4, L7]

5.1 Put $x := q_{1}x_{1} + q_{2}x_{2}$. Then $f(x) = q_{1}f(x_{1}) + q_{2}f(x_{2})$ by additivity and rational homogeneity, so $(x, f(x)) \in \Gamma$. Moreover $|x - a| = |(q_{1}-\alpha)x_{1} + (q_{2}-\beta)x_{2}| \le \eta(|x_{1}| + |x_{2}|) < \varepsilon$ and likewise $|f(x) - b| \le \eta(|f(x_{1})| + |f(x_{2})|) < \varepsilon$. [step 3.4, step 4.2, A1, L1, L7]

6.1 So every open ball of $\mathbb{R}^{2}$ meets $\Gamma$, that is, $\Gamma$ is dense in $\mathbb{R}^{2}$. Reading this contrapositively: if $\Gamma$ is not dense in $\mathbb{R}^{2}$ then $f(x) = cx$ for every real $x$, which is condition 6. [step 2.2, step 5.1, L6]

7.1 Each of the six conditions has now been shown to force $f(x) = cx$ for every real $x$: condition 1 at step 3.3, condition 2 at step 3.2, condition 3 at step 2.1, condition 4 at step 3.1, condition 5 at step 4.1 and condition 6 at step 6.1. [step 2.1, step 3.1, step 4.1, step 3.2, step 3.3, step 6.1, cases-exhaustive] ∎

## Remarks

- **Every clause reduces to one lemma.** The engine is
  [[lem-additive-bounded-above-on-an-interval-is-linear]]; five of the six
  conditions are shown to imply its hypothesis, and the sixth is proved
  separately because a non-dense graph gives no bound on $f$ anywhere. The
  economy is deliberate: proving each clause from scratch would repeat the same
  translation-and-scaling argument five times.

- **The list is not a list of equivalent conditions.** Each of the six implies
  linearity, and linearity implies all six, so over the additive functions they
  are indeed equivalent; but the theorem as stated is six implications in one
  direction, and that is what the proof establishes.

- **None of the six is dispensable in the sense that additivity alone suffices.**
  There is an additive $f$ satisfying none of them
  ([[fs-additive-implies-linear]]), and by the theorem it is unbounded above and
  below on every nondegenerate interval, monotone on none, continuous at no
  point, of constant sign on no nondegenerate interval, and has dense graph. The
  construction costs the Axiom of Choice, and the companion page records what it
  looks like.
````

## Current Wave 9 provenance determination

```json
{
  "id": "thm-cauchy-functional-equation-regularity",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation",
    "https://link.springer.com/article/10.1007/s00010-025-01210-4"
  ],
  "rationale": "The sources list the standard regularity conditions forcing additive functions to be linear and the dense-graph alternative. The item combines six equivalent conditions, both signs, and the explicit dense-graph conclusion in one theorem.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 9 proof contract

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-additive-function",
      "source_section": "Definition",
      "quote": "Let $\\mathbb{R}$ be the complete ordered field ([[def-complete-ordered-field]],\n[[def-ordered-field]], [[def-field]]). A function $f : \\mathbb{R} \\to \\mathbb{R}$\nis **additive** when it satisfies **Cauchy's functional equation**",
      "uses": [
        "3.1",
        "5.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-additive-is-q-linear",
      "source_section": "Statement",
      "quote": "Let $f : \\mathbb{R} \\to \\mathbb{R}$ be additive ([[def-additive-function]]), and\nidentify $\\mathbb{N} \\subseteq \\mathbb{Z} \\subseteq \\mathbb{Q} \\subseteq\n\\mathbb{R}$ along the canonical embeddings ([[lem-nat-embeds-int]],\n[[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), writing $\\iota(n)$ for the\ncanonical natural of $n$ in $\\mathbb{R}$ ([[def-canonical-natural]]). Then, for\nevery real $x$:",
      "uses": [
        "2.2",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-additive-bounded-above-on-an-interval-is-linear",
      "source_section": "Statement",
      "quote": "Let $f : \\mathbb{R} \\to \\mathbb{R}$ be additive ([[def-additive-function]]) and\nsuppose there are reals $p < r$ and a real $M$ with $f(z) \\le M$ for every\n$z \\in [p,r]$; that is, $f$ is bounded above on a nondegenerate interval\n([[def-interval]], [[def-bounded-set]]). Then",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:",
      "uses": [
        "2.1",
        "3.2",
        "3.3"
      ]
    },
    {
      "fact": "L4",
      "source": "def-continuity-real",
      "source_section": "Definition",
      "quote": "with $\\varepsilon$ and $\\delta$ ranging over the **positive reals**. In the\nlanguage of neighbourhoods: for every real $\\varepsilon > 0$ there is a real\n$\\delta > 0$ with",
      "uses": [
        "3.3"
      ]
    },
    {
      "fact": "L4",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Indeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "3.3"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then",
      "uses": [
        "3.3"
      ]
    },
    {
      "fact": "L5",
      "source": "def-monotone-function",
      "source_section": "Definition",
      "quote": "- **nondecreasing** when $f(x) \\le f(y)$ for all $x, y \\in A$ with $x \\le y$;\n- **increasing**, or *strictly increasing*, when $f(x) < f(y)$ for all\n  $x, y \\in A$ with $x < y$;\n- **nonincreasing** when $f(x) \\ge f(y)$ for all $x, y \\in A$ with $x \\le y$;\n- **decreasing**, or *strictly decreasing*, when $f(x) > f(y)$ for all\n  $x, y \\in A$ with $x < y$;\n- **monotone** when it is nondecreasing or nonincreasing;\n- **strictly monotone** when it is increasing or decreasing.",
      "uses": [
        "3.2"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-metrics-on-rn",
      "source_section": "Statement",
      "quote": "and write $x_k$ for $x(k)$, $k < n$. Two elements of $\\mathbb{R}^n$ are equal\nexactly when they agree at every $k < n$, functions being equal when they have\nthe same values. For $x, y \\in \\mathbb{R}^n$ put",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-metric-ball",
      "source_section": "Definition",
      "quote": "- $x \\in B(x,r)$, because $d(x,x) = 0 < r$ (axiom (M1) of [[def-metric-space]]);\n  in particular open and closed balls are nonempty.\n- $B(x,r) \\subseteq \\bar B(x,r)$ and $S(x,r) \\subseteq \\bar B(x,r)$, and\n  $\\bar B(x,r)$ is the disjoint union of $B(x,r)$ and $S(x,r)$, by trichotomy of\n  the order of $\\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]):\n  each $y$ satisfies exactly one of $d(x,y) < r$, $d(x,y) = r$, $d(x,y) > r$.\n- If $0 < s \\le r$ then $B(x,s) \\subseteq B(x,r)$ and\n  $\\bar B(x,s) \\subseteq \\bar B(x,r)$, by transitivity of the order.\n- Nonnegativity of the metric ([[lem-metric-nonnegativity]]) is what forces the\n  radius convention, and it forces it for the **open** ball only: if $r \\le 0$\n  then $B(x,r) = \\{y : d(x,y) < r\\}$ is empty, because $d(x,y) \\ge 0 \\ge r$\n  for every $y$. The other two sets behave differently at $r = 0$, and the\n  convention $r > 0$ excludes them for uniformity rather than for emptiness:\n  $\\bar B(x,0) = S(x,0) = \\{x\\}$, since $d(x,y) \\le 0$ together with\n  $d(x,y) \\ge 0$ gives $d(x,y) = 0$ and hence $y = x$ by (M1). For $r < 0$ all\n  three sets are empty.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-metric-interior-closure-boundary",
      "source_section": "Definition",
      "quote": "Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \\subseteq X$ and let\n$x \\in X$. Balls are as in [[def-metric-ball]] and open sets as in\n[[def-metric-topology]]; recall that a real $r$ written as a radius is always\n$> 0$.",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-metric-closure-characterisation",
      "source_section": "Statement",
      "quote": "Claims 2 and 3 hold for every $A$, the empty set included: $\\overline{\\emptyset}$\nis empty because no ball meets $\\emptyset$, and $\\emptyset$ is closed because $X$\nis open ([[def-metric-topology]]). Claim 1 carries the hypothesis $A \\ne \\emptyset$\nbecause $d(x,A)$ is defined only for nonempty $A$\n([[def-metric-bounded-diameter]]).",
      "uses": [
        "6.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "3.4",
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.",
      "uses": [
        "3.4",
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that",
      "uses": [
        "3.4",
        "4.2",
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "thm-cauchy-functional-equation-regularity-step-1-1",
      "claim": "Assume at least one of the six conditions holds. The six steps below treat the six conditions in turn and are exhaustive for that assumption; in each the conclusion reached is $f(x) = cx$ for every real $x$. [construct]",
      "step": "1.1",
      "inputs": [
        "given hypotheses and local construction"
      ]
    },
    {
      "id": "thm-cauchy-functional-equation-regularity-step-2-1",
      "claim": "**Condition 3.** If $f$ is bounded above on a nondegenerate interval, that interval contains a closed $[p,r]$ with $p < r$ on which $f$ is bounded above, and the boundedness lemma gives $f(x) = f(1)x = cx$ for every real $x$. [step 1.1, L2, L3, assume-case above]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "thm-cauchy-functional-equation-regularity-step-2-2",
      "claim": "**Condition 6, in the contrapositive: if $f$ is not $x \\mapsto cx$ then $\\Gamma$ is dense in $\\mathbb{R}^{2}$.** Suppose $f(x_{2}) \\ne c\\,x_{2}$ for some real $x_{2}$. Then $x_{2} \\ne 0$, since $f(0) = 0$. Put $x_{1} := 1$, $v_{1} := (x_{1}, f(x_{1})) = (1, c)$ and $v_{2} := (x_{2}, f(x_{2}))$, and put $\\Delta := x_{1}f(x_{2}) - x_{2}f(x_{1}) = f(x_{2}) - c\\,x_{2}$, which is nonzero by assumption. [step 1.1, L1, assume-case graph]",
      "step": "2.2",
      "inputs": [
        "1.1",
        "L1"
      ]
    },
    {
      "id": "thm-cauchy-functional-equation-regularity-step-3-1",
      "claim": "**Condition 4.** If $f$ is bounded below on a nondegenerate interval $I$, say $f(z) \\ge m$ for $z \\in I$, then $-f$ is additive and satisfies $-f(z) \\le -m$ on $I$, so $-f$ is bounded above on $I$; by step 2.1 applied to $-f$ we get $-f(x) = (-f)(1)\\,x = -cx$, hence $f(x) = cx$. [step 2.1, A1, assume-case below]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "A1"
      ]
    },
    {
      "id": "thm-cauchy-functional-equation-regularity-step-3-2",
      "claim": "**Condition 2.** Let $f$ be monotone on a nondegenerate interval, which contains $[p,r]$ with $p < r$. If $f$ is nondecreasing there then $f(z) \\le f(r)$ for every $z \\in [p,r]$, and if $f$ is nonincreasing there then $f(z) \\le f(p)$; either way $f$ is bounded above on $[p,r]$ and step 2.1 applies. [step 2.1, L3, L5, assume-case mono]",
      "step": "3.2",
      "inputs": [
        "2.1",
        "L3",
        "L5"
      ]
    },
    {
      "id": "thm-cauchy-functional-equation-regularity-step-3-3",
      "claim": "**Condition 1.** Let $f$ be continuous at a point $c_{0}$. Taking $\\varepsilon := 1$ gives a real $\\delta > 0$ with $|f(x) - f(c_{0})| < 1$, hence $f(x) < f(c_{0}) + 1$, for every $x$ with $|x - c_{0}| < \\delta$. The set of such $x$ is the nondegenerate interval $(c_{0}-\\delta,\\ c_{0}+\\delta)$, so $f$ is bounded above on a nondegenerate interval and step 2.1 applies. [step 2.1, L3, L4, assume-case cont]",
      "step": "3.3",
      "inputs": [
        "2.1",
        "L3",
        "L4"
      ]
    },
    {
      "id": "thm-cauchy-functional-equation-regularity-step-3-4",
      "claim": "Let $(a,b) \\in \\mathbb{R}^{2}$ and let $\\varepsilon > 0$ be real. Put $\\alpha := (a\\,f(x_{2}) - b\\,x_{2})/\\Delta$ and $\\beta := (b\\,x_{1} - a\\,f(x_{1}))/\\Delta$. Then $\\alpha x_{1} + \\beta x_{2} = a$ and $\\alpha f(x_{1}) + \\beta f(x_{2}) = b$, as multiplying out and cancelling $\\Delta$ shows in each case. [step 2.2, L7]",
      "step": "3.4",
      "inputs": [
        "2.2",
        "L7"
      ]
    },
    {
      "id": "thm-cauchy-functional-equation-regularity-step-4-1",
      "claim": "**Condition 5.** If $f(z) \\ge 0$ for every $z$ in a nondegenerate interval $I$ then $f$ is bounded below on $I$ by $0$ and step 3.1 applies; if $f(z) \\le 0$ for every $z \\in I$ then $f$ is bounded above on $I$ by $0$ and step 2.1 applies. So sign-constancy is a special case of the two preceding conditions and needs no separate argument. [step 2.1, step 3.1, assume-case sign]",
      "step": "4.1",
      "inputs": [
        "3.1",
        "2.1"
      ]
    },
    {
      "id": "thm-cauchy-functional-equation-regularity-step-4-2",
      "claim": "Choose rationals $q_{1}, q_{2}$ with $|q_{1} - \\alpha| < \\eta$ and $|q_{2} - \\beta| < \\eta$, where $\\eta > 0$ is a real chosen with $\\eta\\,(|x_{1}| + |x_{2}|) < \\varepsilon$ and $\\eta\\,(|f(x_{1})| + |f(x_{2})|) < \\varepsilon$; such rationals exist because a rational lies strictly between any two distinct reals, and such an $\\eta$ exists because for a real $K \\ge 0$ the inequality $\\eta K < \\varepsilon$ holds for all small enough $\\eta > 0$. [step 3.4, L7]",
      "step": "4.2",
      "inputs": [
        "3.4",
        "L7"
      ]
    },
    {
      "id": "thm-cauchy-functional-equation-regularity-step-5-1",
      "claim": "Put $x := q_{1}x_{1} + q_{2}x_{2}$. Then $f(x) = q_{1}f(x_{1}) + q_{2}f(x_{2})$ by additivity and rational homogeneity, so $(x, f(x)) \\in \\Gamma$. Moreover $|x - a| = |(q_{1}-\\alpha)x_{1} + (q_{2}-\\beta)x_{2}| \\le \\eta(|x_{1}| + |x_{2}|) < \\varepsilon$ and likewise $|f(x) - b| \\le \\eta(|f(x_{1})| + |f(x_{2})|) < \\varepsilon$. [step 3.4, step 4.2, A1, L1, L7]",
      "step": "5.1",
      "inputs": [
        "3.4",
        "4.2",
        "A1",
        "L1",
        "L7"
      ]
    },
    {
      "id": "thm-cauchy-functional-equation-regularity-step-6-1",
      "claim": "So every open ball of $\\mathbb{R}^{2}$ meets $\\Gamma$, that is, $\\Gamma$ is dense in $\\mathbb{R}^{2}$. Reading this contrapositively: if $\\Gamma$ is not dense in $\\mathbb{R}^{2}$ then $f(x) = cx$ for every real $x$, which is condition 6. [step 2.2, step 5.1, L6]",
      "step": "6.1",
      "inputs": [
        "2.2",
        "5.1",
        "L6"
      ]
    },
    {
      "id": "thm-cauchy-functional-equation-regularity-step-7-1",
      "claim": "Each of the six conditions has now been shown to force $f(x) = cx$ for every real $x$: condition 1 at step 3.3, condition 2 at step 3.2, condition 3 at step 2.1, condition 4 at step 3.1, condition 5 at step 4.1 and condition 6 at step 6.1. [step 2.1, step 3.1, step 4.1, step 3.2, step 3.3, step 6.1, cases-exhaustive] ∎",
      "step": "7.1",
      "inputs": [
        "3.3",
        "3.2",
        "2.1",
        "3.1",
        "4.1",
        "6.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement forms no empty set, empty family, or empty finite sum whose value affects the claim."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 2.2: the zero-valued or zero-index boundary is handled explicitly, or is included without division by it."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: the unit or first-index boundary is included explicitly in the stated construction."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement: interval degeneracy is either excluded by a strict endpoint hypothesis or included by the stated weak endpoint convention."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.1: domain endpoints and any one-sided interpretation are kept within the stated relative-domain convention."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 4.2: each existential witness used here is supplied by the cited existence result or by the displayed formula/construction."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "thm-cauchy-functional-equation-regularity",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-additive-function",
    "declared_target": "def-additive-function",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cauchy-functional-equation-regularity",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-additive-is-q-linear",
    "declared_target": "lem-additive-is-q-linear",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cauchy-functional-equation-regularity",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-additive-bounded-above-on-an-interval-is-linear",
    "declared_target": "lem-additive-bounded-above-on-an-interval-is-linear",
    "target_statement_provenance": "literature-derived",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cauchy-functional-equation-regularity",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-monotone-function",
    "declared_target": "def-monotone-function",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cauchy-functional-equation-regularity",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-cauchy-functional-equation-regularity",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-cauchy-functional-equation-regularity",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-bounded-set",
    "declared_target": "def-bounded-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cauchy-functional-equation-regularity",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-metrics-on-rn",
    "declared_target": "lem-metrics-on-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cauchy-functional-equation-regularity",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-metric-space",
    "declared_target": "def-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cauchy-functional-equation-regularity",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-metric-ball",
    "declared_target": "def-metric-ball",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cauchy-functional-equation-regularity",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-metric-interior-closure-boundary",
    "declared_target": "def-metric-interior-closure-boundary",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cauchy-functional-equation-regularity",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-metric-closure-characterisation",
    "declared_target": "thm-metric-closure-characterisation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cauchy-functional-equation-regularity",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-cauchy-functional-equation-regularity",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-cauchy-functional-equation-regularity",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-cauchy-functional-equation-regularity",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "thm-cauchy-functional-equation-regularity",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-neighbourhood-r",
    "declared_target": "def-neighbourhood-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (18)

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

### `def-additive-function`

````markdown
---
id: def-additive-function
kind: definition
title: "Cauchy's functional equation $f(x+y) = f(x) + f(y)$, and the additive functions $\\mathbb{R} \\to \\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
  evidence: exact-source
deps: [def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
aliases: [def-cauchy-functional-equation]
landmark: true
short: "additive function; Cauchy's equation"
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
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
pipeline_run: null
---

## Definition

Let $\mathbb{R}$ be the complete ordered field ([[def-complete-ordered-field]],
[[def-ordered-field]], [[def-field]]). A function $f : \mathbb{R} \to \mathbb{R}$
is **additive** when it satisfies **Cauchy's functional equation**

$$f(x + y) \;=\; f(x) + f(y) \qquad \text{for all } x, y \in \mathbb{R}.$$

Equivalently, $f$ is a homomorphism of the additive group of $\mathbb{R}$ into
itself.

**The linear maps are additive.** For a fixed real $c$ the function
$x \mapsto cx$ satisfies $c(x+y) = cx + cy$ by distributivity, so it is
additive. Cauchy's question is whether these are the only additive functions,
and the answer is a genuine dichotomy: with any one of a short list of
regularity conditions the answer is yes
([[thm-cauchy-functional-equation-regularity]]), and without any of them it is
no ([[fs-additive-implies-linear]]).

**No continuity, no monotonicity and no measurability is part of the
definition.** The equation is purely algebraic, and every regularity hypothesis
below is stated explicitly where it is used.

**A first consequence, recorded here because it is used immediately.** An
additive $f$ satisfies $f(0) = 0$: putting $x = y = 0$ gives
$f(0) = f(0) + f(0)$, and subtracting $f(0)$ gives $f(0) = 0$. The remaining
elementary consequences, including $f(-x) = -f(x)$ and $\mathbb{Q}$-homogeneity,
are collected in [[lem-additive-is-q-linear]].
````

### `def-bounded-set`

````markdown
---
id: def-bounded-set
kind: definition
title: "Lower bound, bounded below, bounded set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complete-ordered-field]
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
    - title: "Upper and lower bounds (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Upper_and_lower_bounds"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ denotes the complete ordered field
([[def-complete-ordered-field]]) and $S \subseteq \mathbb{R}$ is a subset of it.

The notions **upper bound** and **bounded above** are already fixed by
[[def-complete-ordered-field]] and are only recalled here, never redefined:
$u \in \mathbb{R}$ is an *upper bound* of $S$ if $s \le u$ for all $s \in S$, and
$S$ is *bounded above* if it has at least one upper bound. The dual notions are:

- $\ell \in \mathbb{R}$ is a **lower bound** of $S$ if $\ell \le s$ for all $s \in S$.
- $S$ is **bounded below** if it has at least one lower bound.
- $S$ is **bounded** if it is both bounded above and bounded below, that is, if
  there are $\ell, u \in \mathbb{R}$ with $\ell \le s \le u$ for every $s \in S$.

## Remarks

- A bound is an element of $\mathbb{R}$ and is not required to lie in $S$. A
  bound that does lie in $S$ is a maximum or a minimum ([[def-max-min]]), and
  that is a strictly stronger condition ([[fs-sup-belongs-to-set]]).
- Bounds come in half-lines: if $\ell$ is a lower bound of $S$ then so is every
  $\ell'' \le \ell$, and if $u$ is an upper bound then so is every $u'' \ge u$.
  Consequently a set that has one bound of a given kind has infinitely many, and
  the interesting question is whether the collection of them has a best element,
  which is what a supremum ([[def-complete-ordered-field]]) or an infimum
  ([[def-infimum]]) is.
- Bounded above and bounded below are independent conditions. The set
  $A = \{\, n \cdot 1_{\mathbb{R}} : n \ge 1 \,\}$ of canonical naturals of
  $\mathbb{R}$ is bounded below by $0$ ([[lem-of-naturals-positive]]) and is not
  bounded above ([[thm-of-archimedean]]); its reflection $-A$ is bounded above
  and not bounded below ([[lem-reflection]]).
- The empty set is bounded, and vacuously so: every real number is both an upper
  bound and a lower bound of $\emptyset$, since the defining condition quantifies
  over no elements. Having bounds is therefore much weaker than having a least
  upper bound or a greatest lower bound ([[fs-every-set-has-sup]]).
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

### `def-metric-ball`

````markdown
---
id: def-metric-ball
kind: definition
title: "Open ball, closed ball and sphere in a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-space, def-real-order, lem-metric-nonnegativity,
       def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: [def-open-ball, def-closed-ball, def-sphere]
landmark: true
short: "$B(x,r)$"
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
    - title: "Ball (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ball_(mathematics)"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $x \in X$ and let
$r \in \mathbb{R}$ with $r > 0$ ([[def-real-order]]). Define

$$B(x,r) := \{\, y \in X : d(x,y) < r \,\}, \qquad \bar B(x,r) := \{\, y \in X : d(x,y) \le r \,\}, \qquad S(x,r) := \{\, y \in X : d(x,y) = r \,\}.$$

$B(x,r)$ is the **open ball**, $\bar B(x,r)$ the **closed ball** and $S(x,r)$ the
**sphere** of **centre** $x$ and **radius** $r$. The radius is always a strictly
positive real; a ball of radius $0$ or of negative radius is never written in
this library.

**Immediate consequences of the definitions.** For every $x \in X$ and $r > 0$:

- $x \in B(x,r)$, because $d(x,x) = 0 < r$ (axiom (M1) of [[def-metric-space]]);
  in particular open and closed balls are nonempty.
- $B(x,r) \subseteq \bar B(x,r)$ and $S(x,r) \subseteq \bar B(x,r)$, and
  $\bar B(x,r)$ is the disjoint union of $B(x,r)$ and $S(x,r)$, by trichotomy of
  the order of $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]):
  each $y$ satisfies exactly one of $d(x,y) < r$, $d(x,y) = r$, $d(x,y) > r$.
- If $0 < s \le r$ then $B(x,s) \subseteq B(x,r)$ and
  $\bar B(x,s) \subseteq \bar B(x,r)$, by transitivity of the order.
- Nonnegativity of the metric ([[lem-metric-nonnegativity]]) is what forces the
  radius convention, and it forces it for the **open** ball only: if $r \le 0$
  then $B(x,r) = \{y : d(x,y) < r\}$ is empty, because $d(x,y) \ge 0 \ge r$
  for every $y$. The other two sets behave differently at $r = 0$, and the
  convention $r > 0$ excludes them for uniformity rather than for emptiness:
  $\bar B(x,0) = S(x,0) = \{x\}$, since $d(x,y) \le 0$ together with
  $d(x,y) \ge 0$ gives $d(x,y) = 0$ and hence $y = x$ by (M1). For $r < 0$ all
  three sets are empty.

**A sphere may be empty, and so the three sets are not on a par.** For $r > 0$
the open and closed balls always contain $x$, but nothing in the definition
produces a point at distance exactly $r$ from $x$. If a metric takes only the
values $0$ and $1$, as the discrete metric on the companion page does, then
$S(x,2) = \emptyset$ while $B(x,2) = \bar B(x,2)$ is the whole space. So
nonemptiness of a sphere is never available by convention: where it is used, it
is proved.

**The ambient space is part of the notation.** $B(x,r)$ depends on $(X,d)$ and
not on $x$ and $r$ alone. When more than one space or more than one metric is in
play we write $B_X(x,r)$, or $B_d(x,r)$, and likewise for $\bar B$ and $S$. This
matters as soon as subspaces appear ([[def-isometry-and-metric-embedding]]): a
ball of a subspace is the trace on it of a ball of the ambient space, and the two
are different sets.

## Remarks

- **The names "open ball" and "closed ball" are justified, not merely
  suggestive.** That $B(x,r)$ is an open set and $\bar B(x,r)$ a closed set in
  the metric topology is proved in [[thm-metric-open-set-algebra]]; the words are
  used here only as names for the three sets displayed above.
- **The closed ball is not in general the closure of the open ball**, and the
  sphere is not in general the boundary of either. Both failures are recorded on
  this page as [[fs-closed-ball-is-the-closure-of-the-open-ball]] and witnessed
  on the companion page. The safe reading of the three names is the displayed
  one and nothing more.
````

### `def-metric-interior-closure-boundary`

````markdown
---
id: def-metric-interior-closure-boundary
kind: definition
title: "Interior, closure, boundary, limit point, isolated point and dense subset of a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-topology, def-metric-ball, thm-metric-open-set-algebra, def-metric-space]
justified_by: []
aliases: [def-closure, def-interior, def-boundary, def-limit-point, def-dense]
landmark: true
short: "$\\operatorname{int} A$, $\\overline{A}$, $\\partial A$"
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
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Interior (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interior_(topology)"
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Boundary (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boundary_(topology)"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ and let
$x \in X$. Balls are as in [[def-metric-ball]] and open sets as in
[[def-metric-topology]]; recall that a real $r$ written as a radius is always
$> 0$.

- $x$ is an **interior point** of $A$ if $B(x,r) \subseteq A$ for some $r$. The
  set of interior points is the **interior** $\operatorname{int}(A)$.
- $x$ is an **adherent point** of $A$ if $B(x,r) \cap A \ne \emptyset$ for every
  $r$. The set of adherent points is the **closure** $\overline{A}$.
- $x$ is a **limit point** (accumulation point) of $A$ if
  $B(x,r) \cap (A \setminus \{x\}) \ne \emptyset$ for every $r$. The set of limit
  points is the **derived set** $A'$.
- $x$ is an **isolated point** of $A$ if $x \in A$ and $B(x,r) \cap A = \{x\}$
  for some $r$.
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus \operatorname{int}(A)$.
- $A$ is **dense** in $X$ if $\overline{A} = X$.

**The interior is open, and it is the largest open subset of $A$.** If
$x \in \operatorname{int}(A)$, fix $r$ with $B(x,r) \subseteq A$; the ball
$B(x,r)$ is itself open ([[thm-metric-open-set-algebra]]), so every
$y \in B(x,r)$ has some $s$ with $B(y,s) \subseteq B(x,r) \subseteq A$, which
puts $y$ in $\operatorname{int}(A)$. Hence $B(x,r) \subseteq \operatorname{int}(A)$
and $\operatorname{int}(A)$ is open. It is contained in $A$, since
$x \in B(x,r) \subseteq A$ for an interior point $x$; and if $V \subseteq A$ is
open then every $v \in V$ has a ball inside $V \subseteq A$, so
$V \subseteq \operatorname{int}(A)$.

**Two descriptions of the boundary agree.** $x \in \partial A$ says that every
ball around $x$ meets $A$ and that no ball around $x$ is contained in $A$; the
second half says exactly that every ball around $x$ meets $X \setminus A$. So

$$\partial A = \{\, x \in X : B(x,r) \cap A \ne \emptyset \text{ and } B(x,r) \cap (X \setminus A) \ne \emptyset \text{ for every } r \,\},$$

from which $\partial A = \partial(X \setminus A)$ is immediate.

**Elementary containments, straight from the definitions.** $A \subseteq \overline{A}$,
because $x \in A$ lies in every $B(x,r) \cap A$; $A' \subseteq \overline{A}$,
because a ball meeting $A \setminus \{x\}$ meets $A$; and
$\operatorname{int}(A) \subseteq A \subseteq \overline{A}$. A point of $A$ is
either isolated in $A$ or a limit point of $A$, and not both, according to
whether some ball meets $A$ only in $x$.

## Remarks

- **The closure is defined here by adherent points and by nothing else.** That it
  is closed, that it is the smallest closed set containing $A$, that for nonempty
  $A$ it is $\{x : d(x,A) = 0\}$, and that it consists of the limits of sequences
  from $A$, are theorems ([[thm-metric-closure-characterisation]],
  [[thm-metric-sequential-closure]]) and are proved from this definition.
- **Limit point of a set is not the same notion as subsequential limit of a
  sequence** ([[def-subsequential-limit]]), which this library deliberately keeps
  under a different name: the constant sequence $x_k = 0$ has $0$ as a
  subsequential limit, while its set of values $\{0\}$ has no limit point at all.
- **Dense is relative to the ambient space**, and the ambient space is part of
  the data: $A$ is dense in $X$ when $\overline{A} = X$, with $\overline{A}$
  computed in $(X,d)$. The same $A$ inside a larger space is a different
  question.
````

### `def-metric-space`

````markdown
---
id: def-metric-space
kind: definition
title: "Metric space: $d(x,y) = 0$ iff $x = y$, symmetry, and the triangle inequality; pseudometric and ultrametric"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order, def-complete-ordered-field, def-ordered-field,
       def-max-min, lem-finite-set-has-max]
justified_by: []
aliases: [def-metric, def-pseudometric, def-ultrametric]
landmark: true
short: "metric space $(X,d)$"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Ultrametric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrametric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis II, 3rd ed., Ch. 1"
      url: "https://terrytao.wordpress.com/books/analysis-ii/"
    - title: "Pseudometric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pseudometric_space"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) constructed in this
library ([[def-real-numbers]]) and carrying its order ([[def-real-order]]).

Let $X$ be a set. A **metric** on $X$ is a function
$d : X \times X \to \mathbb{R}$ such that for all $x, y, z \in X$:

- **(M1) Separation.** $d(x,y) = 0$ if and only if $x = y$.
- **(M2) Symmetry.** $d(x,y) = d(y,x)$.
- **(M3) Triangle inequality.** $d(x,z) \le d(x,y) + d(y,z)$.

A **metric space** is a pair $(X,d)$ consisting of a set $X$ and a metric $d$ on
it. The elements of $X$ are its **points** and $d(x,y)$ is the **distance** from
$x$ to $y$. When only one metric is in play we write $X$ for $(X,d)$; when
several are, the metric is always named.

**The values of a metric are real numbers.** The codomain is $\mathbb{R}$, so
$d(x,y)$ is an honest element of the complete ordered field and every
inequality above is an inequality there. No infinite value is permitted;
[[rem-metric-axiom-conventions]] records why extended metrics are not treated in
this library.

**Nonnegativity is deliberately absent from the axiom list.** Many texts add a
fourth axiom $d(x,y) \ge 0$. It is redundant: (M1), (M2) and (M3) already force
it, as [[lem-metric-nonnegativity]] proves. Nothing below assumes it before that
lemma is available.

**Pseudometric.** A **pseudometric** on $X$ is a function
$p : X \times X \to \mathbb{R}$ satisfying (M2), (M3) and the weakening

- **(M1') Reflexivity.** $p(x,x) = 0$ for every $x \in X$

of (M1). A pseudometric may therefore assign distance $0$ to two distinct
points. Every metric is a pseudometric, and a pseudometric is a metric exactly
when $p(x,y) = 0$ forces $x = y$.

**Ultrametric.** An **ultrametric** on $X$ is a metric $d$ that in addition
satisfies

- **(M3') Strong triangle inequality.** $d(x,z) \le \max\{d(x,y), d(y,z)\}$

for all $x, y, z \in X$, where the maximum is that of a two-element subset of
$\mathbb{R}$, which exists and is one of the two elements
([[def-max-min]], [[lem-finite-set-has-max]]). An **ultrametric space** is a pair
$(X,d)$ with $d$ an ultrametric.

## Remarks

- **(M3') is a genuine strengthening of (M3), not an independent axiom on top of
  it.** A function satisfying (M1), (M2) and (M3') automatically satisfies (M3):
  by [[lem-metric-nonnegativity]] such a function is nonnegative, and for
  nonnegative reals $a, b$ one has $\max\{a,b\} \le a + b$, since the maximum is
  one of $a, b$ and the other summand is $\ge 0$. So "a metric satisfying (M3')"
  and "a function satisfying (M1), (M2), (M3')" describe the same objects, and
  the definition above may be read either way.

- **Why the biconditional form of (M1).** Splitting (M1) into "$d(x,x) = 0$" and
  "$d(x,y) = 0 \Rightarrow x = y$" gives the same notion; the split form is what
  makes the pseudometric weakening above a matter of deleting one clause. The
  naming fork between *pseudometric* and *semimetric*, which is live in the
  literature, is settled for this library in
  [[rem-metric-axiom-conventions]].

- **The metric is part of the data.** Two different metrics on the same set are
  two different metric spaces, even when they have the same open sets. That is
  why [[def-equivalent-metrics]] compares metrics at three separate strengths
  rather than one, and why a property can be invariant under one of them and not
  under another ([[fs-boundedness-is-a-topological-property]]).
````

### `def-monotone-function`

````markdown
---
id: def-monotone-function
kind: definition
title: "Nondecreasing, increasing (strictly increasing), nonincreasing, decreasing, monotone and strictly monotone real functions on a subset of $\\mathbb{R}$, with the dictionary to monotone sequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
  evidence: semantic-source
deps: [def-complete-ordered-field, def-real-order, def-interval, def-monotone-sequence, def-sequence, def-ordered-field, def-injection-surjection-bijection]
justified_by: []
aliases: [def-monotone-real-function, def-strictly-monotone]
landmark: true
short: "monotone real function"
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
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Monotone Functions (Analysis WebNotes)"
      url: "https://mathcs.org/analysis/reals/cont/defs/monofun.html"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]). Let $A \subseteq \mathbb{R}$ and let
$f : A \to \mathbb{R}$. Then $f$ is:

- **nondecreasing** when $f(x) \le f(y)$ for all $x, y \in A$ with $x \le y$;
- **increasing**, or *strictly increasing*, when $f(x) < f(y)$ for all
  $x, y \in A$ with $x < y$;
- **nonincreasing** when $f(x) \ge f(y)$ for all $x, y \in A$ with $x \le y$;
- **decreasing**, or *strictly decreasing*, when $f(x) > f(y)$ for all
  $x, y \in A$ with $x < y$;
- **monotone** when it is nondecreasing or nonincreasing;
- **strictly monotone** when it is increasing or decreasing.

The naming follows the convention of [[def-monotone-sequence]], which is the
convention of this library throughout: *increasing* is the strict notion and
*nondecreasing* the weak one.

**An increasing function is nondecreasing, and a decreasing function is
nonincreasing.** For $x \le y$ either $x < y$, and then $f(x) < f(y)$, hence
$f(x) \le f(y)$; or $x = y$, and then $f(x) = f(y)$. The same argument with the
inequalities reversed gives the second claim. So strictly monotone implies
monotone.

**A strictly monotone function is injective**
([[def-injection-surjection-bijection]]). Let $f$ be increasing and let
$x, y \in A$ with $x \ne y$. By trichotomy either $x < y$, and then
$f(x) < f(y)$, or $y < x$, and then $f(y) < f(x)$; in both cases
$f(x) \ne f(y)$. The decreasing case is the same argument. The converse fails,
and the failure is not exotic: a continuous injection on an interval *is*
strictly monotone ([[thm-continuous-injection-on-an-interval-is-strictly-monotone]]),
but on a domain that is not an interval it need not be.

**Negation exchanges the two directions.** For $g := -f$, that is
$g(x) := -f(x)$, the four conditions above are exchanged in pairs: $f$ is
nondecreasing exactly when $g$ is nonincreasing, and $f$ is increasing exactly
when $g$ is decreasing, because $u \le v$ holds exactly when $-v \le -u$
([[def-ordered-field]]). Several proofs below use this to reduce a nonincreasing
case to a nondecreasing one.

**Monotone on a set, not at a point.** All six conditions are conditions on the
whole of $A$; unlike continuity ([[def-continuity-real]]) there is no pointwise
version, and none is used in this library. The domain $A$ is an arbitrary subset
of $\mathbb{R}$; where a result needs $A$ to be an interval
([[def-interval]]) it says so, and the hypothesis is never decoration.

### The dictionary to monotone sequences

A sequence of reals is a function $x : \mathbb{N} \to \mathbb{R}$
([[def-sequence]]), and [[def-monotone-sequence]] calls it nondecreasing when
$x_j \le x_k$ for all $j \le k$, increasing when $x_j < x_k$ for all $j < k$,
and so on. Those are **the same four conditions as above**, read with the
ordered set $\mathbb{N}$ in place of the ordered subset $A \subseteq \mathbb{R}$
and with the comparison of indices in place of the comparison of arguments. So
nothing new is introduced here for sequences, and the two vocabularies may be
used interchangeably: the words *nondecreasing*, *increasing*, *nonincreasing*,
*decreasing*, *monotone* and *strictly monotone* mean the corresponding
condition on the domain at hand.

One consequence is used repeatedly, and it has to be stated carefully because
composition does **not** simply preserve the four words. Let $(x_k)$ be a
**nondecreasing** sequence with $x_k \in A$ for every $k$, so that $j \le k$ gives
$x_j \le x_k$. Then:

- if $f$ is nondecreasing, $(f(x_k))$ is nondecreasing, since $f(x_j) \le f(x_k)$;
- if $f$ is nonincreasing, $(f(x_k))$ is **nonincreasing**, since
  $f(x_j) \ge f(x_k)$.

So along a nondecreasing sequence the composite inherits the direction of $f$;
and with $(x_k)$ increasing and $f$ increasing, $(f(x_k))$ is increasing, while
with $(x_k)$ increasing and $f$ decreasing, $(f(x_k))$ is decreasing.

**Along a nonincreasing sequence the direction is reversed, not inherited.** If
$(x_k)$ is nonincreasing and $f$ is nonincreasing, then $j \le k$ gives
$x_j \ge x_k$ and hence $f(x_j) \le f(x_k)$: the composite is **nondecreasing**.
The witness is $f(x) = -x$ on $A = \mathbb{R}$ with $x_k = -k$, where both $f$ and
$(x_k)$ are decreasing and $f(x_k) = k$ is increasing. Two order-reversing maps
compose to an order-preserving one, exactly as for the four words applied to
functions.
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

### `fs-additive-implies-linear`

````markdown
---
id: fs-additive-implies-linear
kind: false-statement
title: "FALSE: every additive $f : \\mathbb{R} \\to \\mathbb{R}$ is of the form $x \\mapsto cx$ for a single real $c$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-additive-function, lem-additive-is-q-linear, lem-hamel-basis-exists, thm-cauchy-functional-equation-regularity, def-vector-space, def-linear-combination-and-span, lem-restriction-of-scalars, def-axiom-of-choice, thm-zorn, def-complete-ordered-field, lem-rat-embeds-dense, lem-q-and-irrationals-dense-r]
justified_by: []
aliases: []
landmark: true
short: "additive does not imply linear"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Hamel Basis (MathWorld)"
      url: "https://mathworld.wolfram.com/HamelBasis.html"
pipeline_run: null
---

## Statement

**FALSE.** Every additive $f : \mathbb{R} \to \mathbb{R}$
([[def-additive-function]]) is of the form $x \mapsto c\,x$ for a single real
$c$.

What is true is the $\mathbb{Q}$-linear part of it, $f(qx) = q f(x)$ for rational
$q$ ([[lem-additive-is-q-linear]]), and the conditional statements of
[[thm-cauchy-functional-equation-regularity]], each of which adds a regularity
hypothesis. The claim above asserts the conclusion with no hypothesis at all,
and it is false.

**The refutation assumes the Axiom of Choice** ([[def-axiom-of-choice]]), which
it uses through [[lem-hamel-basis-exists]] and hence through [[thm-zorn]]. The
hypothesis is carried explicitly in the Facts below and in every step that needs
it. It is an axiom already adopted in this library, so the refutation is a
refutation and not a conditional one; what it does not settle is whether a
counterexample exists without choice, and nothing here bears on that question.

## Facts & Assumptions

**Given:** The Axiom of Choice, and $\mathbb{Q}$ denoting the canonical copy of the rationals inside $\mathbb{R}$ ([[lem-rat-embeds-dense]]).

[A1] The Axiom of Choice ([[def-axiom-of-choice]], [[thm-zorn]]).

[L1] **Assume the Axiom of Choice.** Then there is $B \subseteq \mathbb{R}$, a basis of $\mathbb{R}$ as a vector space over $\mathbb{Q}$ by restriction of scalars, and for each $b_{\star} \in B$ a map $\Lambda_{b_{\star}} : \mathbb{R} \to \mathbb{Q}$ with $\Lambda_{b_{\star}}(x+y) = \Lambda_{b_{\star}}(x) + \Lambda_{b_{\star}}(y)$ for all reals $x, y$, with $\Lambda_{b_{\star}}(b_{\star}) = 1$, and with range the whole of $\mathbb{Q}$ ([[lem-hamel-basis-exists]], claims 1 and 4, [[lem-restriction-of-scalars]], [[def-vector-space]], [[def-linear-combination-and-span]]).

[L2] A function $f : \mathbb{R} \to \mathbb{R}$ is additive when $f(x+y) = f(x)+f(y)$ for all reals $x, y$ ([[def-additive-function]]).

[L3] There exists an irrational real, that is a real not lying in $\mathbb{Q}$: the irrationals are dense in $\mathbb{R}$ and in particular nonempty ([[lem-q-and-irrationals-dense-r]]).

[L4] $\mathbb{R}$ is a field, so a nonzero real is invertible ([[def-complete-ordered-field]]).

## Refutation

**Proof technique:** direct.

1.1 Assume the Axiom of Choice and fix a Hamel basis $B$ of $\mathbb{R}$ over $\mathbb{Q}$ together with an element $b_{\star} \in B$; such an element exists because $B$ spans $\mathbb{R}$, which is not $\{0\}$, so $B$ is nonempty. Put $f := \Lambda_{b_{\star}}$, regarded as a function $\mathbb{R} \to \mathbb{R}$. [A1, L1, construct]

2.1 $f$ is additive: $\Lambda_{b_{\star}}(x+y) = \Lambda_{b_{\star}}(x) + \Lambda_{b_{\star}}(y)$ for all reals $x, y$ is one of the properties of the coefficient map. [step 1.1, L1, L2]

2.2 Every value of $f$ is rational, and $f(b_{\star}) = 1$. [step 1.1, L1]

3.1 Suppose there were a real $c$ with $f(x) = c\,x$ for every real $x$. Then $c\,b_{\star} = f(b_{\star}) = 1$, so $c \ne 0$ and $c$ is invertible. [step 1.1, step 2.2, L4]

4.1 Take an irrational real $\theta$ and put $x_{0} := c^{-1}\theta$. Then $f(x_{0}) = c\,x_{0} = \theta$, which is irrational; but every value of $f$ is rational by step 2.2. This is impossible, so no such $c$ exists. [step 2.2, step 3.1, L3, L4]

5.1 So $f$ is an additive function $\mathbb{R} \to \mathbb{R}$ that is not of the form $x \mapsto c\,x$ for any real $c$, and the claim in the Statement is false. [step 2.1, step 4.1, discharge-construct] ∎

## Remarks

- **What the witness looks like, by the regularity theorem.** Since $f$ is additive and not of the form $x \mapsto cx$, the contrapositive of each clause of [[thm-cauchy-functional-equation-regularity]] applies: $f$ is continuous at no point of $\mathbb{R}$, is bounded neither above nor below on any nondegenerate interval, is monotone on no nondegenerate interval, is of constant sign on none, and its graph is dense in $\mathbb{R}^{2}$. The companion page states and uses exactly this in full.

- **The cost is the Axiom of Choice, and only that.** The construction uses no other principle, and AC is an axiom this library has adopted, so nothing here is conditional in the sense of resting on unproved material. It is worth being precise about what is *not* claimed: it is not claimed that no explicit non-linear additive function can be written down, only that this one is produced by a proof that exhibits nothing.

- **Every hypothesis that would rescue the claim is already recorded.** Adding any single one of the six conditions of [[thm-cauchy-functional-equation-regularity]] turns the false statement into a theorem. That is the reason the false statement is worth stating: the failure is not marginal, and yet it is repaired by an extremely weak hypothesis, as little as continuity at one single point.
````

### `lem-additive-bounded-above-on-an-interval-is-linear`

````markdown
---
id: lem-additive-bounded-above-on-an-interval-is-linear
kind: lemma
title: "If an additive $f : \\mathbb{R} \\to \\mathbb{R}$ is bounded above on some nondegenerate interval, then $f(x) = f(1)\\,x$ for every real $x$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-additive-function, lem-additive-is-q-linear, def-interval, def-bounded-set, lem-rat-embeds-dense, cor-archimedean-reciprocal, thm-of-archimedean, def-complete-ordered-field, lem-of-abs-value, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: true
short: "bounded above on an interval implies linear"
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
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
    - title: "Additive operators approximately preserving Birkhoff-James orthogonality (Aequationes mathematicae)"
      url: "https://link.springer.com/article/10.1007/s00010-025-01210-4"
pipeline_run: null
---

## Statement

Let $f : \mathbb{R} \to \mathbb{R}$ be additive ([[def-additive-function]]) and
suppose there are reals $p < r$ and a real $M$ with $f(z) \le M$ for every
$z \in [p,r]$; that is, $f$ is bounded above on a nondegenerate interval
([[def-interval]], [[def-bounded-set]]). Then

$$f(x) \;=\; f(1)\,x \qquad \text{for every real } x .$$

**A nondegenerate interval is all that is needed, and its position is
irrelevant.** Any order-convex set with two distinct points contains a closed
$[p,r]$ with $p < r$, and the hypothesis is used only through that closed
interval; the argument then translates the interval along $\mathbb{Q}$ to cover
the whole line.

## Facts & Assumptions

**Given:** An additive $f : \mathbb{R} \to \mathbb{R}$, reals $p < r$, and a real $M$ with $f(z) \le M$ for every $z \in [p,r]$.

[A1] $f(x+y) = f(x) + f(y)$ for all reals $x, y$ ([[def-additive-function]]).

[A2] $f(z) \le M$ for every $z$ with $p \le z \le r$, where $p < r$ ([[def-interval]], [[def-bounded-set]]).

[L1] An additive $f$ satisfies $f(0) = 0$, $f(-x) = -f(x)$, $f(qx) = qf(x)$ for every rational $q$ and every real $x$, and $f(\iota(n)x) = \iota(n)f(x)$ for every $n \in \mathbb{N}$ ([[lem-additive-is-q-linear]]).

[L2] Strictly between any two distinct reals there lies a rational ([[lem-rat-embeds-dense]]).

[L3] For every real $x$ there is a natural $n \ge 1$ with $x < \iota(n)$, and $\iota$ is positive and strictly increasing on the naturals $\ge 1$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L4] $\mathbb{R}$ is an ordered field: sums and products of positives are positive, and $u > 0$ with $v \ge u$ gives $v > 0$ ([[def-complete-ordered-field]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Put $c := f(1)$ and define $g : \mathbb{R} \to \mathbb{R}$ by $g(x) := f(x) - c\,x$. Then $g$ is additive, since both $f$ and $x \mapsto cx$ are, and $g(q) = f(q) - cq = qf(1) - cq = 0$ for every rational $q$. [A1, L1, construct]

2.1 $g$ is bounded above on $[p,r]$: for $z \in [p,r]$ one has $g(z) = f(z) - cz \le M + |c|\,K$, where $K := \max\{|p|, |r|\}$, because $|cz| \le |c|\,|z| \le |c|\,K$ and hence $-cz \le |c|\,K$. Write $M' := M + |c|\,K$ for this bound. [step 1.1, A2, L4]

2.2 $g(x + q) = g(x)$ for every real $x$ and every rational $q$: additivity gives $g(x+q) = g(x) + g(q)$ and $g(q) = 0$. [step 1.1]

2.3 $g$ is identically $0$. Suppose $g(x_{0}) \ne 0$ for some real $x_{0}$. Replacing $x_{0}$ by $-x_{0}$ if necessary, which changes the sign of $g(x_{0})$ since $g(-x) = -g(x)$, we may take $g(x_{0}) > 0$. [step 1.1, L1]

3.1 $g$ is bounded above by $M'$ on the whole of $\mathbb{R}$. Let $x$ be real. The two reals $x - r$ and $x - p$ satisfy $x - r < x - p$, so there is a rational $q$ with $x - r < q < x - p$; then $p < x - q < r$, so $x - q \in [p,r]$ and $g(x) = g((x-q) + q) = g(x-q) \le M'$. [step 2.1, step 2.2, L2]

4.1 With $x_{0}$ as in step 2.3, take a natural $n \ge 1$ with $M'/g(x_{0}) < \iota(n)$; then $\iota(n)\,g(x_{0}) > M'$. But $g(\iota(n)x_{0}) = \iota(n)\,g(x_{0}) > M'$, contradicting step 3.1. So no such $x_{0}$ exists and $g$ vanishes identically. [step 1.1, step 3.1, step 2.3, L1, L3, L4]

5.1 Therefore $f(x) = c\,x = f(1)\,x$ for every real $x$. [step 1.1, step 4.1] ∎

## Remarks

- **Only an upper bound is used, and only on one interval.** The proof never bounds $f$ below and never uses more than the single closed interval $[p,r]$; the translation invariance of step 2.2 and the sliding argument of step 3.1 do the rest. A lower bound on an interval gives the same conclusion by applying the lemma to $-f$, which is additive and bounded above there, and that is how [[thm-cauchy-functional-equation-regularity]] obtains five of its six clauses from this one lemma, the sixth being argued separately there.

- **Where the Archimedean property enters.** Once, in step 4.1, to make the multiples $\iota(n)g(x_{0})$ exceed the bound $M'$. Over a non-Archimedean ordered field the argument fails at exactly that point, and the statement is not asserted there.
````

### `lem-additive-is-q-linear`

````markdown
---
id: lem-additive-is-q-linear
kind: lemma
title: "An additive $f : \\mathbb{R} \\to \\mathbb{R}$ satisfies $f(0) = 0$, $f(-x) = -f(x)$ and $f(qx) = q\\,f(x)$ for every rational $q$ and every real $x$; in particular $f(q) = q\\,f(1)$ at every rational $q$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-additive-function, thm-induction-principle, lem-rat-embeds-dense, lem-int-embeds-rat, lem-nat-embeds-int, def-canonical-natural, lem-integer-multiples-agree-with-canonical-natural, def-complete-ordered-field, def-integers, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: true
short: "additive implies $\\mathbb{Q}$-linear"
proof_strategy: induction
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
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
pipeline_run: null
---

## Statement

Let $f : \mathbb{R} \to \mathbb{R}$ be additive ([[def-additive-function]]), and
identify $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq
\mathbb{R}$ along the canonical embeddings ([[lem-nat-embeds-int]],
[[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), writing $\iota(n)$ for the
canonical natural of $n$ in $\mathbb{R}$ ([[def-canonical-natural]]). Then, for
every real $x$:

1. $f(0) = 0$;
2. $f(-x) = -f(x)$;
3. $f(\iota(n)\,x) = \iota(n)\,f(x)$ for every $n \in \mathbb{N}$;
4. $f(m x) = m\,f(x)$ for every integer $m$;
5. $f(q x) = q\,f(x)$ for every rational $q$.

In particular, taking $x = 1$ in claim 5, $f(q) = q\,f(1)$ at every rational $q$:
**an additive function is determined on $\mathbb{Q}$ by its value at $1$.**

**What this does not say.** Claim 5 is $\mathbb{Q}$-homogeneity, not
$\mathbb{R}$-homogeneity: nothing here gives $f(\lambda x) = \lambda f(x)$ for
irrational $\lambda$, and that is exactly the gap that
[[fs-additive-implies-linear]] shows cannot be closed without a regularity
hypothesis.

## Facts & Assumptions

**Given:** An additive $f : \mathbb{R} \to \mathbb{R}$, so $f(x+y) = f(x) + f(y)$ for all reals $x, y$.

[A1] $f(x + y) = f(x) + f(y)$ for all reals $x, y$ ([[def-additive-function]]).

[L1] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] The canonical natural satisfies $\iota(0) = 0$ and $\iota(n+1) = \iota(n) + 1$, and it agrees with the additive multiple $n \cdot 1_{\mathbb{R}}$ ([[def-canonical-natural]], [[lem-integer-multiples-agree-with-canonical-natural]], [[lem-of-naturals-positive]]).

[L3] Every integer is $\iota(n)$ or $-\iota(n)$ for a natural $n$, and every rational is $m/\iota(n)$ with $m$ an integer and $n$ a natural $\ge 1$; the embeddings preserve sums and products, and $\iota(n) \ne 0$ for $n \ge 1$ ([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[def-integers]], [[lem-of-naturals-positive]]).

[L4] $\mathbb{R}$ is a field, so cancellation, distributivity and inverses of nonzero elements are available ([[def-complete-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 Claim 1: taking $x = y = 0$ in the functional equation gives $f(0) = f(0) + f(0)$, and adding $-f(0)$ to both sides gives $f(0) = 0$. [A1, L4]

1.2 Claim 3, inductive hypothesis: suppose $f(\iota(n)x) = \iota(n)f(x)$ for a given $n \in \mathbb{N}$ and every real $x$. [ih]

2.1 Claim 2: taking $y = -x$ gives $0 = f(0) = f(x) + f(-x)$, so $f(-x) = -f(x)$. [step 1.1, A1, L4]

2.2 Claim 3, base case $n = 0$: $\iota(0) = 0$, so $f(\iota(0)x) = f(0) = 0 = \iota(0)f(x)$. [step 1.1, L2, base]

2.3 Claim 3, inductive step: $\iota(n+1)x = \iota(n)x + x$, so $f(\iota(n+1)x) = f(\iota(n)x) + f(x) = \iota(n)f(x) + f(x) = (\iota(n)+1)f(x) = \iota(n+1)f(x)$. [step 1.2, A1, L2, L4]

3.1 Claim 3 holds for every $n \in \mathbb{N}$ and every real $x$, by induction on $n$ from steps 2.2 and 2.3. [step 2.2, step 2.3, L1]

4.1 Claim 4: an integer $m$ is $\iota(n)$ or $-\iota(n)$ for some natural $n$. In the first case claim 3 applies directly. In the second, $f(mx) = f(-(\iota(n)x)) = -f(\iota(n)x) = -\iota(n)f(x) = m f(x)$. [step 2.1, step 3.1, L3]

5.1 Claim 5: let $q$ be rational and write $q = m/\iota(n)$ with $m$ an integer and $n$ a natural $\ge 1$, so $\iota(n) \ne 0$. Applying claim 4 with the integer $\iota(n)$ to the real $qx$ gives $\iota(n) f(qx) = f(\iota(n) q x) = f(mx) = m f(x)$, and dividing by $\iota(n)$ gives $f(qx) = (m/\iota(n)) f(x) = q f(x)$. [step 4.1, L3, L4]

6.1 Taking $x = 1$ in claim 5 gives $f(q) = q f(1)$ for every rational $q$, and all five claims are proved. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, discharge-induction] ∎

## Remarks

- **The induction is on $\mathbb{N}$ and everything else is algebra.** Only
  claim 3 needs induction; claims 4 and 5 are obtained from it by the two field
  operations, and claims 1 and 2 are two substitutions into the equation. The
  base case is $n = 0$, where $\iota(0) = 0$ and the identity reads $f(0) = 0$;
  it is a genuine case and not a convention, since $\mathbb{N}$ contains $0$.

- **This is the whole of the algebraic theory.** Every regularity theorem about
  Cauchy's equation ([[thm-cauchy-functional-equation-regularity]]) works by
  combining claim 5 with density of $\mathbb{Q}$ in $\mathbb{R}$: the value of
  $f$ is pinned on a dense set, and a regularity hypothesis is what forbids the
  values off that set from being arbitrary.
````

### `lem-metrics-on-rn`

````markdown
---
id: lem-metrics-on-rn
kind: lemma
title: "$\\mathbb{R}^n$ as the set of functions $n \\to \\mathbb{R}$, and $d_1$, $d_2$, $d_\\infty$ are metrics on it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-natural-numbers, def-finite-sum, thm-minkowski-finite,
       thm-cauchy-schwarz-finite, lem-finite-set-has-max, thm-of-square-roots,
       lem-of-abs-value, lem-finite-sum-laws, def-max-min, lem-of-square-monotone,
       lem-of-square-positive, lem-of-triangle-inequality, def-abs-value,
       def-integer-power, def-ordered-field, def-complete-ordered-field,
       lem-of-add-order]
justified_by: []
aliases: [def-euclidean-space]
landmark: true
short: "$\\mathbb{R}^n$ with $d_1, d_2, d_\\infty$"
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
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "Taxicab geometry (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Taxicab_geometry"
    - title: "Lp space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lp_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$. A von Neumann natural is the set of its
predecessors, $n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so it can be
used directly as an index set. Define

$$\mathbb{R}^n := \{\, x : x \text{ is a function } n \to \mathbb{R} \,\},$$

and write $x_k$ for $x(k)$, $k < n$. Two elements of $\mathbb{R}^n$ are equal
exactly when they agree at every $k < n$, functions being equal when they have
the same values. For $x, y \in \mathbb{R}^n$ put

$$d_1(x,y) := \sum_{k<n} |x_k - y_k|, \qquad d_2(x,y) := \sqrt{\ \sum_{k<n} (x_k - y_k)^2\ }, \qquad d_\infty(x,y) := \max\{\, |x_k - y_k| : k < n \,\}.$$

All three are well defined: the finite sums are those of [[def-finite-sum]]; the
sum of squares is nonnegative ([[lem-finite-sum-laws]], [[lem-of-square-positive]])
so it has a unique nonnegative square root ([[thm-of-square-roots]]); and
$\{|x_k - y_k| : k < n\}$ is a nonempty finite subset of $\mathbb{R}$, because
$n \ge 1$, so it has a maximum ([[lem-finite-set-has-max]], [[def-max-min]]).

**Then $d_1$, $d_2$ and $d_\infty$ are metrics on $\mathbb{R}^n$**
([[def-metric-space]]).

**Why $n \ge 1$.** For $n = 0$ the set $\mathbb{R}^0$ has exactly one element,
the empty function, and $d_1$ and $d_2$ are the empty sum $0$ and its root; but
$d_\infty$ would be the maximum of the empty set, which does not exist. The
hypothesis $n \ge 1$ is therefore not decoration, and it is carried by every
statement about $d_\infty$ in this library.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; elements $x, y, z \in \mathbb{R}^n$; and the lists $a_k := x_k - y_k$, $b_k := y_k - z_k$ for $k < n$, so that $a_k + b_k = x_k - z_k$. Write $A := \sum_{k<n} a_k^2$, $C := \sum_{k<n} b_k^2$ and $B := \sum_{k<n} a_k b_k$.

[L1] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, monotonicity; a sum of nonnegative terms is nonnegative, every single term is at most the sum, and a sum of nonnegative terms that vanishes has every term $0$.

[L2] Absolute value ([[lem-of-abs-value]], [[def-abs-value]]): $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and $u \le |u|$.

[L3] Two-term triangle inequality: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L4] Minkowski's inequality at the rational exponent $p = 1$ ([[thm-minkowski-finite]]): $\sum_{k<n}|a_k + b_k| \le \sum_{k<n}|a_k| + \sum_{k<n}|b_k|$.

[L5] Cauchy-Schwarz in root form ([[thm-cauchy-schwarz-finite]]): $\big|\sum_{k<n} a_k b_k\big| \le \sqrt{\sum_{k<n} a_k^2}\ \sqrt{\sum_{k<n} b_k^2}$.

[L6] Square roots ([[thm-of-square-roots]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt{c})^2 = c$; in particular $\sqrt{c} = 0$ if and only if $c = 0$.

[L7] Squares ([[lem-of-square-positive]], [[def-integer-power]]): $u^2 \ge 0$ always, and $u^2 = 0$ only for $u = 0$; and monotonicity of squaring on the nonnegatives, $s \le t \iff s^2 \le t^2$ for $s, t \ge 0$ ([[lem-of-square-monotone]]).

[L8] Maximum of a nonempty finite set of reals: it exists, it belongs to the set, and it is an upper bound of the set ([[lem-finite-set-has-max]], [[def-max-min]]).

[L9] Order arithmetic in $\mathbb{R}$: inequalities may be added and a constant added to both sides, in the strict form of [[lem-of-add-order]] and, together with the case of equality settled by totality ([[def-ordered-field]], [[def-complete-ordered-field]]), in the nonstrict form used below.

## Proof

**Proof technique:** direct.

1.1 Separation for $d_1$: $d_1(x,y) = \sum_{k<n}|a_k|$ is a sum of nonnegative terms, so it vanishes exactly when every $|a_k|$ vanishes, that is exactly when $x_k = y_k$ for all $k < n$, that is exactly when $x = y$. [L1, L2]

1.2 Separation for $d_2$: $d_2(x,y) = \sqrt{A}$ vanishes exactly when $A = 0$; $A$ is a sum of nonnegative terms, so $A = 0$ exactly when $a_k^2 = 0$ for every $k < n$, which happens exactly when every $a_k = 0$, that is exactly when $x = y$. [L1, L6, L7]

1.3 Separation for $d_\infty$: the maximum $d_\infty(x,y)$ belongs to $\{|a_k| : k < n\}$ and bounds it above, so it is $0$ exactly when every $|a_k| = 0$, that is exactly when $x = y$. [L2, L8]

1.4 Symmetry for all three: $|y_k - x_k| = |-(x_k - y_k)| = |x_k - y_k|$ and $(y_k - x_k)^2 = (x_k - y_k)^2$ for every $k < n$, so the three defining expressions are unchanged when $x$ and $y$ are exchanged. [L2, L7]

1.5 Triangle inequality for $d_1$: applying [L4] to the lists $(a_k)$ and $(b_k)$ gives $d_1(x,z) = \sum_{k<n}|a_k + b_k| \le \sum_{k<n}|a_k| + \sum_{k<n}|b_k| = d_1(x,y) + d_1(y,z)$. [L4]

1.6 Expanding with additivity and scaling: $\sum_{k<n}(a_k + b_k)^2 = \sum_{k<n}\big(a_k^2 + 2a_kb_k + b_k^2\big) = A + 2B + C$. [L1, algebra]

1.7 By [L5] and $B \le |B|$: $B \le \sqrt{A}\,\sqrt{C}$, and $A = (\sqrt{A})^2$, $C = (\sqrt{C})^2$ with $\sqrt{A}, \sqrt{C} \ge 0$. [L2, L5, L6]

1.8 Triangle inequality for $d_\infty$: for each $k < n$, $|a_k + b_k| \le |a_k| + |b_k| \le d_\infty(x,y) + d_\infty(y,z)$ because the two maxima bound their sets; so $d_\infty(x,y) + d_\infty(y,z)$ is an upper bound of $\{|a_k + b_k| : k < n\}$, and the maximum $d_\infty(x,z)$ of that set is one of its elements, whence $d_\infty(x,z) \le d_\infty(x,y) + d_\infty(y,z)$. [L3, L8, L9]

2.1 Combining steps 1.6 and 1.7: $\sum_{k<n}(a_k+b_k)^2 = A + 2B + C \le (\sqrt{A})^2 + 2\sqrt{A}\sqrt{C} + (\sqrt{C})^2 = \big(\sqrt{A} + \sqrt{C}\big)^2$. [step 1.6, step 1.7, L9, algebra]

3.1 Both $d_2(x,z) = \sqrt{\sum_{k<n}(a_k+b_k)^2}$ and $\sqrt{A} + \sqrt{C}$ are nonnegative, and by step 2.1 the square of the first is at most the square of the second, so monotonicity of squaring on the nonnegatives gives $d_2(x,z) \le \sqrt{A} + \sqrt{C} = d_2(x,y) + d_2(y,z)$. [step 2.1, L6, L7]

4.1 Each of $d_1$, $d_2$, $d_\infty$ satisfies (M1) by steps 1.1, 1.2 and 1.3, satisfies (M2) by step 1.4, and satisfies (M3) by steps 1.5, 3.1 and 1.8 respectively; hence all three are metrics on $\mathbb{R}^n$. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.8, step 3.1] ∎

## Remarks

- **$\mathbb{R}^n$ is defined ZFC-natively here**, as the set of functions from
  the von Neumann natural $n$ to $\mathbb{R}$, precisely so that its coordinates
  are indexed by $k < n$ and the finite-sum machinery of [[def-finite-sum]],
  [[thm-minkowski-finite]] and [[thm-cauchy-schwarz-finite]], all of which sum
  over $k < n$, applies without any reindexing.
- **No rational power appears anywhere above.** The triangle inequality for
  $d_2$ is obtained from Cauchy-Schwarz and the existence of square roots, not
  from Minkowski at $p = 2$, so this lemma does not depend on the theory of
  rational exponents. Minkowski is used only at $p = 1$, where its statement is
  the termwise sum of the two-term triangle inequality.
- **The three metrics are Lipschitz equivalent, with explicit constants,** and
  in particular have the same topology; that computation is on the companion
  page and is not needed here.
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

### `thm-metric-closure-characterisation`

````markdown
---
id: thm-metric-closure-characterisation
kind: theorem
title: "The closure of a nonempty $A$ is $\\{x : d(x,A) = 0\\}$, equals $A$ together with its limit points, and is the smallest closed superset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-interior-closure-boundary, def-metric-bounded-diameter,
       thm-metric-open-set-algebra, lem-inf-epsilon, def-metric-topology,
       def-metric-ball, def-infimum, lem-metric-nonnegativity, def-metric-space,
       thm-infimum-property, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "closure = zero-distance set = smallest closed superset"
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
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Hausdorff distance (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_distance"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A \subseteq X$,
with closure, derived set and limit points as in
[[def-metric-interior-closure-boundary]]. Then:

1. If $A \ne \emptyset$, then $\overline{A} = \{\, x \in X : d(x,A) = 0 \,\}$,
   where $d(x,A)$ is the distance from a point to a nonempty set
   ([[def-metric-bounded-diameter]]).
2. $\overline{A} = A \cup A'$.
3. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$. So $\overline{A}$ is the smallest closed
   superset of $A$, and $A$ is closed if and only if $A = \overline{A}$.

Claims 2 and 3 hold for every $A$, the empty set included: $\overline{\emptyset}$
is empty because no ball meets $\emptyset$, and $\emptyset$ is closed because $X$
is open ([[def-metric-topology]]). Claim 1 carries the hypothesis $A \ne \emptyset$
because $d(x,A)$ is defined only for nonempty $A$
([[def-metric-bounded-diameter]]).

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a subset $A \subseteq X$, a point $x \in X$, and a closed set $F \subseteq X$ with $A \subseteq F$; when $A \ne \emptyset$, the set $E(x) := \{\, d(x,a) : a \in A \,\}$, whose infimum is $d(x,A)$.

[A1] Closure and derived set: $x \in \overline{A}$ means $B(x,r) \cap A \ne \emptyset$ for every $r > 0$; $x \in A'$ means $B(x,r) \cap (A \setminus \{x\}) \ne \emptyset$ for every $r > 0$ ([[def-metric-interior-closure-boundary]]).

[A2] Open and closed: $U$ is open when every point of $U$ has a ball around it inside $U$; $F$ is closed when $X \setminus F$ is open ([[def-metric-topology]]).

[L1] For nonempty $A$, the set $E(x)$ is nonempty and bounded below by $0$, so $d(x,A) = \inf E(x)$ exists and is a lower bound of $E(x)$ ([[def-metric-bounded-diameter]], [[lem-metric-nonnegativity]], [[thm-infimum-property]], [[def-infimum]]).

[L2] Epsilon characterisation of the infimum: for a nonempty $S \subseteq \mathbb{R}$ bounded below and a lower bound $\ell$ of $S$, one has $\ell = \inf S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $s < \ell + \varepsilon$ ([[lem-inf-epsilon]]).

[L3] Balls are open, so a point of a ball has a ball around it inside that ball ([[thm-metric-open-set-algebra]], [[def-metric-ball]]).

[L4] Membership in a ball: $a \in B(x,r)$ means $d(x,a) < r$, and $x \in B(x,r)$ always ([[def-metric-ball]]); trichotomy of the order of $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $A \ne \emptyset$ and $x \in \overline{A}$, and let $\varepsilon > 0$ be arbitrary; then $B(x,\varepsilon) \cap A \ne \emptyset$, so there is $a \in A$ with $d(x,a) < \varepsilon = 0 + \varepsilon$, and $0$ is a lower bound of $E(x)$, so $d(x,A) = 0$ by the epsilon characterisation. [A1, L1, L2, L4]

1.2 Conversely suppose $A \ne \emptyset$ and $d(x,A) = 0$, and let $r > 0$ be arbitrary; the epsilon characterisation supplies $a \in A$ with $d(x,a) < 0 + r = r$, that is $a \in B(x,r) \cap A$, so $x \in \overline{A}$. [A1, L1, L2, L4]

1.3 $A \subseteq \overline{A}$ and $A' \subseteq \overline{A}$: a point $a \in A$ lies in $B(a,r) \cap A$ for every $r$, and a ball meeting $A \setminus \{x\}$ meets $A$. [A1, L4]

1.4 If $x \in \overline{A}$ and $x \notin A$, then for every $r$ the nonempty set $B(x,r) \cap A$ equals $B(x,r) \cap (A \setminus \{x\})$, since $x$ is not a member of $A$; hence $x \in A'$. [A1]

1.5 $\overline{A}$ is closed: let $x \in X \setminus \overline{A}$ and fix $r$ with $B(x,r) \cap A = \emptyset$; for $y \in B(x,r)$ there is $s$ with $B(y,s) \subseteq B(x,r)$, so $B(y,s) \cap A = \emptyset$ and $y \notin \overline{A}$, whence $B(x,r) \subseteq X \setminus \overline{A}$ and $X \setminus \overline{A}$ is open. [A1, A2, L3]

1.6 $\overline{A} \subseteq F$ for every closed $F \supseteq A$: if $x \in \overline{A}$ had $x \notin F$, then $X \setminus F$ open would give $r$ with $B(x,r) \subseteq X \setminus F \subseteq X \setminus A$, so $B(x,r) \cap A = \emptyset$, contradicting $x \in \overline{A}$. [A1, A2, given]

2.1 Claim 1 follows: by step 1.1 every adherent point of a nonempty $A$ satisfies $d(x,A) = 0$, and by step 1.2 every $x$ with $d(x,A) = 0$ is adherent. [step 1.1, step 1.2]

2.2 Claim 2 follows: $A \cup A' \subseteq \overline{A}$ by step 1.3, and $\overline{A} \subseteq A \cup A'$ by step 1.4, since a point of $\overline{A}$ either lies in $A$ or, not lying in $A$, lies in $A'$. [step 1.3, step 1.4]

2.3 Claim 3 follows: $\overline{A}$ is closed by step 1.5, contains $A$ by step 1.3, and sits inside every closed superset of $A$ by step 1.6; in particular if $A$ is closed then $\overline{A} \subseteq A \subseteq \overline{A}$, so $A = \overline{A}$, and conversely if $A = \overline{A}$ then $A$ is closed. [step 1.3, step 1.5, step 1.6]

3.1 Claims 1, 2 and 3 are therefore all established. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Claim 1 is where the infimum does the work.** Reading it right to left,
  $d(x,A) = 0$ says that $A$ has points arbitrarily close to $x$ without saying
  that any of them is $x$; reading it left to right, adherence says the same
  thing in the language of balls. The equivalence is exactly the epsilon
  characterisation of the infimum ([[lem-inf-epsilon]]) with the lower bound $0$.
- **The distance function is $1$-Lipschitz** ([[lem-distance-to-set-is-lipschitz]]),
  so claim 1 exhibits $\overline{A}$ as the zero set of a function that does not
  increase distances. That is not used above and is recorded only as
  orientation.
- **Claim 3 is the form that transfers to general topology**, where no metric is
  available and the closure is defined outright as the intersection of all
  closed supersets. Claim 1 is the specifically metric statement, and claim 2
  sits between them.
````

