---
id: ex-cm-mass-metric-on-a-sphere
kind: example
title: "The mass metric of a particle constrained to the unit sphere in spherical coordinates"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-constrained-configuration-and-mass-metric, lem-cm-mass-metric-positivity, def-euclidean-spheres-and-closed-balls, def-total-derivative-in-euclidean-space, def-euclidean-inner-product, def-sine-and-cosine-by-power-series, def-immersion-submersion-and-constant-rank-map, def-ck-euclidean-maps-and-diffeomorphisms, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-continuous-partial-derivatives-imply-total-differentiability, def-differential-of-a-smooth-map, thm-chain-rule-for-differentials-of-smooth-maps, prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding, thm-a-regular-level-set-is-an-embedded-submanifold, prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure, prop-smoothness-into-an-embedded-submanifold-is-an-initial-property, thm-smooth-inverse-function-theorem-on-manifolds, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-and-cosine-parametrize-the-unit-circle, thm-quarter-turn-values-and-shift-formulas]
dependency_roles:
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  def-cm-constrained-configuration-and-mass-metric: mathematical-premise
  lem-cm-mass-metric-positivity: mathematical-premise
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  def-immersion-submersion-and-constant-rank-map: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  thm-chain-rule-for-differentials-of-smooth-maps: mathematical-premise
  prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding: mathematical-premise
  thm-a-regular-level-set-is-an-embedded-submanifold: mathematical-premise
  prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure: mathematical-premise
  prop-smoothness-into-an-embedded-submanifold-is-an-initial-property: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-sine-and-cosine-parametrize-the-unit-circle: mathematical-premise
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

Let $Q:=S^2=\{x\in\mathbb R^3:\|x\|_2=1\}$ be the unit sphere ([[def-euclidean-spheres-and-closed-balls]]), with the smooth two-dimensional embedded structure supplied by [[thm-a-regular-level-set-is-an-embedded-submanifold]] applied to $F(x)=\langle x,x\rangle_2$ at the regular value $1$ (verified below), let $X:Q\hookrightarrow\mathbb R^3$ be the inclusion, and let $m>0$ be the mass of one particle, so that the mass matrix of [[def-cm-constrained-configuration-and-mass-metric]] is $M=mI_3$.

The mass metric of the inclusion is $G_q(u,v)=m\langle u,v\rangle_2$ for $u,v\in T_qS^2$, hence positive definite at every point by [[lem-cm-mass-metric-positivity]]. On $D:=(0,\pi)\times(0,2\pi)$ consider the parametrization

$$\Psi(\theta,\varphi):=(\sin\theta\cos\varphi,\ \sin\theta\sin\varphi,\ \cos\theta).$$

Its image is the open subset $U:=S^2\setminus\{x\in S^2:x_2=0,\ x_1\ge0\}$, which excludes the poles and the longitude seam. The map $\Psi:D\to U$ is a diffeomorphism; in the manifold-to-coordinate convention the chart is $(U,\Psi^{-1})$. Its differential is injective on $D$, and in the coordinate basis $(\partial_\theta,\partial_\varphi)$ the mass metric has the classical spherical form

$$G\bigl(\dot\theta\partial_\theta+\dot\varphi\partial_\varphi,\ \dot\theta\partial_\theta+\dot\varphi\partial_\varphi\bigr)=m\bigl(\dot\theta^2+\sin^2\theta\,\dot\varphi^2\bigr).$$

Equivalently, the kinetic energy of a tangent vector with coordinate velocity $(\dot\theta,\dot\varphi)$ is $T=\tfrac m2(\dot\theta^2+\sin^2\theta\,\dot\varphi^2)$.

## Facts & Assumptions

**Given:** The unit sphere $Q=S^2$, the inclusion $X:Q\hookrightarrow\mathbb R^3$, a mass $m>0$, and the parametrization $\Psi(\theta,\varphi)=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$ on the domain $0<\theta<\pi$, $0<\varphi<2\pi$.

[L1] The mass metric of $(Q,X,m)$ is $G_q(u,v)=m\langle u,v\rangle_2$ for the inclusion and tangent vectors $u,v$, and it is positive definite ([[def-cm-constrained-configuration-and-mass-metric]], [[lem-cm-mass-metric-positivity]]).

[L2] Finite products and sums of smooth Euclidean maps are smooth, and continuous partial derivatives give the total derivative with its Jacobian matrix ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[thm-continuous-partial-derivatives-imply-total-differentiability]]). For a smooth map $\Psi:D\to S^2$, the chain rule gives $d(i\circ\Psi)=di\circ d\Psi$, where the inclusion $i:S^2\hookrightarrow\mathbb R^3$ has injective differential because it is a smooth embedding; hence independence of the ambient derivative columns implies that $d\Psi$ is injective ([[def-differential-of-a-smooth-map]], [[thm-chain-rule-for-differentials-of-smooth-maps]], [[prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding]], [[def-immersion-submersion-and-constant-rank-map]]).

[L3] The inner product is bilinear, $\cos^2+\sin^2=1$, and $\sin'=\cos$, $\cos'=-\sin$; repeated differentiation makes sine and cosine smooth ([[def-euclidean-inner-product]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-and-cosine-derivatives]]).

[L4] A nonempty regular level set of a smooth map $M^m\to N^n$ is an embedded submanifold of dimension $m-n$ ([[thm-a-regular-level-set-is-an-embedded-submanifold]]). An open subset of a smooth manifold has its restricted smooth structure ([[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]]); a map into an embedded submanifold is smooth if its ambient composite is smooth ([[prop-smoothness-into-an-embedded-submanifold-is-an-initial-property]]); and a smooth map with an isomorphic differential has a smooth local inverse ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

