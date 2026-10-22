---
id: lem-symmetric-product-quotient-determinant-has-vandermonde-ramification
kind: lemma
title: "The symmetric-product quotient determinant has Vandermonde ramification"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-relative-strip-maslov-determinant-excision-and-local-models
  - lem-finite-surface-section-index-and-relative-intersection-homotopy
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume Countable Choice. Let $\Sigma$ be a closed Riemann surface and $m\ge1$. Give $X=\operatorname{Sym}^m(\Sigma)$ its usual complex charts of elementary symmetric coordinates in disjoint support disks. Let $q:\Sigma^m\to X$ be the quotient and $p_i:\Sigma^m\to\Sigma$ its factor projections. For $i<j$ let $\Delta_{ij}=\{z_i=z_j\}$, and put $R=\sum_{i<j}\Delta_{ij}$, with coefficient one on every pair diagonal, including at their intersections. Then there is a holomorphic line-bundle isomorphism
$$q^*\det_{\mathbb C}(TX)\cong\left(\bigotimes_{i=1}^m p_i^*T\Sigma\right)\otimes\mathcal O(R).$$
Under this isomorphism the holomorphic section $\det(dq)$ of
$$\operatorname{Hom}_{\mathbb C}\left(\bigotimes_i p_i^*T\Sigma,q^*\det_{\mathbb C}(TX)\right)$$
corresponds to the canonical divisor section of $\mathcal O(R)$. In particular its zero divisor is exactly $R$, even at tuples with three or more equal entries; no transverse-intersection or simple-branch hypothesis is needed for the bundle identity.

Here $\mathcal O(R)$ is constructed by the actual local defining functions in the proof. For a smooth map $F=(f_1,\ldots,f_m):C\to\Sigma^m$ from a closed oriented surface with supplied finite smooth triangle data, the identity implies the degree formula
$$\deg\bigl((qF)^*\det(TX)\bigr)=\sum_i\deg(f_i^*T\Sigma)+\sum_{i<j}\deg\bigl((f_i,f_j)^*\mathcal O(\Delta)\bigr),$$
where $\Delta\subset\Sigma\times\Sigma$ is the ordinary diagonal. Degree means the finite face-winding degree of a complex line bundle. Whenever a pulled-back diagonal section has finitely many isolated zeros, its degree is the sum of their signed local winding indices; at a transverse coincidence this is the sign of $d(f_i-f_j)$ in an oriented surface coordinate. Degrees remain defined if two maps coincide identically.

For $m=1$ the empty divisor has its trivial line and constant section one; $q$ is the identity. For $m=0$ all determinants and tensor products over the one-point symmetric product are trivial and the degree formula is zero. This result does not identify the diagonal class in surface cohomology, compute a sphere's degree, prove a Maslov/domain formula, or realize arbitrary Whitney classes by incidence covers.

## Facts & Assumptions

**Given:** The Riemann surface, its actual symmetric-product charts, the quotient map and, in the degree assertion, the supplied finite triangulated source and smooth map.

[F1] The elementary symmetric coefficient map in $r$ variables has determinant a nonzero constant times $\prod_{a<b}(z_a-z_b)$. The alternating-polynomial and evaluation-at-distinct-roots proof is supplied in the actual local strip-index model. ([[lem-relative-strip-maslov-determinant-excision-and-local-models]], Proof2.3)

[F2] Finite face frames, winding addition, edge cancellation, zero-index excision and independence under continuous section homotopies are supplied without extra choice by the finite surface index proof. ([[lem-finite-surface-section-index-and-relative-intersection-homotopy]], Proof1.1–3.1)

## Proof

1.1 Around an ordered tuple choose pairwise disjoint complex coordinate disks about its distinct support points, using the SAME coordinate for every factor with that support. Group its factors by these disks. On their product the target chart consists of the elementary symmetric coefficients of each group. Consequently $dq$ is block diagonal, up to a fixed permutation of its columns, with the coefficient-map blocks in [F1]. In the corresponding tangent and determinant frames its determinant is $$c\prod_{\text{groups }I}\prod_{i<j\in I}(z_i-z_j),\qquad c\ne0.$$ Factors in different groups cannot coincide in this chart. This is an equality of holomorphic functions on the whole product chart, not merely on the distinct-root locus. Its coefficient $c$ is constant and nonzero, so there is no further zero at a higher collision. Each pair factor has multiplicity one as a divisor, even though several factors can vanish at one tuple. [F1, given, algebra]

