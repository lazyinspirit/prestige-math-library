---
id: cex-composition-of-limits-fails
kind: counterexample
title: "With $g \\equiv 0$ and $f$ equal to $0$ off the origin and $1$ at it, $\\lim g = 0$ and $\\lim_{y \\to 0} f = 0$ while $f \\circ g \\equiv 1$"
status: published
origin: session
deps: [fs-naive-composition-of-limits, thm-composition-of-function-limits, cex-limit-differs-from-the-value, def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "composition fails"
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
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if $\lim_{x \to c} g(x) = L$ and $\lim_{y \to L} f(y) = M$
then the limit of $f \circ g$ at $c$ exists and equals $M$ — the false statement
[[fs-naive-composition-of-limits]].

Take $A = B = \mathbb{R}$, $c = 0$, the constant function $g \equiv 0$, and the
function $f$ of [[cex-limit-differs-from-the-value]], equal to $0$ off the origin
and to $1$ at it. Then $L = 0$, $M = 0$, and $f \circ g$ is the constant function
$1$, so the limit of $f \circ g$ at $0$ exists and equals $1 \ne 0 = M$.

**What this item adds to the false statement.** It carries the comparison
through: it identifies which of the two hypotheses of
[[thm-composition-of-function-limits]] fails here — both do — and it shows that
replacing the inner function by the identity, which satisfies hypothesis (ii),
restores the conclusion with the same outer function. So neither the outer
function nor the composition operation is at fault; the failure is precisely that
the inner function takes the critical value.

## Facts & Assumptions

**Given:** The function $f : \mathbb{R} \to \mathbb{R}$ of [[cex-limit-differs-from-the-value]], with $f(y) = 0$ for $y \ne 0$ and $f(0) = 1$; the constant function $g : \mathbb{R} \to \mathbb{R}$, $g(x) = 0$; the identity function $\iota : \mathbb{R} \to \mathbb{R}$, $\iota(x) = x$; and the point $c := 0$.

[L1] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain with $0 < |x - c| < \delta$ satisfies $|h(x) - P| < \varepsilon$.

[L2] Every real is a limit point of $\mathbb{R}$, punctured neighbourhoods being never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] The witness function: $f(0) = 1$ by its definition, and the limit of $f$ at $0$ exists and equals $0$, as verified in [[cex-limit-differs-from-the-value]].

[L4] Absolute value: $|0| = 0$; $|u| = 0$ exactly when $u = 0$ ([[lem-of-abs-value]]).

[L5] Order in $\mathbb{R}$: trichotomy, and $0 < 1$, so $1 \ne 0$ ([[cor-of-one-positive]], [[def-ordered-field]]).

[L6] Composition of limits, and its two extra hypotheses: (i) $L \in B$ and $f(L) = M$; (ii) some real $\eta > 0$ has $g(x) \ne L$ for every $x \in A$ with $0 < |x - c| < \eta$ ([[thm-composition-of-function-limits]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L3] the limit of $f$ at $0$ exists and equals $0$, and $f(0) = 1$; so the outer hypothesis of the refuted claim holds with $L = 0$ and $M = 0$. [L3]

1.2 $0$ is a limit point of $\mathbb{R}$, and $g(\mathbb{R}) = \{0\} \subseteq \mathbb{R}$ and $\iota(\mathbb{R}) = \mathbb{R}$, so both $f \circ g$ and $f \circ \iota$ are functions on $\mathbb{R}$. [L2]

1.3 The reals $0$ and $1$ are distinct. [L5]

2.1 The inner hypothesis holds for $g$ with $L = 0$: for every real $\varepsilon > 0$ every $\delta > 0$ serves, since $|g(x) - 0| = |0| = 0 < \varepsilon$ for every $x$. So the limit of $g$ at $0$ exists and equals $0$. [step 1.2, L1, L4]

2.2 It holds for $\iota$ as well: given a real $\varepsilon > 0$ take $\delta := \varepsilon$; then $0 < |x - 0| < \delta$ gives $|\iota(x) - 0| = |x| < \varepsilon$. So the limit of $\iota$ at $0$ exists and equals $0$. [step 1.2, L1]

3.1 $f \circ g$ is the constant function $1$: for every $x \in \mathbb{R}$, $g(x) = 0$ and hence $f(g(x)) = f(0) = 1$. By the computation of step 2.1, applied to the constant $1$ in place of the constant $0$, the limit of $f \circ g$ at $0$ exists and equals $1$. [step 1.1, step 2.1, L1, L4]

3.2 $f \circ \iota = f$, since $f(\iota(x)) = f(x)$ for every $x$; so by [L3] the limit of $f \circ \iota$ at $0$ exists and equals $0 = M$. [step 1.1, step 2.2, L3]

4.1 Hence $\lim_{x \to 0} g(x) = 0 = L$ and $\lim_{y \to 0} f(y) = 0 = M$, while $\lim_{x \to 0} f(g(x)) = 1 \ne 0 = M$: the refuted claim is false. [step 1.3, step 3.1, L5]

4.2 Both extra hypotheses of [[thm-composition-of-function-limits]] fail for the pair $(f, g)$: hypothesis (i) fails because $L = 0$ lies in $B = \mathbb{R}$ while $f(L) = f(0) = 1 \ne 0 = M$, and hypothesis (ii) fails because $g(x) = 0 = L$ for every $x$, so no punctured neighbourhood of $0$ avoids the value $L$. For the pair $(f, \iota)$, hypothesis (ii) does hold with $\eta := 1$, since $\iota(x) = x \ne 0$ whenever $0 < |x - 0| < 1$; and step 3.2 confirms the conclusion of the theorem there. [step 1.1, step 3.1, step 3.2, L6]

5.1 So the extra hypotheses of the true theorem are not removable, and the obstruction is located exactly at the values of the inner function that equal $L$. [step 4.1, step 4.2] ∎

## Remarks

- **The same outer function serves both roles.** With $g$ the composition fails, with $\iota$ it succeeds, and $f$ is unchanged. So the failure cannot be attributed to any pathology of $f$ beyond the one recorded in [[cex-limit-differs-from-the-value]]: that its value at $0$ differs from its limit at $0$.

- **Constancy of $g$ is not the issue either.** What matters is that $g$ takes the value $L$ on every punctured neighbourhood of $c$. Any inner function doing that, constant or not, produces the same failure by the same argument, since the outer estimate is unavailable at those arguments.

- **The practical rule.** When substituting $y = g(x)$ inside a limit, check one of the two hypotheses of [[thm-composition-of-function-limits]]: either the outer function is defined at $L$ with the right value there, or the inner function avoids $L$ near $c$. Substitutions such as $y = 1/x$ satisfy the second for structural reasons; substitutions into a function known only through its limit satisfy neither in general.
