---
id: thm-conjugacy-of-cartan-involutions
kind: theorem
title: Conjugacy of Cartan involutions
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-existence-of-a-cartan-involution, def-cartan-involution-of-a-real-semisimple-lie-algebra, thm-every-derivation-of-a-semisimple-lie-algebra-is-inner, cor-semisimple-lie-algebras-are-centerless-and-perfect, prop-trace-forms-are-symmetric-and-invariant, def-killing-form-of-a-finite-dimensional-lie-algebra, def-self-adjoint-and-normal-endomorphism, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §2, Theorem 6.16 and Corollary 6.19 with their proofs, printed pp. 356-358"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 43, §43.1, printed pp. 217-218"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g_0$ be a finite-dimensional real
semisimple Lie algebra. Then any two Cartan involutions of $\mathfrak g_0$ are
conjugate by an inner automorphism: for Cartan involutions $\theta,\theta'$
there is $X\in\mathfrak g_0$ with
$\theta'=e^{\operatorname{ad}_X}\,\theta\,e^{-\operatorname{ad}_X}$
([[def-cartan-involution-of-a-real-semisimple-lie-algebra]],
[[thm-existence-of-a-cartan-involution]]).

## Facts & Assumptions

**Given:** The Axiom of Choice; a finite-dimensional real semisimple Lie algebra $\mathfrak g_0$ with Killing form $B$; two Cartan involutions $\theta,\theta'$ of $\mathfrak g_0$; and the positive definite inner product $B_\theta(X,Y)=-B(X,\theta Y)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is inherited from the existence theory of [L1].

[L1] Cartan involutions exist; a Cartan involution $\varphi$ is an involutive automorphism of $\mathfrak g_0$ with $B_\varphi(X,Y)=-B(X,\varphi Y)$ positive definite ([[thm-existence-of-a-cartan-involution]], [[def-cartan-involution-of-a-real-semisimple-lie-algebra]]).

[L2] The Killing form is symmetric and invariant, and invariant under every automorphism of $\mathfrak g_0$; the algebra is semisimple, so $Z(\mathfrak g_0)=0$ and $\operatorname{Der}(\mathfrak g_0)=\operatorname{ad}(\mathfrak g_0)$ with $\operatorname{ad}$ injective ([[prop-trace-forms-are-symmetric-and-invariant]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[cor-semisimple-lie-algebras-are-centerless-and-perfect]], [[thm-every-derivation-of-a-semisimple-lie-algebra-is-inner]]).

