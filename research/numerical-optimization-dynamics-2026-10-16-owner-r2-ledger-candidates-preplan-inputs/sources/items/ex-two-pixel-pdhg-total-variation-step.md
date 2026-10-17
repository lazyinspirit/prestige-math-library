---
id: ex-two-pixel-pdhg-total-variation-step
kind: example
title: "A two-pixel TV denoising PDHG step in CSR form"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
axiom_base: "No additional axiom; exact finite-dimensional real arithmetic."
deps:
  - alg-pdhg-primal-dual-hybrid-gradient
  - thm-pdhg-ergodic-saddle-gap-o1k
  - def-csr-matrix-with-stored-entry-semantics
  - alg-csr-matrix-vector-product-with-validation
  - thm-csr-matvec-returns-the-represented-matrix-product
  - thm-csr-storage-and-exact-matvec-cost
  - def-induced-matrix-p-norm
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
    - title: "Antonin Chambolle and Thomas Pock, A First-Order Primal-Dual Algorithm for Convex Problems with Applications to Imaging, §6.1"
      url: "https://optimization-online.org/wp-content/uploads/2010/06/2646.pdf"
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods, 2nd ed., §4.3"
      url: "https://www.netlib.org/templates/templates.pdf"
---

## Statement

Let $K=[-1\quad1]$, $f(x)=\tfrac12\|x-(1,0)\|_2^2$ on $\mathbb R^2$,
$g(v)=|v|$ on $\mathbb R$, $\tau=\sigma=1/2$, and $x^0=y^0=0$ with
$\bar x^0=x^0$. Encode $K$ by the canonical CSR record
$r=(0,2)$, $c=(0,1)$, $v=(-1,1)$. The exact updates are
$$y^1=0,\quad x^1=(1/3,0),\qquad y^2=-1/3,\quad x^2=(4/9,1/9).$$
Moreover $\tau\sigma\|K\|_2^2=1/2<1$.

## Facts & Assumptions

**Given:** The matrix, functions, step sizes and initial state in the Statement.

[A1] The matrix, functions, step sizes, and initial state are exactly those in the Statement.


[F1] [[alg-pdhg-primal-dual-hybrid-gradient]]: $y^{k+1}=\operatorname{prox}_{\sigma g^*}(y^k+\sigma K\bar x^k)$, $x^{k+1}=\operatorname{prox}_{\tau f}(x^k-\tau K^*y^{k+1})$, and $\bar x^{k+1}=2x^{k+1}-x^k$.

[F2] [[def-csr-matrix-with-stored-entry-semantics]]: the record stores two entries in the sole row and represents $K_{00}=-1,K_{01}=1$.

[F3] [[alg-csr-matrix-vector-product-with-validation]] and [[thm-csr-matvec-returns-the-represented-matrix-product]]: the validated exact product is $Kx=-x_0+x_1$.

[F4] [[thm-csr-storage-and-exact-matvec-cost]]: with $m=1$ and $s=2$, CSR stores $2s+m+1=6$ data slots and the product performs exactly two field multiplications and two field additions, plus one zero initialization.

[F5] [[def-induced-matrix-p-norm]]: $\|K\|_2=\sup_{\|x\|_2\le1}\|Kx\|_2$.

[F6] [[thm-pdhg-ergodic-saddle-gap-o1k]]: the strict step condition is required for the ergodic gap theorem, which makes no pointwise objective assertion.

## Proof


1.1 The record has valid row pointers $0=r_0\le r_1=2=s$ and valid columns $0,1$. By [F2,F3], its exact matrix-vector product is $-x_0+x_1$; its transpose sends $y$ to $(-y,y)$. By [F4], its stored-entry count is $s=2$, slot count is $6$, and the exact operation count is two multiplications, two additions, and one output initialization. [A1, F2, F3, F4, algebra]

1.2 The conjugate of $g(v)=|v|$ is the indicator of $[-1,1]$: if $|y|\le1$, then $yv-|v|\le0$ for every $v$ and equality occurs at $v=0$; if $y>1$, taking $v\to+\infty$ makes the supremum infinite, and if $y<-1$, taking $v\to-\infty$ does so. Therefore $\operatorname{prox}_{\sigma g^*}$ is Euclidean projection onto $[-1,1]$. Also, direct completion of squares gives $$\operatorname{prox}_{\tau f}(w)=\frac{w+\tau(1,0)}{1+\tau}.$$ [A1, F1, algebra, cases]

2.1 Initially $K\bar x^0=0$, so $y^1=\operatorname{proj}_{[-1,1]}(0)=0$, then $x^1=(0+(1/2)(1,0))/(3/2)=(1/3,0)$. Thus $\bar x^1=(2/3,0)$ and $y^2=\operatorname{proj}_{[-1,1]}((1/2)K\bar x^1) =\operatorname{proj}_{[-1,1]}(-1/3)=-1/3$. [A1, F1, step 1.1, step 1.2, algebra]

3.1 Since $K^Ty^2=(1/3,-1/3)$, $$x^2=\frac{x^1-(1/2)K^Ty^2+(1/2)(1,0)}{3/2} =\frac{(1/6,1/6)+(1/2,0)}{3/2}=(4/9,1/9).$$ Finally, for any $(a,b)$, $\|K(a,b)\|_2^2=(-a+b)^2\le2(a^2+b^2)$ with equality at $(a,b)=(1,-1)/\sqrt2$. Hence $\|K\|_2^2=2$ by [F5] and $\tau\sigma\|K\|_2^2=(1/4)2=1/2<1$, so the step-size hypothesis of [F6] is satisfied. [A1, F1, F5, F6, step 2.1, algebra] ∎
