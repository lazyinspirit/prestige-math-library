---
id: lem-logistic-and-exponential-losses-have-tight-exponential-tail
kind: lemma
title: "Logistic and exponential losses satisfy the tight-tail condition"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-tight-exponential-tail]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Daniel Soudry et al., The Implicit Bias of Gradient Descent on Separable Data, Definition 2 and §2"
      url: "https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf"
    - title: "Matus Telgarsky, Deep Learning Theory lecture notes, §10.2"
      url: "https://mjt.cs.illinois.edu/dlt/"
---

## Statement

For $\ell_{\exp}(u)=e^{-u}$ and $\ell_{\log}(u)=\log(1+e^{-u})$, the negative derivatives $-\ell_{\exp}'$ and $-\ell_{\log}'$ have tight exponential tails with $c=a=\mu_+=\mu_-=1$ and $u_+=u_-=1$ in the definition of a tight exponential tail.

## Statement references

[[def-tight-exponential-tail|Tight exponential-tail definition]]

[Daniel Soudry et al., *The Implicit Bias of Gradient Descent on Separable Data*, Definition 2 and §2](https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf)

[Matus Telgarsky, *Deep Learning Theory* lecture notes, §10.2](https://mjt.cs.illinois.edu/dlt/)

## Facts & Assumptions

**Given:** The loss functions $\ell_{\exp}(u)=e^{-u}$ and $\ell_{\log}(u)=\log(1+e^{-u})$.

[F1] [[def-tight-exponential-tail]]: it suffices to bound $f(u)$ above by $(1+e^{-u})e^{-u}$ and below by $(1-e^{-u})e^{-u}$ for every $u>1$.

## Proof

**Proof technique:** differentiate the two losses and compare their negative derivatives with the defining bounds.

1.1 The exponential loss has $-\ell_{\exp}'(u)=e^{-u}$. For $u>1$, $0<1-e^{-u}<1$, so $(1-e^{-u})e^{-u}\le e^{-u}\le(1+e^{-u})e^{-u}$, which is exactly the pair of bounds in [F1]. [given, F1, algebra]

2.1 The logistic loss has $-\ell_{\log}'(u)=e^{-u}/(1+e^{-u})$. For $r=e^{-u}\in(0,1)$, $1-r\le1/(1+r)\le1$ because $1-(1-r)(1+r)=r^2\ge0$ and $1\le1+r$. Multiplying by $r>0$ gives $(1-e^{-u})e^{-u}\le-\ell_{\log}'(u)\le e^{-u}\le(1+e^{-u})e^{-u}$ for $u>1$, as required by [F1]. [given, F1, algebra] ∎