[L3] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal basis of eigenvectors with real eigenvalues ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]], [[def-self-adjoint-and-normal-endomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Put $\omega:=\theta'\theta\in\operatorname{Aut}(\mathfrak g_0)$ and $B_1:=B_\theta$. The identity $\theta\omega=\omega^{-1}\theta$ holds because both sides equal $\theta\theta'\theta$. Since $B$ is invariant under the automorphisms $\omega^{-1}$ and $\theta$, $B_1(\omega Z,W)=-B(\omega Z,\theta W)=-B(Z,\omega^{-1}\theta W)=-B(Z,\theta\omega W)=B_1(Z,\omega W)$ for all $Z,W$: the automorphism $\omega$ is self-adjoint for the inner product $B_1$. [L2, algebra]

2.1 $\rho:=\omega^2=\omega^*\omega$ is positive definite and self-adjoint for $B_1$: it is self-adjoint because $\omega$ is, and $B_1(\rho Z,Z)=B_1(\omega Z,\omega Z)>0$ for $Z\ne0$ because $\omega$ is invertible. [step 1.1, algebra]

2.2 Let now $\alpha,\beta$ be commuting Cartan involutions of $\mathfrak g_0$ and let $Y$ satisfy $\alpha Y=Y$, $\beta Y=-Y$. Then $0<B_\alpha(Y,Y)=-B(Y,\alpha Y)=-B(Y,Y)$ and $0<B_\beta(Y,Y)=-B(Y,\beta Y)=+B(Y,Y)$, a contradiction; hence the simultaneous $(+1,-1)$ eigenspace of $(\alpha,\beta)$ is zero, and exchanging $\alpha$ and $\beta$ shows that the $(-1,+1)$ eigenspace is zero as well. On the two remaining eigenspaces the two involutions agree, so $\alpha=\beta$. [L2, step 1.1, algebra]

3.1 By [L3] choose a $B_1$-orthonormal eigenbasis of $\rho$ with eigenvalues $\lambda_j>0$ and define $\rho^r$, for real $r$, to act as $\lambda_j^r$ on the eigenspace for $\lambda_j$. If $X,Y$ are eigenvectors with eigenvalues $\lambda_i,\lambda_j$, then $\rho\in\operatorname{Aut}(\mathfrak g_0)$ gives $\rho[X,Y]=[\rho X,\rho Y]=\lambda_i\lambda_j[X,Y]$, so $[X,Y]$ lies in the eigenspace for $\lambda_i\lambda_j$; hence $\rho^r[X,Y]=(\lambda_i\lambda_j)^r[X,Y]=[\rho^rX,\rho^rY]$ and, by bilinearity, $\rho^r\in\operatorname{Aut}(\mathfrak g_0)$. Also $\rho^r$ is a function of $\rho$, so it commutes with $\rho$ and with $\omega$. [L3, step 2.1, algebra]

4.1 Let $D$ act as $\log\lambda_j$ on the eigenspace for $\lambda_j$ of $\rho$, so that $e^D=\rho$ and $D$ is self-adjoint for $B_1$. For eigenvectors $X,Y$ as in step 3.1, $D[X,Y]=(\log\lambda_i+\log\lambda_j)[X,Y]=[DX,Y]+[X,DY]$, so $D$ is a derivation of $\mathfrak g_0$ by bilinearity; by [L2] there is a unique $X\in\mathfrak g_0$ with $D=\operatorname{ad}X$, and then $\rho=e^{\operatorname{ad}X}$. [L3, step 3.1, algebra]

5.1 The powers of $\rho$ satisfy $\rho^r\theta=\theta\rho^{-r}$ for all real $r$: from $\rho\theta=\omega^2\theta=\omega(\theta\omega^{-1})=(\omega\theta)\omega^{-1}=\theta\omega^{-1}\omega^{-1}=\theta\rho^{-1}$ one gets $\rho\theta Z=\lambda^{-1}\theta Z$ on an eigenvector of eigenvalue $\lambda$, and iteration gives the identity. Put $\varphi:=\rho^{1/4}$. Then $\varphi\theta\varphi^{-1}\theta'=\rho^{1/4}\theta\rho^{-1/4}\theta'=\rho^{1/2}\theta\theta'=\rho^{1/2}\omega^{-1}=\rho^{-1/2}\omega=\omega\rho^{-1/2}=\theta'\theta\rho^{-1/2}=\theta'\rho^{1/4}\theta\rho^{-1/4}=\theta'\varphi\theta\varphi^{-1},$ using $\rho^{1/2}\omega^{-1}=\rho^{-1/2}\rho\omega^{-1}=\rho^{-1/2}\omega$, the commutation of $\omega$ with powers of $\rho$, and $\theta\rho^{-1/4}=\rho^{1/4}\theta$. Hence $\psi:=\varphi\theta\varphi^{-1}$ is an involution of $\mathfrak g_0$ commuting with $\theta'$, and it is again a Cartan involution: $B_\psi(\varphi Z,\varphi W)=B_1(Z,W)$ is positive definite because $\varphi$ is an automorphism and $\theta$ is a Cartan involution. [step 1.1, step 3.1, step 4.1, algebra]

6.1 Applying step 2.2 to the commuting pair $\psi,\theta'$ gives $\psi=\theta'$, that is, $\theta'=\varphi\theta\varphi^{-1}$ with $\varphi=\rho^{1/4}=e^{\operatorname{ad}(X/4)}$ for the element $X$ of step 4.1. Thus $\theta'$ is the conjugate of $\theta$ by the inner automorphism $e^{\operatorname{ad}(X/4)}$, and the theorem follows. [step 4.1, step 5.1, step 2.2, A1, algebra] ∎
