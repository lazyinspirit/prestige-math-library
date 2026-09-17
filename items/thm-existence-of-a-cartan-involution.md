---
id: thm-existence-of-a-cartan-involution
kind: theorem
title: Existence of a Cartan involution
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-complexification-preserves-semisimplicity, thm-real-forms-correspond-to-conjugate-linear-involutions, thm-existence-of-a-compact-real-form, thm-conjugacy-of-compact-real-forms, thm-cartans-semisimplicity-criterion, thm-every-derivation-of-a-semisimple-lie-algebra-is-inner, cor-semisimple-lie-algebras-are-centerless-and-perfect, prop-trace-forms-are-symmetric-and-invariant, def-killing-form-of-a-finite-dimensional-lie-algebra, def-complexification-of-a-real-lie-algebra, def-cartan-involution-of-a-real-semisimple-lie-algebra, def-self-adjoint-and-normal-endomorphism, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, def-axiom-of-choice, def-compact-real-form-of-a-complex-semisimple-lie-algebra]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §2, Proposition 6.14, Lemma 6.15, Theorem 6.16 and Corollary 6.18 with their proofs, printed pp. 355-358"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 43, §43.1, printed pp. 217-218"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Every finite-dimensional real semisimple Lie algebra
$\mathfrak g_0$ has a Cartan involution
([[def-cartan-involution-of-a-real-semisimple-lie-algebra]]).

## Facts & Assumptions

**Given:** The Axiom of Choice; a finite-dimensional real semisimple Lie algebra $\mathfrak g_0$ with Killing form $B_0$; its complexification $\mathfrak g=\mathfrak g_0\otimes_{\mathbb R}\mathbb C$ with Killing form $B$ and canonical conjugation $\sigma$; and the real Lie algebra $\mathfrak g_{\mathbb R}$ underlying $\mathfrak g$, with Killing form $B_{\mathbb R}$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is inherited through the compact-form existence of [L2].

