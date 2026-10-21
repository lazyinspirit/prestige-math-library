---
id: lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
kind: lemma
title: Complete curvature minus one three-manifolds are Kleinian quotients
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-cartan-hadamard
  - thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields
  - prop-curvature-tensor-of-constant-sectional-curvature
  - thm-existence-and-uniqueness-of-parallel-sections
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume
  - lem-hyperbolic-three-space-quasi-isometry-has-quasiconformal-boundary
proof_strategy: direct
axiom_use: Full AC supplies the inherited countable-choice assumptions of the covering, exponential and Jacobi interfaces.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Michael Kapovich, Hyperbolic Manifolds and Discrete Groups
      url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
      locator: Chapter 3, models and isometries of hyperbolic space; the radial metric and matrix identification used here are proved directly
dependency_level: 2
---

## Statement

Assume AC. Every nonempty connected oriented complete Riemannian three-manifold of constant sectional curvature $-1$ is isometric to $\Gamma\backslash\mathbb H^3$ for a discrete torsion-free subgroup $\Gamma\le\mathrm{PSL}_2(\mathbb C)$. The covering is a universal Riemannian covering and identifies $\Gamma$ with the fundamental group up to the usual basepoint conjugacies. Its completeness and quotient presentation are conclusions from the stated metric hypotheses. The orientation-preserving isometry group of the model is $\mathrm{PSL}_2(\mathbb C)$ with its usual Möbius boundary action.

## Facts & Assumptions

**Given:** AC and the nonempty connected oriented complete curvature-$-1$ three-manifold $(M,g)$.

[A1] Full choice is [[def-axiom-of-choice]] and supplies all the stated countable-choice hypotheses.

[F1] Cartan–Hadamard makes $\exp_p:(T_pM,\exp_p^*g)\to M$ a universal Riemannian covering, with complete source. [[thm-cartan-hadamard]]

[F2] Differentials of exponential maps are Jacobi fields with the specified initial data. The constant-curvature tensor is $R(X,Y)Z=-(g(Y,Z)X-g(X,Z)Y)$; supplied vectors have unique parallel extensions, these preserve inner products, and Jacobi fields are uniquely determined by their initial value and covariant derivative. [[thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields]], [[prop-curvature-tensor-of-constant-sectional-curvature]], [[thm-existence-and-uniqueness-of-parallel-sections]], [[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]], [[prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]]

[F3] The upper half-space distance, ball model, complete-geodesic uniqueness, and isometric extension of every Möbius transformation are calculated locally in the boundary-extension supplier. [[lem-hyperbolic-three-space-quasi-isometry-has-quasiconformal-boundary]]

## Proof

1.1 Choose $p\in M$ and an oriented orthonormal identification $T_pM\cong\mathbb R^3$. By [F1], the pulled-back metric on this whole tangent space is complete and covers $M$. In polar coordinates $(r,\omega)$, let $T$ be the unit radial velocity and extend $v\perp\omega$ to a parallel field $E$ along that radial geodesic by [F2]. Parallel transport preserves inner products, so $E\perp T$ and $|E|=|v|$. The explicit field $J(r)=\sinh r\,E(r)$ has $J(0)=0$, $D_rJ(0)=v$, and $D_r^2J=\sinh r\,E$ while $R(J,T)T=-J$; hence $D_r^2J+R(J,T)T=0$. Jacobi initial-data uniqueness and the exponential differential formula in [F2] identify this field with the angular variation. Its length is therefore $\sinh r\,|v|$. Its inner products are $\sinh^2r$ times the sphere metric because parallel transport preserves inner products. Radial velocity has length one and is orthogonal to these normal fields. Thus the pulled-back metric is exactly $dr^2+\sinh^2r\,d\omega^2$. The map $(r,\omega)\mapsto(\cosh r,\sinh r\,\omega)$ identifies it with the future unit hyperboloid of Minkowski space; differentiation gives that same metric, and it extends smoothly and bijectively at the origin. The hyperboloid is the upper half-space model via $y=1/(x_0-x_3)$ and $z=(x_1+ix_2)/(x_0-x_3)$, whose inverse is obtained by solving these equations and $x_0^2-|x'|^2=1$; direct differentiation gives the upper half-space metric. Thus [F1]'s source is isometric to $\mathbb H^3$. [A1, F1, F2, construct, algebra]

2.1 We verify the full orientation-preserving isometry group. Identify the hyperboloid with the positive Hermitian determinant-one matrices by $x\mapsto x_0I+x_1\sigma_1+x_2\sigma_2+x_3\sigma_3$, where the Pauli matrices satisfy $\sigma_i\sigma_j=\delta_{ij}I+i\sum_k\varepsilon_{ijk}\sigma_k$. The determinant is $x_0^2-|x'|^2$. The action $X\mapsto AXA^*$ of $A\in\mathrm{SL}_2(\mathbb C)$ preserves the future hyperboloid and its metric; its kernel is $\{I,-I\}$. It is transitive, because every positive Hermitian determinant-one matrix has a positive Hermitian square root of determinant one, obtained by diagonalizing a two-by-two Hermitian matrix. The stabilizer of $I$ is $\mathrm{SU}(2)$. On the tangent space of traceless Hermitian matrices it realizes every rotation. Indeed, for a real unit vector $n$, the matrix $U=\cos(\theta/2)I+i\sin(\theta/2)\,n\cdot\sigma$ is unitary of determinant one; the displayed Pauli identity shows its conjugation gives the rotation about $n$ through angle $-\theta$. Every three-dimensional proper orthogonal matrix has an axis and is a planar rotation on its orthogonal complement, so these realize all of $\mathrm{SO}(3)$. An isometry fixing a point and its tangent frame fixes every geodesic from that point, hence every point by the polar description in step 1.1. Therefore every orientation-preserving model isometry comes from this projective matrix group. Its boundary action on rank-one Hermitian matrices $vv^*$ is $[v]\mapsto[Av]$, the usual fractional linear action on $\mathbb{CP}^1$. This is the Möbius action in [F3]. [F3, step 1.1, algebra]

3.1 The deck group of [F1]'s universal cover acts by isometries of the pulled-back metric and preserves its pulled-back orientation. It is therefore a subgroup of the group in step 2.1. It acts freely, since a deck transformation fixing one point fixes every lifted path from that point, hence the connected cover. It is discrete and properly discontinuous: an evenly covered neighborhood has disjoint lifted neighborhoods and a deck transformation intersecting one with itself must be the identity. Such transformations form an isolated neighborhood of the identity in the matrix topology by continuity of evaluation at a point. The group is torsion-free: a finite-order model isometry has a fixed point. In the hyperboloid model, sum the finitely many orbit vectors of any point and normalize their future timelike sum; this is a fixed point. Finally, universal covering path lifting identifies the deck group with $\pi_1(M)$ and its orbit quotient with $M$. Under this identification the metric and orientation descend exactly to the given ones, proving the assertion. [F1, step 1.1, step 2.1, construct] ∎
