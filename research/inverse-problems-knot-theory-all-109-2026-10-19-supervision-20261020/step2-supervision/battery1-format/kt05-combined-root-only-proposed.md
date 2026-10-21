---
id: cex-knot-kt-05-boundary-case
kind: counterexample
title: The Alexander polynomial does not determine the prime knot summands
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-knot-connected-sum-and-prime-knot
  - thm-schubert-prime-decomposition-for-knots
  - lem-right-trefoil-is-prime
  - lem-mirroring-preserves-primality-of-a-knot
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-canonical-positive-three-crossing-braid-has-negative-trefoil-form
forward_refs:
  - def-knot-seifert-pairing-and-matrix
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - cor-alexander-polynomial-multiplies-under-connected-sum
  - def-levine-tristram-hermitian-form-and-signature
  - lem-seifert-stabilization-preserves-levine-tristram-signature
  - lem-positive-hopf-plumbing-has-trefoil-seifert-matrix
  - lem-seifert-matrices-of-a-knot-are-s-equivalent
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Burde and Zieschang, Knots, 2nd revised and extended edition
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf
      locator: Chapter 7, §§7.6–7.7 and §15.4, printed pp.94 and 254; granny and square knots
    - title: Stefan Friedl, Introduction to Knots and Links, 2024 lecture notes
      url: https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf
      locator: Chapter 11, §11.5, printed pp.166–168; connected-sum prime decomposition context
---

## Statement refuted

Assume the full Axiom of Choice. For an oriented Seifert surface $F\subset S^3$ with boundary $K$ and ordered basis $a_1,\ldots,a_{2g}$ of $H_1(F;\mathbb Z)$, let $V$ be the Seifert matrix with entries $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. Here $\operatorname{lk}$ is the integer linking number of disjoint oriented cycles in $S^3$, and $a_i^+$ is a small push-off in the positive normal direction, chosen so that the positive normal followed by the oriented basis of $F$ gives the orientation of $S^3$. Use the standard knot-invariant conventions $\Delta_K(t)=\det(V-tV^T)$ up to units $\pm t^k$ and $\sigma_{-1}(K)=\operatorname{sign}(2(V+V^T))$, where the matrix sign is the number of positive eigenvalues minus the number of negative eigenvalues; independence of the chosen surface and basis is part of the Seifert-form invariance theorems. Let $T$ be the standard right-handed trefoil, let $T^*$ be its image under a fixed orientation-reversing reflection of $S^3$, and let $-T^*$ be that image with reversed knot orientation. Define $G=T\#T$ and $Q=T\#(-T^*)$. Then $\Delta_G(t)\doteq\Delta_Q(t)\doteq(t^2-t+1)^2$, and $|\sigma_{-1}(G)|=4$ while $\sigma_{-1}(Q)=0$. The oriented prime-factor multisets of $G$ and $Q$ are different. Thus equality of Alexander polynomials does not determine the prime knot summands.

## Statement references

[[def-knot-connected-sum-and-prime-knot|Connected sums and prime knots]]

## Facts & Assumptions

**Given:** The full AC, knots $T,T^*,-T^*,G,Q$, positive-push and invariant conventions of the original Statement.

[A1] Full AC implies countable choice, as required by the prime and smooth knot suppliers. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The actual right-handed trefoil bounds the standard positive two-Hopf-band plumbing, whose positive-push matrix in its ordered core basis is $V=\left(\begin{smallmatrix}-1&0\\-1&-1\end{smallmatrix}\right)$. The handedness and negative diagonal signs are the established geometric convention, not the differently labeled positive matrix in the source-specific KT06 example. [[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix]], [[lem-canonical-positive-three-crossing-braid-has-negative-trefoil-form]]

[F2] For every knot Seifert surface with the same positive normal and positive-meridian convention, $\Delta_K(t)\doteq\det(V-tV^T)$. The actual boundary connected-sum surface has block matrix $V_K\oplus V_J$: the old bases lie in separated balls and both cross-linking blocks vanish. [[thm-seifert-determinant-is-the-knot-alexander-polynomial]], [[cor-alexander-polynomial-multiplies-under-connected-sum]], Proof2.1–4.1.

