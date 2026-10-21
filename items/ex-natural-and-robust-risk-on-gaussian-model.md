---
id: ex-natural-and-robust-risk-on-gaussian-model
kind: example
title: Natural and robust risk in the Gaussian model
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: adversarial-robustness-and-robust-risk-examples
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-two-class-spherical-gaussian-mixture-model
  - def-adversarial-threat-set-and-robust-risk
  - cor-one-sample-natural-classification-error-gaussian-mixture
  - thm-robust-sample-lower-bound-gaussian-mixture
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
justified_by: []
axiom_use: "AC is inherited from the Gaussian natural-risk and robust-risk suppliers."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Ludwig Schmidt, Shibani Santurkar, Dimitris Tsipras, Kunal Talwar, and Aleksander Madry, Corollary 19, Corollary 23, arXiv:1804.11285v2, PDF pp. 24–25, 30"
      url: "https://arxiv.org/pdf/1804.11285v2"
---

## Example

Assume AC and set $d=10^{14}$, $\sigma=d^{1/4}/32$, $\beta=1/100$, and $\epsilon=1/4$. In the fixed-parameter experiment with $\|\theta\|_2=\sqrt d$, one class-weighted training sample yields natural test error at most $1/100$ with probability at least $1-2e^{-d/(8(\sigma^2+1))}$. In the distinct Gaussian-prior experiment $\Theta\sim N_d(0,I_d)$, at the same $n=1$ and $\epsilon$, every Borel learning rule $F:(\mathbb R^d\times\{-1,+1\})^n\times\mathbb R^d\to\{-1,+1\}$ has expected robust risk at least $(1-1/d)/2$. The first assertion fixes a normalized parameter; the second averages over the stated Gaussian prior. Expected robust risk in the prior experiment uses outer expectation over the parameter and training sample.

## Example references

[Schmidt et al., Corollary 19, Appendix A.1, PDF pp. 24–25](https://arxiv.org/pdf/1804.11285v2).

[Schmidt et al., Corollary 23, Appendix A.2, PDF p. 30](https://arxiv.org/pdf/1804.11285v2).

## Facts & Assumptions

**Given:** The Example's parameters and the two separate Gaussian experiments in its Statement.

[A1] Assume AC as required by the Gaussian model and both risk bounds. [[def-axiom-of-choice]].

[F1] For $0<\beta<1$, if $\sigma\le d^{1/4}/(5\sqrt{\log(1/\beta)})$, then the one-sample class-weighted classifier has natural test error at most $\beta$ with probability at least $1-2e^{-d/(8(\sigma^2+1))}$. [[cor-one-sample-natural-classification-error-gaussian-mixture]].

[F2] If $d\ge2$ and $n\le\epsilon^2\sigma^2/(8\log d)$, every Borel learning rule under prior $\Theta\sim N_d(0,I_d)$ has expected robust risk at least $(1-1/d)/2$. [[thm-robust-sample-lower-bound-gaussian-mixture]].

[F3] The natural logarithm is increasing, obeys $\log(2^k)=k\log2$, and satisfies $\log b-\log a=\int_a^b dx/x$ for $0<a\le b$. [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]].

## Proof

1.1 Since $100<256=2^8$ and $\log2=\int_1^2dx/x<1$, [F3] gives $\log100<8$. Hence $5\sqrt{\log100}<5\sqrt8<32$, so $\sigma=d^{1/4}/32\le d^{1/4}/(5\sqrt{\log100})$. Apply [F1] with $\beta=1/100$ to get the fixed-parameter natural-risk assertion. [given, A1, F1, F3, algebra]

2.1 We have $2^{10}=1024>10^3$, hence $2^{47}=2^7(2^{10})^4>128\cdot10^{12}>10^{14}=d$. Since $\log2<1$, [F3] gives $\log d<\log(2^{47})=47\log2<47$. Therefore $\frac{\epsilon^2\sigma^2}{8\log d}=\frac{\sqrt d}{131072\log d}>\frac{10^7}{131072\cdot47}>1=n$, where $131072\cdot47=6{,}160{,}384<10{,}000{,}000$. Since $d\ge2$, [F2] applies and proves the Gaussian-prior robust-risk lower bound. [given, A1, F2, F3, algebra] ∎

## References

[[cor-one-sample-natural-classification-error-gaussian-mixture]]: supplies the fixed-parameter one-sample natural-error guarantee.

[[thm-robust-sample-lower-bound-gaussian-mixture]]: supplies the Gaussian-prior robust-risk lower bound.
