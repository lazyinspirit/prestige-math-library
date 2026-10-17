---
id: ex-fista-objective-increases-on-a-quadratic
kind: example
title: "FISTA can increase the objective between consecutive iterates"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-proximal-gradient-and-fista
  - def-euclidean-inner-product
  - def-proper-closed-convex-function-on-rn
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Amir Beck and Marc Teboulle, A Fast Iterative Shrinkage-Thresholding Algorithm for Linear Inverse Problems, §4"
      url: "https://www.tau.ac.il/~becka/FISTA.pdf"
---

## Example

Take $f(x)=x^2/4$ on $\mathbb R$, $g=0$, $L=1$, and $x_0=1$. The gradient has Lipschitz constant $1/2$, so $L=1$ is valid. Standard FISTA gives $|x_5|>|x_4|$, hence $f(x_5)>f(x_4)$; consecutive accelerated objective values need not decrease.

## Facts & Assumptions

**Given:** The scalar objective, smoothness constant and initial point in the Example.

[F1] [[alg-proximal-gradient-and-fista]]: $x_k=T_L(y_k)$, $t_{k+1}=(1+\sqrt{1+4t_k^2})/2$, and $y_{k+1}=x_k+((t_k-1)/t_{k+1})(x_k-x_{k-1})$.

[F2] [[def-euclidean-inner-product]]: identify a scalar $s$ with the sole coordinate $s$ of its corresponding vector in $\mathbb R^1$.

[F3] [[def-proper-closed-convex-function-on-rn]]: properness is a nonempty effective domain, convexity is the Jensen inequality, and closedness is closed epigraph.

## Verification

1.1 Under the scalar/one-coordinate identification [F2], $f(x)=x^2/4$ is convex and continuously differentiable, since $$f((1-\alpha)x+\alpha z)=(1-\alpha)f(x)+\alpha f(z)-\frac{\alpha(1-\alpha)}4(x-z)^2\qquad(0\le\alpha\le1).$$ Also $f'(x)=x/2$, so its gradient is $1/2$-Lipschitz and $L=1$ is valid. The zero function $g$ has nonempty domain, is convex, and has epigraph $\mathbb R^1\times[0,+\infty)$, which is closed; hence it is proper, closed and convex by [F3]. Its proximal map is the identity, so $T_1(y)=y-\nabla f(y)=y/2$. Starting from $t_1=1,y_1=x_0=1$, recurrence [F1] gives $x_1=1/2$, $x_2=1/4$, and $$t_2=\frac{1+\sqrt5}{2},\quad t_3=\frac{1+\sqrt{1+4t_2^2}}2,\quad t_4=\frac{1+\sqrt{1+4t_3^2}}2,\quad t_5=\frac{1+\sqrt{1+4t_4^2}}2.$$ The first interval follows from $2.2360^2<5<2.2361^2$. For the next three, substituting the already established intervals gives radicands $1+4t_2^2$, $1+4t_3^2$, and $1+4t_4^2$ in $(11.471696,11.472991)$, $(20.244014,20.249279)$, and $(31.228004,31.272004)$ respectively. The endpoint squares $3.3868^2<11.471696$, $3.3874^2>11.472991$, $4.498^2<20.244014$, $4.502^2>20.249279$, $5.586^2<31.228004$, and $5.594^2>31.272004$ then give $1.6180<t_2<1.6181$, $2.1934<t_3<2.1937$, $2.749<t_4<2.751$, and $3.293<t_5<3.297$. [F1, F2, F3, given, algebra]

2.1 The momentum coefficients satisfy $0.281<(t_2-1)/t_3<0.283$, $0.433<(t_3-1)/t_4<0.435$, and $0.529<(t_4-1)/t_5<0.533$: for example, the bounding cross-products are $0.281(2.1937)=0.6164297<0.6180$, $0.283(2.1934)=0.6207322>0.6181$, $0.433(2.751)=1.191183<1.1934$, $0.435(2.749)=1.195815>1.1937$, $0.529(3.297)=1.744113<1.749$, and $0.533(3.293)=1.755169>1.751$. Substitution into $x_3=\frac18(1-(t_2-1)/t_3)$ gives $0.0896<x_3<0.0899$. Then $$x_4=\frac12\left[x_3+\frac{t_3-1}{t_4}(x_3-1/4)\right]$$ lies between $\frac12[(1+0.435)(0.0896)-0.435/4]=0.009913$ and $\frac12[(1+0.433)(0.0899)-0.433/4]=0.01028835$, so $0.0099<x_4<0.0103$. Finally $$x_5=\frac12\left[x_4+\frac{t_4-1}{t_5}(x_4-x_3)\right]$$ and endpoint monotonicity gives $$\frac12[(1+0.533)(0.0099)-0.533(0.0899)]=-0.01637<x_5<\frac12[(1+0.529)(0.0103)-0.529(0.0896)]=-0.01582485.$$ Thus $-0.0164<x_5<-0.0158$. [F1, step 1.1, algebra]

3.1 The intervals imply $|x_5|>0.0158>0.0103>|x_4|$. Since $f(x)=x^2/4$ is strictly increasing as a function of $|x|$, $f(x_5)>f(x_4)$. [step 2.1, given, algebra] ∎
