---
id: lem-eigenbasis-expansion-in-the-form-norm
kind: lemma
title: "Eigenbasis expansion in the form norm"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 11
deps: [cor-a-sufficiently-large-shift-is-coercive, def-axiom-of-choice, def-countable-choice, def-hilbert-space, def-ltwo-operator-associated-with-a-symmetric-elliptic-form, def-orthogonality-and-orthogonal-complement, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-shifted-elliptic-solution-operator, def-symmetric-elliptic-weak-eigenpair, lem-finite-bessel-inequality, lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums, lem-symmetric-shifted-solution-operator-is-positive-and-self-adjoint, thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator, thm-hilbert-space-fourier-expansion, thm-parseval-equivalences-for-a-complete-orthonormal-family, lem-w-one-two-is-a-hilbert-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Section 4.1, end of the proof of Theorem 4.2 ($a$-orthonormal basis and convergence in $K$), printed p. 86 (read in full)'
    - title: 'Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)'
      url: 'https://www.math.toronto.edu/almut/Brezis.pdf'
      locator: 'Chapter 9, Section 9.8, Remark 28 after Theorem 9.31, printed pp. 311-312 (read in full)'
    - title: 'Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)'
      url: 'https://math.stanford.edu/~lms/lecs-on-pde.pdf'
      locator: 'Lecture 10, completeness of the eigenfunctions and $H^m$-convergence, printed pp. 100-101 (read in full)'
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice. In the symmetric case of [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]] with $\Omega$ nonempty bounded open, let $\{e_j\}$ and $\{\lambda_j\}$ be the eigenbasis and eigenvalues of [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]] and fix $\mu\ge\beta$. Then:
1. for every $u\in H^1_0(\Omega)$ the series $\sum_j(u,e_j)_{L^2}e_j$ converges to $u$ in the $H^1_0(\Omega)$ norm (equivalently in the inner-product norm $a_\mu$), and
$$a_\mu(u,u)=\sum_{j\ge1}(\lambda_j+\mu)\,|(u,e_j)_{L^2}|^2;$$
2. for every $f\in L^2(\Omega)$ the series $\sum_j(f,e_j)_{L^2}e_j$ converges to $f$ in $L^2(\Omega)$ and $\|f\|_{L^2}^2=\sum_j|(f,e_j)_{L^2}|^2$ (Parseval);
3. consequently $a(u,u)=\sum_j\lambda_j|(u,e_j)_{L^2}|^2$ for every $u\in H^1_0(\Omega)$, the series being absolutely convergent.
This expansion is the form-domain companion of the $L^2$ eigenbasis of the spectral theorem.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; a nonempty bounded open set $\Omega\subseteq\mathbb R^n$; the symmetric divergence-form case with form $a$ and operator $L$; the eigenbasis $\{e_j\}$ and eigenvalues $\lambda_j\to+\infty$ of the discrete spectral theorem, orthonormal in $L^2$; a fixed $\mu\ge\beta$.

