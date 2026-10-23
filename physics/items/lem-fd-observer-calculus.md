---
id: lem-fd-observer-calculus
kind: lemma
title: "Rigid observer calculus and objective strain rate"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - thm-euclidean-inverse-function-theorem
  - thm-chain-rule-for-total-derivatives
dependency_roles:
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Chapter 3 §3.8"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
  scraped: []
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
physical_scope: null
empirical_premises: []
---

## Statement

Let $I\subseteq\mathbb R$ be a nonempty open interval. For $r=1,2$, $C^r$ means that all coordinate partial derivatives through total order $r$ exist and are continuous. Let $U\subseteq\mathbb R^3$ be open and let $\chi\in C^2(I\times U,\mathbb R^3)$ be such that every slice $\chi_t:U\to\chi_t(U)$ is a bijection with $C^2$ inverse and $J(t,a):=\det D_a\chi(t,a)>0$, where $D_a\chi$ is the matrix of reference-coordinate partial derivatives. Write $H(t,a):=(t,\chi(t,a))$ and $\Omega:=\{(t,x):t\in I,\ x\in\chi_t(U)\}$. The map $H$ is injective and its derivative is block triangular with determinant $J>0$, so the inverse function theorem gives local $C^1$ inverses; injectivity makes them agree on overlaps. Hence $\Omega$ is open and the joint inverse $A(t,x):=\chi_t^{-1}(x)$ is $C^1$. Define $u(t,x):=\partial_t\chi(t,A(t,x))$, which is $C^1$. For any $C^1$ vector field $f$ on $\Omega$, let $D_xf$ be its matrix of spatial coordinate partial derivatives and define $D_tf:=\partial_tf+(D_xf)u$. Set $L:=D_xu$, $D:=(L+L^{\mathsf T})/2$, $W:=(L-L^{\mathsf T})/2$, $\theta:=\operatorname{tr}L$, and $a_m:=D_tu$. Here $\operatorname{tr}M:=\sum_iM_{ii}$ for a square matrix $M$, $I_3$ denotes the $3\times3$ identity matrix, and

$$SO(3):=\{Q\in\mathbb R^{3\times3}:Q^{\mathsf T}Q=I_3,\ \det Q=1\}.$$

Let $Q\in C^2(I,SO(3))$ and $c\in C^2(I,\mathbb R^3)$, hold time fixed, and change spatial coordinates by $x^*=Q(t)x+c(t)$. This map preserves Euclidean distances and orientation because $Q^{\mathsf T}Q=I_3$ and $\det Q=1$; the coordinate change does not assert that the observer is inertial. Set $\chi^*(t,a):=Q(t)\chi(t,a)+c(t)$ and $\Omega^*:=\{(t,x^*):t\in I,\ x^*=\chi^*(t,a)\text{ for some }a\in U\}$. Define the transformed velocity, material derivative, rate tensors and acceleration from $\chi^*$ by the same formulas on $\Omega^*$; in particular, $D_t^*f=\partial_tf+(D_{x^*}f)u^*$ and $a_m^*:=D_t^*u^*$. For corresponding points $x=\chi(t,a)$ and $x^*=\chi^*(t,a)$, the transformed fields satisfy

$$u^*(t,x^*)=Q'(t)x+Q(t)u(t,x)+c'(t),\qquad L^*(t,x^*)=Q(t)L(t,x)Q(t)^{\mathsf T}+Q'(t)Q(t)^{\mathsf T},$$

$$D^*(t,x^*)=Q(t)D(t,x)Q(t)^{\mathsf T},\qquad W^*(t,x^*)=Q(t)W(t,x)Q(t)^{\mathsf T}+Q'(t)Q(t)^{\mathsf T},\qquad \theta^*(t,x^*)=\theta(t,x).$$

Thus $D$ transforms objectively, meaning its transformed tensor components obey $D^*=QDQ^{\mathsf T}$ under every such $Q,c$; $W$ acquires the observer spin $Q'Q^{\mathsf T}$ and is not objective under general time-dependent rotations. If $a_m:=D_tu$ is the material acceleration, then

