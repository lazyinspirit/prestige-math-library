---
id: thm-cg-recursive-residual-gap-and-attainable-accuracy
kind: theorem
title: "Finite-precision CG has a recursive-residual gap and an attainable-accuracy bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-conjugate-gradient-recurrence,
       def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix,
       def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma,
       thm-floating-point-dot-product-componentwise-and-normwise-error-bounds,
       cor-real-spectral-theorem-for-self-adjoint-endomorphisms,
       def-induced-matrix-p-norm]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §13.3, printed pp. 276–281"
      url: "https://djvu.online/file/uGJmLc3c54Qe6"
      locator: "Finite-precision conjugate-gradient recurrences, recursive residuals, and attainable accuracy. The residual-gap identity and energy-norm estimate below are derived explicitly."
    - title: "Youcef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §6.7, printed pp. 196–201"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Conjugate-gradient recurrence and convergence context; finite-precision gap argument supplied locally."
---

## Statement

Let $A\in\mathbb R^{n\times n}$ be symmetric positive definite, let
$Ax_*=b$, and suppose the computed CG process from
[[def-conjugate-gradient-recurrence]] completes steps $k=0,\ldots,j-1$ in
the no-range-failure model of
[[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]].
Assume $nu<1$ and $2u<1$, and that every product and partial sum in each
length-$n$ matrix-vector dot product is normal-range. Write the actual stored
scalars and vectors as $\alpha_k,\hat x_k,\hat r_k,\hat p_k$, and compute
each component of $\hat q_k=\operatorname{fl}(A\hat p_k)$ by a rounded
length-$n$ dot product. Compute the updates componentwise as
$$\hat x_{k+1}=\operatorname{fl}(\hat x_k+ \operatorname{fl}(\alpha_k\hat p_k)),\qquad \hat r_{k+1}=\operatorname{fl}(\hat r_k- \operatorname{fl}(\alpha_k\hat q_k)),$$
where the inner products and outer additions/subtractions are rounded
operations and $\alpha_k$ is the actual stored scalar used by the algorithm.
Define the resulting update errors by
$$\delta^x_k:=\hat x_{k+1}-(\hat x_k+\alpha_k\hat p_k),\qquad \delta^r_k:=\hat r_{k+1}-(\hat r_k-\alpha_k\hat q_k).$$
For any index $j$ reached by the process, define
$$g_j:=\hat r_j-(b-A\hat x_j),\qquad \Gamma_j:=\|g_0\|_2+\sum_{k<j} \bigl(\|\delta^r_k\|_2+\|A\|_2\|\delta^x_k\|_2+ |\alpha_k|\|\delta^A_k\|_2\bigr).$$
Here $\|A\|_2$ is the induced Euclidean operator norm. Then
$$\|g_j\|_2\le\Gamma_j, \qquad \|b-A\hat x_j\|_2\le\|\hat r_j\|_2+\Gamma_j.$$
If $\lambda_{\min}>0$ is the smallest eigenvalue of $A$, then
$$\|x_*-\hat x_j\|_A\le \frac{\|b-A\hat x_j\|_2}{\sqrt{\lambda_{\min}}} \le\frac{\|\hat r_j\|_2+\Gamma_j}{\sqrt{\lambda_{\min}}},$$
where $\|e\|_A=\sqrt{e^{\mathsf T}Ae}$. The explicit operation errors obey
$$\|\delta^A_k\|_2\le\gamma_n \left(\sum_{i=1}^n\left(\sum_{\ell=1}^n |A_{i\ell}|\,|\hat p_{k,\ell}|\right)^2\right)^{1/2},$$
and, when $2u<1$,
$$\|\delta^x_k\|_2\le\gamma_2 \bigl(\|\hat x_k\|_2+|\alpha_k|\|\hat p_k\|_2\bigr),\quad \|\delta^r_k\|_2\le\gamma_2 \bigl(\|\hat r_k\|_2+|\alpha_k|\|\hat q_k\|_2\bigr).$$
No exact-grade termination or monotonicity of the true residual is asserted.

