---
id: prop-characteristics-for-a-one-dimensional-scalar-conservation-law
kind: proposition
title: Characteristics and the Riccati equation for the spatial derivative
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-scalar-conservation-law-and-flux, def-linear-transport-equation-and-its-characteristic-flow, lem-transport-equation-along-a-characteristic, thm-chain-rule, thm-algebra-of-derivatives, def-total-derivative-in-euclidean-space, def-ck-and-multi-index-notation-in-several-variables, thm-clairaut-schwarz-mixed-partials, thm-picard-lindelof-local-existence-and-uniqueness, thm-existence-and-uniqueness-of-a-maximal-ode-solution]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), Kruzhkov's lectures on first-order quasilinear PDEs, in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "Sections 3.1--3.4, pp. 10--18"
    - title: "S. N. Kruzhkov, First order quasilinear equations in several independent variables, Mat. USSR-Sbornik 10 (1970), 217--243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "Section 1, pp. 217--219; Section 5, pp. 239--241"
    - title: "Victor Ivrii, Partial Differential Equations, University of Toronto, current complete 415-page PDF"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "Section 12.1.1, pp. 350--352"
verification:
  precheck: pass
---

## Statement

Let $T>0$, $f\in C^2(\mathbb R)$, and let $u\in C^1(\mathbb R\times(0,T))$ be a
classical solution of $u_t+f(u)_x=0$
([[def-scalar-conservation-law-and-flux]],
[[def-ck-and-multi-index-notation-in-several-variables]]).

(i) Along every characteristic $x(t)$ solving
$\dot x=f'(u(t,x(t)))$, the value $u(t,x(t))$ is constant.

(ii) If in addition $u\in C^2(\mathbb R\times(0,T))$, then
$p=u_x$ satisfies along each characteristic
$$\dot p(t)=-f''(u(t,x(t)))p(t)^2.$$
Consequently, if $f''\ge0$ on the range of $u$, then $p$ is nonincreasing along
characteristics. More precisely, fix $t_0\in(0,T)$ and a characteristic through
$(t_0,x_0)$, and set $p_0=u_x(t_0,x_0)$. If $p_0<0$ and
$f''(u(t_0,x_0))\ge\kappa>0$, then, as long as the classical solution exists
along that characteristic,
$$p(t)=\frac{p_0}{1+f''(u(t_0,x_0))p_0(t-t_0)}.$$
If the solution exists along this characteristic up to that time, its derivative tends to $-\infty$ at
$t_*=t_0+1/(f''(u(t_0,x_0))|p_0|)\le t_0+1/(\kappa|p_0|)$; hence a $C^2$
solution cannot persist through $t_*$ along this characteristic
([[def-total-derivative-in-euclidean-space]], [[thm-chain-rule]],
[[thm-algebra-of-derivatives]],
[[def-linear-transport-equation-and-its-characteristic-flow]]).

## Facts & Assumptions

**Given:** $T>0$, $f\in C^2(\mathbb R)$, a classical solution $u\in C^1(\mathbb R\times(0,T))$ of $u_t+f(u)_x=0$, together with a characteristic $t\mapsto x(t)$ solving $\dot x=f'(u(t,x(t)))$; in part (ii) additionally $u\in C^2(\mathbb R\times(0,T))$ and $p=u_x$.

[F1] A classical solution satisfies $u_t+(f(u))_x=0$ pointwise; since $f\in C^2\subset C^1$ and $u\in C^1$, the composition $f(u)$ is $C^1$ with $(f(u))_x=f'(u)u_x$ ([[def-scalar-conservation-law-and-flux]], [[thm-chain-rule]]).

[F2] For the transport field $a(t,x):=f'(u(t,x))$, which is $C^1$ because $f'$ is $C^1$ and $u$ is $C^1$, the solution $u$ satisfies $u_t+a\cdot u_x=0$, and the curve $x(\cdot)$ is a characteristic of that transport equation, so $\frac{d}{dt}u(t,x(t))=u_t(t,x(t))+u_x(t,x(t))\dot x(t)$ ([[def-linear-transport-equation-and-its-characteristic-flow]], [[lem-transport-equation-along-a-characteristic]]).

[F3] Sums, scalar multiples and products of differentiable functions are differentiable, with the usual sum and product rules; for $u\in C^2$ and $p=u_x$, the functions $p$ and $f'(u)p$ are $C^1$, while $p_t$, $p_x$, and $f''(u)$ are continuous, so $p_t+f'(u)p_x+f''(u)p^2$ is continuous ([[thm-algebra-of-derivatives]], [[def-ck-and-multi-index-notation-in-several-variables]], [[def-total-derivative-in-euclidean-space]]). Equality $u_{tx}=u_{xt}$ is supplied by [[thm-clairaut-schwarz-mixed-partials]].

