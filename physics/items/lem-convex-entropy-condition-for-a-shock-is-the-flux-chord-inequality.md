---
id: lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality
kind: lemma
title: The convex entropy condition for a single shock is the chord condition
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-piecewise-smooth-shock-and-one-sided-traces, thm-rankine-hugoniot-jump-condition, def-convex-entropy-entropy-flux-pair, def-kruzhkov-entropy-solution, def-convex-and-strictly-convex-functions-on-euclidean-sets, cor-primitives-of-a-continuous-function, thm-ftc-second-part, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, def-abs-value, lem-schwartz-cutoffs-from-the-standard-smooth-step]
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§§5.1--5.2, (5.19')--(5.22) and Remark 5.6, pp. 31--40"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§2.3, (2.25)--(2.26) and the geometric interpretation, pp. 17--19"
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§2, (2.3) and the discussion after Definition 1, p. 221"
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

Let $n=1$, $f\in C^1(\mathbb R)$, and let $u$ be a piecewise $C^1$ weak solution
with a single jump from the left state $u^-$ to the right state $u^+$ across a
$C^1$ curve $x=s(t)$ whose speed satisfies the Rankine--Hugoniot condition
$s'=(f(u^+)-f(u^-))/(u^+-u^-)$. Put
$$F(z)=f(z)-f(u^-)-s'(z-u^-),$$
so that $F(u^-)=F(u^+)=0$. Then the entropy inequality
$\eta(u)_t+q(u)_x\le0$ of [[def-convex-entropy-entropy-flux-pair]] holds for
every convex entropy pair $(\eta,q)$ if and only if
$$F(z)\,(u^+-u^-)\ \ge\ 0\qquad\text{for every }z\text{ between }u^-\text{ and }u^+;$$
equivalently, in the case $u^-<u^+$ the graph of $f$ on $[u^-,u^+]$ lies above
the chord joining $(u^-,f(u^-))$ and $(u^+,f(u^+))$, while in the case
$u^->u^+$ it lies below that chord, both in the non-strict sense
([[def-piecewise-smooth-shock-and-one-sided-traces]],
[[def-convex-and-strictly-convex-functions-on-euclidean-sets]]).

## Facts & Assumptions

**Given:** $n=1$, $f\in C^1$, a single-jump piecewise $C^1$ weak solution with states $u^-\ne u^+$ and speed $s'$ satisfying Rankine--Hugoniot, and an arbitrary convex entropy pair $(\eta,q)$ with $\eta\in C^2$ and $q'=\eta'f'$.

[F1] The jump configuration and Rankine--Hugoniot condition are as in [[def-piecewise-smooth-shock-and-one-sided-traces]] and [[thm-rankine-hugoniot-jump-condition]]: in one dimension the interface is a graph $x=s(t)$ with minus side $x<s(t)$, plus side $x>s(t)$, unit normal $\nu=(-s',1)/\sqrt{1+s'^2}$, and $s'(u^+-u^-)=f(u^+)-f(u^-)$.

[F2] The graph integration of [[thm-rankine-hugoniot-jump-condition]], applied to $(\eta(u),q(u))$, gives the interface production $([q]-s'[\eta])\delta(x-s(t))$, where the latter distribution pairs by $\int\varphi(t,s(t))dt$. For smooth pairs the production vanishes in the classical side regions by the chain rule. Smooth nonnegative bumps can be placed on any interface patch ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]). Thus the entropy inequality is equivalent to nonpositive jump production at every point ([[def-convex-entropy-entropy-flux-pair]], [[def-kruzhkov-entropy-solution]]).

[F3] Primitives: since $\eta'$ and $f'$ are continuous, $q(z)=\int_0^z\eta'(r)f'(r)dr$ up to a constant, and increments of $C^1$ functions are integrals of their derivatives; the fundamental theorem of calculus, its use under limits, and the primitive construction are as in [[cor-primitives-of-a-continuous-function]] and [[thm-ftc-second-part]].

[F4] Approximation tools: monotone bounded convergence for limits of test functions and dominated convergence for the passing of inequalities ([[thm-monotone-convergence-for-the-integral]], [[thm-dominated-convergence]], [[def-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 **Jump entropy production.** By [F2] the entropy inequality for $(\eta,q)$ is equivalent to $[q]-s'[\eta]\le0$. Using [F3] in the orientation of the jump, $[q]=\int_{u^-}^{u^+}q'(z)\,dz=\int_{u^-}^{u^+}\eta'(z)f'(z)\,dz$ and $[\eta]=\int_{u^-}^{u^+}\eta'(z)\,dz$, so the condition is $\int_{u^-}^{u^+}\eta'(z)\bigl(f'(z)-s'\bigr)\,dz\le0$. [F2, F3]


2.1 **Smooth-pair sufficiency.** At a fixed interface point put $a=u^-$, $b=u^+$ and $s'=[f]/[u]$. Integration by parts, with $F(a)=F(b)=0$, gives $$[q]-s'[\eta]=\int_a^b\eta'(z)F'(z)\,dz=-\int_a^b\eta''(z)F(z)\,dz.$$ If $a<b$ and $F\ge0$, this is nonpositive since $\eta''\ge0$. If $a>b$ and $F\le0$, reversal of the integral gives the same conclusion. [F1, F3, step 1.1]


3.1 **Necessity.** If $a<b$ and $F(z_0)<0$ for some interior $z_0$, continuity supplies an interval on which $F<0$. Choose a smooth nonnegative bump $\beta$ supported there and not identically zero, and define $\eta'(z)=\int_0^z\beta(r)dr$, $\eta(z)=\int_0^z\eta'(r)dr$. Then $\eta''=\beta\ge0$, so this is a smooth convex entropy; step 2.1 gives strictly positive production, a contradiction. If $a>b$ and $F(z_0)>0$, the same bump and reversed integral again give positive production. Thus all smooth convex inequalities force $F(z)(b-a)\ge0$. For a Kruzhkov pair with $k$ between the states, a direct subtraction gives $[q_k]-s'[\eta_k]=-2\operatorname{sgn}(b-a)F(k)$; outside the interval it is zero. This also proves exact equivalence with the Kruzhkov jump criterion. [F1, F2, F3, step 2.1]


4.1 **Nonsmooth pairs and chord interpretation.** A finite convex entropy is uniformly approximated on compact intervals by its convolution with a nonnegative smooth unit-mass bump at scale $\delta$. These convolutions are smooth and convex (average the convexity inequality), and their derivatives converge at each differentiability point of $\eta$, while remaining bounded by a common local Lipschitz constant. The integral fluxes therefore converge uniformly by dominated convergence, so the smooth entropy inequalities of step 2.1 pass to every locally Lipschitz convex pair, both in the side regions and at the jump. Together with step 3.1 this proves the equivalence. Finally $F(z)\ge0$ means $f(z)$ lies above $f(a)+s'(z-a)$ for $a<b$; $F(z)\le0$ means it lies below for $a>b$. This line is the chord through the two states. [F3, F4, step 2.1, step 3.1] ∎
