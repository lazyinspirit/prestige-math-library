---
id: thm-spsa-gradient-bias-is-second-order
kind: theorem
title: "Symmetric simultaneous perturbations have second-order gradient bias"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-two-evaluation-spsa-gradient-estimator
  - thm-forward-and-central-difference-truncation-and-evaluation-error-bounds
  - thm-chain-rule-for-total-derivatives
  - def-euclidean-inner-product
  - thm-factorization-of-expectations-for-independent-variables
  - thm-taking-out-what-is-known
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-axiom-of-choice
  - def-conditional-expectation-as-an-ae-class
  - def-conditional-expectation-given-a-sigma-algebra
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - def-random-element-and-real-random-variable
  - thm-change-of-variables-for-expectation
provenance:
  statement: literature-derived
  proof: ai-altered
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "J. C. Spall, An Overview of the Simultaneous Perturbation Method for Efficient Optimization, pp. 484–491"
      url: "https://www.jhuapl.edu/spsa/PDF-SPSA/Spall_An_Overview.PDF"
    - title: "Michael C. Fu, Stochastic Gradient Estimation, preprint of Handbook of Simulation Optimization, §3.2"
      url: "https://drum.lib.umd.edu/bitstreams/87a3c71b-9eca-4d5d-9287-e1e432f68a69/download"
---

## Statement

Gradients are Euclidean column vectors, and vector expectations are taken coordinatewise.

Assume AC for the conditional-expectation interface. Let $\Theta\subseteq\mathbb R^d$ be open, $\theta\in\Theta$, and $f:\Theta\to\mathbb R$ be $C^3$. Let $\Delta_1,\ldots,\Delta_d$ be independent, symmetric about zero, and nonzero almost surely, with
$\mathbb E|\Delta_j|<\infty,\qquad \mathbb E|\Delta_i|^{-1}<\infty,\qquad q_i:=\mathbb E\!\left[\frac{\|\Delta\|_2^3}{|\Delta_i|}\right]<\infty.$
For each $0<c\le c_0$, assume $\{\theta+t\Delta:|t|\le c\}\subseteq\Theta$ almost surely and, for almost every realized $\Delta$, this segment lies in an open set $V_{c,\Delta}\subseteq\Theta$ on which $\|D^3 f(y)\|_{\mathrm{op}}\le M_3$, where the operator norm is the supremum of $|D^3f[u,v,w]|$ over unit vectors $u,v,w$.
Assume the two oracle outputs in [[alg-two-evaluation-spsa-gradient-estimator]] satisfy $\mathbb E[Y^\pm\mid\Delta]=f(\theta\pm c\Delta)$ and
$\mathbb E\!\left[\frac{|Y^+-f(\theta+c\Delta)|+|Y^--f(\theta-c\Delta)|}{|\Delta_i|}\right]<\infty$
for every $i$. Then
$\left|\mathbb E[\widehat G_i(\theta)]-\partial_i f(\theta)\right|\le \frac{M_3 c^2}{6}q_i,\qquad \left\|\mathbb E[\widehat G(\theta)]-\nabla f(\theta)\right\|_2\le\frac{M_3c^2}{6}\left(\sum_{i=1}^d q_i^2\right)^{1/2}.$

## Facts & Assumptions

**Given:** AC; the objective, parameter and smoothness hypotheses; the independent symmetric nonzero perturbation coordinates and moment bounds; and the conditional unbiasedness and weighted integrability of the two oracle outputs.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. AC is used for the conditional-expectation classes below.

[F1] [[alg-two-evaluation-spsa-gradient-estimator]]: $\widehat G_i=(Y^+-Y^-)/(2c\Delta_i)$, using the same two outputs for all coordinates.

