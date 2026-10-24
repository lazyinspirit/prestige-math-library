---
id: ex-aqft-two-group-split-background-coupling
kind: example
title: A split 2-group background with a 1-form gauge shift
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - def-aqft-two-group-symmetry-realization
  - pthm-aqft-two-group-background-coupling
  - def-aqft-two-group-background
  - thm-aqft-two-group-background-consistency
  - def-aqft-finite-background-two-groupoid
dependency_roles:
  def-aqft-two-group-symmetry-realization: formulation-prerequisite
  pthm-aqft-two-group-background-coupling: physical-result
  def-aqft-two-group-background: mathematical-premise
  thm-aqft-two-group-background-consistency: mathematical-premise
  def-aqft-finite-background-two-groupoid: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: Explicit split finite 2-group cochains and unit response on a closed triangulated 3-sphere only; this example makes no continuum or empirical claim.
sources:
  references:
    - title: "Francesco Benini, Clay Córdova, and Po-Shen Hsin, On 2-Group Global Symmetries and Their Anomalies"
      url: https://arxiv.org/pdf/1803.09336
      locator: "§2.3, printed pp. 18–20 / PDF pp. 19–21, equations (2.15)–(2.20)"
    - title: "Sakura Schäfer-Nameki, ICTP Lectures on (Non-)Invertible Generalized Symmetries"
      url: https://arxiv.org/pdf/2305.18296v2
      locator: "§2.5, printed pp. 23–25"
---

## Example

Let $K=\partial\Delta^4$ be the ordered boundary complex of a $4$-simplex with vertices $0<1<2<3<4$, a finite triangulation of the closed oriented $3$-sphere. Use the smooth sphere $M=S^3=\{p\in\mathbb R^4:\|p\|=1\}$ with its boundary orientation, identifying $|K|$ with $M$ by radial projection from a regular $4$-simplex centered at the origin. In the tangential-structure convention of the finite realization definition, take $X=BO(3)=\operatorname{Gr}_3(\mathbb R^\infty)$, $\xi=\operatorname{id}_{BO(3)}$, $\tau_M(p)=p^\perp\subset\mathbb R^4\subset\mathbb R^\infty$, and $\theta=\tau_M$. Identify $T_pM=p^\perp$ with the fiber of $\tau_M^*\gamma_3$, where $\gamma_3$ is the tautological bundle, and give this bundle the boundary orientation of $TM$. Hold these maps, bundle identification and orientation fixed under every internal gauge arrow.

Take $G=A=\mathbb Z_2$ with trivial action and $\beta=0$, and set every edge label $a_{ij}=0$ and every face label $B_{ijk}=0$. In the selected skeletal model the tensor product is $(g,u)\otimes(h,v)=(g+h,u+v)$ and the associator is zero. In the finite unit-response model, let the unique field configuration have weight $1$. Use natural units $c=\hbar=1$; cochain labels, action and partition weights are dimensionless. For the $1$-gauge arrow with all vertex labels $g_i=0$, edge label $\lambda_{01}=1$, and every other edge label zero, the transformed edge cochain is still zero; the transformed face cochain has $B'_{012}=B'_{013}=B'_{014}=1$ and every other face label zero. Since $B'=\delta\lambda$, its tetrahedron coboundary vanishes on every tetrahedron, so $\delta_aB'=0=a'^*\beta$. The partition weight remains $1$, so this gauge transformation has phase $1$. This is a finite background-response example, not a claim of a faithful continuum QFT realization.

## Example references

