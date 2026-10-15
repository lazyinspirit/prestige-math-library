---
id: lem-dobrushin-contraction-from-density-ratios
kind: lemma
title: "Uniform density ratios bound the Dobrushin coefficient"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-dobrushin-coefficient-for-probability-kernels
  - def-total-variation-distance-for-probability-laws
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §3.3 and Appendix A.4"
      url: "https://arxiv.org/pdf/math/0508594"
    - title: "Hans R. Künsch, Recursive Monte Carlo Filters: Algorithms and Theoretical Analysis, §4.3.1"
      url: "https://arxiv.org/pdf/math/0602211"
---

## Statement

Let $K:S\rightsquigarrow E$ be a probability kernel on a nonempty measurable source space. Suppose a sigma-finite measure $\lambda$ on $E$ and probability densities $k_x$ satisfy $K(x,A)=\int_A k_x\,d\lambda$ for every $x\in S$ and measurable $A\subseteq E$. If $C\ge1$ and, for every $x,x'\in S$, $k_x(z)\le Ck_{x'}(z)$ for $\lambda$-almost every $z$, then the Dobrushin coefficient from [[def-dobrushin-coefficient-for-probability-kernels]] obeys
$$\delta(K)\le1-C^{-1}.$$

## Facts & Assumptions

**Given:** The probability kernel, common dominating measure, normalized densities, and pairwise density-ratio bound in the Statement.

[F1] [[def-dobrushin-coefficient-for-probability-kernels]]: $\delta(K)$ is the supremum over $x,x'$ of the event-supremum total-variation distance between $K(x,\cdot)$ and $K(x',\cdot)$.

[F2] [[def-total-variation-distance-for-probability-laws]]: For probability measures $P,Q$, $\lVert P-Q\rVert_{\mathrm{TV}}=\sup_A|P(A)-Q(A)|$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix $x,x'\in S$ and write $p=k_x$, $q=k_{x'}$. The assumed ordered-pair bound gives $p\le Cq$ almost everywhere, so $q\ge p/C$. Where $p\le q$, $\min(p,q)=p\ge p/C$; where $p>q$, the same inequality $p\le Cq$ gives $\min(p,q)=q\ge p/C$. Hence $\int\min(p,q)\,d\lambda\ge C^{-1}\int p\,d\lambda=C^{-1}$. [given, algebra]

1.2 Let $A_+=\{z:p(z)\ge q(z)\}$. For every measurable $A$, $|\int_A(p-q)\,d\lambda|\le\int(p-q)^+\,d\lambda$. Since $\int(p-q)=0$, the positive and negative parts have equal integral, and $\int(p-q)^+\,d\lambda=1-\int\min(p,q)\,d\lambda$; equality is attained at $A_+$. Thus [F2] gives $\lVert K(x,\cdot)-K(x',\cdot)\rVert_{\mathrm{TV}}=1-\int\min(p,q)\,d\lambda\le1-C^{-1}$ by step 1.1. [F1, F2, step 1.1, algebra]

2.1 The bound in step 1.2 holds for every pair $x,x'$, so taking their supremum in [F1] proves $\delta(K)\le1-C^{-1}$. [F1, step 1.2] ∎