1.2 We spell out the degree convention and its consequences. On a finite triangulated oriented closed surface choose a nonzero section $r$ of a line bundle along the entire edge graph. Such a section exists by the finite vertex and edge interpolation of [F2]. Frame the bundle on each closed face by its finite disk-frame construction. Define its degree as the sum over faces of the counterclockwise winding of the coordinate of $r$ on that face boundary. Changing a face frame changes its boundary winding by zero, since a nonzero disk function contracts radially. For another graph section $r'$, the ratio $r'/r$ is one nonzero function on the graph; its argument changes on every edge cancel between the two incident oriented faces. Thus the sum is independent of $r$ as well. Refining the supplied triangles does not change it, by the same cancellation on the new edges. Isomorphisms preserve this integer. Tensor products add it, by using tensor-product graph sections and face frames; a trivial line has degree zero. If a section has finitely many isolated zeros, choose graph perturbations missing those finitely many points and use that section for $r$. The finite zero excision in [F2] gives exactly the sum of its local indices, and refinements or graph perturbations do not change the degree by the cancellation just proved. The same computation works with a finite disk subdivision containing those small zero disks. [F2, construct, algebra]

2.1 Each pair diagonal has compatible local defining functions. Where two factors lie in one coordinate disk use $a_{ij}=z_i-z_j$; where their small coordinate disks are disjoint use the nonvanishing function one on that product chart. On overlapping coordinate disks a change $w=h(z)$ gives $$h(z_i)-h(z_j)=(z_i-z_j)u(z_i,z_j),$$ where $u$ is holomorphic and nonzero after shrinking about the diagonal: its extension on the diagonal is $h'(z_i)\ne0$. For example its power series is obtained by dividing the convergent series for the difference by $z_i-z_j$; away from the diagonal the ordinary quotient is already holomorphic. On intersections disjoint from the diagonal every relevant defining function is a unit. Thus products of the local pair definers give local functions $a_A$ for $R$ whose ratios are holomorphic units, including on overlaps containing higher collisions. Declare frames $e_A$ with transition $e_B=(a_A/a_B)e_A$. The expressions $a_Ae_A$ then agree and define a global holomorphic section $s_R$ of a line bundle $\mathcal O(R)$. The cocycle law is the literal cancellation of these ratios. Multiplying the pairwise transitions also identifies $\mathcal O(R)$ with the tensor product of their individual diagonal lines. No normal-crossing assumption on the union is used. [step 1.1, construct, algebra]

3.1 Write $L=\operatorname{Hom}_{\mathbb C}(\bigotimes_i p_i^*T\Sigma,q^*\det(TX))$ and $s=\det(dq)$. In a local frame $\ell_A$ of $L$, step1.1 writes $s=a_Au_A\ell_A$ with $u_A$ a holomorphic unit, after taking the defining product of step2.1 in the same charts. Define $\mathcal O(R)\to L$ there by $e_A\mapsto u_A\ell_A$. On the complement of the pair diagonals these maps are uniquely characterized by sending $s_R$ to $s$, and therefore agree on chart overlaps there. That complement is dense: finitely many coordinate equalities have empty interior. The maps agree everywhere by continuity, and are invertible since every $u_A$ is a unit. They give the claimed global holomorphic isomorphism. Tensoring by $\bigotimes_i p_i^*T\Sigma$ gives the displayed determinant identity. In particular this argument does not divide by a vanishing function without its proved holomorphic unit quotient. [step 1.1, step 2.1, construct, algebra]

4.1 Pull the bundle identity of step3.1 back by $F$ and apply the tensor-additivity of step1.2. Each pair line is the pullback of the diagonal line on $\Sigma\times\Sigma$, since their defining functions are the same coordinate differences; hence this gives precisely the asserted degree formula. At a coincidence its canonical section is locally $z(f_i)-z(f_j)$ in a nonvanishing frame. If that zero is transverse, its restriction to a small positive circle deforms through nonzero values to its invertible real derivative, whose winding is its orientation sign by [F2]. This proves the stated intersection interpretation when the zeros are isolated. If a section vanishes identically, step1.2 still defines the degree by a nonzero graph section, so the bundle identity and degree formula remain valid without a fictitious zero count. Finally for $m=1$ every product in step1.1 is empty and $dq$ is the identity; for $m=0$ all bundles are over a point and trivial. These checks prove the two edge cases and complete exactly the determinant and finite degree assertions, without a sphere-index or arbitrary-class conclusion. [F2, step 2.1, step 3.1, step 1.2, algebra] ∎
