---
id: ex-one-sided-limits-of-the-sign-function
kind: example
title: "The sign function has both one-sided limits at $0$ and no two-sided limit"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-one-sided-limits, thm-two-sided-limit-iff-both-one-sided, def-function-limit, lem-function-limit-unique, def-limit-point-r, def-neighbourhood-r, def-interval, lem-of-abs-value, lem-of-add-order, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "one-sided limits of $\\mathrm{sgn}$"
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
    - title: "Sign function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sign_function"
    - title: "One-sided limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/One-sided_limit"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Example

Define $\operatorname{sgn} : \mathbb{R} \to \mathbb{R}$ by

$$\operatorname{sgn}(x) := \begin{cases} 1 & x > 0, \\ 0 & x = 0, \\ -1 & x < 0. \end{cases}$$

Then $0$ is a limit point of both $(0,\infty)$ and $(-\infty,0)$, both one-sided
limits at $0$ exist ([[def-one-sided-limits]]),

$$\lim_{x \to 0^{+}} \operatorname{sgn}(x) = 1, \qquad \lim_{x \to 0^{-}} \operatorname{sgn}(x) = -1 ,$$

and $\operatorname{sgn}$ has **no** limit at $0$.

This is the standard illustration of
[[thm-two-sided-limit-iff-both-one-sided]]: the two one-sided limits both exist,
so nothing is missing on either side, yet they disagree, and disagreement is
exactly what the theorem converts into the failure of the two-sided limit. Note
also that the value $\operatorname{sgn}(0) = 0$ is equal to neither one-sided
limit, and is irrelevant to all three assertions ([[def-function-limit]]).

## Facts & Assumptions

**Given:** The function $\operatorname{sgn} : \mathbb{R} \to \mathbb{R}$ above, with $A := \mathbb{R}$, $c := 0$, $A^{+} = \mathbb{R} \cap (0,\infty) = (0,\infty)$ and $A^{-} = \mathbb{R} \cap (-\infty,0) = (-\infty,0)$ ([[def-interval]]).

[L1] The limit condition ([[def-function-limit]]): $\lim_{x \to c} f(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain with $0 < |x - c| < \delta$ satisfies $|f(x) - P| < \varepsilon$.

[L2] One-sided limits are the limits at $c$ of the restrictions of $f$ to $A^{-}$ and $A^{+}$, and are well posed exactly when $c$ is a limit point of the set in question ([[def-one-sided-limits]]).

[L3] Limit point and neighbourhoods ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L4] Absolute value: $|0| = 0$; $|u| \ge 0$; $|u| = u$ for $u \ge 0$ and $|u| = -u$ for $u \le 0$ ([[lem-of-abs-value]]).

[L5] Order in $\mathbb{R}$: trichotomy, so every real satisfies exactly one of $x > 0$, $x = 0$, $x < 0$; $0 < 1$ and hence $2 > 0$, $\varepsilon/2 > 0$ and $\varepsilon/2 < \varepsilon$ for $\varepsilon > 0$; and $1 - (-1) = 1 + 1 > 0$, so $-1 < 1$ and in particular $1 \ne -1$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]]).

[L6] Two-sided versus one-sided: if $c$ is a limit point of both $A^{-}$ and $A^{+}$ and $\lim_{x \to c} f(x) = L$, then $\lim_{x \to c^{-}} f(x) = L$ and $\lim_{x \to c^{+}} f(x) = L$ ([[thm-two-sided-limit-iff-both-one-sided]]).

[L7] At a limit point of its domain a function has at most one limit ([[lem-function-limit-unique]]); applied to the restrictions, each one-sided limit is a single real.

## Verification

**Proof technique:** direct.

1.1 $\operatorname{sgn}$ is a well-defined function on $\mathbb{R}$: by trichotomy every real satisfies exactly one of the three defining conditions. [L5]

1.2 $0$ is a limit point of $A^{+} = (0,\infty)$ and of $A^{-} = (-\infty,0)$: given a real $\varepsilon > 0$, the real $\varepsilon/2$ is positive, hence lies in $A^{+}$, and satisfies $0 < |\varepsilon/2 - 0| = \varepsilon/2 < \varepsilon$; and $-\varepsilon/2$ is negative, hence lies in $A^{-}$, and satisfies $0 < |-\varepsilon/2 - 0| = \varepsilon/2 < \varepsilon$. [L3, L4, L5]

1.3 The reals $1$ and $-1$ are distinct, since $1 - (-1) = 1 + 1 > 0$. [L5]

2.1 $\lim_{x \to 0^{+}} \operatorname{sgn}(x) = 1$: by [L2] this is the limit at $0$ of the restriction of $\operatorname{sgn}$ to $A^{+}$, which is well posed by step 1.2. Given a real $\varepsilon > 0$, any $\delta > 0$ serves, since every $x \in A^{+}$ has $x > 0$, hence $\operatorname{sgn}(x) = 1$ and $|\operatorname{sgn}(x) - 1| = |0| = 0 < \varepsilon$. [step 1.1, step 1.2, L1, L2, L4]

2.2 $\lim_{x \to 0^{-}} \operatorname{sgn}(x) = -1$: identically, every $x \in A^{-}$ has $x < 0$, hence $\operatorname{sgn}(x) = -1$ and $|\operatorname{sgn}(x) - (-1)| = |0| = 0 < \varepsilon$ for every $\varepsilon > 0$ and every $\delta > 0$. [step 1.1, step 1.2, L1, L2, L4]

3.1 Suppose $\operatorname{sgn}$ had a limit at $0$, say $\lim_{x \to 0} \operatorname{sgn}(x) = L$. Since $0$ is a limit point of both $A^{-}$ and $A^{+}$ by step 1.2, [L6] gives $\lim_{x \to 0^{-}} \operatorname{sgn}(x) = L$ and $\lim_{x \to 0^{+}} \operatorname{sgn}(x) = L$; each one-sided limit is single valued by [L7], so steps 2.1 and 2.2 force $L = 1$ and $L = -1$, contradicting step 1.3. Hence $\operatorname{sgn}$ has no limit at $0$. [step 1.3, step 2.1, step 2.2, L6, L7] ∎

## Remarks

- **The failure is not about the value at $0$.** Redefining $\operatorname{sgn}(0)$ to be $1$, or $-1$, or anything else changes nothing: [[def-function-limit]] never evaluates the function at the point, and the two one-sided limits are computed on sets that exclude $0$ ([[def-one-sided-limits]]). This is a genuine jump, not a removable defect of the kind [[fs-limit-equals-value]] exhibits.

- **Away from $0$ the function is locally constant**, so it has a limit at every other point of $\mathbb{R}$, equal to its value there: for $c > 0$ take $\delta$ to be $c$ itself, and every $x$ with $0 < |x - c| < c$ has $x > 0$ and $\operatorname{sgn}(x) = 1 = \operatorname{sgn}(c)$; symmetrically for $c < 0$. So the single point $0$ carries the whole phenomenon.

- **Contrast with the two other failures on this page.** Here both one-sided limits exist and differ; for $\psi(1/x)$ at $0$ ([[cex-psi-of-one-over-x-has-no-limit-at-zero]]) the failure is already one-sided, both witnessing sequences there having positive terms; and for the indicator of $\mathbb{Q}$ ([[cex-dirichlet-has-no-limit-anywhere]]) the failure occurs at every point at once.
