---
id: thm-nrqm-oscillator-diagonal-spectrum
aliases: [nrqm-oscillator-diagonal-spectrum]
kind: theorem
domain: mathematics
title: "Diagonal spectrum"
status: published
origin: pipeline
dependency_level: 1
deps: [lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma, def-resolvent-of-a-closed-operator, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  def-resolvent-of-a-closed-operator: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §2.4 pp. 73-74 (resolvent, spectrum and the multiplication-operator example)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', §1 pp. 1-9 (ladder spectrum of the oscillator)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a complex Hilbert space ([[def-hilbert-space]]), let $(e_n)_{n\in\mathbb N}$ be a complete orthonormal family of $H$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), let $(\lambda_n)_{n\in\mathbb N}\subseteq\mathbb R$, and let $A$ be the self-adjoint diagonal operator of [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]]:

$$D(A)=\Bigl\{x\in H:\sum_{n}\lambda_n^2|\langle x,e_n\rangle|^2<\infty\Bigr\},\qquad Ax=\sum_{n}\lambda_n\langle x,e_n\rangle e_n .$$

Then, with $\rho(A)$, $\sigma(A)$ and $R(\lambda,A)$ as in [[def-resolvent-of-a-closed-operator]]:

(a) $Ae_n=\lambda_ne_n$ for every $n$; every $\lambda_n$ is an eigenvalue of $A$, hence belongs to $\sigma(A)$;

(b) $\sigma(A)=\overline{\{\lambda_n:n\in\mathbb N\}}$, the closure in $\mathbb C$; equivalently $\lambda\in\rho(A)$ exactly when $d:=\inf_n|\lambda-\lambda_n|>0$, and then

$$R(\lambda,A)x=\sum_{n}(\lambda-\lambda_n)^{-1}\langle x,e_n\rangle e_n,\qquad \|R(\lambda,A)\|=d^{-1}=\bigl(\inf_n|\lambda-\lambda_n|\bigr)^{-1};$$

(c) if $\lambda\in\sigma(A)\setminus\{\lambda_n:n\in\mathbb N\}$, then $\lambda$ is an approximate eigenvalue: for some subsequence $(n_k)$, $\|(\lambda I-A)e_{n_k}\|\to0$ with $\|e_{n_k}\|=1$. Moreover, $\ker(\lambda I-A)=\{0\}$, so $\lambda$ is not an eigenvalue of $A$; no further identification of spectral types is made.

## Facts & Assumptions

**Given:** the Hilbert space $H$, the complete orthonormal family $(e_n)$, real numbers $\lambda_n$, and the self-adjoint diagonal operator $A$ of [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]].

[F1] $D(A)=\{x:\sum_n\lambda_n^2|\langle x,e_n\rangle|^2<\infty\}$, $Ax=\sum_n\lambda_n\langle x,e_n\rangle e_n$ with $\|Ax\|^2=\sum_n\lambda_n^2|\langle x,e_n\rangle|^2$, $Ae_n=\lambda_ne_n$, and $A$ is self-adjoint ([[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]](a),(b),(e)); for every $x\in H$ the expansion $x=\sum_n\langle x,e_n\rangle e_n$ converges and $\sum_n|\langle x,e_n\rangle|^2=\|x\|^2$ ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[F2] $\lambda\in\rho(A)$ exactly when $\lambda I-A:D(A)\to H$ is bijective with bounded inverse, and then that inverse is $R(\lambda,A)$; $\sigma(A)=\mathbb C\setminus\rho(A)$ ([[def-resolvent-of-a-closed-operator]]).

[F3] $|\sum_n a_n\overline{b_n}|\le(\sum_n|a_n|^2)^{1/2}(\sum_n|b_n|^2)^{1/2}$ and $|\langle x,y\rangle|\le\|x\|\,\|y\|$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

1.1 [Eigenvalues are spectral] By [F1], $Ae_n=\lambda_ne_n$ with $e_n\ne0$, so $\lambda_n$ is an eigenvalue of $A$. If $\lambda_n\in\rho(A)$, then $\lambda_nI-A$ is injective by [F2], contradicting $(\lambda_nI-A)e_n=0$. Hence $\{\lambda_n:n\in\mathbb N\}\subseteq\sigma(A)$. [given, F1, F2]

