---
id: thm-cauchy-functional-equation-regularity
kind: theorem
title: "Six regularity conditions each force an additive $f : \\mathbb{R} \\to \\mathbb{R}$ to be $x \\mapsto f(1)x$: continuity at a single point, monotonicity on a nondegenerate interval, boundedness above on one, boundedness below on one, constancy of sign on one, and a graph that is not dense in $\\mathbb{R}^{2}$"
status: published
origin: session
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
