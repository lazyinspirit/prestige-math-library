---
id: thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue
kind: theorem
title: "The Rayleigh principle for the first Dirichlet eigenvalue"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 12
deps: [def-axiom-of-choice, def-bounded-coercive-and-symmetric-sesquilinear-forms, def-countable-choice, def-l-p-space-as-a-quotient-by-null-functions, def-ltwo-operator-associated-with-a-symmetric-elliptic-form, def-symmetric-elliptic-weak-eigenpair, lem-eigenbasis-expansion-in-the-form-norm, thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator, thm-lax-milgram-solvability-for-coercive-divergence-form-equations]
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
      locator: 'Chapter 9, Rayleigh principle (9.1), printed p. 51 (read in full)'
    - title: 'Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)'
      url: 'https://web.archive.org/web/20250324094647id_/https://www.math.univie.ac.at/~gerald/ftp/book-pde/pde.pdf'
      locator: 'Section 10.1, equations (10.22)-(10.23) for the lowest eigenvalue, printed p. 228 (read in full)'
    - title: 'Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)'
      url: 'https://math.stanford.edu/~lms/lecs-on-pde.pdf'
      locator: 'Lecture 10, infimum characterization of the first eigenvalue and its attainment, printed pp. 101-104 (read in full)'
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice. In the symmetric case of [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]] with $\Omega$ nonempty bounded open, let $\{\lambda_j\}$ be the eigenvalues of [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]]. Then
$$\lambda_1=\min_{u\in H^1_0(\Omega)\setminus\{0\}}\frac{a(u,u)}{\|u\|_{L^2}^2},$$
the minimum is attained exactly at the nonzero elements of the eigenspace $E_{\lambda_1}$, and $\lambda_1$ is the smallest weak eigenvalue. If in addition the form $a$ is coercive on $H^1_0(\Omega)$ with constant $\alpha'>0$ (for instance when the hypotheses of [[thm-lax-milgram-solvability-for-coercive-divergence-form-equations]] hold, or $a$ is the principal Dirichlet form), then $\lambda_1\ge\alpha'>0$; in general only $\lambda_1>-\mu$ and the Garding bound $\lambda_1\ge-\beta$ are asserted.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; a nonempty bounded open set $\Omega\subseteq\mathbb R^n$; the symmetric divergence-form case with form $a$; the eigenbasis $\{e_j\}$ and nondecreasing eigenvalue list $\lambda_j\to+\infty$ of the discrete spectral theorem; and $u\in H^1_0(\Omega)\setminus\{0\}$.

[F1] Eigenbasis expansion: $a(u,u)=\sum_j\lambda_j|(u,e_j)_{L^2}|^2$ absolutely convergent and $\|u\|_{L^2}^2=\sum_j|(u,e_j)_{L^2}|^2$ for every $u\in H^1_0(\Omega)$; each $e_j$ is a weak eigenfunction with eigenvalue $\lambda_j$ ([[lem-eigenbasis-expansion-in-the-form-norm]], [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]], [[def-symmetric-elliptic-weak-eigenpair]]).

[F2] The list is nondecreasing with $\lambda_j\to+\infty$, the eigenvalue $0$ is not in the list unless it is an eigenvalue, and $\lambda_1$ is the smallest weak eigenvalue; the nonzero elements $E_{\lambda_1}\setminus\{0\}$ are exactly the weak eigenfunctions for $\lambda_1$ ([[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]]).

[F3] Coercivity: if $a(u,u)\ge\alpha'\|u\|_{H^1_0}^2$ for all $u$, then in particular $a(u,u)\ge\alpha'\|u\|_{L^2}^2$, and $\lambda_1\ge\alpha'>0$ whenever the quotient is bounded below by $\alpha'$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[thm-lax-milgram-solvability-for-coercive-divergence-form-equations]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Proof

**Proof technique:** direct.

1.1 Weighted average. Let $u\in H^1_0(\Omega)\setminus\{0\}$ and put $c_j:=(u,e_j)_{L^2}$. By [F1], $\sum_j|c_j|^2=\|u\|_{L^2}^2>0$ and $a(u,u)=\sum_j\lambda_j|c_j|^2$, so $$\frac{a(u,u)}{\|u\|_{L^2}^2}=\frac{\sum_j\lambda_j|c_j|^2}{\sum_j|c_j|^2}.$$ Since $\lambda_j\ge\lambda_1$ for every $j$ by [F2], the quotient is at least $\lambda_1$, with equality if and only if $c_j=0$ for every $j$ with $\lambda_j>\lambda_1$; that is, if and only if $u$ lies in the closed span of the $e_j$ with $\lambda_j=\lambda_1$, which is exactly $E_{\lambda_1}$. [F1, F2, given, algebra]

2.1 Attainment. The vector $e_1$ is a nonzero weak eigenfunction with $a(e_1,e_1)=\lambda_1\|e_1\|_{L^2}^2$ and $\|e_1\|_{L^2}=1$, so the quotient at $u=e_1$ equals $\lambda_1$; combined with step 1.1, the infimum is the minimum $\lambda_1$, attained exactly on $E_{\lambda_1}\setminus\{0\}$, and $\lambda_1$ is the smallest weak eigenvalue by [F2]. [F1, F2, step 1.1, given]

3.1 Lower bounds. If $a$ is coercive with constant $\alpha'>0$ then [F3] gives $a(u,u)/\|u\|_{L^2}^2\ge\alpha'$ for every nonzero $u$, hence $\lambda_1\ge\alpha'>0$ by step 2.1. In the general case only the bounds $\lambda_1>-\mu$ and $\lambda_1\ge-\beta$ of the discrete spectral theorem and Garding's inequality are asserted. [F3, step 2.1, given, algebra] ∎ 
