---
id: lem-sign-preservation-near-a-limit
kind: lemma
title: "If $\\lim_{x \\to c} f(x) = L \\ne 0$ then $|f| > |L|/2$ on a punctured neighbourhood of $c$; in particular if $L > 0$ then $f > L/2 > 0$ there"
status: published
origin: session
deps: [def-function-limit, def-neighbourhood-r, def-limit-point-r, cor-of-reverse-triangle, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: [lem-sign-preservation-for-function-limits]
landmark: true
short: "sign preservation, $|f| > |L|/2$"
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
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $c$ be a limit point of $A$
([[def-limit-point-r]]), let $f : A \to \mathbb{R}$ and suppose the limit of $f$
at $c$ exists with $\lim_{x \to c} f(x) = L$ and $L \ne 0$
([[def-function-limit]]). Then there is a real $\delta > 0$ such that every
$x \in A$ with $0 < |x - c| < \delta$ satisfies

$$|f(x)| \;>\; \frac{|L|}{2} \;>\; 0 ;$$

in particular $f(x) \ne 0$ for every such $x$. Moreover:

- if $L > 0$ then $f(x) > L/2 > 0$ for every such $x$;
- if $L < 0$ then $f(x) < L/2 < 0$ for every such $x$.

Consequently, writing

$$A_0 := \{\, x \in A \ : \ f(x) \ne 0 \,\},$$

the point $c$ is a limit point of $A_0$.

**The bound $|L|/2$, and not merely "$f \ne 0$", is what later proofs need.** The
quotient case of [[thm-algebra-of-function-limits]] estimates $1/|f|$ near $c$
and therefore needs a *positive lower* bound on $|f|$ there, and the last claim
is what lets a limit be taken on the smaller domain $A_0$ at all.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a limit point $c$ of $A$, a function $f : A \to \mathbb{R}$ and a real $L \ne 0$ with $\lim_{x \to c} f(x) = L$; and $A_0 := \{\, x \in A : f(x) \ne 0 \,\}$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$ ([[def-function-limit]]).

[L2] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|u| = u$ for $u \ge 0$ and $|u| = -u$ for $u \le 0$; and for $t > 0$, $|u| < t$ is equivalent to $-t < u < t$ ([[lem-of-abs-value]]).

[L3] Reverse triangle inequality: $\bigl| |u| - |v| \bigr| \le |u - v|$ ([[cor-of-reverse-triangle]]).

[L4] Limit point: for every real $\rho > 0$ there is $x \in A$ with $0 < |x - c| < \rho$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L5] Order arithmetic in $\mathbb{R}$: trichotomy, so $u \ne 0$ with $|u| \ge 0$ and $|u| \ne 0$ forces $|u| > 0$; $0 < 1$ ([[cor-of-one-positive]]), hence $2 > 0$ and $2^{-1} > 0$ ([[lem-of-inverse-positive]]), so $t/2 > 0$ and $t - t/2 = t/2$ for $t > 0$ ([[lem-of-sign-rules]]); adding a constant to an inequality ([[lem-of-add-order]]); and of two positive reals the smaller is positive, the order being total ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $L \ne 0$ we have $|L| \ne 0$ while $|L| \ge 0$, so trichotomy gives $|L| > 0$, and $\varepsilon := |L|/2 > 0$ with $|L| - |L|/2 = |L|/2$. [given, L2, L5]

2.1 Apply [L1] with this $\varepsilon$: fix a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < |L|/2$. [step 1.1, L1, choose]

3.1 For every such $x$ the reverse triangle inequality gives $\bigl| |f(x)| - |L| \bigr| \le |f(x) - L| < |L|/2$, hence $|f(x)| - |L| > -|L|/2$ and so $|f(x)| > |L| - |L|/2 = |L|/2 > 0$; in particular $|f(x)| \ne 0$ and therefore $f(x) \ne 0$. [step 2.1, L2, L3, L5]

3.2 If $L > 0$ then $|L| = L$, and for every such $x$ the estimate $|f(x) - L| < L/2$ gives $-L/2 < f(x) - L$, that is $f(x) > L - L/2 = L/2 > 0$. [step 2.1, L2, L5]

3.3 If $L < 0$ then $|L| = -L$, and for every such $x$ the estimate $|f(x) - L| < -L/2$ gives $f(x) - L < -L/2$, that is $f(x) < L - L/2 = L/2 < 0$. [step 2.1, L2, L5]

4.1 Let $\eta > 0$ be an arbitrary real and let $\rho$ be the smaller of $\delta$ and $\eta$, so $\rho > 0$. Since $c$ is a limit point of $A$ there is $x \in A$ with $0 < |x - c| < \rho$; that $x$ satisfies $0 < |x - c| < \delta$, hence $f(x) \ne 0$ by step 3.1, so $x \in A_0$ and $0 < |x - c| < \eta$. As $\eta$ was arbitrary, $c$ is a limit point of $A_0$. [step 3.1, L4, L5]

5.1 So on $A \cap N^{*}_{\delta}(c)$ the function is bounded away from $0$ by $|L|/2$ and carries the sign of $L$, and $c$ remains a limit point of the set $A_0$ where $f$ does not vanish. [step 3.1, step 3.2, step 3.3, step 4.1] ∎

## Remarks

- **Why $|L|/2$ and not some other fraction.** Any $\varepsilon$ strictly between $0$ and $|L|$ gives a positive lower bound $|L| - \varepsilon$; the choice $\varepsilon = |L|/2$ makes the bound $|L|/2$, which is the form used downstream and needs only that $2$ is invertible and positive ([[cor-of-one-positive]], [[lem-of-inverse-positive]]).

- **The last claim is the one that is easy to forget.** Restricting a quotient to the set where the denominator does not vanish is useless unless $c$ is still a limit point of that set, since [[def-function-limit]] is stated only at a limit point. Step 4.1 is exactly that check, and it is what [[thm-algebra-of-function-limits]] cites when it forms $A_0$.

- **Nothing here says anything about $f(c)$.** As always the point $c$ itself is excluded by $0 < |x - c|$, so $f(c)$ may be $0$ even when $L \ne 0$; the function of [[fs-limit-equals-value]], read with the roles of $0$ and $1$ exchanged, is such an example.
