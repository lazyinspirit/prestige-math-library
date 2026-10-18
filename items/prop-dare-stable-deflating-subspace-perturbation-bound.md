---
id: prop-dare-stable-deflating-subspace-perturbation-bound
kind: proposition
title: "Separated DARE pencils have quantitatively stable deflating graphs"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - prop-dare-symplectic-pencil-graph-and-stable-spectrum
  - def-generalized-schur-form
  - def-regular-generalized-eigenvalue-pencil
  - thm-singular-value-decomposition
  - def-frobenius-matrix-norm
  - cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - thm-non-negative-square-root-exists-and-is-unique
  - lem-powers-of-a-schur-stable-matrix-decay
  - cor-finite-dimensional-normed-spaces-are-banach
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - lem-block-upper-triangular-pencil-determinant-factorizes
  - lem-neumann-inverse-norm-bound
  - thm-determinant-multiplicative
  - thm-root-bound-for-polynomials-over-a-domain
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "LAPACK Users' Guide, generalized nonsymmetric eigenproblem error bounds"
      url: "https://www.netlib.org/lapack/lug/node102.html"
      locator: "§4.11.1.3 overview of regular-pair eigenvalue and left/right
        deflating-subspace error bounds; no local constants are copied."
    - title: "LAPACK Users' Guide, condition numbers for generalized eigenproblems"
      url: "https://www.netlib.org/lapack/lug/node104.html"
      locator: "§4.11.1.3, generalized Sylvester equations, the ordered
        pair-separation operator and the distinction between its two
        orientations."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $(N,M)$ be the order-$2n$ DARE pencil in [[prop-dare-symplectic-pencil-graph-and-stable-spectrum]], with $n\ge1$. Work over $\mathbb C$, also for real input. Suppose exact unitary matrices $Q,V$ give an ordered complex generalized Schur pair
$$Q^*NV=S=\begin{bmatrix}S_{11}&S_{12}\\0&S_{22}\end{bmatrix},\qquad Q^*MV=T=\begin{bmatrix}T_{11}&T_{12}\\0&T_{22}\end{bmatrix},$$
where each diagonal block has order $n$, all four diagonal blocks are upper triangular, the leading homogeneous roots are strictly inside the unit disk, and the trailing roots are strictly outside its closure, including infinity. This ordered representation is an explicit input; existence of an unordered generalized Schur form is not an ordering certificate.

Give pairs of $n\times n$ matrices the product Frobenius norm
$$\|(Y,Z)\|_P=(\|Y\|_F^2+\|Z\|_F^2)^{1/2},$$
and define the lower-oriented generalized Sylvester separation
$$\gamma=\min_{\|(Y,Z)\|_P=1}\|(S_{22}Y-ZS_{11},T_{22}Y-ZT_{11})\|_P.$$
Then $\gamma>0$. Write $\kappa=\gamma^{-1}$, $h=(\|S_{12}\|_2^2+\|T_{12}\|_2^2)^{1/2}$. For arbitrary pencil perturbations $\Delta_N,\Delta_M$, put $E=Q^*\Delta_NV$, $F=Q^*\Delta_MV$, and $\delta=(\|E\|_F^2+\|F\|_F^2)^{1/2}=(\|\Delta_N\|_F^2+\|\Delta_M\|_F^2)^{1/2}$. If $r>0$ satisfies
$$\kappa[\delta+2\delta r+(h+\delta)r^2]\le r,\qquad \kappa[2\delta+2(h+\delta)r]<1,$$
there is a unique pair $(Y,Z)$ in the product radius-$r$ ball for which the right and left graphs $V[I;Y]$ and $Q[I;Z]$ form matching deflating spaces of the perturbed pair. In particular $\|Y\|_F,\|Z\|_F\le r$. For $\delta>0$, a sufficient choice is $r=2\kappa\delta$ whenever, with $\theta=\kappa\delta$,
$$4\theta+4\kappa h\theta+4\theta^2<1.$$
For $\delta=0$, take $Y=Z=0$.

