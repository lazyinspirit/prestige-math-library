---
id: def-limits-at-infinity
kind: definition
title: "Limits at $+\\infty$ and $-\\infty$, and infinite limits at a point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-divergence-to-infinity, def-interval, def-bounded-set, def-complete-ordered-field, lem-of-abs-value, lem-of-triangle-inequality, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive]
justified_by: []
aliases: [def-limit-at-infinity, def-infinite-limit-at-a-point]
landmark: true
short: "limits at and to infinity"
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
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.5"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Definition

Throughout, $+\infty$ and $-\infty$ are **abbreviations and not real numbers**,
exactly as in [[def-interval]] and [[def-divergence-to-infinity]]. Every phrase
below is a single abbreviation for a displayed condition on reals, and no
arithmetic is ever performed with the symbols.

**Limits at $+\infty$.** Let $A \subseteq \mathbb{R}$ be **not bounded above**
([[def-bounded-set]]), let $f : A \to \mathbb{R}$ and let $L \in \mathbb{R}$. We
write

$$\lim_{x \to +\infty} f(x) = L$$

when for every real $\varepsilon > 0$ there is a real $M$ such that

$$|f(x) - L| < \varepsilon \qquad \text{for every } x \in A \text{ with } x > M .$$

**Limits at $-\infty$.** Let $A$ be **not bounded below**. We write
$\lim_{x \to -\infty} f(x) = L$ when for every real $\varepsilon > 0$ there is a
real $M$ with $|f(x) - L| < \varepsilon$ for every $x \in A$ with $x < M$.

**Why unboundedness is required.** It plays exactly the role the limit-point
condition plays in [[def-function-limit]]. Saying that $A$ is not bounded above
says that no real is an upper bound of $A$, that is, that for every real $M$
there is $x \in A$ with $x > M$ ([[def-bounded-set]],
[[def-complete-ordered-field]]); so the set over which the condition quantifies
is never empty and the condition is never vacuous. Without the hypothesis every
real $L$ would satisfy it and the notation would not denote.

**Uniqueness, proved here.** Suppose $A$ is not bounded above and
$\lim_{x \to +\infty} f(x) = L$ and $\lim_{x \to +\infty} f(x) = L'$ with
$L \ne L'$. Then $|L - L'| > 0$ ([[lem-of-abs-value]]), so
$\varepsilon := |L - L'|/2 > 0$ ([[cor-of-one-positive]],
[[lem-of-inverse-positive]], [[lem-of-sign-rules]]). Choose reals $M_1, M_2$
witnessing the two conditions at this $\varepsilon$ and let $M$ be the larger of
them, the order being total. Since $A$ is not bounded above there is $x \in A$
with $x > M$, hence with $x > M_1$ and $x > M_2$, and then

$$|L - L'| = |(L - f(x)) + (f(x) - L')| \le |f(x) - L| + |f(x) - L'| < 2\varepsilon = |L - L'|$$

([[lem-of-triangle-inequality]], [[lem-of-abs-value]], [[lem-of-add-order]]),
which trichotomy forbids. So $L = L'$, and the notation
$\lim_{x \to +\infty} f(x)$ denotes a single real. The same four lines, with the
inequalities on $x$ reversed, give uniqueness at $-\infty$.

**Infinite limits at a point.** Let $A \subseteq \mathbb{R}$, let $c$ be a limit
point of $A$ ([[def-limit-point-r]]) and let $f : A \to \mathbb{R}$. We write

$$f(x) \to +\infty \ \text{ as } \ x \to c$$

when for every real $M$ there is a real $\delta > 0$ such that $f(x) > M$ for
every $x \in A$ with $0 < |x - c| < \delta$; and $f(x) \to -\infty$ as $x \to c$
when for every real $M$ there is a real $\delta > 0$ with $f(x) < M$ for every
such $x$.

**This library does not write $\lim_{x \to c} f(x) = +\infty$.** The right-hand
side would not be an element of $\mathbb{R}$, and writing the equation would
silently move the discussion into the extended real line, a structure that is
not a field. That is the convention already fixed by
[[def-divergence-to-infinity]] for sequences and by [[rem-sup-conventions]] for
suprema, and it is kept here. In particular none of the rules of
[[thm-algebra-of-function-limits]] may be applied to a function tending to
$\pm\infty$.

**Combined forms.** Let $A$ be not bounded above and $f : A \to \mathbb{R}$. We
write $f(x) \to +\infty$ as $x \to +\infty$ when for every real $N$ there is a
real $M$ with $f(x) > N$ for every $x \in A$ with $x > M$. The other forms are
obtained the same way, by pairing one of the two conditions on $x$ (unbounded
above, unbounded below) with one of the two conditions on $f(x)$ (above every
real, below every real); each is again a single abbreviation for the displayed
condition, and none of them is an equation.

## Remarks

- **These are the same definition with a different notion of "near".** In
  [[def-function-limit]] the sets $A \cap N^{*}_\delta(c)$ shrink to $c$; here
  the sets $\{\, x \in A : x > M \,\}$ shrink towards being unbounded above. The
  limit-point hypothesis and the unboundedness hypothesis play the same role:
  each says the relevant sets are never empty.

- **One-sided infinite limits.** Combining this definition with
  [[def-one-sided-limits]] gives, for instance, $f(x) \to +\infty$ as
  $x \to c^{+}$, meaning $f^{+}(x) \to +\infty$ as $x \to c$ for the restriction
  $f^{+}$ of $f$ to $A \cap (c, \infty)$, provided $c$ is a limit point of that
  set. Nothing new has to be defined.

- **The extended reals are not needed on these pages.** The extended line
  $\overline{\mathbb{R}}$ of [[def-extended-reals]] exists in this library and is
  the right home for $\limsup$; it is deliberately not used here, because every
  statement above is a statement about reals and quantifiers, and introducing a
  second ordered structure would oblige every later algebraic step to say which
  structure it is working in.
