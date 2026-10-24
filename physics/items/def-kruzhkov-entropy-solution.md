---
id: def-kruzhkov-entropy-solution
kind: definition
title: Kruzhkov entropy solutions
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
justified_by: []
aliases: []
deps: [def-distributional-weak-solution-of-a-scalar-conservation-law, def-convex-entropy-entropy-flux-pair, def-abs-value, def-l-p-space-as-a-quotient-by-null-functions, def-locally-integrable-function-on-r-n, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§2, Definition 1, pp. 220–221"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§5.5, Definition 5.11 and Proposition 5.12, pp. 45–46"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§2.3, pp. 16–17"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $n\ge1$, $T>0$, $f\in C^1(\mathbb R;\mathbb R^n)$, and
$\Pi_T=\mathbb R^n\times(0,T)$. The unknown and initial datum are equivalence
classes $[u]\in L^\infty(\Pi_T)$ and
$[u_0]\in L^\infty(\mathbb R^n)\cap L^1_{\mathrm{loc}}(\mathbb R^n)$, where
equality is Lebesgue-a.e. ([[def-l-p-space-as-a-quotient-by-null-functions]],
[[def-locally-integrable-function-on-r-n]]).

For $k\in\mathbb R$ define the **Kruzhkov entropy pair**
$$\eta_k(s)=|s-k|,\qquad q_k(s)=\operatorname{sgn}(s-k)\bigl(f(s)-f(k)\bigr),$$
with $\operatorname{sgn}(0)=0$ ([[def-abs-value]]). Then $\eta_k$ is convex
and $q_k'=\eta_k'f'$ almost everywhere, so $(\eta_k,q_k)$ is a locally Lipschitz convex
entropy--entropy flux pair ([[def-convex-entropy-entropy-flux-pair]]).

The class $[u]$ is a **Kruzhkov entropy solution** of
$u_t+\operatorname{div}_x f(u)=0$ with initial trace $[u_0]$ if:

(i) for every $k\in\mathbb R$ and every nonnegative
$\varphi\in C_c^\infty(\Pi_T)$,
$$\int_{\Pi_T}\bigl(\eta_k(u)\,\varphi_t+q_k(u)\cdot\nabla_x\varphi\bigr)\,dx\,dt\ge0,$$
that is, $\partial_t\eta_k(u)+\operatorname{div}_x q_k(u)\le0$ in
$\mathcal D'(\Pi_T)$; and

(ii) for every compact $K\subseteq\mathbb R^n$,
$$\lim_{\delta\downarrow0}\operatorname*{ess\,sup}_{0<t<\min\{\delta,T\}}\int_K|u(t,x)-u_0(x)|\,dx=0.$$

The integral in (i) is independent of the representative because its integrand
is unchanged almost everywhere. For (ii), Fubini's theorem gives locally
integrable spatial sections for almost every $t$
([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]); the
displayed slice integral is defined for those times and its essential supremum
ignores the exceptional null set. If $u$ or $u_0$ is changed on a null set in
its respective space, Fubini's theorem shows that the slice-integral function
changes only for a null set of times, so the trace condition is well defined on
the equivalence classes: this is the **strong local $L^1$ initial trace**.

Taking $k$ above and below the essential range of $u$ makes $\eta_k$ equal
$k-u$ and $u-k$, whose $t$- and $x$-derivatives cancel the constant terms
against compactly supported test functions, so the entropy inequalities imply
the weak conservation law of
[[def-distributional-weak-solution-of-a-scalar-conservation-law]] tested
against nonnegative test functions, hence by linearity against all test
functions.

To recover the Cauchy boundary term, apply the interior weak identity to
$\varphi(t,x)\zeta(t/\delta)$, where $\zeta$ is smooth and nondecreasing,
$\zeta=0$ on $(-\infty,1/2]$ and $\zeta=1$ on $[1,\infty)$.
For $\delta>0$ this product is supported away from $t=0$, so it is
an admissible interior test. The term containing $\zeta'/\delta$
converges to $\int u_0(x)\varphi(0,x)\,dx$ by (ii), while the other terms
converge on the compact support. This proves the full weak formulation with
initial datum $u_0$, rather than only its interior equation.
