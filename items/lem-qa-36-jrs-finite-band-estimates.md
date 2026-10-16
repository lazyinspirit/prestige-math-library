---
id: lem-qa-36-jrs-finite-band-estimates
kind: lemma
title: Finite spectral-band derivative estimates for adiabatic paths
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-qa-36-finite-adiabatic-path-model
  - lem-qa-36-gapped-projection-regularity
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-self-adjoint-and-normal-endomorphism
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - thm-cauchy-schwarz-in-an-inner-product-space
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses finite spectral sums, contour identities, and operator norm inequalities only.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Sabine Jansen, Mary-Beth Ruskai, and Ruedi Seiler, Bounds for the adiabatic approximation with applications to quantum computation
      url: https://arxiv.org/pdf/quant-ph/0603175
      locator: Lemmas 2, 5–8, PDF pp. 6–12; reduced resolvent, twiddle, and derivative bounds.
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 30, printed pp. 152–155; finite-dimensional adiabatic projector derivatives.
---

## Statement

Let $H(s)$ be a $C^2$ finite-dimensional Hermitian path and $P(s)$ a $C^2$ spectral projection of fixed rank $m\ge1$ separated from its complement by gap $g(s)>0$. Put $Q=I-P$. For any operator $X$ define its reduced-resolvent transform at $s$ by
$$\widetilde X=-\sum_{\lambda\in\Lambda_P}\left(P_\lambda X\widehat R_\lambda+\widehat R_\lambda XP_\lambda\right),\qquad \widehat R_\lambda=Q(H|_{\operatorname{ran}Q}-\lambda I)^{-1}Q,$$
where $\Lambda_P$ is the set of distinct eigenvalues in $\operatorname{ran}P$ and $P_\lambda$ is the corresponding eigenspace projection. Then
$$\dot P=\widetilde{\dot H},\quad \|\widetilde X\|\le\frac{\sqrt m\|X\|}{g},\quad \|Q\widetilde X P\|\le\frac{\sqrt m\|QXP\|}{g},\quad \|P\widetilde X Q\|\le\frac{\sqrt m\|PXQ\|}{g},$$
$$\|\dot P\|\le\frac{\sqrt m\|\dot H\|}{g},\quad \|Q\ddot P P\|\le\frac{\sqrt m\|\ddot H\|}{g}+\frac{4m\|\dot H\|^2}{g^2},$$
and
$$\|Q\dot{\widetilde{\dot P}}P\|\le\frac{\sqrt m\|Q\ddot P P\|}{g}+\frac{2m\|\dot H\|\|\dot P\|}{g^2}.$$
The rank $m$ may count multiplicity; the argument only uses that the number of distinct band eigenvalues is at most $m$.

## Facts & Assumptions

**Given:** The finite path, the coherent gapped projection, and the gap convention from [[def-qa-36-finite-adiabatic-path-model]].

[F1] The band projection is $C^2$ ([[lem-qa-36-gapped-projection-regularity]]).

[F2] At each parameter value, $H$ has an orthogonal eigenspace decomposition ([[def-self-adjoint-and-normal-endomorphism]], [[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F3] On a nonzero domain the operator norm is defined by its maximum on unit vectors; on the zero domain it is zero. It is submultiplicative ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]).

[F4] Cauchy–Schwarz holds in the finite-dimensional inner-product spaces ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F5] For a finite-dimensional map $A$, $\|A\|=\|A^*\|$: Cauchy–Schwarz gives $\|A\|=\max_{\|x\|=\|y\|=1}|\langle Ax,y\rangle|$ when both spaces are nonzero (choose $y=Ax/\|Ax\|$ when $Ax\ne0$), and the adjoint identity exchanges $x,y$; if a space is zero both map norms are zero ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F6] Reduced resolvents on the complement obey $\|\widehat R_\lambda\|\le1/g$ because every complementary eigenvalue is at distance at least $g$ from every band eigenvalue; this follows by diagonalizing the self-adjoint restriction and applying the operator-norm definition.

## Proof

