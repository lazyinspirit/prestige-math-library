---
id: lem-ip-analytic-cutoff-sequence
kind: lemma
title: "Finite-order analytic cutoff sequence"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-smooth-bump-between-concentric-euclidean-balls
  - def-ck-and-multi-index-notation-in-several-variables
  - def-support-and-compactly-supported-riemann-integral-in-rn
  - thm-riemann-fubini-on-product-rectangles
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://users.jyu.fi/~salomi/pub/MazzucchelliSaloTzou2023.pdf"
      locator: "§5.2, proof of Theorem 5.1, for localization by a fixed smooth cutoff; the finite-order cutoff sequence and its derivative bounds are constructed here."
    - title: "Johannes Sjöstrand, Singularités analytiques microlocales"
      url: "https://www.numdam.org/item/AST_1982__95__R3_0.pdf"
      locator: "§2, Theorem 2.8 and proof, printed pp. 16–18, for factorial Taylor-truncation remainders; the smooth finite-order cutoff sequence is constructed here."
proof_strategy: direct
---

## Statement

Let $n\ge1$, let $U\subset\mathbb R^n$ be open, and let $K\subset U$ be compact. There are constants $A,C>0$ and functions $\chi_N\in C_c^\infty(U)$ for each integer $N\ge1$ such that $0\le\chi_N\le1$, $\chi_N=1$ on a fixed neighborhood of $K$, and
$$
|\partial^\alpha\chi_N(x)|\le C(AN)^{|\alpha|} \qquad (x\in\mathbb R^n,\ |\alpha|\le N).
$$
These are smooth compact cutoffs; no compactly supported analytic function is asserted.

## Statement references

[[lem-smooth-bump-between-concentric-euclidean-balls|Smooth compact cutoff]]

[[def-ck-and-multi-index-notation-in-several-variables|Multi-index derivatives]]

[[def-support-and-compactly-supported-riemann-integral-in-rn|Compact support and integral]]

[[thm-riemann-fubini-on-product-rectangles|Compact-rectangle Fubini]]

## Facts & Assumptions

**Given:** A compact set $K$ contained in an open set $U\subset\mathbb R^n$.

[F1] [[lem-smooth-bump-between-concentric-euclidean-balls]]: nested balls admit a smooth function between zero and one, equal to one on the smaller ball and supported in the larger ball.

[F2] [[def-ck-and-multi-index-notation-in-several-variables]]: $\partial^\alpha$ denotes the specified iterated coordinate derivatives, with $|\alpha|$ their order.

[F3] [[def-support-and-compactly-supported-riemann-integral-in-rn]]: continuous compactly supported functions have finite integrals on containing rectangles.

[F4] [[thm-riemann-fubini-on-product-rectangles]]: for continuous functions on compact product rectangles, iterated integrals equal the product integral.

## Proof

**Given:** The compact set $K$ and open neighborhood $U$.

1.1 If $K=\varnothing$, set $\chi_N=0$ for all $N$; the empty set is a neighborhood of $K$, so every assertion is vacuous. Assume henceforth $K\ne\varnothing$. For each $x\in K$, choose concentric balls $B_{r_x}(x)\Subset B_{R_x}(x)\Subset U$. By [F1], take $b_x\in C_c^\infty(B_{R_x}(x))$ with $0\le b_x\le1$ and $b_x=1$ on $B_{r_x}(x)$. Compactness gives a finite subcover $B_{r_1}(x_1),\ldots,B_{r_m}(x_m)$ of $K$. The smooth function $ g=1-\prod_{j=1}^m(1-b_{x_j}) $ satisfies $0\le g\le1$, equals one on the open set $O=\bigcup_{j=1}^m B_{r_j}(x_j)$ containing $K$, and has compact support $S\Subset U$. This construction uses only finite subcover compactness. [given, F1, choose, algebra]

2.1 Choose a nonnegative smooth bump $\rho_0$ supported in the unit ball and equal to one on the ball of radius $1/2$, using [F1]. Its compactly supported integral is finite by [F3] and positive because it equals one on a ball. Normalize $\rho=\rho_0/\int\rho_0$, so $\int\rho=1$, $\rho\ge0$, and $\operatorname{supp}\rho\subset\overline B_1(0)$. Since $K\Subset O$ and $S\Subset U$, choose $\varepsilon>0$ smaller than one third of each distance $\operatorname{dist}(K,O^c)$ and $\operatorname{dist}(S,U^c)$. [F1, F3, step 1.1, choose]

3.1 For each $N\ge1$, put $\delta=\varepsilon/N$, $\rho_\delta(x)=\delta^{-n}\rho(x/\delta)$, and recursively $\eta_1=\rho_\delta$, $\eta_{j+1}=\eta_j*\rho_\delta$ for $1\le j<N$. Compact-rectangle Fubini [F4] and change of variables give $\int\eta_N=1$ and $\operatorname{supp}\eta_N\subset\overline B_\varepsilon(0)$; [F4] also permits reassociation of these compact convolution integrals. Define $\chi_N=g*\eta_N$. The integral defining $\chi_N$ is over a fixed compact rectangle. Differentiating the smooth kernel under this compact integral is justified by uniform convergence of its difference quotients on that rectangle, so $\chi_N$ is smooth. Positivity and unit mass give $0\le\chi_N\le1$. If $\operatorname{dist}(x,K)<\varepsilon$, then every $y\in\operatorname{supp}\eta_N$ satisfies $\operatorname{dist}(x-y,K)<2\varepsilon<\operatorname{dist}(K,O^c)$, hence $g(x-y)=1$ and $\chi_N(x)=1$. Also $\operatorname{supp}\chi_N\subset S+\overline B_\varepsilon(0)\Subset U$. [F1, F3, F4, step 1.1, step 2.1, given]

4.1 For smooth compactly supported $f,h$, write $\|h\|_1=\int_{\mathbb R^n}|h|$. Fubini on a rectangle containing their supports and the triangle inequality give $ \|f*h\|_{1}\le\int\!\!\int |f(x-y)||h(y)|\,dy\,dx =\|f\|_{1}\|h\|_{1}. $ Also $\partial_j(f*h)=(\partial_j f)*h=f*(\partial_jh)$ by differentiating under the compact integral and integration by parts; there is no boundary term because the factors have compact support. For $k=|\alpha|\le N$, distribute the $k$ coordinate derivatives to $k$ distinct convolution factors in $\eta_N$. Scaling gives $ \|\partial_j\rho_\delta\|_{1}=\delta^{-1}\|\partial_j\rho\|_{1}, $ so repeated use of the preceding inequality yields $ \|\partial^\alpha\eta_N\|_{1}\le (AN)^k,\qquad A=\varepsilon^{-1}\max\bigl(1,\max_j\|\partial_j\rho\|_{1}\bigr). $ For $k=0$ this is $\|\eta_N\|_{1}=1$. [F2, F3, F4, step 2.1, step 3.1, algebra]

5.1 Since $\|g\|_\infty\le1$, $ |\partial^\alpha\chi_N(x)| =|g*(\partial^\alpha\eta_N)(x)| \le \|g\|_\infty\|\partial^\alpha\eta_N\|_{1} \le (AN)^{|\alpha|}. $ Thus the lemma holds with $C=1$ (or any larger fixed constant), uniformly for every $|\alpha|\le N$. The cutoffs are smooth and no analytic bump is used. [F1, step 1.1, step 3.1, step 4.1, algebra] ∎
