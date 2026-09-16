---
id: ex-grassmannians-from-unitary-symplectic-reduction
kind: example
title: Grassmannians from unitary symplectic reduction
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-marsden-weinstein-meyer-symplectic-reduction, prop-dimension-of-a-regular-nonzero-reduced-space, thm-the-canonical-cotangent-two-form-is-symplectic, def-coadjoint-representation-of-a-lie-group, def-fundamental-vector-field-of-a-left-action, def-countable-choice, cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.4.4, unitary actions and moment maps, printed pages 89--90; §8.1, examples
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Homework 20, Grassmannian example, printed page 168
proof_strategy: direct
---

## Example

Let $M=\mathbb C^{k\times n}$ with the real inner product
$\langle X,Y\rangle=\operatorname{Re}\operatorname{tr}(X^*Y)$ and the
symplectic form

$$\omega(X,Y)=\operatorname{Im}\operatorname{tr}(X^*Y),$$

and let $U(k)$ act on the left by matrix multiplication,
$g\mathbin{\cdot}A=gA$. Then, with $\mathfrak u(k)^*$ identified with
$\mathfrak u(k)$ through the inner product,

$$\mu(A)=-\frac i2AA^*+\lambda iI\qquad(\lambda>0)$$

is an equivariant moment map. Its zero level is the scaled Stiefel manifold
$\{A:AA^*=2\lambda I\}$, on which $U(k)$ acts freely and properly, and the
reduction is the Grassmannian

$$M_0=\{A:AA^*=2\lambda I\}/U(k)=\operatorname{Gr}(k,n),$$

of dimension $2k(n-k)$, carrying the reduced form characterised by
$\pi^*\omega^{\mathrm{red}}=\iota^*\omega$, which is the standard Kähler form of
the Grassmannian in this frame model.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the space $M=\mathbb C^{k\times n}$ with the forms above, the left action of $U(k)$, and $\lambda>0$.

[F1] $U(k)$ is a compact Lie group with Lie algebra $\mathfrak u(k)=\{X:X^*+X=0\}$. .

[F2] $\omega(X,Y)=\operatorname{Im}\operatorname{tr}(X^*Y)$ is a symplectic form on the real vector space $M$, since it is an alternating bilinear form with $\omega(X,iX)=\|X\|^2>0$. [[thm-the-canonical-cotangent-two-form-is-symplectic]].

[F3] The fundamental field of $\xi\in\mathfrak u(k)$ is $\xi_M(A)=\left.\frac d{dt}\right|_0e^{-t\xi}A=-\xi A$. [[def-fundamental-vector-field-of-a-left-action]].

[F4] The coadjoint action of $U(k)$ on $\mathfrak u(k)^*$ corresponds under the invariant inner product to $H\mapsto gHg^{-1}$, so central elements are fixed. [[def-coadjoint-representation-of-a-lie-group]].

[F5] The reduction theorem applies when the value is regular and the stabilizer acts freely and properly; the reduced dimension is $\dim M-\dim G-\dim G_\alpha$. [[thm-marsden-weinstein-meyer-symplectic-reduction]], [[prop-dimension-of-a-regular-nonzero-reduced-space]].



## Verification

**Proof technique:** direct.

1.1 For $\xi\in\mathfrak u(k)$ and $X\in T_AM=M$, using [F3] and $(\xi A)^*=A^*\xi^*=-A^*\xi$, $$\omega(\xi_M(A),X)=\operatorname{Im}\operatorname{tr}\bigl((-\xi A)^*X\bigr)=\operatorname{Im}\operatorname{tr}(A^*\xi X).$$ [F2, F3]

2.1 With $\mu(A)=-\frac i2AA^*+\lambda iI$ we have $\mu(A)^*=-\mu(A)$, so $\mu(A)\in\mathfrak u(k)$ and the component is $\mu^\xi(A)=\langle\mu(A),\xi\rangle=\operatorname{Re}\operatorname{tr}(\mu(A)^*\xi)$; its derivative in the direction $X$ picks up $\frac i2(XA^*+AX^*)$ and, using $\operatorname{tr}(X^*\xi A)=-\overline{\operatorname{tr}(A^*\xi X)}$ together with cyclicity, equals $$d\mu^\xi_A(X)=-\operatorname{Im}\operatorname{tr}(A^*\xi X)=-\omega(\xi_M(A),X).$$ Hence the component moment equations hold. [step 1.1, F1, F2]

3.1 Equivariance: $\mu(gA)=-\frac i2gAA^*g^{-1}+\lambda iI=g\mu(A)g^{-1}$, which is the coadjoint action by [F4]; the added central term $\lambda iI$ is fixed. Hence $\mu$ is an equivariant moment map. [step 2.1, F4]

4.1 The zero level is $\mu^{-1}(0)=\{A:AA^*=2\lambda I\}$: a nonempty embedded submanifold (it contains the scaled matrix $A=\sqrt{2\lambda}(I\ 0)$). The value is regular and the action is free and proper: if $gA=A$ and $AA^*=2\lambda I$ then $g=gA A^*(2\lambda)^{-1}=A A^*(2\lambda)^{-1}=I$ because $gA=A$ and $AA^*$ is invertible, and the action is proper because $U(k)$ is compact. [step 3.1, F5]

5.1 Quotient: two frames $A,A'$ with $AA^*=A'A^*=2\lambda I$ lie in the same $U(k)$-orbit exactly when their rows span the same $k$-plane, so the quotient is the Grassmannian $\operatorname{Gr}(k,n)$ of $k$-planes in $\mathbb C^n$. [step 4.1]

6.1 Dimension check: $\dim M=2kn$ and $\dim G=\dim G_0=k^2$ because $0$ is a central coadjoint value, so by [F5] $\dim M_0=2kn-2k^2=2k(n-k)$, the dimension of $\operatorname{Gr}(k,n)$, and the reduced form is characterised by the pullback identity, which in this frame model is the standard Kähler form of the Grassmannian. [step 5.1, F5] ∎