Here are separate sufficient margins identifying these graphs as the stable spaces. Set
$$a=\delta+(\|S_{12}\|_2+\delta)r,\qquad b=\delta+(\|T_{12}\|_2+\delta)r,$$
$$K_s=T_{11}^{-1}S_{11},\qquad K_u=S_{22}^{-1}T_{22}.$$
The inverses exist and $K_s,K_u$ are Schur stable. For $j=s,u$, choose $W_j\succ0$ with $W_j-K_j^*W_jK_j=I$; the convergent Stein series supplies such a matrix. Require
$$\|T_{11}^{-1}\|_2b<1,\qquad \|S_{22}^{-1}\|_2a<1,$$
and define
$$\epsilon_s=\frac{\|T_{11}^{-1}\|_2(a+b\|K_s\|_2)}{1-\|T_{11}^{-1}\|_2b},\qquad \epsilon_u=\frac{\|S_{22}^{-1}\|_2(b+a\|K_u\|_2)}{1-\|S_{22}^{-1}\|_2a}.$$
If
$$\|W_j\|_2(2\|K_j\|_2\epsilon_j+\epsilon_j^2)<1\qquad(j=s,u),$$
then the perturbed pencil is regular, has precisely $n$ stable roots and $n$ outside roots, and the constructed right graph is its stable deflating space. For fixed ordered input these margins hold for all sufficiently small $\delta$ with $r=2\kappa\delta$.

For normalized right bases, write $V=[U\ V_2]$ and
$$\widehat U=(U+V_2Y)(I+Y^*Y)^{-1/2},\qquad y=\|Y\|_2,\qquad \beta(y)=\sqrt{2\left(1-\frac1{\sqrt{1+y^2}}\right)}.$$
Then $\widehat U^*\widehat U=I$, $\|\widehat U-U\|_2=\beta(y)\le y\le r$, and
$$\|(I-UU^*)\widehat U\|_2=\frac{y}{\sqrt{1+y^2}}.$$
If the physical top block $U_1$ of $U=[U_1;U_2]$ is invertible, $X=U_2U_1^{-1}$, and $\|U_1^{-1}\|_2\beta(y)<1$, then $\widehat U_1$ is invertible and
$$\|\widehat U_2\widehat U_1^{-1}-X\|_2\le\frac{(1+\|X\|_2)\beta(y)}{\|U_1^{-1}\|_2^{-1}-\beta(y)}.$$
For the directly computable bound with $\beta(r)$, impose the stronger margin $\|U_1^{-1}\|_2\beta(r)<1$; replacing $\beta(y)$ by $\beta(r)$ then gives a valid weaker estimate. An independently rotated orthonormal basis of the same perturbed space produces the identical chart, so it need not be close to $U$ before alignment. The conclusion concerns an unstructured perturbed pencil; it does not certify Hermitian symmetry, Riccati residual, positive data, or the stabilizing Riccati branch after symmetrization.

## Facts & Assumptions

**Given:** The regular DARE pencil and stable graph, an exact ordered complex unitary generalized Schur representation with the stated strict stable split, perturbations of both pencil matrices, the stated contraction radius, and the indicated separate stability and chart margins.

[F1] [[prop-dare-symplectic-pencil-graph-and-stable-spectrum]]: the DARE pencil is regular, has $n$ stable finite roots and $n$ outside roots including infinity, and its stable right deflating space is a graph.

[F2] [[def-generalized-schur-form]]: a complex generalized Schur representation has exact unitary left/right factors and upper-triangular arrays with homogeneous scalar diagonal pairs.

[F3] [[thm-singular-value-decomposition]]: a finite-dimensional linear map has a smallest singular value; it is positive exactly when the map is injective.

[F4] [[def-frobenius-matrix-norm]]: the Frobenius norm is the Euclidean norm of the matrix entry list, including for zero-sized blocks.

[F5] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: unitary factors preserve Frobenius and operator norms, and $\|M\|_2\le\|M\|_F$.

[F6] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: compatible operator norms are submultiplicative.

[F7] [[lem-powers-of-a-schur-stable-matrix-decay]]: powers of a Schur-stable matrix decay geometrically up to a finite constant.

[F8] [[cor-finite-dimensional-normed-spaces-are-banach]]: every finite-dimensional normed real or complex space is complete.

[F9] [[thm-non-negative-square-root-exists-and-is-unique]] and [F3]: $I+Y^*Y$ has a positive inverse square root with the singular-value formulas used below.

