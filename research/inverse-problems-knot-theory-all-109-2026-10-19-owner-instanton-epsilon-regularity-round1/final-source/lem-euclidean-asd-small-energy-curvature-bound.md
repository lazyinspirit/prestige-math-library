---
id: lem-euclidean-asd-small-energy-curvature-bound
kind: lemma
title: "The small-energy interior curvature bound for Euclidean ASD connections"
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-small-critical-curvature-coulomb-gauges-on-four-balls
  - lem-weak-euclidean-asd-coulomb-connections-are-interior-smooth
  - thm-higher-order-sobolev-embedding
  - thm-extension-theorem-for-bounded-smooth-domains
  - thm-holder-inequality-for-integrals
  - lem-smooth-bump-between-concentric-euclidean-balls
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Terence Tao and Gang Tian, A singularity removal theorem for Yang–Mills fields in higher dimensions, §4 regularity argument"
      url: "https://arxiv.org/pdf/math/0209352"
---

## Statement

Assume full AC. There exist constants $\epsilon,C>0$ such that every smooth $\mathfrak{su}(2)$ connection form $A$ near the closed Euclidean ball $\overline B_r(x)\subset\mathbb R^4$ satisfying $F_A^+=0$ and $\|F_A\|_{L^2(B_r)}\le\epsilon$ obeys
$$r^2\|F_A\|_{L^\infty(B_{r/2}(x))}\le C\|F_A\|_{L^2(B_r(x))}.$$
The constants are independent of the ball and of $A$. Here anti-self-duality and the norms use the standard Euclidean metric and orientation. No general curved-metric, perturbed or singular ASD equation, energy quantization, or removable-singularity conclusion is asserted.

## Statement references

[[lem-small-critical-curvature-coulomb-gauges-on-four-balls|Constructed critical gauge]]

[[lem-weak-euclidean-asd-coulomb-connections-are-interior-smooth|Constructed first-order ASD regularity]]

## Facts & Assumptions

[F1] On $B_1$, the proved small-curvature gauge theorem constructs $a=A^g$ with $\|a\|_4+\|a\|_{W^{1,2}}\le C_0\|F_A\|_2$, $a$ Coulomb, and $g$ unitary. Its curvature identity gives $F_a=g^{-1}F_Ag$, including preservation of ASD and pointwise curvature norms ([[lem-small-critical-curvature-coulomb-gauges-on-four-balls]]).

[F2] The full proof of [[lem-weak-euclidean-asd-coulomb-connections-are-interior-smooth]] supplies explicit operators $D$, $Q(a)$, and $K$ with $Da=Q(a)a$, $|Q(a)v|\le c|a||v|$, consistent bounds $\|Kf\|_4\le M_2\|f\|_2$ and $\|Kf\|_{12}\le M_3\|f\|_3$, and the actual weak-to-strong first-order estimate $\|\nabla v\|_p\le A_p\|Dv\|_p$ for compactly supported $v,Dv\in L^p$. Its compact-solution identification and two-contraction proof apply with any fixed pair of interior cutoff balls for which $c\|a\|_4\max(M_2,M_3)\le1/2$. It also proves that the given weak Coulomb ASD form is interior smooth.

[F3] Fixed concentric-ball cutoffs have finite derivative bounds. Holder controls all products and bounded-set exponent comparisons below. Balls are extension domains, and $W^{1,6}\hookrightarrow L^\infty$ there; applying this to the first derivatives bounds the $C^1$ norm by the $W^{2,6}$ norm ([[lem-smooth-bump-between-concentric-euclidean-balls]], [[thm-holder-inequality-for-integrals]], [[thm-higher-order-sobolev-embedding]], [[thm-extension-theorem-for-bounded-smooth-domains]]).

[F4] Full AC is inherited from these suppliers ([[def-axiom-of-choice]]).

## Proof

**Given:** The smooth Euclidean ASD connection and ball of the statement. Work first on $B_1(0)$, and write $t=\|F_A\|_2$.

1.1 **A genuine critical gauge with fixed smallness.** Choose $\epsilon\le1$ below the threshold of [F1] and so that $cC_0\epsilon\max(M_2,M_3)\le1/2$. The actual construction [F1] gives a weak Coulomb ASD form $a$ with $\|a\|_4+\|a\|_{W^{1,2}}\le C_0t$. By [F2] it has an interior smooth representative. This step uses small curvature to construct the gauge and obtains small potential as a conclusion; it assumes no radial critical potential estimate. [F1, F2, F4, given, choose, construct]

