---
dependency_level: 4
id: lem-ula-uniform-exponential-moments-and-invariant-laws
kind: lemma
title: ULA invariant laws have uniform exponential moments on the needed step ranges
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - alg-unadjusted-langevin-algorithm
  - lem-langevin-gaussian-proposal-kernel
  - lem-ula-fixed-step-gaussian-kernel-exponential-drift
  - lem-ula-potential-coercivity-from-radial-drift
  - lem-weighted-drift-minorization-gives-contraction-and-invariant-law
  - thm-exponential-beats-every-polynomial
  - thm-fermat-for-euclidean-local-extrema
  - thm-chain-rule-for-total-derivatives
  - thm-newton-leibniz-with-interior-derivative
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-gaussian-integral
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
axiom_use: "AC is inherited through the Gaussian proposal and the Hahn/Jordan decomposition in the weighted drift-minorization theorem; the estimates and constants require no additional choices."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Durmus and Moulines, Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm, Proposition 8 and Theorem 10; local uniform-moment refinement"
      url: "https://arxiv.org/pdf/1507.05021v3"
---

## Statement

Assume AC and the hypotheses of
[[lem-ula-fixed-step-gaussian-kernel-exponential-drift]]. Let $R_\gamma$ be
the ULA kernel, $V=e^{U/2}$, $W=e^{U/4}$, and $\gamma_0=(2L)^{-1}$.
For every $0<\gamma<L^{-1}$ there is a unique invariant probability
$\pi_\gamma$, and $\pi_\gamma V<\infty$.
There are finite constants $M_V,M_W,M_g$, independent of $\gamma$, such that
$$\sup_{0<\gamma\le\gamma_0}\pi_\gamma V\le M_V,\qquad \sup_{0<\gamma<L^{-1}}\pi_\gamma W\le M_W,\qquad \|\nabla U(x)\|^2+\|x-x_\star\|^2\le M_gV(x).$$

## Facts & Assumptions

**Given:** AC, the stated potential and radial constants, and $0<\gamma<L^{-1}$.

[A1] AC is inherited through the Gaussian and weighted Hahn/Jordan interfaces. [[def-axiom-of-choice]]

[F1] The ULA kernel has a positive continuous Gaussian density, with proposal $x-\gamma\nabla U(x)+\sqrt{2\gamma}Z$. [[alg-unadjusted-langevin-algorithm]] [[lem-langevin-gaussian-proposal-kernel]]

[F2] The fixed-step Gaussian kernel satisfies $R_\gamma V\le e^{-\gamma}V+b_\gamma1_{D_\gamma}$ for a finite constant and a compact ball. [[lem-ula-fixed-step-gaussian-kernel-exponential-drift]]

[F3] Radial drift gives $U(x)\ge c\|x-x_\star\|^\alpha-C$ for some $c>0$; hence V-sublevel sets are contained in compact balls. [[lem-ula-potential-coercivity-from-radial-drift]]

[F4] Global geometric drift and minorization on a sufficiently large weight-sublevel set give invariant existence, a finite weight moment, and uniqueness among all invariant probabilities. [[lem-weighted-drift-minorization-gives-contraction-and-invariant-law]]

[F5] An exponential with positive exponent dominates every fixed nonnegative integer power at infinity. [[thm-exponential-beats-every-polynomial]]

[F6] Fermat gives a zero gradient at the minimizer. The chain rule and the fundamental theorem integrate the derivative along a segment, and Euclidean Cauchy–Schwarz bounds its inner products. [[thm-fermat-for-euclidean-local-extrema]] [[thm-chain-rule-for-total-derivatives]] [[thm-newton-leibniz-with-interior-derivative]] [[thm-cauchy-schwarz-and-the-euclidean-norm]]

[F7] Standard Gaussian density, the scalar Gaussian integral, change of variables, Lebesgue product identification and Tonelli evaluate nonnegative finite-dimensional Gaussian integrals. [[thm-nondegenerate-multivariate-normal-law-has-density]] [[thm-gaussian-integral]] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix $\gamma$. Dropping the indicator in [F2] gives a global drift $R_\gamma V\le e^{-\gamma}V+b_\gamma$ with finite $b_\gamma$. Each sufficiently large V-sublevel is contained in a compact ball by [F3]. On the product of that starting ball and any fixed positive-radius target ball, the continuous positive density [F1] has a positive minimum: explicitly its Gaussian exponent is bounded because both balls and the continuous gradient are bounded. Restriction to the target ball and normalization of its positive finite volume give a common minorization. These are precisely the drift and minorization hypotheses for the weight V. [A1, F1, F2, F3]

1.2 By [F6], $g(x_\star)=0$, and therefore Lipschitz continuity gives $\|g(x)\|\le L\|x-x_\star\|$. If $r=\|x-x_\star\|$ is positive and at least the radial radius, Cauchy–Schwarz and the radial hypothesis give $\|g(x)\|r\ge\langle g(x),x-x_\star\rangle\ge\rho r^\alpha$, so $\|g(x)\|\ge\rho r^{\alpha-1}$. For $h=y-x$, integrate the derivative along $x+th$ and subtract $\langle g(x),h\rangle$ to obtain $$U(y)-U(x)-\langle g(x),h\rangle=\int_0^1\langle g(x+th)-g(x),h\rangle dt\le\frac{L}{2}\|h\|^2.$$ [F6, given, algebra]

