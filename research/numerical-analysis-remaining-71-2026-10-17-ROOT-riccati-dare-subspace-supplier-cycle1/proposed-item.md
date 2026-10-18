---
id: prop-dare-stable-deflating-subspace-perturbation-bound
kind: proposition
title: "Separated DARE pencils have quantitatively stable deflating graphs"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - prop-dare-symplectic-pencil-graph-and-stable-spectrum
  - def-generalized-schur-form
  - thm-generalized-schur-form-exists-for-regular-pencil
  - thm-singular-value-decomposition
  - def-frobenius-matrix-norm
  - cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - thm-non-negative-square-root-exists-and-is-unique
  - lem-powers-of-a-schur-stable-matrix-decay
  - cor-finite-dimensional-normed-spaces-are-banach
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - lem-block-upper-triangular-pencil-determinant-factorizes
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "LAPACK Users' Guide, generalized nonsymmetric eigenproblem error bounds"
      url: "https://www.netlib.org/lapack/lug/node102.html"
    - title: "LAPACK Users' Guide, condition numbers for generalized eigenproblems"
      url: "https://www.netlib.org/lapack/lug/node104.html"
---

## Statement

Let $(N,M)$ be the order-$2n$ DARE pencil in [[prop-dare-symplectic-pencil-graph-and-stable-spectrum]], $n\ge1$. Work over $\mathbb C$, also for real input. Suppose exact unitary matrices $Q,V$ give an ordered complex generalized Schur pair
$$Q^*NV=S=\begin{bmatrix}S_{11}&S_{12}\\0&S_{22}\end{bmatrix},\qquad Q^*MV=T=\begin{bmatrix}T_{11}&T_{12}\\0&T_{22}\end{bmatrix},$$
with all four diagonal blocks upper triangular of order $n$, the leading homogeneous roots strictly inside the unit disk and the trailing roots strictly outside its closure, including infinity. Such an ordered representation is an explicit input; existence of an unordered generalized Schur form alone is not an algorithmic ordering certificate.

Give pairs of $n\times n$ matrices their product Frobenius norm $\|(Y,Z)\|_P=(\|Y\|_F^2+\|Z\|_F^2)^{1/2}$ and define the generalized Sylvester separation
$$\gamma=\min_{\|(Y,Z)\|_P=1}\|(S_{22}Y-ZS_{11},T_{22}Y-ZT_{11})\|_P.$$
Then $\gamma>0$. Write $\kappa=\gamma^{-1}$, $h=(\|S_{12}\|_2^2+\|T_{12}\|_2^2)^{1/2}$. For arbitrary pencil perturbations $\Delta_N,\Delta_M$, put $E=Q^*\Delta_N V$, $F=Q^*\Delta_M V$ and $\delta=(\|E\|_F^2+\|F\|_F^2)^{1/2}=(\|\Delta_N\|_F^2+\|\Delta_M\|_F^2)^{1/2}$. If $r>0$ satisfies
$$\kappa[\delta+2\delta r+(h+\delta)r^2]\le r,\qquad \kappa[2\delta+2(h+\delta)r]<1,$$
there is a unique pair $(Y,Z)$ in the product radius-$r$ ball for which the right and left graphs $V[I;Y]$, $Q[I;Z]$ form matching deflating spaces of the perturbed pair. In particular $\|Y\|_F,\|Z\|_F\le r$. For $\delta>0$, an explicit sufficient choice is $r=2\kappa\delta$ whenever, with $\theta=\kappa\delta$,
$$4\theta+4\kappa h\theta+4\theta^2<1.$$
For $\delta=0$, take $Y=Z=0$.