1.1 Fix $s$ and write $P=\sum_{\lambda\in\Lambda_P}P_\lambda$. The displayed definition makes $\widetilde X$ off-diagonal: $P\widetilde XP=Q\widetilde XQ=0$. On each band-to-complement block, $[H,\widetilde X]$ multiplies $-P_\lambda X\widehat R_\lambda$ by $\lambda-H|_Q$, giving $P_\lambda XQ$; on the reverse block it gives $-QXP_\lambda$. Summing yields $[H,\widetilde X]=PX-XP$. [given, F2, F3, algebra]

2.1 Choose an orthonormal basis $e_1,\ldots,e_m$ of $\operatorname{ran}P$ adapted to the mutually orthogonal $P_\lambda$. For each basis vector $e_j$ in $\operatorname{ran}P_\lambda$, $Q\widetilde Xe_j=-\widehat R_\lambda QXe_j$, so [F6] gives $\sum_j\|Q\widetilde Xe_j\|^2\le g^{-2}\sum_j\|QXe_j\|^2\le m\|QXP\|^2/g^2$. For a unit vector $u=\sum_j u_je_j$, Cauchy–Schwarz [F4] yields $\|Q\widetilde XPu\|\le\sum_j|u_j|\|Q\widetilde Xe_j\|\le(\sum_j|u_j|^2)^{1/2}(\sum_j\|Q\widetilde Xe_j\|^2)^{1/2}$, proving $\|Q\widetilde XP\|\le\sqrt m\|QXP\|/g$. Since each $\widehat R_\lambda$ and $P_\lambda$ is self-adjoint, taking adjoints in the defining sum gives $\widetilde{X^*}=\widetilde X^*$. Applying the column estimate to $X^*$ and using [F5] gives $\|P\widetilde XQ\|\le\sqrt m\|PXQ\|/g$. Since $\widetilde X$ is off-diagonal, for $u=p+q$ one has $\|\widetilde Xu\|^2=\|P\widetilde XQq\|^2+\|Q\widetilde XPp\|^2$; hence its full norm is the maximum of the two block norms. This proves $\|\widetilde X\|\le\sqrt m\|X\|/g$. [F2, F3, F4, F5, F6, step 1.1, algebra]

2.2 On a local fixed Riesz contour put $R_z=(H-zI)^{-1}$ and $\widehat R_z=Q(H|_Q-zI)^{-1}Q$. Then $\widetilde X=(2\pi i)^{-1}\oint R_zXR_z\,dz$. For $G(A,B)=(2\pi i)^{-1}\oint R_zAR_zBR_z\,dz$, using $[H-z,R_z]=0$ gives $\displaystyle [H,G(A,B)]=\frac1{2\pi i}\oint(AR_zBR_z-R_zAR_zB)\,dz=A\widetilde B-\widetilde A B.$ Indeed, $R_z[H-z,A]R_z=AR_z-R_zA$ and $R_z[H-z,B]R_z=BR_z-R_zB$; adding the two commutator contributions cancels the middle terms. Write $C=A\widetilde B-\widetilde A B$. On each band eigenspace $P_\lambda$, the Sylvester equations from this commutator give $\displaystyle PGQ=P\widetilde C Q,\qquad QGP=-Q\widetilde C P,$ because $P_\lambda\widetilde C Q=-P_\lambda C\widehat R_\lambda$ and $Q\widetilde C P_\lambda=-\widehat R_\lambda C P_\lambda$. [F1, F2, step 1.1, algebra]

3.1 Differentiate $HP=PH$ and multiply on the left by $Q$ and on the right by each $P_\lambda$. The resulting Sylvester equation is $(H|_Q-\lambda I)Q\dot P P_\lambda=-Q\dot H P_\lambda$, so $Q\dot P P_\lambda=-\widehat R_\lambda\dot H P_\lambda$. Differentiating $P^2=P$ gives $P\dot P P=Q\dot P Q=0$; self-adjointness gives the other off-diagonal block by adjoint. These identities equal the reduced-resolvent formula for $\widetilde{\dot H}$, proving $\dot P=\widetilde{\dot H}$. Step 2.1 then gives $\|\dot P\|\le\sqrt m\|\dot H\|/g$. [F1, F2, F3, step 1.1, step 2.1, algebra]

