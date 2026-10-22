---
id: def-qftx-wavefront-hadamard
kind: definition
title: Wavefront and positive-frequency Hadamard data
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-qftx-distributions-on-smooth-manifolds
  - def-qftx-local-wavefront-set
  - def-smooth-manifold
  - def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union
dependency_roles:
  def-qftx-distributions-on-smooth-manifolds: mathematical-premise
  def-qftx-local-wavefront-set: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, Appendix A and Section 5
      url: https://arxiv.org/html/1208.1428
      locator: Full-text Appendix A.4–A.7 defines wavefront sets and the conormal pullback condition; Section 5.1 states the microcausal cone convention.
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Full 38-page paper, printed pp. 7–9, Section 2.1, wavefront-set definition and the positive-frequency Hadamard relation.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Let $M$ first be any Hausdorff, second-countable smooth manifold without boundary and $u\in\mathcal D'(M)$. No metric, orientation or dimension restriction is used in the following wavefront definition. For each smooth chart $x:U\to\Omega\subseteq\mathbb R^n$, let $u_x\in\mathcal D'(\Omega)$ be the coordinate representative of $u$ in the test-density convention. Map a local covector $(x(p),\xi)\in T^*\Omega$ to $(p,dx_p^T\xi)\in T^*M$. Define the global wavefront set by the union over all charts,
$$ \operatorname{WF}(u):=\bigcup_{(U,x)}\{(p,dx_p^T\xi):(x(p),\xi)\in\operatorname{WF}_{x(U)}(u_x)\}\subset T^*M\setminus0, $$
where the local sets are the local Fourier wavefront sets. Thus the global set is defined using all charts; equality of the chartwise descriptions on overlaps is a separate theorem. The Fourier convention is the displayed $2\pi$ convention.


Let $(M,g)$ be a Hausdorff, second-countable, oriented, time-oriented, globally hyperbolic smooth Lorentzian $n$-manifold without boundary, $n\ge2$. Here $g$ is a smooth symmetric nondegenerate bilinear form on each tangent space with one negative and $n-1$ positive directions; in charts its signature is $(-,+,\ldots,+)$. An orientation is a smooth choice of orientation in each tangent space. A time orientation selects one of the two components of $\{v\ne0:g(v,v)<0\}$ as future. A tangent vector is causal when $g(v,v)\le0$, and is future or past causal when it belongs to the closure of the selected future or past timelike cone. A future causal curve is a continuous map $c:I\to M$, where $I\subset\mathbb R$ is an interval, which is piecewise $C^1$ on each compact subinterval, with finitely many pieces there and nonzero future causal tangent on each smooth piece. Past curves are defined with the opposite cone. Endpoint values, when included in $I$, are taken by continuity. Define $J^+(p)$ by including $p$ and all $q$ for which a future causal curve $c:[a,b]\to M$, $a<b$, has $c(a)=p$, $c(b)=q$; put $J^-(p)=\{q:p\in J^+(q)\}$. Here globally hyperbolic means strongly causal and every causal diamond $J^+(p)\cap J^-(q)$ is compact; strongly causal means every point has arbitrarily small neighborhoods which each causal curve meets in a connected parameter interval. A nonzero cotangent vector is future or past causal, or future or past null, when its metric dual under $g^{-1}$ has the corresponding tangent property.

Here is an explicit construction of the connection used below. A smooth vector field $A$ is a smooth section of $TM$, acting on smooth scalars by $Af=df(A)$; its bracket is the vector field characterized by $[A,B]f=A(Bf)-B(Af)$. A connection is an $\mathbb R$-bilinear operation $(A,B)\mapsto\nabla_AB$ on smooth local vector fields, commuting with restriction, with $\nabla_{fA}B=f\nabla_AB$ and $\nabla_A(fB)=(Af)B+f\nabla_AB$ for smooth real $f$. Define it by
$$2g(\nabla_AB,C)=A g(B,C)+B g(A,C)-C g(A,B)-g(A,[B,C])+g(B,[C,A])+g(C,[A,B]).$$
Indeed the right side is $C^\infty$-linear in $C$: on substituting $fC$, derivative terms cancel using $[B,fC]=f[B,C]+(Bf)C$ and $[fC,A]=f[C,A]-(Af)C$. On a chart, writing the right side as $K(A,B,C)$ and taking $C=\partial_c$, put $\nabla_AB=\tfrac12 g^{ac}K(A,B,\partial_c)\partial_a$. Its coefficients are smooth: $g^{-1}=\operatorname{adj}(g)/\det g$. The $C^\infty$-linearity just checked shows it satisfies the formula for every local $C$. Nondegeneracy gives uniqueness on overlaps, so these local fields agree and define a global connection. Repeated coordinate indices are summed from $1$ to $n$. Expansion with $fA$ and $fB$ gives the two connection rules above. Subtracting the formula with $A,B$ interchanged gives $\nabla_AB-\nabla_BA=[A,B]$ (torsion zero), and adding the formulas with $B,C$ interchanged gives $A g(B,C)=g(\nabla_AB,C)+g(B,\nabla_AC)$ (metric compatibility). Conversely these last two identities and the connection rules give the displayed formula by taking the cyclic metric identities and replacing $\nabla_AB-\nabla_BA$ by $[A,B]$; hence the connection is unique. This dimension-independent construction defines the Levi–Civita connection $\nabla$ without an unprovided existence premise. On scalars $\nabla_Af=Af$; on covectors $(\nabla_A\beta)(B)=A(\beta(B))-\beta(\nabla_AB)$. Define the smooth metric density $\mu_g=|\det(g_{ab})|^{1/2}|dx^1\cdots dx^n|$ in a chart. It is coordinate-independent: under $y=\psi(x)$, $g_y=(D\psi^{-1})^Tg_xD\psi^{-1}$, so $|\det g_y|^{1/2}=|\det D\psi^{-1}|\,|\det g_x|^{1/2}$, the density transformation law. Functional-kernel pairings and contractions on this page use $\mu_g$ in each integrated variable; no physical units are assigned.


