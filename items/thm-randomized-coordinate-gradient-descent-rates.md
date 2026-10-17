---
id: thm-randomized-coordinate-gradient-descent-rates
kind: theorem
title: "Rates for randomized coordinate gradient descent and importance sampling"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-randomized-coordinate-gradient-descent
  - lem-coordinate-block-smoothness-descent-model
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-differentiable-convex-functions-and-gradient-inequality
  - thm-fermat-for-euclidean-local-extrema
  - lem-finite-sum-laws
  - thm-induction-principle
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, Theorem 3.1 and proof"
      url: "https://arxiv.org/html/1502.04759v1"
    - title: "Clément Royer, Regularized, Large-Scale and Distributed Optimization, Theorem 3.2.1"
      url: "https://www.lamsade.dauphine.fr/~croyer/ensdocs/RLD/LectureNotesOML-RLD.pdf"
---

## Statement

Let $f:\mathbb R^d\to\mathbb R$ be convex and continuously differentiable, with a partition into $n\ge1$ nonempty blocks and block-gradient Lipschitz constants $L_i>0$ as in [[lem-coordinate-block-smoothness-descent-model]]. Let $M_i\ge L_i$, choose probabilities $p_i>0$ with $\sum_i p_i=1$, and set $\rho=\min_i p_i/M_i$. Assume $f^*=\min_x f(x)$ is attained at $x^*$ and the initial sublevel set has finite radius
$$R=\sup\{\|x-x^*\|_2:f(x)\le f(x^0)\}<+\infty.$$
Run [[alg-randomized-coordinate-gradient-descent]] from the initial point $x^0$ with exact updates, no stopping predicate, and finite budget $K\in\mathbb N$. For every integer $k$ with $1\le k\le K$,
$$\mathbb E[f(x^k)-f^*]\le\frac{2R^2}{\rho k}.$$
If, in addition, $f$ is globally $\mu$-strongly convex in the sense that
$$f(y)\ge f(x)+\langle\nabla f(x),y-x\rangle+\frac\mu2\|y-x\|_2^2\qquad(x,y\in\mathbb R^d)$$
for some $\mu>0$, then
$$\mathbb E[f(x^k)-f^*]\le(1-\mu\rho)^k(f(x^0)-f^*).$$
The strong-convexity factor is in $[0,1]$. Uniform sampling with $M_i=L_{\max}:=\max_i L_i$ gives the factor $1-\mu/(nL_{\max})$ and the bound $2nL_{\max}R^2/k$. For nonuniform sampling, choosing $M_i=L_i$ and $p_i=L_i/\sum_jL_j$ maximizes $\min_i p_i/M_i$, giving $\rho=1/\sum_iL_i$; its constants are not the uniform constants.

## Facts & Assumptions

**Given:** The objective, block partition, smoothness constants, sampling probabilities, and finite-history expectation in the Statement.

[F1] [[alg-randomized-coordinate-gradient-descent]]: at a selected block $i$, the update is $x_i^+=x_i-M_i^{-1}\nabla_i f(x)$ and the block draw has probability $p_i$.

[F2] [[lem-coordinate-block-smoothness-descent-model]]: $f(x+U_i h)\le f(x)+\langle\nabla_i f(x),h\rangle+(L_i/2)\|h\|_2^2$.

[F3] [[def-euclidean-inner-product]]: the product Euclidean norm satisfies $\|x\|_2^2=\sum_i\|x_{B_i}\|_2^2$.

[F4] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$.

[F5] [[thm-differentiable-convex-functions-and-gradient-inequality]]: convex differentiability gives $f(y)\ge f(x)+\langle\nabla f(x),y-x\rangle$.

[F6] [[thm-fermat-for-euclidean-local-extrema]]: an unconstrained differentiable local minimizer has zero gradient.

[F7] [[lem-finite-sum-laws]]: finite weighted sums preserve nonnegativity and obey the ordinary algebraic sum laws.

[F8] [[thm-induction-principle]]: a base case and successor implication prove a claim for every natural number.

[A1] $f$ is convex, continuously differentiable, and satisfies the block-gradient Lipschitz hypotheses stated above.

[A2] The initial sublevel radius $R$ is finite, the algorithm has no stopping predicate and $k\le K$, and every expectation at a fixed $k$ is the finite weighted sum over the $k$-step index histories, so no infinite product probability space is needed.

[A3] For the linear rate only, $f$ satisfies the displayed global $\mu$-strong-convexity inequality and has a minimizer.

## Proof

