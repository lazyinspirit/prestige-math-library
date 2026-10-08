---
id: thm-symplectic-homology-basis-compact-riemann-surface
kind: theorem
title: A symplectic homology basis of a compact Riemann surface
status: published
origin: pipeline
proof_strategy: direct
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - def-intersection-form-on-the-homology-of-a-closed-oriented-surface
  - def-geometric-intersection-pairing-on-a-closed-oriented-manifold
  - def-kronecker-evaluation-pairing
  - lem-cellular-homology-of-the-one-polygon-surface-model
  - lem-integral-surface-cup-pairing-from-the-oriented-polygon
  - thm-classification-of-compact-connected-surfaces
  - thm-geometric-intersection-equals-the-poincare-dual-cup-pairing
  - thm-poincare-duality-for-oriented-topological-manifolds
  - thm-polygonal-normal-form-for-compact-connected-surfaces
  - thm-topological-classification-compact-riemann-surfaces
  - thm-topological-universal-coefficient-short-exact-sequence-for-cohomology
  - def-riemann-surface-and-holomorphic-atlas
  - cor-holomorphic-functions-are-real-analytic-and-smooth
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology (author-hosted PDF)
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: "Section 3.2, Example 3.7, printed pp. 207–208 (integral cup products on the polygon); Section 3.3, Theorem 3.30 and Example 3.31, printed pp. 241–242 (duality on a closed surface)"
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Chapter 15, ‘The symplectic form on H1,’ printed pp. 133–135: symplectic side-loop basis and the period wedge formula"
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Chapter 3 §3, Proposition 3.19, printed p. 34: the cohomology basis dual to the loops has standard products"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), used through the polygonal normal form, the classification, the integral universal coefficient theorem, Poincaré duality, and the geometric-intersection theorem. Let $X$ be a compact connected Riemann surface of genus $g$ with its canonical orientation ([[thm-topological-classification-compact-riemann-surfaces]], [[def-genus-and-euler-characteristic-compact-riemann-surface]]). Choose an orientation-compatible one-polygon normal form; for $g=0$ it is the sphere digon, and for $g\geq1$ its boundary word is $\prod_{i=1}^g a_i b_i a_i^{-1}b_i^{-1}$ ([[thm-polygonal-normal-form-for-compact-connected-surfaces]], [[thm-classification-of-compact-connected-surfaces]]). Let $e_1,e_2,\ldots,e_{2g}$ be the homology classes of its ordered side loops $a_1,b_1,\ldots,a_g,b_g$. Then:

1. **Rank and basis.** $H_1(X;\mathbb Z)$ is free of rank $2g$, with basis $e_1,\ldots,e_{2g}$; for $g=0$ it is zero ([[lem-cellular-homology-of-the-one-polygon-surface-model]]).
2. **Standard intersection matrix.** In the ordered basis $(a_1,b_1,\ldots,a_g,b_g)$ the intersection matrix is
$$\bigl(\langle e_p,e_q\rangle_X\bigr)_{p,q}=\operatorname{diag}(J_2,\ldots,J_2),\qquad J_2=\begin{pmatrix}0&1\\-1&0\end{pmatrix},$$
equivalently $\langle a_i,a_j\rangle_X=\langle b_i,b_j\rangle_X=0$ and $\langle a_i,b_j\rangle_X=\delta_{ij}$. Its determinant is $1$ (including the empty matrix convention at $g=0$), so the intersection form is unimodular. In the evaluation-dual basis of $H^1(X;\mathbb Z)$, the cup pairing has the same matrix and is unimodular.
3. **Symplectic basis.** The side-loop classes form a symplectic basis: a $\mathbb Z$-basis with the pairings in (2).
4. **Geometric meaning.** For any two smooth closed oriented embedded-curve representatives of classes $e_p,e_q$ that are transverse, their signed geometric intersection number is $\langle e_p,e_q\rangle_X$ ([[def-geometric-intersection-pairing-on-a-closed-oriented-manifold]], [[thm-geometric-intersection-equals-the-poincare-dual-cup-pairing]]).

Reversing the surface orientation negates all intersection entries; replacing each $b_i$ by $-b_i$ restores the displayed symplectic basis convention.

## Facts & Assumptions

**Given:** $X$ is a compact connected Riemann surface of genus $g$ with its canonical orientation.

[F1] Under AC, the topological classification and polygonal normal form give an orientation-compatible one-polygon model: the sphere digon for $g=0$ and the commutator $4g$-gon for $g\geq1$. The genus is the unique handle number ([[def-axiom-of-choice]], [[def-genus-and-euler-characteristic-compact-riemann-surface]], [[thm-topological-classification-compact-riemann-surfaces]], [[thm-classification-of-compact-connected-surfaces]], [[thm-polygonal-normal-form-for-compact-connected-surfaces]]).

[F2] The cellular calculation gives $H_1(X;\mathbb Z)=0$ when $g=0$, and gives the ordered side-loop classes as a $\mathbb Z$-basis of rank $2g$ when $g\geq1$; connectedness gives $H_0(X;\mathbb Z)\cong\mathbb Z$ ([[lem-cellular-homology-of-the-one-polygon-surface-model]]).

[F3] The AC-stated universal coefficient sequence maps $H^1(X;\mathbb Z)$ to $\operatorname{Hom}(H_1(X;\mathbb Z),\mathbb Z)$ by Kronecker evaluation; since $H_0(X;\mathbb Z)\cong\mathbb Z$ is free, its $\operatorname{Ext}^1$ term vanishes ([[def-axiom-of-choice]], [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]], [[def-kronecker-evaluation-pairing]]).

