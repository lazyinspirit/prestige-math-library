---
id: thm-conjugacy-of-compact-real-forms
kind: theorem
title: Conjugacy of compact real forms
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-existence-of-a-compact-real-form, thm-real-forms-correspond-to-conjugate-linear-involutions, thm-every-derivation-of-a-semisimple-lie-algebra-is-inner, thm-cartans-semisimplicity-criterion, cor-semisimple-lie-algebras-are-centerless-and-perfect, prop-trace-forms-are-symmetric-and-invariant, def-killing-form-of-a-finite-dimensional-lie-algebra, def-real-form-of-a-complex-lie-algebra, def-compact-real-form-of-a-complex-semisimple-lie-algebra, def-self-adjoint-and-normal-endomorphism, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §1, Lemma 6.15, Theorem 6.16 and Corollaries 6.19-6.20 with their proofs, printed pp. 356-359"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 39, §39.4, printed pp. 203-205"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra and let $\mathfrak u_1,\mathfrak u_2$ be two compact real
forms of $\mathfrak g$. Then there is an inner automorphism $\varphi$ of
$\mathfrak g$ with $\varphi(\mathfrak u_1)=\mathfrak u_2$; here an automorphism
is called inner when it is a finite product of factors
$\exp(\operatorname{ad}W)$, $W\in\mathfrak g$. In particular any two compact
real forms of $\mathfrak g$ are isomorphic as real Lie algebras.

## Facts & Assumptions

**Given:** The Axiom of Choice; a finite-dimensional complex semisimple Lie algebra $\mathfrak g$ with Killing form $B$; two compact real forms $\mathfrak u_1,\mathfrak u_2$ with associated conjugations $\tau_1,\tau_2$; and the real Lie algebra $\mathfrak g_{\mathbb R}$ underlying $\mathfrak g$, with Killing form $B_{\mathbb R}$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is inherited from the compact-form theory of [L1].

[L1] Each $\mathfrak u_i$ is a real form of $\mathfrak g$ whose Killing form is negative definite, and the associated conjugation $\tau_i(X+iY)=X-iY$ ($X,Y\in\mathfrak u_i$) is a conjugate-linear Lie-algebra involution with fixed locus $\mathfrak u_i$, so that $\mathfrak u_i=\{Z:\tau_iZ=Z\}$ and $\mathfrak g=\mathfrak u_i\oplus i\mathfrak u_i$ ([[thm-real-forms-correspond-to-conjugate-linear-involutions]], [[def-real-form-of-a-complex-lie-algebra]], [[def-compact-real-form-of-a-complex-semisimple-lie-algebra]], [[thm-existence-of-a-compact-real-form]]).

