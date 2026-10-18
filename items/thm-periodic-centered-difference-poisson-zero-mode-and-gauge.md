---
id: thm-periodic-centered-difference-poisson-zero-mode-and-gauge
kind: theorem
title: Periodic centered-difference Poisson solvability and zero-mean gauge
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-periodic-pic-grid-and-inner-product]
proof_strategy: direct
axiom_use: No choice principle is used; all spaces and sums in the argument are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Benjamin Seibold, MIT 18.336 Lecture 5, Finite Difference Approximation
      url: https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/32dc4472b2967f90761db3677eade13e_MIT18_336S09_lec5.pdf
    - title: A. Myers, P. Colella, and B. Van Straalen, A 4th-Order Particle-in-Cell Method with Phase-Space Remapping for the Vlasov–Poisson Equation, Section 2.2
      url: https://escholarship.org/content/qt2tt7x68b/qt2tt7x68b.pdf
---

## Statement

Use the grid, inner product, and operator $A_h$ of [[def-periodic-pic-grid-and-inner-product]]. Then $A_h$ is self-adjoint and nonnegative, $\ker A_h$ consists exactly of constant arrays, and $\operatorname{ran}A_h=\{s:\bar s=0\}$. Consequently, for every compatible source $\bar s=0$, there is a unique solution $\phi$ of $A_h\phi=s$ with the gauge $\bar\phi=0$.

For $k\in\mathcal K_N$, the Fourier character $e_k(j)=e^{2\pi i k\cdot j/N}$ is an eigenvector with
$$ \lambda_h(k)=\frac4{h^2}\sum_{a=1}^d\sin^2\!\left(\frac{\pi k_a}{N}\right). $$
Only $k=0$ has eigenvalue zero.

## Facts & Assumptions

**Given:** $d\in\{1,2,3\}$, odd $N\ge3$, $h=L/N$, the periodic grid, its weighted inner product, and $A_h$.

[F1] [[def-periodic-pic-grid-and-inner-product]]: $A_hu$ is the periodic negative centered Laplacian, and $\langle u,v\rangle_h=h^d\sum_ju_jv_j$.

## Proof

1.1 Reindex the finite periodic sums in each coordinate. For any real arrays $u,v$, $\langle u,A_hv\rangle_h =h^d\sum_{a=1}^d\sum_j \frac{(u_{j+e_a}-u_j)(v_{j+e_a}-v_j)}{h^2}.$ The right side is symmetric in $u,v$ and is nonnegative when $u=v$. Thus $A_h$ is self-adjoint and nonnegative. [given, F1, algebra]

2.1 If $\langle u,A_hu\rangle_h=0$, every nonnegative squared difference in step 1.1 is zero, so $u_{j+e_a}=u_j$ for every $j,a$. Coordinate steps connect every pair of indices in $J_N$, hence $u$ is constant. Conversely a constant is annihilated by $A_h$. [F1, step 1.1, algebra]

3.1 For a symmetric finite-dimensional linear map, $\operatorname{ran}A_h=(\ker A_h)^\perp$: symmetry gives $\operatorname{ran}A_h\subseteq(\ker A_h)^\perp$, and rank-nullity makes the dimensions equal. By step 2.1, $(\ker A_h)^\perp$ is precisely the zero-mean subspace. Therefore each zero-mean $s$ is in the range, and any two solutions differ by a constant; imposing $\bar\phi=0$ selects exactly one. [step 2.1, algebra]

4.1 For $e_k(j)=e^{2\pi i k\cdot j/N}$, substitution in the stencil from [F1] gives $(A_he_k)_j =\frac1{h^2}\sum_a\left(2-e^{2\pi i k_a/N}-e^{-2\pi i k_a/N}\right)e_k(j) =\lambda_h(k)e_k(j).$ The characters form a basis because their finite geometric sums are orthogonal: in one coordinate $\sum_{j=0}^{N-1}e^{2\pi i(k-\ell)j/N}$ is $N$ if $k=\ell$ modulo $N$ and $0$ otherwise; taking products gives $N^d$ independent characters. Since every $k_a\in\{-(N-1)/2,\ldots,(N-1)/2\}$, $\lambda_h(k)=0$ exactly when every $k_a=0$. [F1, algebra] ∎
