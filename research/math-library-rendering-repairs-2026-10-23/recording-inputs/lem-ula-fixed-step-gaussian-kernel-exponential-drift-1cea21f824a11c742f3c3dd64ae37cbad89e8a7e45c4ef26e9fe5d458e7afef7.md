---
id: lem-ula-fixed-step-gaussian-kernel-exponential-drift
kind: lemma
title: ULA's Gaussian kernel satisfies an exponential drift bound
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-unadjusted-langevin-algorithm
  - cor-continuous-functions-are-borel-measurable
  - def-axiom-of-choice
  - def-countable-choice
  - def-euclidean-inner-product
  - def-jacobian-matrix-and-gradient
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-multivariate-normal-law
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - lem-langevin-gaussian-proposal-kernel
  - lem-ula-potential-coercivity-from-radial-drift
  - lem-real-line-exponential-tail-integrable
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-chain-rule-for-total-derivatives
  - thm-fermat-for-euclidean-local-extrema
  - thm-gaussian-integral
  - thm-newton-leibniz-with-interior-derivative
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
axiom_use: "AC is inherited through the Gaussian proposal law. The smoothness and drift estimates are deterministic; the Gaussian integral is evaluated from its density."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alain Durmus and Éric Moulines, Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm, Proposition 8 and proof §4.4"
      url: "https://arxiv.org/pdf/1507.05021v3"
      locator: "Proposition 8 and proof in §4.4; the local argument below directly evaluates the Gaussian exponential moment and uses its own explicit constants."
---

## Statement

Assume AC. Let $d\ge1$, $U\in C^2(\mathbb R^d)$, and suppose $\nabla U$ is
$L$-Lipschitz for $L>0$. Let $x_\star$ be a global minimizer with
$U(x_\star)=0$. Suppose that for $\rho>0$, $\alpha\in(1,2]$, and
$M_\rho\ge0$,
$$\langle\nabla U(x),x-x_\star\rangle\ge\rho\|x-x_\star\|^\alpha \quad\text{if }\|x-x_\star\|\ge M_\rho.$$
For $0<\gamma<L^{-1}$, define
$$K_\gamma:=\max\left\{M_\rho, \left(\frac{2d[-\log(1-L\gamma)]/\gamma+4}{\rho^2}\right)^{1/(2(\alpha-1))}\right\}, \qquad V(x):=e^{U(x)/2},$$
and let $P_\gamma$ be the ULA proposal kernel. Then
$$P_\gamma V(x):=\int V(y)P_\gamma(x,dy) \le e^{-\gamma}V(x) +e^{LK_\gamma^2/4}(1-L\gamma)^{-d/2} \mathbf1_{\{\|x-x_\star\|\le K_\gamma\}}.$$

## Facts & Assumptions

**Given:** AC; $d,L,U,x_\star,\rho,\alpha,M_\rho,\gamma$ as in the Statement; and the ULA update.

[A1] $U$ is twice continuously differentiable, has $L$-Lipschitz gradient, has the stated global minimizer and radial drift, and is normalized by $U(x_\star)=0$. [[def-jacobian-matrix-and-gradient]]

[F1] At a differentiable local minimum in Euclidean space, the gradient is zero. [[thm-fermat-for-euclidean-local-extrema]]

[F2] The derivative of a composition with a differentiable path is given by the total-derivative chain rule, and a continuous derivative integrates to its endpoint difference. [[thm-chain-rule-for-total-derivatives]] [[thm-newton-leibniz-with-interior-derivative]]

[F3] $|\langle u,v\rangle|\le\|u\|\,\|v\|$. [[def-euclidean-inner-product]] [[thm-cauchy-schwarz-and-the-euclidean-norm]]

[F4] The standard $d$-dimensional normal has density $(2\pi)^{-d/2}e^{-\|z\|^2/2}$, and the ULA proposal has the displayed Gaussian density. [[def-axiom-of-choice]] [[def-multivariate-normal-law]] [[thm-nondegenerate-multivariate-normal-law-has-density]] [[lem-langevin-gaussian-proposal-kernel]] [[alg-unadjusted-langevin-algorithm]] [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[F5] The Borel function $V=e^{U/2}$ is measurable under countable choice; AC implies countable choice. [[cor-continuous-functions-are-borel-measurable]] [[lem-ac-supplies-sequential-choices-for-probability-constructions]] [[def-countable-choice]]

[F6] A nonnegative integral is unchanged by the stated $C^1$ change of variables, and $\int_{\mathbb R}e^{-z^2}\,dz=\sqrt\pi$. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] [[thm-gaussian-integral]]

[F7] Finite-dimensional Lebesgue measure is the finite product of one-dimensional Lebesgue measures on Borel sets, and Tonelli factors nonnegative product-measurable integrals. [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets|Finite-dimensional Lebesgue measure agrees with the product measure on Borel sets]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F8] Under [A1], $U(x)\ge c\|x-x_\star\|^\alpha-a_\alpha$, where $c=\rho/(\alpha+1)>0$ and $a_\alpha$ is finite. [[lem-ula-potential-coercivity-from-radial-drift]]

