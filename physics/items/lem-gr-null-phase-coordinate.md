---
id: lem-gr-null-phase-coordinate
kind: lemma
title: "The phase coordinate u = x^0 - x^3 is null and profile functions are flat-harmonic and constant along its transport curves"
status: published
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-gr-plane-wave-perturbation, def-gr-flat-linearized-perturbation, def-gr-minkowski-model-and-inertial-chart, def-gr-smooth-covariant-two-tensor-field, def-causal-classification-of-lorentz-vectors, thm-chain-rule, thm-algebra-of-derivatives, def-derivative, def-c-r-and-smooth-maps-between-smooth-manifolds, def-gr-tensor-fields-and-components, def-euclidean-inner-product]
dependency_roles:
  def-gr-plane-wave-perturbation: mathematical-premise
  def-gr-flat-linearized-perturbation: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6 (6.30)-(6.33): plane-wave solutions of the linearized vacuum equation and the null wave-vector condition, printed pp. 148-149 (PDF pp. 155-156)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.2.1: the wave equation Box hbar_{mu nu} = 0 with plane-wave ansatz and the null condition omega = |k| (5.17)-(5.19), printed pp. 209-210 (PDF pp. 216-217)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)=(\mathbb R^4,\eta,\partial_0)$ be the flat model with its
inertial chart $x$ ([[def-gr-minkowski-model-and-inertial-chart]]) and let
$u(x):=x^0-x^3$, $n:=du$, be the phase coordinate and its differential of
[[def-gr-plane-wave-perturbation]] clause (a); let $\Box$ be the flat
d'Alembertian of [[def-gr-flat-linearized-perturbation]] clause (c). Then:

**(a)** The covector $n$ is nonzero and null, $\eta^{ab}n_an_b=0$, and its
spatial part has Euclidean norm $1$; the vector field
$T:=\partial_0+\partial_3$ is nonzero, null and future-directed, and
$\eta(T,\cdot)=-n$, so $n(T)=0$ and the wave covector
$k=\omega\,\eta(T,\cdot)$ of [[def-gr-plane-wave-perturbation]] clause (a)
is the metric dual of $\omega T$, with components
$k_a=\omega(-1,0,0,1)$ and $k^a=\omega(1,0,0,1)$. For $\omega>0$ this
vector is future null, for $\omega<0$ it is past null, and for $\omega=0$
it is zero and hence not null.

**(b)** For every $f\in C^\infty(\mathbb R)$ the function
$\varphi:=f\circ u$ is smooth on $\mathbb R^4$, and $T\varphi=0$ and
$\Box\varphi=0$ at every point.

**(c)** For every smooth map $F=(F_{ab}):\mathbb R\to\mathbb R^{4\times4}$
with values in the symmetric matrices, the planar perturbation
$h_{ab}(x):=F_{ab}(u(x))$ of [[def-gr-plane-wave-perturbation]] clause (b)
is a smooth symmetric field with
$\partial_ch_{ab}=F'_{ab}(u)\,n_c$ and $\Box h_{ab}=0$ componentwise on
$\mathbb R^4$; moreover $(\partial_0+\partial_3)h_{ab}=0$. If in addition
the profile is TT, then $\eta^{ab}h_{ab}=0$ and the divergence
$\eta^{bc}\partial_bh_{ac}$ vanishes componentwise.

**(d)** The profile is constant along the integral curves of $T$: for every
$x$ and every $\sigma\in\mathbb R$, $u(x+\sigma T)=u(x)$ and
$h_{ab}(x+\sigma T)=h_{ab}(x)$. Under the coordinate reparametrization
$t_c:=x^0/c$, these curves satisfy $|dx^3/dt_c|=c$. Here $c>0$ is only the
real parameter used in this mathematical coordinate change; no physical unit
or physical-time interpretation is asserted in this lemma.

## Facts & Assumptions

**Given:** The flat model with inertial chart $x$, the function $u(x)=x^0-x^3$ with differential $n=du$, the vector field $T=\partial_0+\partial_3$, a function $f\in C^\infty(\mathbb R)$ and a smooth symmetric-matrix-valued profile $F$.

[F1] For a smooth function $f$ of one variable and smooth coordinate functions, the chain rule gives $\partial_a(f\circ u)(x)=f'(u(x))\,\partial_au(x)$, and derivatives of sums and products obey the usual rules ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-derivative]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[F2] In the inertial chart, $\partial_0u=1$, $\partial_1u=\partial_2u=0$, $\partial_3u=-1$, and the flat d'Alembertian is $\Box=-\partial_0^2+\partial_1^2+\partial_2^2+\partial_3^2$, applied componentwise to component families; the metric is $\eta=\operatorname{diag}(-1,1,1,1)$ and indices are raised and lowered with $\eta$ ([[def-gr-flat-linearized-perturbation]] clauses (a)-(c), [[def-gr-plane-wave-perturbation]] clause (a), [[def-gr-minkowski-model-and-inertial-chart]]).

