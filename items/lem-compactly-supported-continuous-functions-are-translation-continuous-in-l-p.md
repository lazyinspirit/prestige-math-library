---
id: lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p
kind: lemma
title: "Continuous compactly supported functions are translation-continuous in $L^p$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-translation-of-a-function-on-rn, def-c-c-and-c-c-infinity-on-rn, thm-heine-cantor-metric, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]
landmark: false
proof_strategy: "A compactly supported continuous function is uniformly continuous on a large compact set containing all small translates of its support. Uniform smallness on that set, together with bounded support measure, gives $L^p$ smallness."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement

Assume the Axiom of Countable Choice.

Let $1 \le p < \infty$ and let $f \in C_c(\mathbb{R}^n)$. Then

$$\|\tau_h f - f\|_p \longrightarrow 0 \qquad(h \to 0).$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $1 \le p < \infty$, and $f \in C_c(\mathbb{R}^n)$.

[L1] Continuous functions on compact metric spaces are uniformly continuous ([[thm-heine-cantor-metric]]).

[L2] Bounded sets have finite Lebesgue measure, and translation preserves Lebesgue measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[L3] Translation is the convention of [[def-translation-of-a-function-on-rn]], and $C_c(\mathbb{R}^n)$ is defined in [[def-c-c-and-c-c-infinity-on-rn]].

## Proof

**Proof technique:** direct.

1.1 Let $K := \operatorname{supp}(f)$, and choose $R > 0$ so that [L1, L3, given, choose] $K \subseteq B(0,R)$. Then for $|h| \le 1$, the support of $\tau_h f - f$ lies in the compact set $\overline{B(0,R+1)}$. By [L1], $f$ is uniformly continuous on that compact set. [L1, L3, given, choose]

2.1 Let $\varepsilon > 0$. Uniform continuity gives $\delta > 0$ such that [L1, L2, step 1.1, choose, algebra] $|f(x-h)-f(x)| < \varepsilon$ whenever $|h| < \delta$ and $x,x-h \in \overline{B(0,R+1)}$. Hence for $|h| < \delta$, $$ \|\tau_h f-f\|_p^p \le \varepsilon^p\,\lambda_n(\overline{B(0,R+1)}). $$ The right-hand side tends to $0$ with $\varepsilon$, and [L2] makes the measure finite. [L1, L2, step 1.1, choose, algebra]

3.1 Therefore $\|\tau_h f-f\|_p \to 0$ as $h \to 0$. [step 2.1] ∎