Here are sufficient separate margins identifying these spaces as the stable spaces. Set
$$a=\delta+(\|S_{12}\|_2+\delta)r,\qquad b=\delta+(\|T_{12}\|_2+\delta)r,$$
$$K_s=T_{11}^{-1}S_{11},\qquad K_u=S_{22}^{-1}T_{22}.$$
Both inverses exist and $K_s,K_u$ are Schur stable. For $j=s,u$, choose $W_j\succ0$ with $W_j-K_j^*W_jK_j=I$ (the convergent Stein series supplies one). Require
$$\|T_{11}^{-1}\|_2 b<1,\qquad \|S_{22}^{-1}\|_2 a<1,$$
and define
$$\epsilon_s=\frac{\|T_{11}^{-1}\|_2(a+b\|K_s\|_2)}{1-\|T_{11}^{-1}\|_2b},\qquad \epsilon_u=\frac{\|S_{22}^{-1}\|_2(b+a\|K_u\|_2)}{1-\|S_{22}^{-1}\|_2a}.$$
If
$$\|W_j\|_2(2\|K_j\|_2\epsilon_j+\epsilon_j^2)<1\quad(j=s,u),$$
the perturbed pencil is regular, has precisely $n$ stable roots and $n$ outside roots, and the constructed right graph is its stable deflating space. All these inequalities hold for sufficiently small $\delta$ with $r=2\kappa\delta$.

For normalized right bases, write $V=[U\ V_2]$ and
$$\widehat U=(U+V_2Y)(I+Y^*Y)^{-1/2},\qquad y=\|Y\|_2,\qquad \beta(y)=\sqrt{2\left(1-\frac1{\sqrt{1+y^2}}\right)}.$$
Then $\widehat U^*\widehat U=I$, $\|\widehat U-U\|_2=\beta(y)\le y\le r$, and
$$\|(I-UU^*)\widehat U\|_2=\frac{y}{\sqrt{1+y^2}}.$$
If the physical top block $U_1$ of $U=[U_1;U_2]$ is invertible, $X=U_2U_1^{-1}$, and $\|U_1^{-1}\|_2\beta(y)<1$, the top block $\widehat U_1$ is invertible and
$$\|\widehat U_2\widehat U_1^{-1}-X\|_2\le\frac{(1+\|X\|_2)\beta(y)}{\|U_1^{-1}\|_2^{-1}-\beta(y)}.$$
The bound with $\beta(r)$ is an immediately computable weaker version. An independently rotated orthonormal basis of the same perturbed space produces the identical chart, so it need not be close to $U$ before its basis alignment. The conclusion concerns an unstructured perturbed pencil; it does not certify Hermitian symmetry, Riccati residual, positive data, or the stabilizing Riccati branch after symmetrization.

## Facts & Assumptions

**Given:** The ordered exact unitary representation, the product-norm perturbation bound, and the indicated radius and stability-margin inequalities.

[F1] [[prop-dare-symplectic-pencil-graph-and-stable-spectrum]] supplies the regular DARE pencil, its $n+n$ homogeneous split, and its stable graph without inverting $A$.

[F2] [[def-generalized-schur-form]] specifies unitary two-sided factors and upper triangular complex blocks; [[thm-generalized-schur-form-exists-for-regular-pencil]] proves the unordered representation.

[F3] [[thm-singular-value-decomposition]] gives the minimum singular value and inverse operator norm of a finite bijective operator.

[F4] [[cor-finite-dimensional-normed-spaces-are-banach]] supplies completeness of the finite product matrix space.

[F5] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]] and [[cor-operator-norm-submultiplicative-and-t-star-t-identity]] supply unitary invariance and compatible product inequalities.

[F6] [[lem-powers-of-a-schur-stable-matrix-decay]] gives convergent Stein series for $K_s,K_u$.

[F7] [[thm-non-negative-square-root-exists-and-is-unique]] and [F3] give the positive inverse square root of $I+Y^*Y$ and its singular-value formulas.

[F8] [[lem-block-upper-triangular-pencil-determinant-factorizes]] factors the determinant of a block upper triangular pencil.

