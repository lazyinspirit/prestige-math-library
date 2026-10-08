---
id: ex-symplectic-homology-basis-of-a-genus-two-surface
kind: example
title: A symplectic homology basis of a genus-two surface
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-polygonal-schema-and-edge-pairing
  - def-intersection-form-on-the-homology-of-a-closed-oriented-surface
  - def-kronecker-evaluation-pairing
  - lem-cellular-homology-of-the-one-polygon-surface-model
  - lem-integral-surface-cup-pairing-from-the-oriented-polygon
  - thm-classification-of-compact-connected-surfaces
  - thm-polygonal-normal-form-for-compact-connected-surfaces
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology (author-hosted PDF)
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: "Section 2.2, Example 2.36, printed p. 141 (the general commutator CW computation); Section 3.2, Example 3.7, printed pp. 207–208 (evaluation-dual cup products on a genus-g surface)"
    - title: Jean Gallier and Dianna Xu, A Guide to the Classification Theorem for Compact Surfaces
      url: https://www.cis.upenn.edu/~jean/surfclassif-root.pdf
      locator: "Chapter 1 §1.2, Figure 1.9, printed p. 10 (the genus-two octagon and its boundary word); Chapter 1 §1.2, printed p. 8 (the general orientable 4g-gon normal form)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) through the polygonal normal form, surface classification, integral cup-pairing, and Poincaré-duality interfaces. Let $\Sigma_2$ be the quotient of an oriented octagon with boundary word $a_1b_1a_1^{-1}b_1^{-1}a_2b_2a_2^{-1}b_2^{-1}$, the standard genus-two model ([[thm-polygonal-normal-form-for-compact-connected-surfaces]], [[thm-classification-of-compact-connected-surfaces]], [[def-polygonal-schema-and-edge-pairing]]). Let $e_1=[a_1],e_2=[b_1],e_3=[a_2],e_4=[b_2]$. Then:

1. $H_1(\Sigma_2;\mathbb Z)=\mathbb Z^4$ with basis $e_1,e_2,e_3,e_4$ ([[lem-cellular-homology-of-the-one-polygon-surface-model]]).
2. In this ordered basis, the intersection matrix of [[def-intersection-form-on-the-homology-of-a-closed-oriented-surface]] is
$$\begin{pmatrix}0&1&0&0\\-1&0&0&0\\0&0&0&1\\0&0&-1&0\end{pmatrix}.$$
Equivalently, $a_i\cdot b_j=\delta_{ij}$, $b_i\cdot a_j=-\delta_{ij}$, and all same-type products vanish. Its determinant is $1$, so this is a symplectic basis and the form is unimodular.
3. The endpoint cases are consistent: at genus $0$ the paired digon has $H_1=0$ and the empty intersection matrix; at genus $1$ the commutator square has $H_1\cong\mathbb Z^2$ and matrix $J_2=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ ([[thm-polygonal-normal-form-for-compact-connected-surfaces]], [[thm-classification-of-compact-connected-surfaces]], [[lem-cellular-homology-of-the-one-polygon-surface-model]], [[lem-integral-surface-cup-pairing-from-the-oriented-polygon]]).

## Facts & Assumptions

**Given:** The oriented octagon and side-pairings of the Statement.

[F1] The one-polygon schema has its corner classes as vertices, paired sides as edges, and disk interior as a face; the commutator word with two handle blocks is the genus-two normal form, and opposite-exponent side pairs are orientation-compatible ([[def-polygonal-schema-and-edge-pairing]], [[thm-polygonal-normal-form-for-compact-connected-surfaces]], [[thm-classification-of-compact-connected-surfaces]], [[def-axiom-of-choice]]).

[F2] Under AC, for a genus-$g$ commutator surface the cellular calculation gives the ordered side-loop classes as a $\mathbb Z$-basis of $H_1$ of rank $2g$, with $H_1=0$ at genus zero ([[def-axiom-of-choice]], [[lem-cellular-homology-of-the-one-polygon-surface-model]]).

