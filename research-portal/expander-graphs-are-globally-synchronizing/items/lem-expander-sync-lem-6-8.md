---
id: lem-expander-sync-lem-6-8
title: Upper degree-tail count estimate — Lemma 6.8
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-degree-counts
  - prop-expander-prereq-binomial-tail-ratio-tool
  - prop-expander-prereq-degree-law-and-dependence
  - prop-expander-prereq-degree-count-first-moment
  - math:lem-indicator-expectation-and-products
  - math:thm-linearity-of-expectation
dependency_roles:
  def-expander-sync-degree-counts: mathematical-premise
  prop-expander-prereq-binomial-tail-ratio-tool: mathematical-premise
  prop-expander-prereq-degree-law-and-dependence: mathematical-premise
  prop-expander-prereq-degree-count-first-moment: mathematical-premise
  math:lem-indicator-expectation-and-products: mathematical-premise
  math:thm-linearity-of-expectation: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 36, Lemma 6.8 and proof
      statement: For c > 0 and k at least (1+c)pn, the expected number of vertices of
        degree at least k is at most (1+c^{-1}) times the expected number of
        vertices of degree k.
      hypotheses: The degree counts are those of G(n,p), as defined at the beginning
        of Section 6.2; k is an integer degree threshold.
      reading_limits: The supplied extracted article text at Section 6.2 and Lemma 6.8
        was inspected. This reference attributes the article claim; the proof
        below uses the listed mathematical suppliers.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 3
---

## Statement

Let $n\ge1$ be an integer and $p\in[0,1]$. In the random simple graph $G(n,p)$ on $n$ vertices, each possible edge occurs independently with probability $p$. Let $X_k$ and $X_{\ge k}$ count the vertices of degree exactly $k$ and at least $k$, respectively. For every $c>0$ and integer $k\ge(1+c)pn$,

$$\mathbb E X_{\ge k}\le(1+c^{-1})\mathbb E X_k.$$

Writing $f_i=\mathbb P(\operatorname{Bin}(n-1,p)=i)$, the interior calculation used in the proof is $f_i/f_{i-1}=(n-i)p/(i(1-p))\le1/(1+c)$ whenever $0<p<1$ and $1\le i\le n-1$ with $i\ge(1+c)pn$.

## Statement references

[[def-expander-sync-degree-counts]]

## Facts & Assumptions

**Given:** The graph, $n$, $p$, $c$ and $k$ in the Statement.

**Goal:** Establish the displayed ratio in its stated range and the expected-count inequality.

[F1] Each vertex degree is the number of incident edges and has the $\operatorname{Bin}(n-1,p)$ law; degrees are identically distributed. The counts $X_k$ and $X_{\ge k}$ are sums of the corresponding degree-event indicators. ([[prop-expander-prereq-degree-law-and-dependence]], [[def-expander-sync-degree-counts]])

[F2] For $0<p<1$, the binomial masses satisfy $f_i/f_{i-1}=(n-i)p/(i(1-p))$ for $1\le i\le n-1$. If consecutive upper-tail masses from $k$ onward are bounded by a fixed ratio $q\in[0,1)$ and $0\le k\le n-1$, then $\mathbb P(\operatorname{Bin}(n-1,p)\ge k)\le f_k/(1-q)$. ([[prop-expander-prereq-binomial-tail-ratio-tool]])

[F3] For identically distributed integer-valued vertex degrees, $\mathbb E X_k=n\mathbb P(d(1)=k)$. ([[prop-expander-prereq-degree-count-first-moment]])

[F4] The expectation of an event indicator is its probability, and expectation is linear over finite sums. ([[math:lem-indicator-expectation-and-products]], [[math:thm-linearity-of-expectation]])

## Proof

**Proof technique:** direct.

1.1 Suppose $0<p<1$ and $1\le i\le n-1$ with $i\ge(1+c)pn$. By [F2], the ratio is $(n-i)p/(i(1-p))$. Since $i\ge(1+c)pn>0$, we have $np/i\le1/(1+c)$, and therefore $(n-i)p/(i(1-p))=(np/i-p)/(1-p)\le(1/(1+c)-p)/(1-p)\le1/(1+c)$. This proves the stated ratio bound. [given, F2, algebra]

2.1 Put $q=1/(1+c)$, so $0<q<1$. If $0<p<1$ and $k\le n-1$, then $k\ge(1+c)pn>0$, and step 1.1 applies to every consecutive mass ratio from $f_k$ upward. The upper-tail bound in [F2] gives $\mathbb P(d(1)\ge k)\le f_k/(1-q)=(1+c^{-1})f_k$. By [F1] and [F4], $\mathbb E X_{\ge k}=n\mathbb P(d(1)\ge k)$; by [F3], $\mathbb E X_k=n f_k$. The desired inequality follows. [given, F1, F2, F3, F4, step 1.1, algebra]

3.1 If $k>n-1$, every vertex degree is at most $n-1$, so both counts vanish. It remains to consider $p=0$ with $k\le n-1$: then the graph has no edges almost surely and $k\ge0$. If $k=0$, both counts equal $n$ almost surely; if $k>0$, both vanish. For $p=1$, the threshold gives $k\ge(1+c)n>n-1$, already covered. These cases together with step 2.1 establish the inequality for all stated parameters. [given, F1, step 2.1, algebra] ∎

## Source notes

Lemma 6.8 of the cited article supplies the attribution for the degree-tail estimate. The argument above uses the stated mathematical suppliers.