1.3 Completing the square, [F7] gives for $c<1/2$ and scalar v the identity $$(2\pi)^{-1/2}\int_{\mathbb R}e^{-(1/2-c)z^2+vz}dz=(1-2c)^{-1/2}e^{v^2/(2(1-2c))}.$$ Finite multiplication and Tonelli therefore give $\mathbb E e^{c\|Z\|^2+\langle v,Z\rangle}=(1-2c)^{-d/2}e^{\|v\|^2/(2(1-2c))}$ for $Z\sim N_d(0,I_d)$. [F7, algebra]

2.1 Apply [F4] to the fixed-step kernel and weight V verified in step 1.1. It supplies a unique invariant probability $\pi_\gamma$ with finite V moment. [F4, step 1.1]

2.2 Put $g=\nabla U(x)$ and $H_s=e^{sU}$ for $0<s<1$ with $2sL\gamma<1$. Apply step 1.2 to $Y=x-\gamma g+\sqrt{2\gamma}Z$, multiply by s, and exponentiate. Step 1.3, with quadratic coefficient $sL\gamma$ and linear coefficient $s\sqrt{2\gamma}(1-L\gamma)g$, gives $$\frac{R_\gamma H_s(x)}{H_s(x)}\le(1-2sL\gamma)^{-d/2}\exp\!\left(-\frac{s\gamma(1-s-L\gamma/2)}{1-2sL\gamma}\|g\|^2\right).$$ The coefficient follows by combining $s\gamma(-1+L\gamma/2)$ with $s^2\gamma(1-L\gamma)^2/(1-2sL\gamma)$ over the common denominator. All Gaussian integrals are finite under $2sL\gamma<1$. [F1, step 1.2, step 1.3, algebra]

3.1 For $s=1/2$, step 2.2 reduces to $$R_\gamma V\le V\exp\!\left(\tfrac d2[-\log(1-L\gamma)]-\tfrac\gamma4\|g\|^2\right).$$ If $\gamma\le\gamma_0$, then $-\log(1-L\gamma)\le2L\gamma$, since $-\log(1-z)=\int_0^z(1-u)^{-1}du\le2z$ for $z\le1/2$. Choose a radius R at least the radial radius and large enough that $\rho^2R^{2(\alpha-1)}/4\ge dL+1$. Outside this ball step 1.2 makes the exponent at most $-\gamma$. Inside it let $M=\sup_{\|x-x_\star\|\le R}V(x)<\infty$. Since $e^{a\gamma}-e^{-\gamma}=\int_{-\gamma}^{a\gamma}e^u du\le(a+1)\gamma e^{a\gamma_0}$ for $a=dL$, the preceding bound gives $$R_\gamma V\le e^{-\gamma}V+b\gamma,\qquad b=M(dL+1)e^{dL\gamma_0},$$ uniformly for small steps. Integrate against the finite-V invariant law from step 2.1 to obtain $\pi_\gamma V\le b\gamma/(1-e^{-\gamma})\le b e^{\gamma_0}$, using $1-e^{-\gamma}=\int_0^\gamma e^{-u}du\ge\gamma e^{-\gamma_0}$. This proves the first uniform bound. [step 2.1, step 1.2, step 2.2, algebra]

4.1 For $s=1/4$ and $0<\gamma<L^{-1}$, the logarithm of the prefactor in step 2.2 is at most $dL\gamma/2$, by the same integral estimate with $z=L\gamma/2<1/2$. Moreover $s(1-s-L\gamma/2)/(1-2sL\gamma)\ge1/16$, because the numerator is at least $1/16$ and the denominator is at most one. Choose R' at least the radial radius such that $\rho^2(R')^{2(\alpha-1)}/16\ge dL/2+1$. Outside this ball $R_\gamma W\le e^{-\gamma}W$; inside use $M'=\sup_{\|x-x_\star\|\le R'}W(x)$ and the exponential-difference estimate from step 3.1 with $a=dL/2$ and upper horizon $L^{-1}$. Thus $$R_\gamma W\le e^{-\gamma}W+b'\gamma,\qquad b'=M'(dL/2+1)e^{d/2},$$ for the whole step range. Since $W\le V$, its invariant moment is finite by step 2.1. Integrating and using $1-e^{-\gamma}\ge\gamma e^{-1/L}$ gives $\pi_\gamma W\le b'e^{1/L}$, uniformly for every allowed step. [step 2.1, step 1.2, step 2.2, step 3.1, algebra]

5.1 Put $r=\|x-x_\star\|$. For $r\ge1$, [F3] gives $V(x)\ge e^{-C/2}e^{cr^\alpha/2}\ge e^{-C/2}e^{cr/2}$ because $\alpha>1$. By [F5], $r^2/e^{cr/2}$ is bounded on $[1,\infty)$; on $[0,1]$ use $r^2\le1\le V$. Thus $r^2\le A V$ for some finite A. The Lipschitz bound in step 1.2 gives $\|\nabla U(x)\|^2\le L^2r^2$. Taking $M_g=(1+L^2)A$, $M_V=be^{\gamma_0}$ and $M_W=b'e^{1/L}$ proves all asserted estimates. All constants depend only on the fixed potential and its displayed parameters. [F3, F5, step 1.2, step 3.1, step 4.1, algebra] ∎
