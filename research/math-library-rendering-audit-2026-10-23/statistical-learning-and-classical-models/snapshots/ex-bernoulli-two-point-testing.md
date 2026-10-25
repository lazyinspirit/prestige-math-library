---
id: ex-bernoulli-two-point-testing
kind: example
title: "One-sample Bernoulli two-point testing"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - lem-bernoulli-two-point-testing-for-vc-lower-bound
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 3 §3.4"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, 2014, Chapter 28 §28.2.1"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Example

Take $u=1/2$ and one observation, so $P_-=\operatorname{Bern}(1/4)$ and $P_+=\operatorname{Bern}(3/4)$. The deterministic test $\psi(y)=y$ has equal-prior error $1/4$, and this error is minimal among all randomized tests.

## Example references

[Mohri et al., Foundations of Machine Learning, 2nd ed., Lemma 3.21](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1)

[Shalev-Shwartz and Ben-David, Understanding Machine Learning, §28.2.1](https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf)

## Facts & Assumptions

**Given:** The two laws $P_-$ and $P_+$ on $\{0,1\}$, equal prior probabilities, and the test convention that $\psi(y)$ is the probability of deciding $+$.

[F1] The equal-prior average error $e_k(\psi)$ is the half-sum of the two conditional error probabilities [[lem-bernoulli-two-point-testing-for-vc-lower-bound]].

## Verification

1.1 Here $P_-(0)=3/4$, $P_-(1)=1/4$, $P_+(0)=1/4$, and $P_+(1)=3/4$. The test $\psi(y)=y$ has error $\frac12(P_-(1)+P_+(0))=\frac14$. [given, algebra]

2.1 For any randomized test $\psi$, direct expansion gives $e_1(\psi)=\frac12+\frac14(\psi(0)-\psi(1))\ge\frac14$, since $\psi(0)\ge0$ and $\psi(1)\le1$. The deterministic test attains this lower bound. [given, F1, algebra] ∎