[F4] For the ordered side-loop basis, its evaluation-dual cohomology basis $x_1,\ldots,x_{2g}$ and the positive generator $\omega\in H^2(X;\mathbb Z)$ satisfy $\langle x_p\smile x_q,[X]\rangle=J_{pq}$, where $J=\operatorname{diag}(J_2,\ldots,J_2)$ ([[lem-integral-surface-cup-pairing-from-the-oriented-polygon]]).

[F5] Under AC, Poincaré duality makes $D_X(a)=a\cap[X]$ an isomorphism; the intersection-form definition states both $\langle\gamma,\delta\rangle_X=\langle D_X^{-1}(\gamma)\smile D_X^{-1}(\delta),[X]\rangle_X$ and the cap-cup adjunction $\langle a\smile b,[X]\rangle=\langle b,D_X(a)\rangle$ ([[def-axiom-of-choice]], [[def-intersection-form-on-the-homology-of-a-closed-oriented-surface]], [[thm-poincare-duality-for-oriented-topological-manifolds]]).

[F6] The geometric-intersection theorem, invoked under AC, identifies for closed oriented smooth embedded curves $A,B$ in a closed oriented smooth surface that are transverse the signed count $I(A,B)$ with $\langle\operatorname{PD}[A]\smile\operatorname{PD}[B],[X]\rangle$ in the stated first-factor convention; the finite count itself is choice-free ([[def-axiom-of-choice]], [[def-geometric-intersection-pairing-on-a-closed-oriented-manifold]], [[thm-geometric-intersection-equals-the-poincare-dual-cup-pairing]]).

[F7] The complex atlas makes $X$ smooth because its holomorphic transitions are smooth in real coordinates; the compact Riemann surface is closed and its complex structure gives its canonical orientation ([[def-riemann-surface-and-holomorphic-atlas]], [[cor-holomorphic-functions-are-real-analytic-and-smooth]], [[thm-topological-classification-compact-riemann-surfaces]]).

## Proof

**Proof technique:** direct.

1.1 Choose the one-polygon normal form in [F1] with its orientation matching the canonical orientation of $X$. If this orientation gives the inverse commutator word, use the finite relabeling $a_i:=b_{g+1-i}$ and $b_i:=a_{g+1-i}$; since $[a,b]^{-1}=[b,a]$, this changes the reversed word back to $\prod_i a_i b_i a_i^{-1}b_i^{-1}$ without changing the quotient orientation. By [F2], for $g\geq1$ the ordered side loops are a basis of $H_1(X;\mathbb Z)$, and for $g=0$ the group is zero. [F1,F2]

1.2 Suppose $g\geq1$. The universal coefficient sequence [F3] has kernel $\operatorname{Ext}^1_{\mathbb Z}(H_0(X;\mathbb Z),\mathbb Z)=\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z,\mathbb Z)=0$, since $\mathbb Z$ is free. Thus evaluation $\beta:H^1(X;\mathbb Z)\to\operatorname{Hom}(H_1(X;\mathbb Z),\mathbb Z)$ is an isomorphism; let $e_p^*$ be the coordinate functional with $e_p^*(e_q)=\delta_{pq}$ and set $x_p=\beta^{-1}(e_p^*)$. These classes form the cohomology basis dual to the side-loop basis. [F2,F3]

2.1 Suppose $g\geq1$ and let $J=\operatorname{diag}(J_2,\ldots,J_2)$. The polygon cup-pairing computation [F4] gives $\langle x_p\smile x_q,[X]\rangle=J_{pq}$, with the positive generator $\omega$ normalized by $\langle\omega,[X]\rangle=1$. Thus the cup-pairing matrix on this evaluation-dual basis is $J$, so it is unimodular. [F4,step 1.2]

3.1 Suppose $g\geq1$. By the adjunction identity in [F5], $\langle x_q,D_X(x_p)\rangle=\langle x_p\smile x_q,[X]\rangle=J_{pq}$. Since $x_q$ is evaluation-dual to $e_q$ by step 1.2, these are the coordinates of $D_X(x_p)$, so $D_X(x_p)=\sum_q J_{pq}e_q$. For each $q$ put $z_q=\sum_pJ_{pq}x_p$. Then $\langle x_r,D_X(z_q)\rangle=\sum_pJ_{pq}J_{pr}=(J^{\mathsf T}J)_{qr}=\delta_{qr}$, hence $D_X(z_q)=e_q$ and $D_X^{-1}(e_q)=z_q$. [F3,F5,step 1.2,step 2.1]

4.1 Suppose $g\geq1$. Substituting the inverse-duality coordinates from step 3.1 into the definition in [F5] gives $$\langle e_p,e_q\rangle_X=\sum_{r,s}J_{rp}J_{sq}J_{rs}=(J^{\mathsf T}JJ)_{pq}=J_{pq},$$ because $J^{\mathsf T}J=I$. Thus the matrix is $J$, each $2\times2$ block has determinant $1$, and the form is unimodular for $g\geq1$. [F5,step 3.1]

5.1 If $g=0$, [F2] gives $H_1(X;\mathbb Z)=0$, and [F3] then gives $H^1(X;\mathbb Z)=0$ because $H_0(X;\mathbb Z)\cong\mathbb Z$ is free. Both pairings are on the zero group, whose empty matrix has determinant $1$ by convention, so both are unimodular. For $g\geq1$, whenever smooth transverse embedded-curve representatives of the side-loop classes are given, [F6,F7] identifies their signed counts with the same intersection form. Reversing orientation changes $[X]$ to $-[X]$ and negates the intersection form; replacing each $b_i$ by $-b_i$ restores the displayed symplectic basis convention. [F2,F3,F6,F7,step 4.1] ∎