[L1] The complexification $\mathfrak g$ is semisimple, $\mathfrak g=\mathfrak g_0\oplus i\mathfrak g_0$ is a real direct sum with $B$ the complex-bilinear extension of $B_0$, and $\sigma(X+iY)=X-iY$ is a conjugate-linear bracket-preserving involution with fixed locus $\mathfrak g_0$ ([[prop-complexification-preserves-semisimplicity]], [[thm-real-forms-correspond-to-conjugate-linear-involutions]], [[def-complexification-of-a-real-lie-algebra]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

[L2] $\mathfrak g$ has a compact real form $\mathfrak u_0$ with conjugation $\tau$ and negative definite Killing form on $\mathfrak u_0$, so that $\tau$ is a conjugate-linear bracket-preserving involution with fixed locus $\mathfrak u_0$ and $\mathfrak g=\mathfrak u_0\oplus i\mathfrak u_0$ ([[thm-existence-of-a-compact-real-form]], [[def-compact-real-form-of-a-complex-semisimple-lie-algebra]], [[thm-real-forms-correspond-to-conjugate-linear-involutions]]).

[L3] The Killing form of a finite-dimensional Lie algebra over a characteristic-zero field is symmetric and invariant, and such an algebra is semisimple if and only if its Killing form is nondegenerate; for a semisimple algebra every derivation is inner, $\operatorname{Der}=\operatorname{ad}$ with $Z(\mathfrak g)=0$ ([[prop-trace-forms-are-symmetric-and-invariant]], [[thm-cartans-semisimplicity-criterion]], [[thm-every-derivation-of-a-semisimple-lie-algebra-is-inner]], [[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

[L4] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal basis of eigenvectors with real eigenvalues ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]], [[def-self-adjoint-and-normal-endomorphism]]).

## Proof

**Proof technique:** direct.

1.1 The adjoint operators of $\mathfrak g_{\mathbb R}$ are the realifications of those of $\mathfrak g$, so the real trace of the realification of a complex-linear endomorphism is twice its complex trace and $B_{\mathbb R}(Z,W)=2\operatorname{Re}B(Z,W)$ for all $Z,W\in\mathfrak g$. If $Z$ lies in the radical of $B_{\mathbb R}$ then $\operatorname{Re}B(Z,W)=0$ for all $W$, and substituting $iW$ gives $\operatorname{Im}B(Z,W)=0$; hence $Z=0$ by nondegeneracy of $B$, so $B_{\mathbb R}$ is nondegenerate and $\mathfrak g_{\mathbb R}$ is semisimple, with every derivation inner and $Z(\mathfrak g_{\mathbb R})=0$. [L3, given, algebra]

1.2 The restriction of $B$ to $\mathfrak g_0$ is $B_0$, because in a real basis of $\mathfrak g_0$ the matrices of $\operatorname{ad}_X$, $X\in\mathfrak g_0$, acting on $\mathfrak g$ have the real block form of the realification of $\operatorname{ad}_X$ acting on $\mathfrak g_0$. In particular $B$ is real-valued on $\mathfrak g_0\times\mathfrak g_0$, and $B_0$ is nondegenerate since $\mathfrak g_0$ is semisimple. [L1, L3, given, algebra]

1.3 The map $\tau$ is real-linear on $\mathfrak g_{\mathbb R}$ with $\tau^2=\mathrm{id}$ and preserves brackets, and $B(\tau Z,\tau W)=\overline{B(Z,W)}$ for all $Z,W$: writing $Z=X+iY$, $W=X'+iY'$ with $X,Y,X',Y'\in\mathfrak u_0$, both sides equal $B(X,X')-B(Y,Y')-i\bigl(B(X,Y')+B(Y,X')\bigr)$ by complex bilinearity and symmetry of $B$. Hence $B_{\mathbb R}(\tau Z,\tau W)=B_{\mathbb R}(Z,W)$. [L2, L3, algebra]

2.1 $\tau$ is a Cartan involution of $\mathfrak g_{\mathbb R}$: for $Z=X+iY\ne0$ with $X,Y\in\mathfrak u_0$ one has $(B_{\mathbb R})_\tau(Z,Z)=-B_{\mathbb R}(Z,\tau Z)=-2\operatorname{Re}B(Z,\tau Z)=-2\bigl(B(X,X)+B(Y,Y)\bigr)>0$, since $B(Z,\tau Z)=B(X,X)+B(Y,Y)$ and the Killing form of $\mathfrak u_0$ is negative definite. Write $B_\tau:=(B_{\mathbb R})_\tau$ for this inner product. [L2, L3, step 1.3, algebra]

3.1 Put $\omega:=\sigma\tau\in\operatorname{Aut}(\mathfrak g_{\mathbb R})$, an invertible automorphism, and note $\tau\omega=\omega^{-1}\tau$, because both sides equal $\tau\sigma\tau$. Invariance of $B_{\mathbb R}$ under $\omega^{-1}$ and under $\tau$ gives $B_\tau(\omega Z,W)=-B_{\mathbb R}(\omega Z,\tau W)=-B_{\mathbb R}(Z,\omega^{-1}\tau W)=-B_{\mathbb R}(Z,\tau\omega W)=B_\tau(Z,\omega W)$ for all $Z,W$, so $\omega$ is self-adjoint for $B_\tau$; since $\omega$ is invertible, $\rho:=\omega^2=\omega^*\omega$ satisfies $B_\tau(\rho Z,Z)=B_\tau(\omega Z,\omega Z)>0$ for $Z\ne0$, so $\rho$ is a self-adjoint positive definite automorphism of $\mathfrak g_{\mathbb R}$. [step 2.1, algebra]

4.1 By [L4] choose a $B_\tau$-orthonormal eigenbasis of $\rho$ with eigenvalues $\lambda_j>0$ and let $\rho^r$, $r\in\mathbb R$, act as $\lambda_j^r$ on the eigenspace for $\lambda_j$. If $X,Y$ are eigenvectors with eigenvalues $\lambda_i,\lambda_j$, then $\rho[X,Y]=[\rho X,\rho Y]=\lambda_i\lambda_j[X,Y]$, so $\rho^r[X,Y]=(\lambda_i\lambda_j)^r[X,Y]=[\rho^rX,\rho^rY]$ and, by bilinearity, $\rho^r\in\operatorname{Aut}(\mathfrak g_{\mathbb R})$; also $\rho^r$ commutes with $\rho$ and with $\omega$. [L4, step 3.1, algebra]

5.1 Let $D$ act as $\log\lambda_j$ on the eigenspace for $\lambda_j$, so that $\exp(D)=\rho$ and $D$ is self-adjoint for $B_\tau$. For eigenvectors $X,Y$ as in step 4.1, $D[X,Y]=(\log\lambda_i+\log\lambda_j)[X,Y]=[DX,Y]+[X,DY]$, hence $D$ is a derivation of $\mathfrak g_{\mathbb R}$ by bilinearity; by step 1.1 there is a unique $X\in\mathfrak g_{\mathbb R}$ with $D=\operatorname{ad}X$, and $\rho=\exp(\operatorname{ad}X)$ lies in the subgroup generated by the automorphisms $\exp(\operatorname{ad}W)$, $W\in\mathfrak g_{\mathbb R}=\mathfrak g$. [L4, step 1.1, step 4.1, algebra]

6.1 The powers of $\rho$ satisfy $\rho^r\tau=\tau\rho^{-r}$ for all real $r$: from $\rho\tau=\omega^2\tau=\omega(\tau\omega^{-1})=(\omega\tau)\omega^{-1}=\tau\omega^{-1}\omega^{-1}=\tau\rho^{-1}$ one gets $\rho\tau X=\lambda^{-1}\tau X$ on an eigenvector of eigenvalue $\lambda$, and iteration gives the claim. Put $\varphi:=\rho^{1/4}$, an automorphism of $\mathfrak g_{\mathbb R}$ generated by the $\exp(\operatorname{ad}W)$. Then $\varphi\tau\varphi^{-1}\sigma=\rho^{1/4}\tau\rho^{-1/4}\sigma=\rho^{1/2}\tau\sigma=\rho^{1/2}\omega^{-1}=\rho^{-1/2}\omega=\omega\rho^{-1/2}=\sigma\tau\rho^{-1/2}=\sigma\rho^{1/4}\tau\rho^{-1/4}=\sigma\varphi\tau\varphi^{-1},$ using $\rho^{1/2}\omega^{-1}=\rho^{-1/2}\omega$, the commutation of $\omega$ with powers of $\rho$, and $\tau\rho^{-1/4}=\rho^{1/4}\tau$. Hence the involution $\psi:=\varphi\tau\varphi^{-1}$ commutes with $\sigma$. [step 3.1, step 4.1, step 5.1, algebra]

7.1 $\psi$ is again a Cartan involution of $\mathfrak g_{\mathbb R}$ with $B_\psi(\varphi Z,\varphi W)=B_\tau(Z,W)$ positive definite, because $\varphi$ is an automorphism and $\tau$ is a Cartan involution by step 2.1. Since $\psi$ commutes with $\sigma$ and $\sigma$ has fixed locus $\mathfrak g_0$ by [L1], $\psi$ preserves $\mathfrak g_0=\mathfrak g^\sigma$: for $X\in\mathfrak g_0$ one has $\sigma(\psi X)=\psi(\sigma X)=\psi X$. [L1, step 2.1, step 6.1, algebra]

8.1 Define $\theta_0:=\psi|_{\mathfrak g_0}\colon\mathfrak g_0\to\mathfrak g_0$, a real-linear map. It is an involution, since $\psi^2=\mathrm{id}$, and an automorphism of $\mathfrak g_0$, since $\psi$ is an automorphism of $\mathfrak g_{\mathbb R}$ preserving $\mathfrak g_0$. [step 7.1, algebra]

9.1 The form $(B_0)_{\theta_0}(X,Y)=-B_0(X,\theta_0Y)$ is positive definite. Indeed, for $X,Y\in\mathfrak g_0$ one has $B_{\mathbb R}(X,\psi Y)=2\operatorname{Re}B(X,\psi Y)=2B(X,\psi Y)=2B_0(X,\theta_0Y)$ by steps 1.1, 1.2 and the reality of $B$ on $\mathfrak g_0$, so $(B_0)_{\theta_0}(X,Y)=\tfrac12 B_\psi(X,Y)$; the form $B_\psi$ is positive definite on all of $\mathfrak g_{\mathbb R}$ by step 7.1, hence its restriction is positive definite. Therefore $\theta_0$ is a Cartan involution of $\mathfrak g_0$, and the theorem follows. [step 1.1, step 1.2, step 7.1, step 8.1, A1, algebra] ∎