[L5] The quarter-turn values are $\sin(\pi/2)=1$, $\cos0=1$, $\cos\pi=-1$ and $\sin0=\sin\pi=0$ ([[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-and-cosine-derivatives]]). The sine monotonicity below therefore gives $\sin\theta>0$ on $(0,\pi)$. Cosine is strictly decreasing from $1$ to $-1$ on $[0,\pi]$, and $\varphi\mapsto(\cos\varphi,\sin\varphi)$ is a bijection from $[0,2\pi)$ onto the unit circle ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-sine-and-cosine-parametrize-the-unit-circle]]).

## Verification

**Proof technique:** direct; differentiate the parametrization and evaluate the inner products of the coordinate vector fields.

1.1 The map $F:\mathbb R^3\to\mathbb R$, $F(x)=\langle x,x\rangle_2$, is smooth because it is a finite sum of coordinate squares and [L2] applies. For $h\in\mathbb R^3$, $F(x+h)-F(x)-2\langle x,h\rangle_2=\langle h,h\rangle_2=\|h\|_2^2$, whose ratio to $\|h\|_2$ tends to $0$; hence $DF_x(h)=2\langle x,h\rangle_2$. At every $x\in F^{-1}(1)$, the vector $h=x/2$ has $DF_x(h)=1$, so this differential is surjective. The fibre is nonempty since $e_3\in F^{-1}(1)$; [L4] therefore makes $S^2=F^{-1}(1)$ a smooth embedded submanifold of dimension $3-1=2$. Its inclusion is a smooth embedding by [L2], so [L1] applies and gives $G_q(u,v)=m\langle u,v\rangle_2$ and positive definiteness at every point of the sphere. [given, L1, L2, L3, L4, algebra]

2.1 The partial derivatives of $\Psi$ are $\partial_\theta\Psi=(\cos\theta\cos\varphi,\cos\theta\sin\varphi,-\sin\theta)$ and $\partial_\varphi\Psi=(-\sin\theta\sin\varphi,\sin\theta\cos\varphi,0)$. For $0<\theta<\pi$ these are linearly independent: a linear combination $\alpha\partial_\theta\Psi+\beta\partial_\varphi\Psi=0$ has third component $-\alpha\sin\theta$ and first two components combining as $\cos\theta(\alpha\cos\varphi,\alpha\sin\varphi)+\beta(-\sin\theta\sin\varphi,\sin\theta\cos\varphi)=0$; the first relation gives $\alpha=0$ because $\sin\theta\ne0$, and then $\beta=0$ because $\sin\theta\ne0$. By [L2] this proves that $d\Psi$ is injective. [given, L2, L3, L5, step 1.1, algebra]

3.1 The image of $\Psi$ lies in $S^2$ by [L3]. For $x\in U$, the exclusion of the poles gives $-1<x_3<1$, so [L5] gives a unique $\theta\in(0,\pi)$ with $\cos\theta=x_3$ and $\sin\theta=\sqrt{1-x_3^2}>0$. The pair $(x_1,x_2)/\sin\theta$ lies on the unit circle and is not $(1,0)$; hence [L5] gives a unique $\varphi\in(0,2\pi)$ producing $x$. Conversely an angle in that interval cannot give $(1,0)$ by the same circle bijection. Thus $\Psi:D\to U$ is bijective. The removed meridian is relatively closed, so $U$ is open in $S^2$. Smoothness follows from [L3] and the embedded-target criterion [L4]. Its differential is an isomorphism between two-dimensional tangent spaces by steps 1.1 and 2.1, so [L4] supplies smooth local inverses everywhere; bijectivity makes these restrictions of its single global inverse. Thus $\Psi$ is a diffeomorphism onto $U$, and $(U,\Psi^{-1})$ is a smooth chart. [step 1.1, step 2.1, L3, L4, L5, algebra]

3.2 The three inner products of the coordinate vector fields are $\langle\partial_\theta\Psi,\partial_\theta\Psi\rangle_2=\cos^2\theta\cos^2\varphi+\cos^2\theta\sin^2\varphi+\sin^2\theta=1$, $\langle\partial_\theta\Psi,\partial_\varphi\Psi\rangle_2=-\cos\theta\sin\theta\cos\varphi\sin\varphi+\cos\theta\sin\theta\sin\varphi\cos\varphi=0$ and $\langle\partial_\varphi\Psi,\partial_\varphi\Psi\rangle_2=\sin^2\theta\sin^2\varphi+\sin^2\theta\cos^2\varphi=\sin^2\theta$, using $\cos^2+\sin^2=1$ for each angle. [step 2.1, L1, L3, algebra]

4.1 Since $\Psi$ is the parametrization of the inclusion chart, the mass metric in these coordinates is $G_{ij}=m\langle\partial_i\Psi,\partial_j\Psi\rangle_2$; by step 3.2 its matrix is $m\begin{pmatrix}1&0\\0&\sin^2\theta\end{pmatrix}$, so for a coordinate velocity $(\dot\theta,\dot\varphi)$ the kinetic energy is $T=\tfrac12 m(\dot\theta^2+\sin^2\theta\,\dot\varphi^2)$, and the metric is positive definite on the chart domain because $\sin\theta\ne0$. [step 2.1, step 3.1, step 3.2, L1, algebra] ∎

## Remarks

- The coordinate expression degenerates at $\theta=0$ and $\theta=\pi$, but this is a property of the chart, not of the mass metric: the chart domain also excludes the longitude seam and excludes the poles, where the parametrization is not an immersion. The metric of the inclusion is positive definite on the whole sphere, as recorded above, and any consumer working at a pole must use a different chart.

- The sphere here is a mathematical constraint set. No claim is made that any physical particle is constrained to a sphere, or that the displayed kinetic energy is measured; a physical consumer states the constraint model and its scope in its own items.