[L2] The Killing form $B$ is symmetric, invariant and nondegenerate; a finite-dimensional Lie algebra over a characteristic-zero field is semisimple if and only if its Killing form is nondegenerate, and for such an algebra every derivation is inner with $\operatorname{Der}=\operatorname{ad}$ and $Z(\mathfrak g)=0$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[prop-trace-forms-are-symmetric-and-invariant]], [[thm-cartans-semisimplicity-criterion]], [[thm-every-derivation-of-a-semisimple-lie-algebra-is-inner]], [[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

[L3] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal basis of eigenvectors with real eigenvalues, and every self-adjoint endomorphism is normal ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]], [[def-self-adjoint-and-normal-endomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Regarded as a real Lie algebra, $\mathfrak g_{\mathbb R}$ has the same underlying set as $\mathfrak g$ and its adjoint operators are the realifications of those of $\mathfrak g$: for $Z\in\mathfrak g$ the real-linear map $\operatorname{ad}_Z$ on $\mathfrak g_{\mathbb R}$ is the realification of the complex-linear $\operatorname{ad}_Z$ on $\mathfrak g$. Since the real trace of the realification of a complex-linear endomorphism is twice its complex trace, $B_{\mathbb R}(Z,W)=2\operatorname{Re}B(Z,W)$ for all $Z,W\in\mathfrak g$. If $Z$ lies in the radical of $B_{\mathbb R}$, then $\operatorname{Re}B(Z,W)=0$ for every $W$, and substituting $iW$ gives $-\operatorname{Im}B(Z,W)=0$; hence $B(Z,W)=0$ for every $W$ and $Z=0$ by nondegeneracy of $B$. Thus $B_{\mathbb R}$ is nondegenerate and $\mathfrak g_{\mathbb R}$ is semisimple by the criterion, so every derivation of $\mathfrak g_{\mathbb R}$ is inner and $Z(\mathfrak g_{\mathbb R})=0$. [L2, given, algebra]

1.2 For each $i$ the map $\tau_i$ is real-linear with $\tau_i^2=\mathrm{id}$ and preserves brackets, and for all $Z,W\in\mathfrak g$ one has $B(\tau_iZ,\tau_iW)=\overline{B(Z,W)}$: writing $Z=X+iY$ and $W=X'+iY'$ with $X,Y,X',Y'\in\mathfrak u_i$ and using complex bilinearity and symmetry of $B$, both sides equal $B(X,X')-B(Y,Y')-i\bigl(B(X,Y')+B(Y,X')\bigr)$. Consequently $B_{\mathbb R}(\tau_iZ,\tau_iW)=2\operatorname{Re}\overline{B(Z,W)}=B_{\mathbb R}(Z,W)$: the form $B_{\mathbb R}$ is $\tau_i$-invariant. [L1, L2, algebra]

2.1 Each $\tau_i$ is a Cartan involution of $\mathfrak g_{\mathbb R}$. Indeed, for $Z=X+iY\ne0$ with $X,Y\in\mathfrak u_i$ one computes $(B_{\mathbb R})_{\tau_i}(Z,Z)=-B_{\mathbb R}(Z,\tau_iZ)=-2\operatorname{Re}B(Z,\tau_iZ)=-2\bigl(B(X,X)+B(Y,Y)\bigr)$, using $B(Z,\tau_iZ)=B(X+iY,X-iY)=B(X,X)+B(Y,Y)$. Both summands are $\le0$ and each vanishes only at $0$ because the Killing form of $\mathfrak u_i$ is negative definite, so $(B_{\mathbb R})_{\tau_i}(Z,Z)>0$ for $Z\ne0$; the form is symmetric and bilinear, hence positive definite, and $\tau_i$ is a Cartan involution. [L1, L2, step 1.2, algebra]

3.1 Put $\omega:=\tau_2\tau_1\in\operatorname{Aut}(\mathfrak g_{\mathbb R})$, an invertible automorphism, and put $B_1:=(B_{\mathbb R})_{\tau_1}$. The identity $\tau_1\omega=\omega^{-1}\tau_1$ holds because both sides equal $\tau_1\tau_2\tau_1$. Invariance of $B_{\mathbb R}$ under $\omega^{-1}$ and under $\tau_1$ therefore gives, for all $Z,W$, $B_1(\omega Z,W)=-B_{\mathbb R}(\omega Z,\tau_1W)=-B_{\mathbb R}(Z,\omega^{-1}\tau_1W)=-B_{\mathbb R}(Z,\tau_1\omega W)=B_1(Z,\omega W),$ so $\omega$ is self-adjoint for the inner product $B_1$. Since $\omega$ is invertible, $\rho:=\omega^2=\omega^*\omega$ satisfies $B_1(\rho Z,Z)=B_1(\omega Z,\omega Z)>0$ for $Z\ne0$: the automorphism $\rho$ is self-adjoint and positive definite for $B_1$. [L2, step 2.1, algebra]

3.2 Let $\theta,\theta'$ be Cartan involutions of a real semisimple Lie algebra with $\theta\theta'=\theta'\theta$ and let $Y$ satisfy $\theta Y=Y$, $\theta'Y=-Y$. Then $0<B_\theta(Y,Y)=-B_{\mathbb R}(Y,\theta Y)=-B_{\mathbb R}(Y,Y)$ and $0<B_{\theta'}(Y,Y)=-B_{\mathbb R}(Y,\theta'Y)=+B_{\mathbb R}(Y,Y)$, a contradiction; hence the simultaneous $(+1,-1)$ eigenspace of $(\theta,\theta')$ is zero. Exchanging the roles of $\theta$ and $\theta'$ shows that the $(-1,+1)$ eigenspace is zero too, so $\theta=\theta'$ on $\mathfrak g_{\mathbb R}$. [L2, step 2.1, algebra]

4.1 By [L3] there is a $B_1$-orthonormal basis of $\mathfrak g_{\mathbb R}$ consisting of eigenvectors of $\rho$, with eigenvalues $\lambda_1,\dots,\lambda_n>0$. For real $r$ define $\rho^r$ as the endomorphism acting as $\lambda_j^r$ on the eigenspace of $\rho$ for $\lambda_j$. If $X,Y$ are eigenvectors with eigenvalues $\lambda_i,\lambda_j$, then from $\rho\in\operatorname{Aut}(\mathfrak g_{\mathbb R})$ one gets $\rho[X,Y]=[\rho X,\rho Y]=\lambda_i\lambda_j[X,Y]$, so $[X,Y]$ lies in the eigenspace for $\lambda_i\lambda_j$; hence $\rho^r[X,Y]=(\lambda_i\lambda_j)^r[X,Y]=[\rho^rX,\rho^rY]$, and by bilinearity $\rho^r$ is an automorphism of $\mathfrak g_{\mathbb R}$. Also $\rho^r$ is a function of $\rho$, so it commutes with $\rho$ and with $\omega$. [L3, step 3.1, algebra]

5.1 Define the endomorphism $D$ of $\mathfrak g_{\mathbb R}$ to act as $\log\lambda_j$ on the eigenspace for $\lambda_j$, so that $\exp(D)=\rho$ and $D$ is self-adjoint for $B_1$; for eigenvectors $X,Y$ as in step 4.1, $D[X,Y]=(\log\lambda_i+\log\lambda_j)[X,Y]=[DX,Y]+[X,DY]$, and by bilinearity $D$ is a derivation of $\mathfrak g_{\mathbb R}$. By step 1.1 there is a unique $X\in\mathfrak g_{\mathbb R}$ with $D=\operatorname{ad}X$, and then $\rho=\exp(\operatorname{ad}X)$ lies in the subgroup generated by the automorphisms $\exp(\operatorname{ad}W)$, $W\in\mathfrak g_{\mathbb R}=\mathfrak g$. [L3, step 1.1, step 4.1, algebra]

5.2 The real powers of $\rho$ satisfy $\rho^r\tau_1=\tau_1\rho^{-r}$ for all $r$: on an eigenvector $X$ of $\rho$ with eigenvalue $\lambda$ and using $\tau_1\rho=\rho^{-1}\tau_1$ (which follows from $2\rho\tau_1=\omega^2\tau_1=\omega(\tau_1\omega^{-1})=(\omega\tau_1)\omega^{-1}=\tau_1\omega^{-1}\omega^{-1}=\tau_1\rho^{-1}$, that is, $\rho\tau_1=\tau_1\rho^{-1}$) one gets $\rho\tau_1X=\tau_1\rho^{-1}X=\lambda^{-1}\tau_1X$, and iteration gives $\rho^r\tau_1X=\lambda^{-r}\tau_1X=\tau_1\rho^{-r}X$. Put $\varphi:=\rho^{1/4}$, so that $\varphi$ is an automorphism of $\mathfrak g_{\mathbb R}$ lying in the subgroup generated by the $\exp(\operatorname{ad}W)$. Then $\varphi\tau_1\varphi^{-1}\tau_2=\rho^{1/4}\tau_1\rho^{-1/4}\tau_2=\rho^{1/2}\tau_1\tau_2=\rho^{1/2}\omega^{-1}=\rho^{-1/2}\omega=\omega\rho^{-1/2}=\tau_2\tau_1\rho^{-1/2}=\tau_2\rho^{1/4}\tau_1\rho^{-1/4}=\tau_2\varphi\tau_1\varphi^{-1},$ using $\rho^{1/2}\omega^{-1}=\rho^{-1/2}\rho\omega^{-1}=\rho^{-1/2}\omega$, the commutation of $\omega$ with powers of $\rho$, and $\tau_1\rho^{-1/4}=\rho^{1/4}\tau_1$. [step 3.1, step 4.1, algebra]

6.1 By step 5.2 the involution $\psi:=\varphi\tau_1\varphi^{-1}$ commutes with $\tau_2$. It is again a Cartan involution of $\mathfrak g_{\mathbb R}$: $B_\psi(\varphi Z,\varphi W)=B_1(Z,W)$ is positive definite because $\varphi$ is an automorphism and $\tau_1$ is a Cartan involution by step 2.1. Hence step 3.2 gives $\psi=\tau_2$, that is, $\tau_2=\varphi\tau_1\varphi^{-1}$. [step 2.1, step 5.2, step 3.2, algebra]

7.1 Taking fixed loci and using [L1], $\mathfrak u_2=\{Z:\tau_2Z=Z\}=\{Z:\varphi\tau_1\varphi^{-1}Z=Z\}=\varphi\{Z:\tau_1Z=Z\}=\varphi(\mathfrak u_1)$. The automorphism $\varphi$ is complex-linear because $\rho=\omega^2$ is a composition of two conjugate-linear maps and its eigenspaces are therefore complex subspaces, so $\varphi$ is complex-linear; it is a finite product of factors $\exp(\operatorname{ad}W)$ with $W\in\mathfrak g$, hence an inner automorphism of $\mathfrak g$. Restricting $\varphi$ to the real form $\mathfrak u_1$ gives a real Lie-algebra isomorphism onto $\mathfrak u_2$, and the theorem follows. [L1, step 5.1, step 6.1, A1, algebra] ∎
