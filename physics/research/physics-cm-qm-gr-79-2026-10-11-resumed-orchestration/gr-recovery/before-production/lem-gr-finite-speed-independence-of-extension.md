---
id: lem-gr-finite-speed-independence-of-extension
kind: lemma
title: "Finite speed of propagation for linear symmetric hyperbolic systems: cone domination and independence of the extension"
status: draft
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps: [thm-divergence-theorem-for-bounded-piecewise-c-one-domains, thm-gronwall-integral-inequality, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, def-ck-and-multi-index-notation-in-several-variables, def-metric-space]
dependency_roles:
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-metric-space: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.2 (Symmetric Hyperbolic Systems on Manifolds): the invariant principal-symbol definition of a symmetric hyperbolic system on a manifold, with Section 3.1's torus theory supplying the local model"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Let $T>0$, let $A^\mu:(-T,T)\times\mathbb R^3\to\operatorname{Sym}_m(\mathbb R)$
($\mu=0,1,2,3$) be smooth with $A^0(t,x)\ge aI$ for some constant $a>0$ and all
$(t,x)$, and let $\|A^i(t,x)\|\le b$ for the operator norm and all $i,t,x$. Let
$C:(-T,T)\times\mathbb R^3\to M_m(\mathbb R)$ be smooth and bounded by $K$.

**(a)** Put $\lambda:=b/a+1$; then $\lambda A^0(t,x)+\xi_iA^i(t,x)\ge0$ as a
quadratic form for every $(t,x)$ and every $\xi\in\mathbb R^3$ with
$|\xi|\le1$.

**(b)** Let $w\in C^1((-T,T)\times\mathbb R^3;\mathbb R^m)$ solve
$$A^0\partial_tw+A^i\partial_iw+Cw=0 ,$$
and let $x_0\in\mathbb R^3$, $0<t_0<T$, and suppose $w(0,x)=0$ for every
$|x-x_0|\le\lambda t_0$. Then $w(t,x)=0$ for every
$(t,x)\in\{(t,x):0\le t\le t_0,\ |x-x_0|\le\lambda(t_0-t)\}$.

**(c)** [independence of the extension] If $w_1,w_2$ are two solutions of two
such systems whose coefficient matrices agree on an open set containing the
truncated cone $D=\{(t,x):0\le t\le t_0,|x-x_0|\le\lambda(t_0-t)\}$, and if
$w_1(0,x)=w_2(0,x)$ for $|x-x_0|\le\lambda t_0$, then $w_1=w_2$ on $D$.

## Facts & Assumptions
**Given:** The time $T$, the coefficients $A^\mu$ and $C$ with the stated bounds, the point $x_0$, the time $t_0$, and the solution $w$ (and in (c) the two systems and solutions).

[L1] Positivity of $\lambda A^0+\xi_iA^i$ for $\lambda\ge b/a+1$: for $z\ne0$, $z^{\mathsf T}(\lambda A^0+\xi_iA^i)z\ge\lambda a|z|^2-|z^{\mathsf T}\xi_iA^iz|\ge(\lambda a-b)|z|^2>0$ since $|\xi|\le1$ and $\|A^i\|\le b$.

[L2] Divergence theorem on a bounded piecewise $C^1$ Euclidean domain: for a $C^1$ vector field $V$ on a neighborhood of the closure, $\int_D\operatorname{div}V\,d(t,x)=\int_{\partial D}V\cdot\nu\,dS$ with outward unit normal $\nu$ ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]).

[L3] The fundamental theorem of calculus for absolutely continuous functions and Gronwall's inequality in the form $E(\tau)\le\int_0^\tau cE(s)\,ds+\text{const}\Rightarrow E$ bounded by the constant times $e^{c\tau}$ ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[thm-gronwall-integral-inequality]]).



## Proof

**Proof technique:** direct.

1.1 (The cone condition (a).) By [L1], $\lambda:=b/a+1$ gives $z^{\mathsf T}(\lambda A^0+\xi_iA^i)z\ge((b/a+1)a-b)|z|^2=|z|^2>0$ for $z\ne0$ and $|\xi|\le1$; so the quadratic form is positive definite, in particular nonnegative. This is (a). [L1, algebra]

1.2 (The cone inequality.) Suppose $w$ solves the system and put $j^\mu:=w^{\mathsf T}A^\mu w$, a $C^1$ vector field. Then $\operatorname{div}_{(t,x)}j=\partial_t(w^{\mathsf T}A^0w)+\partial_i(w^{\mathsf T}A^iw)=2w^{\mathsf T}(A^0\partial_tw+A^i\partial_iw)+w^{\mathsf T}(\partial_tA^0+\partial_iA^i)w=-2w^{\mathsf T}Cw+w^{\mathsf T}(\partial_tA^0+\partial_iA^i)w\le K'w^{\mathsf T}w\le(K'/a)j^0$, where $K':=2K+\sup|\partial_tA^0+\partial_iA^i|$. [given, algebra]

2.1 (Flux through the truncated cone.) For $0<\tau<t_0$ let $D_\tau:=\{(s,x):0\le s\le\tau,\ |x-x_0|\le\lambda(t_0-s)\}$, so that $\partial D_\tau$ consists of the base $B_0:=\{(0,x):|x-x_0|\le\lambda t_0\}$, the lateral surface $L_\tau:=\{ |x-x_0|=\lambda(t_0-s),\ 0\le s\le\tau\}$, and the top $B_\tau:=\{\tau\}\times\{|x-x_0|\le\lambda(t_0-\tau)\}$. On the base the outward normal is $-\partial_t$, so the flux is $-\int_{B_0}j^0$; on the top it is $+\int_{B_\tau}j^0$; on the lateral surface the outward unit normal is $\nu=(\lambda,\xi)/\sqrt{1+\lambda^2}$ with $\xi=(x-x_0)/|x-x_0|$ and $|\xi|=1$, so the flux is $(1+\lambda^2)^{-1/2}\int_{L_\tau}w^{\mathsf T}(\lambda A^0+\xi_iA^i)w\,dS\ge0$ by (a). Integrating the inequality of step 1.2 over $D_\tau$ and using the divergence theorem [L2] gives $E(\tau):=\int_{B_\tau}j^0\le\int_{B_0}j^0+(K'/a)\int_0^\tau E(s)\,ds-\int_{L_\tau}(\cdots)\le\int_{B_0}j^0+(K'/a)\int_0^\tau E(s)\,ds$, since the lateral flux is nonnegative. [step 1.2, L1, L2, algebra]

3.1 (Conclusion (b).) If the data vanish on $B_0$, then $E(\tau)\le(K'/a)\int_0^\tau E(s)\,ds$; since $E\ge0$ is continuous (even absolutely continuous) in $\tau$, Gronwall [L3] gives $E=0$ on $[0,t_0)$, hence $w=0$ on $\bigcup_{\tau<t_0}\overline{D_\tau}=D$ by continuity. This is (b). [step 2.1, L3, algebra]

4.1 (Independence (c).) If two systems agree on a neighborhood of $D$ and their solutions agree on $B_0$, then $w:=w_1-w_2$ solves a linear system of the same form with the common leading coefficients $A^\mu$ and with $C$ the coefficient of the difference (a bounded smooth matrix built from the two zeroth-order coefficients, using that the equations coincide on the neighborhood), and $w=0$ on $B_0$; step 3.1 applies and gives $w=0$ on $D$. This is (c). [step 3.1, L3, algebra] ∎



## Remarks

- **Role.** Clause (c) is the local-patching tool of E2: two extensions of the same constrained data produce the same solution on the domain of dependence, and only the local coefficient values matter there.
