---
title: Binomial approximation for vertex degree counts
status: draft
research_item: rem-expander-sync-degree-count-approximation
dependency_level: 3
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 35, Section 6.2 opening paragraph
      statement: The article states that the degree count X_k is not binomial because
        degrees of different vertices are dependent, but is well approximated by
        Bin(n,f_k).
      hypotheses: G(n,p) and the degree-count notation of Section 6.2; the paragraph
        gives no approximation metric or error estimate.
      reading_limits: The opening paragraph of Section 6.2 was inspected in the
        supplied article text. This citation attributes the article's claim and
        is not used to prove the estimate below.
---

PDF p. 35: ` Section 6.2 opening paragraph `

## Prerequisites

- [def-expander-sync-degree-counts](item-def-expander-sync-degree-counts)
- [prop-expander-prereq-degree-law-and-dependence](item-prop-expander-prereq-degree-law-and-dependence)
- [prop-expander-prereq-degree-count-first-moment](item-prop-expander-prereq-degree-count-first-moment)
- [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)
- [math:lem-bernoulli-and-binomial-mean-and-variance](https://alphabetamath.cc/item/lem-bernoulli-and-binomial-mean-and-variance)
- [math:thm-markov-inequality](https://alphabetamath.cc/item/thm-markov-inequality)
- [math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution)
- [math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)
- [math:thm-linearity-of-expectation](https://alphabetamath.cc/item/thm-linearity-of-expectation)
- [math:def-independence-of-finite-random-variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables)
- [math:def-variance-and-covariance](https://alphabetamath.cc/item/def-variance-and-covariance)
- [math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)


## Statement

Let $n\ge1$, $p\in[0,1]$, and $k\in\mathbb Z$. In the random simple graph $G(n,p)$, each possible edge occurs independently with probability $p$; $d(v)$ is the number of neighbors of $v$, $X_k$ counts the vertices with $d(v)=k$, and $f_k=\mathbb P(\operatorname{Bin}(n-1,p)=k)$. Here $\operatorname{Bin}(m,q)$ denotes the law of a sum of $m$ independent variables, each equal to one with probability $q$ and zero otherwise.

For $Y$ with law $\operatorname{Bin}(n,f_k)$, define the total-variation distance between the laws of $X_k$ and $Y$ by $d_{\mathrm{TV}}(\mathcal L(X_k),\mathcal L(Y))=\sup_{A\subseteq\{0,\ldots,n\}}|\mathbb P(X_k\in A)-\mathbb P(Y\in A)|$. Then $d_{\mathrm{TV}}(\mathcal L(X_k),\mathcal L(Y))\le\min\{1,2nf_k,2n(1-f_k)\}$. In particular, along any sequence of such models for which $n\min\{f_k,1-f_k\}\to0$, this distance tends to zero.

The degrees are dependent when $n\ge2$ and $0<p<1$, and $X_k$ need not be binomial. The article describes $X_k$ as well approximated by $\operatorname{Bin}(n,f_k)$ without specifying a metric or error estimate in its opening paragraph. The estimate above gives a precise, limited regime for that comparison; it does not establish an approximation in every parameter regime.

## Facts & Assumptions

[F1] The degree-count definition supplies $X_k$ and $f_k$ as stated; $X_k$ is a random variable on the finite set of graph outcomes ([def-expander-sync-degree-counts](item-def-expander-sync-degree-counts)).

[F2] Each degree has law $\operatorname{Bin}(n-1,p)$; for distinct vertices the degree covariance is $p(1-p)$ ([prop-expander-prereq-degree-law-and-dependence](item-prop-expander-prereq-degree-law-and-dependence)).

[F3] For identically distributed integer-valued variables, the expected number equal to $k$ is $n$ times their common probability of equaling $k$ ([prop-expander-prereq-degree-count-first-moment](item-prop-expander-prereq-degree-count-first-moment)).

[F4] A $\operatorname{Bin}(n,q)$ variable has mean $nq$ ([math:lem-bernoulli-and-binomial-mean-and-variance](https://alphabetamath.cc/item/lem-bernoulli-and-binomial-mean-and-variance)).

[F5] For a nonnegative random variable $Z$ on a finite probability space and $a>0$, $\mathbb P(Z\ge a)\le\mathbb E Z/a$ ([math:thm-markov-inequality](https://alphabetamath.cc/item/thm-markov-inequality)). Probabilities of events in a finite probability space are nonnegative and additive over disjoint events ([math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)).

[F6] A real random variable on a finite probability space is a function on its outcomes; its law assigns to each value the probability of its inverse-image event ([math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution)).

[F7] Expectation on a finite probability space is the weighted sum over outcomes ([math:def-expectation-on-a-finite-probability-space](https://alphabetamath.cc/item/def-expectation-on-a-finite-probability-space)). It is linear for finite families without independence ([math:thm-linearity-of-expectation](https://alphabetamath.cc/item/thm-linearity-of-expectation)).

[F8] Finite-valued variables are independent when probabilities of joint specified values factor into the marginal probabilities; mutual independence requires this for every subfamily ([math:def-independence-of-finite-random-variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables)).

[F9] For real variables $U,V$ on one finite probability space, covariance is $\operatorname{Cov}(U,V)=\mathbb E[(U-\mathbb E U)(V-\mathbb E V)]$ ([math:def-variance-and-covariance](https://alphabetamath.cc/item/def-variance-and-covariance)).

[F10] A Bernoulli$(q)$ variable takes values one and zero with probabilities $q$ and $1-q$; a $\operatorname{Bin}(m,q)$ variable is a sum of $m$ mutually independent Bernoulli$(q)$ variables, with the empty sum zero ([math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)).

## Proof

**Given:** The graph, parameters, degree count, and comparison law in the Statement.

**Goal:** Prove the displayed estimate and the qualifications about dependence and binomiality.

1.1 Let $\mu(j)$ be the probability mass at $j$ of the prescribed $\operatorname{Bin}(n,f_k)$ law, for $j\in\{0,\ldots,n\}$. These masses are nonnegative and sum to one because this law is supported on $\{0,\ldots,n\}$. Hence they define a finite probability space with outcome set $\Omega_Y=\{0,\ldots,n\}$ and weight $\mu(j)$ at $j$. The function $j\mapsto j$ on this space has the required law by [F6]. Each event probability in the comparison distance depends only on that law, so we may use this finite realization as $Y$ in the rest of the proof; the resulting distance applies to any realization of the prescribed law. No common probability space or coupling of $X_k$ and $Y$ is required. [given, F5, F6, construct]

1.2 To establish the dependence implication locally, suppose $U,V$ are independent real variables on a common finite probability space. Put $S=U(\Omega)$ and $T=V(\Omega)$. By [F5] and [F7], grouping the expectation in [F9] according to the joint values and then using [F8] gives $\operatorname{Cov}(U,V)=\sum_{a\in S}\sum_{b\in T}(a-\mathbb E U)(b-\mathbb E V)\mathbb P(U=a)\mathbb P(V=b)$. Distributivity factors this into $\bigl(\sum_{a\in S}(a-\mathbb E U)\mathbb P(U=a)\bigr)\bigl(\sum_{b\in T}(b-\mathbb E V)\mathbb P(V=b)\bigr)=0$, since the marginal probabilities sum to one and the marginal weighted sums are $\mathbb E U$ and $\mathbb E V$. Thus independent finite-space variables have zero covariance. The degrees are such variables by [F1] and [F6]. When $n\ge2$ and $0<p<1$, [F2] gives $\operatorname{Cov}(d(u),d(v))=p(1-p)>0$ for distinct vertices, so these degrees cannot be independent. [F1, F2, F5, F6, F7, F8, F9, algebra]

2.1 By the single-vertex degree law and the first-moment identity, $\mathbb E X_k=nf_k$. Grouping a finite expectation sum according to the values of its variable gives $\mathbb E Z=\sum_{j=0}^n j\mathbb P(Z=j)$ for any finite-space variable $Z$ taking values in $\{0,\ldots,n\}$. Thus expectation depends only on this finite law, and [F4] gives $\mathbb E Y=nf_k$ for the realization in step 1.1. Both $X_k$ and $Y$ take values in $\{0,\ldots,n\}$. By [F7], the constant variable $n$ on either space has expectation $n\sum_\omega w(\omega)=n$, and linearity gives $\mathbb E(n-Z)=n-\mathbb E Z$ for $Z=X_k$ and separately for $Z=Y$. Applying [F5] at threshold one to the nonnegative integer-valued variables $X_k$, $Y$, $n-X_k$, and $n-Y$ therefore gives $\mathbb P(X_k\ne0)\le nf_k$, $\mathbb P(Y\ne0)\le nf_k$, $\mathbb P(X_k\ne n)\le n(1-f_k)$, and $\mathbb P(Y\ne n)\le n(1-f_k)$. [F1, F2, F3, F4, F5, F7, step 1.1, algebra]

3.1 For any $A\subseteq\{0,\ldots,n\}$, if $0\notin A$, both probabilities of $A$ are bounded by the corresponding probabilities of being nonzero; if $0\in A$, apply the same observation to the complement of $A$. In either case their absolute difference is at most $\mathbb P(X_k\ne0)+\mathbb P(Y\ne0)\le2nf_k$. The same argument with $n$ in place of $0$ bounds the difference by $2n(1-f_k)$. It is also at most one. Taking the supremum proves the displayed bound, and the stated convergence follows immediately. [F5, step 2.1, algebra]

4.1 For $n=2$, let $A_{12}$ be one if the sole possible edge occurs and zero otherwise. Both degrees equal $A_{12}$, so for $k=1$ the definition in [F1] gives $X_1=2A_{12}$. Hence for $0<p<1$, $\mathbb P(X_1=0)=1-p$, $\mathbb P(X_1=2)=p$, and $\mathbb P(X_1=1)=0$. To rule out any binomial law, consider $\operatorname{Bin}(m,q)$ with an integer $m\ge0$ and $q\in[0,1]$. If $m=0$ or $q\in\{0,1\}$, [F10] makes this law constant, unlike $X_1$. Otherwise $m\ge1$ and $0<q<1$. The event that exactly one of its Bernoulli summands is one is the disjoint union of $m$ events, each having probability $q(1-q)^{m-1}$ by [F8]. Thus [F5] gives probability $mq(1-q)^{m-1}>0$ to the value one, whereas $X_1$ has probability zero there. This proves that $X_1$ is not binomial and completes the remaining assertions. [given, F1, F5, F8, F10, algebra] ∎

## Source notes

The article states the unquantified comparison and its explanation in Section 6.2. The bound above is a local consequence of the cited mathematical suppliers, not a proof imported from the article.