Write $\nabla_{\partial_a}\partial_b=\Gamma^c_{ab}\partial_c$; then $\Gamma^c_{ab}=\frac12g^{cd}(\partial_ag_{bd}+\partial_bg_{ad}-\partial_dg_{ab})$ by the defining formula. Along a smooth curve, $\nabla_{\dot\gamma}\dot\gamma$ has components $\ddot\gamma^c+\Gamma^c_{ab}(\gamma)\dot\gamma^a\dot\gamma^b$. An affinely parametrized null geodesic is a smooth curve $\gamma:I\to M$ on an open interval $I\subset\mathbb R$, with nonzero tangent, and $g(\dot\gamma,\dot\gamma)=0$ and $\nabla_{\dot\gamma}\dot\gamma=0$; it is future-directed when $\dot\gamma$ lies in the chosen future causal cone. Two nonzero future-null cotangent vectors $(p,\xi)$ and $(q,\zeta)$ are related, written $(p,\xi)\sim(q,\zeta)$, if $p=q$ and $\zeta=\xi$, or if there are a nonconstant future-directed affinely parametrized null geodesic $\gamma:I\to M$, parameters $s,t\in I$ in either order, and a common scale $\lambda>0$ such that
$$p=\gamma(s),\qquad q=\gamma(t),\qquad \xi=\lambda g_p(\dot\gamma(s),\cdot),\qquad \zeta=\lambda g_q(\dot\gamma(t),\cdot).$$
These covectors are the metric-dual tangents to that geodesic and are related by induced covector parallel transport. There is no requirement $s\le t$: the future-frequency choice concerns the covectors, not an ordering of the two base points. The coincident case includes every nonzero future-null covector with $\zeta=\xi$. Define the positive-frequency null relation
$$ \mathcal C^+_g:=\{(p,\xi;q,-\zeta): (p,\xi)\sim(q,\zeta),\ \xi\text{ future null}\}\subset T^*(M\times M)\setminus0. $$
For a fixed scalar second-order operator $P:C^\infty(M;\mathbb C)\to C^\infty(M;\mathbb C)$ given by $P=-g^{ab}\nabla_a\nabla_b+X^a\nabla_a+V$, with smooth vector field $X$, smooth scalar $V$, inverse metric $g^{ab}$, and Levi-Civita derivative $\nabla$ (extended complex-linearly), define its action on distributions as follows. If in a chart $P=\sum_{|\alpha|\le2}a_\alpha\partial^\alpha$, its transpose on compactly supported test densities is
$$P^{\mathrm t}(h|dx|)=\sum_{|\alpha|\le2}(-1)^{|\alpha|}\partial^\alpha(a_\alpha h)|dx|.$$
There is no complex conjugation. Integration by parts characterizes it intrinsically by $\int (Pf)\omega=\int f(P^{\mathrm t}\omega)$ for every smooth scalar $f$ and test density $\omega$; hence coordinate expressions agree. It preserves compact support and is continuous on the test-density space, since each output derivative seminorm is bounded by finitely many input derivative seminorms on the same compact support. Put $\langle Pu,\omega\rangle=\langle u,P^{\mathrm t}\omega\rangle$. On $M\times M$, $P_x$ and $P_y$ differentiate only the first or second coordinate block, respectively, with those coefficients and the same transpose convention on product test densities; this also specifies their action on nonfactorized test densities. A scalar Hadamard bisolution is a distribution $W\in\mathcal D'(M\times M)$ satisfying $P_xW=P_yW=0$ and $\operatorname{WF}(W)=\mathcal C^+_g$. Write $W^{\mathsf T}=\tau^*W$ for the pullback by $\tau(x,y)=(y,x)$. A fixed antisymmetric part means the equality $W-W^{\mathsf T}=iE$ for one specified distribution $E$. This definition asserts no existence of $W$ and fixes no field-operator or commutator sign beyond the displayed convention.

## Definition references

[[def-qftx-distributions-on-smooth-manifolds]]

[[def-qftx-local-wavefront-set]]

[[def-smooth-manifold]]

[[def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union]]