[F9] Under countable choice, $\int_{\mathbb R}e^{-|z|}\,dz<\infty$. [[lem-real-line-exponential-tail-integrable]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F1], $\nabla U(x_\star)=0$. For $h=y-x$, apply [F2] to $t\mapsto U(x+th)$ and subtract $\langle\nabla U(x),h\rangle$ from the endpoint difference. The remaining integral is $$\int_0^1\langle\nabla U(x+th)-\nabla U(x),h\rangle\,dt \le\int_0^1 Lt\|h\|^2\,dt=\frac{L}{2}\|h\|^2,$$ by [A1] and [F3]. Thus $U(y)\le U(x)+\langle\nabla U(x),y-x\rangle+L\|y-x\|^2/2$ for all $x,y$. [A1, F1, F2, F3]

1.2 Put $r=\|x-x_\star\|$. If $r\ge M_\rho$ and $r>0$, the radial condition and [F3] give $$\rho r^\alpha\le\langle\nabla U(x),x-x_\star\rangle \le\|\nabla U(x)\|r,$$ so $\|\nabla U(x)\|\ge\rho r^{\alpha-1}$. [A1, F3, algebra]

1.3 For $c<1/2$ and $\beta\in\mathbb R$, completing the square and applying [F6] gives $$\frac1{\sqrt{2\pi}}\int_{\mathbb R}e^{-(1/2-c)z^2+\beta z}\,dz =(1-2c)^{-1/2}e^{\beta^2/(2(1-2c))}.$$ For $b\in\mathbb R^d$, apply this with $\beta=b_i$ for each $i<d$. The product density in [F4], Lebesgue product identification, and Tonelli's theorem [F7] therefore give, for $Z\sim N_d(0,I_d)$, $$\mathbb E e^{c\|Z\|^2+\langle b,Z\rangle} =(1-2c)^{-d/2}\exp\!\left(\frac{\|b\|^2}{2(1-2c)}\right).$$ [F4, F6, F7]

1.4 Verify the target normalizer before using the proposal-kernel conclusion of [F4]. Put $r=\|x-x_\star\|$, $c=\rho/(\alpha+1)$, and $k=c/\sqrt d>0$. Since $r^\alpha\ge r-1$ for $r\ge0$ and $\sum_{i<d}|x_i-x_{\star,i}|\le\sqrt d\,r$ by [F3], [F8] gives
$$e^{-U(x)}\le e^{a_\alpha+c}e^{-cr}\le e^{a_\alpha+c}\prod_{i<d} e^{-k|x_i-x_{\star,i}|}.$$
Translation and scaling [F6], followed by [F7] and [F9], show that the right-hand side has finite integral. Step 1.1 also gives $U(x)\le Lr^2/2$, so [F6]–[F7] imply
$$\int_{\mathbb R^d}e^{-U(x)}\,dx\ge\int_{\mathbb R^d}e^{-L\|x-x_\star\|^2/2}\,dx=(2\pi/L)^{d/2}>0.$$
Continuity supplies Borel measurability as in [F5]. Thus all target hypotheses of the ULA algorithm and its proposal-kernel lemma hold. [A1, F3, F5, F6, F7, F8, F9, step 1.1, algebra]

2.1 Write $g=\nabla U(x)$ and $Y=x-\gamma g+\sqrt{2\gamma}Z$, the ULA update. Step 1.1 and [F4] imply $$\frac{\mathbb E V(Y)}{V(x)}\le \mathbb E\exp\!\left(\frac12\langle g,-\gamma g+\sqrt{2\gamma}Z\rangle +\frac{L}{4}\|-\gamma g+\sqrt{2\gamma}Z\|^2\right).$$ In step 1.3 take $c=L\gamma/2$ and $b=\sqrt{2\gamma}(1-L\gamma)g/2$. Since $1-2c=1-L\gamma>0$, expanding the exponent and collecting its $\|g\|^2$ terms gives $$P_\gamma V(x)\le V(x)(1-L\gamma)^{-d/2} \exp\!\left(-\frac{\gamma\|g\|^2}{4}\right).$$ [A1, F4, F5, step 1.1, step 1.3, step 1.4, algebra]

3.1 If $r\ge K_\gamma$, then step 1.2 and the definition of $K_\gamma$ give $$\frac d2[-\log(1-L\gamma)]-\frac{\gamma\|g\|^2}{4} \le\frac d2[-\log(1-L\gamma)]- \frac{\gamma\rho^2K_\gamma^{2(\alpha-1)}}4\le-\gamma.$$ Step 2.1 therefore yields $P_\gamma V(x)\le e^{-\gamma}V(x)$ on this region. [A1, step 1.2, step 2.1, algebra]

4.1 If $r\le K_\gamma$, use step 1.1 with starting point $x_\star$ and [F1] to obtain $U(x)\le Lr^2/2$, so $V(x)\le e^{LK_\gamma^2/4}$. Bounding the exponential factor in step 2.1 by one gives $$P_\gamma V(x)\le e^{LK_\gamma^2/4}(1-L\gamma)^{-d/2}.$$ Together with step 3.1, this proves the asserted drift inequality on both regions. [A1, F1, step 1.1, step 2.1, step 3.1, algebra] ∎