1.1 Fix $x$ and a block $i$. With $h=-\nabla_i f(x)/M_i$, [F2] gives $f(x+U_i h)\le f(x)-\frac{1}{M_i}\|\nabla_i f(x)\|_2^2+\frac{L_i}{2M_i^2}\|\nabla_i f(x)\|_2^2\le f(x)-\frac{1}{2M_i}\|\nabla_i f(x)\|_2^2$, because $M_i\ge L_i$. [A1, F1, F2, algebra]

1.2 Under [A3], strong convexity at $x$ and $x^*$ gives, for $e=x-x^*$, $f(x)-f^*\le\langle\nabla f(x),e\rangle-(\mu/2)\|e\|_2^2\le\|\nabla f(x)\|_2^2/(2\mu)$; the last inequality follows by expanding $0\le\|\nabla f(x)-\mu e\|_2^2$. Hence $\|\nabla f(x)\|_2^2\ge2\mu\delta(x)$. Also $\mu\le L_i\le M_i$ for each block, since the strong-convexity lower model and [F2]'s upper model applied to any nonzero displacement in block $i$ bound the same function difference. [A3, F2, algebra]

2.1 Conditional on the first $k$ draws, the next draw has probabilities $p_i$. By the finite-sum laws [F7], averaging step 1.1 over those finitely many outcomes yields $\mathbb E[f(x^{k+1})\mid x^k]\le f(x^k)-\frac12\sum_i\frac{p_i}{M_i}\|\nabla_i f(x^k)\|_2^2\le f(x^k)-\frac\rho2\|\nabla f(x^k)\|_2^2$. Taking the finite-history expectation gives the same inequality with all terms averaged. [A2, F1, F7, step 1.1, algebra]

3.1 Put $\delta(x)=f(x)-f^*$. If $R=0$, then $x^0=x^*$ because $x^0$ belongs to the initial sublevel set, and [F6] gives $\nabla f(x^*)=0$; all later updates leave $x^*$ fixed and all gaps vanish. Now suppose $R>0$. By [F5], $\delta(x)\le\langle\nabla f(x),x-x^*\rangle$. Since every exact step decreases $f$, each iterate lies in the initial sublevel set; thus [F4] and the definition of $R$ give $\delta(x^k)\le R\|\nabla f(x^k)\|_2$. For each finite $k$-step history $\omega$, write $w_\omega$ for its probability and $z_\omega=\|\nabla f(x^k_\omega)\|_2$; the weights are nonnegative and sum to $1$. With $\bar z=\sum_\omega w_\omega z_\omega$, [F7] gives $0\le\sum_\omega w_\omega(z_\omega-\bar z)^2=\sum_\omega w_\omega z_\omega^2-\bar z^2$. Hence $\mathbb E\|\nabla f(x^k)\|_2^2\ge(\mathbb E\|\nabla f(x^k)\|_2)^2\ge\phi_k^2/R^2$. Step 2.1 therefore implies $\phi_{k+1}\le\phi_k-\rho\phi_k^2/(2R^2)$. [A1, A2, F3, F4, F5, F7, F8, step 2.1, algebra]

4.1 If some $\phi_j=0$, then $f(x^j)=f^*$ for every history of positive probability, [F6] gives zero gradient at each such unconstrained minimizer, and all later gaps are zero. Otherwise all $\phi_j>0$, and $\phi_{j+1}\le\phi_j$ gives $\frac1{\phi_{j+1}}-\frac1{\phi_j}=\frac{\phi_j-\phi_{j+1}}{\phi_j\phi_{j+1}}\ge\frac{\phi_j-\phi_{j+1}}{\phi_j^2}\ge\frac\rho{2R^2}$. Summing for $j=0,\ldots,k-1$ telescopes by [F7] to $1/\phi_k\ge k\rho/(2R^2)$, which is the stated $O(1/k)$ bound. [F6, F7, step 3.1, algebra]

5.1 Substituting step 1.2 in step 2.1 gives $\mathbb E[\delta(x^{k+1})\mid x^k]\le(1-\mu\rho)\delta(x^k)$. Because $0<\mu\le M_i$ and $p_i\le1$, $0\le\mu\rho\le1$. Taking expectations and using induction [F8] proves the linear bound. For any probabilities, [F7] gives $1=\sum_i p_i\ge\rho\sum_iM_i$, so $\rho\le1/\sum_iM_i$; equality holds for $p_i=M_i/\sum_jM_j$. Since $M_i\ge L_i$, this is at most $1/\sum_iL_i$, attained by $M_i=L_i$ and $p_i=L_i/\sum_jL_j$. The uniform and importance-sampling specializations follow by substitution. [A2, A3, F7, F8, step 2.1, step 1.2, algebra] ∎