## Facts & Assumptions

**Given:** The real SPD system, a sequence of finite computed CG steps, the
actual update errors in the Statement, and the definitions of $\Gamma_j$ and
the energy norm.

[F1] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]:
each real addition and multiplication is rounded with relative error at most
$u$ on a successful normal-range operation; for $ku<1$,
$\gamma_k=ku/(1-ku)$.

[F2] [[thm-floating-point-dot-product-componentwise-and-normwise-error-bounds]]:
a length-$n$ computed dot product has absolute error at most
$\gamma_n\sum_\ell|x_\ell y_\ell|$ when its products and partial sums are
normal-range.

[F3] [[def-conjugate-gradient-recurrence]]: CG updates $x$ by adding
$\alpha p$ and updates the recursive residual by subtracting $\alpha Ap$.

[F4] [[def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix]]:
for real SPD $A$, $\|e\|_A^2=e^{\mathsf T}Ae$.

[F5] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: the real
symmetric $A$ has an orthonormal eigenbasis; its eigenvalues are positive by
positive definiteness.

[F6] [[def-induced-matrix-p-norm]]: at $p=2$, $\|A\|_2$ is the supremum of
$\|Av\|_2$ over $\|v\|_2\le1$, hence
$\|Av\|_2\le\|A\|_2\|v\|_2$.

## Proof

1.1 The update equations in the Statement give $$\begin{aligned} g_{k+1} &=\hat r_k-\alpha_k(A\hat p_k+\delta^A_k)+\delta^r_k -(b-A(\hat x_k+\alpha_k\hat p_k+\delta^x_k))\\ &=g_k+\delta^r_k-\alpha_k\delta^A_k+A\delta^x_k. \end{aligned}$$ The $\alpha_kA\hat p_k$ terms cancel exactly. [given, F3, algebra]

1.2 For one computed row of $A\hat p_k$, [F2] bounds its product-sum error by $\gamma_n\sum_\ell|A_{i\ell}\hat p_{k,\ell}|$. Squaring these $n$ rowwise bounds and summing gives the displayed $\|\delta^A_k\|_2$ bound. For either vector update, each component consists of one rounded product and one rounded addition or subtraction. Unrolling those two relative errors gives a component bound $\gamma_2(|v_i|+|\alpha||p_i|)$ for the updated component, where $(v,p)$ is $(\hat x_k,\hat p_k)$ or $(\hat r_k,\hat q_k)$. Taking the Euclidean norm and applying the triangle inequality gives the two displayed $\gamma_2$ bounds. [given, F1, F2, algebra]

2.1 Taking Euclidean norms in step 1.1 and using [F6] yields $$\|g_{k+1}\|_2\le\|g_k\|_2+\|\delta^r_k\|_2+ |\alpha_k|\|\delta^A_k\|_2+\|A\|_2\|\delta^x_k\|_2.$$ Induction from $k=0$ proves $\|g_j\|_2\le\Gamma_j$. Since $\hat r_j=(b-A\hat x_j)+g_j$, the triangle inequality gives the recursive residual bound. [given, step 1.1, F6, induction]

3.1 Let $e=x_*-\hat x_j$. Then $Ae=b-A\hat x_j$. In the orthonormal eigenbasis of [F5], $$\|e\|_A^2=e^{\mathsf T}Ae =\sum_i\lambda_i e_i^2 \le\lambda_{\min}^{-1}\sum_i\lambda_i^2e_i^2 =\lambda_{\min}^{-1}\|Ae\|_2^2.$$ Thus $\|e\|_A\le\|b-A\hat x_j\|_2/\sqrt{\lambda_{\min}}$; step 2.1 then proves the claimed bound. [given, F4, F5, step 2.1, algebra] ∎
