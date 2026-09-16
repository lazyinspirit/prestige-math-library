---
id: ex-su-two-to-so-three-as-a-covering-homomorphism
kind: example
title: SU(2) to SO(3) as a covering homomorphism
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-covering-homomorphism-of-lie-groups, def-quaternions, thm-quaternions-form-a-division-ring, thm-a-regular-level-set-is-an-embedded-submanifold, thm-cartans-closed-subgroup-theorem, thm-smooth-inverse-function-theorem-on-manifolds, def-determinant-of-a-square-matrix, def-transpose-of-a-matrix, thm-sine-and-cosine-parametrize-the-unit-circle]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Exercise 3.9 and both parts, printed page 26; Proposition 6.7 and proof, printed page 40
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Introduction, Problems 6-9, printed pages 20-21
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. Identifying $SU(2)$ with the unit quaternions,
conjugation on the imaginary quaternions defines a surjective two-sheeted
covering homomorphism

$$\rho:SU(2)\longrightarrow SO(3),\qquad \rho(q)(v)=qvq^{-1},$$

whose kernel is $\{1,-1\}$.

## Facts & Assumptions

**Given:** the quaternion basis $1,i,j,k$, with $\operatorname{Im}\mathbb H=\mathbb Ri\oplus\mathbb Rj\oplus\mathbb Rk$ carrying its ordinary Euclidean inner product.

[F1] Quaternion multiplication is associative, every nonzero quaternion is invertible, and $q^{-1}=\overline q/N(q)$. [[def-quaternions]], [[thm-quaternions-form-a-division-ring]].

[F2] Regular level sets are embedded submanifolds, and a closed subgroup of a finite-dimensional Lie group has its unique embedded Lie-group structure. [[thm-a-regular-level-set-is-an-embedded-submanifold]], [[thm-cartans-closed-subgroup-theorem]].

[F3] A smooth map with invertible differential has a smooth local inverse. [[thm-smooth-inverse-function-theorem-on-manifolds]].

[F4] Determinants, transposes, and the parametrization of the unit circle are available. [[def-determinant-of-a-square-matrix]], [[def-transpose-of-a-matrix]], [[thm-sine-and-cosine-parametrize-the-unit-circle]].

[A1] $\mathrm{AC}_\omega$ is used through the closed-subgroup theorem [F2] that constructs the embedded Lie-group structure on $SO(3)$. [[def-countable-choice]].

## Verification

**Proof technique:** explicit quaternion calculation followed by explicit covering sheets.

1.1 Write $q=a+bi+cj+dk$. A coordinate check from [F1] gives $\overline{qr}=\bar r\bar q$ and hence $N(qr)=N(q)N(r)$. Thus the unit sphere $S^3\subset\mathbb H$ is a group, with inverse $q\mapsto\bar q$. It is a smooth three-manifold by [F2], because $N^{-1}(1)$ is regular: $dN_q(w)=2\langle q,w\rangle$ is nonzero on every unit $q$. Multiplication and inversion are polynomial and linear respectively, so this is a Lie group. [F1, F2, algebra]

1.2 The determinant-nonzero matrices form an open subset $GL_3(\mathbb R)$ of the nine-dimensional matrix space. Matrix multiplication is polynomial and inversion is the smooth adjugate-over-determinant formula, so this open manifold is a Lie group. Inside it, the equations $R^TR=I$ and $\det R=1$ define a closed subgroup; [F2] therefore gives it the embedded Lie-group structure denoted $SO(3)$. This is the exact use of $\mathrm{AC}_\omega$ in the construction. [A1, F2, F4, algebra]

1.3 For a unit $q=a+r$, with $r=bi+cj+dk$, and an imaginary quaternion $v$, direct multiplication gives the vector formula $qvq^{-1}=(a^2-|r|^2)v+2\langle r,v\rangle r+2a(r\mathbin\times v)$. It also gives zero real part. The identities $\langle r\times v,r\rangle=\langle r\times v,v\rangle=0$ and $|r\times v|^2=|r|^2|v|^2-\langle r,v\rangle^2$ show from this formula that $|qvq^{-1}|=|v|$. Hence conjugation defines an orthogonal transformation of $\operatorname{Im}\mathbb H$. [F1, algebra]