[Benini, Córdova, and Hsin, §2.3](https://arxiv.org/pdf/1803.09336)

[Schäfer-Nameki, §2.5](https://arxiv.org/pdf/2305.18296v2)

## Facts & Assumptions

**Given:** $K=\partial\Delta^4$ with its ordered simplices, the smooth sphere $M$ and fixed tangential data specified in the Example, $G=A=\mathbb Z_2$ with additive notation and trivial action, $\beta=0$, zero initial edge and face cochains, the stated gauge parameters, and the selected unit-response model.

[A1] Adopted finite model data: every background in this example has one configuration with measure $1$ and action $0$, so its weight is $1$. Each $1$-arrow has the unique configuration bijection and observable-algebra isomorphism between its singleton fibers; each $2$-arrow intertwiner and each composition or unit comparison is the unique identity map on that singleton target fiber and its constant observable algebra. All observable insertions are the identity. The allowed background counterterms include $L_x=0$ for every background.

[F1] [[def-aqft-two-group-background]]: a background has flat edge labels and satisfies $\delta_aB=a^*\beta$; for trivial $\rho$, $\delta_aB_{0123}=B_{123}-B_{023}+B_{013}-B_{012}$.

[F2] [[thm-aqft-two-group-background-consistency]]: the displayed vertex/edge gauge parameters act by $a'_{ij}=g_i a_{ij}g_j^{-1}$ and $B'_{ijk}=\rho_{g_i}B_{ijk}+\zeta^g_{ijk}+\rho_{a'_{ij}}\lambda_{jk}-\lambda_{ik}+\lambda_{ij}$ and preserve the background equation.

[F3] [[def-aqft-two-group-symmetry-realization]]: the geometric inputs include a closed oriented smooth manifold, a tangent-bundle classifying map $\tau_M$, a fibration $\xi:X\to BO(d)$, a lift $\xi\theta=\tau_M$, and the oriented bundle identification, all fixed under internal gauge arrows. The background-response data specify finite configuration sets, actions, measures and gauge-arrow maps; unit-response data are an allowed input without asserting an effective physical symmetry realization.

[F4] [[pthm-aqft-two-group-background-coupling]]: under the model's coherent bijection and phase law, the unnormalized partition function transforms by the model-specified phase; its proof is a finite-sum reindexing.

## Verification

1.1 The map $\tau_M(p)=p^\perp$ is continuous, as its orthogonal projection matrix is $I_4-pp^{\mathsf T}$, and $TM\cong\tau_M^*\gamma_3$ by the stated fiberwise identity. The identity map $\xi$ has the required homotopy lifting property: every homotopy $H$ lifts as $\widetilde H=H$. Thus $\theta=\tau_M$ is the specified lift, with the prescribed orientation, and the fixed geometry satisfies [F3]. The zero edge cochain is flat on every triangle of $K$. Since $B=0$ and $\beta=0$, every tetrahedron equation reads $0=0$, so the initial labels form an allowed background. [given, F1, F3, algebra]

2.1 With $g_i=0$ the edge labels remain $a'=0$, and with trivial action and $\beta=0$ one has $\zeta^g=0$. The formula $(\delta_{a'}\lambda)_{ijk}=\lambda_{jk}-\lambda_{ik}+\lambda_{ij}$ is nonzero exactly on the faces containing edge $01$, namely $012$, $013$, and $014$, where its value is $1$. For each tetrahedron, expanding $(\delta_{a'}^2\lambda)_{ijkl}=(\delta\lambda)_{jkl}-(\delta\lambda)_{ikl}+(\delta\lambda)_{ijl}-(\delta\lambda)_{ijk}$ cancels each edge parameter with its opposite, giving $\delta_{a'}B'=\delta^2\lambda=0=a'^*\beta$. Thus the transformed labels form a background on the entire closed triangulation. [given, F1, F2, step 1.1, algebra]

3.1 By [A1], both source and target have the unique weight $1$ and the arrow is the identity on that configuration. The weight law $1=\chi_f(x)\,1$ therefore uniquely forces $\chi_f(x)=1$ for every arrow; these phases satisfy the identity, composition and $2$-isomorphism requirements because all equal $1$. The fixed geometric inputs were checked in step 1.1, so [F4] applies and gives $Z_x=Z_y=1$, in agreement with the direct singleton sum. The zero counterterm $L_x=0$ is permitted in this model, so the residual anomaly is absent for this selected response. [A1, F3, F4, step 1.1, step 2.1, algebra] ∎

## Remarks

The singleton unit-response assignment here specifies a background-response functor and its phase only. It does not construct an effective nontrivial defect action on dynamical observables or claim an effective realization of the full selected physical symmetry. The cochain and response computations remain meaningful without that additional realization data.
