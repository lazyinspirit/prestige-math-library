---
id: lem-limit-implies-local-boundedness
kind: lemma
title: "If $f$ has a finite limit at $c$ then $f$ is bounded on some punctured neighbourhood of $c$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-function-limit, def-bounded-set, def-neighbourhood-r, def-limit-point-r, lem-of-triangle-inequality, lem-of-abs-value, lem-of-add-order, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "local boundedness"
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
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $c$ be a limit point of $A$
([[def-limit-point-r]]), let $f : A \to \mathbb{R}$ and suppose the limit of $f$
at $c$ exists, say $\lim_{x \to c} f(x) = L$ ([[def-function-limit]]). Then there
are a real $\delta > 0$ and a real $M \ge 0$ with

$$|f(x)| \le M \qquad \text{for every } x \in A \text{ with } 0 < |x - c| < \delta ;$$

equivalently, the image $f\bigl(A \cap N^{*}_{\delta}(c)\bigr)$ is a bounded
subset of $\mathbb{R}$ ([[def-bounded-set]], [[def-neighbourhood-r]]). One may
take $M = |L| + 1$.

**Only local boundedness follows, never boundedness on $A$.** A function with a
limit at $c$ may be unbounded on its domain, as
[[fs-limit-exists-implies-bounded-on-the-domain]] records.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a limit point $c$ of $A$, a function $f : A \to \mathbb{R}$ and a real $L$ with $\lim_{x \to c} f(x) = L$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$ ([[def-function-limit]]).

[L2] Absolute value: $|u| \ge 0$; $-|u| \le u \le |u|$; and for $t > 0$, $|u| \le t$ is equivalent to $-t \le u \le t$ ([[lem-of-abs-value]]).

[L3] Triangle inequality: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L4] Order arithmetic: $0 < 1$ ([[cor-of-one-positive]]); adding a constant preserves the order and adding inequalities is legitimate ([[lem-of-add-order]]); and $u < v$ implies $u \le v$. [[lem-of-add-order]] states these moves in their STRICT forms only; the non-strict forms used below follow by adjoining the equality case, in which the two sides coincide, the order being total ([[def-ordered-field]]).

[L5] Bounded set: $S \subseteq \mathbb{R}$ is bounded when it has both an upper and a lower bound ([[def-bounded-set]]); and $N^{*}_{\delta}(c) = \{\, y : 0 < |y - c| < \delta \,\}$ ([[def-neighbourhood-r]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] with the particular value $\varepsilon = 1$, legitimate since $1 > 0$: fix a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < 1$. [L1, L4, choose]

1.2 Put $M := |L| + 1$. Then $M \ge 0$, since $|L| \ge 0$ and $1 > 0$. [L2, L4]

2.1 For every $x \in A$ with $0 < |x - c| < \delta$ we have $|f(x)| = |(f(x) - L) + L| \le |f(x) - L| + |L| < 1 + |L| = M$, hence $|f(x)| \le M$. [step 1.1, step 1.2, L2, L3, L4]

3.1 Therefore $-M \le f(x) \le M$ for every such $x$, so $M$ is an upper bound and $-M$ a lower bound of the image $f\bigl(A \cap N^{*}_{\delta}(c)\bigr)$: that image is a bounded subset of $\mathbb{R}$. [step 2.1, L2, L5] ∎

## Remarks

- **The radius $\delta$ depends on $f$ and $c$ and on nothing else here**, since the proof runs the limit condition at the single value $\varepsilon = 1$. Any other positive $\varepsilon$ would do, with $M = |L| + \varepsilon$; the value $1$ is chosen only because it is available in every ordered field ([[cor-of-one-positive]]).

- **Why this is needed.** It is the hypothesis that makes the product case of [[thm-algebra-of-function-limits]] work: to estimate $f(x)g(x) - LM$ one needs a bound on $|f(x)|$ near $c$, and the limit of $f$ supplies one only locally. The companion fact for the denominator of a quotient — a *lower* bound on $|g|$ near $c$ — is [[lem-sign-preservation-near-a-limit]].

- **The converse fails.** A function bounded on a punctured neighbourhood of $c$ need not have a limit at $c$: the oscillator $\psi(1/x)$ on the companion page takes only values in $[0, 1/2]$ and has no limit at $0$.