2.1 The polynomial map $a+bi+cj+dk\mapsto\begin{pmatrix}a+bi&c+di\\-c+di&a-bi\end{pmatrix}$ preserves products by the quaternion table. Its image consists exactly of the matrices in $SU(2)$, since their columns have the displayed form and the unitary and determinant-one equations reduce to $a^2+b^2+c^2+d^2=1$. It and its coordinate inverse are smooth, so it identifies the Lie group of step 1.1 with $SU(2)$. [F1, step 1.1, algebra]

2.2 The unit sphere is path connected: if $q\ne-1$, normalize the nonzero segment $(1-t)q+t$, while $-1$ is joined to $1$ by $t\mapsto\cos(\pi t)+i\sin(\pi t)$. Consequently the determinant of the orthogonal map in step 1.3, a continuous function with values in $\{1,-1\}$, equals its value $1$ at $q=1$. Thus $\rho(q)\in SO(3)$. Associativity gives $\rho(q_1q_2)=\rho(q_1)\rho(q_2)$, and the coordinate formula in step 1.3 makes $\rho$ smooth. [F1, F4, step 1.2, step 1.3, algebra]

2.3 Identify $T_1SU(2)$ with $\operatorname{Im}\mathbb H$. Differentiating conjugation along $q(t)=1+tr+O(t^2)$ gives $d\rho_1(r)(v)=rv-vr=2r\times v$. Differentiating $R^TR=I$ at $I$ shows that $T_I SO(3)$ is contained in the three-dimensional space of skew-symmetric endomorphisms. The displayed cross-product map takes values in that space and is injective: if $r\times v=0$ for every $v$, take a basis vector not parallel to nonzero $r$ to get a contradiction. Its three-dimensional image lies in $T_I SO(3)$, so the inclusions force $T_I SO(3)$ to be the full skew-symmetric space and $d\rho_1$ to be an isomorphism. By [F3], there are neighborhoods $U_0$ of $1$ and $W_0$ of $I$ such that $\rho|_{U_0}:U_0\to W_0$ is a diffeomorphism. Choose a smaller open neighborhood $U\subseteq U_0$ with $U\cap(-U)=\varnothing$ and put $W=\rho(U)$; the restriction $\rho|_U:U\to W$ remains a diffeomorphism and $W$ is open. [F3, step 1.3, algebra]

3.1 The map $\rho$ is onto. For $R\in SO(3)$, $\det(R-I)=\det(R^T-I)=\det(R^{-1}-I)=\det(I-R)=-\det(R-I)$, so $\det(R-I)=0$. Choose a unit vector $u$ fixed by $R$. Its perpendicular plane is invariant, and the restriction of $R$ there is an orientation-preserving planar orthogonal map. By [F4], in a positively oriented orthonormal basis it is rotation through some angle $\theta$. Substituting $q=\cos(\theta/2)+u\sin(\theta/2)$ into the formula of step 1.3 gives Rodrigues' formula, so $\rho(q)=R$. Only this one finite-dimensional choice of an axis and basis is made. [F4, step 1.3, step 2.2, algebra, construct]

3.2 If $\rho(q)$ is the identity, then $q$ commutes with $i,j,k$. Comparing $qi$ with $iq$ first gives $c=d=0$, and comparing $(a+bi)j$ with $j(a+bi)$ then gives $b=0$. Since $q$ is unit, $a=1$ or $a=-1$. Conversely both real unit quaternions act trivially. Therefore $\ker\rho=\{1,-1\}$, and every fibre is exactly $\{q,-q\}$. [F1, step 2.2, algebra]

4.1 Step 3.2 now gives $\rho^{-1}(W)=U\sqcup(-U)$, and both restrictions are diffeomorphisms onto $W$. For arbitrary $R_0\in SO(3)$ choose one $q_0$ above it using step 3.1; then $R_0W$ is evenly covered by the two translated sheets $q_0U$ and $-q_0U$. Hence $\rho$ is a covering homomorphism in the sense of [[def-covering-homomorphism-of-lie-groups]], with exactly two sheets. The groups are nonempty and three-dimensional; no zero-dimensional, endpoint, degenerate, or biconditional case is hidden. The proof itself makes only finitely many choices, while $\mathrm{AC}_\omega$ is used through the closed-subgroup construction of $SO(3)$ in [F2]. [A1, F2, step 3.1, step 3.2, step 2.3] ∎
