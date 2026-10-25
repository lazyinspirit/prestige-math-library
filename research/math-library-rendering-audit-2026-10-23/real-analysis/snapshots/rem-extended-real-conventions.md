---
id: rem-extended-real-conventions
kind: remark
title: "Which extended-real operations this library leaves undefined, and where each $\\limsup$ statement needs the hypothesis"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-extended-reals, def-limsup-liminf, thm-limsup-subadditive, thm-limsup-submultiplicative, rem-sup-conventions, lem-extended-reals-complete]
justified_by: []
forward_refs: [cex-zero-times-infinity-indeterminate]
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
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "Indeterminate form (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Indeterminate_form"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (1.23)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

[[rem-sup-conventions]] refused, inside $\mathbb{R}$, the conventions
$\sup S = +\infty$ and $\inf \emptyset = +\infty$, and promised that a later page
needing $\overline{\mathbb{R}}$ would introduce it explicitly as a new object
with its own order and its own partial arithmetic. [[def-extended-reals]] is that
introduction, and this page is the one that needed it. Nothing about the real
supremum has changed: $\sup S$ and $\inf S$ for $S \subseteq \mathbb{R}$ are still
real numbers, still defined only under the nonempty and bounded hypotheses, and
the extended bounds of [[lem-extended-reals-complete]] are a *different*
operation in a *different* ordered set, agreeing with the real one exactly where
the real one is defined.

**What is defined.** On $\overline{\mathbb{R}}$ this library defines exactly
three things: the total order, the reflection $a \mapsto -a$, and the two partial
operations $a + b$ and $ab$. The order and the reflection are total. The two
operations are not, and the gaps are these.

| expression | status |
|---|---|
| $a + b$ with $a, b \in \mathbb{R}$ | the field sum |
| $(+\infty) + b$ with $b \ne -\infty$ | $+\infty$ |
| $(-\infty) + b$ with $b \ne +\infty$ | $-\infty$ |
| $(+\infty) + (-\infty)$ and $(-\infty) + (+\infty)$ | **undefined** |
| $ab$ with $a, b \in \mathbb{R}$ | the field product |
| $(\pm\infty) \cdot b$ with $b \ne 0$ | $\pm\infty$, by the sign rule |
| $0 \cdot (\pm\infty)$ and $(\pm\infty) \cdot 0$ | **undefined** |

**What is not defined at all.** There is no subtraction on
$\overline{\mathbb{R}}$, no division, no absolute value and no exponentiation.
Where a proof on this page wants $a - b$ it writes $a + (-b)$, which inherits the
gap at $\{+\infty, -\infty\}$; where it wants a quotient it does not write one.
In particular the expressions $(+\infty) - (+\infty)$, $(+\infty)/(+\infty)$ and
$0/0$ do not occur here, not because they are hard but because neither operation
exists.

**Why the two gaps are gaps.** They are the two places where the value is not
determined by the sequences involved, so no assignment could be compatible with
limits. For the product this is proved:
[[cex-zero-times-infinity-indeterminate]] exhibits a null sequence and sequences
diverging to $+\infty$ whose products behave differently, so $0 \cdot (+\infty)$
has no value that would make a product rule true. For the sum the same is visible
with $a_k = k$ and $b_k = -k$, whose sum is constantly $0$, against $a_k = k$ and
$b_k = -2k$, whose sum diverges to $-\infty$; both pairs have
$\limsup a_k = +\infty$ and $\limsup b_k = -\infty$.

**Where each statement on this page carries the hypothesis.** Reading the page in
order, the pattern is that everything purely order-theoretic is unconditional and
everything arithmetic is not.

- [[lem-extended-reals-complete]], [[def-limsup-liminf]], [[lem-limsup-exists]],
  [[lem-limsup-reflection]], [[lem-liminf-le-limsup]],
  [[lem-limsup-monotone-comparison]], [[thm-limsup-is-greatest-subsequential-limit]]
  and [[cor-liminf-is-least-subsequential-limit]] carry **no** hypothesis on the
  sequence. They use only the order and the reflection, both of which are total,
  so unbounded sequences and the values $\pm\infty$ need no separate treatment.
- [[lem-limsup-epsilon-characterisation]] requires $L \in \mathbb{R}$. That is not
  an arithmetic gap but a syntactic one: its conditions mention $L + \varepsilon$
  and $L - \varepsilon$, and subtraction is not available in
  $\overline{\mathbb{R}}$. The infinite cases are covered instead by
  [[thm-convergence-iff-limsup-equals-liminf]], whose statement uses no
  arithmetic at all.
- [[thm-limsup-subadditive]] requires that
  $\limsup_k x_k + \limsup_k y_k$ be defined, which is exactly the exclusion of
  the pair $\{+\infty, -\infty\}$ from the table above. Nothing else is assumed;
  in particular the sequences need not be bounded, and the two infinite cases are
  proved rather than excluded.
- [[thm-limsup-submultiplicative]] requires the sequences to be bounded and
  nonnegative. Boundedness is what makes all three limit superiors real, so that
  the product on the right is a product in $\mathbb{R}$; without it the right-hand
  side could be the undefined $0 \cdot (+\infty)$. Nonnegativity is a separate
  requirement, needed because the estimate multiplies two upper bounds.

**What this costs a reader coming from a measure-theory text.** Such a text
typically declares $0 \cdot \infty := 0$, which is genuinely convenient there,
because in an integral the factor $0$ is a measure-zero set and the convention
makes countable additivity work without cases. That convention is *not* in force
here, and it is not compatible with limits: it is a decision about a particular
formula, not a fact about $\overline{\mathbb{R}}$. A statement quoted from such a
source therefore needs its degenerate cases restored before it can be used with
the results on this page.

**One thing that is not a convention.** The equations
$\limsup_k x_k = +\infty$ and $\liminf_k x_k = -\infty$ occurring throughout this
page are ordinary equations between elements of $\overline{\mathbb{R}}$, not
abbreviations. That is precisely the difference from
[[def-divergence-to-infinity]], where "$x_k \to +\infty$" is a single
abbreviation for a condition and no object named $+\infty$ is involved. Both
readings coexist without conflict, and
[[thm-convergence-iff-limsup-equals-liminf]] is the statement that relates them.
