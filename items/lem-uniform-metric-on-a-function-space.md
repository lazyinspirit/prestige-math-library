---
id: lem-uniform-metric-on-a-function-space
kind: lemma
title: "For a nonempty set $X$ and a metric space $(Y,d)$ the uniform metric $\\bar\\rho(f,g) = \\sup_{x} \\min\\{d(f(x),g(x)), 1\\}$ is a metric on $Y^{X}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-metric-space, lem-bounded-remetrisation, def-bounded-set,
       def-complete-ordered-field, lem-sup-unique, def-max-min, lem-finite-set-has-max,
       def-topology-of-pointwise-convergence, lem-metric-nonnegativity,
       rem-sup-conventions, lem-of-add-order, def-ordered-field,
       lem-sup-metric-is-a-metric, thm-extreme-value-metric]
justified_by: []
aliases: [def-uniform-metric]
landmark: true
short: "uniform metric on $Y^{X}$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Uniform norm (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_norm"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $X$ be a **nonempty** set, let $(Y,d)$ be a metric space
([[def-metric-space]]) and write

$$\bar d(u,v) \;:=\; \min\{\, d(u,v),\ 1 \,\} \qquad (u, v \in Y),$$

which is a metric on $Y$ with $\bar d \le 1$ everywhere
([[lem-bounded-remetrisation]], claims 1 and 2). For $f, g \in Y^{X}$
([[def-topology-of-pointwise-convergence]]) put

$$R(f,g) \;:=\; \{\, \bar d\big(f(x), g(x)\big) : x \in X \,\} \subseteq \mathbb{R}, \qquad \bar\rho(f,g) \;:=\; \sup R(f,g) .$$

This is well defined: $R(f,g)$ is nonempty because $X$ is, and $1$ is an upper
bound of it, so the least upper bound exists ([[def-complete-ordered-field]]) and
is unique ([[lem-sup-unique]]).

**Then $\bar\rho$ is a metric on $Y^{X}$** ([[def-metric-space]]), the **uniform
metric**, and $\bar\rho(f,g) \le 1$ for all $f, g$.

**Both hypotheses are used and neither is decoration.** Nonemptiness of $X$ is
what makes $R(f,g)$ nonempty; for $X = \varnothing$ the set $Y^{X}$ has a single
element and $\sup \varnothing$ does not exist in this library, which has no
extended real line ([[rem-sup-conventions]]). Truncating $d$ at $1$ is what makes
$R(f,g)$ bounded above **with no boundedness hypothesis on $f$ and $g$**; that is
the whole reason the truncation is there.

## Facts & Assumptions

**Given:** A nonempty set $X$, a metric space $(Y,d)$, functions $f, g, h \in Y^{X}$, a fixed $x_0 \in X$, and $\bar d$, $R$, $\bar\rho$ as displayed above.

[L1] $\bar d = \min\{d,1\}$ is a metric on $Y$: it satisfies (M1), (M2) and (M3) of [[def-metric-space]], and $0 \le \bar d(u,v) \le 1$ for all $u,v$ ([[lem-bounded-remetrisation]], claims 1 and 2, [[lem-metric-nonnegativity]]).

[L2] Least-upper-bound property: a nonempty subset of $\mathbb{R}$ bounded above has a least upper bound, which is an upper bound lying below every upper bound, and it is unique ([[def-complete-ordered-field]], [[lem-sup-unique]], [[def-bounded-set]]).

[L3] Order arithmetic: inequalities may be added and a constant added to both sides, in the strict form of [[lem-of-add-order]] and, with the case of equality settled by totality of the order, in the nonstrict form; and $a \le 0$ together with $a \ge 0$ gives $a = 0$ ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 For all $f, g \in Y^{X}$ the set $R(f,g)$ is nonempty, since $x_0 \in X$ contributes $\bar d(f(x_0),g(x_0))$, and $1$ is an upper bound of it by [L1]; so $\bar\rho(f,g) = \sup R(f,g)$ exists, is unique, and satisfies $\bar\rho(f,g) \le 1$. [given, L1, L2]

