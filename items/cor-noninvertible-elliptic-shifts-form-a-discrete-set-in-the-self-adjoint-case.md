---
id: cor-noninvertible-elliptic-shifts-form-a-discrete-set-in-the-self-adjoint-case
kind: corollary
title: "Non-invertible elliptic shifts form a discrete set in the self-adjoint case"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 12
deps: [cor-a-sufficiently-large-shift-is-coercive, def-axiom-of-choice, def-complex-l-two-inner-product, def-complex-lp-and-euclidean-test-function-conventions, def-complexification-of-a-real-linear-map, def-complexification-of-a-real-vector-space, def-countable-choice, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-ltwo-operator-associated-with-a-symmetric-elliptic-form, def-operator-norm, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-shifted-elliptic-solution-operator, lem-eigenbasis-expansion-in-the-form-norm, thm-bounded-inverse-theorem, thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator, thm-self-adjoint-resolvent-estimate, thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent]
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
      locator: 'Section 4.10, eigenvalue expansion and the solvability alternatives for $Lu-\lambda u=f$, printed pp. 109-110 (read in full)'
    - title: 'Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)'
      url: 'https://math.stanford.edu/~lms/lecs-on-pde.pdf'
      locator: 'Lecture 10, resolvent set and the eigenvalue sequence, printed pp. 100-107 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice and Countable Choice. In the symmetric case of [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], let the scalar field be $\mathbb K\in\{\mathbb R,\mathbb C\}$ and let $\Omega$ be nonempty, bounded and open. Write $L,D(L)$ for the symmetric-case operator. Define the complex Hilbert space $\widetilde H:=L^2(\Omega;\mathbb C)$ and the complex operator $\widetilde L$ as follows: if $\mathbb K=\mathbb C$, set $\widetilde L=L$; if $\mathbb K=\mathbb R$, use the canonical isometric identification $L^2(\Omega;\mathbb R)_{\mathbb C}\cong L^2(\Omega;\mathbb C)$ and set $\widetilde L=L_{\mathbb C}$, the complexification $L_{\mathbb C}(u+iv)=Lu+iLv$ on $D(L)+iD(L)$ ([[def-complex-l-two-inner-product]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[def-complexification-of-a-real-vector-space]], [[def-complexification-of-a-real-linear-map]], [[thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent]]). Let $\{\lambda_j\}$ be the eigenvalues of [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]], repeated according to multiplicity. For every real $\lambda$, the base-field operator $L-\lambda:D(L)\to L^2(\Omega;\mathbb K)$ is bijective with bounded inverse if and only if $\lambda\notin\{\lambda_j\}$. For such $\lambda$ the inverse $R_\lambda:=(L-\lambda)^{-1}$, in the adopted $L-\lambda$ convention, is given by the convergent series
$$R_\lambda f=\sum_{j\ge1}\frac{(f,e_j)_{L^2}}{\lambda_j-\lambda}\,e_j\qquad(f\in L^2(\Omega;\mathbb K)),$$
which converges in $L^2(\Omega;\mathbb K)$ and in $H^1_0(\Omega;\mathbb K)$, and $\|R_\lambda\|=1/\operatorname{dist}(\lambda,\{\lambda_j\})$. In the real case this inverse complexifies to $(\widetilde L-\lambda)^{-1}$ with the same operator norm, and conversely the complex resolvent at a real $\lambda$ restricts to the real inverse. Finally, the complex spectrum is $\sigma(\widetilde L)=\{\lambda_j\}$: a closed discrete subset of $\mathbb R$, bounded below, unbounded above, with no finite accumulation point; the nonreal resolvent exclusion follows from [[thm-self-adjoint-resolvent-estimate]].

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; a nonempty bounded open set $\Omega\subseteq\mathbb R^n$; the symmetric divergence-form case with operator $L$ and form $a$; the orthonormal eigenbasis $\{e_j\}$ and nondecreasing eigenvalue list $\lambda_j\to+\infty$ of the discrete spectral theorem; a real $\lambda$; and $f\in L^2(\Omega)$.

