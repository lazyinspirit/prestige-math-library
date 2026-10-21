---
id: thm-robust-sample-lower-bound-gaussian-mixture
kind: theorem
title: Robust sample lower bound in the Gaussian model
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: adversarial-robustness-and-robust-risk
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-two-class-spherical-gaussian-mixture-model
  - def-multivariate-normal-law
  - def-independent-random-elements
  - lem-measurable-functions-preserve-independence
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - lem-characteristic-function-of-a-normal-law
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - thm-cramer-wold-device
  - def-adversarial-threat-set-and-robust-risk
  - lem-gaussian-normal-prior-posterior
  - lem-common-shift-robust-risk-lower-bound
  - lem-gaussian-vector-norm-concentration
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
axiom_use: "AC is inherited from the Gaussian model, Gaussian posterior, projection-law, characteristic-function uniqueness, Cramer–Wold and Gaussian concentration suppliers."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Ludwig Schmidt, Shibani Santurkar, Dimitris Tsipras, Kunal Talwar, and Aleksander Madry, Adversarially Robust Generalization Requires More Data, arXiv:1804.11285v2, Theorem 11, Corollary 23, Appendix A.2, PDF pp. 27–30"
      url: "https://arxiv.org/pdf/1804.11285v2"
    - title: "Muni Sreenivas Pydi, Adversarial Robustness in Machine Learning: An Optimal Transport Perspective, Chapter 2 §§2.2–2.3"
      url: "https://asset.library.wisc.edu/1711.dl/DSDFVG7WD5MMJ8R/R/file-7fb2d.pdf"
---

## Statement

Assume AC. Let $d\ge1$ be an integer, let $n\ge0$ be an integer, let $\sigma>0$ and $\epsilon\ge0$, draw $\Theta\sim N_d(0,I_d)$, and, conditional on $\Theta$, draw $n$ independent training pairs $S=((X_i,Y_i))_{i=1}^n$ from the two-class spherical Gaussian model with parameters $\Theta,\sigma$. Let $\mathcal S_n=(\mathbb R^d\times\{-1,+1\})^n$, and let $F:\mathcal S_n\times\mathbb R^d\to\{-1,+1\}$ be a Borel learning rule; write $f_S(x)=F(S,x)$. Define $m(S)=(\sigma^2+n)^{-1}\sum_{i=1}^nY_iX_i$, with the empty sum equal to zero. Define the expected robust risk as the outer expectation over $(\Theta,S)$ of $R^{\mathrm{rob}}_{P_{\Theta,\sigma},\Delta_\epsilon}(f_S)$, using the same measurable-majorant convention as robust risk; when this random robust risk is measurable, this is its ordinary expectation. Then
$$\mathbb E^*_{\Theta,S}\!\left[R^{\mathrm{rob}}_{P_{\Theta,\sigma},\Delta_\epsilon}(f_S)\right]\ge\frac12\,\mathbb P_{V\sim N_d(0,I_d)}\!\left(\sqrt{\frac{n}{\sigma^2+n}}\,\|V\|_\infty\le\epsilon\right).$$Consequently, if $d\ge2$ and $n\le\epsilon^2\sigma^2/(8\log d)$, then$$\mathbb E^*_{\Theta,S}\!\left[R^{\mathrm{rob}}_{P_{\Theta,\sigma},\Delta_\epsilon}(f_S)\right]\ge\frac12\left(1-\frac1d\right).$$

## Statement references

