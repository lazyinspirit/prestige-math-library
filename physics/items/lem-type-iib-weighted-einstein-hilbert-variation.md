---
id: lem-type-iib-weighted-einstein-hilbert-variation
kind: lemma
title: Weighted Einstein Hilbert Variation in Ten Dimensions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
- def-smooth-manifold
- def-oriented-smooth-manifold-and-oriented-chart
- def-smooth-tensor-field
- def-bilinear-symmetric-skew-and-alternating-forms
- def-affine-connection-on-a-smooth-manifold
- def-christoffel-symbols-of-an-affine-connection
- def-contraction-of-a-mixed-tensor
- lem-cm-determinant-derivative-along-a-matrix-curve
- thm-continuous-on-a-rectangle-is-riemann-integrable
- thm-riemann-fubini-on-product-rectangles
- thm-ftc-second-part
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-smooth-tensor-field: mathematical-premise
  def-bilinear-symmetric-skew-and-alternating-forms: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-contraction-of-a-mixed-tensor: mathematical-premise
  lem-cm-determinant-derivative-along-a-matrix-curve: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-ftc-second-part: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
    url: https://arxiv.org/pdf/gr-qc/9712019v1
    locator: §3, equations (3.19)–(3.21), printed pp. 59–60 (PDF pp. 66–67), and §4, equations (4.56)–(4.66), printed pp. 114–116 (PDF pp. 121–123); the connection and weighted coordinate first variation are reconstructed locally below in ten dimensions.
  - title: H. S. Reall, Part III General Relativity, Cambridge, 12 October 2022 revision
    url: https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf
    locator: §9.2, equations (9.21)–(9.25), printed pp. 114–115; compact-support Hilbert variation, with dimension-independent
      local algebra.
aliases: []
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $U\subseteq\mathbb R^{10}$ be an open oriented coordinate domain in a smooth ten-manifold. For $s$ in an open interval about $0$, let $g(s)$ be a family of smooth nondegenerate Lorentzian metrics of inertia $(9,1,0)$, jointly smooth in $(s,x)$, with $g(0)=g$ and $g(s)=g$ outside one fixed compact set $K\subset U$. Put $q^{MN}:=\left.\partial_s g(s)^{MN}\right|_{s=0}$. For each $s$ use the connection with coefficients $\Gamma^P{}_{MN}(s)=\tfrac12g(s)^{PQ}(\partial_Mg(s)_{NQ}+\partial_Ng(s)_{MQ}-\partial_Qg(s)_{MN})$: for vector fields, $(\nabla_XY)^P=X^M(\partial_MY^P+\Gamma^P{}_{MN}Y^N)$. On scalars set $\nabla_Xf=X(f)$ and extend to covariant tensors by duality and the product rule. This is the torsion-free metric-compatible (Levi-Civita) connection, as verified below. All unmarked quantities are evaluated at $s=0$. Fix the curvature convention $R^P{}_{QMN}=\partial_M\Gamma^P_{NQ}-\partial_N\Gamma^P_{MQ}+\Gamma^P_{MR}\Gamma^R_{NQ}-\Gamma^P_{NR}\Gamma^R_{MQ}$, $R_{QN}=R^P{}_{QPN}$, and $R=g^{QN}R_{QN}$. Write $w(s)=\sqrt{|\det(g(s)_{MN})|}$, $w=w(0)$, $G_{MN}=R_{MN}-\tfrac12g_{MN}R$, and $\Box f=g^{MN}\nabla_M\nabla_Nf$. Let $f\in C^\infty(U)$ be independent of $s$, and define the bulk first variation by

$$\delta S_f[g](q):=\left.\frac{d}{ds}\right|_{s=0}\int_U\bigl(w(s)fR(s)-wfR\bigr)\,d^{10}x.$$

The density difference is supported in $K$, so this integral is finite even when either unvaried action integral is not. Every smooth compactly supported symmetric $q^{MN}$ is admissible: the inverse-metric path $g(s)^{MN}=g^{MN}+s q^{MN}$ remains Lorentzian for sufficiently small $|s|$, since the support of $q$ is compact and the Lorentzian matrices form an open set. The bulk first variation is

$\delta\int_U w fR\,d^{10}x=\int_U w\left[fG_{MN}+g_{MN}\Box f-\nabla_M\nabla_Nf\right]q^{MN}\,d^{10}x.$

This is a local bulk identity for compactly supported variations; no boundary condition on the unvaried region is needed.

## Statement references

[[def-smooth-manifold]]

[[def-oriented-smooth-manifold-and-oriented-chart]]

[[def-smooth-tensor-field]]

[[def-affine-connection-on-a-smooth-manifold]]

[[def-christoffel-symbols-of-an-affine-connection]]

[[lem-cm-determinant-derivative-along-a-matrix-curve]]