[F1] Eigenrelations: $e_j\in H^1_0(\Omega)$, $a(e_j,v)=\lambda_j(e_j,v)_{L^2}$ for every $v\in H^1_0(\Omega)$, the $\lambda_j$ are real, and $\{e_j\}$ is a Hilbert basis of $L^2(\Omega)$ ([[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]], [[def-symmetric-elliptic-weak-eigenpair]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F2] Shifted positivity: $a_\mu=a+\mu(\cdot,\cdot)_{L^2}$ is symmetric, and $a_\mu(u,u)\ge\alpha\|u\|_{H^1_0}^2$ with $\alpha=\theta/2$; in particular $a_\mu$ is an inner product on $H^1_0(\Omega)$. Boundedness of the shifted form gives $a_\mu(u,u)\le M_\mu\|u\|_{H^1_0}^2$ with $M_\mu=nM_a+M_c+|\mu|$, so together with the coercive lower bound its norm is equivalent to the Sobolev norm and is complete by [[lem-w-one-two-is-a-hilbert-space]]. It defines the norm $\|u\|_{a_\mu}=a_\mu(u,u)^{1/2}$, and $\lambda_j+\mu>0$ for every $j$ ([[cor-a-sufficiently-large-shift-is-coercive]], [[def-shifted-elliptic-solution-operator]], [[lem-symmetric-shifted-solution-operator-is-positive-and-self-adjoint]], [[def-hilbert-space]]).

[F3] Fourier expansion and Parseval: in a Hilbert space with complete orthonormal family the finite-subset net of the coefficients converges in norm and the squared norm is computed by the sum of the squared coefficient moduli; Bessel's inequality and square-summability control the partial sums ([[thm-hilbert-space-fourier-expansion]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[lem-finite-bessel-inequality]], [[lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums]], [[def-orthogonality-and-orthogonal-complement]], [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Orthonormality in the form. For $j,k$ use symmetry of $a$ and the eigenrelation [F1] with $v=e_k$: $a(e_j,e_k)=\lambda_j(e_j,e_k)_{L^2}=\lambda_j\delta_{jk}$. Hence $$a_\mu(e_j,e_k)=(\lambda_j+\mu)(e_j,e_k)_{L^2}=(\lambda_j+\mu)\delta_{jk},$$ so the family $f_j:=(\lambda_j+\mu)^{-1/2}e_j$ (well defined by [F2]) is orthonormal in the inner product $a_\mu$ on $H^1_0(\Omega)$. [F1, F2, given, algebra]

1.2 Parseval in $L^2$. Since $\{e_j\}$ is a Hilbert basis of $L^2(\Omega)$, [F3] gives $f=\sum_j(f,e_j)_{L^2}e_j$ in $L^2(\Omega)$ and $\|f\|_{L^2}^2=\sum_j|(f,e_j)_{L^2}|^2$ for every $f\in L^2(\Omega)$, which is claim 2. [F1, F3, given]

2.1 Completeness in the form. Let $u\in H^1_0(\Omega)$ satisfy $a_\mu(u,f_j)=0$ for every $j$. Then $a_\mu(u,e_j)=(\lambda_j+\mu)(u,e_j)_{L^2}=0$, so $(u,e_j)_{L^2}=0$ for every $j$; since $\{e_j\}$ is a Hilbert basis of $L^2(\Omega)$, $u=0$ as an $L^2$ class, hence $u=0$. Thus $(f_j)$ is a complete orthonormal family in the Hilbert space $(H^1_0(\Omega),a_\mu)$, and by [F3] for every $u\in H^1_0(\Omega)$ the net of finite partial sums of $\sum_j a_\mu(u,f_j)f_j$ converges to $u$ in the $a_\mu$ norm, with $$a_\mu(u,u)=\sum_j|a_\mu(u,f_j)|^2 .$$ Since $a_\mu(u,f_j)=\overline{a_\mu(f_j,u)}=\overline{(\lambda_j+\mu)^{-1/2}a_\mu(e_j,u)}=\overline{(\lambda_j+\mu)^{1/2}(e_j,u)_{L^2}}=(\lambda_j+\mu)^{1/2}(u,e_j)_{L^2}$, the partial sums are $\sum_j(u,e_j)_{L^2}e_j$ and claim 1 follows; the $H^1_0$ norm and the $a_\mu$ norm are equivalent by [F2]. [F1, F2, F3, step 1.1, given, algebra]

3.1 Claim 3. Let $u\in H^1_0(\Omega)\subseteq L^2(\Omega)$. By claim 2 applied to $u$, $\|u\|_{L^2}^2=\sum_j|(u,e_j)_{L^2}|^2$, and by claim 1 $a_\mu(u,u)=\sum_j(\lambda_j+\mu)|(u,e_j)_{L^2}|^2$ with both sides finite. Subtracting $\mu$ times the first identity from the second gives $$a(u,u)=a_\mu(u,u)-\mu\|u\|_{L^2}^2=\sum_j\lambda_j|(u,e_j)_{L^2}|^2.$$ This series is absolutely convergent: since $\lambda_j\to+\infty$, only finitely many $\lambda_j$ are negative, and for all remaining indices $0\le\lambda_j|(u,e_j)_{L^2}|^2\le(\lambda_j+\mu)|(u,e_j)_{L^2}|^2$, whose sum is finite by claim 1. [F2, step 1.2, step 2.1, given, algebra] ∎
