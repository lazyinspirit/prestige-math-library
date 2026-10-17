---
id: def-emg-boundaryless-completeness-domain
kind: definition
title: Boundaryless domain for geometric completeness
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
physical_scope: null
deps:
- def-smooth-manifold
- def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian
- def-metric-space
- def-levi-civita-connection
- thm-fundamental-theorem-of-riemannian-geometry
- prop-christoffel-formula-for-the-levi-civita-connection
- def-covariant-derivative-along-a-curve
- def-riemannian-distance-on-a-connected-manifold
- thm-riemannian-distance-is-a-metric
- thm-reals-cauchy-complete
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian: mathematical-premise
  def-metric-space: mathematical-premise
  def-levi-civita-connection: mathematical-premise
  thm-fundamental-theorem-of-riemannian-geometry: mathematical-premise
  prop-christoffel-formula-for-the-levi-civita-connection: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-riemannian-distance-on-a-connected-manifold: mathematical-premise
  thm-riemannian-distance-is-a-metric: mathematical-premise
  thm-reals-cauchy-complete: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: Ved Datar, Lectures on Riemannian Geometry
    url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
dependency_level: 0
---

## Definition

Let $M$ be a smooth Hausdorff second-countable manifold **without boundary**, in the sense of [[def-smooth-manifold]]. Let $g$ be a positive definite smooth Riemannian metric as in [[def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian]]. Use the Levi-Civita connection of [[def-levi-civita-connection]], whose existence and uniqueness for the supplied smooth Riemannian metric are proved by [[thm-fundamental-theorem-of-riemannian-geometry]]. The coordinate formula is supplied by [[prop-christoffel-formula-for-the-levi-civita-connection]]: its coefficients are $\Gamma^k_{ij}=\frac12g^{kl}(\partial_i g_{jl}+\partial_j g_{il}-\partial_l g_{ij})$. A parametrized affine geodesic is a smooth curve $\gamma:J\to M$ on an interval with nonempty interior satisfying $\nabla_{\dot\gamma}\dot\gamma=0$, equivalently $\ddot\gamma^k+\Gamma^k_{ij}(\gamma)\dot\gamma^i\dot\gamma^j=0$, where covariant differentiation along the curve is defined by [[def-covariant-derivative-along-a-curve]]; the coordinate equation is the expansion of that derivative in a coordinate basis. Its maximal domain is an interval on which it cannot be extended with the same affine parameter as a solution. **Two-sided geodesic completeness** means that every maximal affine geodesic is defined on all of $\mathbb R$.

Independently, for a real metric $d$ in [[def-metric-space]], a sequence $(x_n)$ is Cauchy when for every $\varepsilon>0$ there is $N$ with $d(x_m,x_n)<\varepsilon$ whenever $m,n\ge N$. It converges to $x$ when for every $\varepsilon>0$ eventually $d(x_n,x)<\varepsilon$. **Metric completeness** means that every Cauchy sequence converges in the given metric space. In a Riemannian application the metric must be the distance induced by $g$ on a connected component: the infimum of lengths $\int\sqrt{g(\dot\alpha,\dot\alpha)}\,dt$ over piecewise-$C^1$ connecting curves. Its definition and finite metric property are supplied by [[def-riemannian-distance-on-a-connected-manifold]] and [[thm-riemannian-distance-is-a-metric]]. Specify that induced metric, rather than an arbitrary compatible metric. Distinct components are treated separately; no infinite distance is inserted into a real metric.

These are different completeness conditions. Their equivalence is a Hopf–Rinow theorem requiring its own hypotheses and proof; it is not part of this definition. In particular, a Lorentzian metric is not a positive definite distance, and this convention supplies no Lorentzian Hopf–Rinow implication.

The boundaryless restriction matters: the Euclidean interval $[0,1]$ is metrically complete, while the curve $\gamma(t)=1/2+t$ stays inside it only for $-1/2\le t\le1/2$ and cannot be continued there as a two-sided affine geodesic with velocity $1$. Completeness of this interval follows because a real Cauchy sequence converges in $\mathbb R$ by [[thm-reals-cauchy-complete]] and its limit remains between $0$ and $1$. This boundary example explains the domain restriction; it is not an instance of the boundaryless equivalence.