[F3] Under AC, in the evaluation-dual cohomology basis $x_{a_i},x_{b_i}$ and positive generator $\omega$ of $H^2$, the polygon cup computation is $x_{a_i}\smile x_{b_j}=\delta_{ij}\omega$, $x_{b_i}\smile x_{a_j}=-\delta_{ij}\omega$, and same-type products are zero; it also covers the empty genus-zero basis ([[def-axiom-of-choice]], [[lem-integral-surface-cup-pairing-from-the-oriented-polygon]], [[def-kronecker-evaluation-pairing]]).

[F4] Under AC, cap with $[\Sigma_g]$ gives $D(a)=a\cap[\Sigma_g]$; the intersection form is $\langle\gamma,\delta\rangle=\langle D^{-1}(\gamma)\smile D^{-1}(\delta),[\Sigma_g]\rangle$, and cap-cup adjunction is $\langle a\smile b,[\Sigma_g]\rangle=\langle b,D(a)\rangle$ ([[def-axiom-of-choice]], [[def-intersection-form-on-the-homology-of-a-closed-oriented-surface]], [[def-kronecker-evaluation-pairing]]).

[F5] The sphere digon and commutator square are the standard genus-zero and genus-one schemas; the two commutator blocks specify the genus-two model ([[def-axiom-of-choice]], [[def-polygonal-schema-and-edge-pairing]], [[thm-polygonal-normal-form-for-compact-connected-surfaces]], [[thm-classification-of-compact-connected-surfaces]]).

## Proof

**Proof technique:** direct.

1.1 The eight corners of the octagon lie in one vertex class: side pairings give $v_0\sim v_3\sim v_2\sim v_1\sim v_4\sim v_7\sim v_6\sim v_5\sim v_0$, and the corresponding corner sectors form one link cycle. There are four paired edges and one face. Every side pair has opposite exponents, so the face orientation descends to an orientation of the closed connected surface. The word has two commutator blocks, hence is the genus-two normal form by [F1]. [F1,construct]

1.2 Applying [F2] to this model gives $H_1(\Sigma_2;\mathbb Z)=\mathbb Z^4$ with ordered basis $e_1,e_2,e_3,e_4$. [F2]

2.1 Let $J=\operatorname{diag}(J_2,J_2)$ and let $x_1,x_2,x_3,x_4$ be the evaluation-dual cohomology basis. By [F3], $\langle x_p\smile x_q,[\Sigma_2]\rangle=J_{pq}$. [F3,step 1.2]

3.1 By the adjunction in [F4], $\langle x_q,D(x_p)\rangle=\langle x_p\smile x_q,[\Sigma_2]\rangle=J_{pq}$, so $D(x_p)=\sum_qJ_{pq}e_q$. Put $z_q=\sum_pJ_{pq}x_p$. Since $\langle x_r,D(z_q)\rangle=\sum_pJ_{pq}J_{pr}=(J^{\mathsf T}J)_{qr}=\delta_{qr}$, we have $D(z_q)=e_q$ and $D^{-1}(e_q)=z_q$. [F3,F4,step 2.1]

4.1 Substituting these coordinates into [F4] gives $\langle e_p,e_q\rangle=\sum_{r,s}J_{rp}J_{sq}J_{rs}=(J^{\mathsf T}JJ)_{pq}=J_{pq}$. Thus the displayed matrix is $\operatorname{diag}(J_2,J_2)$; its determinant is $\det(J_2)^2=1$, proving the symplectic and unimodular claims. [F4,step 3.1]

5.1 The same A-page suppliers [F2–F5] give the endpoint cases: for genus zero, $H_1=0$ and the unique form on the zero group has empty matrix and determinant $1$ by convention; for genus one, the standard square has $H_1\cong\mathbb Z^2$ with matrix $J_2$ and determinant $1$. These computations use the cellular, cup-pairing, and intersection-form suppliers rather than importing an examples-page result. [F2,F3,F4,F5,step 4.1] ∎

## Remarks

The octagon is a concrete two-handle instance of the commutator normal form. The finite cell and matrix computations are choice-free after the normal form and integral cup/duality interfaces are fixed.
