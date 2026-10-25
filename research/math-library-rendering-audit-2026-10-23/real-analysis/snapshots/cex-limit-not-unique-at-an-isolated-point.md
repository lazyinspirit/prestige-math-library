---
id: cex-limit-not-unique-at-an-isolated-point
kind: counterexample
title: "On the domain $\\{0\\} \\cup [1,2]$ every real is vacuously a limit at $0$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-limit-unique-at-every-point-of-the-domain, def-limit-point-r, def-function-limit, lem-function-limit-unique, def-neighbourhood-r, def-interval, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "no uniqueness at an isolated point"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** for every $A \subseteq \mathbb{R}$, every $f : A \to
\mathbb{R}$ and every $c \in A$, at most one real $L$ satisfies

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ 0 < |x - c| < \delta \ \Longrightarrow\ |f(x) - L| < \varepsilon\ \bigr]$$

— the false statement [[fs-limit-unique-at-every-point-of-the-domain]].

The witness is $A := \{0\} \cup [1,2]$ ([[def-interval]]), $f : A \to \mathbb{R}$
the constant $0$, and $c := 0$. At $c$ the displayed formula holds for **every**
real $L$ at once, so it determines nothing.

**What this item adds.** It exhibits the dichotomy inside one example: at the
isolated point $0$ the formula is vacuous, while at the point $1$ of the same
domain — which *is* a limit point of $A$ — the formula is not vacuous and
[[lem-function-limit-unique]] applies, so the limit there exists and is unique.
The same $A$, the same $f$, and opposite behaviour at two of its points.

## Facts & Assumptions

**Given:** The set $A := \{0\} \cup [1,2]$, the constant function $f : A \to \mathbb{R}$ with $f(x) := 0$ for every $x \in A$, and the points $0$ and $1$ of $A$.

[L1] The $\varepsilon$-$\delta$ formula displayed above, and the fact that [[def-function-limit]] imposes it only at a limit point of the domain, where [[lem-function-limit-unique]] then makes $L$ unique.

[L2] Limit point and isolated point: $c$ is a limit point of $S$ when $N^{*}_{\rho}(c) \cap S \ne \varnothing$ for every real $\rho > 0$; $c \in S$ is isolated in $S$ when $N_{\rho}(c) \cap S = \{c\}$ for some real $\rho > 0$; and for $c \in S$ the two are exact opposites ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Neighbourhoods: $N_{\rho}(u) = \{\, y : |y - u| < \rho \,\}$ and $N^{*}_{\rho}(u) = N_{\rho}(u) \setminus \{u\}$ ([[def-neighbourhood-r]]).

[L4] Intervals: $[1,2] = \{\, y : 1 \le y \le 2 \,\}$ ([[def-interval]]).

[L5] Absolute value: $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; $|u| = u$ for $u \ge 0$; $|0| = 0$ ([[lem-of-abs-value]]).

[L6] Order in $\mathbb{R}$: trichotomy and totality; $0 < 1$, so $2 > 0$ and $\rho/2 > 0$ with $\rho/2 < \rho$ for $\rho > 0$; and of two positive reals the smaller is positive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 $A = \{0\} \cup [1,2]$ is a subset of $\mathbb{R}$, and $f$ is the constant $0$ on $A$; both $0$ and $1$ belong to $A$. [L4]

1.2 $0$ is an isolated point of $A$ and not a limit point of $A$: $N_{1}(0) \cap A = \{0\}$, since an element of $A$ is either $0$, with $|0 - 0| = 0 < 1$, or an element of $[1,2]$, with $|y - 0| = y \ge 1$ and hence outside $N_1(0)$. [L2, L3, L4, L5]

1.3 The reals $0$ and $1$ are distinct. [L6]

2.1 Take $\delta := 1$. No $x \in A$ satisfies $0 < |x - 0| < 1$: such an $x$ would lie in $N^{*}_{1}(0) \cap A$, which is contained in $N_1(0) \cap A = \{0\}$ and excludes $0$, hence is empty. So for every real $L$ and every real $\varepsilon > 0$ the choice $\delta = 1$ makes the implication vacuously true, and **every** real $L$ satisfies the displayed formula at $c = 0$. [step 1.2, L1, L3, L5]

2.2 By contrast $1 \in A$ *is* a limit point of $A$: given a real $\rho > 0$, let $\sigma$ be the smaller of $\rho$ and $1$, so $\sigma > 0$; then $1 + \sigma/2$ satisfies $1 \le 1 + \sigma/2 \le 1 + 1/2 \le 2$, so it lies in $[1,2] \subseteq A$, and $0 < |(1 + \sigma/2) - 1| = \sigma/2 < \rho$. There [[def-function-limit]] applies, [[lem-function-limit-unique]] gives at most one $L$, and in fact $\lim_{x \to 1} f(x) = 0$, since $|f(x) - 0| = |0| = 0 < \varepsilon$ for every $x \in A$ and every real $\varepsilon > 0$. [step 1.1, L1, L2, L4, L5, L6]

3.1 In particular $L = 0$ and $L = 1$ both satisfy the formula at $c = 0$, and they are distinct: more than one real satisfies it, so the claim is refuted. This is why [[def-function-limit]] is stated only at a limit point, and why $\lim_{x \to 0} f(x)$ is left undefined on this domain. [step 1.3, step 2.1, L1, L6]

4.1 So on one and the same domain the formula pins down a unique value at the limit point $1$ and no value at all at the isolated point $0$: uniqueness of the limit is a property of limit points, not of arbitrary points of the domain. [step 2.2, step 3.1] ∎

## Remarks

- **Nothing about $f$ is used at $0$.** Step 2.1 never evaluates the function: the implication has no instances. Any $f$ whatever on this $A$ would give the same conclusion, which is precisely why the formula carries no information there.

- **The alternatives are exact.** At a limit point of the domain the formula has at most one solution ([[lem-function-limit-unique]]), while at an isolated point every real solves it ([[def-limit-point-r]]).

- **Some texts declare the limit at an isolated point to be $f(c)$.** That convention is consistent — it selects one of the many solutions — but it is a stipulation, not a theorem, and [[fs-limit-unique-at-every-point-of-the-domain]] records why this library declines it.