[F9] [[cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form]] supplies a basis of generalized eigenvectors for a complex finite matrix.

## Proof

1.1 Let $s_i,t_i$ be the diagonal entries of $(S_{22},T_{22})$, and $p_j,q_j$ those of $(S_{11},T_{11})$. Each pair is nonzero and the corresponding homogeneous roots are disjoint. Therefore $p_jt_i-s_iq_j\ne0$, including when $t_i=0$. In solving $S_{22}Y-ZS_{11}=C$, $T_{22}Y-ZT_{11}=D$, process $i=n,n-1,\ldots,1$ and, for each $i$, $j=1,\ldots,n$. The two unknown entries $(Y_{ij},Z_{ij})$ have coefficient matrix $[s_i,-p_j;t_i,-q_j]$ with nonzero determinant. All other terms involve $Y_{kj}$ with $k>i$ or $Z_{ik}$ with $k<j$, already determined in this order. Thus every $(C,D)$ has a unique preimage. By [F3], the operator is bijective with positive minimum singular value $\gamma$ and inverse norm $\kappa$. [F2, F3, given, algebra, construct]

2.1 Put $C=S_{11}+E_{11}+(S_{12}+E_{12})Y$ and $D=T_{11}+F_{11}+(T_{12}+F_{12})Y$. Direct block multiplication shows $(S+E)[I;Y]=[I;Z]C$, $(T+F)[I;Y]=[I;Z]D$ exactly when $\mathcal L(Y,Z)=(-E_{21}-E_{22}Y+ZE_{11}+Z(S_{12}+E_{12})Y,-F_{21}-F_{22}Y+ZF_{11}+Z(T_{12}+F_{12})Y)$, where $\mathcal L$ is step 1.1's operator. Its right side has pair norm at most $\delta+2\delta r+(h+\delta)r^2$ on the product ball: the constant pair is at most $\delta$; the two linear terms are bounded by $\delta\|Y\|_F$ and $\delta\|Z\|_F$; the quadratic pair is bounded by $(h+\delta)\|Z\|_F\|Y\|_F$. Subtracting two arguments and splitting the quadratic product gives Lipschitz constant at most $2\delta+2(h+\delta)r$. Composing with $\mathcal L^{-1}$ yields the displayed self-map and contraction bounds. Iterating from zero has geometrically summable successive differences; [F4] gives a limit in the closed ball, continuity gives a fixed point, and contraction gives uniqueness there. Substitution of $r=2\kappa\delta$ gives the stated sufficient scalar inequality. No statement here identifies a stable space without the subsequent margins. [F4, F5, step 1.1, algebra, construct]

3.1 Left multiplication by $[I,0;-Z,I]$ and right multiplication by $[I,0;Y,I]$ transform the perturbed coordinate pair into block upper triangular form with leading blocks $C,D$ and trailing blocks $A'=S_{22}+E_{22}-Z(S_{12}+E_{12})$, $B'=T_{22}+F_{22}-Z(T_{12}+F_{12})$. The differences of $C,A'$ from $S_{11},S_{22}$ have norm at most $a$; the differences of $D,B'$ from $T_{11},T_{22}$ have norm at most $b$. Because stable roots are finite, every diagonal entry of $T_{11}$ is nonzero; because trailing roots exclude zero, every diagonal entry of $S_{22}$ is nonzero. Thus these matrices are invertible. Their triangular quotients $K_s,K_u$ have diagonal entries of modulus less than one, including zero entries of $K_u$ for infinite roots. Their Stein series converge by [F6], are positive definite because the first term is $I$, and telescope to the stated Stein identities. The Neumann series and the first two margins make $D,A'$ invertible. The identities $D^{-1}C-K_s=D^{-1}[(C-S_{11})-(D-T_{11})K_s]$ and $(A')^{-1}B'-K_u=(A')^{-1}[(B'-T_{22})-(A'-S_{22})K_u]$ give the bounds $\epsilon_s,\epsilon_u$. [F2, F5, F6, step 2.1, algebra]

