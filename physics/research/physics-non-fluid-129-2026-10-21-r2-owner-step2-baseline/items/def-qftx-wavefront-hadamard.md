---
id: def-qftx-wavefront-hadamard
kind: definition
title: Wavefront and positive-frequency Hadamard data
status: draft
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
  statement: literature-derived
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
  precheck: pending
---

## Definition

Let $(M,g)$ be a Hausdorff, second-countable, oriented, time-oriented, globally hyperbolic smooth Lorentzian $n$-manifold without boundary, $n\ge2$. Here $g$ is a smooth symmetric nondegenerate bilinear form on each tangent space with one negative and $n-1$ positive directions; in charts its signature is $(-,+,\ldots,+)$. An orientation is a smooth choice of orientation in each tangent space. A time orientation selects one of the two components of $\{v\ne0:g(v,v)<0\}$ as future. A tangent vector is causal when $g(v,v)\le0$, and is future or past causal when it belongs to the closure of the selected future or past timelike cone. A causal curve is piecewise $C^1$ with causal tangent consistently future or past directed. Put $J^+(p)$ and $J^-(p)$ for the points reached from or reaching $p$ by such curves. Here globally hyperbolic means strongly causal and every causal diamond $J^+(p)\cap J^-(q)$ is compact; strongly causal means every point has arbitrarily small neighborhoods which each causal curve meets in a connected parameter interval. A nonzero cotangent vector is future or past causal, or future or past null, when its metric dual under $g^{-1}$ has the corresponding tangent property.

Let $\nabla$ be the unique torsion-free connection with $\nabla g=0$. Define the smooth metric density $\mu_g=|\det(g_{ab})|^{1/2}|dx^1\cdots dx^n|$ in a chart. It is coordinate-independent: under $y=\psi(x)$, $g_y=(D\psi^{-1})^Tg_xD\psi^{-1}$, so $|\det g_y|^{1/2}=|\det D\psi^{-1}|\,|\det g_x|^{1/2}$, the density transformation law. Functional-kernel pairings and contractions on this page use $\mu_g$ in each integrated variable; no physical units are assigned.

For each smooth chart $x:U\to\Omega\subseteq\mathbb R^n$, let $u_x\in\mathcal D'(\Omega)$ be the coordinate representative of $u$ in the test-density convention of [[def-qftx-distributions-on-smooth-manifolds]]. Map a local covector $(x(p),\xi)\in T^*\Omega$ to $(p,dx_p^T\xi)\in T^*M$. Define the global wavefront set by the union over all charts,
$$ \operatorname{WF}(u):=\bigcup_{(U,x)}\{(p,dx_p^T\xi):(x(p),\xi)\in\operatorname{WF}_{x(U)}(u_x)\}\subset T^*M\setminus0, $$
where the local sets are those of [[def-qftx-local-wavefront-set]]. Thus the global set is defined using all charts; equality of the chartwise descriptions on overlaps is a separate theorem. The Fourier convention is the displayed $2\pi$ convention.

An affinely parametrized null geodesic is a smooth curve $\gamma$ with $g(\dot\gamma,\dot\gamma)=0$ and $\nabla_{\dot\gamma}\dot\gamma=0$; it is future-directed when $\dot\gamma$ lies in the chosen future causal cone. Two nonzero future-null cotangent vectors $(p,\xi)$ and $(q,\zeta)$ are related, written $(p,\xi)\sim(q,\zeta)$, if $p=q$ and $\zeta=\xi$, or if there are a nonconstant future-directed affinely parametrized null geodesic $\gamma:I\to M$, parameters $s,t\in I$ in either order, and a common scale $\lambda>0$ such that
$$p=\gamma(s),\qquad q=\gamma(t),\qquad \xi=\lambda g_p(\dot\gamma(s),\cdot),\qquad \zeta=\lambda g_q(\dot\gamma(t),\cdot).$$
These covectors are the metric-dual tangents to that geodesic and are related by induced covector parallel transport. There is no requirement $s\le t$: the future-frequency choice concerns the covectors, not an ordering of the two base points. The coincident case includes every nonzero future-null covector with $\zeta=\xi$. Define the positive-frequency null relation
$$ \mathcal C^+_g:=\{(p,\xi;q,-\zeta): (p,\xi)\sim(q,\zeta),\ \xi\text{ future null}\}\subset T^*(M\times M)\setminus0. $$
For a fixed scalar second-order operator $P=-g^{ab}\nabla_a\nabla_b+X^a\nabla_a+V$, with smooth vector field $X$, smooth scalar $V$, inverse metric $g^{ab}$, and Levi-Civita derivative $\nabla$, a scalar Hadamard bisolution is a distribution $W\in\mathcal D'(M\times M)$ satisfying $P_xW=P_yW=0$ and $\operatorname{WF}(W)=\mathcal C^+_g$. Write $W^{\mathsf T}=\tau^*W$ for the pullback by $\tau(x,y)=(y,x)$. A fixed antisymmetric part means the equality $W-W^{\mathsf T}=iE$ for one specified distribution $E$. This definition asserts no existence of $W$ and fixes no field-operator or commutator sign beyond the displayed convention.

## Definition references

[[def-qftx-distributions-on-smooth-manifolds]]

[[def-qftx-local-wavefront-set]]

[[def-smooth-manifold]]

[[def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union]]