2.1 $\bar\rho(f,g) \ge \bar d(f(x),g(x)) \ge 0$ for every $x \in X$, a supremum being an upper bound of its set and $\bar d$ being nonnegative. [step 1.1, L1, L2]

2.2 Symmetry (M2): $\bar d(g(x),f(x)) = \bar d(f(x),g(x))$ for every $x$ by (M2) for $\bar d$, so $R(g,f)$ and $R(f,g)$ are the same subset of $\mathbb{R}$ and have the same supremum. [step 1.1, L1, L2]

2.3 Separation (M1), the other direction: if $f = g$ then $R(f,g) = \{0\}$ by (M1) for $\bar d$, and the least upper bound of $\{0\}$ is $0$, so $\bar\rho(f,g) = 0$. [step 1.1, L1, L2]

3.1 Separation (M1), one direction: if $\bar\rho(f,g) = 0$ then for every $x \in X$ we have $\bar d(f(x),g(x)) \le 0$ by step 2.1 and $\bar d(f(x),g(x)) \ge 0$ by [L1], hence $\bar d(f(x),g(x)) = 0$, hence $f(x) = g(x)$ by (M1) for $\bar d$; so $f = g$, two elements of $Y^{X}$ being equal exactly when they agree at every point. [step 2.1, L1, L3]

3.2 For every $x \in X$: $\bar d(f(x),h(x)) \le \bar d(f(x),g(x)) + \bar d(g(x),h(x)) \le \bar\rho(f,g) + \bar\rho(g,h)$, by (M3) for $\bar d$ and because each supremum bounds its own set above. [step 1.1, step 2.1, L1, L2, L3]

4.1 Triangle inequality (M3): by step 3.2 the real number $\bar\rho(f,g) + \bar\rho(g,h)$ is an upper bound of $R(f,h)$, and $\bar\rho(f,h)$ is the least upper bound of that set, so $\bar\rho(f,h) \le \bar\rho(f,g) + \bar\rho(g,h)$. [step 3.2, L2]

5.1 The function $\bar\rho : Y^{X} \times Y^{X} \to \mathbb{R}$ therefore satisfies (M1) by steps 3.1 and 2.3, (M2) by step 2.2 and (M3) by step 4.1, so it is a metric on $Y^{X}$, and $\bar\rho \le 1$ by step 1.1. [step 1.1, step 2.2, step 3.1, step 2.3, step 4.1, L1] ∎

## Remarks

- **This replaces the published supremum metric here; it does not generalise it.** [[lem-sup-metric-is-a-metric]] is the metric $d_\infty(f,g) = \sup_x |f(x)-g(x)|$ on the **bounded real-valued** functions on a nonempty set, and its Statement is about that set of functions and that target. It cannot carry $C(X,Y)$ for a metric target $Y$, and it cannot carry unbounded functions at all. The metric above is defined on all of $Y^{X}$, for an arbitrary metric target, at the cost of truncating distances at $1$. Where both are defined the two are different functions: they disagree at every pair whose distance somewhere exceeds $1$. The companion page verifies, on $C([0,1],\mathbb{R})$, that they are nevertheless uniformly equivalent there and so induce the same topology; no wider claim than that is made here.

- **The supremum need not be attained**, so $\bar\rho(f,g)$ is a supremum and not a maximum. It is attained when $X$ is a nonempty compact metric space and $f, g$ are continuous, by the extreme value theorem ([[thm-extreme-value-metric]]); nothing below assumes it in general.

- **Truncation is what removes the boundedness hypothesis, and it is topologically free.** $\min\{d,1\}$ is uniformly equivalent to $d$, hence topologically equivalent to it ([[lem-bounded-remetrisation]], claim 3), so nothing about the topology of $Y$ is changed by the truncation. What *is* changed is the numerical value of the distance, and every statement below that compares $\bar\rho$ with an untruncated distance says at which threshold the two agree.