3.2 For $K$ with $W-K^*WK=I$ and $\|H\|_2\le\epsilon$, expansion gives $\|H^*WK+K^*WH+H^*WH\|_2\le\|W\|_2(2\|K\|_2\epsilon+\epsilon^2)<1$. Hence $W-(K+H)^*W(K+H)\succ0$. On an eigenvector with eigenvalue $\lambda$, this says $(1-|\lambda|^2)v^*Wv>0$, proving Schur stability. Apply this twice to step 3.1: $(C,D)$ has only finite stable roots, while $(A',B')$ has only outside roots, including possible infinity, since its reciprocal matrix $(A')^{-1}B'$ is Schur stable. By [F8] the full pencil is regular with exactly the stated split. To see uniqueness of its right stable space, choose $\lambda_0$ outside the roots of both diagonal pairs and consider $(N'-\lambda_0 M')^{-1}M'$ in these transformed bases. Its diagonal blocks are $(C-\lambda_0D)^{-1}D$ and $(A'-\lambda_0B')^{-1}B'$. The stable-root transformed eigenvalues $1/(\lambda-\lambda_0)$ occur only in the first block, whereas infinity corresponds to zero in the second. For an upper triangular block matrix with disjoint block spectra, any generalized eigenvector for a first-block eigenvalue has zero quotient component: applying a power of the matrix minus that eigenvalue gives an invertible power of the second diagonal block on the quotient. By [F9], the generalized eigenvectors for these first-block eigenvalues span a space of dimension $n$, so the stable right spectral space is precisely the leading coordinate space. Undoing the invertible transformations identifies it with $V[I;Y]$. The same determinant argument identifies its matching left space $Q[I;Z]$. All margins have strictly positive denominators and left sides tending to zero as $\delta\to0$ with $r=2\kappa\delta$, proving the sufficiently-small assertion. [F3, F5, F8, F9, step 3.1, algebra]

4.1 Write $C_Y=(I+Y^*Y)^{-1/2}$. Unitarity of $V$ gives $(U+V_2Y)^*(U+V_2Y)=I+Y^*Y$, so $\widehat U^*\widehat U=I$ and $U^*\widehat U=C_Y$. Consequently $(\widehat U-U)^*(\widehat U-U)=2I-2C_Y$. Its largest eigenvalue is $2(1-(1+y^2)^{-1/2})$, proving the exact basis distance. The scalar inequality $2(1-(1+t)^{-1/2})\le t$ for $t\ge0$ follows by integrating derivative $(1+t)^{-3/2}\le1$, so $\beta(y)\le y$. Also $(I-UU^*)\widehat U=V_2YC_Y$, whose largest singular value is $y/\sqrt{1+y^2}$ by [F3]. [F3, F5, F7, step 2.1, algebra]

4.2 Set $\Delta U=\widehat U-U$. The strict chart condition and Neumann series give $\|\widehat U_1^{-1}\|_2\le(\|U_1^{-1}\|_2^{-1}-\|\Delta U_1\|_2)^{-1}$. Since $U_2=XU_1$, subtraction gives $\widehat U_2\widehat U_1^{-1}-X=(\Delta U_2-X\Delta U_1)\widehat U_1^{-1}$. Each block difference is at most $\|\Delta U\|_2=\beta(y)$, proving the bound. Replacing $y$ by $r$ weakens it because $\beta$ is increasing. If another orthonormal basis has the same space as $\widehat U$, it equals $\widehat U R$ for a unitary $R$, and its chart is unchanged because $(\widehat U_1R)^{-1}=R^{-1}\widehat U_1^{-1}$. Thus arbitrary basis rotation cannot be confused with subspace perturbation. The proof imposed no structure on $E,F$, so it supplies none of the separate Riccati acceptance conditions. [F5, step 4.1, algebra] ∎