[F3] At every nonroot point $\omega$, the signature of $(1-\omega)V+(1-\bar\omega)V^T$ is an oriented knot invariant independent of surface and basis. The full knot-surface S-equivalence and stabilization proofs now establish this actual interface. [[def-levine-tristram-hermitian-form-and-signature]], [[lem-seifert-matrices-of-a-knot-are-s-equivalent]], [[lem-seifert-stabilization-preserves-levine-tristram-signature]]

[F4] The right trefoil is prime, reflection preserves nontriviality and primality, and the oriented prime decomposition is unique up to ordering and insertion/deletion of unknot factors. [[lem-right-trefoil-is-prime]], [[lem-mirroring-preserves-primality-of-a-knot]], [[thm-schubert-prime-decomposition-for-knots]], [[def-knot-connected-sum-and-prime-knot]]

## Refutation

**Given:** The actual right-trefoil matrix $V$ in [F1], with all the Statement's knot and orientation conventions.

1.1 By [F1] and [F2], $$\Delta_T(t)\doteq\det(V-tV^T)=\det\begin{pmatrix}t-1&t\\-1&t-1\end{pmatrix}=(t-1)^2+t=t^2-t+1.$$ For $-T^*$ use the reflected spanning surface with its surface orientation reversed, so its boundary is the reversed reflected knot. Its positive normal is the reflected original positive normal: ambient reflection and surface reversal each negate the orientation, so their effects cancel in the normal-first convention. Reflection negates linking. The transported homology basis on this actual surface consequently has matrix $-V$. Its determinant is $\det(-V+tV^T)=\det(V-tV^T)$, since the matrix size is two. The two determinants evaluate to $3$ at $t=-1$, so this parameter is nonroot and [F3] applies directly, with no root-average ambiguity. [A1, F1, F2, F3, given, construct, algebra]

2.1 By [F2], the actual boundary connected-sum surfaces of $G=T\#T$ and $Q=T\#(-T^*)$ have matrices $V\oplus V$ and $V\oplus(-V)$. Their block determinants both equal $(t^2-t+1)^2$, proving the two Alexander-polynomial identities up to units. Also $$H_{-1}(V)=2(V+V^T)=\begin{pmatrix}-4&-2\\-2&-4\end{pmatrix}.$$ Its eigenvalues on the vectors $(1,1)$ and $(1,-1)$ are $-6$ and $-2$, respectively. Thus $\sigma_{-1}(T)=-2$ and $\sigma_{-1}(-T^*)=2$. The corresponding block forms give $\sigma_{-1}(G)=-4$ and $\sigma_{-1}(Q)=-2+2=0$. These are actual knot-invariant values by [F3], since the sum polynomials at $-1$ equal $9\ne0$. In particular $|\sigma_{-1}(G)|=4$ as stated. [F1, F2, F3, step 1.1, construct, algebra]

3.1 By [F4], $T$ and $T^*$ are nontrivial prime oriented knots. Reversal of knot orientation also preserves these properties: reverse both factors and the two local oriented arcs in any purported nontrivial connected-sum presentation of $-T^*$ to obtain a nontrivial presentation of $T^*$; reversing again is the inverse operation, and the unknot remains the unknot. Thus $-T^*$ is prime. The signatures in step2.1 show that $T$ and $-T^*$ are distinct oriented knot types, since an oriented ambient isotopy would preserve [F3]'s signature. Therefore the displayed two-prime decompositions have respective multisets $\{T,T\}$ and $\{T,-T^*\}$, which are different. By [F4]'s actual oriented Schubert uniqueness they are the prime-factor multisets of $G$ and $Q$, independent of a chosen decomposition. Together with their equal Alexander polynomials, this proves the entire original refutation. No planned matrix interface or conditional prime/invariant premise remains. [A1, F3, F4, step 1.1, step 2.1, construct, algebra] ∎

## Sources

[[def-knot-connected-sum-and-prime-knot]]

[[thm-schubert-prime-decomposition-for-knots]]

[[lem-right-trefoil-is-prime]]

[[def-knot-seifert-pairing-and-matrix]]

[[thm-seifert-determinant-is-the-knot-alexander-polynomial]]

[[cor-alexander-polynomial-multiplies-under-connected-sum]]

[[def-levine-tristram-hermitian-form-and-signature]]

[[lem-seifert-stabilization-preserves-levine-tristram-signature]]
