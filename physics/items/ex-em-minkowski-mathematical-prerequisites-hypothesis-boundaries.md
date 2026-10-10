---
id: ex-em-minkowski-mathematical-prerequisites-hypothesis-boundaries
kind: example
title: "Explicit mathematical hypothesis/convention examples"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
deps: [def-em-minkowski-affine-space, lem-em-boost-preserves-metric, lem-em-proper-time-reparametrization, lem-em-antisymmetric-tensor-contraction, def-interval, def-rational-power, lem-rational-power-laws]
dependency_roles:
  def-em-minkowski-affine-space: mathematical-premise
  lem-em-boost-preserves-metric: mathematical-premise
  lem-em-proper-time-reparametrization: mathematical-premise
  lem-em-antisymmetric-tensor-contraction: mathematical-premise
  def-interval: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "David Tong, Dynamics and Relativity, University of Cambridge Part IA Mathematical Tripos (Lent 2013), §7.1–§7.4.7, printed pp. 107–145"
      url: "https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "Sean M. Carroll, Lecture Notes on General Relativity (arXiv:gr-qc/9712019v1), Chapter 1, printed pp. 1–30"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Example

With $\eta=\operatorname{diag}(-1,1,1,1)$: (i) the vector $v$ with components
$(1,0,0,0)$ is future timelike and unit, $\eta(v,v)=-1$. (ii) For $0<\beta<1$
the boost $\Lambda_\beta$ of
[[lem-em-boost-preserves-metric]] sends $v$ to the vector with components
$(\gamma,-\gamma\beta,0,0)$,
whose quadratic value $\eta(\Lambda_\beta v,\Lambda_\beta v)$ is
$-\gamma^2(1-\beta^2)=-1$ and whose time component
$\gamma$ is positive; at $\beta=1$ the factor $\gamma$ is undefined, so the
hypothesis $0\le\beta<1$ cannot be dropped. (iii) The null line
$z(s)=(s,s,0,0)$, $s\in\mathbb R$, has $\eta(z',z')=0$, so the proper-time
construction of [[lem-em-proper-time-reparametrization]] gives $\tau\equiv0$,
which is not an invertible parameter: the timelike hypothesis cannot be weakened
to causal. (iv) For the symmetric nonzero form $F:=\eta$ one has
$\Phi=\mathrm{id}$ and $\eta(v,\Phi(v))=\eta(v,v)=-1\ne0$, so the antisymmetry
hypothesis of [[lem-em-antisymmetric-tensor-contraction]] is genuine. (v) For
the skew form with $F_{01}=1$, $F_{10}=-1$ and other coefficients zero, the
operator of [[lem-em-antisymmetric-tensor-contraction]] sends $e_0$ to $-e_1$:
$\eta(-e_1,w)=-w^1=F(w,e_0)$. Thus its invariant pairing and standard
raised-index formula have the same sign, and $\eta(e_0,\Phi(e_0))=0$. No
physical clock premise or experimental claim is used.

## Facts & Assumptions

**Given:** The Minkowski vector space $(V,\eta)$ of [[def-em-minkowski-affine-space]] with its basis $(e_0,e_1,e_2,e_3)$, the vector $v=e_0$, whose components are $(1,0,0,0)$, a real $\beta$ with $0<\beta<1$, the boost $\Lambda_\beta$ and the number $\gamma=(1-\beta^2)^{-1/2}$ of [[lem-em-boost-preserves-metric]], the null line $z(s)=(s,s,0,0)$ on $J:=\mathbb R$, and the forms $F:=\eta$ and the skew form with $F_{01}=1$, $F_{10}=-1$ and other coefficients zero.

[F1] On $V=\mathbb R^4$ the form $\eta(v,w)=-v^0w^0+v^1w^1+v^2w^2+v^3w^3$ is symmetric and bilinear with matrix $\operatorname{diag}(-1,1,1,1)$, it is nondegenerate, the vectors $e_0,e_1,e_2,e_3$ are the standard ordered basis, and $C^+$ consists of the nonzero causal vectors with positive time coordinate ([[def-em-minkowski-affine-space]]).

[L1] For $0\le\beta<1$ the map $\Lambda_\beta$ with $(\Lambda_\beta v)^0=\gamma(v^0-\beta v^1)$, $(\Lambda_\beta v)^1=\gamma(v^1-\beta v^0)$, $(\Lambda_\beta v)^2=v^2$, $(\Lambda_\beta v)^3=v^3$ is a proper orthochronous Lorentz map, its inverse is $\Lambda_{-\beta}$, and at $\beta=1$ the factor $\gamma$ is undefined ([[lem-em-boost-preserves-metric]]).