1.2 [The resolvent outside the closure] Let $\lambda\in\mathbb C$ with $d=\inf_n|\lambda-\lambda_n|>0$, and define $Rx:=\sum_n(\lambda-\lambda_n)^{-1}\langle x,e_n\rangle e_n$ for $x\in H$. The series converges and $\|Rx\|^2=\sum_n|\lambda-\lambda_n|^{-2}|\langle x,e_n\rangle|^2\le d^{-2}\|x\|^2$ by [F1], so $R\in\mathcal B(H)$ with $\|R\|\le d^{-1}$; testing on $e_n$ gives $\|R\|\ge\sup_n|\lambda-\lambda_n|^{-1}=d^{-1}$, so $\|R\|=d^{-1}$. For $x\in H$, the coefficients of $Rx$ satisfy $\sum_n\lambda_n^2|(\lambda-\lambda_n)^{-1}\langle x,e_n\rangle|^2\le(1+|\lambda|d^{-1})^2\sum_n|\langle x,e_n\rangle|^2<\infty$ because $|\lambda_n|\le|\lambda-\lambda_n|+|\lambda|\le|\lambda-\lambda_n|(1+|\lambda|d^{-1})$ for every $n$; hence $Rx\in D(A)$ by [F1]. Computing coefficients with [F1] gives $(\lambda I-A)Rx=\sum_n\langle x,e_n\rangle e_n=x$, and symmetrically $R(\lambda I-A)x=\sum_n(\lambda-\lambda_n)^{-1}(\lambda-\lambda_n)\langle x,e_n\rangle e_n=x$ for $x\in D(A)$. So $\lambda I-A$ is bijective with bounded inverse $R$, that is, $\lambda\in\rho(A)$ and $R(\lambda,A)=R$ by [F2]. [given, F1, F2, F3, algebra]

2.1 [Closure points are spectral] Let $\lambda\in\overline{\{\lambda_n\}}$. If $\lambda=\lambda_m$ for some $m$, then $\lambda\in\sigma(A)$ by step 1.1. Otherwise pick a subsequence with $\lambda_{n_k}\to\lambda$ and $\lambda_{n_k}\ne\lambda$ for all $k$, and suppose for contradiction that $\lambda\in\rho(A)$. Then $1=\|e_{n_k}\|=\|R(\lambda,A)(\lambda I-A)e_{n_k}\|=\|R(\lambda,A)(\lambda-\lambda_{n_k})e_{n_k}\|\le\|R(\lambda,A)\|\,|\lambda-\lambda_{n_k}|\to0$, which is impossible. Hence $\lambda\in\sigma(A)$. [step 1.1, F1, F2, algebra]

3.1 [Conclusion] Steps 1.1 and 2.1 give $\overline{\{\lambda_n\}}\subseteq\sigma(A)$, and step 1.2 gives $\mathbb C\setminus\overline{\{\lambda_n\}}\subseteq\rho(A)$; taking complements yields $\sigma(A)\subseteq\overline{\{\lambda_n\}}$. Hence $\sigma(A)=\overline{\{\lambda_n\}}$, and the equivalence "$\lambda\in\rho(A)$ exactly when $\inf_n|\lambda-\lambda_n|>0$" together with the resolvent formula and its norm are exactly the contents of step 1.2. For (c), if $\lambda\in\sigma(A)\setminus\{\lambda_n\}$, the spectrum equality gives $\lambda\in\overline{\{\lambda_n\}}$, so a subsequence with $\lambda_{n_k}\to\lambda$ satisfies $\|(\lambda I-A)e_{n_k}\|=|\lambda-\lambda_{n_k}|\to0$ and $\|e_{n_k}\|=1$. If $x\in D(A)$ and $Ax=\lambda x$, then comparing coefficients in the complete orthonormal family gives $(\lambda_n-\lambda)\langle x,e_n\rangle=0$ for every $n$; because $\lambda\ne\lambda_n$, every coefficient vanishes, and Parseval gives $x=0$. Thus $\ker(\lambda I-A)=\{0\}$ and $\lambda$ is not an eigenvalue. No further spectral-type classification is asserted. [step 1.2, step 2.1, step 1.1, F1] ∎