[Schmidt et al., Theorem 11 and Corollary 23, Appendix A.2, PDF pp. 27–30](https://arxiv.org/pdf/1804.11285v2).

[Pydi, Chapter 2 §§2.2–2.3, robust risk and outer-expectation convention](https://asset.library.wisc.edu/1711.dl/DSDFVG7WD5MMJ8R/R/file-7fb2d.pdf).

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[A1] Assume the Axiom of Choice, used by the Gaussian construction, posterior, normal characteristic-function uniqueness, Cramer–Wold and concentration suppliers. [[def-axiom-of-choice]].

[F1] In the Gaussian model, conditional on $\Theta=\theta$ and $Y_i=y$, the projection $\langle u,X_i\rangle$ is $N(y\langle u,\theta\rangle,\sigma^2\|u\|_2^2)$; scalar normal characteristic functions and affine maps identify $Y_iX_i\sim N_d(\theta,\sigma^2I_d)$, independently of the label. [[def-two-class-spherical-gaussian-mixture-model]], [[def-multivariate-normal-law]], [[lem-characteristic-function-of-a-normal-law]], [[lem-characteristic-functions-under-affine-maps-and-independent-sums]], [[thm-uniqueness-of-a-law-from-its-characteristic-function]], [[thm-cramer-wold-device]].

[F2] Given the class-weighted observations $Z_i=Y_iX_i$, the posterior is $N_d(m(S),vI_d)$ with $m(S)=(\sigma^2+n)^{-1}\sum_iZ_i$ and $v=\sigma^2/(\sigma^2+n)$; for $n=0$ it is the prior. [[lem-gaussian-normal-prior-posterior]].

[F3] Robust risk is the infimum of expectations of nonnegative measurable majorants of pointwise robust loss, and the $\ell_\infty$ threat admits every shift of norm at most $\epsilon$. [[def-adversarial-threat-set-and-robust-risk]].

[F4] If a nonnegative function dominates a measurable nonnegative function, its outer expectation is at least the ordinary expectation of the latter; this follows because every measurable majorant dominates it and the nonnegative integral is monotone. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]].

[F5] For product-measurable nonnegative functions, Tonelli's theorem gives measurable parameter integrals and permits exchange of the integration order. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

[F6] A uniform sign independent of a feature vector is misclassified with probability exactly $1/2$ by every Borel binary classifier; this is proved by splitting the two disjoint label-error events in the common-shift lemma. [[lem-common-shift-robust-risk-lower-bound]].

[F7] If $V\sim N_d(0,I_d)$ and $d\ge2$, then $\mathbb P(\|V\|_\infty\le2\sqrt{2\log d})\ge1-1/d$. [[lem-gaussian-vector-norm-concentration]].

[F8] The natural logarithm is increasing and $\log d>0$ for $d\ge2$. [[def-natural-logarithm]], [[thm-natural-logarithm-laws]].

[F9] Independent random elements remain independent after coordinatewise measurable maps are applied. [[def-independent-random-elements]], [[lem-measurable-functions-preserve-independence]].

## Proof

1.1 Fix $\theta$. For any $u\in\mathbb R^d$ and label $y$, the characteristic function of $\langle u,Y_iX_i\rangle$ conditional on $Y_i=y$ is $\exp(it\langle u,\theta\rangle-t^2\sigma^2\|u\|_2^2/2)$: multiplying the conditional normal projection by $y$ multiplies its mean by $y$ and its frequency by $y$, so $y^2=1$ in both terms. This law is independent of $y$; scalar uniqueness [F1] identifies each projection, and Cramer–Wold [F1] gives $Y_iX_i\sim N_d(\theta,\sigma^2I_d)$ independent of $Y_i$. Independence of the training pairs and measurable coordinate transformations preserve independence across $i$, so the class-weighted observations have the independent Gaussian likelihood and labels required by [F2]. [A1, F1, F9]

1.2 By [F2], for every realized sample $S$, the posterior mean is $m(S)$ and the posterior covariance is $vI_d$ where $v=\sigma^2/(\sigma^2+n)$. The formula also gives $m=0,v=1$ when $n=0$. The map $S\mapsto m(S)$ is Borel because it is a finite sum of coordinate products and division by the positive constant $\sigma^2+n$. [given, F2, algebra]

1.3 Fix $\theta,S$ with $\|m(S)\|_\infty\le\epsilon$. For a fresh test pair write $X=Y\theta+G$ with $Y$ uniform and $G\sim N_d(0,\sigma^2I_d)$ independent. The perturbation $\delta=-Ym(S)$ is admissible by [F3] and sends $X$ to $Y(\theta-m(S))+G$. Thus the pointwise robust loss is at least $\mathbf1\{F(S,Y(\theta-m(S))+G)\ne Y\}$. This indicator is measurable in the test pair, so every measurable majorant in [F3] has expectation at least its probability; therefore the fixed-parameter robust risk is at least that probability. [given, F3, algebra]