[L2] For a nonempty open interval $J$ and a $C^1$ curve $z$ with $\eta(z',z')<0$ and $z^0{}'>0$ the function $\tau(s)=c^{-1}\int_{s_0}^s\sqrt{g}$ with $g=-\eta(z',z')$ has $\tau'>0$ and gives the tangent $U(\tau(s))=c\,z'(s)/\sqrt{g(s)}$ with $\eta(U,U)=-c^2$; and if $\eta(z',z')=0$ on $J$, then $g=0$, $\tau\equiv0$ and $\tau$ is not injective ([[lem-em-proper-time-reparametrization]]).

[L3] For a skew-symmetric bilinear form $F$ and each $u$ there is exactly one $\Phi(u)$ with $\eta(\Phi(u),w)=F(w,u)$ for all $w$, the map $\Phi$ is linear, $\eta(u,\Phi(u))=0$, and in a frame $\Phi(u)^\mu=\eta^{\mu\alpha}F_{\alpha\beta}u^\beta$ with $F_{\alpha\beta}=F(e_\alpha,e_\beta)$ and $(\eta^{\mu\alpha})$ the inverse of $(\eta_{\alpha\beta})$ ([[lem-em-antisymmetric-tensor-contraction]]).

[L4] $\mathbb R$ is a nonempty open interval, and a nonempty open interval is order-convex ([[def-interval]]).

[L5] For $a>0$ and rationals $r,s$ one has $a^r>0$, $a^{-r}=(a^r)^{-1}$ and $a^{r+s}=a^ra^s$ ([[def-rational-power]], [[lem-rational-power-laws]]).

## Verification

**Proof technique:** direct.

1.1 (i) $\eta(v,v)=\eta(e_0,e_0)=-1<0$ and $v^0=1>0$, so $v$ is future timelike and unit in the sense $\eta(v,v)=-1$. [given, F1, algebra]

1.2 (ii, coordinates) For $0<\beta<1$, [L1] gives $\Lambda_\beta e_0=(\gamma(1-\beta\cdot0),\gamma(0-\beta\cdot1),0,0)=(\gamma,-\gamma\beta,0,0)$. [given, L1, algebra]

1.3 (iii, null tangent) The line $z(s)=(s,s,0,0)$ has the constant derivative $z'=(1,1,0,0)$, so $\eta(z',z')=-1+1=0$; its positive time component also makes the tangent future causal. [given, F1, L2, algebra]

1.4 (iv, symmetric form) For $F:=\eta$, symmetry gives $\eta(u,w)=F(w,u)$ for every $w$, so $\Phi(u):=u$ satisfies the defining pairing. If another vector $y$ does so, $\eta(y-u,w)=0$ for every $w$, hence $y=u$ by nondegeneracy [F1]. Thus $\Phi=\operatorname{id}$ without using the skew hypothesis of [L3], and $\eta(v,\Phi(v))=-1\ne0$. [given, F1, algebra]

1.5 (v, skew sign witness) For the skew form with $F_{01}=1$, $F_{10}=-1$ and other coefficients zero, $F(w,e_0)=-w^1=\eta(-e_1,w)$ for every $w$, so $\Phi(e_0)=-e_1$ by [L3]. The raised-index formula gives $\Phi(e_0)^\mu=\sum_\alpha\eta^{\mu\alpha}F_{\alpha0}=-\eta^{\mu1}$, again the components of $-e_1$. Thus both signs agree and $\eta(e_0,\Phi(e_0))=0$. [given, F1, L3, algebra]

1.6 (ii, excluded endpoint) At $\beta=1$, $1-\beta^2=0$, so $\gamma=(1-\beta^2)^{-1/2}$ is undefined by [L1]; the endpoint cannot be included in this formula. [given, L1]

2.1 (ii, norm) By step 1.2, $\eta(\Lambda_\beta v,\Lambda_\beta v)=-\gamma^2+\gamma^2\beta^2=-\gamma^2(1-\beta^2)=-1$. Indeed [L5] with $a:=1-\beta^2>0$ gives $\gamma^2a=a^{-1/2}a^{-1/2}a=a^{-1}a=1$, and $\gamma>0$ by [L1] and [L5]. [step 1.2, L1, L5, algebra]

2.2 (iii, conclusion) $J:=\mathbb R$ is a nonempty open interval by [L4]. The line of step 1.3 has constant, hence continuous, derivative, so is $C^1$. The null clause of [L2] gives $g=0$ and $\tau\equiv0$, which is not injective; its future causal tangent therefore does not suffice for proper-time reparametrization. [step 1.3, L2, L4]

3.1 All five checks are established — (i) in step 1.1, (ii) in steps 1.2, 2.1 and 1.6, (iii) in steps 1.3 and 2.2, (iv) in step 1.4, and (v) in step 1.5 — with no physical clock premise and no experimental claim. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 2.1, step 2.2] ∎
