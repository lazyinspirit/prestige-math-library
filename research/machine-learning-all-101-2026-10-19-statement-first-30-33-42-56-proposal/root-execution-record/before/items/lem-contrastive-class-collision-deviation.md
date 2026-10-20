---
id: lem-contrastive-class-collision-deviation
kind: lemma
title: "Class-collision loss is bounded by within-class covariance deviation"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-latent-class-contrastive-learning
  - def-moments-variance-and-covariance
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - lem-contrastive-hinge-and-logistic-loss-properties
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-independent-random-elements-have-product-joint-law
  - thm-jensen-inequality-for-expectation
  - thm-linearity-of-the-lebesgue-integral-on-l-one
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Nikunj Saunshi et al., A Theoretical Analysis of Contrastive Unsupervised Representation Learning, Equation (8), Equation (9), and Lemma 4.4"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf"
    - title: "Nikunj Saunshi et al., Contrastive Unsupervised Representation Learning, Supplementary Lemma A.1 and proof"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a-supp.pdf"
---

## Statement

In the one-negative latent-class model, for every bounded representation $f$ and either source loss, the population contrastive loss decomposes as

$$L_{\rm un}(f)=\tau L^=_{\rm un}(f)+(1-\tau)L^\ne_{\rm un}(f).$$

If $\tau>0$, the same-class conditional loss obeys

$$1\le L^=_{\rm un}(f)\le1+c_0s(f),\qquad c_0:=\sqrt2\,L_0,$$

where $L_0$ is the common Lipschitz constant of the hinge and logistic losses. If $\tau=0$, then $L_{\rm un}(f)=L^\ne_{\rm un}(f)$ and the model's convention is $s(f)=0$.

## Statement references

[[def-latent-class-contrastive-learning]]: defines $\tau$, the conditional collision/distinct losses, the covariance matrix, and $s(f)$.

[[lem-contrastive-hinge-and-logistic-loss-properties]]: both losses are convex, $L_0$-Lipschitz, and have value $1$ at zero.

[[def-moments-variance-and-covariance]] and [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: supply the covariance and operator-norm conventions.

[Saunshi et al., Equations (8)–(9) and Lemma 4.4](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf).

[Saunshi et al., Supplementary Lemma A.1 and complete proof](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a-supp.pdf).

## Facts & Assumptions

**Given:** The one-negative latent-class model, $f\in\mathcal F$, $\tau<1$, and $\ell\in\{\ell_{\rm h},\ell_{\rm log}\}$.

[F1] $L_{\rm un}$ is the risk under independent class draws; conditioning on equality gives $L^=_{\rm un}$ and conditioning on inequality gives $L^\ne_{\rm un}$. For $\tau>0$, $s(f)$ averages the within-class covariance deviation under the collision-conditioned class law $\nu$. [[def-latent-class-contrastive-learning]]

[F2] The source losses are convex, $L_0$-Lipschitz, and satisfy $\ell(0)=1$. [[lem-contrastive-hinge-and-logistic-loss-properties]]

[F3] For $Y=f(X)$ with $X\sim D_c$, $\Sigma_f(c)=\mathbb E[(Y-\mu_c)(Y-\mu_c)^\top]$ and $u^\top\Sigma_f(c)u=\mathbb E[(u^\top(Y-\mu_c))^2]\ge0$; its operator norm is the induced Euclidean norm. [[def-moments-variance-and-covariance]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]

[F4] Conditional on a collision class $c$, the positive and negative examples are independent with common law $D_c$, so their joint law is $D_c\otimes D_c$. [[thm-independent-random-elements-have-product-joint-law]]

[F5] Bounded measurable functions on probability product spaces are integrable, and iterated integrals agree with the product integral. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F6] The integral is linear on integrable functions. [[thm-linearity-of-the-lebesgue-integral-on-l-one]]

[F7] For vectors $u,v$, $|u^\top v|\le\lVert u\rVert_2\lVert v\rVert_2$. [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

[F8] For an integrable real random variable $Z$ with integrable square, $(\mathbb E|Z|)^2\le\mathbb E[|Z|^2]$. [[thm-jensen-inequality-for-expectation]]

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 Partition the independent class-pair law into the collision event, of probability $\tau$, and its complement, of probability $1-\tau$. The conditional loss on these two events is respectively $L^=_{\rm un}(f)$ and $L^\ne_{\rm un}(f)$, giving the displayed decomposition when $\tau>0$. If $\tau=0$, the collision event is null and $L_{\rm un}(f)=L^\ne_{\rm un}(f)$. [F1, given, algebra]

1.2 Suppose $\tau>0$. Fix a collision class $c$ and anchor $x$. Conditional on $x,c$, let $Y_+=f(X^+)$ and $Y_-=f(X^-)$ be independent copies with mean $\mu_c$. Then $\mathbb E[f(x)^\top(Y_--Y_+)]=0$ by [F4] and [F6]. Jensen's inequality [F2], [F8] gives $\mathbb E[\ell(f(x)^\top(Y_--Y_+))]\ge\ell(0)=1$. Averaging over $x\sim D_c$ and $c\sim\nu$ proves $L^=_{\rm un}(f)\ge1$. [F1, F2, F4, F6, F8, given]

1.3 With $Z_+:=f(X^+) -\mu_c$ and $Z_-:=f(X^-) -\mu_c$, the conditional vectors are independent, centered, and have covariance $\Sigma_f(c)$. For each matrix entry, Fubini and product-law independence factor the cross expectation as $\mathbb E[(Z_-)_{r}(Z_+)_{s}]=\mathbb E[(Z_-)_{r}]\mathbb E[(Z_+)_{s}]=0$, and likewise with $+$ and $-$ exchanged. Linearity therefore gives $\mathbb E[(Z_--Z_+)(Z_--Z_+)^\top]=2\Sigma_f(c)$. By [F3], $\Sigma_f(c)$ is positive semidefinite; by [F7] and the operator-norm definition, $f(x)^\top\Sigma_f(c)f(x)\le\lVert f(x)\rVert_2\lVert\Sigma_f(c)f(x)\rVert_2\le\lVert\Sigma_f(c)\rVert_{\rm op}\lVert f(x)\rVert_2^2$. Thus $$\mathbb E\bigl[(f(x)^\top(Y_--Y_+))^2\bigr]=2f(x)^\top\Sigma_f(c)f(x)\le2\lVert\Sigma_f(c)\rVert_{\rm op}\lVert f(x)\rVert_2^2.$$ [F3, F4, F5, F6, F7, given, algebra]

2.1 Apply [F8] to the bounded score in step 1.3 to get $\mathbb E|f(x)^\top(Y_--Y_+)|\le\sqrt2\sqrt{\lVert\Sigma_f(c)\rVert_{\rm op}}\lVert f(x)\rVert_2$. By [F2], $\mathbb E[\ell(f(x)^\top(Y_--Y_+))]-1\le L_0\mathbb E|f(x)^\top(Y_--Y_+)|$. Average over $x\sim D_c$ and $c\sim\nu$ to obtain $L^=_{\rm un}(f)-1\le\sqrt2L_0s(f)$. [F1, F2, F3, F8, step 1.3, given, algebra]

3.1 Steps 1.2 and 2.1 establish both bounds on $L^=_{\rm un}(f)$, while step 1.1 gives the unconditional decomposition and the zero-collision case. [step 1.1, step 1.2, step 2.1] ∎
