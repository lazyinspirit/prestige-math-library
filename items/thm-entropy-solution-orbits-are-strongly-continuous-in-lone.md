---
id: thm-entropy-solution-orbits-are-strongly-continuous-in-lone
kind: theorem
title: Entropy solution orbits are strongly continuous in $L^1$
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
deps: [thm-entropy-solution-semigroup-on-lone, cor-global-lone-contraction-from-the-local-kruzhkov-estimate, cor-finite-propagation-for-scalar-conservation-laws, def-kruzhkov-entropy-solution, thm-existence-of-bounded-kruzhkov-entropy-solutions, thm-monotone-convergence-for-the-integral, def-metric-ball, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-dependent-choice]
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§§2–3, condition (2.2) and Theorem 1, pp. 220–228"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§6.1, pp. 49–51"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§5.5, pp. 45–48"
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]],
[[def-dependent-choice]]) for the heat-kernel, $L^1$ completeness and
vanishing-viscosity extraction interfaces used below. Let $n\ge1$, let
$f\colon\mathbb R\to\mathbb R^n$ be $C^1$, and let
$u_0\in L^1(\mathbb R^n)\cap L^\infty(\mathbb R^n)$. Then the orbit
$t\mapsto S_tu_0$ is continuous from $[0,\infty)$ to $L^1(\mathbb R^n)$: for
every $t\ge0$, $\|S_tu_0-S_su_0\|_1\to0$ as $s\to t$, and in particular
$$\lim_{t\downarrow0}\|S_tu_0-u_0\|_{L^1(\mathbb R^n)}=0.$$
If additionally $f(0)=0$ and $f$ is globally Lipschitz, its extension is a strongly continuous semigroup of $L^1$ contractions on all of $L^1$
([[thm-entropy-solution-semigroup-on-lone]], [[def-kruzhkov-entropy-solution]],
[[def-l-p-space-as-a-quotient-by-null-functions]]).

## Facts & Assumptions

**Given:** Countable and Dependent Choice, $n\ge1$, a $C^1$ flux, with the extra global Lipschitz and $f(0)=0$ hypotheses only for the extension, a datum $u_0\in L^1\cap L^\infty$ with $M=\|u_0\|_\infty$, and the entropy solution semigroup $S_t$ of [[thm-entropy-solution-semigroup-on-lone]].

[F1] Semigroup and contraction: $S_{t+s}=S_tS_s$, each $S_t$ is order-preserving, and $\|S_tu_0-S_tv_0\|_1\le\|u_0-v_0\|_1$ for all $t\ge0$ and $u_0,v_0\in L^1\cap L^\infty$; when $f(0)=0$ and $f$ is globally Lipschitz the maps extend to order-preserving $L^1$ contractions on all of $L^1$, agreeing with the flow on $L^1\cap L^\infty$ ([[thm-entropy-solution-semigroup-on-lone]]).

[F2] Every any-time contraction, for data in $L^1\cap L^\infty$, holds for every $t$ because the solutions have $L^1_{\mathrm{loc}}$-continuous representatives: $\|S_tu_0-S_tv_0\|_1\le\|u_0-v_0\|_1$ ([[cor-global-lone-contraction-from-the-local-kruzhkov-estimate]], [[thm-existence-of-bounded-kruzhkov-entropy-solutions]]).

[F3] Finite propagation: if $u_0$ vanishes almost everywhere outside $B(0,R)$, the entropy solution vanishes almost everywhere outside $B(0,R+Lt)$ for almost every $t$, where $L$ is a Lipschitz constant of the flux on the common range; with the $L^1_{\mathrm{loc}}$-continuous representative this support statement upgrades to every $t$ ([[cor-finite-propagation-for-scalar-conservation-laws]], [[def-metric-ball]]).

[F4] The strong local $L^1$ trace: for every compact $K$, $\operatorname*{ess\,sup}_{0<t<\delta}\int_K|u(t,x)-u_0(x)|\,dx\to0$ as $\delta\downarrow0$; and monotone convergence controls the tails of an $L^1$ function over increasing balls ([[def-kruzhkov-entropy-solution]], [[thm-monotone-convergence-for-the-integral]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Proof

**Proof technique:** direct.

1.1 **Continuity at time zero.** Fix $R>0$, put $u_0^R=u_0\mathbf 1_{B(0,R)}$ and $v^R(t)=S_tu_0^R$; the datum $u_0^R$ is compactly supported, so by [F3] the solution $v^R$ is supported in $B(0,R+Lt)$ for every $t$, where $L$ is a Lipschitz constant of $f$ on the common range $[-\|u_0\|_\infty,\|u_0\|_\infty]$. By [F2], $\|S_tu_0-v^R(t)\|_1\le\|u_0-u_0^R\|_1=\|u_0\|_{L^1(B(0,R)^c)}$ for every $t$. Hence for $0<t<1/L$ (any $t>0$ when $L=0$) the exterior $B(0,R+1)^c$ is contained in $B(0,R+Lt)^c$ and $$\bigl\|S_tu_0-u_0\bigr\|_1\le\bigl\|S_tu_0-u_0\bigr\|_{L^1(B(0,R+1))}+2\|u_0\|_{L^1(B(0,R)^c)},$$ because on $B(0,R+1)^c$ both $S_tu_0$ and $u_0$ have $L^1$ norms bounded by $\|u_0\|_{L^1(B(0,R)^c)}$ (for $S_tu_0$ combine the contraction bound with $v^R(t)=0$ there). The first term tends to $0$ as $t\downarrow0$ by the local $L^1$ continuity of the chosen representative [F2] and its trace [F4], and the tail term tends to $0$ as $R\to\infty$ by monotone convergence. Therefore $\lim_{t\downarrow0}\|S_tu_0-u_0\|_1=0$. [F2, F3, F4]


2.1 **Continuity at every time.** Let $s,t\ge0$ with $t>s$. By the semigroup law and the contraction estimate of [F1], $\|S_tu_0-S_su_0\|_1=\|S_s(S_{t-s}u_0)-S_su_0\|_1\le\|S_{t-s}u_0-u_0\|_1$, and the right side tends to $0$ as $t\downarrow s$ by step 1.1 applied to the fixed datum $u_0$. The case $s<t$ is symmetric, so the orbit is continuous at every $t\ge0$. [F1, F2, step 1.1]


3.1 **Strong continuity on the closure.** If $f(0)=0$ and $f$ is globally Lipschitz, the extension of [F1] is defined on all of $L^1$, and $L^1\cap L^\infty$ is dense in $L^1$ (the closure appearing in the statement). For $u_0\in L^1$ and $u_0^m=(-m)\vee(u_0\wedge m)\in L^1\cap L^\infty$ with $u_0^m\to u_0$ in $L^1$, the contraction property gives $\|S_tu_0-S_tu_0^m\|_1\le\|u_0-u_0^m\|_1$ for every $t$, so $\|S_tu_0-S_su_0\|_1\le2\|u_0-u_0^m\|_1+\|S_tu_0^m-S_su_0^m\|_1\to0$ by first making the two approximation errors small with a fixed large $m$ and then taking $s\to t$, by step 2.1 applied to each $u_0^m$. Hence the extended semigroup is strongly continuous on all of $L^1$, which is the closure of $L^1\cap L^\infty$. [F1, step 2.1] ∎