## Facts & Assumptions

**Given:** The ten-dimensional chart, metric, connection, curvature convention, scalar $f$, and compactly supported smooth symmetric variation $q^{MN}$ in the Statement.

[F1] [[lem-cm-determinant-derivative-along-a-matrix-curve]]: for an invertible differentiable matrix curve, $\delta\det g=\det(g)\operatorname{tr}(g^{-1}\delta g)$; differentiating $g^{MP}g_{PN}=\delta^M_N$ gives $\delta g_{MN}=-g_{MP}g_{NQ}q^{PQ}$.

[F2] [[def-affine-connection-on-a-smooth-manifold]] supplies the affine-connection linearity and Leibniz rules; [[def-christoffel-symbols-of-an-affine-connection]] supplies the convention $\nabla_{\partial_M}\partial_N=\Gamma^P{}_{MN}\partial_P$. Neither definition supplies metric compatibility or zero torsion. The coefficients used here are defined in the Statement, and their required properties are proved in step 1.1.

[L1] If $V^M$ is a smooth compactly supported vector field on $U$, then $\int_U\partial_M(wV^M)\,d^{10}x=0$: extend $wV^M$ by zero to a closed coordinate box containing its support. The extension and its derivatives are smooth, hence integrable by [[thm-continuous-on-a-rectangle-is-riemann-integrable]]. Apply [[thm-riemann-fubini-on-product-rectangles]] to integrate each coordinate derivative along its coordinate lines; [[thm-ftc-second-part]] gives zero because the extension vanishes near both endpoints. From [F1] and the Christoffel formula in the Statement, $\Gamma^M{}_{MP}=w^{-1}\partial_Pw$, so $w\nabla_MV^M=\partial_M(wV^M)$.

## Proof

1.1 The inverse metric is jointly smooth: each entry is a cofactor divided by the nonzero determinant. Thus the displayed coefficients are smooth and the formula for $\nabla_XY$ directly satisfies the affine-connection rules in [F2]. Their symmetry in $M,N$ gives zero torsion, and substitution gives $\partial_Mg_{NQ}=\Gamma^P{}_{MN}g_{PQ}+\Gamma^P{}_{MQ}g_{NP}$, hence $\nabla g=0$, for every $s$. Conversely, cyclically permuting this identity and using symmetry recovers the displayed coefficients, proving uniqueness on $U$. Put $h_{MN}=\delta g_{MN}=-g_{MP}g_{NQ}q^{PQ}$ by [F1]; then $\delta w=-\tfrac12wg_{MN}q^{MN}$. Write $C^P{}_{MN}=\delta\Gamma^P{}_{MN}$. Differentiating metric compatibility gives $\nabla_Mh_{NQ}=C^P{}_{MN}g_{PQ}+C^P{}_{MQ}g_{NP}$; combining its three cyclic versions and using $C^P{}_{MN}=C^P{}_{NM}$ yields $C^P{}_{MN}=\tfrac12g^{PQ}(\nabla_Mh_{NQ}+\nabla_Nh_{MQ}-\nabla_Qh_{MN})$. [given, F1, F2, algebra]

2.1 Differentiating the stated coordinate formula for $R^P{}_{QMN}$ and grouping the connection terms into covariant derivatives gives $\delta R_{QN}=\nabla_P\delta\Gamma^P_{NQ}-\nabla_N\delta\Gamma^P_{PQ}$. Contracting with $g^{QN}$ and inserting step 1.1 yields $\delta R=R_{MN}q^{MN}-\nabla_M\nabla_Nq^{MN}+\Box(g_{MN}q^{MN})$. The first identity follows by cancellation of the quadratic-connection terms in the curvature derivative; the second uses $\nabla g=0$. [F2, step 1.1, algebra]

3.1 Joint smoothness and the common compact support permit differentiation under the integral: on a closed coordinate box containing $K$, the difference quotients of the zero-extended density difference converge uniformly to its $s$-derivative by the one-variable fundamental theorem of calculus and uniform continuity of that derivative. Varying $wfR$, the density and algebraic curvature terms are $w f(R_{MN}-\tfrac12g_{MN}R)q^{MN}$. The two remaining terms from step 2.1 integrate by parts twice, with no boundary contribution because $q$ has compact support: $\int wf[-\nabla_M\nabla_Nq^{MN}+\Box(g_{MN}q^{MN})]=\int w[g_{MN}\Box f-\nabla_M\nabla_Nf]q^{MN}$. By [L1], compactly supported coordinate divergences integrate to zero; the Christoffel trace identity in [L1] converts the covariant divergence to a coordinate divergence. The scalar Hessian is symmetric because the connection is torsion-free, so the twice-integrated coefficient has the displayed index order. Adding these coefficients proves the formula. [given, L1, step 1.1, step 2.1, algebra] ∎
