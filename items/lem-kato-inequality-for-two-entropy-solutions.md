---
id: lem-kato-inequality-for-two-entropy-solutions
kind: lemma
title: The Kruzhkov doubling inequality for two entropy solutions
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-kruzhkov-entropy-solution, def-convex-entropy-entropy-flux-pair, def-distribution, def-distributional-derivative, def-convolution-of-a-distribution-with-a-test-function, def-radial-mollifier-family-in-rn, thm-dominated-convergence, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-abs-value, thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§3, (3.2)--(3.7) and Lemmas 1--3, pp. 222--228"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§5.5, Definition 5.11, pp. 45--46 (entropy formulation; the doubling proof is given locally here)"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§6.1, pp. 49--50"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $n\ge1$, $T>0$, $f\in C^1(\mathbb R;\mathbb R^n)$, and let $u,v$ be bounded
Kruzhkov entropy solutions on $\Pi_T$ in the sense of
[[def-kruzhkov-entropy-solution]]. Then, in the sense of distributions on
$\Pi_T$,
$$\partial_t|u-v|+\operatorname{div}_x\Bigl(\operatorname{sgn}(u-v)\bigl(f(u)-f(v)\bigr)\Bigr)\le0.$$
Equivalently, for every nonnegative $\varphi\in C_c^\infty(\Pi_T)$,
$$\int_{\Pi_T}\Bigl(|u-v|\,\varphi_t+\operatorname{sgn}(u-v)\bigl(f(u)-f(v)\bigr)\cdot\nabla_x\varphi\Bigr)\,dx\,dt\ge0.$$
Here $\operatorname{sgn}(0)=0$. Together with the weak equation this is the
doubling-variables inequality from which uniqueness and the local $L^1$
contraction are read off
([[def-distribution]], [[def-distributional-derivative]]).

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $T>0$, $f\in C^1$, bounded entropy solutions $u,v$ on $\Pi_T$, a nonnegative test function $\varphi\in C_c^\infty(\Pi_T)$, and nonnegative unit-mass even mollifiers $\theta_h$ on $\mathbb R$ and $\rho_h$ on $\mathbb R^n$ with $\int\rho_h=1$, $\operatorname{supp}\theta_h\subset(-h,h)$ and $\operatorname{supp}\rho_h\subset B_h$ ([[def-radial-mollifier-family-in-rn]], [[def-convolution-of-a-distribution-with-a-test-function]]).

[F1] For every $k\in\mathbb R$ the pair $(\eta_k,q_k)$ with $\eta_k(s)=|s-k|$, $q_k(s)=\operatorname{sgn}(s-k)(f(s)-f(k))$ is a convex entropy pair with $q_k'=\eta_k'f'$, and each of $u,v$ satisfies the corresponding distributional inequality against every nonnegative test function ([[def-kruzhkov-entropy-solution]], [[def-convex-entropy-entropy-flux-pair]], [[def-abs-value]]).

[F2] Fubini and dominated convergence apply on compact supports ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-dominated-convergence]]). After multiplication by a fixed cutoff, $u,v$ lie in $L^1(\mathbb R^{n+1})$ and their translations are norm continuous under Countable Choice ([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]], [[def-countable-choice]], [[def-l-p-space-as-a-quotient-by-null-functions]]). This is the $L^1$ diagonal interface; distributional mollifier convergence alone would not supply it.

## Proof

**Proof technique:** direct.

1.1 **The doubled test function.** For $h>0$ smaller than half the distance of the temporal support of $\varphi$ from $\{0,T\}$, set $g_h(t,x,\tau,y)=\varphi\bigl(\tfrac{t+\tau}{2},\tfrac{x+y}{2}\bigr)\theta_h(t-\tau)\rho_h(x-y)$; it is nonnegative and smooth with compact support in each pair of variables, and $\partial_tg_h+\partial_\tau g_h=(\partial_t\varphi)\bigl(\tfrac{t+\tau}{2},\tfrac{x+y}{2}\bigr)\theta_h(t-\tau)\rho_h(x-y)$, $\nabla_xg_h+\nabla_yg_h=(\nabla\varphi)\bigl(\tfrac{t+\tau}{2},\tfrac{x+y}{2}\bigr)\theta_h(t-\tau)\rho_h(x-y)$. [F2, given]


1.2 **The inequality for $u$ with state $k=v(\tau,y)$.** For almost every $(\tau,y)$ the constant $k=v(\tau,y)$ is admissible in [F1], and testing the entropy inequality for $u$ by the nonnegative function $g_h(\cdot,\cdot,\tau,y)$ gives $\int_{\Pi_T}\bigl(|u(t,x)-v(\tau,y)|\,\partial_tg_h+\operatorname{sgn}(u-v(\tau,y))(f(u)-f(v(\tau,y)))\cdot\nabla_xg_h\bigr)\,dx\,dt\ge0$; the integrand is bounded by a constant times the compactly supported smooth $g_h$ and its derivatives, so the left side is a bounded measurable function of $(\tau,y)$. [F2, given]


2.1 **Adding the symmetric inequality.** Integrating the inequality of step 1.2 over $(\tau,y)\in\Pi_T$, and likewise testing the entropy inequality for $v$ with $k=u(t,x)$ and integrating over $(t,x)$, then adding, Fubini's theorem gives $0\le\int\!\!\int_{\Pi_T\times\Pi_T}\bigl[|u-v|\,(\partial_tg_h+\partial_\tau g_h)+\operatorname{sgn}(u-v)\bigl(f(u)-f(v)\bigr)\cdot(\nabla_xg_h+\nabla_yg_h)\bigr]$; the two integrals have the same bounded integrand because of the symmetry of $g_h$. [F2, step 1.2]


3.1 **Passing to the diagonal.** Put $z=(t,x)$ and $z'=(\tau,y)=z-h'$. On a fixed compact set containing the doubled supports, translation continuity gives $\|v(\cdot-h')-v\|_1\to0$ uniformly for $|h'|\le2h$. The map $Q(a,b)=\operatorname{sgn}(a-b)(f(a)-f(b))$ is Lipschitz in each variable on the common bounded range: when a variable crosses the other one, split the interval at that point and use $Q(b,b)=0$ and the flux Lipschitz bound. Hence replacing $v(z')$ by $v(z)$ changes the doubled integral by at most $C\sup_{|h'|\le2h}\|v(\cdot-h')-v\|_1$. Replacing $D\varphi((z+z')/2)$ by $D\varphi(z)$ has error $O(h)$ by smoothness, boundedness and unit kernel mass. Step 2.1 therefore converges to $\int_{\Pi_T}(|u-v|\varphi_t+Q(u,v)\cdot\nabla\varphi)\ge0$. [F2, step 1.1, step 2.1] ∎
