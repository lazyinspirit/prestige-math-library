---
id: ex-binary-f-and-renyi-divergences
kind: example
title: Binary f-, KL-, and Rényi divergences
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-finite-probability-vector
  - def-finite-f-divergence
  - def-finite-kullback-leibler-divergence
  - def-finite-renyi-divergence
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 7, §§7.1 and 7.12"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
    - title: "Tim van Erven and Peter Harremoës, Rényi Divergence and Kullback-Leibler Divergence, §§I-A and II-A"
      url: "https://arxiv.org/pdf/1206.2459"
---

## Example

On $\mathcal X=\{0,1\}$, take $P=(3/4,1/4)$ and $Q=(1/4,3/4)$. Their
supports agree and all coordinates are positive.

## Facts & Assumptions

**Given:** The displayed $P,Q$ and the definitions of f-, KL-, and Rényi
divergence below.

[F1] [[def-finite-probability-vector]]: a finite probability vector has
nonnegative coordinates summing to one.

[F2] [[def-finite-kullback-leibler-divergence]]: $D(P\|Q)=
\sum_{x:p_x>0}p_x\log(p_x/q_x)$ with natural logarithms.

[F3] [[def-finite-renyi-divergence]]: for $\alpha\ne1$,
$D_\alpha(P\|Q)=\log S_\alpha(P,Q)/(\alpha-1)$ with the support conventions
stated in its Definition.

[F4] [[def-finite-f-divergence]]: for $f(t)=\frac12|t-1|$, the
f-divergence uses the coordinate terms $q_xf(p_x/q_x)$.

## Verification

**Given:** $P=(3/4,1/4)$ and $Q=(1/4,3/4)$.

1.1 By [F2], $D(P\|Q)=\frac34\log3+\frac14\log(1/3) =\frac12\log3$. The direction is $P$ to $Q$; reversing the vectors gives the same value here by symmetry. [F1, F2, algebra]

1.2 For order $1/2$, each affinity term is $\sqrt{p_xq_x}$, so $S_{1/2}=2\sqrt{3/16}=\sqrt3/2$ by [F3]. Therefore $D_{1/2}=-2\log(\sqrt3/2)=\log(4/3)$. [F3, algebra]

1.3 For order $2$, [F3] gives $S_2=(9/16)/(1/4)+(1/16)/(3/4)=9/4+1/12=7/3$, so $D_2=\log(7/3)$. [F3, algebra]

2.1 The generator in [F4] gives $D_f(P\|Q)=\frac12\sum_x|p_x-q_x| =\frac12(1/2+1/2)=1/2$. [F1, F4, algebra] ∎
