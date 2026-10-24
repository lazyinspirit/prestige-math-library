---
id: cex-limit-differs-from-the-value
kind: counterexample
title: "The function equal to $0$ off the origin and to $1$ at the origin has limit $0 \\ne 1$ there"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-limit-equals-value, def-function-limit, def-limit-point-r, def-neighbourhood-r, def-one-sided-limits, def-interval, lem-limit-is-local, lem-of-abs-value, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "limit $\\ne$ value"
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
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if $c \in A$ is a limit point of $A \subseteq \mathbb{R}$ and
$f : A \to \mathbb{R}$ has a limit at $c$, then
$\lim_{x \to c} f(x) = f(c)$ — the false statement
[[fs-limit-equals-value]].

The witness is the smallest one available: the function

$$f : \mathbb{R} \to \mathbb{R}, \qquad f(x) := \begin{cases} 0 & x \ne 0, \\ 1 & x = 0, \end{cases}$$

at the point $c = 0$. It has limit $0$ there, while $f(0) = 1$.

Beyond refuting the claim, this item records two further facts about the same
witness, both used elsewhere on the page: both **one-sided** limits at $0$ also
equal $0$, so the defect is not a jump; and changing the single value $f(0)$ to
$0$ produces a function with the same limit and the equality restored. That is
what makes this a *removable* defect, and it is the pattern the composition
counterexample [[cex-composition-of-limits-fails]] exploits.

## Facts & Assumptions

**Given:** The function $f : \mathbb{R} \to \mathbb{R}$ above and the point $c := 0$; and the constant function $g : \mathbb{R} \to \mathbb{R}$ with $g(x) := 0$ for every $x$.

[L1] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain with $0 < |x - c| < \delta$ satisfies $|h(x) - P| < \varepsilon$.

[L2] Limit point: every real is a limit point of $\mathbb{R}$, punctured neighbourhoods being never empty; and $0$ is a limit point of $(0,\infty)$ and of $(-\infty,0)$, since $\varepsilon/2$ and $-\varepsilon/2$ lie in them at distance $\varepsilon/2$ from $0$ ([[def-limit-point-r]], [[def-neighbourhood-r]], [[def-interval]]).

[L3] Absolute value: $|0| = 0$; $|u| = 0$ exactly when $u = 0$ ([[lem-of-abs-value]]).

[L4] Order in $\mathbb{R}$: trichotomy, so every real either equals $0$ or does not, exclusively; $0 < 1$, so $1 \ne 0$, and $\varepsilon/2 > 0$ for $\varepsilon > 0$ ([[cor-of-one-positive]], [[def-ordered-field]]).

[L5] One-sided limits are the limits of the restrictions to $A \cap (-\infty,c)$ and $A \cap (c,\infty)$ ([[def-one-sided-limits]]).

[L6] Locality: if two functions on $A$ agree on $A \cap N^{*}_{\eta}(c)$ for some real $\eta > 0$, they have the same limits at $c$ (claim 1 of [[lem-limit-is-local]]).

## Counterexample

**Proof technique:** direct.

1.1 $f$ is a well-defined function on $\mathbb{R}$, by trichotomy; and $0 \in \mathbb{R}$ is a limit point of $\mathbb{R}$. [L2, L4]

1.2 The reals $0$ and $1$ are distinct. [L4]

2.1 The limit of $f$ at $0$ exists and equals $0$: given an arbitrary real $\varepsilon > 0$, take $\delta := 1 > 0$; every $x \in \mathbb{R}$ with $0 < |x - 0| < 1$ has $|x| \ne 0$, hence $x \ne 0$, hence $f(x) = 0$ and $|f(x) - 0| = |0| = 0 < \varepsilon$. [step 1.1, L1, L3, L4]

2.2 Both one-sided limits of $f$ at $0$ exist and equal $0$: the point $0$ is a limit point of $(0,\infty)$ and of $(-\infty,0)$ by [L2], and every $x$ in either set satisfies $x \ne 0$, hence $f(x) = 0$; so any $\delta > 0$ serves in the definition of each one-sided limit. [step 1.1, L1, L2, L3, L5]

3.1 Yet $f(0) = 1$, and $1 \ne 0 = \lim_{x \to 0} f(x)$: at the point $c = 0$ of the domain, which is a limit point of the domain, the limit exists and differs from the value, refuting the claim. [step 1.2, step 2.1, L4]

3.2 Changing the single value repairs the equality: $f$ and the constant function $g$ agree at every $x \ne 0$, hence on $\mathbb{R} \cap N^{*}_{1}(0)$, so by [L6] the limit of $g$ at $0$ exists and equals $0$; and $g(0) = 0$ is that limit. [step 2.1, L6]

4.1 So the limit at a point of the domain is independent of the value of the function there, and the two agree only under an extra hypothesis on the function, never as a consequence of the limit existing. [step 3.1, step 3.2] ∎

## Remarks

- **A removable defect, not a jump.** By step 2.2 the two one-sided limits exist and agree with each other and with the two-sided limit; the only disagreement is with the value. Compare the sign function ([[ex-one-sided-limits-of-the-sign-function]]), where the two one-sided limits exist and *disagree*, and no redefinition of the value can repair anything.

- **Why the witness is used again for composition.** Because $f(0) \ne \lim_{y \to 0} f(y)$, hypothesis (i) of [[thm-composition-of-function-limits]] fails for $f$ at $L = 0$; feeding it an inner function that takes the value $0$ then breaks the composition, which is [[cex-composition-of-limits-fails]].

- **Nothing here depends on the particular values $0$ and $1$**, only on their being distinct. Any function constant off $c$ with a different value at $c$ refutes the claim in the same three lines.
