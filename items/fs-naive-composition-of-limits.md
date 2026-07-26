---
id: fs-naive-composition-of-limits
kind: false-statement
title: "FALSE: $\\lim_{x \\to c} f(g(x)) = M$ whenever $\\lim_{x \\to c} g = L$ and $\\lim_{y \\to L} f = M$"
status: draft
origin: session
deps: [thm-composition-of-function-limits, def-function-limit, def-limit-point-r, def-neighbourhood-r, fs-limit-equals-value, lem-of-abs-value, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "FALSE: naive composition"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
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

## Statement

**False claim:** let $A, B \subseteq \mathbb{R}$, let $g : A \to \mathbb{R}$ with
$g(A) \subseteq B$ and $f : B \to \mathbb{R}$, let $c$ be a limit point of $A$
and $L$ a limit point of $B$. If

$$\lim_{x \to c} g(x) = L \qquad \text{and} \qquad \lim_{y \to L} f(y) = M ,$$

then the limit of $f \circ g$ at $c$ exists and
$\lim_{x \to c} f\bigl(g(x)\bigr) = M$ ([[def-function-limit]]).

This is the statement of [[thm-composition-of-function-limits]] with **both** of
its extra hypotheses removed, and it is false. It is refuted below by a pair in
which $g$ is constant and $f$ has a removable defect at the value of that
constant.

**Where the naive argument breaks.** The inner limit gives
$|g(x) - L| < \rho$ for $x$ near $c$; the outer limit gives
$|f(y) - M| < \varepsilon$ for $y \in B$ with $0 < |y - L| < \rho$. To combine
them at $y = g(x)$ one needs $|g(x) - L| > 0$, and nothing in the hypotheses
supplies that. Where $g(x) = L$, the only information available about $f$ is its
*value* $f(L)$, and [[def-function-limit]] says nothing whatever about that
value ([[fs-limit-equals-value]]). The two hypotheses of
[[thm-composition-of-function-limits]] are exactly the two ways of closing that
gap.

## Facts & Assumptions

**Given:** The sets $A := \mathbb{R}$ and $B := \mathbb{R}$; the point $c := 0$; the function $f : \mathbb{R} \to \mathbb{R}$ of [[fs-limit-equals-value]], namely $f(y) := 0$ for $y \ne 0$ and $f(0) := 1$; and the constant function $g : \mathbb{R} \to \mathbb{R}$, $g(x) := 0$ for every $x$.

[L1] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = P$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - P| < \varepsilon$.

[L2] Every real is a limit point of $\mathbb{R}$, punctured neighbourhoods being never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Absolute value: $|0| = 0$ ([[lem-of-abs-value]]).

[L4] Order in $\mathbb{R}$: trichotomy, and $0 < 1$, so $1 \ne 0$ ([[cor-of-one-positive]], [[def-ordered-field]]).

[L5] The function $f$ above satisfies $f(0) = 1$ and has limit $0$ at $0$: for every real $\varepsilon > 0$ the radius $\delta = 1$ works, since $0 < |y - 0| < 1$ forces $y \ne 0$ and then $|f(y) - 0| = 0 < \varepsilon$; this is the computation carried out in [[fs-limit-equals-value]].

[L6] Composition of limits and its two extra hypotheses (i) and (ii) ([[thm-composition-of-function-limits]]).

## Refutation

**Proof technique:** direct.

1.1 The point $0$ is a limit point of $\mathbb{R}$, and $g(\mathbb{R}) = \{0\} \subseteq \mathbb{R} = B$, so $f \circ g$ is a function on $\mathbb{R}$. [L2]

1.2 By [L5], $\lim_{y \to 0} f(y) = 0$; so the outer hypothesis holds with $L = 0$ and $M = 0$. [L5]

1.3 The reals $0$ and $1$ are distinct. [L4]

2.1 The inner hypothesis holds with $L = 0$: for the constant function $g$ and any real $\varepsilon > 0$, every $\delta > 0$ works, since $|g(x) - 0| = |0| = 0 < \varepsilon$ for every $x$. So $\lim_{x \to 0} g(x) = 0$. [step 1.1, L1, L3]

3.1 But $f \circ g$ is the constant function $1$: for every $x \in \mathbb{R}$, $g(x) = 0$ and hence $f(g(x)) = f(0) = 1$. Therefore, by the same computation as in step 2.1, the limit of $f \circ g$ at $0$ exists and equals $1$. [step 2.1, L1, L3, L5]

3.2 Both extra hypotheses of [[thm-composition-of-function-limits]] fail for this pair: hypothesis (i) fails because $L = 0$ lies in $B = \mathbb{R}$ while $f(L) = f(0) = 1 \ne 0 = M$; and hypothesis (ii) fails because $g(x) = 0 = L$ for every $x$, so no punctured neighbourhood of $0$ avoids the value $L$. [step 2.1, L5, L6]

4.1 So $\lim_{x \to 0} g(x) = 0 = L$ and $\lim_{y \to 0} f(y) = 0 = M$, while $\lim_{x \to 0} f(g(x)) = 1 \ne 0 = M$: the claim is false, and step 3.2 identifies exactly which hypotheses of the true theorem are missing. [step 1.2, step 1.3, step 3.1, step 3.2] ∎

## Remarks

- **The failure is not an artefact of the constant inner function.** What matters is that $g$ takes the value $L$ on every punctured neighbourhood of $c$; a non-constant $g$ that hits $L$ along a sequence tending to $c$ would fail in the same way. Conversely, replacing $g$ by the identity — which avoids the value $0$ off the point $0$ itself — restores the conclusion, and the companion page carries out that comparison.

- **Textbook statements almost always assume continuity of the outer function**, which is hypothesis (i) of [[thm-composition-of-function-limits]] written out. The version with hypothesis (ii) is the one that licenses substitutions such as $y = 1/x$, where the inner function omits the critical value for a structural reason.

- **The same witness refutes nothing else on this page.** In particular it does not bear on [[thm-algebra-of-function-limits]]: sums, products and quotients are formed pointwise from the values of $f$ and $g$ at the *same* argument, and no composition is involved.
