---
title: Parameter and critical-step estimates in general amplification
status: published
research_item: lem-expander-sync-amplification-parameter-bounds
dependency_level: 14
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 26–27, proof of Theorem 1.10
      statement: The proof states the numerical consequences and the critical-step
        bound displayed in this lemma.
      hypotheses: Theorem 1.10 and the two-stage amplification construction in its proof.
      reading_limits: The supplied article text at the cited passage was inspected for
        attribution. The article is not a proof premise for this lemma.
---

PDF p. 26: ` Proof of Theorem 1.10, numerical consequences and critical step `; PDF p. 27: ` Proof of Theorem 1.10, numerical consequences and critical step `

## Prerequisites

- [alg-expander-sync-amplification-construction](item-alg-expander-sync-amplification-construction)
- [lem-expander-sync-elementary-angle-bounds](item-lem-expander-sync-elementary-angle-bounds)
- [prop-expander-prereq-geometric-growth-budget](item-prop-expander-prereq-geometric-growth-budget)


## Statement

Use the graph, state, parameters and small-stage construction of [alg-expander-sync-amplification-construction](item-alg-expander-sync-amplification-construction). In particular, $0<\alpha\le1/5$, $-1<c^-\le0\le c^+$, $c^+>c^-$, $a=1+c^-$, $B=1+c^++\alpha$, $L=\log(B/(2\alpha))$, $\delta=a/(2(c^+-c^-))$, $q=1+\delta$, and $32\alpha(1+4c^+-3c^-)L/a^2<1$. The logarithm is natural. Let $c_0=|\mathcal C_{\pi/2}|>0$, where $\mathcal C_\beta$ is the phase tail defined in the construction, and let $c_k$ be its constructed small-stage mass bounds. Then $L\ge\log 3>1$, $\alpha/a<1/32$, and $8\alpha/a<1$.

Let $k^*$ be the first small-stage index at which either $c_k\ge\alpha n$ or both $c_k\ge q^kc_0$ and $q^kc_0\ge Bc_0/(2\alpha)$. Then $k^*$ exists and $k^*\le\lceil L/\log q\rceil\le\max\{1,(1+4c^+-3c^-)L/a\}$. The ceiling is the least integer at least its argument.

## Facts & Assumptions

[F1] Under the stated hypotheses, the construction has $c_0>0$, $L\ge\log3>1$ and $q>1$. Before its small-stage cap $\alpha n$ is reached, its mass bounds satisfy $c_k\ge q^kc_0$; the construction continues until that cap or index $K=\lceil L/\log q\rceil$ ([alg-expander-sync-amplification-construction](item-alg-expander-sync-amplification-construction)).

[F2] For $x\ge1$, $\lceil x\rceil\le2x$, and for $x\ge0$, $\log(1+x)\ge2x/(2+x)$ ([lem-expander-sync-elementary-angle-bounds](item-lem-expander-sync-elementary-angle-bounds)).

[F3] The ceiling exists, and for $q>1$ the logarithm and geometric growth give $q^{\lceil\log R/\log q\rceil}\ge R$ whenever $R>1$ ([prop-expander-prereq-geometric-growth-budget](item-prop-expander-prereq-geometric-growth-budget)).

## Proof

**Given:** The hypotheses and construction in the Statement.

**Goal:** Establish the numerical estimates, existence of $k^*$ and its stated upper bounds.

1.1 Set $D=1+4c^+-3c^-=a+4(c^+-c^-)$. Thus $D\ge a>0$. By [F1], $L>1$, so the assumed inequality implies $32\alpha/a<1$ because $DL/a>1$. Consequently $\alpha/a<1/32$ and $8\alpha/a<1/4<1$. The bound on $L$ is also in [F1]. [given, F1, algebra]

1.2 Put $K=\lceil L/\log q\rceil$. Since $B/(2\alpha)=e^L>1$, [F3] gives $q^Kc_0\ge Bc_0/(2\alpha)$. If the small-stage cap is reached at or before $K$, the first stopping alternative holds. Otherwise [F1] gives $c_K\ge q^Kc_0$, so the second alternative holds at $K$. Hence a first such index exists and $k^*\le K$. This also covers a cap already reached at index zero. [F1, F3, algebra]

2.1 Write $x=L/\log q>0$. If $x\le1$, then $\lceil x\rceil=1$. If $x\ge1$, [F2] gives $\lceil x\rceil\le2L/\log q$. In either case $K\le\max\{1,2L/\log q\}$. Also [F2] gives $2/\log q\le(2+\delta)/\delta$. Using $\delta=a/(2(c^+-c^-))$, the latter ratio equals $(a+4(c^+-c^-))/a=D/a$. Combining these inequalities with step 1.2 proves the claimed bounds. [F1, F2, step 1.2, algebra] ∎



The numerical consequences and critical-step estimate are attributed to the proof of Theorem 1.10 in [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pp. 26–27. The argument above uses the declared suppliers.

## Source attribution

The numerical consequences and critical-step estimate are attributed to the proof of Theorem 1.10 in [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pp. 26–27. The argument above uses the declared suppliers.
