---
id: thm-gr-weak-field-scaled-trajectory-limit
kind: theorem
title: "Scaled trajectory limit: weak-field geodesics converge to the Newtonian system, with rate O(epsilon) for identical initial data"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-stationary-weak-field-data, lem-gr-weak-field-christoffel-bounds, lem-gr-weak-field-geodesic-acceleration, thm-gronwall-integral-inequality, thm-mean-value-inequality, thm-total-derivative-computes-directional-and-partial-derivatives, def-c-r-and-smooth-maps-between-smooth-manifolds, def-interval, thm-algebra-of-derivatives, def-compact-space, def-jacobian-matrix-and-gradient, def-total-derivative-in-euclidean-space, def-euclidean-inner-product]
dependency_roles:
  def-gr-stationary-weak-field-data: mathematical-premise
  lem-gr-weak-field-christoffel-bounds: mathematical-premise
  lem-gr-weak-field-geodesic-acceleration: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  thm-mean-value-inequality: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-interval: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-compact-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the Newtonian limit with the slow-motion and weak-field conditions, printed pp. 105-112 (PDF pp. 112-119)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.1: the Newtonian limit and the derivation of the Poisson equation and the acceleration law from the weak-field ansatz, printed pp. 205-210 (PDF pp. 212-217)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 7.2, equations (7.21)-(7.28), printed pp. 74-75 (PDF pp. 75-76): weak-field/slow-motion geodesic approximation; the uniform scaled Gronwall bound is proved locally"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(\Omega,K,L,C,\varepsilon_0,\varphi,r)$ be stationary weak-field data
with spatial base $U=\pi(\Omega)$, compact $K\subseteq U$, spatial potential
$\Phi=\varepsilon c^2\varphi$ and $c>0$
([[def-gr-stationary-weak-field-data]]), let $\varepsilon_*$ and $C_2$ be
the threshold and constant of
[[lem-gr-weak-field-christoffel-bounds]], let $S_*>0$ and
$0<\varepsilon\le\varepsilon_*$, and put
$T_\varepsilon:=LS_*/(\sqrt\varepsilon c)$,
$U_L:=\{X\in\mathbb R^3:LX\in U\}$, and
$\psi(X):=\varphi(LX)$ for $X\in U_L$.

Equip each $\mathbb R^3$ here with the Euclidean inner product
$\langle X,Y\rangle=\sum_{i=1}^3X^iY^i$ and norm
$\|X\|_2=\sqrt{\langle X,X\rangle}$
([[def-euclidean-inner-product]]). In the standard coordinates,
$\nabla\psi=(\partial_{X^1}\psi,\partial_{X^2}\psi,\partial_{X^3}\psi)$
([[def-jacobian-matrix-and-gradient]]); write
$D^2\psi:=D(\nabla\psi)$ for its derivative and
$\|D^2\psi(X)\|_{\mathrm{op}}:=\sup_{\|v\|_2=1}\|D^2\psi(X)v\|_2$.

Suppose:

- **(H1)** there is an affinely parametrized geodesic of $g(\varepsilon)$ admitting
  a $C^2$ reparametrization $\gamma_\varepsilon$ by $t=x^0/c$ on
  $[0,T_\varepsilon]$, with $dt/ds\ne0$ in its affine parameter $s$,
  whose length-coordinate components are
  $\gamma_\varepsilon(t)=(ct,x_\varepsilon(t))\in\Omega$, with spatial
  trajectory $x_\varepsilon(t)\in K$ and
  $|\dot x_\varepsilon(t)|\le C\sqrt\varepsilon c$ for every such $t$;
- **(H2)** setting $t(S):=LS/(\sqrt\varepsilon c)$,
  $X_\varepsilon(S):=x_\varepsilon(t(S))/L$ and
  $W_\varepsilon(S):=\dot x_\varepsilon(t(S))/(\sqrt\varepsilon c)$ for
  $S\in[0,S_*]$, and letting $K'\subseteq U_L$ be a compact convex set
  containing every $X_\varepsilon(S)$, there is a $C^1$ map
  $(X_*,W_*):[0,S_*]\to\mathbb R^3\times\mathbb R^3$ with
  $X_*([0,S_*])\subseteq K'$ and

