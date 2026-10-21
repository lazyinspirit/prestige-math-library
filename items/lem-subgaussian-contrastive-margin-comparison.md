---
id: lem-subgaussian-contrastive-margin-comparison
kind: lemma
title: "Class-conditional sub-Gaussian concentration yields a contrastive margin bound"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - cor-markov-inequality-for-random-variables
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-latent-class-contrastive-learning
  - def-natural-logarithm
  - def-probability-measure
  - def-real-exponential-function-and-e
  - def-subgaussian-variable-and-vector
  - lem-contrastive-hinge-and-logistic-loss-properties
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-independent-random-elements-have-product-joint-law
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Nikunj Saunshi et al., A Theoretical Analysis of Contrastive Unsupervised Representation Learning, Lemma 5.1 and Supplementary Appendix A.2"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf"
    - title: "Nikunj Saunshi et al., Supplementary Appendix A.2, complete proof of Lemma 5.1"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a-supp.pdf"
---

## Statement

In the one-negative latent-class model, fix a bounded representation $f$ with $\sup_x\|f(x)\|_2\le R$, where $R>0$. Use the hinge loss $\ell_{\rm h}(t)=(1+t)_+$. Suppose that for every class $c$, the centered vector $f(X)-\mu_c$, for $X\sim D_c$, is sub-Gaussian in every direction with proxy $\sigma^2\ge0$. For $0<\epsilon\le1$, define

$$\gamma:=\begin{cases}1+2R\sigma\sqrt{2\ln R+\ln(3/\epsilon)},&R\ge1,\\1+2R\sigma\sqrt{\ln(3/\epsilon)},&0<R<1.\end{cases}$$

Then the contrastive risk conditioned on distinct positive and negative classes satisfies

$$L^\ne_{\rm un}(f)\le\gamma L^\mu_{\gamma,\rm sup}(f)+\epsilon.$$

This comparison is for the hinge contrastive loss and its scaled hinge mean-classifier risk.

## Statement references

[[def-latent-class-contrastive-learning]]: defines the one-negative score, class-conditional means, distinct-class contrastive risk and scaled hinge mean-classifier risk.

[[def-subgaussian-variable-and-vector]]: defines the centered vector sub-Gaussian proxy condition used for every class.

[[lem-contrastive-hinge-and-logistic-loss-properties]]: defines the hinge contrastive loss.

[Saunshi et al., Lemma 5.1, main paper §5.2](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf).

[Saunshi et al., complete proof of Lemma 5.1, Supplementary Appendix A.2](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a-supp.pdf).

## Facts & Assumptions

**Given:** The one-negative latent-class model, a representation $f$ bounded by $R>0$, the classwise centered sub-Gaussian hypothesis, $0<\epsilon\le1$, and the value of $\gamma$ in the Statement.

[F1] Given classes $c_+,c_-$ and an anchor $x$, the examples $X^+\sim D_{c_+}$ and $X^-\sim D_{c_-}$ are independent; the contrastive score is $q=f(x)^\top(f(X^-)-f(X^+))$. [[def-latent-class-contrastive-learning]], [[thm-independent-random-elements-have-product-joint-law]]

[F2] For each class $c$, $f(X)-\mu_c$ is centered and satisfies $\mathbb E e^{\langle u,f(X)-\mu_c\rangle}\le e^{\sigma^2\|u\|_2^2/2}$ for every $u\in\mathbb R^d$. [[def-subgaussian-variable-and-vector]]

[F3] The underlying laws are countably additive probability measures; integrable coordinates have expectations given by integration, the integral is linear, and bounded integrands on probability product spaces satisfy Fubini. [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[def-probability-measure]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F4] If $W\ge0$ and $a>0$, then $\Pr(W\ge a)\le\mathbb E[W]/a$. [[cor-markov-inequality-for-random-variables]]

[F5] The natural logarithm is inverse to the real exponential, is increasing, and satisfies $\ln(ab)=\ln a+\ln b$ for positive $a,b$. [[def-natural-logarithm]], [[def-real-exponential-function-and-e]], [[thm-natural-logarithm-laws]]