[F1] Eigenbasis expansion: for $u\in H^1_0(\Omega)$ and $g\in L^2(\Omega)$, $u=\sum_j(u,e_j)_{L^2}e_j$ in $H^1_0$ and $g=\sum_j(g,e_j)_{L^2}e_j$ in $L^2$, with $\|g\|_{L^2}^2=\sum_j|(g,e_j)_{L^2}|^2$ and $a_\mu(u,u)=\sum_j(\lambda_j+\mu)|(u,e_j)_{L^2}|^2$ ([[lem-eigenbasis-expansion-in-the-form-norm]], [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]]).

[F2] The distinct eigenvalues of $L$ are exactly the list $\{\lambda_j\}$, the list is nondecreasing with $\lambda_j\to+\infty$, and every weak eigenpair occurs there ([[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]], [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]).

[F3] Form norm: $a_\mu$ is a complete inner product on $H^1_0(\Omega)$ equivalent to the standard Sobolev norm, with $a_\mu(w,w)\ge\alpha\|w\|_{H^1_0}^2$ for $\alpha=\theta/2$; also $a$ is bounded on $H^1_0(\Omega)$ and $a_\mu(e_j,e_j)=\lambda_j+\mu>0$ for each normalized eigenfunction ([[cor-a-sufficiently-large-shift-is-coercive]], [[def-hilbert-space]], [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], [[def-shifted-elliptic-solution-operator]]).

[F4] Resolvent convention: for a complex operator $\widetilde L$, membership in the resolvent set means bijectivity of $\widetilde L-\lambda$ with an everywhere-defined bounded inverse, whose negative is the library resolvent $(\lambda-\widetilde L)^{-1}$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], [[def-operator-norm]]). In the real case the canonical Hilbert complexification has $\|u+iv\|^2=\|u\|^2+\|v\|^2$, so a real bounded inverse complexifies to a bounded inverse with the same norm ([[thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent]]).

[F5] Nonreal resolvent exclusion: $\widetilde L$ is self-adjoint on the complex Hilbert space $\widetilde H$, so every nonreal $z$ belongs to its resolvent set and $\sigma(\widetilde L)\subseteq\mathbb R$ ([[thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent]], [[thm-self-adjoint-resolvent-estimate]]).

## Proof

**Proof technique:** direct.

1.1 The candidate series. Suppose $\lambda\notin\{\lambda_j\}$. Since $\lambda_j\to+\infty$ and the distinct eigenvalues have no finite accumulation point, the set of distinct eigenvalues is closed and its distance $\delta:=\operatorname{dist}(\lambda,\{\lambda_j\})$ to $\lambda$ is positive. Set $c_j:=(f,e_j)_{L^2}(\lambda_j-\lambda)^{-1}$. Then $|c_j|\le\delta^{-1}|(f,e_j)_{L^2}|$, and [F1] gives $\sum_j|c_j|^2\le\delta^{-2}\sum_j|(f,e_j)_{L^2}|^2=\delta^{-2}\|f\|_{L^2}^2<\infty$; hence $u:=\sum_jc_je_j$ converges in $L^2(\Omega)$ with $\|u\|_{L^2}\le\delta^{-1}\|f\|_{L^2}$. [F1, F2, F4, given, algebra]