2.1 **Quantitative critical improvement.** Choose a fixed smooth cutoff $\chi$ supported in $B_1$ and equal to one near $\overline B_{7/8}$. The compact form $v=\chi a$ obeys $Dv=Q(a)v+f$, with $f=\sum_kC_k(\partial_k\chi)a$. Its compact-solution identity and the two-contraction construction in [F2] give $\|v\|_{12}\le M_3\|f\|_3+\tfrac12\|v\|_{12}$, hence $\|a\|_{L^{12}(B_{7/8})}\le2M_3\|f\|_3\le C\|a\|_{L^4(B_1)}\le Ct$. The penultimate inequality uses the fixed cutoff derivative and finite-volume Holder comparison. Every constant here is fixed before $A$ is chosen. [F2, F3, step 1.1, choose, algebra]

3.1 **A quantitative supercritical derivative estimate.** Choose a fixed cutoff $\psi$ supported in $B_{7/8}$ and equal to one near $\overline B_{3/4}$. Then $D(\psi a)=\psi Q(a)a+\sum_kC_k(\partial_k\psi)a$. By step 2.1 and Holder, its $L^6$ norm is at most $C(t^2+t)\le Ct$, since $t\le\epsilon\le1$. Also $\|\psi a\|_6\le Ct$. Apply the actual first-order estimate in [F2] at $p=6$ to obtain $\|a\|_{W^{1,6}(B_{3/4})}\le Ct$. Embedding [F3] therefore gives $\|a\|_{L^\infty(B_{3/4})}\le Ct$. [F2, F3, step 1.1, step 2.1, choose, algebra]

4.1 **One more derivative gives the curvature bound.** Choose a fixed cutoff $\eta$ supported in $B_{3/4}$ and equal to one near $\overline B_{5/8}$. The product formula, the bound in step 3.1 and [F3] give $\|Q(a)a\|_{W^{1,6}(B_{3/4})}\le C\|a\|_{W^{1,6}(B_{3/4})}^2\le Ct^2$: a derivative of the quadratic term has one bounded factor and one $L^6$ factor. Consequently $\|D(\eta a)\|_{W^{1,6}}\le C(t+t^2)\le Ct$. Apply the first-order estimate [F2] to each compactly supported first derivative $\partial_j(\eta a)$, using the commutation $D\partial_j=\partial_jD$, and also to $\eta a$ itself. This gives $\|a\|_{W^{2,6}(B_{5/8})}\le Ct$. By [F3], $\|a\|_{L^\infty(B_{1/2})}+\|\nabla a\|_{L^\infty(B_{1/2})}\le Ct$. Therefore $\|F_a\|_{L^\infty(B_{1/2})}\le C(t+t^2)\le Ct$, using $F_a=da+a\wedge a$ and the bracket bound. Unitarity in [F1] gives the identical bound for $F_A$. [F1, F2, F3, step 1.1, step 3.1, choose, algebra]

5.1 **Every center and scale.** Pull back by $y\mapsto x+ry$ to obtain $A_r(y)=rA(x+ry)$. Euclidean ASD is preserved by this orientation-preserving dilation. Its curvature is $F_{A_r}(y)=r^2F_A(x+ry)$, so $\|F_{A_r}\|_2=\|F_A\|_2$ and $\|F_{A_r}\|_{L^\infty(B_{1/2})}=r^2\|F_A\|_{L^\infty(B_{r/2}(x))}$. Applying step 4.1 proves the statement with the same constants. Full AC is inherited through [F1]–[F4]. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1, construct, algebra] ∎

## Source notes

Tao–Tian's full Lemma 4.7 proof and subsequent regularity discussion, PDF pp.17–19, were read. This quantitative Euclidean ASD bound is proved from the actual newly constructed gauge and first-order inverse modules. The two fixed-exponent gains and one differentiated estimate provide all displayed constants without invoking omitted elliptic bootstrapping, a quoted mean-value inequality, or a radial curvature-to-potential bound. Singular removal and general instanton compactification still require further proofs.
