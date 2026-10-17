---
id: ex-global-exact-line-search-on-an-anisotropic-quadratic
kind: example
title: "Exact and Armijo rates on an anisotropic quadratic"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-gradient-descent
  - def-jacobian-matrix-and-gradient
  - thm-heine-borel-rn
  - thm-exact-line-search-gradient-descent-global-contraction
  - thm-armijo-gradient-descent-global-linear-rate
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
---

## Example

For $f(u,v)=\tfrac12u^2+2v^2$, the exact-gradient step has an explicit nontrivial line minimizer, and Armijo backtracking shows the accepted-step bound in a finite calculation.

## Facts & Assumptions

**Given:** $f(u,v)=\tfrac12u^2+2v^2$ on $\mathbb R^2$, initial point $x_0=(1,1)$, exact gradient line search, and Armijo parameters $a=\tfrac14$, $b=\tfrac12$.

[F1] [[thm-exact-line-search-gradient-descent-global-contraction]]: under compact sublevel and $mI\preceq H_f\preceq MI$, an exact negative-gradient line-search step contracts the objective gap by at least the factor $1-m/M$.

[F2] [[thm-armijo-gradient-descent-global-linear-rate]]: with $0<a<1/2$ and $0<b<1$, the accepted step is at least $\min\{1,2b(1-a)/M\}$ and the objective-gap factor is $1-2am\min\{1,2b(1-a)/M\}$.

[F3] [[alg-gradient-descent]]: backtracking tests $t=1,b,b^2,\ldots$ and accepts when $f(x-t\nabla f(x))\le f(x)-at\|\nabla f(x)\|_2^2$.

[F4] [[thm-heine-borel-rn]]: in Euclidean space, a closed and bounded set is compact.

## Verification
1.1 The Hessian is $\operatorname{diag}(1,4)$, so $m=1$ and $M=4$; $x^*=(0,0)$ is the unique minimizer and $f(x_0)=5/2$. The sublevel set is closed by continuity and bounded because $\tfrac12u^2\le5/2$ and $2v^2\le5/2$ on it; it is compact by [F4]. The gradient at $x_0$ is $(1,4)$. [F4, given]

1.2 Along the negative-gradient ray, $\phi(t)=\tfrac12(1-t)^2+2(1-4t)^2$ and $\phi'(t)=65t-17$, so the unique minimizer is $t_*=17/65$. It gives $x_+=(48/65,-3/65)$ and $f(x_+)=234/845$. The theorem [F1] bounds the gap by $(1-1/4)(5/2)=15/8$, and $234/845<15/8$. [F1, given, algebra]

1.3 For Armijo, the first trial $t=1$ has candidate $(0,-3)$ with value $18$ and threshold $5/2-17/4=-7/4$, so it fails. The second trial $t=1/2$ has candidate $(1/2,-1)$ with value $17/8$ and threshold $3/8$, so it fails. At $t=1/4$, the candidate is $(3/4,0)$ with value $9/32<23/16$, the Armijo threshold; hence [F3] accepts $t=1/4$. [F3, given, algebra]

2.1 Here $\tau=\min\{1,2b(1-a)/M\}=3/16$, so [F2] gives the gap factor $1-2am\tau=29/32$. The actual new gap $9/32$ is below $(29/32)(5/2)=145/64$. The exact and Armijo calculations concern objective gaps; neither calculation supplies an iterate-error bound. [F1, F2, step 1.3, algebra] ∎
