---
id: thm-stochastic-gradient-nonconvex-randomized-iterate-bound
kind: theorem
title: "Nonconvex SGD stationarity bound for a uniform randomized iterate"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - lem-l-smoothness-descent-inequality
  - def-conditional-variance
  - lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula
  - thm-taking-out-what-is-known
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - def-axiom-of-choice
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-induction-principle
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning, SIAM Review 60(2) (2018), §4.3, Theorem 4.8"
      url: "https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf"
      locator: "§4.3, Theorem 4.8 and its complete telescoping proof"
    - title: "Saeed Ghadimi and Guanghui Lan, Stochastic First- and Zeroth-Order Methods for Nonconvex Stochastic Programming, §2.1, Theorem 2.1"
      url: "https://optimization-online.org/wp-content/uploads/2012/06/3499.pdf"
      locator: "§2.1, Algorithm 1, Assumption A1, Theorem 2.1 and its proof"
---

## Statement

Assume AC. Let $f:\mathbb R^d\to\mathbb R$ be continuously differentiable with $L$-Lipschitz gradient for $L>0$, and suppose $f(x)\ge f_{\inf}$ for every $x$, where $f_{\inf}\in\mathbb R$ is a lower bound. Let $x_0$ be deterministic, $\Delta=f(x_0)-f_{\inf}$, and run the unconstrained update of [[def-stochastic-gradient-oracle-and-unconstrained-update]] with constant $0<\alpha\le1/L$. Suppose
$$\mathbb E[G_k\mid\mathcal F_k]=\nabla f(x_k),\qquad \operatorname{Var}(G_k\mid\mathcal F_k)\le\sigma^2$$
almost surely for every $k$. After generating $x_0,\ldots,x_{N-1}$, independently choose $R$ uniformly from $\{0,\ldots,N-1\}$ on the finite product extension of the trajectory space; equivalently, $\mathbb E\|\nabla f(x_R)\|_2^2=N^{-1}\sum_{k<N}\mathbb E\|\nabla f(x_k)\|_2^2$. Then
$$\mathbb E\|\nabla f(x_R)\|_2^2\le\frac{2\Delta}{\alpha N}+L\alpha\sigma^2.$$
For fixed $\Delta,\sigma$, the stepsize $\alpha=\min\{1/L,\sqrt{2\Delta/(L\sigma^2N)}\}$ gives an $O(N^{-1/2})$ bound when $\Delta,\sigma>0$; zero cases have the stronger bounds specified in the proof. This is an optimization guarantee, not an inferential or central-limit theorem.

## Facts & Assumptions

**Given:** AC; $f,L,f_{\inf},x_0,\Delta,N$ and the stochastic update and conditional oracle assumptions in the Statement.

[A1] [[def-axiom-of-choice]]: AC supplies the conditional-expectation classes used in the proof.

[F1] [[def-stochastic-gradient-oracle-and-unconstrained-update]]: the update is $x_{k+1}=x_k-\alpha G_k$, and conditional unbiasedness is interpreted coordinatewise almost surely.

[F2] [[lem-l-smoothness-descent-inequality]]: for an $L$-Lipschitz gradient, $f(y)\le f(x)+\langle\nabla f(x),y-x\rangle+(L/2)\|y-x\|_2^2$.

[F3] [[def-conditional-variance]] and [[lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula]]: for a square-integrable scalar coordinate, $\operatorname{Var}(X\mid\mathcal G)=\mathbb E[X^2\mid\mathcal G]-(\mathbb E[X\mid\mathcal G])^2$; summing this identity over the finitely many coordinates gives the vector second-moment identity.

[F4] [[thm-taking-out-what-is-known]]: finite measurable factors may be taken outside conditional expectation once products are integrable.

[F5] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear, preserves order, and preserves ordinary expectation.

[F6] [[def-euclidean-inner-product]]: the Euclidean norm square is the sum of squared coordinates.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$, and the Euclidean norm satisfies the triangle inequality.

[F8] [[thm-induction-principle]]: a property true at the first index and inherited by each successor holds at every natural index.

## Proof

1.1 The oracle definition [F1] requires each $G_k$ used in a conditional variance to be square-integrable. Since $x_0$ is deterministic and $\alpha$ is finite, the update and [F8] give square-integrable $x_k$ at every finite iteration by induction. The Lipschitz condition and triangle inequality in [F7] give $\|g_k\|_2\le\|\nabla f(0)\|_2+L\|x_k\|_2$. Applying [F2] at $0,x_k$, then using [F7] and $2ab\le a^2+b^2$, bounds $|f(x_k)|$ by $C(1+\|x_k\|_2^2)$ for a finite constant $C$; thus $f(x_k)$ is integrable. [F1, F2, F7, F8, given, induction, algebra]

2.1 Put $g_k=\nabla f(x_k)$. Apply [F2] with $y=x_k-\alpha G_k$ and condition on $\mathcal F_k$. By [F1], [F3], [F4], [F5], and [F6], $\mathbb E[f(x_{k+1})\mid\mathcal F_k]\le f(x_k)-\alpha\|g_k\|_2^2+\frac{L\alpha^2}{2}\mathbb E[\|G_k\|_2^2\mid\mathcal F_k]\le f(x_k)-\alpha(1-L\alpha/2)\|g_k\|_2^2+\frac{L\alpha^2\sigma^2}{2}.$ The last inequality uses $\mathbb E[\|G_k\|_2^2\mid\mathcal F_k]=\|g_k\|_2^2+\operatorname{Var}(G_k\mid\mathcal F_k)$; all products are integrable by step 1.1. [A1, F1, F2, F3, F4, F5, F6, step 1.1, given, algebra]

3.1 Since $\alpha\le1/L$, $1-L\alpha/2\ge1/2$. Take ordinary expectations in step 2.1 and sum for $k=0,\ldots,N-1$. The terms $f(x_k)$ telescope and $\mathbb E f(x_N)\ge f_{\inf}$, so $\frac{\alpha}{2}\sum_{k=0}^{N-1}\mathbb E\|g_k\|_2^2\le\Delta+\frac{NL\alpha^2\sigma^2}{2}.$ Dividing by $\alpha N/2$ gives $N^{-1}\sum_{k<N}\mathbb E\|g_k\|_2^2\le2\Delta/(\alpha N)+L\alpha\sigma^2$. [F5, step 2.1, given, algebra]

4.1 The independent uniform index has $\mathbb E\|\nabla f(x_R)\|_2^2=N^{-1}\sum_{k<N}\mathbb E\|g_k\|_2^2$, so step 3.1 proves the stated finite-$N$ estimate. If $\Delta,\sigma>0$ and the square-root choice is at most $1/L$, the two terms in the bound are equal and their sum is $2\sqrt{2L\Delta\sigma^2/N}$. If the choice is clipped at $1/L$, then $\sigma^2N\le2L\Delta$, and the bound is $2L\Delta/N+\sigma^2\le4L\Delta/N$. If $\sigma=0<\Delta$, choose $\alpha=1/L$ to get $2L\Delta/N$; if $\Delta=0$, choose $\alpha=1/(L(N+1))$ to get $\sigma^2/(N+1)$. Thus every zero case is covered and the asserted asymptotic order follows. [step 3.1, given, algebra] ∎
