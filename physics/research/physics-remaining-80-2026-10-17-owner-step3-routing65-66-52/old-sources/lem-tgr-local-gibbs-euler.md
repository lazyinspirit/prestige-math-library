---
id: lem-tgr-local-gibbs-euler
kind: lemma
title: "Local Gibbs,Euler,parcel first law and response identities"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
deps:
  - def-tgr-local-fluid-state
  - thm-tdmath-local-implicit-rank
  - thm-chain-rule-for-total-derivatives
  - lem-tdmath-concave-affine-maximizer-and-hessian
dependency_roles:
  def-tgr-local-fluid-state: mathematical-premise
  thm-tdmath-local-implicit-rank: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  lem-tdmath-concave-affine-maximizer-and-hessian: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §4.3 equations (4.10)–(4.14) and §5.3 equations (5.8)–(5.10)"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (2015), §§IX.2–IX.3 and Appendix A"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
---

## Statement

Let $X\subset(0,\infty)\times\mathbb R$ be nonempty and open, let $e\in C^2(X,\mathbb R)$, and define
$$Y:=\{(n,s)\in(0,\infty)\times\mathbb R:(1/n,s/n)\in X\},\qquad \varepsilon(n,s):=n\,e(1/n,s/n).$$
For $(n,s)\in Y$, put $v=1/n$, $\sigma_p=s/n$, $T=e_{\sigma_p}$, $p=-e_v$, $H=e+pv$, $h=\varepsilon+p=nH$, and $\mu=H-T\sigma_p$, as in [[def-tgr-local-fluid-state]]. Then the following identities hold as equalities of differentials on $Y$:
$$d\varepsilon=T\,ds+\mu\,dn,\qquad \varepsilon+p=Ts+\mu n,\qquad dp=s\,dT+n\,d\mu.$$

For parcel totals $\mathsf S\in\mathbb R$ (entropy), $\mathsf V>0$ (proper volume), and $\mathsf N>0$ (marker count) with $(\mathsf V/\mathsf N,\mathsf S/\mathsf N)\in X$, define
$$E(\mathsf S,\mathsf V,\mathsf N):=\mathsf N\,e(\mathsf V/\mathsf N,\mathsf S/\mathsf N).$$
Then $E$ is $C^2$, is positively homogeneous of degree one, and satisfies
$$dE=T\,d\mathsf S-p\,d\mathsf V+\mu\,d\mathsf N,\qquad E=T\mathsf S-p\mathsf V+\mu\mathsf N.$$
If $E$ is viewed on its open domain in $(\mathsf S,\mathsf V,\mathsf N)$, its Hessian annihilates the radial vector $(\mathsf S,\mathsf V,\mathsf N)$.

The local response statements are conditional. At a state with $T>0$ and $e_{\sigma_p\sigma_p}>0$, temperature is a valid local coordinate at fixed $v$, and the per-marker heat capacity
$$c_v:=\left(\frac{\partial e}{\partial T}\right)_v=\frac{T}{e_{\sigma_p\sigma_p}}$$
is positive. At a state with $e_{vv}>0$, the isentropic compressibility
$$\kappa_{\sigma_p}:=-\frac1v\left(\frac{\partial v}{\partial p}\right)_{\sigma_p}=\frac1{v e_{vv}}$$
is positive. At a state with $e_{vv}>0$ and $h>0$, the local pressure-energy response
$$\alpha_{\sigma_p}:=\left(\frac{\partial p}{\partial\varepsilon}\right)_{\sigma_p}=\frac{e_{vv}}{n h}$$
is positive. If $X$ is convex and $e$ is convex on $X$, then $D^2e$ is positive semidefinite. Positivity of the displayed diagonal responses is not asserted to imply convexity, a sound cone, or an evolution theorem.

## Facts & Assumptions

**Given:** $X\subset(0,\infty)\times\mathbb R$ is nonempty and open, $e\in C^2(X,\mathbb R)$, and $(n,s)\in Y$.

[F1] [[def-tgr-local-fluid-state]]: $v=1/n$, $\sigma_p=s/n$, $\varepsilon=ne$, $T=e_{\sigma_p}$, $p=-e_v$, $H=e+pv$, $h=\varepsilon+p=nH$, and $\mu=H-T\sigma_p$.

[F2] [[thm-tdmath-local-implicit-rank]]: a $C^1$ map from an open Euclidean set to $\mathbb R^q$ whose derivative has an invertible $q\times q$ minor has a local $C^1$ graph for its zero set, unique in suitable neighborhoods, with the derivative formula stated there.

[F3] [[thm-chain-rule-for-total-derivatives]]: if $f$ and $g$ are totally differentiable at the relevant points, then $D(g\circ f)=Dg(f(\cdot))\circ Df$.

[F4] [[lem-tdmath-concave-affine-maximizer-and-hessian]]: for a $C^2$ concave function, the Hessian is negative semidefinite at each point of a convex open region.

[A1] At states where the heat-capacity clause is applied, $T>0$ and $e_{\sigma_p\sigma_p}>0$.

[A2] At states where the compressibility clause is applied, $e_{vv}>0$.

[A3] At states where the pressure-energy response is applied, $e_{vv}>0$ and $h>0$.

[A4] For the last clause, $X$ is convex and $e$ is convex on $X$.

## Proof

