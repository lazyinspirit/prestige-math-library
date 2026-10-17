---
id: ex-lanczos-poorly-aligned-start-vector-delays-the-largest-ritz-value
kind: example
title: "A poorly aligned start delays the largest Ritz value and requires the start-angle factor"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-lanczos-largest-ritz-value-chebyshev-bound-with-degenerate-cases,
       thm-cauchy-schwarz-and-the-euclidean-norm]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Youcef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §6.11.1, printed pp. 209–210"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Lanczos Chebyshev convergence factor and the start-angle dependence; numerical example verified directly."
    - title: "David Bindel, Matrix Computations (CS 6210), Cornell University, Fall 2012, Lectures 38–39"
      url: "https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec38-39.pdf"
      locator: "PDF pp. 4–6: largest Ritz-value estimate and starting-vector angle."
---

## Example

Let $A=\operatorname{diag}(10,2,1)$ and
$$b=(1/100,\alpha,\alpha)^{\mathsf T},\qquad \alpha=\sqrt{9999/20000}.$$
Verify that $\|b\|_2=1$, bound the largest two-step Ritz value by
$\theta_2<9/4$, and compare the resulting gap with the Chebyshev bound from
[[thm-lanczos-largest-ritz-value-chebyshev-bound-with-degenerate-cases]].
The comparison must show that deleting the start-angle factor would make this
particular bound false.

## Facts & Assumptions

**Given:** The diagonal matrix and unit starting vector specified above.

[F1] [[thm-lanczos-largest-ritz-value-chebyshev-bound-with-degenerate-cases]]: for a simple top eigenvalue, $\theta_m$ is the maximum Rayleigh quotient on $K_m(A,b)$ and the stated Chebyshev error bound includes $\tau^2=\|(I-P)b\|_2^2/\|Pb\|_2^2$.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for real vectors, $|u^{\mathsf T}v|\le\|u\|_2\|v\|_2$.

## Verification

1.1 Since $1/10000+2(9999/20000)=1$, the vector $b$ is unit. Also $Ab=(1/10,2\alpha,\alpha)^{\mathsf T}$. Set $$v:=(-\alpha^2,9\alpha/100,-8\alpha/100)^{\mathsf T}.$$ Direct dot products give $v^{\mathsf T}b=0$ and $v^{\mathsf T}Ab=-\alpha^2/10+18\alpha^2/100-8\alpha^2/100=0$. The vectors $b,Ab$ are independent because their first coordinates would force a proportionality factor $10$, while the second coordinates would force factor $2$. Hence $K_2(A,b)$ is two-dimensional and equals $v^\perp$. [given, F1, algebra]

1.2 We have $$\frac{v_2^2+v_3^2}{v_1^2} =\frac{145(1/10000)}{\alpha^2}=\frac{290}{9999}.$$ For every unit $x\in K_2(A,b)$, $v^{\mathsf T}x=0$. By [F2], $$|x_1|^2\le\frac{v_2^2+v_3^2}{v_1^2}(x_2^2+x_3^2) =\frac{290}{9999}(1-|x_1|^2),$$ so $|x_1|^2\le290/10289$. Its Rayleigh quotient satisfies $$x^{\mathsf T}Ax=10x_1^2+2x_2^2+x_3^2 \le2+8x_1^2\le2+\frac{2320}{10289}<\frac94,$$ since $4(2320)=9280<10289$. Taking the maximum gives $\theta_2<9/4$, so $\lambda_1-\theta_2>31/4$. [given, F1, F2, algebra]

2.1 The top eigenspace is $\operatorname{span}\{e_1\}$, hence $\tau^2=(9999/10000)/(1/10000)=9999$. The unwanted interval is $[1,2]$, and its affine exterior point is $1+2(10-2)/(2-1)=17$, so $T_1(17)=17$. The theorem's $m=2$ bound is $$\lambda_1-\theta_2\le\frac{9\cdot9999}{17^2} =\frac{89991}{289},$$ which is valid but large. If its factor $\tau^2$ were deleted, the proposed right side would be $9/289<31/4$, contradicting step 1.2. Thus this start cannot support that angle-free bound. [given, F1, step 1.2, algebra] ∎
