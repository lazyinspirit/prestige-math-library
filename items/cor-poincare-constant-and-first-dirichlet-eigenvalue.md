---
id: cor-poincare-constant-and-first-dirichlet-eigenvalue
kind: corollary
title: "The Poincare constant is the reciprocal square root of the first Dirichlet eigenvalue"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 13
deps: [def-axiom-of-choice, def-countable-choice, def-l-p-space-as-a-quotient-by-null-functions, def-ltwo-operator-associated-with-a-symmetric-elliptic-form, def-sobolev-space-wkp-and-its-norm, def-uniformly-elliptic-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure, thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator, thm-poincare-inequality-for-w-one-p-zero, thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Richard S. Laugesen, Spectral Theory of Partial Differential Equations (University of Illinois lecture notes, arXiv:1203.2344, complete 120 pages)'
      url: 'https://arxiv.org/pdf/1203.2344'
      locator: 'Chapter 9, application of the Rayleigh principle to the Laplacian, printed p. 54 (read in full)'
    - title: 'Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)'
      url: 'https://web.archive.org/web/20250324094647id_/https://www.math.univie.ac.at/~gerald/ftp/book-pde/pde.pdf'
      locator: 'Section 10.1, the remark that $E_0^{-1}$ is the optimal Poincare constant, printed p. 227 (read in full)'
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: "Section 4.6, Poincare's inequality and its optimal constant, printed pp. 102-104 (read in full)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be nonempty bounded open and consider the Dirichlet Laplacian, i.e. the symmetric case with $a^{ij}=\delta^{ij}$, $b=0$, $c=0$ ([[def-uniformly-elliptic-divergence-form-operator]]). Then its first eigenvalue satisfies $\lambda_1>0$ and
$$\lambda_1=\min_{u\in H^1_0(\Omega)\setminus\{0\}}\frac{\|Du\|_{L^2}^2}{\|u\|_{L^2}^2},\qquad \|u\|_{L^2(\Omega)}\le\lambda_1^{-1/2}\|Du\|_{L^2(\Omega)}\quad(u\in H^1_0(\Omega)),$$
with equality for nonzero $u$ exactly at the nonzero first eigenfunctions; $u=0$ is also the trivial equality case. Hence $\lambda_1^{-1/2}$ is the optimal (smallest) constant in the $L^2$ zero-trace Poincare inequality on $\Omega$: every constant $C$ with $\|u\|_{L^2}\le C\|Du\|_{L^2}$ for all $u\in H^1_0(\Omega)$ satisfies $C\ge\lambda_1^{-1/2}$, and the positive admissible constant $C_P$ of [[thm-poincare-inequality-for-w-one-p-zero]] at $p=2$ therefore satisfies $C_P\ge\lambda_1^{-1/2}$. No numerical value or domain formula for $\lambda_1$ is asserted.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; a nonempty bounded open set $\Omega\subseteq\mathbb R^n$; the Dirichlet Laplacian form $a(u,v)=\int_\Omega Du\cdot\overline{Dv}\,dx$ on $H^1_0(\Omega)$ with eigenvalues $\lambda_j$ and eigenbasis $\{e_j\}$.

[F1] Rayleigh principle: for the symmetric case, $\lambda_1=\min_{u\ne0}a(u,u)/\|u\|_{L^2}^2$, attained exactly on the nonzero elements of the first eigenspace, and $\lambda_1$ is the smallest weak eigenvalue; for the Dirichlet Laplacian $a(u,u)=\|Du\|_{L^2}^2$ ([[thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue]], [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]], [[def-uniformly-elliptic-divergence-form-operator]]).

[F2] Since $\Omega$ is bounded, it lies in a finite-width slab. The supplier at $p=2$ gives a finite Poincare constant for every $u\in W^{1,2}_0(\Omega;\mathbb C)=H^1_0(\Omega)$; enlarge it if necessary and fix a positive admissible $C_P$, so $\|u\|_{L^2(\Omega)}\le C_P\|Du\|_{L^2(\Omega)}$ ([[thm-poincare-inequality-for-w-one-p-zero]], [[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Positivity and the minimum. With $a(u,u)=\|Du\|_{L^2}^2$, the Rayleigh principle [F1] identifies $\lambda_1$ with the displayed minimum, attained exactly on the nonzero first eigenfunctions. Fix the positive admissible $C_P$ of [F2]. For every $u\ne0$, Poincare gives $\|Du\|_{L^2}^2/\|u\|_{L^2}^2\ge C_P^{-2}>0$, so $\lambda_1\ge C_P^{-2}>0$. [F1, F2, given, algebra]

2.1 The inequality and its equality cases. For nonzero $u\in H^1_0(\Omega)$, the identity $\lambda_1=\min_{v\ne0}\|Dv\|^2/\|v\|^2$ gives $\|Du\|_{L^2}^2\ge\lambda_1\|u\|_{L^2}^2$, hence $\|u\|_{L^2}\le\lambda_1^{-1/2}\|Du\|_{L^2}$. Equality for nonzero $u$ holds exactly when its Rayleigh quotient equals $\lambda_1$, which by [F1] is exactly at the nonzero first eigenfunctions. At $u=0$ both sides are zero. [F1, step 1.1, given, algebra]

3.1 Optimality. Let $C$ be any constant with $\|u\|_{L^2}\le C\|Du\|_{L^2}$ for all $u\in H^1_0(\Omega)$. Testing at a nonzero first eigenfunction $e_1$, step 2.1 gives $\|e_1\|_{L^2}=\lambda_1^{-1/2}\|De_1\|_{L^2}\le C\|De_1\|_{L^2}$. Moreover $\|De_1\|_{L^2}>0$: if it were zero, [F2] would imply $\|e_1\|_{L^2}\le C_P\|De_1\|_{L^2}=0$, contradicting $e_1\ne0$. Thus $C\ge\lambda_1^{-1/2}$. Hence $\lambda_1^{-1/2}$ is the smallest admissible constant, and the particular constant $C_P$ of the zero-trace Poincare inequality satisfies $C_P\ge\lambda_1^{-1/2}$. [F2, step 2.1, given, algebra] ∎