2.1 Strong form convergence and the equation. For $M<N$, form orthogonality of the eigenfunctions gives $$a_\mu(u_N-u_M,u_N-u_M)=\sum_{M<j\le N}(\lambda_j+\mu)|c_j|^2.$$ The ratio $(\lambda_j+\mu)(\lambda_j-\lambda)^{-2}$ is bounded over $j$ (the denominator is nonzero and quadratic growth dominates the linear numerator), so Parseval [F1] gives $$\sum_j(\lambda_j+\mu)|c_j|^2\le C\sum_j|(f,e_j)_{L^2}|^2=C\|f\|_{L^2}^2<\infty.$$ Its tails tend to zero, so $(u_N)$ is Cauchy in the $a_\mu$ norm; by [F3] this norm is complete and equivalent to $H^1_0$, hence $u_N$ converges strongly in $H^1_0$ to some $\widetilde u$. The continuous inclusion $H^1_0\hookrightarrow L^2$ and the $L^2$ convergence of step 1.1 identify $\widetilde u=u$, so $u\in H^1_0$ and $u_N\to u$ strongly there. For each $v\in H^1_0(\Omega)$, boundedness of $a$ and the eigenrelations give $$a(u,v)=\lim_Na(u_N,v)=\lim_N\sum_{j\le N}\bigl[(f,e_j)_{L^2}+\lambda c_j\bigr](e_j,v)_{L^2}=(f,v)_{L^2}+\lambda(u,v)_{L^2},$$ where the last equality uses the $L^2$ basis expansions of $f$, $u$ and $v$. Thus $a(u,v)=(f+\lambda u,v)_{L^2}$ for all $v$, so $u\in D(L)$ and $(L-\lambda)u=f$. [F1, F2, F3, step 1.1, given, algebra]

3.1 Bijectivity. If $\lambda=\lambda_k$ for some $k$, the eigenfunction $e_k\ne0$ satisfies $(L-\lambda_k)e_k=0$, so $L-\lambda$ is not injective and hence not bijective. If $\lambda\notin\{\lambda_j\}$, step 2.1 produces a solution of $(L-\lambda)u=f$ for every $f\in L^2(\Omega)$, so $L-\lambda$ is surjective; it is injective, because $(L-\lambda)u=0$ makes $u$ a weak eigenfunction with eigenvalue $\lambda$, forcing $\lambda\in\{\lambda_j\}$ by [F2] or $u=0$. The solution estimate of step 1.1 gives $\|(L-\lambda)^{-1}f\|_2\le\delta^{-1}\|f\|_2$, so $L-\lambda$ is bijective with bounded inverse exactly for $\lambda\notin\{\lambda_j\}$. [F2, step 1.1, step 2.1, given]

4.1 The inverse series and its norm. For $\lambda\notin\{\lambda_j\}$ the series of step 1.1 has coefficients $(f,e_j)_{L^2}(\lambda_j-\lambda)^{-1}$, so the solution is $R_\lambda f=\sum_j(f,e_j)_{L^2}(\lambda_j-\lambda)^{-1}e_j$, converging in $L^2$ and, by step 2.1, with $H^1_0$ membership; its $L^2$ norm satisfies $\|R_\lambda f\|_{L^2}^2=\sum_j|(f,e_j)_{L^2}|^2|\lambda_j-\lambda|^{-2}\le\delta^{-2}\|f\|_{L^2}^2$. Choose $k$ with $|\lambda_k-\lambda|=\delta$ (attained because the eigenvalue set is closed); testing at $f=e_k$ gives $\|R_\lambda e_k\|_{L^2}=1/\delta$, so the operator norm is exactly $\|R_\lambda\|=1/\delta=1/\operatorname{dist}(\lambda,\{\lambda_j\})$. [F1, F4, step 1.1, step 3.1, given, algebra]

5.1 Complex spectrum. By [F5], every nonreal scalar is in $\rho(\widetilde L)$. For a real $\lambda\notin\{\lambda_j\}$, step 3.1 gives a bounded inverse for $L-\lambda$ over the base field; if $\mathbb K=\mathbb C$ this is directly the complex resolvent, while if $\mathbb K=\mathbb R$ its complexification is a bounded inverse of $\widetilde L-\lambda$. Conversely, each $\lambda_j$ is an eigenvalue, so $\widetilde L-\lambda_j$ is not injective (in the real case, complexify its nonzero real eigenfunction). Therefore $\sigma(\widetilde L)=\{\lambda_j\}$, which is discrete with no finite accumulation point because $\lambda_j\to+\infty$, bounded below by $\lambda_1\ge-\beta$ from the discrete spectral theorem, and unbounded above because $\lambda_j\to+\infty$. [F2, F4, F5, step 3.1, step 4.1, given] ∎