[F6] For vectors $u,v$, $|u^\top v|\le\|u\|_2\|v\|_2$. [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

[F7] The ordered law of $(C_+,C_-)$ conditioned on $C_+\ne C_-$ is invariant under swapping its coordinates. [[def-latent-class-contrastive-learning]], [[thm-independent-random-elements-have-product-joint-law]]

[F8] For the hinge mean-classifier risk, the positive-label loss at $(c_+,c_-,x)$ is $(1+f(x)^\top(\mu_{c_-}-\mu_{c_+})/\gamma)_+$; the task label is uniform. [[def-latent-class-contrastive-learning]]

## Proof

**Given:** The hypotheses in the Statement and Facts & Assumptions.

1.1 Fix distinct classes $c_+,c_-$ and an anchor $x$. Put $u=f(x)$ and write the score as $q=m+Z$, where $m=u^\top(\mu_{c_-}-\mu_{c_+})$ and $Z=u^\top(f(X^-)-\mu_{c_-})-u^\top(f(X^+)-\mu_{c_+})$. By [F1]–[F3], independence factors the moment generating function of the two centered terms, so for every $\lambda\in\mathbb R$, $\mathbb E e^{\lambda Z}\le e^{\lambda^2\sigma^2\|u\|_2^2}\le e^{\lambda^2v/2}$ with $v:=2R^2\sigma^2$. Also $|q|\le2R^2$ by [F6] and the representation bound. [F1, F2, F3, F6, given]

2.1 Put $t=\gamma-1$. If $\sigma>0$, then $t>0$. Applying [F4] to $e^{\lambda Z}$ with $\lambda=t/v>0$ and using step 1.1 gives $p:=\Pr(Z\ge t)\le e^{-t^2/(2v)}=e^{-t^2/(4R^2\sigma^2)}\le\epsilon/(3R^2)$ for $R\ge1$, and $p\le\epsilon/3$ for $0<R<1$. If $\sigma=0$, then $v=0$ and step 1.1 gives $\mathbb E e^{\lambda Z}\le1$ for every $\lambda>0$. For any $a>0$ and $0<r<1$, [F4] with $\lambda=\ln(1/r)/a$ gives $\Pr(Z\ge a)\le r$, so $\Pr(Z\ge a)=0$. Since $\{Z>0\}=\bigcup_{n\ge1}\{Z\ge1/n\}$, countable subadditivity [F3] gives $\Pr(Z>0)=0$. Thus $Z\le0$ almost surely and the margin estimate below holds with no tail error when $t=0$. [F3, F4, F5, step 1.1, given]

3.1 Suppose first that $\sigma>0$. On $\{Z<t\}$, monotonicity of the positive-part function gives $(1+m+Z)_+\le(\gamma+m)_+$. On $\{Z\ge t\}$, the score bound in step 1.1 gives $(1+m+Z)_+=(1+q)_+\le1+2R^2$. Therefore $\mathbb E_Z(1+m+Z)_+\le(\gamma+m)_++p(1+2R^2)\le(\gamma+m)_++\epsilon$, because $1+2R^2\le3R^2$ for $R\ge1$ and $1+2R^2\le3$ for $R<1$. When $\sigma=0$, step 2.1 gives $Z\le0=t$ almost surely, so $(1+m+Z)_+\le(1+m)_+=(\gamma+m)_+$ and the same inequality follows. Since $\gamma\ge1$, $(\gamma+m)_+=\gamma(1+m/\gamma)_+$. [F6, step 1.1, step 2.1, given, algebra]

4.1 Integrate the conditional inequality in step 3.1 over $x\sim D_{c_+}$ and the ordered class-pair law conditioned on inequality. Its leading term is $\gamma$ times the positive-label mean-classifier hinge risk. Swapping the two classes preserves the ordered distinct-pair law by [F7] and changes the positive-label margin into the negative-label margin; hence the positive-label risk equals the uniform-label mean-classifier risk $L^\mu_{\gamma,\rm sup}(f)$. The integrated error remains at most $\epsilon$. This yields the Statement. [F7, F8, step 3.1, given, algebra] ∎
