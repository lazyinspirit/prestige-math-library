---
id: thm-c-c-rn-is-dense-in-l-p-of-rn
kind: theorem
title: "$C_c(\\mathbb{R}^n)$ is dense in $L^p(\\mathbb{R}^n)$ for $1 \\le p < \\infty$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-box-step-functions-are-dense-in-l-p-of-rn, lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff, lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess, thm-minkowski-inequality-for-integrals]
landmark: true
proof_strategy: "Approximate finite-support simple functions by continuous cutoffs between compact-inside-open sandwiches. The explicit Euclidean cutoff formula keeps the argument local to $\\mathbb{R}^n$ rather than citing the general Urysohn lemma as a load-bearing step."
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Statement

Assume the Axiom of Countable Choice.

Let $1 \le p < \infty$. Then $C_c(\mathbb{R}^n)$ is dense in
$L^p(\mathbb{R}^n)$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $1 \le p < \infty$, $\varepsilon > 0$, and $f \in L^p(\mathbb{R}^n)$.

[L1] Box-step functions are dense in $L^p(\mathbb{R}^n)$ ([[thm-box-step-functions-are-dense-in-l-p-of-rn]]).

[L2] Finite-measure measurable sets admit compact cores with bounded open neighbourhoods of arbitrarily small excess ([[lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess]]).

[L3] Compact sets inside bounded open sets admit explicit compactly supported continuous cutoffs ([[lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff]]).

[L4] Minkowski's inequality holds in $L^p$ ([[thm-minkowski-inequality-for-integrals]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a box-step function [L1, L2, given, choose] $$ s = \sum_{j=1}^m a_j\,\mathbf{1}_{E_j} $$ with $\|f-s\|_p < \varepsilon/2$. For each $j$, apply [L2] to choose $K_j \subseteq E_j$ and a bounded open set $O_j \supseteq K_j$ with $$ \lambda_n(E_j \setminus K_j), \ \lambda_n(O_j \setminus K_j) < \left(\frac{\varepsilon}{2^{1+1/p}m(1+\sum_{j=1}^m |a_j|)}\right)^p. $$ [L1, L2, given, choose]

2.1 For each $j$, [L3] gives $\eta_j \in C_c(\mathbb{R}^n)$ with [L3, L4, step 1.1, construct, algebra] $0 \le \eta_j \le 1$, $\eta_j=1$ on $K_j$, and $\operatorname{supp}(\eta_j)\subseteq O_j$. Put $$ g := \sum_{j=1}^m a_j\,\eta_j \in C_c(\mathbb{R}^n). $$ Since $\eta_j-\mathbf{1}_{E_j}$ vanishes off $(E_j \setminus K_j)\cup(O_j \setminus K_j)$ and has absolute value at most $1$ there, $$ \|g-s\|_p \le \sum_{j=1}^m |a_j| \left(\lambda_n(E_j \setminus K_j)+\lambda_n(O_j \setminus K_j)\right)^{1/p} < \varepsilon/2 $$ by [L4]. [L3, L4, step 1.1, construct, algebra]

3.1 Therefore [step 1.1, step 2.1, algebra] $$ \|f-g\|_p \le \|f-s\|_p + \|s-g\|_p < \varepsilon. $$ Since $g \in C_c(\mathbb{R}^n)$, the space $C_c(\mathbb{R}^n)$ is dense in $L^p(\mathbb{R}^n)$. [step 1.1, step 2.1, algebra] ∎