[F4] A continuous field locally Lipschitz in its state has a unique local and maximal ODE solution ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]). The field $f'(u(t,x))$ is locally state-Lipschitz because its $x$ derivative $f''(u)u_x$ is continuous and bounded on compact boxes.

## Proof

**Proof technique:** direct.

1.1 **Part (i).** With $a(t,x)=f'(u(t,x))$, [F2] gives $\frac{d}{dt}u(t,x(t))=u_t+u_x\dot x$ along the characteristic. Substituting the characteristic ODE $\dot x=f'(u(t,x(t)))$ and then the pointwise equation of [F1] gives $\frac{d}{dt}u(t,x(t))=u_t+f'(u)u_x=u_t+(f(u))_x=0$. Hence $t\mapsto u(t,x(t))$ is constant along every characteristic. [F1, F2]


1.2 **Part (ii): differentiation in $x$.** Assume now $u\in C^2$, so that $p=u_x$ is $C^1$ and $f'(u)p$ is $C^1$ by [F1] and [F3]. Differentiating the pointwise equation $u_t+(f(u))_x=0$ in $x$ gives $p_t+(f'(u)p)_x=0$, and the product and chain rules give $(f'(u)p)_x=f''(u)u_xp+f'(u)p_x=f''(u)p^2+f'(u)p_x$, so that $p_t+f'(u)p_x+f''(u)p^2=0$. [F1, F3]


2.1 **The Riccati equation along characteristics.** Along the characteristic of step 1.1, [F2] applied to the $C^1$ function $p$ gives $\dot p=p_t+p_x\dot x=p_t+f'(u)p_x$. By step 1.2 this equals $-f''(u(t,x(t)))p^2$, which is the asserted Riccati equation. [F2, step 1.2]


3.1 **Monotonicity.** By step 1.1, $u(t,x(t))\equiv u_*$ is constant along the characteristic, so along that curve $f''(u(t,x(t)))=f''(u_*)$ is a constant $c$ and step 2.1 reads $\dot p=-cp^2$. If $f''\ge0$ on the range of $u$, then $c\ge0$, so $\dot p\le0$ and $p$ is nonincreasing along the characteristic. [step 1.1, step 2.1]


4.1 **Exact Riccati solution.** Suppose $p_0=p(t_0)<0$ and $c:=f''(u(t_0,x_0))\ge\kappa>0$; by step 3.1 the constant is $c=f''(u_*)$ along the whole characteristic. On any interval where $p<0$ one has $\frac{d}{dt}\bigl(\tfrac1p\bigr)=-\dot p/p^2=c$ by step 3.1, hence $\tfrac1{p(t)}=\tfrac1{p_0}+c(t-t_0)$ and therefore $p(t)=\frac{p_0}{1+cp_0(t-t_0)}=\frac{p_0}{1-c|p_0|(t-t_0)}$. [step 3.1, algebra]


5.1 **Blow-up and the persistence bound.** Since $u(t,x(t))\equiv u_*$ by step 1.1, the speed $\dot x=f'(u_*)$ is constant, so the characteristic is the straight line $x(t)=x_0+f'(u_*)(t-t_0)$, on its maximal interval. If that interval ended at an interior time $t_1\in(0,T)$, the straight line would have a finite endpoint $x_1$; continuity would give $u(t_1,x_1)=u_*$, and [F4] would extend the characteristic through $(t_1,x_1)$, contradicting maximality. Thus its interval is $(0,T)$. The denominator in step 4.1 is positive exactly for $t<t_*=t_0+1/(c|p_0|)\le t_0+1/(\kappa|p_0|)$ and tends to $0$ as $t\uparrow t_*$, while $p_0<0$, so $p(t)\to-\infty$. Were a $C^2$ solution defined on $\mathbb R\times(0,T)$ with $T>t_*$, then $p=u_x$ would be continuous, hence finite, on the compact rectangle $[t_0,\tfrac12(t_*+T)]\times[-A,A]$, with $A>1+|x_0|+|f'(u_*)|(T-t_0)$, and along the straight characteristic it would equal the explicit solution of step 4.1, which is unbounded on that interval near $t_*$: a contradiction. Hence the $C^2$ solution cannot persist through $t_*$ along this characteristic. [step 1.1, step 4.1, F3, F4] ∎