$$X_*'(S)=W_*(S),\qquad W_*'(S)=-\nabla\psi\bigl(X_*(S)\bigr)\qquad(0\le S\le S_*);$$

- **(H3)** $\|D^2\psi(X)\|_{\mathrm{op}}\le K_2$ for every $X\in K'$, where $K_2\ge0$.

Then for every $S\in[0,S_*]$, with
$D(S):=\|X_\varepsilon(S)-X_*(S)\|_2+\|W_\varepsilon(S)-W_*(S)\|_2$,

$$D(S)\le\bigl(D(0)+C_3\varepsilon S_*\bigr)\,e^{(1+K_2)S_*},$$

where $C_3$ depends only on $C$, $L$ and the dimension. Consequently the
following hold.

**(i) Convergence.** If $D(0)\to0$ as $\varepsilon\downarrow0$ along the
family, then $\sup_{0\le S\le S_*}D(S)\to0$.

**(ii) Rate for identical data.** If $D(0)=0$, then
$\sup_{0\le S\le S_*}D(S)\le C_3\varepsilon S_*e^{(1+K_2)S_*}=O(\varepsilon)$.

**(iii) Long coordinate times.** The coordinate-time horizon is
$T_\varepsilon=LS_*/(\sqrt\varepsilon c)$, so the fixed scaled interval
$[0,S_*]$ corresponds to coordinate times growing like
$\varepsilon^{-1/2}$; the limit statement is therefore not a large-$t$
statement at fixed $\varepsilon$.

## Facts & Assumptions

**Given:** Stationary weak-field data, a geodesic trajectory $x_\varepsilon$ satisfying (H1), the scaled variables of (H2), a $C^1$ solution $(X_*,W_*)$ of the Newtonian system and the constant $K_2$ of (H3).

[L1] At each spacetime point of $\gamma_\varepsilon$ whose spatial coordinate lies in $K$ and for $0<\varepsilon\le\varepsilon_*$, the coordinate-time acceleration satisfies $\bigl|\ddot x^i_\varepsilon+\partial_i\Phi(x_\varepsilon)\bigr|\le C_{\mathrm{acc}}c^2\varepsilon^2/L$ for $i=1,2,3$, where $C_{\mathrm{acc}}$ is the constant named $C_3$ in that supplier ([[lem-gr-weak-field-geodesic-acceleration]] clause (b)).

[L2] If $g:[a,b]\to\mathbb R^3$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $\|g'(t)\|_2\le M$ on $(a,b)$, then $\|g(b)-g(a)\|_2\le M(b-a)$ ([[thm-mean-value-inequality]]).

[L3] Gronwall's inequality: if $u,a,b$ are continuous on $[0,S_*]$ with $u,b\ge0$ and $u(S)\le a(S)+\int_0^Sb(s')u(s')\,ds'$, and if $a$ is nondecreasing, then $u(S)\le a(S)\exp\bigl(\int_0^Sb\bigr)$ for all $S$ ([[thm-gronwall-integral-inequality]]).

[L4] The scaled potential $\psi$ is $C^2$ on $U_L$, so $\nabla\psi$ is $C^1$ and $D^2\psi=D(\nabla\psi)$; for a totally differentiable map its coordinate partial derivatives are the entries of the total derivative, and the displayed operator norm is induced by $\|\cdot\|_2$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-jacobian-matrix-and-gradient]], [[def-total-derivative-in-euclidean-space]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[def-euclidean-inner-product]]). Also $X_\varepsilon,W_\varepsilon$ are $C^1$ by geodesic regularity and affine rescaling; since $\psi$ is $C^2$, $\|D^2\psi\|_{\mathrm{op}}$ is continuous ([[thm-algebra-of-derivatives]], [[def-interval]]).

## Proof

**Proof technique:** direct; write the geodesic equation in scaled variables, compare with the Newtonian system, then apply Gronwall's inequality to the summed discrepancy.

