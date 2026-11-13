---
title: Expected centered-adjacency norm — Proposition 6.3
status: published
research_item: prop-expander-sync-prop-6-3
dependency_level: 8
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 33–34, Proposition 6.3 and its proof; PDF p. 6 for centering
      statement: For every C greater than 2√2, there is n₀(C) such that E||Δ_A|| ≤
        C√(np(1−p)) for all n ≥ n₀(C) and every p in (0,1).
      hypotheses: A is the adjacency matrix of the loop-free G(n,p), with reference
        degree pn and Δ_A = A − pJ.
      reading_limits: The supplied article text at the centering convention and
        Proposition 6.3 was inspected. This reference attributes the assertion
        and is not a premise for the corrected estimate or counterexamples.
---

PDF p. 33: ` Proposition 6.3 and proof `; PDF p. 34: ` Proposition 6.3 and proof `

## Prerequisites

- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)
- [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)
- [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)
- [lem-expander-sync-moment-norm-estimate](item-lem-expander-sync-moment-norm-estimate)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-product-of-finite-probability-spaces](https://alphabetamath.cc/item/def-product-of-finite-probability-spaces)
- [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)
- [math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)
- [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm)
- [math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution)
- [math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)


## Statement

Assume the Axiom of Choice. Let $n\ge1$ and $\ell\ge1$ be integers and $p\in[0,1]$. Let $A$ be the adjacency matrix of the loop-free random graph $G(n,p)$, in which distinct unordered edges occur independently with probability $p$. Put $\Delta_A=A-pJ$, where $J$ is the all-ones matrix, and let $\|\cdot\|$ be the Euclidean operator norm. With $q=2p(1-p)$,

$$\mathbb E\|\Delta_A\|\le p+q^{1/(2\ell)}(2\sqrt n+2\sqrt{2\ell})e^{\log n/(2\ell)}.$$

Proposition 6.3 of the article asserts that for every $C>2\sqrt2$ there is $n_0(C)$ such that, for all $n\ge n_0(C)$ and every $p\in(0,1)$, $\mathbb E\|\Delta_A\|\le C\sqrt{np(1-p)}$. This uniform assertion is false. It fails both for parameters approaching $p=1$ and along an explicit sequence with $p=1/n$.

## Statement references

[def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)

[def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)

[def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)

[def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution)

[math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)

## Facts & Assumptions

[F1] Under the stated hypotheses, the corrected moment estimate gives the displayed upper bound ([lem-expander-sync-moment-norm-estimate](item-lem-expander-sync-moment-norm-estimate), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

[F2] The adjacency entry $A_{xy}$ is the indicator of $\{x,y\}\in E$. The graph has zero diagonal, $\Delta_A=A-pJ$, and the operator norm is the supremum of $\|\Delta_A v\|_2$ over Euclidean unit vectors $v$ ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation), [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi), [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices), [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)).

