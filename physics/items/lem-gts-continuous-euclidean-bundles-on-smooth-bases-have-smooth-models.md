---
id: lem-gts-continuous-euclidean-bundles-on-smooth-bases-have-smooth-models
kind: lemma
title: Continuous Euclidean bundles on smooth bases have smooth isometric models
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
axiom_strength: ZF + full AC.
deps:
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - def-axiom-of-choice
dependency_roles:
  def-given-spin-and-spinc-structures-and-associated-spinor-bundles: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  lem-second-countable-smooth-manifolds-have-cw-homotopy-type: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Allen Hatcher, Vector Bundles and K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "§1.1 Propositions 1.2–1.4 and their proofs, printed pp. 11–13 (PDF pp. 15–17), for metrics, orthogonal complements and the partition-weighted embedding construction. The locally finite noncompact extension and smooth spectral projection below are proved locally, not statements imported from these compact embedding results."
    - title: Chris Wendl, Lecture Notes on Bundles and Connections, Chapter 2
      url: https://www.mathematik.hu-berlin.de/~wendl/pub/connections_chapter2.pdf
      locator: "§2.2 Smoothness, printed pp. 26–28 (PDF pp. 10–12), Definition 2.22, Proposition 2.24 and local smooth-frame/subbundle conventions. This supplies the smooth-bundle interpretation of the local projection construction, not an external smoothing theorem."
---

## Statement

Assume full AC. Let $M$ be a Hausdorff second-countable smooth manifold. Every continuous real or complex vector bundle $E\to M$ of fixed finite rank, with a continuous positive-definite Euclidean or Hermitian metric, is continuously isometrically isomorphic to a smooth metric bundle of the same rank. If $E$ is oriented, the model and isometry may be oriented. Hence frame bundles, Spin lifts and Spin-c lifts of an oriented Euclidean bundle may be transported to a smooth model without changing their isomorphism classes, central twisting actions, or characteristic classes. A continuous complex bundle without a specified metric admits one and therefore also admits a smooth model. No compactness or connectedness assumption on $M$ is imposed.

## Statement references

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]

[[thm-smooth-partitions-of-unity-exist-on-manifolds]]

[[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]

## Facts & Assumptions

**Given:** The bundle, base and metric of the Statement, and full AC.

[F1] Smooth partitions of unity exist subordinate to open covers of the stated smooth manifold; they are locally finite. [[thm-smooth-partitions-of-unity-exist-on-manifolds]]

[F2] The base is paracompact Hausdorff and second-countable. [[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]

[A1] Full AC supplies simultaneous local frame, point and cover choices. [[def-axiom-of-choice]]

## Proof

1.1 Choose a countable trivializing cover $(U_i)$ and a locally finite smooth partition $(\psi_i)$ with $\operatorname{supp}\psi_i\subset U_i$, using second countability and [F1]. If no metric is supplied, the locally finite sum of the chart metrics weighted by $\psi_i$ is a continuous positive-definite metric. Continuous Gram–Schmidt gives orthonormal frames on these charts. Put $\mathcal H=\ell^2(\mathbb N;\mathbb K^r)$, where $r$ is the rank and $\mathbb K$ is $\mathbb R$ or $\mathbb C$. If $v_i$ denotes the coordinate vector of $v\in E_x$ in frame $i$, define $J_xv=(\sqrt{\psi_i(x)}v_i)_i$, extending a coordinate by zero off $U_i$. The support containment makes these extensions continuous. Locally only finitely many coordinates occur, and $\|J_xv\|^2=\sum_i\psi_i(x)\|v\|^2=\|v\|^2$. Thus $J$ is a continuous fiberwise isometry. The orthogonal projection $P(x)$ onto $J_xE_x$ is norm-continuous and locally takes values in finite coordinate matrices; in an orthonormal local frame it is the sum of its $r$ rank-one projections. [F1, F2, A1, given, construct, algebra]

2.1 Cover $M$ by open sets $V_j$ with chosen points $x_j$ such that $\|P(x)-P(x_j)\|<1/8$ for $x\in V_j$, and choose a locally finite smooth subordinate partition $(\phi_j)$ by [F1]. Set $A(x)=\sum_j\phi_j(x)P(x_j)$. Every $P(x_j)$ has finite coordinate support, so locally $A$ is a smooth self-adjoint matrix on one fixed finite coordinate space, extended by zero on its orthogonal complement. Also $\|A(x)-P(x)\|<1/8$. On the complexification when $\mathbb K=\mathbb R$, define
$$Q(x)=\frac{1}{2\pi i}\int_{|z-1|=1/2}(z-A(x))^{-1}\,dz.$$
The projection $P$ has spectrum in $\{0,1\}$, so its resolvent on this circle has norm at most $2$. The Neumann series for the perturbation $A-P$ gives the resolvent of $A$ there with norm at most $2/(1-2/8)=8/3$. Diagonalizing the finite self-adjoint part of $A$ shows that the contour integral is its orthogonal projection onto the eigenvalues inside the circle. Outside that finite coordinate space the integral of $z^{-1}$ is zero. Thus $Q$ is an orthogonal finite-rank projection, locally a smooth finite matrix: inversion is smooth away from zero determinant and differentiation under the fixed compact contour is valid locally. For real $A$ the real symmetric diagonalization makes $Q$ real. The resolvent identity and the circle length $\pi$ give
$$\|Q(x)-P(x)\|\le\frac12\cdot\frac83\cdot\frac18\cdot2=\frac13.$$
Consequently $Q|_{\operatorname{im}P}$ and $P|_{\operatorname{im}Q}$ are injective: a vector in the kernel would satisfy $\|v\|\le\|P-Q\|\|v\|$. Hence both projections have rank $r$. [F1, A1, step 1.1, construct, algebra]

3.1 The images of the smooth rank-$r$ matrices $Q(x)$ form a smooth subbundle $E'$ of the trivial coordinate Hilbert bundle, locally lying in a fixed finite-dimensional coordinate space. Indeed near a point choose $r$ columns of $Q$ independent there; the same minor stays nonzero nearby, and these smooth columns give a local frame. The map $T=QJ:E\to E'$ is a continuous bundle isomorphism. On $E$, $T^*T$ differs from the identity by norm at most $1/3$, so the binomial power series for $(T^*T)^{-1/2}$ converges locally uniformly and gives a continuous bundle endomorphism. Then $U=T(T^*T)^{-1/2}$ is an isometric bundle isomorphism. Transport the orientation through $U$ when one is specified; relative to smooth frames the resulting orientation sign is locally constant and therefore defines a smooth orientation. The metric on $E'$ is the restriction of the fixed coordinate metric. [step 1.1, step 2.1, construct, algebra]

4.1 The isometry $U$ identifies the oriented orthonormal frame bundles by sending each frame vector through $U$. Pullback along this fixed bundle isomorphism transports a principal Spin or Spin-c lift and its map to the frame bundle, and the inverse isometry gives the inverse operation. This also commutes with central tensor twisting. Characteristic classes depend only on the bundle isomorphism class. Rank zero gives the zero bundle directly; the empty base gives its empty bundles, and the construction works on all open components at once. These statements prove the claimed category comparison without assuming the original bundle was smooth. [step 3.1, construct, algebra] ∎

## Source-reading limit

The references document the partition-weighted embedding method and the smooth-bundle conventions. Hatcher’s finite-dimensional compact-base construction is adapted using a countable locally finite cover; the norm approximation, spectral projection and polar isometry are proved above. Neither reference is claimed to contain this entire smoothing statement, and no unavailable Husemoller theorem is imported. All countable local-finiteness and metric choices are made under the stated full AC premise.
