---
id: ex-resolvent-norm-blows-up-when-a-real-parameter-approaches-an-eigenvalue
kind: example
title: "The resolvent norm blows up at an eigenvalue"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 13
deps: [cor-noninvertible-elliptic-shifts-form-a-discrete-set-in-the-self-adjoint-case, def-axiom-of-choice, def-complex-l-two-inner-product, def-complex-lp-and-euclidean-test-function-conventions, def-complexification-of-a-real-linear-map, def-complexification-of-a-real-vector-space, def-countable-choice, def-l-p-space-as-a-quotient-by-null-functions, def-operator-norm, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-symmetric-elliptic-weak-eigenpair, thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]
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
      locator: 'Section 4.10, resolvent and spectral expansion, printed pp. 109-110 (read in full)'
    - title: 'Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)'
      url: 'https://math.stanford.edu/~lms/lecs-on-pde.pdf'
      locator: 'Lecture 10, resolvents and the eigenvalue sequence, printed pp. 100-107 (read in full)'
verification:
  precheck: pass
---

## Example

Assume the setting of [[cor-noninvertible-elliptic-shifts-form-a-discrete-set-in-the-self-adjoint-case]] and let $(\lambda_k,e_k)$ be a weak eigenpair with $\|e_k\|_{L^2}=1$ ([[def-symmetric-elliptic-weak-eigenpair]]). Then for every real $\lambda\notin\{\lambda_j\}$
$$\|(L-\lambda)^{-1}\|\ \ge\ \frac1{|\lambda_k-\lambda|},$$
because $(L-\lambda)^{-1}e_k=e_k/(\lambda_k-\lambda)$ has $L^2$ norm $1/|\lambda_k-\lambda|$; combined with the exact formula of the spectral-series corollary this gives $\|(L-\lambda)^{-1}\|=1/\operatorname{dist}(\lambda,\{\lambda_j\})$. Hence the resolvent norm is unbounded on every neighbourhood of an eigenvalue: at $\lambda=\lambda_k-\varepsilon$, for every sufficiently small $\varepsilon>0$, it is at least $1/\varepsilon$. The Fredholm alternative is consistent with this: at $\lambda=\lambda_k$ the homogeneous problem has the nonzero solution $e_k$, and uniqueness and bounded invertibility both fail.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; a bounded open set $\Omega\subseteq\mathbb R^n$; the symmetric divergence-form operator $L$ with eigenvalues $\{\lambda_j\}$ and orthonormal eigenbasis; a weak eigenpair $(\lambda_k,e_k)$ with $\|e_k\|_{L^2}=1$; and a real $\lambda\notin\{\lambda_j\}$.

[F1] Eigenpair data: $e_k\in H^1_0(\Omega)$ and $a(e_k,v)=\lambda_k(e_k,v)_{L^2}$ for all $v$, equivalently $e_k\in D(L)$ and $Le_k=\lambda_ke_k$; the eigenbasis is orthonormal in $L^2$ ([[def-symmetric-elliptic-weak-eigenpair]], [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]]).

[F2] Real resolvent data: for real $\lambda\notin\{\lambda_j\}$, the base-field operator $L-\lambda$ is bijective with bounded inverse $R_\lambda=(L-\lambda)^{-1}:L^2(\Omega;\mathbb K)\to D(L)$, and $\|R_\lambda\|=1/\operatorname{dist}(\lambda,\{\lambda_j\})$. In the real case this inverse complexifies to $(\widetilde L-\lambda)^{-1}=-(\lambda-\widetilde L)^{-1}$ and has the same norm; thus its complexification is the negative of the library resolvent of $\widetilde L$, with the same operator norm ([[cor-noninvertible-elliptic-shifts-form-a-discrete-set-in-the-self-adjoint-case]], [[def-complex-l-two-inner-product]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[def-complexification-of-a-real-linear-map]], [[def-complexification-of-a-real-vector-space]], [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], [[def-operator-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Verification

**Proof technique:** direct.

1.1 Action on the eigenfunction. Since $Le_k=\lambda_ke_k$ by [F1], for real $\lambda\ne\lambda_k$ one has $(L-\lambda)e_k=(\lambda_k-\lambda)e_k$, and applying the inverse $R_\lambda$ of [F2] (which exists because $\lambda\ne\lambda_k$ and $\lambda\notin\{\lambda_j\}$) gives $$R_\lambda e_k=\frac{1}{\lambda_k-\lambda}e_k .$$ Taking $L^2$ norms and using $\|e_k\|_{L^2}=1$, $\|R_\lambda e_k\|_{L^2}=1/|\lambda_k-\lambda|$. [F1, F2, given, algebra]

2.1 Lower bound for the operator norm. By definition of the operator norm, $\|R_\lambda\|\ge\|R_\lambda e_k\|_{L^2}/\|e_k\|_{L^2}=1/|\lambda_k-\lambda|$; combined with the exact formula $\|R_\lambda\|=1/\operatorname{dist}(\lambda,\{\lambda_j\})$ of [F2] the lower bound for this fixed $k$ is an equality exactly when $|\lambda_k-\lambda|=\operatorname{dist}(\lambda,\{\lambda_j\})$, that is, when $\lambda_k$ is a nearest eigenvalue. [F2, step 1.1, given, algebra]

3.1 Blow-up near an eigenvalue. Fix $k$ and $\varepsilon>0$ such that $\lambda_k-\varepsilon\notin\{\lambda_j\}$ (possible for all sufficiently small $\varepsilon$ because the eigenvalue set is discrete); then step 2.1 with $\lambda=\lambda_k-\varepsilon$ gives $\|R_{\lambda_k-\varepsilon}\|\ge1/\varepsilon$, so the resolvent norm is unbounded on every neighbourhood of $\lambda_k$. At $\lambda=\lambda_k$ itself no bounded inverse exists: $e_k$ is a nonzero homogeneous solution, so $L-\lambda_k$ is not injective, in agreement with the criterion that $L-\lambda$ is bijective with bounded inverse exactly for $\lambda\notin\{\lambda_j\}$; uniqueness and bounded invertibility both fail at an eigenvalue. [F1, F2, step 2.1, given] ∎ 