[F3] Independent edge indicators have product probabilities. The number of $k$-element subsets of an $m$-element set is $\binom mk$, and $k!=1\cdots k$ counts their orders ([math:def-product-of-finite-probability-spaces](https://alphabetamath.cc/item/def-product-of-finite-probability-spaces), [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient), [math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)).

[F4] The Euclidean norm satisfies the triangle and Cauchy–Schwarz inequalities ([math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm)).

[F5] A real random variable on a finite probability space $(\Omega,w)$ is a function $X:\Omega\to\mathbb R$. Its expectation is $\mathbb E[X]=\sum_{\omega\in\Omega}X(\omega)w(\omega)$, where the outcome weights are nonnegative and sum to one ([math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution), [math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space), [math:def-product-of-finite-probability-spaces](https://alphabetamath.cc/item/def-product-of-finite-probability-spaces)).

## Proof

**Given:** The graph, parameters and Choice assumption in the Statement.

**Goal:** Establish the corrected estimate and refute the article's uniform assertion in both stated regimes.

1.1 Take $\Omega$ to be the finite set of assignments of zero or one to the $\binom n2$ unordered edge coordinates, with the Bernoulli product weights $w$ from [F3]. By [F2] and [F4], the function $X(\omega)=\|A(\omega)-pJ\|$ is nonnegative and real valued, hence is a finite real random variable by [F5]; its expectation is the finite weighted sum there. The graph law, centering and norm are those in [F1]. Applying that estimate proves the displayed inequality. [given, F1, F2, F3, F4, F5]

1.2 For a second counterexample fix an integer $k\ge1$, put $n=4^{k+2}k!$ and $p=1/n$, and partition the vertices into sets $U,V$ each of size $m=n/2$. For $u\in U$, let $D_u$ count its neighbors in $V$. The sets of edge indicators defining distinct $D_u$ are disjoint. By [F3], the $D_u$ are independent and $\mathbb P(D_u=k)=\binom mk n^{-k}(1-1/n)^{m-k}$. Since $n\ge4k$, each factor of $m(m-1)\cdots(m-k+1)$ is at least $n/4$. Counting ordered selections gives $\binom mk k!=m(m-1)\cdots(m-k+1)$. Also $(1-1/n)^{m-k}\ge1-(m-k)/n\ge1/2$, by induction. Therefore $\mathbb P(D_u=k)\ge q_0:=1/(2\,4^k k!)$. [given, F2, F3, algebra, induction]

2.1 Fix $C>2\sqrt2$ and any integer $n\ge2$, and choose $p=1-1/(16C^2n)$. Then $0<p<1$ and $p>1/2$. By [F2], every diagonal entry of $\Delta_A$ equals $-p$; applying it to a coordinate unit vector gives $\|\Delta_A\|\ge p$ for every graph outcome. By [F5], $\mathbb E\|\Delta_A\|=\sum_{\omega\in\Omega}X(\omega)w(\omega)\ge p\sum_{\omega\in\Omega}w(\omega)=p>1/2$, whereas $C\sqrt{np(1-p)}=\sqrt p/4<1/4$. This contradicts the asserted bound for arbitrarily large $n$. [given, F2, F5, step 1.1, algebra]

2.2 By independence, the probability that no $u\in U$ has $D_u=k$ is at most $(1-q_0)^m$. Here $mq_0=4$. For $0\le q<1$, $(1-q)^{-1}\ge1+q$, and induction gives $(1+q)^m\ge1+mq$; hence $(1-q_0)^m\le1/(1+mq_0)=1/5$. Thus, with probability at least $4/5$, the graph has a vertex of total degree at least $k$. [F3, step 1.2, algebra, induction]

3.1 If a vertex has degree $D$, its adjacency column has Euclidean norm $\sqrt D$, so [F2] gives $\|A\|\ge\sqrt D$. By Cauchy–Schwarz, $\|J/n\|\le1$; the constant unit vector gives equality. The triangle inequality then gives $\|A-J/n\|\ge\|A\|-1$. Let $H\subseteq\Omega$ be the event that some vertex has degree at least $k$. On $H$ we have $X\ge\sqrt k-1\ge0$, and outside $H$ we have $X\ge0$. Thus [F5] and step 2.2 give $\mathbb E\|\Delta_A\|\ge\sum_{\omega\in H}X(\omega)w(\omega)\ge(\sqrt k-1)\sum_{\omega\in H}w(\omega)=(\sqrt k-1)\mathbb P(H)\ge(4/5)(\sqrt k-1)$. On the other hand $C\sqrt{np(1-p)}=C\sqrt{1-1/n}<C$. Choose integers $k>(1+5C/4)^2$, arbitrarily large. The resulting even integers $n=4^{k+2}k!$ are arbitrarily large, $p=1/n$ lies in $(0,1)$, and the lower bound exceeds $C$. This contradicts the asserted bound for every proposed threshold $n_0(C)$. [F2, F4, F5, step 1.1, step 2.2, algebra] ∎

## Source notes

The article citation attributes Proposition 6.3; it does not supply a premise for the corrected estimate or either counterexample. The sparse construction counts independent cross-degrees directly.