$$a_m^*(t,x^*)=Q(t)a_m(t,x)+2Q'(t)u(t,x)+Q''(t)x+c''(t).$$

When $Q'=0$ and $c''=0$, the acceleration formula reduces to $a_m^*=Qa_m$. These are mathematical kinematic identities and assert no force law or balance equation.

## Statement references

[R. Abeyaratne, *Continuum Mechanics*, Volume II, §3.8 (printed pp. 89–93; equations (3.96)–(3.102))](https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf)

## Facts & Assumptions

**Given:** The motion, the $C^2$ maps $Q,c$, and the spatial transformation in the statement.

[F1] [[thm-euclidean-inverse-function-theorem]]: a $C^1$ map on an open subset of $\mathbb R^n$, $n\ge1$, with invertible derivative at a point has a local $C^1$ inverse there. The fields $u,D_t,L,D,W,\theta$ in this lemma are defined in its statement; no reference body or distinguished time is required.

[F2] [[thm-chain-rule-for-total-derivatives]]: derivatives of composable totally differentiable Euclidean maps multiply in the stated order.

## Proof

1.1 The given $C^2$ map $H(t,a)=(t,\chi(t,a))$ is injective on the open set $I\times U$ and has invertible derivative, since its block-triangular derivative has determinant $J>0$. By [F1] its local $C^1$ inverses patch by injectivity, so its image $\Omega$ is open and its inverse label $A$ is $C^1$. The event map $(t,x)\mapsto(t,Q(t)x+c(t))$ has the $C^2$ inverse $(t,x^*)\mapsto(t,Q(t)^{\mathsf T}(x^*-c(t)))$. Thus $\Omega^*$ is open and $A^*(t,x^*)=A(t,Q(t)^{\mathsf T}(x^*-c(t)))$ is $C^1$ by [F2]; both induced velocities are $C^1$. For fixed $a$, differentiate $\chi^*=Q\chi+c$ in time and use the given velocity definitions to obtain $u^*(t,x^*)=Q'x+Qu+c'$ at $x=\chi(t,a)$. [given, F1, F2, algebra]

2.1 Along the material curve $x(t)=\chi(t,a)$, the given definitions and [F2] give $\frac{d}{dt}u(t,\chi(t,a))=\partial_tu+(D_xu)\partial_t\chi=D_tu(t,\chi(t,a))=a_m(t,x)$. [given, F2, step 1.1, algebra]

2.2 Since $x=Q^{\mathsf T}(x^*-c)$, its spatial derivative at fixed $t$ is $D_{x^*}x=Q^{\mathsf T}$. Apply [F2] to the $x^*$ derivative of the velocity formula in step 1.1 to get $L^*=(Q'+QL)Q^{\mathsf T}=QLQ^{\mathsf T}+Q'Q^{\mathsf T}$. [F2, step 1.1, algebra]

3.1 By the given transformed-field definitions and [F2], $a_m^*(t,x^*(t))=\frac{d}{dt}u^*(t,\chi^*(t,a))=\frac{d^2}{dt^2}\chi^*(t,a)=\frac{d^2x^*}{dt^2}$. Differentiate $x^*(t)=Q(t)x(t)+c(t)$ twice; the product rule gives $\frac{d^2x^*}{dt^2}=Q''x+2Q'u+Q\frac{d^2x}{dt^2}+c''$. Substituting step 2.1 gives the displayed transformation law for $a_m^*$. [given, F2, step 1.1, step 2.1, algebra]

4.1 Differentiating $QQ^{\mathsf T}=I_3$ gives $Q'Q^{\mathsf T}+Q(Q')^{\mathsf T}=0$, so $\Omega:=Q'Q^{\mathsf T}$ is skew-symmetric. Taking the symmetric and skew-symmetric parts of step 2.2 yields $D^*=QDQ^{\mathsf T}$ and $W^*=QWQ^{\mathsf T}+\Omega$. The finite-sum trace identity gives $\operatorname{tr}(QLQ^{\mathsf T})=\operatorname{tr}L$, while a skew-symmetric matrix has zero diagonal, hence $\operatorname{tr}\Omega=0$ and $\theta^*=\theta$. [step 2.2, algebra] ∎
