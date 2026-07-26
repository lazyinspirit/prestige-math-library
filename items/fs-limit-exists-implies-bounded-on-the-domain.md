---
id: fs-limit-exists-implies-bounded-on-the-domain
kind: false-statement
title: "FALSE: a function with a limit at $c$ is bounded on its whole domain"
status: published
origin: session
deps: [lem-limit-implies-local-boundedness, def-function-limit, def-limit-point-r, def-neighbourhood-r, def-bounded-set, def-interval, thm-of-archimedean, lem-of-inverse-positive, lem-of-sign-rules, lem-of-abs-value, lem-of-add-order, lem-of-naturals-positive, cor-of-one-positive, def-field, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "FALSE: globally bounded"
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
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

**False claim:** let $A \subseteq \mathbb{R}$, let $c$ be a limit point of $A$
([[def-limit-point-r]]) and let $f : A \to \mathbb{R}$ have a limit at $c$
([[def-function-limit]]). Then $f$ is bounded on $A$, that is, the image $f(A)$
is a bounded subset of $\mathbb{R}$ ([[def-bounded-set]]).

**What is true is the local statement**,
[[lem-limit-implies-local-boundedness]]: there is a *radius* $\delta > 0$ such
that $f$ is bounded on $A \cap N^{*}_{\delta}(c)$. The radius is produced by the
limit condition at the single tolerance $\varepsilon = 1$, and it carries no
information whatever about the values of $f$ far from $c$, which the limit
condition never constrains.

The witness below is $f(x) = 1/x$ on $(0, \infty)$ at the point $c = 1$: the
limit there is $1$, and $f$ is bounded near $1$, while on the whole domain
$f$ takes values above every real.

## Facts & Assumptions

**Given:** The set $A := (0, \infty)$ ([[def-interval]]), the point $c := 1$, and the function $f : A \to \mathbb{R}$ with $f(x) := 1/x = x^{-1}$.

[L1] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - P| < \varepsilon$.

[L2] Limit point and neighbourhoods ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Absolute value: $|u| \ge 0$; $|u| = u$ for $u \ge 0$; $|uv| = |u|\,|v|$; $|-u| = |u|$; and for $t > 0$, $|u| < t$ is equivalent to $-t < u < t$ ([[lem-of-abs-value]]).

[L4] Inverses and order: $a > 0$ gives $a^{-1} > 0$, and $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); $(a^{-1})^{-1} = a$ for $a \ne 0$, inverses being unique ([[def-field]]); and for $t > 0$, $u < v$ is equivalent to $ut < vt$ ([[lem-of-sign-rules]]).

[L5] Order arithmetic: $0 < 1$, hence $2 > 0$ and $1/2 > 0$ with $1 - 1/2 = 1/2$ ([[cor-of-one-positive]], [[lem-of-add-order]]); of two positive reals the smaller is positive, the order being total ([[def-ordered-field]]).

[L6] Archimedean property: for every real $M$ there is a natural $n \ge 1$ with $M < n \cdot 1_{\mathbb{R}}$, and the canonical naturals satisfy $n \cdot 1_{\mathbb{R}} > 0$ ([[thm-of-archimedean]], [[lem-of-naturals-positive]], [[def-complete-ordered-field]]).

[L7] Bounded set: $S \subseteq \mathbb{R}$ is bounded when it has an upper bound and a lower bound; a set with no upper bound is not bounded ([[def-bounded-set]]).

## Refutation

**Proof technique:** direct.

1.1 The point $1$ lies in $A = (0,\infty)$ and is a limit point of $A$: given a real $\varepsilon > 0$, let $\rho$ be the smaller of $\varepsilon$ and $1$, so $\rho > 0$; then $1 + \rho/2 > 1 > 0$ lies in $A$ and satisfies $0 < |(1 + \rho/2) - 1| = \rho/2 < \varepsilon$. [L2, L3, L5]

1.2 $f$ is well defined on $A$: every $x \in A$ has $x > 0$, hence $x \ne 0$ and $x^{-1}$ exists, with $x^{-1} > 0$. [L4, L7]

2.1 The limit of $f$ at $1$ exists and equals $1$. Let $\varepsilon > 0$ be an arbitrary real and let $\delta$ be the smaller of $1/2$ and $\varepsilon/2$, so $\delta > 0$. For $x \in A$ with $0 < |x - 1| < \delta$ we get $x > 1 - 1/2 = 1/2 > 0$, hence $0 < 1/x < 2$ by [L4]; and $|1/x - 1| = |(1 - x)/x| = |x - 1| \cdot (1/x) < \delta \cdot 2 \le \varepsilon$. [step 1.1, step 1.2, L1, L3, L4, L5]

2.2 The image $f(A)$ has no upper bound. Let $M$ be an arbitrary real; by [L6] fix a natural $n \ge 1$ with $M < n \cdot 1_{\mathbb{R}}$, and note $n \cdot 1_{\mathbb{R}} > 0$. Then $x := (n \cdot 1_{\mathbb{R}})^{-1}$ satisfies $x > 0$, so $x \in A$, and $f(x) = x^{-1} = n \cdot 1_{\mathbb{R}} > M$. So no real bounds $f(A)$ above, and $f(A)$ is not bounded. [step 1.2, L4, L6, L7]

3.1 So $f$ has a limit at the limit point $c = 1$ of its domain and is unbounded on that domain: the claim is false, while [[lem-limit-implies-local-boundedness]] remains true and gives boundedness on $A \cap N^{*}_{1/2}(1)$, where indeed $0 < f(x) < 2$ by step 2.1. [step 2.1, step 2.2, L7] ∎

## Remarks

- **The limit hypothesis is entirely local and the conclusion asked for is global**, so no argument could bridge them. The witness makes that concrete by putting the unbounded behaviour at the *other* end of the domain, arbitrarily far from $c$ in the only sense available here.

- **The sequential analogue is true**, and that contrast is worth noting: a convergent sequence *is* bounded ([[lem-convergent-implies-bounded]]), because a sequence has only finitely many terms outside any tail, and finitely many reals are bounded. A function has no such structure: the part of $A$ outside a punctured neighbourhood of $c$ can be infinite and can carry arbitrary values.

- **A bounded version does hold with an extra hypothesis**: if $A$ is itself contained in a punctured neighbourhood of $c$ on which the limit estimate applies, then local and global boundedness coincide. That is a hypothesis on the domain, not a theorem about limits.
