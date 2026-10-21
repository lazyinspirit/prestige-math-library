---
id: lem-paired-crossentropy-mixture-bound
kind: lemma
title: "Close paired predictions incur mixture entropy"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Hahn, Theoretical Limitations of Self-Attention in Neural Sequence Models, §6"
      url: "https://aclanthology.org/2020.tacl-1.11.pdf"
---

## Statement

Let $\Sigma$ be a finite alphabet of size $m\ge1$. Let $r,s,q,q'$ be probability vectors on $\Sigma$, and let $\epsilon\ge0$ satisfy $\|q-q'\|_1\le\epsilon$. For $\operatorname{CE}(r,q)=-\sum_a r(a)\log q(a)$, with value $+\infty$ if $r(a)>0=q(a)$, and $H(r)=-\sum_{a:r(a)>0}r(a)\log r(a)$, the paired loss satisfies

$$
\frac12\operatorname{CE}(r,q)+\frac12\operatorname{CE}(s,q')\ge H\!\left(\frac{r+s}{2}\right)-\log(1+m\epsilon).
$$

In particular, predictions whose $\ell^1$ distance tends to zero cannot have asymptotic paired loss below the entropy of the mean target law.

## Statement references

[Hahn, §6: paired next-token distributions and cross-entropy lower bounds](https://aclanthology.org/2020.tacl-1.11.pdf)

## Facts & Assumptions

**Given:** Probability vectors $r,s,q,q'$ on a finite alphabet, with $\|q-q'\|_1\le\epsilon$.

## Proof

1.1 Put $\bar r=(r+s)/2$ and $\bar q=(q+q')/2$. For every $a\in\Sigma$, $q(a)\le\bar q(a)+\epsilon$ and $q'(a)\le\bar q(a)+\epsilon$. Define $w(a)=(\bar q(a)+\epsilon)/(1+m\epsilon)$; its coordinates are nonnegative and sum to one. Monotonicity of $-\log$ on positive reals gives $\frac12\operatorname{CE}(r,q)+\frac12\operatorname{CE}(s,q')\ge \operatorname{CE}(\bar r,w)-\log(1+m\epsilon)$. If a term on the left is infinite, the claimed inequality is immediate; otherwise this comparison is valid on each target-positive coordinate. [given, construct, algebra]

2.1 For any probability vectors $\bar r,w$, if $w(a)=0<\bar r(a)$ then $\operatorname{CE}(\bar r,w)=+\infty$. Otherwise $\operatorname{CE}(\bar r,w)-H(\bar r)=\sum_{a:\bar r(a)>0}\bar r(a)\log(\bar r(a)/w(a))\ge0$: applying $\log t\le t-1$ to $t=w(a)/\bar r(a)$ gives the sum at least $\sum_{a:\bar r(a)>0}(\bar r(a)-w(a))\ge0$. Combining with step 1.1 proves the bound. [step 1.1, given, algebra] ∎