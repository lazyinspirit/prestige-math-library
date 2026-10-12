---
id: ex-cm-mass-metric-on-a-sphere
kind: example
title: "The mass metric of a particle constrained to the unit sphere in spherical coordinates"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-constrained-configuration-and-mass-metric, lem-cm-mass-metric-positivity, def-euclidean-spheres-and-closed-balls, def-total-derivative-in-euclidean-space, def-euclidean-inner-product, def-sine-and-cosine-by-power-series, def-immersion-submersion-and-constant-rank-map]
dependency_roles:
  def-cm-constrained-configuration-and-mass-metric: mathematical-premise
  lem-cm-mass-metric-positivity: mathematical-premise
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  def-immersion-submersion-and-constant-rank-map: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 3.1 (configuration space) and Section 2.1 (generalized coordinates)"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Appendix C (curvilinear coordinates), printed pages 160-162"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
verification:
  precheck: pass
---

## Example

Let $Q:=S^2=\{x\in\mathbb R^3:\|x\|_2=1\}$ be the unit sphere ([[def-euclidean-spheres-and-closed-balls]]), let $X:Q\hookrightarrow\mathbb R^3$ be the inclusion, and let $m>0$ be the mass of one particle, so that the mass matrix of [[def-cm-constrained-configuration-and-mass-metric]] is $M=mI_3$.

The mass metric of the inclusion is $G_q(u,v)=m\langle u,v\rangle_2$ for $u,v\in T_qS^2$, hence positive definite at every point by [[lem-cm-mass-metric-positivity]]. On the chart domain $0<\theta<\pi$, $0<\varphi<2\pi$ consider the parametrization

$$\Psi(\theta,\varphi):=(\sin\theta\cos\varphi,\ \sin\theta\sin\varphi,\ \cos\theta).$$

Its differential is injective on the chart domain, and in the coordinate basis $(\partial_\theta,\partial_\varphi)$ the mass metric has the classical spherical form

$$G\bigl(\dot\theta\partial_\theta+\dot\varphi\partial_\varphi,\ \dot\theta\partial_\theta+\dot\varphi\partial_\varphi\bigr)=m\bigl(\dot\theta^2+\sin^2\theta\,\dot\varphi^2\bigr).$$

Equivalently, the kinetic energy of a tangent vector with coordinate velocity $(\dot\theta,\dot\varphi)$ is $T=\tfrac m2(\dot\theta^2+\sin^2\theta\,\dot\varphi^2)$.

## Facts & Assumptions

**Given:** The unit sphere $Q=S^2$, the inclusion $X:Q\hookrightarrow\mathbb R^3$, a mass $m>0$, and the parametrization $\Psi(\theta,\varphi)=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$ on the domain $0<\theta<\pi$, $0<\varphi<2\pi$.

[L1] The mass metric of $(Q,X,m)$ is $G_q(u,v)=m\langle u,v\rangle_2$ for the inclusion and tangent vectors $u,v$, and it is positive definite ([[def-cm-constrained-configuration-and-mass-metric]], [[lem-cm-mass-metric-positivity]]).

[L2] On its domain $\Psi$ is smooth with total derivative given by the matrix of partial derivatives, and it is an immersion exactly when its two partial derivatives are linearly independent there ([[def-total-derivative-in-euclidean-space]], [[def-immersion-submersion-and-constant-rank-map]]).

[L3] The inner product is bilinear and $\cos^2+\sin^2=1$ ([[def-euclidean-inner-product]], [[def-sine-and-cosine-by-power-series]]).

## Verification

**Proof technique:** direct; differentiate the parametrization and evaluate the inner products of the coordinate vector fields.

1.1 The partial derivatives of $\Psi$ are $\partial_\theta\Psi=(\cos\theta\cos\varphi,\cos\theta\sin\varphi,-\sin\theta)$ and $\partial_\varphi\Psi=(-\sin\theta\sin\varphi,\sin\theta\cos\varphi,0)$. For $0<\theta<\pi$ these are linearly independent: a linear combination $\alpha\partial_\theta\Psi+\beta\partial_\varphi\Psi=0$ has third component $-\alpha\sin\theta$ and first two components combining as $\cos\theta(\alpha\cos\varphi,\alpha\sin\varphi)+\beta(-\sin\theta\sin\varphi,\sin\theta\cos\varphi)=0$; the first relation gives $\alpha=0$ because $\sin\theta\ne0$, and then $\beta=0$ because $\sin\theta\ne0$. Hence $\Psi$ is an immersion on the chart domain. [given, L2, algebra]

2.1 The three inner products of the coordinate vector fields are $\langle\partial_\theta\Psi,\partial_\theta\Psi\rangle_2=\cos^2\theta\cos^2\varphi+\cos^2\theta\sin^2\varphi+\sin^2\theta=1$, $\langle\partial_\theta\Psi,\partial_\varphi\Psi\rangle_2=-\cos\theta\sin\theta\cos\varphi\sin\varphi+\cos\theta\sin\theta\sin\varphi\cos\varphi=0$ and $\langle\partial_\varphi\Psi,\partial_\varphi\Psi\rangle_2=\sin^2\theta\sin^2\varphi+\sin^2\theta\cos^2\varphi=\sin^2\theta$, using $\cos^2+\sin^2=1$ for each angle. [step 1.1, L1, L3, algebra]

3.1 Since $\Psi$ is the parametrization of the inclusion chart, the mass metric in these coordinates is $G_{ij}=m\langle\partial_i\Psi,\partial_j\Psi\rangle_2$; by step 2.1 its matrix is $m\begin{pmatrix}1&0\\0&\sin^2\theta\end{pmatrix}$, so for a coordinate velocity $(\dot\theta,\dot\varphi)$ the kinetic energy is $T=\tfrac12 m(\dot\theta^2+\sin^2\theta\,\dot\varphi^2)$, and the metric is positive definite on the chart domain because $\sin\theta\ne0$. [step 1.1, step 2.1, L1, algebra] ∎

## Remarks

- The coordinate expression degenerates at $\theta=0$ and $\theta=\pi$, but this is a property of the chart, not of the mass metric: the chart domain excludes the poles, where the parametrization is not an immersion. The metric of the inclusion is positive definite on the whole sphere, as recorded above, and any consumer working at a pole must use a different chart.

- The sphere here is a mathematical constraint set. No claim is made that any physical particle is constrained to a sphere, or that the displayed kinetic energy is measured; a physical consumer states the constraint model and its scope in its own items.
