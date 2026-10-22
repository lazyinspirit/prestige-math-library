---
id: ex-ip-bochner-integral-defines-weakly-closed-nonlinear-map
kind: example
title: A Bochner-integral forward map with weakly closed graph
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-weakly-closed-nonlinear-forward-map
  - def-ip-nonlinear-tikhonov-functional
  - thm-ip-nonlinear-tikhonov-minimizer-exists
  - def-ip-nonlinear-forward-map
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - thm-reals-cauchy-complete
  - def-weak-convergence-of-nets-and-sequences
  - def-ultrafilter-extension-principle
  - def-dependent-choice
  - def-countable-choice
  - def-hahn-banach-extension-principle-relative
  - lem-dependent-choice-implies-countable-choice
  - def-measure-space
  - def-measure
  - def-banach-space
  - def-banach-valued-simple-function-and-integral
  - def-bochner-integrable-function
  - lem-banach-valued-simple-integral-is-well-defined
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Example

Assume the ultrafilter lemma, dependent choice, and HB. Give $\Omega=\{0,1\}$ its full sigma-algebra and probability measure $\mu(A)=|A|/2$. For each $s\in\mathbb R$, let $g_s:\Omega\to\mathbb R$ be the simple function $g_s(0)=s$, $g_s(1)=s^2$, and define $F(s)=\int_\Omega g_s\,d\mu=(s+s^2)/2$. With $X=Y=D=\mathbb R$ and the usual real Hilbert structure, $D$ is weakly closed and $F$ is nonlinear; if $s_n\rightharpoonup s$ and $F(s_n)\rightharpoonup z$, then $z=F(s)$, where weak convergence in $\mathbb R$ means convergence under every bounded real-linear functional. For every $\alpha>0$, $x_0,y\in\mathbb R$, its Tikhonov functional

$$
J_{\alpha,y,x_0}(s)=\frac12|F(s)-y|^2+\frac{\alpha}{2}|s-x_0|^2
$$

has a global minimizer on $\mathbb R$.

## Example references

[[def-ip-nonlinear-forward-map|Nonlinear forward maps on open real Hilbert domains]]

[[def-ip-weakly-closed-nonlinear-forward-map|Weakly closed domain and sequential graph closure]]

[[def-ip-nonlinear-tikhonov-functional|The nonlinear Tikhonov functional]]

[[thm-ip-nonlinear-tikhonov-minimizer-exists|Global minimizer existence]]

[[def-measure-space|Measure spaces]]

[[def-banach-valued-simple-function-and-integral|Banach-valued simple integrals]]

[[def-bochner-integrable-function|Bochner integrability]]

[[def-hilbert-space|Real Hilbert spaces]]

[[def-weak-convergence-of-nets-and-sequences|Weak sequence convergence]]

## Facts & Assumptions

**Given:** The ultrafilter lemma, DC, and HB; the finite set $\Omega=\{0,1\}$ with $\mu(A)=|A|/2$; the maps $g_s(0)=s$, $g_s(1)=s^2$; and $X=Y=D=\mathbb R$ with the usual real Hilbert structure.

[A1] The ultrafilter lemma extends every filter to an ultrafilter ([[def-ultrafilter-extension-principle]]).

[A2] DC supplies an infinite sequence following an everywhere-extendible relation ([[def-dependent-choice]]).

[A3] HB is the real dominated-extension principle ([[def-hahn-banach-extension-principle-relative]]).

[F1] A measure is zero on the empty set and countably additive on disjoint measurable sets ([[def-measure]]); a measure space consists of a set, sigma-algebra, and measure ([[def-measure-space]]).

[F2] A measurable simple Banach-valued function $g=\sum_jx_j\mathbf1_{A_j}$ with finite-measure nonzero level sets is integrable and has integral $\int g\,d\mu=\sum_j\mu(A_j)x_j$ ([[def-banach-valued-simple-function-and-integral]]).

[F3] An integrable simple Banach-valued function is Bochner integrable, with its Bochner integral equal to the simple integral ([[def-bochner-integrable-function]], [[lem-banach-valued-simple-integral-is-well-defined]]).

[F4] The real numbers with their standard inner product form a real Hilbert space ([[def-real-and-complex-inner-product-space]], [[thm-reals-cauchy-complete]], [[def-hilbert-space]]).

[F5] Weak convergence in a normed space is convergence under every bounded real-linear functional ([[def-weak-convergence-of-nets-and-sequences]]).

[F6] The open-domain nonlinear forward-map interface permits any map $F:U\to Y$ on a nonempty norm-open set, without assuming linearity ([[def-ip-nonlinear-forward-map]]).

[F7] Under the assumptions of [A1]–[A3], a real-Hilbert weakly closed forward map on a nonempty weakly closed domain has a global minimizer for every positive parameter and datum ([[thm-ip-nonlinear-tikhonov-minimizer-exists]]).

[F8] The Tikhonov functional is $\frac12\|F(s)-y\|^2+\frac{\alpha}{2}\|s-x_0\|^2$ on the domain ([[def-ip-nonlinear-tikhonov-functional]]).

[F9] DC implies countable choice, the principle that every countable family of nonempty sets admits a choice function ([[lem-dependent-choice-implies-countable-choice]], [[def-countable-choice]]).

[F10] A weakly closed forward map has a weakly closed domain and sequentially weak-to-weak closed graph ([[def-ip-weakly-closed-nonlinear-forward-map]]).

## Verification

1.1 The assignment $\mu(A)=|A|/2$ is a measure: it is zero on $\varnothing$, and any disjoint sequence of subsets of the two-point set has at most two nonempty members, so cardinalities, hence measures, add over the union. For $s\notin\{0,1\}$, the two singleton level sets of $g_s$ have distinct nonzero coefficients $s,s^2$ and measure $1/2$ each. For $s=0$, use the empty representation of the zero function; for $s=1$, use $g_1=\mathbf1_\Omega$. In all cases [F2] gives an integrable simple function with integral $\frac12s+\frac12s^2$, and the constant approximating sequence in [F3] gives the same Bochner integral. Since $F(1)=1$, $F(-1)=0$, and $F(0)=0$, it fails additivity and is nonlinear. [given, F1, F2, F3, algebra]

1.2 The domain $D=\mathbb R$ is the entire weak topology space and is therefore weakly closed. If $s_n\rightharpoonup s$, [F5] applied to the identity functional gives $s_n\to s$ in the usual real topology. The factorization $F(s_n)-F(s)=\frac12(s_n-s)(1+s_n+s)$ shows $F(s_n)\to F(s)$, because convergence of $s_n$ makes the second factor bounded. If also $F(s_n)\rightharpoonup z$, [F5] gives $F(s_n)\to z$; uniqueness of real limits yields $z=F(s)$. Thus the graph is sequentially weak-to-weak closed. [given, F5, algebra]

2.1 The domain $U=\mathbb R$ is norm-open and nonempty, so [F6] confirms that this is also a forward map in the batch-25 open-domain convention. The graph and domain conditions just verified satisfy [F10]; with the real-Hilbert structure [F4] and axioms [A1]–[A3], they meet the hypotheses of [F7]. The DC-to-countable-choice consequence [F9] is the selection strength used in that theorem's proof. By [F8] this is the stated functional, so for every $\alpha>0$, $x_0,y\in\mathbb R$ it attains a global minimum. [A1, A2, A3, F4, F6, F7, F8, F9, F10, step 1.2, construct] ∎
