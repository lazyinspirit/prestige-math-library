---
id: thm-robust-sample-upper-bound-gaussian-mixture
kind: theorem
title: Robust sample upper bound in the Gaussian model
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: adversarial-robustness-and-robust-risk
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-two-class-spherical-gaussian-mixture-model
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - lem-characteristic-function-of-a-normal-law
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - def-adversarial-threat-set-and-robust-risk
  - alg-gaussian-mixture-robust-mean-classifier
  - lem-gaussian-sample-mean-signal-alignment
  - lem-gaussian-vector-norm-concentration
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
justified_by: []
axiom_use: "AC is inherited from the Gaussian model, projection law, scalar uniqueness, alignment and concentration suppliers."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Ludwig Schmidt, Shibani Santurkar, Dimitris Tsipras, Kunal Talwar, and Aleksander Madry, Adversarially Robust Generalization Requires More Data, arXiv:1804.11285v2, Lemma 20, Theorem 21, Corollary 22, Appendix A.1, PDF pp. 25–26"
      url: "https://arxiv.org/pdf/1804.11285v2"
    - title: "Zico Kolter and Aleksander Madry, Adversarial Robustness: Theory and Practice, NeurIPS 2018 tutorial notes, Chapter 2"
      url: "https://adversarial-ml-tutorial.org/linear_models/"
---

## Statement

Assume AC. Let $d,n\ge1$ be integers, let $\theta\in\mathbb R^d$ satisfy $\|\theta\|_2=\sqrt d$, let $\sigma>0$, and draw independent training pairs $(X_i,Y_i)_{i=1}^n$ from the two-class spherical Gaussian model with parameters $\theta,\sigma$. Set $W=n^{-1}\sum_{i=1}^nY_iX_i$ and let $f_W(x)=+1$ when $\langle W,x\rangle\ge0$ and $f_W(x)=-1$ otherwise. For $0<\beta<1$, if
$$0\le\epsilon\le\frac{2\sqrt n-1}{2\sqrt n+4\sigma}-\frac{\sigma\sqrt{2\log(1/\beta)}}{\sqrt d},$$
then with probability at least $1-2\exp(-d/(8(\sigma^2+1)))$ over the training sample, the $\ell_\infty$ robust risk of $f_W$ under $P_{\theta,\sigma}$ at radius $\epsilon$ is at most $\beta$.

In particular, if $\sigma\le d^{1/4}/32$, then each of the following two conditions is sufficient for $\ell_\infty$ robust risk at most $1/100$ with the same training-sample probability:

- $0\le\epsilon\le(1/4)d^{-1/4}$ and $n\ge1$;
- $(1/4)d^{-1/4}\le\epsilon\le1/4$ and $n\ge64\epsilon^2\sqrt d$.

## Statement references