[F10] [[lem-block-upper-triangular-pencil-determinant-factorizes]]: the homogeneous determinant factors across the diagonal blocks of a block upper-triangular pencil.

[F11] [[cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form]]: each finite-dimensional complex endomorphism has a basis of generalized eigenvectors.

[F12] [[lem-neumann-inverse-norm-bound]]: if $\|E\|_2\le q<1$, then $I-E$ is invertible and $\|(I-E)^{-1}\|_2\le(1-q)^{-1}$.

[F13] [[thm-determinant-multiplicative]]: determinants multiply under finite square matrix products.

[F14] [[thm-root-bound-for-polynomials-over-a-domain]]: a nonzero polynomial has only finitely many roots.

[F15] [[def-regular-generalized-eigenvalue-pencil]]: the homogeneous roots of $(N,M)$ are zeros of $\det(\beta N-\alpha M)$; $\beta=0$ represents infinity.

## Proof

1.1 By [F1], the regular base DARE pencil has an $n+n$ stable/outside split, and the ordered representation [F2] puts the stable roots in the leading blocks and the outside roots in the trailing blocks. Write trailing diagonal pairs as $(s_i,t_i)$ and leading ones as $(p_j,q_j)$. Disjoint homogeneous roots give $p_jt_i-s_iq_j\ne0$ for every $i,j$, including $t_i=0$. In the system $S_{22}Y-ZS_{11}=C$, $T_{22}Y-ZT_{11}=D$, process rows $i=n,n-1,\ldots,1$ and within each row columns $j=1,\ldots,n$; upper triangularity makes all other terms involve already determined $Y_{kj}$ with $k>i$ or $Z_{i\ell}$ with $\ell<j$. The two unknowns $(Y_{ij},Z_{ij})$ have coefficient matrix $\begin{bmatrix}s_i&-p_j\\t_i&-q_j\end{bmatrix}$ with determinant $p_jt_i-s_iq_j\ne0$, so the lower-oriented generalized Sylvester map is bijective. Its minimum singular value [F3] is therefore $\gamma>0$, and its inverse norm is $\kappa=\gamma^{-1}$. [F1, F2, F3, F4, given, construct, algebra]

2.1 Define $C_Y=S_{11}+E_{11}+(S_{12}+E_{12})Y$ and $D_Y=T_{11}+F_{11}+(T_{12}+F_{12})Y$. Block multiplication gives $(S+E)[I;Y]=[I;Z]C_Y$ and $(T+F)[I;Y]=[I;Z]D_Y$ exactly when $\mathcal L(Y,Z)=(S_{22}Y-ZS_{11},T_{22}Y-ZT_{11})$ equals $(-E_{21}-E_{22}Y+ZE_{11}+Z(S_{12}+E_{12})Y,\,-F_{21}-F_{22}Y+ZF_{11}+Z(T_{12}+F_{12})Y)$. On the product radius-$r$ ball, the right side has norm at most $\delta+2\delta r+(h+\delta)r^2$: the constant pair is bounded by $\delta$, the two linear pairs by $\delta\|Y\|_F$ and $\delta\|Z\|_F$, and the quadratic pair by $(h+\delta)\|Z\|_F\|Y\|_F$. Splitting the quadratic difference into its $Y$ and $Z$ changes bounds the Lipschitz constant by $2\delta+2(h+\delta)r$. Applying $\mathcal L^{-1}$ gives a self-map and contraction under the stated inequalities; iteration from zero has geometrically summable increments, so completeness [F8] gives a limit in the closed ball, continuity gives a fixed point, and contraction gives uniqueness. For $r=2\kappa\delta$ and $\theta=\kappa\delta$, substitution gives self-map ratio $\kappa[\delta+2\delta r+(h+\delta)r^2]/r=1/2+2\theta+2\kappa h\theta+2\theta^2$ and contraction constant $2\theta+4\kappa h\theta+4\theta^2$; the displayed strict condition implies both. For $\delta=0$, the exact pair $Y=Z=0$ solves the graph equations. [F1, F4, F5, F6, F8, step 1.1, algebra]

