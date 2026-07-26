---
id: fs-limit-unique-at-every-point-of-the-domain
kind: false-statement
title: "FALSE: a function has at most one limit at every point of its domain, isolated points included"
status: draft
origin: session
deps: [lem-function-limit-unique, def-limit-point-r, def-function-limit, def-neighbourhood-r, def-interval, lem-of-abs-value, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "FALSE: uniqueness at every point"
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
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

**False claim:** for every $A \subseteq \mathbb{R}$, every $f : A \to \mathbb{R}$
and every $c \in A$, at most one real $L$ satisfies

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ 0 < |x - c| < \delta \ \Longrightarrow\ |f(x) - L| < \varepsilon\ \bigr] . \tag{\ast}$$

**Read the claim carefully: it is about the raw formula $(\ast)$, extended to an
arbitrary point $c$ of the domain.** It is *not* a claim about
[[def-function-limit]]. That definition imposes $(\ast)$ only when $c$ is a limit
point of $A$ ([[def-limit-point-r]]), and there at most one $L$ does satisfy it —
that is exactly [[lem-function-limit-unique]], which is true and proved. The
false claim is what one gets by deleting the limit-point requirement.

**At an isolated point of $A$ the symbol $\lim_{x \to c} f(x)$ is undefined in
this library**, and the refutation below is the reason. If $c \in A$ is not a
limit point of $A$ then some punctured neighbourhood of $c$ misses $A$ entirely
([[def-limit-point-r]]); the implication inside $(\ast)$ then has no instances
at all for that $\delta$, so it holds vacuously, and it holds for **every** real
$L$ at once. A formula satisfied by every real determines nothing, so no
notation is introduced for it.

## Facts & Assumptions

**Given:** The set $A := \{0\} \cup [1,2]$ ([[def-interval]]), the constant function $f : A \to \mathbb{R}$ with $f(x) := 0$ for every $x \in A$, and the point $c := 0 \in A$.

[L1] The $\varepsilon$-$\delta$ formula $(\ast)$ above, and the fact that [[def-function-limit]] imposes it only at a limit point of the domain.

[L2] Limit point and isolated point: $c$ is a limit point of $S$ when $N^{*}_{\varepsilon}(c) \cap S \ne \varnothing$ for every real $\varepsilon > 0$, and $c \in S$ is an isolated point of $S$ when $N_{\varepsilon}(c) \cap S = \{c\}$ for some real $\varepsilon > 0$; for $c \in S$ these are exact opposites ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Neighbourhoods: $N_{1}(0) = \{\, y : |y| < 1 \,\}$ and $N^{*}_{1}(0) = \{\, y : 0 < |y| < 1 \,\}$ ([[def-neighbourhood-r]]).

[L4] Absolute value and order: $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; $|u| = u$ for $u \ge 0$; the order is total and trichotomy holds; and $0 < 1$, so $0 \ne 1$ ([[lem-of-abs-value]], [[cor-of-one-positive]], [[def-ordered-field]]).

[L5] Intervals: $[1,2] = \{\, y : 1 \le y \le 2 \,\}$ ([[def-interval]]).

## Refutation

**Proof technique:** direct.

1.1 The point $0$ lies in $A$, and $N_{1}(0) \cap A = \{0\}$: an element of $A$ is either $0$, which satisfies $|0| = 0 < 1$, or an element of $[1,2]$, which satisfies $|y| = y \ge 1$ and so is not in $N_1(0)$. Hence $0$ is an isolated point of $A$ and not a limit point of $A$. [L2, L3, L4, L5]

1.2 The reals $0$ and $1$ are distinct. [L4]

2.1 Take $\delta := 1$. No $x \in A$ satisfies $0 < |x - 0| < 1$: such an $x$ would lie in $N^{*}_{1}(0) \cap A$, which is contained in $N_1(0) \cap A = \{0\}$ and excludes $0$, hence is empty. So for every real $L$ and every real $\varepsilon > 0$ the choice $\delta = 1$ makes the implication in $(\ast)$ vacuously true, and every real $L$ satisfies $(\ast)$ at $c = 0$. [step 1.1, L1, L3, L4]

3.1 In particular $L = 0$ and $L = 1$ both satisfy $(\ast)$ at $c = 0$, and they are distinct: more than one real satisfies the formula, so the claim is false. [step 1.2, step 2.1, L4] ∎

## Remarks

- **This is the precise reason [[def-function-limit]] carries the limit-point hypothesis.** The hypothesis is not a convenience: it is what makes the quantified set $A \cap N^{*}_{\delta}(c)$ nonempty for every $\delta$, and hence what makes $(\ast)$ capable of pinning $L$ down. With it, [[lem-function-limit-unique]] proves uniqueness; without it, uniqueness is simply false, as above.

- **The true statement in the neighbourhood of the false one.** For $c$ a limit point of $A$: at most one $L$ satisfies $(\ast)$ — [[lem-function-limit-unique]]. For $c$ an isolated point of $A$: every $L$ satisfies $(\ast)$, by the argument of step 2.1, which uses nothing about $f$. So the dichotomy is total, and there is no intermediate case, because for $c \in A$ being isolated and being a limit point are exact opposites ([[def-limit-point-r]]).

- **Some texts do define the limit at an isolated point**, declaring it to be $f(c)$ by fiat, so that "limit" and "continuity" coincide on such points. That is a convention, not a theorem, and this library declines it: a convention that assigns a value to an expression which the definition leaves underdetermined would have to be carried, and checked, in every later statement about limits. The companion page's counterexample exhibits the underdetermination concretely.
