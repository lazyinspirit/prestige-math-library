---
id: ex-smolyak-four-dimensional-product-integrand
kind: example
title: A four-dimensional product exactly integrated on a sparse node union
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: sparse-grid-cubature-and-mixed-regularity-examples
dependency_level: 8
deps:
  - def-smolyak-cubature
  - alg-smolyak-node-deduplication
  - def-na-clenshaw-curtis-quadrature
  - thm-na-clenshaw-curtis-exactness-and-near-best-error
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-derivatives
  - lem-derivative-of-a-power
  - thm-ftc-second-part
  - cor-riemann-integral-of-a-product-function
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Lloyd N. Trefethen, Is Gauss Quadrature Better than Clenshaw–Curtis?, §2"
      url: "https://courses.grainger.illinois.edu/cs591mh/fa2012/trefethen/Clenshaw-Curtis.pdf"
    - title: "N. Zabaras, Sparse Grid Collocation Methods, lecture notes, slides 17–26"
      url: "https://web.ics.purdue.edu/~ibilion/www.zabaras.com/Courses/UQ/Smolyak.pdf"
    - title: "T. Gerstner and M. Griebel, Sparse Grids, Encyclopedia of Quantitative Finance, §Numerical integration"
      url: "https://ins.uni-bonn.de/media/public/publication-media/sparsegrids_j8NLaMi.pdf?name=sparsegrids.pdf"
---

## Example

Use the Clenshaw–Curtis levels with polynomial degrees $1$ and $2$ on $[0,1]$
in four dimensions, and let $\Lambda_1=\{\ell\in\mathbb N_0^4:|\ell|_1\le1\}$.
For $f(x)=x_1^2x_2x_3x_4$, the Smolyak rule is exact with $48$ distinct nodes;
the full tensor product of level-one nodes has $81$ nodes.

## Facts & Assumptions

**Given:** $f(x)=x_1^2x_2x_3x_4$ on $[0,1]^4$, with $Q_0:=Q_{1,[0,1]}$ and $Q_1:=Q_{2,[0,1]}$, the Clenshaw–Curtis rules of polynomial degrees one and two.

[F1] [[def-smolyak-cubature]]: $Q_{\Lambda_1}$ is the sum of the tensor details at $0,e_1,e_2,e_3,e_4$, and its node union is the union of the corresponding level-grid products.

[F2] [[alg-smolyak-node-deduplication]]: each distinct point in that union is counted once, including a point whose combined weight is zero.

[F3] [[def-na-clenshaw-curtis-quadrature]]: on $[0,1]$, the $n$th rule samples at $x_j=(1+\cos(j\pi/n))/2$ for $j=0,\ldots,n$; thus $Q_0$ is level $n=1$ and $Q_1$ is level $n=2$.

[F4] [[thm-na-clenshaw-curtis-exactness-and-near-best-error]]: the $n$th Clenshaw–Curtis rule integrates every polynomial of degree at most $n$ exactly.

[F5] [[thm-quarter-turn-values-and-shift-formulas]]: $\cos(\pi)=-1$ and $\cos(\pi/2)=0$.

[F6] [[lem-derivative-of-a-power]] and [[thm-ftc-second-part]]: $\int_0^1x\,dx=1/2$ and $\int_0^1x^2\,dx=1/3$.

[F7] [[cor-riemann-integral-of-a-product-function]]: the integral of a product over a product rectangle is the product of its coordinate integrals.

[F8] [[thm-sine-and-cosine-derivatives]]: $\cos(0)=1$.

## Verification

1.1 The Given rules are the $n=1$ and $n=2$ rules. By [F3], their normalized nodes are $(1+\cos(j\pi/n))/2$; [F5] and [F8] give $X_0=\{0,1\}$ and $X_1=\{0,1/2,1\}$. By [F4], these rules are exact through degrees $1$ and $2$, respectively. Writing the level-zero weights as $w_0,w_1$, exactness on $1$ and $x$ gives $w_0+w_1=1$ and $w_1=1/2$, hence $Q_0(x)=Q_0(x^2)=1/2$. Also $Q_1(x)=1/2$ and $Q_1(x^2)=1/3$ by exactness and [F6]. Thus $\Delta_1(x)=0$ and $\Delta_1(x^2)=-1/6$. [given, F3, F4, F5, F6, F8, algebra]

2.1 Since $f$ is a product, its tensor details factor into one-dimensional values. The zero-index term is $Q_0(x^2)Q_0(x)^3=1/16$. The $e_1$ term is $\Delta_1(x^2)Q_0(x)^3=-1/48$, and each $e_j$ term for $j=2,3,4$ vanishes because $\Delta_1(x)=0$. Therefore $Q_{\Lambda_1}(f)=1/16-1/48=1/24$. By [F6]–[F7], $I_4(f)=(1/3)(1/2)^3=1/24$, so the cubature is exact. [given, F1, F6, F7, step 1.1, algebra]

3.1 The node union is $X_0^4$ together with, for each coordinate $j$, the $8$ points whose $j$th coordinate is $1/2$ and whose other coordinates are endpoints. Those four midpoint sets are disjoint from one another and from the $16$ corners, so $W(\Lambda_1)=16+4\cdot8=48$. The full tensor level-one grid has $|X_1|^4=3^4=81$ nodes. [given, F1, F2, step 1.1, algebra] ∎