3.1 Set $R_Y=\begin{bmatrix}I&0\\Y&I\end{bmatrix}$ and $L_Z=\begin{bmatrix}I&0\\-Z&I\end{bmatrix}$. They are invertible shears of determinant one, and the graph equations from step 2.1 give $L_Z(S+E)R_Y=\begin{bmatrix}C_Y&S_{12}+E_{12}\\0&A'\end{bmatrix}$ and $L_Z(T+F)R_Y=\begin{bmatrix}D_Y&T_{12}+F_{12}\\0&B'\end{bmatrix}$, where $A'=S_{22}+E_{22}-Z(S_{12}+E_{12})$ and $B'=T_{22}+F_{22}-Z(T_{12}+F_{12})$. Unitary invariance, $\|M\|_2\le\|M\|_F$ [F5], and submultiplicativity [F6] give $\|C_Y-S_{11}\|_2,\|A'-S_{22}\|_2\le a$ and $\|D_Y-T_{11}\|_2,\|B'-T_{22}\|_2\le b$. Every leading stable root is finite, so $T_{11}$ is invertible and $K_s=T_{11}^{-1}S_{11}$ is upper triangular with diagonal moduli below one. Every trailing outside root has nonzero first homogeneous coordinate, so $S_{22}$ is invertible and $K_u=S_{22}^{-1}T_{22}$ is upper triangular with diagonal moduli below one, including zero for infinity; thus both are Schur stable. By [F7], $W_j=\sum_{k\ge0}(K_j^*)^kK_j^k$ converges for $j=s,u$, is positive definite, and satisfies $W_j-K_j^*W_jK_j=I$. The two Neumann margins and [F12] make $D_Y,A'$ invertible with inverse norms at most $\|T_{11}^{-1}\|_2/(1-\|T_{11}^{-1}\|_2b)$ and $\|S_{22}^{-1}\|_2/(1-\|S_{22}^{-1}\|_2a)$. The identities $D_Y^{-1}C_Y-K_s=D_Y^{-1}[(C_Y-S_{11})-(D_Y-T_{11})K_s]$ and $A'^{-1}B'-K_u=A'^{-1}[(B'-T_{22})-(A'-S_{22})K_u]$ give exactly the stated $\epsilon_s,\epsilon_u$ bounds. [F2, F5, F6, F7, F12, step 2.1, algebra]

3.2 Put $P_Y=(I+Y^*Y)^{-1/2}$. Since $V=[U\ V_2]$ is unitary, $(U+V_2Y)^*(U+V_2Y)=I+Y^*Y$, so $\widehat U^*\widehat U=I$ and $U^*\widehat U=P_Y$. Therefore $(\widehat U-U)^*(\widehat U-U)=2(I-P_Y)$. The largest eigenvalue of $Y^*Y$ is $y^2$, so [F3], [F5], and [F9] give the exact norm $\|\widehat U-U\|_2=\beta(y)$. The scalar function $g(t)=t-2(1-(1+t)^{-1/2})$ has $g(0)=0$ and $g'(t)=1-(1+t)^{-3/2}\ge0$ for $t\ge0$, proving $\beta(y)\le y\le r$. Also $(I-UU^*)\widehat U=V_2YP_Y$, whose largest singular value is $y/\sqrt{1+y^2}$ by [F3] and [F5]. [F3, F5, F9, given, step 2.1, algebra]

