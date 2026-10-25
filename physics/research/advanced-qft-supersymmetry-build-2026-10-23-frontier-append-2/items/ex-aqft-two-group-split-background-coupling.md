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

Let $K=\partial\Delta^4$ be the ordered boundary complex of a $4$-simplex with vertices $0<1<2<3<4$, a finite triangulation of the closed oriented $3$-sphere. Take $G=A=\mathbb Z_2$ with trivial action and $\beta=0$, and set every edge label $a_{ij}=0$ and every face label $B_{ijk}=0$. In the selected skeletal model the tensor product is $(g,u)\otimes(h,v)=(g+h,u+v)$ and the associator is zero. In the finite unit-response model, let the unique field configuration have weight $1$. For the $1$-gauge arrow with all vertex labels $g_i=0$, edge label $\lambda_{01}=1$, and every other edge label zero, the transformed edge cochain is still zero; the transformed face cochain has $B'_{012}=B'_{013}=B'_{014}=1$ and every other face label zero. Since $B'=\delta\lambda$, its tetrahedron coboundary vanishes on every tetrahedron, so $\delta_aB'=0=a'^*\beta$. The partition weight remains $1$, so this gauge transformation has phase $1$. This is a finite background-response example, not a claim of a faithful continuum QFT realization.

## Example references

[Benini, Córdova, and Hsin, §2.3](https://arxiv.org/pdf/1803.09336)

[Schäfer-Nameki, §2.5](https://arxiv.org/pdf/2305.18296v2)

## Facts & Assumptions

**Given:** $K=\partial\Delta^4$ with its ordered simplices, $G=A=\mathbb Z_2$ with additive notation and trivial action, $\beta=0$, zero initial edge and face cochains, the stated gauge parameters, and the selected unit-response model.

[A1] Adopted finite model data: for every background in this example there is one configuration with measure $1$ and action $0$, so its weight is $1$; every gauge arrow maps that configuration to itself and all observable insertions are the identity.

[F1] [[def-aqft-two-group-background]]: a background has flat edge labels and satisfies $\delta_aB=a^*\beta$; for trivial $\rho$, $\delta_aB_{0123}=B_{123}-B_{023}+B_{013}-B_{012}$.

[F2] [[thm-aqft-two-group-background-consistency]]: the displayed vertex/edge gauge parameters act by $a'_{ij}=g_i a_{ij}g_j^{-1}$ and $B'_{ijk}=\rho_{g_i}B_{ijk}+\zeta^g_{ijk}+\rho_{a'_{ij}}\lambda_{jk}-\lambda_{ik}+\lambda_{ij}$ and preserve the background equation. Its complete current proof and current-ready Step 1 record were inspected.

[F3] [[def-aqft-two-group-symmetry-realization]]: in the selected finite model, the background response uses the specified finite configuration set, action, measure and gauge-arrow maps; unit-response data are an allowed model input.

[F4] [[pthm-aqft-two-group-background-coupling]]: under the model's coherent bijection and phase law, the unnormalized partition function transforms by the model-specified phase; its proof is a finite-sum reindexing.

## Verification

1.1 The zero edge cochain is flat on every triangle of $K$. Since $B=0$ and $\beta=0$, every tetrahedron equation reads $0=0$, so the initial labels form an allowed background. [given, F1, algebra]

2.1 With $g_i=0$ the edge labels remain $a'=0$, and with trivial action and $\beta=0$ one has $\zeta^g=0$. The formula $(\delta_{a'}\lambda)_{ijk}=\lambda_{jk}-\lambda_{ik}+\lambda_{ij}$ is nonzero exactly on the faces containing edge $01$, namely $012$, $013$, and $014$, where its value is $1$. For each tetrahedron, expanding $(\delta_{a'}^2\lambda)_{ijkl}=(\delta\lambda)_{jkl}-(\delta\lambda)_{ikl}+(\delta\lambda)_{ijl}-(\delta\lambda)_{ijk}$ cancels each edge parameter with its opposite, giving $\delta_{a'}B'=\delta^2\lambda=0=a'^*\beta$. Thus the transformed labels form a background on the entire closed triangulation. [given, F1, F2, step 1.1, algebra]

3.1 By [A1], both source and target have the unique weight $1$ and the arrow is the identity on that configuration, so $Z_x=Z_y=1$ and the phase is $1$. This agrees with the finite coupling relation in [F4] and gives no anomaly for this selected response. [A1, F3, F4, step 2.1, algebra] ∎

## Remarks

The singleton unit-response assignment here specifies a background-response functor and its phase only. It does not construct an effective nontrivial defect action on dynamical observables or claim an effective realization of the full selected physical symmetry. The cochain and response computations remain meaningful without that additional realization data.
