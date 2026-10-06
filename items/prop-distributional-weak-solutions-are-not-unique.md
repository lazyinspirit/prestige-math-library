---
id: prop-distributional-weak-solutions-are-not-unique
kind: proposition
title: Distributional weak solutions of the Cauchy problem are not unique
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-scalar-conservation-law-and-flux, def-distributional-weak-solution-of-a-scalar-conservation-law, def-piecewise-smooth-shock-and-one-sided-traces, def-kruzhkov-entropy-solution]
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§4.3, (4.11)--(4.13) and the jump verifications, pp. 27--30"
    - title: "Victor Ivrii, Partial Differential Equations, University of Toronto, current complete 415-page PDF"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§12.1.2, two weak solutions in Case 1, pp. 352--353"
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§2, weak formulation and entropy inequality, pp. 219--221"
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

Take $n=1$, $f(u)=u^2$ and $u_0\equiv0$. For every $\delta>0$ define, for
$t>0$,
$$u_\delta(t,x)=\begin{cases}0,&x<-\delta t,\\-\delta,&-\delta t<x<0,\\+\delta,&0<x<\delta t,\\0,&x>\delta t.\end{cases}$$
This is a bounded distributional weak solution of $u_t+(u^2)_x=0$ on $\Pi_T$
with strong local $L^1$ initial trace $u_0=0$, and it is not identically zero.
At its three jumps the speeds $s=[u^2]/[u]$ are, respectively, $-\delta$, $0$
and $+\delta$, so each jump coefficient $[u^2]-s[u]$ in the weak equation
vanishes. The middle stationary jump violates the Kruzhkov entropy inequality
for $k=0$: with $\eta_0(u)=|u|$ and $q_0(u)=\operatorname{sgn}(u)u^2$ its entropy
production is $[q_0]-0\cdot[\eta_0]=\delta^2-(-\delta^2)=2\delta^2>0$, whereas
the entropy inequality requires this coefficient to be nonpositive
([[def-kruzhkov-entropy-solution]]). Hence $u_\delta$ is a weak solution but
not an entropy solution, and the zero solution is a distinct weak solution with
the same initial data: distributional weak solutions are not unique
([[def-distributional-weak-solution-of-a-scalar-conservation-law]],
[[def-piecewise-smooth-shock-and-one-sided-traces]]).

## Facts & Assumptions

**Given:** $n=1$, $f(u)=u^2$, $u_0\equiv0$, $T>0$, $\delta>0$, and the piecewise constant function $u_\delta$ above, whose jump rays are $\Gamma_-=\{x=-\delta t\}$, $\Gamma_0=\{x=0\}$ and $\Gamma_+=\{x=\delta t\}$ in $\Pi_T$.

[F1] On each of the four regions the function is constant and $f$ is smooth, so $u_\delta$ solves the equation classically there; across a jump ray $x=s(t)$ of a piecewise $C^1$ weak solution of $u_t+(u^2)_x=0$, the distributional identity holds iff the jump coefficient $[u^2]-s\,[u]$ vanishes, where $[\cdot]$ denotes the right minus left trace across the ray ([[def-piecewise-smooth-shock-and-one-sided-traces]], [[def-distributional-weak-solution-of-a-scalar-conservation-law]], [[def-scalar-conservation-law-and-flux]]).

[F2] The Kruzhkov entropy pair for $k=0$ is $\eta_0(u)=|u|$, $q_0(u)=\operatorname{sgn}(u)u^2$ with $\operatorname{sgn}(0)=0$; an entropy solution must satisfy $\partial_t\eta_0(u)+\partial_xq_0(u)\le0$ in $\mathcal D'(\Pi_T)$, so across a jump ray the entropy production coefficient $[q_0]-s[\eta_0]$ must be nonpositive ([[def-kruzhkov-entropy-solution]]).

[F3] Basic computation with the explicit states and speeds: for the ray $x=-\delta t$ the left state is $0$, the right state is $-\delta$, and the rightward speed is $s=-\delta$; for $x=0$ the states are $-\delta$ (left) and $+\delta$ (right) with $s=0$; for $x=\delta t$ the states are $+\delta$ (left) and $0$ (right) with $s=\delta$; directly $[u^2]-s[u]=0$ in all three cases.

## Proof

**Proof technique:** direct.

1.1 **Weak equation.** The profile is constant on its four regions. At $x=-\delta t$ the right-minus-left jumps are $[u]=-\delta$, $[u^2]=\delta^2$, and $s=-\delta$, so $[u^2]-s[u]=\delta^2-(-\delta)(-\delta)=0$. At $x=0$, $[u]=2\delta$, $[u^2]=0$, and $s=0$. At $x=\delta t$, $[u]=-\delta$, $[u^2]=-\delta^2$, and $s=\delta$, again giving zero. To verify the distributional equation, integrate $u\varphi_t+u^2\varphi_x$ in each region using the moving-endpoint FTC formula: each interface contributes $(s[u]-[u^2])\int\varphi(t,st)\,dt$, which vanishes. [F1, F3]


1.2 **Initial trace.** For every compact $K\subseteq\mathbb R$ and $0<t<\delta_0$, the set where $u_\delta(t,\cdot)$ differs from $0$ is contained in $[-\delta t,\delta t]$, so $\int_K|u_\delta(t,x)|\,dx\le2\delta^2t\to0$ as $t\downarrow0$; hence $u_\delta$ has the strong local $L^1$ initial trace $0$. The function is bounded, hence a distributional weak solution of the Cauchy problem with datum $u_0\equiv0$ in the sense of [F1]. [F1, given]


2.1 **Failure of the entropy condition.** At the middle ray $x=0$ the left and right states are $-\delta$ and $+\delta$. The entropy production coefficient is $[q_0]-s[\eta_0]$ with $[\eta_0]=|+\delta|-|-\delta|=0$, $s=0$, and $[q_0]=q_0(+\delta)-q_0(-\delta)=\delta^2-(-\delta^2)=2\delta^2>0$. By [F2] the required entropy inequality fails: the distribution $\partial_t\eta_0(u_\delta)+\partial_xq_0(u_\delta)$ carries the positive coefficient $2\delta^2$ on the ray $x=0$. [F2, step 1.2]


3.1 **Non-uniqueness.** By steps 1.1 and 1.2, both $u_\delta$ and the zero function are bounded distributional weak solutions of the same Cauchy problem with initial datum $u_0\equiv0$; they differ on a set of positive measure for every $\delta>0$. By step 2.1, $u_\delta$ is not a Kruzhkov entropy solution, so the non-uniqueness occurs strictly within the class of distributional weak solutions. [step 1.1, step 1.2, step 2.1] ∎
