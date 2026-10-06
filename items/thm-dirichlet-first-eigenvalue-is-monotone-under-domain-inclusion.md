---
id: thm-dirichlet-first-eigenvalue-is-monotone-under-domain-inclusion
kind: theorem
title: "The first Dirichlet eigenvalue is monotone under domain inclusion"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 13
deps: [def-axiom-of-choice, def-countable-choice, def-ltwo-operator-associated-with-a-symmetric-elliptic-form, def-sobolev-space-wkp-and-its-norm, def-uniformly-elliptic-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure, lem-zero-extension-from-w-one-p-zero, thm-courant-fischer-minimax-for-elliptic-eigenvalues, thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator, thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)'
      url: 'https://math.stanford.edu/~lms/lecs-on-pde.pdf'
      locator: 'Lecture 10, monotonicity lemma for Dirichlet eigenvalues, printed pp. 105-107 (read in full)'
    - title: 'Richard S. Laugesen, Spectral Theory of Partial Differential Equations (University of Illinois lecture notes, arXiv:1203.2344, complete 120 pages)'
      url: 'https://arxiv.org/pdf/1203.2344'
      locator: 'Chapter 10, Theorem 10.2 (domain monotonicity for the Dirichlet spectrum), printed p. 58 (read in full)'
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.10, spectrum of self-adjoint elliptic operators, printed pp. 108-109 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $\Omega_1\subseteq\Omega_2\subseteq\mathbb R^n$ be nonempty bounded open sets, let $a^{ij}$ be measurable, essentially bounded and uniformly elliptic on $\Omega_2$ with $a^{ij}=\overline{a^{ji}}$, and for $i=1,2$ let $a^{(i)}$ be the principal Dirichlet form $a^{(i)}(u,v)=\int_{\Omega_i}a^{ij}D_ju\overline{D_iv}\,dx$ on $H^1_0(\Omega_i)$; the model case $a^{ij}=\delta^{ij}$ is the Dirichlet Laplacian. Let $\lambda_k(\Omega_i)$ be the eigenvalues of the corresponding symmetric elliptic Dirichlet operator ([[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]]) . Then
$$\lambda_k(\Omega_2)\le\lambda_k(\Omega_1)\qquad\text{for every }k\ge1,$$
in particular $\lambda_1(\Omega_2)\le\lambda_1(\Omega_1)$: making the domain smaller raises the Dirichlet frequencies. The mechanism is that extension by zero maps $H^1_0(\Omega_1)$ isometrically into $H^1_0(\Omega_2)$ for the energy form and preserves the $L^2$ norm ([[lem-zero-extension-from-w-one-p-zero]]), so every $k$-dimensional competitor in $H^1_0(\Omega_1)$ is a competitor in $H^1_0(\Omega_2)$ with the same Rayleigh quotient.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; nonempty bounded open sets $\Omega_1\subseteq\Omega_2\subseteq\mathbb R^n$; Hermitian uniformly elliptic coefficients $a^{ij}$ on $\Omega_2$; the principal forms $a^{(1)}$ on $H^1_0(\Omega_1)$ and $a^{(2)}$ on $H^1_0(\Omega_2)$; and $k\ge1$.

[F1] Zero extension: the extension operator $E$ sending a class $u\in W^{1,2}_0(\Omega_1)$ to its zero extension is linear and isometric for the Sobolev norm, with weak derivatives the zero extensions of the weak derivatives ([[lem-zero-extension-from-w-one-p-zero]], [[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]]).

[F2] Because $\Omega_1\subseteq\Omega_2$, the inclusion $C_c^\infty(\Omega_1)\subseteq C_c^\infty(\Omega_2)$ induces $E(H^1_0(\Omega_1))\subseteq H^1_0(\Omega_2)$, and for $u\in H^1_0(\Omega_1)$ the integrals of the coefficient form over $\Omega_2$ see only $\Omega_1$: $a^{(2)}(Eu,Ev)=a^{(1)}(u,v)$ and $\|Eu\|_{L^2(\Omega_2)}=\|u\|_{L^2(\Omega_1)}$ ([[def-uniformly-elliptic-divergence-form-operator]], [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F3] Courant--Fischer: for $i=1,2$ and every $k\ge1$, $\lambda_k(\Omega_i)=\min\{\max_{u\in S\setminus\{0\}}a^{(i)}(u,u)/\|u\|_{L^2(\Omega_i)}^2:S\subseteq H^1_0(\Omega_i),\ \dim S=k\}$, the extrema being attained ([[thm-courant-fischer-minimax-for-elliptic-eigenvalues]], [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]], [[thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue]]).

## Proof

**Proof technique:** direct.

1.1 Isometry of the extension. By [F1] the map $E$ is linear and isometric for the Sobolev norm, and by [F2] its image lies in $H^1_0(\Omega_2)$ and the coefficient form and $L^2$ norm are preserved: for every $u\in H^1_0(\Omega_1)$, $$a^{(2)}(Eu,Eu)=a^{(1)}(u,u),\qquad \|Eu\|_{L^2(\Omega_2)}^2=\|u\|_{L^2(\Omega_1)}^2 .$$ In particular the Rayleigh quotients agree, $a^{(2)}(Eu,Eu)/\|Eu\|_{L^2(\Omega_2)}^2=a^{(1)}(u,u)/\|u\|_{L^2(\Omega_1)}^2$ for $u\ne0$. [F1, F2, given, algebra]

2.1 Min-max comparison. Fix $k\ge1$ and let $\mathcal S_i$ be the family of $k$-dimensional subspaces of $H^1_0(\Omega_i)$; by [F3], $\lambda_k(\Omega_i)=\min_{S\in\mathcal S_i}\max_{u\in S\setminus\{0\}}Q_i(u)$ with $Q_i$ the corresponding Rayleigh quotient. The extension $E$ maps $\mathcal S_1$ into $\mathcal S_2$ (linear isometry preserves dimension), and the quotients agree on corresponding vectors by step 1.1, so $$\lambda_k(\Omega_2)\le\min_{S\in\mathcal S_1}\max_{u\in S\setminus\{0\}}Q_2(Eu)=\min_{S\in\mathcal S_1}\max_{u\in S\setminus\{0\}}Q_1(u)=\lambda_k(\Omega_1),$$ the inequality holding because the minimum over the larger family $\mathcal S_2$ is at most the minimum over the restricted family $E(\mathcal S_1)$. This proves the monotonicity $\lambda_k(\Omega_2)\le\lambda_k(\Omega_1)$ for every $k$; the case $k=1$ is the statement about the first Dirichlet eigenvalue. [F3, step 1.1, given, algebra] ∎ 