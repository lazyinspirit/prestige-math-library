---
title: Lower degree-tail count estimate — Lemma 6.7
status: published
research_item: lem-expander-sync-lem-6-7
dependency_level: 3
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 35–36, Lemma 6.7 and proof
      statement: For 0 < c < 1, p ≤ c/(1−c²), and k ≤ (1−c)pn, the expected number of
        vertices of degree at most k is at most c⁻² times the expected number of
        vertices of degree exactly k.
      hypotheses: G(n,p) is the simple independent-edge random graph in Section 6.2; k
        is an integer degree threshold.
      reading_limits: The supplied extracted article text at Lemma 6.7 and its proof
        was inspected. This citation attributes the article claim; the argument
        below uses the stated mathematical suppliers.
---

PDF p. 35: ` Lemma 6.7 and proof `; PDF p. 36: ` Lemma 6.7 and proof `

## Prerequisites

- [def-expander-sync-degree-counts](item-def-expander-sync-degree-counts)
- [prop-expander-prereq-degree-law-and-dependence](item-prop-expander-prereq-degree-law-and-dependence)
- [prop-expander-prereq-degree-count-first-moment](item-prop-expander-prereq-degree-count-first-moment)
- [prop-expander-prereq-binomial-tail-ratio-tool](item-prop-expander-prereq-binomial-tail-ratio-tool)
- [math:thm-linearity-of-expectation](https://alphabetamath.cc/item/thm-linearity-of-expectation)


## Statement

Let $n\ge1$ be an integer and $G(n,p)$ be the random simple graph on $[n]$ whose edges occur independently with probability $p\in[0,1]$. For an integer $k$, let $X_k$ count vertices of degree exactly $k$ and $X_{\le k}$ count vertices of degree at most $k$. If $0<c<1$, $p\le c/(1-c^2)$, and $k\le(1-c)pn$, then $\mathbb E X_{\le k}\le c^{-2}\mathbb E X_k$.

## Facts & Assumptions

**Given:** The graph, parameters, and integer threshold in the Statement.

**Goal:** Prove the stated bound on the two expected degree counts.

[F1] For $f_j=\mathbb P(\operatorname{Bin}(n-1,p)=j)$, each vertex degree has this binomial distribution. The binomial law is that of a sum of $n-1$ independent Bernoulli$(p)$ variables. The counts $X_j$ and $X_{\le k}$ have the meanings in the Statement. ([def-expander-sync-degree-counts](item-def-expander-sync-degree-counts), [prop-expander-prereq-degree-law-and-dependence](item-prop-expander-prereq-degree-law-and-dependence))

[F2] For identically distributed integer-valued variables, the expected count attaining $j$ is $n$ times their common probability of attaining $j$; finite expectation is linear. ([prop-expander-prereq-degree-count-first-moment](item-prop-expander-prereq-degree-count-first-moment), [math:thm-linearity-of-expectation](https://alphabetamath.cc/item/thm-linearity-of-expectation))

[F3] For $0<p<1$, the binomial masses satisfy $f_{i-1}/f_i=i(1-p)/((n-i)p)$ for $1\le i\le n-1$. If $0\le q<1$ and these adjacent masses obey $f_{i-1}\le qf_i$ for $1\le i\le k$, where $0\le k\le n-1$, then $\mathbb P(\operatorname{Bin}(n-1,p)\le k)\le f_k/(1-q)$. ([prop-expander-prereq-binomial-tail-ratio-tool](item-prop-expander-prereq-binomial-tail-ratio-tool))

## Proof

**Proof technique:** direct.

1.1 Every degree lies in $\{0,\ldots,n-1\}$. If $k<0$, both counts vanish. If $p=0$, every degree is zero; the threshold condition gives $k\le0$, so either both counts vanish or both equal $n$. If $p=1$, the hypothesis $1\le c/(1-c^2)$ implies $c^2+c\ge1$, hence $c>1/2$. For $n\ge2$, $k\le(1-c)n<n-1$, so both counts vanish because every degree is $n-1$. For $n=1$, the only nonnegative admissible threshold is $k=0$, and both counts equal one. Thus the claim holds in these cases. [given, F1, algebra]

1.2 Now suppose $0<p<1$ and $k\ge0$. Since $(1-c)pn<n$, the integer $k$ is at most $n-1$. For every integer $1\le i\le k$, the denominators below are positive and $i\le(1-c)pn$ gives $f_{i-1}/f_i\le (1-c)(1-p)/(1-(1-c)p)\le1-c$. The last inequality follows from $1-p\le1-(1-c)p$. Set $q=1-c$; then $0<q<1$. By the lower-tail bound in [F3], $\mathbb P(\operatorname{Bin}(n-1,p)\le k)\le f_k/c$. This also covers $k=0$, when the adjacent-mass condition is empty. [given, F3, algebra]

2.1 By [F1] and [F2], $\mathbb E X_j=nf_j$ for each degree $j$. Since $X_{\le k}=\sum_{j=0}^{k}X_j$ in the present case, finite linearity gives $\mathbb E X_{\le k}=n\mathbb P(\operatorname{Bin}(n-1,p)\le k)\le c^{-1}nf_k\le c^{-2}\mathbb E X_k$, as $0<c<1$. Together with step 1.1, this proves the claim. [F1, F2, step 1.1, step 1.2, algebra] ∎

## Source notes

The statement is attributed to the article's Lemma 6.7. The proof above uses the listed suppliers and a stronger adjacent-mass bound in the interior case.