[F3] Component functions of smooth fields with the displayed transformation law define smooth tensor fields; a smooth profile $F$ composed with the smooth submersion $u$ gives smooth components in the one inertial chart, hence a smooth covariant $2$-tensor field, and the Euclidean inner product of the spatial vector with components $(0,0,-1)$ is $1$ ([[def-gr-smooth-covariant-two-tensor-field]], [[def-gr-tensor-fields-and-components]], [[def-euclidean-inner-product]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

## Proof

**Proof technique:** direct; differentiate the explicit coordinate functions.

1.1 (The covector and the transport field.) By [F2], $n_a=\partial_au$ has components $(1,0,0,-1)$, so $n\ne0$ and $\eta^{ab}n_an_b=-1+1=0$; its spatial part has Euclidean norm $1$ by [F3]. The vector $T=\partial_0+\partial_3$ is nonzero with $\eta(T,T)=0$ and $\eta(T,N)=-1<0$, hence future null by [[def-gr-minkowski-model-and-inertial-chart]] clause (c). Its metric dual is $(-1,0,0,1)=-n$, so $n(T)=0$. Multiplication by $\omega$ gives the stated components of $k$ and $k^\sharp=\omega T$. For $\omega\ne0$, $\eta(\omega T,\omega T)=0$ and $\eta(\omega T,N)=-\omega$, proving the future/past alternatives; for $\omega=0$ the vector is zero, excluded from the null class by [[def-causal-classification-of-lorentz-vectors]]. This proves (a). [F2, F3, algebra]

2.1 (Profiles are transported and flat-harmonic.) Fix $x$. By [F1], $\partial_a\varphi(x)=f'(u(x))\,\partial_au(x)$, so by step 1.1, $T\varphi(x)=\partial_0\varphi(x)+\partial_3\varphi(x)=f'(u(x))(1+(-1))=0$. For the d'Alembertian, [F1] applied to $f'$ gives $\partial_0^2\varphi=f''(u(x))$ and $\partial_3^2\varphi=f''(u(x))(\partial_3u)^2=f''(u(x))$, since $\partial_3^2u=0$, while $\partial_1\varphi=\partial_2\varphi=0$; hence $\Box\varphi(x)=-f''(u(x))+f''(u(x))=0$ by [F2]. This proves (b). [F1, F2, step 1.1, algebra]

2.2 (Planar perturbations.) For each fixed pair $(a,b)$, the component $h_{ab}$ is the composition of the smooth function $u$ with the smooth function $F_{ab}$; hence $h$ has smooth components in the inertial chart and, by the transformation law for covariant two-tensors in the one available chart [F3], defines a smooth symmetric field. Applying [F1] to each component gives $\partial_ch_{ab}=F'_{ab}(u)\,\partial_cu=F'_{ab}(u)n_c$; applying the same computation to the derivative profile $F'_{ab}$ gives $\partial_c\partial_dh_{ab}=F''_{ab}(u)n_cn_d$, so $\Box h_{ab}=F''_{ab}(u)\eta^{cd}n_cn_d=F''_{ab}(u)(n^dn_d)=0$ by step 1.1. For the same reason $(\partial_0+\partial_3)h_{ab}=F'_{ab}(u)(1-1)=0$. If the profile is TT, then the components $h_{a0}$ and $h_{a3}$ vanish for every $a$, and $\eta^{ab}h_{ab}=F_{11}+F_{22}=0$; for the divergence, the TT condition gives $F'_{a0}=F'_{a3}=0$, and with $n_1=n_2=0$, $n_0=1$, $n_3=-1$ the sum $\eta^{bc}\partial_bh_{ac}=\eta^{00}F'_{a0}n_0+\eta^{33}F'_{a3}n_3=-F'_{a0}-F'_{a3}$ vanishes. This proves (c). [F1, F2, F3, step 1.1, algebra]

3.1 (Transport along $T$.) The integral curve of $T$ through $x$ is $\sigma\mapsto x+\sigma T=(x^0+\sigma,\,x^1,\,x^2,\,x^3+\sigma)$, because the derivative of this curve is $T$ by [F2] and $T$ is constant. Along it, $u$ takes the constant value $(x^0+\sigma)-(x^3+\sigma)=x^0-x^3=u(x)$; hence $h_{ab}$ is constant along it by step 2.2. In the coordinate reparametrization $t_c=x^0/c$ the curve has $dt_c/d\sigma=1/c$ and $dx^3/d\sigma=1$, so $|dx^3/dt_c|=c$. This proves (d). [F2, step 1.1, step 2.2, algebra]

4.1 (Conclusion.) Steps 1.1, 2.1, 2.2 and 3.1 prove clauses (a)-(d) from the explicit chart functions and the cited differential calculus; no field equation, no choice principle and no physical assumption is used. [step 1.1, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **Terminology.** The wave covector is $k=-\omega n$, and its metric-dual vector is $\omega T$. For $\omega\ne0$ this vector spans the transport line; the covector annihilates $T$ because that line is null. A covector and a vector have different types, so no claim of distinct vector directions follows from their different component signs.

- **Scope.** The lemma is a statement about the flat model and the fixed inertial chart. A change of inertial chart mixes the roles of the coordinate directions, and a general null wave covector is treated in the gauge-decomposition lemma of this page; no claim about curved backgrounds is made.
