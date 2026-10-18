---
id: lem-finite-real-gaussian-increment-comparison
kind: lemma
title: Finite Gaussian increment comparison
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-standard-real-and-normalized-complex-gaussian-matrix-law, def-countable-choice, thm-differentiation-under-dominated-improper-multiple-integrals, thm-dominated-convergence, thm-integration-by-parts, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "S. Chevet, Séries de variables aléatoires gaussiennes..., §2"
      url: "https://www.numdam.org/item/SAF_1977-1978____A14_0.pdf"
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, Proposition A.2"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice for the finite-dimensional Gaussian probability law.
Let $N\ge1$ be an integer, and let $(X_i)_{i=1}^N$ and $(Y_i)_{i=1}^N$ be
finite centered real Gaussian families. If $\mathbb E(X_i-X_j)^2\le\mathbb E(Y_i-Y_j)^2$ for every
$i,j$, then $\mathbb E\max_iX_i\le\mathbb E\max_iY_i$.
Here a finite centered real Gaussian family means a finite real vector that
is a real-linear image of finitely many independent standard real Gaussian
scalars.

## Facts & Assumptions

**Given:** Countable Choice for the finite Gaussian law, and two finite centered Gaussian families satisfying the increment-variance inequalities.

[A1] All Gaussian vectors here are finite real linear images of independent standard Gaussian coordinate vectors. The source coordinates have the product densities in [[def-standard-real-and-normalized-complex-gaussian-matrix-law]]; the images may be singular and are integrated using these source coordinates.

[A2] Countable Choice supplies the Lebesgue measures used by these finite Gaussian integrals ([[def-countable-choice]]).

[F3] A parameter derivative may pass under an improper integral when it has a compact-parameter integrable uniform bound ([[thm-differentiation-under-dominated-improper-multiple-integrals]]).

[F4] Pointwise convergence under an integrable absolute majorant permits passing the limit through an integral ([[thm-dominated-convergence]]).

[F5] Integration by parts holds on a compact interval for continuously differentiable functions, whose derivatives are integrable ([[thm-integration-by-parts]]). The bounded continuous integrands there have equal Riemann and Lebesgue integrals under the stated Countable Choice ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[F6] Absolutely integrable product-space functions may be integrated coordinatewise ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

1.1 Take independent copies of $X,Y$, with covariance entries $(C_X)_{ij}=\mathbb E(X_iX_j)$ and $(C_Y)_{ij}=\mathbb E(Y_iY_j)$, and represent them as independent linear images of standard Gaussian coordinates using [A1]. For $0<t<1$ put $Z(t)=\sqrt tY+\sqrt{1-t}X$ and $F_\beta(z)=\beta^{-1}\log\sum_{i=1}^Ne^{\beta z_i}$ with $w_i=e^{\beta z_i}/\sum_je^{\beta z_j}$. The soft maximum has at most linear growth, so its Gaussian slice is integrable. On each compact subinterval of $(0,1)$, $|\partial_tF_\beta(Z(t))|\le\|\nabla F_\beta\|_2(\|Y\|_2/(2\sqrt t)+\|X\|_2/(2\sqrt{1-t}))$ has an integrable uniform bound, so [F3] passes the derivative under the finite Gaussian integral. For the coordinate integration by parts, fix all coordinates but $r=g_j$, and let $\varphi(r)=(2\pi)^{-1/2}e^{-r^2/2}$. The functions to which it is applied are first derivatives of $F_\beta$ composed with linear maps; they and their $r$ derivatives are smooth and bounded for fixed $\beta$. On $[-R,R]$, [F5] with $u=f$ and $v=\varphi$ gives $\int_{-R}^R r f(r)\varphi(r)\,dr=\int_{-R}^R f'(r)\varphi(r)\,dr-[f(r)\varphi(r)]_{-R}^R$. The boundary term tends to zero since $f$ is bounded and $\varphi(\pm R)\to0$. The integrands are dominated by constant multiples of $|r|\varphi(r)$ and $\varphi(r)$, respectively, so [F4] takes $R\to\infty$. Both majorants are integrable. Their bounds are uniform in the other coordinates, and [F6] integrates the resulting identity over those coordinates. Applying this coordinatewise to a linear image $W=L g$ gives $\mathbb E[W_i f(W)]=\sum_j\operatorname{Cov}(W_i,W_j)\mathbb E[\partial_jf(W)]$, including singular covariance matrices. Apply it separately to $X,Y$ in the derivative to obtain $\frac{d}{dt}\mathbb EF_\beta(Z(t))=\frac12\sum_{i,j}(C_Y-C_X)_{ij}\mathbb E[\partial_{ij}F_\beta(Z(t))]$. Since $\partial_{ij}F_\beta=\beta(w_i\mathbf1_{i=j}-w_iw_j)$, symmetry rewrites this as $\frac\beta4\mathbb E\sum_{i,j}w_iw_j(\mathbb E(Y_i-Y_j)^2-\mathbb E(X_i-X_j)^2)\ge0$ by the assumed increment order. [given, A1, A2, F3, F4, F5, F6, algebra]

2.1 Integrate the nonnegative derivative on $(0,1)$. As $t\downarrow0$ or $t\uparrow1$, $Z(t)$ converges pointwise to $X$ or $Y$ and $|F_\beta(Z(t))|$ is bounded by a constant plus $\|X\|_2+\|Y\|_2$, so [F4] gives endpoint continuity and $\mathbb EF_\beta(Y)\ge\mathbb EF_\beta(X)$. For every $z\in\mathbb R^N$, $\max_i z_i\le F_\beta(z)\le\max_i z_i+\log N/\beta$. Letting $\beta\to\infty$ proves the asserted expected-maximum comparison. [step 1.1, F4, algebra] ∎
