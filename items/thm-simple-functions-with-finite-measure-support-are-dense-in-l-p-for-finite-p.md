---
id: thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p
kind: theorem
title: "Simple functions with finite-measure support are dense in $L^p(\\mu)$ for $1 \\le p < \\infty$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-l-p-space-as-a-quotient-by-null-functions, rem-elements-of-l-p-are-equivalence-classes-and-pointwise-statements-require-a-representative, cor-measurable-functions-admit-dominated-simple-approximations, thm-dominated-convergence]
landmark: true
proof_strategy: "Choose a measurable representative, approximate it by dominated simple functions, and apply dominated convergence to $|f-s_k|^p$. The support clause is exactly the finite-measure condition for a simple function to lie in $L^p$."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---
## Statement

Let $(X,\mathcal A,\mu)$ be a measure space and let $1 \le p < \infty$. Then
every element of $L^p(\mu)$ can be approximated in $L^p$ by simple functions
whose supports have finite measure.

## Facts & Assumptions

**Given:** A measure space, an exponent $1 \le p < \infty$, and $f \in L^p(\mu)$.

[L1] Every measurable function admits dominated simple approximations
([[cor-measurable-functions-admit-dominated-simple-approximations]]).

[L2] Dominated convergence applies in $L^1$
([[thm-dominated-convergence]]).

[L3] Elements of $L^p(\mu)$ are almost-everywhere classes, so one may choose a
measurable representative when making pointwise constructions
([[def-l-p-space-as-a-quotient-by-null-functions]]).

## Proof

**Proof technique:** direct.

1.1 Choose a measurable representative $u$ of $f$ by [L3]. For each [L1, L3, given, choose, construct]
$m \in \mathbb{N}_{\ge 1}$, [L1] gives a simple function $s_m$ with
$|s_m| \le |u|$ and $s_m(x) \to u(x)$ for every $x$. Define
$$ t_m := s_m\,\mathbf{1}_{\{|u| \ge 1/m\}}. $$
Then each $t_m$ is simple and
$\operatorname{supp}(t_m) \subseteq \{|u| \ge 1/m\}$. [L1, L3, given, choose, construct]

2.1 Since $|u|^p$ is integrable, [step 1.1, algebra]
$$ \mu(\{|u| \ge 1/m\}) \le m^p \int |u|^p\,d\mu < \infty, $$
so every $t_m$ has finite-measure support. Also $t_m(x) \to u(x)$ for every $x$:
if $u(x)=0$ then eventually both sides are $0$, and if $u(x)\neq0$ then
$\mathbf{1}_{\{|u(x)| \ge 1/m\}}=1$ for all large $m$. Finally
$$ |u-t_m|^p \le (2|u|)^p, $$
whose right-hand side is integrable. [step 1.1, algebra]

3.1 Applying [L2] to $|u-t_m|^p$ gives [L2, step 2.1]
$$ \|f-t_m\|_p^p = \int |u-t_m|^p\,d\mu \longrightarrow 0. $$
So the simple functions with finite-measure support are dense in $L^p(\mu)$. [L2, step 2.1] ∎
