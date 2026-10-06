---
id: cor-finite-propagation-for-scalar-conservation-laws
kind: corollary
title: Finite propagation for scalar conservation laws
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
deps: [thm-kruzhkov-local-l1-contraction, def-kruzhkov-entropy-solution, def-metric-ball, def-lipschitz-holder-contraction, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, thm-rationals-countable, thm-product-of-countable, lem-q-and-irrationals-dense-r, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§1, characteristic cone, pp. 218–219; §3, Theorem 1, (3.1), pp. 222–229"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§5.5, Definition 5.11, pp. 45–46 (entropy formulation); finite-cone proof supplied locally"
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

Assume Countable Choice ([[def-countable-choice]]) for the analytic prerequisites used below.

Let $n\ge1$, $T>0$, and let $f\colon\mathbb R\to\mathbb R^n$ be $C^1$ (hence Lipschitz on bounded intervals), with Lipschitz constant $L\ge0$ on the common essential
range of the solutions below. Let $u,v$ be bounded Kruzhkov entropy solutions
on $\Pi_T$ in the sense of [[def-kruzhkov-entropy-solution]]. Fix
$x_0\in\mathbb R^n$ and $R>0$. If $u_0=v_0$ almost everywhere on $B(x_0,R)$,
then for almost every $t\in(0,T)$ with $Lt<R$,
$$u(t,\cdot)=v(t,\cdot)\quad\text{almost everywhere on }B(x_0,R-Lt).$$
For $L=0$ this holds for almost every $t\in(0,T)$ on the stationary ball
$B(x_0,R)$. In particular, if $u_0=0$ almost everywhere outside $B(x_0,R)$,
then $u(t,x)=0$ for almost every $(t,x)\in\Pi_T$ with
$|x-x_0|>R+Lt$. The conclusions are almost-everywhere statements for each fixed
cone; an every-time claim requires a chosen time-continuous representative
([[def-metric-ball]]).

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $T>0$, $f\in C^1$, bounded Kruzhkov entropy solutions $u,v$ on $\Pi_T$ with common essential bound $M$ and $|u|,|v|\le M$ almost everywhere, a constant $L\ge0$ with $|f(a)-f(b)|\le L|a-b|$ for $a,b\in[-M,M]$, a centre $x_0\in\mathbb R^n$, and $R>0$.

[F1] Local $L^1$ contraction: for almost every $t\in(0,T)$ with $Lt<R$, $\int_{B(x_0,R-Lt)}|u(t,x)-v(t,x)|\,dx\le\int_{B(x_0,R)}|u_0(x)-v_0(x)|\,dx$, with an exceptional null set depending on $x_0,R$; when $L=0$ the time condition is vacuous and the ball is stationary ([[thm-kruzhkov-local-l1-contraction]], [[def-lipschitz-holder-contraction]], [[def-kruzhkov-entropy-solution]]).

[F2] The function identically $0$ on $\Pi_T$ is a Kruzhkov entropy solution with initial datum $0$ for every flux $f$: for each $k\in\mathbb R$ the functions $\eta_k(0)=|k|$ and $q_k(0)=\operatorname{sgn}(-k)(f(0)-f(k))$ are constant, so $\partial_t\eta_k(0)+\operatorname{div}_xq_k(0)=0$ in distributions, and the strong local $L^1$ initial condition holds because $\int_K|0-0|\,dx=0$ for every compact $K$ ([[def-kruzhkov-entropy-solution]]).

[F3] A nonnegative function in $L^1_{\mathrm{loc}}$ has vanishing integral over an open ball if and only if it vanishes almost everywhere there; almost-everywhere statements are statements about equivalence classes ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[F4] Countable measure bookkeeping: $\mathbb Q$ is countable and dense in $\mathbb R$ ([[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]]), hence finite products are countable ([[thm-product-of-countable]]). To approximate a point of $\mathbb R^n$ within $\delta$, approximate each coordinate by a rational within $\delta/\sqrt n$; this proves density of $\mathbb Q^n$. a countable intersection of full-measure sets of times is full measure, and a countable union of null subsets of $\Pi_T$ is null; Fubini gives the section-to-product nullity implication ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]). A countable union of null sets is null: finite-union indicators are bounded by the finite sums of the null-set indicators, and monotone convergence passes to their increasing union. Limits of integrals over expanding balls are covered by monotone and dominated convergence ([[thm-monotone-convergence-for-the-integral]], [[thm-dominated-convergence]], [[def-metric-ball]]).

## Proof

**Proof technique:** direct.

1.1 **The local estimate with vanishing right-hand side.** Fix $x_0,R$ and suppose first that $u_0=v_0$ almost everywhere on $B(x_0,R)$. By [F1], for almost every $t\in(0,T)$ with $Lt<R$, $$\int_{B(x_0,R-Lt)}|u(t,x)-v(t,x)|\,dx\le\int_{B(x_0,R)}|u_0(x)-v_0(x)|\,dx=0,$$ so $u(t,\cdot)=v(t,\cdot)$ almost everywhere on $B(x_0,R-Lt)$ by [F3]. If $L=0$ the condition $Lt<R$ reads $0<R$ and is automatic, the ball $B(x_0,R-Lt)=B(x_0,R)$ is stationary, and the statement holds for almost every $t\in(0,T)$. [F1, F3]


2.1 **The support claim for the atomic ball.** Suppose now that $u_0=0$ almost everywhere outside $B(x_0,R)$ and let $q\in\mathbb R^n$, $r_0>0$ with $B(q,r_0)\subseteq\mathbb R^n\setminus\overline B(x_0,R)$. Then $u_0=0$ almost everywhere on $B(q,r_0)$, so step 1.1 applied to the pair $(u,0)$ with centre $q$ and radius $r_0$ — legitimate because $0$ is an entropy solution with datum $0$ by [F2] — gives $u(t,\cdot)=0$ almost everywhere on $B(q,r_0-Lt)$ for almost every $t$ with $Lt<r_0$. [F2, step 1.1]


3.1 **Covering the exterior cone.** Let $Q$ consist of rational pairs $(q,r_0)\in\mathbb Q^n\times\mathbb Q_{>0}$ satisfying $r_0<|q-x_0|-R$, and let $C(q,r_0)=\{(t,x):Lt<r_0,\ |x-q|<r_0-Lt\}$. If $|x-x_0|>R+Lt$, choose rational $q$ sufficiently close to $x$ that $Lt+|x-q|<|q-x_0|-R$, then a rational $r_0$ between these bounds. Thus $B(q,r_0)$ lies in the strict exterior of the initial ball and $(t,x)\in C(q,r_0)$. The countable family of these cones covers the strict exterior cone. [F4, step 2.1]


4.1 **Conclusion of the support claim.** For each $(q,r_0)\in Q$, step 2.1 exhibits a null set of times $t$ with $Lt<r_0$ such that $u(t,\cdot)\ne0$ on a positive-measure subset of $B(q,r_0-Lt)$; hence the set $N(q,r_0)=\{(t,x)\in C(q,r_0)\colon u(t,x)\ne0\}$ is a null subset of $\Pi_T$, by Fubini: its sections are null for almost every time, and bounded spatial sections at the exceptional null set of times contribute zero. A countable union of null sets is null by [F4], so $N=\bigcup_{(q,r_0)\in Q}N(q,r_0)$ is null, and by step 3.1 the set $\{(t,x)\in\Pi_T\colon |x-x_0|>R+Lt,\ u(t,x)\ne0\}$ is contained in $N$. Therefore $u=0$ almost everywhere in the exterior cone. [F4, step 2.1, step 3.1] ∎