[F2] [[thm-forward-and-central-difference-truncation-and-evaluation-error-bounds]]: if $g\in C^3$ on a neighborhood of $[-c,c]$ and $|g'''|\le M$, then $\left|(g(c)-g(-c))/(2c)-g'(0)\right|\le Mc^2/6$.

[F3] [[thm-chain-rule-for-total-derivatives]]: derivatives of a composition obey $D(g\circ f)=Dg(f)\circ Df$. Gradients are column vectors represented using the Euclidean inner product of [[def-euclidean-inner-product]], so $Df(\theta)[v]=\langle\nabla f(\theta),v\rangle$.

[F4] [[thm-factorization-of-expectations-for-independent-variables]]: expectations of products of independent integrable random variables factor; the nonnegative case also holds with extended expectations.

[F5] [[def-conditional-expectation-as-an-ae-class]]: under AC, conditional expectations exist as almost-sure classes.

[F6] [[thm-taking-out-what-is-known]]: an integrable measurable factor can be taken outside a conditional expectation when the products are integrable.

[F7] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation is linear on integrable real random variables.

[F8] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear and satisfies the tower property.

[F9] [[def-random-element-and-real-random-variable]] and [[thm-change-of-variables-for-expectation]]: expectation of an integrable function of a real random variable depends only on its law.

[F10] [[def-conditional-expectation-given-a-sigma-algebra]] and [[def-conditional-expectation-as-an-ae-class]]: an integrable $\sigma(\Delta)$-measurable variable is a version of its own conditional expectation, and the version class is unique almost surely.

## Proof

1.1 Fix a perturbation vector $\Delta$ for which the hypotheses hold and set $g(t)=f(\theta+t\Delta)$. By [F3], $g'(0)=\langle\nabla f(\theta),\Delta\rangle$ and $|g'''(t)|=|D^3f(\theta+t\Delta)[\Delta,\Delta,\Delta]|\le M_3\|\Delta\|_2^3$. Applying [F2] with step $c$ gives $\left|\frac{f(\theta+c\Delta)-f(\theta-c\Delta)}{2c}-\langle\nabla f(\theta),\Delta\rangle\right|\le\frac{M_3c^2}{6}\|\Delta\|_2^3.$ [given, F2, F3]

2.1 Write $\epsilon^\pm=Y^\pm-f(\theta\pm c\Delta)$. By [F1], $\widehat G_i=\sum_{j=1}^d\partial_j f(\theta)\frac{\Delta_j}{\Delta_i}+R_i+\frac{\epsilon^+-\epsilon^-}{2c\Delta_i},\qquad |R_i|\le\frac{M_3c^2}{6}\frac{\|\Delta\|_2^3}{|\Delta_i|},$ using step 1.1 and $\Delta_i\ne0$. [F1, step 1.1, algebra]

3.1 Since $f(\theta\pm c\Delta)$ is integrable and $\sigma(\Delta)$-measurable, [F10] makes it its own conditional expectation. Conditional linearity [F8] and the hypothesis therefore give $\mathbb E[\epsilon^\pm\mid\sigma(\Delta)]=0$. The weighted integrability assumption makes $\epsilon^\pm/\Delta_i$ integrable; [F6] takes the finite measurable factor $1/\Delta_i$ out of the conditional expectation, and the tower property [F8] gives $\mathbb E[\epsilon^\pm/\Delta_i]=0$. For $j=i$, $\Delta_j/\Delta_i=1$. For $j\ne i$, symmetry means $\Delta_j$ and $-\Delta_j$ have the same law, so [F9] gives $\mathbb E[\Delta_j]=\mathbb E[-\Delta_j]$; linearity [F7] then gives $\mathbb E[\Delta_j]=0$. Independence and the finite reciprocal moment give $\mathbb E[\Delta_j/\Delta_i]=\mathbb E[\Delta_j]\mathbb E[1/\Delta_i]=0$ by [F4]. Therefore the expectation of the linear sum in step 2.1 is $\partial_i f(\theta)$. [A1, F4, F5, F6, F7, F8, F9, F10, step 2.1, given]

4.1 Taking expectations of the remainder bound in step 2.1 yields $|\mathbb E[\widehat G_i]-\partial_i f(\theta)|\le\mathbb E|R_i|\le\frac{M_3c^2}{6}q_i.$ Squaring these coordinate bounds, summing over $i$, and taking square roots gives the stated vector bound. [step 2.1, step 3.1, given, algebra] ∎