3.2 The diagonal blocks follow by expanding $R_z=\sum_{\lambda\in\Lambda_P}P_\lambda/(\lambda-z)+\widehat R_z$. In $QGQ$, the only non-holomorphic terms have the middle resolvent in $P_\lambda$, and their integrals are $-\widehat R_\lambda A P_\lambda B\widehat R_\lambda$; terms with all three resolvents in $Q$ are holomorphic inside the contour. Hence $QGQ=-Q\widetilde A\widetilde BQ$. In $PGP$, terms with three band resolvents have zero integral because their rational integrands decay as $z^{-3}$ and all their poles lie inside the contour. The remaining terms have two band poles $\lambda,\mu$ and one $Q$ resolvent. Their scalar contour coefficient equals $\widehat R_\lambda^2$ if $\lambda=\mu$ by Cauchy's derivative formula, and equals $(\widehat R_\lambda-\widehat R_\mu)/(\lambda-\mu)=\widehat R_\lambda\widehat R_\mu$ if $\lambda\ne\mu$ by the resolvent identity. Thus $PGP=P\widetilde A\widetilde BP$. Together with step 2.2, these blocks prove $\displaystyle G(A,B)=(P-Q)(\widetilde A\widetilde B+\widetilde{A\widetilde B}-\widetilde{\widetilde A B}).$ All contours enclose the whole band; coincident band eigenvalues are grouped into one $P_\lambda$, and the complementary resolvent is holomorphic throughout the enclosed region. [F1, F2, step 2.2, algebra]

4.1 Differentiating the contour formula and using $\dot R_z=-R_z\dot H R_z$ gives $\displaystyle \dot{\widetilde X}=\widetilde{\dot X}-G(\dot H,X)-G(X,\dot H).$ Apply step 3.2 to both $G$ terms and use $\dot P=\widetilde{\dot H}$ from step 3.1. Their sum is $\displaystyle (P-Q)\bigl(\dot P\widetilde X+\widetilde X\dot P+\widetilde{[\dot H,\widetilde X]}-\widetilde{[\dot P,X]}\bigr),$ because the remaining terms are $\widetilde{\dot H\widetilde X+X\dot P-\dot P X-\widetilde X\dot H}=\widetilde{[\dot H,\widetilde X]}-\widetilde{[\dot P,X]}$. Negating this sum in the derivative formula yields $\displaystyle \dot{\widetilde X}=\widetilde{\dot X}+(Q-P)(\dot P\widetilde X+\widetilde X\dot P+\widetilde{[\dot H,\widetilde X]}-\widetilde{[\dot P,X]}).$ The contour formula is local, so it remains valid at internal band eigenvalue coincidences; no selected eigenvalue is crossed by the contour. [F1, F2, step 3.1, step 3.2, algebra]

5.1 Apply step 4.1 to $X=\dot H$. Since $\widetilde{\dot H}=\dot P$ is off-diagonal, $\dot P^2$ is block diagonal and has zero $QP$ block. Also $[\dot P,\dot H]=-[\dot H,\dot P]$. Therefore $\displaystyle Q\ddot P P=Q\widetilde{\ddot H}P+2Q\widetilde{[\dot H,\dot P]}P.$ The block estimate in step 2.1 bounds the first term by $\sqrt m\|\ddot H\|/g$ and the second by $2(\sqrt m/g)\|[\dot H,\dot P]\|\le4\sqrt m\|\dot H\|\|\dot P\|/g\le4m\|\dot H\|^2/g^2$ using submultiplicativity [F3] and step 3.1. This is the claimed bound. [F2, F3, step 2.1, step 3.1, step 4.1, algebra]

6.1 Apply step 4.1 to $X=\dot P$. The products $\dot P\widetilde{\dot P}$ and $\widetilde{\dot P}\dot P$ are block diagonal, and $[\dot P,\dot P]=0$. Hence $\displaystyle Q\dot{\widetilde{\dot P}}P=Q\widetilde{\ddot P}P+Q\widetilde{[\dot H,\widetilde{\dot P}]}P.$ The block bound from step 2.1 makes the first term at most $\sqrt m\|Q\ddot P P\|/g$. The second is at most $(\sqrt m/g)\|[\dot H,\widetilde{\dot P}]\|\le(2\sqrt m/g)\|\dot H\|\|\widetilde{\dot P}\|\le2m\|\dot H\|\|\dot P\|/g^2$, using submultiplicativity [F3] and steps 2.1 and 3.1. [F2, F3, step 2.1, step 3.1, step 4.1, algebra] ∎