[Schmidt et al., Lemma 20, Theorem 21 and Corollary 22, Appendix A.1, PDF pp. 25–26](https://arxiv.org/pdf/1804.11285v2).

[Kolter–Madry, Chapter 2, linear models and dual-norm perturbation calculation](https://adversarial-ml-tutorial.org/linear_models/).

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[A1] Assume the Axiom of Choice, used by the Gaussian-law and concentration suppliers. [[def-axiom-of-choice]].

[F1] For the class-weighted Gaussian sample mean $W$, the direction $U=W/\|W\|_2$ (with any unit fallback at $W=0$) satisfies $\langle U,\theta\rangle\ge A_n\sqrt d$ with probability at least $1-2e^{-d/(8(\sigma^2+1))}$, where $A_n=(2\sqrt n-1)/(2\sqrt n+4\sigma)$. [[lem-gaussian-sample-mean-signal-alignment]].

[F2] For every unit vector $u$, conditional on $Y=y$, $\langle u,X\rangle\sim N(y\langle u,\theta\rangle,\sigma^2)$; scalar normal characteristic functions and affine transformations identify $Y\langle u,X\rangle\sim N(\langle u,\theta\rangle,\sigma^2)$. [[def-two-class-spherical-gaussian-mixture-model]], [[def-multivariate-normal-law]], [[lem-characteristic-function-of-a-normal-law]], [[lem-characteristic-functions-under-affine-maps-and-independent-sums]], [[thm-uniqueness-of-a-law-from-its-characteristic-function]].

[F3] For $G\sim N(0,\sigma^2)$ and $s\ge0$, $\mathbb P(G\le-s)\le e^{-s^2/(2\sigma^2)}$. [[lem-gaussian-vector-norm-concentration]].

[F4] Cauchy–Schwarz gives $\|u\|_1\le\sqrt d$ for $\|u\|_2=1$. [[thm-cauchy-schwarz-and-the-euclidean-norm]].

[F5] The $\ell_\infty$ robust loss is the indicator that some perturbation of $\ell_\infty$ norm at most $\epsilon$ changes the label, and robust risk is the infimum over measurable nonnegative majorants. [[def-adversarial-threat-set-and-robust-risk]].

[F6] The natural logarithm is increasing and obeys product and integer-power laws; $\log b-\log a=\int_a^b dx/x$ for $0<a\le b$. [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]].

[F7] For $s>0$, the scalar law $N(m,s^2)$ is the image of the standard normal density under $z\mapsto m+sz$. A singleton has a singleton preimage, whose density integral is zero; hence this law has no atoms. [[def-standard-normal-and-normal-laws]].

## Proof

1.1 Put $A_n=(2\sqrt n-1)/(2\sqrt n+4\sigma)$. Conditional on all training labels, the independent training pairs give independent scalar variables $Y_iX_{i1}\sim N(\theta_1,\sigma^2)$ by [F2]. The affine and independent-sum characteristic-function rules in [F2] therefore give $W_1\sim N(\theta_1,\sigma^2/n)$, a law independent of those labels. Since $\sigma^2/n>0$, [F7] implies $\mathbb P(W=0)\le\mathbb P(W_1=0)=0$. Removing this null event from the alignment event in [F1], with probability at least $1-2e^{-d/(8(\sigma^2+1))}$ the vector $U:=W/\|W\|_2$ is unit with $\langle U,\theta\rangle\ge A_n\sqrt d$. On this event $f_W=f_U$, since normalization is by a positive scalar. [given, A1, F1, F2, F7]

1.2 Fix any unit vector $u$ and write $c=\langle u,\theta\rangle$. Conditional on $Y=y$, [F2] gives the characteristic function $\exp(itc-\sigma^2t^2/2)$ for $M:=Y\langle u,X\rangle$, independent of $y$; hence the same law holds after averaging over $Y$. [given, F2]

1.3 For every perturbation $\delta$ with $\|\delta\|_\infty\le\epsilon$, $Y\langle u,X+\delta\rangle=M+Y\langle u,\delta\rangle\ge M-\epsilon\|u\|_1$. Thus if the robust loss is one then $M\le\epsilon\|u\|_1$, including the $+1$ tie convention. Consequently the pointwise robust loss is bounded above by the measurable indicator $\mathbf1_{\{M\le\epsilon\|u\|_1\}}$, which is an admissible majorant in [F5]. [given, F5, algebra]

1.4 For the final assertion put $D=d^{1/4}\ge1$ and $k=\sqrt{2\log100}$. By [F6], $\log100<\log256=8\log2<8$, so $k<4$. Under $\sigma\le D/32$, this implies $k\sigma/\sqrt d<1/(8D)$. The robust-radius threshold from the first assertion at $\beta=1/100$ is $A_n-k\sigma/\sqrt d$. [given, F6, algebra]

2.1 If $c\ge A_n\sqrt d$ and $\epsilon\le A_n-\sigma\sqrt{2\log(1/\beta)}/\sqrt d$, [F4] gives $c-\epsilon\|u\|_1\ge\sigma\sqrt{2\log(1/\beta)}\ge0$. By step 1.2, $M-c$ is centered normal with variance $\sigma^2$; [F3] and step 1.3 show the robust risk is at most $\exp(-(c-\epsilon\|u\|_1)^2/(2\sigma^2))\le\beta$. [step 1.2, step 1.3, F3, F4, F5, algebra]

2.2 If $0\le\epsilon\le1/(4D)$ and $n\ge1$, then $A_n\ge A_1=1/(2+4\sigma)\ge1/(2+D/8)$. Since $D\ge1$, $2+D/8\le17D/8$, so $A_n-k\sigma/\sqrt d>8/(17D)-1/(8D)=47/(136D)>1/(4D)\ge\epsilon$. [step 1.4, given, algebra]

2.3 If $1/(4D)\le\epsilon\le1/4$ and $n\ge64\epsilon^2D^2$, set $q=\epsilon D$. Then $q\ge1/4$, $q\le D/4$, and $2\sqrt n\ge16q$. The function $s\mapsto(s-1)/(s+4\sigma)$ is increasing for $s>0$, and it decreases as $\sigma$ increases when $s>1$. Hence $A_n\ge(16q-1)/(16q+D/8)\ge12q/((33/8)D)=32\epsilon/11$. As $1/(8D)\le\epsilon/2$, step 1.4 gives $A_n-k\sigma/\sqrt d> (32/11-1/2)\epsilon=53\epsilon/22\ge\epsilon$. [step 1.4, given, algebra]

3.1 On the event in step 1.1, use $u=U$ in step 2.1. This proves the first assertion with the probability stated there. [step 1.1, step 2.1]

4.1 Under either sample-size condition in step 2.2 or step 2.3, the first assertion applies with $\beta=1/100$. Its training-sample failure probability remains $2e^{-d/(8(\sigma^2+1))}$, proving the second assertion. [step 3.1, step 2.2, step 2.3] ∎

## References

[[lem-gaussian-sample-mean-signal-alignment]]: supplies the high-probability signal alignment of the learned direction.

[[lem-gaussian-vector-norm-concentration]]: supplies the one-sided Gaussian test-margin tail.

[[def-adversarial-threat-set-and-robust-risk]]: defines the closed $\ell_\infty$ threat and outer robust risk.
