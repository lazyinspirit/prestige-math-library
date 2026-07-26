---
id: fs-limit-equals-value
kind: false-statement
title: "FALSE: $\\lim_{x \\to c} f(x) = f(c)$ whenever both sides exist"
status: published
origin: session
deps: [def-function-limit, lem-function-limit-unique, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "FALSE: limit equals value"
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
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

**False claim:** if $A \subseteq \mathbb{R}$, if $f : A \to \mathbb{R}$, if
$c \in A$ is a limit point of $A$ ([[def-limit-point-r]]) and if the limit of $f$
at $c$ exists ([[def-function-limit]]), then

$$\lim_{x \to c} f(x) = f(c) .$$

Both sides of the asserted equation are defined under the stated hypotheses: the
left because the limit is assumed to exist and is single valued
([[lem-function-limit-unique]]), the right because $c \in A$. The claim is that
they always agree, and that is false.

**Why it is tempting.** The condition $|f(x) - L| < \varepsilon$ is imposed on
points $x$ arbitrarily close to $c$, and it feels as though $x = c$ were the
limiting case of that. It is not: [[def-function-limit]] quantifies over
$0 < |x - c| < \delta$, and the strict inequality on the left removes $x = c$
from the quantifier entirely. Changing the value of $f$ at the single point $c$
therefore changes nothing on the left-hand side and everything on the right.

**What is true.** The equation above is not a theorem but a *condition*, and it
is the condition the next page of this track takes as the definition of
continuity at $c$. This library states it as a hypothesis and never as a
consequence; hypothesis (i) of [[thm-composition-of-function-limits]] is exactly
this condition for the outer function.

## Facts & Assumptions

**Given:** The set $A := \mathbb{R}$, the point $c := 0$, and the function $f : \mathbb{R} \to \mathbb{R}$ defined by $f(x) := 0$ for $x \ne 0$ and $f(0) := 1$.

[L1] The limit condition: $\lim_{x \to c} h(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - L| < \varepsilon$ ([[def-function-limit]]).

[L2] Limit point: $c$ is a limit point of $S$ when every punctured neighbourhood $N^{*}_{\varepsilon}(c)$ meets $S$; and punctured neighbourhoods in $\mathbb{R}$ are never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Absolute value: $|0| = 0$, and $|u| \ge 0$ ([[lem-of-abs-value]]).

[L4] Order in $\mathbb{R}$: trichotomy, so every real either equals $0$ or does not, and never both; and $0 < 1$, so $1 \ne 0$ ([[cor-of-one-positive]], [[def-ordered-field]]).

## Refutation

**Proof technique:** direct.

1.1 The point $c = 0$ lies in $A = \mathbb{R}$ and is a limit point of $\mathbb{R}$: for every real $\varepsilon > 0$ the punctured neighbourhood $N^{*}_{\varepsilon}(0)$ is nonempty and is contained in $\mathbb{R}$, so it meets $\mathbb{R}$. [L2]

1.2 $f$ is a well-defined function on $\mathbb{R}$, since by trichotomy every real either equals $0$ or does not, exclusively; and the reals $0$ and $1$ are distinct. [L4]

2.1 The limit of $f$ at $0$ exists and equals $0$: given an arbitrary real $\varepsilon > 0$, take $\delta := 1 > 0$; every $x \in \mathbb{R}$ with $0 < |x - 0| < 1$ has $|x| \ne 0$, hence $x \ne 0$, hence $f(x) = 0$ and $|f(x) - 0| = |0| = 0 < \varepsilon$. [step 1.1, step 1.2, L1, L3, L4]

3.1 Yet $f(0) = 1$, and $1 \ne 0 = \lim_{x \to 0} f(x)$. So at the point $c = 0$ of the domain, which is a limit point of the domain, the limit exists and differs from the value: the claim is false. [step 1.2, step 2.1, L4] ∎

## Remarks

- **The witness is the smallest possible one.** It differs from a constant function at exactly one point, and the limit cannot see that point. Any function agreeing with a constant off $c$ and taking a different value at $c$ would serve equally well; the companion page works this witness out in full, computes its one-sided limits, and shows that redefining the single value repairs the equality.

- **Where the false claim does hold.** Under the extra hypothesis that $\lim_{x \to c} f(x) = f(c)$ — which is what continuity at $c$ will mean — it holds trivially, and that is the only sense in which it is ever true. It is emphatically not a consequence of the limit existing.

- **The consequence for composition.** Because $f(c)$ is invisible to the limit, substituting an inner function that takes the value $c$ is not licensed by the limits alone; that is the content of [[fs-naive-composition-of-limits]], whose witness is built from this one.