2.1 Define $H(S,\theta)$ to be zero when $\|m(S)\|_\infty>\epsilon$, and otherwise to be the probability in step 1.3. The classifier family and $m$ are Borel, so the shifted error indicator is product-measurable in $(S,\theta,Y,G)$; [F5] makes $H$ measurable. Step 1.3 gives $H(S,\theta)\le R^{\mathrm{rob}}_{P_{\theta,\sigma},\Delta_\epsilon}(f_S)$ pointwise. By [F4], taking the outer expectation over $(\Theta,S)$ yields a lower bound by $\mathbb E[H(\Theta,S)]$. [step 1.2, step 1.3, F4, F5]

3.1 Conditional on $S$, write $\Theta=m(S)+R$ with $R\sim N_d(0,vI_d)$ by [F2]. The fresh label $Y$ and noise $G$ are independent of $R$. For either sign $y$, $yR+G$ has law $N_d(0,(v+\sigma^2)I_d)$: each projection has the product characteristic function of independent centered scalar normals, and [F1] identifies the vector law. This conditional law is the same for both labels, so $U:=YR+G$ is independent of the uniform label. By [F6], $\mathbb P(F(S,U)\ne Y\mid S)=1/2$. Tonelli and the posterior identity [F2] now give $\mathbb E[H(\Theta,S)]=\frac12\mathbb P_S(\|m(S)\|_\infty\le\epsilon)$. [step 1.2, step 2.1, A1, F1, F2, F5, F6]

4.1 If $n\ge1$, conditional on $\Theta$, the sample mean $\bar Z=n^{-1}\sum_iY_iX_i$ has all projections $N(\langle u,\Theta\rangle,\sigma^2\|u\|_2^2/n)$ by the independent normal laws in step 1.1 and [F1]. Averaging the scalar characteristic function over $\Theta\sim N_d(0,I_d)$ shows each projection of $\bar Z$ is $N(0,(1+\sigma^2/n)\|u\|_2^2)$; [F1] then gives $\bar Z\sim N_d(0,(1+\sigma^2/n)I_d)$. Since $m=\frac{n}{\sigma^2+n}\bar Z$, its law is $N_d(0,\frac{n}{\sigma^2+n}I_d)$. For $n=0$, $m=0$ and the same event probability is one. Therefore $\mathbb P_S(\|m(S)\|_\infty\le\epsilon)=\mathbb P_{V\sim N_d(0,I_d)}(\sqrt{n/(\sigma^2+n)}\|V\|_\infty\le\epsilon)$. Combining this with step 3.1 proves the first inequality. [step 1.1, step 1.2, A1, F1, algebra]

5.1 Suppose $d\ge2$ and $n\le\epsilon^2\sigma^2/(8\log d)$. If $n=0$, the event in step 4.1 has probability one. If $n>0$, then $\sqrt{n/(\sigma^2+n)}\le\sqrt n/\sigma\le\epsilon/\sqrt{8\log d}$ by [F8] and the sample-size hypothesis. On the event $\|V\|_\infty\le2\sqrt{2\log d}$ from [F7], it follows that $\sqrt{n/(\sigma^2+n)}\|V\|_\infty\le\epsilon$. Thus the probability in step 4.1 is at least $1-1/d$, and the first inequality gives the second assertion. [step 4.1, F7, F8, algebra] ∎

## References

[[lem-gaussian-normal-prior-posterior]]: supplies the exact posterior mean and covariance, including the empty-sample case.

[[lem-common-shift-robust-risk-lower-bound]]: supplies the two-label averaging calculation after the common shift.

[[lem-gaussian-vector-norm-concentration]]: supplies the maximum-coordinate Gaussian event used in Corollary 23.
