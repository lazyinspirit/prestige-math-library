---
id: cex-pointwise-shock-values-do-not-affect-the-weak-solution
kind: counterexample
title: Pointwise shock values do not affect the weak solution
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-distributional-weak-solution-of-a-scalar-conservation-law, def-piecewise-smooth-shock-and-one-sided-traces, def-measure-null-set-and-almost-everywhere, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-tonelli-theorem-for-sigma-finite-product-spaces]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§4.1--4.2, pp. 18--23"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§2.1, p. 9"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

The claim refuted is that the distributional weak formulation determines the
pointwise values of a piecewise $C^1$ solution along its shock curve. Let $u$ be
a bounded distributional weak solution of $u_t+f(u)_x=0$ on $\Pi_T$ that is
piecewise $C^1$ with shock curve $\Gamma=\{x=s(t)\}$
([[def-distributional-weak-solution-of-a-scalar-conservation-law]],
[[def-piecewise-smooth-shock-and-one-sided-traces]]). For any bounded measurable
$\theta\colon(0,T)\to\mathbb R$, define
$$\tilde u(t,x)=u(t,x)\ \ (x\ne s(t)),\qquad \tilde u(t,s(t))=\theta(t).$$
Then $\tilde u=u$ almost everywhere and represents the same
$L^1_{\mathrm{loc}}$ class, so it has the same weak formulation and the same
initial datum, while its values on $\Gamma$ are completely arbitrary. More
generally, any bounded measurable modification on a Lebesgue-null subset of
$\Pi_T$ leaves the weak-solution class unchanged.

## Facts & Assumptions

**Given:** a bounded piecewise $C^1$ distributional weak solution $u$ with shock curve $\Gamma=\{x=s(t)\}$, a bounded measurable $\theta$, and the modification $\tilde u$ above.

[F1] A bounded measurable function is a weak solution exactly when its $L^1_{\mathrm{loc}}$ class satisfies the integral identity; the identity pairs $u$ against test functions and therefore depends only on the class of $u$ modulo null sets ([[def-distributional-weak-solution-of-a-scalar-conservation-law]]).

[F2] The graph of the continuous $s$ is Borel in $(0,T)\times\mathbb R$, and each fixed-time spatial section is a singleton, of Lebesgue measure zero. Tonelli therefore gives zero space--time measure ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[def-measure-null-set-and-almost-everywhere]]). Modifications on this null set change no test integral ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

## Proof

**Proof technique:** direct.

1.1 **The modification is measurable, bounded and a.e. equal.** The set $\Gamma$ is null by [F2], and on its complement $\tilde u=u$; on $\Gamma$ the values $\theta(t)$ are bounded and measurable, so $\tilde u$ is bounded and measurable and $\tilde u=u$ Lebesgue-a.e. [F2, given]


2.1 **The weak formulation is unchanged.** Every test function in the weak identity is integrable against $|u|+|f(u)|$ on compact sets, and by [F2] the values on $\Gamma$ form a null set; hence each integral in the weak identity for $\tilde u$ equals the corresponding integral for $u$, and the initial datum is likewise the same $L^1_{\mathrm{loc}}$ class. Since $u$ is a weak solution and the trace requirement depends only on the class, $\tilde u$ is a weak solution with the same datum. [F1, F2, step 1.1]


3.1 **Arbitrary pointwise values on the shock.** Choosing the constant functions $\theta_1=0$ and $\theta_2=1$ on $(0,T)$ gives two representatives of the same $L^1_{\mathrm{loc}}$ class that differ at every point of $\Gamma$; both satisfy the same weak formulation. Therefore the weak formulation cannot determine pointwise values on the shock curve, and the same argument applies to any bounded measurable modification on a Lebesgue-null subset of $\Pi_T$. [step 2.1, F2] ∎
