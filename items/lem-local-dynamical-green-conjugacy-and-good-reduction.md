---
dependency_level: 4
id: lem-local-dynamical-green-conjugacy-and-good-reduction
kind: lemma
title: "Local Green kernel invariance and nonnegativity at potential good reduction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-local-dynamical-green-function
  - lem-local-homogeneous-dynamical-height-and-filled-julia-set
  - lem-binary-map-resultant-linear-conjugacy
  - def-good-and-potential-good-reduction-rational-map
  - def-algebraically-closed-field
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, \u00a73.1, Lemma 3.16 and Appendix A, Lemma A.3"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---
## Statement

For a nonarchimedean valued field $L$ and a nondegenerate homogeneous degree-$d$ binary map $F$, the classical kernel $g_\phi$ is independent of all lifts and is symmetric. If $M\in\operatorname{GL}_2(L)$ and $F'=M^{-1}\circ F\circ M$, then
$$H_{F'}(z)=H_F(Mz),\qquad K_{F'}=M^{-1}K_F,\qquad g_{M^{-1}\phi M}(P,Q)=g_\phi(MP,MQ).$$
The kernel is unchanged on extending the absolute value to a supplied field extension. If $\phi$ has potentially good reduction, then $g_\phi(P,Q)\ge0$ for every pair of $L$-points. If $L$ is algebraically closed and $\phi$ has good reduction after conjugacy, any given lift $F$ admits a linear conjugate with good reduction. None of these assertions requires a complete field.

## Statement references

[[def-local-dynamical-green-function]]

[[def-good-and-potential-good-reduction-rational-map]]

## Facts & Assumptions

**Given:** The valued field, binary map and conjugating matrix in the statement.

[F1] Local homogeneous heights exist, are logarithmically homogeneous, obey $H_F(Fz)=dH_F(z)$, and characterize $K_F$ by $H_F\le0$. At good reduction $H_F(z)=\log\|z\|$. ([[lem-local-homogeneous-dynamical-height-and-filled-julia-set]])

[F2] $R_{cF}=c^{2d}R_F$ and $R_{M^{-1}FM}=\det(M)^{d(d-1)}R_F$. ([[lem-binary-map-resultant-linear-conjugacy]])

[F3] The kernel is the wedge-and-height expression of the definition, and potential good reduction supplies a finite valued extension and a conjugate with an integral unit-resultant lift. ([[def-local-dynamical-green-function]], [[def-good-and-potential-good-reduction-rational-map]])

## Proof

1.1 Replacing lifts $z,w$ by $az,bw$ changes the negative wedge logarithm by $-\log|a|-\log|b|$ and the two heights by the opposite quantity, by [F1]. For a scalar $c\ne0$, induction gives $(cF)^{\circ n}(z)=c^{(d^n-1)/(d-1)}F^{\circ n}(z)$, whence $H_{cF}(z)=H_F(z)+\log|c|/(d-1)$. By [F2] the resultant term changes by $-2\log|c|/(d-1)$, cancelling the two height changes. Two degree-$d$ homogeneous lifts of the same rational map differ by a common nonzero scalar: cross multiplication of the reduced coprime numerator-denominator pairs makes each pair divide the other, and equal degrees leave only a scalar. Thus all choices cancel. Interchanging $z,w$ changes the wedge only by a sign and proves symmetry. [F1, F2, F3, algebra]

1.2 The entries of $M$ and $M^{-1}$ give constants $a,b>0$ with $a\|z\|\le\|Mz\|\le b\|z\|$. Since $F^{\circ n}M=M(F')^{\circ n}$, dividing the logarithms of these inequalities by $d^n$ and taking limits gives $H_{F'}(z)=H_F(Mz)$. This identity and [F1] prove the filled-Julia assertion. Also $Mz\wedge Mw=\det(M)(z\wedge w)$; together with [F2] its extra logarithm cancels the resultant change, giving kernel conjugacy. An absolute-value extension preserves each iterate norm and each wedge and resultant value of vectors over $L$, so preserves the limits and kernels there. [F1, F2, F3, algebra]

2.1 If a lift has good reduction, [F1] gives $g_\phi(P,Q)=-\log(|z\wedge w|/(\|z\|\|w\|))\ge0$, because $|R_F|=1$ and the ultrametric inequality bounds the wedge by $\|z\|\|w\|$. For potential good reduction use the supplied extension, then conjugacy from step 1.2 and lift independence from step 1.1 to apply this calculation to the good lift. The diagonal value is already $+\infty$. [F1, F3, step 1.1, step 1.2, algebra]

2.2 Finally let $L$ be algebraically closed and let $M_0$ conjugate the map to good reduction. A good lift of that map is $cM_0^{-1}FM_0$ for some $c\ne0$. Choose $a\in L^\times$ with $a^{d-1}=c$ and set $M=aM_0$. Homogeneity gives $M^{-1}FM=a^{d-1}M_0^{-1}FM_0$, the chosen good lift. This uses only extraction of a root of a nonconstant polynomial, valid in every characteristic. [F3, step 1.1, algebra] ∎
