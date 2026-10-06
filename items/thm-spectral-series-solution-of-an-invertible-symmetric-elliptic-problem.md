---
id: thm-spectral-series-solution-of-an-invertible-symmetric-elliptic-problem
kind: theorem
title: "Spectral series solution of an invertible symmetric elliptic problem"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 13
deps: [cor-noninvertible-elliptic-shifts-form-a-discrete-set-in-the-self-adjoint-case, def-axiom-of-choice, def-countable-choice, def-l-p-space-as-a-quotient-by-null-functions, def-ltwo-operator-associated-with-a-symmetric-elliptic-form, def-weak-dirichlet-solution-for-a-divergence-form-operator, lem-eigenbasis-expansion-in-the-form-norm, thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator, thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.10, expansion of the solution in eigenfunctions, printed pp. 109-110 (read in full)'
    - title: 'Richard S. Laugesen, Spectral Theory of Partial Differential Equations (University of Illinois lecture notes, arXiv:1203.2344, complete 120 pages)'
      url: 'https://arxiv.org/pdf/1203.2344'
      locator: 'Chapter 9, eigenvalue expansions, printed pp. 51-56 (read in full)'
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Corollary 4.8 decomposition for $f$ in $L^2$ and $H^1_0$, printed p. 95 (read in full)'
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice. In the symmetric case of [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]] with $\Omega$ nonempty bounded open, suppose $0$ is not an eigenvalue of $L$ (equivalently, by [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]], no nonzero $u\in H^1_0(\Omega)$ satisfies $a(u,v)=0$ for all $v$; this holds in particular when $a$ is coercive on $H^1_0(\Omega)$). Then $L:D(L)\to L^2(\Omega)$ is bijective, and for every $f\in L^2(\Omega)$ the unique weak solution $u\in H^1_0(\Omega)$ of $a(u,v)=(f,v)_{L^2}$ for all $v$ is
$$u=L^{-1}f=\sum_{j\ge1}\frac{(f,e_j)_{L^2}}{\lambda_j}\,e_j,$$
the series converging in $L^2(\Omega)$ and in $H^1_0(\Omega)$; moreover $u\in D(L)$ with $Lu=f$ and $\|u\|_{L^2}\le\big(\min_j|\lambda_j|\big)^{-1}\|f\|_{L^2}$ (and $\|u\|_{L^2}\le\lambda_1^{-1}\|f\|_{L^2}$ when $\lambda_1>0$, in particular under coercivity of $a$).

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; a nonempty bounded open set $\Omega\subseteq\mathbb R^n$; the symmetric divergence-form case with form $a$ and operator $L$; the eigenbasis $\{e_j\}$ and eigenvalue list $\lambda_j\to+\infty$ of the discrete spectral theorem; the hypothesis that $0$ is not an eigenvalue; and $f\in L^2(\Omega)$.

[F1] Spectral series for the inverse at $\lambda=0$: the complex spectrum of the relevant complex realization is $\sigma(\widetilde L)=\{\lambda_j\}$, and the corollary gives the base-field inverse series for every real parameter outside this list. Since $0$ is not an eigenvalue, $L$ is bijective with bounded inverse $L^{-1}$, and $L^{-1}f=\sum_j(f,e_j)_{L^2}\lambda_j^{-1}e_j$ with convergence in $L^2(\Omega)$ and in $H^1_0(\Omega)$ ([[cor-noninvertible-elliptic-shifts-form-a-discrete-set-in-the-self-adjoint-case]], [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]]).

[F2] Weak solutions: $u\in H^1_0(\Omega)$ is a weak solution of the Dirichlet problem with datum $f\in L^2(\Omega)$ exactly when $u\in D(L)$ and $Lu=f$ ([[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], [[def-weak-dirichlet-solution-for-a-divergence-form-operator]]).

[F3] Parseval: $\|f\|_{L^2}^2=\sum_j|(f,e_j)_{L^2}|^2$ for every $f\in L^2(\Omega)$, and the eigenbasis is orthonormal ([[lem-eigenbasis-expansion-in-the-form-norm]], [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]]).

[F4] Rayleigh: if $\lambda_1>0$ then all $\lambda_j\ge\lambda_1$, and coercivity of $a$ with constant $\alpha'>0$ implies $\lambda_1\ge\alpha'>0$ and hence that $0$ is not an eigenvalue ([[thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue]], [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]]).

## Proof

**Proof technique:** direct.

1.1 Bijectivity and the series. The hypothesis says $0$ is not a weak eigenvalue, so $L$ is injective; since the eigenvalues of $L$ are exactly the list $\{\lambda_j\}$, the resolvent corollary [F1] applies with $\lambda=0$ and gives that $L$ is bijective with bounded inverse and that the inverse is the displayed series, converging in $L^2(\Omega)$ and in $H^1_0(\Omega)$. [F1, given]

2.1 The weak solution. For $f\in L^2(\Omega)$ put $u:=L^{-1}f$, which lies in $D(L)$ with $Lu=f$; by [F2] $u$ is the unique weak solution of $a(u,v)=(f,v)_{L^2}$ for all $v$, and by step 1.1 it is the series of the statement. Since $L$ is injective with range $L^2(\Omega)$, the weak solution is unique, so this identifies the solution set with the single class $u$. [F1, F2, step 1.1, given]

2.2 The norm bound. Put $\delta:=\inf_j|\lambda_j|>0$ (positive because $\lambda_j\to+\infty$ and no $\lambda_j=0$). The series of step 1.1 and Parseval [F3] give $$\|u\|_{L^2}^2=\sum_j\frac{|(f,e_j)_{L^2}|^2}{\lambda_j^2}\le\delta^{-2}\sum_j|(f,e_j)_{L^2}|^2=\delta^{-2}\|f\|_{L^2}^2,$$ that is $\|u\|_{L^2}\le(\min_j|\lambda_j|)^{-1}\|f\|_{L^2}$. If $\lambda_1>0$ all $\lambda_j\ge\lambda_1>0$, so $\min_j|\lambda_j|=\lambda_1$ and the sharper bound $\|u\|_{L^2}\le\lambda_1^{-1}\|f\|_{L^2}$ holds. [F3, step 1.1, given, algebra]

3.1 Coercivity gives the hypothesis. If $a$ is coercive with constant $\alpha'>0$ then $a(u,u)\ge\alpha'\|u\|_{L^2}^2>0$ for every nonzero $u$, so $0$ cannot be a weak eigenvalue and the previous conclusions apply; by [F4] one also has $\lambda_1\ge\alpha'>0$, so the sharper bound of step 2.2 is available. [F4, step 1.1, step 2.1, step 2.2, given] ∎ 