1.1 The map $(n,s)\mapsto(v,\sigma_p)=(1/n,s/n)$ is smooth on $(0,\infty)\times\mathbb R$, so $Y$ is open as the inverse image of $X$. Direct differentiation gives $dv=-dn/n^2$ and $d\sigma_p=ds/n-s\,dn/n^2$. [given, F1, F3, algebra]

1.2 From $h=\varepsilon+p=n(e+pv)$ and $\mu=H-T\sigma_p$, we obtain $Ts+\mu n=T(n\sigma_p)+(H-T\sigma_p)n=nH=h=\varepsilon+p$. [F1, algebra]

1.3 The map $(\mathsf S,\mathsf V,\mathsf N)\mapsto(\mathsf V/\mathsf N,\mathsf S/\mathsf N)$ is smooth on the open set $\mathbb R\times(0,\infty)^2$, so the parcel domain $\mathcal D=\{(\mathsf S,\mathsf V,\mathsf N):\mathsf V>0,\mathsf N>0,(\mathsf V/\mathsf N,\mathsf S/\mathsf N)\in X\}$ is open. The definition of $E$ is a $C^2$ composition. Differentiating it gives
$$\partial_{\mathsf S}E=e_{\sigma_p}=T,\quad \partial_{\mathsf V}E=e_v=-p,\quad \partial_{\mathsf N}E=e-v e_v-\sigma_p e_{\sigma_p}=e+pv-T\sigma_p=\mu.$$
Thus $dE=T\,d\mathsf S-p\,d\mathsf V+\mu\,d\mathsf N$. [given, F1, F3, algebra]

1.4 For the heat-capacity clause, define $F(v,\sigma_p,T)=e_{\sigma_p}(v,\sigma_p)-T$. This is $C^1$, vanishes at the given state with $T=e_{\sigma_p}$, and its derivative in $\sigma_p$ is $e_{\sigma_p\sigma_p}>0$. By [F2] its zero set is locally a unique $C^1$ graph $\sigma_p=\varphi(v,T)$. Differentiating at fixed $v$ gives $\partial_T\sigma_p=1/e_{\sigma_p\sigma_p}$, whence $c_v=e_{\sigma_p}\partial_T\sigma_p=T/e_{\sigma_p\sigma_p}>0$. [F1, F2, F3, A1, construct, algebra]

1.5 For the compressibility clause, define $G(v,\sigma_p,p)=p(v,\sigma_p)-p=-e_v(v,\sigma_p)-p$. It is $C^1$ and its derivative in $v$ is $-e_{vv}<0$. By [F2], $v$ is a local $C^1$ function of $(\sigma_p,p)$, with $(\partial v/\partial p)_{\sigma_p}=-1/e_{vv}$. Therefore $\kappa_{\sigma_p}=1/(v e_{vv})>0$. [F1, F2, A2, construct, algebra]

1.6 At fixed $\sigma_p$, $\varepsilon(n,\sigma_p)=n e(1/n,\sigma_p)$ and $p(n,\sigma_p)=-e_v(1/n,\sigma_p)$. Differentiating gives $\partial_n\varepsilon=e-e_v/n=e+p/n=h/n$ and $\partial_np=e_{vv}/n^2$. Since $h/n>0$ by [A3], the local implicit-rank theorem makes $\varepsilon$ a valid local coordinate in place of $n$. Taking the ratio of the two derivatives yields $\alpha_{\sigma_p}=e_{vv}/(nh)>0$. [F1, F2, F3, A3, algebra]

2.1 By the chain rule, $de=e_v\,dv+e_{\sigma_p}\,d\sigma_p=-p\,dv+T\,d\sigma_p$. Since $\varepsilon=ne$, the product rule and step 1.1 give
$$d\varepsilon=e\,dn+n\,de=T\,ds+\left(e+\frac{p}{n}-T\sigma_p\right)dn=T\,ds+\mu\,dn.$$
Here $v=1/n$, so $e+p/n-T\sigma_p=H-T\sigma_p=\mu$. [step 1.1, F1, F3, algebra]

2.2 For $\lambda>0$, $E(\lambda\mathsf S,\lambda\mathsf V,\lambda\mathsf N)=\lambda E(\mathsf S,\mathsf V,\mathsf N)$ because the intensive ratios are unchanged. Differentiating this identity in $\lambda$ at $1$ yields $E=T\mathsf S-p\mathsf V+\mu\mathsf N$. At $z_0=(\mathsf S,\mathsf V,\mathsf N)$, differentiate Euler's identity $DE(z_0)[z_0]=E(z_0)$ in an arbitrary direction $w$. The two first-derivative terms cancel, leaving $D^2E(z_0)[w,z_0]=0$ for every $w$; symmetry of the Hessian gives $D^2E(z_0)[z_0,w]=0$. [step 1.3, F3, algebra]

3.1 Differentiating $\varepsilon+p=Ts+\mu n$ and substituting step 2.1 cancels $T\,ds$ and $\mu\,dn$, leaving $dp=s\,dT+n\,d\mu$. [step 2.1, step 1.2, F3, algebra]

4.1 Apply [F4] to $-e$, which is concave when $e$ is convex on the convex open domain $X$. Its Hessian is $-D^2e$ and is negative semidefinite, so $D^2e$ is positive semidefinite. This conditional curvature statement does not promote the response inequalities to convexity without [A4]. [F4, A4, algebra] ∎