4.1 If $K$ is either quotient in step 3.1 and $\|H\|_2\le\epsilon$, then $W-(K+H)^*W(K+H)=I-(K^*WH+H^*WK+H^*WH)$. The subtracted Hermitian term has norm at most $\|W\|_2(2\|K\|_2\epsilon+\epsilon^2)<1$, so the left side is positive definite; an eigenvector of $K+H$ with eigenvalue $\lambda$ gives $(1-|\lambda|^2)v^*Wv>0$, hence $|\lambda|<1$. Applied to $D_Y^{-1}C_Y$ and $A'^{-1}B'$, this makes the leading perturbed roots finite and stable, and the trailing roots outside, with zero eigenvalues of $A'^{-1}B'$ representing infinity. The shears have determinant one, so [F13] preserves the homogeneous determinant under their left/right transformations; [F10] factors it across the diagonal blocks. Since $D_Y$ and $A'$ are invertible, both diagonal pencils are regular and their product is a regular pencil with the claimed $n+n$ root split. The regular base and perturbed determinant polynomials have finite root sets by [F14]; choose $\lambda_0\in\mathbb C$ outside their union. Put $\mathcal R=(N'-\lambda_0M')^{-1}M'$ for $N'=L_Z(S+E)R_Y$ and $M'=L_Z(T+F)R_Y$. Then $N'-\lambda M'=(N'-\lambda_0M')[I-(\lambda-\lambda_0)\mathcal R]$, so [F13] expresses the pencil determinant as a nonzero constant times $\det(I-(\lambda-\lambda_0)\mathcal R)$. Jordan form [F11] factors the latter into $\prod_j(1-(\lambda-\lambda_0)\mu_j)$ over the eigenvalues $\mu_j$ of $\mathcal R$, with algebraic multiplicity. Thus each finite root maps injectively to $\mu=1/(\lambda-\lambda_0)$, and the polynomial degree is the number of nonzero $\mu_j$, counted with algebraic multiplicity. Its homogeneous form is $\det(\beta N'-\alpha M')=\beta^{2n}\det(N'-(\alpha/\beta)M')$; by [F15], its multiplicity at $[1:0]$ is $2n$ minus that degree, exactly the multiplicity of the zero eigenvalue of $\mathcal R$. The matrix $\mathcal R$ is block upper triangular with diagonal blocks $(C_Y-\lambda_0D_Y)^{-1}D_Y$ and $(A'-\lambda_0B')^{-1}B'$, whose spectra are disjoint because their pencil-root groups are disjoint and the projective map is injective. For a generalized eigenvector $[x;y]$ belonging to a leading-block eigenvalue $\mu$, its trailing equation is $(\mathcal R_{22}-\mu I)^k y=0$; disjoint spectra force $y=0$. Conversely, Jordan form [F11] supplies a basis of generalized eigenvectors of the leading $n\times n$ block, which embed as $[x;0]$ and span exactly the full leading-root generalized eigenspace. Undoing the graph shears and unitary factors identifies this right subspace with $V[I;Y]$ and its matching left deflating graph with $Q[I;Z]$. [F6, F10, F11, F13, F14, F15, given, step 3.1, algebra]

4.2 Write $\Delta U=\widehat U-U$. Under the strict chart margin, $\widehat U_1=U_1(I+U_1^{-1}\Delta U_1)$ and $\|U_1^{-1}\Delta U_1\|_2\le\|U_1^{-1}\|_2\beta(y)<1$. By [F12], $\widehat U_1$ is invertible and $\|\widehat U_1^{-1}\|_2\le(\|U_1^{-1}\|_2^{-1}-\beta(y))^{-1}$. Using $U_2=XU_1$ gives $\widehat U_2\widehat U_1^{-1}-X=(\Delta U_2-X\Delta U_1)\widehat U_1^{-1}$; [F6] yields the stated chart estimate. Since $\beta$ is increasing and $\beta(y)\le\beta(r)$, the stronger margin $\|U_1^{-1}\|_2\beta(r)<1$ gives the computable weaker bound. An independently rotated orthonormal basis of the same space is $\widehat U R_0$ for unitary $R_0$ and has the same chart because $(\widehat U_1R_0)^{-1}=R_0^{-1}\widehat U_1^{-1}$. The proof assumes no structure on $E,F$, so it gives no Riccati residual, symmetry, positivity, or post-symmetrization stability certificate. [F5, F6, F12, step 3.2, algebra]

5.1 As $\delta\to0$ with $r=2\kappa\delta$, $\theta\to0$, $a,b\to0$, and $\epsilon_s,\epsilon_u\to0$; hence the contraction, Neumann, and both Stein margins in the Statement hold for all sufficiently small $\delta$. If $U_1$ is invertible, also $\|U_1^{-1}\|_2\beta(r)<1$ for all sufficiently small $\delta$, so the computable chart margin holds. [given, step 2.1, step 3.1, step 4.1, algebra] ∎

No arbitrary Axiom of Choice is used: all constructions are finite-dimensional scans, norm-convergent series, or selections from complements of finite subsets of $\mathbb C$.