1.1 (Scaled equation for the geodesic.) Differentiating $X_\varepsilon(S)=x_\varepsilon(t(S))/L$ and $W_\varepsilon(S)=\dot x_\varepsilon(t(S))/(\sqrt\varepsilon c)$ with $dt/dS=L/(\sqrt\varepsilon c)$ gives $X_\varepsilon'=W_\varepsilon$ and $W_\varepsilon'=\ddot x_\varepsilon L/(\varepsilon c^2)$. By [L1] and $\nabla_x\Phi=\varepsilon c^2\nabla_x\varphi=\varepsilon c^2L^{-1}\nabla_X\psi$, $$W_\varepsilon'=-\nabla_X\psi(X_\varepsilon)+R_\varepsilon,\qquad |R_\varepsilon|\le C_3\varepsilon,$$ with $C_3$ depending only on $C$ and $L$: each component error is at most $C_{\mathrm{acc}}\varepsilon$ by [L1], so its Euclidean norm is at most $\sqrt3C_{\mathrm{acc}}\varepsilon$. Choose $C_3\ge\sqrt3C_{\mathrm{acc}}$. [L1, L4, algebra]

1.2 (Newtonian system.) By (H2), $X_*'=W_*$ and $W_*'=-\nabla\psi(X_*)$ on $[0,S_*]$. [given]

1.3 (Lipschitz bound for the force.) Fix $S$ and write $a=X_*(S)$, $b=X_\varepsilon(S)$. If $a=b$ the bound is immediate. Otherwise set $g(t):=\nabla\psi(a+t(b-a))$ for $0\le t\le1$; the segment lies in $K'$ by convexity, and $\psi$ is $C^2$ on the open set $U_L$ containing $K'$. Thus $g$ is continuous on $[0,1]$, differentiable on $(0,1)$, and $g'(t)=D^2\psi(a+t(b-a))(b-a)$, so (H3) gives $\|g'(t)\|_2\le K_2\|b-a\|_2$. Apply [L2] to obtain $\|\nabla\psi(X_\varepsilon(S))-\nabla\psi(X_*(S))\|_2\le K_2\|X_\varepsilon(S)-X_*(S)\|_2$. [L2, L4, given, algebra]

2.1 (Integral inequality and Gronwall.) By steps 1.1 and 1.2, for every $S\in[0,S_*]$, $$D(S)\le D(0)+\int_0^S\bigl(\|W_\varepsilon-W_*\|_2+\|\nabla\psi(X_\varepsilon)-\nabla\psi(X_*)\|_2+\|R_\varepsilon\|_2\bigr)\,dS'\le D(0)+C_3\varepsilon S+(1+K_2)\int_0^SD(S')\,dS',$$ where step 1.3 bounds the force term by $K_2\|X_\varepsilon-X_*\|_2\le K_2D$ and the velocity term by $D$. The function $a(S):=D(0)+C_3\varepsilon S$ is nondecreasing and $b:=1+K_2$ is constant, so [L3] gives $D(S)\le a(S)e^{(1+K_2)S}\le(D(0)+C_3\varepsilon S_*)e^{(1+K_2)S_*}$. [step 1.1, step 1.2, step 1.3, L3, algebra]

3.1 (Consequences and conclusion.) The displayed estimate is the main claim; (i) and (ii) follow by inserting $D(0)\to0$ respectively $D(0)=0$ and recalling that $C_3$, $K_2$ and $S_*$ are fixed in the limit, while (iii) is the identity $T_\varepsilon=LS_*/(\sqrt\varepsilon c)$. [step 2.1, given, algebra] ∎

## Remarks

- **What the limit is.** The statement is a two-sequence comparison: a family of geodesics of the metrics $g(\varepsilon)$ with data scaled as in (H1)-(H2), and a solution of the Newtonian comparison system. It is not a statement that general relativity reduces to Newtonian mechanics, nor a statement about any particular physical system.
- **The exponential factor.** The bound grows like $e^{(1+K_2)S_*}$: on fixed scaled intervals it is uniform in $\varepsilon$, but it degrades as the scaled interval or the field gradient grows. No global-in-time limit is asserted.
